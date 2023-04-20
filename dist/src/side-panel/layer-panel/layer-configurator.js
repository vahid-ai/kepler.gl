"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LayerConfiguratorFactory;
exports.ChannelByValueSelectorFactory = ChannelByValueSelectorFactory;
exports.AggregationTypeSelector = exports.AggregationScaleSelector = exports.LayerColorRangeSelector = exports.ArcLayerColorSelector = exports.LayerColorSelector = exports.getLayerChannelConfigProps = exports.getVisConfiguratorProps = exports.getLayerConfiguratorProps = exports.getLayerDataset = exports.getLayerFields = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _localization = require("@kepler.gl/localization");

var _styledComponents2 = require("../../common/styled-components");

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _visConfigByFieldSelector = _interopRequireDefault(require("./vis-config-by-field-selector"));

var _layerColumnConfig = _interopRequireDefault(require("./layer-column-config"));

var _layerTypeSelector = _interopRequireDefault(require("./layer-type-selector"));

var _dimensionScaleSelector = _interopRequireDefault(require("./dimension-scale-selector"));

var _colorSelector = _interopRequireDefault(require("./color-selector"));

var _sourceDataSelector = _interopRequireDefault(require("../common/source-data-selector"));

var _visConfigSwitch = _interopRequireDefault(require("./vis-config-switch"));

var _visConfigSlider = _interopRequireDefault(require("./vis-config-slider"));

var _layerConfigGroup = _interopRequireWildcard(require("./layer-config-group"));

var _textLabelPanel = _interopRequireDefault(require("./text-label-panel"));

var _howToButton = _interopRequireDefault(require("./how-to-button"));

var _layerErrorMessage = _interopRequireDefault(require("./layer-error-message"));

var _utils = require("@kepler.gl/utils");

var _constants = require("@kepler.gl/constants");

var _templateObject, _templateObject2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyledLayerConfigurator = _styledComponents["default"].div.attrs({
  className: 'layer-panel__config'
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  margin-top: ", ";\n  padding: ", ";\n  border-left: ", " dashed\n    ", ";\n"])), function (props) {
  return props.theme.layerConfiguratorMargin;
}, function (props) {
  return props.theme.layerConfiguratorPadding;
}, function (props) {
  return props.theme.layerConfiguratorBorder;
}, function (props) {
  return props.theme.layerConfiguratorBorderColor;
});

var StyledLayerVisualConfigurator = _styledComponents["default"].div.attrs({
  className: 'layer-panel__config__visualC-config'
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 12px;\n"])));

var getLayerFields = function getLayerFields(datasets, layer) {
  var _layer$config;

  return (_layer$config = layer.config) !== null && _layer$config !== void 0 && _layer$config.dataId && datasets[layer.config.dataId] ? datasets[layer.config.dataId].fields : [];
};

exports.getLayerFields = getLayerFields;

var getLayerDataset = function getLayerDataset(datasets, layer) {
  var _layer$config2;

  return (_layer$config2 = layer.config) !== null && _layer$config2 !== void 0 && _layer$config2.dataId && datasets[layer.config.dataId] ? datasets[layer.config.dataId] : null;
};

exports.getLayerDataset = getLayerDataset;

var getLayerConfiguratorProps = function getLayerConfiguratorProps(props) {
  return {
    layer: props.layer,
    fields: getLayerFields(props.datasets, props.layer),
    onChange: props.updateLayerConfig,
    setColorUI: props.updateLayerColorUI
  };
};

exports.getLayerConfiguratorProps = getLayerConfiguratorProps;

var getVisConfiguratorProps = function getVisConfiguratorProps(props) {
  return {
    layer: props.layer,
    fields: getLayerFields(props.datasets, props.layer),
    onChange: props.updateLayerVisConfig,
    setColorUI: props.updateLayerColorUI
  };
};

exports.getVisConfiguratorProps = getVisConfiguratorProps;

var getLayerChannelConfigProps = function getLayerChannelConfigProps(props) {
  return {
    layer: props.layer,
    fields: getLayerFields(props.datasets, props.layer),
    onChange: props.updateLayerVisualChannelConfig
  };
};

exports.getLayerChannelConfigProps = getLayerChannelConfigProps;
LayerConfiguratorFactory.deps = [_sourceDataSelector["default"], _visConfigSlider["default"], _textLabelPanel["default"], _layerConfigGroup["default"], ChannelByValueSelectorFactory, _layerColumnConfig["default"], _layerTypeSelector["default"], _visConfigSwitch["default"]];

function LayerConfiguratorFactory(SourceDataSelector, VisConfigSlider, TextLabelPanel, LayerConfigGroup, ChannelByValueSelector, LayerColumnConfig, LayerTypeSelector, VisConfigSwitch) {
  var LayerConfigurator = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(LayerConfigurator, _Component);

    var _super = _createSuper(LayerConfigurator);

    function LayerConfigurator() {
      (0, _classCallCheck2["default"])(this, LayerConfigurator);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(LayerConfigurator, [{
      key: "_renderPointLayerConfig",
      value: function _renderPointLayerConfig(props) {
        return this._renderScatterplotLayerConfig(props);
      }
    }, {
      key: "_renderIconLayerConfig",
      value: function _renderIconLayerConfig(props) {
        return this._renderScatterplotLayerConfig(props);
      }
    }, {
      key: "_renderScatterplotLayerConfig",
      value: function _renderScatterplotLayerConfig(_ref) {
        var layer = _ref.layer,
            visConfiguratorProps = _ref.visConfiguratorProps,
            layerChannelConfigProps = _ref.layerChannelConfigProps,
            layerConfiguratorProps = _ref.layerConfiguratorProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.filled || {
          label: 'layer.color'
        }, visConfiguratorProps, {
          collapsible: true
        }), layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), layer.type === _constants.LAYER_TYPES.point ? /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.outline, visConfiguratorProps, {
          collapsible: true
        }), layer.config.strokeColorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          property: "strokeColorRange"
        })) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          selectedColor: layer.config.visConfig.strokeColor,
          property: "strokeColor"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.strokeColor
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          disabled: !layer.config.visConfig.outline
        })))) : null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.radius',
          collapsible: true
        }, !layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radius, visConfiguratorProps, {
          label: false,
          disabled: Boolean(layer.config.sizeField)
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radiusRange, visConfiguratorProps, {
          label: false,
          disabled: !layer.config.sizeField || layer.config.visConfig.fixedRadius
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSwitch, (0, _extends2["default"])({}, layer.visConfigSettings.fixedRadius, visConfiguratorProps)) : null)), /*#__PURE__*/_react["default"].createElement(TextLabelPanel, {
          fields: visConfiguratorProps.fields,
          updateLayerTextLabel: this.props.updateLayerTextLabel,
          textLabel: layer.config.textLabel
        }));
      }
    }, {
      key: "_renderClusterLayerConfig",
      value: function _renderClusterLayerConfig(_ref2) {
        var layer = _ref2.layer,
            visConfiguratorProps = _ref2.visConfiguratorProps,
            layerConfiguratorProps = _ref2.layerConfiguratorProps,
            layerChannelConfigProps = _ref2.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(AggregationScaleSelector, (0, _extends2["default"])({}, layerConfiguratorProps, {
          channel: layer.visualChannels.color
        })), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), layer.visConfigSettings.colorAggregation.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(AggregationTypeSelector, (0, _extends2["default"])({}, layer.visConfigSettings.colorAggregation, layerChannelConfigProps, {
          channel: layer.visualChannels.color
        })) : null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.radius',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.clusterRadius, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radiusRange, visConfiguratorProps)))));
      }
    }, {
      key: "_renderHeatmapLayerConfig",
      value: function _renderHeatmapLayerConfig(_ref3) {
        var layer = _ref3.layer,
            visConfiguratorProps = _ref3.visConfiguratorProps,
            layerConfiguratorProps = _ref3.layerConfiguratorProps,
            layerChannelConfigProps = _ref3.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.radius'
        }, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radius, visConfiguratorProps, {
          label: false
        }))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.weight'
        }, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.weight
        }, layerChannelConfigProps))));
      }
    }, {
      key: "_renderGridLayerConfig",
      value: function _renderGridLayerConfig(props) {
        return this._renderAggregationLayerConfig(props);
      }
    }, {
      key: "_renderHexagonLayerConfig",
      value: function _renderHexagonLayerConfig(props) {
        return this._renderAggregationLayerConfig(props);
      }
    }, {
      key: "_renderAggregationLayerConfig",
      value: function _renderAggregationLayerConfig(_ref4) {
        var layer = _ref4.layer,
            visConfiguratorProps = _ref4.visConfiguratorProps,
            layerConfiguratorProps = _ref4.layerConfiguratorProps,
            layerChannelConfigProps = _ref4.layerChannelConfigProps;
        var config = layer.config;
        var enable3d = config.visConfig.enable3d;
        var elevationByDescription = 'layer.elevationByDescription';
        var colorByDescription = 'layer.colorByDescription';
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(AggregationScaleSelector, (0, _extends2["default"])({}, layerConfiguratorProps, {
          channel: layer.visualChannels.color
        })), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), layer.visConfigSettings.colorAggregation.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(AggregationTypeSelector, (0, _extends2["default"])({}, layer.visConfigSettings.colorAggregation, layerChannelConfigProps, {
          description: colorByDescription,
          channel: layer.visualChannels.color
        })) : null, layer.visConfigSettings.percentile && layer.visConfigSettings.percentile.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.percentile, visConfiguratorProps)) : null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.radius',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.worldUnitSize, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.coverage, visConfiguratorProps)))), layer.visConfigSettings.enable3d ? /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.enable3d, visConfiguratorProps, {
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps, {
          label: "layerVisConfigs.heightMultiplier"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({}, layerChannelConfigProps, {
          channel: layer.visualChannels.size,
          description: elevationByDescription,
          disabled: !enable3d
        })), /*#__PURE__*/_react["default"].createElement(AggregationScaleSelector, (0, _extends2["default"])({}, layerConfiguratorProps, {
          channel: layer.visualChannels.size
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: "layerVisConfigs.heightRange"
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSwitch, (0, _extends2["default"])({}, layer.visConfigSettings.enableElevationZoomFactor, visConfiguratorProps, {
          label: "layerVisConfigs.enableHeightZoomFactor"
        })), layer.visConfigSettings.sizeAggregation.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(AggregationTypeSelector, (0, _extends2["default"])({}, layer.visConfigSettings.sizeAggregation, layerChannelConfigProps, {
          channel: layer.visualChannels.size
        })) : null, layer.visConfigSettings.elevationPercentile.condition(layer.config) ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationPercentile, visConfiguratorProps)) : null)) : null);
      } // TODO: Shan move these into layer class

    }, {
      key: "_renderHexagonIdLayerConfig",
      value: function _renderHexagonIdLayerConfig(_ref5) {
        var layer = _ref5.layer,
            visConfiguratorProps = _ref5.visConfiguratorProps,
            layerConfiguratorProps = _ref5.layerConfiguratorProps,
            layerChannelConfigProps = _ref5.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.coverage',
          collapsible: true
        }, !layer.config.coverageField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.coverage, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.coverageRange, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.coverage
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.enable3d, visConfiguratorProps, {
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: "layerVisConfigs.heightRange"
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSwitch, (0, _extends2["default"])({}, layer.visConfigSettings.enableElevationZoomFactor, visConfiguratorProps)))));
      }
    }, {
      key: "_renderArcLayerConfig",
      value: function _renderArcLayerConfig(args) {
        return this._renderLineLayerConfig(args);
      }
    }, {
      key: "_renderLineLayerConfig",
      value: function _renderLineLayerConfig(_ref6) {
        var layer = _ref6.layer,
            visConfiguratorProps = _ref6.visConfiguratorProps,
            layerConfiguratorProps = _ref6.layerConfiguratorProps,
            layerChannelConfigProps = _ref6.layerChannelConfigProps;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(ArcLayerColorSelector, {
          layer: layer,
          setColorUI: layerConfiguratorProps.setColorUI,
          onChangeConfig: layerConfiguratorProps.onChange,
          onChangeVisConfig: visConfiguratorProps.onChange
        }), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.sourceColor
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.stroke',
          collapsible: true
        }, layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          disabled: !layer.config.sizeField,
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))), layer.visConfigSettings.elevationScale ? /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: "layerVisConfigs.elevationScale",
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps))) : null);
      }
    }, {
      key: "_renderTripLayerConfig",
      value: function _renderTripLayerConfig(_ref7) {
        var layer = _ref7.layer,
            visConfiguratorProps = _ref7.visConfiguratorProps,
            layerConfiguratorProps = _ref7.layerConfiguratorProps,
            layerChannelConfigProps = _ref7.layerChannelConfigProps;
        var _layer$meta$featureTy = layer.meta.featureTypes,
            featureTypes = _layer$meta$featureTy === void 0 ? {} : _layer$meta$featureTy;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.color',
          collapsible: true
        }, layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, {
          label: "layer.strokeWidth",
          collapsible: true
        }), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, featureTypes.polygon ? layer.visConfigSettings.stroked : {}, {
          label: "layer.trailLength",
          description: "layer.trailLengthDescription"
        }), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.trailLength, visConfiguratorProps, {
          label: false
        }))));
      }
    }, {
      key: "_renderGeojsonLayerConfig",
      value: function _renderGeojsonLayerConfig(_ref8) {
        var layer = _ref8.layer,
            visConfiguratorProps = _ref8.visConfiguratorProps,
            layerConfiguratorProps = _ref8.layerConfiguratorProps,
            layerChannelConfigProps = _ref8.layerChannelConfigProps;
        var _layer$meta$featureTy2 = layer.meta.featureTypes,
            featureTypes = _layer$meta$featureTy2 === void 0 ? {} : _layer$meta$featureTy2,
            visConfig = layer.config.visConfig;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, featureTypes.polygon || featureTypes.point ? /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.filled, visConfiguratorProps, {
          label: "layer.fillColor",
          collapsible: true
        }), layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))) : null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.stroked, visConfiguratorProps, {
          label: "layer.strokeColor",
          collapsible: true
        }), layer.config.strokeColorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          property: "strokeColorRange"
        })) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          selectedColor: layer.config.visConfig.strokeColor,
          property: "strokeColor"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.strokeColor
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.strokeOpacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, featureTypes.polygon ? layer.visConfigSettings.stroked : {}, {
          label: "layer.strokeWidth",
          collapsible: true
        }), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))), featureTypes.polygon ? /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.enable3d, {
          disabled: !visConfig.filled,
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.height
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSwitch, (0, _extends2["default"])({}, layer.visConfigSettings.enableElevationZoomFactor, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSwitch, (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.wireframe)))) : null, featureTypes.point ? /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.radius',
          collapsible: true
        }, !layer.config.radiusField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radius, visConfiguratorProps, {
          label: false,
          disabled: Boolean(layer.config.radiusField)
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.radiusRange, visConfiguratorProps, {
          label: false,
          disabled: !layer.config.radiusField
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.radius
        }, layerChannelConfigProps)))) : null);
      }
    }, {
      key: "_render3DLayerConfig",
      value: function _render3DLayerConfig(_ref9) {
        var layer = _ref9.layer,
            visConfiguratorProps = _ref9.visConfiguratorProps;
        return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.3DModel',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Input, {
          type: "file",
          accept: ".glb,.gltf",
          onChange: function onChange(e) {
            if (e.target.files && e.target.files[0]) {
              var url = URL.createObjectURL(e.target.files[0]);
              visConfiguratorProps.onChange({
                scenegraph: url
              });
            }
          }
        })), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.3DModelOptions',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeScale, visConfiguratorProps, {
          disabled: false
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.angleX, visConfiguratorProps, {
          disabled: false
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.angleY, visConfiguratorProps, {
          disabled: false
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.angleZ, visConfiguratorProps, {
          disabled: false
        }))));
      }
    }, {
      key: "_renderS2LayerConfig",
      value: function _renderS2LayerConfig(_ref10) {
        var layer = _ref10.layer,
            visConfiguratorProps = _ref10.visConfiguratorProps,
            layerConfiguratorProps = _ref10.layerConfiguratorProps,
            layerChannelConfigProps = _ref10.layerChannelConfigProps;
        var visConfig = layer.config.visConfig;
        return /*#__PURE__*/_react["default"].createElement(StyledLayerVisualConfigurator, null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.filled, visConfiguratorProps, {
          label: "layer.fillColor",
          collapsible: true
        }), layer.config.colorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, visConfiguratorProps) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, layerConfiguratorProps), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.color
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.opacity, visConfiguratorProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, layer.visConfigSettings.stroked, visConfiguratorProps, {
          label: "layer.strokeColor",
          collapsible: true
        }), layer.config.strokeColorField ? /*#__PURE__*/_react["default"].createElement(LayerColorRangeSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          property: "strokeColorRange"
        })) : /*#__PURE__*/_react["default"].createElement(LayerColorSelector, (0, _extends2["default"])({}, visConfiguratorProps, {
          selectedColor: layer.config.visConfig.strokeColor,
          property: "strokeColor"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.strokeColor
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, {
          label: "layer.strokeWidth",
          collapsible: true
        }), layer.config.sizeField ? /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.sizeRange, visConfiguratorProps, {
          label: false
        })) : /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.thickness, visConfiguratorProps, {
          label: false
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.size
        }, layerChannelConfigProps)))), /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.enable3d, {
          disabled: !visConfig.filled,
          collapsible: true
        }), /*#__PURE__*/_react["default"].createElement(ChannelByValueSelector, (0, _extends2["default"])({
          channel: layer.visualChannels.height
        }, layerChannelConfigProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.elevationScale, visConfiguratorProps, {
          label: "layerVisConfigs.elevationScale"
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(VisConfigSlider, (0, _extends2["default"])({}, layer.visConfigSettings.heightRange, visConfiguratorProps, {
          label: "layerVisConfigs.heightRange"
        })), /*#__PURE__*/_react["default"].createElement(VisConfigSwitch, (0, _extends2["default"])({}, layer.visConfigSettings.enableElevationZoomFactor, visConfiguratorProps)), /*#__PURE__*/_react["default"].createElement(VisConfigSwitch, (0, _extends2["default"])({}, visConfiguratorProps, layer.visConfigSettings.wireframe)))));
      }
    }, {
      key: "render",
      value: function render() {
        var _this = this;

        var _this$props = this.props,
            layer = _this$props.layer,
            datasets = _this$props.datasets,
            updateLayerConfig = _this$props.updateLayerConfig,
            layerTypeOptions = _this$props.layerTypeOptions,
            updateLayerType = _this$props.updateLayerType;

        var _ref11 = layer.config.dataId ? datasets[layer.config.dataId] : {},
            _ref11$fields = _ref11.fields,
            fields = _ref11$fields === void 0 ? [] : _ref11$fields,
            _ref11$fieldPairs = _ref11.fieldPairs,
            fieldPairs = _ref11$fieldPairs === void 0 ? undefined : _ref11$fieldPairs;

        var config = layer.config;
        var visConfiguratorProps = getVisConfiguratorProps(this.props);
        var layerConfiguratorProps = getLayerConfiguratorProps(this.props);
        var layerChannelConfigProps = getLayerChannelConfigProps(this.props);
        var dataset = getLayerDataset(datasets, layer);
        var renderTemplate = layer.type && "_render".concat((0, _utils.capitalizeFirstLetter)(layer.type), "LayerConfig");
        return /*#__PURE__*/_react["default"].createElement(StyledLayerConfigurator, null, layer.layerInfoModal ? /*#__PURE__*/_react["default"].createElement(_howToButton["default"], {
          onClick: function onClick() {
            return _this.props.openModal(layer.layerInfoModal);
          }
        }) : null, /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'layer.basic',
          collapsible: true,
          expanded: !layer.hasAllColumns()
        }, /*#__PURE__*/_react["default"].createElement(LayerTypeSelector, {
          selected: layer.type,
          options: layerTypeOptions // @ts-ignore
          ,
          onSelect: updateLayerType
        }), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, /*#__PURE__*/_react["default"].createElement(SourceDataSelector, {
          datasets: datasets,
          id: layer.id,
          dataId: config.dataId // @ts-ignore
          ,
          onSelect: function onSelect(value) {
            return updateLayerConfig({
              dataId: value
            });
          }
        }), /*#__PURE__*/_react["default"].createElement(LayerColumnConfig, {
          columnPairs: layer.columnPairs,
          columns: layer.config.columns,
          assignColumnPairs: layer.assignColumnPairs.bind(layer),
          assignColumn: layer.assignColumn.bind(layer) // @ts-ignore
          ,
          columnLabels: layer.columnLabels,
          fields: fields,
          fieldPairs: fieldPairs,
          updateLayerConfig: updateLayerConfig
        })), layer.errorMessage ? /*#__PURE__*/_react["default"].createElement(_layerErrorMessage["default"], {
          errorMessage: layer.errorMessage
        }) : null), renderTemplate && this[renderTemplate] && this[renderTemplate]({
          layer: layer,
          dataset: dataset,
          visConfiguratorProps: visConfiguratorProps,
          layerChannelConfigProps: layerChannelConfigProps,
          layerConfiguratorProps: layerConfiguratorProps
        }));
      }
    }]);
    return LayerConfigurator;
  }(_react.Component);

  return LayerConfigurator;
}

