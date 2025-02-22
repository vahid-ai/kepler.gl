"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

var animationName = (0, _styledComponents.keyframes)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"])));

var Loader = _styledComponents["default"].span(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    border-left-color: ", ";\n    animation: _preloader_spin_ 500ms linear infinite;\n    border-radius: 50%;\n    border-top-color: transparent;\n    border-bottom-color: transparent;\n    border-right-color: transparent;\n    cursor: wait;\n    border-style: solid;\n    display: block;\n    animation-name: ", ";\n}"])), function (props) {
  return props.color || props.theme.primaryBtnBgd;
}, animationName);

var LoadingWrapper = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  border-radius: 50%;\n  border: 3px solid ", ";\n  padding: 2px;\n"])), function (props) {
  return props.borderColor || props.theme.borderColorLT;
});

var LoadingSpinner = function LoadingSpinner(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 32 : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '' : _ref$color,
      _ref$strokeWidth = _ref.strokeWidth,
      strokeWidth = _ref$strokeWidth === void 0 ? 3 : _ref$strokeWidth,
      _ref$gap = _ref.gap,
      gap = _ref$gap === void 0 ? 2 : _ref$gap;
  return /*#__PURE__*/_react["default"].createElement(LoadingWrapper, {
    style: {
      width: "".concat(size, "px"),
      height: "".concat(size, "px"),
      padding: "".concat(gap, "px")
    }
  }, /*#__PURE__*/_react["default"].createElement(Loader, {
    color: color,
    style: {
      width: "".concat(size - strokeWidth * 2 - gap * 2, "px"),
      height: "".concat(size - strokeWidth * 2 - gap * 2, "px")
    }
  }));
};

