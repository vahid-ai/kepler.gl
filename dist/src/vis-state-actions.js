"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.layerConfigChange = layerConfigChange;
exports.layerTextLabelChange = layerTextLabelChange;
exports.layerSetIsValid = layerSetIsValid;
exports.layerTypeChange = layerTypeChange;
exports.layerVisualChannelConfigChange = layerVisualChannelConfigChange;
exports.layerVisConfigChange = layerVisConfigChange;
exports.layerColorUIChange = layerColorUIChange;
exports.updateLayerBlending = updateLayerBlending;
exports.updateOverlayBlending = updateOverlayBlending;
exports.interactionConfigChange = interactionConfigChange;
exports.setFilter = setFilter;
exports.setFilterAnimationTime = setFilterAnimationTime;
exports.setFilterAnimationWindow = setFilterAnimationWindow;
exports.addFilter = addFilter;
exports.addLayer = addLayer;
exports.reorderLayer = reorderLayer;
exports.removeFilter = removeFilter;
exports.removeLayer = removeLayer;
exports.duplicateLayer = duplicateLayer;
exports.removeDataset = removeDataset;
exports.showDatasetTable = showDatasetTable;
exports.updateTableColor = updateTableColor;
exports.sortTableColumn = sortTableColumn;
exports.pinTableColumn = pinTableColumn;
exports.copyTableColumn = copyTableColumn;
exports.setColumnDisplayFormat = setColumnDisplayFormat;
exports.updateVisData = updateVisData;
exports.renameDataset = renameDataset;
exports.updateDatasetProps = updateDatasetProps;
exports.toggleFilterAnimation = toggleFilterAnimation;
exports.updateFilterAnimationSpeed = updateFilterAnimationSpeed;
exports.setLayerAnimationTime = setLayerAnimationTime;
exports.updateLayerAnimationSpeed = updateLayerAnimationSpeed;
exports.toggleLayerAnimation = toggleLayerAnimation;
exports.toggleLayerAnimationControl = toggleLayerAnimationControl;
exports.setFilterView = setFilterView;
exports.toggleFilterFeature = toggleFilterFeature;
exports.onLayerHover = onLayerHover;
exports.onLayerClick = onLayerClick;
exports.onMapClick = onMapClick;
exports.onMouseMove = onMouseMove;
exports.toggleLayerForMap = toggleLayerForMap;
exports.setFilterPlot = setFilterPlot;
exports.setMapInfo = setMapInfo;
exports.loadFiles = loadFiles;
exports.loadNextFile = loadNextFile;
exports.loadFilesSuccess = loadFilesSuccess;
exports.loadFileStepSuccess = loadFileStepSuccess;
exports.loadFilesErr = loadFilesErr;
exports.setFeatures = setFeatures;
exports.setPolygonFilterLayer = setPolygonFilterLayer;
exports.setSelectedFeature = setSelectedFeature;
exports.deleteFeature = deleteFeature;
exports.setEditorMode = setEditorMode;
exports.applyCPUFilter = applyCPUFilter;
exports.toggleEditorVisibility = toggleEditorVisibility;
exports.nextFileBatch = nextFileBatch;
exports.processFileContent = processFileContent;
exports.setLayerAnimationTimeConfig = setLayerAnimationTimeConfig;
exports.setFilterAnimationTimeConfig = setFilterAnimationTimeConfig;

var _actionTypes = _interopRequireDefault(require("./action-types"));

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
// vis-state-reducer

/**
 * Update layer base config: dataId, label, column, isVisible
 * @param oldLayer - layer to be updated
 * @param newConfig - new config to be merged with old config
 * @returns action
 * @public
 */
function layerConfigChange(oldLayer, newConfig) {
  return {
    type: _actionTypes["default"].LAYER_CONFIG_CHANGE,
    oldLayer: oldLayer,
    newConfig: newConfig
  };
}

/**
 * Update layer text label
 * @param oldLayer - layer to be updated
 * @param idx -`idx` of text label to be updated
 * @param prop - `prop` of text label, e,g, `anchor`, `alignment`, `color`, `size`, `field`
 * @param value - new value
 * @returns action
 * @public
 */
function layerTextLabelChange(oldLayer, idx, prop, value) {
  return {
    type: _actionTypes["default"].LAYER_TEXT_LABEL_CHANGE,
    oldLayer: oldLayer,
    idx: idx,
    prop: prop,
    value: value
  };
}

/**
 * Changes value of isValid flag for a layer.
 * The action also updates visibility of the layer based on isValid.
 * @param oldLayer - layer to be updated
 * @param isValid - new value for isValid flag
 * @returns action
 * @public
 */
function layerSetIsValid(oldLayer, isValid) {
  return {
    type: _actionTypes["default"].LAYER_SET_IS_VALID,
    oldLayer: oldLayer,
    isValid: isValid
  };
}

/**
 * Update layer type. Previews layer config will be copied if applicable.
 * @param oldLayer - layer to be updated
 * @param newType - new type
 * @returns action
 * @public
 */
function layerTypeChange(oldLayer, newType) {
  return {
    type: _actionTypes["default"].LAYER_TYPE_CHANGE,
    oldLayer: oldLayer,
    newType: newType
  };
}

/**
 * Update layer visual channel
 * @memberof visStateActions
 * @param oldLayer - layer to be updated
 * @param newConfig - new visual channel config
 * @param channel - channel to be updated
 * @returns action
 * @public
 */
function layerVisualChannelConfigChange(oldLayer, newConfig, channel) {
  return {
    type: _actionTypes["default"].LAYER_VISUAL_CHANNEL_CHANGE,
    oldLayer: oldLayer,
    newConfig: newConfig,
    channel: channel
  };
}

/**
 * Update layer `visConfig`
 * @memberof visStateActions
 * @param oldLayer - layer to be updated
 * @param newVisConfig - new visConfig as a key value map: e.g. `{opacity: 0.8}`
 * @returns action
 * @public
 */
function layerVisConfigChange(oldLayer, newVisConfig) {
  return {
    type: _actionTypes["default"].LAYER_VIS_CONFIG_CHANGE,
    oldLayer: oldLayer,
    newVisConfig: newVisConfig
  };
}

/**
 * Set the color palette ui for layer color
 * @memberof visStateActions
 * @param oldLayer - layer to be updated
 * @param prop - which color prop
 * @param newConfig - to be merged
 * @returns action
 * @public
 */
function layerColorUIChange(oldLayer, prop, newConfig) {
  return {
    type: _actionTypes["default"].LAYER_COLOR_UI_CHANGE,
    oldLayer: oldLayer,
    prop: prop,
    newConfig: newConfig
  };
}

/**
 * Update layer blending mode
 * @memberof visStateActions
 * @param mode one of `additive`, `normal` and `subtractive`
 * @returns action
 * @public
 */
function updateLayerBlending(mode) {
  return {
    type: _actionTypes["default"].UPDATE_LAYER_BLENDING,
    mode: mode
  };
}

/**
 * Update overlay blending mode
 * @memberof visStateActions
 * @param mode one of `screen`, `normal` and `darken`
 * @returns action
 * @public
 */
function updateOverlayBlending(mode) {
  return {
    type: _actionTypes["default"].UPDATE_OVERLAY_BLENDING,
    mode: mode
  };
}

/**
 * Update `interactionConfig`
 * @memberof visStateActions
 * @param config - new config as key value map: `{tooltip: {enabled: true}}`
 * @returns action
 * @public
 */
function interactionConfigChange(config) {
  return {
    type: _actionTypes["default"].INTERACTION_CONFIG_CHANGE,
    config: config
  };
}

/**
 * Update filter property
 * @memberof visStateActions
 * @param idx -`idx` of filter to be updated
 * @param prop - `prop` of filter, e,g, `dataId`, `name`, `value`
 * @param value - new value
 * @param valueIndex - dataId index
 * @returns action
 * @public
 */
function setFilter(idx, prop, value, valueIndex) {
  return {
    type: _actionTypes["default"].SET_FILTER,
    idx: idx,
    prop: prop,
    value: value,
    valueIndex: valueIndex
  };
}

/**
 * Same as Update filter
 * @memberof visStateActions
 * @param idx -`idx` of filter to be updated
 * @param prop - `prop` of filter, e,g, `dataId`, `name`, `value`
 * @param value - new value
 * @param valueIndex - dataId index
 * @returns action
 * @public
 */
function setFilterAnimationTime(idx, prop, value, valueIndex) {
  return {
    type: _actionTypes["default"].SET_FILTER_ANIMATION_TIME,
    idx: idx,
    prop: prop,
    value: value,
    valueIndex: valueIndex
  };
}

/**
 * Same as Update filter
 * @memberof visStateActions
 * @public
 */
function setFilterAnimationWindow(_ref) {
  var id = _ref.id,
      animationWindow = _ref.animationWindow;
  return {
    type: _actionTypes["default"].SET_FILTER_ANIMATION_WINDOW,
    id: id,
    animationWindow: animationWindow
  };
}

/**
 * Add a new filter
 * @memberof visStateActions
 * @param dataId - dataset `id` this new filter is associated with
 * @returns action
 * @public
 */
function addFilter(dataId) {
  return {
    type: _actionTypes["default"].ADD_FILTER,
    dataId: dataId
  };
}

/**
 * Add a new layer
 * @memberof visStateActions
 * @param config - new layer config
 * @param datasetId - dataset id used for creating an empty layer
 * @returns action
 * @public
 */
function addLayer(config, datasetId) {
  return {
    type: _actionTypes["default"].ADD_LAYER,
    config: config,
    datasetId: datasetId
  };
}

/**
 * Reorder layer, order is an array of layer indexes, index 0 will be the one at the bottom
 * @memberof visStateActions
 * @param order an array of layer indexes
 * @returns action
 * @public
 * @example
 *
 * // bring `layers[1]` below `layers[0]`, the sequence layers will be rendered is `1`, `0`, `2`, `3`.
 * // `1` will be at the bottom, `3` will be at the top.
 * this.props.dispatch(reorderLayer([1, 0, 2, 3]));
 */
function reorderLayer(order) {
  return {
    type: _actionTypes["default"].REORDER_LAYER,
    order: order
  };
}

/**
 * Remove a filter from `visState.filters`, once a filter is removed, data will be re-filtered and layer will be updated
 * @memberof visStateActions
 * @param idx idx of filter to be removed
 * @returns action
 * @public
 */
function removeFilter(idx) {
  return {
    type: _actionTypes["default"].REMOVE_FILTER,
    idx: idx
  };
}

/**
 * Remove a layer
 * @memberof visStateActions
 * @param id idx of layer to be removed
 * @returns action
 * @public
 */
function removeLayer(id) {
  return {
    type: _actionTypes["default"].REMOVE_LAYER,
    id: id
  };
}

/**
 * Duplicate a layer
 * @memberof visStateActions
 * @param idx idx of layer to be duplicated
 * @returns action
 * @public
 */
function duplicateLayer(idx) {
  return {
    type: _actionTypes["default"].DUPLICATE_LAYER,
    idx: idx
  };
}

/**
 * Remove a dataset and all layers, filters, tooltip configs that based on it
 * @memberof visStateActions
 * @param dataId dataset id
 * @returns action
 * @public
 */
function removeDataset(dataId) {
  return {
    type: _actionTypes["default"].REMOVE_DATASET,
    dataId: dataId
  };
}

/**
 * Display dataset table in a modal
 * @memberof visStateActions
 * @param dataId dataset id to show in table
 * @returns action
 * @public
 */
function showDatasetTable(dataId) {
  return {
    type: _actionTypes["default"].SHOW_DATASET_TABLE,
    dataId: dataId
  };
}

/**
 * Update dataset color to custom by means of color picker
 * @memberof visStateActions
 * @param dataId dataset `id` this custom color is associated with
 * @param newColor custom color in RGBformat
 * @returns action
 * @public
 */
function updateTableColor(dataId, newColor) {
  return {
    type: _actionTypes["default"].UPDATE_TABLE_COLOR,
    dataId: dataId,
    newColor: newColor
  };
}

/**
 * Sort dataset column, for table display
 * @memberof visStateActions
 * @param dataId
 * @param column
 * @param mode
 * @returns action
 * @public
 */
function sortTableColumn(dataId, column, mode) {
  return {
    type: _actionTypes["default"].SORT_TABLE_COLUMN,
    dataId: dataId,
    column: column,
    mode: mode
  };
}

/**
 * Pin dataset column, for table display
 * @param dataId
 * @param column
 * @returns action
 * @public
 */
function pinTableColumn(dataId, column) {
  return {
    type: _actionTypes["default"].PIN_TABLE_COLUMN,
    dataId: dataId,
    column: column
  };
}

/**
 * Copy column, for table display
 * @param dataId
 * @param column
 * @returns action
 * @public
 */
function copyTableColumn(dataId, column) {
  return {
    type: _actionTypes["default"].COPY_TABLE_COLUMN,
    dataId: dataId,
    column: column
  };
}

/**
 * Set column display format
 * @param dataId
 * @param formats
 * @returns action
 * @public
 */
function setColumnDisplayFormat(dataId, formats) {
  return {
    type: _actionTypes["default"].SET_COLUMN_DISPLAY_FORMAT,
    dataId: dataId,
    formats: formats
  };
}

// * @param dataset.info -info of a dataset
// * @param dataset.info.id - id of this dataset. If config is defined, `id` should matches the `dataId` in config.
// * @param dataset.info.label - A display name of this dataset
// * @param dataset.data - ***required** The data object, in a tabular format with 2 properties `fields` and `rows`
// * @param dataset.data.fields - ***required** Array of fields,
// * @param dataset.data.fields.name - ***required** Name of the field,
// * @param dataset.data.rows - ***required** Array of rows, in a tabular format with `fields` and `rows`

/**
 * Add new dataset to `visState`, with option to load a map config along with the datasets
 * @memberof visStateActions
 * @param datasets - ***required** datasets can be a dataset or an array of datasets
 * Each dataset object needs to have `info` and `data` property.
 * @param {object} options
 * @param options.centerMap `default: true` if `centerMap` is set to `true` kepler.gl will
 * place the map view within the data points boundaries
 * @param options.readOnly `default: false` if `readOnly` is set to `true`
 * the left setting panel will be hidden
 * @param config this object will contain the full kepler.gl instance configuration {mapState, mapStyle, visState}
 * @returns action
 * @public
 */
function updateVisData(datasets, options, config) {
  return {
    type: _actionTypes["default"].UPDATE_VIS_DATA,
    datasets: datasets,
    options: options,
    config: config
  };
}

