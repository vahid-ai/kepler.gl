"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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

var _react = _interopRequireWildcard(require("react"));

var _constants = require("@kepler.gl/constants");

var _icons = require("../common/icons");

var _styledComponents = require("../common/styled-components");

var _reactIntl = require("react-intl");

var _localization = require("@kepler.gl/localization");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var getDataRowCount = function getDataRowCount(datasets, selectedDataset, filtered, intl) {
  if (selectedDataset === undefined) {
    return;
  }

  var selectedData = datasets[selectedDataset];

  if (!selectedData) {
    return intl.formatMessage({
      id: 'modal.exportData.fileCount'
    }, {
      fileCount: Object.keys(datasets).length
    });
  }

  var dataContainer = selectedData.dataContainer,
      filteredIdxCPU = selectedData.filteredIdxCPU;

  if (filtered && !filteredIdxCPU) {
    return '-';
  }

  var rowCount = filtered ? filteredIdxCPU === null || filteredIdxCPU === void 0 ? void 0 : filteredIdxCPU.length : dataContainer.numRows();
  return intl.formatMessage({
    id: 'modal.exportData.rowCount'
  }, {
    rowCount: rowCount === null || rowCount === void 0 ? void 0 : rowCount.toLocaleString()
  });
};

var ExportDataModalFactory = function ExportDataModalFactory() {
  var ExportDataModal = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(ExportDataModal, _Component);

    var _super = _createSuper(ExportDataModal);

    function ExportDataModal() {
      var _this;

      (0, _classCallCheck2["default"])(this, ExportDataModal);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSelectDataset", function (_ref) {
        var value = _ref.target.value;

        _this.props.applyCPUFilter(value);

        _this.props.onChangeExportSelectedDataset(value);
      });
      return _this;
    }

    (0, _createClass2["default"])(ExportDataModal, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var toCPUFilter = this.props.selectedDataset || Object.keys(this.props.datasets);
        this.props.applyCPUFilter(toCPUFilter);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            _this$props$supported = _this$props.supportedDataTypes,
            supportedDataTypes = _this$props$supported === void 0 ? _constants.EXPORT_DATA_TYPE_OPTIONS : _this$props$supported,
            datasets = _this$props.datasets,
            selectedDataset = _this$props.selectedDataset,
            dataType = _this$props.dataType,
            filtered = _this$props.filtered,
            onChangeExportDataType = _this$props.onChangeExportDataType,
            onChangeExportFiltered = _this$props.onChangeExportFiltered,
            intl = _this$props.intl;
        return /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledModalContent, {
          className: "export-data-modal"
        }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "description"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "title"
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'modal.exportData.datasetTitle'
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "subtitle"
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'modal.exportData.datasetSubtitle'
        }))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "selection"
        }, /*#__PURE__*/_react["default"].createElement("select", {
          value: selectedDataset,
          onChange: this._onSelectDataset
        }, [intl.formatMessage({
          id: 'modal.exportData.allDatasets'
        })].concat(Object.keys(datasets)).map(function (d) {
          return /*#__PURE__*/_react["default"].createElement("option", {
            key: d,
            value: d
          }, datasets[d] && datasets[d].label || d);
        })))), /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "description"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "title"
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'modal.exportData.dataTypeTitle'
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "subtitle"
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'modal.exportData.dataTypeSubtitle'
        }))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "selection"
        }, supportedDataTypes.map(function (op) {
          return /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledType, {
            key: op.id,
            selected: dataType === op.id,
            onClick: function onClick() {
              return op.available && onChangeExportDataType(op.id);
            }
          }, /*#__PURE__*/_react["default"].createElement(_icons.FileType, {
            ext: op.label,
            height: "80px",
            fontSize: "11px"
          }), dataType === op.id && /*#__PURE__*/_react["default"].createElement(_styledComponents.CheckMark, null));
        }))), /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "description"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "title"
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'modal.exportData.dataTypeTitle'
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "subtitle"
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'modal.exportData.filterDataSubtitle'
        }))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "selection"
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledFilteredOption, {
          className: "unfiltered-option",
          selected: !filtered,
          onClick: function onClick() {
            return onChangeExportFiltered(false);
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "filter-option-title"
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'modal.exportData.unfilteredData'
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "filter-option-subtitle"
        }, getDataRowCount(datasets, selectedDataset, false, intl)), !filtered && /*#__PURE__*/_react["default"].createElement(_styledComponents.CheckMark, null)), /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledFilteredOption, {
          className: "filtered-option",
          selected: filtered,
          onClick: function onClick() {
            return onChangeExportFiltered(true);
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "filter-option-title"
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'modal.exportData.filteredData'
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "filter-option-subtitle"
        }, getDataRowCount(datasets, selectedDataset, true, intl)), filtered && /*#__PURE__*/_react["default"].createElement(_styledComponents.CheckMark, null))))));
      }
    }]);
    return ExportDataModal;
  }(_react.Component);

  return (0, _reactIntl.injectIntl)(ExportDataModal);
};

