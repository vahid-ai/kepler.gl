"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RangeSliderFactory;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _reselect = require("reselect");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _rangePlot = _interopRequireDefault(require("./range-plot"));

var _slider = _interopRequireDefault(require("./slider/slider"));

var _styledComponents2 = require("./styled-components");

var _utils = require("@kepler.gl/utils");

var _templateObject, _templateObject2, _templateObject3;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var SliderInput = (0, _styledComponents["default"])(_styledComponents2.Input)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", "px;\n  margin-left: ", "px;\n  font-size: ", "; // 10px // 12px;\n  padding: ", "; // 4px 6px; // 6px 12px;\n"])), function (props) {
  return props.theme.sliderInputWidth;
}, function (props) {
  return props.flush ? 0 : props.inputSize === 'tiny' ? 12 : 18;
}, function (props) {
  return props.theme.sliderInputFontSize;
}, function (props) {
  return props.theme.sliderInputPadding;
});

var SliderWrapper = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  position: relative;\n  align-items: ", ";\n"])), function (props) {
  return !props.isRanged && props.showInput ? 'center' : 'flex-start';
});

var RangeInputWrapper = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 12px;\n  display: flex;\n  justify-content: space-between;\n"])));

RangeSliderFactory.deps = [_rangePlot["default"]];

