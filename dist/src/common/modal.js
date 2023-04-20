"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalDialog = exports.ModalFooter = exports.ModalTitle = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _localization = require("@kepler.gl/localization");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactModal = _interopRequireDefault(require("react-modal"));

var _icons = require("./icons");

var _styledComponents2 = require("./styled-components");

var _styles = require("@kepler.gl/styles");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ModalContentWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  overflow-y: auto;\n  max-width: 70vw;\n  max-height: 85vh;\n  padding: 24px 72px 40px;\n  position: relative;\n  top: 92px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  background-color: #ffffff;\n  border-radius: 4px;\n  transition: ", ";\n  box-sizing: border-box;\n  font-size: 12px;\n  color: ", ";\n\n  ", "\n\n  ", "\n\n  ", ";\n"])), function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.labelColorLT;
}, _styles.media.portable(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 12px 36px 24px;\n    max-width: 80vw;\n  "]))), _styles.media.palm(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    max-width: 100vw;\n  "]))), function (props) {
  return props.cssStyle || '';
});

var ModalContent = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  z-index: ", ";\n"])), function (props) {
  return props.theme.modalContentZ;
});

var ModalTitle = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: ", ";\n  color: ", ";\n  margin-bottom: 10px;\n  position: relative;\n  z-index: ", ";\n"])), function (props) {
  return props.theme.modalTitleFontSize;
}, function (props) {
  return props.theme.modalTitleColor;
}, function (props) {
  return props.theme.modalTitleZ;
});

exports.ModalTitle = ModalTitle;

var StyledModalFooter = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding-top: 24px;\n  ", ";\n\n  ", ";\n  z-index: ", ";\n"])), _styles.media.portable(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n    padding-top: 24px;\n  "]))), _styles.media.palm(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n    padding-top: 16px;\n  "]))), function (props) {
  return props.theme.modalFooterZ;
});

var CloseButton = _styledComponents["default"].div(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  display: flex;\n  justify-content: flex-end;\n  z-index: ", ";\n  position: absolute;\n  top: 24px;\n  right: 24px;\n\n  :hover {\n    cursor: pointer;\n  }\n"])), function (props) {
  return props.theme.titleColorLT;
}, function (props) {
  return props.theme.modalButtonZ;
});

var FooterActionWrapper = _styledComponents["default"].div(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: flex-end;\n"])));

var defaultCancelButton = {
  link: true,
  large: true,
  children: 'modal.button.defaultCancel'
};
var defaultConfirmButton = {
  cta: true,
  large: true,
  width: '160px',
  children: 'modal.button.defaultConfirm'
};

var ModalFooter = function ModalFooter(_ref) {
  var cancel = _ref.cancel,
      confirm = _ref.confirm,
      cancelButton = _ref.cancelButton,
      confirmButton = _ref.confirmButton;

  var cancelButtonProps = _objectSpread(_objectSpread({}, defaultCancelButton), cancelButton);

  var confirmButtonProps = _objectSpread(_objectSpread({}, defaultConfirmButton), confirmButton);

  return /*#__PURE__*/_react["default"].createElement(StyledModalFooter, {
    className: "modal--footer"
  }, /*#__PURE__*/_react["default"].createElement(FooterActionWrapper, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, (0, _extends2["default"])({
    className: "modal--footer--cancel-button"
  }, cancelButtonProps, {
    onClick: cancel
  }), /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: cancelButtonProps.children
  })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, (0, _extends2["default"])({
    className: "modal--footer--confirm-button"
  }, confirmButtonProps, {
    onClick: confirm
  }), /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: confirmButtonProps.children
  }))));
};

exports.ModalFooter = ModalFooter;

var ModalDialog = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ModalDialog, _Component);

  var _super = _createSuper(ModalDialog);

  function ModalDialog() {
    (0, _classCallCheck2["default"])(this, ModalDialog);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ModalDialog, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return /*#__PURE__*/_react["default"].createElement(_reactModal["default"], (0, _extends2["default"])({
        className: this.props.className
      }, props, {
        ariaHideApp: false,
        style: {
          overlay: _objectSpread({
            backgroundColor: props.theme && props.theme.modalOverlayBgd || 'rgba(0, 0, 0, 0.5)',
            zIndex: props.theme && props.theme.modalOverLayZ || 1000
          }, props.style)
        }
      }), /*#__PURE__*/_react["default"].createElement(ModalContentWrapper, {
        className: "modal--wrapper",
        cssStyle: props.cssStyle
      }, props.close && /*#__PURE__*/_react["default"].createElement(CloseButton, {
        className: "modal--close",
        onClick: props.onCancel
      }, /*#__PURE__*/_react["default"].createElement(_icons.Delete, {
        height: "14px"
      })), /*#__PURE__*/_react["default"].createElement("div", null, props.title && /*#__PURE__*/_react["default"].createElement(ModalTitle, {
        className: "modal--title"
      }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
        id: props.title
      })), /*#__PURE__*/_react["default"].createElement(ModalContent, {
        className: "modal--body"
      }, props.children), props.footer && /*#__PURE__*/_react["default"].createElement(ModalFooter, {
        cancel: props.onCancel,
        confirm: props.onConfirm,
        cancelButton: props.cancelButton,
        confirmButton: props.confirmButton
      }))));
    }
  }]);
  return ModalDialog;
}(_react.Component);

