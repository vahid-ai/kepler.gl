"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _reactJsonPretty = _interopRequireDefault(require("react-json-pretty"));

var _constants = require("@kepler.gl/constants");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../../common/styled-components");

var _components = require("./components");

var _localization = require("@kepler.gl/localization");

var _reactCopyToClipboard = require("react-copy-to-clipboard");

var _templateObject;

var StyledJsonExportSection = (0, _styledComponents["default"])(_styledComponents2.StyledExportSection)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  .note {\n    color: ", ";\n    font-size: 11px;\n  }\n\n  .viewer {\n    position: relative;\n    border: 1px solid ", ";\n    background-color: white;\n    border-radius: 2px;\n    display: inline-block;\n    font: inherit;\n    line-height: 1.5em;\n    padding: 0.5em 3.5em 0.5em 1em;\n    margin: 0;\n    box-sizing: border-box;\n    height: 180px;\n    width: 100%;\n    overflow-y: scroll;\n    overflow-x: auto;\n    white-space: pre-wrap;\n    word-wrap: break-word;\n    max-width: 600px;\n  }\n\n  .copy-button {\n    margin: 1em 1em 0 0;\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n"])), function (props) {
  return props.theme.errorColor;
}, function (props) {
  return props.theme.selectBorderColorLT;
});

var ExportJsonMapUnmemoized = function ExportJsonMapUnmemoized(_ref) {
  var _ref$config = _ref.config,
      config = _ref$config === void 0 ? {} : _ref$config;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      copied = _useState2[0],
      setCopy = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_components.StyledExportMapSection, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "description"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "selection"
  }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: 'modal.exportMap.json.selection'
  }))), /*#__PURE__*/_react["default"].createElement(StyledJsonExportSection, {
    className: "export-map-modal__json-options"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "description"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "title"
  }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: 'modal.exportMap.json.configTitle'
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "subtitle"
  }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: 'modal.exportMap.json.configDisclaimer'
  }), /*#__PURE__*/_react["default"].createElement(_components.ExportMapLink, {
    href: _constants.ADD_DATA_TO_MAP_DOC
  }, "addDataToMap"), ".")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "selection"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "viewer"
  }, /*#__PURE__*/_react["default"].createElement(_reactJsonPretty["default"], {
    id: "json-pretty",
    json: config
  }), /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard.CopyToClipboard, {
    text: JSON.stringify(config),
    onCopy: function onCopy() {
      return setCopy(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
    width: "80px"
  }, copied ? 'Copied!' : 'Copy'))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "disclaimer"
  }, /*#__PURE__*/_react["default"].createElement(_components.StyledWarning, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: 'modal.exportMap.json.disclaimer'
  }))))));
};

ExportJsonMapUnmemoized.displayName = 'ExportJsonMap';

var ExportJsonMap = /*#__PURE__*/_react["default"].memo(ExportJsonMapUnmemoized);

var ExportJsonMapFactory = function ExportJsonMapFactory() {
  return ExportJsonMap;
};

