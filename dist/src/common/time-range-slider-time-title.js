"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icons = require("./icons");

var _utils = require("@kepler.gl/utils");

var _templateObject;

var TimeValueWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  font-size: ", ";\n  justify-content: ", ";\n\n  .horizontal-bar {\n    padding: 0 12px;\n    color: ", ";\n  }\n\n  .time-value {\n    display: flex;\n    flex-direction: ", ";\n    align-items: flex-start;\n    max-width: ", ";\n    span {\n      color: ", ";\n    }\n  }\n\n  .time-value:last-child {\n    align-items: flex-end;\n    text-align: right;\n  }\n"])), function (props) {
  return props.theme.timeTitleFontSize;
}, function (props) {
  return props.isEnlarged ? 'center' : 'space-between';
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.isEnlarged ? 'row' : 'column';
}, function (props) {
  return !props.isEnlarged ? '40%' : 'auto';
}, function (props) {
  return props.theme.textColor;
});

var TimeValue = function TimeValue(_ref) {
  var value = _ref.value;
  return (
    /*#__PURE__*/
    // render two lines if not enlarged
    _react["default"].createElement("div", {
      className: "time-value"
    }, /*#__PURE__*/_react["default"].createElement("span", null, value))
  );
};

function TimeRangeSliderTimeTitleFactory() {
  var TimeTitle = function TimeTitle(_ref2) {
    var value = _ref2.value,
        isEnlarged = _ref2.isEnlarged,
        timezone = _ref2.timezone,
        timeFormat = _ref2.timeFormat;
    return /*#__PURE__*/_react["default"].createElement(TimeValueWrapper, {
      isEnlarged: isEnlarged,
      className: "time-range-slider__time-title"
    }, /*#__PURE__*/_react["default"].createElement(TimeValue, {
      key: 0,
      value: (0, _utils.datetimeFormatter)(timezone)(timeFormat)(value[0])
    }), isEnlarged ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "horizontal-bar"
    }, /*#__PURE__*/_react["default"].createElement(_icons.Minus, {
      height: "12px"
    })) : null, /*#__PURE__*/_react["default"].createElement(TimeValue, {
      key: 1,
      value: (0, _utils.datetimeFormatter)(timezone)(timeFormat)(value[1])
    }));
  };

  return TimeTitle;
}

var _default = TimeRangeSliderTimeTitleFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vdGltZS1yYW5nZS1zbGlkZXItdGltZS10aXRsZS50c3giXSwibmFtZXMiOlsiVGltZVZhbHVlV3JhcHBlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJ0aW1lVGl0bGVGb250U2l6ZSIsImlzRW5sYXJnZWQiLCJ0ZXh0Q29sb3IiLCJUaW1lVmFsdWUiLCJ2YWx1ZSIsIlRpbWVSYW5nZVNsaWRlclRpbWVUaXRsZUZhY3RvcnkiLCJUaW1lVGl0bGUiLCJ0aW1lem9uZSIsInRpbWVGb3JtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBTUEsSUFBTUEsZ0JBQWdCLEdBQUdDLDZCQUFPQyxHQUFWLDhlQUdQLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsaUJBQWhCO0FBQUEsQ0FIRSxFQUlELFVBQUFGLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNHLFVBQU4sR0FBbUIsUUFBbkIsR0FBOEIsZUFBbkM7QUFBQSxDQUpKLEVBUVQsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxTQUFoQjtBQUFBLENBUkksRUFhQSxVQUFBSixLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDRyxVQUFOLEdBQW1CLEtBQW5CLEdBQTJCLFFBQWhDO0FBQUEsQ0FiTCxFQWVMLFVBQUFILEtBQUs7QUFBQSxTQUFLLENBQUNBLEtBQUssQ0FBQ0csVUFBUCxHQUFvQixLQUFwQixHQUE0QixNQUFqQztBQUFBLENBZkEsRUFpQlAsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxTQUFoQjtBQUFBLENBakJFLENBQXRCOztBQTJCQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLE1BQUVDLEtBQUYsUUFBRUEsS0FBRjtBQUFBO0FBQUE7QUFDaEI7QUFDQTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0UsOENBQU9BLEtBQVAsQ0FERjtBQUZnQjtBQUFBLENBQWxCOztBQWNBLFNBQVNDLCtCQUFULEdBQTJDO0FBQ3pDLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsUUFBRUYsS0FBRixTQUFFQSxLQUFGO0FBQUEsUUFBU0gsVUFBVCxTQUFTQSxVQUFUO0FBQUEsUUFBcUJNLFFBQXJCLFNBQXFCQSxRQUFyQjtBQUFBLFFBQStCQyxVQUEvQixTQUErQkEsVUFBL0I7QUFBQSx3QkFDaEIsZ0NBQUMsZ0JBQUQ7QUFBa0IsTUFBQSxVQUFVLEVBQUVQLFVBQTlCO0FBQTBDLE1BQUEsU0FBUyxFQUFDO0FBQXBELG9CQUNFLGdDQUFDLFNBQUQ7QUFBVyxNQUFBLEdBQUcsRUFBRSxDQUFoQjtBQUFtQixNQUFBLEtBQUssRUFBRSw4QkFBa0JNLFFBQWxCLEVBQTRCQyxVQUE1QixFQUF3Q0osS0FBSyxDQUFDLENBQUQsQ0FBN0M7QUFBMUIsTUFERixFQUVHSCxVQUFVLGdCQUNUO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRSxnQ0FBQyxZQUFEO0FBQU8sTUFBQSxNQUFNLEVBQUM7QUFBZCxNQURGLENBRFMsR0FJUCxJQU5OLGVBT0UsZ0NBQUMsU0FBRDtBQUFXLE1BQUEsR0FBRyxFQUFFLENBQWhCO0FBQW1CLE1BQUEsS0FBSyxFQUFFLDhCQUFrQk0sUUFBbEIsRUFBNEJDLFVBQTVCLEVBQXdDSixLQUFLLENBQUMsQ0FBRCxDQUE3QztBQUExQixNQVBGLENBRGdCO0FBQUEsR0FBbEI7O0FBWUEsU0FBT0UsU0FBUDtBQUNEOztlQUVjRCwrQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7TWludXN9IGZyb20gJy4vaWNvbnMnO1xuaW1wb3J0IHtkYXRldGltZUZvcm1hdHRlcn0gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5cbmludGVyZmFjZSBUaW1lVmFsdWVXcmFwcGVyUHJvcHMge1xuICBpc0VubGFyZ2VkPzogYm9vbGVhbjtcbn1cblxuY29uc3QgVGltZVZhbHVlV3JhcHBlciA9IHN0eWxlZC5kaXY8VGltZVZhbHVlV3JhcHBlclByb3BzPmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpbWVUaXRsZUZvbnRTaXplfTtcbiAganVzdGlmeS1jb250ZW50OiAke3Byb3BzID0+IChwcm9wcy5pc0VubGFyZ2VkID8gJ2NlbnRlcicgOiAnc3BhY2UtYmV0d2VlbicpfTtcblxuICAuaG9yaXpvbnRhbC1iYXIge1xuICAgIHBhZGRpbmc6IDAgMTJweDtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICB9XG5cbiAgLnRpbWUtdmFsdWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMgPT4gKHByb3BzLmlzRW5sYXJnZWQgPyAncm93JyA6ICdjb2x1bW4nKX07XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgbWF4LXdpZHRoOiAke3Byb3BzID0+ICghcHJvcHMuaXNFbmxhcmdlZCA/ICc0MCUnIDogJ2F1dG8nKX07XG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICAgIH1cbiAgfVxuXG4gIC50aW1lLXZhbHVlOmxhc3QtY2hpbGQge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuYDtcblxuY29uc3QgVGltZVZhbHVlID0gKHt2YWx1ZX0pID0+IChcbiAgLy8gcmVuZGVyIHR3byBsaW5lcyBpZiBub3QgZW5sYXJnZWRcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lLXZhbHVlXCI+XG4gICAgPHNwYW4+e3ZhbHVlfTwvc3Bhbj5cbiAgPC9kaXY+XG4pO1xuXG5pbnRlcmZhY2UgVGltZVRpdGxlUHJvcHMge1xuICB2YWx1ZTogbnVtYmVyW107XG4gIGlzRW5sYXJnZWQ/OiBib29sZWFuO1xuICB0aW1lem9uZT86IHN0cmluZyB8IG51bGw7XG4gIHRpbWVGb3JtYXQ6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gVGltZVJhbmdlU2xpZGVyVGltZVRpdGxlRmFjdG9yeSgpIHtcbiAgY29uc3QgVGltZVRpdGxlID0gKHt2YWx1ZSwgaXNFbmxhcmdlZCwgdGltZXpvbmUsIHRpbWVGb3JtYXR9OiBUaW1lVGl0bGVQcm9wcykgPT4gKFxuICAgIDxUaW1lVmFsdWVXcmFwcGVyIGlzRW5sYXJnZWQ9e2lzRW5sYXJnZWR9IGNsYXNzTmFtZT1cInRpbWUtcmFuZ2Utc2xpZGVyX190aW1lLXRpdGxlXCI+XG4gICAgICA8VGltZVZhbHVlIGtleT17MH0gdmFsdWU9e2RhdGV0aW1lRm9ybWF0dGVyKHRpbWV6b25lKSh0aW1lRm9ybWF0KSh2YWx1ZVswXSl9IC8+XG4gICAgICB7aXNFbmxhcmdlZCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3Jpem9udGFsLWJhclwiPlxuICAgICAgICAgIDxNaW51cyBoZWlnaHQ9XCIxMnB4XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxUaW1lVmFsdWUga2V5PXsxfSB2YWx1ZT17ZGF0ZXRpbWVGb3JtYXR0ZXIodGltZXpvbmUpKHRpbWVGb3JtYXQpKHZhbHVlWzFdKX0gLz5cbiAgICA8L1RpbWVWYWx1ZVdyYXBwZXI+XG4gICk7XG5cbiAgcmV0dXJuIFRpbWVUaXRsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZVJhbmdlU2xpZGVyVGltZVRpdGxlRmFjdG9yeTtcbiJdfQ==