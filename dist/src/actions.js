"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceDataInMap = exports.keplerGlInit = exports.receiveMapConfig = exports.resetMapConfig = exports.addDataToMap = void 0;

var _actionTypes = _interopRequireDefault(require("./action-types"));

var _toolkit = require("@reduxjs/toolkit");

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
 * Add data to kepler.gl reducer, prepare map with preset configuration if config is passed.
 * Kepler.gl provides a handy set of utils to parse data from different formats to the `data` object required in dataset. You rarely need to manually format the data obejct.
 *
 * Use `KeplerGlSchema.getConfigToSave` to generate a json blob of the currents instance config.
 * The config object value will always have higher precedence than the options properties.
 *
 * Kepler.gl uses `dataId` in the config to match with loaded dataset. If you pass a config object, you need
 * to match the `info.id` of your dataset to the `dataId` in each `layer`, `filter` and `interactionConfig.tooltips.fieldsToShow`
 *
 * @memberof main
 * @param {Object} data
 * @param {Array<Object>|Object} data.datasets - ***required** datasets can be a dataset or an array of datasets
 * Each dataset object needs to have `info` and `data` property.
 * @param {Object} data.datasets.info -info of a dataset
 * @param {string} data.datasets.info.id - id of this dataset. If config is defined, `id` should matches the `dataId` in config.
 * @param {string} data.datasets.info.label - A display name of this dataset
 * @param {Object} data.datasets.data - ***required** The data object, in a tabular format with 2 properties `fields` and `rows`
 * @param {Array<Object>} data.datasets.data.fields - ***required** Array of fields,
 * @param {string} data.datasets.data.fields.name - ***required** Name of the field,
 * @param {Array<Array>} data.datasets.data.rows - ***required** Array of rows, in a tabular format with `fields` and `rows`
 *
 * @param {Object} data.options
 * @param {boolean} data.options.centerMap `default: true` if `centerMap` is set to `true` kepler.gl will
 * place the map view within the data points boundaries.  `options.centerMap` will override `config.mapState` if passed in.
 * @param {boolean} data.options.readOnly `default: false` if `readOnly` is set to `true`
 * the left setting panel will be hidden
 * @param {boolean} data.options.keepExistingConfig whether to keep exiting map data and associated layer filter  interaction config `default: false`.
 * @param {Object} data.config this object will contain the full kepler.gl instance configuration {mapState, mapStyle, visState}
 * @public
 * @example
 *
 * // app.js
 * import {addDataToMap} from 'kepler.gl/actions';
 *
 * const sampleTripData = {
 *  fields: [
 *    {name: 'tpep_pickup_datetime', format: 'YYYY-M-D H:m:s', type: 'timestamp'},
 *    {name: 'pickup_longitude', format: '', type: 'real'},
 *    {name: 'pickup_latitude', format: '', type: 'real'}
 *  ],
 *  rows: [
 *    ['2015-01-15 19:05:39 +00:00', -73.99389648, 40.75011063],
 *    ['2015-01-15 19:05:39 +00:00', -73.97642517, 40.73981094],
 *    ['2015-01-15 19:05:40 +00:00', -73.96870422, 40.75424576],
 *  ]
 * };
 *
 * const sampleConfig = {
 *   visState: {
 *     filters: [
 *       {
 *         id: 'me',
 *         dataId: 'test_trip_data',
 *         name: 'tpep_pickup_datetime',
 *         type: 'timeRange',
 *         view: 'enlarged'
 *       }
 *     ]
 *   }
 * }
 *
 * this.props.dispatch(
 *   addDataToMap({
 *     datasets: {
 *       info: {
 *         label: 'Sample Taxi Trips in New York City',
 *         id: 'test_trip_data'
 *       },
 *       data: sampleTripData
 *     },
 *     options: {
 *       centerMap: true,
 *       readOnly: false,
 *       keepExistingConfig: false
 *     },
 *     info: {
 *       title: 'Taro and Blue',
 *       description: 'This is my map'
 *     },
 *     config: sampleConfig
 *   })
 * );
 */
var addDataToMap = (0, _toolkit.createAction)(_actionTypes["default"].ADD_DATA_TO_MAP, function (data) {
  return {
    payload: data
  };
});
/**
 * Reset all sub-reducers to its initial state. This can be used to clear out all configuration in the reducer.
 * @memberof main
 * @public
 */

exports.addDataToMap = addDataToMap;
var resetMapConfig = (0, _toolkit.createAction)(_actionTypes["default"].RESET_MAP_CONFIG);
exports.resetMapConfig = resetMapConfig;

