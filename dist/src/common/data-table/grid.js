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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactVirtualized = require("react-virtualized");

var _lodash = _interopRequireDefault(require("lodash.isequal"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var GridHack = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(GridHack, _PureComponent);

  var _super = _createSuper(GridHack);

  function GridHack() {
    var _this;

    (0, _classCallCheck2["default"])(this, GridHack);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "grid", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_preventScrollBack", function (e) {
      var scrollLeft = _this.props.scrollLeft;

      if (scrollLeft !== undefined && scrollLeft <= 0 && e.deltaX < 0) {
        // Prevent Scroll On Scrollable Elements, avoid browser backward navigation
        // https://alvarotrigo.com/blog/prevent-scroll-on-scrollable-element-js/
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      return;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateRef", function (x) {
      if (!_this.grid && x) {
        var _this$grid, _this$grid$_scrolling;

        _this.grid = x;
        /*
         * This hack exists because we need to add wheel event listener to the div rendered by Grid
         *
         */
        //@ts-expect-error _scrollingContainer not typed in Grid

        (_this$grid = _this.grid) === null || _this$grid === void 0 ? void 0 : (_this$grid$_scrolling = _this$grid._scrollingContainer) === null || _this$grid$_scrolling === void 0 ? void 0 : _this$grid$_scrolling.addEventListener('wheel', _this._preventScrollBack, {
          passive: false
        });
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(GridHack, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(preProps) {
      /*
       * This hack exists because in react-virtualized the
       * _columnWidthGetter is only called in the constructor
       * even though it is reassigned with new props resulting in
       * a new width for cells not being calculated so we must
       * force trigger a resize.
       *
       * https://github.com/bvaughn/react-virtualized/blob/master/source/Grid/Grid.js#L322
       *
       */
      if (!(0, _lodash["default"])(preProps.cellSizeCache, this.props.cellSizeCache)) {
        var _this$grid2;

        (_this$grid2 = this.grid) === null || _this$grid2 === void 0 ? void 0 : _this$grid2.recomputeGridSize();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$grid3, _this$grid3$_scrollin;

      //@ts-expect-error _scrollingContainer not typed in Grid
      (_this$grid3 = this.grid) === null || _this$grid3 === void 0 ? void 0 : (_this$grid3$_scrollin = _this$grid3._scrollingContainer) === null || _this$grid3$_scrollin === void 0 ? void 0 : _this$grid3$_scrollin.removeEventListener('wheel', this._preventScrollBack, {
        passive: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          setGridRef = _this$props.setGridRef,
          rest = (0, _objectWithoutProperties2["default"])(_this$props, ["setGridRef"]);
      return /*#__PURE__*/_react["default"].createElement(_reactVirtualized.Grid, (0, _extends2["default"])({
        ref: function ref(x) {
          if (setGridRef) setGridRef(x);

          _this2._updateRef(x);
        },
        key: "grid-hack"
      }, rest));
    }
  }]);
  return GridHack;
}(_react.PureComponent);

exports["default"] = GridHack;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vZGF0YS10YWJsZS9ncmlkLnRzeCJdLCJuYW1lcyI6WyJHcmlkSGFjayIsImUiLCJzY3JvbGxMZWZ0IiwicHJvcHMiLCJ1bmRlZmluZWQiLCJkZWx0YVgiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsIngiLCJncmlkIiwiX3Njcm9sbGluZ0NvbnRhaW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJfcHJldmVudFNjcm9sbEJhY2siLCJwYXNzaXZlIiwicHJlUHJvcHMiLCJjZWxsU2l6ZUNhY2hlIiwicmVjb21wdXRlR3JpZFNpemUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0R3JpZFJlZiIsInJlc3QiLCJfdXBkYXRlUmVmIiwiUHVyZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7OzZGQUNDLEk7MkdBeUJDLFVBQUFDLENBQUMsRUFBSTtBQUFBLFVBQ2pCQyxVQURpQixHQUNILE1BQUtDLEtBREYsQ0FDakJELFVBRGlCOztBQUV4QixVQUFJQSxVQUFVLEtBQUtFLFNBQWYsSUFBNEJGLFVBQVUsSUFBSSxDQUExQyxJQUErQ0QsQ0FBQyxDQUFDSSxNQUFGLEdBQVcsQ0FBOUQsRUFBaUU7QUFDL0Q7QUFDQTtBQUNBSixRQUFBQSxDQUFDLENBQUNLLGNBQUY7QUFDQUwsUUFBQUEsQ0FBQyxDQUFDTSxlQUFGO0FBQ0EsZUFBTyxLQUFQO0FBQ0Q7O0FBQ0Q7QUFDRCxLO21HQUVZLFVBQUFDLENBQUMsRUFBSTtBQUNoQixVQUFJLENBQUMsTUFBS0MsSUFBTixJQUFjRCxDQUFsQixFQUFxQjtBQUFBOztBQUNuQixjQUFLQyxJQUFMLEdBQVlELENBQVo7QUFDQTtBQUNOO0FBQ0E7QUFDQTtBQUNNOztBQUNBLDRCQUFLQyxJQUFMLG1GQUFXQyxtQkFBWCxnRkFBZ0NDLGdCQUFoQyxDQUFpRCxPQUFqRCxFQUEwRCxNQUFLQyxrQkFBL0QsRUFBbUY7QUFDakZDLFVBQUFBLE9BQU8sRUFBRTtBQUR3RSxTQUFuRjtBQUdEO0FBQ0YsSzs7Ozs7O1dBL0NELDRCQUFtQkMsUUFBbkIsRUFBNkI7QUFDM0I7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSSxVQUFJLENBQUMsd0JBQVFBLFFBQVEsQ0FBQ0MsYUFBakIsRUFBZ0MsS0FBS1osS0FBTCxDQUFXWSxhQUEzQyxDQUFMLEVBQWdFO0FBQUE7O0FBQzlELDRCQUFLTixJQUFMLDREQUFXTyxpQkFBWDtBQUNEO0FBQ0Y7OztXQUVELGdDQUF1QjtBQUFBOztBQUNyQjtBQUNBLDBCQUFLUCxJQUFMLHFGQUFXQyxtQkFBWCxnRkFBZ0NPLG1CQUFoQyxDQUFvRCxPQUFwRCxFQUE2RCxLQUFLTCxrQkFBbEUsRUFBc0Y7QUFDcEZDLFFBQUFBLE9BQU8sRUFBRTtBQUQyRSxPQUF0RjtBQUdEOzs7V0E0QkQsa0JBQVM7QUFBQTs7QUFBQSx3QkFDdUIsS0FBS1YsS0FENUI7QUFBQSxVQUNBZSxVQURBLGVBQ0FBLFVBREE7QUFBQSxVQUNlQyxJQURmO0FBRVAsMEJBQ0UsZ0NBQUMsc0JBQUQ7QUFDRSxRQUFBLEdBQUcsRUFBRSxhQUFBWCxDQUFDLEVBQUk7QUFDUixjQUFJVSxVQUFKLEVBQWdCQSxVQUFVLENBQUNWLENBQUQsQ0FBVjs7QUFDaEIsVUFBQSxNQUFJLENBQUNZLFVBQUwsQ0FBZ0JaLENBQWhCO0FBQ0QsU0FKSDtBQUtFLFFBQUEsR0FBRyxFQUFDO0FBTE4sU0FNTVcsSUFOTixFQURGO0FBVUQ7OztFQWhFbUNFLG9CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7UHVyZUNvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtHcmlkLCBHcmlkUHJvcHN9IGZyb20gJ3JlYWN0LXZpcnR1YWxpemVkJztcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC5pc2VxdWFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZEhhY2sgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PEdyaWRQcm9wcz4ge1xuICBncmlkOiBHcmlkIHwgbnVsbCA9IG51bGw7XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZVByb3BzKSB7XG4gICAgLypcbiAgICAgKiBUaGlzIGhhY2sgZXhpc3RzIGJlY2F1c2UgaW4gcmVhY3QtdmlydHVhbGl6ZWQgdGhlXG4gICAgICogX2NvbHVtbldpZHRoR2V0dGVyIGlzIG9ubHkgY2FsbGVkIGluIHRoZSBjb25zdHJ1Y3RvclxuICAgICAqIGV2ZW4gdGhvdWdoIGl0IGlzIHJlYXNzaWduZWQgd2l0aCBuZXcgcHJvcHMgcmVzdWx0aW5nIGluXG4gICAgICogYSBuZXcgd2lkdGggZm9yIGNlbGxzIG5vdCBiZWluZyBjYWxjdWxhdGVkIHNvIHdlIG11c3RcbiAgICAgKiBmb3JjZSB0cmlnZ2VyIGEgcmVzaXplLlxuICAgICAqXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL2J2YXVnaG4vcmVhY3QtdmlydHVhbGl6ZWQvYmxvYi9tYXN0ZXIvc291cmNlL0dyaWQvR3JpZC5qcyNMMzIyXG4gICAgICpcbiAgICAgKi9cbiAgICBpZiAoIWlzRXF1YWwocHJlUHJvcHMuY2VsbFNpemVDYWNoZSwgdGhpcy5wcm9wcy5jZWxsU2l6ZUNhY2hlKSkge1xuICAgICAgdGhpcy5ncmlkPy5yZWNvbXB1dGVHcmlkU2l6ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vQHRzLWV4cGVjdC1lcnJvciBfc2Nyb2xsaW5nQ29udGFpbmVyIG5vdCB0eXBlZCBpbiBHcmlkXG4gICAgdGhpcy5ncmlkPy5fc2Nyb2xsaW5nQ29udGFpbmVyPy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMuX3ByZXZlbnRTY3JvbGxCYWNrLCB7XG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgX3ByZXZlbnRTY3JvbGxCYWNrID0gZSA9PiB7XG4gICAgY29uc3Qge3Njcm9sbExlZnR9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoc2Nyb2xsTGVmdCAhPT0gdW5kZWZpbmVkICYmIHNjcm9sbExlZnQgPD0gMCAmJiBlLmRlbHRhWCA8IDApIHtcbiAgICAgIC8vIFByZXZlbnQgU2Nyb2xsIE9uIFNjcm9sbGFibGUgRWxlbWVudHMsIGF2b2lkIGJyb3dzZXIgYmFja3dhcmQgbmF2aWdhdGlvblxuICAgICAgLy8gaHR0cHM6Ly9hbHZhcm90cmlnby5jb20vYmxvZy9wcmV2ZW50LXNjcm9sbC1vbi1zY3JvbGxhYmxlLWVsZW1lbnQtanMvXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH07XG5cbiAgX3VwZGF0ZVJlZiA9IHggPT4ge1xuICAgIGlmICghdGhpcy5ncmlkICYmIHgpIHtcbiAgICAgIHRoaXMuZ3JpZCA9IHg7XG4gICAgICAvKlxuICAgICAgICogVGhpcyBoYWNrIGV4aXN0cyBiZWNhdXNlIHdlIG5lZWQgdG8gYWRkIHdoZWVsIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBkaXYgcmVuZGVyZWQgYnkgR3JpZFxuICAgICAgICpcbiAgICAgICAqL1xuICAgICAgLy9AdHMtZXhwZWN0LWVycm9yIF9zY3JvbGxpbmdDb250YWluZXIgbm90IHR5cGVkIGluIEdyaWRcbiAgICAgIHRoaXMuZ3JpZD8uX3Njcm9sbGluZ0NvbnRhaW5lcj8uYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLl9wcmV2ZW50U2Nyb2xsQmFjaywge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7c2V0R3JpZFJlZiwgLi4ucmVzdH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8R3JpZFxuICAgICAgICByZWY9e3ggPT4ge1xuICAgICAgICAgIGlmIChzZXRHcmlkUmVmKSBzZXRHcmlkUmVmKHgpO1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZVJlZih4KTtcbiAgICAgICAgfX1cbiAgICAgICAga2V5PVwiZ3JpZC1oYWNrXCJcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cbiJdfQ==