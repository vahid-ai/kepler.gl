"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.UploadAnimation = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icons = require("../common/icons");

var _styledComponents2 = require("../common/styled-components");

var _errorDisplay = _interopRequireDefault(require("./error-display"));

var _localization = require("@kepler.gl/localization");

var _templateObject, _templateObject2, _templateObject3;

var StyledUploader = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n"])));

var StyledMapIcon = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  margin-right: 16px;\n  margin-top: 4px;\n"])), function (props) {
  return props.theme.textColorLT;
});

var StyledSvg = _styledComponents["default"].svg(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-right: 16px;\n\n  line {\n    stroke: ", ";\n    stroke-width: 4;\n    stroke-linecap: square;\n    stroke-dasharray: 5 12;\n    animation: dash-animation 25s infinite linear;\n  }\n  circle {\n    fill: ", ";\n  }\n\n  @keyframes dash-animation {\n    to {\n      stroke-dashoffset: -1000;\n    }\n  }\n"])), function (props) {
  return props.theme.selectBorderColorLT;
}, function (props) {
  return props.theme.selectBorderColorLT;
});

var Line = function Line() {
  return /*#__PURE__*/_react["default"].createElement(StyledSvg, {
    height: "5px",
    width: "150px"
  }, /*#__PURE__*/_react["default"].createElement("line", {
    x1: "0",
    y1: "4",
    x2: "150",
    y2: "4"
  }));
};

var UploadAnimation = function UploadAnimation(props) {
  return /*#__PURE__*/_react["default"].createElement(StyledUploader, null, /*#__PURE__*/_react["default"].createElement(StyledMapIcon, null, /*#__PURE__*/_react["default"].createElement(_icons.MapIcon, {
    height: "48px"
  })), /*#__PURE__*/_react["default"].createElement(Line, null), props.icon && /*#__PURE__*/_react["default"].createElement(props.icon, {
    height: "64px"
  }));
};

exports.UploadAnimation = UploadAnimation;

var StatusPanel = function StatusPanel(_ref) {
  var error = _ref.error,
      isLoading = _ref.isLoading,
      providerIcon = _ref.providerIcon;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "description"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "title"
  }, isLoading ? /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: 'modal.statusPanel.mapUploading'
  }) : error ? /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: 'modal.statusPanel.error'
  }) : null)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "selection"
  }, isLoading && /*#__PURE__*/_react["default"].createElement(UploadAnimation, {
    icon: providerIcon
  }), error && /*#__PURE__*/_react["default"].createElement(_errorDisplay["default"], {
    error: error
  })));
};

