"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListItem = exports.classList = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _constants = require("@kepler.gl/constants");

var _templateObject, _templateObject2;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var classList = {
  list: 'list-selector',
  listHeader: 'list__header',
  listSection: 'list__section',
  listItem: 'list__item',
  listItemAnchor: 'list__item__anchor'
};
exports.classList = classList;

var defaultDisplay = function defaultDisplay(d) {
  return d;
};

var ListItem = function ListItem(_ref) {
  var value = _ref.value,
      _ref$displayOption = _ref.displayOption,
      displayOption = _ref$displayOption === void 0 ? defaultDisplay : _ref$displayOption,
      disabled = _ref.disabled,
      light = _ref.light;
  var displayValue = displayOption(value);
  return /*#__PURE__*/_react["default"].createElement("span", {
    title: displayValue,
    className: (0, _classnames["default"])(classList.listItemAnchor, {
      disabled: disabled
    })
  }, displayValue);
};

exports.ListItem = ListItem;

var DropdownListWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border-top: 1px solid\n    ", ";\n  ", ";\n"])), function (props) {
  return props.light ? props.theme.dropdownListBgdLT : props.theme.dropdownListBgd;
}, function (props) {
  return props.light ? props.theme.dropdownListBorderTopLT : props.theme.dropdownListBorderTop;
}, function (props) {
  return props.light ? props.theme.dropdownListLT : props.theme.dropdownList;
});

var DropdownFooterWrapper = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  height: '0px';\n"])));

