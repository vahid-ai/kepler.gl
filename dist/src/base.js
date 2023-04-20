"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Base = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var getStyleClassFromColor = function getStyleClassFromColor(totalColor, colors) {
  return new Array(totalColor).fill(1).reduce(function (accu, c, i) {
    return "".concat(accu, ".cr").concat(i + 1, " {fill:").concat(colors[i % colors.length], ";}");
  }, '');
};

var nop = function nop() {};

var Base = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Base, _Component);

  var _super = _createSuper(Base);

  function Base() {
    (0, _classCallCheck2["default"])(this, Base);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Base, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          height = _this$props.height,
          width = _this$props.width,
          viewBox = _this$props.viewBox,
          style = _this$props.style,
          children = _this$props.children,
          predefinedClassName = _this$props.predefinedClassName,
          className = _this$props.className,
          colors = _this$props.colors,
          totalColor = _this$props.totalColor,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["height", "width", "viewBox", "style", "children", "predefinedClassName", "className", "colors", "totalColor"]);
      var svgHeight = height;
      var svgWidth = width || svgHeight;
      var fillStyle = Array.isArray(colors) && totalColor && getStyleClassFromColor(totalColor, colors);
      return /*#__PURE__*/_react["default"].createElement("svg", (0, _extends2["default"])({
        viewBox: viewBox,
        width: svgWidth,
        height: svgHeight,
        style: style,
        className: "".concat(predefinedClassName, " ").concat(className),
        onClick: nop
      }, props), fillStyle ? /*#__PURE__*/_react["default"].createElement("style", {
        type: "text/css"
      }, fillStyle) : null, children);
    }
  }]);
  return Base;
}(_react.Component);

