"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("../");

var _react2 = _interopRequireDefault(require("@tippyjs/react"));

var _templateObject, _templateObject2;

var TippyArrow = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  width: 15px;\n  height: 15px;\n  fill: ", ";\n  text-align: initial;\n\n  > svg {\n    position: absolute;\n  }\n"])), function (props) {
  return props.theme.tooltipBg;
});

var TippyTooltipContent = (0, _styledComponents["default"])(function (_ref) {
  var children = _ref.children,
      arrow = _ref.arrow,
      isLightTheme = _ref.isLightTheme,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children", "arrow", "isLightTheme"]);
  return /*#__PURE__*/_react["default"].createElement("div", props, children, arrow ? /*#__PURE__*/_react["default"].createElement(TippyArrow, {
    className: "svg-arrow",
    "data-popper-arrow": ""
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    width: 15,
    height: 15
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M2,7.5 7.5,2 13,7.5Z"
  }))) : null);
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: ", ";\n  font-size: ", ";\n  font-weight: 400;\n  padding: 7px 18px;\n  box-shadow: ", ";\n  background-color: ", ";\n  color: ", ";\n  border-radius: ", ";\n  ", "\n"])), function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.tooltipFontSize;
}, function (props) {
  return props.isLightTheme ? props.theme.panelBoxShadow : props.theme.tooltipBoxShadow;
}, function (props) {
  return props.isLightTheme ? props.theme.tooltipBgLT : props.theme.tooltipBg;
}, function (props) {
  return props.isLightTheme ? props.theme.tooltipColorLT : props.theme.tooltipColor;
}, function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.arrow ? "\n    &[data-placement^='top'] > .svg-arrow {\n      bottom: 0;\n      &::after,\n      > svg {\n        top: 7px;\n        transform: rotate(180deg);\n      }\n    }\n\n    &[data-placement^='bottom'] > .svg-arrow {\n      top: 0;\n      > svg {\n        bottom: 7px;\n      }\n    }\n\n    &[data-placement^='left'] > .svg-arrow {\n      right: 0;\n      &::after,\n      > svg {\n        transform: rotate(90deg);\n        left: 7px;\n      }\n    }\n\n    &[data-placement^='right'] > .svg-arrow {\n      left: 0;\n      &::after,\n      > svg {\n        transform: rotate(-90deg);\n        right: 7px;\n      }\n    }\n  " : '';
});

var TippyTooltip = function TippyTooltip(_ref2) {
  var children = _ref2.children,
      _render = _ref2.render,
      _ref2$duration = _ref2.duration,
      duration = _ref2$duration === void 0 ? 200 : _ref2$duration,
      _ref2$arrow = _ref2.arrow,
      arrow = _ref2$arrow === void 0 ? true : _ref2$arrow,
      _ref2$isLightTheme = _ref2.isLightTheme,
      isLightTheme = _ref2$isLightTheme === void 0 ? false : _ref2$isLightTheme,
      rest = (0, _objectWithoutProperties2["default"])(_ref2, ["children", "render", "duration", "arrow", "isLightTheme"]);

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      opacity = _useState2[0],
      setOpacity = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      timer = _useState4[0],
      setTimer = _useState4[1];

  function onMount() {
    setOpacity(1);

    if (timer) {
      // @ts-ignore
      clearTimeout(timer);
    }
  }

  function onHide(instance) {
    var unmount = instance.unmount;
    var timeout = setTimeout(function () {
      var _instance$state;

      if (!((_instance$state = instance.state) !== null && _instance$state !== void 0 && _instance$state.isDestroyed)) {
        unmount();
      }
    }, duration[0] || duration); // @ts-ignore

    setTimer(timeout);
    setOpacity(0);
  }

  return /*#__PURE__*/_react["default"].createElement(_.RootContext.Consumer, null, function (context) {
    return /*#__PURE__*/_react["default"].createElement(_react2["default"], (0, _extends2["default"])({}, rest, {
      // Using document.body would result in the CSS styles not being applied
      // to the tooltip content when embedding the map widget as a Shadow DOM element.
      appendTo: (context === null || context === void 0 ? void 0 : context.current) || 'parent',
      animation: true,
      render: function render(attrs) {
        return /*#__PURE__*/_react["default"].createElement(TippyTooltipContent, (0, _extends2["default"])({}, attrs, {
          style: {
            opacity: opacity,
            transition: "opacity ".concat(duration, "ms")
          },
          arrow: arrow,
          isLightTheme: isLightTheme
        }), _render === null || _render === void 0 ? void 0 : _render(attrs));
      },
      onMount: onMount,
      onHide: onHide
    }), children);
  });
};

