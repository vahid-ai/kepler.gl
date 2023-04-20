"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _localization = require("@kepler.gl/localization");

var _styledComponents2 = require("../common/styled-components");

var _icons = require("../common/icons");

var _switch = _interopRequireDefault(require("../common/switch"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

var StyledMapControlPanel = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  flex-grow: 1;\n  z-index: 1;\n  p {\n    margin-bottom: 0;\n  }\n"])), function (props) {
  return props.theme.mapPanelBackgroundColor;
});

var StyledMapControlPanelContent = _styledComponents["default"].div.attrs({
  className: 'map-control__panel-content'
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  max-height: 500px;\n  min-height: 100px;\n  min-width: ", "px;\n  overflow: overlay;\n"])), function (props) {
  return props.theme.dropdownScrollBar;
}, function (props) {
  return props.theme.mapControl.width;
});

var StyledMapControlPanelHeader = _styledComponents["default"].div.attrs({
  className: 'map-control__panel-header'
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  background-color: ", ";\n  height: 32px;\n  padding: 6px 12px;\n  font-family: ", ";\n  font-size: 11px;\n  color: ", ";\n  position: relative;\n  box-sizing: border-box;\n\n  button {\n    width: 18px;\n    height: 18px;\n  }\n"])), function (props) {
  return props.theme.mapPanelHeaderBackgroundColor;
}, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.titleTextColor;
});

var StyledMapControlPanelHeaderSplitViewportsTools = (0, _styledComponents["default"])(StyledMapControlPanelHeader)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: self-start;\n  height: unset;\n"])));
var StyledSBCenterFlexbox = (0, _styledComponents["default"])(_styledComponents2.CenterFlexbox)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  justify-content: space-between;\n  flex-direction: row;\n"])));

var StyledDisableableText = _styledComponents["default"].span(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  opacity: ", ";\n  pointer-events: ", ";\n"])), function (props) {
  return props.disabled ? 0.4 : 1;
}, function (props) {
  return props.disabled ? 'none' : 'all';
});

var StyledDisableableSwitch = (0, _styledComponents["default"])(_switch["default"])(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  opacity: ", ";\n  pointer-events: ", ";\n"])), function (props) {
  return props.disabled ? 0.4 : 1;
}, function (props) {
  return props.disabled ? 'none' : 'all';
});
var StyledIcon = (0, _styledComponents["default"])(_styledComponents2.IconRoundSmall)(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  background-color: transparent;\n\n  :hover {\n    cursor: pointer;\n    background-color: transparent;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.activeColor;
}, function (props) {
  return props.theme.linkBtnColor;
});

