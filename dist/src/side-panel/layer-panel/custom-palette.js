"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

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

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactSortableHoc = require("react-sortable-hoc");

var _portaled = _interopRequireDefault(require("../../common/portaled"));

var _styledComponents2 = require("../../common/styled-components");

var _icons = require("../../common/icons");

var _colorPalette = _interopRequireDefault(require("./color-palette"));

var _customPicker = _interopRequireDefault(require("./custom-picker"));

var _utils = require("@kepler.gl/utils");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var dragHandleActive = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  .layer__drag-handle {\n    color: ", ";\n    opacity: 1;\n    cursor: move;\n  }\n"])), function (props) {
  return props.theme.textColorHl;
});

var StyledSortableItem = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  z-index: ", ";\n\n  :not(.sorting) {\n    :hover {\n      background-color: ", ";\n      ", ";\n    }\n  }\n\n  &.sorting-colors {\n    background-color: ", ";\n    ", ";\n  }\n"])), function (props) {
  return props.theme.dropdownWrapperZ + 1;
}, function (props) {
  return props.theme.panelBackgroundHover;
}, dragHandleActive, function (props) {
  return props.theme.panelBackgroundHover;
}, dragHandleActive);

var StyledDragHandle = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  opacity: 0;\n"])));

var StyledTrash = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  svg {\n    :hover {\n      color: ", ";\n    }\n  }\n  height: 12px;\n  margin-left: auto;\n  margin-right: 12px;\n  :hover {\n    cursor: pointer;\n  }\n"])), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.subtextColorActive;
});

var StyledLine = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  width: calc(100% - 16px);\n  height: 1px;\n  background-color: ", ";\n  margin-top: 8px;\n  margin-left: 8px;\n"])), function (props) {
  return props.theme.labelColor;
});

var StyledSwatch = _styledComponents["default"].div.attrs({
  className: 'custom-palette__swatch'
})(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  width: 32px;\n  height: 18px;\n  display: inline-block;\n  :hover {\n    box-shadow: ", ";\n    cursor: pointer;\n  }\n"])), function (props) {
  return props.color;
}, function (props) {
  return props.theme.boxShadow;
});

var StyledColorRange = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 0 8px;\n  :hover {\n    background-color: ", ";\n    cursor: pointer;\n  }\n"])), function (props) {
  return props.theme.panelBackgroundHover;
});

var StyledButtonContainer = _styledComponents["default"].div(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 11px;\n  display: flex;\n  direction: rtl;\n"])));

var StyledInlineInput = _styledComponents["default"].div(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: 12px;\n  input {\n    color: ", ";\n    font-size: 10px;\n  }\n"])), function (props) {
  return props.theme.textColorHl;
});

var SortableItem = (0, _reactSortableHoc.SortableElement)(function (_ref) {
  var children = _ref.children,
      isSorting = _ref.isSorting;
  return /*#__PURE__*/_react["default"].createElement(StyledSortableItem, {
    className: (0, _classnames["default"])('custom-palette__sortable-items', {
      sorting: isSorting
    })
  }, children);
}); // TODO: Should className be applied to the div here?

var WrappedSortableContainer = (0, _reactSortableHoc.SortableContainer)(function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, children);
});
var DragHandle = (0, _reactSortableHoc.SortableHandle)(function (_ref3) {
  var className = _ref3.className,
      children = _ref3.children;
  return /*#__PURE__*/_react["default"].createElement(StyledDragHandle, {
    className: className
  }, children);
});

