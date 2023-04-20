"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _button = _interopRequireDefault(require("./button"));

var _icons = require("../../common/icons");

var _constants = require("@kepler.gl/constants");

var _optionDropdown = _interopRequireWildcard(require("./option-dropdown"));

var _utils = require("@kepler.gl/utils");

var _fieldToken = _interopRequireDefault(require("../../common/field-token"));

var _templateObject;

var StyledHeaderCell = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  border-bottom: 1px solid ", ";\n  border-top: 1px solid ", ";\n  padding-top: ", "px;\n  padding-right: 0;\n  padding-bottom: ", "px;\n  padding-left: ", "px;\n  align-items: center;\n  justify-content: space-between;\n  display: flex;\n  flex-direction: row;\n  background-color: ", ";\n\n  .n-sort-idx {\n    font-size: 9px;\n  }\n  .details {\n    font-weight: 500;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    height: 100%;\n    overflow: hidden;\n    flex-grow: 1;\n\n    .col-name {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n\n      .col-name__left {\n        display: flex;\n        align-items: center;\n        overflow: hidden;\n\n        svg {\n          margin-left: 6px;\n        }\n      }\n      .col-name__name {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n      }\n    }\n  }\n\n  .more {\n    margin-left: 5px;\n  }\n\n  .col-name__format svg {\n    width: 10px;\n    height: 10px;\n    stroke-width: 1;\n  }\n"])), function (props) {
  return props.theme.headerCellBorderColor;
}, function (props) {
  return props.theme.headerCellBorderColor;
}, function (props) {
  return props.theme.headerPaddingTop;
}, function (props) {
  return props.theme.headerPaddingBottom;
}, function (props) {
  return props.theme.cellPaddingSide;
}, function (props) {
  return props.theme.headerCellBackground;
});

