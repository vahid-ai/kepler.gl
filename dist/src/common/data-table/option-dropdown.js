"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FormatterDropdown = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _portaled = _interopRequireDefault(require("../portaled"));

var _dropdownList = _interopRequireDefault(require("../item-selector/dropdown-list"));

var _constants = require("@kepler.gl/constants");

var _utils = require("@kepler.gl/utils");

var _icons = require("../icons");

var _templateObject, _templateObject2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ListItem = function ListItem(_ref) {
  var value = _ref.value;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(value.icon, {
    height: "13px"
  }), value.display);
}; // make hash icon smaller


var StyledOptionsDropdown = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  .list-selector {\n    border-top: 0;\n    width: max-content;\n    padding: 8px 0;\n  }\n\n  .list__item > div {\n    display: flex;\n    align-items: center;\n    flex-direction: row;\n    justify-content: flex-start;\n    line-height: 18px;\n\n    svg {\n      margin-right: 5px;\n    }\n\n    .data-ex-icons-hash {\n      width: 10px;\n      height: 10px;\n      stroke-width: 1px;\n      margin-left: 2px;\n      margin-right: 6px;\n    }\n  }\n"])));

var StyledPopover = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 184px;\n  height: 160px;\n  z-index: 101;\n  .list-selector {\n    max-height: 160px;\n  }\n  .hover:after {\n    content: '\\2713';\n    margin-left: 5px;\n  }\n"], ["\n  width: 184px;\n  height: 160px;\n  z-index: 101;\n  .list-selector {\n    max-height: 160px;\n  }\n  .hover:after {\n    content: '\\\\2713';\n    margin-left: 5px;\n  }\n"])));

var FormatterDropdown = function FormatterDropdown(props) {
  var left = props.left,
      top = props.top,
      isOpened = props.isOpened,
      _props$displayFormat = props.displayFormat,
      displayFormat = _props$displayFormat === void 0 ? 'None' : _props$displayFormat,
      setDisplayFormat = props.setDisplayFormat,
      onClose = props.onClose,
      formatLabels = props.formatLabels;
  var selectionIndex = formatLabels.findIndex(function (label) {
    return label.format === displayFormat;
  });
  var onSelectDisplayFormat = (0, _react.useCallback)(function (result, e) {
    setDisplayFormat(result);
    onClose();
  }, [setDisplayFormat, onClose]);
  return /*#__PURE__*/_react["default"].createElement(_portaled["default"], {
    left: left,
    top: top,
    isOpened: isOpened,
    onClose: onClose
  }, /*#__PURE__*/_react["default"].createElement(StyledPopover, {
    className: "formatter-popover"
  }, /*#__PURE__*/_react["default"].createElement(_dropdownList["default"], {
    options: formatLabels,
    selectionIndex: selectionIndex,
    displayOption: function displayOption(_ref2) {
      var label = _ref2.label;
      return label;
    },
    onOptionSelected: onSelectDisplayFormat,
    light: true
  })));
};

exports.FormatterDropdown = FormatterDropdown;

