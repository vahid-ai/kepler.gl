"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UNWRAP_TASK = exports.DELAY_TASK = exports.ACTION_TASK = exports.GET_SAVED_MAPS_TASK = exports.LOAD_CLOUD_MAP_TASK = exports.EXPORT_FILE_TO_CLOUD_TASK = exports.LOAD_MAP_STYLE_TASK = exports.PROCESS_FILE_DATA = exports.LOAD_FILE_TASK = void 0;

var _tasks = _interopRequireWildcard(require("react-palm/tasks"));

var _d3Request = require("d3-request");

var _processors = require("@kepler.gl/processors");

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
var LOAD_FILE_TASK = _tasks["default"].fromPromise(function (_ref) {
  var file = _ref.file,
      fileCache = _ref.fileCache,
      loaders = _ref.loaders,
      loadOptions = _ref.loadOptions;
  return (0, _processors.readFileInBatches)({
    file: file,
    fileCache: fileCache,
    loaders: loaders,
    loadOptions: loadOptions
  });
}, 'LOAD_FILE_TASK');

exports.LOAD_FILE_TASK = LOAD_FILE_TASK;

var PROCESS_FILE_DATA = _tasks["default"].fromPromise(_processors.processFileData, 'PROCESS_FILE_CONTENT');

exports.PROCESS_FILE_DATA = PROCESS_FILE_DATA;
var LOAD_MAP_STYLE_TASK = (0, _tasks.taskCreator)(function (_ref2, success, error) {
  var url = _ref2.url,
      id = _ref2.id;
  return (0, _d3Request.json)(url, function (err, result) {
    if (err) {
      error(err);
    } else {
      if (!result) {
        error(new Error('Map style response is empty'));
      }

      success({
        id: id,
        style: result
      });
    }
  });
}, 'LOAD_MAP_STYLE_TASK');
/**
 * task to upload file to cloud provider
 */

exports.LOAD_MAP_STYLE_TASK = LOAD_MAP_STYLE_TASK;

var EXPORT_FILE_TO_CLOUD_TASK = _tasks["default"].fromPromise(function (_ref3) {
  var provider = _ref3.provider,
      payload = _ref3.payload;
  return provider.uploadMap(payload);
}, 'EXPORT_FILE_TO_CLOUD_TASK');

exports.EXPORT_FILE_TO_CLOUD_TASK = EXPORT_FILE_TO_CLOUD_TASK;

var LOAD_CLOUD_MAP_TASK = _tasks["default"].fromPromise(function (_ref4) {
  var provider = _ref4.provider,
      payload = _ref4.payload;
  return provider.downloadMap(payload);
}, 'LOAD_CLOUD_MAP_TASK');

exports.LOAD_CLOUD_MAP_TASK = LOAD_CLOUD_MAP_TASK;

var GET_SAVED_MAPS_TASK = _tasks["default"].fromPromise(function (provider) {
  return provider.listMaps();
}, 'GET_SAVED_MAPS_TASK');
/**
 *  task to dispatch a function as a task
 */


exports.GET_SAVED_MAPS_TASK = GET_SAVED_MAPS_TASK;

var ACTION_TASK = _tasks["default"].fromCallback(function (_, cb) {
  return cb();
}, 'ACTION_TASK');

exports.ACTION_TASK = ACTION_TASK;

var DELAY_TASK = _tasks["default"].fromCallback(function (delay, cb) {
  return window.setTimeout(function () {
    return cb();
  }, delay);
}, 'DELAY_TASK');

exports.DELAY_TASK = DELAY_TASK;

var UNWRAP_TASK = _tasks["default"].fromPromise(function (promise) {
  return promise;
}, 'UNWRAP');

