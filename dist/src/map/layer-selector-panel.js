"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = require("../common/styled-components");

var _icons = require("../common/icons");

var _mapLayerSelector = _interopRequireDefault(require("../common/map-layer-selector"));

var _mapControlTooltip = _interopRequireDefault(require("./map-control-tooltip"));

var _mapControlPanel = _interopRequireDefault(require("./map-control-panel"));

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
LayerSelectorPanelFactory.deps = [_mapControlTooltip["default"], _mapControlPanel["default"]];

function LayerSelectorPanelFactory(MapControlTooltip, MapControlPanel) {
  /** @type {import('./layer-selector-panel').LayerSelectorPanelComponent} */
  var LayerSelectorPanel = function LayerSelectorPanel(_ref) {
    var onMapToggleLayer = _ref.onMapToggleLayer,
        onToggleMapControl = _ref.onToggleMapControl,
        layers = _ref.layers,
        layersToRender = _ref.layersToRender,
        isSplit = _ref.isSplit,
        mapControls = _ref.mapControls,
        readOnly = _ref.readOnly;
    var visibleLayers = (mapControls === null || mapControls === void 0 ? void 0 : mapControls.visibleLayers) || {};

    var _ref2 = visibleLayers || {},
        isActive = _ref2.active,
        show = _ref2.show,
        disableClose = _ref2.disableClose;

    var legendLayers = (0, _react.useMemo)(function () {
      return layers.filter(function (_ref3) {
        var config = _ref3.config;
        return config.isVisible;
      }).map(function (_ref4) {
        var id = _ref4.id,
            config = _ref4.config;
        return {
          id: id,
          name: config.label,
          // layer
          isVisible: layersToRender[id]
        };
      });
    }, [layers, layersToRender]);
    var isVisible = (0, _react.useMemo)(function () {
      return isSplit && show && readOnly !== true;
    }, [isSplit, show, readOnly]);
    var onToggleMenuPanel = (0, _react.useCallback)(function (event) {
      event.preventDefault();
      onToggleMapControl('visibleLayers');
    }, [onToggleMapControl]);
    return isVisible ? !isActive ? /*#__PURE__*/_react["default"].createElement(_styledComponents.MapControlButton, {
      key: 1,
      onClick: onToggleMenuPanel,
      className: (0, _classnames["default"])('map-control-button', 'toggle-layer', {
        isActive: isActive
      }),
      "data-tip": true,
      "data-for": "toggle-layer"
    }, /*#__PURE__*/_react["default"].createElement(_icons.Layers, {
      height: "22px"
    }), /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
      id: "toggle-layer",
      message: isActive ? 'tooltip.hideLayerPanel' : 'tooltip.showLayerPanel'
    })) : /*#__PURE__*/_react["default"].createElement(MapControlPanel, {
      header: "header.visibleLayers",
      onClick: onToggleMenuPanel,
      disableClose: disableClose
    }, /*#__PURE__*/_react["default"].createElement(_mapLayerSelector["default"], {
      layers: legendLayers,
      onMapToggleLayer: onMapToggleLayer
    })) : null;
  };

  LayerSelectorPanel.displayName = 'LayerSelectorPanel';
  return /*#__PURE__*/_react["default"].memo(LayerSelectorPanel);
}

