"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = VisConfigSliderFactory;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../../common/styled-components");

var _rangeSlider = _interopRequireDefault(require("../../common/range-slider"));

var _localization = require("@kepler.gl/localization");

var _constants = require("@kepler.gl/constants");

var _ = require("../..");

var _utils = require("@kepler.gl/utils");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var InputWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  line-height: 12px;\n  margin-bottom: 12px;\n"])));

var CustomInputWrapper = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n"])));

var CustomInputLabel = _styledComponents["default"].label(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  font-size: ", ";\n  padding-right: 15px;\n\n  &:last-child {\n    position: absolute;\n    right: 0;\n    padding: 0;\n  }\n"])), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.layerConfigGroupLabelLabelFontSize;
});

var RangeInput = _styledComponents["default"].input(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  font-size: ", ";\n  width: 44px;\n  overflow: auto;\n  height: 20px;\n  margin-top: 5px;\n"])), function (props) {
  return props.theme.input;
}, function (props) {
  return props.theme.sliderInputFontSize;
});

var LazyInput = function LazyInput(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      name = _ref.name;

  var _useState = (0, _react.useState)(value),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      stateValue = _useState2[0],
      setValue = _useState2[1];

  var inputRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    setValue(value);
  }, [value]);
  var onKeyDown = (0, _react.useCallback)(function (e) {
    switch (e.keyCode) {
      case _constants.KeyEvent.DOM_VK_ENTER:
      case _constants.KeyEvent.DOM_VK_RETURN:
        onChange(stateValue);

        if (inputRef !== null) {
          // @ts-ignore
          inputRef === null || inputRef === void 0 ? void 0 : inputRef.current.blur();
        }

        break;

      default:
        break;
    }
  }, [onChange, stateValue]);

  var _onChange = (0, _react.useCallback)(function (e) {
    return setValue(e.target.value);
  }, [setValue]);

  var onBlur = (0, _react.useCallback)(function () {
    return onChange(name, stateValue);
  }, [onChange, name, stateValue]);
  return /*#__PURE__*/_react["default"].createElement(RangeInput, {
    type: "number",
    ref: inputRef,
    value: stateValue,
    onChange: _onChange,
    onBlur: onBlur,
    onKeyDown: onKeyDown,
    id: name
  });
};

var CustomInput = function CustomInput(_ref2) {
  var isRanged = _ref2.isRanged,
      value = _ref2.value,
      onChangeCustomInput = _ref2.onChangeCustomInput;
  var onChangeInput = (0, _react.useCallback)(function (name, v) {
    if (isRanged) onChangeCustomInput(name === 'value0' ? [v, value[1]] : [value[0], v]);else onChangeCustomInput(v);
  }, [isRanged, value, onChangeCustomInput]);
  return /*#__PURE__*/_react["default"].createElement(CustomInputWrapper, null, isRanged ? /*#__PURE__*/_react["default"].createElement(InputWrapper, null, /*#__PURE__*/_react["default"].createElement(CustomInputLabel, null, "min", /*#__PURE__*/_react["default"].createElement(LazyInput, {
    name: "value0",
    value: value[0],
    onChange: onChangeInput
  })), /*#__PURE__*/_react["default"].createElement(CustomInputLabel, null, "max", /*#__PURE__*/_react["default"].createElement(LazyInput, {
    name: "value1",
    value: value[1],
    onChange: onChangeInput
  }))) : /*#__PURE__*/_react["default"].createElement(InputWrapper, null, /*#__PURE__*/_react["default"].createElement(LazyInput, {
    name: "value",
    value: value,
    onChange: onChangeInput
  })));
};

VisConfigSliderFactory.deps = [_rangeSlider["default"]];

