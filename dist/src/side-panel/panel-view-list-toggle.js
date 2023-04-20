"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StyledToggleOption = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _orderByList = _interopRequireDefault(require("../common/icons/order-by-list"));

var _orderByDataset = _interopRequireDefault(require("../common/icons/order-by-dataset"));

var _styledComponents2 = require("../common/styled-components");

var _localization = require("@kepler.gl/localization");

var _constants = require("@kepler.gl/constants");

var _templateObject, _templateObject2, _templateObject3;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var PanelViewListToggleContainer = _styledComponents["default"].div.attrs({
  className: 'panel-view-list-toggle'
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])([""])));

var PanelViewListToggleWrapper = _styledComponents["default"].div.attrs({
  className: 'panel-view-list-toggle-inner'
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: flex-end;\n  align-content: center;\n  gap: 10px;\n"])));

var StyledToggleOption = _styledComponents["default"].div.attrs({
  className: 'layer-panel-toggle-option'
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  :hover {\n    cursor: pointer;\n    color: ", ";\n  }\n"])), function (props) {
  return props.active ? props.theme.subtextColorActive : props.theme.panelTabColor;
}, function (props) {
  return props.theme.subtextColorActive;
});

exports.StyledToggleOption = StyledToggleOption;

function ToggleOptionFactory() {
  var ToggleOption = function ToggleOption(_ref) {
    var isActive = _ref.isActive,
        onClick = _ref.onClick,
        option = _ref.option;
    return /*#__PURE__*/_react["default"].createElement(StyledToggleOption, {
      "data-tip": true,
      "data-for": "".concat(option.id, "-toggle-option"),
      active: isActive,
      onClick: onClick
    }, /*#__PURE__*/_react["default"].createElement(option.iconComponent, {
      height: "20px"
    }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
      id: "".concat(option.id, "-toggle-option"),
      effect: "solid",
      delayShow: 500,
      place: "bottom"
    }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: option.label
    }))));
  };

  return ToggleOption;
}

var TOGGLE_OPTIONS = [{
  id: _constants.PANEL_VIEW_TOGGLES.list,
  iconComponent: _orderByList["default"],
  label: 'sidebar.panelViewToggle.list'
}, {
  id: _constants.PANEL_VIEW_TOGGLES.byDataset,
  iconComponent: _orderByDataset["default"],
  label: 'sidebar.panelViewToggle.byDataset'
}];
PanelViewListToggleFactory.deps = [ToggleOptionFactory];

function PanelViewListToggleFactory(ToggleOption) {
  var PanelViewListToggle = function PanelViewListToggle(_ref2) {
    var mode = _ref2.mode,
        togglePanelListView = _ref2.togglePanelListView;

    var toggleListView = function toggleListView(listView) {
      return togglePanelListView(listView);
    };

    var options = (0, _react.useMemo)(function () {
      return TOGGLE_OPTIONS.map(function (opt) {
        return _objectSpread(_objectSpread({}, opt), {}, {
          isActive: mode === opt.id
        });
      });
    }, [mode]);
    return /*#__PURE__*/_react["default"].createElement(PanelViewListToggleContainer, null, /*#__PURE__*/_react["default"].createElement(PanelViewListToggleWrapper, null, options.map(function (opt) {
      return /*#__PURE__*/_react["default"].createElement(ToggleOption, {
        key: opt.id,
        onClick: function onClick() {
          return toggleListView(opt.id);
        },
        option: opt,
        isActive: opt.isActive
      });
    })));
  };

  return PanelViewListToggle;
}

