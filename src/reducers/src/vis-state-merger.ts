// Copyright (c) 2023 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import uniq from 'lodash.uniq';
import pick from 'lodash.pick';
import flattenDeep from 'lodash.flattendeep';
import {
  arrayInsert,
  getInitialMapLayersForSplitMap,
  applyFiltersToDatasets,
  validateFiltersUpdateDatasets
} from '@kepler.gl/utils';

import {LayerColumns, LayerColumn, Layer} from '@kepler.gl/layers';
import {LAYER_BLENDINGS, OVERLAY_BLENDINGS} from '@kepler.gl/constants';
import {CURRENT_VERSION, VisState, VisStateMergers, KeplerGLSchemaClass} from '@kepler.gl/schemas';

import {
  ParsedLayer,
  ParsedVisState,
  SavedInteractionConfig,
  TooltipInfo,
  SavedEditor,
  ParsedConfig,
  Filter
} from '@kepler.gl/types';
import {KeplerTable, Datasets, assignGpuChannels, resetFilterGpuMode} from '@kepler.gl/table';

/**
 * Merge loaded filters with current state, if no fields or data are loaded
 * save it for later
 *
 */
export function mergeFilters<S extends VisState>(
  state: S,
  filtersToMerge: NonNullable<ParsedConfig['visState']>['filters'],
  fromConfig?: boolean
): S {
  const preserveFilterOrder = fromConfig
    ? filtersToMerge?.map(l => l.id)
    : state.preserveFilterOrder;

  if (!Array.isArray(filtersToMerge) || !filtersToMerge.length) {
    return state;
  }

  const {validated, failed, updatedDatasets} = validateFiltersUpdateDatasets(state, filtersToMerge);
  let updatedFilters = insertItemBasedOnPreservedOrder(
    state.filters,
    validated,
    preserveFilterOrder
  );

  // merge filter with existing
  updatedFilters = resetFilterGpuMode(updatedFilters);
  updatedFilters = assignGpuChannels(updatedFilters);
  // filter data
  const datasetsToFilter = uniq(flattenDeep(validated.map(f => f.dataId)));

  const filtered = applyFiltersToDatasets(
    datasetsToFilter,
    updatedDatasets,
    updatedFilters,
    state.layers
  );

  return {
    ...state,
    filters: updatedFilters,
    datasets: filtered,
    preserveFilterOrder,
    filterToBeMerged: [...state.filterToBeMerged, ...failed]
  };
}

// replace dataId in saved Filter
export function replaceFilterDatasetIds(
  savedFilter: Filter[],
  dataId: string,
  dataIdToUse: string
) {
  const replaced: Filter[] = [];
  savedFilter.forEach(filter => {
    if (filter.dataId.includes(dataId)) {
      const newDataId = filter.dataId.map(d => (d === dataId ? dataIdToUse : d));
      replaced.push({
        ...filter,
        dataId: newDataId
      });
    }
  });
  return replaced.length ? replaced : null;
}

export function isSavedLayerConfigV1(layerConfig: any): boolean {
  // exported layer configuration contains visualChannels property
  return layerConfig?.visualChannels;
}

export function parseLayerConfig(
  schema: KeplerGLSchemaClass,
  layerConfig: any
): ParsedLayer | undefined {
  // assume the layer config is current version
  const savedConfig = {
    version: CURRENT_VERSION,
    config: {
      visState: {layers: [layerConfig], layerOrder: [0]}
    }
  };

  return schema.parseSavedConfig(savedConfig)?.visState?.layers?.[0];
}

