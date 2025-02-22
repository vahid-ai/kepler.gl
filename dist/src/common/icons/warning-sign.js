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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _base = _interopRequireDefault(require("./base"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var WarningSign = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(WarningSign, _Component);

  var _super = _createSuper(WarningSign);

  function WarningSign() {
    (0, _classCallCheck2["default"])(this, WarningSign);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(WarningSign, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], (0, _extends2["default"])({
        viewBox: "0 0 16 16"
      }, this.props, {
        stroke: "none"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M15.6753 12.0189L10.017 1.60205C9.58989 0.88311 8.83564 0.453735 7.99939 0.453735C7.16314 0.453735 6.40889 0.88311 5.98183 1.60205C5.97861 1.60755 5.97589 1.61305 5.97267 1.61855L0.33317 12.0024C-0.103049 12.7365 -0.111299 13.6181 0.310701 14.3604C0.73367 15.1032 1.49567 15.5463 2.35026 15.5463H13.6173C14.4719 15.5463 15.2652 15.1032 15.6881 14.3604C16.1101 13.6181 16.1019 12.7365 15.6753 12.0189ZM7.06095 5.22339C7.06095 4.70508 7.48111 4.28495 7.99939 4.28495C8.5177 4.28495 8.93783 4.70511 8.93783 5.22339V8.97717C8.93783 9.49542 8.51767 9.91561 7.99939 9.91561C7.48111 9.91561 7.06095 9.49539 7.06095 8.97717V5.22339ZM7.99939 13.6694C7.22317 13.6694 6.5917 13.038 6.5917 12.2617C6.5917 11.4855 7.22314 10.8541 7.99939 10.8541C8.77561 10.8541 9.40705 11.4855 9.40705 12.2617C9.40708 13.038 8.77564 13.6694 7.99939 13.6694Z",
        fill: "#F5B766"
      }), /*#__PURE__*/_react["default"].createElement("circle", {
        cx: "8",
        cy: "12.2773",
        r: "1.43359",
        fill: "#121621"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M8 4.28125C8.51992 4.28125 8.94141 4.70273 8.94141 5.22266V8.97266C8.94141 9.49258 8.51992 9.91406 8 9.91406C7.48008 9.91406 7.05859 9.49258 7.05859 8.97266V5.22266C7.05859 4.70273 7.48008 4.28125 8 4.28125Z",
        fill: "#121621"
      }));
    }
  }]);
  return WarningSign;
}(_react.Component);

