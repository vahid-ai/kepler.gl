"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ActionPanelItem = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = require("./icons");

var _switch = _interopRequireDefault(require("./switch"));

var _templateObject, _templateObject2, _templateObject3;

var StyledItem = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: 12px;\n  line-height: 14px;\n  padding: 8px 16px 8px 8px;\n  min-height: ", "px;\n  text-transform: capitalize;\n  background-color: ", ";\n  max-width: 200px;\n  position: relative;\n\n  ", " :hover {\n    cursor: pointer;\n    color: ", ";\n    .nested-group {\n      display: block;\n    }\n  }\n\n  .label {\n    margin-left: 8px;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n\n  .label-icon {\n    margin-left: 4px;\n    margin-bottom: -2px;\n  }\n  .icon {\n    width: 18px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .nested-group {\n    max-width: 200px;\n    overflow: hidden;\n    display: none;\n    color: ", ";\n    position: absolute;\n    left: 100%;\n    top: 0px;\n    padding-left: 4px;\n\n    label {\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n  }\n"])), function (props) {
  return props.theme.actionPanelHeight;
}, function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.color ? "border-left: 3px solid rgb(".concat(props.color, ");") : '';
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColor;
});

var StyledCheckedbox = (0, _styledComponents["default"])(_switch["default"])(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  label {\n    margin-bottom: 0;\n    color: ", ";\n    padding-left: 20px;\n    line-height: 12px;\n\n    &:before {\n      width: 12px;\n      height: 12px;\n      background-color: ", ";\n    }\n    &:hover {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.textColorHl;
});

var renderChildren = function renderChildren(child, index) {
  return child && /*#__PURE__*/_react["default"].isValidElement(child) && /*#__PURE__*/_react["default"].cloneElement(child, {
    onClick: function onClick() {
      if (child.props.onClick) {
        child.props.onClick(index);
      }
    },
    className: (0, _classnames["default"])('action-panel-item', child.props.className)
  });
};
/** @type {typeof import('./action-panel').ActionPanelItem} */


var ActionPanelItem = /*#__PURE__*/_react["default"].memo(function (_ref) {
  var children = _ref.children,
      color = _ref.color,
      className = _ref.className,
      Icon = _ref.Icon,
      label = _ref.label,
      onClick = _ref.onClick,
      isSelection = _ref.isSelection,
      isActive = _ref.isActive,
      style = _ref.style;
  var onClickCallback = (0, _react.useCallback)(function (event) {
    event.preventDefault();
    event.stopPropagation();
    onClick === null || onClick === void 0 ? void 0 : onClick();
  }, [onClick]);
  return /*#__PURE__*/_react["default"].createElement(StyledItem, {
    className: className,
    onClick: onClickCallback,
    color: color,
    style: style
  }, Icon ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "icon"
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    height: "16px"
  })) : null, isSelection ? /*#__PURE__*/_react["default"].createElement(StyledCheckedbox, {
    type: "checkbox",
    checked: Boolean(isActive),
    id: "switch-".concat(label),
    secondary: true,
    label: label
  }) : /*#__PURE__*/_react["default"].createElement("span", {
    className: "label"
  }, label), children ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "label-icon"
  }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowRight, {
    height: "16px"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "nested-group"
  }, _react["default"].Children.map(children, renderChildren))) : null);
});

exports.ActionPanelItem = ActionPanelItem;
ActionPanelItem.displayName = 'ActionPanelItem';

var StyledActionPanel = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: ", ";\n  box-shadow: ", ";\n  transition: ", ";\n  color: ", ";\n\n  .action-panel-item {\n    ", " &:last-of-type {\n      border-bottom: 0;\n    }\n  }\n"])), function (props) {
  return props.direction;
}, function (props) {
  return props.theme.dropdownListShadow;
}, function (props) {
  return props.theme.transitionSlow;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.direction === 'column' ? "border-bottom: 1px solid ".concat(props.theme.panelHeaderIcon) : "border-right: 1px solid ".concat(props.theme.panelHeaderIcon);
}); // React compound element https://medium.com/@Dane_s/react-js-compound-components-a6e54b5c9992

/** @type {typeof import('./action-panel').ActionPanel} */


var ActionPanel = function ActionPanel(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      _ref2$direction = _ref2.direction,
      direction = _ref2$direction === void 0 ? 'column' : _ref2$direction;
  return /*#__PURE__*/_react["default"].createElement(StyledActionPanel, {
    className: className,
    direction: direction
  }, _react["default"].Children.map(children, renderChildren));
};

