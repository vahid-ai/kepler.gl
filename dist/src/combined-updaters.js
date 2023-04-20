"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceDataInMapUpdater = exports.toggleSplitMapUpdater = exports.combinedLayerTypeChangeUpdater = exports.combinedMapStyleChangeUpdater = exports.addDataToMapComposed = exports.loadFilesSuccessUpdater = exports.addDataToMapUpdater = exports.defaultAddDataToMapOptions = exports.isValidConfig = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _uiStateUpdaters = require("./ui-state-updaters");

var _visStateUpdaters = require("./vis-state-updaters");

var _mapStateUpdaters = require("./map-state-updaters");

var _mapStyleUpdaters = require("./map-style-updaters");

var _processors = require("@kepler.gl/processors");

var _composerHelpers = require("./composer-helpers");

var _utils = require("@kepler.gl/utils");

var _dataUtils = require("./data-utils");

var _constants = require("@kepler.gl/constants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// compose action to apply result multiple reducers, with the output of one

/**
 * Some actions will affect the entire kepler.lg instance state.
 * The updaters for these actions is exported as `combinedUpdaters`. These updater take the entire instance state
 * as the first argument. Read more about [Using updaters](../advanced-usage/using-updaters.md)
 * @public
 * @example
 *
 * import keplerGlReducer, {combinedUpdaters} from 'kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    // add data to map after receiving data from remote sources
 *    case 'LOAD_REMOTE_RESOURCE_SUCCESS':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          // pass in kepler.gl instance state to combinedUpdaters
 *          map:  combinedUpdaters.addDataToMapUpdater(
 *           state.keplerGl.map,
 *           {
 *             payload: {
 *               datasets: action.datasets,
 *               options: {readOnly: true},
 *               config: action.config
 *              }
 *            }
 *          )
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
var combinedUpdaters = null;
/* eslint-enable no-unused-vars */

var isValidConfig = function isValidConfig(config) {
  return (0, _utils.isPlainObject)(config) && (0, _utils.isPlainObject)(config.config) && config.version;
};

exports.isValidConfig = isValidConfig;
var defaultAddDataToMapOptions = {
  centerMap: true,
  keepExistingConfig: false,
  autoCreateLayers: true
};
/**
 * Combine data and full configuration update in a single action
 *
 * @memberof combinedUpdaters
 * @param {Object} state kepler.gl instance state, containing all subreducer state
 * @param {Object} action
 * @param {Object} action.payload `{datasets, options, config}`
 * @param action.payload.datasets - ***required** datasets can be a dataset or an array of datasets
 * Each dataset object needs to have `info` and `data` property.
 * @param [action.payload.options] option object `{centerMap: true}`
 * @param [action.payload.config] map config
 * @param [action.payload.info] map info contains title and description
 * @returns nextState
 *
 * @typedef {Object} Dataset
 * @property info -info of a dataset
 * @property info.id - id of this dataset. If config is defined, `id` should matches the `dataId` in config.
 * @property info.label - A display name of this dataset
 * @property data - ***required** The data object, in a tabular format with 2 properties `fields` and `rows`
 * @property data.fields - ***required** Array of fields,
 * @property data.fields.name - ***required** Name of the field,
 * @property data.rows - ***required** Array of rows, in a tabular format with `fields` and `rows`
 *
 * @public
 */

exports.defaultAddDataToMapOptions = defaultAddDataToMapOptions;

var addDataToMapUpdater = function addDataToMapUpdater(state, _ref) {
  var payload = _ref.payload;
  var datasets = payload.datasets,
      config = payload.config,
      info = payload.info;

  var options = _objectSpread(_objectSpread({}, defaultAddDataToMapOptions), payload.options); // @ts-expect-error


  var parsedConfig = config;

  if (isValidConfig(config)) {
    // if passed in saved config
    // @ts-expect-error
    parsedConfig = state.visState.schema.parseSavedConfig(config);
  }

  var oldLayers = state.visState.layers;

  var filterNewlyAddedLayers = function filterNewlyAddedLayers(layers) {
    return layers.filter(function (nl) {
      return !oldLayers.find(function (ol) {
        return ol === nl;
      });
    });
  }; // Returns undefined if not found, to make typescript happy


  var findMapBoundsIfCentered = function findMapBoundsIfCentered(layers) {
    var bounds = options.centerMap && (0, _dataUtils.findMapBounds)(layers);
    return bounds ? bounds : undefined;
  };

  return (0, _composerHelpers.compose_)([(0, _composerHelpers.pick_)('visState')((0, _composerHelpers.apply_)(_visStateUpdaters.updateVisDataUpdater, {
    datasets: datasets,
    options: options,
    config: parsedConfig
  })), (0, _composerHelpers.if_)(Boolean(info), (0, _composerHelpers.pick_)('visState')((0, _composerHelpers.apply_)(_visStateUpdaters.setMapInfoUpdater, {
    info: info
  }))), (0, _composerHelpers.with_)(function (_ref2) {
    var visState = _ref2.visState;
    return (0, _composerHelpers.pick_)('mapState')((0, _composerHelpers.apply_)(_mapStateUpdaters.receiveMapConfigUpdater, (0, _composerHelpers.payload_)({
      config: parsedConfig,
      options: options,
      bounds: findMapBoundsIfCentered(filterNewlyAddedLayers(visState.layers))
    })));
  }), (0, _composerHelpers.pick_)('mapStyle')((0, _composerHelpers.apply_)(_mapStyleUpdaters.receiveMapConfigUpdater, (0, _composerHelpers.payload_)({
    config: parsedConfig,
    options: options
  }))), (0, _composerHelpers.pick_)('uiState')((0, _composerHelpers.apply_)(_uiStateUpdaters.loadFilesSuccessUpdater, (0, _composerHelpers.payload_)(null))), (0, _composerHelpers.pick_)('uiState')((0, _composerHelpers.apply_)(_uiStateUpdaters.toggleModalUpdater, (0, _composerHelpers.payload_)(null))), (0, _composerHelpers.pick_)('uiState')((0, _composerHelpers.merge_)(options.hasOwnProperty('readOnly') ? {
    readOnly: options.readOnly
  } : {}))])(state);
};

exports.addDataToMapUpdater = addDataToMapUpdater;

var loadFilesSuccessUpdater = function loadFilesSuccessUpdater(state, action) {
  // still more to load
  var payloads = (0, _processors.filesToDataPayload)(action.result);
  var nextState = (0, _composerHelpers.compose_)([(0, _composerHelpers.pick_)('visState')((0, _composerHelpers.merge_)({
    fileLoading: false,
    fileLoadingProgress: {}
  }))])(state); // make multiple add data to map calls

  var stateWithData = (0, _composerHelpers.compose_)(payloads.map(function (p) {
    return (0, _composerHelpers.apply_)(addDataToMapUpdater, (0, _composerHelpers.payload_)(p));
  }))(nextState);
  return stateWithData;
};

exports.loadFilesSuccessUpdater = loadFilesSuccessUpdater;
var addDataToMapComposed = addDataToMapUpdater;
/**
 * Helper which updates map overlay blending mode in visState,
 * but only if it's not currently in the `normal` mode.
 */

exports.addDataToMapComposed = addDataToMapComposed;

var updateOverlayBlending = function updateOverlayBlending(overlayBlending) {
  return function (visState) {
    if (visState.overlayBlending !== _constants.OVERLAY_BLENDINGS.normal.value) {
      return _objectSpread(_objectSpread({}, visState), {}, {
        overlayBlending: overlayBlending
      });
    }

    return visState;
  };
};
/**
 * Helper which updates `darkBaseMapEnabled` in all the layers in visState which
 * have this config setting (or in one specific layer if the `layerId` param is provided).
 */


var updateDarkBaseMapLayers = function updateDarkBaseMapLayers(darkBaseMapEnabled) {
  var layerId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return function (visState) {
    return _objectSpread(_objectSpread({}, visState), {}, {
      layers: visState.layers.map(function (layer) {
        if (!layerId || layer.id === layerId) {
          if (layer.visConfigSettings.hasOwnProperty('darkBaseMapEnabled')) {
            var visConfig = layer.config.visConfig;
            return layer.updateLayerConfig({
              visConfig: _objectSpread(_objectSpread({}, visConfig), {}, {
                darkBaseMapEnabled: darkBaseMapEnabled
              })
            });
          }
        }

        return layer;
      })
    });
  };
};
/**
 * Updater that changes the map style by calling mapStyleChangeUpdater on visState.
 * In addition to that, it does the following:
 *
 *   1. Update map overlay blending mode in accordance with the colorMode of the
 *      base map, but only if it's not in the `normal` mode.
 *
 *   2. Update all the layers which have the `darkBaseMapEnabled` config setting
 *      adjusting it in accordance with the colorMode of the base map.
 *
 */


var combinedMapStyleChangeUpdater = function combinedMapStyleChangeUpdater(state, action) {
  var payload = action.payload;
  var mapStyle = state.mapStyle;

  var getColorMode = function getColorMode(key) {
    var _mapStyle$mapStyles$k;

    return (_mapStyle$mapStyles$k = mapStyle.mapStyles[key]) === null || _mapStyle$mapStyles$k === void 0 ? void 0 : _mapStyle$mapStyles$k.colorMode;
  };

  var prevColorMode = getColorMode(mapStyle.styleType);
  var nextColorMode = getColorMode(payload.styleType);
  var visState = state.visState;

  if (nextColorMode !== prevColorMode) {
    switch (nextColorMode) {
      case _constants.BASE_MAP_COLOR_MODES.DARK:
        visState = (0, _composerHelpers.compose_)([updateOverlayBlending(_constants.OVERLAY_BLENDINGS.screen.value), updateDarkBaseMapLayers(true)])(visState);
        break;

      case _constants.BASE_MAP_COLOR_MODES.LIGHT:
        visState = (0, _composerHelpers.compose_)([updateOverlayBlending(_constants.OVERLAY_BLENDINGS.darken.value), updateDarkBaseMapLayers(false)])(visState);
        break;

      default: // do nothing

    }
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    visState: visState,
    mapStyle: (0, _mapStyleUpdaters.mapStyleChangeUpdater)(mapStyle, {
      payload: _objectSpread({}, payload)
    })
  });
};
/**
 * Updater that changes the layer type by calling `layerTypeChangeUpdater` on visState.
 * In addition to that, if the new layer type has the `darkBaseMapEnabled` config
 * setting, we adjust it in accordance with the colorMode of the base map.s
 */


