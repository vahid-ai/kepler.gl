"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.InputBoxContainer = exports.ColorSelectorInput = exports.ColorBlock = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

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

var _utils = require("@kepler.gl/utils");

var _singleColorPalette = _interopRequireDefault(require("./single-color-palette"));

var _colorRangeSelector = _interopRequireDefault(require("./color-range-selector"));

var _colorPalette = _interopRequireDefault(require("./color-palette"));

var _styledComponents2 = require("../../common/styled-components");

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _templateObject, _templateObject2, _templateObject3;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ColorBlock = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: 32px;\n  height: 18px;\n  border-radius: 1px;\n  background-color: ", ";\n"])), function (props) {
  return "rgb(".concat(props.backgroundcolor.slice(0, 3).join(','), ")");
});

exports.ColorBlock = ColorBlock;

var ColorSelectorInput = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  height: ", ";\n\n  .color-selector__selector__label {\n    text-transform: capitalize;\n    font-size: 12px;\n    text-align: center;\n    color: ", ";\n  }\n"])), function (props) {
  return props.inputTheme === 'secondary' ? props.theme.secondaryInput : props.theme.input;
}, function (props) {
  return props.theme.inputBoxHeight;
}, function (props) {
  return props.theme.inputPlaceholderColor;
});

exports.ColorSelectorInput = ColorSelectorInput;

var InputBoxContainer = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n\n  .color-select__input-group {\n    flex-grow: 1;\n  }\n  .color-select__input-group:nth-child(2) {\n    margin-left: 12px;\n  }\n"])));

exports.InputBoxContainer = InputBoxContainer;

var ColorSelector = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ColorSelector, _Component);

  var _super = _createSuper(ColorSelector);

  function ColorSelector() {
    var _this;

    (0, _classCallCheck2["default"])(this, ColorSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      showDropdown: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "node", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function (e) {
      if (_this.props.colorUI && Number.isInteger(_this.props.colorUI.showSketcher)) {
        // if sketcher is open, let sketch to close itself first
        return;
      }

      _this._closePanelDropdown();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_getEditing", function () {
      return _this.props.colorUI ? _this.props.colorUI.showDropdown : _this.state.showDropdown;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_closePanelDropdown", function () {
      if (_this._getEditing() === false) {
        return;
      }

      if (_this.props.setColorUI) {
        _this.props.setColorUI({
          showDropdown: false,
          showSketcher: false
        });
      } else {
        _this.setState({
          showDropdown: false
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSelectColor", function (color, e) {
      e.stopPropagation();

      var editing = _this._getEditing();

      if (typeof editing === 'number' && _this.props.colorSets[editing]) {
        // @ts-ignore
        _this.props.colorSets[editing].setColor(color);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showDropdown", function (e, i) {
      e.stopPropagation();
      e.preventDefault();

      if (_this.props.setColorUI) {
        _this.props.setColorUI({
          showDropdown: i
        });
      } else {
        _this.setState({
          showDropdown: i
        });
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(ColorSelector, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          colorSets = _this$props.colorSets,
          disabled = _this$props.disabled,
          inputTheme = _this$props.inputTheme,
          colorUI = _this$props.colorUI;

      var editing = this._getEditing();

      var currentEditing = typeof editing === 'number' && colorSets[editing] && (0, _typeof2["default"])(colorSets[editing]) === 'object';
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "color-selector",
        ref: this.node
      }, /*#__PURE__*/_react["default"].createElement(InputBoxContainer, null, colorSets.map(function (cSet, i) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "color-select__input-group",
          key: i
        }, /*#__PURE__*/_react["default"].createElement(ColorSelectorInput, {
          className: "color-selector__selector",
          active: editing === i,
          disabled: disabled,
          inputTheme: inputTheme,
          onMouseDown: function onMouseDown(e) {
            return _this2._showDropdown(e, i);
          }
        }, cSet.isRange ? /*#__PURE__*/_react["default"].createElement(_colorPalette["default"], {
          colors: cSet.selectedColor.colors
        }) : /*#__PURE__*/_react["default"].createElement(ColorBlock, {
          className: "color-selector__selector__block",
          backgroundcolor: cSet.selectedColor
        }), cSet.label ? /*#__PURE__*/_react["default"].createElement("div", {
          className: "color-selector__selector__label"
        }, cSet.label) : null));
      })), currentEditing ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledPanelDropdown, {
        className: "color-selector__dropdown"
      }, colorSets[editing].isRange ? /*#__PURE__*/_react["default"].createElement(_colorRangeSelector["default"], {
        selectedColorRange: colorSets[editing].selectedColor,
        onSelectColorRange: this._onSelectColor,
        setColorPaletteUI: this.props.setColorUI,
        colorPaletteUI: colorUI
      }) : /*#__PURE__*/_react["default"].createElement(_singleColorPalette["default"], {
        selectedColor: (0, _utils.rgbToHex)(colorSets[editing].selectedColor),
        onSelectColor: this._onSelectColor
      })) : null);
    }
  }]);
  return ColorSelector;
}(_react.Component);

