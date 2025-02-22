"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AnimationSpeedSliderFactory;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _rangeSlider = _interopRequireDefault(require("../range-slider"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _constants = require("@kepler.gl/constants");

var _templateObject, _templateObject2;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SliderWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n"])));

var SpeedSliderContainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  bottom: 50px;\n  right: calc(0% - 32px);\n  width: 180px;\n  padding: 2px 8px 2px 12px;\n  background-color: ", ";\n  box-shadow: -2px -2px 0 0 rgba(0, 0, 0, 0.1);\n\n  .kg-range-slider__input {\n    width: 48px;\n    padding: 6px;\n  }\n"])), function (props) {
  return props.theme.bottomWidgetBgd;
});

AnimationSpeedSliderFactory.deps = [_rangeSlider["default"]];

function AnimationSpeedSliderFactory(RangeSlider) {
  var AnimationSpeedSlider = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(AnimationSpeedSlider, _Component);

    var _super = _createSuper(AnimationSpeedSlider);

    function AnimationSpeedSlider() {
      var _this;

      (0, _classCallCheck2["default"])(this, AnimationSpeedSlider);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function (e) {
        _this.props.onHide();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onChange", function (v) {
        return _this.props.updateAnimationSpeed(v[1]);
      });
      return _this;
    }

    (0, _createClass2["default"])(AnimationSpeedSlider, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/_react["default"].createElement(SpeedSliderContainer, {
          className: "animation-control__speed-slider"
        }, /*#__PURE__*/_react["default"].createElement(SliderWrapper, null, /*#__PURE__*/_react["default"].createElement(RangeSlider, {
          range: _constants.SPEED_CONTROL_RANGE,
          step: _constants.SPEED_CONTROL_STEP,
          value0: 0,
          value1: this.props.speed,
          onChange: this._onChange,
          isRanged: false,
          showInput: true,
          inputTheme: "secondary",
          inputSize: "tiny"
        })));
      }
    }]);
    return AnimationSpeedSlider;
  }(_react.Component);

  return (0, _reactOnclickoutside["default"])(AnimationSpeedSlider);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vYW5pbWF0aW9uLWNvbnRyb2wvYW5pbWF0aW9uLXNwZWVkLXNsaWRlci50c3giXSwibmFtZXMiOlsiU2xpZGVyV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIlNwZWVkU2xpZGVyQ29udGFpbmVyIiwicHJvcHMiLCJ0aGVtZSIsImJvdHRvbVdpZGdldEJnZCIsIkFuaW1hdGlvblNwZWVkU2xpZGVyRmFjdG9yeSIsImRlcHMiLCJSYW5nZVNsaWRlckZhY3RvcnkiLCJSYW5nZVNsaWRlciIsIkFuaW1hdGlvblNwZWVkU2xpZGVyIiwiZSIsIm9uSGlkZSIsInYiLCJ1cGRhdGVBbmltYXRpb25TcGVlZCIsIlNQRUVEX0NPTlRST0xfUkFOR0UiLCJTUEVFRF9DT05UUk9MX1NURVAiLCJzcGVlZCIsIl9vbkNoYW5nZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBR0MsNkJBQU9DLEdBQVYsK0dBQW5COztBQUlBLElBQU1DLG9CQUFvQixHQUFHRiw2QkFBT0MsR0FBVixrV0FNSixVQUFBRSxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLGVBQWhCO0FBQUEsQ0FORCxDQUExQjs7QUFlQUMsMkJBQTJCLENBQUNDLElBQTVCLEdBQW1DLENBQUNDLHVCQUFELENBQW5DOztBQVFlLFNBQVNGLDJCQUFULENBQ2JHLFdBRGEsRUFFNkI7QUFBQSxNQUNwQ0Msb0JBRG9DO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSw2R0FFbkIsVUFBQUMsQ0FBQyxFQUFJO0FBQ3hCLGNBQUtSLEtBQUwsQ0FBV1MsTUFBWDtBQUNELE9BSnVDO0FBQUEsb0dBTTVCLFVBQUFDLENBQUM7QUFBQSxlQUFJLE1BQUtWLEtBQUwsQ0FBV1csb0JBQVgsQ0FBZ0NELENBQUMsQ0FBQyxDQUFELENBQWpDLENBQUo7QUFBQSxPQU4yQjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGFBUXhDLGtCQUFTO0FBQ1AsNEJBQ0UsZ0NBQUMsb0JBQUQ7QUFBc0IsVUFBQSxTQUFTLEVBQUM7QUFBaEMsd0JBQ0UsZ0NBQUMsYUFBRCxxQkFDRSxnQ0FBQyxXQUFEO0FBQ0UsVUFBQSxLQUFLLEVBQUVFLDhCQURUO0FBRUUsVUFBQSxJQUFJLEVBQUVDLDZCQUZSO0FBR0UsVUFBQSxNQUFNLEVBQUUsQ0FIVjtBQUlFLFVBQUEsTUFBTSxFQUFFLEtBQUtiLEtBQUwsQ0FBV2MsS0FKckI7QUFLRSxVQUFBLFFBQVEsRUFBRSxLQUFLQyxTQUxqQjtBQU1FLFVBQUEsUUFBUSxFQUFFLEtBTlo7QUFPRSxVQUFBLFNBQVMsTUFQWDtBQVFFLFVBQUEsVUFBVSxFQUFDLFdBUmI7QUFTRSxVQUFBLFNBQVMsRUFBQztBQVRaLFVBREYsQ0FERixDQURGO0FBaUJEO0FBMUJ1QztBQUFBO0FBQUEsSUFDUEMsZ0JBRE87O0FBNkIxQyxTQUFPLHFDQUFlVCxvQkFBZixDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIENvbXBvbmVudFR5cGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJhbmdlU2xpZGVyRmFjdG9yeSBmcm9tICcuLi9yYW5nZS1zbGlkZXInO1xuaW1wb3J0IG9uQ2xpY2tPdXRzaWRlIGZyb20gJ3JlYWN0LW9uY2xpY2tvdXRzaWRlJztcbmltcG9ydCB7U1BFRURfQ09OVFJPTF9SQU5HRSwgU1BFRURfQ09OVFJPTF9TVEVQfSBmcm9tICdAa2VwbGVyLmdsL2NvbnN0YW50cyc7XG5cbmNvbnN0IFNsaWRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBTcGVlZFNsaWRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MHB4O1xuICByaWdodDogY2FsYygwJSAtIDMycHgpO1xuICB3aWR0aDogMTgwcHg7XG4gIHBhZGRpbmc6IDJweCA4cHggMnB4IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm90dG9tV2lkZ2V0QmdkfTtcbiAgYm94LXNoYWRvdzogLTJweCAtMnB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbiAgLmtnLXJhbmdlLXNsaWRlcl9faW5wdXQge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIHBhZGRpbmc6IDZweDtcbiAgfVxuYDtcblxuQW5pbWF0aW9uU3BlZWRTbGlkZXJGYWN0b3J5LmRlcHMgPSBbUmFuZ2VTbGlkZXJGYWN0b3J5XTtcblxuaW50ZXJmYWNlIEFuaW1hdGlvblNwZWVkU2xpZGVyUHJvcHMge1xuICBvbkhpZGU6ICgpID0+IHZvaWQ7XG4gIHNwZWVkOiBudW1iZXI7XG4gIHVwZGF0ZUFuaW1hdGlvblNwZWVkOiAodmFsOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuaW1hdGlvblNwZWVkU2xpZGVyRmFjdG9yeShcbiAgUmFuZ2VTbGlkZXI6IFJldHVyblR5cGU8dHlwZW9mIFJhbmdlU2xpZGVyRmFjdG9yeT5cbik6IENvbXBvbmVudFR5cGU8QW5pbWF0aW9uU3BlZWRTbGlkZXJQcm9wcz4ge1xuICBjbGFzcyBBbmltYXRpb25TcGVlZFNsaWRlciBleHRlbmRzIENvbXBvbmVudDxBbmltYXRpb25TcGVlZFNsaWRlclByb3BzPiB7XG4gICAgaGFuZGxlQ2xpY2tPdXRzaWRlID0gZSA9PiB7XG4gICAgICB0aGlzLnByb3BzLm9uSGlkZSgpO1xuICAgIH07XG5cbiAgICBfb25DaGFuZ2UgPSB2ID0+IHRoaXMucHJvcHMudXBkYXRlQW5pbWF0aW9uU3BlZWQodlsxXSk7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3BlZWRTbGlkZXJDb250YWluZXIgY2xhc3NOYW1lPVwiYW5pbWF0aW9uLWNvbnRyb2xfX3NwZWVkLXNsaWRlclwiPlxuICAgICAgICAgIDxTbGlkZXJXcmFwcGVyPlxuICAgICAgICAgICAgPFJhbmdlU2xpZGVyXG4gICAgICAgICAgICAgIHJhbmdlPXtTUEVFRF9DT05UUk9MX1JBTkdFfVxuICAgICAgICAgICAgICBzdGVwPXtTUEVFRF9DT05UUk9MX1NURVB9XG4gICAgICAgICAgICAgIHZhbHVlMD17MH1cbiAgICAgICAgICAgICAgdmFsdWUxPXt0aGlzLnByb3BzLnNwZWVkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2V9XG4gICAgICAgICAgICAgIGlzUmFuZ2VkPXtmYWxzZX1cbiAgICAgICAgICAgICAgc2hvd0lucHV0XG4gICAgICAgICAgICAgIGlucHV0VGhlbWU9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICBpbnB1dFNpemU9XCJ0aW55XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9TbGlkZXJXcmFwcGVyPlxuICAgICAgICA8L1NwZWVkU2xpZGVyQ29udGFpbmVyPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb25DbGlja091dHNpZGUoQW5pbWF0aW9uU3BlZWRTbGlkZXIpO1xufVxuIl19