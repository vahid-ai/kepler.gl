"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMapDimForSplitMap = getMapDimForSplitMap;
exports.toggleSplitMapViewportUpdater = exports.toggleSplitMapUpdater = exports.receiveMapConfigUpdater = exports.resetMapConfigUpdater = exports.togglePerspectiveUpdater = exports.fitBoundsUpdater = exports.updateMapUpdater = exports.INITIAL_MAP_STATE = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _geoViewport = _interopRequireDefault(require("@mapbox/geo-viewport"));

var _booleanWithin = _interopRequireDefault(require("@turf/boolean-within"));

var _bboxPolygon = _interopRequireDefault(require("@turf/bbox-polygon"));

var _webMercator = require("@math.gl/web-mercator");

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _lodash = _interopRequireDefault(require("lodash.pick"));

var _utils = require("@kepler.gl/utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Updaters for `mapState` reducer. Can be used in your root reducer to directly modify kepler.gl's state.
 * Read more about [Using updaters](../advanced-usage/using-updaters.md)
 * @public
 * @example
 *
 * import keplerGlReducer, {mapStateUpdaters} from 'kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    // click button to close side panel
 *    case 'CLICK_BUTTON':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          foo: {
 *             ...state.keplerGl.foo,
 *             mapState: mapStateUpdaters.fitBoundsUpdater(
 *               mapState, {payload: [127.34, 31.09, 127.56, 31.59]]}
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
var mapStateUpdaters = null;
/* eslint-enable no-unused-vars */

/**
 * Default initial `mapState`
 * @memberof mapStateUpdaters
 * @constant
 * @property pitch Default: `0`
 * @property bearing Default: `0`
 * @property latitude Default: `37.75043`
 * @property longitude Default: `-122.34679`
 * @property zoom Default: `9`
 * @property dragRotate Default: `false`
 * @property width Default: `800`
 * @property height Default: `800`
 * @property minZoom: `undefined`,
 * @property maxZoom: `undefined`,
 * @property maxBounds: `undefined`,
 * @property isSplit: `false`,
 * @property isViewportSynced: `true`,
 * @property isZoomLocked: `false`,
 * @property splitMapViewports: `[]`
 * @public
 */

var INITIAL_MAP_STATE = {
  pitch: 0,
  bearing: 0,
  latitude: 37.75043,
  longitude: -122.34679,
  zoom: 9,
  dragRotate: false,
  width: 800,
  height: 800,
  minZoom: undefined,
  maxZoom: undefined,
  maxBounds: undefined,
  isSplit: false,
  isViewportSynced: true,
  isZoomLocked: false,
  splitMapViewports: []
};
/* Updaters */

/**
 * Update map viewport
 * @memberof mapStateUpdaters
 * @public
 */

exports.INITIAL_MAP_STATE = INITIAL_MAP_STATE;

var updateMapUpdater = function updateMapUpdater(state, action) {
  var _action$payload = action.payload,
      viewport = _action$payload.viewport,
      _action$payload$mapIn = _action$payload.mapIndex,
      mapIndex = _action$payload$mapIn === void 0 ? 0 : _action$payload$mapIn;

  if (state.isViewportSynced) {
    // The `updateViewport` function is typed as (Viewport, Viewport) -> Viewport but here the
    // expected typing is (MapState, Viewport) -> MapState.
    // this could be a potential bug as we treat Viewport and MapState as equal seemingly
    // @ts-expect-error Type 'Viewport' is missing the following properties from type 'MapState': isSplit, isViewportSynced, isZoomLocked, splitMapViewports
    return updateViewport(state, viewport);
  }

  var otherViewportMapIndex = -1;
  var splitMapViewports = state.splitMapViewports.map(function (currentViewport, i) {
    if (i === mapIndex) {
      // update the matching viewport with the newViewport info in the action payload
      return updateViewport(currentViewport, viewport);
    }

    otherViewportMapIndex = i; // make no changes to the other viewport (yet)

    return currentViewport;
  }); // make conditional updates to the other viewport not matching this payload's `mapIndex`

  if (Number.isFinite(otherViewportMapIndex) && otherViewportMapIndex > -1) {
    // width and height are a special case and are always updated
    splitMapViewports[otherViewportMapIndex].width = splitMapViewports[mapIndex].width;
    splitMapViewports[otherViewportMapIndex].height = splitMapViewports[mapIndex].height;

    if (state.isZoomLocked) {
      // update the other viewport with the new zoom from the split viewport that was updated with this payload's `mapIndex`
      splitMapViewports[otherViewportMapIndex].zoom = splitMapViewports[mapIndex].zoom;
    }
  }

  return _objectSpread(_objectSpread(_objectSpread({}, state), splitMapViewports[mapIndex]), {}, {
    // update the mapState with the new array of split viewports
    splitMapViewports: splitMapViewports
  });
};
/**
 * Fit map viewport to bounds
 * @memberof mapStateUpdaters
 * @public
 */


exports.updateMapUpdater = updateMapUpdater;

var fitBoundsUpdater = function fitBoundsUpdater(state, action) {
  var centerAndZoom = (0, _utils.getCenterAndZoomFromBounds)(action.payload, {
    width: state.width,
    height: state.height
  });

  if (!centerAndZoom) {
    // bounds is invalid
    return state;
  }

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    latitude: centerAndZoom.center[1],
    longitude: centerAndZoom.center[0]
  }, Number.isFinite(centerAndZoom.zoom) ? {
    zoom: centerAndZoom.zoom
  } : {}); // if fitting to bounds while split and unsynced
  // copy the new latitude, longitude, and zoom values to each split viewport


  if (newState.splitMapViewports.length) {
    newState.splitMapViewports = newState.splitMapViewports.map(function (currentViewport) {
      return _objectSpread(_objectSpread({}, currentViewport), {}, {
        latitude: newState.latitude,
        longitude: newState.longitude,
        zoom: newState.zoom
      });
    });
  }

  return newState;
};
/**
 * Toggle between 3d and 2d map.
 * @memberof mapStateUpdaters
 * @public
 */


exports.fitBoundsUpdater = fitBoundsUpdater;

var togglePerspectiveUpdater = function togglePerspectiveUpdater(state, action) {
  var newState = _objectSpread(_objectSpread(_objectSpread({}, state), {
    pitch: state.dragRotate ? 0 : 50,
    bearing: state.dragRotate ? 0 : 24
  }), {}, {
    dragRotate: !state.dragRotate
  }); // if toggling 3d and 2d while split and unsynced
  // copy the new pitch, bearing, and dragRotate values to each split viewport


  if (newState.splitMapViewports.length) {
    newState.splitMapViewports = newState.splitMapViewports.map(function (currentViewport) {
      return _objectSpread(_objectSpread({}, currentViewport), {}, {
        pitch: newState.pitch,
        bearing: newState.bearing,
        dragRotate: newState.dragRotate
      });
    });
  }

  return newState;
};
/**
 * reset mapState to initial State
 * @memberof mapStateUpdaters
 * @public
 */


exports.togglePerspectiveUpdater = togglePerspectiveUpdater;

var resetMapConfigUpdater = function resetMapConfigUpdater(state) {
  return _objectSpread(_objectSpread(_objectSpread({}, INITIAL_MAP_STATE), state.initialState), {}, {
    initialState: state.initialState
  });
}; // consider case where you have a split map and user wants to reset

/**
 * Update `mapState` to propagate a new config
 * @memberof mapStateUpdaters
 * @public
 */


exports.resetMapConfigUpdater = resetMapConfigUpdater;

var receiveMapConfigUpdater = function receiveMapConfigUpdater(state, _ref) {
  var _ref$payload = _ref.payload,
      _ref$payload$config = _ref$payload.config,
      config = _ref$payload$config === void 0 ? {} : _ref$payload$config,
      _ref$payload$options = _ref$payload.options,
      options = _ref$payload$options === void 0 ? {} : _ref$payload$options,
      _ref$payload$bounds = _ref$payload.bounds,
      bounds = _ref$payload$bounds === void 0 ? null : _ref$payload$bounds;

  /**
   * @type {Partial<MapState>}
   */
  var mapState = (config || {}).mapState || {}; // merged received mapState with previous state
  // state also may include properties that are new to an existing, saved project's mapState

  var mergedState = (0, _deepmerge["default"])(state, mapState, {
    // note: deepmerge by default will merge arrays by concatenating them
    // but we need to overwrite destination arrays with source arrays, if present
    // https://github.com/TehShrike/deepmerge#arraymerge-example-overwrite-target-array
    arrayMerge: function arrayMerge(_destinationArray, sourceArray) {
      return sourceArray;
    }
  }); // if center map
  // center map will override mapState config

  if (options.centerMap && bounds) {
    mergedState = fitBoundsUpdater(mergedState, {
      payload: bounds
    });
  }

  return _objectSpread(_objectSpread({}, mergedState), getMapDimForSplitMap(mergedState.isSplit, state));
};
/**
 * Toggle between one or split maps
 * @memberof mapStateUpdaters
 * @public
 */


