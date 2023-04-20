"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _switch = _interopRequireDefault(require("../../common/switch"));

var _panelTitle = _interopRequireDefault(require("../panel-title"));

var _brushConfig = _interopRequireDefault(require("./brush-config"));

var _tooltipConfig = _interopRequireDefault(require("./tooltip-config"));

var _styledComponents2 = require("../../common/styled-components");

var _icons = require("../../common/icons");

var _localization = require("@kepler.gl/localization");

var _templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var StyledInteractionPanel = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  padding-bottom: 6px;\n"])));

InteractionPanelFactory.deps = [_tooltipConfig["default"], _brushConfig["default"], _panelTitle["default"]];
var INTERACTION_CONFIG_ICONS = {
  tooltip: _icons.Messages,
  geocoder: _icons.Pin,
  brush: _icons.Crosshairs,
  coordinate: _icons.CursorClick
};

function InteractionPanelFactory(TooltipConfig, BrushConfig, PanelTitle) {
  var InteractionPanel = function InteractionPanel(_ref) {
    var config = _ref.config,
        onConfigChange = _ref.onConfigChange,
        datasets = _ref.datasets,
        setColumnDisplayFormat = _ref.setColumnDisplayFormat,
        _ref$interactionConfi = _ref.interactionConfigIcons,
        interactionConfigIcons = _ref$interactionConfi === void 0 ? INTERACTION_CONFIG_ICONS : _ref$interactionConfi;

    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        isConfigActive = _useState2[0],
        setIsConfigAction = _useState2[1];

    var _updateConfig = (0, _react.useCallback)(function (newProp) {
      onConfigChange(_objectSpread(_objectSpread({}, config), newProp));
    }, [onConfigChange, config]);

    var onDisplayFormatChange = (0, _react.useCallback)(function (dataId, column, displayFormat) {
      setColumnDisplayFormat(dataId, (0, _defineProperty2["default"])({}, column, displayFormat));
    }, [setColumnDisplayFormat]);
    var togglePanelActive = (0, _react.useCallback)(function () {
      setIsConfigAction(!isConfigActive);
    }, [setIsConfigAction, isConfigActive]);
    var enabled = config.enabled;
    var toggleEnableConfig = (0, _react.useCallback)(function () {
      _updateConfig({
        enabled: !enabled
      });
    }, [_updateConfig, enabled]);
    var onChange = (0, _react.useCallback)(function (newConfig) {
      return _updateConfig({
        config: newConfig
      });
    }, [_updateConfig]);
    var IconComponent = interactionConfigIcons[config.id];
    var template = null;

    switch (config.id) {
      case 'tooltip':
        template = /*#__PURE__*/_react["default"].createElement(TooltipConfig, {
          datasets: datasets,
          config: config.config,
          onChange: onChange,
          onDisplayFormatChange: onDisplayFormatChange
        });
        break;

      case 'brush':
        template = /*#__PURE__*/_react["default"].createElement(BrushConfig, {
          config: config.config,
          onChange: onChange
        });
        break;

      default:
        break;
    }

    return /*#__PURE__*/_react["default"].createElement(StyledInteractionPanel, {
      className: "interaction-panel"
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledPanelHeader, {
      className: "interaction-panel__header",
      onClick: togglePanelActive
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelHeaderContent, {
      className: "interaction-panel__header__content"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "interaction-panel__header__icon icon"
    }, IconComponent ? /*#__PURE__*/_react["default"].createElement(IconComponent, {
      height: "16px"
    }) : null), /*#__PURE__*/_react["default"].createElement("div", {
      className: "interaction-panel__header__title"
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelHeaderTitle, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: config.label
    })))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "interaction-panel__header__actions"
    }, /*#__PURE__*/_react["default"].createElement(_switch["default"], {
      checked: config.enabled,
      id: "".concat(config.id, "-toggle"),
      onChange: toggleEnableConfig,
      secondary: true
    }))), config.enabled && template && /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelContent, {
      className: "interaction-panel__content"
    }, template));
  };

  return InteractionPanel;
}

