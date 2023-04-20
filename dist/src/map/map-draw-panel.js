"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = require("@kepler.gl/constants");

var _icons = require("../common/icons");

var _styledComponents = require("../common/styled-components");

var _toolbarItem = _interopRequireDefault(require("../common/toolbar-item"));

var _mapControlTooltip = _interopRequireDefault(require("./map-control-tooltip"));

var _mapControlToolbar = _interopRequireDefault(require("./map-control-toolbar"));

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
MapDrawPanelFactory.deps = [_mapControlTooltip["default"], _mapControlToolbar["default"]];

function MapDrawPanelFactory(MapControlTooltip, MapControlToolbar) {
  var defaultActionIcons = {
    visible: _icons.EyeSeen,
    hidden: _icons.EyeUnseen,
    polygon: _icons.DrawPolygon,
    cursor: _icons.CursorClick,
    innerPolygon: _icons.Polygon,
    rectangle: _icons.Rectangle
  };
  /** @type {import('./map-draw-panel').MapDrawPanelComponent} */

  var MapDrawPanel = /*#__PURE__*/_react["default"].memo(function (_ref) {
    var _mapControls$mapDraw, _mapControls$mapDraw2;

    var editor = _ref.editor,
        mapControls = _ref.mapControls,
        onToggleMapControl = _ref.onToggleMapControl,
        onSetEditorMode = _ref.onSetEditorMode,
        _ref$actionIcons = _ref.actionIcons,
        actionIcons = _ref$actionIcons === void 0 ? defaultActionIcons : _ref$actionIcons;
    var isActive = mapControls === null || mapControls === void 0 ? void 0 : (_mapControls$mapDraw = mapControls.mapDraw) === null || _mapControls$mapDraw === void 0 ? void 0 : _mapControls$mapDraw.active;
    var onToggleMenuPanel = (0, _react.useCallback)(function () {
      return onToggleMapControl('mapDraw');
    }, [onToggleMapControl]);

    if (!(mapControls !== null && mapControls !== void 0 && (_mapControls$mapDraw2 = mapControls.mapDraw) !== null && _mapControls$mapDraw2 !== void 0 && _mapControls$mapDraw2.show)) {
      return null;
    }

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "map-draw-controls",
      style: {
        position: 'relative'
      }
    }, isActive ? /*#__PURE__*/_react["default"].createElement(MapControlToolbar, {
      show: isActive
    }, /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
      className: "edit-feature",
      onClick: function onClick() {
        return onSetEditorMode(_constants.EDITOR_MODES.EDIT);
      },
      label: "toolbar.select",
      icon: actionIcons.cursor,
      active: editor.mode === _constants.EDITOR_MODES.EDIT
    }), /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
      className: "draw-feature",
      onClick: function onClick() {
        return onSetEditorMode(_constants.EDITOR_MODES.DRAW_POLYGON);
      },
      label: "toolbar.polygon",
      icon: actionIcons.innerPolygon,
      active: editor.mode === _constants.EDITOR_MODES.DRAW_POLYGON
    }), /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
      className: "draw-rectangle",
      onClick: function onClick() {
        return onSetEditorMode(_constants.EDITOR_MODES.DRAW_RECTANGLE);
      },
      label: "toolbar.rectangle",
      icon: actionIcons.rectangle,
      active: editor.mode === _constants.EDITOR_MODES.DRAW_RECTANGLE
    })) : null, /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
      id: "map-draw",
      message: "tooltip.DrawOnMap"
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents.MapControlButton, {
      className: (0, _classnames["default"])('map-control-button', 'map-draw', {
        isActive: isActive
      }),
      onClick: function onClick(e) {
        e.preventDefault();
        onToggleMenuPanel();
      },
      active: isActive
    }, /*#__PURE__*/_react["default"].createElement(actionIcons.polygon, {
      height: "22px"
    }))));
  });

  MapDrawPanel.displayName = 'MapDrawPanel';
  return MapDrawPanel;
}

