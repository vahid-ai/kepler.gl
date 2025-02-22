"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _localization = require("@kepler.gl/localization");

var _iconButton = _interopRequireDefault(require("../icon-button"));

var _styledComponents = require("../styled-components");

function AnimationWindowControlFactory() {
  var AnimationWindowControl = function AnimationWindowControl(_ref) {
    var animationWindow = _ref.animationWindow,
        setFilterAnimationWindow = _ref.setFilterAnimationWindow,
        toggleAnimationWindowControl = _ref.toggleAnimationWindowControl,
        height = _ref.height,
        animationItems = _ref.animationItems,
        _ref$btnStyle = _ref.btnStyle,
        btnStyle = _ref$btnStyle === void 0 ? {} : _ref$btnStyle,
        showAnimationWindowControl = _ref.showAnimationWindowControl;
    var onSelectAnimationControl = (0, _react.useCallback)(function (item) {
      setFilterAnimationWindow(item.id);
      toggleAnimationWindowControl();
    }, [setFilterAnimationWindow, toggleAnimationWindowControl]);
    return showAnimationWindowControl ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "animation-window-control"
    }, Object.values(animationItems).filter(function (item) {
      return item.id !== animationWindow;
    }).map(function (item) {
      return /*#__PURE__*/_react["default"].createElement(_iconButton["default"], (0, _extends2["default"])({
        key: item.id,
        "data-tip": true,
        "data-for": "".concat(item.id, "-tooltip"),
        className: "playback-control-button",
        onClick: function onClick() {
          return onSelectAnimationControl(item);
        }
      }, btnStyle), /*#__PURE__*/_react["default"].createElement(item.icon, {
        height: height
      }), item.tooltip ? /*#__PURE__*/_react["default"].createElement(_styledComponents.Tooltip, {
        id: "".concat(item.id, "-tooltip"),
        effect: "solid",
        place: "top"
      }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
        id: item.tooltip
      })) : null);
    })) : null;
  };

  return AnimationWindowControl;
}

