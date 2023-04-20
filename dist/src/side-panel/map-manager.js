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

var _styledComponents = require("../common/styled-components");

var _mapStyleSelector = _interopRequireDefault(require("./map-style-panel/map-style-selector"));

var _mapLayerSelector = _interopRequireDefault(require("./map-style-panel/map-layer-selector"));

var _panelTitle = _interopRequireDefault(require("../side-panel/panel-title"));

var _icons = require("../common/icons");

var _reactIntl = require("react-intl");

var _localization = require("@kepler.gl/localization");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

MapManagerFactory.deps = [_mapStyleSelector["default"], _mapLayerSelector["default"], _panelTitle["default"]];

function MapManagerFactory(MapStyleSelector, LayerGroupSelector, PanelTitle) {
  var MapManager = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(MapManager, _Component);

    var _super = _createSuper(MapManager);

    function MapManager() {
      var _this;

      (0, _classCallCheck2["default"])(this, MapManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        isSelecting: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleSelecting", function () {
        _this.setState({
          isSelecting: !_this.state.isSelecting
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_selectStyle", function (val) {
        var mapStyleActions = _this.props.mapStyleActions;
        var mapStyleChange = mapStyleActions.mapStyleChange;
        mapStyleChange(val);

        _this._toggleSelecting();
      });
      return _this;
    }

    (0, _createClass2["default"])(MapManager, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            mapStyle = _this$props.mapStyle,
            intl = _this$props.intl,
            mapStyleActions = _this$props.mapStyleActions,
            showAddMapStyleModal = _this$props.showAddMapStyleModal,
            panelMetadata = _this$props.panelMetadata;
        var currentStyle = mapStyle.mapStyles[mapStyle.styleType] || {};
        var editableLayers = currentStyle.layerGroups || [];
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "map-style-panel"
        }, /*#__PURE__*/_react["default"].createElement(PanelTitle, {
          className: "filter-manager-title",
          title: intl.formatMessage({
            id: panelMetadata.label
          })
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents.Button, {
          className: "add-map-style-button",
          onClick: showAddMapStyleModal
        }, /*#__PURE__*/_react["default"].createElement(_icons.Add, {
          height: "12px"
        }), /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'mapManager.addMapStyle'
        }))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(MapStyleSelector, {
          mapStyle: mapStyle,
          isSelecting: this.state.isSelecting,
          onChange: this._selectStyle,
          toggleActive: this._toggleSelecting
        }), editableLayers.length ? /*#__PURE__*/_react["default"].createElement(LayerGroupSelector, {
          layers: mapStyle.visibleLayerGroups,
          editableLayers: editableLayers,
          topLayers: mapStyle.topLayerGroups,
          onChange: mapStyleActions.mapConfigChange,
          threeDBuildingColor: mapStyle.threeDBuildingColor,
          on3dBuildingColorChange: mapStyleActions.set3dBuildingColor,
          backgroundColor: mapStyle.backgroundColor,
          onBackgroundColorChange: mapStyleActions.setBackgroundColor
        }) : null));
      }
    }]);
    return MapManager;
  }(_react.Component);

  return (0, _reactIntl.injectIntl)(MapManager);
}

