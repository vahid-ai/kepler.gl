"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _localization = require("@kepler.gl/localization");

var _styledComponents = require("../styled-components");

var _iconButton = _interopRequireDefault(require("../icon-button"));

var DELAY_SHOW = 500;

function ResetControlFactory() {
  var ResetControl = function ResetControl(_ref) {
    var showAnimationWindowControl = _ref.showAnimationWindowControl,
        resetAnimation = _ref.resetAnimation,
        btnStyle = _ref.btnStyle,
        playbackIcons = _ref.playbackIcons,
        buttonHeight = _ref.buttonHeight;
    return showAnimationWindowControl ? null : /*#__PURE__*/_react["default"].createElement(_iconButton["default"], (0, _extends2["default"])({
      "data-tip": true,
      "data-for": "animate-reset",
      className: "playback-control-button",
      onClick: resetAnimation
    }, btnStyle), /*#__PURE__*/_react["default"].createElement(playbackIcons.reset, {
      height: buttonHeight
    }), /*#__PURE__*/_react["default"].createElement(_styledComponents.Tooltip, {
      id: "animate-reset",
      place: "top",
      delayShow: DELAY_SHOW,
      effect: "solid"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: "tooltip.reset"
    })));
  };

  return ResetControl;
}

var _default = ResetControlFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vYW5pbWF0aW9uLWNvbnRyb2wvcmVzZXQtY29udHJvbC50c3giXSwibmFtZXMiOlsiREVMQVlfU0hPVyIsIlJlc2V0Q29udHJvbEZhY3RvcnkiLCJSZXNldENvbnRyb2wiLCJzaG93QW5pbWF0aW9uV2luZG93Q29udHJvbCIsInJlc2V0QW5pbWF0aW9uIiwiYnRuU3R5bGUiLCJwbGF5YmFja0ljb25zIiwiYnV0dG9uSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxHQUFuQjs7QUFFQSxTQUFTQyxtQkFBVCxHQUErQjtBQUM3QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQU1mO0FBQUEsUUFMSkMsMEJBS0ksUUFMSkEsMEJBS0k7QUFBQSxRQUpKQyxjQUlJLFFBSkpBLGNBSUk7QUFBQSxRQUhKQyxRQUdJLFFBSEpBLFFBR0k7QUFBQSxRQUZKQyxhQUVJLFFBRkpBLGFBRUk7QUFBQSxRQURKQyxZQUNJLFFBREpBLFlBQ0k7QUFDSixXQUFPSiwwQkFBMEIsR0FBRyxJQUFILGdCQUMvQixnQ0FBQyxzQkFBRDtBQUNFLHNCQURGO0FBRUUsa0JBQVMsZUFGWDtBQUdFLE1BQUEsU0FBUyxFQUFDLHlCQUhaO0FBSUUsTUFBQSxPQUFPLEVBQUVDO0FBSlgsT0FLTUMsUUFMTixnQkFPRSxnQ0FBQyxhQUFELENBQWUsS0FBZjtBQUFxQixNQUFBLE1BQU0sRUFBRUU7QUFBN0IsTUFQRixlQVFFLGdDQUFDLHlCQUFEO0FBQVMsTUFBQSxFQUFFLEVBQUMsZUFBWjtBQUE0QixNQUFBLEtBQUssRUFBQyxLQUFsQztBQUF3QyxNQUFBLFNBQVMsRUFBRVAsVUFBbkQ7QUFBK0QsTUFBQSxNQUFNLEVBQUM7QUFBdEUsb0JBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUM7QUFBckIsTUFERixDQVJGLENBREY7QUFjRCxHQXJCRDs7QUF1QkEsU0FBT0UsWUFBUDtBQUNEOztlQUVjRCxtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ0BrZXBsZXIuZ2wvbG9jYWxpemF0aW9uJztcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSAnLi4vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnLi4vaWNvbi1idXR0b24nO1xuXG5jb25zdCBERUxBWV9TSE9XID0gNTAwO1xuXG5mdW5jdGlvbiBSZXNldENvbnRyb2xGYWN0b3J5KCkge1xuICBjb25zdCBSZXNldENvbnRyb2wgPSAoe1xuICAgIHNob3dBbmltYXRpb25XaW5kb3dDb250cm9sLFxuICAgIHJlc2V0QW5pbWF0aW9uLFxuICAgIGJ0blN0eWxlLFxuICAgIHBsYXliYWNrSWNvbnMsXG4gICAgYnV0dG9uSGVpZ2h0XG4gIH0pID0+IHtcbiAgICByZXR1cm4gc2hvd0FuaW1hdGlvbldpbmRvd0NvbnRyb2wgPyBudWxsIDogKFxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgZGF0YS10aXBcbiAgICAgICAgZGF0YS1mb3I9XCJhbmltYXRlLXJlc2V0XCJcbiAgICAgICAgY2xhc3NOYW1lPVwicGxheWJhY2stY29udHJvbC1idXR0b25cIlxuICAgICAgICBvbkNsaWNrPXtyZXNldEFuaW1hdGlvbn1cbiAgICAgICAgey4uLmJ0blN0eWxlfVxuICAgICAgPlxuICAgICAgICA8cGxheWJhY2tJY29ucy5yZXNldCBoZWlnaHQ9e2J1dHRvbkhlaWdodH0gLz5cbiAgICAgICAgPFRvb2x0aXAgaWQ9XCJhbmltYXRlLXJlc2V0XCIgcGxhY2U9XCJ0b3BcIiBkZWxheVNob3c9e0RFTEFZX1NIT1d9IGVmZmVjdD1cInNvbGlkXCI+XG4gICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJ0b29sdGlwLnJlc2V0XCIgLz5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFJlc2V0Q29udHJvbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzZXRDb250cm9sRmFjdG9yeTtcbiJdfQ==