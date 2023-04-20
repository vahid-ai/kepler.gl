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

var Db = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Db, _Component);

  var _super = _createSuper(Db);

  function Db() {
    (0, _classCallCheck2["default"])(this, Db);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Db, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], this.props, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
        d: "M32.000001,6 C26.2249941,6 20.9934005,7.06979182 17.0208337,8.93585449 C13.0482668,10.8019172 10,13.6479177 10,17.4078917 L10,45.5921083 C10,49.3520823 13.0482668,52.177146 17.0208337,54.0432087 C20.9934005,55.9092042 26.2249941,57 32.000001,57 C37.7750413,57 43.0066082,55.9092042 46.9791677,54.0432087 C50.9517265,52.177146 54,49.3520823 54,45.5921083 L54,17.4078917 C54,13.6479177 50.9517259,10.8019172 46.9791677,8.93585449 C43.0066075,7.06979182 37.7750406,6 32.0000003,6 L32.000001,6 Z M32.0000003,10 C37.2706271,10 42.0256405,11.0406591 45.2916666,12.5994318 C48.557694,14.1582045 50,16.0484773 50,17.5 C50,18.9515227 48.557694,20.8204545 45.2916666,22.3792273 C42.0256405,23.9380682 37.2706271,25 32.0000003,25 C26.7294069,25 21.9743668,23.9380682 18.7083334,22.3792273 C15.4422994,20.8204545 14,18.9515227 14,17.5 C14,16.0484773 15.4422994,14.1582045 18.7083334,12.5994318 C21.9743668,11.0406591 26.7294069,10 32.0000003,10 Z M14,24 C14.9089734,24.6525751 15.9275867,25.2372249 17.0208334,25.7463652 C20.9934001,27.5963149 26.2249936,28.6777307 32.0000003,28.6777307 C37.7750404,28.6777307 43.0066072,27.5963149 46.9791666,25.7463652 C48.0724133,25.2372249 49.0910266,24.6525751 50,24 L50,26.6818848 C50,28.0982036 48.557694,29.9218214 45.2916666,31.4427891 C42.0256405,32.9638898 37.2706271,34 32.0000003,34 C26.7294069,34 21.9743668,32.9638898 18.7083334,31.4427891 C15.4422994,29.9218214 14,28.0982036 14,26.6818848 L14,24 Z M14,33 C14.9091527,33.6585228 15.92008,34.251917 17.0208334,34.7635187 C20.9934001,36.6095602 26.2249936,37.6887967 32.0000003,37.6887967 C37.7750404,37.6887967 43.0066072,36.6095602 46.9791666,34.7635187 C48.07992,34.2518506 49.0908466,33.6585228 50,33 L50,35.6970954 C50,37.110473 48.557694,38.9302905 45.2916666,40.4480996 C42.0256405,41.9660415 37.2706271,43 32.0000003,43 C26.7294069,43 21.9743668,41.9660415 18.7083334,40.4480996 C15.4422994,38.9302905 14,37.110473 14,35.6970954 L14,33 Z M14,43 C14.9091527,43.6585228 15.92008,44.2518506 17.0208334,44.7635187 C20.9934001,46.6095602 26.2249936,47.6887967 32.0000003,47.6887967 C37.7750404,47.6887967 43.0066072,46.6095602 46.9791666,44.7635187 C48.07992,44.251917 49.0908466,43.6585228 50,43 L50,45.6970954 C50,47.110473 48.557694,48.9302905 45.2916666,50.4480996 C42.0256405,51.9659751 37.2706271,53 32.0000003,53 C26.7294069,53 21.9743668,51.9659751 18.7083334,50.4480996 C15.4422994,48.9302905 14,47.110473 14,45.6970954 L14,43 Z"
      })));
    }
  }]);
  return Db;
}(_react.Component);

