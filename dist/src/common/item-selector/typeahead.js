"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _fuzzy = _interopRequireDefault(require("fuzzy"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _window = require("global/window");

var _accessor = _interopRequireDefault(require("./accessor"));

var _dropdownList = _interopRequireWildcard(require("./dropdown-list"));

var _icons = require("../icons");

var _constants = require("@kepler.gl/constants");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DEFAULT_CLASS = 'typeahead';
/**
 * Copied mostly from 'react-typeahead', an auto-completing text input
 *
 * Renders an text input that shows options nearby that you can use the
 * keyboard or mouse to select.
 */

var TypeaheadWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  :focus {\n    outline: 0;\n  }\n"])), function (props) {
  return props.light ? props.theme.dropdownListBgdLT : props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.dropdownListShadow;
});

var InputBox = _styledComponents["default"].div.attrs({
  className: 'typeahead__input_box'
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 8px;\n"])));

var TypeaheadInput = _styledComponents["default"].input(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  ", " :hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n"])), function (props) {
  return props.light ? props.theme.inputLT : props.theme.secondaryInput;
}, function (props) {
  return props.light ? props.theme.selectBackgroundLT : props.theme.secondaryInputBgd;
});

var InputIcon = _styledComponents["default"].div.attrs({
  className: 'typeahead__input_icon'
})(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  right: 15px;\n  top: 14px;\n  color: ", ";\n"])), function (props) {
  return props.theme.inputPlaceholderColor;
});

function generateSearchFunction(props) {
  var searchOptions = props.searchOptions,
      filterOption = props.filterOption;

  if (typeof searchOptions === 'function') {
    if (filterOption !== null) {
      _window.console.warn('searchOptions prop is being used, filterOption prop will be ignored');
    }

    return searchOptions;
  } else if (typeof filterOption === 'function') {
    // use custom filter option
    return function (value, options) {
      return options.filter(function (o) {
        return filterOption(value, o);
      });
    };
  }

  var mapper = typeof filterOption === 'string' ? _accessor["default"].generateAccessor(filterOption) : _accessor["default"].IDENTITY_FN;
  return function (value, options) {
    return _fuzzy["default"].filter(value, options, {
      extract: mapper
    }).map(function (res) {
      return options[res.index];
    });
  };
}

function searchOptionsOnInput(inputValue, props) {
  var searchOptions = generateSearchFunction(props);
  return searchOptions(inputValue, props.options);
}

function getOptionsForValue(value, props, state) {
  var options = props.options,
      showOptionsWhenEmpty = props.showOptionsWhenEmpty;

  if (!props.searchable) {
    // directly pass through options if can not be searched
    return options;
  }

  if (shouldSkipSearch(value, state, showOptionsWhenEmpty)) {
    return options;
  }

  var searchOptions = generateSearchFunction(props);
  return searchOptions(value, options);
}

function shouldSkipSearch(input, state, showOptionsWhenEmpty) {
  var emptyValue = !input || input.trim().length === 0; // this.state must be checked because it may not be defined yet if this function
  // is called from within getInitialState

  var isFocused = state && state.isFocused;
  return !(showOptionsWhenEmpty && isFocused) && emptyValue;
}

