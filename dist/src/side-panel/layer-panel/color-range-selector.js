"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorPaletteGroup = exports.PaletteConfig = exports["default"] = exports.ALL_STEPS = exports.ALL_TYPES = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash.uniq"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reselect = require("reselect");

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _styledComponents2 = require("../../common/styled-components");

var _switch = _interopRequireDefault(require("../../common/switch"));

var _colorPalette = _interopRequireDefault(require("./color-palette"));

var _customPalette = _interopRequireDefault(require("./custom-palette"));

var _constants = require("@kepler.gl/constants");

var _utils = require("@kepler.gl/utils");

var _localization = require("@kepler.gl/localization");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ALL_TYPES = (0, _lodash["default"])(_constants.COLOR_RANGES.map(function (c) {
  return c.type;
}).filter(function (ctype) {
  return ctype;
}).concat(['all', 'custom']));
exports.ALL_TYPES = ALL_TYPES;
var ALL_STEPS = (0, _lodash["default"])(_constants.COLOR_RANGES.map(function (d) {
  return d.colors.length;
})).sort(_utils.numberSort);
exports.ALL_STEPS = ALL_STEPS;

var StyledColorConfig = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 12px 12px 0 12px;\n"])));

var StyledColorRangeSelector = _styledComponents["default"].div.attrs({
  className: 'color-range-selector'
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  padding-bottom: 12px;\n"])));

var StyledPaletteConfig = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  .color-palette__config__label {\n    flex-grow: 1;\n  }\n  .color-palette__config__select {\n    flex-grow: 1;\n  }\n  .item-selector .item-selector__dropdown {\n    ", ";\n  }\n"])), function (props) {
  return props.theme.secondaryInput;
});

var CONFIG_SETTINGS = {
  type: {
    type: 'select',
    options: ALL_TYPES
  },
  steps: {
    type: 'select',
    options: ALL_STEPS
  },
  reversed: {
    type: 'switch',
    options: [true, false]
  },
  custom: {
    label: 'customPalette',
    type: 'switch',
    options: [true, false]
  }
};

