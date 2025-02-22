"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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
// This is a dummy component that can be replaced to inject more side panel sub panels into the side bar
function CustomPanelsFactory() {
  var CustomPanels = function CustomPanels(props) {
    return /*#__PURE__*/_react["default"].createElement("div", null);
  };

  CustomPanels.defaultProps = {
    // provide a list of additional panels
    panels: [// {
      //   id: 'rocket',
      //   label: 'Rocket',
      //   iconComponent: Icons.Rocket
      // },
      // {
      //   id: 'chart',
      //   label: 'Chart',
      //   iconComponent: Icons.LineChart
      // }
    ],
    // prop selector from side panel props
    getProps: function getProps(sidePanelProps) {
      return {};
    }
  };
  return CustomPanels;
}

var _default = CustomPanelsFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2N1c3RvbS1wYW5lbC50c3giXSwibmFtZXMiOlsiQ3VzdG9tUGFuZWxzRmFjdG9yeSIsIkN1c3RvbVBhbmVscyIsInByb3BzIiwiZGVmYXVsdFByb3BzIiwicGFuZWxzIiwiZ2V0UHJvcHMiLCJzaWRlUGFuZWxQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0JBOztBQXBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0EsU0FBU0EsbUJBQVQsR0FBa0M7QUFDaEMsTUFBTUMsWUFBNEMsR0FBRyxTQUEvQ0EsWUFBK0MsQ0FBQUMsS0FBSyxFQUFJO0FBQzVELHdCQUFPLDRDQUFQO0FBQ0QsR0FGRDs7QUFJQUQsRUFBQUEsWUFBWSxDQUFDRSxZQUFiLEdBQTRCO0FBQzFCO0FBQ0FDLElBQUFBLE1BQU0sRUFBRSxDQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVk0sS0FGa0I7QUFjMUI7QUFDQUMsSUFBQUEsUUFBUSxFQUFFLGtCQUFDQyxjQUFEO0FBQUEsYUFBb0MsRUFBcEM7QUFBQTtBQWZnQixHQUE1QjtBQWtCQSxTQUFPTCxZQUFQO0FBQ0Q7O2VBRWNELG1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U2lkZVBhbmVsSXRlbX0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgdHlwZSBDdXN0b21QYW5lbHNQcm9wczxQPiA9IHtcbiAgcGFuZWxzOiBTaWRlUGFuZWxJdGVtW107XG4gIGdldFByb3BzPzogKHByb3BzOiBTaWRlUGFuZWxJdGVtKSA9PiBQO1xufTtcblxuLy8gVGhpcyBpcyBhIGR1bW15IGNvbXBvbmVudCB0aGF0IGNhbiBiZSByZXBsYWNlZCB0byBpbmplY3QgbW9yZSBzaWRlIHBhbmVsIHN1YiBwYW5lbHMgaW50byB0aGUgc2lkZSBiYXJcbmZ1bmN0aW9uIEN1c3RvbVBhbmVsc0ZhY3Rvcnk8UD4oKSB7XG4gIGNvbnN0IEN1c3RvbVBhbmVsczogUmVhY3QuRkM8Q3VzdG9tUGFuZWxzUHJvcHM8UD4+ID0gcHJvcHMgPT4ge1xuICAgIHJldHVybiA8ZGl2IC8+O1xuICB9O1xuXG4gIEN1c3RvbVBhbmVscy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgLy8gcHJvdmlkZSBhIGxpc3Qgb2YgYWRkaXRpb25hbCBwYW5lbHNcbiAgICBwYW5lbHM6IFtcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgaWQ6ICdyb2NrZXQnLFxuICAgICAgLy8gICBsYWJlbDogJ1JvY2tldCcsXG4gICAgICAvLyAgIGljb25Db21wb25lbnQ6IEljb25zLlJvY2tldFxuICAgICAgLy8gfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgaWQ6ICdjaGFydCcsXG4gICAgICAvLyAgIGxhYmVsOiAnQ2hhcnQnLFxuICAgICAgLy8gICBpY29uQ29tcG9uZW50OiBJY29ucy5MaW5lQ2hhcnRcbiAgICAgIC8vIH1cbiAgICBdLFxuICAgIC8vIHByb3Agc2VsZWN0b3IgZnJvbSBzaWRlIHBhbmVsIHByb3BzXG4gICAgZ2V0UHJvcHM6IChzaWRlUGFuZWxQcm9wczogU2lkZVBhbmVsSXRlbSkgPT4gKHt9IGFzIFApXG4gIH07XG5cbiAgcmV0dXJuIEN1c3RvbVBhbmVscztcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tUGFuZWxzRmFjdG9yeTtcbiJdfQ==