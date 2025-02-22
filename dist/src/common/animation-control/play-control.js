"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _localization = require("@kepler.gl/localization");

var _styledComponents = require("../styled-components");

var _iconButton = _interopRequireDefault(require("../icon-button"));

var DELAY_SHOW = 500;

function PlayControlFactory() {
  var PlayControl = function PlayControl(_ref) {
    var showAnimationWindowControl = _ref.showAnimationWindowControl,
        isAnimating = _ref.isAnimating,
        pauseAnimation = _ref.pauseAnimation,
        startAnimation = _ref.startAnimation,
        isSpeedControlVisible = _ref.isSpeedControlVisible,
        btnStyle = _ref.btnStyle,
        playbackIcons = _ref.playbackIcons,
        buttonHeight = _ref.buttonHeight;
    return showAnimationWindowControl ? null : /*#__PURE__*/_react["default"].createElement(_iconButton["default"], (0, _extends2["default"])({
      "data-tip": true,
      "data-for": "animate-play-pause",
      className: (0, _classnames["default"])('playback-control-button', {
        active: isAnimating
      }),
      onClick: isAnimating ? pauseAnimation : startAnimation,
      hide: isSpeedControlVisible
    }, btnStyle), isAnimating ? /*#__PURE__*/_react["default"].createElement(playbackIcons.pause, {
      height: buttonHeight
    }) : /*#__PURE__*/_react["default"].createElement(playbackIcons.play, {
      height: buttonHeight
    }), /*#__PURE__*/_react["default"].createElement(_styledComponents.Tooltip, {
      id: "animate-play-pause",
      place: "top",
      delayShow: DELAY_SHOW,
      effect: "solid"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: isAnimating ? 'tooltip.pause' : 'tooltip.play'
    })));
  };

  return PlayControl;
}