var HeaderCellFactory = function HeaderCellFactory(FieldToken) {
  var HeaderCell = function HeaderCell(_ref) {
    var _colMeta$column, _classnames;

    var cellInfo = _ref.cellInfo,
        columns = _ref.columns,
        isPinned = _ref.isPinned,
        props = _ref.props,
        toggleMoreOptions = _ref.toggleMoreOptions,
        moreOptionsColumn = _ref.moreOptionsColumn;
    var columnIndex = cellInfo.columnIndex,
        key = cellInfo.key,
        style = cellInfo.style;
    var colMeta = props.colMeta,
        sortColumn = props.sortColumn,
        _sortTableColumn = props.sortTableColumn,
        pinTableColumn = props.pinTableColumn,
        copyTableColumn = props.copyTableColumn,
        setColumnDisplayFormat = props.setColumnDisplayFormat;

    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        showFormatter = _useState2[0],
        setShowFormatter = _useState2[1];

    var column = columns[columnIndex];
    var isGhost = column.ghost;
    var isSorted = sortColumn[column];
    var firstCell = columnIndex === 0;
    var isFormatted = Boolean((_colMeta$column = colMeta[column]) === null || _colMeta$column === void 0 ? void 0 : _colMeta$column.displayFormat);
    var formatLabels = isFormatted ? (0, _utils.getFieldFormatLabels)(colMeta[column].type) : [];
    var onSortTable = (0, _react.useCallback)(function () {
      return _sortTableColumn(column);
    }, [_sortTableColumn, column]);
    var onToggleOptionMenu = (0, _react.useCallback)(function () {
      return toggleMoreOptions(column);
    }, [toggleMoreOptions, column]);
    var onPin = (0, _react.useCallback)(function () {
      return pinTableColumn(column);
    }, [pinTableColumn, column]);
    var onCopy = (0, _react.useCallback)(function () {
      return copyTableColumn(column);
    }, [copyTableColumn, column]);
    var onSetDisplayFormat = (0, _react.useCallback)(function (displayFormat) {
      setColumnDisplayFormat((0, _defineProperty2["default"])({}, column, displayFormat.format));
    }, [column, setColumnDisplayFormat]);
    var onToggleDisplayFormat = (0, _react.useCallback)(function () {
      setShowFormatter(!showFormatter);
    }, [showFormatter]);
    return /*#__PURE__*/_react["default"].createElement(StyledHeaderCell, {
      className: (0, _classnames2["default"])('header-cell', (_classnames = {}, (0, _defineProperty2["default"])(_classnames, "column-".concat(columnIndex), true), (0, _defineProperty2["default"])(_classnames, 'pinned-header-cell', isPinned), (0, _defineProperty2["default"])(_classnames, 'first-cell', firstCell), _classnames)),
      key: key,
      style: style,
      onClick: function onClick(e) {
        e.shiftKey ? _sortTableColumn(column) : null;
      },
      onDoubleClick: onSortTable,
      title: column
    }, isGhost ? /*#__PURE__*/_react["default"].createElement("div", null) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
      className: "details"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-name"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-name__left"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "col-name__name"
    }, colMeta[column].name), /*#__PURE__*/_react["default"].createElement(_button["default"], {
      className: "col-name__sort",
      onClick: onSortTable
    }, isSorted ? isSorted === _constants.SORT_ORDER.ASCENDING ? /*#__PURE__*/_react["default"].createElement(_icons.ArrowUp, {
      height: "14px"
    }) : /*#__PURE__*/_react["default"].createElement(_icons.ArrowDown, {
      height: "14px"
    }) : null), /*#__PURE__*/_react["default"].createElement(_button["default"], {
      className: "col-name__format",
      onClick: onToggleDisplayFormat
    }, isFormatted ? /*#__PURE__*/_react["default"].createElement(_icons.Hash, {
      height: "14px"
    }) : null, /*#__PURE__*/_react["default"].createElement(_optionDropdown.FormatterDropdown, {
      left: 0,
      top: 0,
      isOpened: isFormatted && showFormatter,
      displayFormat: colMeta[column].displayFormat,
      setDisplayFormat: onSetDisplayFormat,
      onClose: function onClose() {
        return setShowFormatter(false);
      },
      formatLabels: formatLabels
    }))), /*#__PURE__*/_react["default"].createElement(_button["default"], {
      className: "more",
      onClick: onToggleOptionMenu
    }, /*#__PURE__*/_react["default"].createElement(_icons.VertThreeDots, {
      height: "14px"
    }))), /*#__PURE__*/_react["default"].createElement(FieldToken, {
      type: colMeta[column].type
    })), /*#__PURE__*/_react["default"].createElement("section", {
      className: "options"
    }, /*#__PURE__*/_react["default"].createElement(_optionDropdown["default"], {
      isOpened: moreOptionsColumn === column,
      column: column,
      colMeta: colMeta,
      toggleMoreOptions: toggleMoreOptions,
      sortTableColumn: function sortTableColumn(mode) {
        return _sortTableColumn(column, mode);
      },
      pinTableColumn: onPin,
      copyTableColumn: onCopy,
      setDisplayFormat: onSetDisplayFormat
    }))));
  };

  return HeaderCell;
};