var ColorRangeSelector = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ColorRangeSelector, _Component);

  var _super = _createSuper(ColorRangeSelector);

  function ColorRangeSelector() {
    var _this;

    (0, _classCallCheck2["default"])(this, ColorRangeSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "configTypeSelector", function (props) {
      return props.colorPaletteUI.colorRangeConfig.type;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "configStepSelector", function (props) {
      return props.colorPaletteUI.colorRangeConfig.steps;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filteredColorRange", (0, _reselect.createSelector)(_this.configTypeSelector, _this.configStepSelector, function (type, steps) {
      return _constants.COLOR_RANGES.filter(function (colorRange) {
        var isType = type === 'all' || type === colorRange.type;
        var isStep = Number(steps) === colorRange.colors.length;
        return isType && isStep;
      });
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateConfig", function (_ref) {
      var key = _ref.key,
          value = _ref.value;

      _this._setColorRangeConfig((0, _defineProperty2["default"])({}, key, value));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSetCustomPalette", function (config) {
      _this.props.setColorPaletteUI({
        customPalette: config
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setColorRangeConfig", function (newConfig) {
      _this.props.setColorPaletteUI({
        colorRangeConfig: newConfig
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onCustomPaletteCancel", function () {
      _this.props.setColorPaletteUI({
        showSketcher: false,
        colorRangeConfig: {
          custom: false
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onToggleSketcher", function (val) {
      _this.props.setColorPaletteUI({
        showSketcher: val
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(ColorRangeSelector, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$colorPale = this.props.colorPaletteUI,
          customPalette = _this$props$colorPale.customPalette,
          showSketcher = _this$props$colorPale.showSketcher,
          colorRangeConfig = _this$props$colorPale.colorRangeConfig;
      var filteredColorRanges = this.filteredColorRange(this.props);
      return /*#__PURE__*/_react["default"].createElement(StyledColorRangeSelector, null, /*#__PURE__*/_react["default"].createElement(StyledColorConfig, null, (colorRangeConfig.custom ? ['custom'] : Object.keys(colorRangeConfig)).map(function (key) {
        return /*#__PURE__*/_react["default"].createElement(PaletteConfig, {
          key: key,
          label: CONFIG_SETTINGS[key].label || key,
          config: CONFIG_SETTINGS[key],
          value: colorRangeConfig[key],
          onChange: function onChange(value) {
            return _this2._updateConfig({
              key: key,
              value: value
            });
          }
        });
      })), colorRangeConfig.custom ? /*#__PURE__*/_react["default"].createElement(_customPalette["default"], {
        customPalette: customPalette,
        showSketcher: showSketcher,
        onApply: this.props.onSelectColorRange,
        onToggleSketcher: this._onToggleSketcher,
        setCustomPalette: this._onSetCustomPalette,
        onCancel: this._onCustomPaletteCancel
      }) : /*#__PURE__*/_react["default"].createElement(ColorPaletteGroup, {
        colorRanges: filteredColorRanges,
        onSelect: this.props.onSelectColorRange,
        selected: this.props.selectedColorRange,
        reversed: colorRangeConfig.reversed
      }));
    }
  }]);
  return ColorRangeSelector;
}(_react.Component);

exports["default"] = ColorRangeSelector;
(0, _defineProperty2["default"])(ColorRangeSelector, "defaultProps", {
  onSelectColorRange: function onSelectColorRange() {},
  setColorPaletteUI: function setColorPaletteUI() {}
});

var PaletteConfig = function PaletteConfig(_ref2) {
  var label = _ref2.label,
      value = _ref2.value,
      _ref2$config = _ref2.config,
      type = _ref2$config.type,
      options = _ref2$config.options,
      _onChange = _ref2.onChange;
  return /*#__PURE__*/_react["default"].createElement(StyledPaletteConfig, {
    className: "color-palette__config",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "color-palette__config__label"
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: "color.".concat(label)
  }))), type === 'select' && /*#__PURE__*/_react["default"].createElement("div", {
    className: "color-palette__config__select"
  }, /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
    selectedItems: value,
    options: options,
    multiSelect: false,
    searchable: false,
    onChange: _onChange
  })), type === 'switch' && /*#__PURE__*/_react["default"].createElement(_switch["default"], {
    checked: value,
    id: "".concat(label, "-toggle"),
    onChange: function onChange() {
      return _onChange(!value);
    },
    secondary: true
  }));
};

exports.PaletteConfig = PaletteConfig;

var StyledColorRange = _styledComponents["default"].div.attrs({
  className: 'color-palette-outer'
})(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 0 8px;\n  :hover {\n    background-color: ", ";\n    cursor: pointer;\n  }\n"])), function (props) {
  return props.theme.panelBackgroundHover;
});

var ColorPaletteGroup = function ColorPaletteGroup(_ref3) {
  var reversed = _ref3.reversed,
      onSelect = _ref3.onSelect,
      selected = _ref3.selected,
      colorRanges = _ref3.colorRanges;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "color-palette__group"
  }, colorRanges.map(function (colorRange, i) {
    return /*#__PURE__*/_react["default"].createElement(StyledColorRange, {
      key: "".concat(colorRange.name, "-").concat(i),
      onClick: function onClick(e) {
        return onSelect(reversed ? (0, _utils.reverseColorRange)(true, colorRange) : colorRange, e);
      }
    }, /*#__PURE__*/_react["default"].createElement(_colorPalette["default"], {
      colors: colorRange.colors,
      isReversed: reversed,
      isSelected: colorRange.name === selected.name && reversed === Boolean(selected.reversed)
    }));
  }));
};

exports.ColorPaletteGroup = ColorPaletteGroup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2xheWVyLXBhbmVsL2NvbG9yLXJhbmdlLXNlbGVjdG9yLnRzeCJdLCJuYW1lcyI6WyJBTExfVFlQRVMiLCJDT0xPUl9SQU5HRVMiLCJtYXAiLCJjIiwidHlwZSIsImZpbHRlciIsImN0eXBlIiwiY29uY2F0IiwiQUxMX1NURVBTIiwiZCIsImNvbG9ycyIsImxlbmd0aCIsInNvcnQiLCJudW1iZXJTb3J0IiwiU3R5bGVkQ29sb3JDb25maWciLCJzdHlsZWQiLCJkaXYiLCJTdHlsZWRDb2xvclJhbmdlU2VsZWN0b3IiLCJhdHRycyIsImNsYXNzTmFtZSIsIlN0eWxlZFBhbGV0dGVDb25maWciLCJwcm9wcyIsInRoZW1lIiwic2Vjb25kYXJ5SW5wdXQiLCJDT05GSUdfU0VUVElOR1MiLCJvcHRpb25zIiwic3RlcHMiLCJyZXZlcnNlZCIsImN1c3RvbSIsImxhYmVsIiwiQ29sb3JSYW5nZVNlbGVjdG9yIiwiY29sb3JQYWxldHRlVUkiLCJjb2xvclJhbmdlQ29uZmlnIiwiY29uZmlnVHlwZVNlbGVjdG9yIiwiY29uZmlnU3RlcFNlbGVjdG9yIiwiY29sb3JSYW5nZSIsImlzVHlwZSIsImlzU3RlcCIsIk51bWJlciIsImtleSIsInZhbHVlIiwiX3NldENvbG9yUmFuZ2VDb25maWciLCJjb25maWciLCJzZXRDb2xvclBhbGV0dGVVSSIsImN1c3RvbVBhbGV0dGUiLCJuZXdDb25maWciLCJzaG93U2tldGNoZXIiLCJ2YWwiLCJmaWx0ZXJlZENvbG9yUmFuZ2VzIiwiZmlsdGVyZWRDb2xvclJhbmdlIiwiT2JqZWN0Iiwia2V5cyIsIl91cGRhdGVDb25maWciLCJvblNlbGVjdENvbG9yUmFuZ2UiLCJfb25Ub2dnbGVTa2V0Y2hlciIsIl9vblNldEN1c3RvbVBhbGV0dGUiLCJfb25DdXN0b21QYWxldHRlQ2FuY2VsIiwic2VsZWN0ZWRDb2xvclJhbmdlIiwiQ29tcG9uZW50IiwiUGFsZXR0ZUNvbmZpZyIsIm9uQ2hhbmdlIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIlN0eWxlZENvbG9yUmFuZ2UiLCJwYW5lbEJhY2tncm91bmRIb3ZlciIsIkNvbG9yUGFsZXR0ZUdyb3VwIiwib25TZWxlY3QiLCJzZWxlY3RlZCIsImNvbG9yUmFuZ2VzIiwiaSIsIm5hbWUiLCJCb29sZWFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBMkJPLElBQU1BLFNBQW1CLEdBQUcsd0JBQ2pDQyx3QkFBYUMsR0FBYixDQUFpQixVQUFBQyxDQUFDO0FBQUEsU0FBSUEsQ0FBQyxDQUFDQyxJQUFOO0FBQUEsQ0FBbEIsRUFDR0MsTUFESCxDQUNVLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFKO0FBQUEsQ0FEZixFQUVHQyxNQUZILENBRVUsQ0FBQyxLQUFELEVBQVEsUUFBUixDQUZWLENBRGlDLENBQTVCOztBQU1BLElBQU1DLFNBQW1CLEdBQUcsd0JBQUtQLHdCQUFhQyxHQUFiLENBQWlCLFVBQUFPLENBQUM7QUFBQSxTQUFJQSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsTUFBYjtBQUFBLENBQWxCLENBQUwsRUFBNkNDLElBQTdDLENBQWtEQyxpQkFBbEQsQ0FBNUI7OztBQUVQLElBQU1DLGlCQUFpQixHQUFHQyw2QkFBT0MsR0FBVixzSEFBdkI7O0FBSUEsSUFBTUMsd0JBQXdCLEdBQUdGLDZCQUFPQyxHQUFQLENBQVdFLEtBQVgsQ0FBaUI7QUFDaERDLEVBQUFBLFNBQVMsRUFBRTtBQURxQyxDQUFqQixDQUFILG1IQUE5Qjs7QUFNQSxJQUFNQyxtQkFBbUIsR0FBR0wsNkJBQU9DLEdBQVYsbVhBWW5CLFVBQUFLLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsY0FBaEI7QUFBQSxDQVpjLENBQXpCOztBQWdCQSxJQUFNQyxlQUFl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QW9CSCxRQUFRLENBQUNHLElBQTdCLElBQXFDM0MsUUFBUSxLQUFLNEMsT0FBTyxDQUFDSixRQUFRLENBQUN4QyxRQUFWO0FBSHZFLE1BTkYsQ0FEZTtBQUFBLEdBQWhCLENBREgsQ0FOaUU7QUFBQSxDQUE1RCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgTW91c2VFdmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVuaXEgZnJvbSAnbG9kYXNoLnVuaXEnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5cbmltcG9ydCBJdGVtU2VsZWN0b3IgZnJvbSAnLi4vLi4vY29tbW9uL2l0ZW0tc2VsZWN0b3IvaXRlbS1zZWxlY3Rvcic7XG5pbXBvcnQge1BhbmVsTGFiZWx9IGZyb20gJy4uLy4uL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJy4uLy4uL2NvbW1vbi9zd2l0Y2gnO1xuaW1wb3J0IENvbG9yUGFsZXR0ZSBmcm9tICcuL2NvbG9yLXBhbGV0dGUnO1xuaW1wb3J0IEN1c3RvbVBhbGV0dGUgZnJvbSAnLi9jdXN0b20tcGFsZXR0ZSc7XG5pbXBvcnQge0NPTE9SX1JBTkdFUywgQ29sb3JSYW5nZX0gZnJvbSAnQGtlcGxlci5nbC9jb25zdGFudHMnO1xuaW1wb3J0IHtyZXZlcnNlQ29sb3JSYW5nZSwgbnVtYmVyU29ydH0gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ0BrZXBsZXIuZ2wvbG9jYWxpemF0aW9uJztcbmltcG9ydCB7TmVzdGVkUGFydGlhbCwgQ29sb3JVSX0gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5cbnR5cGUgQ29sb3JSYW5nZVNlbGVjdG9yUHJvcHMgPSB7XG4gIGNvbG9yUGFsZXR0ZVVJOiBDb2xvclVJO1xuICBzZWxlY3RlZENvbG9yUmFuZ2U6IENvbG9yUmFuZ2U7XG4gIG9uU2VsZWN0Q29sb3JSYW5nZTogKHA6IENvbG9yUmFuZ2UsIGU6IE1vdXNlRXZlbnQpID0+IHZvaWQ7XG4gIHNldENvbG9yUGFsZXR0ZVVJOiAobmV3Q29uZmlnOiBOZXN0ZWRQYXJ0aWFsPENvbG9yVUk+KSA9PiB2b2lkO1xufTtcblxudHlwZSBQYWxldHRlQ29uZmlnUHJvcHMgPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xuICBjb25maWc6IHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgb3B0aW9uczogKHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4pW107XG4gIH07XG4gIG9uQ2hhbmdlOiAodjogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IG9iamVjdCB8IG51bGwpID0+IHZvaWQ7XG59O1xuXG50eXBlIENvbG9yUGFsZXR0ZUdyb3VwUHJvcHMgPSB7XG4gIHJldmVyc2VkPzogYm9vbGVhbjtcbiAgc2VsZWN0ZWQ6IENvbG9yUmFuZ2U7XG4gIGNvbG9yUmFuZ2VzOiBDb2xvclJhbmdlW107XG4gIG9uU2VsZWN0OiAocDogQ29sb3JSYW5nZSwgZTogTW91c2VFdmVudCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBjb25zdCBBTExfVFlQRVM6IHN0cmluZ1tdID0gdW5pcShcbiAgQ09MT1JfUkFOR0VTLm1hcChjID0+IGMudHlwZSlcbiAgICAuZmlsdGVyKGN0eXBlID0+IGN0eXBlKVxuICAgIC5jb25jYXQoWydhbGwnLCAnY3VzdG9tJ10pIGFzIHN0cmluZ1tdXG4pO1xuXG5leHBvcnQgY29uc3QgQUxMX1NURVBTOiBudW1iZXJbXSA9IHVuaXEoQ09MT1JfUkFOR0VTLm1hcChkID0+IGQuY29sb3JzLmxlbmd0aCkpLnNvcnQobnVtYmVyU29ydCk7XG5cbmNvbnN0IFN0eWxlZENvbG9yQ29uZmlnID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMTJweCAxMnB4IDAgMTJweDtcbmA7XG5cbmNvbnN0IFN0eWxlZENvbG9yUmFuZ2VTZWxlY3RvciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdjb2xvci1yYW5nZS1zZWxlY3Rvcidcbn0pYFxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbmA7XG5cbmNvbnN0IFN0eWxlZFBhbGV0dGVDb25maWcgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLmNvbG9yLXBhbGV0dGVfX2NvbmZpZ19fbGFiZWwge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAuY29sb3ItcGFsZXR0ZV9fY29uZmlnX19zZWxlY3Qge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAuaXRlbS1zZWxlY3RvciAuaXRlbS1zZWxlY3Rvcl9fZHJvcGRvd24ge1xuICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5SW5wdXR9O1xuICB9XG5gO1xuXG5jb25zdCBDT05GSUdfU0VUVElOR1MgPSB7XG4gIHR5cGU6IHtcbiAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICBvcHRpb25zOiBBTExfVFlQRVNcbiAgfSxcbiAgc3RlcHM6IHtcbiAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICBvcHRpb25zOiBBTExfU1RFUFNcbiAgfSxcbiAgcmV2ZXJzZWQ6IHtcbiAgICB0eXBlOiAnc3dpdGNoJyxcbiAgICBvcHRpb25zOiBbdHJ1ZSwgZmFsc2VdXG4gIH0sXG4gIGN1c3RvbToge1xuICAgIGxhYmVsOiAnY3VzdG9tUGFsZXR0ZScsXG4gICAgdHlwZTogJ3N3aXRjaCcsXG4gICAgb3B0aW9uczogW3RydWUsIGZhbHNlXVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvclJhbmdlU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQ8Q29sb3JSYW5nZVNlbGVjdG9yUHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvblNlbGVjdENvbG9yUmFuZ2U6ICgpID0+IHt9LFxuICAgIHNldENvbG9yUGFsZXR0ZVVJOiAoKSA9PiB7fVxuICB9O1xuXG4gIGNvbmZpZ1R5cGVTZWxlY3RvciA9IChwcm9wczogQ29sb3JSYW5nZVNlbGVjdG9yUHJvcHMpID0+XG4gICAgcHJvcHMuY29sb3JQYWxldHRlVUkuY29sb3JSYW5nZUNvbmZpZy50eXBlO1xuICBjb25maWdTdGVwU2VsZWN0b3IgPSAocHJvcHM6IENvbG9yUmFuZ2VTZWxlY3RvclByb3BzKSA9PlxuICAgIHByb3BzLmNvbG9yUGFsZXR0ZVVJLmNvbG9yUmFuZ2VDb25maWcuc3RlcHM7XG4gIGZpbHRlcmVkQ29sb3JSYW5nZSA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgIHRoaXMuY29uZmlnVHlwZVNlbGVjdG9yLFxuICAgIHRoaXMuY29uZmlnU3RlcFNlbGVjdG9yLFxuICAgICh0eXBlLCBzdGVwcykgPT4ge1xuICAgICAgcmV0dXJuIENPTE9SX1JBTkdFUy5maWx0ZXIoY29sb3JSYW5nZSA9PiB7XG4gICAgICAgIGNvbnN0IGlzVHlwZSA9IHR5cGUgPT09ICdhbGwnIHx8IHR5cGUgPT09IGNvbG9yUmFuZ2UudHlwZTtcbiAgICAgICAgY29uc3QgaXNTdGVwID0gTnVtYmVyKHN0ZXBzKSA9PT0gY29sb3JSYW5nZS5jb2xvcnMubGVuZ3RoO1xuXG4gICAgICAgIHJldHVybiBpc1R5cGUgJiYgaXNTdGVwO1xuICAgICAgfSk7XG4gICAgfVxuICApO1xuXG4gIF91cGRhdGVDb25maWcgPSAoe1xuICAgIGtleSxcbiAgICB2YWx1ZVxuICB9OiB7XG4gICAga2V5OiBzdHJpbmc7XG4gICAgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBvYmplY3QgfCBudWxsO1xuICB9KSA9PiB7XG4gICAgdGhpcy5fc2V0Q29sb3JSYW5nZUNvbmZpZyh7W2tleV06IHZhbHVlfSk7XG4gIH07XG5cbiAgX29uU2V0Q3VzdG9tUGFsZXR0ZSA9IChjb25maWc6IE5lc3RlZFBhcnRpYWw8Q29sb3JSYW5nZT4pID0+IHtcbiAgICB0aGlzLnByb3BzLnNldENvbG9yUGFsZXR0ZVVJKHtcbiAgICAgIGN1c3RvbVBhbGV0dGU6IGNvbmZpZ1xuICAgIH0pO1xuICB9O1xuXG4gIF9zZXRDb2xvclJhbmdlQ29uZmlnID0gKG5ld0NvbmZpZzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IG9iamVjdCB8IG51bGw+KSA9PiB7XG4gICAgdGhpcy5wcm9wcy5zZXRDb2xvclBhbGV0dGVVSSh7XG4gICAgICBjb2xvclJhbmdlQ29uZmlnOiBuZXdDb25maWdcbiAgICB9KTtcbiAgfTtcblxuICBfb25DdXN0b21QYWxldHRlQ2FuY2VsID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuc2V0Q29sb3JQYWxldHRlVUkoe1xuICAgICAgc2hvd1NrZXRjaGVyOiBmYWxzZSxcbiAgICAgIGNvbG9yUmFuZ2VDb25maWc6IHtjdXN0b206IGZhbHNlfVxuICAgIH0pO1xuICB9O1xuXG4gIF9vblRvZ2dsZVNrZXRjaGVyID0gKHZhbDogYm9vbGVhbiB8IG51bWJlcikgPT4ge1xuICAgIHRoaXMucHJvcHMuc2V0Q29sb3JQYWxldHRlVUkoe1xuICAgICAgc2hvd1NrZXRjaGVyOiB2YWxcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2N1c3RvbVBhbGV0dGUsIHNob3dTa2V0Y2hlciwgY29sb3JSYW5nZUNvbmZpZ30gPSB0aGlzLnByb3BzLmNvbG9yUGFsZXR0ZVVJO1xuXG4gICAgY29uc3QgZmlsdGVyZWRDb2xvclJhbmdlcyA9IHRoaXMuZmlsdGVyZWRDb2xvclJhbmdlKHRoaXMucHJvcHMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRDb2xvclJhbmdlU2VsZWN0b3I+XG4gICAgICAgIDxTdHlsZWRDb2xvckNvbmZpZz5cbiAgICAgICAgICB7KGNvbG9yUmFuZ2VDb25maWcuY3VzdG9tID8gWydjdXN0b20nXSA6IE9iamVjdC5rZXlzKGNvbG9yUmFuZ2VDb25maWcpKS5tYXAoa2V5ID0+IChcbiAgICAgICAgICAgIDxQYWxldHRlQ29uZmlnXG4gICAgICAgICAgICAgIGtleT17a2V5fVxuICAgICAgICAgICAgICBsYWJlbD17Q09ORklHX1NFVFRJTkdTW2tleV0ubGFiZWwgfHwga2V5fVxuICAgICAgICAgICAgICBjb25maWc9e0NPTkZJR19TRVRUSU5HU1trZXldfVxuICAgICAgICAgICAgICB2YWx1ZT17Y29sb3JSYW5nZUNvbmZpZ1trZXldfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5fdXBkYXRlQ29uZmlnKHtrZXksIHZhbHVlfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0eWxlZENvbG9yQ29uZmlnPlxuXG4gICAgICAgIHtjb2xvclJhbmdlQ29uZmlnLmN1c3RvbSA/IChcbiAgICAgICAgICA8Q3VzdG9tUGFsZXR0ZVxuICAgICAgICAgICAgY3VzdG9tUGFsZXR0ZT17Y3VzdG9tUGFsZXR0ZX1cbiAgICAgICAgICAgIHNob3dTa2V0Y2hlcj17c2hvd1NrZXRjaGVyfVxuICAgICAgICAgICAgb25BcHBseT17dGhpcy5wcm9wcy5vblNlbGVjdENvbG9yUmFuZ2V9XG4gICAgICAgICAgICBvblRvZ2dsZVNrZXRjaGVyPXt0aGlzLl9vblRvZ2dsZVNrZXRjaGVyfVxuICAgICAgICAgICAgc2V0Q3VzdG9tUGFsZXR0ZT17dGhpcy5fb25TZXRDdXN0b21QYWxldHRlfVxuICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuX29uQ3VzdG9tUGFsZXR0ZUNhbmNlbH1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxDb2xvclBhbGV0dGVHcm91cFxuICAgICAgICAgICAgY29sb3JSYW5nZXM9e2ZpbHRlcmVkQ29sb3JSYW5nZXN9XG4gICAgICAgICAgICBvblNlbGVjdD17dGhpcy5wcm9wcy5vblNlbGVjdENvbG9yUmFuZ2V9XG4gICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5wcm9wcy5zZWxlY3RlZENvbG9yUmFuZ2V9XG4gICAgICAgICAgICByZXZlcnNlZD17Y29sb3JSYW5nZUNvbmZpZy5yZXZlcnNlZH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9TdHlsZWRDb2xvclJhbmdlU2VsZWN0b3I+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgUGFsZXR0ZUNvbmZpZzogUmVhY3QuRkM8UGFsZXR0ZUNvbmZpZ1Byb3BzPiA9ICh7XG4gIGxhYmVsLFxuICB2YWx1ZSxcbiAgY29uZmlnOiB7dHlwZSwgb3B0aW9uc30sXG4gIG9uQ2hhbmdlXG59KSA9PiAoXG4gIDxTdHlsZWRQYWxldHRlQ29uZmlnIGNsYXNzTmFtZT1cImNvbG9yLXBhbGV0dGVfX2NvbmZpZ1wiIG9uQ2xpY2s9e2UgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvci1wYWxldHRlX19jb25maWdfX2xhYmVsXCI+XG4gICAgICA8UGFuZWxMYWJlbD5cbiAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e2Bjb2xvci4ke2xhYmVsfWB9IC8+XG4gICAgICA8L1BhbmVsTGFiZWw+XG4gICAgPC9kaXY+XG4gICAge3R5cGUgPT09ICdzZWxlY3QnICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3ItcGFsZXR0ZV9fY29uZmlnX19zZWxlY3RcIj5cbiAgICAgICAgPEl0ZW1TZWxlY3RvclxuICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3ZhbHVlfVxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgbXVsdGlTZWxlY3Q9e2ZhbHNlfVxuICAgICAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gICAge3R5cGUgPT09ICdzd2l0Y2gnICYmIChcbiAgICAgIDxTd2l0Y2hcbiAgICAgICAgY2hlY2tlZD17dmFsdWUgYXMgYm9vbGVhbn1cbiAgICAgICAgaWQ9e2Ake2xhYmVsfS10b2dnbGVgfVxuICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2UoIXZhbHVlKX1cbiAgICAgICAgc2Vjb25kYXJ5XG4gICAgICAvPlxuICAgICl9XG4gIDwvU3R5bGVkUGFsZXR0ZUNvbmZpZz5cbik7XG5cbmNvbnN0IFN0eWxlZENvbG9yUmFuZ2UgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnY29sb3ItcGFsZXR0ZS1vdXRlcidcbn0pYFxuICBwYWRkaW5nOiAwIDhweDtcbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyfTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb2xvclBhbGV0dGVHcm91cDogUmVhY3QuRkM8Q29sb3JQYWxldHRlR3JvdXBQcm9wcz4gPSAoe1xuICByZXZlcnNlZCxcbiAgb25TZWxlY3QsXG4gIHNlbGVjdGVkLFxuICBjb2xvclJhbmdlc1xufSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yLXBhbGV0dGVfX2dyb3VwXCI+XG4gICAge2NvbG9yUmFuZ2VzLm1hcCgoY29sb3JSYW5nZSwgaSkgPT4gKFxuICAgICAgPFN0eWxlZENvbG9yUmFuZ2VcbiAgICAgICAga2V5PXtgJHtjb2xvclJhbmdlLm5hbWV9LSR7aX1gfVxuICAgICAgICBvbkNsaWNrPXtlID0+XG4gICAgICAgICAgb25TZWxlY3QocmV2ZXJzZWQgPyAocmV2ZXJzZUNvbG9yUmFuZ2UodHJ1ZSwgY29sb3JSYW5nZSkgYXMgQ29sb3JSYW5nZSkgOiBjb2xvclJhbmdlLCBlKVxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxDb2xvclBhbGV0dGVcbiAgICAgICAgICBjb2xvcnM9e2NvbG9yUmFuZ2UuY29sb3JzfVxuICAgICAgICAgIGlzUmV2ZXJzZWQ9e3JldmVyc2VkfVxuICAgICAgICAgIGlzU2VsZWN0ZWQ9e2NvbG9yUmFuZ2UubmFtZSA9PT0gc2VsZWN0ZWQubmFtZSAmJiByZXZlcnNlZCA9PT0gQm9vbGVhbihzZWxlY3RlZC5yZXZlcnNlZCl9XG4gICAgICAgIC8+XG4gICAgICA8L1N0eWxlZENvbG9yUmFuZ2U+XG4gICAgKSl9XG4gIDwvZGl2PlxuKTtcbiJdfQ==