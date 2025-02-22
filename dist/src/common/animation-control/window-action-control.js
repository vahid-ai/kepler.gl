"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _localization = require("@kepler.gl/localization");

var _styledComponents = require("../styled-components");

var _iconButton = _interopRequireDefault(require("../icon-button"));

var DELAY_SHOW = 500;

function WindowActionControlFactory() {
  var WindowActionComponent = function WindowActionComponent(_ref) {
    var toggleAnimationWindowControl = _ref.toggleAnimationWindowControl,
        showAnimationWindowControl = _ref.showAnimationWindowControl,
        btnStyle = _ref.btnStyle,
        animationItems = _ref.animationItems,
        animationWindow = _ref.animationWindow,
        buttonHeight = _ref.buttonHeight,
        setFilterAnimationWindow = _ref.setFilterAnimationWindow;
    var icon = (0, _react.useMemo)(function () {
      if (animationItems[animationWindow]) {
        var WindowIcon = animationItems[animationWindow].icon;
        return /*#__PURE__*/_react["default"].createElement(WindowIcon, {
          height: buttonHeight
        });
      }

      return null;
    }, [animationItems, animationWindow, buttonHeight]);
    return setFilterAnimationWindow ? /*#__PURE__*/_react["default"].createElement(_iconButton["default"], (0, _extends2["default"])({
      "data-tip": true,
      "data-for": "animate-window",
      className: (0, _classnames["default"])('playback-control-button', {
        active: showAnimationWindowControl
      }),
      onClick: toggleAnimationWindowControl
    }, btnStyle), icon, animationItems[animationWindow] && animationItems[animationWindow].tooltip ? /*#__PURE__*/_react["default"].createElement(_styledComponents.Tooltip, {
      id: "animate-window",
      place: "top",
      delayShow: DELAY_SHOW,
      effect: "solid"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: animationItems[animationWindow].tooltip
    })) : null) : null;
  };

  return WindowActionComponent;
}

