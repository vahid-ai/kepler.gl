"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StyledDropdownSelect = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var _lodash = _interopRequireDefault(require("lodash.uniqby"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _accessor = _interopRequireDefault(require("./accessor"));

var _chickletedInput = _interopRequireDefault(require("./chickleted-input"));

var _typeahead = _interopRequireDefault(require("./typeahead"));

var _icons = require("../icons");

var _dropdownList = _interopRequireWildcard(require("./dropdown-list"));

var _portaled = _interopRequireDefault(require("../../common/portaled"));

var _utils = require("@kepler.gl/utils");

var _reactIntl = require("react-intl");

var _localization = require("@kepler.gl/localization");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var StyledDropdownSelect = _styledComponents["default"].div.attrs(function (props) {
  return {
    className: (0, _classnames["default"])('item-selector__dropdown', props.className)
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n\n  height: ", ";\n\n  .list__item__anchor {\n    ", ";\n  }\n"])), function (props) {
  return props.inputTheme === 'secondary' ? props.theme.secondaryInput : props.inputTheme === 'light' ? props.theme.inputLT : props.theme.input;
}, function (props) {
  return props.size === 'small' ? props.theme.inputBoxHeightSmall : props.theme.inputBoxHeight;
}, function (props) {
  return props.theme.dropdownListAnchor;
});

exports.StyledDropdownSelect = StyledDropdownSelect;

var DropdownSelectValue = _styledComponents["default"].span(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  .list__item {\n    ", ";\n  }\n\n  .list__item__anchor {\n    ", ";\n  }\n"])), function (props) {
  return props.hasPlaceholder && props.inputTheme === 'light' ? props.theme.selectColorPlaceHolderLT : props.hasPlaceholder ? props.theme.selectColorPlaceHolder : props.inputTheme === 'light' ? props.theme.selectColorLT : props.theme.selectColor;
}, function (props) {
  return props.inputTheme === 'light' ? props.theme.dropdownListItemLT : props.theme.dropdownListItem;
}, function (props) {
  return props.inputTheme === 'light' ? props.theme.dropdownListAnchorLT : props.theme.dropdownListAnchor;
});

var DropdownSelectActionRight = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-right: 6px;\n  display: flex;\n  color: ", ";\n\n  :hover {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.subtextColor;
}, function (props) {
  return props.theme.textColor;
});

var DropdownWrapper = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  border: 0;\n  width: 100%;\n  left: 0;\n  z-index: ", ";\n  width: ", "px;\n"])), function (props) {
  return props.theme.dropdownWrapperZ;
}, function (props) {
  return props.width;
});

