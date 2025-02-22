"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _headless = _interopRequireDefault(require("@tippyjs/react/headless"));

var _utils = require("@kepler.gl/utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var isTestEnv = (0, _utils.isTest)();
/**
 * Lazy mounting tippy content
 * https://gist.github.com/atomiks/520f4b0c7b537202a23a3059d4eec908
 */
// eslint-disable-next-line react/display-name

var LazyTippy = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _useState = (0, _react.useState)(isTestEnv),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      mounted = _useState2[0],
      setMounted = _useState2[1];

  var lazyPlugin = {
    fn: function fn() {
      return {
        onMount: function onMount() {
          return setMounted(true);
        },
        onHidden: function onHidden() {
          return setMounted(false);
        }
      };
    }
  };

  var computedProps = _objectSpread({}, props);

  computedProps.plugins = [lazyPlugin].concat((0, _toConsumableArray2["default"])(props.plugins || []));

  if (props.render) {
    computedProps.render = function () {
      return mounted ? props.render.apply(props, arguments) : '';
    };
  } else {
    computedProps.content = mounted ? props.content : '';
  }

  return /*#__PURE__*/_react["default"].createElement(_headless["default"], (0, _extends2["default"])({}, computedProps, {
    ref: ref
  }));
});
var _default = LazyTippy;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tYXAvbGF6eS10aXBweS50c3giXSwibmFtZXMiOlsiaXNUZXN0RW52IiwiTGF6eVRpcHB5IiwicHJvcHMiLCJyZWYiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsImxhenlQbHVnaW4iLCJmbiIsIm9uTW91bnQiLCJvbkhpZGRlbiIsImNvbXB1dGVkUHJvcHMiLCJwbHVnaW5zIiwicmVuZGVyIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsb0JBQWxCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxTQUFTLGdCQUFHLHVCQUFXLFVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUFBLGtCQUNiLHFCQUFTSCxTQUFULENBRGE7QUFBQTtBQUFBLE1BQ3BDSSxPQURvQztBQUFBLE1BQzNCQyxVQUQyQjs7QUFHM0MsTUFBTUMsVUFBVSxHQUFHO0FBQ2pCQyxJQUFBQSxFQUFFLEVBQUU7QUFBQSxhQUFPO0FBQ1RDLFFBQUFBLE9BQU8sRUFBRTtBQUFBLGlCQUFNSCxVQUFVLENBQUMsSUFBRCxDQUFoQjtBQUFBLFNBREE7QUFFVEksUUFBQUEsUUFBUSxFQUFFO0FBQUEsaUJBQU1KLFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUE7QUFGRCxPQUFQO0FBQUE7QUFEYSxHQUFuQjs7QUFPQSxNQUFNSyxhQUFhLHFCQUFPUixLQUFQLENBQW5COztBQUVBUSxFQUFBQSxhQUFhLENBQUNDLE9BQWQsSUFBeUJMLFVBQXpCLDZDQUF5Q0osS0FBSyxDQUFDUyxPQUFOLElBQWlCLEVBQTFEOztBQUVBLE1BQUlULEtBQUssQ0FBQ1UsTUFBVixFQUFrQjtBQUNoQkYsSUFBQUEsYUFBYSxDQUFDRSxNQUFkLEdBQXVCO0FBQUEsYUFBY1IsT0FBTyxHQUFHRixLQUFLLENBQUNVLE1BQU4sT0FBQVYsS0FBSyxZQUFSLEdBQTJCLEVBQWhEO0FBQUEsS0FBdkI7QUFDRCxHQUZELE1BRU87QUFDTFEsSUFBQUEsYUFBYSxDQUFDRyxPQUFkLEdBQXdCVCxPQUFPLEdBQUdGLEtBQUssQ0FBQ1csT0FBVCxHQUFtQixFQUFsRDtBQUNEOztBQUVELHNCQUFPLGdDQUFDLG9CQUFELGdDQUFXSCxhQUFYO0FBQTBCLElBQUEsR0FBRyxFQUFFUDtBQUEvQixLQUFQO0FBQ0QsQ0FyQmlCLENBQWxCO2VBdUJlRixTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCBmb3J3YXJkUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGlwcHkgZnJvbSAnQHRpcHB5anMvcmVhY3QvaGVhZGxlc3MnO1xuaW1wb3J0IHtpc1Rlc3R9IGZyb20gJ0BrZXBsZXIuZ2wvdXRpbHMnO1xuXG5jb25zdCBpc1Rlc3RFbnYgPSBpc1Rlc3QoKTtcblxuLyoqXG4gKiBMYXp5IG1vdW50aW5nIHRpcHB5IGNvbnRlbnRcbiAqIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2F0b21pa3MvNTIwZjRiMGM3YjUzNzIwMmEyM2EzMDU5ZDRlZWM5MDhcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2Rpc3BsYXktbmFtZVxuY29uc3QgTGF6eVRpcHB5ID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShpc1Rlc3RFbnYpO1xuXG4gIGNvbnN0IGxhenlQbHVnaW4gPSB7XG4gICAgZm46ICgpID0+ICh7XG4gICAgICBvbk1vdW50OiAoKSA9PiBzZXRNb3VudGVkKHRydWUpLFxuICAgICAgb25IaWRkZW46ICgpID0+IHNldE1vdW50ZWQoZmFsc2UpXG4gICAgfSlcbiAgfTtcblxuICBjb25zdCBjb21wdXRlZFByb3BzID0gey4uLnByb3BzfTtcblxuICBjb21wdXRlZFByb3BzLnBsdWdpbnMgPSBbbGF6eVBsdWdpbiwgLi4uKHByb3BzLnBsdWdpbnMgfHwgW10pXTtcblxuICBpZiAocHJvcHMucmVuZGVyKSB7XG4gICAgY29tcHV0ZWRQcm9wcy5yZW5kZXIgPSAoLi4uYXJncykgPT4gKG1vdW50ZWQgPyBwcm9wcy5yZW5kZXIoLi4uYXJncykgOiAnJyk7XG4gIH0gZWxzZSB7XG4gICAgY29tcHV0ZWRQcm9wcy5jb250ZW50ID0gbW91bnRlZCA/IHByb3BzLmNvbnRlbnQgOiAnJztcbiAgfVxuXG4gIHJldHVybiA8VGlwcHkgey4uLmNvbXB1dGVkUHJvcHN9IHJlZj17cmVmfSAvPjtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXp5VGlwcHk7XG4iXX0=