var _default = StatusPanel;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tb2RhbHMvc3RhdHVzLXBhbmVsLnRzeCJdLCJuYW1lcyI6WyJTdHlsZWRVcGxvYWRlciIsInN0eWxlZCIsImRpdiIsIlN0eWxlZE1hcEljb24iLCJwcm9wcyIsInRoZW1lIiwidGV4dENvbG9yTFQiLCJTdHlsZWRTdmciLCJzdmciLCJzZWxlY3RCb3JkZXJDb2xvckxUIiwiTGluZSIsIlVwbG9hZEFuaW1hdGlvbiIsImljb24iLCJTdGF0dXNQYW5lbCIsImVycm9yIiwiaXNMb2FkaW5nIiwicHJvdmlkZXJJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUdBLElBQU1BLGNBQWMsR0FBR0MsNkJBQU9DLEdBQVYsa0tBQXBCOztBQU1BLElBQU1DLGFBQWEsR0FBR0YsNkJBQU9DLEdBQVYsc0pBQ1IsVUFBQUUsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFoQjtBQUFBLENBREcsQ0FBbkI7O0FBTUEsSUFBTUMsU0FBUyxHQUFHTiw2QkFBT08sR0FBVixvWkFJRCxVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlJLG1CQUFoQjtBQUFBLENBSkosRUFXSCxVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlJLG1CQUFoQjtBQUFBLENBWEYsQ0FBZjs7QUFxQkEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87QUFBQSxzQkFDWCxnQ0FBQyxTQUFEO0FBQVcsSUFBQSxNQUFNLEVBQUMsS0FBbEI7QUFBd0IsSUFBQSxLQUFLLEVBQUM7QUFBOUIsa0JBQ0U7QUFBTSxJQUFBLEVBQUUsRUFBQyxHQUFUO0FBQWEsSUFBQSxFQUFFLEVBQUMsR0FBaEI7QUFBb0IsSUFBQSxFQUFFLEVBQUMsS0FBdkI7QUFBNkIsSUFBQSxFQUFFLEVBQUM7QUFBaEMsSUFERixDQURXO0FBQUEsQ0FBYjs7QUFVTyxJQUFNQyxlQUErQyxHQUFHLFNBQWxEQSxlQUFrRCxDQUFBUCxLQUFLO0FBQUEsc0JBQ2xFLGdDQUFDLGNBQUQscUJBQ0UsZ0NBQUMsYUFBRCxxQkFDRSxnQ0FBQyxjQUFEO0FBQVMsSUFBQSxNQUFNLEVBQUM7QUFBaEIsSUFERixDQURGLGVBSUUsZ0NBQUMsSUFBRCxPQUpGLEVBS0dBLEtBQUssQ0FBQ1EsSUFBTixpQkFBYyxnQ0FBQyxLQUFELENBQU8sSUFBUDtBQUFZLElBQUEsTUFBTSxFQUFDO0FBQW5CLElBTGpCLENBRGtFO0FBQUEsQ0FBN0Q7Ozs7QUFnQlAsSUFBTUMsV0FBdUMsR0FBRyxTQUExQ0EsV0FBMEM7QUFBQSxNQUFFQyxLQUFGLFFBQUVBLEtBQUY7QUFBQSxNQUFTQyxTQUFULFFBQVNBLFNBQVQ7QUFBQSxNQUFvQkMsWUFBcEIsUUFBb0JBLFlBQXBCO0FBQUEsc0JBQzlDLGdDQUFDLHNDQUFELHFCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDR0QsU0FBUyxnQkFDUixnQ0FBQyw4QkFBRDtBQUFrQixJQUFBLEVBQUUsRUFBRTtBQUF0QixJQURRLEdBRU5ELEtBQUssZ0JBQ1AsZ0NBQUMsOEJBQUQ7QUFBa0IsSUFBQSxFQUFFLEVBQUU7QUFBdEIsSUFETyxHQUVMLElBTE4sQ0FERixDQURGLGVBVUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0dDLFNBQVMsaUJBQUksZ0NBQUMsZUFBRDtBQUFpQixJQUFBLElBQUksRUFBRUM7QUFBdkIsSUFEaEIsRUFFR0YsS0FBSyxpQkFBSSxnQ0FBQyx3QkFBRDtBQUFjLElBQUEsS0FBSyxFQUFFQTtBQUFyQixJQUZaLENBVkYsQ0FEOEM7QUFBQSxDQUFoRDs7ZUFrQmVELFciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnRUeXBlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7TWFwSWNvbn0gZnJvbSAnLi4vY29tbW9uL2ljb25zJztcbmltcG9ydCB7U3R5bGVkRXhwb3J0U2VjdGlvbn0gZnJvbSAnLi4vY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBFcnJvckRpc3BsYXkgZnJvbSAnLi9lcnJvci1kaXNwbGF5JztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnQGtlcGxlci5nbC9sb2NhbGl6YXRpb24nO1xuaW1wb3J0IHtJY29uUHJvcHN9IGZyb20gJ0BrZXBsZXIuZ2wvY2xvdWQtcHJvdmlkZXJzJztcblxuY29uc3QgU3R5bGVkVXBsb2FkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5gO1xuXG5jb25zdCBTdHlsZWRNYXBJY29uID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yTFR9O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbmA7XG5cbmNvbnN0IFN0eWxlZFN2ZyA9IHN0eWxlZC5zdmdgXG4gIG1hcmdpbi1yaWdodDogMTZweDtcblxuICBsaW5lIHtcbiAgICBzdHJva2U6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2VsZWN0Qm9yZGVyQ29sb3JMVH07XG4gICAgc3Ryb2tlLXdpZHRoOiA0O1xuICAgIHN0cm9rZS1saW5lY2FwOiBzcXVhcmU7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogNSAxMjtcbiAgICBhbmltYXRpb246IGRhc2gtYW5pbWF0aW9uIDI1cyBpbmZpbml0ZSBsaW5lYXI7XG4gIH1cbiAgY2lyY2xlIHtcbiAgICBmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlbGVjdEJvcmRlckNvbG9yTFR9O1xuICB9XG5cbiAgQGtleWZyYW1lcyBkYXNoLWFuaW1hdGlvbiB7XG4gICAgdG8ge1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMDAwO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgTGluZSA9ICgpID0+IChcbiAgPFN0eWxlZFN2ZyBoZWlnaHQ9XCI1cHhcIiB3aWR0aD1cIjE1MHB4XCI+XG4gICAgPGxpbmUgeDE9XCIwXCIgeTE9XCI0XCIgeDI9XCIxNTBcIiB5Mj1cIjRcIiAvPlxuICA8L1N0eWxlZFN2Zz5cbik7XG5cbmludGVyZmFjZSBVcGxvYWRBbmltYXRpb25Qcm9wcyB7XG4gIGljb24/OiBDb21wb25lbnRUeXBlPEljb25Qcm9wcz4gfCBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgVXBsb2FkQW5pbWF0aW9uOiBSZWFjdC5GQzxVcGxvYWRBbmltYXRpb25Qcm9wcz4gPSBwcm9wcyA9PiAoXG4gIDxTdHlsZWRVcGxvYWRlcj5cbiAgICA8U3R5bGVkTWFwSWNvbj5cbiAgICAgIDxNYXBJY29uIGhlaWdodD1cIjQ4cHhcIiAvPlxuICAgIDwvU3R5bGVkTWFwSWNvbj5cbiAgICA8TGluZSAvPlxuICAgIHtwcm9wcy5pY29uICYmIDxwcm9wcy5pY29uIGhlaWdodD1cIjY0cHhcIiAvPn1cbiAgPC9TdHlsZWRVcGxvYWRlcj5cbik7XG5cbmludGVyZmFjZSBTdGF0dXNQYW5lbFByb3BzIHtcbiAgZXJyb3I/OiBzdHJpbmcgfCBudWxsO1xuICBpc0xvYWRpbmc/OiBib29sZWFuO1xuICBwcm92aWRlckljb24/OiBDb21wb25lbnRUeXBlPEljb25Qcm9wcz4gfCBudWxsO1xufVxuXG5jb25zdCBTdGF0dXNQYW5lbDogUmVhY3QuRkM8U3RhdHVzUGFuZWxQcm9wcz4gPSAoe2Vycm9yLCBpc0xvYWRpbmcsIHByb3ZpZGVySWNvbn0pID0+IChcbiAgPFN0eWxlZEV4cG9ydFNlY3Rpb24+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuc3RhdHVzUGFuZWwubWFwVXBsb2FkaW5nJ30gLz5cbiAgICAgICAgKSA6IGVycm9yID8gKFxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuc3RhdHVzUGFuZWwuZXJyb3InfSAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XG4gICAgICB7aXNMb2FkaW5nICYmIDxVcGxvYWRBbmltYXRpb24gaWNvbj17cHJvdmlkZXJJY29ufSAvPn1cbiAgICAgIHtlcnJvciAmJiA8RXJyb3JEaXNwbGF5IGVycm9yPXtlcnJvcn0gLz59XG4gICAgPC9kaXY+XG4gIDwvU3R5bGVkRXhwb3J0U2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXR1c1BhbmVsO1xuIl19