ActionPanel.displayName = 'ActionPanel';
var _default = ActionPanel;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vYWN0aW9uLXBhbmVsLnRzeCJdLCJuYW1lcyI6WyJTdHlsZWRJdGVtIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsImFjdGlvblBhbmVsSGVpZ2h0IiwiZHJvcGRvd25MaXN0QmdkIiwiY29sb3IiLCJ0ZXh0Q29sb3JIbCIsInRleHRDb2xvciIsIlN0eWxlZENoZWNrZWRib3giLCJDaGVja2JveCIsInJlbmRlckNoaWxkcmVuIiwiY2hpbGQiLCJpbmRleCIsIlJlYWN0IiwiaXNWYWxpZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiQWN0aW9uUGFuZWxJdGVtIiwibWVtbyIsImNoaWxkcmVuIiwiSWNvbiIsImxhYmVsIiwiaXNTZWxlY3Rpb24iLCJpc0FjdGl2ZSIsInN0eWxlIiwib25DbGlja0NhbGxiYWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIkJvb2xlYW4iLCJDaGlsZHJlbiIsIm1hcCIsImRpc3BsYXlOYW1lIiwiU3R5bGVkQWN0aW9uUGFuZWwiLCJkaXJlY3Rpb24iLCJkcm9wZG93bkxpc3RTaGFkb3ciLCJ0cmFuc2l0aW9uU2xvdyIsInBhbmVsSGVhZGVySWNvbiIsIkFjdGlvblBhbmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBdUJBLElBQU1BLFVBQVUsR0FBR0MsNkJBQU9DLEdBQVYsMi9CQU9BLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsaUJBQWhCO0FBQUEsQ0FQTCxFQVNNLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsZUFBaEI7QUFBQSxDQVRYLEVBYVosVUFBQUgsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0ksS0FBTix3Q0FBNENKLEtBQUss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QUFDLGlCQUFEO0FBQW1CLElBQUEsU0FBUyxFQUFFbEIsU0FBOUI7QUFBeUMsSUFBQSxTQUFTLEVBQUVrQjtBQUFwRCxLQUNHdEIsa0JBQU1rQixRQUFOLENBQWVDLEdBQWYsQ0FBbUJaLFFBQW5CLEVBQTZCVixjQUE3QixDQURILENBRGtCO0FBQUEsQ0FBcEI7O0FBTUE2QixXQUFXLENBQUNOLFdBQVosR0FBMEIsYUFBMUI7ZUFFZU0sVyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCBQcm9wc1dpdGhDaGlsZHJlbiwgRWxlbWVudFR5cGUsIENTU1Byb3BlcnRpZXMsIFJlYWN0Tm9kZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7QXJyb3dSaWdodH0gZnJvbSAnLi9pY29ucyc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi9zd2l0Y2gnO1xuXG5leHBvcnQgdHlwZSBBY3Rpb25QYW5lbFByb3BzID0gUHJvcHNXaXRoQ2hpbGRyZW48e1xuICBjb2xvcj86IHN0cmluZztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBkaXJlY3Rpb24/OiBzdHJpbmc7XG59PjtcblxuZXhwb3J0IHR5cGUgQWN0aW9uUGFuZWxJdGVtUHJvcHMgPSBQcm9wc1dpdGhDaGlsZHJlbjx7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIEljb24/OiBFbGVtZW50VHlwZTtcbiAgbGFiZWw6IHN0cmluZztcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XG4gIGlzU2VsZWN0aW9uPzogYm9vbGVhbjtcbiAgaXNBY3RpdmU/OiBib29sZWFuO1xuICBzdHlsZT86IENTU1Byb3BlcnRpZXM7XG59PjtcblxuZXhwb3J0IGludGVyZmFjZSBEaXJlY3Rpb25Qcm9wIHtcbiAgZGlyZWN0aW9uOiBzdHJpbmc7XG59XG5cbmNvbnN0IFN0eWxlZEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBwYWRkaW5nOiA4cHggMTZweCA4cHggOHB4O1xuICBtaW4taGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmFjdGlvblBhbmVsSGVpZ2h0fXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RCZ2R9O1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJHtwcm9wcyA9PiAocHJvcHMuY29sb3IgPyBgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZ2IoJHtwcm9wcy5jb2xvcn0pO2AgOiAnJyl9IDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgICAubmVzdGVkLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuXG4gIC5sYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG5cbiAgLmxhYmVsLWljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgfVxuICAuaWNvbiB7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5uZXN0ZWQtZ3JvdXAge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgdG9wOiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XG5cbiAgICBsYWJlbCB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRDaGVja2VkYm94ID0gc3R5bGVkKENoZWNrYm94KWBcbiAgbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICB3aWR0aDogMTJweDtcbiAgICAgIGhlaWdodDogMTJweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0QmdkfTtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCByZW5kZXJDaGlsZHJlbiA9IChjaGlsZDogUmVhY3ROb2RlLCBpbmRleDogbnVtYmVyKSA9PlxuICBjaGlsZCAmJlxuICBSZWFjdC5pc1ZhbGlkRWxlbWVudDxhbnk+KGNoaWxkKSAmJlxuICBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMub25DbGljaykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGluZGV4KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNsYXNzTmFtZTogY2xhc3NuYW1lcygnYWN0aW9uLXBhbmVsLWl0ZW0nLCBjaGlsZC5wcm9wcy5jbGFzc05hbWUpXG4gIH0pO1xuXG4vKiogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vYWN0aW9uLXBhbmVsJykuQWN0aW9uUGFuZWxJdGVtfSAqL1xuZXhwb3J0IGNvbnN0IEFjdGlvblBhbmVsSXRlbSA9IFJlYWN0Lm1lbW8oXG4gICh7XG4gICAgY2hpbGRyZW4sXG4gICAgY29sb3IsXG4gICAgY2xhc3NOYW1lLFxuICAgIEljb24sXG4gICAgbGFiZWwsXG4gICAgb25DbGljayxcbiAgICBpc1NlbGVjdGlvbixcbiAgICBpc0FjdGl2ZSxcbiAgICBzdHlsZVxuICB9OiBBY3Rpb25QYW5lbEl0ZW1Qcm9wcykgPT4ge1xuICAgIGNvbnN0IG9uQ2xpY2tDYWxsYmFjayA9IHVzZUNhbGxiYWNrKFxuICAgICAgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgb25DbGljaz8uKCk7XG4gICAgICB9LFxuICAgICAgW29uQ2xpY2tdXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkSXRlbSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gb25DbGljaz17b25DbGlja0NhbGxiYWNrfSBjb2xvcj17Y29sb3J9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIHtJY29uID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxuICAgICAgICAgICAgPEljb24gaGVpZ2h0PVwiMTZweFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICB7aXNTZWxlY3Rpb24gPyAoXG4gICAgICAgICAgPFN0eWxlZENoZWNrZWRib3hcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBjaGVja2VkPXtCb29sZWFuKGlzQWN0aXZlKX1cbiAgICAgICAgICAgIGlkPXtgc3dpdGNoLSR7bGFiZWx9YH1cbiAgICAgICAgICAgIHNlY29uZGFyeVxuICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj57bGFiZWx9PC9zcGFuPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW4gPyAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtaWNvblwiPlxuICAgICAgICAgICAgICA8QXJyb3dSaWdodCBoZWlnaHQ9XCIxNnB4XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXN0ZWQtZ3JvdXBcIj57UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCByZW5kZXJDaGlsZHJlbil9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9TdHlsZWRJdGVtPlxuICAgICk7XG4gIH1cbik7XG5cbkFjdGlvblBhbmVsSXRlbS5kaXNwbGF5TmFtZSA9ICdBY3Rpb25QYW5lbEl0ZW0nO1xuXG5jb25zdCBTdHlsZWRBY3Rpb25QYW5lbCA9IHN0eWxlZC5kaXY8RGlyZWN0aW9uUHJvcD5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzID0+IHByb3BzLmRpcmVjdGlvbn07XG4gIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0U2hhZG93fTtcbiAgdHJhbnNpdGlvbjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50cmFuc2l0aW9uU2xvd307XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG5cbiAgLmFjdGlvbi1wYW5lbC1pdGVtIHtcbiAgICAke3Byb3BzID0+XG4gICAgICBwcm9wcy5kaXJlY3Rpb24gPT09ICdjb2x1bW4nXG4gICAgICAgID8gYGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3Byb3BzLnRoZW1lLnBhbmVsSGVhZGVySWNvbn1gXG4gICAgICAgIDogYGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR7cHJvcHMudGhlbWUucGFuZWxIZWFkZXJJY29ufWB9ICY6bGFzdC1vZi10eXBlIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxuICB9XG5gO1xuXG4vLyBSZWFjdCBjb21wb3VuZCBlbGVtZW50IGh0dHBzOi8vbWVkaXVtLmNvbS9ARGFuZV9zL3JlYWN0LWpzLWNvbXBvdW5kLWNvbXBvbmVudHMtYTZlNTRiNWM5OTkyXG4vKiogQHR5cGUge3R5cGVvZiBpbXBvcnQoJy4vYWN0aW9uLXBhbmVsJykuQWN0aW9uUGFuZWx9ICovXG5jb25zdCBBY3Rpb25QYW5lbCA9ICh7Y2hpbGRyZW4sIGNsYXNzTmFtZSwgZGlyZWN0aW9uID0gJ2NvbHVtbid9OiBBY3Rpb25QYW5lbFByb3BzKSA9PiAoXG4gIDxTdHlsZWRBY3Rpb25QYW5lbCBjbGFzc05hbWU9e2NsYXNzTmFtZX0gZGlyZWN0aW9uPXtkaXJlY3Rpb259PlxuICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHJlbmRlckNoaWxkcmVuKX1cbiAgPC9TdHlsZWRBY3Rpb25QYW5lbD5cbik7XG5cbkFjdGlvblBhbmVsLmRpc3BsYXlOYW1lID0gJ0FjdGlvblBhbmVsJztcblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uUGFuZWw7XG4iXX0=