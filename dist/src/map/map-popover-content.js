"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MapPopoverContentFactory;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _layerHoverInfo = _interopRequireDefault(require("./layer-hover-info"));

var _coordinateInfo = _interopRequireDefault(require("./coordinate-info"));

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
MapPopoverContentFactory.deps = [_layerHoverInfo["default"], _coordinateInfo["default"]];

function MapPopoverContentFactory(LayerHoverInfo, CoordinateInfo) {
  var MapPopoverContent = function MapPopoverContent(_ref) {
    var coordinate = _ref.coordinate,
        layerHoverProp = _ref.layerHoverProp,
        zoom = _ref.zoom;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, Array.isArray(coordinate) && /*#__PURE__*/_react["default"].createElement(CoordinateInfo, {
      coordinate: coordinate,
      zoom: zoom
    }), layerHoverProp && /*#__PURE__*/_react["default"].createElement(LayerHoverInfo, layerHoverProp));
  };

  return (0, _reactIntl.injectIntl)(MapPopoverContent);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tYXAvbWFwLXBvcG92ZXItY29udGVudC50c3giXSwibmFtZXMiOlsiTWFwUG9wb3ZlckNvbnRlbnRGYWN0b3J5IiwiZGVwcyIsIkxheWVySG92ZXJJbmZvRmFjdG9yeSIsIkNvb3JkaW5hdGVJbmZvRmFjdG9yeSIsIkxheWVySG92ZXJJbmZvIiwiQ29vcmRpbmF0ZUluZm8iLCJNYXBQb3BvdmVyQ29udGVudCIsImNvb3JkaW5hdGUiLCJsYXllckhvdmVyUHJvcCIsInpvb20iLCJBcnJheSIsImlzQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUF4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQUEsd0JBQXdCLENBQUNDLElBQXpCLEdBQWdDLENBQUNDLDBCQUFELEVBQXdCQywwQkFBeEIsQ0FBaEM7O0FBWWUsU0FBU0gsd0JBQVQsQ0FDYkksY0FEYSxFQUViQyxjQUZhLEVBR2I7QUFDQSxNQUFNQyxpQkFBK0QsR0FBRyxTQUFsRUEsaUJBQWtFLE9BSWxFO0FBQUEsUUFISkMsVUFHSSxRQUhKQSxVQUdJO0FBQUEsUUFGSkMsY0FFSSxRQUZKQSxjQUVJO0FBQUEsUUFESkMsSUFDSSxRQURKQSxJQUNJO0FBQ0osd0JBQ0Usa0VBQ0dDLEtBQUssQ0FBQ0MsT0FBTixDQUFjSixVQUFkLGtCQUE2QixnQ0FBQyxjQUFEO0FBQWdCLE1BQUEsVUFBVSxFQUFFQSxVQUE1QjtBQUF3QyxNQUFBLElBQUksRUFBRUU7QUFBOUMsTUFEaEMsRUFFR0QsY0FBYyxpQkFBSSxnQ0FBQyxjQUFELEVBQW9CQSxjQUFwQixDQUZyQixDQURGO0FBTUQsR0FYRDs7QUFZQSxTQUFPLDJCQUFXRixpQkFBWCxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtpbmplY3RJbnRsLCBJbnRsU2hhcGV9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHtMYXllckhvdmVyUHJvcH0gZnJvbSAnQGtlcGxlci5nbC9yZWR1Y2Vycyc7XG5pbXBvcnQgTGF5ZXJIb3ZlckluZm9GYWN0b3J5IGZyb20gJy4vbGF5ZXItaG92ZXItaW5mbyc7XG5pbXBvcnQgQ29vcmRpbmF0ZUluZm9GYWN0b3J5IGZyb20gJy4vY29vcmRpbmF0ZS1pbmZvJztcblxuTWFwUG9wb3ZlckNvbnRlbnRGYWN0b3J5LmRlcHMgPSBbTGF5ZXJIb3ZlckluZm9GYWN0b3J5LCBDb29yZGluYXRlSW5mb0ZhY3RvcnldO1xuXG50eXBlIE1hcFBvcG92ZXJDb250ZW50UHJvcHMgPSB7XG4gIGNvb3JkaW5hdGU6IFtudW1iZXIsIG51bWJlcl0gfCBib29sZWFuO1xuICBsYXllckhvdmVyUHJvcDogTGF5ZXJIb3ZlclByb3AgfCBudWxsO1xuICB6b29tOiBudW1iZXI7XG59O1xuXG50eXBlIEludGxQcm9wcyA9IHtcbiAgaW50bDogSW50bFNoYXBlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwUG9wb3ZlckNvbnRlbnRGYWN0b3J5KFxuICBMYXllckhvdmVySW5mbzogUmV0dXJuVHlwZTx0eXBlb2YgTGF5ZXJIb3ZlckluZm9GYWN0b3J5PixcbiAgQ29vcmRpbmF0ZUluZm86IFJldHVyblR5cGU8dHlwZW9mIENvb3JkaW5hdGVJbmZvRmFjdG9yeT5cbikge1xuICBjb25zdCBNYXBQb3BvdmVyQ29udGVudDogUmVhY3QuRkM8TWFwUG9wb3ZlckNvbnRlbnRQcm9wcyAmIEludGxQcm9wcz4gPSAoe1xuICAgIGNvb3JkaW5hdGUsXG4gICAgbGF5ZXJIb3ZlclByb3AsXG4gICAgem9vbVxuICB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtBcnJheS5pc0FycmF5KGNvb3JkaW5hdGUpICYmIDxDb29yZGluYXRlSW5mbyBjb29yZGluYXRlPXtjb29yZGluYXRlfSB6b29tPXt6b29tfSAvPn1cbiAgICAgICAge2xheWVySG92ZXJQcm9wICYmIDxMYXllckhvdmVySW5mbyB7Li4ubGF5ZXJIb3ZlclByb3B9IC8+fVxuICAgICAgPC8+XG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIGluamVjdEludGwoTWFwUG9wb3ZlckNvbnRlbnQpO1xufVxuIl19