(0, _defineProperty2["default"])(ColorSelector, "defaultProps", {
  colorSets: []
});

var _default = (0, _reactOnclickoutside["default"])(ColorSelector);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2xheWVyLXBhbmVsL2NvbG9yLXNlbGVjdG9yLnRzeCJdLCJuYW1lcyI6WyJDb2xvckJsb2NrIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJiYWNrZ3JvdW5kY29sb3IiLCJzbGljZSIsImpvaW4iLCJDb2xvclNlbGVjdG9ySW5wdXQiLCJpbnB1dFRoZW1lIiwidGhlbWUiLCJzZWNvbmRhcnlJbnB1dCIsImlucHV0IiwiaW5wdXRCb3hIZWlnaHQiLCJpbnB1dFBsYWNlaG9sZGVyQ29sb3IiLCJJbnB1dEJveENvbnRhaW5lciIsIkNvbG9yU2VsZWN0b3IiLCJzaG93RHJvcGRvd24iLCJlIiwiY29sb3JVSSIsIk51bWJlciIsImlzSW50ZWdlciIsInNob3dTa2V0Y2hlciIsIl9jbG9zZVBhbmVsRHJvcGRvd24iLCJzdGF0ZSIsIl9nZXRFZGl0aW5nIiwic2V0Q29sb3JVSSIsInNldFN0YXRlIiwiY29sb3IiLCJzdG9wUHJvcGFnYXRpb24iLCJlZGl0aW5nIiwiY29sb3JTZXRzIiwic2V0Q29sb3IiLCJpIiwicHJldmVudERlZmF1bHQiLCJkaXNhYmxlZCIsImN1cnJlbnRFZGl0aW5nIiwibm9kZSIsIm1hcCIsImNTZXQiLCJfc2hvd0Ryb3Bkb3duIiwiaXNSYW5nZSIsInNlbGVjdGVkQ29sb3IiLCJjb2xvcnMiLCJsYWJlbCIsIl9vblNlbGVjdENvbG9yIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUF1Qk8sSUFBTUEsVUFBVSxHQUFHQyw2QkFBT0MsR0FBViw0S0FJRCxVQUFBQyxLQUFLO0FBQUEsdUJBQVdBLEtBQUssQ0FBQ0MsZUFBTixDQUFzQkMsS0FBdEIsQ0FBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0NDLElBQWxDLENB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QUFEO0FBQXFCLFFBQUEsU0FBUyxFQUFDO0FBQS9CLFNBQ0dMLFNBQVMsQ0FBQ0QsT0FBRCxDQUFULENBQTZCVyxPQUE3QixnQkFDQyxnQ0FBQyw4QkFBRDtBQUNFLFFBQUEsa0JBQWtCLEVBQUVWLFNBQVMsQ0FBQ0QsT0FBRCxDQUFULENBQTZCWSxhQURuRDtBQUVFLFFBQUEsa0JBQWtCLEVBQUUsS0FBS0csY0FGM0I7QUFHRSxRQUFBLGlCQUFpQixFQUFFLEtBQUt6QyxLQUFMLENBQVdzQixVQUhoQztBQUlFLFFBQUEsY0FBYyxFQUFFUDtBQUpsQixRQURELGdCQVFDLGdDQUFDLDhCQUFEO0FBQ0UsUUFBQSxhQUFhLEVBQUUscUJBQVNZLFNBQVMsQ0FBQ0QsT0FBRCxDQUFULENBQTZCWSxhQUF0QyxDQURqQjtBQUVFLFFBQUEsYUFBYSxFQUFFLEtBQUtHO0FBRnRCLFFBVEosQ0FEYSxHQWdCWCxJQTFDTixDQURGO0FBOENEOzs7RUEvR3lCQyxnQjs7aUNBQXRCOUIsYSxrQkFDa0I7QUFDcEJlLEVBQUFBLFNBQVMsRUFBRTtBQURTLEM7O2VBaUhULHFDQUFlZixhQUFmLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGNyZWF0ZVJlZiwgTW91c2VFdmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge3JnYlRvSGV4fSBmcm9tICdAa2VwbGVyLmdsL3V0aWxzJztcbmltcG9ydCBTaW5nbGVDb2xvclBhbGV0dGUgZnJvbSAnLi9zaW5nbGUtY29sb3ItcGFsZXR0ZSc7XG5pbXBvcnQgQ29sb3JSYW5nZVNlbGVjdG9yIGZyb20gJy4vY29sb3ItcmFuZ2Utc2VsZWN0b3InO1xuaW1wb3J0IENvbG9yUGFsZXR0ZSBmcm9tICcuL2NvbG9yLXBhbGV0dGUnO1xuaW1wb3J0IHtTdHlsZWRQYW5lbERyb3Bkb3dufSBmcm9tICcuLi8uLi9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IG9uQ2xpY2tPdXRzaWRlIGZyb20gJ3JlYWN0LW9uY2xpY2tvdXRzaWRlJztcbmltcG9ydCB7Q29sb3JSYW5nZX0gZnJvbSAnQGtlcGxlci5nbC9jb25zdGFudHMnO1xuaW1wb3J0IHtOZXN0ZWRQYXJ0aWFsLCBSR0JDb2xvciwgQ29sb3JVSX0gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5cbnR5cGUgQ29sb3JTZWxlY3RvcklucHV0UHJvcHMgPSB7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBpbnB1dFRoZW1lPzogc3RyaW5nO1xufTtcblxudHlwZSBDb2xvclNlbGVjdG9yUHJvcHMgPSB7XG4gIGNvbG9yU2V0czoge1xuICAgIHNlbGVjdGVkQ29sb3I6IFJHQkNvbG9yIHwgQ29sb3JSYW5nZTtcbiAgICBzZXRDb2xvcjogKCh2OiBSR0JDb2xvcikgPT4gdm9pZCkgfCAoKHY6IENvbG9yUmFuZ2UpID0+IHZvaWQpO1xuICAgIGlzUmFuZ2U/OiBib29sZWFuO1xuICAgIGxhYmVsPzogc3RyaW5nO1xuICB9W107XG4gIGNvbG9yVUk/OiBDb2xvclVJO1xuICBpbnB1dFRoZW1lPzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIHNldENvbG9yVUk/OiAobmV3Q29uZmlnOiBOZXN0ZWRQYXJ0aWFsPENvbG9yVUk+KSA9PiB2b2lkO1xufTtcblxuZXhwb3J0IGNvbnN0IENvbG9yQmxvY2sgPSBzdHlsZWQuZGl2PHtiYWNrZ3JvdW5kY29sb3I6IFJHQkNvbG9yfT5gXG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBgcmdiKCR7cHJvcHMuYmFja2dyb3VuZGNvbG9yLnNsaWNlKDAsIDMpLmpvaW4oJywnKX0pYH07XG5gO1xuXG5leHBvcnQgY29uc3QgQ29sb3JTZWxlY3RvcklucHV0ID0gc3R5bGVkLmRpdjxDb2xvclNlbGVjdG9ySW5wdXRQcm9wcz5gXG4gICR7cHJvcHMgPT4gKHByb3BzLmlucHV0VGhlbWUgPT09ICdzZWNvbmRhcnknID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5SW5wdXQgOiBwcm9wcy50aGVtZS5pbnB1dCl9O1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRCb3hIZWlnaHR9O1xuXG4gIC5jb2xvci1zZWxlY3Rvcl9fc2VsZWN0b3JfX2xhYmVsIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0UGxhY2Vob2xkZXJDb2xvcn07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJbnB1dEJveENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAuY29sb3Itc2VsZWN0X19pbnB1dC1ncm91cCB7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG4gIC5jb2xvci1zZWxlY3RfX2lucHV0LWdyb3VwOm50aC1jaGlsZCgyKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIH1cbmA7XG5cbmNsYXNzIENvbG9yU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQ8Q29sb3JTZWxlY3RvclByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29sb3JTZXRzOiBbXVxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIHNob3dEcm9wZG93bjogZmFsc2VcbiAgfTtcblxuICBub2RlID0gY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xuXG4gIGhhbmRsZUNsaWNrT3V0c2lkZSA9IGUgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLmNvbG9yVUkgJiYgTnVtYmVyLmlzSW50ZWdlcih0aGlzLnByb3BzLmNvbG9yVUkuc2hvd1NrZXRjaGVyKSkge1xuICAgICAgLy8gaWYgc2tldGNoZXIgaXMgb3BlbiwgbGV0IHNrZXRjaCB0byBjbG9zZSBpdHNlbGYgZmlyc3RcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9jbG9zZVBhbmVsRHJvcGRvd24oKTtcbiAgfTtcblxuICBfZ2V0RWRpdGluZyA9ICgpID0+IHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jb2xvclVJID8gdGhpcy5wcm9wcy5jb2xvclVJLnNob3dEcm9wZG93biA6IHRoaXMuc3RhdGUuc2hvd0Ryb3Bkb3duO1xuICB9O1xuXG4gIF9jbG9zZVBhbmVsRHJvcGRvd24gPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuX2dldEVkaXRpbmcoKSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5zZXRDb2xvclVJKSB7XG4gICAgICB0aGlzLnByb3BzLnNldENvbG9yVUkoe3Nob3dEcm9wZG93bjogZmFsc2UsIHNob3dTa2V0Y2hlcjogZmFsc2V9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0Ryb3Bkb3duOiBmYWxzZX0pO1xuICAgIH1cbiAgfTtcblxuICBfb25TZWxlY3RDb2xvciA9IChjb2xvcjogUkdCQ29sb3IgfCBDb2xvclJhbmdlLCBlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGNvbnN0IGVkaXRpbmcgPSB0aGlzLl9nZXRFZGl0aW5nKCk7XG5cbiAgICBpZiAodHlwZW9mIGVkaXRpbmcgPT09ICdudW1iZXInICYmIHRoaXMucHJvcHMuY29sb3JTZXRzW2VkaXRpbmddKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLnByb3BzLmNvbG9yU2V0c1tlZGl0aW5nXS5zZXRDb2xvcihjb2xvcik7XG4gICAgfVxuICB9O1xuXG4gIF9zaG93RHJvcGRvd24gPSAoZSwgaSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuc2V0Q29sb3JVSSkge1xuICAgICAgdGhpcy5wcm9wcy5zZXRDb2xvclVJKHtzaG93RHJvcGRvd246IGl9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0Ryb3Bkb3duOiBpfSk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7Y29sb3JTZXRzLCBkaXNhYmxlZCwgaW5wdXRUaGVtZSwgY29sb3JVSX0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgZWRpdGluZyA9IHRoaXMuX2dldEVkaXRpbmcoKTtcbiAgICBjb25zdCBjdXJyZW50RWRpdGluZyA9XG4gICAgICB0eXBlb2YgZWRpdGluZyA9PT0gJ251bWJlcicgJiYgY29sb3JTZXRzW2VkaXRpbmddICYmIHR5cGVvZiBjb2xvclNldHNbZWRpdGluZ10gPT09ICdvYmplY3QnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3Itc2VsZWN0b3JcIiByZWY9e3RoaXMubm9kZX0+XG4gICAgICAgIDxJbnB1dEJveENvbnRhaW5lcj5cbiAgICAgICAgICB7Y29sb3JTZXRzLm1hcCgoY1NldCwgaSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvci1zZWxlY3RfX2lucHV0LWdyb3VwXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgPENvbG9yU2VsZWN0b3JJbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbG9yLXNlbGVjdG9yX19zZWxlY3RvclwiXG4gICAgICAgICAgICAgICAgYWN0aXZlPXtlZGl0aW5nID09PSBpfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBpbnB1dFRoZW1lPXtpbnB1dFRoZW1lfVxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHRoaXMuX3Nob3dEcm9wZG93bihlLCBpKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjU2V0LmlzUmFuZ2UgPyAoXG4gICAgICAgICAgICAgICAgICA8Q29sb3JQYWxldHRlIGNvbG9ycz17KGNTZXQuc2VsZWN0ZWRDb2xvciBhcyBDb2xvclJhbmdlKS5jb2xvcnN9IC8+XG4gICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxDb2xvckJsb2NrXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbG9yLXNlbGVjdG9yX19zZWxlY3Rvcl9fYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kY29sb3I9e2NTZXQuc2VsZWN0ZWRDb2xvciBhcyBSR0JDb2xvcn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7Y1NldC5sYWJlbCA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3Itc2VsZWN0b3JfX3NlbGVjdG9yX19sYWJlbFwiPntjU2V0LmxhYmVsfTwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L0NvbG9yU2VsZWN0b3JJbnB1dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0lucHV0Qm94Q29udGFpbmVyPlxuICAgICAgICB7Y3VycmVudEVkaXRpbmcgPyAoXG4gICAgICAgICAgPFN0eWxlZFBhbmVsRHJvcGRvd24gY2xhc3NOYW1lPVwiY29sb3Itc2VsZWN0b3JfX2Ryb3Bkb3duXCI+XG4gICAgICAgICAgICB7Y29sb3JTZXRzW2VkaXRpbmcgYXMgbnVtYmVyXS5pc1JhbmdlID8gKFxuICAgICAgICAgICAgICA8Q29sb3JSYW5nZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvclJhbmdlPXtjb2xvclNldHNbZWRpdGluZyBhcyBudW1iZXJdLnNlbGVjdGVkQ29sb3IgYXMgQ29sb3JSYW5nZX1cbiAgICAgICAgICAgICAgICBvblNlbGVjdENvbG9yUmFuZ2U9e3RoaXMuX29uU2VsZWN0Q29sb3J9XG4gICAgICAgICAgICAgICAgc2V0Q29sb3JQYWxldHRlVUk9e3RoaXMucHJvcHMuc2V0Q29sb3JVSX1cbiAgICAgICAgICAgICAgICBjb2xvclBhbGV0dGVVST17Y29sb3JVSSBhcyBDb2xvclVJfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFNpbmdsZUNvbG9yUGFsZXR0ZVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I9e3JnYlRvSGV4KGNvbG9yU2V0c1tlZGl0aW5nIGFzIG51bWJlcl0uc2VsZWN0ZWRDb2xvciBhcyBSR0JDb2xvcil9XG4gICAgICAgICAgICAgICAgb25TZWxlY3RDb2xvcj17dGhpcy5fb25TZWxlY3RDb2xvcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9TdHlsZWRQYW5lbERyb3Bkb3duPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgb25DbGlja091dHNpZGUoQ29sb3JTZWxlY3Rvcik7XG4iXX0=