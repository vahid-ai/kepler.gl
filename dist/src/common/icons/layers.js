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

var _base = _interopRequireDefault(require("./base"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Layers = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Layers, _Component);

  var _super = _createSuper(Layers);

  function Layers() {
    (0, _classCallCheck2["default"])(this, Layers);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Layers, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M50.88,43.52a3.2,3.2,0,0,1,0,5.86L34.56,56.52a6.42,6.42,0,0,1-5.13,0L13.12,49.37a3.2,3.2,0,0,1,0-5.86l4.62-2a6,6,0,0,0,1.48,1l2.16.95-7,3.05,16.32,7.14a3.19,3.19,0,0,0,2.56,0L49.6,46.44l-7-3.05,2.16-.95a6,6,0,0,0,1.48-.95Zm0-14.39a3.2,3.2,0,0,1,0,5.86L34.56,42.13a6.42,6.42,0,0,1-5.13,0L13.12,35a3.2,3.2,0,0,1,0-5.86l4.62-2a6,6,0,0,0,1.48,1l2.16.95-7,3.05L30.72,39.2a3.19,3.19,0,0,0,2.56,0L49.6,32.06l-7-3.05,2.16-.95a6,6,0,0,0,1.48-.95ZM13.12,20.6a3.2,3.2,0,0,1,0-5.86L29.44,7.6a6.39,6.39,0,0,1,5.13,0l16.32,7.14a3.2,3.2,0,0,1,0,5.86L34.56,27.74a6.39,6.39,0,0,1-5.13,0Z"
      }));
    }
  }]);
  return Layers;
}(_react.Component);

exports["default"] = Layers;
(0, _defineProperty2["default"])(Layers, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-layers'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vaWNvbnMvbGF5ZXJzLnRzeCJdLCJuYW1lcyI6WyJMYXllcnMiLCJwcm9wcyIsIkNvbXBvbmVudCIsImhlaWdodCIsInByZWRlZmluZWRDbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOzs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7OztXQU1uQixrQkFBUztBQUNQLDBCQUNFLGdDQUFDLGdCQUFELEVBQVUsS0FBS0MsS0FBZixlQUNFO0FBQU0sUUFBQSxDQUFDLEVBQUM7QUFBUixRQURGLENBREY7QUFLRDs7O0VBWmlDQyxnQjs7O2lDQUFmRixNLGtCQUNHO0FBQ3BCRyxFQUFBQSxNQUFNLEVBQUUsTUFEWTtBQUVwQkMsRUFBQUEsbUJBQW1CLEVBQUU7QUFGRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZSwge0Jhc2VQcm9wc30gZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5ZXJzIGV4dGVuZHMgQ29tcG9uZW50PFBhcnRpYWw8QmFzZVByb3BzPj4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogJzE2cHgnLFxuICAgIHByZWRlZmluZWRDbGFzc05hbWU6ICdkYXRhLWV4LWljb25zLWxheWVycydcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCYXNlIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPHBhdGggZD1cIk01MC44OCw0My41MmEzLjIsMy4yLDAsMCwxLDAsNS44NkwzNC41Niw1Ni41MmE2LjQyLDYuNDIsMCwwLDEtNS4xMywwTDEzLjEyLDQ5LjM3YTMuMiwzLjIsMCwwLDEsMC01Ljg2bDQuNjItMmE2LDYsMCwwLDAsMS40OCwxbDIuMTYuOTUtNywzLjA1LDE2LjMyLDcuMTRhMy4xOSwzLjE5LDAsMCwwLDIuNTYsMEw0OS42LDQ2LjQ0bC03LTMuMDUsMi4xNi0uOTVhNiw2LDAsMCwwLDEuNDgtLjk1Wm0wLTE0LjM5YTMuMiwzLjIsMCwwLDEsMCw1Ljg2TDM0LjU2LDQyLjEzYTYuNDIsNi40MiwwLDAsMS01LjEzLDBMMTMuMTIsMzVhMy4yLDMuMiwwLDAsMSwwLTUuODZsNC42Mi0yYTYsNiwwLDAsMCwxLjQ4LDFsMi4xNi45NS03LDMuMDVMMzAuNzIsMzkuMmEzLjE5LDMuMTksMCwwLDAsMi41NiwwTDQ5LjYsMzIuMDZsLTctMy4wNSwyLjE2LS45NWE2LDYsMCwwLDAsMS40OC0uOTVaTTEzLjEyLDIwLjZhMy4yLDMuMiwwLDAsMSwwLTUuODZMMjkuNDQsNy42YTYuMzksNi4zOSwwLDAsMSw1LjEzLDBsMTYuMzIsNy4xNGEzLjIsMy4yLDAsMCwxLDAsNS44NkwzNC41NiwyNy43NGE2LjM5LDYuMzksMCwwLDEtNS4xMywwWlwiIC8+XG4gICAgICA8L0Jhc2U+XG4gICAgKTtcbiAgfVxufVxuIl19