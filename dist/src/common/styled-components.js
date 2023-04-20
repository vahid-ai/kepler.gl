"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckMark = exports.TruncatedTitleText = exports.StyledFilterContent = exports.MapControlButton = exports.BottomWidgetInner = exports.WidgetContainer = exports.StyledType = exports.StyledFilteredOption = exports.StyledExportSection = exports.StyledAttrbution = exports.StyledMapContainer = exports.StyledModalInputFootnote = exports.StyledModalSection = exports.StyledModalVerticalPanel = exports.StyledModalContent = exports.StyledTable = exports.SelectionButton = exports.DatasetSquare = exports.ButtonGroup = exports.StyledPanelDropdown = exports.StyledPanelHeader = exports.InlineInput = exports.TextAreaLight = exports.TextArea = exports.InputLight = exports.Input = exports.Button = exports.Tooltip = exports.SidePanelDivider = exports.SidePanelSection = exports.PanelContent = exports.PanelHeaderContent = exports.PanelHeaderTitle = exports.PanelLabelBold = exports.PanelLabelWrapper = exports.PanelLabel = exports.SBFlexboxNoMargin = exports.SBFlexboxItem = exports.SpaceBetweenFlexbox = exports.EndHorizontalFlexbox = exports.CenterVerticalFlexbox = exports.CenterFlexbox = exports.IconRoundSmall = exports.SelectTextBold = exports.SelectText = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

var _styles = require("@kepler.gl/styles");

var _classnames = _interopRequireDefault(require("classnames"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51;

var SelectText = _styledComponents["default"].span(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: 400;\n\n  i {\n    font-size: 13px;\n    margin-right: 6px;\n  }\n"])), function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.selectFontSize;
});

exports.SelectText = SelectText;
var SelectTextBold = (0, _styledComponents["default"])(SelectText)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-weight: 500;\n"])), function (props) {
  return props.theme.textColor;
});
exports.SelectTextBold = SelectTextBold;

var IconRoundSmall = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  width: 18px;\n  height: 18px;\n  border-radius: 9px;\n  background-color: ", ";\n  color: ", ";\n  align-items: center;\n  justify-content: center;\n\n  :hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n"])), function (props) {
  return props.theme.secondaryBtnBgdHover;
}, function (props) {
  return props.theme.secondaryBtnColor;
}, function (props) {
  return props.theme.secondaryBtnBgdHover;
});

exports.IconRoundSmall = IconRoundSmall;

var CenterFlexbox = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n"])));

exports.CenterFlexbox = CenterFlexbox;

var CenterVerticalFlexbox = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));

exports.CenterVerticalFlexbox = CenterVerticalFlexbox;

var EndHorizontalFlexbox = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: row;\n  align-items: end;\n"])));

exports.EndHorizontalFlexbox = EndHorizontalFlexbox;

var SpaceBetweenFlexbox = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  margin-left: -16px;\n"])));

exports.SpaceBetweenFlexbox = SpaceBetweenFlexbox;

