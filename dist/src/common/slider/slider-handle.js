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

var _templateObject, _templateObject2;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyledSliderHandle = _styledComponents["default"].span.attrs(function (props) {
  return {
    className: (0, _classnames["default"])('kg-range-slider__handle', props.className)
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  z-index: 10;\n  ", ": -", "px;\n\n  height: ", "px;\n  width: ", "px;\n  box-shadow: ", ";\n  background-color: ", ";\n  color: ", ";\n\n  border-width: 1px;\n  border-radius: ", ";\n  border-style: solid;\n  border-color: ", ";\n\n  :hover {\n    background-color: ", ";\n    cursor: pointer;\n  }\n\n  line-height: 10px;\n  font-size: 6px;\n  padding: 0 3px;\n  letter-spacing: 1px;\n  :after {\n    content: '", "';\n  }\n"])), function (props) {
  return props.vertical ? 'margin-left' : 'margin-top';
}, function (props) {
  return (props.sliderHandleWidth - props.theme.sliderBarHeight) / 2;
}, function (props) {
  return Number.isFinite(props.sliderHandleWidth) ? props.sliderHandleWidth : props.theme.sliderHandleHeight;
}, function (props) {
  return Number.isFinite(props.sliderHandleWidth) ? props.sliderHandleWidth : props.theme.sliderHandleHeight;
}, function (props) {
  return props.theme.sliderHandleShadow;
}, function (props) {
  return props.theme.sliderHandleColor;
}, function (props) {
  return props.theme.sliderHandleTextColor;
}, function (props) {
  return props.theme.sliderBorderRadius;
}, function (props) {
  return props.active ? props.theme.selectBorderColor : props.theme.sliderInactiveBorderColor;
}, function (props) {
  return props.theme.sliderHandleHoverColor;
}, function (props) {
  return props.theme.sliderHandleAfterContent;
});

var StyledSliderTooltip = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  border-radius: 3px;\n  display: inline-block;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  z-index: 999;\n  margin-left: ", "px;\n  font-size: 9.5px;\n  font-weight: 500;\n  padding: 7px 10px;\n  background-color: ", ";\n  color: ", ";\n  margin-bottom: -6px;\n  width: 50px;\n\n  :before,\n  :after {\n    content: '';\n    width: 0;\n    height: 0;\n    position: absolute;\n  }\n\n  :before {\n    border-top: 6px solid transparent;\n    border-bottom: 6px solid transparent;\n    left: -8px;\n    top: 50%;\n  }\n\n  :after {\n    border-top: 5px solid transparent;\n    border-bottom: 5px solid transparent;\n    left: -6px;\n    top: 50%;\n    margin-top: -4px;\n    border-right-color: ", ";\n    border-right-style: solid;\n    border-right-width: 6px;\n  }\n"])), function (props) {
  return props.sliderHandleWidth + 12;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipColor;
}, function (props) {
  return props.theme.tooltipBg;
});

var SliderTooltip = function SliderTooltip(_ref) {
  var value = _ref.value,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? function (val) {
    return val;
  } : _ref$format,
      style = _ref.style,
      sliderHandleWidth = _ref.sliderHandleWidth;
  return /*#__PURE__*/_react["default"].createElement(StyledSliderTooltip, {
    sliderHandleWidth: sliderHandleWidth,
    style: style
  }, format(value));
};

