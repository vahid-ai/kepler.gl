"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("../../common/styled-components");

var _polygonFilter = _interopRequireDefault(require("../polygon-filter"));

var _panelHeaderAction = _interopRequireDefault(require("../../side-panel/panel-header-action"));

var _icons = require("../../common/icons");

var _filterPanelHeader = _interopRequireDefault(require("../../side-panel/filter-panel/filter-panel-header"));

var _components = require("../components");

var _lodash = _interopRequireDefault(require("lodash.get"));

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
PolygonFilterPanelFactory.deps = [_filterPanelHeader["default"], _polygonFilter["default"], _panelHeaderAction["default"]];

function PolygonFilterPanelFactory(FilterPanelHeader, PolygonFilter, PanelHeaderAction) {
  var PolygonFilterPanel = /*#__PURE__*/_react["default"].memo(function (_ref) {
    var idx = _ref.idx,
        datasets = _ref.datasets,
        layers = _ref.layers,
        filter = _ref.filter,
        removeFilter = _ref.removeFilter,
        setFilter = _ref.setFilter,
        toggleFilterFeature = _ref.toggleFilterFeature;
    var filterDatasets = (0, _react.useMemo)(function () {
      return filter.dataId.map(function (d) {
        return datasets[d];
      });
    }, [filter, datasets]);
    var onSetLayers = (0, _react.useCallback)(function (value) {
      return setFilter(idx, 'layerId', value);
    }, [setFilter, idx]);
    var isVisible = (0, _lodash["default"])(filter, ['value', 'properties', 'isVisible'], true);
    var featureType = (0, _lodash["default"])(filter, ['value', 'geometry', 'type'], 'Polygon');
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "polygon-filter-panel"
    }, /*#__PURE__*/_react["default"].createElement(FilterPanelHeader, {
      datasets: filterDatasets,
      filter: filter,
      removeFilter: removeFilter
    }, /*#__PURE__*/_react["default"].createElement(_components.StyledFilterPanel, null, "Geo - ", featureType), /*#__PURE__*/_react["default"].createElement(PanelHeaderAction, {
      id: filter.id,
      onClick: toggleFilterFeature,
      tooltip: isVisible ? 'tooltip.hideFeature' : 'tooltip.showFeature',
      IconComponent: isVisible ? _icons.EyeSeen : _icons.EyeUnseen,
      active: isVisible
    })), /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledFilterContent, {
      className: "filter-panel__content"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "filter-panel__filter"
    }, /*#__PURE__*/_react["default"].createElement(PolygonFilter, {
      filter: filter,
      layers: layers,
      setLayers: onSetLayers
    }))));
  });

  PolygonFilterPanel.displayName = 'PolygonFilterPanel';
  return PolygonFilterPanel;
}