exports["default"] = WarningSign;
(0, _defineProperty2["default"])(WarningSign, "propTypes", {
  /** Set the height of the icon, ex. '16px' */
  height: _propTypes["default"].string
});
(0, _defineProperty2["default"])(WarningSign, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-warning-sign',
  stroke: '#FFF'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vaWNvbnMvd2FybmluZy1zaWduLnRzeCJdLCJuYW1lcyI6WyJXYXJuaW5nU2lnbiIsInByb3BzIiwiQ29tcG9uZW50IiwiaGVpZ2h0IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwicHJlZGVmaW5lZENsYXNzTmFtZSIsInN0cm9rZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7V0FZbkIsa0JBQVM7QUFDUCwwQkFDRSxnQ0FBQyxnQkFBRDtBQUFNLFFBQUEsT0FBTyxFQUFDO0FBQWQsU0FBOEIsS0FBS0MsS0FBbkM7QUFBMEMsUUFBQSxNQUFNLEVBQUM7QUFBakQsdUJBQ0U7QUFDRSxRQUFBLENBQUMsRUFBQyw4ekJBREo7QUFFRSxRQUFBLElBQUksRUFBQztBQUZQLFFBREYsZUFLRTtBQUFRLFFBQUEsRUFBRSxFQUFDLEdBQVg7QUFBZSxRQUFBLEVBQUUsRUFBQyxTQUFsQjtBQUE0QixRQUFBLENBQUMsRUFBQyxTQUE5QjtBQUF3QyxRQUFBLElBQUksRUFBQztBQUE3QyxRQUxGLGVBTUU7QUFDRSxRQUFBLENBQUMsRUFBQyxpTkFESjtBQUVFLFFBQUEsSUFBSSxFQUFDO0FBRlAsUUFORixDQURGO0FBYUQ7OztFQTFCc0NDLGdCOzs7aUNBQXBCRixXLGVBQ0E7QUFDakI7QUFDQUcsRUFBQUEsTUFBTSxFQUFFQyxzQkFBVUM7QUFGRCxDO2lDQURBTCxXLGtCQU1HO0FBQ3BCRyxFQUFBQSxNQUFNLEVBQUUsTUFEWTtBQUVwQkcsRUFBQUEsbUJBQW1CLEVBQUUsNEJBRkQ7QUFHcEJDLEVBQUFBLE1BQU0sRUFBRTtBQUhZLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZSwge0Jhc2VQcm9wc30gZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2FybmluZ1NpZ24gZXh0ZW5kcyBDb21wb25lbnQ8UGFydGlhbDxCYXNlUHJvcHM+PiB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLyoqIFNldCB0aGUgaGVpZ2h0IG9mIHRoZSBpY29uLCBleC4gJzE2cHgnICovXG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICBwcmVkZWZpbmVkQ2xhc3NOYW1lOiAnZGF0YS1leC1pY29ucy13YXJuaW5nLXNpZ24nLFxuICAgIHN0cm9rZTogJyNGRkYnXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8QmFzZSB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgey4uLnRoaXMucHJvcHN9IHN0cm9rZT1cIm5vbmVcIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBkPVwiTTE1LjY3NTMgMTIuMDE4OUwxMC4wMTcgMS42MDIwNUM5LjU4OTg5IDAuODgzMTEgOC44MzU2NCAwLjQ1MzczNSA3Ljk5OTM5IDAuNDUzNzM1QzcuMTYzMTQgMC40NTM3MzUgNi40MDg4OSAwLjg4MzExIDUuOTgxODMgMS42MDIwNUM1Ljk3ODYxIDEuNjA3NTUgNS45NzU4OSAxLjYxMzA1IDUuOTcyNjcgMS42MTg1NUwwLjMzMzE3IDEyLjAwMjRDLTAuMTAzMDQ5IDEyLjczNjUgLTAuMTExMjk5IDEzLjYxODEgMC4zMTA3MDEgMTQuMzYwNEMwLjczMzY3IDE1LjEwMzIgMS40OTU2NyAxNS41NDYzIDIuMzUwMjYgMTUuNTQ2M0gxMy42MTczQzE0LjQ3MTkgMTUuNTQ2MyAxNS4yNjUyIDE1LjEwMzIgMTUuNjg4MSAxNC4zNjA0QzE2LjExMDEgMTMuNjE4MSAxNi4xMDE5IDEyLjczNjUgMTUuNjc1MyAxMi4wMTg5Wk03LjA2MDk1IDUuMjIzMzlDNy4wNjA5NSA0LjcwNTA4IDcuNDgxMTEgNC4yODQ5NSA3Ljk5OTM5IDQuMjg0OTVDOC41MTc3IDQuMjg0OTUgOC45Mzc4MyA0LjcwNTExIDguOTM3ODMgNS4yMjMzOVY4Ljk3NzE3QzguOTM3ODMgOS40OTU0MiA4LjUxNzY3IDkuOTE1NjEgNy45OTkzOSA5LjkxNTYxQzcuNDgxMTEgOS45MTU2MSA3LjA2MDk1IDkuNDk1MzkgNy4wNjA5NSA4Ljk3NzE3VjUuMjIzMzlaTTcuOTk5MzkgMTMuNjY5NEM3LjIyMzE3IDEzLjY2OTQgNi41OTE3IDEzLjAzOCA2LjU5MTcgMTIuMjYxN0M2LjU5MTcgMTEuNDg1NSA3LjIyMzE0IDEwLjg1NDEgNy45OTkzOSAxMC44NTQxQzguNzc1NjEgMTAuODU0MSA5LjQwNzA1IDExLjQ4NTUgOS40MDcwNSAxMi4yNjE3QzkuNDA3MDggMTMuMDM4IDguNzc1NjQgMTMuNjY5NCA3Ljk5OTM5IDEzLjY2OTRaXCJcbiAgICAgICAgICBmaWxsPVwiI0Y1Qjc2NlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxjaXJjbGUgY3g9XCI4XCIgY3k9XCIxMi4yNzczXCIgcj1cIjEuNDMzNTlcIiBmaWxsPVwiIzEyMTYyMVwiIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk04IDQuMjgxMjVDOC41MTk5MiA0LjI4MTI1IDguOTQxNDEgNC43MDI3MyA4Ljk0MTQxIDUuMjIyNjZWOC45NzI2NkM4Ljk0MTQxIDkuNDkyNTggOC41MTk5MiA5LjkxNDA2IDggOS45MTQwNkM3LjQ4MDA4IDkuOTE0MDYgNy4wNTg1OSA5LjQ5MjU4IDcuMDU4NTkgOC45NzI2NlY1LjIyMjY2QzcuMDU4NTkgNC43MDI3MyA3LjQ4MDA4IDQuMjgxMjUgOCA0LjI4MTI1WlwiXG4gICAgICAgICAgZmlsbD1cIiMxMjE2MjFcIlxuICAgICAgICAvPlxuICAgICAgPC9CYXNlPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==