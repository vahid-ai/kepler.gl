"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _mouseEvent = _interopRequireDefault(require("./mouse-event"));

var _templateObject;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyledSlider = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  background-color: ", ";\n  ", ";\n  border-radius: ", ";\n  :hover {\n    cursor: pointer;\n  }\n"])), function (props) {
  return props.active ? props.theme.sliderBarHoverColor : props.theme.sliderBarColor;
}, function (props) {
  return "".concat(props.vertical ? 'width' : 'height', ": ").concat(props.theme.sliderBarHeight, "px");
}, function (props) {
  return props.theme.sliderBarRadius;
});

function nope() {}

var SliderBarHandle = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(SliderBarHandle, _Component);

  var _super = _createSuper(SliderBarHandle);

  function SliderBarHandle(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SliderBarHandle);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mouseEvent", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      mouseOver: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleMouseOver", function () {
      _this.setState({
        mouseOver: !_this.state.mouseOver
      });
    });
    _this.props = props;
    _this.mouseEvent = new _mouseEvent["default"]({
      vertical: props.vertical,
      valueListener: props.sliderBarListener,
      toggleMouseOver: _this.toggleMouseOver,
      track: props.track,
      setAnchor: props.setAnchor
    });
    return _this;
  }

  (0, _createClass2["default"])(SliderBarHandle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          v0Left = _this$props.v0Left;
      var style = this.props.vertical ? {
        height: "".concat(width, "%"),
        bottom: "".concat(-100 + width + v0Left, "%")
      } : {
        width: "".concat(width, "%"),
        left: "".concat(v0Left, "%")
      };
      return /*#__PURE__*/_react["default"].createElement(StyledSlider, {
        active: this.state.mouseOver,
        className: (0, _classnames["default"])('kg-range-slider__bar', {
          'kg-range-slider__bar--active': this.state.mouseOver
        }),
        style: style,
        onMouseDown: this.props.enableBarDrag ? this.mouseEvent.handleMouseDown : nope,
        onTouchStart: this.props.enableBarDrag ? this.mouseEvent.handleTouchStart : nope
      });
    }
  }]);
  return SliderBarHandle;
}(_react.Component);

