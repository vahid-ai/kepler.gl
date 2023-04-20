"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _itemSelector = _interopRequireDefault(require("../common/item-selector/item-selector"));

var _constants = require("@kepler.gl/constants");

var _components = require("./components");

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
var layerFilter = function layerFilter(layer) {
  return layer.type === _constants.LAYER_TYPES.point;
};

var isAlreadySelected = function isAlreadySelected(selectedLayers, layerId) {
  return selectedLayers.findIndex(function (l) {
    return l.id === layerId;
  }) === -1;
};

function PolygonFilterFactory() {
  var PolygonFilter = /*#__PURE__*/_react["default"].memo(function (_ref) {
    var filter = _ref.filter,
        layers = _ref.layers,
        setLayers = _ref.setLayers;
    var setNewLayers = (0, _react.useCallback)(function (newLayers) {
      return setLayers(newLayers.map(function (l) {
        return l.id;
      }));
    }, [setLayers]);
    var selectedLayers = (0, _react.useMemo)(function () {
      return layers.filter(function (l) {
        var _filter$layerId;

        return (_filter$layerId = filter.layerId) === null || _filter$layerId === void 0 ? void 0 : _filter$layerId.includes(l.id);
      });
    }, [filter, layers]);
    var availableLayers = (0, _react.useMemo)(function () {
      // remove already added layers and filter out non point layers
      return layers.filter(function (layer) {
        return layerFilter(layer) && isAlreadySelected(selectedLayers, layer.id);
      });
    }, [layers, selectedLayers]);
    var searchOptions = (0, _react.useCallback)(function (value, options) {
      var searchStr = value === null || value === void 0 ? void 0 : value.toLowerCase();
      return options.filter(function (l) {
        var _l$config, _l$config$label;

        return ((_l$config = l.config) === null || _l$config === void 0 ? void 0 : (_l$config$label = _l$config.label) === null || _l$config$label === void 0 ? void 0 : _l$config$label.toLowerCase().indexOf(searchStr)) >= 0;
      });
    }, []);
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_components.StyledFilterPanel, {
      htmlFor: "filter-".concat(filter.id)
    }, "Layers:"), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
      options: availableLayers,
      selectedItems: selectedLayers,
      onChange: setNewLayers,
      searchable: true,
      searchOptions: searchOptions,
      multiSelect: true,
      getOptionValue: function getOptionValue(l) {
        return l.id;
      },
      displayOption: function displayOption(l) {
        return l.config.label;
      },
      placeholder: 'placeholder.selectLayer'
    }));
  });

  PolygonFilter.displayName = 'PolygonFilter';
  return PolygonFilter;
}

