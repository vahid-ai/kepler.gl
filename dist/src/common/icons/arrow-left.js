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

var ArrowLeft = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ArrowLeft, _Component);

  var _super = _createSuper(ArrowLeft);

  function ArrowLeft() {
    (0, _classCallCheck2["default"])(this, ArrowLeft);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ArrowLeft, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("g", {
        id: "arrow-left",
        transform: "translate(32.000000, 31.500000) scale(-1, 1) translate(-32.000000, -31.500000) translate(17.000000, 9.000000)"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M5.7,44.7 L1.2,40.3 C0.8,39.9 0.8,39.3 1.2,38.9 L17.6,23 L1.2,7 C0.8,6.6 0.8,6 1.2,5.5 L5.7,1.1 C6.1,0.7 6.8,0.7 7.2,1.1 L24.3,17.8 L28.8,22.2 C29.2,22.6 29.2,23.2 28.8,23.6 L24.2,28 L7.2,44.7 C6.8,45.1 6.1,45.1 5.7,44.7"
      })), ' ');
    }
  }]);
  return ArrowLeft;
}(_react.Component);

exports["default"] = ArrowLeft;
(0, _defineProperty2["default"])(ArrowLeft, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-arrowleft'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vaWNvbnMvYXJyb3ctbGVmdC50c3giXSwibmFtZXMiOlsiQXJyb3dMZWZ0IiwicHJvcHMiLCJDb21wb25lbnQiLCJoZWlnaHQiLCJwcmVkZWZpbmVkQ2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7V0FNbkIsa0JBQVM7QUFDUCwwQkFDRSxnQ0FBQyxnQkFBRCxFQUFVLEtBQUtDLEtBQWYsZUFDRTtBQUNFLFFBQUEsRUFBRSxFQUFDLFlBREw7QUFFRSxRQUFBLFNBQVMsRUFBQztBQUZaLHNCQUlFO0FBQU0sUUFBQSxDQUFDLEVBQUM7QUFBUixRQUpGLENBREYsRUFNTyxHQU5QLENBREY7QUFVRDs7O0VBakJvQ0MsZ0I7OztpQ0FBbEJGLFMsa0JBQ0c7QUFDcEJHLEVBQUFBLE1BQU0sRUFBRSxNQURZO0FBRXBCQyxFQUFBQSxtQkFBbUIsRUFBRTtBQUZELEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlLCB7QmFzZVByb3BzfSBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJvd0xlZnQgZXh0ZW5kcyBDb21wb25lbnQ8UGFydGlhbDxCYXNlUHJvcHM+PiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiAnMTZweCcsXG4gICAgcHJlZGVmaW5lZENsYXNzTmFtZTogJ2RhdGEtZXgtaWNvbnMtYXJyb3dsZWZ0J1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJhc2Ugey4uLnRoaXMucHJvcHN9PlxuICAgICAgICA8Z1xuICAgICAgICAgIGlkPVwiYXJyb3ctbGVmdFwiXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMyLjAwMDAwMCwgMzEuNTAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0zMi4wMDAwMDAsIC0zMS41MDAwMDApIHRyYW5zbGF0ZSgxNy4wMDAwMDAsIDkuMDAwMDAwKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aCBkPVwiTTUuNyw0NC43IEwxLjIsNDAuMyBDMC44LDM5LjkgMC44LDM5LjMgMS4yLDM4LjkgTDE3LjYsMjMgTDEuMiw3IEMwLjgsNi42IDAuOCw2IDEuMiw1LjUgTDUuNywxLjEgQzYuMSwwLjcgNi44LDAuNyA3LjIsMS4xIEwyNC4zLDE3LjggTDI4LjgsMjIuMiBDMjkuMiwyMi42IDI5LjIsMjMuMiAyOC44LDIzLjYgTDI0LjIsMjggTDcuMiw0NC43IEM2LjgsNDUuMSA2LjEsNDUuMSA1LjcsNDQuN1wiIC8+XG4gICAgICAgIDwvZz57JyAnfVxuICAgICAgPC9CYXNlPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==