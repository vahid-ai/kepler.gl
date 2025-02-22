"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactColor = require("react-color");

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _reselect = require("reselect");

var _templateObject;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyledPicker = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  .sketch-picker {\n    span {\n      color: ", " !important;\n      font-family: ", ";\n    }\n    input {\n      text-align: center;\n      font-family: ", ";\n      color: ", " !important;\n      border-color: ", " !important;\n      box-shadow: none !important;\n      background-color: ", " !important;\n    }\n  }\n"])), function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.inputColor;
}, function (props) {
  return props.theme.secondaryInputBgd;
}, function (props) {
  return props.theme.inputBgdHover;
});

var PRESET_COLORS = [];

var CustomPicker = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(CustomPicker, _Component);

  var _super = _createSuper(CustomPicker);

  function CustomPicker() {
    var _this;

    (0, _classCallCheck2["default"])(this, CustomPicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "themeSelector", function (props) {
      return props.theme;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "pickerStyleSelector", (0, _reselect.createSelector)(_this.themeSelector, function (theme) {
      return {
        picker: {
          width: '200px',
          padding: '10px 10px 8px',
          boxSizing: 'initial',
          background: theme.panelBackground
        }
      };
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function (e) {
      _this.props.onSwatchClose();
    });
    return _this;
  }

  (0, _createClass2["default"])(CustomPicker, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          onChange = _this$props.onChange;
      var pickerStyle = this.pickerStyleSelector(this.props);
      return /*#__PURE__*/_react["default"].createElement(StyledPicker, null, /*#__PURE__*/_react["default"].createElement(_reactColor.SketchPicker, {
        color: color,
        onChange: onChange,
        presetColors: PRESET_COLORS,
        styles: pickerStyle,
        disableAlpha: true
      }));
    }
  }]);
  return CustomPicker;
}(_react.Component);

var _default = (0, _styledComponents.withTheme)((0, _reactOnclickoutside["default"])(CustomPicker));

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2xheWVyLXBhbmVsL2N1c3RvbS1waWNrZXIudHN4Il0sIm5hbWVzIjpbIlN0eWxlZFBpY2tlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJsYWJlbENvbG9yIiwiZm9udEZhbWlseSIsImlucHV0Q29sb3IiLCJzZWNvbmRhcnlJbnB1dEJnZCIsImlucHV0QmdkSG92ZXIiLCJQUkVTRVRfQ09MT1JTIiwiQ3VzdG9tUGlja2VyIiwidGhlbWVTZWxlY3RvciIsInBpY2tlciIsIndpZHRoIiwicGFkZGluZyIsImJveFNpemluZyIsImJhY2tncm91bmQiLCJwYW5lbEJhY2tncm91bmQiLCJlIiwib25Td2F0Y2hDbG9zZSIsImNvbG9yIiwib25DaGFuZ2UiLCJwaWNrZXJTdHlsZSIsInBpY2tlclN0eWxlU2VsZWN0b3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFhQSxJQUFNQSxZQUFZLEdBQUdDLDZCQUFPQyxHQUFWLDBaQUdILFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsVUFBaEI7QUFBQSxDQUhGLEVBSUcsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxVQUFoQjtBQUFBLENBSlIsRUFRRyxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLFVBQWhCO0FBQUEsQ0FSUixFQVNILFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsVUFBaEI7QUFBQSxDQVRGLEVBVUksVUFBQUosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxpQkFBaEI7QUFBQSxDQVZULEVBWVEsVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxhQUFoQjtBQUFBLENBWmIsQ0FBbEI7O0FBaUJBLElBQU1DLGFBQWEsR0FBRyxFQUF0Qjs7SUFFTUMsWTs7Ozs7Ozs7Ozs7Ozs7O3NHQUNZLFVBQUNSLEtBQUQ7QUFBQSxhQUE4QkEsS0FBSyxDQUFDQyxLQUFwQztBQUFBLEs7NEdBQ00sOEJBQWUsTUFBS1EsYUFBcEIsRUFBbUMsVUFBQVIsS0FBSztBQUFBLGFBQUs7QUFDakVTLFFBQUFBLE1BQU0sRUFBRTtBQUNOQyxVQUFBQSxLQUFLLEVBQUUsT0FERDtBQUVOQyxVQUFBQSxPQUFPLEVBQUUsZUFGSDtBQUdOQyxVQUFBQSxTQUFTLEVBQUUsU0FITDtBQUlOQyxVQUFBQSxVQUFVLEVBQUViLEtBQUssQ0FBQ2M7QUFKWjtBQUR5RCxPQUFMO0FBQUEsS0FBeEMsQzsyR0FTRCxVQUFDQyxDQUFELEVBQWM7QUFDakMsWUFBS2hCLEtBQUwsQ0FBV2lCLGFBQVg7QUFDRCxLOzs7Ozs7V0FFRCxrQkFBUztBQUFBLHdCQUNtQixLQUFLakIsS0FEeEI7QUFBQSxVQUNBa0IsS0FEQSxlQUNBQSxLQURBO0FBQUEsVUFDT0MsUUFEUCxlQUNPQSxRQURQO0FBRVAsVUFBTUMsV0FBVyxHQUFHLEtBQUtDLG1CQUFMLENBQXlCLEtBQUtyQixLQUE5QixDQUFwQjtBQUVBLDBCQUNFLGdDQUFDLFlBQUQscUJBQ0UsZ0NBQUMsd0JBQUQ7QUFDRSxRQUFBLEtBQUssRUFBRWtCLEtBRFQ7QUFFRSxRQUFBLFFBQVEsRUFBRUMsUUFGWjtBQUdFLFFBQUEsWUFBWSxFQUFFWixhQUhoQjtBQUlFLFFBQUEsTUFBTSxFQUFFYSxXQUpWO0FBS0UsUUFBQSxZQUFZO0FBTGQsUUFERixDQURGO0FBV0Q7OztFQTlCd0JFLGdCOztlQWlDWixpQ0FBVSxxQ0FBZWQsWUFBZixDQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHt3aXRoVGhlbWV9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7U2tldGNoUGlja2VyLCBDb2xvckNoYW5nZUhhbmRsZXJ9IGZyb20gJ3JlYWN0LWNvbG9yJztcbmltcG9ydCBvbkNsaWNrT3V0c2lkZSBmcm9tICdyZWFjdC1vbmNsaWNrb3V0c2lkZSc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG4vLyBUaGlzIHdhcyBwdXQgaW4gYmVjYXVzZSAzcmQgcGFydHkgbGlicmFyeSByZWFjdC1jb2xvciBkb2Vzbid0IHlldCBjYXRlciBmb3IgY3VzdG9taXplZCBjb2xvciBvZiBjaGlsZCBjb21wb25lbnQgPFNrZXRjaEZpZWxkPiB3aGljaCBjb250YWlucyBIRVgvUkdCIGlucHV0IHRleHQgYm94XG4vLyBJc3N1ZSByYWlzZWQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9jYXNlc2FuZGJlcmcvcmVhY3QtY29sb3IvaXNzdWVzLzYzMVxuXG50eXBlIEN1c3RvbVBpY2tlclByb3BzID0ge1xuICBjb2xvcjogc3RyaW5nO1xuICB0aGVtZToge1xuICAgIHBhbmVsQmFja2dyb3VuZDogc3RyaW5nO1xuICB9O1xuICBvbkNoYW5nZTogQ29sb3JDaGFuZ2VIYW5kbGVyO1xuICBvblN3YXRjaENsb3NlOiAoKSA9PiB2b2lkO1xufTtcblxuY29uc3QgU3R5bGVkUGlja2VyID0gc3R5bGVkLmRpdmBcbiAgLnNrZXRjaC1waWNrZXIge1xuICAgIHNwYW4ge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn0gIWltcG9ydGFudDtcbiAgICAgIGZvbnQtZmFtaWx5OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnRGYW1pbHl9O1xuICAgIH1cbiAgICBpbnB1dCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250RmFtaWx5fTtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0Q29sb3J9ICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5SW5wdXRCZ2R9ICFpbXBvcnRhbnQ7XG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0QmdkSG92ZXJ9ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBQUkVTRVRfQ09MT1JTID0gW107XG5cbmNsYXNzIEN1c3RvbVBpY2tlciBleHRlbmRzIENvbXBvbmVudDxDdXN0b21QaWNrZXJQcm9wcz4ge1xuICB0aGVtZVNlbGVjdG9yID0gKHByb3BzOiBDdXN0b21QaWNrZXJQcm9wcykgPT4gcHJvcHMudGhlbWU7XG4gIHBpY2tlclN0eWxlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3Rvcih0aGlzLnRoZW1lU2VsZWN0b3IsIHRoZW1lID0+ICh7XG4gICAgcGlja2VyOiB7XG4gICAgICB3aWR0aDogJzIwMHB4JyxcbiAgICAgIHBhZGRpbmc6ICcxMHB4IDEwcHggOHB4JyxcbiAgICAgIGJveFNpemluZzogJ2luaXRpYWwnLFxuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFuZWxCYWNrZ3JvdW5kXG4gICAgfVxuICB9KSk7XG5cbiAgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblN3YXRjaENsb3NlKCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtjb2xvciwgb25DaGFuZ2V9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBwaWNrZXJTdHlsZSA9IHRoaXMucGlja2VyU3R5bGVTZWxlY3Rvcih0aGlzLnByb3BzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkUGlja2VyPlxuICAgICAgICA8U2tldGNoUGlja2VyXG4gICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICBwcmVzZXRDb2xvcnM9e1BSRVNFVF9DT0xPUlN9XG4gICAgICAgICAgc3R5bGVzPXtwaWNrZXJTdHlsZX1cbiAgICAgICAgICBkaXNhYmxlQWxwaGFcbiAgICAgICAgLz5cbiAgICAgIDwvU3R5bGVkUGlja2VyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKG9uQ2xpY2tPdXRzaWRlKEN1c3RvbVBpY2tlcikpO1xuIl19