var _default = PlayControlFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vYW5pbWF0aW9uLWNvbnRyb2wvcGxheS1jb250cm9sLnRzeCJdLCJuYW1lcyI6WyJERUxBWV9TSE9XIiwiUGxheUNvbnRyb2xGYWN0b3J5IiwiUGxheUNvbnRyb2wiLCJzaG93QW5pbWF0aW9uV2luZG93Q29udHJvbCIsImlzQW5pbWF0aW5nIiwicGF1c2VBbmltYXRpb24iLCJzdGFydEFuaW1hdGlvbiIsImlzU3BlZWRDb250cm9sVmlzaWJsZSIsImJ0blN0eWxlIiwicGxheWJhY2tJY29ucyIsImJ1dHRvbkhlaWdodCIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsR0FBbkI7O0FBRUEsU0FBU0Msa0JBQVQsR0FBOEI7QUFDNUIsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FTZDtBQUFBLFFBUkpDLDBCQVFJLFFBUkpBLDBCQVFJO0FBQUEsUUFQSkMsV0FPSSxRQVBKQSxXQU9JO0FBQUEsUUFOSkMsY0FNSSxRQU5KQSxjQU1JO0FBQUEsUUFMSkMsY0FLSSxRQUxKQSxjQUtJO0FBQUEsUUFKSkMscUJBSUksUUFKSkEscUJBSUk7QUFBQSxRQUhKQyxRQUdJLFFBSEpBLFFBR0k7QUFBQSxRQUZKQyxhQUVJLFFBRkpBLGFBRUk7QUFBQSxRQURKQyxZQUNJLFFBREpBLFlBQ0k7QUFDSixXQUFPUCwwQkFBMEIsR0FBRyxJQUFILGdCQUMvQixnQ0FBQyxzQkFBRDtBQUNFLHNCQURGO0FBRUUsa0JBQVMsb0JBRlg7QUFHRSxNQUFBLFNBQVMsRUFBRSw0QkFBVyx5QkFBWCxFQUFzQztBQUFDUSxRQUFBQSxNQUFNLEVBQUVQO0FBQVQsT0FBdEMsQ0FIYjtBQUlFLE1BQUEsT0FBTyxFQUFFQSxXQUFXLEdBQUdDLGNBQUgsR0FBb0JDLGNBSjFDO0FBS0UsTUFBQSxJQUFJLEVBQUVDO0FBTFIsT0FNTUMsUUFOTixHQVFHSixXQUFXLGdCQUNWLGdDQUFDLGFBQUQsQ0FBZSxLQUFmO0FBQXFCLE1BQUEsTUFBTSxFQUFFTTtBQUE3QixNQURVLGdCQUdWLGdDQUFDLGFBQUQsQ0FBZSxJQUFmO0FBQW9CLE1BQUEsTUFBTSxFQUFFQTtBQUE1QixNQVhKLGVBYUUsZ0NBQUMseUJBQUQ7QUFBUyxNQUFBLEVBQUUsRUFBQyxvQkFBWjtBQUFpQyxNQUFBLEtBQUssRUFBQyxLQUF2QztBQUE2QyxNQUFBLFNBQVMsRUFBRVYsVUFBeEQ7QUFBb0UsTUFBQSxNQUFNLEVBQUM7QUFBM0Usb0JBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUVJLFdBQVcsR0FBRyxlQUFILEdBQXFCO0FBQXRELE1BREYsQ0FiRixDQURGO0FBbUJELEdBN0JEOztBQStCQSxTQUFPRixXQUFQO0FBQ0Q7O2VBRWNELGtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdAa2VwbGVyLmdsL2xvY2FsaXphdGlvbic7XG5pbXBvcnQge1Rvb2x0aXB9IGZyb20gJy4uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJy4uL2ljb24tYnV0dG9uJztcblxuY29uc3QgREVMQVlfU0hPVyA9IDUwMDtcblxuZnVuY3Rpb24gUGxheUNvbnRyb2xGYWN0b3J5KCkge1xuICBjb25zdCBQbGF5Q29udHJvbCA9ICh7XG4gICAgc2hvd0FuaW1hdGlvbldpbmRvd0NvbnRyb2wsXG4gICAgaXNBbmltYXRpbmcsXG4gICAgcGF1c2VBbmltYXRpb24sXG4gICAgc3RhcnRBbmltYXRpb24sXG4gICAgaXNTcGVlZENvbnRyb2xWaXNpYmxlLFxuICAgIGJ0blN0eWxlLFxuICAgIHBsYXliYWNrSWNvbnMsXG4gICAgYnV0dG9uSGVpZ2h0XG4gIH0pID0+IHtcbiAgICByZXR1cm4gc2hvd0FuaW1hdGlvbldpbmRvd0NvbnRyb2wgPyBudWxsIDogKFxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgZGF0YS10aXBcbiAgICAgICAgZGF0YS1mb3I9XCJhbmltYXRlLXBsYXktcGF1c2VcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3BsYXliYWNrLWNvbnRyb2wtYnV0dG9uJywge2FjdGl2ZTogaXNBbmltYXRpbmd9KX1cbiAgICAgICAgb25DbGljaz17aXNBbmltYXRpbmcgPyBwYXVzZUFuaW1hdGlvbiA6IHN0YXJ0QW5pbWF0aW9ufVxuICAgICAgICBoaWRlPXtpc1NwZWVkQ29udHJvbFZpc2libGV9XG4gICAgICAgIHsuLi5idG5TdHlsZX1cbiAgICAgID5cbiAgICAgICAge2lzQW5pbWF0aW5nID8gKFxuICAgICAgICAgIDxwbGF5YmFja0ljb25zLnBhdXNlIGhlaWdodD17YnV0dG9uSGVpZ2h0fSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxwbGF5YmFja0ljb25zLnBsYXkgaGVpZ2h0PXtidXR0b25IZWlnaHR9IC8+XG4gICAgICAgICl9XG4gICAgICAgIDxUb29sdGlwIGlkPVwiYW5pbWF0ZS1wbGF5LXBhdXNlXCIgcGxhY2U9XCJ0b3BcIiBkZWxheVNob3c9e0RFTEFZX1NIT1d9IGVmZmVjdD1cInNvbGlkXCI+XG4gICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e2lzQW5pbWF0aW5nID8gJ3Rvb2x0aXAucGF1c2UnIDogJ3Rvb2x0aXAucGxheSd9IC8+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBQbGF5Q29udHJvbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheUNvbnRyb2xGYWN0b3J5O1xuIl19