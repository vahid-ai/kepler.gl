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

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _chickletedInput = require("../../../common/item-selector/chickleted-input");

var _icons = require("../../../common/icons");

var _dropdownList = _interopRequireDefault(require("../../../common/item-selector/dropdown-list"));

var _localization = require("@kepler.gl/localization");

var _utils = require("@kepler.gl/utils");

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _tippyTooltip = _interopRequireDefault(require("../../../common/tippy-tooltip"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ChickletAddonWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n"])));

var ChickletAddon = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-right: 4px;\n"])));

var StyledPopover = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: -64px;\n  position: absolute;\n  top: 20px;\n  width: 140px;\n  z-index: 101;\n"])));

var hashStyles = {
  SHOW: 'SHOW',
  ACTIVE: 'ACTIVE'
};

var IconDiv = _styledComponents["default"].div.attrs({
  className: 'tooltip-chicklet__icon'
})(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n"])), function (props) {
  return props.status === hashStyles.SHOW ? props.theme.subtextColorActive : props.status === hashStyles.ACTIVE ? props.theme.activeColor : props.theme.textColor;
});

function getFormatTooltip(formatLabels, format) {
  if (!format) {
    return null;
  }

  var formatLabel = formatLabels.find(function (fl) {
    return (0, _utils.getFormatValue)(fl) === format;
  });

  if (formatLabel) {
    return formatLabel.label;
  }

  return (0, _typeof2["default"])(format) === 'object' ? JSON.stringify(format, null, 2) : String(format);
}

function TooltipChickletFactory(dataId, config, onChange, fields, onDisplayFormatChange) {
  var TooltipChicklet = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(TooltipChicklet, _Component);

    var _super = _createSuper(TooltipChicklet);

    function TooltipChicklet() {
      var _this;

      (0, _classCallCheck2["default"])(this, TooltipChicklet);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        show: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "node", void 0);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function (e) {
        if (_this.node.contains(e.target)) {
          return;
        }
      });
      return _this;
    }

    (0, _createClass2["default"])(TooltipChicklet, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside, false);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside, false);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            disabled = _this$props.disabled,
            item = _this$props.item,
            displayOption = _this$props.displayOption,
            remove = _this$props.remove;
        var show = this.state.show;
        var tooltipField = config.fieldsToShow[dataId].find(function (fieldToShow) {
          return fieldToShow.name === item.name;
        });

        if (!tooltipField) {
          return null;
        }

        var field = fields.find(function (f) {
          return f.name === tooltipField.name;
        });

        if (!field) {
          return null;
        }

        var formatLabels = (0, _utils.getFormatLabels)(fields, tooltipField.name);
        var hasFormat = Boolean(field.displayFormat);
        var selectionIndex = formatLabels.findIndex(function (fl) {
          return (0, _utils.getFormatValue)(fl) === field.displayFormat;
        });
        var hashStyle = show ? hashStyles.SHOW : hasFormat ? hashStyles.ACTIVE : null;
        return /*#__PURE__*/_react["default"].createElement(_chickletedInput.ChickletButton, {
          ref: function ref(node) {
            return _this2.node = node;
          }
        }, /*#__PURE__*/_react["default"].createElement(_chickletedInput.ChickletTag, null, displayOption(item)), formatLabels.length > 1 && /*#__PURE__*/_react["default"].createElement(ChickletAddonWrapper, null, /*#__PURE__*/_react["default"].createElement(_tippyTooltip["default"], {
          placement: "top",
          render: function render() {
            return /*#__PURE__*/_react["default"].createElement("span", null, hasFormat ? getFormatTooltip(formatLabels, field.displayName) : /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
              id: 'fieldSelector.formatting'
            }));
          }
        }, /*#__PURE__*/_react["default"].createElement(ChickletAddon, null, /*#__PURE__*/_react["default"].createElement(IconDiv, {
          status: hashStyle
        }, /*#__PURE__*/_react["default"].createElement(_icons.Hash, {
          height: "8px",
          onClick: function onClick(e) {
            e.stopPropagation();

            _this2.setState({
              show: Boolean(!show)
            });
          }
        })))), show && /*#__PURE__*/_react["default"].createElement(StyledPopover, null, /*#__PURE__*/_react["default"].createElement(_dropdownList["default"], {
          options: formatLabels,
          selectionIndex: selectionIndex,
          displayOption: function displayOption(_ref) {
            var label = _ref.label;
            return label;
          },
          onOptionSelected: function onOptionSelected(result, e) {
            e.stopPropagation();

            _this2.setState({
              show: false
            });

            var displayFormat = (0, _utils.getFormatValue)(result);
            var oldFieldsToShow = config.fieldsToShow[dataId];
            var fieldsToShow = oldFieldsToShow.map(function (fieldToShow) {
              return fieldToShow.name === tooltipField.name ? {
                name: tooltipField.name,
                format: displayFormat
              } : fieldToShow;
            });

            var newConfig = _objectSpread(_objectSpread({}, config), {}, {
              fieldsToShow: _objectSpread(_objectSpread({}, config.fieldsToShow), {}, (0, _defineProperty2["default"])({}, dataId, fieldsToShow))
            });

            onChange(newConfig);
            onDisplayFormatChange(dataId, field.name, displayFormat);
          }
        }))), /*#__PURE__*/_react["default"].createElement(_icons.Delete, {
          onClick: disabled ? null : remove
        }));
      }
    }]);
    return TooltipChicklet;
  }(_react.Component);

  return (0, _reactOnclickoutside["default"])(TooltipChicklet);
}

