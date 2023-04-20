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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.throttle"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("@kepler.gl/utils");

var _styles = require("@kepler.gl/styles");

var _constants = require("@kepler.gl/constants");

var _slider = _interopRequireDefault(require("./slider/slider"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function noop() {}

var SLIDER_MARGIN_PALM = 6;

var AnimationControlSlider = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n"])));

var SliderWrapper = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  position: relative;\n  flex-grow: 1;\n  margin: 0 24px;\n\n  ", "\n"])), _styles.media.palm(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    margin: 0 ", "px;\n  "])), SLIDER_MARGIN_PALM));

var StyledSlider = (0, _styledComponents["default"])(_slider["default"])(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  .kg-range-slider__bar {\n    // change colors\n  }\n"])));

var StyledDomain = _styledComponents["default"].div.attrs(function (props) {
  return {
    className: (0, _classnames["default"])('animation-control__time-domain', props.className)
  };
})(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-weight: 400;\n  font-size: 10px;\n"])), function (props) {
  return props.theme.titleTextColor;
});

var PROGRESS_BAR_HEIGHT = 8;

function TimelineSliderFactory() {
  var TimelineSlider = function TimelineSlider(_ref) {
    var timeline = _ref.timeline,
        setTimelineValue = _ref.setTimelineValue,
        _ref$enableBarDrag = _ref.enableBarDrag,
        enableBarDrag = _ref$enableBarDrag === void 0 ? true : _ref$enableBarDrag,
        _ref$showDomainTimes = _ref.showDomainTimes,
        showDomainTimes = _ref$showDomainTimes === void 0 ? true : _ref$showDomainTimes,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? PROGRESS_BAR_HEIGHT : _ref$height,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? null : _ref$className,
        style = _ref.style;
    var onThrottleUpdate = (0, _react.useMemo)(function () {
      return (0, _lodash["default"])(setTimelineValue, 20);
    }, [setTimelineValue]);
    var step = timeline.step,
        domain = timeline.domain,
        value = timeline.value,
        timeFormat = timeline.timeFormat,
        defaultTimeFormat = timeline.defaultTimeFormat,
        timezone = timeline.timezone,
        animationWindow = timeline.animationWindow;
    var isRanged = (0, _react.useMemo)(function () {
      return Array.isArray(value) && value.length === 2 && animationWindow !== _constants.ANIMATION_WINDOW.interval;
    }, [animationWindow, value]);

    var _useMemo = (0, _react.useMemo)(function () {
      return [isRanged ? value[0] : null, isRanged ? value[1] : value[0]];
    }, [isRanged, value]),
        _useMemo2 = (0, _slicedToArray2["default"])(_useMemo, 2),
        value0 = _useMemo2[0],
        value1 = _useMemo2[1];

    var _useMemo3 = (0, _react.useMemo)(function () {
      if (!domain) return [noop, noop];
      return [isRanged ? function (newValue) {
        return onThrottleUpdate([(0, _utils.clamp)(domain, newValue), value1]);
      } : noop, isRanged ? function (newValue) {
        return onThrottleUpdate([value0, (0, _utils.clamp)(domain, newValue)]);
      } : function (newValue) {
        return onThrottleUpdate(animationWindow === _constants.ANIMATION_WINDOW.interval ? // filter requires an array with 2 values
        [(0, _utils.clamp)(domain, newValue), (0, _utils.clamp)(domain, newValue)] : // animationConfig only requires one value
        [(0, _utils.clamp)(domain, newValue)]);
      }];
    }, [animationWindow, domain, isRanged, value0, value1, onThrottleUpdate]),
        _useMemo4 = (0, _slicedToArray2["default"])(_useMemo3, 2),
        onSlider0Change = _useMemo4[0],
        onSlider1Change = _useMemo4[1];

    var timelineSliderStyle = (0, _react.useMemo)(function () {
      return {
        height: "".concat(height, "px")
      };
    }, [height]);

    var _useMemo5 = (0, _react.useMemo)(function () {
      if (!showDomainTimes) {
        return [null, null];
      }

      var hasUserFormat = typeof timeFormat === 'string';
      var currentFormat = (hasUserFormat ? timeFormat : defaultTimeFormat) || _constants.DEFAULT_TIME_FORMAT;
      var dateFunc = (0, _utils.datetimeFormatter)(timezone)(currentFormat);
      return [domain ? dateFunc(domain[0]) : '', domain ? dateFunc(domain[1]) : ''];
    }, [domain, timezone, timeFormat, defaultTimeFormat, showDomainTimes]),
        _useMemo6 = (0, _slicedToArray2["default"])(_useMemo5, 2),
        timeStart = _useMemo6[0],
        timeEnd = _useMemo6[1];

    var requiresRangeSlider = isRanged && animationWindow !== _constants.ANIMATION_WINDOW.interval;
    return /*#__PURE__*/_react["default"].createElement(AnimationControlSlider, {
      style: style,
      className: (0, _classnames["default"])('animation-control__time-slider', className)
    }, timeStart ? /*#__PURE__*/_react["default"].createElement(StyledDomain, {
      className: "domain-start"
    }, /*#__PURE__*/_react["default"].createElement("span", null, timeStart)) : null, /*#__PURE__*/_react["default"].createElement(SliderWrapper, {
      className: "animation-control__slider"
    }, /*#__PURE__*/_react["default"].createElement(StyledSlider, {
      isRanged: requiresRangeSlider,
      step: step || undefined,
      minValue: domain ? domain[0] : 0,
      maxValue: domain ? domain[1] : 1,
      enableBarDrag: enableBarDrag,
      style: timelineSliderStyle,
      onSlider0Change: onSlider0Change,
      onSlider1Change: onSlider1Change,
      value0: value0,
      value1: value1
    })), timeEnd ? /*#__PURE__*/_react["default"].createElement(StyledDomain, {
      className: "domain-end"
    }, /*#__PURE__*/_react["default"].createElement("span", null, timeEnd)) : null);
  };

  return TimelineSlider;
}

var _default = TimelineSliderFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vdGltZWxpbmUtc2xpZGVyLnRzeCJdLCJuYW1lcyI6WyJub29wIiwiU0xJREVSX01BUkdJTl9QQUxNIiwiQW5pbWF0aW9uQ29udHJvbFNsaWRlciIsInN0eWxlZCIsImRpdiIsIlNsaWRlcldyYXBwZXIiLCJtZWRpYSIsInBhbG0iLCJTdHlsZWRTbGlkZXIiLCJTbGlkZXIiLCJTdHlsZWREb21haW4iLCJhdHRycyIsInByb3BzIiwiY2xhc3NOYW1lIiwidGhlbWUiLCJ0aXRsZVRleHRDb2xvciIsIlBST0dSRVNTX0JBUl9IRUlHSFQiLCJUaW1lbGluZVNsaWRlckZhY3RvcnkiLCJUaW1lbGluZVNsaWRlciIsInRpbWVsaW5lIiwic2V0VGltZWxpbmVWYWx1ZSIsImVuYWJsZUJhckRyYWciLCJzaG93RG9tYWluVGltZXMiLCJoZWlnaHQiLCJzdHlsZSIsIm9uVGhyb3R0bGVVcGRhdGUiLCJzdGVwIiwiZG9tYWluIiwidmFsdWUiLCJ0aW1lRm9ybWF0IiwiZGVmYXVsdFRpbWVGb3JtYXQiLCJ0aW1lem9uZSIsImFuaW1hdGlvbldpbmRvdyIsImlzUmFuZ2VkIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiQU5JTUFUSU9OX1dJTkRPVyIsImludGVydmFsIiwidmFsdWUwIiwidmFsdWUxIiwibmV3VmFsdWUiLCJvblNsaWRlcjBDaGFuZ2UiLCJvblNsaWRlcjFDaGFuZ2UiLCJ0aW1lbGluZVNsaWRlclN0eWxlIiwiaGFzVXNlckZvcm1hdCIsImN1cnJlbnRGb3JtYXQiLCJERUZBVUxUX1RJTUVfRk9STUFUIiwiZGF0ZUZ1bmMiLCJ0aW1lU3RhcnQiLCJ0aW1lRW5kIiwicmVxdWlyZXNSYW5nZVNsaWRlciIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxTQUFTQSxJQUFU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bkI7QUFTRSxNQUFBLE1BQU0sRUFBRUosTUFUVjtBQVVFLE1BQUEsTUFBTSxFQUFFQztBQVZWLE1BREYsQ0FURixFQXVCR1UsT0FBTyxnQkFDTixnQ0FBQyxZQUFEO0FBQWMsTUFBQSxTQUFTLEVBQUM7QUFBeEIsb0JBQ0UsOENBQU9BLE9BQVAsQ0FERixDQURNLEdBSUosSUEzQk4sQ0FERjtBQStCRCxHQWpHRDs7QUFtR0EsU0FBT2hDLGNBQVA7QUFDRDs7ZUFFY0QscUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VNZW1vfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB0aHJvdHRsZSBmcm9tICdsb2Rhc2gudGhyb3R0bGUnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge2NsYW1wLCBkYXRldGltZUZvcm1hdHRlcn0gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5pbXBvcnQge21lZGlhfSBmcm9tICdAa2VwbGVyLmdsL3N0eWxlcyc7XG5pbXBvcnQge0RFRkFVTFRfVElNRV9GT1JNQVQsIEFOSU1BVElPTl9XSU5ET1d9IGZyb20gJ0BrZXBsZXIuZ2wvY29uc3RhbnRzJztcbmltcG9ydCB7VGltZWxpbmV9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuaW1wb3J0IFNsaWRlciBmcm9tICcuL3NsaWRlci9zbGlkZXInO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuY29uc3QgU0xJREVSX01BUkdJTl9QQUxNID0gNjtcblxuY29uc3QgQW5pbWF0aW9uQ29udHJvbFNsaWRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBTbGlkZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbjogMCAyNHB4O1xuXG4gICR7bWVkaWEucGFsbWBcbiAgICBtYXJnaW46IDAgJHtTTElERVJfTUFSR0lOX1BBTE19cHg7XG4gIGB9XG5gO1xuXG5jb25zdCBTdHlsZWRTbGlkZXIgPSBzdHlsZWQoU2xpZGVyKWBcbiAgLmtnLXJhbmdlLXNsaWRlcl9fYmFyIHtcbiAgICAvLyBjaGFuZ2UgY29sb3JzXG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZERvbWFpbiA9IHN0eWxlZC5kaXYuYXR0cnMocHJvcHMgPT4gKHtcbiAgY2xhc3NOYW1lOiBjbGFzc25hbWVzKCdhbmltYXRpb24tY29udHJvbF9fdGltZS1kb21haW4nLCBwcm9wcy5jbGFzc05hbWUpXG59KSlgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpdGxlVGV4dENvbG9yfTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xuYDtcblxuY29uc3QgUFJPR1JFU1NfQkFSX0hFSUdIVCA9IDg7XG5cbmludGVyZmFjZSBUaW1lbGluZVNsaWRlclByb3BzIHtcbiAgdGltZWxpbmU6IFRpbWVsaW5lO1xuICBzZXRUaW1lbGluZVZhbHVlOiAodmFsdWU6IFtudW1iZXJdIHwgW251bWJlciwgbnVtYmVyXSkgPT4gdm9pZDtcbiAgZW5hYmxlQmFyRHJhZz86IGJvb2xlYW47XG4gIHNob3dEb21haW5UaW1lcz86IGJvb2xlYW47XG4gIGhlaWdodD86IG51bWJlcjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nIHwgbnVsbDtcbiAgc3R5bGU/OiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIFRpbWVsaW5lU2xpZGVyRmFjdG9yeSgpIHtcbiAgY29uc3QgVGltZWxpbmVTbGlkZXI6IFJlYWN0LkZDPFRpbWVsaW5lU2xpZGVyUHJvcHM+ID0gKHtcbiAgICB0aW1lbGluZSwgLy8gdGltZWxpbmUgY2FuIGJlIGEgdW5pb24gb2YgZmlsdGVyIGFuZCBhbmltYXRpb25Db25maWdcbiAgICAvLyB3ZSBjYW4gcGFzcyB0aW1lbGluZSB0byBhIGhvb2sgYW5kIGdldCBiYWNrIHZhbHVlcyBhbmQgY29udHJvbGxlcnNcbiAgICBzZXRUaW1lbGluZVZhbHVlLFxuICAgIGVuYWJsZUJhckRyYWcgPSB0cnVlLFxuICAgIHNob3dEb21haW5UaW1lcyA9IHRydWUsXG4gICAgaGVpZ2h0ID0gUFJPR1JFU1NfQkFSX0hFSUdIVCxcbiAgICBjbGFzc05hbWUgPSBudWxsLFxuICAgIHN0eWxlXG4gIH0pID0+IHtcbiAgICBjb25zdCBvblRocm90dGxlVXBkYXRlID0gdXNlTWVtbygoKSA9PiB0aHJvdHRsZShzZXRUaW1lbGluZVZhbHVlLCAyMCksIFtzZXRUaW1lbGluZVZhbHVlXSk7XG5cbiAgICBjb25zdCB7XG4gICAgICBzdGVwLFxuICAgICAgZG9tYWluLFxuICAgICAgdmFsdWUsXG4gICAgICB0aW1lRm9ybWF0LFxuICAgICAgZGVmYXVsdFRpbWVGb3JtYXQsXG4gICAgICB0aW1lem9uZSxcbiAgICAgIGFuaW1hdGlvbldpbmRvd1xuICAgIH0gPSB0aW1lbGluZTtcblxuICAgIGNvbnN0IGlzUmFuZ2VkID0gdXNlTWVtbyhcbiAgICAgICgpID0+XG4gICAgICAgIEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMiAmJiBhbmltYXRpb25XaW5kb3cgIT09IEFOSU1BVElPTl9XSU5ET1cuaW50ZXJ2YWwsXG4gICAgICBbYW5pbWF0aW9uV2luZG93LCB2YWx1ZV1cbiAgICApO1xuXG4gICAgY29uc3QgW3ZhbHVlMCwgdmFsdWUxXTogW251bWJlciwgbnVtYmVyXSA9IHVzZU1lbW8oXG4gICAgICAoKSA9PiBbaXNSYW5nZWQgPyB2YWx1ZVswXSA6IG51bGwsIGlzUmFuZ2VkID8gdmFsdWVbMV0gOiB2YWx1ZVswXV0sXG4gICAgICBbaXNSYW5nZWQsIHZhbHVlXVxuICAgICk7XG5cbiAgICBjb25zdCBbb25TbGlkZXIwQ2hhbmdlLCBvblNsaWRlcjFDaGFuZ2VdID0gdXNlTWVtbygoKSA9PiB7XG4gICAgICBpZiAoIWRvbWFpbikgcmV0dXJuIFtub29wLCBub29wXTtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIGlzUmFuZ2VkID8gKG5ld1ZhbHVlOiBudW1iZXIpID0+IG9uVGhyb3R0bGVVcGRhdGUoW2NsYW1wKGRvbWFpbiwgbmV3VmFsdWUpLCB2YWx1ZTFdKSA6IG5vb3AsXG4gICAgICAgIGlzUmFuZ2VkXG4gICAgICAgICAgPyAobmV3VmFsdWU6IG51bWJlcikgPT4gb25UaHJvdHRsZVVwZGF0ZShbdmFsdWUwLCBjbGFtcChkb21haW4sIG5ld1ZhbHVlKV0pXG4gICAgICAgICAgOiAobmV3VmFsdWU6IG51bWJlcikgPT5cbiAgICAgICAgICAgICAgb25UaHJvdHRsZVVwZGF0ZShcbiAgICAgICAgICAgICAgICBhbmltYXRpb25XaW5kb3cgPT09IEFOSU1BVElPTl9XSU5ET1cuaW50ZXJ2YWxcbiAgICAgICAgICAgICAgICAgID8gLy8gZmlsdGVyIHJlcXVpcmVzIGFuIGFycmF5IHdpdGggMiB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgW2NsYW1wKGRvbWFpbiwgbmV3VmFsdWUpLCBjbGFtcChkb21haW4sIG5ld1ZhbHVlKV1cbiAgICAgICAgICAgICAgICAgIDogLy8gYW5pbWF0aW9uQ29uZmlnIG9ubHkgcmVxdWlyZXMgb25lIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIFtjbGFtcChkb21haW4sIG5ld1ZhbHVlKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgXTtcbiAgICB9LCBbYW5pbWF0aW9uV2luZG93LCBkb21haW4sIGlzUmFuZ2VkLCB2YWx1ZTAsIHZhbHVlMSwgb25UaHJvdHRsZVVwZGF0ZV0pO1xuXG4gICAgY29uc3QgdGltZWxpbmVTbGlkZXJTdHlsZSA9IHVzZU1lbW8oKCkgPT4gKHtoZWlnaHQ6IGAke2hlaWdodH1weGB9KSwgW2hlaWdodF0pO1xuXG4gICAgY29uc3QgW3RpbWVTdGFydCwgdGltZUVuZF0gPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgIGlmICghc2hvd0RvbWFpblRpbWVzKSB7XG4gICAgICAgIHJldHVybiBbbnVsbCwgbnVsbF07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGhhc1VzZXJGb3JtYXQgPSB0eXBlb2YgdGltZUZvcm1hdCA9PT0gJ3N0cmluZyc7XG4gICAgICBjb25zdCBjdXJyZW50Rm9ybWF0ID0gKGhhc1VzZXJGb3JtYXQgPyB0aW1lRm9ybWF0IDogZGVmYXVsdFRpbWVGb3JtYXQpIHx8IERFRkFVTFRfVElNRV9GT1JNQVQ7XG4gICAgICBjb25zdCBkYXRlRnVuYyA9IGRhdGV0aW1lRm9ybWF0dGVyKHRpbWV6b25lKShjdXJyZW50Rm9ybWF0KTtcblxuICAgICAgcmV0dXJuIFtkb21haW4gPyBkYXRlRnVuYyhkb21haW5bMF0pIDogJycsIGRvbWFpbiA/IGRhdGVGdW5jKGRvbWFpblsxXSkgOiAnJ107XG4gICAgfSwgW2RvbWFpbiwgdGltZXpvbmUsIHRpbWVGb3JtYXQsIGRlZmF1bHRUaW1lRm9ybWF0LCBzaG93RG9tYWluVGltZXNdKTtcblxuICAgIGNvbnN0IHJlcXVpcmVzUmFuZ2VTbGlkZXIgPSBpc1JhbmdlZCAmJiBhbmltYXRpb25XaW5kb3cgIT09IEFOSU1BVElPTl9XSU5ET1cuaW50ZXJ2YWw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFuaW1hdGlvbkNvbnRyb2xTbGlkZXJcbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2FuaW1hdGlvbi1jb250cm9sX190aW1lLXNsaWRlcicsIGNsYXNzTmFtZSl9XG4gICAgICA+XG4gICAgICAgIHt0aW1lU3RhcnQgPyAoXG4gICAgICAgICAgPFN0eWxlZERvbWFpbiBjbGFzc05hbWU9XCJkb21haW4tc3RhcnRcIj5cbiAgICAgICAgICAgIDxzcGFuPnt0aW1lU3RhcnR9PC9zcGFuPlxuICAgICAgICAgIDwvU3R5bGVkRG9tYWluPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPFNsaWRlcldyYXBwZXIgY2xhc3NOYW1lPVwiYW5pbWF0aW9uLWNvbnRyb2xfX3NsaWRlclwiPlxuICAgICAgICAgIDxTdHlsZWRTbGlkZXJcbiAgICAgICAgICAgIGlzUmFuZ2VkPXtyZXF1aXJlc1JhbmdlU2xpZGVyfVxuICAgICAgICAgICAgc3RlcD17c3RlcCB8fCB1bmRlZmluZWR9XG4gICAgICAgICAgICBtaW5WYWx1ZT17ZG9tYWluID8gZG9tYWluWzBdIDogMH1cbiAgICAgICAgICAgIG1heFZhbHVlPXtkb21haW4gPyBkb21haW5bMV0gOiAxfVxuICAgICAgICAgICAgZW5hYmxlQmFyRHJhZz17ZW5hYmxlQmFyRHJhZ31cbiAgICAgICAgICAgIHN0eWxlPXt0aW1lbGluZVNsaWRlclN0eWxlfVxuICAgICAgICAgICAgb25TbGlkZXIwQ2hhbmdlPXtvblNsaWRlcjBDaGFuZ2V9XG4gICAgICAgICAgICBvblNsaWRlcjFDaGFuZ2U9e29uU2xpZGVyMUNoYW5nZX1cbiAgICAgICAgICAgIHZhbHVlMD17dmFsdWUwfVxuICAgICAgICAgICAgdmFsdWUxPXt2YWx1ZTF9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9TbGlkZXJXcmFwcGVyPlxuICAgICAgICB7dGltZUVuZCA/IChcbiAgICAgICAgICA8U3R5bGVkRG9tYWluIGNsYXNzTmFtZT1cImRvbWFpbi1lbmRcIj5cbiAgICAgICAgICAgIDxzcGFuPnt0aW1lRW5kfTwvc3Bhbj5cbiAgICAgICAgICA8L1N0eWxlZERvbWFpbj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L0FuaW1hdGlvbkNvbnRyb2xTbGlkZXI+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gVGltZWxpbmVTbGlkZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lU2xpZGVyRmFjdG9yeTtcbiJdfQ==