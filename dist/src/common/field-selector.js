"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldListItemFactoryFactory = FieldListItemFactoryFactory;
exports["default"] = void 0;

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

var _reselect = require("reselect");

var _utils = require("@kepler.gl/utils");

var _itemSelector = _interopRequireDefault(require("./item-selector/item-selector"));

var _dropdownList = require("./item-selector/dropdown-list");

var _fieldToken = _interopRequireDefault(require("../common/field-token"));

var _templateObject, _templateObject2;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var defaultDisplayOption = function defaultDisplayOption(d) {
  return d.displayName || d.name;
};

var defaultValueOption = function defaultValueOption(d) {
  return d.name;
};

var StyledToken = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  margin: 0 ", "px 0 0;\n"])), function (props) {
  return props.theme.fieldTokenRightMargin;
});

var StyledFieldListItem = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  line-height: 0;\n"])));

FieldListItemFactoryFactory.deps = [_fieldToken["default"]]; // custom list Item

function FieldListItemFactoryFactory(FieldToken) {
  var FieldListItemFactory = function FieldListItemFactory() {
    var showToken = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    var FieldListItem = function FieldListItem(_ref) {
      var value = _ref.value,
          _ref$displayOption = _ref.displayOption,
          displayOption = _ref$displayOption === void 0 ? defaultDisplayOption : _ref$displayOption;
      return /*#__PURE__*/_react["default"].createElement(StyledFieldListItem, {
        className: "field-selector_list-item"
      }, showToken ? /*#__PURE__*/_react["default"].createElement(StyledToken, null, /*#__PURE__*/_react["default"].createElement(FieldToken, {
        type: value.type
      })) : null, /*#__PURE__*/_react["default"].createElement("span", {
        className: _dropdownList.classList.listItemAnchor
      }, displayOption(value)));
    };

    return FieldListItem;
  };

  return FieldListItemFactory;
}

var SuggestedFieldHeader = function SuggestedFieldHeader() {
  return /*#__PURE__*/_react["default"].createElement("div", null, "Suggested Field");
};

function FieldSelectorFactory(FieldListItemFactory) {
  var FieldSelector = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(FieldSelector, _Component);

    var _super = _createSuper(FieldSelector);

    function FieldSelector() {
      var _this;

      (0, _classCallCheck2["default"])(this, FieldSelector);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldsSelector", function (props) {
        return props.fields;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "valueSelector", function (props) {
        return props.value;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filteredFieldsSelector", (0, _reselect.createSelector)(_this.fieldsSelector, _this.valueSelector, function (fields, value) {
        return fields.filter(function (field) {
          return !(0, _utils.toArray)(value).find(function (d) {
            return d.name ? d.name === field.name : d === field.name;
          });
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filterFieldTypesSelector", function (props) {
        return props.filterFieldTypes;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showTokenSelector", function (props) {
        return props.showToken;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectedItemsSelector", (0, _reselect.createSelector)(_this.fieldsSelector, _this.valueSelector, function (fields, value) {
        return (0, _utils.toArray)(value).map(function (d) {
          return fields.find(function (f) {
            return (0, _utils.notNullorUndefined)(d) && d.name ? d.name === defaultValueOption(f) : d === defaultValueOption(f);
          });
        }).filter(function (d) {
          return d;
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldOptionsSelector", (0, _reselect.createSelector)(_this.filteredFieldsSelector, _this.filterFieldTypesSelector, function (fields, filterFieldTypes) {
        if (!filterFieldTypes) {
          return fields;
        }

        var filters = Array.isArray(filterFieldTypes) ? filterFieldTypes : [filterFieldTypes];
        return fields.filter(function (f) {
          return filters.includes(f.type);
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "fieldListItemSelector", (0, _reselect.createSelector)(_this.showTokenSelector, FieldListItemFactory));
      return _this;
    }

    (0, _createClass2["default"])(FieldSelector, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "field-selector"
        }, /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], {
          getOptionValue: function getOptionValue(d) {
            return d;
          },
          closeOnSelect: this.props.closeOnSelect,
          displayOption: defaultDisplayOption,
          filterOption: "displayName",
          fixedOptions: this.props.suggested,
          inputTheme: this.props.inputTheme,
          size: this.props.size,
          isError: this.props.error,
          selectedItems: this.selectedItemsSelector(this.props),
          erasable: this.props.erasable,
          options: this.fieldOptionsSelector(this.props),
          multiSelect: this.props.multiSelect,
          placeholder: this.props.placeholder,
          placement: this.props.placement,
          onChange: this.props.onSelect,
          DropDownLineItemRenderComponent: this.fieldListItemSelector(this.props),
          DropdownHeaderComponent: this.props.suggested ? SuggestedFieldHeader : null,
          CustomChickletComponent: this.props.CustomChickletComponent
        }));
      }
    }]);
    return FieldSelector;
  }(_react.Component);

  (0, _defineProperty2["default"])(FieldSelector, "defaultProps", {
    erasable: true,
    error: false,
    fields: [],
    onSelect: function onSelect() {},
    placement: 'bottom',
    value: null,
    multiSelect: false,
    closeOnSelect: true,
    showToken: true,
    placeholder: 'placeholder.selectField'
  });
  return FieldSelector;
}

