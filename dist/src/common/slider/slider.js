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

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _sliderHandle = _interopRequireDefault(require("./slider-handle"));

var _sliderBarHandle = _interopRequireDefault(require("./slider-bar-handle"));

var _utils = require("@kepler.gl/utils");

var _templateObject, _templateObject2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function noop() {}

var StyledRangeSlider = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  background-color: ", ";\n  ", ";\n  ", ";\n"])), function (props) {
  return props.theme.sliderBarBgd;
}, function (props) {
  return "".concat(props.vertical ? 'width' : 'height', ": ").concat(props.theme.sliderBarHeight, "px");
}, function (props) {
  return "".concat(props.vertical ? 'height' : 'width', ": 100%");
});

var SliderWrapper = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 1;\n"])));

var Slider = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Slider, _Component);

  var _super = _createSuper(Slider);

  function Slider(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Slider);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "anchor", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "ref", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "track", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setAnchor", function (x) {
      // used to calculate delta
      _this.anchor = x;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "slide0Listener", function (x) {
      var _this$props = _this.props,
          value1 = _this$props.value1,
          minValue = _this$props.minValue;

      var val = _this.getValue(minValue, x);

      _this.props.onSlider0Change((0, _utils.clamp)([minValue, value1], val));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "slide1Listener", function (x) {
      var _this$props2 = _this.props,
          minValue = _this$props2.minValue,
          maxValue = _this$props2.maxValue,
          value0 = _this$props2.value0;

      var val = _this.getValue(minValue, x);

      _this.props.onSlider1Change((0, _utils.clamp)([value0, maxValue], val));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "sliderBarListener", function (x) {
      var _this$props3 = _this.props,
          value0 = _this$props3.value0,
          value1 = _this$props3.value1,
          minValue = _this$props3.minValue,
          maxValue = _this$props3.maxValue; // for slider bar, we use distance delta

      var anchor = _this.anchor;
      var length = value1 - value0; // the length of the selected range shouldn't change when clamping

      var val0 = (0, _utils.clamp)([minValue, maxValue - length], _this.getValue(value0, x - anchor));
      var val1 = (0, _utils.clamp)([val0 + length, maxValue], _this.getValue(value1, x - anchor));

      var deltaX = _this.getDeltaX(val0 - _this.props.value0);

      _this.props.onSliderBarChange(val0, val1); // update anchor


      _this.anchor = _this.anchor + deltaX;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "calcHandleLeft0", function (w, l) {
      return w === 0 ? "calc(".concat(l, "% - ").concat(_this.props.sliderHandleWidth / 2, "px)") : "calc(".concat(l, "% - ").concat(_this.props.sliderHandleWidth / 2, "px)");
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "calcHandleLeft1", function (w, l) {
      return _this.props.isRanged && w === 0 ? "".concat(l, "%") : "calc(".concat(l + w, "% - ").concat(_this.props.sliderHandleWidth / 2, "px)");
    });
    _this.props = props;
    return _this;
  }

  (0, _createClass2["default"])(Slider, [{
    key: "getBaseDistance",
    value: function getBaseDistance() {
      if (!this.ref.current) {
        return 0;
      }

      return this.props.vertical ? this.ref.current.offsetHeight : this.ref.current.offsetWidth;
    }
  }, {
    key: "getDeltaVal",
    value: function getDeltaVal(x) {
      var percent = x / this.getBaseDistance();
      var maxDelta = this.props.maxValue - this.props.minValue;
      return percent * maxDelta;
    }
  }, {
    key: "getDeltaX",
    value: function getDeltaX(v) {
      var percent = v / (this.props.maxValue - this.props.minValue);
      var maxDelta = this.getBaseDistance();
      return percent * maxDelta;
    }
  }, {
    key: "getValue",
    value: function getValue(baseV, offset) {
      // offset is the distance between slider handle and track left
      var rawValue = baseV + this.getDeltaVal(offset);
      return this.normalizeValue(rawValue);
    }
  }, {
    key: "normalizeValue",
    value: function normalizeValue(val) {
      var _this$props4 = this.props,
          minValue = _this$props4.minValue,
          step = _this$props4.step,
          marks = _this$props4.marks;
      return (0, _utils.normalizeSliderValue)(val, minValue, step, marks);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          className = _this$props5.className,
          classSet = _this$props5.classSet,
          disabled = _this$props5.disabled,
          isRanged = _this$props5.isRanged,
          maxValue = _this$props5.maxValue,
          minValue = _this$props5.minValue,
          value1 = _this$props5.value1,
          vertical = _this$props5.vertical,
          sliderHandleWidth = _this$props5.sliderHandleWidth,
          showTooltip = _this$props5.showTooltip,
          style = _this$props5.style;
      var value0 = !isRanged && minValue > 0 ? minValue : this.props.value0;
      var currValDelta = value1 - value0;
      var maxDelta = maxValue - minValue;
      var width = currValDelta / maxDelta * 100;
      var v0Left = (value0 - minValue) / maxDelta * 100;
      return /*#__PURE__*/_react["default"].createElement(SliderWrapper, {
        className: (0, _classnames["default"])('kg-slider', _objectSpread(_objectSpread({}, classSet), {}, {
          disabled: disabled
        }), className),
        ref: this.ref,
        isRanged: isRanged,
        vertical: vertical,
        style: style
      }, /*#__PURE__*/_react["default"].createElement(StyledRangeSlider, {
        className: "kg-range-slider",
        vertical: vertical,
        ref: this.track
      }, /*#__PURE__*/_react["default"].createElement(_sliderHandle["default"], {
        left: this.calcHandleLeft0(width, v0Left),
        valueListener: this.slide0Listener,
        sliderHandleWidth: sliderHandleWidth,
        display: isRanged,
        vertical: vertical,
        showTooltip: showTooltip,
        track: this.track
      }), /*#__PURE__*/_react["default"].createElement(_sliderHandle["default"], {
        left: this.calcHandleLeft1(width, v0Left),
        valueListener: this.slide1Listener,
        sliderHandleWidth: sliderHandleWidth,
        vertical: vertical,
        value: value1,
        showTooltip: showTooltip,
        track: this.track
      }), /*#__PURE__*/_react["default"].createElement(_sliderBarHandle["default"], {
        width: width,
        v0Left: v0Left,
        enableBarDrag: this.props.enableBarDrag,
        sliderBarListener: this.sliderBarListener,
        vertical: vertical,
        track: this.track,
        setAnchor: this.setAnchor
      })));
    }
  }]);
  return Slider;
}(_react.Component);

exports["default"] = Slider;
(0, _defineProperty2["default"])(Slider, "defaultProps", {
  title: '',
  isRanged: true,
  value0: 0,
  value1: 100,
  minValue: 0,
  maxValue: 100,
  step: 1,
  sliderHandleWidth: 12,
  enableBarDrag: false,
  onSlider0Change: noop,
  onSlider1Change: noop,
  onSliderBarChange: noop,
  disabled: false,
  vertical: false,
  showTooltip: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vc2xpZGVyL3NsaWRlci50c3giXSwibmFtZXMiOlsibm9vcCIsIlN0eWxlZFJhbmdlU2xpZGVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInNsaWRlckJhckJnZCIsInZlcnRpY2FsIiwic2xpZGVyQmFySGVpZ2h0IiwiU2xpZGVyV3JhcHBlciIsIlNsaWRlciIsIngiLCJhbmNob3IiLCJ2YWx1ZTEiLCJtaW5WYWx1ZSIsInZhbCIsImdldFZhbHVlIiwib25TbGlkZXIwQ2hhbmdlIiwibWF4VmFsdWUiLCJ2YWx1ZTAiLCJvblNsaWRlcjFDaGFuZ2UiLCJsZW5ndGgiLCJ2YWwwIiwidmFsMSIsImRlbHRhWCIsImdldERlbHRhWCIsIm9uU2xpZGVyQmFyQ2hhbmdlIiwidyIsImwiLCJzbGlkZXJIYW5kbGVXaWR0aCIsImlzUmFuZ2VkIiwicmVmIiwiY3VycmVudCIsIm9mZnNldEhlaWdodCIsIm9mZnNldFdpZHRoIiwicGVyY2VudCIsImdldEJhc2VEaXN0YW5jZSIsIm1heERlbHRhIiwidiIsImJhc2VWIiwib2Zmc2V0IiwicmF3VmFsdWUiLCJnZXREZWx0YVZhbCIsIm5vcm1hbGl6ZVZhbHVlIiwic3RlcCIsIm1hcmtzIiwiY2xhc3NOYW1lIiwiY2xhc3NTZXQiLCJkaXNhYmxlZCIsInNob3dUb29sdGlwIiwic3R5bGUiLCJjdXJyVmFsRGVsdGEiLCJ3aWR0aCIsInYwTGVmdCIsInRyYWNrIiwiY2FsY0hhbmRsZUxlZnQwIiwic2xpZGUwTGlzdGVuZXIiLCJjYWxjSGFuZGxlTGVmdDEiLCJzbGlkZTFMaXN0ZW5lciIsImVuYWJsZUJhckRyYWciLCJzbGlkZXJCYXJMaXN0ZW5lciIsInNldEFuY2hvciIsIkNvbXBvbmVudCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7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QixFQUFFMUIsSUFaQztBQWFwQmdELEVBQUFBLFFBQVEsRUFBRSxLQWJVO0FBY3BCekMsRUFBQUEsUUFBUSxFQUFFLEtBZFU7QUFlcEIwQyxFQUFBQSxXQUFXLEVBQUU7QUFmTyxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWYsIFJlZk9iamVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IFNsaWRlckhhbmRsZSBmcm9tICcuL3NsaWRlci1oYW5kbGUnO1xuaW1wb3J0IFNsaWRlckJhckhhbmRsZSBmcm9tICcuL3NsaWRlci1iYXItaGFuZGxlJztcbmltcG9ydCB7bm9ybWFsaXplU2xpZGVyVmFsdWUsIGNsYW1wfSBmcm9tICdAa2VwbGVyLmdsL3V0aWxzJztcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmludGVyZmFjZSBTdHlsZWRSYW5nZVNsaWRlclByb3BzIHtcbiAgdmVydGljYWw/OiBib29sZWFuO1xufVxuXG5jb25zdCBTdHlsZWRSYW5nZVNsaWRlciA9IHN0eWxlZC5kaXY8U3R5bGVkUmFuZ2VTbGlkZXJQcm9wcz5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJCYXJCZ2R9O1xuICAke3Byb3BzID0+IGAke3Byb3BzLnZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnfTogJHtwcm9wcy50aGVtZS5zbGlkZXJCYXJIZWlnaHR9cHhgfTtcbiAgJHtwcm9wcyA9PiBgJHtwcm9wcy52ZXJ0aWNhbCA/ICdoZWlnaHQnIDogJ3dpZHRoJ306IDEwMCVgfTtcbmA7XG5cbmV4cG9ydCB0eXBlIFN0eWxlUmFuZ2VTbGlkZXJUeXBlID0gdHlwZW9mIFN0eWxlZFJhbmdlU2xpZGVyICYgSFRNTERpdkVsZW1lbnQ7XG5cbmludGVyZmFjZSBTbGlkZXJXcmFwcGVyUHJvcHMge1xuICBpc1JhbmdlZD86IGJvb2xlYW47XG4gIHZlcnRpY2FsPzogYm9vbGVhbjtcbn1cblxuY29uc3QgU2xpZGVyV3JhcHBlciA9IHN0eWxlZC5kaXY8U2xpZGVyV3JhcHBlclByb3BzPmBcbiAgZmxleC1ncm93OiAxO1xuYDtcblxudHlwZSBTbGlkZXJQcm9wcyA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgaXNSYW5nZWQ6IGJvb2xlYW47XG4gIHZhbHVlMDogbnVtYmVyO1xuICB2YWx1ZTE6IG51bWJlcjtcbiAgbWluVmFsdWU6IG51bWJlcjtcbiAgbWF4VmFsdWU6IG51bWJlcjtcbiAgc2xpZGVySGFuZGxlV2lkdGg6IG51bWJlcjtcbiAgb25TbGlkZXIwQ2hhbmdlOiAodmFsOiBudW1iZXIpID0+IGFueTtcbiAgb25TbGlkZXIxQ2hhbmdlOiAodmFsOiBudW1iZXIpID0+IGFueTtcbiAgb25TbGlkZXJCYXJDaGFuZ2U6ICh2YWwwOiBudW1iZXIsIHZhbDE6IG51bWJlcikgPT4gdm9pZDtcbiAgc3RlcDogbnVtYmVyO1xuICBlbmFibGVCYXJEcmFnOiBib29sZWFuO1xuICBzaG93VG9vbHRpcDogYm9vbGVhbjtcbiAgdmVydGljYWw6IGJvb2xlYW47XG4gIG1hcmtzPzogbnVtYmVyW107XG4gIGNsYXNzU2V0Pzoge1trZXk6IHN0cmluZ106IGJvb2xlYW59O1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBzdHlsZT86IG9iamVjdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciBleHRlbmRzIENvbXBvbmVudDxTbGlkZXJQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHRpdGxlOiAnJyxcbiAgICBpc1JhbmdlZDogdHJ1ZSxcbiAgICB2YWx1ZTA6IDAsXG4gICAgdmFsdWUxOiAxMDAsXG4gICAgbWluVmFsdWU6IDAsXG4gICAgbWF4VmFsdWU6IDEwMCxcbiAgICBzdGVwOiAxLFxuICAgIHNsaWRlckhhbmRsZVdpZHRoOiAxMixcbiAgICBlbmFibGVCYXJEcmFnOiBmYWxzZSxcbiAgICBvblNsaWRlcjBDaGFuZ2U6IG5vb3AsXG4gICAgb25TbGlkZXIxQ2hhbmdlOiBub29wLFxuICAgIG9uU2xpZGVyQmFyQ2hhbmdlOiBub29wLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgc2hvd1Rvb2x0aXA6IGZhbHNlXG4gIH07XG5cbiAgcHJpdmF0ZSBhbmNob3I6IG51bWJlciA9IDA7XG5cbiAgcHVibGljIHJlZjogUmVmT2JqZWN0PHR5cGVvZiBTbGlkZXJXcmFwcGVyICYgSFRNTERpdkVsZW1lbnQ+ID0gY3JlYXRlUmVmPFxuICAgIHR5cGVvZiBTbGlkZXJXcmFwcGVyICYgSFRNTERpdkVsZW1lbnRcbiAgPigpO1xuICBwdWJsaWMgdHJhY2s6IFJlZk9iamVjdDxTdHlsZVJhbmdlU2xpZGVyVHlwZT4gPSBjcmVhdGVSZWY8U3R5bGVSYW5nZVNsaWRlclR5cGU+KCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHByb3BzOiBTbGlkZXJQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0QW5jaG9yID0gKHg6IG51bWJlcikgPT4ge1xuICAgIC8vIHVzZWQgdG8gY2FsY3VsYXRlIGRlbHRhXG4gICAgdGhpcy5hbmNob3IgPSB4O1xuICB9O1xuXG4gIHByaXZhdGUgZ2V0QmFzZURpc3RhbmNlKCkge1xuICAgIGlmICghdGhpcy5yZWYuY3VycmVudCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnByb3BzLnZlcnRpY2FsID8gdGhpcy5yZWYuY3VycmVudC5vZmZzZXRIZWlnaHQgOiB0aGlzLnJlZi5jdXJyZW50Lm9mZnNldFdpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWx0YVZhbCh4OiBudW1iZXIpIHtcbiAgICBjb25zdCBwZXJjZW50ID0geCAvIHRoaXMuZ2V0QmFzZURpc3RhbmNlKCk7XG4gICAgY29uc3QgbWF4RGVsdGEgPSB0aGlzLnByb3BzLm1heFZhbHVlIC0gdGhpcy5wcm9wcy5taW5WYWx1ZTtcbiAgICByZXR1cm4gcGVyY2VudCAqIG1heERlbHRhO1xuICB9XG4gIHByaXZhdGUgZ2V0RGVsdGFYKHY6IG51bWJlcikge1xuICAgIGNvbnN0IHBlcmNlbnQgPSB2IC8gKHRoaXMucHJvcHMubWF4VmFsdWUgLSB0aGlzLnByb3BzLm1pblZhbHVlKTtcbiAgICBjb25zdCBtYXhEZWx0YSA9IHRoaXMuZ2V0QmFzZURpc3RhbmNlKCk7XG4gICAgcmV0dXJuIHBlcmNlbnQgKiBtYXhEZWx0YTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmFsdWUoYmFzZVY6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIpIHtcbiAgICAvLyBvZmZzZXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gc2xpZGVyIGhhbmRsZSBhbmQgdHJhY2sgbGVmdFxuICAgIGNvbnN0IHJhd1ZhbHVlID0gYmFzZVYgKyB0aGlzLmdldERlbHRhVmFsKG9mZnNldCk7XG5cbiAgICByZXR1cm4gdGhpcy5ub3JtYWxpemVWYWx1ZShyYXdWYWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIG5vcm1hbGl6ZVZhbHVlKHZhbDogbnVtYmVyKSB7XG4gICAgY29uc3Qge21pblZhbHVlLCBzdGVwLCBtYXJrc30gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBub3JtYWxpemVTbGlkZXJWYWx1ZSh2YWwsIG1pblZhbHVlLCBzdGVwLCBtYXJrcyk7XG4gIH1cblxuICBzbGlkZTBMaXN0ZW5lciA9ICh4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB7dmFsdWUxLCBtaW5WYWx1ZX0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHZhbCA9IHRoaXMuZ2V0VmFsdWUobWluVmFsdWUsIHgpO1xuICAgIHRoaXMucHJvcHMub25TbGlkZXIwQ2hhbmdlKGNsYW1wKFttaW5WYWx1ZSwgdmFsdWUxXSwgdmFsKSk7XG4gIH07XG5cbiAgc2xpZGUxTGlzdGVuZXIgPSAoeDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3Qge21pblZhbHVlLCBtYXhWYWx1ZSwgdmFsdWUwfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdmFsID0gdGhpcy5nZXRWYWx1ZShtaW5WYWx1ZSwgeCk7XG4gICAgdGhpcy5wcm9wcy5vblNsaWRlcjFDaGFuZ2UoY2xhbXAoW3ZhbHVlMCwgbWF4VmFsdWVdLCB2YWwpKTtcbiAgfTtcblxuICBzbGlkZXJCYXJMaXN0ZW5lciA9ICh4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB7dmFsdWUwLCB2YWx1ZTEsIG1pblZhbHVlLCBtYXhWYWx1ZX0gPSB0aGlzLnByb3BzO1xuICAgIC8vIGZvciBzbGlkZXIgYmFyLCB3ZSB1c2UgZGlzdGFuY2UgZGVsdGFcbiAgICBjb25zdCBhbmNob3IgPSB0aGlzLmFuY2hvcjtcbiAgICBjb25zdCBsZW5ndGggPSB2YWx1ZTEgLSB2YWx1ZTA7IC8vIHRoZSBsZW5ndGggb2YgdGhlIHNlbGVjdGVkIHJhbmdlIHNob3VsZG4ndCBjaGFuZ2Ugd2hlbiBjbGFtcGluZ1xuICAgIGNvbnN0IHZhbDAgPSBjbGFtcChbbWluVmFsdWUsIG1heFZhbHVlIC0gbGVuZ3RoXSwgdGhpcy5nZXRWYWx1ZSh2YWx1ZTAsIHggLSBhbmNob3IpKTtcbiAgICBjb25zdCB2YWwxID0gY2xhbXAoW3ZhbDAgKyBsZW5ndGgsIG1heFZhbHVlXSwgdGhpcy5nZXRWYWx1ZSh2YWx1ZTEsIHggLSBhbmNob3IpKTtcblxuICAgIGNvbnN0IGRlbHRhWCA9IHRoaXMuZ2V0RGVsdGFYKHZhbDAgLSB0aGlzLnByb3BzLnZhbHVlMCk7XG4gICAgdGhpcy5wcm9wcy5vblNsaWRlckJhckNoYW5nZSh2YWwwLCB2YWwxKTtcbiAgICAvLyB1cGRhdGUgYW5jaG9yXG4gICAgdGhpcy5hbmNob3IgPSB0aGlzLmFuY2hvciArIGRlbHRhWDtcbiAgfTtcblxuICBjYWxjSGFuZGxlTGVmdDAgPSAodzogbnVtYmVyLCBsOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gdyA9PT0gMFxuICAgICAgPyBgY2FsYygke2x9JSAtICR7dGhpcy5wcm9wcy5zbGlkZXJIYW5kbGVXaWR0aCAvIDJ9cHgpYFxuICAgICAgOiBgY2FsYygke2x9JSAtICR7dGhpcy5wcm9wcy5zbGlkZXJIYW5kbGVXaWR0aCAvIDJ9cHgpYDtcbiAgfTtcblxuICBjYWxjSGFuZGxlTGVmdDEgPSAodzogbnVtYmVyLCBsOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5pc1JhbmdlZCAmJiB3ID09PSAwXG4gICAgICA/IGAke2x9JWBcbiAgICAgIDogYGNhbGMoJHtsICsgd30lIC0gJHt0aGlzLnByb3BzLnNsaWRlckhhbmRsZVdpZHRoIC8gMn1weClgO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc05hbWUsXG4gICAgICBjbGFzc1NldCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaXNSYW5nZWQsXG4gICAgICBtYXhWYWx1ZSxcbiAgICAgIG1pblZhbHVlLFxuICAgICAgdmFsdWUxLFxuICAgICAgdmVydGljYWwsXG4gICAgICBzbGlkZXJIYW5kbGVXaWR0aCxcbiAgICAgIHNob3dUb29sdGlwLFxuICAgICAgc3R5bGVcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB2YWx1ZTAgPSAhaXNSYW5nZWQgJiYgbWluVmFsdWUgPiAwID8gbWluVmFsdWUgOiB0aGlzLnByb3BzLnZhbHVlMDtcbiAgICBjb25zdCBjdXJyVmFsRGVsdGEgPSB2YWx1ZTEgLSB2YWx1ZTA7XG4gICAgY29uc3QgbWF4RGVsdGEgPSBtYXhWYWx1ZSAtIG1pblZhbHVlO1xuICAgIGNvbnN0IHdpZHRoID0gKGN1cnJWYWxEZWx0YSAvIG1heERlbHRhKSAqIDEwMDtcblxuICAgIGNvbnN0IHYwTGVmdCA9ICgodmFsdWUwIC0gbWluVmFsdWUpIC8gbWF4RGVsdGEpICogMTAwO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTbGlkZXJXcmFwcGVyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygna2ctc2xpZGVyJywgey4uLmNsYXNzU2V0LCBkaXNhYmxlZH0sIGNsYXNzTmFtZSl9XG4gICAgICAgIHJlZj17dGhpcy5yZWZ9XG4gICAgICAgIGlzUmFuZ2VkPXtpc1JhbmdlZH1cbiAgICAgICAgdmVydGljYWw9e3ZlcnRpY2FsfVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICA+XG4gICAgICAgIDxTdHlsZWRSYW5nZVNsaWRlciBjbGFzc05hbWU9XCJrZy1yYW5nZS1zbGlkZXJcIiB2ZXJ0aWNhbD17dmVydGljYWx9IHJlZj17dGhpcy50cmFja30+XG4gICAgICAgICAgPFNsaWRlckhhbmRsZVxuICAgICAgICAgICAgbGVmdD17dGhpcy5jYWxjSGFuZGxlTGVmdDAod2lkdGgsIHYwTGVmdCl9XG4gICAgICAgICAgICB2YWx1ZUxpc3RlbmVyPXt0aGlzLnNsaWRlMExpc3RlbmVyfVxuICAgICAgICAgICAgc2xpZGVySGFuZGxlV2lkdGg9e3NsaWRlckhhbmRsZVdpZHRofVxuICAgICAgICAgICAgZGlzcGxheT17aXNSYW5nZWR9XG4gICAgICAgICAgICB2ZXJ0aWNhbD17dmVydGljYWx9XG4gICAgICAgICAgICBzaG93VG9vbHRpcD17c2hvd1Rvb2x0aXB9XG4gICAgICAgICAgICB0cmFjaz17dGhpcy50cmFja31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTbGlkZXJIYW5kbGVcbiAgICAgICAgICAgIGxlZnQ9e3RoaXMuY2FsY0hhbmRsZUxlZnQxKHdpZHRoLCB2MExlZnQpfVxuICAgICAgICAgICAgdmFsdWVMaXN0ZW5lcj17dGhpcy5zbGlkZTFMaXN0ZW5lcn1cbiAgICAgICAgICAgIHNsaWRlckhhbmRsZVdpZHRoPXtzbGlkZXJIYW5kbGVXaWR0aH1cbiAgICAgICAgICAgIHZlcnRpY2FsPXt2ZXJ0aWNhbH1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZTF9XG4gICAgICAgICAgICBzaG93VG9vbHRpcD17c2hvd1Rvb2x0aXB9XG4gICAgICAgICAgICB0cmFjaz17dGhpcy50cmFja31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxTbGlkZXJCYXJIYW5kbGVcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIHYwTGVmdD17djBMZWZ0fVxuICAgICAgICAgICAgZW5hYmxlQmFyRHJhZz17dGhpcy5wcm9wcy5lbmFibGVCYXJEcmFnfVxuICAgICAgICAgICAgc2xpZGVyQmFyTGlzdGVuZXI9e3RoaXMuc2xpZGVyQmFyTGlzdGVuZXJ9XG4gICAgICAgICAgICB2ZXJ0aWNhbD17dmVydGljYWx9XG4gICAgICAgICAgICB0cmFjaz17dGhpcy50cmFja31cbiAgICAgICAgICAgIHNldEFuY2hvcj17dGhpcy5zZXRBbmNob3J9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdHlsZWRSYW5nZVNsaWRlcj5cbiAgICAgIDwvU2xpZGVyV3JhcHBlcj5cbiAgICApO1xuICB9XG59XG4iXX0=