"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TableSection = exports.Container = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactVirtualized = require("react-virtualized");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _reselect = require("reselect");

var _lodash = _interopRequireDefault(require("lodash.get"));

var _lodash2 = _interopRequireDefault(require("lodash.debounce"));

var _icons = require("../icons");

var _grid = _interopRequireDefault(require("./grid"));

var _headerCell = _interopRequireDefault(require("./header-cell"));

var _utils = require("@kepler.gl/utils");

var _cellSize = require("./cell-size");

var _constants = require("@kepler.gl/constants");

var _fieldToAlignRight, _templateObject, _templateObject2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var defaultHeaderRowHeight = 55;
var defaultHeaderStatsControlHeight = 40;
var defaultRowHeight = 32;
var overscanColumnCount = 10;
var overscanRowCount = 10; // The default scrollbar width can range anywhere from 12px to 17px

var browserScrollBarWidth = 17;
var fieldToAlignRight = (_fieldToAlignRight = {}, (0, _defineProperty2["default"])(_fieldToAlignRight, _constants.ALL_FIELD_TYPES.integer, true), (0, _defineProperty2["default"])(_fieldToAlignRight, _constants.ALL_FIELD_TYPES.real, true), _fieldToAlignRight);
var pinnedClassList = {
  header: 'pinned-columns--header pinned-grid-container',
  rows: 'pinned-columns--rows pinned-grid-container'
};
var unpinnedClassList = {
  header: 'unpinned-columns--header unpinned-grid-container',
  rows: 'unpinned-columns--rows unpinned-grid-container'
};

var Container = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  font-size: 11px;\n  flex-grow: 1;\n  color: ", ";\n  width: 100%;\n  position: relative;\n  .ReactVirtualized__Grid:focus,\n  .ReactVirtualized__Grid:active {\n    outline: 0;\n  }\n  .body-grid {\n    ", "\n  }\n\n  .cell {\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  *:focus {\n    outline: 0;\n  }\n\n  .results-table-wrapper {\n    position: relative;\n    min-height: 100%;\n    max-height: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-grow: 1;\n    overflow: hidden;\n    border-top: none;\n\n    .scroll-in-ui-thread.pinned-columns--header,\n    .scroll-in-ui-thread.unpinned-columns--header {\n      width: 100vw;\n      overflow: hidden;\n      border-bottom: 1px solid ", ";\n      // leave room for scrollbar\n      padding-bottom: ", "px;\n    }\n\n    .scroll-in-ui-thread::after {\n      content: '';\n      height: 100%;\n      left: 0;\n      position: absolute;\n      pointer-events: none;\n      top: 0;\n      width: 100%;\n    }\n\n    .grid-row {\n      position: relative;\n      display: flex;\n      flex-direction: row;\n    }\n    .grid-column {\n      display: flex;\n      flex-direction: column;\n      flex: 1 1 auto;\n    }\n    .pinned-grid-container {\n      flex: 0 0 75px;\n      z-index: 10;\n      position: absolute;\n      left: 0;\n      top: 0;\n      border-right: 2px solid ", ";\n    }\n    .even-row {\n      background-color: ", ";\n    }\n    .odd-row {\n      background-color: ", ";\n    }\n    .cell,\n    .header-cell {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: flex-start;\n      text-align: center;\n      overflow: hidden;\n      // header border is rendered by header container\n      border-bottom: 0;\n      .n-sort-idx {\n        font-size: 9px;\n      }\n    }\n    .cell {\n      border-bottom: 1px solid ", ";\n      border-right: 1px solid ", ";\n      white-space: nowrap;\n      overflow: auto;\n      padding: 0 ", "px;\n      font-size: ", "px;\n\n      .result-link {\n        text-decoration: none;\n      }\n    }\n    .cell.end-cell,\n    .header-cell.end-cell {\n      border-right: none;\n      padding-right: ", "px;\n    }\n    .cell.first-cell,\n    .header-cell.first-cell {\n      padding-left: ", "px;\n    }\n    .cell.bottom-cell {\n      border-bottom: none;\n    }\n    .cell.align-right {\n      align-items: flex-end;\n    }\n  }\n\n  :focus {\n    outline: none;\n  }\n"])), function (props) {
  return props.theme.dataTableTextColor;
}, function (props) {
  return props.theme.modalScrollBar;
}, function (props) {
  return props.theme.cellBorderColor;
}, browserScrollBarWidth, function (props) {
  return props.theme.pinnedGridBorderColor;
}, function (props) {
  return props.theme.evenRowBackground;
}, function (props) {
  return props.theme.oddRowBackground;
}, function (props) {
  return props.theme.cellBorderColor;
}, function (props) {
  return props.theme.cellBorderColor;
}, function (props) {
  return props.theme.cellPaddingSide;
}, function (props) {
  return props.theme.cellFontSize;
}, function (props) {
  return props.theme.cellPaddingSide + props.theme.edgeCellPaddingSide;
}, function (props) {
  return props.theme.cellPaddingSide + props.theme.edgeCellPaddingSide;
});

exports.Container = Container;
var defaultColumnWidth = 200;

var columnWidthFunction = function columnWidthFunction(columns, cellSizeCache, ghost) {
  return function (_ref) {
    var index = _ref.index;
    return (columns[index] || {}).ghost ? ghost : cellSizeCache[columns[index]] || defaultColumnWidth;
  };
};

/*
 * This is an accessor method used to generalize getting a cell from a data row
 */
var getRowCell = function getRowCell(_ref2, formatter) {
  var dataContainer = _ref2.dataContainer,
      columns = _ref2.columns,
      column = _ref2.column,
      colMeta = _ref2.colMeta,
      rowIndex = _ref2.rowIndex,
      sortOrder = _ref2.sortOrder;
  var rowIdx = sortOrder && sortOrder.length ? (0, _lodash["default"])(sortOrder, rowIndex) : rowIndex;
  var type = colMeta[column].type;
  var value = dataContainer.valueAt(rowIdx, columns.indexOf(column));
  return value === null || value === undefined || value === '' ? '' : formatter ? formatter(value) : (0, _utils.parseFieldValue)(value, type);
};

var StyledStatsControl = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  height: ", "px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  position: absolute;\n  top: ", "px;\n  font-family: ", "px;\n  font-size: 12px;\n  color: ", ";\n  background-color: ", ";\n  :hover {\n    cursor: pointer;\n  }\n\n  > div {\n    padding: 0px 24px;\n    display: flex;\n    align-items: center;\n\n    svg {\n      margin-left: 12px;\n      transition: transform 0.5s ease;\n      transform: rotate(", "deg);\n    }\n  }\n"])), function (props) {
  return props.theme.headerStatsControlHeight;
}, function (props) {
  return props.top;
}, function (props) {
  return props.theme.fontFamilyMedium;
}, function (props) {
  return props.theme.activeColor;
}, function (props) {
  return props.theme.headerCellStatsControlBackground;
}, function (props) {
  return props.showStats ? 180 : 0;
});

var StatsControl = function StatsControl(_ref3) {
  var top = _ref3.top,
      showStats = _ref3.showStats,
      toggleShowStats = _ref3.toggleShowStats;
  return /*#__PURE__*/_react["default"].createElement(StyledStatsControl, {
    top: top,
    showStats: showStats
  }, /*#__PURE__*/_react["default"].createElement("div", {
    onClick: toggleShowStats
  }, showStats ? 'Hide Column Stats' : 'Show Column Stats', /*#__PURE__*/_react["default"].createElement(_icons.ArrowDown, {
    height: "18px"
  })));
};

var TableSection = function TableSection(_ref4) {
  var classList = _ref4.classList,
      isPinned = _ref4.isPinned,
      columns = _ref4.columns,
      headerGridProps = _ref4.headerGridProps,
      fixedWidth = _ref4.fixedWidth,
      _ref4$fixedHeight = _ref4.fixedHeight,
      fixedHeight = _ref4$fixedHeight === void 0 ? undefined : _ref4$fixedHeight,
      onScroll = _ref4.onScroll,
      scrollTop = _ref4.scrollTop,
      dataGridProps = _ref4.dataGridProps,
      columnWidth = _ref4.columnWidth,
      _ref4$setGridRef = _ref4.setGridRef,
      setGridRef = _ref4$setGridRef === void 0 ? undefined : _ref4$setGridRef,
      headerCellRender = _ref4.headerCellRender,
      dataCellRender = _ref4.dataCellRender,
      _ref4$scrollLeft = _ref4.scrollLeft,
      scrollLeft = _ref4$scrollLeft === void 0 ? 0 : _ref4$scrollLeft;
  var headerHeight = headerGridProps.height;
  var headerStyle = (0, _react.useMemo)(function () {
    return {
      height: "".concat(headerHeight, "px")
    };
  }, [headerHeight]);
  var contentStyle = (0, _react.useMemo)(function () {
    return {
      top: "".concat(headerHeight, "px")
    };
  }, [headerHeight]);
  return /*#__PURE__*/_react["default"].createElement(_reactVirtualized.AutoSizer, null, function (_ref5) {
    var width = _ref5.width,
        height = _ref5.height;
    var gridDimension = {
      columnCount: columns.length,
      columnWidth: columnWidth,
      width: fixedWidth || width
    };
    var dataGridHeight = fixedHeight || height;
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _classnames2["default"])('scroll-in-ui-thread', classList === null || classList === void 0 ? void 0 : classList.header),
      style: headerStyle
    }, /*#__PURE__*/_react["default"].createElement(_grid["default"], (0, _extends2["default"])({
      cellRenderer: headerCellRender
    }, headerGridProps, gridDimension, {
      height: headerGridProps.height + browserScrollBarWidth,
      scrollLeft: scrollLeft,
      onScroll: onScroll
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _classnames2["default"])('scroll-in-ui-thread', classList === null || classList === void 0 ? void 0 : classList.rows),
      style: contentStyle
    }, /*#__PURE__*/_react["default"].createElement(_grid["default"], (0, _extends2["default"])({
      cellRenderer: dataCellRender
    }, dataGridProps, gridDimension, {
      className: isPinned ? 'pinned-grid' : 'body-grid',
      height: dataGridHeight - headerGridProps.height,
      onScroll: onScroll,
      scrollLeft: scrollLeft,
      scrollTop: scrollTop,
      setGridRef: setGridRef
    }))));
  });
};

