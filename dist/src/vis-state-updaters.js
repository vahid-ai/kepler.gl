"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStateWithLayerAndData = updateStateWithLayerAndData;
exports.updateStateOnLayerVisibilityChange = updateStateOnLayerVisibilityChange;
exports.layerConfigChangeUpdater = layerConfigChangeUpdater;
exports.layerSetIsValidUpdater = layerSetIsValidUpdater;
exports.layerTextLabelChangeUpdater = layerTextLabelChangeUpdater;
exports.layerDataIdChangeUpdater = layerDataIdChangeUpdater;
exports.layerTypeChangeUpdater = layerTypeChangeUpdater;
exports.layerVisualChannelChangeUpdater = layerVisualChannelChangeUpdater;
exports.layerVisConfigChangeUpdater = layerVisConfigChangeUpdater;
exports.setFilterAnimationTimeUpdater = setFilterAnimationTimeUpdater;
exports.setFilterAnimationWindowUpdater = setFilterAnimationWindowUpdater;
exports.setFilterUpdater = setFilterUpdater;
exports.removeLayerUpdater = removeLayerUpdater;
exports.removeDatasetUpdater = removeDatasetUpdater;
exports.interactionConfigChangeUpdater = interactionConfigChangeUpdater;
exports.applyMergersUpdater = applyMergersUpdater;
exports.renameDatasetUpdater = renameDatasetUpdater;
exports.updateDatasetPropsUpdater = updateDatasetPropsUpdater;
exports.closeSpecificMapAtIndex = closeSpecificMapAtIndex;
exports.loadFileStepSuccessUpdater = loadFileStepSuccessUpdater;
exports.loadNextFileUpdater = loadNextFileUpdater;
exports.makeLoadFileTask = makeLoadFileTask;
exports.processFileContentUpdater = processFileContentUpdater;
exports.parseProgress = parseProgress;
exports.addDefaultLayers = addDefaultLayers;
exports.addDefaultTooltips = addDefaultTooltips;
exports.initialFileLoadingProgress = initialFileLoadingProgress;
exports.updateFileLoadingProgressUpdater = updateFileLoadingProgressUpdater;
exports.updateAllLayerDomainData = updateAllLayerDomainData;
exports.updateAnimationDomain = updateAnimationDomain;
exports.setFeaturesUpdater = setFeaturesUpdater;
exports.deleteFeatureUpdater = deleteFeatureUpdater;
exports.setPolygonFilterLayerUpdater = setPolygonFilterLayerUpdater;
exports.sortTableColumnUpdater = sortTableColumnUpdater;
exports.pinTableColumnUpdater = pinTableColumnUpdater;
exports.copyTableColumnUpdater = copyTableColumnUpdater;
exports.setColumnDisplayFormatUpdater = setColumnDisplayFormatUpdater;
exports.toggleEditorVisibilityUpdater = toggleEditorVisibilityUpdater;
exports.setFilterAnimationTimeConfigUpdater = setFilterAnimationTimeConfigUpdater;
exports.setLayerAnimationTimeConfigUpdater = setLayerAnimationTimeConfigUpdater;
exports.prepareStateForDatasetReplace = prepareStateForDatasetReplace;
exports.replaceDatasetDepsInState = replaceDatasetDepsInState;
exports.setSelectedFeatureUpdater = exports.setEditorModeUpdater = exports.setMapInfoUpdater = exports.applyCPUFilterUpdater = exports.loadFilesErrUpdater = exports.nextFileBatchUpdater = exports.loadFilesUpdater = exports.updateVisDataUpdater = exports.toggleLayerForMapUpdater = exports.toggleSplitMapUpdater = exports.mouseMoveUpdater = exports.mapClickUpdater = exports.layerClickUpdater = exports.layerHoverUpdater = exports.receiveMapConfigUpdater = exports.resetMapConfigUpdater = exports.updateTableColorUpdater = exports.showDatasetTableUpdater = exports.updateOverlayBlendingUpdater = exports.updateLayerBlendingUpdater = exports.reorderLayerUpdater = exports.duplicateLayerUpdater = exports.addLayerUpdater = exports.removeFilterUpdater = exports.toggleFilterFeatureUpdater = exports.setFilterViewUpdater = exports.updateLayerAnimationSpeedUpdater = exports.setLayerAnimationTimeUpdater = exports.updateFilterAnimationSpeedUpdater = exports.toggleLayerAnimationControlUpdater = exports.toggleLayerAnimationUpdater = exports.toggleFilterAnimationUpdater = exports.layerColorUIChangeUpdater = exports.addFilterUpdater = exports.setFilterPlotUpdater = exports.INITIAL_VIS_STATE = exports.DEFAULT_EDITOR = exports.DEFAULT_ANIMATION_CONFIG = exports.defaultInteractionConfig = void 0;

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _window = require("global/window");

var _tasks = require("react-palm/tasks");

var _lodash = _interopRequireDefault(require("lodash.clonedeep"));

var _lodash2 = _interopRequireDefault(require("lodash.uniq"));

var _lodash3 = _interopRequireDefault(require("lodash.get"));

var _lodash4 = _interopRequireDefault(require("lodash.xor"));

var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _tasks2 = require("@kepler.gl/tasks");

var _actions = require("@kepler.gl/actions");

var _utils = require("@kepler.gl/utils");

var _visStateMerger = require("./vis-state-merger");

var _mergerHandler = require("./merger-handler");

var _layers = require("@kepler.gl/layers");

var _constants = require("@kepler.gl/constants");

var _composerHelpers = require("./composer-helpers");

var _schemas = _interopRequireDefault(require("@kepler.gl/schemas"));

var _layerUtils = require("./layer-utils");

var _table = require("@kepler.gl/table");

var _interactionUtils = require("./interaction-utils");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// react-palm
// disable capture exception for react-palm call to withTask
(0, _tasks.disableStackCapturing)();
/**
 * Updaters for `visState` reducer. Can be used in your root reducer to directly modify kepler.gl's state.
 * Read more about [Using updaters](../advanced-usage/using-updaters.md)
 *
 * @public
 * @example
 *
 * import keplerGlReducer, {visStateUpdaters} from 'kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    case 'CLICK_BUTTON':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          foo: {
 *             ...state.keplerGl.foo,
 *             visState: visStateUpdaters.enlargeFilterUpdater(
 *               state.keplerGl.foo.visState,
 *               {idx: 0}
 *             )
 *          }
 *        }
 *      };
 *  }
 *  return reducers(state, action);
 * };
 *
 * export default composedReducer;
 */

/* eslint-disable no-unused-vars */
// @ts-ignore

var visStateUpdaters = null;
/* eslint-enable no-unused-vars */

var defaultInteractionConfig = {
  tooltip: {
    id: 'tooltip',
    label: 'interactions.tooltip',
    enabled: true,
    config: {
      fieldsToShow: {},
      compareMode: false,
      compareType: _constants.COMPARE_TYPES.ABSOLUTE
    }
  },
  geocoder: {
    id: 'geocoder',
    label: 'interactions.geocoder',
    enabled: false,
    position: null
  },
  brush: {
    id: 'brush',
    label: 'interactions.brush',
    enabled: false,
    config: {
      // size is in km
      size: 0.5
    }
  },
  coordinate: {
    id: 'coordinate',
    label: 'interactions.coordinate',
    enabled: false,
    position: null
  }
};
exports.defaultInteractionConfig = defaultInteractionConfig;
var DEFAULT_ANIMATION_CONFIG = {
  domain: null,
  currentTime: null,
  speed: 1,
  isAnimating: false,
  timeFormat: null,
  timezone: null,
  defaultTimeFormat: null,
  hideControl: false,
  duration: null
};
exports.DEFAULT_ANIMATION_CONFIG = DEFAULT_ANIMATION_CONFIG;
var DEFAULT_EDITOR = {
  mode: _constants.EDITOR_MODES.DRAW_POLYGON,
  features: [],
  selectedFeature: null,
  visible: true
};
/**
 * Default initial `visState`
 * @memberof visStateUpdaters
 * @constant
 * @public
 */

exports.DEFAULT_EDITOR = DEFAULT_EDITOR;
var INITIAL_VIS_STATE = {
  // map info
  mapInfo: {
    title: '',
    description: ''
  },
  // layers
  layers: [],
  layerData: [],
  layerToBeMerged: [],
  layerOrder: [],
  // filters
  filters: [],
  filterToBeMerged: [],
  // a collection of multiple dataset
  datasets: {},
  editingDataset: undefined,
  interactionConfig: defaultInteractionConfig,
  interactionToBeMerged: {},
  layerBlending: 'normal',
  overlayBlending: 'normal',
  hoverInfo: undefined,
  clicked: undefined,
  mousePos: {},
  maxDefaultTooltips: _constants.MAX_DEFAULT_TOOLTIPS,
  // this is used when user split maps
  splitMaps: [// this will contain a list of objects to
    // describe the state of layer availability and visibility for each map
    // [
    //   {
    //      layers: {layer_id: true | false}
    //   }
    // ]
  ],
  splitMapsToBeMerged: [],
  isMergingDatasets: {},
  // defaults layer classes
  layerClasses: _layers.LayerClasses,
  // default animation
  // time in unix timestamp (milliseconds) (the number of seconds since the Unix Epoch)
  animationConfig: DEFAULT_ANIMATION_CONFIG,
  editor: DEFAULT_EDITOR,
  fileLoading: false,
  fileLoadingProgress: {},
  loaders: [],
  loadOptions: {},
  // visStateMergers
  mergers: _visStateMerger.VIS_STATE_MERGERS,
  // kepler schemas
  schema: _schemas["default"]
};
/**
 * Update state with updated layer and layerData
 *
 */

exports.INITIAL_VIS_STATE = INITIAL_VIS_STATE;

function updateStateWithLayerAndData(state, _ref) {
  var layerData = _ref.layerData,
      layer = _ref.layer,
      idx = _ref.idx;
  return _objectSpread(_objectSpread({}, state), {}, {
    layers: state.layers.map(function (lyr, i) {
      return i === idx ? layer : lyr;
    }),
    layerData: layerData ? state.layerData.map(function (d, i) {
      return i === idx ? layerData : d;
    }) : state.layerData
  });
}

function updateStateOnLayerVisibilityChange(state, layer) {
  var newState = state;

  if (state.splitMaps.length) {
    newState = _objectSpread(_objectSpread({}, state), {}, {
      splitMaps: layer.config.isVisible ? (0, _utils.addNewLayersToSplitMap)(state.splitMaps, layer) : (0, _utils.removeLayerFromSplitMaps)(state.splitMaps, layer)
    });
  }

  if (layer.config.animation.enabled) {
    newState = updateAnimationDomain(state);
  }

  return newState;
}
/**
 * Update layer base config: dataId, label, column, isVisible
 * @memberof visStateUpdaters
 * @returns nextState
 */


function layerConfigChangeUpdater(state, action) {
  var oldLayer = action.oldLayer;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var props = Object.keys(action.newConfig);

  if (typeof action.newConfig.dataId === 'string') {
    var _action$newConfig = action.newConfig,
        dataId = _action$newConfig.dataId,
        restConfig = (0, _objectWithoutProperties2["default"])(_action$newConfig, ["dataId"]);
    var stateWithDataId = layerDataIdChangeUpdater(state, {
      oldLayer: oldLayer,
      newConfig: {
        dataId: dataId
      }
    });
    var nextLayer = stateWithDataId.layers.find(function (l) {
      return l.id === oldLayer.id;
    });
    return nextLayer && Object.keys(restConfig).length ? layerConfigChangeUpdater(stateWithDataId, {
      oldLayer: nextLayer,
      newConfig: restConfig
    }) : stateWithDataId;
  }

  var newLayer = oldLayer.updateLayerConfig(action.newConfig);
  var layerData;

  if (newLayer.shouldCalculateLayerData(props)) {
    var oldLayerData = state.layerData[idx];
    var updateLayerDataResult = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData);
    newLayer = updateLayerDataResult.layer;
    layerData = updateLayerDataResult.layerData;
  }

  var newState = state;

  if ('isVisible' in action.newConfig) {
    newState = updateStateOnLayerVisibilityChange(state, newLayer);
  }

  return updateStateWithLayerAndData(newState, {
    layer: newLayer,
    layerData: layerData,
    idx: idx
  });
}
/**
 * Updates isValid flag of a layer.
 * Updates isVisible based on the value of isValid.
 * Triggers update of data for the layer in order to get errors again during next update iteration.
 * @memberof visStateUpdaters
 * @returns nextState
 */


function layerSetIsValidUpdater(state, action) {
  var oldLayer = action.oldLayer,
      isValid = action.isValid;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var layerToUpdate = state.layers[idx];

  if (layerToUpdate) {
    var newLayer;
    var newData = null;

    if (isValid) {
      // Trigger data update in order to show errors again if present.
      var _calculateLayerData = (0, _layerUtils.calculateLayerData)(layerToUpdate, state, undefined),
          layer = _calculateLayerData.layer,
          layerData = _calculateLayerData.layerData;

      newLayer = layer;
      newData = layerData;
    } else {
      newLayer = layerToUpdate.updateLayerConfig({
        isVisible: false
      });
      newLayer.isValid = false;
    }

    return updateStateWithLayerAndData(state, {
      idx: idx,
      layer: newLayer,
      layerData: newData
    });
  }

  return state;
}

function addOrRemoveTextLabels(newFields, textLabel) {
  var newTextLabel = textLabel.slice();
  var currentFields = textLabel.map(function (tl) {
    return tl.field && tl.field.name;
  }).filter(function (d) {
    return d;
  });
  var addFields = newFields.filter(function (f) {
    return !currentFields.includes(f.name);
  });
  var deleteFields = currentFields.filter(function (f) {
    return !newFields.find(function (fd) {
      return fd.name === f;
    });
  }); // delete

  newTextLabel = newTextLabel.filter(function (tl) {
    return tl.field && !deleteFields.includes(tl.field.name);
  });
  newTextLabel = !newTextLabel.length ? [_constants.DEFAULT_TEXT_LABEL] : newTextLabel; // add

  newTextLabel = [].concat((0, _toConsumableArray2["default"])(newTextLabel.filter(function (tl) {
    return tl.field;
  })), (0, _toConsumableArray2["default"])(addFields.map(function (af) {
    return _objectSpread(_objectSpread({}, _constants.DEFAULT_TEXT_LABEL), {}, {
      field: af
    });
  })));
  return newTextLabel;
}

function updateTextLabelPropAndValue(idx, prop, value, textLabel) {
  if (!textLabel[idx].hasOwnProperty(prop)) {
    return textLabel;
  }

  var newTextLabel = textLabel.slice();

  if (prop && (value || textLabel.length === 1)) {
    newTextLabel = textLabel.map(function (tl, i) {
      return i === idx ? _objectSpread(_objectSpread({}, tl), {}, (0, _defineProperty2["default"])({}, prop, value)) : tl;
    });
  } else if (prop === 'field' && value === null && textLabel.length > 1) {
    // remove label when field value is set to null
    newTextLabel.splice(idx, 1);
  }

  return newTextLabel;
}
/**
 * Update layer base config: dataId, label, column, isVisible
 * @memberof visStateUpdaters
 * @returns nextState
 */


function layerTextLabelChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      idx = action.idx,
      prop = action.prop,
      value = action.value;
  var textLabel = oldLayer.config.textLabel;
  var newTextLabel = textLabel.slice();

  if (!textLabel[idx] && idx === textLabel.length) {
    // if idx is set to length, add empty text label
    newTextLabel = [].concat((0, _toConsumableArray2["default"])(textLabel), [_constants.DEFAULT_TEXT_LABEL]);
  }

  if (idx === 'all' && prop === 'fields') {
    newTextLabel = addOrRemoveTextLabels(value, textLabel);
  } else {
    newTextLabel = updateTextLabelPropAndValue(idx, prop, value, newTextLabel);
  } // update text label prop and value


  return layerConfigChangeUpdater(state, {
    oldLayer: oldLayer,
    newConfig: {
      textLabel: newTextLabel
    }
  });
}

function validateExistingLayerWithData(dataset, layerClasses, layer, schema) {
  var loadedLayer = (0, _visStateMerger.serializeLayer)(layer, schema);
  return loadedLayer ? (0, _visStateMerger.validateLayerWithData)(dataset, loadedLayer, layerClasses, {
    allowEmptyColumn: true
  }) : null;
}
/**
 * Update layer config dataId
 * @memberof visStateUpdaters
 * @returns nextState
 */


function layerDataIdChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      newConfig = action.newConfig;
  var dataId = newConfig.dataId;

  if (!oldLayer || !state.datasets[dataId]) {
    return state;
  }

  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var newLayer = oldLayer.updateLayerConfig({
    dataId: dataId
  }); // this may happen when a layer is new (type: null and no columns) but it's not ready to be saved

  if (newLayer.isValidToSave()) {
    var validated = validateExistingLayerWithData(state.datasets[dataId], state.layerClasses, newLayer, state.schema); // if cant validate it with data create a new one

    if (!validated) {
      // @ts-expect-error TODO: checking oldLayer.type !== null
      newLayer = new state.layerClasses[oldLayer.type]({
        dataId: dataId,
        id: oldLayer.id
      });
    } else {
      newLayer = validated;
    }
  }

  newLayer = newLayer.updateLayerConfig({
    isVisible: oldLayer.config.isVisible,
    isConfigActive: true
  });
  newLayer.updateLayerDomain(state.datasets);

  var _calculateLayerData2 = (0, _layerUtils.calculateLayerData)(newLayer, state, undefined),
      layerData = _calculateLayerData2.layerData,
      layer = _calculateLayerData2.layer;

  return updateStateWithLayerAndData(state, {
    layerData: layerData,
    layer: layer,
    idx: idx
  });
}

function setInitialLayerConfig(layer, datasets, layerClasses) {
  var newLayer = layer;

  if (!Object.keys(datasets).length) {
    // no data is loaded
    return layer;
  }

  if (!layer.config.dataId) {
    // set layer dataId
    newLayer = layer.updateLayerConfig({
      dataId: Object.keys(datasets)[0]
    });
  }

  var dataset = datasets[newLayer.config.dataId];

  if (!dataset) {
    return layer;
  } // find defaut layer props


  var result = typeof layerClasses[newLayer.type].findDefaultLayerProps === 'function' ? layerClasses[newLayer.type].findDefaultLayerProps(dataset, []) : {
    props: []
  }; // an array of possible props, use 1st one

  var props = Array.isArray(result) ? result : result.props || [];

  if (props.length) {
    newLayer = new layerClasses[layer.type](_objectSpread(_objectSpread({}, props[0]), {}, {
      label: newLayer.config.label,
      dataId: newLayer.config.dataId,
      isVisible: true,
      isConfigActive: newLayer.config.isConfigActive
    }));
    return typeof newLayer.setInitialLayerConfig === 'function' ? newLayer.setInitialLayerConfig(dataset) : newLayer;
  }

  return newLayer;
}
/**
 * Update layer type. Previews layer config will be copied if applicable.
 * @memberof visStateUpdaters
 * @public
 */


function layerTypeChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      newType = action.newType;

  if (!oldLayer) {
    return state;
  }

  var oldId = oldLayer.id;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldId;
  });

  if (!state.layerClasses[newType]) {
    _window.console.error("".concat(newType, " is not a valid layer type"));

    return state;
  }

  var newLayer = new state.layerClasses[newType]({
    // keep old layer lable and isConfigActive
    label: oldLayer.config.label,
    isConfigActive: oldLayer.config.isConfigActive,
    dataId: oldLayer.config.dataId
  });

  if (!oldLayer.type) {
    // if setting layer type on an empty layer
    newLayer = setInitialLayerConfig(newLayer, state.datasets, state.layerClasses);
  } else {
    // get a mint layer, with new id and type
    // because deck.gl uses id to match between new and old layer.
    // If type has changed but id is the same, it will break
    newLayer.assignConfigToLayer(oldLayer.config, oldLayer.visConfigSettings);
    newLayer.updateLayerDomain(state.datasets);
  }

  var clicked = state.clicked,
      hoverInfo = state.hoverInfo;

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    clicked: oldLayer.isLayerHovered(clicked) ? undefined : clicked,
    hoverInfo: oldLayer.isLayerHovered(hoverInfo) ? undefined : hoverInfo
  });

  var _calculateLayerData3 = (0, _layerUtils.calculateLayerData)(newLayer, newState),
      layerData = _calculateLayerData3.layerData,
      layer = _calculateLayerData3.layer;

  newState = updateStateWithLayerAndData(newState, {
    layerData: layerData,
    layer: layer,
    idx: idx
  });

  if (layer.config.animation.enabled || oldLayer.config.animation.enabled) {
    newState = updateAnimationDomain(newState);
  } // update splitMap layer id


  if (state.splitMaps.length) {
    newState = _objectSpread(_objectSpread({}, newState), {}, {
      splitMaps: newState.splitMaps.map(function (settings) {
        var _settings$layers = settings.layers,
            oldLayerMap = _settings$layers[oldId],
            otherLayers = (0, _objectWithoutProperties2["default"])(_settings$layers, [oldId].map(_toPropertyKey));
        return oldId in settings.layers ? _objectSpread(_objectSpread({}, settings), {}, {
          layers: _objectSpread(_objectSpread({}, otherLayers), {}, (0, _defineProperty2["default"])({}, layer.id, oldLayerMap))
        }) : settings;
      })
    });
  }

  return newState;
}
/**
 * Update layer visual channel
 * @memberof visStateUpdaters
 * @returns {Object} nextState
 * @public
 */


function layerVisualChannelChangeUpdater(state, action) {
  var oldLayer = action.oldLayer,
      newConfig = action.newConfig,
      channel = action.channel;

  if (!oldLayer.config.dataId) {
    return state;
  }

  var dataset = state.datasets[oldLayer.config.dataId];
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var newLayer = oldLayer.updateLayerConfig(newConfig);
  newLayer.updateLayerVisualChannel(dataset, channel);
  var oldLayerData = state.layerData[idx];

  var _calculateLayerData4 = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData),
      layerData = _calculateLayerData4.layerData,
      layer = _calculateLayerData4.layer;

  return updateStateWithLayerAndData(state, {
    layerData: layerData,
    layer: layer,
    idx: idx
  });
}
/**
 * Update layer `visConfig`
 * @memberof visStateUpdaters
 * @public
 */


function layerVisConfigChangeUpdater(state, action) {
  var oldLayer = action.oldLayer;
  var idx = state.layers.findIndex(function (l) {
    return l.id === oldLayer.id;
  });
  var props = Object.keys(action.newVisConfig);

  var newVisConfig = _objectSpread(_objectSpread({}, oldLayer.config.visConfig), action.newVisConfig);

  var newLayer = oldLayer.updateLayerConfig({
    visConfig: newVisConfig
  });

  if (newLayer.shouldCalculateLayerData(props)) {
    var oldLayerData = state.layerData[idx];

    var _calculateLayerData5 = (0, _layerUtils.calculateLayerData)(newLayer, state, oldLayerData),
        layerData = _calculateLayerData5.layerData,
        layer = _calculateLayerData5.layer;

    return updateStateWithLayerAndData(state, {
      layerData: layerData,
      layer: layer,
      idx: idx
    });
  }

  return updateStateWithLayerAndData(state, {
    layer: newLayer,
    idx: idx
  });
}
/**
 * Update filter property
 * @memberof visStateUpdaters
 * @public
 */


function setFilterAnimationTimeUpdater(state, action) {
  return setFilterUpdater(state, action);
}
/**
 * Update filter animation window
 * @memberof visStateUpdaters
 * @public
 */


function setFilterAnimationWindowUpdater(state, _ref2) {
  var id = _ref2.id,
      animationWindow = _ref2.animationWindow;
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f) {
      return f.id === id ? _objectSpread(_objectSpread({}, f), {}, {
        animationWindow: animationWindow
      }) : f;
    })
  });
}
/**
 * Update filter property
 * @memberof visStateUpdaters
 * @public
 */


function setFilterUpdater(state, action) {
  var idx = action.idx,
      prop = action.prop,
      value = action.value,
      _action$valueIndex = action.valueIndex,
      valueIndex = _action$valueIndex === void 0 ? 0 : _action$valueIndex;
  var oldFilter = state.filters[idx];

  if (!oldFilter) {
    _window.console.error("filters.".concat(idx, " is undefined"));

    return state;
  }

  var newFilter = (0, _utils.set)([prop], value, oldFilter);
  var newState = state;
  var _newFilter = newFilter,
      dataId = _newFilter.dataId; // Ensuring backward compatibility

  var datasetIds = (0, _utils.toArray)(dataId);

  switch (prop) {
    // TODO: Next PR for UI if we update dataId, we need to consider two cases:
    // 1. dataId is empty: create a default filter
    // 2. Add a new dataset id
    case _utils.FILTER_UPDATER_PROPS.dataId:
      // if trying to update filter dataId. create an empty new filter
      newFilter = (0, _utils.updateFilterDataId)(dataId);
      break;

    case _utils.FILTER_UPDATER_PROPS.name:
      // we are supporting the current functionality
      // TODO: Next PR for UI filter name will only update filter name but it won't have side effects
      // we are gonna use pair of datasets and fieldIdx to update the filter
      var datasetId = newFilter.dataId[valueIndex];

      var _applyFilterFieldName = (0, _utils.applyFilterFieldName)(newFilter, state.datasets[datasetId], value, valueIndex, {
        mergeDomain: false
      }),
          updatedFilter = _applyFilterFieldName.filter,
          newDataset = _applyFilterFieldName.dataset;

      if (!updatedFilter) {
        return state;
      }

      newFilter = updatedFilter;

      if (newFilter.gpu) {
        newFilter = (0, _table.setFilterGpuMode)(newFilter, state.filters);
        newFilter = (0, _table.assignGpuChannel)(newFilter, state.filters);
      }

      newState = (0, _utils.set)(['datasets', datasetId], newDataset, state); // only filter the current dataset

      break;

    case _utils.FILTER_UPDATER_PROPS.layerId:
      // We need to update only datasetId/s if we have added/removed layers
      // - check for layerId changes (XOR works because of string values)
      // if no differences between layerIds, don't do any filtering
      // @ts-ignore
      var layerIdDifference = (0, _lodash4["default"])(newFilter.layerId, oldFilter.layerId);
      var layerDataIds = (0, _lodash2["default"])(layerIdDifference.map(function (lid) {
        return (0, _lodash3["default"])(state.layers.find(function (l) {
          return l.id === lid;
        }), ['config', 'dataId']);
      }).filter(function (d) {
        return d;
      })); // only filter datasetsIds

      datasetIds = layerDataIds; // Update newFilter dataIds

      var newDataIds = (0, _lodash2["default"])(newFilter.layerId.map(function (lid) {
        return (0, _lodash3["default"])(state.layers.find(function (l) {
          return l.id === lid;
        }), ['config', 'dataId']);
      }).filter(function (d) {
        return d;
      }));
      newFilter = _objectSpread(_objectSpread({}, newFilter), {}, {
        dataId: newDataIds
      });
      break;

    default:
      break;
  }

  var enlargedFilter = state.filters.find(function (f) {
    return f.view === _constants.FILTER_VIEW_TYPES.enlarged;
  });

  if (enlargedFilter && enlargedFilter.id !== newFilter.id) {
    // there should be only one enlarged filter
    newFilter.view = _constants.FILTER_VIEW_TYPES.side;
  } // save new filters to newState


  newState = (0, _utils.set)(['filters', idx], newFilter, newState); // if we are currently setting a prop that only requires to filter the current
  // dataset we will pass only the current dataset to applyFiltersToDatasets and
  // updateAllLayerDomainData otherwise we pass the all list of datasets as defined in dataId

  var datasetIdsToFilter = _utils.LIMITED_FILTER_EFFECT_PROPS[prop] ? [datasetIds[valueIndex]] : datasetIds; // filter data

  var filteredDatasets = (0, _utils.applyFiltersToDatasets)(datasetIdsToFilter, newState.datasets, newState.filters, newState.layers);
  newState = (0, _utils.set)(['datasets'], filteredDatasets, newState); // dataId is an array
  // pass only the dataset we need to update

  newState = updateAllLayerDomainData(newState, datasetIdsToFilter, newFilter);
  return newState;
}
/**
 * Set the property of a filter plot
 * @memberof visStateUpdaters
 * @public
 */


var setFilterPlotUpdater = function setFilterPlotUpdater(state, _ref3) {
  var idx = _ref3.idx,
      newProp = _ref3.newProp,
      _ref3$valueIndex = _ref3.valueIndex,
      valueIndex = _ref3$valueIndex === void 0 ? 0 : _ref3$valueIndex;

  var newFilter = _objectSpread(_objectSpread({}, state.filters[idx]), newProp);

  var prop = Object.keys(newProp)[0];

  if (prop === 'yAxis') {
    var plotType = (0, _utils.getDefaultFilterPlotType)(newFilter); // TODO: plot is not supported in multi dataset filter for now

    if (plotType) {
      newFilter = _objectSpread(_objectSpread(_objectSpread({}, newFilter), (0, _utils.getFilterPlot)(_objectSpread(_objectSpread({}, newFilter), {}, {
        plotType: plotType
      }), state.datasets[newFilter.dataId[valueIndex]])), {}, {
        plotType: plotType
      });
    }
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f, i) {
      return i === idx ? newFilter : f;
    })
  });
};
/**
 * Add a new filter
 * @memberof visStateUpdaters
 * @public
 */


exports.setFilterPlotUpdater = setFilterPlotUpdater;

var addFilterUpdater = function addFilterUpdater(state, action) {
  return !action.dataId ? state : _objectSpread(_objectSpread({}, state), {}, {
    filters: [].concat((0, _toConsumableArray2["default"])(state.filters), [(0, _utils.getDefaultFilter)(action.dataId)])
  });
};
/**
 * Set layer color palette ui state
 * @memberof visStateUpdaters
 */


exports.addFilterUpdater = addFilterUpdater;

var layerColorUIChangeUpdater = function layerColorUIChangeUpdater(state, _ref4) {
  var oldLayer = _ref4.oldLayer,
      prop = _ref4.prop,
      newConfig = _ref4.newConfig;
  var oldVixConfig = oldLayer.config.visConfig[prop];
  var newLayer = oldLayer.updateLayerColorUI(prop, newConfig);
  var newVisConfig = newLayer.config.visConfig[prop];

  if (oldVixConfig !== newVisConfig) {
    return layerVisConfigChangeUpdater(state, {
      oldLayer: oldLayer,
      newVisConfig: (0, _defineProperty2["default"])({}, prop, newVisConfig)
    });
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    layers: state.layers.map(function (l) {
      return l.id === oldLayer.id ? newLayer : l;
    })
  });
};
/**
 * Start and end filter animation
 * @memberof visStateUpdaters
 * @public
 */


exports.layerColorUIChangeUpdater = layerColorUIChangeUpdater;

var toggleFilterAnimationUpdater = function toggleFilterAnimationUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f, i) {
      return i === action.idx ? _objectSpread(_objectSpread({}, f), {}, {
        isAnimating: !f.isAnimating
      }) : f;
    })
  });
};
/**
 * @memberof visStateUpdaters
 * @public
 */


exports.toggleFilterAnimationUpdater = toggleFilterAnimationUpdater;

var toggleLayerAnimationUpdater = function toggleLayerAnimationUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    animationConfig: _objectSpread(_objectSpread({}, state.animationConfig), {}, {
      isAnimating: !state.animationConfig.isAnimating
    })
  });
};
/**
 * Hide and show layer animation control
 * @memberof visStateUpdaters
 * @public
 */


exports.toggleLayerAnimationUpdater = toggleLayerAnimationUpdater;

var toggleLayerAnimationControlUpdater = function toggleLayerAnimationControlUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    animationConfig: _objectSpread(_objectSpread({}, state.animationConfig), {}, {
      hideControl: !state.animationConfig.hideControl
    })
  });
};
/**
 * Change filter animation speed
 * @memberof visStateUpdaters
 * @public
 */


exports.toggleLayerAnimationControlUpdater = toggleLayerAnimationControlUpdater;

var updateFilterAnimationSpeedUpdater = function updateFilterAnimationSpeedUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f, i) {
      return i === action.idx ? _objectSpread(_objectSpread({}, f), {}, {
        speed: action.speed
      }) : f;
    })
  });
};
/**
 * Reset animation config current time to a specified value
 * @memberof visStateUpdaters
 * @public
 *
 */


exports.updateFilterAnimationSpeedUpdater = updateFilterAnimationSpeedUpdater;

var setLayerAnimationTimeUpdater = function setLayerAnimationTimeUpdater(state, _ref5) {
  var value = _ref5.value;
  return _objectSpread(_objectSpread({}, state), {}, {
    animationConfig: _objectSpread(_objectSpread({}, state.animationConfig), {}, {
      currentTime: value
    })
  });
};
/**
 * Update animation speed with the vertical speed slider
 * @memberof visStateUpdaters
 * @public
 *
 */


exports.setLayerAnimationTimeUpdater = setLayerAnimationTimeUpdater;

var updateLayerAnimationSpeedUpdater = function updateLayerAnimationSpeedUpdater(state, _ref6) {
  var speed = _ref6.speed;
  return _objectSpread(_objectSpread({}, state), {}, {
    animationConfig: _objectSpread(_objectSpread({}, state.animationConfig), {}, {
      speed: speed
    })
  });
};
/**
 * Show larger time filter at bottom for time playback (apply to time filter only)
 * @memberof visStateUpdaters
 * @public
 */


exports.updateLayerAnimationSpeedUpdater = updateLayerAnimationSpeedUpdater;

var setFilterViewUpdater = function setFilterViewUpdater(state, action) {
  var view = action.view,
      idx = action.idx;
  var shouldResetOtherFiltersView = view === _constants.FILTER_VIEW_TYPES.enlarged;
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: state.filters.map(function (f, i) {
      return i === idx ? _objectSpread(_objectSpread({}, f), {}, {
        view: view
      }) : shouldResetOtherFiltersView ? _objectSpread(_objectSpread({}, f), {}, {
        view: _constants.FILTER_VIEW_TYPES.side
      }) : f;
    })
  });
};
/**
 * Toggles filter feature visibility
 * @memberof visStateUpdaters
 */


exports.setFilterViewUpdater = setFilterViewUpdater;

var toggleFilterFeatureUpdater = function toggleFilterFeatureUpdater(state, action) {
  var filter = state.filters[action.idx];
  var isVisible = (0, _lodash3["default"])(filter, ['value', 'properties', 'isVisible']);
  var newState = setFilterUpdater(state, {
    idx: action.idx,
    prop: 'enabled',
    value: !isVisible
  });
  newState = setFilterUpdater(newState, {
    idx: action.idx,
    prop: 'value',
    value: (0, _utils.featureToFilterValue)(filter.value, filter.id, {
      isVisible: !isVisible
    })
  });
  return newState;
};
/**
 * Remove a filter
 * @memberof visStateUpdaters
 * @public
 */


exports.toggleFilterFeatureUpdater = toggleFilterFeatureUpdater;

var removeFilterUpdater = function removeFilterUpdater(state, action) {
  var idx = action.idx;
  var _state$filters$idx = state.filters[idx],
      dataId = _state$filters$idx.dataId,
      id = _state$filters$idx.id;
  var newFilters = [].concat((0, _toConsumableArray2["default"])(state.filters.slice(0, idx)), (0, _toConsumableArray2["default"])(state.filters.slice(idx + 1, state.filters.length)));
  var filteredDatasets = (0, _utils.applyFiltersToDatasets)(dataId, state.datasets, newFilters, state.layers);
  var newEditor = (0, _utils.getFilterIdInFeature)(state.editor.selectedFeature) === id ? _objectSpread(_objectSpread({}, state.editor), {}, {
    selectedFeature: null
  }) : state.editor;
  var newState = (0, _utils.set)(['filters'], newFilters, state);
  newState = (0, _utils.set)(['datasets'], filteredDatasets, newState);
  newState = (0, _utils.set)(['editor'], newEditor, newState);
  return updateAllLayerDomainData(newState, dataId, undefined);
};
/**
 * Add a new layer
 * @memberof visStateUpdaters
 * @public
 */


exports.removeFilterUpdater = removeFilterUpdater;

var addLayerUpdater = function addLayerUpdater(state, action) {
  var newLayer;
  var newLayerData;

  if (action.config) {
    newLayer = (0, _visStateMerger.createLayerFromConfig)(state, action.config);

    if (!newLayer) {
      _window.console.warn('Failed to create layer from config, it usually means the config is not be in correct format', action.config);

      return state;
    }

    var result = (0, _layerUtils.calculateLayerData)(newLayer, state);
    newLayer = result.layer;
    newLayerData = result.layerData;
  } else {
    var _action$datasetId;

    // create an empty layer with a specific dataset or a default one
    var defaultDataset = (_action$datasetId = action.datasetId) !== null && _action$datasetId !== void 0 ? _action$datasetId : Object.keys(state.datasets)[0];
    newLayer = new _layers.Layer({
      isVisible: true,
      isConfigActive: true,
      dataId: defaultDataset
    });
    newLayerData = {};
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    layers: [].concat((0, _toConsumableArray2["default"])(state.layers), [newLayer]),
    layerData: [].concat((0, _toConsumableArray2["default"])(state.layerData), [newLayerData]),
    // add new layer at the top
    layerOrder: [state.layerOrder.length].concat((0, _toConsumableArray2["default"])(state.layerOrder)),
    splitMaps: (0, _utils.addNewLayersToSplitMap)(state.splitMaps, newLayer)
  });
};
/**
 * remove layer
 * @memberof visStateUpdaters
 * @public
 */


exports.addLayerUpdater = addLayerUpdater;

function removeLayerUpdater(state, _ref7) {
  var id = _ref7.id;
  var idx = Number.isFinite(id) ? // support older API, remove layer by idx
  Number(id) : state.layers.findIndex(function (l) {
    return l.id === id;
  });

  if (idx < 0 || idx >= state.layers.length) {
    // invalid index
    _window.console.warn("can not remove layer with invalid id|idx ".concat(id));

    return state;
  }

  var layers = state.layers,
      layerData = state.layerData,
      clicked = state.clicked,
      hoverInfo = state.hoverInfo;
  var layerToRemove = state.layers[idx];
  var newMaps = (0, _utils.removeLayerFromSplitMaps)(state.splitMaps, layerToRemove);

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    layers: [].concat((0, _toConsumableArray2["default"])(layers.slice(0, idx)), (0, _toConsumableArray2["default"])(layers.slice(idx + 1, layers.length))),
    layerData: [].concat((0, _toConsumableArray2["default"])(layerData.slice(0, idx)), (0, _toConsumableArray2["default"])(layerData.slice(idx + 1, layerData.length))),
    layerOrder: state.layerOrder.filter(function (i) {
      return i !== idx;
    }).map(function (pid) {
      return pid > idx ? pid - 1 : pid;
    }),
    clicked: layerToRemove.isLayerHovered(clicked) ? undefined : clicked,
    hoverInfo: layerToRemove.isLayerHovered(hoverInfo) ? undefined : hoverInfo,
    splitMaps: newMaps // TODO: update filters, create helper to remove layer form filter (remove layerid and dataid) if mapped

  });

  return updateAnimationDomain(newState);
}
/**
 * duplicate layer
 * @memberof visStateUpdaters
 * @public
 */