var DropdownList = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(DropdownList, _Component);

  var _super = _createSuper(DropdownList);

  function DropdownList(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, DropdownList);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "initNumberOfOptions", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "page", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "prevY", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "loadingRef", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "observer", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleObserver", function (entities) {
      var y = entities[0].boundingClientRect.y;

      if (_this.prevY > y) {
        var options = _this._getOptions(_this.page);

        if (options) _this.setState({
          options: options
        });
      }

      _this.prevY = y;
    });
    _this.state = {
      options: []
    };
    _this.initNumberOfOptions = _constants.INIT_FILTER_ITEMS_IN_DROPDOWN;
    _this.page = 0;
    _this.prevY = 0;
    _this.loadingRef = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }

  (0, _createClass2["default"])(DropdownList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = this._getOptions(this.page);

      this.setState({
        options: options
      });
      var divOptions = {
        root: null,
        rootMargin: '0%',
        threshold: 1.0
      };

      if (this.loadingRef.current) {
        this.observer = new IntersectionObserver(this.handleObserver, divOptions);
        this.observer.observe(this.loadingRef.current);
      }
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(prevProps, prevState) {
      var _prevProps$options, _this$props$options;

      if (((_prevProps$options = prevProps.options) === null || _prevProps$options === void 0 ? void 0 : _prevProps$options.length) !== ((_this$props$options = this.props.options) === null || _this$props$options === void 0 ? void 0 : _this$props$options.length)) {
        // check if user searching, reset state.options at the first time
        var options = this._getOptions(0);

        this.setState({
          options: options
        });
      }

      return null;
    } // prevent console warning: getSnapshotBeforeUpdate() should be used with componentDidUpdate().

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.loadingRef.current) {
        var _this$observer;

        (_this$observer = this.observer) === null || _this$observer === void 0 ? void 0 : _this$observer.unobserve(this.loadingRef.current);
      }
    }
  }, {
    key: "_getOptions",
    value: function _getOptions(page) {
      if (!this.props.options) {
        return [];
      }

      var n = this.props.options.length;

      if (n === 0) {
        return [];
      }

      var start = page * this.initNumberOfOptions;
      var end = start + this.initNumberOfOptions > n ? n : start + this.initNumberOfOptions;

      if (start < end && end <= n) {
        this.page = page + 1; // in case of user searching, props.options will be updated
        // so "page" value will be set to 0 and previous state.options will be discarded

        return [].concat((0, _toConsumableArray2["default"])(page > 0 ? this.state.options || [] : []), (0, _toConsumableArray2["default"])(this.props.options.slice(start, end)));
      }

      return null;
    }
  }, {
    key: "_onClick",
    value: function _onClick(result, event) {
      var _this$props$onOptionS, _this$props;

      event.preventDefault();
      (_this$props$onOptionS = (_this$props = this.props).onOptionSelected) === null || _this$props$onOptionS === void 0 ? void 0 : _this$props$onOptionS.call(_this$props, result, event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$options2,
          _this2 = this,
          _this$state$options;

      var _this$props2 = this.props,
          fixedOptions = _this$props2.fixedOptions,
          light = _this$props2.light,
          _this$props2$allowCus = _this$props2.allowCustomValues,
          allowCustomValues = _this$props2$allowCus === void 0 ? 0 : _this$props2$allowCus,
          _this$props2$customLi = _this$props2.customListItemComponent,
          CustomListItemComponent = _this$props2$customLi === void 0 ? ListItem : _this$props2$customLi;
      var _this$props$displayOp = this.props.displayOption,
          display = _this$props$displayOp === void 0 ? defaultDisplay : _this$props$displayOp; // Don't render if there are no options to display

      if (!((_this$props$options2 = this.props.options) !== null && _this$props$options2 !== void 0 && _this$props$options2.length) && allowCustomValues <= 0) {
        return /*#__PURE__*/_react["default"].createElement("div", null);
      }

      var valueOffset = Array.isArray(fixedOptions) ? fixedOptions.length : 0; // For some reason onClick is not fired when clicked on an option
      // onMouseDown is used here as a workaround of #205 and other

      return /*#__PURE__*/_react["default"].createElement(DropdownListWrapper, {
        className: classList.list,
        light: light
      }, this.props.customListHeaderComponent ? /*#__PURE__*/_react["default"].createElement("div", {
        className: classList.listHeader
      }, /*#__PURE__*/_react["default"].createElement(this.props.customListHeaderComponent, null)) : null, valueOffset > 0 ? /*#__PURE__*/_react["default"].createElement("div", {
        className: classList.listSection
      }, fixedOptions === null || fixedOptions === void 0 ? void 0 : fixedOptions.map(function (value, i) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _classnames["default"])(classList.listItem, {
            hover: _this2.props.selectionIndex === i,
            fixed: true
          }),
          key: "".concat(display(value), "_").concat(i),
          onMouseDown: function onMouseDown(e) {
            return _this2._onClick(value, e);
          },
          onClick: function onClick(e) {
            return _this2._onClick(value, e);
          }
        }, /*#__PURE__*/_react["default"].createElement(CustomListItemComponent, {
          value: value,
          displayOption: display
        }));
      })) : null, (_this$state$options = this.state.options) === null || _this$state$options === void 0 ? void 0 : _this$state$options.map(function (value, i) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _classnames["default"])(classList.listItem, {
            hover: _this2.props.selectionIndex === i + valueOffset
          }),
          key: "".concat(display(value), "_").concat(i),
          onMouseDown: function onMouseDown(e) {
            return _this2._onClick(value, e);
          },
          onClick: function onClick(e) {
            return _this2._onClick(value, e);
          }
        }, /*#__PURE__*/_react["default"].createElement(CustomListItemComponent, {
          value: value,
          displayOption: display
        }));
      }), /*#__PURE__*/_react["default"].createElement(DropdownFooterWrapper, {
        ref: this.loadingRef
      }));
    }
  }]);
  return DropdownList;
}(_react.Component);

