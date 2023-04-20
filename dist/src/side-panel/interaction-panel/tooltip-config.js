"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactIntl = require("react-intl");

var _localization = require("@kepler.gl/localization");

var _styledComponents2 = require("../../common/styled-components");

var _datasetTag = _interopRequireDefault(require("../common/dataset-tag"));

var _tooltipChicklet = _interopRequireDefault(require("./tooltip-config/tooltip-chicklet"));

var _switch = _interopRequireDefault(require("../../common/switch"));

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _constants = require("@kepler.gl/constants");

var _fieldSelector = _interopRequireDefault(require("../../common/field-selector"));

var _templateObject, _templateObject2, _templateObject3;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TooltipConfigWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  .item-selector > div > div {\n    overflow: visible;\n  }\n"])));

var ButtonWrapper = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: inherit;\n  padding: 0;\n\n  .button.clear-all {\n    background: transparent;\n    color: ", ";\n    margin: 0 0 0 8px;\n    padding: 0;\n\n    &:hover {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.subtextColor;
}, function (props) {
  return props.theme.textColor;
});

var CompareSwitchWrapper = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  display: flex;\n  font-size: ", ";\n  justify-content: space-between;\n  line-height: 11px;\n  margin-bottom: 8px;\n"])), function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.inputFontSize;
});

TooltipConfigFactory.deps = [_datasetTag["default"], _fieldSelector["default"]];

function TooltipConfigFactory(DatasetTag, FieldSelector) {
  var DatasetTooltipConfig = function DatasetTooltipConfig(_ref) {
    var config = _ref.config,
        onChange = _ref.onChange,
        dataset = _ref.dataset,
        onDisplayFormatChange = _ref.onDisplayFormatChange;
    var dataId = dataset.id;
    return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, {
      key: dataId
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.SBFlexboxNoMargin, null, /*#__PURE__*/_react["default"].createElement(DatasetTag, {
      dataset: dataset
    }), Boolean(config.fieldsToShow[dataId].length) && /*#__PURE__*/_react["default"].createElement(ButtonWrapper, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
      className: "clear-all",
      onClick: function onClick() {
        var newConfig = _objectSpread(_objectSpread({}, config), {}, {
          fieldsToShow: _objectSpread(_objectSpread({}, config.fieldsToShow), {}, (0, _defineProperty2["default"])({}, dataId, []))
        });

        onChange(newConfig);
      },
      width: "54px",
      secondary: true
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: "fieldSelector.clearAll"
    })))), /*#__PURE__*/_react["default"].createElement(FieldSelector, {
      fields: dataset.fields,
      value: config.fieldsToShow[dataId],
      onSelect: function onSelect(selected) {
        var newConfig = _objectSpread(_objectSpread({}, config), {}, {
          fieldsToShow: _objectSpread(_objectSpread({}, config.fieldsToShow), {}, (0, _defineProperty2["default"])({}, dataId, selected.map(function (f) {
            return config.fieldsToShow[dataId].find(function (tooltipField) {
              return tooltipField.name === f.name;
            }) || {
              name: f.name,
              // default initial tooltip is null
              format: null
            };
          })))
        });

        onChange(newConfig);
      },
      closeOnSelect: false,
      multiSelect: true,
      inputTheme: "secondary",
      CustomChickletComponent: (0, _tooltipChicklet["default"])(dataId, config, onChange, dataset.fields, onDisplayFormatChange)
    }));
  };

  var TooltipConfig = function TooltipConfig(_ref2) {
    var config = _ref2.config,
        datasets = _ref2.datasets,
        _onChange = _ref2.onChange,
        onDisplayFormatChange = _ref2.onDisplayFormatChange,
        intl = _ref2.intl;
    return /*#__PURE__*/_react["default"].createElement(TooltipConfigWrapper, null, Object.keys(config.fieldsToShow).map(function (dataId) {
      return dataId === _constants.GEOCODER_DATASET_NAME ? null : /*#__PURE__*/_react["default"].createElement(DatasetTooltipConfig, {
        key: dataId,
        config: config,
        onChange: _onChange,
        dataset: datasets[dataId],
        onDisplayFormatChange: onDisplayFormatChange
      });
    }), /*#__PURE__*/_react["default"].createElement(CompareSwitchWrapper, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: "compare.modeLabel"
    }), /*#__PURE__*/_react["default"].createElement(_switch["default"], {
      checked: config.compareMode,
      id: "compare-mode-toggle",
      onChange: function onChange() {
        var newConfig = _objectSpread(_objectSpread({}, config), {}, {
          compareMode: !config.compareMode
        });

        _onChange(newConfig);
      },
      secondary: true
    })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: "compare.typeLabel"
    })), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
      disabled: !config.compareMode,
      displayOption: function displayOption(d) {
        return intl.formatMessage({
          id: "compare.types.".concat(d)
        });
      },
      selectedItems: config.compareType,
      options: Object.values(_constants.COMPARE_TYPES),
      multiSelect: false,
      searchable: false,
      inputTheme: 'secondary',
      getOptionValue: function getOptionValue(d) {
        return d;
      },
      onChange: function onChange(option) {
        var newConfig = _objectSpread(_objectSpread({}, config), {}, {
          // @ts-expect-error
          compareType: option
        });

        _onChange(newConfig);
      }
    })));
  };

  return (0, _reactIntl.injectIntl)(TooltipConfig);
}

