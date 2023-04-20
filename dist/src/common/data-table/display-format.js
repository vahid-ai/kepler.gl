"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NumberFormatConfig = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("@kepler.gl/utils");

var _constants = require("@kepler.gl/constants");

var _styledComponents2 = require("../../common/styled-components");

var _optionDropdown = require("./option-dropdown");

var _templateObject, _templateObject2, _templateObject3;

var StyledConfigPanel = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  box-shadow: 0 10px 18px 0 rgb(0 0 0 / 36%);\n  flex-grow: 1;\n"])), function (props) {
  return props.theme.headerCellBackground;
});

var StyledConfigPanelContent = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 20px;\n  min-width: 230px;\n  max-height: 400px;\n  overflow: overlay;\n"])));

var StyledTableConfigGroup = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n\n  input {\n    cursor: pointer !important;\n    width: 184px;\n    height: 22px;\n  }\n"])));

var NumberFormatConfig = function NumberFormatConfig(_ref) {
  var title = _ref.title,
      id = _ref.id,
      defaultFormat = _ref.defaultFormat,
      options = _ref.options,
      columns = _ref.columns,
      setColumnDisplayFormat = _ref.setColumnDisplayFormat,
      onClose = _ref.onClose;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      showFormatter = _useState2[0],
      setShowFormatter = _useState2[1];

  var _useState3 = (0, _react.useState)(defaultFormat),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      format = _useState4[0],
      setFormat = _useState4[1];

  var onSetDisplayFormat = (0, _react.useCallback)(function (option) {
    setFormat(option.label);
    var formats = columns.reduce(function (prev, col) {
      prev[col.name] = option.format;
      return prev;
    }, {});
    setColumnDisplayFormat(formats);
    onClose();
  }, [columns, setColumnDisplayFormat, onClose]);
  return /*#__PURE__*/_react["default"].createElement(StyledTableConfigGroup, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.InputLight, {
    id: id,
    type: "text",
    value: title,
    "data-tip": format,
    readOnly: true,
    onClick: function onClick() {
      return setShowFormatter(true);
    }
  }), /*#__PURE__*/_react["default"].createElement(_optionDropdown.FormatterDropdown, {
    left: -185,
    top: 10,
    isOpened: showFormatter,
    displayFormat: format,
    setDisplayFormat: onSetDisplayFormat,
    onClose: function onClose() {
      return setShowFormatter(false);
    },
    formatLabels: options
  }));
};

exports.NumberFormatConfig = NumberFormatConfig;

function DataTableConfigFactory() {
  var getColumnsByFieldType = function getColumnsByFieldType(columns, colMeta, fieldType) {
    var result = [];
    columns.forEach(function (colName) {
      var _colMeta$colName;

      if (((_colMeta$colName = colMeta[colName]) === null || _colMeta$colName === void 0 ? void 0 : _colMeta$colName.type) === fieldType) {
        result.push(colMeta[colName]);
      }
    });
    return result;
  };

  var DataTableConfig = function DataTableConfig(_ref2) {
    var columns = _ref2.columns,
        colMeta = _ref2.colMeta,
        setColumnDisplayFormat = _ref2.setColumnDisplayFormat,
        onClose = _ref2.onClose;
    var formatConfigs = [{
      title: '# Set Integer Number Format',
      id: 'input-iteger-format',
      displayType: _constants.ALL_FIELD_TYPES.integer
    }, {
      title: '# Set Float Number Format',
      id: 'input-float-format',
      displayType: _constants.ALL_FIELD_TYPES.real
    }, {
      title: '# Set Timestamp Format',
      id: 'input-datetime-format',
      displayType: _constants.ALL_FIELD_TYPES.timestamp
    }, {
      title: '# Set Date Format',
      id: 'input-date-format',
      displayType: _constants.ALL_FIELD_TYPES.date
    }, {
      title: '# Set Boolean Format',
      id: 'input-bool-format',
      displayType: _constants.ALL_FIELD_TYPES["boolean"]
    }];
    return /*#__PURE__*/_react["default"].createElement(StyledConfigPanel, null, /*#__PURE__*/_react["default"].createElement(StyledConfigPanelContent, null, formatConfigs.map(function (config, index) {
      return /*#__PURE__*/_react["default"].createElement(NumberFormatConfig, {
        title: "".concat(config.title),
        key: index,
        id: config.id,
        defaultFormat: 'None',
        colMeta: colMeta,
        options: (0, _utils.getFieldFormatLabels)("".concat(config.displayType)),
        columns: getColumnsByFieldType(columns, colMeta, "".concat(config.displayType)),
        setColumnDisplayFormat: setColumnDisplayFormat,
        onClose: onClose
      });
    })));
  };

  return DataTableConfig;
}