var OptionDropdown = function OptionDropdown(props) {
  var _colMeta$column;

  var isOpened = props.isOpened,
      column = props.column,
      colMeta = props.colMeta,
      toggleMoreOptions = props.toggleMoreOptions,
      sortTableColumn = props.sortTableColumn,
      pinTableColumn = props.pinTableColumn,
      copyTableColumn = props.copyTableColumn,
      setDisplayFormat = props.setDisplayFormat;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      showFormatter = _useState2[0],
      setShowFormatter = _useState2[1];

  var onOptionSelected = (0, _react.useCallback)(function (_ref3) {
    var value = _ref3.value;

    switch (value) {
      case _constants.TABLE_OPTION.SORT_ASC:
        sortTableColumn(_constants.SORT_ORDER.ASCENDING);
        break;

      case _constants.TABLE_OPTION.SORT_DES:
        sortTableColumn(_constants.SORT_ORDER.DESCENDING);
        break;

      case _constants.TABLE_OPTION.UNSORT:
        sortTableColumn(_constants.SORT_ORDER.UNSORT);
        break;

      case _constants.TABLE_OPTION.PIN:
        pinTableColumn();
        break;

      case _constants.TABLE_OPTION.UNPIN:
        pinTableColumn();
        break;

      case _constants.TABLE_OPTION.COPY:
        copyTableColumn();
        break;

      case _constants.TABLE_OPTION.FORMAT_COLUMN:
        setShowFormatter(true);
        return;

      default:
        break;
    }

    toggleMoreOptions(column);
  }, [column, sortTableColumn, pinTableColumn, copyTableColumn, toggleMoreOptions]);
  var TABLE_OPTION_LIST_ICONS = {
    Pin: _icons.Pin,
    ArrowDown: _icons.ArrowDown,
    ArrowUp: _icons.ArrowUp,
    Clipboard: _icons.Clipboard,
    Cancel: _icons.Cancel,
    Hash: _icons.Hash
  };
  var formatLabels = (0, _utils.getFieldFormatLabels)(colMeta[column].type);

  var options = _constants.TABLE_OPTION_LIST.filter(function (op) {
    // cant use conditions because it creates a circular dependency
    // TODO: move condition clause out of default-settings TABLE_OPTION_LIST
    var validToFormat = op.value !== _constants.TABLE_OPTION.FORMAT_COLUMN || formatLabels.length;
    return (!op.condition || op.condition(props)) && validToFormat;
  }).map(function (op) {
    return _objectSpread(_objectSpread({}, op), {}, {
      icon: TABLE_OPTION_LIST_ICONS[op.icon]
    });
  });

  var onClose = (0, _react.useCallback)(function () {
    setShowFormatter(false);
    toggleMoreOptions(column);
  }, [column, toggleMoreOptions]);
  return /*#__PURE__*/_react["default"].createElement(_portaled["default"], {
    right: 120,
    top: 20,
    isOpened: isOpened,
    onClose: onClose
  }, /*#__PURE__*/_react["default"].createElement(StyledOptionsDropdown, {
    className: "more-options"
  }, /*#__PURE__*/_react["default"].createElement(_dropdownList["default"], {
    displayOption: function displayOption(d) {
      return d.display;
    },
    options: options,
    customListItemComponent: ListItem,
    onOptionSelected: onOptionSelected,
    light: true
  }), /*#__PURE__*/_react["default"].createElement(FormatterDropdown, {
    left: 120,
    top: -10,
    isOpened: Boolean(isOpened && showFormatter),
    formatLabels: formatLabels,
    displayFormat: (_colMeta$column = colMeta[column]) === null || _colMeta$column === void 0 ? void 0 : _colMeta$column.displayFormat,
    setDisplayFormat: setDisplayFormat,
    onClose: onClose
  })));
};