exports.TableSection = TableSection;
DataTableFactory.deps = [_headerCell["default"]];

function DataTableFactory(HeaderCell) {
  var DataTable = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(DataTable, _Component);

    var _super = _createSuper(DataTable);

    function DataTable() {
      var _this;

      (0, _classCallCheck2["default"])(this, DataTable);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "pinnedGrid", false);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "unpinnedGrid", false);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        cellSizeCache: {},
        moreOptionsColumn: null,
        showStats: true
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "root", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "columns", function (props) {
        return props.columns;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "pinnedColumns", function (props) {
        return props.pinnedColumns;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "unpinnedColumns", (0, _reselect.createSelector)(_this.columns, _this.pinnedColumns, function (columns, pinnedColumns) {
        return !Array.isArray(pinnedColumns) ? columns : columns.filter(function (c) {
          return !pinnedColumns.includes(c);
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleMoreOptions", function (moreOptionsColumn) {
        return _this.setState({
          moreOptionsColumn: _this.state.moreOptionsColumn === moreOptionsColumn ? null : moreOptionsColumn
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleShowStats", function () {
        return _this.setState({
          showStats: !_this.state.showStats
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getCellSizeCache", function () {
        var _this$props = _this.props,
            _this$props$cellSizeC = _this$props.cellSizeCache,
            propsCache = _this$props$cellSizeC === void 0 ? {} : _this$props$cellSizeC,
            fixedWidth = _this$props.fixedWidth,
            _this$props$pinnedCol = _this$props.pinnedColumns,
            pinnedColumns = _this$props$pinnedCol === void 0 ? [] : _this$props$pinnedCol;

        var unpinnedColumns = _this.unpinnedColumns(_this.props);

        var width = fixedWidth ? fixedWidth : _this.root.current ? _this.root.current.clientWidth : 0; // pin column border is 2 pixel vs 1 pixel

        var adjustWidth = pinnedColumns.length ? width - 1 : width;

        var _ref6 = (0, _cellSize.adjustCellsToContainer)(adjustWidth, propsCache, pinnedColumns, unpinnedColumns),
            cellSizeCache = _ref6.cellSizeCache,
            ghost = _ref6.ghost;

        return {
          cellSizeCache: cellSizeCache,
          ghost: ghost
        };
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "doScaleCellsToWidth", function () {
        _this.setState(_this.getCellSizeCache());
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scaleCellsToWidth", (0, _lodash2["default"])(_this.doScaleCellsToWidth, 300));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderDataCell", function (columns, isPinned, props) {
        return function (cellInfo) {
          var _classnames;

          var columnIndex = cellInfo.columnIndex,
              key = cellInfo.key,
              style = cellInfo.style,
              rowIndex = cellInfo.rowIndex;
          var dataContainer = props.dataContainer,
              colMeta = props.colMeta;
          var column = columns[columnIndex];
          var isGhost = column.ghost;
          var formatter = isGhost ? null : (0, _utils.getColumnFormatter)(colMeta[column]);
          var rowCell = isGhost ? '' : getRowCell(_objectSpread(_objectSpread({}, props), {}, {
            column: column,
            rowIndex: rowIndex
          }), formatter);
          var type = isGhost ? null : colMeta[column].type;
          var lastRowIndex = dataContainer ? dataContainer.numRows() - 1 : 0;
          var endCell = columnIndex === columns.length - 1;
          var firstCell = columnIndex === 0;
          var bottomCell = rowIndex === lastRowIndex;
          var alignRight = fieldToAlignRight[Number(type)];

          var cell = /*#__PURE__*/_react["default"].createElement("div", {
            className: (0, _classnames2["default"])('cell', (_classnames = {}, (0, _defineProperty2["default"])(_classnames, rowIndex % 2 === 0 ? 'even-row' : 'odd-row', true), (0, _defineProperty2["default"])(_classnames, "row-".concat(rowIndex), true), (0, _defineProperty2["default"])(_classnames, 'pinned-cell', isPinned), (0, _defineProperty2["default"])(_classnames, 'first-cell', firstCell), (0, _defineProperty2["default"])(_classnames, 'end-cell', endCell), (0, _defineProperty2["default"])(_classnames, 'bottom-cell', bottomCell), (0, _defineProperty2["default"])(_classnames, 'align-right', alignRight), _classnames)),
            key: key,
            style: style,
            title: isGhost ? undefined : rowCell
          }, "".concat(rowCell).concat(endCell ? '\n' : '\t'));

          return cell;
        };
      });
      return _this;
    }

    (0, _createClass2["default"])(DataTable, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        window.addEventListener('resize', this.scaleCellsToWidth);
        this.scaleCellsToWidth();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (this.props.cellSizeCache !== prevProps.cellSizeCache || this.props.pinnedColumns !== prevProps.pinnedColumns) {
          this.scaleCellsToWidth();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.scaleCellsToWidth); // fix Warning: Can't perform a React state update on an unmounted component

        this.setState = function () {
          return;
        };
      }
    }, {
      key: "renderHeaderCell",
      value: function renderHeaderCell(columns, isPinned, props, toggleMoreOptions, moreOptionsColumn) {
        var _this2 = this;

        return function (cellInfo) {
          return /*#__PURE__*/_react["default"].createElement(HeaderCell, {
            cellInfo: cellInfo,
            key: cellInfo.columnIndex,
            columns: columns,
            isPinned: isPinned,
            showStats: _this2.state.showStats,
            props: props,
            toggleMoreOptions: toggleMoreOptions,
            moreOptionsColumn: moreOptionsColumn
          });
        };
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$props2 = this.props,
            dataContainer = _this$props2.dataContainer,
            _this$props2$pinnedCo = _this$props2.pinnedColumns,
            pinnedColumns = _this$props2$pinnedCo === void 0 ? [] : _this$props2$pinnedCo,
            _this$props2$theme = _this$props2.theme,
            theme = _this$props2$theme === void 0 ? {} : _this$props2$theme,
            fixedWidth = _this$props2.fixedWidth,
            _this$props2$fixedHei = _this$props2.fixedHeight,
            fixedHeight = _this$props2$fixedHei === void 0 ? 0 : _this$props2$fixedHei,
            hasStats = _this$props2.hasStats;
        var unpinnedColumns = this.unpinnedColumns(this.props);
        var _this$state = this.state,
            _this$state$cellSizeC = _this$state.cellSizeCache,
            cellSizeCache = _this$state$cellSizeC === void 0 ? {} : _this$state$cellSizeC,
            moreOptionsColumn = _this$state.moreOptionsColumn,
            ghost = _this$state.ghost,
            showStats = _this$state.showStats;
        var unpinnedColumnsGhost = ghost ? [].concat((0, _toConsumableArray2["default"])(unpinnedColumns), [{
          ghost: true
        }]) : unpinnedColumns;
        var pinnedColumnsWidth = pinnedColumns.reduce(function (acc, val) {
          return acc + (0, _lodash["default"])(cellSizeCache, val, 0);
        }, 0);
        var hasPinnedColumns = Boolean(pinnedColumns.length);
        var _theme$headerRowHeigh = theme.headerRowHeight,
            headerRowHeight = _theme$headerRowHeigh === void 0 ? defaultHeaderRowHeight : _theme$headerRowHeigh,
            _theme$headerStatsCon = theme.headerStatsControlHeight,
            headerStatsControlHeight = _theme$headerStatsCon === void 0 ? defaultHeaderStatsControlHeight : _theme$headerStatsCon,
            _theme$headerRowWStat = theme.headerRowWStatsHeight,
            headerRowWStatsHeight = _theme$headerRowWStat === void 0 ? defaultHeaderRowHeight : _theme$headerRowWStat,
            _theme$rowHeight = theme.rowHeight,
            rowHeight = _theme$rowHeight === void 0 ? defaultRowHeight : _theme$rowHeight;
        var headerGridProps = {
          cellSizeCache: cellSizeCache,
          className: 'header-grid',
          height: !hasStats ? headerRowHeight : showStats ? headerRowWStatsHeight : headerRowHeight + headerStatsControlHeight,
          rowCount: 1,
          rowHeight: !hasStats ? headerRowHeight : showStats ? headerRowWStatsHeight : headerRowHeight + headerStatsControlHeight
        };
        var dataGridProps = {
          cellSizeCache: cellSizeCache,
          overscanColumnCount: overscanColumnCount,
          overscanRowCount: overscanRowCount,
          rowCount: dataContainer ? dataContainer.numRows() : 0,
          rowHeight: rowHeight
        };
        return /*#__PURE__*/_react["default"].createElement(Container, {
          className: "data-table-container",
          ref: this.root
        }, Object.keys(cellSizeCache).length ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactVirtualized.ScrollSync, null, function (_ref7) {
          var _onScroll = _ref7.onScroll,
              scrollLeft = _ref7.scrollLeft,
              scrollTop = _ref7.scrollTop;
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "results-table-wrapper"
          }, hasPinnedColumns && /*#__PURE__*/_react["default"].createElement("div", {
            key: "pinned-columns",
            className: "pinned-columns grid-row"
          }, /*#__PURE__*/_react["default"].createElement(TableSection, {
            classList: pinnedClassList,
            isPinned: true,
            columns: pinnedColumns,
            headerGridProps: headerGridProps,
            fixedWidth: pinnedColumnsWidth,
            onScroll: function onScroll(args) {
              return _onScroll(_objectSpread(_objectSpread({}, args), {}, {
                scrollLeft: scrollLeft
              }));
            },
            scrollTop: scrollTop,
            scrollLeft: scrollLeft,
            dataGridProps: dataGridProps,
            setGridRef: function setGridRef(pinnedGrid) {
              return _this3.pinnedGrid = pinnedGrid;
            },
            columnWidth: columnWidthFunction(pinnedColumns, cellSizeCache),
            headerCellRender: _this3.renderHeaderCell(pinnedColumns, true, _this3.props, _this3.toggleMoreOptions, moreOptionsColumn),
            dataCellRender: _this3.renderDataCell(pinnedColumns, true, _this3.props)
          })), /*#__PURE__*/_react["default"].createElement("div", {
            key: "unpinned-columns",
            style: {
              marginLeft: "".concat(hasPinnedColumns ? "".concat(pinnedColumnsWidth, "px") : '0')
            },
            className: "unpinned-columns grid-column"
          }, /*#__PURE__*/_react["default"].createElement(TableSection, {
            classList: unpinnedClassList,
            isPinned: false,
            columns: unpinnedColumnsGhost,
            headerGridProps: headerGridProps,
            fixedWidth: fixedWidth,
            fixedHeight: fixedHeight,
            onScroll: _onScroll,
            scrollTop: scrollTop,
            scrollLeft: scrollLeft,
            dataGridProps: dataGridProps,
            setGridRef: function setGridRef(unpinnedGrid) {
              return _this3.unpinnedGrid = unpinnedGrid;
            },
            columnWidth: columnWidthFunction(unpinnedColumnsGhost, cellSizeCache, ghost),
            headerCellRender: _this3.renderHeaderCell(unpinnedColumnsGhost, false, _this3.props, _this3.toggleMoreOptions, moreOptionsColumn),
            dataCellRender: _this3.renderDataCell(unpinnedColumnsGhost, false, _this3.props)
          })));
        }), hasStats ? /*#__PURE__*/_react["default"].createElement(StatsControl, {
          top: headerRowHeight,
          showStats: showStats,
          toggleShowStats: this.toggleShowStats
        }) : null) : null);
      }
    }]);
    return DataTable;
  }(_react.Component);

  (0, _defineProperty2["default"])(DataTable, "defaultProps", {
    dataContainer: null,
    pinnedColumns: [],
    colMeta: {},
    cellSizeCache: {},
    sortColumn: {},
    fixedWidth: null,
    fixedHeight: null,
    theme: {},
    hasStats: false
  });
  return (0, _styledComponents.withTheme)(DataTable);
}

