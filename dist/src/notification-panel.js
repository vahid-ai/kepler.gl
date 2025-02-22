"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = NotificationPanelFactory;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _notificationItem = _interopRequireDefault(require("./notification-panel/notification-item"));

var _constants = require("@kepler.gl/constants");

var _templateObject;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var NotificationPanelContent = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background: transparent;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  padding: 4px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  position: absolute;\n  top: 1em;\n  right: 1em;\n  z-index: 10000;\n  box-sizing: border-box;\n"])));

NotificationPanelFactory.deps = [_notificationItem["default"]];

function NotificationPanelFactory(NotificationItem) {
  var NotificationPanelUnmemoized = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(NotificationPanelUnmemoized, _Component);

    var _super = _createSuper(NotificationPanelUnmemoized);

    function NotificationPanelUnmemoized() {
      (0, _classCallCheck2["default"])(this, NotificationPanelUnmemoized);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(NotificationPanelUnmemoized, [{
      key: "render",
      value: function render() {
        var _this = this;

        var globalNotifications = this.props.notifications.filter(function (n) {
          return n.topic === _constants.DEFAULT_NOTIFICATION_TOPICS.global;
        });
        return /*#__PURE__*/_react["default"].createElement(NotificationPanelContent, {
          className: "notification-panel",
          style: {
            display: globalNotifications.length ? 'block' : 'none'
          }
        }, globalNotifications.map(function (n) {
          return /*#__PURE__*/_react["default"].createElement(NotificationItem, {
            key: n.id,
            notification: n,
            removeNotification: _this.props.removeNotification
          });
        }));
      }
    }]);
    return NotificationPanelUnmemoized;
  }(_react.Component);

  (0, _defineProperty2["default"])(NotificationPanelUnmemoized, "displayName", 'NotificationPanel');

  var NotificationPanel = /*#__PURE__*/_react["default"].memo(NotificationPanelUnmemoized);

  return NotificationPanel;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9ub3RpZmljYXRpb24tcGFuZWwudHN4Il0sIm5hbWVzIjpbIk5vdGlmaWNhdGlvblBhbmVsQ29udGVudCIsInN0eWxlZCIsImRpdiIsIk5vdGlmaWNhdGlvblBhbmVsRmFjdG9yeSIsImRlcHMiLCJOb3RpZmljYXRpb25JdGVtRmFjdG9yeSIsIk5vdGlmaWNhdGlvbkl0ZW0iLCJOb3RpZmljYXRpb25QYW5lbFVubWVtb2l6ZWQiLCJnbG9iYWxOb3RpZmljYXRpb25zIiwicHJvcHMiLCJub3RpZmljYXRpb25zIiwiZmlsdGVyIiwibiIsInRvcGljIiwiREVGQVVMVF9OT1RJRklDQVRJT05fVE9QSUNTIiwiZ2xvYmFsIiwiZGlzcGxheSIsImxlbmd0aCIsIm1hcCIsImlkIiwicmVtb3ZlTm90aWZpY2F0aW9uIiwiQ29tcG9uZW50IiwiTm90aWZpY2F0aW9uUGFuZWwiLCJSZWFjdCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7O0FBSUEsSUFBTUEsd0JBQXdCLEdBQUdDLDZCQUFPQyxHQUFWLHlWQUE5Qjs7QUFlQUMsd0JBQXdCLENBQUNDLElBQXpCLEdBQWdDLENBQUNDLDRCQUFELENBQWhDOztBQU9lLFNBQVNGLHdCQUFULENBQ2JHLGdCQURhLEVBRWlDO0FBQUEsTUFDeENDLDJCQUR3QztBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxhQUk1QyxrQkFBUztBQUFBOztBQUNQLFlBQU1DLG1CQUFtQixHQUFHLEtBQUtDLEtBQUwsQ0FBV0MsYUFBWCxDQUF5QkMsTUFBekIsQ0FDMUIsVUFBQUMsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUNDLEtBQUYsS0FBWUMsdUNBQTRCQyxNQUE1QztBQUFBLFNBRHlCLENBQTVCO0FBR0EsNEJBQ0UsZ0NBQUMsd0JBQUQ7QUFDRSxVQUFBLFNBQVMsRUFBQyxvQkFEWjtBQUVFLFVBQUEsS0FBSyxFQUFFO0FBQUNDLFlBQUFBLE9BQU8sRUFBRVIsbUJBQW1CLENBQUNTLE1BQXBCLEdBQTZCLE9BQTdCLEdBQXVDO0FBQWpEO0FBRlQsV0FJR1QsbUJBQW1CLENBQUNVLEdBQXBCLENBQXdCLFVBQUFOLENBQUM7QUFBQSw4QkFDeEIsZ0NBQUMsZ0JBQUQ7QUFDRSxZQUFBLEdBQUcsRUFBRUEsQ0FBQyxDQUFDTyxFQURUO0FBRUUsWUFBQSxZQUFZLEVBQUVQLENBRmhCO0FBR0UsWUFBQSxrQkFBa0IsRUFBRSxLQUFJLENBQUNILEtBQUwsQ0FBV1c7QUFIakMsWUFEd0I7QUFBQSxTQUF6QixDQUpILENBREY7QUFjRDtBQXRCMkM7QUFBQTtBQUFBLElBQ0pDLGdCQURJOztBQUFBLG1DQUN4Q2QsMkJBRHdDLGlCQUV2QixtQkFGdUI7O0FBeUI5QyxNQUFNZSxpQkFBaUIsZ0JBQUlDLGtCQUFNQyxJQUFOLENBQ3pCakIsMkJBRHlCLENBQTNCOztBQUdBLFNBQU9lLGlCQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgTm90aWZpY2F0aW9uSXRlbUZhY3RvcnkgZnJvbSAnLi9ub3RpZmljYXRpb24tcGFuZWwvbm90aWZpY2F0aW9uLWl0ZW0nO1xuaW1wb3J0IHtERUZBVUxUX05PVElGSUNBVElPTl9UT1BJQ1N9IGZyb20gJ0BrZXBsZXIuZ2wvY29uc3RhbnRzJztcbmltcG9ydCB7Tm90aWZpY2F0aW9uc30gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5pbXBvcnQge3JlbW92ZU5vdGlmaWNhdGlvbn0gZnJvbSAnQGtlcGxlci5nbC9hY3Rpb25zJztcblxuY29uc3QgTm90aWZpY2F0aW9uUGFuZWxDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcGFkZGluZzogNHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxZW07XG4gIHJpZ2h0OiAxZW07XG4gIHotaW5kZXg6IDEwMDAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuYDtcblxuTm90aWZpY2F0aW9uUGFuZWxGYWN0b3J5LmRlcHMgPSBbTm90aWZpY2F0aW9uSXRlbUZhY3RvcnldO1xuXG5pbnRlcmZhY2UgTm90aWZpY2F0aW9uUGFuZWxQcm9wcyB7XG4gIHJlbW92ZU5vdGlmaWNhdGlvbj86IHR5cGVvZiByZW1vdmVOb3RpZmljYXRpb247XG4gIG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbnNbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90aWZpY2F0aW9uUGFuZWxGYWN0b3J5KFxuICBOb3RpZmljYXRpb25JdGVtOiBSZXR1cm5UeXBlPHR5cGVvZiBOb3RpZmljYXRpb25JdGVtRmFjdG9yeT5cbik6IFJlYWN0LkNvbXBvbmVudENsYXNzPE5vdGlmaWNhdGlvblBhbmVsUHJvcHM+IHtcbiAgY2xhc3MgTm90aWZpY2F0aW9uUGFuZWxVbm1lbW9pemVkIGV4dGVuZHMgQ29tcG9uZW50PE5vdGlmaWNhdGlvblBhbmVsUHJvcHM+IHtcbiAgICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnTm90aWZpY2F0aW9uUGFuZWwnO1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgZ2xvYmFsTm90aWZpY2F0aW9ucyA9IHRoaXMucHJvcHMubm90aWZpY2F0aW9ucy5maWx0ZXIoXG4gICAgICAgIG4gPT4gbi50b3BpYyA9PT0gREVGQVVMVF9OT1RJRklDQVRJT05fVE9QSUNTLmdsb2JhbFxuICAgICAgKTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxOb3RpZmljYXRpb25QYW5lbENvbnRlbnRcbiAgICAgICAgICBjbGFzc05hbWU9XCJub3RpZmljYXRpb24tcGFuZWxcIlxuICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogZ2xvYmFsTm90aWZpY2F0aW9ucy5sZW5ndGggPyAnYmxvY2snIDogJ25vbmUnfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtnbG9iYWxOb3RpZmljYXRpb25zLm1hcChuID0+IChcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25JdGVtXG4gICAgICAgICAgICAgIGtleT17bi5pZH1cbiAgICAgICAgICAgICAgbm90aWZpY2F0aW9uPXtufVxuICAgICAgICAgICAgICByZW1vdmVOb3RpZmljYXRpb249e3RoaXMucHJvcHMucmVtb3ZlTm90aWZpY2F0aW9ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Ob3RpZmljYXRpb25QYW5lbENvbnRlbnQ+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IE5vdGlmaWNhdGlvblBhbmVsID0gKFJlYWN0Lm1lbW8oXG4gICAgTm90aWZpY2F0aW9uUGFuZWxVbm1lbW9pemVkXG4gICkgYXMgdW5rbm93bikgYXMgdHlwZW9mIE5vdGlmaWNhdGlvblBhbmVsVW5tZW1vaXplZDtcbiAgcmV0dXJuIE5vdGlmaWNhdGlvblBhbmVsO1xufVxuIl19