var _default = TooltipChickletFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2ludGVyYWN0aW9uLXBhbmVsL3Rvb2x0aXAtY29uZmlnL3Rvb2x0aXAtY2hpY2tsZXQudHN4Il0sIm5hbWVzIjpbIkNoaWNrbGV0QWRkb25XcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiQ2hpY2tsZXRBZGRvbiIsIlN0eWxlZFBvcG92ZXIiLCJoYXNoU3R5bGVzIiwiU0hPVyIsIkFDVElWRSIsIkljb25EaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsInByb3BzIiwic3RhdHVzIiwidGhlbWUiLCJzdWJ0ZXh0Q29sb3JBY3RpdmUiLCJhY3RpdmVDb2xvciIsInRleHRDb2xvciIsImdldEZvcm1hdFRvb2x0aXAiLCJmb3JtYXRMYWJlbHMiLCJmb3JtYXQiLCJmb3JtYXRMYWJlbCIsImZpbmQiLCJmbCIsImxhYmVsIiwiSlNPTiIsInN0cmluZ2lmeSIsIlN0cmluZyIsIlRvb2x0aXBDaGlja2xldEZhY3RvcnkiLCJkYXRhSWQiLCJjb25maWciLCJvbkNoYW5nZSIsImZpZWxkcyIsIm9uRGlzcGxheUZvcm1hdENoYW5nZSIsIlRvb2x0aXBDaGlja2xldCIsInNob3ciLCJlIiwibm9kZSIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc2FibGVkIiwiaXRlbSIsImRpc3BsYXlPcHRpb24iLCJyZW1vdmUiLCJzdGF0ZSIsInRvb2x0aXBGaWVsZCIsImZpZWxkc1RvU2hvdyIsImZpZWxkVG9TaG93IiwibmFtZSIsImZpZWxkIiwiZiIsImhhc0Zvcm1hdCIsIkJvb2xlYW4iLCJkaXNwbGF5Rm9ybWF0Iiwic2VsZWN0aW9uSW5kZXgiLCJmaW5kSW5kZXgiLCJoYXNoU3R5bGUiLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsInN0b3BQcm9wYWdhdGlvbiIsInNldFN0YXRlIiwicmVzdWx0Iiwib2xkRmllbGRzVG9TaG93IiwibWFwIiwibmV3Q29uZmlnIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBcUJBLElBQU1BLG9CQUFvQixHQUFHQyw2QkFBT0MsR0FBViwrR0FBMUI7O0FBSUEsSUFBTUMsYUFBYSxHQUFHRiw2QkFBT0MsR0FBVixnSEFBbkI7O0FBSUEsSUFBTUUsYUFBYSxHQUFHSCw2QkFBT0MsR0FBVix3TEFBbkI7O0FBUUEsSUFBTUcsVUFBVSxHQUFHO0FBQ2pCQyxFQUFBQSxJQUFJLEVBQUUsTUFEVztBQUVqQkMsRUFBQUEsTUFBTSxFQUFFO0FBRlMsQ0FBbkI7O0FBS0EsSUFBTUMsT0FBTyxHQUFHUCw2QkFBT0MsR0FBUCxDQUFXTyxLQUFYLENBQWlCO0FBQy9CQyxFQUFBQSxTQUFTLEVBQUU7QUFEb0IsQ0FBakIsQ0FBSCwyR0FHRixVQUFBQyxLQUFLO0FBQUEsU0FDWkEsS0FBSyxDQUFDQyxNQUFOLEtBQWlCUCxVQUFVLENBQUNDLElBQTVCLEdBQ0lLLEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxrQkFEaEIsR0FFSUgsS0FBSyxDQUFDQyxNQUFOLEtBQWlCUCxVQUFVLENBQUNFLE1BQTVCLEdBQ0FJLEtBQUssQ0FBQ0UsS0FBTixDQUFZRSxXQURaLEdBRUFKLEtBQUssQ0FBQ0UsS0FBTixDQUFZRyxTQUxKO0FBQUEsQ0FISCxDQUFiOztBQVdBLFNBQVNDLGdCQUFULENBQTBCQyxZQUExQixFQUEyREMsTUFBM0QsRUFBa0Y7QUFDaEYsTUFBSSxDQUFDQSxNQUFMLEVBQWE7QUFDWCxXQUFPLElBQVA7QUFDRDs7QUFDRCxNQUFNQyxXQUFXLEdBQUdGLFlBQVksQ0FBQ0csSUFBYixDQUFrQixVQUFBQyxFQUFFO0FBQUEsV0FBSSwyQkFBZUEsRUFBZixNQUF1QkgsTUFBM0I7QUFBQSxHQUFwQixDQUFwQjs7QUFDQSxNQUFJQyxXQUFKLEVBQWlCO0FBQ2YsV0FBT0EsV0FBVyxDQUFDRyxLQUFuQjtBQUNEOztBQUNELFNBQU8seUJBQU9KLE1BQVAsTUFBa0IsUUFBbEIsR0FBNkJLLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixNQUFmLEVBQXVCLElBQXZCLEVBQTZCLENBQTdCLENBQTdCLEdBQStETyxNQUFNLENBQUNQLE1BQUQsQ0FBNUU7QUFDRDs7QUFFRCxTQUFTUSxzQkFBVCxDQUNFQyxNQURGLEVBRUVDLE1BRkYsRUFHRUMsUUFIRixFQUlFQyxNQUpGLEVBS0VDLHFCQUxGLEVBTXVDO0FBQUEsTUFDL0JDLGVBRCtCO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxnR0FFM0I7QUFDTkMsUUFBQUEsSUFBSSxFQUFFO0FBREEsT0FGMkI7QUFBQTtBQUFBLDZHQWVkLFVBQUNDLENBQUQsRUFBWTtBQUMvQixZQUFJLE1BQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQkYsQ0FBQyxDQUFDRyxNQUFyQixDQUFKLEVBQWtDO0FBQ2hDO0FBQ0Q7QUFDRixPQW5Ca0M7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxhQU9uQyw2QkFBb0I7QUFDbEJDLFFBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsS0FBS0Msa0JBQTVDLEVBQWdFLEtBQWhFO0FBQ0Q7QUFUa0M7QUFBQTtBQUFBLGFBV25DLGdDQUF1QjtBQUNyQkYsUUFBQUEsUUFBUSxDQUFDRyxtQkFBVCxDQUE2QixXQUE3QixFQUEwQyxLQUFLRCxrQkFBL0MsRUFBbUUsS0FBbkU7QUFDRDtBQWJrQztBQUFBO0FBQUEsYUFxQm5DLGtCQUFTO0FBQUE7O0FBQUEsMEJBQ3lDLEtBQUs5QixLQUQ5QztBQUFBLFlBQ0FnQyxRQURBLGVBQ0FBLFFBREE7QUFBQSxZQUNVQyxJQURWLGVBQ1VBLElBRFY7QUFBQSxZQUNnQkMsYUFEaEIsZUFDZ0JBLGFBRGhCO0FBQUEsWUFDK0JDLE1BRC9CLGVBQytCQSxNQUQvQjtBQUFBLFlBRUFaLElBRkEsR0FFUSxLQUFLYSxLQUZiLENBRUFiLElBRkE7QUFHUCxZQUFNYyxZQUFZLEdBQUduQixNQUFNLENBQUNvQixZQUFQLENBQW9CckIsTUFBcEIsRUFBNEJQLElBQTVCLENBQ25CLFVBQUE2QixXQUFXO0FBQUEsaUJBQUlBLFdBQVcsQ0FBQ0MsSUFBWixLQUFxQlAsSUFBSSxDQUFDTyxJQUE5QjtBQUFBLFNBRFEsQ0FBckI7O0FBR0EsWUFBSSxDQUFDSCxZQUFMLEVBQW1CO0FBQ2pCLGlCQUFPLElBQVA7QUFDRDs7QUFDRCxZQUFNSSxLQUFLLEdBQUdyQixNQUFNLENBQUNWLElBQVAsQ0FBWSxVQUFBZ0MsQ0FBQztBQUFBLGlCQUFJQSxDQUFDLENBQUNGLElBQUYsS0FBV0gsWUFBWSxDQUFDRyxJQUE1QjtBQUFBLFNBQWIsQ0FBZDs7QUFDQSxZQUFJLENBQUNDLEtBQUwsRUFBWTtBQUNWLGlCQUFPLElBQVA7QUFDRDs7QUFDRCxZQUFNbEMsWUFBWSxHQUFHLDRCQUFnQmEsTUFBaEIsRUFBd0JpQixZQUFZLENBQUNHLElBQXJDLENBQXJCO0FBQ0EsWUFBTUcsU0FBUyxHQUFHQyxPQUFPLENBQUNILEtBQUssQ0FBQ0ksYUFBUCxDQUF6QjtBQUNBLFlBQU1DLGNBQWMsR0FBR3ZDLFlBQVksQ0FBQ3dDLFNBQWIsQ0FDckIsVUFBQXBDLEVBQUU7QUFBQSxpQkFBSSwyQkFBZUEsRUFBZixNQUF1QjhCLEtBQUssQ0FBQ0ksYUFBakM7QUFBQSxTQURtQixDQUF2QjtBQUdBLFlBQU1HLFNBQVMsR0FBR3pCLElBQUksR0FBRzdCLFVBQVUsQ0FBQ0MsSUFBZCxHQUFxQmdELFNBQVMsR0FBR2pELFVBQVUsQ0FBQ0UsTUFBZCxHQUF1QixJQUEzRTtBQUVBLDRCQUNFLGdDQUFDLCtCQUFEO0FBQWdCLFVBQUEsR0FBRyxFQUFFLGFBQUM2QixJQUFEO0FBQUEsbUJBQTJCLE1BQUksQ0FBQ0EsSUFBTCxHQUFZQSxJQUF2QztBQUFBO0FBQXJCLHdCQUNFLGdDQUFDLDRCQUFELFFBQWNTLGFBQWEsQ0FBQ0QsSUFBRCxDQUEzQixDQURGLEVBRUcxQixZQUFZLENBQUMwQyxNQUFiLEdBQXNCLENBQXRCLGlCQUNDLGdDQUFDLG9CQUFELHFCQUNFLGdDQUFDLHdCQUFEO0FBQ0UsVUFBQSxTQUFTLEVBQUMsS0FEWjtBQUVFLFVBQUEsTUFBTSxFQUFFO0FBQUEsZ0NBQ04sOENBQ0dOLFNBQVMsR0FDUnJDLGdCQUFnQixDQUFDQyxZQUFELEVBQWVrQyxLQUFLLENBQUNTLFdBQXJCLENBRFIsZ0JBR1IsZ0NBQUMsOEJBQUQ7QUFBa0IsY0FBQSxFQUFFLEVBQUU7QUFBdEIsY0FKSixDQURNO0FBQUE7QUFGVix3QkFZRSxnQ0FBQyxhQUFELHFCQUNFLGdDQUFDLE9BQUQ7QUFBUyxVQUFBLE1BQU0sRUFBRUY7QUFBakIsd0JBQ0UsZ0NBQUMsV0FBRDtBQUNFLFVBQUEsTUFBTSxFQUFDLEtBRFQ7QUFFRSxVQUFBLE9BQU8sRUFBRSxpQkFBQXhCLENBQUMsRUFBSTtBQUNaQSxZQUFBQSxDQUFDLENBQUMyQixlQUFGOztBQUNBLFlBQUEsTUFBSSxDQUFDQyxRQUFMLENBQWM7QUFBQzdCLGNBQUFBLElBQUksRUFBRXFCLE9BQU8sQ0FBQyxDQUFDckIsSUFBRjtBQUFkLGFBQWQ7QUFDRDtBQUxILFVBREYsQ0FERixDQVpGLENBREYsRUF5QkdBLElBQUksaUJBQ0gsZ0NBQUMsYUFBRCxxQkFDRSxnQ0FBQyx3QkFBRDtBQUNFLFVBQUEsT0FBTyxFQUFFaEIsWUFEWDtBQUVFLFVBQUEsY0FBYyxFQUFFdUMsY0FGbEI7QUFHRSxVQUFBLGFBQWEsRUFBRTtBQUFBLGdCQUFFbEMsS0FBRixRQUFFQSxLQUFGO0FBQUEsbUJBQWFBLEtBQWI7QUFBQSxXQUhqQjtBQUlFLFVBQUEsZ0JBQWdCLEVBQUUsMEJBQUN5QyxNQUFELEVBQVM3QixDQUFULEVBQWU7QUFDL0JBLFlBQUFBLENBQUMsQ0FBQzJCLGVBQUY7O0FBQ0EsWUFBQSxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUNaN0IsY0FBQUEsSUFBSSxFQUFFO0FBRE0sYUFBZDs7QUFJQSxnQkFBTXNCLGFBQWEsR0FBRywyQkFBZVEsTUFBZixDQUF0QjtBQUNBLGdCQUFNQyxlQUFlLEdBQUdwQyxNQUFNLENBQUNvQixZQUFQLENBQW9CckIsTUFBcEIsQ0FBeEI7QUFDQSxnQkFBTXFCLFlBQVksR0FBR2dCLGVBQWUsQ0FBQ0MsR0FBaEIsQ0FBb0IsVUFBQWhCLFdBQVcsRUFBSTtBQUN0RCxxQkFBT0EsV0FBVyxDQUFDQyxJQUFaLEtBQXFCSCxZQUFZLENBQUNHLElBQWxDLEdBQ0g7QUFDRUEsZ0JBQUFBLElBQUksRUFBRUgsWUFBWSxDQUFDRyxJQURyQjtBQUVFaEMsZ0JBQUFBLE1BQU0sRUFBRXFDO0FBRlYsZUFERyxHQUtITixXQUxKO0FBTUQsYUFQb0IsQ0FBckI7O0FBUUEsZ0JBQU1pQixTQUFTLG1DQUNWdEMsTUFEVTtBQUVib0IsY0FBQUEsWUFBWSxrQ0FDUHBCLE1BQU0sQ0FBQ29CLFlBREEsNENBRVRyQixNQUZTLEVBRUFxQixZQUZBO0FBRkMsY0FBZjs7QUFPQW5CLFlBQUFBLFFBQVEsQ0FBQ3FDLFNBQUQsQ0FBUjtBQUNBbkMsWUFBQUEscUJBQXFCLENBQUNKLE1BQUQsRUFBU3dCLEtBQUssQ0FBQ0QsSUFBZixFQUFxQkssYUFBckIsQ0FBckI7QUFDRDtBQTdCSCxVQURGLENBMUJKLENBSEosZUFpRUUsZ0NBQUMsYUFBRDtBQUFRLFVBQUEsT0FBTyxFQUFFYixRQUFRLEdBQUcsSUFBSCxHQUFVRztBQUFuQyxVQWpFRixDQURGO0FBcUVEO0FBOUdrQztBQUFBO0FBQUEsSUFDUHNCLGdCQURPOztBQWdIckMsU0FBTyxxQ0FBZW5DLGVBQWYsQ0FBUDtBQUNEOztlQUVjTixzQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgQ29tcG9uZW50VHlwZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0NoaWNrbGV0QnV0dG9uLCBDaGlja2xldFRhZ30gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2l0ZW0tc2VsZWN0b3IvY2hpY2tsZXRlZC1pbnB1dCc7XG5pbXBvcnQge0hhc2gsIERlbGV0ZX0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2ljb25zJztcbmltcG9ydCBEcm9wZG93bkxpc3QgZnJvbSAnLi4vLi4vLi4vY29tbW9uL2l0ZW0tc2VsZWN0b3IvZHJvcGRvd24tbGlzdCc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ0BrZXBsZXIuZ2wvbG9jYWxpemF0aW9uJztcbmltcG9ydCB7VGltZUxhYmVsRm9ybWF0LCBUb29sdGlwRmllbGRzfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcbmltcG9ydCB7Z2V0Rm9ybWF0VmFsdWUsIGdldEZvcm1hdExhYmVsc30gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5pbXBvcnQgb25DbGlja091dHNpZGUgZnJvbSAncmVhY3Qtb25jbGlja291dHNpZGUnO1xuaW1wb3J0IFRpcHB5VG9vbHRpcCBmcm9tICcuLi8uLi8uLi9jb21tb24vdGlwcHktdG9vbHRpcCc7XG5cbmludGVyZmFjZSBUb29sdGlwQ2hpY2tsZXRQcm9wcyB7XG4gIGRpc2FibGVkOiBib29sZWFuO1xuICBpdGVtOiB7bmFtZTogc3RyaW5nfTtcbiAgZGlzcGxheU9wdGlvbjogRnVuY3Rpb247XG4gIHJlbW92ZTogYW55O1xufVxuXG50eXBlIFRvb2x0aXBDb25maWcgPSB7XG4gIGZpZWxkc1RvU2hvdzoge1xuICAgIFtrZXk6IHN0cmluZ106IHtuYW1lOiBzdHJpbmc7IGZvcm1hdDogc3RyaW5nIHwgbnVsbH1bXTtcbiAgfTtcbiAgY29tcGFyZU1vZGU6IGJvb2xlYW47XG4gIGNvbXBhcmVUeXBlOiBzdHJpbmcgfCBudWxsO1xufTtcblxudHlwZSBJY29uRGl2UHJvcHMgPSB7XG4gIHN0YXR1czogc3RyaW5nIHwgbnVsbDtcbn07XG5cbmNvbnN0IENoaWNrbGV0QWRkb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgQ2hpY2tsZXRBZGRvbiA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1yaWdodDogNHB4O1xuYDtcblxuY29uc3QgU3R5bGVkUG9wb3ZlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAtNjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHdpZHRoOiAxNDBweDtcbiAgei1pbmRleDogMTAxO1xuYDtcblxuY29uc3QgaGFzaFN0eWxlcyA9IHtcbiAgU0hPVzogJ1NIT1cnLFxuICBBQ1RJVkU6ICdBQ1RJVkUnXG59O1xuXG5jb25zdCBJY29uRGl2ID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ3Rvb2x0aXAtY2hpY2tsZXRfX2ljb24nXG59KTxJY29uRGl2UHJvcHM+YFxuICBjb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLnN0YXR1cyA9PT0gaGFzaFN0eWxlcy5TSE9XXG4gICAgICA/IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvckFjdGl2ZVxuICAgICAgOiBwcm9wcy5zdGF0dXMgPT09IGhhc2hTdHlsZXMuQUNUSVZFXG4gICAgICA/IHByb3BzLnRoZW1lLmFjdGl2ZUNvbG9yXG4gICAgICA6IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG5gO1xuXG5mdW5jdGlvbiBnZXRGb3JtYXRUb29sdGlwKGZvcm1hdExhYmVsczogVGltZUxhYmVsRm9ybWF0W10sIGZvcm1hdDogc3RyaW5nIHwgbnVsbCkge1xuICBpZiAoIWZvcm1hdCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IGZvcm1hdExhYmVsID0gZm9ybWF0TGFiZWxzLmZpbmQoZmwgPT4gZ2V0Rm9ybWF0VmFsdWUoZmwpID09PSBmb3JtYXQpO1xuICBpZiAoZm9ybWF0TGFiZWwpIHtcbiAgICByZXR1cm4gZm9ybWF0TGFiZWwubGFiZWw7XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiBmb3JtYXQgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkoZm9ybWF0LCBudWxsLCAyKSA6IFN0cmluZyhmb3JtYXQpO1xufVxuXG5mdW5jdGlvbiBUb29sdGlwQ2hpY2tsZXRGYWN0b3J5KFxuICBkYXRhSWQ6IHN0cmluZyxcbiAgY29uZmlnOiBUb29sdGlwQ29uZmlnLFxuICBvbkNoYW5nZTogKGNmZzogVG9vbHRpcENvbmZpZykgPT4gdm9pZCxcbiAgZmllbGRzOiBUb29sdGlwRmllbGRzW10sXG4gIG9uRGlzcGxheUZvcm1hdENoYW5nZVxuKTogQ29tcG9uZW50VHlwZTxUb29sdGlwQ2hpY2tsZXRQcm9wcz4ge1xuICBjbGFzcyBUb29sdGlwQ2hpY2tsZXQgZXh0ZW5kcyBDb21wb25lbnQ8VG9vbHRpcENoaWNrbGV0UHJvcHM+IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgIHNob3c6IGZhbHNlXG4gICAgfTtcbiAgICBwcml2YXRlIG5vZGUhOiBIVE1MRGl2RWxlbWVudDtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5oYW5kbGVDbGlja091dHNpZGUsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuaGFuZGxlQ2xpY2tPdXRzaWRlLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGU6IGFueSkgPT4ge1xuICAgICAgaWYgKHRoaXMubm9kZS5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7ZGlzYWJsZWQsIGl0ZW0sIGRpc3BsYXlPcHRpb24sIHJlbW92ZX0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge3Nob3d9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IHRvb2x0aXBGaWVsZCA9IGNvbmZpZy5maWVsZHNUb1Nob3dbZGF0YUlkXS5maW5kKFxuICAgICAgICBmaWVsZFRvU2hvdyA9PiBmaWVsZFRvU2hvdy5uYW1lID09PSBpdGVtLm5hbWVcbiAgICAgICk7XG4gICAgICBpZiAoIXRvb2x0aXBGaWVsZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzLmZpbmQoZiA9PiBmLm5hbWUgPT09IHRvb2x0aXBGaWVsZC5uYW1lKTtcbiAgICAgIGlmICghZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBjb25zdCBmb3JtYXRMYWJlbHMgPSBnZXRGb3JtYXRMYWJlbHMoZmllbGRzLCB0b29sdGlwRmllbGQubmFtZSk7XG4gICAgICBjb25zdCBoYXNGb3JtYXQgPSBCb29sZWFuKGZpZWxkLmRpc3BsYXlGb3JtYXQpO1xuICAgICAgY29uc3Qgc2VsZWN0aW9uSW5kZXggPSBmb3JtYXRMYWJlbHMuZmluZEluZGV4KFxuICAgICAgICBmbCA9PiBnZXRGb3JtYXRWYWx1ZShmbCkgPT09IGZpZWxkLmRpc3BsYXlGb3JtYXRcbiAgICAgICk7XG4gICAgICBjb25zdCBoYXNoU3R5bGUgPSBzaG93ID8gaGFzaFN0eWxlcy5TSE9XIDogaGFzRm9ybWF0ID8gaGFzaFN0eWxlcy5BQ1RJVkUgOiBudWxsO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q2hpY2tsZXRCdXR0b24gcmVmPXsobm9kZTogSFRNTERpdkVsZW1lbnQpID0+ICh0aGlzLm5vZGUgPSBub2RlKX0+XG4gICAgICAgICAgPENoaWNrbGV0VGFnPntkaXNwbGF5T3B0aW9uKGl0ZW0pfTwvQ2hpY2tsZXRUYWc+XG4gICAgICAgICAge2Zvcm1hdExhYmVscy5sZW5ndGggPiAxICYmIChcbiAgICAgICAgICAgIDxDaGlja2xldEFkZG9uV3JhcHBlcj5cbiAgICAgICAgICAgICAgPFRpcHB5VG9vbHRpcFxuICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgcmVuZGVyPXsoKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge2hhc0Zvcm1hdCA/IChcbiAgICAgICAgICAgICAgICAgICAgICBnZXRGb3JtYXRUb29sdGlwKGZvcm1hdExhYmVscywgZmllbGQuZGlzcGxheU5hbWUpXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydmaWVsZFNlbGVjdG9yLmZvcm1hdHRpbmcnfSAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q2hpY2tsZXRBZGRvbj5cbiAgICAgICAgICAgICAgICAgIDxJY29uRGl2IHN0YXR1cz17aGFzaFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPEhhc2hcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI4cHhcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3c6IEJvb2xlYW4oIXNob3cpfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvSWNvbkRpdj5cbiAgICAgICAgICAgICAgICA8L0NoaWNrbGV0QWRkb24+XG4gICAgICAgICAgICAgIDwvVGlwcHlUb29sdGlwPlxuICAgICAgICAgICAgICB7c2hvdyAmJiAoXG4gICAgICAgICAgICAgICAgPFN0eWxlZFBvcG92ZXI+XG4gICAgICAgICAgICAgICAgICA8RHJvcGRvd25MaXN0XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2Zvcm1hdExhYmVsc31cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uSW5kZXg9e3NlbGVjdGlvbkluZGV4fVxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5T3B0aW9uPXsoe2xhYmVsfSkgPT4gbGFiZWx9XG4gICAgICAgICAgICAgICAgICAgIG9uT3B0aW9uU2VsZWN0ZWQ9eyhyZXN1bHQsIGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc3BsYXlGb3JtYXQgPSBnZXRGb3JtYXRWYWx1ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZEZpZWxkc1RvU2hvdyA9IGNvbmZpZy5maWVsZHNUb1Nob3dbZGF0YUlkXTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZHNUb1Nob3cgPSBvbGRGaWVsZHNUb1Nob3cubWFwKGZpZWxkVG9TaG93ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWVsZFRvU2hvdy5uYW1lID09PSB0b29sdGlwRmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRvb2x0aXBGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBkaXNwbGF5Rm9ybWF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkVG9TaG93O1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc1RvU2hvdzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5jb25maWcuZmllbGRzVG9TaG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZGF0YUlkXTogZmllbGRzVG9TaG93XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZShuZXdDb25maWcpO1xuICAgICAgICAgICAgICAgICAgICAgIG9uRGlzcGxheUZvcm1hdENoYW5nZShkYXRhSWQsIGZpZWxkLm5hbWUsIGRpc3BsYXlGb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1N0eWxlZFBvcG92ZXI+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0NoaWNrbGV0QWRkb25XcmFwcGVyPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPERlbGV0ZSBvbkNsaWNrPXtkaXNhYmxlZCA/IG51bGwgOiByZW1vdmV9IC8+XG4gICAgICAgIDwvQ2hpY2tsZXRCdXR0b24+XG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb25DbGlja091dHNpZGUoVG9vbHRpcENoaWNrbGV0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcENoaWNrbGV0RmFjdG9yeTtcbiJdfQ==