/**
 * Pass config to kepler.gl instance, prepare the state with preset configs.
 * Calling `KeplerGlSchema.parseSavedConfig` to convert saved config before passing it in is required.
 *
 * You can call `receiveMapConfig` before passing in any data. The reducer will store layer and filter config, waiting for
 * data to come in. When data arrives, you can call `addDataToMap` without passing any config, and the reducer will try to match
 * preloaded configs. This behavior is designed to allow asynchronous data loading.
 *
 * It is also useful when you want to prepare the kepler.gl instance with some preset layer and filter settings.
 * **Note** Sequence is important, `receiveMapConfig` needs to be called __before__ data is loaded. Currently kepler.gl doesn't allow calling `receiveMapConfig` after data is loaded.
 * It will reset current configuration first then apply config to it.
 * @memberof main
 * @param {Object} config - ***required** The Config Object
 * @param {Object} options - ***optional** The Option object
 * @param {boolean} options.centerMap `default: true` if `centerMap` is set to `true` kepler.gl will
 * place the map view within the data points boundaries
 * @param {boolean} options.readOnly `default: false` if `readOnly` is set to `true`
 * the left setting panel will be hidden
 * @param {boolean} options.keepExistingConfig whether to keep exiting layer filter and interaction config `default: false`.
 * @param {boolean} options.autoCreateLayers whether to automatically create layers based on dataset columns `default: true`.
 * @public
 * @example
 * import {receiveMapConfig} from 'kepler.gl/actions';
 * import KeplerGlSchema from 'kepler.gl/schemas';
 *
 * const parsedConfig = KeplerGlSchema.parseSavedConfig(config);
 * this.props.dispatch(receiveMapConfig(parsedConfig));
 */
var receiveMapConfig = (0, _toolkit.createAction)(_actionTypes["default"].RECEIVE_MAP_CONFIG, function (config, options) {
  return {
    payload: {
      config: config,
      options: options
    }
  };
});
exports.receiveMapConfig = receiveMapConfig;

/**
 * Initialize kepler.gl reducer. It is used to pass in `mapboxApiAccessToken` to `mapStyle` reducer.
 * @memberof main
 * @param {object} payload
 * @param payload.mapboxApiAccessToken - mapboxApiAccessToken to be saved to mapStyle reducer
 * @param payload.mapboxApiUrl - mapboxApiUrl to be saved to mapStyle reducer.
 * @param payload.mapStylesReplaceDefault - mapStylesReplaceDefault to be saved to mapStyle reducer
 * @param payload.initialUiState - initial ui state
 * @public
 */
// @ts-expect-error
var keplerGlInit = (0, _toolkit.createAction)(_actionTypes["default"].INIT, function (payload) {
  return {
    payload: payload
  };
});
exports.keplerGlInit = keplerGlInit;

/**
 * Initialize kepler.gl reducer. It is used to pass in `mapboxApiAccessToken` to `mapStyle` reducer.
 * @memberof main
 * @param {object} payload
 * @param payload.datasetToReplaceId - mapboxApiAccessToken to be saved to mapStyle reducer
 * @param payload.datasetToUse - mapboxApiUrl to be saved to mapStyle reducer.
 * @public
 */
var replaceDataInMap = (0, _toolkit.createAction)(_actionTypes["default"].REPLACE_DATA_IN_MAP, function (payload) {
  return {
    payload: payload
  };
});
/**
 * This declaration is needed to group actions in docs
 */

/**
 * Main kepler.gl actions, these actions handles loading data and config into kepler.gl reducer. These actions
 * is listened by all subreducers,
 * @public
 */

/* eslint-disable no-unused-vars */
// @ts-ignore

