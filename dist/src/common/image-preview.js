"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _loadingSpinner = _interopRequireDefault(require("./loading-spinner"));

var _templateObject;

var StyledImagePreview = _styledComponents["default"].div.attrs({
  className: 'image-preview'
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  justify-content: center;\n  padding: 30px;\n\n  .dimension,\n  .instruction {\n    padding: 8px 0px;\n  }\n\n  .preview-image {\n    background: #e2e2e2;\n    border-radius: 4px;\n    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.18);\n    width: 100%;\n    position: relative;\n  }\n\n  .preview-image-placeholder {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n\n  .preview-image-spinner {\n    position: absolute;\n    left: calc(50% - 25px);\n    top: calc(50% - 25px);\n  }\n\n  .preview-image--error {\n    font-size: 12px;\n    padding: 12px;\n    color: ", ";\n    text-align: center;\n  }\n"])), function (props) {
  return props.theme.errorColor;
});

/**
 * @param {object} props
 * @param {ExportImage} [props.exportImage]
 * @param {number} [props.width]
 * @param {boolean} [props.showDimension]
 */
var ImagePreview = function ImagePreview(_ref) {
  var exportImage = _ref.exportImage,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 400 : _ref$width,
      _ref$showDimension = _ref.showDimension,
      showDimension = _ref$showDimension === void 0 ? false : _ref$showDimension;

  var _ref2 = exportImage || {},
      error = _ref2.error,
      imageDataUri = _ref2.imageDataUri,
      processing = _ref2.processing,
      _ref2$imageSize = _ref2.imageSize;

  _ref2$imageSize = _ref2$imageSize === void 0 ? {} : _ref2$imageSize;
  var _ref2$imageSize$image = _ref2$imageSize.imageW,
      imageW = _ref2$imageSize$image === void 0 ? 0 : _ref2$imageSize$image,
      _ref2$imageSize$image2 = _ref2$imageSize.imageH,
      imageH = _ref2$imageSize$image2 === void 0 ? 0 : _ref2$imageSize$image2;
  var imageStyle = {
    width: "".concat(width, "px"),
    height: "".concat(imageH / (imageW || 1) * width, "px")
  };
  return /*#__PURE__*/_react["default"].createElement(StyledImagePreview, null, showDimension ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "dimension"
  }, imageW, " pixel x ", imageH, " pixel") : null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "preview-image",
    style: imageStyle
  }, processing ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "preview-image-spinner"
  }, /*#__PURE__*/_react["default"].createElement(_loadingSpinner["default"], null)) : error ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "preview-image--error"
  }, /*#__PURE__*/_react["default"].createElement("span", null, error.message || 'Generate map image failed!')) : /*#__PURE__*/_react["default"].createElement("img", {
    className: "preview-image-placeholder",
    src: imageDataUri
  })));
};