exports["default"] = Db;
(0, _defineProperty2["default"])(Db, "displayName", 'Db');
(0, _defineProperty2["default"])(Db, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-db'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vaWNvbnMvZGIudHN4Il0sIm5hbWVzIjpbIkRiIiwicHJvcHMiLCJDb21wb25lbnQiLCJoZWlnaHQiLCJwcmVkZWZpbmVkQ2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7Ozs7O0lBRXFCQSxFOzs7Ozs7Ozs7Ozs7V0FPbkIsa0JBQVM7QUFDUCwwQkFDRSxnQ0FBQyxnQkFBRCxFQUFVLEtBQUtDLEtBQWYsZUFDRSx3REFDRTtBQUFNLFFBQUEsQ0FBQyxFQUFDO0FBQVIsUUFERixDQURGLENBREY7QUFPRDs7O0VBZjZCQyxnQjs7O2lDQUFYRixFLGlCQUNFLEk7aUNBREZBLEUsa0JBRUc7QUFDcEJHLEVBQUFBLE1BQU0sRUFBRSxNQURZO0FBRXBCQyxFQUFBQSxtQkFBbUIsRUFBRTtBQUZELEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYXNlLCB7QmFzZVByb3BzfSBmcm9tICcuL2Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYiBleHRlbmRzIENvbXBvbmVudDxQYXJ0aWFsPEJhc2VQcm9wcz4+IHtcbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0RiJztcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoZWlnaHQ6ICcxNnB4JyxcbiAgICBwcmVkZWZpbmVkQ2xhc3NOYW1lOiAnZGF0YS1leC1pY29ucy1kYidcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCYXNlIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgPGc+XG4gICAgICAgICAgPHBhdGggZD1cIk0zMi4wMDAwMDEsNiBDMjYuMjI0OTk0MSw2IDIwLjk5MzQwMDUsNy4wNjk3OTE4MiAxNy4wMjA4MzM3LDguOTM1ODU0NDkgQzEzLjA0ODI2NjgsMTAuODAxOTE3MiAxMCwxMy42NDc5MTc3IDEwLDE3LjQwNzg5MTcgTDEwLDQ1LjU5MjEwODMgQzEwLDQ5LjM1MjA4MjMgMTMuMDQ4MjY2OCw1Mi4xNzcxNDYgMTcuMDIwODMzNyw1NC4wNDMyMDg3IEMyMC45OTM0MDA1LDU1LjkwOTIwNDIgMjYuMjI0OTk0MSw1NyAzMi4wMDAwMDEsNTcgQzM3Ljc3NTA0MTMsNTcgNDMuMDA2NjA4Miw1NS45MDkyMDQyIDQ2Ljk3OTE2NzcsNTQuMDQzMjA4NyBDNTAuOTUxNzI2NSw1Mi4xNzcxNDYgNTQsNDkuMzUyMDgyMyA1NCw0NS41OTIxMDgzIEw1NCwxNy40MDc4OTE3IEM1NCwxMy42NDc5MTc3IDUwLjk1MTcyNTksMTAuODAxOTE3MiA0Ni45NzkxNjc3LDguOTM1ODU0NDkgQzQzLjAwNjYwNzUsNy4wNjk3OTE4MiAzNy43NzUwNDA2LDYgMzIuMDAwMDAwMyw2IEwzMi4wMDAwMDEsNiBaIE0zMi4wMDAwMDAzLDEwIEMzNy4yNzA2MjcxLDEwIDQyLjAyNTY0MDUsMTEuMDQwNjU5MSA0NS4yOTE2NjY2LDEyLjU5OTQzMTggQzQ4LjU1NzY5NCwxNC4xNTgyMDQ1IDUwLDE2LjA0ODQ3NzMgNTAsMTcuNSBDNTAsMTguOTUxNTIyNyA0OC41NTc2OTQsMjAuODIwNDU0NSA0NS4yOTE2NjY2LDIyLjM3OTIyNzMgQzQyLjAyNTY0MDUsMjMuOTM4MDY4MiAzNy4yNzA2MjcxLDI1IDMyLjAwMDAwMDMsMjUgQzI2LjcyOTQwNjksMjUgMjEuOTc0MzY2OCwyMy45MzgwNjgyIDE4LjcwODMzMzQsMjIuMzc5MjI3MyBDMTUuNDQyMjk5NCwyMC44MjA0NTQ1IDE0LDE4Ljk1MTUyMjcgMTQsMTcuNSBDMTQsMTYuMDQ4NDc3MyAxNS40NDIyOTk0LDE0LjE1ODIwNDUgMTguNzA4MzMzNCwxMi41OTk0MzE4IEMyMS45NzQzNjY4LDExLjA0MDY1OTEgMjYuNzI5NDA2OSwxMCAzMi4wMDAwMDAzLDEwIFogTTE0LDI0IEMxNC45MDg5NzM0LDI0LjY1MjU3NTEgMTUuOTI3NTg2NywyNS4yMzcyMjQ5IDE3LjAyMDgzMzQsMjUuNzQ2MzY1MiBDMjAuOTkzNDAwMSwyNy41OTYzMTQ5IDI2LjIyNDk5MzYsMjguNjc3NzMwNyAzMi4wMDAwMDAzLDI4LjY3NzczMDcgQzM3Ljc3NTA0MDQsMjguNjc3NzMwNyA0My4wMDY2MDcyLDI3LjU5NjMxNDkgNDYuOTc5MTY2NiwyNS43NDYzNjUyIEM0OC4wNzI0MTMzLDI1LjIzNzIyNDkgNDkuMDkxMDI2NiwyNC42NTI1NzUxIDUwLDI0IEw1MCwyNi42ODE4ODQ4IEM1MCwyOC4wOTgyMDM2IDQ4LjU1NzY5NCwyOS45MjE4MjE0IDQ1LjI5MTY2NjYsMzEuNDQyNzg5MSBDNDIuMDI1NjQwNSwzMi45NjM4ODk4IDM3LjI3MDYyNzEsMzQgMzIuMDAwMDAwMywzNCBDMjYuNzI5NDA2OSwzNCAyMS45NzQzNjY4LDMyLjk2Mzg4OTggMTguNzA4MzMzNCwzMS40NDI3ODkxIEMxNS40NDIyOTk0LDI5LjkyMTgyMTQgMTQsMjguMDk4MjAzNiAxNCwyNi42ODE4ODQ4IEwxNCwyNCBaIE0xNCwzMyBDMTQuOTA5MTUyNywzMy42NTg1MjI4IDE1LjkyMDA4LDM0LjI1MTkxNyAxNy4wMjA4MzM0LDM0Ljc2MzUxODcgQzIwLjk5MzQwMDEsMzYuNjA5NTYwMiAyNi4yMjQ5OTM2LDM3LjY4ODc5NjcgMzIuMDAwMDAwMywzNy42ODg3OTY3IEMzNy43NzUwNDA0LDM3LjY4ODc5NjcgNDMuMDA2NjA3MiwzNi42MDk1NjAyIDQ2Ljk3OTE2NjYsMzQuNzYzNTE4NyBDNDguMDc5OTIsMzQuMjUxODUwNiA0OS4wOTA4NDY2LDMzLjY1ODUyMjggNTAsMzMgTDUwLDM1LjY5NzA5NTQgQzUwLDM3LjExMDQ3MyA0OC41NTc2OTQsMzguOTMwMjkwNSA0NS4yOTE2NjY2LDQwLjQ0ODA5OTYgQzQyLjAyNTY0MDUsNDEuOTY2MDQxNSAzNy4yNzA2MjcxLDQzIDMyLjAwMDAwMDMsNDMgQzI2LjcyOTQwNjksNDMgMjEuOTc0MzY2OCw0MS45NjYwNDE1IDE4LjcwODMzMzQsNDAuNDQ4MDk5NiBDMTUuNDQyMjk5NCwzOC45MzAyOTA1IDE0LDM3LjExMDQ3MyAxNCwzNS42OTcwOTU0IEwxNCwzMyBaIE0xNCw0MyBDMTQuOTA5MTUyNyw0My42NTg1MjI4IDE1LjkyMDA4LDQ0LjI1MTg1MDYgMTcuMDIwODMzNCw0NC43NjM1MTg3IEMyMC45OTM0MDAxLDQ2LjYwOTU2MDIgMjYuMjI0OTkzNiw0Ny42ODg3OTY3IDMyLjAwMDAwMDMsNDcuNjg4Nzk2NyBDMzcuNzc1MDQwNCw0Ny42ODg3OTY3IDQzLjAwNjYwNzIsNDYuNjA5NTYwMiA0Ni45NzkxNjY2LDQ0Ljc2MzUxODcgQzQ4LjA3OTkyLDQ0LjI1MTkxNyA0OS4wOTA4NDY2LDQzLjY1ODUyMjggNTAsNDMgTDUwLDQ1LjY5NzA5NTQgQzUwLDQ3LjExMDQ3MyA0OC41NTc2OTQsNDguOTMwMjkwNSA0NS4yOTE2NjY2LDUwLjQ0ODA5OTYgQzQyLjAyNTY0MDUsNTEuOTY1OTc1MSAzNy4yNzA2MjcxLDUzIDMyLjAwMDAwMDMsNTMgQzI2LjcyOTQwNjksNTMgMjEuOTc0MzY2OCw1MS45NjU5NzUxIDE4LjcwODMzMzQsNTAuNDQ4MDk5NiBDMTUuNDQyMjk5NCw0OC45MzAyOTA1IDE0LDQ3LjExMDQ3MyAxNCw0NS42OTcwOTU0IEwxNCw0MyBaXCIgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9CYXNlPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==