var Typeahead = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Typeahead, _Component);

  var _super = _createSuper(Typeahead);

  function Typeahead(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Typeahead);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "root", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "entry", /*#__PURE__*/(0, _react.createRef)());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "focus", function () {
      if (_this.entry.current) {
        _this.entry.current.focus();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_hasCustomValue", function () {
      var _this$state$entryValu;

      return Number(_this.props.allowCustomValues) > 0 && Number((_this$state$entryValu = _this.state.entryValue) === null || _this$state$entryValu === void 0 ? void 0 : _this$state$entryValu.length) >= Number(_this.props.allowCustomValues) && _this.state.searchResults.indexOf(_this.state.entryValue) < 0;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_getCustomValue", function () {
      return _this._hasCustomValue() ? _this.state.entryValue : null;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onOptionSelected", function (option, event) {
      var _this$props$onOptionS, _this$props;

      if (_this.props.searchable) {
        // reset entry input
        _this.setState({
          // reset search options when selection has been made
          searchResults: _this.props.options || [],
          selection: '',
          entryValue: ''
        });
      }

      return (_this$props$onOptionS = (_this$props = _this.props).onOptionSelected) === null || _this$props$onOptionS === void 0 ? void 0 : _this$props$onOptionS.call(_this$props, option, event);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onTextEntryUpdated", function () {
      if (_this.props.searchable) {
        var _this$entry$current;

        var value = (_this$entry$current = _this.entry.current) === null || _this$entry$current === void 0 ? void 0 : _this$entry$current.value;

        _this.setState({
          searchResults: searchOptionsOnInput(value, _this.props),
          selection: '',
          entryValue: value
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onEnter", function (event) {
      var selection = _this.getSelection();

      if (!selection) {
        var _this$props$onKeyDown, _this$props2;

        return (_this$props$onKeyDown = (_this$props2 = _this.props).onKeyDown) === null || _this$props$onKeyDown === void 0 ? void 0 : _this$props$onKeyDown.call(_this$props2, event);
      }

      return _this._onOptionSelected(selection, event);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onEscape", function () {
      _this.setState({
        selectionIndex: null
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onTab", function (event) {
      var selection = _this.getSelection();

      var option = selection ? selection : _this.state.searchResults.length > 0 ? _this.state.searchResults[0] : null;

      if (option === null && _this._hasCustomValue()) {
        option = _this._getCustomValue();
      }

      if (option !== null) {
        return _this._onOptionSelected(option, event);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "eventMap", function () {
      var events = {};
      events[_constants.KeyEvent.DOM_VK_UP] = _this.navUp;
      events[_constants.KeyEvent.DOM_VK_DOWN] = _this.navDown;
      events[_constants.KeyEvent.DOM_VK_RETURN] = events[_constants.KeyEvent.DOM_VK_ENTER] = _this._onEnter;
      events[_constants.KeyEvent.DOM_VK_ESCAPE] = _this._onEscape;
      events[_constants.KeyEvent.DOM_VK_TAB] = _this._onTab;
      return events;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_nav", function (delta) {
      if (!_this._hasHint()) {
        return;
      }

      var newIndex = _this.state.selectionIndex === null ? delta === 1 ? 0 : delta : _this.state.selectionIndex + delta;
      var length = _this.props.maxVisible ? _this.state.searchResults.slice(0, _this.props.maxVisible).length : _this.state.searchResults.length;

      if (_this._hasCustomValue()) {
        length += 1;
      }

      if (newIndex < 0) {
        newIndex += length;
      } else if (newIndex >= length) {
        newIndex -= length;
      }

      _this.setState({
        selectionIndex: newIndex
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "navDown", function () {
      _this._nav(1);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "navUp", function () {
      _this._nav(-1);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onChange", function (event) {
      if (_this.props.onChange) {
        _this.props.onChange(event);
      }

      _this._onTextEntryUpdated();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onKeyDown", function (event) {
      // If there are no visible elements, don't perform selector navigation.
      // Just pass this up to the upstream onKeydown handler.
      // Also skip if the user is pressing the shift key, since none of our handlers are looking for shift
      if (!_this._hasHint() || event.shiftKey) {
        var _this$props$onKeyDown2, _this$props3;

        return (_this$props$onKeyDown2 = (_this$props3 = _this.props).onKeyDown) === null || _this$props$onKeyDown2 === void 0 ? void 0 : _this$props$onKeyDown2.call(_this$props3, event);
      }

      var handler = _this.eventMap()[event.keyCode];

      if (handler) {
        handler(event);
      } else {
        var _this$props$onKeyDown3, _this$props4;

        return (_this$props$onKeyDown3 = (_this$props4 = _this.props).onKeyDown) === null || _this$props$onKeyDown3 === void 0 ? void 0 : _this$props$onKeyDown3.call(_this$props4, event);
      } // Don't propagate the keystroke back to the DOM/browser


      event.preventDefault();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onFocus", function (event) {
      _this.setState({
        isFocused: true
      });

      if (_this.props.onFocus) {
        return _this.props.onFocus(event);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onBlur", function (event) {
      _this.setState({
        isFocused: false
      });

      if (_this.props.onBlur) {
        return _this.props.onBlur(event);
      }
    });
    _this.state = {
      // initiate searchResults with options
      searchResults: _this.props.options || [],
      // This should be called something else, 'entryValue'
      entryValue: _this.props.value || _this.props.initialValue,
      // A valid typeahead value
      selection: _this.props.value,
      // Index of the selection
      selectionIndex: null,
      // Keep track of the focus state of the input element, to determine
      // whether to show options when empty (if showOptionsWhenEmpty is true)
      isFocused: false
    };
    return _this;
  }

  (0, _createClass2["default"])(Typeahead, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // call focus on entry or div to trigger key events listener
      if (this.entry.current) {
        this.entry.current.focus();
      } else {
        var _this$root$current;

        (_this$root$current = this.root.current) === null || _this$root$current === void 0 ? void 0 : _this$root$current.focus();
      }
    }
  }, {
    key: "_renderIncrementalSearchResults",
    value: function _renderIncrementalSearchResults() {
      var _this$props$customLis = this.props.customListComponent,
          CustomListComponent = _this$props$customLis === void 0 ? _dropdownList["default"] : _this$props$customLis;
      return /*#__PURE__*/_react["default"].createElement(CustomListComponent, {
        fixedOptions: this.props.fixedOptions,
        options: this.state.searchResults,
        areResultsTruncated: false,
        resultsTruncatedMessage: this.props.resultsTruncatedMessage,
        onOptionSelected: this._onOptionSelected,
        allowCustomValues: this.props.allowCustomValues,
        customValue: this._getCustomValue(),
        customClasses: this.props.customClasses,
        customListItemComponent: this.props.customListItemComponent,
        customListHeaderComponent: this.props.customListHeaderComponent,
        selectionIndex: this.state.selectionIndex,
        defaultClassNames: this.props.defaultClassNames,
        displayOption: this.props.displayOption,
        selectedItems: this.props.selectedItems,
        light: this.props.light
      });
    }
  }, {
    key: "getSelection",
    value: function getSelection() {
      var index = this.state.selectionIndex;

      if (index === null) {
        return null;
      }

      index = Number(index);

      if (this._hasCustomValue()) {
        if (index === 0) {
          return this.state.entryValue;
        }

        index--;
      }

      if (this._hasFixedOptions()) {
        var _this$props$fixedOpti, _this$props$fixedOpti2, _this$props$fixedOpti3;

        return index < Number((_this$props$fixedOpti = this.props.fixedOptions) === null || _this$props$fixedOpti === void 0 ? void 0 : _this$props$fixedOpti.length) ? (_this$props$fixedOpti2 = this.props.fixedOptions) === null || _this$props$fixedOpti2 === void 0 ? void 0 : _this$props$fixedOpti2[index] : this.state.searchResults[index - Number((_this$props$fixedOpti3 = this.props.fixedOptions) === null || _this$props$fixedOpti3 === void 0 ? void 0 : _this$props$fixedOpti3.length)];
      }

      return this.state.searchResults[index];
    }
  }, {
    key: "_renderHiddenInput",
    value: function _renderHiddenInput() {
      if (!this.props.name) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement("input", {
        type: "hidden",
        name: this.props.name,
        value: this.state.selection
      });
    }
  }, {
    key: "_hasHint",
    value: function _hasHint() {
      return this.state.searchResults.length > 0 || this._hasCustomValue();
    }
  }, {
    key: "_hasFixedOptions",
    value: function _hasFixedOptions() {
      return Array.isArray(this.props.fixedOptions) && this.props.fixedOptions.length;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$customCla, _this$props$customCla2;

      var inputClasses = {};
      inputClasses[(_this$props$customCla = this.props.customClasses) === null || _this$props$customCla === void 0 ? void 0 : _this$props$customCla.input] = Boolean((_this$props$customCla2 = this.props.customClasses) === null || _this$props$customCla2 === void 0 ? void 0 : _this$props$customCla2.input);
      var inputClassList = (0, _classnames["default"])(inputClasses);
      var classes = (0, _defineProperty2["default"])({}, DEFAULT_CLASS, this.props.defaultClassNames);
      classes[this.props.className ? this.props.className : ''] = Boolean(this.props.className);
      var classList = (0, _classnames["default"])(classes);
      return /*#__PURE__*/_react["default"].createElement(TypeaheadWrapper, {
        className: classList,
        ref: this.root,
        tabIndex: 0,
        onKeyDown: this._onKeyDown,
        onKeyPress: this.props.onKeyPress,
        onKeyUp: this.props.onKeyUp,
        onFocus: this._onFocus,
        light: this.props.light
      }, this._renderHiddenInput(), this.props.searchable ? /*#__PURE__*/_react["default"].createElement(InputBox, null, /*#__PURE__*/_react["default"].createElement(TypeaheadInput, (0, _extends2["default"])({
        ref: this.entry,
        type: "text",
        disabled: this.props.disabled
      }, this.props.inputProps, {
        placeholder: this.props.placeholder,
        className: inputClassList,
        value: this.state.entryValue,
        onChange: this._onChange,
        onBlur: this._onBlur,
        light: this.props.light
      })), /*#__PURE__*/_react["default"].createElement(InputIcon, null, /*#__PURE__*/_react["default"].createElement(this.props.inputIcon, {
        height: "18px"
      }))) : null, this._renderIncrementalSearchResults());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.options === state.prevOptions) {
        return {};
      } //  invoked after a component is instantiated as well as before it is re-rendered


      var searchResults = getOptionsForValue(state.entryValue, props, state);
      return {
        searchResults: searchResults,
        prevOptions: props.options
      };
    }
  }]);
  return Typeahead;
}(_react.Component);

(0, _defineProperty2["default"])(Typeahead, "defaultProps", {
  options: [],
  customClasses: {},
  allowCustomValues: 0,
  initialValue: '',
  value: '',
  placeholder: '',
  disabled: false,
  textarea: false,
  inputProps: {},
  onOptionSelected: function onOptionSelected(option) {},
  onChange: function onChange(event) {},
  onKeyDown: function onKeyDown(event) {},
  onKeyPress: function onKeyPress(event) {},
  onKeyUp: function onKeyUp(event) {},
  onFocus: function onFocus(event) {},
  onBlur: function onBlur(event) {},
  filterOption: null,
  searchOptions: null,
  inputDisplayOption: null,
  defaultClassNames: true,
  customListComponent: _dropdownList["default"],
  customListItemComponent: _dropdownList.ListItem,
  inputIcon: _icons.Search,
  customListHeaderComponent: null,
  showOptionsWhenEmpty: true,
  searchable: true,
  resultsTruncatedMessage: null
});
(0, _reactLifecyclesCompat.polyfill)(Typeahead);
var _default = Typeahead;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vaXRlbS1zZWxlY3Rvci90eXBlYWhlYWQudHN4Il0sIm5hbWVzIjpbIkRFRkFVTFRfQ0xBU1MiLCJUeXBlYWhlYWRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJsaWdodCIsInRoZW1lIiwiZHJvcGRvd25MaXN0QmdkTFQiLCJkcm9wZG93bkxpc3RCZ2QiLCJkcm9wZG93bkxpc3RTaGFkb3ciLCJJbnB1dEJveCIsImF0dHJzIiwiY2xhc3NOYW1lIiwiVHlwZWFoZWFkSW5wdXQiLCJpbnB1dCIsImlucHV0TFQiLCJzZWNvbmRhcnlJbnB1dCIsInNlbGVjdEJhY2tncm91bmRMVCIsInNlY29uZGFyeUlucHV0QmdkIiwiSW5wdXRJY29uIiwiaW5wdXRQbGFjZWhvbGRlckNvbG9yIiwiZ2VuZXJhdGVTZWFyY2hGdW5jdGlvbiIsInNlYXJjaE9wdGlvbnMiLCJmaWx0ZXJPcHRpb24iLCJDb25zb2xlIiwid2FybiIsInZhbHVlIiwib3B0aW9ucyIsImZpbHRlciIsIm8iLCJtYXBwZXIiLCJBY2Nlc3NvciIsImdlbmVyYXRlQWNjZXNzb3IiLCJJREVOVElUWV9GTiIsImZ1enp5IiwiZXh0cmFjdCIsIm1hcCIsInJlcyIsImluZGV4Iiwic2VhcmNoT3B0aW9uc09uSW5wdXQiLCJpbnB1dFZhbHVlIiwiZ2V0T3B0aW9uc0ZvclZhbHVlIiwic3RhdGUiLCJzaG93T3B0aW9uc1doZW5FbXB0eSIsInNlYXJjaGFibGUiLCJzaG91bGRTa2lwU2VhcmNoIiwiZW1wdHlWYWx1ZSIsInRyaW0iLCJsZW5ndGgiLCJpc0ZvY3VzZWQiLCJUeXBlYWhlYWQiLCJlbnRyeSIsImN1cnJlbnQiLCJmb2N1cyIsIk51bWJlciIsImFsbG93Q3VzdG9tVmFsdWVzIiwiZW50cnlWYWx1ZSIsInNlYXJjaFJlc3VsdHMiLCJpbmRleE9mIiwiX2hhc0N1c3RvbVZhbHVlIiwib3B0aW9uIiwiZXZlbnQiLCJzZXRTdGF0ZSIsInNlbGVjdGlvbiIsIm9uT3B0aW9uU2VsZWN0ZWQiLCJnZXRTZWxlY3Rpb24iLCJvbktleURvd24iLCJfb25PcHRpb25TZWxlY3RlZCIsInNlbGVjdGlvbkluZGV4IiwiX2dldEN1c3RvbVZhbHVlIiwiZXZlbnRzIiwiS2V5RXZlbnQiLCJET01fVktfVVAiLCJuYXZVcCIsIkRPTV9WS19ET1dOIiwibmF2RG93biIsIkRPTV9WS19SRVRVUk4iLCJET01fVktfRU5URVIiLCJfb25FbnRlciIsIkRPTV9WS19FU0NBUEUiLCJfb25Fc2NhcGUiLCJET01fVktfVEFCIiwiX29uVGFiIiwiZGVsdGEiLCJfaGFzSGludCIsIm5ld0luZGV4IiwibWF4VmlzaWJsZSIsInNsaWNlIiwiX25hdiIsIm9uQ2hhbmdlIiwiX29uVGV4dEVudHJ5VXBkYXRlZCIsInNoaWZ0S2V5IiwiaGFuZGxlciIsImV2ZW50TWFwIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0Iiwib25Gb2N1cyIsIm9uQmx1ciIsImluaXRpYWxWYWx1ZSIsInJvb3QiLCJjdXN0b21MaXN0Q29tcG9uZW50IiwiQ3VzdG9tTGlzdENvbXBvbmVudCIsIkRyb3Bkb3duTGlzdCIsImZpeGVkT3B0aW9ucyIsInJlc3VsdHNUcnVuY2F0ZWRNZXNzYWdlIiwiY3VzdG9tQ2xhc3NlcyIsImN1c3RvbUxpc3RJdGVtQ29tcG9uZW50IiwiY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudCIsImRlZmF1bHRDbGFzc05hbWVzIiwiZGlzcGxheU9wdGlvbiIsInNlbGVjdGVkSXRlbXMiLCJfaGFzRml4ZWRPcHRpb25zIiwibmFtZSIsIkFycmF5IiwiaXNBcnJheSIsImlucHV0Q2xhc3NlcyIsIkJvb2xlYW4iLCJpbnB1dENsYXNzTGlzdCIsImNsYXNzZXMiLCJjbGFzc0xpc3QiLCJfb25LZXlEb3duIiwib25LZXlQcmVzcyIsIm9uS2V5VXAiLCJfb25Gb2N1cyIsIl9yZW5kZXJIaWRkZW5JbnB1dCIsImRpc2FibGVkIiwiaW5wdXRQcm9wcyIsInBsYWNlaG9sZGVyIiwiX29uQ2hhbmdlIiwiX29uQmx1ciIsIl9yZW5kZXJJbmNyZW1lbnRhbFNlYXJjaFJlc3VsdHMiLCJwcmV2T3B0aW9ucyIsIkNvbXBvbmVudCIsInRleHRhcmVhIiwiaW5wdXREaXNwbGF5T3B0aW9uIiwiTGlzdEl0ZW0iLCJpbnB1dEljb24iLCJTZWFyY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLGFBQWEsR0FBRyxXQUF0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQyxnQkFBZ0IsR0FBR0MsNkJBQU9DLEdBQVYsME5BR0EsVUFBQUMsS0FBSztBQUFBLFNBQ3ZCQSxLQUFLLENBQUNDLEtBQU4sR0FBY0QsS0FBSyxDQUFDRSxLQUFOLENBQVlDLGlCQUExQixHQUE4Q0gsS0FBSyxDQUFDRSxLQUFOLENBQVlFLGVBRG5DO0FBQUEsQ0FITCxFQUtOLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUcsa0JBQWhCO0FBQUEsQ0FMQyxDQUF0Qjs7QUFZQSxJQUFNQyxRQUFRLEdBQUdSLDZCQUFPQyxHQUFQLENBQVdRLEtBQVgsQ0FBaUI7QUFDaENDLEVBQUFBLFNBQVMsRUFBRTtBQURxQixDQUFqQixDQUFILDJHQUFkOztBQU1BLElBQU1DLGNBQWMsR0FBR1gsNkJBQU9ZLEtBQVYsb0tBQ2hCLFVBQUFWLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLEtBQU4sR0FBY0QsS0FBSyxDQUFDRSxLQUFOLENBQVlTLE9BQTFCLEdBQW9DWCxLQUFLLENBQUNFLEtBQU4sQ0FBWVUsY0FBckQ7QUFBQSxDQURXLEVBR0ksVUFBQVosS0FBSztBQUFBLFNBQ3ZCQSxLQUFLLENBQUNDLEtBQU4sR0FBY0QsS0FBSyxDQUFDRSxLQUFOLENBQVlXLGtCQUExQixHQUErQ2IsS0FBSyxDQUFDRSxL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QkFBbUIsRUFBRUUsd0JBckJEO0FBc0JwQkksRUFBQUEsdUJBQXVCLEVBQUU2QixzQkF0Qkw7QUF1QnBCQyxFQUFBQSxTQUFTLEVBQUVDLGFBdkJTO0FBd0JwQjlCLEVBQUFBLHlCQUF5QixFQUFFLElBeEJQO0FBeUJwQmhFLEVBQUFBLG9CQUFvQixFQUFFLElBekJGO0FBMEJwQkMsRUFBQUEsVUFBVSxFQUFFLElBMUJRO0FBMkJwQjRELEVBQUFBLHVCQUF1QixFQUFFO0FBM0JMLEM7QUE2VnhCLHFDQUFTdEQsU0FBVDtlQUVlQSxTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBjcmVhdGVSZWYsIEVsZW1lbnRUeXBlLCBLZXlib2FyZEV2ZW50SGFuZGxlcn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtwb2x5ZmlsbH0gZnJvbSAncmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQnO1xuaW1wb3J0IGZ1enp5IGZyb20gJ2Z1enp5JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge2NvbnNvbGUgYXMgQ29uc29sZX0gZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5cbmltcG9ydCBBY2Nlc3NvciBmcm9tICcuL2FjY2Vzc29yJztcbmltcG9ydCBEcm9wZG93bkxpc3QsIHtMaXN0SXRlbX0gZnJvbSAnLi9kcm9wZG93bi1saXN0JztcbmltcG9ydCB7U2VhcmNofSBmcm9tICcuLi9pY29ucyc7XG5pbXBvcnQge0tleUV2ZW50fSBmcm9tICdAa2VwbGVyLmdsL2NvbnN0YW50cyc7XG5cbmNvbnN0IERFRkFVTFRfQ0xBU1MgPSAndHlwZWFoZWFkJztcbi8qKlxuICogQ29waWVkIG1vc3RseSBmcm9tICdyZWFjdC10eXBlYWhlYWQnLCBhbiBhdXRvLWNvbXBsZXRpbmcgdGV4dCBpbnB1dFxuICpcbiAqIFJlbmRlcnMgYW4gdGV4dCBpbnB1dCB0aGF0IHNob3dzIG9wdGlvbnMgbmVhcmJ5IHRoYXQgeW91IGNhbiB1c2UgdGhlXG4gKiBrZXlib2FyZCBvciBtb3VzZSB0byBzZWxlY3QuXG4gKi9cblxuaW50ZXJmYWNlIFR5cGVhaGVhZFdyYXBwZXJQcm9wcyB7XG4gIGxpZ2h0PzogYm9vbGVhbjtcbn1cblxuY29uc3QgVHlwZWFoZWFkV3JhcHBlciA9IHN0eWxlZC5kaXY8VHlwZWFoZWFkV3JhcHBlclByb3BzPmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmxpZ2h0ID8gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0QmdkTFQgOiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RCZ2R9O1xuICBib3gtc2hhZG93OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdFNoYWRvd307XG5cbiAgOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG5gO1xuXG5jb25zdCBJbnB1dEJveCA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICd0eXBlYWhlYWRfX2lucHV0X2JveCdcbn0pYFxuICBwYWRkaW5nOiA4cHg7XG5gO1xuXG5jb25zdCBUeXBlYWhlYWRJbnB1dCA9IHN0eWxlZC5pbnB1dDxUeXBlYWhlYWRXcmFwcGVyUHJvcHM+YFxuICAke3Byb3BzID0+IChwcm9wcy5saWdodCA/IHByb3BzLnRoZW1lLmlucHV0TFQgOiBwcm9wcy50aGVtZS5zZWNvbmRhcnlJbnB1dCl9IDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICAgIHByb3BzLmxpZ2h0ID8gcHJvcHMudGhlbWUuc2VsZWN0QmFja2dyb3VuZExUIDogcHJvcHMudGhlbWUuc2Vjb25kYXJ5SW5wdXRCZ2R9O1xuICB9XG5gO1xuXG5jb25zdCBJbnB1dEljb24gPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAndHlwZWFoZWFkX19pbnB1dF9pY29uJ1xufSlgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMTRweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRQbGFjZWhvbGRlckNvbG9yfTtcbmA7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU2VhcmNoRnVuY3Rpb24ocHJvcHM6IFR5cGVhaGVhZFByb3BzKSB7XG4gIGNvbnN0IHtzZWFyY2hPcHRpb25zLCBmaWx0ZXJPcHRpb259ID0gcHJvcHM7XG4gIGlmICh0eXBlb2Ygc2VhcmNoT3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChmaWx0ZXJPcHRpb24gIT09IG51bGwpIHtcbiAgICAgIENvbnNvbGUud2Fybignc2VhcmNoT3B0aW9ucyBwcm9wIGlzIGJlaW5nIHVzZWQsIGZpbHRlck9wdGlvbiBwcm9wIHdpbGwgYmUgaWdub3JlZCcpO1xuICAgIH1cbiAgICByZXR1cm4gc2VhcmNoT3B0aW9ucztcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlsdGVyT3B0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gdXNlIGN1c3RvbSBmaWx0ZXIgb3B0aW9uXG4gICAgcmV0dXJuICh2YWx1ZSwgb3B0aW9ucykgPT4gb3B0aW9ucy5maWx0ZXIobyA9PiBmaWx0ZXJPcHRpb24odmFsdWUsIG8pKTtcbiAgfVxuXG4gIGNvbnN0IG1hcHBlciA9XG4gICAgdHlwZW9mIGZpbHRlck9wdGlvbiA9PT0gJ3N0cmluZydcbiAgICAgID8gQWNjZXNzb3IuZ2VuZXJhdGVBY2Nlc3NvcihmaWx0ZXJPcHRpb24pXG4gICAgICA6IEFjY2Vzc29yLklERU5USVRZX0ZOO1xuXG4gIHJldHVybiAodmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gZnV6enkuZmlsdGVyKHZhbHVlLCBvcHRpb25zLCB7ZXh0cmFjdDogbWFwcGVyfSkubWFwKHJlcyA9PiBvcHRpb25zW3Jlcy5pbmRleF0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzZWFyY2hPcHRpb25zT25JbnB1dChpbnB1dFZhbHVlLCBwcm9wcykge1xuICBjb25zdCBzZWFyY2hPcHRpb25zID0gZ2VuZXJhdGVTZWFyY2hGdW5jdGlvbihwcm9wcyk7XG4gIHJldHVybiBzZWFyY2hPcHRpb25zKGlucHV0VmFsdWUsIHByb3BzLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBnZXRPcHRpb25zRm9yVmFsdWUodmFsdWUsIHByb3BzLCBzdGF0ZSkge1xuICBjb25zdCB7b3B0aW9ucywgc2hvd09wdGlvbnNXaGVuRW1wdHl9ID0gcHJvcHM7XG5cbiAgaWYgKCFwcm9wcy5zZWFyY2hhYmxlKSB7XG4gICAgLy8gZGlyZWN0bHkgcGFzcyB0aHJvdWdoIG9wdGlvbnMgaWYgY2FuIG5vdCBiZSBzZWFyY2hlZFxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG4gIGlmIChzaG91bGRTa2lwU2VhcmNoKHZhbHVlLCBzdGF0ZSwgc2hvd09wdGlvbnNXaGVuRW1wdHkpKSB7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBjb25zdCBzZWFyY2hPcHRpb25zID0gZ2VuZXJhdGVTZWFyY2hGdW5jdGlvbihwcm9wcyk7XG4gIHJldHVybiBzZWFyY2hPcHRpb25zKHZhbHVlLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkU2tpcFNlYXJjaChpbnB1dCwgc3RhdGUsIHNob3dPcHRpb25zV2hlbkVtcHR5KSB7XG4gIGNvbnN0IGVtcHR5VmFsdWUgPSAhaW5wdXQgfHwgaW5wdXQudHJpbSgpLmxlbmd0aCA9PT0gMDtcblxuICAvLyB0aGlzLnN0YXRlIG11c3QgYmUgY2hlY2tlZCBiZWNhdXNlIGl0IG1heSBub3QgYmUgZGVmaW5lZCB5ZXQgaWYgdGhpcyBmdW5jdGlvblxuICAvLyBpcyBjYWxsZWQgZnJvbSB3aXRoaW4gZ2V0SW5pdGlhbFN0YXRlXG4gIGNvbnN0IGlzRm9jdXNlZCA9IHN0YXRlICYmIHN0YXRlLmlzRm9jdXNlZDtcbiAgcmV0dXJuICEoc2hvd09wdGlvbnNXaGVuRW1wdHkgJiYgaXNGb2N1c2VkKSAmJiBlbXB0eVZhbHVlO1xufVxuXG5pbnRlcmZhY2UgVHlwZWFoZWFkUHJvcHMge1xuICBuYW1lPzogc3RyaW5nO1xuICBjdXN0b21DbGFzc2VzPzogYW55O1xuICByZXN1bHRzVHJ1bmNhdGVkTWVzc2FnZT86IHN0cmluZztcbiAgb3B0aW9ucz86IFJlYWRvbmx5QXJyYXk8c3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IG9iamVjdCB8IHVuZGVmaW5lZD47XG4gIGZpeGVkT3B0aW9ucz86IFJlYWRvbmx5QXJyYXk8c3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IG9iamVjdD4gfCBudWxsO1xuICBhbGxvd0N1c3RvbVZhbHVlcz86IG51bWJlcjtcbiAgaW5pdGlhbFZhbHVlPzogc3RyaW5nO1xuICB2YWx1ZT86IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgdGV4dGFyZWE/OiBib29sZWFuO1xuICBpbnB1dFByb3BzPzogb2JqZWN0O1xuICBvbk9wdGlvblNlbGVjdGVkPzogKG9wdGlvbjogYW55LCBldmVudDogYW55KSA9PiBhbnk7XG4gIG9uQ2hhbmdlPzogKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZDtcbiAgb25LZXlEb3duPzogKGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gdm9pZDtcbiAgb25LZXlQcmVzcz86IEtleWJvYXJkRXZlbnRIYW5kbGVyPEhUTUxEaXZFbGVtZW50PjtcbiAgb25LZXlVcD86IEtleWJvYXJkRXZlbnRIYW5kbGVyPEhUTUxEaXZFbGVtZW50PjtcbiAgb25Gb2N1cz86IChldmVudDogUmVhY3QuRm9jdXNFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHZvaWQ7XG4gIG9uQmx1cj86IChldmVudDogUmVhY3QuRm9jdXNFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZDtcbiAgZmlsdGVyT3B0aW9uPzogc3RyaW5nIHwgRnVuY3Rpb247XG4gIHNlYXJjaE9wdGlvbnM/OiBGdW5jdGlvbjtcbiAgZGlzcGxheU9wdGlvbj86IHN0cmluZyB8IEZ1bmN0aW9uO1xuICBpbnB1dERpc3BsYXlPcHRpb24/OiBzdHJpbmcgfCBGdW5jdGlvbjtcbiAgZm9ybUlucHV0T3B0aW9uPzogc3RyaW5nIHwgRnVuY3Rpb247XG4gIGRlZmF1bHRDbGFzc05hbWVzPzogYm9vbGVhbjtcbiAgY3VzdG9tTGlzdENvbXBvbmVudD86IEVsZW1lbnRUeXBlO1xuICBjdXN0b21MaXN0SXRlbUNvbXBvbmVudD86IEVsZW1lbnRUeXBlIHwgRnVuY3Rpb247XG4gIGN1c3RvbUxpc3RIZWFkZXJDb21wb25lbnQ/OiBFbGVtZW50VHlwZSB8IEZ1bmN0aW9uIHwgbnVsbDtcbiAgc2hvd09wdGlvbnNXaGVuRW1wdHk/OiBib29sZWFuO1xuICBzZWFyY2hhYmxlPzogYm9vbGVhbjtcbiAgbGlnaHQ/OiBib29sZWFuO1xuICBpbnB1dEljb246IEVsZW1lbnRUeXBlO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHNlbGVjdGVkSXRlbXM/OiBhbnlbXSB8IG51bGw7XG4gIC8vIGRlcHJlY2F0ZWRcbiAgbWF4VmlzaWJsZT86IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFR5cGVhaGVhZFN0YXRlIHtcbiAgc2VhcmNoUmVzdWx0czogUmVhZG9ubHlBcnJheTxzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgb2JqZWN0IHwgdW5kZWZpbmVkPjtcblxuICAvLyBUaGlzIHNob3VsZCBiZSBjYWxsZWQgc29tZXRoaW5nIGVsc2UsICdlbnRyeVZhbHVlJ1xuICBlbnRyeVZhbHVlPzogc3RyaW5nO1xuXG4gIC8vIEEgdmFsaWQgdHlwZWFoZWFkIHZhbHVlXG4gIHNlbGVjdGlvbj86IHN0cmluZztcblxuICAvLyBJbmRleCBvZiB0aGUgc2VsZWN0aW9uXG4gIHNlbGVjdGlvbkluZGV4OiBudWxsO1xuXG4gIC8vIEtlZXAgdHJhY2sgb2YgdGhlIGZvY3VzIHN0YXRlIG9mIHRoZSBpbnB1dCBlbGVtZW50LCB0byBkZXRlcm1pbmVcbiAgLy8gd2hldGhlciB0byBzaG93IG9wdGlvbnMgd2hlbiBlbXB0eSAoaWYgc2hvd09wdGlvbnNXaGVuRW1wdHkgaXMgdHJ1ZSlcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5jbGFzcyBUeXBlYWhlYWQgZXh0ZW5kcyBDb21wb25lbnQ8VHlwZWFoZWFkUHJvcHMsIFR5cGVhaGVhZFN0YXRlPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgb3B0aW9uczogW10sXG4gICAgY3VzdG9tQ2xhc3Nlczoge30sXG4gICAgYWxsb3dDdXN0b21WYWx1ZXM6IDAsXG4gICAgaW5pdGlhbFZhbHVlOiAnJyxcbiAgICB2YWx1ZTogJycsXG4gICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB0ZXh0YXJlYTogZmFsc2UsXG4gICAgaW5wdXRQcm9wczoge30sXG4gICAgb25PcHRpb25TZWxlY3RlZChvcHRpb24pIHt9LFxuICAgIG9uQ2hhbmdlKGV2ZW50KSB7fSxcbiAgICBvbktleURvd24oZXZlbnQpIHt9LFxuICAgIG9uS2V5UHJlc3MoZXZlbnQpIHt9LFxuICAgIG9uS2V5VXAoZXZlbnQpIHt9LFxuICAgIG9uRm9jdXMoZXZlbnQpIHt9LFxuICAgIG9uQmx1cihldmVudCkge30sXG4gICAgZmlsdGVyT3B0aW9uOiBudWxsLFxuICAgIHNlYXJjaE9wdGlvbnM6IG51bGwsXG4gICAgaW5wdXREaXNwbGF5T3B0aW9uOiBudWxsLFxuICAgIGRlZmF1bHRDbGFzc05hbWVzOiB0cnVlLFxuICAgIGN1c3RvbUxpc3RDb21wb25lbnQ6IERyb3Bkb3duTGlzdCxcbiAgICBjdXN0b21MaXN0SXRlbUNvbXBvbmVudDogTGlzdEl0ZW0sXG4gICAgaW5wdXRJY29uOiBTZWFyY2gsXG4gICAgY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudDogbnVsbCxcbiAgICBzaG93T3B0aW9uc1doZW5FbXB0eTogdHJ1ZSxcbiAgICBzZWFyY2hhYmxlOiB0cnVlLFxuICAgIHJlc3VsdHNUcnVuY2F0ZWRNZXNzYWdlOiBudWxsXG4gIH07XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICBpZiAocHJvcHMub3B0aW9ucyA9PT0gc3RhdGUucHJldk9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAvLyAgaW52b2tlZCBhZnRlciBhIGNvbXBvbmVudCBpcyBpbnN0YW50aWF0ZWQgYXMgd2VsbCBhcyBiZWZvcmUgaXQgaXMgcmUtcmVuZGVyZWRcbiAgICBjb25zdCBzZWFyY2hSZXN1bHRzID0gZ2V0T3B0aW9uc0ZvclZhbHVlKHN0YXRlLmVudHJ5VmFsdWUsIHByb3BzLCBzdGF0ZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2VhcmNoUmVzdWx0cyxcbiAgICAgIHByZXZPcHRpb25zOiBwcm9wcy5vcHRpb25zXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vIGluaXRpYXRlIHNlYXJjaFJlc3VsdHMgd2l0aCBvcHRpb25zXG4gICAgICBzZWFyY2hSZXN1bHRzOiB0aGlzLnByb3BzLm9wdGlvbnMgfHwgW10sXG5cbiAgICAgIC8vIFRoaXMgc2hvdWxkIGJlIGNhbGxlZCBzb21ldGhpbmcgZWxzZSwgJ2VudHJ5VmFsdWUnXG4gICAgICBlbnRyeVZhbHVlOiB0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMuaW5pdGlhbFZhbHVlLFxuXG4gICAgICAvLyBBIHZhbGlkIHR5cGVhaGVhZCB2YWx1ZVxuICAgICAgc2VsZWN0aW9uOiB0aGlzLnByb3BzLnZhbHVlLFxuXG4gICAgICAvLyBJbmRleCBvZiB0aGUgc2VsZWN0aW9uXG4gICAgICBzZWxlY3Rpb25JbmRleDogbnVsbCxcblxuICAgICAgLy8gS2VlcCB0cmFjayBvZiB0aGUgZm9jdXMgc3RhdGUgb2YgdGhlIGlucHV0IGVsZW1lbnQsIHRvIGRldGVybWluZVxuICAgICAgLy8gd2hldGhlciB0byBzaG93IG9wdGlvbnMgd2hlbiBlbXB0eSAoaWYgc2hvd09wdGlvbnNXaGVuRW1wdHkgaXMgdHJ1ZSlcbiAgICAgIGlzRm9jdXNlZDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gY2FsbCBmb2N1cyBvbiBlbnRyeSBvciBkaXYgdG8gdHJpZ2dlciBrZXkgZXZlbnRzIGxpc3RlbmVyXG4gICAgaWYgKHRoaXMuZW50cnkuY3VycmVudCkge1xuICAgICAgdGhpcy5lbnRyeS5jdXJyZW50LmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm9vdC5jdXJyZW50Py5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHJvb3QgPSBjcmVhdGVSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XG4gIGVudHJ5ID0gY3JlYXRlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KCk7XG5cbiAgZm9jdXMgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuZW50cnkuY3VycmVudCkge1xuICAgICAgdGhpcy5lbnRyeS5jdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9oYXNDdXN0b21WYWx1ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgTnVtYmVyKHRoaXMucHJvcHMuYWxsb3dDdXN0b21WYWx1ZXMpID4gMCAmJlxuICAgICAgTnVtYmVyKHRoaXMuc3RhdGUuZW50cnlWYWx1ZT8ubGVuZ3RoKSA+PSBOdW1iZXIodGhpcy5wcm9wcy5hbGxvd0N1c3RvbVZhbHVlcykgJiZcbiAgICAgIHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5pbmRleE9mKHRoaXMuc3RhdGUuZW50cnlWYWx1ZSkgPCAwXG4gICAgKTtcbiAgfTtcblxuICBfZ2V0Q3VzdG9tVmFsdWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0N1c3RvbVZhbHVlKCkgPyB0aGlzLnN0YXRlLmVudHJ5VmFsdWUgOiBudWxsO1xuICB9O1xuXG4gIF9yZW5kZXJJbmNyZW1lbnRhbFNlYXJjaFJlc3VsdHMoKSB7XG4gICAgY29uc3Qge2N1c3RvbUxpc3RDb21wb25lbnQ6IEN1c3RvbUxpc3RDb21wb25lbnQgPSBEcm9wZG93bkxpc3R9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEN1c3RvbUxpc3RDb21wb25lbnRcbiAgICAgICAgZml4ZWRPcHRpb25zPXt0aGlzLnByb3BzLmZpeGVkT3B0aW9uc31cbiAgICAgICAgb3B0aW9ucz17dGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzfVxuICAgICAgICBhcmVSZXN1bHRzVHJ1bmNhdGVkPXtmYWxzZX1cbiAgICAgICAgcmVzdWx0c1RydW5jYXRlZE1lc3NhZ2U9e3RoaXMucHJvcHMucmVzdWx0c1RydW5jYXRlZE1lc3NhZ2V9XG4gICAgICAgIG9uT3B0aW9uU2VsZWN0ZWQ9e3RoaXMuX29uT3B0aW9uU2VsZWN0ZWR9XG4gICAgICAgIGFsbG93Q3VzdG9tVmFsdWVzPXt0aGlzLnByb3BzLmFsbG93Q3VzdG9tVmFsdWVzfVxuICAgICAgICBjdXN0b21WYWx1ZT17dGhpcy5fZ2V0Q3VzdG9tVmFsdWUoKX1cbiAgICAgICAgY3VzdG9tQ2xhc3Nlcz17dGhpcy5wcm9wcy5jdXN0b21DbGFzc2VzfVxuICAgICAgICBjdXN0b21MaXN0SXRlbUNvbXBvbmVudD17dGhpcy5wcm9wcy5jdXN0b21MaXN0SXRlbUNvbXBvbmVudH1cbiAgICAgICAgY3VzdG9tTGlzdEhlYWRlckNvbXBvbmVudD17dGhpcy5wcm9wcy5jdXN0b21MaXN0SGVhZGVyQ29tcG9uZW50fVxuICAgICAgICBzZWxlY3Rpb25JbmRleD17dGhpcy5zdGF0ZS5zZWxlY3Rpb25JbmRleH1cbiAgICAgICAgZGVmYXVsdENsYXNzTmFtZXM9e3RoaXMucHJvcHMuZGVmYXVsdENsYXNzTmFtZXN9XG4gICAgICAgIGRpc3BsYXlPcHRpb249e3RoaXMucHJvcHMuZGlzcGxheU9wdGlvbn1cbiAgICAgICAgc2VsZWN0ZWRJdGVtcz17dGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW1zfVxuICAgICAgICBsaWdodD17dGhpcy5wcm9wcy5saWdodH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxuXG4gIGdldFNlbGVjdGlvbigpIHtcbiAgICBsZXQgaW5kZXg6IG51bWJlciB8IG51bGwgPSB0aGlzLnN0YXRlLnNlbGVjdGlvbkluZGV4O1xuICAgIGlmIChpbmRleCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGluZGV4ID0gTnVtYmVyKGluZGV4KTtcblxuICAgIGlmICh0aGlzLl9oYXNDdXN0b21WYWx1ZSgpKSB7XG4gICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuZW50cnlWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGluZGV4LS07XG4gICAgfVxuICAgIGlmICh0aGlzLl9oYXNGaXhlZE9wdGlvbnMoKSkge1xuICAgICAgcmV0dXJuIGluZGV4IDwgTnVtYmVyKHRoaXMucHJvcHMuZml4ZWRPcHRpb25zPy5sZW5ndGgpXG4gICAgICAgID8gdGhpcy5wcm9wcy5maXhlZE9wdGlvbnM/LltpbmRleF1cbiAgICAgICAgOiB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHNbaW5kZXggLSBOdW1iZXIodGhpcy5wcm9wcy5maXhlZE9wdGlvbnM/Lmxlbmd0aCldO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzW2luZGV4XTtcbiAgfVxuXG4gIF9vbk9wdGlvblNlbGVjdGVkID0gKG9wdGlvbiwgZXZlbnQpID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2hhYmxlKSB7XG4gICAgICAvLyByZXNldCBlbnRyeSBpbnB1dFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIC8vIHJlc2V0IHNlYXJjaCBvcHRpb25zIHdoZW4gc2VsZWN0aW9uIGhhcyBiZWVuIG1hZGVcbiAgICAgICAgc2VhcmNoUmVzdWx0czogdGhpcy5wcm9wcy5vcHRpb25zIHx8IFtdLFxuICAgICAgICBzZWxlY3Rpb246ICcnLFxuICAgICAgICBlbnRyeVZhbHVlOiAnJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMub25PcHRpb25TZWxlY3RlZD8uKG9wdGlvbiwgZXZlbnQpO1xuICB9O1xuXG4gIC8vIHVzZSAoKSA9PiB7fSB0byBhdm9pZCBiaW5kaW5nICd0aGlzJ1xuICBfb25UZXh0RW50cnlVcGRhdGVkID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLnNlYXJjaGFibGUpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5lbnRyeS5jdXJyZW50Py52YWx1ZTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHNlYXJjaFJlc3VsdHM6IHNlYXJjaE9wdGlvbnNPbklucHV0KHZhbHVlLCB0aGlzLnByb3BzKSxcbiAgICAgICAgc2VsZWN0aW9uOiAnJyxcbiAgICAgICAgZW50cnlWYWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBfb25FbnRlciA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLmdldFNlbGVjdGlvbigpO1xuICAgIGlmICghc2VsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5vbktleURvd24/LihldmVudCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9vbk9wdGlvblNlbGVjdGVkKHNlbGVjdGlvbiwgZXZlbnQpO1xuICB9O1xuXG4gIF9vbkVzY2FwZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGlvbkluZGV4OiBudWxsXG4gICAgfSk7XG4gIH07XG5cbiAgX29uVGFiID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCk7XG4gICAgbGV0IG9wdGlvbiA9IHNlbGVjdGlvblxuICAgICAgPyBzZWxlY3Rpb25cbiAgICAgIDogdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLmxlbmd0aCA+IDBcbiAgICAgID8gdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzWzBdXG4gICAgICA6IG51bGw7XG5cbiAgICBpZiAob3B0aW9uID09PSBudWxsICYmIHRoaXMuX2hhc0N1c3RvbVZhbHVlKCkpIHtcbiAgICAgIG9wdGlvbiA9IHRoaXMuX2dldEN1c3RvbVZhbHVlKCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbiAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuX29uT3B0aW9uU2VsZWN0ZWQob3B0aW9uLCBldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIGV2ZW50TWFwID0gKCkgPT4ge1xuICAgIGNvbnN0IGV2ZW50cyA9IHt9O1xuXG4gICAgZXZlbnRzW0tleUV2ZW50LkRPTV9WS19VUF0gPSB0aGlzLm5hdlVwO1xuICAgIGV2ZW50c1tLZXlFdmVudC5ET01fVktfRE9XTl0gPSB0aGlzLm5hdkRvd247XG4gICAgZXZlbnRzW0tleUV2ZW50LkRPTV9WS19SRVRVUk5dID0gZXZlbnRzW0tleUV2ZW50LkRPTV9WS19FTlRFUl0gPSB0aGlzLl9vbkVudGVyO1xuICAgIGV2ZW50c1tLZXlFdmVudC5ET01fVktfRVNDQVBFXSA9IHRoaXMuX29uRXNjYXBlO1xuICAgIGV2ZW50c1tLZXlFdmVudC5ET01fVktfVEFCXSA9IHRoaXMuX29uVGFiO1xuXG4gICAgcmV0dXJuIGV2ZW50cztcbiAgfTtcblxuICBfbmF2ID0gZGVsdGEgPT4ge1xuICAgIGlmICghdGhpcy5faGFzSGludCgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBuZXdJbmRleCA9XG4gICAgICB0aGlzLnN0YXRlLnNlbGVjdGlvbkluZGV4ID09PSBudWxsXG4gICAgICAgID8gZGVsdGEgPT09IDFcbiAgICAgICAgICA/IDBcbiAgICAgICAgICA6IGRlbHRhXG4gICAgICAgIDogdGhpcy5zdGF0ZS5zZWxlY3Rpb25JbmRleCArIGRlbHRhO1xuICAgIGxldCBsZW5ndGggPSB0aGlzLnByb3BzLm1heFZpc2libGVcbiAgICAgID8gdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHRzLnNsaWNlKDAsIHRoaXMucHJvcHMubWF4VmlzaWJsZSkubGVuZ3RoXG4gICAgICA6IHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0cy5sZW5ndGg7XG4gICAgaWYgKHRoaXMuX2hhc0N1c3RvbVZhbHVlKCkpIHtcbiAgICAgIGxlbmd0aCArPSAxO1xuICAgIH1cblxuICAgIGlmIChuZXdJbmRleCA8IDApIHtcbiAgICAgIG5ld0luZGV4ICs9IGxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKG5ld0luZGV4ID49IGxlbmd0aCkge1xuICAgICAgbmV3SW5kZXggLT0gbGVuZ3RoO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGlvbkluZGV4OiBuZXdJbmRleH0pO1xuICB9O1xuXG4gIG5hdkRvd24gPSAoKSA9PiB7XG4gICAgdGhpcy5fbmF2KDEpO1xuICB9O1xuXG4gIG5hdlVwID0gKCkgPT4ge1xuICAgIHRoaXMuX25hdigtMSk7XG4gIH07XG5cbiAgX29uQ2hhbmdlOiBSZWFjdC5DaGFuZ2VFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD4gPSBldmVudCA9PiB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQpO1xuICAgIH1cblxuICAgIHRoaXMuX29uVGV4dEVudHJ5VXBkYXRlZCgpO1xuICB9O1xuXG4gIF9vbktleURvd246IFJlYWN0LktleWJvYXJkRXZlbnRIYW5kbGVyPEhUTUxEaXZFbGVtZW50PiA9IGV2ZW50ID0+IHtcbiAgICAvLyBJZiB0aGVyZSBhcmUgbm8gdmlzaWJsZSBlbGVtZW50cywgZG9uJ3QgcGVyZm9ybSBzZWxlY3RvciBuYXZpZ2F0aW9uLlxuICAgIC8vIEp1c3QgcGFzcyB0aGlzIHVwIHRvIHRoZSB1cHN0cmVhbSBvbktleWRvd24gaGFuZGxlci5cbiAgICAvLyBBbHNvIHNraXAgaWYgdGhlIHVzZXIgaXMgcHJlc3NpbmcgdGhlIHNoaWZ0IGtleSwgc2luY2Ugbm9uZSBvZiBvdXIgaGFuZGxlcnMgYXJlIGxvb2tpbmcgZm9yIHNoaWZ0XG4gICAgaWYgKCF0aGlzLl9oYXNIaW50KCkgfHwgZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uS2V5RG93bj8uKGV2ZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVyID0gdGhpcy5ldmVudE1hcCgpW2V2ZW50LmtleUNvZGVdO1xuXG4gICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXIoZXZlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5vbktleURvd24/LihldmVudCk7XG4gICAgfVxuICAgIC8vIERvbid0IHByb3BhZ2F0ZSB0aGUga2V5c3Ryb2tlIGJhY2sgdG8gdGhlIERPTS9icm93c2VyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICBfb25Gb2N1czogUmVhY3QuRm9jdXNFdmVudEhhbmRsZXI8SFRNTERpdkVsZW1lbnQ+ID0gZXZlbnQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe2lzRm9jdXNlZDogdHJ1ZX0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uRm9jdXMpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uRm9jdXMoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBfb25CbHVyOiBSZWFjdC5Gb2N1c0V2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtpc0ZvY3VzZWQ6IGZhbHNlfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5vbkJsdXIoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICBfcmVuZGVySGlkZGVuSW5wdXQoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLm5hbWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9e3RoaXMucHJvcHMubmFtZX0gdmFsdWU9e3RoaXMuc3RhdGUuc2VsZWN0aW9ufSAvPjtcbiAgfVxuXG4gIF9oYXNIaW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHMubGVuZ3RoID4gMCB8fCB0aGlzLl9oYXNDdXN0b21WYWx1ZSgpO1xuICB9XG5cbiAgX2hhc0ZpeGVkT3B0aW9ucygpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGlzLnByb3BzLmZpeGVkT3B0aW9ucykgJiYgdGhpcy5wcm9wcy5maXhlZE9wdGlvbnMubGVuZ3RoO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlucHV0Q2xhc3NlcyA9IHt9O1xuICAgIGlucHV0Q2xhc3Nlc1t0aGlzLnByb3BzLmN1c3RvbUNsYXNzZXM/LmlucHV0XSA9IEJvb2xlYW4odGhpcy5wcm9wcy5jdXN0b21DbGFzc2VzPy5pbnB1dCk7XG4gICAgY29uc3QgaW5wdXRDbGFzc0xpc3QgPSBjbGFzc05hbWVzKGlucHV0Q2xhc3Nlcyk7XG5cbiAgICBjb25zdCBjbGFzc2VzID0ge1xuICAgICAgW0RFRkFVTFRfQ0xBU1NdOiB0aGlzLnByb3BzLmRlZmF1bHRDbGFzc05hbWVzXG4gICAgfTtcbiAgICBjbGFzc2VzW3RoaXMucHJvcHMuY2xhc3NOYW1lID8gdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAnJ10gPSBCb29sZWFuKHRoaXMucHJvcHMuY2xhc3NOYW1lKTtcbiAgICBjb25zdCBjbGFzc0xpc3QgPSBjbGFzc05hbWVzKGNsYXNzZXMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUeXBlYWhlYWRXcmFwcGVyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NMaXN0fVxuICAgICAgICByZWY9e3RoaXMucm9vdH1cbiAgICAgICAgdGFiSW5kZXg9ezB9XG4gICAgICAgIG9uS2V5RG93bj17dGhpcy5fb25LZXlEb3dufVxuICAgICAgICBvbktleVByZXNzPXt0aGlzLnByb3BzLm9uS2V5UHJlc3N9XG4gICAgICAgIG9uS2V5VXA9e3RoaXMucHJvcHMub25LZXlVcH1cbiAgICAgICAgb25Gb2N1cz17dGhpcy5fb25Gb2N1c31cbiAgICAgICAgbGlnaHQ9e3RoaXMucHJvcHMubGlnaHR9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLl9yZW5kZXJIaWRkZW5JbnB1dCgpfVxuICAgICAgICB7dGhpcy5wcm9wcy5zZWFyY2hhYmxlID8gKFxuICAgICAgICAgIDxJbnB1dEJveD5cbiAgICAgICAgICAgIDxUeXBlYWhlYWRJbnB1dFxuICAgICAgICAgICAgICByZWY9e3RoaXMuZW50cnl9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzLmlucHV0UHJvcHN9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2lucHV0Q2xhc3NMaXN0fVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbnRyeVZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2V9XG4gICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5fb25CbHVyfVxuICAgICAgICAgICAgICBsaWdodD17dGhpcy5wcm9wcy5saWdodH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW5wdXRJY29uPlxuICAgICAgICAgICAgICA8dGhpcy5wcm9wcy5pbnB1dEljb24gaGVpZ2h0PVwiMThweFwiIC8+XG4gICAgICAgICAgICA8L0lucHV0SWNvbj5cbiAgICAgICAgICA8L0lucHV0Qm94PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAge3RoaXMuX3JlbmRlckluY3JlbWVudGFsU2VhcmNoUmVzdWx0cygpfVxuICAgICAgPC9UeXBlYWhlYWRXcmFwcGVyPlxuICAgICk7XG4gIH1cbn1cblxucG9seWZpbGwoVHlwZWFoZWFkKTtcblxuZXhwb3J0IGRlZmF1bHQgVHlwZWFoZWFkO1xuIl19