"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RangePlotFactory;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _rangeBrush = _interopRequireDefault(require("./range-brush"));

var _histogramPlot = _interopRequireDefault(require("./histogram-plot"));

var _lineChart = _interopRequireDefault(require("./line-chart"));

var _utils = require("@kepler.gl/utils");

var _styles = require("@kepler.gl/styles");

var _templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var StyledRangePlot = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: ", "px;\n  display: flex;\n  position: 'relative';\n"])), function (props) {
  return props.theme.sliderBarHeight;
});

RangePlotFactory.deps = [_rangeBrush["default"], _histogramPlot["default"], _lineChart["default"]];

function RangePlotFactory(RangeBrush, HistogramPlot, LineChartPlot) {
  var RangePlot = function RangePlot(_ref) {
    var onBrush = _ref.onBrush,
        range = _ref.range,
        value = _ref.value,
        width = _ref.width,
        plotType = _ref.plotType,
        lineChart = _ref.lineChart,
        histogram = _ref.histogram,
        isEnlarged = _ref.isEnlarged,
        isRanged = _ref.isRanged,
        theme = _ref.theme,
        chartProps = (0, _objectWithoutProperties2["default"])(_ref, ["onBrush", "range", "value", "width", "plotType", "lineChart", "histogram", "isEnlarged", "isRanged", "theme"]);

    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        brushing = _useState2[0],
        setBrushing = _useState2[1];

    var _useState3 = (0, _react.useState)(null),
        _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
        hoveredDP = _useState4[0],
        onMouseMove = _useState4[1];

    var _useState5 = (0, _react.useState)(false),
        _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
        enableChartHover = _useState6[0],
        setEnableChartHover = _useState6[1];

    var height = isEnlarged ? (0, _utils.hasMobileWidth)(_styles.breakPointValues) ? theme.rangePlotHLargePalm : theme.rangePlotHLarge : theme.rangePlotH;
    var onBrushStart = (0, _react.useCallback)(function () {
      setBrushing(true);
      onMouseMove(null);
      setEnableChartHover(false);
    }, [setBrushing, onMouseMove, setEnableChartHover]);
    var onBrushEnd = (0, _react.useCallback)(function () {
      setBrushing(false);
      setEnableChartHover(true);
    }, [setBrushing, setEnableChartHover]);
    var onMouseoverHandle = (0, _react.useCallback)(function () {
      onMouseMove(null);
      setEnableChartHover(false);
    }, [onMouseMove, setEnableChartHover]);
    var onMouseoutHandle = (0, _react.useCallback)(function () {
      setEnableChartHover(true);
    }, [setEnableChartHover]); // JsDom have limited support for SVG, d3 will fail

    var brushComponent = (0, _utils.isTest)() ? null : /*#__PURE__*/_react["default"].createElement(RangeBrush, (0, _extends2["default"])({
      onBrush: onBrush,
      onBrushStart: onBrushStart,
      onBrushEnd: onBrushEnd,
      range: range,
      value: value,
      width: width,
      height: height,
      isRanged: isRanged,
      onMouseoverHandle: onMouseoverHandle,
      onMouseoutHandle: onMouseoutHandle
    }, chartProps));

    var commonProps = _objectSpread({
      width: width,
      value: value,
      height: height,
      margin: isEnlarged ? theme.rangePlotMarginLarge : theme.rangePlotMargin,
      brushComponent: brushComponent,
      brushing: brushing,
      isEnlarged: isEnlarged,
      enableChartHover: enableChartHover,
      onMouseMove: onMouseMove,
      hoveredDP: hoveredDP,
      isRanged: isRanged
    }, chartProps);

    return /*#__PURE__*/_react["default"].createElement(StyledRangePlot, {
      style: {
        height: "".concat(isEnlarged ? (0, _utils.hasMobileWidth)(_styles.breakPointValues) ? theme.rangePlotContainerHLargePalm : theme.rangePlotContainerHLarge : theme.rangePlotContainerH, "px")
      },
      className: "kg-range-slider__plot"
    }, plotType === 'lineChart' && lineChart ? /*#__PURE__*/_react["default"].createElement(LineChartPlot, (0, _extends2["default"])({
      lineChart: lineChart
    }, commonProps)) : /*#__PURE__*/_react["default"].createElement(HistogramPlot, (0, _extends2["default"])({
      histogram: histogram
    }, commonProps)));
  };

  return (0, _styledComponents.withTheme)(RangePlot);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vcmFuZ2UtcGxvdC50c3giXSwibmFtZXMiOlsiU3R5bGVkUmFuZ2VQbG90Iiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInNsaWRlckJhckhlaWdodCIsIlJhbmdlUGxvdEZhY3RvcnkiLCJkZXBzIiwiUmFuZ2VCcnVzaEZhY3RvcnkiLCJIaXN0b2dyYW1QbG90RmFjdG9yeSIsIkxpbmVDaGFydEZhY3RvcnkiLCJSYW5nZUJydXNoIiwiSGlzdG9ncmFtUGxvdCIsIkxpbmVDaGFydFBsb3QiLCJSYW5nZVBsb3QiLCJvbkJydXNoIiwicmFuZ2UiLCJ2YWx1ZSIsIndpZHRoIiwicGxvdFR5cGUiLCJsaW5lQ2hhcnQiLCJoaXN0b2dyYW0iLCJpc0VubGFyZ2VkIiwiaXNSYW5nZWQiLCJjaGFydFByb3BzIiwiYnJ1c2hpbmciLCJzZXRCcnVzaGluZyIsImhvdmVyZWREUCIsIm9uTW91c2VNb3ZlIiwiZW5hYmxlQ2hhcnRIb3ZlciIsInNldEVuYWJsZUNoYXJ0SG92ZXIiLCJoZWlnaHQiLCJicmVha1BvaW50VmFsdWVzIiwicmFuZ2VQbG90SExhcmdlUGFsbSIsInJhbmdlUGxvdEhMYXJnZSIsInJhbmdlUGxvdEgiLCJvbkJydXNoU3RhcnQiLCJvbkJydXNoRW5kIiwib25Nb3VzZW92ZXJIYW5kbGUiLCJvbk1vdXNlb3V0SGFuZGxlIiwiYnJ1c2hDb21wb25lbnQiLCJjb21tb25Qcm9wcyIsIm1hcmdpbiIsInJhbmdlUGxvdE1hcmdpbkxhcmdlIiwicmFuZ2VQbG90TWFyZ2luIiwicmFuZ2VQbG90Q29udGFpbmVySExhcmdlUGFsbSIsInJhbmdlUGxvdENvbnRhaW5lckhMYXJnZSIsInJhbmdlUGxvdENvbnRhaW5lckgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFHQSxJQUFNQSxl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Q0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7d2l0aFRoZW1lfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmFuZ2VCcnVzaEZhY3RvcnksIHtPbkJydXNoLCBSYW5nZUJydXNoUHJvcHN9IGZyb20gJy4vcmFuZ2UtYnJ1c2gnO1xuaW1wb3J0IEhpc3RvZ3JhbVBsb3RGYWN0b3J5IGZyb20gJy4vaGlzdG9ncmFtLXBsb3QnO1xuaW1wb3J0IExpbmVDaGFydEZhY3RvcnksIHtIb3ZlckRQfSBmcm9tICcuL2xpbmUtY2hhcnQnO1xuaW1wb3J0IHtpc1Rlc3QsIGhhc01vYmlsZVdpZHRofSBmcm9tICdAa2VwbGVyLmdsL3V0aWxzJztcbmltcG9ydCB7YnJlYWtQb2ludFZhbHVlc30gZnJvbSAnQGtlcGxlci5nbC9zdHlsZXMnO1xuaW1wb3J0IHtMaW5lQ2hhcnR9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuXG5jb25zdCBTdHlsZWRSYW5nZVBsb3QgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNsaWRlckJhckhlaWdodH1weDtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246ICdyZWxhdGl2ZSc7XG5gO1xuXG5pbnRlcmZhY2UgUmFuZ2VQbG90UHJvcHMge1xuICBvbkJydXNoOiBPbkJydXNoO1xuICByYW5nZTogbnVtYmVyW107XG4gIHZhbHVlOiBudW1iZXJbXTtcbiAgd2lkdGg6IG51bWJlcjtcbiAgcGxvdFR5cGU/OiBzdHJpbmc7XG4gIGxpbmVDaGFydD86IExpbmVDaGFydDtcbiAgaGlzdG9ncmFtPzoge3gwOiBudW1iZXI7IHgxOiBudW1iZXJ9W107XG4gIGlzRW5sYXJnZWQ/OiBib29sZWFuO1xuICBpc1JhbmdlZD86IGJvb2xlYW47XG4gIHRoZW1lOiBhbnk7XG4gIHRpbWVGb3JtYXQ/OiBzdHJpbmc7XG4gIHRpbWV6b25lPzogc3RyaW5nIHwgbnVsbDtcbiAgcGxheWJhY2tDb250cm9sV2lkdGg/OiBudW1iZXI7XG59XG5cblJhbmdlUGxvdEZhY3RvcnkuZGVwcyA9IFtSYW5nZUJydXNoRmFjdG9yeSwgSGlzdG9ncmFtUGxvdEZhY3RvcnksIExpbmVDaGFydEZhY3RvcnldO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5nZVBsb3RGYWN0b3J5KFxuICBSYW5nZUJydXNoOiBSZXR1cm5UeXBlPHR5cGVvZiBSYW5nZUJydXNoRmFjdG9yeT4sXG4gIEhpc3RvZ3JhbVBsb3Q6IFJldHVyblR5cGU8dHlwZW9mIEhpc3RvZ3JhbVBsb3RGYWN0b3J5PixcbiAgTGluZUNoYXJ0UGxvdDogUmV0dXJuVHlwZTx0eXBlb2YgTGluZUNoYXJ0RmFjdG9yeT5cbikge1xuICBjb25zdCBSYW5nZVBsb3QgPSAoe1xuICAgIG9uQnJ1c2gsXG4gICAgcmFuZ2UsXG4gICAgdmFsdWUsXG4gICAgd2lkdGgsXG4gICAgcGxvdFR5cGUsXG4gICAgbGluZUNoYXJ0LFxuICAgIGhpc3RvZ3JhbSxcbiAgICBpc0VubGFyZ2VkLFxuICAgIGlzUmFuZ2VkLFxuICAgIHRoZW1lLFxuICAgIC4uLmNoYXJ0UHJvcHNcbiAgfTogUmFuZ2VQbG90UHJvcHMgJiBQYXJ0aWFsPFJhbmdlQnJ1c2hQcm9wcz4pID0+IHtcbiAgICBjb25zdCBbYnJ1c2hpbmcsIHNldEJydXNoaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaG92ZXJlZERQLCBvbk1vdXNlTW92ZV0gPSB1c2VTdGF0ZTxIb3ZlckRQIHwgbnVsbD4obnVsbCk7XG4gICAgY29uc3QgW2VuYWJsZUNoYXJ0SG92ZXIsIHNldEVuYWJsZUNoYXJ0SG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGhlaWdodCA9IGlzRW5sYXJnZWRcbiAgICAgID8gaGFzTW9iaWxlV2lkdGgoYnJlYWtQb2ludFZhbHVlcylcbiAgICAgICAgPyB0aGVtZS5yYW5nZVBsb3RITGFyZ2VQYWxtXG4gICAgICAgIDogdGhlbWUucmFuZ2VQbG90SExhcmdlXG4gICAgICA6IHRoZW1lLnJhbmdlUGxvdEg7XG5cbiAgICBjb25zdCBvbkJydXNoU3RhcnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICBzZXRCcnVzaGluZyh0cnVlKTtcbiAgICAgIG9uTW91c2VNb3ZlKG51bGwpO1xuICAgICAgc2V0RW5hYmxlQ2hhcnRIb3ZlcihmYWxzZSk7XG4gICAgfSwgW3NldEJydXNoaW5nLCBvbk1vdXNlTW92ZSwgc2V0RW5hYmxlQ2hhcnRIb3Zlcl0pO1xuXG4gICAgY29uc3Qgb25CcnVzaEVuZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIHNldEJydXNoaW5nKGZhbHNlKTtcbiAgICAgIHNldEVuYWJsZUNoYXJ0SG92ZXIodHJ1ZSk7XG4gICAgfSwgW3NldEJydXNoaW5nLCBzZXRFbmFibGVDaGFydEhvdmVyXSk7XG5cbiAgICBjb25zdCBvbk1vdXNlb3ZlckhhbmRsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIG9uTW91c2VNb3ZlKG51bGwpO1xuICAgICAgc2V0RW5hYmxlQ2hhcnRIb3ZlcihmYWxzZSk7XG4gICAgfSwgW29uTW91c2VNb3ZlLCBzZXRFbmFibGVDaGFydEhvdmVyXSk7XG5cbiAgICBjb25zdCBvbk1vdXNlb3V0SGFuZGxlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgc2V0RW5hYmxlQ2hhcnRIb3Zlcih0cnVlKTtcbiAgICB9LCBbc2V0RW5hYmxlQ2hhcnRIb3Zlcl0pO1xuXG4gICAgLy8gSnNEb20gaGF2ZSBsaW1pdGVkIHN1cHBvcnQgZm9yIFNWRywgZDMgd2lsbCBmYWlsXG4gICAgY29uc3QgYnJ1c2hDb21wb25lbnQgPSBpc1Rlc3QoKSA/IG51bGwgOiAoXG4gICAgICA8UmFuZ2VCcnVzaFxuICAgICAgICBvbkJydXNoPXtvbkJydXNofVxuICAgICAgICBvbkJydXNoU3RhcnQ9e29uQnJ1c2hTdGFydH1cbiAgICAgICAgb25CcnVzaEVuZD17b25CcnVzaEVuZH1cbiAgICAgICAgcmFuZ2U9e3JhbmdlfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIGlzUmFuZ2VkPXtpc1JhbmdlZH1cbiAgICAgICAgb25Nb3VzZW92ZXJIYW5kbGU9e29uTW91c2VvdmVySGFuZGxlfVxuICAgICAgICBvbk1vdXNlb3V0SGFuZGxlPXtvbk1vdXNlb3V0SGFuZGxlfVxuICAgICAgICB7Li4uY2hhcnRQcm9wc31cbiAgICAgIC8+XG4gICAgKTtcblxuICAgIGNvbnN0IGNvbW1vblByb3BzID0ge1xuICAgICAgd2lkdGgsXG4gICAgICB2YWx1ZSxcbiAgICAgIGhlaWdodCxcbiAgICAgIG1hcmdpbjogaXNFbmxhcmdlZCA/IHRoZW1lLnJhbmdlUGxvdE1hcmdpbkxhcmdlIDogdGhlbWUucmFuZ2VQbG90TWFyZ2luLFxuICAgICAgYnJ1c2hDb21wb25lbnQsXG4gICAgICBicnVzaGluZyxcbiAgICAgIGlzRW5sYXJnZWQsXG4gICAgICBlbmFibGVDaGFydEhvdmVyLFxuICAgICAgb25Nb3VzZU1vdmUsXG4gICAgICBob3ZlcmVkRFAsXG4gICAgICBpc1JhbmdlZCxcbiAgICAgIC4uLmNoYXJ0UHJvcHNcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRSYW5nZVBsb3RcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBoZWlnaHQ6IGAke1xuICAgICAgICAgICAgaXNFbmxhcmdlZFxuICAgICAgICAgICAgICA/IGhhc01vYmlsZVdpZHRoKGJyZWFrUG9pbnRWYWx1ZXMpXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5yYW5nZVBsb3RDb250YWluZXJITGFyZ2VQYWxtXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5yYW5nZVBsb3RDb250YWluZXJITGFyZ2VcbiAgICAgICAgICAgICAgOiB0aGVtZS5yYW5nZVBsb3RDb250YWluZXJIXG4gICAgICAgICAgfXB4YFxuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9XCJrZy1yYW5nZS1zbGlkZXJfX3Bsb3RcIlxuICAgICAgPlxuICAgICAgICB7cGxvdFR5cGUgPT09ICdsaW5lQ2hhcnQnICYmIGxpbmVDaGFydCA/IChcbiAgICAgICAgICA8TGluZUNoYXJ0UGxvdCBsaW5lQ2hhcnQ9e2xpbmVDaGFydH0gey4uLmNvbW1vblByb3BzfSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxIaXN0b2dyYW1QbG90IGhpc3RvZ3JhbT17aGlzdG9ncmFtfSB7Li4uY29tbW9uUHJvcHN9IC8+XG4gICAgICAgICl9XG4gICAgICA8L1N0eWxlZFJhbmdlUGxvdD5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiB3aXRoVGhlbWUoUmFuZ2VQbG90KTtcbn1cbiJdfQ==