exports["default"] = SliderBarHandle;
(0, _defineProperty2["default"])(SliderBarHandle, "defaultProps", {
  sliderBarListener: nope,
  enableBarDrag: false,
  vertical: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vc2xpZGVyL3NsaWRlci1iYXItaGFuZGxlLnRzeCJdLCJuYW1lcyI6WyJTdHlsZWRTbGlkZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImFjdGl2ZSIsInRoZW1lIiwic2xpZGVyQmFySG92ZXJDb2xvciIsInNsaWRlckJhckNvbG9yIiwidmVydGljYWwiLCJzbGlkZXJCYXJIZWlnaHQiLCJzbGlkZXJCYXJSYWRpdXMiLCJub3BlIiwiU2xpZGVyQmFySGFuZGxlIiwibW91c2VPdmVyIiwic2V0U3RhdGUiLCJzdGF0ZSIsIm1vdXNlRXZlbnQiLCJNb3VzZUV2ZW50SGFuZGxlciIsInZhbHVlTGlzdGVuZXIiLCJzbGlkZXJCYXJMaXN0ZW5lciIsInRvZ2dsZU1vdXNlT3ZlciIsInRyYWNrIiwic2V0QW5jaG9yIiwid2lkdGgiLCJ2MExlZnQiLCJzdHlsZSIsImhlaWdodCIsImJvdHRvbSIsImxlZnQiLCJlbmFibGVCYXJEcmFnIiwiaGFuZGxlTW91c2VEb3duIiwiaGFuZGxlVG91Y2hTdGFydCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQVFBLElBQU1BLFlBQVksR0FBR0MsNkJBQU9DLEdBQVYsbU5BRUksVUFBQUMsS0FBSztBQUFBLFNBQ3ZCQSxLQUFLLENBQUNDLE1BQU4sR0FBZUQsS0FBSyxDQUFDRSxLQUFOLENBQVlDLG1CQUEzQixHQUFpREgsS0FBSyxDQUFDRSxLQUFOLENBQVlFLGNBRHRDO0FBQUEsQ0FGVCxFQUlkLFVBQUFKLEtBQUs7QUFBQSxtQkFBT0EsS0FBSyxDQUFDSyxRQUFOLEdBQWlCLE9BQWpCLEdBQTJCLFFBQWxDLGVBQStDTCxLQUFLLENBQUNFLEtBQU4sQ0FBWUksZUFBM0Q7QUFBQSxDQUpTLEVBS0MsVUFBQU4sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsS0FBTixDQUFZSyxlQUFoQjtBQUFBLENBTE4sQ0FBbEI7O0FBV0EsU0FBU0MsSUFBVCxHQUFnQixDQUFFOztJQVlHQyxlOzs7OztBQVNuQiwyQkFBbUJULEtBQW5CLEVBQWdEO0FBQUE7O0FBQUE7QUFDOUMsOEJBQU1BLEtBQU47QUFEOEM7QUFBQSw4RkFXeEM7QUFBQ1UsTUFBQUEsU0FBUyxFQUFFO0FBQVosS0FYd0M7QUFBQSx3R0FhOUIsWUFBTTtBQUN0QixZQUFLQyxRQUFMLENBQWM7QUFBQ0QsUUFBQUEsU0FBUyxFQUFFLENBQUMsTUFBS0UsS0FBTCxDQUFXRjtBQUF4QixPQUFkO0FBQ0QsS0FmK0M7QUFBQSxVQUE3QlYsS0FBNkIsR0FBN0JBLEtBQTZCO0FBRTlDLFVBQUthLFVBQUwsR0FBa0IsSUFBSUMsc0JBQUosQ0FBc0I7QUFDdENULE1BQUFBLFFBQVEsRUFBRUwsS0FBSyxDQUFDSyxRQURzQjtBQUV0Q1UsTUFBQUEsYUFBYSxFQUFFZixLQUFLLENBQUNnQixpQkFGaUI7QUFHdENDLE1BQUFBLGVBQWUsRUFBRSxNQUFLQSxlQUhnQjtBQUl0Q0MsTUFBQUEsS0FBSyxFQUFFbEIsS0FBSyxDQUFDa0IsS0FKeUI7QUFLdENDLE1BQUFBLFNBQVMsRUFBRW5CLEtBQUssQ0FBQ21CO0FBTHFCLEtBQXRCLENBQWxCO0FBRjhDO0FBUy9DOzs7O1dBUUQsa0JBQVM7QUFBQSx3QkFDaUIsS0FBS25CLEtBRHRCO0FBQUEsVUFDQW9CLEtBREEsZUFDQUEsS0FEQTtBQUFBLFVBQ09DLE1BRFAsZUFDT0EsTUFEUDtBQUdQLFVBQU1DLEtBQUssR0FBRyxLQUFLdEIsS0FBTCxDQUFXSyxRQUFYLEdBQ1Y7QUFDRWtCLFFBQUFBLE1BQU0sWUFBS0gsS0FBTCxNQURSO0FBRUVJLFFBQUFBLE1BQU0sWUFBSyxDQUFDLEdBQUQsR0FBT0osS0FBUCxHQUFlQyxNQUFwQjtBQUZSLE9BRFUsR0FLVjtBQUNFRCxRQUFBQSxLQUFLLFlBQUtBLEtBQUwsTUFEUDtBQUVFSyxRQUFBQSxJQUFJLFlBQUtKLE1BQUw7QUFGTixPQUxKO0FBVUEsMEJBQ0UsZ0NBQUMsWUFBRDtBQUNFLFFBQUEsTUFBTSxFQUFFLEtBQUtULEtBQUwsQ0FBV0YsU0FEckI7QUFFRSxRQUFBLFNBQVMsRUFBRSw0QkFBVyxzQkFBWCxFQUFtQztBQUM1QywwQ0FBZ0MsS0FBS0UsS0FBTCxDQUFXRjtBQURDLFNBQW5DLENBRmI7QUFLRSxRQUFBLEtBQUssRUFBRVksS0FMVDtBQU1FLFFBQUEsV0FBVyxFQUFFLEtBQUt0QixLQUFMLENBQVcwQixhQUFYLEdBQTJCLEtBQUtiLFVBQUwsQ0FBZ0JjLGVBQTNDLEdBQTZEbkIsSUFONUU7QUFPRSxRQUFBLFlBQVksRUFBRSxLQUFLUixLQUFMLENBQVcwQixhQUFYLEdBQTJCLEtBQUtiLFVBQUwsQ0FBZ0JlLGdCQUEzQyxHQUE4RHBCO0FBUDlFLFFBREY7QUFXRDs7O0VBbEQwQ3FCLGdCOzs7aUNBQXhCcEIsZSxrQkFDRztBQUNwQk8sRUFBQUEsaUJBQWlCLEVBQUVSLElBREM7QUFFcEJrQixFQUFBQSxhQUFhLEVBQUUsS0FGSztBQUdwQnJCLEVBQUFBLFFBQVEsRUFBRTtBQUhVLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIFJlZk9iamVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBNb3VzZUV2ZW50SGFuZGxlciBmcm9tICcuL21vdXNlLWV2ZW50JztcbmltcG9ydCB7U3R5bGVSYW5nZVNsaWRlclR5cGV9IGZyb20gJy4vc2xpZGVyJztcblxuaW50ZXJmYWNlIFN0eWxlZFNsaWRlclByb3BzIHtcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgdmVydGljYWw/OiBib29sZWFuO1xufVxuXG5jb25zdCBTdHlsZWRTbGlkZXIgPSBzdHlsZWQuZGl2PFN0eWxlZFNsaWRlclByb3BzPmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgcHJvcHMuYWN0aXZlID8gcHJvcHMudGhlbWUuc2xpZGVyQmFySG92ZXJDb2xvciA6IHByb3BzLnRoZW1lLnNsaWRlckJhckNvbG9yfTtcbiAgJHtwcm9wcyA9PiBgJHtwcm9wcy52ZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0J306ICR7cHJvcHMudGhlbWUuc2xpZGVyQmFySGVpZ2h0fXB4YH07XG4gIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2xpZGVyQmFyUmFkaXVzfTtcbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIG5vcGUoKSB7fVxuXG50eXBlIFNsaWRlckJhckhhbmRsZVByb3BzID0ge1xuICB3aWR0aDogbnVtYmVyO1xuICB2MExlZnQ6IG51bWJlcjtcbiAgc2xpZGVyQmFyTGlzdGVuZXI6IChkaXN0YW5jZTogbnVtYmVyKSA9PiB2b2lkO1xuICBlbmFibGVCYXJEcmFnOiBib29sZWFuO1xuICB2ZXJ0aWNhbDogYm9vbGVhbjtcbiAgdHJhY2s6IFJlZk9iamVjdDxTdHlsZVJhbmdlU2xpZGVyVHlwZT47XG4gIHNldEFuY2hvcjogKGRpc3RhbmNlOiBudW1iZXIpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXJCYXJIYW5kbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHNsaWRlckJhckxpc3RlbmVyOiBub3BlLFxuICAgIGVuYWJsZUJhckRyYWc6IGZhbHNlLFxuICAgIHZlcnRpY2FsOiBmYWxzZVxuICB9O1xuXG4gIHB1YmxpYyBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50SGFuZGxlcjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcHJvcHM6IFNsaWRlckJhckhhbmRsZVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMubW91c2VFdmVudCA9IG5ldyBNb3VzZUV2ZW50SGFuZGxlcih7XG4gICAgICB2ZXJ0aWNhbDogcHJvcHMudmVydGljYWwsXG4gICAgICB2YWx1ZUxpc3RlbmVyOiBwcm9wcy5zbGlkZXJCYXJMaXN0ZW5lcixcbiAgICAgIHRvZ2dsZU1vdXNlT3ZlcjogdGhpcy50b2dnbGVNb3VzZU92ZXIsXG4gICAgICB0cmFjazogcHJvcHMudHJhY2ssXG4gICAgICBzZXRBbmNob3I6IHByb3BzLnNldEFuY2hvclxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGUgPSB7bW91c2VPdmVyOiBmYWxzZX07XG5cbiAgdG9nZ2xlTW91c2VPdmVyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe21vdXNlT3ZlcjogIXRoaXMuc3RhdGUubW91c2VPdmVyfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHt3aWR0aCwgdjBMZWZ0fSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBzdHlsZSA9IHRoaXMucHJvcHMudmVydGljYWxcbiAgICAgID8ge1xuICAgICAgICAgIGhlaWdodDogYCR7d2lkdGh9JWAsXG4gICAgICAgICAgYm90dG9tOiBgJHstMTAwICsgd2lkdGggKyB2MExlZnR9JWBcbiAgICAgICAgfVxuICAgICAgOiB7XG4gICAgICAgICAgd2lkdGg6IGAke3dpZHRofSVgLFxuICAgICAgICAgIGxlZnQ6IGAke3YwTGVmdH0lYFxuICAgICAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRTbGlkZXJcbiAgICAgICAgYWN0aXZlPXt0aGlzLnN0YXRlLm1vdXNlT3Zlcn1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdrZy1yYW5nZS1zbGlkZXJfX2JhcicsIHtcbiAgICAgICAgICAna2ctcmFuZ2Utc2xpZGVyX19iYXItLWFjdGl2ZSc6IHRoaXMuc3RhdGUubW91c2VPdmVyXG4gICAgICAgIH0pfVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgIG9uTW91c2VEb3duPXt0aGlzLnByb3BzLmVuYWJsZUJhckRyYWcgPyB0aGlzLm1vdXNlRXZlbnQuaGFuZGxlTW91c2VEb3duIDogbm9wZX1cbiAgICAgICAgb25Ub3VjaFN0YXJ0PXt0aGlzLnByb3BzLmVuYWJsZUJhckRyYWcgPyB0aGlzLm1vdXNlRXZlbnQuaGFuZGxlVG91Y2hTdGFydCA6IG5vcGV9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==