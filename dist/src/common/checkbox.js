"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var _lodash = _interopRequireDefault(require("lodash.pick"));

var _classnames = _interopRequireDefault(require("classnames"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function noop() {}

var StyledSwitchInput = _styledComponents["default"].label(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"])), function (props) {
  return props.secondary ? props.theme.secondarySwitch : props.theme.inputSwitch;
});

var StyledCheckboxInput = _styledComponents["default"].label(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"])), function (props) {
  return props.theme.inputCheckbox;
});

var StyledRadiuInput = _styledComponents["default"].label(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"])), function (props) {
  return props.secondary ? props.theme.secondaryRadio : props.theme.inputRadio;
});

var HiddenInput = _styledComponents["default"].input(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  opacity: 0;\n"])));

var StyledCheckbox = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  min-height: ", "px;\n  margin-left: ", "px;\n"])), function (props) {
  return props.theme.switchHeight;
}, function (props) {
  return props.type === 'radio' ? 0 : props.theme.switchLabelMargin;
});

var Checkbox = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Checkbox, _Component);

  var _super = _createSuper(Checkbox);

  function Checkbox() {
    var _this;

    (0, _classCallCheck2["default"])(this, Checkbox);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      focused: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFocus", function (args) {
      _this.setState({
        focused: true
      });

      _this.props.onFocus(args);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBlur", function (args) {
      _this.setState({
        focused: false
      });

      _this.props.onBlur(args);
    });
    return _this;
  }

  (0, _createClass2["default"])(Checkbox, [{
    key: "render",
    value: function render() {
      var inputProps = _objectSpread(_objectSpread({}, (0, _lodash["default"])(this.props, ['checked', 'disabled', 'id', 'onChange', 'value', 'secondary'])), {}, {
        type: 'checkbox',
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      });

      var labelProps = _objectSpread(_objectSpread({}, (0, _lodash["default"])(this.props, ['checked', 'disabled', 'secondary'])), {}, {
        htmlFor: this.props.id
      });

      var LabelElement = this.props.type === 'checkbox' ? StyledCheckboxInput : this.props.type === 'radio' ? StyledRadiuInput : StyledSwitchInput;
      return /*#__PURE__*/_react["default"].createElement(StyledCheckbox, {
        type: this.props.type,
        className: (0, _classnames["default"])('kg-checkbox', this.props.className)
      }, /*#__PURE__*/_react["default"].createElement(HiddenInput, inputProps), /*#__PURE__*/_react["default"].createElement(LabelElement, (0, _extends2["default"])({
        className: "kg-checkbox__label"
      }, labelProps), this.props.label));
    }
  }]);
  return Checkbox;
}(_react.Component);

