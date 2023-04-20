"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DatasetTabs = exports.DatasetModalTab = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _datasetLabel = _interopRequireDefault(require("../common/dataset-label"));

var _dataTable = _interopRequireDefault(require("../common/data-table"));

var _reselect = require("reselect");

var _cellSize = require("../common/data-table/cell-size");

var _canvas = _interopRequireDefault(require("../common/data-table/canvas"));

var _icons = require("../common/icons");

var _portaled = _interopRequireDefault(require("../common/portaled"));

var _displayFormat = _interopRequireDefault(require("../common/data-table/display-format"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MIN_STATS_CELL_SIZE = 122; // sidePadding changes from 38 to 68, 30px for configuration button

var dgSettings = {
  sidePadding: '68px',
  verticalPadding: '16px',
  height: '36px'
};

var StyledModal = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  min-height: 85vh;\n  overflow: hidden;\n  display: flex;\n"])));

var DatasetCatalog = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  padding: ", " ", " 0;\n"])), dgSettings.verticalPadding, dgSettings.sidePadding);

var DatasetModalTab = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  border-bottom: 3px solid ", ";\n  cursor: pointer;\n  display: flex;\n  height: 35px;\n  margin: 0 3px;\n  padding: 0 5px;\n\n  :first-child {\n    margin-left: 0;\n    padding-left: 0;\n  }\n"])), function (props) {
  return props.active ? 'black' : 'transparent';
});

exports.DatasetModalTab = DatasetModalTab;

var StyledConfigureButton = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: flex-end;\n  position: absolute;\n  top: 24px;\n  right: 48px;\n  svg {\n    stroke: black;\n  }\n"])));

var DatasetTabsUnmemoized = function DatasetTabsUnmemoized(_ref) {
  var activeDataset = _ref.activeDataset,
      datasets = _ref.datasets,
      showDatasetTable = _ref.showDatasetTable;
  return /*#__PURE__*/_react["default"].createElement(DatasetCatalog, {
    className: "dataset-modal-catalog"
  }, Object.values(datasets).map(function (dataset) {
    return /*#__PURE__*/_react["default"].createElement(DatasetModalTab, {
      className: "dataset-modal-tab",
      active: dataset === activeDataset,
      key: dataset.id,
      onClick: function onClick() {
        return showDatasetTable(dataset.id);
      }
    }, /*#__PURE__*/_react["default"].createElement(_datasetLabel["default"], {
      dataset: dataset
    }));
  }));
};

var DatasetTabs = /*#__PURE__*/_react["default"].memo(DatasetTabsUnmemoized);

exports.DatasetTabs = DatasetTabs;
DatasetTabs.displayName = 'DatasetTabs';
DataTableModalFactory.deps = [_dataTable["default"], _displayFormat["default"]];

var TableContainer = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  min-height: 100%;\n  max-height: 100%;\n"])));