FieldSelectorFactory.deps = [FieldListItemFactoryFactory];
var _default = FieldSelectorFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vZmllbGQtc2VsZWN0b3IudHN4Il0sIm5hbWVzIjpbImRlZmF1bHREaXNwbGF5T3B0aW9uIiwiZCIsImRpc3BsYXlOYW1lIiwibmFtZSIsImRlZmF1bHRWYWx1ZU9wdGlvbiIsIlN0eWxlZFRva2VuIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsImZpZWxkVG9rZW5SaWdodE1hcmdpbiIsIlN0eWxlZEZpZWxkTGlzdEl0ZW0iLCJGaWVsZExpc3RJdGVtRmFjdG9yeUZhY3RvcnkiLCJkZXBzIiwiRmllbGRUb2tlbkZhY3RvcnkiLCJGaWVsZFRva2VuIiwiRmllbGRMaXN0SXRlbUZhY3RvcnkiLCJzaG93VG9rZW4iLCJGaWVsZExpc3RJdGVtIiwidmFsdWUiLCJkaXNwbGF5T3B0aW9uIiwidHlwZSIsImNsYXNzTGlzdCIsImxpc3RJdGVtQW5jaG9yIiwiU3VnZ2VzdGVkRmllbGRIZWFkZXIiLCJGaWVsZFNlbGVjdG9yRmFjdG9yeSIsIkZpZWxkU2VsZWN0b3IiLCJmaWVsZHMiLCJmaWVsZHNTZWxlY3RvciIsInZhbHVlU2VsZWN0b3IiLCJmaWx0ZXIiLCJmaWVsZCIsImZpbmQiLCJmaWx0ZXJGaWVsZFR5cGVzIiwibWFwIiwiZiIsImZpbHRlcmVkRmllbGRzU2VsZWN0b3IiLCJmaWx0ZXJGaWVsZFR5cGVzU2VsZWN0b3IiLCJmaWx0ZXJzIiwiQXJyYXkiLCJpc0FycmF5IiwiaW5jbHVkZXMiLCJzaG93VG9rZW5TZWxlY3RvciIsImNsb3NlT25TZWxlY3QiLCJzdWdnZXN0ZWQiLCJpbnB1dFRoZW1lIiwic2l6ZSIsImVycm9yIiwic2VsZWN0ZWRJdGVtc1NlbGVjdG9yIiwiZXJhc2FibGUiLCJmaWVsZE9wdGlvbnNTZWxlY3RvciIsIm11bHRpU2VsZWN0IiwicGxhY2Vob2xkZXIiLCJwbGFjZW1lbnQiLCJvblNlbGVjdCIsImZpZWxkTGlzdEl0ZW1TZWxlY3RvciIsIkN1c3RvbUNoaWNrbGV0Q29tcG9uZW50IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUdBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsQ0FBQ0MsQ0FBRDtBQUFBLFNBQWNBLENBQUMsQ0FBQ0MsV0FBRixJQUFpQkQsQ0FBQyxDQUFDRSxJQUFqQztBQUFBLENBQTdCOztBQUNBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0gsQ0FBRDtBQUFBLFNBQWNBLENBQUMsQ0FBQ0UsSUFBaEI7QUFBQSxDQUEzQjs7QUFFQSxJQUFNRSxXQUFXLEdBQUdDLDZCQUFPQyxHQUFWLDRJQUVILFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMscUJBQWhCO0FBQUEsQ0FGRixDQUFqQjs7QUFJQSxJQUFNQyxtQkFBbUIsR0FBR0wsNkJBQU9DLEdBQVYsNkdBQXpCOztBQVNBSywyQkFBMkIsQ0FBQ0MsSUFBNUIsR0FBbUMsQ0FBQ0Msc0JBQUQsQ0FBbkMsQyxDQUNBOztBQUNPLFNBQVNGLDJCQUFULENBQXFDRyxVQUFyQyxFQUFpRDtBQUN0RCxNQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLEdBQXNCO0FBQUEsUUFBckJDLFNBQXFCLHVFQUFULElBQVM7O0FBQ2pELFFBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxVQUNwQkMsS0FEb0IsUUFDcEJBLEtBRG9CO0FBQUEsb0NBRXBCQyxhQUZvQjtBQUFBLFVBRXBCQSxhQUZvQixtQ0FFSnBCLG9CQUZJO0FBQUEsMEJBSXBCLGdDQUFDLG1CQUFEO0FBQXFCLFFBQUEsU0FBUyxFQUFDO0FBQS9CLFNBQ0dpQixTQUFTLGdCQUNSLGdDQUFDLFdBQUQscUJBQ0UsZ0NBQUMsVUFBRDtBQUFZLFFBQUEsSUFBSSxFQUFFRSxLQUFLLENBQUNFO0FBQXhCLFFBREYsQ0FEUSxHQUlOLElBTE4sZUFNRTtBQUFNLFFBQUEsU0FBUyxFQUFFQyx3QkFBVUM7QUFBM0IsU0FBNENILGFBQWEsQ0FBQ0QsS0FBRCxDQUF6RCxDQU5GLENBSm9CO0FBQUEsS0FBdEI7O0FBYUEsV0FBT0QsYUFBUDtBQUNELEdBZkQ7O0FBZ0JBLFNBQU9GLG9CQUFQO0FBQ0Q7O0FBRUQsSUFBTVEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QjtBQUFBLHNCQUFNLCtEQUFOO0FBQUEsQ0FBN0I7O0FBNENBLFNBQVNDLG9CQUFULENBQ0VULG9CQURGLEVBRTRDO0FBQUEsTUFDcENVLGFBRG9DO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx5R0FldkIsVUFBQWxCLEtBQUs7QUFBQSxlQUFJQSxLQUFLLENBQUNtQixNQUFWO0FBQUEsT0Fma0I7QUFBQSx3R0FnQnhCLFVBQUFuQixLQUFLO0FBQUEsZUFBSUEsS0FBSyxDQUFDVyxLQUFWO0FBQUEsT0FoQm1CO0FBQUEsaUhBaUJmLDhCQUN2QixNQUFLUyxjQURrQixFQUV2QixNQUFLQyxhQUZrQixFQUd2QixVQUFDRixNQUFELEVBQVNSLEtBQVQsRUFBbUI7QUFDakIsZUFBT1EsTUFBTSxDQUFDRyxNQUFQLENBQ0wsVUFBQUMsS0FBSztBQUFBLGlCQUFJLENBQUMsb0JBQVFaLEtBQVIsRUFBZWEsSUFBZixDQUFvQixVQUFBL0IsQ0FBQztBQUFBLG1CQUFLQSxDQUFDLENBQUNFLElBQUYsR0FBU0YsQ0FBQyxDQUFDRSxJQUFGLEtBQVc0QixLQUFLLENBQUM1QixJQUExQixHQUFpQ0YsQ0FBQyxLQUFLOEIsS0FBSyxDQUFDNUIsSUFBbEQ7QUFBQSxXQUFyQixDQUFMO0FBQUEsU0FEQSxDQUFQO0FBR0QsT0FQc0IsQ0FqQmU7QUFBQSxtSEEwQmIsVUFBQUssS0FBSztBQUFBLGVBQUlBLEtBQUssQ0FBQ3lCLGdCQUFWO0FBQUEsT0ExQlE7QUFBQSw0R0EyQnBCLFVBQUF6QixLQUFLO0FBQUEsZUFBSUEsS0FBSyxDQUFDUyxTQUFWO0FBQUEsT0EzQmU7QUFBQSxnSEE2QmhCLDhCQUN0QixNQUFLVyxjQURpQixFQUV0QixNQUFLQyxhQUZpQixFQUd0QixVQUFDRixNQUFELEVBQVNSLEtBQVQ7QUFBQSxlQUNFLG9CQUFRQSxLQUFSLEVBQ0dlLEdBREgsQ0FDTyxVQUFBakMsQ0FBQztBQUFBLGlCQUNKMEIsTUFBTSxDQUFDSyxJQUFQLENBQVksVUFBQUcsQ0FBQztBQUFBLG1CQUNYLCtCQUFtQmxDLENBQW5CLEtBQXlCQSxDQUFDLENBQUNFLElBQTNCLEdBQ0lGLENBQUMsQ0FBQ0UsSUFBRixLQUFXQyxrQkFBa0IsQ0FBQytCLENBQUQsQ0FEakMsR0FFSWxDLENBQUMsS0FBS0csa0JBQWtCLENBQUMrQixDQUFELENBSGpCO0FBQUEsV0FBYixDQURJO0FBQUEsU0FEUixFQVFHTCxNQVJILENBUVUsVUFBQTdCLENBQUM7QUFBQSxpQkFBSUEsQ0FBSjtBQUFBLFNBUlgsQ0FERjtBQUFBLE9BSHNCLENBN0JnQjtBQUFBLCtHQTRDakIsOEJBQ3JCLE1BQUttQyxzQkFEZ0IsRUFFckIsTUFBS0Msd0JBRmdCLEVBR3JCLFVBQUNWLE1BQUQsRUFBU00sZ0JBQVQsRUFBOEI7QUFDNUIsWUFBSSxDQUFDQSxnQkFBTCxFQUF1QjtBQUNyQixpQkFBT04sTUFBUDtBQUNEOztBQUNELFlBQU1XLE9BQU8sR0FBR0MsS0FBSyxDQUFDQyxPQUFOLENBQWNQLGdCQUFkLElBQWtDQSxnQkFBbEMsR0FBcUQsQ0FBQ0EsZ0JBQUQsQ0FBckU7QUFDQSxlQUFPTixNQUFNLENBQUNHLE1BQVAsQ0FBYyxVQUFBSyxDQUFDO0FBQUEsaUJBQUlHLE9BQU8sQ0FBQ0csUUFBUixDQUFpQk4sQ0FBQyxDQUFDZCxJQUFuQixDQUFKO0FBQUEsU0FBZixDQUFQO0FBQ0QsT0FUb0IsQ0E1Q2lCO0FBQUEsZ0hBd0RoQiw4QkFBZSxNQUFLcUIsaUJBQXBCLEVBQXVDMUIsb0JBQXZDLENBeERnQjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGFBMER4QyxrQkFBUztBQUNQLDRCQUNFO0FBQUssVUFBQSxTQUFTLEVBQUM7QUFBZix3QkFDRSxnQ0FBQyx3QkFBRDtBQUNFLFVBQUEsY0FBYyxFQUFFLHdCQUFBZixDQUFDO0FBQUEsbUJBQUlBLENBQUo7QUFBQSxXQURuQjtBQUVFLFVBQUEsYUFBYSxFQUFFLEtBQUtPLEtBQUwsQ0FBV21DLGFBRjVCO0FBR0UsVUFBQSxhQUFhLEVBQUUzQyxvQkFIakI7QUFJRSxVQUFBLFlBQVksRUFBQyxhQUpmO0FBS0UsVUFBQSxZQUFZLEVBQUUsS0FBS1EsS0FBTCxDQUFXb0MsU0FMM0I7QUFNRSxVQUFBLFVBQVUsRUFBRSxLQUFLcEMsS0FBTCxDQUFXcUMsVUFOekI7QUFPRSxVQUFBLElBQUksRUFBRSxLQUFLckMsS0FBTCxDQUFXc0MsSUFQbkI7QUFRRSxVQUFBLE9BQU8sRUFBRSxLQUFLdEMsS0FBTCxDQUFXdUMsS0FSdEI7QUFTRSxVQUFBLGFBQWEsRUFBRSxLQUFLQyxxQkFBTCxDQUEyQixLQUFLeEMsS0FBaEMsQ0FUakI7QUFVRSxVQUFBLFFBQVEsRUFBRSxLQUFLQSxLQUFMLENBQVd5QyxRQVZ2QjtBQVdFLFVBQUEsT0FBTyxFQUFFLEtBQUtDLG9CQUFMLENBQTBCLEtBQUsxQyxLQUEvQixDQVhYO0FBWUUsVUFBQSxXQUFXLEVBQUUsS0FBS0EsS0FBTCxDQUFXMkMsV0FaMUI7QUFhRSxVQUFBLFdBQVcsRUFBRSxLQUFLM0MsS0FBTCxDQUFXNEMsV0FiMUI7QUFjRSxVQUFBLFNBQVMsRUFBRSxLQUFLNUMsS0FBTCxDQUFXNkMsU0FkeEI7QUFlRSxVQUFBLFFBQVEsRUFBRSxLQUFLN0MsS0FBTCxDQUFXOEMsUUFmdkI7QUFnQkUsVUFBQSwrQkFBK0IsRUFBRSxLQUFLQyxxQkFBTCxDQUEyQixLQUFLL0MsS0FBaEMsQ0FoQm5DO0FBaUJFLFVBQUEsdUJBQXVCLEVBQUUsS0FBS0EsS0FBTCxDQUFXb0MsU0FBWCxHQUF1QnBCLG9CQUF2QixHQUE4QyxJQWpCekU7QUFrQkUsVUFBQSx1QkFBdUIsRUFBRSxLQUFLaEIsS0FBTCxDQUFXZ0Q7QUFsQnRDLFVBREYsQ0FERjtBQXdCRDtBQW5GdUM7QUFBQTtBQUFBLElBQ2RDLGdCQURjOztBQUFBLG1DQUNwQy9CLGFBRG9DLGtCQUVsQjtBQUNwQnVCLElBQUFBLFFBQVEsRUFBRSxJQURVO0FBRXBCRixJQUFBQSxLQUFLLEVBQUUsS0FGYTtBQUdwQnBCLElBQUFBLE1BQU0sRUFBRSxFQUhZO0FBSXBCMkIsSUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FKRTtBQUtwQkQsSUFBQUEsU0FBUyxFQUFFLFFBTFM7QUFNcEJsQyxJQUFBQSxLQUFLLEVBQUUsSUFOYTtBQU9wQmdDLElBQUFBLFdBQVcsRUFBRSxLQVBPO0FBUXBCUixJQUFBQSxhQUFhLEVBQUUsSUFSSztBQVNwQjFCLElBQUFBLFNBQVMsRUFBRSxJQVRTO0FBVXBCbUMsSUFBQUEsV0FBVyxFQUFFO0FBVk8sR0FGa0I7QUFxRjFDLFNBQU8xQixhQUFQO0FBQ0Q7O0FBRURELG9CQUFvQixDQUFDWixJQUFyQixHQUE0QixDQUFDRCwyQkFBRCxDQUE1QjtlQUNlYSxvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgQ29tcG9uZW50VHlwZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5cbmltcG9ydCB7RmllbGR9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuaW1wb3J0IHtub3ROdWxsb3JVbmRlZmluZWQsIHRvQXJyYXl9IGZyb20gJ0BrZXBsZXIuZ2wvdXRpbHMnO1xuXG5pbXBvcnQgSXRlbVNlbGVjdG9yIGZyb20gJy4vaXRlbS1zZWxlY3Rvci9pdGVtLXNlbGVjdG9yJztcbmltcG9ydCB7Y2xhc3NMaXN0fSBmcm9tICcuL2l0ZW0tc2VsZWN0b3IvZHJvcGRvd24tbGlzdCc7XG5pbXBvcnQgRmllbGRUb2tlbkZhY3RvcnkgZnJvbSAnLi4vY29tbW9uL2ZpZWxkLXRva2VuJztcblxuY29uc3QgZGVmYXVsdERpc3BsYXlPcHRpb24gPSAoZDogRmllbGQpID0+IGQuZGlzcGxheU5hbWUgfHwgZC5uYW1lO1xuY29uc3QgZGVmYXVsdFZhbHVlT3B0aW9uID0gKGQ6IEZpZWxkKSA9PiBkLm5hbWU7XG5cbmNvbnN0IFN0eWxlZFRva2VuID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5maWVsZFRva2VuUmlnaHRNYXJnaW59cHggMCAwO1xuYDtcbmNvbnN0IFN0eWxlZEZpZWxkTGlzdEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBsaW5lLWhlaWdodDogMDtcbmA7XG5cbmV4cG9ydCB0eXBlIEZpZWxkTGlzdEl0ZW1GYWN0b3J5UHJvcHMgPSB7XG4gIHZhbHVlOiBGaWVsZDtcbiAgZGlzcGxheU9wdGlvbjogKGZpZWxkOiBGaWVsZCkgPT4gc3RyaW5nO1xufTtcblxuRmllbGRMaXN0SXRlbUZhY3RvcnlGYWN0b3J5LmRlcHMgPSBbRmllbGRUb2tlbkZhY3RvcnldO1xuLy8gY3VzdG9tIGxpc3QgSXRlbVxuZXhwb3J0IGZ1bmN0aW9uIEZpZWxkTGlzdEl0ZW1GYWN0b3J5RmFjdG9yeShGaWVsZFRva2VuKSB7XG4gIGNvbnN0IEZpZWxkTGlzdEl0ZW1GYWN0b3J5ID0gKHNob3dUb2tlbiA9IHRydWUpID0+IHtcbiAgICBjb25zdCBGaWVsZExpc3RJdGVtID0gKHtcbiAgICAgIHZhbHVlLFxuICAgICAgZGlzcGxheU9wdGlvbiA9IGRlZmF1bHREaXNwbGF5T3B0aW9uXG4gICAgfTogRmllbGRMaXN0SXRlbUZhY3RvcnlQcm9wcykgPT4gKFxuICAgICAgPFN0eWxlZEZpZWxkTGlzdEl0ZW0gY2xhc3NOYW1lPVwiZmllbGQtc2VsZWN0b3JfbGlzdC1pdGVtXCI+XG4gICAgICAgIHtzaG93VG9rZW4gPyAoXG4gICAgICAgICAgPFN0eWxlZFRva2VuPlxuICAgICAgICAgICAgPEZpZWxkVG9rZW4gdHlwZT17dmFsdWUudHlwZX0gLz5cbiAgICAgICAgICA8L1N0eWxlZFRva2VuPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc0xpc3QubGlzdEl0ZW1BbmNob3J9PntkaXNwbGF5T3B0aW9uKHZhbHVlKX08L3NwYW4+XG4gICAgICA8L1N0eWxlZEZpZWxkTGlzdEl0ZW0+XG4gICAgKTtcbiAgICByZXR1cm4gRmllbGRMaXN0SXRlbTtcbiAgfTtcbiAgcmV0dXJuIEZpZWxkTGlzdEl0ZW1GYWN0b3J5O1xufVxuXG5jb25zdCBTdWdnZXN0ZWRGaWVsZEhlYWRlciA9ICgpID0+IDxkaXY+U3VnZ2VzdGVkIEZpZWxkPC9kaXY+O1xuXG50eXBlIEZpZWxkVHlwZSA9XG4gIHwgc3RyaW5nXG4gIHwgc3RyaW5nW11cbiAgfCB7XG4gICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICBmb3JtYXQ6IHN0cmluZyB8IG51bGw7XG4gICAgfVtdXG4gIHwge1xuICAgICAgZm9ybWF0Pzogc3RyaW5nO1xuICAgICAgaWQ/OiBzdHJpbmc7XG4gICAgICBuYW1lPzogc3RyaW5nO1xuICAgICAgZmllbGRJZHg/OiBudW1iZXI7XG4gICAgICB0eXBlPzogbnVtYmVyO1xuICAgIH1cbiAgfCBGaWVsZDtcblxuaW50ZXJmYWNlIEZpZWxkU2VsZWN0b3JGYWN0b3J5UHJvcHMge1xuICBmaWVsZHM/OiBGaWVsZFR5cGVbXTtcbiAgb25TZWxlY3Q6IChcbiAgICBpdGVtczpcbiAgICAgIHwgUmVhZG9ubHlBcnJheTxzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgb2JqZWN0PlxuICAgICAgfCBzdHJpbmdcbiAgICAgIHwgbnVtYmVyXG4gICAgICB8IGJvb2xlYW5cbiAgICAgIHwgb2JqZWN0XG4gICAgICB8IG51bGxcbiAgKSA9PiB2b2lkO1xuICBwbGFjZW1lbnQ/OiBzdHJpbmc7XG4gIHZhbHVlPzogRmllbGRUeXBlIHwgbnVsbDtcbiAgZmlsdGVyRmllbGRUeXBlcz86IEZpZWxkVHlwZSB8IEZpZWxkVHlwZVtdO1xuICBpbnB1dFRoZW1lPzogc3RyaW5nO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgZXJhc2FibGU/OiBib29sZWFuO1xuICBlcnJvcj86IGJvb2xlYW47XG4gIG11bHRpU2VsZWN0PzogYm9vbGVhbjtcbiAgY2xvc2VPblNlbGVjdD86IGJvb2xlYW47XG4gIHNob3dUb2tlbj86IGJvb2xlYW47XG4gIHN1Z2dlc3RlZD86IFJlYWRvbmx5QXJyYXk8c3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IG9iamVjdD4gfCBudWxsO1xuICBDdXN0b21DaGlja2xldENvbXBvbmVudD86IENvbXBvbmVudFR5cGU8YW55PjtcbiAgc2l6ZT86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gRmllbGRTZWxlY3RvckZhY3RvcnkoXG4gIEZpZWxkTGlzdEl0ZW1GYWN0b3J5OiBSZXR1cm5UeXBlPHR5cGVvZiBGaWVsZExpc3RJdGVtRmFjdG9yeUZhY3Rvcnk+XG4pOiBDb21wb25lbnRUeXBlPEZpZWxkU2VsZWN0b3JGYWN0b3J5UHJvcHM+IHtcbiAgY2xhc3MgRmllbGRTZWxlY3RvciBleHRlbmRzIENvbXBvbmVudDxGaWVsZFNlbGVjdG9yRmFjdG9yeVByb3BzPiB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIGVyYXNhYmxlOiB0cnVlLFxuICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgZmllbGRzOiBbXSxcbiAgICAgIG9uU2VsZWN0OiAoKSA9PiB7fSxcbiAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICAgIG11bHRpU2VsZWN0OiBmYWxzZSxcbiAgICAgIGNsb3NlT25TZWxlY3Q6IHRydWUsXG4gICAgICBzaG93VG9rZW46IHRydWUsXG4gICAgICBwbGFjZWhvbGRlcjogJ3BsYWNlaG9sZGVyLnNlbGVjdEZpZWxkJ1xuICAgIH07XG5cbiAgICBmaWVsZHNTZWxlY3RvciA9IHByb3BzID0+IHByb3BzLmZpZWxkcztcbiAgICB2YWx1ZVNlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMudmFsdWU7XG4gICAgZmlsdGVyZWRGaWVsZHNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgdGhpcy5maWVsZHNTZWxlY3RvcixcbiAgICAgIHRoaXMudmFsdWVTZWxlY3RvcixcbiAgICAgIChmaWVsZHMsIHZhbHVlKSA9PiB7XG4gICAgICAgIHJldHVybiBmaWVsZHMuZmlsdGVyKFxuICAgICAgICAgIGZpZWxkID0+ICF0b0FycmF5KHZhbHVlKS5maW5kKGQgPT4gKGQubmFtZSA/IGQubmFtZSA9PT0gZmllbGQubmFtZSA6IGQgPT09IGZpZWxkLm5hbWUpKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICk7XG4gICAgZmlsdGVyRmllbGRUeXBlc1NlbGVjdG9yID0gcHJvcHMgPT4gcHJvcHMuZmlsdGVyRmllbGRUeXBlcztcbiAgICBzaG93VG9rZW5TZWxlY3RvciA9IHByb3BzID0+IHByb3BzLnNob3dUb2tlbjtcblxuICAgIHNlbGVjdGVkSXRlbXNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgdGhpcy5maWVsZHNTZWxlY3RvcixcbiAgICAgIHRoaXMudmFsdWVTZWxlY3RvcixcbiAgICAgIChmaWVsZHMsIHZhbHVlKSA9PlxuICAgICAgICB0b0FycmF5KHZhbHVlKVxuICAgICAgICAgIC5tYXAoZCA9PlxuICAgICAgICAgICAgZmllbGRzLmZpbmQoZiA9PlxuICAgICAgICAgICAgICBub3ROdWxsb3JVbmRlZmluZWQoZCkgJiYgZC5uYW1lXG4gICAgICAgICAgICAgICAgPyBkLm5hbWUgPT09IGRlZmF1bHRWYWx1ZU9wdGlvbihmKVxuICAgICAgICAgICAgICAgIDogZCA9PT0gZGVmYXVsdFZhbHVlT3B0aW9uKGYpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICAgIC5maWx0ZXIoZCA9PiBkKVxuICAgICk7XG5cbiAgICBmaWVsZE9wdGlvbnNTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgdGhpcy5maWx0ZXJlZEZpZWxkc1NlbGVjdG9yLFxuICAgICAgdGhpcy5maWx0ZXJGaWVsZFR5cGVzU2VsZWN0b3IsXG4gICAgICAoZmllbGRzLCBmaWx0ZXJGaWVsZFR5cGVzKSA9PiB7XG4gICAgICAgIGlmICghZmlsdGVyRmllbGRUeXBlcykge1xuICAgICAgICAgIHJldHVybiBmaWVsZHM7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmlsdGVycyA9IEFycmF5LmlzQXJyYXkoZmlsdGVyRmllbGRUeXBlcykgPyBmaWx0ZXJGaWVsZFR5cGVzIDogW2ZpbHRlckZpZWxkVHlwZXNdO1xuICAgICAgICByZXR1cm4gZmllbGRzLmZpbHRlcihmID0+IGZpbHRlcnMuaW5jbHVkZXMoZi50eXBlKSk7XG4gICAgICB9XG4gICAgKTtcblxuICAgIGZpZWxkTGlzdEl0ZW1TZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKHRoaXMuc2hvd1Rva2VuU2VsZWN0b3IsIEZpZWxkTGlzdEl0ZW1GYWN0b3J5KTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQtc2VsZWN0b3JcIj5cbiAgICAgICAgICA8SXRlbVNlbGVjdG9yXG4gICAgICAgICAgICBnZXRPcHRpb25WYWx1ZT17ZCA9PiBkfVxuICAgICAgICAgICAgY2xvc2VPblNlbGVjdD17dGhpcy5wcm9wcy5jbG9zZU9uU2VsZWN0fVxuICAgICAgICAgICAgZGlzcGxheU9wdGlvbj17ZGVmYXVsdERpc3BsYXlPcHRpb259XG4gICAgICAgICAgICBmaWx0ZXJPcHRpb249XCJkaXNwbGF5TmFtZVwiXG4gICAgICAgICAgICBmaXhlZE9wdGlvbnM9e3RoaXMucHJvcHMuc3VnZ2VzdGVkfVxuICAgICAgICAgICAgaW5wdXRUaGVtZT17dGhpcy5wcm9wcy5pbnB1dFRoZW1lfVxuICAgICAgICAgICAgc2l6ZT17dGhpcy5wcm9wcy5zaXplfVxuICAgICAgICAgICAgaXNFcnJvcj17dGhpcy5wcm9wcy5lcnJvcn1cbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3RoaXMuc2VsZWN0ZWRJdGVtc1NlbGVjdG9yKHRoaXMucHJvcHMpfVxuICAgICAgICAgICAgZXJhc2FibGU9e3RoaXMucHJvcHMuZXJhc2FibGV9XG4gICAgICAgICAgICBvcHRpb25zPXt0aGlzLmZpZWxkT3B0aW9uc1NlbGVjdG9yKHRoaXMucHJvcHMpfVxuICAgICAgICAgICAgbXVsdGlTZWxlY3Q9e3RoaXMucHJvcHMubXVsdGlTZWxlY3R9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIHBsYWNlbWVudD17dGhpcy5wcm9wcy5wbGFjZW1lbnR9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vblNlbGVjdH1cbiAgICAgICAgICAgIERyb3BEb3duTGluZUl0ZW1SZW5kZXJDb21wb25lbnQ9e3RoaXMuZmllbGRMaXN0SXRlbVNlbGVjdG9yKHRoaXMucHJvcHMpfVxuICAgICAgICAgICAgRHJvcGRvd25IZWFkZXJDb21wb25lbnQ9e3RoaXMucHJvcHMuc3VnZ2VzdGVkID8gU3VnZ2VzdGVkRmllbGRIZWFkZXIgOiBudWxsfVxuICAgICAgICAgICAgQ3VzdG9tQ2hpY2tsZXRDb21wb25lbnQ9e3RoaXMucHJvcHMuQ3VzdG9tQ2hpY2tsZXRDb21wb25lbnR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gRmllbGRTZWxlY3Rvcjtcbn1cblxuRmllbGRTZWxlY3RvckZhY3RvcnkuZGVwcyA9IFtGaWVsZExpc3RJdGVtRmFjdG9yeUZhY3RvcnldO1xuZXhwb3J0IGRlZmF1bHQgRmllbGRTZWxlY3RvckZhY3Rvcnk7XG4iXX0=