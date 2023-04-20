"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _base = _interopRequireDefault(require("./base"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CursorPoint = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(CursorPoint, _Component);

  var _super = _createSuper(CursorPoint);

  function CursorPoint() {
    (0, _classCallCheck2["default"])(this, CursorPoint);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(CursorPoint, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "scale(4, 4)"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.11516 0.69784C0.869317 0.556367 0.562398 0.57724 0.337968 0.750693C0.113538 0.924147 0.0159658 1.21589 0.0908917 1.48946L3.32832 13.31C3.40524 13.5909 3.648 13.7948 3.93792 13.8221C4.22784 13.8493 4.50435 13.6943 4.63228 13.4327L6.3441 9.93235L9.41359 13.9039C9.65 14.2098 10.0896 14.2661 10.3955 14.0297C10.7014 13.7933 10.7577 13.3537 10.5213 13.0478L7.35388 8.94949L11.5277 8.10342C11.8131 8.04556 12.0329 7.81707 12.0796 7.52964C12.1263 7.24222 11.9902 6.95589 11.7378 6.81065L1.11516 0.69784ZM4.18896 11.1525L1.89017 2.75907L9.43295 7.09958L6.15023 7.76501C5.93703 7.80823 5.75604 7.94811 5.66047 8.14353L4.18896 11.1525Z",
        fill: "#54638C"
      })));
    }
  }]);
  return CursorPoint;
}(_react.Component);

exports["default"] = CursorPoint;
(0, _defineProperty2["default"])(CursorPoint, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string
});
(0, _defineProperty2["default"])(CursorPoint, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-cursorpoint'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vaWNvbnMvY3Vyc29yLXBvaW50LnRzeCJdLCJuYW1lcyI6WyJDdXJzb3JQb2ludCIsInByb3BzIiwiQ29tcG9uZW50IiwiaGVpZ2h0IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwicHJlZGVmaW5lZENsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVxQkEsVzs7Ozs7Ozs7Ozs7O1dBV25CLGtCQUFTO0FBQ1AsMEJBQ0UsZ0NBQUMsZ0JBQUQsRUFBVSxLQUFLQyxLQUFmLGVBQ0U7QUFBRyxRQUFBLFNBQVMsRUFBQztBQUFiLHNCQUNFO0FBQ0UsUUFBQSxRQUFRLEVBQUMsU0FEWDtBQUVFLFFBQUEsUUFBUSxFQUFDLFNBRlg7QUFHRSxRQUFBLENBQUMsRUFBQyx1bkJBSEo7QUFJRSxRQUFBLElBQUksRUFBQztBQUpQLFFBREYsQ0FERixDQURGO0FBWUQ7OztFQXhCc0NDLGdCOzs7aUNBQXBCRixXLGVBQ0E7QUFDakI7QUFDQUcsRUFBQUEsTUFBTSxFQUFFQyxzQkFBVUM7QUFGRCxDO2lDQURBTCxXLGtCQU1HO0FBQ3BCRyxFQUFBQSxNQUFNLEVBQUUsTUFEWTtBQUVwQkcsRUFBQUEsbUJBQW1CLEVBQUU7QUFGRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2UsIHtCYXNlUHJvcHN9IGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvclBvaW50IGV4dGVuZHMgQ29tcG9uZW50PFBhcnRpYWw8QmFzZVByb3BzPj4ge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgaWNvbiwgZXguICcxNnB4JyAqL1xuICAgIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZ1xuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiAnMTZweCcsXG4gICAgcHJlZGVmaW5lZENsYXNzTmFtZTogJ2RhdGEtZXgtaWNvbnMtY3Vyc29ycG9pbnQnXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QmFzZSB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInNjYWxlKDQsIDQpXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgZD1cIk0xLjExNTE2IDAuNjk3ODRDMC44NjkzMTcgMC41NTYzNjcgMC41NjIzOTggMC41NzcyNCAwLjMzNzk2OCAwLjc1MDY5M0MwLjExMzUzOCAwLjkyNDE0NyAwLjAxNTk2NTggMS4yMTU4OSAwLjA5MDg5MTcgMS40ODk0NkwzLjMyODMyIDEzLjMxQzMuNDA1MjQgMTMuNTkwOSAzLjY0OCAxMy43OTQ4IDMuOTM3OTIgMTMuODIyMUM0LjIyNzg0IDEzLjg0OTMgNC41MDQzNSAxMy42OTQzIDQuNjMyMjggMTMuNDMyN0w2LjM0NDEgOS45MzIzNUw5LjQxMzU5IDEzLjkwMzlDOS42NSAxNC4yMDk4IDEwLjA4OTYgMTQuMjY2MSAxMC4zOTU1IDE0LjAyOTdDMTAuNzAxNCAxMy43OTMzIDEwLjc1NzcgMTMuMzUzNyAxMC41MjEzIDEzLjA0NzhMNy4zNTM4OCA4Ljk0OTQ5TDExLjUyNzcgOC4xMDM0MkMxMS44MTMxIDguMDQ1NTYgMTIuMDMyOSA3LjgxNzA3IDEyLjA3OTYgNy41Mjk2NEMxMi4xMjYzIDcuMjQyMjIgMTEuOTkwMiA2Ljk1NTg5IDExLjczNzggNi44MTA2NUwxLjExNTE2IDAuNjk3ODRaTTQuMTg4OTYgMTEuMTUyNUwxLjg5MDE3IDIuNzU5MDdMOS40MzI5NSA3LjA5OTU4TDYuMTUwMjMgNy43NjUwMUM1LjkzNzAzIDcuODA4MjMgNS43NTYwNCA3Ljk0ODExIDUuNjYwNDcgOC4xNDM1M0w0LjE4ODk2IDExLjE1MjVaXCJcbiAgICAgICAgICAgIGZpbGw9XCIjNTQ2MzhDXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICA8L0Jhc2U+XG4gICAgKTtcbiAgfVxufVxuIl19