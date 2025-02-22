"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

exports["default"] = Base;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vaWNvbnMvYmFzZS50c3giXSwibmFtZXMiOlsiZ2V0U3R5bGVDbGFzc0Zyb21Db2xvciIsInRvdGFsQ29sb3IiLCJjb2xvcnMiLCJBcnJheSIsImZpbGwiLCJyZWR1Y2UiLCJhY2N1IiwiYyIsImkiLCJsZW5ndGgiLCJub3AiLCJCYXNlIiwicHJvcHMiLCJoZWlnaHQiLCJ3aWR0aCIsInZpZXdCb3giLCJzdHlsZSIsImNoaWxkcmVuIiwicHJlZGVmaW5lZENsYXNzTmFtZSIsImNsYXNzTmFtZSIsInN2Z0hlaWdodCIsInN2Z1dpZHRoIiwiZmlsbFN0eWxlIiwiaXNBcnJheSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOzs7Ozs7QUFFQSxJQUFNQSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNDLFVBQUQsRUFBcUJDLE1BQXJCO0FBQUEsU0FDN0IsSUFBSUMsS0FBSixDQUFVRixVQUFWLEVBQ0dHLElBREgsQ0FDUSxDQURSLEVBRUdDLE1BRkgsQ0FFVSxVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBVUMsQ0FBVjtBQUFBLHFCQUFtQkYsSUFBbkIsZ0JBQTZCRSxDQUFDLEdBQUcsQ0FBakMsb0JBQTRDTixNQUFNLENBQUNNLENBQUMsR0FBR04sTUFBTSxDQUFDTyxNQUFaLENBQWxEO0FBQUEsR0FGVixFQUVxRixFQUZyRixDQUQ2QjtBQUFBLENBQS9COztBQUtBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNLEdBQU0sQ0FBRSxDQUFwQjs7SUFtQnFCQyxJOzs7Ozs7Ozs7Ozs7V0FjbkIsa0JBQVM7QUFBQSx3QkFZSCxLQUFLQyxLQVpGO0FBQUEsVUFFTEMsTUFGSyxlQUVMQSxNQUZLO0FBQUEsVUFHTEMsS0FISyxlQUdMQSxLQUhLO0FBQUEsVUFJTEMsT0FKSyxlQUlMQSxPQUpLO0FBQUEsVUFLTEMsS0FMSyxlQUtMQSxLQUxLO0FBQUEsVUFNTEMsUUFOSyxlQU1MQSxRQU5LO0FBQUEsVUFPTEMsbUJBUEssZUFPTEEsbUJBUEs7QUFBQSxVQVFMQyxTQVJLLGVBUUxBLFNBUks7QUFBQSxVQVNMakIsTUFUSyxlQVNMQSxNQVRLO0FBQUEsVUFVTEQsVUFWSyxlQVVMQSxVQVZLO0FBQUEsVUFXRlcsS0FYRTtBQWFQLFVBQU1RLFNBQVMsR0FBR1AsTUFBbEI7QUFDQSxVQUFNUSxRQUFRLEdBQUdQLEtBQUssSUFBSU0sU0FBMUI7QUFFQSxVQUFNRSxTQUFTLEdBQ2JuQixLQUFLLENBQUNvQixPQUFOLENBQWNyQixNQUFkLEtBQXlCRCxVQUF6QixJQUF1Q0Qsc0JBQXNCLENBQUNDLFVBQUQsRUFBYUMsTUFBYixDQUQvRDtBQUdBLDBCQUNFO0FBQ0UsUUFBQSxPQUFPLEVBQUVhLE9BRFg7QUFFRSxRQUFBLEtBQUssRUFBRU0sUUFGVDtBQUdFLFFBQUEsTUFBTSxFQUFFRCxTQUhWO0FBSUUsUUFBQSxLQUFLLEVBQUVKLEtBSlQ7QUFLRSxRQUFBLFNBQVMsWUFBS0UsbUJBQUwsY0FBNEJDLFNBQTVCLENBTFg7QUFNRSxRQUFBLE9BQU8sRUFBRVQ7QUFOWCxTQU9NRSxLQVBOLEdBU0dVLFNBQVMsZ0JBQUc7QUFBTyxRQUFBLElBQUksRUFBQztBQUFaLFNBQXdCQSxTQUF4QixDQUFILEdBQWdELElBVDVELEVBVUdMLFFBVkgsQ0FERjtBQWNEOzs7RUEvQytCTyxnQjs7O2lDQUFiYixJLGlCQUNFLFc7aUNBREZBLEksa0JBR0c7QUFDcEJFLEVBQUFBLE1BQU0sRUFBRSxJQURZO0FBRXBCQyxFQUFBQSxLQUFLLEVBQUUsSUFGYTtBQUdwQkMsRUFBQUEsT0FBTyxFQUFFLFdBSFc7QUFJcEJHLEVBQUFBLG1CQUFtQixFQUFFLEVBSkQ7QUFLcEJDLEVBQUFBLFNBQVMsRUFBRSxFQUxTO0FBTXBCSCxFQUFBQSxLQUFLLEVBQUU7QUFDTFosSUFBQUEsSUFBSSxFQUFFO0FBREQ7QUFOYSxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBDU1NQcm9wZXJ0aWVzfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGdldFN0eWxlQ2xhc3NGcm9tQ29sb3IgPSAodG90YWxDb2xvcjogbnVtYmVyLCBjb2xvcnM6IHN0cmluZ1tdKSA9PlxuICBuZXcgQXJyYXkodG90YWxDb2xvcilcbiAgICAuZmlsbCgxKVxuICAgIC5yZWR1Y2UoKGFjY3UsIGMsIGkpID0+IGAke2FjY3V9LmNyJHtpICsgMX0ge2ZpbGw6JHtjb2xvcnNbaSAlIGNvbG9ycy5sZW5ndGhdfTt9YCwgJycpO1xuXG5jb25zdCBub3AgPSAoKSA9PiB7fTtcblxuZXhwb3J0IHR5cGUgQmFzZVByb3BzID0ge1xuICAvKiogU2V0IHRoZSBoZWlnaHQgb2YgdGhlIGljb24sIGV4LiAnMTZweCcgKi9cbiAgaGVpZ2h0Pzogc3RyaW5nO1xuICAvKiogU2V0IHRoZSB3aWR0aCBvZiB0aGUgaWNvbiwgZXguICcxNnB4JyAqL1xuICB3aWR0aD86IHN0cmluZztcbiAgLyoqIFNldCB0aGUgdmlld2JveCBvZiB0aGUgc3ZnICovXG4gIHZpZXdCb3g/OiBzdHJpbmc7XG4gIC8qKiBQYXRoIGVsZW1lbnQgKi9cblxuICBwcmVkZWZpbmVkQ2xhc3NOYW1lPzogc3RyaW5nO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHN0eWxlPzogQ1NTUHJvcGVydGllcztcbiAgY29sb3JzPzogc3RyaW5nW107XG4gIHRvdGFsQ29sb3I/OiBudW1iZXI7XG59ICYgUmVhY3QuU1ZHQXR0cmlidXRlczxTVkdTVkdFbGVtZW50PiAmXG4gIFJlYWN0LkRPTUF0dHJpYnV0ZXM8U1ZHU1ZHRWxlbWVudD47XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2UgZXh0ZW5kcyBDb21wb25lbnQ8QmFzZVByb3BzPiB7XG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdCYXNlIEljb24nO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiBudWxsLFxuICAgIHdpZHRoOiBudWxsLFxuICAgIHZpZXdCb3g6ICcwIDAgNjQgNjQnLFxuICAgIHByZWRlZmluZWRDbGFzc05hbWU6ICcnLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgc3R5bGU6IHtcbiAgICAgIGZpbGw6ICdjdXJyZW50Q29sb3InXG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aCxcbiAgICAgIHZpZXdCb3gsXG4gICAgICBzdHlsZSxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgcHJlZGVmaW5lZENsYXNzTmFtZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGNvbG9ycyxcbiAgICAgIHRvdGFsQ29sb3IsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN2Z0hlaWdodCA9IGhlaWdodDtcbiAgICBjb25zdCBzdmdXaWR0aCA9IHdpZHRoIHx8IHN2Z0hlaWdodDtcblxuICAgIGNvbnN0IGZpbGxTdHlsZSA9XG4gICAgICBBcnJheS5pc0FycmF5KGNvbG9ycykgJiYgdG90YWxDb2xvciAmJiBnZXRTdHlsZUNsYXNzRnJvbUNvbG9yKHRvdGFsQ29sb3IsIGNvbG9ycyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHN2Z1xuICAgICAgICB2aWV3Qm94PXt2aWV3Qm94fVxuICAgICAgICB3aWR0aD17c3ZnV2lkdGh9XG4gICAgICAgIGhlaWdodD17c3ZnSGVpZ2h0fVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZGVmaW5lZENsYXNzTmFtZX0gJHtjbGFzc05hbWV9YH1cbiAgICAgICAgb25DbGljaz17bm9wfVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIHtmaWxsU3R5bGUgPyA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e2ZpbGxTdHlsZX08L3N0eWxlPiA6IG51bGx9XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvc3ZnPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==