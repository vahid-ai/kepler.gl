"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMapStyles = getMapStyles;
exports.getInitialInputStyle = getInitialInputStyle;
exports.setBackgroundColorUpdater = exports.set3dBuildingColorUpdater = exports.addCustomMapStyleUpdater = exports.inputMapStyleUpdater = exports.loadCustomMapStyleUpdater = exports.resetMapConfigMapStyleUpdater = exports.receiveMapConfigUpdater = exports.loadMapStyleErrUpdater = exports.loadMapStylesUpdater = exports.mapStyleChangeUpdater = exports.mapConfigChangeUpdater = exports.initMapStyleUpdater = exports.requestMapStylesUpdater = exports.INITIAL_MAP_STYLE = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _tasks = _interopRequireWildcard(require("react-palm/tasks"));

var _lodash = _interopRequireDefault(require("lodash.clonedeep"));

var _console = _interopRequireDefault(require("global/console"));

var _utils = require("@kepler.gl/utils");

var _constants = require("@kepler.gl/constants");

var _tasks2 = require("@kepler.gl/tasks");

var _d3Color = require("d3-color");

var _actions = require("@kepler.gl/actions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getDefaultState = function getDefaultState() {
  var visibleLayerGroups = {};
  var styleType = 'dark';
  var topLayerGroups = {};
  return {
    styleType: styleType,
    visibleLayerGroups: visibleLayerGroups,
    topLayerGroups: topLayerGroups,
    mapStyles: _constants.DEFAULT_MAP_STYLES.reduce(function (accu, curr) {
      return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, curr.id, curr));
    }, {}),
    // save mapbox access token
    mapboxApiAccessToken: null,
    mapboxApiUrl: _constants.DEFAULT_MAPBOX_API_URL,
    mapStylesReplaceDefault: false,
    inputStyle: getInitialInputStyle(),
    threeDBuildingColor: (0, _utils.hexToRgb)(_constants.DEFAULT_BLDG_COLOR),
    custom3DBuildingColor: false,
    backgroundColor: (0, _utils.hexToRgb)(_constants.DEFAULT_BACKGROUND_COLOR),
    isLoading: {},
    bottomMapStyle: undefined,
    topMapStyle: undefined
  };
};
/**
 * Updaters for `mapStyle`. Can be used in your root reducer to directly modify kepler.gl's state.
 * Read more about [Using updaters](../advanced-usage/using-updaters.md)
 * @public
 * @example
 *
 * import keplerGlReducer, {mapStyleUpdaters} from 'kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    // click button to hide label from background map
 *    case 'CLICK_BUTTON':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          foo: {
 *             ...state.keplerGl.foo,
 *             mapStyle: mapStyleUpdaters.mapConfigChangeUpdater(
 *               mapStyle,
 *               {payload: {visibleLayerGroups: {label: false, road: true, background: true}}}
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


var mapStyleUpdaters = null;
/* eslint-enable no-unused-vars */

/**
 * Default initial `mapStyle`
 * @memberof mapStyleUpdaters
 * @constant
 * @property styleType - Default: `'dark'`
 * @property visibleLayerGroups - Default: `{}`
 * @property topLayerGroups - Default: `{}`
 * @property mapStyles - mapping from style key to style object
 * @property mapboxApiAccessToken - Default: `null`
 * @Property mapboxApiUrl - Default null
 * @Property mapStylesReplaceDefault - Default: `false`
 * @property inputStyle - Default: `{}`
 * @property threeDBuildingColor - Default: `[r, g, b]`
 * @property backgroundColor - Default: `[r, g, b]`
 * @public
 */

var INITIAL_MAP_STYLE = getDefaultState();
exports.INITIAL_MAP_STYLE = INITIAL_MAP_STYLE;

/**
 * Create two map styles from preset map style, one for top map one for bottom
 *
 * @param {string} styleType - current map style
 * @param {Object} visibleLayerGroups - visible layers of bottom map
 * @param {Object} topLayerGroups - visible layers of top map
 * @param {Object} mapStyles - a dictionary of all map styles
 * @returns {Object} bottomMapStyle | topMapStyle | isRaster
 */
function getMapStyles(_ref) {
  var styleType = _ref.styleType,
      visibleLayerGroups = _ref.visibleLayerGroups,
      topLayerGroups = _ref.topLayerGroups,
      mapStyles = _ref.mapStyles;
  var mapStyle = mapStyles[styleType]; // style might not be loaded yet

  if (!mapStyle || !mapStyle.style) {
    return {};
  }

  var editable = Object.keys(visibleLayerGroups).length;
  var bottomMapStyle = !editable ? mapStyle.style : (0, _utils.editBottomMapStyle)({
    id: styleType,
    mapStyle: mapStyle,
    visibleLayerGroups: visibleLayerGroups
  });
  var hasTopLayer = editable > 0 && Object.values(topLayerGroups).some(function (v) {
    return v;
  }); // mute top layer if not visible in bottom layer

  var topLayers = hasTopLayer && Object.keys(topLayerGroups).reduce(function (accu, key) {
    return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, topLayerGroups[key] && visibleLayerGroups[key]));
  }, {});
  var topMapStyle = hasTopLayer ? (0, _utils.editTopMapStyle)({
    id: styleType,
    mapStyle: mapStyle,
    visibleLayerGroups: topLayers
  }) : null;
  return {
    bottomMapStyle: bottomMapStyle,
    topMapStyle: topMapStyle,
    editable: editable
  };
}

function findLayerFillColor(layer) {
  return layer && layer.paint && layer.paint['background-color'];
} // need to be careful because some basemap layer.paint['background-color'] values may be an interpolate array expression instead of a color string
// https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#paint-background-background-color
// https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/#interpolate


function getPaintColor(color) {
  if (Array.isArray(color) && color[0] === 'interpolate') {
    // get color of first zoom break
    // ["interpolate", ["linear"], ["zoom"], 11, "hsl(35, 32%, 91%)", 13, "hsl(35, 12%, 89%)"]
    return color[4];
  }

  return color;
}

function get3DBuildingColor(style) {
  // set building color to be the same as the background color.
  if (!style.style) {
    return (0, _utils.hexToRgb)(_constants.DEFAULT_BLDG_COLOR);
  }

  var backgroundLayer = (style.style.layers || []).find(function (_ref2) {
    var id = _ref2.id;
    return id === 'background';
  });
  var buildingLayer = (style.style.layers || []).find(function (_ref3) {
    var id = _ref3.id;
    return id.match(/building/);
  });

  var buildingColor = findLayerFillColor(buildingLayer) || findLayerFillColor(backgroundLayer) || _constants.DEFAULT_BLDG_COLOR; // brighten or darken building based on style


  var operation = style.id.match(/(?=(dark|night))/) ? 'brighter' : 'darker';
  var alpha = 0.2;
  var rgbObj = (0, _d3Color.rgb)(buildingColor)[operation]([alpha]);
  return [rgbObj.r, rgbObj.g, rgbObj.b];
}

function getBackgroundColorFromStyleBaseLayer(style, backupBackgroundColor) {
  var _colorMaybeToRGB;

  if (!style.style) {
    return (0, _utils.colorMaybeToRGB)(backupBackgroundColor) || backupBackgroundColor;
  } // @ts-expect-error style.style not typed


  var baseLayer = (style.style.layers || []).find(function (_ref4) {
    var id = _ref4.id;
    return _constants.BASE_MAP_BACKGROUND_LAYER_IDS.includes(id);
  });
  var backgroundColorOfBaseLayer = getPaintColor(findLayerFillColor(baseLayer));
  var newBackgroundColor = typeof backgroundColorOfBaseLayer === 'string' ? backgroundColorOfBaseLayer : backupBackgroundColor;
  var newBackgroundColorAsRGBArray = (_colorMaybeToRGB = (0, _utils.colorMaybeToRGB)(newBackgroundColor) // if newBackgroundColor was in string HSL format it can introduce RGB numbers with decimals,
  // which may render the background-color CSS of the <StyledMap> container incorrectly when using our own color utils `rgbToHex()`
  // so we attempt to round to nearest integer here
  ) === null || _colorMaybeToRGB === void 0 ? void 0 : _colorMaybeToRGB.map(function (channelNumber) {
    return Math.round(channelNumber);
  });
  return newBackgroundColorAsRGBArray || backupBackgroundColor;
} // determine new backgroundColor from either previous state basemap style, previous state backgroundColor, or the DEFAULT_BACKGROUND_COLOR


function getBackgroundColor(previousState, styleType) {
  var previousStateMapStyle = previousState.mapStyles[previousState.styleType];
  var backupBackgroundColor = previousState.backgroundColor || _constants.DEFAULT_BACKGROUND_COLOR;
  var backgroundColor = styleType === _constants.NO_MAP_ID ? // if the style has switched to the "no basemap" style,
  // attempt to detect backgroundColor of the previous basemap if it was a mapbox basemap
  // and set it as the "no basemap" backgroundColor
  getBackgroundColorFromStyleBaseLayer(previousStateMapStyle, backupBackgroundColor) : // otherwise leave it alone and rely on the previous state's preexisting backgroundColor
  // or DEFAULT_BACKGROUND_COLOR as a last resort
  backupBackgroundColor;
  return backgroundColor;
}

function getLayerGroupsFromStyle(style) {
  return Array.isArray(style === null || style === void 0 ? void 0 : style.layers) ? _constants.DEFAULT_LAYER_GROUPS.filter(function (lg) {
    return style.layers.filter(lg.filter).length;
  }) : [];
} // Updaters

/**
 * @memberof mapStyleUpdaters
 * @public
 */


var requestMapStylesUpdater = function requestMapStylesUpdater(state, _ref5) {
  var _ref5$payload = _ref5.payload,
      mapStyles = _ref5$payload.mapStyles,
      onSuccess = _ref5$payload.onSuccess;
  var toLoad = Object.keys(mapStyles).reduce(function (accu, id) {
    return _objectSpread(_objectSpread({}, accu), !state.isLoading[id] ? (0, _defineProperty2["default"])({}, id, mapStyles[id]) : {});
  }, {});
  var loadMapStyleTasks = getLoadMapStyleTasks(toLoad, state.mapboxApiAccessToken, state.mapboxApiUrl, onSuccess);
  var isLoading = Object.keys(toLoad).reduce(function (accu, key) {
    return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, key, true));
  }, {});

  var nextState = _objectSpread(_objectSpread({}, state), {}, {
    isLoading: isLoading
  });

  return (0, _tasks.withTask)(nextState, loadMapStyleTasks);
};
/**
 * Propagate `mapStyle` reducer with `mapboxApiAccessToken` and `mapStylesReplaceDefault`.
 * if mapStylesReplaceDefault is true mapStyles is emptied; loadMapStylesUpdater() will
 * populate mapStyles.
 *
 * @memberof mapStyleUpdaters
 * @public
 */


exports.requestMapStylesUpdater = requestMapStylesUpdater;

var initMapStyleUpdater = function initMapStyleUpdater(state, _ref7) {
  var _ref7$payload = _ref7.payload,
      payload = _ref7$payload === void 0 ? {} : _ref7$payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    // save mapbox access token to map style state
    mapboxApiAccessToken: payload.mapboxApiAccessToken || state.mapboxApiAccessToken,
    mapboxApiUrl: payload.mapboxApiUrl || state.mapboxApiUrl,
    mapStyles: !payload.mapStylesReplaceDefault ? state.mapStyles : {},
    mapStylesReplaceDefault: payload.mapStylesReplaceDefault || false
  });
}; // });