function MapControlPanelFactory() {
  var MapControlPanel = /*#__PURE__*/_react["default"].memo(function (_ref) {
    var children = _ref.children,
        header = _ref.header,
        pinnable = _ref.pinnable,
        disableClose = _ref.disableClose,
        onPinClick = _ref.onPinClick,
        onClick = _ref.onClick,
        _ref$scale = _ref.scale,
        scale = _ref$scale === void 0 ? 1 : _ref$scale,
        isExport = _ref.isExport,
        logoComponent = _ref.logoComponent,
        mapState = _ref.mapState,
        onToggleSplitMapViewport = _ref.onToggleSplitMapViewport,
        isViewportUnsyncAllowed = _ref.isViewportUnsyncAllowed;

    var _ref2 = mapState || {},
        isViewportSynced = _ref2.isViewportSynced,
        isZoomLocked = _ref2.isZoomLocked;

    var onUnlockViewportChange = (0, _react.useCallback)(function () {
      onToggleSplitMapViewport === null || onToggleSplitMapViewport === void 0 ? void 0 : onToggleSplitMapViewport({
        isViewportSynced: !isViewportSynced
      });
    }, [isViewportSynced, onToggleSplitMapViewport]);
    var onSyncZoomChange = (0, _react.useCallback)(function () {
      onToggleSplitMapViewport === null || onToggleSplitMapViewport === void 0 ? void 0 : onToggleSplitMapViewport({
        isZoomLocked: !isZoomLocked
      });
    }, [isZoomLocked, onToggleSplitMapViewport]);
    return /*#__PURE__*/_react["default"].createElement(StyledMapControlPanel, {
      className: "map-control-panel",
      style: {
        transform: "scale(".concat(scale, ")"),
        marginBottom: '8px !important'
      }
    }, mapState !== null && mapState !== void 0 && mapState.isSplit && isViewportUnsyncAllowed ? /*#__PURE__*/_react["default"].createElement(StyledMapControlPanelHeaderSplitViewportsTools, null, /*#__PURE__*/_react["default"].createElement(StyledSBCenterFlexbox, {
      style: {
        paddingBottom: '6px'
      }
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: "Unlock Viewport"
    }), /*#__PURE__*/_react["default"].createElement(StyledDisableableSwitch, {
      checked: !(mapState !== null && mapState !== void 0 && mapState.isViewportSynced),
      id: "unlock-viewport-toggle",
      onChange: onUnlockViewportChange
    })), /*#__PURE__*/_react["default"].createElement(StyledSBCenterFlexbox, null, /*#__PURE__*/_react["default"].createElement(StyledDisableableText, {
      disabled: mapState === null || mapState === void 0 ? void 0 : mapState.isViewportSynced
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: "Sync Zoom"
    })), /*#__PURE__*/_react["default"].createElement(StyledDisableableSwitch, {
      checked: mapState === null || mapState === void 0 ? void 0 : mapState.isZoomLocked,
      id: "sync-zoom-toggle",
      onChange: onSyncZoomChange,
      disabled: mapState === null || mapState === void 0 ? void 0 : mapState.isViewportSynced
    }))) : null, /*#__PURE__*/_react["default"].createElement(StyledMapControlPanelHeader, null, isExport && logoComponent ? logoComponent : header ? /*#__PURE__*/_react["default"].createElement("span", {
      style: {
        verticalAlign: 'middle'
      }
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: header
    })) : null, isExport ? null : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, pinnable && /*#__PURE__*/_react["default"].createElement(StyledIcon, {
      className: "pin-map-control-item",
      onClick: onPinClick
    }, /*#__PURE__*/_react["default"].createElement(_icons.Pin, {
      height: "16px"
    })), disableClose ? null : /*#__PURE__*/_react["default"].createElement(StyledIcon, {
      className: "close-map-control-item",
      onClick: onClick
    }, /*#__PURE__*/_react["default"].createElement(_icons.Close, {
      height: "16px"
    })))), /*#__PURE__*/_react["default"].createElement(StyledMapControlPanelContent, null, children));
  });

  MapControlPanel.displayName = 'MapControlPanel';
  return MapControlPanel;
}

