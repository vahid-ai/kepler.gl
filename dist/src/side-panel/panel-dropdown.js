"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("../common/styled-components");

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ClickOutsideCloseDropdown = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ClickOutsideCloseDropdown, _Component);

  var _super = _createSuper(ClickOutsideCloseDropdown);

  function ClickOutsideCloseDropdown() {
    var _this;

    (0, _classCallCheck2["default"])(this, ClickOutsideCloseDropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function (e) {
      if (typeof _this.props.onClose === 'function' && _this.props.show) {
        _this.props.onClose(e);
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(ClickOutsideCloseDropdown, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledPanelDropdown, {
        type: this.props.type,
        className: this.props.className
      }, this.props.children);
    }
  }]);
  return ClickOutsideCloseDropdown;
}(_react.Component);

(0, _defineProperty2["default"])(ClickOutsideCloseDropdown, "defaultProps", {
  show: true,
  type: 'dark'
});

var _default = (0, _reactOnclickoutside["default"])(ClickOutsideCloseDropdown);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL3BhbmVsLWRyb3Bkb3duLnRzeCJdLCJuYW1lcyI6WyJDbGlja091dHNpZGVDbG9zZURyb3Bkb3duIiwiZSIsInByb3BzIiwib25DbG9zZSIsInNob3ciLCJ0eXBlIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7OztJQVNNQSx5Qjs7Ozs7Ozs7Ozs7Ozs7OzJHQU1pQixVQUFDQyxDQUFELEVBQWM7QUFDakMsVUFBSSxPQUFPLE1BQUtDLEtBQUwsQ0FBV0MsT0FBbEIsS0FBOEIsVUFBOUIsSUFBNEMsTUFBS0QsS0FBTCxDQUFXRSxJQUEzRCxFQUFpRTtBQUMvRCxjQUFLRixLQUFMLENBQVdDLE9BQVgsQ0FBbUJGLENBQW5CO0FBQ0Q7QUFDRixLOzs7Ozs7V0FFRCxrQkFBUztBQUNQLDBCQUNFLGdDQUFDLHFDQUFEO0FBQXFCLFFBQUEsSUFBSSxFQUFFLEtBQUtDLEtBQUwsQ0FBV0csSUFBdEM7QUFBNEMsUUFBQSxTQUFTLEVBQUUsS0FBS0gsS0FBTCxDQUFXSTtBQUFsRSxTQUNHLEtBQUtKLEtBQUwsQ0FBV0ssUUFEZCxDQURGO0FBS0Q7OztFQWxCcUNDLGdCOztpQ0FBbENSLHlCLGtCQUNrQjtBQUNwQkksRUFBQUEsSUFBSSxFQUFFLElBRGM7QUFFcEJDLEVBQUFBLElBQUksRUFBRTtBQUZjLEM7O2VBb0JULHFDQUFzQkwseUJBQXRCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U3R5bGVkUGFuZWxEcm9wZG93bn0gZnJvbSAnLi4vY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBsaXN0ZW5zVG9DbGlja091dHNpZGUgZnJvbSAncmVhY3Qtb25jbGlja291dHNpZGUnO1xuXG50eXBlIENsaWNrT3V0c2lkZUNsb3NlRHJvcGRvd25Qcm9wcyA9IHtcbiAgc2hvdzogYm9vbGVhbjtcbiAgdHlwZTogc3RyaW5nO1xuICBjbGFzc05hbWU6IHN0cmluZztcbiAgb25DbG9zZTogKGU6IEV2ZW50KSA9PiB2b2lkO1xufTtcblxuY2xhc3MgQ2xpY2tPdXRzaWRlQ2xvc2VEcm9wZG93biBleHRlbmRzIENvbXBvbmVudDxDbGlja091dHNpZGVDbG9zZURyb3Bkb3duUHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzaG93OiB0cnVlLFxuICAgIHR5cGU6ICdkYXJrJ1xuICB9O1xuXG4gIGhhbmRsZUNsaWNrT3V0c2lkZSA9IChlOiBFdmVudCkgPT4ge1xuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbkNsb3NlID09PSAnZnVuY3Rpb24nICYmIHRoaXMucHJvcHMuc2hvdykge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKGUpO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRQYW5lbERyb3Bkb3duIHR5cGU9e3RoaXMucHJvcHMudHlwZX0gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9TdHlsZWRQYW5lbERyb3Bkb3duPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdGVuc1RvQ2xpY2tPdXRzaWRlKENsaWNrT3V0c2lkZUNsb3NlRHJvcGRvd24pO1xuIl19