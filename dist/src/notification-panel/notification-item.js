"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NotificationItemFactory;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icons = require("../common/icons");

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var NotificationItemContentBlock = _styledComponents["default"].div.attrs({
  className: 'notification-item--content-block'
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: block;\n  position: relative;\n  width: ", "px;\n  margin-left: auto;\n"])), function (props) {
  return props.theme.notificationPanelItemWidth * (1 + Number(props.isExpanded));
});

var NotificationItemContent = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  color: #fff;\n  display: flex;\n  flex-direction: row;\n  width: ", "px;\n  height: ", "px;\n  font-size: 11px;\n  margin-bottom: 1rem;\n  padding: 1em;\n  border-radius: 4px;\n  box-shadow: ", ";\n  cursor: pointer;\n"])), function (props) {
  return props.theme.notificationColors[props.type] || '#000';
}, function (props) {
  return props.theme.notificationPanelItemWidth * (1 + Number(props.isExpanded));
}, function (props) {
  return props.theme.notificationPanelItemHeight * (1 + Number(props.isExpanded));
}, function (props) {
  return props.theme.boxShadow;
});

var DeleteIcon = (0, _styledComponents["default"])(_icons.Delete)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  cursor: pointer;\n  width: 13px;\n  height: 13px;\n"])));

var NotificationCounter = _styledComponents["default"].div.attrs({
  className: 'notification-item--counter'
})(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  font-size: 11px;\n  font-weight: bold;\n  text-align: center;\n  left: -4px;\n  bottom: -4px;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  background-color: #ffffff;\n  border: 1px solid ", ";\n  color: ", ";\n  box-shadow: ", ";\n"])), function (props) {
  return props.theme.notificationColors[props.type] || '#000';
}, function (props) {
  return props.theme.notificationColors[props.type] || '#000';
}, function (props) {
  return props.theme.boxShadow;
});

