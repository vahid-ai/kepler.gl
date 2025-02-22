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

var Info = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Info, _Component);

  var _super = _createSuper(Info);

  function Info() {
    (0, _classCallCheck2["default"])(this, Info);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Info, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], (0, _extends2["default"])({
        viewBox: "0 0 64 64"
      }, this.props), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "25",
        cy: "25",
        fill: "none",
        r: "24",
        stroke: this.props.stroke,
        strokeLinecap: "round",
        strokeMiterlimit: "10",
        strokeWidth: "2"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M23.779,16.241c-0.216,0-0.357-0.144-0.357-0.359v-2.618c0-0.215,0.142-0.359,0.357-0.359h2.439  c0.215,0,0.359,0.144,0.359,0.359v2.618c0,0.215-0.145,0.359-0.359,0.359H23.779z M23.852,37.293c-0.215,0-0.358-0.143-0.358-0.358  V20.473c0-0.215,0.144-0.359,0.358-0.359h2.295c0.216,0,0.359,0.144,0.359,0.359v16.462c0,0.216-0.144,0.358-0.359,0.358H23.852z"
      }));
    }
  }]);
  return Info;
}(_react.Component);

exports["default"] = Info;
(0, _defineProperty2["default"])(Info, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-info',
  stroke: '#FFF'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vaWNvbnMvaW5mby50c3giXSwibmFtZXMiOlsiSW5mbyIsInByb3BzIiwic3Ryb2tlIiwiQ29tcG9uZW50IiwiaGVpZ2h0IiwicHJlZGVmaW5lZENsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7V0FPbkIsa0JBQVM7QUFDUCwwQkFDRSxnQ0FBQyxnQkFBRDtBQUFNLFFBQUEsT0FBTyxFQUFDO0FBQWQsU0FBOEIsS0FBS0MsS0FBbkMsZ0JBQ0U7QUFDRSxRQUFBLEVBQUUsRUFBQyxJQURMO0FBRUUsUUFBQSxFQUFFLEVBQUMsSUFGTDtBQUdFLFFBQUEsSUFBSSxFQUFDLE1BSFA7QUFJRSxRQUFBLENBQUMsRUFBQyxJQUpKO0FBS0UsUUFBQSxNQUFNLEVBQUUsS0FBS0EsS0FBTCxDQUFXQyxNQUxyQjtBQU1FLFFBQUEsYUFBYSxFQUFDLE9BTmhCO0FBT0UsUUFBQSxnQkFBZ0IsRUFBQyxJQVBuQjtBQVFFLFFBQUEsV0FBVyxFQUFDO0FBUmQsUUFERixlQVdFO0FBQU0sUUFBQSxDQUFDLEVBQUM7QUFBUixRQVhGLENBREY7QUFlRDs7O0VBdkIrQkMsZ0I7OztpQ0FBYkgsSSxrQkFDRztBQUNwQkksRUFBQUEsTUFBTSxFQUFFLE1BRFk7QUFFcEJDLEVBQUFBLG1CQUFtQixFQUFFLG9CQUZEO0FBR3BCSCxFQUFBQSxNQUFNLEVBQUU7QUFIWSxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZSwge0Jhc2VQcm9wc30gZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mbyBleHRlbmRzIENvbXBvbmVudDxQYXJ0aWFsPEJhc2VQcm9wcz4gJiB7c3Ryb2tlPzogc3RyaW5nfT4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogJzE2cHgnLFxuICAgIHByZWRlZmluZWRDbGFzc05hbWU6ICdkYXRhLWV4LWljb25zLWluZm8nLFxuICAgIHN0cm9rZTogJyNGRkYnXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QmFzZSB2aWV3Qm94PVwiMCAwIDY0IDY0XCIgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgY3g9XCIyNVwiXG4gICAgICAgICAgY3k9XCIyNVwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHI9XCIyNFwiXG4gICAgICAgICAgc3Ryb2tlPXt0aGlzLnByb3BzLnN0cm9rZX1cbiAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgIHN0cm9rZU1pdGVybGltaXQ9XCIxMFwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGggZD1cIk0yMy43NzksMTYuMjQxYy0wLjIxNiwwLTAuMzU3LTAuMTQ0LTAuMzU3LTAuMzU5di0yLjYxOGMwLTAuMjE1LDAuMTQyLTAuMzU5LDAuMzU3LTAuMzU5aDIuNDM5ICBjMC4yMTUsMCwwLjM1OSwwLjE0NCwwLjM1OSwwLjM1OXYyLjYxOGMwLDAuMjE1LTAuMTQ1LDAuMzU5LTAuMzU5LDAuMzU5SDIzLjc3OXogTTIzLjg1MiwzNy4yOTNjLTAuMjE1LDAtMC4zNTgtMC4xNDMtMC4zNTgtMC4zNTggIFYyMC40NzNjMC0wLjIxNSwwLjE0NC0wLjM1OSwwLjM1OC0wLjM1OWgyLjI5NWMwLjIxNiwwLDAuMzU5LDAuMTQ0LDAuMzU5LDAuMzU5djE2LjQ2MmMwLDAuMjE2LTAuMTQ0LDAuMzU4LTAuMzU5LDAuMzU4SDIzLjg1MnpcIiAvPlxuICAgICAgPC9CYXNlPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==