var SliderHandle = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(SliderHandle, _Component);

  var _super = _createSuper(SliderHandle);

  function SliderHandle(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SliderHandle);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mouseEvent", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      mouseOver: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "ref", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleMouseOver", function () {
      _this.setState({
        mouseOver: !_this.state.mouseOver
      });
    });
    _this.props = props;
    _this.mouseEvent = new _mouseEvent["default"]({
      vertical: props.vertical,
      valueListener: props.valueListener,
      toggleMouseOver: _this.toggleMouseOver,
      track: props.track
    });
    return _this;
  }

  (0, _createClass2["default"])(SliderHandle, [{
    key: "render",
    value: function render() {
      var style = (0, _defineProperty2["default"])({}, this.props.vertical ? 'bottom' : 'left', this.props.left);
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: this.props.display ? 'block' : 'none'
        }
      }, this.props.showTooltip && this.state.mouseOver ? /*#__PURE__*/_react["default"].createElement(SliderTooltip, {
        style: style,
        sliderHandleWidth: this.props.sliderHandleWidth,
        value: Number.isFinite(this.props.value) ? this.props.value : null
      }) : null, /*#__PURE__*/_react["default"].createElement(StyledSliderHandle, {
        className: (0, _classnames["default"])({
          'kg-range-slider__handle--active': this.state.mouseOver
        }),
        ref: this.ref,
        sliderHandleWidth: this.props.sliderHandleWidth,
        active: this.state.mouseOver,
        vertical: this.props.vertical,
        style: style,
        onMouseDown: this.mouseEvent.handleMouseDown,
        onTouchStart: this.mouseEvent.handleTouchStart
      }));
    }
  }]);
  return SliderHandle;
}(_react.Component);

