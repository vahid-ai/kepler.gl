"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeFilters = mergeFilters;
exports.replaceFilterDatasetIds = replaceFilterDatasetIds;
exports.isSavedLayerConfigV1 = isSavedLayerConfigV1;
exports.parseLayerConfig = parseLayerConfig;
exports.createLayerFromConfig = createLayerFromConfig;
exports.serializeLayer = serializeLayer;
exports.serializeVisState = serializeVisState;
exports.mergeLayers = mergeLayers;
exports.insertLayerAtRightOrder = insertLayerAtRightOrder;
exports.mergeInteractions = mergeInteractions;
exports.mergeSplitMaps = mergeSplitMaps;
exports.mergeInteractionTooltipConfig = mergeInteractionTooltipConfig;
exports.mergeLayerBlending = mergeLayerBlending;
exports.mergeOverlayBlending = mergeOverlayBlending;
exports.mergeAnimationConfig = mergeAnimationConfig;
exports.validateSavedLayerColumns = validateSavedLayerColumns;
exports.validateColumn = validateColumn;
exports.validateSavedTextLabel = validateSavedTextLabel;
exports.validateSavedVisualChannels = validateSavedVisualChannels;
exports.validateLayersByDatasets = validateLayersByDatasets;
exports.validateLayerWithData = validateLayerWithData;
exports.mergeEditor = mergeEditor;
exports.mergeDatasetsByOrder = mergeDatasetsByOrder;
exports.VIS_STATE_MERGERS = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash.uniq"));

var _lodash2 = _interopRequireDefault(require("lodash.pick"));

var _lodash3 = _interopRequireDefault(require("lodash.flattendeep"));

var _utils = require("@kepler.gl/utils");

var _constants = require("@kepler.gl/constants");

var _schemas = require("@kepler.gl/schemas");

var _table = require("@kepler.gl/table");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Merge loaded filters with current state, if no fields or data are loaded
 * save it for later
 *
 */
function mergeFilters(state, filtersToMerge, fromConfig) {
  var preserveFilterOrder = fromConfig ? filtersToMerge === null || filtersToMerge === void 0 ? void 0 : filtersToMerge.map(function (l) {
    return l.id;
  }) : state.preserveFilterOrder;

  if (!Array.isArray(filtersToMerge) || !filtersToMerge.length) {
    return state;
  }

  var _validateFiltersUpdat = (0, _utils.validateFiltersUpdateDatasets)(state, filtersToMerge),
      validated = _validateFiltersUpdat.validated,
      failed = _validateFiltersUpdat.failed,
      updatedDatasets = _validateFiltersUpdat.updatedDatasets;

  var updatedFilters = insertItemBasedOnPreservedOrder(state.filters, validated, preserveFilterOrder); // merge filter with existing

  updatedFilters = (0, _table.resetFilterGpuMode)(updatedFilters);
  updatedFilters = (0, _table.assignGpuChannels)(updatedFilters); // filter data

  var datasetsToFilter = (0, _lodash["default"])((0, _lodash3["default"])(validated.map(function (f) {
    return f.dataId;
  })));
  var filtered = (0, _utils.applyFiltersToDatasets)(datasetsToFilter, updatedDatasets, updatedFilters, state.layers);
  return _objectSpread(_objectSpread({}, state), {}, {
    filters: updatedFilters,
    datasets: filtered,
    preserveFilterOrder: preserveFilterOrder,
    filterToBeMerged: [].concat((0, _toConsumableArray2["default"])(state.filterToBeMerged), (0, _toConsumableArray2["default"])(failed))
  });
} // replace dataId in saved Filter


function replaceFilterDatasetIds(savedFilter, dataId, dataIdToUse) {
  var replaced = [];
  savedFilter.forEach(function (filter) {
    if (filter.dataId.includes(dataId)) {
      var newDataId = filter.dataId.map(function (d) {
        return d === dataId ? dataIdToUse : d;
      });
      replaced.push(_objectSpread(_objectSpread({}, filter), {}, {
        dataId: newDataId
      }));
    }
  });
  return replaced.length ? replaced : null;
}

function isSavedLayerConfigV1(layerConfig) {
  // exported layer configuration contains visualChannels property
  return layerConfig === null || layerConfig === void 0 ? void 0 : layerConfig.visualChannels;
}

function parseLayerConfig(schema, layerConfig) {
  var _schema$parseSavedCon, _schema$parseSavedCon2, _schema$parseSavedCon3;

  // assume the layer config is current version
  var savedConfig = {
    version: _schemas.CURRENT_VERSION,
    config: {
      visState: {
        layers: [layerConfig],
        layerOrder: [0]
      }
    }
  };
  return (_schema$parseSavedCon = schema.parseSavedConfig(savedConfig)) === null || _schema$parseSavedCon === void 0 ? void 0 : (_schema$parseSavedCon2 = _schema$parseSavedCon.visState) === null || _schema$parseSavedCon2 === void 0 ? void 0 : (_schema$parseSavedCon3 = _schema$parseSavedCon2.layers) === null || _schema$parseSavedCon3 === void 0 ? void 0 : _schema$parseSavedCon3[0];
}

function insertItemBasedOnPreservedOrder(currentItems, items) {
  var preservedOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var defaultStart = arguments.length > 3 ? arguments[3] : undefined;
  var newItems = (0, _toConsumableArray2["default"])(currentItems);

  var _iterator = _createForOfIteratorHelper(items),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      var expectedIdx = preservedOrder.indexOf(item.id); // insertAt the end by default

      var insertAt = defaultStart ? 0 : newItems.length;

      if (expectedIdx > 0) {
        // look for layer to insert after
        var i = expectedIdx + 1;
        var preceedIdx = -1;

        var _loop = function _loop() {
          // keep looking for preceed layer that is already loaded
          var preceedItemId = preservedOrder[i - 1];
          preceedIdx = newItems.findIndex(function (d) {
            return d.id === preceedItemId;
          });
        };

        while (i-- > 0 && preceedIdx < 0) {
          _loop();
        }

        if (preceedIdx > -1) {
          // if found
          insertAt = preceedIdx + 1;
        }
      }

      newItems = (0, _utils.arrayInsert)(newItems, insertAt, item);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return newItems;
}

function createLayerFromConfig(state, layerConfig) {
  // check if the layer config is parsed
  var parsedLayerConfig = isSavedLayerConfigV1(layerConfig) ? parseLayerConfig(state.schema, layerConfig) : layerConfig;

  if (!parsedLayerConfig) {
    return null;
  } // first validate config against dataset


  var _validateLayersByData = validateLayersByDatasets(state.datasets, state.layerClasses, [parsedLayerConfig]),
      validated = _validateLayersByData.validated,
      failed = _validateLayersByData.failed;

  if (failed !== null && failed !== void 0 && failed.length || !validated.length) {
    // failed
    return null;
  }

  var newLayer = validated[0];
  newLayer.updateLayerDomain(state.datasets);
  return newLayer;
}
/**
 * Get loaded layer from state
 */


function serializeLayer(newLayer, schema) {
  var _serializedVisState$l;

  var serializedVisState = serializeVisState({
    layers: [newLayer],
    layerOrder: [0]
  }, schema);
  return serializedVisState === null || serializedVisState === void 0 ? void 0 : (_serializedVisState$l = serializedVisState.layers) === null || _serializedVisState$l === void 0 ? void 0 : _serializedVisState$l[0];
}
/**
 * Get vis state config
 */


function serializeVisState(visState, schema) {
  var _schema$parseSavedCon4;

  var savedState = schema.getConfigToSave({
    visState: visState
  });
  return savedState ? (_schema$parseSavedCon4 = schema.parseSavedConfig(savedState)) === null || _schema$parseSavedCon4 === void 0 ? void 0 : _schema$parseSavedCon4.visState : undefined;
}
/**
 * Merge layers from de-serialized state, if no fields or data are loaded
 * save it for later
 *
 */


function mergeLayers(state) {
  var layersToMerge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var fromConfig = arguments.length > 2 ? arguments[2] : undefined;
  var preserveLayerOrder = fromConfig ? layersToMerge.map(function (l) {
    return l.id;
  }) : state.preserveLayerOrder;

  if (!Array.isArray(layersToMerge) || !layersToMerge.length) {
    return state;
  } // don't merge layer if dataset is being merged


  var unmerged = [];
  var toMerge = [];
  layersToMerge.forEach(function (l) {
    var _l$config;

    if (l !== null && l !== void 0 && (_l$config = l.config) !== null && _l$config !== void 0 && _l$config.dataId && state.isMergingDatasets[l.config.dataId]) {
      unmerged.push(l);
    } else {
      toMerge.push(l);
    }
  });

  var _validateLayersByData2 = validateLayersByDatasets(state.datasets, state.layerClasses, toMerge),
      mergedLayer = _validateLayersByData2.validated,
      failed = _validateLayersByData2.failed;

  unmerged.push.apply(unmerged, (0, _toConsumableArray2["default"])(failed)); // put new layers in front of current layers

  var _insertLayerAtRightOr = insertLayerAtRightOrder(state.layers, mergedLayer, state.layerOrder, preserveLayerOrder),
      newLayerOrder = _insertLayerAtRightOr.newLayerOrder,
      newLayers = _insertLayerAtRightOr.newLayers;

  return _objectSpread(_objectSpread({}, state), {}, {
    layers: newLayers,
    layerOrder: newLayerOrder,
    preserveLayerOrder: preserveLayerOrder,
    layerToBeMerged: [].concat((0, _toConsumableArray2["default"])(state.layerToBeMerged), unmerged)
  });
}

function insertLayerAtRightOrder(currentLayers, layersToInsert, currentOrder) {
  var preservedOrder = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  if (!(layersToInsert !== null && layersToInsert !== void 0 && layersToInsert.length)) {
    return {
      newLayers: currentLayers,
      newLayerOrder: currentOrder
    };
  } // perservedOrder ['a', 'b', 'c'];
  // layerOrder [1, 0, 3]
  // layerOrderMap ['a', 'c']


  var currentLayerQueue = currentOrder.map(function (i) {
    return currentLayers[i];
  });
  var newLayers = currentLayers.concat(layersToInsert);
  var newLayerOrderQueue = insertItemBasedOnPreservedOrder(currentLayerQueue, layersToInsert, preservedOrder, true); // reconstruct layerOrder after insert

  var newLayerOrder = newLayerOrderQueue.map(function (lyr) {
    return newLayers.findIndex(function (l) {
      return l.id === lyr.id;
    });
  });
  return {
    newLayerOrder: newLayerOrder,
    newLayers: newLayers
  };
}
/**
 * Merge interactions with saved config
 *
 */


function mergeInteractions(state, interactionToBeMerged, fromConfig) {
  var merged = {};
  var unmerged = {};

  if (interactionToBeMerged) {
    Object.keys(interactionToBeMerged).forEach(function (key) {
      if (!state.interactionConfig[key]) {
        return;
      }

      var currentConfig = key === 'tooltip' || key === 'brush' ? state.interactionConfig[key].config : null;

      var _ref = interactionToBeMerged[key] || {},
          enabled = _ref.enabled,
          configSaved = (0, _objectWithoutProperties2["default"])(_ref, ["enabled"]);

      var configToMerge = configSaved;

      if (key === 'tooltip') {
        var _mergeInteractionTool = mergeInteractionTooltipConfig(state, configSaved),
            mergedTooltip = _mergeInteractionTool.mergedTooltip,
            unmergedTooltip = _mergeInteractionTool.unmergedTooltip; // merge new dataset tooltips with original dataset tooltips


        configToMerge = {
          fieldsToShow: _objectSpread(_objectSpread({}, currentConfig.fieldsToShow), mergedTooltip)
        };

        if (Object.keys(unmergedTooltip).length) {
          // @ts-expect-error
          unmerged.tooltip = {
            fieldsToShow: unmergedTooltip,
            enabled: Boolean(enabled)
          };
        }
      }

      merged[key] = _objectSpread(_objectSpread({}, state.interactionConfig[key]), {}, {
        enabled: Boolean(enabled)
      }, currentConfig ? {
        config: (0, _lodash2["default"])(_objectSpread(_objectSpread({}, currentConfig), configToMerge), Object.keys(currentConfig))
      } : {});
    });
  }

  var nextState = _objectSpread(_objectSpread({}, state), {}, {
    interactionConfig: _objectSpread(_objectSpread({}, state.interactionConfig), merged),
    interactionToBeMerged: savedUnmergedInteraction(state, unmerged)
  });

  return nextState;
}

