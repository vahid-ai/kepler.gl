"use strict";

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

var _react = _interopRequireDefault(require("react"));

var _base = _interopRequireDefault(require("./base"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Histogram = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Histogram, _React$Component);

  var _super = _createSuper(Histogram);

  function Histogram() {
    (0, _classCallCheck2["default"])(this, Histogram);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Histogram, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(7.500000, 7.500000)"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M5,40.593203 L16.7666161,40.593203 L16.7666161,10 L5,10 L5,40.593203 L5,40.593203 Z M33.2333839,40.593203 L45,40.593203 L45,10 L33.2333839,10 L33.2333839,40.593203 L33.2333839,40.593203 Z M30.883308,40.5892837 L30.883308,26.4693451 L19.116692,26.4693451 L19.116692,40.5892837 L30.883308,40.5892837 Z",
        id: "Shape"
      })));
    }
  }]);
  return Histogram;
}(_react["default"].Component);

exports["default"] = Histogram;
(0, _defineProperty2["default"])(Histogram, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-histogram'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vaWNvbnMvaGlzdG9ncmFtLnRzeCJdLCJuYW1lcyI6WyJIaXN0b2dyYW0iLCJwcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiaGVpZ2h0IiwicHJlZGVmaW5lZENsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOzs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7OztXQU1uQixrQkFBUztBQUNQLDBCQUNFLGdDQUFDLGdCQUFELEVBQVUsS0FBS0MsS0FBZixlQUNFO0FBQUcsUUFBQSxTQUFTLEVBQUM7QUFBYixzQkFDRTtBQUNFLFFBQUEsQ0FBQyxFQUFDLDZTQURKO0FBRUUsUUFBQSxFQUFFLEVBQUM7QUFGTCxRQURGLENBREYsQ0FERjtBQVVEOzs7RUFqQm9DQyxrQkFBTUMsUzs7O2lDQUF4QkgsUyxrQkFDRztBQUNwQkksRUFBQUEsTUFBTSxFQUFFLE1BRFk7QUFFcEJDLEVBQUFBLG1CQUFtQixFQUFFO0FBRkQsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZSwge0Jhc2VQcm9wc30gZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGlzdG9ncmFtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFBhcnRpYWw8QmFzZVByb3BzPj4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhlaWdodDogJzE2cHgnLFxuICAgIHByZWRlZmluZWRDbGFzc05hbWU6ICdkYXRhLWV4LWljb25zLWhpc3RvZ3JhbSdcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCYXNlIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDcuNTAwMDAwLCA3LjUwMDAwMClcIj5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk01LDQwLjU5MzIwMyBMMTYuNzY2NjE2MSw0MC41OTMyMDMgTDE2Ljc2NjYxNjEsMTAgTDUsMTAgTDUsNDAuNTkzMjAzIEw1LDQwLjU5MzIwMyBaIE0zMy4yMzMzODM5LDQwLjU5MzIwMyBMNDUsNDAuNTkzMjAzIEw0NSwxMCBMMzMuMjMzMzgzOSwxMCBMMzMuMjMzMzgzOSw0MC41OTMyMDMgTDMzLjIzMzM4MzksNDAuNTkzMjAzIFogTTMwLjg4MzMwOCw0MC41ODkyODM3IEwzMC44ODMzMDgsMjYuNDY5MzQ1MSBMMTkuMTE2NjkyLDI2LjQ2OTM0NTEgTDE5LjExNjY5Miw0MC41ODkyODM3IEwzMC44ODMzMDgsNDAuNTg5MjgzNyBaXCJcbiAgICAgICAgICAgIGlkPVwiU2hhcGVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvQmFzZT5cbiAgICApO1xuICB9XG59XG4iXX0=