var _default = MapControlPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tYXAvbWFwLWNvbnRyb2wtcGFuZWwudHN4Il0sIm5hbWVzIjpbIlN0eWxlZE1hcENvbnRyb2xQYW5lbCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJtYXBQYW5lbEJhY2tncm91bmRDb2xvciIsIlN0eWxlZE1hcENvbnRyb2xQYW5lbENvbnRlbnQiLCJhdHRycyIsImNsYXNzTmFtZSIsImRyb3Bkb3duU2Nyb2xsQmFyIiwibWFwQ29udHJvbCIsIndpZHRoIiwiU3R5bGVkTWFwQ29udHJvbFBhbmVsSGVhZGVyIiwibWFwUGFuZWxIZWFkZXJCYWNrZ3JvdW5kQ29sb3IiLCJmb250RmFtaWx5IiwidGl0bGVUZXh0Q29sb3IiLCJTdHlsZWRNYXBDb250cm9sUGFuZWxIZWFkZXJTcGxpdFZpZXdwb3J0c1Rvb2xzIiwiU3R5bGVkU0JDZW50ZXJGbGV4Ym94IiwiQ2VudGVyRmxleGJveCIsIlN0eWxlZERpc2FibGVhYmxlVGV4dCIsInNwYW4iLCJkaXNhYmxlZCIsIlN0eWxlZERpc2FibGVhYmxlU3dpdGNoIiwiU3dpdGNoIiwiU3R5bGVkSWNvbiIsIkljb25Sb3VuZFNtYWxsIiwiYWN0aXZlQ29sb3IiLCJsaW5rQnRuQ29sb3IiLCJNYXBDb250cm9sUGFuZWxGYWN0b3J5IiwiTWFwQ29udHJvbFBhbmVsIiwiUmVhY3QiLCJtZW1vIiwiY2hpbGRyZW4iLCJoZWFkZXIiLCJwaW5uYWJsZSIsImRpc2FibGVDbG9zZSIsIm9uUGluQ2xpY2siLCJvbkNsaWNrIiwic2NhbGUiLCJpc0V4cG9ydCIsImxvZ29Db21wb25lbnQiLCJtYXBTdGF0ZSIsIm9uVG9nZ2xlU3BsaXRNYXBWaWV3cG9ydCIsImlzVmlld3BvcnRVbnN5bmNBbGxvd2VkIiwiaXNWaWV3cG9ydFN5bmNlZCIsImlzWm9vbUxvY2tlZCIsIm9uVW5sb2NrVmlld3BvcnRDaGFuZ2UiLCJvblN5bmNab29tQ2hhbmdlIiwidHJhbnNmb3JtIiwibWFyZ2luQm90dG9tIiwiaXNTcGxpdCIsInBhZGRpbmdCb3R0b20iLCJ2ZXJ0aWNhbEFsaWduIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFJQSxJQUFNQSxxQkFBcUIsR0FBR0MsNkJBQU9DLEdBQVYsdUxBQ0wsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyx1QkFBaEI7QUFBQSxDQURBLENBQTNCOztBQVNBLElBQU1DLDRCQUE0QixHQUFHTCw2QkFBT0MsR0FBUCxDQUFXSyxLQUFYLENBQWlCO0FBQ3BEQyxFQUFBQSxTQUFTLEVBQUU7QUFEeUMsQ0FBakIsQ0FBSCw0TEFHOUIsVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxpQkFBaEI7QUFBQSxDQUh5QixFQU1uQixVQUFBTixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlNLFVBQVosQ0FBdUJDLEtBQTNCO0FBQUEsQ0FOYyxDQUFsQzs7QUFVQSxJQUFNQywyQkFBMkIsR0FBR1gsNkJBQU9DLEdBQVAsQ0FBV0ssS0FBWCxDQUFpQjtBQUNuREMsRUFBQUEsU0FBUyxFQUFFO0FBRHdDLENBQWpCLENBQUgsc1hBS1gsVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZUyw2QkFBaEI7QUFBQSxDQUxNLEVBUWhCLFVBQUFWLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVUsVUFBaEI7QUFBQSxDQVJXLEVBVXRCLFVBQUFYLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVcsY0FBaEI7QUFBQSxDQVZpQixDQUFqQzs7QUFvQkEsSUFBTUMsOENBQThDLEdBQUcsa0NBQU9KLDJCQUFQLENBQUgsd05BQXBEO0FBUUEsSUFBTUsscUJBQXFCLEdBQUcsa0NBQU9DLGdDQUFQLENBQUgscUtBQTNCOztBQVVBLElBQU1DLHFC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R0QsWUFBWSxHQUFHLElBQUgsZ0JBQ1gsZ0NBQUMsVUFBRDtBQUFZLE1BQUEsU0FBUyxFQUFDLHdCQUF0QjtBQUErQyxNQUFBLE9BQU8sRUFBRUU7QUFBeEQsb0JBQ0UsZ0NBQUMsWUFBRDtBQUFPLE1BQUEsTUFBTSxFQUFDO0FBQWQsTUFERixDQVBKLENBVEosQ0EvQkYsZUFzREUsZ0NBQUMsNEJBQUQsUUFBK0JMLFFBQS9CLENBdERGLENBREY7QUEwREQsR0FsRnFELENBQXhEOztBQXFGQUgsRUFBQUEsZUFBZSxDQUFDd0IsV0FBaEIsR0FBOEIsaUJBQTlCO0FBRUEsU0FBT3hCLGVBQVA7QUFDRDs7ZUFFY0Qsc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ0BrZXBsZXIuZ2wvbG9jYWxpemF0aW9uJztcbmltcG9ydCB7Q2VudGVyRmxleGJveCwgSWNvblJvdW5kU21hbGx9IGZyb20gJy4uL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0Nsb3NlLCBQaW59IGZyb20gJy4uL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJy4uL2NvbW1vbi9zd2l0Y2gnO1xuaW1wb3J0IHtNYXBTdGF0ZX0gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5pbXBvcnQge0FjdGlvbkhhbmRsZXIsIHRvZ2dsZVNwbGl0TWFwVmlld3BvcnR9IGZyb20gJ0BrZXBsZXIuZ2wvYWN0aW9ucyc7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xQYW5lbCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWFwUGFuZWxCYWNrZ3JvdW5kQ29sb3J9O1xuICBmbGV4LWdyb3c6IDE7XG4gIHotaW5kZXg6IDE7XG4gIHAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xQYW5lbENvbnRlbnQgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnbWFwLWNvbnRyb2xfX3BhbmVsLWNvbnRlbnQnXG59KWBcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93blNjcm9sbEJhcn07XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgbWluLXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcENvbnRyb2wud2lkdGh9cHg7XG4gIG92ZXJmbG93OiBvdmVybGF5O1xuYDtcblxuY29uc3QgU3R5bGVkTWFwQ29udHJvbFBhbmVsSGVhZGVyID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ21hcC1jb250cm9sX19wYW5lbC1oZWFkZXInXG59KWBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1hcFBhbmVsSGVhZGVyQmFja2dyb3VuZENvbG9yfTtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udEZhbWlseX07XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGl0bGVUZXh0Q29sb3J9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgYnV0dG9uIHtcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZE1hcENvbnRyb2xQYW5lbEhlYWRlclNwbGl0Vmlld3BvcnRzVG9vbHMgPSBzdHlsZWQoU3R5bGVkTWFwQ29udHJvbFBhbmVsSGVhZGVyKWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogc2VsZi1zdGFydDtcbiAgaGVpZ2h0OiB1bnNldDtcbmA7XG5cbmNvbnN0IFN0eWxlZFNCQ2VudGVyRmxleGJveCA9IHN0eWxlZChDZW50ZXJGbGV4Ym94KWBcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbmA7XG5cbmludGVyZmFjZSBTdHlsZWREaXNhYmxlYWJsZVRleHRQcm9wcyB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuY29uc3QgU3R5bGVkRGlzYWJsZWFibGVUZXh0ID0gc3R5bGVkLnNwYW48U3R5bGVkRGlzYWJsZWFibGVUZXh0UHJvcHM+YFxuICBvcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/IDAuNCA6IDEpfTtcbiAgcG9pbnRlci1ldmVudHM6ICR7cHJvcHMgPT4gKHByb3BzLmRpc2FibGVkID8gJ25vbmUnIDogJ2FsbCcpfTtcbmA7XG5cbmNvbnN0IFN0eWxlZERpc2FibGVhYmxlU3dpdGNoID0gc3R5bGVkKFN3aXRjaClgXG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLmRpc2FibGVkID8gMC40IDogMSl9O1xuICBwb2ludGVyLWV2ZW50czogJHtwcm9wcyA9PiAocHJvcHMuZGlzYWJsZWQgPyAnbm9uZScgOiAnYWxsJyl9O1xuYDtcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZChJY29uUm91bmRTbWFsbClgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmFjdGl2ZUNvbG9yfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGlua0J0bkNvbG9yfTtcbiAgfVxuYDtcblxuZXhwb3J0IHR5cGUgTWFwQ29udHJvbFBhbmVsUHJvcHMgPSB7XG4gIGhlYWRlcj86IHN0cmluZztcbiAgc2NhbGU/OiBudW1iZXI7XG4gIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyPEhUTUxEaXZFbGVtZW50PjtcbiAgb25QaW5DbGljaz86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyPEhUTUxEaXZFbGVtZW50PjtcbiAgcGlubmFibGU/OiBib29sZWFuO1xuICBkaXNhYmxlQ2xvc2U/OiBib29sZWFuO1xuICBpc0V4cG9ydD86IGJvb2xlYW47XG4gIGxvZ29Db21wb25lbnQ/OiBFbGVtZW50O1xuICBtYXBTdGF0ZT86IE1hcFN0YXRlO1xuICBvblRvZ2dsZVNwbGl0TWFwVmlld3BvcnQ/OiBBY3Rpb25IYW5kbGVyPHR5cGVvZiB0b2dnbGVTcGxpdE1hcFZpZXdwb3J0PjtcbiAgaXNWaWV3cG9ydFVuc3luY0FsbG93ZWQ/OiBib29sZWFuO1xufTtcblxuZnVuY3Rpb24gTWFwQ29udHJvbFBhbmVsRmFjdG9yeSgpIHtcbiAgY29uc3QgTWFwQ29udHJvbFBhbmVsOiBSZWFjdC5GQzxNYXBDb250cm9sUGFuZWxQcm9wcz4gPSBSZWFjdC5tZW1vKFxuICAgICh7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGhlYWRlcixcbiAgICAgIHBpbm5hYmxlLFxuICAgICAgZGlzYWJsZUNsb3NlLFxuICAgICAgb25QaW5DbGljayxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBzY2FsZSA9IDEsXG4gICAgICBpc0V4cG9ydCxcbiAgICAgIGxvZ29Db21wb25lbnQsXG4gICAgICBtYXBTdGF0ZSxcbiAgICAgIG9uVG9nZ2xlU3BsaXRNYXBWaWV3cG9ydCxcbiAgICAgIGlzVmlld3BvcnRVbnN5bmNBbGxvd2VkXG4gICAgfSkgPT4ge1xuICAgICAgY29uc3Qge2lzVmlld3BvcnRTeW5jZWQsIGlzWm9vbUxvY2tlZH0gPSBtYXBTdGF0ZSB8fCB7fTtcbiAgICAgIGNvbnN0IG9uVW5sb2NrVmlld3BvcnRDaGFuZ2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIG9uVG9nZ2xlU3BsaXRNYXBWaWV3cG9ydD8uKHtpc1ZpZXdwb3J0U3luY2VkOiAhaXNWaWV3cG9ydFN5bmNlZH0pO1xuICAgICAgfSwgW2lzVmlld3BvcnRTeW5jZWQsIG9uVG9nZ2xlU3BsaXRNYXBWaWV3cG9ydF0pO1xuXG4gICAgICBjb25zdCBvblN5bmNab29tQ2hhbmdlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBvblRvZ2dsZVNwbGl0TWFwVmlld3BvcnQ/Lih7aXNab29tTG9ja2VkOiAhaXNab29tTG9ja2VkfSk7XG4gICAgICB9LCBbaXNab29tTG9ja2VkLCBvblRvZ2dsZVNwbGl0TWFwVmlld3BvcnRdKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZE1hcENvbnRyb2xQYW5lbFxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1hcC1jb250cm9sLXBhbmVsXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoJHtzY2FsZX0pYCxcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzhweCAhaW1wb3J0YW50J1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7bWFwU3RhdGU/LmlzU3BsaXQgJiYgaXNWaWV3cG9ydFVuc3luY0FsbG93ZWQgPyAoXG4gICAgICAgICAgICA8U3R5bGVkTWFwQ29udHJvbFBhbmVsSGVhZGVyU3BsaXRWaWV3cG9ydHNUb29scz5cbiAgICAgICAgICAgICAgPFN0eWxlZFNCQ2VudGVyRmxleGJveCBzdHlsZT17e3BhZGRpbmdCb3R0b206ICc2cHgnfX0+XG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJVbmxvY2sgVmlld3BvcnRcIiAvPlxuICAgICAgICAgICAgICAgIDxTdHlsZWREaXNhYmxlYWJsZVN3aXRjaFxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IW1hcFN0YXRlPy5pc1ZpZXdwb3J0U3luY2VkfVxuICAgICAgICAgICAgICAgICAgaWQ9XCJ1bmxvY2stdmlld3BvcnQtdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblVubG9ja1ZpZXdwb3J0Q2hhbmdlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvU3R5bGVkU0JDZW50ZXJGbGV4Ym94PlxuICAgICAgICAgICAgICA8U3R5bGVkU0JDZW50ZXJGbGV4Ym94PlxuICAgICAgICAgICAgICAgIDxTdHlsZWREaXNhYmxlYWJsZVRleHQgZGlzYWJsZWQ9e21hcFN0YXRlPy5pc1ZpZXdwb3J0U3luY2VkfT5cbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiU3luYyBab29tXCIgLz5cbiAgICAgICAgICAgICAgICA8L1N0eWxlZERpc2FibGVhYmxlVGV4dD5cbiAgICAgICAgICAgICAgICA8U3R5bGVkRGlzYWJsZWFibGVTd2l0Y2hcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e21hcFN0YXRlPy5pc1pvb21Mb2NrZWR9XG4gICAgICAgICAgICAgICAgICBpZD1cInN5bmMtem9vbS10b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uU3luY1pvb21DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bWFwU3RhdGU/LmlzVmlld3BvcnRTeW5jZWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9TdHlsZWRTQkNlbnRlckZsZXhib3g+XG4gICAgICAgICAgICA8L1N0eWxlZE1hcENvbnRyb2xQYW5lbEhlYWRlclNwbGl0Vmlld3BvcnRzVG9vbHM+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICA8U3R5bGVkTWFwQ29udHJvbFBhbmVsSGVhZGVyPlxuICAgICAgICAgICAge2lzRXhwb3J0ICYmIGxvZ29Db21wb25lbnQgPyAoXG4gICAgICAgICAgICAgIGxvZ29Db21wb25lbnRcbiAgICAgICAgICAgICkgOiBoZWFkZXIgPyAoXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7dmVydGljYWxBbGlnbjogJ21pZGRsZSd9fT5cbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17aGVhZGVyfSAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIHtpc0V4cG9ydCA/IG51bGwgOiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAge3Bpbm5hYmxlICYmIChcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRJY29uIGNsYXNzTmFtZT1cInBpbi1tYXAtY29udHJvbC1pdGVtXCIgb25DbGljaz17b25QaW5DbGlja30+XG4gICAgICAgICAgICAgICAgICAgIDxQaW4gaGVpZ2h0PVwiMTZweFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L1N0eWxlZEljb24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7ZGlzYWJsZUNsb3NlID8gbnVsbCA6IChcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRJY29uIGNsYXNzTmFtZT1cImNsb3NlLW1hcC1jb250cm9sLWl0ZW1cIiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAgPENsb3NlIGhlaWdodD1cIjE2cHhcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWRJY29uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1N0eWxlZE1hcENvbnRyb2xQYW5lbEhlYWRlcj5cbiAgICAgICAgICA8U3R5bGVkTWFwQ29udHJvbFBhbmVsQ29udGVudD57Y2hpbGRyZW59PC9TdHlsZWRNYXBDb250cm9sUGFuZWxDb250ZW50PlxuICAgICAgICA8L1N0eWxlZE1hcENvbnRyb2xQYW5lbD5cbiAgICAgICk7XG4gICAgfVxuICApO1xuXG4gIE1hcENvbnRyb2xQYW5lbC5kaXNwbGF5TmFtZSA9ICdNYXBDb250cm9sUGFuZWwnO1xuXG4gIHJldHVybiBNYXBDb250cm9sUGFuZWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcENvbnRyb2xQYW5lbEZhY3Rvcnk7XG4iXX0=