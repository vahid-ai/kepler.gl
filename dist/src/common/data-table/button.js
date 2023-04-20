"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var StyledButton = _styledComponents["default"].button(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  transition: ", ";\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  padding: 0;\n\n  &:hover {\n    opacity: 0.8;\n  }\n"])), function (props) {
  return props.theme.optionButtonColor;
}, function (props) {
  return props.theme.transition;
});

var noop = function noop() {};

var Button = function Button(_ref) {
  var _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? noop : _ref$onClick,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? '' : _ref$text,
      children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["onClick", "disabled", "text", "children"]);
  return /*#__PURE__*/_react["default"].createElement(StyledButton, (0, _extends2["default"])({}, props, {
    onClick: disabled ? undefined : onClick
  }), text || children);
};

var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vZGF0YS10YWJsZS9idXR0b24udHN4Il0sIm5hbWVzIjpbIlN0eWxlZEJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiIsInByb3BzIiwidGhlbWUiLCJvcHRpb25CdXR0b25Db2xvciIsInRyYW5zaXRpb24iLCJub29wIiwiQnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwidGV4dCIsImNoaWxkcmVuIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLDZCQUFPQyxNQUFWLHdVQUNQLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsaUJBQWhCO0FBQUEsQ0FERSxFQU1GLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsVUFBaEI7QUFBQSxDQU5ILENBQWxCOztBQXVCQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSwwQkFBRUMsT0FBRjtBQUFBLE1BQUVBLE9BQUYsNkJBQVlGLElBQVo7QUFBQSwyQkFBa0JHLFFBQWxCO0FBQUEsTUFBa0JBLFFBQWxCLDhCQUE2QixLQUE3QjtBQUFBLHVCQUFvQ0MsSUFBcEM7QUFBQSxNQUFvQ0EsSUFBcEMsMEJBQTJDLEVBQTNDO0FBQUEsTUFBK0NDLFFBQS9DLFFBQStDQSxRQUEvQztBQUFBLE1BQTREVCxLQUE1RDtBQUFBLHNCQUNiLGdDQUFDLFlBQUQsZ0NBQWtCQSxLQUFsQjtBQUF5QixJQUFBLE9BQU8sRUFBRU8sUUFBUSxHQUFHRyxTQUFILEdBQWVKO0FBQXpELE1BQ0dFLElBQUksSUFBSUMsUUFEWCxDQURhO0FBQUEsQ0FBZjs7ZUFNZUosTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge01vdXNlRXZlbnRIYW5kbGVyfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUub3B0aW9uQnV0dG9uQ29sb3J9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNpdGlvbn07XG4gIGhlaWdodDogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbmA7XG5cbnR5cGUgQnV0dG9uUHJvcHMgPSB7XG4gIG9uQ2xpY2s/OiBNb3VzZUV2ZW50SGFuZGxlcjxIVE1MQnV0dG9uRWxlbWVudD47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgdGV4dD86IHN0cmluZztcbn0gJiBSZWFjdC5CdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD47XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcbmNvbnN0IEJ1dHRvbiA9ICh7b25DbGljayA9IG5vb3AsIGRpc2FibGVkID0gZmFsc2UsIHRleHQgPSAnJywgY2hpbGRyZW4sIC4uLnByb3BzfTogQnV0dG9uUHJvcHMpID0+IChcbiAgPFN0eWxlZEJ1dHRvbiB7Li4ucHJvcHN9IG9uQ2xpY2s9e2Rpc2FibGVkID8gdW5kZWZpbmVkIDogb25DbGlja30+XG4gICAge3RleHQgfHwgY2hpbGRyZW59XG4gIDwvU3R5bGVkQnV0dG9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIl19