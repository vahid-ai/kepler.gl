"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _d3Selection = require("d3-selection");

var _d3Brush = require("d3-brush");

var _utils = require("@kepler.gl/utils");

var _templateObject;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyledG = _styledComponents["default"].g(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  .selection {\n    stroke: none;\n    fill: ", ";\n    fill-opacity: ", ";\n  }\n  .handle {\n    fill: ", ";\n    fill-opacity: 0.3;\n  }\n"])), function (props) {
  return props.isRanged ? props.theme.rangeBrushBgd : props.theme.BLUE2;
}, function (props) {
  return props.isRanged ? 0.3 : 1;
}, function (props) {
  return props.theme.BLUE2;
});

function moveRight(startSel, selection) {
  var _startSel = (0, _slicedToArray2["default"])(startSel, 1),
      startSel0 = _startSel[0];

  var _selection = (0, _slicedToArray2["default"])(selection, 1),
      sel0 = _selection[0];

  return Boolean(startSel0 === sel0);
} // style brush resize handle
// https://github.com/crossfilter/crossfilter/blob/gh-pages/index.html#L466


var getHandlePath = function getHandlePath(props) {
  return function brushResizePath(d) {
    var e = Number(d.type === 'e');
    var x = e ? 1 : -1;
    var h = 39;
    var w = 4.5;
    var y = (props.height - h) / 2;
    return "M".concat(0.5 * x, ",").concat(y, "c").concat(2.5 * x, ",0,").concat(w * x, ",2,").concat(w * x, ",").concat(w, "v").concat(h - w * 2, "c0,2.5,").concat(-2 * x, ",").concat(w, ",").concat(-w * x, ",").concat(w, "V").concat(y, "z");
  };
};

function RangeBrushFactory() {
  var RangeBrush = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(RangeBrush, _Component);

    var _super = _createSuper(RangeBrush);

    function RangeBrush() {
      var _this;

      (0, _classCallCheck2["default"])(this, RangeBrush);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "rootContainer", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "brushing", false);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "moving", false);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "root", _this.rootContainer.current ? (0, _d3Selection.select)(_this.rootContainer.current) : undefined);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "brush", void 0);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_startSel", void 0);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_lastSel", void 0);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handle", void 0);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_brushed", function (evt) {
        var _this2;

        // Ignore brush events which don't have an underlying sourceEvent
        if (!evt.sourceEvent) return;

        var _evt$selection = (0, _slicedToArray2["default"])(evt.selection, 2),
            sel0 = _evt$selection[0],
            sel1 = _evt$selection[1];

        var right = moveRight(_this._startSel, evt.selection);

        var _this$props = _this.props,
            _this$props$range = (0, _slicedToArray2["default"])(_this$props.range, 2),
            min = _this$props$range[0],
            max = _this$props$range[1],
            _this$props$step = _this$props.step,
            step = _this$props$step === void 0 ? 0 : _this$props$step,
            width = _this$props.width,
            marks = _this$props.marks,
            isRanged = _this$props.isRanged;

        var invert = function invert(x) {
          return x * (max - min) / width + min;
        };

        var d0 = invert(sel0);
        var d1 = invert(sel1);
        d0 = (0, _utils.normalizeSliderValue)(d0, min, step, marks);
        d1 = (0, _utils.normalizeSliderValue)(d1, min, step, marks);
        if (isRanged) _this._move(d0, d1);else (_this2 = _this)._move.apply(_this2, (0, _toConsumableArray2["default"])(right ? [d1, d1] : [d0, d0]));
        if (isRanged) _this._onBrush(d0, d1);else _this._onBrush(right ? d1 : d0);
      });
      return _this;
    }

    (0, _createClass2["default"])(RangeBrush, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this3 = this,
            _this$root,
            _this$root2;

        // We want the React app to respond to brush state and vice-versa
        // but d3-brush fires the same events for both user-initiated brushing
        // and programmatic brushing (brush.move). We need these flags to
        // distinguish between the uses.
        //
        // We don't use state because that would trigger another `componentDidUpdate`
        var _this$props2 = this.props,
            theme = _this$props2.theme,
            isRanged = _this$props2.isRanged,
            onMouseoverHandle = _this$props2.onMouseoverHandle,
            onMouseoutHandle = _this$props2.onMouseoutHandle;
        this.root = this.rootContainer.current ? (0, _d3Selection.select)(this.rootContainer.current) : undefined;
        this.brush = (0, _d3Brush.brushX)().handleSize(3).on('start', function (event) {
          if (typeof _this3.props.onBrushStart === 'function') _this3.props.onBrushStart();
          _this3._startSel = event.selection;
        }).on('brush', function (event) {
          if (_this3.moving) {
            return;
          }

          if (event.selection) {
            _this3._lastSel = event.selection;
            _this3.brushing = true;

            _this3._brushed(event);
          }
        }).on('end', function (event) {
          if (!event.selection) {
            if (_this3.brushing) {
              // handle null selection
              _this3._click(_this3._lastSel);
            } else if (_this3._startSel) {
              // handle click
              _this3._click(_this3._startSel);
            }
          }

          if (typeof _this3.props.onBrushEnd === 'function') _this3.props.onBrushEnd();
          _this3.brushing = false;
          _this3.moving = false;
        });
        (_this$root = this.root) === null || _this$root === void 0 ? void 0 : _this$root.call(this.brush);
        var brushResizePath = getHandlePath(this.props);
        this.handle = (_this$root2 = this.root) === null || _this$root2 === void 0 ? void 0 : _this$root2.selectAll('.handle--custom').data([{
          type: 'w'
        }, {
          type: 'e'
        }]).enter().append('path').attr('class', 'handle--custom').attr('display', isRanged ? null : 'none').attr('fill', theme ? theme.sliderHandleColor : '#D3D8E0').attr('cursor', 'ew-resize').attr('d', brushResizePath).on('mouseover', function () {
          if (onMouseoverHandle) onMouseoverHandle();
        }).on('mouseout', function () {
          if (onMouseoutHandle) onMouseoutHandle();
        });

        var _this$props$value = (0, _slicedToArray2["default"])(this.props.value, 2),
            val0 = _this$props$value[0],
            val1 = _this$props$value[1];

        this.moving = true;

        this._move(val0, val1);
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        var _this$props3 = this.props,
            _this$props3$value = (0, _slicedToArray2["default"])(_this$props3.value, 2),
            val0 = _this$props3$value[0],
            val1 = _this$props3$value[1],
            width = _this$props3.width;

        var _prevProps$value = (0, _slicedToArray2["default"])(prevProps.value, 2),
            prevVal0 = _prevProps$value[0],
            prevVal1 = _prevProps$value[1];

        if (prevProps.width !== width) {
          var _this$root3;

          // width change should not trigger this._brushed
          this.moving = true;
          if (this.brush) (_this$root3 = this.root) === null || _this$root3 === void 0 ? void 0 : _this$root3.call(this.brush);

          this._move(val0, val1);
        }

        if (!this.brushing && !this.moving) {
          if (prevVal0 !== val0 || prevVal1 !== val1) {
            this.moving = true;

            this._move(val0, val1);
          }
        }

        if (!this.props.isRanged && this.handle) {
          this.handle.attr('display', 'none');
        }
      }
    }, {
      key: "_click",
      value: function _click(selection) {
        // fake brush
        this.brushing = true;

        this._brushed({
          sourceEvent: {},
          selection: selection
        });
      }
    }, {
      key: "_move",
      value: function _move() {
        var val0 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var val1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var _this$props4 = this.props,
            _this$props4$range = (0, _slicedToArray2["default"])(_this$props4.range, 2),
            min = _this$props4$range[0],
            max = _this$props4$range[1],
            width = _this$props4.width,
            isRanged = _this$props4.isRanged;

        if (width && max - min && this.brush && this.handle) {
          var scale = function scale(x) {
            return (x - min) * width / (max - min);
          };

          if (!isRanged) {
            // only draw a 1 pixel line
            if (this.root) this.brush.move(this.root, [scale(val0), scale(val0) + 1]);
          } else {
            if (this.root) this.brush.move(this.root, [scale(val0), scale(val1)]);
            this.handle.attr('display', null).attr('transform', function (d, i) {
              return "translate(".concat([i === 0 ? scale(val0) : scale(val1), 0], ")");
            });
          }
        }
      }
    }, {
      key: "_onBrush",
      value: function _onBrush() {
        var val0 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var val1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var _this$props5 = this.props,
            isRanged = _this$props5.isRanged,
            _this$props5$value = (0, _slicedToArray2["default"])(_this$props5.value, 2),
            currentVal0 = _this$props5$value[0],
            currentVal1 = _this$props5$value[1];

        if (currentVal0 === val0 && currentVal1 === val1) {
          return;
        }

        if (isRanged) {
          this.props.onBrush(val0, val1);
        } else {
          this.props.onBrush(val0, val0);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var isRanged = this.props.isRanged;
        return /*#__PURE__*/_react["default"].createElement(StyledG, {
          className: "kg-range-slider__brush",
          isRanged: isRanged,
          ref: this.rootContainer
        });
      }
    }]);
    return RangeBrush;
  }(_react.Component);

  (0, _defineProperty2["default"])(RangeBrush, "defaultProps", {
    isRanged: true
  });
  return (0, _styledComponents.withTheme)(RangeBrush);
}

