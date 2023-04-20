"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegendRow = exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reselect = require("reselect");

var _moment = _interopRequireDefault(require("moment"));

var _constants = require("@kepler.gl/constants");

var _utils = require("@kepler.gl/utils");

var _templateObject;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ROW_H = 10;
var GAP = 4;
var RECT_W = 20;

var StyledLegend = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n\n  max-height: 150px;\n  overflow-y: auto;\n\n  svg {\n    text {\n      font-size: 9px;\n      fill: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.sidePanelScrollBar;
}, function (props) {
  return props.theme.textColor;
});

var defaultFormat = function defaultFormat(d) {
  return d;
};

var getTimeLabelFormat = function getTimeLabelFormat(domain) {
  var formatter = (0, _utils.getTimeWidgetHintFormatter)(domain);
  return function (val) {
    return _moment["default"].utc(val).format(formatter);
  };
};

var getQuantLabelFormat = function getQuantLabelFormat(domain, fieldType) {
  // quant scale can only be assigned to linear Fields: real, timestamp, integer
  return fieldType === _constants.ALL_FIELD_TYPES.timestamp ? getTimeLabelFormat(domain) : !fieldType ? defaultFormat : function (n) {
    return (0, _utils.formatNumber)(n, fieldType);
  };
};

var getOrdinalLegends = function getOrdinalLegends(scale) {
  var domain = scale.domain();
  return {
    data: domain.map(scale),
    labels: domain
  };
};

var getQuantLegends = function getQuantLegends(scale, labelFormat) {
  if (typeof scale.invertExtent !== 'function') {
    // only quantile, quantize, threshold scale has invertExtent method
    return {
      data: [],
      labels: []
    };
  }

  var labels = scale.range().map(function (d) {
    var invert = scale.invertExtent(d);
    return "".concat(labelFormat(invert[0]), " to ").concat(labelFormat(invert[1]));
  });
  return {
    data: scale.range(),
    labels: labels
  };
};

var ColorLegend = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ColorLegend, _Component);

  var _super = _createSuper(ColorLegend);

  function ColorLegend() {
    var _this;

    (0, _classCallCheck2["default"])(this, ColorLegend);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "domainSelector", function (props) {
      return props.domain;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "rangeSelector", function (props) {
      return props.range;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "labelFormatSelector", function (props) {
      return props.labelFormat;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scaleTypeSelector", function (props) {
      return props.scaleType;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldTypeSelector", function (props) {
      return props.fieldType;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "legendsSelector", (0, _reselect.createSelector)(_this.domainSelector, _this.rangeSelector, _this.scaleTypeSelector, _this.labelFormatSelector, _this.fieldTypeSelector, function (domain, range, scaleType, labelFormat, fieldType) {
      var empty = {
        data: [],
        labels: []
      };

      if (!range) {
        return empty;
      }

      if (range.colorLegends) {
        return {
          data: Object.keys(range.colorLegends),
          labels: Object.values(range.colorLegends)
        };
      } else if (Array.isArray(range.colorMap)) {
        return {
          data: range.colorMap.map(function (cm) {
            return cm[1];
          }),
          labels: range.colorMap.map(function (cm) {
            return cm[0];
          })
        };
      } else if (Array.isArray(range.colors)) {
        if (!domain || !scaleType) {
          return empty;
        }

        var scaleFunction = _constants.SCALE_FUNC[scaleType]; // color scale can only be quantize, quantile or ordinal
        // @ts-ignore fix d3 scale

        var scale = scaleFunction().domain(domain).range(range.colors);

        if (scaleType === _constants.SCALE_TYPES.ordinal) {
          return getOrdinalLegends(scale);
        }

        var formatLabel = labelFormat || getQuantLabelFormat(scale.domain(), fieldType);
        return getQuantLegends(scale, formatLabel);
      }

      return empty;
    }));
    return _this;
  }

  (0, _createClass2["default"])(ColorLegend, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          _this$props$displayLa = _this$props.displayLabel,
          displayLabel = _this$props$displayLa === void 0 ? true : _this$props$displayLa;
      var legends = this.legendsSelector(this.props);
      var height = legends.data.length * (ROW_H + GAP);
      return /*#__PURE__*/_react["default"].createElement(StyledLegend, null, /*#__PURE__*/_react["default"].createElement("svg", {
        width: width,
        height: height
      }, legends.data.map(function (color, idx) {
        return /*#__PURE__*/_react["default"].createElement(LegendRow, {
          key: idx,
          label: legends.labels[idx],
          displayLabel: displayLabel,
          color: color,
          idx: idx
        });
      })));
    }
  }]);
  return ColorLegend;
}(_react.Component);

