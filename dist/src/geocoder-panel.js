"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUpdateVisDataPayload = getUpdateVisDataPayload;
exports["default"] = GeocoderPanelFactory;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

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

var _classnames = _interopRequireDefault(require("classnames"));

var _processors = require("@kepler.gl/processors");

var _core = require("@deck.gl/core");

var _schemas = _interopRequireDefault(require("@kepler.gl/schemas"));

var _utils = require("@kepler.gl/utils");

var _geocoder = _interopRequireDefault(require("./geocoder/geocoder"));

var _constants = require("@kepler.gl/constants");

var _templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ICON_LAYER = {
  id: _constants.GEOCODER_LAYER_ID,
  type: 'icon',
  config: {
    label: 'Geocoder Layer',
    color: _constants.GEOCODER_ICON_COLOR,
    dataId: _constants.GEOCODER_DATASET_NAME,
    columns: {
      lat: 'lt',
      lng: 'ln',
      icon: 'icon',
      label: 'text'
    },
    isVisible: true,
    hidden: true,
    visConfig: {
      radius: _constants.GEOCODER_ICON_SIZE
    }
  }
};

var PARSED_CONFIG = _schemas["default"].parseSavedConfig({
  version: 'v1',
  config: {
    visState: {
      layers: [ICON_LAYER]
    }
  }
});

var StyledGeocoderPanel = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  top: ", "px;\n  right: ", ";\n  width: ", "px;\n  box-shadow: ", ";\n  z-index: 100;\n"])), function (props) {
  return props.theme.geocoderTop;
}, function (props) {
  return props.unsyncedViewports ? // 2 geocoders: split mode and unsynced viewports
  Number.isFinite(props.index) && props.index === 0 ? "calc(50% + ".concat(props.theme.geocoderRight, "px)") // unsynced left geocoder (index 0)
  : "".concat(props.theme.geocoderRight, "px") // unsynced right geocoder (index 1)
  : // 1 geocoder: single mode OR split mode and synced viewports
  "".concat(props.theme.geocoderRight, "px");
}, function (props) {
  return Number.isFinite(props.width) ? props.width : props.theme.geocoderWidth;
}, function (props) {
  return props.theme.boxShadow;
});

function generateGeocoderDataset(lat, lon, text) {
  return {
    data: (0, _processors.processRowObject)([{
      lt: lat,
      ln: lon,
      icon: 'place',
      text: text
    }]),
    id: _constants.GEOCODER_DATASET_NAME,
    info: {
      hidden: true,
      id: _constants.GEOCODER_DATASET_NAME,
      label: _constants.GEOCODER_DATASET_NAME
    }
  };
}

function isValid(key) {
  return /pk\..*\..*/.test(key);
}

function getUpdateVisDataPayload(lat, lon, text) {
  return [[generateGeocoderDataset(lat, lon, text)], {
    keepExistingConfig: true
  }, PARSED_CONFIG];
}