var duplicateLayerUpdater = function duplicateLayerUpdater(state, _ref8) {
  var idx = _ref8.idx;
  var layers = state.layers;
  var original = state.layers[idx];
  var originalLayerOrderIdx = state.layerOrder.findIndex(function (i) {
    return i === idx;
  });

  if (!original) {
    _window.console.warn("layer.".concat(idx, " is undefined"));

    return state;
  }

  var newLabel = "Copy of ".concat(original.config.label);
  var postfix = 0; // eslint-disable-next-line no-loop-func

  while (layers.find(function (l) {
    return l.config.label === newLabel;
  })) {
    newLabel = "Copy of ".concat(original.config.label, " ").concat(++postfix);
  } // collect layer config from original


  var loadedLayer = (0, _visStateMerger.serializeLayer)(original, state.schema); // assign new id and label to copied layer

  if (!(loadedLayer !== null && loadedLayer !== void 0 && loadedLayer.config)) {
    return state;
  }

  loadedLayer.config.label = newLabel;
  loadedLayer.id = (0, _utils.generateHashId)(_layers.LAYER_ID_LENGTH); // add layer to state

  var nextState = addLayerUpdater(state, {
    config: loadedLayer
  }); // layers: ['a', 'b', 'c', 'd']
  // order: [3, 0, 1, 2]
  // [0, 3, 1, 2]
  // new added layer are at the top, move it to be on top of original layer

  var newLayerOrderIdx = nextState.layers.length - 1;
  var newLayerOrder = (0, _utils.arrayInsert)(nextState.layerOrder.slice(1, nextState.layerOrder.length), originalLayerOrderIdx, newLayerOrderIdx);
  nextState = _objectSpread(_objectSpread({}, nextState), {}, {
    layerOrder: newLayerOrder
  });
  return updateAnimationDomain(nextState);
};
/**
 * Reorder layer
 * @memberof visStateUpdaters
 * @public
 */


exports.duplicateLayerUpdater = duplicateLayerUpdater;

var reorderLayerUpdater = function reorderLayerUpdater(state, _ref9) {
  var order = _ref9.order;
  return _objectSpread(_objectSpread({}, state), {}, {
    layerOrder: order
  });
};
/**
 * Remove a dataset and all layers, filters, tooltip configs that based on it
 * @memberof visStateUpdaters
 * @public
 */


exports.reorderLayerUpdater = reorderLayerUpdater;

function removeDatasetUpdater(state, action) {
  // extract dataset key
  var datasetKey = action.dataId;
  var datasets = state.datasets; // check if dataset is present

  if (!datasets[datasetKey]) {
    return state;
  }
  /* eslint-disable no-unused-vars */


  var layers = state.layers,
      _state$datasets = state.datasets,
      dataset = _state$datasets[datasetKey],
      newDatasets = (0, _objectWithoutProperties2["default"])(_state$datasets, [datasetKey].map(_toPropertyKey));
  /* eslint-enable no-unused-vars */

  var layersToRemove = layers.filter(function (l) {
    return l.config.dataId === datasetKey;
  }).map(function (l) {
    return l.id;
  }); // remove layers and datasets

  var newState = layersToRemove.reduce(function (accu, id) {
    return removeLayerUpdater(accu, {
      id: id
    });
  }, _objectSpread(_objectSpread({}, state), {}, {
    datasets: newDatasets
  })); // remove filters

  var filters = newState.filters.filter(function (filter) {
    return !filter.dataId.includes(datasetKey);
  });
  newState = _objectSpread(_objectSpread({}, newState), {}, {
    filters: filters
  });
  return removeDatasetFromInteractionConfig(newState, {
    dataId: datasetKey
  });
}

function removeDatasetFromInteractionConfig(state, _ref10) {
  var dataId = _ref10.dataId;
  var interactionConfig = state.interactionConfig;
  var _interactionConfig = interactionConfig,
      tooltip = _interactionConfig.tooltip;

  if (tooltip) {
    var config = tooltip.config;
    /* eslint-disable no-unused-vars */

    var _config$fieldsToShow = config.fieldsToShow,
        fields = _config$fieldsToShow[dataId],
        fieldsToShow = (0, _objectWithoutProperties2["default"])(_config$fieldsToShow, [dataId].map(_toPropertyKey));
    /* eslint-enable no-unused-vars */

    interactionConfig = _objectSpread(_objectSpread({}, interactionConfig), {}, {
      tooltip: _objectSpread(_objectSpread({}, tooltip), {}, {
        config: _objectSpread(_objectSpread({}, config), {}, {
          fieldsToShow: fieldsToShow
        })
      })
    });
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    interactionConfig: interactionConfig
  });
}
/**
 * update layer blending mode
 * @memberof visStateUpdaters
 * @public
 */


var updateLayerBlendingUpdater = function updateLayerBlendingUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    layerBlending: action.mode
  });
};
/**
 * update overlay blending mode
 * @memberof visStateUpdaters
 * @public
 */


exports.updateLayerBlendingUpdater = updateLayerBlendingUpdater;

var updateOverlayBlendingUpdater = function updateOverlayBlendingUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    overlayBlending: action.mode
  });
};
/**
 * Display dataset table in a modal
 * @memberof visStateUpdaters
 * @public
 */


exports.updateOverlayBlendingUpdater = updateOverlayBlendingUpdater;

var showDatasetTableUpdater = function showDatasetTableUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    editingDataset: action.dataId
  });
};
/**
 * Add custom color for datasets and layers
 * @memberof visStateUpdaters
 * @public
 */


exports.showDatasetTableUpdater = showDatasetTableUpdater;

var updateTableColorUpdater = function updateTableColorUpdater(state, action) {
  return updateDatasetPropsUpdater(state, {
    dataId: action.dataId,
    props: {
      color: action.newColor
    }
  });
};
/**
 * reset visState to initial State
 * @memberof visStateUpdaters
 * @public
 */


exports.updateTableColorUpdater = updateTableColorUpdater;

var resetMapConfigUpdater = function resetMapConfigUpdater(state) {
  return _objectSpread(_objectSpread(_objectSpread({}, INITIAL_VIS_STATE), state.initialState), {}, {
    initialState: state.initialState
  });
};
/**
 * Propagate `visState` reducer with a new configuration. Current config will be override.
 * @memberof visStateUpdaters
 * @public
 */


exports.resetMapConfigUpdater = resetMapConfigUpdater;

var receiveMapConfigUpdater = function receiveMapConfigUpdater(state, _ref11) {
  var _ref11$payload = _ref11.payload,
      _ref11$payload$config = _ref11$payload.config,
      config = _ref11$payload$config === void 0 ? {} : _ref11$payload$config,
      _ref11$payload$option = _ref11$payload.options,
      options = _ref11$payload$option === void 0 ? {} : _ref11$payload$option;

  if (!config.visState) {
    return state;
  }

  var keepExistingConfig = options.keepExistingConfig; // reset config if keepExistingConfig is falsy

  var mergedState = !keepExistingConfig ? resetMapConfigUpdater(state) : state;

  var _iterator = _createForOfIteratorHelper(state.mergers),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var merger = _step.value;

      if ((0, _mergerHandler.isValidMerger)(merger) && (0, _mergerHandler.hasPropsToMerge)(config.visState, merger.prop)) {
        mergedState = merger.merge(mergedState, (0, _mergerHandler.getPropValueToMerger)(config.visState, merger.prop, merger.toMergeProp), // fromConfig
        true);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return mergedState;
};
/**
 * Trigger layer hover event with hovered object
 * @memberof visStateUpdaters
 * @public
 */


exports.receiveMapConfigUpdater = receiveMapConfigUpdater;

var layerHoverUpdater = function layerHoverUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    hoverInfo: _objectSpread({}, action.info)
  });
};
/* eslint-enable max-statements */

/**
 * Update `interactionConfig`
 * @memberof visStateUpdaters
 * @public
 */


exports.layerHoverUpdater = layerHoverUpdater;

function interactionConfigChangeUpdater(state, action) {
  var config = action.config;

  var interactionConfig = _objectSpread(_objectSpread({}, state.interactionConfig), (0, _defineProperty2["default"])({}, config.id, config)); // Don't enable tooltip and brush at the same time
  // but coordinates can be shown at all time


  var contradict = ['brush', 'tooltip'];

  if (contradict.includes(config.id) && config.enabled && !state.interactionConfig[config.id].enabled) {
    // only enable one interaction at a time
    contradict.forEach(function (k) {
      if (k !== config.id) {
        interactionConfig[k] = _objectSpread(_objectSpread({}, interactionConfig[k]), {}, {
          enabled: false
        });
      }
    });
  }

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    interactionConfig: interactionConfig
  });

  if (config.id === 'geocoder' && !config.enabled) {
    return removeDatasetUpdater(newState, {
      dataId: 'geocoder_dataset'
    });
  }

  return newState;
}
/**
 * Trigger layer click event with clicked object
 * @memberof visStateUpdaters
 * @public
 */


var layerClickUpdater = function layerClickUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    mousePos: state.interactionConfig.coordinate.enabled ? _objectSpread(_objectSpread({}, state.mousePos), {}, {
      pinned: state.mousePos.pinned ? null : (0, _lodash["default"])(state.mousePos)
    }) : state.mousePos,
    clicked: action.info && action.info.picked ? action.info : null
  });
};
/**
 * Trigger map click event, unselect clicked object
 * @memberof visStateUpdaters
 * @public
 */


exports.layerClickUpdater = layerClickUpdater;

var mapClickUpdater = function mapClickUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    clicked: null
  });
};
/**
 * Trigger map move event
 * @memberof visStateUpdaters
 * @public
 */


exports.mapClickUpdater = mapClickUpdater;

var mouseMoveUpdater = function mouseMoveUpdater(state, _ref12) {
  var evt = _ref12.evt;

  if (Object.values(state.interactionConfig).some(function (config) {
    return config.enabled;
  })) {
    return _objectSpread(_objectSpread({}, state), {}, {
      mousePos: _objectSpread(_objectSpread(_objectSpread({}, state.mousePos), Array.isArray(evt.point) ? {
        mousePosition: (0, _toConsumableArray2["default"])(evt.point)
      } : {}), Array.isArray(evt.lngLat) ? {
        coordinate: (0, _toConsumableArray2["default"])(evt.lngLat)
      } : {})
    });
  }

  return state;
};
/**
 * Toggle visibility of a layer for a split map
 * @memberof visStateUpdaters
 * @public
 */


exports.mouseMoveUpdater = mouseMoveUpdater;

var toggleSplitMapUpdater = function toggleSplitMapUpdater(state, action) {
  return state.splitMaps && state.splitMaps.length === 0 ? _objectSpread(_objectSpread({}, state), {}, {
    // maybe we should use an array to store state for a single map as well
    // if current maps length is equal to 0 it means that we are about to split the view
    splitMaps: (0, _utils.computeSplitMapLayers)(state.layers, {
      duplicate: false
    })
  }) : closeSpecificMapAtIndex(state, action);
};
/**
 * Toggle visibility of a layer in a split map
 * @memberof visStateUpdaters
 * @public
 */


exports.toggleSplitMapUpdater = toggleSplitMapUpdater;

var toggleLayerForMapUpdater = function toggleLayerForMapUpdater(state, _ref13) {
  var mapIndex = _ref13.mapIndex,
      layerId = _ref13.layerId;
  var splitMaps = state.splitMaps;
  return _objectSpread(_objectSpread({}, state), {}, {
    splitMaps: splitMaps.map(function (sm, i) {
      return i === mapIndex ? _objectSpread(_objectSpread({}, splitMaps[i]), {}, {
        layers: _objectSpread(_objectSpread({}, splitMaps[i].layers), {}, (0, _defineProperty2["default"])({}, layerId, !splitMaps[i].layers[layerId]))
      }) : sm;
    })
  });
};
/**
 * Add new dataset to `visState`, with option to load a map config along with the datasets
 * @memberof visStateUpdaters
 * @public
 */
// eslint-disable-next-line complexity


exports.toggleLayerForMapUpdater = toggleLayerForMapUpdater;

var updateVisDataUpdater = function updateVisDataUpdater(state, action) {
  // datasets can be a single data entries or an array of multiple data entries
  var config = action.config,
      options = action.options; // apply config if passed from action
  // TODO: we don't handle asyn mergers here yet

  var previousState = config ? receiveMapConfigUpdater(state, {
    payload: {
      config: config,
      options: options
    }
  }) : state;
  var datasets = (0, _utils.toArray)(action.datasets);
  var newDataEntries = datasets.reduce(function (accu) {
    var _ref14 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref14$info = _ref14.info,
        info = _ref14$info === void 0 ? {} : _ref14$info,
        rest = (0, _objectWithoutProperties2["default"])(_ref14, ["info"]);

    return _objectSpread(_objectSpread({}, accu), (0, _table.createNewDataEntry)(_objectSpread({
      info: info
    }, rest), state.datasets) || {});
  }, {}); // save new dataset entry to state

  var mergedState = _objectSpread(_objectSpread({}, previousState), {}, {
    datasets: (0, _visStateMerger.mergeDatasetsByOrder)(previousState, newDataEntries)
  }); // merge state with config to be merged


  var layerMergers = state.mergers.filter(function (m) {
    return m.waitForLayerData;
  });
  var datasetMergers = state.mergers.filter(function (m) {
    return !layerMergers.includes(m);
  });
  var newDataIds = Object.keys(newDataEntries);
  var postMergerPayload = {
    newDataIds: newDataIds,
    options: options,
    layerMergers: layerMergers
  };
  return applyMergersUpdater(mergedState, {
    mergers: datasetMergers,
    postMergerPayload: postMergerPayload
  });
};
/**
 * Add new dataset to `visState`, with option to load a map config along with the datasets
 */


exports.updateVisDataUpdater = updateVisDataUpdater;

function applyMergersUpdater(state, action) {
  var mergers = action.mergers,
      postMergerPayload = action.postMergerPayload; // merge state with config to be merged

  var mergeStateResult = (0, _mergerHandler.mergeStateFromMergers)(state, _objectSpread(_objectSpread({}, INITIAL_VIS_STATE), state.initialState), mergers, // newDataIds,
  postMergerPayload); // if all merged, kickup post merge process
  // if not wait

  return mergeStateResult.allMerged ? postMergeUpdater(mergeStateResult.mergedState, postMergerPayload) : mergeStateResult.mergedState;
}
/**
 * Add new dataset to `visState`, with option to load a map config along with the datasets
 */


function postMergeUpdater(mergedState, postMergerPayload) {
  var newDataIds = postMergerPayload.newDataIds,
      options = postMergerPayload.options,
      layerMergers = postMergerPayload.layerMergers;
  var newFilters = mergedState.filters.filter(function (f) {
    return f.dataId.find(function (fDataId) {
      return newDataIds.includes(fDataId);
    });
  });
  var datasetFiltered = (0, _lodash2["default"])(newFilters.reduce(function (accu, f) {
    return [].concat((0, _toConsumableArray2["default"])(accu), (0, _toConsumableArray2["default"])(f.dataId));
  }, []));
  var dataEmpty = newDataIds.length < 1;
  var newLayers = !dataEmpty ? mergedState.layers.filter(function (l) {
    return l.config.dataId && newDataIds.includes(l.config.dataId);
  }) : [];
  var newDataEntries = newDataIds.reduce(function (accu, id) {
    return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, id, mergedState.datasets[id]));
  }, {});

  if (!newLayers.length && (options || {}).autoCreateLayers !== false) {
    // no layer merged, find defaults
    var result = addDefaultLayers(mergedState, newDataEntries);
    mergedState = result.state;
    newLayers = result.newLayers;
  }

  if (mergedState.splitMaps.length) {
    // if map is split, add new layers to splitMaps
    newLayers = mergedState.layers.filter(function (l) {
      return l.config.dataId && newDataIds.includes(l.config.dataId);
    });
    mergedState = _objectSpread(_objectSpread({}, mergedState), {}, {
      splitMaps: (0, _utils.addNewLayersToSplitMap)(mergedState.splitMaps, newLayers)
    });
  } // if no tooltips merged add default tooltips


  newDataIds.forEach(function (dataId) {
    var tooltipFields = mergedState.interactionConfig.tooltip.config.fieldsToShow[dataId];

    if (!Array.isArray(tooltipFields) || !tooltipFields.length) {
      mergedState = addDefaultTooltips(mergedState, newDataEntries[dataId]);
    }
  });
  var updatedDatasets = dataEmpty ? Object.keys(mergedState.datasets) : (0, _lodash2["default"])(Object.keys(newDataEntries).concat(datasetFiltered));
  var updatedState = updateAllLayerDomainData(mergedState, updatedDatasets, undefined); // register layer animation domain,
  // need to be called after layer data is calculated

  updatedState = updateAnimationDomain(updatedState); // try to process layerMergers after dataset+datasetMergers

  return layerMergers && layerMergers.length > 0 ? applyMergersUpdater(updatedState, {
    mergers: layerMergers,
    postMergerPayload: _objectSpread(_objectSpread({}, postMergerPayload), {}, {
      layerMergers: []
    })
  }) : updatedState;
}
/**
 * Rename an existing dataset in `visState`
 * @memberof visStateUpdaters
 * @public
 */


function renameDatasetUpdater(state, action) {
  return updateDatasetPropsUpdater(state, {
    dataId: action.dataId,
    props: {
      label: action.label
    }
  });
}

var ALLOWED_UPDATE_DATASET_PROPS = ['label', 'color', 'metadata'];
/**
 * Validates properties before updating the dataset.
 * Makes sure each property is in the allowed list
 * Makes sure color value is RGB
 * Performs deep merge when updating metadata
 */

var validateDatasetUpdateProps = function validateDatasetUpdateProps(props, dataset) {
  var validatedProps = Object.entries(props).reduce(function (acc, entry) {
    var _entry = (0, _slicedToArray2["default"])(entry, 2),
        key = _entry[0],
        value = _entry[1]; // is it allowed ?


    if (!ALLOWED_UPDATE_DATASET_PROPS.includes(key)) {
      return acc;
    } // if we are adding a color but it is not RGB we don't accept the value
    // in the future as we add more props we should change this if into a switch


    if (key === 'color' && !(0, _utils.isRgbColor)(value)) {
      return acc;
    } // do we need deep merge ?


    return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, key, (0, _utils.isPlainObject)(value) ? (0, _deepmerge["default"])(dataset[key] || {}, value) : value));
  }, {});
  return validatedProps;
};
/**
 * Update Dataset props (label, color, meta). Do not use to update data or any related properties
 * @memberof visStateUpdaters
 * @public
 */


function updateDatasetPropsUpdater(state, action) {
  var dataId = action.dataId,
      props = action.props;
  var datasets = state.datasets;
  var existing = datasets[dataId];

  if (existing) {
    var validatedProps = validateDatasetUpdateProps(props, existing); //  validate props: just color for now
    //  we only allow label, color and meta to be updated
    // const newTable = copyTableAndUpdate(existing, validatedProps);

    return _objectSpread(_objectSpread({}, state), {}, {
      datasets: _objectSpread(_objectSpread({}, datasets), {}, (0, _defineProperty2["default"])({}, dataId, (0, _table.copyTableAndUpdate)(existing, validatedProps)))
    });
  }

  return state;
}
/**
 * When a user clicks on the specific map closing icon
 * the application will close the selected map
 * and will merge the remaining one with the global state
 * TODO: i think in the future this action should be called merge map layers with global settings
 * @param {Object} state `visState`
 * @param {Object} action action
 * @returns {Object} nextState
 */


function closeSpecificMapAtIndex(state, action) {
  var _state$splitMaps$inde;

  // retrieve layers meta data from the remaining map that we need to keep
  var indexToRetrieve = 1 - action.payload;
  var mapLayers = (_state$splitMaps$inde = state.splitMaps[indexToRetrieve]) === null || _state$splitMaps$inde === void 0 ? void 0 : _state$splitMaps$inde.layers;
  var layers = state.layers; // update layer visibility

  var newLayers = layers.map(function (layer) {
    return mapLayers && !mapLayers[layer.id] && layer.config.isVisible ? layer.updateLayerConfig({
      // if layer.id is not in mapLayers, it should be inVisible
      isVisible: false
    }) : layer;
  }); // delete map

  return _objectSpread(_objectSpread({}, state), {}, {
    layers: newLayers,
    splitMaps: []
  });
}
/**
 * Trigger file loading dispatch `addDataToMap` if succeed, or `loadFilesErr` if failed
 * @memberof visStateUpdaters
 * @public
 */


var loadFilesUpdater = function loadFilesUpdater(state, action) {
  var files = action.files,
      _action$onFinish = action.onFinish,
      onFinish = _action$onFinish === void 0 ? _actions.loadFilesSuccess : _action$onFinish;

  if (!files.length) {
    return state;
  }

  var fileLoadingProgress = Array.from(files).reduce(function (accu, f, i) {
    return (0, _composerHelpers.merge_)(initialFileLoadingProgress(f, i))(accu);
  }, {});
  var fileLoading = {
    fileCache: [],
    filesToLoad: files,
    onFinish: onFinish
  };
  var nextState = (0, _composerHelpers.merge_)({
    fileLoadingProgress: fileLoadingProgress,
    fileLoading: fileLoading
  })(state);
  return loadNextFileUpdater(nextState);
};
/**
 * Sucessfully loaded one file, move on to the next one
 * @memberof visStateUpdaters
 * @public
 */


exports.loadFilesUpdater = loadFilesUpdater;

function loadFileStepSuccessUpdater(state, action) {
  if (!state.fileLoading) {
    return state;
  }

  var fileName = action.fileName,
      fileCache = action.fileCache;
  var _state$fileLoading = state.fileLoading,
      filesToLoad = _state$fileLoading.filesToLoad,
      onFinish = _state$fileLoading.onFinish;
  var stateWithProgress = updateFileLoadingProgressUpdater(state, {
    fileName: fileName,
    progress: {
      percent: 1,
      message: 'Done'
    }
  }); // save processed file to fileCache

  var stateWithCache = (0, _composerHelpers.pick_)('fileLoading')((0, _composerHelpers.merge_)({
    fileCache: fileCache
  }))(stateWithProgress);
  return (0, _tasks.withTask)(stateWithCache, (0, _tasks2.DELAY_TASK)(200).map(filesToLoad.length ? _actions.loadNextFile : function () {
    return onFinish(fileCache);
  }));
} // withTask<T>(state: T, task: any): T

/**
 *
 * @memberof visStateUpdaters
 * @public
 */


function loadNextFileUpdater(state) {
  if (!state.fileLoading) {
    return state;
  }

  var filesToLoad = state.fileLoading.filesToLoad;

  var _filesToLoad = (0, _toArray2["default"])(filesToLoad),
      file = _filesToLoad[0],
      remainingFilesToLoad = _filesToLoad.slice(1); // save filesToLoad to state


  var nextState = (0, _composerHelpers.pick_)('fileLoading')((0, _composerHelpers.merge_)({
    filesToLoad: remainingFilesToLoad
  }))(state);
  var stateWithProgress = updateFileLoadingProgressUpdater(nextState, {
    fileName: file.name,
    progress: {
      percent: 0,
      message: 'loading...'
    }
  });
  var loaders = state.loaders,
      loadOptions = state.loadOptions;
  return (0, _tasks.withTask)(stateWithProgress, makeLoadFileTask(file, nextState.fileLoading && nextState.fileLoading.fileCache, loaders, loadOptions));
}

function makeLoadFileTask(file, fileCache) {
  var loaders = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var loadOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return (0, _tasks2.LOAD_FILE_TASK)({
    file: file,
    fileCache: fileCache,
    loaders: loaders,
    loadOptions: loadOptions
  }).bimap( // prettier ignore
  // success
  function (gen) {
    return (0, _actions.nextFileBatch)({
      gen: gen,
      fileName: file.name,
      onFinish: function onFinish(result) {
        return (0, _actions.processFileContent)({
          content: result,
          fileCache: fileCache
        });
      }
    });
  }, // error
  function (err) {
    return (0, _actions.loadFilesErr)(file.name, err);
  });
}
/**
 *
 * @memberof visStateUpdaters
 * @public
 */


function processFileContentUpdater(state, action) {
  var _action$payload = action.payload,
      content = _action$payload.content,
      fileCache = _action$payload.fileCache;
  var stateWithProgress = updateFileLoadingProgressUpdater(state, {
    fileName: content.fileName,
    progress: {
      percent: 1,
      message: 'processing...'
    }
  });
  return (0, _tasks.withTask)(stateWithProgress, (0, _tasks2.PROCESS_FILE_DATA)({
    content: content,
    fileCache: fileCache
  }).bimap(function (result) {
    return (0, _actions.loadFileStepSuccess)({
      fileName: content.fileName,
      fileCache: result
    });
  }, function (err) {
    return (0, _actions.loadFilesErr)(content.fileName, err);
  }));
}

function parseProgress() {
  var prevProgress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var progress = arguments.length > 1 ? arguments[1] : undefined;

  // This happens when receiving query metadata or other cases we don't
  // have an update for the user.
  if (!progress || !progress.percent) {
    return {};
  }

  return {
    percent: progress.percent
  };
}
/**
 * gets called with payload = AsyncGenerator<???>
 * @memberof visStateUpdaters
 * @public
 */


var nextFileBatchUpdater = function nextFileBatchUpdater(state, _ref15) {
  var _ref15$payload = _ref15.payload,
      gen = _ref15$payload.gen,
      fileName = _ref15$payload.fileName,
      progress = _ref15$payload.progress,
      accumulated = _ref15$payload.accumulated,
      onFinish = _ref15$payload.onFinish;
  var stateWithProgress = updateFileLoadingProgressUpdater(state, {
    fileName: fileName,
    progress: parseProgress(state.fileLoadingProgress[fileName], progress)
  });
  return (0, _tasks.withTask)(stateWithProgress, (0, _tasks2.UNWRAP_TASK)(gen.next()).bimap(function (_ref16) {
    var value = _ref16.value,
        done = _ref16.done;
    return done ? onFinish(accumulated) : (0, _actions.nextFileBatch)({
      gen: gen,
      fileName: fileName,
      progress: value.progress,
      accumulated: value,
      onFinish: onFinish
    });
  }, function (err) {
    return (0, _actions.loadFilesErr)(fileName, err);
  }));
};
/**
 * Trigger loading file error
 * @memberof visStateUpdaters
 * @public
 */


exports.nextFileBatchUpdater = nextFileBatchUpdater;

var loadFilesErrUpdater = function loadFilesErrUpdater(state, _ref17) {
  var error = _ref17.error,
      fileName = _ref17.fileName;

  // update ui with error message
  _window.console.warn(error);

  if (!state.fileLoading) {
    return state;
  }

  var _state$fileLoading2 = state.fileLoading,
      filesToLoad = _state$fileLoading2.filesToLoad,
      onFinish = _state$fileLoading2.onFinish,
      fileCache = _state$fileLoading2.fileCache;
  var nextState = updateFileLoadingProgressUpdater(state, {
    fileName: fileName,
    progress: {
      error: error
    }
  }); // kick off next file or finish

  return (0, _tasks.withTask)(nextState, (0, _tasks2.DELAY_TASK)(200).map(filesToLoad.length ? _actions.loadNextFile : function () {
    return onFinish(fileCache);
  }));
};
/**
 * When select dataset for export, apply cpu filter to selected dataset
 * @memberof visStateUpdaters
 * @public
 */


exports.loadFilesErrUpdater = loadFilesErrUpdater;

var applyCPUFilterUpdater = function applyCPUFilterUpdater(state, _ref18) {
  var dataId = _ref18.dataId;
  // apply cpuFilter
  var dataIds = (0, _utils.toArray)(dataId);
  return dataIds.reduce(function (accu, id) {
    return (0, _utils.filterDatasetCPU)(accu, id);
  }, state);
};
/**
 * User input to update the info of the map
 * @memberof visStateUpdaters
 * @public
 */


exports.applyCPUFilterUpdater = applyCPUFilterUpdater;

var setMapInfoUpdater = function setMapInfoUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    mapInfo: _objectSpread(_objectSpread({}, state.mapInfo), action.info)
  });
};
/**
 * Helper function to update All layer domain and layer data of state
 */


exports.setMapInfoUpdater = setMapInfoUpdater;

function addDefaultLayers(state, datasets) {
  var empty = [];
  var defaultLayers = Object.values(datasets).reduce(function (accu, dataset) {
    var foundLayers = (0, _layerUtils.findDefaultLayer)(dataset, state.layerClasses);
    return foundLayers && foundLayers.length ? accu.concat(foundLayers) : accu;
  }, empty);
  return {
    state: _objectSpread(_objectSpread({}, state), {}, {
      layers: [].concat((0, _toConsumableArray2["default"])(state.layers), (0, _toConsumableArray2["default"])(defaultLayers)),
      layerOrder: [].concat((0, _toConsumableArray2["default"])(defaultLayers.map(function (_, i) {
        return state.layers.length + i;
      })), (0, _toConsumableArray2["default"])(state.layerOrder))
    }),
    newLayers: defaultLayers
  };
}
/**
 * helper function to find default tooltips
 * @param {Object} state
 * @param {Object} dataset
 * @returns {Object} nextState
 */


function addDefaultTooltips(state, dataset) {
  var tooltipFields = (0, _interactionUtils.findFieldsToShow)(_objectSpread(_objectSpread({}, dataset), {}, {
    maxDefaultTooltips: state.maxDefaultTooltips
  }));

  var merged = _objectSpread(_objectSpread({}, state.interactionConfig.tooltip.config.fieldsToShow), tooltipFields);

  return (0, _utils.set)(['interactionConfig', 'tooltip', 'config', 'fieldsToShow'], merged, state);
}

function initialFileLoadingProgress(file, index) {
  var fileName = file.name || "Untitled File ".concat(index);
  return (0, _defineProperty2["default"])({}, fileName, {
    // percent of current file
    percent: 0,
    message: '',
    fileName: fileName,
    error: null
  });
}

function updateFileLoadingProgressUpdater(state, _ref20) {
  var fileName = _ref20.fileName,
      progress = _ref20.progress;
  // @ts-expect-error
  return (0, _composerHelpers.pick_)('fileLoadingProgress')((0, _composerHelpers.pick_)(fileName)((0, _composerHelpers.merge_)(progress)))(state);
}
/**
 * Helper function to update layer domains for an array of datasets
 */


function updateAllLayerDomainData(state, dataId, updatedFilter) {
  var dataIds = typeof dataId === 'string' ? [dataId] : dataId;
  var newLayers = [];
  var newLayerData = [];
  state.layers.forEach(function (oldLayer, i) {
    if (oldLayer.config.dataId && dataIds.includes(oldLayer.config.dataId)) {
      // No need to recalculate layer domain if filter has fixed domain
      var newLayer = updatedFilter && updatedFilter.fixedDomain ? oldLayer : oldLayer.updateLayerDomain(state.datasets, updatedFilter);

      var _calculateLayerData6 = (0, _layerUtils.calculateLayerData)(newLayer, state, state.layerData[i]),
          layerData = _calculateLayerData6.layerData,
          layer = _calculateLayerData6.layer;

      newLayers.push(layer);
      newLayerData.push(layerData);
    } else {
      newLayers.push(oldLayer);
      newLayerData.push(state.layerData[i]);
    }
  });

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    layers: newLayers,
    layerData: newLayerData
  });

  return newState;
}

function updateAnimationDomain(state) {
  // merge all animatable layer domain and update global config
  var animatableLayers = state.layers.filter(function (l) {
    return l.config.isVisible && l.config.animation && l.config.animation.enabled && // @ts-expect-error trip-layer-only
    Array.isArray(l.animationDomain);
  });

  if (!animatableLayers.length) {
    return _objectSpread(_objectSpread({}, state), {}, {
      animationConfig: _objectSpread(_objectSpread({}, state.animationConfig), {}, {
        domain: null,
        defaultTimeFormat: null
      })
    });
  }

  var mergedDomain = animatableLayers.reduce(function (accu, layer) {
    return [// @ts-expect-error trip-layer-only
    Math.min(accu[0], layer.animationDomain[0]), // @ts-expect-error trip-layer-only
    Math.max(accu[1], layer.animationDomain[1])];
  }, [Number(Infinity), -Infinity]);
  var defaultTimeFormat = (0, _utils.getTimeWidgetTitleFormatter)(mergedDomain);
  return _objectSpread(_objectSpread({}, state), {}, {
    animationConfig: _objectSpread(_objectSpread({}, state.animationConfig), {}, {
      currentTime: (0, _utils.isInRange)(state.animationConfig.currentTime, mergedDomain) ? state.animationConfig.currentTime : mergedDomain[0],
      domain: mergedDomain,
      defaultTimeFormat: defaultTimeFormat
    })
  });
}
/**
 * Update the status of the editor
 * @memberof visStateUpdaters
 */


var setEditorModeUpdater = function setEditorModeUpdater(state, _ref21) {
  var mode = _ref21.mode;
  return _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      mode: mode,
      selectedFeature: null
    })
  });
}; // const featureToFilterValue = (feature) => ({...feature, id: feature.id});

/**
 * Update editor features
 * @memberof visStateUpdaters
 */


exports.setEditorModeUpdater = setEditorModeUpdater;

function setFeaturesUpdater(state, _ref22) {
  var _ref22$features = _ref22.features,
      features = _ref22$features === void 0 ? [] : _ref22$features;
  var lastFeature = features.length && features[features.length - 1];

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      // only save none filter features to editor
      features: features.filter(function (f) {
        return !(0, _utils.getFilterIdInFeature)(f);
      }),
      mode: lastFeature && lastFeature.properties.isClosed ? _constants.EDITOR_MODES.EDIT : state.editor.mode
    })
  }); // Retrieve existing feature


  var selectedFeature = state.editor.selectedFeature; // If no feature is selected we can simply return since no operations

  if (!selectedFeature) {
    return newState;
  } // TODO: check if the feature has changed


  var feature = features.find(function (f) {
    return f.id === selectedFeature.id;
  }); // if feature is part of a filter

  var filterId = feature && (0, _utils.getFilterIdInFeature)(feature);

  if (filterId && feature) {
    var featureValue = (0, _utils.featureToFilterValue)(feature, filterId);
    var filterIdx = state.filters.findIndex(function (fil) {
      return fil.id === filterId;
    }); // @ts-ignore

    return setFilterUpdater(newState, {
      idx: filterIdx,
      prop: 'value',
      value: featureValue
    });
  }

  return newState;
}
/**
 * Set the current selected feature
 * @memberof uiStateUpdaters
 */


var setSelectedFeatureUpdater = function setSelectedFeatureUpdater(state, _ref23) {
  var feature = _ref23.feature,
      selectionContext = _ref23.selectionContext;
  return _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      selectedFeature: feature,
      selectionContext: selectionContext
    })
  });
};
/**
 * Delete existing feature from filters
 * @memberof visStateUpdaters
 */


exports.setSelectedFeatureUpdater = setSelectedFeatureUpdater;

function deleteFeatureUpdater(state, _ref24) {
  var feature = _ref24.feature;

  if (!feature) {
    return state;
  }

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      selectedFeature: null
    })
  });

  if ((0, _utils.getFilterIdInFeature)(feature)) {
    var filterIdx = newState.filters.findIndex(function (f) {
      return f.id === (0, _utils.getFilterIdInFeature)(feature);
    });
    return filterIdx > -1 ? removeFilterUpdater(newState, {
      idx: filterIdx
    }) : newState;
  } // modify editor object


  var newEditor = _objectSpread(_objectSpread({}, state.editor), {}, {
    features: state.editor.features.filter(function (f) {
      return f.id !== feature.id;
    }),
    selectedFeature: null
  });

  return _objectSpread(_objectSpread({}, state), {}, {
    editor: newEditor
  });
}
/**
 * Toggle feature as layer filter
 * @memberof visStateUpdaters
 */


function setPolygonFilterLayerUpdater(state, payload) {
  var layer = payload.layer,
      feature = payload.feature;
  var filterId = (0, _utils.getFilterIdInFeature)(feature); // let newFilter = null;

  var filterIdx;
  var newLayerId = [layer.id];
  var newState = state; // If polygon filter already exists, we need to find out if the current layer is already included

  if (filterId) {
    filterIdx = state.filters.findIndex(function (f) {
      return f.id === filterId;
    });

    if (!state.filters[filterIdx]) {
      // what if filter doesn't exist?... not possible.
      // because features in the editor is passed in from filters and editors.
      // but we will move this feature back to editor just in case
      var noneFilterFeature = _objectSpread(_objectSpread({}, feature), {}, {
        properties: _objectSpread(_objectSpread({}, feature.properties), {}, {
          filterId: null
        })
      });

      return _objectSpread(_objectSpread({}, state), {}, {
        editor: _objectSpread(_objectSpread({}, state.editor), {}, {
          features: [].concat((0, _toConsumableArray2["default"])(state.editor.features), [noneFilterFeature]),
          selectedFeature: noneFilterFeature
        })
      });
    }

    var filter = state.filters[filterIdx];
    var _filter$layerId = filter.layerId,
        layerId = _filter$layerId === void 0 ? [] : _filter$layerId;
    var isLayerIncluded = layerId.includes(layer.id);
    newLayerId = isLayerIncluded ? // if layer is included, remove it
    layerId.filter(function (l) {
      return l !== layer.id;
    }) : [].concat((0, _toConsumableArray2["default"])(layerId), [layer.id]);
  } else {
    // if we haven't create the polygon filter, create it
    var newFilter = (0, _utils.generatePolygonFilter)([], feature);
    filterIdx = state.filters.length; // add feature, remove feature from eidtor

    newState = _objectSpread(_objectSpread({}, state), {}, {
      filters: [].concat((0, _toConsumableArray2["default"])(state.filters), [newFilter]),
      editor: _objectSpread(_objectSpread({}, state.editor), {}, {
        features: state.editor.features.filter(function (f) {
          return f.id !== feature.id;
        }),
        selectedFeature: newFilter.value
      })
    });
  }

  return setFilterUpdater(newState, {
    idx: filterIdx,
    prop: 'layerId',
    value: newLayerId
  });
}
/**
 * @memberof visStateUpdaters
 * @public
 */


function sortTableColumnUpdater(state, _ref25) {
  var dataId = _ref25.dataId,
      column = _ref25.column,
      mode = _ref25.mode;
  var dataset = state.datasets[dataId];

  if (!dataset) {
    return state;
  }

  var sortMode = mode;

  if (!sortMode) {
    var currentMode = (0, _lodash3["default"])(dataset, ['sortColumn', column]); // @ts-ignore - should be fixable in a TS file

    sortMode = currentMode ? Object.keys(_constants.SORT_ORDER).find(function (m) {
      return m !== currentMode;
    }) : _constants.SORT_ORDER.ASCENDING;
  }

  var sorted = (0, _table.sortDatasetByColumn)(dataset, column, sortMode);
  return (0, _utils.set)(['datasets', dataId], sorted, state);
}
/**
 * @memberof visStateUpdaters
 * @public
 */


function pinTableColumnUpdater(state, _ref26) {
  var dataId = _ref26.dataId,
      column = _ref26.column;
  var dataset = state.datasets[dataId];

  if (!dataset) {
    return state;
  }

  var newDataset = (0, _table.pinTableColumns)(dataset, column);
  return (0, _utils.set)(['datasets', dataId], newDataset, state);
}
/**
 * Copy column content as strings
 * @memberof visStateUpdaters
 * @public
 */


function copyTableColumnUpdater(state, _ref27) {
  var dataId = _ref27.dataId,
      column = _ref27.column;
  var dataset = state.datasets[dataId];

  if (!dataset) {
    return state;
  }

  var fieldIdx = dataset.fields.findIndex(function (f) {
    return f.name === column;
  });

  if (fieldIdx < 0) {
    return state;
  }

  var type = dataset.fields[fieldIdx].type;
  var text = dataset.dataContainer.map(function (row) {
    return (0, _utils.parseFieldValue)(row.valueAt(fieldIdx), type);
  }, true).join('\n');
  (0, _copyToClipboard["default"])(text);
  return state;
}
/**
 * Set display format from columns from user selection
 * @memberof visStateUpdaters
 * @public
 */