var _default = ExportDataModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tb2RhbHMvZXhwb3J0LWRhdGEtbW9kYWwudHN4Il0sIm5hbWVzIjpbImdldERhdGFSb3dDb3VudCIsImRhdGFzZXRzIiwic2VsZWN0ZWREYXRhc2V0IiwiZmlsdGVyZWQiLCJpbnRsIiwidW5kZWZpbmVkIiwic2VsZWN0ZWREYXRhIiwiZm9ybWF0TWVzc2FnZSIsImlkIiwiZmlsZUNvdW50IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImRhdGFDb250YWluZXIiLCJmaWx0ZXJlZElkeENQVSIsInJvd0NvdW50IiwibnVtUm93cyIsInRvTG9jYWxlU3RyaW5nIiwiRXhwb3J0RGF0YU1vZGFsRmFjdG9yeSIsIkV4cG9ydERhdGFNb2RhbCIsInZhbHVlIiwidGFyZ2V0IiwicHJvcHMiLCJhcHBseUNQVUZpbHRlciIsIm9uQ2hhbmdlRXhwb3J0U2VsZWN0ZWREYXRhc2V0IiwidG9DUFVGaWx0ZXIiLCJzdXBwb3J0ZWREYXRhVHlwZXMiLCJFWFBPUlRfREFUQV9UWVBFX09QVElPTlMiLCJkYXRhVHlwZSIsIm9uQ2hhbmdlRXhwb3J0RGF0YVR5cGUiLCJvbkNoYW5nZUV4cG9ydEZpbHRlcmVkIiwiX29uU2VsZWN0RGF0YXNldCIsImNvbmNhdCIsIm1hcCIsImQiLCJsYWJlbCIsIm9wIiwiYXZhaWxhYmxlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUVBOztBQUNBOztBQUNBOztBQU9BOztBQUNBOzs7Ozs7QUFHQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQ3RCQyxRQURzQixFQUV0QkMsZUFGc0IsRUFHdEJDLFFBSHNCLEVBSXRCQyxJQUpzQixFQUtuQjtBQUNILE1BQUlGLGVBQWUsS0FBS0csU0FBeEIsRUFBbUM7QUFDakM7QUFDRDs7QUFDRCxNQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ0MsZUFBRCxDQUE3Qjs7QUFDQSxNQUFJ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TEYsZUFRRTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsV0FDRzlCLGVBQWUsQ0FBQ0MsUUFBRCxFQUFXQyxlQUFYLEVBQTRCLElBQTVCLEVBQWtDRSxJQUFsQyxDQURsQixDQVJGLEVBV0dELFFBQVEsaUJBQUksZ0NBQUMsMkJBQUQsT0FYZixDQWRGLENBVEYsQ0E1Q0YsQ0FERixDQURGO0FBdUZEO0FBL0dnQztBQUFBO0FBQUEsSUFDTG1DLGdCQURLOztBQWtIbkMsU0FBTywyQkFBV25CLGVBQVgsQ0FBUDtBQUNELENBbkhEOztlQXFIZUQsc0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtFWFBPUlRfREFUQV9UWVBFX09QVElPTlN9IGZyb20gJ0BrZXBsZXIuZ2wvY29uc3RhbnRzJztcbmltcG9ydCB7RmlsZVR5cGV9IGZyb20gJy4uL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQge1xuICBTdHlsZWRFeHBvcnRTZWN0aW9uLFxuICBTdHlsZWRGaWx0ZXJlZE9wdGlvbixcbiAgU3R5bGVkTW9kYWxDb250ZW50LFxuICBTdHlsZWRUeXBlLFxuICBDaGVja01hcmtcbn0gZnJvbSAnLi4vY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7aW5qZWN0SW50bCwgSW50bFNoYXBlfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnQGtlcGxlci5nbC9sb2NhbGl6YXRpb24nO1xuaW1wb3J0IHtEYXRhc2V0c30gZnJvbSAnQGtlcGxlci5nbC90YWJsZSc7XG5cbmNvbnN0IGdldERhdGFSb3dDb3VudCA9IChcbiAgZGF0YXNldHM6IERhdGFzZXRzLFxuICBzZWxlY3RlZERhdGFzZXQ6IHN0cmluZyB8IHVuZGVmaW5lZCxcbiAgZmlsdGVyZWQ6IGJvb2xlYW4sXG4gIGludGw6IEludGxTaGFwZVxuKSA9PiB7XG4gIGlmIChzZWxlY3RlZERhdGFzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBzZWxlY3RlZERhdGEgPSBkYXRhc2V0c1tzZWxlY3RlZERhdGFzZXRdO1xuICBpZiAoIXNlbGVjdGVkRGF0YSkge1xuICAgIHJldHVybiBpbnRsLmZvcm1hdE1lc3NhZ2UoXG4gICAgICB7aWQ6ICdtb2RhbC5leHBvcnREYXRhLmZpbGVDb3VudCd9LFxuICAgICAge2ZpbGVDb3VudDogT2JqZWN0LmtleXMoZGF0YXNldHMpLmxlbmd0aH1cbiAgICApO1xuICB9XG4gIGNvbnN0IHtkYXRhQ29udGFpbmVyLCBmaWx0ZXJlZElkeENQVX0gPSBzZWxlY3RlZERhdGE7XG5cbiAgaWYgKGZpbHRlcmVkICYmICFmaWx0ZXJlZElkeENQVSkge1xuICAgIHJldHVybiAnLSc7XG4gIH1cblxuICBjb25zdCByb3dDb3VudCA9IGZpbHRlcmVkID8gZmlsdGVyZWRJZHhDUFU/Lmxlbmd0aCA6IGRhdGFDb250YWluZXIubnVtUm93cygpO1xuXG4gIHJldHVybiBpbnRsLmZvcm1hdE1lc3NhZ2UoXG4gICAge2lkOiAnbW9kYWwuZXhwb3J0RGF0YS5yb3dDb3VudCd9LFxuICAgIHtyb3dDb3VudDogcm93Q291bnQ/LnRvTG9jYWxlU3RyaW5nKCl9XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4cG9ydERhdGFNb2RhbFByb3BzIHtcbiAgZGF0YXNldHM6IERhdGFzZXRzO1xuICBzZWxlY3RlZERhdGFzZXQ/OiBzdHJpbmc7XG4gIGRhdGFUeXBlOiBzdHJpbmc7XG4gIGZpbHRlcmVkOiBib29sZWFuO1xuICAvLyBjYWxsYmFja3NcbiAgYXBwbHlDUFVGaWx0ZXI6IChmaWx0ZXI6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB2b2lkO1xuICBvbkNoYW5nZUV4cG9ydFNlbGVjdGVkRGF0YXNldDogKGRhdGFzZXQ6IHN0cmluZykgPT4gdm9pZDtcbiAgb25DaGFuZ2VFeHBvcnREYXRhVHlwZTogKHR5cGU6IHN0cmluZykgPT4gdm9pZDtcbiAgb25DaGFuZ2VFeHBvcnRGaWx0ZXJlZDogKGlzRmlsdGVyZWQ6IGJvb2xlYW4pID0+IHZvaWQ7XG4gIGludGw6IEludGxTaGFwZTtcbiAgc3VwcG9ydGVkRGF0YVR5cGVzOiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGF2YWlsYWJsZTogYm9vbGVhbjtcbiAgfVtdO1xufVxuXG5jb25zdCBFeHBvcnREYXRhTW9kYWxGYWN0b3J5ID0gKCkgPT4ge1xuICBjbGFzcyBFeHBvcnREYXRhTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQ8RXhwb3J0RGF0YU1vZGFsUHJvcHM+IHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHRvQ1BVRmlsdGVyID0gdGhpcy5wcm9wcy5zZWxlY3RlZERhdGFzZXQgfHwgT2JqZWN0LmtleXModGhpcy5wcm9wcy5kYXRhc2V0cyk7XG4gICAgICB0aGlzLnByb3BzLmFwcGx5Q1BVRmlsdGVyKHRvQ1BVRmlsdGVyKTtcbiAgICB9XG5cbiAgICBfb25TZWxlY3REYXRhc2V0OiBSZWFjdC5DaGFuZ2VFdmVudEhhbmRsZXI8SFRNTFNlbGVjdEVsZW1lbnQ+ID0gKHt0YXJnZXQ6IHt2YWx1ZX19KSA9PiB7XG4gICAgICB0aGlzLnByb3BzLmFwcGx5Q1BVRmlsdGVyKHZhbHVlKTtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2VFeHBvcnRTZWxlY3RlZERhdGFzZXQodmFsdWUpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHN1cHBvcnRlZERhdGFUeXBlcyA9IEVYUE9SVF9EQVRBX1RZUEVfT1BUSU9OUyxcbiAgICAgICAgZGF0YXNldHMsXG4gICAgICAgIHNlbGVjdGVkRGF0YXNldCxcbiAgICAgICAgZGF0YVR5cGUsXG4gICAgICAgIGZpbHRlcmVkLFxuICAgICAgICBvbkNoYW5nZUV4cG9ydERhdGFUeXBlLFxuICAgICAgICBvbkNoYW5nZUV4cG9ydEZpbHRlcmVkLFxuICAgICAgICBpbnRsXG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZE1vZGFsQ29udGVudCBjbGFzc05hbWU9XCJleHBvcnQtZGF0YS1tb2RhbFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8U3R5bGVkRXhwb3J0U2VjdGlvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0RGF0YS5kYXRhc2V0VGl0bGUnfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0RGF0YS5kYXRhc2V0U3VidGl0bGUnfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtzZWxlY3RlZERhdGFzZXR9IG9uQ2hhbmdlPXt0aGlzLl9vblNlbGVjdERhdGFzZXR9PlxuICAgICAgICAgICAgICAgICAge1tpbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOiAnbW9kYWwuZXhwb3J0RGF0YS5hbGxEYXRhc2V0cyd9KV1cbiAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChPYmplY3Qua2V5cyhkYXRhc2V0cykpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZCA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2R9IHZhbHVlPXtkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsoZGF0YXNldHNbZF0gJiYgZGF0YXNldHNbZF0ubGFiZWwpIHx8IGR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU3R5bGVkRXhwb3J0U2VjdGlvbj5cbiAgICAgICAgICAgIDxTdHlsZWRFeHBvcnRTZWN0aW9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnREYXRhLmRhdGFUeXBlVGl0bGUnfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0RGF0YS5kYXRhVHlwZVN1YnRpdGxlJ30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAge3N1cHBvcnRlZERhdGFUeXBlcy5tYXAob3AgPT4gKFxuICAgICAgICAgICAgICAgICAgPFN0eWxlZFR5cGVcbiAgICAgICAgICAgICAgICAgICAga2V5PXtvcC5pZH1cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2RhdGFUeXBlID09PSBvcC5pZH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3AuYXZhaWxhYmxlICYmIG9uQ2hhbmdlRXhwb3J0RGF0YVR5cGUob3AuaWQpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RmlsZVR5cGUgZXh0PXtvcC5sYWJlbH0gaGVpZ2h0PVwiODBweFwiIGZvbnRTaXplPVwiMTFweFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhVHlwZSA9PT0gb3AuaWQgJiYgPENoZWNrTWFyayAvPn1cbiAgICAgICAgICAgICAgICAgIDwvU3R5bGVkVHlwZT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1N0eWxlZEV4cG9ydFNlY3Rpb24+XG4gICAgICAgICAgICA8U3R5bGVkRXhwb3J0U2VjdGlvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0RGF0YS5kYXRhVHlwZVRpdGxlJ30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydERhdGEuZmlsdGVyRGF0YVN1YnRpdGxlJ30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPFN0eWxlZEZpbHRlcmVkT3B0aW9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1bmZpbHRlcmVkLW9wdGlvblwiXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17IWZpbHRlcmVkfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2VFeHBvcnRGaWx0ZXJlZChmYWxzZSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItb3B0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0RGF0YS51bmZpbHRlcmVkRGF0YSd9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLW9wdGlvbi1zdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICB7Z2V0RGF0YVJvd0NvdW50KGRhdGFzZXRzLCBzZWxlY3RlZERhdGFzZXQsIGZhbHNlLCBpbnRsKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgeyFmaWx0ZXJlZCAmJiA8Q2hlY2tNYXJrIC8+fVxuICAgICAgICAgICAgICAgIDwvU3R5bGVkRmlsdGVyZWRPcHRpb24+XG4gICAgICAgICAgICAgICAgPFN0eWxlZEZpbHRlcmVkT3B0aW9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXJlZC1vcHRpb25cIlxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2ZpbHRlcmVkfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DaGFuZ2VFeHBvcnRGaWx0ZXJlZCh0cnVlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1vcHRpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnREYXRhLmZpbHRlcmVkRGF0YSd9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLW9wdGlvbi1zdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICB7Z2V0RGF0YVJvd0NvdW50KGRhdGFzZXRzLCBzZWxlY3RlZERhdGFzZXQsIHRydWUsIGludGwpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7ZmlsdGVyZWQgJiYgPENoZWNrTWFyayAvPn1cbiAgICAgICAgICAgICAgICA8L1N0eWxlZEZpbHRlcmVkT3B0aW9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU3R5bGVkRXhwb3J0U2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TdHlsZWRNb2RhbENvbnRlbnQ+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbmplY3RJbnRsKEV4cG9ydERhdGFNb2RhbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeHBvcnREYXRhTW9kYWxGYWN0b3J5O1xuIl19