/**
 * Rename an existing dataset in `visState`
 * @memberof visStateActions
 * @param dataId - ***required** Id of the dataset to update
 * @param label - ***required** New name for the dataset
 * @returns action
 * @public
 */
function renameDataset(dataId, label) {
  return {
    type: _actionTypes["default"].RENAME_DATASET,
    dataId: dataId,
    label: label
  };
}

/**
 * Update an existing dataset props in `visState`
 * @param dataId - ***required** Id of the dataset to update
 * @param props - ***required** New props to update
 * @returns action
 */
function updateDatasetProps(dataId, props) {
  return {
    type: _actionTypes["default"].UPDATE_DATASET_PROPS,
    dataId: dataId,
    props: props
  };
}

/**
 * Start and end filter animation
 * @memberof visStateActions
 * @param {Number} idx of filter
 * @returns action
 * @public
 */
function toggleFilterAnimation(idx) {
  return {
    type: _actionTypes["default"].TOGGLE_FILTER_ANIMATION,
    idx: idx
  };
}

/**
 * Change filter animation speed
 * @memberof visStateActions
 * @param idx -  `idx` of filter
 * @param speed - `speed` to change it to. `speed` is a multiplier
 * @returns action
 * @public
 */
function updateFilterAnimationSpeed(idx, speed) {
  return {
    type: _actionTypes["default"].UPDATE_FILTER_ANIMATION_SPEED,
    idx: idx,
    speed: speed
  };
}

/**
 * Reset animation
 * @memberof visStateActions
 * @param value -  Current value of the slider
 * @returns action
 * @public
 */
function setLayerAnimationTime(value) {
  return {
    type: _actionTypes["default"].SET_LAYER_ANIMATION_TIME,
    value: value
  };
}

/**
 * update trip layer animation speed
 * @memberof visStateActions
 * @param speed - `speed` to change it to. `speed` is a multiplier
 * @returns action
 * @public
 */
function updateLayerAnimationSpeed(speed) {
  return {
    type: _actionTypes["default"].UPDATE_LAYER_ANIMATION_SPEED,
    speed: speed
  };
}

/**
 * start end end layer animation
 * @memberof visStateActions
 * @returns action
 * @public
 */
function toggleLayerAnimation() {
  return {
    type: _actionTypes["default"].TOGGLE_LAYER_ANIMATION
  };
}

/**
 * hide and show layer animation control
 * @memberof visStateActions
 * @returns action
 * @public
 */
function toggleLayerAnimationControl() {
  return {
    type: _actionTypes["default"].TOGGLE_LAYER_ANIMATION_CONTROL
  };
}

/**
 * Show larger time filter at bottom for time playback (apply to time filter only)
 * @memberof visStateActions
 * @param idx - index of filter to enlarge
 * @param view - type of filter view
 * @returns action
 * @public
 */
function setFilterView(idx, view) {
  return {
    type: _actionTypes["default"].SET_FILTER_VIEW,
    idx: idx,
    view: view
  };
}

/**
 * Show/hide filter feature on map
 * @memberof visStateActions
 * @param idx - index of filter feature to show/hide
 * @return action
 */
function toggleFilterFeature(idx) {
  return {
    type: _actionTypes["default"].TOGGLE_FILTER_FEATURE,
    idx: idx
  };
}

/**
 * Trigger layer hover event with hovered object
 * @memberof visStateActions
 * @param info - Object hovered, returned by deck.gl. Includes an optional `mapIndex` property for limiting the display of the `<MapPopover>` to the `<MapContainer>` the user is interacting with.
 * @returns action
 * @public
 */
function onLayerHover(info) {
  return {
    type: _actionTypes["default"].LAYER_HOVER,
    info: info
  };
}

/**
 * Trigger layer click event with clicked object
 * @memberof visStateActions
 * @param info - Object clicked, returned by deck.gl
 * @returns action
 * @public
 */
function onLayerClick(info) {
  return {
    type: _actionTypes["default"].LAYER_CLICK,
    info: info
  };
}

/**
 * Trigger map click event, unselect clicked object
 * @memberof visStateActions
 * @returns action
 * @public
 */
function onMapClick() {
  return {
    type: _actionTypes["default"].MAP_CLICK
  };
}

/**
 * Trigger map mouse moveevent, payload would be
 * React-map-gl PointerEvent
 * https://uber.github.io/react-map-gl/#/documentation/api-reference/pointer-event
 *
 * @memberof visStateActions
 * @param evt - PointerEvent
 * @returns action
 * @public
 */
function onMouseMove(evt) {
  return {
    type: _actionTypes["default"].MOUSE_MOVE,
    evt: evt
  };
}

/**
 * Toggle visibility of a layer in a split map
 * @memberof visStateActions
 * @param mapIndex - index of the split map
 * @param layerId - id of the layer
 * @returns action
 * @public
 */
function toggleLayerForMap(mapIndex, layerId) {
  return {
    type: _actionTypes["default"].TOGGLE_LAYER_FOR_MAP,
    mapIndex: mapIndex,
    layerId: layerId
  };
}

/**
 * Set the property of a filter plot
 * @memberof visStateActions
 * @param idx
 * @param newProp key value mapping of new prop `{yAxis: 'histogram'}`
 * @param valueIndex dataId index
 * @returns action
 * @public
 */
function setFilterPlot(idx, newProp, valueIndex) {
  return {
    type: _actionTypes["default"].SET_FILTER_PLOT,
    idx: idx,
    newProp: newProp,
    valueIndex: valueIndex
  };
}

/**
 * Set the property of a filter plot
 * @memberof visStateActions
 * @param info
 * @returns action
 * @public
 */
function setMapInfo(info) {
  return {
    type: _actionTypes["default"].SET_MAP_INFO,
    info: info
  };
}

/**
 * Trigger file loading dispatch `addDataToMap` if succeed, or `loadFilesErr` if failed
 * @memberof visStateActions
 * @param files array of fileblob
 * @returns action
 * @public
 */
function loadFiles(files, onFinish) {
  return {
    type: _actionTypes["default"].LOAD_FILES,
    files: files,
    onFinish: onFinish
  };
}
/**
 * Called with next file to load
 * @memberof visStateActions
 * @returns action
 * @public
 */


function loadNextFile() {
  return {
    type: _actionTypes["default"].LOAD_NEXT_FILE
  };
}

/**
 * called when all files are processed and loaded
 * @memberof visStateActions
 * @param result
 * @returns action
 */
function loadFilesSuccess(result) {
  return {
    type: _actionTypes["default"].LOAD_FILES_SUCCESS,
    result: result
  };
}

/**
 * called when successfully loaded one file, ready to move on to the next one
 * @memberof visStateActions
 * @param result
 * @returns action
 */
function loadFileStepSuccess(_ref2) {
  var fileName = _ref2.fileName,
      fileCache = _ref2.fileCache;
  return {
    type: _actionTypes["default"].LOAD_FILE_STEP_SUCCESS,
    fileName: fileName,
    fileCache: fileCache
  };
}

/**
 * Trigger loading file error
 * @memberof visStateActions
 * @param  error
 * @returns action
 * @public
 */
function loadFilesErr(fileName, error) {
  return {
    type: _actionTypes["default"].LOAD_FILES_ERR,
    fileName: fileName,
    error: error
  };
}

/**
 * Store features to state
 * @memberof visStateActions
 * @param features
 * @returns action
 */
function setFeatures(features) {
  return {
    type: _actionTypes["default"].SET_FEATURES,
    features: features
  };
}

/**
 * It will apply the provide feature as filter to the given layer.
 * If the given feature is already applied as filter to the layer, it will remove the layer from the filter
 * @memberof visStateActions
 * @param layer
 * @param feature
 * @returns action
 */
function setPolygonFilterLayer(layer, feature) {
  return {
    type: _actionTypes["default"].SET_POLYGON_FILTER_LAYER,
    layer: layer,
    feature: feature
  };
}

/**
 * Set the current feature to be edited/deleted,
 * and the context of how the feature was selected.
 * @memberof visStateActions
 * @param feature
 * @param selectionContext
 * @returns action
 */
function setSelectedFeature(feature, selectionContext) {
  return {
    type: _actionTypes["default"].SET_SELECTED_FEATURE,
    feature: feature,
    selectionContext: selectionContext
  };
}

/**
 * Delete the given feature
 * @memberof visStateActions
 * @param feature
 * @returns action
 */
function deleteFeature(feature) {
  return {
    type: _actionTypes["default"].DELETE_FEATURE,
    feature: feature
  };
}

/** Set the map mode
 * @memberof visStateActions
 * @param mode one of EDITOR_MODES
 * @returns action
 * @public
 * @example
 * import {setMapMode} from 'kepler.gl/actions';
 * import {EDITOR_MODES} from 'kepler.gl/constants';
 *
 * this.props.dispatch(setMapMode(EDITOR_MODES.DRAW_POLYGON));
 */
function setEditorMode(mode) {
  return {
    type: _actionTypes["default"].SET_EDITOR_MODE,
    mode: mode
  };
}

/**
 * Trigger CPU filter of selected dataset
 * @memberof visStateActions
 * @param dataId - single dataId or an array of dataIds
 * @returns action
 * @public
 */
function applyCPUFilter(dataId) {
  return {
    type: _actionTypes["default"].APPLY_CPU_FILTER,
    dataId: dataId
  };
}

/**
 * Toggle editor layer visibility
 * @memberof visStateActions
 * @return action
 */
function toggleEditorVisibility() {
  return {
    type: _actionTypes["default"].TOGGLE_EDITOR_VISIBILITY
  };
}

/**
 * Process the next file batch
 * @memberof visStateActions
 * @param payload - batch payload
 * @return action
 */
function nextFileBatch(payload) {
  return {
    type: _actionTypes["default"].NEXT_FILE_BATCH,
    payload: payload
  };
}

/**
 * Process the file content
 * @memberof visStateActions
 * @param payload - the file content
 * @return action
 */
function processFileContent(payload) {
  return {
    type: _actionTypes["default"].PROCESS_FILE_CONTENT,
    payload: payload
  };
}

/**
 * Set layer animation time format and timezone
 * @memberof visStateActions
 * @param config - {timeFormat: string, timezone: string}
 * @return action
 */
function setLayerAnimationTimeConfig(config) {
  return {
    type: _actionTypes["default"].SET_LAYER_ANIMATION_TIME_CONFIG,
    config: config
  };
}

/**
 * Set Filter animation time format and timezone
 * @memberof visStateActions
 * @param idx
 * @param config
 * @return action
 */
function setFilterAnimationTimeConfig(idx, config) {
  return {
    type: _actionTypes["default"].SET_FILTER_ANIMATION_TIME_CONFIG,
    idx: idx,
    config: config
  };
}
/**
 * This declaration is needed to group actions in docs
 */

/**
 * Actions handled mostly by `visState` reducer.
 * They manage how data is processed, filtered and displayed on the map by operates on layers,
 * filters and interaction settings.
 *
 * @public
 */

/* eslint-disable no-unused-vars */
// @ts-ignore


