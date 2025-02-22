"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var _constants = require("@kepler.gl/constants");

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

/**
 * A wrapper component in modals contain a image preview of the map with cloud providers
 * It sets export image size based on provider thumbnail size
 * @type {React.FunctionComponent<ImageModalContainerProps>}
 */
var ImageModalContainer = function ImageModalContainer(_ref) {
  var onUpdateImageSetting = _ref.onUpdateImageSetting,
      cleanupExportImage = _ref.cleanupExportImage,
      cloudProviders = _ref.cloudProviders,
      currentProvider = _ref.currentProvider,
      children = _ref.children;
  (0, _react.useEffect)(function () {
    onUpdateImageSetting({
      exporting: true
    });
    return function () {
      cleanupExportImage();
    };
  }, [onUpdateImageSetting, cleanupExportImage]);
  (0, _react.useEffect)(function () {
    if (currentProvider && cloudProviders && cloudProviders.length) {
      var provider = cloudProviders.find(function (p) {
        return p.name === currentProvider;
      });

      if (provider && provider.thumbnail) {
        onUpdateImageSetting({
          mapW: (0, _lodash["default"])(provider, ['thumbnail', 'width']) || _constants.MAP_THUMBNAIL_DIMENSION.width,
          mapH: (0, _lodash["default"])(provider, ['thumbnail', 'height']) || _constants.MAP_THUMBNAIL_DIMENSION.height,
          ratio: _constants.EXPORT_IMG_RATIOS.CUSTOM,
          legend: false
        });
      }
    } else {
      onUpdateImageSetting({
        mapW: _constants.MAP_THUMBNAIL_DIMENSION.width,
        mapH: _constants.MAP_THUMBNAIL_DIMENSION.height,
        ratio: _constants.EXPORT_IMG_RATIOS.CUSTOM,
        legend: false
      });
    }
  }, [currentProvider, cloudProviders, onUpdateImageSetting]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children);
};