var _default = ImagePreview;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vaW1hZ2UtcHJldmlldy50c3giXSwibmFtZXMiOlsiU3R5bGVkSW1hZ2VQcmV2aWV3Iiwic3R5bGVkIiwiZGl2IiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInRoZW1lIiwiZXJyb3JDb2xvciIsIkltYWdlUHJldmlldyIsImV4cG9ydEltYWdlIiwid2lkdGgiLCJzaG93RGltZW5zaW9uIiwiZXJyb3IiLCJpbWFnZURhdGFVcmkiLCJwcm9jZXNzaW5nIiwiaW1hZ2VTaXplIiwiaW1hZ2VXIiwiaW1hZ2VIIiwiaW1hZ2VTdHlsZSIsImhlaWdodCIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOzs7O0FBR0EsSUFBTUEsa0JBQWtCLEdBQUdDLDZCQUFPQyxHQUFQLENBQVdDLEtBQVgsQ0FBaUI7QUFDMUNDLEVBQUFBLFNBQVMsRUFBRTtBQUQrQixDQUFqQixDQUFILCt5QkF3Q1gsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxVQUFoQjtBQUFBLENBeENNLENBQXhCOztBQW1EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUEwRTtBQUFBLE1BQXhFQyxXQUF3RSxRQUF4RUEsV0FBd0U7QUFBQSx3QkFBM0RDLEtBQTJEO0FBQUEsTUFBM0RBLEtBQTJELDJCQUFuRCxHQUFtRDtBQUFBLGdDQUE5Q0MsYUFBOEM7QUFBQSxNQUE5Q0EsYUFBOEMsbUNBQTlCLEtBQThCOztBQUFBLGNBRTNGRixXQUFXLElBQUksRUFGNEU7QUFBQSxNQUN0RkcsS0FEc0YsU0FDdEZBLEtBRHNGO0FBQUEsTUFDL0VDLFlBRCtFLFNBQy9FQSxZQUQrRTtBQUFBLE1BQ2pFQyxVQURpRSxTQUNqRUEsVUFEaUU7QUFBQSw4QkFDckRDLFNBRHFEOztBQUFBLGlEQUNmLEVBRGU7QUFBQSw4Q0FDekNDLE1BRHlDO0FBQUEsTUFDekNBLE1BRHlDLHNDQUNoQyxDQURnQztBQUFBLCtDQUM3QkMsTUFENkI7QUFBQSxNQUM3QkEsTUFENkIsdUNBQ3BCLENBRG9CO0FBSTdGLE1BQU1DLFVBQVUsR0FBRztBQUNqQlIsSUFBQUEsS0FBSyxZQUFLQSxLQUFMLE9BRFk7QUFFakJTLElBQUFBLE1BQU0sWUFBTUYsTUFBTSxJQUFJRCxNQUFNLElBQUksQ0FBZCxDQUFQLEdBQTJCTixLQUFoQztBQUZXLEdBQW5CO0FBS0Esc0JBQ0UsZ0NBQUMsa0JBQUQsUUFDR0MsYUFBYSxnQkFDWjtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDR0ssTUFESCxlQUNvQkMsTUFEcEIsV0FEWSxHQUlWLElBTE4sZUFNRTtBQUFLLElBQUEsU0FBUyxFQUFDLGVBQWY7QUFBK0IsSUFBQSxLQUFLLEVBQUVDO0FBQXRDLEtBQ0dKLFVBQVUsZ0JBQ1Q7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLGdDQUFDLDBCQUFELE9BREYsQ0FEUyxHQUlQRixLQUFLLGdCQUNQO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRSw4Q0FBT0EsS0FBSyxDQUFDUSxPQUFOLElBQWlCLDRCQUF4QixDQURGLENBRE8sZ0JBS1A7QUFBSyxJQUFBLFNBQVMsRUFBQywyQkFBZjtBQUEyQyxJQUFBLEdBQUcsRUFBRVA7QUFBaEQsSUFWSixDQU5GLENBREY7QUFzQkQsQ0EvQkQ7O2VBaUNlTCxZIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gJy4vbG9hZGluZy1zcGlubmVyJztcbmltcG9ydCB7RXhwb3J0SW1hZ2V9IGZyb20gJ0BrZXBsZXIuZ2wvY29uc3RhbnRzJztcblxuY29uc3QgU3R5bGVkSW1hZ2VQcmV2aWV3ID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2ltYWdlLXByZXZpZXcnXG59KWBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMwcHg7XG5cbiAgLmRpbWVuc2lvbixcbiAgLmluc3RydWN0aW9uIHtcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xuICB9XG5cbiAgLnByZXZpZXctaW1hZ2Uge1xuICAgIGJhY2tncm91bmQ6ICNlMmUyZTI7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5wcmV2aWV3LWltYWdlLXBsYWNlaG9sZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLnByZXZpZXctaW1hZ2Utc3Bpbm5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGNhbGMoNTAlIC0gMjVweCk7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDI1cHgpO1xuICB9XG5cbiAgLnByZXZpZXctaW1hZ2UtLWVycm9yIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5lcnJvckNvbG9yfTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbmA7XG5cbmludGVyZmFjZSBJbWFnZVByZXZpZXdQcm9wcyB7XG4gIGV4cG9ydEltYWdlPzogRXhwb3J0SW1hZ2U7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBzaG93RGltZW5zaW9uPzogZmFsc2U7XG59XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge0V4cG9ydEltYWdlfSBbcHJvcHMuZXhwb3J0SW1hZ2VdXG4gKiBAcGFyYW0ge251bWJlcn0gW3Byb3BzLndpZHRoXVxuICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMuc2hvd0RpbWVuc2lvbl1cbiAqL1xuY29uc3QgSW1hZ2VQcmV2aWV3ID0gKHtleHBvcnRJbWFnZSwgd2lkdGggPSA0MDAsIHNob3dEaW1lbnNpb24gPSBmYWxzZX06IEltYWdlUHJldmlld1Byb3BzKSA9PiB7XG4gIGNvbnN0IHtlcnJvciwgaW1hZ2VEYXRhVXJpLCBwcm9jZXNzaW5nLCBpbWFnZVNpemU6IHtpbWFnZVcgPSAwLCBpbWFnZUggPSAwfSA9IHt9fSA9XG4gICAgZXhwb3J0SW1hZ2UgfHwge307XG5cbiAgY29uc3QgaW1hZ2VTdHlsZSA9IHtcbiAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxuICAgIGhlaWdodDogYCR7KGltYWdlSCAvIChpbWFnZVcgfHwgMSkpICogd2lkdGh9cHhgXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkSW1hZ2VQcmV2aWV3PlxuICAgICAge3Nob3dEaW1lbnNpb24gPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGltZW5zaW9uXCI+XG4gICAgICAgICAge2ltYWdlV30gcGl4ZWwgeCB7aW1hZ2VIfSBwaXhlbFxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LWltYWdlXCIgc3R5bGU9e2ltYWdlU3R5bGV9PlxuICAgICAgICB7cHJvY2Vzc2luZyA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2Utc3Bpbm5lclwiPlxuICAgICAgICAgICAgPExvYWRpbmdTcGlubmVyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBlcnJvciA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2UtLWVycm9yXCI+XG4gICAgICAgICAgICA8c3Bhbj57ZXJyb3IubWVzc2FnZSB8fCAnR2VuZXJhdGUgbWFwIGltYWdlIGZhaWxlZCEnfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByZXZpZXctaW1hZ2UtcGxhY2Vob2xkZXJcIiBzcmM9e2ltYWdlRGF0YVVyaX0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvU3R5bGVkSW1hZ2VQcmV2aWV3PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VQcmV2aWV3O1xuIl19