var _default = LayerSelectorPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tYXAvbGF5ZXItc2VsZWN0b3ItcGFuZWwudHN4Il0sIm5hbWVzIjpbIkxheWVyU2VsZWN0b3JQYW5lbEZhY3RvcnkiLCJkZXBzIiwiTWFwQ29udHJvbFRvb2x0aXBGYWN0b3J5IiwiTWFwQ29udHJvbFBhbmVsRmFjdG9yeSIsIk1hcENvbnRyb2xUb29sdGlwIiwiTWFwQ29udHJvbFBhbmVsIiwiTGF5ZXJTZWxlY3RvclBhbmVsIiwib25NYXBUb2dnbGVMYXllciIsIm9uVG9nZ2xlTWFwQ29udHJvbCIsImxheWVycyIsImxheWVyc1RvUmVuZGVyIiwiaXNTcGxpdCIsIm1hcENvbnRyb2xzIiwicmVhZE9ubHkiLCJ2aXNpYmxlTGF5ZXJzIiwiaXNBY3RpdmUiLCJhY3RpdmUiLCJzaG93IiwiZGlzYWJsZUNsb3NlIiwibGVnZW5kTGF5ZXJzIiwiZmlsdGVyIiwiY29uZmlnIiwiaXNWaXNpYmxlIiwibWFwIiwiaWQiLCJuYW1lIiwibGFiZWwiLCJvblRvZ2dsZU1lbnVQYW5lbCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkaXNwbGF5TmFtZSIsIlJlYWN0IiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYUFBLHlCQUF5QixDQUFDQyxJQUExQixHQUFpQyxDQUFDQyw2QkFBRCxFQUEyQkMsMkJBQTNCLENBQWpDOztBQVlBLFNBQVNILHlCQUFULENBQ0VJLGlCQURGLEVBRUVDLGVBRkYsRUFHRTtBQUNBO0FBQ0EsTUFBTUMsa0JBQXFELEdBQUcsU0FBeERBLGtCQUF3RCxPQVF4RDtBQUFBLFFBUEpDLGdCQU9JLFFBUEpBLGdCQU9JO0FBQUEsUUFO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bi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlTWVtb30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCB7TWFwQ29udHJvbEJ1dHRvbn0gZnJvbSAnLi4vY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7TGF5ZXJzfSBmcm9tICcuLi9jb21tb24vaWNvbnMnO1xuaW1wb3J0IE1hcExheWVyU2VsZWN0b3IgZnJvbSAnLi4vY29tbW9uL21hcC1sYXllci1zZWxlY3Rvcic7XG5pbXBvcnQgTWFwQ29udHJvbFRvb2x0aXBGYWN0b3J5IGZyb20gJy4vbWFwLWNvbnRyb2wtdG9vbHRpcCc7XG5pbXBvcnQgTWFwQ29udHJvbFBhbmVsRmFjdG9yeSBmcm9tICcuL21hcC1jb250cm9sLXBhbmVsJztcbmltcG9ydCB7TGF5ZXJ9IGZyb20gJ0BrZXBsZXIuZ2wvbGF5ZXJzJztcbmltcG9ydCB7TWFwQ29udHJvbCwgTWFwQ29udHJvbHN9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuXG5MYXllclNlbGVjdG9yUGFuZWxGYWN0b3J5LmRlcHMgPSBbTWFwQ29udHJvbFRvb2x0aXBGYWN0b3J5LCBNYXBDb250cm9sUGFuZWxGYWN0b3J5XTtcblxuZXhwb3J0IHR5cGUgTGF5ZXJTZWxlY3RvclBhbmVsUHJvcHMgPSB7XG4gIG9uTWFwVG9nZ2xlTGF5ZXI6IChsYXllcklkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uVG9nZ2xlTWFwQ29udHJvbDogKGNvbnRyb2w6IHN0cmluZykgPT4gdm9pZDtcbiAgbGF5ZXJzOiBSZWFkb25seUFycmF5PExheWVyPjtcbiAgbGF5ZXJzVG9SZW5kZXI6IHtba2V5OiBzdHJpbmddOiBib29sZWFufTtcbiAgaXNTcGxpdDogYm9vbGVhbjtcbiAgbWFwQ29udHJvbHM6IE1hcENvbnRyb2xzO1xuICByZWFkT25seTogYm9vbGVhbjtcbn07XG5cbmZ1bmN0aW9uIExheWVyU2VsZWN0b3JQYW5lbEZhY3RvcnkoXG4gIE1hcENvbnRyb2xUb29sdGlwOiBSZXR1cm5UeXBlPHR5cGVvZiBNYXBDb250cm9sVG9vbHRpcEZhY3Rvcnk+LFxuICBNYXBDb250cm9sUGFuZWw6IFJldHVyblR5cGU8dHlwZW9mIE1hcENvbnRyb2xQYW5lbEZhY3Rvcnk+XG4pIHtcbiAgLyoqIEB0eXBlIHtpbXBvcnQoJy4vbGF5ZXItc2VsZWN0b3ItcGFuZWwnKS5MYXllclNlbGVjdG9yUGFuZWxDb21wb25lbnR9ICovXG4gIGNvbnN0IExheWVyU2VsZWN0b3JQYW5lbDogUmVhY3QuRkM8TGF5ZXJTZWxlY3RvclBhbmVsUHJvcHM+ID0gKHtcbiAgICBvbk1hcFRvZ2dsZUxheWVyLFxuICAgIG9uVG9nZ2xlTWFwQ29udHJvbCxcbiAgICBsYXllcnMsXG4gICAgbGF5ZXJzVG9SZW5kZXIsXG4gICAgaXNTcGxpdCxcbiAgICBtYXBDb250cm9scyxcbiAgICByZWFkT25seVxuICB9KSA9PiB7XG4gICAgY29uc3QgdmlzaWJsZUxheWVycyA9IG1hcENvbnRyb2xzPy52aXNpYmxlTGF5ZXJzIHx8ICh7fSBhcyBNYXBDb250cm9sKTtcbiAgICBjb25zdCB7YWN0aXZlOiBpc0FjdGl2ZSwgc2hvdywgZGlzYWJsZUNsb3NlfSA9IHZpc2libGVMYXllcnMgfHwge307XG5cbiAgICBjb25zdCBsZWdlbmRMYXllcnMgPSB1c2VNZW1vKFxuICAgICAgKCkgPT5cbiAgICAgICAgbGF5ZXJzXG4gICAgICAgICAgLmZpbHRlcigoe2NvbmZpZ30pID0+IGNvbmZpZy5pc1Zpc2libGUpXG4gICAgICAgICAgLm1hcCgoe2lkLCBjb25maWd9KSA9PiAoe1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBuYW1lOiBjb25maWcubGFiZWwsXG4gICAgICAgICAgICAvLyBsYXllclxuICAgICAgICAgICAgaXNWaXNpYmxlOiBsYXllcnNUb1JlbmRlcltpZF1cbiAgICAgICAgICB9KSksXG4gICAgICBbbGF5ZXJzLCBsYXllcnNUb1JlbmRlcl1cbiAgICApO1xuXG4gICAgY29uc3QgaXNWaXNpYmxlID0gdXNlTWVtbygoKSA9PiBpc1NwbGl0ICYmIHNob3cgJiYgcmVhZE9ubHkgIT09IHRydWUsIFtcbiAgICAgIGlzU3BsaXQsXG4gICAgICBzaG93LFxuICAgICAgcmVhZE9ubHlcbiAgICBdKTtcblxuICAgIGNvbnN0IG9uVG9nZ2xlTWVudVBhbmVsID0gdXNlQ2FsbGJhY2soXG4gICAgICBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG9uVG9nZ2xlTWFwQ29udHJvbCgndmlzaWJsZUxheWVycycpO1xuICAgICAgfSxcbiAgICAgIFtvblRvZ2dsZU1hcENvbnRyb2xdXG4gICAgKTtcblxuICAgIHJldHVybiBpc1Zpc2libGUgPyAoXG4gICAgICAhaXNBY3RpdmUgPyAoXG4gICAgICAgIDxNYXBDb250cm9sQnV0dG9uXG4gICAgICAgICAga2V5PXsxfVxuICAgICAgICAgIG9uQ2xpY2s9e29uVG9nZ2xlTWVudVBhbmVsfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbWFwLWNvbnRyb2wtYnV0dG9uJywgJ3RvZ2dsZS1sYXllcicsIHtpc0FjdGl2ZX0pfVxuICAgICAgICAgIGRhdGEtdGlwXG4gICAgICAgICAgZGF0YS1mb3I9XCJ0b2dnbGUtbGF5ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPExheWVycyBoZWlnaHQ9XCIyMnB4XCIgLz5cbiAgICAgICAgICA8TWFwQ29udHJvbFRvb2x0aXBcbiAgICAgICAgICAgIGlkPVwidG9nZ2xlLWxheWVyXCJcbiAgICAgICAgICAgIG1lc3NhZ2U9e2lzQWN0aXZlID8gJ3Rvb2x0aXAuaGlkZUxheWVyUGFuZWwnIDogJ3Rvb2x0aXAuc2hvd0xheWVyUGFuZWwnfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTWFwQ29udHJvbEJ1dHRvbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxNYXBDb250cm9sUGFuZWxcbiAgICAgICAgICBoZWFkZXI9XCJoZWFkZXIudmlzaWJsZUxheWVyc1wiXG4gICAgICAgICAgb25DbGljaz17b25Ub2dnbGVNZW51UGFuZWx9XG4gICAgICAgICAgZGlzYWJsZUNsb3NlPXtkaXNhYmxlQ2xvc2V9XG4gICAgICAgID5cbiAgICAgICAgICA8TWFwTGF5ZXJTZWxlY3RvciBsYXllcnM9e2xlZ2VuZExheWVyc30gb25NYXBUb2dnbGVMYXllcj17b25NYXBUb2dnbGVMYXllcn0gLz5cbiAgICAgICAgPC9NYXBDb250cm9sUGFuZWw+XG4gICAgICApXG4gICAgKSA6IG51bGw7XG4gIH07XG5cbiAgTGF5ZXJTZWxlY3RvclBhbmVsLmRpc3BsYXlOYW1lID0gJ0xheWVyU2VsZWN0b3JQYW5lbCc7XG5cbiAgcmV0dXJuIFJlYWN0Lm1lbW8oTGF5ZXJTZWxlY3RvclBhbmVsKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJTZWxlY3RvclBhbmVsRmFjdG9yeTtcbiJdfQ==