var _default = WindowActionControlFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vYW5pbWF0aW9uLWNvbnRyb2wvd2luZG93LWFjdGlvbi1jb250cm9sLnRzeCJdLCJuYW1lcyI6WyJERUxBWV9TSE9XIiwiV2luZG93QWN0aW9uQ29udHJvbEZhY3RvcnkiLCJXaW5kb3dBY3Rpb25Db21wb25lbnQiLCJ0b2dnbGVBbmltYXRpb25XaW5kb3dDb250cm9sIiwic2hvd0FuaW1hdGlvbldpbmRvd0NvbnRyb2wiLCJidG5TdHlsZSIsImFuaW1hdGlvbkl0ZW1zIiwiYW5pbWF0aW9uV2luZG93IiwiYnV0dG9uSGVpZ2h0Iiwic2V0RmlsdGVyQW5pbWF0aW9uV2luZG93IiwiaWNvbiIsIldpbmRvd0ljb24iLCJhY3RpdmUiLCJ0b29sdGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLEdBQW5COztBQUNBLFNBQVNDLDBCQUFULEdBQXNDO0FBQ3BDLE1BQU1DLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsT0FReEI7QUFBQSxRQVBKQyw0QkFPSSxRQVBKQSw0QkFPSTtBQUFBLFFBTkpDLDBCQU1JLFFBTkpBLDBCQU1JO0FBQUEsUUFMSkMsUUFLSSxRQUxKQSxRQUtJO0FBQUEsUUFKSkMsY0FJSSxRQUpKQSxjQUlJO0FBQUEsUUFISkMsZUFHSSxRQUhKQSxlQUdJO0FBQUEsUUFGSkMsWUFFSSxRQUZKQSxZQUVJO0FBQUEsUUFESkMsd0JBQ0ksUUFESkEsd0JBQ0k7QUFDSixRQUFNQyxJQUFJLEdBQUcsb0JBQVEsWUFBTTtBQUN6QixVQUFJSixjQUFjLENBQUNDLGVBQUQsQ0FBbEIsRUFBcUM7QUFDbkMsWUFBTUksVUFBVSxHQUFHTCxjQUFjLENBQUNDLGVBQUQsQ0FBZCxDQUFnQ0csSUFBbkQ7QUFDQSw0QkFBTyxnQ0FBQyxVQUFEO0FBQVksVUFBQSxNQUFNLEVBQUVGO0FBQXBCLFVBQVA7QUFDRDs7QUFDRCxhQUFPLElBQVA7QUFDRCxLQU5ZLEVBTVYsQ0FBQ0YsY0FBRCxFQUFpQkMsZUFBakIsRUFBa0NDLFlBQWxDLENBTlUsQ0FBYjtBQVFBLFdBQU9DLHdCQUF3QixnQkFDN0IsZ0NBQUMsc0JBQUQ7QUFDRSxzQkFERjtBQUVFLGtCQUFTLGdCQUZYO0FBR0UsTUFBQSxTQUFTLEVBQUUsNEJBQVcseUJBQVgsRUFBc0M7QUFBQ0csUUFBQUEsTUFBTSxFQUFFUjtBQUFULE9BQXRDLENBSGI7QUFJRSxNQUFBLE9BQU8sRUFBRUQ7QUFKWCxPQUtNRSxRQUxOLEdBT0dLLElBUEgsRUFRR0osY0FBYyxDQUFDQyxlQUFELENBQWQsSUFBbUNELGNBQWMsQ0FBQ0MsZUFBRCxDQUFkLENBQWdDTSxPQUFuRSxnQkFDQyxnQ0FBQyx5QkFBRDtBQUFTLE1BQUEsRUFBRSxFQUFDLGdCQUFaO0FBQTZCLE1BQUEsS0FBSyxFQUFDLEtBQW5DO0FBQXlDLE1BQUEsU0FBUyxFQUFFYixVQUFwRDtBQUFnRSxNQUFBLE1BQU0sRUFBQztBQUF2RSxvQkFDRSxnQ0FBQyw4QkFBRDtBQUFrQixNQUFBLEVBQUUsRUFBRU0sY0FBYyxDQUFDQyxlQUFELENBQWQsQ0FBZ0NNO0FBQXRELE1BREYsQ0FERCxHQUlHLElBWk4sQ0FENkIsR0FlM0IsSUFmSjtBQWdCRCxHQWpDRDs7QUFtQ0EsU0FBT1gscUJBQVA7QUFDRDs7ZUFFY0QsMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VNZW1vfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnQGtlcGxlci5nbC9sb2NhbGl6YXRpb24nO1xuaW1wb3J0IHtUb29sdGlwfSBmcm9tICcuLi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICcuLi9pY29uLWJ1dHRvbic7XG5cbmNvbnN0IERFTEFZX1NIT1cgPSA1MDA7XG5mdW5jdGlvbiBXaW5kb3dBY3Rpb25Db250cm9sRmFjdG9yeSgpIHtcbiAgY29uc3QgV2luZG93QWN0aW9uQ29tcG9uZW50ID0gKHtcbiAgICB0b2dnbGVBbmltYXRpb25XaW5kb3dDb250cm9sLFxuICAgIHNob3dBbmltYXRpb25XaW5kb3dDb250cm9sLFxuICAgIGJ0blN0eWxlLFxuICAgIGFuaW1hdGlvbkl0ZW1zLFxuICAgIGFuaW1hdGlvbldpbmRvdyxcbiAgICBidXR0b25IZWlnaHQsXG4gICAgc2V0RmlsdGVyQW5pbWF0aW9uV2luZG93XG4gIH0pID0+IHtcbiAgICBjb25zdCBpY29uID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICBpZiAoYW5pbWF0aW9uSXRlbXNbYW5pbWF0aW9uV2luZG93XSkge1xuICAgICAgICBjb25zdCBXaW5kb3dJY29uID0gYW5pbWF0aW9uSXRlbXNbYW5pbWF0aW9uV2luZG93XS5pY29uO1xuICAgICAgICByZXR1cm4gPFdpbmRvd0ljb24gaGVpZ2h0PXtidXR0b25IZWlnaHR9IC8+O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSwgW2FuaW1hdGlvbkl0ZW1zLCBhbmltYXRpb25XaW5kb3csIGJ1dHRvbkhlaWdodF0pO1xuXG4gICAgcmV0dXJuIHNldEZpbHRlckFuaW1hdGlvbldpbmRvdyA/IChcbiAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgIGRhdGEtdGlwXG4gICAgICAgIGRhdGEtZm9yPVwiYW5pbWF0ZS13aW5kb3dcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3BsYXliYWNrLWNvbnRyb2wtYnV0dG9uJywge2FjdGl2ZTogc2hvd0FuaW1hdGlvbldpbmRvd0NvbnRyb2x9KX1cbiAgICAgICAgb25DbGljaz17dG9nZ2xlQW5pbWF0aW9uV2luZG93Q29udHJvbH1cbiAgICAgICAgey4uLmJ0blN0eWxlfVxuICAgICAgPlxuICAgICAgICB7aWNvbn1cbiAgICAgICAge2FuaW1hdGlvbkl0ZW1zW2FuaW1hdGlvbldpbmRvd10gJiYgYW5pbWF0aW9uSXRlbXNbYW5pbWF0aW9uV2luZG93XS50b29sdGlwID8gKFxuICAgICAgICAgIDxUb29sdGlwIGlkPVwiYW5pbWF0ZS13aW5kb3dcIiBwbGFjZT1cInRvcFwiIGRlbGF5U2hvdz17REVMQVlfU0hPV30gZWZmZWN0PVwic29saWRcIj5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXthbmltYXRpb25JdGVtc1thbmltYXRpb25XaW5kb3ddLnRvb2x0aXB9IC8+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICApIDogbnVsbDtcbiAgfTtcblxuICByZXR1cm4gV2luZG93QWN0aW9uQ29tcG9uZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBXaW5kb3dBY3Rpb25Db250cm9sRmFjdG9yeTtcbiJdfQ==