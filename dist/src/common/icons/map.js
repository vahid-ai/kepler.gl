"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _base = _interopRequireDefault(require("./base"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MapIcon = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(MapIcon, _Component);

  var _super = _createSuper(MapIcon);

  function MapIcon() {
    (0, _classCallCheck2["default"])(this, MapIcon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(MapIcon, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], (0, _extends2["default"])({
        viewBox: '0 0 602 602'
      }, this.props), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M573.864,323.679l25.6-201.737L409.988,50.046L197.993,151.289L0,67.678l27.935,220.105L2.223,506.009l208.665,39.135 l200.136-38.125l189.865,43.823L573.864,323.679z M210.855,522.625L26.64,488.076l23.732-199.335L26.803,103.007l171.761,72.543 L410.987,74.083l164.331,62.361l-23.755,187.142l23.648,198.602l-163.764-37.782L210.855,522.625z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M506.021,405.449c-5.509,0-10.604,1.596-15.049,4.167c-17.531-12.832-35.583-27.904-36.47-47.735 c-1.217-27.195,15.439-53.227-3.623-78.182c-18.625-24.382-66.301-7.944-84.73-26.264c2.873-4.617,4.593-10.01,4.593-15.844 c0-16.671-13.519-30.192-30.187-30.192c-16.68,0-30.192,13.515-30.192,30.192c0,9.561,4.534,17.98,11.467,23.513 c-2.907,7.358-4.729,15.167-5.048,23.141c-0.496,12.596,3.121,25.126,0.391,37.634c-2.252,10.391-16.875,9.729-24.757,9.788 c-19.875,0.177-48.202-3.57-61.023,10.462c-3.783-2.843-8.207-4.812-13.077-5.621c-2.87-25.848,2.098-51.102-20.824-70.985 c-14.736-12.794-38.846-18.344-52.438-32.719c2.873-4.619,4.61-10.031,4.61-15.871c0-16.674-13.515-30.198-30.189-30.198 c-16.668,0-30.192,13.515-30.192,30.198c0,16.668,13.515,30.183,30.192,30.183c5.562,0,10.707-1.604,15.179-4.229 c10.048,10.083,23.915,16.784,36.892,23.56c16.529,8.627,28.844,19.698,31.108,39.283c1.241,10.734,0.762,21.291,1.46,31.854 c-12.135,3.918-20.978,15.16-20.978,28.602c0,16.681,13.515,30.192,30.195,30.192c16.668,0,30.189-13.512,30.189-30.192 c0-3.942-0.81-7.701-2.189-11.159c10.024-18.063,56.066-5.745,73.423-11.55c12.644-4.238,17.13-16.083,18.247-28.365 c1.063-11.473-2.637-22.757-0.91-34.283c0.686-4.69,1.867-9.224,3.439-13.55c1.644,0.271,3.311,0.502,5.024,0.502 c5.308,0,10.22-1.489,14.559-3.904c18.684,18.713,55.768,6.174,79.328,20.271c28.017,16.754-0.792,64.046,8.051,89.309 c6.123,17.472,22.13,30.499,37.994,42.232c-2.902,4.64-4.664,10.084-4.664,15.953c0,16.681,13.507,30.192,30.198,30.192 c16.657,0,30.192-13.512,30.192-30.192C536.213,418.979,522.689,405.449,506.021,405.449z"
      })));
    }
  }]);
  return MapIcon;
}(_react.Component);

