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

var Warning = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Warning, _Component);

  var _super = _createSuper(Warning);

  function Warning() {
    (0, _classCallCheck2["default"])(this, Warning);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Warning, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], (0, _extends2["default"])({
        viewBox: "0 0 64 64"
      }, this.props), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M0.349,49h49.302L25,1.842L0.349,49z M3.651,47L25,6.159L46.349,47H3.651z"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        height: "18",
        width: "2",
        x: "24",
        y: "18"
      }), /*#__PURE__*/_react["default"].createElement("rect", {
        height: "3",
        width: "2",
        x: "24",
        y: "39"
      }));
    }
  }]);
  return Warning;
}(_react.Component);

exports["default"] = Warning;
(0, _defineProperty2["default"])(Warning, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-warning',
  stroke: '#FFF'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vaWNvbnMvd2FybmluZy50c3giXSwibmFtZXMiOlsiV2FybmluZyIsInByb3BzIiwiQ29tcG9uZW50IiwiaGVpZ2h0IiwicHJlZGVmaW5lZENsYXNzTmFtZSIsInN0cm9rZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7Ozs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7V0FPbkIsa0JBQVM7QUFDUCwwQkFDRSxnQ0FBQyxnQkFBRDtBQUFNLFFBQUEsT0FBTyxFQUFDO0FBQWQsU0FBOEIsS0FBS0MsS0FBbkMsZ0JBQ0U7QUFBTSxRQUFBLENBQUMsRUFBQztBQUFSLFFBREYsZUFFRTtBQUFNLFFBQUEsTUFBTSxFQUFDLElBQWI7QUFBa0IsUUFBQSxLQUFLLEVBQUMsR0FBeEI7QUFBNEIsUUFBQSxDQUFDLEVBQUMsSUFBOUI7QUFBbUMsUUFBQSxDQUFDLEVBQUM7QUFBckMsUUFGRixlQUdFO0FBQU0sUUFBQSxNQUFNLEVBQUMsR0FBYjtBQUFpQixRQUFBLEtBQUssRUFBQyxHQUF2QjtBQUEyQixRQUFBLENBQUMsRUFBQyxJQUE3QjtBQUFrQyxRQUFBLENBQUMsRUFBQztBQUFwQyxRQUhGLENBREY7QUFPRDs7O0VBZmtDQyxnQjs7O2lDQUFoQkYsTyxrQkFDRztBQUNwQkcsRUFBQUEsTUFBTSxFQUFFLE1BRFk7QUFFcEJDLEVBQUFBLG1CQUFtQixFQUFFLHVCQUZEO0FBR3BCQyxFQUFBQSxNQUFNLEVBQUU7QUFIWSxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZSwge0Jhc2VQcm9wc30gZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FybmluZyBleHRlbmRzIENvbXBvbmVudDxQYXJ0aWFsPEJhc2VQcm9wcz4+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICBwcmVkZWZpbmVkQ2xhc3NOYW1lOiAnZGF0YS1leC1pY29ucy13YXJuaW5nJyxcbiAgICBzdHJva2U6ICcjRkZGJ1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJhc2Ugdmlld0JveD1cIjAgMCA2NCA2NFwiIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPHBhdGggZD1cIk0wLjM0OSw0OWg0OS4zMDJMMjUsMS44NDJMMC4zNDksNDl6IE0zLjY1MSw0N0wyNSw2LjE1OUw0Ni4zNDksNDdIMy42NTF6XCIgLz5cbiAgICAgICAgPHJlY3QgaGVpZ2h0PVwiMThcIiB3aWR0aD1cIjJcIiB4PVwiMjRcIiB5PVwiMThcIiAvPlxuICAgICAgICA8cmVjdCBoZWlnaHQ9XCIzXCIgd2lkdGg9XCIyXCIgeD1cIjI0XCIgeT1cIjM5XCIgLz5cbiAgICAgIDwvQmFzZT5cbiAgICApO1xuICB9XG59XG4iXX0=