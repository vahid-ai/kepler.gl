"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getChildPos = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _lodash2 = _interopRequireDefault(require("lodash.isequal"));

var _exenv = require("exenv");

var _styledComponents = require("styled-components");

var _context = require("../context");

var _reactModal = _interopRequireDefault(require("react-modal"));

var _window = _interopRequireDefault(require("global/window"));

var _styles = require("@kepler.gl/styles");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var listeners = {};

var startListening = function startListening() {
  return Object.keys(listeners).forEach(function (key) {
    return listeners[key]();
  });
};

var getPageOffset = function getPageOffset() {
  return {
    x: _window["default"].pageXOffset !== undefined ? _window["default"].pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
    y: _window["default"].pageYOffset !== undefined ? _window["default"].pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
  };
};

var addEventListeners = function addEventListeners() {
  if (document && document.body) document.body.addEventListener('mousewheel', (0, _lodash["default"])(startListening, 100, {
    leading: true
  }));

  _window["default"].addEventListener('resize', (0, _lodash["default"])(startListening, 50, {
    leading: true
  }));
};

var getChildPos = function getChildPos(_ref) {
  var offsets = _ref.offsets,
      rect = _ref.rect,
      childRect = _ref.childRect,
      pageOffset = _ref.pageOffset,
      padding = _ref.padding;
  var topOffset = offsets.topOffset,
      leftOffset = offsets.leftOffset,
      rightOffset = offsets.rightOffset;
  var anchorLeft = leftOffset !== undefined;

  var pos = _objectSpread({
    top: pageOffset.y + rect.top + (topOffset || 0)
  }, anchorLeft ? {
    left: pageOffset.x + rect.left + leftOffset
  } : {
    right: _window["default"].innerWidth - rect.right - pageOffset.x + (rightOffset || 0)
  });

  var leftOrRight = anchorLeft ? 'left' : 'right';

  if (pos[leftOrRight] && pos[leftOrRight] < 0) {
    pos[leftOrRight] = padding;
  } else if (pos[leftOrRight] && pos[leftOrRight] + childRect.width > _window["default"].innerWidth) {
    pos[leftOrRight] = _window["default"].innerWidth - childRect.width - padding;
  }

  if (pos.top < 0) {
    pos.top = padding;
  } else if (pos.top + childRect.height > _window["default"].innerHeight) {
    pos.top = _window["default"].innerHeight - childRect.height - padding;
  }

  return pos;
};

exports.getChildPos = getChildPos;

if (_exenv.canUseDOM) {
  if (document.body) {
    addEventListeners();
  } else {
    document.addEventListener('DOMContentLoaded', addEventListeners);
  }
}

var listenerIdCounter = 0;

function subscribe(fn) {
  listenerIdCounter += 1;
  var id = listenerIdCounter;
  listeners[id] = fn;
  return function () {
    return delete listeners[id];
  };
}

var defaultModalStyle = {
  content: {
    top: 0,
    left: 0,
    border: 0,
    right: 'auto',
    bottom: 'auto',
    padding: '0px 0px 0px 0px'
  },
  overlay: {
    right: 'auto',
    bottom: 'auto',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  }
};
var WINDOW_PAD = 40;

var noop = function noop() {};