var LayerColorSelector = function LayerColorSelector(_ref12) {
  var layer = _ref12.layer,
      onChange = _ref12.onChange,
      selectedColor = _ref12.selectedColor,
      _ref12$property = _ref12.property,
      property = _ref12$property === void 0 ? 'color' : _ref12$property,
      _setColorUI = _ref12.setColorUI;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
    colorSets: [{
      selectedColor: selectedColor || layer.config.color,
      setColor: function setColor(rgbValue) {
        return onChange((0, _defineProperty2["default"])({}, property, rgbValue));
      }
    }],
    colorUI: layer.config.colorUI[property],
    setColorUI: function setColorUI(newConfig) {
      return _setColorUI(property, newConfig);
    }
  }));
};

exports.LayerColorSelector = LayerColorSelector;

var ArcLayerColorSelector = function ArcLayerColorSelector(_ref13) {
  var layer = _ref13.layer,
      onChangeConfig = _ref13.onChangeConfig,
      onChangeVisConfig = _ref13.onChangeVisConfig,
      _ref13$property = _ref13.property,
      property = _ref13$property === void 0 ? 'color' : _ref13$property,
      _setColorUI2 = _ref13.setColorUI;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
    colorSets: [{
      selectedColor: layer.config.color,
      setColor: function setColor(rgbValue) {
        return onChangeConfig({
          color: rgbValue
        });
      },
      label: 'Source'
    }, {
      selectedColor: layer.config.visConfig.targetColor || layer.config.color,
      setColor: function setColor(rgbValue) {
        return onChangeVisConfig({
          targetColor: rgbValue
        });
      },
      label: 'Target'
    }],
    colorUI: layer.config.colorUI[property],
    setColorUI: function setColorUI(newConfig) {
      return _setColorUI2(property, newConfig);
    }
  }));
};

exports.ArcLayerColorSelector = ArcLayerColorSelector;

var LayerColorRangeSelector = function LayerColorRangeSelector(_ref14) {
  var layer = _ref14.layer,
      onChange = _ref14.onChange,
      _ref14$property = _ref14.property,
      property = _ref14$property === void 0 ? 'colorRange' : _ref14$property,
      _setColorUI3 = _ref14.setColorUI;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
    colorSets: [{
      selectedColor: layer.config.visConfig[property],
      isRange: true,
      setColor: function setColor(colorRange) {
        return onChange((0, _defineProperty2["default"])({}, property, colorRange));
      }
    }],
    colorUI: layer.config.colorUI[property],
    setColorUI: function setColorUI(newConfig) {
      return _setColorUI3(property, newConfig);
    }
  }));
};

exports.LayerColorRangeSelector = LayerColorRangeSelector;
ChannelByValueSelectorFactory.deps = [_visConfigByFieldSelector["default"]];

