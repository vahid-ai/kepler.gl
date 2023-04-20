"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DeleteDatasetModal = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _datasetLabel = _interopRequireDefault(require("../common/dataset-label"));

var _localization = require("@kepler.gl/localization");

var _templateObject;

var StyledMsg = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 24px;\n"])));

var DeleteDatasetModal = function DeleteDatasetModal(_ref) {
  var dataset = _ref.dataset,
      _ref$layers = _ref.layers,
      layers = _ref$layers === void 0 ? [] : _ref$layers;
  // retrieve only layers related to the current dataset
  var currDatasetLayers = layers.filter(function (layer) {
    return layer.config.dataId === (dataset && dataset.id);
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "delete-dataset-modal"
  }, /*#__PURE__*/_react["default"].createElement(_datasetLabel["default"], {
    dataset: dataset
  }), /*#__PURE__*/_react["default"].createElement(StyledMsg, {
    className: "delete-dataset-msg"
  }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: 'modal.deleteData.warning',
    values: {
      length: currDatasetLayers.length
    }
  })));
};

exports.DeleteDatasetModal = DeleteDatasetModal;

var DeleteDatasetModalFactory = function DeleteDatasetModalFactory() {
  return DeleteDatasetModal;
};

var _default = DeleteDatasetModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tb2RhbHMvZGVsZXRlLWRhdGEtbW9kYWwudHN4Il0sIm5hbWVzIjpbIlN0eWxlZE1zZyIsInN0eWxlZCIsImRpdiIsIkRlbGV0ZURhdGFzZXRNb2RhbCIsImRhdGFzZXQiLCJsYXllcnMiLCJjdXJyRGF0YXNldExheWVycyIsImZpbHRlciIsImxheWVyIiwiY29uZmlnIiwiZGF0YUlkIiwiaWQiLCJsZW5ndGgiLCJEZWxldGVEYXRhc2V0TW9kYWxGYWN0b3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUlBLElBQU1BLFNBQVMsR0FBR0MsNkJBQU9DLEdBQVYsNkdBQWY7O0FBU08sSUFBTUMsa0JBQXFELEdBQUcsU0FBeERBLGtCQUF3RCxPQUE0QjtBQUFBLE1BQTFCQyxPQUEwQixRQUExQkEsT0FBMEI7QUFBQSx5QkFBakJDLE1BQWlCO0FBQUEsTUFBakJBLE1BQWlCLDRCQUFSLEVBQVE7QUFDL0Y7QUFDQSxNQUFNQyxpQkFBaUIsR0FBR0QsTUFBTSxDQUFDRSxNQUFQLENBQWMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxNQUFiLE1BQXlCTixPQUFPLElBQUlBLE9BQU8sQ0FBQ08sRUFBNUMsQ0FBSjtBQUFBLEdBQW5CLENBQTFCO0FBRUEsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLGdDQUFDLHdCQUFEO0FBQWMsSUFBQSxPQUFPLEVBQUVQO0FBQXZCLElBREYsZUFFRSxnQ0FBQyxTQUFEO0FBQVcsSUFBQSxTQUFTLEVBQUM7QUFBckIsa0JBQ0UsZ0NBQUMsOEJBQUQ7QUFDRSxJQUFBLEVBQUUsRUFBRSwwQkFETjtBQUVFLElBQUEsTUFBTSxFQUFFO0FBQUNRLE1BQUFBLE1BQU0sRUFBRU4saUJBQWlCLENBQUNNO0FBQTNCO0FBRlYsSUFERixDQUZGLENBREY7QUFXRCxDQWZNOzs7O0FBaUJQLElBQU1DLHlCQUF5QixHQUFHLFNBQTVCQSx5QkFBNEI7QUFBQSxTQUFNVixrQkFBTjtBQUFBLENBQWxDOztlQUNlVSx5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBEYXRhc2V0TGFiZWwgZnJvbSAnLi4vY29tbW9uL2RhdGFzZXQtbGFiZWwnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdAa2VwbGVyLmdsL2xvY2FsaXphdGlvbic7XG5pbXBvcnQge0xheWVyfSBmcm9tICdAa2VwbGVyLmdsL2xheWVycyc7XG5pbXBvcnQge0tlcGxlclRhYmxlfSBmcm9tICdAa2VwbGVyLmdsL3RhYmxlJztcblxuY29uc3QgU3R5bGVkTXNnID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMjRweDtcbmA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsZXRlRGF0YXNldE1vZGFsUHJvcHMge1xuICBkYXRhc2V0OiBLZXBsZXJUYWJsZTtcbiAgbGF5ZXJzOiBMYXllcltdO1xufVxuXG5leHBvcnQgY29uc3QgRGVsZXRlRGF0YXNldE1vZGFsOiBSZWFjdC5GQzxEZWxldGVEYXRhc2V0TW9kYWxQcm9wcz4gPSAoe2RhdGFzZXQsIGxheWVycyA9IFtdfSkgPT4ge1xuICAvLyByZXRyaWV2ZSBvbmx5IGxheWVycyByZWxhdGVkIHRvIHRoZSBjdXJyZW50IGRhdGFzZXRcbiAgY29uc3QgY3VyckRhdGFzZXRMYXllcnMgPSBsYXllcnMuZmlsdGVyKGxheWVyID0+IGxheWVyLmNvbmZpZy5kYXRhSWQgPT09IChkYXRhc2V0ICYmIGRhdGFzZXQuaWQpKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVsZXRlLWRhdGFzZXQtbW9kYWxcIj5cbiAgICAgIDxEYXRhc2V0TGFiZWwgZGF0YXNldD17ZGF0YXNldH0gLz5cbiAgICAgIDxTdHlsZWRNc2cgY2xhc3NOYW1lPVwiZGVsZXRlLWRhdGFzZXQtbXNnXCI+XG4gICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgaWQ9eydtb2RhbC5kZWxldGVEYXRhLndhcm5pbmcnfVxuICAgICAgICAgIHZhbHVlcz17e2xlbmd0aDogY3VyckRhdGFzZXRMYXllcnMubGVuZ3RofX1cbiAgICAgICAgLz5cbiAgICAgIDwvU3R5bGVkTXNnPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgRGVsZXRlRGF0YXNldE1vZGFsRmFjdG9yeSA9ICgpID0+IERlbGV0ZURhdGFzZXRNb2RhbDtcbmV4cG9ydCBkZWZhdWx0IERlbGV0ZURhdGFzZXRNb2RhbEZhY3Rvcnk7XG4iXX0=