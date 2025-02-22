"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExportMapLink = exports.StyledExportLink = exports.StyledWarning = exports.StyledExportMapSection = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../../common/styled-components");

var _templateObject, _templateObject2, _templateObject3;

var StyledExportMapSection = (0, _styledComponents["default"])(_styledComponents2.StyledExportSection)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: ", "px;\n"])), function (props) {
  return props.theme.exportIntraSectionMargin;
});
exports.StyledExportMapSection = StyledExportMapSection;

var StyledWarning = _styledComponents["default"].span(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-weight: ", ";\n"])), function (props) {
  return props.theme.errorColor;
}, function (props) {
  return props.theme.selectFontWeightBold;
});

exports.StyledWarning = StyledWarning;

var StyledExportLink = _styledComponents["default"].a(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  text-decoration-line: underline !important;\n"])));

exports.StyledExportLink = StyledExportLink;

var ExportMapLink = function ExportMapLink(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  return /*#__PURE__*/_react["default"].createElement(StyledExportLink, (0, _extends2["default"])({
    target: "_blank",
    rel: "noopener noreferrer"
  }, props), children);
};

exports.ExportMapLink = ExportMapLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tb2RhbHMvZXhwb3J0LW1hcC1tb2RhbC9jb21wb25lbnRzLnRzeCJdLCJuYW1lcyI6WyJTdHlsZWRFeHBvcnRNYXBTZWN0aW9uIiwiU3R5bGVkRXhwb3J0U2VjdGlvbiIsInByb3BzIiwidGhlbWUiLCJleHBvcnRJbnRyYVNlY3Rpb25NYXJnaW4iLCJTdHlsZWRXYXJuaW5nIiwic3R5bGVkIiwic3BhbiIsImVycm9yQ29sb3IiLCJzZWxlY3RGb250V2VpZ2h0Qm9sZCIsIlN0eWxlZEV4cG9ydExpbmsiLCJhIiwiRXhwb3J0TWFwTGluayIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7QUFFTyxJQUFNQSxzQkFBc0IsR0FBRyxrQ0FBT0Msc0NBQVAsQ0FBSCxnSEFDbkIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyx3QkFBaEI7QUFBQSxDQURjLENBQTVCOzs7QUFJQSxJQUFNQyxhQUFhLEdBQUdDLDZCQUFPQyxJQUFWLGlJQUNmLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUssVUFBaEI7QUFBQSxDQURVLEVBRVQsVUFBQU4sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTSxvQkFBaEI7QUFBQSxDQUZJLENBQW5COzs7O0FBS0EsSUFBTUMsZ0JBQWdCLEdBQUdKLDZCQUFPSyxDQUFWLHlJQUF0Qjs7OztBQUlBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxNQUFFQyxRQUFGLFFBQUVBLFFBQUY7QUFBQSxNQUFlWCxLQUFmO0FBQUEsc0JBQzNCLGdDQUFDLGdCQUFEO0FBQWtCLElBQUEsTUFBTSxFQUFDLFFBQXpCO0FBQWtDLElBQUEsR0FBRyxFQUFDO0FBQXRDLEtBQWdFQSxLQUFoRSxHQUNHVyxRQURILENBRDJCO0FBQUEsQ0FBdEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1N0eWxlZEV4cG9ydFNlY3Rpb259IGZyb20gJy4uLy4uL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRFeHBvcnRNYXBTZWN0aW9uID0gc3R5bGVkKFN0eWxlZEV4cG9ydFNlY3Rpb24pYFxuICBtYXJnaW4tdG9wOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmV4cG9ydEludHJhU2VjdGlvbk1hcmdpbn1weDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRXYXJuaW5nID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmVycm9yQ29sb3J9O1xuICBmb250LXdlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWxlY3RGb250V2VpZ2h0Qm9sZH07XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkRXhwb3J0TGluayA9IHN0eWxlZC5hYFxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG5gO1xuXG5leHBvcnQgY29uc3QgRXhwb3J0TWFwTGluayA9ICh7Y2hpbGRyZW4sIC4uLnByb3BzfSkgPT4gKFxuICA8U3R5bGVkRXhwb3J0TGluayB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgey4uLnByb3BzfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvU3R5bGVkRXhwb3J0TGluaz5cbik7XG4iXX0=