var _default = TippyTooltip;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vdGlwcHktdG9vbHRpcC50c3giXSwibmFtZXMiOlsiVGlwcHlBcnJvdyIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJ0b29sdGlwQmciLCJUaXBweVRvb2x0aXBDb250ZW50IiwiY2hpbGRyZW4iLCJhcnJvdyIsImlzTGlnaHRUaGVtZSIsImZvbnRGYW1pbHkiLCJ0b29sdGlwRm9udFNpemUiLCJwYW5lbEJveFNoYWRvdyIsInRvb2x0aXBCb3hTaGFkb3ciLCJ0b29sdGlwQmdMVCIsInRvb2x0aXBDb2xvckxUIiwidG9vbHRpcENvbG9yIiwicHJpbWFyeUJ0blJhZGl1cyIsIlRpcHB5VG9vbHRpcCIsInJlbmRlciIsImR1cmF0aW9uIiwicmVzdCIsIm9wYWNpdHkiLCJzZXRPcGFjaXR5IiwidGltZXIiLCJzZXRUaW1lciIsIm9uTW91bnQiLCJjbGVhclRpbWVvdXQiLCJvbkhpZGUiLCJpbnN0YW5jZSIsInVubW91bnQiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsInN0YXRlIiwiaXNEZXN0cm95ZWQiLCJjb250ZXh0IiwiY3VycmVudCIsImF0dHJzIiwidHJhbnNpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLFVBQVUsR0FBR0MsNkJBQU9DLEdBQVYsbU9BSU4sVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxTQUFoQjtBQUFBLENBSkMsQ0FBaEI7O0FBWUEsSUFBTUMsbUJBQW1CLEdBQUcsa0NBQU87QUFBQSxNQUFFQyxRQUFGLFFBQUVBLFFBQUY7QUFBQSxNQUFZQyxLQUFaLFFBQVlBLEtBQVo7QUFBQSxNQUFtQkMsWUFBbkIsUUFBbUJBLFlBQW5CO0FBQUEsTUFBb0NOLEtBQXBDO0FBQUEsc0JBQ2pDLHVDQUFTQSxLQUFULEVBQ0dJLFFBREgsRUFFR0MsS0FB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QUFDLGtCQUFELGdDQUNNZCxJQUROO0FBRUU7QUFDQTtBQUNBLE1BQUEsUUFBUSxFQUFFLENBQUFjLE9BQU8sU0FBUCxJQUFBQSxPQUFPLFdBQVAsWUFBQUEsT0FBTyxDQUFFQyxPQUFULEtBQW9CLFFBSmhDO0FBS0UsTUFBQSxTQUFTLEVBQUUsSUFMYjtBQU1FLE1BQUEsTUFBTSxFQUFFLGdCQUFBQyxLQUFLO0FBQUEsNEJBQ1gsZ0NBQUMsbUJBQUQsZ0NBQ01BLEtBRE47QUFFRSxVQUFBLEtBQUssRUFBRTtBQUFDZixZQUFBQSxPQUFPLEVBQVBBLE9BQUQ7QUFBVWdCLFlBQUFBLFVBQVUsb0JBQWFsQixRQUFiO0FBQXBCLFdBRlQ7QUFHRSxVQUFBLEtBQUssRUFBRVosS0FIVDtBQUlFLFVBQUEsWUFBWSxFQUFFQztBQUpoQixZQU1HVSxPQU5ILGFBTUdBLE9BTkgsdUJBTUdBLE9BQU0sQ0FBR2tCLEtBQUgsQ0FOVCxDQURXO0FBQUEsT0FOZjtBQWdCRSxNQUFBLE9BQU8sRUFBRVgsT0FoQlg7QUFpQkUsTUFBQSxNQUFNLEVBQUVFO0FBakJWLFFBbUJHckIsUUFuQkgsQ0FETTtBQUFBLEdBRFYsQ0FERjtBQTJCRCxDQXpERDs7ZUEyRGVXLFkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1Jvb3RDb250ZXh0fSBmcm9tICcuLi8nO1xuaW1wb3J0IFRpcHB5LCB7VGlwcHlQcm9wc30gZnJvbSAnQHRpcHB5anMvcmVhY3QnO1xuXG5jb25zdCBUaXBweUFycm93ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBCZ307XG4gIHRleHQtYWxpZ246IGluaXRpYWw7XG5cbiAgPiBzdmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuYDtcblxuY29uc3QgVGlwcHlUb29sdGlwQ29udGVudCA9IHN0eWxlZCgoe2NoaWxkcmVuLCBhcnJvdywgaXNMaWdodFRoZW1lLCAuLi5wcm9wc30pID0+IChcbiAgPGRpdiB7Li4ucHJvcHN9PlxuICAgIHtjaGlsZHJlbn1cbiAgICB7YXJyb3cgPyAoXG4gICAgICA8VGlwcHlBcnJvdyBjbGFzc05hbWU9XCJzdmctYXJyb3dcIiBkYXRhLXBvcHBlci1hcnJvdz1cIlwiPlxuICAgICAgICA8c3ZnIHdpZHRoPXsxNX0gaGVpZ2h0PXsxNX0+XG4gICAgICAgICAgPHBhdGggZD1cIk0yLDcuNSA3LjUsMiAxMyw3LjVaXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L1RpcHB5QXJyb3c+XG4gICAgKSA6IG51bGx9XG4gIDwvZGl2PlxuKSlgXG4gIGZvbnQtZmFtaWx5OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnRGYW1pbHl9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudG9vbHRpcEZvbnRTaXplfTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgcGFkZGluZzogN3B4IDE4cHg7XG4gIGJveC1zaGFkb3c6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5pc0xpZ2h0VGhlbWUgPyBwcm9wcy50aGVtZS5wYW5lbEJveFNoYWRvdyA6IHByb3BzLnRoZW1lLnRvb2x0aXBCb3hTaGFkb3d9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgcHJvcHMuaXNMaWdodFRoZW1lID8gcHJvcHMudGhlbWUudG9vbHRpcEJnTFQgOiBwcm9wcy50aGVtZS50b29sdGlwQmd9O1xuICBjb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuaXNMaWdodFRoZW1lID8gcHJvcHMudGhlbWUudG9vbHRpcENvbG9yTFQgOiBwcm9wcy50aGVtZS50b29sdGlwQ29sb3IpfTtcbiAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuUmFkaXVzfTtcbiAgJHtwcm9wcyA9PlxuICAgIHByb3BzLmFycm93XG4gICAgICA/IGBcbiAgICAmW2RhdGEtcGxhY2VtZW50Xj0ndG9wJ10gPiAuc3ZnLWFycm93IHtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgICY6OmFmdGVyLFxuICAgICAgPiBzdmcge1xuICAgICAgICB0b3A6IDdweDtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmW2RhdGEtcGxhY2VtZW50Xj0nYm90dG9tJ10gPiAuc3ZnLWFycm93IHtcbiAgICAgIHRvcDogMDtcbiAgICAgID4gc3ZnIHtcbiAgICAgICAgYm90dG9tOiA3cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJltkYXRhLXBsYWNlbWVudF49J2xlZnQnXSA+IC5zdmctYXJyb3cge1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICAmOjphZnRlcixcbiAgICAgID4gc3ZnIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICBsZWZ0OiA3cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJltkYXRhLXBsYWNlbWVudF49J3JpZ2h0J10gPiAuc3ZnLWFycm93IHtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICAmOjphZnRlcixcbiAgICAgID4gc3ZnIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbiAgICAgICAgcmlnaHQ6IDdweDtcbiAgICAgIH1cbiAgICB9XG4gIGBcbiAgICAgIDogJyd9XG5gO1xuXG5jb25zdCBUaXBweVRvb2x0aXAgPSAoe1xuICBjaGlsZHJlbixcbiAgcmVuZGVyLFxuICBkdXJhdGlvbiA9IDIwMCxcbiAgYXJyb3cgPSB0cnVlLFxuICBpc0xpZ2h0VGhlbWUgPSBmYWxzZSxcbiAgLi4ucmVzdFxufTogVGlwcHlQcm9wcyAmIHtpc0xpZ2h0VGhlbWU/OiBib29sZWFufSkgPT4ge1xuICBjb25zdCBbb3BhY2l0eSwgc2V0T3BhY2l0eV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RpbWVyLCBzZXRUaW1lcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgZnVuY3Rpb24gb25Nb3VudCgpIHtcbiAgICBzZXRPcGFjaXR5KDEpO1xuICAgIGlmICh0aW1lcikge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkhpZGUoaW5zdGFuY2UpIHtcbiAgICBjb25zdCB7dW5tb3VudH0gPSBpbnN0YW5jZTtcbiAgICBjb25zdCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIWluc3RhbmNlLnN0YXRlPy5pc0Rlc3Ryb3llZCkge1xuICAgICAgICB1bm1vdW50KCk7XG4gICAgICB9XG4gICAgfSwgZHVyYXRpb25bMF0gfHwgZHVyYXRpb24pO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBzZXRUaW1lcih0aW1lb3V0KTtcbiAgICBzZXRPcGFjaXR5KDApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Um9vdENvbnRleHQuQ29uc3VtZXI+XG4gICAgICB7Y29udGV4dCA9PiAoXG4gICAgICAgIDxUaXBweVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgIC8vIFVzaW5nIGRvY3VtZW50LmJvZHkgd291bGQgcmVzdWx0IGluIHRoZSBDU1Mgc3R5bGVzIG5vdCBiZWluZyBhcHBsaWVkXG4gICAgICAgICAgLy8gdG8gdGhlIHRvb2x0aXAgY29udGVudCB3aGVuIGVtYmVkZGluZyB0aGUgbWFwIHdpZGdldCBhcyBhIFNoYWRvdyBET00gZWxlbWVudC5cbiAgICAgICAgICBhcHBlbmRUbz17Y29udGV4dD8uY3VycmVudCB8fCAncGFyZW50J31cbiAgICAgICAgICBhbmltYXRpb249e3RydWV9XG4gICAgICAgICAgcmVuZGVyPXthdHRycyA9PiAoXG4gICAgICAgICAgICA8VGlwcHlUb29sdGlwQ29udGVudFxuICAgICAgICAgICAgICB7Li4uYXR0cnN9XG4gICAgICAgICAgICAgIHN0eWxlPXt7b3BhY2l0eSwgdHJhbnNpdGlvbjogYG9wYWNpdHkgJHtkdXJhdGlvbn1tc2B9fVxuICAgICAgICAgICAgICBhcnJvdz17YXJyb3d9XG4gICAgICAgICAgICAgIGlzTGlnaHRUaGVtZT17aXNMaWdodFRoZW1lfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cmVuZGVyPy4oYXR0cnMpfVxuICAgICAgICAgICAgPC9UaXBweVRvb2x0aXBDb250ZW50PlxuICAgICAgICAgICl9XG4gICAgICAgICAgb25Nb3VudD17b25Nb3VudH1cbiAgICAgICAgICBvbkhpZGU9e29uSGlkZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9UaXBweT5cbiAgICAgICl9XG4gICAgPC9Sb290Q29udGV4dC5Db25zdW1lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpcHB5VG9vbHRpcDtcbiJdfQ==