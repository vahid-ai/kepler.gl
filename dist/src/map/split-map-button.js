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

var _mapControlTooltip = _interopRequireDefault(require("./map-control-tooltip"));

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
SplitMapButtonFactory.deps = [_mapControlTooltip["default"]];

function SplitMapButtonFactory(MapControlTooltip) {
  var defaultActionIcons = {
    "delete": _icons.Delete,
    split: _icons.Split
  };
  /** @type {import('./split-map-button').SplitMapButtonComponent} */

  var SplitMapButton = function SplitMapButton(_ref) {
    var isSplit = _ref.isSplit,
        mapIndex = _ref.mapIndex,
        onToggleSplitMap = _ref.onToggleSplitMap,
        _ref$actionIcons = _ref.actionIcons,
        actionIcons = _ref$actionIcons === void 0 ? defaultActionIcons : _ref$actionIcons,
        mapControls = _ref.mapControls,
        readOnly = _ref.readOnly;
    var splitMap = (mapControls === null || mapControls === void 0 ? void 0 : mapControls.splitMap) || {};
    var onClick = (0, _react.useCallback)(function (event) {
      event.preventDefault();
      onToggleSplitMap(isSplit ? mapIndex : undefined);
    }, [isSplit, mapIndex, onToggleSplitMap]);
    var isVisible = (0, _react.useMemo)(function () {
      return splitMap.show && readOnly !== true;
    }, [splitMap.show, readOnly]);

    if (!splitMap.show) {
      return null;
    }

    return isVisible ? /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
      id: "action-toggle",
      message: isSplit ? 'tooltip.closePanel' : 'tooltip.switchToDualView'
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents.MapControlButton, {
      active: isSplit,
      onClick: onClick,
      className: (0, _classnames["default"])('map-control-button', 'split-map', {
        'close-map': isSplit
      })
    }, isSplit ? /*#__PURE__*/_react["default"].createElement(actionIcons["delete"], {
      height: "18px"
    }) : /*#__PURE__*/_react["default"].createElement(actionIcons.split, {
      height: "18px"
    }))) : null;
  };

  SplitMapButton.displayName = 'SplitMapButton';
  return /*#__PURE__*/_react["default"].memo(SplitMapButton);
}