(0, _defineProperty2["default"])(MapIcon, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-add',
  totalColor: 1
});
var _default = MapIcon;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vaWNvbnMvbWFwLnRzeCJdLCJuYW1lcyI6WyJNYXBJY29uIiwicHJvcHMiLCJDb21wb25lbnQiLCJoZWlnaHQiLCJwcmVkZWZpbmVkQ2xhc3NOYW1lIiwidG90YWxDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7Ozs7O0lBRU1BLE87Ozs7Ozs7Ozs7OztXQU9KLGtCQUFTO0FBQ1AsMEJBQ0UsZ0NBQUMsZ0JBQUQ7QUFBTSxRQUFBLE9BQU8sRUFBRTtBQUFmLFNBQWtDLEtBQUtDLEtBQXZDLGdCQUNFLHdEQUNFO0FBQ0UsUUFBQSxDQUFDLEVBQUM7QUFESixRQURGLGVBTUU7QUFDRSxRQUFBLENBQUMsRUFBQztBQURKLFFBTkYsQ0FERixDQURGO0FBMkJEOzs7RUFuQ21CQyxnQjs7aUNBQWhCRixPLGtCQUNrQjtBQUNwQkcsRUFBQUEsTUFBTSxFQUFFLE1BRFk7QUFFcEJDLEVBQUFBLG1CQUFtQixFQUFFLG1CQUZEO0FBR3BCQyxFQUFBQSxVQUFVLEVBQUU7QUFIUSxDO2VBcUNUTCxPIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZSwge0Jhc2VQcm9wc30gZnJvbSAnLi9iYXNlJztcblxuY2xhc3MgTWFwSWNvbiBleHRlbmRzIENvbXBvbmVudDxQYXJ0aWFsPEJhc2VQcm9wcz4+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICBwcmVkZWZpbmVkQ2xhc3NOYW1lOiAnZGF0YS1leC1pY29ucy1hZGQnLFxuICAgIHRvdGFsQ29sb3I6IDFcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCYXNlIHZpZXdCb3g9eycwIDAgNjAyIDYwMid9IHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPGc+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNNTczLjg2NCwzMjMuNjc5bDI1LjYtMjAxLjczN0w0MDkuOTg4LDUwLjA0NkwxOTcuOTkzLDE1MS4yODlMMCw2Ny42NzhsMjcuOTM1LDIyMC4xMDVMMi4yMjMsNTA2LjAwOWwyMDguNjY1LDM5LjEzNVxuXHRcdFx0bDIwMC4xMzYtMzguMTI1bDE4OS44NjUsNDMuODIzTDU3My44NjQsMzIzLjY3OXogTTIxMC44NTUsNTIyLjYyNUwyNi42NCw0ODguMDc2bDIzLjczMi0xOTkuMzM1TDI2LjgwMywxMDMuMDA3bDE3MS43NjEsNzIuNTQzXG5cdFx0XHRMNDEwLjk4Nyw3NC4wODNsMTY0LjMzMSw2Mi4zNjFsLTIzLjc1NSwxODcuMTQybDIzLjY0OCwxOTguNjAybC0xNjMuNzY0LTM3Ljc4MkwyMTAuODU1LDUyMi42MjV6XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTUwNi4wMjEsNDA1LjQ0OWMtNS41MDksMC0xMC42MDQsMS41OTYtMTUuMDQ5LDQuMTY3Yy0xNy41MzEtMTIuODMyLTM1LjU4My0yNy45MDQtMzYuNDctNDcuNzM1XG5cdFx0XHRjLTEuMjE3LTI3LjE5NSwxNS40MzktNTMuMjI3LTMuNjIzLTc4LjE4MmMtMTguNjI1LTI0LjM4Mi02Ni4zMDEtNy45NDQtODQuNzMtMjYuMjY0YzIuODczLTQuNjE3LDQuNTkzLTEwLjAxLDQuNTkzLTE1Ljg0NFxuXHRcdFx0YzAtMTYuNjcxLTEzLjUxOS0zMC4xOTItMzAuMTg3LTMwLjE5MmMtMTYuNjgsMC0zMC4xOTIsMTMuNTE1LTMwLjE5MiwzMC4xOTJjMCw5LjU2MSw0LjUzNCwxNy45OCwxMS40NjcsMjMuNTEzXG5cdFx0XHRjLTIuOTA3LDcuMzU4LTQuNzI5LDE1LjE2Ny01LjA0OCwyMy4xNDFjLTAuNDk2LDEyLjU5NiwzLjEyMSwyNS4xMjYsMC4zOTEsMzcuNjM0Yy0yLjI1MiwxMC4zOTEtMTYuODc1LDkuNzI5LTI0Ljc1Nyw5Ljc4OFxuXHRcdFx0Yy0xOS44NzUsMC4xNzctNDguMjAyLTMuNTctNjEuMDIzLDEwLjQ2MmMtMy43ODMtMi44NDMtOC4yMDctNC44MTItMTMuMDc3LTUuNjIxYy0yLjg3LTI1Ljg0OCwyLjA5OC01MS4xMDItMjAuODI0LTcwLjk4NVxuXHRcdFx0Yy0xNC43MzYtMTIuNzk0LTM4Ljg0Ni0xOC4zNDQtNTIuNDM4LTMyLjcxOWMyLjg3My00LjYxOSw0LjYxLTEwLjAzMSw0LjYxLTE1Ljg3MWMwLTE2LjY3NC0xMy41MTUtMzAuMTk4LTMwLjE4OS0zMC4xOThcblx0XHRcdGMtMTYuNjY4LDAtMzAuMTkyLDEzLjUxNS0zMC4xOTIsMzAuMTk4YzAsMTYuNjY4LDEzLjUxNSwzMC4xODMsMzAuMTkyLDMwLjE4M2M1LjU2MiwwLDEwLjcwNy0xLjYwNCwxNS4xNzktNC4yMjlcblx0XHRcdGMxMC4wNDgsMTAuMDgzLDIzLjkxNSwxNi43ODQsMzYuODkyLDIzLjU2YzE2LjUyOSw4LjYyNywyOC44NDQsMTkuNjk4LDMxLjEwOCwzOS4yODNjMS4yNDEsMTAuNzM0LDAuNzYyLDIxLjI5MSwxLjQ2LDMxLjg1NFxuXHRcdFx0Yy0xMi4xMzUsMy45MTgtMjAuOTc4LDE1LjE2LTIwLjk3OCwyOC42MDJjMCwxNi42ODEsMTMuNTE1LDMwLjE5MiwzMC4xOTUsMzAuMTkyYzE2LjY2OCwwLDMwLjE4OS0xMy41MTIsMzAuMTg5LTMwLjE5MlxuXHRcdFx0YzAtMy45NDItMC44MS03LjcwMS0yLjE4OS0xMS4xNTljMTAuMDI0LTE4LjA2Myw1Ni4wNjYtNS43NDUsNzMuNDIzLTExLjU1YzEyLjY0NC00LjIzOCwxNy4xMy0xNi4wODMsMTguMjQ3LTI4LjM2NVxuXHRcdFx0YzEuMDYzLTExLjQ3My0yLjYzNy0yMi43NTctMC45MS0zNC4yODNjMC42ODYtNC42OSwxLjg2Ny05LjIyNCwzLjQzOS0xMy41NWMxLjY0NCwwLjI3MSwzLjMxMSwwLjUwMiw1LjAyNCwwLjUwMlxuXHRcdFx0YzUuMzA4LDAsMTAuMjItMS40ODksMTQuNTU5LTMuOTA0YzE4LjY4NCwxOC43MTMsNTUuNzY4LDYuMTc0LDc5LjMyOCwyMC4yNzFjMjguMDE3LDE2Ljc1NC0wLjc5Miw2NC4wNDYsOC4wNTEsODkuMzA5XG5cdFx0XHRjNi4xMjMsMTcuNDcyLDIyLjEzLDMwLjQ5OSwzNy45OTQsNDIuMjMyYy0yLjkwMiw0LjY0LTQuNjY0LDEwLjA4NC00LjY2NCwxNS45NTNjMCwxNi42ODEsMTMuNTA3LDMwLjE5MiwzMC4xOTgsMzAuMTkyXG5cdFx0XHRjMTYuNjU3LDAsMzAuMTkyLTEzLjUxMiwzMC4xOTItMzAuMTkyQzUzNi4yMTMsNDE4Ljk3OSw1MjIuNjg5LDQwNS40NDksNTA2LjAyMSw0MDUuNDQ5elwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9CYXNlPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwSWNvbjtcbiJdfQ==