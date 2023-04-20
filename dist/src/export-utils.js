"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exportData = exportData;
exports.formatCsv = formatCsv;
exports["default"] = void 0;

var _window = require("global/window");

var _d3Dsv = require("d3-dsv");

var _constants = require("@kepler.gl/constants");

var _utils = require("@kepler.gl/utils");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function exportData(state, options) {
  var visState = state.visState,
      appName = state.appName;
  var datasets = visState.datasets;
  var selectedDataset = options.selectedDataset,
      dataType = options.dataType,
      filtered = options.filtered; // get the selected data

  var filename = appName ? appName : _utils.DEFAULT_DATA_NAME;
  var selectedDatasets = datasets[selectedDataset] ? [datasets[selectedDataset]] : Object.values(datasets);

  if (!selectedDatasets.length) {
    // error: selected dataset not found.
    return;
  }

  selectedDatasets.forEach(function (selectedData) {
    var _ref = selectedData,
        dataContainer = _ref.dataContainer,
        fields = _ref.fields,
        label = _ref.label,
        _ref$filteredIdxCPU = _ref.filteredIdxCPU,
        filteredIdxCPU = _ref$filteredIdxCPU === void 0 ? [] : _ref$filteredIdxCPU;
    var toExport = filtered ? (0, _utils.createIndexedDataContainer)(dataContainer, filteredIdxCPU) : dataContainer; // start to export data according to selected data type

    switch (dataType) {
      case _constants.EXPORT_DATA_TYPE.CSV:
        {
          var csv = formatCsv(toExport, fields);
          var fileBlob = new _window.Blob([csv], {
            type: 'text/csv'
          });
          (0, _utils.downloadFile)(fileBlob, "".concat(filename, "_").concat(label, ".csv"));
          break;
        }
      // TODO: support more file types.

      default:
        break;
    }
  });
}
/**
 * On export data to csv
 * @param dataContainer
 * @param fields `dataset.fields`
 * @returns csv string
 */


function formatCsv(data, fields) {
  var columns = fields.map(function (f) {
    return f.displayName || f.name;
  });
  var formattedData = [columns]; // parse geojson object as string

  var _iterator = _createForOfIteratorHelper(data.rows(true)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var row = _step.value;
      formattedData.push(row.map(function (d, i) {
        return (0, _utils.parseFieldValue)(d, fields[i].type);
      }));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return (0, _d3Dsv.csvFormatRows)(formattedData);
}

var exporters = {
  exportData: exportData
};
var _default = exporters;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zcmMvZXhwb3J0LXV0aWxzLnRzIl0sIm5hbWVzIjpbImV4cG9ydERhdGEiLCJzdGF0ZSIsIm9wdGlvbnMiLCJ2aXNTdGF0ZSIsImFwcE5hbWUiLCJkYXRhc2V0cyIsInNlbGVjdGVkRGF0YXNldCIsImRhdGFUeXBlIiwiZmlsdGVyZWQiLCJmaWxlbmFtZSIsIkRFRkFVTFRfREFUQV9OQU1FIiwic2VsZWN0ZWREYXRhc2V0cyIsIk9iamVjdCIsInZhbHVlcyIsImxlbmd0aCIsImZvckVhY2giLCJzZWxlY3RlZERhdGEiLCJkYXRhQ29udGFpbmVyIiwiZmllbGRzIiwibGFiZWwiLCJmaWx0ZXJlZElkeENQVSIsInRvRXhwb3J0IiwiRVhQT1JUX0RBVEFfVFlQRSIsIkNTViIsImNzdiIsImZvcm1hdENzdiIsImZpbGVCbG9iIiwiQmxvYiIsInR5cGUiLCJkYXRhIiwiY29sdW1ucyIsIm1hcCIsImYiLCJkaXNwbGF5TmFtZSIsIm5hbWUiLCJmb3JtYXR0ZWREYXRhIiwicm93cyIsInJvdyIsInB1c2giLCJkIiwiaSIsImV4cG9ydGVycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUVBOztBQUlBOzs7Ozs7OztBQWFPLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQXNDQyxPQUF0QyxFQUErQztBQUFBLE1BQzdDQyxRQUQ2QyxHQUN4QkYsS0FEd0IsQ0FDN0NFLFFBRDZDO0FBQUEsTUFDbkNDLE9BRG1DLEdBQ3hCSCxLQUR3QixDQUNuQ0csT0FEbUM7QUFBQSxNQUU3Q0MsUUFGNkMsR0FFakNGLFFBRmlDLENBRTdDRSxRQUY2QztBQUFBLE1BRzdDQyxlQUg2QyxHQUdOSixPQUhNLENBRzdDSSxlQUg2QztBQUFBLE1BRzVCQyxRQUg0QixHQUdOTCxPQUhNLENBRzVCSyxRQUg0QjtBQUFBLE1BR2xCQyxRQUhrQixHQUdOTixPQUhNLENBR2xCTSxRQUhrQixFQUlwRDs7QUFDQSxNQUFNQyxRQUFRLEdBQUdMLE9BQU8sR0FBR0EsT0FBSCxHQUFhTSx3QkFBckM7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBR04sUUFBUSxDQUFDQyxlQUFELENBQVIsR0FDckIsQ0FBQ0QsUUFBUSxDQUFDQyxlQUFELENBQVQsQ0FEcUIsR0FFckJNLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjUixRQUFkLENBRko7O0FBR0EsTUFBSSxDQUFDTSxnQkFBZ0IsQ0FBQ0csTUFBdEIsRUFBOEI7QUFDNUI7QUFDQTtBQUNEOztBQUVESCxFQUFBQSxnQkFBZ0IsQ0FBQ0ksT0FBakIsQ0FBeUIsVUFBQUMsWUFBWSxFQUFJO0FBQUEsZUFDcUJBLFlBRHJCO0FBQUEsUUFDaENDLGFBRGdDLFFBQ2hDQSxhQURnQztBQUFBLFFBQ2pCQyxNQURpQixRQUNqQkEsTUFEaUI7QUFBQSxRQUNUQyxLQURTLFFBQ1RBLEtBRFM7QUFBQSxtQ0FDRkMsY0FERTtBQUFBLFFBQ0ZBLGNBREUsb0NBQ2UsRUFEZjtBQUV2QyxRQUFNQyxRQUFRLEdBQUdiLFFBQVEsR0FDckIsdUNBQTJCUyxhQUEzQixFQUEwQ0csY0FBMUMsQ0FEcUIsR0FFckJILGFBRkosQ0FGdUMsQ0FNdkM7O0FBQ0EsWUFBUVYsUUFBUjtBQUNFLFdBQUtlLDRCQUFpQkMsR0FBdEI7QUFBMkI7QUFDekIsY0FBTUMsR0FBRyxHQUFHQyxTQUFTLENBQUNKLFFBQUQsRUFBV0gsTUFBWCxDQUFyQjtBQUVBLGNBQU1RLFFBQVEsR0FBRyxJQUFJQyxZQUFKLENBQVMsQ0FBQ0gsR0FBRCxDQUFULEVBQWdCO0FBQUNJLFlBQUFBLElBQUksRUFBRTtBQUFQLFdBQWhCLENBQWpCO0FBQ0EsbUNBQWFGLFFBQWIsWUFBMEJqQixRQUExQixjQUFzQ1UsS0FBdEM7QUFDQTtBQUNEO0FBQ0Q7O0FBQ0E7QUFDRTtBQVZKO0FBWUQsR0FuQkQ7QUFvQkQ7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNNLFNBQVQsQ0FBbUJJLElBQW5CLEVBQWlEWCxNQUFqRCxFQUEwRTtBQUMvRSxNQUFNWSxPQUFPLEdBQUdaLE1BQU0sQ0FBQ2EsR0FBUCxDQUFXLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLFdBQUYsSUFBaUJELENBQUMsQ0FBQ0UsSUFBdkI7QUFBQSxHQUFaLENBQWhCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLENBQUNMLE9BQUQsQ0FBdEIsQ0FGK0UsQ0FJL0U7O0FBSitFLDZDQUs3REQsSUFBSSxDQUFDTyxJQUFMLENBQVUsSUFBVixDQUw2RDtBQUFBOztBQUFBO0FBSy9FLHdEQUFtQztBQUFBLFVBQXhCQyxHQUF3QjtBQUNqQ0YsTUFBQUEsYUFBYSxDQUFDRyxJQUFkLENBQW1CRCxHQUFHLENBQUNOLEdBQUosQ0FBUSxVQUFDUSxDQUFELEVBQUlDLENBQUo7QUFBQSxlQUFVLDRCQUFnQkQsQ0FBaEIsRUFBbUJyQixNQUFNLENBQUNzQixDQUFELENBQU4sQ0FBVVosSUFBN0IsQ0FBVjtBQUFBLE9BQVIsQ0FBbkI7QUFDRDtBQVA4RTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVMvRSxTQUFPLDBCQUFjTyxhQUFkLENBQVA7QUFDRDs7QUFFRCxJQUFNTSxTQUFTLEdBQUc7QUFDaEJ6QyxFQUFBQSxVQUFVLEVBQVZBO0FBRGdCLENBQWxCO2VBSWV5QyxTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHtCbG9ifSBmcm9tICdnbG9iYWwvd2luZG93JztcbmltcG9ydCB7Y3N2Rm9ybWF0Um93c30gZnJvbSAnZDMtZHN2JztcblxuaW1wb3J0IHtFWFBPUlRfREFUQV9UWVBFfSBmcm9tICdAa2VwbGVyLmdsL2NvbnN0YW50cyc7XG5pbXBvcnQge0ZpZWxkfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcbmltcG9ydCBLZXBsZXJUYWJsZSwge0RhdGFzZXRzfSBmcm9tICdAa2VwbGVyLmdsL3RhYmxlJztcblxuaW1wb3J0IHtcbiAgY3JlYXRlSW5kZXhlZERhdGFDb250YWluZXIsXG4gIERhdGFDb250YWluZXJJbnRlcmZhY2UsXG4gIHBhcnNlRmllbGRWYWx1ZSxcbiAgZG93bmxvYWRGaWxlLFxuICBERUZBVUxUX0RBVEFfTkFNRVxufSBmcm9tICdAa2VwbGVyLmdsL3V0aWxzJztcblxuaW50ZXJmYWNlIFN0YXRlVHlwZSB7XG4gIHZpc1N0YXRlOiB7ZGF0YXNldHM6IERhdGFzZXRzfTtcbiAgYXBwTmFtZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cG9ydERhdGEoc3RhdGU6IFN0YXRlVHlwZSwgb3B0aW9ucykge1xuICBjb25zdCB7dmlzU3RhdGUsIGFwcE5hbWV9ID0gc3RhdGU7XG4gIGNvbnN0IHtkYXRhc2V0c30gPSB2aXNTdGF0ZTtcbiAgY29uc3Qge3NlbGVjdGVkRGF0YXNldCwgZGF0YVR5cGUsIGZpbHRlcmVkfSA9IG9wdGlvbnM7XG4gIC8vIGdldCB0aGUgc2VsZWN0ZWQgZGF0YVxuICBjb25zdCBmaWxlbmFtZSA9IGFwcE5hbWUgPyBhcHBOYW1lIDogREVGQVVMVF9EQVRBX05BTUU7XG4gIGNvbnN0IHNlbGVjdGVkRGF0YXNldHMgPSBkYXRhc2V0c1tzZWxlY3RlZERhdGFzZXRdXG4gICAgPyBbZGF0YXNldHNbc2VsZWN0ZWREYXRhc2V0XV1cbiAgICA6IE9iamVjdC52YWx1ZXMoZGF0YXNldHMpO1xuICBpZiAoIXNlbGVjdGVkRGF0YXNldHMubGVuZ3RoKSB7XG4gICAgLy8gZXJyb3I6IHNlbGVjdGVkIGRhdGFzZXQgbm90IGZvdW5kLlxuICAgIHJldHVybjtcbiAgfVxuXG4gIHNlbGVjdGVkRGF0YXNldHMuZm9yRWFjaChzZWxlY3RlZERhdGEgPT4ge1xuICAgIGNvbnN0IHtkYXRhQ29udGFpbmVyLCBmaWVsZHMsIGxhYmVsLCBmaWx0ZXJlZElkeENQVSA9IFtdfSA9IHNlbGVjdGVkRGF0YSBhcyBLZXBsZXJUYWJsZTtcbiAgICBjb25zdCB0b0V4cG9ydCA9IGZpbHRlcmVkXG4gICAgICA/IGNyZWF0ZUluZGV4ZWREYXRhQ29udGFpbmVyKGRhdGFDb250YWluZXIsIGZpbHRlcmVkSWR4Q1BVKVxuICAgICAgOiBkYXRhQ29udGFpbmVyO1xuXG4gICAgLy8gc3RhcnQgdG8gZXhwb3J0IGRhdGEgYWNjb3JkaW5nIHRvIHNlbGVjdGVkIGRhdGEgdHlwZVxuICAgIHN3aXRjaCAoZGF0YVR5cGUpIHtcbiAgICAgIGNhc2UgRVhQT1JUX0RBVEFfVFlQRS5DU1Y6IHtcbiAgICAgICAgY29uc3QgY3N2ID0gZm9ybWF0Q3N2KHRvRXhwb3J0LCBmaWVsZHMpO1xuXG4gICAgICAgIGNvbnN0IGZpbGVCbG9iID0gbmV3IEJsb2IoW2Nzdl0sIHt0eXBlOiAndGV4dC9jc3YnfSk7XG4gICAgICAgIGRvd25sb2FkRmlsZShmaWxlQmxvYiwgYCR7ZmlsZW5hbWV9XyR7bGFiZWx9LmNzdmApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIC8vIFRPRE86IHN1cHBvcnQgbW9yZSBmaWxlIHR5cGVzLlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBPbiBleHBvcnQgZGF0YSB0byBjc3ZcbiAqIEBwYXJhbSBkYXRhQ29udGFpbmVyXG4gKiBAcGFyYW0gZmllbGRzIGBkYXRhc2V0LmZpZWxkc2BcbiAqIEByZXR1cm5zIGNzdiBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdENzdihkYXRhOiBEYXRhQ29udGFpbmVySW50ZXJmYWNlLCBmaWVsZHM6IEZpZWxkW10pOiBzdHJpbmcge1xuICBjb25zdCBjb2x1bW5zID0gZmllbGRzLm1hcChmID0+IGYuZGlzcGxheU5hbWUgfHwgZi5uYW1lKTtcbiAgY29uc3QgZm9ybWF0dGVkRGF0YSA9IFtjb2x1bW5zXTtcblxuICAvLyBwYXJzZSBnZW9qc29uIG9iamVjdCBhcyBzdHJpbmdcbiAgZm9yIChjb25zdCByb3cgb2YgZGF0YS5yb3dzKHRydWUpKSB7XG4gICAgZm9ybWF0dGVkRGF0YS5wdXNoKHJvdy5tYXAoKGQsIGkpID0+IHBhcnNlRmllbGRWYWx1ZShkLCBmaWVsZHNbaV0udHlwZSkpKTtcbiAgfVxuXG4gIHJldHVybiBjc3ZGb3JtYXRSb3dzKGZvcm1hdHRlZERhdGEpO1xufVxuXG5jb25zdCBleHBvcnRlcnMgPSB7XG4gIGV4cG9ydERhdGFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4cG9ydGVycztcbiJdfQ==