var _default = PolygonFilterPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9maWx0ZXJzL2ZpbHRlci1wYW5lbHMvcG9seWdvbi1maWx0ZXItcGFuZWwudHN4Il0sIm5hbWVzIjpbIlBvbHlnb25GaWx0ZXJQYW5lbEZhY3RvcnkiLCJkZXBzIiwiRmlsdGVyUGFuZWxIZWFkZXJGYWN0b3J5IiwiUG9seWdvbkZpbHRlckZhY3RvcnkiLCJQYW5lbEhlYWRlckFjdGlvbkZhY3RvcnkiLCJGaWx0ZXJQYW5lbEhlYWRlciIsIlBvbHlnb25GaWx0ZXIiLCJQYW5lbEhlYWRlckFjdGlvbiIsIlBvbHlnb25GaWx0ZXJQYW5lbCIsIlJlYWN0IiwibWVtbyIsImlkeCIsImRhdGFzZXRzIiwibGF5ZXJzIiwiZmlsdGVyIiwicmVtb3ZlRmlsdGVyIiwic2V0RmlsdGVyIiwidG9nZ2xlRmlsdGVyRmVhdHVyZSIsImZpbHRlckRhdGFzZXRzIiwiZGF0YUlkIiwibWFwIiwiZCIsIm9uU2V0TGF5ZXJzIiwidmFsdWUiLCJpc1Zpc2libGUiLCJmZWF0dXJlVHlwZSIsImlkIiwiRXllU2VlbiIsIkV5ZVVuc2VlbiIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUE3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFlQUEseUJBQXlCLENBQUNDLElBQTFCLEdBQWlDLENBQy9CQyw2QkFEK0IsRUFFL0JDLHlCQUYrQixFQUcvQkMsNkJBSCtCLENBQWpDOztBQU1BLFNBQVNKLHlCQUFULENBQ0VLLGlCQURGLEVBRUVDLGFBRkYsRUFHRUMsaUJBSEYsRUFJRTtBQUNBLE1BQU1DLGtCQUErQyxnQkFBR0Msa0JBQU1DLElBQU4sQ0FDdEQsZ0JBQW1GO0FBQUEsUUFBakZDLEdBQWlGLFFBQWpGQSxHQUFpRjtBQUFBLFFBQTVFQyxRQUE0RSxRQUE1RUEsUUFBNEU7QUFBQSxRQUFsRUMsTUFBa0UsUUFBbEVBLE1BQWtFO0FBQUEsUUFBMURDLE1BQTBELFFBQTFEQSxNQUEwRDtBQUFBLFFBQWxEQyxZQUFrRCxRQUFsREEsWUFBa0Q7QUFBQSxRQUFwQ0MsU0FBb0MsUUFBcENBLFNBQW9DO0FBQUEsUUFBekJDLG1CQUF5QixRQUF6QkEsbUJBQXlCO0FBQ2pGLFFBQU1DLGNBQTZCLEdBQUcsb0JBQVE7QUFBQSxhQUFNSixNQUFNLENBQUNLLE1BQVAsQ0FBY0MsR0FBZCxDQUFrQixVQUFBQyxDQUFDO0FBQUEsZUFBSVQsUUFBUSxDQUFDUyxDQUFELENBQVo7QUFBQSxPQUFuQixDQUFOO0FBQUEsS0FBUixFQUFtRCxDQUN2RlAsTUFEdUYsRUFFdkZGLFFBRnVGLENBQW5ELENBQXRDO0FBS0EsUUFBTVUsV0FBVyxHQUFHLHdCQUFZLFVBQUFDLEtBQUs7QUFBQSxhQUFJUCxTQUFTLENBQUNMLEdBQUQsRUFBTSxTQUFOLEVBQWlCWSxLQUFqQixDQUFiO0FBQUEsS0FBakIsRUFBdUQsQ0FBQ1AsU0FBRCxFQUFZTCxHQUFaLENBQXZELENBQXBCO0FBRUEsUUFBTWEsU0FBUyxHQUFHLHdCQUFJVixNQUFKLEVBQVksQ0FBQyxPQUFELEVBQVUsWUFBVixFQUF3QixXQUF4QixDQUFaLEVBQWtELElBQWxELENBQWxCO0FBQ0EsUUFBTVcsV0FBVyxHQUFHLHdCQUFJWCxNQUFKLEVBQVksQ0FBQyxPQUFELEVBQVUsVUFBVixFQUFzQixNQUF0QixDQUFaLEVBQTJDLFNBQTNDLENBQXBCO0FBRUEsd0JBQ0U7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLG9CQUNFLGdDQUFDLGlCQUFEO0FBQW1CLE1BQUEsUUFBUSxFQUFFSSxjQUE3QjtBQUE2QyxNQUFBLE1BQU0sRUFBRUosTUFBckQ7QUFBNkQsTUFBQSxZQUFZLEVBQUVDO0FBQTNFLG9CQUNFLGdDQUFDLDZCQUFELGtCQUEwQlUsV0FBMUIsQ0FERixlQUVFLGdDQUFDLGlCQUFEO0FBQ0UsTUFBQSxFQUFFLEVBQUVYLE1BQU0sQ0FBQ1ksRUFEYjtBQUVFLE1BQUEsT0FBTyxFQUFFVCxtQkFGWDtBQUdFLE1BQUEsT0FBTyxFQUFFTyxTQUFTLEdBQUcscUJBQUgsR0FBMkIscUJBSC9DO0FBSUUsTUFBQSxhQUFhLEVBQUVBLFNBQVMsR0FBR0csY0FBSCxHQUFhQyxnQkFKdkM7QUFLRSxNQUFBLE1BQU0sRUFBRUo7QUFMVixNQUZGLENBREYsZUFXRSxnQ0FBQyxxQ0FBRDtBQUFxQixNQUFBLFNBQVMsRUFBQztBQUEvQixvQkFDRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0UsZ0NBQUMsYUFBRDtBQUFlLE1BQUEsTUFBTSxFQUFFVixNQUF2QjtBQUErQixNQUFBLE1BQU0sRUFBRUQsTUFBdkM7QUFBK0MsTUFBQSxTQUFTLEVBQUVTO0FBQTFELE1BREYsQ0FERixDQVhGLENBREY7QUFtQkQsR0EvQnFELENBQXhEOztBQWtDQWQsRUFBQUEsa0JBQWtCLENBQUNxQixXQUFuQixHQUFpQyxvQkFBakM7QUFFQSxTQUFPckIsa0JBQVA7QUFDRDs7ZUFFY1IseUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VNZW1vLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTdHlsZWRGaWx0ZXJDb250ZW50fSBmcm9tICcuLi8uLi9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFBvbHlnb25GaWx0ZXJGYWN0b3J5IGZyb20gJy4uL3BvbHlnb24tZmlsdGVyJztcbmltcG9ydCBQYW5lbEhlYWRlckFjdGlvbkZhY3RvcnkgZnJvbSAnLi4vLi4vc2lkZS1wYW5lbC9wYW5lbC1oZWFkZXItYWN0aW9uJztcbmltcG9ydCB7RXllU2VlbiwgRXllVW5zZWVufSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMnO1xuXG5pbXBvcnQgRmlsdGVyUGFuZWxIZWFkZXJGYWN0b3J5IGZyb20gJy4uLy4uL3NpZGUtcGFuZWwvZmlsdGVyLXBhbmVsL2ZpbHRlci1wYW5lbC1oZWFkZXInO1xuaW1wb3J0IHtTdHlsZWRGaWx0ZXJQYW5lbH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoLmdldCc7XG5pbXBvcnQge1BvbHlnb25GaWx0ZXJQYW5lbENvbXBvbmVudH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge0tlcGxlclRhYmxlfSBmcm9tICdAa2VwbGVyLmdsL3RhYmxlJztcblxuUG9seWdvbkZpbHRlclBhbmVsRmFjdG9yeS5kZXBzID0gW1xuICBGaWx0ZXJQYW5lbEhlYWRlckZhY3RvcnksXG4gIFBvbHlnb25GaWx0ZXJGYWN0b3J5LFxuICBQYW5lbEhlYWRlckFjdGlvbkZhY3Rvcnlcbl07XG5cbmZ1bmN0aW9uIFBvbHlnb25GaWx0ZXJQYW5lbEZhY3RvcnkoXG4gIEZpbHRlclBhbmVsSGVhZGVyOiBSZXR1cm5UeXBlPHR5cGVvZiBGaWx0ZXJQYW5lbEhlYWRlckZhY3Rvcnk+LFxuICBQb2x5Z29uRmlsdGVyOiBSZXR1cm5UeXBlPHR5cGVvZiBQb2x5Z29uRmlsdGVyRmFjdG9yeT4sXG4gIFBhbmVsSGVhZGVyQWN0aW9uOiBSZXR1cm5UeXBlPHR5cGVvZiBQYW5lbEhlYWRlckFjdGlvbkZhY3Rvcnk+XG4pIHtcbiAgY29uc3QgUG9seWdvbkZpbHRlclBhbmVsOiBQb2x5Z29uRmlsdGVyUGFuZWxDb21wb25lbnQgPSBSZWFjdC5tZW1vKFxuICAgICh7aWR4LCBkYXRhc2V0cywgbGF5ZXJzLCBmaWx0ZXIsIHJlbW92ZUZpbHRlciwgc2V0RmlsdGVyLCB0b2dnbGVGaWx0ZXJGZWF0dXJlfSkgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyRGF0YXNldHM6IEtlcGxlclRhYmxlW10gPSB1c2VNZW1vKCgpID0+IGZpbHRlci5kYXRhSWQubWFwKGQgPT4gZGF0YXNldHNbZF0pLCBbXG4gICAgICAgIGZpbHRlcixcbiAgICAgICAgZGF0YXNldHNcbiAgICAgIF0pO1xuXG4gICAgICBjb25zdCBvblNldExheWVycyA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHNldEZpbHRlcihpZHgsICdsYXllcklkJywgdmFsdWUpLCBbc2V0RmlsdGVyLCBpZHhdKTtcblxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZ2V0KGZpbHRlciwgWyd2YWx1ZScsICdwcm9wZXJ0aWVzJywgJ2lzVmlzaWJsZSddLCB0cnVlKTtcbiAgICAgIGNvbnN0IGZlYXR1cmVUeXBlID0gZ2V0KGZpbHRlciwgWyd2YWx1ZScsICdnZW9tZXRyeScsICd0eXBlJ10sICdQb2x5Z29uJyk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9seWdvbi1maWx0ZXItcGFuZWxcIj5cbiAgICAgICAgICA8RmlsdGVyUGFuZWxIZWFkZXIgZGF0YXNldHM9e2ZpbHRlckRhdGFzZXRzfSBmaWx0ZXI9e2ZpbHRlcn0gcmVtb3ZlRmlsdGVyPXtyZW1vdmVGaWx0ZXJ9PlxuICAgICAgICAgICAgPFN0eWxlZEZpbHRlclBhbmVsPkdlbyAtIHtmZWF0dXJlVHlwZX08L1N0eWxlZEZpbHRlclBhbmVsPlxuICAgICAgICAgICAgPFBhbmVsSGVhZGVyQWN0aW9uXG4gICAgICAgICAgICAgIGlkPXtmaWx0ZXIuaWR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUZpbHRlckZlYXR1cmV9XG4gICAgICAgICAgICAgIHRvb2x0aXA9e2lzVmlzaWJsZSA/ICd0b29sdGlwLmhpZGVGZWF0dXJlJyA6ICd0b29sdGlwLnNob3dGZWF0dXJlJ31cbiAgICAgICAgICAgICAgSWNvbkNvbXBvbmVudD17aXNWaXNpYmxlID8gRXllU2VlbiA6IEV5ZVVuc2Vlbn1cbiAgICAgICAgICAgICAgYWN0aXZlPXtpc1Zpc2libGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRmlsdGVyUGFuZWxIZWFkZXI+XG4gICAgICAgICAgPFN0eWxlZEZpbHRlckNvbnRlbnQgY2xhc3NOYW1lPVwiZmlsdGVyLXBhbmVsX19jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1wYW5lbF9fZmlsdGVyXCI+XG4gICAgICAgICAgICAgIDxQb2x5Z29uRmlsdGVyIGZpbHRlcj17ZmlsdGVyfSBsYXllcnM9e2xheWVyc30gc2V0TGF5ZXJzPXtvblNldExheWVyc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvU3R5bGVkRmlsdGVyQ29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgKTtcblxuICBQb2x5Z29uRmlsdGVyUGFuZWwuZGlzcGxheU5hbWUgPSAnUG9seWdvbkZpbHRlclBhbmVsJztcblxuICByZXR1cm4gUG9seWdvbkZpbHRlclBhbmVsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb2x5Z29uRmlsdGVyUGFuZWxGYWN0b3J5O1xuIl19