var Portaled = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Portaled, _Component);

  var _super = _createSuper(Portaled);

  function Portaled() {
    var _this;

    (0, _classCallCheck2["default"])(this, Portaled);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      pos: null,
      isVisible: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "unsubscribe", undefined);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_unmounted", false);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "element", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "child", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleScroll", function () {
      if (_this.child.current && _this.element.current) {
        var rect = _this.element.current.getBoundingClientRect();

        var childRect = _this.child.current.getBoundingClientRect();

        var pageOffset = getPageOffset();
        var _this$props = _this.props,
            topOffset = _this$props.top,
            _this$props$left = _this$props.left,
            leftOffset = _this$props$left === void 0 ? 0 : _this$props$left,
            rightOffset = _this$props.right;
        var pos = getChildPos({
          offsets: {
            topOffset: topOffset,
            leftOffset: leftOffset,
            rightOffset: rightOffset
          },
          rect: rect,
          childRect: childRect,
          pageOffset: pageOffset,
          padding: WINDOW_PAD
        });

        if (!(0, _lodash2["default"])(pos, _this.state.pos)) {
          _this.setState({
            pos: pos
          });
        }
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(Portaled, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // relative
      this.unsubscribe = subscribe(this.handleScroll);
      this.handleScroll();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var didOpen = this.props.isOpened && !prevProps.isOpened;
      var didClose = !this.props.isOpened && prevProps.isOpened;

      if (didOpen || didClose) {
        _window["default"].requestAnimationFrame(function () {
          if (_this2._unmounted) return;

          _this2.setState({
            isVisible: Boolean(didOpen)
          });
        });
      }

      this.handleScroll();
    } // ColorPicker will throw a cross-origin error when it is closed
    // when the app is within an iframe.
    // This is a known issue of react-color component:
    // see: https://github.com/casesandberg/react-color/issues/806

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch() {// Do nothing here, since React will try to recreate this component
      // tree from scratch using the error boundary, which is this component
      // itself. This is a temporal fix for a crash.
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._unmounted = true; // @ts-ignore

      this.unsubscribe();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          Comp = _this$props2.component,
          overlayZIndex = _this$props2.overlayZIndex,
          isOpened = _this$props2.isOpened,
          onClose = _this$props2.onClose,
          children = _this$props2.children,
          modalProps = _this$props2.modalProps,
          _this$props2$modalSty = _this$props2.modalStyle,
          modalStyle = _this$props2$modalSty === void 0 ? {} : _this$props2$modalSty;
      var _this$state = this.state,
          isVisible = _this$state.isVisible,
          pos = _this$state.pos;

      var newModalStyle = _objectSpread(_objectSpread({}, defaultModalStyle), {}, {
        content: _objectSpread({}, modalStyle.content || {}),
        overlay: _objectSpread(_objectSpread(_objectSpread({}, defaultModalStyle.overlay), modalStyle.overlay || {}), {}, {
          // needs to be on top of existing modal
          zIndex: overlayZIndex || 9999
        })
      });

      return /*#__PURE__*/_react["default"].createElement(_context.RootContext.Consumer, null, function (context) {
        return /*#__PURE__*/_react["default"].createElement(Comp, {
          ref: _this3.element
        }, isOpened ? /*#__PURE__*/_react["default"].createElement(_reactModal["default"], (0, _extends2["default"])({
          className: "modal-portal"
        }, modalProps, {
          ariaHideApp: false,
          isOpen: true,
          style: newModalStyle,
          parentSelector: function parentSelector() {
            // React modal issue: https://github.com/reactjs/react-modal/issues/769
            // failed to execute removeChild on parent node when it is already unmounted
            return context && context.current || document.body;
          },
          onRequestClose: onClose
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "portaled-content",
          key: "item",
          style: _objectSpread({
            position: 'fixed',
            opacity: isVisible ? 1 : 0,
            transition: _this3.props.theme.transitionFast,
            marginTop: isVisible ? '0px' : '14px'
          }, pos)
        }, /*#__PURE__*/_react["default"].createElement("div", {
          ref: _this3.child,
          style: {
            position: 'absolute',
            zIndex: overlayZIndex ? overlayZIndex + 1 : 10000
          }
        }, children))) : null);
      });
    }
  }], [{
    key: "getDerivedStateFromError",
    value: // Make Portaled a component with Error Boundary, so React can recreate
    // this component if the child 'ColorPicker' throws cross-origin error.
    // see function componentDidCatch()
    function getDerivedStateFromError() {
      return {
        hasError: true
      };
    }
  }]);
  return Portaled;
}(_react.Component);

(0, _defineProperty2["default"])(Portaled, "defaultProps", {
  component: 'div',
  onClose: noop,
  theme: _styles.theme
});