var _default = PolygonFilterFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9maWx0ZXJzL3BvbHlnb24tZmlsdGVyLnRzeCJdLCJuYW1lcyI6WyJsYXllckZpbHRlciIsImxheWVyIiwidHlwZSIsIkxBWUVSX1RZUEVTIiwicG9pbnQiLCJpc0FscmVhZHlTZWxlY3RlZCIsInNlbGVjdGVkTGF5ZXJzIiwibGF5ZXJJZCIsImZpbmRJbmRleCIsImwiLCJpZCIsIlBvbHlnb25GaWx0ZXJGYWN0b3J5IiwiUG9seWdvbkZpbHRlciIsIlJlYWN0IiwibWVtbyIsImZpbHRlciIsImxheWVycyIsInNldExheWVycyIsInNldE5ld0xheWVycyIsIm5ld0xheWVycyIsIm1hcCIsImluY2x1ZGVzIiwiYXZhaWxhYmxlTGF5ZXJzIiwic2VhcmNoT3B0aW9ucyIsInZhbHVlIiwib3B0aW9ucyIsInNlYXJjaFN0ciIsInRvTG93ZXJDYXNlIiwiY29uZmlnIiwibGFiZWwiLCJpbmRleE9mIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUVBOztBQUVBOztBQXpCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQ7QUFBQSxTQUFrQkEsS0FBSyxDQUFDQyxJQUFOLEtBQWVDLHVCQUFZQyxLQUE3QztBQUFBLENBQXBCOztBQUNBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsY0FBRCxFQUEwQkMsT0FBMUI7QUFBQSxTQUN4QkQsY0FBYyxDQUFDRSxTQUFmLENBQXlCLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLEVBQUYsS0FBU0gsT0FBYjtBQUFBLEdBQTFCLE1BQW9ELENBQUMsQ0FEN0I7QUFBQSxDQUExQjs7QUFHQSxTQUFTSSxvQkFBVCxHQUFnQztBQUM5QixNQUFNQyxhQUEyQyxnQkFBR0Msa0JBQU1DLElBQU4sQ0FBVyxnQkFBaUM7QUFBQSxRQUEvQkMsTUFBK0IsUUFBL0JBLE1BQStCO0FBQUEsUUFBdkJDLE1BQXVCLFFBQXZCQSxNQUF1QjtBQUFBLFFBQWZDLFNBQWUsUUFBZkEsU0FBZTtBQUM5RixRQUFNQyxZQUFZLEdBQUcsd0JBQ25CLFVBQUFDLFNBQVMsRUFBSTtBQUNYLGFBQU9GLFNBQVMsQ0FBQ0UsU0FBUyxDQUFDQyxHQUFWLENBQWMsVUFBQ1gsQ0FBRDtBQUFBLGVBQWNBLENBQUMsQ0FBQ0MsRUFBaEI7QUFBQSxPQUFkLENBQUQsQ0FBaEI7QUFDRCxLQUhrQixFQUluQixDQUFDTyxTQUFELENBSm1CLENBQXJCO0FBT0EsUUFBTVgsY0FBYyxHQUFHLG9CQUFRO0FBQUEsYUFBTVUsTUFBTSxDQUFDRCxNQUFQLENBQWMsVUFBQU4sQ0FBQztBQUFBOztBQUFBLGtDQUFJTSxNQUFNLENBQUNSLE9BQVgsb0RBQUksZ0JBQWdCYyxRQUFoQixDQUF5QlosQ0FBQyxDQUFDQyxFQUEzQixDQUFKO0FBQUEsT0FBZixDQUFOO0FBQUEsS0FBUixFQUFrRSxDQUN2RkssTUFEdUYsRUFFdkZDLE1BRnVGLENBQWxFLENBQXZCO0FBS0EsUUFBTU0sZUFBZSxHQUFHLG9CQUFRLFlBQU07QUFDcEM7QUFDQSxhQUFPTixNQUFNLENBQUNELE1BQVAsQ0FDTCxVQUFBZCxLQUFLO0FBQUEsZUFBSUQsV0FBVyxDQUFDQyxLQUFELENBQVgsSUFBc0JJLGlCQUFpQixDQUFDQyxjQUFELEVBQWlCTCxLQUFLLENBQUNTLEVBQXZCLENBQTNDO0FBQUEsT0FEQSxDQUFQO0FBR0QsS0FMdUIsRUFLckIsQ0FBQ00sTUFBRCxFQUFTVixjQUFULENBTHFCLENBQXhCO0FBT0EsUUFBTWlCLGFBQWEsR0FBRyx3QkFBWSxVQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFDcEQsVUFBTUMsU0FBUyxHQUFHRixLQUFILGFBQUdBLEtBQUgsdUJBQUdBLEtBQUssQ0FBRUcsV0FBUCxFQUFsQjtBQUNBLGFBQU9GLE9BQU8sQ0FBQ1YsTUFBUixDQUFlLFVBQUFOLENBQUM7QUFBQTs7QUFBQSxlQUFJLGNBQUFBLENBQUMsQ0FBQ21CLE1BQUYsMkVBQVVDLEtBQVYsb0VBQWlCRixXQUFqQixHQUErQkcsT0FBL0IsQ0FBdUNKLFNBQXZDLE1BQXFELENBQXpEO0FBQUEsT0FBaEIsQ0FBUDtBQUNELEtBSHFCLEVBR25CLEVBSG1CLENBQXRCO0FBS0Esd0JBQ0UsMERBQ0UsZ0NBQUMsNkJBQUQ7QUFBbUIsTUFBQSxPQUFPLG1CQUFZWCxNQUFNLENBQUNMLEVBQW5CO0FBQTFCLGlCQURGLGVBRUUsZ0NBQUMsd0JBQUQ7QUFDRSxNQUFBLE9BQU8sRUFBRVksZUFEWDtBQUVFLE1BQUEsYUFBYSxFQUFFaEIsY0FGakI7QUFHRSxNQUFBLFFBQVEsRUFBRVksWUFIWjtBQUlFLE1BQUEsVUFBVSxFQUFFLElBSmQ7QUFLRSxNQUFBLGFBQWEsRUFBRUssYUFMakI7QUFNRSxNQUFBLFdBQVcsRUFBRSxJQU5mO0FBT0UsTUFBQSxjQUFjLEVBQUUsd0JBQUNkLENBQUQ7QUFBQSxlQUFjQSxDQUFDLENBQUNDLEVBQWhCO0FBQUEsT0FQbEI7QUFRRSxNQUFBLGFBQWEsRUFBRSx1QkFBQ0QsQ0FBRDtBQUFBLGVBQWNBLENBQUMsQ0FBQ21CLE1BQUYsQ0FBU0MsS0FBdkI7QUFBQSxPQVJqQjtBQVNFLE1BQUEsV0FBVyxFQUFFO0FBVGYsTUFGRixDQURGO0FBZ0JELEdBekNtRCxDQUFwRDs7QUEyQ0FqQixFQUFBQSxhQUFhLENBQUNtQixXQUFkLEdBQTRCLGVBQTVCO0FBRUEsU0FBT25CLGFBQVA7QUFDRDs7ZUFFY0Qsb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VNZW1vLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEl0ZW1TZWxlY3RvciBmcm9tICcuLi9jb21tb24vaXRlbS1zZWxlY3Rvci9pdGVtLXNlbGVjdG9yJztcbmltcG9ydCB7TGF5ZXJ9IGZyb20gJ0BrZXBsZXIuZ2wvbGF5ZXJzJztcbmltcG9ydCB7TEFZRVJfVFlQRVN9IGZyb20gJ0BrZXBsZXIuZ2wvY29uc3RhbnRzJztcbmltcG9ydCB7UG9seWdvbkZpbHRlclByb3BzfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7U3R5bGVkRmlsdGVyUGFuZWx9IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbmNvbnN0IGxheWVyRmlsdGVyID0gKGxheWVyOiBMYXllcikgPT4gbGF5ZXIudHlwZSA9PT0gTEFZRVJfVFlQRVMucG9pbnQ7XG5jb25zdCBpc0FscmVhZHlTZWxlY3RlZCA9IChzZWxlY3RlZExheWVyczogTGF5ZXJbXSwgbGF5ZXJJZDogc3RyaW5nKSA9PlxuICBzZWxlY3RlZExheWVycy5maW5kSW5kZXgobCA9PiBsLmlkID09PSBsYXllcklkKSA9PT0gLTE7XG5cbmZ1bmN0aW9uIFBvbHlnb25GaWx0ZXJGYWN0b3J5KCkge1xuICBjb25zdCBQb2x5Z29uRmlsdGVyOiBSZWFjdC5GQzxQb2x5Z29uRmlsdGVyUHJvcHM+ID0gUmVhY3QubWVtbygoe2ZpbHRlciwgbGF5ZXJzLCBzZXRMYXllcnN9KSA9PiB7XG4gICAgY29uc3Qgc2V0TmV3TGF5ZXJzID0gdXNlQ2FsbGJhY2soXG4gICAgICBuZXdMYXllcnMgPT4ge1xuICAgICAgICByZXR1cm4gc2V0TGF5ZXJzKG5ld0xheWVycy5tYXAoKGw6IExheWVyKSA9PiBsLmlkKSk7XG4gICAgICB9LFxuICAgICAgW3NldExheWVyc11cbiAgICApO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRMYXllcnMgPSB1c2VNZW1vKCgpID0+IGxheWVycy5maWx0ZXIobCA9PiBmaWx0ZXIubGF5ZXJJZD8uaW5jbHVkZXMobC5pZCkpLCBbXG4gICAgICBmaWx0ZXIsXG4gICAgICBsYXllcnNcbiAgICBdKTtcblxuICAgIGNvbnN0IGF2YWlsYWJsZUxheWVycyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgLy8gcmVtb3ZlIGFscmVhZHkgYWRkZWQgbGF5ZXJzIGFuZCBmaWx0ZXIgb3V0IG5vbiBwb2ludCBsYXllcnNcbiAgICAgIHJldHVybiBsYXllcnMuZmlsdGVyKFxuICAgICAgICBsYXllciA9PiBsYXllckZpbHRlcihsYXllcikgJiYgaXNBbHJlYWR5U2VsZWN0ZWQoc2VsZWN0ZWRMYXllcnMsIGxheWVyLmlkKVxuICAgICAgKTtcbiAgICB9LCBbbGF5ZXJzLCBzZWxlY3RlZExheWVyc10pO1xuXG4gICAgY29uc3Qgc2VhcmNoT3B0aW9ucyA9IHVzZUNhbGxiYWNrKCh2YWx1ZSwgb3B0aW9ucykgPT4ge1xuICAgICAgY29uc3Qgc2VhcmNoU3RyID0gdmFsdWU/LnRvTG93ZXJDYXNlKCk7XG4gICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIobCA9PiBsLmNvbmZpZz8ubGFiZWw/LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hTdHIpID49IDApO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8U3R5bGVkRmlsdGVyUGFuZWwgaHRtbEZvcj17YGZpbHRlci0ke2ZpbHRlci5pZH1gfT5MYXllcnM6PC9TdHlsZWRGaWx0ZXJQYW5lbD5cbiAgICAgICAgPEl0ZW1TZWxlY3RvclxuICAgICAgICAgIG9wdGlvbnM9e2F2YWlsYWJsZUxheWVyc31cbiAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtzZWxlY3RlZExheWVyc31cbiAgICAgICAgICBvbkNoYW5nZT17c2V0TmV3TGF5ZXJzfVxuICAgICAgICAgIHNlYXJjaGFibGU9e3RydWV9XG4gICAgICAgICAgc2VhcmNoT3B0aW9ucz17c2VhcmNoT3B0aW9uc31cbiAgICAgICAgICBtdWx0aVNlbGVjdD17dHJ1ZX1cbiAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17KGw6IExheWVyKSA9PiBsLmlkfVxuICAgICAgICAgIGRpc3BsYXlPcHRpb249eyhsOiBMYXllcikgPT4gbC5jb25maWcubGFiZWx9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9eydwbGFjZWhvbGRlci5zZWxlY3RMYXllcid9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9KTtcblxuICBQb2x5Z29uRmlsdGVyLmRpc3BsYXlOYW1lID0gJ1BvbHlnb25GaWx0ZXInO1xuXG4gIHJldHVybiBQb2x5Z29uRmlsdGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQb2x5Z29uRmlsdGVyRmFjdG9yeTtcbiJdfQ==