function insertItemBasedOnPreservedOrder(
  currentItems: Filter[],
  items: Filter[],
  preservedOrder: any[] = [],
  defaultStart?: boolean
) {
  let newItems = [...currentItems];

  for (const item of items) {
    const expectedIdx = preservedOrder.indexOf(item.id);
    // insertAt the end by default
    let insertAt = defaultStart ? 0 : newItems.length;
    if (expectedIdx > 0) {
      // look for layer to insert after
      let i = expectedIdx + 1;
      let preceedIdx = -1;
      while (i-- > 0 && preceedIdx < 0) {
        // keep looking for preceed layer that is already loaded
        const preceedItemId = preservedOrder[i - 1];
        preceedIdx = newItems.findIndex(d => d.id === preceedItemId);
      }
      if (preceedIdx > -1) {
        // if found
        insertAt = preceedIdx + 1;
      }
    }
    newItems = arrayInsert(newItems, insertAt, item);
  }
  return newItems;
}

export function createLayerFromConfig(state: VisState, layerConfig: any): Layer | null {
  // check if the layer config is parsed
  const parsedLayerConfig = isSavedLayerConfigV1(layerConfig)
    ? parseLayerConfig(state.schema, layerConfig)
    : layerConfig;

  if (!parsedLayerConfig) {
    return null;
  }
  // first validate config against dataset
  const {validated, failed} = validateLayersByDatasets(state.datasets, state.layerClasses, [
    parsedLayerConfig
  ]);

  if (failed?.length || !validated.length) {
    // failed
    return null;
  }

  const newLayer = validated[0];
  newLayer.updateLayerDomain(state.datasets);
  return newLayer;
}

/**
 * Get loaded layer from state
 */
export function serializeLayer(
  newLayer: Layer,
  schema: KeplerGLSchemaClass
): ParsedLayer | undefined {
  const serializedVisState = serializeVisState({layers: [newLayer], layerOrder: [0]}, schema);
  return serializedVisState?.layers?.[0];
}

/**
 * Get vis state config
 */
export function serializeVisState(
  visState: Partial<VisState>,
  schema: KeplerGLSchemaClass
): ParsedVisState | undefined {
  const savedState = schema.getConfigToSave({
    visState
  });
  return savedState ? schema.parseSavedConfig(savedState)?.visState : undefined;
}
/**
 * Merge layers from de-serialized state, if no fields or data are loaded
 * save it for later
 *
 */
export function mergeLayers<S extends VisState>(
  state: S,
  layersToMerge: NonNullable<ParsedConfig['visState']>['layers'] = [],
  fromConfig?: boolean
): S {
  const preserveLayerOrder = fromConfig ? layersToMerge.map(l => l.id) : state.preserveLayerOrder;
  if (!Array.isArray(layersToMerge) || !layersToMerge.length) {
    return state;
  }
  // don't merge layer if dataset is being merged
  const unmerged: ParsedLayer[] = [];
  const toMerge: ParsedLayer[] = [];
  layersToMerge.forEach((l: ParsedLayer) => {
    if (l?.config?.dataId && state.isMergingDatasets[l.config.dataId]) {
      unmerged.push(l);
    } else {
      toMerge.push(l);
    }
  });

  const {validated: mergedLayer, failed} = validateLayersByDatasets(
    state.datasets,
    state.layerClasses,
    toMerge
  );
  unmerged.push(...failed);
  // put new layers in front of current layers
  const {newLayerOrder, newLayers} = insertLayerAtRightOrder(
    state.layers,
    mergedLayer,
    state.layerOrder,
    preserveLayerOrder
  );

  return {
    ...state,
    layers: newLayers,
    layerOrder: newLayerOrder,
    preserveLayerOrder,
    layerToBeMerged: [...state.layerToBeMerged, ...unmerged]
  };
}

export function insertLayerAtRightOrder(
  currentLayers,
  layersToInsert,
  currentOrder,
  preservedOrder: string[] = []
) {
  if (!layersToInsert?.length) {
    return {newLayers: currentLayers, newLayerOrder: currentOrder};
  }
  // perservedOrder ['a', 'b', 'c'];
  // layerOrder [1, 0, 3]
  // layerOrderMap ['a', 'c']
  const currentLayerQueue = currentOrder.map(i => currentLayers[i]);
  const newLayers = currentLayers.concat(layersToInsert);
  const newLayerOrderQueue = insertItemBasedOnPreservedOrder(
    currentLayerQueue,
    layersToInsert,
    preservedOrder,
    true
  );

  // reconstruct layerOrder after insert
  const newLayerOrder = newLayerOrderQueue.map(lyr => newLayers.findIndex(l => l.id === lyr.id));

  return {
    newLayerOrder,
    newLayers
  };
}