var _default = ExportJsonMapFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tb2RhbHMvZXhwb3J0LW1hcC1tb2RhbC9leHBvcnQtanNvbi1tYXAudHN4Il0sIm5hbWVzIjpbIlN0eWxlZEpzb25FeHBvcnRTZWN0aW9uIiwiU3R5bGVkRXhwb3J0U2VjdGlvbiIsInByb3BzIiwidGhlbWUiLCJlcnJvckNvbG9yIiwic2VsZWN0Qm9yZGVyQ29sb3JMVCIsIkV4cG9ydEpzb25NYXBVbm1lbW9pemVkIiwiY29uZmlnIiwiY29waWVkIiwic2V0Q29weSIsIkFERF9EQVRBX1RPX01BUF9ET0MiLCJKU09OIiwic3RyaW5naWZ5IiwiZGlzcGxheU5hbWUiLCJFeHBvcnRKc29uTWFwIiwiUmVhY3QiLCJtZW1vIiwiRXhwb3J0SnNvbk1hcEZhY3RvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLHVCQUF1QixHQUFHLGtDQUFPQyxzQ0FBUCxDQUFILDByQkFFaEIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxVQUFoQjtBQUFBLENBRlcsRUFRTCxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLG1CQUFoQjtBQUFBLENBUkEsQ0FBN0I7O0FBc0NBLElBQU1DLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsT0FBd0M7QUFBQSx5QkFBdENDLE1BQXNDO0FBQUEsTUFBdENBLE1BQXNDLDRCQUE3QixFQUE2Qjs7QUFBQSxrQkFDNUMscUJBQVMsS0FBVCxDQUQ0QztBQUFBO0FBQUEsTUFDL0RDLE1BRCtEO0FBQUEsTUFDdkRDLE9BRHVEOztBQUV0RSxzQkFDRSwwREFDRSxnQ0FBQyxrQ0FBRCxxQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFERixlQUVFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRSxnQ0FBQyw4QkFBRDtBQUFrQixJQUFBLEVBQUUsRUFBRTtBQUF0QixJQURGLENBRkYsQ0FERixlQU9FLGdDQUFDLHVCQUFEO0FBQXlCLElBQUEsU0FBUyxFQUFDO0FBQW5DLGtCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsSUFBQSxFQUFFLEVBQUU7QUFBdEIsSUFERixDQURGLGVBSUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLGdDQUFDLDhCQUFEO0FBQWtCLElBQUEsRUFBRSxFQUFFO0FBQXRCLElBREYsZUFFRSxnQ0FBQyx5QkFBRDtBQUFlLElBQUEsSUFBSSxFQUFFQztBQUFyQixvQkFGRixNQUpGLENBREYsZUFVRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLGdDQUFDLDJCQUFEO0FBQVksSUFBQSxFQUFFLEVBQUMsYUFBZjtBQUE2QixJQUFBLElBQUksRUFBRUg7QUFBbkMsSUFERixlQUVFLGdDQUFDLHFDQUFEO0FBQWlCLElBQUEsSUFBSSxFQUFFSSxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsTUFBZixDQUF2QjtBQUErQyxJQUFBLE1BQU0sRUFBRTtBQUFBLGFBQU1FLE9BQU8sQ0FBQyxJQUFELENBQWI7QUFBQTtBQUF2RCxrQkFDRSxnQ0FBQyx5QkFBRDtBQUFRLElBQUEsS0FBSyxFQUFDO0FBQWQsS0FBc0JELE1BQU0sR0FBRyxTQUFILEdBQWUsTUFBM0MsQ0FERixDQUZGLENBREYsZUFPRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0UsZ0NBQUMseUJBQUQscUJBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsSUFBQSxFQUFFLEVBQUU7QUFBdEIsSUFERixDQURGLENBUEYsQ0FWRixDQVBGLENBREY7QUFrQ0QsQ0FwQ0Q7O0FBc0NBRix1QkFBdUIsQ0FBQ08sV0FBeEIsR0FBc0MsZUFBdEM7O0FBRUEsSUFBTUMsYUFBYSxnQkFBR0Msa0JBQU1DLElBQU4sQ0FBV1YsdUJBQVgsQ0FBdEI7O0FBRUEsSUFBTVcsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QjtBQUFBLFNBQU1ILGFBQU47QUFBQSxDQUE3Qjs7ZUFFZUcsb0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEpTT05QcmV0dHkgZnJvbSAncmVhY3QtanNvbi1wcmV0dHknO1xuaW1wb3J0IHtBRERfREFUQV9UT19NQVBfRE9DfSBmcm9tICdAa2VwbGVyLmdsL2NvbnN0YW50cyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7U3R5bGVkRXhwb3J0U2VjdGlvbiwgQnV0dG9ufSBmcm9tICcuLi8uLi9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtTdHlsZWRFeHBvcnRNYXBTZWN0aW9uLCBTdHlsZWRXYXJuaW5nLCBFeHBvcnRNYXBMaW5rfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdAa2VwbGVyLmdsL2xvY2FsaXphdGlvbic7XG5pbXBvcnQge0NvcHlUb0NsaXBib2FyZH0gZnJvbSAncmVhY3QtY29weS10by1jbGlwYm9hcmQnO1xuXG5jb25zdCBTdHlsZWRKc29uRXhwb3J0U2VjdGlvbiA9IHN0eWxlZChTdHlsZWRFeHBvcnRTZWN0aW9uKWBcbiAgLm5vdGUge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmVycm9yQ29sb3J9O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuXG4gIC52aWV3ZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlbGVjdEJvcmRlckNvbG9yTFR9O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgcGFkZGluZzogMC41ZW0gMy41ZW0gMC41ZW0gMWVtO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICB9XG5cbiAgLmNvcHktYnV0dG9uIHtcbiAgICBtYXJnaW46IDFlbSAxZW0gMCAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbmA7XG5cbnR5cGUgRXhwb3J0SnNvblByb3BUeXBlcyA9IHtcbiAgY29uZmlnOiBhbnk7XG59O1xuXG5jb25zdCBFeHBvcnRKc29uTWFwVW5tZW1vaXplZCA9ICh7Y29uZmlnID0ge319OiBFeHBvcnRKc29uUHJvcFR5cGVzKSA9PiB7XG4gIGNvbnN0IFtjb3BpZWQsIHNldENvcHldID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8U3R5bGVkRXhwb3J0TWFwU2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XG4gICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRNYXAuanNvbi5zZWxlY3Rpb24nfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvU3R5bGVkRXhwb3J0TWFwU2VjdGlvbj5cbiAgICAgIDxTdHlsZWRKc29uRXhwb3J0U2VjdGlvbiBjbGFzc05hbWU9XCJleHBvcnQtbWFwLW1vZGFsX19qc29uLW9wdGlvbnNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmpzb24uY29uZmlnVGl0bGUnfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmpzb24uY29uZmlnRGlzY2xhaW1lcid9IC8+XG4gICAgICAgICAgICA8RXhwb3J0TWFwTGluayBocmVmPXtBRERfREFUQV9UT19NQVBfRE9DfT5hZGREYXRhVG9NYXA8L0V4cG9ydE1hcExpbms+LlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXdlclwiPlxuICAgICAgICAgICAgPEpTT05QcmV0dHkgaWQ9XCJqc29uLXByZXR0eVwiIGpzb249e2NvbmZpZ30gLz5cbiAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgdGV4dD17SlNPTi5zdHJpbmdpZnkoY29uZmlnKX0gb25Db3B5PXsoKSA9PiBzZXRDb3B5KHRydWUpfT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cIjgwcHhcIj57Y29waWVkID8gJ0NvcGllZCEnIDogJ0NvcHknfTwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Db3B5VG9DbGlwYm9hcmQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNjbGFpbWVyXCI+XG4gICAgICAgICAgICA8U3R5bGVkV2FybmluZz5cbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRNYXAuanNvbi5kaXNjbGFpbWVyJ30gLz5cbiAgICAgICAgICAgIDwvU3R5bGVkV2FybmluZz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1N0eWxlZEpzb25FeHBvcnRTZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRXhwb3J0SnNvbk1hcFVubWVtb2l6ZWQuZGlzcGxheU5hbWUgPSAnRXhwb3J0SnNvbk1hcCc7XG5cbmNvbnN0IEV4cG9ydEpzb25NYXAgPSBSZWFjdC5tZW1vKEV4cG9ydEpzb25NYXBVbm1lbW9pemVkKTtcblxuY29uc3QgRXhwb3J0SnNvbk1hcEZhY3RvcnkgPSAoKSA9PiBFeHBvcnRKc29uTWFwO1xuXG5leHBvcnQgZGVmYXVsdCBFeHBvcnRKc29uTWFwRmFjdG9yeTtcbiJdfQ==