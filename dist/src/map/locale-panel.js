"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _toolbarItem = _interopRequireDefault(require("../common/toolbar-item"));

var _styledComponents = require("../common/styled-components");

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
LocalePanelFactory.deps = [_mapControlTooltip["default"], _mapControlToolbar["default"]];

function LocalePanelFactory(MapControlTooltip, MapControlToolbar) {
  var LocalePanel = /*#__PURE__*/_react["default"].memo(function (_ref) {
    var availableLocales = _ref.availableLocales,
        onToggleMapControl = _ref.onToggleMapControl,
        onSetLocale = _ref.onSetLocale,
        currentLocal = _ref.locale,
        mapControls = _ref.mapControls;

    var _ref2 = mapControls.mapLocale || {},
        isActive = _ref2.active,
        show = _ref2.show;

    var onClickItem = (0, _react.useCallback)(function (locale) {
      onSetLocale(locale);
    }, [onSetLocale]);
    var onClickButton = (0, _react.useCallback)(function (e) {
      e.preventDefault();
      onToggleMapControl('mapLocale');
    }, [onToggleMapControl]);
    var getLabel = (0, _react.useCallback)(function (locale) {
      return "toolbar.".concat(locale);
    }, []);

    if (!show) {
      return null;
    }

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "locale-panel-controls",
      style: {
        position: 'relative'
      }
    }, isActive ? /*#__PURE__*/_react["default"].createElement(MapControlToolbar, {
      show: isActive
    }, availableLocales.map(function (locale) {
      return /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
        key: locale,
        onClick: function onClick() {
          return onClickItem(locale);
        },
        label: getLabel(locale),
        active: currentLocal === locale
      });
    })) : null, /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
      id: "locale",
      message: "tooltip.selectLocale"
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents.MapControlButton, {
      className: (0, _classnames["default"])('map-control-button', 'locale-panel', {
        isActive: isActive
      }),
      onClick: onClickButton,
      active: isActive
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "map-control-button__locale"
    }, currentLocal.toUpperCase()))));
  });

  LocalePanel.displayName = 'LocalePanel';
  return LocalePanel;
}

