"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CloudStorageDropdownFactory = exports.SaveExportDropdownFactory = exports.PanelHeaderDropdownFactory = exports.PanelAction = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reselect = require("reselect");

var _styledComponents2 = require("../common/styled-components");

var _logo = _interopRequireDefault(require("../common/logo"));

var _icons = require("../common/icons");

var _panelDropdown = _interopRequireDefault(require("./panel-dropdown"));

var _toolbar = _interopRequireDefault(require("../common/toolbar"));

var _toolbarItem = _interopRequireDefault(require("../common/toolbar-item"));

var _localization = require("@kepler.gl/localization");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var StyledPanelHeader = _styledComponents["default"].div.attrs(function (props) {
  return {
    className: (0, _classnames["default"])('side-side-panel__header', props.className)
  };
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: 12px 16px 0 16px;\n"])), function (props) {
  return props.theme.sidePanelHeaderBg;
});

var StyledPanelHeaderTop = _styledComponents["default"].div.attrs(function (props) {
  return {
    className: (0, _classnames["default"])('side-panel__header__top', props.className)
  };
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  width: 100%;\n"])));

var StyledPanelTopActions = _styledComponents["default"].div.attrs({
  className: 'side-panel__top__actions'
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n"])));

var StyledPanelAction = _styledComponents["default"].div.attrs({
  className: 'side-panel__panel-header__action'
})(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  border-radius: 2px;\n  color: ", ";\n  display: flex;\n  height: 26px;\n  justify-content: space-between;\n  margin-left: 4px;\n  padding: 5px;\n  font-weight: bold;\n  p {\n    display: inline-block;\n    margin-right: 6px;\n  }\n  a {\n    height: 20px;\n  }\n\n  :hover {\n    cursor: pointer;\n    color: ", ";\n\n    a {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.active ? props.theme.textColorHl : props.theme.subtextColor;
}, function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
});

var StyledToolbar = (0, _styledComponents["default"])(_toolbar["default"])(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n"])));

var PanelAction = /*#__PURE__*/_react["default"].memo(function (_ref) {
  var item = _ref.item,
      showExportDropdown = _ref.showExportDropdown;
  var onClick = (0, _react.useCallback)(function () {
    if (item.dropdownComponent) {
      showExportDropdown(item.id);
    } else {
      item.onClick && item.onClick();
    }
  }, [item, showExportDropdown]);
  return /*#__PURE__*/_react["default"].createElement(StyledPanelAction, {
    "data-tip": true,
    "data-for": "".concat(item.id, "-action"),
    onClick: onClick
  }, item.label ? /*#__PURE__*/_react["default"].createElement("p", null, item.label) : null, /*#__PURE__*/_react["default"].createElement("a", {
    target: item.blank ? '_blank' : '',
    href: item.href,
    rel: "noreferrer"
  }, /*#__PURE__*/_react["default"].createElement(item.iconComponent, (0, _extends2["default"])({
    height: "20px"
  }, item.iconComponentProps))), item.tooltip ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
    id: "".concat(item.id, "-action"),
    place: "bottom",
    delayShow: 500,
    effect: "solid"
  }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: item.tooltip
  })) : null);
});

exports.PanelAction = PanelAction;
PanelAction.displayName = 'PanelAction';

var PanelHeaderDropdownFactory = function PanelHeaderDropdownFactory() {
  var PanelHeaderDropdown = function PanelHeaderDropdown(_ref2) {
    var items = _ref2.items,
        show = _ref2.show,
        onClose = _ref2.onClose,
        id = _ref2.id;
    return /*#__PURE__*/_react["default"].createElement(StyledToolbar, {
      show: show,
      className: "".concat(id, "-dropdown")
    }, /*#__PURE__*/_react["default"].createElement(_panelDropdown["default"], {
      className: "panel-header-dropdown__inner",
      show: show,
      onClose: onClose
    }, items.map(function (item) {
      return /*#__PURE__*/_react["default"].createElement(_toolbarItem["default"], {
        id: item.key,
        key: item.key,
        label: item.label,
        icon: item.icon,
        onClick: item.onClick,
        onClose: onClose
      });
    })));
  };

  return PanelHeaderDropdown;
};

exports.PanelHeaderDropdownFactory = PanelHeaderDropdownFactory;

var getDropdownItemsSelector = function getDropdownItemsSelector() {
  return (0, _reselect.createSelector)(function (props) {
    return props;
  }, function (props) {
    return (props.items || []).map(function (t) {
      return _objectSpread(_objectSpread({}, t), {}, {
        onClick: t.onClick && t.onClick(props) ? t.onClick(props) : null
      });
    }).filter(function (l) {
      return l.onClick;
    });
  });
};

var SaveExportDropdownFactory = function SaveExportDropdownFactory(PanelHeaderDropdown) {
  var dropdownItemsSelector = getDropdownItemsSelector();

  var SaveExportDropdown = function SaveExportDropdown(props) {
    return /*#__PURE__*/_react["default"].createElement(PanelHeaderDropdown, {
      items: dropdownItemsSelector(props),
      show: props.show,
      onClose: props.onClose,
      id: "save-export"
    });
  };

  SaveExportDropdown.defaultProps = {
    items: [{
      label: 'toolbar.exportImage',
      icon: _icons.Picture,
      key: 'image',
      onClick: function onClick(props) {
        return props.onExportImage;
      }
    }, {
      label: 'toolbar.exportData',
      icon: _icons.DataTable,
      key: 'data',
      onClick: function onClick(props) {
        return props.onExportData;
      }
    }, {
      label: 'toolbar.exportMap',
      icon: _icons.Map,
      key: 'map',
      onClick: function onClick(props) {
        return props.onExportMap;
      }
    }, {
      label: 'toolbar.saveMap',
      icon: _icons.Save2,
      key: 'save',
      onClick: function onClick(props) {
        return props.onSaveMap;
      }
    }, {
      label: 'toolbar.shareMapURL',
      icon: _icons.Share,
      key: 'share',
      onClick: function onClick(props) {
        return props.onShareMap;
      }
    }]
  };
  return SaveExportDropdown;
};

exports.SaveExportDropdownFactory = SaveExportDropdownFactory;
SaveExportDropdownFactory.deps = [PanelHeaderDropdownFactory];

var CloudStorageDropdownFactory = function CloudStorageDropdownFactory(PanelHeaderDropdown) {
  var dropdownItemsSelector = getDropdownItemsSelector();

  var CloudStorageDropdown = function CloudStorageDropdown(props) {
    return /*#__PURE__*/_react["default"].createElement(PanelHeaderDropdown, {
      items: dropdownItemsSelector(props),
      show: props.show,
      onClose: props.onClose,
      id: "cloud-storage"
    });
  };

  CloudStorageDropdown.defaultProps = {
    items: [{
      label: 'Save',
      icon: _icons.Save2,
      key: 'save',
      onClick: function onClick(props) {
        return props.onSaveToStorage;
      }
    }, {
      label: 'Save As',
      icon: _icons.Save2,
      key: 'saveAs',
      onClick: function onClick(props) {
        return props.onSaveAsToStorage;
      }
    }]
  };
  return CloudStorageDropdown;
};

exports.CloudStorageDropdownFactory = CloudStorageDropdownFactory;
CloudStorageDropdownFactory.deps = [PanelHeaderDropdownFactory];
PanelHeaderFactory.deps = [SaveExportDropdownFactory, CloudStorageDropdownFactory];

function PanelHeaderFactory(SaveExportDropdown, CloudStorageDropdown) {
  var _class, _temp;

  return _temp = _class = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(PanelHeader, _Component);

    var _super = _createSuper(PanelHeader);

    function PanelHeader() {
      (0, _classCallCheck2["default"])(this, PanelHeader);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(PanelHeader, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            appName = _this$props.appName,
            appWebsite = _this$props.appWebsite,
            version = _this$props.version,
            actionItems = _this$props.actionItems,
            visibleDropdown = _this$props.visibleDropdown,
            showExportDropdown = _this$props.showExportDropdown,
            hideExportDropdown = _this$props.hideExportDropdown,
            dropdownCallbacks = (0, _objectWithoutProperties2["default"])(_this$props, ["appName", "appWebsite", "version", "actionItems", "visibleDropdown", "showExportDropdown", "hideExportDropdown"]);
        var items = actionItems || []; // don't render cloud storage icon if onSaveToStorage is not provided

        if (typeof this.props.onSaveToStorage !== 'function') {
          items = items.filter(function (ai) {
            return ai.id !== 'storage';
          });
        }

        return /*#__PURE__*/_react["default"].createElement(StyledPanelHeader, {
          className: "side-panel__panel-header"
        }, /*#__PURE__*/_react["default"].createElement(StyledPanelHeaderTop, {
          className: "side-panel__panel-header__top"
        }, this.props.logoComponent && /*#__PURE__*/_react["default"].createElement(this.props.logoComponent, {
          appName: appName,
          version: version,
          appWebsite: appWebsite
        }), /*#__PURE__*/_react["default"].createElement(StyledPanelTopActions, null, items.map(function (item) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            className: "side-panel__panel-header__right",
            key: item.id,
            style: {
              position: 'relative'
            }
          }, /*#__PURE__*/_react["default"].createElement(PanelAction, {
            item: item,
            showExportDropdown: showExportDropdown
          }), item.dropdownComponent ? /*#__PURE__*/_react["default"].createElement(item.dropdownComponent, (0, _extends2["default"])({
            onClose: hideExportDropdown,
            show: visibleDropdown === item.id
          }, dropdownCallbacks)) : null);
        }))));
      }
    }]);
    return PanelHeader;
  }(_react.Component), (0, _defineProperty2["default"])(_class, "defaultProps", {
    logoComponent: _logo["default"],
    actionItems: [{
      id: 'storage',
      iconComponent: _icons.Db,
      tooltip: 'tooltip.cloudStorage',
      onClick: function onClick() {},
      dropdownComponent: CloudStorageDropdown
    }, {
      id: 'save',
      iconComponent: _icons.Save,
      onClick: function onClick() {},
      label: 'Share',
      dropdownComponent: SaveExportDropdown
    }]
  }), _temp;
}