var _default = MapManagerFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL21hcC1tYW5hZ2VyLnRzeCJdLCJuYW1lcyI6WyJNYXBNYW5hZ2VyRmFjdG9yeSIsImRlcHMiLCJNYXBTdHlsZVNlbGVjdG9yRmFjdG9yeSIsIkxheWVyR3JvdXBTZWxlY3RvckZhY3RvcnkiLCJQYW5lbFRpdGxlRmFjdG9yeSIsIk1hcFN0eWxlU2VsZWN0b3IiLCJMYXllckdyb3VwU2VsZWN0b3IiLCJQYW5lbFRpdGxlIiwiTWFwTWFuYWdlciIsImlzU2VsZWN0aW5nIiwic2V0U3RhdGUiLCJzdGF0ZSIsInZhbCIsIm1hcFN0eWxlQWN0aW9ucyIsInByb3BzIiwibWFwU3R5bGVDaGFuZ2UiLCJfdG9nZ2xlU2VsZWN0aW5nIiwibWFwU3R5bGUiLCJpbnRsIiwic2hvd0FkZE1hcFN0eWxlTW9kYWwiLCJwYW5lbE1ldGFkYXRhIiwiY3VycmVudFN0eWxlIiwibWFwU3R5bGVzIiwic3R5bGVUeXBlIiwiZWRpdGFibGVMYXllcnMiLCJsYXllckdyb3VwcyIsImZvcm1hdE1lc3NhZ2UiLCJpZCIsImxhYmVsIiwiX3NlbGVjdFN0eWxlIiwibGVuZ3RoIiwidmlzaWJsZUxheWVyR3JvdXBzIiwidG9wTGF5ZXJHcm91cHMiLCJtYXBDb25maWdDaGFuZ2UiLCJ0aHJlZURCdWlsZGluZ0NvbG9yIiwic2V0M2RCdWlsZGluZ0NvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwic2V0QmFja2dyb3VuZENvbG9yIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOzs7Ozs7QUFXQUEsaUJBQWlCLENBQUNDLElBQWxCLEdBQXlCLENBQUNDLDRCQUFELEVBQTBCQyw0QkFBMUIsRUFBcURDLHNCQUFyRCxDQUF6Qjs7QUFFQSxTQUFTSixpQkFBVCxDQUNFSyxnQkFERixFQUVFQyxrQkFGRixFQUdFQyxVQUhGLEVBSUU7QUFBQSxNQUNNQyxVQUROO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxnR0FFVTtBQUNOQyxRQUFBQSxXQUFXLEVBQUU7QUFEUCxPQUZWO0FBQUEsMkdBTXFCLFlBQU07QUFDdkIsY0FBS0MsUUFBTCxDQUFjO0FBQUNELFVBQUFBLFdBQVcsRUFBRSxDQUFDLE1BQUtFLEtBQUwsQ0FBV0Y7QUFBMUIsU0FBZDtBQUNELE9BUkg7QUFBQSx1R0FVaUIsVUFBQ0csR0FBRCxFQUFpQjtBQUFBLFlBQ3ZCQyxlQUR1QixHQUNKLE1BQUtDLEtBREQsQ0FDdkJELGVBRHVCO0FBQUEsWUFFdkJFLGNBRnVCLEdBRUxGLGVBRkssQ0FFdkJFLGNBRnVCO0FBRzlCQSxRQUFBQSxjQUFjLENBQUNILEdBQUQsQ0FBZDs7QUFDQSxjQUFLSSxnQkFBTDtBQUNELE9BZkg7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxhQWlCRSxrQkFBUztBQUFBLDBCQUN3RSxLQUFLRixLQUQ3RTtBQUFBLFlBQ0FHLFFBREEsZUFDQUEsUUFEQTtBQUFBLFlBQ1VDLElBRFYsZUFDVUEsSUFEVjtBQUFBLFlBQ2dCTCxlQURoQixlQUNnQkEsZUFEaEI7QUFBQSxZQUNpQ00sb0JBRGpDLGVBQ2lDQSxvQkFEakM7QUFBQSxZQUN1REMsYUFEdkQsZUFDdURBLGFBRHZEO0FBRVAsWUFBTUMsWUFBWSxHQUFHSixRQUFRLENBQUNLLFNBQVQsQ0FBbUJMLFFBQVEsQ0FBQ00sU0FBNUIsS0FBMEMsRUFBL0Q7QUFDQSxZQUFNQyxjQUFjLEdBQUdILFlBQVksQ0FBQ0ksV0FBYixJQUE0QixFQUFuRDtBQUVBLDRCQUNFO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZix3QkFDRSxnQ0FBQyxVQUFEO0FBQ0UsVUFBQSxTQUFTLEVBQUMsc0JBRFo7QUFFRSxVQUFBLEtBQUssRUFBRVAsSUFBSSxDQUFDUSxhQUFMLENBQW1CO0FBQUNDLFlBQUFBLEVBQUUsRUFBRVAsYUFBYSxDQUFDUTtBQUFuQixXQUFuQjtBQUZULHdCQUlFLGdDQUFDLHdCQUFEO0FBQVEsVUFBQSxTQUFTLEVBQUMsc0JBQWxCO0FBQXlDLFVBQUEsT0FBTyxFQUFFVDtBQUFsRCx3QkFDRSxnQ0FBQyxVQUFEO0FBQUssVUFBQSxNQUFNLEVBQUM7QUFBWixVQURGLGVBRUUsZ0NBQUMsOEJBQUQ7QUFBa0IsVUFBQSxFQUFFLEVBQUU7QUFBdEIsVUFGRixDQUpGLENBREYsZUFVRSwwREFDRSxnQ0FBQyxnQkFBRDtBQUNFLFVBQUEsUUFBUSxFQUFFRixRQURaO0FBRUUsVUFBQSxXQUFXLEVBQUUsS0FBS04sS0FBTCxDQUFXRixXQUYxQjtBQUdFLFVBQUEsUUFBUSxFQUFFLEtBQUtvQixZQUhqQjtBQUlFLFVBQUEsWUFBWSxFQUFFLEtBQUtiO0FBSnJCLFVBREYsRUFPR1EsY0FBYyxDQUFDTSxNQUFmLGdCQUNDLGdDQUFDLGtCQUFEO0FBQ0UsVUFBQSxNQUFNLEVBQUViLFFBQVEsQ0FBQ2Msa0JBRG5CO0FBRUUsVUFBQSxjQUFjLEVBQUVQLGNBRmxCO0FBR0UsVUFBQSxTQUFTLEVBQUVQLFFBQVEsQ0FBQ2UsY0FIdEI7QUFJRSxVQUFBLFFBQVEsRUFBRW5CLGVBQWUsQ0FBQ29CLGVBSjVCO0FBS0UsVUFBQSxtQkFBbUIsRUFBRWhCLFFBQVEsQ0FBQ2lCLG1CQUxoQztBQU1FLFVBQUEsdUJBQXVCLEVBQUVyQixlQUFlLENBQUNzQixrQkFOM0M7QUFPRSxVQUFBLGVBQWUsRUFBRWxCLFFBQVEsQ0FBQ21CLGVBUDVCO0FBUUUsVUFBQSx1QkFBdUIsRUFBRXZCLGVBQWUsQ0FBQ3dCO0FBUjNDLFVBREQsR0FXRyxJQWxCTixDQVZGLENBREY7QUFpQ0Q7QUF2REg7QUFBQTtBQUFBLElBQ3lCQyxnQkFEekI7O0FBeURBLFNBQU8sMkJBQVc5QixVQUFYLENBQVA7QUFDRDs7ZUFFY1IsaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTWFwU3R5bGVTZWxlY3RvckZhY3RvcnkgZnJvbSAnLi9tYXAtc3R5bGUtcGFuZWwvbWFwLXN0eWxlLXNlbGVjdG9yJztcbmltcG9ydCBMYXllckdyb3VwU2VsZWN0b3JGYWN0b3J5IGZyb20gJy4vbWFwLXN0eWxlLXBhbmVsL21hcC1sYXllci1zZWxlY3Rvcic7XG5pbXBvcnQgUGFuZWxUaXRsZUZhY3RvcnkgZnJvbSAnLi4vc2lkZS1wYW5lbC9wYW5lbC10aXRsZSc7XG5cbmltcG9ydCB7QWRkfSBmcm9tICcuLi9jb21tb24vaWNvbnMnO1xuaW1wb3J0IHtQYW5lbE1ldGF9IGZyb20gJy4vY29tbW9uL3R5cGVzJztcbmltcG9ydCB7aW5qZWN0SW50bCwgV3JhcHBlZENvbXBvbmVudFByb3BzfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnQGtlcGxlci5nbC9sb2NhbGl6YXRpb24nO1xuaW1wb3J0IHtNYXBTdHlsZX0gZnJvbSAnQGtlcGxlci5nbC9yZWR1Y2Vycyc7XG5pbXBvcnQge01hcFN0eWxlQWN0aW9uc30gZnJvbSAnQGtlcGxlci5nbC9hY3Rpb25zJztcblxuZXhwb3J0IHR5cGUgTWFwTWFuYWdlclByb3BzID0ge1xuICBtYXBTdHlsZTogTWFwU3R5bGU7XG4gIG1hcFN0eWxlQWN0aW9uczogdHlwZW9mIE1hcFN0eWxlQWN0aW9ucztcbiAgc2hvd0FkZE1hcFN0eWxlTW9kYWw6ICgpID0+IHZvaWQ7XG4gIHBhbmVsTWV0YWRhdGE6IFBhbmVsTWV0YTtcbn0gJiBXcmFwcGVkQ29tcG9uZW50UHJvcHM7XG5cbk1hcE1hbmFnZXJGYWN0b3J5LmRlcHMgPSBbTWFwU3R5bGVTZWxlY3RvckZhY3RvcnksIExheWVyR3JvdXBTZWxlY3RvckZhY3RvcnksIFBhbmVsVGl0bGVGYWN0b3J5XTtcblxuZnVuY3Rpb24gTWFwTWFuYWdlckZhY3RvcnkoXG4gIE1hcFN0eWxlU2VsZWN0b3I6IFJldHVyblR5cGU8dHlwZW9mIE1hcFN0eWxlU2VsZWN0b3JGYWN0b3J5PixcbiAgTGF5ZXJHcm91cFNlbGVjdG9yOiBSZXR1cm5UeXBlPHR5cGVvZiBMYXllckdyb3VwU2VsZWN0b3JGYWN0b3J5PixcbiAgUGFuZWxUaXRsZTogUmV0dXJuVHlwZTx0eXBlb2YgUGFuZWxUaXRsZUZhY3Rvcnk+XG4pIHtcbiAgY2xhc3MgTWFwTWFuYWdlciBleHRlbmRzIENvbXBvbmVudDxNYXBNYW5hZ2VyUHJvcHM+IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgIGlzU2VsZWN0aW5nOiBmYWxzZVxuICAgIH07XG5cbiAgICBfdG9nZ2xlU2VsZWN0aW5nID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNTZWxlY3Rpbmc6ICF0aGlzLnN0YXRlLmlzU2VsZWN0aW5nfSk7XG4gICAgfTtcblxuICAgIF9zZWxlY3RTdHlsZSA9ICh2YWw6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qge21hcFN0eWxlQWN0aW9uc30gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge21hcFN0eWxlQ2hhbmdlfSA9IG1hcFN0eWxlQWN0aW9ucztcbiAgICAgIG1hcFN0eWxlQ2hhbmdlKHZhbCk7XG4gICAgICB0aGlzLl90b2dnbGVTZWxlY3RpbmcoKTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge21hcFN0eWxlLCBpbnRsLCBtYXBTdHlsZUFjdGlvbnMsIHNob3dBZGRNYXBTdHlsZU1vZGFsLCBwYW5lbE1ldGFkYXRhfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBjdXJyZW50U3R5bGUgPSBtYXBTdHlsZS5tYXBTdHlsZXNbbWFwU3R5bGUuc3R5bGVUeXBlXSB8fCB7fTtcbiAgICAgIGNvbnN0IGVkaXRhYmxlTGF5ZXJzID0gY3VycmVudFN0eWxlLmxheWVyR3JvdXBzIHx8IFtdO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcC1zdHlsZS1wYW5lbFwiPlxuICAgICAgICAgIDxQYW5lbFRpdGxlXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXItbWFuYWdlci10aXRsZVwiXG4gICAgICAgICAgICB0aXRsZT17aW50bC5mb3JtYXRNZXNzYWdlKHtpZDogcGFuZWxNZXRhZGF0YS5sYWJlbH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYWRkLW1hcC1zdHlsZS1idXR0b25cIiBvbkNsaWNrPXtzaG93QWRkTWFwU3R5bGVNb2RhbH0+XG4gICAgICAgICAgICAgIDxBZGQgaGVpZ2h0PVwiMTJweFwiIC8+XG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbWFwTWFuYWdlci5hZGRNYXBTdHlsZSd9IC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L1BhbmVsVGl0bGU+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxNYXBTdHlsZVNlbGVjdG9yXG4gICAgICAgICAgICAgIG1hcFN0eWxlPXttYXBTdHlsZX1cbiAgICAgICAgICAgICAgaXNTZWxlY3Rpbmc9e3RoaXMuc3RhdGUuaXNTZWxlY3Rpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9zZWxlY3RTdHlsZX1cbiAgICAgICAgICAgICAgdG9nZ2xlQWN0aXZlPXt0aGlzLl90b2dnbGVTZWxlY3Rpbmd9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAge2VkaXRhYmxlTGF5ZXJzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgPExheWVyR3JvdXBTZWxlY3RvclxuICAgICAgICAgICAgICAgIGxheWVycz17bWFwU3R5bGUudmlzaWJsZUxheWVyR3JvdXBzfVxuICAgICAgICAgICAgICAgIGVkaXRhYmxlTGF5ZXJzPXtlZGl0YWJsZUxheWVyc31cbiAgICAgICAgICAgICAgICB0b3BMYXllcnM9e21hcFN0eWxlLnRvcExheWVyR3JvdXBzfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXttYXBTdHlsZUFjdGlvbnMubWFwQ29uZmlnQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHRocmVlREJ1aWxkaW5nQ29sb3I9e21hcFN0eWxlLnRocmVlREJ1aWxkaW5nQ29sb3J9XG4gICAgICAgICAgICAgICAgb24zZEJ1aWxkaW5nQ29sb3JDaGFuZ2U9e21hcFN0eWxlQWN0aW9ucy5zZXQzZEJ1aWxkaW5nQ29sb3J9XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXttYXBTdHlsZS5iYWNrZ3JvdW5kQ29sb3J9XG4gICAgICAgICAgICAgICAgb25CYWNrZ3JvdW5kQ29sb3JDaGFuZ2U9e21hcFN0eWxlQWN0aW9ucy5zZXRCYWNrZ3JvdW5kQ29sb3J9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5qZWN0SW50bChNYXBNYW5hZ2VyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwTWFuYWdlckZhY3Rvcnk7XG4iXX0=