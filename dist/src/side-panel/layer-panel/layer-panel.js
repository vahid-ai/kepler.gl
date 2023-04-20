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

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _layerConfigurator = _interopRequireDefault(require("./layer-configurator"));

var _layerPanelHeader = _interopRequireDefault(require("./layer-panel-header"));

var _templateObject;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var PanelWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 12px;\n  border-radius: 1px;\n  margin-bottom: 8px;\n  z-index: 1000;\n  &.dragging {\n    cursor: move;\n  }\n"])));

LayerPanelFactory.deps = [_layerConfigurator["default"], _layerPanelHeader["default"]];

function LayerPanelFactory(LayerConfigurator, LayerPanelHeader) {
  var LayerPanel = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(LayerPanel, _Component);

    var _super = _createSuper(LayerPanel);

    function LayerPanel() {
      var _this;

      (0, _classCallCheck2["default"])(this, LayerPanel);

      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
        _args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(_args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerConfig", function (newProp) {
        _this.props.layerConfigChange(_this.props.layer, newProp);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerType", function (newType) {
        _this.props.layerTypeChange(_this.props.layer, newType);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerVisConfig", function (newVisConfig) {
        _this.props.layerVisConfigChange(_this.props.layer, newVisConfig);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerColorUI", function () {
        var _this$props;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        (_this$props = _this.props).layerColorUIChange.apply(_this$props, [_this.props.layer].concat(args));
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerTextLabel", function () {
        var _this$props2;

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        (_this$props2 = _this.props).layerTextLabelChange.apply(_this$props2, [_this.props.layer].concat(args));
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateLayerVisualChannelConfig", function (newConfig, channel) {
        _this.props.layerVisualChannelConfigChange(_this.props.layer, newConfig, channel);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateLayerLabel", function (_ref) {
        var value = _ref.target.value;

        _this.updateLayerConfig({
          label: value
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleVisibility", function (e) {
        e.stopPropagation();
        var isVisible = !_this.props.layer.config.isVisible;

        _this.updateLayerConfig({
          isVisible: isVisible
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_resetIsValid", function (e) {
        e.stopPropagation(); // Make the layer valid and visible again after an error

        _this.props.layerSetIsValid(_this.props.layer, true);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleEnableConfig", function (e) {
        e.stopPropagation();
        var isConfigActive = _this.props.layer.config.isConfigActive;

        _this.updateLayerConfig({
          isConfigActive: !isConfigActive
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_removeLayer", function (e) {
        e.stopPropagation();

        _this.props.removeLayer(_this.props.idx);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_duplicateLayer", function (e) {
        e.stopPropagation();

        _this.props.duplicateLayer(_this.props.idx);
      });
      return _this;
    }

    (0, _createClass2["default"])(LayerPanel, [{
      key: "render",
      value: function render() {
        var _this$props3 = this.props,
            layer = _this$props3.layer,
            datasets = _this$props3.datasets,
            isDraggable = _this$props3.isDraggable,
            layerTypeOptions = _this$props3.layerTypeOptions,
            listeners = _this$props3.listeners;
        var config = layer.config,
            isValid = layer.isValid;
        var isConfigActive = config.isConfigActive;
        var allowDuplicate = typeof layer.isValidToSave === 'function' && layer.isValidToSave();
        return /*#__PURE__*/_react["default"].createElement(PanelWrapper, {
          active: isConfigActive,
          className: "layer-panel ".concat(this.props.className),
          style: this.props.style,
          onMouseDown: this.props.onMouseDown,
          onTouchStart: this.props.onTouchStart
        }, /*#__PURE__*/_react["default"].createElement(LayerPanelHeader, {
          isConfigActive: isConfigActive,
          layerId: layer.id,
          isVisible: config.isVisible,
          isValid: isValid,
          label: config.label,
          labelRCGColorValues: config.dataId ? datasets[config.dataId].color : null,
          layerType: layer.type,
          allowDuplicate: allowDuplicate,
          onToggleEnableConfig: this._toggleEnableConfig,
          onToggleVisibility: this._toggleVisibility,
          onResetIsValid: this._resetIsValid,
          onUpdateLayerLabel: this._updateLayerLabel,
          onRemoveLayer: this._removeLayer,
          onDuplicateLayer: this._duplicateLayer,
          isDragNDropEnabled: isDraggable,
          listeners: listeners
        }), isConfigActive && /*#__PURE__*/_react["default"].createElement(LayerConfigurator, {
          layer: layer,
          datasets: datasets,
          layerTypeOptions: layerTypeOptions,
          openModal: this.props.openModal,
          updateLayerColorUI: this.updateLayerColorUI,
          updateLayerConfig: this.updateLayerConfig,
          updateLayerVisualChannelConfig: this.updateLayerVisualChannelConfig,
          updateLayerType: this.updateLayerType,
          updateLayerTextLabel: this.updateLayerTextLabel,
          updateLayerVisConfig: this.updateLayerVisConfig
        }));
      }
    }]);
    return LayerPanel;
  }(_react.Component);

  return LayerPanel;
}

var _default = LayerPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2xheWVyLXBhbmVsL2xheWVyLXBhbmVsLnRzeCJdLCJuYW1lcyI6WyJQYW5lbFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJMYXllclBhbmVsRmFjdG9yeSIsImRlcHMiLCJMYXllckNvbmZpZ3VyYXRvckZhY3RvcnkiLCJMYXllclBhbmVsSGVhZGVyRmFjdG9yeSIsIkxheWVyQ29uZmlndXJhdG9yIiwiTGF5ZXJQYW5lbEhlYWRlciIsIkxheWVyUGFuZWwiLCJuZXdQcm9wIiwicHJvcHMiLCJsYXllckNvbmZpZ0NoYW5nZSIsImxheWVyIiwibmV3VHlwZSIsImxheWVyVHlwZUNoYW5nZSIsIm5ld1Zpc0NvbmZpZyIsImxheWVyVmlzQ29uZmlnQ2hhbmdlIiwiYXJncyIsImxheWVyQ29sb3JVSUNoYW5nZSIsImxheWVyVGV4dExhYmVsQ2hhbmdlIiwibmV3Q29uZmlnIiwiY2hhbm5lbCIsImxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSIsInZhbHVlIiwidGFyZ2V0IiwidXBkYXRlTGF5ZXJDb25maWciLCJsYWJlbCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJpc1Zpc2libGUiLCJjb25maWciLCJsYXllclNldElzVmFsaWQiLCJpc0NvbmZpZ0FjdGl2ZSIsInJlbW92ZUxheWVyIiwiaWR4IiwiZHVwbGljYXRlTGF5ZXIiLCJkYXRhc2V0cyIsImlzRHJhZ2dhYmxlIiwibGF5ZXJUeXBlT3B0aW9ucyIsImxpc3RlbmVycyIsImlzVmFsaWQiLCJhbGxvd0R1cGxpY2F0ZSIsImlzVmFsaWRUb1NhdmUiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm9uTW91c2VEb3duIiwib25Ub3VjaFN0YXJ0IiwiaWQiLCJkYXRhSWQiLCJjb2xvciIsInR5cGUiLCJfdG9nZ2xlRW5hYmxlQ29uZmlnIiwiX3RvZ2dsZVZpc2liaWxpdHkiLCJfcmVzZXRJc1ZhbGlkIiwiX3VwZGF0ZUxheWVyTGFiZWwiLCJfcmVtb3ZlTGF5ZXIiLCJfZHVwbGljYXRlTGF5ZXIiLCJvcGVuTW9kYWwiLCJ1cGRhdGVMYXllckNvbG9yVUkiLCJ1cGRhdGVMYXllclZpc3VhbENoYW5uZWxDb25maWciLCJ1cGRhdGVMYXllclR5cGUiLCJ1cGRhdGVMYXllclRleHRMYWJlbCIsInVwZGF0ZUxheWVyVmlzQ29uZmlnIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBT0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7O0FBb0NBLElBQU1BLFlBQVksR0FBR0MsNkJBQU9DLEdBQVYsb05BQWxCOztBQVVBQyxpQkFBaUIsQ0FBQ0MsSUFBbEIsR0FBeUIsQ0FBQ0MsNkJBQUQsRUFBMkJDLDRCQUEzQixDQUF6Qjs7QUFFQSxTQUFTSCxpQkFBVCxDQUNFSSxpQkFERixFQUVFQyxnQkFGRixFQUd3QztBQUFBLE1BQ2hDQyxVQURnQztBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsNEdBRWhCLFVBQUNDLE9BQUQsRUFBdUM7QUFDekQsY0FBS0MsS0FBTCxDQUFXQyxpQkFBWCxDQUE2QixNQUFLRCxLQUFMLENBQVdFLEtBQXhDLEVBQStDSCxPQUEvQztBQUNELE9BSm1DO0FBQUEsMEdBTWxCLFVBQUNJLE9BQUQsRUFBcUI7QUFDckMsY0FBS0gsS0FBTCxDQUFXSSxlQUFYLENBQTJCLE1BQUtKLEtBQUwsQ0FBV0UsS0FBdEMsRUFBNkNDLE9BQTdDO0FBQ0QsT0FSbUM7QUFBQSwrR0FVYixVQUFDRSxZQUFELEVBQTJDO0FBQ2hFLGNBQUtMLEtBQUwsQ0FBV00sb0JBQVgsQ0FBZ0MsTUFBS04sS0FBTCxDQUFXRSxLQUEzQyxFQUFrREcsWUFBbEQ7QUFDRCxPQVptQztBQUFBLDZHQWNmLFlBQStDO0FBQUE7O0FBQUEsMkNBQTNDRSxJQUEyQztBQUEzQ0EsVUFBQUEsSUFBMkM7QUFBQTs7QUFDbEUsNkJBQUtQLEtBQUwsRUFBV1Esa0JBQVgscUJB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LGdCQUhwQjtBQUlFLFVBQUEsU0FBUyxFQUFFLEtBQUs1QixLQUFMLENBQVcrQyxTQUp4QjtBQUtFLFVBQUEsa0JBQWtCLEVBQUUsS0FBS0Msa0JBTDNCO0FBTUUsVUFBQSxpQkFBaUIsRUFBRSxLQUFLakMsaUJBTjFCO0FBT0UsVUFBQSw4QkFBOEIsRUFBRSxLQUFLa0MsOEJBUHZDO0FBUUUsVUFBQSxlQUFlLEVBQUUsS0FBS0MsZUFSeEI7QUFTRSxVQUFBLG9CQUFvQixFQUFFLEtBQUtDLG9CQVQ3QjtBQVVFLFVBQUEsb0JBQW9CLEVBQUUsS0FBS0M7QUFWN0IsVUExQkosQ0FERjtBQTBDRDtBQTlHbUM7QUFBQTtBQUFBLElBQ2JDLGdCQURhOztBQWlIdEMsU0FBT3ZELFVBQVA7QUFDRDs7ZUFFY04saUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtcbiAgQ29tcG9uZW50LFxuICBNb3VzZUV2ZW50SGFuZGxlcixcbiAgVG91Y2hFdmVudEhhbmRsZXIsXG4gIENTU1Byb3BlcnRpZXMsXG4gIENoYW5nZUV2ZW50SGFuZGxlclxufSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IExheWVyQ29uZmlndXJhdG9yRmFjdG9yeSBmcm9tICcuL2xheWVyLWNvbmZpZ3VyYXRvcic7XG5pbXBvcnQgTGF5ZXJQYW5lbEhlYWRlckZhY3RvcnkgZnJvbSAnLi9sYXllci1wYW5lbC1oZWFkZXInO1xuaW1wb3J0IHtOZXN0ZWRQYXJ0aWFsLCBMYXllclZpc0NvbmZpZywgQ29sb3JVSX0gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5pbXBvcnQge0xheWVyLCBMYXllckJhc2VDb25maWd9IGZyb20gJ0BrZXBsZXIuZ2wvbGF5ZXJzJztcbmltcG9ydCB7dG9nZ2xlTW9kYWwsIFZpc1N0YXRlQWN0aW9ucywgQWN0aW9uSGFuZGxlcn0gZnJvbSAnQGtlcGxlci5nbC9hY3Rpb25zJztcbmltcG9ydCB7RGF0YXNldHN9IGZyb20gJ0BrZXBsZXIuZ2wvdGFibGUnO1xuXG50eXBlIExheWVyUGFuZWxQcm9wcyA9IHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBzdHlsZT86IENTU1Byb3BlcnRpZXM7XG4gIG9uTW91c2VEb3duPzogTW91c2VFdmVudEhhbmRsZXI7XG4gIG9uVG91Y2hTdGFydD86IFRvdWNoRXZlbnRIYW5kbGVyO1xuICBsYXllcjogTGF5ZXI7XG4gIGRhdGFzZXRzOiBEYXRhc2V0cztcbiAgaWR4OiBudW1iZXI7XG4gIGxheWVyVHlwZU9wdGlvbnM6IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgaWNvbjogYW55OyAvL1xuICAgIHJlcXVpcmVEYXRhOiBhbnk7IC8vXG4gIH1bXTtcbiAgaXNEcmFnZ2FibGU/OiBib29sZWFuO1xuICBvcGVuTW9kYWw6IEFjdGlvbkhhbmRsZXI8dHlwZW9mIHRvZ2dsZU1vZGFsPjtcbiAgbGF5ZXJDb2xvclVJQ2hhbmdlOiBBY3Rpb25IYW5kbGVyPHR5cGVvZiBWaXNTdGF0ZUFjdGlvbnMubGF5ZXJDb2xvclVJQ2hhbmdlPjtcbiAgbGF5ZXJDb25maWdDaGFuZ2U6IEFjdGlvbkhhbmRsZXI8dHlwZW9mIFZpc1N0YXRlQWN0aW9ucy5sYXllckNvbmZpZ0NoYW5nZT47XG4gIGxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZTogQWN0aW9uSGFuZGxlcjxcbiAgICB0eXBlb2YgVmlzU3RhdGVBY3Rpb25zLmxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZVxuICA+O1xuICBsYXllclNldElzVmFsaWQ6IEFjdGlvbkhhbmRsZXI8dHlwZW9mIFZpc1N0YXRlQWN0aW9ucy5sYXllclNldElzVmFsaWQ+O1xuICBsYXllclR5cGVDaGFuZ2U6IEFjdGlvbkhhbmRsZXI8dHlwZW9mIFZpc1N0YXRlQWN0aW9ucy5sYXllclR5cGVDaGFuZ2U+O1xuICBsYXllclZpc0NvbmZpZ0NoYW5nZTogQWN0aW9uSGFuZGxlcjx0eXBlb2YgVmlzU3RhdGVBY3Rpb25zLmxheWVyVmlzQ29uZmlnQ2hhbmdlPjtcbiAgbGF5ZXJUZXh0TGFiZWxDaGFuZ2U6IEFjdGlvbkhhbmRsZXI8dHlwZW9mIFZpc1N0YXRlQWN0aW9ucy5sYXllclRleHRMYWJlbENoYW5nZT47XG4gIHJlbW92ZUxheWVyOiBBY3Rpb25IYW5kbGVyPHR5cGVvZiBWaXNTdGF0ZUFjdGlvbnMucmVtb3ZlTGF5ZXI+O1xuICBkdXBsaWNhdGVMYXllcjogQWN0aW9uSGFuZGxlcjx0eXBlb2YgVmlzU3RhdGVBY3Rpb25zLmR1cGxpY2F0ZUxheWVyPjtcbiAgbGlzdGVuZXJzPzogUmVhY3QuRWxlbWVudFR5cGU7XG59O1xuXG5jb25zdCBQYW5lbFdyYXBwZXIgPSBzdHlsZWQuZGl2PHthY3RpdmU6IGJvb2xlYW59PmBcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgei1pbmRleDogMTAwMDtcbiAgJi5kcmFnZ2luZyB7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICB9XG5gO1xuXG5MYXllclBhbmVsRmFjdG9yeS5kZXBzID0gW0xheWVyQ29uZmlndXJhdG9yRmFjdG9yeSwgTGF5ZXJQYW5lbEhlYWRlckZhY3RvcnldO1xuXG5mdW5jdGlvbiBMYXllclBhbmVsRmFjdG9yeShcbiAgTGF5ZXJDb25maWd1cmF0b3I6IFJldHVyblR5cGU8dHlwZW9mIExheWVyQ29uZmlndXJhdG9yRmFjdG9yeT4sXG4gIExheWVyUGFuZWxIZWFkZXI6IFJldHVyblR5cGU8dHlwZW9mIExheWVyUGFuZWxIZWFkZXJGYWN0b3J5PlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxMYXllclBhbmVsUHJvcHM+IHtcbiAgY2xhc3MgTGF5ZXJQYW5lbCBleHRlbmRzIENvbXBvbmVudDxMYXllclBhbmVsUHJvcHM+IHtcbiAgICB1cGRhdGVMYXllckNvbmZpZyA9IChuZXdQcm9wOiBQYXJ0aWFsPExheWVyQmFzZUNvbmZpZz4pID0+IHtcbiAgICAgIHRoaXMucHJvcHMubGF5ZXJDb25maWdDaGFuZ2UodGhpcy5wcm9wcy5sYXllciwgbmV3UHJvcCk7XG4gICAgfTtcblxuICAgIHVwZGF0ZUxheWVyVHlwZSA9IChuZXdUeXBlOiBzdHJpbmcpID0+IHtcbiAgICAgIHRoaXMucHJvcHMubGF5ZXJUeXBlQ2hhbmdlKHRoaXMucHJvcHMubGF5ZXIsIG5ld1R5cGUpO1xuICAgIH07XG5cbiAgICB1cGRhdGVMYXllclZpc0NvbmZpZyA9IChuZXdWaXNDb25maWc6IFBhcnRpYWw8TGF5ZXJWaXNDb25maWc+KSA9PiB7XG4gICAgICB0aGlzLnByb3BzLmxheWVyVmlzQ29uZmlnQ2hhbmdlKHRoaXMucHJvcHMubGF5ZXIsIG5ld1Zpc0NvbmZpZyk7XG4gICAgfTtcblxuICAgIHVwZGF0ZUxheWVyQ29sb3JVSSA9ICguLi5hcmdzOiBbc3RyaW5nLCBOZXN0ZWRQYXJ0aWFsPENvbG9yVUk+XSkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5sYXllckNvbG9yVUlDaGFuZ2UodGhpcy5wcm9wcy5sYXllciwgLi4uYXJncyk7XG4gICAgfTtcblxuICAgIHVwZGF0ZUxheWVyVGV4dExhYmVsID0gKC4uLmFyZ3M6IFtudW1iZXIgfCAnYWxsJywgc3RyaW5nLCBhbnldKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLmxheWVyVGV4dExhYmVsQ2hhbmdlKHRoaXMucHJvcHMubGF5ZXIsIC4uLmFyZ3MpO1xuICAgIH07XG5cbiAgICB1cGRhdGVMYXllclZpc3VhbENoYW5uZWxDb25maWcgPSAobmV3Q29uZmlnOiBQYXJ0aWFsPExheWVyQmFzZUNvbmZpZz4sIGNoYW5uZWw6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5sYXllclZpc3VhbENoYW5uZWxDb25maWdDaGFuZ2UodGhpcy5wcm9wcy5sYXllciwgbmV3Q29uZmlnLCBjaGFubmVsKTtcbiAgICB9O1xuXG4gICAgX3VwZGF0ZUxheWVyTGFiZWw6IENoYW5nZUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9ICh7dGFyZ2V0OiB7dmFsdWV9fSkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVMYXllckNvbmZpZyh7bGFiZWw6IHZhbHVlfSk7XG4gICAgfTtcblxuICAgIF90b2dnbGVWaXNpYmlsaXR5OiBNb3VzZUV2ZW50SGFuZGxlciA9IGUgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9ICF0aGlzLnByb3BzLmxheWVyLmNvbmZpZy5pc1Zpc2libGU7XG4gICAgICB0aGlzLnVwZGF0ZUxheWVyQ29uZmlnKHtpc1Zpc2libGV9KTtcbiAgICB9O1xuXG4gICAgX3Jlc2V0SXNWYWxpZDogTW91c2VFdmVudEhhbmRsZXIgPSBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAvLyBNYWtlIHRoZSBsYXllciB2YWxpZCBhbmQgdmlzaWJsZSBhZ2FpbiBhZnRlciBhbiBlcnJvclxuICAgICAgdGhpcy5wcm9wcy5sYXllclNldElzVmFsaWQodGhpcy5wcm9wcy5sYXllciwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIF90b2dnbGVFbmFibGVDb25maWc6IE1vdXNlRXZlbnRIYW5kbGVyID0gZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgY29uc3Qge1xuICAgICAgICBsYXllcjoge1xuICAgICAgICAgIGNvbmZpZzoge2lzQ29uZmlnQWN0aXZlfVxuICAgICAgICB9XG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHRoaXMudXBkYXRlTGF5ZXJDb25maWcoe2lzQ29uZmlnQWN0aXZlOiAhaXNDb25maWdBY3RpdmV9KTtcbiAgICB9O1xuXG4gICAgX3JlbW92ZUxheWVyOiBNb3VzZUV2ZW50SGFuZGxlciA9IGUgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMucHJvcHMucmVtb3ZlTGF5ZXIodGhpcy5wcm9wcy5pZHgpO1xuICAgIH07XG5cbiAgICBfZHVwbGljYXRlTGF5ZXI6IE1vdXNlRXZlbnRIYW5kbGVyID0gZSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5wcm9wcy5kdXBsaWNhdGVMYXllcih0aGlzLnByb3BzLmlkeCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtsYXllciwgZGF0YXNldHMsIGlzRHJhZ2dhYmxlLCBsYXllclR5cGVPcHRpb25zLCBsaXN0ZW5lcnN9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHtjb25maWcsIGlzVmFsaWR9ID0gbGF5ZXI7XG4gICAgICBjb25zdCB7aXNDb25maWdBY3RpdmV9ID0gY29uZmlnO1xuICAgICAgY29uc3QgYWxsb3dEdXBsaWNhdGUgPSB0eXBlb2YgbGF5ZXIuaXNWYWxpZFRvU2F2ZSA9PT0gJ2Z1bmN0aW9uJyAmJiBsYXllci5pc1ZhbGlkVG9TYXZlKCk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQYW5lbFdyYXBwZXJcbiAgICAgICAgICBhY3RpdmU9e2lzQ29uZmlnQWN0aXZlfVxuICAgICAgICAgIGNsYXNzTmFtZT17YGxheWVyLXBhbmVsICR7dGhpcy5wcm9wcy5jbGFzc05hbWV9YH1cbiAgICAgICAgICBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX1cbiAgICAgICAgICBvbk1vdXNlRG93bj17dGhpcy5wcm9wcy5vbk1vdXNlRG93bn1cbiAgICAgICAgICBvblRvdWNoU3RhcnQ9e3RoaXMucHJvcHMub25Ub3VjaFN0YXJ0fVxuICAgICAgICA+XG4gICAgICAgICAgPExheWVyUGFuZWxIZWFkZXJcbiAgICAgICAgICAgIGlzQ29uZmlnQWN0aXZlPXtpc0NvbmZpZ0FjdGl2ZX1cbiAgICAgICAgICAgIGxheWVySWQ9e2xheWVyLmlkfVxuICAgICAgICAgICAgaXNWaXNpYmxlPXtjb25maWcuaXNWaXNpYmxlfVxuICAgICAgICAgICAgaXNWYWxpZD17aXNWYWxpZH1cbiAgICAgICAgICAgIGxhYmVsPXtjb25maWcubGFiZWx9XG4gICAgICAgICAgICBsYWJlbFJDR0NvbG9yVmFsdWVzPXtjb25maWcuZGF0YUlkID8gZGF0YXNldHNbY29uZmlnLmRhdGFJZF0uY29sb3IgOiBudWxsfVxuICAgICAgICAgICAgbGF5ZXJUeXBlPXtsYXllci50eXBlfVxuICAgICAgICAgICAgYWxsb3dEdXBsaWNhdGU9e2FsbG93RHVwbGljYXRlfVxuICAgICAgICAgICAgb25Ub2dnbGVFbmFibGVDb25maWc9e3RoaXMuX3RvZ2dsZUVuYWJsZUNvbmZpZ31cbiAgICAgICAgICAgIG9uVG9nZ2xlVmlzaWJpbGl0eT17dGhpcy5fdG9nZ2xlVmlzaWJpbGl0eX1cbiAgICAgICAgICAgIG9uUmVzZXRJc1ZhbGlkPXt0aGlzLl9yZXNldElzVmFsaWR9XG4gICAgICAgICAgICBvblVwZGF0ZUxheWVyTGFiZWw9e3RoaXMuX3VwZGF0ZUxheWVyTGFiZWx9XG4gICAgICAgICAgICBvblJlbW92ZUxheWVyPXt0aGlzLl9yZW1vdmVMYXllcn1cbiAgICAgICAgICAgIG9uRHVwbGljYXRlTGF5ZXI9e3RoaXMuX2R1cGxpY2F0ZUxheWVyfVxuICAgICAgICAgICAgaXNEcmFnTkRyb3BFbmFibGVkPXtpc0RyYWdnYWJsZX1cbiAgICAgICAgICAgIGxpc3RlbmVycz17bGlzdGVuZXJzfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2lzQ29uZmlnQWN0aXZlICYmIChcbiAgICAgICAgICAgIDxMYXllckNvbmZpZ3VyYXRvclxuICAgICAgICAgICAgICBsYXllcj17bGF5ZXJ9XG4gICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgbGF5ZXJUeXBlT3B0aW9ucz17bGF5ZXJUeXBlT3B0aW9uc31cbiAgICAgICAgICAgICAgb3Blbk1vZGFsPXt0aGlzLnByb3BzLm9wZW5Nb2RhbH1cbiAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJDb2xvclVJPXt0aGlzLnVwZGF0ZUxheWVyQ29sb3JVSX1cbiAgICAgICAgICAgICAgdXBkYXRlTGF5ZXJDb25maWc9e3RoaXMudXBkYXRlTGF5ZXJDb25maWd9XG4gICAgICAgICAgICAgIHVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZz17dGhpcy51cGRhdGVMYXllclZpc3VhbENoYW5uZWxDb25maWd9XG4gICAgICAgICAgICAgIHVwZGF0ZUxheWVyVHlwZT17dGhpcy51cGRhdGVMYXllclR5cGV9XG4gICAgICAgICAgICAgIHVwZGF0ZUxheWVyVGV4dExhYmVsPXt0aGlzLnVwZGF0ZUxheWVyVGV4dExhYmVsfVxuICAgICAgICAgICAgICB1cGRhdGVMYXllclZpc0NvbmZpZz17dGhpcy51cGRhdGVMYXllclZpc0NvbmZpZ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9QYW5lbFdyYXBwZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBMYXllclBhbmVsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXllclBhbmVsRmFjdG9yeTtcbiJdfQ==