var SBFlexboxItem = _styledComponents["default"].div(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 1;\n  margin-left: 16px;\n"])));

exports.SBFlexboxItem = SBFlexboxItem;

var SBFlexboxNoMargin = _styledComponents["default"].div(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n"])));

exports.SBFlexboxNoMargin = SBFlexboxNoMargin;

var PanelLabel = _styledComponents["default"].label.attrs({
  className: 'side-panel-panel__label'
})(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  display: inline-block;\n  font-size: 11px;\n  font-weight: 400;\n  margin-bottom: 4px;\n  text-transform: capitalize;\n"])), function (props) {
  return props.theme.labelColor;
});

exports.PanelLabel = PanelLabel;

var PanelLabelWrapper = _styledComponents["default"].div.attrs({
  className: 'side-panel-panel__label-wrapper'
})(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: self-start;\n"])));

exports.PanelLabelWrapper = PanelLabelWrapper;
var PanelLabelBold = (0, _styledComponents["default"])(PanelLabel)(_templateObject12 || (_templateObject12 = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: 500;\n"])));
exports.PanelLabelBold = PanelLabelBold;

var PanelHeaderTitle = _styledComponents["default"].span.attrs(function (props) {
  return {
    className: (0, _classnames["default"])('side-panel-panel__header__title', props.className)
  };
})(_templateObject13 || (_templateObject13 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 13px;\n  letter-spacing: 0.43px;\n  text-transform: capitalize;\n"])), function (props) {
  return props.theme.textColor;
});

exports.PanelHeaderTitle = PanelHeaderTitle;

var PanelHeaderContent = _styledComponents["default"].div(_templateObject14 || (_templateObject14 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  padding-left: 12px;\n\n  .icon {\n    color: ", ";\n    display: flex;\n    align-items: center;\n    margin-right: 12px;\n  }\n"])), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.labelColor;
});

exports.PanelHeaderContent = PanelHeaderContent;

var PanelContent = _styledComponents["default"].div.attrs(function (props) {
  return {
    className: (0, _classnames["default"])('side-panel-panel__content', props.className)
  };
})(_templateObject15 || (_templateObject15 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: 12px;\n"])), function (props) {
  return props.theme.panelContentBackground;
});

exports.PanelContent = PanelContent;

var SidePanelSection = _styledComponents["default"].div.attrs(function (props) {
  return {
    className: (0, _classnames["default"])('side-panel-section', props.className)
  };
})(_templateObject16 || (_templateObject16 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 12px;\n\n  opacity: ", ";\n  pointer-events: ", ";\n"])), function (props) {
  return props.disabled ? 0.4 : 1;
}, function (props) {
  return props.disabled ? 'none' : 'all';
});

exports.SidePanelSection = SidePanelSection;

var SidePanelDivider = _styledComponents["default"].div.attrs({
  className: 'side-panel-divider'
})(_templateObject17 || (_templateObject17 = (0, _taggedTemplateLiteral2["default"])(["\n  border-bottom: ", " solid\n    ", ";\n  margin-bottom: ", "px;\n  height: ", "px;\n"])), function (props) {
  return props.theme.sidepanelDividerBorder;
}, function (props) {
  return props.theme.panelBorderColor;
}, function (props) {
  return props.theme.sidepanelDividerMargin;
}, function (props) {
  return props.theme.sidepanelDividerHeight;
});

exports.SidePanelDivider = SidePanelDivider;
var Tooltip = (0, _styledComponents["default"])(_reactTooltip["default"])(_templateObject18 || (_templateObject18 = (0, _taggedTemplateLiteral2["default"])(["\n  &.__react_component_tooltip {\n    font-size: ", ";\n    font-weight: 400;\n    padding: 7px 18px;\n    box-shadow: ", ";\n\n    &.type-dark {\n      background-color: ", ";\n      color: ", ";\n      &.place-bottom {\n        :after {\n          border-bottom-color: ", ";\n        }\n      }\n\n      &.place-top {\n        :after {\n          border-top-color: ", ";\n        }\n      }\n\n      &.place-right {\n        :after {\n          border-right-color: ", ";\n        }\n      }\n\n      &.place-left {\n        :after {\n          border-left-color: ", ";\n        }\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.tooltipFontSize;
}, function (props) {
  return props.theme.tooltipBoxShadow;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipColor;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipBg;
}, function (props) {
  return props.theme.tooltipBg;
});
exports.Tooltip = Tooltip;

var Button = _styledComponents["default"].div.attrs(function (props) {
  return {
    className: (0, _classnames["default"])('button', props.className)
  };
})(_templateObject19 || (_templateObject19 = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-size: ", ";\n  font-weight: 500;\n  font-family: ", ";\n  justify-content: center;\n  letter-spacing: 0.3px;\n  line-height: 14px;\n  outline: 0;\n  padding: ", ";\n  text-align: center;\n  transition: ", ";\n  vertical-align: middle;\n  width: ", ";\n  opacity: ", ";\n  pointer-events: ", ";\n  border: ", ";\n  :hover,\n  :focus,\n  :active,\n  &.active {\n    background-color: ", ";\n    color: ", ";\n  }\n\n  svg {\n    margin-right: ", ";\n  }\n"])), function (props) {
  return props.negative ? props.theme.negativeBtnBgd : props.secondary ? props.theme.secondaryBtnBgd : props.link ? props.theme.linkBtnBgd : props.floating ? props.theme.floatingBtnBgd : props.cta ? props.theme.ctaBtnBgd : props.theme.primaryBtnBgd;
}, function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.negative ? props.theme.negativeBtnColor : props.secondary ? props.theme.secondaryBtnColor : props.link ? props.theme.linkBtnColor : props.floating ? props.theme.floatingBtnColor : props.cta ? props.theme.ctaBtnColor : props.theme.primaryBtnColor;
}, function (props) {
  return props.large ? props.theme.primaryBtnFontSizeLarge : props.small ? props.theme.primaryBtnFontSizeSmall : props.theme.primaryBtnFontSizeDefault;
}, function (props) {
  return props.theme.btnFontFamily;
}, function (props) {
  return props.large ? '14px 32px' : props.small ? '6px 9px' : '9px 12px';
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.width || 'auto';
}, function (props) {
  return props.disabled ? 0.4 : 1;
}, function (props) {
  return props.disabled ? 'none' : 'all';
}, function (props) {
  return props.negative ? props.theme.negativeBtnBorder : props.secondary ? props.theme.secondaryBtnBorder : props.floating ? props.theme.floatingBtnBorder : props.link ? props.theme.linkBtnBorder : props.theme.primaryBtnBorder;
}, function (props) {
  return props.negative ? props.theme.negativeBtnBgdHover : props.secondary ? props.theme.secondaryBtnBgdHover : props.link ? props.theme.linkBtnActBgdHover : props.floating ? props.theme.floatingBtnBgdHover : props.cta ? props.theme.ctaBtnBgdHover : props.theme.primaryBtnBgdHover;
}, function (props) {
  return props.negative ? props.theme.negativeBtnActColor : props.secondary ? props.theme.secondaryBtnActColor : props.link ? props.theme.linkBtnActColor : props.floating ? props.theme.floatingBtnActColor : props.cta ? props.theme.ctaBtnActColor : props.theme.primaryBtnActColor;
}, function (props) {
  return props.large ? '10px' : props.small ? '6px' : '8px';
});

exports.Button = Button;

var Input = _styledComponents["default"].input(_templateObject20 || (_templateObject20 = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"])), function (props) {
  return props.secondary ? props.theme.secondaryInput : props.theme.input;
});

exports.Input = Input;

var InputLight = _styledComponents["default"].input(_templateObject21 || (_templateObject21 = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"])), function (props) {
  return props.theme.inputLT;
});

exports.InputLight = InputLight;

var TextArea = _styledComponents["default"].textarea(_templateObject22 || (_templateObject22 = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"])), function (props) {
  return props.secondary ? props.theme.secondaryInput : props.theme.input;
});

exports.TextArea = TextArea;

var TextAreaLight = _styledComponents["default"].textarea(_templateObject23 || (_templateObject23 = (0, _taggedTemplateLiteral2["default"])(["\n  ", " height: auto;\n  white-space: pre-wrap;\n"])), function (props) {
  return props.theme.inputLT;
});

exports.TextAreaLight = TextAreaLight;
var InlineInput = (0, _styledComponents["default"])(Input)(_templateObject24 || (_templateObject24 = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n"])), function (props) {
  return props.theme.inlineInput;
});
exports.InlineInput = InlineInput;

var StyledPanelHeader = _styledComponents["default"].div(_templateObject25 || (_templateObject25 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border-left: 3px solid\n    rgb(\n      ", "\n    );\n  padding: 0 10px 0 0;\n  height: ", "px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: ", ";\n  transition: ", ";\n"])), function (props) {
  return props.active ? props.theme.panelBackgroundHover : props.theme.panelBackground;
}, function (props) {
  return props.labelRCGColorValues ? props.labelRCGColorValues.join(',') : 'transparent';
}, function (props) {
  return props.theme.panelHeaderHeight;
}, function (props) {
  return props.theme.panelHeaderBorderRadius;
}, function (props) {
  return props.theme.transition;
});

exports.StyledPanelHeader = StyledPanelHeader;

var StyledPanelDropdown = _styledComponents["default"].div(_templateObject26 || (_templateObject26 = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n  background-color: ", ";\n  overflow-y: auto;\n  box-shadow: ", ";\n  border-radius: ", ";\n  max-height: 500px;\n  position: relative;\n  z-index: 999;\n"])), function (props) {
  return props.theme.panelDropdownScrollBar;
}, function (props) {
  return props.type === 'light' ? props.theme.modalDropdownBackground : props.theme.panelBackground;
}, function (props) {
  return props.theme.panelBoxShadow;
}, function (props) {
  return props.theme.panelBorderRadius;
});

exports.StyledPanelDropdown = StyledPanelDropdown;

var ButtonGroup = _styledComponents["default"].div(_templateObject27 || (_templateObject27 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  .button {\n    border-radius: 0;\n    margin-left: 2px;\n  }\n  .button:first-child {\n    border-bottom-left-radius: ", ";\n    border-top-left-radius: ", ";\n    margin-left: 0;\n  }\n  .button:last-child {\n    border-bottom-right-radius: ", ";\n    border-top-right-radius: ", ";\n  }\n"])), function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.theme.primaryBtnRadius;
}, function (props) {
  return props.theme.primaryBtnRadius;
});

exports.ButtonGroup = ButtonGroup;

var DatasetSquare = _styledComponents["default"].div(_templateObject28 || (_templateObject28 = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  background-color: rgb(", ");\n  margin-right: 12px;\n"])), function (props) {
  return props.backgroundColor.join(',');
});

exports.DatasetSquare = DatasetSquare;

var SelectionButton = _styledComponents["default"].div(_templateObject29 || (_templateObject29 = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  border-radius: 2px;\n  border: 1px solid\n    ", ";\n  color: ", ";\n  background-color: ", ";\n\n  cursor: pointer;\n  font-weight: 500;\n  margin-right: 6px;\n  padding: 6px 16px;\n\n  :hover {\n    color: ", ";\n    border: 1px solid ", ";\n  }\n"])), function (props) {
  return props.selected ? props.theme.selectionBtnBorderActColor : props.theme.selectionBtnBorderColor;
}, function (props) {
  return props.selected ? props.theme.selectionBtnActColor : props.theme.selectionBtnColor;
}, function (props) {
  return props.selected ? props.theme.selectionBtnActBgd : props.theme.selectionBtnBgd;
}, function (props) {
  return props.theme.selectionBtnActColor;
}, function (props) {
  return props.theme.selectionBtnBorderActColor;
});

exports.SelectionButton = SelectionButton;

var StyledTable = _styledComponents["default"].table(_templateObject30 || (_templateObject30 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  border-spacing: 0;\n\n  thead {\n    tr th {\n      background: ", ";\n      color: ", ";\n      padding: 18px 12px;\n      text-align: start;\n    }\n  }\n\n  tbody {\n    tr td {\n      border-bottom: ", ";\n      padding: 12px;\n    }\n  }\n"])), function (props) {
  return props.theme.panelBackgroundLT;
}, function (props) {
  return props.theme.titleColorLT;
}, function (props) {
  return props.theme.panelBorderLT;
});

exports.StyledTable = StyledTable;

var StyledModalContent = _styledComponents["default"].div(_templateObject31 || (_templateObject31 = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  color: ", ";\n  display: flex;\n  flex-direction: row;\n  font-size: 10px;\n  padding: 24px ", ";\n  margin: 0 -", ";\n  justify-content: space-between;\n  ", ";\n"])), function (props) {
  return props.theme.panelBackgroundLT;
}, function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.theme.modalLateralPadding;
}, function (props) {
  return props.theme.modalLateralPadding;
}, _styles.media.portable(_templateObject32 || (_templateObject32 = (0, _taggedTemplateLiteral2["default"])(["\n    flex-direction: column;\n    padding: 16px ", ";\n    margin: 0 -", ";\n  "])), function (props) {
  return props.theme.modalPortableLateralPadding;
}, function (props) {
  return props.theme.modalPortableLateralPadding;
}));

exports.StyledModalContent = StyledModalContent;

var StyledModalVerticalPanel = _styledComponents["default"].div.attrs({
  className: 'modal-vertical-panel'
})(_templateObject33 || (_templateObject33 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  font-size: 12px;\n\n  .modal-section:first-child {\n    margin-top: 24px;\n    ", ";\n  }\n\n  input {\n    margin-right: 8px;\n  }\n"])), _styles.media.palm(_templateObject34 || (_templateObject34 = (0, _taggedTemplateLiteral2["default"])(["\n      margin-top: 0;\n    "]))));

exports.StyledModalVerticalPanel = StyledModalVerticalPanel;

var StyledModalSection = _styledComponents["default"].div.attrs(function (_ref) {
  var className = _ref.className;
  return {
    className: (0, _classnames["default"])('modal-section', className)
  };
})(_templateObject35 || (_templateObject35 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 32px;\n\n  .modal-section-title {\n    font-weight: 500;\n  }\n  .modal-section-subtitle {\n    color: ", ";\n  }\n\n  input {\n    margin-top: 8px;\n  }\n\n  ", ";\n  ", ";\n"])), function (props) {
  return props.theme.subtextColorLT;
}, _styles.media.portable(_templateObject36 || (_templateObject36 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 24px;\n  "]))), _styles.media.palm(_templateObject37 || (_templateObject37 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 16px;\n  "]))));

exports.StyledModalSection = StyledModalSection;

var StyledModalInputFootnote = _styledComponents["default"].div.attrs({
  className: 'modal-input__footnote'
})(_templateObject38 || (_templateObject38 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: flex-end;\n  color: ", ";\n  font-size: 10px;\n"])), function (props) {
  return props.error ? props.theme.errorColor : props.theme.subtextColorLT;
});
/**
 * Newer versions of mapbox.gl display an error message banner on top of the map by default
 * which will cause the map to display points in the wrong locations
 * This workaround will hide the error banner.
 */


exports.StyledModalInputFootnote = StyledModalInputFootnote;

var StyledMapContainer = _styledComponents["default"].div(_templateObject39 || (_templateObject39 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  height: 100%;\n  .mapboxgl-map {\n    .mapboxgl-missing-css {\n      display: none;\n    }\n    .mapboxgl-ctrl-attrib {\n      display: none;\n    }\n  }\n"])));

exports.StyledMapContainer = StyledMapContainer;

var StyledAttrbution = _styledComponents["default"].div.attrs({
  className: 'mapbox-attribution-container'
})(_templateObject40 || (_templateObject40 = (0, _taggedTemplateLiteral2["default"])(["\n  bottom: 0;\n  right: 0;\n  position: absolute;\n  display: block;\n  margin: 0 10px 6px;\n  z-index: 1;\n  .attrition-link {\n    display: flex;\n    align-items: center;\n    margin-left: 10px;\n\n    a,\n    .pipe-separator {\n      margin-right: 2px;\n    }\n\n    .pipe-separator {\n      text-decoration: none;\n      color: ", ";\n    }\n  }\n\n  .attrition-logo {\n    display: flex;\n    font-size: 10px;\n    justify-content: flex-end;\n    align-items: center;\n    color: ", ";\n\n    a.mapboxgl-ctrl-logo {\n      width: 72px;\n      margin-left: 4px;\n    }\n  }\n  a,\n  .pipe-separator {\n    font-size: 10px;\n  }\n\n  ", ";\n"])), function (props) {
  return props.theme.labelColor;
}, function (props) {
  return props.theme.labelColor;
}, _styles.media.palm(_templateObject41 || (_templateObject41 = (0, _taggedTemplateLiteral2["default"])(["\n    .attrition-logo a {\n      width: 60px;\n    }\n\n    .attrition-link {\n      line-height: 1em;\n    }\n  "]))));

exports.StyledAttrbution = StyledAttrbution;

var StyledExportSection = _styledComponents["default"].div(_templateObject42 || (_templateObject42 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: row;\n  margin: 35px 0;\n  width: 100%;\n  color: ", ";\n  font-size: 12px;\n  opacity: ", ";\n  pointer-events: ", ";\n\n  .description {\n    width: 185px;\n    .title {\n      font-weight: 500;\n      font-family: ", ";\n    }\n    .subtitle {\n      color: ", ";\n      font-size: 11px;\n    }\n  }\n  .warning {\n    color: ", ";\n    font-weight: 500;\n  }\n  .description.full {\n    width: 100%;\n  }\n  .selection {\n    display: flex;\n    flex-wrap: wrap;\n    flex: 1;\n    padding-left: 50px;\n\n    select {\n      background-color: white;\n      border-radius: 1px;\n      display: inline-block;\n      font: inherit;\n      line-height: 1.5em;\n      padding: 0.5em 3.5em 0.5em 1em;\n      margin: 0;\n      box-sizing: border-box;\n      appearance: none;\n      width: 250px;\n      height: 36px;\n\n      background-image: linear-gradient(45deg, transparent 50%, gray 50%),\n        linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);\n      background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px),\n        calc(100% - 2.5em) 4.5em;\n      background-size: 5px 5px, 5px 5px, 1px 1.5em;\n      background-repeat: no-repeat;\n    }\n\n    select:focus {\n      background-image: linear-gradient(45deg, green 50%, transparent 50%),\n        linear-gradient(135deg, transparent 50%, green 50%), linear-gradient(to right, #ccc, #ccc);\n      background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 2.5em) 4.5em;\n      background-size: 5px 5px, 5px 5px, 1px 1.5em;\n      background-repeat: no-repeat;\n      border-color: green;\n      outline: 0;\n    }\n  }\n"])), function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.disabled ? 0.3 : 1;
}, function (props) {
  return props.disabled ? 'none' : 'all';
}, function (props) {
  var _props$theme$fontFami;

  return (_props$theme$fontFami = props.theme.fontFamilyMedium) !== null && _props$theme$fontFami !== void 0 ? _props$theme$fontFami : props.theme.fontFamily;
}, function (props) {
  return props.theme.subtextColorLT;
}, function (props) {
  return props.theme.errorColor;
});

exports.StyledExportSection = StyledExportSection;
var StyledFilteredOption = (0, _styledComponents["default"])(SelectionButton)(_templateObject43 || (_templateObject43 = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 4px;\n  padding: 8px 12px;\n  width: 140px;\n\n  .filter-option-title {\n    color: ", ";\n    font-size: 12px;\n    font-weight: 500;\n  }\n  .filter-option-subtitle {\n    color: ", ";\n    font-size: 11px;\n  }\n"])), function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.theme.subtextColorLT;
});
exports.StyledFilteredOption = StyledFilteredOption;
var StyledType = (0, _styledComponents["default"])(SelectionButton)(_templateObject44 || (_templateObject44 = (0, _taggedTemplateLiteral2["default"])(["\n  height: 100px;\n  margin: 4px;\n  padding: 6px 10px;\n  width: 100px;\n"])));
exports.StyledType = StyledType;

var WidgetContainer = _styledComponents["default"].div(_templateObject45 || (_templateObject45 = (0, _taggedTemplateLiteral2["default"])(["\n  z-index: 1;\n"])));

exports.WidgetContainer = WidgetContainer;

var BottomWidgetInner = _styledComponents["default"].div(_templateObject46 || (_templateObject46 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: ", ";\n  position: relative;\n  margin-top: ", "px;\n\n  ", "\n"])), function (props) {
  return props.theme.bottomWidgetBgd;
}, function (props) {
  return "".concat(props.theme.bottomInnerPdVert, "px ").concat(props.theme.bottomInnerPdSide, "px");
}, function (props) {
  return props.theme.bottomPanelGap;
}, _styles.media.portable(_templateObject47 || (_templateObject47 = (0, _taggedTemplateLiteral2["default"])(["\n    border-top: 1px solid ", ";\n    border-left: 1px solid ", ";\n    padding: 12px 12px;\n    margin-top: 0;\n  "])), function (props) {
  return props.theme.panelBorderColor;
}, function (props) {
  return props.theme.panelBorderColor;
}));

exports.BottomWidgetInner = BottomWidgetInner;
var MapControlButton = (0, _styledComponents["default"])(Button).attrs(function (props) {
  return {
    className: (0, _classnames["default"])('map-control-button', props.className)
  };
})(_templateObject48 || (_templateObject48 = (0, _taggedTemplateLiteral2["default"])(["\n  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.16);\n  height: 32px;\n  width: 32px;\n  padding: 0;\n  border-radius: 0;\n  background-color: ", ";\n  color: ", ";\n  border: ", ";\n\n  :hover,\n  :focus,\n  :active,\n  &.active {\n    background-color: ", ";\n    color: ", ";\n    border: ", ";\n  }\n  svg {\n    margin-right: 0;\n  }\n"])), function (props) {
  return props.active ? props.theme.floatingBtnBgdHover : props.theme.floatingBtnBgd;
}, function (props) {
  return props.active ? props.theme.floatingBtnActColor : props.theme.floatingBtnColor;
}, function (props) {
  return props.active ? props.theme.floatingBtnBorderHover : props.theme.floatingBtnBorder;
}, function (props) {
  return props.theme.floatingBtnBgdHover;
}, function (props) {
  return props.theme.floatingBtnActColor;
}, function (props) {
  return props.theme.floatingBtnBorderHover;
});
exports.MapControlButton = MapControlButton;

var StyledFilterContent = _styledComponents["default"].div(_templateObject49 || (_templateObject49 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  padding: 12px;\n"])), function (props) {
  return props.theme.panelContentBackground;
});

exports.StyledFilterContent = StyledFilterContent;

var TruncatedTitleText = _styledComponents["default"].div(_templateObject50 || (_templateObject50 = (0, _taggedTemplateLiteral2["default"])(["\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n"])));

exports.TruncatedTitleText = TruncatedTitleText;

var CheckMark = _styledComponents["default"].span.attrs({
  className: 'checkbox-inner'
})(_templateObject51 || (_templateObject51 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-top-left-radius: 2px;\n\n  :after {\n    position: absolute;\n    display: table;\n    border: 1px solid #fff;\n    border-top: 0;\n    border-left: 0;\n    transform: rotate(45deg) scale(1) translate(-50%, -50%);\n    opacity: 1;\n    content: ' ';\n    top: 40%;\n    left: 30%;\n    width: 3.2px;\n    height: 6.22px;\n  }\n"])), function (props) {
  return props.theme.selectionBtnBorderActColor;
});

exports.CheckMark = CheckMark;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMudHN4Il0sIm5hbWVzIjpbIlNlbGVjdFRleHQiLCJzdHlsZWQiLCJzcGFuIiwicHJvcHMiLCJ0aGVtZSIsImxhYmVsQ29sb3IiLCJzZWxlY3RGb250U2l6ZSIsIlNlbGVjdFRleHRCb2xkIiwidGV4dENvbG9yIiwiSWNvblJvdW5kU21hbGwiLCJkaXYiLCJzZWNvbmRhcnlCdG5CZ2RIb3ZlciIsInNlY29uZGFyeUJ0bkNvbG9yIiwiQ2VudGVyRmxleGJveCIsIkNlbnRlclZlcnRpY2FsRmxleGJveCIsIkVuZEhvcml6b250YWxGbGV4Ym94IiwiU3BhY2VCZXR3ZWVuRmxleGJveCIsIlNCRmxleGJveEl0ZW0iLCJTQkZsZXhib3hOb01hcmdpbiIsIlBhbmVsTGFiZWwiLCJsYWJlbCIsImF0dHJzIiwiY2xhc3NOYW1lIiwiUGFuZWxMYWJlbFdyYXBwZXIiLCJQYW5lbExhYmVsQm9sZCIsIlBhbmVsSGVhZGVyVGl0bGUiLCJQYW5lbEhlYWRlckNvbnRlbnQiLCJQYW5lbENvbnRlbnQiLCJwYW5lbENvbnRlbnRCYWNrZ3JvdW5kIiwiU2lkZVBhbmVsU2VjdGlvbiIsImRpc2FibGVkIiwiU2lkZVBhbmVsRGl2aWRlciIsInNpZGVwYW5lbERpdmlkZXJCb3JkZXIiLCJwYW5lbEJvcmRlckNvbG9yIiwic2lkZXBhbmVsRGl2aWRlck1hcmdpbiIsInNpZGVwYW5lbERpdmlkZXJIZWlnaHQiLCJUb29sdGlwIiwiUmVhY3RUb29sdGlwIiwidG9vbHRpcEZvbnRTaXplIiwidG9vbHRpcEJveFNoYWRvdyIsInRvb2x0aXBCZyIsInRvb2x0aXBDb2xvciIsIkJ1dHRvbiIsIm5lZ2F0aXZlIiwibmVnYXRpdmVCdG5CZ2QiLCJzZWNvbmRhcnkiLCJzZWNvbmRhcnlCdG5CZ2QiLCJsaW5rIiwibGlua0J0bkJnZCIsImZsb2F0aW5nIiwiZmxvYXRpbmdCdG5CZ2QiLCJjdGEiLCJjdGFCdG5CZ2QiLCJwcmltYXJ5QnRuQmdkIiwicHJpbWFyeUJ0blJhZGl1cyIsIm5lZ2F0aXZlQnRuQ29sb3IiLCJsaW5rQnRuQ29sb3IiLCJmbG9hdGluZ0J0bkNvbG9yIiwiY3RhQnRuQ29sb3IiLCJwcmltYXJ5QnRuQ29sb3IiLCJsYXJnZSIsInByaW1hcnlCdG5Gb250U2l6ZUxhcmdlIiwic21hbGwiLCJwcmltYXJ5QnRuRm9udFNpemVTbWFsbCIsInByaW1hcnlCdG5Gb250U2l6ZURlZmF1bHQiLCJidG5Gb250RmFtaWx5IiwidHJhbnNpdGlvbiIsIndpZHRoIiwibmVnYXRpdmVCdG5Cb3JkZXIiLCJzZWNvbmRhcnlCdG5Cb3JkZXIiLCJmbG9hdGluZ0J0bkJvcmRlciIsImxpbmtCdG5Cb3JkZXIiLCJwcmltYXJ5QnRuQm9yZGVyIiwibmVnYXRpdmVCdG5CZ2RIb3ZlciIsImxpbmtCdG5BY3RCZ2RIb3ZlciIsImZsb2F0aW5nQnRuQmdkSG92ZXIiLCJjdGFCdG5CZ2RIb3ZlciIsInByaW1hcnlCdG5CZ2RIb3ZlciIsIm5lZ2F0aXZlQnRuQWN0Q29sb3IiLCJzZWNvbmRhcnlCdG5BY3RDb2xvciIsImxpbmtCdG5BY3RDb2xvciIsImZsb2F0aW5nQnRuQWN0Q29sb3IiLCJjdGFCdG5BY3RDb2xvciIsInByaW1hcnlCdG5BY3RDb2xvciIsIklucHV0IiwiaW5wdXQiLCJzZWNvbmRhcnlJbnB1dCIsIklucHV0TGlnaHQiLCJpbnB1dExUIiwiVGV4dEFyZWEiLCJ0ZXh0YXJlYSIsIlRleHRBcmVhTGlnaHQiLCJJbmxpbmVJbnB1dCIsImlubGluZUlucHV0IiwiU3R5bGVkUGFuZWxIZWFkZXIiLCJhY3RpdmUiLCJwYW5lbEJhY2tncm91bmRIb3ZlciIsInBhbmVsQmFja2dyb3VuZCIsImxhYmVsUkNHQ29sb3JWYWx1ZXMiLCJqb2luIiwicGFuZWxIZWFkZXJIZWlnaHQiLCJwYW5lbEhlYWRlckJvcmRlclJhZGl1cyIsIlN0eWxlZFBhbmVsRHJvcGRvd24iLCJwYW5lbERyb3Bkb3duU2Nyb2xsQmFyIiwidHlwZSIsIm1vZGFsRHJvcGRvd25CYWNrZ3JvdW5kIiwicGFuZWxCb3hTaGFkb3ciLCJwYW5lbEJvcmRlclJhZGl1cyIsIkJ1dHRvbkdyb3VwIiwiRGF0YXNldFNxdWFyZSIsImJhY2tncm91bmRDb2xvciIsIlNlbGVjdGlvbkJ1dHRvbiIsInNlbGVjdGVkIiwic2VsZWN0aW9uQnRuQm9yZGVyQWN0Q29sb3IiLCJzZWxlY3Rpb25CdG5Cb3JkZXJDb2xvciIsInNlbGVjdGlvbkJ0bkFjdENvbG9yIiwic2VsZWN0aW9uQnRuQ29sb3IiLCJzZWxlY3Rpb25CdG5BY3RCZ2QiLCJzZWxlY3Rpb25CdG5CZ2QiLCJTdHlsZWRUYWJsZSIsInRhYmxlIiwicGFuZWxCYWNrZ3JvdW5kTFQiLCJ0aXRsZUNvbG9yTFQiLCJwYW5lbEJvcmRlckxUIiwiU3R5bGVkTW9kYWxDb250ZW50IiwidGV4dENvbG9yTFQiLCJtb2RhbExhdGVyYWxQYWRkaW5nIiwibWVkaWEiLCJwb3J0YWJsZSIsIm1vZGFsUG9ydGFibGVMYXRlcmFsUGFkZGluZyIsIlN0eWxlZE1vZGFsVmVydGljYWxQYW5lbCIsInBhbG0iLCJTdHlsZWRNb2RhbFNlY3Rpb24iLCJzdWJ0ZXh0Q29sb3JMVCIsIlN0eWxlZE1vZGFsSW5wdXRGb290bm90ZSIsImVycm9yIiwiZXJyb3JDb2xvciIsIlN0eWxlZE1hcENvbnRhaW5lciIsIlN0eWxlZEF0dHJidXRpb24iLCJTdHlsZWRFeHBvcnRTZWN0aW9uIiwiZm9udEZhbWlseU1lZGl1bSIsImZvbnRGYW1pbHkiLCJTdHlsZWRGaWx0ZXJlZE9wdGlvbiIsIlN0eWxlZFR5cGUiLCJXaWRnZXRDb250YWluZXIiLCJCb3R0b21XaWRnZXRJbm5lciIsImJvdHRvbVdpZGdldEJnZCIsImJvdHRvbUlubmVyUGRWZXJ0IiwiYm90dG9tSW5uZXJQZFNpZGUiLCJib3R0b21QYW5lbEdhcCIsIk1hcENvbnRyb2xCdXR0b24iLCJmbG9hdGluZ0J0bkJvcmRlckhvdmVyIiwiU3R5bGVkRmlsdGVyQ29udGVudCIsIlRydW5jYXRlZFRp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QSxVQUFBbkIsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZNkcsMEJBQWhCO0FBQUEsQ0FITCxDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gJ3JlYWN0LXRvb2x0aXAnO1xuaW1wb3J0IHttZWRpYX0gZnJvbSAnQGtlcGxlci5nbC9zdHlsZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge1JHQkNvbG9yfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IFNlbGVjdFRleHQgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWxlY3RGb250U2l6ZX07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgaSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2VsZWN0VGV4dEJvbGQgPSBzdHlsZWQoU2VsZWN0VGV4dClgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5gO1xuXG5leHBvcnQgY29uc3QgSWNvblJvdW5kU21hbGwgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQmdkSG92ZXJ9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlCdG5Db2xvcn07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQmdkSG92ZXJ9O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ2VudGVyRmxleGJveCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgQ2VudGVyVmVydGljYWxGbGV4Ym94ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBFbmRIb3Jpem9udGFsRmxleGJveCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG5gO1xuXG5leHBvcnQgY29uc3QgU3BhY2VCZXR3ZWVuRmxleGJveCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFNCRmxleGJveEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFNCRmxleGJveE5vTWFyZ2luID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuZXhwb3J0IGNvbnN0IFBhbmVsTGFiZWwgPSBzdHlsZWQubGFiZWwuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsLXBhbmVsX19sYWJlbCdcbn0pYFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5gO1xuXG5leHBvcnQgY29uc3QgUGFuZWxMYWJlbFdyYXBwZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc2lkZS1wYW5lbC1wYW5lbF9fbGFiZWwtd3JhcHBlcidcbn0pYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogc2VsZi1zdGFydDtcbmA7XG5cbmV4cG9ydCBjb25zdCBQYW5lbExhYmVsQm9sZCA9IHN0eWxlZChQYW5lbExhYmVsKWBcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBQYW5lbEhlYWRlclRpdGxlID0gc3R5bGVkLnNwYW4uYXR0cnMocHJvcHMgPT4gKHtcbiAgY2xhc3NOYW1lOiBjbGFzc25hbWVzKCdzaWRlLXBhbmVsLXBhbmVsX19oZWFkZXJfX3RpdGxlJywgcHJvcHMuY2xhc3NOYW1lKVxufSkpYFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjQzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuYDtcblxuZXhwb3J0IGNvbnN0IFBhbmVsSGVhZGVyQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIHBhZGRpbmctbGVmdDogMTJweDtcblxuICAuaWNvbiB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFBhbmVsQ29udGVudCA9IHN0eWxlZC5kaXYuYXR0cnMocHJvcHMgPT4gKHtcbiAgY2xhc3NOYW1lOiBjbGFzc25hbWVzKCdzaWRlLXBhbmVsLXBhbmVsX19jb250ZW50JywgcHJvcHMuY2xhc3NOYW1lKVxufSkpYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQ29udGVudEJhY2tncm91bmR9O1xuICBwYWRkaW5nOiAxMnB4O1xuYDtcblxuaW50ZXJmYWNlIFNpZGVQYW5lbFNlY3Rpb25Qcm9wcyB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFNpZGVQYW5lbFNlY3Rpb24gPSBzdHlsZWQuZGl2LmF0dHJzKHByb3BzID0+ICh7XG4gIGNsYXNzTmFtZTogY2xhc3NuYW1lcygnc2lkZS1wYW5lbC1zZWN0aW9uJywgcHJvcHMuY2xhc3NOYW1lKVxufSkpPFNpZGVQYW5lbFNlY3Rpb25Qcm9wcz5gXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgb3BhY2l0eTogJHtwcm9wcyA9PiAocHJvcHMuZGlzYWJsZWQgPyAwLjQgOiAxKX07XG4gIHBvaW50ZXItZXZlbnRzOiAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/ICdub25lJyA6ICdhbGwnKX07XG5gO1xuXG5leHBvcnQgY29uc3QgU2lkZVBhbmVsRGl2aWRlciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaWRlLXBhbmVsLWRpdmlkZXInXG59KWBcbiAgYm9yZGVyLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlcGFuZWxEaXZpZGVyQm9yZGVyfSBzb2xpZFxuICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCb3JkZXJDb2xvcn07XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZXBhbmVsRGl2aWRlck1hcmdpbn1weDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVwYW5lbERpdmlkZXJIZWlnaHR9cHg7XG5gO1xuXG5leHBvcnQgY29uc3QgVG9vbHRpcCA9IHN0eWxlZChSZWFjdFRvb2x0aXApYFxuICAmLl9fcmVhY3RfY29tcG9uZW50X3Rvb2x0aXAge1xuICAgIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50b29sdGlwRm9udFNpemV9O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgcGFkZGluZzogN3B4IDE4cHg7XG4gICAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50b29sdGlwQm94U2hhZG93fTtcblxuICAgICYudHlwZS1kYXJrIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudG9vbHRpcEJnfTtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBDb2xvcn07XG4gICAgICAmLnBsYWNlLWJvdHRvbSB7XG4gICAgICAgIDphZnRlciB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50b29sdGlwQmd9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYucGxhY2UtdG9wIHtcbiAgICAgICAgOmFmdGVyIHtcbiAgICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBCZ307XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5wbGFjZS1yaWdodCB7XG4gICAgICAgIDphZnRlciB7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRvb2x0aXBCZ307XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5wbGFjZS1sZWZ0IHtcbiAgICAgICAgOmFmdGVyIHtcbiAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50b29sdGlwQmd9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvblByb3BzIHtcbiAgbmVnYXRpdmU/OiBib29sZWFuO1xuICBzZWNvbmRhcnk/OiBib29sZWFuO1xuICBsaW5rPzogYm9vbGVhbjtcbiAgZmxvYXRpbmc/OiBib29sZWFuO1xuICBjdGE/OiBib29sZWFuO1xuICBsYXJnZT86IGJvb2xlYW47XG4gIHNtYWxsPzogYm9vbGVhbjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICB3aWR0aD86IHN0cmluZztcbiAgaW5hY3RpdmU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmRpdi5hdHRycyhwcm9wcyA9PiAoe1xuICBjbGFzc05hbWU6IGNsYXNzbmFtZXMoJ2J1dHRvbicsIHByb3BzLmNsYXNzTmFtZSlcbn0pKTxCdXR0b25Qcm9wcz5gXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5uZWdhdGl2ZVxuICAgICAgPyBwcm9wcy50aGVtZS5uZWdhdGl2ZUJ0bkJnZFxuICAgICAgOiBwcm9wcy5zZWNvbmRhcnlcbiAgICAgID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQmdkXG4gICAgICA6IHByb3BzLmxpbmtcbiAgICAgID8gcHJvcHMudGhlbWUubGlua0J0bkJnZFxuICAgICAgOiBwcm9wcy5mbG9hdGluZ1xuICAgICAgPyBwcm9wcy50aGVtZS5mbG9hdGluZ0J0bkJnZFxuICAgICAgOiBwcm9wcy5jdGFcbiAgICAgID8gcHJvcHMudGhlbWUuY3RhQnRuQmdkXG4gICAgICA6IHByb3BzLnRoZW1lLnByaW1hcnlCdG5CZ2R9O1xuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5SYWRpdXN9O1xuICBjb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLm5lZ2F0aXZlXG4gICAgICA/IHByb3BzLnRoZW1lLm5lZ2F0aXZlQnRuQ29sb3JcbiAgICAgIDogcHJvcHMuc2Vjb25kYXJ5XG4gICAgICA/IHByb3BzLnRoZW1lLnNlY29uZGFyeUJ0bkNvbG9yXG4gICAgICA6IHByb3BzLmxpbmtcbiAgICAgID8gcHJvcHMudGhlbWUubGlua0J0bkNvbG9yXG4gICAgICA6IHByb3BzLmZsb2F0aW5nXG4gICAgICA/IHByb3BzLnRoZW1lLmZsb2F0aW5nQnRuQ29sb3JcbiAgICAgIDogcHJvcHMuY3RhXG4gICAgICA/IHByb3BzLnRoZW1lLmN0YUJ0bkNvbG9yXG4gICAgICA6IHByb3BzLnRoZW1lLnByaW1hcnlCdG5Db2xvcn07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PlxuICAgIHByb3BzLmxhcmdlXG4gICAgICA/IHByb3BzLnRoZW1lLnByaW1hcnlCdG5Gb250U2l6ZUxhcmdlXG4gICAgICA6IHByb3BzLnNtYWxsXG4gICAgICA/IHByb3BzLnRoZW1lLnByaW1hcnlCdG5Gb250U2l6ZVNtYWxsXG4gICAgICA6IHByb3BzLnRoZW1lLnByaW1hcnlCdG5Gb250U2l6ZURlZmF1bHR9O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5idG5Gb250RmFtaWx5fTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6ICR7cHJvcHMgPT4gKHByb3BzLmxhcmdlID8gJzE0cHggMzJweCcgOiBwcm9wcy5zbWFsbCA/ICc2cHggOXB4JyA6ICc5cHggMTJweCcpfTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRyYW5zaXRpb259O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aCB8fCAnYXV0byd9O1xuICBvcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/IDAuNCA6IDEpfTtcbiAgcG9pbnRlci1ldmVudHM6ICR7cHJvcHMgPT4gKHByb3BzLmRpc2FibGVkID8gJ25vbmUnIDogJ2FsbCcpfTtcbiAgYm9yZGVyOiAke3Byb3BzID0+XG4gICAgcHJvcHMubmVnYXRpdmVcbiAgICAgID8gcHJvcHMudGhlbWUubmVnYXRpdmVCdG5Cb3JkZXJcbiAgICAgIDogcHJvcHMuc2Vjb25kYXJ5XG4gICAgICA/IHByb3BzLnRoZW1lLnNlY29uZGFyeUJ0bkJvcmRlclxuICAgICAgOiBwcm9wcy5mbG9hdGluZ1xuICAgICAgPyBwcm9wcy50aGVtZS5mbG9hdGluZ0J0bkJvcmRlclxuICAgICAgOiBwcm9wcy5saW5rXG4gICAgICA/IHByb3BzLnRoZW1lLmxpbmtCdG5Cb3JkZXJcbiAgICAgIDogcHJvcHMudGhlbWUucHJpbWFyeUJ0bkJvcmRlcn07XG4gIDpob3ZlcixcbiAgOmZvY3VzLFxuICA6YWN0aXZlLFxuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PlxuICAgICAgcHJvcHMubmVnYXRpdmVcbiAgICAgICAgPyBwcm9wcy50aGVtZS5uZWdhdGl2ZUJ0bkJnZEhvdmVyXG4gICAgICAgIDogcHJvcHMuc2Vjb25kYXJ5XG4gICAgICAgID8gcHJvcHMudGhlbWUuc2Vjb25kYXJ5QnRuQmdkSG92ZXJcbiAgICAgICAgOiBwcm9wcy5saW5rXG4gICAgICAgID8gcHJvcHMudGhlbWUubGlua0J0bkFjdEJnZEhvdmVyXG4gICAgICAgIDogcHJvcHMuZmxvYXRpbmdcbiAgICAgICAgPyBwcm9wcy50aGVtZS5mbG9hdGluZ0J0bkJnZEhvdmVyXG4gICAgICAgIDogcHJvcHMuY3RhXG4gICAgICAgID8gcHJvcHMudGhlbWUuY3RhQnRuQmdkSG92ZXJcbiAgICAgICAgOiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQmdkSG92ZXJ9O1xuICAgIGNvbG9yOiAke3Byb3BzID0+XG4gICAgICBwcm9wcy5uZWdhdGl2ZVxuICAgICAgICA/IHByb3BzLnRoZW1lLm5lZ2F0aXZlQnRuQWN0Q29sb3JcbiAgICAgICAgOiBwcm9wcy5zZWNvbmRhcnlcbiAgICAgICAgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlCdG5BY3RDb2xvclxuICAgICAgICA6IHByb3BzLmxpbmtcbiAgICAgICAgPyBwcm9wcy50aGVtZS5saW5rQnRuQWN0Q29sb3JcbiAgICAgICAgOiBwcm9wcy5mbG9hdGluZ1xuICAgICAgICA/IHByb3BzLnRoZW1lLmZsb2F0aW5nQnRuQWN0Q29sb3JcbiAgICAgICAgOiBwcm9wcy5jdGFcbiAgICAgICAgPyBwcm9wcy50aGVtZS5jdGFCdG5BY3RDb2xvclxuICAgICAgICA6IHByb3BzLnRoZW1lLnByaW1hcnlCdG5BY3RDb2xvcn07XG4gIH1cblxuICBzdmcge1xuICAgIG1hcmdpbi1yaWdodDogJHtwcm9wcyA9PiAocHJvcHMubGFyZ2UgPyAnMTBweCcgOiBwcm9wcy5zbWFsbCA/ICc2cHgnIDogJzhweCcpfTtcbiAgfVxuYDtcblxuaW50ZXJmYWNlIElucHV0UHJvcHMge1xuICBzZWNvbmRhcnk/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXQ8SW5wdXRQcm9wcz5gXG4gICR7cHJvcHMgPT4gKHByb3BzLnNlY29uZGFyeSA/IHByb3BzLnRoZW1lLnNlY29uZGFyeUlucHV0IDogcHJvcHMudGhlbWUuaW5wdXQpfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBJbnB1dExpZ2h0ID0gc3R5bGVkLmlucHV0YFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0TFR9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFRleHRBcmVhID0gc3R5bGVkLnRleHRhcmVhPElucHV0UHJvcHM+YFxuICAke3Byb3BzID0+IChwcm9wcy5zZWNvbmRhcnkgPyBwcm9wcy50aGVtZS5zZWNvbmRhcnlJbnB1dCA6IHByb3BzLnRoZW1lLmlucHV0KX07XG5gO1xuZXhwb3J0IGNvbnN0IFRleHRBcmVhTGlnaHQgPSBzdHlsZWQudGV4dGFyZWFgXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaW5wdXRMVH0gaGVpZ2h0OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG5gO1xuXG5leHBvcnQgY29uc3QgSW5saW5lSW5wdXQgPSBzdHlsZWQoSW5wdXQpYFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlubGluZUlucHV0fTtcbmA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVkUGFuZWxIZWFkZXJQcm9wcyB7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG4gIGxhYmVsUkNHQ29sb3JWYWx1ZXM/OiBSR0JDb2xvciB8IG51bGw7XG4gIHdhcm5pbmc/OiBib29sZWFuO1xuICBpc1ZhbGlkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlZFBhbmVsSGVhZGVyID0gc3R5bGVkLmRpdjxTdHlsZWRQYW5lbEhlYWRlclByb3BzPmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyIDogcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kfTtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZFxuICAgIHJnYihcbiAgICAgICR7cHJvcHMgPT4gKHByb3BzLmxhYmVsUkNHQ29sb3JWYWx1ZXMgPyBwcm9wcy5sYWJlbFJDR0NvbG9yVmFsdWVzLmpvaW4oJywnKSA6ICd0cmFuc3BhcmVudCcpfVxuICAgICk7XG4gIHBhZGRpbmc6IDAgMTBweCAwIDA7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEhlYWRlckhlaWdodH1weDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsSGVhZGVyQm9yZGVyUmFkaXVzfTtcbiAgdHJhbnNpdGlvbjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50cmFuc2l0aW9ufTtcbmA7XG5cbmludGVyZmFjZSBTdHlsZWRQYW5lbERyb3Bkb3duUHJvcHMge1xuICB0eXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgU3R5bGVkUGFuZWxEcm9wZG93biA9IHN0eWxlZC5kaXY8U3R5bGVkUGFuZWxEcm9wZG93blByb3BzPmBcbiAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbERyb3Bkb3duU2Nyb2xsQmFyfVxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgcHJvcHMudHlwZSA9PT0gJ2xpZ2h0JyA/IHByb3BzLnRoZW1lLm1vZGFsRHJvcGRvd25CYWNrZ3JvdW5kIDogcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kfTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJveFNoYWRvd307XG4gIGJvcmRlci1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCb3JkZXJSYWRpdXN9O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTk7XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uR3JvdXAgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICAuYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gIH1cbiAgLmJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuUmFkaXVzfTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlCdG5SYWRpdXN9O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG4gIC5idXR0b246bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeUJ0blJhZGl1c307XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeUJ0blJhZGl1c307XG4gIH1cbmA7XG5cbmludGVyZmFjZSBEYXRhc2V0U3F1YXJlUHJvcHMge1xuICBiYWNrZ3JvdW5kQ29sb3I6IFJHQkNvbG9yO1xufVxuXG5leHBvcnQgY29uc3QgRGF0YXNldFNxdWFyZSA9IHN0eWxlZC5kaXY8RGF0YXNldFNxdWFyZVByb3BzPmBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoJHtwcm9wcyA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3Iuam9pbignLCcpfSk7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbmA7XG5cbmludGVyZmFjZSBTZWxlY3Rpb25CdXR0b25Qcm9wcyB7XG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFNlbGVjdGlvbkJ1dHRvbiA9IHN0eWxlZC5kaXY8U2VsZWN0aW9uQnV0dG9uUHJvcHM+YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiAxcHggc29saWRcbiAgICAke3Byb3BzID0+XG4gICAgICBwcm9wcy5zZWxlY3RlZFxuICAgICAgICA/IHByb3BzLnRoZW1lLnNlbGVjdGlvbkJ0bkJvcmRlckFjdENvbG9yXG4gICAgICAgIDogcHJvcHMudGhlbWUuc2VsZWN0aW9uQnRuQm9yZGVyQ29sb3J9O1xuICBjb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLnNlbGVjdGVkID8gcHJvcHMudGhlbWUuc2VsZWN0aW9uQnRuQWN0Q29sb3IgOiBwcm9wcy50aGVtZS5zZWxlY3Rpb25CdG5Db2xvcn07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5zZWxlY3RlZCA/IHByb3BzLnRoZW1lLnNlbGVjdGlvbkJ0bkFjdEJnZCA6IHByb3BzLnRoZW1lLnNlbGVjdGlvbkJ0bkJnZH07XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgcGFkZGluZzogNnB4IDE2cHg7XG5cbiAgOmhvdmVyIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWxlY3Rpb25CdG5BY3RDb2xvcn07XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWxlY3Rpb25CdG5Cb3JkZXJBY3RDb2xvcn07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRUYWJsZSA9IHN0eWxlZC50YWJsZWBcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xuXG4gIHRoZWFkIHtcbiAgICB0ciB0aCB7XG4gICAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZExUfTtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpdGxlQ29sb3JMVH07XG4gICAgICBwYWRkaW5nOiAxOHB4IDEycHg7XG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICB9XG4gIH1cblxuICB0Ym9keSB7XG4gICAgdHIgdGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJvcmRlckxUfTtcbiAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkTW9kYWxDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmRMVH07XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAyNHB4ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubW9kYWxMYXRlcmFsUGFkZGluZ307XG4gIG1hcmdpbjogMCAtJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tb2RhbExhdGVyYWxQYWRkaW5nfTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAke21lZGlhLnBvcnRhYmxlYFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMTZweCAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsUG9ydGFibGVMYXRlcmFsUGFkZGluZ307XG4gICAgbWFyZ2luOiAwIC0ke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsUG9ydGFibGVMYXRlcmFsUGFkZGluZ307XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZE1vZGFsVmVydGljYWxQYW5lbCA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdtb2RhbC12ZXJ0aWNhbC1wYW5lbCdcbn0pYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuXG4gIC5tb2RhbC1zZWN0aW9uOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICR7bWVkaWEucGFsbWBcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgYH07XG4gIH1cblxuICBpbnB1dCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRNb2RhbFNlY3Rpb24gPSBzdHlsZWQuZGl2LmF0dHJzKCh7Y2xhc3NOYW1lfSkgPT4gKHtcbiAgY2xhc3NOYW1lOiBjbGFzc25hbWVzKCdtb2RhbC1zZWN0aW9uJywgY2xhc3NOYW1lKVxufSkpYFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG4gIC5tb2RhbC1zZWN0aW9uLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIC5tb2RhbC1zZWN0aW9uLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3JMVH07XG4gIH1cblxuICBpbnB1dCB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG5cbiAgJHttZWRpYS5wb3J0YWJsZWBcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBgfTtcbiAgJHttZWRpYS5wYWxtYFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGB9O1xuYDtcblxuaW50ZXJmYWNlIFN0eWxlZE1vZGFsSW5wdXRGb290bm90ZVByb3BzIHtcbiAgZXJyb3I/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgU3R5bGVkTW9kYWxJbnB1dEZvb3Rub3RlID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ21vZGFsLWlucHV0X19mb290bm90ZSdcbn0pPFN0eWxlZE1vZGFsSW5wdXRGb290bm90ZVByb3BzPmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLmVycm9yID8gcHJvcHMudGhlbWUuZXJyb3JDb2xvciA6IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvckxUKX07XG4gIGZvbnQtc2l6ZTogMTBweDtcbmA7XG4vKipcbiAqIE5ld2VyIHZlcnNpb25zIG9mIG1hcGJveC5nbCBkaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2UgYmFubmVyIG9uIHRvcCBvZiB0aGUgbWFwIGJ5IGRlZmF1bHRcbiAqIHdoaWNoIHdpbGwgY2F1c2UgdGhlIG1hcCB0byBkaXNwbGF5IHBvaW50cyBpbiB0aGUgd3JvbmcgbG9jYXRpb25zXG4gKiBUaGlzIHdvcmthcm91bmQgd2lsbCBoaWRlIHRoZSBlcnJvciBiYW5uZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBTdHlsZWRNYXBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAubWFwYm94Z2wtbWFwIHtcbiAgICAubWFwYm94Z2wtbWlzc2luZy1jc3Mge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLm1hcGJveGdsLWN0cmwtYXR0cmliIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkQXR0cmJ1dGlvbiA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdtYXBib3gtYXR0cmlidXRpb24tY29udGFpbmVyJ1xufSlgXG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCAxMHB4IDZweDtcbiAgei1pbmRleDogMTtcbiAgLmF0dHJpdGlvbi1saW5rIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG5cbiAgICBhLFxuICAgIC5waXBlLXNlcGFyYXRvciB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcbiAgICB9XG5cbiAgICAucGlwZS1zZXBhcmF0b3Ige1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG4gICAgfVxuICB9XG5cbiAgLmF0dHJpdGlvbi1sb2dvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGFiZWxDb2xvcn07XG5cbiAgICBhLm1hcGJveGdsLWN0cmwtbG9nbyB7XG4gICAgICB3aWR0aDogNzJweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgfVxuICB9XG4gIGEsXG4gIC5waXBlLXNlcGFyYXRvciB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG5cbiAgJHttZWRpYS5wYWxtYFxuICAgIC5hdHRyaXRpb24tbG9nbyBhIHtcbiAgICAgIHdpZHRoOiA2MHB4O1xuICAgIH1cblxuICAgIC5hdHRyaXRpb24tbGluayB7XG4gICAgICBsaW5lLWhlaWdodDogMWVtO1xuICAgIH1cbiAgYH07XG5gO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlZEV4cG9ydFNlY3Rpb25Qcm9wcyB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlZEV4cG9ydFNlY3Rpb24gPSBzdHlsZWQuZGl2PFN0eWxlZEV4cG9ydFNlY3Rpb25Qcm9wcz5gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMzVweCAwO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yTFR9O1xuICBmb250LXNpemU6IDEycHg7XG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLmRpc2FibGVkID8gMC4zIDogMSl9O1xuICBwb2ludGVyLWV2ZW50czogJHtwcm9wcyA9PiAocHJvcHMuZGlzYWJsZWQgPyAnbm9uZScgOiAnYWxsJyl9O1xuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDE4NXB4O1xuICAgIC50aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1mYW1pbHk6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9udEZhbWlseU1lZGl1bSA/PyBwcm9wcy50aGVtZS5mb250RmFtaWx5fTtcbiAgICB9XG4gICAgLnN1YnRpdGxlIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvckxUfTtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG4gIH1cbiAgLndhcm5pbmcge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmVycm9yQ29sb3J9O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgLmRlc2NyaXB0aW9uLmZ1bGwge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zZWxlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuXG4gICAgc2VsZWN0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgIHBhZGRpbmc6IDAuNWVtIDMuNWVtIDAuNWVtIDFlbTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgaGVpZ2h0OiAzNnB4O1xuXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDUwJSwgZ3JheSA1MCUpLFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBncmF5IDUwJSwgdHJhbnNwYXJlbnQgNTAlKSwgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjY2NjLCAjY2NjKTtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNhbGMoMTAwJSAtIDIwcHgpIGNhbGMoMWVtICsgMnB4KSwgY2FsYygxMDAlIC0gMTVweCkgY2FsYygxZW0gKyAycHgpLFxuICAgICAgICBjYWxjKDEwMCUgLSAyLjVlbSkgNC41ZW07XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDVweCA1cHgsIDVweCA1cHgsIDFweCAxLjVlbTtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuXG4gICAgc2VsZWN0OmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgZ3JlZW4gNTAlLCB0cmFuc3BhcmVudCA1MCUpLFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB0cmFuc3BhcmVudCA1MCUsIGdyZWVuIDUwJSksIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2NjYywgI2NjYyk7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAxNXB4KSAxZW0sIGNhbGMoMTAwJSAtIDIwcHgpIDFlbSwgY2FsYygxMDAlIC0gMi41ZW0pIDQuNWVtO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiA1cHggNXB4LCA1cHggNXB4LCAxcHggMS41ZW07XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcbiAgICAgIG91dGxpbmU6IDA7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkRmlsdGVyZWRPcHRpb24gPSBzdHlsZWQoU2VsZWN0aW9uQnV0dG9uKWBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogNHB4O1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgd2lkdGg6IDE0MHB4O1xuXG4gIC5maWx0ZXItb3B0aW9uLXRpdGxlIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JMVH07XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgLmZpbHRlci1vcHRpb24tc3VidGl0bGUge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvckxUfTtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRUeXBlID0gc3R5bGVkKFNlbGVjdGlvbkJ1dHRvbilgXG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogNHB4O1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgd2lkdGg6IDEwMHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFdpZGdldENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6IDE7XG5gO1xuXG5leHBvcnQgY29uc3QgQm90dG9tV2lkZ2V0SW5uZXIgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJvdHRvbVdpZGdldEJnZH07XG4gIHBhZGRpbmc6ICR7cHJvcHMgPT4gYCR7cHJvcHMudGhlbWUuYm90dG9tSW5uZXJQZFZlcnR9cHggJHtwcm9wcy50aGVtZS5ib3R0b21Jbm5lclBkU2lkZX1weGB9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm90dG9tUGFuZWxHYXB9cHg7XG5cbiAgJHttZWRpYS5wb3J0YWJsZWBcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJvcmRlckNvbG9yfTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCb3JkZXJDb2xvcn07XG4gICAgcGFkZGluZzogMTJweCAxMnB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIGB9XG5gO1xuXG5pbnRlcmZhY2UgTWFwQ29udHJvbEJ1dHRvblByb3BzIHtcbiAgYWN0aXZlPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IE1hcENvbnRyb2xCdXR0b24gPSBzdHlsZWQoQnV0dG9uKS5hdHRycyhwcm9wcyA9PiAoe1xuICBjbGFzc05hbWU6IGNsYXNzbmFtZXMoJ21hcC1jb250cm9sLWJ1dHRvbicsIHByb3BzLmNsYXNzTmFtZSlcbn0pKTxNYXBDb250cm9sQnV0dG9uUHJvcHM+YFxuICBib3gtc2hhZG93OiAwIDZweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLmZsb2F0aW5nQnRuQmdkSG92ZXIgOiBwcm9wcy50aGVtZS5mbG9hdGluZ0J0bkJnZH07XG4gIGNvbG9yOiAke3Byb3BzID0+XG4gICAgcHJvcHMuYWN0aXZlID8gcHJvcHMudGhlbWUuZmxvYXRpbmdCdG5BY3RDb2xvciA6IHByb3BzLnRoZW1lLmZsb2F0aW5nQnRuQ29sb3J9O1xuICBib3JkZXI6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5hY3RpdmUgPyBwcm9wcy50aGVtZS5mbG9hdGluZ0J0bkJvcmRlckhvdmVyIDogcHJvcHMudGhlbWUuZmxvYXRpbmdCdG5Cb3JkZXJ9O1xuXG4gIDpob3ZlcixcbiAgOmZvY3VzLFxuICA6YWN0aXZlLFxuICAmLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mbG9hdGluZ0J0bkJnZEhvdmVyfTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mbG9hdGluZ0J0bkFjdENvbG9yfTtcbiAgICBib3JkZXI6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZmxvYXRpbmdCdG5Cb3JkZXJIb3Zlcn07XG4gIH1cbiAgc3ZnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRGaWx0ZXJDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbENvbnRlbnRCYWNrZ3JvdW5kfTtcbiAgcGFkZGluZzogMTJweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBUcnVuY2F0ZWRUaXRsZVRleHQgPSBzdHlsZWQuZGl2YFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbmA7XG5cbmV4cG9ydCBjb25zdCBDaGVja01hcmsgPSBzdHlsZWQuc3Bhbi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2NoZWNrYm94LWlubmVyJ1xufSlgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2VsZWN0aW9uQnRuQm9yZGVyQWN0Q29sb3J9O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XG5cbiAgOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItdG9wOiAwO1xuICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgxKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjb250ZW50OiAnICc7XG4gICAgdG9wOiA0MCU7XG4gICAgbGVmdDogMzAlO1xuICAgIHdpZHRoOiAzLjJweDtcbiAgICBoZWlnaHQ6IDYuMjJweDtcbiAgfVxuYDtcbiJdfQ==