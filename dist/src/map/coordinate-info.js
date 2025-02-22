"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _utils = require("@kepler.gl/utils");

var _icons = require("../common/icons");

var _layerHoverInfo = require("./layer-hover-info");

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
// 6th decimal is worth up to 0.11 m
// https://gis.stackexchange.com/questions/8650/measuring-accuracy-of-latitude-and-longitude
var DECIMAL = 6;
var DECIMAL_Z = 1;

var CoordinateInfoFactory = function CoordinateInfoFactory() {
  var CoordinateInfo = function CoordinateInfo(_ref) {
    var coordinate = _ref.coordinate,
        zoom = _ref.zoom;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "coordingate-hover-info"
    }, /*#__PURE__*/_react["default"].createElement(_layerHoverInfo.StyledLayerName, {
      className: "map-popover__layer-name"
    }, /*#__PURE__*/_react["default"].createElement(_icons.CursorClick, {
      height: "12px"
    }), "Coordinate"), /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement("tr", {
      className: "row"
    }, /*#__PURE__*/_react["default"].createElement("td", {
      className: "row__value"
    }, (0, _utils.preciseRound)(coordinate[1], DECIMAL), ","), /*#__PURE__*/_react["default"].createElement("td", {
      className: "row__value"
    }, (0, _utils.preciseRound)(coordinate[0], DECIMAL), ","), /*#__PURE__*/_react["default"].createElement("td", {
      className: "row__value"
    }, (0, _utils.preciseRound)(zoom, DECIMAL_Z), "z")))));
  };

  return CoordinateInfo;
};

var _default = CoordinateInfoFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tYXAvY29vcmRpbmF0ZS1pbmZvLnRzeCJdLCJuYW1lcyI6WyJERUNJTUFMIiwiREVDSU1BTF9aIiwiQ29vcmRpbmF0ZUluZm9GYWN0b3J5IiwiQ29vcmRpbmF0ZUluZm8iLCJjb29yZGluYXRlIiwiem9vbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQXZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQSxJQUFNQSxPQUFPLEdBQUcsQ0FBaEI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsQ0FBbEI7O0FBT0EsSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixHQUFNO0FBQ2xDLE1BQU1DLGNBQTZDLEdBQUcsU0FBaERBLGNBQWdEO0FBQUEsUUFBRUMsVUFBRixRQUFFQSxVQUFGO0FBQUEsUUFBY0MsSUFBZCxRQUFjQSxJQUFkO0FBQUEsd0JBQ3BEO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRSxnQ0FBQywrQkFBRDtBQUFpQixNQUFBLFNBQVMsRUFBQztBQUEzQixvQkFDRSxnQ0FBQyxrQkFBRDtBQUFhLE1BQUEsTUFBTSxFQUFDO0FBQXBCLE1BREYsZUFERixlQUtFLDREQUNFLDREQUNFO0FBQUksTUFBQSxTQUFTLEVBQUM7QUFBZCxvQkFDRTtBQUFJLE1BQUEsU0FBUyxFQUFDO0FBQWQsT0FBNEIseUJBQWFELFVBQVUsQ0FBQyxDQUFELENBQXZCLEVBQTRCSixPQUE1QixDQUE1QixNQURGLGVBRUU7QUFBSSxNQUFBLFNBQVMsRUFBQztBQUFkLE9BQTRCLHlCQUFhSSxVQUFVLENBQUMsQ0FBRCxDQUF2QixFQUE0QkosT0FBNUIsQ0FBNUIsTUFGRixlQUdFO0FBQUksTUFBQSxTQUFTLEVBQUM7QUFBZCxPQUE0Qix5QkFBYUssSUFBYixFQUFtQkosU0FBbkIsQ0FBNUIsTUFIRixDQURGLENBREYsQ0FMRixDQURvRDtBQUFBLEdBQXREOztBQWtCQSxTQUFPRSxjQUFQO0FBQ0QsQ0FwQkQ7O2VBc0JlRCxxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3ByZWNpc2VSb3VuZH0gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5pbXBvcnQge0N1cnNvckNsaWNrfSBmcm9tICcuLi9jb21tb24vaWNvbnMnO1xuaW1wb3J0IHtTdHlsZWRMYXllck5hbWV9IGZyb20gJy4vbGF5ZXItaG92ZXItaW5mbyc7XG5cbi8vIDZ0aCBkZWNpbWFsIGlzIHdvcnRoIHVwIHRvIDAuMTEgbVxuLy8gaHR0cHM6Ly9naXMuc3RhY2tleGNoYW5nZS5jb20vcXVlc3Rpb25zLzg2NTAvbWVhc3VyaW5nLWFjY3VyYWN5LW9mLWxhdGl0dWRlLWFuZC1sb25naXR1ZGVcbmNvbnN0IERFQ0lNQUwgPSA2O1xuY29uc3QgREVDSU1BTF9aID0gMTtcblxuZXhwb3J0IGludGVyZmFjZSBDb29yZGluYXRlSW5mb1Byb3BzIHtcbiAgY29vcmRpbmF0ZTogbnVtYmVyW107XG4gIHpvb206IG51bWJlcjtcbn1cblxuY29uc3QgQ29vcmRpbmF0ZUluZm9GYWN0b3J5ID0gKCkgPT4ge1xuICBjb25zdCBDb29yZGluYXRlSW5mbzogUmVhY3QuRkM8Q29vcmRpbmF0ZUluZm9Qcm9wcz4gPSAoe2Nvb3JkaW5hdGUsIHpvb219KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb29yZGluZ2F0ZS1ob3Zlci1pbmZvXCI+XG4gICAgICA8U3R5bGVkTGF5ZXJOYW1lIGNsYXNzTmFtZT1cIm1hcC1wb3BvdmVyX19sYXllci1uYW1lXCI+XG4gICAgICAgIDxDdXJzb3JDbGljayBoZWlnaHQ9XCIxMnB4XCIgLz5cbiAgICAgICAgQ29vcmRpbmF0ZVxuICAgICAgPC9TdHlsZWRMYXllck5hbWU+XG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicm93X192YWx1ZVwiPntwcmVjaXNlUm91bmQoY29vcmRpbmF0ZVsxXSwgREVDSU1BTCl9LDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicm93X192YWx1ZVwiPntwcmVjaXNlUm91bmQoY29vcmRpbmF0ZVswXSwgREVDSU1BTCl9LDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicm93X192YWx1ZVwiPntwcmVjaXNlUm91bmQoem9vbSwgREVDSU1BTF9aKX16PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICByZXR1cm4gQ29vcmRpbmF0ZUluZm87XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb29yZGluYXRlSW5mb0ZhY3Rvcnk7XG4iXX0=