exports["default"] = SliderHandle;
(0, _defineProperty2["default"])(SliderHandle, "defaultProps", {
  sliderHandleWidth: 12,
  left: '50%',
  display: true,
  vertical: false,
  valueListener: function valueListenerFn() {},
  showTooltip: false
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vc2xpZGVyL3NsaWRlci1oYW5kbGUudHN4Il0sIm5hbWVzIjpbIlN0eWxlZFNsaWRlckhhbmRsZSIsInN0eWxlZCIsInNwYW4iLCJhdHRycyIsInByb3BzIiwiY2xhc3NOYW1lIiwidmVydGljYWwiLCJzbGlkZXJIYW5kbGVXaWR0aCIsInRoZW1lIiwic2xpZGVyQmFySGVpZ2h0IiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJzbGlkZXJIYW5kbGVIZWlnaHQiLCJzbGlkZXJIYW5kbGVTaGFkb3ciLCJzbGlkZXJIYW5kbGVDb2xvciIsInNsaWRlckhhbmRsZVRleHRDb2xvciIsInNsaWRlckJvcmRlclJhZGl1cyIsImFjdGl2ZSIsInNlbGVjdEJvcmRlckNvbG9yIiwic2xpZGVySW5hY3RpdmVCb3JkZXJDb2xvciIsInNsaWRlckhhbmRsZUhvdmVyQ29sb3IiLCJzbGlkZXJIYW5kbGVBZnRlckNvbnRlbnQiLCJTdHlsZWRTbGlkZXJUb29sdGlwIiwiZGl2IiwidG9vbHRpcEJnIiwidG9vbHRpcENvbG9yIiwiU2xpZGVyVG9vbHRpcCIsInZhbHVlIiwiZm9ybWF0IiwidmFsIiwic3R5bGUiLCJTbGlkZXJIYW5kbGUiLCJtb3VzZU92ZXIiLCJzZXRTdGF0ZSIsInN0YXRlIiwibW91c2VFdmVudCIsIk1vdXNlRXZlbnRIYW5kbGVyIiwidmFsdWVMaXN0ZW5lciIsInRvZ2dsZU1vdXNlT3ZlciIsInRyYWNrIiwibGVmdCIsImRpc3BsYXkiLCJzaG93VG9vbHRpcCIsInJlZiIsImhhbmRsZU1vdXNlRG93biIsImhhbmRsZVRvdWNoU3RhcnQiLCJDb21wb25lbnQiLCJ2YWx1ZUxpc3RlbmVyRm4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFTQSxJQUFNQSxrQkFBa0IsR0FBR0MsNkJBQU9DLElBQVAsQ0FBWUMsS0FB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S0FBS1AsS0FBTCxDQUFXdUIsS0FBM0IsSUFBb0MsS0FBS3ZCLEtBQUwsQ0FBV3VCLEtBQS9DLEdBQXVEO0FBSGhFLFFBREQsR0FNRyxJQVBOLGVBUUUsZ0NBQUMsa0JBQUQ7QUFDRSxRQUFBLFNBQVMsRUFBRSw0QkFBVztBQUNwQiw2Q0FBbUMsS0FBS08sS0FBTCxDQUFXRjtBQUQxQixTQUFYLENBRGI7QUFJRSxRQUFBLEdBQUcsRUFBRSxLQUFLVyxHQUpaO0FBS0UsUUFBQSxpQkFBaUIsRUFBRSxLQUFLdkMsS0FBTCxDQUFXRyxpQkFMaEM7QUFNRSxRQUFBLE1BQU0sRUFBRSxLQUFLMkIsS0FBTCxDQUFXRixTQU5yQjtBQU9FLFFBQUEsUUFBUSxFQUFFLEtBQUs1QixLQUFMLENBQVdFLFFBUHZCO0FBUUUsUUFBQSxLQUFLLEVBQUV3QixLQVJUO0FBU0UsUUFBQSxXQUFXLEVBQUUsS0FBS0ssVUFBTCxDQUFnQlMsZUFUL0I7QUFVRSxRQUFBLFlBQVksRUFBRSxLQUFLVCxVQUFMLENBQWdCVTtBQVZoQyxRQVJGLENBREY7QUF1QkQ7OztFQXhEdUNDLGdCOzs7aUNBQXJCZixZLGtCQUNHO0FBQ3BCeEIsRUFBQUEsaUJBQWlCLEVBQUUsRUFEQztBQUVwQmlDLEVBQUFBLElBQUksRUFBRSxLQUZjO0FBR3BCQyxFQUFBQSxPQUFPLEVBQUUsSUFIVztBQUlwQm5DLEVBQUFBLFFBQVEsRUFBRSxLQUpVO0FBS3BCK0IsRUFBQUEsYUFBYSxFQUFFLFNBQVNVLGVBQVQsR0FBMkIsQ0FBRSxDQUx4QjtBQU1wQkwsRUFBQUEsV0FBVyxFQUFFO0FBTk8sQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgY3JlYXRlUmVmLCBDU1NQcm9wZXJ0aWVzLCBSZWZPYmplY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTW91c2VFdmVudEhhbmRsZXIgZnJvbSAnLi9tb3VzZS1ldmVudCc7XG5pbXBvcnQge1N0eWxlUmFuZ2VTbGlkZXJUeXBlfSBmcm9tICcuL3NsaWRlcic7XG5cbmludGVyZmFjZSBTdHlsZWRTbGlkZXJIYW5kbGVQcm9wcyB7XG4gIHZlcnRpY2FsPzogYm9vbGVhbjtcbiAgc2xpZGVySGFuZGxlV2lkdGg6IG51bWJlcjtcbiAgYWN0aXZlPzogYm9vbGVhbjtcbn1cblxuY29uc3QgU3R5bGVkU2xpZGVySGFuZGxlID0gc3R5bGVkLnNwYW4uYXR0cnMocHJvcHMgPT4gKHtcbiAgY2xhc3NOYW1lOiBjbGFzc25hbWVzKCdrZy1yYW5nZS1zbGlkZXJfX2hhbmRsZScsIHByb3BzLmNsYXNzTmFtZSlcbn0pKTxTdHlsZWRTbGlkZXJIYW5kbGVQcm9wcz5gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA7XG4gICR7cHJvcHMgPT4gKHByb3BzLnZlcnRpY2FsID8gJ21hcmdpbi1sZWZ0JyA6ICdtYXJnaW4tdG9wJyl9OiAtJHtwcm9wcyA9PlxuICAocHJvcHMuc2xpZGVySGFuZGxlV2lkdGggLSBwcm9wcy50aGVtZS5zbGlkZXJCYXJIZWlnaHQpIC8gMn1weDtcblxuICBoZWlnaHQ6ICR7cHJvcHMgPT5cbiAgICBOdW1iZXIuaXNGaW5pdGUocHJvcHMuc2xpZGVySGFuZGxlV2lkdGgpXG4gICAgICA/IHByb3BzLnNsaWRlckhhbmRsZVdpZHRoXG4gICAgICA6IHByb3BzLnRoZW1lLnNsaWRlckhhbmRsZUhlaWdodH1weDtcbiAgd2lkdGg6ICR7cHJvcHMgPT5cbiAgICBOdW1iZXIuaXNGaW5pdGUocHJvcHMuc2xpZGVySGFuZGxlV2lkdGgpXG4gICAgICA/IHByb3BzLnNsaWRlckhhbmRsZVdpZHRoXG4gICAgICA6IHByb3BzLnRoZW1lLnNsaWRlckhhbmRsZUhlaWdodH1weDtcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJIYW5kbGVTaGFkb3d9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNsaWRlckhhbmRsZUNvbG9yfTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2xpZGVySGFuZGxlVGV4dENvbG9yfTtcblxuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJCb3JkZXJSYWRpdXN9O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5hY3RpdmUgPyBwcm9wcy50aGVtZS5zZWxlY3RCb3JkZXJDb2xvciA6IHByb3BzLnRoZW1lLnNsaWRlckluYWN0aXZlQm9yZGVyQ29sb3J9O1xuXG4gIDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zbGlkZXJIYW5kbGVIb3ZlckNvbG9yfTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBsaW5lLWhlaWdodDogMTBweDtcbiAgZm9udC1zaXplOiA2cHg7XG4gIHBhZGRpbmc6IDAgM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICA6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcke3Byb3BzID0+IHByb3BzLnRoZW1lLnNsaWRlckhhbmRsZUFmdGVyQ29udGVudH0nO1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgU3R5bGVkU2xpZGVyVG9vbHRpcFByb3BzIHtcbiAgdmVydGljYWw/OiBib29sZWFuO1xuICBzbGlkZXJIYW5kbGVXaWR0aDogbnVtYmVyO1xuICBhY3RpdmU/OiBib29sZWFuO1xufVxuXG5jb25zdCBTdHlsZWRTbGlkZXJUb29sdGlwID0gc3R5bGVkLmRpdjxTdHlsZWRTbGlkZXJUb29sdGlwUHJvcHM+YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2Utb3V0O1xuICB6LWluZGV4OiA5OTk7XG4gIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnNsaWRlckhhbmRsZVdpZHRoICsgMTJ9cHg7XG4gIGZvbnQtc2l6ZTogOS41cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBCZ307XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBDb2xvcn07XG4gIG1hcmdpbi1ib3R0b206IC02cHg7XG4gIHdpZHRoOiA1MHB4O1xuXG4gIDpiZWZvcmUsXG4gIDphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuXG4gIDpiZWZvcmUge1xuICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgbGVmdDogLThweDtcbiAgICB0b3A6IDUwJTtcbiAgfVxuXG4gIDphZnRlciB7XG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBsZWZ0OiAtNnB4O1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC00cHg7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBCZ307XG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDZweDtcbiAgfVxuYDtcblxudHlwZSBTbGlkZXJUb29sdGlwUHJvcHMgPSB7XG4gIHZhbHVlPzogbnVtYmVyIHwgbnVsbDtcbiAgZm9ybWF0PzogKHZhbHVlOiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiBudW1iZXIgfCBudWxsIHwgdW5kZWZpbmVkO1xuICBzdHlsZTogQ1NTUHJvcGVydGllcztcbiAgc2xpZGVySGFuZGxlV2lkdGg6IG51bWJlcjtcbn07XG5cbmNvbnN0IFNsaWRlclRvb2x0aXAgPSAoe1xuICB2YWx1ZSxcbiAgZm9ybWF0ID0gdmFsID0+IHZhbCxcbiAgc3R5bGUsXG4gIHNsaWRlckhhbmRsZVdpZHRoXG59OiBTbGlkZXJUb29sdGlwUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkU2xpZGVyVG9vbHRpcCBzbGlkZXJIYW5kbGVXaWR0aD17c2xpZGVySGFuZGxlV2lkdGh9IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Zm9ybWF0KHZhbHVlKX1cbiAgICA8L1N0eWxlZFNsaWRlclRvb2x0aXA+XG4gICk7XG59O1xuXG50eXBlIFNsaWRlckhhbmRsZVByb3BzID0ge1xuICBzbGlkZXJIYW5kbGVXaWR0aDogbnVtYmVyO1xuICBsZWZ0OiBzdHJpbmc7XG4gIGRpc3BsYXk6IGJvb2xlYW47XG4gIHZhbHVlTGlzdGVuZXI6IChkaXN0YW5jZTogbnVtYmVyKSA9PiB2b2lkO1xuICB2ZXJ0aWNhbDogYm9vbGVhbjtcbiAgdHJhY2s6IFJlZk9iamVjdDxTdHlsZVJhbmdlU2xpZGVyVHlwZT47XG4gIHNob3dUb29sdGlwOiBib29sZWFuO1xuICB2YWx1ZT86IG51bWJlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlckhhbmRsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2xpZGVySGFuZGxlV2lkdGg6IDEyLFxuICAgIGxlZnQ6ICc1MCUnLFxuICAgIGRpc3BsYXk6IHRydWUsXG4gICAgdmVydGljYWw6IGZhbHNlLFxuICAgIHZhbHVlTGlzdGVuZXI6IGZ1bmN0aW9uIHZhbHVlTGlzdGVuZXJGbigpIHt9LFxuICAgIHNob3dUb29sdGlwOiBmYWxzZVxuICB9O1xuXG4gIHB1YmxpYyBtb3VzZUV2ZW50OiBNb3VzZUV2ZW50SGFuZGxlcjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcHJvcHM6IFNsaWRlckhhbmRsZVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5tb3VzZUV2ZW50ID0gbmV3IE1vdXNlRXZlbnRIYW5kbGVyKHtcbiAgICAgIHZlcnRpY2FsOiBwcm9wcy52ZXJ0aWNhbCxcbiAgICAgIHZhbHVlTGlzdGVuZXI6IHByb3BzLnZhbHVlTGlzdGVuZXIsXG4gICAgICB0b2dnbGVNb3VzZU92ZXI6IHRoaXMudG9nZ2xlTW91c2VPdmVyLFxuICAgICAgdHJhY2s6IHByb3BzLnRyYWNrXG4gICAgfSk7XG4gIH1cblxuICBzdGF0ZSA9IHttb3VzZU92ZXI6IGZhbHNlfTtcbiAgcmVmID0gY3JlYXRlUmVmPEhUTUxTcGFuRWxlbWVudD4oKTtcblxuICB0b2dnbGVNb3VzZU92ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bW91c2VPdmVyOiAhdGhpcy5zdGF0ZS5tb3VzZU92ZXJ9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3R5bGUgPSB7W3RoaXMucHJvcHMudmVydGljYWwgPyAnYm90dG9tJyA6ICdsZWZ0J106IHRoaXMucHJvcHMubGVmdH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IHRoaXMucHJvcHMuZGlzcGxheSA/ICdibG9jaycgOiAnbm9uZSd9fT5cbiAgICAgICAge3RoaXMucHJvcHMuc2hvd1Rvb2x0aXAgJiYgdGhpcy5zdGF0ZS5tb3VzZU92ZXIgPyAoXG4gICAgICAgICAgPFNsaWRlclRvb2x0aXBcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgIHNsaWRlckhhbmRsZVdpZHRoPXt0aGlzLnByb3BzLnNsaWRlckhhbmRsZVdpZHRofVxuICAgICAgICAgICAgdmFsdWU9e051bWJlci5pc0Zpbml0ZSh0aGlzLnByb3BzLnZhbHVlKSA/IHRoaXMucHJvcHMudmFsdWUgOiBudWxsfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8U3R5bGVkU2xpZGVySGFuZGxlXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHtcbiAgICAgICAgICAgICdrZy1yYW5nZS1zbGlkZXJfX2hhbmRsZS0tYWN0aXZlJzogdGhpcy5zdGF0ZS5tb3VzZU92ZXJcbiAgICAgICAgICB9KX1cbiAgICAgICAgICByZWY9e3RoaXMucmVmfVxuICAgICAgICAgIHNsaWRlckhhbmRsZVdpZHRoPXt0aGlzLnByb3BzLnNsaWRlckhhbmRsZVdpZHRofVxuICAgICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5tb3VzZU92ZXJ9XG4gICAgICAgICAgdmVydGljYWw9e3RoaXMucHJvcHMudmVydGljYWx9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgIG9uTW91c2VEb3duPXt0aGlzLm1vdXNlRXZlbnQuaGFuZGxlTW91c2VEb3dufVxuICAgICAgICAgIG9uVG91Y2hTdGFydD17dGhpcy5tb3VzZUV2ZW50LmhhbmRsZVRvdWNoU3RhcnR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=