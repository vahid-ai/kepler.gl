"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SingleSelectFilterFactory;

var _react = _interopRequireDefault(require("react"));

var _itemSelector = _interopRequireDefault(require("../common/item-selector/item-selector"));

var _styledComponents = require("../common/styled-components");

var _localization = require("@kepler.gl/localization");

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
function SingleSelectFilterFactory() {
  var SingleSelectFilter = function SingleSelectFilter(_ref) {
    var filter = _ref.filter,
        setFilter = _ref.setFilter;
    return /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'misc.valueEquals'
    })), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
      selectedItems: filter.value,
      placeholder: "placeholder.selectValue",
      options: filter.domain,
      multiSelect: false,
      searchable: false,
      displayOption: function displayOption(d) {
        return String(d);
      },
      getOptionValue: function getOptionValue(d) {
        return d;
      },
      onChange: setFilter,
      inputTheme: "secondary"
    }));
  };

  SingleSelectFilter.displayName = 'SingleSelectFilter';
  return SingleSelectFilter;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9maWx0ZXJzL3NpbmdsZS1zZWxlY3QtZmlsdGVyLnRzeCJdLCJuYW1lcyI6WyJTaW5nbGVTZWxlY3RGaWx0ZXJGYWN0b3J5IiwiU2luZ2xlU2VsZWN0RmlsdGVyIiwiZmlsdGVyIiwic2V0RmlsdGVyIiwidmFsdWUiLCJkb21haW4iLCJkIiwiU3RyaW5nIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUF2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRZSxTQUFTQSx5QkFBVCxHQUFxQztBQUNsRCxNQUFNQyxrQkFBcUQsR0FBRyxTQUF4REEsa0JBQXdEO0FBQUEsUUFBRUMsTUFBRixRQUFFQSxNQUFGO0FBQUEsUUFBVUMsU0FBVixRQUFVQSxTQUFWO0FBQUEsd0JBQzVELGdDQUFDLGtDQUFELHFCQUNFLGdDQUFDLDRCQUFELHFCQUNFLGdDQUFDLDhCQUFEO0FBQWtCLE1BQUEsRUFBRSxFQUFFO0FBQXRCLE1BREYsQ0FERixlQUlFLGdDQUFDLHdCQUFEO0FBQ0UsTUFBQSxhQUFhLEVBQUVELE1BQU0sQ0FBQ0UsS0FEeEI7QUFFRSxNQUFBLFdBQVcsRUFBQyx5QkFGZDtBQUdFLE1BQUEsT0FBTyxFQUFFRixNQUFNLENBQUNHLE1BSGxCO0FBSUUsTUFBQSxXQUFXLEVBQUUsS0FKZjtBQUtFLE1BQUEsVUFBVSxFQUFFLEtBTGQ7QUFNRSxNQUFBLGFBQWEsRUFBRSx1QkFBQUMsQ0FBQztBQUFBLGVBQUlDLE1BQU0sQ0FBQ0QsQ0FBRCxDQUFWO0FBQUEsT0FObEI7QUFPRSxNQUFBLGNBQWMsRUFBRSx3QkFBQUEsQ0FBQztBQUFBLGVBQUlBLENBQUo7QUFBQSxPQVBuQjtBQVFFLE1BQUEsUUFBUSxFQUFFSCxTQVJaO0FBU0UsTUFBQSxVQUFVLEVBQUM7QUFUYixNQUpGLENBRDREO0FBQUEsR0FBOUQ7O0FBbUJBRixFQUFBQSxrQkFBa0IsQ0FBQ08sV0FBbkIsR0FBaUMsb0JBQWpDO0FBRUEsU0FBT1Asa0JBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSXRlbVNlbGVjdG9yIGZyb20gJy4uL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2l0ZW0tc2VsZWN0b3InO1xuaW1wb3J0IHtQYW5lbExhYmVsLCBTaWRlUGFuZWxTZWN0aW9ufSBmcm9tICcuLi9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdAa2VwbGVyLmdsL2xvY2FsaXphdGlvbic7XG5pbXBvcnQge1NpbmdsZVNlbGVjdEZpbHRlclByb3BzfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2luZ2xlU2VsZWN0RmlsdGVyRmFjdG9yeSgpIHtcbiAgY29uc3QgU2luZ2xlU2VsZWN0RmlsdGVyOiBSZWFjdC5GQzxTaW5nbGVTZWxlY3RGaWx0ZXJQcm9wcz4gPSAoe2ZpbHRlciwgc2V0RmlsdGVyfSkgPT4gKFxuICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgPFBhbmVsTGFiZWw+XG4gICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbWlzYy52YWx1ZUVxdWFscyd9IC8+XG4gICAgICA8L1BhbmVsTGFiZWw+XG4gICAgICA8SXRlbVNlbGVjdG9yXG4gICAgICAgIHNlbGVjdGVkSXRlbXM9e2ZpbHRlci52YWx1ZX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlci5zZWxlY3RWYWx1ZVwiXG4gICAgICAgIG9wdGlvbnM9e2ZpbHRlci5kb21haW59XG4gICAgICAgIG11bHRpU2VsZWN0PXtmYWxzZX1cbiAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgIGRpc3BsYXlPcHRpb249e2QgPT4gU3RyaW5nKGQpfVxuICAgICAgICBnZXRPcHRpb25WYWx1ZT17ZCA9PiBkfVxuICAgICAgICBvbkNoYW5nZT17c2V0RmlsdGVyfVxuICAgICAgICBpbnB1dFRoZW1lPVwic2Vjb25kYXJ5XCJcbiAgICAgIC8+XG4gICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICApO1xuXG4gIFNpbmdsZVNlbGVjdEZpbHRlci5kaXNwbGF5TmFtZSA9ICdTaW5nbGVTZWxlY3RGaWx0ZXInO1xuXG4gIHJldHVybiBTaW5nbGVTZWxlY3RGaWx0ZXI7XG59XG4iXX0=