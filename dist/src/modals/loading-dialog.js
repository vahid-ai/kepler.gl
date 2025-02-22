"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _loadingSpinner = _interopRequireDefault(require("../common/loading-spinner"));

var _localization = require("@kepler.gl/localization");

var _templateObject, _templateObject2;

var StyledSpinner = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  text-align: center;\n\n  span {\n    margin: 0 auto;\n  }\n"])));

var StyledLoadingDialog = _styledComponents["default"].div.attrs({
  className: 'data-loading-dialog'
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-grow: 1;\n\n  .loading-content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .loading-message {\n    margin-left: 32px;\n    color: ", ";\n    font-weight: 500;\n    font-size: 14px;\n  }\n"])), function (props) {
  return props.theme.titleColorLT;
});

var LoadingDialog = function LoadingDialog(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 64 : _ref$size,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? 'modal.loadingDialog.loading' : _ref$message;
  return /*#__PURE__*/_react["default"].createElement(StyledLoadingDialog, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "loading-content"
  }, /*#__PURE__*/_react["default"].createElement(StyledSpinner, null, /*#__PURE__*/_react["default"].createElement(_loadingSpinner["default"], {
    size: size
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "loading-message"
  }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: message
  }))));
};

var _default = LoadingDialog;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tb2RhbHMvbG9hZGluZy1kaWFsb2cudHN4Il0sIm5hbWVzIjpbIlN0eWxlZFNwaW5uZXIiLCJzdHlsZWQiLCJkaXYiLCJTdHlsZWRMb2FkaW5nRGlhbG9nIiwiYXR0cnMiLCJjbGFzc05hbWUiLCJwcm9wcyIsInRoZW1lIiwidGl0bGVDb2xvckxUIiwiTG9hZGluZ0RpYWxvZyIsInNpemUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLGFBQWEsR0FBR0MsNkJBQU9DLEdBQVYscUpBQW5COztBQVFBLElBQU1DLG1CQUFtQixHQUFHRiw2QkFBT0MsR0FBUCxDQUFXRSxLQUFYLENBQWlCO0FBQzNDQyxFQUFBQSxTQUFTLEVBQUU7QUFEZ0MsQ0FBakIsQ0FBSCwrWUFnQlosVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxZQUFoQjtBQUFBLENBaEJPLENBQXpCOztBQTJCQSxJQUFNQyxhQUEyQyxHQUFHLFNBQTlDQSxhQUE4QztBQUFBLHVCQUNsREMsSUFEa0Q7QUFBQSxNQUNsREEsSUFEa0QsMEJBQzNDLEVBRDJDO0FBQUEsMEJBRWxEQyxPQUZrRDtBQUFBLE1BRWxEQSxPQUZrRCw2QkFFeEMsNkJBRndDO0FBQUEsc0JBSWxELGdDQUFDLG1CQUFELHFCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRSxnQ0FBQyxhQUFELHFCQUNFLGdDQUFDLDBCQUFEO0FBQWdCLElBQUEsSUFBSSxFQUFFRDtBQUF0QixJQURGLENBREYsZUFJRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsSUFBQSxFQUFFLEVBQUVDO0FBQXRCLElBREYsQ0FKRixDQURGLENBSmtEO0FBQUEsQ0FBcEQ7O2VBZ0JlRixhIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IExvYWRpbmdTcGlubmVyIGZyb20gJy4uL2NvbW1vbi9sb2FkaW5nLXNwaW5uZXInO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdAa2VwbGVyLmdsL2xvY2FsaXphdGlvbic7XG5cbmNvbnN0IFN0eWxlZFNwaW5uZXIgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgc3BhbiB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZExvYWRpbmdEaWFsb2cgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnZGF0YS1sb2FkaW5nLWRpYWxvZydcbn0pYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1ncm93OiAxO1xuXG4gIC5sb2FkaW5nLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5sb2FkaW5nLW1lc3NhZ2Uge1xuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpdGxlQ29sb3JMVH07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbmA7XG5cbmludGVyZmFjZSBMb2FkaW5nRGlhbG9nUHJvcHMge1xuICBzaXplPzogbnVtYmVyO1xuICBtZXNzYWdlPzogc3RyaW5nO1xufVxuXG5jb25zdCBMb2FkaW5nRGlhbG9nOiBSZWFjdC5GQzxMb2FkaW5nRGlhbG9nUHJvcHM+ID0gKHtcbiAgc2l6ZSA9IDY0LFxuICBtZXNzYWdlID0gJ21vZGFsLmxvYWRpbmdEaWFsb2cubG9hZGluZydcbn0pID0+IChcbiAgPFN0eWxlZExvYWRpbmdEaWFsb2c+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWNvbnRlbnRcIj5cbiAgICAgIDxTdHlsZWRTcGlubmVyPlxuICAgICAgICA8TG9hZGluZ1NwaW5uZXIgc2l6ZT17c2l6ZX0gLz5cbiAgICAgIDwvU3R5bGVkU3Bpbm5lcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1tZXNzYWdlXCI+XG4gICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXttZXNzYWdlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvU3R5bGVkTG9hZGluZ0RpYWxvZz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdEaWFsb2c7XG4iXX0=