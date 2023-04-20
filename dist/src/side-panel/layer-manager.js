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

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _localization = require("@kepler.gl/localization");

var _layerList = _interopRequireDefault(require("./layer-panel/layer-list"));

var _datasetLayerGroup = _interopRequireDefault(require("./layer-panel/dataset-layer-group"));

var _panelViewListToggle = _interopRequireDefault(require("./panel-view-list-toggle"));

var _panelTitle = _interopRequireDefault(require("./panel-title"));

var _datasetSection = _interopRequireDefault(require("./layer-panel/dataset-section"));

var _addLayerButton = _interopRequireDefault(require("./layer-panel/add-layer-button"));

var _itemSelector = _interopRequireDefault(require("../common/item-selector/item-selector"));

var _styledComponents2 = require("../common/styled-components");

var _infoHelper = _interopRequireDefault(require("../common/info-helper"));

var _constants = require("@kepler.gl/constants");

var _templateObject, _templateObject2;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var LayerBlendingSelector = /*#__PURE__*/_react["default"].memo(function (_ref) {
  var layerBlending = _ref.layerBlending,
      updateLayerBlending = _ref.updateLayerBlending,
      intl = _ref.intl;
  var labeledLayerBlendings = Object.keys(_constants.LAYER_BLENDINGS).reduce(function (acc, current) {
    return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, intl.formatMessage({
      id: _constants.LAYER_BLENDINGS[current].label
    }), current));
  }, {});
  var onChange = (0, _react.useCallback)(function (blending) {
    return updateLayerBlending(labeledLayerBlendings[blending]);
  }, [updateLayerBlending, labeledLayerBlendings]);
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: "layerBlending.title"
  })), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
    selectedItems: intl.formatMessage({
      id: _constants.LAYER_BLENDINGS[layerBlending].label
    }),
    options: Object.keys(labeledLayerBlendings),
    multiSelect: false,
    searchable: false,
    onChange: onChange
  }));
});

LayerBlendingSelector.displayName = 'LayerBlendingSelector';

var InfoHelperWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  float: right;\n"])));

var OverlayBlendingSelectorTitleRow = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"])));

var OverlayBlendingSelector = /*#__PURE__*/_react["default"].memo(function (_ref2) {
  var overlayBlending = _ref2.overlayBlending,
      updateOverlayBlending = _ref2.updateOverlayBlending,
      intl = _ref2.intl,
      infoHelper = _ref2.infoHelper;
  var labeledOverlayBlendings = Object.keys(_constants.OVERLAY_BLENDINGS).reduce(function (acc, current) {
    return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, intl.formatMessage({
      id: _constants.OVERLAY_BLENDINGS[current].label
    }), current));
  }, {});
  var onChange = (0, _react.useCallback)(function (blending) {
    return updateOverlayBlending(labeledOverlayBlendings[blending]);
  }, [updateOverlayBlending, labeledOverlayBlendings]);
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(OverlayBlendingSelectorTitleRow, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: "overlayBlending.title"
  })), /*#__PURE__*/_react["default"].createElement(InfoHelperWrapper, null, infoHelper)), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
    selectedItems: intl.formatMessage({
      id: _constants.OVERLAY_BLENDINGS[overlayBlending].label
    }),
    options: Object.keys(labeledOverlayBlendings),
    multiSelect: false,
    searchable: false,
    onChange: onChange
  }));
});

OverlayBlendingSelector.displayName = 'OverlayBlendingSelector';
LayerManagerFactory.deps = [_layerList["default"], _datasetLayerGroup["default"], _panelViewListToggle["default"], _panelTitle["default"], _datasetSection["default"], _addLayerButton["default"], _infoHelper["default"]];

function LayerManagerFactory(LayerList, DatasetLayerGroup, PanelViewListToggle, PanelTitle, DatasetSection, AddLayerButton, InfoHelper) {
  var LayerManager = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(LayerManager, _Component);

    var _super = _createSuper(LayerManager);

    function LayerManager() {
      var _this;

      (0, _classCallCheck2["default"])(this, LayerManager);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_addLayer", function (dataset) {
        var visStateActions = _this.props.visStateActions;
        visStateActions.addLayer(undefined, dataset);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_togglePanelListView", function (listView) {
        var uiStateActions = _this.props.uiStateActions;
        uiStateActions.togglePanelListView({
          panelId: 'layer',
          listView: listView
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(LayerManager, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            layers = _this$props.layers,
            datasets = _this$props.datasets,
            intl = _this$props.intl,
            layerOrder = _this$props.layerOrder,
            showAddDataModal = _this$props.showAddDataModal,
            updateTableColor = _this$props.updateTableColor,
            showDatasetTable = _this$props.showDatasetTable,
            removeDataset = _this$props.removeDataset,
            uiStateActions = _this$props.uiStateActions,
            visStateActions = _this$props.visStateActions,
            panelListView = _this$props.panelListView,
            panelMetadata = _this$props.panelMetadata;
        var isSortByDatasetMode = panelListView === _constants.PANEL_VIEW_TOGGLES.byDataset;
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "layer-manager"
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(PanelViewListToggle, {
          togglePanelListView: this._togglePanelListView,
          mode: panelListView
        })), /*#__PURE__*/_react["default"].createElement(DatasetSection, {
          datasets: datasets,
          showDatasetTable: showDatasetTable,
          updateTableColor: updateTableColor,
          removeDataset: removeDataset,
          showDeleteDataset: true,
          showDatasetList: !isSortByDatasetMode,
          showAddDataModal: showAddDataModal
        }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelDivider, null), /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(PanelTitle, {
          className: "layer-manager-title",
          title: intl.formatMessage({
            id: panelMetadata.label
          })
        }, /*#__PURE__*/_react["default"].createElement(AddLayerButton, {
          datasets: datasets,
          onAdd: this._addLayer
        }))), /*#__PURE__*/_react["default"].createElement(_styledComponents2.SidePanelSection, null, isSortByDatasetMode ? /*#__PURE__*/_react["default"].createElement(DatasetLayerGroup, {
          datasets: datasets,
          showDatasetTable: showDatasetTable,
          layers: layers,
          updateTableColor: updateTableColor,
          removeDataset: removeDataset,
          layerOrder: layerOrder,
          layerClasses: this.props.layerClasses,
          uiStateActions: uiStateActions,
          visStateActions: visStateActions,
          showDeleteDataset: true
        }) :
        /*#__PURE__*/
        // TODO replace ignore
        // @ts-ignore
        _react["default"].createElement(LayerList, {
          layers: layers,
          datasets: datasets,
          layerOrder: layerOrder,
          uiStateActions: uiStateActions,
          visStateActions: visStateActions,
          layerClasses: this.props.layerClasses
        })), /*#__PURE__*/_react["default"].createElement(LayerBlendingSelector, {
          layerBlending: this.props.layerBlending,
          updateLayerBlending: visStateActions.updateLayerBlending,
          intl: intl
        }), /*#__PURE__*/_react["default"].createElement(OverlayBlendingSelector, {
          overlayBlending: this.props.overlayBlending,
          updateOverlayBlending: visStateActions.updateOverlayBlending,
          intl: intl,
          infoHelper: /*#__PURE__*/_react["default"].createElement(InfoHelper, {
            id: "overlayBlending-description",
            description: 'overlayBlending.description'
          })
        }));
      }
    }]);
    return LayerManager;
  }(_react.Component);

  return (0, _reactIntl.injectIntl)(LayerManager);
}