function setColumnDisplayFormatUpdater(state, _ref28) {
  var dataId = _ref28.dataId,
      formats = _ref28.formats;
  var dataset = state.datasets[dataId];

  if (!dataset) {
    return state;
  }

  var newFields = dataset.fields;
  Object.keys(formats).forEach(function (column) {
    var fieldIdx = dataset.fields.findIndex(function (f) {
      return f.name === column;
    });

    if (fieldIdx >= 0) {
      var displayFormat = formats[column];
      var field = newFields[fieldIdx];
      newFields = (0, _composerHelpers.swap_)((0, _composerHelpers.merge_)({
        displayFormat: displayFormat
      })(field))(newFields);
    }
  });
  var newDataset = (0, _table.copyTableAndUpdate)(dataset, {
    fields: newFields
  });
  return (0, _composerHelpers.pick_)('datasets')((0, _composerHelpers.merge_)((0, _defineProperty2["default"])({}, dataId, newDataset)))(state);
}
/**
 * Update editor
 */


function toggleEditorVisibilityUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      visible: !state.editor.visible
    })
  });
}

function setFilterAnimationTimeConfigUpdater(state, _ref29) {
  var idx = _ref29.idx,
      config = _ref29.config;
  var oldFilter = state.filters[idx];

  if (!oldFilter) {
    _window.console.error("filters.".concat(idx, " is undefined"));

    return state;
  }

  if (oldFilter.type !== _constants.FILTER_TYPES.timeRange) {
    _window.console.error("setFilterAnimationTimeConfig can only be called to update a time filter. check filter.type === 'timeRange'");

    return state;
  }

  var updates = checkTimeConfigArgs(config);
  return (0, _composerHelpers.pick_)('filters')((0, _composerHelpers.swap_)((0, _composerHelpers.merge_)(updates)(oldFilter)))(state);
}

function checkTimeConfigArgs(config) {
  var allowed = ['timeFormat', 'timezone'];
  return Object.keys(config).reduce(function (accu, prop) {
    if (!allowed.includes(prop)) {
      _window.console.error("setLayerAnimationTimeConfig takes timeFormat and/or timezone as options, found ".concat(prop));

      return accu;
    } // here we are NOT checking if timezone or timeFormat input is valid


    accu[prop] = config[prop];
    return accu;
  }, {});
}
/**
 * Update editor
 */


function setLayerAnimationTimeConfigUpdater(state, _ref30) {
  var config = _ref30.config;

  if (!config) {
    return state;
  }

  var updates = checkTimeConfigArgs(config);
  return (0, _composerHelpers.pick_)('animationConfig')((0, _composerHelpers.merge_)(updates))(state);
} // Find dataId from a saved visState property:
// layers, filters, interactions, layerBlending, overlayBlending, splitMaps, animationConfig, editor
// replace it with another dataId


function defaultReplaceParentDatasetIds(value, dataId, dataIdToReplace) {
  var _value$config, _value$config2;

  if (Array.isArray(value)) {
    // for layers, filters, call defaultReplaceParentDatasetIds on each item in array
    var replaced = value.map(function (v) {
      return defaultReplaceParentDatasetIds(v, dataId, dataIdToReplace);
    }).filter(function (d) {
      return d;
    });
    return replaced.length ? replaced : null;
  }

  if (typeof value.dataId === 'string' && value.dataId === dataId) {
    // others
    return _objectSpread(_objectSpread({}, value), {}, {
      dataId: dataIdToReplace
    });
  } else if (Array.isArray(value.dataId) && value.dataId.includes(dataId)) {
    // filter
    return _objectSpread(_objectSpread({}, value), {}, {
      dataId: value.dataId.map(function (d) {
        return d === dataId ? dataIdToReplace : d;
      })
    });
  } else if ((_value$config = value.config) !== null && _value$config !== void 0 && _value$config.dataId && ((_value$config2 = value.config) === null || _value$config2 === void 0 ? void 0 : _value$config2.dataId) === dataId) {
    // layer
    return _objectSpread(_objectSpread({}, value), {}, {
      config: _objectSpread(_objectSpread({}, value.config), {}, {
        dataId: dataIdToReplace
      })
    });
  } else if ((0, _utils.isObject)(value) && value.hasOwnProperty(dataId)) {
    // for value saved as {[dataId]: {...}}
    return (0, _defineProperty2["default"])({}, dataIdToReplace, value[dataId]);
  }

  return null;
} // Find datasetIds derived a saved visState Property;


function findChildDatasetIds(value) {
  var _value$newDataset;

  if (Array.isArray(value)) {
    // for layers, filters, call defaultReplaceParentDatasetIds on each item in array
    var childDataIds = value.map(findChildDatasetIds).filter(function (d) {
      return d;
    });
    return childDataIds.length ? childDataIds : null;
  } // child data id usually stores in the derived dataset info


  return (value === null || value === void 0 ? void 0 : (_value$newDataset = value.newDataset) === null || _value$newDataset === void 0 ? void 0 : _value$newDataset.info.id) || null;
} // moved unmerged layers, filters, interactions


function moveValueToBeMerged(state, propValues, _ref32) {
  var prop = _ref32.prop,
      toMergeProp = _ref32.toMergeProp,
      saveUnmerged = _ref32.saveUnmerged;

  // remove prop value from state
  // TODO: should we add remove updater to merger as well?
  if (!propValues) {
    return state;
  }

  var stateRemoved = prop === 'layers' ? propValues.reduce(function (accu, propValue) {
    return removeLayerUpdater(accu, {
      id: propValue.id
    });
  }, state) : Array.isArray(state[prop]) ? _objectSpread(_objectSpread({}, state), {}, (0, _defineProperty2["default"])({}, prop, state[prop].filter(function (p) {
    return !propValues.find(function (propValue) {
      return p.id === propValue.id;
    });
  }))) : // if not array, we won't remove it, remove dataset should handle it
  state; // move to stateToBeMerged

  var toBeMerged = (0, _defineProperty2["default"])({}, toMergeProp, saveUnmerged ? // call merge saveUnmerged method
  saveUnmerged(stateRemoved, propValues) : // if toMergeProp is araay, append to it
  Array.isArray(stateRemoved[toMergeProp]) ? [].concat((0, _toConsumableArray2["default"])(stateRemoved[toMergeProp]), (0, _toConsumableArray2["default"])(propValues)) : // save propValues to toMerge
  (0, _utils.isObject)(stateRemoved[toMergeProp]) ? _objectSpread(_objectSpread({}, stateRemoved[toMergeProp]), propValues) : stateRemoved[toMergeProp]);
  return _objectSpread(_objectSpread({}, stateRemoved), toBeMerged);
}

function replaceDatasetAndDeps(state, dataId, dataIdToUse) {
  return (0, _composerHelpers.compose_)([(0, _composerHelpers.apply_)(replaceDatasetDepsInState, {
    dataId: dataId,
    dataIdToUse: dataIdToUse
  }), (0, _composerHelpers.apply_)(removeDatasetUpdater, {
    dataId: dataId
  })])(state);
}

function prepareStateForDatasetReplace(state, dataId, dataIdToUse) {
  var _nextState$layerToBeM;

  var serializedState = (0, _visStateMerger.serializeVisState)(state, state.schema);
  var nextState = replaceDatasetAndDeps(state, dataId, dataIdToUse); // preserve dataset order

  nextState.preserveDatasetOrder = Object.keys(state.datasets).map(function (d) {
    return d === dataId ? dataIdToUse : d;
  }); // preserveLayerOrder

  if ((_nextState$layerToBeM = nextState.layerToBeMerged) !== null && _nextState$layerToBeM !== void 0 && _nextState$layerToBeM.length) {
    var _serializedState$spli;

    // copy split maps to be merged, because it will be reset in remove layer
    nextState.splitMapsToBeMerged = (_serializedState$spli = serializedState === null || serializedState === void 0 ? void 0 : serializedState.splitMaps) !== null && _serializedState$spli !== void 0 ? _serializedState$spli : [];
  }

  return nextState;
}

function replaceDatasetDepsInState(state, _ref33) {
  var dataId = _ref33.dataId,
      dataIdToUse = _ref33.dataIdToUse;
  var serializedState = (0, _visStateMerger.serializeVisState)(state, state.schema);
  var nextState = state.mergers.reduce(function (accuState, _ref34) {
    var prop = _ref34.prop,
        toMergeProp = _ref34.toMergeProp,
        replaceParentDatasetIds = _ref34.replaceParentDatasetIds,
        getChildDatasetIds = _ref34.getChildDatasetIds,
        saveUnmerged = _ref34.saveUnmerged,
        preserveOrder = _ref34.preserveOrder;
    // get dataset ids that are depends on this dataset
    var props = (0, _utils.toArray)(prop);
    var toMergeProps = (0, _utils.toArray)(toMergeProp);
    var savedProps = serializedState ? props.map(function (p) {
      return serializedState[p];
    }) : [];
    var replacedState = accuState;
    savedProps.forEach(function (propValue, i) {
      var _replacedState$merger;

      var mergerOptions = {
        prop: props[i],
        toMergeProp: toMergeProps[i],
        getChildDatasetIds: getChildDatasetIds,
        saveUnmerged: saveUnmerged
      };
      var replacedItem = (replaceParentDatasetIds === null || replaceParentDatasetIds === void 0 ? void 0 : replaceParentDatasetIds(propValue, dataId, dataIdToUse)) || defaultReplaceParentDatasetIds(propValue, dataId, dataIdToUse);
      replacedState = replacedItem ? replacePropValueInState(replacedState, replacedItem, mergerOptions) : replacedState;

      if ((_replacedState$merger = replacedState[mergerOptions.toMergeProp]) !== null && _replacedState$merger !== void 0 && _replacedState$merger.length && preserveOrder) {
        replacedState[preserveOrder] = propValue.map(function (item) {
          return item.id;
        });
      }
    });
    return replacedState;
  }, state);
  return nextState;
}

