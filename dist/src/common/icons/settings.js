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

var Settings = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Settings, _Component);

  var _super = _createSuper(Settings);

  function Settings() {
    (0, _classCallCheck2["default"])(this, Settings);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Settings, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("g", {
        transform: "translate(3, 4) scale(0.9, 0.9)"
      }, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M32.2,52.32a6.24,6.24,0,0,0,12.09,0h9.56a1.56,1.56,0,0,0,0-3.12H44.29a6.24,6.24,0,0,0-12.09,0h-22a1.56,1.56,0,0,0,0,3.12ZM16.59,33.59a6.24,6.24,0,0,0,12.09,0H53.85a1.56,1.56,0,0,0,0-3.12H28.68a6.24,6.24,0,0,0-12.09,0H10.15a1.56,1.56,0,1,0,0,3.12ZM35.32,11.74H10.15a1.56,1.56,0,1,0,0,3.12H35.32a6.24,6.24,0,0,0,12.09,0h6.44a1.56,1.56,0,0,0,0-3.12H47.41a6.24,6.24,0,0,0-12.09,0Z"
      })));
    }
  }]);
  return Settings;
}(_react.Component);

exports["default"] = Settings;
(0, _defineProperty2["default"])(Settings, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-settings'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vaWNvbnMvc2V0dGluZ3MudHN4Il0sIm5hbWVzIjpbIlNldHRpbmdzIiwicHJvcHMiLCJDb21wb25lbnQiLCJoZWlnaHQiLCJwcmVkZWZpbmVkQ2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7V0FNbkIsa0JBQVM7QUFDUCwwQkFDRSxnQ0FBQyxnQkFBRCxFQUFVLEtBQUtDLEtBQWYsZUFDRTtBQUFHLFFBQUEsU0FBUyxFQUFDO0FBQWIsc0JBQ0U7QUFBTSxRQUFBLENBQUMsRUFBQztBQUFSLFFBREYsQ0FERixDQURGO0FBT0Q7OztFQWRtQ0MsZ0I7OztpQ0FBakJGLFEsa0JBQ0c7QUFDcEJHLEVBQUFBLE1BQU0sRUFBRSxNQURZO0FBRXBCQyxFQUFBQSxtQkFBbUIsRUFBRTtBQUZELEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlLCB7QmFzZVByb3BzfSBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5ncyBleHRlbmRzIENvbXBvbmVudDxQYXJ0aWFsPEJhc2VQcm9wcz4+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICBwcmVkZWZpbmVkQ2xhc3NOYW1lOiAnZGF0YS1leC1pY29ucy1zZXR0aW5ncydcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCYXNlIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDMsIDQpIHNjYWxlKDAuOSwgMC45KVwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMzIuMiw1Mi4zMmE2LjI0LDYuMjQsMCwwLDAsMTIuMDksMGg5LjU2YTEuNTYsMS41NiwwLDAsMCwwLTMuMTJINDQuMjlhNi4yNCw2LjI0LDAsMCwwLTEyLjA5LDBoLTIyYTEuNTYsMS41NiwwLDAsMCwwLDMuMTJaTTE2LjU5LDMzLjU5YTYuMjQsNi4yNCwwLDAsMCwxMi4wOSwwSDUzLjg1YTEuNTYsMS41NiwwLDAsMCwwLTMuMTJIMjguNjhhNi4yNCw2LjI0LDAsMCwwLTEyLjA5LDBIMTAuMTVhMS41NiwxLjU2LDAsMSwwLDAsMy4xMlpNMzUuMzIsMTEuNzRIMTAuMTVhMS41NiwxLjU2LDAsMSwwLDAsMy4xMkgzNS4zMmE2LjI0LDYuMjQsMCwwLDAsMTIuMDksMGg2LjQ0YTEuNTYsMS41NiwwLDAsMCwwLTMuMTJINDcuNDFhNi4yNCw2LjI0LDAsMCwwLTEyLjA5LDBaXCIgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9CYXNlPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==