function VisConfigSliderFactory(RangeSlider) {
  var VisConfigSlider = function VisConfigSlider(_ref3) {
    var config = _ref3.layer.config,
        property = _ref3.property,
        label = _ref3.label,
        range = _ref3.range,
        step = _ref3.step,
        isRanged = _ref3.isRanged,
        allowCustomValue = _ref3.allowCustomValue,
        disabled = _ref3.disabled,
        _onChange4 = _ref3.onChange,
        inputTheme = _ref3.inputTheme;
    var value = config.visConfig[property];

    var _useState3 = (0, _react.useState)(false || !(0, _utils.isInRange)(value, range)),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        custom = _useState4[0],
        setCustom = _useState4[1];

    var onChangeCheckbox = (0, _react.useCallback)(function () {
      if (custom) {
        // we are swithcing from custom to not custom
        // adjust value to range
        var adjustedValue = isRanged ? [(0, _utils.clamp)(range, value[0]), (0, _utils.clamp)(range, value[1])] : (0, _utils.clamp)(range, value);

        _onChange4((0, _defineProperty2["default"])({}, property, adjustedValue));
      }

      setCustom(!custom);
    }, [_onChange4, property, isRanged, value, range, custom, setCustom]);
    return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, {
      disabled: Boolean(disabled)
    }, label ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, typeof label === 'string' ? /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: label
    }) : typeof label === 'function' ? /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: label(config)
    }) : /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: "property.".concat(property)
    })) : null, allowCustomValue ? /*#__PURE__*/_react["default"].createElement(InputWrapper, null, /*#__PURE__*/_react["default"].createElement(CustomInputLabel, null, "custom input"), /*#__PURE__*/_react["default"].createElement(_.Checkbox, {
      id: "property.".concat(property),
      checked: custom,
      onChange: onChangeCheckbox
    })) : null, !custom ? /*#__PURE__*/_react["default"].createElement(RangeSlider, {
      range: range,
      value0: isRanged ? value[0] : range[0],
      value1: isRanged ? value[1] : value,
      step: step,
      isRanged: Boolean(isRanged),
      onChange: function onChange(v) {
        return _onChange4((0, _defineProperty2["default"])({}, property, isRanged ? v : v[1]));
      },
      inputTheme: inputTheme,
      showInput: true
    }) : /*#__PURE__*/_react["default"].createElement(CustomInput, {
      isRanged: isRanged,
      value: value,
      onChangeCustomInput: function onChangeCustomInput(v) {
        return _onChange4((0, _defineProperty2["default"])({}, property, v));
      }
    }));
  };

  return VisConfigSlider;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2xheWVyLXBhbmVsL3Zpcy1jb25maWctc2xpZGVyLnRzeCJdLCJuYW1lcyI6WyJJbnB1dFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJDdXN0b21JbnB1dFdyYXBwZXIiLCJDdXN0b21JbnB1dExhYmVsIiwibGFiZWwiLCJwcm9wcyIsInRoZW1lIiwidGV4dENvbG9yIiwibGF5ZXJDb25maWdHcm91cExhYmVsTGFiZWxGb250U2l6ZSIsIlJhbmdlSW5wdXQiLCJpbnB1dCIsInNsaWRlcklucHV0Rm9udFNpemUiLCJMYXp5SW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwibmFtZSIsInN0YXRlVmFsdWUiLCJzZXRWYWx1ZSIsImlucHV0UmVmIiwib25LZXlEb3duIiwiZSIsImtleUNvZGUiLCJLZXlFdmVudCIsIkRPTV9WS19FTlRFUiIsIkRPTV9WS19SRVRVUk4iLCJjdXJyZW50IiwiYmx1ciIsIl9vbkNoYW5nZSIsInRhcmdldCIsIm9uQmx1ciIsIkN1c3RvbUlucHV0IiwiaXNSYW5nZWQiLCJvbkNoYW5nZUN1c3RvbUlucHV0Iiwib25DaGFuZ2VJbnB1dCIsInYiLCJWaXNDb25maWdTbGlkZXJGYWN0b3J5IiwiZGVwcyIsIlJhbmdlU2xpZGVyRmFjdG9yeSIsIlJhbmdlU2xpZGVyIiwiVmlzQ29uZmlnU2xpZGVyIiwiY29uZmlnIiwibGF5ZXIiLCJwcm9wZXJ0eSIsInJhbmdlIiwic3RlcCIsImFsbG93Q3VzdG9tVmFsdWUiLCJkaXNhYmxlZCIsImlucHV0VGhlbWUiLCJ2aXNDb25maWciLCJjdXN0b20iLCJzZXRDdXN0b20iLCJvbkNoYW5nZUNoZWNrYm94IiwiYWRqdXN0ZWRWYWx1ZSIsIkJvb2xlYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7O0FBMkJBLElBQU1BLFlBQVks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QUFRRSxNQUFBLFNBQVM7QUFSWCxNQURELGdCQVlDLGdDQUFDLFdBQUQ7QUFDRSxNQUFBLFFBQVEsRUFBRWhCLFFBRFo7QUFFRSxNQUFBLEtBQUssRUFBRWxCLEtBRlQ7QUFHRSxNQUFBLG1CQUFtQixFQUFFLDZCQUFBcUIsQ0FBQztBQUFBLGVBQUlwQixVQUFRLHNDQUFHNEIsUUFBSCxFQUFjUixDQUFkLEVBQVo7QUFBQTtBQUh4QixNQWhDSixDQURGO0FBeUNELEdBcEVEOztBQXNFQSxTQUFPSyxlQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHtQYW5lbExhYmVsLCBTaWRlUGFuZWxTZWN0aW9ufSBmcm9tICcuLi8uLi9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJhbmdlU2xpZGVyRmFjdG9yeSBmcm9tICcuLi8uLi9jb21tb24vcmFuZ2Utc2xpZGVyJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnQGtlcGxlci5nbC9sb2NhbGl6YXRpb24nO1xuaW1wb3J0IHtLZXlFdmVudH0gZnJvbSAnQGtlcGxlci5nbC9jb25zdGFudHMnO1xuaW1wb3J0IHtDaGVja2JveH0gZnJvbSAnLi4vLi4nO1xuaW1wb3J0IHtMYXllciwgTGF5ZXJCYXNlQ29uZmlnfSBmcm9tICdAa2VwbGVyLmdsL2xheWVycyc7XG5pbXBvcnQge2lzSW5SYW5nZSwgY2xhbXB9IGZyb20gJ0BrZXBsZXIuZ2wvdXRpbHMnO1xuXG50eXBlIExhenlJbnB1dFByb3BzID0ge1xuICB2YWx1ZTogc3RyaW5nIHwgW3N0cmluZywgc3RyaW5nXTtcbiAgbmFtZTogc3RyaW5nO1xuICBvbkNoYW5nZTogKG46IHN0cmluZyB8IFtzdHJpbmcsIHN0cmluZ10sIHY/OiBzdHJpbmcgfCBbc3RyaW5nLCBzdHJpbmddKSA9PiB2b2lkO1xufTtcblxudHlwZSBDdXN0b21JbnB1dFByb3BzID0ge1xuICB2YWx1ZTogc3RyaW5nIHwgW3N0cmluZywgc3RyaW5nXTtcbiAgaXNSYW5nZWQ6IGJvb2xlYW47XG4gIG9uQ2hhbmdlQ3VzdG9tSW5wdXQ6ICh2OiBbc3RyaW5nLCBzdHJpbmddKSA9PiB2b2lkO1xufTtcblxudHlwZSBWaXNDb25maWdTbGlkZXJQcm9wcyA9IHtcbiAgbGF5ZXI6IExheWVyO1xuICBwcm9wZXJ0eTogc3RyaW5nO1xuICBvbkNoYW5nZTogKHY6IFJlY29yZDxzdHJpbmcsIG51bWJlciB8IHN0cmluZyB8IG51bWJlcltdIHwgc3RyaW5nW10+KSA9PiB2b2lkO1xuICBsYWJlbD86IHN0cmluZyB8ICgoYzogTGF5ZXJCYXNlQ29uZmlnKSA9PiBzdHJpbmcpO1xuICByYW5nZTogW251bWJlciwgbnVtYmVyXTtcbiAgc3RlcD86IG51bWJlcjtcbiAgaXNSYW5nZWQ6IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgaW5wdXRUaGVtZT86IHN0cmluZztcbiAgYWxsb3dDdXN0b21WYWx1ZT86IGJvb2xlYW47XG59O1xuXG5jb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbmA7XG5cbmNvbnN0IEN1c3RvbUlucHV0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBDdXN0b21JbnB1dExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYXllckNvbmZpZ0dyb3VwTGFiZWxMYWJlbEZvbnRTaXplfTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcblxuICAmOmxhc3QtY2hpbGQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5gO1xuXG5jb25zdCBSYW5nZUlucHV0ID0gc3R5bGVkLmlucHV0YFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0fTtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNsaWRlcklucHV0Rm9udFNpemV9O1xuICB3aWR0aDogNDRweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuYDtcblxuY29uc3QgTGF6eUlucHV0OiBSZWFjdC5GQzxMYXp5SW5wdXRQcm9wcz4gPSAoe3ZhbHVlLCBvbkNoYW5nZSwgbmFtZX0pID0+IHtcbiAgY29uc3QgW3N0YXRlVmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHZhbHVlKTtcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VmFsdWUodmFsdWUpO1xuICB9LCBbdmFsdWVdKTtcblxuICBjb25zdCBvbktleURvd24gPSB1c2VDYWxsYmFjayhcbiAgICBlID0+IHtcbiAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgS2V5RXZlbnQuRE9NX1ZLX0VOVEVSOlxuICAgICAgICBjYXNlIEtleUV2ZW50LkRPTV9WS19SRVRVUk46XG4gICAgICAgICAgb25DaGFuZ2Uoc3RhdGVWYWx1ZSk7XG4gICAgICAgICAgaWYgKGlucHV0UmVmICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBpbnB1dFJlZj8uY3VycmVudC5ibHVyKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sXG4gICAgW29uQ2hhbmdlLCBzdGF0ZVZhbHVlXVxuICApO1xuXG4gIGNvbnN0IF9vbkNoYW5nZSA9IHVzZUNhbGxiYWNrKGUgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpLCBbc2V0VmFsdWVdKTtcbiAgY29uc3Qgb25CbHVyID0gdXNlQ2FsbGJhY2soKCkgPT4gb25DaGFuZ2UobmFtZSwgc3RhdGVWYWx1ZSksIFtvbkNoYW5nZSwgbmFtZSwgc3RhdGVWYWx1ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJhbmdlSW5wdXRcbiAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgIHZhbHVlPXtzdGF0ZVZhbHVlfVxuICAgICAgb25DaGFuZ2U9e19vbkNoYW5nZX1cbiAgICAgIG9uQmx1cj17b25CbHVyfVxuICAgICAgb25LZXlEb3duPXtvbktleURvd259XG4gICAgICBpZD17bmFtZX1cbiAgICAvPlxuICApO1xufTtcblxuY29uc3QgQ3VzdG9tSW5wdXQ6IFJlYWN0LkZDPEN1c3RvbUlucHV0UHJvcHM+ID0gKHtpc1JhbmdlZCwgdmFsdWUsIG9uQ2hhbmdlQ3VzdG9tSW5wdXR9KSA9PiB7XG4gIGNvbnN0IG9uQ2hhbmdlSW5wdXQgPSB1c2VDYWxsYmFjayhcbiAgICAobmFtZSwgdikgPT4ge1xuICAgICAgaWYgKGlzUmFuZ2VkKSBvbkNoYW5nZUN1c3RvbUlucHV0KG5hbWUgPT09ICd2YWx1ZTAnID8gW3YsIHZhbHVlWzFdXSA6IFt2YWx1ZVswXSwgdl0pO1xuICAgICAgZWxzZSBvbkNoYW5nZUN1c3RvbUlucHV0KHYpO1xuICAgIH0sXG4gICAgW2lzUmFuZ2VkLCB2YWx1ZSwgb25DaGFuZ2VDdXN0b21JbnB1dF1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxDdXN0b21JbnB1dFdyYXBwZXI+XG4gICAgICB7aXNSYW5nZWQgPyAoXG4gICAgICAgIDxJbnB1dFdyYXBwZXI+XG4gICAgICAgICAgPEN1c3RvbUlucHV0TGFiZWw+XG4gICAgICAgICAgICBtaW5cbiAgICAgICAgICAgIDxMYXp5SW5wdXQgbmFtZT1cInZhbHVlMFwiIHZhbHVlPXt2YWx1ZVswXX0gb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IC8+XG4gICAgICAgICAgPC9DdXN0b21JbnB1dExhYmVsPlxuICAgICAgICAgIDxDdXN0b21JbnB1dExhYmVsPlxuICAgICAgICAgICAgbWF4XG4gICAgICAgICAgICA8TGF6eUlucHV0IG5hbWU9XCJ2YWx1ZTFcIiB2YWx1ZT17dmFsdWVbMV19IG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fSAvPlxuICAgICAgICAgIDwvQ3VzdG9tSW5wdXRMYWJlbD5cbiAgICAgICAgPC9JbnB1dFdyYXBwZXI+XG4gICAgICApIDogKFxuICAgICAgICA8SW5wdXRXcmFwcGVyPlxuICAgICAgICAgIDxMYXp5SW5wdXQgbmFtZT1cInZhbHVlXCIgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0gLz5cbiAgICAgICAgPC9JbnB1dFdyYXBwZXI+XG4gICAgICApfVxuICAgIDwvQ3VzdG9tSW5wdXRXcmFwcGVyPlxuICApO1xufTtcblxuVmlzQ29uZmlnU2xpZGVyRmFjdG9yeS5kZXBzID0gW1JhbmdlU2xpZGVyRmFjdG9yeV07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpc0NvbmZpZ1NsaWRlckZhY3RvcnkoUmFuZ2VTbGlkZXI6IFJldHVyblR5cGU8dHlwZW9mIFJhbmdlU2xpZGVyRmFjdG9yeT4pIHtcbiAgY29uc3QgVmlzQ29uZmlnU2xpZGVyOiBSZWFjdC5GQzxWaXNDb25maWdTbGlkZXJQcm9wcz4gPSAoe1xuICAgIGxheWVyOiB7Y29uZmlnfSxcbiAgICBwcm9wZXJ0eSxcbiAgICBsYWJlbCxcbiAgICByYW5nZSxcbiAgICBzdGVwLFxuICAgIGlzUmFuZ2VkLFxuICAgIGFsbG93Q3VzdG9tVmFsdWUsXG4gICAgZGlzYWJsZWQsXG4gICAgb25DaGFuZ2UsXG4gICAgaW5wdXRUaGVtZVxuICB9KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBjb25maWcudmlzQ29uZmlnW3Byb3BlcnR5XTtcbiAgICBjb25zdCBbY3VzdG9tLCBzZXRDdXN0b21dID0gdXNlU3RhdGUoZmFsc2UgfHwgIWlzSW5SYW5nZSh2YWx1ZSwgcmFuZ2UpKTtcblxuICAgIGNvbnN0IG9uQ2hhbmdlQ2hlY2tib3ggPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICBpZiAoY3VzdG9tKSB7XG4gICAgICAgIC8vIHdlIGFyZSBzd2l0aGNpbmcgZnJvbSBjdXN0b20gdG8gbm90IGN1c3RvbVxuICAgICAgICAvLyBhZGp1c3QgdmFsdWUgdG8gcmFuZ2VcbiAgICAgICAgY29uc3QgYWRqdXN0ZWRWYWx1ZSA9IGlzUmFuZ2VkXG4gICAgICAgICAgPyBbY2xhbXAocmFuZ2UsIHZhbHVlWzBdKSwgY2xhbXAocmFuZ2UsIHZhbHVlWzFdKV1cbiAgICAgICAgICA6IGNsYW1wKHJhbmdlLCB2YWx1ZSk7XG4gICAgICAgIG9uQ2hhbmdlKHtbcHJvcGVydHldOiBhZGp1c3RlZFZhbHVlfSk7XG4gICAgICB9XG4gICAgICBzZXRDdXN0b20oIWN1c3RvbSk7XG4gICAgfSwgW29uQ2hhbmdlLCBwcm9wZXJ0eSwgaXNSYW5nZWQsIHZhbHVlLCByYW5nZSwgY3VzdG9tLCBzZXRDdXN0b21dKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U2lkZVBhbmVsU2VjdGlvbiBkaXNhYmxlZD17Qm9vbGVhbihkaXNhYmxlZCl9PlxuICAgICAgICB7bGFiZWwgPyAoXG4gICAgICAgICAgPFBhbmVsTGFiZWw+XG4gICAgICAgICAgICB7dHlwZW9mIGxhYmVsID09PSAnc3RyaW5nJyA/IChcbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e2xhYmVsfSAvPlxuICAgICAgICAgICAgKSA6IHR5cGVvZiBsYWJlbCA9PT0gJ2Z1bmN0aW9uJyA/IChcbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e2xhYmVsKGNvbmZpZyl9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17YHByb3BlcnR5LiR7cHJvcGVydHl9YH0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9QYW5lbExhYmVsPlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICB7YWxsb3dDdXN0b21WYWx1ZSA/IChcbiAgICAgICAgICA8SW5wdXRXcmFwcGVyPlxuICAgICAgICAgICAgPEN1c3RvbUlucHV0TGFiZWw+Y3VzdG9tIGlucHV0PC9DdXN0b21JbnB1dExhYmVsPlxuICAgICAgICAgICAgPENoZWNrYm94IGlkPXtgcHJvcGVydHkuJHtwcm9wZXJ0eX1gfSBjaGVja2VkPXtjdXN0b219IG9uQ2hhbmdlPXtvbkNoYW5nZUNoZWNrYm94fSAvPlxuICAgICAgICAgIDwvSW5wdXRXcmFwcGVyPlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICB7IWN1c3RvbSA/IChcbiAgICAgICAgICA8UmFuZ2VTbGlkZXJcbiAgICAgICAgICAgIHJhbmdlPXtyYW5nZX1cbiAgICAgICAgICAgIHZhbHVlMD17aXNSYW5nZWQgPyB2YWx1ZVswXSA6IHJhbmdlWzBdfVxuICAgICAgICAgICAgdmFsdWUxPXtpc1JhbmdlZCA/IHZhbHVlWzFdIDogdmFsdWV9XG4gICAgICAgICAgICBzdGVwPXtzdGVwfVxuICAgICAgICAgICAgaXNSYW5nZWQ9e0Jvb2xlYW4oaXNSYW5nZWQpfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3YgPT4gb25DaGFuZ2Uoe1twcm9wZXJ0eV06IGlzUmFuZ2VkID8gdiA6IHZbMV19KX1cbiAgICAgICAgICAgIGlucHV0VGhlbWU9e2lucHV0VGhlbWV9XG4gICAgICAgICAgICBzaG93SW5wdXRcbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxDdXN0b21JbnB1dFxuICAgICAgICAgICAgaXNSYW5nZWQ9e2lzUmFuZ2VkfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2VDdXN0b21JbnB1dD17diA9PiBvbkNoYW5nZSh7W3Byb3BlcnR5XTogdn0pfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gVmlzQ29uZmlnU2xpZGVyO1xufVxuIl19