"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var _lodash = _interopRequireDefault(require("lodash.get"));

var _constants = require("@kepler.gl/constants");

var _newFilterPanel = _interopRequireDefault(require("../../filters/filter-panels/new-filter-panel"));

var _timeRangeFilterPanel = _interopRequireDefault(require("../../filters/filter-panels/time-range-filter-panel"));

var _singleSelectFilterPanel = _interopRequireDefault(require("../../filters/filter-panels/single-select-filter-panel"));

var _multiSelectFilterPanel = _interopRequireDefault(require("../../filters/filter-panels/multi-select-filter-panel"));

var _rangeFilterPanel = _interopRequireDefault(require("../../filters/filter-panels/range-filter-panel"));

var _polygonFilterPanel = _interopRequireDefault(require("../../filters/filter-panels/polygon-filter-panel"));

var _templateObject;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyledFilterPanel = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 12px;\n  border-radius: 1px;\n"])));

FilterPanelFactory.deps = [_newFilterPanel["default"], _timeRangeFilterPanel["default"], _singleSelectFilterPanel["default"], _multiSelectFilterPanel["default"], _rangeFilterPanel["default"], _polygonFilterPanel["default"]];

function FilterPanelFactory(NewFilterPanel, TimeRangeFilterPanel, SingleSelectFilterPanel, MultiSelectFilterPanel, RangeFilterPanel, PolygonFilterPanel) {
  var _FilterPanelComponent;

  var FilterPanelComponents = (_FilterPanelComponent = {
    "default": NewFilterPanel
  }, (0, _defineProperty2["default"])(_FilterPanelComponent, _constants.FILTER_TYPES.timeRange, TimeRangeFilterPanel), (0, _defineProperty2["default"])(_FilterPanelComponent, _constants.FILTER_TYPES.select, SingleSelectFilterPanel), (0, _defineProperty2["default"])(_FilterPanelComponent, _constants.FILTER_TYPES.multiSelect, MultiSelectFilterPanel), (0, _defineProperty2["default"])(_FilterPanelComponent, _constants.FILTER_TYPES.range, RangeFilterPanel), (0, _defineProperty2["default"])(_FilterPanelComponent, _constants.FILTER_TYPES.polygon, PolygonFilterPanel), _FilterPanelComponent);
  return /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(FilterPanel, _Component);

    var _super = _createSuper(FilterPanel);

    function FilterPanel() {
      var _this;

      (0, _classCallCheck2["default"])(this, FilterPanel);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldsSelector", function (props) {
        var datasetId = props.filter.dataId[0];

        if (!datasetId) {
          return [];
        }

        return (0, _lodash["default"])(props, ['datasets', datasetId, 'fields'], []);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filterSelector", function (props) {
        return props.filters;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "nameSelector", function (props) {
        return props.filter.name;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "dataIdSelector", function (props) {
        return props.filter.dataId[0];
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "availableFieldsSelector", (0, _reselect.createSelector)(_this.fieldsSelector, _this.filterSelector, _this.nameSelector, _this.dataIdSelector, function (fields, filters, name, dataId) {
        return fields.filter(function (f) {
          return f.type && f.type !== _constants.ALL_FIELD_TYPES.geojson && (name.includes(f.name) || !filters.find(function (d) {
            return d.name.includes(f.name) && d.dataId.includes(dataId);
          }));
        });
      }));
      return _this;
    }

    (0, _createClass2["default"])(FilterPanel, [{
      key: "render",
      value: function render() {
        var filter = this.props.filter;
        var type = filter.type;
        var FilterFilterComponent = type && FilterPanelComponents[type] || FilterPanelComponents["default"];
        var allAvailableFields = this.availableFieldsSelector(this.props);
        return /*#__PURE__*/_react["default"].createElement(StyledFilterPanel, {
          className: "filter-panel"
        }, /*#__PURE__*/_react["default"].createElement(FilterFilterComponent, (0, _extends2["default"])({
          allAvailableFields: allAvailableFields
        }, this.props)));
      }
    }]);
    return FilterPanel;
  }(_react.Component);
}

