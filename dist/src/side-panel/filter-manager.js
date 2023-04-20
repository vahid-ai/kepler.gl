"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _styledComponents = require("../common/styled-components");

var _sourceDataCatalog = _interopRequireDefault(require("./common/source-data-catalog"));

var _filterPanel = _interopRequireDefault(require("./filter-panel/filter-panel"));

var _constants = require("@kepler.gl/constants");

var _utils = require("@kepler.gl/utils");

var _panelViewListToggle = _interopRequireDefault(require("./panel-view-list-toggle"));

var _panelTitle = _interopRequireDefault(require("./panel-title"));

var _addFilterButton = _interopRequireDefault(require("./filter-panel/add-filter-button"));

var _datasetSection = _interopRequireDefault(require("./layer-panel/dataset-section"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

FilterManagerFactory.deps = [_datasetSection["default"], _filterPanel["default"], _panelTitle["default"], _addFilterButton["default"], _panelViewListToggle["default"], _sourceDataCatalog["default"]];

function FilterManagerFactory(DatasetSection, FilterPanel, PanelTitle, AddFilterButton, PanelViewListToggle, SourceDataCatalog) {
  var FilterList = function FilterList(_ref) {
    var filtersByIndex = _ref.filtersByIndex,
        filters = _ref.filters,
        datasets = _ref.datasets,
        layers = _ref.layers,
        isAnyFilterAnimating = _ref.isAnyFilterAnimating,
        visStateActions = _ref.visStateActions;
    var _removeFilter = visStateActions.removeFilter,
        setFilter = visStateActions.setFilter,
        toggleFilterAnimation = visStateActions.toggleFilterAnimation,
        _toggleFilterFeature = visStateActions.toggleFilterFeature,
        setFilterView = visStateActions.setFilterView;
    var filterPanelCallbacks = (0, _react.useMemo)(function () {
      return filtersByIndex.reduce(function (accu, _ref2) {
        var filter = _ref2.filter,
            idx = _ref2.idx;
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, filter.id, {
          removeFilter: function removeFilter() {
            return _removeFilter(idx);
          },
          toggleFilterView: function toggleFilterView() {
            return setFilterView(idx, (0, _utils.isSideFilter)(filter) ? _constants.FILTER_VIEW_TYPES.enlarged : _constants.FILTER_VIEW_TYPES.side);
          },
          toggleAnimation: function toggleAnimation() {
            return toggleFilterAnimation(idx);
          },
          toggleFilterFeature: function toggleFilterFeature() {
            return _toggleFilterFeature(idx);
          }
        }));
      }, {});
    }, [filtersByIndex, _removeFilter, setFilterView, toggleFilterAnimation, _toggleFilterFeature]);
    return /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, (0, _toConsumableArray2["default"])(filtersByIndex).reverse().map(function (_ref3) {
      var filter = _ref3.filter,
          idx = _ref3.idx;
      return /*#__PURE__*/_react["default"].createElement(FilterPanel, {
        key: "".concat(filter.id, "-").concat(idx),
        idx: idx,
        filters: filters,
        filter: filter,
        datasets: datasets,
        layers: layers,
        isAnyFilterAnimating: isAnyFilterAnimating,
        removeFilter: filterPanelCallbacks[filter.id].removeFilter,
        enlargeFilter: filterPanelCallbacks[filter.id].toggleFilterView,
        toggleAnimation: filterPanelCallbacks[filter.id].toggleAnimation,
        toggleFilterFeature: filterPanelCallbacks[filter.id].toggleFilterFeature,
        setFilter: setFilter
      });
    }));
  };

  var DatasetFilterSection = function DatasetFilterSection(_ref4) {
    var filtersByIndex = _ref4.filtersByIndex,
        filters = _ref4.filters,
        dataset = _ref4.dataset,
        datasets = _ref4.datasets,
        layers = _ref4.layers,
        isAnyFilterAnimating = _ref4.isAnyFilterAnimating,
        visStateActions = _ref4.visStateActions,
        showDatasetTable = _ref4.showDatasetTable,
        updateTableColor = _ref4.updateTableColor,
        removeDataset = _ref4.removeDataset,
        showDeleteDataset = _ref4.showDeleteDataset;
    var datasetCatalog = (0, _react.useMemo)(function () {
      return (0, _defineProperty2["default"])({}, dataset.id, dataset);
    }, [dataset]);
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(SourceDataCatalog, {
      datasets: datasetCatalog,
      showDatasetTable: showDatasetTable,
      updateTableColor: updateTableColor,
      removeDataset: removeDataset,
      showDeleteDataset: showDeleteDataset
    }), /*#__PURE__*/_react["default"].createElement(FilterList, {
      filtersByIndex: filtersByIndex,
      filters: filters,
      datasets: datasets,
      layers: layers,
      isAnyFilterAnimating: isAnyFilterAnimating,
      visStateActions: visStateActions
    }));
  };

  var FilterManager = function FilterManager(_ref6) {
    var _ref6$filters = _ref6.filters,
        filters = _ref6$filters === void 0 ? [] : _ref6$filters,
        datasets = _ref6.datasets,
        layers = _ref6.layers,
        showDatasetTable = _ref6.showDatasetTable,
        updateTableColor = _ref6.updateTableColor,
        removeDataset = _ref6.removeDataset,
        showAddDataModal = _ref6.showAddDataModal,
        panelMetadata = _ref6.panelMetadata,
        panelListView = _ref6.panelListView,
        visStateActions = _ref6.visStateActions,
        uiStateActions = _ref6.uiStateActions;
    var addFilter = visStateActions.addFilter;
    var togglePanelListView = uiStateActions.togglePanelListView;
    var isAnyFilterAnimating = filters.some(function (f) {
      return f.isAnimating;
    });
    var onClickAddFilter = (0, _react.useCallback)(function (dataset) {
      return addFilter(dataset);
    }, [addFilter]);
    var isSortByDatasetMode = panelListView === _constants.PANEL_VIEW_TOGGLES.byDataset;
    var filtersByIndex = (0, _react.useMemo)(function () {
      return filters.map(function (f, idx) {
        return {
          filter: f,
          idx: idx
        };
      });
    }, [filters]);
    var filtersByDatasets = (0, _react.useMemo)(function () {
      return Object.keys(datasets).reduce(function (accu, dataId) {
        return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, dataId, filtersByIndex.filter(function (fidx) {
          return fidx.filter.dataId && fidx.filter.dataId[0] === dataId;
        })));
      }, {});
    }, [datasets, filtersByIndex]);

    var _TogglePanelListView = (0, _react.useCallback)(function (listView) {
      togglePanelListView({
        panelId: 'filter',
        listView: listView
      });
    }, [togglePanelListView]);

    var intl = (0, _reactIntl.useIntl)();
    var filterListProps = {
      datasets: datasets,
      filters: filters,
      layers: layers,
      isAnyFilterAnimating: isAnyFilterAnimating,
      visStateActions: visStateActions
    };
    var sourceDataCatalogProps = {
      showDatasetTable: showDatasetTable,
      updateTableColor: updateTableColor,
      removeDataset: removeDataset,
      showDeleteDataset: true
    };
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "filter-manager"
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(PanelViewListToggle, {
      togglePanelListView: _TogglePanelListView,
      mode: panelListView
    })), /*#__PURE__*/_react["default"].createElement(DatasetSection, (0, _extends2["default"])({
      datasets: datasets
    }, sourceDataCatalogProps, {
      showDatasetList: !isSortByDatasetMode,
      showAddDataModal: showAddDataModal
    })), /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelDivider, null), /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(PanelTitle, {
      className: "filter-manager-title",
      title: intl.formatMessage({
        id: panelMetadata.label
      })
    }, /*#__PURE__*/_react["default"].createElement(AddFilterButton, {
      datasets: datasets,
      onAdd: onClickAddFilter
    }))), /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, isSortByDatasetMode ? Object.keys(filtersByDatasets).map(function (dataId) {
      return /*#__PURE__*/_react["default"].createElement(DatasetFilterSection, (0, _extends2["default"])({
        key: dataId,
        filtersByIndex: filtersByDatasets[dataId],
        dataset: datasets[dataId]
      }, filterListProps, sourceDataCatalogProps));
    }) : /*#__PURE__*/_react["default"].createElement(FilterList, (0, _extends2["default"])({
      filtersByIndex: filtersByIndex
    }, filterListProps))));
  };

  return FilterManager;
}