exports.receiveMapConfigUpdater = receiveMapConfigUpdater;

var toggleSplitMapUpdater = function toggleSplitMapUpdater(state, action) {
  return _objectSpread(_objectSpread(_objectSpread({}, state), getMapDimForSplitMap(!state.isSplit, state)), {}, {
    isSplit: !state.isSplit
  }, !state.isSplit === false ? {
    // if toggling to no longer split (single mode) then reset a few properties
    isViewportSynced: true,
    isZoomLocked: false,
    splitMapViewports: []
  } : {});
};
/**
 * Toggle between locked and unlocked split viewports
 * @memberof mapStateUpdaters
 * @public
 */


exports.toggleSplitMapUpdater = toggleSplitMapUpdater;

var toggleSplitMapViewportUpdater = function toggleSplitMapViewportUpdater(state, action) {
  // new map state immediately gets the new, optional payload values for isViewportSynced and/or isZoomLocked
  var newMapState = _objectSpread(_objectSpread({}, state), action.payload || {});

  if (newMapState.isViewportSynced) {
    // switching from unsynced to synced viewports
    newMapState.splitMapViewports = [];
  } else {
    // switching from synced to unsynced viewports
    // or already in unsynced mode and toggling locked zoom
    if (state.isZoomLocked && !newMapState.isZoomLocked) {
      // switching off locked zoom while unsynced
      // don't copy the mapStates to left and right viewports because there will be zoom "jumping"
      return newMapState;
    }

    if (!state.isZoomLocked && newMapState.isZoomLocked) {
      // switching on locked zoom while unsynced
      // only copy zoom viewport property from the most recently interacted-with viewport to the other
      // TODO: do we want to check for a match a different way, such as a combo of `latitude` and `longitude`?
      var lastUpdatedViewportIndex = newMapState.splitMapViewports.findIndex(function (v) {
        return newMapState.zoom === v.zoom;
      });
      var splitMapViewports = newMapState.splitMapViewports.map(function (currentViewport, i) {
        if (i === lastUpdatedViewportIndex) {
          // no zoom to modify here
          return currentViewport;
        } // the other viewport gets the most recently interacted-with viewport's zoom
        // WHY? the viewport the user was last interacting with will set zoom across the board for smooth UX


        return _objectSpread(_objectSpread({}, currentViewport), {}, {
          zoom: newMapState.splitMapViewports[lastUpdatedViewportIndex].zoom
        });
      });
      newMapState.splitMapViewports = splitMapViewports;
      return newMapState;
    } // if current viewport is synced, and we are unsyncing it
    // or already in unsynced mode and NOT toggling locked zoom
    // make a fresh copy of the current viewport object, assign it to splitMapViewports[]
    // getViewportFromMapState is called twice to avoid memory allocation conflicts


    var leftViewport = getViewportFromMapState(newMapState);
    var rightViewport = getViewportFromMapState(newMapState);
    newMapState.splitMapViewports = [leftViewport, rightViewport];
  } // return new state


  return newMapState;
}; // Helpers


exports.toggleSplitMapViewportUpdater = toggleSplitMapViewportUpdater;

function getMapDimForSplitMap(isSplit, state) {
  // cases:
  // 1. state split: true - isSplit: true
  // do nothing
  // 2. state split: false - isSplit: false
  // do nothing
  if (state.isSplit === isSplit) {
    return {};
  }

  var width = state.isSplit && !isSplit ? // 3. state split: true - isSplit: false
  // double width
  state.width * 2 : // 4. state split: false - isSplit: true
  // split width
  state.width / 2;
  return {
    width: width
  };
}

function updateViewportBasedOnBounds(state, newMapState) {
  // Get the new viewport bounds
  var viewportBounds = _geoViewport["default"].bounds([newMapState.longitude, newMapState.latitude], newMapState.zoom, [newMapState.width, newMapState.height], _utils.MAPBOX_TILE_SIZE); // Generate turf Polygon from bounds for comparison


  var viewportBoundsPolygon = (0, _bboxPolygon["default"])(viewportBounds); // @ts-ignore

  var newStateMaxBounds = newMapState.maxBounds; // @ts-ignore

  var maxBoundsPolygon = (0, _bboxPolygon["default"])(newStateMaxBounds); // If maxBounds has changed reset the viewport to snap to bounds

  var hasMaxBoundsChanged = !state.maxBounds || !state.maxBounds.every(function (val, idx) {
    return val === newStateMaxBounds[idx];
  });

  if (hasMaxBoundsChanged) {
    // Check if the newMapState viewport is within maxBounds
    if (!(0, _booleanWithin["default"])(viewportBoundsPolygon, maxBoundsPolygon)) {
      var _fitBounds = (0, _webMercator.fitBounds)({
        width: newMapState.width,
        height: newMapState.width,
        bounds: [[newStateMaxBounds[0], newStateMaxBounds[1]], [newStateMaxBounds[2], newStateMaxBounds[3]]]
      }),
          latitude = _fitBounds.latitude,
          longitude = _fitBounds.longitude,
          zoom = _fitBounds.zoom;

      newMapState = _objectSpread(_objectSpread({}, newMapState), {}, {
        latitude: latitude,
        longitude: longitude
      }, Number.isFinite(zoom) ? {
        zoom: zoom
      } : {});
    }

    return newMapState;
  } // Check if the newMapState viewport is within maxBounds


  if (!(0, _booleanWithin["default"])(viewportBoundsPolygon, maxBoundsPolygon)) {
    newMapState = _objectSpread(_objectSpread({}, newMapState), {}, {
      longitude: state.longitude,
      latitude: state.latitude,
      zoom: state.zoom
    });
  }

  return newMapState;
}

function getViewportFromMapState(state) {
  return (0, _lodash["default"])(state, ['width', 'height', 'zoom', 'pitch', 'bearing', 'latitude', 'longitude', 'dragRotate', 'minZoom', 'maxZoom', 'maxBounds']);
} // From https://stackoverflow.com/a/56650790

/** Select items from object whose value is not undefined */


var definedProps = function definedProps(obj) {
  return Object.fromEntries(Object.entries(obj).filter(function (_ref2) {
    var _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
        k = _ref3[0],
        v = _ref3[1];

    return v !== undefined;
  }));
};