var _default = PanelViewListToggleFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL3BhbmVsLXZpZXctbGlzdC10b2dnbGUudHN4Il0sIm5hbWVzIjpbIlBhbmVsVmlld0xpc3RUb2dnbGVDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsIlBhbmVsVmlld0xpc3RUb2dnbGVXcmFwcGVyIiwiU3R5bGVkVG9nZ2xlT3B0aW9uIiwicHJvcHMiLCJhY3RpdmUiLCJ0aGVtZSIsInN1YnRleHRDb2xvckFjdGl2ZSIsInBhbmVsVGFiQ29sb3IiLCJUb2dnbGVPcHRpb25GYWN0b3J5IiwiVG9nZ2xlT3B0aW9uIiwiaXNBY3RpdmUiLCJvbkNsaWNrIiwib3B0aW9uIiwiaWQiLCJsYWJlbCIsIlRPR0dMRV9PUFRJT05TIiwiUEFORUxfVklFV19UT0dHTEVTIiwibGlzdCIsImljb25Db21wb25lbnQiLCJPcmRlckJ5TGlzdCIsImJ5RGF0YXNldCIsIk9yZGVyQnlEYXRhc2V0IiwiUGFuZWxWaWV3TGlzdFRvZ2dsZUZhY3RvcnkiLCJkZXBzIiwiUGFuZWxWaWV3TGlzdFRvZ2dsZSIsIm1vZGUiLCJ0b2dnbGVQYW5lbExpc3RWaWV3IiwidG9nZ2xlTGlzdFZpZXciLCJsaXN0VmlldyIsIm9wdGlvbnMiLCJtYXAiLCJvcHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7QUFhQSxJQUFNQSw0QkFBNEIsR0FBR0MsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUNwREMsRUFBQUEsU0FBUyxFQUFFO0FBRHlDLENBQWpCLENBQUgsc0ZBQWxDOztBQUlBLElBQU1DLDBCQUEwQixHQUFHSiw2QkFBT0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQ2xEQyxFQUFBQSxTQUFTLEVBQUU7QUFEdUMsQ0FBakIsQ0FBSCxrTEFBaEM7O0FBU08sSUFBTUUsa0JBQWtCLEdB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UUFBQSxNQUFNLEVBQUVrQixHQUhWO0FBSUUsUUFBQSxRQUFRLEVBQUVBLEdBQUcsQ0FBQ3JCO0FBSmhCLFFBRGM7QUFBQSxLQUFmLENBREgsQ0FERixDQURGO0FBY0QsR0F0QkQ7O0FBd0JBLFNBQU9jLG1CQUFQO0FBQ0Q7O2VBRWNGLDBCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlTWVtb30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgT3JkZXJCeUxpc3QgZnJvbSAnLi4vY29tbW9uL2ljb25zL29yZGVyLWJ5LWxpc3QnO1xuaW1wb3J0IE9yZGVyQnlEYXRhc2V0IGZyb20gJy4uL2NvbW1vbi9pY29ucy9vcmRlci1ieS1kYXRhc2V0JztcbmltcG9ydCB7VG9vbHRpcH0gZnJvbSAnLi4vY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnQGtlcGxlci5nbC9sb2NhbGl6YXRpb24nO1xuaW1wb3J0IHtQYW5lbExpc3RWaWV3fSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcbmltcG9ydCB7UEFORUxfVklFV19UT0dHTEVTfSBmcm9tICdAa2VwbGVyLmdsL2NvbnN0YW50cyc7XG5cbnR5cGUgVG9nZ2xlT3B0aW9uUHJvcHMgPSB7XG4gIGlzQWN0aXZlOiBib29sZWFuO1xuICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuICBvcHRpb246IHR5cGVvZiBUT0dHTEVfT1BUSU9OU1swXTtcbn07XG5cbnR5cGUgUGFuZWxWaWV3TGlzdFRvZ2dsZVByb3BzID0ge1xuICBtb2RlOiBQYW5lbExpc3RWaWV3O1xuICB0b2dnbGVQYW5lbExpc3RWaWV3OiAodmlldzogc3RyaW5nKSA9PiB2b2lkO1xufTtcblxuY29uc3QgUGFuZWxWaWV3TGlzdFRvZ2dsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdwYW5lbC12aWV3LWxpc3QtdG9nZ2xlJ1xufSlgYDtcblxuY29uc3QgUGFuZWxWaWV3TGlzdFRvZ2dsZVdyYXBwZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAncGFuZWwtdmlldy1saXN0LXRvZ2dsZS1pbm5lcidcbn0pYFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRUb2dnbGVPcHRpb24gPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnbGF5ZXItcGFuZWwtdG9nZ2xlLW9wdGlvbidcbn0pPHthY3RpdmU6IGJvb2xlYW59PmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvckFjdGl2ZSA6IHByb3BzLnRoZW1lLnBhbmVsVGFiQ29sb3IpfTtcbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yQWN0aXZlfTtcbiAgfVxuYDtcblxuZnVuY3Rpb24gVG9nZ2xlT3B0aW9uRmFjdG9yeSgpIHtcbiAgY29uc3QgVG9nZ2xlT3B0aW9uOiBSZWFjdC5GQzxUb2dnbGVPcHRpb25Qcm9wcz4gPSAoe2lzQWN0aXZlLCBvbkNsaWNrLCBvcHRpb259KSA9PiAoXG4gICAgPFN0eWxlZFRvZ2dsZU9wdGlvblxuICAgICAgZGF0YS10aXBcbiAgICAgIGRhdGEtZm9yPXtgJHtvcHRpb24uaWR9LXRvZ2dsZS1vcHRpb25gfVxuICAgICAgYWN0aXZlPXtpc0FjdGl2ZX1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgPlxuICAgICAgPG9wdGlvbi5pY29uQ29tcG9uZW50IGhlaWdodD1cIjIwcHhcIiAvPlxuICAgICAgPFRvb2x0aXAgaWQ9e2Ake29wdGlvbi5pZH0tdG9nZ2xlLW9wdGlvbmB9IGVmZmVjdD1cInNvbGlkXCIgZGVsYXlTaG93PXs1MDB9IHBsYWNlPVwiYm90dG9tXCI+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtvcHRpb24ubGFiZWx9IC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvVG9vbHRpcD5cbiAgICA8L1N0eWxlZFRvZ2dsZU9wdGlvbj5cbiAgKTtcblxuICByZXR1cm4gVG9nZ2xlT3B0aW9uO1xufVxuXG5jb25zdCBUT0dHTEVfT1BUSU9OUyA9IFtcbiAge1xuICAgIGlkOiBQQU5FTF9WSUVXX1RPR0dMRVMubGlzdCxcbiAgICBpY29uQ29tcG9uZW50OiBPcmRlckJ5TGlzdCxcbiAgICBsYWJlbDogJ3NpZGViYXIucGFuZWxWaWV3VG9nZ2xlLmxpc3QnXG4gIH0sXG4gIHtcbiAgICBpZDogUEFORUxfVklFV19UT0dHTEVTLmJ5RGF0YXNldCxcbiAgICBpY29uQ29tcG9uZW50OiBPcmRlckJ5RGF0YXNldCxcbiAgICBsYWJlbDogJ3NpZGViYXIucGFuZWxWaWV3VG9nZ2xlLmJ5RGF0YXNldCdcbiAgfVxuXTtcblxuUGFuZWxWaWV3TGlzdFRvZ2dsZUZhY3RvcnkuZGVwcyA9IFtUb2dnbGVPcHRpb25GYWN0b3J5XTtcblxuZnVuY3Rpb24gUGFuZWxWaWV3TGlzdFRvZ2dsZUZhY3RvcnkoVG9nZ2xlT3B0aW9uOiBSZXR1cm5UeXBlPHR5cGVvZiBUb2dnbGVPcHRpb25GYWN0b3J5Pikge1xuICBjb25zdCBQYW5lbFZpZXdMaXN0VG9nZ2xlOiBSZWFjdC5GQzxQYW5lbFZpZXdMaXN0VG9nZ2xlUHJvcHM+ID0gKHttb2RlLCB0b2dnbGVQYW5lbExpc3RWaWV3fSkgPT4ge1xuICAgIGNvbnN0IHRvZ2dsZUxpc3RWaWV3ID0gbGlzdFZpZXcgPT4gdG9nZ2xlUGFuZWxMaXN0VmlldyhsaXN0Vmlldyk7XG5cbiAgICBjb25zdCBvcHRpb25zID0gdXNlTWVtbyhcbiAgICAgICgpID0+IFRPR0dMRV9PUFRJT05TLm1hcChvcHQgPT4gKHsuLi5vcHQsIGlzQWN0aXZlOiBtb2RlID09PSBvcHQuaWR9KSksXG4gICAgICBbbW9kZV1cbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQYW5lbFZpZXdMaXN0VG9nZ2xlQ29udGFpbmVyPlxuICAgICAgICA8UGFuZWxWaWV3TGlzdFRvZ2dsZVdyYXBwZXI+XG4gICAgICAgICAge29wdGlvbnMubWFwKG9wdCA9PiAoXG4gICAgICAgICAgICA8VG9nZ2xlT3B0aW9uXG4gICAgICAgICAgICAgIGtleT17b3B0LmlkfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVMaXN0VmlldyhvcHQuaWQpfVxuICAgICAgICAgICAgICBvcHRpb249e29wdH1cbiAgICAgICAgICAgICAgaXNBY3RpdmU9e29wdC5pc0FjdGl2ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvUGFuZWxWaWV3TGlzdFRvZ2dsZVdyYXBwZXI+XG4gICAgICA8L1BhbmVsVmlld0xpc3RUb2dnbGVDb250YWluZXI+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gUGFuZWxWaWV3TGlzdFRvZ2dsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFuZWxWaWV3TGlzdFRvZ2dsZUZhY3Rvcnk7XG4iXX0=