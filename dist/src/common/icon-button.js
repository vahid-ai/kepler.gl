"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.IconButton = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("./styled-components");

var _templateObject;

var IconButton = (0, _styledComponents["default"])(_styledComponents2.Button)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", "px;\n  height: 32px;\n  color: ", ";\n  background-color: ", ";\n  border-radius: 4px;\n  margin-left: 7px;\n  border: 0;\n  padding: 0;\n\n  .__react_component_tooltip {\n    font-family: ", ";\n  }\n  svg {\n    margin: 0;\n  }\n  &.active {\n    background-color: ", ";\n  }\n"])), function (props) {
  return props.collapsed ? 0 : 32;
}, function (props) {
  return props.theme.playbackButtonColor;
}, function (props) {
  return props.theme.playbackButtonBgColor;
}, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.playbackButtonActBgColor;
});
exports.IconButton = IconButton;
var _default = IconButton;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vaWNvbi1idXR0b24udHN4Il0sIm5hbWVzIjpbIkljb25CdXR0b24iLCJCdXR0b24iLCJwcm9wcyIsImNvbGxhcHNlZCIsInRoZW1lIiwicGxheWJhY2tCdXR0b25Db2xvciIsInBsYXliYWNrQnV0dG9uQmdDb2xvciIsImZvbnRGYW1pbHkiLCJwbGF5YmFja0J1dHRvbkFjdEJnQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFRTyxJQUFNQSxVQUFVLEdBQUcsa0NBQU9DLHlCQUFQLENBQUgsNlhBQ1osVUFBQUMsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ0MsU0FBTixHQUFrQixDQUFsQixHQUFzQixFQUEzQjtBQUFBLENBRE8sRUFHWixVQUFBRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLG1CQUFoQjtBQUFBLENBSE8sRUFJRCxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlFLHFCQUFoQjtBQUFBLENBSkosRUFXSixVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlHLFVBQWhCO0FBQUEsQ0FYRCxFQWlCQyxVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlJLHdCQUFoQjtBQUFBLENBakJOLENBQWhCOztlQXFCUVIsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW91c2VFdmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0J1dHRvbiwgQnV0dG9uUHJvcHN9IGZyb20gJy4vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW50ZXJmYWNlIEljb25CdXR0b25Qcm9wcyBleHRlbmRzIEJ1dHRvblByb3BzIHtcbiAgY29sbGFwc2VkPzogYm9vbGVhbjtcbiAgdGhlbWU/OiBvYmplY3Q7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgb25DbGljaz86IChldmVudDogTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBJY29uQnV0dG9uID0gc3R5bGVkKEJ1dHRvbik8SWNvbkJ1dHRvblByb3BzPmBcbiAgd2lkdGg6ICR7cHJvcHMgPT4gKHByb3BzLmNvbGxhcHNlZCA/IDAgOiAzMil9cHg7XG4gIGhlaWdodDogMzJweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGxheWJhY2tCdXR0b25Db2xvcn07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGxheWJhY2tCdXR0b25CZ0NvbG9yfTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tbGVmdDogN3B4O1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG5cbiAgLl9fcmVhY3RfY29tcG9uZW50X3Rvb2x0aXAge1xuICAgIGZvbnQtZmFtaWx5OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnRGYW1pbHl9O1xuICB9XG4gIHN2ZyB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBsYXliYWNrQnV0dG9uQWN0QmdDb2xvcn07XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEljb25CdXR0b247XG4iXX0=