function updateViewport(originalViewport, viewportUpdates) {
  var newViewport = _objectSpread(_objectSpread({}, originalViewport), definedProps(viewportUpdates) || {}); // Make sure zoom level doesn't go bellow minZoom if defined


  if (newViewport.minZoom && newViewport.zoom && newViewport.zoom < newViewport.minZoom) {
    newViewport.zoom = newViewport.minZoom;
  } // Make sure zoom level doesn't go above maxZoom if defined


  if (newViewport.maxZoom && newViewport.zoom && newViewport.zoom > newViewport.maxZoom) {
    newViewport.zoom = newViewport.maxZoom;
  } // Limit viewport update based on maxBounds


  if (newViewport.maxBounds && (0, _utils.validateBounds)(newViewport.maxBounds)) {
    // @ts-expect-error Type 'Viewport' is missing the following properties from type 'MapState': isSplit, isViewportSynced, isZoomLocked, splitMapViewports
    newViewport = updateViewportBasedOnBounds(originalViewport, newViewport);
  }

  return newViewport;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zcmMvbWFwLXN0YXRlLXVwZGF0ZXJzLnRzIl0sIm5hbWVzIjpbIm1hcFN0YXRlVXBkYXRlcnMiLCJJTklUSUFMX01BUF9TVEFURSIsInBpdGNoIiwiYmVhcmluZyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiem9vbSIsImRyYWdSb3RhdGUiLCJ3aWR0aCIsImhlaWdodCIsIm1pblpvb20iLCJ1bmRlZmluZWQiLCJtYXhab29tIiwibWF4Qm91bmRzIiwiaXNTcGxpdCIsImlzVmlld3BvcnRTeW5jZWQiLCJpc1pvb21Mb2NrZWQiLCJzcGxpdE1hcFZpZXdwb3J0cyIsInVwZGF0ZU1hcFVwZGF0ZXIiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJ2aWV3cG9ydCIsIm1hcEluZGV4IiwidXBkYXRlVmlld3BvcnQiLCJvdGhlclZpZXdwb3J0TWFwSW5kZXgiLCJtYXAiLCJjdXJyZW50Vmlld3BvcnQiLCJpIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJmaXRCb3VuZHNVcGRhdGVyIiwiY2VudGVyQW5kWm9vbSIsIm5ld1N0YXRlIiwiY2VudGVyIiwibGVuZ3RoIiwidG9nZ2xlUGVyc3BlY3RpdmVVcGRhdGVyIiwicmVzZXRNYXBDb25maWdVcGRhdGVyIiwiaW5pdGlhbFN0YXRlIiwicmVjZWl2ZU1hcENvbmZpZ1VwZGF0ZXIiLCJjb25maWciLCJvcHRpb25zIiwiYm91bmRzIiwibWFwU3RhdGUiLCJtZXJnZWRTdGF0ZSIsImFycmF5TWVyZ2UiLCJfZGVzdGluYXRpb25BcnJheSIsInNvdXJjZUFycmF5IiwiY2VudGVyTWFwIiwiZ2V0TWFwRGltRm9yU3BsaXRNYXAiLCJ0b2dnbGVTcGxpdE1hcFVwZGF0ZXIiLCJ0b2dnbGVTcGxpdE1hcFZpZXdwb3J0VXBkYXRlciIsIm5ld01hcFN0YXRlIiwibGFzdFVwZGF0ZWRWaWV3cG9ydEluZGV4IiwiZmluZEluZGV4IiwidiIsImxlZnRWaWV3cG9ydCIsImdldFZpZXdwb3J0RnJvbU1hcFN0YXRlIiwicmlnaHRWaWV3cG9ydCIsInVwZGF0ZVZpZXdwb3J0QmFzZWRPbkJvdW5kcyIsInZpZXdwb3J0Qm91bmRzIiwiZ2VvVmlld3BvcnQiLCJNQVBCT1hfVElMRV9TSVpFIiwidmlld3BvcnRCb3VuZHNQb2x5Z29uIiwibmV3U3RhdGVNYXhCb3VuZHMiLCJtYXhCb3VuZHNQb2x5Z29uIiwiaGFzTWF4Qm91bmRzQ2hhbmdlZCIsImV2ZXJ5IiwidmFsIiwiaWR4IiwiZGVmaW5lZFByb3BzIiwib2JqIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJlbnRyaWVzIiwiZmlsdGVyIiwiayIsIm9yaWdpbmFsVmlld3BvcnQiLCJ2aWV3cG9ydFVwZGF0ZXMiLCJuZXdWaWV3cG9ydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLElBQU1BLGdCQUFnQixHQUFHLElBQXpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLElBQU1DLGlCQUEyQixHQUFHO0FBQ3pDQyxFQUFBQSxLQUFLLEVBQUUsQ0FEa0M7QUFFekNDLEVBQUFBLE9BQU8sRUFBRSxDQUZnQztBQUd6Q0MsRUFBQUEsUUFBUSxFQUFFLFFBSCtCO0FBSXpDQyxFQUFBQSxTQUFTLEVBQUUsQ0FBQyxTQUo2QjtBQUt6Q0MsRUFBQUEsSUFBSSxFQUFFLENBTG1D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RSxJQUFaLEdBQW1CeUUsV0FBVyxDQUFDckUsT0FBOUUsRUFBdUY7QUFDckZxRSxJQUFBQSxXQUFXLENBQUN6RSxJQUFaLEdBQW1CeUUsV0FBVyxDQUFDckUsT0FBL0I7QUFDRCxHQVRzRixDQVV2Rjs7O0FBQ0EsTUFBSXFFLFdBQVcsQ0FBQ25FLE9BQVosSUFBdUJtRSxXQUFXLENBQUN6RSxJQUFuQyxJQUEyQ3lFLFdBQVcsQ0FBQ3pFLElBQVosR0FBbUJ5RSxXQUFXLENBQUNuRSxPQUE5RSxFQUF1RjtBQUNyRm1FLElBQUFBLFdBQVcsQ0FBQ3pFLElBQVosR0FBbUJ5RSxXQUFXLENBQUNuRSxPQUEvQjtBQUNELEdBYnNGLENBY3ZGOzs7QUFDQSxNQUFJbUUsV0FBVyxDQUFDbEUsU0FBWixJQUF5QiwyQkFBZWtFLFdBQVcsQ0FBQ2xFLFNBQTNCLENBQTdCLEVBQW9FO0FBQ2xFO0FBQ0FrRSxJQUFBQSxXQUFXLEdBQUdwQiwyQkFBMkIsQ0FBQ2tCLGdCQUFELEVBQW1CRSxXQUFuQixDQUF6QztBQUNEOztBQUVELFNBQU9BLFdBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBnZW9WaWV3cG9ydCBmcm9tICdAbWFwYm94L2dlby12aWV3cG9ydCc7XG5pbXBvcnQgYm9vbGVhbldpdGhpbiBmcm9tICdAdHVyZi9ib29sZWFuLXdpdGhpbic7XG5pbXBvcnQgYmJveFBvbHlnb24gZnJvbSAnQHR1cmYvYmJveC1wb2x5Z29uJztcbmltcG9ydCB7Zml0Qm91bmRzfSBmcm9tICdAbWF0aC5nbC93ZWItbWVyY2F0b3InO1xuaW1wb3J0IGRlZXBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnO1xuaW1wb3J0IHBpY2sgZnJvbSAnbG9kYXNoLnBpY2snO1xuXG5pbXBvcnQge2dldENlbnRlckFuZFpvb21Gcm9tQm91bmRzLCB2YWxpZGF0ZUJvdW5kcywgTUFQQk9YX1RJTEVfU0laRX0gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5pbXBvcnQge01hcFN0YXRlQWN0aW9ucywgUmVjZWl2ZU1hcENvbmZpZ1BheWxvYWQsIEFjdGlvblR5cGVzfSBmcm9tICdAa2VwbGVyLmdsL2FjdGlvbnMnO1xuaW1wb3J0IHtNYXBTdGF0ZSwgQm91bmRzLCBWaWV3cG9ydH0gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5cbi8qKlxuICogVXBkYXRlcnMgZm9yIGBtYXBTdGF0ZWAgcmVkdWNlci4gQ2FuIGJlIHVzZWQgaW4geW91ciByb290IHJlZHVjZXIgdG8gZGlyZWN0bHkgbW9kaWZ5IGtlcGxlci5nbCdzIHN0YXRlLlxuICogUmVhZCBtb3JlIGFib3V0IFtVc2luZyB1cGRhdGVyc10oLi4vYWR2YW5jZWQtdXNhZ2UvdXNpbmctdXBkYXRlcnMubWQpXG4gKiBAcHVibGljXG4gKiBAZXhhbXBsZVxuICpcbiAqIGltcG9ydCBrZXBsZXJHbFJlZHVjZXIsIHttYXBTdGF0ZVVwZGF0ZXJzfSBmcm9tICdrZXBsZXIuZ2wvcmVkdWNlcnMnO1xuICogLy8gUm9vdCBSZWR1Y2VyXG4gKiBjb25zdCByZWR1Y2VycyA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gKiAga2VwbGVyR2w6IGtlcGxlckdsUmVkdWNlcixcbiAqICBhcHA6IGFwcFJlZHVjZXJcbiAqIH0pO1xuICpcbiAqIGNvbnN0IGNvbXBvc2VkUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gKiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICogICAgLy8gY2xpY2sgYnV0dG9uIHRvIGNsb3NlIHNpZGUgcGFuZWxcbiAqICAgIGNhc2UgJ0NMSUNLX0JVVFRPTic6XG4gKiAgICAgIHJldHVybiB7XG4gKiAgICAgICAgLi4uc3RhdGUsXG4gKiAgICAgICAga2VwbGVyR2w6IHtcbiAqICAgICAgICAgIC4uLnN0YXRlLmtlcGxlckdsLFxuICogICAgICAgICAgZm9vOiB7XG4gKiAgICAgICAgICAgICAuLi5zdGF0ZS5rZXBsZXJHbC5mb28sXG4gKiAgICAgICAgICAgICBtYXBTdGF0ZTogbWFwU3RhdGVVcGRhdGVycy5maXRCb3VuZHNVcGRhdGVyKFxuICogICAgICAgICAgICAgICBtYXBTdGF0ZSwge3BheWxvYWQ6IFsxMjcuMzQsIDMxLjA5LCAxMjcuNTYsIDMxLjU5XV19XG4gKiAgICAgICAgICAgICApXG4gKiAgICAgICAgICB9XG4gKiAgICAgICAgfVxuICogICAgICB9O1xuICogIH1cbiAqICByZXR1cm4gcmVkdWNlcnMoc3RhdGUsIGFjdGlvbik7XG4gKiB9O1xuICpcbiAqIGV4cG9ydCBkZWZhdWx0IGNvbXBvc2VkUmVkdWNlcjtcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbi8vIEB0cy1pZ25vcmVcbmNvbnN0IG1hcFN0YXRlVXBkYXRlcnMgPSBudWxsO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIERlZmF1bHQgaW5pdGlhbCBgbWFwU3RhdGVgXG4gKiBAbWVtYmVyb2YgbWFwU3RhdGVVcGRhdGVyc1xuICogQGNvbnN0YW50XG4gKiBAcHJvcGVydHkgcGl0Y2ggRGVmYXVsdDogYDBgXG4gKiBAcHJvcGVydHkgYmVhcmluZyBEZWZhdWx0OiBgMGBcbiAqIEBwcm9wZXJ0eSBsYXRpdHVkZSBEZWZhdWx0OiBgMzcuNzUwNDNgXG4gKiBAcHJvcGVydHkgbG9uZ2l0dWRlIERlZmF1bHQ6IGAtMTIyLjM0Njc5YFxuICogQHByb3BlcnR5IHpvb20gRGVmYXVsdDogYDlgXG4gKiBAcHJvcGVydHkgZHJhZ1JvdGF0ZSBEZWZhdWx0OiBgZmFsc2VgXG4gKiBAcHJvcGVydHkgd2lkdGggRGVmYXVsdDogYDgwMGBcbiAqIEBwcm9wZXJ0eSBoZWlnaHQgRGVmYXVsdDogYDgwMGBcbiAqIEBwcm9wZXJ0eSBtaW5ab29tOiBgdW5kZWZpbmVkYCxcbiAqIEBwcm9wZXJ0eSBtYXhab29tOiBgdW5kZWZpbmVkYCxcbiAqIEBwcm9wZXJ0eSBtYXhCb3VuZHM6IGB1bmRlZmluZWRgLFxuICogQHByb3BlcnR5IGlzU3BsaXQ6IGBmYWxzZWAsXG4gKiBAcHJvcGVydHkgaXNWaWV3cG9ydFN5bmNlZDogYHRydWVgLFxuICogQHByb3BlcnR5IGlzWm9vbUxvY2tlZDogYGZhbHNlYCxcbiAqIEBwcm9wZXJ0eSBzcGxpdE1hcFZpZXdwb3J0czogYFtdYFxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgSU5JVElBTF9NQVBfU1RBVEU6IE1hcFN0YXRlID0ge1xuICBwaXRjaDogMCxcbiAgYmVhcmluZzogMCxcbiAgbGF0aXR1ZGU6IDM3Ljc1MDQzLFxuICBsb25naXR1ZGU6IC0xMjIuMzQ2NzksXG4gIHpvb206IDksXG4gIGRyYWdSb3RhdGU6IGZhbHNlLFxuICB3aWR0aDogODAwLFxuICBoZWlnaHQ6IDgwMCxcbiAgbWluWm9vbTogdW5kZWZpbmVkLFxuICBtYXhab29tOiB1bmRlZmluZWQsXG4gIG1heEJvdW5kczogdW5kZWZpbmVkLFxuICBpc1NwbGl0OiBmYWxzZSxcbiAgaXNWaWV3cG9ydFN5bmNlZDogdHJ1ZSxcbiAgaXNab29tTG9ja2VkOiBmYWxzZSxcbiAgc3BsaXRNYXBWaWV3cG9ydHM6IFtdXG59O1xuXG4vKiBVcGRhdGVycyAqL1xuLyoqXG4gKiBVcGRhdGUgbWFwIHZpZXdwb3J0XG4gKiBAbWVtYmVyb2YgbWFwU3RhdGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdXBkYXRlTWFwVXBkYXRlciA9IChcbiAgc3RhdGU6IE1hcFN0YXRlLFxuICBhY3Rpb246IE1hcFN0YXRlQWN0aW9ucy5VcGRhdGVNYXBVcGRhdGVyQWN0aW9uXG4pOiBNYXBTdGF0ZSA9PiB7XG4gIGNvbnN0IHt2aWV3cG9ydCwgbWFwSW5kZXggPSAwfSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gIGlmIChzdGF0ZS5pc1ZpZXdwb3J0U3luY2VkKSB7XG4gICAgLy8gVGhlIGB1cGRhdGVWaWV3cG9ydGAgZnVuY3Rpb24gaXMgdHlwZWQgYXMgKFZpZXdwb3J0LCBWaWV3cG9ydCkgLT4gVmlld3BvcnQgYnV0IGhlcmUgdGhlXG4gICAgLy8gZXhwZWN0ZWQgdHlwaW5nIGlzIChNYXBTdGF0ZSwgVmlld3BvcnQpIC0+IE1hcFN0YXRlLlxuICAgIC8vIHRoaXMgY291bGQgYmUgYSBwb3RlbnRpYWwgYnVnIGFzIHdlIHRyZWF0IFZpZXdwb3J0IGFuZCBNYXBTdGF0ZSBhcyBlcXVhbCBzZWVtaW5nbHlcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIFR5cGUgJ1ZpZXdwb3J0JyBpcyBtaXNzaW5nIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBmcm9tIHR5cGUgJ01hcFN0YXRlJzogaXNTcGxpdCwgaXNWaWV3cG9ydFN5bmNlZCwgaXNab29tTG9ja2VkLCBzcGxpdE1hcFZpZXdwb3J0c1xuICAgIHJldHVybiB1cGRhdGVWaWV3cG9ydChzdGF0ZSwgdmlld3BvcnQpO1xuICB9XG5cbiAgbGV0IG90aGVyVmlld3BvcnRNYXBJbmRleCA9IC0xO1xuICBjb25zdCBzcGxpdE1hcFZpZXdwb3J0cyA9IHN0YXRlLnNwbGl0TWFwVmlld3BvcnRzLm1hcCgoY3VycmVudFZpZXdwb3J0LCBpKSA9PiB7XG4gICAgaWYgKGkgPT09IG1hcEluZGV4KSB7XG4gICAgICAvLyB1cGRhdGUgdGhlIG1hdGNoaW5nIHZpZXdwb3J0IHdpdGggdGhlIG5ld1ZpZXdwb3J0IGluZm8gaW4gdGhlIGFjdGlvbiBwYXlsb2FkXG4gICAgICByZXR1cm4gdXBkYXRlVmlld3BvcnQoY3VycmVudFZpZXdwb3J0LCB2aWV3cG9ydCk7XG4gICAgfVxuXG4gICAgb3RoZXJWaWV3cG9ydE1hcEluZGV4ID0gaTtcbiAgICAvLyBtYWtlIG5vIGNoYW5nZXMgdG8gdGhlIG90aGVyIHZpZXdwb3J0ICh5ZXQpXG4gICAgcmV0dXJuIGN1cnJlbnRWaWV3cG9ydDtcbiAgfSk7XG5cbiAgLy8gbWFrZSBjb25kaXRpb25hbCB1cGRhdGVzIHRvIHRoZSBvdGhlciB2aWV3cG9ydCBub3QgbWF0Y2hpbmcgdGhpcyBwYXlsb2FkJ3MgYG1hcEluZGV4YFxuICBpZiAoTnVtYmVyLmlzRmluaXRlKG90aGVyVmlld3BvcnRNYXBJbmRleCkgJiYgb3RoZXJWaWV3cG9ydE1hcEluZGV4ID4gLTEpIHtcbiAgICAvLyB3aWR0aCBhbmQgaGVpZ2h0IGFyZSBhIHNwZWNpYWwgY2FzZSBhbmQgYXJlIGFsd2F5cyB1cGRhdGVkXG4gICAgc3BsaXRNYXBWaWV3cG9ydHNbb3RoZXJWaWV3cG9ydE1hcEluZGV4XS53aWR0aCA9IHNwbGl0TWFwVmlld3BvcnRzW21hcEluZGV4XS53aWR0aDtcbiAgICBzcGxpdE1hcFZpZXdwb3J0c1tvdGhlclZpZXdwb3J0TWFwSW5kZXhdLmhlaWdodCA9IHNwbGl0TWFwVmlld3BvcnRzW21hcEluZGV4XS5oZWlnaHQ7XG5cbiAgICBpZiAoc3RhdGUuaXNab29tTG9ja2VkKSB7XG4gICAgICAvLyB1cGRhdGUgdGhlIG90aGVyIHZpZXdwb3J0IHdpdGggdGhlIG5ldyB6b29tIGZyb20gdGhlIHNwbGl0IHZpZXdwb3J0IHRoYXQgd2FzIHVwZGF0ZWQgd2l0aCB0aGlzIHBheWxvYWQncyBgbWFwSW5kZXhgXG4gICAgICBzcGxpdE1hcFZpZXdwb3J0c1tvdGhlclZpZXdwb3J0TWFwSW5kZXhdLnpvb20gPSBzcGxpdE1hcFZpZXdwb3J0c1ttYXBJbmRleF0uem9vbTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIC8vIHVwZGF0ZSB0aGUgdG9wLWxldmVsIG1hcFN0YXRlIHZpZXdwb3J0IHdpdGggdGhlIG1vc3QgcmVjZW50bHkgaW50ZXJhY3RlZC13aXRoIHNwbGl0IHZpZXdwb3J0XG4gICAgLy8gV0hZPyB0aGlzIGF2b2lkcyB6b29tIGFuZCBib3VuZHMgXCJqdW1waW5nXCIgZHVlIHRvIGEgXCJzdGFsZVwiIHRvcC1sZXZlbCBtYXBTdGF0ZSB2aWV3cG9ydCB3aGVuOlxuICAgIC8vICAxLiB0b2dnbGluZyBvZmYgdGhlIHVuc3luY2VkIHZpZXdwb3J0cyBtb2RlIHRvIHN3aXRjaCB0byB0aGUgc3luY2VkIHZpZXdwb3J0cyBtb2RlXG4gICAgLy8gIDIuIHRvZ2dsaW5nIG9uIHRoZSB6b29tIGxvY2sgZHVyaW5nIGFuIHVuc3luY2VkIHZpZXdwb3J0cyBtb2RlXG4gICAgLi4uc3RhdGUsXG4gICAgLi4uc3BsaXRNYXBWaWV3cG9ydHNbbWFwSW5kZXhdLFxuICAgIC8vIHVwZGF0ZSB0aGUgbWFwU3RhdGUgd2l0aCB0aGUgbmV3IGFycmF5IG9mIHNwbGl0IHZpZXdwb3J0c1xuICAgIHNwbGl0TWFwVmlld3BvcnRzXG4gIH07XG59O1xuXG4vKipcbiAqIEZpdCBtYXAgdmlld3BvcnQgdG8gYm91bmRzXG4gKiBAbWVtYmVyb2YgbWFwU3RhdGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgZml0Qm91bmRzVXBkYXRlciA9IChcbiAgc3RhdGU6IE1hcFN0YXRlLFxuICBhY3Rpb246IE1hcFN0YXRlQWN0aW9ucy5GaXRCb3VuZHNVcGRhdGVyQWN0aW9uXG4pOiBNYXBTdGF0ZSA9PiB7XG4gIGNvbnN0IGNlbnRlckFuZFpvb20gPSBnZXRDZW50ZXJBbmRab29tRnJvbUJvdW5kcyhhY3Rpb24ucGF5bG9hZCwge1xuICAgIHdpZHRoOiBzdGF0ZS53aWR0aCxcbiAgICBoZWlnaHQ6IHN0YXRlLmhlaWdodFxuICB9KTtcbiAgaWYgKCFjZW50ZXJBbmRab29tKSB7XG4gICAgLy8gYm91bmRzIGlzIGludmFsaWRcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cblxuICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBsYXRpdHVkZTogY2VudGVyQW5kWm9vbS5jZW50ZXJbMV0sXG4gICAgbG9uZ2l0dWRlOiBjZW50ZXJBbmRab29tLmNlbnRlclswXSxcbiAgICAvLyBGb3IgbWFyZ2luYWwgb3IgaW52YWxpZCBib3VuZHMsIHpvb20gbWF5IGJlIE5hTi4gTWFrZSBzdXJlIHRvIHByb3ZpZGUgYSB2YWxpZCB2YWx1ZSBpbiBvcmRlclxuICAgIC8vIHRvIGF2b2lkIGNvcnJ1cHQgc3RhdGUgYW5kIHBvdGVudGlhbCBjcmFzaGVzIGFzIHpvb20gaXMgZXhwZWN0ZWQgdG8gYmUgYSBudW1iZXJcbiAgICAuLi4oTnVtYmVyLmlzRmluaXRlKGNlbnRlckFuZFpvb20uem9vbSkgPyB7em9vbTogY2VudGVyQW5kWm9vbS56b29tfSA6IHt9KVxuICB9O1xuXG4gIC8vIGlmIGZpdHRpbmcgdG8gYm91bmRzIHdoaWxlIHNwbGl0IGFuZCB1bnN5bmNlZFxuICAvLyBjb3B5IHRoZSBuZXcgbGF0aXR1ZGUsIGxvbmdpdHVkZSwgYW5kIHpvb20gdmFsdWVzIHRvIGVhY2ggc3BsaXQgdmlld3BvcnRcbiAgaWYgKG5ld1N0YXRlLnNwbGl0TWFwVmlld3BvcnRzLmxlbmd0aCkge1xuICAgIG5ld1N0YXRlLnNwbGl0TWFwVmlld3BvcnRzID0gbmV3U3RhdGUuc3BsaXRNYXBWaWV3cG9ydHMubWFwKGN1cnJlbnRWaWV3cG9ydCA9PiAoe1xuICAgICAgLi4uY3VycmVudFZpZXdwb3J0LFxuICAgICAgbGF0aXR1ZGU6IG5ld1N0YXRlLmxhdGl0dWRlLFxuICAgICAgbG9uZ2l0dWRlOiBuZXdTdGF0ZS5sb25naXR1ZGUsXG4gICAgICB6b29tOiBuZXdTdGF0ZS56b29tXG4gICAgfSkpO1xuICB9XG5cbiAgcmV0dXJuIG5ld1N0YXRlO1xufTtcblxuLyoqXG4gKiBUb2dnbGUgYmV0d2VlbiAzZCBhbmQgMmQgbWFwLlxuICogQG1lbWJlcm9mIG1hcFN0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZVBlcnNwZWN0aXZlVXBkYXRlciA9IChcbiAgc3RhdGU6IE1hcFN0YXRlLFxuICBhY3Rpb246IE1hcFN0YXRlQWN0aW9ucy5Ub2dnbGVQZXJzcGVjdGl2ZVVwZGF0ZXJBY3Rpb25cbik6IE1hcFN0YXRlID0+IHtcbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgLi4ue1xuICAgICAgcGl0Y2g6IHN0YXRlLmRyYWdSb3RhdGUgPyAwIDogNTAsXG4gICAgICBiZWFyaW5nOiBzdGF0ZS5kcmFnUm90YXRlID8gMCA6IDI0XG4gICAgfSxcbiAgICBkcmFnUm90YXRlOiAhc3RhdGUuZHJhZ1JvdGF0ZVxuICB9O1xuXG4gIC8vIGlmIHRvZ2dsaW5nIDNkIGFuZCAyZCB3aGlsZSBzcGxpdCBhbmQgdW5zeW5jZWRcbiAgLy8gY29weSB0aGUgbmV3IHBpdGNoLCBiZWFyaW5nLCBhbmQgZHJhZ1JvdGF0ZSB2YWx1ZXMgdG8gZWFjaCBzcGxpdCB2aWV3cG9ydFxuICBpZiAobmV3U3RhdGUuc3BsaXRNYXBWaWV3cG9ydHMubGVuZ3RoKSB7XG4gICAgbmV3U3RhdGUuc3BsaXRNYXBWaWV3cG9ydHMgPSBuZXdTdGF0ZS5zcGxpdE1hcFZpZXdwb3J0cy5tYXAoY3VycmVudFZpZXdwb3J0ID0+ICh7XG4gICAgICAuLi5jdXJyZW50Vmlld3BvcnQsXG4gICAgICBwaXRjaDogbmV3U3RhdGUucGl0Y2gsXG4gICAgICBiZWFyaW5nOiBuZXdTdGF0ZS5iZWFyaW5nLFxuICAgICAgZHJhZ1JvdGF0ZTogbmV3U3RhdGUuZHJhZ1JvdGF0ZVxuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiBuZXdTdGF0ZTtcbn07XG5cbi8qKlxuICogcmVzZXQgbWFwU3RhdGUgdG8gaW5pdGlhbCBTdGF0ZVxuICogQG1lbWJlcm9mIG1hcFN0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlc2V0TWFwQ29uZmlnVXBkYXRlciA9IChzdGF0ZTogTWFwU3RhdGUpOiBNYXBTdGF0ZSA9PiAoe1xuICAuLi5JTklUSUFMX01BUF9TVEFURSxcbiAgLi4uc3RhdGUuaW5pdGlhbFN0YXRlLFxuICBpbml0aWFsU3RhdGU6IHN0YXRlLmluaXRpYWxTdGF0ZVxufSk7XG5cbi8vIGNvbnNpZGVyIGNhc2Ugd2hlcmUgeW91IGhhdmUgYSBzcGxpdCBtYXAgYW5kIHVzZXIgd2FudHMgdG8gcmVzZXRcbi8qKlxuICogVXBkYXRlIGBtYXBTdGF0ZWAgdG8gcHJvcGFnYXRlIGEgbmV3IGNvbmZpZ1xuICogQG1lbWJlcm9mIG1hcFN0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlY2VpdmVNYXBDb25maWdVcGRhdGVyID0gKFxuICBzdGF0ZTogTWFwU3RhdGUsXG4gIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcGF5bG9hZDoge2NvbmZpZyA9IHt9LCBvcHRpb25zID0ge30sIGJvdW5kcyA9IG51bGx9XG4gIH06IHtcbiAgICB0eXBlPzogdHlwZW9mIEFjdGlvblR5cGVzLlJFQ0VJVkVfTUFQX0NPTkZJRztcbiAgICBwYXlsb2FkOiBSZWNlaXZlTWFwQ29uZmlnUGF5bG9hZDtcbiAgfVxuKTogTWFwU3RhdGUgPT4ge1xuICAvKipcbiAgICogQHR5cGUge1BhcnRpYWw8TWFwU3RhdGU+fVxuICAgKi9cbiAgY29uc3QgbWFwU3RhdGUgPSAoY29uZmlnIHx8IHt9KS5tYXBTdGF0ZSB8fCB7fTtcbiAgLy8gbWVyZ2VkIHJlY2VpdmVkIG1hcFN0YXRlIHdpdGggcHJldmlvdXMgc3RhdGVcbiAgLy8gc3RhdGUgYWxzbyBtYXkgaW5jbHVkZSBwcm9wZXJ0aWVzIHRoYXQgYXJlIG5ldyB0byBhbiBleGlzdGluZywgc2F2ZWQgcHJvamVjdCdzIG1hcFN0YXRlXG5cbiAgbGV0IG1lcmdlZFN0YXRlID0gZGVlcG1lcmdlPE1hcFN0YXRlPihzdGF0ZSwgbWFwU3RhdGUsIHtcbiAgICAvLyBub3RlOiBkZWVwbWVyZ2UgYnkgZGVmYXVsdCB3aWxsIG1lcmdlIGFycmF5cyBieSBjb25jYXRlbmF0aW5nIHRoZW1cbiAgICAvLyBidXQgd2UgbmVlZCB0byBvdmVyd3JpdGUgZGVzdGluYXRpb24gYXJyYXlzIHdpdGggc291cmNlIGFycmF5cywgaWYgcHJlc2VudFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9UZWhTaHJpa2UvZGVlcG1lcmdlI2FycmF5bWVyZ2UtZXhhbXBsZS1vdmVyd3JpdGUtdGFyZ2V0LWFycmF5XG4gICAgYXJyYXlNZXJnZTogKF9kZXN0aW5hdGlvbkFycmF5LCBzb3VyY2VBcnJheSkgPT4gc291cmNlQXJyYXlcbiAgfSk7XG5cbiAgLy8gaWYgY2VudGVyIG1hcFxuICAvLyBjZW50ZXIgbWFwIHdpbGwgb3ZlcnJpZGUgbWFwU3RhdGUgY29uZmlnXG4gIGlmIChvcHRpb25zLmNlbnRlck1hcCAmJiBib3VuZHMpIHtcbiAgICBtZXJnZWRTdGF0ZSA9IGZpdEJvdW5kc1VwZGF0ZXIobWVyZ2VkU3RhdGUsIHtcbiAgICAgIHBheWxvYWQ6IGJvdW5kc1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5tZXJnZWRTdGF0ZSxcbiAgICAvLyB1cGRhdGUgd2lkdGggaWYgYGlzU3BsaXRgIGhhcyBjaGFuZ2VkXG4gICAgLi4uZ2V0TWFwRGltRm9yU3BsaXRNYXAobWVyZ2VkU3RhdGUuaXNTcGxpdCwgc3RhdGUpXG4gIH07XG59O1xuXG4vKipcbiAqIFRvZ2dsZSBiZXR3ZWVuIG9uZSBvciBzcGxpdCBtYXBzXG4gKiBAbWVtYmVyb2YgbWFwU3RhdGVVcGRhdGVyc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlU3BsaXRNYXBVcGRhdGVyID0gKFxuICBzdGF0ZTogTWFwU3RhdGUsXG4gIGFjdGlvbjogTWFwU3RhdGVBY3Rpb25zLlRvZ2dsZVNwbGl0TWFwVXBkYXRlckFjdGlvblxuKTogTWFwU3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIC4uLmdldE1hcERpbUZvclNwbGl0TWFwKCFzdGF0ZS5pc1NwbGl0LCBzdGF0ZSksXG4gIGlzU3BsaXQ6ICFzdGF0ZS5pc1NwbGl0LFxuICAuLi4oIXN0YXRlLmlzU3BsaXQgPT09IGZhbHNlXG4gICAgPyB7XG4gICAgICAgIC8vIGlmIHRvZ2dsaW5nIHRvIG5vIGxvbmdlciBzcGxpdCAoc2luZ2xlIG1vZGUpIHRoZW4gcmVzZXQgYSBmZXcgcHJvcGVydGllc1xuICAgICAgICBpc1ZpZXdwb3J0U3luY2VkOiB0cnVlLFxuICAgICAgICBpc1pvb21Mb2NrZWQ6IGZhbHNlLFxuICAgICAgICBzcGxpdE1hcFZpZXdwb3J0czogW11cbiAgICAgIH1cbiAgICA6IHt9KVxufSk7XG5cbi8qKlxuICogVG9nZ2xlIGJldHdlZW4gbG9ja2VkIGFuZCB1bmxvY2tlZCBzcGxpdCB2aWV3cG9ydHNcbiAqIEBtZW1iZXJvZiBtYXBTdGF0ZVVwZGF0ZXJzXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVTcGxpdE1hcFZpZXdwb3J0VXBkYXRlciA9IChcbiAgc3RhdGU6IE1hcFN0YXRlLFxuICBhY3Rpb246IE1hcFN0YXRlQWN0aW9ucy5Ub2dnbGVTcGxpdE1hcFZpZXdwb3J0VXBkYXRlckFjdGlvblxuKSA9PiB7XG4gIC8vIG5ldyBtYXAgc3RhdGUgaW1tZWRpYXRlbHkgZ2V0cyB0aGUgbmV3LCBvcHRpb25hbCBwYXlsb2FkIHZhbHVlcyBmb3IgaXNWaWV3cG9ydFN5bmNlZCBhbmQvb3IgaXNab29tTG9ja2VkXG4gIGNvbnN0IG5ld01hcFN0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIC4uLihhY3Rpb24ucGF5bG9hZCB8fCB7fSlcbiAgfTtcblxuICBpZiAobmV3TWFwU3RhdGUuaXNWaWV3cG9ydFN5bmNlZCkge1xuICAgIC8vIHN3aXRjaGluZyBmcm9tIHVuc3luY2VkIHRvIHN5bmNlZCB2aWV3cG9ydHNcbiAgICBuZXdNYXBTdGF0ZS5zcGxpdE1hcFZpZXdwb3J0cyA9IFtdO1xuICB9IGVsc2Uge1xuICAgIC8vIHN3aXRjaGluZyBmcm9tIHN5bmNlZCB0byB1bnN5bmNlZCB2aWV3cG9ydHNcbiAgICAvLyBvciBhbHJlYWR5IGluIHVuc3luY2VkIG1vZGUgYW5kIHRvZ2dsaW5nIGxvY2tlZCB6b29tXG5cbiAgICBpZiAoc3RhdGUuaXNab29tTG9ja2VkICYmICFuZXdNYXBTdGF0ZS5pc1pvb21Mb2NrZWQpIHtcbiAgICAgIC8vIHN3aXRjaGluZyBvZmYgbG9ja2VkIHpvb20gd2hpbGUgdW5zeW5jZWRcbiAgICAgIC8vIGRvbid0IGNvcHkgdGhlIG1hcFN0YXRlcyB0byBsZWZ0IGFuZCByaWdodCB2aWV3cG9ydHMgYmVjYXVzZSB0aGVyZSB3aWxsIGJlIHpvb20gXCJqdW1waW5nXCJcbiAgICAgIHJldHVybiBuZXdNYXBTdGF0ZTtcbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLmlzWm9vbUxvY2tlZCAmJiBuZXdNYXBTdGF0ZS5pc1pvb21Mb2NrZWQpIHtcbiAgICAgIC8vIHN3aXRjaGluZyBvbiBsb2NrZWQgem9vbSB3aGlsZSB1bnN5bmNlZFxuICAgICAgLy8gb25seSBjb3B5IHpvb20gdmlld3BvcnQgcHJvcGVydHkgZnJvbSB0aGUgbW9zdCByZWNlbnRseSBpbnRlcmFjdGVkLXdpdGggdmlld3BvcnQgdG8gdGhlIG90aGVyXG4gICAgICAvLyBUT0RPOiBkbyB3ZSB3YW50IHRvIGNoZWNrIGZvciBhIG1hdGNoIGEgZGlmZmVyZW50IHdheSwgc3VjaCBhcyBhIGNvbWJvIG9mIGBsYXRpdHVkZWAgYW5kIGBsb25naXR1ZGVgP1xuICAgICAgY29uc3QgbGFzdFVwZGF0ZWRWaWV3cG9ydEluZGV4ID0gbmV3TWFwU3RhdGUuc3BsaXRNYXBWaWV3cG9ydHMuZmluZEluZGV4KFxuICAgICAgICB2ID0+IG5ld01hcFN0YXRlLnpvb20gPT09IHYuem9vbVxuICAgICAgKTtcblxuICAgICAgY29uc3Qgc3BsaXRNYXBWaWV3cG9ydHMgPSBuZXdNYXBTdGF0ZS5zcGxpdE1hcFZpZXdwb3J0cy5tYXAoKGN1cnJlbnRWaWV3cG9ydCwgaSkgPT4ge1xuICAgICAgICBpZiAoaSA9PT0gbGFzdFVwZGF0ZWRWaWV3cG9ydEluZGV4KSB7XG4gICAgICAgICAgLy8gbm8gem9vbSB0byBtb2RpZnkgaGVyZVxuICAgICAgICAgIHJldHVybiBjdXJyZW50Vmlld3BvcnQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhlIG90aGVyIHZpZXdwb3J0IGdldHMgdGhlIG1vc3QgcmVjZW50bHkgaW50ZXJhY3RlZC13aXRoIHZpZXdwb3J0J3Mgem9vbVxuICAgICAgICAvLyBXSFk/IHRoZSB2aWV3cG9ydCB0aGUgdXNlciB3YXMgbGFzdCBpbnRlcmFjdGluZyB3aXRoIHdpbGwgc2V0IHpvb20gYWNyb3NzIHRoZSBib2FyZCBmb3Igc21vb3RoIFVYXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uY3VycmVudFZpZXdwb3J0LFxuICAgICAgICAgIHpvb206IG5ld01hcFN0YXRlLnNwbGl0TWFwVmlld3BvcnRzW2xhc3RVcGRhdGVkVmlld3BvcnRJbmRleF0uem9vbVxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICAgIG5ld01hcFN0YXRlLnNwbGl0TWFwVmlld3BvcnRzID0gc3BsaXRNYXBWaWV3cG9ydHM7XG5cbiAgICAgIHJldHVybiBuZXdNYXBTdGF0ZTtcbiAgICB9XG5cbiAgICAvLyBpZiBjdXJyZW50IHZpZXdwb3J0IGlzIHN5bmNlZCwgYW5kIHdlIGFyZSB1bnN5bmNpbmcgaXRcbiAgICAvLyBvciBhbHJlYWR5IGluIHVuc3luY2VkIG1vZGUgYW5kIE5PVCB0b2dnbGluZyBsb2NrZWQgem9vbVxuICAgIC8vIG1ha2UgYSBmcmVzaCBjb3B5IG9mIHRoZSBjdXJyZW50IHZpZXdwb3J0IG9iamVjdCwgYXNzaWduIGl0IHRvIHNwbGl0TWFwVmlld3BvcnRzW11cbiAgICAvLyBnZXRWaWV3cG9ydEZyb21NYXBTdGF0ZSBpcyBjYWxsZWQgdHdpY2UgdG8gYXZvaWQgbWVtb3J5IGFsbG9jYXRpb24gY29uZmxpY3RzXG4gICAgY29uc3QgbGVmdFZpZXdwb3J0ID0gZ2V0Vmlld3BvcnRGcm9tTWFwU3RhdGUobmV3TWFwU3RhdGUpO1xuICAgIGNvbnN0IHJpZ2h0Vmlld3BvcnQgPSBnZXRWaWV3cG9ydEZyb21NYXBTdGF0ZShuZXdNYXBTdGF0ZSk7XG4gICAgbmV3TWFwU3RhdGUuc3BsaXRNYXBWaWV3cG9ydHMgPSBbbGVmdFZpZXdwb3J0LCByaWdodFZpZXdwb3J0XTtcbiAgfVxuXG4gIC8vIHJldHVybiBuZXcgc3RhdGVcbiAgcmV0dXJuIG5ld01hcFN0YXRlO1xufTtcblxuLy8gSGVscGVyc1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1hcERpbUZvclNwbGl0TWFwKGlzU3BsaXQsIHN0YXRlKSB7XG4gIC8vIGNhc2VzOlxuICAvLyAxLiBzdGF0ZSBzcGxpdDogdHJ1ZSAtIGlzU3BsaXQ6IHRydWVcbiAgLy8gZG8gbm90aGluZ1xuICAvLyAyLiBzdGF0ZSBzcGxpdDogZmFsc2UgLSBpc1NwbGl0OiBmYWxzZVxuICAvLyBkbyBub3RoaW5nXG4gIGlmIChzdGF0ZS5pc1NwbGl0ID09PSBpc1NwbGl0KSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgY29uc3Qgd2lkdGggPVxuICAgIHN0YXRlLmlzU3BsaXQgJiYgIWlzU3BsaXRcbiAgICAgID8gLy8gMy4gc3RhdGUgc3BsaXQ6IHRydWUgLSBpc1NwbGl0OiBmYWxzZVxuICAgICAgICAvLyBkb3VibGUgd2lkdGhcbiAgICAgICAgc3RhdGUud2lkdGggKiAyXG4gICAgICA6IC8vIDQuIHN0YXRlIHNwbGl0OiBmYWxzZSAtIGlzU3BsaXQ6IHRydWVcbiAgICAgICAgLy8gc3BsaXQgd2lkdGhcbiAgICAgICAgc3RhdGUud2lkdGggLyAyO1xuXG4gIHJldHVybiB7XG4gICAgd2lkdGhcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVmlld3BvcnRCYXNlZE9uQm91bmRzKHN0YXRlOiBNYXBTdGF0ZSwgbmV3TWFwU3RhdGU6IE1hcFN0YXRlKSB7XG4gIC8vIEdldCB0aGUgbmV3IHZpZXdwb3J0IGJvdW5kc1xuICBjb25zdCB2aWV3cG9ydEJvdW5kcyA9IGdlb1ZpZXdwb3J0LmJvdW5kcyhcbiAgICBbbmV3TWFwU3RhdGUubG9uZ2l0dWRlLCBuZXdNYXBTdGF0ZS5sYXRpdHVkZV0sXG4gICAgbmV3TWFwU3RhdGUuem9vbSxcbiAgICBbbmV3TWFwU3RhdGUud2lkdGgsIG5ld01hcFN0YXRlLmhlaWdodF0sXG4gICAgTUFQQk9YX1RJTEVfU0laRVxuICApO1xuICAvLyBHZW5lcmF0ZSB0dXJmIFBvbHlnb24gZnJvbSBib3VuZHMgZm9yIGNvbXBhcmlzb25cbiAgY29uc3Qgdmlld3BvcnRCb3VuZHNQb2x5Z29uID0gYmJveFBvbHlnb24odmlld3BvcnRCb3VuZHMpO1xuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0IG5ld1N0YXRlTWF4Qm91bmRzOiBCb3VuZHMgPSBuZXdNYXBTdGF0ZS5tYXhCb3VuZHM7XG4gIC8vIEB0cy1pZ25vcmVcbiAgY29uc3QgbWF4Qm91bmRzUG9seWdvbiA9IGJib3hQb2x5Z29uKG5ld1N0YXRlTWF4Qm91bmRzKTtcblxuICAvLyBJZiBtYXhCb3VuZHMgaGFzIGNoYW5nZWQgcmVzZXQgdGhlIHZpZXdwb3J0IHRvIHNuYXAgdG8gYm91bmRzXG4gIGNvbnN0IGhhc01heEJvdW5kc0NoYW5nZWQgPVxuICAgICFzdGF0ZS5tYXhCb3VuZHMgfHwgIXN0YXRlLm1heEJvdW5kcy5ldmVyeSgodmFsLCBpZHgpID0+IHZhbCA9PT0gbmV3U3RhdGVNYXhCb3VuZHNbaWR4XSk7XG4gIGlmIChoYXNNYXhCb3VuZHNDaGFuZ2VkKSB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIG5ld01hcFN0YXRlIHZpZXdwb3J0IGlzIHdpdGhpbiBtYXhCb3VuZHNcbiAgICBpZiAoIWJvb2xlYW5XaXRoaW4odmlld3BvcnRCb3VuZHNQb2x5Z29uLCBtYXhCb3VuZHNQb2x5Z29uKSkge1xuICAgICAgY29uc3Qge2xhdGl0dWRlLCBsb25naXR1ZGUsIHpvb219ID0gZml0Qm91bmRzKHtcbiAgICAgICAgd2lkdGg6IG5ld01hcFN0YXRlLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IG5ld01hcFN0YXRlLndpZHRoLFxuICAgICAgICBib3VuZHM6IFtcbiAgICAgICAgICBbbmV3U3RhdGVNYXhCb3VuZHNbMF0sIG5ld1N0YXRlTWF4Qm91bmRzWzFdXSxcbiAgICAgICAgICBbbmV3U3RhdGVNYXhCb3VuZHNbMl0sIG5ld1N0YXRlTWF4Qm91bmRzWzNdXVxuICAgICAgICBdXG4gICAgICB9KTtcblxuICAgICAgbmV3TWFwU3RhdGUgPSB7XG4gICAgICAgIC4uLm5ld01hcFN0YXRlLFxuICAgICAgICBsYXRpdHVkZSxcbiAgICAgICAgbG9uZ2l0dWRlLFxuICAgICAgICAvLyBGb3IgbWFyZ2luYWwgb3IgaW52YWxpZCBib3VuZHMsIHpvb20gbWF5IGJlIE5hTi4gTWFrZSBzdXJlIHRvIHByb3ZpZGUgYSB2YWxpZCB2YWx1ZSBpbiBvcmRlclxuICAgICAgICAvLyB0byBhdm9pZCBjb3JydXB0IHN0YXRlIGFuZCBwb3RlbnRpYWwgY3Jhc2hlcyBhcyB6b29tIGlzIGV4cGVjdGVkIHRvIGJlIGEgbnVtYmVyXG4gICAgICAgIC4uLihOdW1iZXIuaXNGaW5pdGUoem9vbSkgPyB7em9vbX0gOiB7fSlcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBuZXdNYXBTdGF0ZTtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIHRoZSBuZXdNYXBTdGF0ZSB2aWV3cG9ydCBpcyB3aXRoaW4gbWF4Qm91bmRzXG4gIGlmICghYm9vbGVhbldpdGhpbih2aWV3cG9ydEJvdW5kc1BvbHlnb24sIG1heEJvdW5kc1BvbHlnb24pKSB7XG4gICAgbmV3TWFwU3RhdGUgPSB7XG4gICAgICAuLi5uZXdNYXBTdGF0ZSxcbiAgICAgIGxvbmdpdHVkZTogc3RhdGUubG9uZ2l0dWRlLFxuICAgICAgbGF0aXR1ZGU6IHN0YXRlLmxhdGl0dWRlLFxuICAgICAgem9vbTogc3RhdGUuem9vbVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gbmV3TWFwU3RhdGU7XG59XG5cbmZ1bmN0aW9uIGdldFZpZXdwb3J0RnJvbU1hcFN0YXRlKHN0YXRlKSB7XG4gIHJldHVybiBwaWNrKHN0YXRlLCBbXG4gICAgJ3dpZHRoJyxcbiAgICAnaGVpZ2h0JyxcbiAgICAnem9vbScsXG4gICAgJ3BpdGNoJyxcbiAgICAnYmVhcmluZycsXG4gICAgJ2xhdGl0dWRlJyxcbiAgICAnbG9uZ2l0dWRlJyxcbiAgICAnZHJhZ1JvdGF0ZScsXG4gICAgJ21pblpvb20nLFxuICAgICdtYXhab29tJyxcbiAgICAnbWF4Qm91bmRzJ1xuICBdKTtcbn1cblxuLy8gRnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNTY2NTA3OTBcbi8qKiBTZWxlY3QgaXRlbXMgZnJvbSBvYmplY3Qgd2hvc2UgdmFsdWUgaXMgbm90IHVuZGVmaW5lZCAqL1xuY29uc3QgZGVmaW5lZFByb3BzID0gb2JqID0+XG4gIE9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhvYmopLmZpbHRlcigoW2ssIHZdKSA9PiB2ICE9PSB1bmRlZmluZWQpKTtcblxuZnVuY3Rpb24gdXBkYXRlVmlld3BvcnQob3JpZ2luYWxWaWV3cG9ydDogVmlld3BvcnQsIHZpZXdwb3J0VXBkYXRlczogVmlld3BvcnQpOiBWaWV3cG9ydCB7XG4gIGxldCBuZXdWaWV3cG9ydCA9IHtcbiAgICAuLi5vcmlnaW5hbFZpZXdwb3J0LFxuICAgIC4uLihkZWZpbmVkUHJvcHModmlld3BvcnRVcGRhdGVzKSB8fCB7fSlcbiAgfTtcblxuICAvLyBNYWtlIHN1cmUgem9vbSBsZXZlbCBkb2Vzbid0IGdvIGJlbGxvdyBtaW5ab29tIGlmIGRlZmluZWRcbiAgaWYgKG5ld1ZpZXdwb3J0Lm1pblpvb20gJiYgbmV3Vmlld3BvcnQuem9vbSAmJiBuZXdWaWV3cG9ydC56b29tIDwgbmV3Vmlld3BvcnQubWluWm9vbSkge1xuICAgIG5ld1ZpZXdwb3J0Lnpvb20gPSBuZXdWaWV3cG9ydC5taW5ab29tO1xuICB9XG4gIC8vIE1ha2Ugc3VyZSB6b29tIGxldmVsIGRvZXNuJ3QgZ28gYWJvdmUgbWF4Wm9vbSBpZiBkZWZpbmVkXG4gIGlmIChuZXdWaWV3cG9ydC5tYXhab29tICYmIG5ld1ZpZXdwb3J0Lnpvb20gJiYgbmV3Vmlld3BvcnQuem9vbSA+IG5ld1ZpZXdwb3J0Lm1heFpvb20pIHtcbiAgICBuZXdWaWV3cG9ydC56b29tID0gbmV3Vmlld3BvcnQubWF4Wm9vbTtcbiAgfVxuICAvLyBMaW1pdCB2aWV3cG9ydCB1cGRhdGUgYmFzZWQgb24gbWF4Qm91bmRzXG4gIGlmIChuZXdWaWV3cG9ydC5tYXhCb3VuZHMgJiYgdmFsaWRhdGVCb3VuZHMobmV3Vmlld3BvcnQubWF4Qm91bmRzKSkge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgVHlwZSAnVmlld3BvcnQnIGlzIG1pc3NpbmcgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzIGZyb20gdHlwZSAnTWFwU3RhdGUnOiBpc1NwbGl0LCBpc1ZpZXdwb3J0U3luY2VkLCBpc1pvb21Mb2NrZWQsIHNwbGl0TWFwVmlld3BvcnRzXG4gICAgbmV3Vmlld3BvcnQgPSB1cGRhdGVWaWV3cG9ydEJhc2VkT25Cb3VuZHMob3JpZ2luYWxWaWV3cG9ydCwgbmV3Vmlld3BvcnQpO1xuICB9XG5cbiAgcmV0dXJuIG5ld1ZpZXdwb3J0O1xufVxuIl19