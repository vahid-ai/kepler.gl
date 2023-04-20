"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icons = require("../common/icons");

var _fieldSelector = _interopRequireDefault(require("../common/field-selector"));

var _styledComponents2 = require("../common/styled-components");

var _templateObject, _templateObject2, _templateObject3;

var TOP_SECTION_HEIGHT = '36px';

var TopSectionWrapper = _styledComponents["default"].div.attrs({
  className: 'time-widget--top'
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  color: ", ";\n  height: ", ";\n\n  .bottom-widget__y-axis {\n    flex-grow: 1;\n    margin-left: 20px;\n  }\n\n  .bottom-widget__field-select {\n    width: 160px;\n    display: inline-block;\n\n    .item-selector__dropdown {\n      background: transparent;\n      padding: 4px 10px 4px 4px;\n      border-color: transparent;\n\n      :active,\n      :focus,\n      &.focus,\n      &.active {\n        background: transparent;\n        border-color: transparent;\n      }\n    }\n\n    .item-selector__dropdown:hover {\n      background: transparent;\n      border-color: transparent;\n\n      .item-selector__dropdown__value {\n        color: ", ";\n      }\n    }\n  }\n\n  .animation-control__speed-control {\n    margin-right: -12px;\n\n    .animation-control__speed-slider {\n      right: calc(0% - 48px);\n    }\n  }\n"])), function (props) {
  return props.theme.labelColor;
}, TOP_SECTION_HEIGHT, function (props) {
  return props.hoverColor ? props.theme[props.hoverColor] : props.theme.textColorHl;
});

var StyledTitle = (0, _styledComponents["default"])(_styledComponents2.CenterFlexbox)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 0;\n  color: ", ";\n  margin-right: 10px;\n\n  .bottom-widget__icon {\n    margin-right: 6px;\n  }\n  .bottom-widget__icon.speed {\n    margin-right: 0;\n  }\n"])), function (props) {
  return props.theme.textColor;
});
var StyledCenterBox = (0, _styledComponents["default"])(_styledComponents2.CenterFlexbox)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  > div {\n    margin-left: 4px;\n  }\n"])));
TimeWidgetTopFactory.deps = [_fieldSelector["default"]];

function TimeWidgetTopFactory(FieldSelector) {
  var TimeWidgetTop = function TimeWidgetTop(_ref) {
    var filter = _ref.filter,
        readOnly = _ref.readOnly,
        datasets = _ref.datasets,
        setFilterPlot = _ref.setFilterPlot,
        index = _ref.index,
        onClose = _ref.onClose,
        isMinified = _ref.isMinified,
        onToggleMinify = _ref.onToggleMinify;
    var yAxisFields = (0, _react.useMemo)(function () {
      return ((datasets[filter.dataId[0]] || {}).fields || []).filter(function (f) {
        return f.type === 'integer' || f.type === 'real';
      });
    }, [datasets, filter.dataId]);

    var _setFilterPlotYAxis = (0, _react.useCallback)(function (value) {
      return setFilterPlot(index, {
        yAxis: value
      });
    }, [setFilterPlot, index]);

    return /*#__PURE__*/_react["default"].createElement(TopSectionWrapper, null, /*#__PURE__*/_react["default"].createElement(StyledTitle, {
      className: "bottom-widget__field"
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, {
      className: "bottom-widget__icon"
    }, /*#__PURE__*/_react["default"].createElement(_icons.Clock, {
      height: "15px"
    })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.SelectTextBold, null, filter.name)), !isMinified ? /*#__PURE__*/_react["default"].createElement(StyledTitle, {
      className: "bottom-widget__y-axis"
    }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, {
      className: "bottom-widget__icon"
    }, /*#__PURE__*/_react["default"].createElement(_icons.LineChart, {
      height: "15px"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "bottom-widget__field-select"
    }, /*#__PURE__*/_react["default"].createElement(FieldSelector, {
      fields: yAxisFields,
      placement: "top",
      value: filter.yAxis ? filter.yAxis.name : null,
      onSelect: _setFilterPlotYAxis,
      placeholder: "placeholder.yAxis",
      erasable: true,
      showToken: false
    }))) : null, /*#__PURE__*/_react["default"].createElement(StyledCenterBox, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.IconRoundSmall, null, isMinified ? /*#__PURE__*/_react["default"].createElement(_icons.ArrowUp, {
      height: "12px",
      onClick: onToggleMinify
    }) : /*#__PURE__*/_react["default"].createElement(_icons.ArrowDown, {
      height: "12px",
      onClick: onToggleMinify
    })), !readOnly ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.IconRoundSmall, null, /*#__PURE__*/_react["default"].createElement(_icons.Close, {
      height: "12px",
      onClick: onClose
    })) : null));
  };

  return TimeWidgetTop;
}