var NotificationMessage = _styledComponents["default"].div.attrs({
  className: 'notification-item--message'
})(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 2;\n  width: ", "px;\n  margin: 0 1em;\n  overflow: ", ";\n  padding-right: ", ";\n\n  p {\n    margin-top: 0;\n    a {\n      color: #fff;\n      text-decoration: underline;\n    }\n  }\n"])), function (props) {
  return props.theme.notificationPanelItemWidth;
}, function (props) {
  return props.isExpanded ? 'auto' : 'hidden';
}, function (props) {
  return props.isExpanded ? '1em' : 0;
});

var NotificationIcon = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  svg {\n    vertical-align: text-top;\n  }\n"])));

var icons = {
  info: /*#__PURE__*/_react["default"].createElement(_icons.Info, null),
  warning: /*#__PURE__*/_react["default"].createElement(_icons.Warning, null),
  error: /*#__PURE__*/_react["default"].createElement(_icons.Warning, null),
  success: /*#__PURE__*/_react["default"].createElement(_icons.Checkmark, null)
};

var LinkRenderer = function LinkRenderer(props) {
  return /*#__PURE__*/_react["default"].createElement("a", {
    href: props.href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, props.children);
};

function NotificationItemFactory() {
  return /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(NotificationItem, _Component);

    var _super = _createSuper(NotificationItem);

    function NotificationItem() {
      var _this;

      (0, _classCallCheck2["default"])(this, NotificationItem);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        isExpanded: false
      });
      return _this;
    }

    (0, _createClass2["default"])(NotificationItem, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.isExpanded) {
          this.setState({
            isExpanded: true
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            notification = _this$props.notification,
            removeNotification = _this$props.removeNotification;
        var isExpanded = this.state.isExpanded;
        return /*#__PURE__*/_react["default"].createElement(NotificationItemContentBlock, {
          isExpanded: isExpanded,
          theme: this.props.theme
        }, (notification.count || 0) > 1 ? /*#__PURE__*/_react["default"].createElement(NotificationCounter, {
          type: notification.type,
          theme: this.props.theme
        }, notification.count) : null, /*#__PURE__*/_react["default"].createElement(NotificationItemContent, {
          className: "notification-item",
          type: notification.type,
          isExpanded: isExpanded,
          onClick: function onClick() {
            return _this2.setState({
              isExpanded: !isExpanded
            });
          }
        }, /*#__PURE__*/_react["default"].createElement(NotificationIcon, {
          className: "notification-item--icon"
        }, icons[notification.type]), /*#__PURE__*/_react["default"].createElement(NotificationMessage, {
          isExpanded: isExpanded,
          theme: this.props.theme
        }, /*#__PURE__*/_react["default"].createElement(_reactMarkdown["default"], {
          source: notification.message,
          renderers: {
            link: LinkRenderer
          }
        })), typeof removeNotification === 'function' ? /*#__PURE__*/_react["default"].createElement("div", {
          className: "notification-item--action"
        }, /*#__PURE__*/_react["default"].createElement(DeleteIcon, {
          height: "10px",
          onClick: function onClick() {
            return removeNotification(notification.id);
          }
        })) : null));
      }
    }]);
    return NotificationItem;
  }(_react.Component);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9ub3RpZmljYXRpb24tcGFuZWwvbm90aWZpY2F0aW9uLWl0ZW0udHN4Il0sIm5hbWVzIjpbIk5vdGlmaWNhdGlvbkl0ZW1Db250ZW50QmxvY2siLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsInByb3BzIiwidGhlbWUiLCJub3RpZmljYXRpb25QYW5lbEl0ZW1XaWR0aCIsIk51bWJlciIsImlzRXhwYW5kZWQiLCJOb3RpZmljYXRpb25JdGVtQ29udGVudCIsIm5vdGlmaWNhdGlvbkNvbG9ycyIsInR5cGUiLCJub3RpZmljYXRpb25QYW5lbEl0ZW1IZWlnaHQiLCJib3hTaGFkb3ciLCJEZWxldGVJY29uIiwiRGVsZXRlIiwiTm90aWZpY2F0aW9uQ291bnRlciIsIk5vdGlmaWNhdGlvbk1lc3NhZ2UiLCJOb3RpZmljYXRpb25JY29uIiwiaWNvbnMiLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwic3VjY2VzcyIsIkxpbmtSZW5kZXJlciIsImhyZWYiLCJjaGlsZHJlbiIsIk5vdGlmaWNhdGlvbkl0ZW1GYWN0b3J5Iiwic2V0U3RhdGUiLCJub3RpZmljYXRpb24iLCJyZW1vdmVOb3RpZmljYXRpb24iLCJzdGF0ZSIsImNvdW50IiwibWVzc2FnZSIsImxpbmsiLCJpZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQU9BLElBQU1BLDRCQUE0QixHQUFHQyw2QkFBT0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQ3BEQyxFQUFBQSxTQUFTLEVBQUU7QUFEeUMsQ0FBakIsQ0FBSCwyS0FLdkIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQywwQkFBWixJQUEwQyxJQUFJQyxNQUFNLENBQUNILEtBQUssQ0FBQ0ksVUFBUCxDQUFwRCxDQUFKO0FBQUEsQ0FMa0Is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QUwsQ0FBV0M7QUFBL0Qsd0JBQ0UsZ0NBQUMseUJBQUQ7QUFBZSxVQUFBLE1BQU0sRUFBRXdCLFlBQVksQ0FBQ0ksT0FBcEM7QUFBNkMsVUFBQSxTQUFTLEVBQUU7QUFBQ0MsWUFBQUEsSUFBSSxFQUFFVjtBQUFQO0FBQXhELFVBREYsQ0FURixFQVlHLE9BQU9NLGtCQUFQLEtBQThCLFVBQTlCLGdCQUNDO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZix3QkFDRSxnQ0FBQyxVQUFEO0FBQVksVUFBQSxNQUFNLEVBQUMsTUFBbkI7QUFBMEIsVUFBQSxPQUFPLEVBQUU7QUFBQSxtQkFBTUEsa0JBQWtCLENBQUNELFlBQVksQ0FBQ00sRUFBZCxDQUF4QjtBQUFBO0FBQW5DLFVBREYsQ0FERCxHQUlHLElBaEJOLENBTkYsQ0FERjtBQTJCRDtBQTFDSDtBQUFBO0FBQUEsSUFBc0NDLGdCQUF0QztBQTRDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0RlbGV0ZSwgSW5mbywgV2FybmluZywgQ2hlY2ttYXJrfSBmcm9tICcuLi9jb21tb24vaWNvbnMnO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nO1xuaW1wb3J0IHtBY3Rpb25IYW5kbGVyLCByZW1vdmVOb3RpZmljYXRpb24gYXMgcmVtb3ZlTm90aWZpY2F0aW9uQWN0aW9uc30gZnJvbSAnQGtlcGxlci5nbC9hY3Rpb25zJztcblxuaW50ZXJmYWNlIE5vdGlmaWNhdGlvbkl0ZW1Db250ZW50QmxvY2tQcm9wcyB7XG4gIGlzRXhwYW5kZWQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBOb3RpZmljYXRpb25JdGVtQ29udGVudEJsb2NrID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ25vdGlmaWNhdGlvbi1pdGVtLS1jb250ZW50LWJsb2NrJ1xufSk8Tm90aWZpY2F0aW9uSXRlbUNvbnRlbnRCbG9ja1Byb3BzPmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubm90aWZpY2F0aW9uUGFuZWxJdGVtV2lkdGggKiAoMSArIE51bWJlcihwcm9wcy5pc0V4cGFuZGVkKSl9cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuYDtcblxuaW50ZXJmYWNlIE5vdGlmaWNhdGlvbkl0ZW1Db250ZW50UHJvcHMge1xuICB0eXBlOiBzdHJpbmc7XG4gIGlzRXhwYW5kZWQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBOb3RpZmljYXRpb25JdGVtQ29udGVudCA9IHN0eWxlZC5kaXY8Tm90aWZpY2F0aW9uSXRlbUNvbnRlbnRQcm9wcz5gXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubm90aWZpY2F0aW9uQ29sb3JzW3Byb3BzLnR5cGVdIHx8ICcjMDAwJ307XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ub3RpZmljYXRpb25QYW5lbEl0ZW1XaWR0aCAqICgxICsgTnVtYmVyKHByb3BzLmlzRXhwYW5kZWQpKX1weDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm5vdGlmaWNhdGlvblBhbmVsSXRlbUhlaWdodCAqICgxICsgTnVtYmVyKHByb3BzLmlzRXhwYW5kZWQpKX1weDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ib3hTaGFkb3d9O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5jb25zdCBEZWxldGVJY29uID0gc3R5bGVkKERlbGV0ZSlgXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEzcHg7XG4gIGhlaWdodDogMTNweDtcbmA7XG5cbmludGVyZmFjZSBOb3RpZmljYXRpb25Db3VudGVyUHJvcHMge1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmNvbnN0IE5vdGlmaWNhdGlvbkNvdW50ZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnbm90aWZpY2F0aW9uLWl0ZW0tLWNvdW50ZXInXG59KTxOb3RpZmljYXRpb25Db3VudGVyUHJvcHM+YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGVmdDogLTRweDtcbiAgYm90dG9tOiAtNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubm90aWZpY2F0aW9uQ29sb3JzW3Byb3BzLnR5cGVdIHx8ICcjMDAwJ307XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm5vdGlmaWNhdGlvbkNvbG9yc1twcm9wcy50eXBlXSB8fCAnIzAwMCd9O1xuICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJveFNoYWRvd307XG5gO1xuXG5pbnRlcmZhY2UgTm90aWZpY2F0aW9uTWVzc2FnZVByb3BzIHtcbiAgaXNFeHBhbmRlZD86IGJvb2xlYW47XG59XG5cbmNvbnN0IE5vdGlmaWNhdGlvbk1lc3NhZ2UgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnbm90aWZpY2F0aW9uLWl0ZW0tLW1lc3NhZ2UnXG59KTxOb3RpZmljYXRpb25NZXNzYWdlUHJvcHM+YFxuICBmbGV4LWdyb3c6IDI7XG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm5vdGlmaWNhdGlvblBhbmVsSXRlbVdpZHRofXB4O1xuICBtYXJnaW46IDAgMWVtO1xuICBvdmVyZmxvdzogJHtwcm9wcyA9PiAocHJvcHMuaXNFeHBhbmRlZCA/ICdhdXRvJyA6ICdoaWRkZW4nKX07XG4gIHBhZGRpbmctcmlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmlzRXhwYW5kZWQgPyAnMWVtJyA6IDApfTtcblxuICBwIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGEge1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IE5vdGlmaWNhdGlvbkljb24gPSBzdHlsZWQuZGl2YFxuICBzdmcge1xuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcbiAgfVxuYDtcblxuY29uc3QgaWNvbnMgPSB7XG4gIGluZm86IDxJbmZvIC8+LFxuICB3YXJuaW5nOiA8V2FybmluZyAvPixcbiAgZXJyb3I6IDxXYXJuaW5nIC8+LFxuICBzdWNjZXNzOiA8Q2hlY2ttYXJrIC8+XG59O1xuXG5jb25zdCBMaW5rUmVuZGVyZXIgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGEgaHJlZj17cHJvcHMuaHJlZn0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvYT5cbiAgKTtcbn07XG5cbmludGVyZmFjZSBOb3RpZmljYXRpb25JdGVtUHJvcHMge1xuICBub3RpZmljYXRpb246IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgY291bnQ/OiBudW1iZXI7XG4gIH07XG4gIGlzRXhwYW5kZWQ/OiBib29sZWFuO1xuICByZW1vdmVOb3RpZmljYXRpb24/OiBBY3Rpb25IYW5kbGVyPHR5cGVvZiByZW1vdmVOb3RpZmljYXRpb25BY3Rpb25zPjtcbiAgdGhlbWU/OiBhbnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGlmaWNhdGlvbkl0ZW1GYWN0b3J5KCkge1xuICByZXR1cm4gY2xhc3MgTm90aWZpY2F0aW9uSXRlbSBleHRlbmRzIENvbXBvbmVudDxOb3RpZmljYXRpb25JdGVtUHJvcHM+IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgIGlzRXhwYW5kZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuaXNFeHBhbmRlZCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0V4cGFuZGVkOiB0cnVlfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge25vdGlmaWNhdGlvbiwgcmVtb3ZlTm90aWZpY2F0aW9ufSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7aXNFeHBhbmRlZH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Tm90aWZpY2F0aW9uSXRlbUNvbnRlbnRCbG9jayBpc0V4cGFuZGVkPXtpc0V4cGFuZGVkfSB0aGVtZT17dGhpcy5wcm9wcy50aGVtZX0+XG4gICAgICAgICAgeyhub3RpZmljYXRpb24uY291bnQgfHwgMCkgPiAxID8gKFxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvbkNvdW50ZXIgdHlwZT17bm90aWZpY2F0aW9uLnR5cGV9IHRoZW1lPXt0aGlzLnByb3BzLnRoZW1lfT5cbiAgICAgICAgICAgICAge25vdGlmaWNhdGlvbi5jb3VudH1cbiAgICAgICAgICAgIDwvTm90aWZpY2F0aW9uQ291bnRlcj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8Tm90aWZpY2F0aW9uSXRlbUNvbnRlbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1pdGVtXCJcbiAgICAgICAgICAgIHR5cGU9e25vdGlmaWNhdGlvbi50eXBlfVxuICAgICAgICAgICAgaXNFeHBhbmRlZD17aXNFeHBhbmRlZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe2lzRXhwYW5kZWQ6ICFpc0V4cGFuZGVkfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvbkljb24gY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uLWl0ZW0tLWljb25cIj5cbiAgICAgICAgICAgICAge2ljb25zW25vdGlmaWNhdGlvbi50eXBlXX1cbiAgICAgICAgICAgIDwvTm90aWZpY2F0aW9uSWNvbj5cbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25NZXNzYWdlIGlzRXhwYW5kZWQ9e2lzRXhwYW5kZWR9IHRoZW1lPXt0aGlzLnByb3BzLnRoZW1lfT5cbiAgICAgICAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXtub3RpZmljYXRpb24ubWVzc2FnZX0gcmVuZGVyZXJzPXt7bGluazogTGlua1JlbmRlcmVyfX0gLz5cbiAgICAgICAgICAgIDwvTm90aWZpY2F0aW9uTWVzc2FnZT5cbiAgICAgICAgICAgIHt0eXBlb2YgcmVtb3ZlTm90aWZpY2F0aW9uID09PSAnZnVuY3Rpb24nID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1pdGVtLS1hY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiBoZWlnaHQ9XCIxMHB4XCIgb25DbGljaz17KCkgPT4gcmVtb3ZlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbi5pZCl9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9Ob3RpZmljYXRpb25JdGVtQ29udGVudD5cbiAgICAgICAgPC9Ob3RpZmljYXRpb25JdGVtQ29udGVudEJsb2NrPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG4iXX0=