var _default = RangeBrushFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vcmFuZ2UtYnJ1c2gudHN4Il0sIm5hbWVzIjpbIlN0eWxlZEciLCJzdHlsZWQiLCJnIiwicHJvcHMiLCJpc1JhbmdlZCIsInRoZW1lIiwicmFuZ2VCcnVzaEJnZCIsIkJMVUUyIiwibW92ZVJpZ2h0Iiwic3RhcnRTZWwiLCJzZWxlY3Rpb24iLCJzdGFydFNlbDAiLCJzZWwwIiwiQm9vbGVhbiIsImdldEhhbmRsZVBhdGgiLCJicnVzaFJlc2l6ZVBhdGgiLCJkIiwiZSIsIk51bWJlciIsInR5cGUiLCJ4IiwiaCIsInciLCJ5IiwiaGVpZ2h0IiwiUmFuZ2VCcnVzaEZhY3RvcnkiLCJSYW5nZUJydXNoIiwicm9vdENvbnRhaW5lciIsImN1cnJlbnQiLCJ1bmRlZmluZWQiLCJldnQiLCJzb3VyY2VFdmVudCIsInNlbDEiLCJyaWdodCIsIl9zdGFydFNlbCIsInJhbmdlIiwibWluIiwibWF4Iiwic3RlcCIsIndpZHRoIiwibWFya3MiLCJpbnZlcnQiLCJkMCIsImQxIiwiX21vdmUiLCJfb25CcnVzaCIsIm9uTW91c2VvdmVySGFuZGxlIiwib25Nb3VzZW91dEhhbmRsZSIsInJvb3QiLCJicnVzaCIsImhhbmRsZVNpemUiLCJvbiIsImV2ZW50Iiwib25CcnVzaFN0YXJ0IiwibW92aW5nIiwiX2xhc3RTZWwiLCJicnVzaGluZyIsIl9icnVzaGVkIiwiX2NsaWNrIiwib25CcnVzaEVuZCIsImNhbGwiLCJoYW5kbGUiLCJzZWxlY3RBbGwiLCJkYXRhIiwiZW50ZXIiLCJhcHBlbmQiLCJhdHRyIiwic2xpZGVySGFuZGxlQ29sb3IiLCJ2YWx1ZSIsInZhbDAiLCJ2YWwxIiwicHJldlByb3BzIiwicHJldlZhbDAiLCJwcmV2VmFsMSIsInNjYWxlIiwibW92ZSIsImkiLCJjdXJyZW50VmFsMCIsImN1cnJlbnRWYWwxIiwib25CcnVzaCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFNQSxJQUFNQSxPQUFPLEdBQUdDLDZCQUFPQyxDQUFWLHNPQUdELFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLFFBQU4sR0FBaUJELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxhQUE3QixHQUE2Q0gsS0FBSyxDQUFDRSxLQUFOLENBQVlFLEtBQTlEO0FBQUEsQ0FISixFQUlPLFVBQUFKLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLFFBQU4sR0FBaUIsR0FBakIsR0FBdUIsQ0FBNUI7QUFBQSxDQUpaLEVBT0QsVUFBQUQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsS0FBTixDQUFZRSxLQUFoQjtBQUFBLENBUEosQ0FBYjs7QUFZQSxTQUFTQyxTQUFULENBQW1CQyxRQUFuQixFQUE2QkMsU0FBN0IsRUFBd0M7QUFBQSxrREFDbEJELFFBRGtCO0FBQUEsTUFDL0JFLFNBRCtCOztBQUFBLG1EQUV2QkQsU0FGdUI7QUFBQSxNQUUvQkUsSUFGK0I7O0FBSXRDLFNBQU9DLE9BQU8sQ0FBQ0YsU0FBUyxLQUFLQyxJQUFmLENBQWQ7QUFDRCxDLENBQ0Q7QUFDQTs7O0FBQ0EsSUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDWCxLQUFELEVBQTRCO0FBQ2hELFNBQU8sU0FBU1ksZUFBVCxDQUF5QkMsQ0FBekIsRUFBNEI7QUFDakMsUUFBTUMsQ0FBQyxHQUFHQyxNQUFNLENBQUNGLENBQUMsQ0FBQ0csSUFBRixLQUFXLEdBQVosQ0FBaEI7QUFDQSxRQUFNQyxDQUFDLEdBQUdILENBQUMsR0FBRyxDQUFILEdBQU8sQ0FBQyxDQUFuQjtBQUNBLFFBQU1JLENBQUMsR0FBRyxFQUFWO0FBQ0EsUUFBTUMsQ0FBQyxHQUFHLEdBQVY7QUFDQSxRQUFNQyxDQUFDLEdBQUcsQ0FBQ3BCLEtBQUssQ0FBQ3FCLE1BQU4sR0FBZUgsQ0FBaEIsSUFBcUIsQ0FBL0I7QUFDQSxzQkFBVyxNQUFNRCxDQUFqQixjQUFzQkcsQ0FBdEIsY0FBMkIsTUFBTUgsQ0FBakMsZ0JBQXdDRSxDQUFDLEdBQUdGLENBQTVDLGdCQUFtREUsQ0FBQyxHQUFHRixDQUF2RCxjQUE0REUsQ0FBNUQsY0FBaUVELENBQUMsR0FBR0MsQ0FBQyxHQUFHLENBQXpFLG9CQUFvRixDQUFDLENBQUQsR0FDbEZGLENBREYsY0FDT0UsQ0FEUCxjQUNZLENBQUNBLENBQUQsR0FBS0YsQ0FEakIsY0FDc0JFLENBRHRCLGNBQzJCQyxDQUQzQjtBQUVELEdBUkQ7QUFTRCxDQVZEOztBQThCQSxTQUFTRSxpQkFBVCxHQUFtRTtBQUFBLE1BQzNEQyxVQUQyRDtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUhBTS9DLHVCQU4rQztBQUFBLG1HQVEzQyxLQVIyQztBQUFBLGlHQVM3QyxLQVQ2QztBQUFBLCtGQVd4RCxNQUFLQyxhQUFMLENBQW1CQyxPQUFuQixHQUE2Qix5QkFBTyxNQUFLRCxhQUFMLENBQW1CQyxPQUExQixDQUE3QixHQUFrRUMsU0FYVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUdBNklwRCxVQUFDQyxHQUFELEVBQWtEO0FBQUE7O0FBQzNEO0FBQ0EsWUFBSSxDQUFDQSxHQUFHLENBQUNDLFdBQVQsRUFBc0I7O0FBRnFDLDZEQUd0Q0QsR0FBRyxDQUFDcEIsU0FIa0M7QUFBQSxZQUdwREUsSUFIb0Q7QUFBQSxZQUc5Q29CLElBSDhDOztBQUkzRCxZQUFNQyxLQUFLLEdBQUd6QixTQUFTLENBQUMsTUFBSzBCLFNBQU4sRUFBaUJKLEdBQUcsQ0FBQ3BCLFNBQXJCLENBQXZCOztBQUoyRCwwQkFZdkQsTUFBS1AsS0Faa0Q7QUFBQSw0RUFPekRnQyxLQVB5RDtBQUFBLFlBT2pEQyxHQVBpRDtBQUFBLFlBTzVDQyxHQVA0QztBQUFBLDJDQVF6REMsSUFSeUQ7QUFBQSxZQVF6REEsSUFSeUQsaUNBUWxELENBUmtEO0FBQUEsWUFTekRDLEtBVHlELGVBU3pEQSxLQVR5RDtBQUFBLFlBVXpEQyxLQVZ5RCxlQVV6REEsS0FWeUQ7QUFBQSxZQVd6RHBDLFFBWHlELGVBV3pEQSxRQVh5RDs7QUFhM0QsWUFBTXFDLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNyQixDQUFEO0FBQUEsaUJBQWdCQSxDQUFDLElBQUlpQixHQUFHLEdBQUdELEdBQVYsQ0FBRixHQUFvQkcsS0FBcEIsR0FBNEJILEdBQTNDO0FBQUEsU0FBZjs7QUFDQSxZQUFJTSxFQUFFLEdBQUdELE1BQU0sQ0FBQzdCLElBQUQsQ0FBZjtBQUNBLFlBQUkrQixFQUFFLEdBQUdGLE1BQU0sQ0FBQ1QsSUFBRCxDQUFmO0FBRUFVLFFBQUFBLEVBQUUsR0FBRyxpQ0FBcUJBLEVBQXJCLEVBQXlCTixHQUF6QixFQUE4QkUsSUFBOUIsRUFBb0NFLEtBQXBDLENBQUw7QUFDQUcsUUFBQUEsRUFBRSxHQUFHLGlDQUFxQkEsRUFBckIsRUFBeUJQLEdBQXpCLEVBQThCRSxJQUE5QixFQUFvQ0UsS0FBcEMsQ0FBTDtBQUVBLFlBQUlwQyxRQUFKLEVBQWMsTUFBS3dDLEtBQUwsQ0FBV0YsRUFBWCxFQUFlQyxFQUFmLEVBQWQsS0FDSyxpQkFBS0MsS0FBTCxtREFBZVgsS0FBSyxHQUFHLENBQUNVLEVBQUQsRUFBS0EsRUFBTCxDQUFILEdBQWMsQ0FBQ0QsRUFBRCxFQUFLQSxFQUFMLENBQWxDO0FBRUwsWUFBSXRDLFFBQUosRUFBYyxNQUFLeUMsUUFBTCxDQUFjSCxFQUFkLEVBQWtCQyxFQUFsQixFQUFkLEtBQ0ssTUFBS0UsUUFBTCxDQUFjWixLQUFLLEdBQUdVLEVBQUgsR0FBUUQsRUFBM0I7QUFDTixPQXRLOEQ7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxhQWtCL0QsNkJBQW9CO0FBQUE7QUFBQTtBQUFBOztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOa0IsMkJBTzZDLEtBQUt2QyxLQVBsRDtBQUFBLFlBT1hFLEtBUFcsZ0JBT1hBLEtBUFc7QUFBQSxZQU9KRCxRQVBJLGdCQU9KQSxRQVBJO0FBQUEsWUFPTTBDLGlCQVBOLGdCQU9NQSxpQkFQTjtBQUFBLFlBT3lCQyxnQkFQekIsZ0JBT3lCQSxnQkFQekI7QUFTbEIsYUFBS0MsSUFBTCxHQUFZLEtBQUtyQixhQUFMLENBQW1CQyxPQUFuQixHQUE2Qix5QkFBTyxLQUFLRCxhQUFMLENBQW1CQyxPQUExQixDQUE3QixHQUFrRUMsU0FBOUU7QUFDQSxhQUFLb0IsS0FBTCxHQUFhLHVCQUNWQyxVQURVLENBQ0MsQ0FERCxFQUVWQyxFQUZVLENBRVAsT0FGTyxFQUVFLFVBQUFDLEtBQUssRUFBSTtBQUNwQixjQUFJLE9BQU8sTUFBSSxDQUFDakQsS0FBTCxDQUFXa0QsWUFBbEIsS0FBbUMsVUFBdkMsRUFBbUQsTUFBSSxDQUFDbEQsS0FBTCxDQUFXa0QsWUFBWDtBQUNuRCxVQUFBLE1BQUksQ0FBQ25CLFNBQUwsR0FBaUJrQixLQUFLLENBQUMxQyxTQUF2QjtBQUNELFNBTFUsRUFNVnlDLEVBTlUsQ0FNUCxPQU5PLEVBTUUsVUFBQUMsS0FBSyxFQUFJO0FBQ3BCLGNBQUksTUFBSSxDQUFDRSxNQUFULEVBQWlCO0FBQ2Y7QUFDRDs7QUFDRCxjQUFJRixLQUFLLENBQUMxQyxTQUFWLEVBQXFCO0FBQ25CLFlBQUEsTUFBSSxDQUFDNkMsUUFBTCxHQUFnQkgsS0FBSyxDQUFDMUMsU0FBdEI7QUFDQSxZQUFBLE1BQUksQ0FBQzhDLFFBQUwsR0FBZ0IsSUFBaEI7O0FBQ0EsWUFBQSxNQUFJLENBQUNDLFFBQUwsQ0FBY0wsS0FBZDtBQUNEO0FBQ0YsU0FmVSxFQWdCVkQsRUFoQlUsQ0FnQlAsS0FoQk8sRUFnQkEsVUFBQUMsS0FBSyxFQUFJO0FBQ2xCLGNBQUksQ0FBQ0EsS0FBSyxDQUFDMUMsU0FBWCxFQUFzQjtBQUNwQixnQkFBSSxNQUFJLENBQUM4QyxRQUFULEVBQW1CO0FBQ2pCO0FBQ0EsY0FBQSxNQUFJLENBQUNFLE1BQUwsQ0FBWSxNQUFJLENBQUNILFFBQWpCO0FBQ0QsYUFIRCxNQUdPLElBQUksTUFBSSxDQUFDckIsU0FBVCxFQUFvQjtBQUN6QjtBQUNBLGNBQUEsTUFBSSxDQUFDd0IsTUFBTCxDQUFZLE1BQUksQ0FBQ3hCLFNBQWpCO0FBQ0Q7QUFDRjs7QUFFRCxjQUFJLE9BQU8sTUFBSSxDQUFDL0IsS0FBTCxDQUFXd0QsVUFBbEIsS0FBaUMsVUFBckMsRUFBaUQsTUFBSSxDQUFDeEQsS0FBTCxDQUFXd0QsVUFBWDtBQUVqRCxVQUFBLE1BQUksQ0FBQ0gsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFVBQUEsTUFBSSxDQUFDRixNQUFMLEdBQWMsS0FBZDtBQUNELFNBL0JVLENBQWI7QUFpQ0EsMkJBQUtOLElBQUwsMERBQVdZLElBQVgsQ0FBZ0IsS0FBS1gsS0FBckI7QUFDQSxZQUFNbEMsZUFBZSxHQUFHRCxhQUFhLENBQUMsS0FBS1gsS0FBTixDQUFyQztBQUNBLGFBQUswRCxNQUFMLGtCQUFjLEtBQUtiLElBQW5CLGdEQUFjLFlBQ1ZjLFNBRFUsQ0FDQSxpQkFEQSxFQUVYQyxJQUZXLENBRU4sQ0FBQztBQUFDNUMsVUFBQUEsSUFBSSxFQUFFO0FBQVAsU0FBRCxFQUFjO0FBQUNBLFVBQUFBLElBQUksRUFBRTtBQUFQLFNBQWQsQ0FGTSxFQUdYNkMsS0FIVyxHQUlYQyxNQUpXLENBSUosTUFKSSxFQUtYQyxJQUxXLENBS04sT0FMTSxFQUtHLGdCQUxILEVBTVhBLElBTlcsQ0FNTixTQU5NLEVBTUs5RCxRQUFRLEdBQUcsSUFBSCxHQUFVLE1BTnZCLEVBT1g4RCxJQVBXLENBT04sTUFQTSxFQU9FN0QsS0FBSyxHQUFHQSxLQUFLLENBQUM4RCxpQkFBVCxHQUE2QixTQVBwQyxFQVFYRCxJQVJXLENBUU4sUUFSTSxFQVFJLFdBUkosRUFTWEEsSUFUVyxDQVNOLEdBVE0sRUFTRG5ELGVBVEMsRUFVWG9DLEVBVlcsQ0FVUixXQVZRLEVBVUssWUFBTTtBQUNyQixjQUFJTCxpQkFBSixFQUF1QkEsaUJBQWlCO0FBQ3pDLFNBWlcsRUFhWEssRUFiVyxDQWFSLFVBYlEsRUFhSSxZQUFNO0FBQ3BCLGNBQUlKLGdCQUFKLEVBQXNCQSxnQkFBZ0I7QUFDdkMsU0FmVyxDQUFkOztBQTdDa0IsZ0VBZ0VkLEtBQUs1QyxLQWhFUyxDQStEaEJpRSxLQS9EZ0I7QUFBQSxZQStEUkMsSUEvRFE7QUFBQSxZQStERkMsSUEvREU7O0FBaUVsQixhQUFLaEIsTUFBTCxHQUFjLElBQWQ7O0FBQ0EsYUFBS1YsS0FBTCxDQUFXeUIsSUFBWCxFQUFpQkMsSUFBakI7QUFDRDtBQXJGOEQ7QUFBQTtBQUFBLGFBdUYvRCw0QkFBbUJDLFNBQW5CLEVBQThCO0FBQUEsMkJBSXhCLEtBQUtwRSxLQUptQjtBQUFBLDhFQUUxQmlFLEtBRjBCO0FBQUEsWUFFbEJDLElBRmtCO0FBQUEsWUFFWkMsSUFGWTtBQUFBLFlBRzFCL0IsS0FIMEIsZ0JBRzFCQSxLQUgwQjs7QUFBQSwrREFLQ2dDLFNBQVMsQ0FBQ0gsS0FMWDtBQUFBLFlBS3JCSSxRQUxxQjtBQUFBLFlBS1hDLFFBTFc7O0FBTzVCLFlBQUlGLFNBQVMsQ0FBQ2hDLEtBQVYsS0FBb0JBLEtBQXhCLEVBQStCO0FBQUE7O0FBQzdCO0FBQ0EsZUFBS2UsTUFBTCxHQUFjLElBQWQ7QUFDQSxjQUFJLEtBQUtMLEtBQVQsRUFBZ0Isb0JBQUtELElBQUwsNERBQVdZLElBQVgsQ0FBZ0IsS0FBS1gsS0FBckI7O0FBQ2hCLGVBQUtMLEtBQUwsQ0FBV3lCLElBQVgsRUFBaUJDLElBQWpCO0FBQ0Q7O0FBRUQsWUFBSSxDQUFDLEtBQUtkLFFBQU4sSUFBa0IsQ0FBQyxLQUFLRixNQUE1QixFQUFvQztBQUNsQyxjQUFJa0IsUUFBUSxLQUFLSCxJQUFiLElBQXFCSSxRQUFRLEtBQUtILElBQXRDLEVBQTRDO0FBQzFDLGlCQUFLaEIsTUFBTCxHQUFjLElBQWQ7O0FBQ0EsaUJBQUtWLEtBQUwsQ0FBV3lCLElBQVgsRUFBaUJDLElBQWpCO0FBQ0Q7QUFDRjs7QUFFRCxZQUFJLENBQUMsS0FBS25FLEtBQUwsQ0FBV0MsUUFBWixJQUF3QixLQUFLeUQsTUFBakMsRUFBeUM7QUFDdkMsZUFBS0EsTUFBTCxDQUFZSyxJQUFaLENBQWlCLFNBQWpCLEVBQTRCLE1BQTVCO0FBQ0Q7QUFDRjtBQS9HOEQ7QUFBQTtBQUFBLGFBaUgvRCxnQkFBT3hELFNBQVAsRUFBa0I7QUFDaEI7QUFDQSxhQUFLOEMsUUFBTCxHQUFnQixJQUFoQjs7QUFDQSxhQUFLQyxRQUFMLENBQWM7QUFBQzFCLFVBQUFBLFdBQVcsRUFBRSxFQUFkO0FBQWtCckIsVUFBQUEsU0FBUyxFQUFUQTtBQUFsQixTQUFkO0FBQ0Q7QUFySDhEO0FBQUE7QUFBQSxhQXVIL0QsaUJBQTBDO0FBQUEsWUFBcEMyRCxJQUFvQyx1RUFBckIsQ0FBcUI7QUFBQSxZQUFsQkMsSUFBa0IsdUVBQUgsQ0FBRzs7QUFBQSwyQkFLcEMsS0FBS25FLEtBTCtCO0FBQUEsOEVBRXRDZ0MsS0FGc0M7QUFBQSxZQUU5QkMsR0FGOEI7QUFBQSxZQUV6QkMsR0FGeUI7QUFBQSxZQUd0Q0UsS0FIc0MsZ0JBR3RDQSxLQUhzQztBQUFBLFlBSXRDbkMsUUFKc0MsZ0JBSXRDQSxRQUpzQzs7QUFPeEMsWUFBSW1DLEtBQUssSUFBSUYsR0FBRyxHQUFHRCxHQUFmLElBQXNCLEtBQUthLEtBQTNCLElBQW9DLEtBQUtZLE1BQTdDLEVBQXFEO0FBQ25ELGNBQU1hLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUN0RCxDQUFEO0FBQUEsbUJBQWdCLENBQUNBLENBQUMsR0FBR2dCLEdBQUwsSUFBWUcsS0FBYixJQUF1QkYsR0FBRyxHQUFHRCxHQUE3QixDQUFmO0FBQUEsV0FBZDs7QUFDQSxjQUFJLENBQUNoQyxRQUFMLEVBQWU7QUFDYjtBQUNBLGdCQUFJLEtBQUs0QyxJQUFULEVBQWUsS0FBS0MsS0FBTCxDQUFXMEIsSUFBWCxDQUFnQixLQUFLM0IsSUFBckIsRUFBMkIsQ0FBQzBCLEtBQUssQ0FBQ0wsSUFBRCxDQUFOLEVBQWNLLEtBQUssQ0FBQ0wsSUFBRCxDQUFMLEdBQWMsQ0FBNUIsQ0FBM0I7QUFDaEIsV0FIRCxNQUdPO0FBQ0wsZ0JBQUksS0FBS3JCLElBQVQsRUFBZSxLQUFLQyxLQUFMLENBQVcwQixJQUFYLENBQWdCLEtBQUszQixJQUFyQixFQUEyQixDQUFDMEIsS0FBSyxDQUFDTCxJQUFELENBQU4sRUFBY0ssS0FBSyxDQUFDSixJQUFELENBQW5CLENBQTNCO0FBRWYsaUJBQUtULE1BQUwsQ0FDR0ssSUFESCxDQUNRLFNBRFIsRUFDbUIsSUFEbkIsRUFFR0EsSUFGSCxDQUVRLFdBRlIsRUFFcUIsVUFBQ2xELENBQUQsRUFBSTRELENBQUo7QUFBQSx5Q0FBdUIsQ0FBQ0EsQ0FBQyxLQUFLLENBQU4sR0FBVUYsS0FBSyxDQUFDTCxJQUFELENBQWYsR0FBd0JLLEtBQUssQ0FBQ0osSUFBRCxDQUE5QixFQUFzQyxDQUF0QyxDQUF2QjtBQUFBLGFBRnJCO0FBR0Q7QUFDRjtBQUNGO0FBM0k4RDtBQUFBO0FBQUEsYUF3Sy9ELG9CQUE2QztBQUFBLFlBQXBDRCxJQUFvQyx1RUFBckIsQ0FBcUI7QUFBQSxZQUFsQkMsSUFBa0IsdUVBQUgsQ0FBRzs7QUFBQSwyQkFJdkMsS0FBS25FLEtBSmtDO0FBQUEsWUFFekNDLFFBRnlDLGdCQUV6Q0EsUUFGeUM7QUFBQSw4RUFHekNnRSxLQUh5QztBQUFBLFlBR2pDUyxXQUhpQztBQUFBLFlBR3BCQyxXQUhvQjs7QUFNM0MsWUFBSUQsV0FBVyxLQUFLUixJQUFoQixJQUF3QlMsV0FBVyxLQUFLUixJQUE1QyxFQUFrRDtBQUNoRDtBQUNEOztBQUVELFlBQUlsRSxRQUFKLEVBQWM7QUFDWixlQUFLRCxLQUFMLENBQVc0RSxPQUFYLENBQW1CVixJQUFuQixFQUF5QkMsSUFBekI7QUFDRCxTQUZELE1BRU87QUFDTCxlQUFLbkUsS0FBTCxDQUFXNEUsT0FBWCxDQUFtQlYsSUFBbkIsRUFBeUJBLElBQXpCO0FBQ0Q7QUFDRjtBQXZMOEQ7QUFBQTtBQUFBLGFBeUwvRCxrQkFBUztBQUFBLFlBQ0FqRSxRQURBLEdBQ1ksS0FBS0QsS0FEakIsQ0FDQUMsUUFEQTtBQUVQLDRCQUNFLGdDQUFDLE9BQUQ7QUFBUyxVQUFBLFNBQVMsRUFBQyx3QkFBbkI7QUFBNEMsVUFBQSxRQUFRLEVBQUVBLFFBQXREO0FBQWdFLFVBQUEsR0FBRyxFQUFFLEtBQUt1QjtBQUExRSxVQURGO0FBR0Q7QUE5TDhEO0FBQUE7QUFBQSxJQUN4Q3FELGdCQUR3Qzs7QUFBQSxtQ0FDM0R0RCxVQUQyRCxrQkFFekM7QUFDcEJ0QixJQUFBQSxRQUFRLEVBQUU7QUFEVSxHQUZ5QztBQWdNakUsU0FBTyxpQ0FBVXNCLFVBQVYsQ0FBUDtBQUNEOztlQUVjRCxpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgY3JlYXRlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7d2l0aFRoZW1lfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge3NlbGVjdCwgU2VsZWN0aW9ufSBmcm9tICdkMy1zZWxlY3Rpb24nO1xuaW1wb3J0IHtCcnVzaEJlaGF2aW9yLCBicnVzaFh9IGZyb20gJ2QzLWJydXNoJztcbmltcG9ydCB7bm9ybWFsaXplU2xpZGVyVmFsdWV9IGZyb20gJ0BrZXBsZXIuZ2wvdXRpbHMnO1xuXG5pbnRlcmZhY2UgU3R5bGVkR1Byb3BzIHtcbiAgaXNSYW5nZWQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBTdHlsZWRHID0gc3R5bGVkLmc8U3R5bGVkR1Byb3BzPmBcbiAgLnNlbGVjdGlvbiB7XG4gICAgc3Ryb2tlOiBub25lO1xuICAgIGZpbGw6ICR7cHJvcHMgPT4gKHByb3BzLmlzUmFuZ2VkID8gcHJvcHMudGhlbWUucmFuZ2VCcnVzaEJnZCA6IHByb3BzLnRoZW1lLkJMVUUyKX07XG4gICAgZmlsbC1vcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5pc1JhbmdlZCA/IDAuMyA6IDEpfTtcbiAgfVxuICAuaGFuZGxlIHtcbiAgICBmaWxsOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLkJMVUUyfTtcbiAgICBmaWxsLW9wYWNpdHk6IDAuMztcbiAgfVxuYDtcblxuZnVuY3Rpb24gbW92ZVJpZ2h0KHN0YXJ0U2VsLCBzZWxlY3Rpb24pIHtcbiAgY29uc3QgW3N0YXJ0U2VsMF0gPSBzdGFydFNlbDtcbiAgY29uc3QgW3NlbDBdID0gc2VsZWN0aW9uO1xuXG4gIHJldHVybiBCb29sZWFuKHN0YXJ0U2VsMCA9PT0gc2VsMCk7XG59XG4vLyBzdHlsZSBicnVzaCByZXNpemUgaGFuZGxlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vY3Jvc3NmaWx0ZXIvY3Jvc3NmaWx0ZXIvYmxvYi9naC1wYWdlcy9pbmRleC5odG1sI0w0NjZcbmNvbnN0IGdldEhhbmRsZVBhdGggPSAocHJvcHM6IFJhbmdlQnJ1c2hQcm9wcykgPT4ge1xuICByZXR1cm4gZnVuY3Rpb24gYnJ1c2hSZXNpemVQYXRoKGQpIHtcbiAgICBjb25zdCBlID0gTnVtYmVyKGQudHlwZSA9PT0gJ2UnKTtcbiAgICBjb25zdCB4ID0gZSA/IDEgOiAtMTtcbiAgICBjb25zdCBoID0gMzk7XG4gICAgY29uc3QgdyA9IDQuNTtcbiAgICBjb25zdCB5ID0gKHByb3BzLmhlaWdodCAtIGgpIC8gMjtcbiAgICByZXR1cm4gYE0kezAuNSAqIHh9LCR7eX1jJHsyLjUgKiB4fSwwLCR7dyAqIHh9LDIsJHt3ICogeH0sJHt3fXYke2ggLSB3ICogMn1jMCwyLjUsJHstMiAqXG4gICAgICB4fSwke3d9LCR7LXcgKiB4fSwke3d9ViR7eX16YDtcbiAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIE9uQnJ1c2ggPSAodmFsMDogbnVtYmVyLCB2YWwxOiBudW1iZXIpID0+IHZvaWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmFuZ2VCcnVzaFByb3BzIHtcbiAgaXNSYW5nZWQ/OiBib29sZWFuO1xuICB0aGVtZT86IGFueTtcbiAgcmFuZ2U6IG51bWJlcltdO1xuICB2YWx1ZTogbnVtYmVyW107XG4gIG9uQnJ1c2hTdGFydDogKCkgPT4gdm9pZDtcbiAgb25CcnVzaEVuZDogKCkgPT4gdm9pZDtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIG9uQnJ1c2g6IE9uQnJ1c2g7XG4gIHN0ZXA/OiBudW1iZXI7XG4gIG1hcmtzPzogbnVtYmVyW107XG4gIG9uTW91c2VvdmVySGFuZGxlOiAoKSA9PiB2b2lkO1xuICBvbk1vdXNlb3V0SGFuZGxlOiAoKSA9PiB2b2lkO1xufVxuXG5mdW5jdGlvbiBSYW5nZUJydXNoRmFjdG9yeSgpOiBSZWFjdC5Db21wb25lbnRUeXBlPFJhbmdlQnJ1c2hQcm9wcz4ge1xuICBjbGFzcyBSYW5nZUJydXNoIGV4dGVuZHMgQ29tcG9uZW50PFJhbmdlQnJ1c2hQcm9wcz4ge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICBpc1JhbmdlZDogdHJ1ZVxuICAgIH07XG5cbiAgICByb290Q29udGFpbmVyID0gY3JlYXRlUmVmPFNWR0dFbGVtZW50PigpO1xuXG4gICAgYnJ1c2hpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBtb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHJvb3QgPSB0aGlzLnJvb3RDb250YWluZXIuY3VycmVudCA/IHNlbGVjdCh0aGlzLnJvb3RDb250YWluZXIuY3VycmVudCkgOiB1bmRlZmluZWQ7XG4gICAgYnJ1c2g6IEJydXNoQmVoYXZpb3I8YW55PiB8IHVuZGVmaW5lZDtcbiAgICBfc3RhcnRTZWw6IG51bWJlcltdIHwgdW5kZWZpbmVkO1xuICAgIF9sYXN0U2VsOiBudW1iZXJbXSB8IHVuZGVmaW5lZDtcblxuICAgIGhhbmRsZTogU2VsZWN0aW9uPFNWR1BhdGhFbGVtZW50LCB7dHlwZTogc3RyaW5nfSwgU1ZHR0VsZW1lbnQgfCBudWxsLCB1bmtub3duPiB8IHVuZGVmaW5lZDtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgLy8gV2Ugd2FudCB0aGUgUmVhY3QgYXBwIHRvIHJlc3BvbmQgdG8gYnJ1c2ggc3RhdGUgYW5kIHZpY2UtdmVyc2FcbiAgICAgIC8vIGJ1dCBkMy1icnVzaCBmaXJlcyB0aGUgc2FtZSBldmVudHMgZm9yIGJvdGggdXNlci1pbml0aWF0ZWQgYnJ1c2hpbmdcbiAgICAgIC8vIGFuZCBwcm9ncmFtbWF0aWMgYnJ1c2hpbmcgKGJydXNoLm1vdmUpLiBXZSBuZWVkIHRoZXNlIGZsYWdzIHRvXG4gICAgICAvLyBkaXN0aW5ndWlzaCBiZXR3ZWVuIHRoZSB1c2VzLlxuICAgICAgLy9cbiAgICAgIC8vIFdlIGRvbid0IHVzZSBzdGF0ZSBiZWNhdXNlIHRoYXQgd291bGQgdHJpZ2dlciBhbm90aGVyIGBjb21wb25lbnREaWRVcGRhdGVgXG4gICAgICBjb25zdCB7dGhlbWUsIGlzUmFuZ2VkLCBvbk1vdXNlb3ZlckhhbmRsZSwgb25Nb3VzZW91dEhhbmRsZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICB0aGlzLnJvb3QgPSB0aGlzLnJvb3RDb250YWluZXIuY3VycmVudCA/IHNlbGVjdCh0aGlzLnJvb3RDb250YWluZXIuY3VycmVudCkgOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmJydXNoID0gYnJ1c2hYKClcbiAgICAgICAgLmhhbmRsZVNpemUoMylcbiAgICAgICAgLm9uKCdzdGFydCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25CcnVzaFN0YXJ0ID09PSAnZnVuY3Rpb24nKSB0aGlzLnByb3BzLm9uQnJ1c2hTdGFydCgpO1xuICAgICAgICAgIHRoaXMuX3N0YXJ0U2VsID0gZXZlbnQuc2VsZWN0aW9uO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ2JydXNoJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLm1vdmluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZXZlbnQuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLl9sYXN0U2VsID0gZXZlbnQuc2VsZWN0aW9uO1xuICAgICAgICAgICAgdGhpcy5icnVzaGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9icnVzaGVkKGV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignZW5kJywgZXZlbnQgPT4ge1xuICAgICAgICAgIGlmICghZXZlbnQuc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5icnVzaGluZykge1xuICAgICAgICAgICAgICAvLyBoYW5kbGUgbnVsbCBzZWxlY3Rpb25cbiAgICAgICAgICAgICAgdGhpcy5fY2xpY2sodGhpcy5fbGFzdFNlbCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3N0YXJ0U2VsKSB7XG4gICAgICAgICAgICAgIC8vIGhhbmRsZSBjbGlja1xuICAgICAgICAgICAgICB0aGlzLl9jbGljayh0aGlzLl9zdGFydFNlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uQnJ1c2hFbmQgPT09ICdmdW5jdGlvbicpIHRoaXMucHJvcHMub25CcnVzaEVuZCgpO1xuXG4gICAgICAgICAgdGhpcy5icnVzaGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICB0aGlzLnJvb3Q/LmNhbGwodGhpcy5icnVzaCk7XG4gICAgICBjb25zdCBicnVzaFJlc2l6ZVBhdGggPSBnZXRIYW5kbGVQYXRoKHRoaXMucHJvcHMpO1xuICAgICAgdGhpcy5oYW5kbGUgPSB0aGlzLnJvb3RcbiAgICAgICAgPy5zZWxlY3RBbGwoJy5oYW5kbGUtLWN1c3RvbScpXG4gICAgICAgIC5kYXRhKFt7dHlwZTogJ3cnfSwge3R5cGU6ICdlJ31dKVxuICAgICAgICAuZW50ZXIoKVxuICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2hhbmRsZS0tY3VzdG9tJylcbiAgICAgICAgLmF0dHIoJ2Rpc3BsYXknLCBpc1JhbmdlZCA/IG51bGwgOiAnbm9uZScpXG4gICAgICAgIC5hdHRyKCdmaWxsJywgdGhlbWUgPyB0aGVtZS5zbGlkZXJIYW5kbGVDb2xvciA6ICcjRDNEOEUwJylcbiAgICAgICAgLmF0dHIoJ2N1cnNvcicsICdldy1yZXNpemUnKVxuICAgICAgICAuYXR0cignZCcsIGJydXNoUmVzaXplUGF0aClcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKG9uTW91c2VvdmVySGFuZGxlKSBvbk1vdXNlb3ZlckhhbmRsZSgpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlb3V0JywgKCkgPT4ge1xuICAgICAgICAgIGlmIChvbk1vdXNlb3V0SGFuZGxlKSBvbk1vdXNlb3V0SGFuZGxlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICBjb25zdCB7XG4gICAgICAgIHZhbHVlOiBbdmFsMCwgdmFsMV1cbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5fbW92ZSh2YWwwLCB2YWwxKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIHZhbHVlOiBbdmFsMCwgdmFsMV0sXG4gICAgICAgIHdpZHRoXG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IFtwcmV2VmFsMCwgcHJldlZhbDFdID0gcHJldlByb3BzLnZhbHVlO1xuXG4gICAgICBpZiAocHJldlByb3BzLndpZHRoICE9PSB3aWR0aCkge1xuICAgICAgICAvLyB3aWR0aCBjaGFuZ2Ugc2hvdWxkIG5vdCB0cmlnZ2VyIHRoaXMuX2JydXNoZWRcbiAgICAgICAgdGhpcy5tb3ZpbmcgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5icnVzaCkgdGhpcy5yb290Py5jYWxsKHRoaXMuYnJ1c2gpO1xuICAgICAgICB0aGlzLl9tb3ZlKHZhbDAsIHZhbDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuYnJ1c2hpbmcgJiYgIXRoaXMubW92aW5nKSB7XG4gICAgICAgIGlmIChwcmV2VmFsMCAhPT0gdmFsMCB8fCBwcmV2VmFsMSAhPT0gdmFsMSkge1xuICAgICAgICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9tb3ZlKHZhbDAsIHZhbDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5wcm9wcy5pc1JhbmdlZCAmJiB0aGlzLmhhbmRsZSkge1xuICAgICAgICB0aGlzLmhhbmRsZS5hdHRyKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfY2xpY2soc2VsZWN0aW9uKSB7XG4gICAgICAvLyBmYWtlIGJydXNoXG4gICAgICB0aGlzLmJydXNoaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2JydXNoZWQoe3NvdXJjZUV2ZW50OiB7fSwgc2VsZWN0aW9ufSk7XG4gICAgfVxuXG4gICAgX21vdmUodmFsMDogbnVtYmVyID0gMCwgdmFsMTogbnVtYmVyID0gMCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICByYW5nZTogW21pbiwgbWF4XSxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGlzUmFuZ2VkXG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgaWYgKHdpZHRoICYmIG1heCAtIG1pbiAmJiB0aGlzLmJydXNoICYmIHRoaXMuaGFuZGxlKSB7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gKHg6IG51bWJlcikgPT4gKCh4IC0gbWluKSAqIHdpZHRoKSAvIChtYXggLSBtaW4pO1xuICAgICAgICBpZiAoIWlzUmFuZ2VkKSB7XG4gICAgICAgICAgLy8gb25seSBkcmF3IGEgMSBwaXhlbCBsaW5lXG4gICAgICAgICAgaWYgKHRoaXMucm9vdCkgdGhpcy5icnVzaC5tb3ZlKHRoaXMucm9vdCwgW3NjYWxlKHZhbDApLCBzY2FsZSh2YWwwKSArIDFdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodGhpcy5yb290KSB0aGlzLmJydXNoLm1vdmUodGhpcy5yb290LCBbc2NhbGUodmFsMCksIHNjYWxlKHZhbDEpXSk7XG5cbiAgICAgICAgICB0aGlzLmhhbmRsZVxuICAgICAgICAgICAgLmF0dHIoJ2Rpc3BsYXknLCBudWxsKVxuICAgICAgICAgICAgLmF0dHIoJ3RyYW5zZm9ybScsIChkLCBpKSA9PiBgdHJhbnNsYXRlKCR7W2kgPT09IDAgPyBzY2FsZSh2YWwwKSA6IHNjYWxlKHZhbDEpLCAwXX0pYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBfYnJ1c2hlZCA9IChldnQ6IHtzb3VyY2VFdmVudDogYW55OyBzZWxlY3Rpb246IG51bWJlcltdfSkgPT4ge1xuICAgICAgLy8gSWdub3JlIGJydXNoIGV2ZW50cyB3aGljaCBkb24ndCBoYXZlIGFuIHVuZGVybHlpbmcgc291cmNlRXZlbnRcbiAgICAgIGlmICghZXZ0LnNvdXJjZUV2ZW50KSByZXR1cm47XG4gICAgICBjb25zdCBbc2VsMCwgc2VsMV0gPSBldnQuc2VsZWN0aW9uO1xuICAgICAgY29uc3QgcmlnaHQgPSBtb3ZlUmlnaHQodGhpcy5fc3RhcnRTZWwsIGV2dC5zZWxlY3Rpb24pO1xuXG4gICAgICBjb25zdCB7XG4gICAgICAgIHJhbmdlOiBbbWluLCBtYXhdLFxuICAgICAgICBzdGVwID0gMCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIG1hcmtzLFxuICAgICAgICBpc1JhbmdlZFxuICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBpbnZlcnQgPSAoeDogbnVtYmVyKSA9PiAoeCAqIChtYXggLSBtaW4pKSAvIHdpZHRoICsgbWluO1xuICAgICAgbGV0IGQwID0gaW52ZXJ0KHNlbDApO1xuICAgICAgbGV0IGQxID0gaW52ZXJ0KHNlbDEpO1xuXG4gICAgICBkMCA9IG5vcm1hbGl6ZVNsaWRlclZhbHVlKGQwLCBtaW4sIHN0ZXAsIG1hcmtzKTtcbiAgICAgIGQxID0gbm9ybWFsaXplU2xpZGVyVmFsdWUoZDEsIG1pbiwgc3RlcCwgbWFya3MpO1xuXG4gICAgICBpZiAoaXNSYW5nZWQpIHRoaXMuX21vdmUoZDAsIGQxKTtcbiAgICAgIGVsc2UgdGhpcy5fbW92ZSguLi4ocmlnaHQgPyBbZDEsIGQxXSA6IFtkMCwgZDBdKSk7XG5cbiAgICAgIGlmIChpc1JhbmdlZCkgdGhpcy5fb25CcnVzaChkMCwgZDEpO1xuICAgICAgZWxzZSB0aGlzLl9vbkJydXNoKHJpZ2h0ID8gZDEgOiBkMCk7XG4gICAgfTtcblxuICAgIF9vbkJydXNoKHZhbDA6IG51bWJlciA9IDAsIHZhbDE6IG51bWJlciA9IDApIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaXNSYW5nZWQsXG4gICAgICAgIHZhbHVlOiBbY3VycmVudFZhbDAsIGN1cnJlbnRWYWwxXVxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGlmIChjdXJyZW50VmFsMCA9PT0gdmFsMCAmJiBjdXJyZW50VmFsMSA9PT0gdmFsMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1JhbmdlZCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQnJ1c2godmFsMCwgdmFsMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnByb3BzLm9uQnJ1c2godmFsMCwgdmFsMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2lzUmFuZ2VkfSA9IHRoaXMucHJvcHM7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkRyBjbGFzc05hbWU9XCJrZy1yYW5nZS1zbGlkZXJfX2JydXNoXCIgaXNSYW5nZWQ9e2lzUmFuZ2VkfSByZWY9e3RoaXMucm9vdENvbnRhaW5lcn0gLz5cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiB3aXRoVGhlbWUoUmFuZ2VCcnVzaCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmdlQnJ1c2hGYWN0b3J5O1xuIl19