var _default = OptionDropdown;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vZGF0YS10YWJsZS9vcHRpb24tZHJvcGRvd24udHN4Il0sIm5hbWVzIjpbIkxpc3RJdGVtIiwidmFsdWUiLCJkaXNwbGF5IiwiU3R5bGVkT3B0aW9uc0Ryb3Bkb3duIiwic3R5bGVkIiwiZGl2IiwiU3R5bGVkUG9wb3ZlciIsIkZvcm1hdHRlckRyb3Bkb3duIiwicHJvcHMiLCJsZWZ0IiwidG9wIiwiaXNPcGVuZWQiLCJkaXNwbGF5Rm9ybWF0Iiwic2V0RGlzcGxheUZvcm1hdCIsIm9uQ2xvc2UiLCJmb3JtYXRMYWJlbHMiLCJzZWxlY3Rpb25JbmRleCIsImZpbmRJbmRleCIsImxhYmVsIiwiZm9ybWF0Iiwib25TZWxlY3REaXNwbGF5Rm9ybWF0IiwicmVzdWx0IiwiZSIsIk9wdGlvbkRyb3Bkb3duIiwiY29sdW1uIiwiY29sTWV0YSIsInRvZ2dsZU1vcmVPcHRpb25zIiwic29ydFRhYmxlQ29sdW1uIiwicGluVGFibGVDb2x1bW4iLCJjb3B5VGFibGVDb2x1bW4iLCJzaG93Rm9ybWF0dGVyIiwic2V0U2hvd0Zvcm1hdHRlciIsIm9uT3B0aW9uU2VsZWN0ZWQiLCJUQUJMRV9PUFRJT04iLCJTT1JUX0FTQyIsIlNPUlRfT1JERVIiLCJBU0NFTkRJTkciLCJTT1JUX0RFUyIsIkRFU0NFTkRJTkciLCJVTlNPUlQiLCJQSU4iLCJVTlBJTiIsIkNPUFkiLCJGT1JNQVRfQ09MVU1OIiwiVEFCTEVfT1BUSU9OX0xJU1RfSUNPTlMiLCJQaW4iLCJBcnJvd0Rvd24iLCJBcnJvd1VwIiwiQ2xpcGJvYXJkIiwiQ2FuY2VsIiwiSGFzaCIsInR5cGUiLCJvcHRpb25zIiwiVEFCTEVfT1BUSU9OX0xJU1QiLCJmaWx0ZXIiLCJvcCIsInZhbGlkVG9Gb3JtYXQiLCJsZW5ndGgiLCJjb25kaXRpb24iLCJtYXAiLCJpY29uIiwiZCIsIkJvb2xlYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JB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QUFFcEQsUUFIM0I7QUFJRSxJQUFBLGdCQUFnQixFQUFFZ0MsZ0JBSnBCO0FBS0UsSUFBQSxLQUFLO0FBTFAsSUFERixlQVFFLGdDQUFDLGlCQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUUsR0FEUjtBQUVFLElBQUEsR0FBRyxFQUFFLENBQUMsRUFGUjtBQUdFLElBQUEsUUFBUSxFQUFFOEIsT0FBTyxDQUFDbkQsUUFBUSxJQUFJbUIsYUFBYixDQUhuQjtBQUlFLElBQUEsWUFBWSxFQUFFZixZQUpoQjtBQUtFLElBQUEsYUFBYSxxQkFBRVUsT0FBTyxDQUFDRCxNQUFELENBQVQsb0RBQUUsZ0JBQWlCWixhQUxsQztBQU1FLElBQUEsZ0JBQWdCLEVBQUVDLGdCQU5wQjtBQU9FLElBQUEsT0FBTyxFQUFFQztBQVBYLElBUkYsQ0FERixDQURGO0FBc0JELENBNUZEOztlQThGZVMsYyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUG9ydGFsZWQgZnJvbSAnLi4vcG9ydGFsZWQnO1xuaW1wb3J0IERyb3Bkb3duTGlzdCBmcm9tICcuLi9pdGVtLXNlbGVjdG9yL2Ryb3Bkb3duLWxpc3QnO1xuaW1wb3J0IHtTT1JUX09SREVSLCBUQUJMRV9PUFRJT04sIFRBQkxFX09QVElPTl9MSVNULCBUb29sdGlwRm9ybWF0fSBmcm9tICdAa2VwbGVyLmdsL2NvbnN0YW50cyc7XG5pbXBvcnQge2dldEZpZWxkRm9ybWF0TGFiZWxzfSBmcm9tICdAa2VwbGVyLmdsL3V0aWxzJztcbmltcG9ydCB7Q29sTWV0YX0gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5pbXBvcnQge0Fycm93RG93biwgQXJyb3dVcCwgQ2xpcGJvYXJkLCBQaW4sIENhbmNlbCwgSGFzaH0gZnJvbSAnLi4vaWNvbnMnO1xuXG5jb25zdCBMaXN0SXRlbSA9ICh7dmFsdWV9KSA9PiAoXG4gIDxkaXY+XG4gICAgPHZhbHVlLmljb24gaGVpZ2h0PVwiMTNweFwiIC8+XG4gICAge3ZhbHVlLmRpc3BsYXl9XG4gIDwvZGl2PlxuKTtcblxuLy8gbWFrZSBoYXNoIGljb24gc21hbGxlclxuY29uc3QgU3R5bGVkT3B0aW9uc0Ryb3Bkb3duID0gc3R5bGVkLmRpdmBcbiAgLmxpc3Qtc2VsZWN0b3Ige1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICB9XG5cbiAgLmxpc3RfX2l0ZW0gPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcblxuICAgIHN2ZyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICB9XG5cbiAgICAuZGF0YS1leC1pY29ucy1oYXNoIHtcbiAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRQb3BvdmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDE4NHB4O1xuICBoZWlnaHQ6IDE2MHB4O1xuICB6LWluZGV4OiAxMDE7XG4gIC5saXN0LXNlbGVjdG9yIHtcbiAgICBtYXgtaGVpZ2h0OiAxNjBweDtcbiAgfVxuICAuaG92ZXI6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICdcXFxcMjcxMyc7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxuYDtcblxuZXhwb3J0IHR5cGUgRm9ybWF0dGVyRHJvcGRvd25Qcm9wcyA9IHtcbiAgbGVmdDogbnVtYmVyO1xuICB0b3A6IG51bWJlcjtcbiAgaXNPcGVuZWQ6IGJvb2xlYW47XG4gIGRpc3BsYXlGb3JtYXQ/OiBzdHJpbmc7XG4gIHNldERpc3BsYXlGb3JtYXQ6IChkaXNwbGF5Rm9ybWF0OiBUb29sdGlwRm9ybWF0KSA9PiB2b2lkO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xuICBmb3JtYXRMYWJlbHM6IFRvb2x0aXBGb3JtYXRbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBGb3JtYXR0ZXJEcm9wZG93bjogUmVhY3QuRkM8Rm9ybWF0dGVyRHJvcGRvd25Qcm9wcz4gPSAoXG4gIHByb3BzOiBGb3JtYXR0ZXJEcm9wZG93blByb3BzXG4pID0+IHtcbiAgY29uc3Qge1xuICAgIGxlZnQsXG4gICAgdG9wLFxuICAgIGlzT3BlbmVkLFxuICAgIGRpc3BsYXlGb3JtYXQgPSAnTm9uZScsXG4gICAgc2V0RGlzcGxheUZvcm1hdCxcbiAgICBvbkNsb3NlLFxuICAgIGZvcm1hdExhYmVsc1xuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHNlbGVjdGlvbkluZGV4ID0gZm9ybWF0TGFiZWxzLmZpbmRJbmRleChsYWJlbCA9PiBsYWJlbC5mb3JtYXQgPT09IGRpc3BsYXlGb3JtYXQpO1xuXG4gIGNvbnN0IG9uU2VsZWN0RGlzcGxheUZvcm1hdCA9IHVzZUNhbGxiYWNrKFxuICAgIChyZXN1bHQsIGUpID0+IHtcbiAgICAgIHNldERpc3BsYXlGb3JtYXQocmVzdWx0KTtcbiAgICAgIG9uQ2xvc2UoKTtcbiAgICB9LFxuICAgIFtzZXREaXNwbGF5Rm9ybWF0LCBvbkNsb3NlXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFBvcnRhbGVkIGxlZnQ9e2xlZnR9IHRvcD17dG9wfSBpc09wZW5lZD17aXNPcGVuZWR9IG9uQ2xvc2U9e29uQ2xvc2V9PlxuICAgICAgPFN0eWxlZFBvcG92ZXIgY2xhc3NOYW1lPVwiZm9ybWF0dGVyLXBvcG92ZXJcIj5cbiAgICAgICAgPERyb3Bkb3duTGlzdFxuICAgICAgICAgIG9wdGlvbnM9e2Zvcm1hdExhYmVsc31cbiAgICAgICAgICBzZWxlY3Rpb25JbmRleD17c2VsZWN0aW9uSW5kZXh9XG4gICAgICAgICAgZGlzcGxheU9wdGlvbj17KHtsYWJlbH0pID0+IGxhYmVsfVxuICAgICAgICAgIG9uT3B0aW9uU2VsZWN0ZWQ9e29uU2VsZWN0RGlzcGxheUZvcm1hdH1cbiAgICAgICAgICBsaWdodFxuICAgICAgICAvPlxuICAgICAgPC9TdHlsZWRQb3BvdmVyPlxuICAgIDwvUG9ydGFsZWQ+XG4gICk7XG59O1xuXG5pbnRlcmZhY2UgT3B0aW9uRHJvcGRvd25Qcm9wcyB7XG4gIGlzT3BlbmVkPzogYm9vbGVhbjtcbiAgY29sdW1uOiBzdHJpbmc7XG4gIGNvbE1ldGE6IENvbE1ldGE7XG4gIHRvZ2dsZU1vcmVPcHRpb25zOiAoY29sdW1uOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHNvcnRUYWJsZUNvbHVtbjogKHNvcnQ6IHN0cmluZykgPT4gdm9pZDtcbiAgcGluVGFibGVDb2x1bW46ICgpID0+IHZvaWQ7XG4gIGNvcHlUYWJsZUNvbHVtbjogKCkgPT4gdm9pZDtcbiAgc2V0RGlzcGxheUZvcm1hdDogKGRpc3BsYXlGb3JtYXQ6IGFueSkgPT4gdm9pZDtcbiAgc29ydE1vZGU/OiBzdHJpbmc7XG4gIGlzU29ydGVkPzogc3RyaW5nO1xuICBpc1Bpbm5lZD86IGJvb2xlYW47XG59XG5cbmNvbnN0IE9wdGlvbkRyb3Bkb3duID0gKHByb3BzOiBPcHRpb25Ecm9wZG93blByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpc09wZW5lZCxcbiAgICBjb2x1bW4sXG4gICAgY29sTWV0YSxcbiAgICB0b2dnbGVNb3JlT3B0aW9ucyxcbiAgICBzb3J0VGFibGVDb2x1bW4sXG4gICAgcGluVGFibGVDb2x1bW4sXG4gICAgY29weVRhYmxlQ29sdW1uLFxuICAgIHNldERpc3BsYXlGb3JtYXRcbiAgfSA9IHByb3BzO1xuICBjb25zdCBbc2hvd0Zvcm1hdHRlciwgc2V0U2hvd0Zvcm1hdHRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG9uT3B0aW9uU2VsZWN0ZWQgPSB1c2VDYWxsYmFjayhcbiAgICAoe3ZhbHVlfSkgPT4ge1xuICAgICAgc3dpdGNoICh2YWx1ZSkge1xuICAgICAgICBjYXNlIFRBQkxFX09QVElPTi5TT1JUX0FTQzpcbiAgICAgICAgICBzb3J0VGFibGVDb2x1bW4oU09SVF9PUkRFUi5BU0NFTkRJTkcpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFRBQkxFX09QVElPTi5TT1JUX0RFUzpcbiAgICAgICAgICBzb3J0VGFibGVDb2x1bW4oU09SVF9PUkRFUi5ERVNDRU5ESU5HKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBUQUJMRV9PUFRJT04uVU5TT1JUOlxuICAgICAgICAgIHNvcnRUYWJsZUNvbHVtbihTT1JUX09SREVSLlVOU09SVCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVEFCTEVfT1BUSU9OLlBJTjpcbiAgICAgICAgICBwaW5UYWJsZUNvbHVtbigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFRBQkxFX09QVElPTi5VTlBJTjpcbiAgICAgICAgICBwaW5UYWJsZUNvbHVtbigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFRBQkxFX09QVElPTi5DT1BZOlxuICAgICAgICAgIGNvcHlUYWJsZUNvbHVtbigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFRBQkxFX09QVElPTi5GT1JNQVRfQ09MVU1OOlxuICAgICAgICAgIHNldFNob3dGb3JtYXR0ZXIodHJ1ZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB0b2dnbGVNb3JlT3B0aW9ucyhjb2x1bW4pO1xuICAgIH0sXG4gICAgW2NvbHVtbiwgc29ydFRhYmxlQ29sdW1uLCBwaW5UYWJsZUNvbHVtbiwgY29weVRhYmxlQ29sdW1uLCB0b2dnbGVNb3JlT3B0aW9uc11cbiAgKTtcblxuICBjb25zdCBUQUJMRV9PUFRJT05fTElTVF9JQ09OUyA9IHtcbiAgICBQaW4sXG4gICAgQXJyb3dEb3duLFxuICAgIEFycm93VXAsXG4gICAgQ2xpcGJvYXJkLFxuICAgIENhbmNlbCxcbiAgICBIYXNoXG4gIH07XG5cbiAgY29uc3QgZm9ybWF0TGFiZWxzID0gZ2V0RmllbGRGb3JtYXRMYWJlbHMoY29sTWV0YVtjb2x1bW5dLnR5cGUpO1xuICBjb25zdCBvcHRpb25zID0gVEFCTEVfT1BUSU9OX0xJU1QuZmlsdGVyKG9wID0+IHtcbiAgICAvLyBjYW50IHVzZSBjb25kaXRpb25zIGJlY2F1c2UgaXQgY3JlYXRlcyBhIGNpcmN1bGFyIGRlcGVuZGVuY3lcbiAgICAvLyBUT0RPOiBtb3ZlIGNvbmRpdGlvbiBjbGF1c2Ugb3V0IG9mIGRlZmF1bHQtc2V0dGluZ3MgVEFCTEVfT1BUSU9OX0xJU1RcbiAgICBjb25zdCB2YWxpZFRvRm9ybWF0ID0gb3AudmFsdWUgIT09IFRBQkxFX09QVElPTi5GT1JNQVRfQ09MVU1OIHx8IGZvcm1hdExhYmVscy5sZW5ndGg7XG4gICAgcmV0dXJuICghb3AuY29uZGl0aW9uIHx8IG9wLmNvbmRpdGlvbihwcm9wcykpICYmIHZhbGlkVG9Gb3JtYXQ7XG4gIH0pLm1hcChvcCA9PiAoe1xuICAgIC4uLm9wLFxuICAgIGljb246IFRBQkxFX09QVElPTl9MSVNUX0lDT05TW29wLmljb25dXG4gIH0pKTtcblxuICBjb25zdCBvbkNsb3NlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldFNob3dGb3JtYXR0ZXIoZmFsc2UpO1xuICAgIHRvZ2dsZU1vcmVPcHRpb25zKGNvbHVtbik7XG4gIH0sIFtjb2x1bW4sIHRvZ2dsZU1vcmVPcHRpb25zXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UG9ydGFsZWQgcmlnaHQ9ezEyMH0gdG9wPXsyMH0gaXNPcGVuZWQ9e2lzT3BlbmVkfSBvbkNsb3NlPXtvbkNsb3NlfT5cbiAgICAgIDxTdHlsZWRPcHRpb25zRHJvcGRvd24gY2xhc3NOYW1lPVwibW9yZS1vcHRpb25zXCI+XG4gICAgICAgIDxEcm9wZG93bkxpc3RcbiAgICAgICAgICBkaXNwbGF5T3B0aW9uPXtkID0+IGQuZGlzcGxheX1cbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgIGN1c3RvbUxpc3RJdGVtQ29tcG9uZW50PXtMaXN0SXRlbX1cbiAgICAgICAgICBvbk9wdGlvblNlbGVjdGVkPXtvbk9wdGlvblNlbGVjdGVkfVxuICAgICAgICAgIGxpZ2h0XG4gICAgICAgIC8+XG4gICAgICAgIDxGb3JtYXR0ZXJEcm9wZG93blxuICAgICAgICAgIGxlZnQ9ezEyMH1cbiAgICAgICAgICB0b3A9ey0xMH1cbiAgICAgICAgICBpc09wZW5lZD17Qm9vbGVhbihpc09wZW5lZCAmJiBzaG93Rm9ybWF0dGVyKX1cbiAgICAgICAgICBmb3JtYXRMYWJlbHM9e2Zvcm1hdExhYmVsc31cbiAgICAgICAgICBkaXNwbGF5Rm9ybWF0PXtjb2xNZXRhW2NvbHVtbl0/LmRpc3BsYXlGb3JtYXR9XG4gICAgICAgICAgc2V0RGlzcGxheUZvcm1hdD17c2V0RGlzcGxheUZvcm1hdH1cbiAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgICAvPlxuICAgICAgPC9TdHlsZWRPcHRpb25zRHJvcGRvd24+XG4gICAgPC9Qb3J0YWxlZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9wdGlvbkRyb3Bkb3duO1xuIl19