var _default = SplitMapButtonFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tYXAvc3BsaXQtbWFwLWJ1dHRvbi50c3giXSwibmFtZXMiOlsiU3BsaXRNYXBCdXR0b25GYWN0b3J5IiwiZGVwcyIsIk1hcENvbnRyb2xUb29sdGlwRmFjdG9yeSIsIk1hcENvbnRyb2xUb29sdGlwIiwiZGVmYXVsdEFjdGlvbkljb25zIiwiRGVsZXRlIiwic3BsaXQiLCJTcGxpdCIsIlNwbGl0TWFwQnV0dG9uIiwiaXNTcGxpdCIsIm1hcEluZGV4Iiwib25Ub2dnbGVTcGxpdE1hcCIsImFjdGlvbkljb25zIiwibWFwQ29udHJvbHMiLCJyZWFkT25seSIsInNwbGl0TWFwIiwib25DbGljayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ1bmRlZmluZWQiLCJpc1Zpc2libGUiLCJzaG93IiwiZGlzcGxheU5hbWUiLCJSZWFjdCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQXhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBQSxxQkFBcUIsQ0FBQ0MsSUFBdEIsR0FBNkIsQ0FBQ0MsNkJBQUQsQ0FBN0I7O0FBZ0JBLFNBQVNGLHFCQUFULENBQStCRyxpQkFBL0IsRUFBa0Q7QUFDaEQsTUFBTUMsa0JBQWtCLEdBQUc7QUFDekIsY0FBUUMsYUFEaUI7QUFFekJDLElBQUFBLEtBQUssRUFBRUM7QUFGa0IsR0FBM0I7QUFLQTs7QUFDQSxNQUFNQyxjQUE2QyxHQUFHLFNBQWhEQSxjQUFnRCxPQU9oRDtBQUFBLFFBTkpDLE9BTUksUUFOSkEsT0FNSTtBQUFBLFFBTEpDLFFBS0ksUUFMSkEsUUFLSTtBQUFBLFFBSkpDLGdCQUlJLFFBSkpBLGdCQUlJO0FBQUEsZ0NBSEpDLFdBR0k7QUFBQSxRQUhKQSxXQUdJLGlDQUhVUixrQkFHVjtBQUFBLFFBRkpTLFdBRUksUUFGSkEsV0FFSTtBQUFBLFFBREpDLFFBQ0ksUUFESkEsUUFDSTtBQUNKLFFBQU1DLFFBQVEsR0FBRyxDQUFBRixXQUFXLFNBQVgsSUFBQUEsV0FBVyxXQUFYLFlBQUFBLFdBQVcsQ0FBRUUsUUFBYixLQUEwQixFQUEzQztBQUNBLFFBQU1DLE9BQU8sR0FBRyx3QkFDZCxVQUFBQyxLQUFLLEVBQUk7QUFDUEEsTUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0FQLE1BQUFBLGdCQUFnQixDQUFDRixPQUFPLEdBQUdDLFFBQUgsR0FBY1MsU0FBdEIsQ0FBaEI7QUFDRCxLQUphLEVBS2QsQ0FBQ1YsT0FBRCxFQUFVQyxRQUFWLEVBQW9CQyxnQkFBcEIsQ0FMYyxDQUFoQjtBQVFBLFFBQU1TLFNBQVMsR0FBRyxvQkFBUTtBQUFBLGFBQU1MLFFBQVEsQ0FBQ00sSUFBVCxJQUFpQlAsUUFBUSxLQUFLLElBQXBDO0FBQUEsS0FBUixFQUFrRCxDQUFDQyxRQUFRLENBQUNNLElBQVYsRUFBZ0JQLFFBQWhCLENBQWxELENBQWxCOztBQUVBLFFBQUksQ0FBQ0MsUUFBUSxDQUFDTSxJQUFkLEVBQW9CO0FBQ2xCLGFBQU8sSUFBUDtBQUNEOztBQUNELFdBQU9ELFNBQVMsZ0JBQ2QsZ0NBQUMsaUJBQUQ7QUFDRSxNQUFBLEVBQUUsRUFBQyxlQURMO0FBRUUsTUFBQSxPQUFPLEVBQUVYLE9BQU8sR0FBRyxvQkFBSCxHQUEwQjtBQUY1QyxvQkFJRSxnQ0FBQyxrQ0FBRDtBQUNFLE1BQUEsTUFBTSxFQUFFQSxPQURWO0FBRUUsTUFBQSxPQUFPLEVBQUVPLE9BRlg7QUFHRSxNQUFBLFNBQVMsRUFBRSw0QkFBVyxvQkFBWCxFQUFpQyxXQUFqQyxFQUE4QztBQUFDLHFCQUFhUDtBQUFkLE9BQTlDO0FBSGIsT0FLR0EsT0FBTyxnQkFBRyxnQ0FBQyxXQUFEO0FBQW9CLE1BQUEsTUFBTSxFQUFDO0FBQTNCLE1BQUgsZ0JBQTBDLGdDQUFDLFdBQUQsQ0FBYSxLQUFiO0FBQW1CLE1BQUEsTUFBTSxFQUFDO0FBQTFCLE1BTHBELENBSkYsQ0FEYyxHQWFaLElBYko7QUFjRCxHQXBDRDs7QUFzQ0FELEVBQUFBLGNBQWMsQ0FBQ2MsV0FBZixHQUE2QixnQkFBN0I7QUFDQSxzQkFBT0Msa0JBQU1DLElBQU4sQ0FBV2hCLGNBQVgsQ0FBUDtBQUNEOztlQUVjUixxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudFR5cGUsIHVzZUNhbGxiYWNrLCB1c2VNZW1vfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7TWFwQ29udHJvbEJ1dHRvbn0gZnJvbSAnLi4vY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7RGVsZXRlLCBTcGxpdH0gZnJvbSAnLi4vY29tbW9uL2ljb25zJztcbmltcG9ydCBNYXBDb250cm9sVG9vbHRpcEZhY3RvcnkgZnJvbSAnLi9tYXAtY29udHJvbC10b29sdGlwJztcbmltcG9ydCB7TWFwQ29udHJvbCwgTWFwQ29udHJvbHN9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuXG5TcGxpdE1hcEJ1dHRvbkZhY3RvcnkuZGVwcyA9IFtNYXBDb250cm9sVG9vbHRpcEZhY3RvcnldO1xuXG5pbnRlcmZhY2UgU3BsaXRNYXBCdXR0b25JY29ucyB7XG4gIGRlbGV0ZTogQ29tcG9uZW50VHlwZTxhbnk+O1xuICBzcGxpdDogQ29tcG9uZW50VHlwZTxhbnk+O1xufVxuXG5leHBvcnQgdHlwZSBTcGxpdE1hcEJ1dHRvblByb3BzID0ge1xuICBpc1NwbGl0OiBib29sZWFuO1xuICBtYXBJbmRleDogbnVtYmVyO1xuICBvblRvZ2dsZVNwbGl0TWFwOiAoaW5kZXg/OiBudW1iZXIpID0+IHZvaWQ7XG4gIGFjdGlvbkljb25zOiBTcGxpdE1hcEJ1dHRvbkljb25zO1xuICByZWFkT25seTogYm9vbGVhbjtcbiAgbWFwQ29udHJvbHM6IE1hcENvbnRyb2xzO1xufTtcblxuZnVuY3Rpb24gU3BsaXRNYXBCdXR0b25GYWN0b3J5KE1hcENvbnRyb2xUb29sdGlwKSB7XG4gIGNvbnN0IGRlZmF1bHRBY3Rpb25JY29ucyA9IHtcbiAgICBkZWxldGU6IERlbGV0ZSxcbiAgICBzcGxpdDogU3BsaXRcbiAgfTtcblxuICAvKiogQHR5cGUge2ltcG9ydCgnLi9zcGxpdC1tYXAtYnV0dG9uJykuU3BsaXRNYXBCdXR0b25Db21wb25lbnR9ICovXG4gIGNvbnN0IFNwbGl0TWFwQnV0dG9uOiBSZWFjdC5GQzxTcGxpdE1hcEJ1dHRvblByb3BzPiA9ICh7XG4gICAgaXNTcGxpdCxcbiAgICBtYXBJbmRleCxcbiAgICBvblRvZ2dsZVNwbGl0TWFwLFxuICAgIGFjdGlvbkljb25zID0gZGVmYXVsdEFjdGlvbkljb25zLFxuICAgIG1hcENvbnRyb2xzLFxuICAgIHJlYWRPbmx5XG4gIH0pID0+IHtcbiAgICBjb25zdCBzcGxpdE1hcCA9IG1hcENvbnRyb2xzPy5zcGxpdE1hcCB8fCAoe30gYXMgTWFwQ29udHJvbCk7XG4gICAgY29uc3Qgb25DbGljayA9IHVzZUNhbGxiYWNrKFxuICAgICAgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBvblRvZ2dsZVNwbGl0TWFwKGlzU3BsaXQgPyBtYXBJbmRleCA6IHVuZGVmaW5lZCk7XG4gICAgICB9LFxuICAgICAgW2lzU3BsaXQsIG1hcEluZGV4LCBvblRvZ2dsZVNwbGl0TWFwXVxuICAgICk7XG5cbiAgICBjb25zdCBpc1Zpc2libGUgPSB1c2VNZW1vKCgpID0+IHNwbGl0TWFwLnNob3cgJiYgcmVhZE9ubHkgIT09IHRydWUsIFtzcGxpdE1hcC5zaG93LCByZWFkT25seV0pO1xuXG4gICAgaWYgKCFzcGxpdE1hcC5zaG93KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGlzVmlzaWJsZSA/IChcbiAgICAgIDxNYXBDb250cm9sVG9vbHRpcFxuICAgICAgICBpZD1cImFjdGlvbi10b2dnbGVcIlxuICAgICAgICBtZXNzYWdlPXtpc1NwbGl0ID8gJ3Rvb2x0aXAuY2xvc2VQYW5lbCcgOiAndG9vbHRpcC5zd2l0Y2hUb0R1YWxWaWV3J31cbiAgICAgID5cbiAgICAgICAgPE1hcENvbnRyb2xCdXR0b25cbiAgICAgICAgICBhY3RpdmU9e2lzU3BsaXR9XG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ21hcC1jb250cm9sLWJ1dHRvbicsICdzcGxpdC1tYXAnLCB7J2Nsb3NlLW1hcCc6IGlzU3BsaXR9KX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpc1NwbGl0ID8gPGFjdGlvbkljb25zLmRlbGV0ZSBoZWlnaHQ9XCIxOHB4XCIgLz4gOiA8YWN0aW9uSWNvbnMuc3BsaXQgaGVpZ2h0PVwiMThweFwiIC8+fVxuICAgICAgICA8L01hcENvbnRyb2xCdXR0b24+XG4gICAgICA8L01hcENvbnRyb2xUb29sdGlwPlxuICAgICkgOiBudWxsO1xuICB9O1xuXG4gIFNwbGl0TWFwQnV0dG9uLmRpc3BsYXlOYW1lID0gJ1NwbGl0TWFwQnV0dG9uJztcbiAgcmV0dXJuIFJlYWN0Lm1lbW8oU3BsaXRNYXBCdXR0b24pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTcGxpdE1hcEJ1dHRvbkZhY3Rvcnk7XG4iXX0=