/**
 * Update `visibleLayerGroups`to change layer group visibility
 * @memberof mapStyleUpdaters
 * @public
 */


exports.initMapStyleUpdater = initMapStyleUpdater;

var mapConfigChangeUpdater = function mapConfigChangeUpdater(state, action) {
  return _objectSpread(_objectSpread(_objectSpread({}, state), action.payload), getMapStyles(_objectSpread(_objectSpread({}, state), action.payload)));
};

exports.mapConfigChangeUpdater = mapConfigChangeUpdater;

var hasStyleObject = function hasStyleObject(style) {
  return (0, _utils.isPlainObject)(style === null || style === void 0 ? void 0 : style.style);
};
/**
 * Change to another map style. The selected style should already been loaded into `mapStyle.mapStyles`
 * @memberof mapStyleUpdaters
 * @public
 */


var mapStyleChangeUpdater = function mapStyleChangeUpdater(state, _ref8) {
  var _ref8$payload = _ref8.payload,
      styleType = _ref8$payload.styleType,
      onSuccess = _ref8$payload.onSuccess;

  if (!state.mapStyles[styleType]) {
    // we might not have received the style yet
    return state;
  }

  if (!hasStyleObject(state.mapStyles[styleType])) {
    // style hasn't loaded yet
    return requestMapStylesUpdater(_objectSpread(_objectSpread({}, state), {}, {
      styleType: styleType
    }), {
      payload: {
        mapStyles: (0, _defineProperty2["default"])({}, styleType, state.mapStyles[styleType]),
        onSuccess: onSuccess
      }
    });
  }

  var defaultLGVisibility = (0, _utils.getDefaultLayerGroupVisibility)(state.mapStyles[styleType]);
  var visibleLayerGroups = (0, _utils.mergeLayerGroupVisibility)(defaultLGVisibility, state.visibleLayerGroups);
  var threeDBuildingColor = state.custom3DBuildingColor ? state.threeDBuildingColor : get3DBuildingColor(state.mapStyles[styleType]); // determine new backgroundColor from either previous state basemap style, previous state backgroundColor, or the DEFAULT_BACKGROUND_COLOR

  var backgroundColor = getBackgroundColor(state, styleType);
  return _objectSpread(_objectSpread({}, state), {}, {
    styleType: styleType,
    visibleLayerGroups: visibleLayerGroups,
    threeDBuildingColor: threeDBuildingColor,
    backgroundColor: backgroundColor
  }, getMapStyles(_objectSpread(_objectSpread({}, state), {}, {
    visibleLayerGroups: visibleLayerGroups,
    styleType: styleType
  })));
};
/**
 * Callback when load map style success
 * @memberof mapStyleUpdaters
 * @public
 */


exports.mapStyleChangeUpdater = mapStyleChangeUpdater;

var loadMapStylesUpdater = function loadMapStylesUpdater(state, action) {
  var _ref9 = action.payload || {},
      newStyles = _ref9.newStyles,
      onSuccess = _ref9.onSuccess;

  var addLayerGroups = Object.keys(newStyles).reduce(function (accu, id) {
    return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, id, _objectSpread(_objectSpread({}, newStyles[id]), {}, {
      layerGroups: newStyles[id].layerGroups || getLayerGroupsFromStyle(newStyles[id].style)
    })));
  }, {}); // reset isLoading

  var isLoading = Object.keys(state.isLoading).reduce(function (accu, key) {
    return _objectSpread(_objectSpread({}, accu), state.isLoading[key] && hasStyleObject(newStyles[key]) ? (0, _defineProperty2["default"])({}, key, false) : (0, _defineProperty2["default"])({}, key, state.isLoading[key]));
  }, {}); // add new styles to state

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    isLoading: isLoading,
    mapStyles: _objectSpread(_objectSpread({}, state.mapStyles), addLayerGroups)
  });

  var tasks = createActionTask(onSuccess, {
    styleType: state.styleType
  });
  var nextState = newStyles[state.styleType] ? mapStyleChangeUpdater(newState, {
    payload: {
      styleType: state.styleType
    }
  }) : newState;
  return tasks ? (0, _tasks.withTask)(nextState, tasks) : nextState;
};

exports.loadMapStylesUpdater = loadMapStylesUpdater;

function createActionTask(action, payload) {
  if (typeof action === 'function') {
    return (0, _tasks2.ACTION_TASK)().map(function (_) {
      return action(payload);
    });
  }

  return null;
}
/**
 * Callback when load map style error
 * @memberof mapStyleUpdaters
 * @public
 */
// do nothing for now, if didn't load, skip it


var loadMapStyleErrUpdater = function loadMapStyleErrUpdater(state, _ref12) {
  var _ref12$payload = _ref12.payload,
      ids = _ref12$payload.ids,
      error = _ref12$payload.error;

  _console["default"].error(error); // reset isLoading


  var isLoading = Object.keys(state.isLoading).reduce(function (accu, key) {
    return _objectSpread(_objectSpread({}, accu), state.isLoading[key] && (ids || []).includes(key) ? (0, _defineProperty2["default"])({}, key, false) : (0, _defineProperty2["default"])({}, key, state.isLoading[key]));
  }, {});
  return _objectSpread(_objectSpread({}, state), {}, {
    isLoading: isLoading
  });
};
/**
 * Load map style object when pass in saved map config
 * @memberof mapStyleUpdaters
 * @param state `mapStyle`
 * @param action
 * @param action.payload saved map config `{mapStyle, visState, mapState}`
 * @returns nextState or `react-pam` tasks to load map style object
 */


exports.loadMapStyleErrUpdater = loadMapStyleErrUpdater;

var receiveMapConfigUpdater = function receiveMapConfigUpdater(state, _ref15) {
  var config = _ref15.payload.config;

  var _ref16 = config || {},
      mapStyle = _ref16.mapStyle;

  if (!mapStyle) {
    return state;
  } // merge default mapStyles


  var merged = mapStyle.mapStyles ? _objectSpread(_objectSpread({}, mapStyle), {}, {
    mapStyles: _objectSpread(_objectSpread({}, mapStyle.mapStyles), state.mapStyles)
  }) : mapStyle; // set custom3DBuildingColor: true if mapStyle contains threeDBuildingColor
  // @ts-expect-error

  merged.custom3DBuildingColor = // @ts-expect-error
  Boolean(mapStyle.threeDBuildingColor) || merged.custom3DBuildingColor;
  var newState = mapConfigChangeUpdater(state, {
    payload: merged
  });
  return mapStyleChangeUpdater(newState, {
    payload: {
      styleType: newState.styleType
    }
  });
};

exports.receiveMapConfigUpdater = receiveMapConfigUpdater;

function getLoadMapStyleTasks(mapStyles, mapboxApiAccessToken, mapboxApiUrl, onSuccess) {
  return [_tasks["default"].all(Object.values(mapStyles) // @ts-expect-error
  .map(function (_ref17) {
    var id = _ref17.id,
        url = _ref17.url,
        accessToken = _ref17.accessToken;
    return {
      id: id,
      url: (0, _utils.isValidStyleUrl)(url) ? (0, _utils.getStyleDownloadUrl)(url, accessToken || mapboxApiAccessToken, mapboxApiUrl) : url
    };
  }).map(_tasks2.LOAD_MAP_STYLE_TASK)).bimap( // success
  function (results) {
    return (0, _actions.loadMapStyles)(results.reduce(function (accu, _ref18) {
      var id = _ref18.id,
          style = _ref18.style;
      return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, id, _objectSpread(_objectSpread({}, mapStyles[id]), {}, {
        style: style
      })));
    }, {}), onSuccess);
  }, // error
  function (err) {
    return (0, _actions.loadMapStyleErr)(Object.keys(mapStyles), err);
  })];
}
/**
 * Reset map style config to initial state
 * @memberof mapStyleUpdaters
 * @param state `mapStyle`
 * @returns nextState
 * @public
 */


var resetMapConfigMapStyleUpdater = function resetMapConfigMapStyleUpdater(state) {
  var emptyConfig = _objectSpread(_objectSpread(_objectSpread({}, INITIAL_MAP_STYLE), {}, {
    mapboxApiAccessToken: state.mapboxApiAccessToken,
    mapboxApiUrl: state.mapboxApiUrl,
    mapStylesReplaceDefault: state.mapStylesReplaceDefault
  }, state.initialState), {}, {
    mapStyles: state.mapStyles,
    initialState: state.initialState
  });

  return mapStyleChangeUpdater(emptyConfig, {
    payload: {
      styleType: emptyConfig.styleType
    }
  });
};
/**
 * Callback when a custom map style object is received
 * @memberof mapStyleUpdaters
 * @public
 */


exports.resetMapConfigMapStyleUpdater = resetMapConfigMapStyleUpdater;

var loadCustomMapStyleUpdater = function loadCustomMapStyleUpdater(state, _ref19) {
  var _ref19$payload = _ref19.payload,
      icon = _ref19$payload.icon,
      style = _ref19$payload.style,
      error = _ref19$payload.error;
  return _objectSpread(_objectSpread({}, state), {}, {
    // @ts-expect-error
    inputStyle: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, state.inputStyle), style ? {
      // @ts-expect-error
      id: style.id || (0, _utils.generateHashId)(),
      // make a copy of the style object
      style: (0, _lodash["default"])(style),
      // @ts-expect-error
      label: style.name,
      // gathering layer group info from style json
      layerGroups: getLayerGroupsFromStyle(style)
    } : {}), icon ? {
      icon: icon
    } : {}), error !== undefined ? {
      error: error
    } : {})
  });
};
/**
 * Input a custom map style object
 * @memberof mapStyleUpdaters
 * @public
 */


exports.loadCustomMapStyleUpdater = loadCustomMapStyleUpdater;

var inputMapStyleUpdater = function inputMapStyleUpdater(state, _ref20) {
  var _ref20$payload = _ref20.payload,
      inputStyle = _ref20$payload.inputStyle,
      mapState = _ref20$payload.mapState;

  var updated = _objectSpread(_objectSpread({}, state.inputStyle), inputStyle);

  var isValid = (0, _utils.isValidStyleUrl)(updated.url);
  var icon = isValid ? (0, _utils.getStyleImageIcon)({
    mapState: mapState,
    styleUrl: updated.url || '',
    mapboxApiAccessToken: updated.accessToken || state.mapboxApiAccessToken || '',
    mapboxApiUrl: state.mapboxApiUrl || _constants.DEFAULT_MAPBOX_API_URL
  }) : state.inputStyle.icon;
  return _objectSpread(_objectSpread({}, state), {}, {
    inputStyle: _objectSpread(_objectSpread({}, updated), {}, {
      isValid: isValid,
      icon: icon
    })
  });
};
/**
 * Add map style from user input to reducer and set it to current style
 * This action is called when user click confirm after putting in a valid style url in the custom map style dialog.
 * It should not be called from outside kepler.gl without a valid `inputStyle` in the `mapStyle` reducer.
 * @memberof mapStyleUpdaters
 */


exports.inputMapStyleUpdater = inputMapStyleUpdater;

var addCustomMapStyleUpdater = function addCustomMapStyleUpdater(state) {
  // @ts-expect-error
  var styleId = state.inputStyle.id;

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    mapStyles: _objectSpread(_objectSpread({}, state.mapStyles), {}, (0, _defineProperty2["default"])({}, styleId, state.inputStyle)),
    // set to default
    inputStyle: getInitialInputStyle()
  }); // set new style


  return mapStyleChangeUpdater(newState, {
    payload: {
      styleType: styleId
    }
  });
};
/**
 * Updates 3d building color
 * @memberof mapStyleUpdaters
 */