var _default = TooltipConfigFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2ludGVyYWN0aW9uLXBhbmVsL3Rvb2x0aXAtY29uZmlnLnRzeCJdLCJuYW1lcyI6WyJUb29sdGlwQ29uZmlnV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIkJ1dHRvbldyYXBwZXIiLCJwcm9wcyIsInRoZW1lIiwic3VidGV4dENvbG9yIiwidGV4dENvbG9yIiwiQ29tcGFyZVN3aXRjaFdyYXBwZXIiLCJsYWJlbENvbG9yIiwiaW5wdXRGb250U2l6ZSIsIlRvb2x0aXBDb25maWdGYWN0b3J5IiwiZGVwcyIsIkRhdGFzZXRUYWdGYWN0b3J5IiwiRmllbGRTZWxlY3RvckZhY3RvcnkiLCJEYXRhc2V0VGFnIiwiRmllbGRTZWxlY3RvciIsIkRhdGFzZXRUb29sdGlwQ29uZmlnIiwiY29uZmlnIiwib25DaGFuZ2UiLCJkYXRhc2V0Iiwib25EaXNwbGF5Rm9ybWF0Q2hhbmdlIiwiZGF0YUlkIiwiaWQiLCJCb29sZWFuIiwiZmllbGRzVG9TaG93IiwibGVuZ3RoIiwibmV3Q29uZmlnIiwiZmllbGRzIiwic2VsZWN0ZWQiLCJtYXAiLCJmIiwiZmluZCIsInRvb2x0aXBGaWVsZCIsIm5hbWUiLCJmb3JtYXQiLCJUb29sdGlwQ29uZmlnIiwiZGF0YXNldHMiLCJpbnRsIiwiT2JqZWN0Iiwia2V5cyIsIkdFT0NPREVSX0RBVEFTRVRfTkFNRSIsImNvbXBhcmVNb2RlIiwiZCIsImZvcm1hdE1lc3NhZ2UiLCJjb21wYXJlVHlwZSIsInZhbHVlcyIsIkNPTVBBUkVfVFlQRVMiLCJvcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBTUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBR0EsSUFBTUEsb0JBQW9CLEdBQUdDLDZCQUFPQyxHQUFWLHFKQUExQjs7QUFNQSxJQUFNQyxhQUFhLEdBQUdGLDZCQUFPQyxH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O0FBRlIsVUFBZjs7QUFJQXZCLFFBQUFBLFNBQVEsQ0FBQ1EsU0FBRCxDQUFSO0FBQ0QsT0FUSDtBQVVFLE1BQUEsU0FBUztBQVZYLE1BRkYsQ0FaRixlQTJCRSxnQ0FBQyxtQ0FBRCxxQkFDRSxnQ0FBQyw2QkFBRCxxQkFDRSxnQ0FBQyw4QkFBRDtBQUFrQixNQUFBLEVBQUUsRUFBQztBQUFyQixNQURGLENBREYsZUFJRSxnQ0FBQyx3QkFBRDtBQUNFLE1BQUEsUUFBUSxFQUFFLENBQUNULE1BQU0sQ0FBQ3dCLFdBRHBCO0FBRUUsTUFBQSxhQUFhLEVBQUUsdUJBQUFDLENBQUM7QUFBQSxlQUNkTCxJQUFJLENBQUNNLGFBQUwsQ0FBbUI7QUFDakJyQixVQUFBQSxFQUFFLDBCQUFtQm9CLENBQW5CO0FBRGUsU0FBbkIsQ0FEYztBQUFBLE9BRmxCO0FBT0UsTUFBQSxhQUFhLEVBQUV6QixNQUFNLENBQUMyQixXQVB4QjtBQVFFLE1BQUEsT0FBTyxFQUFFTixNQUFNLENBQUNPLE1BQVAsQ0FBY0Msd0JBQWQsQ0FSWDtBQVNFLE1BQUEsV0FBVyxFQUFFLEtBVGY7QUFVRSxNQUFBLFVBQVUsRUFBRSxLQVZkO0FBV0UsTUFBQSxVQUFVLEVBQUUsV0FYZDtBQVlFLE1BQUEsY0FBYyxFQUFFLHdCQUFBSixDQUFDO0FBQUEsZUFBSUEsQ0FBSjtBQUFBLE9BWm5CO0FBYUUsTUFBQSxRQUFRLEVBQUUsa0JBQUFLLE1BQU0sRUFBSTtBQUNsQixZQUFNckIsU0FBdUMsbUNBQ3hDVCxNQUR3QztBQUUzQztBQUNBMkIsVUFBQUEsV0FBVyxFQUFFRztBQUg4QixVQUE3Qzs7QUFLQTdCLFFBQUFBLFNBQVEsQ0FBQ1EsU0FBRCxDQUFSO0FBQ0Q7QUFwQkgsTUFKRixDQTNCRixDQURGO0FBeURELEdBaEVEOztBQWtFQSxTQUFPLDJCQUFXUyxhQUFYLENBQVA7QUFDRDs7ZUFFY3pCLG9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtpbmplY3RJbnRsLCBJbnRsU2hhcGV9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdAa2VwbGVyLmdsL2xvY2FsaXphdGlvbic7XG5cbmltcG9ydCB7XG4gIFNpZGVQYW5lbFNlY3Rpb24sXG4gIFNCRmxleGJveE5vTWFyZ2luLFxuICBCdXR0b24sXG4gIFBhbmVsTGFiZWxcbn0gZnJvbSAnLi4vLi4vY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBEYXRhc2V0VGFnRmFjdG9yeSBmcm9tICcuLi9jb21tb24vZGF0YXNldC10YWcnO1xuaW1wb3J0IFRvb2x0aXBDaGlja2xldEZhY3RvcnkgZnJvbSAnLi90b29sdGlwLWNvbmZpZy90b29sdGlwLWNoaWNrbGV0JztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnLi4vLi4vY29tbW9uL3N3aXRjaCc7XG5pbXBvcnQgSXRlbVNlbGVjdG9yIGZyb20gJy4uLy4uL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2l0ZW0tc2VsZWN0b3InO1xuaW1wb3J0IHtDT01QQVJFX1RZUEVTLCBHRU9DT0RFUl9EQVRBU0VUX05BTUV9IGZyb20gJ0BrZXBsZXIuZ2wvY29uc3RhbnRzJztcbmltcG9ydCBGaWVsZFNlbGVjdG9yRmFjdG9yeSBmcm9tICcuLi8uLi9jb21tb24vZmllbGQtc2VsZWN0b3InO1xuaW1wb3J0IEtlcGxlclRhYmxlLCB7RGF0YXNldHN9IGZyb20gJ0BrZXBsZXIuZ2wvdGFibGUnO1xuXG5jb25zdCBUb29sdGlwQ29uZmlnV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIC5pdGVtLXNlbGVjdG9yID4gZGl2ID4gZGl2IHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuYDtcblxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDA7XG5cbiAgLmJ1dHRvbi5jbGVhci1hbGwge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvcn07XG4gICAgbWFyZ2luOiAwIDAgMCA4cHg7XG4gICAgcGFkZGluZzogMDtcblxuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IENvbXBhcmVTd2l0Y2hXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dEZvbnRTaXplfTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuYDtcblxudHlwZSBUb29sdGlwQ29uZmlnUHJvcHMgPSB7XG4gIGNvbmZpZzoge1xuICAgIGZpZWxkc1RvU2hvdzoge1xuICAgICAgW2tleTogc3RyaW5nXToge25hbWU6IHN0cmluZzsgZm9ybWF0OiBzdHJpbmcgfCBudWxsfVtdO1xuICAgIH07XG4gICAgY29tcGFyZU1vZGU6IGJvb2xlYW47XG4gICAgY29tcGFyZVR5cGU6IHN0cmluZyB8IG51bGw7XG4gIH07XG4gIG9uQ2hhbmdlOiAoY29uZmlnOiB7XG4gICAgZmllbGRzVG9TaG93OiB7XG4gICAgICBba2V5OiBzdHJpbmddOiB7bmFtZTogc3RyaW5nOyBmb3JtYXQ6IHN0cmluZyB8IG51bGx9W107XG4gICAgfTtcbiAgICBjb21wYXJlTW9kZTogYm9vbGVhbjtcbiAgICBjb21wYXJlVHlwZTogc3RyaW5nIHwgbnVsbDtcbiAgfSkgPT4gdm9pZDtcbiAgZGF0YXNldHM6IERhdGFzZXRzO1xuICBpbnRsOiBJbnRsU2hhcGU7XG4gIG9uRGlzcGxheUZvcm1hdENoYW5nZTogKGRhdGFJZCwgY29sdW1uLCBkaXNwbGF5Rm9ybWF0KSA9PiB2b2lkO1xufTtcblxudHlwZSBEYXRhc2V0VG9vbHRpcENvbmZpZ1Byb3BzID0ge1xuICBjb25maWc6IHtcbiAgICBmaWVsZHNUb1Nob3c6IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IHtuYW1lOiBzdHJpbmc7IGZvcm1hdDogc3RyaW5nIHwgbnVsbH1bXTtcbiAgICB9O1xuICAgIGNvbXBhcmVNb2RlOiBib29sZWFuO1xuICAgIGNvbXBhcmVUeXBlOiBzdHJpbmcgfCBudWxsO1xuICB9O1xuICBvbkNoYW5nZTogKGNvbmZpZzoge1xuICAgIGZpZWxkc1RvU2hvdzoge1xuICAgICAgW2tleTogc3RyaW5nXToge25hbWU6IHN0cmluZzsgZm9ybWF0OiBzdHJpbmcgfCBudWxsfVtdO1xuICAgIH07XG4gICAgY29tcGFyZU1vZGU6IGJvb2xlYW47XG4gICAgY29tcGFyZVR5cGU6IHN0cmluZyB8IG51bGw7XG4gIH0pID0+IHZvaWQ7XG4gIGRhdGFzZXQ6IEtlcGxlclRhYmxlO1xuICBvbkRpc3BsYXlGb3JtYXRDaGFuZ2U6IChkYXRhSWQsIGNvbHVtbiwgZGlzcGxheUZvcm1hdCkgPT4gdm9pZDtcbn07XG5cblRvb2x0aXBDb25maWdGYWN0b3J5LmRlcHMgPSBbRGF0YXNldFRhZ0ZhY3RvcnksIEZpZWxkU2VsZWN0b3JGYWN0b3J5XTtcbmZ1bmN0aW9uIFRvb2x0aXBDb25maWdGYWN0b3J5KFxuICBEYXRhc2V0VGFnOiBSZXR1cm5UeXBlPHR5cGVvZiBEYXRhc2V0VGFnRmFjdG9yeT4sXG4gIEZpZWxkU2VsZWN0b3I6IFJldHVyblR5cGU8dHlwZW9mIEZpZWxkU2VsZWN0b3JGYWN0b3J5PlxuKSB7XG4gIGNvbnN0IERhdGFzZXRUb29sdGlwQ29uZmlnID0gKHtcbiAgICBjb25maWcsXG4gICAgb25DaGFuZ2UsXG4gICAgZGF0YXNldCxcbiAgICBvbkRpc3BsYXlGb3JtYXRDaGFuZ2VcbiAgfTogRGF0YXNldFRvb2x0aXBDb25maWdQcm9wcykgPT4ge1xuICAgIGNvbnN0IGRhdGFJZCA9IGRhdGFzZXQuaWQ7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlUGFuZWxTZWN0aW9uIGtleT17ZGF0YUlkfT5cbiAgICAgICAgPFNCRmxleGJveE5vTWFyZ2luPlxuICAgICAgICAgIDxEYXRhc2V0VGFnIGRhdGFzZXQ9e2RhdGFzZXR9IC8+XG4gICAgICAgICAge0Jvb2xlYW4oY29uZmlnLmZpZWxkc1RvU2hvd1tkYXRhSWRdLmxlbmd0aCkgJiYgKFxuICAgICAgICAgICAgPEJ1dHRvbldyYXBwZXI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGVhci1hbGxcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZHNUb1Nob3c6IHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5jb25maWcuZmllbGRzVG9TaG93LFxuICAgICAgICAgICAgICAgICAgICAgIFtkYXRhSWRdOiBbXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgb25DaGFuZ2UobmV3Q29uZmlnKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHdpZHRoPVwiNTRweFwiXG4gICAgICAgICAgICAgICAgc2Vjb25kYXJ5XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cImZpZWxkU2VsZWN0b3IuY2xlYXJBbGxcIiAvPlxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQnV0dG9uV3JhcHBlcj5cbiAgICAgICAgICApfVxuICAgICAgICA8L1NCRmxleGJveE5vTWFyZ2luPlxuICAgICAgICA8RmllbGRTZWxlY3RvclxuICAgICAgICAgIGZpZWxkcz17ZGF0YXNldC5maWVsZHN9XG4gICAgICAgICAgdmFsdWU9e2NvbmZpZy5maWVsZHNUb1Nob3dbZGF0YUlkXX1cbiAgICAgICAgICBvblNlbGVjdD17c2VsZWN0ZWQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3Q29uZmlnOiBEYXRhc2V0VG9vbHRpcENvbmZpZ1Byb3BzWydjb25maWcnXSA9IHtcbiAgICAgICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgICAgICBmaWVsZHNUb1Nob3c6IHtcbiAgICAgICAgICAgICAgICAuLi5jb25maWcuZmllbGRzVG9TaG93LFxuICAgICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgICAgICAgICBbZGF0YUlkXTogc2VsZWN0ZWQubWFwKFxuICAgICAgICAgICAgICAgICAgZiA9PlxuICAgICAgICAgICAgICAgICAgICBjb25maWcuZmllbGRzVG9TaG93W2RhdGFJZF0uZmluZChcbiAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwRmllbGQgPT4gdG9vbHRpcEZpZWxkLm5hbWUgPT09IGYubmFtZVxuICAgICAgICAgICAgICAgICAgICApIHx8IHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBmLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdCBpbml0aWFsIHRvb2x0aXAgaXMgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgb25DaGFuZ2UobmV3Q29uZmlnKTtcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsb3NlT25TZWxlY3Q9e2ZhbHNlfVxuICAgICAgICAgIG11bHRpU2VsZWN0XG4gICAgICAgICAgaW5wdXRUaGVtZT1cInNlY29uZGFyeVwiXG4gICAgICAgICAgQ3VzdG9tQ2hpY2tsZXRDb21wb25lbnQ9e1Rvb2x0aXBDaGlja2xldEZhY3RvcnkoXG4gICAgICAgICAgICBkYXRhSWQsXG4gICAgICAgICAgICBjb25maWcsXG4gICAgICAgICAgICBvbkNoYW5nZSxcbiAgICAgICAgICAgIGRhdGFzZXQuZmllbGRzLFxuICAgICAgICAgICAgb25EaXNwbGF5Rm9ybWF0Q2hhbmdlXG4gICAgICAgICAgKX1cbiAgICAgICAgLz5cbiAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFRvb2x0aXBDb25maWcgPSAoe1xuICAgIGNvbmZpZyxcbiAgICBkYXRhc2V0cyxcbiAgICBvbkNoYW5nZSxcbiAgICBvbkRpc3BsYXlGb3JtYXRDaGFuZ2UsXG4gICAgaW50bFxuICB9OiBUb29sdGlwQ29uZmlnUHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRvb2x0aXBDb25maWdXcmFwcGVyPlxuICAgICAgICB7T2JqZWN0LmtleXMoY29uZmlnLmZpZWxkc1RvU2hvdykubWFwKGRhdGFJZCA9PlxuICAgICAgICAgIGRhdGFJZCA9PT0gR0VPQ09ERVJfREFUQVNFVF9OQU1FID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxEYXRhc2V0VG9vbHRpcENvbmZpZ1xuICAgICAgICAgICAgICBrZXk9e2RhdGFJZH1cbiAgICAgICAgICAgICAgY29uZmlnPXtjb25maWd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgZGF0YXNldD17ZGF0YXNldHNbZGF0YUlkXX1cbiAgICAgICAgICAgICAgb25EaXNwbGF5Rm9ybWF0Q2hhbmdlPXtvbkRpc3BsYXlGb3JtYXRDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgICAgPENvbXBhcmVTd2l0Y2hXcmFwcGVyPlxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwiY29tcGFyZS5tb2RlTGFiZWxcIiAvPlxuICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgIGNoZWNrZWQ9e2NvbmZpZy5jb21wYXJlTW9kZX1cbiAgICAgICAgICAgIGlkPVwiY29tcGFyZS1tb2RlLXRvZ2dsZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBuZXdDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgICAgICAgIGNvbXBhcmVNb2RlOiAhY29uZmlnLmNvbXBhcmVNb2RlXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIG9uQ2hhbmdlKG5ld0NvbmZpZyk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgc2Vjb25kYXJ5XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db21wYXJlU3dpdGNoV3JhcHBlcj5cbiAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgPFBhbmVsTGFiZWw+XG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cImNvbXBhcmUudHlwZUxhYmVsXCIgLz5cbiAgICAgICAgICA8L1BhbmVsTGFiZWw+XG4gICAgICAgICAgPEl0ZW1TZWxlY3RvclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFjb25maWcuY29tcGFyZU1vZGV9XG4gICAgICAgICAgICBkaXNwbGF5T3B0aW9uPXtkID0+XG4gICAgICAgICAgICAgIGludGwuZm9ybWF0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgaWQ6IGBjb21wYXJlLnR5cGVzLiR7ZH1gXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtjb25maWcuY29tcGFyZVR5cGV9XG4gICAgICAgICAgICBvcHRpb25zPXtPYmplY3QudmFsdWVzKENPTVBBUkVfVFlQRVMpfVxuICAgICAgICAgICAgbXVsdGlTZWxlY3Q9e2ZhbHNlfVxuICAgICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICBpbnB1dFRoZW1lPXsnc2Vjb25kYXJ5J31cbiAgICAgICAgICAgIGdldE9wdGlvblZhbHVlPXtkID0+IGR9XG4gICAgICAgICAgICBvbkNoYW5nZT17b3B0aW9uID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbmV3Q29uZmlnOiBUb29sdGlwQ29uZmlnUHJvcHNbJ2NvbmZpZyddID0ge1xuICAgICAgICAgICAgICAgIC4uLmNvbmZpZyxcbiAgICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgICAgICAgICAgY29tcGFyZVR5cGU6IG9wdGlvblxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBvbkNoYW5nZShuZXdDb25maWcpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICAgICA8L1Rvb2x0aXBDb25maWdXcmFwcGVyPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIGluamVjdEludGwoVG9vbHRpcENvbmZpZyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXBDb25maWdGYWN0b3J5O1xuIl19