var CustomPalette = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(CustomPalette, _Component);

  var _super = _createSuper(CustomPalette);

  function CustomPalette() {
    var _this;

    (0, _classCallCheck2["default"])(this, CustomPalette);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isSorting: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "root", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onPickerUpdate", function (color) {
      var colors = _this.props.customPalette.colors;
      var newColors = (0, _toConsumableArray2["default"])(colors);
      newColors[_this.props.showSketcher] = color.hex;

      _this._setColorPaletteUI(newColors);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onColorDelete", function (index) {
      var colors = _this.props.customPalette.colors;
      var newColors = (0, _toConsumableArray2["default"])(colors);

      if (newColors.length > 1) {
        newColors.splice(index, 1);
      }

      _this._setColorPaletteUI(newColors);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onColorAdd", function () {
      var colors = _this.props.customPalette.colors; // add the last color

      var newColors = [].concat((0, _toConsumableArray2["default"])(colors), [colors[colors.length - 1]]);

      _this._setColorPaletteUI(newColors);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSwatchClick", function (index) {
      _this.props.onToggleSketcher(index);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSwatchClose", function () {
      _this.props.onToggleSketcher(false);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onApply", function (event) {
      event.stopPropagation();
      event.preventDefault();

      _this.props.onCancel();

      _this.props.onApply(_this.props.customPalette, event);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSortEnd", function (_ref4) {
      var oldIndex = _ref4.oldIndex,
          newIndex = _ref4.newIndex;
      var colors = _this.props.customPalette.colors;
      var newColors = (0, _utils.arrayMove)(colors, oldIndex, newIndex);

      _this._setColorPaletteUI(newColors);

      _this.setState({
        isSorting: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSortStart", function () {
      _this.setState({
        isSorting: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_inputColorHex", function (index, _ref5) {
      var value = _ref5.target.value;
      var colors = _this.props.customPalette.colors;
      var newColors = (0, _toConsumableArray2["default"])(colors);
      newColors[index] = value.toUpperCase();

      _this._setColorPaletteUI(newColors);
    });
    return _this;
  }

  (0, _createClass2["default"])(CustomPalette, [{
    key: "_setColorPaletteUI",
    value: function _setColorPaletteUI(colors) {
      this.props.setCustomPalette({
        colors: colors
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var colors = this.props.customPalette.colors;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "custom-palette-panel",
        ref: this.root
      }, /*#__PURE__*/_react["default"].createElement(StyledColorRange, null, /*#__PURE__*/_react["default"].createElement(_colorPalette["default"], {
        colors: colors
      })), /*#__PURE__*/_react["default"].createElement(WrappedSortableContainer, {
        className: "custom-palette-container",
        onSortEnd: this._onSortEnd,
        onSortStart: this._onSortStart,
        lockAxis: "y",
        helperClass: "sorting-colors",
        useDragHandle: true
      }, colors.map(function (color, index) {
        return /*#__PURE__*/_react["default"].createElement(SortableItem, {
          key: index,
          index: index,
          isSorting: _this2.state.isSorting
        }, /*#__PURE__*/_react["default"].createElement(DragHandle, {
          className: "layer__drag-handle"
        }, /*#__PURE__*/_react["default"].createElement(_icons.VertDots, {
          height: "20px"
        })), /*#__PURE__*/_react["default"].createElement(StyledSwatch, {
          color: color,
          onClick: function onClick() {
            return _this2._onSwatchClick(index);
          }
        }), /*#__PURE__*/_react["default"].createElement(StyledInlineInput, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.InlineInput, {
          type: "text",
          className: "custom-palette-hex__input",
          value: color.toUpperCase(),
          onClick: function onClick(e) {
            e.stopPropagation();
          },
          onChange: function onChange(e) {
            return _this2._inputColorHex(index, e);
          },
          id: "input-layer-label-".concat(index)
        })), /*#__PURE__*/_react["default"].createElement(StyledTrash, {
          onClick: function onClick() {
            return _this2._onColorDelete(index);
          }
        }, /*#__PURE__*/_react["default"].createElement(_icons.Trash, {
          className: "trashbin"
        })));
      })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
        className: "add-step__button",
        link: true,
        onClick: this._onColorAdd
      }, "+ Add Step"), /*#__PURE__*/_react["default"].createElement(StyledLine, null), /*#__PURE__*/_react["default"].createElement(StyledButtonContainer, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
        className: "confirm-apply__button",
        link: true,
        onClick: this._onApply
      }, "Confirm"), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
        link: true,
        onClick: this.props.onCancel
      }, "Cancel")), /*#__PURE__*/_react["default"].createElement(_portaled["default"], {
        isOpened: this.props.showSketcher !== false,
        left: 280,
        top: -300
      }, /*#__PURE__*/_react["default"].createElement(_customPicker["default"], {
        color: colors[this.props.showSketcher],
        onChange: this._onPickerUpdate,
        onSwatchClose: this._onSwatchClose
      })));
    }
  }]);
  return CustomPalette;
}(_react.Component);

