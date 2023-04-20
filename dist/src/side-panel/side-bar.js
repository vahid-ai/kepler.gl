"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CollapseButtonFactory = void 0;

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

var _icons = require("../common/icons");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyledSidePanelContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  z-index: 99;\n  height: 100%;\n  width: ", "px;\n  display: flex;\n  transition: width 250ms;\n  position: absolute;\n  padding-top: ", "px;\n  padding-right: ", "px;\n  padding-bottom: ", "px;\n  padding-left: ", "px;\n  pointer-events: none; /* prevent padding from blocking input */\n  & > * {\n    /* all children should allow input */\n    pointer-events: all;\n  }\n"])), function (props) {
  return props.width + 2 * props.theme.sidePanel.margin.left;
}, function (props) {
  return props.theme.sidePanel.margin.top;
}, function (props) {
  return props.theme.sidePanel.margin.right;
}, function (props) {
  return props.theme.sidePanel.margin.bottom;
}, function (props) {
  return props.theme.sidePanel.margin.left;
});

var SideBarContainer = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  transition: left 250ms, right 250ms;\n  left: ", "px;\n  align-items: stretch;\n  flex-grow: 1;\n"])), function (props) {
  return props.left;
});

var SideBarInner = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border-radius: 1px;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  border-left: ", "px solid\n    ", ";\n"])), function (props) {
  return props.theme.sidePanelBg;
}, function (props) {
  return props.theme.sidePanelBorder;
}, function (props) {
  return props.theme.sidePanelBorderColor;
});

var StyledCollapseButton = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  justify-content: center;\n  background-color: ", ";\n  border-radius: 1px;\n  color: ", ";\n  display: flex;\n  height: 20px;\n  position: absolute;\n  right: -8px;\n  top: ", "px;\n  width: 20px;\n\n  :hover {\n    cursor: pointer;\n    box-shadow: none;\n    background-color: ", ";\n  }\n"])), function (props) {
  return props.theme.sideBarCloseBtnBgd;
}, function (props) {
  return props.theme.sideBarCloseBtnColor;
}, function (props) {
  return props.theme.sidePanel.margin.top;
}, function (props) {
  return props.theme.sideBarCloseBtnBgdHover;
});

var CollapseButtonFactory = function CollapseButtonFactory() {
  var CollapseButton = function CollapseButton(_ref) {
    var onClick = _ref.onClick,
        isOpen = _ref.isOpen;
    return /*#__PURE__*/_react["default"].createElement(StyledCollapseButton, {
      className: "side-bar__close",
      onClick: onClick
    }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowRight, {
      height: "12px",
      style: {
        transform: "rotate(".concat(isOpen ? 180 : 0, "deg)")
      }
    }));
  };

  return CollapseButton;
};

exports.CollapseButtonFactory = CollapseButtonFactory;
SidebarFactory.deps = [CollapseButtonFactory];

function SidebarFactory(CollapseButton) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(SideBar, _Component);

    var _super = _createSuper(SideBar);

    function SideBar() {
      var _this;

      (0, _classCallCheck2["default"])(this, SideBar);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onOpenOrClose", function () {
        _this.props.onOpenOrClose({
          isOpen: !_this.props.isOpen
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(SideBar, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            isOpen = _this$props.isOpen,
            minifiedWidth = _this$props.minifiedWidth,
            width = _this$props.width,
            shouldShowCollapseButton = _this$props.shouldShowCollapseButton;
        var horizontalOffset = isOpen ? 0 : minifiedWidth - width;
        return /*#__PURE__*/_react["default"].createElement(StyledSidePanelContainer, {
          width: isOpen ? width : 0,
          className: "side-panel--container"
        }, /*#__PURE__*/_react["default"].createElement(SideBarContainer, {
          className: "side-bar",
          style: {
            width: "".concat(width, "px")
          },
          left: horizontalOffset
        }, isOpen ? /*#__PURE__*/_react["default"].createElement(SideBarInner, {
          className: "side-bar__inner"
        }, this.props.children) : null, shouldShowCollapseButton ? /*#__PURE__*/_react["default"].createElement(CollapseButton, {
          isOpen: isOpen,
          onClick: this._onOpenOrClose
        }) : null));
      }
    }]);
    return SideBar;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "defaultProps", {
    width: 300,
    minifiedWidth: 0,
    isOpen: true,
    onOpenOrClose: function noop() {},
    shouldShowCollapseButton: true
  }), _temp;
}