function GeocoderPanelFactory() {
  var GeocoderPanel = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(GeocoderPanel, _Component);

    var _super = _createSuper(GeocoderPanel);

    function GeocoderPanel() {
      var _this;

      (0, _classCallCheck2["default"])(this, GeocoderPanel);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "defaultProps", {
        transitionDuration: 3000
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSelected", function () {
        var _this$props;

        var viewport = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var geoItem = arguments.length > 1 ? arguments[1] : undefined;

        var _geoItem$center = (0, _slicedToArray2["default"])(geoItem.center, 2),
            lon = _geoItem$center[0],
            lat = _geoItem$center[1],
            text = geoItem.text,
            bbox = geoItem.bbox;

        _this.removeGeocoderDataset();

        (_this$props = _this.props).updateVisData.apply(_this$props, (0, _toConsumableArray2["default"])(getUpdateVisDataPayload(lat, lon, text)));

        var bounds = bbox || [lon - _constants.GEOCODER_GEO_OFFSET, lat - _constants.GEOCODER_GEO_OFFSET, lon + _constants.GEOCODER_GEO_OFFSET, lat + _constants.GEOCODER_GEO_OFFSET];
        var centerAndZoom = (0, _utils.getCenterAndZoomFromBounds)(bounds, {
          width: _this.props.mapState.width,
          height: _this.props.mapState.height
        });

        if (!centerAndZoom) {
          // failed to fit bounds
          return;
        }

        _this.props.updateMap(_objectSpread(_objectSpread({
          latitude: centerAndZoom.center[1],
          longitude: centerAndZoom.center[0]
        }, Number.isFinite(centerAndZoom.zoom) ? {
          zoom: centerAndZoom.zoom
        } : {}), {}, {
          pitch: 0,
          bearing: 0,
          transitionDuration: _this.props.transitionDuration,
          transitionInterpolator: new _core.FlyToInterpolator()
        }), _this.props.index);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "removeMarker", function () {
        _this.removeGeocoderDataset();
      });
      return _this;
    }

    (0, _createClass2["default"])(GeocoderPanel, [{
      key: "removeGeocoderDataset",
      value: function removeGeocoderDataset() {
        this.props.removeDataset(_constants.GEOCODER_DATASET_NAME);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            className = _this$props2.className,
            isGeocoderEnabled = _this$props2.isGeocoderEnabled,
            mapboxApiAccessToken = _this$props2.mapboxApiAccessToken,
            width = _this$props2.width,
            index = _this$props2.index,
            unsyncedViewports = _this$props2.unsyncedViewports;
        return /*#__PURE__*/_react["default"].createElement(StyledGeocoderPanel, {
          className: (0, _classnames["default"])('geocoder-panel', className),
          width: width,
          index: index,
          unsyncedViewports: unsyncedViewports,
          style: {
            display: isGeocoderEnabled ? 'block' : 'none'
          }
        }, isValid(mapboxApiAccessToken) && /*#__PURE__*/_react["default"].createElement(_geocoder["default"], {
          mapboxApiAccessToken: mapboxApiAccessToken,
          onSelected: this.onSelected,
          onDeleteMarker: this.removeMarker,
          width: width
        }));
      }
    }]);
    return GeocoderPanel;
  }(_react.Component);

  return GeocoderPanel;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9nZW9jb2Rlci1wYW5lbC50c3giXSwibmFtZXMiOlsiSUNPTl9MQVlFUiIsImlkIiwiR0VPQ09ERVJfTEFZRVJfSUQiLCJ0eXBlIiwiY29uZmlnIiwibGFiZWwiLCJjb2xvciIsIkdFT0NPREVSX0lDT05fQ09MT1IiLCJkYXRhSWQiLCJHRU9DT0RFUl9EQVRBU0VUX05BTUUiLCJjb2x1bW5zIiwibGF0IiwibG5nIiwiaWNvbiIsImlzVmlzaWJsZSIsImhpZGRlbiIsInZpc0NvbmZpZyIsInJhZGl1cyIsIkdFT0NPREVSX0lDT05fU0laRSIsIlBBUlNFRF9DT05GSUciLCJLZXBsZXJHbFNjaGVtYSIsInBhcnNlU2F2ZWRDb25maWciLCJ2ZXJzaW9uIiwidmlzU3RhdGUiLCJsYXllcnMiLCJTdHlsZWRHZW9jb2RlclBhbmVsIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsImdlb2NvZGVyVG9wIiwidW5zeW5jZWRWaWV3cG9ydHMiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsImluZGV4IiwiZ2VvY29kZXJSaWdodCIsIndpZHRoIiwiZ2VvY29kZXJXaWR0aCIsImJveFNoYWRvdyIsImdlbmVyYXRlR2VvY29kZXJEYXRhc2V0IiwibG9uIiwidGV4dCIsImRhdGEiLCJsdCIsImxuIiwiaW5mbyIsImlzVmFsaWQiLCJrZXkiLCJ0ZXN0IiwiZ2V0VXBkYXRlVmlzRGF0YVBheWxvYWQiLCJrZWVwRXhpc3RpbmdDb25maWciLCJHZW9jb2RlclBhbmVsRmFjdG9yeSIsIkdlb2NvZGVyUGFuZWwiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJ2aWV3cG9ydCIsImdlb0l0ZW0iLCJjZW50ZXIiLCJiYm94IiwicmVtb3ZlR2VvY29kZXJEYXRhc2V0IiwidXBkYXRlVmlzRGF0YSIsImJvdW5kcyIsIkdFT0NPREVSX0dFT19PRkZTRVQiLCJjZW50ZXJBbmRab29tIiwibWFwU3RhdGUiLCJoZWlnaHQiLCJ1cGRhdGVNYXAiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInpvb20iLCJwaXRjaCIsImJlYXJpbmciLCJ0cmFuc2l0aW9uSW50ZXJwb2xhdG9yIiwiRmx5VG9JbnRlcnBvbGF0b3IiLCJyZW1vdmVEYXRhc2V0IiwiY2xhc3NOYW1lIiwiaXNHZW9jb2RlckVuYWJsZWQiLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsImRpc3BsYXkiLCJvblNlbGVjdGVkIiwicmVtb3ZlTWFya2VyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBU0EsSUFBTUEsVUFBVSxHQUFHO0FBQ2pCQyxFQUFBQSxFQUFFLEVBQUVDLDRCQURhO0FBRWpCQyxFQUFBQSxJQUFJLEVBQUUsTUFGVztBQUdqQkMsRUFBQUEsTUFBTSxFQUFFO0FBQ05DLElBQUFBLEtBQUssRUFBRSxnQkFERDtBQUVOQyxJQUFBQSxLQUFLLEVBQUVDLDhCQUZEO0FBR05DLElBQUFBLE1BQU0sRUFBRUMsZ0NBSEY7QUFJTkMsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLEdBQUcsRUFBRSxJQURFO0FBRVBDLE1BQUFBLEdBQUcsRUFBRSxJQUZFO0FBR1BDLE1BQUFBLElBQUksRUFBRSxNQUhDO0FBSVBSLE1BQUFBLEtBQUssRUFBRTtBQUpBLEtBSkg7QUFVTlMsSUFBQUEsU0FBUyxFQUFFLElBVkw7QUFXTkMsSUFBQUEsTUFBTSxFQUFFLElBWEY7QUFZTkMsSUFBQUEsU0FBUyxFQUFFO0FBQ1RDLE1BQUFBLE1BQU0sRUFBRUM7QUFEQztBQVpMO0FBSFMsQ0FBbkI7O0FBcUJBLElBQU1DLGFBQWEsR0FBR0Msb0JBQWVDLGdCQUFmLENBQWdDO0FBQ3BEQyxFQUFBQSxPQUFPLEVBQUUsSUFEMkM7QUFFcERsQixFQUFBQSxNQUFNLEVBQUU7QUFDTm1CLElBQUFBLFFBQVEsRUFBRTtBQUNSQyxNQUFBQSxNQUFNLEVB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QUF3QjtBQUN0QixhQUFLOUIsS0FBTCxDQUFXNkMsYUFBWCxDQUF5QmhFLGdDQUF6QjtBQUNEO0FBUjZFO0FBQUE7QUFBQSxhQXNEOUUsa0JBQVM7QUFBQSwyQkFRSCxLQUFLbUIsS0FSRjtBQUFBLFlBRUw4QyxTQUZLLGdCQUVMQSxTQUZLO0FBQUEsWUFHTEMsaUJBSEssZ0JBR0xBLGlCQUhLO0FBQUEsWUFJTEMsb0JBSkssZ0JBSUxBLG9CQUpLO0FBQUEsWUFLTHhDLEtBTEssZ0JBS0xBLEtBTEs7QUFBQSxZQU1MRixLQU5LLGdCQU1MQSxLQU5LO0FBQUEsWUFPTEgsaUJBUEssZ0JBT0xBLGlCQVBLO0FBU1AsNEJBQ0UsZ0NBQUMsbUJBQUQ7QUFDRSxVQUFBLFNBQVMsRUFBRSw0QkFBVyxnQkFBWCxFQUE2QjJDLFNBQTdCLENBRGI7QUFFRSxVQUFBLEtBQUssRUFBRXRDLEtBRlQ7QUFHRSxVQUFBLEtBQUssRUFBRUYsS0FIVDtBQUlFLFVBQUEsaUJBQWlCLEVBQUVILGlCQUpyQjtBQUtFLFVBQUEsS0FBSyxFQUFFO0FBQUM4QyxZQUFBQSxPQUFPLEVBQUVGLGlCQUFpQixHQUFHLE9BQUgsR0FBYTtBQUF4QztBQUxULFdBT0c3QixPQUFPLENBQUM4QixvQkFBRCxDQUFQLGlCQUNDLGdDQUFDLG9CQUFEO0FBQ0UsVUFBQSxvQkFBb0IsRUFBRUEsb0JBRHhCO0FBRUUsVUFBQSxVQUFVLEVBQUUsS0FBS0UsVUFGbkI7QUFHRSxVQUFBLGNBQWMsRUFBRSxLQUFLQyxZQUh2QjtBQUlFLFVBQUEsS0FBSyxFQUFFM0M7QUFKVCxVQVJKLENBREY7QUFrQkQ7QUFqRjZFO0FBQUE7QUFBQSxJQUNwRDRDLGdCQURvRDs7QUFvRmhGLFNBQU81QixhQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIENvbXBvbmVudFR5cGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge3Byb2Nlc3NSb3dPYmplY3R9IGZyb20gJ0BrZXBsZXIuZ2wvcHJvY2Vzc29ycyc7XG5pbXBvcnQge0ZseVRvSW50ZXJwb2xhdG9yfSBmcm9tICdAZGVjay5nbC9jb3JlJztcbmltcG9ydCBLZXBsZXJHbFNjaGVtYSBmcm9tICdAa2VwbGVyLmdsL3NjaGVtYXMnO1xuaW1wb3J0IHtnZXRDZW50ZXJBbmRab29tRnJvbUJvdW5kc30gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5cbmltcG9ydCBHZW9jb2Rlciwge1Jlc3VsdH0gZnJvbSAnLi9nZW9jb2Rlci9nZW9jb2Rlcic7XG5pbXBvcnQge1xuICBHRU9DT0RFUl9EQVRBU0VUX05BTUUsXG4gIEdFT0NPREVSX0xBWUVSX0lELFxuICBHRU9DT0RFUl9HRU9fT0ZGU0VULFxuICBHRU9DT0RFUl9JQ09OX0NPTE9SLFxuICBHRU9DT0RFUl9JQ09OX1NJWkVcbn0gZnJvbSAnQGtlcGxlci5nbC9jb25zdGFudHMnO1xuaW1wb3J0IHtNYXBTdGF0ZSwgVWlTdGF0ZSwgVmlld3BvcnR9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuXG5jb25zdCBJQ09OX0xBWUVSID0ge1xuICBpZDogR0VPQ09ERVJfTEFZRVJfSUQsXG4gIHR5cGU6ICdpY29uJyxcbiAgY29uZmlnOiB7XG4gICAgbGFiZWw6ICdHZW9jb2RlciBMYXllcicsXG4gICAgY29sb3I6IEdFT0NPREVSX0lDT05fQ09MT1IsXG4gICAgZGF0YUlkOiBHRU9DT0RFUl9EQVRBU0VUX05BTUUsXG4gICAgY29sdW1uczoge1xuICAgICAgbGF0OiAnbHQnLFxuICAgICAgbG5nOiAnbG4nLFxuICAgICAgaWNvbjogJ2ljb24nLFxuICAgICAgbGFiZWw6ICd0ZXh0J1xuICAgIH0sXG4gICAgaXNWaXNpYmxlOiB0cnVlLFxuICAgIGhpZGRlbjogdHJ1ZSxcbiAgICB2aXNDb25maWc6IHtcbiAgICAgIHJhZGl1czogR0VPQ09ERVJfSUNPTl9TSVpFXG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBQQVJTRURfQ09ORklHID0gS2VwbGVyR2xTY2hlbWEucGFyc2VTYXZlZENvbmZpZyh7XG4gIHZlcnNpb246ICd2MScsXG4gIGNvbmZpZzoge1xuICAgIHZpc1N0YXRlOiB7XG4gICAgICBsYXllcnM6IFtJQ09OX0xBWUVSXVxuICAgIH1cbiAgfVxufSk7XG5cbmludGVyZmFjZSBTdHlsZWRHZW9jb2RlclBhbmVsUHJvcHMge1xuICB3aWR0aD86IG51bWJlcjtcbiAgdW5zeW5jZWRWaWV3cG9ydHM6IGFueTtcbiAgaW5kZXg6IGFueTtcbn1cblxuY29uc3QgU3R5bGVkR2VvY29kZXJQYW5lbCA9IHN0eWxlZC5kaXY8U3R5bGVkR2VvY29kZXJQYW5lbFByb3BzPmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ2VvY29kZXJUb3B9cHg7XG4gIHJpZ2h0OiAke3Byb3BzID0+XG4gICAgcHJvcHMudW5zeW5jZWRWaWV3cG9ydHNcbiAgICAgID8gLy8gMiBnZW9jb2RlcnM6IHNwbGl0IG1vZGUgYW5kIHVuc3luY2VkIHZpZXdwb3J0c1xuICAgICAgICBOdW1iZXIuaXNGaW5pdGUocHJvcHMuaW5kZXgpICYmIHByb3BzLmluZGV4ID09PSAwXG4gICAgICAgID8gYGNhbGMoNTAlICsgJHtwcm9wcy50aGVtZS5nZW9jb2RlclJpZ2h0fXB4KWAgLy8gdW5zeW5jZWQgbGVmdCBnZW9jb2RlciAoaW5kZXggMClcbiAgICAgICAgOiBgJHtwcm9wcy50aGVtZS5nZW9jb2RlclJpZ2h0fXB4YCAvLyB1bnN5bmNlZCByaWdodCBnZW9jb2RlciAoaW5kZXggMSlcbiAgICAgIDogLy8gMSBnZW9jb2Rlcjogc2luZ2xlIG1vZGUgT1Igc3BsaXQgbW9kZSBhbmQgc3luY2VkIHZpZXdwb3J0c1xuICAgICAgICBgJHtwcm9wcy50aGVtZS5nZW9jb2RlclJpZ2h0fXB4YH07XG4gIHdpZHRoOiAke3Byb3BzID0+IChOdW1iZXIuaXNGaW5pdGUocHJvcHMud2lkdGgpID8gcHJvcHMud2lkdGggOiBwcm9wcy50aGVtZS5nZW9jb2RlcldpZHRoKX1weDtcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ib3hTaGFkb3d9O1xuICB6LWluZGV4OiAxMDA7XG5gO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUdlb2NvZGVyRGF0YXNldChsYXQsIGxvbiwgdGV4dCkge1xuICByZXR1cm4ge1xuICAgIGRhdGE6IHByb2Nlc3NSb3dPYmplY3QoW1xuICAgICAge1xuICAgICAgICBsdDogbGF0LFxuICAgICAgICBsbjogbG9uLFxuICAgICAgICBpY29uOiAncGxhY2UnLFxuICAgICAgICB0ZXh0XG4gICAgICB9XG4gICAgXSksXG4gICAgaWQ6IEdFT0NPREVSX0RBVEFTRVRfTkFNRSxcbiAgICBpbmZvOiB7XG4gICAgICBoaWRkZW46IHRydWUsXG4gICAgICBpZDogR0VPQ09ERVJfREFUQVNFVF9OQU1FLFxuICAgICAgbGFiZWw6IEdFT0NPREVSX0RBVEFTRVRfTkFNRVxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZChrZXkpIHtcbiAgcmV0dXJuIC9wa1xcLi4qXFwuLiovLnRlc3Qoa2V5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVwZGF0ZVZpc0RhdGFQYXlsb2FkKGxhdCwgbG9uLCB0ZXh0KSB7XG4gIHJldHVybiBbXG4gICAgW2dlbmVyYXRlR2VvY29kZXJEYXRhc2V0KGxhdCwgbG9uLCB0ZXh0KV0sXG4gICAge1xuICAgICAga2VlcEV4aXN0aW5nQ29uZmlnOiB0cnVlXG4gICAgfSxcbiAgICBQQVJTRURfQ09ORklHXG4gIF07XG59XG5cbmludGVyZmFjZSBHZW9jb2RlclBhbmVsUHJvcHMge1xuICBpc0dlb2NvZGVyRW5hYmxlZDogYm9vbGVhbjtcbiAgbWFwU3RhdGU6IE1hcFN0YXRlO1xuICB1aVN0YXRlOiBVaVN0YXRlO1xuICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogc3RyaW5nO1xuICB1cGRhdGVWaXNEYXRhOiBGdW5jdGlvbjtcbiAgcmVtb3ZlRGF0YXNldDogRnVuY3Rpb247XG4gIHVwZGF0ZU1hcDogRnVuY3Rpb247XG5cbiAgdHJhbnNpdGlvbkR1cmF0aW9uPzogbnVtYmVyO1xuICB3aWR0aD86IG51bWJlcjtcbiAgYXBwV2lkdGg6IG51bWJlcjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBpbmRleDogbnVtYmVyO1xuICB1bnN5bmNlZFZpZXdwb3J0czogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2VvY29kZXJQYW5lbEZhY3RvcnkoKTogQ29tcG9uZW50VHlwZTxHZW9jb2RlclBhbmVsUHJvcHM+IHtcbiAgY2xhc3MgR2VvY29kZXJQYW5lbCBleHRlbmRzIENvbXBvbmVudDxHZW9jb2RlclBhbmVsUHJvcHM+IHtcbiAgICBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IDMwMDBcbiAgICB9O1xuXG4gICAgcmVtb3ZlR2VvY29kZXJEYXRhc2V0KCkge1xuICAgICAgdGhpcy5wcm9wcy5yZW1vdmVEYXRhc2V0KEdFT0NPREVSX0RBVEFTRVRfTkFNRSk7XG4gICAgfVxuXG4gICAgb25TZWxlY3RlZCA9ICh2aWV3cG9ydDogVmlld3BvcnQgfCBudWxsID0gbnVsbCwgZ2VvSXRlbTogUmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGNlbnRlcjogW2xvbiwgbGF0XSxcbiAgICAgICAgdGV4dCxcbiAgICAgICAgYmJveFxuICAgICAgfSA9IGdlb0l0ZW07XG4gICAgICB0aGlzLnJlbW92ZUdlb2NvZGVyRGF0YXNldCgpO1xuICAgICAgdGhpcy5wcm9wcy51cGRhdGVWaXNEYXRhKC4uLmdldFVwZGF0ZVZpc0RhdGFQYXlsb2FkKGxhdCwgbG9uLCB0ZXh0KSk7XG4gICAgICBjb25zdCBib3VuZHMgPSBiYm94IHx8IFtcbiAgICAgICAgbG9uIC0gR0VPQ09ERVJfR0VPX09GRlNFVCxcbiAgICAgICAgbGF0IC0gR0VPQ09ERVJfR0VPX09GRlNFVCxcbiAgICAgICAgbG9uICsgR0VPQ09ERVJfR0VPX09GRlNFVCxcbiAgICAgICAgbGF0ICsgR0VPQ09ERVJfR0VPX09GRlNFVFxuICAgICAgXTtcbiAgICAgIGNvbnN0IGNlbnRlckFuZFpvb20gPSBnZXRDZW50ZXJBbmRab29tRnJvbUJvdW5kcyhib3VuZHMsIHtcbiAgICAgICAgd2lkdGg6IHRoaXMucHJvcHMubWFwU3RhdGUud2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5wcm9wcy5tYXBTdGF0ZS5oZWlnaHRcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWNlbnRlckFuZFpvb20pIHtcbiAgICAgICAgLy8gZmFpbGVkIHRvIGZpdCBib3VuZHNcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByb3BzLnVwZGF0ZU1hcChcbiAgICAgICAge1xuICAgICAgICAgIGxhdGl0dWRlOiBjZW50ZXJBbmRab29tLmNlbnRlclsxXSxcbiAgICAgICAgICBsb25naXR1ZGU6IGNlbnRlckFuZFpvb20uY2VudGVyWzBdLFxuICAgICAgICAgIC8vIEZvciBtYXJnaW5hbCBvciBpbnZhbGlkIGJvdW5kcywgem9vbSBtYXkgYmUgTmFOLiBNYWtlIHN1cmUgdG8gcHJvdmlkZSBhIHZhbGlkIHZhbHVlIGluIG9yZGVyXG4gICAgICAgICAgLy8gdG8gYXZvaWQgY29ycnVwdCBzdGF0ZSBhbmQgcG90ZW50aWFsIGNyYXNoZXMgYXMgem9vbSBpcyBleHBlY3RlZCB0byBiZSBhIG51bWJlclxuICAgICAgICAgIC4uLihOdW1iZXIuaXNGaW5pdGUoY2VudGVyQW5kWm9vbS56b29tKSA/IHt6b29tOiBjZW50ZXJBbmRab29tLnpvb219IDoge30pLFxuICAgICAgICAgIHBpdGNoOiAwLFxuICAgICAgICAgIGJlYXJpbmc6IDAsXG4gICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLnByb3BzLnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgICB0cmFuc2l0aW9uSW50ZXJwb2xhdG9yOiBuZXcgRmx5VG9JbnRlcnBvbGF0b3IoKVxuICAgICAgICB9LFxuICAgICAgICB0aGlzLnByb3BzLmluZGV4XG4gICAgICApO1xuICAgIH07XG5cbiAgICByZW1vdmVNYXJrZXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZUdlb2NvZGVyRGF0YXNldCgpO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgaXNHZW9jb2RlckVuYWJsZWQsXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgaW5kZXgsXG4gICAgICAgIHVuc3luY2VkVmlld3BvcnRzXG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRHZW9jb2RlclBhbmVsXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdnZW9jb2Rlci1wYW5lbCcsIGNsYXNzTmFtZSl9XG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICB1bnN5bmNlZFZpZXdwb3J0cz17dW5zeW5jZWRWaWV3cG9ydHN9XG4gICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiBpc0dlb2NvZGVyRW5hYmxlZCA/ICdibG9jaycgOiAnbm9uZSd9fVxuICAgICAgICA+XG4gICAgICAgICAge2lzVmFsaWQobWFwYm94QXBpQWNjZXNzVG9rZW4pICYmIChcbiAgICAgICAgICAgIDxHZW9jb2RlclxuICAgICAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17bWFwYm94QXBpQWNjZXNzVG9rZW59XG4gICAgICAgICAgICAgIG9uU2VsZWN0ZWQ9e3RoaXMub25TZWxlY3RlZH1cbiAgICAgICAgICAgICAgb25EZWxldGVNYXJrZXI9e3RoaXMucmVtb3ZlTWFya2VyfVxuICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvU3R5bGVkR2VvY29kZXJQYW5lbD5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIEdlb2NvZGVyUGFuZWw7XG59XG4iXX0=