exports.combinedMapStyleChangeUpdater = combinedMapStyleChangeUpdater;

var combinedLayerTypeChangeUpdater = function combinedLayerTypeChangeUpdater(state, action) {
  var visState = state.visState;
  var oldLayerIndex = visState.layers.findIndex(function (layer) {
    return layer === action.oldLayer;
  });
  visState = (0, _visStateUpdaters.layerTypeChangeUpdater)(visState, action);
  var newLayer = visState.layers[oldLayerIndex];

  if (newLayer !== null && newLayer !== void 0 && newLayer.visConfigSettings.hasOwnProperty('darkBaseMapEnabled')) {
    var mapStyle = state.mapStyle;
    var colorMode = mapStyle.mapStyles[mapStyle.styleType].colorMode;
    var darkBaseMapEnabled = newLayer.config.visConfig.darkBaseMapEnabled;

    switch (colorMode) {
      case _constants.BASE_MAP_COLOR_MODES.DARK:
        if (!darkBaseMapEnabled) {
          visState = updateDarkBaseMapLayers(true, newLayer.id)(visState);
        }

        break;

      case _constants.BASE_MAP_COLOR_MODES.LIGHT:
        if (darkBaseMapEnabled) {
          visState = updateDarkBaseMapLayers(false, newLayer.id)(visState);
        }

        break;

      default: // do nothing

    }
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    visState: visState
  });
};
/**
 * Make mapLegend active when toggleSplitMap action is called
 */


exports.combinedLayerTypeChangeUpdater = combinedLayerTypeChangeUpdater;

var toggleSplitMapUpdater = function toggleSplitMapUpdater(state, action) {
  var _newState$uiState$map, _newState$uiState$map2;

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    visState: (0, _visStateUpdaters.toggleSplitMapUpdater)(state.visState, action),
    uiState: (0, _uiStateUpdaters.toggleSplitMapUpdater)(state.uiState),
    mapState: (0, _mapStateUpdaters.toggleSplitMapUpdater)(state.mapState, action)
  });

  var isSplit = newState.visState.splitMaps.length !== 0;
  var isLegendActive = (_newState$uiState$map = newState.uiState.mapControls) === null || _newState$uiState$map === void 0 ? void 0 : (_newState$uiState$map2 = _newState$uiState$map.mapLegend) === null || _newState$uiState$map2 === void 0 ? void 0 : _newState$uiState$map2.active;

  if (isSplit && !isLegendActive) {
    newState.uiState = (0, _uiStateUpdaters.toggleMapControlUpdater)(newState.uiState, {
      payload: {
        panelId: 'mapLegend',
        index: action.payload
      }
    });
  }

  return newState;
};

exports.toggleSplitMapUpdater = toggleSplitMapUpdater;
var defaultReplaceDataToMapOptions = {
  keepExistingConfig: true,
  centerMap: true,
  autoCreateLayers: false
};
/**
 * Updater replace a dataset in state
 */

var replaceDataInMapUpdater = function replaceDataInMapUpdater(state, _ref3) {
  var payload = _ref3.payload;
  var datasetToReplaceId = payload.datasetToReplaceId,
      datasetToUse = payload.datasetToUse,
      _payload$options = payload.options,
      options = _payload$options === void 0 ? {} : _payload$options;

  var addDataToMapOptions = _objectSpread(_objectSpread({}, defaultReplaceDataToMapOptions), options); // check if dataset is there


  if (!state.visState.datasets[datasetToReplaceId]) {
    return state;
  } // datasetToUse is ProtoDataset


  var dataIdToUse = datasetToUse.info.id;

  if (!dataIdToUse) {
    return state;
  } // remove dataset and put dependencies in toBeMerged


  var preparedState = _objectSpread(_objectSpread({}, state), {}, {
    visState: (0, _visStateUpdaters.prepareStateForDatasetReplace)(state.visState, datasetToReplaceId, dataIdToUse)
  });

  var nextState = addDataToMapUpdater(preparedState, (0, _composerHelpers.payload_)({
    datasets: datasetToUse,
    // should zoom to new dataset
    options: addDataToMapOptions
  }));
  return nextState;
};