exports.replaceDataInMap = replaceDataInMap;
var main = null;
/* eslint-enable no-unused-vars */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NyYy9hY3Rpb25zLnRzIl0sIm5hbWVzIjpbImFkZERhdGFUb01hcCIsIkFjdGlvblR5cGVzIiwiQUREX0RBVEFfVE9fTUFQIiwiZGF0YSIsInBheWxvYWQiLCJyZXNldE1hcENvbmZpZyIsIlJFU0VUX01BUF9DT05GSUciLCJyZWNlaXZlTWFwQ29uZmlnIiwiUkVDRUlWRV9NQVBfQ09ORklHIiwiY29uZmlnIiwib3B0aW9ucyIsImtlcGxlckdsSW5pdCIsIklOSVQiLCJyZXBsYWNlRGF0YUluTWFwIiwiUkVQTEFDRV9EQVRBX0lOX01BUCIsIm1haW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFlBS1osR0FBRywyQkFBYUMsd0JBQVlDLGVBQXpCLEVBQTBDLFVBQUNDLElBQUQ7QUFBQSxTQUFnQztBQUFDQyxJQUFBQSxPQUFPLEVBQUVEO0FBQVYsR0FBaEM7QUFBQSxDQUExQyxDQUxHO0FBT1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUUsY0FBaUUsR0FBRywyQkFDL0VKLHdCQUFZSyxnQkFEbUUsQ0FBMUU7OztBQVNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUMsZ0JBTVosR0FBRywyQkFDRk4sd0JBQVlPLGtCQURWLEVBRUYsVUFBQ0MsTUFBRCxFQUE0Q0MsT0FBNUM7QUFBQSxTQUE2RjtBQUMzRk4sSUFBQUEsT0FBTyxFQUFFO0FBQ1BLLE1BQUFBLE1BQU0sRUFBTkEsTUFETztBQUVQQyxNQUFBQSxPQUFPLEVBQVBBO0FBRk87QUFEa0YsR0FBN0Y7QUFBQSxDQUZFLENBTkc7OztBQXNCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUMsWUFLWixHQUFHLDJCQUFhVix3QkFBWVcsSUFBekIsRUFBK0IsVUFBQ1IsT0FBRDtBQUFBLFNBQW1DO0FBQUNBLElBQUFBLE9BQU8sRUFBUEE7QUFBRCxHQUFuQztBQUFBLENBQS9CLENBTEc7OztBQWtCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTVMsZ0JBS1osR0FBRywyQkFBYVosd0JBQVlhLG1CQUF6QixFQUE4QyxVQUFDVixPQUFEO0FBQUEsU0FBdUM7QUFDdkZBLElBQUFBLE9BQU8sRUFBUEE7QUFEdUYsR0FBdkM7QUFBQSxDQUE5QyxDQUxHO0FBU1A7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTVcsSUFBSSxHQUFHLElBQWI7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7ZGVmYXVsdCBhcyBBY3Rpb25UeXBlc30gZnJvbSAnLi9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHtjcmVhdGVBY3Rpb259IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5pbXBvcnQge1xuICBBZGREYXRhVG9NYXBPcHRpb25zLFxuICBBZGREYXRhVG9NYXBQYXlsb2FkLFxuICBCb3VuZHMsXG4gIFVpU3RhdGUsXG4gIFBhcnNlZENvbmZpZyxcbiAgUHJvdG9EYXRhc2V0XG59IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBBY3Rpb25IYW5kbGVyPEEgZXh0ZW5kcyAoLi4uYXJnczogYW55KSA9PiBhbnk+ID0gKC4uLmFyZ3M6IFBhcmFtZXRlcnM8QT4pID0+IHZvaWQ7XG5cbi8qKlxuICogQWRkIGRhdGEgdG8ga2VwbGVyLmdsIHJlZHVjZXIsIHByZXBhcmUgbWFwIHdpdGggcHJlc2V0IGNvbmZpZ3VyYXRpb24gaWYgY29uZmlnIGlzIHBhc3NlZC5cbiAqIEtlcGxlci5nbCBwcm92aWRlcyBhIGhhbmR5IHNldCBvZiB1dGlscyB0byBwYXJzZSBkYXRhIGZyb20gZGlmZmVyZW50IGZvcm1hdHMgdG8gdGhlIGBkYXRhYCBvYmplY3QgcmVxdWlyZWQgaW4gZGF0YXNldC4gWW91IHJhcmVseSBuZWVkIHRvIG1hbnVhbGx5IGZvcm1hdCB0aGUgZGF0YSBvYmVqY3QuXG4gKlxuICogVXNlIGBLZXBsZXJHbFNjaGVtYS5nZXRDb25maWdUb1NhdmVgIHRvIGdlbmVyYXRlIGEganNvbiBibG9iIG9mIHRoZSBjdXJyZW50cyBpbnN0YW5jZSBjb25maWcuXG4gKiBUaGUgY29uZmlnIG9iamVjdCB2YWx1ZSB3aWxsIGFsd2F5cyBoYXZlIGhpZ2hlciBwcmVjZWRlbmNlIHRoYW4gdGhlIG9wdGlvbnMgcHJvcGVydGllcy5cbiAqXG4gKiBLZXBsZXIuZ2wgdXNlcyBgZGF0YUlkYCBpbiB0aGUgY29uZmlnIHRvIG1hdGNoIHdpdGggbG9hZGVkIGRhdGFzZXQuIElmIHlvdSBwYXNzIGEgY29uZmlnIG9iamVjdCwgeW91IG5lZWRcbiAqIHRvIG1hdGNoIHRoZSBgaW5mby5pZGAgb2YgeW91ciBkYXRhc2V0IHRvIHRoZSBgZGF0YUlkYCBpbiBlYWNoIGBsYXllcmAsIGBmaWx0ZXJgIGFuZCBgaW50ZXJhY3Rpb25Db25maWcudG9vbHRpcHMuZmllbGRzVG9TaG93YFxuICpcbiAqIEBtZW1iZXJvZiBtYWluXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fE9iamVjdH0gZGF0YS5kYXRhc2V0cyAtICoqKnJlcXVpcmVkKiogZGF0YXNldHMgY2FuIGJlIGEgZGF0YXNldCBvciBhbiBhcnJheSBvZiBkYXRhc2V0c1xuICogRWFjaCBkYXRhc2V0IG9iamVjdCBuZWVkcyB0byBoYXZlIGBpbmZvYCBhbmQgYGRhdGFgIHByb3BlcnR5LlxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEuZGF0YXNldHMuaW5mbyAtaW5mbyBvZiBhIGRhdGFzZXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhLmRhdGFzZXRzLmluZm8uaWQgLSBpZCBvZiB0aGlzIGRhdGFzZXQuIElmIGNvbmZpZyBpcyBkZWZpbmVkLCBgaWRgIHNob3VsZCBtYXRjaGVzIHRoZSBgZGF0YUlkYCBpbiBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5kYXRhc2V0cy5pbmZvLmxhYmVsIC0gQSBkaXNwbGF5IG5hbWUgb2YgdGhpcyBkYXRhc2V0XG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YS5kYXRhc2V0cy5kYXRhIC0gKioqcmVxdWlyZWQqKiBUaGUgZGF0YSBvYmplY3QsIGluIGEgdGFidWxhciBmb3JtYXQgd2l0aCAyIHByb3BlcnRpZXMgYGZpZWxkc2AgYW5kIGByb3dzYFxuICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBkYXRhLmRhdGFzZXRzLmRhdGEuZmllbGRzIC0gKioqcmVxdWlyZWQqKiBBcnJheSBvZiBmaWVsZHMsXG4gKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5kYXRhc2V0cy5kYXRhLmZpZWxkcy5uYW1lIC0gKioqcmVxdWlyZWQqKiBOYW1lIG9mIHRoZSBmaWVsZCxcbiAqIEBwYXJhbSB7QXJyYXk8QXJyYXk+fSBkYXRhLmRhdGFzZXRzLmRhdGEucm93cyAtICoqKnJlcXVpcmVkKiogQXJyYXkgb2Ygcm93cywgaW4gYSB0YWJ1bGFyIGZvcm1hdCB3aXRoIGBmaWVsZHNgIGFuZCBgcm93c2BcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YS5vcHRpb25zXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGRhdGEub3B0aW9ucy5jZW50ZXJNYXAgYGRlZmF1bHQ6IHRydWVgIGlmIGBjZW50ZXJNYXBgIGlzIHNldCB0byBgdHJ1ZWAga2VwbGVyLmdsIHdpbGxcbiAqIHBsYWNlIHRoZSBtYXAgdmlldyB3aXRoaW4gdGhlIGRhdGEgcG9pbnRzIGJvdW5kYXJpZXMuICBgb3B0aW9ucy5jZW50ZXJNYXBgIHdpbGwgb3ZlcnJpZGUgYGNvbmZpZy5tYXBTdGF0ZWAgaWYgcGFzc2VkIGluLlxuICogQHBhcmFtIHtib29sZWFufSBkYXRhLm9wdGlvbnMucmVhZE9ubHkgYGRlZmF1bHQ6IGZhbHNlYCBpZiBgcmVhZE9ubHlgIGlzIHNldCB0byBgdHJ1ZWBcbiAqIHRoZSBsZWZ0IHNldHRpbmcgcGFuZWwgd2lsbCBiZSBoaWRkZW5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gZGF0YS5vcHRpb25zLmtlZXBFeGlzdGluZ0NvbmZpZyB3aGV0aGVyIHRvIGtlZXAgZXhpdGluZyBtYXAgZGF0YSBhbmQgYXNzb2NpYXRlZCBsYXllciBmaWx0ZXIgIGludGVyYWN0aW9uIGNvbmZpZyBgZGVmYXVsdDogZmFsc2VgLlxuICogQHBhcmFtIHtPYmplY3R9IGRhdGEuY29uZmlnIHRoaXMgb2JqZWN0IHdpbGwgY29udGFpbiB0aGUgZnVsbCBrZXBsZXIuZ2wgaW5zdGFuY2UgY29uZmlndXJhdGlvbiB7bWFwU3RhdGUsIG1hcFN0eWxlLCB2aXNTdGF0ZX1cbiAqIEBwdWJsaWNcbiAqIEBleGFtcGxlXG4gKlxuICogLy8gYXBwLmpzXG4gKiBpbXBvcnQge2FkZERhdGFUb01hcH0gZnJvbSAna2VwbGVyLmdsL2FjdGlvbnMnO1xuICpcbiAqIGNvbnN0IHNhbXBsZVRyaXBEYXRhID0ge1xuICogIGZpZWxkczogW1xuICogICAge25hbWU6ICd0cGVwX3BpY2t1cF9kYXRldGltZScsIGZvcm1hdDogJ1lZWVktTS1EIEg6bTpzJywgdHlwZTogJ3RpbWVzdGFtcCd9LFxuICogICAge25hbWU6ICdwaWNrdXBfbG9uZ2l0dWRlJywgZm9ybWF0OiAnJywgdHlwZTogJ3JlYWwnfSxcbiAqICAgIHtuYW1lOiAncGlja3VwX2xhdGl0dWRlJywgZm9ybWF0OiAnJywgdHlwZTogJ3JlYWwnfVxuICogIF0sXG4gKiAgcm93czogW1xuICogICAgWycyMDE1LTAxLTE1IDE5OjA1OjM5ICswMDowMCcsIC03My45OTM4OTY0OCwgNDAuNzUwMTEwNjNdLFxuICogICAgWycyMDE1LTAxLTE1IDE5OjA1OjM5ICswMDowMCcsIC03My45NzY0MjUxNywgNDAuNzM5ODEwOTRdLFxuICogICAgWycyMDE1LTAxLTE1IDE5OjA1OjQwICswMDowMCcsIC03My45Njg3MDQyMiwgNDAuNzU0MjQ1NzZdLFxuICogIF1cbiAqIH07XG4gKlxuICogY29uc3Qgc2FtcGxlQ29uZmlnID0ge1xuICogICB2aXNTdGF0ZToge1xuICogICAgIGZpbHRlcnM6IFtcbiAqICAgICAgIHtcbiAqICAgICAgICAgaWQ6ICdtZScsXG4gKiAgICAgICAgIGRhdGFJZDogJ3Rlc3RfdHJpcF9kYXRhJyxcbiAqICAgICAgICAgbmFtZTogJ3RwZXBfcGlja3VwX2RhdGV0aW1lJyxcbiAqICAgICAgICAgdHlwZTogJ3RpbWVSYW5nZScsXG4gKiAgICAgICAgIHZpZXc6ICdlbmxhcmdlZCdcbiAqICAgICAgIH1cbiAqICAgICBdXG4gKiAgIH1cbiAqIH1cbiAqXG4gKiB0aGlzLnByb3BzLmRpc3BhdGNoKFxuICogICBhZGREYXRhVG9NYXAoe1xuICogICAgIGRhdGFzZXRzOiB7XG4gKiAgICAgICBpbmZvOiB7XG4gKiAgICAgICAgIGxhYmVsOiAnU2FtcGxlIFRheGkgVHJpcHMgaW4gTmV3IFlvcmsgQ2l0eScsXG4gKiAgICAgICAgIGlkOiAndGVzdF90cmlwX2RhdGEnXG4gKiAgICAgICB9LFxuICogICAgICAgZGF0YTogc2FtcGxlVHJpcERhdGFcbiAqICAgICB9LFxuICogICAgIG9wdGlvbnM6IHtcbiAqICAgICAgIGNlbnRlck1hcDogdHJ1ZSxcbiAqICAgICAgIHJlYWRPbmx5OiBmYWxzZSxcbiAqICAgICAgIGtlZXBFeGlzdGluZ0NvbmZpZzogZmFsc2VcbiAqICAgICB9LFxuICogICAgIGluZm86IHtcbiAqICAgICAgIHRpdGxlOiAnVGFybyBhbmQgQmx1ZScsXG4gKiAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgbXkgbWFwJ1xuICogICAgIH0sXG4gKiAgICAgY29uZmlnOiBzYW1wbGVDb25maWdcbiAqICAgfSlcbiAqICk7XG4gKi9cbmV4cG9ydCBjb25zdCBhZGREYXRhVG9NYXA6IChcbiAgZGF0YTogQWRkRGF0YVRvTWFwUGF5bG9hZFxuKSA9PiB7XG4gIHR5cGU6IHR5cGVvZiBBY3Rpb25UeXBlcy5BRERfREFUQV9UT19NQVA7XG4gIHBheWxvYWQ6IEFkZERhdGFUb01hcFBheWxvYWQ7XG59ID0gY3JlYXRlQWN0aW9uKEFjdGlvblR5cGVzLkFERF9EQVRBX1RPX01BUCwgKGRhdGE6IEFkZERhdGFUb01hcFBheWxvYWQpID0+ICh7cGF5bG9hZDogZGF0YX0pKTtcblxuLyoqXG4gKiBSZXNldCBhbGwgc3ViLXJlZHVjZXJzIHRvIGl0cyBpbml0aWFsIHN0YXRlLiBUaGlzIGNhbiBiZSB1c2VkIHRvIGNsZWFyIG91dCBhbGwgY29uZmlndXJhdGlvbiBpbiB0aGUgcmVkdWNlci5cbiAqIEBtZW1iZXJvZiBtYWluXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCByZXNldE1hcENvbmZpZzogKCkgPT4ge3R5cGU6IHR5cGVvZiBBY3Rpb25UeXBlcy5SRVNFVF9NQVBfQ09ORklHfSA9IGNyZWF0ZUFjdGlvbihcbiAgQWN0aW9uVHlwZXMuUkVTRVRfTUFQX0NPTkZJR1xuKTtcblxuZXhwb3J0IHR5cGUgUmVjZWl2ZU1hcENvbmZpZ1BheWxvYWQgPSB7XG4gIGNvbmZpZzogUGFyc2VkQ29uZmlnO1xuICBvcHRpb25zPzogQWRkRGF0YVRvTWFwT3B0aW9ucztcbiAgYm91bmRzPzogQm91bmRzO1xufTtcbi8qKlxuICogUGFzcyBjb25maWcgdG8ga2VwbGVyLmdsIGluc3RhbmNlLCBwcmVwYXJlIHRoZSBzdGF0ZSB3aXRoIHByZXNldCBjb25maWdzLlxuICogQ2FsbGluZyBgS2VwbGVyR2xTY2hlbWEucGFyc2VTYXZlZENvbmZpZ2AgdG8gY29udmVydCBzYXZlZCBjb25maWcgYmVmb3JlIHBhc3NpbmcgaXQgaW4gaXMgcmVxdWlyZWQuXG4gKlxuICogWW91IGNhbiBjYWxsIGByZWNlaXZlTWFwQ29uZmlnYCBiZWZvcmUgcGFzc2luZyBpbiBhbnkgZGF0YS4gVGhlIHJlZHVjZXIgd2lsbCBzdG9yZSBsYXllciBhbmQgZmlsdGVyIGNvbmZpZywgd2FpdGluZyBmb3JcbiAqIGRhdGEgdG8gY29tZSBpbi4gV2hlbiBkYXRhIGFycml2ZXMsIHlvdSBjYW4gY2FsbCBgYWRkRGF0YVRvTWFwYCB3aXRob3V0IHBhc3NpbmcgYW55IGNvbmZpZywgYW5kIHRoZSByZWR1Y2VyIHdpbGwgdHJ5IHRvIG1hdGNoXG4gKiBwcmVsb2FkZWQgY29uZmlncy4gVGhpcyBiZWhhdmlvciBpcyBkZXNpZ25lZCB0byBhbGxvdyBhc3luY2hyb25vdXMgZGF0YSBsb2FkaW5nLlxuICpcbiAqIEl0IGlzIGFsc28gdXNlZnVsIHdoZW4geW91IHdhbnQgdG8gcHJlcGFyZSB0aGUga2VwbGVyLmdsIGluc3RhbmNlIHdpdGggc29tZSBwcmVzZXQgbGF5ZXIgYW5kIGZpbHRlciBzZXR0aW5ncy5cbiAqICoqTm90ZSoqIFNlcXVlbmNlIGlzIGltcG9ydGFudCwgYHJlY2VpdmVNYXBDb25maWdgIG5lZWRzIHRvIGJlIGNhbGxlZCBfX2JlZm9yZV9fIGRhdGEgaXMgbG9hZGVkLiBDdXJyZW50bHkga2VwbGVyLmdsIGRvZXNuJ3QgYWxsb3cgY2FsbGluZyBgcmVjZWl2ZU1hcENvbmZpZ2AgYWZ0ZXIgZGF0YSBpcyBsb2FkZWQuXG4gKiBJdCB3aWxsIHJlc2V0IGN1cnJlbnQgY29uZmlndXJhdGlvbiBmaXJzdCB0aGVuIGFwcGx5IGNvbmZpZyB0byBpdC5cbiAqIEBtZW1iZXJvZiBtYWluXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0gKioqcmVxdWlyZWQqKiBUaGUgQ29uZmlnIE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSAqKipvcHRpb25hbCoqIFRoZSBPcHRpb24gb2JqZWN0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMuY2VudGVyTWFwIGBkZWZhdWx0OiB0cnVlYCBpZiBgY2VudGVyTWFwYCBpcyBzZXQgdG8gYHRydWVgIGtlcGxlci5nbCB3aWxsXG4gKiBwbGFjZSB0aGUgbWFwIHZpZXcgd2l0aGluIHRoZSBkYXRhIHBvaW50cyBib3VuZGFyaWVzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMucmVhZE9ubHkgYGRlZmF1bHQ6IGZhbHNlYCBpZiBgcmVhZE9ubHlgIGlzIHNldCB0byBgdHJ1ZWBcbiAqIHRoZSBsZWZ0IHNldHRpbmcgcGFuZWwgd2lsbCBiZSBoaWRkZW5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5rZWVwRXhpc3RpbmdDb25maWcgd2hldGhlciB0byBrZWVwIGV4aXRpbmcgbGF5ZXIgZmlsdGVyIGFuZCBpbnRlcmFjdGlvbiBjb25maWcgYGRlZmF1bHQ6IGZhbHNlYC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5hdXRvQ3JlYXRlTGF5ZXJzIHdoZXRoZXIgdG8gYXV0b21hdGljYWxseSBjcmVhdGUgbGF5ZXJzIGJhc2VkIG9uIGRhdGFzZXQgY29sdW1ucyBgZGVmYXVsdDogdHJ1ZWAuXG4gKiBAcHVibGljXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHtyZWNlaXZlTWFwQ29uZmlnfSBmcm9tICdrZXBsZXIuZ2wvYWN0aW9ucyc7XG4gKiBpbXBvcnQgS2VwbGVyR2xTY2hlbWEgZnJvbSAna2VwbGVyLmdsL3NjaGVtYXMnO1xuICpcbiAqIGNvbnN0IHBhcnNlZENvbmZpZyA9IEtlcGxlckdsU2NoZW1hLnBhcnNlU2F2ZWRDb25maWcoY29uZmlnKTtcbiAqIHRoaXMucHJvcHMuZGlzcGF0Y2gocmVjZWl2ZU1hcENvbmZpZyhwYXJzZWRDb25maWcpKTtcbiAqL1xuZXhwb3J0IGNvbnN0IHJlY2VpdmVNYXBDb25maWc6IChcbiAgY29uZmlnOiBSZWNlaXZlTWFwQ29uZmlnUGF5bG9hZFsnY29uZmlnJ10sXG4gIG9wdGlvbnM6IFJlY2VpdmVNYXBDb25maWdQYXlsb2FkWydvcHRpb25zJ11cbikgPT4ge1xuICB0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuUkVDRUlWRV9NQVBfQ09ORklHO1xuICBwYXlsb2FkOiBSZWNlaXZlTWFwQ29uZmlnUGF5bG9hZDtcbn0gPSBjcmVhdGVBY3Rpb24oXG4gIEFjdGlvblR5cGVzLlJFQ0VJVkVfTUFQX0NPTkZJRyxcbiAgKGNvbmZpZzogUmVjZWl2ZU1hcENvbmZpZ1BheWxvYWRbJ2NvbmZpZyddLCBvcHRpb25zOiBSZWNlaXZlTWFwQ29uZmlnUGF5bG9hZFsnb3B0aW9ucyddKSA9PiAoe1xuICAgIHBheWxvYWQ6IHtcbiAgICAgIGNvbmZpZyxcbiAgICAgIG9wdGlvbnNcbiAgICB9XG4gIH0pXG4pO1xuXG5leHBvcnQgdHlwZSBLZXBsZXJHbEluaXRQYXlsb2FkID0ge1xuICBtYXBib3hBcGlBY2Nlc3NUb2tlbj86IHN0cmluZztcbiAgbWFwYm94QXBpVXJsPzogc3RyaW5nO1xuICBtYXBTdHlsZXNSZXBsYWNlRGVmYXVsdD86IGJvb2xlYW47XG4gIGluaXRpYWxVaVN0YXRlPzogUGFydGlhbDxVaVN0YXRlPjtcbn07XG4vKipcbiAqIEluaXRpYWxpemUga2VwbGVyLmdsIHJlZHVjZXIuIEl0IGlzIHVzZWQgdG8gcGFzcyBpbiBgbWFwYm94QXBpQWNjZXNzVG9rZW5gIHRvIGBtYXBTdHlsZWAgcmVkdWNlci5cbiAqIEBtZW1iZXJvZiBtYWluXG4gKiBAcGFyYW0ge29iamVjdH0gcGF5bG9hZFxuICogQHBhcmFtIHBheWxvYWQubWFwYm94QXBpQWNjZXNzVG9rZW4gLSBtYXBib3hBcGlBY2Nlc3NUb2tlbiB0byBiZSBzYXZlZCB0byBtYXBTdHlsZSByZWR1Y2VyXG4gKiBAcGFyYW0gcGF5bG9hZC5tYXBib3hBcGlVcmwgLSBtYXBib3hBcGlVcmwgdG8gYmUgc2F2ZWQgdG8gbWFwU3R5bGUgcmVkdWNlci5cbiAqIEBwYXJhbSBwYXlsb2FkLm1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0IC0gbWFwU3R5bGVzUmVwbGFjZURlZmF1bHQgdG8gYmUgc2F2ZWQgdG8gbWFwU3R5bGUgcmVkdWNlclxuICogQHBhcmFtIHBheWxvYWQuaW5pdGlhbFVpU3RhdGUgLSBpbml0aWFsIHVpIHN0YXRlXG4gKiBAcHVibGljXG4gKi9cbi8vIEB0cy1leHBlY3QtZXJyb3JcbmV4cG9ydCBjb25zdCBrZXBsZXJHbEluaXQ6IChcbiAgb3B0aW9ucz86IEtlcGxlckdsSW5pdFBheWxvYWRcbikgPT4ge1xuICB0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuSU5JVDtcbiAgcGF5bG9hZDogS2VwbGVyR2xJbml0UGF5bG9hZDtcbn0gPSBjcmVhdGVBY3Rpb24oQWN0aW9uVHlwZXMuSU5JVCwgKHBheWxvYWQ6IEtlcGxlckdsSW5pdFBheWxvYWQpID0+ICh7cGF5bG9hZH0pKTtcblxuZXhwb3J0IHR5cGUgUmVwbGFjZURhdGFUb01hcE9wdGlvbnMgPSB7XG4gIGNlbnRlck1hcD86IGJvb2xlYW47XG4gIGtlZXBFeGlzdGluZ0NvbmZpZz86IGJvb2xlYW47XG4gIGF1dG9DcmVhdGVMYXllcnM/OiBib29sZWFuO1xufTtcbmV4cG9ydCB0eXBlIFJlcGxhY2VEYXRhSW5NYXBQYXlsb2FkID0ge1xuICBkYXRhc2V0VG9SZXBsYWNlSWQ6IHN0cmluZztcbiAgZGF0YXNldFRvVXNlOiBQcm90b0RhdGFzZXQ7XG4gIG9wdGlvbnM/OiBSZXBsYWNlRGF0YVRvTWFwT3B0aW9ucztcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBrZXBsZXIuZ2wgcmVkdWNlci4gSXQgaXMgdXNlZCB0byBwYXNzIGluIGBtYXBib3hBcGlBY2Nlc3NUb2tlbmAgdG8gYG1hcFN0eWxlYCByZWR1Y2VyLlxuICogQG1lbWJlcm9mIG1haW5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXlsb2FkXG4gKiBAcGFyYW0gcGF5bG9hZC5kYXRhc2V0VG9SZXBsYWNlSWQgLSBtYXBib3hBcGlBY2Nlc3NUb2tlbiB0byBiZSBzYXZlZCB0byBtYXBTdHlsZSByZWR1Y2VyXG4gKiBAcGFyYW0gcGF5bG9hZC5kYXRhc2V0VG9Vc2UgLSBtYXBib3hBcGlVcmwgdG8gYmUgc2F2ZWQgdG8gbWFwU3R5bGUgcmVkdWNlci5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlcGxhY2VEYXRhSW5NYXA6IChcbiAgcGF5bG9hZDogUmVwbGFjZURhdGFJbk1hcFBheWxvYWRcbikgPT4ge1xuICB0eXBlOiB0eXBlb2YgQWN0aW9uVHlwZXMuUkVQTEFDRV9EQVRBX0lOX01BUDtcbiAgcGF5bG9hZDogUmVwbGFjZURhdGFJbk1hcFBheWxvYWQ7XG59ID0gY3JlYXRlQWN0aW9uKEFjdGlvblR5cGVzLlJFUExBQ0VfREFUQV9JTl9NQVAsIChwYXlsb2FkOiBSZXBsYWNlRGF0YUluTWFwUGF5bG9hZCkgPT4gKHtcbiAgcGF5bG9hZFxufSkpO1xuXG4vKipcbiAqIFRoaXMgZGVjbGFyYXRpb24gaXMgbmVlZGVkIHRvIGdyb3VwIGFjdGlvbnMgaW4gZG9jc1xuICovXG4vKipcbiAqIE1haW4ga2VwbGVyLmdsIGFjdGlvbnMsIHRoZXNlIGFjdGlvbnMgaGFuZGxlcyBsb2FkaW5nIGRhdGEgYW5kIGNvbmZpZyBpbnRvIGtlcGxlci5nbCByZWR1Y2VyLiBUaGVzZSBhY3Rpb25zXG4gKiBpcyBsaXN0ZW5lZCBieSBhbGwgc3VicmVkdWNlcnMsXG4gKiBAcHVibGljXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4vLyBAdHMtaWdub3JlXG5jb25zdCBtYWluID0gbnVsbDtcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cbiJdfQ==