"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _localization = require("@kepler.gl/localization");

var _tippyTooltip = _interopRequireDefault(require("../common/tippy-tooltip"));

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
function MapControlTooltipFactory() {
  var MapControlTooltip = /*#__PURE__*/_react["default"].memo(function (_ref) {
    var id = _ref.id,
        message = _ref.message,
        children = _ref.children;
    return /*#__PURE__*/_react["default"].createElement(_tippyTooltip["default"], {
      placement: "left",
      render: function render() {
        return /*#__PURE__*/_react["default"].createElement("div", {
          id: id
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: message
        }));
      }
    }, children);
  });

  MapControlTooltip.displayName = 'MapControlTooltip';
  return MapControlTooltip;
}

var _default = MapControlTooltipFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tYXAvbWFwLWNvbnRyb2wtdG9vbHRpcC50c3giXSwibmFtZXMiOlsiTWFwQ29udHJvbFRvb2x0aXBGYWN0b3J5IiwiTWFwQ29udHJvbFRvb2x0aXAiLCJSZWFjdCIsIm1lbW8iLCJpZCIsIm1lc3NhZ2UiLCJjaGlsZHJlbiIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUEsU0FBU0Esd0JBQVQsR0FBb0M7QUFDbEMsTUFBTUMsaUJBQW1ELGdCQUFHQyxrQkFBTUMsSUFBTixDQUMxRDtBQUFBLFFBQUVDLEVBQUYsUUFBRUEsRUFBRjtBQUFBLFFBQU1DLE9BQU4sUUFBTUEsT0FBTjtBQUFBLFFBQWVDLFFBQWYsUUFBZUEsUUFBZjtBQUFBLHdCQUNFLGdDQUFDLHdCQUFEO0FBQ0UsTUFBQSxTQUFTLEVBQUMsTUFEWjtBQUVFLE1BQUEsTUFBTSxFQUFFO0FBQUEsNEJBQ047QUFBSyxVQUFBLEVBQUUsRUFBRUY7QUFBVCx3QkFDRSxnQ0FBQyw4QkFBRDtBQUFrQixVQUFBLEVBQUUsRUFBRUM7QUFBdEIsVUFERixDQURNO0FBQUE7QUFGVixPQVFHQyxRQVJILENBREY7QUFBQSxHQUQwRCxDQUE1RDs7QUFlQUwsRUFBQUEsaUJBQWlCLENBQUNNLFdBQWxCLEdBQWdDLG1CQUFoQztBQUVBLFNBQU9OLGlCQUFQO0FBQ0Q7O2VBRWNELHdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7UmVhY3RFbGVtZW50LCBKU1hFbGVtZW50Q29uc3RydWN0b3J9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnQGtlcGxlci5nbC9sb2NhbGl6YXRpb24nO1xuaW1wb3J0IFRpcHB5VG9vbHRpcCBmcm9tICcuLi9jb21tb24vdGlwcHktdG9vbHRpcCc7XG5cbmV4cG9ydCB0eXBlIE1hcENvbnRyb2xUb29sdGlwUHJvcHMgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgY2hpbGRyZW4/OiBSZWFjdEVsZW1lbnQ8YW55LCBzdHJpbmcgfCBKU1hFbGVtZW50Q29uc3RydWN0b3I8YW55Pj47XG59O1xuXG5mdW5jdGlvbiBNYXBDb250cm9sVG9vbHRpcEZhY3RvcnkoKSB7XG4gIGNvbnN0IE1hcENvbnRyb2xUb29sdGlwOiBSZWFjdC5GQzxNYXBDb250cm9sVG9vbHRpcFByb3BzPiA9IFJlYWN0Lm1lbW8oXG4gICAgKHtpZCwgbWVzc2FnZSwgY2hpbGRyZW59KSA9PiAoXG4gICAgICA8VGlwcHlUb29sdGlwXG4gICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxuICAgICAgICByZW5kZXI9eygpID0+IChcbiAgICAgICAgICA8ZGl2IGlkPXtpZH0+XG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17bWVzc2FnZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgID5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9UaXBweVRvb2x0aXA+XG4gICAgKVxuICApO1xuXG4gIE1hcENvbnRyb2xUb29sdGlwLmRpc3BsYXlOYW1lID0gJ01hcENvbnRyb2xUb29sdGlwJztcblxuICByZXR1cm4gTWFwQ29udHJvbFRvb2x0aXA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcENvbnRyb2xUb29sdGlwRmFjdG9yeTtcbiJdfQ==