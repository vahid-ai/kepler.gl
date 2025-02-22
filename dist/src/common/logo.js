"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@kepler.gl/constants");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var LogoTitle = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  margin-left: 6px;\n"])));

var LogoName = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  .logo__link {\n    color: ", ";\n    font-size: 14px;\n    font-weight: 600;\n    letter-spacing: 1.17px;\n  }\n"])), function (props) {
  return props.theme.logoColor;
});

var LogoVersion = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 10px;\n  color: ", ";\n  letter-spacing: 0.83px;\n  line-height: 14px;\n"])), function (props) {
  return props.theme.subtextColor;
});

var LogoWrapper = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: flex-start;\n"])));

var LogoSvgWrapper = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 3px;\n"])));

var LogoSvg = function LogoSvg() {
  return /*#__PURE__*/_react["default"].createElement("svg", {
    className: "side-panel-logo__logo",
    width: "22px",
    height: "15px",
    viewBox: "0 0 22 15"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(11, -3) rotate(45.000000)"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    fill: "#535C6C",
    x: "0",
    y: "5",
    width: "10",
    height: "10"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    fill: "#1FBAD6",
    x: "5",
    y: "0",
    width: "10",
    height: "10"
  })));
};

var KeplerGlLogo = function KeplerGlLogo(_ref) {
  var _ref$appName = _ref.appName,
      appName = _ref$appName === void 0 ? _constants.KEPLER_GL_NAME : _ref$appName,
      _ref$appWebsite = _ref.appWebsite,
      appWebsite = _ref$appWebsite === void 0 ? _constants.KEPLER_GL_WEBSITE : _ref$appWebsite,
      _ref$version = _ref.version,
      version = _ref$version === void 0 ? _constants.KEPLER_GL_VERSION : _ref$version;
  return /*#__PURE__*/_react["default"].createElement(LogoWrapper, {
    className: "side-panel-logo"
  }, /*#__PURE__*/_react["default"].createElement(LogoSvgWrapper, null, /*#__PURE__*/_react["default"].createElement(LogoSvg, null)), /*#__PURE__*/_react["default"].createElement(LogoTitle, {
    className: "logo__title"
  }, /*#__PURE__*/_react["default"].createElement(LogoName, {
    className: "logo__name"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "logo__link",
    target: "_blank",
    rel: "noopener noreferrer",
    href: appWebsite
  }, appName)), version ? /*#__PURE__*/_react["default"].createElement(LogoVersion, {
    className: "logo__version"
  }, version) : null));
};