function DataTableModalFactory(DataTable, DataTableConfig) {
  var DataTableModal = /*#__PURE__*/function (_React$Component) {
    (0, _inherits2["default"])(DataTableModal, _React$Component);

    var _super = _createSuper(DataTableModal);

    function DataTableModal() {
      var _this;

      (0, _classCallCheck2["default"])(this, DataTableModal);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        showConfig: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "datasetCellSizeCache", {});
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "dataId", function (_ref2) {
        var _ref2$dataId = _ref2.dataId,
            dataId = _ref2$dataId === void 0 ? '' : _ref2$dataId;
        return dataId;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "datasets", function (props) {
        return props.datasets;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fields", function (_ref3) {
        var datasets = _ref3.datasets,
            _ref3$dataId = _ref3.dataId,
            dataId = _ref3$dataId === void 0 ? '' : _ref3$dataId;
        return (datasets[dataId] || {}).fields;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "columns", (0, _reselect.createSelector)(_this.fields, function (fields) {
        return fields.map(function (f) {
          return f.name;
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "colMeta", (0, _reselect.createSelector)([_this.fields, _this.datasets], function (fields) {
        return fields.reduce(function (acc, _ref4) {
          var name = _ref4.name,
              displayName = _ref4.displayName,
              type = _ref4.type,
              filterProps = _ref4.filterProps,
              format = _ref4.format,
              displayFormat = _ref4.displayFormat;
          return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, name, _objectSpread(_objectSpread(_objectSpread({
            name: displayName || name,
            type: type
          }, format ? {
            format: format
          } : {}), displayFormat ? {
            displayFormat: displayFormat
          } : {}), filterProps !== null && filterProps !== void 0 && filterProps.columnStats ? {
            columnStats: filterProps.columnStats
          } : {})));
        }, {});
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "cellSizeCache", (0, _reselect.createSelector)(_this.dataId, _this.datasets, function (dataId, datasets) {
        if (!datasets[dataId]) {
          return {};
        }

        var _datasets$dataId = datasets[dataId],
            fields = _datasets$dataId.fields,
            dataContainer = _datasets$dataId.dataContainer;
        var showCalculate = null;

        if (!_this.datasetCellSizeCache[dataId]) {
          showCalculate = true;
        } else if (_this.datasetCellSizeCache[dataId].fields !== fields || _this.datasetCellSizeCache[dataId].dataContainer !== dataContainer) {
          showCalculate = true;
        }

        if (!showCalculate) {
          return _this.datasetCellSizeCache[dataId].cellSizeCache;
        }

        var cellSizeCache = fields.reduce(function (acc, field, colIdx) {
          return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, field.name, (0, _cellSize.renderedSize)({
            text: {
              dataContainer: dataContainer,
              column: field.displayName
            },
            colIdx: colIdx,
            type: field.type,
            fontSize: _this.props.theme.cellFontSize,
            font: _this.props.theme.fontFamily,
            minCellSize: MIN_STATS_CELL_SIZE
          })));
        }, {}); // save it to cache

        _this.datasetCellSizeCache[dataId] = {
          cellSizeCache: cellSizeCache,
          fields: fields,
          dataContainer: dataContainer
        };
        return cellSizeCache;
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "copyTableColumn", function (column) {
        var _this$props = _this.props,
            _this$props$dataId = _this$props.dataId,
            dataId = _this$props$dataId === void 0 ? '' : _this$props$dataId,
            copyTableColumn = _this$props.copyTableColumn;
        copyTableColumn(dataId, column);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "pinTableColumn", function (column) {
        var _this$props2 = _this.props,
            _this$props2$dataId = _this$props2.dataId,
            dataId = _this$props2$dataId === void 0 ? '' : _this$props2$dataId,
            pinTableColumn = _this$props2.pinTableColumn;
        pinTableColumn(dataId, column);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "sortTableColumn", function (column, mode) {
        var _this$props3 = _this.props,
            _this$props3$dataId = _this$props3.dataId,
            dataId = _this$props3$dataId === void 0 ? '' : _this$props3$dataId,
            sortTableColumn = _this$props3.sortTableColumn;
        sortTableColumn(dataId, column, mode);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setColumnDisplayFormat", function (formats) {
        var _this$props4 = _this.props,
            dataId = _this$props4.dataId,
            setColumnDisplayFormat = _this$props4.setColumnDisplayFormat;
        if (dataId) setColumnDisplayFormat(dataId, formats);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onOpenConfig", function () {
        _this.setState({
          showConfig: true
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onCloseConfig", function () {
        _this.setState({
          showConfig: false
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(DataTableModal, [{
      key: "render",
      value: function render() {
        var _this$props5 = this.props,
            datasets = _this$props5.datasets,
            dataId = _this$props5.dataId,
            showDatasetTable = _this$props5.showDatasetTable,
            _this$props5$showTab = _this$props5.showTab,
            showTab = _this$props5$showTab === void 0 ? true : _this$props5$showTab;

        if (!datasets || !dataId) {
          return null;
        }

        var activeDataset = datasets[dataId];
        var columns = this.columns(this.props);
        var colMeta = this.colMeta(this.props);
        var cellSizeCache = this.cellSizeCache(this.props);
        return /*#__PURE__*/_react["default"].createElement(StyledModal, {
          className: "dataset-modal",
          id: "dataset-modal"
        }, /*#__PURE__*/_react["default"].createElement(_canvas["default"], null), /*#__PURE__*/_react["default"].createElement(TableContainer, null, showTab ? /*#__PURE__*/_react["default"].createElement(DatasetTabs, {
          activeDataset: activeDataset,
          datasets: datasets,
          showDatasetTable: showDatasetTable
        }) : null, /*#__PURE__*/_react["default"].createElement(StyledConfigureButton, {
          className: "display-config-button"
        }, /*#__PURE__*/_react["default"].createElement(_icons.Gear, {
          onClick: this.onOpenConfig
        }), /*#__PURE__*/_react["default"].createElement(_portaled["default"], {
          right: 240,
          top: 20,
          isOpened: this.state.showConfig,
          onClose: this.onCloseConfig
        }, /*#__PURE__*/_react["default"].createElement(DataTableConfig, {
          columns: columns,
          colMeta: colMeta,
          setColumnDisplayFormat: this.setColumnDisplayFormat,
          onClose: this.onCloseConfig
        }))), datasets[dataId] ? /*#__PURE__*/_react["default"].createElement(DataTable, {
          key: dataId,
          dataId: dataId,
          columns: columns,
          colMeta: colMeta,
          cellSizeCache: cellSizeCache,
          dataContainer: activeDataset.dataContainer,
          pinnedColumns: activeDataset.pinnedColumns,
          sortOrder: activeDataset.sortOrder,
          sortColumn: activeDataset.sortColumn,
          copyTableColumn: this.copyTableColumn,
          pinTableColumn: this.pinTableColumn,
          sortTableColumn: this.sortTableColumn,
          setColumnDisplayFormat: this.setColumnDisplayFormat,
          hasStats: false
        }) : null));
      }
    }]);
    return DataTableModal;
  }(_react["default"].Component);

  return (0, _styledComponents.withTheme)(DataTableModal);
}

var _default = DataTableModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tb2RhbHMvZGF0YS10YWJsZS1tb2RhbC50c3giXSwibmFtZXMiOlsiTUlOX1NUQVRTX0NFTExfU0laRSIsImRnU2V0dGluZ3MiLCJzaWRlUGFkZGluZyIsInZlcnRpY2FsUGFkZGluZyIsImhlaWdodCIsIlN0eWxlZE1vZGFsIiwic3R5bGVkIiwiZGl2IiwiRGF0YXNldENhdGFsb2ciLCJEYXRhc2V0TW9kYWxUYWIiLCJwcm9wcyIsImFjdGl2ZSIsIlN0eWxlZENvbmZpZ3VyZUJ1dHRvbiIsIkRhdGFzZXRUYWJzVW5tZW1vaXplZCIsImFjdGl2ZURhdGFzZXQiLCJkYXRhc2V0cyIsInNob3dEYXRhc2V0VGFibGUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJkYXRhc2V0IiwiaWQiLCJEYXRhc2V0VGFicyIsIlJlYWN0IiwibWVtbyIsImRpc3BsYXlOYW1lIiwiRGF0YVRhYmxlTW9kYWxGYWN0b3J5IiwiZGVwcyIsIkRhdGFUYWJsZUZhY3RvcnkiLCJEYXRhVGFibGVDb25maWdGYWN0b3J5IiwiVGFibGVDb250YWluZXIiLCJEYXRhVGFibGUiLCJEYXRhVGFibGVDb25maWciLCJEYXRhVGFibGVNb2RhbCIsInNob3dDb25maWciLCJkYXRhSWQiLCJmaWVsZHMiLCJmIiwibmFtZSIsInJlZHVjZSIsImFjYyIsInR5cGUiLCJmaWx0ZXJQcm9wcyIsImZvcm1hdCIsImRpc3BsYXlGb3JtYXQiLCJjb2x1bW5TdGF0cyIsImRhdGFDb250YWluZXIiLCJzaG93Q2FsY3VsYXRlIiwiZGF0YXNldENlbGxTaXplQ2FjaGUiLCJjZWxsU2l6ZUNhY2hlIiwiZmllbGQiLCJjb2xJZHgiLCJ0ZXh0IiwiY29sdW1uIiwiZm9udFNpemUiLCJ0aGVtZSIsImNlbGxGb250U2l6ZSIsImZvbnQiLCJmb250RmFtaWx5IiwibWluQ2VsbFNpemUiLCJjb3B5VGFibGVDb2x1bW4iLCJwaW5UYWJsZUNvbHVtbiIsIm1vZGUiLCJzb3J0VGFibGVDb2x1bW4iLCJmb3JtYXRzIiwic2V0Q29sdW1uRGlzcGxheUZvcm1hdCIsInNldFN0YXRlIiwic2hvd1RhYiIsImNvbHVtbnMiLCJjb2xNZXRhIiwib25PcGVuQ29uZmlnIiwic3RhdGUiLCJvbkNsb3NlQ29uZmlnIiwicGlubmVkQ29sdW1ucyIsInNvcnRPcmRlciIsInNvcnRDb2x1bW4iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFJQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsbUJBQW1CLEdBQUcsR0FBNUIsQyxDQUVBOztBQUNBLElBQU1DLFVBQVUsR0FBRztBQUNqQkMsRUFBQUEsV0FBVyxFQUFFLE1BREk7QUFFakJDLEVBQUFBLGVBQWUsRUFBRSxNQUZBO0FBR2pCQyxFQUFBQSxNQUFNLEVBQUU7QUFIUyxDQUFuQjs7QUFNQSxJQUFNQyxXQUFXLEdBQUdDLDZCQUFPQyxHQUFWLG9KQUFqQjs7QUFNQSxJQUFNQyxjQUFjLEdBQUdGLDZCQUFPQyxHQUFWLHNJQUVQTixVQUFVLENBQUNFLGVBRkosRUFFdUJGLFVBQVUsQ0FBQ0MsV0FGbEMsQ0FBcEI7O0FBU08sSUFBTU8sZUFBZSxHQUFHSCw2QkFBT0MsR0FBVixxVEFFQyxVQUFBRyxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDQyxNQUFOLEdBQWUsT0FBZixHQUF5QixhQUE5QjtBQUFBLENBRk4sQ0FBckI7Ozs7QUFlUCxJQUFNQyxxQkFBcUIsR0FBR04sNkJBQU9DLEdBQVYsaU9BQTNCOztBQWlCQSxJQUFNTSxxQkFBMkQsR0FBRyxTQUE5REEscUJBQThEO0FBQUEsTUFDbEVDLGFBRGtFLFFBQ2xFQSxhQURrRTtBQUFBLE1BRWxFQyxRQUZrRSxRQUVsRUEsUUFGa0U7QUFBQSxNQUdsRUMsZ0JBSGtFLFFBR2xFQSxnQkFIa0U7QUFBQSxzQkFLbEUsZ0NBQUMsY0FBRDtBQUFnQixJQUFB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RSxVQUFBLE9BQU8sRUFBRUMsT0FKWDtBQUtFLFVBQUEsYUFBYSxFQUFFcEIsYUFMakI7QUFNRSxVQUFBLGFBQWEsRUFBRW5DLGFBQWEsQ0FBQ2dDLGFBTi9CO0FBT0UsVUFBQSxhQUFhLEVBQUVoQyxhQUFhLENBQUMyRCxhQVAvQjtBQVFFLFVBQUEsU0FBUyxFQUFFM0QsYUFBYSxDQUFDNEQsU0FSM0I7QUFTRSxVQUFBLFVBQVUsRUFBRTVELGFBQWEsQ0FBQzZELFVBVDVCO0FBVUUsVUFBQSxlQUFlLEVBQUUsS0FBS2YsZUFWeEI7QUFXRSxVQUFBLGNBQWMsRUFBRSxLQUFLQyxjQVh2QjtBQVlFLFVBQUEsZUFBZSxFQUFFLEtBQUtFLGVBWnhCO0FBYUUsVUFBQSxzQkFBc0IsRUFBRSxLQUFLRSxzQkFiL0I7QUFjRSxVQUFBLFFBQVEsRUFBRTtBQWRaLFVBREQsR0FpQkcsSUF6Q04sQ0FGRixDQURGO0FBZ0REO0FBL0pzRDtBQUFBO0FBQUEsSUFDNUIxQyxrQkFBTXFELFNBRHNCOztBQWlLekQsU0FBTyxpQ0FBVTNDLGNBQVYsQ0FBUDtBQUNEOztlQUVjUCxxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7d2l0aFRoZW1lfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRGF0YXNldExhYmVsIGZyb20gJy4uL2NvbW1vbi9kYXRhc2V0LWxhYmVsJztcbmltcG9ydCBEYXRhVGFibGVGYWN0b3J5IGZyb20gJy4uL2NvbW1vbi9kYXRhLXRhYmxlJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCB7cmVuZGVyZWRTaXplfSBmcm9tICcuLi9jb21tb24vZGF0YS10YWJsZS9jZWxsLXNpemUnO1xuaW1wb3J0IENhbnZhc0hhY2sgZnJvbSAnLi4vY29tbW9uL2RhdGEtdGFibGUvY2FudmFzJztcbmltcG9ydCBLZXBsZXJUYWJsZSwge0RhdGFzZXRzfSBmcm9tICdAa2VwbGVyLmdsL3RhYmxlJztcbmltcG9ydCB7VUlTdGF0ZUFjdGlvbnN9IGZyb20gJ0BrZXBsZXIuZ2wvYWN0aW9ucyc7XG5pbXBvcnQge1VpU3RhdGV9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuaW1wb3J0IHtHZWFyfSBmcm9tICcuLi9jb21tb24vaWNvbnMnO1xuaW1wb3J0IFBvcnRhbGVkIGZyb20gJy4uL2NvbW1vbi9wb3J0YWxlZCc7XG5pbXBvcnQgRGF0YVRhYmxlQ29uZmlnRmFjdG9yeSBmcm9tICcuLi9jb21tb24vZGF0YS10YWJsZS9kaXNwbGF5LWZvcm1hdCc7XG5cbmNvbnN0IE1JTl9TVEFUU19DRUxMX1NJWkUgPSAxMjI7XG5cbi8vIHNpZGVQYWRkaW5nIGNoYW5nZXMgZnJvbSAzOCB0byA2OCwgMzBweCBmb3IgY29uZmlndXJhdGlvbiBidXR0b25cbmNvbnN0IGRnU2V0dGluZ3MgPSB7XG4gIHNpZGVQYWRkaW5nOiAnNjhweCcsXG4gIHZlcnRpY2FsUGFkZGluZzogJzE2cHgnLFxuICBoZWlnaHQ6ICczNnB4J1xufTtcblxuY29uc3QgU3R5bGVkTW9kYWwgPSBzdHlsZWQuZGl2YFxuICBtaW4taGVpZ2h0OiA4NXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgRGF0YXNldENhdGFsb2cgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAke2RnU2V0dGluZ3MudmVydGljYWxQYWRkaW5nfSAke2RnU2V0dGluZ3Muc2lkZVBhZGRpbmd9IDA7XG5gO1xuXG5pbnRlcmZhY2UgRGF0YXNldE1vZGFsVGFiUHJvcHMge1xuICBhY3RpdmU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgRGF0YXNldE1vZGFsVGFiID0gc3R5bGVkLmRpdjxEYXRhc2V0TW9kYWxUYWJQcm9wcz5gXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAke3Byb3BzID0+IChwcm9wcy5hY3RpdmUgPyAnYmxhY2snIDogJ3RyYW5zcGFyZW50Jyl9O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMzVweDtcbiAgbWFyZ2luOiAwIDNweDtcbiAgcGFkZGluZzogMCA1cHg7XG5cbiAgOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZENvbmZpZ3VyZUJ1dHRvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNHB4O1xuICByaWdodDogNDhweDtcbiAgc3ZnIHtcbiAgICBzdHJva2U6IGJsYWNrO1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgRGF0YXNldFRhYnNVbm1lbW9pemVkUHJvcHMge1xuICBhY3RpdmVEYXRhc2V0OiBLZXBsZXJUYWJsZTtcbiAgZGF0YXNldHM6IERhdGFzZXRzO1xuICBzaG93RGF0YXNldFRhYmxlOiAoaWQ6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuY29uc3QgRGF0YXNldFRhYnNVbm1lbW9pemVkOiBSZWFjdC5GQzxEYXRhc2V0VGFic1VubWVtb2l6ZWRQcm9wcz4gPSAoe1xuICBhY3RpdmVEYXRhc2V0LFxuICBkYXRhc2V0cyxcbiAgc2hvd0RhdGFzZXRUYWJsZVxufSkgPT4gKFxuICA8RGF0YXNldENhdGFsb2cgY2xhc3NOYW1lPVwiZGF0YXNldC1tb2RhbC1jYXRhbG9nXCI+XG4gICAge09iamVjdC52YWx1ZXMoZGF0YXNldHMpLm1hcChkYXRhc2V0ID0+IChcbiAgICAgIDxEYXRhc2V0TW9kYWxUYWJcbiAgICAgICAgY2xhc3NOYW1lPVwiZGF0YXNldC1tb2RhbC10YWJcIlxuICAgICAgICBhY3RpdmU9e2RhdGFzZXQgPT09IGFjdGl2ZURhdGFzZXR9XG4gICAgICAgIGtleT17ZGF0YXNldC5pZH1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2hvd0RhdGFzZXRUYWJsZShkYXRhc2V0LmlkKX1cbiAgICAgID5cbiAgICAgICAgPERhdGFzZXRMYWJlbCBkYXRhc2V0PXtkYXRhc2V0fSAvPlxuICAgICAgPC9EYXRhc2V0TW9kYWxUYWI+XG4gICAgKSl9XG4gIDwvRGF0YXNldENhdGFsb2c+XG4pO1xuXG5leHBvcnQgY29uc3QgRGF0YXNldFRhYnMgPSBSZWFjdC5tZW1vKERhdGFzZXRUYWJzVW5tZW1vaXplZCk7XG5cbkRhdGFzZXRUYWJzLmRpc3BsYXlOYW1lID0gJ0RhdGFzZXRUYWJzJztcblxuRGF0YVRhYmxlTW9kYWxGYWN0b3J5LmRlcHMgPSBbRGF0YVRhYmxlRmFjdG9yeSwgRGF0YVRhYmxlQ29uZmlnRmFjdG9yeV07XG5cbmNvbnN0IFRhYmxlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAxO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuYDtcblxuaW50ZXJmYWNlIERhdGFUYWJsZU1vZGFsUHJvcHMge1xuICB0aGVtZTogYW55O1xuICBkYXRhSWQ/OiBzdHJpbmc7XG4gIHNvcnRUYWJsZUNvbHVtbjogKGlkOiBzdHJpbmcsIGNvbHVtbjogc3RyaW5nLCBtb2RlPzogc3RyaW5nKSA9PiB2b2lkO1xuICBwaW5UYWJsZUNvbHVtbjogKGlkOiBzdHJpbmcsIGNvbHVtbjogc3RyaW5nKSA9PiB2b2lkO1xuICBjb3B5VGFibGVDb2x1bW46IChpZDogc3RyaW5nLCBjb2x1bW46IHN0cmluZykgPT4gdm9pZDtcbiAgZGF0YXNldHM6IERhdGFzZXRzO1xuICBzaG93RGF0YXNldFRhYmxlOiAoaWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgc2hvd1RhYj86IGJvb2xlYW47XG4gIHNldENvbHVtbkRpc3BsYXlGb3JtYXQ6IChcbiAgICBkYXRhSWQ6IHN0cmluZyxcbiAgICBmb3JtYXRzOiB7XG4gICAgICBjb2x1bW46IHN0cmluZztcbiAgICAgIGRpc3BsYXlGb3JtYXQ6IHN0cmluZztcbiAgICB9XG4gICkgPT4gdm9pZDtcbiAgdWlTdGF0ZUFjdGlvbnM6IHR5cGVvZiBVSVN0YXRlQWN0aW9ucztcbiAgdWlTdGF0ZTogVWlTdGF0ZTtcbn1cblxuZnVuY3Rpb24gRGF0YVRhYmxlTW9kYWxGYWN0b3J5KFxuICBEYXRhVGFibGU6IFJldHVyblR5cGU8dHlwZW9mIERhdGFUYWJsZUZhY3Rvcnk+LFxuICBEYXRhVGFibGVDb25maWc6IFJldHVyblR5cGU8dHlwZW9mIERhdGFUYWJsZUNvbmZpZ0ZhY3Rvcnk+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPE9taXQ8RGF0YVRhYmxlTW9kYWxQcm9wcywgJ3RoZW1lJz4+IHtcbiAgY2xhc3MgRGF0YVRhYmxlTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RGF0YVRhYmxlTW9kYWxQcm9wcz4ge1xuICAgIHN0YXRlID0ge1xuICAgICAgc2hvd0NvbmZpZzogZmFsc2VcbiAgICB9O1xuXG4gICAgZGF0YXNldENlbGxTaXplQ2FjaGUgPSB7fTtcbiAgICBkYXRhSWQgPSAoe2RhdGFJZCA9ICcnfTogRGF0YVRhYmxlTW9kYWxQcm9wcykgPT4gZGF0YUlkO1xuICAgIGRhdGFzZXRzID0gKHByb3BzOiBEYXRhVGFibGVNb2RhbFByb3BzKSA9PiBwcm9wcy5kYXRhc2V0cztcbiAgICBmaWVsZHMgPSAoe2RhdGFzZXRzLCBkYXRhSWQgPSAnJ306IERhdGFUYWJsZU1vZGFsUHJvcHMpID0+IChkYXRhc2V0c1tkYXRhSWRdIHx8IHt9KS5maWVsZHM7XG4gICAgY29sdW1ucyA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuZmllbGRzLCBmaWVsZHMgPT4gZmllbGRzLm1hcChmID0+IGYubmFtZSkpO1xuICAgIGNvbE1ldGEgPSBjcmVhdGVTZWxlY3RvcihbdGhpcy5maWVsZHMsIHRoaXMuZGF0YXNldHNdLCBmaWVsZHMgPT5cbiAgICAgIGZpZWxkcy5yZWR1Y2UoXG4gICAgICAgIChhY2MsIHtuYW1lLCBkaXNwbGF5TmFtZSwgdHlwZSwgZmlsdGVyUHJvcHMsIGZvcm1hdCwgZGlzcGxheUZvcm1hdH0pID0+ICh7XG4gICAgICAgICAgLi4uYWNjLFxuICAgICAgICAgIFtuYW1lXToge1xuICAgICAgICAgICAgbmFtZTogZGlzcGxheU5hbWUgfHwgbmFtZSxcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAuLi4oZm9ybWF0ID8ge2Zvcm1hdH0gOiB7fSksXG4gICAgICAgICAgICAuLi4oZGlzcGxheUZvcm1hdCA/IHtkaXNwbGF5Rm9ybWF0fSA6IHt9KSxcbiAgICAgICAgICAgIC4uLihmaWx0ZXJQcm9wcz8uY29sdW1uU3RhdHMgPyB7Y29sdW1uU3RhdHM6IGZpbHRlclByb3BzLmNvbHVtblN0YXRzfSA6IHt9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHt9XG4gICAgICApXG4gICAgKTtcblxuICAgIGNlbGxTaXplQ2FjaGUgPSBjcmVhdGVTZWxlY3Rvcih0aGlzLmRhdGFJZCwgdGhpcy5kYXRhc2V0cywgKGRhdGFJZCwgZGF0YXNldHMpID0+IHtcbiAgICAgIGlmICghZGF0YXNldHNbZGF0YUlkXSkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICAgICBjb25zdCB7ZmllbGRzLCBkYXRhQ29udGFpbmVyfSA9IGRhdGFzZXRzW2RhdGFJZF07XG5cbiAgICAgIGxldCBzaG93Q2FsY3VsYXRlOiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG4gICAgICBpZiAoIXRoaXMuZGF0YXNldENlbGxTaXplQ2FjaGVbZGF0YUlkXSkge1xuICAgICAgICBzaG93Q2FsY3VsYXRlID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHRoaXMuZGF0YXNldENlbGxTaXplQ2FjaGVbZGF0YUlkXS5maWVsZHMgIT09IGZpZWxkcyB8fFxuICAgICAgICB0aGlzLmRhdGFzZXRDZWxsU2l6ZUNhY2hlW2RhdGFJZF0uZGF0YUNvbnRhaW5lciAhPT0gZGF0YUNvbnRhaW5lclxuICAgICAgKSB7XG4gICAgICAgIHNob3dDYWxjdWxhdGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNob3dDYWxjdWxhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXNldENlbGxTaXplQ2FjaGVbZGF0YUlkXS5jZWxsU2l6ZUNhY2hlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjZWxsU2l6ZUNhY2hlID0gZmllbGRzLnJlZHVjZShcbiAgICAgICAgKGFjYywgZmllbGQsIGNvbElkeCkgPT4gKHtcbiAgICAgICAgICAuLi5hY2MsXG4gICAgICAgICAgW2ZpZWxkLm5hbWVdOiByZW5kZXJlZFNpemUoe1xuICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICBkYXRhQ29udGFpbmVyLFxuICAgICAgICAgICAgICBjb2x1bW46IGZpZWxkLmRpc3BsYXlOYW1lXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29sSWR4LFxuICAgICAgICAgICAgdHlwZTogZmllbGQudHlwZSxcbiAgICAgICAgICAgIGZvbnRTaXplOiB0aGlzLnByb3BzLnRoZW1lLmNlbGxGb250U2l6ZSxcbiAgICAgICAgICAgIGZvbnQ6IHRoaXMucHJvcHMudGhlbWUuZm9udEZhbWlseSxcbiAgICAgICAgICAgIG1pbkNlbGxTaXplOiBNSU5fU1RBVFNfQ0VMTF9TSVpFXG4gICAgICAgICAgfSlcbiAgICAgICAgfSksXG4gICAgICAgIHt9XG4gICAgICApO1xuICAgICAgLy8gc2F2ZSBpdCB0byBjYWNoZVxuICAgICAgdGhpcy5kYXRhc2V0Q2VsbFNpemVDYWNoZVtkYXRhSWRdID0ge1xuICAgICAgICBjZWxsU2l6ZUNhY2hlLFxuICAgICAgICBmaWVsZHMsXG4gICAgICAgIGRhdGFDb250YWluZXJcbiAgICAgIH07XG4gICAgICByZXR1cm4gY2VsbFNpemVDYWNoZTtcbiAgICB9KTtcblxuICAgIGNvcHlUYWJsZUNvbHVtbiA9IChjb2x1bW46IHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qge2RhdGFJZCA9ICcnLCBjb3B5VGFibGVDb2x1bW59ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvcHlUYWJsZUNvbHVtbihkYXRhSWQsIGNvbHVtbik7XG4gICAgfTtcblxuICAgIHBpblRhYmxlQ29sdW1uID0gKGNvbHVtbjogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCB7ZGF0YUlkID0gJycsIHBpblRhYmxlQ29sdW1ufSA9IHRoaXMucHJvcHM7XG4gICAgICBwaW5UYWJsZUNvbHVtbihkYXRhSWQsIGNvbHVtbik7XG4gICAgfTtcblxuICAgIHNvcnRUYWJsZUNvbHVtbiA9IChjb2x1bW46IHN0cmluZywgbW9kZT86IHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qge2RhdGFJZCA9ICcnLCBzb3J0VGFibGVDb2x1bW59ID0gdGhpcy5wcm9wcztcbiAgICAgIHNvcnRUYWJsZUNvbHVtbihkYXRhSWQsIGNvbHVtbiwgbW9kZSk7XG4gICAgfTtcblxuICAgIHNldENvbHVtbkRpc3BsYXlGb3JtYXQgPSBmb3JtYXRzID0+IHtcbiAgICAgIGNvbnN0IHtkYXRhSWQsIHNldENvbHVtbkRpc3BsYXlGb3JtYXR9ID0gdGhpcy5wcm9wcztcbiAgICAgIGlmIChkYXRhSWQpIHNldENvbHVtbkRpc3BsYXlGb3JtYXQoZGF0YUlkLCBmb3JtYXRzKTtcbiAgICB9O1xuXG4gICAgb25PcGVuQ29uZmlnID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0NvbmZpZzogdHJ1ZX0pO1xuICAgIH07XG5cbiAgICBvbkNsb3NlQ29uZmlnID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0NvbmZpZzogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2RhdGFzZXRzLCBkYXRhSWQsIHNob3dEYXRhc2V0VGFibGUsIHNob3dUYWIgPSB0cnVlfSA9IHRoaXMucHJvcHM7XG4gICAgICBpZiAoIWRhdGFzZXRzIHx8ICFkYXRhSWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBjb25zdCBhY3RpdmVEYXRhc2V0ID0gZGF0YXNldHNbZGF0YUlkXTtcbiAgICAgIGNvbnN0IGNvbHVtbnMgPSB0aGlzLmNvbHVtbnModGhpcy5wcm9wcyk7XG4gICAgICBjb25zdCBjb2xNZXRhID0gdGhpcy5jb2xNZXRhKHRoaXMucHJvcHMpO1xuICAgICAgY29uc3QgY2VsbFNpemVDYWNoZSA9IHRoaXMuY2VsbFNpemVDYWNoZSh0aGlzLnByb3BzKTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlZE1vZGFsIGNsYXNzTmFtZT1cImRhdGFzZXQtbW9kYWxcIiBpZD1cImRhdGFzZXQtbW9kYWxcIj5cbiAgICAgICAgICA8Q2FudmFzSGFjayAvPlxuICAgICAgICAgIDxUYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgICAgIHtzaG93VGFiID8gKFxuICAgICAgICAgICAgICA8RGF0YXNldFRhYnNcbiAgICAgICAgICAgICAgICBhY3RpdmVEYXRhc2V0PXthY3RpdmVEYXRhc2V0fVxuICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgICBzaG93RGF0YXNldFRhYmxlPXtzaG93RGF0YXNldFRhYmxlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8U3R5bGVkQ29uZmlndXJlQnV0dG9uIGNsYXNzTmFtZT1cImRpc3BsYXktY29uZmlnLWJ1dHRvblwiPlxuICAgICAgICAgICAgICA8R2VhciBvbkNsaWNrPXt0aGlzLm9uT3BlbkNvbmZpZ30gLz5cbiAgICAgICAgICAgICAgPFBvcnRhbGVkXG4gICAgICAgICAgICAgICAgcmlnaHQ9ezI0MH1cbiAgICAgICAgICAgICAgICB0b3A9ezIwfVxuICAgICAgICAgICAgICAgIGlzT3BlbmVkPXt0aGlzLnN0YXRlLnNob3dDb25maWd9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5vbkNsb3NlQ29uZmlnfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPERhdGFUYWJsZUNvbmZpZ1xuICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgICAgICAgIGNvbE1ldGE9e2NvbE1ldGF9XG4gICAgICAgICAgICAgICAgICBzZXRDb2x1bW5EaXNwbGF5Rm9ybWF0PXt0aGlzLnNldENvbHVtbkRpc3BsYXlGb3JtYXR9XG4gICAgICAgICAgICAgICAgICBvbkNsb3NlPXt0aGlzLm9uQ2xvc2VDb25maWd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Qb3J0YWxlZD5cbiAgICAgICAgICAgIDwvU3R5bGVkQ29uZmlndXJlQnV0dG9uPlxuICAgICAgICAgICAge2RhdGFzZXRzW2RhdGFJZF0gPyAoXG4gICAgICAgICAgICAgIDxEYXRhVGFibGVcbiAgICAgICAgICAgICAgICBrZXk9e2RhdGFJZH1cbiAgICAgICAgICAgICAgICBkYXRhSWQ9e2RhdGFJZH1cbiAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgIGNvbE1ldGE9e2NvbE1ldGF9XG4gICAgICAgICAgICAgICAgY2VsbFNpemVDYWNoZT17Y2VsbFNpemVDYWNoZX1cbiAgICAgICAgICAgICAgICBkYXRhQ29udGFpbmVyPXthY3RpdmVEYXRhc2V0LmRhdGFDb250YWluZXJ9XG4gICAgICAgICAgICAgICAgcGlubmVkQ29sdW1ucz17YWN0aXZlRGF0YXNldC5waW5uZWRDb2x1bW5zfVxuICAgICAgICAgICAgICAgIHNvcnRPcmRlcj17YWN0aXZlRGF0YXNldC5zb3J0T3JkZXJ9XG4gICAgICAgICAgICAgICAgc29ydENvbHVtbj17YWN0aXZlRGF0YXNldC5zb3J0Q29sdW1ufVxuICAgICAgICAgICAgICAgIGNvcHlUYWJsZUNvbHVtbj17dGhpcy5jb3B5VGFibGVDb2x1bW59XG4gICAgICAgICAgICAgICAgcGluVGFibGVDb2x1bW49e3RoaXMucGluVGFibGVDb2x1bW59XG4gICAgICAgICAgICAgICAgc29ydFRhYmxlQ29sdW1uPXt0aGlzLnNvcnRUYWJsZUNvbHVtbn1cbiAgICAgICAgICAgICAgICBzZXRDb2x1bW5EaXNwbGF5Rm9ybWF0PXt0aGlzLnNldENvbHVtbkRpc3BsYXlGb3JtYXR9XG4gICAgICAgICAgICAgICAgaGFzU3RhdHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgPC9TdHlsZWRNb2RhbD5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiB3aXRoVGhlbWUoRGF0YVRhYmxlTW9kYWwpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhVGFibGVNb2RhbEZhY3Rvcnk7XG4iXX0=