function ChannelByValueSelectorFactory(VisConfigByFieldSelector) {
  var ChannelByValueSelector = function ChannelByValueSelector(_ref15) {
    var layer = _ref15.layer,
        channel = _ref15.channel,
        onChange = _ref15.onChange,
        fields = _ref15.fields,
        description = _ref15.description;
    var channelScaleType = channel.channelScaleType,
        field = channel.field,
        key = channel.key,
        property = channel.property,
        scale = channel.scale,
        defaultMeasure = channel.defaultMeasure,
        supportedFieldTypes = channel.supportedFieldTypes;
    var channelSupportedFieldTypes = supportedFieldTypes || _constants.CHANNEL_SCALE_SUPPORTED_FIELDS[channelScaleType];
    var supportedFields = fields.filter(function (_ref16) {
      var type = _ref16.type;
      return channelSupportedFieldTypes.includes(type);
    });
    var scaleOptions = layer.getScaleOptions(channel.key);
    var showScale = !layer.isAggregated && layer.config[scale] && scaleOptions.length > 1;
    var defaultDescription = 'layerConfiguration.defaultDescription';
    return /*#__PURE__*/_react["default"].createElement(VisConfigByFieldSelector, {
      channel: channel.key,
      description: description || defaultDescription,
      fields: supportedFields,
      id: layer.id,
      key: "".concat(key, "-channel-selector"),
      property: property,
      placeholder: defaultMeasure || 'placeholder.selectField',
      scaleOptions: scaleOptions,
      scaleType: scale ? layer.config[scale] : null,
      selectedField: layer.config[field],
      showScale: showScale,
      updateField: function updateField(val) {
        return onChange((0, _defineProperty2["default"])({}, field, val), key);
      },
      updateScale: function updateScale(val) {
        return onChange((0, _defineProperty2["default"])({}, scale, val), key);
      }
    });
  };

  return ChannelByValueSelector;
}

var AggregationScaleSelector = function AggregationScaleSelector(_ref17) {
  var channel = _ref17.channel,
      layer = _ref17.layer,
      onChange = _ref17.onChange;
  var scale = channel.scale,
      key = channel.key;
  var scaleOptions = layer.getScaleOptions(key);
  return Array.isArray(scaleOptions) && scaleOptions.length > 1 ? /*#__PURE__*/_react["default"].createElement(_dimensionScaleSelector["default"], {
    label: "".concat(key, " Scale"),
    options: scaleOptions,
    scaleType: layer.config[scale],
    onSelect: function onSelect(val) {
      return onChange((0, _defineProperty2["default"])({}, scale, val), key);
    }
  }) : null;
};

exports.AggregationScaleSelector = AggregationScaleSelector;

var AggregationTypeSelector = function AggregationTypeSelector(_ref18) {
  var channel = _ref18.channel,
      layer = _ref18.layer,
      _onChange6 = _ref18.onChange;
  var field = channel.field,
      aggregation = channel.aggregation,
      key = channel.key;
  var selectedField = layer.config[field];
  var visConfig = layer.config.visConfig; // aggregation should only be selectable when field is selected

  var aggregationOptions = layer.getAggregationOptions(key);
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: 'layer.aggregateBy',
    values: {
      field: selectedField.name
    }
  })), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
    selectedItems: visConfig[aggregation],
    options: aggregationOptions,
    multiSelect: false,
    searchable: false,
    onChange: function onChange(value) {
      return _onChange6({
        visConfig: _objectSpread(_objectSpread({}, layer.config.visConfig), {}, (0, _defineProperty2["default"])({}, aggregation, value))
      }, channel.key);
    }
  }));
};
/* eslint-enable max-params */