var _default = LoadingSpinner;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vbG9hZGluZy1zcGlubmVyLnRzeCJdLCJuYW1lcyI6WyJhbmltYXRpb25OYW1lIiwia2V5ZnJhbWVzIiwiTG9hZGVyIiwic3R5bGVkIiwic3BhbiIsInByb3BzIiwiY29sb3IiLCJ0aGVtZSIsInByaW1hcnlCdG5CZ2QiLCJMb2FkaW5nV3JhcHBlciIsImRpdiIsImJvcmRlckNvbG9yIiwiYm9yZGVyQ29sb3JMVCIsIkxvYWRpbmdTcGlubmVyIiwic2l6ZSIsInN0cm9rZVdpZHRoIiwiZ2FwIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOzs7O0FBRUEsSUFBTUEsYUFBYSxPQUFHQywyQkFBSCxtTEFBbkI7O0FBU0EsSUFBTUMsTUFBTSxHQUFHQyw2QkFBT0MsSUFBVix5WkFDYSxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLElBQWVELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxhQUEvQjtBQUFBLENBRGxCLEVBVVVSLGFBVlYsQ0FBWjs7QUFpQkEsSUFBTVMsY0FBYyxHQUFHTiw2QkFBT08sR0FBViw4SkFFRSxVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDTSxXQUFOLElBQXFCTixLQUFLLENBQUNFLEtBQU4sQ0FBWUssYUFBckM7QUFBQSxDQUZQLENBQXBCOztBQWFBLElBQU1DLGNBQTZDLEdBQUcsU0FBaERBLGNBQWdEO0FBQUEsdUJBQ3BEQyxJQURvRDtBQUFBLE1BQ3BEQSxJQURvRCwwQkFDN0MsRUFENkM7QUFBQSx3QkFFcERSLEtBRm9EO0FBQUEsTUFFcERBLEtBRm9ELDJCQUU1QyxFQUY0QztBQUFBLDhCQUdwRFMsV0FIb0Q7QUFBQSxNQUdwREEsV0FIb0QsaUNBR3RDLENBSHNDO0FBQUEsc0JBSXBEQyxHQUpvRDtBQUFBLE1BSXBEQSxHQUpvRCx5QkFJOUMsQ0FKOEM7QUFBQSxzQkFNcEQsZ0NBQUMsY0FBRDtBQUFnQixJQUFBLEtBQUssRUFBRTtBQUFDQyxNQUFBQSxLQUFLLFlBQUtILElBQUwsT0FBTjtBQUFxQkksTUFBQUEsTUFBTSxZQUFLSixJQUFMLE9BQTNCO0FBQTBDSyxNQUFBQSxPQUFPLFlBQUtILEdBQUw7QUFBakQ7QUFBdkIsa0JBQ0UsZ0NBQUMsTUFBRDtBQUNFLElBQUEsS0FBSyxFQUFFVixLQURUO0FBRUUsSUFBQSxLQUFLLEVBQUU7QUFDTFcsTUFBQUEsS0FBSyxZQUFLSCxJQUFJLEdBQUdDLFdBQVcsR0FBRyxDQUFyQixHQUF5QkMsR0FBRyxHQUFHLENBQXBDLE9BREE7QUFFTEUsTUFBQUEsTUFBTSxZQUFLSixJQUFJLEdBQUdDLFdBQVcsR0FBRyxDQUFyQixHQUF5QkMsR0FBRyxHQUFHLENBQXBDO0FBRkQ7QUFGVCxJQURGLENBTm9EO0FBQUEsQ0FBdEQ7O2VBaUJlSCxjIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHtrZXlmcmFtZXN9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgYW5pbWF0aW9uTmFtZSA9IGtleWZyYW1lc2BcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbmA7XG5cbmNvbnN0IExvYWRlciA9IHN0eWxlZC5zcGFuYFxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yIHx8IHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2R9O1xuICAgIGFuaW1hdGlvbjogX3ByZWxvYWRlcl9zcGluXyA1MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY3Vyc29yOiB3YWl0O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYW5pbWF0aW9uLW5hbWU6ICR7YW5pbWF0aW9uTmFtZX07XG59YDtcblxuaW50ZXJmYWNlIExvYWRpbmdXcmFwcGVyUHJvcHMge1xuICBib3JkZXJDb2xvcj86IHN0cmluZztcbn1cblxuY29uc3QgTG9hZGluZ1dyYXBwZXIgPSBzdHlsZWQuZGl2PExvYWRpbmdXcmFwcGVyUHJvcHM+YFxuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogM3B4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMuYm9yZGVyQ29sb3IgfHwgcHJvcHMudGhlbWUuYm9yZGVyQ29sb3JMVH07XG4gIHBhZGRpbmc6IDJweDtcbmA7XG5cbmludGVyZmFjZSBMb2FkaW5nU3Bpbm5lclByb3BzIHtcbiAgc2l6ZT86IG51bWJlcjtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIHN0cm9rZVdpZHRoPzogbnVtYmVyO1xuICBnYXA/OiBudW1iZXI7XG59XG5cbmNvbnN0IExvYWRpbmdTcGlubmVyOiBSZWFjdC5GQzxMb2FkaW5nU3Bpbm5lclByb3BzPiA9ICh7XG4gIHNpemUgPSAzMixcbiAgY29sb3IgPSAnJyxcbiAgc3Ryb2tlV2lkdGggPSAzLFxuICBnYXAgPSAyXG59KSA9PiAoXG4gIDxMb2FkaW5nV3JhcHBlciBzdHlsZT17e3dpZHRoOiBgJHtzaXplfXB4YCwgaGVpZ2h0OiBgJHtzaXplfXB4YCwgcGFkZGluZzogYCR7Z2FwfXB4YH19PlxuICAgIDxMb2FkZXJcbiAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBgJHtzaXplIC0gc3Ryb2tlV2lkdGggKiAyIC0gZ2FwICogMn1weGAsXG4gICAgICAgIGhlaWdodDogYCR7c2l6ZSAtIHN0cm9rZVdpZHRoICogMiAtIGdhcCAqIDJ9cHhgXG4gICAgICB9fVxuICAgIC8+XG4gIDwvTG9hZGluZ1dyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nU3Bpbm5lcjtcbiJdfQ==