exports["default"] = DropdownList;
(0, _defineProperty2["default"])(DropdownList, "defaultProps", {
  customClasses: {},
  customListItemComponent: ListItem,
  customListHeaderComponent: null,
  allowCustomValues: 0,
  customValues: [],
  displayOption: defaultDisplay,
  onOptionSelected: function onOptionSelected() {},
  defaultClassNames: true,
  selectionIndex: null
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vaXRlbS1zZWxlY3Rvci9kcm9wZG93bi1saXN0LnRzeCJdLCJuYW1lcyI6WyJjbGFzc0xpc3QiLCJsaXN0IiwibGlzdEhlYWRlciIsImxpc3RTZWN0aW9uIiwibGlzdEl0ZW0iLCJsaXN0SXRlbUFuY2hvciIsImRlZmF1bHREaXNwbGF5IiwiZCIsIkxpc3RJdGVtIiwidmFsdWUiLCJkaXNwbGF5T3B0aW9uIiwiZGlzYWJsZWQiLCJsaWdodCIsImRpc3BsYXlWYWx1ZSIsIkRyb3Bkb3duTGlzdFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiZHJvcGRvd25MaXN0QmdkTFQiLCJkcm9wZG93bkxpc3RCZ2QiLCJkcm9wZG93bkxpc3RCb3JkZXJUb3BMVCIsImRyb3Bkb3duTGlzdEJvcmRlclRvcCIsImRyb3Bkb3duTGlzdExUIiwiZHJvcGRvd25MaXN0IiwiRHJvcGRvd25Gb290ZXJXcmFwcGVyIiwiRHJvcGRvd25MaXN0IiwiZW50aXRpZXMiLCJ5IiwiYm91bmRpbmdDbGllbnRSZWN0IiwicHJldlkiLCJvcHRpb25zIiwiX2dldE9wdGlvbnMiLCJwYWdlIiwic2V0U3RhdGUiLCJzdGF0ZSIsImluaXROdW1iZXJPZk9wdGlvbnMiLCJJTklUX0ZJTFRFUl9JVEVNU19JTl9EUk9QRE9XTiIsImxvYWRpbmdSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImRpdk9wdGlvbnMiLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsImN1cnJlbnQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaGFuZGxlT2JzZXJ2ZXIiLCJvYnNlcnZlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwibGVuZ3RoIiwic25hcHNob3QiLCJ1bm9ic2VydmUiLCJuIiwic3RhcnQiLCJlbmQiLCJzbGljZSIsInJlc3VsdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJvbk9wdGlvblNlbGVjdGVkIiwiZml4ZWRPcHRpb25zIiwiYWxsb3dDdXN0b21WYWx1ZXMiLCJjdXN0b21MaXN0SXRlbUNvbXBvbmVudCIsIkN1c3RvbUxpc3RJdGVtQ29tcG9uZW50IiwiZGlzcGxheSIsInZhbHVlT2Zmc2V0IiwiQXJyYXkiLCJpc0FycmF5IiwiY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudCIsIm1hcCIsImkiLCJob3ZlciIsInNlbGVjdGlvbkluZGV4IiwiZml4ZWQiLCJlIiwiX29uQ2xpY2siLCJDb21wb25lbnQiLCJjdXN0b21DbGFzc2VzIiwiY3VzdG9tVmFsdWVzIiwiZGVmYXVsdENsYXNzTmFtZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVPLElBQU1BLFNBQVMsR0FBRztBQUN2QkMsRUFBQUEsSUFBSSxFQUFFLGVBRGlCO0FBRXZCQyxFQUFBQSxVQUFVLEVBQUUsY0FGVztBQUd2QkMsRUFBQUEsV0FBVyxFQUFFLGVBSFU7QUFJdkJDLEVBQUFBLFFBQVEsRUFBRSxZQUphO0FBS3ZCQyxFQUFBQSxjQUFjLEVBQUU7QUFMTyxDQUFsQjs7O0FBUVAsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFBQyxDQUFDO0FBQUEsU0FBSUEsQ0FBSjtBQUFBLENBQXhCOztBQUNPLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQThEO0FBQUEsTUFBNURDLEtBQTRELFFBQTVEQSxLQUE0RDtBQUFBLGdDQUFyREMsYUFBcUQ7QUFBQSxNQUFyREEsYUFBcUQsbUNBQXJDSixjQUFxQztBQUFBLE1BQXJCSyxRQUFxQixRQUFyQkEsUUFBcUI7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFDcEYsTUFBTUMsWUFBWSxHQUFHSCxhQUFhLENBQUNELEtBQUQsQ0FBbEM7QUFDQSxzQkFDRTtBQUFNLElBQUEsS0FBSyxFQUFFSSxZQUFiO0FBQTJCLElBQUEsU0FBUyxFQUFFLDRCQUFXYixTQUFT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S0QsT0FBTyxDQUFDMUQsS0FBRCxDQUFaLGNBQXVCZ0UsQ0FBdkIsQ0FKTDtBQUtFLFVBQUEsV0FBVyxFQUFFLHFCQUFBSSxDQUFDO0FBQUEsbUJBQUksTUFBSSxDQUFDQyxRQUFMLENBQWNyRSxLQUFkLEVBQXFCb0UsQ0FBckIsQ0FBSjtBQUFBLFdBTGhCO0FBTUUsVUFBQSxPQUFPLEVBQUUsaUJBQUFBLENBQUM7QUFBQSxtQkFBSSxNQUFJLENBQUNDLFFBQUwsQ0FBY3JFLEtBQWQsRUFBcUJvRSxDQUFyQixDQUFKO0FBQUE7QUFOWix3QkFRRSxnQ0FBQyx1QkFBRDtBQUF5QixVQUFBLEtBQUssRUFBRXBFLEtBQWhDO0FBQXVDLFVBQUEsYUFBYSxFQUFFMEQ7QUFBdEQsVUFSRixDQUR1QjtBQUFBLE9BQXhCLENBekJILGVBc0NFLGdDQUFDLHFCQUFEO0FBQXVCLFFBQUEsR0FBRyxFQUFFLEtBQUs3QjtBQUFqQyxRQXRDRixDQURGO0FBMENEOzs7RUFsS3VDeUMsZ0I7OztpQ0FBckJyRCxZLGtCQUNHO0FBQ3BCc0QsRUFBQUEsYUFBYSxFQUFFLEVBREs7QUFFcEJmLEVBQUFBLHVCQUF1QixFQUFFekQsUUFGTDtBQUdwQitELEVBQUFBLHlCQUF5QixFQUFFLElBSFA7QUFJcEJQLEVBQUFBLGlCQUFpQixFQUFFLENBSkM7QUFLcEJpQixFQUFBQSxZQUFZLEVBQUUsRUFMTTtBQU1wQnZFLEVBQUFBLGFBQWEsRUFBRUosY0FOSztBQU9wQndELEVBQUFBLGdCQUFnQixFQUFFLDRCQUFNLENBQUUsQ0FQTjtBQVFwQm9CLEVBQUFBLGlCQUFpQixFQUFFLElBUkM7QUFTcEJQLEVBQUFBLGNBQWMsRUFBRTtBQVRJLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnQsIEVsZW1lbnRUeXBlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtJTklUX0ZJTFRFUl9JVEVNU19JTl9EUk9QRE9XTn0gZnJvbSAnQGtlcGxlci5nbC9jb25zdGFudHMnO1xuXG5leHBvcnQgY29uc3QgY2xhc3NMaXN0ID0ge1xuICBsaXN0OiAnbGlzdC1zZWxlY3RvcicsXG4gIGxpc3RIZWFkZXI6ICdsaXN0X19oZWFkZXInLFxuICBsaXN0U2VjdGlvbjogJ2xpc3RfX3NlY3Rpb24nLFxuICBsaXN0SXRlbTogJ2xpc3RfX2l0ZW0nLFxuICBsaXN0SXRlbUFuY2hvcjogJ2xpc3RfX2l0ZW1fX2FuY2hvcidcbn07XG5cbmNvbnN0IGRlZmF1bHREaXNwbGF5ID0gZCA9PiBkO1xuZXhwb3J0IGNvbnN0IExpc3RJdGVtID0gKHt2YWx1ZSwgZGlzcGxheU9wdGlvbiA9IGRlZmF1bHREaXNwbGF5LCBkaXNhYmxlZCwgbGlnaHR9KSA9PiB7XG4gIGNvbnN0IGRpc3BsYXlWYWx1ZSA9IGRpc3BsYXlPcHRpb24odmFsdWUpO1xuICByZXR1cm4gKFxuICAgIDxzcGFuIHRpdGxlPXtkaXNwbGF5VmFsdWV9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc0xpc3QubGlzdEl0ZW1BbmNob3IsIHtkaXNhYmxlZH0pfT5cbiAgICAgIHtkaXNwbGF5VmFsdWV9XG4gICAgPC9zcGFuPlxuICApO1xufTtcblxuaW50ZXJmYWNlIERyb3Bkb3duTGlzdFdyYXBwZXJQcm9wcyB7XG4gIGxpZ2h0PzogYm9vbGVhbjtcbn1cblxuY29uc3QgRHJvcGRvd25MaXN0V3JhcHBlciA9IHN0eWxlZC5kaXY8RHJvcGRvd25MaXN0V3JhcHBlclByb3BzPmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmxpZ2h0ID8gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0QmdkTFQgOiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RCZ2R9O1xuICBib3JkZXItdG9wOiAxcHggc29saWRcbiAgICAke3Byb3BzID0+XG4gICAgICBwcm9wcy5saWdodCA/IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdEJvcmRlclRvcExUIDogcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0Qm9yZGVyVG9wfTtcbiAgJHtwcm9wcyA9PiAocHJvcHMubGlnaHQgPyBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RMVCA6IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdCl9O1xuYDtcblxuY29uc3QgRHJvcGRvd25Gb290ZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAnMHB4JztcbmA7XG5cbmludGVyZmFjZSBEcm9wZG93bkxpc3RQcm9wcyB7XG4gIG9wdGlvbnM/OiBhbnlbXTtcbiAgYWxsb3dDdXN0b21WYWx1ZXM/OiBudW1iZXI7XG4gIGN1c3RvbUNsYXNzZXM/OiBvYmplY3Q7XG4gIGN1c3RvbVZhbHVlcz86IGFueVtdO1xuICBjdXN0b21MaXN0SXRlbUNvbXBvbmVudD86IEVsZW1lbnRUeXBlO1xuICBjdXN0b21MaXN0SGVhZGVyQ29tcG9uZW50PzogRWxlbWVudFR5cGU7XG4gIHNlbGVjdGlvbkluZGV4PzogbnVtYmVyO1xuICBvbk9wdGlvblNlbGVjdGVkPzogRnVuY3Rpb247XG4gIGRpc3BsYXlPcHRpb24/OiBGdW5jdGlvbjtcbiAgZGVmYXVsdENsYXNzTmFtZXM/OiBib29sZWFuO1xuICBhcmVSZXN1bHRzVHJ1bmNhdGVkPzogYm9vbGVhbjtcbiAgcmVzdWx0c1RydW5jYXRlZE1lc3NhZ2U/OiBzdHJpbmc7XG4gIGxpc3RJdGVtQ29tcG9uZW50PzogRnVuY3Rpb247XG4gIGxpZ2h0PzogYm9vbGVhbjtcbiAgZml4ZWRPcHRpb25zPzogYW55W107XG59XG5cbmludGVyZmFjZSBEcm9wZG93bkxpc3RTdGF0ZSB7XG4gIG9wdGlvbnM6IEFycmF5PGFueT4gfCBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93bkxpc3QgZXh0ZW5kcyBDb21wb25lbnQ8RHJvcGRvd25MaXN0UHJvcHMsIERyb3Bkb3duTGlzdFN0YXRlPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY3VzdG9tQ2xhc3Nlczoge30sXG4gICAgY3VzdG9tTGlzdEl0ZW1Db21wb25lbnQ6IExpc3RJdGVtLFxuICAgIGN1c3RvbUxpc3RIZWFkZXJDb21wb25lbnQ6IG51bGwsXG4gICAgYWxsb3dDdXN0b21WYWx1ZXM6IDAsXG4gICAgY3VzdG9tVmFsdWVzOiBbXSxcbiAgICBkaXNwbGF5T3B0aW9uOiBkZWZhdWx0RGlzcGxheSxcbiAgICBvbk9wdGlvblNlbGVjdGVkOiAoKSA9PiB7fSxcbiAgICBkZWZhdWx0Q2xhc3NOYW1lczogdHJ1ZSxcbiAgICBzZWxlY3Rpb25JbmRleDogbnVsbFxuICB9O1xuXG4gIGluaXROdW1iZXJPZk9wdGlvbnM6IG51bWJlcjtcbiAgcGFnZTogbnVtYmVyO1xuICBwcmV2WTogbnVtYmVyO1xuICBsb2FkaW5nUmVmOiBSZWFjdC5SZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+O1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge29wdGlvbnM6IFtdfTtcbiAgICB0aGlzLmluaXROdW1iZXJPZk9wdGlvbnMgPSBJTklUX0ZJTFRFUl9JVEVNU19JTl9EUk9QRE9XTjtcbiAgICB0aGlzLnBhZ2UgPSAwO1xuICAgIHRoaXMucHJldlkgPSAwO1xuICAgIHRoaXMubG9hZGluZ1JlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuX2dldE9wdGlvbnModGhpcy5wYWdlKTtcbiAgICB0aGlzLnNldFN0YXRlKHtvcHRpb25zfSk7XG5cbiAgICBjb25zdCBkaXZPcHRpb25zID0ge1xuICAgICAgcm9vdDogbnVsbCxcbiAgICAgIHJvb3RNYXJnaW46ICcwJScsXG4gICAgICB0aHJlc2hvbGQ6IDEuMFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5sb2FkaW5nUmVmLmN1cnJlbnQpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5oYW5kbGVPYnNlcnZlciwgZGl2T3B0aW9ucyk7XG4gICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy5sb2FkaW5nUmVmLmN1cnJlbnQpO1xuICAgIH1cbiAgfVxuXG4gIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHByZXZQcm9wczogRHJvcGRvd25MaXN0UHJvcHMsIHByZXZTdGF0ZTogRHJvcGRvd25MaXN0U3RhdGUpIHtcbiAgICBpZiAocHJldlByb3BzLm9wdGlvbnM/Lmxlbmd0aCAhPT0gdGhpcy5wcm9wcy5vcHRpb25zPy5sZW5ndGgpIHtcbiAgICAgIC8vIGNoZWNrIGlmIHVzZXIgc2VhcmNoaW5nLCByZXNldCBzdGF0ZS5vcHRpb25zIGF0IHRoZSBmaXJzdCB0aW1lXG4gICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5fZ2V0T3B0aW9ucygwKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe29wdGlvbnN9KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBwcmV2ZW50IGNvbnNvbGUgd2FybmluZzogZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoKSBzaG91bGQgYmUgdXNlZCB3aXRoIGNvbXBvbmVudERpZFVwZGF0ZSgpLlxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7fVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLmxvYWRpbmdSZWYuY3VycmVudCkge1xuICAgICAgdGhpcy5vYnNlcnZlcj8udW5vYnNlcnZlKHRoaXMubG9hZGluZ1JlZi5jdXJyZW50KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVPYnNlcnZlciA9IGVudGl0aWVzID0+IHtcbiAgICBjb25zdCB5ID0gZW50aXRpZXNbMF0uYm91bmRpbmdDbGllbnRSZWN0Lnk7XG4gICAgaWYgKHRoaXMucHJldlkgPiB5KSB7XG4gICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5fZ2V0T3B0aW9ucyh0aGlzLnBhZ2UpO1xuICAgICAgaWYgKG9wdGlvbnMpIHRoaXMuc2V0U3RhdGUoe29wdGlvbnN9KTtcbiAgICB9XG4gICAgdGhpcy5wcmV2WSA9IHk7XG4gIH07XG5cbiAgX2dldE9wdGlvbnMocGFnZSkge1xuICAgIGlmICghdGhpcy5wcm9wcy5vcHRpb25zKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgbiA9IHRoaXMucHJvcHMub3B0aW9ucy5sZW5ndGg7XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3Qgc3RhcnQgPSBwYWdlICogdGhpcy5pbml0TnVtYmVyT2ZPcHRpb25zO1xuICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgdGhpcy5pbml0TnVtYmVyT2ZPcHRpb25zID4gbiA/IG4gOiBzdGFydCArIHRoaXMuaW5pdE51bWJlck9mT3B0aW9ucztcblxuICAgIGlmIChzdGFydCA8IGVuZCAmJiBlbmQgPD0gbikge1xuICAgICAgdGhpcy5wYWdlID0gcGFnZSArIDE7XG4gICAgICAvLyBpbiBjYXNlIG9mIHVzZXIgc2VhcmNoaW5nLCBwcm9wcy5vcHRpb25zIHdpbGwgYmUgdXBkYXRlZFxuICAgICAgLy8gc28gXCJwYWdlXCIgdmFsdWUgd2lsbCBiZSBzZXQgdG8gMCBhbmQgcHJldmlvdXMgc3RhdGUub3B0aW9ucyB3aWxsIGJlIGRpc2NhcmRlZFxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uKHBhZ2UgPiAwID8gdGhpcy5zdGF0ZS5vcHRpb25zIHx8IFtdIDogW10pLFxuICAgICAgICAuLi50aGlzLnByb3BzLm9wdGlvbnMuc2xpY2Uoc3RhcnQsIGVuZClcbiAgICAgIF07XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBfb25DbGljayhyZXN1bHQsIGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uT3B0aW9uU2VsZWN0ZWQ/LihyZXN1bHQsIGV2ZW50KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmaXhlZE9wdGlvbnMsXG4gICAgICBsaWdodCxcbiAgICAgIGFsbG93Q3VzdG9tVmFsdWVzID0gMCxcbiAgICAgIGN1c3RvbUxpc3RJdGVtQ29tcG9uZW50OiBDdXN0b21MaXN0SXRlbUNvbXBvbmVudCA9IExpc3RJdGVtXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge2Rpc3BsYXlPcHRpb246IGRpc3BsYXkgPSBkZWZhdWx0RGlzcGxheX0gPSB0aGlzLnByb3BzO1xuXG4gICAgLy8gRG9uJ3QgcmVuZGVyIGlmIHRoZXJlIGFyZSBubyBvcHRpb25zIHRvIGRpc3BsYXlcbiAgICBpZiAoIXRoaXMucHJvcHMub3B0aW9ucz8ubGVuZ3RoICYmIGFsbG93Q3VzdG9tVmFsdWVzIDw9IDApIHtcbiAgICAgIHJldHVybiA8ZGl2IC8+O1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlT2Zmc2V0ID0gQXJyYXkuaXNBcnJheShmaXhlZE9wdGlvbnMpID8gZml4ZWRPcHRpb25zLmxlbmd0aCA6IDA7XG5cbiAgICAvLyBGb3Igc29tZSByZWFzb24gb25DbGljayBpcyBub3QgZmlyZWQgd2hlbiBjbGlja2VkIG9uIGFuIG9wdGlvblxuICAgIC8vIG9uTW91c2VEb3duIGlzIHVzZWQgaGVyZSBhcyBhIHdvcmthcm91bmQgb2YgIzIwNSBhbmQgb3RoZXJcbiAgICByZXR1cm4gKFxuICAgICAgPERyb3Bkb3duTGlzdFdyYXBwZXIgY2xhc3NOYW1lPXtjbGFzc0xpc3QubGlzdH0gbGlnaHQ9e2xpZ2h0fT5cbiAgICAgICAge3RoaXMucHJvcHMuY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NMaXN0Lmxpc3RIZWFkZXJ9PlxuICAgICAgICAgICAgPHRoaXMucHJvcHMuY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudCAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICB7dmFsdWVPZmZzZXQgPiAwID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc0xpc3QubGlzdFNlY3Rpb259PlxuICAgICAgICAgICAge2ZpeGVkT3B0aW9ucz8ubWFwKCh2YWx1ZSwgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzTGlzdC5saXN0SXRlbSwge1xuICAgICAgICAgICAgICAgICAgaG92ZXI6IHRoaXMucHJvcHMuc2VsZWN0aW9uSW5kZXggPT09IGksXG4gICAgICAgICAgICAgICAgICBmaXhlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIGtleT17YCR7ZGlzcGxheSh2YWx1ZSl9XyR7aX1gfVxuICAgICAgICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHRoaXMuX29uQ2xpY2sodmFsdWUsIGUpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5fb25DbGljayh2YWx1ZSwgZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Q3VzdG9tTGlzdEl0ZW1Db21wb25lbnQgdmFsdWU9e3ZhbHVlfSBkaXNwbGF5T3B0aW9uPXtkaXNwbGF5fSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICB7dGhpcy5zdGF0ZS5vcHRpb25zPy5tYXAoKHZhbHVlLCBpKSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzTGlzdC5saXN0SXRlbSwge1xuICAgICAgICAgICAgICBob3ZlcjogdGhpcy5wcm9wcy5zZWxlY3Rpb25JbmRleCA9PT0gaSArIHZhbHVlT2Zmc2V0XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIGtleT17YCR7ZGlzcGxheSh2YWx1ZSl9XyR7aX1gfVxuICAgICAgICAgICAgb25Nb3VzZURvd249e2UgPT4gdGhpcy5fb25DbGljayh2YWx1ZSwgZSl9XG4gICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMuX29uQ2xpY2sodmFsdWUsIGUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxDdXN0b21MaXN0SXRlbUNvbXBvbmVudCB2YWx1ZT17dmFsdWV9IGRpc3BsYXlPcHRpb249e2Rpc3BsYXl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuXG4gICAgICAgIDxEcm9wZG93bkZvb3RlcldyYXBwZXIgcmVmPXt0aGlzLmxvYWRpbmdSZWZ9IC8+XG4gICAgICA8L0Ryb3Bkb3duTGlzdFdyYXBwZXI+XG4gICAgKTtcbiAgfVxufVxuIl19