exports.AggregationTypeSelector = AggregationTypeSelector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2xheWVyLXBhbmVsL2xheWVyLWNvbmZpZ3VyYXRvci50c3giXSwibmFtZXMiOlsiU3R5bGVkTGF5ZXJDb25maWd1cmF0b3IiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsInByb3BzIiwidGhlbWUiLCJsYXllckNvbmZpZ3VyYXRvck1hcmdpbiIsImxheWVyQ29uZmlndXJhdG9yUGFkZGluZyIsImxheWVyQ29uZmlndXJhdG9yQm9yZGVyIiwibGF5ZXJDb25maWd1cmF0b3JCb3JkZXJDb2xvciIsIlN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yIiwiZ2V0TGF5ZXJGaWVsZHMiLCJkYXRhc2V0cyIsImxheWVyIiwiY29uZmlnIiwiZGF0YUlkIiwiZmllbGRzIiwiZ2V0TGF5ZXJEYXRhc2V0IiwiZ2V0TGF5ZXJDb25maWd1cmF0b3JQcm9wcyIsIm9uQ2hhbmdlIiwidXBkYXRlTGF5ZXJDb25maWciLCJzZXRDb2xvclVJIiwidXBkYXRlTGF5ZXJDb2xvclVJIiwiZ2V0VmlzQ29uZmlndXJhdG9yUHJvcHMiLCJ1cGRhdGVMYXllclZpc0NvbmZpZyIsImdldExheWVyQ2hhbm5lbENvbmZpZ1Byb3BzIiwidXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnIiwiTGF5ZXJDb25maWd1cmF0b3JGYWN0b3J5IiwiZGVwcyIsIlNvdXJjZURhdGFTZWxlY3RvckZhY3RvcnkiLCJWaXNDb25maWdTbGlkZXJGYWN0b3J5IiwiVGV4dExhYmVsUGFuZWxGYWN0b3J5IiwiTGF5ZXJDb25maWdHcm91cEZhY3RvcnkiLCJDaGFubmVsQnlWYWx1ZVNlbGVjdG9yRmFjdG9yeSIsIkxheWVyQ29sdW1uQ29uZmlnRmFjdG9yeSIsIkxheWVyVHlwZVNlbGVjdG9yRmFjdG9yeSIsIlZpc0NvbmZpZ1N3aXRjaEZhY3RvcnkiLCJTb3VyY2VEYXRhU2VsZWN0b3IiLCJWaXNDb25maWdTbGlkZXIiLCJUZXh0TGFiZWxQYW5lbCIsIkxheWVyQ29uZmlnR3JvdXAiLCJDaGFubmVsQnlWYWx1ZVNlbGVjdG9yIiwiTGF5ZXJDb2x1bW5Db25maWciLCJMYXllclR5cGVTZWxlY3RvciIsIlZpc0NvbmZpZ1N3aXRjaCIsIkxheWVyQ29uZmlndXJhdG9yIiwiX3JlbmRlclNjYXR0ZXJwbG90TGF5ZXJDb25maWciLCJ2aXNDb25maWd1cmF0b3JQcm9wcyIsImxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzIiwibGF5ZXJDb25maWd1cmF0b3JQcm9wcyIsInZpc0NvbmZpZ1NldHRpbmdzIiwiZmlsbGVkIiwibGFiZWwiLCJjb2xvckZpZWxkIiwidmlzdWFsQ2hhbm5lbHMiLCJjb2xvciIsIm9wYWNpdHkiLCJ0eXBlIiwiTEFZRVJfVFlQRVMiLCJwb2ludCIsIm91dGxpbmUiLCJzdHJva2VDb2xvckZpZWxkIiwidmlzQ29uZmlnIiwic3Ryb2tlQ29sb3IiLCJ0aGlja25lc3MiLCJzaXplRmllbGQiLCJyYWRpdXMiLCJCb29sZWFuIiwicmFkaXVzUmFuZ2UiLCJmaXhlZFJhZGl1cyIsInNpemUiLCJ1cGRhdGVMYXllclRleHRMYWJlbCIsInRleHRMYWJlbCIsImNvbG9yQWdncmVnYXRpb24iLCJjb25kaXRpb24iLCJjbHVzdGVyUmFkaXVzIiwid2VpZ2h0IiwiX3JlbmRlckFnZ3JlZ2F0aW9uTGF5ZXJDb25maWciLCJlbmFibGUzZCIsImVsZXZhdGlvbkJ5RGVzY3JpcHRpb24iLCJjb2xvckJ5RGVzY3JpcHRpb24iLCJwZXJjZW50aWxlIiwid29ybGRVbml0U2l6ZSIsImNvdmVyYWdlIiwiZWxldmF0aW9uU2NhbGUiLCJzaXplUmFuZ2UiLCJlbmFibGVFbGV2YXRpb25ab29tRmFjdG9yIiwic2l6ZUFnZ3JlZ2F0aW9uIiwiZWxldmF0aW9uUGVyY2VudGlsZSIsImNvdmVyYWdlRmllbGQiLCJjb3ZlcmFnZVJhbmdlIiwiYXJncyIsIl9yZW5kZXJMaW5lTGF5ZXJDb25maWciLCJzb3VyY2VDb2xvciIsIm1ldGEiLCJmZWF0dXJlVHlwZXMiLCJwb2x5Z29uIiwic3Ryb2tlZCIsInRyYWlsTGVuZ3RoIiwic3Ryb2tlT3BhY2l0eSIsImhlaWdodCIsIndpcmVmcmFtZSIsInJhZGl1c0ZpZWxkIiwiZSIsInRhcmdldCIsImZpbGVzIiwidXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwic2NlbmVncmFwaCIsInNpemVTY2FsZSIsImFuZ2xlWCIsImFuZ2xlWSIsImFuZ2xlWiIsImhlaWdodFJhbmdlIiwibGF5ZXJUeXBlT3B0aW9ucyIsInVwZGF0ZUxheWVyVHlwZSIsImZpZWxkUGFpcnMiLCJ1bmRlZmluZWQiLCJkYXRhc2V0IiwicmVuZGVyVGVtcGxhdGUiLCJsYXllckluZm9Nb2RhbCIsIm9wZW5Nb2RhbCIsImhhc0FsbENvbHVtbnMiLCJpZCIsInZhbHVlIiwiY29sdW1uUGFpcnMiLCJjb2x1bW5zIiwiYXNzaWduQ29sdW1uUGFpcnMiLCJiaW5kIiwiYXNzaWduQ29sdW1uIiwiY29sdW1uTGFiZWxzIiwiZXJyb3JNZXNzYWdlIiwiQ29tcG9uZW50IiwiTGF5ZXJDb2xvclNlbGVjdG9yIiwic2VsZWN0ZWRDb2xvciIsInByb3BlcnR5Iiwic2V0Q29sb3IiLCJyZ2JWYWx1ZSIsImNvbG9yVUkiLCJuZXdDb25maWciLCJBcmNMYXllckNvbG9yU2VsZWN0b3IiLCJvbkNoYW5nZUNvbmZpZyIsIm9uQ2hhbmdlVmlzQ29uZmlnIiwidGFyZ2V0Q29sb3IiLCJMYXllckNvbG9yUmFuZ2VTZWxlY3RvciIsImlzUmFuZ2UiLCJjb2xvclJhbmdlIiwiVmlzQ29uZmlnQnlGaWVsZFNlbGVjdG9yRmFjdG9yeSIsIlZpc0NvbmZpZ0J5RmllbGRTZWxlY3RvciIsImNoYW5uZWwiLCJkZXNjcmlwdGlvbiIsImNoYW5uZWxTY2FsZVR5cGUiLCJmaWVsZCIsImtleSIsInNjYWxlIiwiZGVmYXVsdE1lYXN1cmUiLCJzdXBwb3J0ZWRGaWVsZFR5cGVzIiwiY2hhbm5lbFN1cHBvcnRlZEZpZWxkVHlwZXMiLCJDSEFOTkVMX1NDQUxFX1NVUFBPUlRFRF9GSUVMRFMiLCJzdXBwb3J0ZWRGaWVsZHMiLCJmaWx0ZXIiLCJpbmNsdWRlcyIsInNjYWxlT3B0aW9ucyIsImdldFNjYWxlT3B0aW9ucyIsInNob3dTY2FsZSIsImlzQWdncmVnYXRlZCIsImxlbmd0aCIsImRlZmF1bHREZXNjcmlwdGlvbiIsInZhbCIsIkFnZ3JlZ2F0aW9uU2NhbGVTZWxlY3RvciIsIkFycmF5IiwiaXNBcnJheSIsIkFnZ3JlZ2F0aW9uVHlwZVNlbGVjdG9yIiwiYWdncmVnYXRpb24iLCJzZWxlY3RlZEZpZWxkIiwiYWdncmVnYXRpb25PcHRpb25zIiwiZ2V0QWdncmVnYXRpb25PcHRpb25zIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7OztBQThFQSxJQUFNQSx1QkFBdUIsR0FBR0MsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUMvQ0MsRUFBQUEsU0FBUyxFQUFFO0FBRG9DLENBQWpCLENBQUgsOExBSWIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyx1QkFBaEI7QUFBQSxDQUpRLEVBS2hCLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsd0JBQWhCO0FBQUEsQ0FMVyxFQU1aLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsdUJBQWhCO0FBQUEsQ0FOTyxFQU92QixVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlJLDRCQUFoQjtBQUFBLENBUGtCLENBQTdCOztBQVVBLElBQU1DLDZCQUE2QixHQUFHViw2QkFBT0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQ3JEQyxFQUFB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REYsQ0FERixlQUlFLGdDQUFDLHdCQUFEO0FBQ0UsSUFBQSxhQUFhLEVBQUVwSCxTQUFTLENBQUNnSCxXQUFELENBRDFCO0FBRUUsSUFBQSxPQUFPLEVBQUVFLGtCQUZYO0FBR0UsSUFBQSxXQUFXLEVBQUUsS0FIZjtBQUlFLElBQUEsVUFBVSxFQUFFLEtBSmQ7QUFLRSxJQUFBLFFBQVEsRUFBRSxrQkFBQW5ELEtBQUs7QUFBQSxhQUNiMUcsVUFBUSxDQUNOO0FBQ0UyQyxRQUFBQSxTQUFTLGtDQUNKakQsS0FBSyxDQUFDQyxNQUFOLENBQWFnRCxTQURULDRDQUVOZ0gsV0FGTSxFQUVrQmpELEtBRmxCO0FBRFgsT0FETSxFQU9OeUIsT0FBTyxDQUFDSSxHQVBGLENBREs7QUFBQTtBQUxqQixJQUpGLENBREY7QUF3QkQsQ0FoQ007QUFpQ1AiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21wbGV4aXR5ICovXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnQGtlcGxlci5nbC9sb2NhbGl6YXRpb24nO1xuXG5pbXBvcnQge0lucHV0LCBQYW5lbExhYmVsLCBTaWRlUGFuZWxTZWN0aW9ufSBmcm9tICcuLi8uLi9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEl0ZW1TZWxlY3RvciBmcm9tICcuLi8uLi9jb21tb24vaXRlbS1zZWxlY3Rvci9pdGVtLXNlbGVjdG9yJztcblxuaW1wb3J0IFZpc0NvbmZpZ0J5RmllbGRTZWxlY3RvckZhY3RvcnkgZnJvbSAnLi92aXMtY29uZmlnLWJ5LWZpZWxkLXNlbGVjdG9yJztcbmltcG9ydCBMYXllckNvbHVtbkNvbmZpZ0ZhY3RvcnkgZnJvbSAnLi9sYXllci1jb2x1bW4tY29uZmlnJztcbmltcG9ydCBMYXllclR5cGVTZWxlY3RvckZhY3RvcnkgZnJvbSAnLi9sYXllci10eXBlLXNlbGVjdG9yJztcbmltcG9ydCBEaW1lbnNpb25TY2FsZVNlbGVjdG9yIGZyb20gJy4vZGltZW5zaW9uLXNjYWxlLXNlbGVjdG9yJztcbmltcG9ydCBDb2xvclNlbGVjdG9yIGZyb20gJy4vY29sb3Itc2VsZWN0b3InO1xuaW1wb3J0IFNvdXJjZURhdGFTZWxlY3RvckZhY3RvcnkgZnJvbSAnLi4vY29tbW9uL3NvdXJjZS1kYXRhLXNlbGVjdG9yJztcbmltcG9ydCBWaXNDb25maWdTd2l0Y2hGYWN0b3J5IGZyb20gJy4vdmlzLWNvbmZpZy1zd2l0Y2gnO1xuaW1wb3J0IFZpc0NvbmZpZ1NsaWRlckZhY3RvcnkgZnJvbSAnLi92aXMtY29uZmlnLXNsaWRlcic7XG5pbXBvcnQgTGF5ZXJDb25maWdHcm91cEZhY3RvcnksIHtDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudH0gZnJvbSAnLi9sYXllci1jb25maWctZ3JvdXAnO1xuaW1wb3J0IFRleHRMYWJlbFBhbmVsRmFjdG9yeSBmcm9tICcuL3RleHQtbGFiZWwtcGFuZWwnO1xuaW1wb3J0IEhvd1RvQnV0dG9uIGZyb20gJy4vaG93LXRvLWJ1dHRvbic7XG5pbXBvcnQgTGF5ZXJFcnJvck1lc3NhZ2UgZnJvbSAnLi9sYXllci1lcnJvci1tZXNzYWdlJztcblxuaW1wb3J0IHtjYXBpdGFsaXplRmlyc3RMZXR0ZXJ9IGZyb20gJ0BrZXBsZXIuZ2wvdXRpbHMnO1xuXG5pbXBvcnQge0NIQU5ORUxfU0NBTEVfU1VQUE9SVEVEX0ZJRUxEUywgTEFZRVJfVFlQRVMsIENvbG9yUmFuZ2V9IGZyb20gJ0BrZXBsZXIuZ2wvY29uc3RhbnRzJztcbmltcG9ydCB7TGF5ZXIsIExheWVyQmFzZUNvbmZpZywgVmlzdWFsQ2hhbm5lbCwgQWdncmVnYXRpb25MYXllcn0gZnJvbSAnQGtlcGxlci5nbC9sYXllcnMnO1xuXG5pbXBvcnQge05lc3RlZFBhcnRpYWwsIFJHQkNvbG9yLCBMYXllclZpc0NvbmZpZywgQ29sb3JVSSwgRmllbGR9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuaW1wb3J0IHt0b2dnbGVNb2RhbCwgQWN0aW9uSGFuZGxlcn0gZnJvbSAnQGtlcGxlci5nbC9hY3Rpb25zJztcbmltcG9ydCB7RGF0YXNldHN9IGZyb20gJ0BrZXBsZXIuZ2wvdGFibGUnO1xuXG50eXBlIExheWVyQ29uZmlndXJhdG9yUHJvcHMgPSB7XG4gIGxheWVyOiBMYXllcjtcbiAgZGF0YXNldHM6IERhdGFzZXRzO1xuICBsYXllclR5cGVPcHRpb25zOiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGljb246IFJlYWN0LkVsZW1lbnRUeXBlO1xuICAgIHJlcXVpcmVEYXRhOiBib29sZWFuO1xuICB9W107XG4gIG9wZW5Nb2RhbDogQWN0aW9uSGFuZGxlcjx0eXBlb2YgdG9nZ2xlTW9kYWw+O1xuICB1cGRhdGVMYXllckNvbmZpZzogKG5ld0NvbmZpZzogUGFydGlhbDxMYXllckJhc2VDb25maWc+KSA9PiB2b2lkO1xuICB1cGRhdGVMYXllclR5cGU6IChuZXdUeXBlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHVwZGF0ZUxheWVyVmlzQ29uZmlnOiAobmV3VmlzQ29uZmlnOiBQYXJ0aWFsPExheWVyVmlzQ29uZmlnPikgPT4gdm9pZDtcbiAgdXBkYXRlTGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnOiAoXG4gICAgbmV3Q29uZmlnOiBQYXJ0aWFsPExheWVyQmFzZUNvbmZpZz4sXG4gICAgY2hhbm5lbDogc3RyaW5nLFxuICAgIG5ld1Zpc0NvbmZpZz86IFBhcnRpYWw8TGF5ZXJWaXNDb25maWc+XG4gICkgPT4gdm9pZDtcbiAgdXBkYXRlTGF5ZXJDb2xvclVJOiAocHJvcDogc3RyaW5nLCBuZXdDb25maWc6IE5lc3RlZFBhcnRpYWw8Q29sb3JVST4pID0+IHZvaWQ7XG4gIHVwZGF0ZUxheWVyVGV4dExhYmVsOiAoaWR4OiBudW1iZXIgfCAnYWxsJywgcHJvcDogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiB2b2lkO1xufTtcblxudHlwZSBMYXllckNvbG9yU2VsZWN0b3JQcm9wcyA9IHtcbiAgbGF5ZXI6IExheWVyO1xuICBvbkNoYW5nZTogKHY6IFJlY29yZDxzdHJpbmcsIFJHQkNvbG9yPikgPT4gdm9pZDtcbiAgc2VsZWN0ZWRDb2xvcj86IFJHQkNvbG9yO1xuICBwcm9wZXJ0eT86IHN0cmluZztcbiAgc2V0Q29sb3JVSTogKHByb3A6IHN0cmluZywgbmV3Q29uZmlnOiBOZXN0ZWRQYXJ0aWFsPENvbG9yVUk+KSA9PiB2b2lkO1xufTtcblxudHlwZSBBcmNMYXllckNvbG9yU2VsZWN0b3JQcm9wcyA9IHtcbiAgbGF5ZXI6IExheWVyO1xuICBvbkNoYW5nZUNvbmZpZzogKHY6IHtjb2xvcjogUkdCQ29sb3J9KSA9PiB2b2lkO1xuICBvbkNoYW5nZVZpc0NvbmZpZzogKHY6IHt0YXJnZXRDb2xvcjogUkdCQ29sb3J9KSA9PiB2b2lkO1xuICBwcm9wZXJ0eT86IHN0cmluZztcbiAgc2V0Q29sb3JVSTogKHByb3A6IHN0cmluZywgbmV3Q29uZmlnOiBOZXN0ZWRQYXJ0aWFsPENvbG9yVUk+KSA9PiB2b2lkO1xufTtcblxudHlwZSBMYXllckNvbG9yUmFuZ2VTZWxlY3RvclByb3BzID0ge1xuICBsYXllcjogTGF5ZXI7XG4gIG9uQ2hhbmdlOiAodjogUmVjb3JkPHN0cmluZywgQ29sb3JSYW5nZT4pID0+IHZvaWQ7XG4gIHByb3BlcnR5Pzogc3RyaW5nO1xuICBzZXRDb2xvclVJOiAocHJvcDogc3RyaW5nLCBuZXdDb25maWc6IE5lc3RlZFBhcnRpYWw8Q29sb3JVST4pID0+IHZvaWQ7XG59O1xuXG50eXBlIENoYW5uZWxCeVZhbHVlU2VsZWN0b3JQcm9wcyA9IHtcbiAgbGF5ZXI6IExheWVyO1xuICBjaGFubmVsOiBWaXN1YWxDaGFubmVsO1xuICBvbkNoYW5nZTogKFxuICAgIHZhbDogUmVjb3JkPFxuICAgICAgc3RyaW5nLFxuICAgICAgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IG9iamVjdCB8IHJlYWRvbmx5IChzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgb2JqZWN0KVtdIHwgbnVsbFxuICAgID4sXG4gICAga2V5OiBzdHJpbmdcbiAgKSA9PiB2b2lkO1xuICBmaWVsZHM6IEZpZWxkW107XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59O1xuXG50eXBlIEFnZ3JlZ2F0aW9uU2VsZWN0b3JQcm9wcyA9IHtcbiAgY2hhbm5lbDogVmlzdWFsQ2hhbm5lbDtcbiAgbGF5ZXI6IEFnZ3JlZ2F0aW9uTGF5ZXI7XG4gIG9uQ2hhbmdlOiAoXG4gICAgdmFsOiBSZWNvcmQ8XG4gICAgICBzdHJpbmcsXG4gICAgICBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgb2JqZWN0IHwgcmVhZG9ubHkgKHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBvYmplY3QpW10gfCBudWxsXG4gICAgPixcbiAgICBrZXk6IHN0cmluZ1xuICApID0+IHZvaWQ7XG59O1xuXG5jb25zdCBTdHlsZWRMYXllckNvbmZpZ3VyYXRvciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdsYXllci1wYW5lbF9fY29uZmlnJ1xufSlgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYXllckNvbmZpZ3VyYXRvck1hcmdpbn07XG4gIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGF5ZXJDb25maWd1cmF0b3JQYWRkaW5nfTtcbiAgYm9yZGVyLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGF5ZXJDb25maWd1cmF0b3JCb3JkZXJ9IGRhc2hlZFxuICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGF5ZXJDb25maWd1cmF0b3JCb3JkZXJDb2xvcn07XG5gO1xuXG5jb25zdCBTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdsYXllci1wYW5lbF9fY29uZmlnX192aXN1YWxDLWNvbmZpZydcbn0pYFxuICBtYXJnaW4tdG9wOiAxMnB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IGdldExheWVyRmllbGRzID0gKGRhdGFzZXRzOiBEYXRhc2V0cywgbGF5ZXI6IExheWVyKSA9PlxuICBsYXllci5jb25maWc/LmRhdGFJZCAmJiBkYXRhc2V0c1tsYXllci5jb25maWcuZGF0YUlkXSA/IGRhdGFzZXRzW2xheWVyLmNvbmZpZy5kYXRhSWRdLmZpZWxkcyA6IFtdO1xuXG5leHBvcnQgY29uc3QgZ2V0TGF5ZXJEYXRhc2V0ID0gKGRhdGFzZXRzOiBEYXRhc2V0cywgbGF5ZXI6IExheWVyKSA9PlxuICBsYXllci5jb25maWc/LmRhdGFJZCAmJiBkYXRhc2V0c1tsYXllci5jb25maWcuZGF0YUlkXSA/IGRhdGFzZXRzW2xheWVyLmNvbmZpZy5kYXRhSWRdIDogbnVsbDtcblxuZXhwb3J0IGNvbnN0IGdldExheWVyQ29uZmlndXJhdG9yUHJvcHMgPSAocHJvcHM6IExheWVyQ29uZmlndXJhdG9yUHJvcHMpID0+ICh7XG4gIGxheWVyOiBwcm9wcy5sYXllcixcbiAgZmllbGRzOiBnZXRMYXllckZpZWxkcyhwcm9wcy5kYXRhc2V0cywgcHJvcHMubGF5ZXIpLFxuICBvbkNoYW5nZTogcHJvcHMudXBkYXRlTGF5ZXJDb25maWcsXG4gIHNldENvbG9yVUk6IHByb3BzLnVwZGF0ZUxheWVyQ29sb3JVSVxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRWaXNDb25maWd1cmF0b3JQcm9wcyA9IChwcm9wczogTGF5ZXJDb25maWd1cmF0b3JQcm9wcykgPT4gKHtcbiAgbGF5ZXI6IHByb3BzLmxheWVyLFxuICBmaWVsZHM6IGdldExheWVyRmllbGRzKHByb3BzLmRhdGFzZXRzLCBwcm9wcy5sYXllciksXG4gIG9uQ2hhbmdlOiBwcm9wcy51cGRhdGVMYXllclZpc0NvbmZpZyxcbiAgc2V0Q29sb3JVSTogcHJvcHMudXBkYXRlTGF5ZXJDb2xvclVJXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldExheWVyQ2hhbm5lbENvbmZpZ1Byb3BzID0gKHByb3BzOiBMYXllckNvbmZpZ3VyYXRvclByb3BzKSA9PiAoe1xuICBsYXllcjogcHJvcHMubGF5ZXIsXG4gIGZpZWxkczogZ2V0TGF5ZXJGaWVsZHMocHJvcHMuZGF0YXNldHMsIHByb3BzLmxheWVyKSxcbiAgb25DaGFuZ2U6IHByb3BzLnVwZGF0ZUxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ1xufSk7XG5cbkxheWVyQ29uZmlndXJhdG9yRmFjdG9yeS5kZXBzID0gW1xuICBTb3VyY2VEYXRhU2VsZWN0b3JGYWN0b3J5LFxuICBWaXNDb25maWdTbGlkZXJGYWN0b3J5LFxuICBUZXh0TGFiZWxQYW5lbEZhY3RvcnksXG4gIExheWVyQ29uZmlnR3JvdXBGYWN0b3J5LFxuICBDaGFubmVsQnlWYWx1ZVNlbGVjdG9yRmFjdG9yeSxcbiAgTGF5ZXJDb2x1bW5Db25maWdGYWN0b3J5LFxuICBMYXllclR5cGVTZWxlY3RvckZhY3RvcnksXG4gIFZpc0NvbmZpZ1N3aXRjaEZhY3Rvcnlcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheWVyQ29uZmlndXJhdG9yRmFjdG9yeShcbiAgU291cmNlRGF0YVNlbGVjdG9yOiBSZXR1cm5UeXBlPHR5cGVvZiBTb3VyY2VEYXRhU2VsZWN0b3JGYWN0b3J5PixcbiAgVmlzQ29uZmlnU2xpZGVyOiBSZXR1cm5UeXBlPHR5cGVvZiBWaXNDb25maWdTbGlkZXJGYWN0b3J5PixcbiAgVGV4dExhYmVsUGFuZWw6IFJldHVyblR5cGU8dHlwZW9mIFRleHRMYWJlbFBhbmVsRmFjdG9yeT4sXG4gIExheWVyQ29uZmlnR3JvdXA6IFJldHVyblR5cGU8dHlwZW9mIExheWVyQ29uZmlnR3JvdXBGYWN0b3J5PixcbiAgQ2hhbm5lbEJ5VmFsdWVTZWxlY3RvcjogUmV0dXJuVHlwZTx0eXBlb2YgQ2hhbm5lbEJ5VmFsdWVTZWxlY3RvckZhY3Rvcnk+LFxuICBMYXllckNvbHVtbkNvbmZpZzogUmV0dXJuVHlwZTx0eXBlb2YgTGF5ZXJDb2x1bW5Db25maWdGYWN0b3J5PixcbiAgTGF5ZXJUeXBlU2VsZWN0b3I6IFJldHVyblR5cGU8dHlwZW9mIExheWVyVHlwZVNlbGVjdG9yRmFjdG9yeT4sXG4gIFZpc0NvbmZpZ1N3aXRjaDogUmV0dXJuVHlwZTx0eXBlb2YgVmlzQ29uZmlnU3dpdGNoRmFjdG9yeT5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8TGF5ZXJDb25maWd1cmF0b3JQcm9wcz4ge1xuICBjbGFzcyBMYXllckNvbmZpZ3VyYXRvciBleHRlbmRzIENvbXBvbmVudDxMYXllckNvbmZpZ3VyYXRvclByb3BzPiB7XG4gICAgX3JlbmRlclBvaW50TGF5ZXJDb25maWcocHJvcHMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJTY2F0dGVycGxvdExheWVyQ29uZmlnKHByb3BzKTtcbiAgICB9XG5cbiAgICBfcmVuZGVySWNvbkxheWVyQ29uZmlnKHByb3BzKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVuZGVyU2NhdHRlcnBsb3RMYXllckNvbmZpZyhwcm9wcyk7XG4gICAgfVxuXG4gICAgX3JlbmRlclNjYXR0ZXJwbG90TGF5ZXJDb25maWcoe1xuICAgICAgbGF5ZXIsXG4gICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzLFxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wc1xuICAgIH0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgICB7LyogRmlsbCBDb2xvciAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgICAgey4uLihsYXllci52aXNDb25maWdTZXR0aW5ncy5maWxsZWQgfHwge2xhYmVsOiAnbGF5ZXIuY29sb3InfSl9XG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYXllci5jb25maWcuY29sb3JGaWVsZCA/IChcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JSYW5nZVNlbGVjdG9yIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yU2VsZWN0b3Igey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3BhY2l0eX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7Lyogb3V0bGluZSBjb2xvciAqL31cbiAgICAgICAgICB7bGF5ZXIudHlwZSA9PT0gTEFZRVJfVFlQRVMucG9pbnQgPyAoXG4gICAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3V0bGluZX1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGF5ZXIuY29uZmlnLnN0cm9rZUNvbG9yRmllbGQgPyAoXG4gICAgICAgICAgICAgICAgPExheWVyQ29sb3JSYW5nZVNlbGVjdG9yIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gcHJvcGVydHk9XCJzdHJva2VDb2xvclJhbmdlXCIgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8TGF5ZXJDb2xvclNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yPXtsYXllci5jb25maWcudmlzQ29uZmlnLnN0cm9rZUNvbG9yfVxuICAgICAgICAgICAgICAgICAgcHJvcGVydHk9XCJzdHJva2VDb2xvclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zdHJva2VDb2xvcn1cbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy50aGlja25lc3N9XG4gICAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWxheWVyLmNvbmZpZy52aXNDb25maWcub3V0bGluZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgey8qIFJhZGl1cyAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLnJhZGl1cyd9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAgeyFsYXllci5jb25maWcuc2l6ZUZpZWxkID8gKFxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnJhZGl1c31cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtCb29sZWFuKGxheWVyLmNvbmZpZy5zaXplRmllbGQpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5yYWRpdXNSYW5nZX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshbGF5ZXIuY29uZmlnLnNpemVGaWVsZCB8fCBsYXllci5jb25maWcudmlzQ29uZmlnLmZpeGVkUmFkaXVzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2xheWVyLmNvbmZpZy5zaXplRmllbGQgPyAoXG4gICAgICAgICAgICAgICAgPFZpc0NvbmZpZ1N3aXRjaFxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmZpeGVkUmFkaXVzfVxuICAgICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7LyogdGV4dCBsYWJlbCAqL31cbiAgICAgICAgICA8VGV4dExhYmVsUGFuZWxcbiAgICAgICAgICAgIGZpZWxkcz17dmlzQ29uZmlndXJhdG9yUHJvcHMuZmllbGRzfVxuICAgICAgICAgICAgdXBkYXRlTGF5ZXJUZXh0TGFiZWw9e3RoaXMucHJvcHMudXBkYXRlTGF5ZXJUZXh0TGFiZWx9XG4gICAgICAgICAgICB0ZXh0TGFiZWw9e2xheWVyLmNvbmZpZy50ZXh0TGFiZWx9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgX3JlbmRlckNsdXN0ZXJMYXllckNvbmZpZyh7XG4gICAgICBsYXllcixcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXG4gICAgfSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgICAgIHsvKiBDb2xvciAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLmNvbG9yJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8QWdncmVnYXRpb25TY2FsZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY29sb3JBZ2dyZWdhdGlvbi5jb25kaXRpb24obGF5ZXIuY29uZmlnKSA/IChcbiAgICAgICAgICAgICAgICA8QWdncmVnYXRpb25UeXBlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5jb2xvckFnZ3JlZ2F0aW9ufVxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIENsdXN0ZXIgUmFkaXVzICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIucmFkaXVzJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5jbHVzdGVyUmFkaXVzfSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnJhZGl1c1JhbmdlfSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgX3JlbmRlckhlYXRtYXBMYXllckNvbmZpZyh7XG4gICAgICBsYXllcixcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXG4gICAgfSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgICAgIHsvKiBDb2xvciAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLmNvbG9yJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5vcGFjaXR5fSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgICB7LyogUmFkaXVzICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIucmFkaXVzJ30+XG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5yYWRpdXN9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgICAgey8qIFdlaWdodCAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLndlaWdodCd9PlxuICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMud2VpZ2h0fVxuICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgX3JlbmRlckdyaWRMYXllckNvbmZpZyhwcm9wcykge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlckFnZ3JlZ2F0aW9uTGF5ZXJDb25maWcocHJvcHMpO1xuICAgIH1cblxuICAgIF9yZW5kZXJIZXhhZ29uTGF5ZXJDb25maWcocHJvcHMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJBZ2dyZWdhdGlvbkxheWVyQ29uZmlnKHByb3BzKTtcbiAgICB9XG5cbiAgICBfcmVuZGVyQWdncmVnYXRpb25MYXllckNvbmZpZyh7XG4gICAgICBsYXllcixcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXG4gICAgfSkge1xuICAgICAgY29uc3Qge2NvbmZpZ30gPSBsYXllcjtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmlzQ29uZmlnOiB7ZW5hYmxlM2R9XG4gICAgICB9ID0gY29uZmlnO1xuICAgICAgY29uc3QgZWxldmF0aW9uQnlEZXNjcmlwdGlvbiA9ICdsYXllci5lbGV2YXRpb25CeURlc2NyaXB0aW9uJztcbiAgICAgIGNvbnN0IGNvbG9yQnlEZXNjcmlwdGlvbiA9ICdsYXllci5jb2xvckJ5RGVzY3JpcHRpb24nO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICAgICAgey8qIENvbG9yICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIuY29sb3InfSBjb2xsYXBzaWJsZT5cbiAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxBZ2dyZWdhdGlvblNjYWxlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtsYXllci52aXNDb25maWdTZXR0aW5ncy5jb2xvckFnZ3JlZ2F0aW9uLmNvbmRpdGlvbihsYXllci5jb25maWcpID8gKFxuICAgICAgICAgICAgICAgIDxBZ2dyZWdhdGlvblR5cGVTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmNvbG9yQWdncmVnYXRpb259XG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17Y29sb3JCeURlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIHtsYXllci52aXNDb25maWdTZXR0aW5ncy5wZXJjZW50aWxlICYmXG4gICAgICAgICAgICAgIGxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnBlcmNlbnRpbGUuY29uZGl0aW9uKGxheWVyLmNvbmZpZykgPyAoXG4gICAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnBlcmNlbnRpbGV9XG4gICAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIENlbGwgc2l6ZSAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLnJhZGl1cyd9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mud29ybGRVbml0U2l6ZX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5jb3ZlcmFnZX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7LyogRWxldmF0aW9uICovfVxuICAgICAgICAgIHtsYXllci52aXNDb25maWdTZXR0aW5ncy5lbmFibGUzZCA/IChcbiAgICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbmFibGUzZH1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVsZXZhdGlvblNjYWxlfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBsYWJlbD1cImxheWVyVmlzQ29uZmlncy5oZWlnaHRNdWx0aXBsaWVyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2VsZXZhdGlvbkJ5RGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWVuYWJsZTNkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEFnZ3JlZ2F0aW9uU2NhbGVTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnNpemVSYW5nZX1cbiAgICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwibGF5ZXJWaXNDb25maWdzLmhlaWdodFJhbmdlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTd2l0Y2hcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbmFibGVFbGV2YXRpb25ab29tRmFjdG9yfVxuICAgICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJsYXllclZpc0NvbmZpZ3MuZW5hYmxlSGVpZ2h0Wm9vbUZhY3RvclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZUFnZ3JlZ2F0aW9uLmNvbmRpdGlvbihsYXllci5jb25maWcpID8gKFxuICAgICAgICAgICAgICAgICAgPEFnZ3JlZ2F0aW9uVHlwZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zaXplQWdncmVnYXRpb259XG4gICAgICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAge2xheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVsZXZhdGlvblBlcmNlbnRpbGUuY29uZGl0aW9uKGxheWVyLmNvbmZpZykgPyAoXG4gICAgICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbGV2YXRpb25QZXJjZW50aWxlfVxuICAgICAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBTaGFuIG1vdmUgdGhlc2UgaW50byBsYXllciBjbGFzc1xuICAgIF9yZW5kZXJIZXhhZ29uSWRMYXllckNvbmZpZyh7XG4gICAgICBsYXllcixcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXG4gICAgfSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgICAgIHsvKiBDb2xvciAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLmNvbG9yJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLmNvbG9yRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclNlbGVjdG9yIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb2xvcn1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXIgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLm9wYWNpdHl9IHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIENvdmVyYWdlICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIuY292ZXJhZ2UnfSBjb2xsYXBzaWJsZT5cbiAgICAgICAgICAgIHshbGF5ZXIuY29uZmlnLmNvdmVyYWdlRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY292ZXJhZ2V9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuY292ZXJhZ2VSYW5nZX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5jb3ZlcmFnZX1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBoZWlnaHQgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbmFibGUzZH1cbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cbiAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbGV2YXRpb25TY2FsZX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZVJhbmdlfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBsYWJlbD1cImxheWVyVmlzQ29uZmlncy5oZWlnaHRSYW5nZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTd2l0Y2hcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZW5hYmxlRWxldmF0aW9uWm9vbUZhY3Rvcn1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgX3JlbmRlckFyY0xheWVyQ29uZmlnKGFyZ3MpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZW5kZXJMaW5lTGF5ZXJDb25maWcoYXJncyk7XG4gICAgfVxuXG4gICAgX3JlbmRlckxpbmVMYXllckNvbmZpZyh7XG4gICAgICBsYXllcixcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXG4gICAgfSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgICAgIHsvKiBDb2xvciAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLmNvbG9yJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLmNvbG9yRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8QXJjTGF5ZXJDb2xvclNlbGVjdG9yXG4gICAgICAgICAgICAgICAgbGF5ZXI9e2xheWVyfVxuICAgICAgICAgICAgICAgIHNldENvbG9yVUk9e2xheWVyQ29uZmlndXJhdG9yUHJvcHMuc2V0Q29sb3JVSX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUNvbmZpZz17bGF5ZXJDb25maWd1cmF0b3JQcm9wcy5vbkNoYW5nZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZVZpc0NvbmZpZz17dmlzQ29uZmlndXJhdG9yUHJvcHMub25DaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnNvdXJjZUNvbG9yfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3BhY2l0eX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7LyogdGhpY2tuZXNzICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsnbGF5ZXIuc3Ryb2tlJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLnNpemVGaWVsZCA/IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zaXplUmFuZ2V9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshbGF5ZXIuY29uZmlnLnNpemVGaWVsZH1cbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnRoaWNrbmVzc31cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zaXplfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIGVsZXZhdGlvbiBzY2FsZSAqL31cbiAgICAgICAgICB7bGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZWxldmF0aW9uU2NhbGUgPyAoXG4gICAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD1cImxheWVyVmlzQ29uZmlncy5lbGV2YXRpb25TY2FsZVwiIGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVsZXZhdGlvblNjYWxlfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9TdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgX3JlbmRlclRyaXBMYXllckNvbmZpZyh7XG4gICAgICBsYXllcixcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXG4gICAgfSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBtZXRhOiB7ZmVhdHVyZVR5cGVzID0ge319XG4gICAgICB9ID0gbGF5ZXI7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgICB7LyogQ29sb3IgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci5jb2xvcid9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5jb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvciB7Li4ubGF5ZXJDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuY29sb3J9XG4gICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5vcGFjaXR5fSB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBTdHJva2UgV2lkdGggKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSBsYWJlbD1cImxheWVyLnN0cm9rZVdpZHRoXCIgY29sbGFwc2libGU+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLnNpemVGaWVsZCA/IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5zaXplUmFuZ2V9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MudGhpY2tuZXNzfVxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBsYWJlbD17ZmFsc2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBUcmFpbCBMZW5ndGgqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgey4uLihmZWF0dXJlVHlwZXMucG9seWdvbiA/IGxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnN0cm9rZWQgOiB7fSl9XG4gICAgICAgICAgICBsYWJlbD1cImxheWVyLnRyYWlsTGVuZ3RoXCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwibGF5ZXIudHJhaWxMZW5ndGhEZXNjcmlwdGlvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MudHJhaWxMZW5ndGh9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICApO1xuICAgIH1cblxuICAgIF9yZW5kZXJHZW9qc29uTGF5ZXJDb25maWcoe1xuICAgICAgbGF5ZXIsXG4gICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHMsXG4gICAgICBsYXllckNoYW5uZWxDb25maWdQcm9wc1xuICAgIH0pIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbWV0YToge2ZlYXR1cmVUeXBlcyA9IHt9fSxcbiAgICAgICAgY29uZmlnOiB7dmlzQ29uZmlnfVxuICAgICAgfSA9IGxheWVyO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICAgICAgey8qIEZpbGwgQ29sb3IgKi99XG4gICAgICAgICAge2ZlYXR1cmVUeXBlcy5wb2x5Z29uIHx8IGZlYXR1cmVUeXBlcy5wb2ludCA/IChcbiAgICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5maWxsZWR9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgbGFiZWw9XCJsYXllci5maWxsQ29sb3JcIlxuICAgICAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGF5ZXIuY29uZmlnLmNvbG9yRmllbGQgPyAoXG4gICAgICAgICAgICAgICAgPExheWVyQ29sb3JSYW5nZVNlbGVjdG9yIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8TGF5ZXJDb2xvclNlbGVjdG9yIHsuLi5sYXllckNvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3BhY2l0eX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgey8qIHN0cm9rZSBjb2xvciAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cFxuICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnN0cm9rZWR9XG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICBsYWJlbD1cImxheWVyLnN0cm9rZUNvbG9yXCJcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xheWVyLmNvbmZpZy5zdHJva2VDb2xvckZpZWxkID8gKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclJhbmdlU2VsZWN0b3Igey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSBwcm9wZXJ0eT1cInN0cm9rZUNvbG9yUmFuZ2VcIiAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JTZWxlY3RvclxuICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yPXtsYXllci5jb25maWcudmlzQ29uZmlnLnN0cm9rZUNvbG9yfVxuICAgICAgICAgICAgICAgIHByb3BlcnR5PVwic3Ryb2tlQ29sb3JcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICBjaGFubmVsPXtsYXllci52aXN1YWxDaGFubmVscy5zdHJva2VDb2xvcn1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc3Ryb2tlT3BhY2l0eX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBTdHJva2UgV2lkdGggKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIHsuLi4oZmVhdHVyZVR5cGVzLnBvbHlnb24gPyBsYXllci52aXNDb25maWdTZXR0aW5ncy5zdHJva2VkIDoge30pfVxuICAgICAgICAgICAgbGFiZWw9XCJsYXllci5zdHJva2VXaWR0aFwiXG4gICAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYXllci5jb25maWcuc2l6ZUZpZWxkID8gKFxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnNpemVSYW5nZX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy50aGlja25lc3N9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBFbGV2YXRpb24gKi99XG4gICAgICAgICAge2ZlYXR1cmVUeXBlcy5wb2x5Z29uID8gKFxuICAgICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZW5hYmxlM2R9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXshdmlzQ29uZmlnLmZpbGxlZH1cbiAgICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbGV2YXRpb25TY2FsZX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmhlaWdodH1cbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTd2l0Y2hcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbmFibGVFbGV2YXRpb25ab29tRmFjdG9yfVxuICAgICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFZpc0NvbmZpZ1N3aXRjaCB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy53aXJlZnJhbWV9IC8+XG4gICAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICB7LyogUmFkaXVzICovfVxuICAgICAgICAgIHtmZWF0dXJlVHlwZXMucG9pbnQgPyAoXG4gICAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLnJhZGl1cyd9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAgICB7IWxheWVyLmNvbmZpZy5yYWRpdXNGaWVsZCA/IChcbiAgICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MucmFkaXVzfVxuICAgICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e0Jvb2xlYW4obGF5ZXIuY29uZmlnLnJhZGl1c0ZpZWxkKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5yYWRpdXNSYW5nZX1cbiAgICAgICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshbGF5ZXIuY29uZmlnLnJhZGl1c0ZpZWxkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMucmFkaXVzfVxuICAgICAgICAgICAgICAgICAgey4uLmxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvU3R5bGVkTGF5ZXJWaXN1YWxDb25maWd1cmF0b3I+XG4gICAgICApO1xuICAgIH1cblxuICAgIF9yZW5kZXIzRExheWVyQ29uZmlnKHtsYXllciwgdmlzQ29uZmlndXJhdG9yUHJvcHN9KSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci4zRE1vZGVsJ30gY29sbGFwc2libGU+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICBhY2NlcHQ9XCIuZ2xiLC5nbHRmXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5maWxlcyAmJiBlLnRhcmdldC5maWxlc1swXSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChlLnRhcmdldC5maWxlc1swXSk7XG4gICAgICAgICAgICAgICAgICB2aXNDb25maWd1cmF0b3JQcm9wcy5vbkNoYW5nZSh7c2NlbmVncmFwaDogdXJsfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXAgbGFiZWw9eydsYXllci4zRE1vZGVsT3B0aW9ucyd9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc2l6ZVNjYWxlfVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5hbmdsZVh9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxWaXNDb25maWdTbGlkZXJcbiAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmFuZ2xlWX1cbiAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17ZmFsc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuYW5nbGVafVxuICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBfcmVuZGVyUzJMYXllckNvbmZpZyh7XG4gICAgICBsYXllcixcbiAgICAgIHZpc0NvbmZpZ3VyYXRvclByb3BzLFxuICAgICAgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgIGxheWVyQ2hhbm5lbENvbmZpZ1Byb3BzXG4gICAgfSkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBjb25maWc6IHt2aXNDb25maWd9XG4gICAgICB9ID0gbGF5ZXI7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRMYXllclZpc3VhbENvbmZpZ3VyYXRvcj5cbiAgICAgICAgICB7LyogQ29sb3IgKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5maWxsZWR9XG4gICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICBsYWJlbD1cImxheWVyLmZpbGxDb2xvclwiXG4gICAgICAgICAgICBjb2xsYXBzaWJsZVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYXllci5jb25maWcuY29sb3JGaWVsZCA/IChcbiAgICAgICAgICAgICAgPExheWVyQ29sb3JSYW5nZVNlbGVjdG9yIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yU2VsZWN0b3Igey4uLmxheWVyQ29uZmlndXJhdG9yUHJvcHN9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlciB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Mub3BhY2l0eX0gey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfSAvPlxuICAgICAgICAgICAgPC9Db25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICA8L0xheWVyQ29uZmlnR3JvdXA+XG5cbiAgICAgICAgICB7LyogU3Ryb2tlICovfVxuICAgICAgICAgIDxMYXllckNvbmZpZ0dyb3VwXG4gICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3Muc3Ryb2tlZH1cbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIGxhYmVsPVwibGF5ZXIuc3Ryb2tlQ29sb3JcIlxuICAgICAgICAgICAgY29sbGFwc2libGVcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGF5ZXIuY29uZmlnLnN0cm9rZUNvbG9yRmllbGQgPyAoXG4gICAgICAgICAgICAgIDxMYXllckNvbG9yUmFuZ2VTZWxlY3RvciB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IHByb3BlcnR5PVwic3Ryb2tlQ29sb3JSYW5nZVwiIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TGF5ZXJDb2xvclNlbGVjdG9yXG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I9e2xheWVyLmNvbmZpZy52aXNDb25maWcuc3Ryb2tlQ29sb3J9XG4gICAgICAgICAgICAgICAgcHJvcGVydHk9XCJzdHJva2VDb2xvclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8Q2hhbm5lbEJ5VmFsdWVTZWxlY3RvclxuICAgICAgICAgICAgICAgIGNoYW5uZWw9e2xheWVyLnZpc3VhbENoYW5uZWxzLnN0cm9rZUNvbG9yfVxuICAgICAgICAgICAgICAgIHsuLi5sYXllckNoYW5uZWxDb25maWdQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuXG4gICAgICAgICAgey8qIFN0cm9rZSBXaWR0aCAqL31cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9IGxhYmVsPVwibGF5ZXIuc3Ryb2tlV2lkdGhcIiBjb2xsYXBzaWJsZT5cbiAgICAgICAgICAgIHtsYXllci5jb25maWcuc2l6ZUZpZWxkID8gKFxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU2xpZGVyXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLnNpemVSYW5nZX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9e2ZhbHNlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy50aGlja25lc3N9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICAgIDxDaGFubmVsQnlWYWx1ZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZX1cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cblxuICAgICAgICAgIHsvKiBFbGV2YXRpb24gKi99XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBcbiAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5lbmFibGUzZH1cbiAgICAgICAgICAgIGRpc2FibGVkPXshdmlzQ29uZmlnLmZpbGxlZH1cbiAgICAgICAgICAgIGNvbGxhcHNpYmxlXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPENoYW5uZWxCeVZhbHVlU2VsZWN0b3JcbiAgICAgICAgICAgICAgY2hhbm5lbD17bGF5ZXIudmlzdWFsQ2hhbm5lbHMuaGVpZ2h0fVxuICAgICAgICAgICAgICB7Li4ubGF5ZXJDaGFubmVsQ29uZmlnUHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICB7Li4ubGF5ZXIudmlzQ29uZmlnU2V0dGluZ3MuZWxldmF0aW9uU2NhbGV9XG4gICAgICAgICAgICAgIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc31cbiAgICAgICAgICAgICAgbGFiZWw9XCJsYXllclZpc0NvbmZpZ3MuZWxldmF0aW9uU2NhbGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudD5cbiAgICAgICAgICAgICAgPFZpc0NvbmZpZ1NsaWRlclxuICAgICAgICAgICAgICAgIHsuLi5sYXllci52aXNDb25maWdTZXR0aW5ncy5oZWlnaHRSYW5nZX1cbiAgICAgICAgICAgICAgICB7Li4udmlzQ29uZmlndXJhdG9yUHJvcHN9XG4gICAgICAgICAgICAgICAgbGFiZWw9XCJsYXllclZpc0NvbmZpZ3MuaGVpZ2h0UmFuZ2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU3dpdGNoXG4gICAgICAgICAgICAgICAgey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLmVuYWJsZUVsZXZhdGlvblpvb21GYWN0b3J9XG4gICAgICAgICAgICAgICAgey4uLnZpc0NvbmZpZ3VyYXRvclByb3BzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8VmlzQ29uZmlnU3dpdGNoIHsuLi52aXNDb25maWd1cmF0b3JQcm9wc30gey4uLmxheWVyLnZpc0NvbmZpZ1NldHRpbmdzLndpcmVmcmFtZX0gLz5cbiAgICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgPC9MYXllckNvbmZpZ0dyb3VwPlxuICAgICAgICA8L1N0eWxlZExheWVyVmlzdWFsQ29uZmlndXJhdG9yPlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7bGF5ZXIsIGRhdGFzZXRzLCB1cGRhdGVMYXllckNvbmZpZywgbGF5ZXJUeXBlT3B0aW9ucywgdXBkYXRlTGF5ZXJUeXBlfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7ZmllbGRzID0gW10sIGZpZWxkUGFpcnMgPSB1bmRlZmluZWR9ID0gbGF5ZXIuY29uZmlnLmRhdGFJZFxuICAgICAgICA/IGRhdGFzZXRzW2xheWVyLmNvbmZpZy5kYXRhSWRdXG4gICAgICAgIDoge307XG4gICAgICBjb25zdCB7Y29uZmlnfSA9IGxheWVyO1xuXG4gICAgICBjb25zdCB2aXNDb25maWd1cmF0b3JQcm9wcyA9IGdldFZpc0NvbmZpZ3VyYXRvclByb3BzKHRoaXMucHJvcHMpO1xuICAgICAgY29uc3QgbGF5ZXJDb25maWd1cmF0b3JQcm9wcyA9IGdldExheWVyQ29uZmlndXJhdG9yUHJvcHModGhpcy5wcm9wcyk7XG4gICAgICBjb25zdCBsYXllckNoYW5uZWxDb25maWdQcm9wcyA9IGdldExheWVyQ2hhbm5lbENvbmZpZ1Byb3BzKHRoaXMucHJvcHMpO1xuICAgICAgY29uc3QgZGF0YXNldCA9IGdldExheWVyRGF0YXNldChkYXRhc2V0cywgbGF5ZXIpO1xuICAgICAgY29uc3QgcmVuZGVyVGVtcGxhdGUgPSBsYXllci50eXBlICYmIGBfcmVuZGVyJHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIobGF5ZXIudHlwZSl9TGF5ZXJDb25maWdgO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkTGF5ZXJDb25maWd1cmF0b3I+XG4gICAgICAgICAge2xheWVyLmxheWVySW5mb01vZGFsID8gKFxuICAgICAgICAgICAgPEhvd1RvQnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub3Blbk1vZGFsKGxheWVyLmxheWVySW5mb01vZGFsKX0gLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8TGF5ZXJDb25maWdHcm91cCBsYWJlbD17J2xheWVyLmJhc2ljJ30gY29sbGFwc2libGUgZXhwYW5kZWQ9eyFsYXllci5oYXNBbGxDb2x1bW5zKCl9PlxuICAgICAgICAgICAgPExheWVyVHlwZVNlbGVjdG9yXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXtsYXllci50eXBlfVxuICAgICAgICAgICAgICBvcHRpb25zPXtsYXllclR5cGVPcHRpb25zfVxuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIG9uU2VsZWN0PXt1cGRhdGVMYXllclR5cGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPENvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAgICA8U291cmNlRGF0YVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICAgIGlkPXtsYXllci5pZH1cbiAgICAgICAgICAgICAgICBkYXRhSWQ9e2NvbmZpZy5kYXRhSWR9XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsodmFsdWU6IHN0cmluZykgPT4gdXBkYXRlTGF5ZXJDb25maWcoe2RhdGFJZDogdmFsdWV9KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPExheWVyQ29sdW1uQ29uZmlnXG4gICAgICAgICAgICAgICAgY29sdW1uUGFpcnM9e2xheWVyLmNvbHVtblBhaXJzfVxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e2xheWVyLmNvbmZpZy5jb2x1bW5zfVxuICAgICAgICAgICAgICAgIGFzc2lnbkNvbHVtblBhaXJzPXtsYXllci5hc3NpZ25Db2x1bW5QYWlycy5iaW5kKGxheWVyKX1cbiAgICAgICAgICAgICAgICBhc3NpZ25Db2x1bW49e2xheWVyLmFzc2lnbkNvbHVtbi5iaW5kKGxheWVyKX1cbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgY29sdW1uTGFiZWxzPXtsYXllci5jb2x1bW5MYWJlbHN9XG4gICAgICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XG4gICAgICAgICAgICAgICAgZmllbGRQYWlycz17ZmllbGRQYWlyc31cbiAgICAgICAgICAgICAgICB1cGRhdGVMYXllckNvbmZpZz17dXBkYXRlTGF5ZXJDb25maWd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NvbmZpZ0dyb3VwQ29sbGFwc2libGVDb250ZW50PlxuICAgICAgICAgICAge2xheWVyLmVycm9yTWVzc2FnZSA/IDxMYXllckVycm9yTWVzc2FnZSBlcnJvck1lc3NhZ2U9e2xheWVyLmVycm9yTWVzc2FnZX0gLz4gOiBudWxsfVxuICAgICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICAgICB7cmVuZGVyVGVtcGxhdGUgJiZcbiAgICAgICAgICAgIHRoaXNbcmVuZGVyVGVtcGxhdGVdICYmXG4gICAgICAgICAgICB0aGlzW3JlbmRlclRlbXBsYXRlXSh7XG4gICAgICAgICAgICAgIGxheWVyLFxuICAgICAgICAgICAgICBkYXRhc2V0LFxuICAgICAgICAgICAgICB2aXNDb25maWd1cmF0b3JQcm9wcyxcbiAgICAgICAgICAgICAgbGF5ZXJDaGFubmVsQ29uZmlnUHJvcHMsXG4gICAgICAgICAgICAgIGxheWVyQ29uZmlndXJhdG9yUHJvcHNcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L1N0eWxlZExheWVyQ29uZmlndXJhdG9yPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gTGF5ZXJDb25maWd1cmF0b3I7XG59XG5cbmV4cG9ydCBjb25zdCBMYXllckNvbG9yU2VsZWN0b3IgPSAoe1xuICBsYXllcixcbiAgb25DaGFuZ2UsXG4gIHNlbGVjdGVkQ29sb3IsXG4gIHByb3BlcnR5ID0gJ2NvbG9yJyxcbiAgc2V0Q29sb3JVSVxufTogTGF5ZXJDb2xvclNlbGVjdG9yUHJvcHMpID0+IChcbiAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgPENvbG9yU2VsZWN0b3JcbiAgICAgIGNvbG9yU2V0cz17W1xuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWRDb2xvcjogc2VsZWN0ZWRDb2xvciB8fCBsYXllci5jb25maWcuY29sb3IsXG4gICAgICAgICAgc2V0Q29sb3I6IChyZ2JWYWx1ZTogUkdCQ29sb3IpID0+IG9uQ2hhbmdlKHtbcHJvcGVydHldOiByZ2JWYWx1ZX0pXG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgICBjb2xvclVJPXtsYXllci5jb25maWcuY29sb3JVSVtwcm9wZXJ0eV19XG4gICAgICBzZXRDb2xvclVJPXtuZXdDb25maWcgPT4gc2V0Q29sb3JVSShwcm9wZXJ0eSwgbmV3Q29uZmlnKX1cbiAgICAvPlxuICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4pO1xuXG5leHBvcnQgY29uc3QgQXJjTGF5ZXJDb2xvclNlbGVjdG9yID0gKHtcbiAgbGF5ZXIsXG4gIG9uQ2hhbmdlQ29uZmlnLFxuICBvbkNoYW5nZVZpc0NvbmZpZyxcbiAgcHJvcGVydHkgPSAnY29sb3InLFxuICBzZXRDb2xvclVJXG59OiBBcmNMYXllckNvbG9yU2VsZWN0b3JQcm9wcykgPT4gKFxuICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICA8Q29sb3JTZWxlY3RvclxuICAgICAgY29sb3JTZXRzPXtbXG4gICAgICAgIHtcbiAgICAgICAgICBzZWxlY3RlZENvbG9yOiBsYXllci5jb25maWcuY29sb3IsXG4gICAgICAgICAgc2V0Q29sb3I6IChyZ2JWYWx1ZTogUkdCQ29sb3IpID0+IG9uQ2hhbmdlQ29uZmlnKHtjb2xvcjogcmdiVmFsdWV9KSxcbiAgICAgICAgICBsYWJlbDogJ1NvdXJjZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkQ29sb3I6IGxheWVyLmNvbmZpZy52aXNDb25maWcudGFyZ2V0Q29sb3IgfHwgbGF5ZXIuY29uZmlnLmNvbG9yLFxuICAgICAgICAgIHNldENvbG9yOiAocmdiVmFsdWU6IFJHQkNvbG9yKSA9PiBvbkNoYW5nZVZpc0NvbmZpZyh7dGFyZ2V0Q29sb3I6IHJnYlZhbHVlfSksXG4gICAgICAgICAgbGFiZWw6ICdUYXJnZXQnXG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgICBjb2xvclVJPXtsYXllci5jb25maWcuY29sb3JVSVtwcm9wZXJ0eV19XG4gICAgICBzZXRDb2xvclVJPXtuZXdDb25maWcgPT4gc2V0Q29sb3JVSShwcm9wZXJ0eSwgbmV3Q29uZmlnKX1cbiAgICAvPlxuICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4pO1xuXG5leHBvcnQgY29uc3QgTGF5ZXJDb2xvclJhbmdlU2VsZWN0b3IgPSAoe1xuICBsYXllcixcbiAgb25DaGFuZ2UsXG4gIHByb3BlcnR5ID0gJ2NvbG9yUmFuZ2UnLFxuICBzZXRDb2xvclVJXG59OiBMYXllckNvbG9yUmFuZ2VTZWxlY3RvclByb3BzKSA9PiAoXG4gIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgIDxDb2xvclNlbGVjdG9yXG4gICAgICBjb2xvclNldHM9e1tcbiAgICAgICAge1xuICAgICAgICAgIHNlbGVjdGVkQ29sb3I6IGxheWVyLmNvbmZpZy52aXNDb25maWdbcHJvcGVydHldLFxuICAgICAgICAgIGlzUmFuZ2U6IHRydWUsXG4gICAgICAgICAgc2V0Q29sb3I6IChjb2xvclJhbmdlOiBDb2xvclJhbmdlKSA9PiBvbkNoYW5nZSh7W3Byb3BlcnR5XTogY29sb3JSYW5nZX0pXG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgICBjb2xvclVJPXtsYXllci5jb25maWcuY29sb3JVSVtwcm9wZXJ0eV19XG4gICAgICBzZXRDb2xvclVJPXtuZXdDb25maWcgPT4gc2V0Q29sb3JVSShwcm9wZXJ0eSwgbmV3Q29uZmlnKX1cbiAgICAvPlxuICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4pO1xuXG5DaGFubmVsQnlWYWx1ZVNlbGVjdG9yRmFjdG9yeS5kZXBzID0gW1Zpc0NvbmZpZ0J5RmllbGRTZWxlY3RvckZhY3RvcnldO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbm5lbEJ5VmFsdWVTZWxlY3RvckZhY3RvcnkoXG4gIFZpc0NvbmZpZ0J5RmllbGRTZWxlY3RvcjogUmV0dXJuVHlwZTx0eXBlb2YgVmlzQ29uZmlnQnlGaWVsZFNlbGVjdG9yRmFjdG9yeT5cbikge1xuICBjb25zdCBDaGFubmVsQnlWYWx1ZVNlbGVjdG9yID0gKHtcbiAgICBsYXllcixcbiAgICBjaGFubmVsLFxuICAgIG9uQ2hhbmdlLFxuICAgIGZpZWxkcyxcbiAgICBkZXNjcmlwdGlvblxuICB9OiBDaGFubmVsQnlWYWx1ZVNlbGVjdG9yUHJvcHMpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBjaGFubmVsU2NhbGVUeXBlLFxuICAgICAgZmllbGQsXG4gICAgICBrZXksXG4gICAgICBwcm9wZXJ0eSxcbiAgICAgIHNjYWxlLFxuICAgICAgZGVmYXVsdE1lYXN1cmUsXG4gICAgICBzdXBwb3J0ZWRGaWVsZFR5cGVzXG4gICAgfSA9IGNoYW5uZWw7XG4gICAgY29uc3QgY2hhbm5lbFN1cHBvcnRlZEZpZWxkVHlwZXMgPVxuICAgICAgc3VwcG9ydGVkRmllbGRUeXBlcyB8fCBDSEFOTkVMX1NDQUxFX1NVUFBPUlRFRF9GSUVMRFNbY2hhbm5lbFNjYWxlVHlwZV07XG4gICAgY29uc3Qgc3VwcG9ydGVkRmllbGRzID0gZmllbGRzLmZpbHRlcigoe3R5cGV9KSA9PiBjaGFubmVsU3VwcG9ydGVkRmllbGRUeXBlcy5pbmNsdWRlcyh0eXBlKSk7XG4gICAgY29uc3Qgc2NhbGVPcHRpb25zID0gbGF5ZXIuZ2V0U2NhbGVPcHRpb25zKGNoYW5uZWwua2V5KTtcbiAgICBjb25zdCBzaG93U2NhbGUgPSAhbGF5ZXIuaXNBZ2dyZWdhdGVkICYmIGxheWVyLmNvbmZpZ1tzY2FsZV0gJiYgc2NhbGVPcHRpb25zLmxlbmd0aCA+IDE7XG4gICAgY29uc3QgZGVmYXVsdERlc2NyaXB0aW9uID0gJ2xheWVyQ29uZmlndXJhdGlvbi5kZWZhdWx0RGVzY3JpcHRpb24nO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxWaXNDb25maWdCeUZpZWxkU2VsZWN0b3JcbiAgICAgICAgY2hhbm5lbD17Y2hhbm5lbC5rZXl9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbiB8fCBkZWZhdWx0RGVzY3JpcHRpb259XG4gICAgICAgIGZpZWxkcz17c3VwcG9ydGVkRmllbGRzfVxuICAgICAgICBpZD17bGF5ZXIuaWR9XG4gICAgICAgIGtleT17YCR7a2V5fS1jaGFubmVsLXNlbGVjdG9yYH1cbiAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICBwbGFjZWhvbGRlcj17ZGVmYXVsdE1lYXN1cmUgfHwgJ3BsYWNlaG9sZGVyLnNlbGVjdEZpZWxkJ31cbiAgICAgICAgc2NhbGVPcHRpb25zPXtzY2FsZU9wdGlvbnN9XG4gICAgICAgIHNjYWxlVHlwZT17c2NhbGUgPyBsYXllci5jb25maWdbc2NhbGVdIDogbnVsbH1cbiAgICAgICAgc2VsZWN0ZWRGaWVsZD17bGF5ZXIuY29uZmlnW2ZpZWxkXX1cbiAgICAgICAgc2hvd1NjYWxlPXtzaG93U2NhbGV9XG4gICAgICAgIHVwZGF0ZUZpZWxkPXt2YWwgPT4gb25DaGFuZ2Uoe1tmaWVsZF06IHZhbH0sIGtleSl9XG4gICAgICAgIHVwZGF0ZVNjYWxlPXt2YWwgPT4gb25DaGFuZ2Uoe1tzY2FsZV06IHZhbH0sIGtleSl9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIENoYW5uZWxCeVZhbHVlU2VsZWN0b3I7XG59XG5cbmV4cG9ydCBjb25zdCBBZ2dyZWdhdGlvblNjYWxlU2VsZWN0b3IgPSAoe2NoYW5uZWwsIGxheWVyLCBvbkNoYW5nZX06IEFnZ3JlZ2F0aW9uU2VsZWN0b3JQcm9wcykgPT4ge1xuICBjb25zdCB7c2NhbGUsIGtleX0gPSBjaGFubmVsO1xuICBjb25zdCBzY2FsZU9wdGlvbnMgPSBsYXllci5nZXRTY2FsZU9wdGlvbnMoa2V5KTtcblxuICByZXR1cm4gQXJyYXkuaXNBcnJheShzY2FsZU9wdGlvbnMpICYmIHNjYWxlT3B0aW9ucy5sZW5ndGggPiAxID8gKFxuICAgIDxEaW1lbnNpb25TY2FsZVNlbGVjdG9yXG4gICAgICBsYWJlbD17YCR7a2V5fSBTY2FsZWB9XG4gICAgICBvcHRpb25zPXtzY2FsZU9wdGlvbnN9XG4gICAgICBzY2FsZVR5cGU9e2xheWVyLmNvbmZpZ1tzY2FsZV19XG4gICAgICBvblNlbGVjdD17dmFsID0+IG9uQ2hhbmdlKHtbc2NhbGVdOiB2YWx9LCBrZXkpfVxuICAgIC8+XG4gICkgOiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IEFnZ3JlZ2F0aW9uVHlwZVNlbGVjdG9yID0gKHtjaGFubmVsLCBsYXllciwgb25DaGFuZ2V9OiBBZ2dyZWdhdGlvblNlbGVjdG9yUHJvcHMpID0+IHtcbiAgY29uc3Qge2ZpZWxkLCBhZ2dyZWdhdGlvbiwga2V5fSA9IGNoYW5uZWw7XG4gIGNvbnN0IHNlbGVjdGVkRmllbGQgPSBsYXllci5jb25maWdbZmllbGRdO1xuICBjb25zdCB7dmlzQ29uZmlnfSA9IGxheWVyLmNvbmZpZztcblxuICAvLyBhZ2dyZWdhdGlvbiBzaG91bGQgb25seSBiZSBzZWxlY3RhYmxlIHdoZW4gZmllbGQgaXMgc2VsZWN0ZWRcbiAgY29uc3QgYWdncmVnYXRpb25PcHRpb25zID0gbGF5ZXIuZ2V0QWdncmVnYXRpb25PcHRpb25zKGtleSk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgIDxQYW5lbExhYmVsPlxuICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J2xheWVyLmFnZ3JlZ2F0ZUJ5J30gdmFsdWVzPXt7ZmllbGQ6IHNlbGVjdGVkRmllbGQubmFtZX19IC8+XG4gICAgICA8L1BhbmVsTGFiZWw+XG4gICAgICA8SXRlbVNlbGVjdG9yXG4gICAgICAgIHNlbGVjdGVkSXRlbXM9e3Zpc0NvbmZpZ1thZ2dyZWdhdGlvbiBhcyBzdHJpbmddfVxuICAgICAgICBvcHRpb25zPXthZ2dyZWdhdGlvbk9wdGlvbnN9XG4gICAgICAgIG11bHRpU2VsZWN0PXtmYWxzZX1cbiAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PlxuICAgICAgICAgIG9uQ2hhbmdlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2aXNDb25maWc6IHtcbiAgICAgICAgICAgICAgICAuLi5sYXllci5jb25maWcudmlzQ29uZmlnLFxuICAgICAgICAgICAgICAgIFthZ2dyZWdhdGlvbiBhcyBzdHJpbmddOiB2YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hhbm5lbC5rZXlcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICApO1xufTtcbi8qIGVzbGludC1lbmFibGUgbWF4LXBhcmFtcyAqL1xuIl19