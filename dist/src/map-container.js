"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MapContainerFactory;
exports.Attribution = exports.Droppable = exports.isSplitSelector = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactMapGl = require("react-map-gl");

var _react2 = _interopRequireDefault(require("@deck.gl/react"));

var _reselect = require("reselect");

var _core = require("@dnd-kit/core");

var _mapPopover = _interopRequireDefault(require("./map/map-popover"));

var _mapControl = _interopRequireDefault(require("./map/map-control"));

var _styledComponents2 = require("./common/styled-components");

var _editor = _interopRequireDefault(require("./editor/editor"));

var _layers = require("@kepler.gl/layers");

var _utils = require("@kepler.gl/utils");

var _styles = require("@kepler.gl/styles");

var _constants = require("@kepler.gl/constants");

var _errorBoundary = _interopRequireDefault(require("./common/error-boundary"));

var _localization = require("@kepler.gl/localization");

var _core2 = require("@deck.gl/core");

var _reducers = require("@kepler.gl/reducers");

var _templateObject, _templateObject2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/** @type {{[key: string]: React.CSSProperties}} */
var MAP_STYLE = {
  container: {
    display: 'inline-block',
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  top: {
    position: 'absolute',
    top: '0px',
    pointerEvents: 'none',
    width: '100%',
    height: '100%'
  }
};
var LOCALE_CODES_ARRAY = Object.keys(_localization.LOCALE_CODES);
var StyledMap = (0, _styledComponents["default"])(_styledComponents2.StyledMapContainer)(function (_ref) {
  var _ref$mixBlendMode = _ref.mixBlendMode,
      mixBlendMode = _ref$mixBlendMode === void 0 ? 'normal' : _ref$mixBlendMode;
  return "\n  .overlays {\n    mix-blend-mode: ".concat(mixBlendMode, ";\n  };\n");
});
var MAPBOXGL_STYLE_UPDATE = 'style.load';
var MAPBOXGL_RENDER = 'render';

var nop = function nop() {};

var MapboxLogo = function MapboxLogo() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "attrition-logo"
  }, "Basemap by:", /*#__PURE__*/_react["default"].createElement("a", {
    className: "mapboxgl-ctrl-logo",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://www.mapbox.com/",
    "aria-label": "Mapbox logo"
  }));
};

var StyledDroppable = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  pointer-events: none;\n  z-index: 1;\n"])), function (_ref2) {
  var isOver = _ref2.isOver;
  return isOver ? 'rgba(128,128,128,0.2)' : 'none';
});

var isSplitSelector = function isSplitSelector(props) {
  return props.visState.splitMaps && props.visState.splitMaps.length > 1;
};

exports.isSplitSelector = isSplitSelector;

var Droppable = function Droppable(_ref3) {
  var containerId = _ref3.containerId;

  var _useDroppable = (0, _core.useDroppable)({
    id: containerId
  }),
      isOver = _useDroppable.isOver,
      setNodeRef = _useDroppable.setNodeRef;

  return /*#__PURE__*/_react["default"].createElement(StyledDroppable, {
    ref: setNodeRef,
    isOver: isOver
  });
};

exports.Droppable = Droppable;

var StyledDatasetAttributionsContainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  max-width: ", ";\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  color: ", ";\n  margin-right: 2px;\n  line-height: ", ";\n  :hover {\n    white-space: inherit;\n  }\n"])), function (props) {
  return props.isPalm ? '130px' : '180px';
}, function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.isPalm ? '1em' : '1.4em';
});

var DatasetAttributions = function DatasetAttributions(_ref4) {
  var datasetAttributions = _ref4.datasetAttributions,
      isPalm = _ref4.isPalm;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, datasetAttributions !== null && datasetAttributions !== void 0 && datasetAttributions.length ? /*#__PURE__*/_react["default"].createElement(StyledDatasetAttributionsContainer, {
    isPalm: isPalm
  }, datasetAttributions.map(function (ds, idx) {
    return /*#__PURE__*/_react["default"].createElement("a", {
      href: ds.url,
      target: "_blank",
      rel: "noopener noreferrer",
      key: "".concat(ds.title, "_").concat(idx)
    }, ds.title, idx !== datasetAttributions.length - 1 ? ', ' : null);
  })) : null);
};

var Attribution = function Attribution(_ref5) {
  var _ref5$showMapboxLogo = _ref5.showMapboxLogo,
      showMapboxLogo = _ref5$showMapboxLogo === void 0 ? true : _ref5$showMapboxLogo,
      _ref5$showOsmBasemapA = _ref5.showOsmBasemapAttribution,
      showOsmBasemapAttribution = _ref5$showOsmBasemapA === void 0 ? false : _ref5$showOsmBasemapA,
      datasetAttributions = _ref5.datasetAttributions;
  var isPalm = (0, _utils.hasMobileWidth)(_styles.breakPointValues);
  var memoizedComponents = (0, _react.useMemo)(function () {
    if (!showMapboxLogo) {
      return /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledAttrbution, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.EndHorizontalFlexbox, null, /*#__PURE__*/_react["default"].createElement(DatasetAttributions, {
        datasetAttributions: datasetAttributions,
        isPalm: isPalm
      }), showOsmBasemapAttribution ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "attrition-link"
      }, datasetAttributions !== null && datasetAttributions !== void 0 && datasetAttributions.length ? /*#__PURE__*/_react["default"].createElement("span", {
        className: "pipe-separator"
      }, "|") : null, /*#__PURE__*/_react["default"].createElement("a", {
        href: "http://www.openstreetmap.org/copyright",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "\xA9 OpenStreetMap")) : null));
    }

    return /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledAttrbution, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.EndHorizontalFlexbox, null, /*#__PURE__*/_react["default"].createElement(DatasetAttributions, {
      datasetAttributions: datasetAttributions,
      isPalm: isPalm
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "attrition-link"
    }, datasetAttributions !== null && datasetAttributions !== void 0 && datasetAttributions.length ? /*#__PURE__*/_react["default"].createElement("span", {
      className: "pipe-separator"
    }, "|") : null, isPalm ? /*#__PURE__*/_react["default"].createElement(MapboxLogo, null) : null, /*#__PURE__*/_react["default"].createElement("a", {
      href: "https://kepler.gl/policy/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "\xA9 kepler.gl |", ' '), /*#__PURE__*/_react["default"].createElement("a", {
      href: "https://www.mapbox.com/about/maps/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "\xA9 Mapbox |", ' '), /*#__PURE__*/_react["default"].createElement("a", {
      href: "https://www.mapbox.com/map-feedback/",
      target: "_blank",
      rel: "noopener noreferrer"
    }, /*#__PURE__*/_react["default"].createElement("strong", null, "Improve this map "), !isPalm ? /*#__PURE__*/_react["default"].createElement("strong", null, " | ") : null), !isPalm ? /*#__PURE__*/_react["default"].createElement(MapboxLogo, null) : null)));
  }, [showMapboxLogo, showOsmBasemapAttribution, datasetAttributions, isPalm]);
  return memoizedComponents;
};

exports.Attribution = Attribution;
MapContainerFactory.deps = [_mapPopover["default"], _mapControl["default"], _editor["default"]];

function MapContainerFactory(MapPopover, MapControl, Editor) {
  var MapContainer = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(MapContainer, _Component);

    var _super = _createSuper(MapContainer);

    function MapContainer(_props) {
      var _this;

      (0, _classCallCheck2["default"])(this, MapContainer);
      _this = _super.call(this, _props);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "displayName", 'MapContainer');
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        // Determines whether attribution should be visible based the result of loading the map style
        showMapboxAttribution: true
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_deck", null);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_map", null);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_ref", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_deckGLErrorsElapsed", {});
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "previousLayers", {// [layers.id]: mapboxLayerConfig
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleResize", function (dimensions) {
        var _this$props = _this.props,
            primary = _this$props.primary,
            index = _this$props.index;

        if (primary) {
          var mapStateActions = _this.props.mapStateActions;

          if (dimensions && dimensions.width > 0 && dimensions.height > 0) {
            mapStateActions.updateMap(dimensions, index);
          }
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layersSelector", function (props) {
        return props.visState.layers;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerDataSelector", function (props) {
        return props.visState.layerData;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "splitMapSelector", function (props) {
        return props.visState.splitMaps;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "splitMapIndexSelector", function (props) {
        return props.index;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapLayersSelector", (0, _reselect.createSelector)(_this.splitMapSelector, _this.splitMapIndexSelector, _utils.getMapLayersFromSplitMaps));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerOrderSelector", function (props) {
        return props.visState.layerOrder;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layersToRenderSelector", (0, _reselect.createSelector)(_this.layersSelector, _this.layerDataSelector, _this.mapLayersSelector, _reducers.prepareLayersToRender));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layersForDeckSelector", (0, _reselect.createSelector)(_this.layersSelector, _this.layerDataSelector, _reducers.prepareLayersForDeck));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filtersSelector", function (props) {
        return props.visState.filters;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "polygonFiltersSelector", (0, _reselect.createSelector)(_this.filtersSelector, function (filters) {
        return filters.filter(function (f) {
          return f.type === _constants.FILTER_TYPES.polygon && f.enabled !== false;
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "featuresSelector", function (props) {
        return props.visState.editor.features;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectedFeatureSelector", function (props) {
        return props.visState.editor.selectedFeature;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "featureCollectionSelector", (0, _reselect.createSelector)(_this.polygonFiltersSelector, _this.featuresSelector, function (polygonFilters, features) {
        return {
          type: 'FeatureCollection',
          features: features.concat(polygonFilters.map(function (f) {
            return f.value;
          }))
        };
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectedPolygonIndexSelector", (0, _reselect.createSelector)(_this.featureCollectionSelector, _this.selectedFeatureSelector, function (collection, selectedFeature) {
        return collection.features.findIndex(function (f) {
          return f.id === (selectedFeature === null || selectedFeature === void 0 ? void 0 : selectedFeature.id);
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectedFeatureIndexArraySelector", (0, _reselect.createSelector)(function (value) {
        return value;
      }, function (value) {
        return value < 0 ? [] : [value];
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapboxLayersSelector", (0, _reselect.createSelector)(_this.layersSelector, _this.layerDataSelector, _this.layerOrderSelector, _this.layersToRenderSelector, _layers.generateMapboxLayers));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapStyleTypeSelector", function (props) {
        return props.mapStyle.styleType;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapStyleBackgroundColorSelector", function (props) {
        return props.mapStyle.backgroundColor;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "styleSelector", (0, _reselect.createSelector)(_this.mapStyleTypeSelector, _this.mapStyleBackgroundColorSelector, function (styleType, backgroundColor) {
        return _objectSpread(_objectSpread({}, MAP_STYLE.container), styleType === _constants.NO_MAP_ID ? {
          backgroundColor: (0, _utils.rgbToHex)(backgroundColor)
        } : {});
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onCloseMapPopover", function () {
        _this.props.visStateActions.onLayerClick(null);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onLayerHover", function (idx, info) {
        _this.props.visStateActions.onLayerHover(info);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onLayerSetDomain", function (idx, colorDomain) {
        _this.props.visStateActions.layerConfigChange(_this.props.visState.layers[idx], {
          colorDomain: colorDomain
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleMapToggleLayer", function (layerId) {
        var _this$props2 = _this.props,
            _this$props2$index = _this$props2.index,
            mapIndex = _this$props2$index === void 0 ? 0 : _this$props2$index,
            visStateActions = _this$props2.visStateActions;
        visStateActions.toggleLayerForMap(mapIndex, layerId);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onMapboxStyleUpdate", function (update) {
        // force refresh mapboxgl layers
        _this.previousLayers = {};

        _this._updateMapboxLayers();

        if (update && update.style) {
          // No attributions are needed if the style doesn't reference Mapbox sources
          _this.setState({
            showMapboxAttribution: (0, _utils.isStyleUsingMapboxTiles)(update.style)
          });
        }

        if (typeof _this.props.onMapStyleLoaded === 'function') {
          _this.props.onMapStyleLoaded(_this._map);
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_setMapboxMap", function (mapbox) {
        if (!_this._map && mapbox) {
          _this._map = mapbox.getMap(); // i noticed in certain context we don't access the actual map element

          if (!_this._map) {
            return;
          } // bind mapboxgl event listener


          _this._map.on(MAPBOXGL_STYLE_UPDATE, _this._onMapboxStyleUpdate);

          _this._map.on(MAPBOXGL_RENDER, function () {
            if (typeof _this.props.onMapRender === 'function') {
              _this.props.onMapRender(_this._map);
            }
          });
        }

        if (_this.props.getMapboxRef) {
          // The parent component can gain access to our MapboxGlMap by
          // providing this callback. Note that 'mapbox' will be null when the
          // ref is unset (e.g. when a split map is closed).
          _this.props.getMapboxRef(mapbox, _this.props.index);
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onBeforeRender", function (_ref6) {
        var gl = _ref6.gl;
        (0, _utils.setLayerBlending)(gl, _this.props.visState.layerBlending);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onDeckError", function (error, layer) {
        var errorMessage = (error === null || error === void 0 ? void 0 : error.message) || 'unknown-error';
        var layerMessage = layer !== null && layer !== void 0 && layer.id ? " in ".concat(layer.id, " layer") : '';
        var errorMessageFull = errorMessage === 'WebGL context is lost' ? 'Your GPU was disconnected. This can happen if your computer goes to sleep. It can also occur for other reasons, such as if you are running too many GPU applications.' : "An error in deck.gl: ".concat(errorMessage).concat(layerMessage, "."); // Throttle error notifications, as React doesn't like too many state changes from here.

        var lastShown = _this._deckGLErrorsElapsed[errorMessageFull];

        if (!lastShown || lastShown < Date.now() - _constants.THROTTLE_NOTIFICATION_TIME) {
          _this._deckGLErrorsElapsed[errorMessageFull] = Date.now(); // Mark layer as invalid

          var extraLayerMessage = '';
          var visStateActions = _this.props.visStateActions;

          if (layer) {
            var _topMostLayer$props;

            var topMostLayer = layer;

            while (topMostLayer.parent) {
              topMostLayer = topMostLayer.parent;
            }

            if ((_topMostLayer$props = topMostLayer.props) !== null && _topMostLayer$props !== void 0 && _topMostLayer$props.id) {
              visStateActions.layerSetIsValid(topMostLayer, false);
              extraLayerMessage = 'The layer has been disabled and highlighted.';
            }
          } // Create new error notification or update existing one with same id.
          // Update is required to preserve the order of notifications as they probably are going to "jump" based on order of errors.


          var uiStateActions = _this.props.uiStateActions;
          uiStateActions.addNotification((0, _utils.errorNotification)({
            message: "".concat(errorMessageFull, " ").concat(extraLayerMessage),
            id: errorMessageFull // treat the error message as id

          }));
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onViewportChange", function (_ref7) {
        var viewState = _ref7.viewState;

        if (_this.props.isExport) {
          // Image export map shouldn't be interactive (otherwise this callback can
          // lead to inadvertent changes to the state of the main map)
          return;
        }

        (0, _utils.onViewPortChange)(viewState, _this.props.mapStateActions.updateMap, _this.props.onViewStateChange, _this.props.primary, _this.props.index);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleMapControl", function (panelId) {
        var _this$props3 = _this.props,
            index = _this$props3.index,
            uiStateActions = _this$props3.uiStateActions;
        uiStateActions.toggleMapControl(panelId, Number(index));
      });
      return _this;
    }

    (0, _createClass2["default"])(MapContainer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (!this._ref.current) {
          return;
        }

        (0, _utils.observeDimensions)(this._ref.current, this._handleResize);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        // unbind mapboxgl event listener
        if (this._map) {
          var _this$_map, _this$_map2;

          (_this$_map = this._map) === null || _this$_map === void 0 ? void 0 : _this$_map.off(MAPBOXGL_STYLE_UPDATE, nop);
          (_this$_map2 = this._map) === null || _this$_map2 === void 0 ? void 0 : _this$_map2.off(MAPBOXGL_RENDER, nop);
        }

        if (!this._ref.current) {
          return;
        }

        (0, _utils.unobserveDimensions)(this._ref.current);
      }
    }, {
      key: "_onDeckInitialized",
      value: function _onDeckInitialized(gl) {
        if (this.props.onDeckInitialized) {
          this.props.onDeckInitialized(this._deck, gl);
        }
      }
    }, {
      key: "_renderMapPopover",
      value:
      /* component render functions */

      /* eslint-disable complexity */
      function _renderMapPopover() {
        var _this$props$visState$;

        // this check is for limiting the display of the `<MapPopover>` to the `<MapContainer>` the user is interacting with
        // the DeckGL onHover event handler adds a `mapIndex` property which is available in the `hoverInfo` object of `visState`
        if (this.props.index !== ((_this$props$visState$ = this.props.visState.hoverInfo) === null || _this$props$visState$ === void 0 ? void 0 : _this$props$visState$.mapIndex)) {
          return null;
        } // TODO: move this into reducer so it can be tested


        var _this$props4 = this.props,
            mapState = _this$props4.mapState,
            _this$props4$visState = _this$props4.visState,
            hoverInfo = _this$props4$visState.hoverInfo,
            clicked = _this$props4$visState.clicked,
            datasets = _this$props4$visState.datasets,
            interactionConfig = _this$props4$visState.interactionConfig,
            layers = _this$props4$visState.layers,
            _this$props4$visState2 = _this$props4$visState.mousePos,
            mousePosition = _this$props4$visState2.mousePosition,
            coordinate = _this$props4$visState2.coordinate,
            pinned = _this$props4$visState2.pinned;
        var layersToRender = this.layersToRenderSelector(this.props);

        if (!mousePosition || !interactionConfig.tooltip) {
          return null;
        }

        var layerHoverProp = (0, _reducers.getLayerHoverProp)({
          interactionConfig: interactionConfig,
          hoverInfo: hoverInfo,
          layers: layers,
          layersToRender: layersToRender,
          datasets: datasets
        });
        var compareMode = interactionConfig.tooltip.config ? interactionConfig.tooltip.config.compareMode : false;
        var pinnedPosition = {};
        var layerPinnedProp = null;

        if (pinned || clicked) {
          // project lnglat to screen so that tooltip follows the object on zoom
          var _viewport = (0, _utils.getViewportFromMapState)(mapState);

          var lngLat = clicked ? clicked.coordinate : pinned.coordinate;
          pinnedPosition = this._getHoverXY(_viewport, lngLat);
          layerPinnedProp = (0, _reducers.getLayerHoverProp)({
            interactionConfig: interactionConfig,
            hoverInfo: clicked,
            layers: layers,
            layersToRender: layersToRender,
            datasets: datasets
          });

          if (layerHoverProp && layerPinnedProp) {
            layerHoverProp.primaryData = layerPinnedProp.data;
            layerHoverProp.compareType = interactionConfig.tooltip.config.compareType;
          }
        }

        var commonProp = {
          onClose: this._onCloseMapPopover,
          zoom: mapState.zoom,
          container: this._deck ? this._deck.canvas : undefined
        };
        return /*#__PURE__*/_react["default"].createElement(_errorBoundary["default"], null, layerPinnedProp && /*#__PURE__*/_react["default"].createElement(MapPopover, (0, _extends2["default"])({}, pinnedPosition, commonProp, {
          layerHoverProp: layerPinnedProp,
          coordinate: interactionConfig.coordinate.enabled && (pinned || {}).coordinate,
          frozen: true,
          isBase: compareMode,
          onSetFeatures: this.props.visStateActions.setFeatures,
          setSelectedFeature: this.props.visStateActions.setSelectedFeature,
          featureCollection: this.featureCollectionSelector(this.props)
        })), layerHoverProp && (!layerPinnedProp || compareMode) && /*#__PURE__*/_react["default"].createElement(MapPopover, (0, _extends2["default"])({
          x: mousePosition[0],
          y: mousePosition[1]
        }, commonProp, {
          layerHoverProp: layerHoverProp,
          frozen: false,
          coordinate: interactionConfig.coordinate.enabled && coordinate,
          onSetFeatures: this.props.visStateActions.setFeatures,
          setSelectedFeature: this.props.visStateActions.setSelectedFeature,
          featureCollection: this.featureCollectionSelector(this.props)
        })));
      }
      /* eslint-enable complexity */

    }, {
      key: "_getHoverXY",
      value: function _getHoverXY(viewport, lngLat) {
        var screenCoord = !viewport || !lngLat ? null : viewport.project(lngLat);
        return screenCoord && {
          x: screenCoord[0],
          y: screenCoord[1]
        };
      }
    }, {
      key: "_renderDeckOverlay",
      value: function _renderDeckOverlay(layersForDeck) {
        var _this2 = this;

        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          primaryMap: false
        };
        var _this$props5 = this.props,
            mapState = _this$props5.mapState,
            mapStyle = _this$props5.mapStyle,
            visState = _this$props5.visState,
            visStateActions = _this$props5.visStateActions,
            mapboxApiAccessToken = _this$props5.mapboxApiAccessToken,
            mapboxApiUrl = _this$props5.mapboxApiUrl,
            deckGlProps = _this$props5.deckGlProps,
            index = _this$props5.index,
            mapControls = _this$props5.mapControls,
            theme = _this$props5.theme;
        var hoverInfo = visState.hoverInfo,
            editor = visState.editor;
        var primaryMap = options.primaryMap; // disable double click zoom when editor is in any draw mode

        var mapDraw = mapControls.mapDraw;

        var _ref8 = mapDraw || {},
            _ref8$active = _ref8.active,
            editorMenuActive = _ref8$active === void 0 ? false : _ref8$active;

        var isEditorDrawingMode = _layers.EditorLayerUtils.isDrawingActive(editorMenuActive, editor.mode);

        var viewport = (0, _utils.getViewportFromMapState)(mapState);
        var editorFeatureSelectedIndex = this.selectedPolygonIndexSelector(this.props);
        var setFeatures = visStateActions.setFeatures,
            onLayerClick = visStateActions.onLayerClick,
            setSelectedFeature = visStateActions.setSelectedFeature;
        var deckGlLayers = (0, _reducers.computeDeckLayers)({
          visState: visState,
          mapState: mapState,
          mapStyle: mapStyle
        }, {
          mapIndex: index,
          primaryMap: primaryMap,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapboxApiUrl: mapboxApiUrl,
          layersForDeck: layersForDeck,
          editorInfo: primaryMap ? {
            editor: editor,
            editorMenuActive: editorMenuActive,
            onSetFeatures: setFeatures,
            setSelectedFeature: setSelectedFeature,
            featureCollection: this.featureCollectionSelector(this.props),
            selectedFeatureIndexes: this.selectedFeatureIndexArraySelector(editorFeatureSelectedIndex),
            viewport: viewport
          } : undefined
        }, {
          onLayerHover: this._onLayerHover,
          onSetLayerDomain: this._onLayerSetDomain
        }, deckGlProps);
        var extraDeckParams = {};

        if (primaryMap) {
          extraDeckParams.getTooltip = function (info) {
            return _layers.EditorLayerUtils.getTooltip(info, {
              editorMenuActive: editorMenuActive,
              editor: editor,
              theme: theme
            });
          };

          extraDeckParams.getCursor = function (_ref9) {
            var isDragging = _ref9.isDragging;

            var editorCursor = _layers.EditorLayerUtils.getCursor({
              editorMenuActive: editorMenuActive,
              editor: editor,
              hoverInfo: hoverInfo
            });

            if (editorCursor) return editorCursor;
            if (isDragging) return 'grabbing';
            if (hoverInfo !== null && hoverInfo !== void 0 && hoverInfo.layer) return 'pointer';
            return 'grab';
          };
        }

        var views = deckGlProps !== null && deckGlProps !== void 0 && deckGlProps.views ? deckGlProps === null || deckGlProps === void 0 ? void 0 : deckGlProps.views() : new _core2.MapView({
          legacyMeterSizes: true
        });
        return /*#__PURE__*/_react["default"].createElement("div", {
          onMouseMove: primaryMap ? // @ts-expect-error should be deck viewport
          function (event) {
            return _this2.props.visStateActions.onMouseMove((0, _utils.normalizeEvent)(event, viewport));
          } : undefined
        }, /*#__PURE__*/_react["default"].createElement(_react2["default"], (0, _extends2["default"])({
          id: "default-deckgl-overlay"
        }, deckGlProps, {
          views: views,
          layers: deckGlLayers,
          controller: {
            doubleClickZoom: !isEditorDrawingMode
          },
          viewState: mapState,
          pickingRadius: _constants.DEFAULT_PICKING_RADIUS,
          onBeforeRender: this._onBeforeRender,
          onViewStateChange: this._onViewportChange
        }, extraDeckParams, {
          onHover: function onHover(data, event) {
            var res = _layers.EditorLayerUtils.onHover(data, {
              editorMenuActive: editorMenuActive,
              editor: editor,
              hoverInfo: hoverInfo
            });

            if (res) return; // add `mapIndex` property which will end up in the the `hoverInfo` object of `visState`
            // this is for limiting the display of the `<MapPopover>` to the `<MapContainer>` the user is interacting with
            // @ts-ignore (does not fail with local yarn-test)

            data.mapIndex = index;
            visStateActions.onLayerHover(data);
          },
          onClick: function onClick(data, event) {
            // @ts-ignore
            (0, _utils.normalizeEvent)(event.srcEvent, viewport);

            var res = _layers.EditorLayerUtils.onClick(data, event, {
              editorMenuActive: editorMenuActive,
              editor: editor,
              onLayerClick: onLayerClick,
              setSelectedFeature: setSelectedFeature,
              mapIndex: index
            });

            if (res) return;
            visStateActions.onLayerClick(data);
          },
          onError: this._onDeckError,
          ref: function ref(comp) {
            // @ts-ignore
            if (comp && comp.deck && !_this2._deck) {
              // @ts-ignore
              _this2._deck = comp.deck;
            }
          },
          onWebGLInitialized: function onWebGLInitialized(gl) {
            return _this2._onDeckInitialized(gl);
          }
        })));
      }
    }, {
      key: "_updateMapboxLayers",
      value: function _updateMapboxLayers() {
        var mapboxLayers = this.mapboxLayersSelector(this.props);

        if (!Object.keys(mapboxLayers).length && !Object.keys(this.previousLayers).length) {
          return;
        }

        (0, _layers.updateMapboxLayers)(this._map, mapboxLayers, this.previousLayers);
        this.previousLayers = mapboxLayers;
      }
    }, {
      key: "_renderMapboxOverlays",
      value: function _renderMapboxOverlays() {
        if (this._map && this._map.isStyleLoaded()) {
          this._updateMapboxLayers();
        }
      }
    }, {
      key: "_renderMap",
      value:
      /* eslint-disable complexity */
      function _renderMap() {
        var _mapStyle$mapStyles, _mapStyle$bottomMapSt;

        var _this$props6 = this.props,
            visState = _this$props6.visState,
            mapState = _this$props6.mapState,
            mapStyle = _this$props6.mapStyle,
            mapStateActions = _this$props6.mapStateActions,
            _this$props6$MapCompo = _this$props6.MapComponent,
            MapComponent = _this$props6$MapCompo === void 0 ? _reactMapGl.StaticMap : _this$props6$MapCompo,
            mapboxApiAccessToken = _this$props6.mapboxApiAccessToken,
            mapboxApiUrl = _this$props6.mapboxApiUrl,
            mapControls = _this$props6.mapControls,
            isExport = _this$props6.isExport,
            locale = _this$props6.locale,
            uiStateActions = _this$props6.uiStateActions,
            visStateActions = _this$props6.visStateActions,
            index = _this$props6.index,
            primary = _this$props6.primary,
            bottomMapContainerProps = _this$props6.bottomMapContainerProps,
            topMapContainerProps = _this$props6.topMapContainerProps,
            theme = _this$props6.theme,
            _this$props6$datasetA = _this$props6.datasetAttributions,
            datasetAttributions = _this$props6$datasetA === void 0 ? [] : _this$props6$datasetA,
            _this$props6$containe = _this$props6.containerId,
            containerId = _this$props6$containe === void 0 ? 0 : _this$props6$containe;
        var layers = visState.layers,
            datasets = visState.datasets,
            editor = visState.editor,
            interactionConfig = visState.interactionConfig;
        var layersToRender = this.layersToRenderSelector(this.props);
        var layersForDeck = this.layersForDeckSelector(this.props); // Current style can be a custom style, from which we pull the mapbox API acccess token

        var currentStyle = (_mapStyle$mapStyles = mapStyle.mapStyles) === null || _mapStyle$mapStyles === void 0 ? void 0 : _mapStyle$mapStyles[mapStyle.styleType];

        var mapProps = _objectSpread(_objectSpread({}, mapState), {}, {
          width: '100%',
          height: '100%',
          preserveDrawingBuffer: true,
          mapboxApiAccessToken: (currentStyle === null || currentStyle === void 0 ? void 0 : currentStyle.accessToken) || mapboxApiAccessToken,
          mapboxApiUrl: mapboxApiUrl,
          transformRequest: this.props.transformRequest || _utils.transformRequest
        });

        var hasGeocoderLayer = Boolean(layers.find(function (l) {
          return l.id === _constants.GEOCODER_LAYER_ID;
        }));
        var isSplit = Boolean(mapState.isSplit);
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(MapControl, {
          mapState: mapState,
          datasets: datasets,
          availableLocales: LOCALE_CODES_ARRAY,
          dragRotate: mapState.dragRotate,
          isSplit: isSplit,
          primary: primary,
          isExport: isExport,
          layers: layers,
          layersToRender: layersToRender,
          mapIndex: index,
          mapControls: mapControls,
          readOnly: this.props.readOnly,
          scale: mapState.scale || 1,
          top: interactionConfig.geocoder && interactionConfig.geocoder.enabled ? theme.mapControlTop : 0,
          editor: editor,
          locale: locale,
          onTogglePerspective: mapStateActions.togglePerspective,
          onToggleSplitMap: mapStateActions.toggleSplitMap,
          onMapToggleLayer: this._handleMapToggleLayer,
          onToggleMapControl: this._toggleMapControl,
          onToggleSplitMapViewport: mapStateActions.toggleSplitMapViewport,
          onSetEditorMode: visStateActions.setEditorMode,
          onSetLocale: uiStateActions.setLocale,
          onToggleEditorVisibility: visStateActions.toggleEditorVisibility,
          mapHeight: mapState.height
        }), isSplitSelector(this.props) && /*#__PURE__*/_react["default"].createElement(Droppable, {
          containerId: containerId
        }), /*#__PURE__*/_react["default"].createElement(MapComponent, (0, _extends2["default"])({
          key: "bottom"
        }, mapProps, {
          mapStyle: (_mapStyle$bottomMapSt = mapStyle.bottomMapStyle) !== null && _mapStyle$bottomMapSt !== void 0 ? _mapStyle$bottomMapSt : _constants.EMPTY_MAPBOX_STYLE
        }, bottomMapContainerProps, {
          ref: this._setMapboxMap
        }), this._renderDeckOverlay(layersForDeck, {
          primaryMap: true
        }), this._renderMapboxOverlays(), /*#__PURE__*/_react["default"].createElement(Editor, {
          index: index,
          datasets: datasets,
          editor: editor,
          filters: this.polygonFiltersSelector(this.props),
          layers: layers,
          onDeleteFeature: visStateActions.deleteFeature,
          onSelect: visStateActions.setSelectedFeature,
          onTogglePolygonFilter: visStateActions.setPolygonFilterLayer,
          onSetEditorMode: visStateActions.setEditorMode,
          style: {
            pointerEvents: 'all',
            position: 'absolute',
            display: editor.visible ? 'block' : 'none'
          }
        })), mapStyle.topMapStyle || hasGeocoderLayer ? /*#__PURE__*/_react["default"].createElement("div", {
          style: MAP_STYLE.top
        }, /*#__PURE__*/_react["default"].createElement(MapComponent, (0, _extends2["default"])({
          key: "top"
        }, mapProps, {
          mapStyle: mapStyle.topMapStyle
        }, topMapContainerProps), this._renderDeckOverlay((0, _defineProperty2["default"])({}, _constants.GEOCODER_LAYER_ID, hasGeocoderLayer)))) : null, this._renderMapPopover(), this.props.primary ? /*#__PURE__*/_react["default"].createElement(Attribution, {
          showMapboxLogo: this.state.showMapboxAttribution,
          showOsmBasemapAttribution: true,
          datasetAttributions: datasetAttributions
        }) : null);
      }
    }, {
      key: "render",
      value: function render() {
        var visState = this.props.visState;
        return /*#__PURE__*/_react["default"].createElement(StyledMap, {
          ref: this._ref,
          style: this.styleSelector(this.props),
          onContextMenu: function onContextMenu(event) {
            return event.preventDefault();
          },
          mixBlendMode: visState.overlayBlending
        }, this._renderMap());
      }
    }]);
    return MapContainer;
  }(_react.Component);

  (0, _defineProperty2["default"])(MapContainer, "defaultProps", {
    MapComponent: _reactMapGl.StaticMap,
    deckGlProps: {},
    index: 0,
    primary: true
  });
  return (0, _styledComponents.withTheme)(MapContainer);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tYXAtY29udGFpbmVyLnRzeCJdLCJuYW1lcyI6WyJNQVBfU1RZTEUiLCJjb250YWluZXIiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInRvcCIsInBvaW50ZXJFdmVudHMiLCJMT0NBTEVfQ09ERVNfQVJSQVkiLCJPYmplY3QiLCJrZXlzIiwiTE9DQUxFX0NPREVTIiwiU3R5bGVkTWFwIiwiU3R5bGVkTWFwQ29udGFpbmVyIiwibWl4QmxlbmRNb2RlIiwiTUFQQk9YR0xfU1RZTEVfVVBEQVRFIiwiTUFQQk9YR0xfUkVOREVSIiwibm9wIiwiTWFwYm94TG9nbyIsIlN0eWxlZERyb3BwYWJsZSIsInN0eWxlZCIsImRpdiIsImlzT3ZlciIsImlzU3BsaXRTZWxlY3RvciIsInByb3BzIiwidmlzU3RhdGUiLCJzcGxpdE1hcHMiLCJsZW5ndGgiLCJEcm9wcGFibGUiLCJjb250YWluZXJJZCIsImlkIiwic2V0Tm9kZVJlZiIsIlN0eWxlZERhdGFzZXRBdHRyaWJ1dGlvbnNDb250YWluZXIiLCJpc1BhbG0iLCJ0aGVtZSIsImxhYmVsQ29sb3IiLCJEYXRhc2V0QXR0cmlidXRpb25zIiwiZGF0YXNldEF0dHJpYnV0aW9ucyIsIm1hcCIsImRzIiwiaWR4IiwidXJsIiwidGl0bGUiLCJBdHRyaWJ1dGlvbiIsInNob3dNYXBib3hMb2dvIiwic2hvd09zbUJhc2VtYXBBdHRyaWJ1dGlvbiIsImJyZWFrUG9pbnRWYWx1ZXMiLCJtZW1vaXplZENvbXBvbmVudHMiLCJNYXBDb250YWluZXJGYWN0b3J5IiwiZGVwcyIsIk1hcFBvcG92ZXJGYWN0b3J5IiwiTWFwQ29udHJvbEZhY3RvcnkiLCJFZGl0b3JGYWN0b3J5IiwiTWFwUG9wb3ZlciIsIk1hcENvbnRyb2wiLCJFZGl0b3IiLCJNYXBDb250YWluZXIiLCJzaG93TWFwYm94QXR0cmlidXRpb24iLCJkaW1lbnNpb25zIiwicHJpbWFyeSIsImluZGV4IiwibWFwU3RhdGVBY3Rpb25zIiwidXBkYXRlTWFwIiwibGF5ZXJzIiwibGF5ZXJEYXRhIiwic3BsaXRNYXBTZWxlY3RvciIsInNwbGl0TWFwSW5kZXhTZWxlY3RvciIsImdldE1hcExheWVyc0Zyb21TcGxpdE1hcHMiLCJsYXllck9yZGVyIiwibGF5ZXJzU2VsZWN0b3IiLCJsYXllckRhdGFTZWxlY3RvciIsIm1hcExheWVyc1NlbGVjdG9yIiwicHJlcGFyZUxheWVyc1RvUmVuZGVyIiwicHJlcGFyZUxheWVyc0ZvckRlY2siLCJmaWx0ZXJzIiwiZmlsdGVyc1NlbGVjdG9yIiwiZmlsdGVyIiwiZiIsInR5cGUiLCJGSUxURVJfVFlQRVMiLCJwb2x5Z29uIiwiZW5hYmxlZCIsImVkaXRvciIsImZlYXR1cmVzIiwic2VsZWN0ZWRGZWF0dXJlIiwicG9seWdvbkZpbHRlcnNTZWxlY3RvciIsImZlYXR1cmVzU2VsZWN0b3IiLCJwb2x5Z29uRmlsdGVycyIsImNvbmNhdCIsInZhbHVlIiwiZmVhdHVyZUNvbGxlY3Rpb25TZWxlY3RvciIsInNlbGVjdGVkRmVhdHVyZVNlbGVjdG9yIiwiY29sbGVjdGlvbiIsImZpbmRJbmRleCIsImxheWVyT3JkZXJTZWxlY3RvciIsImxheWVyc1RvUmVuZGVyU2VsZWN0b3IiLCJnZW5lcmF0ZU1hcGJveExheWVycyIsIm1hcFN0eWxlIiwic3R5bGVUeXBlIiwiYmFja2dyb3VuZENvbG9yIiwibWFwU3R5bGVUeXBlU2VsZWN0b3IiLCJtYXBTdHlsZUJhY2tncm91bmRDb2xvclNlbGVjdG9yIiwiTk9fTUFQX0lEIiwidmlzU3RhdGVBY3Rpb25zIiwib25MYXllckNsaWNrIiwiaW5mbyIsIm9uTGF5ZXJIb3ZlciIsImNvbG9yRG9tYWluIiwibGF5ZXJDb25maWdDaGFuZ2UiLCJsYXllcklkIiwibWFwSW5kZXgiLCJ0b2dnbGVMYXllckZvck1hcCIsInVwZGF0ZSIsInByZXZpb3VzTGF5ZXJzIiwiX3VwZGF0ZU1hcGJveExheWVycyIsInN0eWxlIiwic2V0U3RhdGUiLCJvbk1hcFN0eWxlTG9hZGVkIiwiX21hcCIsIm1hcGJveCIsImdldE1hcCIsIm9uIiwiX29uTWFwYm94U3R5bGVVcGRhdGUiLCJvbk1hcFJlbmRlciIsImdldE1hcGJveFJlZiIsImdsIiwibGF5ZXJCbGVuZGluZyIsImVycm9yIiwibGF5ZXIiLCJlcnJvck1lc3NhZ2UiLCJtZXNzYWdlIiwibGF5ZXJNZXNzYWdlIiwiZXJyb3JNZXNzYWdlRnVsbCIsImxhc3RTaG93biIsIl9kZWNrR0xFcnJvcnNFbGFwc2VkIiwiRGF0ZSIsIm5vdyIsIlRIUk9UVExFX05PVElGSUNBVElPTl9USU1FIiwiZXh0cmFMYXllck1lc3NhZ2UiLCJ0b3BNb3N0TGF5ZXIiLCJwYXJlbnQiLCJsYXllclNldElzVmFsaWQiLCJ1aVN0YXRlQWN0aW9ucyIsImFkZE5vdGlmaWNhdGlvbiIsInZpZXdTdGF0ZSIsImlzRXhwb3J0Iiwib25WaWV3U3RhdGVDaGFuZ2UiLCJwYW5lbElkIiwidG9nZ2xlTWFwQ29udHJvbCIsIk51bWJlciIsIl9yZWYiLCJjdXJyZW50IiwiX2hhbmRsZVJlc2l6ZSIsIm9mZiIsIm9uRGVja0luaXRpYWxpemVkIiwiX2RlY2siLCJob3ZlckluZm8iLCJtYXBTdGF0ZSIsImNsaWNrZWQiLCJkYXRhc2V0cyIsImludGVyYWN0aW9uQ29uZmlnIiwibW91c2VQb3MiLCJtb3VzZVBvc2l0aW9uIiwiY29vcmRpbmF0ZSIsInBpbm5lZCIsImxheWVyc1RvUmVuZGVyIiwidG9vbHRpcCIsImxheWVySG92ZXJQcm9wIiwiY29tcGFyZU1vZGUiLCJjb25maWciLCJwaW5uZWRQb3NpdGlvbiIsImxheWVyUGlubmVkUHJvcCIsInZpZXdwb3J0IiwibG5nTGF0IiwiX2dldEhvdmVyWFkiLCJwcmltYXJ5RGF0YSIsImRhdGEiLCJjb21wYXJlVHlwZSIsImNvbW1vblByb3AiLCJvbkNsb3NlIiwiX29uQ2xvc2VNYXBQb3BvdmVyIiwiem9vbSIsImNhbnZhcyIsInVuZGVmaW5lZCIsInNldEZlYXR1cmVzIiwic2V0U2VsZWN0ZWRGZWF0dXJlIiwic2NyZWVuQ29vcmQiLCJwcm9qZWN0IiwieCIsInkiLCJsYXllcnNGb3JEZWNrIiwib3B0aW9ucyIsInByaW1hcnlNYXAiLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsIm1hcGJveEFwaVVybCIsImRlY2tHbFByb3BzIiwibWFwQ29udHJvbHMiLCJtYXBEcmF3IiwiYWN0aXZlIiwiZWRpdG9yTWVudUFjdGl2ZSIsImlzRWRpdG9yRHJhd2luZ01vZGUiLCJFZGl0b3JMYXllclV0aWxzIiwiaXNEcmF3aW5nQWN0aXZlIiwibW9kZSIsImVkaXRvckZlYXR1cmVTZWxlY3RlZEluZGV4Iiwic2VsZWN0ZWRQb2x5Z29uSW5kZXhTZWxlY3RvciIsImRlY2tHbExheWVycyIsImVkaXRvckluZm8iLCJvblNldEZlYXR1cmVzIiwiZmVhdHVyZUNvbGxlY3Rpb24iLCJzZWxlY3RlZEZlYXR1cmVJbmRleGVzIiwic2VsZWN0ZWRGZWF0dXJlSW5kZXhBcnJheVNlbGVjdG9yIiwiX29uTGF5ZXJIb3ZlciIsIm9uU2V0TGF5ZXJEb21haW4iLCJfb25MYXllclNldERvbWFpbiIsImV4dHJhRGVja1BhcmFtcyIsImdldFRvb2x0aXAiLCJnZXRDdXJzb3IiLCJpc0RyYWdnaW5nIiwiZWRpdG9yQ3Vyc29yIiwidmlld3MiLCJNYXBWaWV3IiwibGVnYWN5TWV0ZXJTaXplcyIsImV2ZW50Iiwib25Nb3VzZU1vdmUiLCJkb3VibGVDbGlja1pvb20iLCJERUZBVUxUX1BJQ0tJTkdfUkFESVVTIiwiX29uQmVmb3JlUmVuZGVyIiwiX29uVmlld3BvcnRDaGFuZ2UiLCJyZXMiLCJvbkhvdmVyIiwic3JjRXZlbnQiLCJvbkNsaWNrIiwiX29uRGVja0Vycm9yIiwiY29tcCIsImRlY2siLCJfb25EZWNrSW5pdGlhbGl6ZWQiLCJtYXBib3hMYXllcnMiLCJtYXBib3hMYXllcnNTZWxlY3RvciIsImlzU3R5bGVMb2FkZWQiLCJNYXBDb21wb25lbnQiLCJTdGF0aWNNYXAiLCJsb2NhbGUiLCJib3R0b21NYXBDb250YWluZXJQcm9wcyIsInRvcE1hcENvbnRhaW5lclByb3BzIiwibGF5ZXJzRm9yRGVja1NlbGVjdG9yIiwiY3VycmVudFN0eWxlIiwibWFwU3R5bGVzIiwibWFwUHJvcHMiLCJwcmVzZXJ2ZURyYXdpbmdCdWZmZXIiLCJhY2Nlc3NUb2tlbiIsInRyYW5zZm9ybVJlcXVlc3QiLCJoYXNHZW9jb2RlckxheWVyIiwiQm9vbGVhbiIsImZpbmQiLCJsIiwiR0VPQ09ERVJfTEFZRVJfSUQiLCJpc1NwbGl0IiwiZHJhZ1JvdGF0ZSIsInJlYWRPbmx5Iiwic2NhbGUiLCJnZW9jb2RlciIsIm1hcENvbnRyb2xUb3AiLCJ0b2dnbGVQZXJzcGVjdGl2ZSIsInRvZ2dsZVNwbGl0TWFwIiwiX2hhbmRsZU1hcFRvZ2dsZUxheWVyIiwiX3RvZ2dsZU1hcENvbnRyb2wiLCJ0b2dnbGVTcGxpdE1hcFZpZXdwb3J0Iiwic2V0RWRpdG9yTW9kZSIsInNldExvY2FsZSIsInRvZ2dsZUVkaXRvclZpc2liaWxpdHkiLCJib3R0b21NYXBTdHlsZSIsIkVNUFRZX01BUEJPWF9TVFlMRSIsIl9zZXRNYXBib3hNYXAiLCJfcmVuZGVyRGVja092ZXJsYXkiLCJfcmVuZGVyTWFwYm94T3ZlcmxheXMiLCJkZWxldGVGZWF0dXJlIiwic2V0UG9seWdvbkZpbHRlckxheWVyIiwidmlzaWJsZSIsInRvcE1hcFN0eWxlIiwiX3JlbmRlck1hcFBvcG92ZXIiLCJzdGF0ZSIsInN0eWxlU2VsZWN0b3IiLCJwcmV2ZW50RGVmYXVsdCIsIm92ZXJsYXlCbGVuZGluZyIsIl9yZW5kZXJNYXAiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFLQTs7QUFDQTs7QUFDQTs7QUFNQTs7QUFHQTs7QUFRQTs7QUFjQTs7QUFHQTs7QUFTQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBV0E7QUFDQSxJQUFNQSxTQUErQyxHQUFHO0FBQ3REQyxFQUFBQSxTQUFT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UUFBUSxDQUFDbVE7QUFKekIsV0FNRyxLQUFLQyxVQUFMLEVBTkgsQ0FERjtBQVVEO0FBcHFCcUM7QUFBQTtBQUFBLElBQ2JDLGdCQURhOztBQUFBLG1DQUNsQ3RPLFlBRGtDLGtCQUdoQjtBQUNwQndMLElBQUFBLFlBQVksRUFBRUMscUJBRE07QUFFcEI5QyxJQUFBQSxXQUFXLEVBQUUsRUFGTztBQUdwQnZJLElBQUFBLEtBQUssRUFBRSxDQUhhO0FBSXBCRCxJQUFBQSxPQUFPLEVBQUU7QUFKVyxHQUhnQjtBQXVxQnhDLFNBQU8saUNBQVVILFlBQVYsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuLy8gbGlicmFyaWVzXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGNyZWF0ZVJlZiwgdXNlTWVtb30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCwge3dpdGhUaGVtZX0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtTdGF0aWNNYXAsIE1hcFJlZn0gZnJvbSAncmVhY3QtbWFwLWdsJztcbmltcG9ydCB7UGlja0luZm99IGZyb20gJ0BkZWNrLmdsL2NvcmUvbGliL2RlY2snO1xuaW1wb3J0IERlY2tHTCBmcm9tICdAZGVjay5nbC9yZWFjdCc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yLCBTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IG1hcGJveGdsIGZyb20gJ21hcGJveC1nbCc7XG5pbXBvcnQge3VzZURyb3BwYWJsZX0gZnJvbSAnQGRuZC1raXQvY29yZSc7XG5cbmltcG9ydCB7VmlzU3RhdGVBY3Rpb25zLCBNYXBTdGF0ZUFjdGlvbnMsIFVJU3RhdGVBY3Rpb25zfSBmcm9tICdAa2VwbGVyLmdsL2FjdGlvbnMnO1xuXG4vLyBjb21wb25lbnRzXG5pbXBvcnQgTWFwUG9wb3ZlckZhY3RvcnkgZnJvbSAnLi9tYXAvbWFwLXBvcG92ZXInO1xuaW1wb3J0IE1hcENvbnRyb2xGYWN0b3J5IGZyb20gJy4vbWFwL21hcC1jb250cm9sJztcbmltcG9ydCB7XG4gIFN0eWxlZE1hcENvbnRhaW5lcixcbiAgU3R5bGVkQXR0cmJ1dGlvbixcbiAgRW5kSG9yaXpvbnRhbEZsZXhib3hcbn0gZnJvbSAnLi9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgRWRpdG9yRmFjdG9yeSBmcm9tICcuL2VkaXRvci9lZGl0b3InO1xuXG4vLyB1dGlsc1xuaW1wb3J0IHtcbiAgZ2VuZXJhdGVNYXBib3hMYXllcnMsXG4gIHVwZGF0ZU1hcGJveExheWVycyxcbiAgTGF5ZXJCYXNlQ29uZmlnLFxuICBWaXN1YWxDaGFubmVsRG9tYWluLFxuICBFZGl0b3JMYXllclV0aWxzXG59IGZyb20gJ0BrZXBsZXIuZ2wvbGF5ZXJzJztcbmltcG9ydCB7TWFwU3RhdGUsIE1hcENvbnRyb2xzLCBWaWV3cG9ydCwgU3BsaXRNYXAsIFNwbGl0TWFwTGF5ZXJzfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcbmltcG9ydCB7XG4gIGVycm9yTm90aWZpY2F0aW9uLFxuICBzZXRMYXllckJsZW5kaW5nLFxuICBpc1N0eWxlVXNpbmdNYXBib3hUaWxlcyxcbiAgdHJhbnNmb3JtUmVxdWVzdCxcbiAgb2JzZXJ2ZURpbWVuc2lvbnMsXG4gIHVub2JzZXJ2ZURpbWVuc2lvbnMsXG4gIGhhc01vYmlsZVdpZHRoLFxuICBnZXRNYXBMYXllcnNGcm9tU3BsaXRNYXBzLFxuICBvblZpZXdQb3J0Q2hhbmdlLFxuICBnZXRWaWV3cG9ydEZyb21NYXBTdGF0ZSxcbiAgbm9ybWFsaXplRXZlbnQsXG4gIHJnYlRvSGV4XG59IGZyb20gJ0BrZXBsZXIuZ2wvdXRpbHMnO1xuaW1wb3J0IHticmVha1BvaW50VmFsdWVzfSBmcm9tICdAa2VwbGVyLmdsL3N0eWxlcyc7XG5cbi8vIGRlZmF1bHQtc2V0dGluZ3NcbmltcG9ydCB7XG4gIEZJTFRFUl9UWVBFUyxcbiAgR0VPQ09ERVJfTEFZRVJfSUQsXG4gIFRIUk9UVExFX05PVElGSUNBVElPTl9USU1FLFxuICBERUZBVUxUX1BJQ0tJTkdfUkFESVVTLFxuICBOT19NQVBfSUQsXG4gIEVNUFRZX01BUEJPWF9TVFlMRVxufSBmcm9tICdAa2VwbGVyLmdsL2NvbnN0YW50cyc7XG5cbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJy4vY29tbW9uL2Vycm9yLWJvdW5kYXJ5JztcbmltcG9ydCB7RGF0YXNldEF0dHJpYnV0aW9ufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7TE9DQUxFX0NPREVTfSBmcm9tICdAa2VwbGVyLmdsL2xvY2FsaXphdGlvbic7XG5pbXBvcnQge01hcFZpZXd9IGZyb20gJ0BkZWNrLmdsL2NvcmUnO1xuaW1wb3J0IHtcbiAgTWFwU3R5bGUsXG4gIGNvbXB1dGVEZWNrTGF5ZXJzLFxuICBnZXRMYXllckhvdmVyUHJvcCxcbiAgTGF5ZXJIb3ZlclByb3AsXG4gIHByZXBhcmVMYXllcnNGb3JEZWNrLFxuICBwcmVwYXJlTGF5ZXJzVG9SZW5kZXIsXG4gIExheWVyc1RvUmVuZGVyXG59IGZyb20gJ0BrZXBsZXIuZ2wvcmVkdWNlcnMnO1xuaW1wb3J0IHtWaXNTdGF0ZX0gZnJvbSAnQGtlcGxlci5nbC9zY2hlbWFzJztcblxuLyoqIEB0eXBlIHt7W2tleTogc3RyaW5nXTogUmVhY3QuQ1NTUHJvcGVydGllc319ICovXG5jb25zdCBNQVBfU1RZTEU6IHtba2V5OiBzdHJpbmddOiBSZWFjdC5DU1NQcm9wZXJ0aWVzfSA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJ1xuICB9LFxuICB0b3A6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6ICcwcHgnLFxuICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnXG4gIH1cbn07XG5cbmNvbnN0IExPQ0FMRV9DT0RFU19BUlJBWSA9IE9iamVjdC5rZXlzKExPQ0FMRV9DT0RFUyk7XG5cbmludGVyZmFjZSBTdHlsZWRNYXBDb250YWluZXJQcm9wcyB7XG4gIG1peEJsZW5kTW9kZT86IHN0cmluZztcbn1cblxuY29uc3QgU3R5bGVkTWFwID0gc3R5bGVkKFN0eWxlZE1hcENvbnRhaW5lcik8U3R5bGVkTWFwQ29udGFpbmVyUHJvcHM+KFxuICAoe21peEJsZW5kTW9kZSA9ICdub3JtYWwnfSkgPT4gYFxuICAub3ZlcmxheXMge1xuICAgIG1peC1ibGVuZC1tb2RlOiAke21peEJsZW5kTW9kZX07XG4gIH07XG5gXG4pO1xuXG5jb25zdCBNQVBCT1hHTF9TVFlMRV9VUERBVEUgPSAnc3R5bGUubG9hZCc7XG5jb25zdCBNQVBCT1hHTF9SRU5ERVIgPSAncmVuZGVyJztcbmNvbnN0IG5vcCA9ICgpID0+IHt9O1xuXG5jb25zdCBNYXBib3hMb2dvID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImF0dHJpdGlvbi1sb2dvXCI+XG4gICAgQmFzZW1hcCBieTpcbiAgICA8YVxuICAgICAgY2xhc3NOYW1lPVwibWFwYm94Z2wtY3RybC1sb2dvXCJcbiAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL1wiXG4gICAgICBhcmlhLWxhYmVsPVwiTWFwYm94IGxvZ29cIlxuICAgIC8+XG4gIDwvZGl2PlxuKTtcblxuaW50ZXJmYWNlIFN0eWxlZERyb3BwYWJsZVByb3BzIHtcbiAgaXNPdmVyOiBib29sZWFuO1xufVxuXG5jb25zdCBTdHlsZWREcm9wcGFibGUgPSBzdHlsZWQuZGl2PFN0eWxlZERyb3BwYWJsZVByb3BzPmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoe2lzT3Zlcn0pID0+IChpc092ZXIgPyAncmdiYSgxMjgsMTI4LDEyOCwwLjIpJyA6ICdub25lJyl9O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAxO1xuYDtcblxuZXhwb3J0IGNvbnN0IGlzU3BsaXRTZWxlY3RvciA9IHByb3BzID0+XG4gIHByb3BzLnZpc1N0YXRlLnNwbGl0TWFwcyAmJiBwcm9wcy52aXNTdGF0ZS5zcGxpdE1hcHMubGVuZ3RoID4gMTtcblxuZXhwb3J0IGNvbnN0IERyb3BwYWJsZSA9ICh7Y29udGFpbmVySWR9KSA9PiB7XG4gIGNvbnN0IHtpc092ZXIsIHNldE5vZGVSZWZ9ID0gdXNlRHJvcHBhYmxlKHtpZDogY29udGFpbmVySWR9KTtcblxuICByZXR1cm4gPFN0eWxlZERyb3BwYWJsZSByZWY9e3NldE5vZGVSZWZ9IGlzT3Zlcj17aXNPdmVyfSAvPjtcbn07XG5cbmludGVyZmFjZSBTdHlsZWREYXRhc2V0QXR0cmlidXRpb25zQ29udGFpbmVyUHJvcHMge1xuICBpc1BhbG06IGJvb2xlYW47XG59XG5cbmNvbnN0IFN0eWxlZERhdGFzZXRBdHRyaWJ1dGlvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2PFN0eWxlZERhdGFzZXRBdHRyaWJ1dGlvbnNDb250YWluZXJQcm9wcz5gXG4gIG1heC13aWR0aDogJHtwcm9wcyA9PiAocHJvcHMuaXNQYWxtID8gJzEzMHB4JyA6ICcxODBweCcpfTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgbGluZS1oZWlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmlzUGFsbSA/ICcxZW0nIDogJzEuNGVtJyl9O1xuICA6aG92ZXIge1xuICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xuICB9XG5gO1xuXG5jb25zdCBEYXRhc2V0QXR0cmlidXRpb25zID0gKHtcbiAgZGF0YXNldEF0dHJpYnV0aW9ucyxcbiAgaXNQYWxtXG59OiB7XG4gIGRhdGFzZXRBdHRyaWJ1dGlvbnM6IERhdGFzZXRBdHRyaWJ1dGlvbltdO1xuICBpc1BhbG06IGJvb2xlYW47XG59KSA9PiAoXG4gIDw+XG4gICAge2RhdGFzZXRBdHRyaWJ1dGlvbnM/Lmxlbmd0aCA/IChcbiAgICAgIDxTdHlsZWREYXRhc2V0QXR0cmlidXRpb25zQ29udGFpbmVyIGlzUGFsbT17aXNQYWxtfT5cbiAgICAgICAge2RhdGFzZXRBdHRyaWJ1dGlvbnMubWFwKChkcywgaWR4KSA9PiAoXG4gICAgICAgICAgPGEgaHJlZj17ZHMudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIga2V5PXtgJHtkcy50aXRsZX1fJHtpZHh9YH0+XG4gICAgICAgICAgICB7ZHMudGl0bGV9XG4gICAgICAgICAgICB7aWR4ICE9PSBkYXRhc2V0QXR0cmlidXRpb25zLmxlbmd0aCAtIDEgPyAnLCAnIDogbnVsbH1cbiAgICAgICAgICA8L2E+XG4gICAgICAgICkpfVxuICAgICAgPC9TdHlsZWREYXRhc2V0QXR0cmlidXRpb25zQ29udGFpbmVyPlxuICAgICkgOiBudWxsfVxuICA8Lz5cbik7XG5cbmV4cG9ydCBjb25zdCBBdHRyaWJ1dGlvbiA9ICh7XG4gIHNob3dNYXBib3hMb2dvID0gdHJ1ZSxcbiAgc2hvd09zbUJhc2VtYXBBdHRyaWJ1dGlvbiA9IGZhbHNlLFxuICBkYXRhc2V0QXR0cmlidXRpb25zXG59KSA9PiB7XG4gIGNvbnN0IGlzUGFsbSA9IGhhc01vYmlsZVdpZHRoKGJyZWFrUG9pbnRWYWx1ZXMpO1xuXG4gIGNvbnN0IG1lbW9pemVkQ29tcG9uZW50cyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghc2hvd01hcGJveExvZ28pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRBdHRyYnV0aW9uPlxuICAgICAgICAgIDxFbmRIb3Jpem9udGFsRmxleGJveD5cbiAgICAgICAgICAgIDxEYXRhc2V0QXR0cmlidXRpb25zIGRhdGFzZXRBdHRyaWJ1dGlvbnM9e2RhdGFzZXRBdHRyaWJ1dGlvbnN9IGlzUGFsbT17aXNQYWxtfSAvPlxuICAgICAgICAgICAge3Nob3dPc21CYXNlbWFwQXR0cmlidXRpb24gPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXR0cml0aW9uLWxpbmtcIj5cbiAgICAgICAgICAgICAgICB7ZGF0YXNldEF0dHJpYnV0aW9ucz8ubGVuZ3RoID8gPHNwYW4gY2xhc3NOYW1lPVwicGlwZS1zZXBhcmF0b3JcIj58PC9zcGFuPiA6IG51bGx9XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lm9wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgwqkgT3BlblN0cmVldE1hcFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L0VuZEhvcml6b250YWxGbGV4Ym94PlxuICAgICAgICA8L1N0eWxlZEF0dHJidXRpb24+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkQXR0cmJ1dGlvbj5cbiAgICAgICAgPEVuZEhvcml6b250YWxGbGV4Ym94PlxuICAgICAgICAgIDxEYXRhc2V0QXR0cmlidXRpb25zIGRhdGFzZXRBdHRyaWJ1dGlvbnM9e2RhdGFzZXRBdHRyaWJ1dGlvbnN9IGlzUGFsbT17aXNQYWxtfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXR0cml0aW9uLWxpbmtcIj5cbiAgICAgICAgICAgIHtkYXRhc2V0QXR0cmlidXRpb25zPy5sZW5ndGggPyA8c3BhbiBjbGFzc05hbWU9XCJwaXBlLXNlcGFyYXRvclwiPnw8L3NwYW4+IDogbnVsbH1cbiAgICAgICAgICAgIHtpc1BhbG0gPyA8TWFwYm94TG9nbyAvPiA6IG51bGx9XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9rZXBsZXIuZ2wvcG9saWN5L1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgwqkga2VwbGVyLmdsIHx7JyAnfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vYWJvdXQvbWFwcy9cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG4gICAgICAgICAgICAgIMKpIE1hcGJveCB8eycgJ31cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL21hcC1mZWVkYmFjay9cIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN0cm9uZz5JbXByb3ZlIHRoaXMgbWFwIDwvc3Ryb25nPlxuICAgICAgICAgICAgICB7IWlzUGFsbSA/IDxzdHJvbmc+IHwgPC9zdHJvbmc+IDogbnVsbH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIHshaXNQYWxtID8gPE1hcGJveExvZ28gLz4gOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0VuZEhvcml6b250YWxGbGV4Ym94PlxuICAgICAgPC9TdHlsZWRBdHRyYnV0aW9uPlxuICAgICk7XG4gIH0sIFtzaG93TWFwYm94TG9nbywgc2hvd09zbUJhc2VtYXBBdHRyaWJ1dGlvbiwgZGF0YXNldEF0dHJpYnV0aW9ucywgaXNQYWxtXSk7XG5cbiAgcmV0dXJuIG1lbW9pemVkQ29tcG9uZW50cztcbn07XG5cbk1hcENvbnRhaW5lckZhY3RvcnkuZGVwcyA9IFtNYXBQb3BvdmVyRmFjdG9yeSwgTWFwQ29udHJvbEZhY3RvcnksIEVkaXRvckZhY3RvcnldO1xuXG50eXBlIE1hcGJveFN0eWxlID0gc3RyaW5nIHwgb2JqZWN0IHwgdW5kZWZpbmVkO1xudHlwZSBQcm9wU2VsZWN0b3I8Uj4gPSBTZWxlY3RvcjxNYXBDb250YWluZXJQcm9wcywgUj47XG5cbmludGVyZmFjZSBNYXBDb250YWluZXJQcm9wcyB7XG4gIHZpc1N0YXRlOiBWaXNTdGF0ZTtcbiAgbWFwU3RhdGU6IE1hcFN0YXRlO1xuICBtYXBDb250cm9sczogTWFwQ29udHJvbHM7XG4gIG1hcFN0eWxlOiB7Ym90dG9tTWFwU3R5bGU/OiBNYXBib3hTdHlsZTsgdG9wTWFwU3R5bGU/OiBNYXBib3hTdHlsZX0gJiBNYXBTdHlsZTtcbiAgbWFwYm94QXBpQWNjZXNzVG9rZW46IHN0cmluZztcbiAgbWFwYm94QXBpVXJsOiBzdHJpbmc7XG4gIHZpc1N0YXRlQWN0aW9uczogdHlwZW9mIFZpc1N0YXRlQWN0aW9ucztcbiAgbWFwU3RhdGVBY3Rpb25zOiB0eXBlb2YgTWFwU3RhdGVBY3Rpb25zO1xuICB1aVN0YXRlQWN0aW9uczogdHlwZW9mIFVJU3RhdGVBY3Rpb25zO1xuXG4gIC8vIG9wdGlvbmFsXG4gIHByaW1hcnk/OiBib29sZWFuOyAvLyBwcmltYXJ5IG9uZSB3aWxsIGJlIHJlcG9ydGluZyBpdHMgc2l6ZSB0byBhcHBTdGF0ZVxuICByZWFkT25seT86IGJvb2xlYW47XG4gIGlzRXhwb3J0PzogYm9vbGVhbjtcbiAgb25NYXBUb2dnbGVMYXllcj86IEZ1bmN0aW9uO1xuICBvbk1hcFN0eWxlTG9hZGVkPzogRnVuY3Rpb247XG4gIG9uTWFwUmVuZGVyPzogRnVuY3Rpb247XG4gIGdldE1hcGJveFJlZj86IChtYXBib3g/OiBNYXBSZWYgfCBudWxsLCBpbmRleD86IG51bWJlcikgPT4gdm9pZDtcbiAgaW5kZXg/OiBudW1iZXI7XG4gIGRlbGV0ZU1hcExhYmVscz86IChjb250YWluZXJJZDogc3RyaW5nLCBsYXllcklkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGNvbnRhaW5lcklkPzogbnVtYmVyO1xuXG4gIGxvY2FsZT86IGFueTtcbiAgdGhlbWU/OiBhbnk7XG4gIGVkaXRvcj86IGFueTtcbiAgTWFwQ29tcG9uZW50PzogdHlwZW9mIFN0YXRpY01hcDtcbiAgZGVja0dsUHJvcHM/OiBhbnk7XG4gIG9uRGVja0luaXRpYWxpemVkPzogKGE6IGFueSwgYjogYW55KSA9PiB2b2lkO1xuICBvblZpZXdTdGF0ZUNoYW5nZT86ICh2aWV3cG9ydDogVmlld3BvcnQpID0+IHZvaWQ7XG5cbiAgdG9wTWFwQ29udGFpbmVyUHJvcHM6IGFueTtcbiAgYm90dG9tTWFwQ29udGFpbmVyUHJvcHM6IGFueTtcbiAgdHJhbnNmb3JtUmVxdWVzdD86IGFueTtcblxuICBkYXRhc2V0QXR0cmlidXRpb25zPzogRGF0YXNldEF0dHJpYnV0aW9uW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcENvbnRhaW5lckZhY3RvcnkoXG4gIE1hcFBvcG92ZXIsXG4gIE1hcENvbnRyb2wsXG4gIEVkaXRvclxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxNYXBDb250YWluZXJQcm9wcz4ge1xuICBjbGFzcyBNYXBDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQ8TWFwQ29udGFpbmVyUHJvcHM+IHtcbiAgICBkaXNwbGF5TmFtZSA9ICdNYXBDb250YWluZXInO1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICBNYXBDb21wb25lbnQ6IFN0YXRpY01hcCxcbiAgICAgIGRlY2tHbFByb3BzOiB7fSxcbiAgICAgIGluZGV4OiAwLFxuICAgICAgcHJpbWFyeTogdHJ1ZVxuICAgIH07XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgIC8vIERldGVybWluZXMgd2hldGhlciBhdHRyaWJ1dGlvbiBzaG91bGQgYmUgdmlzaWJsZSBiYXNlZCB0aGUgcmVzdWx0IG9mIGxvYWRpbmcgdGhlIG1hcCBzdHlsZVxuICAgICAgc2hvd01hcGJveEF0dHJpYnV0aW9uOiB0cnVlXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAoIXRoaXMuX3JlZi5jdXJyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG9ic2VydmVEaW1lbnNpb25zKHRoaXMuX3JlZi5jdXJyZW50LCB0aGlzLl9oYW5kbGVSZXNpemUpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgLy8gdW5iaW5kIG1hcGJveGdsIGV2ZW50IGxpc3RlbmVyXG4gICAgICBpZiAodGhpcy5fbWFwKSB7XG4gICAgICAgIHRoaXMuX21hcD8ub2ZmKE1BUEJPWEdMX1NUWUxFX1VQREFURSwgbm9wKTtcbiAgICAgICAgdGhpcy5fbWFwPy5vZmYoTUFQQk9YR0xfUkVOREVSLCBub3ApO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9yZWYuY3VycmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB1bm9ic2VydmVEaW1lbnNpb25zKHRoaXMuX3JlZi5jdXJyZW50KTtcbiAgICB9XG5cbiAgICBfZGVjazogYW55ID0gbnVsbDtcbiAgICBfbWFwOiBtYXBib3hnbC5NYXAgfCBudWxsID0gbnVsbDtcbiAgICBfcmVmID0gY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xuICAgIF9kZWNrR0xFcnJvcnNFbGFwc2VkOiB7W2lkOiBzdHJpbmddOiBudW1iZXJ9ID0ge307XG5cbiAgICBwcmV2aW91c0xheWVycyA9IHtcbiAgICAgIC8vIFtsYXllcnMuaWRdOiBtYXBib3hMYXllckNvbmZpZ1xuICAgIH07XG5cbiAgICBfaGFuZGxlUmVzaXplID0gZGltZW5zaW9ucyA9PiB7XG4gICAgICBjb25zdCB7cHJpbWFyeSwgaW5kZXh9ID0gdGhpcy5wcm9wcztcbiAgICAgIGlmIChwcmltYXJ5KSB7XG4gICAgICAgIGNvbnN0IHttYXBTdGF0ZUFjdGlvbnN9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgaWYgKGRpbWVuc2lvbnMgJiYgZGltZW5zaW9ucy53aWR0aCA+IDAgJiYgZGltZW5zaW9ucy5oZWlnaHQgPiAwKSB7XG4gICAgICAgICAgbWFwU3RhdGVBY3Rpb25zLnVwZGF0ZU1hcChkaW1lbnNpb25zLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgbGF5ZXJzU2VsZWN0b3I6IFByb3BTZWxlY3RvcjxWaXNTdGF0ZVsnbGF5ZXJzJ10+ID0gcHJvcHMgPT4gcHJvcHMudmlzU3RhdGUubGF5ZXJzO1xuICAgIGxheWVyRGF0YVNlbGVjdG9yOiBQcm9wU2VsZWN0b3I8VmlzU3RhdGVbJ2xheWVycyddPiA9IHByb3BzID0+IHByb3BzLnZpc1N0YXRlLmxheWVyRGF0YTtcbiAgICBzcGxpdE1hcFNlbGVjdG9yOiBQcm9wU2VsZWN0b3I8U3BsaXRNYXBbXT4gPSBwcm9wcyA9PiBwcm9wcy52aXNTdGF0ZS5zcGxpdE1hcHM7XG4gICAgc3BsaXRNYXBJbmRleFNlbGVjdG9yOiBQcm9wU2VsZWN0b3I8bnVtYmVyIHwgdW5kZWZpbmVkPiA9IHByb3BzID0+IHByb3BzLmluZGV4O1xuICAgIG1hcExheWVyc1NlbGVjdG9yOiBQcm9wU2VsZWN0b3I8U3BsaXRNYXBMYXllcnMgfCBudWxsIHwgdW5kZWZpbmVkPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgdGhpcy5zcGxpdE1hcFNlbGVjdG9yLFxuICAgICAgdGhpcy5zcGxpdE1hcEluZGV4U2VsZWN0b3IsXG4gICAgICBnZXRNYXBMYXllcnNGcm9tU3BsaXRNYXBzXG4gICAgKTtcbiAgICBsYXllck9yZGVyU2VsZWN0b3I6IFByb3BTZWxlY3RvcjxWaXNTdGF0ZVsnbGF5ZXJPcmRlciddPiA9IHByb3BzID0+IHByb3BzLnZpc1N0YXRlLmxheWVyT3JkZXI7XG4gICAgbGF5ZXJzVG9SZW5kZXJTZWxlY3RvcjogUHJvcFNlbGVjdG9yPExheWVyc1RvUmVuZGVyPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgdGhpcy5sYXllcnNTZWxlY3RvcixcbiAgICAgIHRoaXMubGF5ZXJEYXRhU2VsZWN0b3IsXG4gICAgICB0aGlzLm1hcExheWVyc1NlbGVjdG9yLFxuICAgICAgcHJlcGFyZUxheWVyc1RvUmVuZGVyXG4gICAgKTtcbiAgICBsYXllcnNGb3JEZWNrU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICAgIHRoaXMubGF5ZXJzU2VsZWN0b3IsXG4gICAgICB0aGlzLmxheWVyRGF0YVNlbGVjdG9yLFxuICAgICAgcHJlcGFyZUxheWVyc0ZvckRlY2tcbiAgICApO1xuICAgIGZpbHRlcnNTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLnZpc1N0YXRlLmZpbHRlcnM7XG4gICAgcG9seWdvbkZpbHRlcnNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuZmlsdGVyc1NlbGVjdG9yLCBmaWx0ZXJzID0+XG4gICAgICBmaWx0ZXJzLmZpbHRlcihmID0+IGYudHlwZSA9PT0gRklMVEVSX1RZUEVTLnBvbHlnb24gJiYgZi5lbmFibGVkICE9PSBmYWxzZSlcbiAgICApO1xuICAgIGZlYXR1cmVzU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy52aXNTdGF0ZS5lZGl0b3IuZmVhdHVyZXM7XG4gICAgc2VsZWN0ZWRGZWF0dXJlU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy52aXNTdGF0ZS5lZGl0b3Iuc2VsZWN0ZWRGZWF0dXJlO1xuICAgIGZlYXR1cmVDb2xsZWN0aW9uU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICAgIHRoaXMucG9seWdvbkZpbHRlcnNTZWxlY3RvcixcbiAgICAgIHRoaXMuZmVhdHVyZXNTZWxlY3RvcixcbiAgICAgIChwb2x5Z29uRmlsdGVycywgZmVhdHVyZXMpID0+ICh7XG4gICAgICAgIHR5cGU6ICdGZWF0dXJlQ29sbGVjdGlvbicsXG4gICAgICAgIGZlYXR1cmVzOiBmZWF0dXJlcy5jb25jYXQocG9seWdvbkZpbHRlcnMubWFwKGYgPT4gZi52YWx1ZSkpXG4gICAgICB9KVxuICAgICk7XG4gICAgc2VsZWN0ZWRQb2x5Z29uSW5kZXhTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgdGhpcy5mZWF0dXJlQ29sbGVjdGlvblNlbGVjdG9yLFxuICAgICAgdGhpcy5zZWxlY3RlZEZlYXR1cmVTZWxlY3RvcixcbiAgICAgIChjb2xsZWN0aW9uLCBzZWxlY3RlZEZlYXR1cmUpID0+XG4gICAgICAgIGNvbGxlY3Rpb24uZmVhdHVyZXMuZmluZEluZGV4KGYgPT4gZi5pZCA9PT0gc2VsZWN0ZWRGZWF0dXJlPy5pZClcbiAgICApO1xuICAgIHNlbGVjdGVkRmVhdHVyZUluZGV4QXJyYXlTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgKHZhbHVlOiBudW1iZXIpID0+IHZhbHVlLFxuICAgICAgdmFsdWUgPT4ge1xuICAgICAgICByZXR1cm4gdmFsdWUgPCAwID8gW10gOiBbdmFsdWVdO1xuICAgICAgfVxuICAgICk7XG5cbiAgICBtYXBib3hMYXllcnNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgdGhpcy5sYXllcnNTZWxlY3RvcixcbiAgICAgIHRoaXMubGF5ZXJEYXRhU2VsZWN0b3IsXG4gICAgICB0aGlzLmxheWVyT3JkZXJTZWxlY3RvcixcbiAgICAgIHRoaXMubGF5ZXJzVG9SZW5kZXJTZWxlY3RvcixcbiAgICAgIGdlbmVyYXRlTWFwYm94TGF5ZXJzXG4gICAgKTtcblxuICAgIC8vIG1lcmdlIGluIGEgYmFja2dyb3VuZC1jb2xvciBzdHlsZSBpZiB0aGUgYmFzZW1hcCBjaG9pY2UgaXMgTk9fTUFQX0lEXG4gICAgLy8gdXNlZCBieSA8U3R5bGVkTWFwPiBpbmxpbmUgc3R5bGUgcHJvcFxuICAgIG1hcFN0eWxlVHlwZVNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMubWFwU3R5bGUuc3R5bGVUeXBlO1xuICAgIG1hcFN0eWxlQmFja2dyb3VuZENvbG9yU2VsZWN0b3IgPSBwcm9wcyA9PiBwcm9wcy5tYXBTdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgc3R5bGVTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgdGhpcy5tYXBTdHlsZVR5cGVTZWxlY3RvcixcbiAgICAgIHRoaXMubWFwU3R5bGVCYWNrZ3JvdW5kQ29sb3JTZWxlY3RvcixcbiAgICAgIChzdHlsZVR5cGUsIGJhY2tncm91bmRDb2xvcikgPT4gKHtcbiAgICAgICAgLi4uTUFQX1NUWUxFLmNvbnRhaW5lcixcbiAgICAgICAgLi4uKHN0eWxlVHlwZSA9PT0gTk9fTUFQX0lEID8ge2JhY2tncm91bmRDb2xvcjogcmdiVG9IZXgoYmFja2dyb3VuZENvbG9yKX0gOiB7fSlcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8qIGNvbXBvbmVudCBwcml2YXRlIGZ1bmN0aW9ucyAqL1xuICAgIF9vbkNsb3NlTWFwUG9wb3ZlciA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLm9uTGF5ZXJDbGljayhudWxsKTtcbiAgICB9O1xuXG4gICAgX29uTGF5ZXJIb3ZlciA9IChpZHg6IG51bWJlciwgaW5mbzogUGlja0luZm88YW55PiB8IG51bGwpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLm9uTGF5ZXJIb3ZlcihpbmZvKTtcbiAgICB9O1xuXG4gICAgX29uTGF5ZXJTZXREb21haW4gPSAoaWR4OiBudW1iZXIsIGNvbG9yRG9tYWluOiBWaXN1YWxDaGFubmVsRG9tYWluKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5sYXllckNvbmZpZ0NoYW5nZSh0aGlzLnByb3BzLnZpc1N0YXRlLmxheWVyc1tpZHhdLCB7XG4gICAgICAgIGNvbG9yRG9tYWluXG4gICAgICB9IGFzIFBhcnRpYWw8TGF5ZXJCYXNlQ29uZmlnPik7XG4gICAgfTtcblxuICAgIF9oYW5kbGVNYXBUb2dnbGVMYXllciA9IGxheWVySWQgPT4ge1xuICAgICAgY29uc3Qge2luZGV4OiBtYXBJbmRleCA9IDAsIHZpc1N0YXRlQWN0aW9uc30gPSB0aGlzLnByb3BzO1xuICAgICAgdmlzU3RhdGVBY3Rpb25zLnRvZ2dsZUxheWVyRm9yTWFwKG1hcEluZGV4LCBsYXllcklkKTtcbiAgICB9O1xuXG4gICAgX29uTWFwYm94U3R5bGVVcGRhdGUgPSB1cGRhdGUgPT4ge1xuICAgICAgLy8gZm9yY2UgcmVmcmVzaCBtYXBib3hnbCBsYXllcnNcbiAgICAgIHRoaXMucHJldmlvdXNMYXllcnMgPSB7fTtcbiAgICAgIHRoaXMuX3VwZGF0ZU1hcGJveExheWVycygpO1xuXG4gICAgICBpZiAodXBkYXRlICYmIHVwZGF0ZS5zdHlsZSkge1xuICAgICAgICAvLyBObyBhdHRyaWJ1dGlvbnMgYXJlIG5lZWRlZCBpZiB0aGUgc3R5bGUgZG9lc24ndCByZWZlcmVuY2UgTWFwYm94IHNvdXJjZXNcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd01hcGJveEF0dHJpYnV0aW9uOiBpc1N0eWxlVXNpbmdNYXBib3hUaWxlcyh1cGRhdGUuc3R5bGUpfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbk1hcFN0eWxlTG9hZGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25NYXBTdHlsZUxvYWRlZCh0aGlzLl9tYXApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfc2V0TWFwYm94TWFwOiBSZWFjdC5SZWY8TWFwUmVmPiA9IG1hcGJveCA9PiB7XG4gICAgICBpZiAoIXRoaXMuX21hcCAmJiBtYXBib3gpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gbWFwYm94LmdldE1hcCgpO1xuICAgICAgICAvLyBpIG5vdGljZWQgaW4gY2VydGFpbiBjb250ZXh0IHdlIGRvbid0IGFjY2VzcyB0aGUgYWN0dWFsIG1hcCBlbGVtZW50XG4gICAgICAgIGlmICghdGhpcy5fbWFwKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGJpbmQgbWFwYm94Z2wgZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgdGhpcy5fbWFwLm9uKE1BUEJPWEdMX1NUWUxFX1VQREFURSwgdGhpcy5fb25NYXBib3hTdHlsZVVwZGF0ZSk7XG5cbiAgICAgICAgdGhpcy5fbWFwLm9uKE1BUEJPWEdMX1JFTkRFUiwgKCkgPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbk1hcFJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk1hcFJlbmRlcih0aGlzLl9tYXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmdldE1hcGJveFJlZikge1xuICAgICAgICAvLyBUaGUgcGFyZW50IGNvbXBvbmVudCBjYW4gZ2FpbiBhY2Nlc3MgdG8gb3VyIE1hcGJveEdsTWFwIGJ5XG4gICAgICAgIC8vIHByb3ZpZGluZyB0aGlzIGNhbGxiYWNrLiBOb3RlIHRoYXQgJ21hcGJveCcgd2lsbCBiZSBudWxsIHdoZW4gdGhlXG4gICAgICAgIC8vIHJlZiBpcyB1bnNldCAoZS5nLiB3aGVuIGEgc3BsaXQgbWFwIGlzIGNsb3NlZCkuXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0TWFwYm94UmVmKG1hcGJveCwgdGhpcy5wcm9wcy5pbmRleCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9vbkRlY2tJbml0aWFsaXplZChnbCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25EZWNrSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkRlY2tJbml0aWFsaXplZCh0aGlzLl9kZWNrLCBnbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX29uQmVmb3JlUmVuZGVyID0gKHtnbH0pID0+IHtcbiAgICAgIHNldExheWVyQmxlbmRpbmcoZ2wsIHRoaXMucHJvcHMudmlzU3RhdGUubGF5ZXJCbGVuZGluZyk7XG4gICAgfTtcblxuICAgIF9vbkRlY2tFcnJvciA9IChlcnJvciwgbGF5ZXIpID0+IHtcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yPy5tZXNzYWdlIHx8ICd1bmtub3duLWVycm9yJztcbiAgICAgIGNvbnN0IGxheWVyTWVzc2FnZSA9IGxheWVyPy5pZCA/IGAgaW4gJHtsYXllci5pZH0gbGF5ZXJgIDogJyc7XG4gICAgICBsZXQgZXJyb3JNZXNzYWdlRnVsbCA9XG4gICAgICAgIGVycm9yTWVzc2FnZSA9PT0gJ1dlYkdMIGNvbnRleHQgaXMgbG9zdCdcbiAgICAgICAgICA/ICdZb3VyIEdQVSB3YXMgZGlzY29ubmVjdGVkLiBUaGlzIGNhbiBoYXBwZW4gaWYgeW91ciBjb21wdXRlciBnb2VzIHRvIHNsZWVwLiBJdCBjYW4gYWxzbyBvY2N1ciBmb3Igb3RoZXIgcmVhc29ucywgc3VjaCBhcyBpZiB5b3UgYXJlIHJ1bm5pbmcgdG9vIG1hbnkgR1BVIGFwcGxpY2F0aW9ucy4nXG4gICAgICAgICAgOiBgQW4gZXJyb3IgaW4gZGVjay5nbDogJHtlcnJvck1lc3NhZ2V9JHtsYXllck1lc3NhZ2V9LmA7XG5cbiAgICAgIC8vIFRocm90dGxlIGVycm9yIG5vdGlmaWNhdGlvbnMsIGFzIFJlYWN0IGRvZXNuJ3QgbGlrZSB0b28gbWFueSBzdGF0ZSBjaGFuZ2VzIGZyb20gaGVyZS5cbiAgICAgIGNvbnN0IGxhc3RTaG93biA9IHRoaXMuX2RlY2tHTEVycm9yc0VsYXBzZWRbZXJyb3JNZXNzYWdlRnVsbF07XG4gICAgICBpZiAoIWxhc3RTaG93biB8fCBsYXN0U2hvd24gPCBEYXRlLm5vdygpIC0gVEhST1RUTEVfTk9USUZJQ0FUSU9OX1RJTUUpIHtcbiAgICAgICAgdGhpcy5fZGVja0dMRXJyb3JzRWxhcHNlZFtlcnJvck1lc3NhZ2VGdWxsXSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgLy8gTWFyayBsYXllciBhcyBpbnZhbGlkXG4gICAgICAgIGxldCBleHRyYUxheWVyTWVzc2FnZSA9ICcnO1xuICAgICAgICBjb25zdCB7dmlzU3RhdGVBY3Rpb25zfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmIChsYXllcikge1xuICAgICAgICAgIGxldCB0b3BNb3N0TGF5ZXIgPSBsYXllcjtcbiAgICAgICAgICB3aGlsZSAodG9wTW9zdExheWVyLnBhcmVudCkge1xuICAgICAgICAgICAgdG9wTW9zdExheWVyID0gdG9wTW9zdExheWVyLnBhcmVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRvcE1vc3RMYXllci5wcm9wcz8uaWQpIHtcbiAgICAgICAgICAgIHZpc1N0YXRlQWN0aW9ucy5sYXllclNldElzVmFsaWQodG9wTW9zdExheWVyLCBmYWxzZSk7XG4gICAgICAgICAgICBleHRyYUxheWVyTWVzc2FnZSA9ICdUaGUgbGF5ZXIgaGFzIGJlZW4gZGlzYWJsZWQgYW5kIGhpZ2hsaWdodGVkLic7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIG5ldyBlcnJvciBub3RpZmljYXRpb24gb3IgdXBkYXRlIGV4aXN0aW5nIG9uZSB3aXRoIHNhbWUgaWQuXG4gICAgICAgIC8vIFVwZGF0ZSBpcyByZXF1aXJlZCB0byBwcmVzZXJ2ZSB0aGUgb3JkZXIgb2Ygbm90aWZpY2F0aW9ucyBhcyB0aGV5IHByb2JhYmx5IGFyZSBnb2luZyB0byBcImp1bXBcIiBiYXNlZCBvbiBvcmRlciBvZiBlcnJvcnMuXG4gICAgICAgIGNvbnN0IHt1aVN0YXRlQWN0aW9uc30gPSB0aGlzLnByb3BzO1xuICAgICAgICB1aVN0YXRlQWN0aW9ucy5hZGROb3RpZmljYXRpb24oXG4gICAgICAgICAgZXJyb3JOb3RpZmljYXRpb24oe1xuICAgICAgICAgICAgbWVzc2FnZTogYCR7ZXJyb3JNZXNzYWdlRnVsbH0gJHtleHRyYUxheWVyTWVzc2FnZX1gLFxuICAgICAgICAgICAgaWQ6IGVycm9yTWVzc2FnZUZ1bGwgLy8gdHJlYXQgdGhlIGVycm9yIG1lc3NhZ2UgYXMgaWRcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKiBjb21wb25lbnQgcmVuZGVyIGZ1bmN0aW9ucyAqL1xuXG4gICAgLyogZXNsaW50LWRpc2FibGUgY29tcGxleGl0eSAqL1xuICAgIF9yZW5kZXJNYXBQb3BvdmVyKCkge1xuICAgICAgLy8gdGhpcyBjaGVjayBpcyBmb3IgbGltaXRpbmcgdGhlIGRpc3BsYXkgb2YgdGhlIGA8TWFwUG9wb3Zlcj5gIHRvIHRoZSBgPE1hcENvbnRhaW5lcj5gIHRoZSB1c2VyIGlzIGludGVyYWN0aW5nIHdpdGhcbiAgICAgIC8vIHRoZSBEZWNrR0wgb25Ib3ZlciBldmVudCBoYW5kbGVyIGFkZHMgYSBgbWFwSW5kZXhgIHByb3BlcnR5IHdoaWNoIGlzIGF2YWlsYWJsZSBpbiB0aGUgYGhvdmVySW5mb2Agb2JqZWN0IG9mIGB2aXNTdGF0ZWBcbiAgICAgIGlmICh0aGlzLnByb3BzLmluZGV4ICE9PSB0aGlzLnByb3BzLnZpc1N0YXRlLmhvdmVySW5mbz8ubWFwSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE86IG1vdmUgdGhpcyBpbnRvIHJlZHVjZXIgc28gaXQgY2FuIGJlIHRlc3RlZFxuICAgICAgY29uc3Qge1xuICAgICAgICBtYXBTdGF0ZSxcbiAgICAgICAgdmlzU3RhdGU6IHtcbiAgICAgICAgICBob3ZlckluZm8sXG4gICAgICAgICAgY2xpY2tlZCxcbiAgICAgICAgICBkYXRhc2V0cyxcbiAgICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZyxcbiAgICAgICAgICBsYXllcnMsXG4gICAgICAgICAgbW91c2VQb3M6IHttb3VzZVBvc2l0aW9uLCBjb29yZGluYXRlLCBwaW5uZWR9XG4gICAgICAgIH1cbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgbGF5ZXJzVG9SZW5kZXIgPSB0aGlzLmxheWVyc1RvUmVuZGVyU2VsZWN0b3IodGhpcy5wcm9wcyk7XG5cbiAgICAgIGlmICghbW91c2VQb3NpdGlvbiB8fCAhaW50ZXJhY3Rpb25Db25maWcudG9vbHRpcCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbGF5ZXJIb3ZlclByb3AgPSBnZXRMYXllckhvdmVyUHJvcCh7XG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgICBob3ZlckluZm8sXG4gICAgICAgIGxheWVycyxcbiAgICAgICAgbGF5ZXJzVG9SZW5kZXIsXG4gICAgICAgIGRhdGFzZXRzXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgY29tcGFyZU1vZGUgPSBpbnRlcmFjdGlvbkNvbmZpZy50b29sdGlwLmNvbmZpZ1xuICAgICAgICA/IGludGVyYWN0aW9uQ29uZmlnLnRvb2x0aXAuY29uZmlnLmNvbXBhcmVNb2RlXG4gICAgICAgIDogZmFsc2U7XG5cbiAgICAgIGxldCBwaW5uZWRQb3NpdGlvbiA9IHt9O1xuICAgICAgbGV0IGxheWVyUGlubmVkUHJvcDogTGF5ZXJIb3ZlclByb3AgfCBudWxsID0gbnVsbDtcbiAgICAgIGlmIChwaW5uZWQgfHwgY2xpY2tlZCkge1xuICAgICAgICAvLyBwcm9qZWN0IGxuZ2xhdCB0byBzY3JlZW4gc28gdGhhdCB0b29sdGlwIGZvbGxvd3MgdGhlIG9iamVjdCBvbiB6b29tXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0ID0gZ2V0Vmlld3BvcnRGcm9tTWFwU3RhdGUobWFwU3RhdGUpO1xuICAgICAgICBjb25zdCBsbmdMYXQgPSBjbGlja2VkID8gY2xpY2tlZC5jb29yZGluYXRlIDogcGlubmVkLmNvb3JkaW5hdGU7XG4gICAgICAgIHBpbm5lZFBvc2l0aW9uID0gdGhpcy5fZ2V0SG92ZXJYWSh2aWV3cG9ydCwgbG5nTGF0KTtcbiAgICAgICAgbGF5ZXJQaW5uZWRQcm9wID0gZ2V0TGF5ZXJIb3ZlclByb3Aoe1xuICAgICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgICAgIGhvdmVySW5mbzogY2xpY2tlZCxcbiAgICAgICAgICBsYXllcnMsXG4gICAgICAgICAgbGF5ZXJzVG9SZW5kZXIsXG4gICAgICAgICAgZGF0YXNldHNcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChsYXllckhvdmVyUHJvcCAmJiBsYXllclBpbm5lZFByb3ApIHtcbiAgICAgICAgICBsYXllckhvdmVyUHJvcC5wcmltYXJ5RGF0YSA9IGxheWVyUGlubmVkUHJvcC5kYXRhO1xuICAgICAgICAgIGxheWVySG92ZXJQcm9wLmNvbXBhcmVUeXBlID0gaW50ZXJhY3Rpb25Db25maWcudG9vbHRpcC5jb25maWcuY29tcGFyZVR5cGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY29tbW9uUHJvcCA9IHtcbiAgICAgICAgb25DbG9zZTogdGhpcy5fb25DbG9zZU1hcFBvcG92ZXIsXG4gICAgICAgIHpvb206IG1hcFN0YXRlLnpvb20sXG4gICAgICAgIGNvbnRhaW5lcjogdGhpcy5fZGVjayA/IHRoaXMuX2RlY2suY2FudmFzIDogdW5kZWZpbmVkXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RXJyb3JCb3VuZGFyeT5cbiAgICAgICAgICB7bGF5ZXJQaW5uZWRQcm9wICYmIChcbiAgICAgICAgICAgIDxNYXBQb3BvdmVyXG4gICAgICAgICAgICAgIHsuLi5waW5uZWRQb3NpdGlvbn1cbiAgICAgICAgICAgICAgey4uLmNvbW1vblByb3B9XG4gICAgICAgICAgICAgIGxheWVySG92ZXJQcm9wPXtsYXllclBpbm5lZFByb3B9XG4gICAgICAgICAgICAgIGNvb3JkaW5hdGU9e2ludGVyYWN0aW9uQ29uZmlnLmNvb3JkaW5hdGUuZW5hYmxlZCAmJiAocGlubmVkIHx8IHt9KS5jb29yZGluYXRlfVxuICAgICAgICAgICAgICBmcm96ZW49e3RydWV9XG4gICAgICAgICAgICAgIGlzQmFzZT17Y29tcGFyZU1vZGV9XG4gICAgICAgICAgICAgIG9uU2V0RmVhdHVyZXM9e3RoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLnNldEZlYXR1cmVzfVxuICAgICAgICAgICAgICBzZXRTZWxlY3RlZEZlYXR1cmU9e3RoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLnNldFNlbGVjdGVkRmVhdHVyZX1cbiAgICAgICAgICAgICAgZmVhdHVyZUNvbGxlY3Rpb249e3RoaXMuZmVhdHVyZUNvbGxlY3Rpb25TZWxlY3Rvcih0aGlzLnByb3BzKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7bGF5ZXJIb3ZlclByb3AgJiYgKCFsYXllclBpbm5lZFByb3AgfHwgY29tcGFyZU1vZGUpICYmIChcbiAgICAgICAgICAgIDxNYXBQb3BvdmVyXG4gICAgICAgICAgICAgIHg9e21vdXNlUG9zaXRpb25bMF19XG4gICAgICAgICAgICAgIHk9e21vdXNlUG9zaXRpb25bMV19XG4gICAgICAgICAgICAgIHsuLi5jb21tb25Qcm9wfVxuICAgICAgICAgICAgICBsYXllckhvdmVyUHJvcD17bGF5ZXJIb3ZlclByb3B9XG4gICAgICAgICAgICAgIGZyb3plbj17ZmFsc2V9XG4gICAgICAgICAgICAgIGNvb3JkaW5hdGU9e2ludGVyYWN0aW9uQ29uZmlnLmNvb3JkaW5hdGUuZW5hYmxlZCAmJiBjb29yZGluYXRlfVxuICAgICAgICAgICAgICBvblNldEZlYXR1cmVzPXt0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5zZXRGZWF0dXJlc31cbiAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRGZWF0dXJlPXt0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5zZXRTZWxlY3RlZEZlYXR1cmV9XG4gICAgICAgICAgICAgIGZlYXR1cmVDb2xsZWN0aW9uPXt0aGlzLmZlYXR1cmVDb2xsZWN0aW9uU2VsZWN0b3IodGhpcy5wcm9wcyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLyogZXNsaW50LWVuYWJsZSBjb21wbGV4aXR5ICovXG5cbiAgICBfZ2V0SG92ZXJYWSh2aWV3cG9ydCwgbG5nTGF0KSB7XG4gICAgICBjb25zdCBzY3JlZW5Db29yZCA9ICF2aWV3cG9ydCB8fCAhbG5nTGF0ID8gbnVsbCA6IHZpZXdwb3J0LnByb2plY3QobG5nTGF0KTtcbiAgICAgIHJldHVybiBzY3JlZW5Db29yZCAmJiB7eDogc2NyZWVuQ29vcmRbMF0sIHk6IHNjcmVlbkNvb3JkWzFdfTtcbiAgICB9XG5cbiAgICBfcmVuZGVyRGVja092ZXJsYXkobGF5ZXJzRm9yRGVjaywgb3B0aW9ucyA9IHtwcmltYXJ5TWFwOiBmYWxzZX0pIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbWFwU3RhdGUsXG4gICAgICAgIG1hcFN0eWxlLFxuICAgICAgICB2aXNTdGF0ZSxcbiAgICAgICAgdmlzU3RhdGVBY3Rpb25zLFxuICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbixcbiAgICAgICAgbWFwYm94QXBpVXJsLFxuICAgICAgICBkZWNrR2xQcm9wcyxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIG1hcENvbnRyb2xzLFxuICAgICAgICB0aGVtZVxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGNvbnN0IHtob3ZlckluZm8sIGVkaXRvcn0gPSB2aXNTdGF0ZTtcbiAgICAgIGNvbnN0IHtwcmltYXJ5TWFwfSA9IG9wdGlvbnM7XG5cbiAgICAgIC8vIGRpc2FibGUgZG91YmxlIGNsaWNrIHpvb20gd2hlbiBlZGl0b3IgaXMgaW4gYW55IGRyYXcgbW9kZVxuICAgICAgY29uc3Qge21hcERyYXd9ID0gbWFwQ29udHJvbHM7XG4gICAgICBjb25zdCB7YWN0aXZlOiBlZGl0b3JNZW51QWN0aXZlID0gZmFsc2V9ID0gbWFwRHJhdyB8fCB7fTtcbiAgICAgIGNvbnN0IGlzRWRpdG9yRHJhd2luZ01vZGUgPSBFZGl0b3JMYXllclV0aWxzLmlzRHJhd2luZ0FjdGl2ZShlZGl0b3JNZW51QWN0aXZlLCBlZGl0b3IubW9kZSk7XG5cbiAgICAgIGNvbnN0IHZpZXdwb3J0ID0gZ2V0Vmlld3BvcnRGcm9tTWFwU3RhdGUobWFwU3RhdGUpO1xuXG4gICAgICBjb25zdCBlZGl0b3JGZWF0dXJlU2VsZWN0ZWRJbmRleCA9IHRoaXMuc2VsZWN0ZWRQb2x5Z29uSW5kZXhTZWxlY3Rvcih0aGlzLnByb3BzKTtcblxuICAgICAgY29uc3Qge3NldEZlYXR1cmVzLCBvbkxheWVyQ2xpY2ssIHNldFNlbGVjdGVkRmVhdHVyZX0gPSB2aXNTdGF0ZUFjdGlvbnM7XG5cbiAgICAgIGNvbnN0IGRlY2tHbExheWVycyA9IGNvbXB1dGVEZWNrTGF5ZXJzKFxuICAgICAgICB7XG4gICAgICAgICAgdmlzU3RhdGUsXG4gICAgICAgICAgbWFwU3RhdGUsXG4gICAgICAgICAgbWFwU3R5bGVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG1hcEluZGV4OiBpbmRleCxcbiAgICAgICAgICBwcmltYXJ5TWFwLFxuICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICAgICAgICAgIG1hcGJveEFwaVVybCxcbiAgICAgICAgICBsYXllcnNGb3JEZWNrLFxuICAgICAgICAgIGVkaXRvckluZm86IHByaW1hcnlNYXBcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIGVkaXRvcixcbiAgICAgICAgICAgICAgICBlZGl0b3JNZW51QWN0aXZlLFxuICAgICAgICAgICAgICAgIG9uU2V0RmVhdHVyZXM6IHNldEZlYXR1cmVzLFxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkRmVhdHVyZSxcbiAgICAgICAgICAgICAgICBmZWF0dXJlQ29sbGVjdGlvbjogdGhpcy5mZWF0dXJlQ29sbGVjdGlvblNlbGVjdG9yKHRoaXMucHJvcHMpLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkRmVhdHVyZUluZGV4ZXM6IHRoaXMuc2VsZWN0ZWRGZWF0dXJlSW5kZXhBcnJheVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgZWRpdG9yRmVhdHVyZVNlbGVjdGVkSW5kZXhcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIHZpZXdwb3J0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBvbkxheWVySG92ZXI6IHRoaXMuX29uTGF5ZXJIb3ZlcixcbiAgICAgICAgICBvblNldExheWVyRG9tYWluOiB0aGlzLl9vbkxheWVyU2V0RG9tYWluXG4gICAgICAgIH0sXG4gICAgICAgIGRlY2tHbFByb3BzXG4gICAgICApO1xuXG4gICAgICBjb25zdCBleHRyYURlY2tQYXJhbXM6IHtcbiAgICAgICAgZ2V0VG9vbHRpcD86IChpbmZvOiBhbnkpID0+IG9iamVjdCB8IG51bGw7XG4gICAgICAgIGdldEN1cnNvcj86ICh7aXNEcmFnZ2luZzogYm9vbGVhbn0pID0+IHN0cmluZztcbiAgICAgIH0gPSB7fTtcbiAgICAgIGlmIChwcmltYXJ5TWFwKSB7XG4gICAgICAgIGV4dHJhRGVja1BhcmFtcy5nZXRUb29sdGlwID0gaW5mbyA9PlxuICAgICAgICAgIEVkaXRvckxheWVyVXRpbHMuZ2V0VG9vbHRpcChpbmZvLCB7XG4gICAgICAgICAgICBlZGl0b3JNZW51QWN0aXZlLFxuICAgICAgICAgICAgZWRpdG9yLFxuICAgICAgICAgICAgdGhlbWVcbiAgICAgICAgICB9KTtcblxuICAgICAgICBleHRyYURlY2tQYXJhbXMuZ2V0Q3Vyc29yID0gKHtpc0RyYWdnaW5nfToge2lzRHJhZ2dpbmc6IGJvb2xlYW59KSA9PiB7XG4gICAgICAgICAgY29uc3QgZWRpdG9yQ3Vyc29yID0gRWRpdG9yTGF5ZXJVdGlscy5nZXRDdXJzb3Ioe1xuICAgICAgICAgICAgZWRpdG9yTWVudUFjdGl2ZSxcbiAgICAgICAgICAgIGVkaXRvcixcbiAgICAgICAgICAgIGhvdmVySW5mb1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmIChlZGl0b3JDdXJzb3IpIHJldHVybiBlZGl0b3JDdXJzb3I7XG5cbiAgICAgICAgICBpZiAoaXNEcmFnZ2luZykgcmV0dXJuICdncmFiYmluZyc7XG4gICAgICAgICAgaWYgKGhvdmVySW5mbz8ubGF5ZXIpIHJldHVybiAncG9pbnRlcic7XG4gICAgICAgICAgcmV0dXJuICdncmFiJztcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgdmlld3MgPSBkZWNrR2xQcm9wcz8udmlld3NcbiAgICAgICAgPyBkZWNrR2xQcm9wcz8udmlld3MoKVxuICAgICAgICA6IG5ldyBNYXBWaWV3KHtsZWdhY3lNZXRlclNpemVzOiB0cnVlfSk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbk1vdXNlTW92ZT17XG4gICAgICAgICAgICBwcmltYXJ5TWFwXG4gICAgICAgICAgICAgID8gLy8gQHRzLWV4cGVjdC1lcnJvciBzaG91bGQgYmUgZGVjayB2aWV3cG9ydFxuICAgICAgICAgICAgICAgIGV2ZW50ID0+IHRoaXMucHJvcHMudmlzU3RhdGVBY3Rpb25zLm9uTW91c2VNb3ZlKG5vcm1hbGl6ZUV2ZW50KGV2ZW50LCB2aWV3cG9ydCkpXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgPERlY2tHTFxuICAgICAgICAgICAgaWQ9XCJkZWZhdWx0LWRlY2tnbC1vdmVybGF5XCJcbiAgICAgICAgICAgIHsuLi5kZWNrR2xQcm9wc31cbiAgICAgICAgICAgIHZpZXdzPXt2aWV3c31cbiAgICAgICAgICAgIGxheWVycz17ZGVja0dsTGF5ZXJzfVxuICAgICAgICAgICAgY29udHJvbGxlcj17e2RvdWJsZUNsaWNrWm9vbTogIWlzRWRpdG9yRHJhd2luZ01vZGV9fVxuICAgICAgICAgICAgdmlld1N0YXRlPXttYXBTdGF0ZX1cbiAgICAgICAgICAgIHBpY2tpbmdSYWRpdXM9e0RFRkFVTFRfUElDS0lOR19SQURJVVN9XG4gICAgICAgICAgICBvbkJlZm9yZVJlbmRlcj17dGhpcy5fb25CZWZvcmVSZW5kZXJ9XG4gICAgICAgICAgICBvblZpZXdTdGF0ZUNoYW5nZT17dGhpcy5fb25WaWV3cG9ydENoYW5nZX1cbiAgICAgICAgICAgIHsuLi5leHRyYURlY2tQYXJhbXN9XG4gICAgICAgICAgICBvbkhvdmVyPXsoZGF0YSwgZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcmVzID0gRWRpdG9yTGF5ZXJVdGlscy5vbkhvdmVyKGRhdGEsIHtcbiAgICAgICAgICAgICAgICBlZGl0b3JNZW51QWN0aXZlLFxuICAgICAgICAgICAgICAgIGVkaXRvcixcbiAgICAgICAgICAgICAgICBob3ZlckluZm9cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChyZXMpIHJldHVybjtcblxuICAgICAgICAgICAgICAvLyBhZGQgYG1hcEluZGV4YCBwcm9wZXJ0eSB3aGljaCB3aWxsIGVuZCB1cCBpbiB0aGUgdGhlIGBob3ZlckluZm9gIG9iamVjdCBvZiBgdmlzU3RhdGVgXG4gICAgICAgICAgICAgIC8vIHRoaXMgaXMgZm9yIGxpbWl0aW5nIHRoZSBkaXNwbGF5IG9mIHRoZSBgPE1hcFBvcG92ZXI+YCB0byB0aGUgYDxNYXBDb250YWluZXI+YCB0aGUgdXNlciBpcyBpbnRlcmFjdGluZyB3aXRoXG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgKGRvZXMgbm90IGZhaWwgd2l0aCBsb2NhbCB5YXJuLXRlc3QpXG4gICAgICAgICAgICAgIGRhdGEubWFwSW5kZXggPSBpbmRleDtcblxuICAgICAgICAgICAgICB2aXNTdGF0ZUFjdGlvbnMub25MYXllckhvdmVyKGRhdGEpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhkYXRhLCBldmVudCkgPT4ge1xuICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIG5vcm1hbGl6ZUV2ZW50KGV2ZW50LnNyY0V2ZW50LCB2aWV3cG9ydCk7XG4gICAgICAgICAgICAgIGNvbnN0IHJlcyA9IEVkaXRvckxheWVyVXRpbHMub25DbGljayhkYXRhLCBldmVudCwge1xuICAgICAgICAgICAgICAgIGVkaXRvck1lbnVBY3RpdmUsXG4gICAgICAgICAgICAgICAgZWRpdG9yLFxuICAgICAgICAgICAgICAgIG9uTGF5ZXJDbGljayxcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEZlYXR1cmUsXG4gICAgICAgICAgICAgICAgbWFwSW5kZXg6IGluZGV4XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICBpZiAocmVzKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgdmlzU3RhdGVBY3Rpb25zLm9uTGF5ZXJDbGljayhkYXRhKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkVycm9yPXt0aGlzLl9vbkRlY2tFcnJvcn1cbiAgICAgICAgICAgIHJlZj17Y29tcCA9PiB7XG4gICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgaWYgKGNvbXAgJiYgY29tcC5kZWNrICYmICF0aGlzLl9kZWNrKSB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIHRoaXMuX2RlY2sgPSBjb21wLmRlY2s7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbldlYkdMSW5pdGlhbGl6ZWQ9e2dsID0+IHRoaXMuX29uRGVja0luaXRpYWxpemVkKGdsKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgX3VwZGF0ZU1hcGJveExheWVycygpIHtcbiAgICAgIGNvbnN0IG1hcGJveExheWVycyA9IHRoaXMubWFwYm94TGF5ZXJzU2VsZWN0b3IodGhpcy5wcm9wcyk7XG4gICAgICBpZiAoIU9iamVjdC5rZXlzKG1hcGJveExheWVycykubGVuZ3RoICYmICFPYmplY3Qua2V5cyh0aGlzLnByZXZpb3VzTGF5ZXJzKS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGVNYXBib3hMYXllcnModGhpcy5fbWFwLCBtYXBib3hMYXllcnMsIHRoaXMucHJldmlvdXNMYXllcnMpO1xuXG4gICAgICB0aGlzLnByZXZpb3VzTGF5ZXJzID0gbWFwYm94TGF5ZXJzO1xuICAgIH1cblxuICAgIF9yZW5kZXJNYXBib3hPdmVybGF5cygpIHtcbiAgICAgIGlmICh0aGlzLl9tYXAgJiYgdGhpcy5fbWFwLmlzU3R5bGVMb2FkZWQoKSkge1xuICAgICAgICB0aGlzLl91cGRhdGVNYXBib3hMYXllcnMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfb25WaWV3cG9ydENoYW5nZSA9ICh7dmlld1N0YXRlfSkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMuaXNFeHBvcnQpIHtcbiAgICAgICAgLy8gSW1hZ2UgZXhwb3J0IG1hcCBzaG91bGRuJ3QgYmUgaW50ZXJhY3RpdmUgKG90aGVyd2lzZSB0aGlzIGNhbGxiYWNrIGNhblxuICAgICAgICAvLyBsZWFkIHRvIGluYWR2ZXJ0ZW50IGNoYW5nZXMgdG8gdGhlIHN0YXRlIG9mIHRoZSBtYWluIG1hcClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgb25WaWV3UG9ydENoYW5nZShcbiAgICAgICAgdmlld1N0YXRlLFxuICAgICAgICB0aGlzLnByb3BzLm1hcFN0YXRlQWN0aW9ucy51cGRhdGVNYXAsXG4gICAgICAgIHRoaXMucHJvcHMub25WaWV3U3RhdGVDaGFuZ2UsXG4gICAgICAgIHRoaXMucHJvcHMucHJpbWFyeSxcbiAgICAgICAgdGhpcy5wcm9wcy5pbmRleFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgX3RvZ2dsZU1hcENvbnRyb2wgPSBwYW5lbElkID0+IHtcbiAgICAgIGNvbnN0IHtpbmRleCwgdWlTdGF0ZUFjdGlvbnN9ID0gdGhpcy5wcm9wcztcblxuICAgICAgdWlTdGF0ZUFjdGlvbnMudG9nZ2xlTWFwQ29udHJvbChwYW5lbElkLCBOdW1iZXIoaW5kZXgpKTtcbiAgICB9O1xuXG4gICAgLyogZXNsaW50LWRpc2FibGUgY29tcGxleGl0eSAqL1xuICAgIF9yZW5kZXJNYXAoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHZpc1N0YXRlLFxuICAgICAgICBtYXBTdGF0ZSxcbiAgICAgICAgbWFwU3R5bGUsXG4gICAgICAgIG1hcFN0YXRlQWN0aW9ucyxcbiAgICAgICAgTWFwQ29tcG9uZW50ID0gU3RhdGljTWFwLFxuICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbixcbiAgICAgICAgbWFwYm94QXBpVXJsLFxuICAgICAgICBtYXBDb250cm9scyxcbiAgICAgICAgaXNFeHBvcnQsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgdWlTdGF0ZUFjdGlvbnMsXG4gICAgICAgIHZpc1N0YXRlQWN0aW9ucyxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHByaW1hcnksXG4gICAgICAgIGJvdHRvbU1hcENvbnRhaW5lclByb3BzLFxuICAgICAgICB0b3BNYXBDb250YWluZXJQcm9wcyxcbiAgICAgICAgdGhlbWUsXG4gICAgICAgIGRhdGFzZXRBdHRyaWJ1dGlvbnMgPSBbXSxcbiAgICAgICAgY29udGFpbmVySWQgPSAwXG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3Qge2xheWVycywgZGF0YXNldHMsIGVkaXRvciwgaW50ZXJhY3Rpb25Db25maWd9ID0gdmlzU3RhdGU7XG5cbiAgICAgIGNvbnN0IGxheWVyc1RvUmVuZGVyID0gdGhpcy5sYXllcnNUb1JlbmRlclNlbGVjdG9yKHRoaXMucHJvcHMpO1xuICAgICAgY29uc3QgbGF5ZXJzRm9yRGVjayA9IHRoaXMubGF5ZXJzRm9yRGVja1NlbGVjdG9yKHRoaXMucHJvcHMpO1xuXG4gICAgICAvLyBDdXJyZW50IHN0eWxlIGNhbiBiZSBhIGN1c3RvbSBzdHlsZSwgZnJvbSB3aGljaCB3ZSBwdWxsIHRoZSBtYXBib3ggQVBJIGFjY2Nlc3MgdG9rZW5cbiAgICAgIGNvbnN0IGN1cnJlbnRTdHlsZSA9IG1hcFN0eWxlLm1hcFN0eWxlcz8uW21hcFN0eWxlLnN0eWxlVHlwZV07XG4gICAgICBjb25zdCBtYXBQcm9wcyA9IHtcbiAgICAgICAgLi4ubWFwU3RhdGUsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuOiBjdXJyZW50U3R5bGU/LmFjY2Vzc1Rva2VuIHx8IG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICAgICAgICBtYXBib3hBcGlVcmwsXG4gICAgICAgIHRyYW5zZm9ybVJlcXVlc3Q6IHRoaXMucHJvcHMudHJhbnNmb3JtUmVxdWVzdCB8fCB0cmFuc2Zvcm1SZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBoYXNHZW9jb2RlckxheWVyID0gQm9vbGVhbihsYXllcnMuZmluZChsID0+IGwuaWQgPT09IEdFT0NPREVSX0xBWUVSX0lEKSk7XG4gICAgICBjb25zdCBpc1NwbGl0ID0gQm9vbGVhbihtYXBTdGF0ZS5pc1NwbGl0KTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TWFwQ29udHJvbFxuICAgICAgICAgICAgbWFwU3RhdGU9e21hcFN0YXRlfVxuICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgYXZhaWxhYmxlTG9jYWxlcz17TE9DQUxFX0NPREVTX0FSUkFZfVxuICAgICAgICAgICAgZHJhZ1JvdGF0ZT17bWFwU3RhdGUuZHJhZ1JvdGF0ZX1cbiAgICAgICAgICAgIGlzU3BsaXQ9e2lzU3BsaXR9XG4gICAgICAgICAgICBwcmltYXJ5PXtwcmltYXJ5fVxuICAgICAgICAgICAgaXNFeHBvcnQ9e2lzRXhwb3J0fVxuICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XG4gICAgICAgICAgICBsYXllcnNUb1JlbmRlcj17bGF5ZXJzVG9SZW5kZXJ9XG4gICAgICAgICAgICBtYXBJbmRleD17aW5kZXh9XG4gICAgICAgICAgICBtYXBDb250cm9scz17bWFwQ29udHJvbHN9XG4gICAgICAgICAgICByZWFkT25seT17dGhpcy5wcm9wcy5yZWFkT25seX1cbiAgICAgICAgICAgIHNjYWxlPXttYXBTdGF0ZS5zY2FsZSB8fCAxfVxuICAgICAgICAgICAgdG9wPXtcbiAgICAgICAgICAgICAgaW50ZXJhY3Rpb25Db25maWcuZ2VvY29kZXIgJiYgaW50ZXJhY3Rpb25Db25maWcuZ2VvY29kZXIuZW5hYmxlZFxuICAgICAgICAgICAgICAgID8gdGhlbWUubWFwQ29udHJvbFRvcFxuICAgICAgICAgICAgICAgIDogMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWRpdG9yPXtlZGl0b3J9XG4gICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgIG9uVG9nZ2xlUGVyc3BlY3RpdmU9e21hcFN0YXRlQWN0aW9ucy50b2dnbGVQZXJzcGVjdGl2ZX1cbiAgICAgICAgICAgIG9uVG9nZ2xlU3BsaXRNYXA9e21hcFN0YXRlQWN0aW9ucy50b2dnbGVTcGxpdE1hcH1cbiAgICAgICAgICAgIG9uTWFwVG9nZ2xlTGF5ZXI9e3RoaXMuX2hhbmRsZU1hcFRvZ2dsZUxheWVyfVxuICAgICAgICAgICAgb25Ub2dnbGVNYXBDb250cm9sPXt0aGlzLl90b2dnbGVNYXBDb250cm9sfVxuICAgICAgICAgICAgb25Ub2dnbGVTcGxpdE1hcFZpZXdwb3J0PXttYXBTdGF0ZUFjdGlvbnMudG9nZ2xlU3BsaXRNYXBWaWV3cG9ydH1cbiAgICAgICAgICAgIG9uU2V0RWRpdG9yTW9kZT17dmlzU3RhdGVBY3Rpb25zLnNldEVkaXRvck1vZGV9XG4gICAgICAgICAgICBvblNldExvY2FsZT17dWlTdGF0ZUFjdGlvbnMuc2V0TG9jYWxlfVxuICAgICAgICAgICAgb25Ub2dnbGVFZGl0b3JWaXNpYmlsaXR5PXt2aXNTdGF0ZUFjdGlvbnMudG9nZ2xlRWRpdG9yVmlzaWJpbGl0eX1cbiAgICAgICAgICAgIG1hcEhlaWdodD17bWFwU3RhdGUuaGVpZ2h0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2lzU3BsaXRTZWxlY3Rvcih0aGlzLnByb3BzKSAmJiA8RHJvcHBhYmxlIGNvbnRhaW5lcklkPXtjb250YWluZXJJZH0gLz59XG4gICAgICAgICAgey8qIFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgKi99XG4gICAgICAgICAgPE1hcENvbXBvbmVudFxuICAgICAgICAgICAga2V5PVwiYm90dG9tXCJcbiAgICAgICAgICAgIHsuLi5tYXBQcm9wc31cbiAgICAgICAgICAgIG1hcFN0eWxlPXttYXBTdHlsZS5ib3R0b21NYXBTdHlsZSA/PyBFTVBUWV9NQVBCT1hfU1RZTEV9XG4gICAgICAgICAgICB7Li4uYm90dG9tTWFwQ29udGFpbmVyUHJvcHN9XG4gICAgICAgICAgICByZWY9e3RoaXMuX3NldE1hcGJveE1hcH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5fcmVuZGVyRGVja092ZXJsYXkobGF5ZXJzRm9yRGVjaywge3ByaW1hcnlNYXA6IHRydWV9KX1cbiAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJNYXBib3hPdmVybGF5cygpfVxuICAgICAgICAgICAgPEVkaXRvclxuICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgZWRpdG9yPXtlZGl0b3J9XG4gICAgICAgICAgICAgIGZpbHRlcnM9e3RoaXMucG9seWdvbkZpbHRlcnNTZWxlY3Rvcih0aGlzLnByb3BzKX1cbiAgICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XG4gICAgICAgICAgICAgIG9uRGVsZXRlRmVhdHVyZT17dmlzU3RhdGVBY3Rpb25zLmRlbGV0ZUZlYXR1cmV9XG4gICAgICAgICAgICAgIG9uU2VsZWN0PXt2aXNTdGF0ZUFjdGlvbnMuc2V0U2VsZWN0ZWRGZWF0dXJlfVxuICAgICAgICAgICAgICBvblRvZ2dsZVBvbHlnb25GaWx0ZXI9e3Zpc1N0YXRlQWN0aW9ucy5zZXRQb2x5Z29uRmlsdGVyTGF5ZXJ9XG4gICAgICAgICAgICAgIG9uU2V0RWRpdG9yTW9kZT17dmlzU3RhdGVBY3Rpb25zLnNldEVkaXRvck1vZGV9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ2FsbCcsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZWRpdG9yLnZpc2libGUgPyAnYmxvY2snIDogJ25vbmUnXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTWFwQ29tcG9uZW50PlxuICAgICAgICAgIHttYXBTdHlsZS50b3BNYXBTdHlsZSB8fCBoYXNHZW9jb2RlckxheWVyID8gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17TUFQX1NUWUxFLnRvcH0+XG4gICAgICAgICAgICAgIHsvKiBcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSAqL31cbiAgICAgICAgICAgICAgPE1hcENvbXBvbmVudFxuICAgICAgICAgICAgICAgIGtleT1cInRvcFwiXG4gICAgICAgICAgICAgICAgey4uLm1hcFByb3BzfVxuICAgICAgICAgICAgICAgIG1hcFN0eWxlPXttYXBTdHlsZS50b3BNYXBTdHlsZX1cbiAgICAgICAgICAgICAgICB7Li4udG9wTWFwQ29udGFpbmVyUHJvcHN9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5fcmVuZGVyRGVja092ZXJsYXkoe1tHRU9DT0RFUl9MQVlFUl9JRF06IGhhc0dlb2NvZGVyTGF5ZXJ9KX1cbiAgICAgICAgICAgICAgPC9NYXBDb21wb25lbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICB7dGhpcy5fcmVuZGVyTWFwUG9wb3ZlcigpfVxuICAgICAgICAgIHt0aGlzLnByb3BzLnByaW1hcnkgPyAoXG4gICAgICAgICAgICA8QXR0cmlidXRpb25cbiAgICAgICAgICAgICAgc2hvd01hcGJveExvZ289e3RoaXMuc3RhdGUuc2hvd01hcGJveEF0dHJpYnV0aW9ufVxuICAgICAgICAgICAgICBzaG93T3NtQmFzZW1hcEF0dHJpYnV0aW9uPXt0cnVlfVxuICAgICAgICAgICAgICBkYXRhc2V0QXR0cmlidXRpb25zPXtkYXRhc2V0QXR0cmlidXRpb25zfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHt2aXNTdGF0ZX0gPSB0aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZE1hcFxuICAgICAgICAgIHJlZj17dGhpcy5fcmVmfVxuICAgICAgICAgIHN0eWxlPXt0aGlzLnN0eWxlU2VsZWN0b3IodGhpcy5wcm9wcyl9XG4gICAgICAgICAgb25Db250ZXh0TWVudT17ZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKX1cbiAgICAgICAgICBtaXhCbGVuZE1vZGU9e3Zpc1N0YXRlLm92ZXJsYXlCbGVuZGluZ31cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLl9yZW5kZXJNYXAoKX1cbiAgICAgICAgPC9TdHlsZWRNYXA+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB3aXRoVGhlbWUoTWFwQ29udGFpbmVyKTtcbn1cbiJdfQ==