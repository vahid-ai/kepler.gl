"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _reactVis = require("react-vis");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _utils = require("@kepler.gl/utils");

var _templateObject, _templateObject2;

var LineChartWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  .rv-xy-plot {\n    /* important for rendering hint */\n    position: relative;\n  }\n  .rv-xy-plot__inner {\n    /* important to show axis */\n    overflow: visible;\n  }\n\n  .rv-xy-plot__grid-lines__line {\n    stroke: ", ";\n    stroke-dasharray: 1px 4px;\n  }\n\n  .rv-xy-plot__axis__tick__text {\n    font-size: 9px;\n    fill: ", ";\n  }\n"])), function (props) {
  return props.theme.histogramFillOutRange;
}, function (props) {
  return props.theme.textColor;
});

var StyledHint = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: #d3d8e0;\n  border-radius: 2px;\n  color: ", ";\n  font-size: 9px;\n  margin: 4px;\n  padding: 3px 6px;\n  pointer-events: none;\n  user-select: none;\n"])), function (props) {
  return props.theme.textColorLT;
});

var HintContent = function HintContent(_ref) {
  var x = _ref.x,
      y = _ref.y,
      format = _ref.format;
  return /*#__PURE__*/_react["default"].createElement(StyledHint, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "hint--x"
  }, format(x)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, y));
};

var MARGIN = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
};