function RangeSliderFactory(RangePlot) {
  var RangeSlider = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(RangeSlider, _Component);

    var _super = _createSuper(RangeSlider);

    function RangeSlider() {
      var _this;

      (0, _classCallCheck2["default"])(this, RangeSlider);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        value0: 0,
        value1: 1,
        prevValue0: 0,
        prevValue1: 1,
        width: 288
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "sliderContainer", null);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setSliderContainer", function (element) {
        _this.sliderContainer = element;

        _this._resize();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputValue0", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputValue1", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "value0Selector", function (props) {
        return props.value0;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "value1Selector", function (props) {
        return props.value1;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filterValueSelector", (0, _reselect.createSelector)(_this.value0Selector, _this.value1Selector, function (value0, value1) {
        return [value0, value1];
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_roundValToStep", function (val) {
        var _this$props = _this.props,
            range = _this$props.range,
            step = _this$props.step;
        if (!range || !step) return;
        return (0, _utils.roundValToStep)(range[0], step, val);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setRangeVal1", function (val) {
        var _this$props2 = _this.props,
            value0 = _this$props2.value0,
            range = _this$props2.range,
            _this$props2$onChange = _this$props2.onChange,
            onChange = _this$props2$onChange === void 0 ? function () {} : _this$props2$onChange;
        if (!range) return;
        var val1 = Number(val);
        onChange([value0, (0, _utils.clamp)([value0, range[1]], _this._roundValToStep(val1))]);
        return true;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setRangeVal0", function (val) {
        var _this$props3 = _this.props,
            value1 = _this$props3.value1,
            range = _this$props3.range,
            _this$props3$onChange = _this$props3.onChange,
            onChange = _this$props3$onChange === void 0 ? function () {} : _this$props3$onChange;
        if (!range) return;
        var val0 = Number(val);
        onChange([(0, _utils.clamp)([range[0], value1], _this._roundValToStep(val0)), value1]);
        return true;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_resize", function () {
        if (_this.sliderContainer) {
          var width = _this.sliderContainer.offsetWidth;

          if (width !== _this.state.width) {
            _this.setState({
              width: width
            });
          }
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onChangeInput", function (key, e) {
        _this.setState((0, _defineProperty2["default"])({}, key, e.target.value));
      });
      return _this;
    }

    (0, _createClass2["default"])(RangeSlider, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.sliderContainer instanceof Element) {
          (0, _utils.observeDimensions)(this.sliderContainer, this._resize, 100);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.sliderContainer instanceof Element) {
          (0, _utils.unobserveDimensions)(this.sliderContainer);
        }
      }
    }, {
      key: "_renderInput",
      value: function _renderInput(key) {
        var _this2 = this;

        var setRange = key === 'value0' ? this._setRangeVal0 : this._setRangeVal1;
        var ref = key === 'value0' ? this.inputValue0 : this.inputValue1;

        var update = function update(e) {
          if (!setRange(e.target.value)) {
            _this2.setState((0, _defineProperty2["default"])({}, key, _this2.state[key]));
          }
        };

        var onChange = this._onChangeInput.bind(this, key);

        return /*#__PURE__*/_react["default"].createElement(SliderInput, {
          className: "kg-range-slider__input",
          type: "number",
          ref: ref,
          id: "slider-input-".concat(key),
          key: key,
          value: this.state[key],
          onChange: onChange,
          onKeyPress: function onKeyPress(e) {
            if (e.key === 'Enter') {
              update(e);
              ref.current.blur();
            }
          },
          onBlur: update,
          flush: key === 'value0',
          inputSize: this.props.inputSize,
          secondary: this.props.inputTheme === 'secondary'
        });
      } // eslint-disable-next-line complexity

    }, {
      key: "render",
      value: function render() {
        var _this$props4 = this.props,
            isRanged = _this$props4.isRanged,
            showInput = _this$props4.showInput,
            histogram = _this$props4.histogram,
            lineChart = _this$props4.lineChart,
            range = _this$props4.range,
            _this$props4$onChange = _this$props4.onChange,
            onChange = _this$props4$onChange === void 0 ? function () {} : _this$props4$onChange,
            sliderHandleWidth = _this$props4.sliderHandleWidth,
            step = _this$props4.step,
            timezone = _this$props4.timezone,
            timeFormat = _this$props4.timeFormat,
            playbackControlWidth = _this$props4.playbackControlWidth;
        var width = this.state.width;
        var plotWidth = Math.max(width - Number(sliderHandleWidth), 0);
        var renderPlot = histogram && histogram.length || lineChart;
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "kg-range-slider",
          style: {
            width: '100%',
            padding: "0 ".concat(Number(sliderHandleWidth) / 2, "px")
          },
          ref: this.setSliderContainer
        }, Array.isArray(range) && range.every(Number.isFinite) && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, renderPlot ? /*#__PURE__*/_react["default"].createElement(RangePlot, {
          histogram: histogram,
          lineChart: this.props.lineChart,
          plotType: this.props.plotType,
          isEnlarged: this.props.isEnlarged,
          onBrush: function onBrush(val0, val1) {
            return onChange([val0, val1]);
          },
          marks: this.props.marks,
          range: range,
          value: this.props.plotValue || this.filterValueSelector(this.props),
          width: plotWidth,
          isRanged: isRanged,
          step: step,
          timezone: timezone,
          timeFormat: timeFormat,
          playbackControlWidth: playbackControlWidth
        }) : null, /*#__PURE__*/_react["default"].createElement(SliderWrapper, {
          className: "kg-range-slider__slider",
          isRanged: isRanged,
          showInput: showInput
        }, this.props.xAxis ? /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            height: '30px'
          }
        }, /*#__PURE__*/_react["default"].createElement(this.props.xAxis, {
          width: plotWidth,
          timezone: timezone,
          domain: range,
          isEnlarged: this.props.isEnlarged
        })) : null, /*#__PURE__*/_react["default"].createElement(_slider["default"], {
          marks: this.props.marks,
          isRanged: isRanged,
          minValue: range[0],
          maxValue: range[1],
          value0: this.props.value0,
          value1: this.props.value1,
          step: step,
          sliderHandleWidth: sliderHandleWidth,
          onSlider0Change: this._setRangeVal0,
          onSlider1Change: this._setRangeVal1,
          onSliderBarChange: function onSliderBarChange(val0, val1) {
            onChange([val0, val1]);
          },
          enableBarDrag: true
        }), !isRanged && showInput ? this._renderInput('value1') : null), isRanged && showInput ? /*#__PURE__*/_react["default"].createElement(RangeInputWrapper, {
          className: "range-slider__input-group"
        }, this._renderInput('value0'), this._renderInput('value1')) : null));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        var update = null;
        var value0 = props.value0,
            value1 = props.value1;

        if (props.value0 !== state.prevValue0 && !isNaN(value0)) {
          update = _objectSpread(_objectSpread({}, update || {}), {}, {
            value0: value0,
            prevValue0: value0
          });
        }

        if (props.value1 !== state.prevValue1 && !isNaN(value1)) {
          update = _objectSpread(_objectSpread({}, update || {}), {}, {
            value1: value1,
            prevValue1: value1
          });
        }

        return update;
      }
    }]);
    return RangeSlider;
  }(_react.Component);

  (0, _defineProperty2["default"])(RangeSlider, "defaultProps", {
    isEnlarged: false,
    isRanged: true,
    showInput: true,
    sliderHandleWidth: 12,
    inputTheme: '',
    inputSize: 'small',
    onChange: function onChange() {}
  });
  (0, _reactLifecyclesCompat.polyfill)(RangeSlider);
  return RangeSlider;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vcmFuZ2Utc2xpZGVyLnRzeCJdLCJuYW1lcyI6WyJTbGlkZXJJbnB1dCIsIklucHV0IiwicHJvcHMiLCJ0aGVtZSIsInNsaWRlcklucHV0V2lkdGgiLCJmbHVzaCIsImlucHV0U2l6ZSIsInNsaWRlcklucHV0Rm9udFNpemUiLCJzbGlkZXJJbnB1dFBhZGRpbmciLCJTbGlkZXJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiaXNSYW5nZWQiLCJzaG93SW5wdXQiLCJSYW5nZUlucHV0V3JhcHBlciIsIlJhbmdlU2xpZGVyRmFjdG9yeSIsImRlcHMiLCJSYW5nZVBsb3RGYWN0b3J5IiwiUmFuZ2VQbG90IiwiUmFuZ2VTbGlkZXIiLCJ2YWx1ZTAiLCJ2YWx1ZTEiLCJwcmV2VmFsdWUwIiwicHJldlZhbHVlMSIsIndpZHRoIiwiZWxlbWVudCIsInNsaWRlckNvbnRhaW5lciIsIl9yZXNpemUiLCJ2YWx1ZTBTZWxlY3RvciIsInZhbHVlMVNlbGVjdG9yIiwidmFsIiwicmFuZ2UiLCJzdGVwIiwib25DaGFuZ2UiLCJ2YWwxIiwiTnVtYmVyIiwiX3JvdW5kVmFsVG9TdGVwIiwidmFsMCIsIm9mZnNldFdpZHRoIiwic3RhdGUiLCJzZXRTdGF0ZSIsImtleSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkVsZW1lbnQiLCJzZXRSYW5nZSIsIl9zZXRSYW5nZVZhbDAiLCJfc2V0UmFuZ2VWYWwxIiwicmVmIiwiaW5wdXRWYWx1ZTAiLCJpbnB1dFZhbHVlMSIsInVwZGF0ZSIsIl9vbkNoYW5nZUlucHV0IiwiYmluZCIsImN1cnJlbnQiLCJibHVyIiwiaW5wdXRUaGVtZSIsImhpc3RvZ3JhbSIsImxpbmVDaGFydCIsInNsaWRlckhhbmRsZVdpZHRoIiwidGltZXpvbmUiLCJ0aW1lRm9ybWF0IiwicGxheWJhY2tDb250cm9sV2lkdGgiLCJwbG90V2lkdGgiLCJNYXRoIiwibWF4IiwicmVuZGVyUGxvdCIsImxlbmd0aCIsInBhZGRpbmciLCJzZXRTbGlkZXJDb250YWluZXIiLCJBcnJheSIsImlzQXJyYXkiLCJldmVyeSIsImlzRmluaXRlIiwicGxvdFR5cGUiLCJpc0VubGFyZ2VkIiwibWFya3MiLCJwbG90VmFsdWUiLCJmaWx0ZXJWYWx1ZVNlbGVjdG9yIiwieEF4aXMiLCJoZWlnaHQiLCJfcmVuZGVySW5wdXQiLCJpc05hTiIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFRQSxJQUFNQSxXQUFXLEdBQUcsa0NBQU9DLHdCQUFQLENBQUgsbU5BQ04sVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxnQkFBaEI7QUFBQSxDQURDLEVBRUEsVUFBQUYsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0csS0FBTixHQUFjLENBQWQsR0FBa0JILEtBQUssQ0FBQ0ksU0FBTixLQUFvQixNQUFwQixHQUE2QixFQUE3QixHQUFrQyxFQUF6RDtBQUFBLENBRkwsRUFHRixVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlJLG1CQUFoQjtBQUFBLENBSEgsRUFJSixVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlLLGtCQUFoQjtBQUFBLENBSkQsQ0FBakI7O0FBWUEsSUFBTUMsYUFBYSxHQUFHQyw2QkFBT0MsR0FBViwwSkFHRixVQUFBVCxLQUFLO0FBQUEsU0FBSyxDQUFDQSxLQUFLLENBQUNVLFFBQVAsSUFBbUJWLEtBQUssQ0FBQ1csU0FBekIsR0FBcUMsUUFBckMsR0FBZ0QsWUFBckQ7QUFBQSxDQUhILENBQW5COztBQU1BLElBQU1DLGlCQUFpQixHQUFHSiw2QkFBT0MsR0FBVixvS0FBdkI7O0FBNkJBSSxrQkFBa0IsQ0FBQ0MsSUFBbkIsR0FBMEIsQ0FBQ0MscUJBQUQsQ0FBMUI7O0FBRWUs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QS9DLEVBQXlEO0FBQ3ZEZ0MsVUFBQUEsTUFBTSxtQ0FBUUEsTUFBTSxJQUFJLEVBQWxCO0FBQXVCaEMsWUFBQUEsTUFBTSxFQUFOQSxNQUF2QjtBQUErQkUsWUFBQUEsVUFBVSxFQUFFRjtBQUEzQyxZQUFOO0FBQ0Q7O0FBQ0QsWUFBSWxCLEtBQUssQ0FBQ21CLE1BQU4sS0FBaUJrQixLQUFLLENBQUNoQixVQUF2QixJQUFxQyxDQUFDNEQsS0FBSyxDQUFDOUQsTUFBRCxDQUEvQyxFQUF5RDtBQUN2RCtCLFVBQUFBLE1BQU0sbUNBQVFBLE1BQU0sSUFBSSxFQUFsQjtBQUF1Qi9CLFlBQUFBLE1BQU0sRUFBTkEsTUFBdkI7QUFBK0JFLFlBQUFBLFVBQVUsRUFBRUY7QUFBM0MsWUFBTjtBQUNEOztBQUNELGVBQU8rQixNQUFQO0FBQ0Q7QUF0QjhCO0FBQUE7QUFBQSxJQUNQZ0MsZ0JBRE87O0FBQUEsbUNBQzNCakUsV0FEMkIsa0JBRVQ7QUFDcEJ5RCxJQUFBQSxVQUFVLEVBQUUsS0FEUTtBQUVwQmhFLElBQUFBLFFBQVEsRUFBRSxJQUZVO0FBR3BCQyxJQUFBQSxTQUFTLEVBQUUsSUFIUztBQUlwQitDLElBQUFBLGlCQUFpQixFQUFFLEVBSkM7QUFLcEJILElBQUFBLFVBQVUsRUFBRSxFQUxRO0FBTXBCbkQsSUFBQUEsU0FBUyxFQUFFLE9BTlM7QUFPcEIyQixJQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRTtBQVBFLEdBRlM7QUE0TmpDLHVDQUFTZCxXQUFUO0FBRUEsU0FBT0EsV0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBDb21wb25lbnRUeXBlLCBjcmVhdGVSZWYsIEVsZW1lbnRUeXBlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3BvbHlmaWxsfSBmcm9tICdyZWFjdC1saWZlY3ljbGVzLWNvbXBhdCc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSYW5nZVBsb3RGYWN0b3J5IGZyb20gJy4vcmFuZ2UtcGxvdCc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJy4vc2xpZGVyL3NsaWRlcic7XG5pbXBvcnQge0lucHV0fSBmcm9tICcuL3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHtvYnNlcnZlRGltZW5zaW9ucywgdW5vYnNlcnZlRGltZW5zaW9ucywgcm91bmRWYWxUb1N0ZXAsIGNsYW1wfSBmcm9tICdAa2VwbGVyLmdsL3V0aWxzJztcbmltcG9ydCB7TGluZUNoYXJ0fSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcblxuaW50ZXJmYWNlIFNsaWRlcklucHV0UHJvcHMge1xuICBmbHVzaD86IGJvb2xlYW47XG4gIGlucHV0U2l6ZT86IHN0cmluZztcbn1cblxuY29uc3QgU2xpZGVySW5wdXQgPSBzdHlsZWQoSW5wdXQpPFNsaWRlcklucHV0UHJvcHM+YFxuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJJbnB1dFdpZHRofXB4O1xuICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PiAocHJvcHMuZmx1c2ggPyAwIDogcHJvcHMuaW5wdXRTaXplID09PSAndGlueScgPyAxMiA6IDE4KX1weDtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNsaWRlcklucHV0Rm9udFNpemV9OyAvLyAxMHB4IC8vIDEycHg7XG4gIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2xpZGVySW5wdXRQYWRkaW5nfTsgLy8gNHB4IDZweDsgLy8gNnB4IDEycHg7XG5gO1xuXG5pbnRlcmZhY2UgU2xpZGVyV3JhcHBlclByb3BzIHtcbiAgaXNSYW5nZWQ/OiBib29sZWFuO1xuICBzaG93SW5wdXQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBTbGlkZXJXcmFwcGVyID0gc3R5bGVkLmRpdjxTbGlkZXJXcmFwcGVyUHJvcHM+YFxuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWl0ZW1zOiAke3Byb3BzID0+ICghcHJvcHMuaXNSYW5nZWQgJiYgcHJvcHMuc2hvd0lucHV0ID8gJ2NlbnRlcicgOiAnZmxleC1zdGFydCcpfTtcbmA7XG5cbmNvbnN0IFJhbmdlSW5wdXRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuaW50ZXJmYWNlIFJhbmdlU2xpZGVyUHJvcHMge1xuICByYW5nZT86IG51bWJlcltdO1xuICB2YWx1ZTA6IG51bWJlcjtcbiAgdmFsdWUxOiBudW1iZXI7XG4gIG9uQ2hhbmdlPzogKHZhbDogbnVtYmVyW10pID0+IHZvaWQ7IC8vIFRPRE9cbiAgaGlzdG9ncmFtPzogYW55W107XG4gIGlzUmFuZ2VkPzogYm9vbGVhbjtcbiAgaXNFbmxhcmdlZD86IGJvb2xlYW47XG4gIHNob3dJbnB1dD86IGJvb2xlYW47XG4gIGlucHV0VGhlbWU/OiBzdHJpbmc7XG4gIGlucHV0U2l6ZT86IHN0cmluZztcbiAgc3RlcD86IG51bWJlcjtcbiAgc2xpZGVySGFuZGxlV2lkdGg/OiBudW1iZXI7XG4gIHhBeGlzPzogRWxlbWVudFR5cGU7XG4gIHRpbWV6b25lPzogc3RyaW5nIHwgbnVsbDtcbiAgdGltZUZvcm1hdD86IHN0cmluZztcbiAgcGxheWJhY2tDb250cm9sV2lkdGg/OiBudW1iZXI7XG4gIGxpbmVDaGFydD86IExpbmVDaGFydDtcbiAgbWFya3M/OiBudW1iZXJbXTtcbiAgcGxvdFR5cGU/OiBzdHJpbmc7XG4gIHBsb3RWYWx1ZT86IG51bWJlcltdO1xufVxuXG5SYW5nZVNsaWRlckZhY3RvcnkuZGVwcyA9IFtSYW5nZVBsb3RGYWN0b3J5XTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmFuZ2VTbGlkZXJGYWN0b3J5KFxuICBSYW5nZVBsb3Q6IFJldHVyblR5cGU8dHlwZW9mIFJhbmdlUGxvdEZhY3Rvcnk+XG4pOiBDb21wb25lbnRUeXBlPFJhbmdlU2xpZGVyUHJvcHM+IHtcbiAgY2xhc3MgUmFuZ2VTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQ8UmFuZ2VTbGlkZXJQcm9wcz4ge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICBpc0VubGFyZ2VkOiBmYWxzZSxcbiAgICAgIGlzUmFuZ2VkOiB0cnVlLFxuICAgICAgc2hvd0lucHV0OiB0cnVlLFxuICAgICAgc2xpZGVySGFuZGxlV2lkdGg6IDEyLFxuICAgICAgaW5wdXRUaGVtZTogJycsXG4gICAgICBpbnB1dFNpemU6ICdzbWFsbCcsXG4gICAgICBvbkNoYW5nZTogKCkgPT4ge31cbiAgICB9O1xuXG4gICAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICAgIGxldCB1cGRhdGU6IHt2YWx1ZTE/OiBhbnk7IHByZXZWYWx1ZTE/OiBhbnk7IHZhbHVlMD86IGFueTsgcHJldlZhbHVlMD86IGFueX0gfCBudWxsID0gbnVsbDtcbiAgICAgIGNvbnN0IHt2YWx1ZTAsIHZhbHVlMX0gPSBwcm9wcztcbiAgICAgIGlmIChwcm9wcy52YWx1ZTAgIT09IHN0YXRlLnByZXZWYWx1ZTAgJiYgIWlzTmFOKHZhbHVlMCkpIHtcbiAgICAgICAgdXBkYXRlID0gey4uLih1cGRhdGUgfHwge30pLCB2YWx1ZTAsIHByZXZWYWx1ZTA6IHZhbHVlMH07XG4gICAgICB9XG4gICAgICBpZiAocHJvcHMudmFsdWUxICE9PSBzdGF0ZS5wcmV2VmFsdWUxICYmICFpc05hTih2YWx1ZTEpKSB7XG4gICAgICAgIHVwZGF0ZSA9IHsuLi4odXBkYXRlIHx8IHt9KSwgdmFsdWUxLCBwcmV2VmFsdWUxOiB2YWx1ZTF9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVwZGF0ZTtcbiAgICB9XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgIHZhbHVlMDogMCxcbiAgICAgIHZhbHVlMTogMSxcbiAgICAgIHByZXZWYWx1ZTA6IDAsXG4gICAgICBwcmV2VmFsdWUxOiAxLFxuICAgICAgd2lkdGg6IDI4OFxuICAgIH07XG5cbiAgICBzbGlkZXJDb250YWluZXI6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnNsaWRlckNvbnRhaW5lciBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgb2JzZXJ2ZURpbWVuc2lvbnModGhpcy5zbGlkZXJDb250YWluZXIsIHRoaXMuX3Jlc2l6ZSwgMTAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnNsaWRlckNvbnRhaW5lciBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlRGltZW5zaW9ucyh0aGlzLnNsaWRlckNvbnRhaW5lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0U2xpZGVyQ29udGFpbmVyOiBSZWFjdC5MZWdhY3lSZWY8SFRNTERpdkVsZW1lbnQ+ID0gZWxlbWVudCA9PiB7XG4gICAgICB0aGlzLnNsaWRlckNvbnRhaW5lciA9IGVsZW1lbnQ7XG4gICAgICB0aGlzLl9yZXNpemUoKTtcbiAgICB9O1xuICAgIGlucHV0VmFsdWUwID0gY3JlYXRlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KCk7XG4gICAgaW5wdXRWYWx1ZTEgPSBjcmVhdGVSZWY8SFRNTElucHV0RWxlbWVudD4oKTtcbiAgICB2YWx1ZTBTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLnZhbHVlMDtcbiAgICB2YWx1ZTFTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLnZhbHVlMTtcbiAgICBmaWx0ZXJWYWx1ZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICB0aGlzLnZhbHVlMFNlbGVjdG9yLFxuICAgICAgdGhpcy52YWx1ZTFTZWxlY3RvcixcbiAgICAgICh2YWx1ZTAsIHZhbHVlMSkgPT4gW3ZhbHVlMCwgdmFsdWUxXVxuICAgICk7XG5cbiAgICBfcm91bmRWYWxUb1N0ZXAgPSB2YWwgPT4ge1xuICAgICAgY29uc3Qge3JhbmdlLCBzdGVwfSA9IHRoaXMucHJvcHM7XG4gICAgICBpZiAoIXJhbmdlIHx8ICFzdGVwKSByZXR1cm47XG4gICAgICByZXR1cm4gcm91bmRWYWxUb1N0ZXAocmFuZ2VbMF0sIHN0ZXAsIHZhbCk7XG4gICAgfTtcblxuICAgIF9zZXRSYW5nZVZhbDEgPSB2YWwgPT4ge1xuICAgICAgY29uc3Qge3ZhbHVlMCwgcmFuZ2UsIG9uQ2hhbmdlID0gKCkgPT4ge319ID0gdGhpcy5wcm9wcztcbiAgICAgIGlmICghcmFuZ2UpIHJldHVybjtcbiAgICAgIGNvbnN0IHZhbDEgPSBOdW1iZXIodmFsKTtcbiAgICAgIG9uQ2hhbmdlKFt2YWx1ZTAsIGNsYW1wKFt2YWx1ZTAsIHJhbmdlWzFdXSwgdGhpcy5fcm91bmRWYWxUb1N0ZXAodmFsMSkpXSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgX3NldFJhbmdlVmFsMCA9IHZhbCA9PiB7XG4gICAgICBjb25zdCB7dmFsdWUxLCByYW5nZSwgb25DaGFuZ2UgPSAoKSA9PiB7fX0gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKCFyYW5nZSkgcmV0dXJuO1xuICAgICAgY29uc3QgdmFsMCA9IE51bWJlcih2YWwpO1xuICAgICAgb25DaGFuZ2UoW2NsYW1wKFtyYW5nZVswXSwgdmFsdWUxXSwgdGhpcy5fcm91bmRWYWxUb1N0ZXAodmFsMCkpLCB2YWx1ZTFdKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBfcmVzaXplID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuc2xpZGVyQ29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5zbGlkZXJDb250YWluZXIub2Zmc2V0V2lkdGg7XG4gICAgICAgIGlmICh3aWR0aCAhPT0gdGhpcy5zdGF0ZS53aWR0aCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpZHRofSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX29uQ2hhbmdlSW5wdXQgPSAoa2V5LCBlKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtba2V5XTogZS50YXJnZXQudmFsdWV9KTtcbiAgICB9O1xuXG4gICAgX3JlbmRlcklucHV0KGtleSkge1xuICAgICAgY29uc3Qgc2V0UmFuZ2UgPSBrZXkgPT09ICd2YWx1ZTAnID8gdGhpcy5fc2V0UmFuZ2VWYWwwIDogdGhpcy5fc2V0UmFuZ2VWYWwxO1xuICAgICAgY29uc3QgcmVmID0ga2V5ID09PSAndmFsdWUwJyA/IHRoaXMuaW5wdXRWYWx1ZTAgOiB0aGlzLmlucHV0VmFsdWUxO1xuICAgICAgY29uc3QgdXBkYXRlID0gZSA9PiB7XG4gICAgICAgIGlmICghc2V0UmFuZ2UoZS50YXJnZXQudmFsdWUpKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7W2tleV06IHRoaXMuc3RhdGVba2V5XX0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBvbkNoYW5nZSA9IHRoaXMuX29uQ2hhbmdlSW5wdXQuYmluZCh0aGlzLCBrZXkpO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U2xpZGVySW5wdXRcbiAgICAgICAgICBjbGFzc05hbWU9XCJrZy1yYW5nZS1zbGlkZXJfX2lucHV0XCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICBpZD17YHNsaWRlci1pbnB1dC0ke2tleX1gfVxuICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlW2tleV19XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIG9uS2V5UHJlc3M9e2UgPT4ge1xuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgIHVwZGF0ZShlKTtcbiAgICAgICAgICAgICAgKHJlZi5jdXJyZW50IGFzIGFueSkuYmx1cigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgICAgb25CbHVyPXt1cGRhdGV9XG4gICAgICAgICAgZmx1c2g9e2tleSA9PT0gJ3ZhbHVlMCd9XG4gICAgICAgICAgaW5wdXRTaXplPXt0aGlzLnByb3BzLmlucHV0U2l6ZX1cbiAgICAgICAgICBzZWNvbmRhcnk9e3RoaXMucHJvcHMuaW5wdXRUaGVtZSA9PT0gJ3NlY29uZGFyeSd9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBpc1JhbmdlZCxcbiAgICAgICAgc2hvd0lucHV0LFxuICAgICAgICBoaXN0b2dyYW0sXG4gICAgICAgIGxpbmVDaGFydCxcbiAgICAgICAgcmFuZ2UsXG4gICAgICAgIG9uQ2hhbmdlID0gKCkgPT4ge30sXG4gICAgICAgIHNsaWRlckhhbmRsZVdpZHRoLFxuICAgICAgICBzdGVwLFxuICAgICAgICB0aW1lem9uZSxcbiAgICAgICAgdGltZUZvcm1hdCxcbiAgICAgICAgcGxheWJhY2tDb250cm9sV2lkdGhcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBjb25zdCB7d2lkdGh9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IHBsb3RXaWR0aCA9IE1hdGgubWF4KHdpZHRoIC0gTnVtYmVyKHNsaWRlckhhbmRsZVdpZHRoKSwgMCk7XG4gICAgICBjb25zdCByZW5kZXJQbG90ID0gKGhpc3RvZ3JhbSAmJiBoaXN0b2dyYW0ubGVuZ3RoKSB8fCBsaW5lQ2hhcnQ7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwia2ctcmFuZ2Utc2xpZGVyXCJcbiAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnMTAwJScsIHBhZGRpbmc6IGAwICR7TnVtYmVyKHNsaWRlckhhbmRsZVdpZHRoKSAvIDJ9cHhgfX1cbiAgICAgICAgICByZWY9e3RoaXMuc2V0U2xpZGVyQ29udGFpbmVyfVxuICAgICAgICA+XG4gICAgICAgICAge0FycmF5LmlzQXJyYXkocmFuZ2UpICYmIHJhbmdlLmV2ZXJ5KE51bWJlci5pc0Zpbml0ZSkgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAge3JlbmRlclBsb3QgPyAoXG4gICAgICAgICAgICAgICAgPFJhbmdlUGxvdFxuICAgICAgICAgICAgICAgICAgaGlzdG9ncmFtPXtoaXN0b2dyYW19XG4gICAgICAgICAgICAgICAgICBsaW5lQ2hhcnQ9e3RoaXMucHJvcHMubGluZUNoYXJ0fVxuICAgICAgICAgICAgICAgICAgcGxvdFR5cGU9e3RoaXMucHJvcHMucGxvdFR5cGV9XG4gICAgICAgICAgICAgICAgICBpc0VubGFyZ2VkPXt0aGlzLnByb3BzLmlzRW5sYXJnZWR9XG4gICAgICAgICAgICAgICAgICBvbkJydXNoPXsodmFsMCwgdmFsMSkgPT4gb25DaGFuZ2UoW3ZhbDAsIHZhbDFdKX1cbiAgICAgICAgICAgICAgICAgIG1hcmtzPXt0aGlzLnByb3BzLm1hcmtzfVxuICAgICAgICAgICAgICAgICAgcmFuZ2U9e3JhbmdlfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMucGxvdFZhbHVlIHx8IHRoaXMuZmlsdGVyVmFsdWVTZWxlY3Rvcih0aGlzLnByb3BzKX1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXtwbG90V2lkdGh9XG4gICAgICAgICAgICAgICAgICBpc1JhbmdlZD17aXNSYW5nZWR9XG4gICAgICAgICAgICAgICAgICBzdGVwPXtzdGVwfVxuICAgICAgICAgICAgICAgICAgdGltZXpvbmU9e3RpbWV6b25lfVxuICAgICAgICAgICAgICAgICAgdGltZUZvcm1hdD17dGltZUZvcm1hdH1cbiAgICAgICAgICAgICAgICAgIHBsYXliYWNrQ29udHJvbFdpZHRoPXtwbGF5YmFja0NvbnRyb2xXaWR0aH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPFNsaWRlcldyYXBwZXJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrZy1yYW5nZS1zbGlkZXJfX3NsaWRlclwiXG4gICAgICAgICAgICAgICAgaXNSYW5nZWQ9e2lzUmFuZ2VkfVxuICAgICAgICAgICAgICAgIHNob3dJbnB1dD17c2hvd0lucHV0fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMueEF4aXMgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnMzBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgPHRoaXMucHJvcHMueEF4aXNcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17cGxvdFdpZHRofVxuICAgICAgICAgICAgICAgICAgICAgIHRpbWV6b25lPXt0aW1lem9uZX1cbiAgICAgICAgICAgICAgICAgICAgICBkb21haW49e3JhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgIGlzRW5sYXJnZWQ9e3RoaXMucHJvcHMuaXNFbmxhcmdlZH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgIDxTbGlkZXJcbiAgICAgICAgICAgICAgICAgIG1hcmtzPXt0aGlzLnByb3BzLm1hcmtzfVxuICAgICAgICAgICAgICAgICAgaXNSYW5nZWQ9e2lzUmFuZ2VkfVxuICAgICAgICAgICAgICAgICAgbWluVmFsdWU9e3JhbmdlWzBdfVxuICAgICAgICAgICAgICAgICAgbWF4VmFsdWU9e3JhbmdlWzFdfVxuICAgICAgICAgICAgICAgICAgdmFsdWUwPXt0aGlzLnByb3BzLnZhbHVlMH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlMT17dGhpcy5wcm9wcy52YWx1ZTF9XG4gICAgICAgICAgICAgICAgICBzdGVwPXtzdGVwfVxuICAgICAgICAgICAgICAgICAgc2xpZGVySGFuZGxlV2lkdGg9e3NsaWRlckhhbmRsZVdpZHRofVxuICAgICAgICAgICAgICAgICAgb25TbGlkZXIwQ2hhbmdlPXt0aGlzLl9zZXRSYW5nZVZhbDB9XG4gICAgICAgICAgICAgICAgICBvblNsaWRlcjFDaGFuZ2U9e3RoaXMuX3NldFJhbmdlVmFsMX1cbiAgICAgICAgICAgICAgICAgIG9uU2xpZGVyQmFyQ2hhbmdlPXsodmFsMCwgdmFsMSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZShbdmFsMCwgdmFsMV0pO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGVuYWJsZUJhckRyYWdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHshaXNSYW5nZWQgJiYgc2hvd0lucHV0ID8gdGhpcy5fcmVuZGVySW5wdXQoJ3ZhbHVlMScpIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9TbGlkZXJXcmFwcGVyPlxuICAgICAgICAgICAgICB7aXNSYW5nZWQgJiYgc2hvd0lucHV0ID8gKFxuICAgICAgICAgICAgICAgIDxSYW5nZUlucHV0V3JhcHBlciBjbGFzc05hbWU9XCJyYW5nZS1zbGlkZXJfX2lucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5fcmVuZGVySW5wdXQoJ3ZhbHVlMCcpfVxuICAgICAgICAgICAgICAgICAge3RoaXMuX3JlbmRlcklucHV0KCd2YWx1ZTEnKX1cbiAgICAgICAgICAgICAgICA8L1JhbmdlSW5wdXRXcmFwcGVyPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwb2x5ZmlsbChSYW5nZVNsaWRlcik7XG5cbiAgcmV0dXJuIFJhbmdlU2xpZGVyO1xufVxuIl19