var _default = KeplerGlLogo;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vbG9nby50c3giXSwibmFtZXMiOlsiTG9nb1RpdGxlIiwic3R5bGVkIiwiZGl2IiwiTG9nb05hbWUiLCJwcm9wcyIsInRoZW1lIiwibG9nb0NvbG9yIiwiTG9nb1ZlcnNpb24iLCJzdWJ0ZXh0Q29sb3IiLCJMb2dvV3JhcHBlciIsIkxvZ29TdmdXcmFwcGVyIiwiTG9nb1N2ZyIsIktlcGxlckdsTG9nbyIsImFwcE5hbWUiLCJLRVBMRVJfR0xfTkFNRSIsImFwcFdlYnNpdGUiLCJLRVBMRVJfR0xfV0VCU0lURSIsInZlcnNpb24iLCJLRVBMRVJfR0xfVkVSU0lPTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDZCQUFPQyxHQUFWLHVJQUFmOztBQUtBLElBQU1DLFFBQVEsR0FBR0YsNkJBQU9DLEdBQVYsNk1BRUQsVUFBQUUsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxTQUFoQjtBQUFBLENBRkosQ0FBZDs7QUFRQSxJQUFNQyxXQUFXLEdBQUdOLDZCQUFPQyxHQUFWLGdMQUVOLFVBQUFFLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsWUFBaEI7QUFBQSxDQUZDLENBQWpCOztBQU9BLElBQU1DLFdBQVcsR0FBR1IsNkJBQU9DLEdBQVYsd0lBQWpCOztBQUtBLElBQU1RLGNBQWMsR0FBR1QsNkJBQU9DLEdBQVYsOEdBQXBCOztBQUlBLElBQU1TLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsc0JBQ2Q7QUFBSyxJQUFBLFNBQVMsRUFBQyx1QkFBZjtBQUF1QyxJQUFBLEtBQUssRUFBQyxNQUE3QztBQUFvRCxJQUFBLE1BQU0sRUFBQyxNQUEzRDtBQUFrRSxJQUFBLE9BQU8sRUFBQztBQUExRSxrQkFDRTtBQUFHLElBQUEsU0FBUyxFQUFDO0FBQWIsa0JBQ0U7QUFBTSxJQUFBLElBQUksRUFBQyxTQUFYO0FBQXFCLElBQUEsQ0FBQyxFQUFDLEdBQXZCO0FBQTJCLElBQUEsQ0FBQyxFQUFDLEdBQTdCO0FBQWlDLElBQUEsS0FBSyxFQUFDLElBQXZDO0FBQTRDLElBQUEsTUFBTSxFQUFDO0FBQW5ELElBREYsZUFFRTtBQUFNLElBQUEsSUFBSSxFQUFDLFNBQVg7QUFBcUIsSUFBQSxDQUFDLEVBQUMsR0FBdkI7QUFBMkIsSUFBQSxDQUFDLEVBQUMsR0FBN0I7QUFBaUMsSUFBQSxLQUFLLEVBQUMsSUFBdkM7QUFBNEMsSUFBQSxNQUFNLEVBQUM7QUFBbkQsSUFGRixDQURGLENBRGM7QUFBQSxDQUFoQjs7QUFjQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLDBCQUNuQkMsT0FEbUI7QUFBQSxNQUNuQkEsT0FEbUIsNkJBQ1RDLHlCQURTO0FBQUEsNkJBRW5CQyxVQUZtQjtBQUFBLE1BRW5CQSxVQUZtQixnQ0FFTkMsNEJBRk07QUFBQSwwQkFHbkJDLE9BSG1CO0FBQUEsTUFHbkJBLE9BSG1CLDZCQUdUQyw0QkFIUztBQUFBLHNCQUtuQixnQ0FBQyxXQUFEO0FBQWEsSUFBQSxTQUFTLEVBQUM7QUFBdkIsa0JBQ0UsZ0NBQUMsY0FBRCxxQkFDRSxnQ0FBQyxPQUFELE9BREYsQ0FERixlQUlFLGdDQUFDLFNBQUQ7QUFBVyxJQUFBLFNBQVMsRUFBQztBQUFyQixrQkFDRSxnQ0FBQyxRQUFEO0FBQVUsSUFBQSxTQUFTLEVBQUM7QUFBcEIsa0JBQ0U7QUFBRyxJQUFBLFNBQVMsRUFBQyxZQUFiO0FBQTBCLElBQUEsTUFBTSxFQUFDLFFBQWpDO0FBQTBDLElBQUEsR0FBRyxFQUFDLHFCQUE5QztBQUFvRSxJQUFBLElBQUksRUFBRUg7QUFBMUUsS0FDR0YsT0FESCxDQURGLENBREYsRUFNR0ksT0FBTyxnQkFBRyxnQ0FBQyxXQUFEO0FBQWEsSUFBQSxTQUFTLEVBQUM7QUFBdkIsS0FBd0NBLE9BQXhDLENBQUgsR0FBb0UsSUFOOUUsQ0FKRixDQUxtQjtBQUFBLENBQXJCOztlQW9CZUwsWSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7S0VQTEVSX0dMX05BTUUsIEtFUExFUl9HTF9WRVJTSU9OLCBLRVBMRVJfR0xfV0VCU0lURX0gZnJvbSAnQGtlcGxlci5nbC9jb25zdGFudHMnO1xuXG5jb25zdCBMb2dvVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG5gO1xuXG5jb25zdCBMb2dvTmFtZSA9IHN0eWxlZC5kaXZgXG4gIC5sb2dvX19saW5rIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sb2dvQ29sb3J9O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjE3cHg7XG4gIH1cbmA7XG5jb25zdCBMb2dvVmVyc2lvbiA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yfTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuODNweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG5gO1xuXG5jb25zdCBMb2dvV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuYDtcblxuY29uc3QgTG9nb1N2Z1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAzcHg7XG5gO1xuXG5jb25zdCBMb2dvU3ZnID0gKCkgPT4gKFxuICA8c3ZnIGNsYXNzTmFtZT1cInNpZGUtcGFuZWwtbG9nb19fbG9nb1wiIHdpZHRoPVwiMjJweFwiIGhlaWdodD1cIjE1cHhcIiB2aWV3Qm94PVwiMCAwIDIyIDE1XCI+XG4gICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDExLCAtMykgcm90YXRlKDQ1LjAwMDAwMClcIj5cbiAgICAgIDxyZWN0IGZpbGw9XCIjNTM1QzZDXCIgeD1cIjBcIiB5PVwiNVwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIC8+XG4gICAgICA8cmVjdCBmaWxsPVwiIzFGQkFENlwiIHg9XCI1XCIgeT1cIjBcIiB3aWR0aD1cIjEwXCIgaGVpZ2h0PVwiMTBcIiAvPlxuICAgIDwvZz5cbiAgPC9zdmc+XG4pO1xuaW50ZXJmYWNlIEtlcGxlckdsTG9nb1Byb3BzIHtcbiAgYXBwTmFtZT86IHN0cmluZztcbiAgdmVyc2lvbj86IHN0cmluZyB8IGJvb2xlYW47XG4gIGFwcFdlYnNpdGU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IEtlcGxlckdsTG9nbyA9ICh7XG4gIGFwcE5hbWUgPSBLRVBMRVJfR0xfTkFNRSxcbiAgYXBwV2Vic2l0ZSA9IEtFUExFUl9HTF9XRUJTSVRFLFxuICB2ZXJzaW9uID0gS0VQTEVSX0dMX1ZFUlNJT05cbn06IEtlcGxlckdsTG9nb1Byb3BzKSA9PiAoXG4gIDxMb2dvV3JhcHBlciBjbGFzc05hbWU9XCJzaWRlLXBhbmVsLWxvZ29cIj5cbiAgICA8TG9nb1N2Z1dyYXBwZXI+XG4gICAgICA8TG9nb1N2ZyAvPlxuICAgIDwvTG9nb1N2Z1dyYXBwZXI+XG4gICAgPExvZ29UaXRsZSBjbGFzc05hbWU9XCJsb2dvX190aXRsZVwiPlxuICAgICAgPExvZ29OYW1lIGNsYXNzTmFtZT1cImxvZ29fX25hbWVcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9nb19fbGlua1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPXthcHBXZWJzaXRlfT5cbiAgICAgICAgICB7YXBwTmFtZX1cbiAgICAgICAgPC9hPlxuICAgICAgPC9Mb2dvTmFtZT5cbiAgICAgIHt2ZXJzaW9uID8gPExvZ29WZXJzaW9uIGNsYXNzTmFtZT1cImxvZ29fX3ZlcnNpb25cIj57dmVyc2lvbn08L0xvZ29WZXJzaW9uPiA6IG51bGx9XG4gICAgPC9Mb2dvVGl0bGU+XG4gIDwvTG9nb1dyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBLZXBsZXJHbExvZ287XG4iXX0=