function savedUnmergedInteraction(state, unmerged) {
  var _unmerged$tooltip, _unmerged$tooltip2, _state$interactionToB, _state$interactionToB2, _unmerged$tooltip3;

  if (!(unmerged !== null && unmerged !== void 0 && (_unmerged$tooltip = unmerged.tooltip) !== null && _unmerged$tooltip !== void 0 && _unmerged$tooltip.fieldsToShow)) {
    return state.interactionToBeMerged;
  }

  return {
    tooltip: _objectSpread(_objectSpread(_objectSpread({}, state.interactionToBeMerged.tooltip), typeof (unmerged === null || unmerged === void 0 ? void 0 : (_unmerged$tooltip2 = unmerged.tooltip) === null || _unmerged$tooltip2 === void 0 ? void 0 : _unmerged$tooltip2.enabled) === 'boolean' ? {
      enabled: unmerged.tooltip.enabled
    } : {}), {}, {
      fieldsToShow: _objectSpread(_objectSpread({}, (_state$interactionToB = state.interactionToBeMerged) === null || _state$interactionToB === void 0 ? void 0 : (_state$interactionToB2 = _state$interactionToB.tooltip) === null || _state$interactionToB2 === void 0 ? void 0 : _state$interactionToB2.fieldsToShow), unmerged === null || unmerged === void 0 ? void 0 : (_unmerged$tooltip3 = unmerged.tooltip) === null || _unmerged$tooltip3 === void 0 ? void 0 : _unmerged$tooltip3.fieldsToShow)
    })
  };
}

function replaceInteractionDatasetIds(interactionConfig, dataId, dataIdToReplace) {
  var _interactionConfig$to;

  if (interactionConfig !== null && interactionConfig !== void 0 && (_interactionConfig$to = interactionConfig.tooltip) !== null && _interactionConfig$to !== void 0 && _interactionConfig$to.fieldsToShow[dataId]) {
    var _interactionConfig$to2;

    return _objectSpread(_objectSpread({}, interactionConfig), {}, {
      tooltip: _objectSpread(_objectSpread({}, interactionConfig.tooltip), {}, {
        fieldsToShow: (0, _defineProperty2["default"])({}, dataIdToReplace, interactionConfig === null || interactionConfig === void 0 ? void 0 : (_interactionConfig$to2 = interactionConfig.tooltip) === null || _interactionConfig$to2 === void 0 ? void 0 : _interactionConfig$to2.fieldsToShow[dataId])
      })
    });
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


function mergeSplitMaps(state) {
  var splitMaps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var fromConfig = arguments.length > 2 ? arguments[2] : undefined;
  var merged = (0, _toConsumableArray2["default"])(state.splitMaps);
  var unmerged = [];
  splitMaps.forEach(function (sm, i) {
    var entries = Object.entries(sm.layers);

    if (entries.length > 0) {
      entries.forEach(function (_ref2) {
        var _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
            id = _ref3[0],
            value = _ref3[1];

        // check if layer exists
        var pushTo = state.layers.find(function (l) {
          return l.id === id;
        }) ? merged : unmerged; // create map panel if current map is not split

        pushTo[i] = pushTo[i] || {
          layers: pushTo === merged ? (0, _utils.getInitialMapLayersForSplitMap)(state.layers) : []
        };
        pushTo[i].layers = _objectSpread(_objectSpread({}, pushTo[i].layers), {}, (0, _defineProperty2["default"])({}, id, value));
      });
    } else {
      // We are merging if there are no layers in both split map
      merged.push(sm);
    }
  });
  return _objectSpread(_objectSpread({}, state), {}, {
    splitMaps: merged,
    splitMapsToBeMerged: [].concat((0, _toConsumableArray2["default"])(state.splitMapsToBeMerged), unmerged)
  });
}
/**
 * Merge interactionConfig.tooltip with saved config,
 * validate fieldsToShow
 *
 * @param state
 * @param tooltipConfig
 * @return - {mergedTooltip: {}, unmergedTooltip: {}}
 */


function mergeInteractionTooltipConfig(state) {
  var tooltipConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var unmergedTooltip = {};
  var mergedTooltip = {};

  if (!tooltipConfig || !tooltipConfig.fieldsToShow || !Object.keys(tooltipConfig.fieldsToShow).length) {
    return {
      mergedTooltip: mergedTooltip,
      unmergedTooltip: unmergedTooltip
    };
  }

  for (var dataId in tooltipConfig.fieldsToShow) {
    if (!state.datasets[dataId] || state.isMergingDatasets[dataId]) {
      // is not yet loaded
      unmergedTooltip[dataId] = tooltipConfig.fieldsToShow[dataId];
    } else {
      (function () {
        // if dataset is loaded
        var allFields = state.datasets[dataId].fields.map(function (d) {
          return d.name;
        });
        var foundFieldsToShow = tooltipConfig.fieldsToShow[dataId].filter(function (field) {
          return allFields.includes(field.name);
        });
        mergedTooltip[dataId] = foundFieldsToShow;
      })();
    }
  }

  return {
    mergedTooltip: mergedTooltip,
    unmergedTooltip: unmergedTooltip
  };
}
/**
 * Merge layerBlending with saved
 *
 */


function mergeLayerBlending(state, layerBlending, fromConfig) {
  if (layerBlending && _constants.LAYER_BLENDINGS[layerBlending]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      layerBlending: layerBlending
    });
  }

  return state;
}
/**
 * Merge overlayBlending with saved
 */


function mergeOverlayBlending(state, overlayBlending, fromConfig) {
  if (overlayBlending && _constants.OVERLAY_BLENDINGS[overlayBlending]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      overlayBlending: overlayBlending
    });
  }

  return state;
}
/**
 * Merge animation config
 */


function mergeAnimationConfig(state, animation, fromConfig) {
  if (animation && animation.currentTime) {
    return _objectSpread(_objectSpread({}, state), {}, {
      animationConfig: _objectSpread(_objectSpread(_objectSpread({}, state.animationConfig), animation), {}, {
        domain: null
      })
    });
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


function validateSavedLayerColumns(fields) {
  var savedCols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var emptyCols = arguments.length > 2 ? arguments[2] : undefined;
  // Prepare columns for the validator
  var columns = {};

  var _loop2 = function _loop2() {
    var key = _Object$keys[_i];
    columns[key] = _objectSpread({}, emptyCols[key]);
    var saved = savedCols[key];

    if (saved) {
      var fieldIdx = fields.findIndex(function (_ref4) {
        var name = _ref4.name;
        return name === saved;
      });

      if (fieldIdx > -1) {
        // update found columns
        columns[key].fieldIdx = fieldIdx;
        columns[key].value = saved;
      }
    }
  };

  for (var _i = 0, _Object$keys = Object.keys(emptyCols); _i < _Object$keys.length; _i++) {
    _loop2();
  } // find actual column fieldIdx, in case it has changed


  var allColFound = Object.keys(columns).every(function (key) {
    return validateColumn(columns[key], columns, fields);
  });

  if (allColFound) {
    return columns;
  }

  return null;
}

function validateColumn(column, columns, allFields) {
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


function validateSavedTextLabel(fields, _ref5, savedTextLabel) {
  var _ref6 = (0, _slicedToArray2["default"])(_ref5, 1),
      layerTextLabel = _ref6[0];

  var savedTextLabels = Array.isArray(savedTextLabel) ? savedTextLabel : [savedTextLabel]; // validate field

  return savedTextLabels.map(function (textLabel) {
    var field = textLabel.field ? fields.find(function (fd) {
      return Object.keys(textLabel.field).every(function (key) {
        return textLabel.field[key] === fd[key];
      });
    }) : null;
    return Object.keys(layerTextLabel).reduce(function (accu, key) {
      return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, key === 'field' ? field : textLabel[key] || layerTextLabel[key]));
    }, {});
  });
}
/**
 * Validate saved visual channels config with new data,
 * refer to vis-state-schema.js VisualChannelSchemaV1
 */


function validateSavedVisualChannels(fields, newLayer, savedLayer) {
  Object.values(newLayer.visualChannels).forEach(function (_ref7) {
    var field = _ref7.field,
        scale = _ref7.scale,
        key = _ref7.key;
    var foundField;

    if (savedLayer.config) {
      if (savedLayer.config[field]) {
        foundField = fields.find(function (fd) {
          return savedLayer.config && fd.name === savedLayer.config[field].name;
        });
      }

      var foundChannel = _objectSpread(_objectSpread({}, foundField ? (0, _defineProperty2["default"])({}, field, foundField) : {}), savedLayer.config[scale] ? (0, _defineProperty2["default"])({}, scale, savedLayer.config[scale]) : {});

      if (Object.keys(foundChannel).length) {
        newLayer.updateLayerConfig(foundChannel);
      }

      newLayer.validateVisualChannel(key);
    }
  });
  return newLayer;
}

function validateLayersByDatasets(datasets, layerClasses) {
  var layers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var validated = [];
  var failed = [];
  layers.forEach(function (layer) {
    var _layer$config;

    var validateLayer = null;

    if (layer !== null && layer !== void 0 && (_layer$config = layer.config) !== null && _layer$config !== void 0 && _layer$config.dataId) {
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
  return {
    validated: validated,
    failed: failed
  };
}
/**
 * Validate saved layer config with new data,
 * update fieldIdx based on new fields
 */


function validateLayerWithData(_ref10, savedLayer, layerClasses) {
  var fields = _ref10.fields,
      dataId = _ref10.id;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var type = savedLayer.type; // layer doesnt have a valid type

  if (!type || !layerClasses.hasOwnProperty(type) || !savedLayer.config) {
    return null;
  }

  var newLayer = new layerClasses[type]({
    id: savedLayer.id,
    dataId: dataId,
    label: savedLayer.config.label,
    color: savedLayer.config.color,
    isVisible: savedLayer.config.isVisible,
    hidden: savedLayer.config.hidden,
    highlightColor: savedLayer.config.highlightColor
  }); // find column fieldIdx

  var columnConfig = newLayer.getLayerColumns();

  if (Object.keys(columnConfig).length) {
    var columns = validateSavedLayerColumns(fields, savedLayer.config.columns, columnConfig);

    if (columns) {
      newLayer.updateLayerConfig({
        columns: columns
      });
    } else if (!options.allowEmptyColumn) {
      return null;
    }
  } // visual channel field is saved to be {name, type}
  // find visual channel field by matching both name and type
  // refer to vis-state-schema.js VisualChannelSchemaV1


  newLayer = validateSavedVisualChannels(fields, newLayer, savedLayer);
  var textLabel = savedLayer.config.textLabel && newLayer.config.textLabel ? validateSavedTextLabel(fields, newLayer.config.textLabel, savedLayer.config.textLabel) : newLayer.config.textLabel; // copy visConfig over to emptyLayer to make sure it has all the props

  var visConfig = newLayer.copyLayerConfig(newLayer.config.visConfig, savedLayer.config.visConfig || {}, {
    shallowCopy: ['colorRange', 'strokeColorRange']
  });
  newLayer.updateLayerConfig({
    visConfig: visConfig,
    textLabel: textLabel
  });
  return newLayer;
}

function mergeEditor(state, savedEditor) {
  var _savedEditor$visible;

  if (!savedEditor) {
    return state;
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    editor: _objectSpread(_objectSpread({}, state.editor), {}, {
      features: [].concat((0, _toConsumableArray2["default"])(state.editor.features), (0, _toConsumableArray2["default"])(savedEditor.features || [])),
      // if savedEditor.visible is undefined keep state.editor.visible
      visible: (_savedEditor$visible = savedEditor.visible) !== null && _savedEditor$visible !== void 0 ? _savedEditor$visible : state.editor.visible
    })
  });
}
/**
 * Validate saved layer config with new data,
 * update fieldIdx based on new fields
 */


function mergeDatasetsByOrder(state, newDataEntries) {
  var merged = _objectSpread(_objectSpread({}, state.datasets), newDataEntries);

  if (Array.isArray(state.preserveDatasetOrder)) {
    // preserveDatasetOrder  might not include the  new datasets
    var newDatasetIds = Object.keys(merged).filter(function (id) {
      var _state$preserveDatase;

      return !((_state$preserveDatase = state.preserveDatasetOrder) !== null && _state$preserveDatase !== void 0 && _state$preserveDatase.includes(id));
    });
    return [].concat((0, _toConsumableArray2["default"])(state.preserveDatasetOrder), (0, _toConsumableArray2["default"])(newDatasetIds)).reduce(function (accu, dataId) {
      return _objectSpread(_objectSpread({}, accu), merged[dataId] ? (0, _defineProperty2["default"])({}, dataId, merged[dataId]) : {});
    }, {});
  }

  return merged;
}

var VIS_STATE_MERGERS = [{
  merge: mergeLayers,
  prop: 'layers',
  toMergeProp: 'layerToBeMerged',
  preserveOrder: 'preserveLayerOrder'
}, {
  merge: mergeFilters,
  prop: 'filters',
  toMergeProp: 'filterToBeMerged',
  preserveOrder: 'preserveFilterOrder',
  replaceParentDatasetIds: replaceFilterDatasetIds
}, {
  merge: mergeInteractions,
  prop: 'interactionConfig',
  toMergeProp: 'interactionToBeMerged',
  replaceParentDatasetIds: replaceInteractionDatasetIds,
  saveUnmerged: savedUnmergedInteraction
}, {
  merge: mergeLayerBlending,
  prop: 'layerBlending'
}, {
  merge: mergeOverlayBlending,
  prop: 'overlayBlending'
}, {
  merge: mergeSplitMaps,
  prop: 'splitMaps',
  toMergeProp: 'splitMapsToBeMerged'
}, {
  merge: mergeAnimationConfig,
  prop: 'animationConfig'
}, {
  merge: mergeEditor,
  prop: 'editor'
}];
exports.VIS_STATE_MERGERS = VIS_STATE_MERGERS;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zcmMvdmlzLXN0YXRlLW1lcmdlci50cyJdLCJuYW1lcyI6WyJtZXJnZUZpbHRlcnMiLCJzdGF0ZSIsImZpbHRlcnNUb01lcmdlIiwiZnJvbUNvbmZpZyIsInByZXNlcnZlRmlsdGVyT3JkZXIiLCJtYXAiLCJsIiwiaWQiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJ2YWxpZGF0ZWQiLCJmYWlsZWQiLCJ1cGRhdGVkRGF0YXNldHMiLCJ1cGRhdGVkRmlsdGVycyIsImluc2VydEl0ZW1CYXNlZE9uUHJlc2VydmVkT3JkZXIiLCJmaWx0ZXJzIiwiZGF0YXNldHNUb0ZpbHRlciIsImYiLCJkYXRhSWQiLCJmaWx0ZXJlZCIsImxheWVycyIsImRhdGFzZXRzIiwiZmlsdGVyVG9CZU1lcmdlZCIsInJlcGxhY2VGaWx0ZXJEYXRhc2V0SWRzIiwic2F2ZWRGaWx0ZXIiLCJkYXRhSWRUb1VzZSIsInJlcGxhY2VkIiwiZm9yRWFjaCIsImZpbHRlciIsImluY2x1ZGVzIiwibmV3RGF0YUlkIiwiZCIsInB1c2giLCJpc1NhdmVkTGF5ZXJDb25maWdWMSIsImxheWVyQ29uZmlnIiwidmlzdWFsQ2hhbm5lbHMiLCJwYXJzZUxheWVyQ29uZmlnIiwic2NoZW1hIiwic2F2ZWRDb25maWciLCJ2ZXJzaW9uIiwiQ1VSUkVOVF9WRVJTSU9OIiwiY29uZmlnIiwidmlzU3RhdGUiLCJsYXllck9yZGVyIiwicGFyc2VTYXZlZENvbmZpZyIsImN1cnJlbnRJdGVtcyIsIml0ZW1zIiwicHJlc2VydmVkT3JkZXIiLCJkZWZhdWx0U3RhcnQiLCJuZXdJdGVtcyIsIml0ZW0iLCJleHBlY3RlZElkeCIsImluZGV4T2YiLCJpbnNlcnRBdCIsImkiLCJwcmVjZWVkSWR4IiwicHJlY2VlZEl0ZW1JZCIsImZpbmRJbmRleCIsImNyZWF0ZUxheWVyRnJvbUNvbmZpZyIsInBhcnNlZExheWVyQ29uZmlnIiwidmFsaWRhdGVMYXllcnNCeURhdGFzZXRzIiwibGF5ZXJDbGFzc2VzIiwibmV3TGF5ZXIiLCJ1cGRhdGVMYXllckRvbWFpbiIsInNlcmlhbGl6ZUxheWVyIiwic2VyaWFsaXplZFZpc1N0YXRlIiwic2VyaWFsaXplVmlzU3RhdGUiLCJzYXZlZFN0YXRlIiwiZ2V0Q29uZmlnVG9TYXZlIiwidW5kZWZpbmVkIiwibWVyZ2VMYXllcnMiLCJsYXllcnNUb01lcmdlIiwicHJlc2VydmVMYXllck9yZGVyIiwidW5tZXJnZWQiLCJ0b01lcmdlIiwiaXNNZXJnaW5nRGF0YXNldHMiLCJtZXJnZWRMYXllciIsImluc2VydExheWVyQXRSaWdodE9yZGVyIiwibmV3TGF5ZXJPcmRlciIsIm5ld0xheWVycyIsImxheWVyVG9CZU1lcmdlZCIsImN1cnJlbnRMYXllcnMiLCJsYXllcnNUb0luc2VydCIsImN1cnJlbnRPcmRlciIsImN1cnJlbnRMYXllclF1ZXVlIiwiY29uY2F0IiwibmV3TGF5ZXJPcmRlclF1ZXVlIiwibHlyIiwibWVyZ2VJbnRlcmFjdGlvbnMiLCJpbnRlcmFjdGlvblRvQmVNZXJnZWQiLCJtZXJnZWQiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiaW50ZXJhY3Rpb25Db25maWciLCJjdXJyZW50Q29uZmlnIiwiZW5hYmxlZCIsImNvbmZpZ1NhdmVkIiwiY29uZmlnVG9NZXJnZSIsIm1lcmdlSW50ZXJhY3Rpb25Ub29sdGlwQ29uZmlnIiwibWVyZ2VkVG9vbHRpcCIsInVubWVyZ2VkVG9vbHRpcCIsImZpZWxkc1RvU2hvdyIsInRvb2x0aXAiLCJCb29sZWFuIiwibmV4dFN0YXRlIiwic2F2ZWRVbm1lcmdlZEludGVyYWN0aW9uIiwicmVwbGFjZUludGVyYWN0aW9uRGF0YXNldElkcyIsImRhdGFJZFRvUmVwbGFjZSIsIm1lcmdlU3BsaXRNYXBzIiwic3BsaXRNYXBzIiwic20iLCJlbnRyaWVzIiwidmFsdWUiLCJwdXNoVG8iLCJmaW5kIiwic3BsaXRNYXBzVG9CZU1lcmdlZCIsInRvb2x0aXBDb25maWciLCJhbGxGaWVsZHMiLCJmaWVsZHMiLCJuYW1lIiwiZm91bmRGaWVsZHNUb1Nob3ciLCJmaWVsZCIsIm1lcmdlTGF5ZXJCbGVuZGluZyIsImxheWVyQmxlbmRpbmciLCJMQVlFUl9CTEVORElOR1MiLCJtZXJnZU92ZXJsYXlCbGVuZGluZyIsIm92ZXJsYXlCbGVuZGluZyIsIk9WRVJMQVlfQkxFTkRJTkdTIiwibWVyZ2VBbmltYXRpb25Db25maWciLCJhbmltYXRpb24iLCJjdXJyZW50VGltZSIsImFuaW1hdGlvbkNvbmZpZyIsImRvbWFpbiIsInZhbGlkYXRlU2F2ZWRMYXllckNvbHVtbnMiLCJzYXZlZENvbHMiLCJlbXB0eUNvbHMiLCJjb2x1bW5zIiwic2F2ZWQiLCJmaWVsZElkeCIsImFsbENvbEZvdW5kIiwiZXZlcnkiLCJ2YWxpZGF0ZUNvbHVtbiIsImNvbHVtbiIsIm9wdGlvbmFsIiwidmFsaWRhdG9yIiwidmFsaWRhdGVTYXZlZFRleHRMYWJlbCIsInNhdmVkVGV4dExhYmVsIiwibGF5ZXJUZXh0TGFiZWwiLCJzYXZlZFRleHRMYWJlbHMiLCJ0ZXh0TGFiZWwiLCJmZCIsInJlZHVjZSIsImFjY3UiLCJ2YWxpZGF0ZVNhdmVkVmlzdWFsQ2hhbm5lbHMiLCJzYXZlZExheWVyIiwidmFsdWVzIiwic2NhbGUiLCJmb3VuZEZpZWxkIiwiZm91bmRDaGFubmVsIiwidXBkYXRlTGF5ZXJDb25maWciLCJ2YWxpZGF0ZVZpc3VhbENoYW5uZWwiLCJsYXllciIsInZhbGlkYXRlTGF5ZXIiLCJ2YWxpZGF0ZUxheWVyV2l0aERhdGEiLCJvcHRpb25zIiwidHlwZSIsImhhc093blByb3BlcnR5IiwibGFiZWwiLCJjb2xvciIsImlzVmlzaWJsZSIsImhpZGRlbiIsImhpZ2hsaWdodENvbG9yIiwiY29sdW1uQ29uZmlnIiwiZ2V0TGF5ZXJDb2x1bW5zIiwiYWxsb3dFbXB0eUNvbHVtbiIsInZpc0NvbmZpZyIsImNvcHlMYXllckNvbmZpZyIsInNoYWxsb3dDb3B5IiwibWVyZ2VFZGl0b3IiLCJzYXZlZEVkaXRvciIsImVkaXRvciIsImZlYXR1cmVzIiwidmlzaWJsZSIsIm1lcmdlRGF0YXNldHNCeU9yZGVyIiwibmV3RGF0YUVudHJpZXMiLCJwcmVzZXJ2ZURhdGFzZXRPcmRlciIsIm5ld0RhdGFzZXRJZHMiLCJWSVNfU1RBVEVfTUVSR0VSUyIsIm1lcmdlIiwicHJvcCIsInRvTWVyZ2VQcm9wIiwicHJlc2VydmVPcmRlciIsInJlcGxhY2VQYXJlbnREYXRhc2V0SWRzIiwic2F2ZVVubWVyZ2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQVFBOztBQUNBOztBQVdBOzs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0EsWUFBVCxDQUNMQyxLQURLLEVBRUxDLGNBRkssRUFHTEMsVUFISyxFQUlGO0FBQ0gsTUFBTUMsbUJBQW1CLEdBQUdELFVBQVUsR0FDbENELGNBRGtDLGFBQ2xDQSxjQURrQyx1QkFDbENBLGNBQWMsQ0FBRUcsR0FBaEIsQ0FBb0IsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsRUFBTjtBQUFBLEdBQXJCLENBRGtDLEdBRWxDTixLQUFLLENBQUNHLG1CQUZWOztBQUlBLE1BQUksQ0FBQ0ksS0FBSyxDQUFDQyxPQUFOLENBQWNQLGNBQWQsQ0FBRCxJQUFrQyxDQUFDQSxjQUFjLENBQUNRLE1BQXRELEVBQThEO0FBQzVELFdBQU9ULEtBQVA7QUFDRDs7QUFQRSw4QkFTMEMsMENBQThCQSxLQUE5QixFQUFxQ0MsY0FBckMsQ0FUMUM7QUFBQSxNQVNJUyxTQVRKLHlCQVNJQSxTQVRKO0FBQUEsTUFTZUMsTUFUZix5QkFTZUEsTUFUZjtBQUFBLE1BU3VCQyxlQVR2Qix5QkFTdUJBLGVBVHZCOztBQVVILE1BQUlDLGNBQWMsR0FBR0MsK0JBQStCLENBQ2xEZCxLQUFLLENBQUNlLE9BRDRDLEVBRWxETCxTQUZrRCxFQUdsRFAsbUJBSGtELENBQXBELENBVkcsQ0FnQkg7O0FBQ0FVLEVBQUFBLGNBQWMsR0FBRywr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QUksRUFBRTtBQUFwQyxDQXRCcUQsRUF1QnJEO0FBQUNELEVBQUFBLEtBQUssRUFBRWhGLGNBQVI7QUFBd0JpRixFQUFBQSxJQUFJLEVBQUUsV0FBOUI7QUFBMkNDLEVBQUFBLFdBQVcsRUFBRTtBQUF4RCxDQXZCcUQsRUF3QnJEO0FBQUNGLEVBQUFBLEtBQUssRUFBRTVELG9CQUFSO0FBQThCNkQsRUFBQUEsSUFBSSxFQUFFO0FBQXBDLENBeEJxRCxFQXlCckQ7QUFBQ0QsRUFBQUEsS0FBSyxFQUFFVixXQUFSO0FBQXFCVyxFQUFBQSxJQUFJLEVBQUU7QUFBM0IsQ0F6QnFELENBQWhEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHVuaXEgZnJvbSAnbG9kYXNoLnVuaXEnO1xuaW1wb3J0IHBpY2sgZnJvbSAnbG9kYXNoLnBpY2snO1xuaW1wb3J0IGZsYXR0ZW5EZWVwIGZyb20gJ2xvZGFzaC5mbGF0dGVuZGVlcCc7XG5pbXBvcnQge1xuICBhcnJheUluc2VydCxcbiAgZ2V0SW5pdGlhbE1hcExheWVyc0ZvclNwbGl0TWFwLFxuICBhcHBseUZpbHRlcnNUb0RhdGFzZXRzLFxuICB2YWxpZGF0ZUZpbHRlcnNVcGRhdGVEYXRhc2V0c1xufSBmcm9tICdAa2VwbGVyLmdsL3V0aWxzJztcblxuaW1wb3J0IHtMYXllckNvbHVtbnMsIExheWVyQ29sdW1uLCBMYXllcn0gZnJvbSAnQGtlcGxlci5nbC9sYXllcnMnO1xuaW1wb3J0IHtMQVlFUl9CTEVORElOR1MsIE9WRVJMQVlfQkxFTkRJTkdTfSBmcm9tICdAa2VwbGVyLmdsL2NvbnN0YW50cyc7XG5pbXBvcnQge0NVUlJFTlRfVkVSU0lPTiwgVmlzU3RhdGUsIFZpc1N0YXRlTWVyZ2VycywgS2VwbGVyR0xTY2hlbWFDbGFzc30gZnJvbSAnQGtlcGxlci5nbC9zY2hlbWFzJztcblxuaW1wb3J0IHtcbiAgUGFyc2VkTGF5ZXIsXG4gIFBhcnNlZFZpc1N0YXRlLFxuICBTYXZlZEludGVyYWN0aW9uQ29uZmlnLFxuICBUb29sdGlwSW5mbyxcbiAgU2F2ZWRFZGl0b3IsXG4gIFBhcnNlZENvbmZpZyxcbiAgRmlsdGVyXG59IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuaW1wb3J0IHtLZXBsZXJUYWJsZSwgRGF0YXNldHMsIGFzc2lnbkdwdUNoYW5uZWxzLCByZXNldEZpbHRlckdwdU1vZGV9IGZyb20gJ0BrZXBsZXIuZ2wvdGFibGUnO1xuXG4vKipcbiAqIE1lcmdlIGxvYWRlZCBmaWx0ZXJzIHdpdGggY3VycmVudCBzdGF0ZSwgaWYgbm8gZmllbGRzIG9yIGRhdGEgYXJlIGxvYWRlZFxuICogc2F2ZSBpdCBmb3IgbGF0ZXJcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUZpbHRlcnM8UyBleHRlbmRzIFZpc1N0YXRlPihcbiAgc3RhdGU6IFMsXG4gIGZpbHRlcnNUb01lcmdlOiBOb25OdWxsYWJsZTxQYXJzZWRDb25maWdbJ3Zpc1N0YXRlJ10+WydmaWx0ZXJzJ10sXG4gIGZyb21Db25maWc/OiBib29sZWFuXG4pOiBTIHtcbiAgY29uc3QgcHJlc2VydmVGaWx0ZXJPcmRlciA9IGZyb21Db25maWdcbiAgICA/IGZpbHRlcnNUb01lcmdlPy5tYXAobCA9PiBsLmlkKVxuICAgIDogc3RhdGUucHJlc2VydmVGaWx0ZXJPcmRlcjtcblxuICBpZiAoIUFycmF5LmlzQXJyYXkoZmlsdGVyc1RvTWVyZ2UpIHx8ICFmaWx0ZXJzVG9NZXJnZS5sZW5ndGgpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBjb25zdCB7dmFsaWRhdGVkLCBmYWlsZWQsIHVwZGF0ZWREYXRhc2V0c30gPSB2YWxpZGF0ZUZpbHRlcnNVcGRhdGVEYXRhc2V0cyhzdGF0ZSwgZmlsdGVyc1RvTWVyZ2UpO1xuICBsZXQgdXBkYXRlZEZpbHRlcnMgPSBpbnNlcnRJdGVtQmFzZWRPblByZXNlcnZlZE9yZGVyKFxuICAgIHN0YXRlLmZpbHRlcnMsXG4gICAgdmFsaWRhdGVkLFxuICAgIHByZXNlcnZlRmlsdGVyT3JkZXJcbiAgKTtcblxuICAvLyBtZXJnZSBmaWx0ZXIgd2l0aCBleGlzdGluZ1xuICB1cGRhdGVkRmlsdGVycyA9IHJlc2V0RmlsdGVyR3B1TW9kZSh1cGRhdGVkRmlsdGVycyk7XG4gIHVwZGF0ZWRGaWx0ZXJzID0gYXNzaWduR3B1Q2hhbm5lbHModXBkYXRlZEZpbHRlcnMpO1xuICAvLyBmaWx0ZXIgZGF0YVxuICBjb25zdCBkYXRhc2V0c1RvRmlsdGVyID0gdW5pcShmbGF0dGVuRGVlcCh2YWxpZGF0ZWQubWFwKGYgPT4gZi5kYXRhSWQpKSk7XG5cbiAgY29uc3QgZmlsdGVyZWQgPSBhcHBseUZpbHRlcnNUb0RhdGFzZXRzKFxuICAgIGRhdGFzZXRzVG9GaWx0ZXIsXG4gICAgdXBkYXRlZERhdGFzZXRzLFxuICAgIHVwZGF0ZWRGaWx0ZXJzLFxuICAgIHN0YXRlLmxheWVyc1xuICApO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgZmlsdGVyczogdXBkYXRlZEZpbHRlcnMsXG4gICAgZGF0YXNldHM6IGZpbHRlcmVkLFxuICAgIHByZXNlcnZlRmlsdGVyT3JkZXIsXG4gICAgZmlsdGVyVG9CZU1lcmdlZDogWy4uLnN0YXRlLmZpbHRlclRvQmVNZXJnZWQsIC4uLmZhaWxlZF1cbiAgfTtcbn1cblxuLy8gcmVwbGFjZSBkYXRhSWQgaW4gc2F2ZWQgRmlsdGVyXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUZpbHRlckRhdGFzZXRJZHMoXG4gIHNhdmVkRmlsdGVyOiBGaWx0ZXJbXSxcbiAgZGF0YUlkOiBzdHJpbmcsXG4gIGRhdGFJZFRvVXNlOiBzdHJpbmdcbikge1xuICBjb25zdCByZXBsYWNlZDogRmlsdGVyW10gPSBbXTtcbiAgc2F2ZWRGaWx0ZXIuZm9yRWFjaChmaWx0ZXIgPT4ge1xuICAgIGlmIChmaWx0ZXIuZGF0YUlkLmluY2x1ZGVzKGRhdGFJZCkpIHtcbiAgICAgIGNvbnN0IG5ld0RhdGFJZCA9IGZpbHRlci5kYXRhSWQubWFwKGQgPT4gKGQgPT09IGRhdGFJZCA/IGRhdGFJZFRvVXNlIDogZCkpO1xuICAgICAgcmVwbGFjZWQucHVzaCh7XG4gICAgICAgIC4uLmZpbHRlcixcbiAgICAgICAgZGF0YUlkOiBuZXdEYXRhSWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXBsYWNlZC5sZW5ndGggPyByZXBsYWNlZCA6IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1NhdmVkTGF5ZXJDb25maWdWMShsYXllckNvbmZpZzogYW55KTogYm9vbGVhbiB7XG4gIC8vIGV4cG9ydGVkIGxheWVyIGNvbmZpZ3VyYXRpb24gY29udGFpbnMgdmlzdWFsQ2hhbm5lbHMgcHJvcGVydHlcbiAgcmV0dXJuIGxheWVyQ29uZmlnPy52aXN1YWxDaGFubmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTGF5ZXJDb25maWcoXG4gIHNjaGVtYTogS2VwbGVyR0xTY2hlbWFDbGFzcyxcbiAgbGF5ZXJDb25maWc6IGFueVxuKTogUGFyc2VkTGF5ZXIgfCB1bmRlZmluZWQge1xuICAvLyBhc3N1bWUgdGhlIGxheWVyIGNvbmZpZyBpcyBjdXJyZW50IHZlcnNpb25cbiAgY29uc3Qgc2F2ZWRDb25maWcgPSB7XG4gICAgdmVyc2lvbjogQ1VSUkVOVF9WRVJTSU9OLFxuICAgIGNvbmZpZzoge1xuICAgICAgdmlzU3RhdGU6IHtsYXllcnM6IFtsYXllckNvbmZpZ10sIGxheWVyT3JkZXI6IFswXX1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHNjaGVtYS5wYXJzZVNhdmVkQ29uZmlnKHNhdmVkQ29uZmlnKT8udmlzU3RhdGU/LmxheWVycz8uWzBdO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRJdGVtQmFzZWRPblByZXNlcnZlZE9yZGVyKFxuICBjdXJyZW50SXRlbXM6IEZpbHRlcltdLFxuICBpdGVtczogRmlsdGVyW10sXG4gIHByZXNlcnZlZE9yZGVyOiBhbnlbXSA9IFtdLFxuICBkZWZhdWx0U3RhcnQ/OiBib29sZWFuXG4pIHtcbiAgbGV0IG5ld0l0ZW1zID0gWy4uLmN1cnJlbnRJdGVtc107XG5cbiAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgY29uc3QgZXhwZWN0ZWRJZHggPSBwcmVzZXJ2ZWRPcmRlci5pbmRleE9mKGl0ZW0uaWQpO1xuICAgIC8vIGluc2VydEF0IHRoZSBlbmQgYnkgZGVmYXVsdFxuICAgIGxldCBpbnNlcnRBdCA9IGRlZmF1bHRTdGFydCA/IDAgOiBuZXdJdGVtcy5sZW5ndGg7XG4gICAgaWYgKGV4cGVjdGVkSWR4ID4gMCkge1xuICAgICAgLy8gbG9vayBmb3IgbGF5ZXIgdG8gaW5zZXJ0IGFmdGVyXG4gICAgICBsZXQgaSA9IGV4cGVjdGVkSWR4ICsgMTtcbiAgICAgIGxldCBwcmVjZWVkSWR4ID0gLTE7XG4gICAgICB3aGlsZSAoaS0tID4gMCAmJiBwcmVjZWVkSWR4IDwgMCkge1xuICAgICAgICAvLyBrZWVwIGxvb2tpbmcgZm9yIHByZWNlZWQgbGF5ZXIgdGhhdCBpcyBhbHJlYWR5IGxvYWRlZFxuICAgICAgICBjb25zdCBwcmVjZWVkSXRlbUlkID0gcHJlc2VydmVkT3JkZXJbaSAtIDFdO1xuICAgICAgICBwcmVjZWVkSWR4ID0gbmV3SXRlbXMuZmluZEluZGV4KGQgPT4gZC5pZCA9PT0gcHJlY2VlZEl0ZW1JZCk7XG4gICAgICB9XG4gICAgICBpZiAocHJlY2VlZElkeCA+IC0xKSB7XG4gICAgICAgIC8vIGlmIGZvdW5kXG4gICAgICAgIGluc2VydEF0ID0gcHJlY2VlZElkeCArIDE7XG4gICAgICB9XG4gICAgfVxuICAgIG5ld0l0ZW1zID0gYXJyYXlJbnNlcnQobmV3SXRlbXMsIGluc2VydEF0LCBpdGVtKTtcbiAgfVxuICByZXR1cm4gbmV3SXRlbXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMYXllckZyb21Db25maWcoc3RhdGU6IFZpc1N0YXRlLCBsYXllckNvbmZpZzogYW55KTogTGF5ZXIgfCBudWxsIHtcbiAgLy8gY2hlY2sgaWYgdGhlIGxheWVyIGNvbmZpZyBpcyBwYXJzZWRcbiAgY29uc3QgcGFyc2VkTGF5ZXJDb25maWcgPSBpc1NhdmVkTGF5ZXJDb25maWdWMShsYXllckNvbmZpZylcbiAgICA/IHBhcnNlTGF5ZXJDb25maWcoc3RhdGUuc2NoZW1hLCBsYXllckNvbmZpZylcbiAgICA6IGxheWVyQ29uZmlnO1xuXG4gIGlmICghcGFyc2VkTGF5ZXJDb25maWcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvLyBmaXJzdCB2YWxpZGF0ZSBjb25maWcgYWdhaW5zdCBkYXRhc2V0XG4gIGNvbnN0IHt2YWxpZGF0ZWQsIGZhaWxlZH0gPSB2YWxpZGF0ZUxheWVyc0J5RGF0YXNldHMoc3RhdGUuZGF0YXNldHMsIHN0YXRlLmxheWVyQ2xhc3NlcywgW1xuICAgIHBhcnNlZExheWVyQ29uZmlnXG4gIF0pO1xuXG4gIGlmIChmYWlsZWQ/Lmxlbmd0aCB8fCAhdmFsaWRhdGVkLmxlbmd0aCkge1xuICAgIC8vIGZhaWxlZFxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgbmV3TGF5ZXIgPSB2YWxpZGF0ZWRbMF07XG4gIG5ld0xheWVyLnVwZGF0ZUxheWVyRG9tYWluKHN0YXRlLmRhdGFzZXRzKTtcbiAgcmV0dXJuIG5ld0xheWVyO1xufVxuXG4vKipcbiAqIEdldCBsb2FkZWQgbGF5ZXIgZnJvbSBzdGF0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplTGF5ZXIoXG4gIG5ld0xheWVyOiBMYXllcixcbiAgc2NoZW1hOiBLZXBsZXJHTFNjaGVtYUNsYXNzXG4pOiBQYXJzZWRMYXllciB8IHVuZGVmaW5lZCB7XG4gIGNvbnN0IHNlcmlhbGl6ZWRWaXNTdGF0ZSA9IHNlcmlhbGl6ZVZpc1N0YXRlKHtsYXllcnM6IFtuZXdMYXllcl0sIGxheWVyT3JkZXI6IFswXX0sIHNjaGVtYSk7XG4gIHJldHVybiBzZXJpYWxpemVkVmlzU3RhdGU/LmxheWVycz8uWzBdO1xufVxuXG4vKipcbiAqIEdldCB2aXMgc3RhdGUgY29uZmlnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVWaXNTdGF0ZShcbiAgdmlzU3RhdGU6IFBhcnRpYWw8VmlzU3RhdGU+LFxuICBzY2hlbWE6IEtlcGxlckdMU2NoZW1hQ2xhc3Ncbik6IFBhcnNlZFZpc1N0YXRlIHwgdW5kZWZpbmVkIHtcbiAgY29uc3Qgc2F2ZWRTdGF0ZSA9IHNjaGVtYS5nZXRDb25maWdUb1NhdmUoe1xuICAgIHZpc1N0YXRlXG4gIH0pO1xuICByZXR1cm4gc2F2ZWRTdGF0ZSA/IHNjaGVtYS5wYXJzZVNhdmVkQ29uZmlnKHNhdmVkU3RhdGUpPy52aXNTdGF0ZSA6IHVuZGVmaW5lZDtcbn1cbi8qKlxuICogTWVyZ2UgbGF5ZXJzIGZyb20gZGUtc2VyaWFsaXplZCBzdGF0ZSwgaWYgbm8gZmllbGRzIG9yIGRhdGEgYXJlIGxvYWRlZFxuICogc2F2ZSBpdCBmb3IgbGF0ZXJcbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUxheWVyczxTIGV4dGVuZHMgVmlzU3RhdGU+KFxuICBzdGF0ZTogUyxcbiAgbGF5ZXJzVG9NZXJnZTogTm9uTnVsbGFibGU8UGFyc2VkQ29uZmlnWyd2aXNTdGF0ZSddPlsnbGF5ZXJzJ10gPSBbXSxcbiAgZnJvbUNvbmZpZz86IGJvb2xlYW5cbik6IFMge1xuICBjb25zdCBwcmVzZXJ2ZUxheWVyT3JkZXIgPSBmcm9tQ29uZmlnID8gbGF5ZXJzVG9NZXJnZS5tYXAobCA9PiBsLmlkKSA6IHN0YXRlLnByZXNlcnZlTGF5ZXJPcmRlcjtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGxheWVyc1RvTWVyZ2UpIHx8ICFsYXllcnNUb01lcmdlLmxlbmd0aCkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICAvLyBkb24ndCBtZXJnZSBsYXllciBpZiBkYXRhc2V0IGlzIGJlaW5nIG1lcmdlZFxuICBjb25zdCB1bm1lcmdlZDogUGFyc2VkTGF5ZXJbXSA9IFtdO1xuICBjb25zdCB0b01lcmdlOiBQYXJzZWRMYXllcltdID0gW107XG4gIGxheWVyc1RvTWVyZ2UuZm9yRWFjaCgobDogUGFyc2VkTGF5ZXIpID0+IHtcbiAgICBpZiAobD8uY29uZmlnPy5kYXRhSWQgJiYgc3RhdGUuaXNNZXJnaW5nRGF0YXNldHNbbC5jb25maWcuZGF0YUlkXSkge1xuICAgICAgdW5tZXJnZWQucHVzaChsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9NZXJnZS5wdXNoKGwpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3Qge3ZhbGlkYXRlZDogbWVyZ2VkTGF5ZXIsIGZhaWxlZH0gPSB2YWxpZGF0ZUxheWVyc0J5RGF0YXNldHMoXG4gICAgc3RhdGUuZGF0YXNldHMsXG4gICAgc3RhdGUubGF5ZXJDbGFzc2VzLFxuICAgIHRvTWVyZ2VcbiAgKTtcbiAgdW5tZXJnZWQucHVzaCguLi5mYWlsZWQpO1xuICAvLyBwdXQgbmV3IGxheWVycyBpbiBmcm9udCBvZiBjdXJyZW50IGxheWVyc1xuICBjb25zdCB7bmV3TGF5ZXJPcmRlciwgbmV3TGF5ZXJzfSA9IGluc2VydExheWVyQXRSaWdodE9yZGVyKFxuICAgIHN0YXRlLmxheWVycyxcbiAgICBtZXJnZWRMYXllcixcbiAgICBzdGF0ZS5sYXllck9yZGVyLFxuICAgIHByZXNlcnZlTGF5ZXJPcmRlclxuICApO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgbGF5ZXJzOiBuZXdMYXllcnMsXG4gICAgbGF5ZXJPcmRlcjogbmV3TGF5ZXJPcmRlcixcbiAgICBwcmVzZXJ2ZUxheWVyT3JkZXIsXG4gICAgbGF5ZXJUb0JlTWVyZ2VkOiBbLi4uc3RhdGUubGF5ZXJUb0JlTWVyZ2VkLCAuLi51bm1lcmdlZF1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluc2VydExheWVyQXRSaWdodE9yZGVyKFxuICBjdXJyZW50TGF5ZXJzLFxuICBsYXllcnNUb0luc2VydCxcbiAgY3VycmVudE9yZGVyLFxuICBwcmVzZXJ2ZWRPcmRlcjogc3RyaW5nW10gPSBbXVxuKSB7XG4gIGlmICghbGF5ZXJzVG9JbnNlcnQ/Lmxlbmd0aCkge1xuICAgIHJldHVybiB7bmV3TGF5ZXJzOiBjdXJyZW50TGF5ZXJzLCBuZXdMYXllck9yZGVyOiBjdXJyZW50T3JkZXJ9O1xuICB9XG4gIC8vIHBlcnNlcnZlZE9yZGVyIFsnYScsICdiJywgJ2MnXTtcbiAgLy8gbGF5ZXJPcmRlciBbMSwgMCwgM11cbiAgLy8gbGF5ZXJPcmRlck1hcCBbJ2EnLCAnYyddXG4gIGNvbnN0IGN1cnJlbnRMYXllclF1ZXVlID0gY3VycmVudE9yZGVyLm1hcChpID0+IGN1cnJlbnRMYXllcnNbaV0pO1xuICBjb25zdCBuZXdMYXllcnMgPSBjdXJyZW50TGF5ZXJzLmNvbmNhdChsYXllcnNUb0luc2VydCk7XG4gIGNvbnN0IG5ld0xheWVyT3JkZXJRdWV1ZSA9IGluc2VydEl0ZW1CYXNlZE9uUHJlc2VydmVkT3JkZXIoXG4gICAgY3VycmVudExheWVyUXVldWUsXG4gICAgbGF5ZXJzVG9JbnNlcnQsXG4gICAgcHJlc2VydmVkT3JkZXIsXG4gICAgdHJ1ZVxuICApO1xuXG4gIC8vIHJlY29uc3RydWN0IGxheWVyT3JkZXIgYWZ0ZXIgaW5zZXJ0XG4gIGNvbnN0IG5ld0xheWVyT3JkZXIgPSBuZXdMYXllck9yZGVyUXVldWUubWFwKGx5ciA9PiBuZXdMYXllcnMuZmluZEluZGV4KGwgPT4gbC5pZCA9PT0gbHlyLmlkKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdMYXllck9yZGVyLFxuICAgIG5ld0xheWVyc1xuICB9O1xufVxuXG4vKipcbiAqIE1lcmdlIGludGVyYWN0aW9ucyB3aXRoIHNhdmVkIGNvbmZpZ1xuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlSW50ZXJhY3Rpb25zPFMgZXh0ZW5kcyBWaXNTdGF0ZT4oXG4gIHN0YXRlOiBTLFxuICBpbnRlcmFjdGlvblRvQmVNZXJnZWQ6IFBhcnRpYWw8U2F2ZWRJbnRlcmFjdGlvbkNvbmZpZz4gfCB1bmRlZmluZWQsXG4gIGZyb21Db25maWc/OiBib29sZWFuXG4pOiBTIHtcbiAgY29uc3QgbWVyZ2VkOiBQYXJ0aWFsPFNhdmVkSW50ZXJhY3Rpb25Db25maWc+ID0ge307XG4gIGNvbnN0IHVubWVyZ2VkOiBQYXJ0aWFsPFNhdmVkSW50ZXJhY3Rpb25Db25maWc+ID0ge307XG5cbiAgaWYgKGludGVyYWN0aW9uVG9CZU1lcmdlZCkge1xuICAgIChPYmplY3Qua2V5cyhpbnRlcmFjdGlvblRvQmVNZXJnZWQpIGFzIEFycmF5PGtleW9mIFNhdmVkSW50ZXJhY3Rpb25Db25maWc+KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAoIXN0YXRlLmludGVyYWN0aW9uQ29uZmlnW2tleV0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjdXJyZW50Q29uZmlnID1cbiAgICAgICAga2V5ID09PSAndG9vbHRpcCcgfHwga2V5ID09PSAnYnJ1c2gnID8gc3RhdGUuaW50ZXJhY3Rpb25Db25maWdba2V5XS5jb25maWcgOiBudWxsO1xuXG4gICAgICBjb25zdCB7ZW5hYmxlZCwgLi4uY29uZmlnU2F2ZWR9ID0gaW50ZXJhY3Rpb25Ub0JlTWVyZ2VkW2tleV0gfHwge307XG5cbiAgICAgIGxldCBjb25maWdUb01lcmdlID0gY29uZmlnU2F2ZWQ7XG5cbiAgICAgIGlmIChrZXkgPT09ICd0b29sdGlwJykge1xuICAgICAgICBjb25zdCB7bWVyZ2VkVG9vbHRpcCwgdW5tZXJnZWRUb29sdGlwfSA9IG1lcmdlSW50ZXJhY3Rpb25Ub29sdGlwQ29uZmlnKFxuICAgICAgICAgIHN0YXRlLFxuICAgICAgICAgIGNvbmZpZ1NhdmVkIGFzIFNhdmVkSW50ZXJhY3Rpb25Db25maWdbJ3Rvb2x0aXAnXVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIG1lcmdlIG5ldyBkYXRhc2V0IHRvb2x0aXBzIHdpdGggb3JpZ2luYWwgZGF0YXNldCB0b29sdGlwc1xuICAgICAgICBjb25maWdUb01lcmdlID0ge1xuICAgICAgICAgIGZpZWxkc1RvU2hvdzoge1xuICAgICAgICAgICAgLi4uKGN1cnJlbnRDb25maWcgYXMgVG9vbHRpcEluZm9bJ2NvbmZpZyddKS5maWVsZHNUb1Nob3csXG4gICAgICAgICAgICAuLi5tZXJnZWRUb29sdGlwXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh1bm1lcmdlZFRvb2x0aXApLmxlbmd0aCkge1xuICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgICB1bm1lcmdlZC50b29sdGlwID0ge2ZpZWxkc1RvU2hvdzogdW5tZXJnZWRUb29sdGlwLCBlbmFibGVkOiBCb29sZWFuKGVuYWJsZWQpfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZXJnZWRba2V5XSA9IHtcbiAgICAgICAgLi4uc3RhdGUuaW50ZXJhY3Rpb25Db25maWdba2V5XSxcbiAgICAgICAgZW5hYmxlZDogQm9vbGVhbihlbmFibGVkKSxcbiAgICAgICAgLi4uKGN1cnJlbnRDb25maWdcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgY29uZmlnOiBwaWNrKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRDb25maWcsXG4gICAgICAgICAgICAgICAgICAuLi5jb25maWdUb01lcmdlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhjdXJyZW50Q29uZmlnKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiB7fSlcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBuZXh0U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgaW50ZXJhY3Rpb25Db25maWc6IHtcbiAgICAgIC4uLnN0YXRlLmludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgLi4ubWVyZ2VkXG4gICAgfSxcbiAgICBpbnRlcmFjdGlvblRvQmVNZXJnZWQ6IHNhdmVkVW5tZXJnZWRJbnRlcmFjdGlvbihzdGF0ZSwgdW5tZXJnZWQpXG4gIH07XG4gIHJldHVybiBuZXh0U3RhdGU7XG59XG5cbmZ1bmN0aW9uIHNhdmVkVW5tZXJnZWRJbnRlcmFjdGlvbjxTIGV4dGVuZHMgVmlzU3RhdGU+KFxuICBzdGF0ZTogUyxcbiAgdW5tZXJnZWQ6IFBhcnRpYWw8U2F2ZWRJbnRlcmFjdGlvbkNvbmZpZz5cbikge1xuICBpZiAoIXVubWVyZ2VkPy50b29sdGlwPy5maWVsZHNUb1Nob3cpIHtcbiAgICByZXR1cm4gc3RhdGUuaW50ZXJhY3Rpb25Ub0JlTWVyZ2VkO1xuICB9XG4gIHJldHVybiB7XG4gICAgdG9vbHRpcDoge1xuICAgICAgLi4uc3RhdGUuaW50ZXJhY3Rpb25Ub0JlTWVyZ2VkLnRvb2x0aXAsXG4gICAgICAuLi4odHlwZW9mIHVubWVyZ2VkPy50b29sdGlwPy5lbmFibGVkID09PSAnYm9vbGVhbidcbiAgICAgICAgPyB7ZW5hYmxlZDogdW5tZXJnZWQudG9vbHRpcC5lbmFibGVkfVxuICAgICAgICA6IHt9KSxcbiAgICAgIGZpZWxkc1RvU2hvdzoge1xuICAgICAgICAuLi5zdGF0ZS5pbnRlcmFjdGlvblRvQmVNZXJnZWQ/LnRvb2x0aXA/LmZpZWxkc1RvU2hvdyxcbiAgICAgICAgLi4udW5tZXJnZWQ/LnRvb2x0aXA/LmZpZWxkc1RvU2hvd1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUludGVyYWN0aW9uRGF0YXNldElkcyhpbnRlcmFjdGlvbkNvbmZpZywgZGF0YUlkOiBzdHJpbmcsIGRhdGFJZFRvUmVwbGFjZTogc3RyaW5nKSB7XG4gIGlmIChpbnRlcmFjdGlvbkNvbmZpZz8udG9vbHRpcD8uZmllbGRzVG9TaG93W2RhdGFJZF0pIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uaW50ZXJhY3Rpb25Db25maWcsXG4gICAgICB0b29sdGlwOiB7XG4gICAgICAgIC4uLmludGVyYWN0aW9uQ29uZmlnLnRvb2x0aXAsXG4gICAgICAgIGZpZWxkc1RvU2hvdzoge1xuICAgICAgICAgIFtkYXRhSWRUb1JlcGxhY2VdOiBpbnRlcmFjdGlvbkNvbmZpZz8udG9vbHRpcD8uZmllbGRzVG9TaG93W2RhdGFJZF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG4vKipcbiAqIE1lcmdlIHNwbGl0TWFwcyBjb25maWcgd2l0aCBjdXJyZW50IHZpc1N0ZXRlLlxuICogMS4gaWYgY3VycmVudCBtYXAgaXMgc3BsaXQsIGJ1dCBzcGxpdE1hcCBET0VTTk9UIGNvbnRhaW4gbWFwc1xuICogICAgOiBkb24ndCBtZXJnZSBhbnl0aGluZ1xuICogMi4gaWYgY3VycmVudCBtYXAgaXMgTk9UIHNwbGl0LCBidXQgc3BsaXRNYXBzIGNvbnRhaW4gbWFwc1xuICogICAgOiBhZGQgdG8gc3BsaXRNYXBzLCBhbmQgYWRkIGN1cnJlbnQgbGF5ZXJzIHRvIHNwbGl0TWFwc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VTcGxpdE1hcHM8UyBleHRlbmRzIFZpc1N0YXRlPihcbiAgc3RhdGU6IFMsXG4gIHNwbGl0TWFwczogTm9uTnVsbGFibGU8UGFyc2VkQ29uZmlnWyd2aXNTdGF0ZSddPlsnc3BsaXRNYXBzJ10gPSBbXSxcbiAgZnJvbUNvbmZpZz86IGJvb2xlYW5cbik6IFMge1xuICBjb25zdCBtZXJnZWQgPSBbLi4uc3RhdGUuc3BsaXRNYXBzXTtcbiAgY29uc3QgdW5tZXJnZWQgPSBbXTtcbiAgc3BsaXRNYXBzLmZvckVhY2goKHNtLCBpKSA9PiB7XG4gICAgY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKHNtLmxheWVycyk7XG4gICAgaWYgKGVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChbaWQsIHZhbHVlXSkgPT4ge1xuICAgICAgICAvLyBjaGVjayBpZiBsYXllciBleGlzdHNcbiAgICAgICAgY29uc3QgcHVzaFRvID0gc3RhdGUubGF5ZXJzLmZpbmQobCA9PiBsLmlkID09PSBpZCkgPyBtZXJnZWQgOiB1bm1lcmdlZDtcblxuICAgICAgICAvLyBjcmVhdGUgbWFwIHBhbmVsIGlmIGN1cnJlbnQgbWFwIGlzIG5vdCBzcGxpdFxuICAgICAgICBwdXNoVG9baV0gPSBwdXNoVG9baV0gfHwge1xuICAgICAgICAgIGxheWVyczogcHVzaFRvID09PSBtZXJnZWQgPyBnZXRJbml0aWFsTWFwTGF5ZXJzRm9yU3BsaXRNYXAoc3RhdGUubGF5ZXJzKSA6IFtdXG4gICAgICAgIH07XG4gICAgICAgIHB1c2hUb1tpXS5sYXllcnMgPSB7XG4gICAgICAgICAgLi4ucHVzaFRvW2ldLmxheWVycyxcbiAgICAgICAgICBbaWRdOiB2YWx1ZVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIGFyZSBtZXJnaW5nIGlmIHRoZXJlIGFyZSBubyBsYXllcnMgaW4gYm90aCBzcGxpdCBtYXBcbiAgICAgIG1lcmdlZC5wdXNoKHNtKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgc3BsaXRNYXBzOiBtZXJnZWQsXG4gICAgc3BsaXRNYXBzVG9CZU1lcmdlZDogWy4uLnN0YXRlLnNwbGl0TWFwc1RvQmVNZXJnZWQsIC4uLnVubWVyZ2VkXVxuICB9O1xufVxuXG4vKipcbiAqIE1lcmdlIGludGVyYWN0aW9uQ29uZmlnLnRvb2x0aXAgd2l0aCBzYXZlZCBjb25maWcsXG4gKiB2YWxpZGF0ZSBmaWVsZHNUb1Nob3dcbiAqXG4gKiBAcGFyYW0gc3RhdGVcbiAqIEBwYXJhbSB0b29sdGlwQ29uZmlnXG4gKiBAcmV0dXJuIC0ge21lcmdlZFRvb2x0aXA6IHt9LCB1bm1lcmdlZFRvb2x0aXA6IHt9fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VJbnRlcmFjdGlvblRvb2x0aXBDb25maWcoXG4gIHN0YXRlOiBWaXNTdGF0ZSxcbiAgdG9vbHRpcENvbmZpZzogUGljazxUb29sdGlwSW5mb1snY29uZmlnJ10sICdmaWVsZHNUb1Nob3cnPiB8IG51bGwgPSBudWxsXG4pIHtcbiAgY29uc3QgdW5tZXJnZWRUb29sdGlwOiBUb29sdGlwSW5mb1snY29uZmlnJ11bJ2ZpZWxkc1RvU2hvdyddID0ge307XG4gIGNvbnN0IG1lcmdlZFRvb2x0aXA6IFRvb2x0aXBJbmZvWydjb25maWcnXVsnZmllbGRzVG9TaG93J10gPSB7fTtcblxuICBpZiAoXG4gICAgIXRvb2x0aXBDb25maWcgfHxcbiAgICAhdG9vbHRpcENvbmZpZy5maWVsZHNUb1Nob3cgfHxcbiAgICAhT2JqZWN0LmtleXModG9vbHRpcENvbmZpZy5maWVsZHNUb1Nob3cpLmxlbmd0aFxuICApIHtcbiAgICByZXR1cm4ge21lcmdlZFRvb2x0aXAsIHVubWVyZ2VkVG9vbHRpcH07XG4gIH1cblxuICBmb3IgKGNvbnN0IGRhdGFJZCBpbiB0b29sdGlwQ29uZmlnLmZpZWxkc1RvU2hvdykge1xuICAgIGlmICghc3RhdGUuZGF0YXNldHNbZGF0YUlkXSB8fCBzdGF0ZS5pc01lcmdpbmdEYXRhc2V0c1tkYXRhSWRdKSB7XG4gICAgICAvLyBpcyBub3QgeWV0IGxvYWRlZFxuICAgICAgdW5tZXJnZWRUb29sdGlwW2RhdGFJZF0gPSB0b29sdGlwQ29uZmlnLmZpZWxkc1RvU2hvd1tkYXRhSWRdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiBkYXRhc2V0IGlzIGxvYWRlZFxuICAgICAgY29uc3QgYWxsRmllbGRzID0gc3RhdGUuZGF0YXNldHNbZGF0YUlkXS5maWVsZHMubWFwKGQgPT4gZC5uYW1lKTtcbiAgICAgIGNvbnN0IGZvdW5kRmllbGRzVG9TaG93ID0gdG9vbHRpcENvbmZpZy5maWVsZHNUb1Nob3dbZGF0YUlkXS5maWx0ZXIoZmllbGQgPT5cbiAgICAgICAgYWxsRmllbGRzLmluY2x1ZGVzKGZpZWxkLm5hbWUpXG4gICAgICApO1xuXG4gICAgICBtZXJnZWRUb29sdGlwW2RhdGFJZF0gPSBmb3VuZEZpZWxkc1RvU2hvdztcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge21lcmdlZFRvb2x0aXAsIHVubWVyZ2VkVG9vbHRpcH07XG59XG4vKipcbiAqIE1lcmdlIGxheWVyQmxlbmRpbmcgd2l0aCBzYXZlZFxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTGF5ZXJCbGVuZGluZzxTIGV4dGVuZHMgVmlzU3RhdGU+KFxuICBzdGF0ZTogUyxcbiAgbGF5ZXJCbGVuZGluZzogTm9uTnVsbGFibGU8UGFyc2VkQ29uZmlnWyd2aXNTdGF0ZSddPlsnbGF5ZXJCbGVuZGluZyddLFxuICBmcm9tQ29uZmlnPzogYm9vbGVhblxuKTogUyB7XG4gIGlmIChsYXllckJsZW5kaW5nICYmIExBWUVSX0JMRU5ESU5HU1tsYXllckJsZW5kaW5nXSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGxheWVyQmxlbmRpbmdcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG4vKipcbiAqIE1lcmdlIG92ZXJsYXlCbGVuZGluZyB3aXRoIHNhdmVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU92ZXJsYXlCbGVuZGluZzxTIGV4dGVuZHMgVmlzU3RhdGU+KFxuICBzdGF0ZTogUyxcbiAgb3ZlcmxheUJsZW5kaW5nOiBOb25OdWxsYWJsZTxQYXJzZWRDb25maWdbJ3Zpc1N0YXRlJ10+WydvdmVybGF5QmxlbmRpbmcnXSxcbiAgZnJvbUNvbmZpZz86IGJvb2xlYW5cbik6IFMge1xuICBpZiAob3ZlcmxheUJsZW5kaW5nICYmIE9WRVJMQVlfQkxFTkRJTkdTW292ZXJsYXlCbGVuZGluZ10pIHtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBvdmVybGF5QmxlbmRpbmdcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG4vKipcbiAqIE1lcmdlIGFuaW1hdGlvbiBjb25maWdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQW5pbWF0aW9uQ29uZmlnPFMgZXh0ZW5kcyBWaXNTdGF0ZT4oXG4gIHN0YXRlOiBTLFxuICBhbmltYXRpb246IE5vbk51bGxhYmxlPFBhcnNlZENvbmZpZ1sndmlzU3RhdGUnXT5bJ2FuaW1hdGlvbkNvbmZpZyddLFxuICBmcm9tQ29uZmlnPzogYm9vbGVhblxuKTogUyB7XG4gIGlmIChhbmltYXRpb24gJiYgYW5pbWF0aW9uLmN1cnJlbnRUaW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgYW5pbWF0aW9uQ29uZmlnOiB7XG4gICAgICAgIC4uLnN0YXRlLmFuaW1hdGlvbkNvbmZpZyxcbiAgICAgICAgLi4uYW5pbWF0aW9uLFxuICAgICAgICBkb21haW46IG51bGxcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG4vKipcbiAqIFZhbGlkYXRlIHNhdmVkIGxheWVyIGNvbHVtbnMgd2l0aCBuZXcgZGF0YSxcbiAqIHVwZGF0ZSBmaWVsZElkeCBiYXNlZCBvbiBuZXcgZmllbGRzXG4gKlxuICogQHBhcmFtIGZpZWxkc1xuICogQHBhcmFtIHNhdmVkQ29sc1xuICogQHBhcmFtIGVtcHR5Q29sc1xuICogQHJldHVybiAtIHZhbGlkYXRlZCBjb2x1bW5zIG9yIG51bGxcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVTYXZlZExheWVyQ29sdW1ucyhcbiAgZmllbGRzOiBLZXBsZXJUYWJsZVsnZmllbGRzJ10sXG4gIHNhdmVkQ29sczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgfSA9IHt9LFxuICBlbXB0eUNvbHM6IExheWVyQ29sdW1uc1xuKSB7XG4gIC8vIFByZXBhcmUgY29sdW1ucyBmb3IgdGhlIHZhbGlkYXRvclxuICBjb25zdCBjb2x1bW5zOiB0eXBlb2YgZW1wdHlDb2xzID0ge307XG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGVtcHR5Q29scykpIHtcbiAgICBjb2x1bW5zW2tleV0gPSB7Li4uZW1wdHlDb2xzW2tleV19O1xuXG4gICAgY29uc3Qgc2F2ZWQgPSBzYXZlZENvbHNba2V5XTtcbiAgICBpZiAoc2F2ZWQpIHtcbiAgICAgIGNvbnN0IGZpZWxkSWR4ID0gZmllbGRzLmZpbmRJbmRleCgoe25hbWV9KSA9PiBuYW1lID09PSBzYXZlZCk7XG5cbiAgICAgIGlmIChmaWVsZElkeCA+IC0xKSB7XG4gICAgICAgIC8vIHVwZGF0ZSBmb3VuZCBjb2x1bW5zXG4gICAgICAgIGNvbHVtbnNba2V5XS5maWVsZElkeCA9IGZpZWxkSWR4O1xuICAgICAgICBjb2x1bW5zW2tleV0udmFsdWUgPSBzYXZlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBmaW5kIGFjdHVhbCBjb2x1bW4gZmllbGRJZHgsIGluIGNhc2UgaXQgaGFzIGNoYW5nZWRcbiAgY29uc3QgYWxsQ29sRm91bmQgPSBPYmplY3Qua2V5cyhjb2x1bW5zKS5ldmVyeShrZXkgPT5cbiAgICB2YWxpZGF0ZUNvbHVtbihjb2x1bW5zW2tleV0sIGNvbHVtbnMsIGZpZWxkcylcbiAgKTtcblxuICBpZiAoYWxsQ29sRm91bmQpIHtcbiAgICByZXR1cm4gY29sdW1ucztcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVDb2x1bW4oXG4gIGNvbHVtbjogTGF5ZXJDb2x1bW4gJiB7dmFsaWRhdG9yPzogdHlwZW9mIHZhbGlkYXRlQ29sdW1ufSxcbiAgY29sdW1uczogTGF5ZXJDb2x1bW5zLFxuICBhbGxGaWVsZHM6IEtlcGxlclRhYmxlWydmaWVsZHMnXVxuKTogYm9vbGVhbiB7XG4gIGlmIChjb2x1bW4ub3B0aW9uYWwgfHwgY29sdW1uLnZhbHVlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGNvbHVtbi52YWxpZGF0b3IpIHtcbiAgICByZXR1cm4gY29sdW1uLnZhbGlkYXRvcihjb2x1bW4sIGNvbHVtbnMsIGFsbEZpZWxkcyk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFZhbGlkYXRlIHNhdmVkIHRleHQgbGFiZWwgY29uZmlnIHdpdGggbmV3IGRhdGFcbiAqIHJlZmVyIHRvIHZpcy1zdGF0ZS1zY2hlbWEuanMgVGV4dExhYmVsU2NoZW1hVjFcbiAqXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGZpZWxkc1xuICogQHBhcmFtIHtPYmplY3R9IHNhdmVkVGV4dExhYmVsXG4gKiBAcmV0dXJuIHtPYmplY3R9IC0gdmFsaWRhdGVkIHRleHRsYWJlbFxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVTYXZlZFRleHRMYWJlbChmaWVsZHMsIFtsYXllclRleHRMYWJlbF0sIHNhdmVkVGV4dExhYmVsKSB7XG4gIGNvbnN0IHNhdmVkVGV4dExhYmVscyA9IEFycmF5LmlzQXJyYXkoc2F2ZWRUZXh0TGFiZWwpID8gc2F2ZWRUZXh0TGFiZWwgOiBbc2F2ZWRUZXh0TGFiZWxdO1xuXG4gIC8vIHZhbGlkYXRlIGZpZWxkXG4gIHJldHVybiBzYXZlZFRleHRMYWJlbHMubWFwKHRleHRMYWJlbCA9PiB7XG4gICAgY29uc3QgZmllbGQgPSB0ZXh0TGFiZWwuZmllbGRcbiAgICAgID8gZmllbGRzLmZpbmQoZmQgPT5cbiAgICAgICAgICBPYmplY3Qua2V5cyh0ZXh0TGFiZWwuZmllbGQpLmV2ZXJ5KGtleSA9PiB0ZXh0TGFiZWwuZmllbGRba2V5XSA9PT0gZmRba2V5XSlcbiAgICAgICAgKVxuICAgICAgOiBudWxsO1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGxheWVyVGV4dExhYmVsKS5yZWR1Y2UoXG4gICAgICAoYWNjdSwga2V5KSA9PiAoe1xuICAgICAgICAuLi5hY2N1LFxuICAgICAgICBba2V5XToga2V5ID09PSAnZmllbGQnID8gZmllbGQgOiB0ZXh0TGFiZWxba2V5XSB8fCBsYXllclRleHRMYWJlbFtrZXldXG4gICAgICB9KSxcbiAgICAgIHt9XG4gICAgKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVmFsaWRhdGUgc2F2ZWQgdmlzdWFsIGNoYW5uZWxzIGNvbmZpZyB3aXRoIG5ldyBkYXRhLFxuICogcmVmZXIgdG8gdmlzLXN0YXRlLXNjaGVtYS5qcyBWaXN1YWxDaGFubmVsU2NoZW1hVjFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlU2F2ZWRWaXN1YWxDaGFubmVscyhcbiAgZmllbGRzOiBLZXBsZXJUYWJsZVsnZmllbGRzJ10sXG4gIG5ld0xheWVyOiBMYXllcixcbiAgc2F2ZWRMYXllcjogUGFyc2VkTGF5ZXJcbik6IG51bGwgfCBMYXllciB7XG4gIE9iamVjdC52YWx1ZXMobmV3TGF5ZXIudmlzdWFsQ2hhbm5lbHMpLmZvckVhY2goKHtmaWVsZCwgc2NhbGUsIGtleX0pID0+IHtcbiAgICBsZXQgZm91bmRGaWVsZDtcbiAgICBpZiAoc2F2ZWRMYXllci5jb25maWcpIHtcbiAgICAgIGlmIChzYXZlZExheWVyLmNvbmZpZ1tmaWVsZF0pIHtcbiAgICAgICAgZm91bmRGaWVsZCA9IGZpZWxkcy5maW5kKFxuICAgICAgICAgIGZkID0+IHNhdmVkTGF5ZXIuY29uZmlnICYmIGZkLm5hbWUgPT09IHNhdmVkTGF5ZXIuY29uZmlnW2ZpZWxkXS5uYW1lXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZvdW5kQ2hhbm5lbCA9IHtcbiAgICAgICAgLi4uKGZvdW5kRmllbGQgPyB7W2ZpZWxkXTogZm91bmRGaWVsZH0gOiB7fSksXG4gICAgICAgIC4uLihzYXZlZExheWVyLmNvbmZpZ1tzY2FsZV0gPyB7W3NjYWxlXTogc2F2ZWRMYXllci5jb25maWdbc2NhbGVdfSA6IHt9KVxuICAgICAgfTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhmb3VuZENoYW5uZWwpLmxlbmd0aCkge1xuICAgICAgICBuZXdMYXllci51cGRhdGVMYXllckNvbmZpZyhmb3VuZENoYW5uZWwpO1xuICAgICAgfVxuXG4gICAgICBuZXdMYXllci52YWxpZGF0ZVZpc3VhbENoYW5uZWwoa2V5KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbmV3TGF5ZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUxheWVyc0J5RGF0YXNldHMoXG4gIGRhdGFzZXRzOiBEYXRhc2V0cyxcbiAgbGF5ZXJDbGFzc2VzOiBWaXNTdGF0ZVsnbGF5ZXJDbGFzc2VzJ10sXG4gIGxheWVyczogTm9uTnVsbGFibGU8UGFyc2VkQ29uZmlnWyd2aXNTdGF0ZSddPlsnbGF5ZXJzJ10gPSBbXVxuKSB7XG4gIGNvbnN0IHZhbGlkYXRlZDogTGF5ZXJbXSA9IFtdO1xuICBjb25zdCBmYWlsZWQ6IE5vbk51bGxhYmxlPFBhcnNlZENvbmZpZ1sndmlzU3RhdGUnXT5bJ2xheWVycyddID0gW107XG5cbiAgbGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xuICAgIGxldCB2YWxpZGF0ZUxheWVyOiBMYXllciB8IG51bGwgPSBudWxsO1xuXG4gICAgaWYgKGxheWVyPy5jb25maWc/LmRhdGFJZCkge1xuICAgICAgaWYgKGRhdGFzZXRzW2xheWVyLmNvbmZpZy5kYXRhSWRdKSB7XG4gICAgICAgIC8vIGRhdGFzZXRzIGFyZSBhbHJlYWR5IGxvYWRlZFxuICAgICAgICB2YWxpZGF0ZUxheWVyID0gdmFsaWRhdGVMYXllcldpdGhEYXRhKGRhdGFzZXRzW2xheWVyLmNvbmZpZy5kYXRhSWRdLCBsYXllciwgbGF5ZXJDbGFzc2VzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVMYXllcikge1xuICAgICAgdmFsaWRhdGVkLnB1c2godmFsaWRhdGVMYXllcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRhdGFzZXRzIG5vdCB5ZXQgbG9hZGVkXG4gICAgICBmYWlsZWQucHVzaChsYXllcik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge3ZhbGlkYXRlZCwgZmFpbGVkfTtcbn1cbi8qKlxuICogVmFsaWRhdGUgc2F2ZWQgbGF5ZXIgY29uZmlnIHdpdGggbmV3IGRhdGEsXG4gKiB1cGRhdGUgZmllbGRJZHggYmFzZWQgb24gbmV3IGZpZWxkc1xuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVMYXllcldpdGhEYXRhKFxuICB7ZmllbGRzLCBpZDogZGF0YUlkfTogS2VwbGVyVGFibGUsXG4gIHNhdmVkTGF5ZXI6IFBhcnNlZExheWVyLFxuICBsYXllckNsYXNzZXM6IFZpc1N0YXRlWydsYXllckNsYXNzZXMnXSxcbiAgb3B0aW9uczoge1xuICAgIGFsbG93RW1wdHlDb2x1bW4/OiBib29sZWFuO1xuICB9ID0ge31cbik6IExheWVyIHwgbnVsbCB7XG4gIGNvbnN0IHt0eXBlfSA9IHNhdmVkTGF5ZXI7XG4gIC8vIGxheWVyIGRvZXNudCBoYXZlIGEgdmFsaWQgdHlwZVxuICBpZiAoIXR5cGUgfHwgIWxheWVyQ2xhc3Nlcy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSB8fCAhc2F2ZWRMYXllci5jb25maWcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGxldCBuZXdMYXllciA9IG5ldyBsYXllckNsYXNzZXNbdHlwZV0oe1xuICAgIGlkOiBzYXZlZExheWVyLmlkLFxuICAgIGRhdGFJZCxcbiAgICBsYWJlbDogc2F2ZWRMYXllci5jb25maWcubGFiZWwsXG4gICAgY29sb3I6IHNhdmVkTGF5ZXIuY29uZmlnLmNvbG9yLFxuICAgIGlzVmlzaWJsZTogc2F2ZWRMYXllci5jb25maWcuaXNWaXNpYmxlLFxuICAgIGhpZGRlbjogc2F2ZWRMYXllci5jb25maWcuaGlkZGVuLFxuICAgIGhpZ2hsaWdodENvbG9yOiBzYXZlZExheWVyLmNvbmZpZy5oaWdobGlnaHRDb2xvclxuICB9KTtcblxuICAvLyBmaW5kIGNvbHVtbiBmaWVsZElkeFxuICBjb25zdCBjb2x1bW5Db25maWcgPSBuZXdMYXllci5nZXRMYXllckNvbHVtbnMoKTtcbiAgaWYgKE9iamVjdC5rZXlzKGNvbHVtbkNvbmZpZykubGVuZ3RoKSB7XG4gICAgY29uc3QgY29sdW1ucyA9IHZhbGlkYXRlU2F2ZWRMYXllckNvbHVtbnMoZmllbGRzLCBzYXZlZExheWVyLmNvbmZpZy5jb2x1bW5zLCBjb2x1bW5Db25maWcpO1xuICAgIGlmIChjb2x1bW5zKSB7XG4gICAgICBuZXdMYXllci51cGRhdGVMYXllckNvbmZpZyh7Y29sdW1uc30pO1xuICAgIH0gZWxzZSBpZiAoIW9wdGlvbnMuYWxsb3dFbXB0eUNvbHVtbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gdmlzdWFsIGNoYW5uZWwgZmllbGQgaXMgc2F2ZWQgdG8gYmUge25hbWUsIHR5cGV9XG4gIC8vIGZpbmQgdmlzdWFsIGNoYW5uZWwgZmllbGQgYnkgbWF0Y2hpbmcgYm90aCBuYW1lIGFuZCB0eXBlXG4gIC8vIHJlZmVyIHRvIHZpcy1zdGF0ZS1zY2hlbWEuanMgVmlzdWFsQ2hhbm5lbFNjaGVtYVYxXG4gIG5ld0xheWVyID0gdmFsaWRhdGVTYXZlZFZpc3VhbENoYW5uZWxzKGZpZWxkcywgbmV3TGF5ZXIsIHNhdmVkTGF5ZXIpO1xuXG4gIGNvbnN0IHRleHRMYWJlbCA9XG4gICAgc2F2ZWRMYXllci5jb25maWcudGV4dExhYmVsICYmIG5ld0xheWVyLmNvbmZpZy50ZXh0TGFiZWxcbiAgICAgID8gdmFsaWRhdGVTYXZlZFRleHRMYWJlbChmaWVsZHMsIG5ld0xheWVyLmNvbmZpZy50ZXh0TGFiZWwsIHNhdmVkTGF5ZXIuY29uZmlnLnRleHRMYWJlbClcbiAgICAgIDogbmV3TGF5ZXIuY29uZmlnLnRleHRMYWJlbDtcblxuICAvLyBjb3B5IHZpc0NvbmZpZyBvdmVyIHRvIGVtcHR5TGF5ZXIgdG8gbWFrZSBzdXJlIGl0IGhhcyBhbGwgdGhlIHByb3BzXG4gIGNvbnN0IHZpc0NvbmZpZyA9IG5ld0xheWVyLmNvcHlMYXllckNvbmZpZyhcbiAgICBuZXdMYXllci5jb25maWcudmlzQ29uZmlnLFxuICAgIHNhdmVkTGF5ZXIuY29uZmlnLnZpc0NvbmZpZyB8fCB7fSxcbiAgICB7c2hhbGxvd0NvcHk6IFsnY29sb3JSYW5nZScsICdzdHJva2VDb2xvclJhbmdlJ119XG4gICk7XG5cbiAgbmV3TGF5ZXIudXBkYXRlTGF5ZXJDb25maWcoe1xuICAgIHZpc0NvbmZpZyxcbiAgICB0ZXh0TGFiZWxcbiAgfSk7XG5cbiAgcmV0dXJuIG5ld0xheWVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VFZGl0b3I8UyBleHRlbmRzIFZpc1N0YXRlPihzdGF0ZTogUywgc2F2ZWRFZGl0b3I6IFNhdmVkRWRpdG9yKSB7XG4gIGlmICghc2F2ZWRFZGl0b3IpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBlZGl0b3I6IHtcbiAgICAgIC4uLnN0YXRlLmVkaXRvcixcbiAgICAgIGZlYXR1cmVzOiBbLi4uc3RhdGUuZWRpdG9yLmZlYXR1cmVzLCAuLi4oc2F2ZWRFZGl0b3IuZmVhdHVyZXMgfHwgW10pXSxcbiAgICAgIC8vIGlmIHNhdmVkRWRpdG9yLnZpc2libGUgaXMgdW5kZWZpbmVkIGtlZXAgc3RhdGUuZWRpdG9yLnZpc2libGVcbiAgICAgIHZpc2libGU6IHNhdmVkRWRpdG9yLnZpc2libGUgPz8gc3RhdGUuZWRpdG9yLnZpc2libGVcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogVmFsaWRhdGUgc2F2ZWQgbGF5ZXIgY29uZmlnIHdpdGggbmV3IGRhdGEsXG4gKiB1cGRhdGUgZmllbGRJZHggYmFzZWQgb24gbmV3IGZpZWxkc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEYXRhc2V0c0J5T3JkZXIoc3RhdGU6IFZpc1N0YXRlLCBuZXdEYXRhRW50cmllczogRGF0YXNldHMpOiBEYXRhc2V0cyB7XG4gIGNvbnN0IG1lcmdlZCA9IHtcbiAgICAuLi5zdGF0ZS5kYXRhc2V0cyxcbiAgICAuLi5uZXdEYXRhRW50cmllc1xuICB9O1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHN0YXRlLnByZXNlcnZlRGF0YXNldE9yZGVyKSkge1xuICAgIC8vIHByZXNlcnZlRGF0YXNldE9yZGVyICBtaWdodCBub3QgaW5jbHVkZSB0aGUgIG5ldyBkYXRhc2V0c1xuICAgIGNvbnN0IG5ld0RhdGFzZXRJZHMgPSBPYmplY3Qua2V5cyhtZXJnZWQpLmZpbHRlcihcbiAgICAgIGlkID0+ICFzdGF0ZS5wcmVzZXJ2ZURhdGFzZXRPcmRlcj8uaW5jbHVkZXMoaWQpXG4gICAgKTtcbiAgICByZXR1cm4gWy4uLnN0YXRlLnByZXNlcnZlRGF0YXNldE9yZGVyLCAuLi5uZXdEYXRhc2V0SWRzXS5yZWR1Y2UoXG4gICAgICAoYWNjdSwgZGF0YUlkKSA9PiAoe1xuICAgICAgICAuLi5hY2N1LFxuICAgICAgICAuLi4obWVyZ2VkW2RhdGFJZF0gPyB7W2RhdGFJZF06IG1lcmdlZFtkYXRhSWRdfSA6IHt9KVxuICAgICAgfSksXG4gICAgICB7fVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gbWVyZ2VkO1xufVxuXG5leHBvcnQgY29uc3QgVklTX1NUQVRFX01FUkdFUlM6IFZpc1N0YXRlTWVyZ2Vyczxhbnk+ID0gW1xuICB7XG4gICAgbWVyZ2U6IG1lcmdlTGF5ZXJzLFxuICAgIHByb3A6ICdsYXllcnMnLFxuICAgIHRvTWVyZ2VQcm9wOiAnbGF5ZXJUb0JlTWVyZ2VkJyxcbiAgICBwcmVzZXJ2ZU9yZGVyOiAncHJlc2VydmVMYXllck9yZGVyJ1xuICB9LFxuICB7XG4gICAgbWVyZ2U6IG1lcmdlRmlsdGVycyxcbiAgICBwcm9wOiAnZmlsdGVycycsXG4gICAgdG9NZXJnZVByb3A6ICdmaWx0ZXJUb0JlTWVyZ2VkJyxcbiAgICBwcmVzZXJ2ZU9yZGVyOiAncHJlc2VydmVGaWx0ZXJPcmRlcicsXG4gICAgcmVwbGFjZVBhcmVudERhdGFzZXRJZHM6IHJlcGxhY2VGaWx0ZXJEYXRhc2V0SWRzXG4gIH0sXG4gIHtcbiAgICBtZXJnZTogbWVyZ2VJbnRlcmFjdGlvbnMsXG4gICAgcHJvcDogJ2ludGVyYWN0aW9uQ29uZmlnJyxcbiAgICB0b01lcmdlUHJvcDogJ2ludGVyYWN0aW9uVG9CZU1lcmdlZCcsXG4gICAgcmVwbGFjZVBhcmVudERhdGFzZXRJZHM6IHJlcGxhY2VJbnRlcmFjdGlvbkRhdGFzZXRJZHMsXG4gICAgc2F2ZVVubWVyZ2VkOiBzYXZlZFVubWVyZ2VkSW50ZXJhY3Rpb25cbiAgfSxcbiAge21lcmdlOiBtZXJnZUxheWVyQmxlbmRpbmcsIHByb3A6ICdsYXllckJsZW5kaW5nJ30sXG4gIHttZXJnZTogbWVyZ2VPdmVybGF5QmxlbmRpbmcsIHByb3A6ICdvdmVybGF5QmxlbmRpbmcnfSxcbiAge21lcmdlOiBtZXJnZVNwbGl0TWFwcywgcHJvcDogJ3NwbGl0TWFwcycsIHRvTWVyZ2VQcm9wOiAnc3BsaXRNYXBzVG9CZU1lcmdlZCd9LFxuICB7bWVyZ2U6IG1lcmdlQW5pbWF0aW9uQ29uZmlnLCBwcm9wOiAnYW5pbWF0aW9uQ29uZmlnJ30sXG4gIHttZXJnZTogbWVyZ2VFZGl0b3IsIHByb3A6ICdlZGl0b3InfVxuXTtcbiJdfQ==