var _default = LayerManagerFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2xheWVyLW1hbmFnZXIudHN4Il0sIm5hbWVzIjpbIkxheWVyQmxlbmRpbmdTZWxlY3RvciIsIlJlYWN0IiwibWVtbyIsImxheWVyQmxlbmRpbmciLCJ1cGRhdGVMYXllckJsZW5kaW5nIiwiaW50bCIsImxhYmVsZWRMYXllckJsZW5kaW5ncyIsIk9iamVjdCIsImtleXMiLCJMQVlFUl9CTEVORElOR1MiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyZW50IiwiZm9ybWF0TWVzc2FnZSIsImlkIiwibGFiZWwiLCJvbkNoYW5nZSIsImJsZW5kaW5nIiwiZGlzcGxheU5hbWUiLCJJbmZvSGVscGVyV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIk92ZXJsYXlCbGVuZGluZ1NlbGVjdG9yVGl0bGVSb3ciLCJPdmVybGF5QmxlbmRpbmdTZWxlY3RvciIsIm92ZXJsYXlCbGVuZGluZyIsInVwZGF0ZU92ZXJsYXlCbGVuZGluZyIsImluZm9IZWxwZXIiLCJsYWJlbGVkT3ZlcmxheUJsZW5kaW5ncyIsIk9WRVJMQVlfQkxFTkRJTkdTIiwiTGF5ZXJNYW5hZ2VyRmFjdG9yeSIsImRlcHMiLCJMYXllckxpc3RGYWN0b3J5IiwiRGF0YXNldExheWVyR3JvdXBGYWN0b3J5IiwiUGFuZWxWaWV3TGlzdFRvZ2dsZUZhY3RvcnkiLCJQYW5lbFRpdGxlRmFjdG9yeSIsIkRhdGFzZXRTZWN0aW9uRmFjdG9yeSIsIkFkZExheWVyQnV0dG9uRmFjdG9yeSIsIkluZm9IZWxwZXJGYWN0b3J5IiwiTGF5ZXJMaXN0IiwiRGF0YXNldExheWVyR3JvdXAiLCJQYW5lbFZpZXdMaXN0VG9nZ2xlIiwiUGFuZWxUaXRsZSIsIkRhdGFzZXRTZWN0aW9uIiwiQWRkTGF5ZXJCdXR0b24iLCJJbmZvSGVscGVyIiwiTGF5ZXJNYW5hZ2VyIiwiZGF0YXNldCIsInZpc1N0YXRlQWN0aW9ucyIsInByb3BzIiwiYWRkTGF5ZXIiLCJ1bmRlZmluZWQiLCJsaXN0VmlldyIsInVpU3RhdGVBY3Rpb25zIiwidG9nZ2xlUGFuZWxMaXN0VmlldyIsInBhbmVsSWQiLCJsYXllcnMiLCJkYXRhc2V0cyIsImxheWVyT3JkZXIiLCJzaG93QWRkRGF0YU1vZGFsIiwidXBkYXRlVGFibGVDb2xvciIsInNob3dEYXRhc2V0VGFibGUiLCJyZW1vdmVEYXRhc2V0IiwicGFuZWxMaXN0VmlldyIsInBhbmVsTWV0YWRhdGEiLCJpc1NvcnRCeURhdGFzZXRNb2RlIiwiUEFORUxfVklFV19UT0dHTEVTIiwiYnlEYXRhc2V0IiwiX3RvZ2dsZVBhbmVsTGlzdFZpZXciLCJfYWRkTGF5ZXIiLCJsYXllckNsYXNzZXMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBbUNBLElBQU1BLHFCQUFxQixnQkFBR0Msa0JBQU1DLElBQU4sQ0FDNUIsZ0JBQTRFO0FBQUEsTUFBMUVDLGFBQTBFLFFBQTFFQSxhQUEwRTtBQUFBLE1BQTNEQyxtQkFBMkQsUUFBM0RBLG1CQUEyRDtBQUFBLE1BQXRDQyxJQUFzQyxRQUF0Q0EsSUFBc0M7QUFDMUUsTUFBTUMscUJBQXFCLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQywwQkFBWixFQUE2QkMsTUFBN0IsQ0FDNUIsVUFBQ0MsR0FBRCxFQUFNQyxPQUFOO0FBQUEsMkNBQ0tELEdBREwsNENBRUdOLElBQUksQ0FBQ1EsYUFBTCxDQUFtQjtBQUFDQyxNQUFBQSxFQUFFLEVBQUVMLDJCQUFnQkcsT0FBaEIsRUFBeUJHO0FBQTlCLEtBQW5CLENBRkgsRUFFOERILE9BRjlEO0FBQUEsR0FENEIsRUFLNUIsRUFMNEIsQ0FBOUI7QUFRQSxNQUFNSSxRQUFRLEdBQUcsd0JBQVksVUFBQUMsUUFBUTtBQUFBLFdBQUliLG1CQUFtQixDQUFDRSxxQkFBcUIsQ0FBQ1csUUFBRCxDQUF0QixDQUF2QjtBQUFBLEdBQXBCLEVBQThFLENBQzdGYixtQkFENkYsRUFFN0ZFLHFCQUY2RixDQUE5RSxDQUFqQjtBQUtBLHNCQUNFLGdDQUFDLG1DQUFELHFCQUNFLGdDQUFDLDZCQUFELHFCQUNFLGdDQUFDLDhCQUFEO0FBQWtCLElBQUEsRUFBRSxFQUFDO0FBQXJCLElBREYsQ0FERixlQUlFLGdDQUFDLHdCQUFEO0FBQ0UsSUFBQSxhQUFhLEVBQUVELElBQUksQ0FBQ1EsYUFBTCxDQUFtQjtBQUFDQyxNQUFBQSxFQUFFLEVBQUVMLDJCQUFnQk4sYUFBaEIsRUFBK0JZO0FBQXBDLEtBQW5CLENBRGpCO0FBRUUsSUFBQSxPQUFPLEVBQUVSLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZRixxQkFBWixDQUZYO0FBR0UsSUFBQSxXQUFXLEVBQUUsS0FIZjtBQUlFLElBQUEsVUFBVSxFQUFFLEtBSmQ7QUFLRSxJQUFBLFFBQVEsRUFBRVU7QUFMWixJQUpGLENBREY7QUFjRCxDQTdCMkIsQ0FBOUI7O0FBK0JBaEIscUJBQXFCLENBQUNrQixXQUF0QixHQUFvQyx1QkFBcEM7O0FBRUEsSUFBTUMsaUJBQWlCLEdBQUdDLDZCQUFPQyxHQUFWLHlHQUF2Qjs7QUFJQSxJQUFNQywrQkFBK0IsR0FBR0YsNkJBQU9DLEdBQVYsNEpBQXJDOztBQU1BLElBQU1FLHVCQUF1QixnQkFBR3RCLGtCQUFNQyxJQUFOLENBQzlCLGlCQUE4RjtBQUFBLE1BQTVGc0IsZUFBNEYsU0FBNUZBLGVBQTRGO0FBQUEsTUFBM0VDLHFCQUEyRSxTQUEzRUEscUJBQTJFO0FBQUEsTUFBcERwQixJQUFvRCxTQUFwREEsSUFBb0Q7QUFBQSxNQUE5Q3FCLFVBQThDLFNBQTlDQSxVQUE4QztBQUM1RixNQUFNQyx1QkFBdUIsR0FBR3BCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZb0IsNEJBQVosRUFBK0JsQixNQUEvQixDQUM5QixVQUFDQyxHQUFELEVBQU1DLE9BQU47QUFBQSwyQ0FDS0QsR0FETCw0Q0FFR04sSUFBSSxDQUFDUSxhQUFMLENBQW1CO0FBQUNDLE1BQUFBLEVBQUUsRUFBRWMsNkJBQWtCaEIsT0FBbEIsRUFBMkJHO0FBQWhDLEtBQW5CLENBRkgsRUFFZ0VILE9BRmhFO0FBQUEsR0FEOEIsRUFLOUIsRUFMOEIsQ0FBaEM7QUFRQSxNQUFNSSxRQUFRLEdBQUcsd0JBQ2YsVUFBQUMsUUFBUTtBQUFBLFdBQUlRLHFCQUFxQixDQUFDRSx1QkFBdUIsQ0FBQ1YsUUFBRCxDQUF4QixDQUF6QjtBQUFBLEdBRE8sRUFFZixDQUFDUSxxQkFBRCxFQUF3QkUsdUJBQXhCLENBRmUsQ0FBakI7QUFLQSxzQkFDRSxnQ0FBQyxtQ0FBRCxxQkFDRSxnQ0FBQywrQkFBRCxxQkFDRSxnQ0FBQyw2QkFBRCxxQkFDRSxnQ0FBQyw4QkFBRDtBQUFrQixJQUFBLEVBQUUsRUFBQztBQUFyQixJQURGLENBREYsZUFJRSxnQ0FBQyxpQkFBRCxRQUFvQkQsVUFBcEIsQ0FKRixDQURGLGVBT0UsZ0NBQUMsd0JBQUQ7QUFDRSxJQUFBLGFBQWEsRUFBRXJCLElBQUksQ0FBQ1EsYUFBTCxDQUFtQjtBQUFDQyxNQUFBQSxFQUFFLEVBQUVjLDZCQUFrQkosZUFBbEIsRUFBbUNUO0FBQXhDLEtBQW5CLENBRGpCO0FBRUUsSUFBQSxPQUFPLEVBQUVSLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZbUIsdUJBQVosQ0FGWDtBQUdFLElBQUEsV0FBVyxFQUFFLEtBSGY7QUFJRSxJQUFBLFVBQVUsRUFBRSxLQUpkO0FBS0UsSUFBQSxRQUFRLEVBQUVYO0FBTFosSUFQRixDQURGO0FBaUJELENBaEM2QixDQUFoQzs7QUFrQ0FPLHVCQUF1QixDQUFDTCxXQUF4QixHQUFzQyx5QkFBdEM7QUFFQVcsbUJBQW1CLENBQUNDLElBQXBCLEdBQTJCLENBQ3pCQyxxQkFEeUIsRUFFekJDLDZCQUZ5QixFQUd6QkMsK0JBSHlCLEVBSXpCQyxzQkFKeUIsRUFLekJDLDBCQUx5QixFQU16QkMsMEJBTnlCLEVBT3pCQyxzQkFQeUIsQ0FBM0I7O0FBVUEsU0FBU1IsbUJBQVQsQ0FDRVMsU0FERixFQUVFQyxpQkFGRixFQUdFQyxtQkFIRixFQUlFQyxVQUpGLEVBS0VDLGNBTEYsRUFNRUMsY0FORixFQU9FQyxVQVBGLEVBUUU7QUFBQSxNQUNNQyxZQUROO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxvR0FFYyxVQUFDQyxPQUFELEVBQXFCO0FBQUEsWUFDeEJDLGVBRHdCLEdBQ0wsTUFBS0MsS0FEQSxDQUN4QkQsZUFEd0I7QUFFL0JBLFFBQUFBLGVBQWUsQ0FBQ0UsUUFBaEIsQ0FBeUJDLFNBQXpCLEVBQW9DSixPQUFwQztBQUNELE9BTEg7QUFBQSwrR0FPeUIsVUFBQ0ssUUFBRCxFQUFzQjtBQUFBLFlBQ3BDQyxjQURvQyxHQUNsQixNQUFLSixLQURhLENBQ3BDSSxjQURvQztBQUUzQ0EsUUFBQUEsY0FBYyxDQUFDQyxtQkFBZixDQUFtQztBQUFDQyxVQUFBQSxPQUFPLEVBQUUsT0FBVjtBQUFtQkgsVUFBQUEsUUFBUSxFQUFSQTtBQUFuQixTQUFuQztBQUNELE9BVkg7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxhQVlFLGtCQUFTO0FBQUEsMEJBY0gsS0FBS0gsS0FkRjtBQUFBLFlBRUxPLE1BRkssZUFFTEEsTUFGSztBQUFBLFlBR0xDLFFBSEssZUFHTEEsUUFISztBQUFBLFlBSUxuRCxJQUpLLGVBSUxBLElBSks7QUFBQSxZQUtMb0QsVUFMSyxlQUtMQSxVQUxLO0FBQUEsWUFNTEMsZ0JBTkssZUFNTEEsZ0JBTks7QUFBQSxZQU9MQyxnQkFQSyxlQU9MQSxnQkFQSztBQUFBLFlBUUxDLGdCQVJLLGVBUUxBLGdCQVJLO0FBQUEsWUFTTEMsYUFUSyxlQVNMQSxhQVRLO0FBQUEsWUFVTFQsY0FWSyxlQVVMQSxjQVZLO0FBQUEsWUFXTEwsZUFYSyxlQVdMQSxlQVhLO0FBQUEsWUFZTGUsYUFaSyxlQVlMQSxhQVpLO0FBQUEsWUFhTEMsYUFiSyxlQWFMQSxhQWJLO0FBZ0JQLFlBQU1DLG1CQUFtQixHQUFHRixhQUFhLEtBQUtHLDhCQUFtQkMsU0FBakU7QUFFQSw0QkFDRTtBQUFLLFVBQUEsU0FBUyxFQUFDO0FBQWYsd0JBQ0UsZ0NBQUMsbUNBQUQscUJBQ0UsZ0NBQUMsbUJBQUQ7QUFDRSxVQUFBLG1CQUFtQixFQUFFLEtBQUtDLG9CQUQ1QjtBQUVFLFVBQUEsSUFBSSxFQUFFTDtBQUZSLFVBREYsQ0FERixlQU9FLGdDQUFDLGNBQUQ7QUFDRSxVQUFBLFFBQVEsRUFBRU4sUUFEWjtBQUVFLFVBQUEsZ0JBQWdCLEVBQUVJLGdCQUZwQjtBQUdFLFVBQUEsZ0JBQWdCLEVBQUVELGdCQUhwQjtBQUlFLFVBQUEsYUFBYSxFQUFFRSxhQUpqQjtBQUtFLFVBQUEsaUJBQWlCLE1BTG5CO0FBTUUsVUFBQSxlQUFlLEVBQUUsQ0FBQ0csbUJBTnBCO0FBT0UsVUFBQSxnQkFBZ0IsRUFBRU47QUFQcEIsVUFQRixlQWdCRSxnQ0FBQyxtQ0FBRCxPQWhCRixlQWlCRSxnQ0FBQyxtQ0FBRCxxQkFDRSxnQ0FBQyxVQUFEO0FBQ0UsVUFBQSxTQUFTLEVBQUMscUJBRFo7QUFFRSxVQUFBLEtBQUssRUFBRXJELElBQUksQ0FBQ1EsYUFBTCxDQUFtQjtBQUFDQyxZQUFBQSxFQUFFLEVBQUVpRCxhQUFhLENBQUNoRDtBQUFuQixXQUFuQjtBQUZULHdCQUlFLGdDQUFDLGNBQUQ7QUFBZ0IsVUFBQSxRQUFRLEVBQUV5QyxRQUExQjtBQUFvQyxVQUFBLEtBQUssRUFBRSxLQUFLWTtBQUFoRCxVQUpGLENBREYsQ0FqQkYsZUF5QkUsZ0NBQUMsbUNBQUQsUUFDR0osbUJBQW1CLGdCQUNsQixnQ0FBQyxpQkFBRDtBQUNFLFVBQUEsUUFBUSxFQUFFUixRQURaO0FBRUUsVUFBQSxnQkFBZ0IsRUFBRUksZ0JBRnBCO0FBR0UsVUFBQSxNQUFNLEVBQUVMLE1BSFY7QUFJRSxVQUFBLGdCQUFnQixFQUFFSSxnQkFKcEI7QUFLRSxVQUFBLGFBQWEsRUFBRUUsYUFMakI7QUFNRSxVQUFBLFVBQVUsRUFBRUosVUFOZDtBQU9FLFVBQUEsWUFBWSxFQUFFLEtBQUtULEtBQUwsQ0FBV3FCLFlBUDNCO0FBUUUsVUFBQSxjQUFjLEVBQUVqQixjQVJsQjtBQVNFLFVBQUEsZUFBZSxFQUFFTCxlQVRuQjtBQVVFLFVBQUEsaUJBQWlCO0FBVm5CLFVBRGtCO0FBQUE7QUFjbEI7QUFDQTtBQUNBLHdDQUFDLFNBQUQ7QUFDRSxVQUFBLE1BQU0sRUFBRVEsTUFEVjtBQUVFLFVBQUEsUUFBUSxFQUFFQyxRQUZaO0FBR0UsVUFBQSxVQUFVLEVBQUVDLFVBSGQ7QUFJRSxVQUFBLGNBQWMsRUFBRUwsY0FKbEI7QUFLRSxVQUFBLGVBQWUsRUFBRUwsZUFMbkI7QUFNRSxVQUFBLFlBQVksRUFBRSxLQUFLQyxLQUFMLENBQVdxQjtBQU4zQixVQWpCSixDQXpCRixlQW9ERSxnQ0FBQyxxQkFBRDtBQUNFLFVBQUEsYUFBYSxFQUFFLEtBQUtyQixLQUFMLENBQVc3QyxhQUQ1QjtBQUVFLFVBQUEsbUJBQW1CLEVBQUU0QyxlQUFlLENBQUMzQyxtQkFGdkM7QUFHRSxVQUFBLElBQUksRUFBRUM7QUFIUixVQXBERixlQXlERSxnQ0FBQyx1QkFBRDtBQUNFLFVBQUEsZUFBZSxFQUFFLEtBQUsyQyxLQUFMLENBQVd4QixlQUQ5QjtBQUVFLFVBQUEscUJBQXFCLEVBQUV1QixlQUFlLENBQUN0QixxQkFGekM7QUFHRSxVQUFBLElBQUksRUFBRXBCLElBSFI7QUFJRSxVQUFBLFVBQVUsZUFDUixnQ0FBQyxVQUFEO0FBQ0UsWUFBQSxFQUFFLCtCQURKO0FBRUUsWUFBQSxXQUFXLEVBQUU7QUFGZjtBQUxKLFVBekRGLENBREY7QUF1RUQ7QUFyR0g7QUFBQTtBQUFBLElBQzJCaUUsZ0JBRDNCOztBQXVHQSxTQUFPLDJCQUFXekIsWUFBWCxDQUFQO0FBQ0Q7O2VBRWNoQixtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtpbmplY3RJbnRsLCBXcmFwcGVkQ29tcG9uZW50UHJvcHN9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ0BrZXBsZXIuZ2wvbG9jYWxpemF0aW9uJztcblxuaW1wb3J0IExheWVyTGlzdEZhY3RvcnkgZnJvbSAnLi9sYXllci1wYW5lbC9sYXllci1saXN0JztcbmltcG9ydCBEYXRhc2V0TGF5ZXJHcm91cEZhY3RvcnkgZnJvbSAnLi9sYXllci1wYW5lbC9kYXRhc2V0LWxheWVyLWdyb3VwJztcbmltcG9ydCBQYW5lbFZpZXdMaXN0VG9nZ2xlRmFjdG9yeSBmcm9tICcuL3BhbmVsLXZpZXctbGlzdC10b2dnbGUnO1xuaW1wb3J0IFBhbmVsVGl0bGVGYWN0b3J5IGZyb20gJy4vcGFuZWwtdGl0bGUnO1xuaW1wb3J0IERhdGFzZXRTZWN0aW9uRmFjdG9yeSBmcm9tICcuL2xheWVyLXBhbmVsL2RhdGFzZXQtc2VjdGlvbic7XG5pbXBvcnQgQWRkTGF5ZXJCdXR0b25GYWN0b3J5IGZyb20gJy4vbGF5ZXItcGFuZWwvYWRkLWxheWVyLWJ1dHRvbic7XG5cbmltcG9ydCBJdGVtU2VsZWN0b3IgZnJvbSAnLi4vY29tbW9uL2l0ZW0tc2VsZWN0b3IvaXRlbS1zZWxlY3Rvcic7XG5pbXBvcnQge1BhbmVsTGFiZWwsIFNpZGVQYW5lbERpdmlkZXIsIFNpZGVQYW5lbFNlY3Rpb259IGZyb20gJy4uL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgSW5mb0hlbHBlckZhY3RvcnkgZnJvbSAnLi4vY29tbW9uL2luZm8taGVscGVyJztcblxuaW1wb3J0IHtMQVlFUl9CTEVORElOR1MsIE9WRVJMQVlfQkxFTkRJTkdTLCBQQU5FTF9WSUVXX1RPR0dMRVN9IGZyb20gJ0BrZXBsZXIuZ2wvY29uc3RhbnRzJztcbmltcG9ydCB7TGF5ZXIsIExheWVyQ2xhc3Nlc1R5cGV9IGZyb20gJ0BrZXBsZXIuZ2wvbGF5ZXJzJztcbmltcG9ydCB7VUlTdGF0ZUFjdGlvbnMsIFZpc1N0YXRlQWN0aW9ucywgQWN0aW9uSGFuZGxlcn0gZnJvbSAnQGtlcGxlci5nbC9hY3Rpb25zJztcbmltcG9ydCB7U2lkZVBhbmVsSXRlbX0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtQYW5lbExpc3RWaWV3fSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcbmltcG9ydCB7RGF0YXNldHN9IGZyb20gJ0BrZXBsZXIuZ2wvdGFibGUnO1xuXG50eXBlIExheWVyQmxlbmRpbmdTZWxlY3RvclByb3BzID0ge1xuICBsYXllckJsZW5kaW5nOiBzdHJpbmc7XG4gIHVwZGF0ZUxheWVyQmxlbmRpbmc6IEFjdGlvbkhhbmRsZXI8dHlwZW9mIFZpc1N0YXRlQWN0aW9ucy51cGRhdGVMYXllckJsZW5kaW5nPjtcbn0gJiBXcmFwcGVkQ29tcG9uZW50UHJvcHM7XG5cbnR5cGUgT3ZlcmxheUJsZW5kaW5nU2VsZWN0b3JQcm9wcyA9IHtcbiAgb3ZlcmxheUJsZW5kaW5nOiBzdHJpbmc7XG4gIHVwZGF0ZU92ZXJsYXlCbGVuZGluZzogQWN0aW9uSGFuZGxlcjx0eXBlb2YgVmlzU3RhdGVBY3Rpb25zLnVwZGF0ZU92ZXJsYXlCbGVuZGluZz47XG4gIGluZm9IZWxwZXI6IFJlYWN0LlJlYWN0Tm9kZTtcbn0gJiBXcmFwcGVkQ29tcG9uZW50UHJvcHM7XG5cbnR5cGUgTGF5ZXJNYW5hZ2VyUHJvcHMgPSB7XG4gIGRhdGFzZXRzOiBEYXRhc2V0cztcbiAgbGF5ZXJzOiBMYXllcltdO1xuICBsYXllck9yZGVyOiBudW1iZXJbXTtcbiAgbGF5ZXJDbGFzc2VzOiBMYXllckNsYXNzZXNUeXBlO1xuICBsYXllckJsZW5kaW5nOiBzdHJpbmc7XG4gIG92ZXJsYXlCbGVuZGluZzogc3RyaW5nO1xuICB1aVN0YXRlQWN0aW9uczogdHlwZW9mIFVJU3RhdGVBY3Rpb25zO1xuICB2aXNTdGF0ZUFjdGlvbnM6IHR5cGVvZiBWaXNTdGF0ZUFjdGlvbnM7XG4gIHNob3dBZGREYXRhTW9kYWw6ICgpID0+IHZvaWQ7XG4gIHJlbW92ZURhdGFzZXQ6IEFjdGlvbkhhbmRsZXI8dHlwZW9mIFVJU3RhdGVBY3Rpb25zLm9wZW5EZWxldGVNb2RhbD47XG4gIHNob3dEYXRhc2V0VGFibGU6IEFjdGlvbkhhbmRsZXI8dHlwZW9mIFZpc1N0YXRlQWN0aW9ucy5zaG93RGF0YXNldFRhYmxlPjtcbiAgdXBkYXRlVGFibGVDb2xvcjogQWN0aW9uSGFuZGxlcjx0eXBlb2YgVmlzU3RhdGVBY3Rpb25zLnVwZGF0ZVRhYmxlQ29sb3I+O1xuICBwYW5lbExpc3RWaWV3OiBQYW5lbExpc3RWaWV3O1xuICBwYW5lbE1ldGFkYXRhOiBTaWRlUGFuZWxJdGVtO1xufSAmIFdyYXBwZWRDb21wb25lbnRQcm9wcztcblxuY29uc3QgTGF5ZXJCbGVuZGluZ1NlbGVjdG9yID0gUmVhY3QubWVtbyhcbiAgKHtsYXllckJsZW5kaW5nLCB1cGRhdGVMYXllckJsZW5kaW5nLCBpbnRsfTogTGF5ZXJCbGVuZGluZ1NlbGVjdG9yUHJvcHMpID0+IHtcbiAgICBjb25zdCBsYWJlbGVkTGF5ZXJCbGVuZGluZ3MgPSBPYmplY3Qua2V5cyhMQVlFUl9CTEVORElOR1MpLnJlZHVjZShcbiAgICAgIChhY2MsIGN1cnJlbnQpID0+ICh7XG4gICAgICAgIC4uLmFjYyxcbiAgICAgICAgW2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6IExBWUVSX0JMRU5ESU5HU1tjdXJyZW50XS5sYWJlbH0pXTogY3VycmVudFxuICAgICAgfSksXG4gICAgICB7fVxuICAgICk7XG5cbiAgICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKGJsZW5kaW5nID0+IHVwZGF0ZUxheWVyQmxlbmRpbmcobGFiZWxlZExheWVyQmxlbmRpbmdzW2JsZW5kaW5nXSksIFtcbiAgICAgIHVwZGF0ZUxheWVyQmxlbmRpbmcsXG4gICAgICBsYWJlbGVkTGF5ZXJCbGVuZGluZ3NcbiAgICBdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgPFBhbmVsTGFiZWw+XG4gICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJsYXllckJsZW5kaW5nLnRpdGxlXCIgLz5cbiAgICAgICAgPC9QYW5lbExhYmVsPlxuICAgICAgICA8SXRlbVNlbGVjdG9yXG4gICAgICAgICAgc2VsZWN0ZWRJdGVtcz17aW50bC5mb3JtYXRNZXNzYWdlKHtpZDogTEFZRVJfQkxFTkRJTkdTW2xheWVyQmxlbmRpbmddLmxhYmVsfSl9XG4gICAgICAgICAgb3B0aW9ucz17T2JqZWN0LmtleXMobGFiZWxlZExheWVyQmxlbmRpbmdzKX1cbiAgICAgICAgICBtdWx0aVNlbGVjdD17ZmFsc2V9XG4gICAgICAgICAgc2VhcmNoYWJsZT17ZmFsc2V9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICAgICk7XG4gIH1cbik7XG5MYXllckJsZW5kaW5nU2VsZWN0b3IuZGlzcGxheU5hbWUgPSAnTGF5ZXJCbGVuZGluZ1NlbGVjdG9yJztcblxuY29uc3QgSW5mb0hlbHBlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBmbG9hdDogcmlnaHQ7XG5gO1xuXG5jb25zdCBPdmVybGF5QmxlbmRpbmdTZWxlY3RvclRpdGxlUm93ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IE92ZXJsYXlCbGVuZGluZ1NlbGVjdG9yID0gUmVhY3QubWVtbyhcbiAgKHtvdmVybGF5QmxlbmRpbmcsIHVwZGF0ZU92ZXJsYXlCbGVuZGluZywgaW50bCwgaW5mb0hlbHBlcn06IE92ZXJsYXlCbGVuZGluZ1NlbGVjdG9yUHJvcHMpID0+IHtcbiAgICBjb25zdCBsYWJlbGVkT3ZlcmxheUJsZW5kaW5ncyA9IE9iamVjdC5rZXlzKE9WRVJMQVlfQkxFTkRJTkdTKS5yZWR1Y2UoXG4gICAgICAoYWNjLCBjdXJyZW50KSA9PiAoe1xuICAgICAgICAuLi5hY2MsXG4gICAgICAgIFtpbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOiBPVkVSTEFZX0JMRU5ESU5HU1tjdXJyZW50XS5sYWJlbH0pXTogY3VycmVudFxuICAgICAgfSksXG4gICAgICB7fVxuICAgICk7XG5cbiAgICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgYmxlbmRpbmcgPT4gdXBkYXRlT3ZlcmxheUJsZW5kaW5nKGxhYmVsZWRPdmVybGF5QmxlbmRpbmdzW2JsZW5kaW5nXSksXG4gICAgICBbdXBkYXRlT3ZlcmxheUJsZW5kaW5nLCBsYWJlbGVkT3ZlcmxheUJsZW5kaW5nc11cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICA8T3ZlcmxheUJsZW5kaW5nU2VsZWN0b3JUaXRsZVJvdz5cbiAgICAgICAgICA8UGFuZWxMYWJlbD5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwib3ZlcmxheUJsZW5kaW5nLnRpdGxlXCIgLz5cbiAgICAgICAgICA8L1BhbmVsTGFiZWw+XG4gICAgICAgICAgPEluZm9IZWxwZXJXcmFwcGVyPntpbmZvSGVscGVyfTwvSW5mb0hlbHBlcldyYXBwZXI+XG4gICAgICAgIDwvT3ZlcmxheUJsZW5kaW5nU2VsZWN0b3JUaXRsZVJvdz5cbiAgICAgICAgPEl0ZW1TZWxlY3RvclxuICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6IE9WRVJMQVlfQkxFTkRJTkdTW292ZXJsYXlCbGVuZGluZ10ubGFiZWx9KX1cbiAgICAgICAgICBvcHRpb25zPXtPYmplY3Qua2V5cyhsYWJlbGVkT3ZlcmxheUJsZW5kaW5ncyl9XG4gICAgICAgICAgbXVsdGlTZWxlY3Q9e2ZhbHNlfVxuICAgICAgICAgIHNlYXJjaGFibGU9e2ZhbHNlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgICApO1xuICB9XG4pO1xuT3ZlcmxheUJsZW5kaW5nU2VsZWN0b3IuZGlzcGxheU5hbWUgPSAnT3ZlcmxheUJsZW5kaW5nU2VsZWN0b3InO1xuXG5MYXllck1hbmFnZXJGYWN0b3J5LmRlcHMgPSBbXG4gIExheWVyTGlzdEZhY3RvcnksXG4gIERhdGFzZXRMYXllckdyb3VwRmFjdG9yeSxcbiAgUGFuZWxWaWV3TGlzdFRvZ2dsZUZhY3RvcnksXG4gIFBhbmVsVGl0bGVGYWN0b3J5LFxuICBEYXRhc2V0U2VjdGlvbkZhY3RvcnksXG4gIEFkZExheWVyQnV0dG9uRmFjdG9yeSxcbiAgSW5mb0hlbHBlckZhY3Rvcnlcbl07XG5cbmZ1bmN0aW9uIExheWVyTWFuYWdlckZhY3RvcnkoXG4gIExheWVyTGlzdDogUmV0dXJuVHlwZTx0eXBlb2YgTGF5ZXJMaXN0RmFjdG9yeT4sXG4gIERhdGFzZXRMYXllckdyb3VwOiBSZXR1cm5UeXBlPHR5cGVvZiBEYXRhc2V0TGF5ZXJHcm91cEZhY3Rvcnk+LFxuICBQYW5lbFZpZXdMaXN0VG9nZ2xlOiBSZXR1cm5UeXBlPHR5cGVvZiBQYW5lbFZpZXdMaXN0VG9nZ2xlRmFjdG9yeT4sXG4gIFBhbmVsVGl0bGU6IFJldHVyblR5cGU8dHlwZW9mIFBhbmVsVGl0bGVGYWN0b3J5PixcbiAgRGF0YXNldFNlY3Rpb246IFJldHVyblR5cGU8dHlwZW9mIERhdGFzZXRTZWN0aW9uRmFjdG9yeT4sXG4gIEFkZExheWVyQnV0dG9uOiBSZXR1cm5UeXBlPHR5cGVvZiBBZGRMYXllckJ1dHRvbkZhY3Rvcnk+LFxuICBJbmZvSGVscGVyOiBSZXR1cm5UeXBlPHR5cGVvZiBJbmZvSGVscGVyRmFjdG9yeT5cbikge1xuICBjbGFzcyBMYXllck1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQ8TGF5ZXJNYW5hZ2VyUHJvcHM+IHtcbiAgICBfYWRkTGF5ZXIgPSAoZGF0YXNldDogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCB7dmlzU3RhdGVBY3Rpb25zfSA9IHRoaXMucHJvcHM7XG4gICAgICB2aXNTdGF0ZUFjdGlvbnMuYWRkTGF5ZXIodW5kZWZpbmVkLCBkYXRhc2V0KTtcbiAgICB9O1xuXG4gICAgX3RvZ2dsZVBhbmVsTGlzdFZpZXcgPSAobGlzdFZpZXc6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qge3VpU3RhdGVBY3Rpb25zfSA9IHRoaXMucHJvcHM7XG4gICAgICB1aVN0YXRlQWN0aW9ucy50b2dnbGVQYW5lbExpc3RWaWV3KHtwYW5lbElkOiAnbGF5ZXInLCBsaXN0Vmlld30pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGxheWVycyxcbiAgICAgICAgZGF0YXNldHMsXG4gICAgICAgIGludGwsXG4gICAgICAgIGxheWVyT3JkZXIsXG4gICAgICAgIHNob3dBZGREYXRhTW9kYWwsXG4gICAgICAgIHVwZGF0ZVRhYmxlQ29sb3IsXG4gICAgICAgIHNob3dEYXRhc2V0VGFibGUsXG4gICAgICAgIHJlbW92ZURhdGFzZXQsXG4gICAgICAgIHVpU3RhdGVBY3Rpb25zLFxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgICAgIHBhbmVsTGlzdFZpZXcsXG4gICAgICAgIHBhbmVsTWV0YWRhdGFcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBjb25zdCBpc1NvcnRCeURhdGFzZXRNb2RlID0gcGFuZWxMaXN0VmlldyA9PT0gUEFORUxfVklFV19UT0dHTEVTLmJ5RGF0YXNldDtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXllci1tYW5hZ2VyXCI+XG4gICAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgICA8UGFuZWxWaWV3TGlzdFRvZ2dsZVxuICAgICAgICAgICAgICB0b2dnbGVQYW5lbExpc3RWaWV3PXt0aGlzLl90b2dnbGVQYW5lbExpc3RWaWV3fVxuICAgICAgICAgICAgICBtb2RlPXtwYW5lbExpc3RWaWV3fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgPERhdGFzZXRTZWN0aW9uXG4gICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICBzaG93RGF0YXNldFRhYmxlPXtzaG93RGF0YXNldFRhYmxlfVxuICAgICAgICAgICAgdXBkYXRlVGFibGVDb2xvcj17dXBkYXRlVGFibGVDb2xvcn1cbiAgICAgICAgICAgIHJlbW92ZURhdGFzZXQ9e3JlbW92ZURhdGFzZXR9XG4gICAgICAgICAgICBzaG93RGVsZXRlRGF0YXNldFxuICAgICAgICAgICAgc2hvd0RhdGFzZXRMaXN0PXshaXNTb3J0QnlEYXRhc2V0TW9kZX1cbiAgICAgICAgICAgIHNob3dBZGREYXRhTW9kYWw9e3Nob3dBZGREYXRhTW9kYWx9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8U2lkZVBhbmVsRGl2aWRlciAvPlxuICAgICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgICAgPFBhbmVsVGl0bGVcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGF5ZXItbWFuYWdlci10aXRsZVwiXG4gICAgICAgICAgICAgIHRpdGxlPXtpbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOiBwYW5lbE1ldGFkYXRhLmxhYmVsfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxBZGRMYXllckJ1dHRvbiBkYXRhc2V0cz17ZGF0YXNldHN9IG9uQWRkPXt0aGlzLl9hZGRMYXllcn0gLz5cbiAgICAgICAgICAgIDwvUGFuZWxUaXRsZT5cbiAgICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgICB7aXNTb3J0QnlEYXRhc2V0TW9kZSA/IChcbiAgICAgICAgICAgICAgPERhdGFzZXRMYXllckdyb3VwXG4gICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICAgIHNob3dEYXRhc2V0VGFibGU9e3Nob3dEYXRhc2V0VGFibGV9XG4gICAgICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XG4gICAgICAgICAgICAgICAgdXBkYXRlVGFibGVDb2xvcj17dXBkYXRlVGFibGVDb2xvcn1cbiAgICAgICAgICAgICAgICByZW1vdmVEYXRhc2V0PXtyZW1vdmVEYXRhc2V0fVxuICAgICAgICAgICAgICAgIGxheWVyT3JkZXI9e2xheWVyT3JkZXJ9XG4gICAgICAgICAgICAgICAgbGF5ZXJDbGFzc2VzPXt0aGlzLnByb3BzLmxheWVyQ2xhc3Nlc31cbiAgICAgICAgICAgICAgICB1aVN0YXRlQWN0aW9ucz17dWlTdGF0ZUFjdGlvbnN9XG4gICAgICAgICAgICAgICAgdmlzU3RhdGVBY3Rpb25zPXt2aXNTdGF0ZUFjdGlvbnN9XG4gICAgICAgICAgICAgICAgc2hvd0RlbGV0ZURhdGFzZXRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIC8vIFRPRE8gcmVwbGFjZSBpZ25vcmVcbiAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICA8TGF5ZXJMaXN0XG4gICAgICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XG4gICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICAgIGxheWVyT3JkZXI9e2xheWVyT3JkZXJ9XG4gICAgICAgICAgICAgICAgdWlTdGF0ZUFjdGlvbnM9e3VpU3RhdGVBY3Rpb25zfVxuICAgICAgICAgICAgICAgIHZpc1N0YXRlQWN0aW9ucz17dmlzU3RhdGVBY3Rpb25zfVxuICAgICAgICAgICAgICAgIGxheWVyQ2xhc3Nlcz17dGhpcy5wcm9wcy5sYXllckNsYXNzZXN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgICA8TGF5ZXJCbGVuZGluZ1NlbGVjdG9yXG4gICAgICAgICAgICBsYXllckJsZW5kaW5nPXt0aGlzLnByb3BzLmxheWVyQmxlbmRpbmd9XG4gICAgICAgICAgICB1cGRhdGVMYXllckJsZW5kaW5nPXt2aXNTdGF0ZUFjdGlvbnMudXBkYXRlTGF5ZXJCbGVuZGluZ31cbiAgICAgICAgICAgIGludGw9e2ludGx9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8T3ZlcmxheUJsZW5kaW5nU2VsZWN0b3JcbiAgICAgICAgICAgIG92ZXJsYXlCbGVuZGluZz17dGhpcy5wcm9wcy5vdmVybGF5QmxlbmRpbmd9XG4gICAgICAgICAgICB1cGRhdGVPdmVybGF5QmxlbmRpbmc9e3Zpc1N0YXRlQWN0aW9ucy51cGRhdGVPdmVybGF5QmxlbmRpbmd9XG4gICAgICAgICAgICBpbnRsPXtpbnRsfVxuICAgICAgICAgICAgaW5mb0hlbHBlcj17XG4gICAgICAgICAgICAgIDxJbmZvSGVscGVyXG4gICAgICAgICAgICAgICAgaWQ9e2BvdmVybGF5QmxlbmRpbmctZGVzY3JpcHRpb25gfVxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXsnb3ZlcmxheUJsZW5kaW5nLmRlc2NyaXB0aW9uJ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmplY3RJbnRsKExheWVyTWFuYWdlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyTWFuYWdlckZhY3Rvcnk7XG4iXX0=