var _default = FilterPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2ZpbHRlci1wYW5lbC9maWx0ZXItcGFuZWwudHN4Il0sIm5hbWVzIjpbIlN0eWxlZEZpbHRlclBhbmVsIiwic3R5bGVkIiwiZGl2IiwiRmlsdGVyUGFuZWxGYWN0b3J5IiwiZGVwcyIsIk5ld0ZpbHRlclBhbmVsRmFjdG9yeSIsIlRpbWVSYW5nZUZpbHRlclBhbmVsRmFjdG9yeSIsIlNpbmdsZVNlbGVjdEZpbHRlclBhbmVsRmFjdG9yeSIsIk11bHRpU2VsZWN0RmlsdGVyUGFuZWxGYWN0b3J5IiwiUmFuZ2VGaWx0ZXJQYW5lbEZhY3RvcnkiLCJQb2x5Z29uRmlsdGVyUGFuZWxGYWN0b3J5IiwiTmV3RmlsdGVyUGFuZWwiLCJUaW1lUmFuZ2VGaWx0ZXJQYW5lbCIsIlNpbmdsZVNlbGVjdEZpbHRlclBhbmVsIiwiTXVsdGlTZWxlY3RGaWx0ZXJQYW5lbCIsIlJhbmdlRmlsdGVyUGFuZWwiLCJQb2x5Z29uRmlsdGVyUGFuZWwiLCJGaWx0ZXJQYW5lbENvbXBvbmVudHMiLCJGSUxURVJfVFlQRVMiLCJ0aW1lUmFuZ2UiLCJzZWxlY3QiLCJtdWx0aVNlbGVjdCIsInJhbmdlIiwicG9seWdvbiIsInByb3BzIiwiZGF0YXNldElkIiwiZmlsdGVyIiwiZGF0YUlkIiwiZmlsdGVycyIsIm5hbWUiLCJmaWVsZHNTZWxlY3RvciIsImZpbHRlclNlbGVjdG9yIiwibmFtZVNlbGVjdG9yIiwiZGF0YUlkU2VsZWN0b3IiLCJmaWVsZHMiLCJmIiwidHlwZSIsIkFMTF9GSUVMRF9UWVBFUyIsImdlb2pzb24iLCJpbmNsdWRlcyIsImZpbmQiLCJkIiwiRmlsdGVyRmlsdGVyQ29tcG9uZW50IiwiYWxsQXZhaWxhYmxlRmllbGRzIiwiYXZhaWxhYmxlRmllbGRzU2VsZWN0b3IiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNB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S0FBS3BCLEtBQWxDLENBQTNCO0FBRUEsNEJBQ0UsZ0NBQUMsaUJBQUQ7QUFBbUIsVUFBQSxTQUFTLEVBQUM7QUFBN0Isd0JBQ0UsZ0NBQUMscUJBQUQ7QUFBdUIsVUFBQSxrQkFBa0IsRUFBRW1CO0FBQTNDLFdBQW1FLEtBQUtuQixLQUF4RSxFQURGLENBREY7QUFLRDtBQTNDSDtBQUFBO0FBQUEsSUFBaUNxQixnQkFBakM7QUE2Q0Q7O2VBRWMxQyxrQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC5nZXQnO1xuaW1wb3J0IHtBTExfRklFTERfVFlQRVMsIEZJTFRFUl9UWVBFU30gZnJvbSAnQGtlcGxlci5nbC9jb25zdGFudHMnO1xuXG5pbXBvcnQgTmV3RmlsdGVyUGFuZWxGYWN0b3J5IGZyb20gJy4uLy4uL2ZpbHRlcnMvZmlsdGVyLXBhbmVscy9uZXctZmlsdGVyLXBhbmVsJztcbmltcG9ydCBUaW1lUmFuZ2VGaWx0ZXJQYW5lbEZhY3RvcnkgZnJvbSAnLi4vLi4vZmlsdGVycy9maWx0ZXItcGFuZWxzL3RpbWUtcmFuZ2UtZmlsdGVyLXBhbmVsJztcbmltcG9ydCBTaW5nbGVTZWxlY3RGaWx0ZXJQYW5lbEZhY3RvcnkgZnJvbSAnLi4vLi4vZmlsdGVycy9maWx0ZXItcGFuZWxzL3NpbmdsZS1zZWxlY3QtZmlsdGVyLXBhbmVsJztcbmltcG9ydCBNdWx0aVNlbGVjdEZpbHRlclBhbmVsRmFjdG9yeSBmcm9tICcuLi8uLi9maWx0ZXJzL2ZpbHRlci1wYW5lbHMvbXVsdGktc2VsZWN0LWZpbHRlci1wYW5lbCc7XG5pbXBvcnQgUmFuZ2VGaWx0ZXJQYW5lbEZhY3RvcnkgZnJvbSAnLi4vLi4vZmlsdGVycy9maWx0ZXItcGFuZWxzL3JhbmdlLWZpbHRlci1wYW5lbCc7XG5pbXBvcnQgUG9seWdvbkZpbHRlclBhbmVsRmFjdG9yeSBmcm9tICcuLi8uLi9maWx0ZXJzL2ZpbHRlci1wYW5lbHMvcG9seWdvbi1maWx0ZXItcGFuZWwnO1xuaW1wb3J0IHtGaWVsZCwgRmlsdGVyfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcbmltcG9ydCB7RmlsdGVyUGFuZWxQcm9wc30gZnJvbSAnLi4vLi4vZmlsdGVycy9maWx0ZXItcGFuZWxzL3R5cGVzJztcbmltcG9ydCB7TGF5ZXJ9IGZyb20gJ0BrZXBsZXIuZ2wvbGF5ZXJzJztcblxuY29uc3QgU3R5bGVkRmlsdGVyUGFuZWwgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG5gO1xuXG5pbnRlcmZhY2UgRmlsdGVyUGFuZWxQcm9wc0ltcGwgZXh0ZW5kcyBPbWl0PEZpbHRlclBhbmVsUHJvcHMsICdhbGxBdmFpbGFibGVGaWVsZHMnPiB7XG4gIGZpbHRlcnM6IEZpbHRlcltdO1xuICBsYXllcnM6IFJlYWRvbmx5QXJyYXk8TGF5ZXI+O1xuICBpc0FueUZpbHRlckFuaW1hdGluZzogYm9vbGVhbjtcbiAgZW5sYXJnZUZpbHRlcjogKCkgPT4gdm9pZDtcbiAgdG9nZ2xlQW5pbWF0aW9uOiAoKSA9PiB2b2lkO1xuICB0b2dnbGVGaWx0ZXJGZWF0dXJlOiAoKSA9PiB2b2lkO1xufVxuXG5GaWx0ZXJQYW5lbEZhY3RvcnkuZGVwcyA9IFtcbiAgTmV3RmlsdGVyUGFuZWxGYWN0b3J5LFxuICBUaW1lUmFuZ2VGaWx0ZXJQYW5lbEZhY3RvcnksXG4gIFNpbmdsZVNlbGVjdEZpbHRlclBhbmVsRmFjdG9yeSxcbiAgTXVsdGlTZWxlY3RGaWx0ZXJQYW5lbEZhY3RvcnksXG4gIFJhbmdlRmlsdGVyUGFuZWxGYWN0b3J5LFxuICBQb2x5Z29uRmlsdGVyUGFuZWxGYWN0b3J5XG5dO1xuXG5mdW5jdGlvbiBGaWx0ZXJQYW5lbEZhY3RvcnkoXG4gIE5ld0ZpbHRlclBhbmVsOiBSZXR1cm5UeXBlPHR5cGVvZiBOZXdGaWx0ZXJQYW5lbEZhY3Rvcnk+LFxuICBUaW1lUmFuZ2VGaWx0ZXJQYW5lbDogUmV0dXJuVHlwZTx0eXBlb2YgVGltZVJhbmdlRmlsdGVyUGFuZWxGYWN0b3J5PixcbiAgU2luZ2xlU2VsZWN0RmlsdGVyUGFuZWw6IFJldHVyblR5cGU8dHlwZW9mIFNpbmdsZVNlbGVjdEZpbHRlclBhbmVsRmFjdG9yeT4sXG4gIE11bHRpU2VsZWN0RmlsdGVyUGFuZWw6IFJldHVyblR5cGU8dHlwZW9mIE11bHRpU2VsZWN0RmlsdGVyUGFuZWxGYWN0b3J5PixcbiAgUmFuZ2VGaWx0ZXJQYW5lbDogUmV0dXJuVHlwZTx0eXBlb2YgUmFuZ2VGaWx0ZXJQYW5lbEZhY3Rvcnk+LFxuICBQb2x5Z29uRmlsdGVyUGFuZWw6IFJldHVyblR5cGU8dHlwZW9mIFBvbHlnb25GaWx0ZXJQYW5lbEZhY3Rvcnk+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEZpbHRlclBhbmVsUHJvcHNJbXBsPiB7XG4gIGNvbnN0IEZpbHRlclBhbmVsQ29tcG9uZW50cyA9IHtcbiAgICBkZWZhdWx0OiBOZXdGaWx0ZXJQYW5lbCxcbiAgICBbRklMVEVSX1RZUEVTLnRpbWVSYW5nZV06IFRpbWVSYW5nZUZpbHRlclBhbmVsLFxuICAgIFtGSUxURVJfVFlQRVMuc2VsZWN0XTogU2luZ2xlU2VsZWN0RmlsdGVyUGFuZWwsXG4gICAgW0ZJTFRFUl9UWVBFUy5tdWx0aVNlbGVjdF06IE11bHRpU2VsZWN0RmlsdGVyUGFuZWwsXG4gICAgW0ZJTFRFUl9UWVBFUy5yYW5nZV06IFJhbmdlRmlsdGVyUGFuZWwsXG4gICAgW0ZJTFRFUl9UWVBFUy5wb2x5Z29uXTogUG9seWdvbkZpbHRlclBhbmVsXG4gIH07XG5cbiAgcmV0dXJuIGNsYXNzIEZpbHRlclBhbmVsIGV4dGVuZHMgQ29tcG9uZW50PEZpbHRlclBhbmVsUHJvcHNJbXBsPiB7XG4gICAgLyogc2VsZWN0b3JzICovXG4gICAgZmllbGRzU2VsZWN0b3IgPSAocHJvcHM6IEZpbHRlclBhbmVsUHJvcHNJbXBsKSA9PiB7XG4gICAgICBjb25zdCBkYXRhc2V0SWQgPSBwcm9wcy5maWx0ZXIuZGF0YUlkWzBdO1xuICAgICAgaWYgKCFkYXRhc2V0SWQpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGdldChwcm9wcywgWydkYXRhc2V0cycsIGRhdGFzZXRJZCwgJ2ZpZWxkcyddLCBbXSk7XG4gICAgfTtcblxuICAgIGZpbHRlclNlbGVjdG9yID0gKHByb3BzOiBGaWx0ZXJQYW5lbFByb3BzSW1wbCkgPT4gcHJvcHMuZmlsdGVycztcbiAgICBuYW1lU2VsZWN0b3IgPSAocHJvcHM6IEZpbHRlclBhbmVsUHJvcHNJbXBsKSA9PiBwcm9wcy5maWx0ZXIubmFtZTtcbiAgICBkYXRhSWRTZWxlY3RvciA9IChwcm9wczogRmlsdGVyUGFuZWxQcm9wc0ltcGwpID0+IHByb3BzLmZpbHRlci5kYXRhSWRbMF07XG5cbiAgICAvLyBvbmx5IHNob3cgY3VycmVudCBmaWVsZCBhbmQgZmllbGQgdGhhdCdzIG5vdCBhbHJlYWR5IGJlZW4gdXNlZCBhcyBhIGZpbHRlclxuICAgIGF2YWlsYWJsZUZpZWxkc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICB0aGlzLmZpZWxkc1NlbGVjdG9yLFxuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RvcixcbiAgICAgIHRoaXMubmFtZVNlbGVjdG9yLFxuICAgICAgdGhpcy5kYXRhSWRTZWxlY3RvcixcbiAgICAgIChmaWVsZHMsIGZpbHRlcnMsIG5hbWUsIGRhdGFJZCkgPT5cbiAgICAgICAgZmllbGRzLmZpbHRlcihcbiAgICAgICAgICAoZjogRmllbGQpID0+XG4gICAgICAgICAgICBmLnR5cGUgJiZcbiAgICAgICAgICAgIGYudHlwZSAhPT0gQUxMX0ZJRUxEX1RZUEVTLmdlb2pzb24gJiZcbiAgICAgICAgICAgIChuYW1lLmluY2x1ZGVzKGYubmFtZSkgfHxcbiAgICAgICAgICAgICAgIWZpbHRlcnMuZmluZChkID0+IGQubmFtZS5pbmNsdWRlcyhmLm5hbWUpICYmIGQuZGF0YUlkLmluY2x1ZGVzKGRhdGFJZCkpKVxuICAgICAgICApXG4gICAgKTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtmaWx0ZXJ9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3Qge3R5cGV9ID0gZmlsdGVyO1xuICAgICAgY29uc3QgRmlsdGVyRmlsdGVyQ29tcG9uZW50ID1cbiAgICAgICAgKHR5cGUgJiYgRmlsdGVyUGFuZWxDb21wb25lbnRzW3R5cGVdKSB8fCBGaWx0ZXJQYW5lbENvbXBvbmVudHMuZGVmYXVsdDtcbiAgICAgIGNvbnN0IGFsbEF2YWlsYWJsZUZpZWxkcyA9IHRoaXMuYXZhaWxhYmxlRmllbGRzU2VsZWN0b3IodGhpcy5wcm9wcyk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRGaWx0ZXJQYW5lbCBjbGFzc05hbWU9XCJmaWx0ZXItcGFuZWxcIj5cbiAgICAgICAgICA8RmlsdGVyRmlsdGVyQ29tcG9uZW50IGFsbEF2YWlsYWJsZUZpZWxkcz17YWxsQXZhaWxhYmxlRmllbGRzfSB7Li4udGhpcy5wcm9wc30gLz5cbiAgICAgICAgPC9TdHlsZWRGaWx0ZXJQYW5lbD5cbiAgICAgICk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJQYW5lbEZhY3Rvcnk7XG4iXX0=