/**
 * Merge interactions with saved config
 *
 */
export function mergeInteractions<S extends VisState>(
  state: S,
  interactionToBeMerged: Partial<SavedInteractionConfig> | undefined,
  fromConfig?: boolean
): S {
  const merged: Partial<SavedInteractionConfig> = {};
  const unmerged: Partial<SavedInteractionConfig> = {};

  if (interactionToBeMerged) {
    (Object.keys(interactionToBeMerged) as Array<keyof SavedInteractionConfig>).forEach(key => {
      if (!state.interactionConfig[key]) {
        return;
      }

      const currentConfig =
        key === 'tooltip' || key === 'brush' ? state.interactionConfig[key].config : null;

      const {enabled, ...configSaved} = interactionToBeMerged[key] || {};

      let configToMerge = configSaved;

      if (key === 'tooltip') {
        const {mergedTooltip, unmergedTooltip} = mergeInteractionTooltipConfig(
          state,
          configSaved as SavedInteractionConfig['tooltip']
        );

        // merge new dataset tooltips with original dataset tooltips
        configToMerge = {
          fieldsToShow: {
            ...(currentConfig as TooltipInfo['config']).fieldsToShow,
            ...mergedTooltip
          }
        };

        if (Object.keys(unmergedTooltip).length) {
          // @ts-expect-error
          unmerged.tooltip = {fieldsToShow: unmergedTooltip, enabled: Boolean(enabled)};
        }
      }

      merged[key] = {
        ...state.interactionConfig[key],
        enabled: Boolean(enabled),
        ...(currentConfig
          ? {
              config: pick(
                {
                  ...currentConfig,
                  ...configToMerge
                },
                Object.keys(currentConfig)
              )
            }
          : {})
      };
    });
  }

  const nextState = {
    ...state,
    interactionConfig: {
      ...state.interactionConfig,
      ...merged
    },
    interactionToBeMerged: savedUnmergedInteraction(state, unmerged)
  };
  return nextState;
}

function savedUnmergedInteraction<S extends VisState>(
  state: S,
  unmerged: Partial<SavedInteractionConfig>
) {
  if (!unmerged?.tooltip?.fieldsToShow) {
    return state.interactionToBeMerged;
  }
  return {
    tooltip: {
      ...state.interactionToBeMerged.tooltip,
      ...(typeof unmerged?.tooltip?.enabled === 'boolean'
        ? {enabled: unmerged.tooltip.enabled}
        : {}),
      fieldsToShow: {
        ...state.interactionToBeMerged?.tooltip?.fieldsToShow,
        ...unmerged?.tooltip?.fieldsToShow
      }
    }
  };
}

function replaceInteractionDatasetIds(interactionConfig, dataId: string, dataIdToReplace: string) {
  if (interactionConfig?.tooltip?.fieldsToShow[dataId]) {
    return {
      ...interactionConfig,
      tooltip: {
        ...interactionConfig.tooltip,
        fieldsToShow: {
          [dataIdToReplace]: interactionConfig?.tooltip?.fieldsToShow[dataId]
        }
      }
    };
  }
  return null;
}
/**
 * Merge splitMaps config with current visStete.
 * 1. if current map is split, but splitMap DOESNOT contain maps
 *    : don't merge anything
 * 2. if current map is NOT split, but splitMaps contain maps
 *    : add to splitMaps, and add current layers to splitMaps
 */