exports["default"] = ColorLegend;

var LegendRow = function LegendRow(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === void 0 ? '' : _ref$label,
      displayLabel = _ref.displayLabel,
      color = _ref.color,
      idx = _ref.idx;
  return /*#__PURE__*/_react["default"].createElement("g", {
    transform: "translate(0, ".concat(idx * (ROW_H + GAP), ")")
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    width: RECT_W,
    height: ROW_H,
    style: {
      fill: color
    }
  }), /*#__PURE__*/_react["default"].createElement("text", {
    x: RECT_W + 8,
    y: ROW_H - 1
  }, displayLabel ? label.toString() : ''));
};

exports.LegendRow = LegendRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vY29sb3ItbGVnZW5kLnRzeCJdLCJuYW1lcyI6WyJST1dfSCIsIkdBUCIsIlJFQ1RfVyIsIlN0eWxlZExlZ2VuZCIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJzaWRlUGFuZWxTY3JvbGxCYXIiLCJ0ZXh0Q29sb3IiLCJkZWZhdWx0Rm9ybWF0IiwiZCIsImdldFRpbWVMYWJlbEZvcm1hdCIsImRvbWFpbiIsImZvcm1hdHRlciIsInZhbCIsIm1vbWVudCIsInV0YyIsImZvcm1hdCIsImdldFF1YW50TGFiZWxGb3JtYXQiLCJmaWVsZFR5cGUiLCJBTExfRklFTERfVFlQRVMiLCJ0aW1lc3RhbXAiLCJuIiwiZ2V0T3JkaW5hbExlZ2VuZHMiLCJzY2FsZSIsImRhdGEiLCJtYXAiLCJsYWJlbHMiLCJnZXRRdWFudExlZ2VuZHMiLCJsYWJlbEZvcm1hdCIsImludmVydEV4dGVudCIsInJhbmdlIiwiaW52ZXJ0IiwiQ29sb3JMZWdlbmQiLCJzY2FsZVR5cGUiLCJkb21haW5TZWxlY3RvciIsInJhbmdlU2VsZWN0b3IiLCJzY2FsZVR5cGVTZWxlY3RvciIsImxhYmVsRm9ybWF0U2VsZWN0b3IiLCJmaWVsZFR5cGVTZWxlY3RvciIsImVtcHR5IiwiY29sb3JMZWdlbmRzIiwiT2JqZWN0Iiwia2V5cyIsInZhbHVlcyIsIkFycmF5IiwiaXNBcnJheSIsImNvbG9yTWFwIiwiY20iLCJjb2xvcnMiLCJzY2FsZUZ1bmN0aW9uIiwiU0NBTEVfRlVOQyIsIlNDQUxFX1RZUEVTIiwib3JkaW5hbCIsImZvcm1hdExhYmVsIiwid2lkdGgiLCJkaXNwbGF5TGFiZWwiLCJsZWdlbmRzIiwibGVnZW5kc1NlbGVjdG9yIiwiaGVpZ2h0IiwibGVuZ3RoIiwiY29sb3IiLCJpZHgiLCJDb21wb25lbnQiLCJMZWdlbmRSb3ciLCJsYWJlbCIsImZpbGwiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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LEtBQUQsRUFBUUMsR0FBUjtBQUFBLDRCQUNoQixnQ0FBQyxTQUFEO0FBQ0UsVUFBQSxHQUFHLEVBQUVBLEdBRFA7QUFFRSxVQUFBLEtBQUssRUFBRUwsT0FBTyxDQUFDOUIsTUFBUixDQUFlbUMsR0FBZixDQUZUO0FBR0UsVUFBQSxZQUFZLEVBQUVOLFlBSGhCO0FBSUUsVUFBQSxLQUFLLEVBQUVLLEtBSlQ7QUFLRSxVQUFBLEdBQUcsRUFBRUM7QUFMUCxVQURnQjtBQUFBLE9BQWpCLENBREgsQ0FERixDQURGO0FBZUQ7OztFQTVFc0NDLGdCOzs7O0FBK0VsQyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLHdCQUFFQyxLQUFGO0FBQUEsTUFBRUEsS0FBRiwyQkFBVSxFQUFWO0FBQUEsTUFBY1QsWUFBZCxRQUFjQSxZQUFkO0FBQUEsTUFBNEJLLEtBQTVCLFFBQTRCQSxLQUE1QjtBQUFBLE1BQW1DQyxHQUFuQyxRQUFtQ0EsR0FBbkM7QUFBQSxzQkFDdkI7QUFBRyxJQUFBLFNBQVMseUJBQWtCQSxHQUFHLElBQUkvRCxLQUFLLEdBQUdDLEdBQVosQ0FBckI7QUFBWixrQkFDRTtBQUFNLElBQUEsS0FBSyxFQUFFQyxNQUFiO0FBQXFCLElBQUEsTUFBTSxFQUFFRixLQUE3QjtBQUFvQyxJQUFBLEtBQUssRUFBRTtBQUFDbUUsTUFBQUEsSUFBSSxFQUFFTDtBQUFQO0FBQTNDLElBREYsZUFFRTtBQUFNLElBQUEsQ0FBQyxFQUFFNUQsTUFBTSxHQUFHLENBQWxCO0FBQXFCLElBQUEsQ0FBQyxFQUFFRixLQUFLLEdBQUc7QUFBaEMsS0FDR3lELFlBQVksR0FBR1MsS0FBSyxDQUFDRSxRQUFOLEVBQUgsR0FBc0IsRUFEckMsQ0FGRixDQUR1QjtBQUFBLENBQWxCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7U0NBTEVfVFlQRVMsIFNDQUxFX0ZVTkMsIEFMTF9GSUVMRF9UWVBFU30gZnJvbSAnQGtlcGxlci5nbC9jb25zdGFudHMnO1xuaW1wb3J0IHtnZXRUaW1lV2lkZ2V0SGludEZvcm1hdHRlciwgZm9ybWF0TnVtYmVyfSBmcm9tICdAa2VwbGVyLmdsL3V0aWxzJztcblxuY29uc3QgUk9XX0ggPSAxMDtcbmNvbnN0IEdBUCA9IDQ7XG5jb25zdCBSRUNUX1cgPSAyMDtcblxuY29uc3QgU3R5bGVkTGVnZW5kID0gc3R5bGVkLmRpdmBcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWxTY3JvbGxCYXJ9O1xuXG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuXG4gIHN2ZyB7XG4gICAgdGV4dCB7XG4gICAgICBmb250LXNpemU6IDlweDtcbiAgICAgIGZpbGw6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IGRlZmF1bHRGb3JtYXQgPSBkID0+IGQ7XG5cbmNvbnN0IGdldFRpbWVMYWJlbEZvcm1hdCA9IGRvbWFpbiA9PiB7XG4gIGNvbnN0IGZvcm1hdHRlciA9IGdldFRpbWVXaWRnZXRIaW50Rm9ybWF0dGVyKGRvbWFpbik7XG4gIHJldHVybiB2YWwgPT4gbW9tZW50LnV0Yyh2YWwpLmZvcm1hdChmb3JtYXR0ZXIpO1xufTtcblxuY29uc3QgZ2V0UXVhbnRMYWJlbEZvcm1hdCA9IChkb21haW4sIGZpZWxkVHlwZSkgPT4ge1xuICAvLyBxdWFudCBzY2FsZSBjYW4gb25seSBiZSBhc3NpZ25lZCB0byBsaW5lYXIgRmllbGRzOiByZWFsLCB0aW1lc3RhbXAsIGludGVnZXJcbiAgcmV0dXJuIGZpZWxkVHlwZSA9PT0gQUxMX0ZJRUxEX1RZUEVTLnRpbWVzdGFtcFxuICAgID8gZ2V0VGltZUxhYmVsRm9ybWF0KGRvbWFpbilcbiAgICA6ICFmaWVsZFR5cGVcbiAgICA/IGRlZmF1bHRGb3JtYXRcbiAgICA6IG4gPT4gZm9ybWF0TnVtYmVyKG4sIGZpZWxkVHlwZSk7XG59O1xuXG5jb25zdCBnZXRPcmRpbmFsTGVnZW5kcyA9IHNjYWxlID0+IHtcbiAgY29uc3QgZG9tYWluID0gc2NhbGUuZG9tYWluKCk7XG4gIHJldHVybiB7XG4gICAgZGF0YTogZG9tYWluLm1hcChzY2FsZSksXG4gICAgbGFiZWxzOiBkb21haW5cbiAgfTtcbn07XG5cbmNvbnN0IGdldFF1YW50TGVnZW5kcyA9IChzY2FsZSwgbGFiZWxGb3JtYXQpID0+IHtcbiAgaWYgKHR5cGVvZiBzY2FsZS5pbnZlcnRFeHRlbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBvbmx5IHF1YW50aWxlLCBxdWFudGl6ZSwgdGhyZXNob2xkIHNjYWxlIGhhcyBpbnZlcnRFeHRlbnQgbWV0aG9kXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgbGFiZWxzOiBbXVxuICAgIH07XG4gIH1cblxuICBjb25zdCBsYWJlbHMgPSBzY2FsZS5yYW5nZSgpLm1hcChkID0+IHtcbiAgICBjb25zdCBpbnZlcnQgPSBzY2FsZS5pbnZlcnRFeHRlbnQoZCk7XG4gICAgcmV0dXJuIGAke2xhYmVsRm9ybWF0KGludmVydFswXSl9IHRvICR7bGFiZWxGb3JtYXQoaW52ZXJ0WzFdKX1gO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIGRhdGE6IHNjYWxlLnJhbmdlKCksXG4gICAgbGFiZWxzXG4gIH07XG59O1xuXG50eXBlIFJhbmdlVHlwZSA9IHtcbiAgY29sb3JNYXA/OiBbc3RyaW5nLCBzdHJpbmddW107XG4gIGNvbG9yTGVnZW5kcz86IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xuICBjb2xvcnM6IHN0cmluZ1tdO1xufTtcblxuaW50ZXJmYWNlIENvbG9yTGVnZW5kUHJvcHMge1xuICB3aWR0aDogbnVtYmVyO1xuICBzY2FsZVR5cGU/OiBzdHJpbmc7XG4gIGRvbWFpbj86IGFueVtdIHwgb2JqZWN0O1xuICBmaWVsZFR5cGU/OiBzdHJpbmcgfCBudWxsO1xuICByYW5nZT86IFJhbmdlVHlwZTtcbiAgbGFiZWxGb3JtYXQ/OiBGdW5jdGlvbjtcbiAgZGlzcGxheUxhYmVsPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3JMZWdlbmQgZXh0ZW5kcyBDb21wb25lbnQ8Q29sb3JMZWdlbmRQcm9wcz4ge1xuICBkb21haW5TZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmRvbWFpbjtcbiAgcmFuZ2VTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLnJhbmdlO1xuICBsYWJlbEZvcm1hdFNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMubGFiZWxGb3JtYXQ7XG4gIHNjYWxlVHlwZVNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuc2NhbGVUeXBlO1xuICBmaWVsZFR5cGVTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmZpZWxkVHlwZTtcblxuICBsZWdlbmRzU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcihcbiAgICB0aGlzLmRvbWFpblNlbGVjdG9yLFxuICAgIHRoaXMucmFuZ2VTZWxlY3RvcixcbiAgICB0aGlzLnNjYWxlVHlwZVNlbGVjdG9yLFxuICAgIHRoaXMubGFiZWxGb3JtYXRTZWxlY3RvcixcbiAgICB0aGlzLmZpZWxkVHlwZVNlbGVjdG9yLFxuICAgIChkb21haW4sIHJhbmdlLCBzY2FsZVR5cGUsIGxhYmVsRm9ybWF0LCBmaWVsZFR5cGUpID0+IHtcbiAgICAgIGNvbnN0IGVtcHR5ID0ge1xuICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgbGFiZWxzOiBbXVxuICAgICAgfTtcbiAgICAgIGlmICghcmFuZ2UpIHtcbiAgICAgICAgcmV0dXJuIGVtcHR5O1xuICAgICAgfVxuICAgICAgaWYgKHJhbmdlLmNvbG9yTGVnZW5kcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRhdGE6IE9iamVjdC5rZXlzKHJhbmdlLmNvbG9yTGVnZW5kcyksXG4gICAgICAgICAgbGFiZWxzOiBPYmplY3QudmFsdWVzKHJhbmdlLmNvbG9yTGVnZW5kcylcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyYW5nZS5jb2xvck1hcCkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRhOiByYW5nZS5jb2xvck1hcC5tYXAoY20gPT4gY21bMV0pLFxuICAgICAgICAgIGxhYmVsczogcmFuZ2UuY29sb3JNYXAubWFwKGNtID0+IGNtWzBdKVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJhbmdlLmNvbG9ycykpIHtcbiAgICAgICAgaWYgKCFkb21haW4gfHwgIXNjYWxlVHlwZSkge1xuICAgICAgICAgIHJldHVybiBlbXB0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNjYWxlRnVuY3Rpb24gPSBTQ0FMRV9GVU5DW3NjYWxlVHlwZV07XG4gICAgICAgIC8vIGNvbG9yIHNjYWxlIGNhbiBvbmx5IGJlIHF1YW50aXplLCBxdWFudGlsZSBvciBvcmRpbmFsXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgZml4IGQzIHNjYWxlXG4gICAgICAgIGNvbnN0IHNjYWxlID0gc2NhbGVGdW5jdGlvbigpXG4gICAgICAgICAgLmRvbWFpbihkb21haW4pXG4gICAgICAgICAgLnJhbmdlKHJhbmdlLmNvbG9ycyk7XG5cbiAgICAgICAgaWYgKHNjYWxlVHlwZSA9PT0gU0NBTEVfVFlQRVMub3JkaW5hbCkge1xuICAgICAgICAgIHJldHVybiBnZXRPcmRpbmFsTGVnZW5kcyhzY2FsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmb3JtYXRMYWJlbCA9IGxhYmVsRm9ybWF0IHx8IGdldFF1YW50TGFiZWxGb3JtYXQoc2NhbGUuZG9tYWluKCksIGZpZWxkVHlwZSk7XG5cbiAgICAgICAgcmV0dXJuIGdldFF1YW50TGVnZW5kcyhzY2FsZSwgZm9ybWF0TGFiZWwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5O1xuICAgIH1cbiAgKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3dpZHRoLCBkaXNwbGF5TGFiZWwgPSB0cnVlfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBsZWdlbmRzID0gdGhpcy5sZWdlbmRzU2VsZWN0b3IodGhpcy5wcm9wcyk7XG4gICAgY29uc3QgaGVpZ2h0ID0gbGVnZW5kcy5kYXRhLmxlbmd0aCAqIChST1dfSCArIEdBUCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZExlZ2VuZD5cbiAgICAgICAgPHN2ZyB3aWR0aD17d2lkdGh9IGhlaWdodD17aGVpZ2h0fT5cbiAgICAgICAgICB7bGVnZW5kcy5kYXRhLm1hcCgoY29sb3IsIGlkeCkgPT4gKFxuICAgICAgICAgICAgPExlZ2VuZFJvd1xuICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgbGFiZWw9e2xlZ2VuZHMubGFiZWxzW2lkeF19XG4gICAgICAgICAgICAgIGRpc3BsYXlMYWJlbD17ZGlzcGxheUxhYmVsfVxuICAgICAgICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgICAgICAgIGlkeD17aWR4fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L1N0eWxlZExlZ2VuZD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBMZWdlbmRSb3cgPSAoe2xhYmVsID0gJycsIGRpc3BsYXlMYWJlbCwgY29sb3IsIGlkeH0pID0+IChcbiAgPGcgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKDAsICR7aWR4ICogKFJPV19IICsgR0FQKX0pYH0+XG4gICAgPHJlY3Qgd2lkdGg9e1JFQ1RfV30gaGVpZ2h0PXtST1dfSH0gc3R5bGU9e3tmaWxsOiBjb2xvcn19IC8+XG4gICAgPHRleHQgeD17UkVDVF9XICsgOH0geT17Uk9XX0ggLSAxfT5cbiAgICAgIHtkaXNwbGF5TGFiZWwgPyBsYWJlbC50b1N0cmluZygpIDogJyd9XG4gICAgPC90ZXh0PlxuICA8L2c+XG4pO1xuIl19