var _default = DataTableConfigFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vZGF0YS10YWJsZS9kaXNwbGF5LWZvcm1hdC50c3giXSwibmFtZXMiOlsiU3R5bGVkQ29uZmlnUGFuZWwiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiaGVhZGVyQ2VsbEJhY2tncm91bmQiLCJTdHlsZWRDb25maWdQYW5lbENvbnRlbnQiLCJTdHlsZWRUYWJsZUNvbmZpZ0dyb3VwIiwiTnVtYmVyRm9ybWF0Q29uZmlnIiwidGl0bGUiLCJpZCIsImRlZmF1bHRGb3JtYXQiLCJvcHRpb25zIiwiY29sdW1ucyIsInNldENvbHVtbkRpc3BsYXlGb3JtYXQiLCJvbkNsb3NlIiwic2hvd0Zvcm1hdHRlciIsInNldFNob3dGb3JtYXR0ZXIiLCJmb3JtYXQiLCJzZXRGb3JtYXQiLCJvblNldERpc3BsYXlGb3JtYXQiLCJvcHRpb24iLCJsYWJlbCIsImZvcm1hdHMiLCJyZWR1Y2UiLCJwcmV2IiwiY29sIiwibmFtZSIsIkRhdGFUYWJsZUNvbmZpZ0ZhY3RvcnkiLCJnZXRDb2x1bW5zQnlGaWVsZFR5cGUiLCJjb2xNZXRhIiwiZmllbGRUeXBlIiwicmVzdWx0IiwiZm9yRWFjaCIsImNvbE5hbWUiLCJ0eXBlIiwicHVzaCIsIkRhdGFUYWJsZUNvbmZpZyIsImZvcm1hdENvbmZpZ3MiLCJkaXNwbGF5VHlwZSIsIkFMTF9GSUVMRF9UWVBFUyIsImludGVnZXIiLCJyZWFsIiwidGltZXN0YW1wIiwiZGF0ZSIsIm1hcCIsImNvbmZpZyIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBR0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBR0MsNkJBQU9DLEdBQVYsb0xBQ0QsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxvQkFBaEI7QUFBQSxDQURKLENBQXZCOztBQUtBLElBQU1DLHdCQUF3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QUpqQjtBQUtFLFFBQUEsT0FBTyxFQUFFb0IsT0FMWDtBQU1FLFFBQUEsT0FBTyxFQUFFLDJDQUF3QmdCLE1BQU0sQ0FBQ1AsV0FBL0IsRUFOWDtBQU9FLFFBQUEsT0FBTyxFQUFFVixxQkFBcUIsQ0FBQ2hCLE9BQUQsRUFBVWlCLE9BQVYsWUFBc0JnQixNQUFNLENBQUNQLFdBQTdCLEVBUGhDO0FBUUUsUUFBQSxzQkFBc0IsRUFBRXpCLHNCQVIxQjtBQVNFLFFBQUEsT0FBTyxFQUFFQztBQVRYLFFBRGlCO0FBQUEsS0FBbEIsQ0FESCxDQURGLENBREY7QUFtQkQsR0FoREQ7O0FBaURBLFNBQU9zQixlQUFQO0FBQ0Q7O2VBRWNULHNCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHtnZXRGaWVsZEZvcm1hdExhYmVsc30gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5pbXBvcnQge0FMTF9GSUVMRF9UWVBFUywgVG9vbHRpcEZvcm1hdH0gZnJvbSAnQGtlcGxlci5nbC9jb25zdGFudHMnO1xuaW1wb3J0IHtDb2xNZXRhLCBDb2xNZXRhUHJvcHN9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuXG5pbXBvcnQge0lucHV0TGlnaHR9IGZyb20gJy4uLy4uL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0Zvcm1hdHRlckRyb3Bkb3dufSBmcm9tICcuL29wdGlvbi1kcm9wZG93bic7XG5cbmNvbnN0IFN0eWxlZENvbmZpZ1BhbmVsID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXJDZWxsQmFja2dyb3VuZH07XG4gIGJveC1zaGFkb3c6IDAgMTBweCAxOHB4IDAgcmdiKDAgMCAwIC8gMzYlKTtcbiAgZmxleC1ncm93OiAxO1xuYDtcbmNvbnN0IFN0eWxlZENvbmZpZ1BhbmVsQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1pbi13aWR0aDogMjMwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogb3ZlcmxheTtcbmA7XG5cbmNvbnN0IFN0eWxlZFRhYmxlQ29uZmlnR3JvdXAgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGlucHV0IHtcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTg0cHg7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICB9XG5gO1xuXG5leHBvcnQgdHlwZSBEYXRhVGFibGVDb25maWdQcm9wcyA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgZGVmYXVsdEZvcm1hdDogc3RyaW5nO1xuICBvcHRpb25zOiBUb29sdGlwRm9ybWF0W107XG4gIGNvbHVtbnM6IHtuYW1lOiBzdHJpbmd9W107XG4gIGNvbE1ldGE6IENvbE1ldGE7XG4gIHNldENvbHVtbkRpc3BsYXlGb3JtYXQ6IChmb3JtYXRzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSkgPT4gdm9pZDtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBjb25zdCBOdW1iZXJGb3JtYXRDb25maWc6IFJlYWN0LkZDPERhdGFUYWJsZUNvbmZpZ1Byb3BzPiA9ICh7XG4gIHRpdGxlLFxuICBpZCxcbiAgZGVmYXVsdEZvcm1hdCxcbiAgb3B0aW9ucyxcbiAgY29sdW1ucyxcbiAgc2V0Q29sdW1uRGlzcGxheUZvcm1hdCxcbiAgb25DbG9zZVxufTogRGF0YVRhYmxlQ29uZmlnUHJvcHMpID0+IHtcbiAgY29uc3QgW3Nob3dGb3JtYXR0ZXIsIHNldFNob3dGb3JtYXR0ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZm9ybWF0LCBzZXRGb3JtYXRdID0gdXNlU3RhdGUoZGVmYXVsdEZvcm1hdCk7XG5cbiAgY29uc3Qgb25TZXREaXNwbGF5Rm9ybWF0ID0gdXNlQ2FsbGJhY2soXG4gICAgKG9wdGlvbjogVG9vbHRpcEZvcm1hdCkgPT4ge1xuICAgICAgc2V0Rm9ybWF0KG9wdGlvbi5sYWJlbCk7XG4gICAgICBjb25zdCBmb3JtYXRzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IGNvbHVtbnMucmVkdWNlKChwcmV2LCBjb2wpID0+IHtcbiAgICAgICAgcHJldltjb2wubmFtZV0gPSBvcHRpb24uZm9ybWF0O1xuICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgIH0sIHt9KTtcbiAgICAgIHNldENvbHVtbkRpc3BsYXlGb3JtYXQoZm9ybWF0cyk7XG4gICAgICBvbkNsb3NlKCk7XG4gICAgfSxcbiAgICBbY29sdW1ucywgc2V0Q29sdW1uRGlzcGxheUZvcm1hdCwgb25DbG9zZV1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRUYWJsZUNvbmZpZ0dyb3VwPlxuICAgICAgPElucHV0TGlnaHRcbiAgICAgICAgaWQ9e2lkfVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgZGF0YS10aXA9e2Zvcm1hdH1cbiAgICAgICAgcmVhZE9ubHlcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0Zvcm1hdHRlcih0cnVlKX1cbiAgICAgIC8+XG4gICAgICA8Rm9ybWF0dGVyRHJvcGRvd25cbiAgICAgICAgbGVmdD17LTE4NX1cbiAgICAgICAgdG9wPXsxMH1cbiAgICAgICAgaXNPcGVuZWQ9e3Nob3dGb3JtYXR0ZXJ9XG4gICAgICAgIGRpc3BsYXlGb3JtYXQ9e2Zvcm1hdH1cbiAgICAgICAgc2V0RGlzcGxheUZvcm1hdD17b25TZXREaXNwbGF5Rm9ybWF0fVxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93Rm9ybWF0dGVyKGZhbHNlKX1cbiAgICAgICAgZm9ybWF0TGFiZWxzPXtvcHRpb25zfVxuICAgICAgLz5cbiAgICA8L1N0eWxlZFRhYmxlQ29uZmlnR3JvdXA+XG4gICk7XG59O1xuXG5mdW5jdGlvbiBEYXRhVGFibGVDb25maWdGYWN0b3J5KCkge1xuICBjb25zdCBnZXRDb2x1bW5zQnlGaWVsZFR5cGUgPSAoY29sdW1uczogc3RyaW5nW10sIGNvbE1ldGE6IENvbE1ldGEsIGZpZWxkVHlwZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0OiBDb2xNZXRhUHJvcHNbXSA9IFtdO1xuICAgIGNvbHVtbnMuZm9yRWFjaChjb2xOYW1lID0+IHtcbiAgICAgIGlmIChjb2xNZXRhW2NvbE5hbWVdPy50eXBlID09PSBmaWVsZFR5cGUpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goY29sTWV0YVtjb2xOYW1lXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBjb25zdCBEYXRhVGFibGVDb25maWcgPSAoe2NvbHVtbnMsIGNvbE1ldGEsIHNldENvbHVtbkRpc3BsYXlGb3JtYXQsIG9uQ2xvc2V9KSA9PiB7XG4gICAgY29uc3QgZm9ybWF0Q29uZmlncyA9IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICcjIFNldCBJbnRlZ2VyIE51bWJlciBGb3JtYXQnLFxuICAgICAgICBpZDogJ2lucHV0LWl0ZWdlci1mb3JtYXQnLFxuICAgICAgICBkaXNwbGF5VHlwZTogQUxMX0ZJRUxEX1RZUEVTLmludGVnZXJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnIyBTZXQgRmxvYXQgTnVtYmVyIEZvcm1hdCcsXG4gICAgICAgIGlkOiAnaW5wdXQtZmxvYXQtZm9ybWF0JyxcbiAgICAgICAgZGlzcGxheVR5cGU6IEFMTF9GSUVMRF9UWVBFUy5yZWFsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJyMgU2V0IFRpbWVzdGFtcCBGb3JtYXQnLFxuICAgICAgICBpZDogJ2lucHV0LWRhdGV0aW1lLWZvcm1hdCcsXG4gICAgICAgIGRpc3BsYXlUeXBlOiBBTExfRklFTERfVFlQRVMudGltZXN0YW1wXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJyMgU2V0IERhdGUgRm9ybWF0JyxcbiAgICAgICAgaWQ6ICdpbnB1dC1kYXRlLWZvcm1hdCcsXG4gICAgICAgIGRpc3BsYXlUeXBlOiBBTExfRklFTERfVFlQRVMuZGF0ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICcjIFNldCBCb29sZWFuIEZvcm1hdCcsXG4gICAgICAgIGlkOiAnaW5wdXQtYm9vbC1mb3JtYXQnLFxuICAgICAgICBkaXNwbGF5VHlwZTogQUxMX0ZJRUxEX1RZUEVTLmJvb2xlYW5cbiAgICAgIH1cbiAgICBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRDb25maWdQYW5lbD5cbiAgICAgICAgPFN0eWxlZENvbmZpZ1BhbmVsQ29udGVudD5cbiAgICAgICAgICB7Zm9ybWF0Q29uZmlncy5tYXAoKGNvbmZpZywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxOdW1iZXJGb3JtYXRDb25maWdcbiAgICAgICAgICAgICAgdGl0bGU9e2Ake2NvbmZpZy50aXRsZX1gfVxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBpZD17Y29uZmlnLmlkfVxuICAgICAgICAgICAgICBkZWZhdWx0Rm9ybWF0PXsnTm9uZSd9XG4gICAgICAgICAgICAgIGNvbE1ldGE9e2NvbE1ldGF9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e2dldEZpZWxkRm9ybWF0TGFiZWxzKGAke2NvbmZpZy5kaXNwbGF5VHlwZX1gKX1cbiAgICAgICAgICAgICAgY29sdW1ucz17Z2V0Q29sdW1uc0J5RmllbGRUeXBlKGNvbHVtbnMsIGNvbE1ldGEsIGAke2NvbmZpZy5kaXNwbGF5VHlwZX1gKX1cbiAgICAgICAgICAgICAgc2V0Q29sdW1uRGlzcGxheUZvcm1hdD17c2V0Q29sdW1uRGlzcGxheUZvcm1hdH1cbiAgICAgICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3R5bGVkQ29uZmlnUGFuZWxDb250ZW50PlxuICAgICAgPC9TdHlsZWRDb25maWdQYW5lbD5cbiAgICApO1xuICB9O1xuICByZXR1cm4gRGF0YVRhYmxlQ29uZmlnO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhVGFibGVDb25maWdGYWN0b3J5O1xuIl19