export function mergeSplitMaps<S extends VisState>(
  state: S,
  splitMaps: NonNullable<ParsedConfig['visState']>['splitMaps'] = [],
  fromConfig?: boolean
): S {
  const merged = [...state.splitMaps];
  const unmerged = [];
  splitMaps.forEach((sm, i) => {
    const entries = Object.entries(sm.layers);
    if (entries.length > 0) {
      entries.forEach(([id, value]) => {
        // check if layer exists
        const pushTo = state.layers.find(l => l.id === id) ? merged : unmerged;

        // create map panel if current map is not split
        pushTo[i] = pushTo[i] || {
          layers: pushTo === merged ? getInitialMapLayersForSplitMap(state.layers) : []
        };
        pushTo[i].layers = {
          ...pushTo[i].layers,
          [id]: value
        };
      });
    } else {
      // We are merging if there are no layers in both split map
      merged.push(sm);
    }
  });

  return {
    ...state,
    splitMaps: merged,
    splitMapsToBeMerged: [...state.splitMapsToBeMerged, ...unmerged]
  };
}

/**
 * Merge interactionConfig.tooltip with saved config,
 * validate fieldsToShow
 *
 * @param state
 * @param tooltipConfig
 * @return - {mergedTooltip: {}, unmergedTooltip: {}}
 */
export function mergeInteractionTooltipConfig(
  state: VisState,
  tooltipConfig: Pick<TooltipInfo['config'], 'fieldsToShow'> | null = null
) {
  const unmergedTooltip: TooltipInfo['config']['fieldsToShow'] = {};
  const mergedTooltip: TooltipInfo['config']['fieldsToShow'] = {};

  if (
    !tooltipConfig ||
    !tooltipConfig.fieldsToShow ||
    !Object.keys(tooltipConfig.fieldsToShow).length
  ) {
    return {mergedTooltip, unmergedTooltip};
  }

  for (const dataId in tooltipConfig.fieldsToShow) {
    if (!state.datasets[dataId] || state.isMergingDatasets[dataId]) {
      // is not yet loaded
      unmergedTooltip[dataId] = tooltipConfig.fieldsToShow[dataId];
    } else {
      // if dataset is loaded
      const allFields = state.datasets[dataId].fields.map(d => d.name);
      const foundFieldsToShow = tooltipConfig.fieldsToShow[dataId].filter(field =>
        allFields.includes(field.name)
      );

      mergedTooltip[dataId] = foundFieldsToShow;
    }
  }

  return {mergedTooltip, unmergedTooltip};
}
/**
 * Merge layerBlending with saved
 *
 */
export function mergeLayerBlending<S extends VisState>(
  state: S,
  layerBlending: NonNullable<ParsedConfig['visState']>['layerBlending'],
  fromConfig?: boolean
): S {
  if (layerBlending && LAYER_BLENDINGS[layerBlending]) {
    return {
      ...state,
      layerBlending
    };
  }

  return state;
}

/**
 * Merge overlayBlending with saved
 */
export function mergeOverlayBlending<S extends VisState>(
  state: S,
  overlayBlending: NonNullable<ParsedConfig['visState']>['overlayBlending'],
  fromConfig?: boolean
): S {
  if (overlayBlending && OVERLAY_BLENDINGS[overlayBlending]) {
    return {
      ...state,
      overlayBlending
    };
  }

  return state;
}

/**
 * Merge animation config
 */
export function mergeAnimationConfig<S extends VisState>(
  state: S,
  animation: NonNullable<ParsedConfig['visState']>['animationConfig'],
  fromConfig?: boolean
): S {
  if (animation && animation.currentTime) {
    return {
      ...state,
      animationConfig: {
        ...state.animationConfig,
        ...animation,
        domain: null
      }
    };
  }

  return state;
}

/**
 * Validate saved layer columns with new data,
 * update fieldIdx based on new fields
 *
 * @param fields
 * @param savedCols
 * @param emptyCols
 * @return - validated columns or null
 */

