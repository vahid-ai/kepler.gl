"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("@kepler.gl/utils");

var _localization = require("@kepler.gl/localization");

var _ = require("../..");

var _styledComponents2 = require("../../common/styled-components");

var _customPicker = _interopRequireDefault(require("../layer-panel/custom-picker"));

var _colorSelector = require("../layer-panel/color-selector");

var _templateObject, _templateObject2;

var LayerGroupColorPickerWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  margin-right: ", "px;\n  cursor: pointer;\n  ", "\n"])), function (props) {
  return props.extraMarginRight ? 0 : 24;
}, function (props) {
  return props.disabled && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n      cursor: none;\n      pointer-events: none;\n      opacity: 0.3;\n    "])));
});

LayerGroupColorPickerFactory.deps = [];

function LayerGroupColorPickerFactory() {
  var LayerGroupColorPicker = function LayerGroupColorPicker(_ref) {
    var slug = _ref.slug,
        color = _ref.color,
        onColorChange = _ref.onColorChange,
        extraMarginRight = _ref.extraMarginRight,
        disabled = _ref.disabled;

    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        displayColorPicker = _useState2[0],
        setDisplayColorPicker = _useState2[1];

    var onColorBlockClick = (0, _react.useCallback)(function () {
      setDisplayColorPicker(!displayColorPicker);
    }, [setDisplayColorPicker, displayColorPicker]);
    var onClosePicker = (0, _react.useCallback)(function () {
      setDisplayColorPicker(false);
    }, [setDisplayColorPicker]);
    var onCustomPickerChange = (0, _react.useCallback)(function (newColor) {
      onColorChange([newColor.rgb.r, newColor.rgb.g, newColor.rgb.b]);
    }, [onColorChange]);
    return /*#__PURE__*/_react["default"].createElement(LayerGroupColorPickerWrapper, {
      extraMarginRight: extraMarginRight,
      disabled: disabled
    }, /*#__PURE__*/_react["default"].createElement(_colorSelector.ColorBlock, {
      backgroundcolor: color,
      onClick: onColorBlockClick,
      className: "color-selector__selector__block",
      "data-tip": true,
      "data-for": "update-color-".concat(slug)
    }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
      id: "update-color-".concat(slug),
      effect: "solid",
      delayShow: 500
    }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'Update color'
    }))), /*#__PURE__*/_react["default"].createElement(_.Portaled, {
      isOpened: displayColorPicker !== false,
      left: 110,
      top: -50,
      onClose: onClosePicker
    }, /*#__PURE__*/_react["default"].createElement(_customPicker["default"], {
      color: (0, _utils.rgbToHex)(color),
      onChange: onCustomPickerChange,
      onSwatchClose: onClosePicker
    })));
  };

  return LayerGroupColorPicker;
}

var _default = LayerGroupColorPickerFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL21hcC1zdHlsZS1wYW5lbC9tYXAtbGF5ZXItZ3JvdXAtY29sb3ItcGlja2VyLnRzeCJdLCJuYW1lcyI6WyJMYXllckdyb3VwQ29sb3JQaWNrZXJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJleHRyYU1hcmdpblJpZ2h0IiwiZGlzYWJsZWQiLCJjc3MiLCJMYXllckdyb3VwQ29sb3JQaWNrZXJGYWN0b3J5IiwiZGVwcyIsIkxheWVyR3JvdXBDb2xvclBpY2tlciIsInNsdWciLCJjb2xvciIsIm9uQ29sb3JDaGFuZ2UiLCJkaXNwbGF5Q29sb3JQaWNrZXIiLCJzZXREaXNwbGF5Q29sb3JQaWNrZXIiLCJvbkNvbG9yQmxvY2tDbGljayIsIm9uQ2xvc2VQaWNrZXIiLCJvbkN1c3RvbVBpY2tlckNoYW5nZSIsIm5ld0NvbG9yIiwicmdiIiwiciIsImciLCJiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLDRCQUE0QixHQUFHQyw2QkFBT0MsR0FBViw4SUFDaEIsVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsZ0JBQU4sR0FBeUIsQ0FBekIsR0FBNkIsRUFBbEM7QUFBQSxDQURXLEVBRzlCLFVBQUFELEtBQUs7QUFBQSxTQUNMQSxLQUFLLENBQUNFLFFBQU4sUUFDQUMscUJBREEsc0tBREs7QUFBQSxDQUh5QixDQUFsQzs7QUFvQkFDLDRCQUE0QixDQUFDQyxJQUE3QixHQUFvQyxFQUFwQzs7QUFFQSxTQUFTRCw0QkFBVCxHQUF3QztBQUN0QyxNQUFNRSxxQkFBMkQsR0FBRyxTQUE5REEscUJBQThELE9BTTlEO0FBQUEsUUFMSkMsSUFLSSxRQUxKQSxJQUtJO0FBQUEsUUFKSkMsS0FJSSxRQUpKQSxLQUlJO0FBQUEsUUFISkMsYUFHSSxRQUhKQSxhQUdJO0FBQUEsUUFGSlIsZ0JBRUksUUFGSkEsZ0JBRUk7QUFBQSxRQURKQyxRQUNJLFFBREpBLFFBQ0k7O0FBQUEsb0JBQ2dELHFCQUFTLEtBQVQsQ0FEaEQ7QUFBQTtBQUFBLFFBQ0dRLGtCQURIO0FBQUEsUUFDdUJDLHFCQUR2Qjs7QUFHSixRQUFNQyxpQkFBaUIsR0FBRyx3QkFBWSxZQUFNO0FBQzFDRCxNQUFBQSxxQkFBcUIsQ0FBQyxDQUFDRCxrQkFBRixDQUFyQjtBQUNELEtBRnlCLEVBRXZCLENBQUNDLHFCQUFELEVBQXdCRCxrQkFBeEIsQ0FGdUIsQ0FBMUI7QUFJQSxRQUFNRyxhQUFhLEdBQUcsd0JBQVksWUFBTTtBQUN0Q0YsTUFBQUEscUJBQXFCLENBQUMsS0FBRCxDQUFyQjtBQUNELEtBRnFCLEVBRW5CLENBQUNBLHFCQUFELENBRm1CLENBQXRCO0FBSUEsUUFBTUcsb0JBQW9CLEdBQUcsd0JBQzNCLFVBQUFDLFFBQVEsRUFBSTtBQUNWTixNQUFBQSxhQUFhLENBQUMsQ0FBQ00sUUFBUSxDQUFDQyxHQUFULENBQWFDLENBQWQsRUFBaUJGLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhRSxDQUE5QixFQUFpQ0gsUUFBUSxDQUFDQyxHQUFULENBQWFHLENBQTlDLENBQUQsQ0FBYjtBQUNELEtBSDBCLEVBSTNCLENBQUNWLGFBQUQsQ0FKMkIsQ0FBN0I7QUFPQSx3QkFDRSxnQ0FBQyw0QkFBRDtBQUE4QixNQUFBLGdCQUFnQixFQUFFUixnQkFBaEQ7QUFBa0UsTUFBQSxRQUFRLEVBQUVDO0FBQTVFLG9CQUNFLGdDQUFDLHlCQUFEO0FBQ0UsTUFBQSxlQUFlLEVBQUVNLEtBRG5CO0FBRUUsTUFBQSxPQUFPLEVBQUVJLGlCQUZYO0FBR0UsTUFBQSxTQUFTLEVBQUMsaUNBSFo7QUFJRSxzQkFKRjtBQUtFLHlDQUEwQkwsSUFBMUI7QUFMRixNQURGLGVBUUUsZ0NBQUMsMEJBQUQ7QUFBUyxNQUFBLEVBQUUseUJBQWtCQSxJQUFsQixDQUFYO0FBQXFDLE1BQUEsTUFBTSxFQUFDLE9BQTVDO0FBQW9ELE1BQUEsU0FBUyxFQUFFO0FBQS9ELG9CQUNFLDJEQUNFLGdDQUFDLDhCQUFEO0FBQWtCLE1BQUEsRUFBRSxFQUFFO0FBQXRCLE1BREYsQ0FERixDQVJGLGVBYUUsZ0NBQUMsVUFBRDtBQUNFLE1BQUEsUUFBUSxFQUFFRyxrQkFBa0IsS0FBSyxLQURuQztBQUVFLE1BQUEsSUFBSSxFQUFFLEdBRlI7QUFHRSxNQUFBLEdBQUcsRUFBRSxDQUFDLEVBSFI7QUFJRSxNQUFBLE9BQU8sRUFBRUc7QUFKWCxvQkFNRSxnQ0FBQyx3QkFBRDtBQUNFLE1BQUEsS0FBSyxFQUFFLHFCQUFTTCxLQUFULENBRFQ7QUFFRSxNQUFBLFFBQVEsRUFBRU0sb0JBRlo7QUFHRSxNQUFBLGFBQWEsRUFBRUQ7QUFIakIsTUFORixDQWJGLENBREY7QUE0QkQsR0FwREQ7O0FBc0RBLFNBQU9QLHFCQUFQO0FBQ0Q7O2VBRWNGLDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7Y3NzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCB7cmdiVG9IZXh9IGZyb20gJ0BrZXBsZXIuZ2wvdXRpbHMnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdAa2VwbGVyLmdsL2xvY2FsaXphdGlvbic7XG5pbXBvcnQge1JHQkNvbG9yfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcblxuaW1wb3J0IHtQb3J0YWxlZH0gZnJvbSAnLi4vLi4nO1xuaW1wb3J0IHtUb29sdGlwfSBmcm9tICcuLi8uLi9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEN1c3RvbVBpY2tlciBmcm9tICcuLi9sYXllci1wYW5lbC9jdXN0b20tcGlja2VyJztcbmltcG9ydCB7Q29sb3JCbG9ja30gZnJvbSAnLi4vbGF5ZXItcGFuZWwvY29sb3Itc2VsZWN0b3InO1xuXG5jb25zdCBMYXllckdyb3VwQ29sb3JQaWNrZXJXcmFwcGVyID0gc3R5bGVkLmRpdjx7ZXh0cmFNYXJnaW5SaWdodD86IGJvb2xlYW47IGRpc2FibGVkPzogYm9vbGVhbn0+YFxuICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmV4dHJhTWFyZ2luUmlnaHQgPyAwIDogMjQpfXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gICR7cHJvcHMgPT5cbiAgICBwcm9wcy5kaXNhYmxlZCAmJlxuICAgIGNzc2BcbiAgICAgIGN1cnNvcjogbm9uZTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgb3BhY2l0eTogMC4zO1xuICAgIGB9XG5gO1xuXG5leHBvcnQgdHlwZSBMYXllckdyb3VwQ29sb3JQaWNrZXJQcm9wcyA9IHtcbiAgc2x1Zzogc3RyaW5nO1xuICBjb2xvcjogUkdCQ29sb3I7XG4gIG9uQ29sb3JDaGFuZ2U6IChwZDogUkdCQ29sb3IpID0+IHZvaWQ7XG4gIGV4dHJhTWFyZ2luUmlnaHQ6IGJvb2xlYW47XG4gIGRpc2FibGVkOiBib29sZWFuO1xufTtcblxuTGF5ZXJHcm91cENvbG9yUGlja2VyRmFjdG9yeS5kZXBzID0gW107XG5cbmZ1bmN0aW9uIExheWVyR3JvdXBDb2xvclBpY2tlckZhY3RvcnkoKSB7XG4gIGNvbnN0IExheWVyR3JvdXBDb2xvclBpY2tlcjogUmVhY3QuRkM8TGF5ZXJHcm91cENvbG9yUGlja2VyUHJvcHM+ID0gKHtcbiAgICBzbHVnLFxuICAgIGNvbG9yLFxuICAgIG9uQ29sb3JDaGFuZ2UsXG4gICAgZXh0cmFNYXJnaW5SaWdodCxcbiAgICBkaXNhYmxlZFxuICB9KSA9PiB7XG4gICAgY29uc3QgW2Rpc3BsYXlDb2xvclBpY2tlciwgc2V0RGlzcGxheUNvbG9yUGlja2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IG9uQ29sb3JCbG9ja0NsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgc2V0RGlzcGxheUNvbG9yUGlja2VyKCFkaXNwbGF5Q29sb3JQaWNrZXIpO1xuICAgIH0sIFtzZXREaXNwbGF5Q29sb3JQaWNrZXIsIGRpc3BsYXlDb2xvclBpY2tlcl0pO1xuXG4gICAgY29uc3Qgb25DbG9zZVBpY2tlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIHNldERpc3BsYXlDb2xvclBpY2tlcihmYWxzZSk7XG4gICAgfSwgW3NldERpc3BsYXlDb2xvclBpY2tlcl0pO1xuXG4gICAgY29uc3Qgb25DdXN0b21QaWNrZXJDaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICAgIG5ld0NvbG9yID0+IHtcbiAgICAgICAgb25Db2xvckNoYW5nZShbbmV3Q29sb3IucmdiLnIsIG5ld0NvbG9yLnJnYi5nLCBuZXdDb2xvci5yZ2IuYl0pO1xuICAgICAgfSxcbiAgICAgIFtvbkNvbG9yQ2hhbmdlXVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheWVyR3JvdXBDb2xvclBpY2tlcldyYXBwZXIgZXh0cmFNYXJnaW5SaWdodD17ZXh0cmFNYXJnaW5SaWdodH0gZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICAgICAgPENvbG9yQmxvY2tcbiAgICAgICAgICBiYWNrZ3JvdW5kY29sb3I9e2NvbG9yfVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ29sb3JCbG9ja0NsaWNrfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbG9yLXNlbGVjdG9yX19zZWxlY3Rvcl9fYmxvY2tcIlxuICAgICAgICAgIGRhdGEtdGlwXG4gICAgICAgICAgZGF0YS1mb3I9e2B1cGRhdGUtY29sb3ItJHtzbHVnfWB9XG4gICAgICAgIC8+XG4gICAgICAgIDxUb29sdGlwIGlkPXtgdXBkYXRlLWNvbG9yLSR7c2x1Z31gfSBlZmZlY3Q9XCJzb2xpZFwiIGRlbGF5U2hvdz17NTAwfT5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnVXBkYXRlIGNvbG9yJ30gLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgPFBvcnRhbGVkXG4gICAgICAgICAgaXNPcGVuZWQ9e2Rpc3BsYXlDb2xvclBpY2tlciAhPT0gZmFsc2V9XG4gICAgICAgICAgbGVmdD17MTEwfVxuICAgICAgICAgIHRvcD17LTUwfVxuICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2VQaWNrZXJ9XG4gICAgICAgID5cbiAgICAgICAgICA8Q3VzdG9tUGlja2VyXG4gICAgICAgICAgICBjb2xvcj17cmdiVG9IZXgoY29sb3IpfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ3VzdG9tUGlja2VyQ2hhbmdlfVxuICAgICAgICAgICAgb25Td2F0Y2hDbG9zZT17b25DbG9zZVBpY2tlcn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1BvcnRhbGVkPlxuICAgICAgPC9MYXllckdyb3VwQ29sb3JQaWNrZXJXcmFwcGVyPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIExheWVyR3JvdXBDb2xvclBpY2tlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJHcm91cENvbG9yUGlja2VyRmFjdG9yeTtcbiJdfQ==