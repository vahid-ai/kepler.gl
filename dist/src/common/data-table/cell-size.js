"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderedSize = renderedSize;
exports.adjustCellsToContainer = adjustCellsToContainer;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _document = _interopRequireDefault(require("global/document"));

var _utils = require("@kepler.gl/utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var MIN_GHOST_CELL_SIZE = 200;
var MIN_CELL_SIZE = 45; // first column have padding on the left

var EDGE_COLUMN_PADDING = 10; // in case cell content is small, column name is big, we allow max empty space to
// be added to min cell width in order to show column name

var MAX_EMPTY_COLUMN_SPACE = 60;

/**
 * Measure rows and column content to determine min width for each column
 * @param {RenderSizeParam} param0
 */
function renderedSize(_ref) {
  var _ref$text = _ref.text,
      dataContainer = _ref$text.dataContainer,
      column = _ref$text.column,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'string' : _ref$type,
      colIdx = _ref.colIdx,
      _ref$numRowsToCalcula = _ref.numRowsToCalculate,
      numRowsToCalculate = _ref$numRowsToCalcula === void 0 ? 10 : _ref$numRowsToCalcula,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 12 : _ref$fontSize,
      _ref$font = _ref.font,
      font = _ref$font === void 0 ? 'Lato' : _ref$font,
      _ref$cellPadding = _ref.cellPadding,
      cellPadding = _ref$cellPadding === void 0 ? 40 : _ref$cellPadding,
      _ref$maxCellSize = _ref.maxCellSize,
      maxCellSize = _ref$maxCellSize === void 0 ? 500 : _ref$maxCellSize,
      _ref$maxHeaderSize = _ref.maxHeaderSize,
      maxHeaderSize = _ref$maxHeaderSize === void 0 ? 500 : _ref$maxHeaderSize,
      _ref$minCellSize = _ref.minCellSize,
      minCellSize = _ref$minCellSize === void 0 ? MIN_CELL_SIZE : _ref$minCellSize,
      _ref$optionsButton = _ref.optionsButton,
      optionsButton = _ref$optionsButton === void 0 ? 44 : _ref$optionsButton;

  if (!_document["default"]) {
    return {
      row: 0,
      header: 0
    };
  }

  var textCanvas = _document["default"].createElement('canvas');

  _document["default"].body.appendChild(textCanvas);

  var context = textCanvas.getContext('2d');
  context.font = [fontSize, font].join('px ');
  var rowsToSample = (0, _toConsumableArray2["default"])(Array(numRowsToCalculate)).map(function () {
    return Math.floor(Math.random() * (dataContainer.numRows() - 1));
  }); // If we have less than 10 rows, lets measure all of them

  if (dataContainer.numRows() <= numRowsToCalculate) {
    rowsToSample = Array.from(Array(dataContainer.numRows()).keys());
  }

  var rowWidth = Math.max.apply(Math, (0, _toConsumableArray2["default"])(rowsToSample.map(function (rowIdx) {
    var value = (0, _utils.parseFieldValue)(dataContainer.valueAt(rowIdx, colIdx), type); // measuring large text cause slow performance

    if (value.length > maxCellSize) {
      return maxCellSize;
    }

    var textWidth = context.measureText(value).width;
    return Math.ceil(textWidth) + cellPadding;
  }))); // header cell only has left padding

  var headerWidth = Math.ceil(context.measureText(column).width) + cellPadding / 2 + optionsButton; // min row width is measured by cell content

  var minRowWidth = minCellSize + cellPadding; // min header width is measured by cell

  var minHeaderWidth = minCellSize + cellPadding / 2 + optionsButton;
  var clampedRowWidth = clamp(minRowWidth, maxCellSize, rowWidth);
  var clampedHeaderWidth = clamp(minHeaderWidth, maxHeaderSize, headerWidth); // cleanup

  textCanvas.parentElement.removeChild(textCanvas);
  return {
    row: clampedRowWidth,
    header: clampedHeaderWidth
  };
}

function clamp(min, max, value) {
  return Math.max(Math.min(max, value), min);
}

function getColumnOrder() {
  var pinnedColumns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var unpinnedColumns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return [].concat((0, _toConsumableArray2["default"])(pinnedColumns), (0, _toConsumableArray2["default"])(unpinnedColumns));
} // If total min cell size is bigger than containerWidth adjust column


function getMinCellSize(cellSizeCache) {
  return Object.keys(cellSizeCache).reduce(function (accu, col) {
    return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, col, cellSizeCache[col].row > cellSizeCache[col].header ? cellSizeCache[col].row : // if row is smaller than header, use the smaller of MAX_EMPTY_COLUMN_SPACE + row width and header
    Math.min(cellSizeCache[col].header, cellSizeCache[col].row + MAX_EMPTY_COLUMN_SPACE)));
  }, {});
}

function getSizeSum(sizeCache, key) {
  return Object.keys(sizeCache).reduce(function (acc, val) {
    return acc + (key ? sizeCache[val][key] : sizeCache[val]);
  }, 0);
}
/**
 * Expand cell to fit both row and header, if there is still room left,
 * expand last cell to fit the entire width of the container
 * @param {CellSizeCache} cellSizeCache
 * @param {string[]} columnOrder
 * @param {number} containerWidth
 * @param {number} roomToFill
 */


function expandCellSize(cellSizeCache, columnOrder, containerWidth, roomToFill) {
  var remaining = roomToFill;
  var expandedCellSize = columnOrder.reduce(function (accu, col) {
    var size = cellSizeCache[col].row;

    if (cellSizeCache[col].row < cellSizeCache[col].header && remaining > 0) {
      // if we are cutting off the header, expand to fit it
      size = cellSizeCache[col].header - cellSizeCache[col].row < remaining ? cellSizeCache[col].header : cellSizeCache[col].row + remaining;
      remaining -= size - cellSizeCache[col].row;
    }

    return _objectSpread(_objectSpread({}, accu), {}, (0, _defineProperty2["default"])({}, col, size));
  }, {});
  var ghost = null;

  if (remaining > 0 && remaining < MIN_GHOST_CELL_SIZE) {
    // expand last cell
    var lastCell = columnOrder[columnOrder.length - 1];
    expandedCellSize[lastCell] += remaining;
  } else if (remaining >= MIN_GHOST_CELL_SIZE) {
    // if too much left add a ghost cell
    ghost = remaining;
  }

  return {
    cellSizeCache: expandedCellSize,
    ghost: ghost
  };
}

function addPaddingToFirstColumn(cellSizeCache) {
  var columnOrder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var firstCol = columnOrder[0];

  if (firstCol && cellSizeCache[firstCol]) {
    return _objectSpread(_objectSpread({}, cellSizeCache), {}, (0, _defineProperty2["default"])({}, firstCol, {
      header: cellSizeCache[firstCol].header + EDGE_COLUMN_PADDING,
      row: cellSizeCache[firstCol].row + EDGE_COLUMN_PADDING
    }));
  }

  return cellSizeCache;
}
/**
 * Adjust cell size based on container width
 * @param {number} containerWidth
 * @param {CellSizeCache} cellSizeCache
 * @param {string[]} pinnedColumns
 * @param {string[]} unpinnedColumns
 */


function adjustCellsToContainer(containerWidth, cellSizeCache, pinnedColumns, unpinnedColumns) {
  var columnOrder = getColumnOrder(pinnedColumns, unpinnedColumns);
  var paddedCellSize = addPaddingToFirstColumn(cellSizeCache, columnOrder);
  var minRowSum = getSizeSum(paddedCellSize, 'row');

  if (minRowSum >= containerWidth) {
    // we apply the min Width to all cells
    return {
      cellSizeCache: getMinCellSize(paddedCellSize)
    };
  } // if we have some room to expand


  return expandCellSize(paddedCellSize, columnOrder, containerWidth, containerWidth - minRowSum);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vZGF0YS10YWJsZS9jZWxsLXNpemUudHMiXSwibmFtZXMiOlsiTUlOX0dIT1NUX0NFTExfU0laRSIsIk1JTl9DRUxMX1NJWkUiLCJFREdFX0NPTFVNTl9QQURESU5HIiwiTUFYX0VNUFRZX0NPTFVNTl9TUEFDRSIsInJlbmRlcmVkU2l6ZSIsInRleHQiLCJkYXRhQ29udGFpbmVyIiwiY29sdW1uIiwidHlwZSIsImNvbElkeCIsIm51bVJvd3NUb0NhbGN1bGF0ZSIsImZvbnRTaXplIiwiZm9udCIsImNlbGxQYWRkaW5nIiwibWF4Q2VsbFNpemUiLCJtYXhIZWFkZXJTaXplIiwibWluQ2VsbFNpemUiLCJvcHRpb25zQnV0dG9uIiwiZG9jdW1lbnQiLCJyb3ciLCJoZWFkZXIiLCJ0ZXh0Q2FudmFzIiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNvbnRleHQiLCJnZXRDb250ZXh0Iiwiam9pbiIsInJvd3NUb1NhbXBsZSIsIkFycmF5IiwibWFwIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibnVtUm93cyIsImZyb20iLCJrZXlzIiwicm93V2lkdGgiLCJtYXgiLCJyb3dJZHgiLCJ2YWx1ZSIsInZhbHVlQXQiLCJsZW5ndGgiLCJ0ZXh0V2lkdGgiLCJtZWFzdXJlVGV4dCIsIndpZHRoIiwiY2VpbCIsImhlYWRlcldpZHRoIiwibWluUm93V2lkdGgiLCJtaW5IZWFkZXJXaWR0aCIsImNsYW1wZWRSb3dXaWR0aCIsImNsYW1wIiwiY2xhbXBlZEhlYWRlcldpZHRoIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwibWluIiwiZ2V0Q29sdW1uT3JkZXIiLCJwaW5uZWRDb2x1bW5zIiwidW5waW5uZWRDb2x1bW5zIiwiZ2V0TWluQ2VsbFNpemUiLCJjZWxsU2l6ZUNhY2hlIiwiT2JqZWN0IiwicmVkdWNlIiwiYWNjdSIsImNvbCIsImdldFNpemVTdW0iLCJzaXplQ2FjaGUiLCJrZXkiLCJhY2MiLCJ2YWwiLCJleHBhbmRDZWxsU2l6ZSIsImNvbHVtbk9yZGVyIiwiY29udGFpbmVyV2lkdGgiLCJyb29tVG9GaWxsIiwicmVtYWluaW5nIiwiZXhwYW5kZWRDZWxsU2l6ZSIsInNpemUiLCJnaG9zdCIsImxhc3RDZWxsIiwiYWRkUGFkZGluZ1RvRmlyc3RDb2x1bW4iLCJmaXJzdENvbCIsImFkanVzdENlbGxzVG9Db250YWluZXIiLCJwYWRkZWRDZWxsU2l6ZSIsIm1pblJvd1N1bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLG1CQUEyQixHQUFHLEdBQXBDO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLEVBQXRCLEMsQ0FDQTs7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxFQUE1QixDLENBRUE7QUFDQTs7QUFDQSxJQUFNQyxzQkFBc0IsR0FBRyxFQUEvQjs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQyxZQUFULE9BWTRDO0FBQUEsdUJBWGpEQyxJQVdpRDtBQUFBLE1BWDFDQyxhQVcwQyxhQVgxQ0EsYUFXMEM7QUFBQSxNQVgzQkMsTUFXMkIsYUFYM0JBLE1BVzJCO0FBQUEsdUJBVmpEQyxJQVVpRDtBQUFBLE1BVmpEQSxJQVVpRCwwQkFWMUMsUUFVMEM7QUFBQSxNQVRqREMsTUFTaUQsUUFUakRBLE1BU2lEO0FBQUEsbUNBUmpEQyxrQkFRaUQ7QUFBQSxNQVJqREEsa0JBUWlELHNDQVI1QixFQVE0QjtBQUFBLDJCQVBqREMsUUFPaUQ7QUFBQSxNQVBqREEsUUFPaUQsOEJBUHRDLEVBT3NDO0FBQUEsdUJBTmpEQyxJQU1pRDtBQUFBLE1BTmpEQSxJQU1pRCwwQkFOMUMsTUFNMEM7QUFBQSw4QkFMakRDLFdBS2lEO0FBQUEsTUFMakRBLFdBS2lELGlDQUxuQyxFQUttQztBQUFBLDhCQUpqREMsV0FJaUQ7QUFBQSxNQUpqREEsV0FJaUQsaUNBSm5DLEdBSW1DO0FBQUEsZ0NBSGpEQyxhQUdpRDtBQUFBLE1BSGpEQSxh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QUFjLEdBQUdILHVCQUF1QixDQUFDbkIsYUFBRCxFQUFnQlcsV0FBaEIsQ0FBOUM7QUFDQSxNQUFNWSxTQUFTLEdBQUdsQixVQUFVLENBQUNpQixjQUFELEVBQWlCLEtBQWpCLENBQTVCOztBQUVBLE1BQUlDLFNBQVMsSUFBSVgsY0FBakIsRUFBaUM7QUFDL0I7QUFDQSxXQUFPO0FBQUNaLE1BQUFBLGFBQWEsRUFBRUQsY0FBYyxDQUFDdUIsY0FBRDtBQUE5QixLQUFQO0FBQ0QsR0FSRCxDQVNBOzs7QUFDQSxTQUFPWixjQUFjLENBQUNZLGNBQUQsRUFBaUJYLFdBQWpCLEVBQThCQyxjQUE5QixFQUE4Q0EsY0FBYyxHQUFHVyxTQUEvRCxDQUFyQjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IGRvY3VtZW50IGZyb20gJ2dsb2JhbC9kb2N1bWVudCc7XG5pbXBvcnQge0RhdGFDb250YWluZXJJbnRlcmZhY2UsIHBhcnNlRmllbGRWYWx1ZX0gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5cbmNvbnN0IE1JTl9HSE9TVF9DRUxMX1NJWkU6IG51bWJlciA9IDIwMDtcbmNvbnN0IE1JTl9DRUxMX1NJWkUgPSA0NTtcbi8vIGZpcnN0IGNvbHVtbiBoYXZlIHBhZGRpbmcgb24gdGhlIGxlZnRcbmNvbnN0IEVER0VfQ09MVU1OX1BBRERJTkcgPSAxMDtcblxuLy8gaW4gY2FzZSBjZWxsIGNvbnRlbnQgaXMgc21hbGwsIGNvbHVtbiBuYW1lIGlzIGJpZywgd2UgYWxsb3cgbWF4IGVtcHR5IHNwYWNlIHRvXG4vLyBiZSBhZGRlZCB0byBtaW4gY2VsbCB3aWR0aCBpbiBvcmRlciB0byBzaG93IGNvbHVtbiBuYW1lXG5jb25zdCBNQVhfRU1QVFlfQ09MVU1OX1NQQUNFID0gNjA7XG5cbnR5cGUgUmVuZGVyU2l6ZVBhcmFtID0ge1xuICB0ZXh0OiB7ZGF0YUNvbnRhaW5lcjogRGF0YUNvbnRhaW5lckludGVyZmFjZTsgY29sdW1uOiBzdHJpbmd9O1xuICB0eXBlPzogc3RyaW5nO1xuICBjb2xJZHg6IG51bWJlcjtcbiAgbnVtUm93c1RvQ2FsY3VsYXRlPzogbnVtYmVyO1xuICBmb250U2l6ZT86IG51bWJlcjtcbiAgZm9udD86IHN0cmluZztcbiAgY2VsbFBhZGRpbmc/OiBudW1iZXI7XG4gIG1heENlbGxTaXplPzogbnVtYmVyO1xuICBtYXhIZWFkZXJTaXplPzogbnVtYmVyO1xuICBtaW5DZWxsU2l6ZT86IG51bWJlcjtcbiAgb3B0aW9uc0J1dHRvbj86IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIENlbGxTaXplQ2FjaGUgPSB7XG4gIFtrZXk6IHN0cmluZ106IHtcbiAgICByb3c6IG51bWJlcjtcbiAgICBoZWFkZXI6IG51bWJlcjtcbiAgfTtcbn07XG5cbi8qKlxuICogTWVhc3VyZSByb3dzIGFuZCBjb2x1bW4gY29udGVudCB0byBkZXRlcm1pbmUgbWluIHdpZHRoIGZvciBlYWNoIGNvbHVtblxuICogQHBhcmFtIHtSZW5kZXJTaXplUGFyYW19IHBhcmFtMFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyZWRTaXplKHtcbiAgdGV4dDoge2RhdGFDb250YWluZXIsIGNvbHVtbn0sXG4gIHR5cGUgPSAnc3RyaW5nJyxcbiAgY29sSWR4LFxuICBudW1Sb3dzVG9DYWxjdWxhdGUgPSAxMCxcbiAgZm9udFNpemUgPSAxMixcbiAgZm9udCA9ICdMYXRvJyxcbiAgY2VsbFBhZGRpbmcgPSA0MCxcbiAgbWF4Q2VsbFNpemUgPSA1MDAsXG4gIG1heEhlYWRlclNpemUgPSA1MDAsXG4gIG1pbkNlbGxTaXplID0gTUlOX0NFTExfU0laRSxcbiAgb3B0aW9uc0J1dHRvbiA9IDQ0XG59OiBSZW5kZXJTaXplUGFyYW0pOiB7cm93OiBudW1iZXI7IGhlYWRlcjogbnVtYmVyfSB7XG4gIGlmICghZG9jdW1lbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcm93OiAwLFxuICAgICAgaGVhZGVyOiAwXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHRleHRDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0Q2FudmFzKTtcbiAgY29uc3QgY29udGV4dCA9IHRleHRDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY29udGV4dC5mb250ID0gW2ZvbnRTaXplLCBmb250XS5qb2luKCdweCAnKTtcblxuICBsZXQgcm93c1RvU2FtcGxlID0gWy4uLkFycmF5KG51bVJvd3NUb0NhbGN1bGF0ZSldLm1hcCgoKSA9PlxuICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChkYXRhQ29udGFpbmVyLm51bVJvd3MoKSAtIDEpKVxuICApO1xuXG4gIC8vIElmIHdlIGhhdmUgbGVzcyB0aGFuIDEwIHJvd3MsIGxldHMgbWVhc3VyZSBhbGwgb2YgdGhlbVxuICBpZiAoZGF0YUNvbnRhaW5lci5udW1Sb3dzKCkgPD0gbnVtUm93c1RvQ2FsY3VsYXRlKSB7XG4gICAgcm93c1RvU2FtcGxlID0gQXJyYXkuZnJvbShBcnJheShkYXRhQ29udGFpbmVyLm51bVJvd3MoKSkua2V5cygpKTtcbiAgfVxuICBjb25zdCByb3dXaWR0aCA9IE1hdGgubWF4KFxuICAgIC4uLnJvd3NUb1NhbXBsZS5tYXAocm93SWR4ID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VGaWVsZFZhbHVlKGRhdGFDb250YWluZXIudmFsdWVBdChyb3dJZHgsIGNvbElkeCksIHR5cGUpO1xuICAgICAgLy8gbWVhc3VyaW5nIGxhcmdlIHRleHQgY2F1c2Ugc2xvdyBwZXJmb3JtYW5jZVxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IG1heENlbGxTaXplKSB7XG4gICAgICAgIHJldHVybiBtYXhDZWxsU2l6ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRleHRXaWR0aCA9IGNvbnRleHQubWVhc3VyZVRleHQodmFsdWUpLndpZHRoO1xuICAgICAgcmV0dXJuIE1hdGguY2VpbCh0ZXh0V2lkdGgpICsgY2VsbFBhZGRpbmc7XG4gICAgfSlcbiAgKTtcbiAgLy8gaGVhZGVyIGNlbGwgb25seSBoYXMgbGVmdCBwYWRkaW5nXG4gIGNvbnN0IGhlYWRlcldpZHRoID1cbiAgICBNYXRoLmNlaWwoY29udGV4dC5tZWFzdXJlVGV4dChjb2x1bW4pLndpZHRoKSArIGNlbGxQYWRkaW5nIC8gMiArIG9wdGlvbnNCdXR0b247XG5cbiAgLy8gbWluIHJvdyB3aWR0aCBpcyBtZWFzdXJlZCBieSBjZWxsIGNvbnRlbnRcbiAgY29uc3QgbWluUm93V2lkdGggPSBtaW5DZWxsU2l6ZSArIGNlbGxQYWRkaW5nO1xuICAvLyBtaW4gaGVhZGVyIHdpZHRoIGlzIG1lYXN1cmVkIGJ5IGNlbGxcbiAgY29uc3QgbWluSGVhZGVyV2lkdGggPSBtaW5DZWxsU2l6ZSArIGNlbGxQYWRkaW5nIC8gMiArIG9wdGlvbnNCdXR0b247XG5cbiAgY29uc3QgY2xhbXBlZFJvd1dpZHRoID0gY2xhbXAobWluUm93V2lkdGgsIG1heENlbGxTaXplLCByb3dXaWR0aCk7XG4gIGNvbnN0IGNsYW1wZWRIZWFkZXJXaWR0aCA9IGNsYW1wKG1pbkhlYWRlcldpZHRoLCBtYXhIZWFkZXJTaXplLCBoZWFkZXJXaWR0aCk7XG5cbiAgLy8gY2xlYW51cFxuICB0ZXh0Q2FudmFzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGV4dENhbnZhcyk7XG5cbiAgcmV0dXJuIHtcbiAgICByb3c6IGNsYW1wZWRSb3dXaWR0aCxcbiAgICBoZWFkZXI6IGNsYW1wZWRIZWFkZXJXaWR0aFxuICB9O1xufVxuXG5mdW5jdGlvbiBjbGFtcChtaW4sIG1heCwgdmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKG1heCwgdmFsdWUpLCBtaW4pO1xufVxuXG5mdW5jdGlvbiBnZXRDb2x1bW5PcmRlcihwaW5uZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdLCB1bnBpbm5lZENvbHVtbnM6IHN0cmluZ1tdID0gW10pIHtcbiAgcmV0dXJuIFsuLi5waW5uZWRDb2x1bW5zLCAuLi51bnBpbm5lZENvbHVtbnNdO1xufVxuXG4vLyBJZiB0b3RhbCBtaW4gY2VsbCBzaXplIGlzIGJpZ2dlciB0aGFuIGNvbnRhaW5lcldpZHRoIGFkanVzdCBjb2x1bW5cbmZ1bmN0aW9uIGdldE1pbkNlbGxTaXplKGNlbGxTaXplQ2FjaGU6IENlbGxTaXplQ2FjaGUpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGNlbGxTaXplQ2FjaGUpLnJlZHVjZShcbiAgICAoYWNjdSwgY29sKSA9PiAoe1xuICAgICAgLi4uYWNjdSxcbiAgICAgIC8vIGlmIHJvdyBpcyBsYXJnZXIgdGhhbiBoZWFkZXIsIHVzZSByb3dcbiAgICAgIFtjb2xdOlxuICAgICAgICBjZWxsU2l6ZUNhY2hlW2NvbF0ucm93ID4gY2VsbFNpemVDYWNoZVtjb2xdLmhlYWRlclxuICAgICAgICAgID8gY2VsbFNpemVDYWNoZVtjb2xdLnJvd1xuICAgICAgICAgIDogLy8gaWYgcm93IGlzIHNtYWxsZXIgdGhhbiBoZWFkZXIsIHVzZSB0aGUgc21hbGxlciBvZiBNQVhfRU1QVFlfQ09MVU1OX1NQQUNFICsgcm93IHdpZHRoIGFuZCBoZWFkZXJcbiAgICAgICAgICAgIE1hdGgubWluKGNlbGxTaXplQ2FjaGVbY29sXS5oZWFkZXIsIGNlbGxTaXplQ2FjaGVbY29sXS5yb3cgKyBNQVhfRU1QVFlfQ09MVU1OX1NQQUNFKVxuICAgIH0pLFxuICAgIHt9XG4gICk7XG59XG5cbmZ1bmN0aW9uIGdldFNpemVTdW0oc2l6ZUNhY2hlLCBrZXkpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHNpemVDYWNoZSkucmVkdWNlKFxuICAgIChhY2MsIHZhbCkgPT4gYWNjICsgKGtleSA/IHNpemVDYWNoZVt2YWxdW2tleV0gOiBzaXplQ2FjaGVbdmFsXSksXG4gICAgMFxuICApO1xufVxuXG4vKipcbiAqIEV4cGFuZCBjZWxsIHRvIGZpdCBib3RoIHJvdyBhbmQgaGVhZGVyLCBpZiB0aGVyZSBpcyBzdGlsbCByb29tIGxlZnQsXG4gKiBleHBhbmQgbGFzdCBjZWxsIHRvIGZpdCB0aGUgZW50aXJlIHdpZHRoIG9mIHRoZSBjb250YWluZXJcbiAqIEBwYXJhbSB7Q2VsbFNpemVDYWNoZX0gY2VsbFNpemVDYWNoZVxuICogQHBhcmFtIHtzdHJpbmdbXX0gY29sdW1uT3JkZXJcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb250YWluZXJXaWR0aFxuICogQHBhcmFtIHtudW1iZXJ9IHJvb21Ub0ZpbGxcbiAqL1xuZnVuY3Rpb24gZXhwYW5kQ2VsbFNpemUoXG4gIGNlbGxTaXplQ2FjaGU6IENlbGxTaXplQ2FjaGUsXG4gIGNvbHVtbk9yZGVyOiBzdHJpbmdbXSxcbiAgY29udGFpbmVyV2lkdGg6IG51bWJlcixcbiAgcm9vbVRvRmlsbDogbnVtYmVyXG4pOiB7XG4gIGNlbGxTaXplQ2FjaGU6IENlbGxTaXplQ2FjaGU7XG4gIGdob3N0OiBudW1iZXIgfCBudWxsO1xufSB7XG4gIGxldCByZW1haW5pbmcgPSByb29tVG9GaWxsO1xuXG4gIGNvbnN0IGV4cGFuZGVkQ2VsbFNpemUgPSBjb2x1bW5PcmRlci5yZWR1Y2UoKGFjY3UsIGNvbCkgPT4ge1xuICAgIGxldCBzaXplID0gY2VsbFNpemVDYWNoZVtjb2xdLnJvdztcbiAgICBpZiAoY2VsbFNpemVDYWNoZVtjb2xdLnJvdyA8IGNlbGxTaXplQ2FjaGVbY29sXS5oZWFkZXIgJiYgcmVtYWluaW5nID4gMCkge1xuICAgICAgLy8gaWYgd2UgYXJlIGN1dHRpbmcgb2ZmIHRoZSBoZWFkZXIsIGV4cGFuZCB0byBmaXQgaXRcbiAgICAgIHNpemUgPVxuICAgICAgICBjZWxsU2l6ZUNhY2hlW2NvbF0uaGVhZGVyIC0gY2VsbFNpemVDYWNoZVtjb2xdLnJvdyA8IHJlbWFpbmluZ1xuICAgICAgICAgID8gY2VsbFNpemVDYWNoZVtjb2xdLmhlYWRlclxuICAgICAgICAgIDogY2VsbFNpemVDYWNoZVtjb2xdLnJvdyArIHJlbWFpbmluZztcbiAgICAgIHJlbWFpbmluZyAtPSBzaXplIC0gY2VsbFNpemVDYWNoZVtjb2xdLnJvdztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uYWNjdSxcbiAgICAgIFtjb2xdOiBzaXplXG4gICAgfTtcbiAgfSwge30pO1xuXG4gIGxldCBnaG9zdDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIGlmIChyZW1haW5pbmcgPiAwICYmIHJlbWFpbmluZyA8IE1JTl9HSE9TVF9DRUxMX1NJWkUpIHtcbiAgICAvLyBleHBhbmQgbGFzdCBjZWxsXG4gICAgY29uc3QgbGFzdENlbGwgPSBjb2x1bW5PcmRlcltjb2x1bW5PcmRlci5sZW5ndGggLSAxXTtcbiAgICBleHBhbmRlZENlbGxTaXplW2xhc3RDZWxsXSArPSByZW1haW5pbmc7XG4gIH0gZWxzZSBpZiAocmVtYWluaW5nID49IE1JTl9HSE9TVF9DRUxMX1NJWkUpIHtcbiAgICAvLyBpZiB0b28gbXVjaCBsZWZ0IGFkZCBhIGdob3N0IGNlbGxcbiAgICBnaG9zdCA9IHJlbWFpbmluZztcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2VsbFNpemVDYWNoZTogZXhwYW5kZWRDZWxsU2l6ZSxcbiAgICBnaG9zdFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRQYWRkaW5nVG9GaXJzdENvbHVtbihcbiAgY2VsbFNpemVDYWNoZTogQ2VsbFNpemVDYWNoZSxcbiAgY29sdW1uT3JkZXI6IHN0cmluZ1tdID0gW11cbik6IENlbGxTaXplQ2FjaGUge1xuICBjb25zdCBmaXJzdENvbCA9IGNvbHVtbk9yZGVyWzBdO1xuXG4gIGlmIChmaXJzdENvbCAmJiBjZWxsU2l6ZUNhY2hlW2ZpcnN0Q29sXSkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5jZWxsU2l6ZUNhY2hlLFxuICAgICAgW2ZpcnN0Q29sXToge1xuICAgICAgICBoZWFkZXI6IGNlbGxTaXplQ2FjaGVbZmlyc3RDb2xdLmhlYWRlciArIEVER0VfQ09MVU1OX1BBRERJTkcsXG4gICAgICAgIHJvdzogY2VsbFNpemVDYWNoZVtmaXJzdENvbF0ucm93ICsgRURHRV9DT0xVTU5fUEFERElOR1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIGNlbGxTaXplQ2FjaGU7XG59XG5cbi8qKlxuICogQWRqdXN0IGNlbGwgc2l6ZSBiYXNlZCBvbiBjb250YWluZXIgd2lkdGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb250YWluZXJXaWR0aFxuICogQHBhcmFtIHtDZWxsU2l6ZUNhY2hlfSBjZWxsU2l6ZUNhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBwaW5uZWRDb2x1bW5zXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSB1bnBpbm5lZENvbHVtbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkanVzdENlbGxzVG9Db250YWluZXIoXG4gIGNvbnRhaW5lcldpZHRoOiBudW1iZXIsXG4gIGNlbGxTaXplQ2FjaGU6IENlbGxTaXplQ2FjaGUsXG4gIHBpbm5lZENvbHVtbnM6IHN0cmluZ1tdLFxuICB1bnBpbm5lZENvbHVtbnM6IHN0cmluZ1tdXG4pOiB7XG4gIGNlbGxTaXplQ2FjaGU6IENlbGxTaXplQ2FjaGU7XG4gIGdob3N0PzogbnVtYmVyIHwgbnVsbDtcbn0ge1xuICBjb25zdCBjb2x1bW5PcmRlciA9IGdldENvbHVtbk9yZGVyKHBpbm5lZENvbHVtbnMsIHVucGlubmVkQ29sdW1ucyk7XG4gIGNvbnN0IHBhZGRlZENlbGxTaXplID0gYWRkUGFkZGluZ1RvRmlyc3RDb2x1bW4oY2VsbFNpemVDYWNoZSwgY29sdW1uT3JkZXIpO1xuICBjb25zdCBtaW5Sb3dTdW0gPSBnZXRTaXplU3VtKHBhZGRlZENlbGxTaXplLCAncm93Jyk7XG5cbiAgaWYgKG1pblJvd1N1bSA+PSBjb250YWluZXJXaWR0aCkge1xuICAgIC8vIHdlIGFwcGx5IHRoZSBtaW4gV2lkdGggdG8gYWxsIGNlbGxzXG4gICAgcmV0dXJuIHtjZWxsU2l6ZUNhY2hlOiBnZXRNaW5DZWxsU2l6ZShwYWRkZWRDZWxsU2l6ZSl9O1xuICB9XG4gIC8vIGlmIHdlIGhhdmUgc29tZSByb29tIHRvIGV4cGFuZFxuICByZXR1cm4gZXhwYW5kQ2VsbFNpemUocGFkZGVkQ2VsbFNpemUsIGNvbHVtbk9yZGVyLCBjb250YWluZXJXaWR0aCwgY29udGFpbmVyV2lkdGggLSBtaW5Sb3dTdW0pO1xufVxuIl19