export function validateSavedLayerColumns(
  fields: KeplerTable['fields'],
  savedCols: {
    [key: string]: string;
  } = {},
  emptyCols: LayerColumns
) {
  // Prepare columns for the validator
  const columns: typeof emptyCols = {};
  for (const key of Object.keys(emptyCols)) {
    columns[key] = {...emptyCols[key]};

    const saved = savedCols[key];
    if (saved) {
      const fieldIdx = fields.findIndex(({name}) => name === saved);

      if (fieldIdx > -1) {
        // update found columns
        columns[key].fieldIdx = fieldIdx;
        columns[key].value = saved;
      }
    }
  }

  // find actual column fieldIdx, in case it has changed
  const allColFound = Object.keys(columns).every(key =>
    validateColumn(columns[key], columns, fields)
  );

  if (allColFound) {
    return columns;
  }

  return null;
}

export function validateColumn(
  column: LayerColumn & {validator?: typeof validateColumn},
  columns: LayerColumns,
  allFields: KeplerTable['fields']
): boolean {
  if (column.optional || column.value) {
    return true;
  }
  if (column.validator) {
    return column.validator(column, columns, allFields);
  }
  return false;
}

/**
 * Validate saved text label config with new data
 * refer to vis-state-schema.js TextLabelSchemaV1
 *
 * @param {Array<Object>} fields
 * @param {Object} savedTextLabel
 * @return {Object} - validated textlabel
 */
export function validateSavedTextLabel(fields, [layerTextLabel], savedTextLabel) {
  const savedTextLabels = Array.isArray(savedTextLabel) ? savedTextLabel : [savedTextLabel];

  // validate field
  return savedTextLabels.map(textLabel => {
    const field = textLabel.field
      ? fields.find(fd =>
          Object.keys(textLabel.field).every(key => textLabel.field[key] === fd[key])
        )
      : null;

    return Object.keys(layerTextLabel).reduce(
      (accu, key) => ({
        ...accu,
        [key]: key === 'field' ? field : textLabel[key] || layerTextLabel[key]
      }),
      {}
    );
  });
}

/**
 * Validate saved visual channels config with new data,
 * refer to vis-state-schema.js VisualChannelSchemaV1
 */
export function validateSavedVisualChannels(
  fields: KeplerTable['fields'],
  newLayer: Layer,
  savedLayer: ParsedLayer
): null | Layer {
  Object.values(newLayer.visualChannels).forEach(({field, scale, key}) => {
    let foundField;
    if (savedLayer.config) {
      if (savedLayer.config[field]) {
        foundField = fields.find(
          fd => savedLayer.config && fd.name === savedLayer.config[field].name
        );
      }

      const foundChannel = {
        ...(foundField ? {[field]: foundField} : {}),
        ...(savedLayer.config[scale] ? {[scale]: savedLayer.config[scale]} : {})
      };
      if (Object.keys(foundChannel).length) {
        newLayer.updateLayerConfig(foundChannel);
      }

      newLayer.validateVisualChannel(key);
    }
  });
  return newLayer;
}

export function validateLayersByDatasets(
  datasets: Datasets,
  layerClasses: VisState['layerClasses'],
  layers: NonNullable<ParsedConfig['visState']>['layers'] = []
) {
  const validated: Layer[] = [];
  const failed: NonNullable<ParsedConfig['visState']>['layers'] = [];

  layers.forEach(layer => {
    let validateLayer: Layer | null = null;

    if (layer?.config?.dataId) {
      if (datasets[layer.config.dataId]) {
        // datasets are already loaded
        validateLayer = validateLayerWithData(datasets[layer.config.dataId], layer, layerClasses);
      }
    }

    if (validateLayer) {
      validated.push(validateLayer);
    } else {
      // datasets not yet loaded
      failed.push(layer);
    }
  });

  return {validated, failed};
}
/**
 * Validate saved layer config with new data,
 * update fieldIdx based on new fields
 */