ImageModalContainer.defaultProps = {
  cloudProviders: []
};
var _default = ImageModalContainer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tb2RhbHMvaW1hZ2UtbW9kYWwtY29udGFpbmVyLnRzeCJdLCJuYW1lcyI6WyJJbWFnZU1vZGFsQ29udGFpbmVyIiwib25VcGRhdGVJbWFnZVNldHRpbmciLCJjbGVhbnVwRXhwb3J0SW1hZ2UiLCJjbG91ZFByb3ZpZGVycyIsImN1cnJlbnRQcm92aWRlciIsImNoaWxkcmVuIiwiZXhwb3J0aW5nIiwibGVuZ3RoIiwicHJvdmlkZXIiLCJmaW5kIiwicCIsIm5hbWUiLCJ0aHVtYm5haWwiLCJtYXBXIiwiTUFQX1RIVU1CTkFJTF9ESU1FTlNJT04iLCJ3aWR0aCIsIm1hcEgiLCJoZWlnaHQiLCJyYXRpbyIsIkVYUE9SVF9JTUdfUkFUSU9TIiwiQ1VTVE9NIiwibGVnZW5kIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7QUF2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxtQkFBdUQsR0FBRyxTQUExREEsbUJBQTBELE9BTTFEO0FBQUEsTUFMSkMsb0JBS0ksUUFMSkEsb0JBS0k7QUFBQSxNQUpKQyxrQkFJSSxRQUpKQSxrQkFJSTtBQUFBLE1BSEpDLGNBR0ksUUFISkEsY0FHSTtBQUFBLE1BRkpDLGVBRUksUUFGSkEsZUFFSTtBQUFBLE1BREpDLFFBQ0ksUUFESkEsUUFDSTtBQUNKLHdCQUFVLFlBQU07QUFDZEosSUFBQUEsb0JBQW9CLENBQUM7QUFBQ0ssTUFBQUEsU0FBUyxFQUFFO0FBQVosS0FBRCxDQUFwQjtBQUNBLFdBQU8sWUFBTTtBQUNYSixNQUFBQSxrQkFBa0I7QUFDbkIsS0FGRDtBQUdELEdBTEQsRUFLRyxDQUFDRCxvQkFBRCxFQUF1QkMsa0JBQXZCLENBTEg7QUFPQSx3QkFBVSxZQUFNO0FBQ2QsUUFBSUUsZUFBZSxJQUFJRCxjQUFuQixJQUFxQ0EsY0FBYyxDQUFDSSxNQUF4RCxFQUFnRTtBQUM5RCxVQUFNQyxRQUFRLEdBQUdMLGNBQWMsQ0FBQ00sSUFBZixDQUFvQixVQUFBQyxDQUFDO0FBQUEsZUFBSUEsQ0FBQyxDQUFDQyxJQUFGLEtBQVdQLGVBQWY7QUFBQSxPQUFyQixDQUFqQjs7QUFFQSxVQUFJSSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0ksU0FBekIsRUFBb0M7QUFDbENYLFFBQUFBLG9CQUFvQixDQUFDO0FBQ25CWSxVQUFBQSxJQUFJLEVBQUUsd0JBQUlMLFFBQUosRUFBYyxDQUFDLFdBQUQsRUFBYyxPQUFkLENBQWQsS0FBeUNNLG1DQUF3QkMsS0FEcEQ7QUFFbkJDLFVBQUFBLElBQUksRUFBRSx3QkFBSVIsUUFBSixFQUFjLENBQUMsV0FBRCxFQUFjLFFBQWQsQ0FBZCxLQUEwQ00sbUNBQXdCRyxNQUZyRDtBQUduQkMsVUFBQUEsS0FBSyxFQUFFQyw2QkFBa0JDLE1BSE47QUFJbkJDLFVBQUFBLE1BQU0sRUFBRTtBQUpXLFNBQUQsQ0FBcEI7QUFNRDtBQUNGLEtBWEQsTUFXTztBQUNMcEIsTUFBQUEsb0JBQW9CLENBQUM7QUFDbkJZLFFBQUFBLElBQUksRUFBRUMsbUNBQXdCQyxLQURYO0FBRW5CQyxRQUFBQSxJQUFJLEVBQUVGLG1DQUF3QkcsTUFGWDtBQUduQkMsUUFBQUEsS0FBSyxFQUFFQyw2QkFBa0JDLE1BSE47QUFJbkJDLFFBQUFBLE1BQU0sRUFBRTtBQUpXLE9BQUQsQ0FBcEI7QUFNRDtBQUNGLEdBcEJELEVBb0JHLENBQUNqQixlQUFELEVBQWtCRCxjQUFsQixFQUFrQ0Ysb0JBQWxDLENBcEJIO0FBc0JBLHNCQUFPLGtFQUFHSSxRQUFILENBQVA7QUFDRCxDQXJDRDs7QUF1Q0FMLG1CQUFtQixDQUFDc0IsWUFBcEIsR0FBbUM7QUFDakNuQixFQUFBQSxjQUFjLEVBQUU7QUFEaUIsQ0FBbkM7ZUFJZUgsbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoLmdldCc7XG5cbmltcG9ydCB7TUFQX1RIVU1CTkFJTF9ESU1FTlNJT04sIEVYUE9SVF9JTUdfUkFUSU9TfSBmcm9tICdAa2VwbGVyLmdsL2NvbnN0YW50cyc7XG5pbXBvcnQge1NldEV4cG9ydEltYWdlU2V0dGluZ1VwZGF0ZXJBY3Rpb259IGZyb20gJ0BrZXBsZXIuZ2wvYWN0aW9ucyc7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdAa2VwbGVyLmdsL2Nsb3VkLXByb3ZpZGVycyc7XG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2ltYWdlLW1vZGFsLWNvbnRhaW5lcicpLkltYWdlTW9kYWxDb250YWluZXJQcm9wc30gSW1hZ2VNb2RhbENvbnRhaW5lclByb3BzICovXG5cbmV4cG9ydCB0eXBlIEltYWdlTW9kYWxDb250YWluZXJQcm9wcyA9IHtcbiAgY2xvdWRQcm92aWRlcnM/OiBQcm92aWRlcltdO1xuICBjdXJyZW50UHJvdmlkZXI/OiBzdHJpbmcgfCBudWxsO1xuICBvblVwZGF0ZUltYWdlU2V0dGluZzogKG5ld1NldHRpbmc6IFNldEV4cG9ydEltYWdlU2V0dGluZ1VwZGF0ZXJBY3Rpb25bJ3BheWxvYWQnXSkgPT4gdm9pZDtcbiAgY2xlYW51cEV4cG9ydEltYWdlOiAoKSA9PiB2b2lkO1xufTtcblxuLyoqXG4gKiBBIHdyYXBwZXIgY29tcG9uZW50IGluIG1vZGFscyBjb250YWluIGEgaW1hZ2UgcHJldmlldyBvZiB0aGUgbWFwIHdpdGggY2xvdWQgcHJvdmlkZXJzXG4gKiBJdCBzZXRzIGV4cG9ydCBpbWFnZSBzaXplIGJhc2VkIG9uIHByb3ZpZGVyIHRodW1ibmFpbCBzaXplXG4gKiBAdHlwZSB7UmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8SW1hZ2VNb2RhbENvbnRhaW5lclByb3BzPn1cbiAqL1xuY29uc3QgSW1hZ2VNb2RhbENvbnRhaW5lcjogUmVhY3QuRkM8SW1hZ2VNb2RhbENvbnRhaW5lclByb3BzPiA9ICh7XG4gIG9uVXBkYXRlSW1hZ2VTZXR0aW5nLFxuICBjbGVhbnVwRXhwb3J0SW1hZ2UsXG4gIGNsb3VkUHJvdmlkZXJzLFxuICBjdXJyZW50UHJvdmlkZXIsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgb25VcGRhdGVJbWFnZVNldHRpbmcoe2V4cG9ydGluZzogdHJ1ZX0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhbnVwRXhwb3J0SW1hZ2UoKTtcbiAgICB9O1xuICB9LCBbb25VcGRhdGVJbWFnZVNldHRpbmcsIGNsZWFudXBFeHBvcnRJbWFnZV0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRQcm92aWRlciAmJiBjbG91ZFByb3ZpZGVycyAmJiBjbG91ZFByb3ZpZGVycy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gY2xvdWRQcm92aWRlcnMuZmluZChwID0+IHAubmFtZSA9PT0gY3VycmVudFByb3ZpZGVyKTtcblxuICAgICAgaWYgKHByb3ZpZGVyICYmIHByb3ZpZGVyLnRodW1ibmFpbCkge1xuICAgICAgICBvblVwZGF0ZUltYWdlU2V0dGluZyh7XG4gICAgICAgICAgbWFwVzogZ2V0KHByb3ZpZGVyLCBbJ3RodW1ibmFpbCcsICd3aWR0aCddKSB8fCBNQVBfVEhVTUJOQUlMX0RJTUVOU0lPTi53aWR0aCxcbiAgICAgICAgICBtYXBIOiBnZXQocHJvdmlkZXIsIFsndGh1bWJuYWlsJywgJ2hlaWdodCddKSB8fCBNQVBfVEhVTUJOQUlMX0RJTUVOU0lPTi5oZWlnaHQsXG4gICAgICAgICAgcmF0aW86IEVYUE9SVF9JTUdfUkFUSU9TLkNVU1RPTSxcbiAgICAgICAgICBsZWdlbmQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvblVwZGF0ZUltYWdlU2V0dGluZyh7XG4gICAgICAgIG1hcFc6IE1BUF9USFVNQk5BSUxfRElNRU5TSU9OLndpZHRoLFxuICAgICAgICBtYXBIOiBNQVBfVEhVTUJOQUlMX0RJTUVOU0lPTi5oZWlnaHQsXG4gICAgICAgIHJhdGlvOiBFWFBPUlRfSU1HX1JBVElPUy5DVVNUT00sXG4gICAgICAgIGxlZ2VuZDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2N1cnJlbnRQcm92aWRlciwgY2xvdWRQcm92aWRlcnMsIG9uVXBkYXRlSW1hZ2VTZXR0aW5nXSk7XG5cbiAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcbn07XG5cbkltYWdlTW9kYWxDb250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICBjbG91ZFByb3ZpZGVyczogW11cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlTW9kYWxDb250YWluZXI7XG4iXX0=