var ItemSelectorUnmemoized = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ItemSelectorUnmemoized, _Component);

  var _super = _createSuper(ItemSelectorUnmemoized);

  function ItemSelectorUnmemoized() {
    var _this;

    (0, _classCallCheck2["default"])(this, ItemSelectorUnmemoized);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      showTypeahead: false,
      dimensions: {
        width: 200
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "root", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function () {
      _this._hideTypeahead();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleResize", function (dimensions) {
      _this.setState({
        dimensions: dimensions
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_hideTypeahead", function () {
      _this.setState({
        showTypeahead: false
      });

      _this._onBlur();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onBlur", function () {
      // note: chickleted input is not a real form element so we call onBlur()
      // when we feel the events are appropriate
      if (_this.props.onBlur) {
        _this.props.onBlur();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_removeItem", function (item, e) {
      // only used when multiSelect = true
      e.preventDefault();
      e.stopPropagation();
      var multiSelectedItems = (0, _utils.toArray)(_this.props.selectedItems);
      var index = multiSelectedItems.findIndex(function (t) {
        return t === item;
      });

      if (index < 0) {
        return;
      }

      var items = [].concat((0, _toConsumableArray2["default"])(multiSelectedItems.slice(0, index)), (0, _toConsumableArray2["default"])(multiSelectedItems.slice(index + 1, multiSelectedItems.length)));

      _this.props.onChange(items);

      if (_this.props.closeOnSelect) {
        _this.setState({
          showTypeahead: false
        });

        _this._onBlur();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_selectItem", function (item) {
      var getValue = _accessor["default"].generateOptionToStringFor(_this.props.getOptionValue || _this.props.displayOption);

      var previousSelected = (0, _utils.toArray)(_this.props.selectedItems);

      if (_this.props.multiSelect) {
        var _items = (0, _lodash["default"])(previousSelected.concat((0, _utils.toArray)(item)), getValue);

        _this.props.onChange(_items);
      } else {
        _this.props.onChange(getValue(item));
      }

      if (_this.props.closeOnSelect) {
        _this.setState({
          showTypeahead: false
        });

        _this._onBlur();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onErase", function (e) {
      e.stopPropagation();

      _this.props.onChange(null);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_showTypeahead", function (e) {
      e.stopPropagation();

      if (!_this.props.disabled) {
        _this.setState({
          showTypeahead: true
        });
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(ItemSelectorUnmemoized, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.showDropdownOnMount) {
        this.setState({
          showTypeahead: true
        });
      }

      if (this.root.current instanceof HTMLElement) {
        (0, _utils.observeDimensions)(this.root.current, this._handleResize);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.root.current instanceof HTMLElement) {
        (0, _utils.unobserveDimensions)(this.root.current);
      }
    }
  }, {
    key: "_renderDropdown",
    value: function _renderDropdown(intl) {
      var _this$props$placement = this.props.placement,
          placement = _this$props$placement === void 0 ? 'bottom' : _this$props$placement;
      var dimensions = this.state.dimensions;
      return /*#__PURE__*/_react["default"].createElement(_portaled["default"], {
        left: 0,
        top: 0,
        isOpened: this.state.showTypeahead,
        onClose: this._hideTypeahead
      }, /*#__PURE__*/_react["default"].createElement(DropdownWrapper, {
        placement: placement,
        width: dimensions === null || dimensions === void 0 ? void 0 : dimensions.width
      }, /*#__PURE__*/_react["default"].createElement(_typeahead["default"], {
        customClasses: {
          results: 'list-selector',
          input: 'typeahead__input',
          listItem: 'list__item',
          listAnchor: 'list__item__anchor'
        },
        options: this.props.options,
        filterOption: this.props.filterOption,
        fixedOptions: this.props.fixedOptions,
        placeholder: this.props.typeaheadPlaceholder || intl ? intl.formatMessage({
          id: 'placeholder.search'
        }) : 'Search',
        onOptionSelected: this._selectItem,
        customListComponent: this.props.DropDownRenderComponent,
        customListHeaderComponent: this.props.DropdownHeaderComponent,
        customListItemComponent: this.props.DropDownLineItemRenderComponent,
        displayOption: _accessor["default"].generateOptionToStringFor(this.props.displayOption),
        searchable: this.props.searchable,
        searchOptions: this.props.searchOptions,
        showOptionsWhenEmpty: true,
        selectedItems: (0, _utils.toArray)(this.props.selectedItems),
        light: this.props.inputTheme === 'light'
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var selected = (0, _utils.toArray)(this.props.selectedItems);
      var hasValue = selected.length;

      var displayOption = _accessor["default"].generateOptionToStringFor(this.props.displayOption);

      var _this$props = this.props,
          disabled = _this$props.disabled,
          _this$props$inputThem = _this$props.inputTheme,
          inputTheme = _this$props$inputThem === void 0 ? 'primary' : _this$props$inputThem,
          _this$props$DropDownL = _this$props.DropDownLineItemRenderComponent,
          DropDownLineItemRenderComponent = _this$props$DropDownL === void 0 ? _dropdownList.ListItem : _this$props$DropDownL;
      var dropdownSelectProps = {
        className: (0, _classnames["default"])({
          active: this.state.showTypeahead
        }),
        displayOption: displayOption,
        disabled: disabled,
        onClick: this._showTypeahead,
        error: this.props.isError,
        inputTheme: inputTheme,
        size: this.props.size
      };
      var intl = this.props.intl;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('item-selector', this.props.className),
        ref: this.root
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          position: 'relative'
        }
      }, this.props.multiSelect ? /*#__PURE__*/_react["default"].createElement(_chickletedInput["default"], (0, _extends2["default"])({}, dropdownSelectProps, {
        selectedItems: (0, _utils.toArray)(this.props.selectedItems),
        placeholder: this.props.placeholder,
        removeItem: this._removeItem,
        CustomChickletComponent: this.props.CustomChickletComponent,
        inputTheme: inputTheme
      })) : /*#__PURE__*/_react["default"].createElement(StyledDropdownSelect, dropdownSelectProps, /*#__PURE__*/_react["default"].createElement(DropdownSelectValue, {
        hasPlaceholder: !hasValue,
        disabled: disabled,
        inputTheme: inputTheme,
        className: "item-selector__dropdown__value"
      }, hasValue ? /*#__PURE__*/_react["default"].createElement(DropDownLineItemRenderComponent, {
        displayOption: displayOption,
        value: selected[0],
        disabled: disabled,
        light: inputTheme === 'light'
      }) : /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
        id: this.props.placeholder || 'placeholder.selectValue'
      })), this.props.erasable && hasValue ? /*#__PURE__*/_react["default"].createElement(DropdownSelectActionRight, null, /*#__PURE__*/_react["default"].createElement(_icons.Delete, {
        height: "12px",
        onClick: this._onErase
      })) : this.props.showArrow ? /*#__PURE__*/_react["default"].createElement(DropdownSelectActionRight, null, /*#__PURE__*/_react["default"].createElement(_icons.ArrowDown, {
        height: "14px",
        onClick: this._showTypeahead
      })) : null), this._renderDropdown(intl)));
    }
  }]);
  return ItemSelectorUnmemoized;
}(_react.Component);

(0, _defineProperty2["default"])(ItemSelectorUnmemoized, "defaultProps", {
  multiSelect: true,
  placeholder: 'placeholder.enterValue',
  closeOnSelect: true,
  searchable: true,
  DropDownRenderComponent: _dropdownList["default"],
  DropDownLineItemRenderComponent: _dropdownList.ListItem
});

var ItemSelector = /*#__PURE__*/_react["default"].memo(ItemSelectorUnmemoized);

ItemSelector.displayName = 'ItemSelector';

var _default = (0, _reactIntl.injectIntl)(ItemSelectorUnmemoized);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vaXRlbS1zZWxlY3Rvci9pdGVtLXNlbGVjdG9yLnRzeCJdLCJuYW1lcyI6WyJTdHlsZWREcm9wZG93blNlbGVjdCIsInN0eWxlZCIsImRpdiIsImF0dHJzIiwicHJvcHMiLCJjbGFzc05hbWUiLCJpbnB1dFRoZW1lIiwidGhlbWUiLCJzZWNvbmRhcnlJbnB1dCIsImlucHV0TFQiLCJpbnB1dCIsInNpemUiLCJpbnB1dEJveEhlaWdodFNtYWxsIiwiaW5wdXRCb3hIZWlnaHQiLCJkcm9wZG93bkxpc3RBbmNob3IiLCJEcm9wZG93blNlbGVjdFZhbHVlIiwic3BhbiIsImhhc1BsYWNlaG9sZGVyIiwic2VsZWN0Q29sb3JQbGFjZUhvbGRlckxUIiwic2VsZWN0Q29sb3JQbGFjZUhvbGRlciIsInNlbGVjdENvbG9yTFQiLCJzZWxlY3RDb2xvciIsImRyb3Bkb3duTGlzdEl0ZW1MVCIsImRyb3Bkb3duTGlzdEl0ZW0iLCJkcm9wZG93bkxpc3RBbmNob3JMVCIsIkRyb3Bkb3duU2VsZWN0QWN0aW9uUmlnaHQiLCJzdWJ0ZXh0Q29sb3IiLCJ0ZXh0Q29sb3IiLCJEcm9wZG93bldyYXBwZXIiLCJkcm9wZG93bldyYXBwZXJaIiwid2lkdGgiLCJJdGVtU2VsZWN0b3JVbm1lbW9pemVkIiwic2hvd1R5cGVhaGVhZCIsImRpbWVuc2lvbnMiLCJfaGlkZVR5cGVhaGVhZCIsInNldFN0YXRlIiwiX29uQmx1ciIsIm9uQmx1ciIsIml0ZW0iLCJlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJtdWx0aVNlbGVjdGVkSXRlbXMiLCJzZWxlY3RlZEl0ZW1zIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJ0IiwiaXRlbXMiLCJzbGljZSIsImxlbmd0aCIsIm9uQ2hhbmdlIiwiY2xvc2VPblNlbGVjdCIsImdldFZhbHVlIiwiQWNjZXNzb3IiLCJnZW5lcmF0ZU9wdGlvblRvU3RyaW5nRm9yIiwiZ2V0T3B0aW9uVmFsdWUiLCJkaXNwbGF5T3B0aW9uIiwicHJldmlvdXNTZWxlY3RlZCIsIm11bHRpU2VsZWN0IiwiY29uY2F0IiwiZGlzYWJsZWQiLCJzaG93RHJvcGRvd25Pbk1vdW50Iiwicm9vdCIsImN1cnJlbnQiLCJIVE1MRWxlbWVudCIsIl9oYW5kbGVSZXNpemUiLCJpbnRsIiwicGxhY2VtZW50Iiwic3RhdGUiLCJyZXN1bHRzIiwibGlzdEl0ZW0iLCJsaXN0QW5jaG9yIiwib3B0aW9ucyIsImZpbHRlck9wdGlvbiIsImZpeGVkT3B0aW9ucyIsInR5cGVhaGVhZFBsYWNlaG9sZGVyIiwiZm9ybWF0TWVzc2FnZSIsImlkIiwiX3NlbGVjdEl0ZW0iLCJEcm9wRG93blJlbmRlckNvbXBvbmVudCIsIkRyb3Bkb3duSGVhZGVyQ29tcG9uZW50IiwiRHJvcERvd25MaW5lSXRlbVJlbmRlckNvbXBvbmVudCIsInNlYXJjaGFibGUiLCJzZWFyY2hPcHRpb25zIiwic2VsZWN0ZWQiLCJoYXNWYWx1ZSIsIkxpc3RJdGVtIiwiZHJvcGRvd25TZWxlY3RQcm9wcyIsImFjdGl2ZSIsIm9uQ2xpY2siLCJfc2hvd1R5cGVhaGVhZCIsImVycm9yIiwiaXNFcnJvciIsInBvc2l0aW9uIiwicGxhY2Vob2xkZXIiLCJfcmVtb3ZlSXRlbSIsIkN1c3RvbUNoaWNrbGV0Q29tcG9uZW50IiwiZXJhc2FibGUiLCJfb25FcmFzZSIsInNob3dBcnJvdyIsIl9yZW5kZXJEcm9wZG93biIsIkNvbXBvbmVudCIsIkRyb3Bkb3duTGlzdCIsIkl0ZW1TZWxlY3RvciIsIlJlYWN0IiwibWVtbyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQVFPLElBQU1BLG9CQUFvQixHQUFHQyw2QkFBT0MsR0FBUCxDQUFXQyxLQUFYLENB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K0JBQStCLEVBQUVLO0FBTmIsQzs7QUFpT3hCLElBQU1pQixZQUFZLGdCQUFHQyxrQkFBTUMsSUFBTixDQUFXMUUsc0JBQVgsQ0FBckI7O0FBQ0F3RSxZQUFZLENBQUNHLFdBQWIsR0FBMkIsY0FBM0I7O2VBRWUsMkJBQVczRSxzQkFBWCxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWYsIENvbXBvbmVudFR5cGUsIE1vdXNlRXZlbnRIYW5kbGVyLCBSZWZPYmplY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHVuaXFCeSBmcm9tICdsb2Rhc2gudW5pcWJ5JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgQWNjZXNzb3IgZnJvbSAnLi9hY2Nlc3Nvcic7XG5pbXBvcnQgQ2hpY2tsZXRlZElucHV0IGZyb20gJy4vY2hpY2tsZXRlZC1pbnB1dCc7XG5pbXBvcnQgVHlwZWFoZWFkIGZyb20gJy4vdHlwZWFoZWFkJztcbmltcG9ydCB7RGVsZXRlLCBBcnJvd0Rvd259IGZyb20gJy4uL2ljb25zJztcbmltcG9ydCBEcm9wZG93bkxpc3QsIHtMaXN0SXRlbX0gZnJvbSAnLi9kcm9wZG93bi1saXN0JztcbmltcG9ydCBQb3J0YWxlZCBmcm9tICcuLi8uLi9jb21tb24vcG9ydGFsZWQnO1xuaW1wb3J0IHt0b0FycmF5LCBvYnNlcnZlRGltZW5zaW9ucywgdW5vYnNlcnZlRGltZW5zaW9uc30gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5pbXBvcnQge2luamVjdEludGwsIEludGxTaGFwZX0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ0BrZXBsZXIuZ2wvbG9jYWxpemF0aW9uJztcblxuaW50ZXJmYWNlIFN0eWxlZERyb3Bkb3duU2VsZWN0UHJvcHMge1xuICBpbnB1dFRoZW1lPzogc3RyaW5nO1xuICBzaXplPzogc3RyaW5nO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWREcm9wZG93blNlbGVjdCA9IHN0eWxlZC5kaXYuYXR0cnMocHJvcHMgPT4gKHtcbiAgY2xhc3NOYW1lOiBjbGFzc25hbWVzKCdpdGVtLXNlbGVjdG9yX19kcm9wZG93bicsIHByb3BzLmNsYXNzTmFtZSlcbn0pKTxTdHlsZWREcm9wZG93blNlbGVjdFByb3BzPmBcbiAgJHtwcm9wcyA9PlxuICAgIHByb3BzLmlucHV0VGhlbWUgPT09ICdzZWNvbmRhcnknXG4gICAgICA/IHByb3BzLnRoZW1lLnNlY29uZGFyeUlucHV0XG4gICAgICA6IHByb3BzLmlucHV0VGhlbWUgPT09ICdsaWdodCdcbiAgICAgID8gcHJvcHMudGhlbWUuaW5wdXRMVFxuICAgICAgOiBwcm9wcy50aGVtZS5pbnB1dH07XG5cbiAgaGVpZ2h0OiAke3Byb3BzID0+XG4gICAgcHJvcHMuc2l6ZSA9PT0gJ3NtYWxsJyA/IHByb3BzLnRoZW1lLmlucHV0Qm94SGVpZ2h0U21hbGwgOiBwcm9wcy50aGVtZS5pbnB1dEJveEhlaWdodH07XG5cbiAgLmxpc3RfX2l0ZW1fX2FuY2hvciB7XG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RBbmNob3J9O1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgRHJvcGRvd25TZWxlY3RWYWx1ZVByb3BzIHtcbiAgaGFzUGxhY2Vob2xkZXI/OiBib29sZWFuO1xuICBpbnB1dFRoZW1lPzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbmNvbnN0IERyb3Bkb3duU2VsZWN0VmFsdWUgPSBzdHlsZWQuc3BhbjxEcm9wZG93blNlbGVjdFZhbHVlUHJvcHM+YFxuICBjb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmhhc1BsYWNlaG9sZGVyICYmIHByb3BzLmlucHV0VGhlbWUgPT09ICdsaWdodCdcbiAgICAgID8gcHJvcHMudGhlbWUuc2VsZWN0Q29sb3JQbGFjZUhvbGRlckxUXG4gICAgICA6IHByb3BzLmhhc1BsYWNlaG9sZGVyXG4gICAgICA/IHByb3BzLnRoZW1lLnNlbGVjdENvbG9yUGxhY2VIb2xkZXJcbiAgICAgIDogcHJvcHMuaW5wdXRUaGVtZSA9PT0gJ2xpZ2h0J1xuICAgICAgPyBwcm9wcy50aGVtZS5zZWxlY3RDb2xvckxUXG4gICAgICA6IHByb3BzLnRoZW1lLnNlbGVjdENvbG9yfTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgLmxpc3RfX2l0ZW0ge1xuICAgICR7cHJvcHMgPT5cbiAgICAgIHByb3BzLmlucHV0VGhlbWUgPT09ICdsaWdodCcgPyBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RJdGVtTFQgOiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RJdGVtfTtcbiAgfVxuXG4gIC5saXN0X19pdGVtX19hbmNob3Ige1xuICAgICR7cHJvcHMgPT5cbiAgICAgIHByb3BzLmlucHV0VGhlbWUgPT09ICdsaWdodCdcbiAgICAgICAgPyBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RBbmNob3JMVFxuICAgICAgICA6IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdEFuY2hvcn07XG4gIH1cbmA7XG5cbmNvbnN0IERyb3Bkb3duU2VsZWN0QWN0aW9uUmlnaHQgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yfTtcblxuICA6aG92ZXIge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIH1cbmA7XG5cbmludGVyZmFjZSBEcm9wZG93bldyYXBwZXJQcm9wcyB7XG4gIHBsYWNlbWVudD86IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbn1cblxuY29uc3QgRHJvcGRvd25XcmFwcGVyID0gc3R5bGVkLmRpdjxEcm9wZG93bldyYXBwZXJQcm9wcz5gXG4gIGJvcmRlcjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25XcmFwcGVyWn07XG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofXB4O1xuYDtcblxuZXhwb3J0IHR5cGUgSXRlbVNlbGVjdG9yUHJvcHMgPSB7XG4gIHNlbGVjdGVkSXRlbXM/OlxuICAgIHwgUmVhZG9ubHlBcnJheTxzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgb2JqZWN0PlxuICAgIHwgc3RyaW5nXG4gICAgfCBudW1iZXJcbiAgICB8IGJvb2xlYW5cbiAgICB8IG9iamVjdFxuICAgIHwgbnVsbDtcbiAgb3B0aW9uczogUmVhZG9ubHlBcnJheTxzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgb2JqZWN0PjtcbiAgb25DaGFuZ2U6IChcbiAgICBpdGVtczpcbiAgICAgIHwgUmVhZG9ubHlBcnJheTxzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgb2JqZWN0PlxuICAgICAgfCBzdHJpbmdcbiAgICAgIHwgbnVtYmVyXG4gICAgICB8IGJvb2xlYW5cbiAgICAgIHwgb2JqZWN0XG4gICAgICB8IG51bGxcbiAgKSA9PiB2b2lkO1xuICBmaXhlZE9wdGlvbnM/OiBSZWFkb25seUFycmF5PHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBvYmplY3Q+IHwgbnVsbDtcbiAgZXJhc2FibGU/OiBib29sZWFuO1xuICBzaG93QXJyb3c/OiBib29sZWFuO1xuICBzZWFyY2hPcHRpb25zPzogKHZhbHVlOiBhbnksIG9wdDogYW55KSA9PiBhbnk7XG4gIHNlYXJjaGFibGU/OiBib29sZWFuO1xuICBkaXNwbGF5T3B0aW9uPzogc3RyaW5nIHwgKChvcHQ6IGFueSkgPT4gYW55KTtcbiAgZ2V0T3B0aW9uVmFsdWU/OiBzdHJpbmcgfCAoKG9wdDogYW55KSA9PiBhbnkpO1xuICBmaWx0ZXJPcHRpb24/OiBzdHJpbmcgfCAoKG9wdDogYW55KSA9PiBhbnkpO1xuICBwbGFjZW1lbnQ/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgaXNFcnJvcj86IGJvb2xlYW47XG4gIG11bHRpU2VsZWN0PzogYm9vbGVhbjtcbiAgaW5wdXRUaGVtZT86IHN0cmluZztcbiAgc2l6ZT86IHN0cmluZztcbiAgb25CbHVyPzogKCkgPT4gdm9pZDtcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIGNsb3NlT25TZWxlY3Q/OiBib29sZWFuO1xuICB0eXBlYWhlYWRQbGFjZWhvbGRlcj86IHN0cmluZztcbiAgRHJvcGRvd25IZWFkZXJDb21wb25lbnQ/OiBDb21wb25lbnRUeXBlPGFueT4gfCBudWxsO1xuICBEcm9wRG93blJlbmRlckNvbXBvbmVudD86IENvbXBvbmVudFR5cGU8YW55PjtcbiAgRHJvcERvd25MaW5lSXRlbVJlbmRlckNvbXBvbmVudD86IENvbXBvbmVudFR5cGU8YW55PjtcbiAgQ3VzdG9tQ2hpY2tsZXRDb21wb25lbnQ/OiBDb21wb25lbnRUeXBlPGFueT47XG4gIGludGw6IEludGxTaGFwZTtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBzaG93RHJvcGRvd25Pbk1vdW50PzogYm9vbGVhbjtcbn07XG5cbmNsYXNzIEl0ZW1TZWxlY3RvclVubWVtb2l6ZWQgZXh0ZW5kcyBDb21wb25lbnQ8SXRlbVNlbGVjdG9yUHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBtdWx0aVNlbGVjdDogdHJ1ZSxcbiAgICBwbGFjZWhvbGRlcjogJ3BsYWNlaG9sZGVyLmVudGVyVmFsdWUnLFxuICAgIGNsb3NlT25TZWxlY3Q6IHRydWUsXG4gICAgc2VhcmNoYWJsZTogdHJ1ZSxcbiAgICBEcm9wRG93blJlbmRlckNvbXBvbmVudDogRHJvcGRvd25MaXN0LFxuICAgIERyb3BEb3duTGluZUl0ZW1SZW5kZXJDb21wb25lbnQ6IExpc3RJdGVtXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgc2hvd1R5cGVhaGVhZDogZmFsc2UsXG4gICAgZGltZW5zaW9uczoge1xuICAgICAgd2lkdGg6IDIwMFxuICAgIH1cbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5zaG93RHJvcGRvd25Pbk1vdW50KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzaG93VHlwZWFoZWFkOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucm9vdC5jdXJyZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIG9ic2VydmVEaW1lbnNpb25zKHRoaXMucm9vdC5jdXJyZW50LCB0aGlzLl9oYW5kbGVSZXNpemUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnJvb3QuY3VycmVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICB1bm9ic2VydmVEaW1lbnNpb25zKHRoaXMucm9vdC5jdXJyZW50KTtcbiAgICB9XG4gIH1cblxuICByb290OiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+ID0gY3JlYXRlUmVmKCk7XG5cbiAgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKCkgPT4ge1xuICAgIHRoaXMuX2hpZGVUeXBlYWhlYWQoKTtcbiAgfTtcblxuICBfaGFuZGxlUmVzaXplID0gZGltZW5zaW9ucyA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZGltZW5zaW9uc30pO1xuICB9O1xuXG4gIF9oaWRlVHlwZWFoZWFkID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dUeXBlYWhlYWQ6IGZhbHNlfSk7XG4gICAgdGhpcy5fb25CbHVyKCk7XG4gIH07XG5cbiAgX29uQmx1ciA9ICgpID0+IHtcbiAgICAvLyBub3RlOiBjaGlja2xldGVkIGlucHV0IGlzIG5vdCBhIHJlYWwgZm9ybSBlbGVtZW50IHNvIHdlIGNhbGwgb25CbHVyKClcbiAgICAvLyB3aGVuIHdlIGZlZWwgdGhlIGV2ZW50cyBhcmUgYXBwcm9wcmlhdGVcbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKCk7XG4gICAgfVxuICB9O1xuXG4gIF9yZW1vdmVJdGVtID0gKGl0ZW0sIGUpID0+IHtcbiAgICAvLyBvbmx5IHVzZWQgd2hlbiBtdWx0aVNlbGVjdCA9IHRydWVcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBtdWx0aVNlbGVjdGVkSXRlbXMgPSB0b0FycmF5KHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtcyk7XG4gICAgY29uc3QgaW5kZXggPSBtdWx0aVNlbGVjdGVkSXRlbXMuZmluZEluZGV4KHQgPT4gdCA9PT0gaXRlbSk7XG5cbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICAuLi5tdWx0aVNlbGVjdGVkSXRlbXMuc2xpY2UoMCwgaW5kZXgpLFxuICAgICAgLi4ubXVsdGlTZWxlY3RlZEl0ZW1zLnNsaWNlKGluZGV4ICsgMSwgbXVsdGlTZWxlY3RlZEl0ZW1zLmxlbmd0aClcbiAgICBdO1xuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShpdGVtcyk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5jbG9zZU9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzaG93VHlwZWFoZWFkOiBmYWxzZX0pO1xuICAgICAgdGhpcy5fb25CbHVyKCk7XG4gICAgfVxuICB9O1xuXG4gIF9zZWxlY3RJdGVtID0gaXRlbSA9PiB7XG4gICAgY29uc3QgZ2V0VmFsdWUgPSBBY2Nlc3Nvci5nZW5lcmF0ZU9wdGlvblRvU3RyaW5nRm9yKFxuICAgICAgdGhpcy5wcm9wcy5nZXRPcHRpb25WYWx1ZSB8fCB0aGlzLnByb3BzLmRpc3BsYXlPcHRpb25cbiAgICApO1xuXG4gICAgY29uc3QgcHJldmlvdXNTZWxlY3RlZCA9IHRvQXJyYXkodGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW1zKTtcblxuICAgIGlmICh0aGlzLnByb3BzLm11bHRpU2VsZWN0KSB7XG4gICAgICBjb25zdCBpdGVtcyA9IHVuaXFCeShwcmV2aW91c1NlbGVjdGVkLmNvbmNhdCh0b0FycmF5KGl0ZW0pKSwgZ2V0VmFsdWUpO1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShpdGVtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZ2V0VmFsdWUoaXRlbSkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmNsb3NlT25TZWxlY3QpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dUeXBlYWhlYWQ6IGZhbHNlfSk7XG4gICAgICB0aGlzLl9vbkJsdXIoKTtcbiAgICB9XG4gIH07XG5cbiAgX29uRXJhc2U6IE1vdXNlRXZlbnRIYW5kbGVyID0gZSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG51bGwpO1xuICB9O1xuXG4gIF9zaG93VHlwZWFoZWFkOiBNb3VzZUV2ZW50SGFuZGxlciA9IGUgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2hvd1R5cGVhaGVhZDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9yZW5kZXJEcm9wZG93bihpbnRsOiBJbnRsU2hhcGUpIHtcbiAgICBjb25zdCB7cGxhY2VtZW50ID0gJ2JvdHRvbSd9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7ZGltZW5zaW9uc30gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQb3J0YWxlZCBsZWZ0PXswfSB0b3A9ezB9IGlzT3BlbmVkPXt0aGlzLnN0YXRlLnNob3dUeXBlYWhlYWR9IG9uQ2xvc2U9e3RoaXMuX2hpZGVUeXBlYWhlYWR9PlxuICAgICAgICA8RHJvcGRvd25XcmFwcGVyIHBsYWNlbWVudD17cGxhY2VtZW50fSB3aWR0aD17ZGltZW5zaW9ucz8ud2lkdGh9PlxuICAgICAgICAgIDxUeXBlYWhlYWRcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzZXM9e3tcbiAgICAgICAgICAgICAgcmVzdWx0czogJ2xpc3Qtc2VsZWN0b3InLFxuICAgICAgICAgICAgICBpbnB1dDogJ3R5cGVhaGVhZF9faW5wdXQnLFxuICAgICAgICAgICAgICBsaXN0SXRlbTogJ2xpc3RfX2l0ZW0nLFxuICAgICAgICAgICAgICBsaXN0QW5jaG9yOiAnbGlzdF9faXRlbV9fYW5jaG9yJ1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9wdGlvbnM9e3RoaXMucHJvcHMub3B0aW9uc31cbiAgICAgICAgICAgIGZpbHRlck9wdGlvbj17dGhpcy5wcm9wcy5maWx0ZXJPcHRpb259XG4gICAgICAgICAgICBmaXhlZE9wdGlvbnM9e3RoaXMucHJvcHMuZml4ZWRPcHRpb25zfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLnR5cGVhaGVhZFBsYWNlaG9sZGVyIHx8IGludGxcbiAgICAgICAgICAgICAgICA/IGludGwuZm9ybWF0TWVzc2FnZSh7aWQ6ICdwbGFjZWhvbGRlci5zZWFyY2gnfSlcbiAgICAgICAgICAgICAgICA6ICdTZWFyY2gnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbk9wdGlvblNlbGVjdGVkPXt0aGlzLl9zZWxlY3RJdGVtfVxuICAgICAgICAgICAgY3VzdG9tTGlzdENvbXBvbmVudD17dGhpcy5wcm9wcy5Ecm9wRG93blJlbmRlckNvbXBvbmVudH1cbiAgICAgICAgICAgIGN1c3RvbUxpc3RIZWFkZXJDb21wb25lbnQ9e3RoaXMucHJvcHMuRHJvcGRvd25IZWFkZXJDb21wb25lbnR9XG4gICAgICAgICAgICBjdXN0b21MaXN0SXRlbUNvbXBvbmVudD17dGhpcy5wcm9wcy5Ecm9wRG93bkxpbmVJdGVtUmVuZGVyQ29tcG9uZW50fVxuICAgICAgICAgICAgZGlzcGxheU9wdGlvbj17QWNjZXNzb3IuZ2VuZXJhdGVPcHRpb25Ub1N0cmluZ0Zvcih0aGlzLnByb3BzLmRpc3BsYXlPcHRpb24pfVxuICAgICAgICAgICAgc2VhcmNoYWJsZT17dGhpcy5wcm9wcy5zZWFyY2hhYmxlfVxuICAgICAgICAgICAgc2VhcmNoT3B0aW9ucz17dGhpcy5wcm9wcy5zZWFyY2hPcHRpb25zfVxuICAgICAgICAgICAgc2hvd09wdGlvbnNXaGVuRW1wdHlcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3RvQXJyYXkodGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW1zKX1cbiAgICAgICAgICAgIGxpZ2h0PXt0aGlzLnByb3BzLmlucHV0VGhlbWUgPT09ICdsaWdodCd9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Ecm9wZG93bldyYXBwZXI+XG4gICAgICA8L1BvcnRhbGVkPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0b0FycmF5KHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtcyk7XG4gICAgY29uc3QgaGFzVmFsdWUgPSBzZWxlY3RlZC5sZW5ndGg7XG4gICAgY29uc3QgZGlzcGxheU9wdGlvbiA9IEFjY2Vzc29yLmdlbmVyYXRlT3B0aW9uVG9TdHJpbmdGb3IodGhpcy5wcm9wcy5kaXNwbGF5T3B0aW9uKTtcbiAgICBjb25zdCB7XG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGlucHV0VGhlbWUgPSAncHJpbWFyeScsXG4gICAgICBEcm9wRG93bkxpbmVJdGVtUmVuZGVyQ29tcG9uZW50ID0gTGlzdEl0ZW1cbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGRyb3Bkb3duU2VsZWN0UHJvcHMgPSB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzbmFtZXMoe1xuICAgICAgICBhY3RpdmU6IHRoaXMuc3RhdGUuc2hvd1R5cGVhaGVhZFxuICAgICAgfSksXG4gICAgICBkaXNwbGF5T3B0aW9uLFxuICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgb25DbGljazogdGhpcy5fc2hvd1R5cGVhaGVhZCxcbiAgICAgIGVycm9yOiB0aGlzLnByb3BzLmlzRXJyb3IsXG4gICAgICBpbnB1dFRoZW1lLFxuICAgICAgc2l6ZTogdGhpcy5wcm9wcy5zaXplXG4gICAgfTtcbiAgICBjb25zdCBpbnRsID0gdGhpcy5wcm9wcy5pbnRsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdpdGVtLXNlbGVjdG9yJywgdGhpcy5wcm9wcy5jbGFzc05hbWUpfSByZWY9e3RoaXMucm9vdH0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJ319PlxuICAgICAgICAgIHsvKiB0aGlzIHBhcnQgaXMgdXNlZCB0byBkaXNwbGF5IHRoZSBsYWJlbCAqL31cbiAgICAgICAgICB7dGhpcy5wcm9wcy5tdWx0aVNlbGVjdCA/IChcbiAgICAgICAgICAgIDxDaGlja2xldGVkSW5wdXRcbiAgICAgICAgICAgICAgey4uLmRyb3Bkb3duU2VsZWN0UHJvcHN9XG4gICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3RvQXJyYXkodGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW1zKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIHJlbW92ZUl0ZW09e3RoaXMuX3JlbW92ZUl0ZW19XG4gICAgICAgICAgICAgIEN1c3RvbUNoaWNrbGV0Q29tcG9uZW50PXt0aGlzLnByb3BzLkN1c3RvbUNoaWNrbGV0Q29tcG9uZW50fVxuICAgICAgICAgICAgICBpbnB1dFRoZW1lPXtpbnB1dFRoZW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFN0eWxlZERyb3Bkb3duU2VsZWN0IHsuLi5kcm9wZG93blNlbGVjdFByb3BzfT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duU2VsZWN0VmFsdWVcbiAgICAgICAgICAgICAgICBoYXNQbGFjZWhvbGRlcj17IWhhc1ZhbHVlfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgICBpbnB1dFRoZW1lPXtpbnB1dFRoZW1lfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW0tc2VsZWN0b3JfX2Ryb3Bkb3duX192YWx1ZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aGFzVmFsdWUgPyAoXG4gICAgICAgICAgICAgICAgICA8RHJvcERvd25MaW5lSXRlbVJlbmRlckNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5T3B0aW9uPXtkaXNwbGF5T3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRbMF19XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgbGlnaHQ9e2lucHV0VGhlbWUgPT09ICdsaWdodCd9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17dGhpcy5wcm9wcy5wbGFjZWhvbGRlciB8fCAncGxhY2Vob2xkZXIuc2VsZWN0VmFsdWUnfSAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvRHJvcGRvd25TZWxlY3RWYWx1ZT5cbiAgICAgICAgICAgICAge3RoaXMucHJvcHMuZXJhc2FibGUgJiYgaGFzVmFsdWUgPyAoXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duU2VsZWN0QWN0aW9uUmlnaHQ+XG4gICAgICAgICAgICAgICAgICA8RGVsZXRlIGhlaWdodD1cIjEycHhcIiBvbkNsaWNrPXt0aGlzLl9vbkVyYXNlfSAvPlxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25TZWxlY3RBY3Rpb25SaWdodD5cbiAgICAgICAgICAgICAgKSA6IHRoaXMucHJvcHMuc2hvd0Fycm93ID8gKFxuICAgICAgICAgICAgICAgIDxEcm9wZG93blNlbGVjdEFjdGlvblJpZ2h0PlxuICAgICAgICAgICAgICAgICAgPEFycm93RG93biBoZWlnaHQ9XCIxNHB4XCIgb25DbGljaz17dGhpcy5fc2hvd1R5cGVhaGVhZH0gLz5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duU2VsZWN0QWN0aW9uUmlnaHQ+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9TdHlsZWREcm9wZG93blNlbGVjdD5cbiAgICAgICAgICApfVxuICAgICAgICAgIHsvKiB0aGlzIHBhcnQgaXMgdXNlZCB0byBidWlsdCB0aGUgbGlzdCAqL31cbiAgICAgICAgICB7dGhpcy5fcmVuZGVyRHJvcGRvd24oaW50bCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBJdGVtU2VsZWN0b3IgPSBSZWFjdC5tZW1vKEl0ZW1TZWxlY3RvclVubWVtb2l6ZWQpO1xuSXRlbVNlbGVjdG9yLmRpc3BsYXlOYW1lID0gJ0l0ZW1TZWxlY3Rvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdEludGwoSXRlbVNlbGVjdG9yVW5tZW1vaXplZCk7XG4iXX0=