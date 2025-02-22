"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reselect = require("reselect");

var _context = _interopRequireDefault(require("../context"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var identity = function identity(state) {
  return state;
};

var mergeSelectors = function mergeSelectors(parentSelector, childSelector) {
  return function (state) {
    return childSelector(parentSelector(state));
  };
}; // store the parent selector in the parent context
// and return the parent component
// when a selector is passed to a container component,
// it will be stored in the context and passed down to child components,
// as well as prop to the given component


var withLocalSelector = function withLocalSelector(ParentComponent) {
  var WithConnectSelector = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(WithConnectSelector, _Component);

    var _super = _createSuper(WithConnectSelector);

    function WithConnectSelector() {
      var _this;

      (0, _classCallCheck2["default"])(this, WithConnectSelector);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectorFromContext", function (_, ctx) {
        return ctx.selector ? ctx.selector : identity;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectorFromProps", function (props, _) {
        return props.selector ? props.selector : identity;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "idFromProps", function (props, _) {
        return props.id;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "computedSelector", (0, _reselect.createSelector)(_this.selectorFromContext, _this.selectorFromProps, function (ctx, props) {
        return mergeSelectors(ctx, props);
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "contextSelector", (0, _reselect.createSelector)(_this.computedSelector, _this.idFromProps, function (selector, id) {
        return {
          selector: selector,
          id: id
        };
      }));
      return _this;
    }

    (0, _createClass2["default"])(WithConnectSelector, [{
      key: "render",
      value: function render() {
        var computedContext = this.contextSelector(this.props, this.context);
        return /*#__PURE__*/_react["default"].createElement(_context["default"].Provider, {
          value: computedContext
        }, /*#__PURE__*/_react["default"].createElement(ParentComponent, (0, _extends2["default"])({}, this.props, {
          selector: computedContext.selector
        })));
      }
    }]);
    return WithConnectSelector;
  }(_react.Component);

  (0, _defineProperty2["default"])(WithConnectSelector, "contextType", _context["default"]);
  return WithConnectSelector;
};

var _default = withLocalSelector;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb25uZWN0L3dpdGgtbG9jYWwtc2VsZWN0b3IudHN4Il0sIm5hbWVzIjpbImlkZW50aXR5Iiwic3RhdGUiLCJtZXJnZVNlbGVjdG9ycyIsInBhcmVudFNlbGVjdG9yIiwiY2hpbGRTZWxlY3RvciIsIndpdGhMb2NhbFNlbGVjdG9yIiwiUGFyZW50Q29tcG9uZW50IiwiV2l0aENvbm5lY3RTZWxlY3RvciIsIl8iLCJjdHgiLCJzZWxlY3RvciIsInByb3BzIiwiaWQiLCJzZWxlY3RvckZyb21Db250ZXh0Iiwic2VsZWN0b3JGcm9tUHJvcHMiLCJjb21wdXRlZFNlbGVjdG9yIiwiaWRGcm9tUHJvcHMiLCJjb21wdXRlZENvbnRleHQiLCJjb250ZXh0U2VsZWN0b3IiLCJjb250ZXh0IiwiQ29tcG9uZW50IiwiS2VwbGVyR2xDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUdBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFKO0FBQUEsQ0FBdEI7O0FBRUEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxjQUFELEVBQWlCQyxhQUFqQjtBQUFBLFNBQW1DLFVBQUFILEtBQUs7QUFBQSxXQUM3REcsYUFBYSxDQUFDRCxjQUFjLENBQUNGLEtBQUQsQ0FBZixDQURnRDtBQUFBLEdBQXhDO0FBQUEsQ0FBdkIsQyxDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1JLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FDeEJDLGVBRHdCLEVBRW1EO0FBQUEsTUFDckVDLG1CQURxRTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsOEdBSW5ELFVBQUNDLENBQUQsRUFBSUMsR0FBSjtBQUFBLGVBQWFBLEdBQUcsQ0FBQ0MsUUFBSixHQUFlRCxHQUFHLENBQUNDLFFBQW5CLEdBQThCVixRQUEzQztBQUFBLE9BSm1EO0FBQUEsNEdBS3JELFVBQUNXLEtBQUQsRUFBUUgsQ0FBUjtBQUFBLGVBQWVHLEtBQUssQ0FBQ0QsUUFBTixHQUFpQkMsS0FBSyxDQUFDRCxRQUF2QixHQUFrQ1YsUUFBakQ7QUFBQSxPQUxxRDtBQUFBLHNHQU0zRCxVQUFDVyxLQUFELEVBQVFILENBQVI7QUFBQSxlQUFjRyxLQUFLLENBQUNDLEVBQXBCO0FBQUEsT0FOMkQ7QUFBQSwyR0FPdEQsOEJBQ2pCLE1BQUtDLG1CQURZLEVBRWpCLE1BQUtDLGlCQUZZLEVBR2pCLFVBQUNMLEdBQUQsRUFBTUUsS0FBTjtBQUFBLGVBQWdCVCxjQUFjLENBQUNPLEdBQUQsRUFBTUUsS0FBTixDQUE5QjtBQUFBLE9BSGlCLENBUHNEO0FBQUEsMEdBYXZELDhCQUFlLE1BQUtJLGdCQUFwQixFQUFzQyxNQUFLQyxXQUEzQyxFQUF3RCxVQUFDTixRQUFELEVBQVdFLEVBQVg7QUFBQSxlQUFtQjtBQUMzRkYsVUFBQUEsUUFBUSxFQUFSQSxRQUQyRjtBQUUzRkUsVUFBQUEsRUFBRSxFQUFGQTtBQUYyRixTQUFuQjtBQUFBLE9BQXhELENBYnVEO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsYUFrQnpFLGtCQUFTO0FBQ1AsWUFBTUssZUFBZSxHQUFHLEtBQUtDLGVBQUwsQ0FBcUIsS0FBS1AsS0FBMUIsRUFBaUMsS0FBS1EsT0FBdEMsQ0FBeEI7QUFDQSw0QkFDRSxnQ0FBQyxtQkFBRCxDQUFpQixRQUFqQjtBQUEwQixVQUFBLEtBQUssRUFBRUY7QUFBakMsd0JBQ0UsZ0NBQUMsZUFBRCxnQ0FBcUIsS0FBS04sS0FBMUI7QUFBaUMsVUFBQSxRQUFRLEVBQUVNLGVBQWUsQ0FBQ1A7QUFBM0QsV0FERixDQURGO0FBS0Q7QUF6QndFO0FBQUE7QUFBQSxJQUN6Q1UsZ0JBRHlDOztBQUFBLG1DQUNyRWIsbUJBRHFFLGlCQUVwRGMsbUJBRm9EO0FBNEIzRSxTQUFPZCxtQkFBUDtBQUNELENBL0JEOztlQWlDZUYsaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCBLZXBsZXJHbENvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5pbXBvcnQge0tlcGxlckdsU3RhdGV9IGZyb20gJ0BrZXBsZXIuZ2wvcmVkdWNlcnMnO1xuXG5jb25zdCBpZGVudGl0eSA9IHN0YXRlID0+IHN0YXRlO1xuXG5jb25zdCBtZXJnZVNlbGVjdG9ycyA9IChwYXJlbnRTZWxlY3RvciwgY2hpbGRTZWxlY3RvcikgPT4gc3RhdGUgPT5cbiAgY2hpbGRTZWxlY3RvcihwYXJlbnRTZWxlY3RvcihzdGF0ZSkpO1xuXG4vLyBzdG9yZSB0aGUgcGFyZW50IHNlbGVjdG9yIGluIHRoZSBwYXJlbnQgY29udGV4dFxuLy8gYW5kIHJldHVybiB0aGUgcGFyZW50IGNvbXBvbmVudFxuLy8gd2hlbiBhIHNlbGVjdG9yIGlzIHBhc3NlZCB0byBhIGNvbnRhaW5lciBjb21wb25lbnQsXG4vLyBpdCB3aWxsIGJlIHN0b3JlZCBpbiB0aGUgY29udGV4dCBhbmQgcGFzc2VkIGRvd24gdG8gY2hpbGQgY29tcG9uZW50cyxcbi8vIGFzIHdlbGwgYXMgcHJvcCB0byB0aGUgZ2l2ZW4gY29tcG9uZW50XG5cbmNvbnN0IHdpdGhMb2NhbFNlbGVjdG9yID0gPFAgZXh0ZW5kcyB7fT4oXG4gIFBhcmVudENvbXBvbmVudDogUmVhY3QuQ29tcG9uZW50VHlwZTxQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxQICYge3NlbGVjdG9yOiAoLi4uYXJnczogYW55W10pID0+IEtlcGxlckdsU3RhdGV9PiA9PiB7XG4gIGNsYXNzIFdpdGhDb25uZWN0U2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQ8UCAmIHtzZWxlY3RvcjogKC4uLmFyZ3M6IGFueVtdKSA9PiBLZXBsZXJHbFN0YXRlfT4ge1xuICAgIHN0YXRpYyBjb250ZXh0VHlwZSA9IEtlcGxlckdsQ29udGV4dDtcblxuICAgIHNlbGVjdG9yRnJvbUNvbnRleHQgPSAoXywgY3R4KSA9PiAoY3R4LnNlbGVjdG9yID8gY3R4LnNlbGVjdG9yIDogaWRlbnRpdHkpO1xuICAgIHNlbGVjdG9yRnJvbVByb3BzID0gKHByb3BzLCBfKSA9PiAocHJvcHMuc2VsZWN0b3IgPyBwcm9wcy5zZWxlY3RvciA6IGlkZW50aXR5KTtcbiAgICBpZEZyb21Qcm9wcyA9IChwcm9wcywgXykgPT4gcHJvcHMuaWQ7XG4gICAgY29tcHV0ZWRTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgdGhpcy5zZWxlY3RvckZyb21Db250ZXh0LFxuICAgICAgdGhpcy5zZWxlY3RvckZyb21Qcm9wcyxcbiAgICAgIChjdHgsIHByb3BzKSA9PiBtZXJnZVNlbGVjdG9ycyhjdHgsIHByb3BzKVxuICAgICk7XG5cbiAgICBjb250ZXh0U2VsZWN0b3IgPSBjcmVhdGVTZWxlY3Rvcih0aGlzLmNvbXB1dGVkU2VsZWN0b3IsIHRoaXMuaWRGcm9tUHJvcHMsIChzZWxlY3RvciwgaWQpID0+ICh7XG4gICAgICBzZWxlY3RvcixcbiAgICAgIGlkXG4gICAgfSkpO1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3QgY29tcHV0ZWRDb250ZXh0ID0gdGhpcy5jb250ZXh0U2VsZWN0b3IodGhpcy5wcm9wcywgdGhpcy5jb250ZXh0KTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxLZXBsZXJHbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbXB1dGVkQ29udGV4dH0+XG4gICAgICAgICAgPFBhcmVudENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gc2VsZWN0b3I9e2NvbXB1dGVkQ29udGV4dC5zZWxlY3Rvcn0gLz5cbiAgICAgICAgPC9LZXBsZXJHbENvbnRleHQuUHJvdmlkZXI+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBXaXRoQ29ubmVjdFNlbGVjdG9yO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aExvY2FsU2VsZWN0b3I7XG4iXX0=