HeaderCellFactory.deps = [_fieldToken["default"]];
var _default = HeaderCellFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vZGF0YS10YWJsZS9oZWFkZXItY2VsbC50c3giXSwibmFtZXMiOlsiU3R5bGVkSGVhZGVyQ2VsbCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJoZWFkZXJDZWxsQm9yZGVyQ29sb3IiLCJoZWFkZXJQYWRkaW5nVG9wIiwiaGVhZGVyUGFkZGluZ0JvdHRvbSIsImNlbGxQYWRkaW5nU2lkZSIsImhlYWRlckNlbGxCYWNrZ3JvdW5kIiwiSGVhZGVyQ2VsbEZhY3RvcnkiLCJGaWVsZFRva2VuIiwiSGVhZGVyQ2VsbCIsImNlbGxJbmZvIiwiY29sdW1ucyIsImlzUGlubmVkIiwidG9nZ2xlTW9yZU9wdGlvbnMiLCJtb3JlT3B0aW9uc0NvbHVtbiIsImNvbHVtbkluZGV4Iiwia2V5Iiwic3R5bGUiLCJjb2xNZXRhIiwic29ydENvbHVtbiIsInNvcnRUYWJsZUNvbHVtbiIsInBpblRhYmxlQ29sdW1uIiwiY29weVRhYmxlQ29sdW1uIiwic2V0Q29sdW1uRGlzcGxheUZvcm1hdCIsInNob3dGb3JtYXR0ZXIiLCJzZXRTaG93Rm9ybWF0dGVyIiwiY29sdW1uIiwiaXNHaG9zdCIsImdob3N0IiwiaXNTb3J0ZWQiLCJmaXJzdENlbGwiLCJpc0Zvcm1hdHRlZCIsIkJvb2xlYW4iLCJkaXNwbGF5Rm9ybWF0IiwiZm9ybWF0TGFiZWxzIiwidHlwZSIsIm9uU29ydFRhYmxlIiwib25Ub2dnbGVPcHRpb25NZW51Iiwib25QaW4iLCJvbkNvcHkiLCJvblNldERpc3BsYXlGb3JtYXQiLCJmb3JtYXQiLCJvblRvZ2dsZURpc3BsYXlGb3JtYXQiLCJlIiwic2hpZnRLZXkiLCJuYW1lIiwiU09SVF9PUkRFUiIsIkFTQ0VORElORyIsIm1vZGUiLCJkZXBzIiwiRmllbGRUb2tlbkZhY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FB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ZSxNQUFBLE1BQU0sRUFBQztBQUF0QixNQURGLENBekJGLENBREYsZUE4QkUsZ0NBQUMsVUFBRDtBQUFZLE1BQUEsSUFBSSxFQUFFbkIsT0FBTyxDQUFDUSxNQUFELENBQVAsQ0FBZ0JTO0FBQWxDLE1BOUJGLENBREYsZUFrQ0U7QUFBUyxNQUFBLFNBQVMsRUFBQztBQUFuQixvQkFDRSxnQ0FBQywwQkFBRDtBQUNFLE1BQUEsUUFBUSxFQUFFckIsaUJBQWlCLEtBQUtZLE1BRGxDO0FBRUUsTUFBQSxNQUFNLEVBQUVBLE1BRlY7QUFHRSxNQUFBLE9BQU8sRUFBRVIsT0FIWDtBQUlFLE1BQUEsaUJBQWlCLEVBQUVMLGlCQUpyQjtBQUtFLE1BQUEsZUFBZSxFQUFFLHlCQUFBbUMsSUFBSTtBQUFBLGVBQUk1QixnQkFBZSxDQUFDTSxNQUFELEVBQVNzQixJQUFULENBQW5CO0FBQUEsT0FMdkI7QUFNRSxNQUFBLGNBQWMsRUFBRVYsS0FObEI7QUFPRSxNQUFBLGVBQWUsRUFBRUMsTUFQbkI7QUFRRSxNQUFBLGdCQUFnQixFQUFFQztBQVJwQixNQURGLENBbENGLENBakJKLENBREY7QUFvRUQsR0EvR0Q7O0FBZ0hBLFNBQU8vQixVQUFQO0FBQ0QsQ0FsSEQ7O0FBbUhBRixpQkFBaUIsQ0FBQzBDLElBQWxCLEdBQXlCLENBQUNDLHNCQUFELENBQXpCO2VBQ2UzQyxpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NTU1Byb3BlcnRpZXMsIHVzZVN0YXRlLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9idXR0b24nO1xuaW1wb3J0IHtBcnJvd1VwLCBBcnJvd0Rvd24sIFZlcnRUaHJlZURvdHMsIEhhc2h9IGZyb20gJy4uLy4uL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQge1NPUlRfT1JERVJ9IGZyb20gJ0BrZXBsZXIuZ2wvY29uc3RhbnRzJztcbmltcG9ydCBPcHRpb25Ecm9wZG93biwge0Zvcm1hdHRlckRyb3Bkb3dufSBmcm9tICcuL29wdGlvbi1kcm9wZG93bic7XG5pbXBvcnQge2dldEZpZWxkRm9ybWF0TGFiZWxzfSBmcm9tICdAa2VwbGVyLmdsL3V0aWxzJztcbmltcG9ydCB7Q29sTWV0YX0gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5pbXBvcnQgRmllbGRUb2tlbkZhY3RvcnksIHtGaWVsZFRva2VuUHJvcHN9IGZyb20gJy4uLy4uL2NvbW1vbi9maWVsZC10b2tlbic7XG5pbXBvcnQge0RhdGFUYWJsZVByb3BzfSBmcm9tICcuL2luZGV4JztcblxuY29uc3QgU3R5bGVkSGVhZGVyQ2VsbCA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlckNlbGxCb3JkZXJDb2xvcn07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlckNlbGxCb3JkZXJDb2xvcn07XG4gIHBhZGRpbmctdG9wOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlclBhZGRpbmdUb3B9cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlclBhZGRpbmdCb3R0b219cHg7XG4gIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jZWxsUGFkZGluZ1NpZGV9cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXJDZWxsQmFja2dyb3VuZH07XG5cbiAgLm4tc29ydC1pZHgge1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICB9XG4gIC5kZXRhaWxzIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZmxleC1ncm93OiAxO1xuXG4gICAgLmNvbC1uYW1lIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAuY29sLW5hbWVfX2xlZnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmNvbC1uYW1lX19uYW1lIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1vcmUge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cblxuICAuY29sLW5hbWVfX2Zvcm1hdCBzdmcge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBzdHJva2Utd2lkdGg6IDE7XG4gIH1cbmA7XG5cbnR5cGUgQ2VsbEluZm8gPSB7XG4gIGNvbHVtbkluZGV4OiBudW1iZXI7XG4gIGlzU2Nyb2xsaW5nOiBib29sZWFuO1xuICBpc1Zpc2libGU6IGJvb2xlYW47XG4gIGtleTogc3RyaW5nO1xuICBwYXJlbnQ6IGFueTtcbiAgcm93SW5kZXg6IG51bWJlcjtcbiAgc3R5bGU6IENTU1Byb3BlcnRpZXM7XG59O1xuXG50eXBlIEhlYWRlckNlbGxQcm9wcyA9IHtcbiAgLy8gcGFzc2VkIGRvd24gZnJvbSByZWFjdCB2aXJ0dWFsaXplZCBHcmlkXG4gIGNlbGxJbmZvOiBDZWxsSW5mbztcbiAgY29sdW1uczogRGF0YVRhYmxlUHJvcHNbJ2NvbHVtbnMnXTtcbiAgY29sTWV0YT86IENvbE1ldGE7XG4gIGlzUGlubmVkPzogYm9vbGVhbjtcbiAgc2hvd1N0YXRzPzogYm9vbGVhbjtcbiAgcHJvcHM6IERhdGFUYWJsZVByb3BzO1xuICB0b2dnbGVNb3JlT3B0aW9uczogKG1vcmVPcHRpb25zQ29sdW1uOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG1vcmVPcHRpb25zQ29sdW1uOiBudWxsIHwgc3RyaW5nO1xufTtcblxuY29uc3QgSGVhZGVyQ2VsbEZhY3RvcnkgPSAoRmllbGRUb2tlbjogUmVhY3QuRkM8RmllbGRUb2tlblByb3BzPikgPT4ge1xuICBjb25zdCBIZWFkZXJDZWxsID0gKHtcbiAgICBjZWxsSW5mbyxcbiAgICBjb2x1bW5zLFxuICAgIGlzUGlubmVkLFxuICAgIHByb3BzLFxuICAgIHRvZ2dsZU1vcmVPcHRpb25zLFxuICAgIG1vcmVPcHRpb25zQ29sdW1uXG4gIH06IEhlYWRlckNlbGxQcm9wcykgPT4ge1xuICAgIGNvbnN0IHtjb2x1bW5JbmRleCwga2V5LCBzdHlsZX0gPSBjZWxsSW5mbztcbiAgICBjb25zdCB7XG4gICAgICBjb2xNZXRhLFxuICAgICAgc29ydENvbHVtbixcbiAgICAgIHNvcnRUYWJsZUNvbHVtbixcbiAgICAgIHBpblRhYmxlQ29sdW1uLFxuICAgICAgY29weVRhYmxlQ29sdW1uLFxuICAgICAgc2V0Q29sdW1uRGlzcGxheUZvcm1hdFxuICAgIH0gPSBwcm9wcztcbiAgICBjb25zdCBbc2hvd0Zvcm1hdHRlciwgc2V0U2hvd0Zvcm1hdHRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgY29sdW1uID0gY29sdW1uc1tjb2x1bW5JbmRleF07XG5cbiAgICBjb25zdCBpc0dob3N0ID0gY29sdW1uLmdob3N0O1xuICAgIGNvbnN0IGlzU29ydGVkID0gc29ydENvbHVtbltjb2x1bW5dO1xuICAgIGNvbnN0IGZpcnN0Q2VsbCA9IGNvbHVtbkluZGV4ID09PSAwO1xuICAgIGNvbnN0IGlzRm9ybWF0dGVkID0gQm9vbGVhbihjb2xNZXRhW2NvbHVtbl0/LmRpc3BsYXlGb3JtYXQpO1xuICAgIGNvbnN0IGZvcm1hdExhYmVscyA9IGlzRm9ybWF0dGVkID8gZ2V0RmllbGRGb3JtYXRMYWJlbHMoY29sTWV0YVtjb2x1bW5dLnR5cGUpIDogW107XG4gICAgY29uc3Qgb25Tb3J0VGFibGUgPSB1c2VDYWxsYmFjaygoKSA9PiBzb3J0VGFibGVDb2x1bW4oY29sdW1uKSwgW3NvcnRUYWJsZUNvbHVtbiwgY29sdW1uXSk7XG4gICAgY29uc3Qgb25Ub2dnbGVPcHRpb25NZW51ID0gdXNlQ2FsbGJhY2soKCkgPT4gdG9nZ2xlTW9yZU9wdGlvbnMoY29sdW1uKSwgW1xuICAgICAgdG9nZ2xlTW9yZU9wdGlvbnMsXG4gICAgICBjb2x1bW5cbiAgICBdKTtcbiAgICBjb25zdCBvblBpbiA9IHVzZUNhbGxiYWNrKCgpID0+IHBpblRhYmxlQ29sdW1uKGNvbHVtbiksIFtwaW5UYWJsZUNvbHVtbiwgY29sdW1uXSk7XG4gICAgY29uc3Qgb25Db3B5ID0gdXNlQ2FsbGJhY2soKCkgPT4gY29weVRhYmxlQ29sdW1uKGNvbHVtbiksIFtjb3B5VGFibGVDb2x1bW4sIGNvbHVtbl0pO1xuICAgIGNvbnN0IG9uU2V0RGlzcGxheUZvcm1hdCA9IHVzZUNhbGxiYWNrKFxuICAgICAgZGlzcGxheUZvcm1hdCA9PiB7XG4gICAgICAgIHNldENvbHVtbkRpc3BsYXlGb3JtYXQoe1tjb2x1bW5dOiBkaXNwbGF5Rm9ybWF0LmZvcm1hdH0pO1xuICAgICAgfSxcbiAgICAgIFtjb2x1bW4sIHNldENvbHVtbkRpc3BsYXlGb3JtYXRdXG4gICAgKTtcblxuICAgIGNvbnN0IG9uVG9nZ2xlRGlzcGxheUZvcm1hdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIHNldFNob3dGb3JtYXR0ZXIoIXNob3dGb3JtYXR0ZXIpO1xuICAgIH0sIFtzaG93Rm9ybWF0dGVyXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZEhlYWRlckNlbGxcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdoZWFkZXItY2VsbCcsIHtcbiAgICAgICAgICBbYGNvbHVtbi0ke2NvbHVtbkluZGV4fWBdOiB0cnVlLFxuICAgICAgICAgICdwaW5uZWQtaGVhZGVyLWNlbGwnOiBpc1Bpbm5lZCxcbiAgICAgICAgICAnZmlyc3QtY2VsbCc6IGZpcnN0Q2VsbFxuICAgICAgICB9KX1cbiAgICAgICAga2V5PXtrZXl9XG4gICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgICAgZS5zaGlmdEtleSA/IHNvcnRUYWJsZUNvbHVtbihjb2x1bW4pIDogbnVsbDtcbiAgICAgICAgfX1cbiAgICAgICAgb25Eb3VibGVDbGljaz17b25Tb3J0VGFibGV9XG4gICAgICAgIHRpdGxlPXtjb2x1bW59XG4gICAgICA+XG4gICAgICAgIHtpc0dob3N0ID8gKFxuICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1uYW1lXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbmFtZV9fbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbmFtZV9fbmFtZVwiPntjb2xNZXRhW2NvbHVtbl0ubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiY29sLW5hbWVfX3NvcnRcIiBvbkNsaWNrPXtvblNvcnRUYWJsZX0+XG4gICAgICAgICAgICAgICAgICAgIHtpc1NvcnRlZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICBpc1NvcnRlZCA9PT0gU09SVF9PUkRFUi5BU0NFTkRJTkcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dVcCBoZWlnaHQ9XCIxNHB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93RG93biBoZWlnaHQ9XCIxNHB4XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImNvbC1uYW1lX19mb3JtYXRcIiBvbkNsaWNrPXtvblRvZ2dsZURpc3BsYXlGb3JtYXR9PlxuICAgICAgICAgICAgICAgICAgICB7aXNGb3JtYXR0ZWQgPyA8SGFzaCBoZWlnaHQ9XCIxNHB4XCIgLz4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVyRHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0PXswfVxuICAgICAgICAgICAgICAgICAgICAgIHRvcD17MH1cbiAgICAgICAgICAgICAgICAgICAgICBpc09wZW5lZD17aXNGb3JtYXR0ZWQgJiYgc2hvd0Zvcm1hdHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Rm9ybWF0PXtjb2xNZXRhW2NvbHVtbl0uZGlzcGxheUZvcm1hdH1cbiAgICAgICAgICAgICAgICAgICAgICBzZXREaXNwbGF5Rm9ybWF0PXtvblNldERpc3BsYXlGb3JtYXR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd0Zvcm1hdHRlcihmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgZm9ybWF0TGFiZWxzPXtmb3JtYXRMYWJlbHN9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1vcmVcIiBvbkNsaWNrPXtvblRvZ2dsZU9wdGlvbk1lbnV9PlxuICAgICAgICAgICAgICAgICAgPFZlcnRUaHJlZURvdHMgaGVpZ2h0PVwiMTRweFwiIC8+XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8RmllbGRUb2tlbiB0eXBlPXtjb2xNZXRhW2NvbHVtbl0udHlwZX0gLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwib3B0aW9uc1wiPlxuICAgICAgICAgICAgICA8T3B0aW9uRHJvcGRvd25cbiAgICAgICAgICAgICAgICBpc09wZW5lZD17bW9yZU9wdGlvbnNDb2x1bW4gPT09IGNvbHVtbn1cbiAgICAgICAgICAgICAgICBjb2x1bW49e2NvbHVtbn1cbiAgICAgICAgICAgICAgICBjb2xNZXRhPXtjb2xNZXRhfVxuICAgICAgICAgICAgICAgIHRvZ2dsZU1vcmVPcHRpb25zPXt0b2dnbGVNb3JlT3B0aW9uc31cbiAgICAgICAgICAgICAgICBzb3J0VGFibGVDb2x1bW49e21vZGUgPT4gc29ydFRhYmxlQ29sdW1uKGNvbHVtbiwgbW9kZSl9XG4gICAgICAgICAgICAgICAgcGluVGFibGVDb2x1bW49e29uUGlufVxuICAgICAgICAgICAgICAgIGNvcHlUYWJsZUNvbHVtbj17b25Db3B5fVxuICAgICAgICAgICAgICAgIHNldERpc3BsYXlGb3JtYXQ9e29uU2V0RGlzcGxheUZvcm1hdH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvU3R5bGVkSGVhZGVyQ2VsbD5cbiAgICApO1xuICB9O1xuICByZXR1cm4gSGVhZGVyQ2VsbDtcbn07XG5IZWFkZXJDZWxsRmFjdG9yeS5kZXBzID0gW0ZpZWxkVG9rZW5GYWN0b3J5XTtcbmV4cG9ydCBkZWZhdWx0IEhlYWRlckNlbGxGYWN0b3J5O1xuIl19