exports.Base = Base;
(0, _defineProperty2["default"])(Base, "displayName", 'Base Icon');
(0, _defineProperty2["default"])(Base, "defaultProps", {
  height: null,
  width: null,
  viewBox: '0 0 64 64',
  predefinedClassName: '',
  className: '',
  style: {
    fill: 'currentColor'
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbG91ZC1wcm92aWRlcnMvc3JjL2Jhc2UudHN4Il0sIm5hbWVzIjpbImdldFN0eWxlQ2xhc3NGcm9tQ29sb3IiLCJ0b3RhbENvbG9yIiwiY29sb3JzIiwiQXJyYXkiLCJmaWxsIiwicmVkdWNlIiwiYWNjdSIsImMiLCJpIiwibGVuZ3RoIiwibm9wIiwiQmFzZSIsInByb3BzIiwiaGVpZ2h0Iiwid2lkdGgiLCJ2aWV3Qm94Iiwic3R5bGUiLCJjaGlsZHJlbiIsInByZWRlZmluZWRDbGFzc05hbWUiLCJjbGFzc05hbWUiLCJzdmdIZWlnaHQiLCJzdmdXaWR0aCIsImZpbGxTdHlsZSIsImlzQXJyYXkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7Ozs7O0FBRUEsSUFBTUEsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDQyxVQUFELEVBQXFCQyxNQUFyQjtBQUFBLFNBQzdCLElBQUlDLEtBQUosQ0FBVUYsVUFBVixFQUNHRyxJQURILENBQ1EsQ0FEUixFQUVHQyxNQUZILENBRVUsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQVVDLENBQVY7QUFBQSxxQkFBbUJGLElBQW5CLGdCQUE2QkUsQ0FBQyxHQUFHLENBQWpDLG9CQUE0Q04sTUFBTSxDQUFDTSxDQUFDLEdBQUdOLE1BQU0sQ0FBQ08sTUFBWixDQUFsRDtBQUFBLEdBRlYsRUFFcUYsRUFGckYsQ0FENkI7QUFBQSxDQUEvQjs7QUFLQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNLENBQUUsQ0FBcEI7O0lBbUJhQyxJOzs7Ozs7Ozs7Ozs7V0FjWCxrQkFBUztBQUFBLHdCQVlILEtBQUtDLEtBWkY7QUFBQSxVQUVMQyxNQUZLLGVBRUxBLE1BRks7QUFBQSxVQUdMQyxLQUhLLGVBR0xBLEtBSEs7QUFBQSxVQUlMQyxPQUpLLGVBSUxBLE9BSks7QUFBQSxVQUtMQyxLQUxLLGVBS0xBLEtBTEs7QUFBQSxVQU1MQyxRQU5LLGVBTUxBLFFBTks7QUFBQSxVQU9MQyxtQkFQSyxlQU9MQSxtQkFQSztBQUFBLFVBUUxDLFNBUkssZUFRTEEsU0FSSztBQUFBLFVBU0xqQixNQVRLLGVBU0xBLE1BVEs7QUFBQSxVQVVMRCxVQVZLLGVBVUxBLFVBVks7QUFBQSxVQVdGVyxLQVhFO0FBYVAsVUFBTVEsU0FBUyxHQUFHUCxNQUFsQjtBQUNBLFVBQU1RLFFBQVEsR0FBR1AsS0FBSyxJQUFJTSxTQUExQjtBQUVBLFVBQU1FLFNBQVMsR0FDYm5CLEtBQUssQ0FBQ29CLE9BQU4sQ0FBY3JCLE1BQWQsS0FBeUJELFVBQXpCLElBQXVDRCxzQkFBc0IsQ0FBQ0MsVUFBRCxFQUFhQyxNQUFiLENBRC9EO0FBR0EsMEJBQ0U7QUFDRSxRQUFBLE9BQU8sRUFBRWEsT0FEWDtBQUVFLFFBQUEsS0FBSyxFQUFFTSxRQUZUO0FBR0UsUUFBQSxNQUFNLEVBQUVELFNBSFY7QUFJRSxRQUFBLEtBQUssRUFBRUosS0FKVDtBQUtFLFFBQUEsU0FBUyxZQUFLRSxtQkFBTCxjQUE0QkMsU0FBNUIsQ0FMWDtBQU1FLFFBQUEsT0FBTyxFQUFFVDtBQU5YLFNBT01FLEtBUE4sR0FTR1UsU0FBUyxnQkFBRztBQUFPLFFBQUEsSUFBSSxFQUFDO0FBQVosU0FBd0JBLFNBQXhCLENBQUgsR0FBZ0QsSUFUNUQsRUFVR0wsUUFWSCxDQURGO0FBY0Q7OztFQS9DdUJPLGdCOzs7aUNBQWJiLEksaUJBQ1UsVztpQ0FEVkEsSSxrQkFHVztBQUNwQkUsRUFBQUEsTUFBTSxFQUFFLElBRFk7QUFFcEJDLEVBQUFBLEtBQUssRUFBRSxJQUZhO0FBR3BCQyxFQUFBQSxPQUFPLEVBQUUsV0FIVztBQUlwQkcsRUFBQUEsbUJBQW1CLEVBQUUsRUFKRDtBQUtwQkMsRUFBQUEsU0FBUyxFQUFFLEVBTFM7QUFNcEJILEVBQUFBLEtBQUssRUFBRTtBQUNMWixJQUFBQSxJQUFJLEVBQUU7QUFERDtBQU5hLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIENTU1Byb3BlcnRpZXN9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgZ2V0U3R5bGVDbGFzc0Zyb21Db2xvciA9ICh0b3RhbENvbG9yOiBudW1iZXIsIGNvbG9yczogc3RyaW5nW10pID0+XG4gIG5ldyBBcnJheSh0b3RhbENvbG9yKVxuICAgIC5maWxsKDEpXG4gICAgLnJlZHVjZSgoYWNjdSwgYywgaSkgPT4gYCR7YWNjdX0uY3Ike2kgKyAxfSB7ZmlsbDoke2NvbG9yc1tpICUgY29sb3JzLmxlbmd0aF19O31gLCAnJyk7XG5cbmNvbnN0IG5vcCA9ICgpID0+IHt9O1xuXG5leHBvcnQgdHlwZSBCYXNlUHJvcHMgPSB7XG4gIC8qKiBTZXQgdGhlIGhlaWdodCBvZiB0aGUgaWNvbiwgZXguICcxNnB4JyAqL1xuICBoZWlnaHQ/OiBzdHJpbmc7XG4gIC8qKiBTZXQgdGhlIHdpZHRoIG9mIHRoZSBpY29uLCBleC4gJzE2cHgnICovXG4gIHdpZHRoPzogc3RyaW5nO1xuICAvKiogU2V0IHRoZSB2aWV3Ym94IG9mIHRoZSBzdmcgKi9cbiAgdmlld0JveD86IHN0cmluZztcbiAgLyoqIFBhdGggZWxlbWVudCAqL1xuXG4gIHByZWRlZmluZWRDbGFzc05hbWU/OiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzO1xuICBjb2xvcnM/OiBzdHJpbmdbXTtcbiAgdG90YWxDb2xvcj86IG51bWJlcjtcbn0gJiBSZWFjdC5TVkdBdHRyaWJ1dGVzPFNWR1NWR0VsZW1lbnQ+ICZcbiAgUmVhY3QuRE9NQXR0cmlidXRlczxTVkdTVkdFbGVtZW50PjtcblxuZXhwb3J0IGNsYXNzIEJhc2UgZXh0ZW5kcyBDb21wb25lbnQ8QmFzZVByb3BzPiB7XG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdCYXNlIEljb24nO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiBudWxsLFxuICAgIHdpZHRoOiBudWxsLFxuICAgIHZpZXdCb3g6ICcwIDAgNjQgNjQnLFxuICAgIHByZWRlZmluZWRDbGFzc05hbWU6ICcnLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgc3R5bGU6IHtcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InXG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aCxcbiAgICAgIHZpZXdCb3gsXG4gICAgICBzdHlsZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgcHJlZGVmaW5lZENsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNvbG9ycyxcbiAgICAgIHRvdGFsQ29sb3IsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN2Z0hlaWdodCA9IGhlaWdodDtcbiAgICBjb25zdCBzdmdXaWR0aCA9IHdpZHRoIHx8IHN2Z0hlaWdodDtcblxuICAgIGNvbnN0IGZpbGxTdHlsZSA9XG4gICAgICBBcnJheS5pc0FycmF5KGNvbG9ycykgJiYgdG90YWxDb2xvciAmJiBnZXRTdHlsZUNsYXNzRnJvbUNvbG9yKHRvdGFsQ29sb3IsIGNvbG9ycyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHN2Z1xuICAgICAgICB2aWV3Qm94PXt2aWV3Qm94fVxuICAgICAgICB3aWR0aD17c3ZnV2lkdGh9XG4gICAgICAgIGhlaWdodD17c3ZnSGVpZ2h0fVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZGVmaW5lZENsYXNzTmFtZX0gJHtjbGFzc05hbWV9YH1cbiAgICAgICAgb25DbGljaz17bm9wfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtmaWxsU3R5bGUgPyA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e2ZpbGxTdHlsZX08L3N0eWxlPiA6IG51bGx9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvc3ZnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==