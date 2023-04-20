"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleSplitMapViewport = exports.toggleSplitMap = exports.updateMap = exports.fitBounds = exports.togglePerspective = void 0;

var _toolkit = require("@reduxjs/toolkit");

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

/**
 *
 * Toggle between 3d and 2d map.
 * @memberof mapStateActions
 * @public
 * @example
 * import {togglePerspective} from 'kepler.gl/actions';
 * this.props.dispatch(togglePerspective());
 */
var togglePerspective = (0, _toolkit.createAction)(_actionTypes["default"].TOGGLE_PERSPECTIVE);
exports.togglePerspective = togglePerspective;

/**
 * Fit map viewport to bounds
 * @memberof mapStateActions
 * @param {Array<Number>} bounds as `[lngMin, latMin, lngMax, latMax]`
 * @public
 * @example
 * import {fitBounds} from 'kepler.gl/actions';
 * this.props.dispatch(fitBounds([-122.23, 37.127, -122.11, 37.456]));
 */
var fitBounds = (0, _toolkit.createAction)(_actionTypes["default"].FIT_BOUNDS, function (bounds) {
  return {
    payload: bounds
  };
});
exports.fitBounds = fitBounds;

/**
 * Update map viewport
 * @memberof mapStateActions
 * @param {Object} viewport viewport object container one or any of these properties `width`, `height`, `latitude` `longitude`, `zoom`, `pitch`, `bearing`, `dragRotate`
 * @param {Number} [viewport.width] Width of viewport
 * @param {Number} [viewport.height] Height of viewport
 * @param {Number} [viewport.zoom] Zoom of viewport
 * @param {Number} [viewport.pitch] Camera angle in degrees (0 is straight down)
 * @param {Number} [viewport.bearing] Map rotation in degrees (0 means north is up)
 * @param {Number} [viewport.latitude] Latitude center of viewport on map in mercator projection
 * @param {Number} [viewport.longitude] Longitude Center of viewport on map in mercator projection
 * @param {boolean} [viewport.dragRotate] Whether to enable drag and rotate map into perspective viewport
 * @param {number} mapIndex Index of which map to update the viewport of
 * @public
 * @example
 * import {updateMap} from 'kepler.gl/actions';
 * this.props.dispatch(updateMap({latitude: 37.75043, longitude: -122.34679, width: 800, height: 1200}, 0));
 */
var updateMap = (0, _toolkit.createAction)(_actionTypes["default"].UPDATE_MAP, function (viewport, mapIndex) {
  return {
    payload: {
      viewport: viewport,
      mapIndex: mapIndex
    }
  };
});
exports.updateMap = updateMap;

/**
 * Toggle between single map or split maps
 * @memberof mapStateActions
 * @param {Number} [index] index is provided, close split map at index
 * @public
 * @example
 * import {toggleSplitMap} from 'kepler.gl/actions';
 * this.props.dispatch(toggleSplitMap());
 */
var toggleSplitMap = (0, _toolkit.createAction)(_actionTypes["default"].TOGGLE_SPLIT_MAP, function (index) {
  return {
    payload: index
  };
});
exports.toggleSplitMap = toggleSplitMap;

/**
 * For split maps, toggle between having (un)synced viewports and (un)locked zooms
 * @memberof mapStateActions
 * @param {Object} syncInfo
 * @param {boolean} [syncInfo.isViewportSynced] Are the 2 split maps having synced viewports?
 * @param {boolean} [syncInfo.isZoomLocked] If split, are the zooms locked to each other or independent?
 */
var toggleSplitMapViewport = (0, _toolkit.createAction)(_actionTypes["default"].TOGGLE_SPLIT_MAP_VIEWPORT, function (syncInfo) {
  return {
    payload: syncInfo
  };
});
/**
 * This declaration is needed to group actions in docs
 */

/**
 * Actions handled mostly by  `mapState` reducer.
 * They manage map viewport update, toggle between 2d and 3d map,
 * toggle between single and split maps.
 *
 * @public
 */