exports.addCustomMapStyleUpdater = addCustomMapStyleUpdater;

var set3dBuildingColorUpdater = function set3dBuildingColorUpdater(state, _ref21) {
  var color = _ref21.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    threeDBuildingColor: color,
    custom3DBuildingColor: true
  });
};
/**
 * Updates background color
 * @memberof mapStyleUpdaters
 */


exports.set3dBuildingColorUpdater = set3dBuildingColorUpdater;

var setBackgroundColorUpdater = function setBackgroundColorUpdater(state, _ref22) {
  var color = _ref22.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    backgroundColor: color
  });
};
/**
 * Return the initial input style
 * @return Object
 */


exports.setBackgroundColorUpdater = setBackgroundColorUpdater;

function getInitialInputStyle() {
  return {
    accessToken: null,
    error: false,
    isValid: false,
    label: null,
    style: null,
    url: null,
    icon: null,
    custom: true
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zcmMvbWFwLXN0eWxlLXVwZGF0ZXJzLnRzIl0sIm5hbWVzIjpbImdldERlZmF1bHRTdGF0ZSIsInZpc2libGVMYXllckdyb3VwcyIsInN0eWxlVHlwZSIsInRvcExheWVyR3JvdXBzIiwibWFwU3R5bGVzIiwiREVGQVVMVF9NQVBfU1RZTEVTIiwicmVkdWNlIiwiYWNjdSIsImN1cnIiLCJpZCIsIm1hcGJveEFwaUFjY2Vzc1Rva2VuIiwibWFwYm94QXBpVXJsIiwiREVGQVVMVF9NQVBCT1hfQVBJX1VSTCIsIm1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0IiwiaW5wdXRTdHlsZSIsImdldEluaXRpYWxJbnB1dFN0eWxlIiwidGhyZWVEQnVpbGRpbmdDb2xvciIsIkRFRkFVTFRfQkxER19DT0xPUiIsImN1c3RvbTNEQnVpbGRpbmdDb2xvciIsImJhY2tncm91bmRDb2xvciIsIkRFRkFVTFRfQkFDS0dST1VORF9DT0xPUiIsImlzTG9hZGluZyIsImJvdHRvbU1hcFN0eWxlIiwidW5kZWZpbmVkIiwidG9wTWFwU3R5bGUiLCJtYXBTdHlsZVVwZGF0ZXJzIiwiSU5JVElBTF9NQVBfU1RZTEUiLCJnZXRNYXBTdHlsZXMiLCJtYXBTdHlsZSIsInN0eWxlIiwiZWRpdGFibGUiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiaGFzVG9wTGF5ZXIiLCJ2YWx1ZXMiLCJzb21lIiwidiIsInRvcExheWVycyIsImtleSIsImZpbmRMYXllckZpbGxDb2xvciIsImxheWVyIiwicGFpbnQiLCJnZXRQYWludENvbG9yIiwiY29sb3IiLCJBcnJheSIsImlzQXJyYXkiLCJnZXQzREJ1aWxkaW5nQ29sb3IiLCJiYWNrZ3JvdW5kTGF5ZXIiLCJsYXllcnMiLCJmaW5kIiwiYnVpbGRpbmdMYXllciIsIm1hdGNoIiwiYnVpbGRpbmdDb2xvciIsIm9wZXJhdGlvbiIsImFscGhhIiwicmdiT2JqIiwiciIsImciLCJiIiwiZ2V0QmFja2dyb3VuZENvbG9yRnJvbVN0eWxlQmFzZUxheWVyIiwiYmFja3VwQmFja2dyb3VuZENvbG9yIiwiYmFzZUxheWVyIiwiQkFTRV9NQVBfQkFDS0dST1VORF9MQVlFUl9JRFMiLCJpbmNsdWRlcyIsImJhY2tncm91bmRDb2xvck9mQmFzZUxheWVyIiwibmV3QmFja2dyb3VuZENvbG9yIiwibmV3QmFja2dyb3VuZENvbG9yQXNSR0JBcnJheSIsIm1hcCIsImNoYW5uZWxOdW1iZXIiLCJNYXRoIiwicm91bmQiLCJnZXRCYWNrZ3JvdW5kQ29sb3IiLCJwcmV2aW91c1N0YXRlIiwicHJldmlvdXNTdGF0ZU1hcFN0eWxlIiwiTk9fTUFQX0lEIiwiZ2V0TGF5ZXJHcm91cHNGcm9tU3R5bGUiLCJERUZBVUxUX0xBWUVSX0dST1VQUyIsImZpbHRlciIsImxnIiwicmVxdWVzdE1hcFN0eWxlc1VwZGF0ZXIiLCJzdGF0ZSIsInBheWxvYWQiLCJvblN1Y2Nlc3MiLCJ0b0xvYWQiLCJsb2FkTWFwU3R5bGVUYXNrcyIsImdldExvYWRNYXBTdHlsZVRhc2tzIiwibmV4dFN0YXRlIiwiaW5pdE1hcFN0eWxlVXBkYXRlciIsIm1hcENvbmZpZ0NoYW5nZVVwZGF0ZXIiLCJhY3Rpb24iLCJoYXNTdHlsZU9iamVjdCIsIm1hcFN0eWxlQ2hhbmdlVXBkYXRlciIsImRlZmF1bHRMR1Zpc2liaWxpdHkiLCJsb2FkTWFwU3R5bGVzVXBkYXRlciIsIm5ld1N0eWxlcyIsImFkZExheWVyR3JvdXBzIiwibGF5ZXJHcm91cHMiLCJuZXdTdGF0ZSIsInRhc2tzIiwiY3JlYXRlQWN0aW9uVGFzayIsIl8iLCJsb2FkTWFwU3R5bGVFcnJVcGRhdGVyIiwiaWRzIiwiZXJyb3IiLCJDb25zb2xlIiwicmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIiLCJjb25maWciLCJtZXJnZWQiLCJCb29sZWFuIiwiVGFzayIsImFsbCIsInVybCIsImFjY2Vzc1Rva2VuIiwiTE9BRF9NQVBfU1RZTEVfVEFTSyIsImJpbWFwIiwicmVzdWx0cyIsImVyciIsInJlc2V0TWFwQ29uZmlnTWFwU3R5bGVVcGRhdGVyIiwiZW1wdHlDb25maWciLCJpbml0aWFsU3RhdGUiLCJsb2FkQ3VzdG9tTWFwU3R5bGVVcGRhdGVyIiwiaWNvbiIsImxhYmVsIiwibmFtZSIsImlucHV0TWFwU3R5bGVVcGRhdGVyIiwibWFwU3RhdGUiLCJ1cGRhdGVkIiwiaXNWYWxpZCIsInN0eWxlVXJsIiwiYWRkQ3VzdG9tTWFwU3R5bGVVcGRhdGVyIiwic3R5bGVJZCIsInNldDNkQnVpbGRpbmdDb2xvclVwZGF0ZXIiLCJzZXRCYWNrZ3JvdW5kQ29sb3JVcGRhdGVyIiwiY3VzdG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBYUE7O0FBU0E7O0FBQ0E7O0FBVUE7Ozs7OztBQWdDQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQWdCO0FBQ3RDLE1BQU1DLGtCQUFrQixHQUFHLEVBQTNCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLE1BQWxCO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLEVBQXZCO0FBRUEsU0FBTztBQUNMRCxJQUFBQSxTQUFTLEVBQVRBLFNBREs7QUFFTEQsSUFBQUEsa0JBQWtCLEVBQWxCQSxrQkFGSztBQUdMRSxJQUFBQSxjQUFjLEVBQWRBLGNBSEs7QUFJTEMsSUFBQUEsU0FBUyxFQUFFQyw4QkFBbUJDLE1BQW5CLENBQ1QsVUFBQ0MsSUFBRCxFQUFPQyxJQUFQO0FBQUEsNkNBQ0tELElBREwsNENBRUdDLElBQUksQ0FBQ0MsRUFGUixFQUVhRCxJQUZiO0FBQUEsS0FEUyxFQUtULEVBTFMsQ0FKTjtBQVdMO0FBQ0FFLElBQUFBLG9CQUFvQixFQUFFLElBWmpCO0FBYUxDLElBQUFBLFlBQVksRUFBRUMsaUNBYlQ7QUFjTEMsSUFBQUEsdUJBQXVCLEVBQUUsS0FkcEI7QUFlTEMsSUFBQUEsVUFBVSxFQUFFQyxvQkFBb0IsRUFmM0I7QUFnQkxDLElBQUFBLG1CQUFtQixFQUFFLHFCQUFTQyw2QkFBVCxDQWhCaEI7QUFpQkxDLElBQUFBLHFCQUFxQixFQUFF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QUUsSUFOQTtBQU9MVSxJQUFBQSxJQUFJLEVBQUUsSUFQRDtBQVFMWSxJQUFBQSxNQUFNLEVBQUU7QUFSSCxHQUFQO0FBVUQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgVGFzaywge3dpdGhUYXNrfSBmcm9tICdyZWFjdC1wYWxtL3Rhc2tzJztcbmltcG9ydCBjbG9uZURlZXAgZnJvbSAnbG9kYXNoLmNsb25lZGVlcCc7XG5pbXBvcnQgQ29uc29sZSBmcm9tICdnbG9iYWwvY29uc29sZSc7XG5cbi8vIFV0aWxzXG5pbXBvcnQge1xuICBnZXREZWZhdWx0TGF5ZXJHcm91cFZpc2liaWxpdHksXG4gIGlzVmFsaWRTdHlsZVVybCxcbiAgZ2V0U3R5bGVEb3dubG9hZFVybCxcbiAgbWVyZ2VMYXllckdyb3VwVmlzaWJpbGl0eSxcbiAgZWRpdFRvcE1hcFN0eWxlLFxuICBlZGl0Qm90dG9tTWFwU3R5bGUsXG4gIGdldFN0eWxlSW1hZ2VJY29uLFxuICBnZW5lcmF0ZUhhc2hJZCxcbiAgaXNQbGFpbk9iamVjdCxcbiAgaGV4VG9SZ2IsXG4gIGNvbG9yTWF5YmVUb1JHQlxufSBmcm9tICdAa2VwbGVyLmdsL3V0aWxzJztcbmltcG9ydCB7XG4gIERFRkFVTFRfTUFQX1NUWUxFUyxcbiAgREVGQVVMVF9MQVlFUl9HUk9VUFMsXG4gIERFRkFVTFRfTUFQQk9YX0FQSV9VUkwsXG4gIE5PX01BUF9JRCxcbiAgREVGQVVMVF9CTERHX0NPTE9SLFxuICBERUZBVUxUX0JBQ0tHUk9VTkRfQ09MT1IsXG4gIEJBU0VfTUFQX0JBQ0tHUk9VTkRfTEFZRVJfSURTXG59IGZyb20gJ0BrZXBsZXIuZ2wvY29uc3RhbnRzJztcbmltcG9ydCB7QUNUSU9OX1RBU0ssIExPQURfTUFQX1NUWUxFX1RBU0t9IGZyb20gJ0BrZXBsZXIuZ2wvdGFza3MnO1xuaW1wb3J0IHtyZ2J9IGZyb20gJ2QzLWNvbG9yJztcblxuaW1wb3J0IHtcbiAgUkdCQ29sb3IsXG4gIExheWVyR3JvdXAsXG4gIEJhc2VNYXBTdHlsZSxcbiAgTWFwU3R5bGVzLFxuICBJbnB1dFN0eWxlLFxuICBWaXNpYmxlTGF5ZXJHcm91cHNcbn0gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5pbXBvcnQge1xuICBBY3Rpb25UeXBlcyxcbiAgUmVjZWl2ZU1hcENvbmZpZ1BheWxvYWQsXG4gIEtlcGxlckdsSW5pdFBheWxvYWQsXG4gIE1hcFN0eWxlQWN0aW9ucyxcbiAgbG9hZE1hcFN0eWxlcyxcbiAgbG9hZE1hcFN0eWxlRXJyXG59IGZyb20gJ0BrZXBsZXIuZ2wvYWN0aW9ucyc7XG5cbmV4cG9ydCB0eXBlIE1hcGJveFN0eWxlVXJsID0gc3RyaW5nO1xuXG5leHBvcnQgdHlwZSBNYXBTdHlsZSA9IHtcbiAgc3R5bGVUeXBlOiBzdHJpbmc7XG4gIHZpc2libGVMYXllckdyb3VwczogVmlzaWJsZUxheWVyR3JvdXBzO1xuICB0b3BMYXllckdyb3VwczogVmlzaWJsZUxheWVyR3JvdXBzO1xuICBtYXBTdHlsZXM6IE1hcFN0eWxlcztcbiAgLy8gc2F2ZSBtYXBib3ggYWNjZXNzIHRva2VuXG4gIG1hcGJveEFwaUFjY2Vzc1Rva2VuOiBzdHJpbmcgfCBudWxsO1xuICBtYXBib3hBcGlVcmw6IHN0cmluZztcbiAgbWFwU3R5bGVzUmVwbGFjZURlZmF1bHQ6IGJvb2xlYW47XG4gIGlucHV0U3R5bGU6IElucHV0U3R5bGU7XG4gIHRocmVlREJ1aWxkaW5nQ29sb3I6IFJHQkNvbG9yO1xuICBiYWNrZ3JvdW5kQ29sb3I6IFJHQkNvbG9yO1xuICBjdXN0b20zREJ1aWxkaW5nQ29sb3I6IGJvb2xlYW47XG4gIGJvdHRvbU1hcFN0eWxlOiBhbnk7XG4gIHRvcE1hcFN0eWxlOiBhbnk7XG4gIGluaXRpYWxTdGF0ZT86IE1hcFN0eWxlO1xuICBpc0xvYWRpbmc6IHtcbiAgICBba2V5OiBzdHJpbmddOiBib29sZWFuO1xuICB9O1xufTtcblxuY29uc3QgZ2V0RGVmYXVsdFN0YXRlID0gKCk6IE1hcFN0eWxlID0+IHtcbiAgY29uc3QgdmlzaWJsZUxheWVyR3JvdXBzID0ge307XG4gIGNvbnN0IHN0eWxlVHlwZSA9ICdkYXJrJztcbiAgY29uc3QgdG9wTGF5ZXJHcm91cHMgPSB7fTtcblxuICByZXR1cm4ge1xuICAgIHN0eWxlVHlwZSxcbiAgICB2aXNpYmxlTGF5ZXJHcm91cHMsXG4gICAgdG9wTGF5ZXJHcm91cHMsXG4gICAgbWFwU3R5bGVzOiBERUZBVUxUX01BUF9TVFlMRVMucmVkdWNlKFxuICAgICAgKGFjY3UsIGN1cnIpID0+ICh7XG4gICAgICAgIC4uLmFjY3UsXG4gICAgICAgIFtjdXJyLmlkXTogY3VyclxuICAgICAgfSksXG4gICAgICB7fVxuICAgICksXG4gICAgLy8gc2F2ZSBtYXBib3ggYWNjZXNzIHRva2VuXG4gICAgbWFwYm94QXBpQWNjZXNzVG9rZW46IG51bGwsXG4gICAgbWFwYm94QXBpVXJsOiBERUZBVUxUX01BUEJPWF9BUElfVVJMLFxuICAgIG1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0OiBmYWxzZSxcbiAgICBpbnB1dFN0eWxlOiBnZXRJbml0aWFsSW5wdXRTdHlsZSgpLFxuICAgIHRocmVlREJ1aWxkaW5nQ29sb3I6IGhleFRvUmdiKERFRkFVTFRfQkxER19DT0xPUiksXG4gICAgY3VzdG9tM0RCdWlsZGluZ0NvbG9yOiBmYWxzZSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGhleFRvUmdiKERFRkFVTFRfQkFDS0dST1VORF9DT0xPUiksXG4gICAgaXNMb2FkaW5nOiB7fSxcbiAgICBib3R0b21NYXBTdHlsZTogdW5kZWZpbmVkLFxuICAgIHRvcE1hcFN0eWxlOiB1bmRlZmluZWRcbiAgfTtcbn07XG5cbi8qKlxuICogVXBkYXRlcnMgZm9yIGBtYXBTdHlsZWAuIENhbiBiZSB1c2VkIGluIHlvdXIgcm9vdCByZWR1Y2VyIHRvIGRpcmVjdGx5IG1vZGlmeSBrZXBsZXIuZ2wncyBzdGF0ZS5cbiAqIFJlYWQgbW9yZSBhYm91dCBbVXNpbmcgdXBkYXRlcnNdKC4uL2FkdmFuY2VkLXVzYWdlL3VzaW5nLXVwZGF0ZXJzLm1kKVxuICogQHB1YmxpY1xuICogQGV4YW1wbGVcbiAqXG4gKiBpbXBvcnQga2VwbGVyR2xSZWR1Y2VyLCB7bWFwU3R5bGVVcGRhdGVyc30gZnJvbSAna2VwbGVyLmdsL3JlZHVjZXJzJztcbiAqIC8vIFJvb3QgUmVkdWNlclxuICogY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICogIGtlcGxlckdsOiBrZXBsZXJHbFJlZHVjZXIsXG4gKiAgYXBwOiBhcHBSZWR1Y2VyXG4gKiB9KTtcbiAqXG4gKiBjb25zdCBjb21wb3NlZFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICogIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAqICAgIC8vIGNsaWNrIGJ1dHRvbiB0byBoaWRlIGxhYmVsIGZyb20gYmFja2dyb3VuZCBtYXBcbiAqICAgIGNhc2UgJ0NMSUNLX0JVVFRPTic6XG4gKiAgICAgIHJldHVybiB7XG4gKiAgICAgICAgLi4uc3RhdGUsXG4gKiAgICAgICAga2VwbGVyR2w6IHtcbiAqICAgICAgICAgIC4uLnN0YXRlLmtlcGxlckdsLFxuICogICAgICAgICAgZm9vOiB7XG4gKiAgICAgICAgICAgICAuLi5zdGF0ZS5rZXBsZXJHbC5mb28sXG4gKiAgICAgICAgICAgICBtYXBTdHlsZTogbWFwU3R5bGVVcGRhdGVycy5tYXBDb25maWdDaGFuZ2VVcGRhdGVyKFxuICogICAgICAgICAgICAgICBtYXBTdHlsZSxcbiAqICAgICAgICAgICAgICAge3BheWxvYWQ6IHt2aXNpYmxlTGF5ZXJHcm91cHM6IHtsYWJlbDogZmFsc2UsIHJvYWQ6IHRydWUsIGJhY2tncm91bmQ6IHRydWV9fX1cbiAqICAgICAgICAgICAgIClcbiAqICAgICAgICAgIH1cbiAqICAgICAgICB9XG4gKiAgICAgIH07XG4gKiAgfVxuICogIHJldHVybiByZWR1Y2VycyhzdGF0ZSwgYWN0aW9uKTtcbiAqIH07XG4gKlxuICogZXhwb3J0IGRlZmF1bHQgY29tcG9zZWRSZWR1Y2VyO1xuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuLy8gQHRzLWlnbm9yZVxuY29uc3QgbWFwU3R5bGVVcGRhdGVycyA9IG51bGw7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG4vKipcbiAqIERlZmF1bHQgaW5pdGlhbCBgbWFwU3R5bGVgXG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVVcGRhdGVyc1xuICogQGNvbnN0YW50XG4gKiBAcHJvcGVydHkgc3R5bGVUeXBlIC0gRGVmYXVsdDogYCdkYXJrJ2BcbiAqIEBwcm9wZXJ0eSB2aXNpYmxlTGF5ZXJHcm91cHMgLSBEZWZhdWx0OiBge31gXG4gKiBAcHJvcGVydHkgdG9wTGF5ZXJHcm91cHMgLSBEZWZhdWx0OiBge31gXG4gKiBAcHJvcGVydHkgbWFwU3R5bGVzIC0gbWFwcGluZyBmcm9tIHN0eWxlIGtleSB0byBzdHlsZSBvYmplY3RcbiAqIEBwcm9wZXJ0eSBtYXBib3hBcGlBY2Nlc3NUb2tlbiAtIERlZmF1bHQ6IGBudWxsYFxuICogQFByb3BlcnR5IG1hcGJveEFwaVVybCAtIERlZmF1bHQgbnVsbFxuICogQFByb3BlcnR5IG1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0IC0gRGVmYXVsdDogYGZhbHNlYFxuICogQHByb3BlcnR5IGlucHV0U3R5bGUgLSBEZWZhdWx0OiBge31gXG4gKiBAcHJvcGVydHkgdGhyZWVEQnVpbGRpbmdDb2xvciAtIERlZmF1bHQ6IGBbciwgZywgYl1gXG4gKiBAcHJvcGVydHkgYmFja2dyb3VuZENvbG9yIC0gRGVmYXVsdDogYFtyLCBnLCBiXWBcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IElOSVRJQUxfTUFQX1NUWUxFOiBNYXBTdHlsZSA9IGdldERlZmF1bHRTdGF0ZSgpO1xuXG5pbnRlcmZhY2UgR2V0TWFwU3R5bGVzUGFyYW0ge1xuICBzdHlsZVR5cGU6IHN0cmluZztcbiAgdmlzaWJsZUxheWVyR3JvdXBzOiB7W2lkOiBzdHJpbmddOiBMYXllckdyb3VwIHwgYm9vbGVhbn07XG4gIHRvcExheWVyR3JvdXBzOiB7W2lkOiBzdHJpbmddOiBMYXllckdyb3VwIHwgYm9vbGVhbn07XG4gIG1hcFN0eWxlczoge1tpZDogc3RyaW5nXTogYW55fTtcbn1cblxuLyoqXG4gKiBDcmVhdGUgdHdvIG1hcCBzdHlsZXMgZnJvbSBwcmVzZXQgbWFwIHN0eWxlLCBvbmUgZm9yIHRvcCBtYXAgb25lIGZvciBib3R0b21cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3R5bGVUeXBlIC0gY3VycmVudCBtYXAgc3R5bGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB2aXNpYmxlTGF5ZXJHcm91cHMgLSB2aXNpYmxlIGxheWVycyBvZiBib3R0b20gbWFwXG4gKiBAcGFyYW0ge09iamVjdH0gdG9wTGF5ZXJHcm91cHMgLSB2aXNpYmxlIGxheWVycyBvZiB0b3AgbWFwXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwU3R5bGVzIC0gYSBkaWN0aW9uYXJ5IG9mIGFsbCBtYXAgc3R5bGVzXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBib3R0b21NYXBTdHlsZSB8IHRvcE1hcFN0eWxlIHwgaXNSYXN0ZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1hcFN0eWxlcyh7XG4gIHN0eWxlVHlwZSxcbiAgdmlzaWJsZUxheWVyR3JvdXBzLFxuICB0b3BMYXllckdyb3VwcyxcbiAgbWFwU3R5bGVzXG59OiBHZXRNYXBTdHlsZXNQYXJhbSkge1xuICBjb25zdCBtYXBTdHlsZSA9IG1hcFN0eWxlc1tzdHlsZVR5cGVdO1xuXG4gIC8vIHN0eWxlIG1pZ2h0IG5vdCBiZSBsb2FkZWQgeWV0XG4gIGlmICghbWFwU3R5bGUgfHwgIW1hcFN0eWxlLnN0eWxlKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgY29uc3QgZWRpdGFibGUgPSBPYmplY3Qua2V5cyh2aXNpYmxlTGF5ZXJHcm91cHMpLmxlbmd0aDtcblxuICBjb25zdCBib3R0b21NYXBTdHlsZSA9ICFlZGl0YWJsZVxuICAgID8gbWFwU3R5bGUuc3R5bGVcbiAgICA6IGVkaXRCb3R0b21NYXBTdHlsZSh7XG4gICAgICAgIGlkOiBzdHlsZVR5cGUsXG4gICAgICAgIG1hcFN0eWxlLFxuICAgICAgICB2aXNpYmxlTGF5ZXJHcm91cHNcbiAgICAgIH0pO1xuXG4gIGNvbnN0IGhhc1RvcExheWVyID0gZWRpdGFibGUgPiAwICYmIE9iamVjdC52YWx1ZXModG9wTGF5ZXJHcm91cHMpLnNvbWUodiA9PiB2KTtcblxuICAvLyBtdXRlIHRvcCBsYXllciBpZiBub3QgdmlzaWJsZSBpbiBib3R0b20gbGF5ZXJcbiAgY29uc3QgdG9wTGF5ZXJzID1cbiAgICBoYXNUb3BMYXllciAmJlxuICAgIE9iamVjdC5rZXlzKHRvcExheWVyR3JvdXBzKS5yZWR1Y2UoXG4gICAgICAoYWNjdSwga2V5KSA9PiAoe1xuICAgICAgICAuLi5hY2N1LFxuICAgICAgICBba2V5XTogdG9wTGF5ZXJHcm91cHNba2V5XSAmJiB2aXNpYmxlTGF5ZXJHcm91cHNba2V5XVxuICAgICAgfSksXG4gICAgICB7fSBhcyB7W2lkOiBzdHJpbmddOiBMYXllckdyb3VwIHwgYm9vbGVhbn1cbiAgICApO1xuXG4gIGNvbnN0IHRvcE1hcFN0eWxlID0gaGFzVG9wTGF5ZXJcbiAgICA/IGVkaXRUb3BNYXBTdHlsZSh7XG4gICAgICAgIGlkOiBzdHlsZVR5cGUsXG4gICAgICAgIG1hcFN0eWxlLFxuICAgICAgICB2aXNpYmxlTGF5ZXJHcm91cHM6IHRvcExheWVyc1xuICAgICAgfSlcbiAgICA6IG51bGw7XG5cbiAgcmV0dXJuIHtib3R0b21NYXBTdHlsZSwgdG9wTWFwU3R5bGUsIGVkaXRhYmxlfTtcbn1cblxuZnVuY3Rpb24gZmluZExheWVyRmlsbENvbG9yKGxheWVyKSB7XG4gIHJldHVybiBsYXllciAmJiBsYXllci5wYWludCAmJiBsYXllci5wYWludFsnYmFja2dyb3VuZC1jb2xvciddO1xufVxuXG4vLyBuZWVkIHRvIGJlIGNhcmVmdWwgYmVjYXVzZSBzb21lIGJhc2VtYXAgbGF5ZXIucGFpbnRbJ2JhY2tncm91bmQtY29sb3InXSB2YWx1ZXMgbWF5IGJlIGFuIGludGVycG9sYXRlIGFycmF5IGV4cHJlc3Npb24gaW5zdGVhZCBvZiBhIGNvbG9yIHN0cmluZ1xuLy8gaHR0cHM6Ly9kb2NzLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL3N0eWxlLXNwZWMvbGF5ZXJzLyNwYWludC1iYWNrZ3JvdW5kLWJhY2tncm91bmQtY29sb3Jcbi8vIGh0dHBzOi8vZG9jcy5tYXBib3guY29tL21hcGJveC1nbC1qcy9zdHlsZS1zcGVjL2V4cHJlc3Npb25zLyNpbnRlcnBvbGF0ZVxuZnVuY3Rpb24gZ2V0UGFpbnRDb2xvcihjb2xvcikge1xuICBpZiAoQXJyYXkuaXNBcnJheShjb2xvcikgJiYgY29sb3JbMF0gPT09ICdpbnRlcnBvbGF0ZScpIHtcbiAgICAvLyBnZXQgY29sb3Igb2YgZmlyc3Qgem9vbSBicmVha1xuICAgIC8vIFtcImludGVycG9sYXRlXCIsIFtcImxpbmVhclwiXSwgW1wiem9vbVwiXSwgMTEsIFwiaHNsKDM1LCAzMiUsIDkxJSlcIiwgMTMsIFwiaHNsKDM1LCAxMiUsIDg5JSlcIl1cbiAgICByZXR1cm4gY29sb3JbNF07XG4gIH1cbiAgcmV0dXJuIGNvbG9yO1xufVxuXG5mdW5jdGlvbiBnZXQzREJ1aWxkaW5nQ29sb3Ioc3R5bGUpOiBSR0JDb2xvciB7XG4gIC8vIHNldCBidWlsZGluZyBjb2xvciB0byBiZSB0aGUgc2FtZSBhcyB0aGUgYmFja2dyb3VuZCBjb2xvci5cbiAgaWYgKCFzdHlsZS5zdHlsZSkge1xuICAgIHJldHVybiBoZXhUb1JnYihERUZBVUxUX0JMREdfQ09MT1IpO1xuICB9XG5cbiAgY29uc3QgYmFja2dyb3VuZExheWVyID0gKHN0eWxlLnN0eWxlLmxheWVycyB8fCBbXSkuZmluZCgoe2lkfSkgPT4gaWQgPT09ICdiYWNrZ3JvdW5kJyk7XG5cbiAgY29uc3QgYnVpbGRpbmdMYXllciA9IChzdHlsZS5zdHlsZS5sYXllcnMgfHwgW10pLmZpbmQoKHtpZH0pID0+IGlkLm1hdGNoKC9idWlsZGluZy8pKTtcblxuICBjb25zdCBidWlsZGluZ0NvbG9yID1cbiAgICBmaW5kTGF5ZXJGaWxsQ29sb3IoYnVpbGRpbmdMYXllcikgfHwgZmluZExheWVyRmlsbENvbG9yKGJhY2tncm91bmRMYXllcikgfHwgREVGQVVMVF9CTERHX0NPTE9SO1xuXG4gIC8vIGJyaWdodGVuIG9yIGRhcmtlbiBidWlsZGluZyBiYXNlZCBvbiBzdHlsZVxuICBjb25zdCBvcGVyYXRpb24gPSBzdHlsZS5pZC5tYXRjaCgvKD89KGRhcmt8bmlnaHQpKS8pID8gJ2JyaWdodGVyJyA6ICdkYXJrZXInO1xuXG4gIGNvbnN0IGFscGhhID0gMC4yO1xuICBjb25zdCByZ2JPYmogPSByZ2IoYnVpbGRpbmdDb2xvcilbb3BlcmF0aW9uXShbYWxwaGFdKTtcbiAgcmV0dXJuIFtyZ2JPYmouciwgcmdiT2JqLmcsIHJnYk9iai5iXTtcbn1cblxuZnVuY3Rpb24gZ2V0QmFja2dyb3VuZENvbG9yRnJvbVN0eWxlQmFzZUxheWVyKFxuICBzdHlsZTogQmFzZU1hcFN0eWxlLFxuICBiYWNrdXBCYWNrZ3JvdW5kQ29sb3I6IFJHQkNvbG9yXG4pOiBSR0JDb2xvciB7XG4gIGlmICghc3R5bGUuc3R5bGUpIHtcbiAgICByZXR1cm4gY29sb3JNYXliZVRvUkdCKGJhY2t1cEJhY2tncm91bmRDb2xvcikgfHwgYmFja3VwQmFja2dyb3VuZENvbG9yO1xuICB9XG5cbiAgLy8gQHRzLWV4cGVjdC1lcnJvciBzdHlsZS5zdHlsZSBub3QgdHlwZWRcbiAgY29uc3QgYmFzZUxheWVyID0gKHN0eWxlLnN0eWxlLmxheWVycyB8fCBbXSkuZmluZCgoe2lkfSkgPT5cbiAgICBCQVNFX01BUF9CQUNLR1JPVU5EX0xBWUVSX0lEUy5pbmNsdWRlcyhpZClcbiAgKTtcblxuICBjb25zdCBiYWNrZ3JvdW5kQ29sb3JPZkJhc2VMYXllciA9IGdldFBhaW50Q29sb3IoZmluZExheWVyRmlsbENvbG9yKGJhc2VMYXllcikpO1xuXG4gIGNvbnN0IG5ld0JhY2tncm91bmRDb2xvciA9XG4gICAgdHlwZW9mIGJhY2tncm91bmRDb2xvck9mQmFzZUxheWVyID09PSAnc3RyaW5nJ1xuICAgICAgPyBiYWNrZ3JvdW5kQ29sb3JPZkJhc2VMYXllclxuICAgICAgOiBiYWNrdXBCYWNrZ3JvdW5kQ29sb3I7XG5cbiAgY29uc3QgbmV3QmFja2dyb3VuZENvbG9yQXNSR0JBcnJheSA9IGNvbG9yTWF5YmVUb1JHQihuZXdCYWNrZ3JvdW5kQ29sb3IpXG4gICAgLy8gaWYgbmV3QmFja2dyb3VuZENvbG9yIHdhcyBpbiBzdHJpbmcgSFNMIGZvcm1hdCBpdCBjYW4gaW50cm9kdWNlIFJHQiBudW1iZXJzIHdpdGggZGVjaW1hbHMsXG4gICAgLy8gd2hpY2ggbWF5IHJlbmRlciB0aGUgYmFja2dyb3VuZC1jb2xvciBDU1Mgb2YgdGhlIDxTdHlsZWRNYXA+IGNvbnRhaW5lciBpbmNvcnJlY3RseSB3aGVuIHVzaW5nIG91ciBvd24gY29sb3IgdXRpbHMgYHJnYlRvSGV4KClgXG4gICAgLy8gc28gd2UgYXR0ZW1wdCB0byByb3VuZCB0byBuZWFyZXN0IGludGVnZXIgaGVyZVxuICAgID8ubWFwKGNoYW5uZWxOdW1iZXIgPT4gTWF0aC5yb3VuZChjaGFubmVsTnVtYmVyKSkgYXMgUkdCQ29sb3IgfCBudWxsO1xuXG4gIHJldHVybiBuZXdCYWNrZ3JvdW5kQ29sb3JBc1JHQkFycmF5IHx8IGJhY2t1cEJhY2tncm91bmRDb2xvcjtcbn1cblxuLy8gZGV0ZXJtaW5lIG5ldyBiYWNrZ3JvdW5kQ29sb3IgZnJvbSBlaXRoZXIgcHJldmlvdXMgc3RhdGUgYmFzZW1hcCBzdHlsZSwgcHJldmlvdXMgc3RhdGUgYmFja2dyb3VuZENvbG9yLCBvciB0aGUgREVGQVVMVF9CQUNLR1JPVU5EX0NPTE9SXG5mdW5jdGlvbiBnZXRCYWNrZ3JvdW5kQ29sb3IocHJldmlvdXNTdGF0ZTogTWFwU3R5bGUsIHN0eWxlVHlwZTogc3RyaW5nKSB7XG4gIGNvbnN0IHByZXZpb3VzU3RhdGVNYXBTdHlsZSA9IHByZXZpb3VzU3RhdGUubWFwU3R5bGVzW3ByZXZpb3VzU3RhdGUuc3R5bGVUeXBlXTtcbiAgY29uc3QgYmFja3VwQmFja2dyb3VuZENvbG9yID0gcHJldmlvdXNTdGF0ZS5iYWNrZ3JvdW5kQ29sb3IgfHwgREVGQVVMVF9CQUNLR1JPVU5EX0NPTE9SO1xuICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPVxuICAgIHN0eWxlVHlwZSA9PT0gTk9fTUFQX0lEXG4gICAgICA/IC8vIGlmIHRoZSBzdHlsZSBoYXMgc3dpdGNoZWQgdG8gdGhlIFwibm8gYmFzZW1hcFwiIHN0eWxlLFxuICAgICAgICAvLyBhdHRlbXB0IHRvIGRldGVjdCBiYWNrZ3JvdW5kQ29sb3Igb2YgdGhlIHByZXZpb3VzIGJhc2VtYXAgaWYgaXQgd2FzIGEgbWFwYm94IGJhc2VtYXBcbiAgICAgICAgLy8gYW5kIHNldCBpdCBhcyB0aGUgXCJubyBiYXNlbWFwXCIgYmFja2dyb3VuZENvbG9yXG4gICAgICAgIGdldEJhY2tncm91bmRDb2xvckZyb21TdHlsZUJhc2VMYXllcihwcmV2aW91c1N0YXRlTWFwU3R5bGUsIGJhY2t1cEJhY2tncm91bmRDb2xvcilcbiAgICAgIDogLy8gb3RoZXJ3aXNlIGxlYXZlIGl0IGFsb25lIGFuZCByZWx5IG9uIHRoZSBwcmV2aW91cyBzdGF0ZSdzIHByZWV4aXN0aW5nIGJhY2tncm91bmRDb2xvclxuICAgICAgICAvLyBvciBERUZBVUxUX0JBQ0tHUk9VTkRfQ09MT1IgYXMgYSBsYXN0IHJlc29ydFxuICAgICAgICBiYWNrdXBCYWNrZ3JvdW5kQ29sb3I7XG5cbiAgcmV0dXJuIGJhY2tncm91bmRDb2xvcjtcbn1cblxuZnVuY3Rpb24gZ2V0TGF5ZXJHcm91cHNGcm9tU3R5bGUoc3R5bGUpIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkoc3R5bGU/LmxheWVycylcbiAgICA/IERFRkFVTFRfTEFZRVJfR1JPVVBTLmZpbHRlcihsZyA9PiBzdHlsZS5sYXllcnMuZmlsdGVyKGxnLmZpbHRlcikubGVuZ3RoKVxuICAgIDogW107XG59XG5cbi8vIFVwZGF0ZXJzXG5cbi8qKlxuICogQG1lbWJlcm9mIG1hcFN0eWxlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlcXVlc3RNYXBTdHlsZXNVcGRhdGVyID0gKFxuICBzdGF0ZTogTWFwU3R5bGUsXG4gIHtwYXlsb2FkOiB7bWFwU3R5bGVzLCBvblN1Y2Nlc3N9fTogTWFwU3R5bGVBY3Rpb25zLlJlcXVlc3RNYXBTdHlsZXNVcGRhdGVyQWN0aW9uXG4pOiBNYXBTdHlsZSA9PiB7XG4gIGNvbnN0IHRvTG9hZCA9IE9iamVjdC5rZXlzKG1hcFN0eWxlcykucmVkdWNlKFxuICAgIChhY2N1LCBpZCkgPT4gKHtcbiAgICAgIC4uLmFjY3UsXG4gICAgICAuLi4oIXN0YXRlLmlzTG9hZGluZ1tpZF0gPyB7W2lkXTogbWFwU3R5bGVzW2lkXX0gOiB7fSlcbiAgICB9KSxcbiAgICB7fVxuICApO1xuICBjb25zdCBsb2FkTWFwU3R5bGVUYXNrcyA9IGdldExvYWRNYXBTdHlsZVRhc2tzKFxuICAgIHRvTG9hZCxcbiAgICBzdGF0ZS5tYXBib3hBcGlBY2Nlc3NUb2tlbixcbiAgICBzdGF0ZS5tYXBib3hBcGlVcmwsXG4gICAgb25TdWNjZXNzXG4gICk7XG5cbiAgY29uc3QgaXNMb2FkaW5nID0gT2JqZWN0LmtleXModG9Mb2FkKS5yZWR1Y2UoXG4gICAgKGFjY3UsIGtleSkgPT4gKHtcbiAgICAgIC4uLmFjY3UsXG4gICAgICBba2V5XTogdHJ1ZVxuICAgIH0pLFxuICAgIHt9XG4gICk7XG4gIGNvbnN0IG5leHRTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBpc0xvYWRpbmdcbiAgfTtcbiAgcmV0dXJuIHdpdGhUYXNrKG5leHRTdGF0ZSwgbG9hZE1hcFN0eWxlVGFza3MpO1xufTtcblxuLyoqXG4gKiBQcm9wYWdhdGUgYG1hcFN0eWxlYCByZWR1Y2VyIHdpdGggYG1hcGJveEFwaUFjY2Vzc1Rva2VuYCBhbmQgYG1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0YC5cbiAqIGlmIG1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0IGlzIHRydWUgbWFwU3R5bGVzIGlzIGVtcHRpZWQ7IGxvYWRNYXBTdHlsZXNVcGRhdGVyKCkgd2lsbFxuICogcG9wdWxhdGUgbWFwU3R5bGVzLlxuICpcbiAqIEBtZW1iZXJvZiBtYXBTdHlsZVVwZGF0ZXJzXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBpbml0TWFwU3R5bGVVcGRhdGVyID0gKFxuICBzdGF0ZTogTWFwU3R5bGUsXG4gIHtcbiAgICBwYXlsb2FkID0ge31cbiAgfToge1xuICAgIHR5cGU/OiB0eXBlb2YgQWN0aW9uVHlwZXMuSU5JVDtcbiAgICBwYXlsb2FkOiBLZXBsZXJHbEluaXRQYXlsb2FkO1xuICB9XG4pOiBNYXBTdHlsZSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgLy8gc2F2ZSBtYXBib3ggYWNjZXNzIHRva2VuIHRvIG1hcCBzdHlsZSBzdGF0ZVxuICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogcGF5bG9hZC5tYXBib3hBcGlBY2Nlc3NUb2tlbiB8fCBzdGF0ZS5tYXBib3hBcGlBY2Nlc3NUb2tlbixcbiAgbWFwYm94QXBpVXJsOiBwYXlsb2FkLm1hcGJveEFwaVVybCB8fCBzdGF0ZS5tYXBib3hBcGlVcmwsXG4gIG1hcFN0eWxlczogIXBheWxvYWQubWFwU3R5bGVzUmVwbGFjZURlZmF1bHQgPyBzdGF0ZS5tYXBTdHlsZXMgOiB7fSxcbiAgbWFwU3R5bGVzUmVwbGFjZURlZmF1bHQ6IHBheWxvYWQubWFwU3R5bGVzUmVwbGFjZURlZmF1bHQgfHwgZmFsc2Vcbn0pO1xuLy8gfSk7XG5cbi8qKlxuICogVXBkYXRlIGB2aXNpYmxlTGF5ZXJHcm91cHNgdG8gY2hhbmdlIGxheWVyIGdyb3VwIHZpc2liaWxpdHlcbiAqIEBtZW1iZXJvZiBtYXBTdHlsZVVwZGF0ZXJzXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBtYXBDb25maWdDaGFuZ2VVcGRhdGVyID0gKFxuICBzdGF0ZTogTWFwU3R5bGUsXG4gIGFjdGlvbjogTWFwU3R5bGVBY3Rpb25zLk1hcENvbmZpZ0NoYW5nZVVwZGF0ZXJBY3Rpb25cbik6IE1hcFN0eWxlID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICAuLi5hY3Rpb24ucGF5bG9hZCxcbiAgICAuLi5nZXRNYXBTdHlsZXMoe1xuICAgICAgLi4uc3RhdGUsXG4gICAgICAuLi5hY3Rpb24ucGF5bG9hZFxuICAgIH0pXG4gIH07XG59O1xuXG5jb25zdCBoYXNTdHlsZU9iamVjdCA9IHN0eWxlID0+IGlzUGxhaW5PYmplY3Qoc3R5bGU/LnN0eWxlKTtcblxuLyoqXG4gKiBDaGFuZ2UgdG8gYW5vdGhlciBtYXAgc3R5bGUuIFRoZSBzZWxlY3RlZCBzdHlsZSBzaG91bGQgYWxyZWFkeSBiZWVuIGxvYWRlZCBpbnRvIGBtYXBTdHlsZS5tYXBTdHlsZXNgXG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbWFwU3R5bGVDaGFuZ2VVcGRhdGVyID0gKFxuICBzdGF0ZTogTWFwU3R5bGUsXG4gIHtwYXlsb2FkOiB7c3R5bGVUeXBlLCBvblN1Y2Nlc3N9fTogTWFwU3R5bGVBY3Rpb25zLk1hcFN0eWxlQ2hhbmdlVXBkYXRlckFjdGlvblxuKTogTWFwU3R5bGUgPT4ge1xuICBpZiAoIXN0YXRlLm1hcFN0eWxlc1tzdHlsZVR5cGVdKSB7XG4gICAgLy8gd2UgbWlnaHQgbm90IGhhdmUgcmVjZWl2ZWQgdGhlIHN0eWxlIHlldFxuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGlmICghaGFzU3R5bGVPYmplY3Qoc3RhdGUubWFwU3R5bGVzW3N0eWxlVHlwZV0pKSB7XG4gICAgLy8gc3R5bGUgaGFzbid0IGxvYWRlZCB5ZXRcbiAgICByZXR1cm4gcmVxdWVzdE1hcFN0eWxlc1VwZGF0ZXIoXG4gICAgICB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzdHlsZVR5cGVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICBtYXBTdHlsZXM6IHtcbiAgICAgICAgICAgIFtzdHlsZVR5cGVdOiBzdGF0ZS5tYXBTdHlsZXNbc3R5bGVUeXBlXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb25TdWNjZXNzXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgY29uc3QgZGVmYXVsdExHVmlzaWJpbGl0eSA9IGdldERlZmF1bHRMYXllckdyb3VwVmlzaWJpbGl0eShzdGF0ZS5tYXBTdHlsZXNbc3R5bGVUeXBlXSk7XG5cbiAgY29uc3QgdmlzaWJsZUxheWVyR3JvdXBzID0gbWVyZ2VMYXllckdyb3VwVmlzaWJpbGl0eShcbiAgICBkZWZhdWx0TEdWaXNpYmlsaXR5LFxuICAgIHN0YXRlLnZpc2libGVMYXllckdyb3Vwc1xuICApO1xuXG4gIGNvbnN0IHRocmVlREJ1aWxkaW5nQ29sb3I6IFJHQkNvbG9yID0gc3RhdGUuY3VzdG9tM0RCdWlsZGluZ0NvbG9yXG4gICAgPyBzdGF0ZS50aHJlZURCdWlsZGluZ0NvbG9yXG4gICAgOiBnZXQzREJ1aWxkaW5nQ29sb3Ioc3RhdGUubWFwU3R5bGVzW3N0eWxlVHlwZV0pO1xuXG4gIC8vIGRldGVybWluZSBuZXcgYmFja2dyb3VuZENvbG9yIGZyb20gZWl0aGVyIHByZXZpb3VzIHN0YXRlIGJhc2VtYXAgc3R5bGUsIHByZXZpb3VzIHN0YXRlIGJhY2tncm91bmRDb2xvciwgb3IgdGhlIERFRkFVTFRfQkFDS0dST1VORF9DT0xPUlxuICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBnZXRCYWNrZ3JvdW5kQ29sb3Ioc3RhdGUsIHN0eWxlVHlwZSk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBzdHlsZVR5cGUsXG4gICAgdmlzaWJsZUxheWVyR3JvdXBzLFxuICAgIHRocmVlREJ1aWxkaW5nQ29sb3IsXG4gICAgYmFja2dyb3VuZENvbG9yLFxuICAgIC4uLmdldE1hcFN0eWxlcyh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHZpc2libGVMYXllckdyb3VwcyxcbiAgICAgIHN0eWxlVHlwZVxuICAgIH0pXG4gIH07XG59O1xuXG4vKipcbiAqIENhbGxiYWNrIHdoZW4gbG9hZCBtYXAgc3R5bGUgc3VjY2Vzc1xuICogQG1lbWJlcm9mIG1hcFN0eWxlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGxvYWRNYXBTdHlsZXNVcGRhdGVyID0gKFxuICBzdGF0ZTogTWFwU3R5bGUsXG4gIGFjdGlvbjogTWFwU3R5bGVBY3Rpb25zLkxvYWRNYXBTdHlsZXNVcGRhdGVyQWN0aW9uXG4pOiBNYXBTdHlsZSA9PiB7XG4gIGNvbnN0IHtuZXdTdHlsZXMsIG9uU3VjY2Vzc30gPSBhY3Rpb24ucGF5bG9hZCB8fCB7fTtcblxuICBjb25zdCBhZGRMYXllckdyb3VwcyA9IE9iamVjdC5rZXlzKG5ld1N0eWxlcykucmVkdWNlKFxuICAgIChhY2N1LCBpZCkgPT4gKHtcbiAgICAgIC4uLmFjY3UsXG4gICAgICBbaWRdOiB7XG4gICAgICAgIC4uLm5ld1N0eWxlc1tpZF0sXG4gICAgICAgIGxheWVyR3JvdXBzOiBuZXdTdHlsZXNbaWRdLmxheWVyR3JvdXBzIHx8IGdldExheWVyR3JvdXBzRnJvbVN0eWxlKG5ld1N0eWxlc1tpZF0uc3R5bGUpXG4gICAgICB9XG4gICAgfSksXG4gICAge31cbiAgKTtcbiAgLy8gcmVzZXQgaXNMb2FkaW5nXG4gIGNvbnN0IGlzTG9hZGluZyA9IE9iamVjdC5rZXlzKHN0YXRlLmlzTG9hZGluZykucmVkdWNlKFxuICAgIChhY2N1LCBrZXkpID0+ICh7XG4gICAgICAuLi5hY2N1LFxuICAgICAgLi4uKHN0YXRlLmlzTG9hZGluZ1trZXldICYmIGhhc1N0eWxlT2JqZWN0KG5ld1N0eWxlc1trZXldKVxuICAgICAgICA/IHtba2V5XTogZmFsc2V9XG4gICAgICAgIDoge1trZXldOiBzdGF0ZS5pc0xvYWRpbmdba2V5XX0pXG4gICAgfSksXG4gICAge31cbiAgKTtcbiAgLy8gYWRkIG5ldyBzdHlsZXMgdG8gc3RhdGVcbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgaXNMb2FkaW5nLFxuICAgIG1hcFN0eWxlczoge1xuICAgICAgLi4uc3RhdGUubWFwU3R5bGVzLFxuICAgICAgLi4uYWRkTGF5ZXJHcm91cHNcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdGFza3MgPSBjcmVhdGVBY3Rpb25UYXNrKG9uU3VjY2Vzcywge3N0eWxlVHlwZTogc3RhdGUuc3R5bGVUeXBlfSk7XG5cbiAgY29uc3QgbmV4dFN0YXRlID0gbmV3U3R5bGVzW3N0YXRlLnN0eWxlVHlwZV1cbiAgICA/IG1hcFN0eWxlQ2hhbmdlVXBkYXRlcihuZXdTdGF0ZSwge3BheWxvYWQ6IHtzdHlsZVR5cGU6IHN0YXRlLnN0eWxlVHlwZX19KVxuICAgIDogbmV3U3RhdGU7XG5cbiAgcmV0dXJuIHRhc2tzID8gd2l0aFRhc2sobmV4dFN0YXRlLCB0YXNrcykgOiBuZXh0U3RhdGU7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVBY3Rpb25UYXNrKGFjdGlvbiwgcGF5bG9hZCkge1xuICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBBQ1RJT05fVEFTSygpLm1hcChfID0+IGFjdGlvbihwYXlsb2FkKSk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBDYWxsYmFjayB3aGVuIGxvYWQgbWFwIHN0eWxlIGVycm9yXG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG4vLyBkbyBub3RoaW5nIGZvciBub3csIGlmIGRpZG4ndCBsb2FkLCBza2lwIGl0XG5leHBvcnQgY29uc3QgbG9hZE1hcFN0eWxlRXJyVXBkYXRlciA9IChcbiAgc3RhdGU6IE1hcFN0eWxlLFxuICB7cGF5bG9hZDoge2lkcywgZXJyb3J9fTogTWFwU3R5bGVBY3Rpb25zLkxvYWRNYXBTdHlsZUVyclVwZGF0ZXJBY3Rpb25cbik6IE1hcFN0eWxlID0+IHtcbiAgQ29uc29sZS5lcnJvcihlcnJvcik7XG4gIC8vIHJlc2V0IGlzTG9hZGluZ1xuICBjb25zdCBpc0xvYWRpbmcgPSBPYmplY3Qua2V5cyhzdGF0ZS5pc0xvYWRpbmcpLnJlZHVjZShcbiAgICAoYWNjdSwga2V5KSA9PiAoe1xuICAgICAgLi4uYWNjdSxcbiAgICAgIC4uLihzdGF0ZS5pc0xvYWRpbmdba2V5XSAmJiAoaWRzIHx8IFtdKS5pbmNsdWRlcyhrZXkpXG4gICAgICAgID8ge1trZXldOiBmYWxzZX1cbiAgICAgICAgOiB7W2tleV06IHN0YXRlLmlzTG9hZGluZ1trZXldfSlcbiAgICB9KSxcbiAgICB7fVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgaXNMb2FkaW5nXG4gIH07XG59O1xuXG4vKipcbiAqIExvYWQgbWFwIHN0eWxlIG9iamVjdCB3aGVuIHBhc3MgaW4gc2F2ZWQgbWFwIGNvbmZpZ1xuICogQG1lbWJlcm9mIG1hcFN0eWxlVXBkYXRlcnNcbiAqIEBwYXJhbSBzdGF0ZSBgbWFwU3R5bGVgXG4gKiBAcGFyYW0gYWN0aW9uXG4gKiBAcGFyYW0gYWN0aW9uLnBheWxvYWQgc2F2ZWQgbWFwIGNvbmZpZyBge21hcFN0eWxlLCB2aXNTdGF0ZSwgbWFwU3RhdGV9YFxuICogQHJldHVybnMgbmV4dFN0YXRlIG9yIGByZWFjdC1wYW1gIHRhc2tzIHRvIGxvYWQgbWFwIHN0eWxlIG9iamVjdFxuICovXG5leHBvcnQgY29uc3QgcmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIgPSAoXG4gIHN0YXRlOiBNYXBTdHlsZSxcbiAge1xuICAgIHBheWxvYWQ6IHtjb25maWd9XG4gIH06IHtcbiAgICB0eXBlPzogdHlwZW9mIEFjdGlvblR5cGVzLlJFQ0VJVkVfTUFQX0NPTkZJRztcbiAgICBwYXlsb2FkOiBSZWNlaXZlTWFwQ29uZmlnUGF5bG9hZDtcbiAgfVxuKTogTWFwU3R5bGUgPT4ge1xuICBjb25zdCB7bWFwU3R5bGV9ID0gY29uZmlnIHx8IHt9O1xuXG4gIGlmICghbWFwU3R5bGUpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICAvLyBtZXJnZSBkZWZhdWx0IG1hcFN0eWxlc1xuICBjb25zdCBtZXJnZWQgPSBtYXBTdHlsZS5tYXBTdHlsZXNcbiAgICA/IHtcbiAgICAgICAgLi4ubWFwU3R5bGUsXG4gICAgICAgIG1hcFN0eWxlczoge1xuICAgICAgICAgIC4uLm1hcFN0eWxlLm1hcFN0eWxlcyxcbiAgICAgICAgICAuLi5zdGF0ZS5tYXBTdHlsZXNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIDogbWFwU3R5bGU7XG5cbiAgLy8gc2V0IGN1c3RvbTNEQnVpbGRpbmdDb2xvcjogdHJ1ZSBpZiBtYXBTdHlsZSBjb250YWlucyB0aHJlZURCdWlsZGluZ0NvbG9yXG4gIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgbWVyZ2VkLmN1c3RvbTNEQnVpbGRpbmdDb2xvciA9XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIEJvb2xlYW4obWFwU3R5bGUudGhyZWVEQnVpbGRpbmdDb2xvcikgfHwgbWVyZ2VkLmN1c3RvbTNEQnVpbGRpbmdDb2xvcjtcbiAgY29uc3QgbmV3U3RhdGUgPSBtYXBDb25maWdDaGFuZ2VVcGRhdGVyKHN0YXRlLCB7cGF5bG9hZDogbWVyZ2VkfSk7XG5cbiAgcmV0dXJuIG1hcFN0eWxlQ2hhbmdlVXBkYXRlcihuZXdTdGF0ZSwge3BheWxvYWQ6IHtzdHlsZVR5cGU6IG5ld1N0YXRlLnN0eWxlVHlwZX19KTtcbn07XG5cbmZ1bmN0aW9uIGdldExvYWRNYXBTdHlsZVRhc2tzKG1hcFN0eWxlcywgbWFwYm94QXBpQWNjZXNzVG9rZW4sIG1hcGJveEFwaVVybCwgb25TdWNjZXNzKSB7XG4gIHJldHVybiBbXG4gICAgVGFzay5hbGwoXG4gICAgICBPYmplY3QudmFsdWVzKG1hcFN0eWxlcylcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICAubWFwKCh7aWQsIHVybCwgYWNjZXNzVG9rZW59KSA9PiAoe1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIHVybDogaXNWYWxpZFN0eWxlVXJsKHVybClcbiAgICAgICAgICAgID8gZ2V0U3R5bGVEb3dubG9hZFVybCh1cmwsIGFjY2Vzc1Rva2VuIHx8IG1hcGJveEFwaUFjY2Vzc1Rva2VuLCBtYXBib3hBcGlVcmwpXG4gICAgICAgICAgICA6IHVybFxuICAgICAgICB9KSlcbiAgICAgICAgLm1hcChMT0FEX01BUF9TVFlMRV9UQVNLKVxuICAgICkuYmltYXAoXG4gICAgICAvLyBzdWNjZXNzXG4gICAgICByZXN1bHRzID0+XG4gICAgICAgIGxvYWRNYXBTdHlsZXMoXG4gICAgICAgICAgcmVzdWx0cy5yZWR1Y2UoXG4gICAgICAgICAgICAoYWNjdSwge2lkLCBzdHlsZX0pID0+ICh7XG4gICAgICAgICAgICAgIC4uLmFjY3UsXG4gICAgICAgICAgICAgIFtpZF06IHtcbiAgICAgICAgICAgICAgICAuLi5tYXBTdHlsZXNbaWRdLFxuICAgICAgICAgICAgICAgIHN0eWxlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAge31cbiAgICAgICAgICApLFxuICAgICAgICAgIG9uU3VjY2Vzc1xuICAgICAgICApLFxuICAgICAgLy8gZXJyb3JcbiAgICAgIGVyciA9PiBsb2FkTWFwU3R5bGVFcnIoT2JqZWN0LmtleXMobWFwU3R5bGVzKSwgZXJyKVxuICAgIClcbiAgXTtcbn1cbi8qKlxuICogUmVzZXQgbWFwIHN0eWxlIGNvbmZpZyB0byBpbml0aWFsIHN0YXRlXG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVVcGRhdGVyc1xuICogQHBhcmFtIHN0YXRlIGBtYXBTdHlsZWBcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgcmVzZXRNYXBDb25maWdNYXBTdHlsZVVwZGF0ZXIgPSAoc3RhdGU6IE1hcFN0eWxlKTogTWFwU3R5bGUgPT4ge1xuICBjb25zdCBlbXB0eUNvbmZpZyA9IHtcbiAgICAuLi5JTklUSUFMX01BUF9TVFlMRSxcbiAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogc3RhdGUubWFwYm94QXBpQWNjZXNzVG9rZW4sXG4gICAgbWFwYm94QXBpVXJsOiBzdGF0ZS5tYXBib3hBcGlVcmwsXG4gICAgbWFwU3R5bGVzUmVwbGFjZURlZmF1bHQ6IHN0YXRlLm1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0LFxuICAgIC4uLnN0YXRlLmluaXRpYWxTdGF0ZSxcbiAgICBtYXBTdHlsZXM6IHN0YXRlLm1hcFN0eWxlcyxcbiAgICBpbml0aWFsU3RhdGU6IHN0YXRlLmluaXRpYWxTdGF0ZVxuICB9O1xuXG4gIHJldHVybiBtYXBTdHlsZUNoYW5nZVVwZGF0ZXIoZW1wdHlDb25maWcsIHtwYXlsb2FkOiB7c3R5bGVUeXBlOiBlbXB0eUNvbmZpZy5zdHlsZVR5cGV9fSk7XG59O1xuXG4vKipcbiAqIENhbGxiYWNrIHdoZW4gYSBjdXN0b20gbWFwIHN0eWxlIG9iamVjdCBpcyByZWNlaXZlZFxuICogQG1lbWJlcm9mIG1hcFN0eWxlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGxvYWRDdXN0b21NYXBTdHlsZVVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBNYXBTdHlsZSxcbiAge3BheWxvYWQ6IHtpY29uLCBzdHlsZSwgZXJyb3J9fTogTWFwU3R5bGVBY3Rpb25zLkxvYWRDdXN0b21NYXBTdHlsZVVwZGF0ZXJBY3Rpb25cbik6IE1hcFN0eWxlID0+ICh7XG4gIC4uLnN0YXRlLFxuICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gIGlucHV0U3R5bGU6IHtcbiAgICAuLi5zdGF0ZS5pbnB1dFN0eWxlLFxuICAgIC8vIHN0eWxlIGpzb24gYW5kIGljb24gd2lsbCBsb2FkIGFzeW5jaHJvbm91c2x5XG4gICAgLi4uKHN0eWxlXG4gICAgICA/IHtcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgICAgaWQ6IHN0eWxlLmlkIHx8IGdlbmVyYXRlSGFzaElkKCksXG4gICAgICAgICAgLy8gbWFrZSBhIGNvcHkgb2YgdGhlIHN0eWxlIG9iamVjdFxuICAgICAgICAgIHN0eWxlOiBjbG9uZURlZXAoc3R5bGUpLFxuICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgICBsYWJlbDogc3R5bGUubmFtZSxcbiAgICAgICAgICAvLyBnYXRoZXJpbmcgbGF5ZXIgZ3JvdXAgaW5mbyBmcm9tIHN0eWxlIGpzb25cbiAgICAgICAgICBsYXllckdyb3VwczogZ2V0TGF5ZXJHcm91cHNGcm9tU3R5bGUoc3R5bGUpXG4gICAgICAgIH1cbiAgICAgIDoge30pLFxuICAgIC4uLihpY29uID8ge2ljb259IDoge30pLFxuICAgIC4uLihlcnJvciAhPT0gdW5kZWZpbmVkID8ge2Vycm9yfSA6IHt9KVxuICB9XG59KTtcblxuLyoqXG4gKiBJbnB1dCBhIGN1c3RvbSBtYXAgc3R5bGUgb2JqZWN0XG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgaW5wdXRNYXBTdHlsZVVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBNYXBTdHlsZSxcbiAge3BheWxvYWQ6IHtpbnB1dFN0eWxlLCBtYXBTdGF0ZX19OiBNYXBTdHlsZUFjdGlvbnMuSW5wdXRNYXBTdHlsZVVwZGF0ZXJBY3Rpb25cbik6IE1hcFN0eWxlID0+IHtcbiAgY29uc3QgdXBkYXRlZCA9IHtcbiAgICAuLi5zdGF0ZS5pbnB1dFN0eWxlLFxuICAgIC4uLmlucHV0U3R5bGVcbiAgfTtcblxuICBjb25zdCBpc1ZhbGlkID0gaXNWYWxpZFN0eWxlVXJsKHVwZGF0ZWQudXJsKTtcbiAgY29uc3QgaWNvbiA9IGlzVmFsaWRcbiAgICA/IGdldFN0eWxlSW1hZ2VJY29uKHtcbiAgICAgICAgbWFwU3RhdGUsXG4gICAgICAgIHN0eWxlVXJsOiB1cGRhdGVkLnVybCB8fCAnJyxcbiAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW46IHVwZGF0ZWQuYWNjZXNzVG9rZW4gfHwgc3RhdGUubWFwYm94QXBpQWNjZXNzVG9rZW4gfHwgJycsXG4gICAgICAgIG1hcGJveEFwaVVybDogc3RhdGUubWFwYm94QXBpVXJsIHx8IERFRkFVTFRfTUFQQk9YX0FQSV9VUkxcbiAgICAgIH0pXG4gICAgOiBzdGF0ZS5pbnB1dFN0eWxlLmljb247XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBpbnB1dFN0eWxlOiB7XG4gICAgICAuLi51cGRhdGVkLFxuICAgICAgaXNWYWxpZCxcbiAgICAgIGljb25cbiAgICB9XG4gIH07XG59O1xuXG4vKipcbiAqIEFkZCBtYXAgc3R5bGUgZnJvbSB1c2VyIGlucHV0IHRvIHJlZHVjZXIgYW5kIHNldCBpdCB0byBjdXJyZW50IHN0eWxlXG4gKiBUaGlzIGFjdGlvbiBpcyBjYWxsZWQgd2hlbiB1c2VyIGNsaWNrIGNvbmZpcm0gYWZ0ZXIgcHV0dGluZyBpbiBhIHZhbGlkIHN0eWxlIHVybCBpbiB0aGUgY3VzdG9tIG1hcCBzdHlsZSBkaWFsb2cuXG4gKiBJdCBzaG91bGQgbm90IGJlIGNhbGxlZCBmcm9tIG91dHNpZGUga2VwbGVyLmdsIHdpdGhvdXQgYSB2YWxpZCBgaW5wdXRTdHlsZWAgaW4gdGhlIGBtYXBTdHlsZWAgcmVkdWNlci5cbiAqIEBtZW1iZXJvZiBtYXBTdHlsZVVwZGF0ZXJzXG4gKi9cbmV4cG9ydCBjb25zdCBhZGRDdXN0b21NYXBTdHlsZVVwZGF0ZXIgPSAoc3RhdGU6IE1hcFN0eWxlKTogTWFwU3R5bGUgPT4ge1xuICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gIGNvbnN0IHN0eWxlSWQgPSBzdGF0ZS5pbnB1dFN0eWxlLmlkO1xuICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBtYXBTdHlsZXM6IHtcbiAgICAgIC4uLnN0YXRlLm1hcFN0eWxlcyxcbiAgICAgIFtzdHlsZUlkXTogc3RhdGUuaW5wdXRTdHlsZVxuICAgIH0sXG4gICAgLy8gc2V0IHRvIGRlZmF1bHRcbiAgICBpbnB1dFN0eWxlOiBnZXRJbml0aWFsSW5wdXRTdHlsZSgpXG4gIH07XG4gIC8vIHNldCBuZXcgc3R5bGVcbiAgcmV0dXJuIG1hcFN0eWxlQ2hhbmdlVXBkYXRlcihuZXdTdGF0ZSwge3BheWxvYWQ6IHtzdHlsZVR5cGU6IHN0eWxlSWR9fSk7XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgM2QgYnVpbGRpbmcgY29sb3JcbiAqIEBtZW1iZXJvZiBtYXBTdHlsZVVwZGF0ZXJzXG4gKi9cbmV4cG9ydCBjb25zdCBzZXQzZEJ1aWxkaW5nQ29sb3JVcGRhdGVyID0gKFxuICBzdGF0ZTogTWFwU3R5bGUsXG4gIHtwYXlsb2FkOiBjb2xvcn06IE1hcFN0eWxlQWN0aW9ucy5TZXQzZEJ1aWxkaW5nQ29sb3JVcGRhdGVyQWN0aW9uXG4pOiBNYXBTdHlsZSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgdGhyZWVEQnVpbGRpbmdDb2xvcjogY29sb3IsXG4gIGN1c3RvbTNEQnVpbGRpbmdDb2xvcjogdHJ1ZVxufSk7XG5cbi8qKlxuICogVXBkYXRlcyBiYWNrZ3JvdW5kIGNvbG9yXG4gKiBAbWVtYmVyb2YgbWFwU3R5bGVVcGRhdGVyc1xuICovXG5leHBvcnQgY29uc3Qgc2V0QmFja2dyb3VuZENvbG9yVXBkYXRlciA9IChcbiAgc3RhdGU6IE1hcFN0eWxlLFxuICB7cGF5bG9hZDogY29sb3J9OiBNYXBTdHlsZUFjdGlvbnMuU2V0QmFja2dyb3VuZENvbG9yVXBkYXRlckFjdGlvblxuKTogTWFwU3R5bGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGJhY2tncm91bmRDb2xvcjogY29sb3Jcbn0pO1xuXG4vKipcbiAqIFJldHVybiB0aGUgaW5pdGlhbCBpbnB1dCBzdHlsZVxuICogQHJldHVybiBPYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRpYWxJbnB1dFN0eWxlKCkge1xuICByZXR1cm4ge1xuICAgIGFjY2Vzc1Rva2VuOiBudWxsLFxuICAgIGVycm9yOiBmYWxzZSxcbiAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICBsYWJlbDogbnVsbCxcbiAgICBzdHlsZTogbnVsbCxcbiAgICB1cmw6IG51bGwsXG4gICAgaWNvbjogbnVsbCxcbiAgICBjdXN0b206IHRydWVcbiAgfTtcbn1cbiJdfQ==