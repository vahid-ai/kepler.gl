"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _rangeFilter = _interopRequireDefault(require("../range-filter"));

var _filterPanelWithFieldSelect = _interopRequireDefault(require("./filter-panel-with-field-select"));

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
RangeFilterPanelFactory.deps = [_filterPanelWithFieldSelect["default"], _rangeFilter["default"]];

function RangeFilterPanelFactory(FieldPanelWithFieldSelect, RangeFilterComponent) {
  var RangeFilterPanel = /*#__PURE__*/_react["default"].memo(function (_ref) {
    var idx = _ref.idx,
        datasets = _ref.datasets,
        allAvailableFields = _ref.allAvailableFields,
        filter = _ref.filter,
        removeFilter = _ref.removeFilter,
        setFilter = _ref.setFilter;
    var onSetFilter = (0, _react.useCallback)(function (value) {
      return setFilter(idx, 'value', value);
    }, [idx, setFilter]);
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "range-filter-panel"
    }, /*#__PURE__*/_react["default"].createElement(FieldPanelWithFieldSelect, {
      allAvailableFields: allAvailableFields,
      datasets: datasets,
      filter: filter,
      idx: idx,
      removeFilter: removeFilter,
      setFilter: setFilter
    }, filter.type && /*#__PURE__*/_react["default"].createElement("div", {
      className: "filter-panel__filter"
    }, /*#__PURE__*/_react["default"].createElement(RangeFilterComponent, {
      filter: filter,
      setFilter: onSetFilter
    }))));
  });

  RangeFilterPanel.displayName = 'RangeFilterPanel';
  return RangeFilterPanel;
}