var visStateActions = null;
/* eslint-enable no-unused-vars */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NyYy92aXMtc3RhdGUtYWN0aW9ucy50cyJdLCJuYW1lcyI6WyJsYXllckNvbmZpZ0NoYW5nZSIsIm9sZExheWVyIiwibmV3Q29uZmlnIiwidHlwZSIsIkFjdGlvblR5cGVzIiwiTEFZRVJfQ09ORklHX0NIQU5HRSIsImxheWVyVGV4dExhYmVsQ2hhbmdlIiwiaWR4IiwicHJvcCIsInZhbHVlIiwiTEFZRVJfVEVYVF9MQUJFTF9DSEFOR0UiLCJsYXllclNldElzVmFsaWQiLCJpc1ZhbGlkIiwiTEFZRVJfU0VUX0lTX1ZBTElEIiwibGF5ZXJUeXBlQ2hhbmdlIiwibmV3VHlwZSIsIkxBWUVSX1RZUEVfQ0hBTkdFIiwibGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlIiwiY2hhbm5lbCIsIkxBWUVSX1ZJU1VBTF9DSEFOTkVMX0NIQU5HRSIsImxheWVyVmlzQ29uZmlnQ2hhbmdlIiwibmV3VmlzQ29uZmlnIiwiTEFZRVJfVklTX0NPTkZJR19DSEFOR0UiLCJsYXllckNvbG9yVUlDaGFuZ2UiLCJMQVlFUl9DT0xPUl9VSV9DSEFOR0UiLCJ1cGRhdGVMYXllckJsZW5kaW5nIiwibW9kZSIsIlVQREFURV9MQVlFUl9CTEVORElORyIsInVwZGF0ZU92ZXJsYXlCbGVuZGluZyIsIlVQREFURV9PVkVSTEFZX0JMRU5ESU5HIiwiaW50ZXJhY3Rpb25Db25maWdDaGFuZ2UiLCJjb25maWciLCJJTlRFUkFDVElPTl9DT05GSUdfQ0hBTkdFIiwic2V0RmlsdGVyIiwidmFsdWVJbmRleCIsIlNFVF9GSUxURVIiLCJzZXRGaWx0ZXJBbmltYXRpb25UaW1lIiwiU0VUX0ZJTFRFUl9BTklNQVRJT05fVElNRSIsInNldEZpbHRlckFuaW1hdGlvbldpbmRvdyIsImlkIiwiYW5pbWF0aW9uV2luZG93IiwiU0VUX0ZJTFRFUl9BTklNQVRJT05fV0lORE9XIiwiYWRkRmlsdGVyIiwiZGF0YUlkIiwiQUREX0ZJTFRFUiIsImFkZExheWVyIiwiZGF0YXNldElkIiwiQUREX0xBWUVSIiwicmVvcmRlckxheWVyIiwib3JkZXIiLCJSRU9SREVSX0xBWUVSIiwicmVtb3ZlRmlsdGVyIiwiUkVNT1ZFX0ZJTFRFUiIsInJlbW92ZUxheWVyIiwiUkVNT1ZFX0xBWUVSIiwiZHVwbGljYXRlTGF5ZXIiLCJEVVBMSUNBVEVfTEFZRVIiLCJyZW1vdmVEYXRhc2V0IiwiUkVNT1ZFX0RBVEFTRVQiLCJzaG93RGF0YXNldFRhYmxlIiwiU0hPV19EQVRBU0VUX1RBQkxFIiwidXBkYXRlVGFibGVDb2xvciIsIm5ld0NvbG9yIiwiVVBEQVRFX1RBQkxFX0NPTE9SIiwic29ydFRhYmxlQ29sdW1uIiwiY29sdW1uIiwiU09SVF9UQUJMRV9DT0xVTU4iLCJwaW5UYWJsZUNvbHVtbiIsIlBJTl9UQUJMRV9DT0xVTU4iLCJjb3B5VGFibGVDb2x1bW4iLCJDT1BZX1RBQkxFX0NPTFVNTiIsInNldENvbHVtbkRpc3BsYXlGb3JtYXQiLCJmb3JtYXRzIiwiU0VUX0NPTFVNTl9ESVNQTEFZX0ZPUk1BVCIsInVwZGF0ZVZpc0RhdGEiLCJkYXRhc2V0cyIsIm9wdGlvbnMiLCJVUERBVEVfVklTX0RBVEEiLCJyZW5hbWVEYXRhc2V0IiwibGFiZWwiLCJSRU5BTUVfREFUQVNFVCIsInVwZGF0ZURhdGFzZXRQcm9wcyIsInByb3BzIiwiVVBEQVRFX0RBVEFTRVRfUFJPUFMiLCJ0b2dnbGVGaWx0ZXJBbmltYXRpb24iLCJUT0dHTEVfRklMVEVSX0FOSU1BVElPTiIsInVwZGF0ZUZpbHRlckFuaW1hdGlvblNwZWVkIiwic3BlZWQiLCJVUERBVEVfRklMVEVSX0FOSU1BVElPTl9TUEVFRCIsInNldExheWVyQW5pbWF0aW9uVGltZSIsIlNFVF9MQVlFUl9BTklNQVRJT05fVElNRSIsInVwZGF0ZUxheWVyQW5pbWF0aW9uU3BlZWQiLCJVUERBVEVfTEFZRVJfQU5JTUFUSU9OX1NQRUVEIiwidG9nZ2xlTGF5ZXJBbmltYXRpb24iLCJUT0dHTEVfTEFZRVJfQU5JTUFUSU9OIiwidG9nZ2xlTGF5ZXJBbmltYXRpb25Db250cm9sIiwiVE9HR0xFX0xBWUVSX0FOSU1BVElPTl9DT05UUk9MIiwic2V0RmlsdGVyVmlldyIsInZpZXciLCJTRVRfRklMVEVSX1ZJRVciLCJ0b2dnbGVGaWx0ZXJGZWF0dXJlIiwiVE9HR0xFX0ZJTFRFUl9GRUFUVVJFIiwib25MYXllckhvdmVyIiwiaW5mbyIsIkxBWUVSX0hPVkVSIiwib25MYXllckNsaWNrIiwiTEFZRVJfQ0xJQ0siLCJvbk1hcENsaWNrIiwiTUFQX0NMSUNLIiwib25Nb3VzZU1vdmUiLCJldnQiLCJNT1VTRV9NT1ZFIiwidG9nZ2xlTGF5ZXJGb3JNYXAiLCJtYXBJbmRleCIsImxheWVySWQiLCJUT0dHTEVfTEFZRVJfRk9SX01BUCIsInNldEZpbHRlclBsb3QiLCJuZXdQcm9wIiwiU0VUX0ZJTFRFUl9QTE9UIiwic2V0TWFwSW5mbyIsIlNFVF9NQVBfSU5GTyIsImxvYWRGaWxlcyIsImZpbGVzIiwib25GaW5pc2giLCJMT0FEX0ZJTEVTIiwibG9hZE5leHRGaWxlIiwiTE9BRF9ORVhUX0ZJTEUiLCJsb2FkRmlsZXNTdWNjZXNzIiwicmVzdWx0IiwiTE9BRF9GSUxFU19TVUNDRVNTIiwibG9hZEZpbGVTdGVwU3VjY2VzcyIsImZpbGVOYW1lIiwiZmlsZUNhY2hlIiwiTE9BRF9GSUxFX1NURVBfU1VDQ0VTUyIsImxvYWRGaWxlc0VyciIsImVycm9yIiwiTE9BRF9GSUxFU19FUlIiLCJzZXRGZWF0dXJlcyIsImZlYXR1cmVzIiwiU0VUX0ZFQVRVUkVTIiwic2V0UG9seWdvbkZpbHRlckxheWVyIiwibGF5ZXIiLCJmZWF0dXJlIiwiU0VUX1BPTFlHT05fRklMVEVSX0xBWUVSIiwic2V0U2VsZWN0ZWRGZWF0dXJlIiwic2VsZWN0aW9uQ29udGV4dCIsIlNFVF9TRUxFQ1RFRF9GRUFUVVJFIiwiZGVsZXRlRmVhdHVyZSIsIkRFTEVURV9GRUFUVVJFIiwic2V0RWRpdG9yTW9kZSIsIlNFVF9FRElUT1JfTU9ERSIsImFwcGx5Q1BVRmlsdGVyIiwiQVBQTFlfQ1BVX0ZJTFRFUiIsInRvZ2dsZUVkaXRvclZpc2liaWxpdHkiLCJUT0dHTEVfRURJVE9SX1ZJU0lCSUxJVFkiLCJuZXh0RmlsZUJhdGNoIiwicGF5bG9hZCIsIk5FWFRfRklMRV9CQVRDSCIsInByb2Nlc3NGaWxlQ29udGVudCIsIlBST0NFU1NfRklMRV9DT05URU5UIiwic2V0TGF5ZXJBbmltYXRpb25UaW1lQ29uZmlnIiwiU0VUX0xBWUVSX0FOSU1BVElPTl9USU1FX0NPTkZJRyIsInNldEZpbHRlckFuaW1hdGlvblRpbWVDb25maWciLCJTRVRfRklMVEVSX0FOSU1BVElPTl9USU1FX0NPTkZJRyIsInZpc1N0YXRlQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7O0FBdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0EsaUJBQVQsQ0FDTEMsUUFESyxFQUVMQyxTQUZLLEVBR2tGO0FBQ3ZGLFNBQU87QUFDTEMsSUFBQUEsSUFBSSxFQUFFQyx3QkFBWUMsbUJBRGI7QUFFTEosSUFBQUEsUUFBUSxFQUFSQSxRQUZLO0FBR0xDLElBQUFBLFNBQVMsRUFBVEE7QUFISyxHQUFQO0FBS0Q7O0FBUUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0ksb0JBQVQsQ0FDTEwsUUFESyxFQUVMTSxHQUZLLEVBR0xDLElBSEssRUFJTEMsS0FKSyxFQUt5RjtBQUM5RixTQUFPO0FBQ0xOLElBQUFBLElBQUksRUFBRUMsd0JBQVlNLHVCQURiO0FBRUxULElBQUFBLFFBQVEsRUFBUkEsUUFGSztBQUdMTSxJQUFBQSxHQUFHLEVBQUhBLEdBSEs7QUFJTEMs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TyxTQUFTOEcsc0JBQVQsR0FHTDtBQUNBLFNBQU87QUFDTHRKLElBQUFBLElBQUksRUFBRUMsd0JBQVlzSjtBQURiLEdBQVA7QUFHRDs7QUFpQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0MsYUFBVCxDQUNMQyxPQURLLEVBRTBFO0FBQy9FLFNBQU87QUFDTHpKLElBQUFBLElBQUksRUFBRUMsd0JBQVl5SixlQURiO0FBRUxELElBQUFBLE9BQU8sRUFBUEE7QUFGSyxHQUFQO0FBSUQ7O0FBUUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0Usa0JBQVQsQ0FDTEYsT0FESyxFQUVvRjtBQUN6RixTQUFPO0FBQ0x6SixJQUFBQSxJQUFJLEVBQUVDLHdCQUFZMkosb0JBRGI7QUFFTEgsSUFBQUEsT0FBTyxFQUFQQTtBQUZLLEdBQVA7QUFJRDs7QUFRRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTSSwyQkFBVCxDQUNMakksTUFESyxFQUtMO0FBQ0EsU0FBTztBQUNMNUIsSUFBQUEsSUFBSSxFQUFFQyx3QkFBWTZKLCtCQURiO0FBRUxsSSxJQUFBQSxNQUFNLEVBQU5BO0FBRkssR0FBUDtBQUlEOztBQVNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU21JLDRCQUFULENBQ0wzSixHQURLLEVBRUx3QixNQUZLLEVBTUw7QUFDQSxTQUFPO0FBQ0w1QixJQUFBQSxJQUFJLEVBQUVDLHdCQUFZK0osZ0NBRGI7QUFFTDVKLElBQUFBLEdBQUcsRUFBSEEsR0FGSztBQUdMd0IsSUFBQUEsTUFBTSxFQUFOQTtBQUhLLEdBQVA7QUFLRDtBQUVEO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOzs7QUFDQSxJQUFNcUksZUFBZSxHQUFHLElBQXhCO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG4vLyB2aXMtc3RhdGUtcmVkdWNlclxuaW1wb3J0IHtQaWNrSW5mb30gZnJvbSAnQGRlY2suZ2wvY29yZS9saWIvZGVjayc7XG5pbXBvcnQge2RlZmF1bHQgYXMgQWN0aW9uVHlwZXN9IGZyb20gJy4vYWN0aW9uLXR5cGVzJztcbmltcG9ydCB7RmlsZUNhY2hlSXRlbX0gZnJvbSAnQGtlcGxlci5nbC9wcm9jZXNzb3JzJztcbmltcG9ydCB7TGF5ZXIsIExheWVyQmFzZUNvbmZpZ30gZnJvbSAnQGtlcGxlci5nbC9sYXllcnMnO1xuaW1wb3J0IHtcbiAgQWRkRGF0YVRvTWFwUGF5bG9hZCxcbiAgVmFsdWVPZixcbiAgTWVyZ2UsXG4gIFJHQkNvbG9yLFxuICBOZXN0ZWRQYXJ0aWFsLFxuICBMYXllclZpc0NvbmZpZyxcbiAgQ29sb3JVSSxcbiAgRmVhdHVyZSxcbiAgRmVhdHVyZVNlbGVjdGlvbkNvbnRleHQsXG4gIEludGVyYWN0aW9uQ29uZmlnLFxuICBGaWx0ZXIsXG4gIFBhcnNlZENvbmZpZ1xufSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcbi8vIFRPRE8gLSBpbXBvcnQgTG9hZGVyT2JqZWN0IHR5cGUgZnJvbSBAbG9hZGVycy5nbC9jb3JlIHdoZW4gc3VwcG9ydGVkXG4vLyBUT0RPIC0gaW1wb3J0IExvYWRPcHRpb25zIHR5cGUgZnJvbSBAbG9hZGVycy5nbC9jb3JlIHdoZW4gc3VwcG9ydGVkXG5cbmV4cG9ydCB0eXBlIExheWVyQ29uZmlnQ2hhbmdlVXBkYXRlckFjdGlvbiA9IHtcbiAgb2xkTGF5ZXI6IExheWVyO1xuICBuZXdDb25maWc6IFBhcnRpYWw8TGF5ZXJCYXNlQ29uZmlnPjtcbn07XG4vKipcbiAqIFVwZGF0ZSBsYXllciBiYXNlIGNvbmZpZzogZGF0YUlkLCBsYWJlbCwgY29sdW1uLCBpc1Zpc2libGVcbiAqIEBwYXJhbSBvbGRMYXllciAtIGxheWVyIHRvIGJlIHVwZGF0ZWRcbiAqIEBwYXJhbSBuZXdDb25maWcgLSBuZXcgY29uZmlnIHRvIGJlIG1lcmdlZCB3aXRoIG9sZCBjb25maWdcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJDb25maWdDaGFuZ2UoXG4gIG9sZExheWVyOiBMYXllcixcbiAgbmV3Q29uZmlnOiBQYXJ0aWFsPExheWVyQmFzZUNvbmZpZz5cbik6IE1lcmdlPExheWVyQ29uZmlnQ2hhbmdlVXBkYXRlckFjdGlvbiwge3R5cGU6IHR5cGVvZiBBY3Rpb25UeXBlcy5MQVlFUl9DT05GSUdfQ0hBTkdFfT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkxBWUVSX0NPTkZJR19DSEFOR0UsXG4gICAgb2xkTGF5ZXIsXG4gICAgbmV3Q29uZmlnXG4gIH07XG59XG5leHBvcnQgdHlwZSBMYXllclRleHRMYWJlbENoYW5nZVVwZGF0ZXJBY3Rpb24gPSB7XG4gIG9sZExheWVyOiBMYXllcjtcbiAgaWR4OiBudW1iZXIgfCAnYWxsJztcbiAgcHJvcDogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xufTtcblxuLyoqXG4gKiBVcGRhdGUgbGF5ZXIgdGV4dCBsYWJlbFxuICogQHBhcmFtIG9sZExheWVyIC0gbGF5ZXIgdG8gYmUgdXBkYXRlZFxuICogQHBhcmFtIGlkeCAtYGlkeGAgb2YgdGV4dCBsYWJlbCB0byBiZSB1cGRhdGVkXG4gKiBAcGFyYW0gcHJvcCAtIGBwcm9wYCBvZiB0ZXh0IGxhYmVsLCBlLGcsIGBhbmNob3JgLCBgYWxpZ25tZW50YCwgYGNvbG9yYCwgYHNpemVgLCBgZmllbGRgXG4gKiBAcGFyYW0gdmFsdWUgLSBuZXcgdmFsdWVcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJUZXh0TGFiZWxDaGFuZ2UoXG4gIG9sZExheWVyOiBMYXllcixcbiAgaWR4OiBudW1iZXIgfCAnYWxsJyxcbiAgcHJvcDogc3RyaW5nLFxuICB2YWx1ZTogYW55XG4pOiBNZXJnZTxMYXllclRleHRMYWJlbENoYW5nZVVwZGF0ZXJBY3Rpb24sIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuTEFZRVJfVEVYVF9MQUJFTF9DSEFOR0V9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfVEVYVF9MQUJFTF9DSEFOR0UsXG4gICAgb2xkTGF5ZXIsXG4gICAgaWR4LFxuICAgIHByb3AsXG4gICAgdmFsdWVcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgTGF5ZXJTZXRJc1ZhbGlkVXBkYXRlckFjdGlvbiA9IHtcbiAgb2xkTGF5ZXI6IExheWVyO1xuICBpc1ZhbGlkOiBib29sZWFuO1xufTtcblxuLyoqXG4gKiBDaGFuZ2VzIHZhbHVlIG9mIGlzVmFsaWQgZmxhZyBmb3IgYSBsYXllci5cbiAqIFRoZSBhY3Rpb24gYWxzbyB1cGRhdGVzIHZpc2liaWxpdHkgb2YgdGhlIGxheWVyIGJhc2VkIG9uIGlzVmFsaWQuXG4gKiBAcGFyYW0gb2xkTGF5ZXIgLSBsYXllciB0byBiZSB1cGRhdGVkXG4gKiBAcGFyYW0gaXNWYWxpZCAtIG5ldyB2YWx1ZSBmb3IgaXNWYWxpZCBmbGFnXG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyU2V0SXNWYWxpZChcbiAgb2xkTGF5ZXI6IExheWVyLFxuICBpc1ZhbGlkOiBib29sZWFuXG4pOiBNZXJnZTxMYXllclNldElzVmFsaWRVcGRhdGVyQWN0aW9uLCB7dHlwZTogdHlwZW9mIEFjdGlvblR5cGVzLkxBWUVSX1NFVF9JU19WQUxJRH0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9TRVRfSVNfVkFMSUQsXG4gICAgb2xkTGF5ZXIsXG4gICAgaXNWYWxpZFxuICB9O1xufVxuXG5leHBvcnQgdHlwZSBMYXllclR5cGVDaGFuZ2VVcGRhdGVyQWN0aW9uID0ge1xuICBvbGRMYXllcjogTGF5ZXI7XG4gIG5ld1R5cGU6IHN0cmluZztcbn07XG4vKipcbiAqIFVwZGF0ZSBsYXllciB0eXBlLiBQcmV2aWV3cyBsYXllciBjb25maWcgd2lsbCBiZSBjb3BpZWQgaWYgYXBwbGljYWJsZS5cbiAqIEBwYXJhbSBvbGRMYXllciAtIGxheWVyIHRvIGJlIHVwZGF0ZWRcbiAqIEBwYXJhbSBuZXdUeXBlIC0gbmV3IHR5cGVcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJUeXBlQ2hhbmdlKFxuICBvbGRMYXllcjogTGF5ZXIsXG4gIG5ld1R5cGU6IHN0cmluZ1xuKTogTWVyZ2U8TGF5ZXJUeXBlQ2hhbmdlVXBkYXRlckFjdGlvbiwge3R5cGU6IHR5cGVvZiBBY3Rpb25UeXBlcy5MQVlFUl9UWVBFX0NIQU5HRX0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MQVlFUl9UWVBFX0NIQU5HRSxcbiAgICBvbGRMYXllcixcbiAgICBuZXdUeXBlXG4gIH07XG59XG5leHBvcnQgdHlwZSBMYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2VVcGRhdGVyQWN0aW9uID0ge1xuICBvbGRMYXllcjogTGF5ZXI7XG4gIG5ld0NvbmZpZzogUGFydGlhbDxMYXllckJhc2VDb25maWc+O1xuICBjaGFubmVsOiBzdHJpbmc7XG59O1xuLyoqXG4gKiBVcGRhdGUgbGF5ZXIgdmlzdWFsIGNoYW5uZWxcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBvbGRMYXllciAtIGxheWVyIHRvIGJlIHVwZGF0ZWRcbiAqIEBwYXJhbSBuZXdDb25maWcgLSBuZXcgdmlzdWFsIGNoYW5uZWwgY29uZmlnXG4gKiBAcGFyYW0gY2hhbm5lbCAtIGNoYW5uZWwgdG8gYmUgdXBkYXRlZFxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2UoXG4gIG9sZExheWVyOiBMYXllcixcbiAgbmV3Q29uZmlnOiBQYXJ0aWFsPExheWVyQmFzZUNvbmZpZz4sXG4gIGNoYW5uZWw6IHN0cmluZ1xuKTogTWVyZ2U8XG4gIExheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZVVwZGF0ZXJBY3Rpb24sXG4gIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuTEFZRVJfVklTVUFMX0NIQU5ORUxfQ0hBTkdFfVxuPiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfVklTVUFMX0NIQU5ORUxfQ0hBTkdFLFxuICAgIG9sZExheWVyLFxuICAgIG5ld0NvbmZpZyxcbiAgICBjaGFubmVsXG4gIH07XG59XG5leHBvcnQgdHlwZSBMYXllclZpc0NvbmZpZ0NoYW5nZVVwZGF0ZXJBY3Rpb24gPSB7XG4gIG9sZExheWVyOiBMYXllcjtcbiAgbmV3VmlzQ29uZmlnOiBQYXJ0aWFsPExheWVyVmlzQ29uZmlnPjtcbn07XG4vKipcbiAqIFVwZGF0ZSBsYXllciBgdmlzQ29uZmlnYFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIG9sZExheWVyIC0gbGF5ZXIgdG8gYmUgdXBkYXRlZFxuICogQHBhcmFtIG5ld1Zpc0NvbmZpZyAtIG5ldyB2aXNDb25maWcgYXMgYSBrZXkgdmFsdWUgbWFwOiBlLmcuIGB7b3BhY2l0eTogMC44fWBcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJWaXNDb25maWdDaGFuZ2UoXG4gIG9sZExheWVyOiBMYXllcixcbiAgbmV3VmlzQ29uZmlnOiBQYXJ0aWFsPExheWVyVmlzQ29uZmlnPlxuKTogTWVyZ2U8TGF5ZXJWaXNDb25maWdDaGFuZ2VVcGRhdGVyQWN0aW9uLCB7dHlwZTogdHlwZW9mIEFjdGlvblR5cGVzLkxBWUVSX1ZJU19DT05GSUdfQ0hBTkdFfT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkxBWUVSX1ZJU19DT05GSUdfQ0hBTkdFLFxuICAgIG9sZExheWVyLFxuICAgIG5ld1Zpc0NvbmZpZ1xuICB9O1xufVxuZXhwb3J0IHR5cGUgTGF5ZXJDb2xvclVJQ2hhbmdlVXBkYXRlckFjdGlvbiA9IHtcbiAgb2xkTGF5ZXI6IExheWVyO1xuICBwcm9wOiBzdHJpbmc7XG4gIG5ld0NvbmZpZzogTmVzdGVkUGFydGlhbDxDb2xvclVJPjtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBjb2xvciBwYWxldHRlIHVpIGZvciBsYXllciBjb2xvclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIG9sZExheWVyIC0gbGF5ZXIgdG8gYmUgdXBkYXRlZFxuICogQHBhcmFtIHByb3AgLSB3aGljaCBjb2xvciBwcm9wXG4gKiBAcGFyYW0gbmV3Q29uZmlnIC0gdG8gYmUgbWVyZ2VkXG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyQ29sb3JVSUNoYW5nZShcbiAgb2xkTGF5ZXI6IExheWVyLFxuICBwcm9wOiBzdHJpbmcsXG4gIG5ld0NvbmZpZzogTmVzdGVkUGFydGlhbDxDb2xvclVJPlxuKTogTWVyZ2U8TGF5ZXJDb2xvclVJQ2hhbmdlVXBkYXRlckFjdGlvbiwge3R5cGU6IHR5cGVvZiBBY3Rpb25UeXBlcy5MQVlFUl9DT0xPUl9VSV9DSEFOR0V9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfQ09MT1JfVUlfQ0hBTkdFLFxuICAgIG9sZExheWVyLFxuICAgIHByb3AsXG4gICAgbmV3Q29uZmlnXG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZUxheWVyQmxlbmRpbmdVcGRhdGVyQWN0aW9uID0ge1xuICBtb2RlOiAnYWRkaXRpdmUnIHwgJ25vcm1hbCcgfCAnc3VidHJhY3RpdmUnO1xufTtcbi8qKlxuICogVXBkYXRlIGxheWVyIGJsZW5kaW5nIG1vZGVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBtb2RlIG9uZSBvZiBgYWRkaXRpdmVgLCBgbm9ybWFsYCBhbmQgYHN1YnRyYWN0aXZlYFxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMYXllckJsZW5kaW5nKFxuICBtb2RlOiAnYWRkaXRpdmUnIHwgJ25vcm1hbCcgfCAnc3VidHJhY3RpdmUnXG4pOiBNZXJnZTxVcGRhdGVMYXllckJsZW5kaW5nVXBkYXRlckFjdGlvbiwge3R5cGU6IHR5cGVvZiBBY3Rpb25UeXBlcy5VUERBVEVfTEFZRVJfQkxFTkRJTkd9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuVVBEQVRFX0xBWUVSX0JMRU5ESU5HLFxuICAgIG1vZGVcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXBkYXRlT3ZlcmxheUJsZW5kaW5nVXBkYXRlckFjdGlvbiA9IHtcbiAgbW9kZTogJ3NjcmVlbicgfCAnbm9ybWFsJyB8ICdkYXJrZW4nO1xufTtcblxuLyoqXG4gKiBVcGRhdGUgb3ZlcmxheSBibGVuZGluZyBtb2RlXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gbW9kZSBvbmUgb2YgYHNjcmVlbmAsIGBub3JtYWxgIGFuZCBgZGFya2VuYFxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVPdmVybGF5QmxlbmRpbmcoXG4gIG1vZGU6ICdzY3JlZW4nIHwgJ25vcm1hbCcgfCAnZGFya2VuJ1xuKTogTWVyZ2U8VXBkYXRlT3ZlcmxheUJsZW5kaW5nVXBkYXRlckFjdGlvbiwge3R5cGU6IHR5cGVvZiBBY3Rpb25UeXBlcy5VUERBVEVfT1ZFUkxBWV9CTEVORElOR30+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5VUERBVEVfT1ZFUkxBWV9CTEVORElORyxcbiAgICBtb2RlXG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIEludGVyYWN0aW9uQ29uZmlnQ2hhbmdlVXBkYXRlckFjdGlvbiA9IHtcbiAgY29uZmlnOiBWYWx1ZU9mPEludGVyYWN0aW9uQ29uZmlnPjtcbn07XG4vKipcbiAqIFVwZGF0ZSBgaW50ZXJhY3Rpb25Db25maWdgXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gY29uZmlnIC0gbmV3IGNvbmZpZyBhcyBrZXkgdmFsdWUgbWFwOiBge3Rvb2x0aXA6IHtlbmFibGVkOiB0cnVlfX1gXG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVyYWN0aW9uQ29uZmlnQ2hhbmdlKFxuICBjb25maWc6IFZhbHVlT2Y8SW50ZXJhY3Rpb25Db25maWc+XG4pOiBNZXJnZTxcbiAgSW50ZXJhY3Rpb25Db25maWdDaGFuZ2VVcGRhdGVyQWN0aW9uLFxuICB7dHlwZTogdHlwZW9mIEFjdGlvblR5cGVzLklOVEVSQUNUSU9OX0NPTkZJR19DSEFOR0V9XG4+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5JTlRFUkFDVElPTl9DT05GSUdfQ0hBTkdFLFxuICAgIGNvbmZpZ1xuICB9O1xufVxuXG5leHBvcnQgdHlwZSBTZXRGaWx0ZXJVcGRhdGVyQWN0aW9uID0ge1xuICBpZHg6IG51bWJlcjtcbiAgcHJvcDogc3RyaW5nO1xuICB2YWx1ZTogYW55O1xuICB2YWx1ZUluZGV4PzogbnVtYmVyO1xufTtcbi8qKlxuICogVXBkYXRlIGZpbHRlciBwcm9wZXJ0eVxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGlkeCAtYGlkeGAgb2YgZmlsdGVyIHRvIGJlIHVwZGF0ZWRcbiAqIEBwYXJhbSBwcm9wIC0gYHByb3BgIG9mIGZpbHRlciwgZSxnLCBgZGF0YUlkYCwgYG5hbWVgLCBgdmFsdWVgXG4gKiBAcGFyYW0gdmFsdWUgLSBuZXcgdmFsdWVcbiAqIEBwYXJhbSB2YWx1ZUluZGV4IC0gZGF0YUlkIGluZGV4XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbHRlcihcbiAgaWR4OiBudW1iZXIsXG4gIHByb3A6IHN0cmluZyxcbiAgdmFsdWU6IGFueSxcbiAgdmFsdWVJbmRleD86IG51bWJlclxuKTogTWVyZ2U8U2V0RmlsdGVyVXBkYXRlckFjdGlvbiwge3R5cGU6IHR5cGVvZiBBY3Rpb25UeXBlcy5TRVRfRklMVEVSfT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlNFVF9GSUxURVIsXG4gICAgaWR4LFxuICAgIHByb3AsXG4gICAgdmFsdWUsXG4gICAgdmFsdWVJbmRleFxuICB9O1xufVxuXG5leHBvcnQgdHlwZSBTZXRGaWx0ZXJBbmltYXRpb25UaW1lVXBkYXRlckFjdGlvbiA9IHtcbiAgaWR4OiBudW1iZXI7XG4gIHByb3A6IHN0cmluZztcbiAgdmFsdWU6IGFueTtcbiAgdmFsdWVJbmRleD86IG51bWJlcjtcbn07XG4vKipcbiAqIFNhbWUgYXMgVXBkYXRlIGZpbHRlclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGlkeCAtYGlkeGAgb2YgZmlsdGVyIHRvIGJlIHVwZGF0ZWRcbiAqIEBwYXJhbSBwcm9wIC0gYHByb3BgIG9mIGZpbHRlciwgZSxnLCBgZGF0YUlkYCwgYG5hbWVgLCBgdmFsdWVgXG4gKiBAcGFyYW0gdmFsdWUgLSBuZXcgdmFsdWVcbiAqIEBwYXJhbSB2YWx1ZUluZGV4IC0gZGF0YUlkIGluZGV4XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbHRlckFuaW1hdGlvblRpbWUoXG4gIGlkeDogbnVtYmVyLFxuICBwcm9wOiBzdHJpbmcsXG4gIHZhbHVlOiBhbnksXG4gIHZhbHVlSW5kZXg/OiBudW1iZXJcbik6IE1lcmdlPFxuICBTZXRGaWx0ZXJBbmltYXRpb25UaW1lVXBkYXRlckFjdGlvbixcbiAge3R5cGU6IHR5cGVvZiBBY3Rpb25UeXBlcy5TRVRfRklMVEVSX0FOSU1BVElPTl9USU1FfVxuPiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX0ZJTFRFUl9BTklNQVRJT05fVElNRSxcbiAgICBpZHgsXG4gICAgcHJvcCxcbiAgICB2YWx1ZSxcbiAgICB2YWx1ZUluZGV4XG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIFNldEZpbHRlckFuaW1hdGlvbldpbmRvd1VwZGF0ZXJBY3Rpb24gPSB7XG4gIGlkOiBzdHJpbmc7XG4gIGFuaW1hdGlvbldpbmRvdzogc3RyaW5nO1xufTtcbi8qKlxuICogU2FtZSBhcyBVcGRhdGUgZmlsdGVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWx0ZXJBbmltYXRpb25XaW5kb3coe1xuICBpZCxcbiAgYW5pbWF0aW9uV2luZG93XG59OiBTZXRGaWx0ZXJBbmltYXRpb25XaW5kb3dVcGRhdGVyQWN0aW9uKTogTWVyZ2U8XG4gIFNldEZpbHRlckFuaW1hdGlvbldpbmRvd1VwZGF0ZXJBY3Rpb24sXG4gIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuU0VUX0ZJTFRFUl9BTklNQVRJT05fV0lORE9XfVxuPiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX0ZJTFRFUl9BTklNQVRJT05fV0lORE9XLFxuICAgIGlkLFxuICAgIGFuaW1hdGlvbldpbmRvd1xuICB9O1xufVxuXG5leHBvcnQgdHlwZSBBZGRGaWx0ZXJVcGRhdGVyQWN0aW9uID0ge1xuICBkYXRhSWQ/OiBzdHJpbmcgfCBzdHJpbmdbXSB8IG51bGw7XG59O1xuLyoqXG4gKiBBZGQgYSBuZXcgZmlsdGVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gZGF0YUlkIC0gZGF0YXNldCBgaWRgIHRoaXMgbmV3IGZpbHRlciBpcyBhc3NvY2lhdGVkIHdpdGhcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkRmlsdGVyKFxuICBkYXRhSWQ6IHN0cmluZyB8IG51bGxcbik6IE1lcmdlPEFkZEZpbHRlclVwZGF0ZXJBY3Rpb24sIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuQUREX0ZJTFRFUn0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5BRERfRklMVEVSLFxuICAgIGRhdGFJZFxuICB9O1xufVxuXG5leHBvcnQgdHlwZSBBZGRMYXllclVwZGF0ZXJBY3Rpb24gPSB7XG4gIGNvbmZpZz86IG9iamVjdDtcbiAgZGF0YXNldElkPzogc3RyaW5nO1xufTtcbi8qKlxuICogQWRkIGEgbmV3IGxheWVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gY29uZmlnIC0gbmV3IGxheWVyIGNvbmZpZ1xuICogQHBhcmFtIGRhdGFzZXRJZCAtIGRhdGFzZXQgaWQgdXNlZCBmb3IgY3JlYXRpbmcgYW4gZW1wdHkgbGF5ZXJcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTGF5ZXIoXG4gIGNvbmZpZz86IG9iamVjdCxcbiAgZGF0YXNldElkPzogc3RyaW5nXG4pOiBNZXJnZTxBZGRMYXllclVwZGF0ZXJBY3Rpb24sIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuQUREX0xBWUVSfT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkFERF9MQVlFUixcbiAgICBjb25maWcsXG4gICAgZGF0YXNldElkXG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIFJlb3JkZXJMYXllclVwZGF0ZXJBY3Rpb24gPSB7XG4gIG9yZGVyOiBudW1iZXJbXTtcbn07XG4vKipcbiAqIFJlb3JkZXIgbGF5ZXIsIG9yZGVyIGlzIGFuIGFycmF5IG9mIGxheWVyIGluZGV4ZXMsIGluZGV4IDAgd2lsbCBiZSB0aGUgb25lIGF0IHRoZSBib3R0b21cbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBvcmRlciBhbiBhcnJheSBvZiBsYXllciBpbmRleGVzXG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKlxuICogLy8gYnJpbmcgYGxheWVyc1sxXWAgYmVsb3cgYGxheWVyc1swXWAsIHRoZSBzZXF1ZW5jZSBsYXllcnMgd2lsbCBiZSByZW5kZXJlZCBpcyBgMWAsIGAwYCwgYDJgLCBgM2AuXG4gKiAvLyBgMWAgd2lsbCBiZSBhdCB0aGUgYm90dG9tLCBgM2Agd2lsbCBiZSBhdCB0aGUgdG9wLlxuICogdGhpcy5wcm9wcy5kaXNwYXRjaChyZW9yZGVyTGF5ZXIoWzEsIDAsIDIsIDNdKSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW9yZGVyTGF5ZXIoXG4gIG9yZGVyOiBudW1iZXJbXVxuKTogTWVyZ2U8UmVvcmRlckxheWVyVXBkYXRlckFjdGlvbiwge3R5cGU6IHR5cGVvZiBBY3Rpb25UeXBlcy5SRU9SREVSX0xBWUVSfT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlJFT1JERVJfTEFZRVIsXG4gICAgb3JkZXJcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgUmVtb3ZlRmlsdGVyVXBkYXRlckFjdGlvbiA9IHtcbiAgaWR4OiBudW1iZXI7XG59O1xuLyoqXG4gKiBSZW1vdmUgYSBmaWx0ZXIgZnJvbSBgdmlzU3RhdGUuZmlsdGVyc2AsIG9uY2UgYSBmaWx0ZXIgaXMgcmVtb3ZlZCwgZGF0YSB3aWxsIGJlIHJlLWZpbHRlcmVkIGFuZCBsYXllciB3aWxsIGJlIHVwZGF0ZWRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBpZHggaWR4IG9mIGZpbHRlciB0byBiZSByZW1vdmVkXG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZpbHRlcihcbiAgaWR4OiBudW1iZXJcbik6IE1lcmdlPFJlbW92ZUZpbHRlclVwZGF0ZXJBY3Rpb24sIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuUkVNT1ZFX0ZJTFRFUn0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5SRU1PVkVfRklMVEVSLFxuICAgIGlkeFxuICB9O1xufVxuXG5leHBvcnQgdHlwZSBSZW1vdmVMYXllclVwZGF0ZXJBY3Rpb24gPSB7XG4gIGlkOiBzdHJpbmcgfCBudW1iZXI7XG59O1xuLyoqXG4gKiBSZW1vdmUgYSBsYXllclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGlkIGlkeCBvZiBsYXllciB0byBiZSByZW1vdmVkXG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUxheWVyKFxuICBpZDogc3RyaW5nIHwgbnVtYmVyXG4pOiBNZXJnZTxSZW1vdmVMYXllclVwZGF0ZXJBY3Rpb24sIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuUkVNT1ZFX0xBWUVSfT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlJFTU9WRV9MQVlFUixcbiAgICBpZFxuICB9O1xufVxuXG5leHBvcnQgdHlwZSBEdXBsaWNhdGVMYXllclVwZGF0ZXJBY3Rpb24gPSB7XG4gIGlkeDogbnVtYmVyO1xufTtcbi8qKlxuICogRHVwbGljYXRlIGEgbGF5ZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBpZHggaWR4IG9mIGxheWVyIHRvIGJlIGR1cGxpY2F0ZWRcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gZHVwbGljYXRlTGF5ZXIoXG4gIGlkeDogbnVtYmVyXG4pOiBNZXJnZTxEdXBsaWNhdGVMYXllclVwZGF0ZXJBY3Rpb24sIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuRFVQTElDQVRFX0xBWUVSfT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkRVUExJQ0FURV9MQVlFUixcbiAgICBpZHhcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgUmVtb3ZlRGF0YXNldFVwZGF0ZXJBY3Rpb24gPSB7XG4gIGRhdGFJZDogc3RyaW5nO1xufTtcbi8qKlxuICogUmVtb3ZlIGEgZGF0YXNldCBhbmQgYWxsIGxheWVycywgZmlsdGVycywgdG9vbHRpcCBjb25maWdzIHRoYXQgYmFzZWQgb24gaXRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBkYXRhSWQgZGF0YXNldCBpZFxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEYXRhc2V0KFxuICBkYXRhSWQ6IHN0cmluZ1xuKTogTWVyZ2U8UmVtb3ZlRGF0YXNldFVwZGF0ZXJBY3Rpb24sIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuUkVNT1ZFX0RBVEFTRVR9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuUkVNT1ZFX0RBVEFTRVQsXG4gICAgZGF0YUlkXG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIFNob3dEYXRhc2V0VGFibGVVcGRhdGVyQWN0aW9uID0ge1xuICBkYXRhSWQ6IHN0cmluZztcbn07XG4vKipcbiAqIERpc3BsYXkgZGF0YXNldCB0YWJsZSBpbiBhIG1vZGFsXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gZGF0YUlkIGRhdGFzZXQgaWQgdG8gc2hvdyBpbiB0YWJsZVxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93RGF0YXNldFRhYmxlKFxuICBkYXRhSWQ6IHN0cmluZ1xuKTogTWVyZ2U8U2hvd0RhdGFzZXRUYWJsZVVwZGF0ZXJBY3Rpb24sIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuU0hPV19EQVRBU0VUX1RBQkxFfT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlNIT1dfREFUQVNFVF9UQUJMRSxcbiAgICBkYXRhSWRcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXBkYXRlRGF0YXNldENvbG9yVXBkYXRlciA9IHtcbiAgZGF0YUlkOiBzdHJpbmc7XG4gIG5ld0NvbG9yOiBSR0JDb2xvcjtcbn07XG4vKipcbiAqIFVwZGF0ZSBkYXRhc2V0IGNvbG9yIHRvIGN1c3RvbSBieSBtZWFucyBvZiBjb2xvciBwaWNrZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBkYXRhSWQgZGF0YXNldCBgaWRgIHRoaXMgY3VzdG9tIGNvbG9yIGlzIGFzc29jaWF0ZWQgd2l0aFxuICogQHBhcmFtIG5ld0NvbG9yIGN1c3RvbSBjb2xvciBpbiBSR0Jmb3JtYXRcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVGFibGVDb2xvcihcbiAgZGF0YUlkOiBzdHJpbmcsXG4gIG5ld0NvbG9yOiBSR0JDb2xvclxuKTogTWVyZ2U8VXBkYXRlRGF0YXNldENvbG9yVXBkYXRlciwge3R5cGU6IHR5cGVvZiBBY3Rpb25UeXBlcy5VUERBVEVfVEFCTEVfQ09MT1J9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuVVBEQVRFX1RBQkxFX0NPTE9SLFxuICAgIGRhdGFJZCxcbiAgICBuZXdDb2xvclxuICB9O1xufVxuXG5leHBvcnQgdHlwZSBTb3J0VGFibGVDb2x1bW5VcGRhdGVyQWN0aW9uID0ge1xuICBkYXRhSWQ6IHN0cmluZztcbiAgY29sdW1uOiBzdHJpbmc7XG4gIG1vZGU/OiBzdHJpbmc7XG59O1xuLyoqXG4gKiBTb3J0IGRhdGFzZXQgY29sdW1uLCBmb3IgdGFibGUgZGlzcGxheVxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGRhdGFJZFxuICogQHBhcmFtIGNvbHVtblxuICogQHBhcmFtIG1vZGVcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gc29ydFRhYmxlQ29sdW1uKFxuICBkYXRhSWQ6IHN0cmluZyxcbiAgY29sdW1uOiBzdHJpbmcsXG4gIG1vZGU/OiBzdHJpbmdcbik6IE1lcmdlPFNvcnRUYWJsZUNvbHVtblVwZGF0ZXJBY3Rpb24sIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuU09SVF9UQUJMRV9DT0xVTU59PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU09SVF9UQUJMRV9DT0xVTU4sXG4gICAgZGF0YUlkLFxuICAgIGNvbHVtbixcbiAgICBtb2RlXG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIFBpblRhYmxlQ29sdW1uVXBkYXRlckFjdGlvbiA9IHtcbiAgZGF0YUlkOiBzdHJpbmc7XG4gIGNvbHVtbjogc3RyaW5nO1xufTtcbi8qKlxuICogUGluIGRhdGFzZXQgY29sdW1uLCBmb3IgdGFibGUgZGlzcGxheVxuICogQHBhcmFtIGRhdGFJZFxuICogQHBhcmFtIGNvbHVtblxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwaW5UYWJsZUNvbHVtbihcbiAgZGF0YUlkOiBzdHJpbmcsXG4gIGNvbHVtbjogc3RyaW5nXG4pOiBNZXJnZTxQaW5UYWJsZUNvbHVtblVwZGF0ZXJBY3Rpb24sIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuUElOX1RBQkxFX0NPTFVNTn0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5QSU5fVEFCTEVfQ09MVU1OLFxuICAgIGRhdGFJZCxcbiAgICBjb2x1bW5cbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgQ29weVRhYmxlQ29sdW1uVXBkYXRlckFjdGlvbiA9IHtcbiAgZGF0YUlkOiBzdHJpbmc7XG4gIGNvbHVtbjogc3RyaW5nO1xufTtcbi8qKlxuICogQ29weSBjb2x1bW4sIGZvciB0YWJsZSBkaXNwbGF5XG4gKiBAcGFyYW0gZGF0YUlkXG4gKiBAcGFyYW0gY29sdW1uXG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcHlUYWJsZUNvbHVtbihcbiAgZGF0YUlkOiBzdHJpbmcsXG4gIGNvbHVtbjogc3RyaW5nXG4pOiBNZXJnZTxDb3B5VGFibGVDb2x1bW5VcGRhdGVyQWN0aW9uLCB7dHlwZTogdHlwZW9mIEFjdGlvblR5cGVzLkNPUFlfVEFCTEVfQ09MVU1OfT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkNPUFlfVEFCTEVfQ09MVU1OLFxuICAgIGRhdGFJZCxcbiAgICBjb2x1bW5cbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgU2V0Q29sdW1uRGlzcGxheUZvcm1hdFVwZGF0ZXJBY3Rpb24gPSB7XG4gIGRhdGFJZDogc3RyaW5nO1xuICBmb3JtYXRzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICB9O1xufTtcblxuLyoqXG4gKiBTZXQgY29sdW1uIGRpc3BsYXkgZm9ybWF0XG4gKiBAcGFyYW0gZGF0YUlkXG4gKiBAcGFyYW0gZm9ybWF0c1xuICogQHJldHVybnMgYWN0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb2x1bW5EaXNwbGF5Rm9ybWF0KFxuICBkYXRhSWQ6IHN0cmluZyxcbiAgZm9ybWF0czoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgfVxuKTogTWVyZ2U8XG4gIFNldENvbHVtbkRpc3BsYXlGb3JtYXRVcGRhdGVyQWN0aW9uLFxuICB7dHlwZTogdHlwZW9mIEFjdGlvblR5cGVzLlNFVF9DT0xVTU5fRElTUExBWV9GT1JNQVR9XG4+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfQ09MVU1OX0RJU1BMQVlfRk9STUFULFxuICAgIGRhdGFJZCxcbiAgICBmb3JtYXRzXG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIEFkZERhdGFUb01hcFVwZGF0ZXJPcHRpb25zID0ge1xuICBjZW50ck1hcD86IGJvb2xlYW47XG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcbiAga2VlcEV4aXN0aW5nQ29uZmlnPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZVZpc0RhdGFVcGRhdGVyQWN0aW9uID0ge1xuICBkYXRhc2V0czogQWRkRGF0YVRvTWFwUGF5bG9hZFsnZGF0YXNldHMnXTtcbiAgb3B0aW9uczogQWRkRGF0YVRvTWFwUGF5bG9hZFsnb3B0aW9ucyddO1xuICBjb25maWc/OiBQYXJzZWRDb25maWc7XG59O1xuLy8gKiBAcGFyYW0gZGF0YXNldC5pbmZvIC1pbmZvIG9mIGEgZGF0YXNldFxuLy8gKiBAcGFyYW0gZGF0YXNldC5pbmZvLmlkIC0gaWQgb2YgdGhpcyBkYXRhc2V0LiBJZiBjb25maWcgaXMgZGVmaW5lZCwgYGlkYCBzaG91bGQgbWF0Y2hlcyB0aGUgYGRhdGFJZGAgaW4gY29uZmlnLlxuLy8gKiBAcGFyYW0gZGF0YXNldC5pbmZvLmxhYmVsIC0gQSBkaXNwbGF5IG5hbWUgb2YgdGhpcyBkYXRhc2V0XG4vLyAqIEBwYXJhbSBkYXRhc2V0LmRhdGEgLSAqKipyZXF1aXJlZCoqIFRoZSBkYXRhIG9iamVjdCwgaW4gYSB0YWJ1bGFyIGZvcm1hdCB3aXRoIDIgcHJvcGVydGllcyBgZmllbGRzYCBhbmQgYHJvd3NgXG4vLyAqIEBwYXJhbSBkYXRhc2V0LmRhdGEuZmllbGRzIC0gKioqcmVxdWlyZWQqKiBBcnJheSBvZiBmaWVsZHMsXG4vLyAqIEBwYXJhbSBkYXRhc2V0LmRhdGEuZmllbGRzLm5hbWUgLSAqKipyZXF1aXJlZCoqIE5hbWUgb2YgdGhlIGZpZWxkLFxuLy8gKiBAcGFyYW0gZGF0YXNldC5kYXRhLnJvd3MgLSAqKipyZXF1aXJlZCoqIEFycmF5IG9mIHJvd3MsIGluIGEgdGFidWxhciBmb3JtYXQgd2l0aCBgZmllbGRzYCBhbmQgYHJvd3NgXG4vKipcbiAqIEFkZCBuZXcgZGF0YXNldCB0byBgdmlzU3RhdGVgLCB3aXRoIG9wdGlvbiB0byBsb2FkIGEgbWFwIGNvbmZpZyBhbG9uZyB3aXRoIHRoZSBkYXRhc2V0c1xuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGRhdGFzZXRzIC0gKioqcmVxdWlyZWQqKiBkYXRhc2V0cyBjYW4gYmUgYSBkYXRhc2V0IG9yIGFuIGFycmF5IG9mIGRhdGFzZXRzXG4gKiBFYWNoIGRhdGFzZXQgb2JqZWN0IG5lZWRzIHRvIGhhdmUgYGluZm9gIGFuZCBgZGF0YWAgcHJvcGVydHkuXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtIG9wdGlvbnMuY2VudGVyTWFwIGBkZWZhdWx0OiB0cnVlYCBpZiBgY2VudGVyTWFwYCBpcyBzZXQgdG8gYHRydWVgIGtlcGxlci5nbCB3aWxsXG4gKiBwbGFjZSB0aGUgbWFwIHZpZXcgd2l0aGluIHRoZSBkYXRhIHBvaW50cyBib3VuZGFyaWVzXG4gKiBAcGFyYW0gb3B0aW9ucy5yZWFkT25seSBgZGVmYXVsdDogZmFsc2VgIGlmIGByZWFkT25seWAgaXMgc2V0IHRvIGB0cnVlYFxuICogdGhlIGxlZnQgc2V0dGluZyBwYW5lbCB3aWxsIGJlIGhpZGRlblxuICogQHBhcmFtIGNvbmZpZyB0aGlzIG9iamVjdCB3aWxsIGNvbnRhaW4gdGhlIGZ1bGwga2VwbGVyLmdsIGluc3RhbmNlIGNvbmZpZ3VyYXRpb24ge21hcFN0YXRlLCBtYXBTdHlsZSwgdmlzU3RhdGV9XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVZpc0RhdGEoXG4gIGRhdGFzZXRzOiBBZGREYXRhVG9NYXBQYXlsb2FkWydkYXRhc2V0cyddLFxuICBvcHRpb25zOiBBZGREYXRhVG9NYXBQYXlsb2FkWydvcHRpb25zJ10sXG4gIGNvbmZpZz86IFBhcnNlZENvbmZpZ1xuKTogTWVyZ2U8VXBkYXRlVmlzRGF0YVVwZGF0ZXJBY3Rpb24sIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuVVBEQVRFX1ZJU19EQVRBfT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlVQREFURV9WSVNfREFUQSxcbiAgICBkYXRhc2V0cyxcbiAgICBvcHRpb25zLFxuICAgIGNvbmZpZ1xuICB9O1xufVxuXG5leHBvcnQgdHlwZSBSZW5hbWVEYXRhc2V0VXBkYXRlckFjdGlvbiA9IHtcbiAgZGF0YUlkOiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG59O1xuLyoqXG4gKiBSZW5hbWUgYW4gZXhpc3RpbmcgZGF0YXNldCBpbiBgdmlzU3RhdGVgXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gZGF0YUlkIC0gKioqcmVxdWlyZWQqKiBJZCBvZiB0aGUgZGF0YXNldCB0byB1cGRhdGVcbiAqIEBwYXJhbSBsYWJlbCAtICoqKnJlcXVpcmVkKiogTmV3IG5hbWUgZm9yIHRoZSBkYXRhc2V0XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmFtZURhdGFzZXQoXG4gIGRhdGFJZDogc3RyaW5nLFxuICBsYWJlbDogc3RyaW5nXG4pOiBNZXJnZTxSZW5hbWVEYXRhc2V0VXBkYXRlckFjdGlvbiwge3R5cGU6IHR5cGVvZiBBY3Rpb25UeXBlcy5SRU5BTUVfREFUQVNFVH0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5SRU5BTUVfREFUQVNFVCxcbiAgICBkYXRhSWQsXG4gICAgbGFiZWxcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXBkYXRlRGF0YXNldFByb3BzVXBkYXRlckFjdGlvbiA9IHtcbiAgZGF0YUlkOiBzdHJpbmc7XG4gIHByb3BzOiB7XG4gICAgbGFiZWw/OiBzdHJpbmc7XG4gICAgY29sb3I/OiBSR0JDb2xvcjtcbiAgICBtZXRhZGF0YT86IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICB9O1xufTtcbi8qKlxuICogVXBkYXRlIGFuIGV4aXN0aW5nIGRhdGFzZXQgcHJvcHMgaW4gYHZpc1N0YXRlYFxuICogQHBhcmFtIGRhdGFJZCAtICoqKnJlcXVpcmVkKiogSWQgb2YgdGhlIGRhdGFzZXQgdG8gdXBkYXRlXG4gKiBAcGFyYW0gcHJvcHMgLSAqKipyZXF1aXJlZCoqIE5ldyBwcm9wcyB0byB1cGRhdGVcbiAqIEByZXR1cm5zIGFjdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRGF0YXNldFByb3BzKFxuICBkYXRhSWQ6IHN0cmluZyxcbiAgcHJvcHM6IHtcbiAgICBsYWJlbD86IHN0cmluZztcbiAgICBjb2xvcj86IFJHQkNvbG9yO1xuICAgIG1ldGFkYXRhPzogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIH1cbik6IE1lcmdlPFVwZGF0ZURhdGFzZXRQcm9wc1VwZGF0ZXJBY3Rpb24sIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuVVBEQVRFX0RBVEFTRVRfUFJPUFN9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuVVBEQVRFX0RBVEFTRVRfUFJPUFMsXG4gICAgZGF0YUlkLFxuICAgIHByb3BzXG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIFRvZ2dsZUZpbHRlckFuaW1hdGlvblVwZGF0ZXJBY3Rpb24gPSB7XG4gIGlkeDogbnVtYmVyO1xufTtcbi8qKlxuICogU3RhcnQgYW5kIGVuZCBmaWx0ZXIgYW5pbWF0aW9uXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gaWR4IG9mIGZpbHRlclxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVGaWx0ZXJBbmltYXRpb24oXG4gIGlkeDogbnVtYmVyXG4pOiBNZXJnZTxUb2dnbGVGaWx0ZXJBbmltYXRpb25VcGRhdGVyQWN0aW9uLCB7dHlwZTogdHlwZW9mIEFjdGlvblR5cGVzLlRPR0dMRV9GSUxURVJfQU5JTUFUSU9OfT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlRPR0dMRV9GSUxURVJfQU5JTUFUSU9OLFxuICAgIGlkeFxuICB9O1xufVxuXG5leHBvcnQgdHlwZSBVcGRhdGVGaWx0ZXJBbmltYXRpb25TcGVlZFVwZGF0ZXJBY3Rpb24gPSB7XG4gIGlkeDogbnVtYmVyO1xuICBzcGVlZDogbnVtYmVyO1xufTtcbi8qKlxuICogQ2hhbmdlIGZpbHRlciBhbmltYXRpb24gc3BlZWRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBpZHggLSAgYGlkeGAgb2YgZmlsdGVyXG4gKiBAcGFyYW0gc3BlZWQgLSBgc3BlZWRgIHRvIGNoYW5nZSBpdCB0by4gYHNwZWVkYCBpcyBhIG11bHRpcGxpZXJcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRmlsdGVyQW5pbWF0aW9uU3BlZWQoXG4gIGlkeDogbnVtYmVyLFxuICBzcGVlZDogbnVtYmVyXG4pOiBNZXJnZTxcbiAgVXBkYXRlRmlsdGVyQW5pbWF0aW9uU3BlZWRVcGRhdGVyQWN0aW9uLFxuICB7dHlwZTogdHlwZW9mIEFjdGlvblR5cGVzLlVQREFURV9GSUxURVJfQU5JTUFUSU9OX1NQRUVEfVxuPiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuVVBEQVRFX0ZJTFRFUl9BTklNQVRJT05fU1BFRUQsXG4gICAgaWR4LFxuICAgIHNwZWVkXG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIFNldExheWVyQW5pbWF0aW9uVGltZVVwZGF0ZXJBY3Rpb24gPSB7XG4gIHZhbHVlOiBudW1iZXI7XG59O1xuLyoqXG4gKiBSZXNldCBhbmltYXRpb25cbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSB2YWx1ZSAtICBDdXJyZW50IHZhbHVlIG9mIHRoZSBzbGlkZXJcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0TGF5ZXJBbmltYXRpb25UaW1lKFxuICB2YWx1ZTogbnVtYmVyXG4pOiBNZXJnZTxTZXRMYXllckFuaW1hdGlvblRpbWVVcGRhdGVyQWN0aW9uLCB7dHlwZTogdHlwZW9mIEFjdGlvblR5cGVzLlNFVF9MQVlFUl9BTklNQVRJT05fVElNRX0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfTEFZRVJfQU5JTUFUSU9OX1RJTUUsXG4gICAgdmFsdWVcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgVXBkYXRlTGF5ZXJBbmltYXRpb25TcGVlZFVwZGF0ZXJBY3Rpb24gPSB7XG4gIHNwZWVkOiBudW1iZXI7XG59O1xuLyoqXG4gKiB1cGRhdGUgdHJpcCBsYXllciBhbmltYXRpb24gc3BlZWRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBzcGVlZCAtIGBzcGVlZGAgdG8gY2hhbmdlIGl0IHRvLiBgc3BlZWRgIGlzIGEgbXVsdGlwbGllclxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMYXllckFuaW1hdGlvblNwZWVkKFxuICBzcGVlZDogbnVtYmVyXG4pOiBNZXJnZTxcbiAgVXBkYXRlTGF5ZXJBbmltYXRpb25TcGVlZFVwZGF0ZXJBY3Rpb24sXG4gIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuVVBEQVRFX0xBWUVSX0FOSU1BVElPTl9TUEVFRH1cbj4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlVQREFURV9MQVlFUl9BTklNQVRJT05fU1BFRUQsXG4gICAgc3BlZWRcbiAgfTtcbn1cbmV4cG9ydCB0eXBlIFRvZ2dsZUxheWVyQW5pbWF0aW9uVXBkYXRlckFjdGlvbiA9IHt9O1xuLyoqXG4gKiBzdGFydCBlbmQgZW5kIGxheWVyIGFuaW1hdGlvblxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHJldHVybnMgYWN0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVMYXllckFuaW1hdGlvbigpOiBNZXJnZTxcbiAgVG9nZ2xlTGF5ZXJBbmltYXRpb25VcGRhdGVyQWN0aW9uLFxuICB7dHlwZTogdHlwZW9mIEFjdGlvblR5cGVzLlRPR0dMRV9MQVlFUl9BTklNQVRJT059XG4+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5UT0dHTEVfTEFZRVJfQU5JTUFUSU9OXG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIFRvZ2dsZUxheWVyQW5pbWF0aW9uQ29udHJvbFVwZGF0ZXJBY3Rpb24gPSB7fTtcbi8qKlxuICogaGlkZSBhbmQgc2hvdyBsYXllciBhbmltYXRpb24gY29udHJvbFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHJldHVybnMgYWN0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVMYXllckFuaW1hdGlvbkNvbnRyb2woKTogTWVyZ2U8XG4gIFRvZ2dsZUxheWVyQW5pbWF0aW9uQ29udHJvbFVwZGF0ZXJBY3Rpb24sXG4gIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuVE9HR0xFX0xBWUVSX0FOSU1BVElPTl9DT05UUk9MfVxuPiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuVE9HR0xFX0xBWUVSX0FOSU1BVElPTl9DT05UUk9MXG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIFNldEZpbHRlclZpZXdVcGRhdGVyQWN0aW9uID0ge1xuICBpZHg6IG51bWJlcjtcbiAgdmlldzogRmlsdGVyWyd2aWV3J107XG59O1xuLyoqXG4gKiBTaG93IGxhcmdlciB0aW1lIGZpbHRlciBhdCBib3R0b20gZm9yIHRpbWUgcGxheWJhY2sgKGFwcGx5IHRvIHRpbWUgZmlsdGVyIG9ubHkpXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gaWR4IC0gaW5kZXggb2YgZmlsdGVyIHRvIGVubGFyZ2VcbiAqIEBwYXJhbSB2aWV3IC0gdHlwZSBvZiBmaWx0ZXIgdmlld1xuICogQHJldHVybnMgYWN0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWx0ZXJWaWV3KFxuICBpZHg6IG51bWJlcixcbiAgdmlldzogRmlsdGVyWyd2aWV3J11cbik6IE1lcmdlPFNldEZpbHRlclZpZXdVcGRhdGVyQWN0aW9uLCB7dHlwZTogdHlwZW9mIEFjdGlvblR5cGVzLlNFVF9GSUxURVJfVklFV30+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfRklMVEVSX1ZJRVcsXG4gICAgaWR4LFxuICAgIHZpZXdcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgVG9nZ2xlRmlsdGVyRmVhdHVyZVVwZGF0ZXJBY3Rpb24gPSB7XG4gIGlkeDogbnVtYmVyO1xufTtcbi8qKlxuICogU2hvdy9oaWRlIGZpbHRlciBmZWF0dXJlIG9uIG1hcFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGlkeCAtIGluZGV4IG9mIGZpbHRlciBmZWF0dXJlIHRvIHNob3cvaGlkZVxuICogQHJldHVybiBhY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUZpbHRlckZlYXR1cmUoXG4gIGlkeDogbnVtYmVyXG4pOiBNZXJnZTxUb2dnbGVGaWx0ZXJGZWF0dXJlVXBkYXRlckFjdGlvbiwge3R5cGU6IHR5cGVvZiBBY3Rpb25UeXBlcy5UT0dHTEVfRklMVEVSX0ZFQVRVUkV9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuVE9HR0xFX0ZJTFRFUl9GRUFUVVJFLFxuICAgIGlkeFxuICB9O1xufVxuXG5leHBvcnQgdHlwZSBPbkxheWVySG92ZXJVcGRhdGVyQWN0aW9uID0ge1xuICBpbmZvOiAoUGlja0luZm88YW55PiAmIHttYXBJbmRleD86IG51bWJlcn0pIHwgbnVsbDtcbn07XG4vKipcbiAqIFRyaWdnZXIgbGF5ZXIgaG92ZXIgZXZlbnQgd2l0aCBob3ZlcmVkIG9iamVjdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGluZm8gLSBPYmplY3QgaG92ZXJlZCwgcmV0dXJuZWQgYnkgZGVjay5nbC4gSW5jbHVkZXMgYW4gb3B0aW9uYWwgYG1hcEluZGV4YCBwcm9wZXJ0eSBmb3IgbGltaXRpbmcgdGhlIGRpc3BsYXkgb2YgdGhlIGA8TWFwUG9wb3Zlcj5gIHRvIHRoZSBgPE1hcENvbnRhaW5lcj5gIHRoZSB1c2VyIGlzIGludGVyYWN0aW5nIHdpdGguXG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uTGF5ZXJIb3ZlcihcbiAgaW5mbzogKFBpY2tJbmZvPGFueT4gJiB7bWFwSW5kZXg/OiBudW1iZXJ9KSB8IG51bGxcbik6IE1lcmdlPE9uTGF5ZXJIb3ZlclVwZGF0ZXJBY3Rpb24sIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuTEFZRVJfSE9WRVJ9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTEFZRVJfSE9WRVIsXG4gICAgaW5mb1xuICB9O1xufVxuXG5leHBvcnQgdHlwZSBPbkxheWVyQ2xpY2tVcGRhdGVyQWN0aW9uID0ge1xuICBpbmZvOiBQaWNrSW5mbzxhbnk+IHwgbnVsbDtcbn07XG4vKipcbiAqIFRyaWdnZXIgbGF5ZXIgY2xpY2sgZXZlbnQgd2l0aCBjbGlja2VkIG9iamVjdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGluZm8gLSBPYmplY3QgY2xpY2tlZCwgcmV0dXJuZWQgYnkgZGVjay5nbFxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvbkxheWVyQ2xpY2soXG4gIGluZm86IFBpY2tJbmZvPGFueT4gfCBudWxsXG4pOiBNZXJnZTxPbkxheWVyQ2xpY2tVcGRhdGVyQWN0aW9uLCB7dHlwZTogdHlwZW9mIEFjdGlvblR5cGVzLkxBWUVSX0NMSUNLfT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLkxBWUVSX0NMSUNLLFxuICAgIGluZm9cbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgT25NYXBDbGlja1VwZGF0ZXJBY3Rpb24gPSB7fTtcbi8qKlxuICogVHJpZ2dlciBtYXAgY2xpY2sgZXZlbnQsIHVuc2VsZWN0IGNsaWNrZWQgb2JqZWN0XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uTWFwQ2xpY2soKTogTWVyZ2U8T25NYXBDbGlja1VwZGF0ZXJBY3Rpb24sIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuTUFQX0NMSUNLfT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLk1BUF9DTElDS1xuICB9O1xufVxuXG5leHBvcnQgdHlwZSBPbk1vdXNlTW92ZVVwZGF0ZXJBY3Rpb24gPSB7XG4gIGV2dDtcbn07XG4vKipcbiAqIFRyaWdnZXIgbWFwIG1vdXNlIG1vdmVldmVudCwgcGF5bG9hZCB3b3VsZCBiZVxuICogUmVhY3QtbWFwLWdsIFBvaW50ZXJFdmVudFxuICogaHR0cHM6Ly91YmVyLmdpdGh1Yi5pby9yZWFjdC1tYXAtZ2wvIy9kb2N1bWVudGF0aW9uL2FwaS1yZWZlcmVuY2UvcG9pbnRlci1ldmVudFxuICpcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBldnQgLSBQb2ludGVyRXZlbnRcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gb25Nb3VzZU1vdmUoXG4gIGV2dFxuKTogTWVyZ2U8T25Nb3VzZU1vdmVVcGRhdGVyQWN0aW9uLCB7dHlwZTogdHlwZW9mIEFjdGlvblR5cGVzLk1PVVNFX01PVkV9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTU9VU0VfTU9WRSxcbiAgICBldnRcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgVG9nZ2xlTGF5ZXJGb3JNYXBVcGRhdGVyQWN0aW9uID0ge1xuICBtYXBJbmRleDogbnVtYmVyO1xuICBsYXllcklkOiBzdHJpbmc7XG59O1xuLyoqXG4gKiBUb2dnbGUgdmlzaWJpbGl0eSBvZiBhIGxheWVyIGluIGEgc3BsaXQgbWFwXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gbWFwSW5kZXggLSBpbmRleCBvZiB0aGUgc3BsaXQgbWFwXG4gKiBAcGFyYW0gbGF5ZXJJZCAtIGlkIG9mIHRoZSBsYXllclxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVMYXllckZvck1hcChcbiAgbWFwSW5kZXg6IG51bWJlcixcbiAgbGF5ZXJJZDogc3RyaW5nXG4pOiBNZXJnZTxUb2dnbGVMYXllckZvck1hcFVwZGF0ZXJBY3Rpb24sIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuVE9HR0xFX0xBWUVSX0ZPUl9NQVB9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuVE9HR0xFX0xBWUVSX0ZPUl9NQVAsXG4gICAgbWFwSW5kZXgsXG4gICAgbGF5ZXJJZFxuICB9O1xufVxuXG5leHBvcnQgdHlwZSBTZXRGaWx0ZXJQbG90VXBkYXRlckFjdGlvbiA9IHtcbiAgaWR4OiBudW1iZXI7XG4gIG5ld1Byb3A6IG9iamVjdDtcbiAgdmFsdWVJbmRleD86IG51bWJlcjtcbn07XG4vKipcbiAqIFNldCB0aGUgcHJvcGVydHkgb2YgYSBmaWx0ZXIgcGxvdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGlkeFxuICogQHBhcmFtIG5ld1Byb3Aga2V5IHZhbHVlIG1hcHBpbmcgb2YgbmV3IHByb3AgYHt5QXhpczogJ2hpc3RvZ3JhbSd9YFxuICogQHBhcmFtIHZhbHVlSW5kZXggZGF0YUlkIGluZGV4XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbHRlclBsb3QoXG4gIGlkeDogbnVtYmVyLFxuICBuZXdQcm9wOiBvYmplY3QsXG4gIHZhbHVlSW5kZXg/OiBudW1iZXJcbik6IE1lcmdlPFNldEZpbHRlclBsb3RVcGRhdGVyQWN0aW9uLCB7dHlwZTogdHlwZW9mIEFjdGlvblR5cGVzLlNFVF9GSUxURVJfUExPVH0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfRklMVEVSX1BMT1QsXG4gICAgaWR4LFxuICAgIG5ld1Byb3AsXG4gICAgdmFsdWVJbmRleFxuICB9O1xufVxuXG5leHBvcnQgdHlwZSBTZXRNYXBJbmZvVXBkYXRlckFjdGlvbiA9IHtcbiAgaW5mbzogYW55O1xufTtcbi8qKlxuICogU2V0IHRoZSBwcm9wZXJ0eSBvZiBhIGZpbHRlciBwbG90XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gaW5mb1xuICogQHJldHVybnMgYWN0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRNYXBJbmZvKFxuICBpbmZvOiBhbnlcbik6IE1lcmdlPFNldE1hcEluZm9VcGRhdGVyQWN0aW9uLCB7dHlwZTogdHlwZW9mIEFjdGlvblR5cGVzLlNFVF9NQVBfSU5GT30+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfTUFQX0lORk8sXG4gICAgaW5mb1xuICB9O1xufVxuXG5leHBvcnQgdHlwZSBMb2FkRmlsZXNVcGRhdGVyQWN0aW9uID0ge1xuICBmaWxlczogRmlsZVtdO1xuICBvbkZpbmlzaD8ocmVzdWx0OiBhbnkpOiBhbnk7XG59O1xuLyoqXG4gKiBUcmlnZ2VyIGZpbGUgbG9hZGluZyBkaXNwYXRjaCBgYWRkRGF0YVRvTWFwYCBpZiBzdWNjZWVkLCBvciBgbG9hZEZpbGVzRXJyYCBpZiBmYWlsZWRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBmaWxlcyBhcnJheSBvZiBmaWxlYmxvYlxuICogQHJldHVybnMgYWN0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRmlsZXMoXG4gIGZpbGVzOiBGaWxlW10sXG4gIG9uRmluaXNoPzogKHJlc3VsdDogYW55KSA9PiBhbnlcbik6IE1lcmdlPExvYWRGaWxlc1VwZGF0ZXJBY3Rpb24sIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuTE9BRF9GSUxFU30+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MT0FEX0ZJTEVTLFxuICAgIGZpbGVzLFxuICAgIG9uRmluaXNoXG4gIH07XG59XG5cbi8qKlxuICogQ2FsbGVkIHdpdGggbmV4dCBmaWxlIHRvIGxvYWRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gbG9hZE5leHRGaWxlKCk6IHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuTE9BRF9ORVhUX0ZJTEV9IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MT0FEX05FWFRfRklMRVxuICB9O1xufVxuXG5leHBvcnQgdHlwZSBsb2FkRmlsZXNTdWNjZXNzVXBkYXRlckFjdGlvbiA9IHtcbiAgcmVzdWx0OiBGaWxlQ2FjaGVJdGVtW107XG59O1xuLyoqXG4gKiBjYWxsZWQgd2hlbiBhbGwgZmlsZXMgYXJlIHByb2Nlc3NlZCBhbmQgbG9hZGVkXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gcmVzdWx0XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGaWxlc1N1Y2Nlc3MoXG4gIHJlc3VsdDogRmlsZUNhY2hlSXRlbVtdXG4pOiBNZXJnZTxsb2FkRmlsZXNTdWNjZXNzVXBkYXRlckFjdGlvbiwge3R5cGU6IHR5cGVvZiBBY3Rpb25UeXBlcy5MT0FEX0ZJTEVTX1NVQ0NFU1N9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTE9BRF9GSUxFU19TVUNDRVNTLFxuICAgIHJlc3VsdFxuICB9O1xufVxuXG5leHBvcnQgdHlwZSBMb2FkRmlsZVN0ZXBTdWNjZXNzQWN0aW9uID0ge1xuICBmaWxlTmFtZTogc3RyaW5nO1xuICBmaWxlQ2FjaGU6IEZpbGVDYWNoZUl0ZW1bXTtcbn07XG4vKipcbiAqIGNhbGxlZCB3aGVuIHN1Y2Nlc3NmdWxseSBsb2FkZWQgb25lIGZpbGUsIHJlYWR5IHRvIG1vdmUgb24gdG8gdGhlIG5leHQgb25lXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gcmVzdWx0XG4gKiBAcmV0dXJucyBhY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGaWxlU3RlcFN1Y2Nlc3Moe1xuICBmaWxlTmFtZSxcbiAgZmlsZUNhY2hlXG59OiB7XG4gIGZpbGVOYW1lOiBzdHJpbmc7XG4gIGZpbGVDYWNoZTogRmlsZUNhY2hlSXRlbVtdO1xufSk6IE1lcmdlPExvYWRGaWxlU3RlcFN1Y2Nlc3NBY3Rpb24sIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuTE9BRF9GSUxFX1NURVBfU1VDQ0VTU30+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5MT0FEX0ZJTEVfU1RFUF9TVUNDRVNTLFxuICAgIGZpbGVOYW1lLFxuICAgIGZpbGVDYWNoZVxuICB9O1xufVxuXG5leHBvcnQgdHlwZSBMb2FkRmlsZXNFcnJVcGRhdGVyQWN0aW9uID0ge1xuICBmaWxlTmFtZTogc3RyaW5nO1xuICBlcnJvcjogYW55O1xufTtcbi8qKlxuICogVHJpZ2dlciBsb2FkaW5nIGZpbGUgZXJyb3JcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSAgZXJyb3JcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRmlsZXNFcnIoXG4gIGZpbGVOYW1lOiBzdHJpbmcsXG4gIGVycm9yOiBhbnlcbik6IE1lcmdlPExvYWRGaWxlc0VyclVwZGF0ZXJBY3Rpb24sIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuTE9BRF9GSUxFU19FUlJ9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuTE9BRF9GSUxFU19FUlIsXG4gICAgZmlsZU5hbWUsXG4gICAgZXJyb3JcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgU2V0RmVhdHVyZXNVcGRhdGVyQWN0aW9uID0ge1xuICBmZWF0dXJlczogRmVhdHVyZVtdO1xufTtcbi8qKlxuICogU3RvcmUgZmVhdHVyZXMgdG8gc3RhdGVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBmZWF0dXJlc1xuICogQHJldHVybnMgYWN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGZWF0dXJlcyhcbiAgZmVhdHVyZXM6IEZlYXR1cmVbXVxuKTogTWVyZ2U8U2V0RmVhdHVyZXNVcGRhdGVyQWN0aW9uLCB7dHlwZTogdHlwZW9mIEFjdGlvblR5cGVzLlNFVF9GRUFUVVJFU30+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfRkVBVFVSRVMsXG4gICAgZmVhdHVyZXNcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgU2V0UG9seWdvbkZpbHRlckxheWVyVXBkYXRlckFjdGlvbiA9IHtcbiAgbGF5ZXI6IExheWVyO1xuICBmZWF0dXJlOiBGZWF0dXJlO1xufTtcbi8qKlxuICogSXQgd2lsbCBhcHBseSB0aGUgcHJvdmlkZSBmZWF0dXJlIGFzIGZpbHRlciB0byB0aGUgZ2l2ZW4gbGF5ZXIuXG4gKiBJZiB0aGUgZ2l2ZW4gZmVhdHVyZSBpcyBhbHJlYWR5IGFwcGxpZWQgYXMgZmlsdGVyIHRvIHRoZSBsYXllciwgaXQgd2lsbCByZW1vdmUgdGhlIGxheWVyIGZyb20gdGhlIGZpbHRlclxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGxheWVyXG4gKiBAcGFyYW0gZmVhdHVyZVxuICogQHJldHVybnMgYWN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRQb2x5Z29uRmlsdGVyTGF5ZXIoXG4gIGxheWVyOiBMYXllcixcbiAgZmVhdHVyZTogRmVhdHVyZVxuKTogTWVyZ2U8U2V0UG9seWdvbkZpbHRlckxheWVyVXBkYXRlckFjdGlvbiwge3R5cGU6IHR5cGVvZiBBY3Rpb25UeXBlcy5TRVRfUE9MWUdPTl9GSUxURVJfTEFZRVJ9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX1BPTFlHT05fRklMVEVSX0xBWUVSLFxuICAgIGxheWVyLFxuICAgIGZlYXR1cmVcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgU2V0U2VsZWN0ZWRGZWF0dXJlVXBkYXRlckFjdGlvbiA9IHtcbiAgZmVhdHVyZTogRmVhdHVyZSB8IG51bGw7XG4gIHNlbGVjdGlvbkNvbnRleHQ/OiBGZWF0dXJlU2VsZWN0aW9uQ29udGV4dDtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBjdXJyZW50IGZlYXR1cmUgdG8gYmUgZWRpdGVkL2RlbGV0ZWQsXG4gKiBhbmQgdGhlIGNvbnRleHQgb2YgaG93IHRoZSBmZWF0dXJlIHdhcyBzZWxlY3RlZC5cbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBmZWF0dXJlXG4gKiBAcGFyYW0gc2VsZWN0aW9uQ29udGV4dFxuICogQHJldHVybnMgYWN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRTZWxlY3RlZEZlYXR1cmUoXG4gIGZlYXR1cmU6IEZlYXR1cmUgfCBudWxsLFxuICBzZWxlY3Rpb25Db250ZXh0PzogRmVhdHVyZVNlbGVjdGlvbkNvbnRleHRcbik6IE1lcmdlPFNldFNlbGVjdGVkRmVhdHVyZVVwZGF0ZXJBY3Rpb24sIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuU0VUX1NFTEVDVEVEX0ZFQVRVUkV9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX1NFTEVDVEVEX0ZFQVRVUkUsXG4gICAgZmVhdHVyZSxcbiAgICBzZWxlY3Rpb25Db250ZXh0XG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIERlbGV0ZUZlYXR1cmVVcGRhdGVyQWN0aW9uID0ge1xuICBmZWF0dXJlOiBGZWF0dXJlO1xufTtcbi8qKlxuICogRGVsZXRlIHRoZSBnaXZlbiBmZWF0dXJlXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0gZmVhdHVyZVxuICogQHJldHVybnMgYWN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVGZWF0dXJlKFxuICBmZWF0dXJlOiBGZWF0dXJlXG4pOiBNZXJnZTxEZWxldGVGZWF0dXJlVXBkYXRlckFjdGlvbiwge3R5cGU6IHR5cGVvZiBBY3Rpb25UeXBlcy5ERUxFVEVfRkVBVFVSRX0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5ERUxFVEVfRkVBVFVSRSxcbiAgICBmZWF0dXJlXG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIFNldEVkaXRvck1vZGVVcGRhdGVyQWN0aW9uID0ge1xuICBtb2RlOiBzdHJpbmc7XG59O1xuLyoqIFNldCB0aGUgbWFwIG1vZGVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBtb2RlIG9uZSBvZiBFRElUT1JfTU9ERVNcbiAqIEByZXR1cm5zIGFjdGlvblxuICogQHB1YmxpY1xuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7c2V0TWFwTW9kZX0gZnJvbSAna2VwbGVyLmdsL2FjdGlvbnMnO1xuICogaW1wb3J0IHtFRElUT1JfTU9ERVN9IGZyb20gJ2tlcGxlci5nbC9jb25zdGFudHMnO1xuICpcbiAqIHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0TWFwTW9kZShFRElUT1JfTU9ERVMuRFJBV19QT0xZR09OKSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRFZGl0b3JNb2RlKFxuICBtb2RlOiBzdHJpbmdcbik6IE1lcmdlPFNldEVkaXRvck1vZGVVcGRhdGVyQWN0aW9uLCB7dHlwZTogdHlwZW9mIEFjdGlvblR5cGVzLlNFVF9FRElUT1JfTU9ERX0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfRURJVE9SX01PREUsXG4gICAgbW9kZVxuICB9O1xufVxuXG5leHBvcnQgdHlwZSBBcHBseUNQVUZpbHRlclVwZGF0ZXJBY3Rpb24gPSB7XG4gIGRhdGFJZDogc3RyaW5nIHwgc3RyaW5nW107XG59O1xuLyoqXG4gKiBUcmlnZ2VyIENQVSBmaWx0ZXIgb2Ygc2VsZWN0ZWQgZGF0YXNldFxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGRhdGFJZCAtIHNpbmdsZSBkYXRhSWQgb3IgYW4gYXJyYXkgb2YgZGF0YUlkc1xuICogQHJldHVybnMgYWN0aW9uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUNQVUZpbHRlcihcbiAgZGF0YUlkOiBzdHJpbmcgfCBzdHJpbmdbXVxuKTogTWVyZ2U8QXBwbHlDUFVGaWx0ZXJVcGRhdGVyQWN0aW9uLCB7dHlwZTogdHlwZW9mIEFjdGlvblR5cGVzLkFQUExZX0NQVV9GSUxURVJ9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuQVBQTFlfQ1BVX0ZJTFRFUixcbiAgICBkYXRhSWRcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgVG9nZ2xlRWRpdG9yVmlzaWJpbGl0eVVwZGF0ZXJBY3Rpb24gPSB7fTtcbi8qKlxuICogVG9nZ2xlIGVkaXRvciBsYXllciB2aXNpYmlsaXR5XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVBY3Rpb25zXG4gKiBAcmV0dXJuIGFjdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRWRpdG9yVmlzaWJpbGl0eSgpOiBNZXJnZTxcbiAgVG9nZ2xlRWRpdG9yVmlzaWJpbGl0eVVwZGF0ZXJBY3Rpb24sXG4gIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuVE9HR0xFX0VESVRPUl9WSVNJQklMSVRZfVxuPiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuVE9HR0xFX0VESVRPUl9WSVNJQklMSVRZXG4gIH07XG59XG5cbnR5cGUgRmlsZUNvbnRlbnQgPSB7XG4gIGZpbGVOYW1lOiBzdHJpbmc7XG4gIGhlYWRlcjogc3RyaW5nW107XG4gIGRhdGE6IGFueTtcbn07XG5leHBvcnQgdHlwZSBOZXh0RmlsZUJhdGNoVXBkYXRlckFjdGlvbiA9IHtcbiAgcGF5bG9hZDoge1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gICAgZ2VuOiBBc3luY0dlbmVyYXRvcjxGaWxlQ29udGVudD47XG4gICAgZmlsZU5hbWU6IHN0cmluZztcbiAgICBwcm9ncmVzcz86IGFueTtcbiAgICBhY2N1bXVsYXRlZD86IGFueTtcbiAgICBvbkZpbmlzaDogKHJlc3VsdDogYW55KSA9PiBhbnk7XG4gIH07XG59O1xuLyoqXG4gKiBQcm9jZXNzIHRoZSBuZXh0IGZpbGUgYmF0Y2hcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBwYXlsb2FkIC0gYmF0Y2ggcGF5bG9hZFxuICogQHJldHVybiBhY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHRGaWxlQmF0Y2goXG4gIHBheWxvYWQ6IE5leHRGaWxlQmF0Y2hVcGRhdGVyQWN0aW9uWydwYXlsb2FkJ11cbik6IE1lcmdlPE5leHRGaWxlQmF0Y2hVcGRhdGVyQWN0aW9uLCB7dHlwZTogdHlwZW9mIEFjdGlvblR5cGVzLk5FWFRfRklMRV9CQVRDSH0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5ORVhUX0ZJTEVfQkFUQ0gsXG4gICAgcGF5bG9hZFxuICB9O1xufVxuXG5leHBvcnQgdHlwZSBQcm9jZXNzRmlsZUNvbnRlbnRVcGRhdGVyQWN0aW9uID0ge1xuICBwYXlsb2FkOiB7XG4gICAgY29udGVudDogRmlsZUNvbnRlbnQ7XG4gICAgZmlsZUNhY2hlOiBGaWxlQ2FjaGVJdGVtW107XG4gIH07XG59O1xuLyoqXG4gKiBQcm9jZXNzIHRoZSBmaWxlIGNvbnRlbnRcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBwYXlsb2FkIC0gdGhlIGZpbGUgY29udGVudFxuICogQHJldHVybiBhY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NGaWxlQ29udGVudChcbiAgcGF5bG9hZDogUHJvY2Vzc0ZpbGVDb250ZW50VXBkYXRlckFjdGlvblsncGF5bG9hZCddXG4pOiBNZXJnZTxQcm9jZXNzRmlsZUNvbnRlbnRVcGRhdGVyQWN0aW9uLCB7dHlwZTogdHlwZW9mIEFjdGlvblR5cGVzLlBST0NFU1NfRklMRV9DT05URU5UfT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLlBST0NFU1NfRklMRV9DT05URU5ULFxuICAgIHBheWxvYWRcbiAgfTtcbn1cblxuZXhwb3J0IHR5cGUgU2V0TGF5ZXJBbmltYXRpb25UaW1lQ29uZmlnQWN0aW9uID0ge1xuICBjb25maWc6IHtcbiAgICB0aW1lem9uZT86IHN0cmluZztcbiAgICB0aW1lRm9ybWF0Pzogc3RyaW5nO1xuICB9O1xufTtcbi8qKlxuICogU2V0IGxheWVyIGFuaW1hdGlvbiB0aW1lIGZvcm1hdCBhbmQgdGltZXpvbmVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSBjb25maWcgLSB7dGltZUZvcm1hdDogc3RyaW5nLCB0aW1lem9uZTogc3RyaW5nfVxuICogQHJldHVybiBhY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldExheWVyQW5pbWF0aW9uVGltZUNvbmZpZyhcbiAgY29uZmlnOiBTZXRMYXllckFuaW1hdGlvblRpbWVDb25maWdBY3Rpb25bJ2NvbmZpZyddXG4pOiBNZXJnZTxcbiAgU2V0TGF5ZXJBbmltYXRpb25UaW1lQ29uZmlnQWN0aW9uLFxuICB7dHlwZTogdHlwZW9mIEFjdGlvblR5cGVzLlNFVF9MQVlFUl9BTklNQVRJT05fVElNRV9DT05GSUd9XG4+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBY3Rpb25UeXBlcy5TRVRfTEFZRVJfQU5JTUFUSU9OX1RJTUVfQ09ORklHLFxuICAgIGNvbmZpZ1xuICB9O1xufVxuXG5leHBvcnQgdHlwZSBTZXRGaWx0ZXJBbmltYXRpb25UaW1lQ29uZmlnQWN0aW9uID0ge1xuICBpZHg6IG51bWJlcjtcbiAgY29uZmlnOiB7XG4gICAgdGltZXpvbmU/OiBzdHJpbmc7XG4gICAgdGltZUZvcm1hdD86IHN0cmluZztcbiAgfTtcbn07XG4vKipcbiAqIFNldCBGaWx0ZXIgYW5pbWF0aW9uIHRpbWUgZm9ybWF0IGFuZCB0aW1lem9uZVxuICogQG1lbWJlcm9mIHZpc1N0YXRlQWN0aW9uc1xuICogQHBhcmFtIGlkeFxuICogQHBhcmFtIGNvbmZpZ1xuICogQHJldHVybiBhY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbHRlckFuaW1hdGlvblRpbWVDb25maWcoXG4gIGlkeDogU2V0RmlsdGVyQW5pbWF0aW9uVGltZUNvbmZpZ0FjdGlvblsnaWR4J10sXG4gIGNvbmZpZzogU2V0RmlsdGVyQW5pbWF0aW9uVGltZUNvbmZpZ0FjdGlvblsnY29uZmlnJ11cbik6IE1lcmdlPFxuICBTZXRGaWx0ZXJBbmltYXRpb25UaW1lQ29uZmlnQWN0aW9uLFxuICB7dHlwZTogdHlwZW9mIEFjdGlvblR5cGVzLlNFVF9GSUxURVJfQU5JTUFUSU9OX1RJTUVfQ09ORklHfVxuPiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQWN0aW9uVHlwZXMuU0VUX0ZJTFRFUl9BTklNQVRJT05fVElNRV9DT05GSUcsXG4gICAgaWR4LFxuICAgIGNvbmZpZ1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZGVjbGFyYXRpb24gaXMgbmVlZGVkIHRvIGdyb3VwIGFjdGlvbnMgaW4gZG9jc1xuICovXG4vKipcbiAqIEFjdGlvbnMgaGFuZGxlZCBtb3N0bHkgYnkgYHZpc1N0YXRlYCByZWR1Y2VyLlxuICogVGhleSBtYW5hZ2UgaG93IGRhdGEgaXMgcHJvY2Vzc2VkLCBmaWx0ZXJlZCBhbmQgZGlzcGxheWVkIG9uIHRoZSBtYXAgYnkgb3BlcmF0ZXMgb24gbGF5ZXJzLFxuICogZmlsdGVycyBhbmQgaW50ZXJhY3Rpb24gc2V0dGluZ3MuXG4gKlxuICogQHB1YmxpY1xuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuLy8gQHRzLWlnbm9yZVxuY29uc3QgdmlzU3RhdGVBY3Rpb25zID0gbnVsbDtcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbiJdfQ==