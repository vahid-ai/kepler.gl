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

var DrawPolygon = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(DrawPolygon, _Component);

  var _super = _createSuper(DrawPolygon);

  function DrawPolygon() {
    (0, _classCallCheck2["default"])(this, DrawPolygon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(DrawPolygon, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9 2L18 6L20 16L2 13L9 2Z",
        stroke: "currentColor",
        fill: "transparent",
        strokeWidth: "1.5"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9 4C10.1046 4 11 3.10457 11 2C11 0.89543 10.1046 0 9 0C7.89543 0 7 0.89543 7 2C7 3.10457 7.89543 4 9 4Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 15C3.10457 15 4 14.1046 4 13C4 11.8954 3.10457 11 2 11C0.89543 11 0 11.8954 0 13C0 14.1046 0.89543 15 2 15Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M20 18C21.1046 18 22 17.1046 22 16C22 14.8954 21.1046 14 20 14C18.8954 14 18 14.8954 18 16C18 17.1046 18.8954 18 20 18Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z"
      }));
    }
  }]);
  return DrawPolygon;
}(_react.Component);

exports["default"] = DrawPolygon;
(0, _defineProperty2["default"])(DrawPolygon, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-polygon',
  viewBox: '0 0 22 18'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vaWNvbnMvcG9seWdvbi50c3giXSwibmFtZXMiOlsiRHJhd1BvbHlnb24iLCJwcm9wcyIsIkNvbXBvbmVudCIsImhlaWdodCIsInByZWRlZmluZWRDbGFzc05hbWUiLCJ2aWV3Qm94Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7V0FPbkIsa0JBQVM7QUFDUCwwQkFDRSxnQ0FBQyxnQkFBRCxFQUFVLEtBQUtDLEtBQWYsZUFDRTtBQUNFLFFBQUEsUUFBUSxFQUFDLFNBRFg7QUFFRSxRQUFBLFFBQVEsRUFBQyxTQUZYO0FBR0UsUUFBQSxDQUFDLEVBQUMsMkJBSEo7QUFJRSxRQUFBLE1BQU0sRUFBQyxjQUpUO0FBS0UsUUFBQSxJQUFJLEVBQUMsYUFMUDtBQU1FLFFBQUEsV0FBVyxFQUFDO0FBTmQsUUFERixlQVNFO0FBQ0UsUUFBQSxRQUFRLEVBQUMsU0FEWDtBQUVFLFFBQUEsUUFBUSxFQUFDLFNBRlg7QUFHRSxRQUFBLENBQUMsRUFBQztBQUhKLFFBVEYsZUFjRTtBQUNFLFFBQUEsUUFBUSxFQUFDLFNBRFg7QUFFRSxRQUFBLFFBQVEsRUFBQyxTQUZYO0FBR0UsUUFBQSxDQUFDLEVBQUM7QUFISixRQWRGLGVBbUJFO0FBQ0UsUUFBQSxRQUFRLEVBQUMsU0FEWDtBQUVFLFFBQUEsUUFBUSxFQUFDLFNBRlg7QUFHRSxRQUFBLENBQUMsRUFBQztBQUhKLFFBbkJGLGVBd0JFO0FBQ0UsUUFBQSxRQUFRLEVBQUMsU0FEWDtBQUVFLFFBQUEsUUFBUSxFQUFDLFNBRlg7QUFHRSxRQUFBLENBQUMsRUFBQztBQUhKLFFBeEJGLENBREY7QUFnQ0Q7OztFQXhDc0NDLGdCOzs7aUNBQXBCRixXLGtCQUNHO0FBQ3BCRyxFQUFBQSxNQUFNLEVBQUUsTUFEWTtBQUVwQkMsRUFBQUEsbUJBQW1CLEVBQUUsdUJBRkQ7QUFHcEJDLEVBQUFBLE9BQU8sRUFBRTtBQUhXLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlLCB7QmFzZVByb3BzfSBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3UG9seWdvbiBleHRlbmRzIENvbXBvbmVudDxQYXJ0aWFsPEJhc2VQcm9wcz4+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICBwcmVkZWZpbmVkQ2xhc3NOYW1lOiAnZGF0YS1leC1pY29ucy1wb2x5Z29uJyxcbiAgICB2aWV3Qm94OiAnMCAwIDIyIDE4J1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJhc2Ugey4uLnRoaXMucHJvcHN9PlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICBkPVwiTTkgMkwxOCA2TDIwIDE2TDIgMTNMOSAyWlwiXG4gICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICBmaWxsPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk05IDRDMTAuMTA0NiA0IDExIDMuMTA0NTcgMTEgMkMxMSAwLjg5NTQzIDEwLjEwNDYgMCA5IDBDNy44OTU0MyAwIDcgMC44OTU0MyA3IDJDNyAzLjEwNDU3IDcuODk1NDMgNCA5IDRaXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk0yIDE1QzMuMTA0NTcgMTUgNCAxNC4xMDQ2IDQgMTNDNCAxMS44OTU0IDMuMTA0NTcgMTEgMiAxMUMwLjg5NTQzIDExIDAgMTEuODk1NCAwIDEzQzAgMTQuMTA0NiAwLjg5NTQzIDE1IDIgMTVaXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk0yMCAxOEMyMS4xMDQ2IDE4IDIyIDE3LjEwNDYgMjIgMTZDMjIgMTQuODk1NCAyMS4xMDQ2IDE0IDIwIDE0QzE4Ljg5NTQgMTQgMTggMTQuODk1NCAxOCAxNkMxOCAxNy4xMDQ2IDE4Ljg5NTQgMTggMjAgMThaXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgZD1cIk0xOCA4QzE5LjEwNDYgOCAyMCA3LjEwNDU3IDIwIDZDMjAgNC44OTU0MyAxOS4xMDQ2IDQgMTggNEMxNi44OTU0IDQgMTYgNC44OTU0MyAxNiA2QzE2IDcuMTA0NTcgMTYuODk1NCA4IDE4IDhaXCJcbiAgICAgICAgLz5cbiAgICAgIDwvQmFzZT5cbiAgICApO1xuICB9XG59XG4iXX0=