var _default = InteractionPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2ludGVyYWN0aW9uLXBhbmVsL2ludGVyYWN0aW9uLXBhbmVsLnRzeCJdLCJuYW1lcyI6WyJTdHlsZWRJbnRlcmFjdGlvblBhbmVsIiwic3R5bGVkIiwiZGl2IiwiSW50ZXJhY3Rpb25QYW5lbEZhY3RvcnkiLCJkZXBzIiwiVG9vbHRpcENvbmZpZ0ZhY3RvcnkiLCJCcnVzaENvbmZpZ0ZhY3RvcnkiLCJQYW5lbFRpdGxlRmFjdG9yeSIsIklOVEVSQUNUSU9OX0NPTkZJR19JQ09OUyIsInRvb2x0aXAiLCJNZXNzYWdlcyIsImdlb2NvZGVyIiwiUGluIiwiYnJ1c2giLCJDcm9zc2hhaXJzIiwiY29vcmRpbmF0ZSIsIkN1cnNvckNsaWNrIiwiVG9vbHRpcENvbmZpZyIsIkJydXNoQ29uZmlnIiwiUGFuZWxUaXRsZSIsIkludGVyYWN0aW9uUGFuZWwiLCJjb25maWciLCJvbkNvbmZpZ0NoYW5nZSIsImRhdGFzZXRzIiwic2V0Q29sdW1uRGlzcGxheUZvcm1hdCIsImludGVyYWN0aW9uQ29uZmlnSWNvbnMiLCJpc0NvbmZpZ0FjdGl2ZSIsInNldElzQ29uZmlnQWN0aW9uIiwiX3VwZGF0ZUNvbmZpZyIsIm5ld1Byb3AiLCJvbkRpc3BsYXlGb3JtYXRDaGFuZ2UiLCJkYXRhSWQiLCJjb2x1bW4iLCJkaXNwbGF5Rm9ybWF0IiwidG9nZ2xlUGFuZWxBY3RpdmUiLCJlbmFibGVkIiwidG9nZ2xlRW5hYmxlQ29uZmlnIiwib25DaGFuZ2UiLCJuZXdDb25maWciLCJJY29uQ29tcG9uZW50IiwiaWQiLCJ0ZW1wbGF0ZSIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFRQTs7QUFNQTs7QUFFQTs7Ozs7Ozs7QUFZQSxJQUFNQSxzQkFBc0IsR0FBR0MsNkJBQU9DLEdBQVYsZ0hBQTVCOztBQUlBQyx1QkFBdUIs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QUF3QixNQUFBLFNBQVMsRUFBQztBQUFsQyxvQkFDRSxnQ0FBQyxvQ0FBRDtBQUFtQixNQUFBLFNBQVMsRUFBQywyQkFBN0I7QUFBeUQsTUFBQSxPQUFPLEVBQUVIO0FBQWxFLG9CQUNFLGdDQUFDLHFDQUFEO0FBQW9CLE1BQUEsU0FBUyxFQUFDO0FBQTlCLG9CQUNFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixPQUNHSyxhQUFhLGdCQUFHLGdDQUFDLGFBQUQ7QUFBZSxNQUFBLE1BQU0sRUFBQztBQUF0QixNQUFILEdBQXFDLElBRHJELENBREYsZUFJRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0UsZ0NBQUMsbUNBQUQscUJBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUVsQixNQUFNLENBQUNxQjtBQUE3QixNQURGLENBREYsQ0FKRixDQURGLGVBV0U7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLG9CQUNFLGdDQUFDLGtCQUFEO0FBQ0UsTUFBQSxPQUFPLEVBQUVyQixNQUFNLENBQUNjLE9BRGxCO0FBRUUsTUFBQSxFQUFFLFlBQUtkLE1BQU0sQ0FBQ21CLEVBQVosWUFGSjtBQUdFLE1BQUEsUUFBUSxFQUFFSixrQkFIWjtBQUlFLE1BQUEsU0FBUztBQUpYLE1BREYsQ0FYRixDQURGLEVBcUJHZixNQUFNLENBQUNjLE9BQVAsSUFBa0JNLFFBQWxCLGlCQUNDLGdDQUFDLCtCQUFEO0FBQWMsTUFBQSxTQUFTLEVBQUM7QUFBeEIsT0FBc0RBLFFBQXRELENBdEJKLENBREY7QUEyQkQsR0F0RkQ7O0FBd0ZBLFNBQU9yQixnQkFBUDtBQUNEOztlQUVjakIsdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgQ29tcG9uZW50VHlwZSwgUmVhY3RFbGVtZW50LCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgU3dpdGNoIGZyb20gJy4uLy4uL2NvbW1vbi9zd2l0Y2gnO1xuaW1wb3J0IFBhbmVsVGl0bGVGYWN0b3J5IGZyb20gJy4uL3BhbmVsLXRpdGxlJztcbmltcG9ydCBCcnVzaENvbmZpZ0ZhY3RvcnkgZnJvbSAnLi9icnVzaC1jb25maWcnO1xuaW1wb3J0IFRvb2x0aXBDb25maWdGYWN0b3J5IGZyb20gJy4vdG9vbHRpcC1jb25maWcnO1xuaW1wb3J0IHtEYXRhc2V0c30gZnJvbSAnQGtlcGxlci5nbC90YWJsZSc7XG5pbXBvcnQge0ludGVyYWN0aW9uQ29uZmlnLCBWYWx1ZU9mfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcbmltcG9ydCB7XG4gIHNldENvbHVtbkRpc3BsYXlGb3JtYXQgYXMgc2V0Q29sdW1uRGlzcGxheUZvcm1hdEFjdGlvbixcbiAgQWN0aW9uSGFuZGxlclxufSBmcm9tICdAa2VwbGVyLmdsL2FjdGlvbnMnO1xuXG5pbXBvcnQge1xuICBTdHlsZWRQYW5lbEhlYWRlcixcbiAgUGFuZWxIZWFkZXJUaXRsZSxcbiAgUGFuZWxIZWFkZXJDb250ZW50LFxuICBQYW5lbENvbnRlbnRcbn0gZnJvbSAnLi4vLi4vY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7TWVzc2FnZXMsIENyb3NzaGFpcnMsIEN1cnNvckNsaWNrLCBQaW59IGZyb20gJy4uLy4uL2NvbW1vbi9pY29ucyc7XG5cbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnQGtlcGxlci5nbC9sb2NhbGl6YXRpb24nO1xuXG5pbnRlcmZhY2UgSW50ZXJhY3Rpb25QYW5lbFByb3BzIHtcbiAgZGF0YXNldHM6IERhdGFzZXRzO1xuICBjb25maWc6IFZhbHVlT2Y8SW50ZXJhY3Rpb25Db25maWc+O1xuICBvbkNvbmZpZ0NoYW5nZTogYW55O1xuICBpbnRlcmFjdGlvbkNvbmZpZ0ljb25zPzoge1xuICAgIFtrZXk6IHN0cmluZ106IFJlYWN0LkVsZW1lbnRUeXBlO1xuICB9O1xuICBzZXRDb2x1bW5EaXNwbGF5Rm9ybWF0OiBBY3Rpb25IYW5kbGVyPHR5cGVvZiBzZXRDb2x1bW5EaXNwbGF5Rm9ybWF0QWN0aW9uPjtcbn1cblxuY29uc3QgU3R5bGVkSW50ZXJhY3Rpb25QYW5lbCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG5gO1xuXG5JbnRlcmFjdGlvblBhbmVsRmFjdG9yeS5kZXBzID0gW1Rvb2x0aXBDb25maWdGYWN0b3J5LCBCcnVzaENvbmZpZ0ZhY3RvcnksIFBhbmVsVGl0bGVGYWN0b3J5XTtcblxuY29uc3QgSU5URVJBQ1RJT05fQ09ORklHX0lDT05TOiB7W2tleTogc3RyaW5nXTogUmVhY3QuRWxlbWVudFR5cGV9ID0ge1xuICB0b29sdGlwOiBNZXNzYWdlcyxcbiAgZ2VvY29kZXI6IFBpbixcbiAgYnJ1c2g6IENyb3NzaGFpcnMsXG4gIGNvb3JkaW5hdGU6IEN1cnNvckNsaWNrXG59O1xuXG5mdW5jdGlvbiBJbnRlcmFjdGlvblBhbmVsRmFjdG9yeShcbiAgVG9vbHRpcENvbmZpZzogUmV0dXJuVHlwZTx0eXBlb2YgVG9vbHRpcENvbmZpZ0ZhY3Rvcnk+LFxuICBCcnVzaENvbmZpZzogUmV0dXJuVHlwZTx0eXBlb2YgQnJ1c2hDb25maWdGYWN0b3J5PixcbiAgUGFuZWxUaXRsZTogUmV0dXJuVHlwZTx0eXBlb2YgUGFuZWxUaXRsZUZhY3Rvcnk+XG4pOiBDb21wb25lbnRUeXBlPEludGVyYWN0aW9uUGFuZWxQcm9wcz4ge1xuICBjb25zdCBJbnRlcmFjdGlvblBhbmVsOiBSZWFjdC5GQzxJbnRlcmFjdGlvblBhbmVsUHJvcHM+ID0gKHtcbiAgICBjb25maWcsXG4gICAgb25Db25maWdDaGFuZ2UsXG4gICAgZGF0YXNldHMsXG4gICAgc2V0Q29sdW1uRGlzcGxheUZvcm1hdCxcbiAgICBpbnRlcmFjdGlvbkNvbmZpZ0ljb25zID0gSU5URVJBQ1RJT05fQ09ORklHX0lDT05TXG4gIH0pID0+IHtcbiAgICBjb25zdCBbaXNDb25maWdBY3RpdmUsIHNldElzQ29uZmlnQWN0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IF91cGRhdGVDb25maWcgPSB1c2VDYWxsYmFjayhcbiAgICAgIG5ld1Byb3AgPT4ge1xuICAgICAgICBvbkNvbmZpZ0NoYW5nZSh7XG4gICAgICAgICAgLi4uY29uZmlnLFxuICAgICAgICAgIC4uLm5ld1Byb3BcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgW29uQ29uZmlnQ2hhbmdlLCBjb25maWddXG4gICAgKTtcblxuICAgIGNvbnN0IG9uRGlzcGxheUZvcm1hdENoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGRhdGFJZCwgY29sdW1uLCBkaXNwbGF5Rm9ybWF0KSA9PiB7XG4gICAgICAgIHNldENvbHVtbkRpc3BsYXlGb3JtYXQoZGF0YUlkLCB7W2NvbHVtbl06IGRpc3BsYXlGb3JtYXR9KTtcbiAgICAgIH0sXG4gICAgICBbc2V0Q29sdW1uRGlzcGxheUZvcm1hdF1cbiAgICApO1xuXG4gICAgY29uc3QgdG9nZ2xlUGFuZWxBY3RpdmUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICBzZXRJc0NvbmZpZ0FjdGlvbighaXNDb25maWdBY3RpdmUpO1xuICAgIH0sIFtzZXRJc0NvbmZpZ0FjdGlvbiwgaXNDb25maWdBY3RpdmVdKTtcblxuICAgIGNvbnN0IHtlbmFibGVkfSA9IGNvbmZpZztcbiAgICBjb25zdCB0b2dnbGVFbmFibGVDb25maWcgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICBfdXBkYXRlQ29uZmlnKHtlbmFibGVkOiAhZW5hYmxlZH0pO1xuICAgIH0sIFtfdXBkYXRlQ29uZmlnLCBlbmFibGVkXSk7XG5cbiAgICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKG5ld0NvbmZpZyA9PiBfdXBkYXRlQ29uZmlnKHtjb25maWc6IG5ld0NvbmZpZ30pLCBbX3VwZGF0ZUNvbmZpZ10pO1xuXG4gICAgY29uc3QgSWNvbkNvbXBvbmVudCA9IGludGVyYWN0aW9uQ29uZmlnSWNvbnNbY29uZmlnLmlkXTtcblxuICAgIGxldCB0ZW1wbGF0ZTogUmVhY3RFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbiAgICBzd2l0Y2ggKGNvbmZpZy5pZCkge1xuICAgICAgY2FzZSAndG9vbHRpcCc6XG4gICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgIDxUb29sdGlwQ29uZmlnXG4gICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICBjb25maWc9e2NvbmZpZy5jb25maWd9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICBvbkRpc3BsYXlGb3JtYXRDaGFuZ2U9e29uRGlzcGxheUZvcm1hdENoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JydXNoJzpcbiAgICAgICAgdGVtcGxhdGUgPSA8QnJ1c2hDb25maWcgY29uZmlnPXtjb25maWcuY29uZmlnfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+O1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkSW50ZXJhY3Rpb25QYW5lbCBjbGFzc05hbWU9XCJpbnRlcmFjdGlvbi1wYW5lbFwiPlxuICAgICAgICA8U3R5bGVkUGFuZWxIZWFkZXIgY2xhc3NOYW1lPVwiaW50ZXJhY3Rpb24tcGFuZWxfX2hlYWRlclwiIG9uQ2xpY2s9e3RvZ2dsZVBhbmVsQWN0aXZlfT5cbiAgICAgICAgICA8UGFuZWxIZWFkZXJDb250ZW50IGNsYXNzTmFtZT1cImludGVyYWN0aW9uLXBhbmVsX19oZWFkZXJfX2NvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50ZXJhY3Rpb24tcGFuZWxfX2hlYWRlcl9faWNvbiBpY29uXCI+XG4gICAgICAgICAgICAgIHtJY29uQ29tcG9uZW50ID8gPEljb25Db21wb25lbnQgaGVpZ2h0PVwiMTZweFwiIC8+IDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRlcmFjdGlvbi1wYW5lbF9faGVhZGVyX190aXRsZVwiPlxuICAgICAgICAgICAgICA8UGFuZWxIZWFkZXJUaXRsZT5cbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17Y29uZmlnLmxhYmVsfSAvPlxuICAgICAgICAgICAgICA8L1BhbmVsSGVhZGVyVGl0bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1BhbmVsSGVhZGVyQ29udGVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludGVyYWN0aW9uLXBhbmVsX19oZWFkZXJfX2FjdGlvbnNcIj5cbiAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgY2hlY2tlZD17Y29uZmlnLmVuYWJsZWR9XG4gICAgICAgICAgICAgIGlkPXtgJHtjb25maWcuaWR9LXRvZ2dsZWB9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0b2dnbGVFbmFibGVDb25maWd9XG4gICAgICAgICAgICAgIHNlY29uZGFyeVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TdHlsZWRQYW5lbEhlYWRlcj5cbiAgICAgICAge2NvbmZpZy5lbmFibGVkICYmIHRlbXBsYXRlICYmIChcbiAgICAgICAgICA8UGFuZWxDb250ZW50IGNsYXNzTmFtZT1cImludGVyYWN0aW9uLXBhbmVsX19jb250ZW50XCI+e3RlbXBsYXRlfTwvUGFuZWxDb250ZW50PlxuICAgICAgICApfVxuICAgICAgPC9TdHlsZWRJbnRlcmFjdGlvblBhbmVsPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIEludGVyYWN0aW9uUGFuZWw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEludGVyYWN0aW9uUGFuZWxGYWN0b3J5O1xuIl19