exports.UNWRAP_TASK = UNWRAP_TASK;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrcy9zcmMvaW5kZXgudHMiXSwibmFtZXMiOlsiTE9BRF9GSUxFX1RBU0siLCJUYXNrIiwiZnJvbVByb21pc2UiLCJmaWxlIiwiZmlsZUNhY2hlIiwibG9hZGVycyIsImxvYWRPcHRpb25zIiwiUFJPQ0VTU19GSUxFX0RBVEEiLCJwcm9jZXNzRmlsZURhdGEiLCJMT0FEX01BUF9TVFlMRV9UQVNLIiwic3VjY2VzcyIsImVycm9yIiwidXJsIiwiaWQiLCJlcnIiLCJyZXN1bHQiLCJFcnJvciIsInN0eWxlIiwiRVhQT1JUX0ZJTEVfVE9fQ0xPVURfVEFTSyIsInByb3ZpZGVyIiwicGF5bG9hZCIsInVwbG9hZE1hcCIsIkxPQURfQ0xPVURfTUFQX1RBU0siLCJkb3dubG9hZE1hcCIsIkdFVF9TQVZFRF9NQVBTX1RBU0siLCJsaXN0TWFwcyIsIkFDVElPTl9UQVNLIiwiZnJvbUNhbGxiYWNrIiwiXyIsImNiIiwiREVMQVlfVEFTSyIsImRlbGF5Iiwid2luZG93Iiwic2V0VGltZW91dCIsIlVOV1JBUF9UQVNLIiwicHJvbWlzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQXRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1PLElBQU1BLGNBQWMsR0FBR0Msa0JBQUtDLFdBQUwsQ0FDNUI7QUFBQSxNQUFFQyxJQUFGLFFBQUVBLElBQUY7QUFBQSxNQUFRQyxTQUFSLFFBQVFBLFNBQVI7QUFBQSxNQUFtQkMsT0FBbkIsUUFBbUJBLE9BQW5CO0FBQUEsTUFBNEJDLFdBQTVCLFFBQTRCQSxXQUE1QjtBQUFBLFNBQ0UsbUNBQWtCO0FBQUNILElBQUFBLElBQUksRUFBSkEsSUFBRDtBQUFPQyxJQUFBQSxTQUFTLEVBQVRBLFNBQVA7QUFBa0JDLElBQUFBLE9BQU8sRUFBUEEsT0FBbEI7QUFBMkJDLElBQUFBLFdBQVcsRUFBWEE7QUFBM0IsR0FBbEIsQ0FERjtBQUFBLENBRDRCLEVBRzVCLGdCQUg0QixDQUF2Qjs7OztBQU1BLElBQU1DLGlCQUFpQixHQUFHTixrQkFBS0MsV0FBTCxDQUMvQk0sMkJBRCtCLEVBRy9CLHNCQUgrQixDQUExQjs7O0FBTUEsSUFBTUMsbUJBQW1CLEdBQUcsd0JBQ2pDLGlCQUFZQyxPQUFaLEVBQXFCQyxLQUFyQjtBQUFBLE1BQUVDLEdBQUYsU0FBRUEsR0FBRjtBQUFBLE1BQU9DLEVBQVAsU0FBT0EsRUFBUDtBQUFBLFNBQ0UscUJBQVlELEdBQVosRUFBaUIsVUFBQ0UsR0FBRCxFQUFNQyxNQUFOLEVBQWlCO0FBQ2hDLFFBQUlELEdBQUosRUFBUztBQUNQSCxNQUFBQSxLQUFLLENBQUNHLEdBQUQsQ0FBTDtBQUNELEtBRkQsTUFFTztBQUNMLFVBQUksQ0FBQ0MsTUFBTCxFQUFhO0FBQ1hKLFFBQUFBLEtBQUssQ0FBQyxJQUFJSyxLQUFKLENBQVUsNkJBQVYsQ0FBRCxDQUFMO0FBQ0Q7O0FBQ0ROLE1BQUFBLE9BQU8sQ0FBQztBQUFDRyxRQUFBQSxFQUFFLEVBQUZBLEVBQUQ7QUFBS0ksUUFBQUEsS0FBSyxFQUFFRjtBQUFaLE9BQUQsQ0FBUDtBQUNEO0FBQ0YsR0FURCxDQURGO0FBQUEsQ0FEaUMsRUFhakMscUJBYmlDLENBQTVCO0FBZ0JQO0FBQ0E7QUFDQTs7OztBQUNPLElBQU1HLHlCQUF5QixHQUFHakIsa0JBQUtDLFdBQUwsQ0FDdkM7QUFBQSxNQUFFaUIsUUFBRixTQUFFQSxRQUFGO0FBQUEsTUFBWUMsT0FBWixTQUFZQSxPQUFaO0FBQUEsU0FBeUJELFFBQVEsQ0FBQ0UsU0FBVCxDQUFtQkQsT0FBbkIsQ0FBekI7QUFBQSxDQUR1QyxFQUd2QywyQkFIdUMsQ0FBbEM7Ozs7QUFNQSxJQUFNRSxtQkFBbUIsR0FBR3JCLGtCQUFLQyxXQUFMLENBQ2pDO0FBQUEsTUFBRWlCLFFBQUYsU0FBRUEsUUFBRjtBQUFBLE1BQVlDLE9BQVosU0FBWUEsT0FBWjtBQUFBLFNBQXlCRCxRQUFRLENBQUNJLFdBQVQsQ0FBcUJILE9BQXJCLENBQXpCO0FBQUEsQ0FEaUMsRUFHakMscUJBSGlDLENBQTVCOzs7O0FBTUEsSUFBTUksbUJBQW1CLEdBQUd2QixrQkFBS0MsV0FBTCxDQUNqQyxVQUFBaUIsUUFBUTtBQUFBLFNBQUlBLFFBQVEsQ0FBQ00sUUFBVCxFQUFKO0FBQUEsQ0FEeUIsRUFHakMscUJBSGlDLENBQTVCO0FBS1A7QUFDQTtBQUNBOzs7OztBQUNPLElBQU1DLFdBQVcsR0FBR3pCLGtCQUFLMEIsWUFBTCxDQUN6QixVQUFDQyxDQUFELEVBQUlDLEVBQUo7QUFBQSxTQUFXQSxFQUFFLEVBQWI7QUFBQSxDQUR5QixFQUd6QixhQUh5QixDQUFwQjs7OztBQU1BLElBQU1DLFVBQVUsR0FBRzdCLGtCQUFLMEIsWUFBTCxDQUN4QixVQUFDSSxLQUFELEVBQVFGLEVBQVI7QUFBQSxTQUFlRyxNQUFNLENBQUNDLFVBQVAsQ0FBa0I7QUFBQSxXQUFNSixFQUFFLEVBQVI7QUFBQSxHQUFsQixFQUE4QkUsS0FBOUIsQ0FBZjtBQUFBLENBRHdCLEVBR3hCLFlBSHdCLENBQW5COzs7O0FBTUEsSUFBTUcsV0FBVyxHQUFHakMsa0JBQUtDLFdBQUwsQ0FDekIsVUFBQWlDLE9BQU87QUFBQSxTQUFJQSxPQUFKO0FBQUEsQ0FEa0IsRUFHekIsUUFIeUIsQ0FBcEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgVGFzaywge3Rhc2tDcmVhdG9yfSBmcm9tICdyZWFjdC1wYWxtL3Rhc2tzJztcbmltcG9ydCB7anNvbiBhcyByZXF1ZXN0SnNvbn0gZnJvbSAnZDMtcmVxdWVzdCc7XG5pbXBvcnQge3JlYWRGaWxlSW5CYXRjaGVzLCBwcm9jZXNzRmlsZURhdGF9IGZyb20gJ0BrZXBsZXIuZ2wvcHJvY2Vzc29ycyc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0ZJTEVfVEFTSyA9IFRhc2suZnJvbVByb21pc2UoXG4gICh7ZmlsZSwgZmlsZUNhY2hlLCBsb2FkZXJzLCBsb2FkT3B0aW9uc30pID0+XG4gICAgcmVhZEZpbGVJbkJhdGNoZXMoe2ZpbGUsIGZpbGVDYWNoZSwgbG9hZGVycywgbG9hZE9wdGlvbnN9KSxcbiAgJ0xPQURfRklMRV9UQVNLJ1xuKTtcblxuZXhwb3J0IGNvbnN0IFBST0NFU1NfRklMRV9EQVRBID0gVGFzay5mcm9tUHJvbWlzZShcbiAgcHJvY2Vzc0ZpbGVEYXRhLFxuXG4gICdQUk9DRVNTX0ZJTEVfQ09OVEVOVCdcbik7XG5cbmV4cG9ydCBjb25zdCBMT0FEX01BUF9TVFlMRV9UQVNLID0gdGFza0NyZWF0b3IoXG4gICh7dXJsLCBpZH0sIHN1Y2Nlc3MsIGVycm9yKSA9PlxuICAgIHJlcXVlc3RKc29uKHVybCwgKGVyciwgcmVzdWx0KSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGVycm9yKGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgIGVycm9yKG5ldyBFcnJvcignTWFwIHN0eWxlIHJlc3BvbnNlIGlzIGVtcHR5JykpO1xuICAgICAgICB9XG4gICAgICAgIHN1Y2Nlc3Moe2lkLCBzdHlsZTogcmVzdWx0fSk7XG4gICAgICB9XG4gICAgfSksXG5cbiAgJ0xPQURfTUFQX1NUWUxFX1RBU0snXG4pO1xuXG4vKipcbiAqIHRhc2sgdG8gdXBsb2FkIGZpbGUgdG8gY2xvdWQgcHJvdmlkZXJcbiAqL1xuZXhwb3J0IGNvbnN0IEVYUE9SVF9GSUxFX1RPX0NMT1VEX1RBU0sgPSBUYXNrLmZyb21Qcm9taXNlKFxuICAoe3Byb3ZpZGVyLCBwYXlsb2FkfSkgPT4gcHJvdmlkZXIudXBsb2FkTWFwKHBheWxvYWQpLFxuXG4gICdFWFBPUlRfRklMRV9UT19DTE9VRF9UQVNLJ1xuKTtcblxuZXhwb3J0IGNvbnN0IExPQURfQ0xPVURfTUFQX1RBU0sgPSBUYXNrLmZyb21Qcm9taXNlKFxuICAoe3Byb3ZpZGVyLCBwYXlsb2FkfSkgPT4gcHJvdmlkZXIuZG93bmxvYWRNYXAocGF5bG9hZCksXG5cbiAgJ0xPQURfQ0xPVURfTUFQX1RBU0snXG4pO1xuXG5leHBvcnQgY29uc3QgR0VUX1NBVkVEX01BUFNfVEFTSyA9IFRhc2suZnJvbVByb21pc2UoXG4gIHByb3ZpZGVyID0+IHByb3ZpZGVyLmxpc3RNYXBzKCksXG5cbiAgJ0dFVF9TQVZFRF9NQVBTX1RBU0snXG4pO1xuLyoqXG4gKiAgdGFzayB0byBkaXNwYXRjaCBhIGZ1bmN0aW9uIGFzIGEgdGFza1xuICovXG5leHBvcnQgY29uc3QgQUNUSU9OX1RBU0sgPSBUYXNrLmZyb21DYWxsYmFjayhcbiAgKF8sIGNiKSA9PiBjYigpLFxuXG4gICdBQ1RJT05fVEFTSydcbik7XG5cbmV4cG9ydCBjb25zdCBERUxBWV9UQVNLID0gVGFzay5mcm9tQ2FsbGJhY2soXG4gIChkZWxheSwgY2IpID0+IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGNiKCksIGRlbGF5KSxcblxuICAnREVMQVlfVEFTSydcbik7XG5cbmV4cG9ydCBjb25zdCBVTldSQVBfVEFTSyA9IFRhc2suZnJvbVByb21pc2UoXG4gIHByb21pc2UgPT4gcHJvbWlzZSxcblxuICAnVU5XUkFQJ1xuKTtcbiJdfQ==