var _default = PanelHeaderFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL3BhbmVsLWhlYWRlci50c3giXSwibmFtZXMiOlsiU3R5bGVkUGFuZWxIZWFkZXIiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsInByb3BzIiwiY2xhc3NOYW1lIiwidGhlbWUiLCJzaWRlUGFuZWxIZWFkZXJCZyIsIlN0eWxlZFBhbmVsSGVhZGVyVG9wIiwiU3R5bGVkUGFuZWxUb3BBY3Rpb25zIiwiU3R5bGVkUGFuZWxBY3Rpb24iLCJhY3RpdmUiLCJ0ZXh0Q29sb3JIbCIsInN1YnRleHRDb2xvciIsIlN0eWxlZFRvb2xiYXIiLCJUb29sYmFyIiwiUGFuZWxBY3Rpb24iLCJSZWFjdCIsIm1lbW8iLCJpdGVtIiwic2hvd0V4cG9ydERyb3Bkb3duIiwib25DbGljayIsImRyb3Bkb3duQ29tcG9uZW50IiwiaWQiLCJsYWJlbCIsImJsYW5rIiwiaHJlZiIsImljb25Db21wb25lbnRQcm9wcyIsInRvb2x0aXAiLCJkaXNwbGF5TmFtZSIsIlBhbmVsSGVhZGVyRHJvcGRvd25GYWN0b3J5IiwiUGFuZWxIZWFkZXJEcm9wZG93biIsIml0ZW1zIiwic2hvdyIsIm9uQ2xvc2UiLCJtYXAiLCJrZXkiLCJpY29uIiwiZ2V0RHJvcGRvd25JdGVtc1NlbGVjdG9yIiwidCIsImZpbHRlciIsImwiLCJTYXZlRXhwb3J0RHJvcGRvd25GYWN0b3J5IiwiZHJvcGRvd25JdGVtc1NlbGVjdG9yIiwiU2F2ZUV4cG9ydERyb3Bkb3duIiwiZGVmYXVsdFByb3BzIiwiUGljdHVyZSIsIm9uRXhwb3J0SW1hZ2UiLCJEYXRhVGFibGUiLCJvbkV4cG9ydERhdGEiLCJNYXBJY29uIiwib25FeHBvcnRNYXAiLCJTYXZlMiIsIm9uU2F2ZU1hcCIsIlNoYXJlIiwib25TaGFyZU1hcCIsImRlcHMiLCJDbG91ZFN0b3JhZ2VEcm9wZG93bkZhY3RvcnkiLCJDbG91ZFN0b3JhZ2VEcm9wZG93biIsIm9uU2F2ZVRvU3RvcmFnZSIsIm9uU2F2ZUFzVG9TdG9yYWdlIiwiUGFuZWxIZWFkZXJGYWN0b3J5IiwiYXBwTmFtZSIsImFwcFdlYnNpdGUiLCJ2ZXJzaW9uIiwiYWN0aW9uSXRlbXMiLCJ2aXNpYmxlRHJvcGRvd24iLCJoaWRlRXhwb3J0RHJvcGRvd24iLCJkcm9wZG93bkNhbGxiYWNrcyIsImFpIiwibG9nb0NvbXBvbmVudCIsInBvc2l0aW9uIiwiQ29tcG9uZW50IiwiS2VwbGVyR2xMb2dvIiwiaWNvbkNvbXBvbmVudCIsIkRiIiwiU2F2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQXVFQSxJQUFNQSxpQkFBaUIsR0FBR0MsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQixVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNuREMsSUFBQUEsU0FBUyxFQUFFLDRCQUFXLHlCQUFYLEVBQXNDRCxLQUFLLENBQUNDLFNBQTVDO0FBRHdDLEdBQUw7QUFBQSxDQUF0QixDQUFILGtKQUdELFVBQUFELEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsaUJBQWhCO0FBQUEsQ0FISixDQUF2Qjs7QUFPQSxJQUFNQyxvQkFBb0IsR0FBR1AsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQixVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUN0REMsSUFBQUEsU0FBUyxFQUFFLDRCQUFXLHlCQUFYLEVBQXNDRCxLQUFLLENBQUNDLFNBQTVDO0FBRDJDLEdBQUw7QUFBQSxDQUF0QixDQUFILHVMQUExQjs7QUFTQSxJQUFNSSxxQkFBcUIsR0FBR1IsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUM3Q0UsRUFBQUEsU0FBUyxFQUFFO0FBRGtDLENBQWpCLENBQUgsNEdBQTNCOztBQU1BLElBQU1LLGlCQUFpQixHQUFHVCw2QkFBT0MsR0FBUCxDQUFXQyxLQUFY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QUFFLG1CQUFNLENBQUUsQ0FKbkI7QUFLRUMsTUFBQUEsaUJBQWlCLEVBQUVvQztBQUxyQixLQURXLEVBUVg7QUFDRW5DLE1BQUFBLEVBQUUsRUFBRSxNQUROO0FBRUVtRCxNQUFBQSxhQUFhLEVBQUVFLFdBRmpCO0FBR0V2RCxNQUFBQSxPQUFPLEVBQUUsbUJBQU0sQ0FBRSxDQUhuQjtBQUlFRyxNQUFBQSxLQUFLLEVBQUUsT0FKVDtBQUtFRixNQUFBQSxpQkFBaUIsRUFBRXNCO0FBTHJCLEtBUlc7QUFGTyxHQUR4QjtBQXdFRDs7ZUFFY2lCLGtCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSAnLi4vY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBLZXBsZXJHbExvZ28gZnJvbSAnLi4vY29tbW9uL2xvZ28nO1xuaW1wb3J0IHtTYXZlLCBEYXRhVGFibGUsIFNhdmUyLCBQaWN0dXJlLCBEYiwgTWFwIGFzIE1hcEljb24sIFNoYXJlfSBmcm9tICcuLi9jb21tb24vaWNvbnMnO1xuaW1wb3J0IENsaWNrT3V0c2lkZUNsb3NlRHJvcGRvd24gZnJvbSAnLi9wYW5lbC1kcm9wZG93bic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICcuLi9jb21tb24vdG9vbGJhcic7XG5pbXBvcnQgVG9vbGJhckl0ZW0sIHtUb29sYmFySXRlbVByb3BzfSBmcm9tICcuLi9jb21tb24vdG9vbGJhci1pdGVtJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnQGtlcGxlci5nbC9sb2NhbGl6YXRpb24nO1xuaW1wb3J0IHtVaVN0YXRlfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcbmltcG9ydCB7QmFzZVByb3BzfSBmcm9tICcuLi9jb21tb24vaWNvbnMnO1xuXG50eXBlIFN0eWxlZFBhbmVsQWN0aW9uUHJvcHMgPSB7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG59O1xuXG50eXBlIEFjdGlvbkl0ZW0gPSB7XG4gIGlkOiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBibGFuaz86IGJvb2xlYW47XG4gIGhyZWY/OiBzdHJpbmc7XG4gIHRvb2x0aXA/OiBzdHJpbmc7XG4gIGljb25Db21wb25lbnQ6IFJlYWN0LkNvbXBvbmVudFR5cGU8UGFydGlhbDxCYXNlUHJvcHM+PjtcbiAgaWNvbkNvbXBvbmVudFByb3BzPzogQmFzZVByb3BzO1xuICBkcm9wZG93bkNvbXBvbmVudD86IFJlYWN0LkNvbXBvbmVudFR5cGU8RHJvcGRvd25Db21wb25lbnRQcm9wcz47XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufTtcblxudHlwZSBQYW5lbEFjdGlvblByb3BzID0ge1xuICBpdGVtOiBBY3Rpb25JdGVtO1xuICBzaG93RXhwb3J0RHJvcGRvd246IChzdHJpbmcpID0+IHZvaWQ7XG59O1xuXG50eXBlIFBhbmVsSGVhZGVyRHJvcGRvd25Qcm9wcyA9IHtcbiAgaWQ6IHN0cmluZztcbiAgaXRlbXM6IFRvb2xiYXJJdGVtUHJvcHNbXTtcbiAgc2hvdz86IGJvb2xlYW47XG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XG59O1xuXG50eXBlIERyb3Bkb3duQ2FsbGJhY2tzID0ge1xuICBsb2dvQ29tcG9uZW50PzogUmVhY3QuQ29tcG9uZW50VHlwZTx7XG4gICAgYXBwTmFtZTogc3RyaW5nO1xuICAgIGFwcFdlYnNpdGU6IHN0cmluZztcbiAgICB2ZXJzaW9uOiBzdHJpbmc7XG4gIH0+O1xuICBvbkV4cG9ydEltYWdlOiAoKSA9PiB2b2lkO1xuICBvbkV4cG9ydERhdGE6ICgpID0+IHZvaWQ7XG4gIG9uRXhwb3J0Q29uZmlnPzogKCkgPT4gdm9pZDtcbiAgb25FeHBvcnRNYXA6ICgpID0+IHZvaWQ7XG4gIG9uU2F2ZVRvU3RvcmFnZTogKCgpID0+IHZvaWQpIHwgbnVsbDtcbiAgb25TYXZlQXNUb1N0b3JhZ2U6ICgoKSA9PiB2b2lkKSB8IG51bGw7XG4gIG9uU2F2ZU1hcD86ICgpID0+IHZvaWQ7XG4gIG9uU2hhcmVNYXA6ICgoKSA9PiB2b2lkKSB8IG51bGw7XG59O1xuXG50eXBlIEl0ZW0gPSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGljb246IFJlYWN0LkNvbXBvbmVudFR5cGU8UGFydGlhbDxCYXNlUHJvcHM+PjtcbiAga2V5OiBzdHJpbmc7XG4gIG9uQ2xpY2s6IChwOiBEcm9wZG93bkNvbXBvbmVudFByb3BzKSA9PiAoKCkgPT4gdm9pZCkgfCBudWxsO1xufTtcblxudHlwZSBEcm9wZG93bkNvbXBvbmVudFByb3BzID0ge1xuICBzaG93OiBib29sZWFuO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xuICBpdGVtcz86IEl0ZW1bXTtcbn0gJiBEcm9wZG93bkNhbGxiYWNrcztcblxudHlwZSBQYW5lbEhlYWRlclByb3BzID0ge1xuICBhcHBOYW1lOiBzdHJpbmc7XG4gIGFwcFdlYnNpdGU6IHN0cmluZztcbiAgdmVyc2lvbjogc3RyaW5nO1xuICB2aXNpYmxlRHJvcGRvd246IFVpU3RhdGVbJ3Zpc2libGVEcm9wZG93biddO1xuICBhY3Rpb25JdGVtcz86IEFjdGlvbkl0ZW1bXTtcbiAgc2hvd0V4cG9ydERyb3Bkb3duOiAoaTogc3RyaW5nKSA9PiB2b2lkO1xuICBoaWRlRXhwb3J0RHJvcGRvd246ICgpID0+IHZvaWQ7XG59ICYgRHJvcGRvd25DYWxsYmFja3M7XG5cbmNvbnN0IFN0eWxlZFBhbmVsSGVhZGVyID0gc3R5bGVkLmRpdi5hdHRycyhwcm9wcyA9PiAoe1xuICBjbGFzc05hbWU6IGNsYXNzbmFtZXMoJ3NpZGUtc2lkZS1wYW5lbF9faGVhZGVyJywgcHJvcHMuY2xhc3NOYW1lKVxufSkpYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbEhlYWRlckJnfTtcbiAgcGFkZGluZzogMTJweCAxNnB4IDAgMTZweDtcbmA7XG5cbmNvbnN0IFN0eWxlZFBhbmVsSGVhZGVyVG9wID0gc3R5bGVkLmRpdi5hdHRycyhwcm9wcyA9PiAoe1xuICBjbGFzc05hbWU6IGNsYXNzbmFtZXMoJ3NpZGUtcGFuZWxfX2hlYWRlcl9fdG9wJywgcHJvcHMuY2xhc3NOYW1lKVxufSkpYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuY29uc3QgU3R5bGVkUGFuZWxUb3BBY3Rpb25zID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ3NpZGUtcGFuZWxfX3RvcF9fYWN0aW9ucydcbn0pYFxuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgU3R5bGVkUGFuZWxBY3Rpb24gPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbF9fcGFuZWwtaGVhZGVyX19hY3Rpb24nXG59KTxTdHlsZWRQYW5lbEFjdGlvblByb3BzPmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuYWN0aXZlID8gcHJvcHMudGhlbWUudGV4dENvbG9ySGwgOiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3IpfTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHAge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgfVxuICBhIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JIbH07XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZFRvb2xiYXIgPSBzdHlsZWQoVG9vbGJhcilgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbmA7XG5cbmNvbnN0IFBhbmVsQWN0aW9uOiBSZWFjdC5GQzxQYW5lbEFjdGlvblByb3BzPiA9IFJlYWN0Lm1lbW8oKHtpdGVtLCBzaG93RXhwb3J0RHJvcGRvd259KSA9PiB7XG4gIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKGl0ZW0uZHJvcGRvd25Db21wb25lbnQpIHtcbiAgICAgIHNob3dFeHBvcnREcm9wZG93bihpdGVtLmlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbS5vbkNsaWNrICYmIGl0ZW0ub25DbGljaygpO1xuICAgIH1cbiAgfSwgW2l0ZW0sIHNob3dFeHBvcnREcm9wZG93bl0pO1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFBhbmVsQWN0aW9uIGRhdGEtdGlwIGRhdGEtZm9yPXtgJHtpdGVtLmlkfS1hY3Rpb25gfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgIHtpdGVtLmxhYmVsID8gPHA+e2l0ZW0ubGFiZWx9PC9wPiA6IG51bGx9XG4gICAgICA8YSB0YXJnZXQ9e2l0ZW0uYmxhbmsgPyAnX2JsYW5rJyA6ICcnfSBocmVmPXtpdGVtLmhyZWZ9IHJlbD1cIm5vcmVmZXJyZXJcIj5cbiAgICAgICAgPGl0ZW0uaWNvbkNvbXBvbmVudCBoZWlnaHQ9XCIyMHB4XCIgey4uLml0ZW0uaWNvbkNvbXBvbmVudFByb3BzfSAvPlxuICAgICAgPC9hPlxuICAgICAge2l0ZW0udG9vbHRpcCA/IChcbiAgICAgICAgPFRvb2x0aXAgaWQ9e2Ake2l0ZW0uaWR9LWFjdGlvbmB9IHBsYWNlPVwiYm90dG9tXCIgZGVsYXlTaG93PXs1MDB9IGVmZmVjdD1cInNvbGlkXCI+XG4gICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e2l0ZW0udG9vbHRpcH0gLz5cbiAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9TdHlsZWRQYW5lbEFjdGlvbj5cbiAgKTtcbn0pO1xuUGFuZWxBY3Rpb24uZGlzcGxheU5hbWUgPSAnUGFuZWxBY3Rpb24nO1xuZXhwb3J0IHtQYW5lbEFjdGlvbn07XG5cbmV4cG9ydCBjb25zdCBQYW5lbEhlYWRlckRyb3Bkb3duRmFjdG9yeSA9ICgpID0+IHtcbiAgY29uc3QgUGFuZWxIZWFkZXJEcm9wZG93bjogUmVhY3QuRkM8UGFuZWxIZWFkZXJEcm9wZG93blByb3BzPiA9ICh7aXRlbXMsIHNob3csIG9uQ2xvc2UsIGlkfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkVG9vbGJhciBzaG93PXtzaG93fSBjbGFzc05hbWU9e2Ake2lkfS1kcm9wZG93bmB9PlxuICAgICAgICA8Q2xpY2tPdXRzaWRlQ2xvc2VEcm9wZG93blxuICAgICAgICAgIGNsYXNzTmFtZT1cInBhbmVsLWhlYWRlci1kcm9wZG93bl9faW5uZXJcIlxuICAgICAgICAgIHNob3c9e3Nob3d9XG4gICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpdGVtcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICA8VG9vbGJhckl0ZW1cbiAgICAgICAgICAgICAgaWQ9e2l0ZW0ua2V5fVxuICAgICAgICAgICAgICBrZXk9e2l0ZW0ua2V5fVxuICAgICAgICAgICAgICBsYWJlbD17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgaWNvbj17aXRlbS5pY29ufVxuICAgICAgICAgICAgICBvbkNsaWNrPXtpdGVtLm9uQ2xpY2t9XG4gICAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0NsaWNrT3V0c2lkZUNsb3NlRHJvcGRvd24+XG4gICAgICA8L1N0eWxlZFRvb2xiYXI+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gUGFuZWxIZWFkZXJEcm9wZG93bjtcbn07XG5cbmNvbnN0IGdldERyb3Bkb3duSXRlbXNTZWxlY3RvciA9ICgpID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIChwcm9wczogRHJvcGRvd25Db21wb25lbnRQcm9wcykgPT4gcHJvcHMsXG4gICAgcHJvcHMgPT5cbiAgICAgIChwcm9wcy5pdGVtcyB8fCBbXSlcbiAgICAgICAgLm1hcCh0ID0+ICh7XG4gICAgICAgICAgLi4udCxcbiAgICAgICAgICBvbkNsaWNrOiB0Lm9uQ2xpY2sgJiYgdC5vbkNsaWNrKHByb3BzKSA/IHQub25DbGljayhwcm9wcykgOiBudWxsXG4gICAgICAgIH0pKVxuICAgICAgICAuZmlsdGVyKGwgPT4gbC5vbkNsaWNrKVxuICApO1xuXG5leHBvcnQgY29uc3QgU2F2ZUV4cG9ydERyb3Bkb3duRmFjdG9yeSA9IChcbiAgUGFuZWxIZWFkZXJEcm9wZG93bjogUmV0dXJuVHlwZTx0eXBlb2YgUGFuZWxIZWFkZXJEcm9wZG93bkZhY3Rvcnk+XG4pID0+IHtcbiAgY29uc3QgZHJvcGRvd25JdGVtc1NlbGVjdG9yID0gZ2V0RHJvcGRvd25JdGVtc1NlbGVjdG9yKCk7XG5cbiAgY29uc3QgU2F2ZUV4cG9ydERyb3Bkb3duOiBSZWFjdC5GQzxEcm9wZG93bkNvbXBvbmVudFByb3BzPiA9IHByb3BzID0+IChcbiAgICA8UGFuZWxIZWFkZXJEcm9wZG93blxuICAgICAgaXRlbXM9e2Ryb3Bkb3duSXRlbXNTZWxlY3Rvcihwcm9wcyl9XG4gICAgICBzaG93PXtwcm9wcy5zaG93fVxuICAgICAgb25DbG9zZT17cHJvcHMub25DbG9zZX1cbiAgICAgIGlkPVwic2F2ZS1leHBvcnRcIlxuICAgIC8+XG4gICk7XG5cbiAgU2F2ZUV4cG9ydERyb3Bkb3duLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ3Rvb2xiYXIuZXhwb3J0SW1hZ2UnLFxuICAgICAgICBpY29uOiBQaWN0dXJlLFxuICAgICAgICBrZXk6ICdpbWFnZScsXG4gICAgICAgIG9uQ2xpY2s6IHByb3BzID0+IHByb3BzLm9uRXhwb3J0SW1hZ2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAndG9vbGJhci5leHBvcnREYXRhJyxcbiAgICAgICAgaWNvbjogRGF0YVRhYmxlLFxuICAgICAgICBrZXk6ICdkYXRhJyxcbiAgICAgICAgb25DbGljazogcHJvcHMgPT4gcHJvcHMub25FeHBvcnREYXRhXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ3Rvb2xiYXIuZXhwb3J0TWFwJyxcbiAgICAgICAgaWNvbjogTWFwSWNvbixcbiAgICAgICAga2V5OiAnbWFwJyxcbiAgICAgICAgb25DbGljazogcHJvcHMgPT4gcHJvcHMub25FeHBvcnRNYXBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAndG9vbGJhci5zYXZlTWFwJyxcbiAgICAgICAgaWNvbjogU2F2ZTIsXG4gICAgICAgIGtleTogJ3NhdmUnLFxuICAgICAgICBvbkNsaWNrOiBwcm9wcyA9PiBwcm9wcy5vblNhdmVNYXAhXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ3Rvb2xiYXIuc2hhcmVNYXBVUkwnLFxuICAgICAgICBpY29uOiBTaGFyZSxcbiAgICAgICAga2V5OiAnc2hhcmUnLFxuICAgICAgICBvbkNsaWNrOiBwcm9wcyA9PiBwcm9wcy5vblNoYXJlTWFwXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIHJldHVybiBTYXZlRXhwb3J0RHJvcGRvd247XG59O1xuU2F2ZUV4cG9ydERyb3Bkb3duRmFjdG9yeS5kZXBzID0gW1BhbmVsSGVhZGVyRHJvcGRvd25GYWN0b3J5XTtcblxuZXhwb3J0IGNvbnN0IENsb3VkU3RvcmFnZURyb3Bkb3duRmFjdG9yeSA9IChcbiAgUGFuZWxIZWFkZXJEcm9wZG93bjogUmV0dXJuVHlwZTx0eXBlb2YgUGFuZWxIZWFkZXJEcm9wZG93bkZhY3Rvcnk+XG4pID0+IHtcbiAgY29uc3QgZHJvcGRvd25JdGVtc1NlbGVjdG9yID0gZ2V0RHJvcGRvd25JdGVtc1NlbGVjdG9yKCk7XG5cbiAgY29uc3QgQ2xvdWRTdG9yYWdlRHJvcGRvd246IFJlYWN0LkZDPERyb3Bkb3duQ29tcG9uZW50UHJvcHM+ID0gcHJvcHMgPT4gKFxuICAgIDxQYW5lbEhlYWRlckRyb3Bkb3duXG4gICAgICBpdGVtcz17ZHJvcGRvd25JdGVtc1NlbGVjdG9yKHByb3BzKX1cbiAgICAgIHNob3c9e3Byb3BzLnNob3d9XG4gICAgICBvbkNsb3NlPXtwcm9wcy5vbkNsb3NlfVxuICAgICAgaWQ9XCJjbG91ZC1zdG9yYWdlXCJcbiAgICAvPlxuICApO1xuICBDbG91ZFN0b3JhZ2VEcm9wZG93bi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgaXRlbXM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdTYXZlJyxcbiAgICAgICAgaWNvbjogU2F2ZTIsXG4gICAgICAgIGtleTogJ3NhdmUnLFxuICAgICAgICBvbkNsaWNrOiBwcm9wcyA9PiBwcm9wcy5vblNhdmVUb1N0b3JhZ2VcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnU2F2ZSBBcycsXG4gICAgICAgIGljb246IFNhdmUyLFxuICAgICAgICBrZXk6ICdzYXZlQXMnLFxuICAgICAgICBvbkNsaWNrOiBwcm9wcyA9PiBwcm9wcy5vblNhdmVBc1RvU3RvcmFnZVxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgcmV0dXJuIENsb3VkU3RvcmFnZURyb3Bkb3duO1xufTtcbkNsb3VkU3RvcmFnZURyb3Bkb3duRmFjdG9yeS5kZXBzID0gW1BhbmVsSGVhZGVyRHJvcGRvd25GYWN0b3J5XTtcblxuUGFuZWxIZWFkZXJGYWN0b3J5LmRlcHMgPSBbU2F2ZUV4cG9ydERyb3Bkb3duRmFjdG9yeSwgQ2xvdWRTdG9yYWdlRHJvcGRvd25GYWN0b3J5XTtcblxuZnVuY3Rpb24gUGFuZWxIZWFkZXJGYWN0b3J5KFxuICBTYXZlRXhwb3J0RHJvcGRvd246IFJldHVyblR5cGU8dHlwZW9mIFNhdmVFeHBvcnREcm9wZG93bkZhY3Rvcnk+LFxuICBDbG91ZFN0b3JhZ2VEcm9wZG93bjogUmV0dXJuVHlwZTx0eXBlb2YgQ2xvdWRTdG9yYWdlRHJvcGRvd25GYWN0b3J5PlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxQYW5lbEhlYWRlclByb3BzPiB7XG4gIHJldHVybiBjbGFzcyBQYW5lbEhlYWRlciBleHRlbmRzIENvbXBvbmVudDxQYW5lbEhlYWRlclByb3BzPiB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIGxvZ29Db21wb25lbnQ6IEtlcGxlckdsTG9nbyxcbiAgICAgIGFjdGlvbkl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ3N0b3JhZ2UnLFxuICAgICAgICAgIGljb25Db21wb25lbnQ6IERiLFxuICAgICAgICAgIHRvb2x0aXA6ICd0b29sdGlwLmNsb3VkU3RvcmFnZScsXG4gICAgICAgICAgb25DbGljazogKCkgPT4ge30sXG4gICAgICAgICAgZHJvcGRvd25Db21wb25lbnQ6IENsb3VkU3RvcmFnZURyb3Bkb3duXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ3NhdmUnLFxuICAgICAgICAgIGljb25Db21wb25lbnQ6IFNhdmUsXG4gICAgICAgICAgb25DbGljazogKCkgPT4ge30sXG4gICAgICAgICAgbGFiZWw6ICdTaGFyZScsXG4gICAgICAgICAgZHJvcGRvd25Db21wb25lbnQ6IFNhdmVFeHBvcnREcm9wZG93blxuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYXBwTmFtZSxcbiAgICAgICAgYXBwV2Vic2l0ZSxcbiAgICAgICAgdmVyc2lvbixcbiAgICAgICAgYWN0aW9uSXRlbXMsXG4gICAgICAgIHZpc2libGVEcm9wZG93bixcbiAgICAgICAgc2hvd0V4cG9ydERyb3Bkb3duLFxuICAgICAgICBoaWRlRXhwb3J0RHJvcGRvd24sXG4gICAgICAgIC4uLmRyb3Bkb3duQ2FsbGJhY2tzXG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGxldCBpdGVtcyA9IGFjdGlvbkl0ZW1zIHx8IFtdO1xuXG4gICAgICAvLyBkb24ndCByZW5kZXIgY2xvdWQgc3RvcmFnZSBpY29uIGlmIG9uU2F2ZVRvU3RvcmFnZSBpcyBub3QgcHJvdmlkZWRcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vblNhdmVUb1N0b3JhZ2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaXRlbXMgPSBpdGVtcy5maWx0ZXIoYWkgPT4gYWkuaWQgIT09ICdzdG9yYWdlJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRQYW5lbEhlYWRlciBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19wYW5lbC1oZWFkZXJcIj5cbiAgICAgICAgICA8U3R5bGVkUGFuZWxIZWFkZXJUb3AgY2xhc3NOYW1lPVwic2lkZS1wYW5lbF9fcGFuZWwtaGVhZGVyX190b3BcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxvZ29Db21wb25lbnQgJiYgKFxuICAgICAgICAgICAgICA8dGhpcy5wcm9wcy5sb2dvQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgYXBwTmFtZT17YXBwTmFtZX1cbiAgICAgICAgICAgICAgICB2ZXJzaW9uPXt2ZXJzaW9ufVxuICAgICAgICAgICAgICAgIGFwcFdlYnNpdGU9e2FwcFdlYnNpdGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPFN0eWxlZFBhbmVsVG9wQWN0aW9ucz5cbiAgICAgICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaWRlLXBhbmVsX19wYW5lbC1oZWFkZXJfX3JpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxQYW5lbEFjdGlvbiBpdGVtPXtpdGVtfSBzaG93RXhwb3J0RHJvcGRvd249e3Nob3dFeHBvcnREcm9wZG93bn0gLz5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLmRyb3Bkb3duQ29tcG9uZW50ID8gKFxuICAgICAgICAgICAgICAgICAgICA8aXRlbS5kcm9wZG93bkNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hpZGVFeHBvcnREcm9wZG93bn1cbiAgICAgICAgICAgICAgICAgICAgICBzaG93PXt2aXNpYmxlRHJvcGRvd24gPT09IGl0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgey4uLmRyb3Bkb3duQ2FsbGJhY2tzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TdHlsZWRQYW5lbFRvcEFjdGlvbnM+XG4gICAgICAgICAgPC9TdHlsZWRQYW5lbEhlYWRlclRvcD5cbiAgICAgICAgPC9TdHlsZWRQYW5lbEhlYWRlcj5cbiAgICAgICk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQYW5lbEhlYWRlckZhY3Rvcnk7XG4iXX0=