var _default = MapDrawPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tYXAvbWFwLWRyYXctcGFuZWwudHN4Il0sIm5hbWVzIjpbIk1hcERyYXdQYW5lbEZhY3RvcnkiLCJkZXBzIiwiTWFwQ29udHJvbFRvb2x0aXBGYWN0b3J5IiwiTWFwQ29udHJvbFRvb2xiYXJGYWN0b3J5IiwiTWFwQ29udHJvbFRvb2x0aXAiLCJNYXBDb250cm9sVG9vbGJhciIsImRlZmF1bHRBY3Rpb25JY29ucyIsInZpc2libGUiLCJFeWVTZWVuIiwiaGlkZGVuIiwiRXllVW5zZWVuIiwicG9seWdvbiIsIkRyYXdQb2x5Z29uIiwiY3Vyc29yIiwiQ3Vyc29yQ2xpY2siLCJpbm5lclBvbHlnb24iLCJQb2x5Z29uIiwicmVjdGFuZ2xlIiwiUmVjdGFuZ2xlIiwiTWFwRHJhd1BhbmVsIiwiUmVhY3QiLCJtZW1vIiwiZWRpdG9yIiwibWFwQ29udHJvbHMiLCJvblRvZ2dsZU1hcENvbnRyb2wiLCJvblNldEVkaXRvck1vZGUiLCJhY3Rpb25JY29ucyIsImlzQWN0aXZlIiwibWFwRHJhdyIsImFjdGl2ZSIsIm9uVG9nZ2xlTWVudVBhbmVsIiwic2hvdyIsInBvc2l0aW9uIiwiRURJVE9SX01PREVTIiwiRURJVCIsIm1vZGUiLCJEUkFXX1BPTFlHT04iLCJEUkFXX1JFQ1RBTkdMRSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUE1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFjQUEsbUJBQW1CLENBQUNDLElBQXBCLEdBQTJCLENBQUNDLDZCQUFELEVBQTJCQyw2QkFBM0IsQ0FBM0I7O0FBV0EsU0FBU0gsbUJBQVQsQ0FBNkJJLGlCQUE3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QyxDQURiO0FBRUUsTUFBQSxPQUFPLEVBQUUsaUJBQUFXLENBQUMsRUFBSTtBQUNaQSxRQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQVQsUUFBQUEsaUJBQWlCO0FBQ2xCLE9BTEg7QUFNRSxNQUFBLE1BQU0sRUFBRUg7QUFOVixvQkFRRSxnQ0FBQyxXQUFELENBQWEsT0FBYjtBQUFxQixNQUFBLE1BQU0sRUFBQztBQUE1QixNQVJGLENBREYsQ0ExQkYsQ0FERjtBQXlDRCxHQXhEK0MsQ0FBbEQ7O0FBMkRBUixFQUFBQSxZQUFZLENBQUNxQixXQUFiLEdBQTJCLGNBQTNCO0FBQ0EsU0FBT3JCLFlBQVA7QUFDRDs7ZUFFY25CLG1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQge0VESVRPUl9NT0RFU30gZnJvbSAnQGtlcGxlci5nbC9jb25zdGFudHMnO1xuaW1wb3J0IHtDdXJzb3JDbGljaywgRHJhd1BvbHlnb24sIEV5ZVNlZW4sIEV5ZVVuc2VlbiwgUG9seWdvbiwgUmVjdGFuZ2xlfSBmcm9tICcuLi9jb21tb24vaWNvbnMnO1xuaW1wb3J0IHtNYXBDb250cm9sQnV0dG9ufSBmcm9tICcuLi9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFRvb2xiYXJJdGVtIGZyb20gJy4uL2NvbW1vbi90b29sYmFyLWl0ZW0nO1xuaW1wb3J0IE1hcENvbnRyb2xUb29sdGlwRmFjdG9yeSBmcm9tICcuL21hcC1jb250cm9sLXRvb2x0aXAnO1xuaW1wb3J0IE1hcENvbnRyb2xUb29sYmFyRmFjdG9yeSBmcm9tICcuL21hcC1jb250cm9sLXRvb2xiYXInO1xuaW1wb3J0IHtFZGl0b3IsIE1hcENvbnRyb2xzfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcbmltcG9ydCB7QmFzZVByb3BzfSBmcm9tICcuLi9jb21tb24vaWNvbnMnO1xuXG5NYXBEcmF3UGFuZWxGYWN0b3J5LmRlcHMgPSBbTWFwQ29udHJvbFRvb2x0aXBGYWN0b3J5LCBNYXBDb250cm9sVG9vbGJhckZhY3RvcnldO1xuXG5leHBvcnQgdHlwZSBNYXBEcmF3UGFuZWxQcm9wcyA9IHtcbiAgZWRpdG9yOiBFZGl0b3I7XG4gIG1hcENvbnRyb2xzOiBNYXBDb250cm9scztcbiAgb25Ub2dnbGVNYXBDb250cm9sOiAoY29udHJvbDogc3RyaW5nKSA9PiB2b2lkO1xuICBvblNldEVkaXRvck1vZGU6IChtb2RlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uVG9nZ2xlRWRpdG9yVmlzaWJpbGl0eTogKCkgPT4gdm9pZDtcbiAgYWN0aW9uSWNvbnM6IHtbaWQ6IHN0cmluZ106IFJlYWN0LkNvbXBvbmVudFR5cGU8UGFydGlhbDxCYXNlUHJvcHM+Pn07XG59O1xuXG5mdW5jdGlvbiBNYXBEcmF3UGFuZWxGYWN0b3J5KE1hcENvbnRyb2xUb29sdGlwLCBNYXBDb250cm9sVG9vbGJhcikge1xuICBjb25zdCBkZWZhdWx0QWN0aW9uSWNvbnMgPSB7XG4gICAgdmlzaWJsZTogRXllU2VlbixcbiAgICBoaWRkZW46IEV5ZVVuc2VlbixcbiAgICBwb2x5Z29uOiBEcmF3UG9seWdvbixcbiAgICBjdXJzb3I6IEN1cnNvckNsaWNrLFxuICAgIGlubmVyUG9seWdvbjogUG9seWdvbixcbiAgICByZWN0YW5nbGU6IFJlY3RhbmdsZVxuICB9O1xuICAvKiogQHR5cGUge2ltcG9ydCgnLi9tYXAtZHJhdy1wYW5lbCcpLk1hcERyYXdQYW5lbENvbXBvbmVudH0gKi9cbiAgY29uc3QgTWFwRHJhd1BhbmVsOiBSZWFjdC5GQzxNYXBEcmF3UGFuZWxQcm9wcz4gPSBSZWFjdC5tZW1vKFxuICAgICh7XG4gICAgICBlZGl0b3IsXG4gICAgICBtYXBDb250cm9scyxcbiAgICAgIG9uVG9nZ2xlTWFwQ29udHJvbCxcbiAgICAgIG9uU2V0RWRpdG9yTW9kZSxcbiAgICAgIGFjdGlvbkljb25zID0gZGVmYXVsdEFjdGlvbkljb25zXG4gICAgfSkgPT4ge1xuICAgICAgY29uc3QgaXNBY3RpdmUgPSBtYXBDb250cm9scz8ubWFwRHJhdz8uYWN0aXZlO1xuICAgICAgY29uc3Qgb25Ub2dnbGVNZW51UGFuZWwgPSB1c2VDYWxsYmFjaygoKSA9PiBvblRvZ2dsZU1hcENvbnRyb2woJ21hcERyYXcnKSwgW1xuICAgICAgICBvblRvZ2dsZU1hcENvbnRyb2xcbiAgICAgIF0pO1xuICAgICAgaWYgKCFtYXBDb250cm9scz8ubWFwRHJhdz8uc2hvdykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFwLWRyYXctY29udHJvbHNcIiBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnfX0+XG4gICAgICAgICAge2lzQWN0aXZlID8gKFxuICAgICAgICAgICAgPE1hcENvbnRyb2xUb29sYmFyIHNob3c9e2lzQWN0aXZlfT5cbiAgICAgICAgICAgICAgPFRvb2xiYXJJdGVtXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZWRpdC1mZWF0dXJlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNldEVkaXRvck1vZGUoRURJVE9SX01PREVTLkVESVQpfVxuICAgICAgICAgICAgICAgIGxhYmVsPVwidG9vbGJhci5zZWxlY3RcIlxuICAgICAgICAgICAgICAgIGljb249e2FjdGlvbkljb25zLmN1cnNvcn1cbiAgICAgICAgICAgICAgICBhY3RpdmU9e2VkaXRvci5tb2RlID09PSBFRElUT1JfTU9ERVMuRURJVH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRvb2xiYXJJdGVtXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJhdy1mZWF0dXJlXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblNldEVkaXRvck1vZGUoRURJVE9SX01PREVTLkRSQVdfUE9MWUdPTil9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJ0b29sYmFyLnBvbHlnb25cIlxuICAgICAgICAgICAgICAgIGljb249e2FjdGlvbkljb25zLmlubmVyUG9seWdvbn1cbiAgICAgICAgICAgICAgICBhY3RpdmU9e2VkaXRvci5tb2RlID09PSBFRElUT1JfTU9ERVMuRFJBV19QT0xZR09OfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VG9vbGJhckl0ZW1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcmF3LXJlY3RhbmdsZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZXRFZGl0b3JNb2RlKEVESVRPUl9NT0RFUy5EUkFXX1JFQ1RBTkdMRSl9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJ0b29sYmFyLnJlY3RhbmdsZVwiXG4gICAgICAgICAgICAgICAgaWNvbj17YWN0aW9uSWNvbnMucmVjdGFuZ2xlfVxuICAgICAgICAgICAgICAgIGFjdGl2ZT17ZWRpdG9yLm1vZGUgPT09IEVESVRPUl9NT0RFUy5EUkFXX1JFQ1RBTkdMRX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTWFwQ29udHJvbFRvb2xiYXI+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPE1hcENvbnRyb2xUb29sdGlwIGlkPVwibWFwLWRyYXdcIiBtZXNzYWdlPVwidG9vbHRpcC5EcmF3T25NYXBcIj5cbiAgICAgICAgICAgIDxNYXBDb250cm9sQnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbWFwLWNvbnRyb2wtYnV0dG9uJywgJ21hcC1kcmF3Jywge2lzQWN0aXZlfSl9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBvblRvZ2dsZU1lbnVQYW5lbCgpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhY3RpdmU9e2lzQWN0aXZlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YWN0aW9uSWNvbnMucG9seWdvbiBoZWlnaHQ9XCIyMnB4XCIgLz5cbiAgICAgICAgICAgIDwvTWFwQ29udHJvbEJ1dHRvbj5cbiAgICAgICAgICA8L01hcENvbnRyb2xUb29sdGlwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICApO1xuXG4gIE1hcERyYXdQYW5lbC5kaXNwbGF5TmFtZSA9ICdNYXBEcmF3UGFuZWwnO1xuICByZXR1cm4gTWFwRHJhd1BhbmVsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYXBEcmF3UGFuZWxGYWN0b3J5O1xuIl19