var _default = TimeWidgetTopFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9maWx0ZXJzL3RpbWUtd2lkZ2V0LXRvcC50c3giXSwibmFtZXMiOlsiVE9QX1NFQ1RJT05fSEVJR0hUIiwiVG9wU2VjdGlvbldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsInByb3BzIiwidGhlbWUiLCJsYWJlbENvbG9yIiwiaG92ZXJDb2xvciIsInRleHRDb2xvckhsIiwiU3R5bGVkVGl0bGUiLCJDZW50ZXJGbGV4Ym94IiwidGV4dENvbG9yIiwiU3R5bGVkQ2VudGVyQm94IiwiVGltZVdpZGdldFRvcEZhY3RvcnkiLCJkZXBzIiwiRmllbGRTZWxlY3RvckZhY3RvcnkiLCJGaWVsZFNlbGVjdG9yIiwiVGltZVdpZGdldFRvcCIsImZpbHRlciIsInJlYWRPbmx5IiwiZGF0YXNldHMiLCJzZXRGaWx0ZXJQbG90IiwiaW5kZXgiLCJvbkNsb3NlIiwiaXNNaW5pZmllZCIsIm9uVG9nZ2xlTWluaWZ5IiwieUF4aXNGaWVsZHMiLCJkYXRhSWQiLCJmaWVsZHMiLCJmIiwidHlwZSIsIl9zZXRGaWx0ZXJQbG90WUF4aXMiLCJ2YWx1ZSIsInlBeGlzIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBSUEsSUFBTUEsa0JBQWtCLEdBQUcsTUFBM0I7O0FBRUEsSUFBTUMsaUJBQWlCLEdBQUdDLDZCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDekNDLEVBQUFBLFNBQVMsRUFBRTtBQUQ4QixDQUFqQixDQUFILHU5QkFNWixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQWhCO0FBQUEsQ0FOTyxFQU9YUixrQkFQVyxFQXFDTixVQUFBTSxLQUFLO0FBQUEsU0FDWkEsS0FBSyxDQUFDRyxVQUFOLEdBQW1CSCxLQUFLLENBQUNDLEtBQU4sQ0FBWUQsS0FBSyxDQUFDRyxVQUFs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QyxNQUFoQjtBQUF1QixNQUFBLE9BQU8sRUFBRUM7QUFBaEMsTUFEUyxnQkFHVCxnQ0FBQyxnQkFBRDtBQUFXLE1BQUEsTUFBTSxFQUFDLE1BQWxCO0FBQXlCLE1BQUEsT0FBTyxFQUFFQTtBQUFsQyxNQUpKLENBREYsRUFRRyxDQUFDTixRQUFELGdCQUNDLGdDQUFDLGlDQUFELHFCQUNFLGdDQUFDLFlBQUQ7QUFBTyxNQUFBLE1BQU0sRUFBQyxNQUFkO0FBQXFCLE1BQUEsT0FBTyxFQUFFSTtBQUE5QixNQURGLENBREQsR0FJRyxJQVpOLENBekJGLENBREY7QUEwQ0QsR0FoRUQ7O0FBaUVBLFNBQU9OLGFBQVA7QUFDRDs7ZUFFY0osb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlTWVtb30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0Nsb2NrLCBDbG9zZSwgTGluZUNoYXJ0LCBBcnJvd0Rvd24sIEFycm93VXB9IGZyb20gJy4uL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQgRmllbGRTZWxlY3RvckZhY3RvcnkgZnJvbSAnLi4vY29tbW9uL2ZpZWxkLXNlbGVjdG9yJztcbmltcG9ydCB7U2VsZWN0VGV4dEJvbGQsIEljb25Sb3VuZFNtYWxsLCBDZW50ZXJGbGV4Ym94fSBmcm9tICcuLi9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtUaW1lV2lkZ2V0VG9wUHJvcHMsIFRvcFNlY3Rpb25XcmFwcGVyUHJvcHN9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtGaWVsZH0gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5cbmNvbnN0IFRPUF9TRUNUSU9OX0hFSUdIVCA9ICczNnB4JztcblxuY29uc3QgVG9wU2VjdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAndGltZS13aWRnZXQtLXRvcCdcbn0pPFRvcFNlY3Rpb25XcmFwcGVyUHJvcHM+YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgaGVpZ2h0OiAke1RPUF9TRUNUSU9OX0hFSUdIVH07XG5cbiAgLmJvdHRvbS13aWRnZXRfX3ktYXhpcyB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG5cbiAgLmJvdHRvbS13aWRnZXRfX2ZpZWxkLXNlbGVjdCB7XG4gICAgd2lkdGg6IDE2MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgIC5pdGVtLXNlbGVjdG9yX19kcm9wZG93biB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIHBhZGRpbmc6IDRweCAxMHB4IDRweCA0cHg7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICA6YWN0aXZlLFxuICAgICAgOmZvY3VzLFxuICAgICAgJi5mb2N1cyxcbiAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0tc2VsZWN0b3JfX2Ryb3Bkb3duOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgLml0ZW0tc2VsZWN0b3JfX2Ryb3Bkb3duX192YWx1ZSB7XG4gICAgICAgIGNvbG9yOiAke3Byb3BzID0+XG4gICAgICAgICAgcHJvcHMuaG92ZXJDb2xvciA/IHByb3BzLnRoZW1lW3Byb3BzLmhvdmVyQ29sb3JdIDogcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5hbmltYXRpb24tY29udHJvbF9fc3BlZWQtY29udHJvbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTJweDtcblxuICAgIC5hbmltYXRpb24tY29udHJvbF9fc3BlZWQtc2xpZGVyIHtcbiAgICAgIHJpZ2h0OiBjYWxjKDAlIC0gNDhweCk7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRUaXRsZSA9IHN0eWxlZChDZW50ZXJGbGV4Ym94KWBcbiAgZmxleC1ncm93OiAwO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgLmJvdHRvbS13aWRnZXRfX2ljb24ge1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICB9XG4gIC5ib3R0b20td2lkZ2V0X19pY29uLnNwZWVkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZENlbnRlckJveCA9IHN0eWxlZChDZW50ZXJGbGV4Ym94KWBcbiAgPiBkaXYge1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIH1cbmA7XG5cblRpbWVXaWRnZXRUb3BGYWN0b3J5LmRlcHMgPSBbRmllbGRTZWxlY3RvckZhY3RvcnldO1xuZnVuY3Rpb24gVGltZVdpZGdldFRvcEZhY3RvcnkoRmllbGRTZWxlY3RvcjogUmV0dXJuVHlwZTx0eXBlb2YgRmllbGRTZWxlY3RvckZhY3Rvcnk+KSB7XG4gIGNvbnN0IFRpbWVXaWRnZXRUb3A6IFJlYWN0LkZDPFRpbWVXaWRnZXRUb3BQcm9wcz4gPSAoe1xuICAgIGZpbHRlcixcbiAgICByZWFkT25seSxcbiAgICBkYXRhc2V0cyxcbiAgICBzZXRGaWx0ZXJQbG90LFxuICAgIGluZGV4LFxuICAgIG9uQ2xvc2UsXG4gICAgaXNNaW5pZmllZCxcbiAgICBvblRvZ2dsZU1pbmlmeVxuICB9KSA9PiB7XG4gICAgY29uc3QgeUF4aXNGaWVsZHMgPSB1c2VNZW1vKFxuICAgICAgKCkgPT5cbiAgICAgICAgKChkYXRhc2V0c1tmaWx0ZXIuZGF0YUlkWzBdXSB8fCB7fSkuZmllbGRzIHx8IFtdKS5maWx0ZXIoXG4gICAgICAgICAgKGY6IEZpZWxkKSA9PiBmLnR5cGUgPT09ICdpbnRlZ2VyJyB8fCBmLnR5cGUgPT09ICdyZWFsJ1xuICAgICAgICApLFxuICAgICAgW2RhdGFzZXRzLCBmaWx0ZXIuZGF0YUlkXVxuICAgICk7XG4gICAgY29uc3QgX3NldEZpbHRlclBsb3RZQXhpcyA9IHVzZUNhbGxiYWNrKHZhbHVlID0+IHNldEZpbHRlclBsb3QoaW5kZXgsIHt5QXhpczogdmFsdWV9KSwgW1xuICAgICAgc2V0RmlsdGVyUGxvdCxcbiAgICAgIGluZGV4XG4gICAgXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRvcFNlY3Rpb25XcmFwcGVyPlxuICAgICAgICA8U3R5bGVkVGl0bGUgY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldF9fZmllbGRcIj5cbiAgICAgICAgICA8Q2VudGVyRmxleGJveCBjbGFzc05hbWU9XCJib3R0b20td2lkZ2V0X19pY29uXCI+XG4gICAgICAgICAgICA8Q2xvY2sgaGVpZ2h0PVwiMTVweFwiIC8+XG4gICAgICAgICAgPC9DZW50ZXJGbGV4Ym94PlxuICAgICAgICAgIDxTZWxlY3RUZXh0Qm9sZD57ZmlsdGVyLm5hbWV9PC9TZWxlY3RUZXh0Qm9sZD5cbiAgICAgICAgPC9TdHlsZWRUaXRsZT5cbiAgICAgICAgeyFpc01pbmlmaWVkID8gKFxuICAgICAgICAgIDxTdHlsZWRUaXRsZSBjbGFzc05hbWU9XCJib3R0b20td2lkZ2V0X195LWF4aXNcIj5cbiAgICAgICAgICAgIDxDZW50ZXJGbGV4Ym94IGNsYXNzTmFtZT1cImJvdHRvbS13aWRnZXRfX2ljb25cIj5cbiAgICAgICAgICAgICAgPExpbmVDaGFydCBoZWlnaHQ9XCIxNXB4XCIgLz5cbiAgICAgICAgICAgIDwvQ2VudGVyRmxleGJveD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLXdpZGdldF9fZmllbGQtc2VsZWN0XCI+XG4gICAgICAgICAgICAgIDxGaWVsZFNlbGVjdG9yXG4gICAgICAgICAgICAgICAgZmllbGRzPXt5QXhpc0ZpZWxkc31cbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmaWx0ZXIueUF4aXMgPyBmaWx0ZXIueUF4aXMubmFtZSA6IG51bGx9XG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9e19zZXRGaWx0ZXJQbG90WUF4aXN9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlci55QXhpc1wiXG4gICAgICAgICAgICAgICAgZXJhc2FibGVcbiAgICAgICAgICAgICAgICBzaG93VG9rZW49e2ZhbHNlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9TdHlsZWRUaXRsZT5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDxTdHlsZWRDZW50ZXJCb3g+XG4gICAgICAgICAgPEljb25Sb3VuZFNtYWxsPlxuICAgICAgICAgICAge2lzTWluaWZpZWQgPyAoXG4gICAgICAgICAgICAgIDxBcnJvd1VwIGhlaWdodD1cIjEycHhcIiBvbkNsaWNrPXtvblRvZ2dsZU1pbmlmeX0gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxBcnJvd0Rvd24gaGVpZ2h0PVwiMTJweFwiIG9uQ2xpY2s9e29uVG9nZ2xlTWluaWZ5fSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0ljb25Sb3VuZFNtYWxsPlxuICAgICAgICAgIHshcmVhZE9ubHkgPyAoXG4gICAgICAgICAgICA8SWNvblJvdW5kU21hbGw+XG4gICAgICAgICAgICAgIDxDbG9zZSBoZWlnaHQ9XCIxMnB4XCIgb25DbGljaz17b25DbG9zZX0gLz5cbiAgICAgICAgICAgIDwvSWNvblJvdW5kU21hbGw+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvU3R5bGVkQ2VudGVyQm94PlxuICAgICAgPC9Ub3BTZWN0aW9uV3JhcHBlcj5cbiAgICApO1xuICB9O1xuICByZXR1cm4gVGltZVdpZGdldFRvcDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZVdpZGdldFRvcEZhY3Rvcnk7XG4iXX0=