var _default = (0, _styledComponents.withTheme)(Portaled);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vcG9ydGFsZWQudHN4Il0sIm5hbWVzIjpbImxpc3RlbmVycyIsInN0YXJ0TGlzdGVuaW5nIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJnZXRQYWdlT2Zmc2V0IiwieCIsIndpbmRvdyIsInBhZ2VYT2Zmc2V0IiwidW5kZWZpbmVkIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwicGFyZW50Tm9kZSIsInNjcm9sbExlZnQiLCJ5IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUb3AiLCJhZGRFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJsZWFkaW5nIiwiZ2V0Q2hpbGRQb3MiLCJvZmZzZXRzIiwicmVjdCIsImNoaWxkUmVjdCIsInBhZ2VPZmZzZXQiLCJwYWRkaW5nIiwidG9wT2Zmc2V0IiwibGVmdE9mZnNldCIsInJpZ2h0T2Zmc2V0IiwiYW5jaG9yTGVmdCIsInBvcyIsInRvcCIsImxlZnQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJsZWZ0T3JSaWdodCIsIndpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjYW5Vc2VET00iLCJsaXN0ZW5lcklkQ291bnRlciIsInN1YnNjcmliZSIsImZuIiwiaWQiLCJkZWZhdWx0TW9kYWxTdHlsZSIsImNvbnRlbnQiLCJib3JkZXIiLCJib3R0b20iLCJvdmVybGF5IiwiYmFja2dyb3VuZENvbG9yIiwiV0lORE9XX1BBRCIsIm5vb3AiLCJQb3J0YWxlZCIsImlzVmlzaWJsZSIsImNoaWxkIiwiY3VycmVudCIsImVsZW1lbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJwcm9wcyIsInN0YXRlIiwic2V0U3RhdGUiLCJ1bnN1YnNjcmliZSIsImhhbmRsZVNjcm9sbCIsInByZXZQcm9wcyIsImRpZE9wZW4iLCJpc09wZW5lZCIsImRpZENsb3NlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX3VubW91bnRlZCIsIkJvb2xlYW4iLCJDb21wIiwiY29tcG9uZW50Iiwib3ZlcmxheVpJbmRleCIsIm9uQ2xvc2UiLCJjaGlsZHJlbiIsIm1vZGFsUHJvcHMiLCJtb2RhbFN0eWxlIiwibmV3TW9kYWxTdHlsZSIsInpJbmRleCIsImNvbnRleHQiLCJwb3NpdGlvbiIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwidGhlbWUiLCJ0cmFuc2l0aW9uRmFzdCIsIm1hcmdpblRvcCIsImhhc0Vycm9yIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsRUFBbEI7O0FBRUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLFNBQU1DLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxTQUFaLEVBQXVCSSxPQUF2QixDQUErQixVQUFBQyxHQUFHO0FBQUEsV0FBSUwsU0FBUyxDQUFDSyxHQUFELENBQVQsRUFBSjtBQUFBLEdBQWxDLENBQU47QUFBQSxDQUF2Qjs7QUFFQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsU0FBTztBQUMzQkMsSUFBQUEsQ0FBQyxFQUNDQyxtQkFBT0MsV0FBUCxLQUF1QkMsU0FBdkIsR0FDSUYsbUJBQU9DLFdBRFgsR0FFSSxDQUFDRSxRQUFRLENBQUNDLGVBQVQsSUFBNEJELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxVQUExQyxJQUF3REgsUUFBUSxDQUFDRSxJQUFsRSxFQUF3RUUsVUFKbkQ7QUFLM0JDLElBQUFBLENBQUMsRUFDQ1IsbUJBQU9TLFdBQVAsS0FBdUJQLFNBQXZCLEdBQ0lGLG1CQUFPUyxXQURYLEdBRUksQ0FBQ04sUUFBUSxDQUFDQyxlQUFULElBQTRCRCxRQUFRLENBQUNFLElBQVQsQ0FBY0MsVUFBMUMsSUFBd0RILFFBQVEsQ0FBQ0UsSUFBbEUsRUFBd0VLO0FBUm5E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QSxHQUFHLEVBQUUsTUFBSSxDQUFDd0IsS0FEWjtBQUVFLFVBQUEsS0FBSyxFQUFFO0FBQ0wwQixZQUFBQSxRQUFRLEVBQUUsVUFETDtBQUVMRixZQUFBQSxNQUFNLEVBQUVOLGFBQWEsR0FBR0EsYUFBYSxHQUFHLENBQW5CLEdBQXVCO0FBRnZDO0FBRlQsV0FPR0UsUUFQSCxDQVpGLENBYkYsQ0FETyxHQXFDTCxJQXRDTixDQURNO0FBQUEsT0FEVixDQURGO0FBOENEOzs7V0E1SkQ7QUFDQTtBQUNBO0FBQ0Esd0NBQWtDO0FBQ2hDLGFBQU87QUFBQ1ksUUFBQUEsUUFBUSxFQUFFO0FBQVgsT0FBUDtBQUNEOzs7RUFOb0JDLGdCOztpQ0FBakJuQyxRLGtCQVFrQjtBQUNwQm1CLEVBQUFBLFNBQVMsRUFBRSxLQURTO0FBRXBCRSxFQUFBQSxPQUFPLEVBQUV0QixJQUZXO0FBR3BCZ0MsRUFBQUEsS0FBSyxFQUFMQTtBQUhvQixDOztlQXdKVCxpQ0FBVS9CLFFBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgY3JlYXRlUmVmLCBFbGVtZW50VHlwZSwgUHJvcHNXaXRoQ2hpbGRyZW59IGZyb20gJ3JlYWN0JztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xuaW1wb3J0IGlzRXF1YWwgZnJvbSAnbG9kYXNoLmlzZXF1YWwnO1xuXG5pbXBvcnQge2NhblVzZURPTX0gZnJvbSAnZXhlbnYnO1xuaW1wb3J0IHt3aXRoVGhlbWV9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Um9vdENvbnRleHR9IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcbmltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQge3RoZW1lfSBmcm9tICdAa2VwbGVyLmdsL3N0eWxlcyc7XG5cbmNvbnN0IGxpc3RlbmVycyA9IHt9O1xuXG5jb25zdCBzdGFydExpc3RlbmluZyA9ICgpID0+IE9iamVjdC5rZXlzKGxpc3RlbmVycykuZm9yRWFjaChrZXkgPT4gbGlzdGVuZXJzW2tleV0oKSk7XG5cbmNvbnN0IGdldFBhZ2VPZmZzZXQgPSAoKSA9PiAoe1xuICB4OlxuICAgIHdpbmRvdy5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkXG4gICAgICA/IHdpbmRvdy5wYWdlWE9mZnNldFxuICAgICAgOiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSB8fCBkb2N1bWVudC5ib2R5KS5zY3JvbGxMZWZ0LFxuICB5OlxuICAgIHdpbmRvdy5wYWdlWU9mZnNldCAhPT0gdW5kZWZpbmVkXG4gICAgICA/IHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgOiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSB8fCBkb2N1bWVudC5ib2R5KS5zY3JvbGxUb3Bcbn0pO1xuXG5jb25zdCBhZGRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmJvZHkpXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXdoZWVsJywgZGVib3VuY2Uoc3RhcnRMaXN0ZW5pbmcsIDEwMCwge2xlYWRpbmc6IHRydWV9KSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBkZWJvdW5jZShzdGFydExpc3RlbmluZywgNTAsIHtsZWFkaW5nOiB0cnVlfSkpO1xufTtcblxuaW50ZXJmYWNlIEdldENoaWxkUG9zUHJvcHMge1xuICBvZmZzZXRzOiBQYXJ0aWFsPHtcbiAgICB0b3BPZmZzZXQ6IG51bWJlcjtcbiAgICBsZWZ0T2Zmc2V0OiBudW1iZXI7XG4gICAgcmlnaHRPZmZzZXQ6IG51bWJlcjtcbiAgfT47XG4gIHJlY3Q6IERPTVJlY3Q7XG4gIGNoaWxkUmVjdDogRE9NUmVjdDtcbiAgcGFnZU9mZnNldDoge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gIH07XG4gIHBhZGRpbmc6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNvbnN0IGdldENoaWxkUG9zID0gKHtvZmZzZXRzLCByZWN0LCBjaGlsZFJlY3QsIHBhZ2VPZmZzZXQsIHBhZGRpbmd9OiBHZXRDaGlsZFBvc1Byb3BzKSA9PiB7XG4gIGNvbnN0IHt0b3BPZmZzZXQsIGxlZnRPZmZzZXQsIHJpZ2h0T2Zmc2V0fSA9IG9mZnNldHM7XG5cbiAgY29uc3QgYW5jaG9yTGVmdCA9IGxlZnRPZmZzZXQgIT09IHVuZGVmaW5lZDtcbiAgY29uc3QgcG9zID0ge1xuICAgIHRvcDogcGFnZU9mZnNldC55ICsgcmVjdC50b3AgKyAodG9wT2Zmc2V0IHx8IDApLFxuICAgIC4uLihhbmNob3JMZWZ0XG4gICAgICA/IHtsZWZ0OiBwYWdlT2Zmc2V0LnggKyByZWN0LmxlZnQgKyBsZWZ0T2Zmc2V0IX1cbiAgICAgIDoge3JpZ2h0OiB3aW5kb3cuaW5uZXJXaWR0aCAtIHJlY3QucmlnaHQgLSBwYWdlT2Zmc2V0LnggKyAocmlnaHRPZmZzZXQgfHwgMCl9KVxuICB9O1xuXG4gIGNvbnN0IGxlZnRPclJpZ2h0ID0gYW5jaG9yTGVmdCA/ICdsZWZ0JyA6ICdyaWdodCc7XG5cbiAgaWYgKHBvc1tsZWZ0T3JSaWdodF0gJiYgcG9zW2xlZnRPclJpZ2h0XSA8IDApIHtcbiAgICBwb3NbbGVmdE9yUmlnaHRdID0gcGFkZGluZztcbiAgfSBlbHNlIGlmIChwb3NbbGVmdE9yUmlnaHRdICYmIHBvc1tsZWZ0T3JSaWdodF0gKyBjaGlsZFJlY3Qud2lkdGggPiB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgIHBvc1tsZWZ0T3JSaWdodF0gPSB3aW5kb3cuaW5uZXJXaWR0aCAtIGNoaWxkUmVjdC53aWR0aCAtIHBhZGRpbmc7XG4gIH1cblxuICBpZiAocG9zLnRvcCA8IDApIHtcbiAgICBwb3MudG9wID0gcGFkZGluZztcbiAgfSBlbHNlIGlmIChwb3MudG9wICsgY2hpbGRSZWN0LmhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgIHBvcy50b3AgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBjaGlsZFJlY3QuaGVpZ2h0IC0gcGFkZGluZztcbiAgfVxuXG4gIHJldHVybiBwb3M7XG59O1xuXG5pZiAoY2FuVXNlRE9NKSB7XG4gIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgYWRkRXZlbnRMaXN0ZW5lcnMpO1xuICB9XG59XG5cbmxldCBsaXN0ZW5lcklkQ291bnRlciA9IDA7XG5mdW5jdGlvbiBzdWJzY3JpYmUoZm4pIHtcbiAgbGlzdGVuZXJJZENvdW50ZXIgKz0gMTtcbiAgY29uc3QgaWQgPSBsaXN0ZW5lcklkQ291bnRlcjtcbiAgbGlzdGVuZXJzW2lkXSA9IGZuO1xuICByZXR1cm4gKCkgPT4gZGVsZXRlIGxpc3RlbmVyc1tpZF07XG59XG5cbmNvbnN0IGRlZmF1bHRNb2RhbFN0eWxlID0ge1xuICBjb250ZW50OiB7XG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm9yZGVyOiAwLFxuICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgcGFkZGluZzogJzBweCAwcHggMHB4IDBweCdcbiAgfSxcbiAgb3ZlcmxheToge1xuICAgIHJpZ2h0OiAnYXV0bycsXG4gICAgYm90dG9tOiAnYXV0bycsXG4gICAgd2lkdGg6ICcxMDB2dycsXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMCknXG4gIH1cbn07XG5cbmNvbnN0IFdJTkRPV19QQUQgPSA0MDtcblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG50eXBlIFBvcnRhbGVkUHJvcHMgPSBQcm9wc1dpdGhDaGlsZHJlbjx7XG4gIGNvbXBvbmVudDogRWxlbWVudFR5cGU7XG4gIG9uQ2xvc2U/OiAoXG4gICAgZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8RWxlbWVudCwgZ2xvYmFsVGhpcy5Nb3VzZUV2ZW50PiB8IFJlYWN0LktleWJvYXJkRXZlbnQ8RWxlbWVudD5cbiAgKSA9PiB2b2lkO1xuICB0aGVtZT86IGFueTtcbiAgaXNPcGVuZWQ/OiBib29sZWFuO1xuICB0b3A6IG51bWJlcjtcbiAgbGVmdD86IG51bWJlcjtcbiAgcmlnaHQ/OiBudW1iZXI7XG4gIG92ZXJsYXlaSW5kZXg/OiBudW1iZXI7XG4gIG1vZGFsUHJvcHM/OiBQYXJ0aWFsPFJlYWN0TW9kYWwuUHJvcHM+O1xuICBtb2RhbFN0eWxlPzogUGFydGlhbDx0eXBlb2YgZGVmYXVsdE1vZGFsU3R5bGU+O1xufT47XG5cbmludGVyZmFjZSBQb3J0YWxlZFN0YXRlIHtcbiAgcG9zOlxuICAgIHwge1xuICAgICAgICBsZWZ0OiBudW1iZXI7XG4gICAgICAgIHRvcDogbnVtYmVyO1xuICAgICAgfVxuICAgIHwge1xuICAgICAgICByaWdodDogbnVtYmVyO1xuICAgICAgICB0b3A6IG51bWJlcjtcbiAgICAgIH1cbiAgICB8IG51bGw7XG4gIGlzVmlzaWJsZTogYm9vbGVhbjtcbn1cblxuY2xhc3MgUG9ydGFsZWQgZXh0ZW5kcyBDb21wb25lbnQ8UG9ydGFsZWRQcm9wcywgUG9ydGFsZWRTdGF0ZT4ge1xuICAvLyBNYWtlIFBvcnRhbGVkIGEgY29tcG9uZW50IHdpdGggRXJyb3IgQm91bmRhcnksIHNvIFJlYWN0IGNhbiByZWNyZWF0ZVxuICAvLyB0aGlzIGNvbXBvbmVudCBpZiB0aGUgY2hpbGQgJ0NvbG9yUGlja2VyJyB0aHJvd3MgY3Jvc3Mtb3JpZ2luIGVycm9yLlxuICAvLyBzZWUgZnVuY3Rpb24gY29tcG9uZW50RGlkQ2F0Y2goKVxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKCkge1xuICAgIHJldHVybiB7aGFzRXJyb3I6IHRydWV9O1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb21wb25lbnQ6ICdkaXYnLFxuICAgIG9uQ2xvc2U6IG5vb3AsXG4gICAgdGhlbWVcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBwb3M6IG51bGwsXG4gICAgaXNWaXNpYmxlOiBmYWxzZVxuICB9O1xuXG4gIHVuc3Vic2NyaWJlOiAoKCkgPT4gYm9vbGVhbikgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIF91bm1vdW50ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyByZWxhdGl2ZVxuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUodGhpcy5oYW5kbGVTY3JvbGwpO1xuICAgIHRoaXMuaGFuZGxlU2Nyb2xsKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgY29uc3QgZGlkT3BlbiA9IHRoaXMucHJvcHMuaXNPcGVuZWQgJiYgIXByZXZQcm9wcy5pc09wZW5lZDtcbiAgICBjb25zdCBkaWRDbG9zZSA9ICF0aGlzLnByb3BzLmlzT3BlbmVkICYmIHByZXZQcm9wcy5pc09wZW5lZDtcbiAgICBpZiAoZGlkT3BlbiB8fCBkaWRDbG9zZSkge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl91bm1vdW50ZWQpIHJldHVybjtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNWaXNpYmxlOiBCb29sZWFuKGRpZE9wZW4pfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmhhbmRsZVNjcm9sbCgpO1xuICB9XG5cbiAgLy8gQ29sb3JQaWNrZXIgd2lsbCB0aHJvdyBhIGNyb3NzLW9yaWdpbiBlcnJvciB3aGVuIGl0IGlzIGNsb3NlZFxuICAvLyB3aGVuIHRoZSBhcHAgaXMgd2l0aGluIGFuIGlmcmFtZS5cbiAgLy8gVGhpcyBpcyBhIGtub3duIGlzc3VlIG9mIHJlYWN0LWNvbG9yIGNvbXBvbmVudDpcbiAgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vY2FzZXNhbmRiZXJnL3JlYWN0LWNvbG9yL2lzc3Vlcy84MDZcbiAgY29tcG9uZW50RGlkQ2F0Y2goKSB7XG4gICAgLy8gRG8gbm90aGluZyBoZXJlLCBzaW5jZSBSZWFjdCB3aWxsIHRyeSB0byByZWNyZWF0ZSB0aGlzIGNvbXBvbmVudFxuICAgIC8vIHRyZWUgZnJvbSBzY3JhdGNoIHVzaW5nIHRoZSBlcnJvciBib3VuZGFyeSwgd2hpY2ggaXMgdGhpcyBjb21wb25lbnRcbiAgICAvLyBpdHNlbGYuIFRoaXMgaXMgYSB0ZW1wb3JhbCBmaXggZm9yIGEgY3Jhc2guXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLl91bm1vdW50ZWQgPSB0cnVlO1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBlbGVtZW50ID0gY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xuICBjaGlsZCA9IGNyZWF0ZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuICBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuY2hpbGQuY3VycmVudCAmJiB0aGlzLmVsZW1lbnQuY3VycmVudCkge1xuICAgICAgY29uc3QgcmVjdCA9IHRoaXMuZWxlbWVudC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgY2hpbGRSZWN0ID0gdGhpcy5jaGlsZC5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgcGFnZU9mZnNldCA9IGdldFBhZ2VPZmZzZXQoKTtcbiAgICAgIGNvbnN0IHt0b3A6IHRvcE9mZnNldCwgbGVmdDogbGVmdE9mZnNldCA9IDAsIHJpZ2h0OiByaWdodE9mZnNldH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBjb25zdCBwb3MgPSBnZXRDaGlsZFBvcyh7XG4gICAgICAgIG9mZnNldHM6IHt0b3BPZmZzZXQsIGxlZnRPZmZzZXQsIHJpZ2h0T2Zmc2V0fSxcbiAgICAgICAgcmVjdCxcbiAgICAgICAgY2hpbGRSZWN0LFxuICAgICAgICBwYWdlT2Zmc2V0LFxuICAgICAgICBwYWRkaW5nOiBXSU5ET1dfUEFEXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFpc0VxdWFsKHBvcywgdGhpcy5zdGF0ZS5wb3MpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Bvc30pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgLy8gcmVsYXRpdmVcbiAgICAgIGNvbXBvbmVudDogQ29tcCxcbiAgICAgIG92ZXJsYXlaSW5kZXgsXG4gICAgICBpc09wZW5lZCxcbiAgICAgIG9uQ2xvc2UsXG5cbiAgICAgIC8vIE1vZGFsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIG1vZGFsUHJvcHMsXG4gICAgICBtb2RhbFN0eWxlID0ge31cbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHtpc1Zpc2libGUsIHBvc30gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgbmV3TW9kYWxTdHlsZSA9IHtcbiAgICAgIC4uLmRlZmF1bHRNb2RhbFN0eWxlLFxuICAgICAgY29udGVudDoge1xuICAgICAgICAuLi4obW9kYWxTdHlsZS5jb250ZW50IHx8IHt9KVxuICAgICAgfSxcbiAgICAgIG92ZXJsYXk6IHtcbiAgICAgICAgLi4uZGVmYXVsdE1vZGFsU3R5bGUub3ZlcmxheSxcbiAgICAgICAgLi4uKG1vZGFsU3R5bGUub3ZlcmxheSB8fCB7fSksXG4gICAgICAgIC8vIG5lZWRzIHRvIGJlIG9uIHRvcCBvZiBleGlzdGluZyBtb2RhbFxuICAgICAgICB6SW5kZXg6IG92ZXJsYXlaSW5kZXggfHwgOTk5OVxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJvb3RDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICB7Y29udGV4dCA9PiAoXG4gICAgICAgICAgPENvbXAgcmVmPXt0aGlzLmVsZW1lbnR9PlxuICAgICAgICAgICAge2lzT3BlbmVkID8gKFxuICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1wb3J0YWxcIlxuICAgICAgICAgICAgICAgIHsuLi5tb2RhbFByb3BzfVxuICAgICAgICAgICAgICAgIGFyaWFIaWRlQXBwPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBpc09wZW5cbiAgICAgICAgICAgICAgICBzdHlsZT17bmV3TW9kYWxTdHlsZX1cbiAgICAgICAgICAgICAgICBwYXJlbnRTZWxlY3Rvcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8gUmVhY3QgbW9kYWwgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LW1vZGFsL2lzc3Vlcy83NjlcbiAgICAgICAgICAgICAgICAgIC8vIGZhaWxlZCB0byBleGVjdXRlIHJlbW92ZUNoaWxkIG9uIHBhcmVudCBub2RlIHdoZW4gaXQgaXMgYWxyZWFkeSB1bm1vdW50ZWRcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoY29udGV4dCAmJiBjb250ZXh0LmN1cnJlbnQpIHx8IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17b25DbG9zZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvcnRhbGVkLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAga2V5PVwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogaXNWaXNpYmxlID8gMSA6IDAsXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRoaXMucHJvcHMudGhlbWUudHJhbnNpdGlvbkZhc3QsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogaXNWaXNpYmxlID8gJzBweCcgOiAnMTRweCcsXG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgLi4ucG9zXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLmNoaWxkfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogb3ZlcmxheVpJbmRleCA/IG92ZXJsYXlaSW5kZXggKyAxIDogMTAwMDBcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8L0NvbXA+XG4gICAgICAgICl9XG4gICAgICA8L1Jvb3RDb250ZXh0LkNvbnN1bWVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFBvcnRhbGVkKTtcbiJdfQ==