export function validateLayerWithData(
  {fields, id: dataId}: KeplerTable,
  savedLayer: ParsedLayer,
  layerClasses: VisState['layerClasses'],
  options: {
    allowEmptyColumn?: boolean;
  } = {}
): Layer | null {
  const {type} = savedLayer;
  // layer doesnt have a valid type
  if (!type || !layerClasses.hasOwnProperty(type) || !savedLayer.config) {
    return null;
  }

  let newLayer = new layerClasses[type]({
    id: savedLayer.id,
    dataId,
    label: savedLayer.config.label,
    color: savedLayer.config.color,
    isVisible: savedLayer.config.isVisible,
    hidden: savedLayer.config.hidden,
    highlightColor: savedLayer.config.highlightColor
  });

  // find column fieldIdx
  const columnConfig = newLayer.getLayerColumns();
  if (Object.keys(columnConfig).length) {
    const columns = validateSavedLayerColumns(fields, savedLayer.config.columns, columnConfig);
    if (columns) {
      newLayer.updateLayerConfig({columns});
    } else if (!options.allowEmptyColumn) {
      return null;
    }
  }

  // visual channel field is saved to be {name, type}
  // find visual channel field by matching both name and type
  // refer to vis-state-schema.js VisualChannelSchemaV1
  newLayer = validateSavedVisualChannels(fields, newLayer, savedLayer);

  const textLabel =
    savedLayer.config.textLabel && newLayer.config.textLabel
      ? validateSavedTextLabel(fields, newLayer.config.textLabel, savedLayer.config.textLabel)
      : newLayer.config.textLabel;

  // copy visConfig over to emptyLayer to make sure it has all the props
  const visConfig = newLayer.copyLayerConfig(
    newLayer.config.visConfig,
    savedLayer.config.visConfig || {},
    {shallowCopy: ['colorRange', 'strokeColorRange']}
  );

  newLayer.updateLayerConfig({
    visConfig,
    textLabel
  });

  return newLayer;
}

export function mergeEditor<S extends VisState>(state: S, savedEditor: SavedEditor) {
  if (!savedEditor) {
    return state;
  }
  return {
    ...state,
    editor: {
      ...state.editor,
      features: [...state.editor.features, ...(savedEditor.features || [])],
      // if savedEditor.visible is undefined keep state.editor.visible
      visible: savedEditor.visible ?? state.editor.visible
    }
  };
}

/**
 * Validate saved layer config with new data,
 * update fieldIdx based on new fields
 */
export function mergeDatasetsByOrder(state: VisState, newDataEntries: Datasets): Datasets {
  const merged = {
    ...state.datasets,
    ...newDataEntries
  };

  if (Array.isArray(state.preserveDatasetOrder)) {
    // preserveDatasetOrder  might not include the  new datasets
    const newDatasetIds = Object.keys(merged).filter(
      id => !state.preserveDatasetOrder?.includes(id)
    );
    return [...state.preserveDatasetOrder, ...newDatasetIds].reduce(
      (accu, dataId) => ({
        ...accu,
        ...(merged[dataId] ? {[dataId]: merged[dataId]} : {})
      }),
      {}
    );
  }

  return merged;
}

export const VIS_STATE_MERGERS: VisStateMergers<any> = [
  {
    merge: mergeLayers,
    prop: 'layers',
    toMergeProp: 'layerToBeMerged',
    preserveOrder: 'preserveLayerOrder'
  },
  {
    merge: mergeFilters,
    prop: 'filters',
    toMergeProp: 'filterToBeMerged',
    preserveOrder: 'preserveFilterOrder',
    replaceParentDatasetIds: replaceFilterDatasetIds
  },
  {
    merge: mergeInteractions,
    prop: 'interactionConfig',
    toMergeProp: 'interactionToBeMerged',
    replaceParentDatasetIds: replaceInteractionDatasetIds,
    saveUnmerged: savedUnmergedInteraction
  },
  {merge: mergeLayerBlending, prop: 'layerBlending'},
  {merge: mergeOverlayBlending, prop: 'overlayBlending'},
  {merge: mergeSplitMaps, prop: 'splitMaps', toMergeProp: 'splitMapsToBeMerged'},
  {merge: mergeAnimationConfig, prop: 'animationConfig'},
  {merge: mergeEditor, prop: 'editor'}
];