var _default = CustomPalette;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2xheWVyLXBhbmVsL2N1c3RvbS1wYWxldHRlLnRzeCJdLCJuYW1lcyI6WyJkcmFnSGFuZGxlQWN0aXZlIiwiY3NzIiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvckhsIiwiU3R5bGVkU29ydGFibGVJdGVtIiwic3R5bGVkIiwiZGl2IiwiZHJvcGRvd25XcmFwcGVyWiIsInBhbmVsQmFja2dyb3VuZEhvdmVyIiwiU3R5bGVkRHJhZ0hhbmRsZSIsIlN0eWxlZFRyYXNoIiwidGV4dENvbG9yIiwic3VidGV4dENvbG9yQWN0aXZlIiwiU3R5bGVkTGluZSIsImxhYmVsQ29sb3IiLCJTdHlsZWRTd2F0Y2giLCJhdHRycyIsImNsYXNzTmFtZSIsImNvbG9yIiwiYm94U2hhZG93IiwiU3R5bGVkQ29sb3JSYW5nZSIsIlN0eWxlZEJ1dHRvbkNvbnRhaW5lciIsIlN0eWxlZElubGluZUlucHV0IiwiU29ydGFibGVJdGVtIiwiY2hpbGRyZW4iLCJpc1NvcnRpbmciLCJzb3J0aW5nIiwiV3JhcHBlZFNvcnRhYmxlQ29udGFpbmVyIiwiRHJhZ0hhbmRsZSIsIkN1c3RvbVBhbGV0dGUiLCJjb2xvcnMiLCJjdXN0b21QYWxldHRlIiwibmV3Q29sb3JzIiwic2hvd1NrZXRjaGVyIiwiaGV4IiwiX3NldENvbG9yUGFsZXR0ZVVJIiwiaW5kZXgiLCJsZW5ndGgiLCJzcGxpY2UiLCJvblRvZ2dsZVNrZXRjaGVyIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIm9uQ2FuY2VsIiwib25BcHBseSIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJzZXRTdGF0ZSIsInZhbHVlIiwidGFyZ2V0IiwidG9VcHBlckNhc2UiLCJzZXRDdXN0b21QYWxldHRlIiwicm9vdCIsIl9vblNvcnRFbmQiLCJfb25Tb3J0U3RhcnQiLCJtYXAiLCJzdGF0ZSIsIl9vblN3YXRjaENsaWNrIiwiZSIsIl9pbnB1dENvbG9ySGV4IiwiX29uQ29sb3JEZWxldGUiLCJfb25Db2xvckFkZCIsIl9vbkFwcGx5IiwiX29uUGlja2VyVXBkYXRlIiwiX29uU3dhdGNoQ2xvc2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQWFBLElBQU1BLGdCQUFnQixPQUFHQyxxQkFBSCw4S0FFVCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQWhCO0FBQUEsQ0FGSSxDQUF0Qjs7QUFRQSxJQUFNQyxrQkFBa0IsR0FBR0MsNkJBQU9DLEdBQVYscVdBS1gsVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxnQkFBWixHQUErQixDQUFuQztBQUFBLENBTE0sRUFTRSxVQUFBTixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlNLG9CQUFoQjtBQUFBLENBVFAsRUFVaEJULGdCQVZnQixFQWVBLFVBQUFFLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWU0sb0JBQWhCO0FBQUEsQ0FmTCxFQWdCbEJULGdCQWhCa0IsQ0FBeEI7O0FBb0JBLElBQU1VLGdCQUFnQixHQUFHSiw2QkFBT0MsR0FBVixtSkFBdEI7O0FBTUEsSUFBTUksV0FBVyxHQUFHTCw2QkFBT0MsR0FBVix1UUFDTixVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlTLFNBQWhCO0FBQUEsQ0FEQyxFQUlGLFVBQUFWLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVUsa0JBQWhCO0FBQUEsQ0FKSCxDQUFqQjs7QUFlQSxJQUFNQyxVQUFVLEdBQUdSLDZCQUFPQyxHQUFWLDRNQUdNLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVks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SUFBSSxNQUFaO0FBQWEsUUFBQSxPQUFPLEVBQUUsS0FBSzdELEtBQUwsQ0FBVzBDO0FBQWpDLGtCQUpGLENBMUNGLGVBbURFLGdDQUFDLG9CQUFEO0FBQVUsUUFBQSxRQUFRLEVBQUUsS0FBSzFDLEtBQUwsQ0FBV2dDLFlBQVgsS0FBNEIsS0FBaEQ7QUFBdUQsUUFBQSxJQUFJLEVBQUUsR0FBN0Q7QUFBa0UsUUFBQSxHQUFHLEVBQUUsQ0FBQztBQUF4RSxzQkFDRSxnQ0FBQyx3QkFBRDtBQUNFLFFBQUEsS0FBSyxFQUFFSCxNQUFNLENBQUMsS0FBSzdCLEtBQUwsQ0FBV2dDLFlBQVosQ0FEZjtBQUVFLFFBQUEsUUFBUSxFQUFFLEtBQUs4QixlQUZqQjtBQUdFLFFBQUEsYUFBYSxFQUFFLEtBQUtDO0FBSHRCLFFBREYsQ0FuREYsQ0FERjtBQTZERDs7O0VBdEl5QkMsZ0I7O2VBeUlicEMsYSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgY3JlYXRlUmVmLCBNb3VzZUV2ZW50SGFuZGxlciwgTW91c2VFdmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVkLCB7Y3NzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1NvcnRhYmxlQ29udGFpbmVyLCBTb3J0YWJsZUVsZW1lbnQsIFNvcnRhYmxlSGFuZGxlfSBmcm9tICdyZWFjdC1zb3J0YWJsZS1ob2MnO1xuaW1wb3J0IFBvcnRhbGVkIGZyb20gJy4uLy4uL2NvbW1vbi9wb3J0YWxlZCc7XG5cbmltcG9ydCB7QnV0dG9uLCBJbmxpbmVJbnB1dH0gZnJvbSAnLi4vLi4vY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7VmVydERvdHMsIFRyYXNofSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMnO1xuaW1wb3J0IENvbG9yUGFsZXR0ZSBmcm9tICcuL2NvbG9yLXBhbGV0dGUnO1xuaW1wb3J0IEN1c3RvbVBpY2tlciBmcm9tICcuL2N1c3RvbS1waWNrZXInO1xuaW1wb3J0IHthcnJheU1vdmV9IGZyb20gJ0BrZXBsZXIuZ2wvdXRpbHMnO1xuaW1wb3J0IHtDb2xvclJhbmdlfSBmcm9tICdAa2VwbGVyLmdsL2NvbnN0YW50cyc7XG5pbXBvcnQge05lc3RlZFBhcnRpYWx9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuXG50eXBlIEN1c3RvbVBhbGV0dGVQcm9wcyA9IHtcbiAgY3VzdG9tUGFsZXR0ZTogQ29sb3JSYW5nZTtcbiAgc2hvd1NrZXRjaGVyPzogYm9vbGVhbiB8IG51bWJlcjtcbiAgc2V0Q3VzdG9tUGFsZXR0ZTogKGM6IE5lc3RlZFBhcnRpYWw8Q29sb3JSYW5nZT4pID0+IHZvaWQ7XG4gIG9uQ2FuY2VsOiAoKSA9PiB2b2lkO1xuICBvblRvZ2dsZVNrZXRjaGVyOiAoaTogYm9vbGVhbiB8IG51bWJlcikgPT4gdm9pZDtcbiAgb25BcHBseTogKHA6IENvbG9yUmFuZ2UsIGU6IE1vdXNlRXZlbnQpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBkcmFnSGFuZGxlQWN0aXZlID0gY3NzYFxuICAubGF5ZXJfX2RyYWctaGFuZGxlIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gICAgb3BhY2l0eTogMTtcbiAgICBjdXJzb3I6IG1vdmU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZFNvcnRhYmxlSXRlbSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gIHotaW5kZXg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25XcmFwcGVyWiArIDF9O1xuXG4gIDpub3QoLnNvcnRpbmcpIHtcbiAgICA6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmRIb3Zlcn07XG4gICAgICAke2RyYWdIYW5kbGVBY3RpdmV9O1xuICAgIH1cbiAgfVxuXG4gICYuc29ydGluZy1jb2xvcnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kSG92ZXJ9O1xuICAgICR7ZHJhZ0hhbmRsZUFjdGl2ZX07XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZERyYWdIYW5kbGUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuYDtcblxuY29uc3QgU3R5bGVkVHJhc2ggPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICBzdmcge1xuICAgIDpob3ZlciB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3JBY3RpdmV9O1xuICAgIH1cbiAgfVxuICBoZWlnaHQ6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRMaW5lID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2cHgpO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuYDtcblxuY29uc3QgU3R5bGVkU3dhdGNoID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2N1c3RvbS1wYWxldHRlX19zd2F0Y2gnXG59KWBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvcn07XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJveFNoYWRvd307XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRDb2xvclJhbmdlID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMCA4cHg7XG4gIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmRIb3Zlcn07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRCdXR0b25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxMXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXJlY3Rpb246IHJ0bDtcbmA7XG5cbmNvbnN0IFN0eWxlZElubGluZUlucHV0ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIGlucHV0IHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBTb3J0YWJsZUl0ZW0gPSBTb3J0YWJsZUVsZW1lbnQoKHtjaGlsZHJlbiwgaXNTb3J0aW5nfSkgPT4gKFxuICA8U3R5bGVkU29ydGFibGVJdGVtXG4gICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdjdXN0b20tcGFsZXR0ZV9fc29ydGFibGUtaXRlbXMnLCB7c29ydGluZzogaXNTb3J0aW5nfSl9XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvU3R5bGVkU29ydGFibGVJdGVtPlxuKSk7XG5cbi8vIFRPRE86IFNob3VsZCBjbGFzc05hbWUgYmUgYXBwbGllZCB0byB0aGUgZGl2IGhlcmU/XG5jb25zdCBXcmFwcGVkU29ydGFibGVDb250YWluZXIgPSBTb3J0YWJsZUNvbnRhaW5lcigoe2NoaWxkcmVuLCBjbGFzc05hbWV9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PntjaGlsZHJlbn08L2Rpdj5cbikpO1xuXG5jb25zdCBEcmFnSGFuZGxlID0gU29ydGFibGVIYW5kbGUoKHtjbGFzc05hbWUsIGNoaWxkcmVufSkgPT4gKFxuICA8U3R5bGVkRHJhZ0hhbmRsZSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e2NoaWxkcmVufTwvU3R5bGVkRHJhZ0hhbmRsZT5cbikpO1xuXG5jbGFzcyBDdXN0b21QYWxldHRlIGV4dGVuZHMgQ29tcG9uZW50PEN1c3RvbVBhbGV0dGVQcm9wcz4ge1xuICBzdGF0ZSA9IHtcbiAgICBpc1NvcnRpbmc6IGZhbHNlXG4gIH07XG5cbiAgcm9vdCA9IGNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcblxuICBfc2V0Q29sb3JQYWxldHRlVUkoY29sb3JzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMucHJvcHMuc2V0Q3VzdG9tUGFsZXR0ZSh7XG4gICAgICBjb2xvcnNcbiAgICB9KTtcbiAgfVxuXG4gIF9vblBpY2tlclVwZGF0ZSA9IChjb2xvcjoge2hleDogc3RyaW5nfSkgPT4ge1xuICAgIGNvbnN0IHtjb2xvcnN9ID0gdGhpcy5wcm9wcy5jdXN0b21QYWxldHRlO1xuICAgIGNvbnN0IG5ld0NvbG9ycyA9IFsuLi5jb2xvcnNdO1xuICAgIG5ld0NvbG9yc1t0aGlzLnByb3BzLnNob3dTa2V0Y2hlciBhcyBudW1iZXJdID0gY29sb3IuaGV4O1xuICAgIHRoaXMuX3NldENvbG9yUGFsZXR0ZVVJKG5ld0NvbG9ycyk7XG4gIH07XG5cbiAgX29uQ29sb3JEZWxldGUgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHtjb2xvcnN9ID0gdGhpcy5wcm9wcy5jdXN0b21QYWxldHRlO1xuICAgIGNvbnN0IG5ld0NvbG9ycyA9IFsuLi5jb2xvcnNdO1xuICAgIGlmIChuZXdDb2xvcnMubGVuZ3RoID4gMSkge1xuICAgICAgbmV3Q29sb3JzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHRoaXMuX3NldENvbG9yUGFsZXR0ZVVJKG5ld0NvbG9ycyk7XG4gIH07XG5cbiAgX29uQ29sb3JBZGQgPSAoKSA9PiB7XG4gICAgY29uc3Qge2NvbG9yc30gPSB0aGlzLnByb3BzLmN1c3RvbVBhbGV0dGU7XG4gICAgLy8gYWRkIHRoZSBsYXN0IGNvbG9yXG4gICAgY29uc3QgbmV3Q29sb3JzID0gWy4uLmNvbG9ycywgY29sb3JzW2NvbG9ycy5sZW5ndGggLSAxXV07XG4gICAgdGhpcy5fc2V0Q29sb3JQYWxldHRlVUkobmV3Q29sb3JzKTtcbiAgfTtcblxuICBfb25Td2F0Y2hDbGljayA9IChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vblRvZ2dsZVNrZXRjaGVyKGluZGV4KTtcbiAgfTtcblxuICBfb25Td2F0Y2hDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uVG9nZ2xlU2tldGNoZXIoZmFsc2UpO1xuICB9O1xuXG4gIF9vbkFwcGx5OiBNb3VzZUV2ZW50SGFuZGxlciA9IGV2ZW50ID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdGhpcy5wcm9wcy5vbkNhbmNlbCgpO1xuICAgIHRoaXMucHJvcHMub25BcHBseSh0aGlzLnByb3BzLmN1c3RvbVBhbGV0dGUsIGV2ZW50KTtcbiAgfTtcblxuICBfb25Tb3J0RW5kID0gKHtvbGRJbmRleCwgbmV3SW5kZXh9KSA9PiB7XG4gICAgY29uc3Qge2NvbG9yc30gPSB0aGlzLnByb3BzLmN1c3RvbVBhbGV0dGU7XG4gICAgY29uc3QgbmV3Q29sb3JzID0gYXJyYXlNb3ZlKGNvbG9ycywgb2xkSW5kZXgsIG5ld0luZGV4KTtcbiAgICB0aGlzLl9zZXRDb2xvclBhbGV0dGVVSShuZXdDb2xvcnMpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2lzU29ydGluZzogZmFsc2V9KTtcbiAgfTtcblxuICBfb25Tb3J0U3RhcnQgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aXNTb3J0aW5nOiB0cnVlfSk7XG4gIH07XG5cbiAgX2lucHV0Q29sb3JIZXggPSAoaW5kZXg6IG51bWJlciwge3RhcmdldDoge3ZhbHVlfX0pID0+IHtcbiAgICBjb25zdCB7Y29sb3JzfSA9IHRoaXMucHJvcHMuY3VzdG9tUGFsZXR0ZTtcbiAgICBjb25zdCBuZXdDb2xvcnMgPSBbLi4uY29sb3JzXTtcbiAgICBuZXdDb2xvcnNbaW5kZXhdID0gdmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICB0aGlzLl9zZXRDb2xvclBhbGV0dGVVSShuZXdDb2xvcnMpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7Y29sb3JzfSA9IHRoaXMucHJvcHMuY3VzdG9tUGFsZXR0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1wYWxldHRlLXBhbmVsXCIgcmVmPXt0aGlzLnJvb3R9PlxuICAgICAgICA8U3R5bGVkQ29sb3JSYW5nZT5cbiAgICAgICAgICA8Q29sb3JQYWxldHRlIGNvbG9ycz17Y29sb3JzfSAvPlxuICAgICAgICA8L1N0eWxlZENvbG9yUmFuZ2U+XG4gICAgICAgIDxXcmFwcGVkU29ydGFibGVDb250YWluZXJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tcGFsZXR0ZS1jb250YWluZXJcIlxuICAgICAgICAgIG9uU29ydEVuZD17dGhpcy5fb25Tb3J0RW5kfVxuICAgICAgICAgIG9uU29ydFN0YXJ0PXt0aGlzLl9vblNvcnRTdGFydH1cbiAgICAgICAgICBsb2NrQXhpcz1cInlcIlxuICAgICAgICAgIGhlbHBlckNsYXNzPVwic29ydGluZy1jb2xvcnNcIlxuICAgICAgICAgIHVzZURyYWdIYW5kbGVcbiAgICAgICAgPlxuICAgICAgICAgIHtjb2xvcnMubWFwKChjb2xvciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxTb3J0YWJsZUl0ZW0ga2V5PXtpbmRleH0gaW5kZXg9e2luZGV4fSBpc1NvcnRpbmc9e3RoaXMuc3RhdGUuaXNTb3J0aW5nfT5cbiAgICAgICAgICAgICAgPERyYWdIYW5kbGUgY2xhc3NOYW1lPVwibGF5ZXJfX2RyYWctaGFuZGxlXCI+XG4gICAgICAgICAgICAgICAgPFZlcnREb3RzIGhlaWdodD1cIjIwcHhcIiAvPlxuICAgICAgICAgICAgICA8L0RyYWdIYW5kbGU+XG4gICAgICAgICAgICAgIDxTdHlsZWRTd2F0Y2ggY29sb3I9e2NvbG9yfSBvbkNsaWNrPXsoKSA9PiB0aGlzLl9vblN3YXRjaENsaWNrKGluZGV4KX0gLz5cbiAgICAgICAgICAgICAgPFN0eWxlZElubGluZUlucHV0PlxuICAgICAgICAgICAgICAgIDxJbmxpbmVJbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLXBhbGV0dGUtaGV4X19pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y29sb3IudG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuX2lucHV0Q29sb3JIZXgoaW5kZXgsIGUpfVxuICAgICAgICAgICAgICAgICAgaWQ9e2BpbnB1dC1sYXllci1sYWJlbC0ke2luZGV4fWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9TdHlsZWRJbmxpbmVJbnB1dD5cbiAgICAgICAgICAgICAgPFN0eWxlZFRyYXNoIG9uQ2xpY2s9eygpID0+IHRoaXMuX29uQ29sb3JEZWxldGUoaW5kZXgpfT5cbiAgICAgICAgICAgICAgICA8VHJhc2ggY2xhc3NOYW1lPVwidHJhc2hiaW5cIiAvPlxuICAgICAgICAgICAgICA8L1N0eWxlZFRyYXNoPlxuICAgICAgICAgICAgPC9Tb3J0YWJsZUl0ZW0+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvV3JhcHBlZFNvcnRhYmxlQ29udGFpbmVyPlxuICAgICAgICB7LyogQWRkIFN0ZXAgQnV0dG9uICovfVxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImFkZC1zdGVwX19idXR0b25cIiBsaW5rIG9uQ2xpY2s9e3RoaXMuX29uQ29sb3JBZGR9PlxuICAgICAgICAgICsgQWRkIFN0ZXBcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxTdHlsZWRMaW5lIC8+XG4gICAgICAgIHsvKiBDYW5jZWwgb3IgQ29uZmlybSBCdXR0b25zICovfVxuICAgICAgICA8U3R5bGVkQnV0dG9uQ29udGFpbmVyPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiY29uZmlybS1hcHBseV9fYnV0dG9uXCIgbGluayBvbkNsaWNrPXt0aGlzLl9vbkFwcGx5fT5cbiAgICAgICAgICAgIENvbmZpcm1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIGxpbmsgb25DbGljaz17dGhpcy5wcm9wcy5vbkNhbmNlbH0+XG4gICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9TdHlsZWRCdXR0b25Db250YWluZXI+XG5cbiAgICAgICAgPFBvcnRhbGVkIGlzT3BlbmVkPXt0aGlzLnByb3BzLnNob3dTa2V0Y2hlciAhPT0gZmFsc2V9IGxlZnQ9ezI4MH0gdG9wPXstMzAwfT5cbiAgICAgICAgICA8Q3VzdG9tUGlja2VyXG4gICAgICAgICAgICBjb2xvcj17Y29sb3JzW3RoaXMucHJvcHMuc2hvd1NrZXRjaGVyIGFzIG51bWJlcl19XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25QaWNrZXJVcGRhdGV9XG4gICAgICAgICAgICBvblN3YXRjaENsb3NlPXt0aGlzLl9vblN3YXRjaENsb3NlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUG9ydGFsZWQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVBhbGV0dGU7XG4iXX0=