var _default = AnimationWindowControlFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vYW5pbWF0aW9uLWNvbnRyb2wvYW5pbWF0aW9uLXdpbmRvdy1jb250cm9sLnRzeCJdLCJuYW1lcyI6WyJBbmltYXRpb25XaW5kb3dDb250cm9sRmFjdG9yeSIsIkFuaW1hdGlvbldpbmRvd0NvbnRyb2wiLCJhbmltYXRpb25XaW5kb3ciLCJzZXRGaWx0ZXJBbmltYXRpb25XaW5kb3ciLCJ0b2dnbGVBbmltYXRpb25XaW5kb3dDb250cm9sIiwiaGVpZ2h0IiwiYW5pbWF0aW9uSXRlbXMiLCJidG5TdHlsZSIsInNob3dBbmltYXRpb25XaW5kb3dDb250cm9sIiwib25TZWxlY3RBbmltYXRpb25Db250cm9sIiwiaXRlbSIsImlkIiwiT2JqZWN0IiwidmFsdWVzIiwiZmlsdGVyIiwibWFwIiwidG9vbHRpcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQWlCQSxTQUFTQSw2QkFBVCxHQUFnRjtBQUM5RSxNQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLE9BUUk7QUFBQSxRQVBqQ0MsZUFPaUMsUUFQakNBLGVBT2lDO0FBQUEsUUFOakNDLHdCQU1pQyxRQU5qQ0Esd0JBTWlDO0FBQUEsUUFMakNDLDRCQUtpQyxRQUxqQ0EsNEJBS2lDO0FBQUEsUUFKakNDLE1BSWlDLFFBSmpDQSxNQUlpQztBQUFBLFFBSGpDQyxjQUdpQyxRQUhqQ0EsY0FHaUM7QUFBQSw2QkFGakNDLFFBRWlDO0FBQUEsUUFGakNBLFFBRWlDLDhCQUZ0QixFQUVzQjtBQUFBLFFBRGpDQywwQkFDaUMsUUFEakNBLDBCQUNpQztBQUNqQyxRQUFNQyx3QkFBd0IsR0FBRyx3QkFDL0IsVUFBQUMsSUFBSSxFQUFJO0FBQ05QLE1BQUFBLHdCQUF3QixDQUFDTyxJQUFJLENBQUNDLEVBQU4sQ0FBeEI7QUFDQVAsTUFBQUEsNEJBQTRCO0FBQzdCLEtBSjhCLEVBSy9CLENBQUNELHdCQUFELEVBQTJCQyw0QkFBM0IsQ0FMK0IsQ0FBakM7QUFRQSxXQUFPSSwwQkFBMEIsZ0JBQy9CO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixPQUNHSSxNQUFNLENBQUNDLE1BQVAsQ0FBY1AsY0FBZCxFQUNFUSxNQURGLENBQ1MsVUFBQUosSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ0MsRUFBTCxLQUFZVCxlQUFoQjtBQUFBLEtBRGIsRUFFRWEsR0FGRixDQUVNLFVBQUFMLElBQUk7QUFBQSwwQkFDUCxnQ0FBQyxzQkFBRDtBQUNFLFFBQUEsR0FBRyxFQUFFQSxJQUFJLENBQUNDLEVBRFo7QUFFRSx3QkFGRjtBQUdFLDhCQUFhRCxJQUFJLENBQUNDLEVBQWxCLGFBSEY7QUFJRSxRQUFBLFNBQVMsRUFBQyx5QkFKWjtBQUtFLFFBQUEsT0FBTyxFQUFFO0FBQUEsaUJBQU1GLHdCQUF3QixDQUFDQyxJQUFELENBQTlCO0FBQUE7QUFMWCxTQU1NSCxRQU5OLGdCQVFFLGdDQUFDLElBQUQsQ0FBTSxJQUFOO0FBQVcsUUFBQSxNQUFNLEVBQUVGO0FBQW5CLFFBUkYsRUFTR0ssSUFBSSxDQUFDTSxPQUFMLGdCQUNDLGdDQUFDLHlCQUFEO0FBQVMsUUFBQSxFQUFFLFlBQUtOLElBQUksQ0FBQ0MsRUFBVixhQUFYO0FBQW1DLFFBQUEsTUFBTSxFQUFDLE9BQTFDO0FBQWtELFFBQUEsS0FBSyxFQUFDO0FBQXhELHNCQUNFLGdDQUFDLDhCQUFEO0FBQWtCLFFBQUEsRUFBRSxFQUFFRCxJQUFJLENBQUNNO0FBQTNCLFFBREYsQ0FERCxHQUlHLElBYk4sQ0FETztBQUFBLEtBRlYsQ0FESCxDQUQrQixHQXNCN0IsSUF0Qko7QUF1QkQsR0F4Q0Q7O0FBMENBLFNBQU9mLHNCQUFQO0FBQ0Q7O2VBRWNELDZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnQGtlcGxlci5nbC9sb2NhbGl6YXRpb24nO1xuaW1wb3J0IHtSZWFjdENvbXBvbmVudExpa2V9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnLi4vaWNvbi1idXR0b24nO1xuaW1wb3J0IHtUb29sdGlwfSBmcm9tICcuLi9zdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQW5pbWF0aW9uSXRlbSB7XG4gIGlkOiBzdHJpbmc7XG4gIGljb246IFJlYWN0Q29tcG9uZW50TGlrZTtcbiAgdG9vbHRpcDogc3RyaW5nO1xufVxuaW50ZXJmYWNlIEFuaW1hdGlvbldpbmRvd0NvbnRyb2xQcm9wcyB7XG4gIGFuaW1hdGlvbldpbmRvdz86IHN0cmluZztcbiAgc2V0RmlsdGVyQW5pbWF0aW9uV2luZG93OiAoaWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgdG9nZ2xlQW5pbWF0aW9uV2luZG93Q29udHJvbDogKCkgPT4gdm9pZDtcbiAgaGVpZ2h0Pzogc3RyaW5nO1xuICBhbmltYXRpb25JdGVtczoge1trZXk6IHN0cmluZ106IEFuaW1hdGlvbkl0ZW19O1xuICBidG5TdHlsZTtcbiAgc2hvd0FuaW1hdGlvbldpbmRvd0NvbnRyb2w6IGJvb2xlYW47XG59XG5cbmZ1bmN0aW9uIEFuaW1hdGlvbldpbmRvd0NvbnRyb2xGYWN0b3J5KCk6IFJlYWN0LkZDPEFuaW1hdGlvbldpbmRvd0NvbnRyb2xQcm9wcz4ge1xuICBjb25zdCBBbmltYXRpb25XaW5kb3dDb250cm9sID0gKHtcbiAgICBhbmltYXRpb25XaW5kb3csXG4gICAgc2V0RmlsdGVyQW5pbWF0aW9uV2luZG93LFxuICAgIHRvZ2dsZUFuaW1hdGlvbldpbmRvd0NvbnRyb2wsXG4gICAgaGVpZ2h0LFxuICAgIGFuaW1hdGlvbkl0ZW1zLFxuICAgIGJ0blN0eWxlID0ge30sXG4gICAgc2hvd0FuaW1hdGlvbldpbmRvd0NvbnRyb2xcbiAgfTogQW5pbWF0aW9uV2luZG93Q29udHJvbFByb3BzKSA9PiB7XG4gICAgY29uc3Qgb25TZWxlY3RBbmltYXRpb25Db250cm9sID0gdXNlQ2FsbGJhY2soXG4gICAgICBpdGVtID0+IHtcbiAgICAgICAgc2V0RmlsdGVyQW5pbWF0aW9uV2luZG93KGl0ZW0uaWQpO1xuICAgICAgICB0b2dnbGVBbmltYXRpb25XaW5kb3dDb250cm9sKCk7XG4gICAgICB9LFxuICAgICAgW3NldEZpbHRlckFuaW1hdGlvbldpbmRvdywgdG9nZ2xlQW5pbWF0aW9uV2luZG93Q29udHJvbF1cbiAgICApO1xuXG4gICAgcmV0dXJuIHNob3dBbmltYXRpb25XaW5kb3dDb250cm9sID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRpb24td2luZG93LWNvbnRyb2xcIj5cbiAgICAgICAge09iamVjdC52YWx1ZXMoYW5pbWF0aW9uSXRlbXMpXG4gICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGFuaW1hdGlvbldpbmRvdylcbiAgICAgICAgICAubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICBkYXRhLXRpcFxuICAgICAgICAgICAgICBkYXRhLWZvcj17YCR7aXRlbS5pZH0tdG9vbHRpcGB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsYXliYWNrLWNvbnRyb2wtYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25TZWxlY3RBbmltYXRpb25Db250cm9sKGl0ZW0pfVxuICAgICAgICAgICAgICB7Li4uYnRuU3R5bGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpdGVtLmljb24gaGVpZ2h0PXtoZWlnaHR9IC8+XG4gICAgICAgICAgICAgIHtpdGVtLnRvb2x0aXAgPyAoXG4gICAgICAgICAgICAgICAgPFRvb2x0aXAgaWQ9e2Ake2l0ZW0uaWR9LXRvb2x0aXBgfSBlZmZlY3Q9XCJzb2xpZFwiIHBsYWNlPVwidG9wXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17aXRlbS50b29sdGlwfSAvPlxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICApIDogbnVsbDtcbiAgfTtcblxuICByZXR1cm4gQW5pbWF0aW9uV2luZG93Q29udHJvbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uV2luZG93Q29udHJvbEZhY3Rvcnk7XG4iXX0=