var _default = SidebarFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL3NpZGUtYmFyLnRzeCJdLCJuYW1lcyI6WyJTdHlsZWRTaWRlUGFuZWxDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsIndpZHRoIiwidGhlbWUiLCJzaWRlUGFuZWwiLCJtYXJnaW4iLCJsZWZ0IiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJTaWRlQmFyQ29udGFpbmVyIiwiU2lkZUJhcklubmVyIiwic2lkZVBhbmVsQmciLCJzaWRlUGFuZWxCb3JkZXIiLCJzaWRlUGFuZWxCb3JkZXJDb2xvciIsIlN0eWxlZENvbGxhcHNlQnV0dG9uIiwic2lkZUJhckNsb3NlQnRuQmdkIiwic2lkZUJhckNsb3NlQnRuQ29sb3IiLCJzaWRlQmFyQ2xvc2VCdG5CZ2RIb3ZlciIsIkNvbGxhcHNlQnV0dG9uRmFjdG9yeSIsIkNvbGxhcHNlQnV0dG9uIiwib25DbGljayIsImlzT3BlbiIsInRyYW5zZm9ybSIsIlNpZGViYXJGYWN0b3J5IiwiZGVwcyIsIm9uT3Blbk9yQ2xvc2UiLCJtaW5pZmllZFdpZHRoIiwic2hvdWxkU2hvd0NvbGxhcHNlQnV0dG9uIiwiaG9yaXpvbnRhbE9mZnNldCIsImNoaWxkcmVuIiwiX29uT3Blbk9yQ2xvc2UiLCJDb21wb25lbnQiLCJub29wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBZUEsSUFBTUEsd0JBQXdCLEdBQUdDLDZCQUFPQyxHQUFWLCtjQUduQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsSUFBSUQsS0FBSyxDQUFDRSxLQUFOLENBQVlDLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCQyxJQUFuRDtBQUFBLENBSGMsRUFPYixVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZC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QUQ5QjtBQUVQLFlBQU1DLGdCQUFnQixHQUFHUCxNQUFNLEdBQUcsQ0FBSCxHQUFPSyxhQUFhLEdBQUd6QixLQUF0RDtBQUVBLDRCQUNFLGdDQUFDLHdCQUFEO0FBQTBCLFVBQUEsS0FBSyxFQUFFb0IsTUFBTSxHQUFHcEIsS0FBSCxHQUFXLENBQWxEO0FBQXFELFVBQUEsU0FBUyxFQUFDO0FBQS9ELHdCQUNFLGdDQUFDLGdCQUFEO0FBQ0UsVUFBQSxTQUFTLEVBQUMsVUFEWjtBQUVFLFVBQUEsS0FBSyxFQUFFO0FBQUNBLFlBQUFBLEtBQUssWUFBS0EsS0FBTDtBQUFOLFdBRlQ7QUFHRSxVQUFBLElBQUksRUFBRTJCO0FBSFIsV0FLR1AsTUFBTSxnQkFDTCxnQ0FBQyxZQUFEO0FBQWMsVUFBQSxTQUFTLEVBQUM7QUFBeEIsV0FBMkMsS0FBS3JCLEtBQUwsQ0FBVzZCLFFBQXRELENBREssR0FFSCxJQVBOLEVBUUdGLHdCQUF3QixnQkFDdkIsZ0NBQUMsY0FBRDtBQUFnQixVQUFBLE1BQU0sRUFBRU4sTUFBeEI7QUFBZ0MsVUFBQSxPQUFPLEVBQUUsS0FBS1M7QUFBOUMsVUFEdUIsR0FFckIsSUFWTixDQURGLENBREY7QUFnQkQ7QUFqQ0g7QUFBQTtBQUFBLElBQTZCQyxnQkFBN0IsNERBQ3dCO0FBQ3BCOUIsSUFBQUEsS0FBSyxFQUFFLEdBRGE7QUFFcEJ5QixJQUFBQSxhQUFhLEVBQUUsQ0FGSztBQUdwQkwsSUFBQUEsTUFBTSxFQUFFLElBSFk7QUFJcEJJLElBQUFBLGFBQWEsRUFBRSxTQUFTTyxJQUFULEdBQWdCLENBQUUsQ0FKYjtBQUtwQkwsSUFBQUEsd0JBQXdCLEVBQUU7QUFMTixHQUR4QjtBQW1DRDs7ZUFFY0osYyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0Fycm93UmlnaHR9IGZyb20gJy4uL2NvbW1vbi9pY29ucyc7XG5cbmV4cG9ydCB0eXBlIENvbGxhcHNlQnV0dG9uUHJvcHMgPSB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB2b2lkO1xufTtcblxudHlwZSBTaWRlQmFyUHJvcHMgPSB7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgbWluaWZpZWRXaWR0aDogbnVtYmVyO1xuICBvbk9wZW5PckNsb3NlOiAoYXJnOiB7aXNPcGVuOiBib29sZWFufSkgPT4gdm9pZDtcbiAgc2hvdWxkU2hvd0NvbGxhcHNlQnV0dG9uPzogYm9vbGVhbiB8IG51bGw7XG59O1xuXG5jb25zdCBTdHlsZWRTaWRlUGFuZWxDb250YWluZXIgPSBzdHlsZWQuZGl2PHt3aWR0aDogbnVtYmVyfT5gXG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRoICsgMiAqIHByb3BzLnRoZW1lLnNpZGVQYW5lbC5tYXJnaW4ubGVmdH1weDtcbiAgZGlzcGxheTogZmxleDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMjUwbXM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy10b3A6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi50b3B9cHg7XG4gIHBhZGRpbmctcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi5yaWdodH1weDtcbiAgcGFkZGluZy1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsLm1hcmdpbi5ib3R0b219cHg7XG4gIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWwubWFyZ2luLmxlZnR9cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBwcmV2ZW50IHBhZGRpbmcgZnJvbSBibG9ja2luZyBpbnB1dCAqL1xuICAmID4gKiB7XG4gICAgLyogYWxsIGNoaWxkcmVuIHNob3VsZCBhbGxvdyBpbnB1dCAqL1xuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIH1cbmA7XG5cbmNvbnN0IFNpZGVCYXJDb250YWluZXIgPSBzdHlsZWQuZGl2PHtsZWZ0OiBudW1iZXJ9PmBcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNpdGlvbjogbGVmdCAyNTBtcywgcmlnaHQgMjUwbXM7XG4gIGxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMubGVmdH1weDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGZsZXgtZ3JvdzogMTtcbmA7XG5cbmNvbnN0IFNpZGVCYXJJbm5lciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsQmd9O1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsQm9yZGVyfXB4IHNvbGlkXG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWxCb3JkZXJDb2xvcn07XG5gO1xuXG5jb25zdCBTdHlsZWRDb2xsYXBzZUJ1dHRvbiA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVCYXJDbG9zZUJ0bkJnZH07XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZUJhckNsb3NlQnRuQ29sb3J9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC04cHg7XG4gIHRvcDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWwubWFyZ2luLnRvcH1weDtcbiAgd2lkdGg6IDIwcHg7XG5cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVCYXJDbG9zZUJ0bkJnZEhvdmVyfTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENvbGxhcHNlQnV0dG9uRmFjdG9yeSA9ICgpID0+IHtcbiAgY29uc3QgQ29sbGFwc2VCdXR0b24gPSAoe29uQ2xpY2ssIGlzT3Blbn06IENvbGxhcHNlQnV0dG9uUHJvcHMpID0+IChcbiAgICA8U3R5bGVkQ29sbGFwc2VCdXR0b24gY2xhc3NOYW1lPVwic2lkZS1iYXJfX2Nsb3NlXCIgb25DbGljaz17b25DbGlja30+XG4gICAgICA8QXJyb3dSaWdodCBoZWlnaHQ9XCIxMnB4XCIgc3R5bGU9e3t0cmFuc2Zvcm06IGByb3RhdGUoJHtpc09wZW4gPyAxODAgOiAwfWRlZylgfX0gLz5cbiAgICA8L1N0eWxlZENvbGxhcHNlQnV0dG9uPlxuICApO1xuICByZXR1cm4gQ29sbGFwc2VCdXR0b247XG59O1xuXG5TaWRlYmFyRmFjdG9yeS5kZXBzID0gW0NvbGxhcHNlQnV0dG9uRmFjdG9yeV07XG5cbmZ1bmN0aW9uIFNpZGViYXJGYWN0b3J5KENvbGxhcHNlQnV0dG9uOiBSZXR1cm5UeXBlPHR5cGVvZiBDb2xsYXBzZUJ1dHRvbkZhY3Rvcnk+KSB7XG4gIHJldHVybiBjbGFzcyBTaWRlQmFyIGV4dGVuZHMgQ29tcG9uZW50PFNpZGVCYXJQcm9wcz4ge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICB3aWR0aDogMzAwLFxuICAgICAgbWluaWZpZWRXaWR0aDogMCxcbiAgICAgIGlzT3BlbjogdHJ1ZSxcbiAgICAgIG9uT3Blbk9yQ2xvc2U6IGZ1bmN0aW9uIG5vb3AoKSB7fSxcbiAgICAgIHNob3VsZFNob3dDb2xsYXBzZUJ1dHRvbjogdHJ1ZVxuICAgIH07XG5cbiAgICBfb25PcGVuT3JDbG9zZSA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMub25PcGVuT3JDbG9zZSh7aXNPcGVuOiAhdGhpcy5wcm9wcy5pc09wZW59KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge2lzT3BlbiwgbWluaWZpZWRXaWR0aCwgd2lkdGgsIHNob3VsZFNob3dDb2xsYXBzZUJ1dHRvbn0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgaG9yaXpvbnRhbE9mZnNldCA9IGlzT3BlbiA/IDAgOiBtaW5pZmllZFdpZHRoIC0gd2lkdGg7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRTaWRlUGFuZWxDb250YWluZXIgd2lkdGg9e2lzT3BlbiA/IHdpZHRoIDogMH0gY2xhc3NOYW1lPVwic2lkZS1wYW5lbC0tY29udGFpbmVyXCI+XG4gICAgICAgICAgPFNpZGVCYXJDb250YWluZXJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpZGUtYmFyXCJcbiAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IGAke3dpZHRofXB4YH19XG4gICAgICAgICAgICBsZWZ0PXtob3Jpem9udGFsT2Zmc2V0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpc09wZW4gPyAoXG4gICAgICAgICAgICAgIDxTaWRlQmFySW5uZXIgY2xhc3NOYW1lPVwic2lkZS1iYXJfX2lubmVyXCI+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9TaWRlQmFySW5uZXI+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIHtzaG91bGRTaG93Q29sbGFwc2VCdXR0b24gPyAoXG4gICAgICAgICAgICAgIDxDb2xsYXBzZUJ1dHRvbiBpc09wZW49e2lzT3Blbn0gb25DbGljaz17dGhpcy5fb25PcGVuT3JDbG9zZX0gLz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvU2lkZUJhckNvbnRhaW5lcj5cbiAgICAgICAgPC9TdHlsZWRTaWRlUGFuZWxDb250YWluZXI+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckZhY3Rvcnk7XG4iXX0=