var _default = FilterManagerFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2ZpbHRlci1tYW5hZ2VyLnRzeCJdLCJuYW1lcyI6WyJGaWx0ZXJNYW5hZ2VyRmFjdG9yeSIsImRlcHMiLCJEYXRhc2V0U2VjdGlvbkZhY3RvcnkiLCJGaWx0ZXJQYW5lbEZhY3RvcnkiLCJQYW5lbFRpdGxlRmFjdG9yeSIsIkFkZEZpbHRlckJ1dHRvbkZhY3RvcnkiLCJQYW5lbFZpZXdMaXN0VG9nZ2xlRmFjdG9yeSIsIlNvdXJjZURhdGFDYXRhbG9nRmFjdG9yeSIsIkRhdGFzZXRTZWN0aW9uIiwiRmlsdGVyUGFuZWwiLCJQYW5lbFRpdGxlIiwiQWRkRmlsdGVyQnV0dG9uIiwiUGFuZWxWaWV3TGlzdFRvZ2dsZSIsIlNvdXJjZURhdGFDYXRhbG9nIiwiRmlsdGVyTGlzdCIsImZpbHRlcnNCeUluZGV4IiwiZmlsdGVycyIsImRhdGFzZXRzIiwibGF5ZXJzIiwiaXNBbnlGaWx0ZXJBbmltYXRpbmciLCJ2aXNTdGF0ZUFjdGlvbnMiLCJyZW1vdmVGaWx0ZXIiLCJzZXRGaWx0ZXIiLCJ0b2dnbGVGaWx0ZXJBbmltYXRpb24iLCJ0b2dnbGVGaWx0ZXJGZWF0dXJlIiwic2V0RmlsdGVyVmlldyIsImZpbHRlclBhbmVsQ2FsbGJhY2tzIiwicmVkdWNlIiwiYWNjdSIsImZpbHRlciIsImlkeCIsImlkIiwidG9nZ2xlRmlsdGVyVmlldyIsIkZJTFRFUl9WSUVXX1RZUEVTIiwiZW5sYXJnZWQiLCJzaWRlIiwidG9nZ2xlQW5pbWF0aW9uIiwicmV2ZXJzZSIsIm1hcCIsIkRhdGFzZXRGaWx0ZXJTZWN0aW9uIiwiZGF0YXNldCIsInNob3dEYXRhc2V0VGFibGUiLCJ1cGRhdGVUYWJsZUNvbG9yIiwicmVtb3ZlRGF0YXNldCIsInNob3dEZWxldGVEYXRhc2V0IiwiZGF0YXNldENhdGFsb2ciLCJGaWx0ZXJNYW5hZ2VyIiwic2hvd0FkZERhdGFNb2RhbCIsInBhbmVsTWV0YWRhdGEiLCJwYW5lbExpc3RWaWV3IiwidWlTdGF0ZUFjdGlvbnMiLCJhZGRGaWx0ZXIiLCJ0b2dnbGVQYW5lbExpc3RWaWV3Iiwic29tZSIsImYiLCJpc0FuaW1hdGluZyIsIm9uQ2xpY2tBZGRGaWx0ZXIiLCJpc1NvcnRCeURhdGFzZXRNb2RlIiwiUEFORUxfVklFV19UT0dHTEVTIiwiYnlEYXRhc2V0IiwiZmlsdGVyc0J5RGF0YXNldHMiLCJPYmplY3QiLCJrZXlzIiwiZGF0YUlkIiwiZmlkeCIsIl9Ub2dnbGVQYW5lbExpc3RWaWV3IiwibGlzdFZpZXciLCJwYW5lbElkIiwiaW50bCIsImZpbHRlckxpc3RQcm9wcyIsInNvdXJjZURhdGFDYXRhbG9nUHJvcHMiLCJmb3JtYXRNZXNzYWdlIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUlBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUE4QkFBLG9CQUFvQixDQUFDQyxJQUFyQixHQUE0QixDQUMxQkMsMEJBRDBCLEVBRTFCQyx1QkFGMEIsRUFHMUJDLHNCQUgwQixFQUkxQkMsMkJBSjBCLEVBSzFCQywrQkFMMEIsRUFNMUJDLDZCQU4wQixDQUE1Qjs7QUFTQSxTQUFTUCxvQkFBVCxDQUNFUSxjQURGLEVBRUVDLFdBRkYsRUFHRUMsVUFIRixFQUlFQyxlQUpGLEVBS0VDLG1CQUxGLEVBTUVDLGlCQU5GLEVBT0U7QUFDQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQU9JO0FBQUEsUUFOckJDLGNBTXFCLFFBTnJCQSxjQU1xQjtBQUFBLFFBTHJCQyxPQUtxQixRQUxyQkEsT0FLcUI7QUFBQSxRQUpyQkMsUUFJcUIsUUFKckJBLFFBSXFCO0FBQUEsUUFIckJDLE1BR3FCLFFBSHJCQSxNQUdxQjtBQUFBLFFBRnJCQyxvQkFFcUIsUUFGckJBLG9CQUVxQjtBQUFBLFFBRHJCQyxlQUNxQixRQURyQkEsZUFDcUI7QUFBQSxRQUVuQkMsYUFGbUIsR0FPakJELGVBUGlCLENBRW5C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O0FBSnBCLE9BSkYsZUFVRSxnQ0FBQyxrQ0FBRCxPQVZGLGVBV0UsZ0NBQUMsa0NBQUQscUJBQ0UsZ0NBQUMsVUFBRDtBQUNFLE1BQUEsU0FBUyxFQUFDLHNCQURaO0FBRUUsTUFBQSxLQUFLLEVBQUVxQixJQUFJLENBQUNHLGFBQUwsQ0FBbUI7QUFBQ3hDLFFBQUFBLEVBQUUsRUFBRWlCLGFBQWEsQ0FBQ3dCO0FBQW5CLE9BQW5CO0FBRlQsb0JBSUUsZ0NBQUMsZUFBRDtBQUFpQixNQUFBLFFBQVEsRUFBRXZELFFBQTNCO0FBQXFDLE1BQUEsS0FBSyxFQUFFdUM7QUFBNUMsTUFKRixDQURGLENBWEYsZUFtQkUsZ0NBQUMsa0NBQUQsUUFDR0MsbUJBQW1CLEdBQ2xCSSxNQUFNLENBQUNDLElBQVAsQ0FBWUYsaUJBQVosRUFBK0J0QixHQUEvQixDQUFtQyxVQUFBeUIsTUFBTTtBQUFBLDBCQUN2QyxnQ0FBQyxvQkFBRDtBQUNFLFFBQUEsR0FBRyxFQUFFQSxNQURQO0FBRUUsUUFBQSxjQUFjLEVBQUVILGlCQUFpQixDQUFDRyxNQUFELENBRm5DO0FBR0UsUUFBQSxPQUFPLEVBQUU5QyxRQUFRLENBQUM4QyxNQUFEO0FBSG5CLFNBSU1NLGVBSk4sRUFLTUMsc0JBTE4sRUFEdUM7QUFBQSxLQUF6QyxDQURrQixnQkFXbEIsZ0NBQUMsVUFBRDtBQUFZLE1BQUEsY0FBYyxFQUFFdkQ7QUFBNUIsT0FBZ0RzRCxlQUFoRCxFQVpKLENBbkJGLENBREY7QUFxQ0QsR0FwR0Q7O0FBc0dBLFNBQU92QixhQUFQO0FBQ0Q7O2VBRWM5QyxvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VNZW1vfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZUludGx9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHtTaWRlUGFuZWxEaXZpZGVyLCBTaWRlUGFuZWxTZWN0aW9ufSBmcm9tICcuLi9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFNvdXJjZURhdGFDYXRhbG9nRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9zb3VyY2UtZGF0YS1jYXRhbG9nJztcbmltcG9ydCBGaWx0ZXJQYW5lbEZhY3RvcnkgZnJvbSAnLi9maWx0ZXItcGFuZWwvZmlsdGVyLXBhbmVsJztcbmltcG9ydCB7RklMVEVSX1ZJRVdfVFlQRVMsIFBBTkVMX1ZJRVdfVE9HR0xFU30gZnJvbSAnQGtlcGxlci5nbC9jb25zdGFudHMnO1xuaW1wb3J0IHtGaWx0ZXJ9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuaW1wb3J0IHtMYXllcn0gZnJvbSAnQGtlcGxlci5nbC9sYXllcnMnO1xuaW1wb3J0IHtpc1NpZGVGaWx0ZXJ9IGZyb20gJ0BrZXBsZXIuZ2wvdXRpbHMnO1xuaW1wb3J0IHtWaXNTdGF0ZUFjdGlvbnMsIEFjdGlvbkhhbmRsZXIsIFVJU3RhdGVBY3Rpb25zfSBmcm9tICdAa2VwbGVyLmdsL2FjdGlvbnMnO1xuaW1wb3J0IHtEYXRhc2V0c30gZnJvbSAnQGtlcGxlci5nbC90YWJsZSc7XG5cbmltcG9ydCBQYW5lbFZpZXdMaXN0VG9nZ2xlRmFjdG9yeSBmcm9tICcuL3BhbmVsLXZpZXctbGlzdC10b2dnbGUnO1xuaW1wb3J0IFBhbmVsVGl0bGVGYWN0b3J5IGZyb20gJy4vcGFuZWwtdGl0bGUnO1xuaW1wb3J0IEFkZEZpbHRlckJ1dHRvbkZhY3RvcnkgZnJvbSAnLi9maWx0ZXItcGFuZWwvYWRkLWZpbHRlci1idXR0b24nO1xuaW1wb3J0IERhdGFzZXRTZWN0aW9uRmFjdG9yeSBmcm9tICcuL2xheWVyLXBhbmVsL2RhdGFzZXQtc2VjdGlvbic7XG5pbXBvcnQge1BhbmVsTWV0YX0gZnJvbSAnLi9jb21tb24vdHlwZXMnO1xuXG50eXBlIEZpbHRlck1hbmFnZXJQcm9wcyA9IHtcbiAgZmlsdGVyczogRmlsdGVyW107XG4gIGRhdGFzZXRzOiBEYXRhc2V0cztcbiAgbGF5ZXJzOiBMYXllcltdO1xuICBzaG93RGF0YXNldFRhYmxlOiBBY3Rpb25IYW5kbGVyPHR5cGVvZiBWaXNTdGF0ZUFjdGlvbnMuc2hvd0RhdGFzZXRUYWJsZT47XG4gIHVwZGF0ZVRhYmxlQ29sb3I6IEFjdGlvbkhhbmRsZXI8dHlwZW9mIFZpc1N0YXRlQWN0aW9ucy51cGRhdGVUYWJsZUNvbG9yPjtcbiAgcmVtb3ZlRGF0YXNldDogQWN0aW9uSGFuZGxlcjx0eXBlb2YgVmlzU3RhdGVBY3Rpb25zLnJlbW92ZURhdGFzZXQ+O1xuICBzaG93QWRkRGF0YU1vZGFsOiAoKSA9PiB2b2lkO1xuXG4gIHBhbmVsTWV0YWRhdGE6IFBhbmVsTWV0YTtcbiAgcGFuZWxMaXN0Vmlldzogc3RyaW5nO1xuICB2aXNTdGF0ZUFjdGlvbnM6IHR5cGVvZiBWaXNTdGF0ZUFjdGlvbnM7XG4gIHVpU3RhdGVBY3Rpb25zOiB0eXBlb2YgVUlTdGF0ZUFjdGlvbnM7XG59O1xuXG50eXBlIEZpbHRlckxpc3RQcm9wcyA9IHtcbiAgZmlsdGVyczogRmlsdGVyW107XG4gIGRhdGFzZXRzOiBEYXRhc2V0cztcbiAgbGF5ZXJzOiBMYXllcltdO1xuICBmaWx0ZXJzQnlJbmRleDoge1xuICAgIGZpbHRlcjogRmlsdGVyO1xuICAgIGlkeDogbnVtYmVyO1xuICB9W107XG4gIGlzQW55RmlsdGVyQW5pbWF0aW5nOiBib29sZWFuO1xuICB2aXNTdGF0ZUFjdGlvbnM6IHR5cGVvZiBWaXNTdGF0ZUFjdGlvbnM7XG59O1xuXG5GaWx0ZXJNYW5hZ2VyRmFjdG9yeS5kZXBzID0gW1xuICBEYXRhc2V0U2VjdGlvbkZhY3RvcnksXG4gIEZpbHRlclBhbmVsRmFjdG9yeSxcbiAgUGFuZWxUaXRsZUZhY3RvcnksXG4gIEFkZEZpbHRlckJ1dHRvbkZhY3RvcnksXG4gIFBhbmVsVmlld0xpc3RUb2dnbGVGYWN0b3J5LFxuICBTb3VyY2VEYXRhQ2F0YWxvZ0ZhY3Rvcnlcbl07XG5cbmZ1bmN0aW9uIEZpbHRlck1hbmFnZXJGYWN0b3J5KFxuICBEYXRhc2V0U2VjdGlvbjogUmV0dXJuVHlwZTx0eXBlb2YgRGF0YXNldFNlY3Rpb25GYWN0b3J5PixcbiAgRmlsdGVyUGFuZWw6IFJldHVyblR5cGU8dHlwZW9mIEZpbHRlclBhbmVsRmFjdG9yeT4sXG4gIFBhbmVsVGl0bGU6IFJldHVyblR5cGU8dHlwZW9mIFBhbmVsVGl0bGVGYWN0b3J5PixcbiAgQWRkRmlsdGVyQnV0dG9uOiBSZXR1cm5UeXBlPHR5cGVvZiBBZGRGaWx0ZXJCdXR0b25GYWN0b3J5PixcbiAgUGFuZWxWaWV3TGlzdFRvZ2dsZTogUmV0dXJuVHlwZTx0eXBlb2YgUGFuZWxWaWV3TGlzdFRvZ2dsZUZhY3Rvcnk+LFxuICBTb3VyY2VEYXRhQ2F0YWxvZzogUmV0dXJuVHlwZTx0eXBlb2YgU291cmNlRGF0YUNhdGFsb2dGYWN0b3J5PlxuKSB7XG4gIGNvbnN0IEZpbHRlckxpc3QgPSAoe1xuICAgIGZpbHRlcnNCeUluZGV4LFxuICAgIGZpbHRlcnMsXG4gICAgZGF0YXNldHMsXG4gICAgbGF5ZXJzLFxuICAgIGlzQW55RmlsdGVyQW5pbWF0aW5nLFxuICAgIHZpc1N0YXRlQWN0aW9uc1xuICB9OiBGaWx0ZXJMaXN0UHJvcHMpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICByZW1vdmVGaWx0ZXIsXG4gICAgICBzZXRGaWx0ZXIsXG4gICAgICB0b2dnbGVGaWx0ZXJBbmltYXRpb24sXG4gICAgICB0b2dnbGVGaWx0ZXJGZWF0dXJlLFxuICAgICAgc2V0RmlsdGVyVmlld1xuICAgIH0gPSB2aXNTdGF0ZUFjdGlvbnM7XG5cbiAgICBjb25zdCBmaWx0ZXJQYW5lbENhbGxiYWNrcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgcmV0dXJuIGZpbHRlcnNCeUluZGV4LnJlZHVjZShcbiAgICAgICAgKGFjY3UsIHtmaWx0ZXIsIGlkeH0pID0+ICh7XG4gICAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgICBbZmlsdGVyLmlkXToge1xuICAgICAgICAgICAgcmVtb3ZlRmlsdGVyOiAoKSA9PiByZW1vdmVGaWx0ZXIoaWR4KSxcbiAgICAgICAgICAgIHRvZ2dsZUZpbHRlclZpZXc6ICgpID0+XG4gICAgICAgICAgICAgIHNldEZpbHRlclZpZXcoXG4gICAgICAgICAgICAgICAgaWR4LFxuICAgICAgICAgICAgICAgIGlzU2lkZUZpbHRlcihmaWx0ZXIpID8gRklMVEVSX1ZJRVdfVFlQRVMuZW5sYXJnZWQgOiBGSUxURVJfVklFV19UWVBFUy5zaWRlXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB0b2dnbGVBbmltYXRpb246ICgpID0+IHRvZ2dsZUZpbHRlckFuaW1hdGlvbihpZHgpLFxuICAgICAgICAgICAgdG9nZ2xlRmlsdGVyRmVhdHVyZTogKCkgPT4gdG9nZ2xlRmlsdGVyRmVhdHVyZShpZHgpXG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAge31cbiAgICAgICk7XG4gICAgfSwgW2ZpbHRlcnNCeUluZGV4LCByZW1vdmVGaWx0ZXIsIHNldEZpbHRlclZpZXcsIHRvZ2dsZUZpbHRlckFuaW1hdGlvbiwgdG9nZ2xlRmlsdGVyRmVhdHVyZV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICB7Wy4uLmZpbHRlcnNCeUluZGV4XS5yZXZlcnNlKCkubWFwKCh7ZmlsdGVyLCBpZHh9KSA9PiAoXG4gICAgICAgICAgPEZpbHRlclBhbmVsXG4gICAgICAgICAgICBrZXk9e2Ake2ZpbHRlci5pZH0tJHtpZHh9YH1cbiAgICAgICAgICAgIGlkeD17aWR4fVxuICAgICAgICAgICAgZmlsdGVycz17ZmlsdGVyc31cbiAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxuICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XG4gICAgICAgICAgICBpc0FueUZpbHRlckFuaW1hdGluZz17aXNBbnlGaWx0ZXJBbmltYXRpbmd9XG4gICAgICAgICAgICByZW1vdmVGaWx0ZXI9e2ZpbHRlclBhbmVsQ2FsbGJhY2tzW2ZpbHRlci5pZF0ucmVtb3ZlRmlsdGVyfVxuICAgICAgICAgICAgZW5sYXJnZUZpbHRlcj17ZmlsdGVyUGFuZWxDYWxsYmFja3NbZmlsdGVyLmlkXS50b2dnbGVGaWx0ZXJWaWV3fVxuICAgICAgICAgICAgdG9nZ2xlQW5pbWF0aW9uPXtmaWx0ZXJQYW5lbENhbGxiYWNrc1tmaWx0ZXIuaWRdLnRvZ2dsZUFuaW1hdGlvbn1cbiAgICAgICAgICAgIHRvZ2dsZUZpbHRlckZlYXR1cmU9e2ZpbHRlclBhbmVsQ2FsbGJhY2tzW2ZpbHRlci5pZF0udG9nZ2xlRmlsdGVyRmVhdHVyZX1cbiAgICAgICAgICAgIHNldEZpbHRlcj17c2V0RmlsdGVyfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgRGF0YXNldEZpbHRlclNlY3Rpb24gPSAoe1xuICAgIGZpbHRlcnNCeUluZGV4LFxuICAgIGZpbHRlcnMsXG4gICAgZGF0YXNldCxcbiAgICBkYXRhc2V0cyxcbiAgICBsYXllcnMsXG4gICAgaXNBbnlGaWx0ZXJBbmltYXRpbmcsXG4gICAgdmlzU3RhdGVBY3Rpb25zLFxuICAgIHNob3dEYXRhc2V0VGFibGUsXG4gICAgdXBkYXRlVGFibGVDb2xvcixcbiAgICByZW1vdmVEYXRhc2V0LFxuICAgIHNob3dEZWxldGVEYXRhc2V0XG4gIH0pID0+IHtcbiAgICBjb25zdCBkYXRhc2V0Q2F0YWxvZyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgcmV0dXJuIHtbZGF0YXNldC5pZF06IGRhdGFzZXR9O1xuICAgIH0sIFtkYXRhc2V0XSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPFNvdXJjZURhdGFDYXRhbG9nXG4gICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRDYXRhbG9nfVxuICAgICAgICAgIHNob3dEYXRhc2V0VGFibGU9e3Nob3dEYXRhc2V0VGFibGV9XG4gICAgICAgICAgdXBkYXRlVGFibGVDb2xvcj17dXBkYXRlVGFibGVDb2xvcn1cbiAgICAgICAgICByZW1vdmVEYXRhc2V0PXtyZW1vdmVEYXRhc2V0fVxuICAgICAgICAgIHNob3dEZWxldGVEYXRhc2V0PXtzaG93RGVsZXRlRGF0YXNldH1cbiAgICAgICAgLz5cbiAgICAgICAgPEZpbHRlckxpc3RcbiAgICAgICAgICBmaWx0ZXJzQnlJbmRleD17ZmlsdGVyc0J5SW5kZXh9XG4gICAgICAgICAgZmlsdGVycz17ZmlsdGVyc31cbiAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XG4gICAgICAgICAgaXNBbnlGaWx0ZXJBbmltYXRpbmc9e2lzQW55RmlsdGVyQW5pbWF0aW5nfVxuICAgICAgICAgIHZpc1N0YXRlQWN0aW9ucz17dmlzU3RhdGVBY3Rpb25zfVxuICAgICAgICAvPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBGaWx0ZXJNYW5hZ2VyOiBSZWFjdC5GQzxGaWx0ZXJNYW5hZ2VyUHJvcHM+ID0gKHtcbiAgICBmaWx0ZXJzID0gW10sXG4gICAgZGF0YXNldHMsXG4gICAgbGF5ZXJzLFxuICAgIHNob3dEYXRhc2V0VGFibGUsXG4gICAgdXBkYXRlVGFibGVDb2xvcixcbiAgICByZW1vdmVEYXRhc2V0LFxuICAgIHNob3dBZGREYXRhTW9kYWwsXG4gICAgcGFuZWxNZXRhZGF0YSxcbiAgICBwYW5lbExpc3RWaWV3LFxuICAgIHZpc1N0YXRlQWN0aW9ucyxcbiAgICB1aVN0YXRlQWN0aW9uc1xuICB9KSA9PiB7XG4gICAgY29uc3Qge2FkZEZpbHRlcn0gPSB2aXNTdGF0ZUFjdGlvbnM7XG4gICAgY29uc3Qge3RvZ2dsZVBhbmVsTGlzdFZpZXd9ID0gdWlTdGF0ZUFjdGlvbnM7XG4gICAgY29uc3QgaXNBbnlGaWx0ZXJBbmltYXRpbmcgPSBmaWx0ZXJzLnNvbWUoZiA9PiBmLmlzQW5pbWF0aW5nKTtcbiAgICBjb25zdCBvbkNsaWNrQWRkRmlsdGVyID0gdXNlQ2FsbGJhY2soZGF0YXNldCA9PiBhZGRGaWx0ZXIoZGF0YXNldCksIFthZGRGaWx0ZXJdKTtcbiAgICBjb25zdCBpc1NvcnRCeURhdGFzZXRNb2RlID0gcGFuZWxMaXN0VmlldyA9PT0gUEFORUxfVklFV19UT0dHTEVTLmJ5RGF0YXNldDtcbiAgICBjb25zdCBmaWx0ZXJzQnlJbmRleCA9IHVzZU1lbW8oXG4gICAgICAoKSA9PlxuICAgICAgICBmaWx0ZXJzLm1hcCgoZiwgaWR4KSA9PiAoe1xuICAgICAgICAgIGZpbHRlcjogZixcbiAgICAgICAgICBpZHhcbiAgICAgICAgfSkpLFxuICAgICAgW2ZpbHRlcnNdXG4gICAgKTtcbiAgICBjb25zdCBmaWx0ZXJzQnlEYXRhc2V0cyA9IHVzZU1lbW8oXG4gICAgICAoKSA9PlxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhc2V0cykucmVkdWNlKFxuICAgICAgICAgIChhY2N1LCBkYXRhSWQpID0+ICh7XG4gICAgICAgICAgICAuLi5hY2N1LFxuICAgICAgICAgICAgLy8gaWYgc3luY2VkIGZpbHRlciwgc2hvdyBpdCB1bmZkZXIgaXRzIHRoZSBmaXJzdCBkYXRhc2V0XG4gICAgICAgICAgICBbZGF0YUlkXTogZmlsdGVyc0J5SW5kZXguZmlsdGVyKFxuICAgICAgICAgICAgICBmaWR4ID0+IGZpZHguZmlsdGVyLmRhdGFJZCAmJiBmaWR4LmZpbHRlci5kYXRhSWRbMF0gPT09IGRhdGFJZFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHt9XG4gICAgICAgICksXG4gICAgICBbZGF0YXNldHMsIGZpbHRlcnNCeUluZGV4XVxuICAgICk7XG4gICAgY29uc3QgX1RvZ2dsZVBhbmVsTGlzdFZpZXcgPSB1c2VDYWxsYmFjayhcbiAgICAgIGxpc3RWaWV3ID0+IHtcbiAgICAgICAgdG9nZ2xlUGFuZWxMaXN0Vmlldyh7cGFuZWxJZDogJ2ZpbHRlcicsIGxpc3RWaWV3fSk7XG4gICAgICB9LFxuICAgICAgW3RvZ2dsZVBhbmVsTGlzdFZpZXddXG4gICAgKTtcblxuICAgIGNvbnN0IGludGwgPSB1c2VJbnRsKCk7XG4gICAgY29uc3QgZmlsdGVyTGlzdFByb3BzID0ge1xuICAgICAgZGF0YXNldHMsXG4gICAgICBmaWx0ZXJzLFxuICAgICAgbGF5ZXJzLFxuICAgICAgaXNBbnlGaWx0ZXJBbmltYXRpbmcsXG4gICAgICB2aXNTdGF0ZUFjdGlvbnNcbiAgICB9O1xuXG4gICAgY29uc3Qgc291cmNlRGF0YUNhdGFsb2dQcm9wcyA9IHtcbiAgICAgIHNob3dEYXRhc2V0VGFibGUsXG4gICAgICB1cGRhdGVUYWJsZUNvbG9yLFxuICAgICAgcmVtb3ZlRGF0YXNldCxcbiAgICAgIHNob3dEZWxldGVEYXRhc2V0OiB0cnVlXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1tYW5hZ2VyXCI+XG4gICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgIDxQYW5lbFZpZXdMaXN0VG9nZ2xlIHRvZ2dsZVBhbmVsTGlzdFZpZXc9e19Ub2dnbGVQYW5lbExpc3RWaWV3fSBtb2RlPXtwYW5lbExpc3RWaWV3fSAvPlxuICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgIDxEYXRhc2V0U2VjdGlvblxuICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICB7Li4uc291cmNlRGF0YUNhdGFsb2dQcm9wc31cbiAgICAgICAgICBzaG93RGF0YXNldExpc3Q9eyFpc1NvcnRCeURhdGFzZXRNb2RlfVxuICAgICAgICAgIHNob3dBZGREYXRhTW9kYWw9e3Nob3dBZGREYXRhTW9kYWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxTaWRlUGFuZWxEaXZpZGVyIC8+XG4gICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgIDxQYW5lbFRpdGxlXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmaWx0ZXItbWFuYWdlci10aXRsZVwiXG4gICAgICAgICAgICB0aXRsZT17aW50bC5mb3JtYXRNZXNzYWdlKHtpZDogcGFuZWxNZXRhZGF0YS5sYWJlbH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBZGRGaWx0ZXJCdXR0b24gZGF0YXNldHM9e2RhdGFzZXRzfSBvbkFkZD17b25DbGlja0FkZEZpbHRlcn0gLz5cbiAgICAgICAgICA8L1BhbmVsVGl0bGU+XG4gICAgICAgIDwvU2lkZVBhbmVsU2VjdGlvbj5cbiAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAge2lzU29ydEJ5RGF0YXNldE1vZGUgPyAoXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhmaWx0ZXJzQnlEYXRhc2V0cykubWFwKGRhdGFJZCA9PiAoXG4gICAgICAgICAgICAgIDxEYXRhc2V0RmlsdGVyU2VjdGlvblxuICAgICAgICAgICAgICAgIGtleT17ZGF0YUlkfVxuICAgICAgICAgICAgICAgIGZpbHRlcnNCeUluZGV4PXtmaWx0ZXJzQnlEYXRhc2V0c1tkYXRhSWRdfVxuICAgICAgICAgICAgICAgIGRhdGFzZXQ9e2RhdGFzZXRzW2RhdGFJZF19XG4gICAgICAgICAgICAgICAgey4uLmZpbHRlckxpc3RQcm9wc31cbiAgICAgICAgICAgICAgICB7Li4uc291cmNlRGF0YUNhdGFsb2dQcm9wc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxGaWx0ZXJMaXN0IGZpbHRlcnNCeUluZGV4PXtmaWx0ZXJzQnlJbmRleH0gey4uLmZpbHRlckxpc3RQcm9wc30gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBGaWx0ZXJNYW5hZ2VyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJNYW5hZ2VyRmFjdG9yeTtcbiJdfQ==