var _default = LocalePanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tYXAvbG9jYWxlLXBhbmVsLnRzeCJdLCJuYW1lcyI6WyJMb2NhbGVQYW5lbEZhY3RvcnkiLCJkZXBzIiwiTWFwQ29udHJvbFRvb2x0aXBGYWN0b3J5IiwiTWFwQ29udHJvbFRvb2xiYXJGYWN0b3J5IiwiTWFwQ29udHJvbFRvb2x0aXAiLCJNYXBDb250cm9sVG9vbGJhciIsIkxvY2FsZVBhbmVsIiwiUmVhY3QiLCJtZW1vIiwiYXZhaWxhYmxlTG9jYWxlcyIsIm9uVG9nZ2xlTWFwQ29udHJvbCIsIm9uU2V0TG9jYWxlIiwiY3VycmVudExvY2FsIiwibG9jYWxlIiwibWFwQ29udHJvbHMiLCJtYXBMb2NhbGUiLCJpc0FjdGl2ZSIsImFjdGl2ZSIsInNob3ciLCJvbkNsaWNrSXRlbSIsIm9uQ2xpY2tCdXR0b24iLCJlIiwicHJldmVudERlZmF1bHQiLCJnZXRMYWJlbCIsInBvc2l0aW9uIiwibWFwIiwidG9VcHBlckNhc2UiLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV0FBLGtCQUFrQixDQUFDQyxJQUFuQixHQUEwQixDQUFDQyw2QkFBRCxFQUEyQkMsNkJBQTNCLENBQTFCOztBQVVBLFNBQVNILGtCQUFULENBQ0VJLGlCQURGLEVBRUVDLGlCQUZGLEVBR0U7QUFDQSxNQUFNQyxXQUF1QyxnQkFBR0Msa0JBQU1DLElBQU4sQ0FDOUMsZ0JBQTRGO0FBQUEsUUFBMUZDLGdCQUEwRixRQUExRkEsZ0JBQTBGO0FBQUEsUUFBeEVDLGtCQUF3RSxRQUF4RUEsa0JBQXdFO0FBQUEsUUFBcERDLFdBQW9ELFFBQXBEQSxXQUFvRDtBQUFBLFFBQS9CQyxZQUErQixRQUF2Q0MsTUFBdUM7QUFBQSxRQUFqQkMsV0FBaUIsUUFBakJBLFdBQWlCOztBQUFBLGdCQUN6REEsV0FBVyxDQUFDQyxTQUFaLElBQXlCLEVBRGdDO0FBQUEsUUFDM0VDLFFBRDJFLFNBQ25GQyxNQURtRjtBQUFBLFFBQ2pFQyxJQURpRSxTQUNqRUEsSUFEaUU7O0FBRzFGLFFBQU1DLFdBQVcsR0FBRyx3QkFDbEIsVUFBQU4sTUFBTSxFQUFJO0FBQ1JGLE1BQUFBLFdBQVcsQ0FBQ0UsTUFBRCxDQUFYO0FBQ0QsS0FIaUIsRUFJbEIsQ0FBQ0YsV0FBRCxDQUprQixDQUFwQjtBQU9BLFFBQU1TLGFBQWEsR0FBRyx3QkFDcEIsVUFBQUMsQ0FBQyxFQUFJO0FBQ0hBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBWixNQUFBQSxrQkFBa0IsQ0FBQyxXQUFELENBQWxCO0FBQ0QsS0FKbUIsRUFLcEIsQ0FBQ0Esa0JBQUQsQ0FMb0IsQ0FBdEI7QUFPQSxRQUFNYSxRQUFRLEdBQUcsd0JBQVksVUFBQVYsTUFBTTtBQUFBLCtCQUFlQSxNQUFmO0FBQUEsS0FBbEIsRUFBMkMsRUFBM0MsQ0FBakI7O0FBRUEsUUFBSSxDQUFDSyxJQUFMLEVBQVc7QUFDVCxhQUFPLElBQVA7QUFDRDs7QUFDRCx3QkFDRTtBQUFLLE1BQUEsU0FBUyxFQUFDLHVCQUFmO0FBQXVDLE1BQUEsS0FBSyxFQUFFO0FBQUNNLFFBQUFBLFFBQVEsRUFBRTtBQUFYO0FBQTlDLE9BQ0dSLFFBQVEsZ0JBQ1AsZ0NBQUMsaUJBQUQ7QUFBbUIsTUFBQSxJQUFJLEVBQUVBO0FBQXpCLE9BQ0dQLGdCQUFnQixDQUFDZ0IsR0FBakIsQ0FBcUIsVUFBQVosTUFBTTtBQUFBLDBCQUMxQixnQ0FBQyx1QkFBRDtBQUNFLFFBQUEsR0FBRyxFQUFFQSxNQURQO0FBRUUsUUFBQSxPQUFPLEVBQUU7QUFBQSxpQkFBTU0sV0FBVyxDQUFDTixNQUFELENBQWpCO0FBQUEsU0FGWDtBQUdFLFFBQUEsS0FBSyxFQUFFVSxRQUFRLENBQUNWLE1BQUQsQ0FIakI7QUFJRSxRQUFBLE1BQU0sRUFBRUQsWUFBWSxLQUFLQztBQUozQixRQUQwQjtBQUFBLEtBQTNCLENBREgsQ0FETyxHQVdMLElBWk4sZUFhRSxnQ0FBQyxpQkFBRDtBQUFtQixNQUFBLEVBQUUsRUFBQyxRQUF0QjtBQUErQixNQUFBLE9BQU8sRUFBQztBQUF2QyxvQkFDRSxnQ0FBQyxrQ0FBRDtBQUNFLE1BQUEsU0FBUyxFQUFFLDRCQUFXLG9CQUFYLEVBQWlDLGNBQWpDLEVBQWlEO0FBQUNHLFFBQUFBLFFBQVEsRUFBUkE7QUFBRCxPQUFqRCxDQURiO0FBRUUsTUFBQSxPQUFPLEVBQUVJLGFBRlg7QUFHRSxNQUFBLE1BQU0sRUFBRUo7QUFIVixvQkFLRTtBQUFNLE1BQUEsU0FBUyxFQUFDO0FBQWhCLE9BQThDSixZQUFZLENBQUNjLFdBQWIsRUFBOUMsQ0FMRixDQURGLENBYkYsQ0FERjtBQXlCRCxHQWhENkMsQ0FBaEQ7O0FBbURBcEIsRUFBQUEsV0FBVyxDQUFDcUIsV0FBWixHQUEwQixhQUExQjtBQUVBLFNBQU9yQixXQUFQO0FBQ0Q7O2VBRWNOLGtCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5pbXBvcnQgVG9vbGJhckl0ZW0gZnJvbSAnLi4vY29tbW9uL3Rvb2xiYXItaXRlbSc7XG5pbXBvcnQge01hcENvbnRyb2xCdXR0b259IGZyb20gJy4uL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTWFwQ29udHJvbFRvb2x0aXBGYWN0b3J5IGZyb20gJy4vbWFwLWNvbnRyb2wtdG9vbHRpcCc7XG5pbXBvcnQgTWFwQ29udHJvbFRvb2xiYXJGYWN0b3J5IGZyb20gJy4vbWFwLWNvbnRyb2wtdG9vbGJhcic7XG5pbXBvcnQge01hcENvbnRyb2xzfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcblxuTG9jYWxlUGFuZWxGYWN0b3J5LmRlcHMgPSBbTWFwQ29udHJvbFRvb2x0aXBGYWN0b3J5LCBNYXBDb250cm9sVG9vbGJhckZhY3RvcnldO1xuXG5leHBvcnQgdHlwZSBMb2NhbGVQYW5lbFByb3BzID0ge1xuICBhdmFpbGFibGVMb2NhbGVzOiBSZWFkb25seUFycmF5PHN0cmluZz47XG4gIG9uU2V0TG9jYWxlOiAobG9jYWxlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGxvY2FsZTogc3RyaW5nO1xuICBvblRvZ2dsZU1hcENvbnRyb2w6IChjb250cm9sOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG1hcENvbnRyb2xzOiBNYXBDb250cm9scztcbn07XG5cbmZ1bmN0aW9uIExvY2FsZVBhbmVsRmFjdG9yeShcbiAgTWFwQ29udHJvbFRvb2x0aXA6IFJldHVyblR5cGU8dHlwZW9mIE1hcENvbnRyb2xUb29sdGlwRmFjdG9yeT4sXG4gIE1hcENvbnRyb2xUb29sYmFyOiBSZXR1cm5UeXBlPHR5cGVvZiBNYXBDb250cm9sVG9vbGJhckZhY3Rvcnk+XG4pIHtcbiAgY29uc3QgTG9jYWxlUGFuZWw6IFJlYWN0LkZDPExvY2FsZVBhbmVsUHJvcHM+ID0gUmVhY3QubWVtbyhcbiAgICAoe2F2YWlsYWJsZUxvY2FsZXMsIG9uVG9nZ2xlTWFwQ29udHJvbCwgb25TZXRMb2NhbGUsIGxvY2FsZTogY3VycmVudExvY2FsLCBtYXBDb250cm9sc30pID0+IHtcbiAgICAgIGNvbnN0IHthY3RpdmU6IGlzQWN0aXZlLCBzaG93fSA9IG1hcENvbnRyb2xzLm1hcExvY2FsZSB8fCB7fTtcblxuICAgICAgY29uc3Qgb25DbGlja0l0ZW0gPSB1c2VDYWxsYmFjayhcbiAgICAgICAgbG9jYWxlID0+IHtcbiAgICAgICAgICBvblNldExvY2FsZShsb2NhbGUpO1xuICAgICAgICB9LFxuICAgICAgICBbb25TZXRMb2NhbGVdXG4gICAgICApO1xuXG4gICAgICBjb25zdCBvbkNsaWNrQnV0dG9uID0gdXNlQ2FsbGJhY2soXG4gICAgICAgIGUgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBvblRvZ2dsZU1hcENvbnRyb2woJ21hcExvY2FsZScpO1xuICAgICAgICB9LFxuICAgICAgICBbb25Ub2dnbGVNYXBDb250cm9sXVxuICAgICAgKTtcbiAgICAgIGNvbnN0IGdldExhYmVsID0gdXNlQ2FsbGJhY2sobG9jYWxlID0+IGB0b29sYmFyLiR7bG9jYWxlfWAsIFtdKTtcblxuICAgICAgaWYgKCFzaG93KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhbGUtcGFuZWwtY29udHJvbHNcIiBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnfX0+XG4gICAgICAgICAge2lzQWN0aXZlID8gKFxuICAgICAgICAgICAgPE1hcENvbnRyb2xUb29sYmFyIHNob3c9e2lzQWN0aXZlfT5cbiAgICAgICAgICAgICAge2F2YWlsYWJsZUxvY2FsZXMubWFwKGxvY2FsZSA9PiAoXG4gICAgICAgICAgICAgICAgPFRvb2xiYXJJdGVtXG4gICAgICAgICAgICAgICAgICBrZXk9e2xvY2FsZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2tJdGVtKGxvY2FsZSl9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17Z2V0TGFiZWwobG9jYWxlKX1cbiAgICAgICAgICAgICAgICAgIGFjdGl2ZT17Y3VycmVudExvY2FsID09PSBsb2NhbGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L01hcENvbnRyb2xUb29sYmFyPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDxNYXBDb250cm9sVG9vbHRpcCBpZD1cImxvY2FsZVwiIG1lc3NhZ2U9XCJ0b29sdGlwLnNlbGVjdExvY2FsZVwiPlxuICAgICAgICAgICAgPE1hcENvbnRyb2xCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdtYXAtY29udHJvbC1idXR0b24nLCAnbG9jYWxlLXBhbmVsJywge2lzQWN0aXZlfSl9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tCdXR0b259XG4gICAgICAgICAgICAgIGFjdGl2ZT17aXNBY3RpdmV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1hcC1jb250cm9sLWJ1dHRvbl9fbG9jYWxlXCI+e2N1cnJlbnRMb2NhbC50b1VwcGVyQ2FzZSgpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvTWFwQ29udHJvbEJ1dHRvbj5cbiAgICAgICAgICA8L01hcENvbnRyb2xUb29sdGlwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICApO1xuXG4gIExvY2FsZVBhbmVsLmRpc3BsYXlOYW1lID0gJ0xvY2FsZVBhbmVsJztcblxuICByZXR1cm4gTG9jYWxlUGFuZWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsZVBhbmVsRmFjdG9yeTtcbiJdfQ==