exports["default"] = Checkbox;
(0, _defineProperty2["default"])(Checkbox, "defaultProps", {
  disabled: false,
  checked: false,
  onBlur: noop,
  onChange: noop,
  onFocus: noop,
  label: ''
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vY2hlY2tib3gudHN4Il0sIm5hbWVzIjpbIm5vb3AiLCJTdHlsZWRTd2l0Y2hJbnB1dCIsInN0eWxlZCIsImxhYmVsIiwicHJvcHMiLCJzZWNvbmRhcnkiLCJ0aGVtZSIsInNlY29uZGFyeVN3aXRjaCIsImlucHV0U3dpdGNoIiwiU3R5bGVkQ2hlY2tib3hJbnB1dCIsImlucHV0Q2hlY2tib3giLCJTdHlsZWRSYWRpdUlucHV0Iiwic2Vjb25kYXJ5UmFkaW8iLCJpbnB1dFJhZGlvIiwiSGlkZGVuSW5wdXQiLCJpbnB1dCIsIlN0eWxlZENoZWNrYm94IiwiZGl2Iiwic3dpdGNoSGVpZ2h0IiwidHlwZSIsInN3aXRjaExhYmVsTWFyZ2luIiwiQ2hlY2tib3giLCJmb2N1c2VkIiwiYXJncyIsInNldFN0YXRlIiwib25Gb2N1cyIsIm9uQmx1ciIsImlucHV0UHJvcHMiLCJoYW5kbGVGb2N1cyIsImhhbmRsZUJsdXIiLCJsYWJlbFByb3BzIiwiaHRtbEZvciIsImlkIiwiTGFiZWxFbGVtZW50IiwiY2xhc3NOYW1lIiwiQ29tcG9uZW50IiwiZGlzYWJsZWQiLCJjaGVja2VkIiwib25DaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxTQUFTQSxJQUFULEdBQWdCLENBQUU7O0FBTWxCLElBQU1DLGlCQUFpQixHQUFHQyw2QkFBT0MsS0FBVixrR0FDbkIsVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsU0FBTixHQUFrQkQsS0FBSyxDQUFDRSxLQUFOLENBQVlDLGVBQTlCLEdBQWdESCxLQUFLLENBQUNFLEtBQU4sQ0FBWUUsV0FBakU7QUFBQSxDQURjLENBQXZCOztBQUlBLElBQU1DLG1CQUFtQixHQUFHUCw2QkFBT0MsS0FBVixvR0FDckIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtB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cHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NoYW5nZUV2ZW50SGFuZGxlciwgQ29tcG9uZW50LCBGb2N1c0V2ZW50SGFuZGxlciwgUmVhY3ROb2RlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBwaWNrIGZyb20gJ2xvZGFzaC5waWNrJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuaW50ZXJmYWNlIFN0eWxlZFN3aXRjaElucHV0UHJvcHMge1xuICBzZWNvbmRhcnk/OiBib29sZWFuO1xufVxuXG5jb25zdCBTdHlsZWRTd2l0Y2hJbnB1dCA9IHN0eWxlZC5sYWJlbDxTdHlsZWRTd2l0Y2hJbnB1dFByb3BzPmBcbiAgJHtwcm9wcyA9PiAocHJvcHMuc2Vjb25kYXJ5ID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5U3dpdGNoIDogcHJvcHMudGhlbWUuaW5wdXRTd2l0Y2gpfTtcbmA7XG5cbmNvbnN0IFN0eWxlZENoZWNrYm94SW5wdXQgPSBzdHlsZWQubGFiZWxgXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRDaGVja2JveH07XG5gO1xuXG5jb25zdCBTdHlsZWRSYWRpdUlucHV0ID0gc3R5bGVkLmxhYmVsPFN0eWxlZFN3aXRjaElucHV0UHJvcHM+YFxuICAke3Byb3BzID0+IChwcm9wcy5zZWNvbmRhcnkgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlSYWRpbyA6IHByb3BzLnRoZW1lLmlucHV0UmFkaW8pfTtcbmA7XG5cbmNvbnN0IEhpZGRlbklucHV0ID0gc3R5bGVkLmlucHV0YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG5gO1xuXG5pbnRlcmZhY2UgU3R5bGVkQ2hlY2tib3hQcm9wcyB7XG4gIHR5cGU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFN0eWxlZENoZWNrYm94ID0gc3R5bGVkLmRpdjxTdHlsZWRDaGVja2JveFByb3BzPmBcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zd2l0Y2hIZWlnaHR9cHg7XG4gIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+IChwcm9wcy50eXBlID09PSAncmFkaW8nID8gMCA6IHByb3BzLnRoZW1lLnN3aXRjaExhYmVsTWFyZ2luKX1weDtcbmA7XG5cbmludGVyZmFjZSBDaGVja2JveFByb3BzIHtcbiAgaWQ6IHN0cmluZztcbiAgdHlwZT86IHN0cmluZztcbiAgbGFiZWw/OiBSZWFjdE5vZGU7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgdmFsdWU/OiBzdHJpbmcgfCAnaW5kZXRlcm1pbmF0ZSc7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG5cbiAgZXJyb3I/OiBzdHJpbmc7XG4gIHN3aXRjaD86IGJvb2xlYW47XG4gIGFjdGl2ZUNvbG9yPzogc3RyaW5nO1xuICBzZWNvbmRhcnk/OiBib29sZWFuO1xuICBvbkJsdXI6IEZvY3VzRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+O1xuICBvbkNoYW5nZT86IENoYW5nZUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PjtcbiAgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrYm94IGV4dGVuZHMgQ29tcG9uZW50PENoZWNrYm94UHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgY2hlY2tlZDogZmFsc2UsXG4gICAgb25CbHVyOiBub29wLFxuICAgIG9uQ2hhbmdlOiBub29wLFxuICAgIG9uRm9jdXM6IG5vb3AsXG4gICAgbGFiZWw6ICcnXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgZm9jdXNlZDogZmFsc2VcbiAgfTtcblxuICBoYW5kbGVGb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD4gPSBhcmdzID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtmb2N1c2VkOiB0cnVlfSk7XG4gICAgdGhpcy5wcm9wcy5vbkZvY3VzKGFyZ3MpO1xuICB9O1xuXG4gIGhhbmRsZUJsdXI6IEZvY3VzRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gYXJncyA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Zm9jdXNlZDogZmFsc2V9KTtcbiAgICB0aGlzLnByb3BzLm9uQmx1cihhcmdzKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgaW5wdXRQcm9wcyA9IHtcbiAgICAgIC4uLnBpY2sodGhpcy5wcm9wcywgWydjaGVja2VkJywgJ2Rpc2FibGVkJywgJ2lkJywgJ29uQ2hhbmdlJywgJ3ZhbHVlJywgJ3NlY29uZGFyeSddKSxcbiAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICBvbkZvY3VzOiB0aGlzLmhhbmRsZUZvY3VzLFxuICAgICAgb25CbHVyOiB0aGlzLmhhbmRsZUJsdXJcbiAgICB9O1xuXG4gICAgY29uc3QgbGFiZWxQcm9wcyA9IHtcbiAgICAgIC4uLnBpY2sodGhpcy5wcm9wcywgWydjaGVja2VkJywgJ2Rpc2FibGVkJywgJ3NlY29uZGFyeSddKSxcbiAgICAgIGh0bWxGb3I6IHRoaXMucHJvcHMuaWRcbiAgICB9O1xuXG4gICAgY29uc3QgTGFiZWxFbGVtZW50ID1cbiAgICAgIHRoaXMucHJvcHMudHlwZSA9PT0gJ2NoZWNrYm94J1xuICAgICAgICA/IFN0eWxlZENoZWNrYm94SW5wdXRcbiAgICAgICAgOiB0aGlzLnByb3BzLnR5cGUgPT09ICdyYWRpbydcbiAgICAgICAgPyBTdHlsZWRSYWRpdUlucHV0XG4gICAgICAgIDogU3R5bGVkU3dpdGNoSW5wdXQ7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZENoZWNrYm94XG4gICAgICAgIHR5cGU9e3RoaXMucHJvcHMudHlwZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdrZy1jaGVja2JveCcsIHRoaXMucHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgID5cbiAgICAgICAgPEhpZGRlbklucHV0IHsuLi5pbnB1dFByb3BzfSAvPlxuICAgICAgICA8TGFiZWxFbGVtZW50IGNsYXNzTmFtZT1cImtnLWNoZWNrYm94X19sYWJlbFwiIHsuLi5sYWJlbFByb3BzfT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5sYWJlbH1cbiAgICAgICAgPC9MYWJlbEVsZW1lbnQ+XG4gICAgICA8L1N0eWxlZENoZWNrYm94PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==