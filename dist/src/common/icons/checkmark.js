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

var Checkmark = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Checkmark, _Component);

  var _super = _createSuper(Checkmark);

  function Checkmark() {
    (0, _classCallCheck2["default"])(this, Checkmark);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Checkmark, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], (0, _extends2["default"])({
        viewBox: "0 0 42 42"
      }, this.props), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M16,0C7.163,0,0,7.163,0,16c0,8.837,7.163,16,16,16c8.836,0,16-7.164,16-16C32,7.163,24.836,0,16,0z M16,30   C8.268,30,2,23.732,2,16C2,8.268,8.268,2,16,2s14,6.268,14,14C30,23.732,23.732,30,16,30z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M23.3,10.393L13.012,20.589l-4.281-4.196c-0.394-0.391-1.034-0.391-1.428,0   c-0.395,0.391-0.395,1.024,0,1.414l4.999,4.899c0.41,0.361,1.023,0.401,1.428,0l10.999-10.899c0.394-0.39,0.394-1.024,0-1.414   C24.334,10.003,23.695,10.003,23.3,10.393z"
      }));
    }
  }]);
  return Checkmark;
}(_react.Component);

exports["default"] = Checkmark;
(0, _defineProperty2["default"])(Checkmark, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-checkmark',
  stroke: '#FFF'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vaWNvbnMvY2hlY2ttYXJrLnRzeCJdLCJuYW1lcyI6WyJDaGVja21hcmsiLCJwcm9wcyIsIkNvbXBvbmVudCIsImhlaWdodCIsInByZWRlZmluZWRDbGFzc05hbWUiLCJzdHJva2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7O1dBT25CLGtCQUFTO0FBQ1AsMEJBQ0UsZ0NBQUMsZ0JBQUQ7QUFBTSxRQUFBLE9BQU8sRUFBQztBQUFkLFNBQThCLEtBQUtDLEtBQW5DLGdCQUNFO0FBQU0sUUFBQSxDQUFDLEVBQUM7QUFBUixRQURGLGVBRUU7QUFBTSxRQUFBLENBQUMsRUFBQztBQUFSLFFBRkYsQ0FERjtBQU1EOzs7RUFkb0NDLGdCOzs7aUNBQWxCRixTLGtCQUNHO0FBQ3BCRyxFQUFBQSxNQUFNLEVBQUUsTUFEWTtBQUVwQkMsRUFBQUEsbUJBQW1CLEVBQUUseUJBRkQ7QUFHcEJDLEVBQUFBLE1BQU0sRUFBRTtBQUhZLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlLCB7QmFzZVByb3BzfSBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja21hcmsgZXh0ZW5kcyBDb21wb25lbnQ8UGFydGlhbDxCYXNlUHJvcHM+PiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiAnMTZweCcsXG4gICAgcHJlZGVmaW5lZENsYXNzTmFtZTogJ2RhdGEtZXgtaWNvbnMtY2hlY2ttYXJrJyxcbiAgICBzdHJva2U6ICcjRkZGJ1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJhc2Ugdmlld0JveD1cIjAgMCA0MiA0MlwiIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPHBhdGggZD1cIk0xNiwwQzcuMTYzLDAsMCw3LjE2MywwLDE2YzAsOC44MzcsNy4xNjMsMTYsMTYsMTZjOC44MzYsMCwxNi03LjE2NCwxNi0xNkMzMiw3LjE2MywyNC44MzYsMCwxNiwweiBNMTYsMzAgICBDOC4yNjgsMzAsMiwyMy43MzIsMiwxNkMyLDguMjY4LDguMjY4LDIsMTYsMnMxNCw2LjI2OCwxNCwxNEMzMCwyMy43MzIsMjMuNzMyLDMwLDE2LDMwelwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMjMuMywxMC4zOTNMMTMuMDEyLDIwLjU4OWwtNC4yODEtNC4xOTZjLTAuMzk0LTAuMzkxLTEuMDM0LTAuMzkxLTEuNDI4LDAgICBjLTAuMzk1LDAuMzkxLTAuMzk1LDEuMDI0LDAsMS40MTRsNC45OTksNC44OTljMC40MSwwLjM2MSwxLjAyMywwLjQwMSwxLjQyOCwwbDEwLjk5OS0xMC44OTljMC4zOTQtMC4zOSwwLjM5NC0xLjAyNCwwLTEuNDE0ICAgQzI0LjMzNCwxMC4wMDMsMjMuNjk1LDEwLjAwMywyMy4zLDEwLjM5M3pcIiAvPlxuICAgICAgPC9CYXNlPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==