/* eslint-disable no-unused-vars */
// @ts-ignore

exports.toggleSplitMapViewport = toggleSplitMapViewport;
var mapStateActions = null;
/* eslint-enable no-unused-vars */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NyYy9tYXAtc3RhdGUtYWN0aW9ucy50cyJdLCJuYW1lcyI6WyJ0b2dnbGVQZXJzcGVjdGl2ZSIsIkFjdGlvblR5cGVzIiwiVE9HR0xFX1BFUlNQRUNUSVZFIiwiZml0Qm91bmRzIiwiRklUX0JPVU5EUyIsImJvdW5kcyIsInBheWxvYWQiLCJ1cGRhdGVNYXAiLCJVUERBVEVfTUFQIiwidmlld3BvcnQiLCJtYXBJbmRleCIsInRvZ2dsZVNwbGl0TWFwIiwiVE9HR0xFX1NQTElUX01BUCIsImluZGV4IiwidG9nZ2xlU3BsaXRNYXBWaWV3cG9ydCIsIlRPR0dMRV9TUExJVF9NQVBfVklFV1BPUlQiLCJzeW5jSW5mbyIsIm1hcFN0YXRlQWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQXJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxpQkFHWixHQUFHLDJCQUFhQyx3QkFBWUMsa0JBQXpCLENBSEc7OztBQU1QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1DLFNBS1osR0FBRywyQkFBYUYsd0JBQVlHLFVBQXpCLEVBQXFDLFVBQUNDLE1BQUQ7QUFBQSxTQUFxQjtBQUFDQyxJQUFBQSxPQUFPLEVBQUVEO0FBQVYsR0FBckI7QUFBQSxDQUFyQyxDQUxHOzs7QUFRUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNRSxTQUc0RCxHQUFHLDJCQUMxRU4sd0JBQVlPLFVBRDhELEVBRTFFLFVBQUNDLFFBQUQsRUFBcUJDLFFBQXJCO0FBQUEsU0FBNEM7QUFDMUNKLElBQUFBLE9BQU8sRUFBRTtBQUNQRyxNQUFBQSxRQUFRLEVBQVJBLFFBRE87QUFFUEMsTUFBQUEsUUFBUSxFQUFSQTtBQUZPO0FBRGlDLEdBQTVDO0FBQUEsQ0FGMEUsQ0FIckU7OztBQWdCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQyxjQUtaLEdBQUcsMkJBQWFWLHdCQUFZVyxnQkFBekIsRUFBMkMsVUFBQ0MsS0FBRDtBQUFBLFNBQW9CO0FBQUNQLElBQUFBLE9BQU8sRUFBRU87QUFBVixHQUFwQjtBQUFBLENBQTNDLENBTEc7OztBQWNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUMsc0JBTVosR0FBRywyQkFDRmIsd0JBQVljLHlCQURWLEVBRUYsVUFBQ0MsUUFBRDtBQUFBLFNBQStEO0FBQUNWLElBQUFBLE9BQU8sRUFBRVU7QUFBVixHQUEvRDtBQUFBLENBRkUsQ0FORztBQVdQO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOzs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsSUFBeEI7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Y3JlYXRlQWN0aW9ufSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7ZGVmYXVsdCBhcyBBY3Rpb25UeXBlc30gZnJvbSAnLi9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHtCb3VuZHMsIE1lcmdlLCBWaWV3cG9ydH0gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIFRvZ2dsZVBlcnNwZWN0aXZlVXBkYXRlckFjdGlvbiA9IHt9O1xuLyoqXG4gKlxuICogVG9nZ2xlIGJldHdlZW4gM2QgYW5kIDJkIG1hcC5cbiAqIEBtZW1iZXJvZiBtYXBTdGF0ZUFjdGlvbnNcbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQge3RvZ2dsZVBlcnNwZWN0aXZlfSBmcm9tICdrZXBsZXIuZ2wvYWN0aW9ucyc7XG4gKiB0aGlzLnByb3BzLmRpc3BhdGNoKHRvZ2dsZVBlcnNwZWN0aXZlKCkpO1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlUGVyc3BlY3RpdmU6ICgpID0+IE1lcmdlPFxuICBUb2dnbGVQZXJzcGVjdGl2ZVVwZGF0ZXJBY3Rpb24sXG4gIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuVE9HR0xFX1BFUlNQRUNUSVZFfVxuPiA9IGNyZWF0ZUFjdGlvbihBY3Rpb25UeXBlcy5UT0dHTEVfUEVSU1BFQ1RJVkUpO1xuXG5leHBvcnQgdHlwZSBGaXRCb3VuZHNVcGRhdGVyQWN0aW9uID0ge3BheWxvYWQ6IEJvdW5kc307XG4vKipcbiAqIEZpdCBtYXAgdmlld3BvcnQgdG8gYm91bmRzXG4gKiBAbWVtYmVyb2YgbWFwU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge0FycmF5PE51bWJlcj59IGJvdW5kcyBhcyBgW2xuZ01pbiwgbGF0TWluLCBsbmdNYXgsIGxhdE1heF1gXG4gKiBAcHVibGljXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHtmaXRCb3VuZHN9IGZyb20gJ2tlcGxlci5nbC9hY3Rpb25zJztcbiAqIHRoaXMucHJvcHMuZGlzcGF0Y2goZml0Qm91bmRzKFstMTIyLjIzLCAzNy4xMjcsIC0xMjIuMTEsIDM3LjQ1Nl0pKTtcbiAqL1xuZXhwb3J0IGNvbnN0IGZpdEJvdW5kczogKFxuICBwYXlsb2FkOiBCb3VuZHNcbikgPT4gTWVyZ2U8XG4gIEZpdEJvdW5kc1VwZGF0ZXJBY3Rpb24sXG4gIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuRklUX0JPVU5EU31cbj4gPSBjcmVhdGVBY3Rpb24oQWN0aW9uVHlwZXMuRklUX0JPVU5EUywgKGJvdW5kczogQm91bmRzKSA9PiAoe3BheWxvYWQ6IGJvdW5kc30pKTtcblxuZXhwb3J0IHR5cGUgVXBkYXRlTWFwVXBkYXRlckFjdGlvbiA9IHtwYXlsb2FkOiB7dmlld3BvcnQ6IFZpZXdwb3J0OyBtYXBJbmRleD86IG51bWJlcn19O1xuLyoqXG4gKiBVcGRhdGUgbWFwIHZpZXdwb3J0XG4gKiBAbWVtYmVyb2YgbWFwU3RhdGVBY3Rpb25zXG4gKiBAcGFyYW0ge09iamVjdH0gdmlld3BvcnQgdmlld3BvcnQgb2JqZWN0IGNvbnRhaW5lciBvbmUgb3IgYW55IG9mIHRoZXNlIHByb3BlcnRpZXMgYHdpZHRoYCwgYGhlaWdodGAsIGBsYXRpdHVkZWAgYGxvbmdpdHVkZWAsIGB6b29tYCwgYHBpdGNoYCwgYGJlYXJpbmdgLCBgZHJhZ1JvdGF0ZWBcbiAqIEBwYXJhbSB7TnVtYmVyfSBbdmlld3BvcnQud2lkdGhdIFdpZHRoIG9mIHZpZXdwb3J0XG4gKiBAcGFyYW0ge051bWJlcn0gW3ZpZXdwb3J0LmhlaWdodF0gSGVpZ2h0IG9mIHZpZXdwb3J0XG4gKiBAcGFyYW0ge051bWJlcn0gW3ZpZXdwb3J0Lnpvb21dIFpvb20gb2Ygdmlld3BvcnRcbiAqIEBwYXJhbSB7TnVtYmVyfSBbdmlld3BvcnQucGl0Y2hdIENhbWVyYSBhbmdsZSBpbiBkZWdyZWVzICgwIGlzIHN0cmFpZ2h0IGRvd24pXG4gKiBAcGFyYW0ge051bWJlcn0gW3ZpZXdwb3J0LmJlYXJpbmddIE1hcCByb3RhdGlvbiBpbiBkZWdyZWVzICgwIG1lYW5zIG5vcnRoIGlzIHVwKVxuICogQHBhcmFtIHtOdW1iZXJ9IFt2aWV3cG9ydC5sYXRpdHVkZV0gTGF0aXR1ZGUgY2VudGVyIG9mIHZpZXdwb3J0IG9uIG1hcCBpbiBtZXJjYXRvciBwcm9qZWN0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gW3ZpZXdwb3J0LmxvbmdpdHVkZV0gTG9uZ2l0dWRlIENlbnRlciBvZiB2aWV3cG9ydCBvbiBtYXAgaW4gbWVyY2F0b3IgcHJvamVjdGlvblxuICogQHBhcmFtIHtib29sZWFufSBbdmlld3BvcnQuZHJhZ1JvdGF0ZV0gV2hldGhlciB0byBlbmFibGUgZHJhZyBhbmQgcm90YXRlIG1hcCBpbnRvIHBlcnNwZWN0aXZlIHZpZXdwb3J0XG4gKiBAcGFyYW0ge251bWJlcn0gbWFwSW5kZXggSW5kZXggb2Ygd2hpY2ggbWFwIHRvIHVwZGF0ZSB0aGUgdmlld3BvcnQgb2ZcbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQge3VwZGF0ZU1hcH0gZnJvbSAna2VwbGVyLmdsL2FjdGlvbnMnO1xuICogdGhpcy5wcm9wcy5kaXNwYXRjaCh1cGRhdGVNYXAoe2xhdGl0dWRlOiAzNy43NTA0MywgbG9uZ2l0dWRlOiAtMTIyLjM0Njc5LCB3aWR0aDogODAwLCBoZWlnaHQ6IDEyMDB9LCAwKSk7XG4gKi9cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZU1hcDogKFxuICB2aWV3cG9ydDogVmlld3BvcnQsXG4gIG1hcEluZGV4PzogbnVtYmVyXG4pID0+IE1lcmdlPFVwZGF0ZU1hcFVwZGF0ZXJBY3Rpb24sIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuVVBEQVRFX01BUH0+ID0gY3JlYXRlQWN0aW9uKFxuICBBY3Rpb25UeXBlcy5VUERBVEVfTUFQLFxuICAodmlld3BvcnQ6IFZpZXdwb3J0LCBtYXBJbmRleD86IG51bWJlcikgPT4gKHtcbiAgICBwYXlsb2FkOiB7XG4gICAgICB2aWV3cG9ydCxcbiAgICAgIG1hcEluZGV4XG4gICAgfVxuICB9KVxuKTtcblxuZXhwb3J0IHR5cGUgVG9nZ2xlU3BsaXRNYXBVcGRhdGVyQWN0aW9uID0ge1xuICBwYXlsb2FkOiBudW1iZXI7XG59O1xuLyoqXG4gKiBUb2dnbGUgYmV0d2VlbiBzaW5nbGUgbWFwIG9yIHNwbGl0IG1hcHNcbiAqIEBtZW1iZXJvZiBtYXBTdGF0ZUFjdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBbaW5kZXhdIGluZGV4IGlzIHByb3ZpZGVkLCBjbG9zZSBzcGxpdCBtYXAgYXQgaW5kZXhcbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQge3RvZ2dsZVNwbGl0TWFwfSBmcm9tICdrZXBsZXIuZ2wvYWN0aW9ucyc7XG4gKiB0aGlzLnByb3BzLmRpc3BhdGNoKHRvZ2dsZVNwbGl0TWFwKCkpO1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlU3BsaXRNYXA6IChcbiAgcGF5bG9hZDogbnVtYmVyXG4pID0+IE1lcmdlPFxuICBUb2dnbGVTcGxpdE1hcFVwZGF0ZXJBY3Rpb24sXG4gIHt0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuVE9HR0xFX1NQTElUX01BUH1cbj4gPSBjcmVhdGVBY3Rpb24oQWN0aW9uVHlwZXMuVE9HR0xFX1NQTElUX01BUCwgKGluZGV4OiBudW1iZXIpID0+ICh7cGF5bG9hZDogaW5kZXh9KSk7XG5cbmV4cG9ydCB0eXBlIFRvZ2dsZVNwbGl0TWFwVmlld3BvcnRVcGRhdGVyQWN0aW9uID0ge1xuICBwYXlsb2FkOiB7XG4gICAgaXNWaWV3cG9ydFN5bmNlZD86IGJvb2xlYW47XG4gICAgaXNab29tTG9ja2VkPzogYm9vbGVhbjtcbiAgfTtcbn07XG5cbi8qKlxuICogRm9yIHNwbGl0IG1hcHMsIHRvZ2dsZSBiZXR3ZWVuIGhhdmluZyAodW4pc3luY2VkIHZpZXdwb3J0cyBhbmQgKHVuKWxvY2tlZCB6b29tc1xuICogQG1lbWJlcm9mIG1hcFN0YXRlQWN0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IHN5bmNJbmZvXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtzeW5jSW5mby5pc1ZpZXdwb3J0U3luY2VkXSBBcmUgdGhlIDIgc3BsaXQgbWFwcyBoYXZpbmcgc3luY2VkIHZpZXdwb3J0cz9cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3N5bmNJbmZvLmlzWm9vbUxvY2tlZF0gSWYgc3BsaXQsIGFyZSB0aGUgem9vbXMgbG9ja2VkIHRvIGVhY2ggb3RoZXIgb3IgaW5kZXBlbmRlbnQ/XG4gKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVTcGxpdE1hcFZpZXdwb3J0OiAocGF5bG9hZDoge1xuICBpc1ZpZXdwb3J0U3luY2VkPzogYm9vbGVhbjtcbiAgaXNab29tTG9ja2VkPzogYm9vbGVhbjtcbn0pID0+IE1lcmdlPFxuICBUb2dnbGVTcGxpdE1hcFZpZXdwb3J0VXBkYXRlckFjdGlvbixcbiAge3R5cGU6IHR5cGVvZiBBY3Rpb25UeXBlcy5UT0dHTEVfU1BMSVRfTUFQX1ZJRVdQT1JUfVxuPiA9IGNyZWF0ZUFjdGlvbihcbiAgQWN0aW9uVHlwZXMuVE9HR0xFX1NQTElUX01BUF9WSUVXUE9SVCxcbiAgKHN5bmNJbmZvOiBUb2dnbGVTcGxpdE1hcFZpZXdwb3J0VXBkYXRlckFjdGlvblsncGF5bG9hZCddKSA9PiAoe3BheWxvYWQ6IHN5bmNJbmZvfSlcbik7XG5cbi8qKlxuICogVGhpcyBkZWNsYXJhdGlvbiBpcyBuZWVkZWQgdG8gZ3JvdXAgYWN0aW9ucyBpbiBkb2NzXG4gKi9cbi8qKlxuICogQWN0aW9ucyBoYW5kbGVkIG1vc3RseSBieSAgYG1hcFN0YXRlYCByZWR1Y2VyLlxuICogVGhleSBtYW5hZ2UgbWFwIHZpZXdwb3J0IHVwZGF0ZSwgdG9nZ2xlIGJldHdlZW4gMmQgYW5kIDNkIG1hcCxcbiAqIHRvZ2dsZSBiZXR3ZWVuIHNpbmdsZSBhbmQgc3BsaXQgbWFwcy5cbiAqXG4gKiBAcHVibGljXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4vLyBAdHMtaWdub3JlXG5jb25zdCBtYXBTdGF0ZUFjdGlvbnMgPSBudWxsO1xuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuIl19