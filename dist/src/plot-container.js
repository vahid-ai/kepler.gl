"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PlotContainerFactory;

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

var _reselect = require("reselect");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactMapGl = require("react-map-gl");

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _utils = require("@kepler.gl/utils");

var _reducers = require("@kepler.gl/reducers");

var _mapContainer = _interopRequireDefault(require("./map-container"));

var _mapsLayout = _interopRequireDefault(require("./maps-layout"));

var _constants = require("@kepler.gl/constants");

var _templateObject, _templateObject2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var CLASS_FILTER = ['mapboxgl-control-container', 'attrition-link', 'attrition-logo'];

var DOM_FILTER_FUNC = function DOM_FILTER_FUNC(node) {
  return !CLASS_FILTER.includes(node.className);
};

var OUT_OF_SCREEN_POSITION = -9999;
PlotContainerFactory.deps = [_mapContainer["default"], _mapsLayout["default"]]; // Remove mapbox logo in exported map, because it contains non-ascii characters

var StyledPlotContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  .mapboxgl-ctrl-bottom-left,\n  .mapboxgl-ctrl-bottom-right,\n  .mapbox-attribution-container {\n    display: none;\n  }\n\n  position: absolute;\n  top: ", "px;\n  left: ", "px;\n"])), OUT_OF_SCREEN_POSITION, OUT_OF_SCREEN_POSITION);

var StyledMapContainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", "px;\n  height: ", "px;\n  display: flex;\n"])), function (props) {
  return props.width;
}, function (props) {
  return props.height;
});

function PlotContainerFactory(MapContainer, MapsLayout) {
  var PlotContainer = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(PlotContainer, _Component);

    var _super = _createSuper(PlotContainer);

    function PlotContainer(_props) {
      var _this;

      (0, _classCallCheck2["default"])(this, PlotContainer);
      _this = _super.call(this, _props);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "plottingAreaRef", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapStyleSelector", function (props) {
        return props.mapFields.mapStyle;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapScaleSelector", function (props) {
        var imageSize = props.exportImageSetting.imageSize;
        var mapState = props.mapFields.mapState;

        if (imageSize.scale) {
          return imageSize.scale;
        }

        var scale = (0, _utils.getScaleFromImageSize)(imageSize.imageW, imageSize.imageH, mapState.width * (mapState.isSplit ? 2 : 1), mapState.height);
        return scale > 0 ? scale : 1;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scaledMapStyleSelector", (0, _reselect.createSelector)(_this.mapStyleSelector, _this.mapScaleSelector, function (mapStyle, scale) {
        return _objectSpread(_objectSpread({}, mapStyle), {}, {
          bottomMapStyle: (0, _utils.scaleMapStyleByResolution)(mapStyle.bottomMapStyle, scale),
          topMapStyle: (0, _utils.scaleMapStyleByResolution)(mapStyle.topMapStyle, scale)
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onMapRender", function (map) {
        if (map.isStyleLoaded()) {
          _this._retrieveNewScreenshot();
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_retrieveNewScreenshot", function () {
        if (_this.plottingAreaRef.current) {
          (0, _utils.convertToPng)(_this.plottingAreaRef.current, {
            filter: DOM_FILTER_FUNC
          }).then(_this.props.setExportImageDataUri)["catch"](function (err) {
            _this.props.setExportImageError(err);

            if (_this.props.enableErrorNotification) {
              _this.props.addNotification((0, _utils.exportImageError)({
                err: err
              }));
            }
          });
        }
      });
      _this._onMapRender = (0, _lodash["default"])(_this._onMapRender, 500);
      _this._retrieveNewScreenshot = (0, _lodash["default"])(_this._retrieveNewScreenshot, 500);
      return _this;
    }

    (0, _createClass2["default"])(PlotContainer, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.props.setExportImageSetting({
          processing: true
        });
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this2 = this;

        // re-fetch the new screenshot only when ratio legend or resolution changes
        var checks = ['ratio', 'resolution', 'legend'];
        var shouldRetrieveScreenshot = checks.some(function (item) {
          return _this2.props.exportImageSetting[item] !== prevProps.exportImageSetting[item];
        });

        if (shouldRetrieveScreenshot) {
          this.props.setExportImageSetting({
            processing: true
          });

          this._retrieveNewScreenshot();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            exportImageSetting = _this$props.exportImageSetting,
            mapFields = _this$props.mapFields,
            _this$props$splitMaps = _this$props.splitMaps,
            splitMaps = _this$props$splitMaps === void 0 ? [] : _this$props$splitMaps;
        var mapState = mapFields.mapState,
            visState = mapFields.visState;
        var layers = visState.layers,
            layerData = visState.layerData;
        var imageSize = exportImageSetting.imageSize,
            legend = exportImageSetting.legend;
        var isSplit = splitMaps && splitMaps.length > 1;
        var size = {
          width: (imageSize === null || imageSize === void 0 ? void 0 : imageSize.imageW) || 1,
          height: (imageSize === null || imageSize === void 0 ? void 0 : imageSize.imageH) || 1
        };
        var width = size.width / (isSplit ? 2 : 1);
        var height = size.height;
        var scale = this.mapScaleSelector(this.props);

        var newMapState = _objectSpread(_objectSpread({}, mapState), {}, {
          width: width,
          height: height,
          zoom: mapState.zoom + (Math.log2(scale) || 0)
        }); // center and all layer bounds


        if (exportImageSetting.center) {
          var renderedLayers = layers.filter(function (layer, idx) {
            return layer.id !== _constants.GEOCODER_LAYER_ID && layer.shouldRenderLayer(layerData[idx]);
          });
          var bounds = (0, _reducers.findMapBounds)(renderedLayers);
          var centerAndZoom = (0, _utils.getCenterAndZoomFromBounds)(bounds, {
            width: width,
            height: height
          });

          if (centerAndZoom) {
            var zoom = Number.isFinite(centerAndZoom.zoom) ? centerAndZoom.zoom : mapState.zoom;
            newMapState.longitude = centerAndZoom.center[0];
            newMapState.latitude = centerAndZoom.center[1];
            newMapState.zoom = zoom + Number(Math.log2(scale) || 0);
          }
        }

        var mapProps = _objectSpread(_objectSpread({}, mapFields), {}, {
          mapStyle: this.scaledMapStyleSelector(this.props),
          // override viewport based on export settings
          mapState: newMapState,
          mapControls: {
            // override map legend visibility
            mapLegend: {
              show: legend,
              active: true
            }
          },
          MapComponent: _reactMapGl.StaticMap,
          onMapRender: this._onMapRender,
          isExport: true,
          deckGlProps: _objectSpread(_objectSpread({}, mapFields.deckGlProps), {}, {
            glOptions: {
              preserveDrawingBuffer: true,
              useDevicePixels: false
            }
          })
        });

        var mapContainers = !isSplit ? /*#__PURE__*/_react["default"].createElement(MapContainer, (0, _extends2["default"])({
          index: 0,
          primary: true
        }, mapProps)) : /*#__PURE__*/_react["default"].createElement(MapsLayout, {
          className: "plot-container-maps"
        }, splitMaps.map(function (settings, index) {
          return /*#__PURE__*/_react["default"].createElement(MapContainer, (0, _extends2["default"])({
            key: index,
            index: index,
            primary: index === 1
          }, mapProps));
        }));
        return /*#__PURE__*/_react["default"].createElement(StyledPlotContainer, {
          className: "export-map-instance"
        }, /*#__PURE__*/_react["default"].createElement(StyledMapContainer, {
          ref: this.plottingAreaRef,
          width: size.width,
          height: size.height
        }, mapContainers));
      }
    }]);
    return PlotContainer;
  }(_react.Component);

  return PlotContainer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9wbG90LWNvbnRhaW5lci50c3giXSwibmFtZXMiOlsiQ0xBU1NfRklMVEVSIiwiRE9NX0ZJTFRFUl9GVU5DIiwibm9kZSIsImluY2x1ZGVzIiwiY2xhc3NOYW1lIiwiT1VUX09GX1NDUkVFTl9QT1NJVElPTiIsIlBsb3RDb250YWluZXJGYWN0b3J5IiwiZGVwcyIsIk1hcENvbnRhaW5lckZhY3RvcnkiLCJNYXBzTGF5b3V0RmFjdG9yeSIsIlN0eWxlZFBsb3RDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJTdHlsZWRNYXBDb250YWluZXIiLCJwcm9wcyIsIndpZHRoIiwiaGVpZ2h0IiwiTWFwQ29udGFpbmVyIiwiTWFwc0xheW91dCIsIlBsb3RDb250YWluZXIiLCJtYXBGaWVsZHMiLCJtYXBTdHlsZSIsImltYWdlU2l6ZSIsImV4cG9ydEltYWdlU2V0dGluZyIsIm1hcFN0YXRlIiwic2NhbGUiLCJpbWFnZVciLCJpbWFnZUgiLCJpc1NwbGl0IiwibWFwU3R5bGVTZWxlY3RvciIsIm1hcFNjYWxlU2VsZWN0b3IiLCJib3R0b21NYXBTdHlsZSIsInRvcE1hcFN0eWxlIiwibWFwIiwiaXNTdHlsZUxvYWRlZCIsIl9yZXRyaWV2ZU5ld1NjcmVlbnNob3QiLCJwbG90dGluZ0FyZWFSZWYiLCJjdXJyZW50IiwiZmlsdGVyIiwidGhlbiIsInNldEV4cG9ydEltYWdlRGF0YVVyaSIsImVyciIsInNldEV4cG9ydEltYWdlRXJyb3IiLCJlbmFibGVFcnJvck5vdGlmaWNhdGlvbiIsImFkZE5vdGlmaWNhdGlvbiIsIl9vbk1hcFJlbmRlciIsInNldEV4cG9ydEltYWdlU2V0dGluZyIsInByb2Nlc3NpbmciLCJwcmV2UHJvcHMiLCJjaGVja3MiLCJzaG91bGRSZXRyaWV2ZVNjcmVlbnNob3QiLCJzb21lIiwiaXRlbSIsInNwbGl0TWFwcyIsInZpc1N0YXRlIiwibGF5ZXJzIiwibGF5ZXJEYXRhIiwibGVnZW5kIiwibGVuZ3RoIiwic2l6ZSIsIm5ld01hcFN0YXRlIiwiem9vbSIsIk1hdGgiLCJsb2cyIiwiY2VudGVyIiwicmVuZGVyZWRMYXllcnMiLCJsYXllciIsImlkeCIsImlkIiwiR0VPQ09ERVJfTEFZRVJfSUQiLCJzaG91bGRSZW5kZXJMYXllciIsImJvdW5kcyIsImNlbnRlckFuZFpvb20iLCJOdW1iZXIiLCJpc0Zpbml0ZSIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwibWFwUHJvcHMiLCJzY2FsZWRNYXBTdHlsZVNlbGVjdG9yIiwibWFwQ29udHJvbHMiLCJtYXBMZWdlbmQiLCJzaG93IiwiYWN0aXZlIiwiTWFwQ29tcG9uZW50IiwiU3RhdGljTWFwIiwib25NYXBSZW5kZXIiLCJpc0V4cG9ydCIsImRlY2tHbFByb3BzIiwiZ2xPcHRpb25zIiwicHJlc2VydmVEcmF3aW5nQnVmZmVyIiwidXNlRGV2aWNlUGl4ZWxzIiwibWFwQ29udGFpbmVycyIsInNldHRpbmdzIiwiaW5kZXgiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQU9BOztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFTQSxJQUFNQSxZQUFZLEdBQUcsQ0FBQyw0QkFBRCxFQUErQixnQkFBL0IsRUFBaUQsZ0JBQWpELENBQXJCOztBQUNBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsSUFBSTtBQUFBLFNBQUksQ0FBQ0YsWUFBWSxDQUFDRyxRQUFiLENBQXNCRCxJQUFJLENBQUNFLFNBQTNCLENBQUw7QUFBQSxDQUE1Qjs7QUFDQSxJQUFNQyxzQkFBc0IsR0FBRyxDQUFDLElBQWhDO0FBRUFDLG9CQUFvQixDQUFDQyxJQUFyQixHQUE0QixDQUFDQyx3QkFBRCxFQUFzQkMsc0JBQXRCLENBQTVCLEMsQ0FFQTs7QUFDQSxJQUFNQyxtQkFBbUIsR0FBR0MsNkJBQU9DLEdBQVYsOFFBUWhCUCxzQkFSZ0IsRUFTZkEs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QUF5QkEsWUFBTUMsYUFBYSxHQUFHLENBQUMvRCxPQUFELGdCQUNwQixnQ0FBQyxZQUFEO0FBQWMsVUFBQSxLQUFLLEVBQUUsQ0FBckI7QUFBd0IsVUFBQSxPQUFPLEVBQUU7QUFBakMsV0FBMkNpRCxRQUEzQyxFQURvQixnQkFHcEIsZ0NBQUMsVUFBRDtBQUFZLFVBQUEsU0FBUyxFQUFDO0FBQXRCLFdBQ0d4QixTQUFTLENBQUNwQixHQUFWLENBQWMsVUFBQzJELFFBQUQsRUFBV0MsS0FBWDtBQUFBLDhCQUNiLGdDQUFDLFlBQUQ7QUFBYyxZQUFBLEdBQUcsRUFBRUEsS0FBbkI7QUFBMEIsWUFBQSxLQUFLLEVBQUVBLEtBQWpDO0FBQXdDLFlBQUEsT0FBTyxFQUFFQSxLQUFLLEtBQUs7QUFBM0QsYUFBa0VoQixRQUFsRSxFQURhO0FBQUEsU0FBZCxDQURILENBSEY7QUFTQSw0QkFDRSxnQ0FBQyxtQkFBRDtBQUFxQixVQUFBLFNBQVMsRUFBQztBQUEvQix3QkFDRSxnQ0FBQyxrQkFBRDtBQUFvQixVQUFBLEdBQUcsRUFBRSxLQUFLekMsZUFBOUI7QUFBK0MsVUFBQSxLQUFLLEVBQUV1QixJQUFJLENBQUM1QyxLQUEzRDtBQUFrRSxVQUFBLE1BQU0sRUFBRTRDLElBQUksQ0FBQzNDO0FBQS9FLFdBQ0cyRSxhQURILENBREYsQ0FERjtBQU9EO0FBeEpzQztBQUFBO0FBQUEsSUFDYkcsZ0JBRGE7O0FBMEp6QyxTQUFPM0UsYUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuLy8gbGlicmFyaWVzXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGNyZWF0ZVJlZn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1N0YXRpY01hcH0gZnJvbSAncmVhY3QtbWFwLWdsJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xuaW1wb3J0IHtcbiAgZXhwb3J0SW1hZ2VFcnJvcixcbiAgc2NhbGVNYXBTdHlsZUJ5UmVzb2x1dGlvbixcbiAgZ2V0Q2VudGVyQW5kWm9vbUZyb21Cb3VuZHMsXG4gIGNvbnZlcnRUb1BuZyxcbiAgZ2V0U2NhbGVGcm9tSW1hZ2VTaXplXG59IGZyb20gJ0BrZXBsZXIuZ2wvdXRpbHMnO1xuaW1wb3J0IHtmaW5kTWFwQm91bmRzfSBmcm9tICdAa2VwbGVyLmdsL3JlZHVjZXJzJztcbmltcG9ydCBNYXBDb250YWluZXJGYWN0b3J5IGZyb20gJy4vbWFwLWNvbnRhaW5lcic7XG5pbXBvcnQgTWFwc0xheW91dEZhY3RvcnkgZnJvbSAnLi9tYXBzLWxheW91dCc7XG5cbmltcG9ydCB7R0VPQ09ERVJfTEFZRVJfSUQsIEV4cG9ydEltYWdlfSBmcm9tICdAa2VwbGVyLmdsL2NvbnN0YW50cyc7XG5pbXBvcnQge1NwbGl0TWFwfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcbmltcG9ydCB7XG4gIHNldEV4cG9ydEltYWdlRGF0YVVyaSxcbiAgc2V0RXhwb3J0SW1hZ2VFcnJvcixcbiAgc2V0RXhwb3J0SW1hZ2VTZXR0aW5nXG59IGZyb20gJ0BrZXBsZXIuZ2wvYWN0aW9ucyc7XG5pbXBvcnQge21hcEZpZWxkc1NlbGVjdG9yfSBmcm9tICcuL2tlcGxlci1nbCc7XG5cbmNvbnN0IENMQVNTX0ZJTFRFUiA9IFsnbWFwYm94Z2wtY29udHJvbC1jb250YWluZXInLCAnYXR0cml0aW9uLWxpbmsnLCAnYXR0cml0aW9uLWxvZ28nXTtcbmNvbnN0IERPTV9GSUxURVJfRlVOQyA9IG5vZGUgPT4gIUNMQVNTX0ZJTFRFUi5pbmNsdWRlcyhub2RlLmNsYXNzTmFtZSk7XG5jb25zdCBPVVRfT0ZfU0NSRUVOX1BPU0lUSU9OID0gLTk5OTk7XG5cblBsb3RDb250YWluZXJGYWN0b3J5LmRlcHMgPSBbTWFwQ29udGFpbmVyRmFjdG9yeSwgTWFwc0xheW91dEZhY3RvcnldO1xuXG4vLyBSZW1vdmUgbWFwYm94IGxvZ28gaW4gZXhwb3J0ZWQgbWFwLCBiZWNhdXNlIGl0IGNvbnRhaW5zIG5vbi1hc2NpaSBjaGFyYWN0ZXJzXG5jb25zdCBTdHlsZWRQbG90Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgLm1hcGJveGdsLWN0cmwtYm90dG9tLWxlZnQsXG4gIC5tYXBib3hnbC1jdHJsLWJvdHRvbS1yaWdodCxcbiAgLm1hcGJveC1hdHRyaWJ1dGlvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogJHtPVVRfT0ZfU0NSRUVOX1BPU0lUSU9OfXB4O1xuICBsZWZ0OiAke09VVF9PRl9TQ1JFRU5fUE9TSVRJT059cHg7XG5gO1xuXG5pbnRlcmZhY2UgU3R5bGVkTWFwQ29udGFpbmVyUHJvcHMge1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xufVxuXG5jb25zdCBTdHlsZWRNYXBDb250YWluZXIgPSBzdHlsZWQuZGl2PFN0eWxlZE1hcENvbnRhaW5lclByb3BzPmBcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9cHg7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHR9cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5pbnRlcmZhY2UgUGxvdENvbnRhaW5lclByb3BzIHtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbiAgZXhwb3J0SW1hZ2VTZXR0aW5nOiBFeHBvcnRJbWFnZTtcbiAgYWRkTm90aWZpY2F0aW9uOiBGdW5jdGlvbjtcbiAgbWFwRmllbGRzOiBSZXR1cm5UeXBlPHR5cGVvZiBtYXBGaWVsZHNTZWxlY3Rvcj47XG4gIHNldEV4cG9ydEltYWdlU2V0dGluZzogdHlwZW9mIHNldEV4cG9ydEltYWdlU2V0dGluZztcbiAgc2V0RXhwb3J0SW1hZ2VEYXRhVXJpOiB0eXBlb2Ygc2V0RXhwb3J0SW1hZ2VEYXRhVXJpO1xuICBzZXRFeHBvcnRJbWFnZUVycm9yOiB0eXBlb2Ygc2V0RXhwb3J0SW1hZ2VFcnJvcjtcbiAgc3BsaXRNYXBzPzogU3BsaXRNYXBbXTtcbiAgZW5hYmxlRXJyb3JOb3RpZmljYXRpb24/OiBib29sZWFuO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQbG90Q29udGFpbmVyRmFjdG9yeShcbiAgTWFwQ29udGFpbmVyOiBSZXR1cm5UeXBlPHR5cGVvZiBNYXBDb250YWluZXJGYWN0b3J5PixcbiAgTWFwc0xheW91dDogUmV0dXJuVHlwZTx0eXBlb2YgTWFwc0xheW91dEZhY3Rvcnk+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPFBsb3RDb250YWluZXJQcm9wcz4ge1xuICBjbGFzcyBQbG90Q29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50PFBsb3RDb250YWluZXJQcm9wcz4ge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgICB0aGlzLl9vbk1hcFJlbmRlciA9IGRlYm91bmNlKHRoaXMuX29uTWFwUmVuZGVyLCA1MDApO1xuICAgICAgdGhpcy5fcmV0cmlldmVOZXdTY3JlZW5zaG90ID0gZGVib3VuY2UodGhpcy5fcmV0cmlldmVOZXdTY3JlZW5zaG90LCA1MDApO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5wcm9wcy5zZXRFeHBvcnRJbWFnZVNldHRpbmcoe3Byb2Nlc3Npbmc6IHRydWV9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAvLyByZS1mZXRjaCB0aGUgbmV3IHNjcmVlbnNob3Qgb25seSB3aGVuIHJhdGlvIGxlZ2VuZCBvciByZXNvbHV0aW9uIGNoYW5nZXNcbiAgICAgIGNvbnN0IGNoZWNrcyA9IFsncmF0aW8nLCAncmVzb2x1dGlvbicsICdsZWdlbmQnXTtcbiAgICAgIGNvbnN0IHNob3VsZFJldHJpZXZlU2NyZWVuc2hvdCA9IGNoZWNrcy5zb21lKFxuICAgICAgICBpdGVtID0+IHRoaXMucHJvcHMuZXhwb3J0SW1hZ2VTZXR0aW5nW2l0ZW1dICE9PSBwcmV2UHJvcHMuZXhwb3J0SW1hZ2VTZXR0aW5nW2l0ZW1dXG4gICAgICApO1xuICAgICAgaWYgKHNob3VsZFJldHJpZXZlU2NyZWVuc2hvdCkge1xuICAgICAgICB0aGlzLnByb3BzLnNldEV4cG9ydEltYWdlU2V0dGluZyh7cHJvY2Vzc2luZzogdHJ1ZX0pO1xuICAgICAgICB0aGlzLl9yZXRyaWV2ZU5ld1NjcmVlbnNob3QoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwbG90dGluZ0FyZWFSZWYgPSBjcmVhdGVSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XG5cbiAgICBtYXBTdHlsZVNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMubWFwRmllbGRzLm1hcFN0eWxlO1xuICAgIG1hcFNjYWxlU2VsZWN0b3IgPSBwcm9wcyA9PiB7XG4gICAgICBjb25zdCB7aW1hZ2VTaXplfSA9IHByb3BzLmV4cG9ydEltYWdlU2V0dGluZztcbiAgICAgIGNvbnN0IHttYXBTdGF0ZX0gPSBwcm9wcy5tYXBGaWVsZHM7XG4gICAgICBpZiAoaW1hZ2VTaXplLnNjYWxlKSB7XG4gICAgICAgIHJldHVybiBpbWFnZVNpemUuc2NhbGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNjYWxlID0gZ2V0U2NhbGVGcm9tSW1hZ2VTaXplKFxuICAgICAgICBpbWFnZVNpemUuaW1hZ2VXLFxuICAgICAgICBpbWFnZVNpemUuaW1hZ2VILFxuICAgICAgICBtYXBTdGF0ZS53aWR0aCAqIChtYXBTdGF0ZS5pc1NwbGl0ID8gMiA6IDEpLFxuICAgICAgICBtYXBTdGF0ZS5oZWlnaHRcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBzY2FsZSA+IDAgPyBzY2FsZSA6IDE7XG4gICAgfTtcblxuICAgIHNjYWxlZE1hcFN0eWxlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICAgIHRoaXMubWFwU3R5bGVTZWxlY3RvcixcbiAgICAgIHRoaXMubWFwU2NhbGVTZWxlY3RvcixcbiAgICAgIChtYXBTdHlsZSwgc2NhbGUpID0+ICh7XG4gICAgICAgIC4uLm1hcFN0eWxlLFxuICAgICAgICBib3R0b21NYXBTdHlsZTogc2NhbGVNYXBTdHlsZUJ5UmVzb2x1dGlvbihtYXBTdHlsZS5ib3R0b21NYXBTdHlsZSwgc2NhbGUpLFxuICAgICAgICB0b3BNYXBTdHlsZTogc2NhbGVNYXBTdHlsZUJ5UmVzb2x1dGlvbihtYXBTdHlsZS50b3BNYXBTdHlsZSwgc2NhbGUpXG4gICAgICB9KVxuICAgICk7XG5cbiAgICBfb25NYXBSZW5kZXIgPSBtYXAgPT4ge1xuICAgICAgaWYgKG1hcC5pc1N0eWxlTG9hZGVkKCkpIHtcbiAgICAgICAgdGhpcy5fcmV0cmlldmVOZXdTY3JlZW5zaG90KCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9yZXRyaWV2ZU5ld1NjcmVlbnNob3QgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wbG90dGluZ0FyZWFSZWYuY3VycmVudCkge1xuICAgICAgICBjb252ZXJ0VG9QbmcodGhpcy5wbG90dGluZ0FyZWFSZWYuY3VycmVudCwge2ZpbHRlcjogRE9NX0ZJTFRFUl9GVU5DfSlcbiAgICAgICAgICAudGhlbih0aGlzLnByb3BzLnNldEV4cG9ydEltYWdlRGF0YVVyaSlcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2V0RXhwb3J0SW1hZ2VFcnJvcihlcnIpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZW5hYmxlRXJyb3JOb3RpZmljYXRpb24pIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5hZGROb3RpZmljYXRpb24oZXhwb3J0SW1hZ2VFcnJvcih7ZXJyfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7ZXhwb3J0SW1hZ2VTZXR0aW5nLCBtYXBGaWVsZHMsIHNwbGl0TWFwcyA9IFtdfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7bWFwU3RhdGUsIHZpc1N0YXRlfSA9IG1hcEZpZWxkcztcbiAgICAgIGNvbnN0IHtsYXllcnMsIGxheWVyRGF0YX0gPSB2aXNTdGF0ZTtcbiAgICAgIGNvbnN0IHtpbWFnZVNpemUsIGxlZ2VuZH0gPSBleHBvcnRJbWFnZVNldHRpbmc7XG5cbiAgICAgIGNvbnN0IGlzU3BsaXQgPSBzcGxpdE1hcHMgJiYgc3BsaXRNYXBzLmxlbmd0aCA+IDE7XG5cbiAgICAgIGNvbnN0IHNpemUgPSB7XG4gICAgICAgIHdpZHRoOiBpbWFnZVNpemU/LmltYWdlVyB8fCAxLFxuICAgICAgICBoZWlnaHQ6IGltYWdlU2l6ZT8uaW1hZ2VIIHx8IDFcbiAgICAgIH07XG4gICAgICBjb25zdCB3aWR0aCA9IHNpemUud2lkdGggLyAoaXNTcGxpdCA/IDIgOiAxKTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IHNpemUuaGVpZ2h0O1xuICAgICAgY29uc3Qgc2NhbGUgPSB0aGlzLm1hcFNjYWxlU2VsZWN0b3IodGhpcy5wcm9wcyk7XG4gICAgICBjb25zdCBuZXdNYXBTdGF0ZSA9IHtcbiAgICAgICAgLi4ubWFwU3RhdGUsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHpvb206IG1hcFN0YXRlLnpvb20gKyAoTWF0aC5sb2cyKHNjYWxlKSB8fCAwKVxuICAgICAgfTtcblxuICAgICAgLy8gY2VudGVyIGFuZCBhbGwgbGF5ZXIgYm91bmRzXG4gICAgICBpZiAoZXhwb3J0SW1hZ2VTZXR0aW5nLmNlbnRlcikge1xuICAgICAgICBjb25zdCByZW5kZXJlZExheWVycyA9IGxheWVycy5maWx0ZXIoXG4gICAgICAgICAgKGxheWVyLCBpZHgpID0+IGxheWVyLmlkICE9PSBHRU9DT0RFUl9MQVlFUl9JRCAmJiBsYXllci5zaG91bGRSZW5kZXJMYXllcihsYXllckRhdGFbaWR4XSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgYm91bmRzID0gZmluZE1hcEJvdW5kcyhyZW5kZXJlZExheWVycyk7XG4gICAgICAgIGNvbnN0IGNlbnRlckFuZFpvb20gPSBnZXRDZW50ZXJBbmRab29tRnJvbUJvdW5kcyhib3VuZHMsIHt3aWR0aCwgaGVpZ2h0fSk7XG4gICAgICAgIGlmIChjZW50ZXJBbmRab29tKSB7XG4gICAgICAgICAgY29uc3Qgem9vbSA9IE51bWJlci5pc0Zpbml0ZShjZW50ZXJBbmRab29tLnpvb20pID8gY2VudGVyQW5kWm9vbS56b29tIDogbWFwU3RhdGUuem9vbTtcblxuICAgICAgICAgIG5ld01hcFN0YXRlLmxvbmdpdHVkZSA9IGNlbnRlckFuZFpvb20uY2VudGVyWzBdO1xuICAgICAgICAgIG5ld01hcFN0YXRlLmxhdGl0dWRlID0gY2VudGVyQW5kWm9vbS5jZW50ZXJbMV07XG4gICAgICAgICAgbmV3TWFwU3RhdGUuem9vbSA9IHpvb20gKyBOdW1iZXIoTWF0aC5sb2cyKHNjYWxlKSB8fCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBtYXBQcm9wcyA9IHtcbiAgICAgICAgLi4ubWFwRmllbGRzLFxuICAgICAgICBtYXBTdHlsZTogdGhpcy5zY2FsZWRNYXBTdHlsZVNlbGVjdG9yKHRoaXMucHJvcHMpLFxuXG4gICAgICAgIC8vIG92ZXJyaWRlIHZpZXdwb3J0IGJhc2VkIG9uIGV4cG9ydCBzZXR0aW5nc1xuICAgICAgICBtYXBTdGF0ZTogbmV3TWFwU3RhdGUsXG4gICAgICAgIG1hcENvbnRyb2xzOiB7XG4gICAgICAgICAgLy8gb3ZlcnJpZGUgbWFwIGxlZ2VuZCB2aXNpYmlsaXR5XG4gICAgICAgICAgbWFwTGVnZW5kOiB7XG4gICAgICAgICAgICBzaG93OiBsZWdlbmQsXG4gICAgICAgICAgICBhY3RpdmU6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIE1hcENvbXBvbmVudDogU3RhdGljTWFwLFxuICAgICAgICBvbk1hcFJlbmRlcjogdGhpcy5fb25NYXBSZW5kZXIsXG4gICAgICAgIGlzRXhwb3J0OiB0cnVlLFxuICAgICAgICBkZWNrR2xQcm9wczoge1xuICAgICAgICAgIC4uLm1hcEZpZWxkcy5kZWNrR2xQcm9wcyxcbiAgICAgICAgICBnbE9wdGlvbnM6IHtcbiAgICAgICAgICAgIHByZXNlcnZlRHJhd2luZ0J1ZmZlcjogdHJ1ZSxcbiAgICAgICAgICAgIHVzZURldmljZVBpeGVsczogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG1hcENvbnRhaW5lcnMgPSAhaXNTcGxpdCA/IChcbiAgICAgICAgPE1hcENvbnRhaW5lciBpbmRleD17MH0gcHJpbWFyeT17dHJ1ZX0gey4uLm1hcFByb3BzfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPE1hcHNMYXlvdXQgY2xhc3NOYW1lPVwicGxvdC1jb250YWluZXItbWFwc1wiPlxuICAgICAgICAgIHtzcGxpdE1hcHMubWFwKChzZXR0aW5ncywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxNYXBDb250YWluZXIga2V5PXtpbmRleH0gaW5kZXg9e2luZGV4fSBwcmltYXJ5PXtpbmRleCA9PT0gMX0gey4uLm1hcFByb3BzfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L01hcHNMYXlvdXQ+XG4gICAgICApO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZFBsb3RDb250YWluZXIgY2xhc3NOYW1lPVwiZXhwb3J0LW1hcC1pbnN0YW5jZVwiPlxuICAgICAgICAgIDxTdHlsZWRNYXBDb250YWluZXIgcmVmPXt0aGlzLnBsb3R0aW5nQXJlYVJlZn0gd2lkdGg9e3NpemUud2lkdGh9IGhlaWdodD17c2l6ZS5oZWlnaHR9PlxuICAgICAgICAgICAge21hcENvbnRhaW5lcnN9XG4gICAgICAgICAgPC9TdHlsZWRNYXBDb250YWluZXI+XG4gICAgICAgIDwvU3R5bGVkUGxvdENvbnRhaW5lcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBQbG90Q29udGFpbmVyO1xufVxuIl19