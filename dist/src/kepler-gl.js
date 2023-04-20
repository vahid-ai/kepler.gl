"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVisibleDatasets = getVisibleDatasets;
exports.mapStateToProps = mapStateToProps;
exports["default"] = exports.DEFAULT_KEPLER_GL_PROPS = exports.notificationPanelSelector = exports.geoCoderPanelSelector = exports.modalContainerSelector = exports.bottomWidgetSelector = exports.isSplitSelector = exports.plotContainerSelector = exports.sidePanelSelector = exports.mapFieldsSelector = exports.mapStateSelector = exports.isViewportDisjointed = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _console = _interopRequireDefault(require("global/console"));

var _redux = require("redux");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reselect = require("reselect");

var _keplerglConnect = require("./connect/keplergl-connect");

var _reactIntl = require("react-intl");

var _localization = require("@kepler.gl/localization");

var _context = require("./context");

var _core = require("@dnd-kit/core");

var _actions = require("@kepler.gl/actions");

var _constants = require("@kepler.gl/constants");

var _dndLayerItems = require("./dnd-layer-items");

var _sidePanel = _interopRequireDefault(require("./side-panel"));

var _mapContainer2 = _interopRequireDefault(require("./map-container"));

var _mapsLayout = _interopRequireDefault(require("./maps-layout"));

var _bottomWidget = _interopRequireDefault(require("./bottom-widget"));

var _modalContainer = _interopRequireDefault(require("./modal-container"));

var _plotContainer = _interopRequireDefault(require("./plot-container"));

var _notificationPanel = _interopRequireDefault(require("./notification-panel"));

var _geocoderPanel = _interopRequireDefault(require("./geocoder-panel"));

var _layerPanelHeader = _interopRequireDefault(require("./side-panel/layer-panel/layer-panel-header"));

var _utils = require("@kepler.gl/utils");

var _styles = require("@kepler.gl/styles");

var _templateObject;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Maybe we should think about exporting this or creating a variable
// as part of the base.js theme
var GlobalStyle = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  line-height: ", ";\n\n  *,\n  *:before,\n  *:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    margin: 0;\n  }\n\n  a {\n    text-decoration: none;\n    color: ", ";\n  }\n\n  .mapboxgl-ctrl .mapboxgl-ctrl-logo {\n    display: none;\n  }\n"])), function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.fontWeight;
}, function (props) {
  return props.theme.fontSize;
}, function (props) {
  return props.theme.lineHeight;
}, function (props) {
  return props.theme.labelColor;
});

var BottomWidgetOuter = _styledComponents["default"].div(function (_ref) {
  var absolute = _ref.absolute;
  return "\n  ".concat(absolute ? 'position: absolute; bottom: 0; right: 0;' : '', "\n  pointer-events: none; /* prevent padding from blocking input */\n  & > * {\n    /* all children should allow input */\n    pointer-events: all;\n  }");
});

var nop = function nop() {
  return;
};

var isViewportDisjointed = function isViewportDisjointed(props) {
  return props.mapState.isSplit && !props.mapState.isViewportSynced && props.mapState.splitMapViewports.length > 1;
};

exports.isViewportDisjointed = isViewportDisjointed;

var mapStateSelector = function mapStateSelector(props, index) {
  if (!Number.isFinite(index)) {
    // either no index arg or an invalid index was provided
    // it is expected to be either 0 or 1 when in split mode
    // only use the mapState
    return props.mapState;
  }

  return isViewportDisjointed(props) ? // mix together the viewport properties intended for this disjointed <MapContainer> with the other necessary mapState properties
  _objectSpread(_objectSpread({}, props.mapState), props.mapState.splitMapViewports[index]) : // otherwise only use the mapState
  props.mapState;
};

exports.mapStateSelector = mapStateSelector;

var mapFieldsSelector = function mapFieldsSelector(props) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return {
    getMapboxRef: props.getMapboxRef,
    mapboxApiAccessToken: props.mapboxApiAccessToken,
    mapboxApiUrl: props.mapboxApiUrl ? props.mapboxApiUrl : DEFAULT_KEPLER_GL_PROPS.mapboxApiUrl,
    mapState: mapStateSelector(props, index),
    mapStyle: props.mapStyle,
    onDeckInitialized: props.onDeckInitialized,
    onViewStateChange: props.onViewStateChange,
    deckGlProps: props.deckGlProps,
    uiStateActions: props.uiStateActions,
    visStateActions: props.visStateActions,
    mapStateActions: props.mapStateActions,
    // visState
    visState: props.visState,
    // uiState
    activeSidePanel: props.uiState.activeSidePanel,
    mapControls: props.uiState.mapControls,
    readOnly: props.uiState.readOnly,
    locale: props.uiState.locale,
    // mapStyle
    topMapContainerProps: props.topMapContainerProps,
    bottomMapContainerProps: props.bottomMapContainerProps
  };
};

exports.mapFieldsSelector = mapFieldsSelector;

function getVisibleDatasets(datasets) {
  // We don't want Geocoder dataset to be present in SidePanel dataset list
  return (0, _utils.filterObjectByPredicate)(datasets, function (key, value) {
    return key !== _constants.GEOCODER_DATASET_NAME;
  });
}

var sidePanelSelector = function sidePanelSelector(props, availableProviders, filteredDatasets) {
  return {
    appName: props.appName ? props.appName : DEFAULT_KEPLER_GL_PROPS.appName,
    version: props.version ? props.version : DEFAULT_KEPLER_GL_PROPS.version,
    appWebsite: props.appWebsite,
    mapStyle: props.mapStyle,
    onSaveMap: props.onSaveMap,
    uiState: props.uiState,
    mapStyleActions: props.mapStyleActions,
    visStateActions: props.visStateActions,
    uiStateActions: props.uiStateActions,
    mapStateActions: props.mapStateActions,
    datasets: filteredDatasets,
    filters: props.visState.filters,
    layers: props.visState.layers,
    layerOrder: props.visState.layerOrder,
    layerClasses: props.visState.layerClasses,
    interactionConfig: props.visState.interactionConfig,
    mapInfo: props.visState.mapInfo,
    layerBlending: props.visState.layerBlending,
    overlayBlending: props.visState.overlayBlending,
    width: props.sidePanelWidth ? props.sidePanelWidth : DEFAULT_KEPLER_GL_PROPS.width,
    availableProviders: availableProviders,
    mapSaved: props.providerState.mapSaved
  };
};

exports.sidePanelSelector = sidePanelSelector;

var plotContainerSelector = function plotContainerSelector(props) {
  return {
    width: props.width,
    height: props.height,
    exportImageSetting: props.uiState.exportImage,
    mapFields: mapFieldsSelector(props),
    addNotification: props.uiStateActions.addNotification,
    setExportImageSetting: props.uiStateActions.setExportImageSetting,
    setExportImageDataUri: props.uiStateActions.setExportImageDataUri,
    setExportImageError: props.uiStateActions.setExportImageError,
    splitMaps: props.visState.splitMaps
  };
};

exports.plotContainerSelector = plotContainerSelector;

var isSplitSelector = function isSplitSelector(props) {
  return props.visState.splitMaps && props.visState.splitMaps.length > 1;
};

exports.isSplitSelector = isSplitSelector;

var bottomWidgetSelector = function bottomWidgetSelector(props, theme) {
  return {
    filters: props.visState.filters,
    datasets: props.visState.datasets,
    uiState: props.uiState,
    layers: props.visState.layers,
    animationConfig: props.visState.animationConfig,
    visStateActions: props.visStateActions,
    toggleModal: props.uiStateActions.toggleModal,
    sidePanelWidth: props.uiState.readOnly ? 0 : props.sidePanelWidth + theme.sidePanel.margin.left
  };
};

exports.bottomWidgetSelector = bottomWidgetSelector;

var modalContainerSelector = function modalContainerSelector(props, rootNode) {
  return {
    appName: props.appName ? props.appName : DEFAULT_KEPLER_GL_PROPS.appName,
    mapStyle: props.mapStyle,
    visState: props.visState,
    mapState: props.mapState,
    uiState: props.uiState,
    providerState: props.providerState,
    mapboxApiAccessToken: props.mapboxApiAccessToken,
    mapboxApiUrl: props.mapboxApiUrl,
    visStateActions: props.visStateActions,
    uiStateActions: props.uiStateActions,
    mapStyleActions: props.mapStyleActions,
    providerActions: props.providerActions,
    rootNode: rootNode,
    // User defined cloud provider props
    cloudProviders: props.cloudProviders ? props.cloudProviders : DEFAULT_KEPLER_GL_PROPS.cloudProviders,
    onExportToCloudSuccess: props.onExportToCloudSuccess,
    onLoadCloudMapSuccess: props.onLoadCloudMapSuccess,
    onLoadCloudMapError: props.onLoadCloudMapError,
    onExportToCloudError: props.onExportToCloudError
  };
};

exports.modalContainerSelector = modalContainerSelector;

var geoCoderPanelSelector = function geoCoderPanelSelector(props, dimensions) {
  return {
    isGeocoderEnabled: props.visState.interactionConfig.geocoder.enabled,
    mapboxApiAccessToken: props.mapboxApiAccessToken,
    mapState: props.mapState,
    uiState: props.uiState,
    updateVisData: props.visStateActions.updateVisData,
    removeDataset: props.visStateActions.removeDataset,
    updateMap: props.mapStateActions.updateMap,
    appWidth: dimensions.width
  };
};

exports.geoCoderPanelSelector = geoCoderPanelSelector;

var notificationPanelSelector = function notificationPanelSelector(props) {
  return {
    removeNotification: props.uiStateActions.removeNotification,
    notifications: props.uiState.notifications
  };
};

exports.notificationPanelSelector = notificationPanelSelector;
var DEFAULT_KEPLER_GL_PROPS = {
  mapStyles: [],
  mapStylesReplaceDefault: false,
  mapboxApiUrl: _constants.DEFAULT_MAPBOX_API_URL,
  width: 800,
  height: 800,
  appName: _constants.KEPLER_GL_NAME,
  version: _constants.KEPLER_GL_VERSION,
  sidePanelWidth: _constants.DIMENSIONS.sidePanel.width,
  theme: {},
  cloudProviders: [],
  readOnly: false,
  featureFlags: {}
};
exports.DEFAULT_KEPLER_GL_PROPS = DEFAULT_KEPLER_GL_PROPS;
KeplerGlFactory.deps = [_bottomWidget["default"], _geocoderPanel["default"], _mapContainer2["default"], _mapsLayout["default"], _modalContainer["default"], _sidePanel["default"], _plotContainer["default"], _notificationPanel["default"], _layerPanelHeader["default"]];

function KeplerGlFactory(BottomWidget, GeoCoderPanel, MapContainer, MapsLayout, ModalContainer, SidePanel, PlotContainer, NotificationPanel, LayerPanelHeader) {
  /** @typedef {import('./kepler-gl').UnconnectedKeplerGlProps} KeplerGlProps */

  /** @augments React.Component<KeplerGlProps> */
  var KeplerGL = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(KeplerGL, _Component);

    var _super = _createSuper(KeplerGL);

    function KeplerGL() {
      var _this;

      (0, _classCallCheck2["default"])(this, KeplerGL);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        dimensions: null,
        activeLayer: undefined,
        isDragging: null,
        dndItems: {
          sortablelist: [],
          0: [],
          1: []
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleResize", function (dimensions) {
        _this.setState({
          dimensions: dimensions
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "root", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "bottomWidgetRef", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "themeSelector", function (props) {
        return props.theme;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "availableThemeSelector", (0, _reselect.createSelector)(_this.themeSelector, function (theme) {
        return (0, _typeof2["default"])(theme) === 'object' ? _objectSpread(_objectSpread({}, _styles.theme), theme) : theme === _constants.THEME.light ? _styles.themeLT : theme === _constants.THEME.base ? _styles.themeBS : theme;
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "datasetsSelector", function (props) {
        return props.visState.datasets;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filteredDatasetsSelector", (0, _reselect.createSelector)(_this.datasetsSelector, getVisibleDatasets));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "availableProviders", (0, _reselect.createSelector)(function (props) {
        return props.cloudProviders;
      }, function (providers) {
        return Array.isArray(providers) && providers.length ? {
          hasStorage: providers.some(function (p) {
            return p.hasPrivateStorage();
          }),
          hasShare: providers.some(function (p) {
            return p.hasSharingUrl();
          })
        } : {};
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "localeMessagesSelector", (0, _reselect.createSelector)(function (props) {
        return props.localeMessages;
      }, function (customMessages) {
        return customMessages ? (0, _utils.mergeMessages)(_localization.messages, customMessages) : _localization.messages;
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_loadMapStyle", function () {
        var defaultStyles = Object.values(_this.props.mapStyle.mapStyles); // add id to custom map styles if not given

        var customStyles = (_this.props.mapStyles || []).map(function (ms) {
          return _objectSpread(_objectSpread({}, ms), {}, {
            id: ms.id || (0, _utils.generateHashId)()
          });
        });
        var allStyles = [].concat((0, _toConsumableArray2["default"])(customStyles), (0, _toConsumableArray2["default"])(defaultStyles)).reduce(function (accu, style) {
          accu[style.id] = style;
          return accu;
        }, {});

        _this.props.mapStyleActions.loadMapStyles(allStyles);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateDndItems", function () {
        // update dndItems when layerOrder or layers change
        _this.setState(function (state, props) {
          var _props$visState = props.visState,
              layers = _props$visState.layers,
              layerOrder = _props$visState.layerOrder;
          return {
            dndItems: _objectSpread(_objectSpread({}, state.dndItems), {}, {
              sortablelist: layerOrder.map(function (layerIdx) {
                return layers[layerIdx].id;
              })
            })
          };
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_deleteMapLabels", function (containerId, layerId) {
        // delete dnditems in map panel
        _this.props.visStateActions.toggleLayerForMap(containerId, layerId);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleDragStart", function (_ref2) {
        var active = _ref2.active;
        var _this$props = _this.props,
            layers = _this$props.visState.layers,
            visStateActions = _this$props.visStateActions;
        var activeLayer = layers.find(function (layer) {
          return layer.id === active.id;
        });

        _this.setState({
          activeLayer: activeLayer
        });

        if (activeLayer !== null && activeLayer !== void 0 && activeLayer.config.isConfigActive) {
          visStateActions.layerConfigChange(activeLayer, {
            isConfigActive: false
          });
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleDragEnd", function (_ref3) {
        var active = _ref3.active,
            over = _ref3.over;
        var _this$props2 = _this.props,
            _this$props2$visState = _this$props2.visState,
            layerOrder = _this$props2$visState.layerOrder,
            splitMaps = _this$props2$visState.splitMaps,
            visStateActions = _this$props2.visStateActions;
        var dndItems = _this.state.dndItems;

        if (!dndItems) {
          return;
        }

        var activeLayerId = active.id;
        var overId = over === null || over === void 0 ? void 0 : over.id; // isSplit ? overContainerId : overLayerId

        var activeContainer = (0, _dndLayerItems.findDndContainerId)(activeLayerId, dndItems);
        var overContainer = (0, _dndLayerItems.findDndContainerId)(overId, dndItems);

        if (!activeContainer || !overContainer) {
          return;
        }

        if (activeContainer === overContainer) {
          // drag and drop in the same container: Sortablelist
          // this sort action may happen in any modes, regardless of isSplit
          visStateActions.reorderLayer((0, _dndLayerItems.getLayerOrderOnSort)(layerOrder, dndItems[activeContainer], activeLayerId, overId));
        } else if (!splitMaps[overContainer].layers[activeLayerId]) {
          // drag and drop in different containers: Sortablelist -> MapContainer
          visStateActions.toggleLayerForMap(overContainer, activeLayerId);
        }

        _this.setState({
          activeLayer: undefined
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(KeplerGL, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._validateMapboxToken();

        this._loadMapStyle();

        this._updateDndItems();

        if (typeof this.props.onKeplerGlInitialized === 'function') {
          this.props.onKeplerGlInitialized();
        }

        if (this.root.current instanceof HTMLElement) {
          (0, _utils.observeDimensions)(this.root.current, this._handleResize);
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (this.props.visState.layerOrder !== prevProps.visState.layerOrder || this.props.visState.layers !== prevProps.visState.layers) {
          this._updateDndItems();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.root.current instanceof HTMLElement) {
          (0, _utils.unobserveDimensions)(this.root.current);
        }
      }
    }, {
      key: "_validateMapboxToken",
      value:
      /* private methods */
      function _validateMapboxToken() {
        var mapboxApiAccessToken = this.props.mapboxApiAccessToken;

        if (!(0, _utils.validateToken)(mapboxApiAccessToken)) {
          _console["default"].warn(_constants.MISSING_MAPBOX_TOKEN);
        }
      }
    }, {
      key: "render",
      value: // eslint-disable-next-line complexity
      function render() {
        var _this2 = this;

        var _this$props3 = this.props,
            _this$props3$id = _this$props3.id,
            id = _this$props3$id === void 0 ? 'map' : _this$props3$id,
            _this$props3$width = _this$props3.width,
            width = _this$props3$width === void 0 ? DEFAULT_KEPLER_GL_PROPS.width : _this$props3$width,
            _this$props3$height = _this$props3.height,
            height = _this$props3$height === void 0 ? DEFAULT_KEPLER_GL_PROPS.height : _this$props3$height,
            uiState = _this$props3.uiState,
            visState = _this$props3.visState,
            readOnly = _this$props3.readOnly,
            featureFlags = _this$props3.featureFlags;
        var dimensions = this.state.dimensions || {
          width: width,
          height: height
        };
        var activeLayer = this.state.activeLayer;
        var splitMaps = visState.splitMaps,
            interactionConfig = visState.interactionConfig,
            datasets = visState.datasets;
        var isSplit = isSplitSelector(this.props);
        var theme = this.availableThemeSelector(this.props);
        var localeMessages = this.localeMessagesSelector(this.props);
        var isExportingImage = uiState.exportImage.exporting;
        var availableProviders = this.availableProviders(this.props);
        var filteredDatasets = this.filteredDatasetsSelector(this.props);
        var sideFields = sidePanelSelector(this.props, availableProviders, filteredDatasets);
        var plotContainerFields = plotContainerSelector(this.props);
        var bottomWidgetFields = bottomWidgetSelector(this.props, theme);
        var modalContainerFields = modalContainerSelector(this.props, this.root.current);
        var geoCoderPanelFields = geoCoderPanelSelector(this.props, dimensions);
        var notificationPanelFields = notificationPanelSelector(this.props);
        var mapContainers = !isSplit ? [/*#__PURE__*/_react["default"].createElement(MapContainer, (0, _extends2["default"])({
          primary: true,
          key: 0,
          index: 0
        }, mapFieldsSelector(this.props), {
          containerId: 0,
          deleteMapLabels: this._deleteMapLabels
        }))] : splitMaps.map(function (settings, index) {
          return /*#__PURE__*/_react["default"].createElement(MapContainer, (0, _extends2["default"])({
            key: index,
            index: index,
            primary: index === 1
          }, mapFieldsSelector(_this2.props, index), {
            containerId: index,
            deleteMapLabels: _this2._deleteMapLabels
          }));
        });
        return /*#__PURE__*/_react["default"].createElement(_context.RootContext.Provider, {
          value: this.root
        }, /*#__PURE__*/_react["default"].createElement(_context.FeatureFlagsContextProvider, {
          featureFlags: featureFlags
        }, /*#__PURE__*/_react["default"].createElement(_reactIntl.IntlProvider, {
          locale: uiState.locale,
          messages: localeMessages[uiState.locale]
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
          theme: theme
        }, /*#__PURE__*/_react["default"].createElement(GlobalStyle, {
          className: "kepler-gl",
          id: "kepler-gl__".concat(id),
          style: {
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            width: "".concat(width, "px"),
            height: "".concat(height, "px")
          },
          ref: this.root
        }, /*#__PURE__*/_react["default"].createElement(NotificationPanel, notificationPanelFields), /*#__PURE__*/_react["default"].createElement(_core.DndContext, {
          onDragStart: this._handleDragStart,
          onDragEnd: this._handleDragEnd,
          modifiers: !isSplit ? _dndLayerItems.DND_MODIFIERS : _dndLayerItems.DND_EMPTY_MODIFIERS
        }, !uiState.readOnly && !readOnly && /*#__PURE__*/_react["default"].createElement(SidePanel, sideFields), /*#__PURE__*/_react["default"].createElement(MapsLayout, {
          className: "maps"
        }, mapContainers), isSplit && /*#__PURE__*/_react["default"].createElement(_core.DragOverlay, {
          modifiers: _dndLayerItems.DRAGOVERLAY_MODIFIERS,
          dropAnimation: null
        }, activeLayer !== undefined ? /*#__PURE__*/_react["default"].createElement(_dndLayerItems.DragItem, null, /*#__PURE__*/_react["default"].createElement(LayerPanelHeader, {
          isConfigActive: false,
          layerId: activeLayer.id,
          isVisible: true,
          isValid: true,
          label: activeLayer.config.label,
          labelRCGColorValues: activeLayer.config.dataId ? datasets[activeLayer.config.dataId].color : null,
          onToggleVisibility: nop,
          onResetIsValid: nop,
          onUpdateLayerLabel: nop,
          onToggleEnableConfig: nop,
          onDuplicateLayer: nop,
          onRemoveLayer: nop,
          layerType: activeLayer.type,
          allowDuplicate: false,
          isDragNDropEnabled: false
        })) : null)), isExportingImage && /*#__PURE__*/_react["default"].createElement(PlotContainer, plotContainerFields), !isViewportDisjointed(this.props) && interactionConfig.geocoder.enabled && /*#__PURE__*/_react["default"].createElement(GeoCoderPanel, (0, _extends2["default"])({}, geoCoderPanelFields, {
          index: 0,
          unsyncedViewports: false
        })), isViewportDisjointed(this.props) && interactionConfig.geocoder.enabled && mapContainers.map(function (_mapContainer, index) {
          return /*#__PURE__*/_react["default"].createElement(GeoCoderPanel, (0, _extends2["default"])({
            key: index
          }, geoCoderPanelFields, {
            index: index,
            unsyncedViewports: true
          }));
        }), /*#__PURE__*/_react["default"].createElement(BottomWidgetOuter, {
          absolute: !(0, _utils.hasPortableWidth)(_styles.breakPointValues)
        }, /*#__PURE__*/_react["default"].createElement(BottomWidget, (0, _extends2["default"])({
          rootRef: this.bottomWidgetRef
        }, bottomWidgetFields, {
          containerW: dimensions.width,
          theme: theme
        }))), /*#__PURE__*/_react["default"].createElement(ModalContainer, (0, _extends2["default"])({}, modalContainerFields, {
          containerW: dimensions.width,
          containerH: dimensions.height
        })))))));
      }
    }]);
    return KeplerGL;
  }(_react.Component);

  (0, _defineProperty2["default"])(KeplerGL, "defaultProps", DEFAULT_KEPLER_GL_PROPS);
  (0, _defineProperty2["default"])(KeplerGL, "contextType", _context.RootContext);
  return (0, _keplerglConnect.connect)(mapStateToProps, makeMapDispatchToProps)((0, _styledComponents.withTheme)(KeplerGL));
}

function mapStateToProps(state, props) {
  return _objectSpread(_objectSpread({}, props), {}, {
    visState: state.visState,
    mapStyle: state.mapStyle,
    mapState: state.mapState,
    uiState: state.uiState,
    providerState: state.providerState
  });
}

var defaultUserActions = {};

var getDispatch = function getDispatch(dispatch, props) {
  return dispatch;
};

var getUserActions = function getUserActions(dispatch, props) {
  return props.actions || defaultUserActions;
};
/** @type {() => import('reselect').OutputParametricSelector<any, any, any, any>} */


function makeGetActionCreators() {
  return (0, _reselect.createSelector)([getDispatch, getUserActions], function (dispatch, userActions) {
    var _map = [_actions.VisStateActions, _actions.MapStateActions, _actions.MapStyleActions, _actions.UIStateActions, _actions.ProviderActions].map(function (actions) {
      return (0, _redux.bindActionCreators)(mergeActions(actions, userActions), dispatch);
    }),
        _map2 = (0, _slicedToArray2["default"])(_map, 5),
        visStateActions = _map2[0],
        mapStateActions = _map2[1],
        mapStyleActions = _map2[2],
        uiStateActions = _map2[3],
        providerActions = _map2[4];

    return {
      visStateActions: visStateActions,
      mapStateActions: mapStateActions,
      mapStyleActions: mapStyleActions,
      uiStateActions: uiStateActions,
      providerActions: providerActions,
      dispatch: dispatch
    };
  });
}

function makeMapDispatchToProps() {
  var getActionCreators = makeGetActionCreators();

  var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    var groupedActionCreators = getActionCreators(dispatch, ownProps);
    return _objectSpread(_objectSpread({}, groupedActionCreators), {}, {
      dispatch: dispatch
    });
  };

  return mapDispatchToProps;
}
/**
 * Override default kepler.gl actions with user defined actions using the same key
 */


function mergeActions(actions, userActions) {
  var overrides = {};

  for (var _key2 in userActions) {
    if (userActions.hasOwnProperty(_key2) && actions.hasOwnProperty(_key2)) {
      overrides[_key2] = userActions[_key2];
    }
  }

  return _objectSpread(_objectSpread({}, actions), overrides);
}

var _default = KeplerGlFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9rZXBsZXItZ2wudHN4Il0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwibGFiZWxDb2xvciIsIkJvdHRvbVdpZGdldE91dGVyIiwiYWJzb2x1dGUiLCJub3AiLCJpc1ZpZXdwb3J0RGlzam9pbnRlZCIsIm1hcFN0YXRlIiwiaXNTcGxpdCIsImlzVmlld3BvcnRTeW5jZWQiLCJzcGxpdE1hcFZpZXdwb3J0cyIsImxlbmd0aCIsIm1hcFN0YXRlU2VsZWN0b3IiLCJpbmRleCIsIk51bWJlciIsImlzRmluaXRlIiwibWFwRmllbGRzU2VsZWN0b3IiLCJnZXRNYXBib3hSZWYiLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsIm1hcGJveEFwaVVybCIsIkRFRkFVTFRfS0VQTEVSX0dMX1BST1BTIiwibWFwU3R5bGUiLCJvbkRlY2tJbml0aWFsaXplZCIsIm9uVmlld1N0YXRlQ2hhbmdlIiwiZGVja0dsUHJvcHMiLCJ1aVN0YXRlQWN0aW9ucyIsInZpc1N0YXRlQWN0aW9ucyIsIm1hcFN0YXRlQWN0aW9ucyIsInZpc1N0YXRlIiwiYWN0aXZlU2lkZVBhbmVsIiwidWlTdGF0ZSIsIm1hcENvbnRyb2xzIiwicmVhZE9ubHkiLCJsb2NhbGUiLCJ0b3BNYXBDb250YWluZXJQcm9wcyIsImJvdHRvbU1hcENvbnRhaW5lclByb3BzIiwiZ2V0VmlzaWJsZURhdGFzZXRzIiwiZGF0YXNldHMiLCJrZXkiLCJ2YWx1ZSIsIkdFT0NPREVSX0RBVEFTRVRfTkFNRSIsInNpZGVQYW5lbFNlbGVjdG9yIiwiYXZhaWxhYmxlUHJvdmlkZXJzIiwiZmlsdGVyZWREYXRhc2V0cyIsImFwcE5hbWUiLCJ2ZXJzaW9uIiwiYXBwV2Vic2l0ZSIsIm9uU2F2ZU1hcCIsIm1hcFN0eWxlQWN0aW9ucyIsImZpbHRlcnMiLCJsYXllcnMiLCJsYXllck9yZGVyIiwibGF5ZXJDbGFzc2VzIiwiaW50ZXJhY3Rpb25Db25maWciLCJtYXBJbmZvIiwibGF5ZXJCbGVuZGluZyIsIm92ZXJsYXlCbGVuZGluZyIsIndpZHRoIiwic2lkZVBhbmVsV2lkdGgiLCJtYXBTYXZlZCIsInByb3ZpZGVyU3RhdGUiLCJwbG90Q29udGFpbmVyU2VsZWN0b3IiLCJoZWlnaHQiLCJleHBvcnRJbWFnZVNldHRpbmciLCJleHBvcnRJbWFnZSIsIm1hcEZpZWxkcyIsImFkZE5vdGlmaWNhdGlvbiIsInNldEV4cG9ydEltYWdlU2V0dGluZyIsInNldEV4cG9ydEltYWdlRGF0YVVyaSIsInNldEV4cG9ydEltYWdlRXJyb3IiLCJzcGxpdE1hcHMiLCJpc1NwbGl0U2VsZWN0b3IiLCJib3R0b21XaWRnZXRTZWxlY3RvciIsImFuaW1hdGlvbkNvbmZpZyIsInRvZ2dsZU1vZGFsIiwic2lkZVBhbmVsIiwibWFyZ2luIiwibGVmdCIsIm1vZGFsQ29udGFpbmVyU2VsZWN0b3IiLCJyb290Tm9kZSIsInByb3ZpZGVyQWN0aW9ucyIsImNsb3VkUHJvdmlkZXJzIiwib25FeHBvcnRUb0Nsb3VkU3VjY2VzcyIsIm9uTG9hZENsb3VkTWFwU3VjY2VzcyIsIm9uTG9hZENsb3VkTWFwRXJyb3IiLCJvbkV4cG9ydFRvQ2xvdWRFcnJvciIsImdlb0NvZGVyUGFuZWxTZWxlY3RvciIsImRpbWVuc2lvbnMiLCJpc0dlb2NvZGVyRW5hYmxlZCIsImdlb2NvZGVyIiwiZW5hYmxlZCIsInVwZGF0ZVZpc0RhdGEiLCJyZW1vdmVEYXRhc2V0IiwidXBkYXRlTWFwIiwiYXBwV2lkdGgiLCJub3RpZmljYXRpb25QYW5lbFNlbGVjdG9yIiwicmVtb3ZlTm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9ucyIsIm1hcFN0eWxlcyIsIm1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0IiwiREVGQVVMVF9NQVBCT1hfQVBJX1VSTCIsIktFUExFUl9HTF9OQU1FIiwiS0VQTEVSX0dMX1ZFUlNJT04iLCJESU1FTlNJT05TIiwiZmVhdHVyZUZsYWdzIiwiS2VwbGVyR2xGYWN0b3J5IiwiZGVwcyIsIkJvdHRvbVdpZGdldEZhY3RvcnkiLCJHZW9Db2RlclBhbmVsRmFjdG9yeSIsIk1hcENvbnRhaW5lckZhY3RvcnkiLCJNYXBzTGF5b3V0RmFjdG9yeSIsIk1vZGFsQ29udGFpbmVyRmFjdG9yeSIsIlNpZGVQYW5lbEZhY3RvcnkiLCJQbG90Q29udGFpbmVyRmFjdG9yeSIsIk5vdGlmaWNhdGlvblBhbmVsRmFjdG9yeSIsIkxheWVyUGFuZWxIZWFkZXJGYWN0b3J5IiwiQm90dG9tV2lkZ2V0IiwiR2VvQ29kZXJQYW5lbCIsIk1hcENvbnRhaW5lciIsIk1hcHNMYXlvdXQiLCJNb2RhbENvbnRhaW5lciIsIlNpZGVQYW5lbCIsIlBsb3RDb250YWluZXIiLCJOb3RpZmljYXRpb25QYW5lbCIsIkxheWVyUGFuZWxIZWFkZXIiLCJLZXBsZXJHTCIsImFjdGl2ZUxheWVyIiwidW5kZWZpbmVkIiwiaXNEcmFnZ2luZyIsImRuZEl0ZW1zIiwic29ydGFibGVsaXN0Iiwic2V0U3RhdGUiLCJ0aGVtZVNlbGVjdG9yIiwiYmFzaWNUaGVtZSIsIlRIRU1FIiwibGlnaHQiLCJ0aGVtZUxUIiwiYmFzZSIsInRoZW1lQlMiLCJkYXRhc2V0c1NlbGVjdG9yIiwicHJvdmlkZXJzIiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzU3RvcmFnZSIsInNvbWUiLCJwIiwiaGFzUHJpdmF0ZVN0b3JhZ2UiLCJoYXNTaGFyZSIsImhhc1NoYXJpbmdVcmwiLCJsb2NhbGVNZXNzYWdlcyIsImN1c3RvbU1lc3NhZ2VzIiwibWVzc2FnZXMiLCJkZWZhdWx0U3R5bGVzIiwiT2JqZWN0IiwidmFsdWVzIiwiY3VzdG9tU3R5bGVzIiwibWFwIiwibXMiLCJpZCIsImFsbFN0eWxlcyIsInJlZHVjZSIsImFjY3UiLCJzdHlsZSIsImxvYWRNYXBTdHlsZXMiLCJzdGF0ZSIsImxheWVySWR4IiwiY29udGFpbmVySWQiLCJsYXllcklkIiwidG9nZ2xlTGF5ZXJGb3JNYXAiLCJhY3RpdmUiLCJmaW5kIiwibGF5ZXIiLCJjb25maWciLCJpc0NvbmZpZ0FjdGl2ZSIsImxheWVyQ29uZmlnQ2hhbmdlIiwib3ZlciIsImFjdGl2ZUxheWVySWQiLCJvdmVySWQiLCJhY3RpdmVDb250YWluZXIiLCJvdmVyQ29udGFpbmVyIiwicmVvcmRlckxheWVyIiwiX3ZhbGlkYXRlTWFwYm94VG9rZW4iLCJfbG9hZE1hcFN0eWxlIiwiX3VwZGF0ZURuZEl0ZW1zIiwib25LZXBsZXJHbEluaXRpYWxpemVkIiwicm9vdCIsImN1cnJlbnQiLCJIVE1MRWxlbWVudCIsIl9oYW5kbGVSZXNpemUiLCJwcmV2UHJvcHMiLCJDb25zb2xlIiwid2FybiIsIk1JU1NJTkdfTUFQQk9YX1RPS0VOIiwiYXZhaWxhYmxlVGhlbWVTZWxlY3RvciIsImxvY2FsZU1lc3NhZ2VzU2VsZWN0b3IiLCJpc0V4cG9ydGluZ0ltYWdlIiwiZXhwb3J0aW5nIiwiZmlsdGVyZWREYXRhc2V0c1NlbGVjdG9yIiwic2lkZUZpZWxkcyIsInBsb3RDb250YWluZXJGaWVsZHMiLCJib3R0b21XaWRnZXRGaWVsZHMiLCJtb2RhbENvbnRhaW5lckZpZWxkcyIsImdlb0NvZGVyUGFuZWxGaWVsZHMiLCJub3RpZmljYXRpb25QYW5lbEZpZWxkcyIsIm1hcENvbnRhaW5lcnMiLCJfZGVsZXRlTWFwTGFiZWxzIiwic2V0dGluZ3MiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInBvc2l0aW9uIiwiX2hhbmRsZURyYWdTdGFydCIsIl9oYW5kbGVEcmFnRW5kIiwiRE5EX01PRElGSUVSUyIsIkRORF9FTVBUWV9NT0RJRklFUlMiLCJEUkFHT1ZFUkxBWV9NT0RJRklFUlMiLCJsYWJlbCIsImRhdGFJZCIsImNvbG9yIiwidHlwZSIsIl9tYXBDb250YWluZXIiLCJicmVha1BvaW50VmFsdWVzIiwiYm90dG9tV2lkZ2V0UmVmIiwiQ29tcG9uZW50IiwiUm9vdENvbnRleHQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYWtlTWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGVmYXVsdFVzZXJBY3Rpb25zIiwiZ2V0RGlzcGF0Y2giLCJkaXNwYXRjaCIsImdldFVzZXJBY3Rpb25zIiwiYWN0aW9ucyIsIm1ha2VHZXRBY3Rpb25DcmVhdG9ycyIsInVzZXJBY3Rpb25zIiwiVmlzU3RhdGVBY3Rpb25zIiwiTWFwU3RhdGVBY3Rpb25zIiwiTWFwU3R5bGVBY3Rpb25zIiwiVUlTdGF0ZUFjdGlvbnMiLCJQcm92aWRlckFjdGlvbnMiLCJtZXJnZUFjdGlvbnMiLCJnZXRBY3Rpb25DcmVhdG9ycyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIm93blByb3BzIiwiZ3JvdXBlZEFjdGlvbkNyZWF0b3JzIiwib3ZlcnJpZGVzIiwiaGFzT3duUHJvcGVydHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBSUE7O0FBRUE7O0FBZ0JBOztBQVVBOztBQVNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQVVBOzs7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0EsSUFBTUEsV0FBVyxHQUFHQyw2QkFBT0MsR0FBVix3Z0JBQ0EsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxVQUFoQjtBQUFBLENBREwsRUFFQSxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLFVBQWhCO0FBQUEsQ0FGTCxFQUdGLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsUUFBaEI7QUFBQSxDQUhILEVBSUEsVUFBQUosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxVQUFoQjtBQUFBLENBSkwsRUF5QkosVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxVQUFoQjtBQUFBLENB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OU0sS0FBM0IsS0FBbUNnTSxPQUFPLENBQUNjLGNBQVIsQ0FBdUI5TSxLQUF2QixDQUF2QyxFQUFvRTtBQUNsRTZNLE1BQUFBLFNBQVMsQ0FBQzdNLEtBQUQsQ0FBVCxHQUFpQmtNLFdBQVcsQ0FBQ2xNLEtBQUQsQ0FBNUI7QUFDRDtBQUNGOztBQUVELHlDQUFXZ00sT0FBWCxHQUF1QmEsU0FBdkI7QUFDRDs7ZUFFYzFJLGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGNyZWF0ZVJlZiwgRGlzcGF0Y2h9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDb25zb2xlIGZyb20gJ2dsb2JhbC9jb25zb2xlJztcbmltcG9ydCB7YmluZEFjdGlvbkNyZWF0b3JzfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgc3R5bGVkLCB7VGhlbWVQcm92aWRlciwgd2l0aFRoZW1lfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQge2Nvbm5lY3QgYXMga2VwbGVyR2xDb25uZWN0fSBmcm9tICcuL2Nvbm5lY3Qva2VwbGVyZ2wtY29ubmVjdCc7XG5pbXBvcnQge0ludGxQcm92aWRlcn0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQge21lc3NhZ2VzfSBmcm9tICdAa2VwbGVyLmdsL2xvY2FsaXphdGlvbic7XG5pbXBvcnQge1Jvb3RDb250ZXh0LCBGZWF0dXJlRmxhZ3NDb250ZXh0UHJvdmlkZXIsIEZlYXR1cmVGbGFnc30gZnJvbSAnLi9jb250ZXh0JztcbmltcG9ydCB7T25FcnJvckNhbGxCYWNrLCBPblN1Y2Nlc3NDYWxsQmFjaywgVmlld3BvcnR9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuaW1wb3J0IHtMYXllcn0gZnJvbSAnQGtlcGxlci5nbC9sYXllcnMnO1xuXG5pbXBvcnQge0RuZENvbnRleHQsIERyYWdPdmVybGF5fSBmcm9tICdAZG5kLWtpdC9jb3JlJztcblxuaW1wb3J0IHtcbiAgTWFwU3RhdGVBY3Rpb25zLFxuICBNYXBTdHlsZUFjdGlvbnMsXG4gIFByb3ZpZGVyQWN0aW9ucyxcbiAgVUlTdGF0ZUFjdGlvbnMsXG4gIFZpc1N0YXRlQWN0aW9uc1xufSBmcm9tICdAa2VwbGVyLmdsL2FjdGlvbnMnO1xuXG50eXBlIEtlcGxlckdsQWN0aW9ucyA9IHtcbiAgdmlzU3RhdGVBY3Rpb25zOiB0eXBlb2YgVmlzU3RhdGVBY3Rpb25zO1xuICBtYXBTdGF0ZUFjdGlvbnM6IHR5cGVvZiBNYXBTdGF0ZUFjdGlvbnM7XG4gIG1hcFN0eWxlQWN0aW9uczogdHlwZW9mIE1hcFN0eWxlQWN0aW9ucztcbiAgdWlTdGF0ZUFjdGlvbnM6IHR5cGVvZiBVSVN0YXRlQWN0aW9ucztcbiAgcHJvdmlkZXJBY3Rpb25zOiB0eXBlb2YgUHJvdmlkZXJBY3Rpb25zO1xufTtcblxuaW1wb3J0IHtcbiAgRElNRU5TSU9OUyxcbiAgS0VQTEVSX0dMX05BTUUsXG4gIEtFUExFUl9HTF9WRVJTSU9OLFxuICBUSEVNRSxcbiAgREVGQVVMVF9NQVBCT1hfQVBJX1VSTCxcbiAgR0VPQ09ERVJfREFUQVNFVF9OQU1FLFxuICBNSVNTSU5HX01BUEJPWF9UT0tFTlxufSBmcm9tICdAa2VwbGVyLmdsL2NvbnN0YW50cyc7XG5cbmltcG9ydCB7XG4gIERyYWdJdGVtLFxuICBETkRfTU9ESUZJRVJTLFxuICBETkRfRU1QVFlfTU9ESUZJRVJTLFxuICBEUkFHT1ZFUkxBWV9NT0RJRklFUlMsXG4gIGZpbmREbmRDb250YWluZXJJZCxcbiAgZ2V0TGF5ZXJPcmRlck9uU29ydFxufSBmcm9tICcuL2RuZC1sYXllci1pdGVtcyc7XG5cbmltcG9ydCBTaWRlUGFuZWxGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbCc7XG5pbXBvcnQgTWFwQ29udGFpbmVyRmFjdG9yeSBmcm9tICcuL21hcC1jb250YWluZXInO1xuaW1wb3J0IE1hcHNMYXlvdXRGYWN0b3J5IGZyb20gJy4vbWFwcy1sYXlvdXQnO1xuaW1wb3J0IEJvdHRvbVdpZGdldEZhY3RvcnkgZnJvbSAnLi9ib3R0b20td2lkZ2V0JztcbmltcG9ydCBNb2RhbENvbnRhaW5lckZhY3RvcnkgZnJvbSAnLi9tb2RhbC1jb250YWluZXInO1xuaW1wb3J0IFBsb3RDb250YWluZXJGYWN0b3J5IGZyb20gJy4vcGxvdC1jb250YWluZXInO1xuaW1wb3J0IE5vdGlmaWNhdGlvblBhbmVsRmFjdG9yeSBmcm9tICcuL25vdGlmaWNhdGlvbi1wYW5lbCc7XG5pbXBvcnQgR2VvQ29kZXJQYW5lbEZhY3RvcnkgZnJvbSAnLi9nZW9jb2Rlci1wYW5lbCc7XG5pbXBvcnQgTGF5ZXJQYW5lbEhlYWRlckZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL2xheWVyLXBhbmVsL2xheWVyLXBhbmVsLWhlYWRlcic7XG5cbmltcG9ydCB7XG4gIGZpbHRlck9iamVjdEJ5UHJlZGljYXRlLFxuICBnZW5lcmF0ZUhhc2hJZCxcbiAgdmFsaWRhdGVUb2tlbixcbiAgbWVyZ2VNZXNzYWdlcyxcbiAgb2JzZXJ2ZURpbWVuc2lvbnMsXG4gIHVub2JzZXJ2ZURpbWVuc2lvbnMsXG4gIGhhc1BvcnRhYmxlV2lkdGhcbn0gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5cbmltcG9ydCB7dGhlbWUgYXMgYmFzaWNUaGVtZSwgdGhlbWVMVCwgdGhlbWVCUywgYnJlYWtQb2ludFZhbHVlc30gZnJvbSAnQGtlcGxlci5nbC9zdHlsZXMnO1xuaW1wb3J0IHtLZXBsZXJHbFN0YXRlfSBmcm9tICdAa2VwbGVyLmdsL3JlZHVjZXJzJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ0BrZXBsZXIuZ2wvY2xvdWQtcHJvdmlkZXJzJztcblxuLy8gTWF5YmUgd2Ugc2hvdWxkIHRoaW5rIGFib3V0IGV4cG9ydGluZyB0aGlzIG9yIGNyZWF0aW5nIGEgdmFyaWFibGVcbi8vIGFzIHBhcnQgb2YgdGhlIGJhc2UuanMgdGhlbWVcbmNvbnN0IEdsb2JhbFN0eWxlID0gc3R5bGVkLmRpdmBcbiAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udEZhbWlseX07XG4gIGZvbnQtd2VpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnRXZWlnaHR9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udFNpemV9O1xuICBsaW5lLWhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5saW5lSGVpZ2h0fTtcblxuICAqLFxuICAqOmJlZm9yZSxcbiAgKjphZnRlciB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgdWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgbGkge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgfVxuXG4gIC5tYXBib3hnbC1jdHJsIC5tYXBib3hnbC1jdHJsLWxvZ28ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmludGVyZmFjZSBCb3R0b21XaWRnZXRPdXRlclByb3BzIHtcbiAgYWJzb2x1dGU/OiBib29sZWFuO1xufVxuXG5jb25zdCBCb3R0b21XaWRnZXRPdXRlciA9IHN0eWxlZC5kaXY8Qm90dG9tV2lkZ2V0T3V0ZXJQcm9wcz4oXG4gICh7YWJzb2x1dGV9KSA9PiBgXG4gICR7YWJzb2x1dGUgPyAncG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDA7IHJpZ2h0OiAwOycgOiAnJ31cbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8qIHByZXZlbnQgcGFkZGluZyBmcm9tIGJsb2NraW5nIGlucHV0ICovXG4gICYgPiAqIHtcbiAgICAvKiBhbGwgY2hpbGRyZW4gc2hvdWxkIGFsbG93IGlucHV0ICovXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgfWBcbik7XG5cbmNvbnN0IG5vcCA9ICgpID0+IHtcbiAgcmV0dXJuO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzVmlld3BvcnREaXNqb2ludGVkID0gcHJvcHMgPT4ge1xuICByZXR1cm4gKFxuICAgIHByb3BzLm1hcFN0YXRlLmlzU3BsaXQgJiZcbiAgICAhcHJvcHMubWFwU3RhdGUuaXNWaWV3cG9ydFN5bmNlZCAmJlxuICAgIHByb3BzLm1hcFN0YXRlLnNwbGl0TWFwVmlld3BvcnRzLmxlbmd0aCA+IDFcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBTdGF0ZVNlbGVjdG9yID0gKHByb3BzLCBpbmRleCkgPT4ge1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZShpbmRleCkpIHtcbiAgICAvLyBlaXRoZXIgbm8gaW5kZXggYXJnIG9yIGFuIGludmFsaWQgaW5kZXggd2FzIHByb3ZpZGVkXG4gICAgLy8gaXQgaXMgZXhwZWN0ZWQgdG8gYmUgZWl0aGVyIDAgb3IgMSB3aGVuIGluIHNwbGl0IG1vZGVcbiAgICAvLyBvbmx5IHVzZSB0aGUgbWFwU3RhdGVcbiAgICByZXR1cm4gcHJvcHMubWFwU3RhdGU7XG4gIH1cblxuICByZXR1cm4gaXNWaWV3cG9ydERpc2pvaW50ZWQocHJvcHMpXG4gICAgPyAvLyBtaXggdG9nZXRoZXIgdGhlIHZpZXdwb3J0IHByb3BlcnRpZXMgaW50ZW5kZWQgZm9yIHRoaXMgZGlzam9pbnRlZCA8TWFwQ29udGFpbmVyPiB3aXRoIHRoZSBvdGhlciBuZWNlc3NhcnkgbWFwU3RhdGUgcHJvcGVydGllc1xuICAgICAgey4uLnByb3BzLm1hcFN0YXRlLCAuLi5wcm9wcy5tYXBTdGF0ZS5zcGxpdE1hcFZpZXdwb3J0c1tpbmRleF19XG4gICAgOiAvLyBvdGhlcndpc2Ugb25seSB1c2UgdGhlIG1hcFN0YXRlXG4gICAgICBwcm9wcy5tYXBTdGF0ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBtYXBGaWVsZHNTZWxlY3RvciA9IChwcm9wczogS2VwbGVyR0xQcm9wcywgaW5kZXg6IG51bWJlciA9IDApID0+ICh7XG4gIGdldE1hcGJveFJlZjogcHJvcHMuZ2V0TWFwYm94UmVmLFxuICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogcHJvcHMubWFwYm94QXBpQWNjZXNzVG9rZW4sXG4gIG1hcGJveEFwaVVybDogcHJvcHMubWFwYm94QXBpVXJsID8gcHJvcHMubWFwYm94QXBpVXJsIDogREVGQVVMVF9LRVBMRVJfR0xfUFJPUFMubWFwYm94QXBpVXJsLFxuICBtYXBTdGF0ZTogbWFwU3RhdGVTZWxlY3Rvcihwcm9wcywgaW5kZXgpLFxuICBtYXBTdHlsZTogcHJvcHMubWFwU3R5bGUsXG4gIG9uRGVja0luaXRpYWxpemVkOiBwcm9wcy5vbkRlY2tJbml0aWFsaXplZCxcbiAgb25WaWV3U3RhdGVDaGFuZ2U6IHByb3BzLm9uVmlld1N0YXRlQ2hhbmdlLFxuICBkZWNrR2xQcm9wczogcHJvcHMuZGVja0dsUHJvcHMsXG4gIHVpU3RhdGVBY3Rpb25zOiBwcm9wcy51aVN0YXRlQWN0aW9ucyxcbiAgdmlzU3RhdGVBY3Rpb25zOiBwcm9wcy52aXNTdGF0ZUFjdGlvbnMsXG4gIG1hcFN0YXRlQWN0aW9uczogcHJvcHMubWFwU3RhdGVBY3Rpb25zLFxuXG4gIC8vIHZpc1N0YXRlXG4gIHZpc1N0YXRlOiBwcm9wcy52aXNTdGF0ZSxcblxuICAvLyB1aVN0YXRlXG4gIGFjdGl2ZVNpZGVQYW5lbDogcHJvcHMudWlTdGF0ZS5hY3RpdmVTaWRlUGFuZWwsXG4gIG1hcENvbnRyb2xzOiBwcm9wcy51aVN0YXRlLm1hcENvbnRyb2xzLFxuICByZWFkT25seTogcHJvcHMudWlTdGF0ZS5yZWFkT25seSxcbiAgbG9jYWxlOiBwcm9wcy51aVN0YXRlLmxvY2FsZSxcblxuICAvLyBtYXBTdHlsZVxuICB0b3BNYXBDb250YWluZXJQcm9wczogcHJvcHMudG9wTWFwQ29udGFpbmVyUHJvcHMsXG4gIGJvdHRvbU1hcENvbnRhaW5lclByb3BzOiBwcm9wcy5ib3R0b21NYXBDb250YWluZXJQcm9wc1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWaXNpYmxlRGF0YXNldHMoZGF0YXNldHMpIHtcbiAgLy8gV2UgZG9uJ3Qgd2FudCBHZW9jb2RlciBkYXRhc2V0IHRvIGJlIHByZXNlbnQgaW4gU2lkZVBhbmVsIGRhdGFzZXQgbGlzdFxuICByZXR1cm4gZmlsdGVyT2JqZWN0QnlQcmVkaWNhdGUoZGF0YXNldHMsIChrZXksIHZhbHVlKSA9PiBrZXkgIT09IEdFT0NPREVSX0RBVEFTRVRfTkFNRSk7XG59XG5cbmV4cG9ydCBjb25zdCBzaWRlUGFuZWxTZWxlY3RvciA9IChwcm9wczogS2VwbGVyR0xQcm9wcywgYXZhaWxhYmxlUHJvdmlkZXJzLCBmaWx0ZXJlZERhdGFzZXRzKSA9PiAoe1xuICBhcHBOYW1lOiBwcm9wcy5hcHBOYW1lID8gcHJvcHMuYXBwTmFtZSA6IERFRkFVTFRfS0VQTEVSX0dMX1BST1BTLmFwcE5hbWUsXG4gIHZlcnNpb246IHByb3BzLnZlcnNpb24gPyBwcm9wcy52ZXJzaW9uIDogREVGQVVMVF9LRVBMRVJfR0xfUFJPUFMudmVyc2lvbixcbiAgYXBwV2Vic2l0ZTogcHJvcHMuYXBwV2Vic2l0ZSxcbiAgbWFwU3R5bGU6IHByb3BzLm1hcFN0eWxlLFxuICBvblNhdmVNYXA6IHByb3BzLm9uU2F2ZU1hcCxcbiAgdWlTdGF0ZTogcHJvcHMudWlTdGF0ZSxcbiAgbWFwU3R5bGVBY3Rpb25zOiBwcm9wcy5tYXBTdHlsZUFjdGlvbnMsXG4gIHZpc1N0YXRlQWN0aW9uczogcHJvcHMudmlzU3RhdGVBY3Rpb25zLFxuICB1aVN0YXRlQWN0aW9uczogcHJvcHMudWlTdGF0ZUFjdGlvbnMsXG4gIG1hcFN0YXRlQWN0aW9uczogcHJvcHMubWFwU3RhdGVBY3Rpb25zLFxuXG4gIGRhdGFzZXRzOiBmaWx0ZXJlZERhdGFzZXRzLFxuICBmaWx0ZXJzOiBwcm9wcy52aXNTdGF0ZS5maWx0ZXJzLFxuICBsYXllcnM6IHByb3BzLnZpc1N0YXRlLmxheWVycyxcbiAgbGF5ZXJPcmRlcjogcHJvcHMudmlzU3RhdGUubGF5ZXJPcmRlcixcbiAgbGF5ZXJDbGFzc2VzOiBwcm9wcy52aXNTdGF0ZS5sYXllckNsYXNzZXMsXG4gIGludGVyYWN0aW9uQ29uZmlnOiBwcm9wcy52aXNTdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZyxcbiAgbWFwSW5mbzogcHJvcHMudmlzU3RhdGUubWFwSW5mbyxcbiAgbGF5ZXJCbGVuZGluZzogcHJvcHMudmlzU3RhdGUubGF5ZXJCbGVuZGluZyxcbiAgb3ZlcmxheUJsZW5kaW5nOiBwcm9wcy52aXNTdGF0ZS5vdmVybGF5QmxlbmRpbmcsXG5cbiAgd2lkdGg6IHByb3BzLnNpZGVQYW5lbFdpZHRoID8gcHJvcHMuc2lkZVBhbmVsV2lkdGggOiBERUZBVUxUX0tFUExFUl9HTF9QUk9QUy53aWR0aCxcbiAgYXZhaWxhYmxlUHJvdmlkZXJzLFxuICBtYXBTYXZlZDogcHJvcHMucHJvdmlkZXJTdGF0ZS5tYXBTYXZlZFxufSk7XG5cbmV4cG9ydCBjb25zdCBwbG90Q29udGFpbmVyU2VsZWN0b3IgPSAocHJvcHM6IEtlcGxlckdMUHJvcHMpID0+ICh7XG4gIHdpZHRoOiBwcm9wcy53aWR0aCxcbiAgaGVpZ2h0OiBwcm9wcy5oZWlnaHQsXG4gIGV4cG9ydEltYWdlU2V0dGluZzogcHJvcHMudWlTdGF0ZS5leHBvcnRJbWFnZSxcbiAgbWFwRmllbGRzOiBtYXBGaWVsZHNTZWxlY3Rvcihwcm9wcyksXG4gIGFkZE5vdGlmaWNhdGlvbjogcHJvcHMudWlTdGF0ZUFjdGlvbnMuYWRkTm90aWZpY2F0aW9uLFxuICBzZXRFeHBvcnRJbWFnZVNldHRpbmc6IHByb3BzLnVpU3RhdGVBY3Rpb25zLnNldEV4cG9ydEltYWdlU2V0dGluZyxcbiAgc2V0RXhwb3J0SW1hZ2VEYXRhVXJpOiBwcm9wcy51aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRJbWFnZURhdGFVcmksXG4gIHNldEV4cG9ydEltYWdlRXJyb3I6IHByb3BzLnVpU3RhdGVBY3Rpb25zLnNldEV4cG9ydEltYWdlRXJyb3IsXG4gIHNwbGl0TWFwczogcHJvcHMudmlzU3RhdGUuc3BsaXRNYXBzXG59KTtcblxuZXhwb3J0IGNvbnN0IGlzU3BsaXRTZWxlY3RvciA9IChwcm9wczogS2VwbGVyR0xQcm9wcykgPT5cbiAgcHJvcHMudmlzU3RhdGUuc3BsaXRNYXBzICYmIHByb3BzLnZpc1N0YXRlLnNwbGl0TWFwcy5sZW5ndGggPiAxO1xuXG5leHBvcnQgY29uc3QgYm90dG9tV2lkZ2V0U2VsZWN0b3IgPSAocHJvcHM6IEtlcGxlckdMUHJvcHMsIHRoZW1lKSA9PiAoe1xuICBmaWx0ZXJzOiBwcm9wcy52aXNTdGF0ZS5maWx0ZXJzLFxuICBkYXRhc2V0czogcHJvcHMudmlzU3RhdGUuZGF0YXNldHMsXG4gIHVpU3RhdGU6IHByb3BzLnVpU3RhdGUsXG4gIGxheWVyczogcHJvcHMudmlzU3RhdGUubGF5ZXJzLFxuICBhbmltYXRpb25Db25maWc6IHByb3BzLnZpc1N0YXRlLmFuaW1hdGlvbkNvbmZpZyxcbiAgdmlzU3RhdGVBY3Rpb25zOiBwcm9wcy52aXNTdGF0ZUFjdGlvbnMsXG4gIHRvZ2dsZU1vZGFsOiBwcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbCxcbiAgc2lkZVBhbmVsV2lkdGg6IHByb3BzLnVpU3RhdGUucmVhZE9ubHkgPyAwIDogcHJvcHMuc2lkZVBhbmVsV2lkdGggKyB0aGVtZS5zaWRlUGFuZWwubWFyZ2luLmxlZnRcbn0pO1xuXG5leHBvcnQgY29uc3QgbW9kYWxDb250YWluZXJTZWxlY3RvciA9IChwcm9wczogS2VwbGVyR0xQcm9wcywgcm9vdE5vZGUpID0+ICh7XG4gIGFwcE5hbWU6IHByb3BzLmFwcE5hbWUgPyBwcm9wcy5hcHBOYW1lIDogREVGQVVMVF9LRVBMRVJfR0xfUFJPUFMuYXBwTmFtZSxcbiAgbWFwU3R5bGU6IHByb3BzLm1hcFN0eWxlLFxuICB2aXNTdGF0ZTogcHJvcHMudmlzU3RhdGUsXG4gIG1hcFN0YXRlOiBwcm9wcy5tYXBTdGF0ZSxcbiAgdWlTdGF0ZTogcHJvcHMudWlTdGF0ZSxcbiAgcHJvdmlkZXJTdGF0ZTogcHJvcHMucHJvdmlkZXJTdGF0ZSxcblxuICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogcHJvcHMubWFwYm94QXBpQWNjZXNzVG9rZW4sXG4gIG1hcGJveEFwaVVybDogcHJvcHMubWFwYm94QXBpVXJsLFxuICB2aXNTdGF0ZUFjdGlvbnM6IHByb3BzLnZpc1N0YXRlQWN0aW9ucyxcbiAgdWlTdGF0ZUFjdGlvbnM6IHByb3BzLnVpU3RhdGVBY3Rpb25zLFxuICBtYXBTdHlsZUFjdGlvbnM6IHByb3BzLm1hcFN0eWxlQWN0aW9ucyxcbiAgcHJvdmlkZXJBY3Rpb25zOiBwcm9wcy5wcm92aWRlckFjdGlvbnMsXG5cbiAgcm9vdE5vZGUsXG4gIC8vIFVzZXIgZGVmaW5lZCBjbG91ZCBwcm92aWRlciBwcm9wc1xuICBjbG91ZFByb3ZpZGVyczogcHJvcHMuY2xvdWRQcm92aWRlcnNcbiAgICA/IHByb3BzLmNsb3VkUHJvdmlkZXJzXG4gICAgOiBERUZBVUxUX0tFUExFUl9HTF9QUk9QUy5jbG91ZFByb3ZpZGVycyxcbiAgb25FeHBvcnRUb0Nsb3VkU3VjY2VzczogcHJvcHMub25FeHBvcnRUb0Nsb3VkU3VjY2VzcyxcbiAgb25Mb2FkQ2xvdWRNYXBTdWNjZXNzOiBwcm9wcy5vbkxvYWRDbG91ZE1hcFN1Y2Nlc3MsXG4gIG9uTG9hZENsb3VkTWFwRXJyb3I6IHByb3BzLm9uTG9hZENsb3VkTWFwRXJyb3IsXG4gIG9uRXhwb3J0VG9DbG91ZEVycm9yOiBwcm9wcy5vbkV4cG9ydFRvQ2xvdWRFcnJvclxufSk7XG5cbmV4cG9ydCBjb25zdCBnZW9Db2RlclBhbmVsU2VsZWN0b3IgPSAoXG4gIHByb3BzOiBLZXBsZXJHTFByb3BzLFxuICBkaW1lbnNpb25zOiB7d2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXJ9XG4pID0+ICh7XG4gIGlzR2VvY29kZXJFbmFibGVkOiBwcm9wcy52aXNTdGF0ZS5pbnRlcmFjdGlvbkNvbmZpZy5nZW9jb2Rlci5lbmFibGVkLFxuICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogcHJvcHMubWFwYm94QXBpQWNjZXNzVG9rZW4sXG4gIG1hcFN0YXRlOiBwcm9wcy5tYXBTdGF0ZSxcbiAgdWlTdGF0ZTogcHJvcHMudWlTdGF0ZSxcbiAgdXBkYXRlVmlzRGF0YTogcHJvcHMudmlzU3RhdGVBY3Rpb25zLnVwZGF0ZVZpc0RhdGEsXG4gIHJlbW92ZURhdGFzZXQ6IHByb3BzLnZpc1N0YXRlQWN0aW9ucy5yZW1vdmVEYXRhc2V0LFxuICB1cGRhdGVNYXA6IHByb3BzLm1hcFN0YXRlQWN0aW9ucy51cGRhdGVNYXAsXG4gIGFwcFdpZHRoOiBkaW1lbnNpb25zLndpZHRoXG59KTtcblxuZXhwb3J0IGNvbnN0IG5vdGlmaWNhdGlvblBhbmVsU2VsZWN0b3IgPSAocHJvcHM6IEtlcGxlckdMUHJvcHMpID0+ICh7XG4gIHJlbW92ZU5vdGlmaWNhdGlvbjogcHJvcHMudWlTdGF0ZUFjdGlvbnMucmVtb3ZlTm90aWZpY2F0aW9uLFxuICBub3RpZmljYXRpb25zOiBwcm9wcy51aVN0YXRlLm5vdGlmaWNhdGlvbnNcbn0pO1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9LRVBMRVJfR0xfUFJPUFMgPSB7XG4gIG1hcFN0eWxlczogW10sXG4gIG1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0OiBmYWxzZSxcbiAgbWFwYm94QXBpVXJsOiBERUZBVUxUX01BUEJPWF9BUElfVVJMLFxuICB3aWR0aDogODAwLFxuICBoZWlnaHQ6IDgwMCxcbiAgYXBwTmFtZTogS0VQTEVSX0dMX05BTUUsXG4gIHZlcnNpb246IEtFUExFUl9HTF9WRVJTSU9OLFxuICBzaWRlUGFuZWxXaWR0aDogRElNRU5TSU9OUy5zaWRlUGFuZWwud2lkdGgsXG4gIHRoZW1lOiB7fSxcbiAgY2xvdWRQcm92aWRlcnM6IFtdLFxuICByZWFkT25seTogZmFsc2UsXG4gIGZlYXR1cmVGbGFnczoge31cbn07XG5cbnR5cGUgS2VwbGVyR0xCYXNpY1Byb3BzID0ge1xuICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogc3RyaW5nO1xuICBtYXBib3hBcGlVcmw/OiBzdHJpbmc7XG4gIGlkOiBzdHJpbmc7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG5cbiAgYXBwV2Vic2l0ZT86IGFueTtcbiAgb25TYXZlTWFwPzogKCkgPT4gdm9pZDtcbiAgb25WaWV3U3RhdGVDaGFuZ2U/OiAodmlld1N0YXRlOiBWaWV3cG9ydCkgPT4gdm9pZDtcbiAgb25EZWNrSW5pdGlhbGl6ZWQ/OiAoKSA9PiB2b2lkO1xuICBvbktlcGxlckdsSW5pdGlhbGl6ZWQ/OiAoKSA9PiB2b2lkO1xuICBnZXRNYXBib3hSZWY/OiAoKSA9PiBSZWFjdC5SZWZPYmplY3Q8YW55PjtcbiAgbWFwU3R5bGVzPzoge2lkOiBzdHJpbmc7IHN0eWxlPzogb2JqZWN0fVtdO1xuICBtYXBTdHlsZXNSZXBsYWNlRGVmYXVsdD86IGJvb2xlYW47XG4gIGFwcE5hbWU/OiBzdHJpbmc7XG4gIHZlcnNpb24/OiBzdHJpbmc7XG4gIHNpZGVQYW5lbFdpZHRoPzogbnVtYmVyO1xuICB0aGVtZT86IG9iamVjdDtcbiAgY2xvdWRQcm92aWRlcnM/OiBQcm92aWRlcltdO1xuICBkZWNrR2xQcm9wcz86IG9iamVjdDtcbiAgb25Mb2FkQ2xvdWRNYXBTdWNjZXNzPzogT25TdWNjZXNzQ2FsbEJhY2s7XG4gIG9uTG9hZENsb3VkTWFwRXJyb3I/OiBPbkVycm9yQ2FsbEJhY2s7XG4gIG9uRXhwb3J0VG9DbG91ZFN1Y2Nlc3M/OiBPblN1Y2Nlc3NDYWxsQmFjaztcbiAgb25FeHBvcnRUb0Nsb3VkRXJyb3I/OiBPbkVycm9yQ2FsbEJhY2s7XG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcbiAgZmVhdHVyZUZsYWdzPzogRmVhdHVyZUZsYWdzO1xuXG4gIGxvY2FsZU1lc3NhZ2VzPzoge1trZXk6IHN0cmluZ106IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9fTtcbiAgZGlzcGF0Y2g6IERpc3BhdGNoPGFueT47XG5cbiAgdG9wTWFwQ29udGFpbmVyUHJvcHM/OiBvYmplY3Q7XG4gIGJvdHRvbU1hcENvbnRhaW5lclByb3BzPzogb2JqZWN0O1xufTtcblxudHlwZSBLZXBsZXJHTFByb3BzID0gS2VwbGVyR2xTdGF0ZSAmIEtlcGxlckdsQWN0aW9ucyAmIEtlcGxlckdMQmFzaWNQcm9wcztcbnR5cGUgS2VwbGVyR0xDb21wU3RhdGUgPSB7XG4gIGRpbWVuc2lvbnM6IHt3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlcn0gfCBudWxsO1xuICBhY3RpdmVMYXllcj86IExheWVyO1xuICBpc0RyYWdnaW5nOiBib29sZWFuIHwgbnVsbDtcbiAgZG5kSXRlbXM6IHtzb3J0YWJsZWxpc3Q6IHN0cmluZ1tdOyAwOiBbXTsgMTogW119O1xufTtcblxuS2VwbGVyR2xGYWN0b3J5LmRlcHMgPSBbXG4gIEJvdHRvbVdpZGdldEZhY3RvcnksXG4gIEdlb0NvZGVyUGFuZWxGYWN0b3J5LFxuICBNYXBDb250YWluZXJGYWN0b3J5LFxuICBNYXBzTGF5b3V0RmFjdG9yeSxcbiAgTW9kYWxDb250YWluZXJGYWN0b3J5LFxuICBTaWRlUGFuZWxGYWN0b3J5LFxuICBQbG90Q29udGFpbmVyRmFjdG9yeSxcbiAgTm90aWZpY2F0aW9uUGFuZWxGYWN0b3J5LFxuICBMYXllclBhbmVsSGVhZGVyRmFjdG9yeVxuXTtcblxuZnVuY3Rpb24gS2VwbGVyR2xGYWN0b3J5KFxuICBCb3R0b21XaWRnZXQ6IFJldHVyblR5cGU8dHlwZW9mIEJvdHRvbVdpZGdldEZhY3Rvcnk+LFxuICBHZW9Db2RlclBhbmVsOiBSZXR1cm5UeXBlPHR5cGVvZiBHZW9Db2RlclBhbmVsRmFjdG9yeT4sXG4gIE1hcENvbnRhaW5lcjogUmV0dXJuVHlwZTx0eXBlb2YgTWFwQ29udGFpbmVyRmFjdG9yeT4sXG4gIE1hcHNMYXlvdXQ6IFJldHVyblR5cGU8dHlwZW9mIE1hcHNMYXlvdXRGYWN0b3J5PixcbiAgTW9kYWxDb250YWluZXI6IFJldHVyblR5cGU8dHlwZW9mIE1vZGFsQ29udGFpbmVyRmFjdG9yeT4sXG4gIFNpZGVQYW5lbDogUmV0dXJuVHlwZTx0eXBlb2YgU2lkZVBhbmVsRmFjdG9yeT4sXG4gIFBsb3RDb250YWluZXI6IFJldHVyblR5cGU8dHlwZW9mIFBsb3RDb250YWluZXJGYWN0b3J5PixcbiAgTm90aWZpY2F0aW9uUGFuZWw6IFJldHVyblR5cGU8dHlwZW9mIE5vdGlmaWNhdGlvblBhbmVsRmFjdG9yeT4sXG4gIExheWVyUGFuZWxIZWFkZXI6IFJldHVyblR5cGU8dHlwZW9mIExheWVyUGFuZWxIZWFkZXJGYWN0b3J5PlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxLZXBsZXJHTEJhc2ljUHJvcHMgJiB7c2VsZWN0b3I6ICguLi5hcmdzOiBhbnlbXSkgPT4gS2VwbGVyR2xTdGF0ZX0+IHtcbiAgLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4va2VwbGVyLWdsJykuVW5jb25uZWN0ZWRLZXBsZXJHbFByb3BzfSBLZXBsZXJHbFByb3BzICovXG4gIC8qKiBAYXVnbWVudHMgUmVhY3QuQ29tcG9uZW50PEtlcGxlckdsUHJvcHM+ICovXG4gIGNsYXNzIEtlcGxlckdMIGV4dGVuZHMgQ29tcG9uZW50PFxuICAgIEtlcGxlckdMUHJvcHMgJiB7c2VsZWN0b3I6ICguLi5hcmdzOiBhbnlbXSkgPT4gS2VwbGVyR2xTdGF0ZX0sXG4gICAgS2VwbGVyR0xDb21wU3RhdGVcbiAgPiB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IERFRkFVTFRfS0VQTEVSX0dMX1BST1BTO1xuXG4gICAgc3RhdGU6IEtlcGxlckdMQ29tcFN0YXRlID0ge1xuICAgICAgZGltZW5zaW9uczogbnVsbCxcbiAgICAgIGFjdGl2ZUxheWVyOiB1bmRlZmluZWQsXG4gICAgICBpc0RyYWdnaW5nOiBudWxsLFxuICAgICAgZG5kSXRlbXM6IHtzb3J0YWJsZWxpc3Q6IFtdLCAwOiBbXSwgMTogW119XG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5fdmFsaWRhdGVNYXBib3hUb2tlbigpO1xuICAgICAgdGhpcy5fbG9hZE1hcFN0eWxlKCk7XG4gICAgICB0aGlzLl91cGRhdGVEbmRJdGVtcygpO1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uS2VwbGVyR2xJbml0aWFsaXplZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aGlzLnByb3BzLm9uS2VwbGVyR2xJbml0aWFsaXplZCgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucm9vdC5jdXJyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgb2JzZXJ2ZURpbWVuc2lvbnModGhpcy5yb290LmN1cnJlbnQsIHRoaXMuX2hhbmRsZVJlc2l6ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnByb3BzLnZpc1N0YXRlLmxheWVyT3JkZXIgIT09IHByZXZQcm9wcy52aXNTdGF0ZS5sYXllck9yZGVyIHx8XG4gICAgICAgIHRoaXMucHJvcHMudmlzU3RhdGUubGF5ZXJzICE9PSBwcmV2UHJvcHMudmlzU3RhdGUubGF5ZXJzXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlRG5kSXRlbXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLnJvb3QuY3VycmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZURpbWVuc2lvbnModGhpcy5yb290LmN1cnJlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9oYW5kbGVSZXNpemUgPSBkaW1lbnNpb25zID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2RpbWVuc2lvbnN9KTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGNvbnRleHRUeXBlID0gUm9vdENvbnRleHQ7XG5cbiAgICByb290ID0gY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xuICAgIGJvdHRvbVdpZGdldFJlZiA9IGNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcblxuICAgIC8qIHNlbGVjdG9ycyAqL1xuICAgIHRoZW1lU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy50aGVtZTtcbiAgICBhdmFpbGFibGVUaGVtZVNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IodGhpcy50aGVtZVNlbGVjdG9yLCB0aGVtZSA9PlxuICAgICAgdHlwZW9mIHRoZW1lID09PSAnb2JqZWN0J1xuICAgICAgICA/IHtcbiAgICAgICAgICAgIC4uLmJhc2ljVGhlbWUsXG4gICAgICAgICAgICAuLi50aGVtZVxuICAgICAgICAgIH1cbiAgICAgICAgOiB0aGVtZSA9PT0gVEhFTUUubGlnaHRcbiAgICAgICAgPyB0aGVtZUxUXG4gICAgICAgIDogdGhlbWUgPT09IFRIRU1FLmJhc2VcbiAgICAgICAgPyB0aGVtZUJTXG4gICAgICAgIDogdGhlbWVcbiAgICApO1xuXG4gICAgZGF0YXNldHNTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLnZpc1N0YXRlLmRhdGFzZXRzO1xuICAgIGZpbHRlcmVkRGF0YXNldHNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuZGF0YXNldHNTZWxlY3RvciwgZ2V0VmlzaWJsZURhdGFzZXRzKTtcblxuICAgIGF2YWlsYWJsZVByb3ZpZGVycyA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgKHByb3BzOiBLZXBsZXJHTFByb3BzKSA9PiBwcm9wcy5jbG91ZFByb3ZpZGVycyxcbiAgICAgIHByb3ZpZGVycyA9PlxuICAgICAgICBBcnJheS5pc0FycmF5KHByb3ZpZGVycykgJiYgcHJvdmlkZXJzLmxlbmd0aFxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBoYXNTdG9yYWdlOiBwcm92aWRlcnMuc29tZShwID0+IHAuaGFzUHJpdmF0ZVN0b3JhZ2UoKSksXG4gICAgICAgICAgICAgIGhhc1NoYXJlOiBwcm92aWRlcnMuc29tZShwID0+IHAuaGFzU2hhcmluZ1VybCgpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge31cbiAgICApO1xuXG4gICAgbG9jYWxlTWVzc2FnZXNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgKHByb3BzOiBLZXBsZXJHTFByb3BzKSA9PiBwcm9wcy5sb2NhbGVNZXNzYWdlcyxcbiAgICAgIGN1c3RvbU1lc3NhZ2VzID0+IChjdXN0b21NZXNzYWdlcyA/IG1lcmdlTWVzc2FnZXMobWVzc2FnZXMsIGN1c3RvbU1lc3NhZ2VzKSA6IG1lc3NhZ2VzKVxuICAgICk7XG5cbiAgICAvKiBwcml2YXRlIG1ldGhvZHMgKi9cbiAgICBfdmFsaWRhdGVNYXBib3hUb2tlbigpIHtcbiAgICAgIGNvbnN0IHttYXBib3hBcGlBY2Nlc3NUb2tlbn0gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKCF2YWxpZGF0ZVRva2VuKG1hcGJveEFwaUFjY2Vzc1Rva2VuKSkge1xuICAgICAgICBDb25zb2xlLndhcm4oTUlTU0lOR19NQVBCT1hfVE9LRU4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9sb2FkTWFwU3R5bGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBkZWZhdWx0U3R5bGVzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnByb3BzLm1hcFN0eWxlLm1hcFN0eWxlcyk7XG4gICAgICAvLyBhZGQgaWQgdG8gY3VzdG9tIG1hcCBzdHlsZXMgaWYgbm90IGdpdmVuXG4gICAgICBjb25zdCBjdXN0b21TdHlsZXMgPSAodGhpcy5wcm9wcy5tYXBTdHlsZXMgfHwgW10pLm1hcChtcyA9PiAoe1xuICAgICAgICAuLi5tcyxcbiAgICAgICAgaWQ6IG1zLmlkIHx8IGdlbmVyYXRlSGFzaElkKClcbiAgICAgIH0pKTtcblxuICAgICAgY29uc3QgYWxsU3R5bGVzID0gWy4uLmN1c3RvbVN0eWxlcywgLi4uZGVmYXVsdFN0eWxlc10ucmVkdWNlKChhY2N1LCBzdHlsZSkgPT4ge1xuICAgICAgICBhY2N1W3N0eWxlLmlkXSA9IHN0eWxlO1xuICAgICAgICByZXR1cm4gYWNjdTtcbiAgICAgIH0sIHt9KTtcblxuICAgICAgdGhpcy5wcm9wcy5tYXBTdHlsZUFjdGlvbnMubG9hZE1hcFN0eWxlcyhhbGxTdHlsZXMpO1xuICAgIH07XG5cbiAgICBfdXBkYXRlRG5kSXRlbXMgPSAoKSA9PiB7XG4gICAgICAvLyB1cGRhdGUgZG5kSXRlbXMgd2hlbiBsYXllck9yZGVyIG9yIGxheWVycyBjaGFuZ2VcbiAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlLCBwcm9wcykgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgdmlzU3RhdGU6IHtsYXllcnMsIGxheWVyT3JkZXJ9XG4gICAgICAgIH0gPSBwcm9wcztcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRuZEl0ZW1zOiB7XG4gICAgICAgICAgICAuLi5zdGF0ZS5kbmRJdGVtcyxcbiAgICAgICAgICAgIHNvcnRhYmxlbGlzdDogbGF5ZXJPcmRlci5tYXAobGF5ZXJJZHggPT4gbGF5ZXJzW2xheWVySWR4XS5pZClcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX2RlbGV0ZU1hcExhYmVscyA9IChjb250YWluZXJJZCwgbGF5ZXJJZCkgPT4ge1xuICAgICAgLy8gZGVsZXRlIGRuZGl0ZW1zIGluIG1hcCBwYW5lbFxuICAgICAgdGhpcy5wcm9wcy52aXNTdGF0ZUFjdGlvbnMudG9nZ2xlTGF5ZXJGb3JNYXAoY29udGFpbmVySWQsIGxheWVySWQpO1xuICAgIH07XG5cbiAgICBfaGFuZGxlRHJhZ1N0YXJ0ID0gKHthY3RpdmV9KSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHZpc1N0YXRlOiB7bGF5ZXJzfSxcbiAgICAgICAgdmlzU3RhdGVBY3Rpb25zXG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IGFjdGl2ZUxheWVyID0gbGF5ZXJzLmZpbmQobGF5ZXIgPT4gbGF5ZXIuaWQgPT09IGFjdGl2ZS5pZCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVMYXllcn0pO1xuXG4gICAgICBpZiAoYWN0aXZlTGF5ZXI/LmNvbmZpZy5pc0NvbmZpZ0FjdGl2ZSkge1xuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMubGF5ZXJDb25maWdDaGFuZ2UoYWN0aXZlTGF5ZXIsIHtpc0NvbmZpZ0FjdGl2ZTogZmFsc2V9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX2hhbmRsZURyYWdFbmQgPSAoe2FjdGl2ZSwgb3Zlcn0pID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdmlzU3RhdGU6IHtsYXllck9yZGVyLCBzcGxpdE1hcHN9LFxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnNcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge2RuZEl0ZW1zfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgIGlmICghZG5kSXRlbXMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7aWQ6IGFjdGl2ZUxheWVySWR9ID0gYWN0aXZlO1xuICAgICAgY29uc3Qgb3ZlcklkID0gb3Zlcj8uaWQ7IC8vIGlzU3BsaXQgPyBvdmVyQ29udGFpbmVySWQgOiBvdmVyTGF5ZXJJZFxuICAgICAgY29uc3QgYWN0aXZlQ29udGFpbmVyID0gZmluZERuZENvbnRhaW5lcklkKGFjdGl2ZUxheWVySWQsIGRuZEl0ZW1zKTtcbiAgICAgIGNvbnN0IG92ZXJDb250YWluZXIgPSBmaW5kRG5kQ29udGFpbmVySWQob3ZlcklkLCBkbmRJdGVtcyk7XG5cbiAgICAgIGlmICghYWN0aXZlQ29udGFpbmVyIHx8ICFvdmVyQ29udGFpbmVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGl2ZUNvbnRhaW5lciA9PT0gb3ZlckNvbnRhaW5lcikge1xuICAgICAgICAvLyBkcmFnIGFuZCBkcm9wIGluIHRoZSBzYW1lIGNvbnRhaW5lcjogU29ydGFibGVsaXN0XG4gICAgICAgIC8vIHRoaXMgc29ydCBhY3Rpb24gbWF5IGhhcHBlbiBpbiBhbnkgbW9kZXMsIHJlZ2FyZGxlc3Mgb2YgaXNTcGxpdFxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMucmVvcmRlckxheWVyKFxuICAgICAgICAgIGdldExheWVyT3JkZXJPblNvcnQobGF5ZXJPcmRlciwgZG5kSXRlbXNbYWN0aXZlQ29udGFpbmVyXSwgYWN0aXZlTGF5ZXJJZCwgb3ZlcklkKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmICghc3BsaXRNYXBzW292ZXJDb250YWluZXJdLmxheWVyc1thY3RpdmVMYXllcklkXSkge1xuICAgICAgICAvLyBkcmFnIGFuZCBkcm9wIGluIGRpZmZlcmVudCBjb250YWluZXJzOiBTb3J0YWJsZWxpc3QgLT4gTWFwQ29udGFpbmVyXG4gICAgICAgIHZpc1N0YXRlQWN0aW9ucy50b2dnbGVMYXllckZvck1hcChvdmVyQ29udGFpbmVyLCBhY3RpdmVMYXllcklkKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlTGF5ZXI6IHVuZGVmaW5lZH0pO1xuICAgIH07XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaWQgPSAnbWFwJyxcbiAgICAgICAgd2lkdGggPSBERUZBVUxUX0tFUExFUl9HTF9QUk9QUy53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gREVGQVVMVF9LRVBMRVJfR0xfUFJPUFMuaGVpZ2h0LFxuICAgICAgICB1aVN0YXRlLFxuICAgICAgICB2aXNTdGF0ZSxcbiAgICAgICAgLy8gcmVhZE9ubHkgb3ZlcnJpZGVcbiAgICAgICAgcmVhZE9ubHksXG5cbiAgICAgICAgLy8gZmVhdHVyZXNcbiAgICAgICAgZmVhdHVyZUZsYWdzXG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3QgZGltZW5zaW9ucyA9IHRoaXMuc3RhdGUuZGltZW5zaW9ucyB8fCB7d2lkdGgsIGhlaWdodH07XG4gICAgICBjb25zdCBhY3RpdmVMYXllciA9IHRoaXMuc3RhdGUuYWN0aXZlTGF5ZXI7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHNwbGl0TWFwcywgLy8gdGhpcyB3aWxsIHN0b3JlIHN1cHBvcnQgZm9yIHNwbGl0IG1hcCB2aWV3IGlzIG5lY2Vzc2FyeVxuICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZyxcbiAgICAgICAgZGF0YXNldHNcbiAgICAgIH0gPSB2aXNTdGF0ZTtcblxuICAgICAgY29uc3QgaXNTcGxpdCA9IGlzU3BsaXRTZWxlY3Rvcih0aGlzLnByb3BzKTtcbiAgICAgIGNvbnN0IHRoZW1lID0gdGhpcy5hdmFpbGFibGVUaGVtZVNlbGVjdG9yKHRoaXMucHJvcHMpO1xuICAgICAgY29uc3QgbG9jYWxlTWVzc2FnZXMgPSB0aGlzLmxvY2FsZU1lc3NhZ2VzU2VsZWN0b3IodGhpcy5wcm9wcyk7XG4gICAgICBjb25zdCBpc0V4cG9ydGluZ0ltYWdlID0gdWlTdGF0ZS5leHBvcnRJbWFnZS5leHBvcnRpbmc7XG4gICAgICBjb25zdCBhdmFpbGFibGVQcm92aWRlcnMgPSB0aGlzLmF2YWlsYWJsZVByb3ZpZGVycyh0aGlzLnByb3BzKTtcblxuICAgICAgY29uc3QgZmlsdGVyZWREYXRhc2V0cyA9IHRoaXMuZmlsdGVyZWREYXRhc2V0c1NlbGVjdG9yKHRoaXMucHJvcHMpO1xuICAgICAgY29uc3Qgc2lkZUZpZWxkcyA9IHNpZGVQYW5lbFNlbGVjdG9yKHRoaXMucHJvcHMsIGF2YWlsYWJsZVByb3ZpZGVycywgZmlsdGVyZWREYXRhc2V0cyk7XG4gICAgICBjb25zdCBwbG90Q29udGFpbmVyRmllbGRzID0gcGxvdENvbnRhaW5lclNlbGVjdG9yKHRoaXMucHJvcHMpO1xuICAgICAgY29uc3QgYm90dG9tV2lkZ2V0RmllbGRzID0gYm90dG9tV2lkZ2V0U2VsZWN0b3IodGhpcy5wcm9wcywgdGhlbWUpO1xuICAgICAgY29uc3QgbW9kYWxDb250YWluZXJGaWVsZHMgPSBtb2RhbENvbnRhaW5lclNlbGVjdG9yKHRoaXMucHJvcHMsIHRoaXMucm9vdC5jdXJyZW50KTtcbiAgICAgIGNvbnN0IGdlb0NvZGVyUGFuZWxGaWVsZHMgPSBnZW9Db2RlclBhbmVsU2VsZWN0b3IodGhpcy5wcm9wcywgZGltZW5zaW9ucyk7XG4gICAgICBjb25zdCBub3RpZmljYXRpb25QYW5lbEZpZWxkcyA9IG5vdGlmaWNhdGlvblBhbmVsU2VsZWN0b3IodGhpcy5wcm9wcyk7XG4gICAgICBjb25zdCBtYXBDb250YWluZXJzID0gIWlzU3BsaXRcbiAgICAgICAgPyBbXG4gICAgICAgICAgICA8TWFwQ29udGFpbmVyXG4gICAgICAgICAgICAgIHByaW1hcnk9e3RydWV9XG4gICAgICAgICAgICAgIGtleT17MH1cbiAgICAgICAgICAgICAgaW5kZXg9ezB9XG4gICAgICAgICAgICAgIHsuLi5tYXBGaWVsZHNTZWxlY3Rvcih0aGlzLnByb3BzKX1cbiAgICAgICAgICAgICAgY29udGFpbmVySWQ9ezB9XG4gICAgICAgICAgICAgIGRlbGV0ZU1hcExhYmVscz17dGhpcy5fZGVsZXRlTWFwTGFiZWxzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICBdXG4gICAgICAgIDogc3BsaXRNYXBzLm1hcCgoc2V0dGluZ3MsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8TWFwQ29udGFpbmVyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgcHJpbWFyeT17aW5kZXggPT09IDF9XG4gICAgICAgICAgICAgIHsuLi5tYXBGaWVsZHNTZWxlY3Rvcih0aGlzLnByb3BzLCBpbmRleCl9XG4gICAgICAgICAgICAgIGNvbnRhaW5lcklkPXtpbmRleH1cbiAgICAgICAgICAgICAgZGVsZXRlTWFwTGFiZWxzPXt0aGlzLl9kZWxldGVNYXBMYWJlbHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Um9vdENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoaXMucm9vdH0+XG4gICAgICAgICAgPEZlYXR1cmVGbGFnc0NvbnRleHRQcm92aWRlciBmZWF0dXJlRmxhZ3M9e2ZlYXR1cmVGbGFnc30+XG4gICAgICAgICAgICA8SW50bFByb3ZpZGVyIGxvY2FsZT17dWlTdGF0ZS5sb2NhbGV9IG1lc3NhZ2VzPXtsb2NhbGVNZXNzYWdlc1t1aVN0YXRlLmxvY2FsZV19PlxuICAgICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgICAgICAgIDxHbG9iYWxTdHlsZVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwia2VwbGVyLWdsXCJcbiAgICAgICAgICAgICAgICAgIGlkPXtga2VwbGVyLWdsX18ke2lkfWB9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnJvb3R9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvblBhbmVsIHsuLi5ub3RpZmljYXRpb25QYW5lbEZpZWxkc30gLz5cbiAgICAgICAgICAgICAgICAgIDxEbmRDb250ZXh0XG4gICAgICAgICAgICAgICAgICAgIG9uRHJhZ1N0YXJ0PXt0aGlzLl9oYW5kbGVEcmFnU3RhcnR9XG4gICAgICAgICAgICAgICAgICAgIG9uRHJhZ0VuZD17dGhpcy5faGFuZGxlRHJhZ0VuZH1cbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzPXshaXNTcGxpdCA/IERORF9NT0RJRklFUlMgOiBETkRfRU1QVFlfTU9ESUZJRVJTfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7IXVpU3RhdGUucmVhZE9ubHkgJiYgIXJlYWRPbmx5ICYmIDxTaWRlUGFuZWwgey4uLnNpZGVGaWVsZHN9IC8+fVxuICAgICAgICAgICAgICAgICAgICA8TWFwc0xheW91dCBjbGFzc05hbWU9XCJtYXBzXCI+e21hcENvbnRhaW5lcnN9PC9NYXBzTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICB7aXNTcGxpdCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPERyYWdPdmVybGF5IG1vZGlmaWVycz17RFJBR09WRVJMQVlfTU9ESUZJRVJTfSBkcm9wQW5pbWF0aW9uPXtudWxsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3RpdmVMYXllciAhPT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ0l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExheWVyUGFuZWxIZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ29uZmlnQWN0aXZlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVySWQ9e2FjdGl2ZUxheWVyLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWaXNpYmxlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXthY3RpdmVMYXllci5jb25maWcubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFJDR0NvbG9yVmFsdWVzPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlTGF5ZXIuY29uZmlnLmRhdGFJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZGF0YXNldHNbYWN0aXZlTGF5ZXIuY29uZmlnLmRhdGFJZF0uY29sb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlVmlzaWJpbGl0eT17bm9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZXNldElzVmFsaWQ9e25vcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBkYXRlTGF5ZXJMYWJlbD17bm9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGVFbmFibGVDb25maWc9e25vcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHVwbGljYXRlTGF5ZXI9e25vcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlTGF5ZXI9e25vcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyVHlwZT17YWN0aXZlTGF5ZXIudHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbG93RHVwbGljYXRlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRHJhZ05Ecm9wRW5hYmxlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ092ZXJsYXk+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L0RuZENvbnRleHQ+XG4gICAgICAgICAgICAgICAgICB7aXNFeHBvcnRpbmdJbWFnZSAmJiA8UGxvdENvbnRhaW5lciB7Li4ucGxvdENvbnRhaW5lckZpZWxkc30gLz59XG4gICAgICAgICAgICAgICAgICB7LyogMSBnZW9jb2Rlcjogc2luZ2xlIG1vZGUgT1Igc3BsaXQgbW9kZSBhbmQgc3luY2VkIHZpZXdwb3J0cyAqL31cbiAgICAgICAgICAgICAgICAgIHshaXNWaWV3cG9ydERpc2pvaW50ZWQodGhpcy5wcm9wcykgJiYgaW50ZXJhY3Rpb25Db25maWcuZ2VvY29kZXIuZW5hYmxlZCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxHZW9Db2RlclBhbmVsIHsuLi5nZW9Db2RlclBhbmVsRmllbGRzfSBpbmRleD17MH0gdW5zeW5jZWRWaWV3cG9ydHM9e2ZhbHNlfSAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHsvKiAyIGdlb2NvZGVyczogc3BsaXQgbW9kZSBhbmQgdW5zeW5jZWQgdmlld3BvcnRzICovfVxuICAgICAgICAgICAgICAgICAge2lzVmlld3BvcnREaXNqb2ludGVkKHRoaXMucHJvcHMpICYmXG4gICAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9uQ29uZmlnLmdlb2NvZGVyLmVuYWJsZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgbWFwQ29udGFpbmVycy5tYXAoKF9tYXBDb250YWluZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEdlb0NvZGVyUGFuZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uZ2VvQ29kZXJQYW5lbEZpZWxkc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVuc3luY2VkVmlld3BvcnRzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPEJvdHRvbVdpZGdldE91dGVyIGFic29sdXRlPXshaGFzUG9ydGFibGVXaWR0aChicmVha1BvaW50VmFsdWVzKX0+XG4gICAgICAgICAgICAgICAgICAgIDxCb3R0b21XaWRnZXRcbiAgICAgICAgICAgICAgICAgICAgICByb290UmVmPXt0aGlzLmJvdHRvbVdpZGdldFJlZn1cbiAgICAgICAgICAgICAgICAgICAgICB7Li4uYm90dG9tV2lkZ2V0RmllbGRzfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclc9e2RpbWVuc2lvbnMud2lkdGh9XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWU9e3RoZW1lfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9Cb3R0b21XaWRnZXRPdXRlcj5cbiAgICAgICAgICAgICAgICAgIDxNb2RhbENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICB7Li4ubW9kYWxDb250YWluZXJGaWVsZHN9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lclc9e2RpbWVuc2lvbnMud2lkdGh9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckg9e2RpbWVuc2lvbnMuaGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0dsb2JhbFN0eWxlPlxuICAgICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgICA8L0ludGxQcm92aWRlcj5cbiAgICAgICAgICA8L0ZlYXR1cmVGbGFnc0NvbnRleHRQcm92aWRlcj5cbiAgICAgICAgPC9Sb290Q29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGtlcGxlckdsQ29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1ha2VNYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhUaGVtZShLZXBsZXJHTCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlOiBLZXBsZXJHbFN0YXRlLCBwcm9wczogS2VwbGVyR0xQcm9wcykge1xuICByZXR1cm4ge1xuICAgIC4uLnByb3BzLFxuICAgIHZpc1N0YXRlOiBzdGF0ZS52aXNTdGF0ZSxcbiAgICBtYXBTdHlsZTogc3RhdGUubWFwU3R5bGUsXG4gICAgbWFwU3RhdGU6IHN0YXRlLm1hcFN0YXRlLFxuICAgIHVpU3RhdGU6IHN0YXRlLnVpU3RhdGUsXG4gICAgcHJvdmlkZXJTdGF0ZTogc3RhdGUucHJvdmlkZXJTdGF0ZVxuICB9O1xufVxuXG5jb25zdCBkZWZhdWx0VXNlckFjdGlvbnMgPSB7fTtcblxuY29uc3QgZ2V0RGlzcGF0Y2ggPSAoZGlzcGF0Y2gsIHByb3BzKSA9PiBkaXNwYXRjaDtcbmNvbnN0IGdldFVzZXJBY3Rpb25zID0gKGRpc3BhdGNoLCBwcm9wcykgPT4gcHJvcHMuYWN0aW9ucyB8fCBkZWZhdWx0VXNlckFjdGlvbnM7XG5cbi8qKiBAdHlwZSB7KCkgPT4gaW1wb3J0KCdyZXNlbGVjdCcpLk91dHB1dFBhcmFtZXRyaWNTZWxlY3RvcjxhbnksIGFueSwgYW55LCBhbnk+fSAqL1xuZnVuY3Rpb24gbWFrZUdldEFjdGlvbkNyZWF0b3JzKCkge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoW2dldERpc3BhdGNoLCBnZXRVc2VyQWN0aW9uc10sIChkaXNwYXRjaCwgdXNlckFjdGlvbnMpID0+IHtcbiAgICBjb25zdCBbdmlzU3RhdGVBY3Rpb25zLCBtYXBTdGF0ZUFjdGlvbnMsIG1hcFN0eWxlQWN0aW9ucywgdWlTdGF0ZUFjdGlvbnMsIHByb3ZpZGVyQWN0aW9uc10gPSBbXG4gICAgICBWaXNTdGF0ZUFjdGlvbnMsXG4gICAgICBNYXBTdGF0ZUFjdGlvbnMsXG4gICAgICBNYXBTdHlsZUFjdGlvbnMsXG4gICAgICBVSVN0YXRlQWN0aW9ucyxcbiAgICAgIFByb3ZpZGVyQWN0aW9uc1xuICAgIF0ubWFwKGFjdGlvbnMgPT4gYmluZEFjdGlvbkNyZWF0b3JzKG1lcmdlQWN0aW9ucyhhY3Rpb25zLCB1c2VyQWN0aW9ucyksIGRpc3BhdGNoKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmlzU3RhdGVBY3Rpb25zLFxuICAgICAgbWFwU3RhdGVBY3Rpb25zLFxuICAgICAgbWFwU3R5bGVBY3Rpb25zLFxuICAgICAgdWlTdGF0ZUFjdGlvbnMsXG4gICAgICBwcm92aWRlckFjdGlvbnMsXG4gICAgICBkaXNwYXRjaFxuICAgIH07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBtYWtlTWFwRGlzcGF0Y2hUb1Byb3BzKCkge1xuICBjb25zdCBnZXRBY3Rpb25DcmVhdG9ycyA9IG1ha2VHZXRBY3Rpb25DcmVhdG9ycygpO1xuICBjb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3QgZ3JvdXBlZEFjdGlvbkNyZWF0b3JzID0gZ2V0QWN0aW9uQ3JlYXRvcnMoZGlzcGF0Y2gsIG93blByb3BzKTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5ncm91cGVkQWN0aW9uQ3JlYXRvcnMsXG4gICAgICBkaXNwYXRjaFxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIG1hcERpc3BhdGNoVG9Qcm9wcztcbn1cblxuLyoqXG4gKiBPdmVycmlkZSBkZWZhdWx0IGtlcGxlci5nbCBhY3Rpb25zIHdpdGggdXNlciBkZWZpbmVkIGFjdGlvbnMgdXNpbmcgdGhlIHNhbWUga2V5XG4gKi9cbmZ1bmN0aW9uIG1lcmdlQWN0aW9ucyhhY3Rpb25zLCB1c2VyQWN0aW9ucykge1xuICBjb25zdCBvdmVycmlkZXMgPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgaW4gdXNlckFjdGlvbnMpIHtcbiAgICBpZiAodXNlckFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBhY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIG92ZXJyaWRlc1trZXldID0gdXNlckFjdGlvbnNba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gey4uLmFjdGlvbnMsIC4uLm92ZXJyaWRlc307XG59XG5cbmV4cG9ydCBkZWZhdWx0IEtlcGxlckdsRmFjdG9yeTtcbiJdfQ==