var _default = RangeFilterPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9maWx0ZXJzL2ZpbHRlci1wYW5lbHMvcmFuZ2UtZmlsdGVyLXBhbmVsLnRzeCJdLCJuYW1lcyI6WyJSYW5nZUZpbHRlclBhbmVsRmFjdG9yeSIsImRlcHMiLCJGaWVsZFBhbmVsV2l0aEZpZWxkU2VsZWN0RmFjdG9yeSIsIlJhbmdlRmlsdGVyRmFjdG9yeSIsIkZpZWxkUGFuZWxXaXRoRmllbGRTZWxlY3QiLCJSYW5nZUZpbHRlckNvbXBvbmVudCIsIlJhbmdlRmlsdGVyUGFuZWwiLCJSZWFjdCIsIm1lbW8iLCJpZHgiLCJkYXRhc2V0cyIsImFsbEF2YWlsYWJsZUZpZWxkcyIsImZpbHRlciIsInJlbW92ZUZpbHRlciIsInNldEZpbHRlciIsIm9uU2V0RmlsdGVyIiwidmFsdWUiLCJ0eXBlIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUVBOztBQXZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBQSx1QkFBdUIsQ0FBQ0MsSUFBeEIsR0FBK0IsQ0FBQ0Msc0NBQUQsRUFBbUNDLHVCQUFuQyxDQUEvQjs7QUFFQSxTQUFTSCx1QkFBVCxDQUNFSSx5QkFERixFQUVFQyxvQkFGRixFQUdFO0FBQ0EsTUFBTUMsZ0JBQW1ELGdCQUFHQyxrQkFBTUMsSUFBTixDQUMxRCxnQkFBMEU7QUFBQSxRQUF4RUMsR0FBd0UsUUFBeEVBLEdBQXdFO0FBQUEsUUFBbkVDLFFBQW1FLFFBQW5FQSxRQUFtRTtBQUFBLFFBQXpEQyxrQkFBeUQsUUFBekRBLGtCQUF5RDtBQUFBLFFBQXJDQyxNQUFxQyxRQUFyQ0EsTUFBcUM7QUFBQSxRQUE3QkMsWUFBNkIsUUFBN0JBLFlBQTZCO0FBQUEsUUFBZkMsU0FBZSxRQUFmQSxTQUFlO0FBQ3hFLFFBQU1DLFdBQVcsR0FBRyx3QkFBWSxVQUFBQyxLQUFLO0FBQUEsYUFBSUYsU0FBUyxDQUFDTCxHQUFELEVBQU0sT0FBTixFQUFlTyxLQUFmLENBQWI7QUFBQSxLQUFqQixFQUFxRCxDQUFDUCxHQUFELEVBQU1LLFNBQU4sQ0FBckQsQ0FBcEI7QUFFQSx3QkFDRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0UsZ0NBQUMseUJBQUQ7QUFDRSxNQUFBLGtCQUFrQixFQUFFSCxrQkFEdEI7QUFFRSxNQUFBLFFBQVEsRUFBRUQsUUFGWjtBQUdFLE1BQUEsTUFBTSxFQUFFRSxNQUhWO0FBSUUsTUFBQSxHQUFHLEVBQUVILEdBSlA7QUFLRSxNQUFBLFlBQVksRUFBRUksWUFMaEI7QUFNRSxNQUFBLFNBQVMsRUFBRUM7QUFOYixPQVFHRixNQUFNLENBQUNLLElBQVAsaUJBQ0M7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLG9CQUNFLGdDQUFDLG9CQUFEO0FBQXNCLE1BQUEsTUFBTSxFQUFFTCxNQUE5QjtBQUFzQyxNQUFBLFNBQVMsRUFBRUc7QUFBakQsTUFERixDQVRKLENBREYsQ0FERjtBQWtCRCxHQXRCeUQsQ0FBNUQ7O0FBeUJBVCxFQUFBQSxnQkFBZ0IsQ0FBQ1ksV0FBakIsR0FBK0Isa0JBQS9CO0FBRUEsU0FBT1osZ0JBQVA7QUFDRDs7ZUFFY04sdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJhbmdlRmlsdGVyRmFjdG9yeSBmcm9tICcuLi9yYW5nZS1maWx0ZXInO1xuaW1wb3J0IHtSYW5nZUZpbHRlcn0gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5pbXBvcnQgRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdEZhY3RvcnkgZnJvbSAnLi9maWx0ZXItcGFuZWwtd2l0aC1maWVsZC1zZWxlY3QnO1xuaW1wb3J0IHtGaWx0ZXJQYW5lbENvbXBvbmVudH0gZnJvbSAnLi90eXBlcyc7XG5cblJhbmdlRmlsdGVyUGFuZWxGYWN0b3J5LmRlcHMgPSBbRmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdEZhY3RvcnksIFJhbmdlRmlsdGVyRmFjdG9yeV07XG5cbmZ1bmN0aW9uIFJhbmdlRmlsdGVyUGFuZWxGYWN0b3J5KFxuICBGaWVsZFBhbmVsV2l0aEZpZWxkU2VsZWN0OiBSZXR1cm5UeXBlPHR5cGVvZiBGaWVsZFBhbmVsV2l0aEZpZWxkU2VsZWN0RmFjdG9yeT4sXG4gIFJhbmdlRmlsdGVyQ29tcG9uZW50OiBSZXR1cm5UeXBlPHR5cGVvZiBSYW5nZUZpbHRlckZhY3Rvcnk+XG4pIHtcbiAgY29uc3QgUmFuZ2VGaWx0ZXJQYW5lbDogRmlsdGVyUGFuZWxDb21wb25lbnQ8UmFuZ2VGaWx0ZXI+ID0gUmVhY3QubWVtbyhcbiAgICAoe2lkeCwgZGF0YXNldHMsIGFsbEF2YWlsYWJsZUZpZWxkcywgZmlsdGVyLCByZW1vdmVGaWx0ZXIsIHNldEZpbHRlcn0pID0+IHtcbiAgICAgIGNvbnN0IG9uU2V0RmlsdGVyID0gdXNlQ2FsbGJhY2sodmFsdWUgPT4gc2V0RmlsdGVyKGlkeCwgJ3ZhbHVlJywgdmFsdWUpLCBbaWR4LCBzZXRGaWx0ZXJdKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYW5nZS1maWx0ZXItcGFuZWxcIj5cbiAgICAgICAgICA8RmllbGRQYW5lbFdpdGhGaWVsZFNlbGVjdFxuICAgICAgICAgICAgYWxsQXZhaWxhYmxlRmllbGRzPXthbGxBdmFpbGFibGVGaWVsZHN9XG4gICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcn1cbiAgICAgICAgICAgIGlkeD17aWR4fVxuICAgICAgICAgICAgcmVtb3ZlRmlsdGVyPXtyZW1vdmVGaWx0ZXJ9XG4gICAgICAgICAgICBzZXRGaWx0ZXI9e3NldEZpbHRlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZmlsdGVyLnR5cGUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1wYW5lbF9fZmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgPFJhbmdlRmlsdGVyQ29tcG9uZW50IGZpbHRlcj17ZmlsdGVyfSBzZXRGaWx0ZXI9e29uU2V0RmlsdGVyfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9GaWVsZFBhbmVsV2l0aEZpZWxkU2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICApO1xuXG4gIFJhbmdlRmlsdGVyUGFuZWwuZGlzcGxheU5hbWUgPSAnUmFuZ2VGaWx0ZXJQYW5lbCc7XG5cbiAgcmV0dXJuIFJhbmdlRmlsdGVyUGFuZWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmdlRmlsdGVyUGFuZWxGYWN0b3J5O1xuIl19