exports.ModalDialog = ModalDialog;
(0, _defineProperty2["default"])(ModalDialog, "defaultProps", {
  footer: false,
  close: true,
  onConfirm: function onConfirm() {},
  onCancel: function onCancel() {},
  cancelButton: defaultCancelButton,
  confirmButton: defaultConfirmButton,
  cssStyle: []
});
var StyledModal = (0, _styledComponents["default"])(ModalDialog)(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2["default"])(["\n  top: 0;\n  left: 0;\n  transition: ", ";\n  padding-left: 40px;\n  padding-right: 40px;\n\n  ", ";\n\n  ", ";\n\n  :focus {\n    outline: 0;\n  }\n"])), function (props) {
  return props.theme.transition;
}, _styles.media.portable(_templateObject12 || (_templateObject12 = (0, _taggedTemplateLiteral2["default"])(["\n    padding-left: 24px;\n    padding-right: 24px;\n  "]))), _styles.media.palm(_templateObject13 || (_templateObject13 = (0, _taggedTemplateLiteral2["default"])(["\n    padding-left: 0;\n    padding-right: 0;\n  "]))));
var _default = StyledModal;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vbW9kYWwudHN4Il0sIm5hbWVzIjpbIk1vZGFsQ29udGVudFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwidHJhbnNpdGlvbiIsImxhYmVsQ29sb3JMVCIsIm1lZGlhIiwicG9ydGFibGUiLCJwYWxtIiwiY3NzU3R5bGUiLCJNb2RhbENvbnRlbnQiLCJtb2RhbENvbnRlbnRaIiwiTW9kYWxUaXRsZSIsIm1vZGFsVGl0bGVGb250U2l6ZSIsIm1vZGFsVGl0bGVDb2xvciIsIm1vZGFsVGl0bGVaIiwiU3R5bGVkTW9kYWxGb290ZXIiLCJtb2RhbEZvb3RlcloiLCJDbG9zZUJ1dHRvbiIsInRpdGxlQ29sb3JMVCIsIm1vZGFsQnV0dG9uWiIsIkZvb3RlckFjdGlvbldyYXBwZXIiLCJkZWZhdWx0Q2FuY2VsQnV0dG9uIiwibGluayIsImxhcmdlIiwiY2hpbGRyZW4iLCJkZWZhdWx0Q29uZmlybUJ1dHRvbiIsImN0YSIsIndpZHRoIiwiTW9kYWxGb290ZXIiLCJjYW5jZWwiLCJjb25maXJtIiwiY2FuY2VsQnV0dG9uIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvblByb3BzIiwiY29uZmlybUJ1dHRvblByb3BzIiwiTW9kYWxEaWFsb2ciLCJjbGFzc05hbWUiLCJvdmVybGF5IiwiYmFja2dyb3VuZENvbG9yIiwibW9kYWxPdmVybGF5QmdkIiwiekluZGV4IiwibW9kYWxPdmVyTGF5WiIsInN0eWxlIiwiY2xvc2UiLCJvbkNhbmNlbCIsInRpdGxlIiwiZm9vdGVyIiwib25Db25maXJtIiwiQ29tcG9uZW50IiwiU3R5bGVkTW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBTUEsSUFBTUEsbUJBQW1CLEdBQUdDLDZCQUFPQyxHQUFWLDRhQVlU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RDtBQUFjLFFBQUEsU0FBUyxFQUFDO0FBQXhCLFNBQXVDNUMsS0FBSyxDQUFDdUIsUUFBN0MsQ0FORixFQU9HdkIsS0FBSyxDQUFDNkMsTUFBTixpQkFDQyxnQ0FBQyxXQUFEO0FBQ0UsUUFBQSxNQUFNLEVBQUU3QyxLQUFLLENBQUMyQyxRQURoQjtBQUVFLFFBQUEsT0FBTyxFQUFFM0MsS0FBSyxDQUFDOEMsU0FGakI7QUFHRSxRQUFBLFlBQVksRUFBRTlDLEtBQUssQ0FBQzhCLFlBSHRCO0FBSUUsUUFBQSxhQUFhLEVBQUU5QixLQUFLLENBQUMrQjtBQUp2QixRQVJKLENBTkYsQ0FiRixDQURGO0FBdUNEOzs7RUFwRDhCZ0IsZ0I7OztpQ0FBcEJiLFcsa0JBQ1c7QUFDcEJXLEVBQUFBLE1BQU0sRUFBRSxLQURZO0FBRXBCSCxFQUFBQSxLQUFLLEVBQUUsSUFGYTtBQUdwQkksRUFBQUEsU0FBUyxFQUFFLHFCQUFZLENBQUUsQ0FITDtBQUlwQkgsRUFBQUEsUUFBUSxFQUFFLG9CQUFZLENBQUUsQ0FKSjtBQUtwQmIsRUFBQUEsWUFBWSxFQUFFVixtQkFMTTtBQU1wQlcsRUFBQUEsYUFBYSxFQUFFUCxvQkFOSztBQU9wQmpCLEVBQUFBLFFBQVEsRUFBRTtBQVBVLEM7QUFzRHhCLElBQU15QyxXQUFXLEdBQUcsa0NBQU9kLFdBQVAsQ0FBSCxrUEFHRCxVQUFBbEMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxVQUFoQjtBQUFBLENBSEosRUFPYkUsY0FBTUMsUUFQTyxtSkFZYkQsY0FBTUUsSUFaTyw0SUFBakI7ZUFzQmUwQyxXIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBSZWFjdE5vZGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnQGtlcGxlci5nbC9sb2NhbGl6YXRpb24nO1xuXG5pbXBvcnQgc3R5bGVkLCB7RmxhdHRlblNpbXBsZUludGVycG9sYXRpb259IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCc7XG5pbXBvcnQge0RlbGV0ZX0gZnJvbSAnLi9pY29ucyc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge21lZGlhfSBmcm9tICdAa2VwbGVyLmdsL3N0eWxlcyc7XG5cbmludGVyZmFjZSBNb2RhbENvbnRlbnRXcmFwcGVyUHJvcHMge1xuICBjc3NTdHlsZT86IEZsYXR0ZW5TaW1wbGVJbnRlcnBvbGF0aW9uIHwgc3RyaW5nO1xufVxuXG5jb25zdCBNb2RhbENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdjxNb2RhbENvbnRlbnRXcmFwcGVyUHJvcHM+YFxuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXgtd2lkdGg6IDcwdnc7XG4gIG1heC1oZWlnaHQ6IDg1dmg7XG4gIHBhZGRpbmc6IDI0cHggNzJweCA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogOTJweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNpdGlvbn07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvckxUfTtcblxuICAke21lZGlhLnBvcnRhYmxlYFxuICAgIHBhZGRpbmc6IDEycHggMzZweCAyNHB4O1xuICAgIG1heC13aWR0aDogODB2dztcbiAgYH1cblxuICAke21lZGlhLnBhbG1gXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgYH1cblxuICAke3Byb3BzID0+IHByb3BzLmNzc1N0eWxlIHx8ICcnfTtcbmA7XG5cbmNvbnN0IE1vZGFsQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tb2RhbENvbnRlbnRafTtcbmA7XG5cbmV4cG9ydCBjb25zdCBNb2RhbFRpdGxlID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsVGl0bGVGb250U2l6ZX07XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsVGl0bGVDb2xvcn07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tb2RhbFRpdGxlWn07XG5gO1xuXG5jb25zdCBTdHlsZWRNb2RhbEZvb3RlciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xuICAke21lZGlhLnBvcnRhYmxlYFxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICBgfTtcblxuICAke21lZGlhLnBhbG1gXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gIGB9O1xuICB6LWluZGV4OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsRm9vdGVyWn07XG5gO1xuXG5jb25zdCBDbG9zZUJ1dHRvbiA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpdGxlQ29sb3JMVH07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHotaW5kZXg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubW9kYWxCdXR0b25afTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI0cHg7XG4gIHJpZ2h0OiAyNHB4O1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5jb25zdCBGb290ZXJBY3Rpb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbmA7XG5cbmNvbnN0IGRlZmF1bHRDYW5jZWxCdXR0b24gPSB7XG4gIGxpbms6IHRydWUsXG4gIGxhcmdlOiB0cnVlLFxuICBjaGlsZHJlbjogJ21vZGFsLmJ1dHRvbi5kZWZhdWx0Q2FuY2VsJ1xufTtcblxuY29uc3QgZGVmYXVsdENvbmZpcm1CdXR0b24gPSB7XG4gIGN0YTogdHJ1ZSxcbiAgbGFyZ2U6IHRydWUsXG4gIHdpZHRoOiAnMTYwcHgnLFxuICBjaGlsZHJlbjogJ21vZGFsLmJ1dHRvbi5kZWZhdWx0Q29uZmlybSdcbn07XG5cbnR5cGUgTW9kYWxCdXR0b25Qcm9wcyA9IHtcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xuICBsYXJnZT86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgbmVnYXRpdmU/OiBib29sZWFuO1xuICBjaGlsZHJlbj86IHN0cmluZztcbn07XG5cbnR5cGUgTW9kYWxGb290ZXJQcm9wcyA9IHtcbiAgY2FuY2VsOiAoKSA9PiB2b2lkO1xuICBjb25maXJtOiAoZGF0YT86IGFueSkgPT4gdm9pZDtcbiAgY2FuY2VsQnV0dG9uPzogTW9kYWxCdXR0b25Qcm9wcztcbiAgY29uZmlybUJ1dHRvbj86IE1vZGFsQnV0dG9uUHJvcHM7XG59O1xuXG5leHBvcnQgY29uc3QgTW9kYWxGb290ZXI6IFJlYWN0LkZDPE1vZGFsRm9vdGVyUHJvcHM+ID0gKHtcbiAgY2FuY2VsLFxuICBjb25maXJtLFxuICBjYW5jZWxCdXR0b24sXG4gIGNvbmZpcm1CdXR0b25cbn0pID0+IHtcbiAgY29uc3QgY2FuY2VsQnV0dG9uUHJvcHMgPSB7Li4uZGVmYXVsdENhbmNlbEJ1dHRvbiwgLi4uY2FuY2VsQnV0dG9ufTtcbiAgY29uc3QgY29uZmlybUJ1dHRvblByb3BzID0gey4uLmRlZmF1bHRDb25maXJtQnV0dG9uLCAuLi5jb25maXJtQnV0dG9ufTtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkTW9kYWxGb290ZXIgY2xhc3NOYW1lPVwibW9kYWwtLWZvb3RlclwiPlxuICAgICAgPEZvb3RlckFjdGlvbldyYXBwZXI+XG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibW9kYWwtLWZvb3Rlci0tY2FuY2VsLWJ1dHRvblwiIHsuLi5jYW5jZWxCdXR0b25Qcm9wc30gb25DbGljaz17Y2FuY2VsfT5cbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17Y2FuY2VsQnV0dG9uUHJvcHMuY2hpbGRyZW59IC8+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1vZGFsLS1mb290ZXItLWNvbmZpcm0tYnV0dG9uXCIgey4uLmNvbmZpcm1CdXR0b25Qcm9wc30gb25DbGljaz17Y29uZmlybX0+XG4gICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e2NvbmZpcm1CdXR0b25Qcm9wcy5jaGlsZHJlbn0gLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0Zvb3RlckFjdGlvbldyYXBwZXI+XG4gICAgPC9TdHlsZWRNb2RhbEZvb3Rlcj5cbiAgKTtcbn07XG5cbmludGVyZmFjZSBNb2RhbERpYWxvZ093blByb3BzIHtcbiAgZm9vdGVyOiBib29sZWFuO1xuICBjbG9zZTogYm9vbGVhbjtcbiAgaXNPcGVuOiBib29sZWFuO1xuICB0aXRsZT86IHN0cmluZztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBvbkNvbmZpcm06ICguLi5hcmdzOiBhbnkpID0+IHZvaWQ7XG4gIG9uQ2FuY2VsOiAoLi4uYXJnczogYW55KSA9PiB2b2lkO1xuICBjb25maXJtQnV0dG9uPzogTW9kYWxCdXR0b25Qcm9wcztcbiAgY29uZmlybUJ1dHRvbkxhYmVsPzogc3RyaW5nO1xuICBjYW5jZWxCdXR0b24/OiBNb2RhbEJ1dHRvblByb3BzO1xuICBjYW5jZWxCdXR0b25MYWJlbD86IHN0cmluZztcbiAgY3NzU3R5bGU/OiBGbGF0dGVuU2ltcGxlSW50ZXJwb2xhdGlvbiB8IHN0cmluZztcbiAgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xuICB0aGVtZTogYW55O1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IHR5cGUgTW9kYWxEaWFsb2dQcm9wcyA9IE1vZGFsRGlhbG9nT3duUHJvcHMgJlxuICBPbWl0PFJlYWN0TW9kYWwuUHJvcHMsICdzdHlsZScgfCAnYXJpYUhpZGVBcHAnIHwgJ2NsYXNzTmFtZSc+O1xuXG5leHBvcnQgY2xhc3MgTW9kYWxEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQ8TW9kYWxEaWFsb2dQcm9wcz4ge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGZvb3RlcjogZmFsc2UsXG4gICAgY2xvc2U6IHRydWUsXG4gICAgb25Db25maXJtOiAoKTogdm9pZCA9PiB7fSxcbiAgICBvbkNhbmNlbDogKCk6IHZvaWQgPT4ge30sXG4gICAgY2FuY2VsQnV0dG9uOiBkZWZhdWx0Q2FuY2VsQnV0dG9uLFxuICAgIGNvbmZpcm1CdXR0b246IGRlZmF1bHRDb25maXJtQnV0dG9uLFxuICAgIGNzc1N0eWxlOiBbXVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7cHJvcHN9ID0gdGhpcztcbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsXG4gICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgYXJpYUhpZGVBcHA9e2ZhbHNlfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG92ZXJsYXk6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHByb3BzLnRoZW1lICYmIHByb3BzLnRoZW1lLm1vZGFsT3ZlcmxheUJnZCkgfHwgJ3JnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgICAgICAgICB6SW5kZXg6IChwcm9wcy50aGVtZSAmJiBwcm9wcy50aGVtZS5tb2RhbE92ZXJMYXlaKSB8fCAxMDAwLFxuICAgICAgICAgICAgLy8gaW4gY2FzZSB3ZSB3YW50IHRvIG92ZXJyaWRlIHRoZSBtb2RhbCBkaWFsb2cgc3R5bGVcbiAgICAgICAgICAgIC4uLnByb3BzLnN0eWxlXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8TW9kYWxDb250ZW50V3JhcHBlciBjbGFzc05hbWU9XCJtb2RhbC0td3JhcHBlclwiIGNzc1N0eWxlPXtwcm9wcy5jc3NTdHlsZX0+XG4gICAgICAgICAge3Byb3BzLmNsb3NlICYmIChcbiAgICAgICAgICAgIDxDbG9zZUJ1dHRvbiBjbGFzc05hbWU9XCJtb2RhbC0tY2xvc2VcIiBvbkNsaWNrPXtwcm9wcy5vbkNhbmNlbH0+XG4gICAgICAgICAgICAgIDxEZWxldGUgaGVpZ2h0PVwiMTRweFwiIC8+XG4gICAgICAgICAgICA8L0Nsb3NlQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtwcm9wcy50aXRsZSAmJiAoXG4gICAgICAgICAgICAgIDxNb2RhbFRpdGxlIGNsYXNzTmFtZT1cIm1vZGFsLS10aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtwcm9wcy50aXRsZX0gLz5cbiAgICAgICAgICAgICAgPC9Nb2RhbFRpdGxlPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxNb2RhbENvbnRlbnQgY2xhc3NOYW1lPVwibW9kYWwtLWJvZHlcIj57cHJvcHMuY2hpbGRyZW59PC9Nb2RhbENvbnRlbnQ+XG4gICAgICAgICAgICB7cHJvcHMuZm9vdGVyICYmIChcbiAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyXG4gICAgICAgICAgICAgICAgY2FuY2VsPXtwcm9wcy5vbkNhbmNlbH1cbiAgICAgICAgICAgICAgICBjb25maXJtPXtwcm9wcy5vbkNvbmZpcm19XG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uPXtwcm9wcy5jYW5jZWxCdXR0b259XG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbj17cHJvcHMuY29uZmlybUJ1dHRvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTW9kYWxDb250ZW50V3JhcHBlcj5cbiAgICAgIDwvTW9kYWw+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBTdHlsZWRNb2RhbCA9IHN0eWxlZChNb2RhbERpYWxvZylgXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50cmFuc2l0aW9ufTtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuXG4gICR7bWVkaWEucG9ydGFibGVgXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gIGB9O1xuXG4gICR7bWVkaWEucGFsbWBcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgYH07XG5cbiAgOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZWRNb2RhbDtcbiJdfQ==