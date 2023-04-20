"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = require("react");

var _d3Array = require("d3-array");

var _window = require("global/window");

var _console = _interopRequireDefault(require("global/console"));

var _constants = require("@kepler.gl/constants");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var AnimationControllerType = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(AnimationControllerType, _Component);

  var _super = _createSuper(AnimationControllerType);

  function AnimationControllerType() {
    (0, _classCallCheck2["default"])(this, AnimationControllerType);
    return _super.apply(this, arguments);
  }

  return AnimationControllerType;
}(_react.Component);

function AnimationControllerFactory() {
  /**
   * 4 Animation Window Types
   * 1. free
   *  |->  |->
   * Current time is a fixed range, animate a moving window that calls next animation frames continuously
   * The increment id based on domain / BASE_SPEED * SPEED
   *
   * 2. incremental
   * |    |->
   * Same as free, current time is a growing range, only the max value of range increment during animation.
   * The increment is also based on domain / BASE_SPEED * SPEED
   *
   * 3. point
   * o -> o
   * Current time is a point, animate a moving point calls next animation frame continuously
   * The increment is based on domain / BASE_SPEED * SPEED
   *
   * 4. interval
   * o ~> o
   * Current time is a point. An array of sorted time steps are provided,
   * animate a moving point jumps to the next step
   */
  var AnimationController = /*#__PURE__*/function (_Component2) {
    (0, _inherits2["default"])(AnimationController, _Component2);

    var _super2 = _createSuper(AnimationController);

    function AnimationController() {
      var _this;

      (0, _classCallCheck2["default"])(this, AnimationController);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super2.call.apply(_super2, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        isAnimating: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_timer", null);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_startTime", 0);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_animate", function (delay) {
        _this._startTime = new Date().getTime();

        var loop = function loop() {
          var current = new Date().getTime();
          var delta = current - _this._startTime;

          if (delta >= delay) {
            _this._nextFrame();

            _this._startTime = new Date().getTime();
          } else {
            _this._timer = (0, _window.requestAnimationFrame)(loop);
          }
        };

        _this._timer = (0, _window.requestAnimationFrame)(loop);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_resetAnimationByDomain", function () {
        var _this$props = _this.props,
            domain = _this$props.domain,
            value = _this$props.value,
            animationWindow = _this$props.animationWindow,
            updateAnimation = _this$props.updateAnimation;

        if (!domain) {
          return;
        } // interim solution while we fully migrate filter and layer controllers


        var setTimelineValue = updateAnimation || _this.props.setTimelineValue;

        if (Array.isArray(value)) {
          if (animationWindow === _constants.ANIMATION_WINDOW.incremental) {
            setTimelineValue([value[0], value[0] + 1]);
          } else {
            setTimelineValue([domain[0], domain[0] + value[1] - value[0]]);
          }
        } else {
          setTimelineValue(domain[0]);
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_resetAnimationByTimeStep", function () {
        var _this$props2 = _this.props,
            _this$props2$steps = _this$props2.steps,
            steps = _this$props2$steps === void 0 ? null : _this$props2$steps,
            updateAnimation = _this$props2.updateAnimation;
        if (!steps) return; // interim solution while we fully migrate filter and layer controllers

        var setTimelineValue = updateAnimation || _this.props.setTimelineValue; // go to the first steps

        setTimelineValue([steps[0], 0]);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_resetAnimation", function () {
        if (_this.props.animationWindow === _constants.ANIMATION_WINDOW.interval) {
          _this._resetAnimationByTimeStep();
        } else {
          _this._resetAnimationByDomain();
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_startAnimation", function () {
        var _this$props$speed = _this.props.speed,
            speed = _this$props$speed === void 0 ? 1 : _this$props$speed;

        _this._clearTimer();

        if (speed > 0) {
          if (_this.props.animationWindow === _constants.ANIMATION_WINDOW.interval) {
            // animate by interval
            // 30*600
            var steps = _this.props.steps;

            if (!Array.isArray(steps) || !steps.length) {
              _console["default"].warn('animation steps should be an array');

              return;
            } // when speed = 1, animation should loop through 600 frames at 60 FPS
            // calculate delay based on # steps


            var delay = _constants.BASE_SPEED * (1000 / _constants.FPS) / steps.length / (speed || 1);

            _this._animate(delay);
          } else {
            _this._timer = (0, _window.requestAnimationFrame)(_this._nextFrame);
          }
        }

        _this.setState({
          isAnimating: true
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_clearTimer", function () {
        if (_this._timer) {
          (0, _window.cancelAnimationFrame)(_this._timer);
          _this._timer = null;
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_pauseAnimation", function () {
        _this._clearTimer();

        _this.setState({
          isAnimating: false
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_nextFrame", function () {
        _this._timer = null;
        var nextValue = _this.props.animationWindow === _constants.ANIMATION_WINDOW.interval ? _this._nextFrameByTimeStep() : _this._nextFrameByDomain(); // interim solution while we fully migrate filter and layer controllers

        var setTimelineValue = _this.props.updateAnimation || _this.props.setTimelineValue;
        setTimelineValue(nextValue);
      });
      return _this;
    }

    (0, _createClass2["default"])(AnimationController, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this._startOrPauseAnimation();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        this._startOrPauseAnimation();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this._timer) {
          (0, _window.cancelAnimationFrame)(this._timer);
        }
      }
    }, {
      key: "_startOrPauseAnimation",
      value: function _startOrPauseAnimation() {
        var _this$props3 = this.props,
            isAnimating = _this$props3.isAnimating,
            _this$props3$speed = _this$props3.speed,
            speed = _this$props3$speed === void 0 ? 1 : _this$props3$speed;

        if (!this._timer && isAnimating && speed > 0) {
          this._startAnimation();
        } else if (this._timer && !isAnimating) {
          this._pauseAnimation();
        }
      }
    }, {
      key: "_nextFrameByDomain",
      value: function _nextFrameByDomain() {
        var _this$props4 = this.props,
            domain = _this$props4.domain,
            value = _this$props4.value,
            _this$props4$speed = _this$props4.speed,
            speed = _this$props4$speed === void 0 ? 1 : _this$props4$speed,
            _this$props4$baseSpee = _this$props4.baseSpeed,
            baseSpeed = _this$props4$baseSpee === void 0 ? 600 : _this$props4$baseSpee,
            animationWindow = _this$props4.animationWindow;

        if (!domain) {
          return;
        }

        var delta = (domain[1] - domain[0]) / baseSpeed * speed; // loop when reaches the end
        // current time is a range

        if (Array.isArray(value)) {
          var value0;
          var value1;
          var readEnd = value[1] + delta > domain[1];

          if (animationWindow === _constants.ANIMATION_WINDOW.incremental) {
            value0 = value[0];
            value1 = readEnd ? value[0] + 1 : value[1] + delta;
          } else {
            value0 = readEnd ? domain[0] : value[0] + delta;
            value1 = value0 + value[1] - value[0];
          }

          return [value0, value1];
        } // current time is a point


        return Number(value) + delta > domain[1] ? domain[0] : Number(value) + delta;
      }
    }, {
      key: "_nextFrameByTimeStep",
      value: function _nextFrameByTimeStep() {
        var _this$props5 = this.props,
            _this$props5$steps = _this$props5.steps,
            steps = _this$props5$steps === void 0 ? null : _this$props5$steps,
            value = _this$props5.value;
        if (!steps) return;
        var val = Array.isArray(value) ? value[0] : Number(value);
        var index = (0, _d3Array.bisectLeft)(steps, val);
        var nextIdx = index >= steps.length - 1 ? 0 : index + 1; // why do we need to pass an array of two objects? are we reading nextIdx at some point?
        // _nextFrameByDomain only returns one value

        return [steps[nextIdx], nextIdx];
      }
    }, {
      key: "render",
      value: function render() {
        var isAnimating = this.state.isAnimating;
        var children = this.props.children;
        return typeof children === 'function' ? children(isAnimating, this._startAnimation, this._pauseAnimation, this._resetAnimation, this.props.timeline, this.props.setTimelineValue) : null;
      }
    }]);
    return AnimationController;
  }(_react.Component);

  (0, _defineProperty2["default"])(AnimationController, "defaultProps", {
    baseSpeed: _constants.BASE_SPEED,
    speed: 1,
    steps: null,
    animationWindow: _constants.ANIMATION_WINDOW.free
  });
  return AnimationController;
}

var _default = AnimationControllerFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vYW5pbWF0aW9uLWNvbnRyb2wvYW5pbWF0aW9uLWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOlsiQW5pbWF0aW9uQ29udHJvbGxlclR5cGUiLCJDb21wb25lbnQiLCJBbmltYXRpb25Db250cm9sbGVyRmFjdG9yeSIsIkFuaW1hdGlvbkNvbnRyb2xsZXIiLCJpc0FuaW1hdGluZyIsImRlbGF5IiwiX3N0YXJ0VGltZSIsIkRhdGUiLCJnZXRUaW1lIiwibG9vcCIsImN1cnJlbnQiLCJkZWx0YSIsIl9uZXh0RnJhbWUiLCJfdGltZXIiLCJwcm9wcyIsImRvbWFpbiIsInZhbHVlIiwiYW5pbWF0aW9uV2luZG93IiwidXBkYXRlQW5pbWF0aW9uIiwic2V0VGltZWxpbmVWYWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsIkFOSU1BVElPTl9XSU5ET1ciLCJpbmNyZW1lbnRhbCIsInN0ZXBzIiwiaW50ZXJ2YWwiLCJfcmVzZXRBbmltYXRpb25CeVRpbWVTdGVwIiwiX3Jlc2V0QW5pbWF0aW9uQnlEb21haW4iLCJzcGVlZCIsIl9jbGVhclRpbWVyIiwibGVuZ3RoIiwiQ29uc29sZSIsIndhcm4iLCJCQVNFX1NQRUVEIiwiRlBTIiwiX2FuaW1hdGUiLCJzZXRTdGF0ZSIsIm5leHRWYWx1ZSIsIl9uZXh0RnJhbWVCeVRpbWVTdGVwIiwiX25leHRGcmFtZUJ5RG9tYWluIiwiX3N0YXJ0T3JQYXVzZUFuaW1hdGlvbiIsIl9zdGFydEFuaW1hdGlvbiIsIl9wYXVzZUFuaW1hdGlvbiIsImJhc2VTcGVlZCIsInZhbHVlMCIsInZhbHVlMSIsInJlYWRFbmQiLCJOdW1iZXIiLCJ2YWwiLCJpbmRleCIsIm5leHRJZHgiLCJzdGF0ZSIsImNoaWxkcmVuIiwiX3Jlc2V0QW5pbWF0aW9uIiwidGltZWxpbmUiLCJmcmVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFD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RkE7QUFJUCxlQUFPLE9BQU9BLFFBQVAsS0FBb0IsVUFBcEIsR0FDSEEsUUFBUSxDQUNOaEQsV0FETSxFQUVOLEtBQUtxQyxlQUZDLEVBR04sS0FBS0MsZUFIQyxFQUlOLEtBQUtXLGVBSkMsRUFLTixLQUFLdkMsS0FBTCxDQUFXd0MsUUFMTCxFQU1OLEtBQUt4QyxLQUFMLENBQVdLLGdCQU5MLENBREwsR0FTSCxJQVRKO0FBVUQ7QUExTmlFO0FBQUE7QUFBQSxJQXVCTGxCLGdCQXZCSzs7QUFBQSxtQ0F1QjlERSxtQkF2QjhELGtCQTBCNUM7QUFDcEJ3QyxJQUFBQSxTQUFTLEVBQUVWLHFCQURTO0FBRXBCTCxJQUFBQSxLQUFLLEVBQUUsQ0FGYTtBQUdwQkosSUFBQUEsS0FBSyxFQUFFLElBSGE7QUFJcEJQLElBQUFBLGVBQWUsRUFBRUssNEJBQWlCaUM7QUFKZCxHQTFCNEM7QUE2TnBFLFNBQU9wRCxtQkFBUDtBQUNEOztlQUVjRCwwQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Jpc2VjdExlZnR9IGZyb20gJ2QzLWFycmF5JztcbmltcG9ydCB7cmVxdWVzdEFuaW1hdGlvbkZyYW1lLCBjYW5jZWxBbmltYXRpb25GcmFtZX0gZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQgQ29uc29sZSBmcm9tICdnbG9iYWwvY29uc29sZSc7XG5pbXBvcnQge0JBU0VfU1BFRUQsIEZQUywgQU5JTUFUSU9OX1dJTkRPV30gZnJvbSAnQGtlcGxlci5nbC9jb25zdGFudHMnO1xuaW1wb3J0IHtUaW1lbGluZX0gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5cbmludGVyZmFjZSBBbmltYXRpb25Db250cm9sbGVyUHJvcHM8VCBleHRlbmRzIG51bWJlciB8IG51bWJlcltdPiB7XG4gIGlzQW5pbWF0aW5nPzogYm9vbGVhbjtcbiAgc3BlZWQ/OiBudW1iZXI7XG4gIHVwZGF0ZUFuaW1hdGlvbj86ICh4OiBUKSA9PiB2b2lkO1xuICBzZXRUaW1lbGluZVZhbHVlOiAoeDogVCkgPT4gdm9pZDtcbiAgdGltZWxpbmU/OiBUaW1lbGluZTtcbiAgYW5pbWF0aW9uV2luZG93Pzogc3RyaW5nO1xuICBzdGVwcz86IG51bWJlcltdIHwgbnVsbDtcbiAgZG9tYWluOiBudW1iZXJbXSB8IG51bGw7XG4gIHZhbHVlOiBUO1xuICBiYXNlU3BlZWQ/OiBudW1iZXI7XG59XG5cbmNsYXNzIEFuaW1hdGlvbkNvbnRyb2xsZXJUeXBlPFQgZXh0ZW5kcyBudW1iZXIgfCBudW1iZXJbXT4gZXh0ZW5kcyBDb21wb25lbnQ8XG4gIEFuaW1hdGlvbkNvbnRyb2xsZXJQcm9wczxUPlxuPiB7fVxuXG5mdW5jdGlvbiBBbmltYXRpb25Db250cm9sbGVyRmFjdG9yeSgpOiB0eXBlb2YgQW5pbWF0aW9uQ29udHJvbGxlclR5cGUge1xuICAvKipcbiAgICogNCBBbmltYXRpb24gV2luZG93IFR5cGVzXG4gICAqIDEuIGZyZWVcbiAgICogIHwtPiAgfC0+XG4gICAqIEN1cnJlbnQgdGltZSBpcyBhIGZpeGVkIHJhbmdlLCBhbmltYXRlIGEgbW92aW5nIHdpbmRvdyB0aGF0IGNhbGxzIG5leHQgYW5pbWF0aW9uIGZyYW1lcyBjb250aW51b3VzbHlcbiAgICogVGhlIGluY3JlbWVudCBpZCBiYXNlZCBvbiBkb21haW4gLyBCQVNFX1NQRUVEICogU1BFRURcbiAgICpcbiAgICogMi4gaW5jcmVtZW50YWxcbiAgICogfCAgICB8LT5cbiAgICogU2FtZSBhcyBmcmVlLCBjdXJyZW50IHRpbWUgaXMgYSBncm93aW5nIHJhbmdlLCBvbmx5IHRoZSBtYXggdmFsdWUgb2YgcmFuZ2UgaW5jcmVtZW50IGR1cmluZyBhbmltYXRpb24uXG4gICAqIFRoZSBpbmNyZW1lbnQgaXMgYWxzbyBiYXNlZCBvbiBkb21haW4gLyBCQVNFX1NQRUVEICogU1BFRURcbiAgICpcbiAgICogMy4gcG9pbnRcbiAgICogbyAtPiBvXG4gICAqIEN1cnJlbnQgdGltZSBpcyBhIHBvaW50LCBhbmltYXRlIGEgbW92aW5nIHBvaW50IGNhbGxzIG5leHQgYW5pbWF0aW9uIGZyYW1lIGNvbnRpbnVvdXNseVxuICAgKiBUaGUgaW5jcmVtZW50IGlzIGJhc2VkIG9uIGRvbWFpbiAvIEJBU0VfU1BFRUQgKiBTUEVFRFxuICAgKlxuICAgKiA0LiBpbnRlcnZhbFxuICAgKiBvIH4+IG9cbiAgICogQ3VycmVudCB0aW1lIGlzIGEgcG9pbnQuIEFuIGFycmF5IG9mIHNvcnRlZCB0aW1lIHN0ZXBzIGFyZSBwcm92aWRlZCxcbiAgICogYW5pbWF0ZSBhIG1vdmluZyBwb2ludCBqdW1wcyB0byB0aGUgbmV4dCBzdGVwXG4gICAqL1xuICBjbGFzcyBBbmltYXRpb25Db250cm9sbGVyPFQgZXh0ZW5kcyBudW1iZXIgfCBudW1iZXJbXT4gZXh0ZW5kcyBDb21wb25lbnQ8XG4gICAgQW5pbWF0aW9uQ29udHJvbGxlclByb3BzPFQ+XG4gID4ge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICBiYXNlU3BlZWQ6IEJBU0VfU1BFRUQsXG4gICAgICBzcGVlZDogMSxcbiAgICAgIHN0ZXBzOiBudWxsLFxuICAgICAgYW5pbWF0aW9uV2luZG93OiBBTklNQVRJT05fV0lORE9XLmZyZWVcbiAgICB9O1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICBpc0FuaW1hdGluZzogZmFsc2VcbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLl9zdGFydE9yUGF1c2VBbmltYXRpb24oKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICB0aGlzLl9zdGFydE9yUGF1c2VBbmltYXRpb24oKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLl90aW1lcikge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl90aW1lcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3RpbWVyID0gbnVsbDtcbiAgICBfc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuXG4gICAgX3N0YXJ0T3JQYXVzZUFuaW1hdGlvbigpIHtcbiAgICAgIGNvbnN0IHtpc0FuaW1hdGluZywgc3BlZWQgPSAxfSA9IHRoaXMucHJvcHM7XG4gICAgICBpZiAoIXRoaXMuX3RpbWVyICYmIGlzQW5pbWF0aW5nICYmIHNwZWVkID4gMCkge1xuICAgICAgICB0aGlzLl9zdGFydEFuaW1hdGlvbigpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl90aW1lciAmJiAhaXNBbmltYXRpbmcpIHtcbiAgICAgICAgdGhpcy5fcGF1c2VBbmltYXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBfYW5pbWF0ZSA9IGRlbGF5ID0+IHtcbiAgICAgIHRoaXMuX3N0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICBjb25zdCBsb29wID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IGRlbHRhID0gY3VycmVudCAtIHRoaXMuX3N0YXJ0VGltZTtcblxuICAgICAgICBpZiAoZGVsdGEgPj0gZGVsYXkpIHtcbiAgICAgICAgICB0aGlzLl9uZXh0RnJhbWUoKTtcbiAgICAgICAgICB0aGlzLl9zdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl90aW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdGhpcy5fdGltZXIgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgfTtcblxuICAgIF9yZXNldEFuaW1hdGlvbkJ5RG9tYWluID0gKCkgPT4ge1xuICAgICAgY29uc3Qge2RvbWFpbiwgdmFsdWUsIGFuaW1hdGlvbldpbmRvdywgdXBkYXRlQW5pbWF0aW9ufSA9IHRoaXMucHJvcHM7XG4gICAgICBpZiAoIWRvbWFpbikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBpbnRlcmltIHNvbHV0aW9uIHdoaWxlIHdlIGZ1bGx5IG1pZ3JhdGUgZmlsdGVyIGFuZCBsYXllciBjb250cm9sbGVyc1xuICAgICAgY29uc3Qgc2V0VGltZWxpbmVWYWx1ZSA9IHVwZGF0ZUFuaW1hdGlvbiB8fCB0aGlzLnByb3BzLnNldFRpbWVsaW5lVmFsdWU7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uV2luZG93ID09PSBBTklNQVRJT05fV0lORE9XLmluY3JlbWVudGFsKSB7XG4gICAgICAgICAgc2V0VGltZWxpbmVWYWx1ZShbdmFsdWVbMF0sIHZhbHVlWzBdICsgMV0gYXMgVCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0VGltZWxpbmVWYWx1ZShbZG9tYWluWzBdLCBkb21haW5bMF0gKyB2YWx1ZVsxXSAtIHZhbHVlWzBdXSBhcyBUKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZWxpbmVWYWx1ZShkb21haW5bMF0gYXMgVCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9yZXNldEFuaW1hdGlvbkJ5VGltZVN0ZXAgPSAoKSA9PiB7XG4gICAgICBjb25zdCB7c3RlcHMgPSBudWxsLCB1cGRhdGVBbmltYXRpb259ID0gdGhpcy5wcm9wcztcbiAgICAgIGlmICghc3RlcHMpIHJldHVybjtcbiAgICAgIC8vIGludGVyaW0gc29sdXRpb24gd2hpbGUgd2UgZnVsbHkgbWlncmF0ZSBmaWx0ZXIgYW5kIGxheWVyIGNvbnRyb2xsZXJzXG4gICAgICBjb25zdCBzZXRUaW1lbGluZVZhbHVlID0gdXBkYXRlQW5pbWF0aW9uIHx8IHRoaXMucHJvcHMuc2V0VGltZWxpbmVWYWx1ZTtcblxuICAgICAgLy8gZ28gdG8gdGhlIGZpcnN0IHN0ZXBzXG4gICAgICBzZXRUaW1lbGluZVZhbHVlKFtzdGVwc1swXSwgMF0gYXMgVCk7XG4gICAgfTtcblxuICAgIF9yZXNldEFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmFuaW1hdGlvbldpbmRvdyA9PT0gQU5JTUFUSU9OX1dJTkRPVy5pbnRlcnZhbCkge1xuICAgICAgICB0aGlzLl9yZXNldEFuaW1hdGlvbkJ5VGltZVN0ZXAoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3Jlc2V0QW5pbWF0aW9uQnlEb21haW4oKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3N0YXJ0QW5pbWF0aW9uID0gKCkgPT4ge1xuICAgICAgY29uc3Qge3NwZWVkID0gMX0gPSB0aGlzLnByb3BzO1xuICAgICAgdGhpcy5fY2xlYXJUaW1lcigpO1xuICAgICAgaWYgKHNwZWVkID4gMCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5hbmltYXRpb25XaW5kb3cgPT09IEFOSU1BVElPTl9XSU5ET1cuaW50ZXJ2YWwpIHtcbiAgICAgICAgICAvLyBhbmltYXRlIGJ5IGludGVydmFsXG4gICAgICAgICAgLy8gMzAqNjAwXG4gICAgICAgICAgY29uc3Qge3N0ZXBzfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHN0ZXBzKSB8fCAhc3RlcHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBDb25zb2xlLndhcm4oJ2FuaW1hdGlvbiBzdGVwcyBzaG91bGQgYmUgYW4gYXJyYXknKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gd2hlbiBzcGVlZCA9IDEsIGFuaW1hdGlvbiBzaG91bGQgbG9vcCB0aHJvdWdoIDYwMCBmcmFtZXMgYXQgNjAgRlBTXG4gICAgICAgICAgLy8gY2FsY3VsYXRlIGRlbGF5IGJhc2VkIG9uICMgc3RlcHNcbiAgICAgICAgICBjb25zdCBkZWxheSA9IChCQVNFX1NQRUVEICogKDEwMDAgLyBGUFMpKSAvIHN0ZXBzLmxlbmd0aCAvIChzcGVlZCB8fCAxKTtcbiAgICAgICAgICB0aGlzLl9hbmltYXRlKGRlbGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl90aW1lciA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLl9uZXh0RnJhbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNldFN0YXRlKHtpc0FuaW1hdGluZzogdHJ1ZX0pO1xuICAgIH07XG5cbiAgICBfY2xlYXJUaW1lciA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLl90aW1lcikge1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl90aW1lcik7XG4gICAgICAgIHRoaXMuX3RpbWVyID0gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3BhdXNlQW5pbWF0aW9uID0gKCkgPT4ge1xuICAgICAgdGhpcy5fY2xlYXJUaW1lcigpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNBbmltYXRpbmc6IGZhbHNlfSk7XG4gICAgfTtcblxuICAgIF9uZXh0RnJhbWUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl90aW1lciA9IG51bGw7XG4gICAgICBjb25zdCBuZXh0VmFsdWUgPVxuICAgICAgICB0aGlzLnByb3BzLmFuaW1hdGlvbldpbmRvdyA9PT0gQU5JTUFUSU9OX1dJTkRPVy5pbnRlcnZhbFxuICAgICAgICAgID8gdGhpcy5fbmV4dEZyYW1lQnlUaW1lU3RlcCgpXG4gICAgICAgICAgOiB0aGlzLl9uZXh0RnJhbWVCeURvbWFpbigpO1xuXG4gICAgICAvLyBpbnRlcmltIHNvbHV0aW9uIHdoaWxlIHdlIGZ1bGx5IG1pZ3JhdGUgZmlsdGVyIGFuZCBsYXllciBjb250cm9sbGVyc1xuICAgICAgY29uc3Qgc2V0VGltZWxpbmVWYWx1ZSA9IHRoaXMucHJvcHMudXBkYXRlQW5pbWF0aW9uIHx8IHRoaXMucHJvcHMuc2V0VGltZWxpbmVWYWx1ZTtcbiAgICAgIHNldFRpbWVsaW5lVmFsdWUobmV4dFZhbHVlIGFzIFQpO1xuICAgIH07XG5cbiAgICBfbmV4dEZyYW1lQnlEb21haW4oKSB7XG4gICAgICBjb25zdCB7ZG9tYWluLCB2YWx1ZSwgc3BlZWQgPSAxLCBiYXNlU3BlZWQgPSA2MDAsIGFuaW1hdGlvbldpbmRvd30gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKCFkb21haW4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZGVsdGEgPSAoKGRvbWFpblsxXSAtIGRvbWFpblswXSkgLyBiYXNlU3BlZWQpICogc3BlZWQ7XG5cbiAgICAgIC8vIGxvb3Agd2hlbiByZWFjaGVzIHRoZSBlbmRcbiAgICAgIC8vIGN1cnJlbnQgdGltZSBpcyBhIHJhbmdlXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgbGV0IHZhbHVlMDogbnVtYmVyO1xuICAgICAgICBsZXQgdmFsdWUxOiBudW1iZXI7XG4gICAgICAgIGNvbnN0IHJlYWRFbmQgPSB2YWx1ZVsxXSArIGRlbHRhID4gZG9tYWluWzFdO1xuICAgICAgICBpZiAoYW5pbWF0aW9uV2luZG93ID09PSBBTklNQVRJT05fV0lORE9XLmluY3JlbWVudGFsKSB7XG4gICAgICAgICAgdmFsdWUwID0gdmFsdWVbMF07XG4gICAgICAgICAgdmFsdWUxID0gcmVhZEVuZCA/IHZhbHVlWzBdICsgMSA6IHZhbHVlWzFdICsgZGVsdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUwID0gcmVhZEVuZCA/IGRvbWFpblswXSA6IHZhbHVlWzBdICsgZGVsdGE7XG4gICAgICAgICAgdmFsdWUxID0gdmFsdWUwICsgdmFsdWVbMV0gLSB2YWx1ZVswXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3ZhbHVlMCwgdmFsdWUxXTtcbiAgICAgIH1cblxuICAgICAgLy8gY3VycmVudCB0aW1lIGlzIGEgcG9pbnRcbiAgICAgIHJldHVybiBOdW1iZXIodmFsdWUpICsgZGVsdGEgPiBkb21haW5bMV0gPyBkb21haW5bMF0gOiBOdW1iZXIodmFsdWUpICsgZGVsdGE7XG4gICAgfVxuXG4gICAgX25leHRGcmFtZUJ5VGltZVN0ZXAoKSB7XG4gICAgICBjb25zdCB7c3RlcHMgPSBudWxsLCB2YWx1ZX0gPSB0aGlzLnByb3BzO1xuICAgICAgaWYgKCFzdGVwcykgcmV0dXJuO1xuICAgICAgY29uc3QgdmFsID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZVswXSA6IE51bWJlcih2YWx1ZSk7XG4gICAgICBjb25zdCBpbmRleCA9IGJpc2VjdExlZnQoc3RlcHMsIHZhbCk7XG4gICAgICBjb25zdCBuZXh0SWR4ID0gaW5kZXggPj0gc3RlcHMubGVuZ3RoIC0gMSA/IDAgOiBpbmRleCArIDE7XG5cbiAgICAgIC8vIHdoeSBkbyB3ZSBuZWVkIHRvIHBhc3MgYW4gYXJyYXkgb2YgdHdvIG9iamVjdHM/IGFyZSB3ZSByZWFkaW5nIG5leHRJZHggYXQgc29tZSBwb2ludD9cbiAgICAgIC8vIF9uZXh0RnJhbWVCeURvbWFpbiBvbmx5IHJldHVybnMgb25lIHZhbHVlXG4gICAgICByZXR1cm4gW3N0ZXBzW25leHRJZHhdLCBuZXh0SWR4XTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7aXNBbmltYXRpbmd9ID0gdGhpcy5zdGF0ZTtcbiAgICAgIGNvbnN0IHtjaGlsZHJlbn0gPSB0aGlzLnByb3BzO1xuXG4gICAgICByZXR1cm4gdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gY2hpbGRyZW4oXG4gICAgICAgICAgICBpc0FuaW1hdGluZyxcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0QW5pbWF0aW9uLFxuICAgICAgICAgICAgdGhpcy5fcGF1c2VBbmltYXRpb24sXG4gICAgICAgICAgICB0aGlzLl9yZXNldEFuaW1hdGlvbixcbiAgICAgICAgICAgIHRoaXMucHJvcHMudGltZWxpbmUsXG4gICAgICAgICAgICB0aGlzLnByb3BzLnNldFRpbWVsaW5lVmFsdWVcbiAgICAgICAgICApXG4gICAgICAgIDogbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gQW5pbWF0aW9uQ29udHJvbGxlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uQ29udHJvbGxlckZhY3Rvcnk7XG4iXX0=