function LineChartFactory() {
  var LineChartComponent = function LineChartComponent(_ref2) {
    var brushComponent = _ref2.brushComponent,
        brushing = _ref2.brushing,
        color = _ref2.color,
        enableChartHover = _ref2.enableChartHover,
        height = _ref2.height,
        hoveredDP = _ref2.hoveredDP,
        isEnlarged = _ref2.isEnlarged,
        lineChart = _ref2.lineChart,
        margin = _ref2.margin,
        onMouseMove = _ref2.onMouseMove,
        width = _ref2.width,
        timezone = _ref2.timezone,
        timeFormat = _ref2.timeFormat;

    var _ref3 = lineChart || {},
        series = _ref3.series,
        yDomain = _ref3.yDomain;

    var brushData = (0, _react.useMemo)(function () {
      return series && series[0] && series[0].x && yDomain && yDomain[1] ? [{
        x: series[0].x,
        y: yDomain[1],
        customComponent: function customComponent() {
          return brushComponent;
        }
      }] : [];
    }, [series, yDomain, brushComponent]);
    var hintFormatter = (0, _react.useMemo)(function () {
      return (0, _utils.datetimeFormatter)(timezone)(timeFormat);
    }, [timezone, timeFormat]);
    return /*#__PURE__*/_react["default"].createElement(LineChartWrapper, {
      style: {
        marginTop: "".concat(margin.top, "px")
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactVis.XYPlot, {
      xType: "time",
      width: width,
      height: height,
      margin: MARGIN,
      onMouseLeave: function onMouseLeave() {
        onMouseMove(null);
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactVis.HorizontalGridLines, {
      tickTotal: 3
    }), /*#__PURE__*/_react["default"].createElement(_reactVis.LineSeries, {
      style: {
        fill: 'none'
      },
      color: color,
      data: series,
      onNearestX: enableChartHover ? onMouseMove : undefined
    }), /*#__PURE__*/_react["default"].createElement(_reactVis.MarkSeries, {
      data: hoveredDP ? [hoveredDP] : [],
      color: color
    }), /*#__PURE__*/_react["default"].createElement(_reactVis.CustomSVGSeries, {
      data: brushData
    }), isEnlarged && /*#__PURE__*/_react["default"].createElement(_reactVis.YAxis, {
      tickTotal: 3
    }), hoveredDP && enableChartHover && !brushing ? /*#__PURE__*/_react["default"].createElement(_reactVis.Hint, {
      value: hoveredDP
    }, /*#__PURE__*/_react["default"].createElement(HintContent, (0, _extends2["default"])({}, hoveredDP, {
      format: hintFormatter
    }))) : null));
  };

  return LineChartComponent;
}

var _default = LineChartFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vbGluZS1jaGFydC50c3giXSwibmFtZXMiOlsiTGluZUNoYXJ0V3JhcHBlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJoaXN0b2dyYW1GaWxsT3V0UmFuZ2UiLCJ0ZXh0Q29sb3IiLCJTdHlsZWRIaW50IiwidGV4dENvbG9yTFQiLCJIaW50Q29udGVudCIsIngiLCJ5IiwiZm9ybWF0IiwiTUFSR0lOIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiTGluZUNoYXJ0RmFjdG9yeSIsIkxpbmVDaGFydENvbXBvbmVudCIsImJydXNoQ29tcG9uZW50IiwiYnJ1c2hpbmciLCJjb2xvciIsImVuYWJsZUNoYXJ0SG92ZXIiLCJoZWlnaHQiLCJob3ZlcmVkRFAiLCJpc0VubGFyZ2VkIiwibGluZUNoYXJ0IiwibWFyZ2luIiwib25Nb3VzZU1vdmUiLCJ3aWR0aCIsInRpbWV6b25lIiwidGltZUZvcm1hdCIsInNlcmllcyIsInlEb21haW4iLCJicnVzaERhdGEiLCJjdXN0b21Db21wb25lbnQiLCJoaW50Rm9ybWF0dGVyIiwibWFyZ2luVG9wIiwiZmlsbCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQVlBOztBQUNBOzs7O0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLDZCQUFPQyxHQUFWLG9iQVdSLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMscUJBQWhCO0FBQUEsQ0FYRyxFQWlCVixVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLFNBQWhCO0FBQUEsQ0FqQkssQ0FBdEI7O0FBcUJBLElBQU1DLFVBQVUsR0FBR04sNkJBQU9DLEdBQVYsdVFBR0wsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxXQUFoQjtBQUFBLENBSEEsQ0FBaEI7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QUFxQixNQUFBLFNBQVMsRUFBRTtBQUFoQyxNQVRGLGVBVUUsZ0NBQUMsb0JBQUQ7QUFDRSxNQUFBLEtBQUssRUFBRTtBQUFDVSxRQUFBQSxJQUFJLEVBQUU7QUFBUCxPQURUO0FBRUUsTUFBQSxLQUFLLEVBQUVqQixLQUZUO0FBR0UsTUFBQSxJQUFJLEVBQUVXLE1BSFI7QUFJRSxNQUFBLFVBQVUsRUFBRVYsZ0JBQWdCLEdBQUdNLFdBQUgsR0FBaUJXO0FBSi9DLE1BVkYsZUFnQkUsZ0NBQUMsb0JBQUQ7QUFBWSxNQUFBLElBQUksRUFBRWYsU0FBUyxHQUFHLENBQUNBLFNBQUQsQ0FBSCxHQUFpQixFQUE1QztBQUFnRCxNQUFBLEtBQUssRUFBRUg7QUFBdkQsTUFoQkYsZUFpQkUsZ0NBQUMseUJBQUQ7QUFBaUIsTUFBQSxJQUFJLEVBQUVhO0FBQXZCLE1BakJGLEVBa0JHVCxVQUFVLGlCQUFJLGdDQUFDLGVBQUQ7QUFBTyxNQUFBLFNBQVMsRUFBRTtBQUFsQixNQWxCakIsRUFtQkdELFNBQVMsSUFBSUYsZ0JBQWIsSUFBaUMsQ0FBQ0YsUUFBbEMsZ0JBQ0MsZ0NBQUMsY0FBRDtBQUFNLE1BQUEsS0FBSyxFQUFFSTtBQUFiLG9CQUNFLGdDQUFDLFdBQUQsZ0NBQWlCQSxTQUFqQjtBQUE0QixNQUFBLE1BQU0sRUFBRVk7QUFBcEMsT0FERixDQURELEdBSUcsSUF2Qk4sQ0FERixDQURGO0FBNkJELEdBeEREOztBQXlEQSxTQUFPbEIsa0JBQVA7QUFDRDs7ZUFFY0QsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VNZW1vfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBIb3Jpem9udGFsR3JpZExpbmVzLFxuICBMaW5lU2VyaWVzLFxuICBYWVBsb3QsXG4gIEN1c3RvbVNWR1NlcmllcyxcbiAgSGludCxcbiAgWUF4aXMsXG4gIE1hcmtTZXJpZXMsXG4gIExpbmVTZXJpZXNQb2ludCxcbiAgUlZOZWFyZXN0WERhdGFcbn0gZnJvbSAncmVhY3QtdmlzJztcbmltcG9ydCB7TGluZUNoYXJ0fSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtkYXRldGltZUZvcm1hdHRlcn0gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5cbmNvbnN0IExpbmVDaGFydFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAucnYteHktcGxvdCB7XG4gICAgLyogaW1wb3J0YW50IGZvciByZW5kZXJpbmcgaGludCAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICAucnYteHktcGxvdF9faW5uZXIge1xuICAgIC8qIGltcG9ydGFudCB0byBzaG93IGF4aXMgKi9cbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuXG4gIC5ydi14eS1wbG90X19ncmlkLWxpbmVzX19saW5lIHtcbiAgICBzdHJva2U6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGlzdG9ncmFtRmlsbE91dFJhbmdlfTtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxcHggNHB4O1xuICB9XG5cbiAgLnJ2LXh5LXBsb3RfX2F4aXNfX3RpY2tfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIGZpbGw6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkSGludCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2Q4ZTA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yTFR9O1xuICBmb250LXNpemU6IDlweDtcbiAgbWFyZ2luOiA0cHg7XG4gIHBhZGRpbmc6IDNweCA2cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbmA7XG5cbmludGVyZmFjZSBIaW50Q29udGVudFByb3BzIHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGZvcm1hdDogKHRzOiBudW1iZXIpID0+IHN0cmluZztcbn1cblxuY29uc3QgSGludENvbnRlbnQgPSAoe3gsIHksIGZvcm1hdH06IEhpbnRDb250ZW50UHJvcHMpID0+IChcbiAgPFN0eWxlZEhpbnQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoaW50LS14XCI+e2Zvcm1hdCh4KX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPnt5fTwvZGl2PlxuICA8L1N0eWxlZEhpbnQ+XG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhvdmVyRFAge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgY29sb3I/OiBzdHJpbmcgfCBudW1iZXI7XG4gIG9wYWNpdHk/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHN0cm9rZT86IHN0cmluZyB8IG51bWJlcjtcbiAgZmlsbD86IHN0cmluZyB8IG51bWJlcjtcbiAgc2l6ZT86IHN0cmluZyB8IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIExpbmVDaGFydFByb3BzIHtcbiAgYnJ1c2hDb21wb25lbnQ/OiBhbnk7XG4gIGJydXNoaW5nPzogYm9vbGVhbjtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGVuYWJsZUNoYXJ0SG92ZXI/OiBib29sZWFuO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgaG92ZXJlZERQPzogSG92ZXJEUCB8IG51bGw7XG4gIGlzRW5sYXJnZWQ/OiBib29sZWFuO1xuICBsaW5lQ2hhcnQ/OiBMaW5lQ2hhcnQ7XG4gIG1hcmdpbjoge3RvcD86IG51bWJlcjsgYm90dG9tPzogbnVtYmVyOyBsZWZ0PzogbnVtYmVyOyByaWdodD86IG51bWJlcn07XG4gIG9uTW91c2VNb3ZlOiAoZGF0YXBvaW50OiBMaW5lU2VyaWVzUG9pbnQgfCBudWxsLCBkYXRhPzogUlZOZWFyZXN0WERhdGE8TGluZVNlcmllc1BvaW50PikgPT4gdm9pZDtcbiAgd2lkdGg6IG51bWJlcjtcbiAgdGltZXpvbmU/OiBzdHJpbmcgfCBudWxsO1xuICB0aW1lRm9ybWF0Pzogc3RyaW5nO1xufVxuXG5jb25zdCBNQVJHSU4gPSB7dG9wOiAwLCBib3R0b206IDAsIGxlZnQ6IDAsIHJpZ2h0OiAwfTtcbmZ1bmN0aW9uIExpbmVDaGFydEZhY3RvcnkoKSB7XG4gIGNvbnN0IExpbmVDaGFydENvbXBvbmVudCA9ICh7XG4gICAgYnJ1c2hDb21wb25lbnQsXG4gICAgYnJ1c2hpbmcsXG4gICAgY29sb3IsXG4gICAgZW5hYmxlQ2hhcnRIb3ZlcixcbiAgICBoZWlnaHQsXG4gICAgaG92ZXJlZERQLFxuICAgIGlzRW5sYXJnZWQsXG4gICAgbGluZUNoYXJ0LFxuICAgIG1hcmdpbixcbiAgICBvbk1vdXNlTW92ZSxcbiAgICB3aWR0aCxcbiAgICB0aW1lem9uZSxcbiAgICB0aW1lRm9ybWF0XG4gIH06IExpbmVDaGFydFByb3BzKSA9PiB7XG4gICAgY29uc3Qge3NlcmllcywgeURvbWFpbn0gPSBsaW5lQ2hhcnQgfHwge307XG5cbiAgICBjb25zdCBicnVzaERhdGEgPSB1c2VNZW1vKCgpID0+IHtcbiAgICAgIHJldHVybiBzZXJpZXMgJiYgc2VyaWVzWzBdICYmIHNlcmllc1swXS54ICYmIHlEb21haW4gJiYgeURvbWFpblsxXVxuICAgICAgICA/IFt7eDogc2VyaWVzWzBdLngsIHk6IHlEb21haW5bMV0sIGN1c3RvbUNvbXBvbmVudDogKCkgPT4gYnJ1c2hDb21wb25lbnR9XVxuICAgICAgICA6IFtdO1xuICAgIH0sIFtzZXJpZXMsIHlEb21haW4sIGJydXNoQ29tcG9uZW50XSk7XG4gICAgY29uc3QgaGludEZvcm1hdHRlciA9IHVzZU1lbW8oKCkgPT4gZGF0ZXRpbWVGb3JtYXR0ZXIodGltZXpvbmUpKHRpbWVGb3JtYXQpLCBbXG4gICAgICB0aW1lem9uZSxcbiAgICAgIHRpbWVGb3JtYXRcbiAgICBdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8TGluZUNoYXJ0V3JhcHBlciBzdHlsZT17e21hcmdpblRvcDogYCR7bWFyZ2luLnRvcH1weGB9fT5cbiAgICAgICAgPFhZUGxvdFxuICAgICAgICAgIHhUeXBlPVwidGltZVwiXG4gICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIG1hcmdpbj17TUFSR0lOfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICAgICAgb25Nb3VzZU1vdmUobnVsbCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxIb3Jpem9udGFsR3JpZExpbmVzIHRpY2tUb3RhbD17M30gLz5cbiAgICAgICAgICA8TGluZVNlcmllc1xuICAgICAgICAgICAgc3R5bGU9e3tmaWxsOiAnbm9uZSd9fVxuICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgZGF0YT17c2VyaWVzfVxuICAgICAgICAgICAgb25OZWFyZXN0WD17ZW5hYmxlQ2hhcnRIb3ZlciA/IG9uTW91c2VNb3ZlIDogdW5kZWZpbmVkfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1hcmtTZXJpZXMgZGF0YT17aG92ZXJlZERQID8gW2hvdmVyZWREUF0gOiBbXX0gY29sb3I9e2NvbG9yfSAvPlxuICAgICAgICAgIDxDdXN0b21TVkdTZXJpZXMgZGF0YT17YnJ1c2hEYXRhfSAvPlxuICAgICAgICAgIHtpc0VubGFyZ2VkICYmIDxZQXhpcyB0aWNrVG90YWw9ezN9IC8+fVxuICAgICAgICAgIHtob3ZlcmVkRFAgJiYgZW5hYmxlQ2hhcnRIb3ZlciAmJiAhYnJ1c2hpbmcgPyAoXG4gICAgICAgICAgICA8SGludCB2YWx1ZT17aG92ZXJlZERQfT5cbiAgICAgICAgICAgICAgPEhpbnRDb250ZW50IHsuLi5ob3ZlcmVkRFB9IGZvcm1hdD17aGludEZvcm1hdHRlcn0gLz5cbiAgICAgICAgICAgIDwvSGludD5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9YWVBsb3Q+XG4gICAgICA8L0xpbmVDaGFydFdyYXBwZXI+XG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIExpbmVDaGFydENvbXBvbmVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGluZUNoYXJ0RmFjdG9yeTtcbiJdfQ==