var _default = DataTableFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vZGF0YS10YWJsZS9pbmRleC50c3giXSwibmFtZXMiOlsiZGVmYXVsdEhlYWRlclJvd0hlaWdodCIsImRlZmF1bHRIZWFkZXJTdGF0c0NvbnRyb2xIZWlnaHQiLCJkZWZhdWx0Um93SGVpZ2h0Iiwib3ZlcnNjYW5Db2x1bW5Db3VudCIsIm92ZXJzY2FuUm93Q291bnQiLCJicm93c2VyU2Nyb2xsQmFyV2lkdGgiLCJmaWVsZFRvQWxpZ25SaWdodCIsIkFMTF9GSUVMRF9UWVBFUyIsImludGVnZXIiLCJyZWFsIiwicGlubmVkQ2xhc3NMaXN0IiwiaGVhZGVyIiwicm93cyIsInVucGlubmVkQ2xhc3NMaXN0IiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsImRhdGFUYWJsZVRleHRDb2xvciIsIm1vZGFsU2Nyb2xsQmFyIiwiY2VsbEJvcmRlckNvbG9yIiwicGlubmVkR3JpZEJvcmRlckNvbG9yIiwiZXZlblJvd0JhY2tncm91bmQiLCJvZGRSb3dCYWNrZ3JvdW5kIiwiY2VsbFBhZGRpbmdTaWRlIiwiY2VsbEZvbnRTaXplIiwiZWRnZUNlbGxQYWRkaW5nU2lkZSIsImRlZmF1bHRDb2x1bW5XaWR0aCIsImNvbHVtbldpZHRoRnVuY3Rpb24iLCJjb2x1bW5zIiwiY2VsbFNpemVDYWNoZSIsImdob3N0IiwiaW5kZXgiLCJnZXRSb3dDZWxsIiwiZm9ybWF0dGVyIiwiZGF0YUNvbnRhaW5lciIsImNvbHVtbiIsImNvbE1ldGEiLCJyb3dJbmRleCIsInNvcnRPcmRlciIsInJvd0lkeCIsImxlbmd0aCIsInR5cGUiLCJ2YWx1ZSIsInZhbHVlQXQiLCJpbmRleE9mIiwidW5kZWZpbmVkIiwiU3R5bGVkU3RhdHNDb250cm9sIiwiaGVhZGVyU3RhdHNDb250cm9sSGVpZ2h0IiwidG9wIiwiZm9udEZhbWlseU1lZGl1bSIsImFjdGl2ZUNvbG9yIiwiaGVhZGVyQ2VsbFN0YXRzQ29udHJvbEJhY2tncm91bmQiLCJzaG93U3RhdHMiLCJTdGF0c0NvbnRyb2wiLCJ0b2dnbGVTaG93U3RhdHMiLCJUYWJsZVNlY3Rpb24iLCJjbGFzc0xpc3QiLCJpc1Bpbm5lZCIsImhlYWRlckdyaWRQcm9wcyIsImZpeGVkV2lkdGgiLCJmaXhlZEhlaWdodCIsIm9uU2Nyb2xsIiwic2Nyb2xsVG9wIiwiZGF0YUdyaWRQcm9wcyIsImNvbHVtbldpZHRoIiwic2V0R3JpZFJlZiIsImhlYWRlckNlbGxSZW5kZXIiLCJkYXRhQ2VsbFJlbmRlciIsInNjcm9sbExlZnQiLCJoZWFkZXJIZWlnaHQiLCJoZWlnaHQiLCJoZWFkZXJTdHlsZSIsImNvbnRlbnRTdHlsZSIsIndpZHRoIiwiZ3JpZERpbWVuc2lvbiIsImNvbHVtbkNvdW50IiwiZGF0YUdyaWRIZWlnaHQiLCJEYXRhVGFibGVGYWN0b3J5IiwiZGVwcyIsIkhlYWRlckNlbGxGYWN0b3J5IiwiSGVhZGVyQ2VsbCIsIkRhdGFUYWJsZSIsIm1vcmVPcHRpb25zQ29sdW1uIiwicGlubmVkQ29sdW1ucyIsIkFycmF5IiwiaXNBcnJheSIsImZpbHRlciIsImMiLCJpbmNsdWRlcyIsInNldFN0YXRlIiwic3RhdGUiLCJwcm9wc0NhY2hlIiwidW5waW5uZWRDb2x1bW5zIiwicm9vdCIsImN1cnJlbnQiLCJjbGllbnRXaWR0aCIsImFkanVzdFdpZHRoIiwiZ2V0Q2VsbFNpemVDYWNoZSIsImRvU2NhbGVDZWxsc1RvV2lkdGgiLCJjZWxsSW5mbyIsImNvbHVtbkluZGV4Iiwia2V5Iiwic3R5bGUiLCJpc0dob3N0Iiwicm93Q2VsbCIsImxhc3RSb3dJbmRleCIsIm51bVJvd3MiLCJlbmRDZWxsIiwiZmlyc3RDZWxsIiwiYm90dG9tQ2VsbCIsImFsaWduUmlnaHQiLCJOdW1iZXIiLCJjZWxsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjYWxlQ2VsbHNUb1dpZHRoIiwicHJldlByb3BzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZU1vcmVPcHRpb25zIiwiaGFzU3RhdHMiLCJ1bnBpbm5lZENvbHVtbnNHaG9zdCIsInBpbm5lZENvbHVtbnNXaWR0aCIsInJlZHVjZSIsImFjYyIsInZhbCIsImhhc1Bpbm5lZENvbHVtbnMiLCJCb29sZWFuIiwiaGVhZGVyUm93SGVpZ2h0IiwiaGVhZGVyUm93V1N0YXRzSGVpZ2h0Iiwicm93SGVpZ2h0IiwiY2xhc3NOYW1lIiwicm93Q291bnQiLCJPYmplY3QiLCJrZXlzIiwiYXJncyIsInBpbm5lZEdyaWQiLCJyZW5kZXJIZWFkZXJDZWxsIiwicmVuZGVyRGF0YUNlbGwiLCJtYXJnaW5MZWZ0IiwidW5waW5uZWRHcmlkIiwiQ29tcG9uZW50Iiwic29ydENvbHVtbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFJQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsc0JBQXNCLEdBQUcsRUFBL0I7QUFDQSxJQUFNQywrQkFBK0IsR0FBRyxFQUF4QztBQUNBLElBQU1DLGdCQUFnQixHQUFHLEVBQXpCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcsRUFBNUI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxFQUF6QixDLENBQ0E7O0FBQ0EsSUFBTUMscUJBQXFCLEdBQUcsRUFBOUI7QUFDQSxJQUFNQyxpQkFBaUIsa0ZBQ3BCQywyQkFBZ0JDLE9BREksRUFDTSxJQUROLHdEQUVwQkQsMkJBQWdCRSxJQUZJLEVBRUcsSUFGSCxzQkFBdkI7QUFLQSxJQUFNQyxlQUFlLEdBQUc7QUFDdEJDLEVBQUFBLE1BQU0sRUFBRSw4Q0FEYztBQUV0QkMsRUFBQUEsSUFBSSxFQUFFO0FBRmdCLENBQXhCO0FBS0EsSUFBTUMsaUJBQWlCLEdBQUc7QUFDeEJGLEVBQUFBLE1BQU0sRUFBRSxrREFEZ0I7QUFFeEJDLEVBQUFBLElBQUksRUFBRTtBQUZrQixDQUExQjs7QUFLTyxJQUFNRSxT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QUFVLEVBQUUsRUFMUTtBQU1wQmxGLElBQUFBLFVBQVUsRUFBRSxJQU5RO0FBT3BCQyxJQUFBQSxXQUFXLEVBQUUsSUFQTztBQVFwQjVDLElBQUFBLEtBQUssRUFBRSxFQVJhO0FBU3BCdUcsSUFBQUEsUUFBUSxFQUFFO0FBVFUsR0FGa0Q7QUF5UjFFLFNBQU8saUNBQVV0QyxTQUFWLENBQVA7QUFDRDs7ZUFFY0osZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIGNyZWF0ZVJlZiwgdXNlTWVtb30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTY3JvbGxTeW5jLCBBdXRvU2l6ZXIsIE9uU2Nyb2xsUGFyYW1zLCBHcmlkUHJvcHMsIEluZGV4fSBmcm9tICdyZWFjdC12aXJ0dWFsaXplZCc7XG5pbXBvcnQgc3R5bGVkLCB7d2l0aFRoZW1lfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoLmdldCc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJztcbmltcG9ydCB7QXJyb3dEb3dufSBmcm9tICcuLi9pY29ucyc7XG5cbmltcG9ydCB7Q2VsbFNpemVDYWNoZX0gZnJvbSAnLi9jZWxsLXNpemUnO1xuXG5pbXBvcnQgR3JpZCBmcm9tICcuL2dyaWQnO1xuaW1wb3J0IEhlYWRlckNlbGxGYWN0b3J5IGZyb20gJy4vaGVhZGVyLWNlbGwnO1xuXG5pbXBvcnQge0NvbE1ldGF9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuaW1wb3J0IHtwYXJzZUZpZWxkVmFsdWUsIGdldENvbHVtbkZvcm1hdHRlciwgRGF0YUNvbnRhaW5lckludGVyZmFjZX0gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5pbXBvcnQge2FkanVzdENlbGxzVG9Db250YWluZXJ9IGZyb20gJy4vY2VsbC1zaXplJztcblxuaW1wb3J0IHtBTExfRklFTERfVFlQRVN9IGZyb20gJ0BrZXBsZXIuZ2wvY29uc3RhbnRzJztcblxuY29uc3QgZGVmYXVsdEhlYWRlclJvd0hlaWdodCA9IDU1O1xuY29uc3QgZGVmYXVsdEhlYWRlclN0YXRzQ29udHJvbEhlaWdodCA9IDQwO1xuY29uc3QgZGVmYXVsdFJvd0hlaWdodCA9IDMyO1xuY29uc3Qgb3ZlcnNjYW5Db2x1bW5Db3VudCA9IDEwO1xuY29uc3Qgb3ZlcnNjYW5Sb3dDb3VudCA9IDEwO1xuLy8gVGhlIGRlZmF1bHQgc2Nyb2xsYmFyIHdpZHRoIGNhbiByYW5nZSBhbnl3aGVyZSBmcm9tIDEycHggdG8gMTdweFxuY29uc3QgYnJvd3NlclNjcm9sbEJhcldpZHRoID0gMTc7XG5jb25zdCBmaWVsZFRvQWxpZ25SaWdodCA9IHtcbiAgW0FMTF9GSUVMRF9UWVBFUy5pbnRlZ2VyXTogdHJ1ZSxcbiAgW0FMTF9GSUVMRF9UWVBFUy5yZWFsXTogdHJ1ZVxufTtcblxuY29uc3QgcGlubmVkQ2xhc3NMaXN0ID0ge1xuICBoZWFkZXI6ICdwaW5uZWQtY29sdW1ucy0taGVhZGVyIHBpbm5lZC1ncmlkLWNvbnRhaW5lcicsXG4gIHJvd3M6ICdwaW5uZWQtY29sdW1ucy0tcm93cyBwaW5uZWQtZ3JpZC1jb250YWluZXInXG59O1xuXG5jb25zdCB1bnBpbm5lZENsYXNzTGlzdCA9IHtcbiAgaGVhZGVyOiAndW5waW5uZWQtY29sdW1ucy0taGVhZGVyIHVucGlubmVkLWdyaWQtY29udGFpbmVyJyxcbiAgcm93czogJ3VucGlubmVkLWNvbHVtbnMtLXJvd3MgdW5waW5uZWQtZ3JpZC1jb250YWluZXInXG59O1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRhdGFUYWJsZVRleHRDb2xvcn07XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC5SZWFjdFZpcnR1YWxpemVkX19HcmlkOmZvY3VzLFxuICAuUmVhY3RWaXJ0dWFsaXplZF9fR3JpZDphY3RpdmUge1xuICAgIG91dGxpbmU6IDA7XG4gIH1cbiAgLmJvZHktZ3JpZCB7XG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tb2RhbFNjcm9sbEJhcn1cbiAgfVxuXG4gIC5jZWxsIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gICo6Zm9jdXMge1xuICAgIG91dGxpbmU6IDA7XG4gIH1cblxuICAucmVzdWx0cy10YWJsZS13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItdG9wOiBub25lO1xuXG4gICAgLnNjcm9sbC1pbi11aS10aHJlYWQucGlubmVkLWNvbHVtbnMtLWhlYWRlcixcbiAgICAuc2Nyb2xsLWluLXVpLXRocmVhZC51bnBpbm5lZC1jb2x1bW5zLS1oZWFkZXIge1xuICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNlbGxCb3JkZXJDb2xvcn07XG4gICAgICAvLyBsZWF2ZSByb29tIGZvciBzY3JvbGxiYXJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAke2Jyb3dzZXJTY3JvbGxCYXJXaWR0aH1weDtcbiAgICB9XG5cbiAgICAuc2Nyb2xsLWluLXVpLXRocmVhZDo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB0b3A6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuZ3JpZC1yb3cge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuICAgIC5ncmlkLWNvbHVtbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIH1cbiAgICAucGlubmVkLWdyaWQtY29udGFpbmVyIHtcbiAgICAgIGZsZXg6IDAgMCA3NXB4O1xuICAgICAgei1pbmRleDogMTA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5waW5uZWRHcmlkQm9yZGVyQ29sb3J9O1xuICAgIH1cbiAgICAuZXZlbi1yb3cge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ldmVuUm93QmFja2dyb3VuZH07XG4gICAgfVxuICAgIC5vZGQtcm93IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUub2RkUm93QmFja2dyb3VuZH07XG4gICAgfVxuICAgIC5jZWxsLFxuICAgIC5oZWFkZXItY2VsbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAvLyBoZWFkZXIgYm9yZGVyIGlzIHJlbmRlcmVkIGJ5IGhlYWRlciBjb250YWluZXJcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAubi1zb3J0LWlkeCB7XG4gICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuY2VsbCB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jZWxsQm9yZGVyQ29sb3J9O1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jZWxsQm9yZGVyQ29sb3J9O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgcGFkZGluZzogMCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNlbGxQYWRkaW5nU2lkZX1weDtcbiAgICAgIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jZWxsRm9udFNpemV9cHg7XG5cbiAgICAgIC5yZXN1bHQtbGluayB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLmNlbGwuZW5kLWNlbGwsXG4gICAgLmhlYWRlci1jZWxsLmVuZC1jZWxsIHtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY2VsbFBhZGRpbmdTaWRlICsgcHJvcHMudGhlbWUuZWRnZUNlbGxQYWRkaW5nU2lkZX1weDtcbiAgICB9XG4gICAgLmNlbGwuZmlyc3QtY2VsbCxcbiAgICAuaGVhZGVyLWNlbGwuZmlyc3QtY2VsbCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY2VsbFBhZGRpbmdTaWRlICsgcHJvcHMudGhlbWUuZWRnZUNlbGxQYWRkaW5nU2lkZX1weDtcbiAgICB9XG4gICAgLmNlbGwuYm90dG9tLWNlbGwge1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gICAgLmNlbGwuYWxpZ24tcmlnaHQge1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIH1cbiAgfVxuXG4gIDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgZGVmYXVsdENvbHVtbldpZHRoID0gMjAwO1xuXG5leHBvcnQgdHlwZSBTb3J0Q29sdW1uID0ge1xuICBjb2x1bW4/OiBzdHJpbmc7XG4gIG1vZGU/OiBzdHJpbmc7XG59O1xuXG5jb25zdCBjb2x1bW5XaWR0aEZ1bmN0aW9uID0gKGNvbHVtbnMsIGNlbGxTaXplQ2FjaGUsIGdob3N0PykgPT4gKHtpbmRleH0pID0+IHtcbiAgcmV0dXJuIChjb2x1bW5zW2luZGV4XSB8fCB7fSkuZ2hvc3QgPyBnaG9zdCA6IGNlbGxTaXplQ2FjaGVbY29sdW1uc1tpbmRleF1dIHx8IGRlZmF1bHRDb2x1bW5XaWR0aDtcbn07XG5cbmludGVyZmFjZSBHZXRSb3dDZWxsUHJvcHMge1xuICBkYXRhQ29udGFpbmVyOiBEYXRhQ29udGFpbmVySW50ZXJmYWNlO1xuICBjb2x1bW5zOiAoc3RyaW5nICYge2dob3N0PzogYm9vbGVhbn0pW107XG4gIGNvbHVtbjogc3RyaW5nO1xuICBjb2xNZXRhO1xuICByb3dJbmRleDogbnVtYmVyO1xuICBzb3J0T3JkZXI/OiBudW1iZXJbXSB8IG51bGw7XG59XG5cbi8qXG4gKiBUaGlzIGlzIGFuIGFjY2Vzc29yIG1ldGhvZCB1c2VkIHRvIGdlbmVyYWxpemUgZ2V0dGluZyBhIGNlbGwgZnJvbSBhIGRhdGEgcm93XG4gKi9cbmNvbnN0IGdldFJvd0NlbGwgPSAoXG4gIHtkYXRhQ29udGFpbmVyLCBjb2x1bW5zLCBjb2x1bW4sIGNvbE1ldGEsIHJvd0luZGV4LCBzb3J0T3JkZXJ9OiBHZXRSb3dDZWxsUHJvcHMsXG4gIGZvcm1hdHRlclxuKSA9PiB7XG4gIGNvbnN0IHJvd0lkeCA9IHNvcnRPcmRlciAmJiBzb3J0T3JkZXIubGVuZ3RoID8gZ2V0KHNvcnRPcmRlciwgcm93SW5kZXgpIDogcm93SW5kZXg7XG4gIGNvbnN0IHt0eXBlfSA9IGNvbE1ldGFbY29sdW1uXTtcblxuICBsZXQgdmFsdWUgPSBkYXRhQ29udGFpbmVyLnZhbHVlQXQocm93SWR4LCBjb2x1bW5zLmluZGV4T2YoY29sdW1uKSk7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJ1xuICAgID8gJydcbiAgICA6IGZvcm1hdHRlclxuICAgID8gZm9ybWF0dGVyKHZhbHVlKVxuICAgIDogcGFyc2VGaWVsZFZhbHVlKHZhbHVlLCB0eXBlKTtcbn07XG5cbnR5cGUgU3RhdHNDb250cm9sUHJvcHMgPSB7XG4gIHRvcDogbnVtYmVyO1xuICBzaG93U3RhdHM/OiBib29sZWFuO1xufTtcblxuY29uc3QgU3R5bGVkU3RhdHNDb250cm9sID0gc3R5bGVkLmRpdjxTdGF0c0NvbnRyb2xQcm9wcz5gXG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXJTdGF0c0NvbnRyb2xIZWlnaHR9cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAke3Byb3BzID0+IHByb3BzLnRvcH1weDtcbiAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udEZhbWlseU1lZGl1bX1weDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5hY3RpdmVDb2xvcn07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyQ2VsbFN0YXRzQ29udHJvbEJhY2tncm91bmR9O1xuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gID4gZGl2IHtcbiAgICBwYWRkaW5nOiAwcHggMjRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBzdmcge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoJHtwcm9wcyA9PiAocHJvcHMuc2hvd1N0YXRzID8gMTgwIDogMCl9ZGVnKTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFN0YXRzQ29udHJvbCA9ICh7XG4gIHRvcCxcbiAgc2hvd1N0YXRzLFxuICB0b2dnbGVTaG93U3RhdHNcbn06IHtcbiAgdG9wOiBudW1iZXI7XG4gIHNob3dTdGF0cz86IGJvb2xlYW47XG4gIHRvZ2dsZVNob3dTdGF0czogKCkgPT4gdm9pZDtcbn0pID0+IChcbiAgPFN0eWxlZFN0YXRzQ29udHJvbCB0b3A9e3RvcH0gc2hvd1N0YXRzPXtzaG93U3RhdHN9PlxuICAgIDxkaXYgb25DbGljaz17dG9nZ2xlU2hvd1N0YXRzfT5cbiAgICAgIHtzaG93U3RhdHMgPyAnSGlkZSBDb2x1bW4gU3RhdHMnIDogJ1Nob3cgQ29sdW1uIFN0YXRzJ31cbiAgICAgIDxBcnJvd0Rvd24gaGVpZ2h0PVwiMThweFwiIC8+XG4gICAgPC9kaXY+XG4gIDwvU3R5bGVkU3RhdHNDb250cm9sPlxuKTtcblxuaW50ZXJmYWNlIFRhYmxlU2VjdGlvblByb3BzIHtcbiAgY2xhc3NMaXN0Pzoge1xuICAgIGhlYWRlcjogc3RyaW5nO1xuICAgIHJvd3M6IHN0cmluZztcbiAgfTtcbiAgaXNQaW5uZWQ/OiBib29sZWFuO1xuICBjb2x1bW5zOiAoc3RyaW5nICYge2dob3N0PzogYm9vbGVhbn0pW107XG4gIGhlYWRlckdyaWRQcm9wcz87XG4gIGZpeGVkV2lkdGg/OiBudW1iZXI7XG4gIGZpeGVkSGVpZ2h0PzogbnVtYmVyO1xuICBvblNjcm9sbD86IChwYXJhbXM6IE9uU2Nyb2xsUGFyYW1zKSA9PiB2b2lkO1xuICBzY3JvbGxUb3A/OiBudW1iZXI7XG4gIGRhdGFHcmlkUHJvcHM6IHtcbiAgICByb3dIZWlnaHQ6IG51bWJlciB8ICgocGFyYW1zOiBJbmRleCkgPT4gbnVtYmVyKTtcbiAgICByb3dDb3VudDogbnVtYmVyO1xuICB9ICYgUGFydGlhbDxHcmlkUHJvcHM+O1xuICBjb2x1bW5XaWR0aD87XG4gIHNldEdyaWRSZWY/OiBGdW5jdGlvbjtcbiAgaGVhZGVyQ2VsbFJlbmRlcj87XG4gIGRhdGFDZWxsUmVuZGVyPztcbiAgc2Nyb2xsTGVmdD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IFRhYmxlU2VjdGlvbiA9ICh7XG4gIGNsYXNzTGlzdCxcbiAgaXNQaW5uZWQsXG4gIGNvbHVtbnMsXG4gIGhlYWRlckdyaWRQcm9wcyxcbiAgZml4ZWRXaWR0aCxcbiAgZml4ZWRIZWlnaHQgPSB1bmRlZmluZWQsXG4gIG9uU2Nyb2xsLFxuICBzY3JvbGxUb3AsXG4gIGRhdGFHcmlkUHJvcHMsXG4gIGNvbHVtbldpZHRoLFxuICBzZXRHcmlkUmVmID0gdW5kZWZpbmVkLFxuICBoZWFkZXJDZWxsUmVuZGVyLFxuICBkYXRhQ2VsbFJlbmRlcixcbiAgc2Nyb2xsTGVmdCA9IDBcbn06IFRhYmxlU2VjdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IGhlYWRlckhlaWdodCA9IGhlYWRlckdyaWRQcm9wcy5oZWlnaHQ7XG5cbiAgY29uc3QgaGVhZGVyU3R5bGUgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICBoZWlnaHQ6IGAke2hlYWRlckhlaWdodH1weGBcbiAgICB9KSxcbiAgICBbaGVhZGVySGVpZ2h0XVxuICApO1xuICBjb25zdCBjb250ZW50U3R5bGUgPSB1c2VNZW1vKFxuICAgICgpID0+ICh7XG4gICAgICB0b3A6IGAke2hlYWRlckhlaWdodH1weGBcbiAgICB9KSxcbiAgICBbaGVhZGVySGVpZ2h0XVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPEF1dG9TaXplcj5cbiAgICAgIHsoe3dpZHRoLCBoZWlnaHR9KSA9PiB7XG4gICAgICAgIGNvbnN0IGdyaWREaW1lbnNpb24gPSB7XG4gICAgICAgICAgY29sdW1uQ291bnQ6IGNvbHVtbnMubGVuZ3RoLFxuICAgICAgICAgIGNvbHVtbldpZHRoLFxuICAgICAgICAgIHdpZHRoOiBmaXhlZFdpZHRoIHx8IHdpZHRoXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGRhdGFHcmlkSGVpZ2h0ID0gZml4ZWRIZWlnaHQgfHwgaGVpZ2h0O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdzY3JvbGwtaW4tdWktdGhyZWFkJywgY2xhc3NMaXN0Py5oZWFkZXIpfVxuICAgICAgICAgICAgICBzdHlsZT17aGVhZGVyU3R5bGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgY2VsbFJlbmRlcmVyPXtoZWFkZXJDZWxsUmVuZGVyfVxuICAgICAgICAgICAgICAgIHsuLi5oZWFkZXJHcmlkUHJvcHN9XG4gICAgICAgICAgICAgICAgey4uLmdyaWREaW1lbnNpb259XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtoZWFkZXJHcmlkUHJvcHMuaGVpZ2h0ICsgYnJvd3NlclNjcm9sbEJhcldpZHRofVxuICAgICAgICAgICAgICAgIHNjcm9sbExlZnQ9e3Njcm9sbExlZnR9XG4gICAgICAgICAgICAgICAgb25TY3JvbGw9e29uU2Nyb2xsfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnc2Nyb2xsLWluLXVpLXRocmVhZCcsIGNsYXNzTGlzdD8ucm93cyl9XG4gICAgICAgICAgICAgIHN0eWxlPXtjb250ZW50U3R5bGV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxHcmlkXG4gICAgICAgICAgICAgICAgY2VsbFJlbmRlcmVyPXtkYXRhQ2VsbFJlbmRlcn1cbiAgICAgICAgICAgICAgICB7Li4uZGF0YUdyaWRQcm9wc31cbiAgICAgICAgICAgICAgICB7Li4uZ3JpZERpbWVuc2lvbn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2lzUGlubmVkID8gJ3Bpbm5lZC1ncmlkJyA6ICdib2R5LWdyaWQnfVxuICAgICAgICAgICAgICAgIGhlaWdodD17ZGF0YUdyaWRIZWlnaHQgLSBoZWFkZXJHcmlkUHJvcHMuaGVpZ2h0fVxuICAgICAgICAgICAgICAgIG9uU2Nyb2xsPXtvblNjcm9sbH1cbiAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0PXtzY3JvbGxMZWZ0fVxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcD17c2Nyb2xsVG9wfVxuICAgICAgICAgICAgICAgIHNldEdyaWRSZWY9e3NldEdyaWRSZWZ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgIH19XG4gICAgPC9BdXRvU2l6ZXI+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFUYWJsZVByb3BzIHtcbiAgZGF0YUlkPzogc3RyaW5nO1xuICBoYXNTdGF0cz86IGJvb2xlYW47XG4gIGNlbGxTaXplQ2FjaGU/OiBDZWxsU2l6ZUNhY2hlO1xuICBwaW5uZWRDb2x1bW5zPzogc3RyaW5nW107XG4gIGNvbHVtbnM6IChzdHJpbmcgJiB7Z2hvc3Q/OiBib29sZWFufSlbXTtcbiAgZml4ZWRXaWR0aD86IG51bWJlcjtcbiAgdGhlbWU/OiBhbnk7XG4gIGRhdGFDb250YWluZXI6IERhdGFDb250YWluZXJJbnRlcmZhY2U7XG4gIGZpeGVkSGVpZ2h0PzogbnVtYmVyO1xuICBjb2xNZXRhOiBDb2xNZXRhO1xuICBzb3J0Q29sdW1uOiBTb3J0Q29sdW1uO1xuICBzb3J0VGFibGVDb2x1bW46IChjb2x1bW46IHN0cmluZywgbW9kZT86IHN0cmluZykgPT4gdm9pZDtcbiAgcGluVGFibGVDb2x1bW46IChjb2x1bW46IHN0cmluZykgPT4gdm9pZDtcbiAgc2V0Q29sdW1uRGlzcGxheUZvcm1hdDogKGZvcm1hdHM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9KSA9PiB2b2lkO1xuICBjb3B5VGFibGVDb2x1bW46IChjb2x1bW46IHN0cmluZykgPT4gdm9pZDtcbiAgc29ydE9yZGVyPzogbnVtYmVyW10gfCBudWxsO1xuICBzaG93U3RhdHM/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgRGF0YVRhYmxlU3RhdGUge1xuICBjZWxsU2l6ZUNhY2hlPzogQ2VsbFNpemVDYWNoZTtcbiAgbW9yZU9wdGlvbnNDb2x1bW4/O1xuICBnaG9zdD87XG4gIHNob3dTdGF0cz86IGJvb2xlYW47XG59XG5cbkRhdGFUYWJsZUZhY3RvcnkuZGVwcyA9IFtIZWFkZXJDZWxsRmFjdG9yeV07XG5mdW5jdGlvbiBEYXRhVGFibGVGYWN0b3J5KEhlYWRlckNlbGw6IFJldHVyblR5cGU8dHlwZW9mIEhlYWRlckNlbGxGYWN0b3J5Pikge1xuICBjbGFzcyBEYXRhVGFibGUgZXh0ZW5kcyBDb21wb25lbnQ8RGF0YVRhYmxlUHJvcHMsIERhdGFUYWJsZVN0YXRlPiB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIGRhdGFDb250YWluZXI6IG51bGwsXG4gICAgICBwaW5uZWRDb2x1bW5zOiBbXSxcbiAgICAgIGNvbE1ldGE6IHt9LFxuICAgICAgY2VsbFNpemVDYWNoZToge30sXG4gICAgICBzb3J0Q29sdW1uOiB7fSxcbiAgICAgIGZpeGVkV2lkdGg6IG51bGwsXG4gICAgICBmaXhlZEhlaWdodDogbnVsbCxcbiAgICAgIHRoZW1lOiB7fSxcbiAgICAgIGhhc1N0YXRzOiBmYWxzZVxuICAgIH07XG5cbiAgICBwaW5uZWRHcmlkID0gZmFsc2U7XG4gICAgdW5waW5uZWRHcmlkID0gZmFsc2U7XG5cbiAgICBzdGF0ZTogRGF0YVRhYmxlU3RhdGUgPSB7XG4gICAgICBjZWxsU2l6ZUNhY2hlOiB7fSxcbiAgICAgIG1vcmVPcHRpb25zQ29sdW1uOiBudWxsLFxuICAgICAgc2hvd1N0YXRzOiB0cnVlXG4gICAgfTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2NhbGVDZWxsc1RvV2lkdGgpO1xuICAgICAgdGhpcy5zY2FsZUNlbGxzVG9XaWR0aCgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5wcm9wcy5jZWxsU2l6ZUNhY2hlICE9PSBwcmV2UHJvcHMuY2VsbFNpemVDYWNoZSB8fFxuICAgICAgICB0aGlzLnByb3BzLnBpbm5lZENvbHVtbnMgIT09IHByZXZQcm9wcy5waW5uZWRDb2x1bW5zXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5zY2FsZUNlbGxzVG9XaWR0aCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2NhbGVDZWxsc1RvV2lkdGgpO1xuICAgICAgLy8gZml4IFdhcm5pbmc6IENhbid0IHBlcmZvcm0gYSBSZWFjdCBzdGF0ZSB1cGRhdGUgb24gYW4gdW5tb3VudGVkIGNvbXBvbmVudFxuICAgICAgdGhpcy5zZXRTdGF0ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByb290ID0gY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xuICAgIGNvbHVtbnMgPSAocHJvcHM6IERhdGFUYWJsZVByb3BzKSA9PiBwcm9wcy5jb2x1bW5zO1xuICAgIHBpbm5lZENvbHVtbnMgPSAocHJvcHM6IERhdGFUYWJsZVByb3BzKSA9PiBwcm9wcy5waW5uZWRDb2x1bW5zO1xuICAgIHVucGlubmVkQ29sdW1ucyA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuY29sdW1ucywgdGhpcy5waW5uZWRDb2x1bW5zLCAoY29sdW1ucywgcGlubmVkQ29sdW1ucykgPT5cbiAgICAgICFBcnJheS5pc0FycmF5KHBpbm5lZENvbHVtbnMpID8gY29sdW1ucyA6IGNvbHVtbnMuZmlsdGVyKGMgPT4gIXBpbm5lZENvbHVtbnMuaW5jbHVkZXMoYykpXG4gICAgKTtcblxuICAgIHRvZ2dsZU1vcmVPcHRpb25zID0gbW9yZU9wdGlvbnNDb2x1bW4gPT5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtb3JlT3B0aW9uc0NvbHVtbjpcbiAgICAgICAgICB0aGlzLnN0YXRlLm1vcmVPcHRpb25zQ29sdW1uID09PSBtb3JlT3B0aW9uc0NvbHVtbiA/IG51bGwgOiBtb3JlT3B0aW9uc0NvbHVtblxuICAgICAgfSk7XG4gICAgdG9nZ2xlU2hvd1N0YXRzID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7c2hvd1N0YXRzOiAhdGhpcy5zdGF0ZS5zaG93U3RhdHN9KTtcbiAgICBnZXRDZWxsU2l6ZUNhY2hlID0gKCkgPT4ge1xuICAgICAgY29uc3Qge2NlbGxTaXplQ2FjaGU6IHByb3BzQ2FjaGUgPSB7fSwgZml4ZWRXaWR0aCwgcGlubmVkQ29sdW1ucyA9IFtdfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB1bnBpbm5lZENvbHVtbnMgPSB0aGlzLnVucGlubmVkQ29sdW1ucyh0aGlzLnByb3BzKTtcblxuICAgICAgY29uc3Qgd2lkdGggPSBmaXhlZFdpZHRoID8gZml4ZWRXaWR0aCA6IHRoaXMucm9vdC5jdXJyZW50ID8gdGhpcy5yb290LmN1cnJlbnQuY2xpZW50V2lkdGggOiAwO1xuXG4gICAgICAvLyBwaW4gY29sdW1uIGJvcmRlciBpcyAyIHBpeGVsIHZzIDEgcGl4ZWxcbiAgICAgIGNvbnN0IGFkanVzdFdpZHRoID0gcGlubmVkQ29sdW1ucy5sZW5ndGggPyB3aWR0aCAtIDEgOiB3aWR0aDtcbiAgICAgIGNvbnN0IHtjZWxsU2l6ZUNhY2hlLCBnaG9zdH0gPSBhZGp1c3RDZWxsc1RvQ29udGFpbmVyKFxuICAgICAgICBhZGp1c3RXaWR0aCxcbiAgICAgICAgcHJvcHNDYWNoZSxcbiAgICAgICAgcGlubmVkQ29sdW1ucyxcbiAgICAgICAgdW5waW5uZWRDb2x1bW5zXG4gICAgICApIGFzIHtjZWxsU2l6ZUNhY2hlOiB7fTsgZ2hvc3Q6IG51bWJlciB8IG51bGwgfCB1bmRlZmluZWR9O1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBjZWxsU2l6ZUNhY2hlLFxuICAgICAgICBnaG9zdFxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgZG9TY2FsZUNlbGxzVG9XaWR0aCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5nZXRDZWxsU2l6ZUNhY2hlKCkpO1xuICAgIH07XG5cbiAgICBzY2FsZUNlbGxzVG9XaWR0aCA9IGRlYm91bmNlKHRoaXMuZG9TY2FsZUNlbGxzVG9XaWR0aCwgMzAwKTtcblxuICAgIHJlbmRlckRhdGFDZWxsID0gKGNvbHVtbnMsIGlzUGlubmVkLCBwcm9wczogRGF0YVRhYmxlUHJvcHMpID0+IHtcbiAgICAgIHJldHVybiBjZWxsSW5mbyA9PiB7XG4gICAgICAgIGNvbnN0IHtjb2x1bW5JbmRleCwga2V5LCBzdHlsZSwgcm93SW5kZXh9ID0gY2VsbEluZm87XG4gICAgICAgIGNvbnN0IHtkYXRhQ29udGFpbmVyLCBjb2xNZXRhfSA9IHByb3BzO1xuICAgICAgICBjb25zdCBjb2x1bW4gPSBjb2x1bW5zW2NvbHVtbkluZGV4XTtcbiAgICAgICAgY29uc3QgaXNHaG9zdCA9IGNvbHVtbi5naG9zdDtcblxuICAgICAgICBjb25zdCBmb3JtYXR0ZXIgPSBpc0dob3N0ID8gbnVsbCA6IGdldENvbHVtbkZvcm1hdHRlcihjb2xNZXRhW2NvbHVtbl0pO1xuICAgICAgICBjb25zdCByb3dDZWxsID0gaXNHaG9zdCA/ICcnIDogZ2V0Um93Q2VsbCh7Li4ucHJvcHMsIGNvbHVtbiwgcm93SW5kZXh9LCBmb3JtYXR0ZXIpO1xuICAgICAgICBjb25zdCB0eXBlID0gaXNHaG9zdCA/IG51bGwgOiBjb2xNZXRhW2NvbHVtbl0udHlwZTtcblxuICAgICAgICBjb25zdCBsYXN0Um93SW5kZXggPSBkYXRhQ29udGFpbmVyID8gZGF0YUNvbnRhaW5lci5udW1Sb3dzKCkgLSAxIDogMDtcblxuICAgICAgICBjb25zdCBlbmRDZWxsID0gY29sdW1uSW5kZXggPT09IGNvbHVtbnMubGVuZ3RoIC0gMTtcbiAgICAgICAgY29uc3QgZmlyc3RDZWxsID0gY29sdW1uSW5kZXggPT09IDA7XG4gICAgICAgIGNvbnN0IGJvdHRvbUNlbGwgPSByb3dJbmRleCA9PT0gbGFzdFJvd0luZGV4O1xuICAgICAgICBjb25zdCBhbGlnblJpZ2h0ID0gZmllbGRUb0FsaWduUmlnaHRbTnVtYmVyKHR5cGUpXTtcblxuICAgICAgICBjb25zdCBjZWxsID0gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnY2VsbCcsIHtcbiAgICAgICAgICAgICAgW3Jvd0luZGV4ICUgMiA9PT0gMCA/ICdldmVuLXJvdycgOiAnb2RkLXJvdyddOiB0cnVlLFxuICAgICAgICAgICAgICBbYHJvdy0ke3Jvd0luZGV4fWBdOiB0cnVlLFxuICAgICAgICAgICAgICAncGlubmVkLWNlbGwnOiBpc1Bpbm5lZCxcbiAgICAgICAgICAgICAgJ2ZpcnN0LWNlbGwnOiBmaXJzdENlbGwsXG4gICAgICAgICAgICAgICdlbmQtY2VsbCc6IGVuZENlbGwsXG4gICAgICAgICAgICAgICdib3R0b20tY2VsbCc6IGJvdHRvbUNlbGwsXG4gICAgICAgICAgICAgICdhbGlnbi1yaWdodCc6IGFsaWduUmlnaHRcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICB0aXRsZT17aXNHaG9zdCA/IHVuZGVmaW5lZCA6IHJvd0NlbGx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2Ake3Jvd0NlbGx9JHtlbmRDZWxsID8gJ1xcbicgOiAnXFx0J31gfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBjZWxsO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmVuZGVySGVhZGVyQ2VsbChjb2x1bW5zLCBpc1Bpbm5lZCwgcHJvcHMsIHRvZ2dsZU1vcmVPcHRpb25zLCBtb3JlT3B0aW9uc0NvbHVtbikge1xuICAgICAgcmV0dXJuIGNlbGxJbmZvID0+IChcbiAgICAgICAgPEhlYWRlckNlbGxcbiAgICAgICAgICBjZWxsSW5mbz17Y2VsbEluZm99XG4gICAgICAgICAga2V5PXtjZWxsSW5mby5jb2x1bW5JbmRleH1cbiAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxuICAgICAgICAgIGlzUGlubmVkPXtpc1Bpbm5lZH1cbiAgICAgICAgICBzaG93U3RhdHM9e3RoaXMuc3RhdGUuc2hvd1N0YXRzfVxuICAgICAgICAgIHByb3BzPXtwcm9wc31cbiAgICAgICAgICB0b2dnbGVNb3JlT3B0aW9ucz17dG9nZ2xlTW9yZU9wdGlvbnN9XG4gICAgICAgICAgbW9yZU9wdGlvbnNDb2x1bW49e21vcmVPcHRpb25zQ29sdW1ufVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBkYXRhQ29udGFpbmVyLFxuICAgICAgICBwaW5uZWRDb2x1bW5zID0gW10sXG4gICAgICAgIHRoZW1lID0ge30sXG4gICAgICAgIGZpeGVkV2lkdGgsXG4gICAgICAgIGZpeGVkSGVpZ2h0ID0gMCxcbiAgICAgICAgaGFzU3RhdHNcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgdW5waW5uZWRDb2x1bW5zID0gdGhpcy51bnBpbm5lZENvbHVtbnModGhpcy5wcm9wcyk7XG5cbiAgICAgIGNvbnN0IHtjZWxsU2l6ZUNhY2hlID0ge30sIG1vcmVPcHRpb25zQ29sdW1uLCBnaG9zdCwgc2hvd1N0YXRzfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCB1bnBpbm5lZENvbHVtbnNHaG9zdCA9IGdob3N0XG4gICAgICAgID8gWy4uLnVucGlubmVkQ29sdW1ucywge2dob3N0OiB0cnVlfSBhcyBzdHJpbmcgJiB7Z2hvc3Q6IGJvb2xlYW59XVxuICAgICAgICA6IHVucGlubmVkQ29sdW1ucztcbiAgICAgIGNvbnN0IHBpbm5lZENvbHVtbnNXaWR0aCA9IHBpbm5lZENvbHVtbnMucmVkdWNlKFxuICAgICAgICAoYWNjLCB2YWwpID0+IGFjYyArIChnZXQoY2VsbFNpemVDYWNoZSwgdmFsLCAwKSBhcyBudW1iZXIpLFxuICAgICAgICAwXG4gICAgICApO1xuXG4gICAgICBjb25zdCBoYXNQaW5uZWRDb2x1bW5zID0gQm9vbGVhbihwaW5uZWRDb2x1bW5zLmxlbmd0aCk7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGhlYWRlclJvd0hlaWdodCA9IGRlZmF1bHRIZWFkZXJSb3dIZWlnaHQsXG4gICAgICAgIGhlYWRlclN0YXRzQ29udHJvbEhlaWdodCA9IGRlZmF1bHRIZWFkZXJTdGF0c0NvbnRyb2xIZWlnaHQsXG4gICAgICAgIGhlYWRlclJvd1dTdGF0c0hlaWdodCA9IGRlZmF1bHRIZWFkZXJSb3dIZWlnaHQsXG4gICAgICAgIHJvd0hlaWdodCA9IGRlZmF1bHRSb3dIZWlnaHRcbiAgICAgIH0gPSB0aGVtZTtcblxuICAgICAgY29uc3QgaGVhZGVyR3JpZFByb3BzID0ge1xuICAgICAgICBjZWxsU2l6ZUNhY2hlLFxuICAgICAgICBjbGFzc05hbWU6ICdoZWFkZXItZ3JpZCcsXG4gICAgICAgIGhlaWdodDogIWhhc1N0YXRzXG4gICAgICAgICAgPyBoZWFkZXJSb3dIZWlnaHRcbiAgICAgICAgICA6IHNob3dTdGF0c1xuICAgICAgICAgID8gaGVhZGVyUm93V1N0YXRzSGVpZ2h0XG4gICAgICAgICAgOiBoZWFkZXJSb3dIZWlnaHQgKyBoZWFkZXJTdGF0c0NvbnRyb2xIZWlnaHQsXG4gICAgICAgIHJvd0NvdW50OiAxLFxuICAgICAgICByb3dIZWlnaHQ6ICFoYXNTdGF0c1xuICAgICAgICAgID8gaGVhZGVyUm93SGVpZ2h0XG4gICAgICAgICAgOiBzaG93U3RhdHNcbiAgICAgICAgICA/IGhlYWRlclJvd1dTdGF0c0hlaWdodFxuICAgICAgICAgIDogaGVhZGVyUm93SGVpZ2h0ICsgaGVhZGVyU3RhdHNDb250cm9sSGVpZ2h0XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBkYXRhR3JpZFByb3BzID0ge1xuICAgICAgICBjZWxsU2l6ZUNhY2hlLFxuICAgICAgICBvdmVyc2NhbkNvbHVtbkNvdW50LFxuICAgICAgICBvdmVyc2NhblJvd0NvdW50LFxuICAgICAgICByb3dDb3VudDogZGF0YUNvbnRhaW5lciA/IGRhdGFDb250YWluZXIubnVtUm93cygpIDogMCxcbiAgICAgICAgcm93SGVpZ2h0XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImRhdGEtdGFibGUtY29udGFpbmVyXCIgcmVmPXt0aGlzLnJvb3R9PlxuICAgICAgICAgIHtPYmplY3Qua2V5cyhjZWxsU2l6ZUNhY2hlKS5sZW5ndGggPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8U2Nyb2xsU3luYz5cbiAgICAgICAgICAgICAgICB7KHtvblNjcm9sbCwgc2Nyb2xsTGVmdCwgc2Nyb2xsVG9wfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRzLXRhYmxlLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7aGFzUGlubmVkQ29sdW1ucyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cInBpbm5lZC1jb2x1bW5zXCIgY2xhc3NOYW1lPVwicGlubmVkLWNvbHVtbnMgZ3JpZC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlU2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdD17cGlubmVkQ2xhc3NMaXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUGlubmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17cGlubmVkQ29sdW1uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJHcmlkUHJvcHM9e2hlYWRlckdyaWRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXhlZFdpZHRoPXtwaW5uZWRDb2x1bW5zV2lkdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TY3JvbGw9e2FyZ3MgPT4gb25TY3JvbGwoey4uLmFyZ3MsIHNjcm9sbExlZnR9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A9e3Njcm9sbFRvcH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0PXtzY3JvbGxMZWZ0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFHcmlkUHJvcHM9e2RhdGFHcmlkUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0R3JpZFJlZj17cGlubmVkR3JpZCA9PiAodGhpcy5waW5uZWRHcmlkID0gcGlubmVkR3JpZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg9e2NvbHVtbldpZHRoRnVuY3Rpb24ocGlubmVkQ29sdW1ucywgY2VsbFNpemVDYWNoZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyQ2VsbFJlbmRlcj17dGhpcy5yZW5kZXJIZWFkZXJDZWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGlubmVkQ29sdW1ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVNb3JlT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcmVPcHRpb25zQ29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQ2VsbFJlbmRlcj17dGhpcy5yZW5kZXJEYXRhQ2VsbChwaW5uZWRDb2x1bW5zLCB0cnVlLCB0aGlzLnByb3BzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwidW5waW5uZWQtY29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBgJHtoYXNQaW5uZWRDb2x1bW5zID8gYCR7cGlubmVkQ29sdW1uc1dpZHRofXB4YCA6ICcwJ31gXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidW5waW5uZWQtY29sdW1ucyBncmlkLWNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlU2VjdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q9e3VucGlubmVkQ2xhc3NMaXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc1Bpbm5lZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e3VucGlubmVkQ29sdW1uc0dob3N0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJHcmlkUHJvcHM9e2hlYWRlckdyaWRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWRXaWR0aD17Zml4ZWRXaWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWRIZWlnaHQ9e2ZpeGVkSGVpZ2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblNjcm9sbD17b25TY3JvbGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcD17c2Nyb2xsVG9wfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0PXtzY3JvbGxMZWZ0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhR3JpZFByb3BzPXtkYXRhR3JpZFByb3BzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRHcmlkUmVmPXt1bnBpbm5lZEdyaWQgPT4gKHRoaXMudW5waW5uZWRHcmlkID0gdW5waW5uZWRHcmlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uV2lkdGg9e2NvbHVtbldpZHRoRnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5waW5uZWRDb2x1bW5zR2hvc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbFNpemVDYWNoZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJDZWxsUmVuZGVyPXt0aGlzLnJlbmRlckhlYWRlckNlbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5waW5uZWRDb2x1bW5zR2hvc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU1vcmVPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vcmVPcHRpb25zQ29sdW1uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFDZWxsUmVuZGVyPXt0aGlzLnJlbmRlckRhdGFDZWxsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVucGlubmVkQ29sdW1uc0dob3N0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA8L1Njcm9sbFN5bmM+XG4gICAgICAgICAgICAgIHtoYXNTdGF0cyA/IChcbiAgICAgICAgICAgICAgICA8U3RhdHNDb250cm9sXG4gICAgICAgICAgICAgICAgICB0b3A9e2hlYWRlclJvd0hlaWdodH1cbiAgICAgICAgICAgICAgICAgIHNob3dTdGF0cz17c2hvd1N0YXRzfVxuICAgICAgICAgICAgICAgICAgdG9nZ2xlU2hvd1N0YXRzPXt0aGlzLnRvZ2dsZVNob3dTdGF0c31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHdpdGhUaGVtZShEYXRhVGFibGUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhVGFibGVGYWN0b3J5O1xuIl19