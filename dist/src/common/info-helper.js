"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _localization = require("@kepler.gl/localization");

var _styledComponents = require("./styled-components");

var _icons = require("./icons");

var _styledComponents2 = _interopRequireDefault(require("styled-components"));

var _utils = require("@kepler.gl/utils");

var _templateObject;

var StyledInfoHelper = _styledComponents2["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  margin-left: 10px;\n  color: ", ";\n  display: inline-flex;\n  .info-helper__content {\n    width: ", ";\n    max-width: ", ";\n  }\n  :hover {\n    cursor: pointer;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.width ? "".concat(props.width, "px") : 'auto';
}, function (props) {
  return props.width ? 'auto' : '100px';
}, function (props) {
  return props.theme.textColorHl;
});

function InfoHelperFactory() {
  var InfoHelper = function InfoHelper(_ref) {
    var description = _ref.description,
        property = _ref.property,
        containerClass = _ref.containerClass,
        width = _ref.width,
        id = _ref.id;
    // TODO: move intl out
    var intl = (0, _reactIntl.useIntl)();
    return /*#__PURE__*/_react["default"].createElement(StyledInfoHelper, {
      className: "info-helper ".concat(containerClass || ''),
      width: width,
      "data-tip": true,
      "data-for": id
    }, /*#__PURE__*/_react["default"].createElement(_icons.Docs, {
      height: "16px"
    }), /*#__PURE__*/_react["default"].createElement(_styledComponents.Tooltip, {
      id: id,
      effect: "solid"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "info-helper__content"
    }, description && /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: description,
      defaultValue: description,
      values: {
        property: intl.formatMessage({
          id: property ? "property.".concat((0, _utils.camelize)(property)) : 'misc.empty'
        })
      }
    }))));
  };

  return InfoHelper;
}

