"use strict";

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
var KeplerPackage = require("./package");

var PRESETS = ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'];
var PLUGINS = [['@babel/plugin-transform-typescript', {
  isTSX: true,
  allowDeclareFields: true
}], '@babel/plugin-transform-modules-commonjs', '@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-export-namespace-from', '@babel/plugin-proposal-optional-chaining', ['@babel/transform-runtime', {
  regenerator: true
}], ['search-and-replace', {
  rules: [{
    search: "3.0.0-alpha.0",
    replace: KeplerPackage.version
  }]
}]];
var ENV = {
  test: {
    plugins: ['istanbul']
  },
  debug: {
    sourceMaps: 'inline',
    retainLines: true
  }
};

module.exports = function babel(api) {
  api.cache(true);
  return {
    presets: PRESETS,
    plugins: PLUGINS,
    env: ENV
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90YXNrcy9iYWJlbC5jb25maWcuanMiXSwibmFtZXMiOlsiS2VwbGVyUGFja2FnZSIsInJlcXVpcmUiLCJQUkVTRVRTIiwiUExVR0lOUyIsImlzVFNYIiwiYWxsb3dEZWNsYXJlRmllbGRzIiwicmVnZW5lcmF0b3IiLCJydWxlcyIsInNlYXJjaCIsInJlcGxhY2UiLCJ2ZXJzaW9uIiwiRU5WIiwidGVzdCIsInBsdWdpbnMiLCJkZWJ1ZyIsInNvdXJjZU1hcHMiLCJyZXRhaW5MaW5lcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJiYWJlbCIsImFwaSIsImNhY2hlIiwicHJlc2V0cyIsImVudiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MsT0FBTyxhQUE3Qjs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsQ0FBQyxtQkFBRCxFQUFzQixxQkFBdEIsRUFBNkMsMEJBQTdDLENBQWhCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHLENBQ2QsQ0FBQyxvQ0FBRCxFQUF1QztBQUFDQyxFQUFBQSxLQUFLLEVBQUUsSUFBUjtBQUFjQyxFQUFBQSxrQkFBa0IsRUFBRTtBQUFsQyxDQUF2QyxDQURjLEVBRWQsMENBRmMsRUFHZCx5Q0FIYyxFQUlkLDhDQUpjLEVBS2QsMENBTGMsRUFNZCxDQUNFLDBCQURGLEVBRUU7QUFDRUMsRUFBQUEsV0FBVyxFQUFFO0FBRGYsQ0FGRixDQU5jLEVBWWQsQ0FDRSxvQkFERixFQUVFO0FBQ0VDLEVBQUFBLEtBQUssRUFBRSxDQUNMO0FBQ0VDLElBQUFBLE1BQU0sRUFBRSxlQURWO0FBRUVDLElBQUFBLE9BQU8sRUFBRVQsYUFBYSxDQUFDVTtBQUZ6QixHQURLO0FBRFQsQ0FGRixDQVpjLENBQWhCO0FBd0JBLElBQU1DLEdBQUcsR0FBRztBQUNWQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsT0FBTyxFQUFFLENBQUMsVUFBRDtBQURMLEdBREk7QUFJVkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLFVBQVUsRUFBRSxRQURQO0FBRUxDLElBQUFBLFdBQVcsRUFBRTtBQUZSO0FBSkcsQ0FBWjs7QUFVQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLFNBQVNDLEtBQVQsQ0FBZUMsR0FBZixFQUFvQjtBQUNuQ0EsRUFBQUEsR0FBRyxDQUFDQyxLQUFKLENBQVUsSUFBVjtBQUVBLFNBQU87QUFDTEMsSUFBQUEsT0FBTyxFQUFFcEIsT0FESjtBQUVMVyxJQUFBQSxPQUFPLEVBQUVWLE9BRko7QUFHTG9CLElBQUFBLEdBQUcsRUFBRVo7QUFIQSxHQUFQO0FBS0QsQ0FSRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmNvbnN0IEtlcGxlclBhY2thZ2UgPSByZXF1aXJlKCcuL3BhY2thZ2UnKTtcblxuY29uc3QgUFJFU0VUUyA9IFsnQGJhYmVsL3ByZXNldC1lbnYnLCAnQGJhYmVsL3ByZXNldC1yZWFjdCcsICdAYmFiZWwvcHJlc2V0LXR5cGVzY3JpcHQnXTtcbmNvbnN0IFBMVUdJTlMgPSBbXG4gIFsnQGJhYmVsL3BsdWdpbi10cmFuc2Zvcm0tdHlwZXNjcmlwdCcsIHtpc1RTWDogdHJ1ZSwgYWxsb3dEZWNsYXJlRmllbGRzOiB0cnVlfV0sXG4gICdAYmFiZWwvcGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJyxcbiAgJ0BiYWJlbC9wbHVnaW4tcHJvcG9zYWwtY2xhc3MtcHJvcGVydGllcycsXG4gICdAYmFiZWwvcGx1Z2luLXByb3Bvc2FsLWV4cG9ydC1uYW1lc3BhY2UtZnJvbScsXG4gICdAYmFiZWwvcGx1Z2luLXByb3Bvc2FsLW9wdGlvbmFsLWNoYWluaW5nJyxcbiAgW1xuICAgICdAYmFiZWwvdHJhbnNmb3JtLXJ1bnRpbWUnLFxuICAgIHtcbiAgICAgIHJlZ2VuZXJhdG9yOiB0cnVlXG4gICAgfVxuICBdLFxuICBbXG4gICAgJ3NlYXJjaC1hbmQtcmVwbGFjZScsXG4gICAge1xuICAgICAgcnVsZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHNlYXJjaDogJ19fUEFDS0FHRV9WRVJTSU9OX18nLFxuICAgICAgICAgIHJlcGxhY2U6IEtlcGxlclBhY2thZ2UudmVyc2lvblxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG5dO1xuY29uc3QgRU5WID0ge1xuICB0ZXN0OiB7XG4gICAgcGx1Z2luczogWydpc3RhbmJ1bCddXG4gIH0sXG4gIGRlYnVnOiB7XG4gICAgc291cmNlTWFwczogJ2lubGluZScsXG4gICAgcmV0YWluTGluZXM6IHRydWVcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiYWJlbChhcGkpIHtcbiAgYXBpLmNhY2hlKHRydWUpO1xuXG4gIHJldHVybiB7XG4gICAgcHJlc2V0czogUFJFU0VUUyxcbiAgICBwbHVnaW5zOiBQTFVHSU5TLFxuICAgIGVudjogRU5WXG4gIH07XG59O1xuIl19