function replacePropValueInState(state, replacedItem, _ref35) {
  var prop = _ref35.prop,
      toMergeProp = _ref35.toMergeProp,
      getChildDatasetIds = _ref35.getChildDatasetIds,
      saveUnmerged = _ref35.saveUnmerged;
  // prop is depends on the dataset to be replaced
  // remove prop from state, and move it to toBeMerged
  var nextState = moveValueToBeMerged(state, replacedItem, {
    prop: prop,
    toMergeProp: toMergeProp,
    saveUnmerged: saveUnmerged
  });
  var childDataIds = (getChildDatasetIds === null || getChildDatasetIds === void 0 ? void 0 : getChildDatasetIds(replacedItem)) || findChildDatasetIds(replacedItem);

  if (childDataIds) {
    nextState = (0, _utils.toArray)(childDataIds).reduce(function (accu, childDataId) {
      // shouldn't need to change child dataset id,
      // but still need to move out of state and merge back in
      return replaceDatasetAndDeps(accu, childDataId, childDataId);
    }, nextState);
  }

  return nextState;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zcmMvdmlzLXN0YXRlLXVwZGF0ZXJzLnRzIl0sIm5hbWVzIjpbInZpc1N0YXRlVXBkYXRlcnMiLCJkZWZhdWx0SW50ZXJhY3Rpb25Db25maWciLCJ0b29sdGlwIiwiaWQiLCJsYWJlbCIsImVuYWJsZWQiLCJjb25maWciLCJmaWVsZHNUb1Nob3ciLCJjb21wYXJlTW9kZSIsImNvbXBhcmVUeXBlIiwiQ09NUEFSRV9UWVBFUyIsIkFCU09MVVRFIiwiZ2VvY29kZXIiLCJwb3NpdGlvbiIsImJydXNoIiwic2l6ZSIsImNvb3JkaW5hdGUiLCJERUZBVUxUX0FOSU1BVElPTl9DT05GSUciLCJkb21haW4iLCJjdXJyZW50VGltZSIsInNwZWVkIiwiaXNBbmltYXRpbmciLCJ0aW1lRm9ybWF0IiwidGltZXpvbmUiLCJkZWZhdWx0VGltZUZvcm1hdCIsImhpZGVDb250cm9sIiwiZHVyYXRpb24iLCJERUZBVUxUX0VESVRPUiIsIm1vZGUiLCJFRElUT1JfTU9ERVMiLCJEUkFXX1BPTFlHT04iLCJmZWF0dXJlcyIsInNlbGVjdGVkRmVhdHVyZSIsInZpc2libGUiLCJJTklUSUFMX1ZJU19TVEFURSIsIm1hcEluZm8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibGF5ZXJzIiwibGF5ZXJEYXRhIiwibGF5ZXJUb0JlTWVyZ2VkIiwibGF5ZXJPcmRlciIsImZpbHRlcnMiLCJmaWx0ZXJUb0JlTWVyZ2VkIiwiZGF0YXNldHMiLCJlZGl0aW5nRGF0YXNldCIsInVuZGVmaW5lZCIsImludGVyYWN0aW9uQ29uZmlnIiwiaW50ZXJhY3Rpb25Ub0JlTWVyZ2VkIiwibGF5ZXJCbGVuZGluZyIsIm92ZXJsYXlCbGVuZGluZyIsImhvdmVySW5mbyIsImNsaWNrZWQiLCJtb3VzZVBvcyIsIm1heERlZmF1bHRUb29sdGlwcyIsIk1BWF9ERUZBVUxUX1RPT0xUSVBTIiwic3BsaXRNYXBzIiwic3BsaXRNYXBzVG9CZU1lcmdlZCIsImlzTWVyZ2luZ0RhdGFzZXRzIiwibGF5ZXJDbGFzc2VzIiwiTGF5ZXJDbGFzc2VzIiwiYW5pbWF0aW9uQ29uZmlnIiwiZWRpdG9yIiwiZmlsZUxvYWRpbmciLCJmaWxlTG9hZGluZ1Byb2dyZXNzIiwibG9hZGVycyIsImxvYWRPcHRpb25zIiwibWVyZ2VycyIsIlZJU19TVEFURV9NRVJHRVJTIiwic2NoZW1hIiwiS2VwbGVyR0xTY2hlbWEiLCJ1cGRhdGVTdGF0ZVdpdGhMYXllckFuZERhdGEiLCJzdGF0ZSIsImxheWVyIiwiaWR4IiwibWFwIiwibHlyIiwiaSIsImQiLCJ1cGRhdGVTdGF0ZU9uTGF5ZXJWaXNpYmlsaXR5Q2hhbmdlIiwibmV3U3RhdGUiLCJsZW5ndGgiLCJpc1Zpc2libGUiLCJhbmltYXRpb24iLCJ1cGRhdGVBbmltYXRpb25Eb21haW4iLCJsYXllckNvbmZpZ0NoYW5nZVVwZGF0ZXIiLCJhY3Rpb24iLCJvbGRMYXllciIsImZpbmRJbmRleCIsImwiLCJwcm9wcyIsIk9iamVjdCIsImtleXMiLCJuZXdDb25maWciLCJkYXRhSWQiLCJyZXN0Q29uZmlnIiwic3RhdGVXaXRoRGF0YUlkIiwibGF5ZXJEYXRhSWRDaGFuZ2VVcGRhdGVyIiwibmV4dExheWVyIiwiZmluZCIsIm5ld0xheWVyIiwidXBkYXRlTGF5ZXJDb25maWciLCJzaG91bGRDYWxjdWxhdGVMYXllckRhdGEiLCJvbGRMYXllckRhdGEiLCJ1cGRhdGVMYXllckRhdGFSZXN1bHQiLCJsYXllclNldElzVmFsaWRVcGRhdGVyIiwiaXNWYWxpZCIsImxheWVyVG9VcGRhdGUiLCJuZXdEYXRhIiwiYWRkT3JSZW1vdmVUZXh0TGFiZWxzIiwibmV3RmllbGRzIiwidGV4dExhYmVsIiwibmV3VGV4dExhYmVsIiwic2xpY2UiLCJjdXJyZW50RmllbGRzIiwidGwiLCJmaWVsZCIsIm5hbWUiLCJmaWx0ZXIiLCJhZGRGaWVsZHMiLCJmIiwiaW5jbHVkZXMiLCJkZWxldGVGaWVsZHMiLCJmZCIsIkRFRkFVTFRfVEVYVF9MQUJFTCIsImFmIiwidXBkYXRlVGV4dExhYmVsUHJvcEFuZFZhbHVlIiwicHJvcCIsInZhbHVlIiwiaGFzT3duUHJvcGVydHkiLCJzcGxpY2UiLCJsYXllclRleHRMYWJlbENoYW5nZVVwZGF0ZXIiLCJ2YWxpZGF0ZUV4aXN0aW5nTGF5ZXJXaXRoRGF0YSIsImRhdGFzZXQiLCJsb2FkZWRMYXllciIsImFsbG93RW1wdHlDb2x1bW4iLCJpc1ZhbGlkVG9TYXZlIiwidmFsaWRhdGVkIiwidHlwZSIsImlzQ29uZmlnQWN0aXZlIiwidXBkYXRlTGF5ZXJEb21haW4iLCJzZXRJbml0aWFsTGF5ZXJDb25maWciLCJyZXN1bHQiLCJmaW5kRGVmYXVsdExheWVyUHJvcHMiLCJBcnJheSIsImlzQXJyYXkiLCJsYXllclR5cGVDaGFuZ2VVcGRhdGVyIiwibmV3VHlwZSIsIm9sZElkIiwiQ29uc29sZSIsImVycm9yIiwiYXNzaWduQ29uZmlnVG9MYXllciIsInZpc0NvbmZpZ1NldHRpbmdzIiwiaXNMYXllckhvdmVyZWQiLCJzZXR0aW5ncyIsIm9sZExheWVyTWFwIiwib3RoZXJMYXllcnMiLCJsYXllclZpc3VhbENoYW5uZWxDaGFuZ2VVcGRhdGVyIiwiY2hhbm5lbCIsInVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbCIsImxheWVyVmlzQ29uZmlnQ2hhbmdlVXBkYXRlciIsIm5ld1Zpc0NvbmZpZyIsInZpc0NvbmZpZyIsInNldEZpbHRlckFuaW1hdGlvblRpbWVVcGRhdGVyIiwic2V0RmlsdGVyVXBkYXRlciIsInNldEZpbHRlckFuaW1hdGlvbldpbmRvd1VwZGF0ZXIiLCJhbmltYXRpb25XaW5kb3ciLCJ2YWx1ZUluZGV4Iiwib2xkRmlsdGVyIiwibmV3RmlsdGVyIiwiZGF0YXNldElkcyIsIkZJTFRFUl9VUERBVEVSX1BST1BTIiwiZGF0YXNldElkIiwibWVyZ2VEb21haW4iLCJ1cGRhdGVkRmlsdGVyIiwibmV3RGF0YXNldCIsImdwdSIsImxheWVySWQiLCJsYXllcklkRGlmZmVyZW5jZSIsImxheWVyRGF0YUlkcyIsImxpZCIsIm5ld0RhdGFJZHMiLCJlbmxhcmdlZEZpbHRlciIsInZpZXciLCJGSUxURVJfVklFV19UWVBFUyIsImVubGFyZ2VkIiwic2lkZSIsImRhdGFzZXRJZHNUb0ZpbHRlciIsIkxJTUlURURfRklMVEVSX0VGRkVDVF9QUk9QUyIsImZpbHRlcmVkRGF0YXNldHMiLCJ1cGRhdGVBbGxMYXllckRvbWFpbkRhdGEiLCJzZXRGaWx0ZXJQbG90VXBkYXRlciIsIm5ld1Byb3AiLCJwbG90VHlwZSIsImFkZEZpbHRlclVwZGF0ZXIiLCJsYXllckNvbG9yVUlDaGFuZ2VVcGRhdGVyIiwib2xkVml4Q29uZmlnIiwidXBkYXRlTGF5ZXJDb2xvclVJIiwidG9nZ2xlRmlsdGVyQW5pbWF0aW9uVXBkYXRlciIsInRvZ2dsZUxheWVyQW5pbWF0aW9uVXBkYXRlciIsInRvZ2dsZUxheWVyQW5pbWF0aW9uQ29udHJvbFVwZGF0ZXIiLCJ1cGRhdGVGaWx0ZXJBbmltYXRpb25TcGVlZFVwZGF0ZXIiLCJzZXRMYXllckFuaW1hdGlvblRpbWVVcGRhdGVyIiwidXBkYXRlTGF5ZXJBbmltYXRpb25TcGVlZFVwZGF0ZXIiLCJzZXRGaWx0ZXJWaWV3VXBkYXRlciIsInNob3VsZFJlc2V0T3RoZXJGaWx0ZXJzVmlldyIsInRvZ2dsZUZpbHRlckZlYXR1cmVVcGRhdGVyIiwicmVtb3ZlRmlsdGVyVXBkYXRlciIsIm5ld0ZpbHRlcnMiLCJuZXdFZGl0b3IiLCJhZGRMYXllclVwZGF0ZXIiLCJuZXdMYXllckRhdGEiLCJ3YXJuIiwiZGVmYXVsdERhdGFzZXQiLCJMYXllciIsInJlbW92ZUxheWVyVXBkYXRlciIsIk51bWJlciIsImlzRmluaXRlIiwibGF5ZXJUb1JlbW92ZSIsIm5ld01hcHMiLCJwaWQiLCJkdXBsaWNhdGVMYXllclVwZGF0ZXIiLCJvcmlnaW5hbCIsIm9yaWdpbmFsTGF5ZXJPcmRlcklkeCIsIm5ld0xhYmVsIiwicG9zdGZpeCIsIkxBWUVSX0lEX0xFTkdUSCIsIm5leHRTdGF0ZSIsIm5ld0xheWVyT3JkZXJJZHgiLCJuZXdMYXllck9yZGVyIiwicmVvcmRlckxheWVyVXBkYXRlciIsIm9yZGVyIiwicmVtb3ZlRGF0YXNldFVwZGF0ZXIiLCJkYXRhc2V0S2V5IiwibmV3RGF0YXNldHMiLCJsYXllcnNUb1JlbW92ZSIsInJlZHVjZSIsImFjY3UiLCJyZW1vdmVEYXRhc2V0RnJvbUludGVyYWN0aW9uQ29uZmlnIiwiZmllbGRzIiwidXBkYXRlTGF5ZXJCbGVuZGluZ1VwZGF0ZXIiLCJ1cGRhdGVPdmVybGF5QmxlbmRpbmdVcGRhdGVyIiwic2hvd0RhdGFzZXRUYWJsZVVwZGF0ZXIiLCJ1cGRhdGVUYWJsZUNvbG9yVXBkYXRlciIsInVwZGF0ZURhdGFzZXRQcm9wc1VwZGF0ZXIiLCJjb2xvciIsIm5ld0NvbG9yIiwicmVzZXRNYXBDb25maWdVcGRhdGVyIiwiaW5pdGlhbFN0YXRlIiwicmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIiLCJwYXlsb2FkIiwib3B0aW9ucyIsInZpc1N0YXRlIiwia2VlcEV4aXN0aW5nQ29uZmlnIiwibWVyZ2VkU3RhdGUiLCJtZXJnZXIiLCJtZXJnZSIsInRvTWVyZ2VQcm9wIiwibGF5ZXJIb3ZlclVwZGF0ZXIiLCJpbmZvIiwiaW50ZXJhY3Rpb25Db25maWdDaGFuZ2VVcGRhdGVyIiwiY29udHJhZGljdCIsImZvckVhY2giLCJrIiwibGF5ZXJDbGlja1VwZGF0ZXIiLCJwaW5uZWQiLCJwaWNrZWQiLCJtYXBDbGlja1VwZGF0ZXIiLCJtb3VzZU1vdmVVcGRhdGVyIiwiZXZ0IiwidmFsdWVzIiwic29tZSIsInBvaW50IiwibW91c2VQb3NpdGlvbiIsImxuZ0xhdCIsInRvZ2dsZVNwbGl0TWFwVXBkYXRlciIsImR1cGxpY2F0ZSIsImNsb3NlU3BlY2lmaWNNYXBBdEluZGV4IiwidG9nZ2xlTGF5ZXJGb3JNYXBVcGRhdGVyIiwibWFwSW5kZXgiLCJzbSIsInVwZGF0ZVZpc0RhdGFVcGRhdGVyIiwicHJldmlvdXNTdGF0ZSIsIm5ld0RhdGFFbnRyaWVzIiwicmVzdCIsImxheWVyTWVyZ2VycyIsIm0iLCJ3YWl0Rm9yTGF5ZXJEYXRhIiwiZGF0YXNldE1lcmdlcnMiLCJwb3N0TWVyZ2VyUGF5bG9hZCIsImFwcGx5TWVyZ2Vyc1VwZGF0ZXIiLCJtZXJnZVN0YXRlUmVzdWx0IiwiYWxsTWVyZ2VkIiwicG9zdE1lcmdlVXBkYXRlciIsImZEYXRhSWQiLCJkYXRhc2V0RmlsdGVyZWQiLCJkYXRhRW1wdHkiLCJuZXdMYXllcnMiLCJhdXRvQ3JlYXRlTGF5ZXJzIiwiYWRkRGVmYXVsdExheWVycyIsInRvb2x0aXBGaWVsZHMiLCJhZGREZWZhdWx0VG9vbHRpcHMiLCJ1cGRhdGVkRGF0YXNldHMiLCJjb25jYXQiLCJ1cGRhdGVkU3RhdGUiLCJyZW5hbWVEYXRhc2V0VXBkYXRlciIsIkFMTE9XRURfVVBEQVRFX0RBVEFTRVRfUFJPUFMiLCJ2YWxpZGF0ZURhdGFzZXRVcGRhdGVQcm9wcyIsInZhbGlkYXRlZFByb3BzIiwiZW50cmllcyIsImFjYyIsImVudHJ5Iiwia2V5IiwiZXhpc3RpbmciLCJpbmRleFRvUmV0cmlldmUiLCJtYXBMYXllcnMiLCJsb2FkRmlsZXNVcGRhdGVyIiwiZmlsZXMiLCJvbkZpbmlzaCIsImxvYWRGaWxlc1N1Y2Nlc3MiLCJmcm9tIiwiaW5pdGlhbEZpbGVMb2FkaW5nUHJvZ3Jlc3MiLCJmaWxlQ2FjaGUiLCJmaWxlc1RvTG9hZCIsImxvYWROZXh0RmlsZVVwZGF0ZXIiLCJsb2FkRmlsZVN0ZXBTdWNjZXNzVXBkYXRlciIsImZpbGVOYW1lIiwic3RhdGVXaXRoUHJvZ3Jlc3MiLCJ1cGRhdGVGaWxlTG9hZGluZ1Byb2dyZXNzVXBkYXRlciIsInByb2dyZXNzIiwicGVyY2VudCIsIm1lc3NhZ2UiLCJzdGF0ZVdpdGhDYWNoZSIsImxvYWROZXh0RmlsZSIsImZpbGUiLCJyZW1haW5pbmdGaWxlc1RvTG9hZCIsIm1ha2VMb2FkRmlsZVRhc2siLCJiaW1hcCIsImdlbiIsImNvbnRlbnQiLCJlcnIiLCJwcm9jZXNzRmlsZUNvbnRlbnRVcGRhdGVyIiwicGFyc2VQcm9ncmVzcyIsInByZXZQcm9ncmVzcyIsIm5leHRGaWxlQmF0Y2hVcGRhdGVyIiwiYWNjdW11bGF0ZWQiLCJuZXh0IiwiZG9uZSIsImxvYWRGaWxlc0VyclVwZGF0ZXIiLCJhcHBseUNQVUZpbHRlclVwZGF0ZXIiLCJkYXRhSWRzIiwic2V0TWFwSW5mb1VwZGF0ZXIiLCJlbXB0eSIsImRlZmF1bHRMYXllcnMiLCJmb3VuZExheWVycyIsIl8iLCJtZXJnZWQiLCJpbmRleCIsImZpeGVkRG9tYWluIiwicHVzaCIsImFuaW1hdGFibGVMYXllcnMiLCJhbmltYXRpb25Eb21haW4iLCJtZXJnZWREb21haW4iLCJNYXRoIiwibWluIiwibWF4IiwiSW5maW5pdHkiLCJzZXRFZGl0b3JNb2RlVXBkYXRlciIsInNldEZlYXR1cmVzVXBkYXRlciIsImxhc3RGZWF0dXJlIiwicHJvcGVydGllcyIsImlzQ2xvc2VkIiwiRURJVCIsImZlYXR1cmUiLCJmaWx0ZXJJZCIsImZlYXR1cmVWYWx1ZSIsImZpbHRlcklkeCIsImZpbCIsInNldFNlbGVjdGVkRmVhdHVyZVVwZGF0ZXIiLCJzZWxlY3Rpb25Db250ZXh0IiwiZGVsZXRlRmVhdHVyZVVwZGF0ZXIiLCJzZXRQb2x5Z29uRmlsdGVyTGF5ZXJVcGRhdGVyIiwibmV3TGF5ZXJJZCIsIm5vbmVGaWx0ZXJGZWF0dXJlIiwiaXNMYXllckluY2x1ZGVkIiwic29ydFRhYmxlQ29sdW1uVXBkYXRlciIsImNvbHVtbiIsInNvcnRNb2RlIiwiY3VycmVudE1vZGUiLCJTT1JUX09SREVSIiwiQVNDRU5ESU5HIiwic29ydGVkIiwicGluVGFibGVDb2x1bW5VcGRhdGVyIiwiY29weVRhYmxlQ29sdW1uVXBkYXRlciIsImZpZWxkSWR4IiwidGV4dCIsImRhdGFDb250YWluZXIiLCJyb3ciLCJ2YWx1ZUF0Iiwiam9pbiIsInNldENvbHVtbkRpc3BsYXlGb3JtYXRVcGRhdGVyIiwiZm9ybWF0cyIsImRpc3BsYXlGb3JtYXQiLCJ0b2dnbGVFZGl0b3JWaXNpYmlsaXR5VXBkYXRlciIsInNldEZpbHRlckFuaW1hdGlvblRpbWVDb25maWdVcGRhdGVyIiwiRklMVEVSX1RZUEVTIiwidGltZVJhbmdlIiwidXBkYXRlcyIsImNoZWNrVGltZUNvbmZpZ0FyZ3MiLCJhbGxvd2VkIiwic2V0TGF5ZXJBbmltYXRpb25UaW1lQ29uZmlnVXBkYXRlciIsImRlZmF1bHRSZXBsYWNlUGFyZW50RGF0YXNldElkcyIsImRhdGFJZFRvUmVwbGFjZSIsInJlcGxhY2VkIiwidiIsImZpbmRDaGlsZERhdGFzZXRJZHMiLCJjaGlsZERhdGFJZHMiLCJtb3ZlVmFsdWVUb0JlTWVyZ2VkIiwicHJvcFZhbHVlcyIsInNhdmVVbm1lcmdlZCIsInN0YXRlUmVtb3ZlZCIsInByb3BWYWx1ZSIsInAiLCJ0b0JlTWVyZ2VkIiwicmVwbGFjZURhdGFzZXRBbmREZXBzIiwiZGF0YUlkVG9Vc2UiLCJyZXBsYWNlRGF0YXNldERlcHNJblN0YXRlIiwicHJlcGFyZVN0YXRlRm9yRGF0YXNldFJlcGxhY2UiLCJzZXJpYWxpemVkU3RhdGUiLCJwcmVzZXJ2ZURhdGFzZXRPcmRlciIsImFjY3VTdGF0ZSIsInJlcGxhY2VQYXJlbnREYXRhc2V0SWRzIiwiZ2V0Q2hpbGREYXRhc2V0SWRzIiwicHJlc2VydmVPcmRlciIsInRvTWVyZ2VQcm9wcyIsInNhdmVkUHJvcHMiLCJyZXBsYWNlZFN0YXRlIiwibWVyZ2VyT3B0aW9ucyIsInJlcGxhY2VkSXRlbSIsInJlcGxhY2VQcm9wVmFsdWVJblN0YXRlIiwiaXRlbSIsImNoaWxkRGF0YUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBY0E7O0FBNkJBOztBQU9BOztBQUNBOztBQUNBOztBQVNBOztBQUVBOztBQUtBOztBQUNBOztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QixrQkFBa0IsU0FBbEIsSUFBQUEsa0JBQWtCLFdBQWxCLFlBQUFBLGtCQUFrQixDQUFHTSxZQUFILENBQWxCLEtBQXNDdkIsbUJBQW1CLENBQUN1QixZQUFELENBQTlFOztBQUVBLE1BQUl0QixZQUFKLEVBQWtCO0FBQ2hCN0wsSUFBQUEsU0FBUyxHQUFHLG9CQUFRNkwsWUFBUixFQUFzQnBMLE1BQXRCLENBQTZCLFVBQUNDLElBQUQsRUFBTzRNLFdBQVAsRUFBdUI7QUFDOUQ7QUFDQTtBQUNBLGFBQU9qQixxQkFBcUIsQ0FBQzNMLElBQUQsRUFBTzRNLFdBQVAsRUFBb0JBLFdBQXBCLENBQTVCO0FBQ0QsS0FKVyxFQUlUdE4sU0FKUyxDQUFaO0FBS0Q7O0FBQ0QsU0FBT0EsU0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtjb25zb2xlIGFzIENvbnNvbGV9IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuaW1wb3J0IHtkaXNhYmxlU3RhY2tDYXB0dXJpbmcsIHdpdGhUYXNrfSBmcm9tICdyZWFjdC1wYWxtL3Rhc2tzJztcbmltcG9ydCBjbG9uZURlZXAgZnJvbSAnbG9kYXNoLmNsb25lZGVlcCc7XG5pbXBvcnQgdW5pcSBmcm9tICdsb2Rhc2gudW5pcSc7XG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC5nZXQnO1xuaW1wb3J0IHhvciBmcm9tICdsb2Rhc2gueG9yJztcbmltcG9ydCBjb3B5IGZyb20gJ2NvcHktdG8tY2xpcGJvYXJkJztcbmltcG9ydCBkZWVwbWVyZ2UgZnJvbSAnZGVlcG1lcmdlJztcbi8vIFRhc2tzXG5pbXBvcnQge0xPQURfRklMRV9UQVNLLCBVTldSQVBfVEFTSywgUFJPQ0VTU19GSUxFX0RBVEEsIERFTEFZX1RBU0t9IGZyb20gJ0BrZXBsZXIuZ2wvdGFza3MnO1xuLy8gQWN0aW9uc1xuaW1wb3J0IHtcbiAgbG9hZEZpbGVzRXJyLFxuICBsb2FkRmlsZXNTdWNjZXNzLFxuICBsb2FkRmlsZVN0ZXBTdWNjZXNzLFxuICBsb2FkTmV4dEZpbGUsXG4gIG5leHRGaWxlQmF0Y2gsXG4gIFJlY2VpdmVNYXBDb25maWdQYXlsb2FkLFxuICBWaXNTdGF0ZUFjdGlvbnMsXG4gIE1hcFN0YXRlQWN0aW9ucyxcbiAgcHJvY2Vzc0ZpbGVDb250ZW50LFxuICBBY3Rpb25UeXBlc1xufSBmcm9tICdAa2VwbGVyLmdsL2FjdGlvbnMnO1xuXG4vLyBVdGlsc1xuaW1wb3J0IHtcbiAgc2V0LFxuICB0b0FycmF5LFxuICBhcnJheUluc2VydCxcbiAgZ2VuZXJhdGVIYXNoSWQsXG4gIGlzUGxhaW5PYmplY3QsXG4gIGlzT2JqZWN0LFxuICBhZGROZXdMYXllcnNUb1NwbGl0TWFwLFxuICBjb21wdXRlU3BsaXRNYXBMYXllcnMsXG4gIHJlbW92ZUxheWVyRnJvbVNwbGl0TWFwcyxcbiAgaXNSZ2JDb2xvcixcbiAgcGFyc2VGaWVsZFZhbHVlLFxuICBhcHBseUZpbHRlckZpZWxkTmFtZSxcbiAgYXBwbHlGaWx0ZXJzVG9EYXRhc2V0cyxcbiAgZmVhdHVyZVRvRmlsdGVyVmFsdWUsXG4gIGZpbHRlckRhdGFzZXRDUFUsXG4gIEZJTFRFUl9VUERBVEVSX1BST1BTLFxuICBnZW5lcmF0ZVBvbHlnb25GaWx0ZXIsXG4gIGdldERlZmF1bHRGaWx0ZXIsXG4gIGdldEZpbHRlcklkSW5GZWF0dXJlLFxuICBnZXRUaW1lV2lkZ2V0VGl0bGVGb3JtYXR0ZXIsXG4gIGlzSW5SYW5nZSxcbiAgTElNSVRFRF9GSUxURVJfRUZGRUNUX1BST1BTLFxuICB1cGRhdGVGaWx0ZXJEYXRhSWQsXG4gIGdldEZpbHRlclBsb3QsXG4gIGdldERlZmF1bHRGaWx0ZXJQbG90VHlwZVxufSBmcm9tICdAa2VwbGVyLmdsL3V0aWxzJztcblxuLy8gTWVyZ2Vyc1xuaW1wb3J0IHtcbiAgVklTX1NUQVRFX01FUkdFUlMsXG4gIHZhbGlkYXRlTGF5ZXJXaXRoRGF0YSxcbiAgY3JlYXRlTGF5ZXJGcm9tQ29uZmlnLFxuICBzZXJpYWxpemVMYXllcixcbiAgc2VyaWFsaXplVmlzU3RhdGVcbn0gZnJvbSAnLi92aXMtc3RhdGUtbWVyZ2VyJztcbmltcG9ydCB7bWVyZ2VTdGF0ZUZyb21NZXJnZXJzLCBpc1ZhbGlkTWVyZ2VyfSBmcm9tICcuL21lcmdlci1oYW5kbGVyJztcbmltcG9ydCB7TGF5ZXIsIExheWVyQ2xhc3NlcywgTEFZRVJfSURfTEVOR1RIfSBmcm9tICdAa2VwbGVyLmdsL2xheWVycyc7XG5pbXBvcnQge1xuICBFRElUT1JfTU9ERVMsXG4gIFNPUlRfT1JERVIsXG4gIEZJTFRFUl9UWVBFUyxcbiAgRklMVEVSX1ZJRVdfVFlQRVMsXG4gIE1BWF9ERUZBVUxUX1RPT0xUSVBTLFxuICBERUZBVUxUX1RFWFRfTEFCRUwsXG4gIENPTVBBUkVfVFlQRVNcbn0gZnJvbSAnQGtlcGxlci5nbC9jb25zdGFudHMnO1xuaW1wb3J0IHtwaWNrXywgbWVyZ2VfLCBzd2FwXywgYXBwbHlfLCBjb21wb3NlX30gZnJvbSAnLi9jb21wb3Nlci1oZWxwZXJzJztcblxuaW1wb3J0IEtlcGxlckdMU2NoZW1hLCB7VmlzU3RhdGUsIE1lcmdlciwgUG9zdE1lcmdlclBheWxvYWR9IGZyb20gJ0BrZXBsZXIuZ2wvc2NoZW1hcyc7XG5cbmltcG9ydCB7RmlsdGVyLCBJbnRlcmFjdGlvbkNvbmZpZywgQW5pbWF0aW9uQ29uZmlnLCBFZGl0b3IsIEZpZWxkfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcbmltcG9ydCB7TG9hZGVyfSBmcm9tICdAbG9hZGVycy5nbC9sb2FkZXItdXRpbHMnO1xuXG5pbXBvcnQge2NhbGN1bGF0ZUxheWVyRGF0YSwgZmluZERlZmF1bHRMYXllcn0gZnJvbSAnLi9sYXllci11dGlscyc7XG5pbXBvcnQge1xuICBjb3B5VGFibGVBbmRVcGRhdGUsXG4gIERhdGFzZXRzLFxuICBwaW5UYWJsZUNvbHVtbnMsXG4gIHNvcnREYXRhc2V0QnlDb2x1bW4sXG4gIGFzc2lnbkdwdUNoYW5uZWwsXG4gIHNldEZpbHRlckdwdU1vZGUsXG4gIGNyZWF0ZU5ld0RhdGFFbnRyeVxufSBmcm9tICdAa2VwbGVyLmdsL3RhYmxlJztcbmltcG9ydCB7ZmluZEZpZWxkc1RvU2hvd30gZnJvbSAnLi9pbnRlcmFjdGlvbi11dGlscyc7XG5pbXBvcnQge2hhc1Byb3BzVG9NZXJnZSwgZ2V0UHJvcFZhbHVlVG9NZXJnZXJ9IGZyb20gJy4vbWVyZ2VyLWhhbmRsZXInO1xuaW1wb3J0IHttZXJnZURhdGFzZXRzQnlPcmRlcn0gZnJvbSAnLi92aXMtc3RhdGUtbWVyZ2VyJztcblxuLy8gcmVhY3QtcGFsbVxuLy8gZGlzYWJsZSBjYXB0dXJlIGV4Y2VwdGlvbiBmb3IgcmVhY3QtcGFsbSBjYWxsIHRvIHdpdGhUYXNrXG5kaXNhYmxlU3RhY2tDYXB0dXJpbmcoKTtcblxuLyoqXG4gKiBVcGRhdGVycyBmb3IgYHZpc1N0YXRlYCByZWR1Y2VyLiBDYW4gYmUgdXNlZCBpbiB5b3VyIHJvb3QgcmVkdWNlciB0byBkaXJlY3RseSBtb2RpZnkga2VwbGVyLmdsJ3Mgc3RhdGUuXG4gKiBSZWFkIG1vcmUgYWJvdXQgW1VzaW5nIHVwZGF0ZXJzXSguLi9hZHZhbmNlZC11c2FnZS91c2luZy11cGRhdGVycy5tZClcbiAqXG4gKiBAcHVibGljXG4gKiBAZXhhbXBsZVxuICpcbiAqIGltcG9ydCBrZXBsZXJHbFJlZHVjZXIsIHt2aXNTdGF0ZVVwZGF0ZXJzfSBmcm9tICdrZXBsZXIuZ2wvcmVkdWNlcnMnO1xuICogLy8gUm9vdCBSZWR1Y2VyXG4gKiBjb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gKiAga2VwbGVyR2w6IGtlcGxlckdsUmVkdWNlcixcbiAqICBhcHA6IGFwcFJlZHVjZXJcbiAqIH0pO1xuICpcbiAqIGNvbnN0IGNvbXBvc2VkUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gKiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICogICAgY2FzZSAnQ0xJQ0tfQlVUVE9OJzpcbiAqICAgICAgcmV0dXJuIHtcbiAqICAgICAgICAuLi5zdGF0ZSxcbiAqICAgICAgICBrZXBsZXJHbDoge1xuICogICAgICAgICAgLi4uc3RhdGUua2VwbGVyR2wsXG4gKiAgICAgICAgICBmb286IHtcbiAqICAgICAgICAgICAgIC4uLnN0YXRlLmtlcGxlckdsLmZvbyxcbiAqICAgICAgICAgICAgIHZpc1N0YXRlOiB2aXNTdGF0ZVVwZGF0ZXJzLmVubGFyZ2VGaWx0ZXJVcGRhdGVyKFxuICogICAgICAgICAgICAgICBzdGF0ZS5rZXBsZXJHbC5mb28udmlzU3RhdGUsXG4gKiAgICAgICAgICAgICAgIHtpZHg6IDB9XG4gKiAgICAgICAgICAgICApXG4gKiAgICAgICAgICB9XG4gKiAgICAgICAgfVxuICogICAgICB9O1xuICogIH1cbiAqICByZXR1cm4gcmVkdWNlcnMoc3RhdGUsIGFjdGlvbik7XG4gKiB9O1xuICpcbiAqIGV4cG9ydCBkZWZhdWx0IGNvbXBvc2VkUmVkdWNlcjtcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IHZpc1N0YXRlVXBkYXRlcnMgPSBudWxsO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdEludGVyYWN0aW9uQ29uZmlnOiBJbnRlcmFjdGlvbkNvbmZpZyA9IHtcbiAgdG9vbHRpcDoge1xuICAgIGlkOiAndG9vbHRpcCcsXG4gICAgbGFiZWw6ICdpbnRlcmFjdGlvbnMudG9vbHRpcCcsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICBjb25maWc6IHtcbiAgICAgIGZpZWxkc1RvU2hvdzoge30sXG4gICAgICBjb21wYXJlTW9kZTogZmFsc2UsXG4gICAgICBjb21wYXJlVHlwZTogQ09NUEFSRV9UWVBFUy5BQlNPTFVURVxuICAgIH1cbiAgfSxcbiAgZ2VvY29kZXI6IHtcbiAgICBpZDogJ2dlb2NvZGVyJyxcbiAgICBsYWJlbDogJ2ludGVyYWN0aW9ucy5nZW9jb2RlcicsXG4gICAgZW5hYmxlZDogZmFsc2UsXG4gICAgcG9zaXRpb246IG51bGxcbiAgfSxcbiAgYnJ1c2g6IHtcbiAgICBpZDogJ2JydXNoJyxcbiAgICBsYWJlbDogJ2ludGVyYWN0aW9ucy5icnVzaCcsXG4gICAgZW5hYmxlZDogZmFsc2UsXG4gICAgY29uZmlnOiB7XG4gICAgICAvLyBzaXplIGlzIGluIGttXG4gICAgICBzaXplOiAwLjVcbiAgICB9XG4gIH0sXG4gIGNvb3JkaW5hdGU6IHtcbiAgICBpZDogJ2Nvb3JkaW5hdGUnLFxuICAgIGxhYmVsOiAnaW50ZXJhY3Rpb25zLmNvb3JkaW5hdGUnLFxuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIHBvc2l0aW9uOiBudWxsXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0FOSU1BVElPTl9DT05GSUc6IEFuaW1hdGlvbkNvbmZpZyA9IHtcbiAgZG9tYWluOiBudWxsLFxuICBjdXJyZW50VGltZTogbnVsbCxcbiAgc3BlZWQ6IDEsXG4gIGlzQW5pbWF0aW5nOiBmYWxzZSxcbiAgdGltZUZvcm1hdDogbnVsbCxcbiAgdGltZXpvbmU6IG51bGwsXG4gIGRlZmF1bHRUaW1lRm9ybWF0OiBudWxsLFxuICBoaWRlQ29udHJvbDogZmFsc2UsXG4gIGR1cmF0aW9uOiBudWxsXG59O1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9FRElUT1I6IEVkaXRvciA9IHtcbiAgbW9kZTogRURJVE9SX01PREVTLkRSQVdfUE9MWUdPTixcbiAgZmVhdHVyZXM6IFtdLFxuICBzZWxlY3RlZEZlYXR1cmU6IG51bGwsXG4gIHZpc2libGU6IHRydWVcbn07XG5cbi8qKlxuICogRGVmYXVsdCBpbml0aWFsIGB2aXNTdGF0ZWBcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAY29uc3RhbnRcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IElOSVRJQUxfVklTX1NUQVRFOiBWaXNTdGF0ZSA9IHtcbiAgLy8gbWFwIGluZm9cbiAgbWFwSW5mbzoge1xuICAgIHRpdGxlOiAnJyxcbiAgICBkZXNjcmlwdGlvbjogJydcbiAgfSxcbiAgLy8gbGF5ZXJzXG4gIGxheWVyczogW10sXG4gIGxheWVyRGF0YTogW10sXG4gIGxheWVyVG9CZU1lcmdlZDogW10sXG4gIGxheWVyT3JkZXI6IFtdLFxuXG4gIC8vIGZpbHRlcnNcbiAgZmlsdGVyczogW10sXG4gIGZpbHRlclRvQmVNZXJnZWQ6IFtdLFxuXG4gIC8vIGEgY29sbGVjdGlvbiBvZiBtdWx0aXBsZSBkYXRhc2V0XG4gIGRhdGFzZXRzOiB7fSxcbiAgZWRpdGluZ0RhdGFzZXQ6IHVuZGVmaW5lZCxcblxuICBpbnRlcmFjdGlvbkNvbmZpZzogZGVmYXVsdEludGVyYWN0aW9uQ29uZmlnLFxuICBpbnRlcmFjdGlvblRvQmVNZXJnZWQ6IHt9LFxuXG4gIGxheWVyQmxlbmRpbmc6ICdub3JtYWwnLFxuICBvdmVybGF5QmxlbmRpbmc6ICdub3JtYWwnLFxuICBob3ZlckluZm86IHVuZGVmaW5lZCxcbiAgY2xpY2tlZDogdW5kZWZpbmVkLFxuICBtb3VzZVBvczoge30sXG4gIG1heERlZmF1bHRUb29sdGlwczogTUFYX0RFRkFVTFRfVE9PTFRJUFMsXG5cbiAgLy8gdGhpcyBpcyB1c2VkIHdoZW4gdXNlciBzcGxpdCBtYXBzXG4gIHNwbGl0TWFwczogW1xuICAgIC8vIHRoaXMgd2lsbCBjb250YWluIGEgbGlzdCBvZiBvYmplY3RzIHRvXG4gICAgLy8gZGVzY3JpYmUgdGhlIHN0YXRlIG9mIGxheWVyIGF2YWlsYWJpbGl0eSBhbmQgdmlzaWJpbGl0eSBmb3IgZWFjaCBtYXBcbiAgICAvLyBbXG4gICAgLy8gICB7XG4gICAgLy8gICAgICBsYXllcnM6IHtsYXllcl9pZDogdHJ1ZSB8IGZhbHNlfVxuICAgIC8vICAgfVxuICAgIC8vIF1cbiAgXSxcbiAgc3BsaXRNYXBzVG9CZU1lcmdlZDogW10sXG4gIGlzTWVyZ2luZ0RhdGFzZXRzOiB7fSxcbiAgLy8gZGVmYXVsdHMgbGF5ZXIgY2xhc3Nlc1xuICBsYXllckNsYXNzZXM6IExheWVyQ2xhc3NlcyxcblxuICAvLyBkZWZhdWx0IGFuaW1hdGlvblxuICAvLyB0aW1lIGluIHVuaXggdGltZXN0YW1wIChtaWxsaXNlY29uZHMpICh0aGUgbnVtYmVyIG9mIHNlY29uZHMgc2luY2UgdGhlIFVuaXggRXBvY2gpXG4gIGFuaW1hdGlvbkNvbmZpZzogREVGQVVMVF9BTklNQVRJT05fQ09ORklHLFxuXG4gIGVkaXRvcjogREVGQVVMVF9FRElUT1IsXG5cbiAgZmlsZUxvYWRpbmc6IGZhbHNlLFxuICBmaWxlTG9hZGluZ1Byb2dyZXNzOiB7fSxcblxuICBsb2FkZXJzOiBbXSxcbiAgbG9hZE9wdGlvbnM6IHt9LFxuXG4gIC8vIHZpc1N0YXRlTWVyZ2Vyc1xuICBtZXJnZXJzOiBWSVNfU1RBVEVfTUVSR0VSUyxcblxuICAvLyBrZXBsZXIgc2NoZW1hc1xuICBzY2hlbWE6IEtlcGxlckdMU2NoZW1hXG59O1xuXG4vKipcbiAqIFVwZGF0ZSBzdGF0ZSB3aXRoIHVwZGF0ZWQgbGF5ZXIgYW5kIGxheWVyRGF0YVxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0YXRlV2l0aExheWVyQW5kRGF0YShcbiAgc3RhdGU6IFZpc1N0YXRlLFxuICB7bGF5ZXJEYXRhLCBsYXllciwgaWR4fToge2xheWVyRGF0YT86IGFueTsgbGF5ZXI6IExheWVyOyBpZHg6IG51bWJlcn1cbik6IFZpc1N0YXRlIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBsYXllcnM6IHN0YXRlLmxheWVycy5tYXAoKGx5ciwgaSkgPT4gKGkgPT09IGlkeCA/IGxheWVyIDogbHlyKSksXG4gICAgbGF5ZXJEYXRhOiBsYXllckRhdGFcbiAgICAgID8gc3RhdGUubGF5ZXJEYXRhLm1hcCgoZCwgaSkgPT4gKGkgPT09IGlkeCA/IGxheWVyRGF0YSA6IGQpKVxuICAgICAgOiBzdGF0ZS5sYXllckRhdGFcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVN0YXRlT25MYXllclZpc2liaWxpdHlDaGFuZ2U8UyBleHRlbmRzIFZpc1N0YXRlPihzdGF0ZTogUywgbGF5ZXI6IExheWVyKTogUyB7XG4gIGxldCBuZXdTdGF0ZSA9IHN0YXRlO1xuICBpZiAoc3RhdGUuc3BsaXRNYXBzLmxlbmd0aCkge1xuICAgIG5ld1N0YXRlID0ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzcGxpdE1hcHM6IGxheWVyLmNvbmZpZy5pc1Zpc2libGVcbiAgICAgICAgPyBhZGROZXdMYXllcnNUb1NwbGl0TWFwKHN0YXRlLnNwbGl0TWFwcywgbGF5ZXIpXG4gICAgICAgIDogcmVtb3ZlTGF5ZXJGcm9tU3BsaXRNYXBzKHN0YXRlLnNwbGl0TWFwcywgbGF5ZXIpXG4gICAgfTtcbiAgfVxuXG4gIGlmIChsYXllci5jb25maWcuYW5pbWF0aW9uLmVuYWJsZWQpIHtcbiAgICBuZXdTdGF0ZSA9IHVwZGF0ZUFuaW1hdGlvbkRvbWFpbihzdGF0ZSk7XG4gIH1cblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbi8qKlxuICogVXBkYXRlIGxheWVyIGJhc2UgY29uZmlnOiBkYXRhSWQsIGxhYmVsLCBjb2x1bW4sIGlzVmlzaWJsZVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJDb25maWdDaGFuZ2VVcGRhdGVyKFxuICBzdGF0ZTogVmlzU3RhdGUsXG4gIGFjdGlvbjogVmlzU3RhdGVBY3Rpb25zLkxheWVyQ29uZmlnQ2hhbmdlVXBkYXRlckFjdGlvblxuKTogVmlzU3RhdGUge1xuICBjb25zdCB7b2xkTGF5ZXJ9ID0gYWN0aW9uO1xuICBjb25zdCBpZHggPSBzdGF0ZS5sYXllcnMuZmluZEluZGV4KGwgPT4gbC5pZCA9PT0gb2xkTGF5ZXIuaWQpO1xuICBjb25zdCBwcm9wcyA9IE9iamVjdC5rZXlzKGFjdGlvbi5uZXdDb25maWcpO1xuICBpZiAodHlwZW9mIGFjdGlvbi5uZXdDb25maWcuZGF0YUlkID09PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IHtkYXRhSWQsIC4uLnJlc3RDb25maWd9ID0gYWN0aW9uLm5ld0NvbmZpZztcbiAgICBjb25zdCBzdGF0ZVdpdGhEYXRhSWQgPSBsYXllckRhdGFJZENoYW5nZVVwZGF0ZXIoc3RhdGUsIHtcbiAgICAgIG9sZExheWVyLFxuICAgICAgbmV3Q29uZmlnOiB7ZGF0YUlkfVxuICAgIH0pO1xuICAgIGNvbnN0IG5leHRMYXllciA9IHN0YXRlV2l0aERhdGFJZC5sYXllcnMuZmluZChsID0+IGwuaWQgPT09IG9sZExheWVyLmlkKTtcbiAgICByZXR1cm4gbmV4dExheWVyICYmIE9iamVjdC5rZXlzKHJlc3RDb25maWcpLmxlbmd0aFxuICAgICAgPyBsYXllckNvbmZpZ0NoYW5nZVVwZGF0ZXIoc3RhdGVXaXRoRGF0YUlkLCB7b2xkTGF5ZXI6IG5leHRMYXllciwgbmV3Q29uZmlnOiByZXN0Q29uZmlnfSlcbiAgICAgIDogc3RhdGVXaXRoRGF0YUlkO1xuICB9XG5cbiAgbGV0IG5ld0xheWVyID0gb2xkTGF5ZXIudXBkYXRlTGF5ZXJDb25maWcoYWN0aW9uLm5ld0NvbmZpZyk7XG5cbiAgbGV0IGxheWVyRGF0YTtcblxuICBpZiAobmV3TGF5ZXIuc2hvdWxkQ2FsY3VsYXRlTGF5ZXJEYXRhKHByb3BzKSkge1xuICAgIGNvbnN0IG9sZExheWVyRGF0YSA9IHN0YXRlLmxheWVyRGF0YVtpZHhdO1xuXG4gICAgY29uc3QgdXBkYXRlTGF5ZXJEYXRhUmVzdWx0ID0gY2FsY3VsYXRlTGF5ZXJEYXRhKG5ld0xheWVyLCBzdGF0ZSwgb2xkTGF5ZXJEYXRhKTtcbiAgICBuZXdMYXllciA9IHVwZGF0ZUxheWVyRGF0YVJlc3VsdC5sYXllcjtcbiAgICBsYXllckRhdGEgPSB1cGRhdGVMYXllckRhdGFSZXN1bHQubGF5ZXJEYXRhO1xuICB9XG5cbiAgbGV0IG5ld1N0YXRlID0gc3RhdGU7XG4gIGlmICgnaXNWaXNpYmxlJyBpbiBhY3Rpb24ubmV3Q29uZmlnKSB7XG4gICAgbmV3U3RhdGUgPSB1cGRhdGVTdGF0ZU9uTGF5ZXJWaXNpYmlsaXR5Q2hhbmdlKHN0YXRlLCBuZXdMYXllcik7XG4gIH1cblxuICByZXR1cm4gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKG5ld1N0YXRlLCB7XG4gICAgbGF5ZXI6IG5ld0xheWVyLFxuICAgIGxheWVyRGF0YSxcbiAgICBpZHhcbiAgfSk7XG59XG5cbi8qKlxuICogVXBkYXRlcyBpc1ZhbGlkIGZsYWcgb2YgYSBsYXllci5cbiAqIFVwZGF0ZXMgaXNWaXNpYmxlIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiBpc1ZhbGlkLlxuICogVHJpZ2dlcnMgdXBkYXRlIG9mIGRhdGEgZm9yIHRoZSBsYXllciBpbiBvcmRlciB0byBnZXQgZXJyb3JzIGFnYWluIGR1cmluZyBuZXh0IHVwZGF0ZSBpdGVyYXRpb24uXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHJldHVybnMgbmV4dFN0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllclNldElzVmFsaWRVcGRhdGVyKFxuICBzdGF0ZTogVmlzU3RhdGUsXG4gIGFjdGlvbjogVmlzU3RhdGVBY3Rpb25zLkxheWVyU2V0SXNWYWxpZFVwZGF0ZXJBY3Rpb25cbik6IFZpc1N0YXRlIHtcbiAgY29uc3Qge29sZExheWVyLCBpc1ZhbGlkfSA9IGFjdGlvbjtcblxuICBjb25zdCBpZHggPSBzdGF0ZS5sYXllcnMuZmluZEluZGV4KGwgPT4gbC5pZCA9PT0gb2xkTGF5ZXIuaWQpO1xuICBjb25zdCBsYXllclRvVXBkYXRlID0gc3RhdGUubGF5ZXJzW2lkeF07XG4gIGlmIChsYXllclRvVXBkYXRlKSB7XG4gICAgbGV0IG5ld0xheWVyO1xuICAgIGxldCBuZXdEYXRhID0gbnVsbDtcblxuICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAvLyBUcmlnZ2VyIGRhdGEgdXBkYXRlIGluIG9yZGVyIHRvIHNob3cgZXJyb3JzIGFnYWluIGlmIHByZXNlbnQuXG4gICAgICBjb25zdCB7bGF5ZXIsIGxheWVyRGF0YX0gPSBjYWxjdWxhdGVMYXllckRhdGEobGF5ZXJUb1VwZGF0ZSwgc3RhdGUsIHVuZGVmaW5lZCk7XG4gICAgICBuZXdMYXllciA9IGxheWVyO1xuICAgICAgbmV3RGF0YSA9IGxheWVyRGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3TGF5ZXIgPSBsYXllclRvVXBkYXRlLnVwZGF0ZUxheWVyQ29uZmlnKHtcbiAgICAgICAgaXNWaXNpYmxlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICBuZXdMYXllci5pc1ZhbGlkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVwZGF0ZVN0YXRlV2l0aExheWVyQW5kRGF0YShzdGF0ZSwge2lkeCwgbGF5ZXI6IG5ld0xheWVyLCBsYXllckRhdGE6IG5ld0RhdGF9KTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZnVuY3Rpb24gYWRkT3JSZW1vdmVUZXh0TGFiZWxzKG5ld0ZpZWxkcywgdGV4dExhYmVsKSB7XG4gIGxldCBuZXdUZXh0TGFiZWwgPSB0ZXh0TGFiZWwuc2xpY2UoKTtcblxuICBjb25zdCBjdXJyZW50RmllbGRzID0gdGV4dExhYmVsLm1hcCh0bCA9PiB0bC5maWVsZCAmJiB0bC5maWVsZC5uYW1lKS5maWx0ZXIoZCA9PiBkKTtcblxuICBjb25zdCBhZGRGaWVsZHMgPSBuZXdGaWVsZHMuZmlsdGVyKGYgPT4gIWN1cnJlbnRGaWVsZHMuaW5jbHVkZXMoZi5uYW1lKSk7XG4gIGNvbnN0IGRlbGV0ZUZpZWxkcyA9IGN1cnJlbnRGaWVsZHMuZmlsdGVyKGYgPT4gIW5ld0ZpZWxkcy5maW5kKGZkID0+IGZkLm5hbWUgPT09IGYpKTtcblxuICAvLyBkZWxldGVcbiAgbmV3VGV4dExhYmVsID0gbmV3VGV4dExhYmVsLmZpbHRlcih0bCA9PiB0bC5maWVsZCAmJiAhZGVsZXRlRmllbGRzLmluY2x1ZGVzKHRsLmZpZWxkLm5hbWUpKTtcbiAgbmV3VGV4dExhYmVsID0gIW5ld1RleHRMYWJlbC5sZW5ndGggPyBbREVGQVVMVF9URVhUX0xBQkVMXSA6IG5ld1RleHRMYWJlbDtcblxuICAvLyBhZGRcbiAgbmV3VGV4dExhYmVsID0gW1xuICAgIC4uLm5ld1RleHRMYWJlbC5maWx0ZXIodGwgPT4gdGwuZmllbGQpLFxuICAgIC4uLmFkZEZpZWxkcy5tYXAoYWYgPT4gKHtcbiAgICAgIC4uLkRFRkFVTFRfVEVYVF9MQUJFTCxcbiAgICAgIGZpZWxkOiBhZlxuICAgIH0pKVxuICBdO1xuXG4gIHJldHVybiBuZXdUZXh0TGFiZWw7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRleHRMYWJlbFByb3BBbmRWYWx1ZShpZHgsIHByb3AsIHZhbHVlLCB0ZXh0TGFiZWwpIHtcbiAgaWYgKCF0ZXh0TGFiZWxbaWR4XS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgIHJldHVybiB0ZXh0TGFiZWw7XG4gIH1cblxuICBsZXQgbmV3VGV4dExhYmVsID0gdGV4dExhYmVsLnNsaWNlKCk7XG5cbiAgaWYgKHByb3AgJiYgKHZhbHVlIHx8IHRleHRMYWJlbC5sZW5ndGggPT09IDEpKSB7XG4gICAgbmV3VGV4dExhYmVsID0gdGV4dExhYmVsLm1hcCgodGwsIGkpID0+IChpID09PSBpZHggPyB7Li4udGwsIFtwcm9wXTogdmFsdWV9IDogdGwpKTtcbiAgfSBlbHNlIGlmIChwcm9wID09PSAnZmllbGQnICYmIHZhbHVlID09PSBudWxsICYmIHRleHRMYWJlbC5sZW5ndGggPiAxKSB7XG4gICAgLy8gcmVtb3ZlIGxhYmVsIHdoZW4gZmllbGQgdmFsdWUgaXMgc2V0IHRvIG51bGxcbiAgICBuZXdUZXh0TGFiZWwuc3BsaWNlKGlkeCwgMSk7XG4gIH1cblxuICByZXR1cm4gbmV3VGV4dExhYmVsO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBsYXllciBiYXNlIGNvbmZpZzogZGF0YUlkLCBsYWJlbCwgY29sdW1uLCBpc1Zpc2libGVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcmV0dXJucyBuZXh0U3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVGV4dExhYmVsQ2hhbmdlVXBkYXRlcihcbiAgc3RhdGU6IFZpc1N0YXRlLFxuICBhY3Rpb246IFZpc1N0YXRlQWN0aW9ucy5MYXllclRleHRMYWJlbENoYW5nZVVwZGF0ZXJBY3Rpb25cbik6IFZpc1N0YXRlIHtcbiAgY29uc3Qge29sZExheWVyLCBpZHgsIHByb3AsIHZhbHVlfSA9IGFjdGlvbjtcbiAgY29uc3Qge3RleHRMYWJlbH0gPSBvbGRMYXllci5jb25maWc7XG5cbiAgbGV0IG5ld1RleHRMYWJlbCA9IHRleHRMYWJlbC5zbGljZSgpO1xuICBpZiAoIXRleHRMYWJlbFtpZHhdICYmIGlkeCA9PT0gdGV4dExhYmVsLmxlbmd0aCkge1xuICAgIC8vIGlmIGlkeCBpcyBzZXQgdG8gbGVuZ3RoLCBhZGQgZW1wdHkgdGV4dCBsYWJlbFxuICAgIG5ld1RleHRMYWJlbCA9IFsuLi50ZXh0TGFiZWwsIERFRkFVTFRfVEVYVF9MQUJFTF07XG4gIH1cblxuICBpZiAoaWR4ID09PSAnYWxsJyAmJiBwcm9wID09PSAnZmllbGRzJykge1xuICAgIG5ld1RleHRMYWJlbCA9IGFkZE9yUmVtb3ZlVGV4dExhYmVscyh2YWx1ZSwgdGV4dExhYmVsKTtcbiAgfSBlbHNlIHtcbiAgICBuZXdUZXh0TGFiZWwgPSB1cGRhdGVUZXh0TGFiZWxQcm9wQW5kVmFsdWUoaWR4LCBwcm9wLCB2YWx1ZSwgbmV3VGV4dExhYmVsKTtcbiAgfVxuICAvLyB1cGRhdGUgdGV4dCBsYWJlbCBwcm9wIGFuZCB2YWx1ZVxuICByZXR1cm4gbGF5ZXJDb25maWdDaGFuZ2VVcGRhdGVyKHN0YXRlLCB7XG4gICAgb2xkTGF5ZXIsXG4gICAgbmV3Q29uZmlnOiB7dGV4dExhYmVsOiBuZXdUZXh0TGFiZWx9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4aXN0aW5nTGF5ZXJXaXRoRGF0YShkYXRhc2V0LCBsYXllckNsYXNzZXMsIGxheWVyLCBzY2hlbWEpIHtcbiAgY29uc3QgbG9hZGVkTGF5ZXIgPSBzZXJpYWxpemVMYXllcihsYXllciwgc2NoZW1hKTtcbiAgcmV0dXJuIGxvYWRlZExheWVyXG4gICAgPyB2YWxpZGF0ZUxheWVyV2l0aERhdGEoZGF0YXNldCwgbG9hZGVkTGF5ZXIsIGxheWVyQ2xhc3Nlcywge1xuICAgICAgICBhbGxvd0VtcHR5Q29sdW1uOiB0cnVlXG4gICAgICB9KVxuICAgIDogbnVsbDtcbn1cblxuLyoqXG4gKiBVcGRhdGUgbGF5ZXIgY29uZmlnIGRhdGFJZFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJEYXRhSWRDaGFuZ2VVcGRhdGVyKFxuICBzdGF0ZTogVmlzU3RhdGUsXG4gIGFjdGlvbjoge1xuICAgIG9sZExheWVyOiBMYXllcjtcbiAgICBuZXdDb25maWc6IHtcbiAgICAgIGRhdGFJZDogc3RyaW5nO1xuICAgIH07XG4gIH1cbik6IFZpc1N0YXRlIHtcbiAgY29uc3Qge29sZExheWVyLCBuZXdDb25maWd9ID0gYWN0aW9uO1xuICBjb25zdCB7ZGF0YUlkfSA9IG5ld0NvbmZpZztcblxuICBpZiAoIW9sZExheWVyIHx8ICFzdGF0ZS5kYXRhc2V0c1tkYXRhSWRdKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGNvbnN0IGlkeCA9IHN0YXRlLmxheWVycy5maW5kSW5kZXgobCA9PiBsLmlkID09PSBvbGRMYXllci5pZCk7XG5cbiAgbGV0IG5ld0xheWVyID0gb2xkTGF5ZXIudXBkYXRlTGF5ZXJDb25maWcoe2RhdGFJZH0pO1xuICAvLyB0aGlzIG1heSBoYXBwZW4gd2hlbiBhIGxheWVyIGlzIG5ldyAodHlwZTogbnVsbCBhbmQgbm8gY29sdW1ucykgYnV0IGl0J3Mgbm90IHJlYWR5IHRvIGJlIHNhdmVkXG4gIGlmIChuZXdMYXllci5pc1ZhbGlkVG9TYXZlKCkpIHtcbiAgICBjb25zdCB2YWxpZGF0ZWQgPSB2YWxpZGF0ZUV4aXN0aW5nTGF5ZXJXaXRoRGF0YShcbiAgICAgIHN0YXRlLmRhdGFzZXRzW2RhdGFJZF0sXG4gICAgICBzdGF0ZS5sYXllckNsYXNzZXMsXG4gICAgICBuZXdMYXllcixcbiAgICAgIHN0YXRlLnNjaGVtYVxuICAgICk7XG4gICAgLy8gaWYgY2FudCB2YWxpZGF0ZSBpdCB3aXRoIGRhdGEgY3JlYXRlIGEgbmV3IG9uZVxuICAgIGlmICghdmFsaWRhdGVkKSB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIFRPRE86IGNoZWNraW5nIG9sZExheWVyLnR5cGUgIT09IG51bGxcbiAgICAgIG5ld0xheWVyID0gbmV3IHN0YXRlLmxheWVyQ2xhc3Nlc1tvbGRMYXllci50eXBlXSh7ZGF0YUlkLCBpZDogb2xkTGF5ZXIuaWR9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3TGF5ZXIgPSB2YWxpZGF0ZWQ7XG4gICAgfVxuICB9XG5cbiAgbmV3TGF5ZXIgPSBuZXdMYXllci51cGRhdGVMYXllckNvbmZpZyh7XG4gICAgaXNWaXNpYmxlOiBvbGRMYXllci5jb25maWcuaXNWaXNpYmxlLFxuICAgIGlzQ29uZmlnQWN0aXZlOiB0cnVlXG4gIH0pO1xuXG4gIG5ld0xheWVyLnVwZGF0ZUxheWVyRG9tYWluKHN0YXRlLmRhdGFzZXRzKTtcbiAgY29uc3Qge2xheWVyRGF0YSwgbGF5ZXJ9ID0gY2FsY3VsYXRlTGF5ZXJEYXRhKG5ld0xheWVyLCBzdGF0ZSwgdW5kZWZpbmVkKTtcblxuICByZXR1cm4gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKHN0YXRlLCB7bGF5ZXJEYXRhLCBsYXllciwgaWR4fSk7XG59XG5cbmZ1bmN0aW9uIHNldEluaXRpYWxMYXllckNvbmZpZyhsYXllciwgZGF0YXNldHMsIGxheWVyQ2xhc3Nlcykge1xuICBsZXQgbmV3TGF5ZXIgPSBsYXllcjtcbiAgaWYgKCFPYmplY3Qua2V5cyhkYXRhc2V0cykubGVuZ3RoKSB7XG4gICAgLy8gbm8gZGF0YSBpcyBsb2FkZWRcbiAgICByZXR1cm4gbGF5ZXI7XG4gIH1cbiAgaWYgKCFsYXllci5jb25maWcuZGF0YUlkKSB7XG4gICAgLy8gc2V0IGxheWVyIGRhdGFJZFxuICAgIG5ld0xheWVyID0gbGF5ZXIudXBkYXRlTGF5ZXJDb25maWcoe2RhdGFJZDogT2JqZWN0LmtleXMoZGF0YXNldHMpWzBdfSk7XG4gIH1cbiAgY29uc3QgZGF0YXNldCA9IGRhdGFzZXRzW25ld0xheWVyLmNvbmZpZy5kYXRhSWRdO1xuICBpZiAoIWRhdGFzZXQpIHtcbiAgICByZXR1cm4gbGF5ZXI7XG4gIH1cblxuICAvLyBmaW5kIGRlZmF1dCBsYXllciBwcm9wc1xuICBjb25zdCByZXN1bHQgPVxuICAgIHR5cGVvZiBsYXllckNsYXNzZXNbbmV3TGF5ZXIudHlwZV0uZmluZERlZmF1bHRMYXllclByb3BzID09PSAnZnVuY3Rpb24nXG4gICAgICA/IGxheWVyQ2xhc3Nlc1tuZXdMYXllci50eXBlXS5maW5kRGVmYXVsdExheWVyUHJvcHMoZGF0YXNldCwgW10pXG4gICAgICA6IHtwcm9wczogW119O1xuXG4gIC8vIGFuIGFycmF5IG9mIHBvc3NpYmxlIHByb3BzLCB1c2UgMXN0IG9uZVxuICBjb25zdCBwcm9wcyA9IEFycmF5LmlzQXJyYXkocmVzdWx0KSA/IHJlc3VsdCA6IHJlc3VsdC5wcm9wcyB8fCBbXTtcblxuICBpZiAocHJvcHMubGVuZ3RoKSB7XG4gICAgbmV3TGF5ZXIgPSBuZXcgbGF5ZXJDbGFzc2VzW2xheWVyLnR5cGVdKHtcbiAgICAgIC4uLnByb3BzWzBdLFxuICAgICAgbGFiZWw6IG5ld0xheWVyLmNvbmZpZy5sYWJlbCxcbiAgICAgIGRhdGFJZDogbmV3TGF5ZXIuY29uZmlnLmRhdGFJZCxcbiAgICAgIGlzVmlzaWJsZTogdHJ1ZSxcbiAgICAgIGlzQ29uZmlnQWN0aXZlOiBuZXdMYXllci5jb25maWcuaXNDb25maWdBY3RpdmVcbiAgICB9KTtcblxuICAgIHJldHVybiB0eXBlb2YgbmV3TGF5ZXIuc2V0SW5pdGlhbExheWVyQ29uZmlnID09PSAnZnVuY3Rpb24nXG4gICAgICA/IG5ld0xheWVyLnNldEluaXRpYWxMYXllckNvbmZpZyhkYXRhc2V0KVxuICAgICAgOiBuZXdMYXllcjtcbiAgfVxuXG4gIHJldHVybiBuZXdMYXllcjtcbn1cbi8qKlxuICogVXBkYXRlIGxheWVyIHR5cGUuIFByZXZpZXdzIGxheWVyIGNvbmZpZyB3aWxsIGJlIGNvcGllZCBpZiBhcHBsaWNhYmxlLlxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxheWVyVHlwZUNoYW5nZVVwZGF0ZXIoXG4gIHN0YXRlOiBWaXNTdGF0ZSxcbiAgYWN0aW9uOiBWaXNTdGF0ZUFjdGlvbnMuTGF5ZXJUeXBlQ2hhbmdlVXBkYXRlckFjdGlvblxuKTogVmlzU3RhdGUge1xuICBjb25zdCB7b2xkTGF5ZXIsIG5ld1R5cGV9ID0gYWN0aW9uO1xuICBpZiAoIW9sZExheWVyKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGNvbnN0IG9sZElkID0gb2xkTGF5ZXIuaWQ7XG4gIGNvbnN0IGlkeCA9IHN0YXRlLmxheWVycy5maW5kSW5kZXgobCA9PiBsLmlkID09PSBvbGRJZCk7XG5cbiAgaWYgKCFzdGF0ZS5sYXllckNsYXNzZXNbbmV3VHlwZV0pIHtcbiAgICBDb25zb2xlLmVycm9yKGAke25ld1R5cGV9IGlzIG5vdCBhIHZhbGlkIGxheWVyIHR5cGVgKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgbGV0IG5ld0xheWVyID0gbmV3IHN0YXRlLmxheWVyQ2xhc3Nlc1tuZXdUeXBlXSh7XG4gICAgLy8ga2VlcCBvbGQgbGF5ZXIgbGFibGUgYW5kIGlzQ29uZmlnQWN0aXZlXG4gICAgbGFiZWw6IG9sZExheWVyLmNvbmZpZy5sYWJlbCxcbiAgICBpc0NvbmZpZ0FjdGl2ZTogb2xkTGF5ZXIuY29uZmlnLmlzQ29uZmlnQWN0aXZlLFxuICAgIGRhdGFJZDogb2xkTGF5ZXIuY29uZmlnLmRhdGFJZFxuICB9KTtcblxuICBpZiAoIW9sZExheWVyLnR5cGUpIHtcbiAgICAvLyBpZiBzZXR0aW5nIGxheWVyIHR5cGUgb24gYW4gZW1wdHkgbGF5ZXJcbiAgICBuZXdMYXllciA9IHNldEluaXRpYWxMYXllckNvbmZpZyhuZXdMYXllciwgc3RhdGUuZGF0YXNldHMsIHN0YXRlLmxheWVyQ2xhc3Nlcyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gZ2V0IGEgbWludCBsYXllciwgd2l0aCBuZXcgaWQgYW5kIHR5cGVcbiAgICAvLyBiZWNhdXNlIGRlY2suZ2wgdXNlcyBpZCB0byBtYXRjaCBiZXR3ZWVuIG5ldyBhbmQgb2xkIGxheWVyLlxuICAgIC8vIElmIHR5cGUgaGFzIGNoYW5nZWQgYnV0IGlkIGlzIHRoZSBzYW1lLCBpdCB3aWxsIGJyZWFrXG4gICAgbmV3TGF5ZXIuYXNzaWduQ29uZmlnVG9MYXllcihvbGRMYXllci5jb25maWcsIG9sZExheWVyLnZpc0NvbmZpZ1NldHRpbmdzKTtcbiAgICBuZXdMYXllci51cGRhdGVMYXllckRvbWFpbihzdGF0ZS5kYXRhc2V0cyk7XG4gIH1cblxuICBjb25zdCB7Y2xpY2tlZCwgaG92ZXJJbmZvfSA9IHN0YXRlO1xuXG4gIGxldCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBjbGlja2VkOiBvbGRMYXllci5pc0xheWVySG92ZXJlZChjbGlja2VkKSA/IHVuZGVmaW5lZCA6IGNsaWNrZWQsXG4gICAgaG92ZXJJbmZvOiBvbGRMYXllci5pc0xheWVySG92ZXJlZChob3ZlckluZm8pID8gdW5kZWZpbmVkIDogaG92ZXJJbmZvXG4gIH07XG5cbiAgY29uc3Qge2xheWVyRGF0YSwgbGF5ZXJ9ID0gY2FsY3VsYXRlTGF5ZXJEYXRhKG5ld0xheWVyLCBuZXdTdGF0ZSk7XG4gIG5ld1N0YXRlID0gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKG5ld1N0YXRlLCB7bGF5ZXJEYXRhLCBsYXllciwgaWR4fSk7XG5cbiAgaWYgKGxheWVyLmNvbmZpZy5hbmltYXRpb24uZW5hYmxlZCB8fCBvbGRMYXllci5jb25maWcuYW5pbWF0aW9uLmVuYWJsZWQpIHtcbiAgICBuZXdTdGF0ZSA9IHVwZGF0ZUFuaW1hdGlvbkRvbWFpbihuZXdTdGF0ZSk7XG4gIH1cblxuICAvLyB1cGRhdGUgc3BsaXRNYXAgbGF5ZXIgaWRcbiAgaWYgKHN0YXRlLnNwbGl0TWFwcy5sZW5ndGgpIHtcbiAgICBuZXdTdGF0ZSA9IHtcbiAgICAgIC4uLm5ld1N0YXRlLFxuICAgICAgc3BsaXRNYXBzOiBuZXdTdGF0ZS5zcGxpdE1hcHMubWFwKHNldHRpbmdzID0+IHtcbiAgICAgICAgY29uc3Qge1tvbGRJZF06IG9sZExheWVyTWFwLCAuLi5vdGhlckxheWVyc30gPSBzZXR0aW5ncy5sYXllcnM7XG4gICAgICAgIHJldHVybiBvbGRJZCBpbiBzZXR0aW5ncy5sYXllcnNcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgLi4uc2V0dGluZ3MsXG4gICAgICAgICAgICAgIGxheWVyczoge1xuICAgICAgICAgICAgICAgIC4uLm90aGVyTGF5ZXJzLFxuICAgICAgICAgICAgICAgIFtsYXllci5pZF06IG9sZExheWVyTWFwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHNldHRpbmdzO1xuICAgICAgfSlcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBsYXllciB2aXN1YWwgY2hhbm5lbFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gbGF5ZXJWaXN1YWxDaGFubmVsQ2hhbmdlVXBkYXRlcihcbiAgc3RhdGU6IFZpc1N0YXRlLFxuICBhY3Rpb246IFZpc1N0YXRlQWN0aW9ucy5MYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2VVcGRhdGVyQWN0aW9uXG4pOiBWaXNTdGF0ZSB7XG4gIGNvbnN0IHtvbGRMYXllciwgbmV3Q29uZmlnLCBjaGFubmVsfSA9IGFjdGlvbjtcbiAgaWYgKCFvbGRMYXllci5jb25maWcuZGF0YUlkKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGNvbnN0IGRhdGFzZXQgPSBzdGF0ZS5kYXRhc2V0c1tvbGRMYXllci5jb25maWcuZGF0YUlkXTtcblxuICBjb25zdCBpZHggPSBzdGF0ZS5sYXllcnMuZmluZEluZGV4KGwgPT4gbC5pZCA9PT0gb2xkTGF5ZXIuaWQpO1xuICBjb25zdCBuZXdMYXllciA9IG9sZExheWVyLnVwZGF0ZUxheWVyQ29uZmlnKG5ld0NvbmZpZyk7XG5cbiAgbmV3TGF5ZXIudXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsKGRhdGFzZXQsIGNoYW5uZWwpO1xuXG4gIGNvbnN0IG9sZExheWVyRGF0YSA9IHN0YXRlLmxheWVyRGF0YVtpZHhdO1xuICBjb25zdCB7bGF5ZXJEYXRhLCBsYXllcn0gPSBjYWxjdWxhdGVMYXllckRhdGEobmV3TGF5ZXIsIHN0YXRlLCBvbGRMYXllckRhdGEpO1xuXG4gIHJldHVybiB1cGRhdGVTdGF0ZVdpdGhMYXllckFuZERhdGEoc3RhdGUsIHtsYXllckRhdGEsIGxheWVyLCBpZHh9KTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgbGF5ZXIgYHZpc0NvbmZpZ2BcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsYXllclZpc0NvbmZpZ0NoYW5nZVVwZGF0ZXIoXG4gIHN0YXRlOiBWaXNTdGF0ZSxcbiAgYWN0aW9uOiBWaXNTdGF0ZUFjdGlvbnMuTGF5ZXJWaXNDb25maWdDaGFuZ2VVcGRhdGVyQWN0aW9uXG4pOiBWaXNTdGF0ZSB7XG4gIGNvbnN0IHtvbGRMYXllcn0gPSBhY3Rpb247XG4gIGNvbnN0IGlkeCA9IHN0YXRlLmxheWVycy5maW5kSW5kZXgobCA9PiBsLmlkID09PSBvbGRMYXllci5pZCk7XG4gIGNvbnN0IHByb3BzID0gT2JqZWN0LmtleXMoYWN0aW9uLm5ld1Zpc0NvbmZpZyk7XG4gIGNvbnN0IG5ld1Zpc0NvbmZpZyA9IHtcbiAgICAuLi5vbGRMYXllci5jb25maWcudmlzQ29uZmlnLFxuICAgIC4uLmFjdGlvbi5uZXdWaXNDb25maWdcbiAgfTtcblxuICBjb25zdCBuZXdMYXllciA9IG9sZExheWVyLnVwZGF0ZUxheWVyQ29uZmlnKHt2aXNDb25maWc6IG5ld1Zpc0NvbmZpZ30pO1xuXG4gIGlmIChuZXdMYXllci5zaG91bGRDYWxjdWxhdGVMYXllckRhdGEocHJvcHMpKSB7XG4gICAgY29uc3Qgb2xkTGF5ZXJEYXRhID0gc3RhdGUubGF5ZXJEYXRhW2lkeF07XG4gICAgY29uc3Qge2xheWVyRGF0YSwgbGF5ZXJ9ID0gY2FsY3VsYXRlTGF5ZXJEYXRhKG5ld0xheWVyLCBzdGF0ZSwgb2xkTGF5ZXJEYXRhKTtcbiAgICByZXR1cm4gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKHN0YXRlLCB7bGF5ZXJEYXRhLCBsYXllciwgaWR4fSk7XG4gIH1cblxuICByZXR1cm4gdXBkYXRlU3RhdGVXaXRoTGF5ZXJBbmREYXRhKHN0YXRlLCB7bGF5ZXI6IG5ld0xheWVyLCBpZHh9KTtcbn1cblxuLyoqXG4gKiBVcGRhdGUgZmlsdGVyIHByb3BlcnR5XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RmlsdGVyQW5pbWF0aW9uVGltZVVwZGF0ZXIoXG4gIHN0YXRlOiBWaXNTdGF0ZSxcbiAgYWN0aW9uOiBWaXNTdGF0ZUFjdGlvbnMuU2V0RmlsdGVyQW5pbWF0aW9uVGltZVVwZGF0ZXJBY3Rpb25cbik6IFZpc1N0YXRlIHtcbiAgcmV0dXJuIHNldEZpbHRlclVwZGF0ZXIoc3RhdGUsIGFjdGlvbik7XG59XG5cbi8qKlxuICogVXBkYXRlIGZpbHRlciBhbmltYXRpb24gd2luZG93XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RmlsdGVyQW5pbWF0aW9uV2luZG93VXBkYXRlcihcbiAgc3RhdGU6IFZpc1N0YXRlLFxuICB7aWQsIGFuaW1hdGlvbldpbmRvd306IFZpc1N0YXRlQWN0aW9ucy5TZXRGaWx0ZXJBbmltYXRpb25XaW5kb3dVcGRhdGVyQWN0aW9uXG4pOiBWaXNTdGF0ZSB7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgZmlsdGVyczogc3RhdGUuZmlsdGVycy5tYXAoZiA9PlxuICAgICAgZi5pZCA9PT0gaWRcbiAgICAgICAgPyB7XG4gICAgICAgICAgICAuLi5mLFxuICAgICAgICAgICAgYW5pbWF0aW9uV2luZG93XG4gICAgICAgICAgfVxuICAgICAgICA6IGZcbiAgICApXG4gIH07XG59XG4vKipcbiAqIFVwZGF0ZSBmaWx0ZXIgcHJvcGVydHlcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWx0ZXJVcGRhdGVyKFxuICBzdGF0ZTogVmlzU3RhdGUsXG4gIGFjdGlvbjogVmlzU3RhdGVBY3Rpb25zLlNldEZpbHRlclVwZGF0ZXJBY3Rpb25cbik6IFZpc1N0YXRlIHtcbiAgY29uc3Qge2lkeCwgcHJvcCwgdmFsdWUsIHZhbHVlSW5kZXggPSAwfSA9IGFjdGlvbjtcbiAgY29uc3Qgb2xkRmlsdGVyID0gc3RhdGUuZmlsdGVyc1tpZHhdO1xuXG4gIGlmICghb2xkRmlsdGVyKSB7XG4gICAgQ29uc29sZS5lcnJvcihgZmlsdGVycy4ke2lkeH0gaXMgdW5kZWZpbmVkYCk7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGxldCBuZXdGaWx0ZXIgPSBzZXQoW3Byb3BdLCB2YWx1ZSwgb2xkRmlsdGVyKTtcbiAgbGV0IG5ld1N0YXRlID0gc3RhdGU7XG5cbiAgY29uc3Qge2RhdGFJZH0gPSBuZXdGaWx0ZXI7XG5cbiAgLy8gRW5zdXJpbmcgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICBsZXQgZGF0YXNldElkcyA9IHRvQXJyYXkoZGF0YUlkKTtcblxuICBzd2l0Y2ggKHByb3ApIHtcbiAgICAvLyBUT0RPOiBOZXh0IFBSIGZvciBVSSBpZiB3ZSB1cGRhdGUgZGF0YUlkLCB3ZSBuZWVkIHRvIGNvbnNpZGVyIHR3byBjYXNlczpcbiAgICAvLyAxLiBkYXRhSWQgaXMgZW1wdHk6IGNyZWF0ZSBhIGRlZmF1bHQgZmlsdGVyXG4gICAgLy8gMi4gQWRkIGEgbmV3IGRhdGFzZXQgaWRcbiAgICBjYXNlIEZJTFRFUl9VUERBVEVSX1BST1BTLmRhdGFJZDpcbiAgICAgIC8vIGlmIHRyeWluZyB0byB1cGRhdGUgZmlsdGVyIGRhdGFJZC4gY3JlYXRlIGFuIGVtcHR5IG5ldyBmaWx0ZXJcbiAgICAgIG5ld0ZpbHRlciA9IHVwZGF0ZUZpbHRlckRhdGFJZChkYXRhSWQpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEZJTFRFUl9VUERBVEVSX1BST1BTLm5hbWU6XG4gICAgICAvLyB3ZSBhcmUgc3VwcG9ydGluZyB0aGUgY3VycmVudCBmdW5jdGlvbmFsaXR5XG4gICAgICAvLyBUT0RPOiBOZXh0IFBSIGZvciBVSSBmaWx0ZXIgbmFtZSB3aWxsIG9ubHkgdXBkYXRlIGZpbHRlciBuYW1lIGJ1dCBpdCB3b24ndCBoYXZlIHNpZGUgZWZmZWN0c1xuICAgICAgLy8gd2UgYXJlIGdvbm5hIHVzZSBwYWlyIG9mIGRhdGFzZXRzIGFuZCBmaWVsZElkeCB0byB1cGRhdGUgdGhlIGZpbHRlclxuICAgICAgY29uc3QgZGF0YXNldElkID0gbmV3RmlsdGVyLmRhdGFJZFt2YWx1ZUluZGV4XTtcbiAgICAgIGNvbnN0IHtmaWx0ZXI6IHVwZGF0ZWRGaWx0ZXIsIGRhdGFzZXQ6IG5ld0RhdGFzZXR9ID0gYXBwbHlGaWx0ZXJGaWVsZE5hbWUoXG4gICAgICAgIG5ld0ZpbHRlcixcbiAgICAgICAgc3RhdGUuZGF0YXNldHNbZGF0YXNldElkXSxcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIHZhbHVlSW5kZXgsXG4gICAgICAgIHttZXJnZURvbWFpbjogZmFsc2V9XG4gICAgICApO1xuICAgICAgaWYgKCF1cGRhdGVkRmlsdGVyKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgICAgbmV3RmlsdGVyID0gdXBkYXRlZEZpbHRlcjtcblxuICAgICAgaWYgKG5ld0ZpbHRlci5ncHUpIHtcbiAgICAgICAgbmV3RmlsdGVyID0gc2V0RmlsdGVyR3B1TW9kZShuZXdGaWx0ZXIsIHN0YXRlLmZpbHRlcnMpO1xuICAgICAgICBuZXdGaWx0ZXIgPSBhc3NpZ25HcHVDaGFubmVsKG5ld0ZpbHRlciwgc3RhdGUuZmlsdGVycyk7XG4gICAgICB9XG5cbiAgICAgIG5ld1N0YXRlID0gc2V0KFsnZGF0YXNldHMnLCBkYXRhc2V0SWRdLCBuZXdEYXRhc2V0LCBzdGF0ZSk7XG5cbiAgICAgIC8vIG9ubHkgZmlsdGVyIHRoZSBjdXJyZW50IGRhdGFzZXRcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRklMVEVSX1VQREFURVJfUFJPUFMubGF5ZXJJZDpcbiAgICAgIC8vIFdlIG5lZWQgdG8gdXBkYXRlIG9ubHkgZGF0YXNldElkL3MgaWYgd2UgaGF2ZSBhZGRlZC9yZW1vdmVkIGxheWVyc1xuICAgICAgLy8gLSBjaGVjayBmb3IgbGF5ZXJJZCBjaGFuZ2VzIChYT1Igd29ya3MgYmVjYXVzZSBvZiBzdHJpbmcgdmFsdWVzKVxuICAgICAgLy8gaWYgbm8gZGlmZmVyZW5jZXMgYmV0d2VlbiBsYXllcklkcywgZG9uJ3QgZG8gYW55IGZpbHRlcmluZ1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY29uc3QgbGF5ZXJJZERpZmZlcmVuY2UgPSB4b3IobmV3RmlsdGVyLmxheWVySWQsIG9sZEZpbHRlci5sYXllcklkKTtcblxuICAgICAgY29uc3QgbGF5ZXJEYXRhSWRzID0gdW5pcShcbiAgICAgICAgbGF5ZXJJZERpZmZlcmVuY2VcbiAgICAgICAgICAubWFwKGxpZCA9PlxuICAgICAgICAgICAgZ2V0KFxuICAgICAgICAgICAgICBzdGF0ZS5sYXllcnMuZmluZChsID0+IGwuaWQgPT09IGxpZCksXG4gICAgICAgICAgICAgIFsnY29uZmlnJywgJ2RhdGFJZCddXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgIC5maWx0ZXIoZCA9PiBkKVxuICAgICAgKTtcblxuICAgICAgLy8gb25seSBmaWx0ZXIgZGF0YXNldHNJZHNcbiAgICAgIGRhdGFzZXRJZHMgPSBsYXllckRhdGFJZHM7XG5cbiAgICAgIC8vIFVwZGF0ZSBuZXdGaWx0ZXIgZGF0YUlkc1xuICAgICAgY29uc3QgbmV3RGF0YUlkcyA9IHVuaXEoXG4gICAgICAgIG5ld0ZpbHRlci5sYXllcklkXG4gICAgICAgICAgLm1hcChsaWQgPT5cbiAgICAgICAgICAgIGdldChcbiAgICAgICAgICAgICAgc3RhdGUubGF5ZXJzLmZpbmQobCA9PiBsLmlkID09PSBsaWQpLFxuICAgICAgICAgICAgICBbJ2NvbmZpZycsICdkYXRhSWQnXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgICAuZmlsdGVyKGQgPT4gZClcbiAgICAgICk7XG5cbiAgICAgIG5ld0ZpbHRlciA9IHtcbiAgICAgICAgLi4ubmV3RmlsdGVyLFxuICAgICAgICBkYXRhSWQ6IG5ld0RhdGFJZHNcbiAgICAgIH07XG5cbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGNvbnN0IGVubGFyZ2VkRmlsdGVyID0gc3RhdGUuZmlsdGVycy5maW5kKGYgPT4gZi52aWV3ID09PSBGSUxURVJfVklFV19UWVBFUy5lbmxhcmdlZCk7XG5cbiAgaWYgKGVubGFyZ2VkRmlsdGVyICYmIGVubGFyZ2VkRmlsdGVyLmlkICE9PSBuZXdGaWx0ZXIuaWQpIHtcbiAgICAvLyB0aGVyZSBzaG91bGQgYmUgb25seSBvbmUgZW5sYXJnZWQgZmlsdGVyXG4gICAgbmV3RmlsdGVyLnZpZXcgPSBGSUxURVJfVklFV19UWVBFUy5zaWRlO1xuICB9XG5cbiAgLy8gc2F2ZSBuZXcgZmlsdGVycyB0byBuZXdTdGF0ZVxuICBuZXdTdGF0ZSA9IHNldChbJ2ZpbHRlcnMnLCBpZHhdLCBuZXdGaWx0ZXIsIG5ld1N0YXRlKTtcblxuICAvLyBpZiB3ZSBhcmUgY3VycmVudGx5IHNldHRpbmcgYSBwcm9wIHRoYXQgb25seSByZXF1aXJlcyB0byBmaWx0ZXIgdGhlIGN1cnJlbnRcbiAgLy8gZGF0YXNldCB3ZSB3aWxsIHBhc3Mgb25seSB0aGUgY3VycmVudCBkYXRhc2V0IHRvIGFwcGx5RmlsdGVyc1RvRGF0YXNldHMgYW5kXG4gIC8vIHVwZGF0ZUFsbExheWVyRG9tYWluRGF0YSBvdGhlcndpc2Ugd2UgcGFzcyB0aGUgYWxsIGxpc3Qgb2YgZGF0YXNldHMgYXMgZGVmaW5lZCBpbiBkYXRhSWRcbiAgY29uc3QgZGF0YXNldElkc1RvRmlsdGVyID0gTElNSVRFRF9GSUxURVJfRUZGRUNUX1BST1BTW3Byb3BdXG4gICAgPyBbZGF0YXNldElkc1t2YWx1ZUluZGV4XV1cbiAgICA6IGRhdGFzZXRJZHM7XG5cbiAgLy8gZmlsdGVyIGRhdGFcbiAgY29uc3QgZmlsdGVyZWREYXRhc2V0cyA9IGFwcGx5RmlsdGVyc1RvRGF0YXNldHMoXG4gICAgZGF0YXNldElkc1RvRmlsdGVyLFxuICAgIG5ld1N0YXRlLmRhdGFzZXRzLFxuICAgIG5ld1N0YXRlLmZpbHRlcnMsXG4gICAgbmV3U3RhdGUubGF5ZXJzXG4gICk7XG5cbiAgbmV3U3RhdGUgPSBzZXQoWydkYXRhc2V0cyddLCBmaWx0ZXJlZERhdGFzZXRzLCBuZXdTdGF0ZSk7XG4gIC8vIGRhdGFJZCBpcyBhbiBhcnJheVxuICAvLyBwYXNzIG9ubHkgdGhlIGRhdGFzZXQgd2UgbmVlZCB0byB1cGRhdGVcbiAgbmV3U3RhdGUgPSB1cGRhdGVBbGxMYXllckRvbWFpbkRhdGEobmV3U3RhdGUsIGRhdGFzZXRJZHNUb0ZpbHRlciwgbmV3RmlsdGVyKTtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbi8qKlxuICogU2V0IHRoZSBwcm9wZXJ0eSBvZiBhIGZpbHRlciBwbG90XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2V0RmlsdGVyUGxvdFVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBWaXNTdGF0ZSxcbiAge2lkeCwgbmV3UHJvcCwgdmFsdWVJbmRleCA9IDB9OiBWaXNTdGF0ZUFjdGlvbnMuU2V0RmlsdGVyUGxvdFVwZGF0ZXJBY3Rpb25cbik6IFZpc1N0YXRlID0+IHtcbiAgbGV0IG5ld0ZpbHRlciA9IHsuLi5zdGF0ZS5maWx0ZXJzW2lkeF0sIC4uLm5ld1Byb3B9O1xuICBjb25zdCBwcm9wID0gT2JqZWN0LmtleXMobmV3UHJvcClbMF07XG4gIGlmIChwcm9wID09PSAneUF4aXMnKSB7XG4gICAgY29uc3QgcGxvdFR5cGUgPSBnZXREZWZhdWx0RmlsdGVyUGxvdFR5cGUobmV3RmlsdGVyKTtcbiAgICAvLyBUT0RPOiBwbG90IGlzIG5vdCBzdXBwb3J0ZWQgaW4gbXVsdGkgZGF0YXNldCBmaWx0ZXIgZm9yIG5vd1xuICAgIGlmIChwbG90VHlwZSkge1xuICAgICAgbmV3RmlsdGVyID0ge1xuICAgICAgICAuLi5uZXdGaWx0ZXIsXG4gICAgICAgIC4uLmdldEZpbHRlclBsb3Qoey4uLm5ld0ZpbHRlciwgcGxvdFR5cGV9LCBzdGF0ZS5kYXRhc2V0c1tuZXdGaWx0ZXIuZGF0YUlkW3ZhbHVlSW5kZXhdXSksXG4gICAgICAgIHBsb3RUeXBlXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgZmlsdGVyczogc3RhdGUuZmlsdGVycy5tYXAoKGYsIGkpID0+IChpID09PSBpZHggPyBuZXdGaWx0ZXIgOiBmKSlcbiAgfTtcbn07XG5cbi8qKlxuICogQWRkIGEgbmV3IGZpbHRlclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGFkZEZpbHRlclVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBWaXNTdGF0ZSxcbiAgYWN0aW9uOiBWaXNTdGF0ZUFjdGlvbnMuQWRkRmlsdGVyVXBkYXRlckFjdGlvblxuKTogVmlzU3RhdGUgPT5cbiAgIWFjdGlvbi5kYXRhSWRcbiAgICA/IHN0YXRlXG4gICAgOiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBmaWx0ZXJzOiBbLi4uc3RhdGUuZmlsdGVycywgZ2V0RGVmYXVsdEZpbHRlcihhY3Rpb24uZGF0YUlkKV1cbiAgICAgIH07XG5cbi8qKlxuICogU2V0IGxheWVyIGNvbG9yIHBhbGV0dGUgdWkgc3RhdGVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKi9cbmV4cG9ydCBjb25zdCBsYXllckNvbG9yVUlDaGFuZ2VVcGRhdGVyID0gKFxuICBzdGF0ZTogVmlzU3RhdGUsXG4gIHtvbGRMYXllciwgcHJvcCwgbmV3Q29uZmlnfTogVmlzU3RhdGVBY3Rpb25zLkxheWVyQ29sb3JVSUNoYW5nZVVwZGF0ZXJBY3Rpb25cbik6IFZpc1N0YXRlID0+IHtcbiAgY29uc3Qgb2xkVml4Q29uZmlnID0gb2xkTGF5ZXIuY29uZmlnLnZpc0NvbmZpZ1twcm9wXTtcbiAgY29uc3QgbmV3TGF5ZXIgPSBvbGRMYXllci51cGRhdGVMYXllckNvbG9yVUkocHJvcCwgbmV3Q29uZmlnKTtcbiAgY29uc3QgbmV3VmlzQ29uZmlnID0gbmV3TGF5ZXIuY29uZmlnLnZpc0NvbmZpZ1twcm9wXTtcbiAgaWYgKG9sZFZpeENvbmZpZyAhPT0gbmV3VmlzQ29uZmlnKSB7XG4gICAgcmV0dXJuIGxheWVyVmlzQ29uZmlnQ2hhbmdlVXBkYXRlcihzdGF0ZSwge1xuICAgICAgb2xkTGF5ZXIsXG4gICAgICBuZXdWaXNDb25maWc6IHtcbiAgICAgICAgW3Byb3BdOiBuZXdWaXNDb25maWdcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGxheWVyczogc3RhdGUubGF5ZXJzLm1hcChsID0+IChsLmlkID09PSBvbGRMYXllci5pZCA/IG5ld0xheWVyIDogbCkpXG4gIH07XG59O1xuXG4vKipcbiAqIFN0YXJ0IGFuZCBlbmQgZmlsdGVyIGFuaW1hdGlvblxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZUZpbHRlckFuaW1hdGlvblVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBWaXNTdGF0ZSxcbiAgYWN0aW9uOiBWaXNTdGF0ZUFjdGlvbnMuVG9nZ2xlRmlsdGVyQW5pbWF0aW9uVXBkYXRlckFjdGlvblxuKTogVmlzU3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGZpbHRlcnM6IHN0YXRlLmZpbHRlcnMubWFwKChmLCBpKSA9PiAoaSA9PT0gYWN0aW9uLmlkeCA/IHsuLi5mLCBpc0FuaW1hdGluZzogIWYuaXNBbmltYXRpbmd9IDogZikpXG59KTtcblxuLyoqXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlTGF5ZXJBbmltYXRpb25VcGRhdGVyID0gKFxuICBzdGF0ZTogVmlzU3RhdGUsXG4gIGFjdGlvbjogVmlzU3RhdGVBY3Rpb25zLlRvZ2dsZUxheWVyQW5pbWF0aW9uVXBkYXRlckFjdGlvblxuKTogVmlzU3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGFuaW1hdGlvbkNvbmZpZzoge1xuICAgIC4uLnN0YXRlLmFuaW1hdGlvbkNvbmZpZyxcbiAgICBpc0FuaW1hdGluZzogIXN0YXRlLmFuaW1hdGlvbkNvbmZpZy5pc0FuaW1hdGluZ1xuICB9XG59KTtcblxuLyoqXG4gKiBIaWRlIGFuZCBzaG93IGxheWVyIGFuaW1hdGlvbiBjb250cm9sXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlTGF5ZXJBbmltYXRpb25Db250cm9sVXBkYXRlciA9IChcbiAgc3RhdGU6IFZpc1N0YXRlLFxuICBhY3Rpb246IFZpc1N0YXRlQWN0aW9ucy5Ub2dnbGVMYXllckFuaW1hdGlvbkNvbnRyb2xVcGRhdGVyQWN0aW9uXG4pOiBWaXNTdGF0ZSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgYW5pbWF0aW9uQ29uZmlnOiB7XG4gICAgLi4uc3RhdGUuYW5pbWF0aW9uQ29uZmlnLFxuICAgIGhpZGVDb250cm9sOiAhc3RhdGUuYW5pbWF0aW9uQ29uZmlnLmhpZGVDb250cm9sXG4gIH1cbn0pO1xuXG4vKipcbiAqIENoYW5nZSBmaWx0ZXIgYW5pbWF0aW9uIHNwZWVkXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdXBkYXRlRmlsdGVyQW5pbWF0aW9uU3BlZWRVcGRhdGVyID0gKFxuICBzdGF0ZTogVmlzU3RhdGUsXG4gIGFjdGlvbjogVmlzU3RhdGVBY3Rpb25zLlVwZGF0ZUZpbHRlckFuaW1hdGlvblNwZWVkVXBkYXRlckFjdGlvblxuKTogVmlzU3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGZpbHRlcnM6IHN0YXRlLmZpbHRlcnMubWFwKChmLCBpKSA9PiAoaSA9PT0gYWN0aW9uLmlkeCA/IHsuLi5mLCBzcGVlZDogYWN0aW9uLnNwZWVkfSA6IGYpKVxufSk7XG5cbi8qKlxuICogUmVzZXQgYW5pbWF0aW9uIGNvbmZpZyBjdXJyZW50IHRpbWUgdG8gYSBzcGVjaWZpZWQgdmFsdWVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcHVibGljXG4gKlxuICovXG5leHBvcnQgY29uc3Qgc2V0TGF5ZXJBbmltYXRpb25UaW1lVXBkYXRlciA9IChcbiAgc3RhdGU6IFZpc1N0YXRlLFxuICB7dmFsdWV9OiBWaXNTdGF0ZUFjdGlvbnMuU2V0TGF5ZXJBbmltYXRpb25UaW1lVXBkYXRlckFjdGlvblxuKTogVmlzU3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGFuaW1hdGlvbkNvbmZpZzoge1xuICAgIC4uLnN0YXRlLmFuaW1hdGlvbkNvbmZpZyxcbiAgICBjdXJyZW50VGltZTogdmFsdWVcbiAgfVxufSk7XG5cbi8qKlxuICogVXBkYXRlIGFuaW1hdGlvbiBzcGVlZCB3aXRoIHRoZSB2ZXJ0aWNhbCBzcGVlZCBzbGlkZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcHVibGljXG4gKlxuICovXG5leHBvcnQgY29uc3QgdXBkYXRlTGF5ZXJBbmltYXRpb25TcGVlZFVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBWaXNTdGF0ZSxcbiAge3NwZWVkfTogVmlzU3RhdGVBY3Rpb25zLlVwZGF0ZUxheWVyQW5pbWF0aW9uU3BlZWRVcGRhdGVyQWN0aW9uXG4pOiBWaXNTdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgYW5pbWF0aW9uQ29uZmlnOiB7XG4gICAgICAuLi5zdGF0ZS5hbmltYXRpb25Db25maWcsXG4gICAgICBzcGVlZFxuICAgIH1cbiAgfTtcbn07XG5cbi8qKlxuICogU2hvdyBsYXJnZXIgdGltZSBmaWx0ZXIgYXQgYm90dG9tIGZvciB0aW1lIHBsYXliYWNrIChhcHBseSB0byB0aW1lIGZpbHRlciBvbmx5KVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEZpbHRlclZpZXdVcGRhdGVyID0gKFxuICBzdGF0ZTogVmlzU3RhdGUsXG4gIGFjdGlvbjogVmlzU3RhdGVBY3Rpb25zLlNldEZpbHRlclZpZXdVcGRhdGVyQWN0aW9uXG4pID0+IHtcbiAgY29uc3Qge3ZpZXcsIGlkeH0gPSBhY3Rpb247XG4gIGNvbnN0IHNob3VsZFJlc2V0T3RoZXJGaWx0ZXJzVmlldyA9IHZpZXcgPT09IEZJTFRFUl9WSUVXX1RZUEVTLmVubGFyZ2VkO1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGZpbHRlcnM6IHN0YXRlLmZpbHRlcnMubWFwKChmLCBpKSA9PlxuICAgICAgaSA9PT0gaWR4XG4gICAgICAgID8ge1xuICAgICAgICAgICAgLi4uZixcbiAgICAgICAgICAgIHZpZXdcbiAgICAgICAgICB9XG4gICAgICAgIDogc2hvdWxkUmVzZXRPdGhlckZpbHRlcnNWaWV3XG4gICAgICAgID8ge1xuICAgICAgICAgICAgLi4uZixcbiAgICAgICAgICAgIHZpZXc6IEZJTFRFUl9WSUVXX1RZUEVTLnNpZGVcbiAgICAgICAgICB9XG4gICAgICAgIDogZlxuICAgIClcbiAgfTtcbn07XG5cbi8qKlxuICogVG9nZ2xlcyBmaWx0ZXIgZmVhdHVyZSB2aXNpYmlsaXR5XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlRmlsdGVyRmVhdHVyZVVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBWaXNTdGF0ZSxcbiAgYWN0aW9uOiBWaXNTdGF0ZUFjdGlvbnMuVG9nZ2xlRmlsdGVyRmVhdHVyZVVwZGF0ZXJBY3Rpb25cbik6IFZpc1N0YXRlID0+IHtcbiAgY29uc3QgZmlsdGVyID0gc3RhdGUuZmlsdGVyc1thY3Rpb24uaWR4XTtcbiAgY29uc3QgaXNWaXNpYmxlID0gZ2V0KGZpbHRlciwgWyd2YWx1ZScsICdwcm9wZXJ0aWVzJywgJ2lzVmlzaWJsZSddKTtcblxuICBsZXQgbmV3U3RhdGUgPSBzZXRGaWx0ZXJVcGRhdGVyKHN0YXRlLCB7XG4gICAgaWR4OiBhY3Rpb24uaWR4LFxuICAgIHByb3A6ICdlbmFibGVkJyxcbiAgICB2YWx1ZTogIWlzVmlzaWJsZVxuICB9KTtcblxuICBuZXdTdGF0ZSA9IHNldEZpbHRlclVwZGF0ZXIobmV3U3RhdGUsIHtcbiAgICBpZHg6IGFjdGlvbi5pZHgsXG4gICAgcHJvcDogJ3ZhbHVlJyxcbiAgICB2YWx1ZTogZmVhdHVyZVRvRmlsdGVyVmFsdWUoZmlsdGVyLnZhbHVlLCBmaWx0ZXIuaWQsIHtcbiAgICAgIGlzVmlzaWJsZTogIWlzVmlzaWJsZVxuICAgIH0pXG4gIH0pO1xuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgZmlsdGVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgcmVtb3ZlRmlsdGVyVXBkYXRlciA9IChcbiAgc3RhdGU6IFZpc1N0YXRlLFxuICBhY3Rpb246IFZpc1N0YXRlQWN0aW9ucy5SZW1vdmVGaWx0ZXJVcGRhdGVyQWN0aW9uXG4pOiBWaXNTdGF0ZSA9PiB7XG4gIGNvbnN0IHtpZHh9ID0gYWN0aW9uO1xuICBjb25zdCB7ZGF0YUlkLCBpZH0gPSBzdGF0ZS5maWx0ZXJzW2lkeF07XG5cbiAgY29uc3QgbmV3RmlsdGVycyA9IFtcbiAgICAuLi5zdGF0ZS5maWx0ZXJzLnNsaWNlKDAsIGlkeCksXG4gICAgLi4uc3RhdGUuZmlsdGVycy5zbGljZShpZHggKyAxLCBzdGF0ZS5maWx0ZXJzLmxlbmd0aClcbiAgXTtcblxuICBjb25zdCBmaWx0ZXJlZERhdGFzZXRzID0gYXBwbHlGaWx0ZXJzVG9EYXRhc2V0cyhkYXRhSWQsIHN0YXRlLmRhdGFzZXRzLCBuZXdGaWx0ZXJzLCBzdGF0ZS5sYXllcnMpO1xuICBjb25zdCBuZXdFZGl0b3IgPVxuICAgIGdldEZpbHRlcklkSW5GZWF0dXJlKHN0YXRlLmVkaXRvci5zZWxlY3RlZEZlYXR1cmUpID09PSBpZFxuICAgICAgPyB7XG4gICAgICAgICAgLi4uc3RhdGUuZWRpdG9yLFxuICAgICAgICAgIHNlbGVjdGVkRmVhdHVyZTogbnVsbFxuICAgICAgICB9XG4gICAgICA6IHN0YXRlLmVkaXRvcjtcblxuICBsZXQgbmV3U3RhdGUgPSBzZXQoWydmaWx0ZXJzJ10sIG5ld0ZpbHRlcnMsIHN0YXRlKTtcbiAgbmV3U3RhdGUgPSBzZXQoWydkYXRhc2V0cyddLCBmaWx0ZXJlZERhdGFzZXRzLCBuZXdTdGF0ZSk7XG4gIG5ld1N0YXRlID0gc2V0KFsnZWRpdG9yJ10sIG5ld0VkaXRvciwgbmV3U3RhdGUpO1xuXG4gIHJldHVybiB1cGRhdGVBbGxMYXllckRvbWFpbkRhdGEobmV3U3RhdGUsIGRhdGFJZCwgdW5kZWZpbmVkKTtcbn07XG5cbi8qKlxuICogQWRkIGEgbmV3IGxheWVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgYWRkTGF5ZXJVcGRhdGVyID0gKFxuICBzdGF0ZTogVmlzU3RhdGUsXG4gIGFjdGlvbjogVmlzU3RhdGVBY3Rpb25zLkFkZExheWVyVXBkYXRlckFjdGlvblxuKTogVmlzU3RhdGUgPT4ge1xuICBsZXQgbmV3TGF5ZXI7XG4gIGxldCBuZXdMYXllckRhdGE7XG4gIGlmIChhY3Rpb24uY29uZmlnKSB7XG4gICAgbmV3TGF5ZXIgPSBjcmVhdGVMYXllckZyb21Db25maWcoc3RhdGUsIGFjdGlvbi5jb25maWcpO1xuICAgIGlmICghbmV3TGF5ZXIpIHtcbiAgICAgIENvbnNvbGUud2FybihcbiAgICAgICAgJ0ZhaWxlZCB0byBjcmVhdGUgbGF5ZXIgZnJvbSBjb25maWcsIGl0IHVzdWFsbHkgbWVhbnMgdGhlIGNvbmZpZyBpcyBub3QgYmUgaW4gY29ycmVjdCBmb3JtYXQnLFxuICAgICAgICBhY3Rpb24uY29uZmlnXG4gICAgICApO1xuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGNhbGN1bGF0ZUxheWVyRGF0YShuZXdMYXllciwgc3RhdGUpO1xuICAgIG5ld0xheWVyID0gcmVzdWx0LmxheWVyO1xuICAgIG5ld0xheWVyRGF0YSA9IHJlc3VsdC5sYXllckRhdGE7XG4gIH0gZWxzZSB7XG4gICAgLy8gY3JlYXRlIGFuIGVtcHR5IGxheWVyIHdpdGggYSBzcGVjaWZpYyBkYXRhc2V0IG9yIGEgZGVmYXVsdCBvbmVcbiAgICBjb25zdCBkZWZhdWx0RGF0YXNldCA9IGFjdGlvbi5kYXRhc2V0SWQgPz8gT2JqZWN0LmtleXMoc3RhdGUuZGF0YXNldHMpWzBdO1xuICAgIG5ld0xheWVyID0gbmV3IExheWVyKHtcbiAgICAgIGlzVmlzaWJsZTogdHJ1ZSxcbiAgICAgIGlzQ29uZmlnQWN0aXZlOiB0cnVlLFxuICAgICAgZGF0YUlkOiBkZWZhdWx0RGF0YXNldFxuICAgIH0pO1xuICAgIG5ld0xheWVyRGF0YSA9IHt9O1xuICB9XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgbGF5ZXJzOiBbLi4uc3RhdGUubGF5ZXJzLCBuZXdMYXllcl0sXG4gICAgbGF5ZXJEYXRhOiBbLi4uc3RhdGUubGF5ZXJEYXRhLCBuZXdMYXllckRhdGFdLFxuICAgIC8vIGFkZCBuZXcgbGF5ZXIgYXQgdGhlIHRvcFxuICAgIGxheWVyT3JkZXI6IFtzdGF0ZS5sYXllck9yZGVyLmxlbmd0aCwgLi4uc3RhdGUubGF5ZXJPcmRlcl0sXG4gICAgc3BsaXRNYXBzOiBhZGROZXdMYXllcnNUb1NwbGl0TWFwKHN0YXRlLnNwbGl0TWFwcywgbmV3TGF5ZXIpXG4gIH07XG59O1xuXG4vKipcbiAqIHJlbW92ZSBsYXllclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUxheWVyVXBkYXRlcjxUIGV4dGVuZHMgVmlzU3RhdGU+KFxuICBzdGF0ZTogVCxcbiAge2lkfTogVmlzU3RhdGVBY3Rpb25zLlJlbW92ZUxheWVyVXBkYXRlckFjdGlvblxuKTogVCB7XG4gIGNvbnN0IGlkeCA9IE51bWJlci5pc0Zpbml0ZShpZClcbiAgICA/IC8vIHN1cHBvcnQgb2xkZXIgQVBJLCByZW1vdmUgbGF5ZXIgYnkgaWR4XG4gICAgICBOdW1iZXIoaWQpXG4gICAgOiBzdGF0ZS5sYXllcnMuZmluZEluZGV4KGwgPT4gbC5pZCA9PT0gaWQpO1xuICBpZiAoaWR4IDwgMCB8fCBpZHggPj0gc3RhdGUubGF5ZXJzLmxlbmd0aCkge1xuICAgIC8vIGludmFsaWQgaW5kZXhcbiAgICBDb25zb2xlLndhcm4oYGNhbiBub3QgcmVtb3ZlIGxheWVyIHdpdGggaW52YWxpZCBpZHxpZHggJHtpZH1gKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgY29uc3Qge2xheWVycywgbGF5ZXJEYXRhLCBjbGlja2VkLCBob3ZlckluZm99ID0gc3RhdGU7XG4gIGNvbnN0IGxheWVyVG9SZW1vdmUgPSBzdGF0ZS5sYXllcnNbaWR4XTtcbiAgY29uc3QgbmV3TWFwcyA9IHJlbW92ZUxheWVyRnJvbVNwbGl0TWFwcyhzdGF0ZS5zcGxpdE1hcHMsIGxheWVyVG9SZW1vdmUpO1xuXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGxheWVyczogWy4uLmxheWVycy5zbGljZSgwLCBpZHgpLCAuLi5sYXllcnMuc2xpY2UoaWR4ICsgMSwgbGF5ZXJzLmxlbmd0aCldLFxuICAgIGxheWVyRGF0YTogWy4uLmxheWVyRGF0YS5zbGljZSgwLCBpZHgpLCAuLi5sYXllckRhdGEuc2xpY2UoaWR4ICsgMSwgbGF5ZXJEYXRhLmxlbmd0aCldLFxuICAgIGxheWVyT3JkZXI6IHN0YXRlLmxheWVyT3JkZXIuZmlsdGVyKGkgPT4gaSAhPT0gaWR4KS5tYXAocGlkID0+IChwaWQgPiBpZHggPyBwaWQgLSAxIDogcGlkKSksXG4gICAgY2xpY2tlZDogbGF5ZXJUb1JlbW92ZS5pc0xheWVySG92ZXJlZChjbGlja2VkKSA/IHVuZGVmaW5lZCA6IGNsaWNrZWQsXG4gICAgaG92ZXJJbmZvOiBsYXllclRvUmVtb3ZlLmlzTGF5ZXJIb3ZlcmVkKGhvdmVySW5mbykgPyB1bmRlZmluZWQgOiBob3ZlckluZm8sXG4gICAgc3BsaXRNYXBzOiBuZXdNYXBzXG4gICAgLy8gVE9ETzogdXBkYXRlIGZpbHRlcnMsIGNyZWF0ZSBoZWxwZXIgdG8gcmVtb3ZlIGxheWVyIGZvcm0gZmlsdGVyIChyZW1vdmUgbGF5ZXJpZCBhbmQgZGF0YWlkKSBpZiBtYXBwZWRcbiAgfTtcblxuICByZXR1cm4gdXBkYXRlQW5pbWF0aW9uRG9tYWluKG5ld1N0YXRlKTtcbn1cblxuLyoqXG4gKiBkdXBsaWNhdGUgbGF5ZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBkdXBsaWNhdGVMYXllclVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBWaXNTdGF0ZSxcbiAge2lkeH06IFZpc1N0YXRlQWN0aW9ucy5EdXBsaWNhdGVMYXllclVwZGF0ZXJBY3Rpb25cbik6IFZpc1N0YXRlID0+IHtcbiAgY29uc3Qge2xheWVyc30gPSBzdGF0ZTtcbiAgY29uc3Qgb3JpZ2luYWwgPSBzdGF0ZS5sYXllcnNbaWR4XTtcbiAgY29uc3Qgb3JpZ2luYWxMYXllck9yZGVySWR4ID0gc3RhdGUubGF5ZXJPcmRlci5maW5kSW5kZXgoaSA9PiBpID09PSBpZHgpO1xuXG4gIGlmICghb3JpZ2luYWwpIHtcbiAgICBDb25zb2xlLndhcm4oYGxheWVyLiR7aWR4fSBpcyB1bmRlZmluZWRgKTtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgbGV0IG5ld0xhYmVsID0gYENvcHkgb2YgJHtvcmlnaW5hbC5jb25maWcubGFiZWx9YDtcbiAgbGV0IHBvc3RmaXggPSAwO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gIHdoaWxlIChsYXllcnMuZmluZChsID0+IGwuY29uZmlnLmxhYmVsID09PSBuZXdMYWJlbCkpIHtcbiAgICBuZXdMYWJlbCA9IGBDb3B5IG9mICR7b3JpZ2luYWwuY29uZmlnLmxhYmVsfSAkeysrcG9zdGZpeH1gO1xuICB9XG5cbiAgLy8gY29sbGVjdCBsYXllciBjb25maWcgZnJvbSBvcmlnaW5hbFxuICBjb25zdCBsb2FkZWRMYXllciA9IHNlcmlhbGl6ZUxheWVyKG9yaWdpbmFsLCBzdGF0ZS5zY2hlbWEpO1xuXG4gIC8vIGFzc2lnbiBuZXcgaWQgYW5kIGxhYmVsIHRvIGNvcGllZCBsYXllclxuICBpZiAoIWxvYWRlZExheWVyPy5jb25maWcpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgbG9hZGVkTGF5ZXIuY29uZmlnLmxhYmVsID0gbmV3TGFiZWw7XG4gIGxvYWRlZExheWVyLmlkID0gZ2VuZXJhdGVIYXNoSWQoTEFZRVJfSURfTEVOR1RIKTtcblxuICAvLyBhZGQgbGF5ZXIgdG8gc3RhdGVcbiAgbGV0IG5leHRTdGF0ZSA9IGFkZExheWVyVXBkYXRlcihzdGF0ZSwge2NvbmZpZzogbG9hZGVkTGF5ZXJ9KTtcbiAgLy8gbGF5ZXJzOiBbJ2EnLCAnYicsICdjJywgJ2QnXVxuICAvLyBvcmRlcjogWzMsIDAsIDEsIDJdXG4gIC8vIFswLCAzLCAxLCAyXVxuICAvLyBuZXcgYWRkZWQgbGF5ZXIgYXJlIGF0IHRoZSB0b3AsIG1vdmUgaXQgdG8gYmUgb24gdG9wIG9mIG9yaWdpbmFsIGxheWVyXG4gIGNvbnN0IG5ld0xheWVyT3JkZXJJZHggPSBuZXh0U3RhdGUubGF5ZXJzLmxlbmd0aCAtIDE7XG4gIGNvbnN0IG5ld0xheWVyT3JkZXIgPSBhcnJheUluc2VydChcbiAgICBuZXh0U3RhdGUubGF5ZXJPcmRlci5zbGljZSgxLCBuZXh0U3RhdGUubGF5ZXJPcmRlci5sZW5ndGgpLFxuICAgIG9yaWdpbmFsTGF5ZXJPcmRlcklkeCxcbiAgICBuZXdMYXllck9yZGVySWR4XG4gICk7XG5cbiAgbmV4dFN0YXRlID0ge1xuICAgIC4uLm5leHRTdGF0ZSxcbiAgICBsYXllck9yZGVyOiBuZXdMYXllck9yZGVyXG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZUFuaW1hdGlvbkRvbWFpbihuZXh0U3RhdGUpO1xufTtcblxuLyoqXG4gKiBSZW9yZGVyIGxheWVyXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgcmVvcmRlckxheWVyVXBkYXRlciA9IChcbiAgc3RhdGU6IFZpc1N0YXRlLFxuICB7b3JkZXJ9OiBWaXNTdGF0ZUFjdGlvbnMuUmVvcmRlckxheWVyVXBkYXRlckFjdGlvblxuKTogVmlzU3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGxheWVyT3JkZXI6IG9yZGVyXG59KTtcblxuLyoqXG4gKiBSZW1vdmUgYSBkYXRhc2V0IGFuZCBhbGwgbGF5ZXJzLCBmaWx0ZXJzLCB0b29sdGlwIGNvbmZpZ3MgdGhhdCBiYXNlZCBvbiBpdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZURhdGFzZXRVcGRhdGVyPFQgZXh0ZW5kcyBWaXNTdGF0ZT4oXG4gIHN0YXRlOiBULFxuICBhY3Rpb246IFZpc1N0YXRlQWN0aW9ucy5SZW1vdmVEYXRhc2V0VXBkYXRlckFjdGlvblxuKTogVCB7XG4gIC8vIGV4dHJhY3QgZGF0YXNldCBrZXlcbiAgY29uc3Qge2RhdGFJZDogZGF0YXNldEtleX0gPSBhY3Rpb247XG4gIGNvbnN0IHtkYXRhc2V0c30gPSBzdGF0ZTtcblxuICAvLyBjaGVjayBpZiBkYXRhc2V0IGlzIHByZXNlbnRcbiAgaWYgKCFkYXRhc2V0c1tkYXRhc2V0S2V5XSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gIGNvbnN0IHtcbiAgICBsYXllcnMsXG4gICAgZGF0YXNldHM6IHtbZGF0YXNldEtleV06IGRhdGFzZXQsIC4uLm5ld0RhdGFzZXRzfVxuICB9ID0gc3RhdGU7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuICBjb25zdCBsYXllcnNUb1JlbW92ZSA9IGxheWVycy5maWx0ZXIobCA9PiBsLmNvbmZpZy5kYXRhSWQgPT09IGRhdGFzZXRLZXkpLm1hcChsID0+IGwuaWQpO1xuXG4gIC8vIHJlbW92ZSBsYXllcnMgYW5kIGRhdGFzZXRzXG4gIGxldCBuZXdTdGF0ZSA9IGxheWVyc1RvUmVtb3ZlLnJlZHVjZSgoYWNjdSwgaWQpID0+IHJlbW92ZUxheWVyVXBkYXRlcihhY2N1LCB7aWR9KSwge1xuICAgIC4uLnN0YXRlLFxuICAgIGRhdGFzZXRzOiBuZXdEYXRhc2V0c1xuICB9KTtcblxuICAvLyByZW1vdmUgZmlsdGVyc1xuICBjb25zdCBmaWx0ZXJzID0gbmV3U3RhdGUuZmlsdGVycy5maWx0ZXIoZmlsdGVyID0+ICFmaWx0ZXIuZGF0YUlkLmluY2x1ZGVzKGRhdGFzZXRLZXkpKTtcblxuICBuZXdTdGF0ZSA9IHsuLi5uZXdTdGF0ZSwgZmlsdGVyc307XG5cbiAgcmV0dXJuIHJlbW92ZURhdGFzZXRGcm9tSW50ZXJhY3Rpb25Db25maWcobmV3U3RhdGUsIHtkYXRhSWQ6IGRhdGFzZXRLZXl9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRGF0YXNldEZyb21JbnRlcmFjdGlvbkNvbmZpZyhzdGF0ZSwge2RhdGFJZH0pIHtcbiAgbGV0IHtpbnRlcmFjdGlvbkNvbmZpZ30gPSBzdGF0ZTtcbiAgY29uc3Qge3Rvb2x0aXB9ID0gaW50ZXJhY3Rpb25Db25maWc7XG4gIGlmICh0b29sdGlwKSB7XG4gICAgY29uc3Qge2NvbmZpZ30gPSB0b29sdGlwO1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgY29uc3Qge1tkYXRhSWRdOiBmaWVsZHMsIC4uLmZpZWxkc1RvU2hvd30gPSBjb25maWcuZmllbGRzVG9TaG93O1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICBpbnRlcmFjdGlvbkNvbmZpZyA9IHtcbiAgICAgIC4uLmludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgdG9vbHRpcDogey4uLnRvb2x0aXAsIGNvbmZpZzogey4uLmNvbmZpZywgZmllbGRzVG9TaG93fX1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHsuLi5zdGF0ZSwgaW50ZXJhY3Rpb25Db25maWd9O1xufVxuLyoqXG4gKiB1cGRhdGUgbGF5ZXIgYmxlbmRpbmcgbW9kZVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZUxheWVyQmxlbmRpbmdVcGRhdGVyID0gKFxuICBzdGF0ZTogVmlzU3RhdGUsXG4gIGFjdGlvbjogVmlzU3RhdGVBY3Rpb25zLlVwZGF0ZUxheWVyQmxlbmRpbmdVcGRhdGVyQWN0aW9uXG4pOiBWaXNTdGF0ZSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgbGF5ZXJCbGVuZGluZzogYWN0aW9uLm1vZGVcbn0pO1xuXG4vKipcbiAqIHVwZGF0ZSBvdmVybGF5IGJsZW5kaW5nIG1vZGVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB1cGRhdGVPdmVybGF5QmxlbmRpbmdVcGRhdGVyID0gKFxuICBzdGF0ZTogVmlzU3RhdGUsXG4gIGFjdGlvbjogVmlzU3RhdGVBY3Rpb25zLlVwZGF0ZU92ZXJsYXlCbGVuZGluZ1VwZGF0ZXJBY3Rpb25cbik6IFZpc1N0YXRlID0+ICh7XG4gIC4uLnN0YXRlLFxuICBvdmVybGF5QmxlbmRpbmc6IGFjdGlvbi5tb2RlXG59KTtcblxuLyoqXG4gKiBEaXNwbGF5IGRhdGFzZXQgdGFibGUgaW4gYSBtb2RhbFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNob3dEYXRhc2V0VGFibGVVcGRhdGVyID0gKFxuICBzdGF0ZTogVmlzU3RhdGUsXG4gIGFjdGlvbjogVmlzU3RhdGVBY3Rpb25zLlNob3dEYXRhc2V0VGFibGVVcGRhdGVyQWN0aW9uXG4pOiBWaXNTdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgZWRpdGluZ0RhdGFzZXQ6IGFjdGlvbi5kYXRhSWRcbiAgfTtcbn07XG5cbi8qKlxuICogQWRkIGN1c3RvbSBjb2xvciBmb3IgZGF0YXNldHMgYW5kIGxheWVyc1xuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVRhYmxlQ29sb3JVcGRhdGVyID0gKFxuICBzdGF0ZTogVmlzU3RhdGUsXG4gIGFjdGlvbjogVmlzU3RhdGVBY3Rpb25zLlVwZGF0ZURhdGFzZXRDb2xvclVwZGF0ZXJcbik6IFZpc1N0YXRlID0+IHtcbiAgcmV0dXJuIHVwZGF0ZURhdGFzZXRQcm9wc1VwZGF0ZXIoc3RhdGUsIHtkYXRhSWQ6IGFjdGlvbi5kYXRhSWQsIHByb3BzOiB7Y29sb3I6IGFjdGlvbi5uZXdDb2xvcn19KTtcbn07XG5cbi8qKlxuICogcmVzZXQgdmlzU3RhdGUgdG8gaW5pdGlhbCBTdGF0ZVxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlc2V0TWFwQ29uZmlnVXBkYXRlciA9IChzdGF0ZTogVmlzU3RhdGUpOiBWaXNTdGF0ZSA9PiAoe1xuICAuLi5JTklUSUFMX1ZJU19TVEFURSxcbiAgLi4uc3RhdGUuaW5pdGlhbFN0YXRlLFxuICBpbml0aWFsU3RhdGU6IHN0YXRlLmluaXRpYWxTdGF0ZVxufSk7XG5cbi8qKlxuICogUHJvcGFnYXRlIGB2aXNTdGF0ZWAgcmVkdWNlciB3aXRoIGEgbmV3IGNvbmZpZ3VyYXRpb24uIEN1cnJlbnQgY29uZmlnIHdpbGwgYmUgb3ZlcnJpZGUuXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgcmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIgPSAoXG4gIHN0YXRlOiBWaXNTdGF0ZSxcbiAge1xuICAgIHBheWxvYWQ6IHtjb25maWcgPSB7fSwgb3B0aW9ucyA9IHt9fVxuICB9OiB7XG4gICAgdHlwZT86IHR5cGVvZiBBY3Rpb25UeXBlcy5SRUNFSVZFX01BUF9DT05GSUc7XG4gICAgcGF5bG9hZDogUmVjZWl2ZU1hcENvbmZpZ1BheWxvYWQ7XG4gIH1cbik6IFZpc1N0YXRlID0+IHtcbiAgaWYgKCFjb25maWcudmlzU3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBjb25zdCB7a2VlcEV4aXN0aW5nQ29uZmlnfSA9IG9wdGlvbnM7XG5cbiAgLy8gcmVzZXQgY29uZmlnIGlmIGtlZXBFeGlzdGluZ0NvbmZpZyBpcyBmYWxzeVxuICBsZXQgbWVyZ2VkU3RhdGUgPSAha2VlcEV4aXN0aW5nQ29uZmlnID8gcmVzZXRNYXBDb25maWdVcGRhdGVyKHN0YXRlKSA6IHN0YXRlO1xuICBmb3IgKGNvbnN0IG1lcmdlciBvZiBzdGF0ZS5tZXJnZXJzKSB7XG4gICAgaWYgKGlzVmFsaWRNZXJnZXIobWVyZ2VyKSAmJiBoYXNQcm9wc1RvTWVyZ2UoY29uZmlnLnZpc1N0YXRlLCBtZXJnZXIucHJvcCkpIHtcbiAgICAgIG1lcmdlZFN0YXRlID0gbWVyZ2VyLm1lcmdlKFxuICAgICAgICBtZXJnZWRTdGF0ZSxcbiAgICAgICAgZ2V0UHJvcFZhbHVlVG9NZXJnZXIoY29uZmlnLnZpc1N0YXRlLCBtZXJnZXIucHJvcCwgbWVyZ2VyLnRvTWVyZ2VQcm9wKSxcbiAgICAgICAgLy8gZnJvbUNvbmZpZ1xuICAgICAgICB0cnVlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtZXJnZWRTdGF0ZTtcbn07XG5cbi8qKlxuICogVHJpZ2dlciBsYXllciBob3ZlciBldmVudCB3aXRoIGhvdmVyZWQgb2JqZWN0XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbGF5ZXJIb3ZlclVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBWaXNTdGF0ZSxcbiAgYWN0aW9uOiBWaXNTdGF0ZUFjdGlvbnMuT25MYXllckhvdmVyVXBkYXRlckFjdGlvblxuKTogVmlzU3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGhvdmVySW5mbzoge1xuICAgIC8vIGRlY2suZ2wgaW5mbyBpcyBtdXRhYmxlXG4gICAgLi4uYWN0aW9uLmluZm9cbiAgfVxufSk7XG5cbi8qIGVzbGludC1lbmFibGUgbWF4LXN0YXRlbWVudHMgKi9cblxuLyoqXG4gKiBVcGRhdGUgYGludGVyYWN0aW9uQ29uZmlnYFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVyYWN0aW9uQ29uZmlnQ2hhbmdlVXBkYXRlcihcbiAgc3RhdGU6IFZpc1N0YXRlLFxuICBhY3Rpb246IFZpc1N0YXRlQWN0aW9ucy5JbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZVVwZGF0ZXJBY3Rpb25cbik6IFZpc1N0YXRlIHtcbiAgY29uc3Qge2NvbmZpZ30gPSBhY3Rpb247XG5cbiAgY29uc3QgaW50ZXJhY3Rpb25Db25maWcgPSB7XG4gICAgLi4uc3RhdGUuaW50ZXJhY3Rpb25Db25maWcsXG4gICAgLi4ue1tjb25maWcuaWRdOiBjb25maWd9XG4gIH07XG5cbiAgLy8gRG9uJ3QgZW5hYmxlIHRvb2x0aXAgYW5kIGJydXNoIGF0IHRoZSBzYW1lIHRpbWVcbiAgLy8gYnV0IGNvb3JkaW5hdGVzIGNhbiBiZSBzaG93biBhdCBhbGwgdGltZVxuICBjb25zdCBjb250cmFkaWN0ID0gWydicnVzaCcsICd0b29sdGlwJ107XG5cbiAgaWYgKFxuICAgIGNvbnRyYWRpY3QuaW5jbHVkZXMoY29uZmlnLmlkKSAmJlxuICAgIGNvbmZpZy5lbmFibGVkICYmXG4gICAgIXN0YXRlLmludGVyYWN0aW9uQ29uZmlnW2NvbmZpZy5pZF0uZW5hYmxlZFxuICApIHtcbiAgICAvLyBvbmx5IGVuYWJsZSBvbmUgaW50ZXJhY3Rpb24gYXQgYSB0aW1lXG4gICAgY29udHJhZGljdC5mb3JFYWNoKGsgPT4ge1xuICAgICAgaWYgKGsgIT09IGNvbmZpZy5pZCkge1xuICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZ1trXSA9IHsuLi5pbnRlcmFjdGlvbkNvbmZpZ1trXSwgZW5hYmxlZDogZmFsc2V9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgaW50ZXJhY3Rpb25Db25maWdcbiAgfTtcblxuICBpZiAoY29uZmlnLmlkID09PSAnZ2VvY29kZXInICYmICFjb25maWcuZW5hYmxlZCkge1xuICAgIHJldHVybiByZW1vdmVEYXRhc2V0VXBkYXRlcihuZXdTdGF0ZSwge2RhdGFJZDogJ2dlb2NvZGVyX2RhdGFzZXQnfSk7XG4gIH1cblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbi8qKlxuICogVHJpZ2dlciBsYXllciBjbGljayBldmVudCB3aXRoIGNsaWNrZWQgb2JqZWN0XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbGF5ZXJDbGlja1VwZGF0ZXIgPSAoXG4gIHN0YXRlOiBWaXNTdGF0ZSxcbiAgYWN0aW9uOiBWaXNTdGF0ZUFjdGlvbnMuT25MYXllckNsaWNrVXBkYXRlckFjdGlvblxuKTogVmlzU3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIG1vdXNlUG9zOiBzdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZy5jb29yZGluYXRlLmVuYWJsZWRcbiAgICA/IHtcbiAgICAgICAgLi4uc3RhdGUubW91c2VQb3MsXG4gICAgICAgIHBpbm5lZDogc3RhdGUubW91c2VQb3MucGlubmVkID8gbnVsbCA6IGNsb25lRGVlcChzdGF0ZS5tb3VzZVBvcylcbiAgICAgIH1cbiAgICA6IHN0YXRlLm1vdXNlUG9zLFxuICBjbGlja2VkOiBhY3Rpb24uaW5mbyAmJiBhY3Rpb24uaW5mby5waWNrZWQgPyBhY3Rpb24uaW5mbyA6IG51bGxcbn0pO1xuXG4vKipcbiAqIFRyaWdnZXIgbWFwIGNsaWNrIGV2ZW50LCB1bnNlbGVjdCBjbGlja2VkIG9iamVjdFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IG1hcENsaWNrVXBkYXRlciA9IChcbiAgc3RhdGU6IFZpc1N0YXRlLFxuICBhY3Rpb246IFZpc1N0YXRlQWN0aW9ucy5Pbk1hcENsaWNrVXBkYXRlckFjdGlvblxuKTogVmlzU3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGNsaWNrZWQ6IG51bGxcbiAgfTtcbn07XG5cbi8qKlxuICogVHJpZ2dlciBtYXAgbW92ZSBldmVudFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IG1vdXNlTW92ZVVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBWaXNTdGF0ZSxcbiAge2V2dH06IFZpc1N0YXRlQWN0aW9ucy5Pbk1vdXNlTW92ZVVwZGF0ZXJBY3Rpb25cbik6IFZpc1N0YXRlID0+IHtcbiAgaWYgKE9iamVjdC52YWx1ZXMoc3RhdGUuaW50ZXJhY3Rpb25Db25maWcpLnNvbWUoY29uZmlnID0+IGNvbmZpZy5lbmFibGVkKSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIG1vdXNlUG9zOiB7XG4gICAgICAgIC4uLnN0YXRlLm1vdXNlUG9zLFxuICAgICAgICAuLi4oQXJyYXkuaXNBcnJheShldnQucG9pbnQpID8ge21vdXNlUG9zaXRpb246IFsuLi5ldnQucG9pbnRdfSA6IHt9KSxcbiAgICAgICAgLi4uKEFycmF5LmlzQXJyYXkoZXZ0LmxuZ0xhdCkgPyB7Y29vcmRpbmF0ZTogWy4uLmV2dC5sbmdMYXRdfSA6IHt9KVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59O1xuLyoqXG4gKiBUb2dnbGUgdmlzaWJpbGl0eSBvZiBhIGxheWVyIGZvciBhIHNwbGl0IG1hcFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZVNwbGl0TWFwVXBkYXRlciA9IChcbiAgc3RhdGU6IFZpc1N0YXRlLFxuICBhY3Rpb246IE1hcFN0YXRlQWN0aW9ucy5Ub2dnbGVTcGxpdE1hcFVwZGF0ZXJBY3Rpb25cbik6IFZpc1N0YXRlID0+XG4gIHN0YXRlLnNwbGl0TWFwcyAmJiBzdGF0ZS5zcGxpdE1hcHMubGVuZ3RoID09PSAwXG4gICAgPyB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAvLyBtYXliZSB3ZSBzaG91bGQgdXNlIGFuIGFycmF5IHRvIHN0b3JlIHN0YXRlIGZvciBhIHNpbmdsZSBtYXAgYXMgd2VsbFxuICAgICAgICAvLyBpZiBjdXJyZW50IG1hcHMgbGVuZ3RoIGlzIGVxdWFsIHRvIDAgaXQgbWVhbnMgdGhhdCB3ZSBhcmUgYWJvdXQgdG8gc3BsaXQgdGhlIHZpZXdcbiAgICAgICAgc3BsaXRNYXBzOiBjb21wdXRlU3BsaXRNYXBMYXllcnMoc3RhdGUubGF5ZXJzLCB7ZHVwbGljYXRlOiBmYWxzZX0pXG4gICAgICB9XG4gICAgOiBjbG9zZVNwZWNpZmljTWFwQXRJbmRleChzdGF0ZSwgYWN0aW9uKTtcblxuLyoqXG4gKiBUb2dnbGUgdmlzaWJpbGl0eSBvZiBhIGxheWVyIGluIGEgc3BsaXQgbWFwXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlTGF5ZXJGb3JNYXBVcGRhdGVyID0gKFxuICBzdGF0ZTogVmlzU3RhdGUsXG4gIHttYXBJbmRleCwgbGF5ZXJJZH06IFZpc1N0YXRlQWN0aW9ucy5Ub2dnbGVMYXllckZvck1hcFVwZGF0ZXJBY3Rpb25cbik6IFZpc1N0YXRlID0+IHtcbiAgY29uc3Qge3NwbGl0TWFwc30gPSBzdGF0ZTtcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIHNwbGl0TWFwczogc3BsaXRNYXBzLm1hcCgoc20sIGkpID0+XG4gICAgICBpID09PSBtYXBJbmRleFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIC4uLnNwbGl0TWFwc1tpXSxcbiAgICAgICAgICAgIGxheWVyczoge1xuICAgICAgICAgICAgICAuLi5zcGxpdE1hcHNbaV0ubGF5ZXJzLFxuICAgICAgICAgICAgICAvLyBpZiBsYXllcklkIG5vdCBpbiBsYXllcnMsIHNldCBpdCB0byB2aXNpYmxlXG4gICAgICAgICAgICAgIFtsYXllcklkXTogIXNwbGl0TWFwc1tpXS5sYXllcnNbbGF5ZXJJZF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIDogc21cbiAgICApXG4gIH07XG59O1xuXG4vKipcbiAqIEFkZCBuZXcgZGF0YXNldCB0byBgdmlzU3RhdGVgLCB3aXRoIG9wdGlvbiB0byBsb2FkIGEgbWFwIGNvbmZpZyBhbG9uZyB3aXRoIHRoZSBkYXRhc2V0c1xuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmV4cG9ydCBjb25zdCB1cGRhdGVWaXNEYXRhVXBkYXRlciA9IChcbiAgc3RhdGU6IFZpc1N0YXRlLFxuICBhY3Rpb246IFZpc1N0YXRlQWN0aW9ucy5VcGRhdGVWaXNEYXRhVXBkYXRlckFjdGlvblxuKTogVmlzU3RhdGUgPT4ge1xuICAvLyBkYXRhc2V0cyBjYW4gYmUgYSBzaW5nbGUgZGF0YSBlbnRyaWVzIG9yIGFuIGFycmF5IG9mIG11bHRpcGxlIGRhdGEgZW50cmllc1xuICBjb25zdCB7Y29uZmlnLCBvcHRpb25zfSA9IGFjdGlvbjtcblxuICAvLyBhcHBseSBjb25maWcgaWYgcGFzc2VkIGZyb20gYWN0aW9uXG4gIC8vIFRPRE86IHdlIGRvbid0IGhhbmRsZSBhc3luIG1lcmdlcnMgaGVyZSB5ZXRcbiAgY29uc3QgcHJldmlvdXNTdGF0ZSA9IGNvbmZpZ1xuICAgID8gcmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIoc3RhdGUsIHtcbiAgICAgICAgcGF5bG9hZDoge2NvbmZpZywgb3B0aW9uc31cbiAgICAgIH0pXG4gICAgOiBzdGF0ZTtcblxuICBjb25zdCBkYXRhc2V0cyA9IHRvQXJyYXkoYWN0aW9uLmRhdGFzZXRzKTtcblxuICBjb25zdCBuZXdEYXRhRW50cmllcyA9IGRhdGFzZXRzLnJlZHVjZShcbiAgICAoYWNjdSwge2luZm8gPSB7fSwgLi4ucmVzdH0gPSB7fSkgPT4gKHtcbiAgICAgIC4uLmFjY3UsXG4gICAgICAuLi4oY3JlYXRlTmV3RGF0YUVudHJ5KHtpbmZvLCAuLi5yZXN0fSwgc3RhdGUuZGF0YXNldHMpIHx8IHt9KVxuICAgIH0pLFxuICAgIHt9XG4gICk7XG5cbiAgLy8gc2F2ZSBuZXcgZGF0YXNldCBlbnRyeSB0byBzdGF0ZVxuICBjb25zdCBtZXJnZWRTdGF0ZSA9IHtcbiAgICAuLi5wcmV2aW91c1N0YXRlLFxuICAgIGRhdGFzZXRzOiBtZXJnZURhdGFzZXRzQnlPcmRlcihwcmV2aW91c1N0YXRlLCBuZXdEYXRhRW50cmllcylcbiAgfTtcblxuICAvLyBtZXJnZSBzdGF0ZSB3aXRoIGNvbmZpZyB0byBiZSBtZXJnZWRcbiAgY29uc3QgbGF5ZXJNZXJnZXJzID0gc3RhdGUubWVyZ2Vycy5maWx0ZXIobSA9PiBtLndhaXRGb3JMYXllckRhdGEpO1xuICBjb25zdCBkYXRhc2V0TWVyZ2VycyA9IHN0YXRlLm1lcmdlcnMuZmlsdGVyKG0gPT4gIWxheWVyTWVyZ2Vycy5pbmNsdWRlcyhtKSk7XG5cbiAgY29uc3QgbmV3RGF0YUlkcyA9IE9iamVjdC5rZXlzKG5ld0RhdGFFbnRyaWVzKTtcbiAgY29uc3QgcG9zdE1lcmdlclBheWxvYWQgPSB7XG4gICAgbmV3RGF0YUlkcyxcbiAgICBvcHRpb25zLFxuICAgIGxheWVyTWVyZ2Vyc1xuICB9O1xuXG4gIHJldHVybiBhcHBseU1lcmdlcnNVcGRhdGVyKG1lcmdlZFN0YXRlLCB7bWVyZ2VyczogZGF0YXNldE1lcmdlcnMsIHBvc3RNZXJnZXJQYXlsb2FkfSk7XG59O1xuXG4vKipcbiAqIEFkZCBuZXcgZGF0YXNldCB0byBgdmlzU3RhdGVgLCB3aXRoIG9wdGlvbiB0byBsb2FkIGEgbWFwIGNvbmZpZyBhbG9uZyB3aXRoIHRoZSBkYXRhc2V0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlNZXJnZXJzVXBkYXRlcihcbiAgc3RhdGU6IFZpc1N0YXRlLFxuICBhY3Rpb246IHtcbiAgICBtZXJnZXJzOiBNZXJnZXI8YW55PltdO1xuICAgIHBvc3RNZXJnZXJQYXlsb2FkOiBQb3N0TWVyZ2VyUGF5bG9hZDtcbiAgfVxuKTogVmlzU3RhdGUge1xuICBjb25zdCB7bWVyZ2VycywgcG9zdE1lcmdlclBheWxvYWR9ID0gYWN0aW9uO1xuXG4gIC8vIG1lcmdlIHN0YXRlIHdpdGggY29uZmlnIHRvIGJlIG1lcmdlZFxuICBjb25zdCBtZXJnZVN0YXRlUmVzdWx0ID0gbWVyZ2VTdGF0ZUZyb21NZXJnZXJzKFxuICAgIHN0YXRlLFxuICAgIHtcbiAgICAgIC4uLklOSVRJQUxfVklTX1NUQVRFLFxuICAgICAgLi4uc3RhdGUuaW5pdGlhbFN0YXRlXG4gICAgfSxcbiAgICBtZXJnZXJzLFxuICAgIC8vIG5ld0RhdGFJZHMsXG4gICAgcG9zdE1lcmdlclBheWxvYWRcbiAgKTtcblxuICAvLyBpZiBhbGwgbWVyZ2VkLCBraWNrdXAgcG9zdCBtZXJnZSBwcm9jZXNzXG4gIC8vIGlmIG5vdCB3YWl0XG4gIHJldHVybiBtZXJnZVN0YXRlUmVzdWx0LmFsbE1lcmdlZFxuICAgID8gcG9zdE1lcmdlVXBkYXRlcihtZXJnZVN0YXRlUmVzdWx0Lm1lcmdlZFN0YXRlLCBwb3N0TWVyZ2VyUGF5bG9hZClcbiAgICA6IG1lcmdlU3RhdGVSZXN1bHQubWVyZ2VkU3RhdGU7XG59XG5cbi8qKlxuICogQWRkIG5ldyBkYXRhc2V0IHRvIGB2aXNTdGF0ZWAsIHdpdGggb3B0aW9uIHRvIGxvYWQgYSBtYXAgY29uZmlnIGFsb25nIHdpdGggdGhlIGRhdGFzZXRzXG4gKi9cbmZ1bmN0aW9uIHBvc3RNZXJnZVVwZGF0ZXIobWVyZ2VkU3RhdGU6IFZpc1N0YXRlLCBwb3N0TWVyZ2VyUGF5bG9hZDogUG9zdE1lcmdlclBheWxvYWQpOiBWaXNTdGF0ZSB7XG4gIGNvbnN0IHtuZXdEYXRhSWRzLCBvcHRpb25zLCBsYXllck1lcmdlcnN9ID0gcG9zdE1lcmdlclBheWxvYWQ7XG4gIGNvbnN0IG5ld0ZpbHRlcnMgPSBtZXJnZWRTdGF0ZS5maWx0ZXJzLmZpbHRlcihmID0+XG4gICAgZi5kYXRhSWQuZmluZChmRGF0YUlkID0+IG5ld0RhdGFJZHMuaW5jbHVkZXMoZkRhdGFJZCkpXG4gICk7XG4gIGNvbnN0IGRhdGFzZXRGaWx0ZXJlZDogc3RyaW5nW10gPSB1bmlxKFxuICAgIG5ld0ZpbHRlcnMucmVkdWNlKChhY2N1LCBmKSA9PiBbLi4uYWNjdSwgLi4uZi5kYXRhSWRdLCBbXSBhcyBzdHJpbmdbXSlcbiAgKTtcbiAgY29uc3QgZGF0YUVtcHR5ID0gbmV3RGF0YUlkcy5sZW5ndGggPCAxO1xuXG4gIGxldCBuZXdMYXllcnMgPSAhZGF0YUVtcHR5XG4gICAgPyBtZXJnZWRTdGF0ZS5sYXllcnMuZmlsdGVyKGwgPT4gbC5jb25maWcuZGF0YUlkICYmIG5ld0RhdGFJZHMuaW5jbHVkZXMobC5jb25maWcuZGF0YUlkKSlcbiAgICA6IFtdO1xuXG4gIGNvbnN0IG5ld0RhdGFFbnRyaWVzID0gbmV3RGF0YUlkcy5yZWR1Y2UoXG4gICAgKGFjY3UsIGlkKSA9PiAoe1xuICAgICAgLi4uYWNjdSxcbiAgICAgIFtpZF06IG1lcmdlZFN0YXRlLmRhdGFzZXRzW2lkXVxuICAgIH0pLFxuICAgIHt9XG4gICk7XG5cbiAgaWYgKCFuZXdMYXllcnMubGVuZ3RoICYmIChvcHRpb25zIHx8IHt9KS5hdXRvQ3JlYXRlTGF5ZXJzICE9PSBmYWxzZSkge1xuICAgIC8vIG5vIGxheWVyIG1lcmdlZCwgZmluZCBkZWZhdWx0c1xuICAgIGNvbnN0IHJlc3VsdCA9IGFkZERlZmF1bHRMYXllcnMobWVyZ2VkU3RhdGUsIG5ld0RhdGFFbnRyaWVzKTtcbiAgICBtZXJnZWRTdGF0ZSA9IHJlc3VsdC5zdGF0ZTtcbiAgICBuZXdMYXllcnMgPSByZXN1bHQubmV3TGF5ZXJzO1xuICB9XG5cbiAgaWYgKG1lcmdlZFN0YXRlLnNwbGl0TWFwcy5sZW5ndGgpIHtcbiAgICAvLyBpZiBtYXAgaXMgc3BsaXQsIGFkZCBuZXcgbGF5ZXJzIHRvIHNwbGl0TWFwc1xuICAgIG5ld0xheWVycyA9IG1lcmdlZFN0YXRlLmxheWVycy5maWx0ZXIoXG4gICAgICBsID0+IGwuY29uZmlnLmRhdGFJZCAmJiBuZXdEYXRhSWRzLmluY2x1ZGVzKGwuY29uZmlnLmRhdGFJZClcbiAgICApO1xuICAgIG1lcmdlZFN0YXRlID0ge1xuICAgICAgLi4ubWVyZ2VkU3RhdGUsXG4gICAgICBzcGxpdE1hcHM6IGFkZE5ld0xheWVyc1RvU3BsaXRNYXAobWVyZ2VkU3RhdGUuc3BsaXRNYXBzLCBuZXdMYXllcnMpXG4gICAgfTtcbiAgfVxuXG4gIC8vIGlmIG5vIHRvb2x0aXBzIG1lcmdlZCBhZGQgZGVmYXVsdCB0b29sdGlwc1xuICBuZXdEYXRhSWRzLmZvckVhY2goZGF0YUlkID0+IHtcbiAgICBjb25zdCB0b29sdGlwRmllbGRzID0gbWVyZ2VkU3RhdGUuaW50ZXJhY3Rpb25Db25maWcudG9vbHRpcC5jb25maWcuZmllbGRzVG9TaG93W2RhdGFJZF07XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHRvb2x0aXBGaWVsZHMpIHx8ICF0b29sdGlwRmllbGRzLmxlbmd0aCkge1xuICAgICAgbWVyZ2VkU3RhdGUgPSBhZGREZWZhdWx0VG9vbHRpcHMobWVyZ2VkU3RhdGUsIG5ld0RhdGFFbnRyaWVzW2RhdGFJZF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgdXBkYXRlZERhdGFzZXRzID0gZGF0YUVtcHR5XG4gICAgPyBPYmplY3Qua2V5cyhtZXJnZWRTdGF0ZS5kYXRhc2V0cylcbiAgICA6IHVuaXEoT2JqZWN0LmtleXMobmV3RGF0YUVudHJpZXMpLmNvbmNhdChkYXRhc2V0RmlsdGVyZWQpKTtcblxuICBsZXQgdXBkYXRlZFN0YXRlID0gdXBkYXRlQWxsTGF5ZXJEb21haW5EYXRhKG1lcmdlZFN0YXRlLCB1cGRhdGVkRGF0YXNldHMsIHVuZGVmaW5lZCk7XG5cbiAgLy8gcmVnaXN0ZXIgbGF5ZXIgYW5pbWF0aW9uIGRvbWFpbixcbiAgLy8gbmVlZCB0byBiZSBjYWxsZWQgYWZ0ZXIgbGF5ZXIgZGF0YSBpcyBjYWxjdWxhdGVkXG4gIHVwZGF0ZWRTdGF0ZSA9IHVwZGF0ZUFuaW1hdGlvbkRvbWFpbih1cGRhdGVkU3RhdGUpO1xuXG4gIC8vIHRyeSB0byBwcm9jZXNzIGxheWVyTWVyZ2VycyBhZnRlciBkYXRhc2V0K2RhdGFzZXRNZXJnZXJzXG4gIHJldHVybiBsYXllck1lcmdlcnMgJiYgbGF5ZXJNZXJnZXJzLmxlbmd0aCA+IDBcbiAgICA/IGFwcGx5TWVyZ2Vyc1VwZGF0ZXIodXBkYXRlZFN0YXRlLCB7XG4gICAgICAgIG1lcmdlcnM6IGxheWVyTWVyZ2VycyxcbiAgICAgICAgcG9zdE1lcmdlclBheWxvYWQ6IHsuLi5wb3N0TWVyZ2VyUGF5bG9hZCwgbGF5ZXJNZXJnZXJzOiBbXX1cbiAgICAgIH0pXG4gICAgOiB1cGRhdGVkU3RhdGU7XG59XG5cbi8qKlxuICogUmVuYW1lIGFuIGV4aXN0aW5nIGRhdGFzZXQgaW4gYHZpc1N0YXRlYFxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmFtZURhdGFzZXRVcGRhdGVyKFxuICBzdGF0ZTogVmlzU3RhdGUsXG4gIGFjdGlvbjogVmlzU3RhdGVBY3Rpb25zLlJlbmFtZURhdGFzZXRVcGRhdGVyQWN0aW9uXG4pOiBWaXNTdGF0ZSB7XG4gIHJldHVybiB1cGRhdGVEYXRhc2V0UHJvcHNVcGRhdGVyKHN0YXRlLCB7ZGF0YUlkOiBhY3Rpb24uZGF0YUlkLCBwcm9wczoge2xhYmVsOiBhY3Rpb24ubGFiZWx9fSk7XG59XG5cbmNvbnN0IEFMTE9XRURfVVBEQVRFX0RBVEFTRVRfUFJPUFMgPSBbJ2xhYmVsJywgJ2NvbG9yJywgJ21ldGFkYXRhJ107XG5cbi8qKlxuICogVmFsaWRhdGVzIHByb3BlcnRpZXMgYmVmb3JlIHVwZGF0aW5nIHRoZSBkYXRhc2V0LlxuICogTWFrZXMgc3VyZSBlYWNoIHByb3BlcnR5IGlzIGluIHRoZSBhbGxvd2VkIGxpc3RcbiAqIE1ha2VzIHN1cmUgY29sb3IgdmFsdWUgaXMgUkdCXG4gKiBQZXJmb3JtcyBkZWVwIG1lcmdlIHdoZW4gdXBkYXRpbmcgbWV0YWRhdGFcbiAqL1xuY29uc3QgdmFsaWRhdGVEYXRhc2V0VXBkYXRlUHJvcHMgPSAocHJvcHMsIGRhdGFzZXQpID0+IHtcbiAgY29uc3QgdmFsaWRhdGVkUHJvcHMgPSBPYmplY3QuZW50cmllcyhwcm9wcykucmVkdWNlKChhY2MsIGVudHJ5KSA9PiB7XG4gICAgY29uc3QgW2tleSwgdmFsdWVdID0gZW50cnk7XG4gICAgLy8gaXMgaXQgYWxsb3dlZCA/XG4gICAgaWYgKCFBTExPV0VEX1VQREFURV9EQVRBU0VUX1BST1BTLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuXG4gICAgLy8gaWYgd2UgYXJlIGFkZGluZyBhIGNvbG9yIGJ1dCBpdCBpcyBub3QgUkdCIHdlIGRvbid0IGFjY2VwdCB0aGUgdmFsdWVcbiAgICAvLyBpbiB0aGUgZnV0dXJlIGFzIHdlIGFkZCBtb3JlIHByb3BzIHdlIHNob3VsZCBjaGFuZ2UgdGhpcyBpZiBpbnRvIGEgc3dpdGNoXG4gICAgaWYgKGtleSA9PT0gJ2NvbG9yJyAmJiAhaXNSZ2JDb2xvcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuXG4gICAgLy8gZG8gd2UgbmVlZCBkZWVwIG1lcmdlID9cbiAgICByZXR1cm4gey4uLmFjYywgW2tleV06IGlzUGxhaW5PYmplY3QodmFsdWUpID8gZGVlcG1lcmdlKGRhdGFzZXRba2V5XSB8fCB7fSwgdmFsdWUpIDogdmFsdWV9O1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIHZhbGlkYXRlZFByb3BzO1xufTtcblxuLyoqXG4gKiBVcGRhdGUgRGF0YXNldCBwcm9wcyAobGFiZWwsIGNvbG9yLCBtZXRhKS4gRG8gbm90IHVzZSB0byB1cGRhdGUgZGF0YSBvciBhbnkgcmVsYXRlZCBwcm9wZXJ0aWVzXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlRGF0YXNldFByb3BzVXBkYXRlcihcbiAgc3RhdGU6IFZpc1N0YXRlLFxuICBhY3Rpb246IFZpc1N0YXRlQWN0aW9ucy5VcGRhdGVEYXRhc2V0UHJvcHNVcGRhdGVyQWN0aW9uXG4pOiBWaXNTdGF0ZSB7XG4gIGNvbnN0IHtkYXRhSWQsIHByb3BzfSA9IGFjdGlvbjtcbiAgY29uc3Qge2RhdGFzZXRzfSA9IHN0YXRlO1xuICBjb25zdCBleGlzdGluZyA9IGRhdGFzZXRzW2RhdGFJZF07XG5cbiAgaWYgKGV4aXN0aW5nKSB7XG4gICAgY29uc3QgdmFsaWRhdGVkUHJvcHMgPSB2YWxpZGF0ZURhdGFzZXRVcGRhdGVQcm9wcyhwcm9wcywgZXhpc3RpbmcpO1xuICAgIC8vICB2YWxpZGF0ZSBwcm9wczoganVzdCBjb2xvciBmb3Igbm93XG4gICAgLy8gIHdlIG9ubHkgYWxsb3cgbGFiZWwsIGNvbG9yIGFuZCBtZXRhIHRvIGJlIHVwZGF0ZWRcbiAgICAvLyBjb25zdCBuZXdUYWJsZSA9IGNvcHlUYWJsZUFuZFVwZGF0ZShleGlzdGluZywgdmFsaWRhdGVkUHJvcHMpO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGRhdGFzZXRzOiB7XG4gICAgICAgIC4uLmRhdGFzZXRzLFxuICAgICAgICBbZGF0YUlkXTogY29weVRhYmxlQW5kVXBkYXRlKGV4aXN0aW5nLCB2YWxpZGF0ZWRQcm9wcylcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG4vKipcbiAqIFdoZW4gYSB1c2VyIGNsaWNrcyBvbiB0aGUgc3BlY2lmaWMgbWFwIGNsb3NpbmcgaWNvblxuICogdGhlIGFwcGxpY2F0aW9uIHdpbGwgY2xvc2UgdGhlIHNlbGVjdGVkIG1hcFxuICogYW5kIHdpbGwgbWVyZ2UgdGhlIHJlbWFpbmluZyBvbmUgd2l0aCB0aGUgZ2xvYmFsIHN0YXRlXG4gKiBUT0RPOiBpIHRoaW5rIGluIHRoZSBmdXR1cmUgdGhpcyBhY3Rpb24gc2hvdWxkIGJlIGNhbGxlZCBtZXJnZSBtYXAgbGF5ZXJzIHdpdGggZ2xvYmFsIHNldHRpbmdzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgYHZpc1N0YXRlYFxuICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBhY3Rpb25cbiAqIEByZXR1cm5zIHtPYmplY3R9IG5leHRTdGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VTcGVjaWZpY01hcEF0SW5kZXg8UyBleHRlbmRzIFZpc1N0YXRlPihcbiAgc3RhdGU6IFMsXG4gIGFjdGlvbjogTWFwU3RhdGVBY3Rpb25zLlRvZ2dsZVNwbGl0TWFwVXBkYXRlckFjdGlvblxuKTogUyB7XG4gIC8vIHJldHJpZXZlIGxheWVycyBtZXRhIGRhdGEgZnJvbSB0aGUgcmVtYWluaW5nIG1hcCB0aGF0IHdlIG5lZWQgdG8ga2VlcFxuICBjb25zdCBpbmRleFRvUmV0cmlldmUgPSAxIC0gYWN0aW9uLnBheWxvYWQ7XG4gIGNvbnN0IG1hcExheWVycyA9IHN0YXRlLnNwbGl0TWFwc1tpbmRleFRvUmV0cmlldmVdPy5sYXllcnM7XG4gIGNvbnN0IHtsYXllcnN9ID0gc3RhdGU7XG5cbiAgLy8gdXBkYXRlIGxheWVyIHZpc2liaWxpdHlcbiAgY29uc3QgbmV3TGF5ZXJzID0gbGF5ZXJzLm1hcChsYXllciA9PlxuICAgIG1hcExheWVycyAmJiAhbWFwTGF5ZXJzW2xheWVyLmlkXSAmJiBsYXllci5jb25maWcuaXNWaXNpYmxlXG4gICAgICA/IGxheWVyLnVwZGF0ZUxheWVyQ29uZmlnKHtcbiAgICAgICAgICAvLyBpZiBsYXllci5pZCBpcyBub3QgaW4gbWFwTGF5ZXJzLCBpdCBzaG91bGQgYmUgaW5WaXNpYmxlXG4gICAgICAgICAgaXNWaXNpYmxlOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgOiBsYXllclxuICApO1xuXG4gIC8vIGRlbGV0ZSBtYXBcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBsYXllcnM6IG5ld0xheWVycyxcbiAgICBzcGxpdE1hcHM6IFtdXG4gIH07XG59XG5cbi8qKlxuICogVHJpZ2dlciBmaWxlIGxvYWRpbmcgZGlzcGF0Y2ggYGFkZERhdGFUb01hcGAgaWYgc3VjY2VlZCwgb3IgYGxvYWRGaWxlc0VycmAgaWYgZmFpbGVkXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbG9hZEZpbGVzVXBkYXRlciA9IChcbiAgc3RhdGU6IFZpc1N0YXRlLFxuICBhY3Rpb246IFZpc1N0YXRlQWN0aW9ucy5Mb2FkRmlsZXNVcGRhdGVyQWN0aW9uXG4pOiBWaXNTdGF0ZSA9PiB7XG4gIGNvbnN0IHtmaWxlcywgb25GaW5pc2ggPSBsb2FkRmlsZXNTdWNjZXNzfSA9IGFjdGlvbjtcbiAgaWYgKCFmaWxlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBjb25zdCBmaWxlTG9hZGluZ1Byb2dyZXNzID0gQXJyYXkuZnJvbShmaWxlcykucmVkdWNlKFxuICAgIChhY2N1LCBmLCBpKSA9PiBtZXJnZV8oaW5pdGlhbEZpbGVMb2FkaW5nUHJvZ3Jlc3MoZiwgaSkpKGFjY3UpLFxuICAgIHt9XG4gICk7XG5cbiAgY29uc3QgZmlsZUxvYWRpbmcgPSB7XG4gICAgZmlsZUNhY2hlOiBbXSxcbiAgICBmaWxlc1RvTG9hZDogZmlsZXMsXG4gICAgb25GaW5pc2hcbiAgfTtcblxuICBjb25zdCBuZXh0U3RhdGUgPSBtZXJnZV8oe2ZpbGVMb2FkaW5nUHJvZ3Jlc3MsIGZpbGVMb2FkaW5nfSkoc3RhdGUpO1xuXG4gIHJldHVybiBsb2FkTmV4dEZpbGVVcGRhdGVyKG5leHRTdGF0ZSk7XG59O1xuXG4vKipcbiAqIFN1Y2Vzc2Z1bGx5IGxvYWRlZCBvbmUgZmlsZSwgbW92ZSBvbiB0byB0aGUgbmV4dCBvbmVcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRmlsZVN0ZXBTdWNjZXNzVXBkYXRlcihcbiAgc3RhdGU6IFZpc1N0YXRlLFxuICBhY3Rpb246IFZpc1N0YXRlQWN0aW9ucy5Mb2FkRmlsZVN0ZXBTdWNjZXNzQWN0aW9uXG4pOiBWaXNTdGF0ZSB7XG4gIGlmICghc3RhdGUuZmlsZUxvYWRpbmcpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgY29uc3Qge2ZpbGVOYW1lLCBmaWxlQ2FjaGV9ID0gYWN0aW9uO1xuICBjb25zdCB7ZmlsZXNUb0xvYWQsIG9uRmluaXNofSA9IHN0YXRlLmZpbGVMb2FkaW5nO1xuICBjb25zdCBzdGF0ZVdpdGhQcm9ncmVzcyA9IHVwZGF0ZUZpbGVMb2FkaW5nUHJvZ3Jlc3NVcGRhdGVyKHN0YXRlLCB7XG4gICAgZmlsZU5hbWUsXG4gICAgcHJvZ3Jlc3M6IHtwZXJjZW50OiAxLCBtZXNzYWdlOiAnRG9uZSd9XG4gIH0pO1xuXG4gIC8vIHNhdmUgcHJvY2Vzc2VkIGZpbGUgdG8gZmlsZUNhY2hlXG4gIGNvbnN0IHN0YXRlV2l0aENhY2hlID0gcGlja18oJ2ZpbGVMb2FkaW5nJykobWVyZ2VfKHtmaWxlQ2FjaGV9KSkoc3RhdGVXaXRoUHJvZ3Jlc3MpO1xuXG4gIHJldHVybiB3aXRoVGFzayhcbiAgICBzdGF0ZVdpdGhDYWNoZSxcbiAgICBERUxBWV9UQVNLKDIwMCkubWFwKGZpbGVzVG9Mb2FkLmxlbmd0aCA/IGxvYWROZXh0RmlsZSA6ICgpID0+IG9uRmluaXNoKGZpbGVDYWNoZSkpXG4gICk7XG59XG5cbi8vIHdpdGhUYXNrPFQ+KHN0YXRlOiBULCB0YXNrOiBhbnkpOiBUXG5cbi8qKlxuICpcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTmV4dEZpbGVVcGRhdGVyKHN0YXRlOiBWaXNTdGF0ZSk6IFZpc1N0YXRlIHtcbiAgaWYgKCFzdGF0ZS5maWxlTG9hZGluZykge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBjb25zdCB7ZmlsZXNUb0xvYWR9ID0gc3RhdGUuZmlsZUxvYWRpbmc7XG4gIGNvbnN0IFtmaWxlLCAuLi5yZW1haW5pbmdGaWxlc1RvTG9hZF0gPSBmaWxlc1RvTG9hZDtcblxuICAvLyBzYXZlIGZpbGVzVG9Mb2FkIHRvIHN0YXRlXG4gIGNvbnN0IG5leHRTdGF0ZSA9IHBpY2tfKCdmaWxlTG9hZGluZycpKG1lcmdlXyh7ZmlsZXNUb0xvYWQ6IHJlbWFpbmluZ0ZpbGVzVG9Mb2FkfSkpKHN0YXRlKTtcblxuICBjb25zdCBzdGF0ZVdpdGhQcm9ncmVzcyA9IHVwZGF0ZUZpbGVMb2FkaW5nUHJvZ3Jlc3NVcGRhdGVyKG5leHRTdGF0ZSwge1xuICAgIGZpbGVOYW1lOiBmaWxlLm5hbWUsXG4gICAgcHJvZ3Jlc3M6IHtwZXJjZW50OiAwLCBtZXNzYWdlOiAnbG9hZGluZy4uLid9XG4gIH0pO1xuXG4gIGNvbnN0IHtsb2FkZXJzLCBsb2FkT3B0aW9uc30gPSBzdGF0ZTtcbiAgcmV0dXJuIHdpdGhUYXNrKFxuICAgIHN0YXRlV2l0aFByb2dyZXNzLFxuICAgIG1ha2VMb2FkRmlsZVRhc2soXG4gICAgICBmaWxlLFxuICAgICAgbmV4dFN0YXRlLmZpbGVMb2FkaW5nICYmIG5leHRTdGF0ZS5maWxlTG9hZGluZy5maWxlQ2FjaGUsXG4gICAgICBsb2FkZXJzLFxuICAgICAgbG9hZE9wdGlvbnNcbiAgICApXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlTG9hZEZpbGVUYXNrKGZpbGUsIGZpbGVDYWNoZSwgbG9hZGVyczogTG9hZGVyW10gPSBbXSwgbG9hZE9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gTE9BRF9GSUxFX1RBU0soe2ZpbGUsIGZpbGVDYWNoZSwgbG9hZGVycywgbG9hZE9wdGlvbnN9KS5iaW1hcChcbiAgICAvLyBwcmV0dGllciBpZ25vcmVcbiAgICAvLyBzdWNjZXNzXG4gICAgZ2VuID0+XG4gICAgICBuZXh0RmlsZUJhdGNoKHtcbiAgICAgICAgZ2VuLFxuICAgICAgICBmaWxlTmFtZTogZmlsZS5uYW1lLFxuICAgICAgICBvbkZpbmlzaDogcmVzdWx0ID0+XG4gICAgICAgICAgcHJvY2Vzc0ZpbGVDb250ZW50KHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHJlc3VsdCxcbiAgICAgICAgICAgIGZpbGVDYWNoZVxuICAgICAgICAgIH0pXG4gICAgICB9KSxcblxuICAgIC8vIGVycm9yXG4gICAgZXJyID0+IGxvYWRGaWxlc0VycihmaWxlLm5hbWUsIGVycilcbiAgKTtcbn1cblxuLyoqXG4gKlxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NGaWxlQ29udGVudFVwZGF0ZXIoXG4gIHN0YXRlOiBWaXNTdGF0ZSxcbiAgYWN0aW9uOiBWaXNTdGF0ZUFjdGlvbnMuUHJvY2Vzc0ZpbGVDb250ZW50VXBkYXRlckFjdGlvblxuKTogVmlzU3RhdGUge1xuICBjb25zdCB7Y29udGVudCwgZmlsZUNhY2hlfSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gIGNvbnN0IHN0YXRlV2l0aFByb2dyZXNzID0gdXBkYXRlRmlsZUxvYWRpbmdQcm9ncmVzc1VwZGF0ZXIoc3RhdGUsIHtcbiAgICBmaWxlTmFtZTogY29udGVudC5maWxlTmFtZSxcbiAgICBwcm9ncmVzczoge3BlcmNlbnQ6IDEsIG1lc3NhZ2U6ICdwcm9jZXNzaW5nLi4uJ31cbiAgfSk7XG5cbiAgcmV0dXJuIHdpdGhUYXNrKFxuICAgIHN0YXRlV2l0aFByb2dyZXNzLFxuICAgIFBST0NFU1NfRklMRV9EQVRBKHtjb250ZW50LCBmaWxlQ2FjaGV9KS5iaW1hcChcbiAgICAgIHJlc3VsdCA9PiBsb2FkRmlsZVN0ZXBTdWNjZXNzKHtmaWxlTmFtZTogY29udGVudC5maWxlTmFtZSwgZmlsZUNhY2hlOiByZXN1bHR9KSxcbiAgICAgIGVyciA9PiBsb2FkRmlsZXNFcnIoY29udGVudC5maWxlTmFtZSwgZXJyKVxuICAgIClcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUHJvZ3Jlc3MocHJldlByb2dyZXNzID0ge30sIHByb2dyZXNzKSB7XG4gIC8vIFRoaXMgaGFwcGVucyB3aGVuIHJlY2VpdmluZyBxdWVyeSBtZXRhZGF0YSBvciBvdGhlciBjYXNlcyB3ZSBkb24ndFxuICAvLyBoYXZlIGFuIHVwZGF0ZSBmb3IgdGhlIHVzZXIuXG4gIGlmICghcHJvZ3Jlc3MgfHwgIXByb2dyZXNzLnBlcmNlbnQpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBlcmNlbnQ6IHByb2dyZXNzLnBlcmNlbnRcbiAgfTtcbn1cblxuLyoqXG4gKiBnZXRzIGNhbGxlZCB3aXRoIHBheWxvYWQgPSBBc3luY0dlbmVyYXRvcjw/Pz8+XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbmV4dEZpbGVCYXRjaFVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBWaXNTdGF0ZSxcbiAge1xuICAgIHBheWxvYWQ6IHtnZW4sIGZpbGVOYW1lLCBwcm9ncmVzcywgYWNjdW11bGF0ZWQsIG9uRmluaXNofVxuICB9OiBWaXNTdGF0ZUFjdGlvbnMuTmV4dEZpbGVCYXRjaFVwZGF0ZXJBY3Rpb25cbik6IFZpc1N0YXRlID0+IHtcbiAgY29uc3Qgc3RhdGVXaXRoUHJvZ3Jlc3MgPSB1cGRhdGVGaWxlTG9hZGluZ1Byb2dyZXNzVXBkYXRlcihzdGF0ZSwge1xuICAgIGZpbGVOYW1lLFxuICAgIHByb2dyZXNzOiBwYXJzZVByb2dyZXNzKHN0YXRlLmZpbGVMb2FkaW5nUHJvZ3Jlc3NbZmlsZU5hbWVdLCBwcm9ncmVzcylcbiAgfSk7XG4gIHJldHVybiB3aXRoVGFzayhcbiAgICBzdGF0ZVdpdGhQcm9ncmVzcyxcbiAgICBVTldSQVBfVEFTSyhnZW4ubmV4dCgpKS5iaW1hcChcbiAgICAgICh7dmFsdWUsIGRvbmV9KSA9PiB7XG4gICAgICAgIHJldHVybiBkb25lXG4gICAgICAgICAgPyBvbkZpbmlzaChhY2N1bXVsYXRlZClcbiAgICAgICAgICA6IG5leHRGaWxlQmF0Y2goe1xuICAgICAgICAgICAgICBnZW4sXG4gICAgICAgICAgICAgIGZpbGVOYW1lLFxuICAgICAgICAgICAgICBwcm9ncmVzczogdmFsdWUucHJvZ3Jlc3MsXG4gICAgICAgICAgICAgIGFjY3VtdWxhdGVkOiB2YWx1ZSxcbiAgICAgICAgICAgICAgb25GaW5pc2hcbiAgICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGVyciA9PiBsb2FkRmlsZXNFcnIoZmlsZU5hbWUsIGVycilcbiAgICApXG4gICk7XG59O1xuXG4vKipcbiAqIFRyaWdnZXIgbG9hZGluZyBmaWxlIGVycm9yXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbG9hZEZpbGVzRXJyVXBkYXRlciA9IChcbiAgc3RhdGU6IFZpc1N0YXRlLFxuICB7ZXJyb3IsIGZpbGVOYW1lfTogVmlzU3RhdGVBY3Rpb25zLkxvYWRGaWxlc0VyclVwZGF0ZXJBY3Rpb25cbik6IFZpc1N0YXRlID0+IHtcbiAgLy8gdXBkYXRlIHVpIHdpdGggZXJyb3IgbWVzc2FnZVxuICBDb25zb2xlLndhcm4oZXJyb3IpO1xuICBpZiAoIXN0YXRlLmZpbGVMb2FkaW5nKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGNvbnN0IHtmaWxlc1RvTG9hZCwgb25GaW5pc2gsIGZpbGVDYWNoZX0gPSBzdGF0ZS5maWxlTG9hZGluZztcblxuICBjb25zdCBuZXh0U3RhdGUgPSB1cGRhdGVGaWxlTG9hZGluZ1Byb2dyZXNzVXBkYXRlcihzdGF0ZSwge1xuICAgIGZpbGVOYW1lLFxuICAgIHByb2dyZXNzOiB7ZXJyb3J9XG4gIH0pO1xuXG4gIC8vIGtpY2sgb2ZmIG5leHQgZmlsZSBvciBmaW5pc2hcbiAgcmV0dXJuIHdpdGhUYXNrKFxuICAgIG5leHRTdGF0ZSxcbiAgICBERUxBWV9UQVNLKDIwMCkubWFwKGZpbGVzVG9Mb2FkLmxlbmd0aCA/IGxvYWROZXh0RmlsZSA6ICgpID0+IG9uRmluaXNoKGZpbGVDYWNoZSkpXG4gICk7XG59O1xuXG4vKipcbiAqIFdoZW4gc2VsZWN0IGRhdGFzZXQgZm9yIGV4cG9ydCwgYXBwbHkgY3B1IGZpbHRlciB0byBzZWxlY3RlZCBkYXRhc2V0XG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgYXBwbHlDUFVGaWx0ZXJVcGRhdGVyID0gKFxuICBzdGF0ZTogVmlzU3RhdGUsXG4gIHtkYXRhSWR9OiBWaXNTdGF0ZUFjdGlvbnMuQXBwbHlDUFVGaWx0ZXJVcGRhdGVyQWN0aW9uXG4pOiBWaXNTdGF0ZSA9PiB7XG4gIC8vIGFwcGx5IGNwdUZpbHRlclxuICBjb25zdCBkYXRhSWRzID0gdG9BcnJheShkYXRhSWQpO1xuXG4gIHJldHVybiBkYXRhSWRzLnJlZHVjZSgoYWNjdSwgaWQpID0+IGZpbHRlckRhdGFzZXRDUFUoYWNjdSwgaWQpLCBzdGF0ZSk7XG59O1xuXG4vKipcbiAqIFVzZXIgaW5wdXQgdG8gdXBkYXRlIHRoZSBpbmZvIG9mIHRoZSBtYXBcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRNYXBJbmZvVXBkYXRlciA9IChcbiAgc3RhdGU6IFZpc1N0YXRlLFxuICBhY3Rpb246IFZpc1N0YXRlQWN0aW9ucy5TZXRNYXBJbmZvVXBkYXRlckFjdGlvblxuKTogVmlzU3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIG1hcEluZm86IHtcbiAgICAuLi5zdGF0ZS5tYXBJbmZvLFxuICAgIC4uLmFjdGlvbi5pbmZvXG4gIH1cbn0pO1xuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gdXBkYXRlIEFsbCBsYXllciBkb21haW4gYW5kIGxheWVyIGRhdGEgb2Ygc3RhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZERlZmF1bHRMYXllcnMoXG4gIHN0YXRlOiBWaXNTdGF0ZSxcbiAgZGF0YXNldHM6IERhdGFzZXRzXG4pOiB7c3RhdGU6IFZpc1N0YXRlOyBuZXdMYXllcnM6IExheWVyW119IHtcbiAgY29uc3QgZW1wdHk6IExheWVyW10gPSBbXTtcbiAgY29uc3QgZGVmYXVsdExheWVycyA9IE9iamVjdC52YWx1ZXMoZGF0YXNldHMpLnJlZHVjZSgoYWNjdTogTGF5ZXJbXSwgZGF0YXNldCkgPT4ge1xuICAgIGNvbnN0IGZvdW5kTGF5ZXJzID0gZmluZERlZmF1bHRMYXllcihkYXRhc2V0LCBzdGF0ZS5sYXllckNsYXNzZXMpO1xuICAgIHJldHVybiBmb3VuZExheWVycyAmJiBmb3VuZExheWVycy5sZW5ndGggPyBhY2N1LmNvbmNhdChmb3VuZExheWVycykgOiBhY2N1O1xuICB9LCBlbXB0eSk7XG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0ZToge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBsYXllcnM6IFsuLi5zdGF0ZS5sYXllcnMsIC4uLmRlZmF1bHRMYXllcnNdLFxuICAgICAgbGF5ZXJPcmRlcjogW1xuICAgICAgICAvLyBwdXQgbmV3IGxheWVycyBvbiB0b3Agb2Ygb2xkIG9uZXNcbiAgICAgICAgLi4uZGVmYXVsdExheWVycy5tYXAoKF8sIGkpID0+IHN0YXRlLmxheWVycy5sZW5ndGggKyBpKSxcbiAgICAgICAgLi4uc3RhdGUubGF5ZXJPcmRlclxuICAgICAgXVxuICAgIH0sXG4gICAgbmV3TGF5ZXJzOiBkZWZhdWx0TGF5ZXJzXG4gIH07XG59XG5cbi8qKlxuICogaGVscGVyIGZ1bmN0aW9uIHRvIGZpbmQgZGVmYXVsdCB0b29sdGlwc1xuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YXNldFxuICogQHJldHVybnMge09iamVjdH0gbmV4dFN0YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGREZWZhdWx0VG9vbHRpcHMoc3RhdGUsIGRhdGFzZXQpIHtcbiAgY29uc3QgdG9vbHRpcEZpZWxkcyA9IGZpbmRGaWVsZHNUb1Nob3coe1xuICAgIC4uLmRhdGFzZXQsXG4gICAgbWF4RGVmYXVsdFRvb2x0aXBzOiBzdGF0ZS5tYXhEZWZhdWx0VG9vbHRpcHNcbiAgfSk7XG4gIGNvbnN0IG1lcmdlZCA9IHtcbiAgICAuLi5zdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZy50b29sdGlwLmNvbmZpZy5maWVsZHNUb1Nob3csXG4gICAgLi4udG9vbHRpcEZpZWxkc1xuICB9O1xuXG4gIHJldHVybiBzZXQoWydpbnRlcmFjdGlvbkNvbmZpZycsICd0b29sdGlwJywgJ2NvbmZpZycsICdmaWVsZHNUb1Nob3cnXSwgbWVyZ2VkLCBzdGF0ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsRmlsZUxvYWRpbmdQcm9ncmVzcyhmaWxlLCBpbmRleCkge1xuICBjb25zdCBmaWxlTmFtZSA9IGZpbGUubmFtZSB8fCBgVW50aXRsZWQgRmlsZSAke2luZGV4fWA7XG4gIHJldHVybiB7XG4gICAgW2ZpbGVOYW1lXToge1xuICAgICAgLy8gcGVyY2VudCBvZiBjdXJyZW50IGZpbGVcbiAgICAgIHBlcmNlbnQ6IDAsXG4gICAgICBtZXNzYWdlOiAnJyxcbiAgICAgIGZpbGVOYW1lLFxuICAgICAgZXJyb3I6IG51bGxcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVGaWxlTG9hZGluZ1Byb2dyZXNzVXBkYXRlcihzdGF0ZSwge2ZpbGVOYW1lLCBwcm9ncmVzc30pIHtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICByZXR1cm4gcGlja18oJ2ZpbGVMb2FkaW5nUHJvZ3Jlc3MnKShwaWNrXyhmaWxlTmFtZSkobWVyZ2VfKHByb2dyZXNzKSkpKHN0YXRlKTtcbn1cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHVwZGF0ZSBsYXllciBkb21haW5zIGZvciBhbiBhcnJheSBvZiBkYXRhc2V0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQWxsTGF5ZXJEb21haW5EYXRhKFxuICBzdGF0ZTogVmlzU3RhdGUsXG4gIGRhdGFJZDogc3RyaW5nIHwgc3RyaW5nW10sXG4gIHVwZGF0ZWRGaWx0ZXI/OiBGaWx0ZXJcbik6IFZpc1N0YXRlIHtcbiAgY29uc3QgZGF0YUlkcyA9IHR5cGVvZiBkYXRhSWQgPT09ICdzdHJpbmcnID8gW2RhdGFJZF0gOiBkYXRhSWQ7XG4gIGNvbnN0IG5ld0xheWVyczogTGF5ZXJbXSA9IFtdO1xuICBjb25zdCBuZXdMYXllckRhdGE6IGFueVtdID0gW107XG5cbiAgc3RhdGUubGF5ZXJzLmZvckVhY2goKG9sZExheWVyLCBpKSA9PiB7XG4gICAgaWYgKG9sZExheWVyLmNvbmZpZy5kYXRhSWQgJiYgZGF0YUlkcy5pbmNsdWRlcyhvbGRMYXllci5jb25maWcuZGF0YUlkKSkge1xuICAgICAgLy8gTm8gbmVlZCB0byByZWNhbGN1bGF0ZSBsYXllciBkb21haW4gaWYgZmlsdGVyIGhhcyBmaXhlZCBkb21haW5cbiAgICAgIGNvbnN0IG5ld0xheWVyID1cbiAgICAgICAgdXBkYXRlZEZpbHRlciAmJiB1cGRhdGVkRmlsdGVyLmZpeGVkRG9tYWluXG4gICAgICAgICAgPyBvbGRMYXllclxuICAgICAgICAgIDogb2xkTGF5ZXIudXBkYXRlTGF5ZXJEb21haW4oc3RhdGUuZGF0YXNldHMsIHVwZGF0ZWRGaWx0ZXIpO1xuXG4gICAgICBjb25zdCB7bGF5ZXJEYXRhLCBsYXllcn0gPSBjYWxjdWxhdGVMYXllckRhdGEobmV3TGF5ZXIsIHN0YXRlLCBzdGF0ZS5sYXllckRhdGFbaV0pO1xuXG4gICAgICBuZXdMYXllcnMucHVzaChsYXllcik7XG4gICAgICBuZXdMYXllckRhdGEucHVzaChsYXllckRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdMYXllcnMucHVzaChvbGRMYXllcik7XG4gICAgICBuZXdMYXllckRhdGEucHVzaChzdGF0ZS5sYXllckRhdGFbaV0pO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgbGF5ZXJzOiBuZXdMYXllcnMsXG4gICAgbGF5ZXJEYXRhOiBuZXdMYXllckRhdGFcbiAgfTtcblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBbmltYXRpb25Eb21haW48UyBleHRlbmRzIFZpc1N0YXRlPihzdGF0ZTogUyk6IFMge1xuICAvLyBtZXJnZSBhbGwgYW5pbWF0YWJsZSBsYXllciBkb21haW4gYW5kIHVwZGF0ZSBnbG9iYWwgY29uZmlnXG4gIGNvbnN0IGFuaW1hdGFibGVMYXllcnMgPSBzdGF0ZS5sYXllcnMuZmlsdGVyKFxuICAgIGwgPT5cbiAgICAgIGwuY29uZmlnLmlzVmlzaWJsZSAmJlxuICAgICAgbC5jb25maWcuYW5pbWF0aW9uICYmXG4gICAgICBsLmNvbmZpZy5hbmltYXRpb24uZW5hYmxlZCAmJlxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciB0cmlwLWxheWVyLW9ubHlcbiAgICAgIEFycmF5LmlzQXJyYXkobC5hbmltYXRpb25Eb21haW4pXG4gICk7XG5cbiAgaWYgKCFhbmltYXRhYmxlTGF5ZXJzLmxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGFuaW1hdGlvbkNvbmZpZzoge1xuICAgICAgICAuLi5zdGF0ZS5hbmltYXRpb25Db25maWcsXG4gICAgICAgIGRvbWFpbjogbnVsbCxcbiAgICAgICAgZGVmYXVsdFRpbWVGb3JtYXQ6IG51bGxcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgY29uc3QgbWVyZ2VkRG9tYWluOiBbbnVtYmVyLCBudW1iZXJdID0gYW5pbWF0YWJsZUxheWVycy5yZWR1Y2UoXG4gICAgKGFjY3UsIGxheWVyKSA9PiBbXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHRyaXAtbGF5ZXItb25seVxuICAgICAgTWF0aC5taW4oYWNjdVswXSwgbGF5ZXIuYW5pbWF0aW9uRG9tYWluWzBdKSxcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgdHJpcC1sYXllci1vbmx5XG4gICAgICBNYXRoLm1heChhY2N1WzFdLCBsYXllci5hbmltYXRpb25Eb21haW5bMV0pXG4gICAgXSxcbiAgICBbTnVtYmVyKEluZmluaXR5KSwgLUluZmluaXR5XVxuICApO1xuICBjb25zdCBkZWZhdWx0VGltZUZvcm1hdCA9IGdldFRpbWVXaWRnZXRUaXRsZUZvcm1hdHRlcihtZXJnZWREb21haW4pO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgYW5pbWF0aW9uQ29uZmlnOiB7XG4gICAgICAuLi5zdGF0ZS5hbmltYXRpb25Db25maWcsXG4gICAgICBjdXJyZW50VGltZTogaXNJblJhbmdlKHN0YXRlLmFuaW1hdGlvbkNvbmZpZy5jdXJyZW50VGltZSwgbWVyZ2VkRG9tYWluKVxuICAgICAgICA/IHN0YXRlLmFuaW1hdGlvbkNvbmZpZy5jdXJyZW50VGltZVxuICAgICAgICA6IG1lcmdlZERvbWFpblswXSxcbiAgICAgIGRvbWFpbjogbWVyZ2VkRG9tYWluLFxuICAgICAgZGVmYXVsdFRpbWVGb3JtYXRcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogVXBkYXRlIHRoZSBzdGF0dXMgb2YgdGhlIGVkaXRvclxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEVkaXRvck1vZGVVcGRhdGVyID0gKFxuICBzdGF0ZTogVmlzU3RhdGUsXG4gIHttb2RlfTogVmlzU3RhdGVBY3Rpb25zLlNldEVkaXRvck1vZGVVcGRhdGVyQWN0aW9uXG4pOiBWaXNTdGF0ZSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZWRpdG9yOiB7XG4gICAgLi4uc3RhdGUuZWRpdG9yLFxuICAgIG1vZGUsXG4gICAgc2VsZWN0ZWRGZWF0dXJlOiBudWxsXG4gIH1cbn0pO1xuXG4vLyBjb25zdCBmZWF0dXJlVG9GaWx0ZXJWYWx1ZSA9IChmZWF0dXJlKSA9PiAoey4uLmZlYXR1cmUsIGlkOiBmZWF0dXJlLmlkfSk7XG4vKipcbiAqIFVwZGF0ZSBlZGl0b3IgZmVhdHVyZXNcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRGZWF0dXJlc1VwZGF0ZXIoXG4gIHN0YXRlOiBWaXNTdGF0ZSxcbiAge2ZlYXR1cmVzID0gW119OiBWaXNTdGF0ZUFjdGlvbnMuU2V0RmVhdHVyZXNVcGRhdGVyQWN0aW9uXG4pOiBWaXNTdGF0ZSB7XG4gIGNvbnN0IGxhc3RGZWF0dXJlID0gZmVhdHVyZXMubGVuZ3RoICYmIGZlYXR1cmVzW2ZlYXR1cmVzLmxlbmd0aCAtIDFdO1xuXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGVkaXRvcjoge1xuICAgICAgLi4uc3RhdGUuZWRpdG9yLFxuICAgICAgLy8gb25seSBzYXZlIG5vbmUgZmlsdGVyIGZlYXR1cmVzIHRvIGVkaXRvclxuICAgICAgZmVhdHVyZXM6IGZlYXR1cmVzLmZpbHRlcihmID0+ICFnZXRGaWx0ZXJJZEluRmVhdHVyZShmKSksXG4gICAgICBtb2RlOiBsYXN0RmVhdHVyZSAmJiBsYXN0RmVhdHVyZS5wcm9wZXJ0aWVzLmlzQ2xvc2VkID8gRURJVE9SX01PREVTLkVESVQgOiBzdGF0ZS5lZGl0b3IubW9kZVxuICAgIH1cbiAgfTtcblxuICAvLyBSZXRyaWV2ZSBleGlzdGluZyBmZWF0dXJlXG4gIGNvbnN0IHtzZWxlY3RlZEZlYXR1cmV9ID0gc3RhdGUuZWRpdG9yO1xuXG4gIC8vIElmIG5vIGZlYXR1cmUgaXMgc2VsZWN0ZWQgd2UgY2FuIHNpbXBseSByZXR1cm4gc2luY2Ugbm8gb3BlcmF0aW9uc1xuICBpZiAoIXNlbGVjdGVkRmVhdHVyZSkge1xuICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgfVxuXG4gIC8vIFRPRE86IGNoZWNrIGlmIHRoZSBmZWF0dXJlIGhhcyBjaGFuZ2VkXG4gIGNvbnN0IGZlYXR1cmUgPSBmZWF0dXJlcy5maW5kKGYgPT4gZi5pZCA9PT0gc2VsZWN0ZWRGZWF0dXJlLmlkKTtcblxuICAvLyBpZiBmZWF0dXJlIGlzIHBhcnQgb2YgYSBmaWx0ZXJcbiAgY29uc3QgZmlsdGVySWQgPSBmZWF0dXJlICYmIGdldEZpbHRlcklkSW5GZWF0dXJlKGZlYXR1cmUpO1xuICBpZiAoZmlsdGVySWQgJiYgZmVhdHVyZSkge1xuICAgIGNvbnN0IGZlYXR1cmVWYWx1ZSA9IGZlYXR1cmVUb0ZpbHRlclZhbHVlKGZlYXR1cmUsIGZpbHRlcklkKTtcbiAgICBjb25zdCBmaWx0ZXJJZHggPSBzdGF0ZS5maWx0ZXJzLmZpbmRJbmRleChmaWwgPT4gZmlsLmlkID09PSBmaWx0ZXJJZCk7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBzZXRGaWx0ZXJVcGRhdGVyKG5ld1N0YXRlLCB7XG4gICAgICBpZHg6IGZpbHRlcklkeCxcbiAgICAgIHByb3A6ICd2YWx1ZScsXG4gICAgICB2YWx1ZTogZmVhdHVyZVZhbHVlXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbmV3U3RhdGU7XG59XG5cbi8qKlxuICogU2V0IHRoZSBjdXJyZW50IHNlbGVjdGVkIGZlYXR1cmVcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqL1xuZXhwb3J0IGNvbnN0IHNldFNlbGVjdGVkRmVhdHVyZVVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBWaXNTdGF0ZSxcbiAge2ZlYXR1cmUsIHNlbGVjdGlvbkNvbnRleHR9OiBWaXNTdGF0ZUFjdGlvbnMuU2V0U2VsZWN0ZWRGZWF0dXJlVXBkYXRlckFjdGlvblxuKTogVmlzU3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGVkaXRvcjoge1xuICAgICAgLi4uc3RhdGUuZWRpdG9yLFxuICAgICAgc2VsZWN0ZWRGZWF0dXJlOiBmZWF0dXJlLFxuICAgICAgc2VsZWN0aW9uQ29udGV4dFxuICAgIH1cbiAgfTtcbn07XG5cbi8qKlxuICogRGVsZXRlIGV4aXN0aW5nIGZlYXR1cmUgZnJvbSBmaWx0ZXJzXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlRmVhdHVyZVVwZGF0ZXIoXG4gIHN0YXRlOiBWaXNTdGF0ZSxcbiAge2ZlYXR1cmV9OiBWaXNTdGF0ZUFjdGlvbnMuRGVsZXRlRmVhdHVyZVVwZGF0ZXJBY3Rpb25cbik6IFZpc1N0YXRlIHtcbiAgaWYgKCFmZWF0dXJlKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgZWRpdG9yOiB7XG4gICAgICAuLi5zdGF0ZS5lZGl0b3IsXG4gICAgICBzZWxlY3RlZEZlYXR1cmU6IG51bGxcbiAgICB9XG4gIH07XG5cbiAgaWYgKGdldEZpbHRlcklkSW5GZWF0dXJlKGZlYXR1cmUpKSB7XG4gICAgY29uc3QgZmlsdGVySWR4ID0gbmV3U3RhdGUuZmlsdGVycy5maW5kSW5kZXgoZiA9PiBmLmlkID09PSBnZXRGaWx0ZXJJZEluRmVhdHVyZShmZWF0dXJlKSk7XG5cbiAgICByZXR1cm4gZmlsdGVySWR4ID4gLTEgPyByZW1vdmVGaWx0ZXJVcGRhdGVyKG5ld1N0YXRlLCB7aWR4OiBmaWx0ZXJJZHh9KSA6IG5ld1N0YXRlO1xuICB9XG5cbiAgLy8gbW9kaWZ5IGVkaXRvciBvYmplY3RcbiAgY29uc3QgbmV3RWRpdG9yID0ge1xuICAgIC4uLnN0YXRlLmVkaXRvcixcbiAgICBmZWF0dXJlczogc3RhdGUuZWRpdG9yLmZlYXR1cmVzLmZpbHRlcihmID0+IGYuaWQgIT09IGZlYXR1cmUuaWQpLFxuICAgIHNlbGVjdGVkRmVhdHVyZTogbnVsbFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgZWRpdG9yOiBuZXdFZGl0b3JcbiAgfTtcbn1cblxuLyoqXG4gKiBUb2dnbGUgZmVhdHVyZSBhcyBsYXllciBmaWx0ZXJcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRQb2x5Z29uRmlsdGVyTGF5ZXJVcGRhdGVyKFxuICBzdGF0ZTogVmlzU3RhdGUsXG4gIHBheWxvYWQ6IFZpc1N0YXRlQWN0aW9ucy5TZXRQb2x5Z29uRmlsdGVyTGF5ZXJVcGRhdGVyQWN0aW9uXG4pOiBWaXNTdGF0ZSB7XG4gIGNvbnN0IHtsYXllciwgZmVhdHVyZX0gPSBwYXlsb2FkO1xuICBjb25zdCBmaWx0ZXJJZCA9IGdldEZpbHRlcklkSW5GZWF0dXJlKGZlYXR1cmUpO1xuXG4gIC8vIGxldCBuZXdGaWx0ZXIgPSBudWxsO1xuICBsZXQgZmlsdGVySWR4O1xuICBsZXQgbmV3TGF5ZXJJZCA9IFtsYXllci5pZF07XG4gIGxldCBuZXdTdGF0ZSA9IHN0YXRlO1xuICAvLyBJZiBwb2x5Z29uIGZpbHRlciBhbHJlYWR5IGV4aXN0cywgd2UgbmVlZCB0byBmaW5kIG91dCBpZiB0aGUgY3VycmVudCBsYXllciBpcyBhbHJlYWR5IGluY2x1ZGVkXG4gIGlmIChmaWx0ZXJJZCkge1xuICAgIGZpbHRlcklkeCA9IHN0YXRlLmZpbHRlcnMuZmluZEluZGV4KGYgPT4gZi5pZCA9PT0gZmlsdGVySWQpO1xuXG4gICAgaWYgKCFzdGF0ZS5maWx0ZXJzW2ZpbHRlcklkeF0pIHtcbiAgICAgIC8vIHdoYXQgaWYgZmlsdGVyIGRvZXNuJ3QgZXhpc3Q/Li4uIG5vdCBwb3NzaWJsZS5cbiAgICAgIC8vIGJlY2F1c2UgZmVhdHVyZXMgaW4gdGhlIGVkaXRvciBpcyBwYXNzZWQgaW4gZnJvbSBmaWx0ZXJzIGFuZCBlZGl0b3JzLlxuICAgICAgLy8gYnV0IHdlIHdpbGwgbW92ZSB0aGlzIGZlYXR1cmUgYmFjayB0byBlZGl0b3IganVzdCBpbiBjYXNlXG4gICAgICBjb25zdCBub25lRmlsdGVyRmVhdHVyZSA9IHtcbiAgICAgICAgLi4uZmVhdHVyZSxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIC4uLmZlYXR1cmUucHJvcGVydGllcyxcbiAgICAgICAgICBmaWx0ZXJJZDogbnVsbFxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZWRpdG9yOiB7XG4gICAgICAgICAgLi4uc3RhdGUuZWRpdG9yLFxuICAgICAgICAgIGZlYXR1cmVzOiBbLi4uc3RhdGUuZWRpdG9yLmZlYXR1cmVzLCBub25lRmlsdGVyRmVhdHVyZV0sXG4gICAgICAgICAgc2VsZWN0ZWRGZWF0dXJlOiBub25lRmlsdGVyRmVhdHVyZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCBmaWx0ZXIgPSBzdGF0ZS5maWx0ZXJzW2ZpbHRlcklkeF07XG4gICAgY29uc3Qge2xheWVySWQgPSBbXX0gPSBmaWx0ZXI7XG4gICAgY29uc3QgaXNMYXllckluY2x1ZGVkID0gbGF5ZXJJZC5pbmNsdWRlcyhsYXllci5pZCk7XG5cbiAgICBuZXdMYXllcklkID0gaXNMYXllckluY2x1ZGVkXG4gICAgICA/IC8vIGlmIGxheWVyIGlzIGluY2x1ZGVkLCByZW1vdmUgaXRcbiAgICAgICAgbGF5ZXJJZC5maWx0ZXIobCA9PiBsICE9PSBsYXllci5pZClcbiAgICAgIDogWy4uLmxheWVySWQsIGxheWVyLmlkXTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpZiB3ZSBoYXZlbid0IGNyZWF0ZSB0aGUgcG9seWdvbiBmaWx0ZXIsIGNyZWF0ZSBpdFxuICAgIGNvbnN0IG5ld0ZpbHRlciA9IGdlbmVyYXRlUG9seWdvbkZpbHRlcihbXSwgZmVhdHVyZSk7XG4gICAgZmlsdGVySWR4ID0gc3RhdGUuZmlsdGVycy5sZW5ndGg7XG5cbiAgICAvLyBhZGQgZmVhdHVyZSwgcmVtb3ZlIGZlYXR1cmUgZnJvbSBlaWR0b3JcbiAgICBuZXdTdGF0ZSA9IHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgZmlsdGVyczogWy4uLnN0YXRlLmZpbHRlcnMsIG5ld0ZpbHRlcl0sXG4gICAgICBlZGl0b3I6IHtcbiAgICAgICAgLi4uc3RhdGUuZWRpdG9yLFxuICAgICAgICBmZWF0dXJlczogc3RhdGUuZWRpdG9yLmZlYXR1cmVzLmZpbHRlcihmID0+IGYuaWQgIT09IGZlYXR1cmUuaWQpLFxuICAgICAgICBzZWxlY3RlZEZlYXR1cmU6IG5ld0ZpbHRlci52YWx1ZVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gc2V0RmlsdGVyVXBkYXRlcihuZXdTdGF0ZSwge1xuICAgIGlkeDogZmlsdGVySWR4LFxuICAgIHByb3A6ICdsYXllcklkJyxcbiAgICB2YWx1ZTogbmV3TGF5ZXJJZFxuICB9KTtcbn1cblxuLyoqXG4gKiBAbWVtYmVyb2YgdmlzU3RhdGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgZnVuY3Rpb24gc29ydFRhYmxlQ29sdW1uVXBkYXRlcihcbiAgc3RhdGU6IFZpc1N0YXRlLFxuICB7ZGF0YUlkLCBjb2x1bW4sIG1vZGV9OiBWaXNTdGF0ZUFjdGlvbnMuU29ydFRhYmxlQ29sdW1uVXBkYXRlckFjdGlvblxuKTogVmlzU3RhdGUge1xuICBjb25zdCBkYXRhc2V0ID0gc3RhdGUuZGF0YXNldHNbZGF0YUlkXTtcbiAgaWYgKCFkYXRhc2V0KSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGxldCBzb3J0TW9kZSA9IG1vZGU7XG4gIGlmICghc29ydE1vZGUpIHtcbiAgICBjb25zdCBjdXJyZW50TW9kZSA9IGdldChkYXRhc2V0LCBbJ3NvcnRDb2x1bW4nLCBjb2x1bW5dKTtcbiAgICAvLyBAdHMtaWdub3JlIC0gc2hvdWxkIGJlIGZpeGFibGUgaW4gYSBUUyBmaWxlXG4gICAgc29ydE1vZGUgPSBjdXJyZW50TW9kZVxuICAgICAgPyBPYmplY3Qua2V5cyhTT1JUX09SREVSKS5maW5kKG0gPT4gbSAhPT0gY3VycmVudE1vZGUpXG4gICAgICA6IFNPUlRfT1JERVIuQVNDRU5ESU5HO1xuICB9XG5cbiAgY29uc3Qgc29ydGVkID0gc29ydERhdGFzZXRCeUNvbHVtbihkYXRhc2V0LCBjb2x1bW4sIHNvcnRNb2RlKTtcbiAgcmV0dXJuIHNldChbJ2RhdGFzZXRzJywgZGF0YUlkXSwgc29ydGVkLCBzdGF0ZSk7XG59XG5cbi8qKlxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBpblRhYmxlQ29sdW1uVXBkYXRlcihcbiAgc3RhdGU6IFZpc1N0YXRlLFxuICB7ZGF0YUlkLCBjb2x1bW59OiBWaXNTdGF0ZUFjdGlvbnMuUGluVGFibGVDb2x1bW5VcGRhdGVyQWN0aW9uXG4pOiBWaXNTdGF0ZSB7XG4gIGNvbnN0IGRhdGFzZXQgPSBzdGF0ZS5kYXRhc2V0c1tkYXRhSWRdO1xuICBpZiAoIWRhdGFzZXQpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgY29uc3QgbmV3RGF0YXNldCA9IHBpblRhYmxlQ29sdW1ucyhkYXRhc2V0LCBjb2x1bW4pO1xuXG4gIHJldHVybiBzZXQoWydkYXRhc2V0cycsIGRhdGFJZF0sIG5ld0RhdGFzZXQsIHN0YXRlKTtcbn1cblxuLyoqXG4gKiBDb3B5IGNvbHVtbiBjb250ZW50IGFzIHN0cmluZ3NcbiAqIEBtZW1iZXJvZiB2aXNTdGF0ZVVwZGF0ZXJzXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb3B5VGFibGVDb2x1bW5VcGRhdGVyKFxuICBzdGF0ZTogVmlzU3RhdGUsXG4gIHtkYXRhSWQsIGNvbHVtbn06IFZpc1N0YXRlQWN0aW9ucy5Db3B5VGFibGVDb2x1bW5VcGRhdGVyQWN0aW9uXG4pOiBWaXNTdGF0ZSB7XG4gIGNvbnN0IGRhdGFzZXQgPSBzdGF0ZS5kYXRhc2V0c1tkYXRhSWRdO1xuICBpZiAoIWRhdGFzZXQpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgY29uc3QgZmllbGRJZHggPSBkYXRhc2V0LmZpZWxkcy5maW5kSW5kZXgoZiA9PiBmLm5hbWUgPT09IGNvbHVtbik7XG4gIGlmIChmaWVsZElkeCA8IDApIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgY29uc3Qge3R5cGV9ID0gZGF0YXNldC5maWVsZHNbZmllbGRJZHhdO1xuICBjb25zdCB0ZXh0ID0gZGF0YXNldC5kYXRhQ29udGFpbmVyXG4gICAgLm1hcChyb3cgPT4gcGFyc2VGaWVsZFZhbHVlKHJvdy52YWx1ZUF0KGZpZWxkSWR4KSwgdHlwZSksIHRydWUpXG4gICAgLmpvaW4oJ1xcbicpO1xuXG4gIGNvcHkodGV4dCk7XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG4vKipcbiAqIFNldCBkaXNwbGF5IGZvcm1hdCBmcm9tIGNvbHVtbnMgZnJvbSB1c2VyIHNlbGVjdGlvblxuICogQG1lbWJlcm9mIHZpc1N0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldENvbHVtbkRpc3BsYXlGb3JtYXRVcGRhdGVyKFxuICBzdGF0ZTogVmlzU3RhdGUsXG4gIHtkYXRhSWQsIGZvcm1hdHN9OiBWaXNTdGF0ZUFjdGlvbnMuU2V0Q29sdW1uRGlzcGxheUZvcm1hdFVwZGF0ZXJBY3Rpb25cbik6IFZpc1N0YXRlIHtcbiAgY29uc3QgZGF0YXNldCA9IHN0YXRlLmRhdGFzZXRzW2RhdGFJZF07XG4gIGlmICghZGF0YXNldCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBsZXQgbmV3RmllbGRzID0gZGF0YXNldC5maWVsZHM7XG4gIE9iamVjdC5rZXlzKGZvcm1hdHMpLmZvckVhY2goY29sdW1uID0+IHtcbiAgICBjb25zdCBmaWVsZElkeCA9IGRhdGFzZXQuZmllbGRzLmZpbmRJbmRleChmID0+IGYubmFtZSA9PT0gY29sdW1uKTtcbiAgICBpZiAoZmllbGRJZHggPj0gMCkge1xuICAgICAgY29uc3QgZGlzcGxheUZvcm1hdCA9IGZvcm1hdHNbY29sdW1uXTtcbiAgICAgIGNvbnN0IGZpZWxkID0gbmV3RmllbGRzW2ZpZWxkSWR4XTtcbiAgICAgIG5ld0ZpZWxkcyA9IHN3YXBfKG1lcmdlXyh7ZGlzcGxheUZvcm1hdH0pKGZpZWxkKSBhcyB7aWQ6IHN0cmluZ30pKFxuICAgICAgICBuZXdGaWVsZHMgYXMge2lkOiBzdHJpbmd9W11cbiAgICAgICkgYXMgRmllbGRbXTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IG5ld0RhdGFzZXQgPSBjb3B5VGFibGVBbmRVcGRhdGUoZGF0YXNldCwge2ZpZWxkczogbmV3RmllbGRzIGFzIEZpZWxkW119KTtcbiAgcmV0dXJuIHBpY2tfKCdkYXRhc2V0cycpKG1lcmdlXyh7W2RhdGFJZF06IG5ld0RhdGFzZXR9KSkoc3RhdGUpO1xufVxuXG4vKipcbiAqIFVwZGF0ZSBlZGl0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUVkaXRvclZpc2liaWxpdHlVcGRhdGVyKFxuICBzdGF0ZTogVmlzU3RhdGUsXG4gIGFjdGlvbjogVmlzU3RhdGVBY3Rpb25zLlRvZ2dsZUVkaXRvclZpc2liaWxpdHlVcGRhdGVyQWN0aW9uXG4pOiBWaXNTdGF0ZSB7XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgZWRpdG9yOiB7XG4gICAgICAuLi5zdGF0ZS5lZGl0b3IsXG4gICAgICB2aXNpYmxlOiAhc3RhdGUuZWRpdG9yLnZpc2libGVcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRGaWx0ZXJBbmltYXRpb25UaW1lQ29uZmlnVXBkYXRlcihcbiAgc3RhdGU6IFZpc1N0YXRlLFxuICB7aWR4LCBjb25maWd9OiBWaXNTdGF0ZUFjdGlvbnMuU2V0RmlsdGVyQW5pbWF0aW9uVGltZUNvbmZpZ0FjdGlvblxuKTogVmlzU3RhdGUge1xuICBjb25zdCBvbGRGaWx0ZXIgPSBzdGF0ZS5maWx0ZXJzW2lkeF07XG4gIGlmICghb2xkRmlsdGVyKSB7XG4gICAgQ29uc29sZS5lcnJvcihgZmlsdGVycy4ke2lkeH0gaXMgdW5kZWZpbmVkYCk7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG4gIGlmIChvbGRGaWx0ZXIudHlwZSAhPT0gRklMVEVSX1RZUEVTLnRpbWVSYW5nZSkge1xuICAgIENvbnNvbGUuZXJyb3IoXG4gICAgICBgc2V0RmlsdGVyQW5pbWF0aW9uVGltZUNvbmZpZyBjYW4gb25seSBiZSBjYWxsZWQgdG8gdXBkYXRlIGEgdGltZSBmaWx0ZXIuIGNoZWNrIGZpbHRlci50eXBlID09PSAndGltZVJhbmdlJ2BcbiAgICApO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZXMgPSBjaGVja1RpbWVDb25maWdBcmdzKGNvbmZpZyk7XG5cbiAgcmV0dXJuIHBpY2tfKCdmaWx0ZXJzJykoc3dhcF8obWVyZ2VfKHVwZGF0ZXMpKG9sZEZpbHRlcikpKShzdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVGltZUNvbmZpZ0FyZ3MoY29uZmlnKSB7XG4gIGNvbnN0IGFsbG93ZWQgPSBbJ3RpbWVGb3JtYXQnLCAndGltZXpvbmUnXTtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNvbmZpZykucmVkdWNlKChhY2N1LCBwcm9wKSA9PiB7XG4gICAgaWYgKCFhbGxvd2VkLmluY2x1ZGVzKHByb3ApKSB7XG4gICAgICBDb25zb2xlLmVycm9yKFxuICAgICAgICBgc2V0TGF5ZXJBbmltYXRpb25UaW1lQ29uZmlnIHRha2VzIHRpbWVGb3JtYXQgYW5kL29yIHRpbWV6b25lIGFzIG9wdGlvbnMsIGZvdW5kICR7cHJvcH1gXG4gICAgICApO1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuXG4gICAgLy8gaGVyZSB3ZSBhcmUgTk9UIGNoZWNraW5nIGlmIHRpbWV6b25lIG9yIHRpbWVGb3JtYXQgaW5wdXQgaXMgdmFsaWRcbiAgICBhY2N1W3Byb3BdID0gY29uZmlnW3Byb3BdO1xuICAgIHJldHVybiBhY2N1O1xuICB9LCB7fSk7XG59XG4vKipcbiAqIFVwZGF0ZSBlZGl0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldExheWVyQW5pbWF0aW9uVGltZUNvbmZpZ1VwZGF0ZXIoXG4gIHN0YXRlOiBWaXNTdGF0ZSxcbiAge2NvbmZpZ306IFZpc1N0YXRlQWN0aW9ucy5TZXRMYXllckFuaW1hdGlvblRpbWVDb25maWdBY3Rpb25cbik6IFZpc1N0YXRlIHtcbiAgaWYgKCFjb25maWcpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgY29uc3QgdXBkYXRlcyA9IGNoZWNrVGltZUNvbmZpZ0FyZ3MoY29uZmlnKTtcbiAgcmV0dXJuIHBpY2tfKCdhbmltYXRpb25Db25maWcnKShtZXJnZV8odXBkYXRlcykpKHN0YXRlKTtcbn1cblxuLy8gRmluZCBkYXRhSWQgZnJvbSBhIHNhdmVkIHZpc1N0YXRlIHByb3BlcnR5OlxuLy8gbGF5ZXJzLCBmaWx0ZXJzLCBpbnRlcmFjdGlvbnMsIGxheWVyQmxlbmRpbmcsIG92ZXJsYXlCbGVuZGluZywgc3BsaXRNYXBzLCBhbmltYXRpb25Db25maWcsIGVkaXRvclxuLy8gcmVwbGFjZSBpdCB3aXRoIGFub3RoZXIgZGF0YUlkXG5mdW5jdGlvbiBkZWZhdWx0UmVwbGFjZVBhcmVudERhdGFzZXRJZHModmFsdWU6IGFueSwgZGF0YUlkOiBzdHJpbmcsIGRhdGFJZFRvUmVwbGFjZTogc3RyaW5nKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIC8vIGZvciBsYXllcnMsIGZpbHRlcnMsIGNhbGwgZGVmYXVsdFJlcGxhY2VQYXJlbnREYXRhc2V0SWRzIG9uIGVhY2ggaXRlbSBpbiBhcnJheVxuICAgIGNvbnN0IHJlcGxhY2VkID0gdmFsdWVcbiAgICAgIC5tYXAodiA9PiBkZWZhdWx0UmVwbGFjZVBhcmVudERhdGFzZXRJZHModiwgZGF0YUlkLCBkYXRhSWRUb1JlcGxhY2UpKVxuICAgICAgLmZpbHRlcihkID0+IGQpO1xuICAgIHJldHVybiByZXBsYWNlZC5sZW5ndGggPyByZXBsYWNlZCA6IG51bGw7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZS5kYXRhSWQgPT09ICdzdHJpbmcnICYmIHZhbHVlLmRhdGFJZCA9PT0gZGF0YUlkKSB7XG4gICAgLy8gb3RoZXJzXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnZhbHVlLFxuICAgICAgZGF0YUlkOiBkYXRhSWRUb1JlcGxhY2VcbiAgICB9O1xuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUuZGF0YUlkKSAmJiB2YWx1ZS5kYXRhSWQuaW5jbHVkZXMoZGF0YUlkKSkge1xuICAgIC8vIGZpbHRlclxuICAgIHJldHVybiB7XG4gICAgICAuLi52YWx1ZSxcbiAgICAgIGRhdGFJZDogdmFsdWUuZGF0YUlkLm1hcChkID0+IChkID09PSBkYXRhSWQgPyBkYXRhSWRUb1JlcGxhY2UgOiBkKSlcbiAgICB9O1xuICB9IGVsc2UgaWYgKHZhbHVlLmNvbmZpZz8uZGF0YUlkICYmIHZhbHVlLmNvbmZpZz8uZGF0YUlkID09PSBkYXRhSWQpIHtcbiAgICAvLyBsYXllclxuICAgIHJldHVybiB7XG4gICAgICAuLi52YWx1ZSxcbiAgICAgIGNvbmZpZzoge1xuICAgICAgICAuLi52YWx1ZS5jb25maWcsXG4gICAgICAgIGRhdGFJZDogZGF0YUlkVG9SZXBsYWNlXG4gICAgICB9XG4gICAgfTtcbiAgfSBlbHNlIGlmIChpc09iamVjdCh2YWx1ZSkgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoZGF0YUlkKSkge1xuICAgIC8vIGZvciB2YWx1ZSBzYXZlZCBhcyB7W2RhdGFJZF06IHsuLi59fVxuICAgIHJldHVybiB7W2RhdGFJZFRvUmVwbGFjZV06IHZhbHVlW2RhdGFJZF19O1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEZpbmQgZGF0YXNldElkcyBkZXJpdmVkIGEgc2F2ZWQgdmlzU3RhdGUgUHJvcGVydHk7XG5mdW5jdGlvbiBmaW5kQ2hpbGREYXRhc2V0SWRzKHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIC8vIGZvciBsYXllcnMsIGZpbHRlcnMsIGNhbGwgZGVmYXVsdFJlcGxhY2VQYXJlbnREYXRhc2V0SWRzIG9uIGVhY2ggaXRlbSBpbiBhcnJheVxuICAgIGNvbnN0IGNoaWxkRGF0YUlkcyA9IHZhbHVlLm1hcChmaW5kQ2hpbGREYXRhc2V0SWRzKS5maWx0ZXIoZCA9PiBkKTtcbiAgICByZXR1cm4gY2hpbGREYXRhSWRzLmxlbmd0aCA/IGNoaWxkRGF0YUlkcyA6IG51bGw7XG4gIH1cblxuICAvLyBjaGlsZCBkYXRhIGlkIHVzdWFsbHkgc3RvcmVzIGluIHRoZSBkZXJpdmVkIGRhdGFzZXQgaW5mb1xuICByZXR1cm4gdmFsdWU/Lm5ld0RhdGFzZXQ/LmluZm8uaWQgfHwgbnVsbDtcbn1cblxuLy8gbW92ZWQgdW5tZXJnZWQgbGF5ZXJzLCBmaWx0ZXJzLCBpbnRlcmFjdGlvbnNcbmZ1bmN0aW9uIG1vdmVWYWx1ZVRvQmVNZXJnZWQoc3RhdGUsIHByb3BWYWx1ZXMsIHtwcm9wLCB0b01lcmdlUHJvcCwgc2F2ZVVubWVyZ2VkfSkge1xuICAvLyByZW1vdmUgcHJvcCB2YWx1ZSBmcm9tIHN0YXRlXG4gIC8vIFRPRE86IHNob3VsZCB3ZSBhZGQgcmVtb3ZlIHVwZGF0ZXIgdG8gbWVyZ2VyIGFzIHdlbGw/XG4gIGlmICghcHJvcFZhbHVlcykge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBjb25zdCBzdGF0ZVJlbW92ZWQgPVxuICAgIHByb3AgPT09ICdsYXllcnMnXG4gICAgICA/IHByb3BWYWx1ZXMucmVkdWNlKChhY2N1LCBwcm9wVmFsdWUpID0+IHJlbW92ZUxheWVyVXBkYXRlcihhY2N1LCB7aWQ6IHByb3BWYWx1ZS5pZH0pLCBzdGF0ZSlcbiAgICAgIDogQXJyYXkuaXNBcnJheShzdGF0ZVtwcm9wXSlcbiAgICAgID8ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIFtwcm9wXTogc3RhdGVbcHJvcF0uZmlsdGVyKHAgPT4gIXByb3BWYWx1ZXMuZmluZChwcm9wVmFsdWUgPT4gcC5pZCA9PT0gcHJvcFZhbHVlLmlkKSlcbiAgICAgICAgfVxuICAgICAgOiAvLyBpZiBub3QgYXJyYXksIHdlIHdvbid0IHJlbW92ZSBpdCwgcmVtb3ZlIGRhdGFzZXQgc2hvdWxkIGhhbmRsZSBpdFxuICAgICAgICBzdGF0ZTtcblxuICAvLyBtb3ZlIHRvIHN0YXRlVG9CZU1lcmdlZFxuICBjb25zdCB0b0JlTWVyZ2VkID0ge1xuICAgIFt0b01lcmdlUHJvcF06IHNhdmVVbm1lcmdlZFxuICAgICAgPyAvLyBjYWxsIG1lcmdlIHNhdmVVbm1lcmdlZCBtZXRob2RcbiAgICAgICAgc2F2ZVVubWVyZ2VkKHN0YXRlUmVtb3ZlZCwgcHJvcFZhbHVlcylcbiAgICAgIDogLy8gaWYgdG9NZXJnZVByb3AgaXMgYXJhYXksIGFwcGVuZCB0byBpdFxuICAgICAgQXJyYXkuaXNBcnJheShzdGF0ZVJlbW92ZWRbdG9NZXJnZVByb3BdKVxuICAgICAgPyBbLi4uc3RhdGVSZW1vdmVkW3RvTWVyZ2VQcm9wXSwgLi4ucHJvcFZhbHVlc11cbiAgICAgIDogLy8gc2F2ZSBwcm9wVmFsdWVzIHRvIHRvTWVyZ2VcbiAgICAgIGlzT2JqZWN0KHN0YXRlUmVtb3ZlZFt0b01lcmdlUHJvcF0pXG4gICAgICA/IHtcbiAgICAgICAgICAuLi5zdGF0ZVJlbW92ZWRbdG9NZXJnZVByb3BdLFxuICAgICAgICAgIC4uLnByb3BWYWx1ZXNcbiAgICAgICAgfVxuICAgICAgOiBzdGF0ZVJlbW92ZWRbdG9NZXJnZVByb3BdXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZVJlbW92ZWQsXG4gICAgLi4udG9CZU1lcmdlZFxuICB9O1xufVxuXG5mdW5jdGlvbiByZXBsYWNlRGF0YXNldEFuZERlcHM8VCBleHRlbmRzIFZpc1N0YXRlPihcbiAgc3RhdGU6IFQsXG4gIGRhdGFJZDogc3RyaW5nLFxuICBkYXRhSWRUb1VzZTogc3RyaW5nXG4pOiBUIHtcbiAgcmV0dXJuIGNvbXBvc2VfPFQ+KFtcbiAgICBhcHBseV8ocmVwbGFjZURhdGFzZXREZXBzSW5TdGF0ZSwge2RhdGFJZCwgZGF0YUlkVG9Vc2V9KSxcbiAgICBhcHBseV8ocmVtb3ZlRGF0YXNldFVwZGF0ZXIsIHtkYXRhSWR9KVxuICBdKShzdGF0ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlU3RhdGVGb3JEYXRhc2V0UmVwbGFjZTxUIGV4dGVuZHMgVmlzU3RhdGU+KFxuICBzdGF0ZTogVCxcbiAgZGF0YUlkOiBzdHJpbmcsXG4gIGRhdGFJZFRvVXNlOiBzdHJpbmdcbik6IFQge1xuICBjb25zdCBzZXJpYWxpemVkU3RhdGUgPSBzZXJpYWxpemVWaXNTdGF0ZShzdGF0ZSwgc3RhdGUuc2NoZW1hKTtcbiAgY29uc3QgbmV4dFN0YXRlID0gcmVwbGFjZURhdGFzZXRBbmREZXBzKHN0YXRlLCBkYXRhSWQsIGRhdGFJZFRvVXNlKTtcblxuICAvLyBwcmVzZXJ2ZSBkYXRhc2V0IG9yZGVyXG4gIG5leHRTdGF0ZS5wcmVzZXJ2ZURhdGFzZXRPcmRlciA9IE9iamVjdC5rZXlzKHN0YXRlLmRhdGFzZXRzKS5tYXAoZCA9PlxuICAgIGQgPT09IGRhdGFJZCA/IGRhdGFJZFRvVXNlIDogZFxuICApO1xuXG4gIC8vIHByZXNlcnZlTGF5ZXJPcmRlclxuICBpZiAobmV4dFN0YXRlLmxheWVyVG9CZU1lcmdlZD8ubGVuZ3RoKSB7XG4gICAgLy8gY29weSBzcGxpdCBtYXBzIHRvIGJlIG1lcmdlZCwgYmVjYXVzZSBpdCB3aWxsIGJlIHJlc2V0IGluIHJlbW92ZSBsYXllclxuICAgIG5leHRTdGF0ZS5zcGxpdE1hcHNUb0JlTWVyZ2VkID0gc2VyaWFsaXplZFN0YXRlPy5zcGxpdE1hcHMgPz8gW107XG4gIH1cblxuICByZXR1cm4gbmV4dFN0YXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZURhdGFzZXREZXBzSW5TdGF0ZTxUIGV4dGVuZHMgVmlzU3RhdGU+KFxuICBzdGF0ZTogVCxcbiAge2RhdGFJZCwgZGF0YUlkVG9Vc2V9OiB7ZGF0YUlkOiBzdHJpbmc7IGRhdGFJZFRvVXNlOiBzdHJpbmd9XG4pOiBUIHtcbiAgY29uc3Qgc2VyaWFsaXplZFN0YXRlID0gc2VyaWFsaXplVmlzU3RhdGUoc3RhdGUsIHN0YXRlLnNjaGVtYSk7XG5cbiAgY29uc3QgbmV4dFN0YXRlID0gc3RhdGUubWVyZ2Vycy5yZWR1Y2UoXG4gICAgKFxuICAgICAgYWNjdVN0YXRlLFxuICAgICAge3Byb3AsIHRvTWVyZ2VQcm9wLCByZXBsYWNlUGFyZW50RGF0YXNldElkcywgZ2V0Q2hpbGREYXRhc2V0SWRzLCBzYXZlVW5tZXJnZWQsIHByZXNlcnZlT3JkZXJ9XG4gICAgKSA9PiB7XG4gICAgICAvLyBnZXQgZGF0YXNldCBpZHMgdGhhdCBhcmUgZGVwZW5kcyBvbiB0aGlzIGRhdGFzZXRcbiAgICAgIGNvbnN0IHByb3BzID0gdG9BcnJheShwcm9wKTtcbiAgICAgIGNvbnN0IHRvTWVyZ2VQcm9wcyA9IHRvQXJyYXkodG9NZXJnZVByb3ApO1xuICAgICAgY29uc3Qgc2F2ZWRQcm9wcyA9IHNlcmlhbGl6ZWRTdGF0ZSA/IHByb3BzLm1hcChwID0+IHNlcmlhbGl6ZWRTdGF0ZVtwXSkgOiBbXTtcblxuICAgICAgbGV0IHJlcGxhY2VkU3RhdGUgPSBhY2N1U3RhdGU7XG4gICAgICBzYXZlZFByb3BzLmZvckVhY2goKHByb3BWYWx1ZSwgaSkgPT4ge1xuICAgICAgICBjb25zdCBtZXJnZXJPcHRpb25zID0ge1xuICAgICAgICAgIHByb3A6IHByb3BzW2ldLFxuICAgICAgICAgIHRvTWVyZ2VQcm9wOiB0b01lcmdlUHJvcHNbaV0sXG4gICAgICAgICAgZ2V0Q2hpbGREYXRhc2V0SWRzLFxuICAgICAgICAgIHNhdmVVbm1lcmdlZFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlcGxhY2VkSXRlbSA9XG4gICAgICAgICAgcmVwbGFjZVBhcmVudERhdGFzZXRJZHM/Lihwcm9wVmFsdWUsIGRhdGFJZCwgZGF0YUlkVG9Vc2UpIHx8XG4gICAgICAgICAgZGVmYXVsdFJlcGxhY2VQYXJlbnREYXRhc2V0SWRzKHByb3BWYWx1ZSwgZGF0YUlkLCBkYXRhSWRUb1VzZSk7XG4gICAgICAgIHJlcGxhY2VkU3RhdGUgPSByZXBsYWNlZEl0ZW1cbiAgICAgICAgICA/IHJlcGxhY2VQcm9wVmFsdWVJblN0YXRlKHJlcGxhY2VkU3RhdGUsIHJlcGxhY2VkSXRlbSwgbWVyZ2VyT3B0aW9ucylcbiAgICAgICAgICA6IHJlcGxhY2VkU3RhdGU7XG5cbiAgICAgICAgaWYgKHJlcGxhY2VkU3RhdGVbbWVyZ2VyT3B0aW9ucy50b01lcmdlUHJvcF0/Lmxlbmd0aCAmJiBwcmVzZXJ2ZU9yZGVyKSB7XG4gICAgICAgICAgcmVwbGFjZWRTdGF0ZVtwcmVzZXJ2ZU9yZGVyXSA9IHByb3BWYWx1ZS5tYXAoaXRlbSA9PiBpdGVtLmlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXBsYWNlZFN0YXRlO1xuICAgIH0sXG4gICAgc3RhdGVcbiAgKTtcblxuICByZXR1cm4gbmV4dFN0YXRlO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlUHJvcFZhbHVlSW5TdGF0ZShcbiAgc3RhdGUsXG4gIHJlcGxhY2VkSXRlbSxcbiAge3Byb3AsIHRvTWVyZ2VQcm9wLCBnZXRDaGlsZERhdGFzZXRJZHMsIHNhdmVVbm1lcmdlZH1cbikge1xuICAvLyBwcm9wIGlzIGRlcGVuZHMgb24gdGhlIGRhdGFzZXQgdG8gYmUgcmVwbGFjZWRcbiAgLy8gcmVtb3ZlIHByb3AgZnJvbSBzdGF0ZSwgYW5kIG1vdmUgaXQgdG8gdG9CZU1lcmdlZFxuICBsZXQgbmV4dFN0YXRlID0gbW92ZVZhbHVlVG9CZU1lcmdlZChzdGF0ZSwgcmVwbGFjZWRJdGVtLCB7cHJvcCwgdG9NZXJnZVByb3AsIHNhdmVVbm1lcmdlZH0pO1xuICBjb25zdCBjaGlsZERhdGFJZHMgPSBnZXRDaGlsZERhdGFzZXRJZHM/LihyZXBsYWNlZEl0ZW0pIHx8IGZpbmRDaGlsZERhdGFzZXRJZHMocmVwbGFjZWRJdGVtKTtcblxuICBpZiAoY2hpbGREYXRhSWRzKSB7XG4gICAgbmV4dFN0YXRlID0gdG9BcnJheShjaGlsZERhdGFJZHMpLnJlZHVjZSgoYWNjdSwgY2hpbGREYXRhSWQpID0+IHtcbiAgICAgIC8vIHNob3VsZG4ndCBuZWVkIHRvIGNoYW5nZSBjaGlsZCBkYXRhc2V0IGlkLFxuICAgICAgLy8gYnV0IHN0aWxsIG5lZWQgdG8gbW92ZSBvdXQgb2Ygc3RhdGUgYW5kIG1lcmdlIGJhY2sgaW5cbiAgICAgIHJldHVybiByZXBsYWNlRGF0YXNldEFuZERlcHMoYWNjdSwgY2hpbGREYXRhSWQsIGNoaWxkRGF0YUlkKTtcbiAgICB9LCBuZXh0U3RhdGUpO1xuICB9XG4gIHJldHVybiBuZXh0U3RhdGU7XG59XG4iXX0=