exports.replaceDataInMapUpdater = replaceDataInMapUpdater;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zcmMvY29tYmluZWQtdXBkYXRlcnMudHMiXSwibmFtZXMiOlsiY29tYmluZWRVcGRhdGVycyIsImlzVmFsaWRDb25maWciLCJjb25maWciLCJ2ZXJzaW9uIiwiZGVmYXVsdEFkZERhdGFUb01hcE9wdGlvbnMiLCJjZW50ZXJNYXAiLCJrZWVwRXhpc3RpbmdDb25maWciLCJhdXRvQ3JlYXRlTGF5ZXJzIiwiYWRkRGF0YVRvTWFwVXBkYXRlciIsInN0YXRlIiwicGF5bG9hZCIsImRhdGFzZXRzIiwiaW5mbyIsIm9wdGlvbnMiLCJwYXJzZWRDb25maWciLCJ2aXNTdGF0ZSIsInNjaGVtYSIsInBhcnNlU2F2ZWRDb25maWciLCJvbGRMYXllcnMiLCJsYXllcnMiLCJmaWx0ZXJOZXdseUFkZGVkTGF5ZXJzIiwiZmlsdGVyIiwibmwiLCJmaW5kIiwib2wiLCJmaW5kTWFwQm91bmRzSWZDZW50ZXJlZCIsImJvdW5kcyIsInVuZGVmaW5lZCIsInZpc1N0YXRlVXBkYXRlVmlzRGF0YVVwZGF0ZXIiLCJCb29sZWFuIiwic2V0TWFwSW5mb1VwZGF0ZXIiLCJzdGF0ZU1hcENvbmZpZ1VwZGF0ZXIiLCJzdHlsZU1hcENvbmZpZ1VwZGF0ZXIiLCJ1aVN0YXRlTG9hZEZpbGVzU3VjY2Vzc1VwZGF0ZXIiLCJ0b2dnbGVNb2RhbFVwZGF0ZXIiLCJoYXNPd25Qcm9wZXJ0eSIsInJlYWRPbmx5IiwibG9hZEZpbGVzU3VjY2Vzc1VwZGF0ZXIiLCJhY3Rpb24iLCJwYXlsb2FkcyIsInJlc3VsdCIsIm5leHRTdGF0ZSIsImZpbGVMb2FkaW5nIiwiZmlsZUxvYWRpbmdQcm9ncmVzcyIsInN0YXRlV2l0aERhdGEiLCJtYXAiLCJwIiwiYWRkRGF0YVRvTWFwQ29tcG9zZWQiLCJ1cGRhdGVPdmVybGF5QmxlbmRpbmciLCJvdmVybGF5QmxlbmRpbmciLCJPVkVSTEFZX0JMRU5ESU5HUyIsIm5vcm1hbCIsInZhbHVlIiwidXBkYXRlRGFya0Jhc2VNYXBMYXllcnMiLCJkYXJrQmFzZU1hcEVuYWJsZWQiLCJsYXllcklkIiwibGF5ZXIiLCJpZCIsInZpc0NvbmZpZ1NldHRpbmdzIiwidmlzQ29uZmlnIiwidXBkYXRlTGF5ZXJDb25maWciLCJjb21iaW5lZE1hcFN0eWxlQ2hhbmdlVXBkYXRlciIsIm1hcFN0eWxlIiwiZ2V0Q29sb3JNb2RlIiwia2V5IiwibWFwU3R5bGVzIiwiY29sb3JNb2RlIiwicHJldkNvbG9yTW9kZSIsInN0eWxlVHlwZSIsIm5leHRDb2xvck1vZGUiLCJCQVNFX01BUF9DT0xPUl9NT0RFUyIsIkRBUksiLCJzY3JlZW4iLCJMSUdIVCIsImRhcmtlbiIsImNvbWJpbmVkTGF5ZXJUeXBlQ2hhbmdlVXBkYXRlciIsIm9sZExheWVySW5kZXgiLCJmaW5kSW5kZXgiLCJvbGRMYXllciIsIm5ld0xheWVyIiwidG9nZ2xlU3BsaXRNYXBVcGRhdGVyIiwibmV3U3RhdGUiLCJ1aVN0YXRlIiwibWFwU3RhdGUiLCJpc1NwbGl0Iiwic3BsaXRNYXBzIiwibGVuZ3RoIiwiaXNMZWdlbmRBY3RpdmUiLCJtYXBDb250cm9scyIsIm1hcExlZ2VuZCIsImFjdGl2ZSIsInBhbmVsSWQiLCJpbmRleCIsImRlZmF1bHRSZXBsYWNlRGF0YVRvTWFwT3B0aW9ucyIsInJlcGxhY2VEYXRhSW5NYXBVcGRhdGVyIiwiZGF0YXNldFRvUmVwbGFjZUlkIiwiZGF0YXNldFRvVXNlIiwiYWRkRGF0YVRvTWFwT3B0aW9ucyIsImRhdGFJZFRvVXNlIiwicHJlcGFyZWRTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBTUE7O0FBT0E7O0FBSUE7O0FBSUE7O0FBQ0E7O0FBYUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQVVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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UGlCLENBUWxCOzs7QUFDQSxNQUFNeUYsV0FBVyxHQUFHRixZQUFZLENBQUNwRixJQUFiLENBQWtCNkMsRUFBdEM7O0FBQ0EsTUFBSSxDQUFDeUMsV0FBTCxFQUFrQjtBQUNoQixXQUFPekYsS0FBUDtBQUNELEdBWmlCLENBYWxCOzs7QUFDQSxNQUFNMEYsYUFBYSxtQ0FDZDFGLEtBRGM7QUFFakJNLElBQUFBLFFBQVEsRUFBRSxxREFBOEJOLEtBQUssQ0FBQ00sUUFBcEMsRUFBOENnRixrQkFBOUMsRUFBa0VHLFdBQWxFO0FBRk8sSUFBbkI7O0FBS0EsTUFBTXpELFNBQVMsR0FBR2pDLG1CQUFtQixDQUNuQzJGLGFBRG1DLEVBRW5DLCtCQUFTO0FBQ1B4RixJQUFBQSxRQUFRLEVBQUVxRixZQURIO0FBRVA7QUFDQW5GLElBQUFBLE9BQU8sRUFBRW9GO0FBSEYsR0FBVCxDQUZtQyxDQUFyQztBQVNBLFNBQU94RCxTQUFQO0FBQ0QsQ0FoQ00iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge1xuICB0b2dnbGVNb2RhbFVwZGF0ZXIsXG4gIGxvYWRGaWxlc1N1Y2Nlc3NVcGRhdGVyIGFzIHVpU3RhdGVMb2FkRmlsZXNTdWNjZXNzVXBkYXRlcixcbiAgdG9nZ2xlTWFwQ29udHJvbFVwZGF0ZXIsXG4gIHRvZ2dsZVNwbGl0TWFwVXBkYXRlciBhcyB1aVN0YXRlVG9nZ2xlU3BsaXRNYXBVcGRhdGVyXG59IGZyb20gJy4vdWktc3RhdGUtdXBkYXRlcnMnO1xuaW1wb3J0IHtcbiAgdXBkYXRlVmlzRGF0YVVwZGF0ZXIgYXMgdmlzU3RhdGVVcGRhdGVWaXNEYXRhVXBkYXRlcixcbiAgc2V0TWFwSW5mb1VwZGF0ZXIsXG4gIGxheWVyVHlwZUNoYW5nZVVwZGF0ZXIsXG4gIHRvZ2dsZVNwbGl0TWFwVXBkYXRlciBhcyB2aXNTdGF0ZVRvZ2dsZVNwbGl0TWFwVXBkYXRlcixcbiAgcHJlcGFyZVN0YXRlRm9yRGF0YXNldFJlcGxhY2Vcbn0gZnJvbSAnLi92aXMtc3RhdGUtdXBkYXRlcnMnO1xuaW1wb3J0IHtcbiAgcmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIgYXMgc3RhdGVNYXBDb25maWdVcGRhdGVyLFxuICB0b2dnbGVTcGxpdE1hcFVwZGF0ZXIgYXMgbWFwU3RhdGVUb2dnbGVTcGxpdE1hcFVwZGF0ZXJcbn0gZnJvbSAnLi9tYXAtc3RhdGUtdXBkYXRlcnMnO1xuaW1wb3J0IHtcbiAgbWFwU3R5bGVDaGFuZ2VVcGRhdGVyLFxuICByZWNlaXZlTWFwQ29uZmlnVXBkYXRlciBhcyBzdHlsZU1hcENvbmZpZ1VwZGF0ZXJcbn0gZnJvbSAnLi9tYXAtc3R5bGUtdXBkYXRlcnMnO1xuaW1wb3J0IHtmaWxlc1RvRGF0YVBheWxvYWR9IGZyb20gJ0BrZXBsZXIuZ2wvcHJvY2Vzc29ycyc7XG5pbXBvcnQge3BheWxvYWRfLCBhcHBseV8sIHdpdGhfLCBpZl8sIGNvbXBvc2VfLCBtZXJnZV8sIHBpY2tffSBmcm9tICcuL2NvbXBvc2VyLWhlbHBlcnMnO1xuaW1wb3J0IHtNYXBTdGF0ZSwgVWlTdGF0ZSwgQWRkRGF0YVRvTWFwUGF5bG9hZCwgUGFyc2VkQ29uZmlnfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcbmltcG9ydCB7TWFwU3R5bGV9IGZyb20gJy4vbWFwLXN0eWxlLXVwZGF0ZXJzJztcbmltcG9ydCB7UHJvdmlkZXJTdGF0ZX0gZnJvbSAnLi9wcm92aWRlci1zdGF0ZS11cGRhdGVycyc7XG5pbXBvcnQge1xuICBsb2FkRmlsZXNTdWNjZXNzVXBkYXRlckFjdGlvbixcbiAgTWFwU3R5bGVDaGFuZ2VVcGRhdGVyQWN0aW9uLFxuICBMYXllclR5cGVDaGFuZ2VVcGRhdGVyQWN0aW9uLFxuICBUb2dnbGVTcGxpdE1hcFVwZGF0ZXJBY3Rpb24sXG4gIFJlcGxhY2VEYXRhSW5NYXBQYXlsb2FkXG59IGZyb20gJ0BrZXBsZXIuZ2wvYWN0aW9ucyc7XG5pbXBvcnQge1Zpc1N0YXRlfSBmcm9tICdAa2VwbGVyLmdsL3NjaGVtYXMnO1xuaW1wb3J0IHtMYXllcn0gZnJvbSAnQGtlcGxlci5nbC9sYXllcnMnO1xuaW1wb3J0IHtpc1BsYWluT2JqZWN0fSBmcm9tICdAa2VwbGVyLmdsL3V0aWxzJztcbmltcG9ydCB7ZmluZE1hcEJvdW5kc30gZnJvbSAnLi9kYXRhLXV0aWxzJztcbmltcG9ydCB7QkFTRV9NQVBfQ09MT1JfTU9ERVMsIE9WRVJMQVlfQkxFTkRJTkdTfSBmcm9tICdAa2VwbGVyLmdsL2NvbnN0YW50cyc7XG5cbmV4cG9ydCB0eXBlIEtlcGxlckdsU3RhdGUgPSB7XG4gIHZpc1N0YXRlOiBWaXNTdGF0ZTtcbiAgbWFwU3RhdGU6IE1hcFN0YXRlO1xuICBtYXBTdHlsZTogTWFwU3R5bGU7XG4gIHVpU3RhdGU6IFVpU3RhdGU7XG4gIHByb3ZpZGVyU3RhdGU6IFByb3ZpZGVyU3RhdGU7XG59O1xuXG4vLyBjb21wb3NlIGFjdGlvbiB0byBhcHBseSByZXN1bHQgbXVsdGlwbGUgcmVkdWNlcnMsIHdpdGggdGhlIG91dHB1dCBvZiBvbmVcblxuLyoqXG4gKiBTb21lIGFjdGlvbnMgd2lsbCBhZmZlY3QgdGhlIGVudGlyZSBrZXBsZXIubGcgaW5zdGFuY2Ugc3RhdGUuXG4gKiBUaGUgdXBkYXRlcnMgZm9yIHRoZXNlIGFjdGlvbnMgaXMgZXhwb3J0ZWQgYXMgYGNvbWJpbmVkVXBkYXRlcnNgLiBUaGVzZSB1cGRhdGVyIHRha2UgdGhlIGVudGlyZSBpbnN0YW5jZSBzdGF0ZVxuICogYXMgdGhlIGZpcnN0IGFyZ3VtZW50LiBSZWFkIG1vcmUgYWJvdXQgW1VzaW5nIHVwZGF0ZXJzXSguLi9hZHZhbmNlZC11c2FnZS91c2luZy11cGRhdGVycy5tZClcbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKlxuICogaW1wb3J0IGtlcGxlckdsUmVkdWNlciwge2NvbWJpbmVkVXBkYXRlcnN9IGZyb20gJ2tlcGxlci5nbC9yZWR1Y2Vycyc7XG4gKiAvLyBSb290IFJlZHVjZXJcbiAqIGNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAqICBrZXBsZXJHbDoga2VwbGVyR2xSZWR1Y2VyLFxuICogIGFwcDogYXBwUmVkdWNlclxuICogfSk7XG4gKlxuICogY29uc3QgY29tcG9zZWRSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAqICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gKiAgICAvLyBhZGQgZGF0YSB0byBtYXAgYWZ0ZXIgcmVjZWl2aW5nIGRhdGEgZnJvbSByZW1vdGUgc291cmNlc1xuICogICAgY2FzZSAnTE9BRF9SRU1PVEVfUkVTT1VSQ0VfU1VDQ0VTUyc6XG4gKiAgICAgIHJldHVybiB7XG4gKiAgICAgICAgLi4uc3RhdGUsXG4gKiAgICAgICAga2VwbGVyR2w6IHtcbiAqICAgICAgICAgIC4uLnN0YXRlLmtlcGxlckdsLFxuICogICAgICAgICAgLy8gcGFzcyBpbiBrZXBsZXIuZ2wgaW5zdGFuY2Ugc3RhdGUgdG8gY29tYmluZWRVcGRhdGVyc1xuICogICAgICAgICAgbWFwOiAgY29tYmluZWRVcGRhdGVycy5hZGREYXRhVG9NYXBVcGRhdGVyKFxuICogICAgICAgICAgIHN0YXRlLmtlcGxlckdsLm1hcCxcbiAqICAgICAgICAgICB7XG4gKiAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gKiAgICAgICAgICAgICAgIGRhdGFzZXRzOiBhY3Rpb24uZGF0YXNldHMsXG4gKiAgICAgICAgICAgICAgIG9wdGlvbnM6IHtyZWFkT25seTogdHJ1ZX0sXG4gKiAgICAgICAgICAgICAgIGNvbmZpZzogYWN0aW9uLmNvbmZpZ1xuICogICAgICAgICAgICAgIH1cbiAqICAgICAgICAgICAgfVxuICogICAgICAgICAgKVxuICogICAgICAgIH1cbiAqICAgICAgfTtcbiAqICB9XG4gKiAgcmV0dXJuIHJlZHVjZXJzKHN0YXRlLCBhY3Rpb24pO1xuICogfTtcbiAqXG4gKiBleHBvcnQgZGVmYXVsdCBjb21wb3NlZFJlZHVjZXI7XG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IGNvbWJpbmVkVXBkYXRlcnMgPSBudWxsO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG5leHBvcnQgY29uc3QgaXNWYWxpZENvbmZpZyA9IGNvbmZpZyA9PlxuICBpc1BsYWluT2JqZWN0KGNvbmZpZykgJiYgaXNQbGFpbk9iamVjdChjb25maWcuY29uZmlnKSAmJiBjb25maWcudmVyc2lvbjtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRBZGREYXRhVG9NYXBPcHRpb25zID0ge1xuICBjZW50ZXJNYXA6IHRydWUsXG4gIGtlZXBFeGlzdGluZ0NvbmZpZzogZmFsc2UsXG4gIGF1dG9DcmVhdGVMYXllcnM6IHRydWVcbn07XG5cbi8qKlxuICogQ29tYmluZSBkYXRhIGFuZCBmdWxsIGNvbmZpZ3VyYXRpb24gdXBkYXRlIGluIGEgc2luZ2xlIGFjdGlvblxuICpcbiAqIEBtZW1iZXJvZiBjb21iaW5lZFVwZGF0ZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUga2VwbGVyLmdsIGluc3RhbmNlIHN0YXRlLCBjb250YWluaW5nIGFsbCBzdWJyZWR1Y2VyIHN0YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uLnBheWxvYWQgYHtkYXRhc2V0cywgb3B0aW9ucywgY29uZmlnfWBcbiAqIEBwYXJhbSBhY3Rpb24ucGF5bG9hZC5kYXRhc2V0cyAtICoqKnJlcXVpcmVkKiogZGF0YXNldHMgY2FuIGJlIGEgZGF0YXNldCBvciBhbiBhcnJheSBvZiBkYXRhc2V0c1xuICogRWFjaCBkYXRhc2V0IG9iamVjdCBuZWVkcyB0byBoYXZlIGBpbmZvYCBhbmQgYGRhdGFgIHByb3BlcnR5LlxuICogQHBhcmFtIFthY3Rpb24ucGF5bG9hZC5vcHRpb25zXSBvcHRpb24gb2JqZWN0IGB7Y2VudGVyTWFwOiB0cnVlfWBcbiAqIEBwYXJhbSBbYWN0aW9uLnBheWxvYWQuY29uZmlnXSBtYXAgY29uZmlnXG4gKiBAcGFyYW0gW2FjdGlvbi5wYXlsb2FkLmluZm9dIG1hcCBpbmZvIGNvbnRhaW5zIHRpdGxlIGFuZCBkZXNjcmlwdGlvblxuICogQHJldHVybnMgbmV4dFN0YXRlXG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gRGF0YXNldFxuICogQHByb3BlcnR5IGluZm8gLWluZm8gb2YgYSBkYXRhc2V0XG4gKiBAcHJvcGVydHkgaW5mby5pZCAtIGlkIG9mIHRoaXMgZGF0YXNldC4gSWYgY29uZmlnIGlzIGRlZmluZWQsIGBpZGAgc2hvdWxkIG1hdGNoZXMgdGhlIGBkYXRhSWRgIGluIGNvbmZpZy5cbiAqIEBwcm9wZXJ0eSBpbmZvLmxhYmVsIC0gQSBkaXNwbGF5IG5hbWUgb2YgdGhpcyBkYXRhc2V0XG4gKiBAcHJvcGVydHkgZGF0YSAtICoqKnJlcXVpcmVkKiogVGhlIGRhdGEgb2JqZWN0LCBpbiBhIHRhYnVsYXIgZm9ybWF0IHdpdGggMiBwcm9wZXJ0aWVzIGBmaWVsZHNgIGFuZCBgcm93c2BcbiAqIEBwcm9wZXJ0eSBkYXRhLmZpZWxkcyAtICoqKnJlcXVpcmVkKiogQXJyYXkgb2YgZmllbGRzLFxuICogQHByb3BlcnR5IGRhdGEuZmllbGRzLm5hbWUgLSAqKipyZXF1aXJlZCoqIE5hbWUgb2YgdGhlIGZpZWxkLFxuICogQHByb3BlcnR5IGRhdGEucm93cyAtICoqKnJlcXVpcmVkKiogQXJyYXkgb2Ygcm93cywgaW4gYSB0YWJ1bGFyIGZvcm1hdCB3aXRoIGBmaWVsZHNgIGFuZCBgcm93c2BcbiAqXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBhZGREYXRhVG9NYXBVcGRhdGVyID0gKFxuICBzdGF0ZTogS2VwbGVyR2xTdGF0ZSxcbiAge3BheWxvYWR9OiB7cGF5bG9hZDogQWRkRGF0YVRvTWFwUGF5bG9hZH1cbik6IEtlcGxlckdsU3RhdGUgPT4ge1xuICBjb25zdCB7ZGF0YXNldHMsIGNvbmZpZywgaW5mb30gPSBwYXlsb2FkO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgLi4uZGVmYXVsdEFkZERhdGFUb01hcE9wdGlvbnMsXG4gICAgLi4ucGF5bG9hZC5vcHRpb25zXG4gIH07XG5cbiAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICBsZXQgcGFyc2VkQ29uZmlnOiBQYXJzZWRDb25maWcgPSBjb25maWc7XG5cbiAgaWYgKGlzVmFsaWRDb25maWcoY29uZmlnKSkge1xuICAgIC8vIGlmIHBhc3NlZCBpbiBzYXZlZCBjb25maWdcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcGFyc2VkQ29uZmlnID0gc3RhdGUudmlzU3RhdGUuc2NoZW1hLnBhcnNlU2F2ZWRDb25maWcoY29uZmlnKTtcbiAgfVxuICBjb25zdCBvbGRMYXllcnMgPSBzdGF0ZS52aXNTdGF0ZS5sYXllcnM7XG4gIGNvbnN0IGZpbHRlck5ld2x5QWRkZWRMYXllcnMgPSAobGF5ZXJzOiBMYXllcltdKSA9PlxuICAgIGxheWVycy5maWx0ZXIobmwgPT4gIW9sZExheWVycy5maW5kKG9sID0+IG9sID09PSBubCkpO1xuXG4gIC8vIFJldHVybnMgdW5kZWZpbmVkIGlmIG5vdCBmb3VuZCwgdG8gbWFrZSB0eXBlc2NyaXB0IGhhcHB5XG4gIGNvbnN0IGZpbmRNYXBCb3VuZHNJZkNlbnRlcmVkID0gKGxheWVyczogTGF5ZXJbXSkgPT4ge1xuICAgIGNvbnN0IGJvdW5kcyA9IG9wdGlvbnMuY2VudGVyTWFwICYmIGZpbmRNYXBCb3VuZHMobGF5ZXJzKTtcbiAgICByZXR1cm4gYm91bmRzID8gYm91bmRzIDogdW5kZWZpbmVkO1xuICB9O1xuXG4gIHJldHVybiBjb21wb3NlXzxLZXBsZXJHbFN0YXRlPihbXG4gICAgcGlja18oJ3Zpc1N0YXRlJykoXG4gICAgICBhcHBseV88VmlzU3RhdGUsIGFueT4odmlzU3RhdGVVcGRhdGVWaXNEYXRhVXBkYXRlciwge1xuICAgICAgICBkYXRhc2V0cyxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgY29uZmlnOiBwYXJzZWRDb25maWdcbiAgICAgIH0pXG4gICAgKSxcblxuICAgIGlmXyhcbiAgICAgIEJvb2xlYW4oaW5mbyksXG4gICAgICBwaWNrXygndmlzU3RhdGUnKShcbiAgICAgICAgYXBwbHlfPFZpc1N0YXRlLCBhbnk+KHNldE1hcEluZm9VcGRhdGVyLCB7aW5mb30pXG4gICAgICApXG4gICAgKSxcblxuICAgIHdpdGhfKCh7dmlzU3RhdGV9KSA9PlxuICAgICAgcGlja18oJ21hcFN0YXRlJykoXG4gICAgICAgIGFwcGx5XyhcbiAgICAgICAgICBzdGF0ZU1hcENvbmZpZ1VwZGF0ZXIsXG4gICAgICAgICAgcGF5bG9hZF8oe1xuICAgICAgICAgICAgY29uZmlnOiBwYXJzZWRDb25maWcsXG4gICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgYm91bmRzOiBmaW5kTWFwQm91bmRzSWZDZW50ZXJlZChmaWx0ZXJOZXdseUFkZGVkTGF5ZXJzKHZpc1N0YXRlLmxheWVycykpXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICksXG4gICAgcGlja18oJ21hcFN0eWxlJykoYXBwbHlfKHN0eWxlTWFwQ29uZmlnVXBkYXRlciwgcGF5bG9hZF8oe2NvbmZpZzogcGFyc2VkQ29uZmlnLCBvcHRpb25zfSkpKSxcbiAgICBwaWNrXygndWlTdGF0ZScpKGFwcGx5Xyh1aVN0YXRlTG9hZEZpbGVzU3VjY2Vzc1VwZGF0ZXIsIHBheWxvYWRfKG51bGwpKSksXG4gICAgcGlja18oJ3VpU3RhdGUnKShhcHBseV8odG9nZ2xlTW9kYWxVcGRhdGVyLCBwYXlsb2FkXyhudWxsKSkpLFxuICAgIHBpY2tfKCd1aVN0YXRlJykobWVyZ2VfKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3JlYWRPbmx5JykgPyB7cmVhZE9ubHk6IG9wdGlvbnMucmVhZE9ubHl9IDoge30pKVxuICBdKShzdGF0ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZEZpbGVzU3VjY2Vzc1VwZGF0ZXIgPSAoXG4gIHN0YXRlOiBLZXBsZXJHbFN0YXRlLFxuICBhY3Rpb246IGxvYWRGaWxlc1N1Y2Nlc3NVcGRhdGVyQWN0aW9uXG4pOiBLZXBsZXJHbFN0YXRlID0+IHtcbiAgLy8gc3RpbGwgbW9yZSB0byBsb2FkXG4gIGNvbnN0IHBheWxvYWRzID0gZmlsZXNUb0RhdGFQYXlsb2FkKGFjdGlvbi5yZXN1bHQpO1xuICBjb25zdCBuZXh0U3RhdGUgPSBjb21wb3NlXyhbXG4gICAgcGlja18oJ3Zpc1N0YXRlJykoXG4gICAgICBtZXJnZV8oe1xuICAgICAgICBmaWxlTG9hZGluZzogZmFsc2UsXG4gICAgICAgIGZpbGVMb2FkaW5nUHJvZ3Jlc3M6IHt9XG4gICAgICB9KVxuICAgIClcbiAgXSkoc3RhdGUpO1xuICAvLyBtYWtlIG11bHRpcGxlIGFkZCBkYXRhIHRvIG1hcCBjYWxsc1xuICBjb25zdCBzdGF0ZVdpdGhEYXRhID0gY29tcG9zZV8ocGF5bG9hZHMubWFwKHAgPT4gYXBwbHlfKGFkZERhdGFUb01hcFVwZGF0ZXIsIHBheWxvYWRfKHApKSkpKFxuICAgIG5leHRTdGF0ZVxuICApO1xuICByZXR1cm4gc3RhdGVXaXRoRGF0YSBhcyBLZXBsZXJHbFN0YXRlO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZERhdGFUb01hcENvbXBvc2VkID0gYWRkRGF0YVRvTWFwVXBkYXRlcjtcblxuLyoqXG4gKiBIZWxwZXIgd2hpY2ggdXBkYXRlcyBtYXAgb3ZlcmxheSBibGVuZGluZyBtb2RlIGluIHZpc1N0YXRlLFxuICogYnV0IG9ubHkgaWYgaXQncyBub3QgY3VycmVudGx5IGluIHRoZSBgbm9ybWFsYCBtb2RlLlxuICovXG5jb25zdCB1cGRhdGVPdmVybGF5QmxlbmRpbmcgPSBvdmVybGF5QmxlbmRpbmcgPT4gdmlzU3RhdGUgPT4ge1xuICBpZiAodmlzU3RhdGUub3ZlcmxheUJsZW5kaW5nICE9PSBPVkVSTEFZX0JMRU5ESU5HUy5ub3JtYWwudmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4udmlzU3RhdGUsXG4gICAgICBvdmVybGF5QmxlbmRpbmdcbiAgICB9O1xuICB9XG4gIHJldHVybiB2aXNTdGF0ZTtcbn07XG5cbi8qKlxuICogSGVscGVyIHdoaWNoIHVwZGF0ZXMgYGRhcmtCYXNlTWFwRW5hYmxlZGAgaW4gYWxsIHRoZSBsYXllcnMgaW4gdmlzU3RhdGUgd2hpY2hcbiAqIGhhdmUgdGhpcyBjb25maWcgc2V0dGluZyAob3IgaW4gb25lIHNwZWNpZmljIGxheWVyIGlmIHRoZSBgbGF5ZXJJZGAgcGFyYW0gaXMgcHJvdmlkZWQpLlxuICovXG5jb25zdCB1cGRhdGVEYXJrQmFzZU1hcExheWVycyA9IChcbiAgZGFya0Jhc2VNYXBFbmFibGVkOiBib29sZWFuLFxuICBsYXllcklkOiBzdHJpbmcgfCBudWxsID0gbnVsbFxuKSA9PiB2aXNTdGF0ZSA9PiAoe1xuICAuLi52aXNTdGF0ZSxcbiAgbGF5ZXJzOiB2aXNTdGF0ZS5sYXllcnMubWFwKGxheWVyID0+IHtcbiAgICBpZiAoIWxheWVySWQgfHwgbGF5ZXIuaWQgPT09IGxheWVySWQpIHtcbiAgICAgIGlmIChsYXllci52aXNDb25maWdTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eSgnZGFya0Jhc2VNYXBFbmFibGVkJykpIHtcbiAgICAgICAgY29uc3Qge3Zpc0NvbmZpZ30gPSBsYXllci5jb25maWc7XG4gICAgICAgIHJldHVybiBsYXllci51cGRhdGVMYXllckNvbmZpZyh7XG4gICAgICAgICAgdmlzQ29uZmlnOiB7Li4udmlzQ29uZmlnLCBkYXJrQmFzZU1hcEVuYWJsZWR9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbGF5ZXI7XG4gIH0pXG59KTtcblxuLyoqXG4gKiBVcGRhdGVyIHRoYXQgY2hhbmdlcyB0aGUgbWFwIHN0eWxlIGJ5IGNhbGxpbmcgbWFwU3R5bGVDaGFuZ2VVcGRhdGVyIG9uIHZpc1N0YXRlLlxuICogSW4gYWRkaXRpb24gdG8gdGhhdCwgaXQgZG9lcyB0aGUgZm9sbG93aW5nOlxuICpcbiAqICAgMS4gVXBkYXRlIG1hcCBvdmVybGF5IGJsZW5kaW5nIG1vZGUgaW4gYWNjb3JkYW5jZSB3aXRoIHRoZSBjb2xvck1vZGUgb2YgdGhlXG4gKiAgICAgIGJhc2UgbWFwLCBidXQgb25seSBpZiBpdCdzIG5vdCBpbiB0aGUgYG5vcm1hbGAgbW9kZS5cbiAqXG4gKiAgIDIuIFVwZGF0ZSBhbGwgdGhlIGxheWVycyB3aGljaCBoYXZlIHRoZSBgZGFya0Jhc2VNYXBFbmFibGVkYCBjb25maWcgc2V0dGluZ1xuICogICAgICBhZGp1c3RpbmcgaXQgaW4gYWNjb3JkYW5jZSB3aXRoIHRoZSBjb2xvck1vZGUgb2YgdGhlIGJhc2UgbWFwLlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbWJpbmVkTWFwU3R5bGVDaGFuZ2VVcGRhdGVyID0gKFxuICBzdGF0ZTogS2VwbGVyR2xTdGF0ZSxcbiAgYWN0aW9uOiBNYXBTdHlsZUNoYW5nZVVwZGF0ZXJBY3Rpb25cbik6IEtlcGxlckdsU3RhdGUgPT4ge1xuICBjb25zdCB7cGF5bG9hZH0gPSBhY3Rpb247XG4gIGNvbnN0IHttYXBTdHlsZX0gPSBzdGF0ZTtcbiAgY29uc3QgZ2V0Q29sb3JNb2RlID0ga2V5ID0+IG1hcFN0eWxlLm1hcFN0eWxlc1trZXldPy5jb2xvck1vZGU7XG4gIGNvbnN0IHByZXZDb2xvck1vZGUgPSBnZXRDb2xvck1vZGUobWFwU3R5bGUuc3R5bGVUeXBlKTtcbiAgY29uc3QgbmV4dENvbG9yTW9kZSA9IGdldENvbG9yTW9kZShwYXlsb2FkLnN0eWxlVHlwZSk7XG4gIGxldCB7dmlzU3RhdGV9ID0gc3RhdGU7XG4gIGlmIChuZXh0Q29sb3JNb2RlICE9PSBwcmV2Q29sb3JNb2RlKSB7XG4gICAgc3dpdGNoIChuZXh0Q29sb3JNb2RlKSB7XG4gICAgICBjYXNlIEJBU0VfTUFQX0NPTE9SX01PREVTLkRBUks6XG4gICAgICAgIHZpc1N0YXRlID0gY29tcG9zZV8oW1xuICAgICAgICAgIHVwZGF0ZU92ZXJsYXlCbGVuZGluZyhPVkVSTEFZX0JMRU5ESU5HUy5zY3JlZW4udmFsdWUpLFxuICAgICAgICAgIHVwZGF0ZURhcmtCYXNlTWFwTGF5ZXJzKHRydWUpXG4gICAgICAgIF0pKHZpc1N0YXRlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEJBU0VfTUFQX0NPTE9SX01PREVTLkxJR0hUOlxuICAgICAgICB2aXNTdGF0ZSA9IGNvbXBvc2VfKFtcbiAgICAgICAgICB1cGRhdGVPdmVybGF5QmxlbmRpbmcoT1ZFUkxBWV9CTEVORElOR1MuZGFya2VuLnZhbHVlKSxcbiAgICAgICAgICB1cGRhdGVEYXJrQmFzZU1hcExheWVycyhmYWxzZSlcbiAgICAgICAgXSkodmlzU3RhdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxuICB9XG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgdmlzU3RhdGUsXG4gICAgbWFwU3R5bGU6IG1hcFN0eWxlQ2hhbmdlVXBkYXRlcihtYXBTdHlsZSwge3BheWxvYWQ6IHsuLi5wYXlsb2FkfX0pXG4gIH07XG59O1xuXG4vKipcbiAqIFVwZGF0ZXIgdGhhdCBjaGFuZ2VzIHRoZSBsYXllciB0eXBlIGJ5IGNhbGxpbmcgYGxheWVyVHlwZUNoYW5nZVVwZGF0ZXJgIG9uIHZpc1N0YXRlLlxuICogSW4gYWRkaXRpb24gdG8gdGhhdCwgaWYgdGhlIG5ldyBsYXllciB0eXBlIGhhcyB0aGUgYGRhcmtCYXNlTWFwRW5hYmxlZGAgY29uZmlnXG4gKiBzZXR0aW5nLCB3ZSBhZGp1c3QgaXQgaW4gYWNjb3JkYW5jZSB3aXRoIHRoZSBjb2xvck1vZGUgb2YgdGhlIGJhc2UgbWFwLnNcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbWJpbmVkTGF5ZXJUeXBlQ2hhbmdlVXBkYXRlciA9IChcbiAgc3RhdGU6IEtlcGxlckdsU3RhdGUsXG4gIGFjdGlvbjogTGF5ZXJUeXBlQ2hhbmdlVXBkYXRlckFjdGlvblxuKTogS2VwbGVyR2xTdGF0ZSA9PiB7XG4gIGxldCB7dmlzU3RhdGV9ID0gc3RhdGU7XG4gIGNvbnN0IG9sZExheWVySW5kZXggPSB2aXNTdGF0ZS5sYXllcnMuZmluZEluZGV4KGxheWVyID0+IGxheWVyID09PSBhY3Rpb24ub2xkTGF5ZXIpO1xuICB2aXNTdGF0ZSA9IGxheWVyVHlwZUNoYW5nZVVwZGF0ZXIodmlzU3RhdGUsIGFjdGlvbik7XG4gIGNvbnN0IG5ld0xheWVyID0gdmlzU3RhdGUubGF5ZXJzW29sZExheWVySW5kZXhdO1xuICBpZiAobmV3TGF5ZXI/LnZpc0NvbmZpZ1NldHRpbmdzLmhhc093blByb3BlcnR5KCdkYXJrQmFzZU1hcEVuYWJsZWQnKSkge1xuICAgIGNvbnN0IHttYXBTdHlsZX0gPSBzdGF0ZTtcbiAgICBjb25zdCB7Y29sb3JNb2RlfSA9IG1hcFN0eWxlLm1hcFN0eWxlc1ttYXBTdHlsZS5zdHlsZVR5cGVdO1xuICAgIGNvbnN0IHtkYXJrQmFzZU1hcEVuYWJsZWR9ID0gbmV3TGF5ZXIuY29uZmlnLnZpc0NvbmZpZztcbiAgICBzd2l0Y2ggKGNvbG9yTW9kZSkge1xuICAgICAgY2FzZSBCQVNFX01BUF9DT0xPUl9NT0RFUy5EQVJLOlxuICAgICAgICBpZiAoIWRhcmtCYXNlTWFwRW5hYmxlZCkge1xuICAgICAgICAgIHZpc1N0YXRlID0gdXBkYXRlRGFya0Jhc2VNYXBMYXllcnModHJ1ZSwgbmV3TGF5ZXIuaWQpKHZpc1N0YXRlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgQkFTRV9NQVBfQ09MT1JfTU9ERVMuTElHSFQ6XG4gICAgICAgIGlmIChkYXJrQmFzZU1hcEVuYWJsZWQpIHtcbiAgICAgICAgICB2aXNTdGF0ZSA9IHVwZGF0ZURhcmtCYXNlTWFwTGF5ZXJzKGZhbHNlLCBuZXdMYXllci5pZCkodmlzU3RhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICB2aXNTdGF0ZVxuICB9O1xufTtcblxuLyoqXG4gKiBNYWtlIG1hcExlZ2VuZCBhY3RpdmUgd2hlbiB0b2dnbGVTcGxpdE1hcCBhY3Rpb24gaXMgY2FsbGVkXG4gKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVTcGxpdE1hcFVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBLZXBsZXJHbFN0YXRlLFxuICBhY3Rpb246IFRvZ2dsZVNwbGl0TWFwVXBkYXRlckFjdGlvblxuKTogS2VwbGVyR2xTdGF0ZSA9PiB7XG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIHZpc1N0YXRlOiB2aXNTdGF0ZVRvZ2dsZVNwbGl0TWFwVXBkYXRlcihzdGF0ZS52aXNTdGF0ZSwgYWN0aW9uKSxcbiAgICB1aVN0YXRlOiB1aVN0YXRlVG9nZ2xlU3BsaXRNYXBVcGRhdGVyKHN0YXRlLnVpU3RhdGUpLFxuICAgIG1hcFN0YXRlOiBtYXBTdGF0ZVRvZ2dsZVNwbGl0TWFwVXBkYXRlcihzdGF0ZS5tYXBTdGF0ZSwgYWN0aW9uKVxuICB9O1xuXG4gIGNvbnN0IGlzU3BsaXQgPSBuZXdTdGF0ZS52aXNTdGF0ZS5zcGxpdE1hcHMubGVuZ3RoICE9PSAwO1xuICBjb25zdCBpc0xlZ2VuZEFjdGl2ZSA9IG5ld1N0YXRlLnVpU3RhdGUubWFwQ29udHJvbHM/Lm1hcExlZ2VuZD8uYWN0aXZlO1xuICBpZiAoaXNTcGxpdCAmJiAhaXNMZWdlbmRBY3RpdmUpIHtcbiAgICBuZXdTdGF0ZS51aVN0YXRlID0gdG9nZ2xlTWFwQ29udHJvbFVwZGF0ZXIobmV3U3RhdGUudWlTdGF0ZSwge1xuICAgICAgcGF5bG9hZDoge3BhbmVsSWQ6ICdtYXBMZWdlbmQnLCBpbmRleDogYWN0aW9uLnBheWxvYWR9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbmV3U3RhdGU7XG59O1xuXG5jb25zdCBkZWZhdWx0UmVwbGFjZURhdGFUb01hcE9wdGlvbnMgPSB7XG4gIGtlZXBFeGlzdGluZ0NvbmZpZzogdHJ1ZSxcbiAgY2VudGVyTWFwOiB0cnVlLFxuICBhdXRvQ3JlYXRlTGF5ZXJzOiBmYWxzZVxufTtcblxuLyoqXG4gKiBVcGRhdGVyIHJlcGxhY2UgYSBkYXRhc2V0IGluIHN0YXRlXG4gKi9cbmV4cG9ydCBjb25zdCByZXBsYWNlRGF0YUluTWFwVXBkYXRlciA9IChcbiAgc3RhdGU6IEtlcGxlckdsU3RhdGUsXG4gIHtwYXlsb2FkfToge3BheWxvYWQ6IFJlcGxhY2VEYXRhSW5NYXBQYXlsb2FkfVxuKTogS2VwbGVyR2xTdGF0ZSA9PiB7XG4gIGNvbnN0IHtkYXRhc2V0VG9SZXBsYWNlSWQsIGRhdGFzZXRUb1VzZSwgb3B0aW9ucyA9IHt9fSA9IHBheWxvYWQ7XG4gIGNvbnN0IGFkZERhdGFUb01hcE9wdGlvbnMgPSB7Li4uZGVmYXVsdFJlcGxhY2VEYXRhVG9NYXBPcHRpb25zLCAuLi5vcHRpb25zfTtcblxuICAvLyBjaGVjayBpZiBkYXRhc2V0IGlzIHRoZXJlXG4gIGlmICghc3RhdGUudmlzU3RhdGUuZGF0YXNldHNbZGF0YXNldFRvUmVwbGFjZUlkXSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICAvLyBkYXRhc2V0VG9Vc2UgaXMgUHJvdG9EYXRhc2V0XG4gIGNvbnN0IGRhdGFJZFRvVXNlID0gZGF0YXNldFRvVXNlLmluZm8uaWQ7XG4gIGlmICghZGF0YUlkVG9Vc2UpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgLy8gcmVtb3ZlIGRhdGFzZXQgYW5kIHB1dCBkZXBlbmRlbmNpZXMgaW4gdG9CZU1lcmdlZFxuICBjb25zdCBwcmVwYXJlZFN0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIHZpc1N0YXRlOiBwcmVwYXJlU3RhdGVGb3JEYXRhc2V0UmVwbGFjZShzdGF0ZS52aXNTdGF0ZSwgZGF0YXNldFRvUmVwbGFjZUlkLCBkYXRhSWRUb1VzZSlcbiAgfTtcblxuICBjb25zdCBuZXh0U3RhdGUgPSBhZGREYXRhVG9NYXBVcGRhdGVyKFxuICAgIHByZXBhcmVkU3RhdGUsXG4gICAgcGF5bG9hZF8oe1xuICAgICAgZGF0YXNldHM6IGRhdGFzZXRUb1VzZSxcbiAgICAgIC8vIHNob3VsZCB6b29tIHRvIG5ldyBkYXRhc2V0XG4gICAgICBvcHRpb25zOiBhZGREYXRhVG9NYXBPcHRpb25zXG4gICAgfSlcbiAgKTtcblxuICByZXR1cm4gbmV4dFN0YXRlO1xufTtcbiJdfQ==