var _default = InfoHelperFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vaW5mby1oZWxwZXIudHN4Il0sIm5hbWVzIjpbIlN0eWxlZEluZm9IZWxwZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwibGFiZWxDb2xvciIsIndpZHRoIiwidGV4dENvbG9ySGwiLCJJbmZvSGVscGVyRmFjdG9yeSIsIkluZm9IZWxwZXIiLCJkZXNjcmlwdGlvbiIsInByb3BlcnR5IiwiY29udGFpbmVyQ2xhc3MiLCJpZCIsImludGwiLCJmb3JtYXRNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQU1BLElBQU1BLGdCQUFnQixHQUFHQyw4QkFBT0MsR0FBVixpVEFHWCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFVBQWhCO0FBQUEsQ0FITSxFQU1ULFVBQUFGLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNHLEtBQU4sYUFBaUJILEtBQUssQ0FBQ0csS0FBdkIsVUFBbUMsTUFBeEM7QUFBQSxDQU5JLEVBT0wsVUFBQUgsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0csS0FBTixHQUFjLE1BQWQsR0FBdUIsT0FBNUI7QUFBQSxDQVBBLEVBV1QsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxXQUFoQjtBQUFBLENBWEksQ0FBdEI7O0FBdUJBLFNBQVNDLGlCQUFULEdBQTZCO0FBQzNCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQXlFO0FBQUEsUUFBdkVDLFdBQXVFLFFBQXZFQSxXQUF1RTtBQUFBLFFBQTFEQyxRQUEwRCxRQUExREEsUUFBMEQ7QUFBQSxRQUFoREMsY0FBZ0QsUUFBaERBLGNBQWdEO0FBQUEsUUFBaENOLEtBQWdDLFFBQWhDQSxLQUFnQztBQUFBLFFBQXpCTyxFQUF5QixRQUF6QkEsRUFBeUI7QUFDMUY7QUFDQSxRQUFNQyxJQUFJLEdBQUcseUJBQWI7QUFFQSx3QkFDRSxnQ0FBQyxnQkFBRDtBQUNFLE1BQUEsU0FBUyx3QkFBaUJGLGNBQWMsSUFBSSxFQUFuQyxDQURYO0FBRUUsTUFBQSxLQUFLLEVBQUVOLEtBRlQ7QUFHRSxzQkFIRjtBQUlFLGtCQUFVTztBQUpaLG9CQU1FLGdDQUFDLFdBQUQ7QUFBTSxNQUFBLE1BQU0sRUFBQztBQUFiLE1BTkYsZUFPRSxnQ0FBQyx5QkFBRDtBQUFTLE1BQUEsRUFBRSxFQUFFQSxFQUFiO0FBQWlCLE1BQUEsTUFBTSxFQUFDO0FBQXhCLG9CQUNFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixPQUNHSCxXQUFXLGlCQUNWLGdDQUFDLDhCQUFEO0FBQ0UsTUFBQSxFQUFFLEVBQUVBLFdBRE47QUFFRSxNQUFBLFlBQVksRUFBRUEsV0FGaEI7QUFHRSxNQUFBLE1BQU0sRUFBRTtBQUNOQyxRQUFBQSxRQUFRLEVBQUVHLElBQUksQ0FBQ0MsYUFBTCxDQUFtQjtBQUMzQkYsVUFBQUEsRUFBRSxFQUFFRixRQUFRLHNCQUFlLHFCQUFTQSxRQUFULENBQWYsSUFBc0M7QUFEdkIsU0FBbkI7QUFESjtBQUhWLE1BRkosQ0FERixDQVBGLENBREY7QUF5QkQsR0E3QkQ7O0FBOEJBLFNBQU9GLFVBQVA7QUFDRDs7ZUFFY0QsaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHt1c2VJbnRsfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnQGtlcGxlci5nbC9sb2NhbGl6YXRpb24nO1xuaW1wb3J0IHtUb29sdGlwfSBmcm9tICcuL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7RG9jc30gZnJvbSAnLi9pY29ucyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Y2FtZWxpemV9IGZyb20gJ0BrZXBsZXIuZ2wvdXRpbHMnO1xuXG5pbnRlcmZhY2UgU3R5bGVkSW5mb0hlbHBlclByb3BzIHtcbiAgd2lkdGg/OiBudW1iZXI7XG59XG5cbmNvbnN0IFN0eWxlZEluZm9IZWxwZXIgPSBzdHlsZWQuZGl2PFN0eWxlZEluZm9IZWxwZXJQcm9wcz5gXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIC5pbmZvLWhlbHBlcl9fY29udGVudCB7XG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gKHByb3BzLndpZHRoID8gYCR7cHJvcHMud2lkdGh9cHhgIDogJ2F1dG8nKX07XG4gICAgbWF4LXdpZHRoOiAke3Byb3BzID0+IChwcm9wcy53aWR0aCA/ICdhdXRvJyA6ICcxMDBweCcpfTtcbiAgfVxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG4gIH1cbmA7XG5cbmludGVyZmFjZSBJbmZvSGVscGVyUHJvcHMge1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjb250YWluZXJDbGFzcz86IHN0cmluZztcbiAgd2lkdGg/OiBudW1iZXI7XG4gIHByb3BlcnR5Pzogc3RyaW5nO1xuICBpZD86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gSW5mb0hlbHBlckZhY3RvcnkoKSB7XG4gIGNvbnN0IEluZm9IZWxwZXIgPSAoe2Rlc2NyaXB0aW9uLCBwcm9wZXJ0eSwgY29udGFpbmVyQ2xhc3MsIHdpZHRoLCBpZH06IEluZm9IZWxwZXJQcm9wcykgPT4ge1xuICAgIC8vIFRPRE86IG1vdmUgaW50bCBvdXRcbiAgICBjb25zdCBpbnRsID0gdXNlSW50bCgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRJbmZvSGVscGVyXG4gICAgICAgIGNsYXNzTmFtZT17YGluZm8taGVscGVyICR7Y29udGFpbmVyQ2xhc3MgfHwgJyd9YH1cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBkYXRhLXRpcFxuICAgICAgICBkYXRhLWZvcj17aWR9XG4gICAgICA+XG4gICAgICAgIDxEb2NzIGhlaWdodD1cIjE2cHhcIiAvPlxuICAgICAgICA8VG9vbHRpcCBpZD17aWR9IGVmZmVjdD1cInNvbGlkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWhlbHBlcl9fY29udGVudFwiPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2VcbiAgICAgICAgICAgICAgICBpZD17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICB2YWx1ZXM9e3tcbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBpbnRsLmZvcm1hdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBpZDogcHJvcGVydHkgPyBgcHJvcGVydHkuJHtjYW1lbGl6ZShwcm9wZXJ0eSl9YCA6ICdtaXNjLmVtcHR5J1xuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgPC9TdHlsZWRJbmZvSGVscGVyPlxuICAgICk7XG4gIH07XG4gIHJldHVybiBJbmZvSGVscGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBJbmZvSGVscGVyRmFjdG9yeTtcbiJdfQ==