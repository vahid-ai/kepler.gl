"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayerTitleSectionFactory = LayerTitleSectionFactory;
exports["default"] = exports.HeaderWarning = exports.LayerLabelEditor = exports.DragHandle = exports.defaultProps = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _panelHeaderAction = _interopRequireDefault(require("../panel-header-action"));

var _styledComponents2 = require("../../common/styled-components");

var _icons = require("../../common/icons");

var _localization = require("@kepler.gl/localization");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

var defaultProps = {
  isDragNDropEnabled: true,
  showRemoveLayer: true
};
exports.defaultProps = defaultProps;

var getBorderCss = function getBorderCss(status) {
  return (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    border-top: 2px solid ", ";\n    border-bottom: 2px solid ", ";\n    border-right: 2px solid ", ";\n  "])), function (_ref) {
    var theme = _ref.theme;
    return theme.notificationColors[status];
  }, function (_ref2) {
    var theme = _ref2.theme;
    return theme.notificationColors[status];
  }, function (_ref3) {
    var theme = _ref3.theme;
    return theme.notificationColors[status];
  });
};

var StyledLayerPanelHeader = (0, _styledComponents["default"])(_styledComponents2.StyledPanelHeader)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  height: ", "px;\n  position: relative;\n  align-items: stretch;\n\n  .layer__remove-layer {\n    opacity: 0;\n  }\n\n  .layer__drag-handle__placeholder {\n    height: 20px;\n    padding: 10px;\n  }\n\n  ", "\n\n  :hover {\n    cursor: pointer;\n    background-color: ", ";\n\n    .layer__drag-handle {\n      opacity: 1;\n    }\n\n    .layer__remove-layer {\n      opacity: 1;\n    }\n  }\n"])), function (props) {
  return props.theme.layerPanelHeaderHeight;
}, function (props) {
  return props.warning ? getBorderCss('warning') : props.isValid ? '' : getBorderCss('error');
}, function (props) {
  return props.theme.panelBackgroundHover;
});

var HeaderLabelSection = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  color: ", ";\n  flex-grow: 1;\n  align-items: stretch;\n  // leave space for eye and collapse icon\n  padding-right: 50px;\n"])), function (props) {
  return props.theme.textColor;
});

var HeaderActionSection = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  position: absolute;\n  height: 100%;\n  align-items: stretch;\n  right: 10px;\n  pointer-events: ", ";\n  :hover {\n    .layer-panel__header__actions__hidden {\n      opacity: 1;\n      background-color: ", ";\n    }\n  }\n"])), function (props) {
  return props.isEditingLabel ? 'none' : 'all';
}, function (props) {
  return props.theme.panelBackgroundHover;
});

// Hiden actions only show up on hover
var StyledPanelHeaderHiddenActions = _styledComponents["default"].div.attrs({
  className: 'layer-panel__header__actions__hidden'
})(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  opacity: 0;\n  display: flex;\n  align-items: center;\n  background-color: ", ";\n  transition: opacity 0.4s ease, background-color 0.4s ease;\n\n  :hover {\n    opacity: 1;\n  }\n"])), function (props) {
  return props.isConfigActive ? props.theme.panelBackgroundHover : props.theme.panelBackground;
});

var StyledDragHandle = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  opacity: 0;\n  z-index: 1000;\n\n  :hover {\n    cursor: move;\n    opacity: 1;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.textColorHl;
});

var DragHandle = function DragHandle(_ref4) {
  var className = _ref4.className,
      listeners = _ref4.listeners,
      children = _ref4.children;
  return /*#__PURE__*/_react["default"].createElement(StyledDragHandle, (0, _extends2["default"])({
    className: className
  }, listeners ? listeners : {}), children);
};

exports.DragHandle = DragHandle;

var LayerLabelEditor = function LayerLabelEditor(_ref5) {
  var layerId = _ref5.layerId,
      label = _ref5.label,
      onEdit = _ref5.onEdit,
      onFocus = _ref5.onFocus,
      onBlur = _ref5.onBlur;
  return /*#__PURE__*/_react["default"].createElement(_styledComponents2.InlineInput, {
    type: "text",
    className: "layer__title__editor",
    value: label,
    onClick: function onClick(e) {
      e.stopPropagation();
      e.preventDefault();
    },
    onChange: onEdit,
    onFocus: onFocus,
    onBlur: onBlur,
    id: "".concat(layerId, ":input-layer-label")
  });
};

exports.LayerLabelEditor = LayerLabelEditor;

function LayerTitleSectionFactory() {
  var StyledLayerTitleSection = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: 4px;\n    flex-grow: 1;\n    align-items: center;\n    display: flex;\n    .layer__title__inner {\n      flex-grow: 1;\n    }\n\n    .layer__title__type {\n      color: ", ";\n      font-size: 10px;\n      line-height: 12px;\n      letter-spacing: 0.37px;\n      text-transform: capitalize;\n    }\n  "])), function (props) {
    return props.theme.subtextColor;
  });

  var LayerTitleSection = function LayerTitleSection(_ref6) {
    var layerType = _ref6.layerType,
        layerId = _ref6.layerId,
        label = _ref6.label,
        onUpdateLayerLabel = _ref6.onUpdateLayerLabel,
        onFocus = _ref6.onFocus,
        onBlur = _ref6.onBlur;
    return /*#__PURE__*/_react["default"].createElement(StyledLayerTitleSection, {
      className: "layer__title"
    }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(LayerLabelEditor, {
      layerId: layerId,
      label: label,
      onEdit: onUpdateLayerLabel,
      onFocus: onFocus,
      onBlur: onBlur
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "layer__title__type"
    }, layerType && /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: "layer.type.".concat(layerType.toLowerCase())
    }))));
  };

  return LayerTitleSection;
}

var StyledHeaderWaring = _styledComponents["default"].div(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  right: -9px;\n  top: calc(50% - 9px);\n  color: ", ";\n"])), function (_ref7) {
  var theme = _ref7.theme;
  return theme.notificationColors.warning;
});

var HeaderWarning = function HeaderWarning(_ref8) {
  var warning = _ref8.warning,
      id = _ref8.id;
  return /*#__PURE__*/_react["default"].createElement(StyledHeaderWaring, null, /*#__PURE__*/_react["default"].createElement(_icons.WarningSign, {
    "data-tip": true,
    "data-for": "layer-".concat(id, "-warning"),
    height: "16px"
  }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
    id: "layer-".concat(id, "-warning"),
    type: "warning",
    effect: "solid",
    textColor: "black"
  }, warning));
};

exports.HeaderWarning = HeaderWarning;
LayerPanelHeaderFactory.deps = [LayerTitleSectionFactory, _panelHeaderAction["default"]];
var defaultActionIcons = {
  remove: _icons.Trash,
  visible: _icons.EyeSeen,
  hidden: _icons.EyeUnseen,
  enableConfig: _icons.ArrowDown,
  duplicate: _icons.Copy,
  resetIsValid: _icons.Reset
};

function LayerPanelHeaderFactory(LayerTitleSection, PanelHeaderAction) {
  var LayerPanelHeader = function LayerPanelHeader(_ref9) {
    var isConfigActive = _ref9.isConfigActive,
        allowDuplicate = _ref9.allowDuplicate,
        isDragNDropEnabled = _ref9.isDragNDropEnabled,
        isVisible = _ref9.isVisible,
        isValid = _ref9.isValid,
        warning = _ref9.warning,
        label = _ref9.label,
        layerId = _ref9.layerId,
        layerType = _ref9.layerType,
        labelRCGColorValues = _ref9.labelRCGColorValues,
        onToggleVisibility = _ref9.onToggleVisibility,
        onUpdateLayerLabel = _ref9.onUpdateLayerLabel,
        onToggleEnableConfig = _ref9.onToggleEnableConfig,
        onDuplicateLayer = _ref9.onDuplicateLayer,
        onRemoveLayer = _ref9.onRemoveLayer,
        onResetIsValid = _ref9.onResetIsValid,
        showRemoveLayer = _ref9.showRemoveLayer,
        listeners = _ref9.listeners,
        _ref9$actionIcons = _ref9.actionIcons,
        actionIcons = _ref9$actionIcons === void 0 ? defaultActionIcons : _ref9$actionIcons;

    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        isEditingLabel = _useState2[0],
        setIsEditingLabel = _useState2[1];

    return /*#__PURE__*/_react["default"].createElement(StyledLayerPanelHeader, {
      className: (0, _classnames["default"])('layer-panel__header', {
        'sort--handle': !isConfigActive
      }),
      isValid: isValid,
      warning: warning,
      active: isConfigActive,
      labelRCGColorValues: labelRCGColorValues,
      onClick: onToggleEnableConfig
    }, warning ? /*#__PURE__*/_react["default"].createElement(HeaderWarning, {
      warning: warning,
      id: layerId
    }) : null, /*#__PURE__*/_react["default"].createElement(HeaderLabelSection, {
      className: "layer-panel__header__content"
    }, isDragNDropEnabled ? /*#__PURE__*/_react["default"].createElement(DragHandle, {
      className: "layer__drag-handle",
      listeners: listeners
    }, /*#__PURE__*/_react["default"].createElement(_icons.VertDots, {
      height: "20px"
    })) : /*#__PURE__*/_react["default"].createElement("div", {
      className: "layer__drag-handle__placeholder"
    }), /*#__PURE__*/_react["default"].createElement(LayerTitleSection, {
      layerId: layerId,
      label: label,
      onUpdateLayerLabel: onUpdateLayerLabel,
      layerType: layerType,
      onFocus: function onFocus() {
        setIsEditingLabel(true);
      },
      onBlur: function onBlur() {
        setIsEditingLabel(false);
      }
    })), /*#__PURE__*/_react["default"].createElement(HeaderActionSection, {
      className: "layer-panel__header__actions",
      isEditingLabel: isEditingLabel
    }, /*#__PURE__*/_react["default"].createElement(StyledPanelHeaderHiddenActions, {
      isConfigActive: isConfigActive
    }, showRemoveLayer ? /*#__PURE__*/_react["default"].createElement(PanelHeaderAction, {
      className: "layer__remove-layer",
      id: layerId,
      tooltip: 'tooltip.removeLayer',
      onClick: onRemoveLayer,
      tooltipType: "error",
      IconComponent: actionIcons.remove
    }) : null, /*#__PURE__*/_react["default"].createElement(PanelHeaderAction, {
      className: "layer__duplicate",
      id: layerId,
      tooltip: 'tooltip.duplicateLayer',
      onClick: onDuplicateLayer,
      IconComponent: actionIcons.duplicate,
      disabled: !allowDuplicate
    })), isValid ? /*#__PURE__*/_react["default"].createElement(PanelHeaderAction, {
      className: "layer__visibility-toggle",
      id: layerId,
      tooltip: isVisible ? 'tooltip.hideLayer' : 'tooltip.showLayer',
      onClick: onToggleVisibility,
      IconComponent: isVisible ? actionIcons.visible : actionIcons.hidden
    }) : /*#__PURE__*/_react["default"].createElement(PanelHeaderAction, {
      className: "layer__is-valid-refresh",
      id: layerId,
      tooltip: 'tooltip.resetAfterError',
      onClick: onResetIsValid,
      IconComponent: actionIcons.resetIsValid
    }), /*#__PURE__*/_react["default"].createElement(PanelHeaderAction, {
      className: (0, _classnames["default"])('layer__enable-config ', {
        'is-open': isConfigActive
      }),
      id: layerId,
      tooltip: 'tooltip.layerSettings',
      onClick: onToggleEnableConfig,
      IconComponent: actionIcons.enableConfig
    })));
  };

  LayerPanelHeader.defaultProps = defaultProps;
  return LayerPanelHeader;
}

var _default = LayerPanelHeaderFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2xheWVyLXBhbmVsL2xheWVyLXBhbmVsLWhlYWRlci50c3giXSwibmFtZXMiOlsiZGVmYXVsdFByb3BzIiwiaXNEcmFnTkRyb3BFbmFibGVkIiwic2hvd1JlbW92ZUxheWVyIiwiZ2V0Qm9yZGVyQ3NzIiwic3RhdHVzIiwiY3NzIiwidGhlbWUiLCJub3RpZmljYXRpb25Db2xvcnMiLCJTdHlsZWRMYXllclBhbmVsSGVhZGVyIiwiU3R5bGVkUGFuZWxIZWFkZXIiLCJwcm9wcyIsImxheWVyUGFuZWxIZWFkZXJIZWlnaHQiLCJ3YXJuaW5nIiwiaXNWYWxpZCIsInBhbmVsQmFja2dyb3VuZEhvdmVyIiwiSGVhZGVyTGFiZWxTZWN0aW9uIiwic3R5bGVkIiwiZGl2IiwidGV4dENvbG9yIiwiSGVhZGVyQWN0aW9uU2VjdGlvbiIsImlzRWRpdGluZ0xhYmVsIiwiU3R5bGVkUGFuZWxIZWFkZXJIaWRkZW5BY3Rpb25zIiwiYXR0cnMiLCJjbGFzc05hbWUiLCJpc0NvbmZpZ0FjdGl2ZSIsInBhbmVsQmFja2dyb3VuZCIsIlN0eWxlZERyYWdIYW5kbGUiLCJ0ZXh0Q29sb3JIbCIsIkRyYWdIYW5kbGUiLCJsaXN0ZW5lcnMiLCJjaGlsZHJlbiIsIkxheWVyTGFiZWxFZGl0b3IiLCJsYXllcklkIiwibGFiZWwiLCJvbkVkaXQiLCJvbkZvY3VzIiwib25CbHVyIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiTGF5ZXJUaXRsZVNlY3Rpb25GYWN0b3J5IiwiU3R5bGVkTGF5ZXJUaXRsZVNlY3Rpb24iLCJzdWJ0ZXh0Q29sb3IiLCJMYXllclRpdGxlU2VjdGlvbiIsImxheWVyVHlwZSIsIm9uVXBkYXRlTGF5ZXJMYWJlbCIsInRvTG93ZXJDYXNlIiwiU3R5bGVkSGVhZGVyV2FyaW5nIiwiSGVhZGVyV2FybmluZyIsImlkIiwiTGF5ZXJQYW5lbEhlYWRlckZhY3RvcnkiLCJkZXBzIiwiUGFuZWxIZWFkZXJBY3Rpb25GYWN0b3J5IiwiZGVmYXVsdEFjdGlvbkljb25zIiwicmVtb3ZlIiwiVHJhc2giLCJ2aXNpYmxlIiwiRXllU2VlbiIsImhpZGRlbiIsIkV5ZVVuc2VlbiIsImVuYWJsZUNvbmZpZyIsIkFycm93RG93biIsImR1cGxpY2F0ZSIsIkNvcHkiLCJyZXNldElzVmFsaWQiLCJSZXNldCIsIlBhbmVsSGVhZGVyQWN0aW9uIiwiTGF5ZXJQYW5lbEhlYWRlciIsImFsbG93RHVwbGljYXRlIiwiaXNWaXNpYmxlIiwibGFiZWxSQ0dDb2xvclZhbHVlcyIsIm9uVG9nZ2xlVmlzaWJpbGl0eSIsIm9uVG9nZ2xlRW5hYmxlQ29uZmlnIiwib25EdXBsaWNhdGVMYXllciIsIm9uUmVtb3ZlTGF5ZXIiLCJvblJlc2V0SXNWYWxpZCIsImFjdGlvbkljb25zIiwic2V0SXNFZGl0aW5nTGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFPQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFZQTs7OztBQWtETyxJQUFNQSxZQUFZLEdBQUc7QUFDMUJDLEVBQUFBLGtCQUFrQixFQUFFLElBRE07QUFFMUJDLEVBQUFBLGVBQWUsRUFBRTtBQUZTLENBQXJCOzs7QUFLUCxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxNQUFNO0FBQUEsYUFDekJDLHFCQUR5QixvTUFFQztBQUFBLFFBQUVDLEtBQUYsUUFBRUEsS0FBRjtBQUFBLFdBQWFBLEtBQUssQ0FBQ0Msa0JBQU4sQ0FBeUJILE1BQXpCLENBQWI7QUFBQSxHQUZELEVBR0k7QUFBQSxRQUFFRSxLQUFGLFNBQUVBLEtBQUY7QUFBQSxXQUFhQSxLQUFLLENBQUNDLGtCQUFOLENBQXlCSCxNQUF6QixDQUFiO0FBQUEsR0FISixFQUlHO0FBQUEsUUFBRUUsS0FBRixTQUFFQSxLQUFGO0FBQUEsV0FBYUEsS0FBSyxDQUFDQyxrQkFBTixDQUF5QkgsTUFBekIsQ0FBYjtBQUFBLEdBSkg7QUFBQSxDQUEz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LEVBQUMsMEJBRFo7QUFFRSxNQUFBLEVBQUUsRUFBRW1CLE9BRk47QUFHRSxNQUFBLE9BQU8sRUFBRXFDLFNBQVMsR0FBRyxtQkFBSCxHQUF5QixtQkFIN0M7QUFJRSxNQUFBLE9BQU8sRUFBRUUsa0JBSlg7QUFLRSxNQUFBLGFBQWEsRUFBRUYsU0FBUyxHQUFHTyxXQUFXLENBQUNwQixPQUFmLEdBQXlCb0IsV0FBVyxDQUFDbEI7QUFML0QsTUFETSxnQkFTTixnQ0FBQyxpQkFBRDtBQUNFLE1BQUEsU0FBUyxFQUFDLHlCQURaO0FBRUUsTUFBQSxFQUFFLEVBQUUxQixPQUZOO0FBR0UsTUFBQSxPQUFPLEVBQUUseUJBSFg7QUFJRSxNQUFBLE9BQU8sRUFBRTJDLGNBSlg7QUFLRSxNQUFBLGFBQWEsRUFBRUMsV0FBVyxDQUFDWjtBQUw3QixNQWpDSixlQXlDRSxnQ0FBQyxpQkFBRDtBQUNFLE1BQUEsU0FBUyxFQUFFLDRCQUFXLHVCQUFYLEVBQW9DO0FBQzdDLG1CQUFXeEM7QUFEa0MsT0FBcEMsQ0FEYjtBQUlFLE1BQUEsRUFBRSxFQUFFUSxPQUpOO0FBS0UsTUFBQSxPQUFPLEVBQUUsdUJBTFg7QUFNRSxNQUFBLE9BQU8sRUFBRXdDLG9CQU5YO0FBT0UsTUFBQSxhQUFhLEVBQUVJLFdBQVcsQ0FBQ2hCO0FBUDdCLE1BekNGLENBaENGLENBREY7QUFzRkQsR0E1R0Q7O0FBOEdBTyxFQUFBQSxnQkFBZ0IsQ0FBQ25FLFlBQWpCLEdBQWdDQSxZQUFoQztBQUVBLFNBQU9tRSxnQkFBUDtBQUNEOztlQUVjakIsdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtcbiAgdXNlU3RhdGUsXG4gIENvbXBvbmVudFR5cGUsXG4gIE1vdXNlRXZlbnRIYW5kbGVyLFxuICBNb3VzZUV2ZW50LFxuICBDaGFuZ2VFdmVudEhhbmRsZXJcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVkLCB7Y3NzfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUGFuZWxIZWFkZXJBY3Rpb25GYWN0b3J5IGZyb20gJy4uL3BhbmVsLWhlYWRlci1hY3Rpb24nO1xuaW1wb3J0IHtUb29sdGlwfSBmcm9tICcuLi8uLi9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtcbiAgQ29weSxcbiAgQXJyb3dEb3duLFxuICBFeWVTZWVuLFxuICBFeWVVbnNlZW4sXG4gIFRyYXNoLFxuICBWZXJ0RG90cyxcbiAgV2FybmluZ1NpZ24sXG4gIFJlc2V0XG59IGZyb20gJy4uLy4uL2NvbW1vbi9pY29ucyc7XG5cbmltcG9ydCB7SW5saW5lSW5wdXQsIFN0eWxlZFBhbmVsSGVhZGVyfSBmcm9tICcuLi8uLi9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdAa2VwbGVyLmdsL2xvY2FsaXphdGlvbic7XG5pbXBvcnQge1JHQkNvbG9yfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcbmltcG9ydCB7QmFzZVByb3BzfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMnO1xuXG50eXBlIExheWVyTGFiZWxFZGl0b3JQcm9wcyA9IHtcbiAgbGF5ZXJJZDogc3RyaW5nO1xuICBsYWJlbD86IHN0cmluZztcbiAgb25FZGl0OiBDaGFuZ2VFdmVudEhhbmRsZXI7XG4gIG9uRm9jdXM6IENoYW5nZUV2ZW50SGFuZGxlcjtcbiAgb25CbHVyOiBDaGFuZ2VFdmVudEhhbmRsZXI7XG59O1xuXG50eXBlIExheWVyVGl0bGVTZWN0aW9uUHJvcHMgPSB7XG4gIGxheWVyVHlwZT86IHN0cmluZyB8IG51bGw7XG4gIGxheWVySWQ6IHN0cmluZztcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIG9uVXBkYXRlTGF5ZXJMYWJlbDogQ2hhbmdlRXZlbnRIYW5kbGVyO1xuICBvbkZvY3VzOiBDaGFuZ2VFdmVudEhhbmRsZXI7XG4gIG9uQmx1cjogQ2hhbmdlRXZlbnRIYW5kbGVyO1xufTtcblxudHlwZSBMYXllclBhbmVsSGVhZGVyUHJvcHMgPSB7XG4gIGxheWVySWQ6IHN0cmluZztcbiAgaXNWaXNpYmxlOiBib29sZWFuO1xuICBpc1ZhbGlkOiBib29sZWFuO1xuICBvblRvZ2dsZVZpc2liaWxpdHk6IE1vdXNlRXZlbnRIYW5kbGVyO1xuICBvblVwZGF0ZUxheWVyTGFiZWw6IENoYW5nZUV2ZW50SGFuZGxlcjtcbiAgb25Ub2dnbGVFbmFibGVDb25maWc6IE1vdXNlRXZlbnRIYW5kbGVyO1xuICBvblJlbW92ZUxheWVyOiBNb3VzZUV2ZW50SGFuZGxlcjtcbiAgb25EdXBsaWNhdGVMYXllcjogTW91c2VFdmVudEhhbmRsZXI7XG4gIG9uUmVzZXRJc1ZhbGlkOiBNb3VzZUV2ZW50SGFuZGxlcjtcbiAgaXNDb25maWdBY3RpdmU6IGJvb2xlYW47XG4gIHNob3dSZW1vdmVMYXllcj86IGJvb2xlYW47XG4gIGxhYmVsPzogc3RyaW5nO1xuICBsYXllclR5cGU/OiBzdHJpbmcgfCBudWxsO1xuICBhbGxvd0R1cGxpY2F0ZT86IGJvb2xlYW47XG4gIGlzRHJhZ05Ecm9wRW5hYmxlZD86IGJvb2xlYW47XG4gIHdhcm5pbmc/OiBib29sZWFuO1xuICBsYWJlbFJDR0NvbG9yVmFsdWVzPzogUkdCQ29sb3IgfCBudWxsO1xuICBhY3Rpb25JY29ucz86IHtcbiAgICByZW1vdmU6IENvbXBvbmVudFR5cGU8UGFydGlhbDxCYXNlUHJvcHM+PjtcbiAgICB2aXNpYmxlOiBDb21wb25lbnRUeXBlPFBhcnRpYWw8QmFzZVByb3BzPj47XG4gICAgaGlkZGVuOiBDb21wb25lbnRUeXBlPFBhcnRpYWw8QmFzZVByb3BzPj47XG4gICAgZW5hYmxlQ29uZmlnOiBDb21wb25lbnRUeXBlPFBhcnRpYWw8QmFzZVByb3BzPj47XG4gICAgcmVzZXRJc1ZhbGlkOiBDb21wb25lbnRUeXBlPFBhcnRpYWw8QmFzZVByb3BzPj47XG4gICAgZHVwbGljYXRlOiBDb21wb25lbnRUeXBlPFBhcnRpYWw8QmFzZVByb3BzPj47XG4gIH07XG4gIGxpc3RlbmVycz86IFJlYWN0LkVsZW1lbnRUeXBlO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgaXNEcmFnTkRyb3BFbmFibGVkOiB0cnVlLFxuICBzaG93UmVtb3ZlTGF5ZXI6IHRydWVcbn07XG5cbmNvbnN0IGdldEJvcmRlckNzcyA9IHN0YXR1cyA9PlxuICBjc3NgXG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICR7KHt0aGVtZX0pID0+IHRoZW1lLm5vdGlmaWNhdGlvbkNvbG9yc1tzdGF0dXNdfTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHsoe3RoZW1lfSkgPT4gdGhlbWUubm90aWZpY2F0aW9uQ29sb3JzW3N0YXR1c119O1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICR7KHt0aGVtZX0pID0+IHRoZW1lLm5vdGlmaWNhdGlvbkNvbG9yc1tzdGF0dXNdfTtcbiAgYDtcblxuY29uc3QgU3R5bGVkTGF5ZXJQYW5lbEhlYWRlciA9IHN0eWxlZChTdHlsZWRQYW5lbEhlYWRlcilgXG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYXllclBhbmVsSGVhZGVySGVpZ2h0fXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXG4gIC5sYXllcl9fcmVtb3ZlLWxheWVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgLmxheWVyX19kcmFnLWhhbmRsZV9fcGxhY2Vob2xkZXIge1xuICAgIGhlaWdodDogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgJHtwcm9wcyA9PiAocHJvcHMud2FybmluZyA/IGdldEJvcmRlckNzcygnd2FybmluZycpIDogcHJvcHMuaXNWYWxpZCA/ICcnIDogZ2V0Qm9yZGVyQ3NzKCdlcnJvcicpKX1cblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyfTtcblxuICAgIC5sYXllcl9fZHJhZy1oYW5kbGUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAubGF5ZXJfX3JlbW92ZS1sYXllciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgSGVhZGVyTGFiZWxTZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgZmxleC1ncm93OiAxO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgLy8gbGVhdmUgc3BhY2UgZm9yIGV5ZSBhbmQgY29sbGFwc2UgaWNvblxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuYDtcblxudHlwZSBIZWFkZXJBY3Rpb25TZWN0aW9uUHJvcHMgPSB7XG4gIGlzRWRpdGluZ0xhYmVsOiBib29sZWFuO1xufTtcblxuY29uc3QgSGVhZGVyQWN0aW9uU2VjdGlvbiA9IHN0eWxlZC5kaXY8SGVhZGVyQWN0aW9uU2VjdGlvblByb3BzPmBcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICByaWdodDogMTBweDtcbiAgcG9pbnRlci1ldmVudHM6ICR7cHJvcHMgPT4gKHByb3BzLmlzRWRpdGluZ0xhYmVsID8gJ25vbmUnIDogJ2FsbCcpfTtcbiAgOmhvdmVyIHtcbiAgICAubGF5ZXItcGFuZWxfX2hlYWRlcl9fYWN0aW9uc19faGlkZGVuIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZEhvdmVyfTtcbiAgICB9XG4gIH1cbmA7XG5cbnR5cGUgU3R5bGVkUGFuZWxIZWFkZXJIaWRkZW5BY3Rpb25zUHJvcHMgPSB7XG4gIGlzQ29uZmlnQWN0aXZlOiBMYXllclBhbmVsSGVhZGVyUHJvcHNbJ2lzQ29uZmlnQWN0aXZlJ107XG59O1xuXG4vLyBIaWRlbiBhY3Rpb25zIG9ubHkgc2hvdyB1cCBvbiBob3ZlclxuY29uc3QgU3R5bGVkUGFuZWxIZWFkZXJIaWRkZW5BY3Rpb25zID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2xheWVyLXBhbmVsX19oZWFkZXJfX2FjdGlvbnNfX2hpZGRlbidcbn0pPFN0eWxlZFBhbmVsSGVhZGVySGlkZGVuQWN0aW9uc1Byb3BzPmBcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PlxuICAgIHByb3BzLmlzQ29uZmlnQWN0aXZlID8gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kSG92ZXIgOiBwcm9wcy50aGVtZS5wYW5lbEJhY2tncm91bmR9O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAwLjRzIGVhc2U7XG5cbiAgOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWREcmFnSGFuZGxlID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogMTAwMDtcblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogbW92ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IERyYWdIYW5kbGUgPSAoe2NsYXNzTmFtZSwgbGlzdGVuZXJzLCBjaGlsZHJlbn0pID0+IChcbiAgPFN0eWxlZERyYWdIYW5kbGUgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHsuLi4obGlzdGVuZXJzID8gbGlzdGVuZXJzIDoge30pfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvU3R5bGVkRHJhZ0hhbmRsZT5cbik7XG5cbmV4cG9ydCBjb25zdCBMYXllckxhYmVsRWRpdG9yOiBSZWFjdC5GQzxMYXllckxhYmVsRWRpdG9yUHJvcHM+ID0gKHtcbiAgbGF5ZXJJZCxcbiAgbGFiZWwsXG4gIG9uRWRpdCxcbiAgb25Gb2N1cyxcbiAgb25CbHVyXG59KSA9PiAoXG4gIDxJbmxpbmVJbnB1dFxuICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICBjbGFzc05hbWU9XCJsYXllcl9fdGl0bGVfX2VkaXRvclwiXG4gICAgdmFsdWU9e2xhYmVsfVxuICAgIG9uQ2xpY2s9eyhlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH19XG4gICAgb25DaGFuZ2U9e29uRWRpdH1cbiAgICBvbkZvY3VzPXtvbkZvY3VzfVxuICAgIG9uQmx1cj17b25CbHVyfVxuICAgIGlkPXtgJHtsYXllcklkfTppbnB1dC1sYXllci1sYWJlbGB9XG4gIC8+XG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gTGF5ZXJUaXRsZVNlY3Rpb25GYWN0b3J5KCkge1xuICBjb25zdCBTdHlsZWRMYXllclRpdGxlU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC5sYXllcl9fdGl0bGVfX2lubmVyIHtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICB9XG5cbiAgICAubGF5ZXJfX3RpdGxlX190eXBlIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnN1YnRleHRDb2xvcn07XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjM3cHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG4gIGA7XG4gIGNvbnN0IExheWVyVGl0bGVTZWN0aW9uOiBSZWFjdC5GQzxMYXllclRpdGxlU2VjdGlvblByb3BzPiA9ICh7XG4gICAgbGF5ZXJUeXBlLFxuICAgIGxheWVySWQsXG4gICAgbGFiZWwsXG4gICAgb25VcGRhdGVMYXllckxhYmVsLFxuICAgIG9uRm9jdXMsXG4gICAgb25CbHVyXG4gIH0pID0+IChcbiAgICA8U3R5bGVkTGF5ZXJUaXRsZVNlY3Rpb24gY2xhc3NOYW1lPVwibGF5ZXJfX3RpdGxlXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8TGF5ZXJMYWJlbEVkaXRvclxuICAgICAgICAgIGxheWVySWQ9e2xheWVySWR9XG4gICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgIG9uRWRpdD17b25VcGRhdGVMYXllckxhYmVsfVxuICAgICAgICAgIG9uRm9jdXM9e29uRm9jdXN9XG4gICAgICAgICAgb25CbHVyPXtvbkJsdXJ9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGF5ZXJfX3RpdGxlX190eXBlXCI+XG4gICAgICAgICAge2xheWVyVHlwZSAmJiA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17YGxheWVyLnR5cGUuJHtsYXllclR5cGUudG9Mb3dlckNhc2UoKX1gfSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1N0eWxlZExheWVyVGl0bGVTZWN0aW9uPlxuICApO1xuICByZXR1cm4gTGF5ZXJUaXRsZVNlY3Rpb247XG59XG5cbmNvbnN0IFN0eWxlZEhlYWRlcldhcmluZyA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC05cHg7XG4gIHRvcDogY2FsYyg1MCUgLSA5cHgpO1xuICBjb2xvcjogJHsoe3RoZW1lfSkgPT4gdGhlbWUubm90aWZpY2F0aW9uQ29sb3JzLndhcm5pbmd9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEhlYWRlcldhcm5pbmcgPSAoe3dhcm5pbmcsIGlkfSkgPT4gKFxuICA8U3R5bGVkSGVhZGVyV2FyaW5nPlxuICAgIDxXYXJuaW5nU2lnbiBkYXRhLXRpcCBkYXRhLWZvcj17YGxheWVyLSR7aWR9LXdhcm5pbmdgfSBoZWlnaHQ9XCIxNnB4XCIgLz5cbiAgICA8VG9vbHRpcCBpZD17YGxheWVyLSR7aWR9LXdhcm5pbmdgfSB0eXBlPVwid2FybmluZ1wiIGVmZmVjdD1cInNvbGlkXCIgdGV4dENvbG9yPVwiYmxhY2tcIj5cbiAgICAgIHt3YXJuaW5nfVxuICAgIDwvVG9vbHRpcD5cbiAgPC9TdHlsZWRIZWFkZXJXYXJpbmc+XG4pO1xuTGF5ZXJQYW5lbEhlYWRlckZhY3RvcnkuZGVwcyA9IFtMYXllclRpdGxlU2VjdGlvbkZhY3RvcnksIFBhbmVsSGVhZGVyQWN0aW9uRmFjdG9yeV07XG5cbmNvbnN0IGRlZmF1bHRBY3Rpb25JY29ucyA9IHtcbiAgcmVtb3ZlOiBUcmFzaCxcbiAgdmlzaWJsZTogRXllU2VlbixcbiAgaGlkZGVuOiBFeWVVbnNlZW4sXG4gIGVuYWJsZUNvbmZpZzogQXJyb3dEb3duLFxuICBkdXBsaWNhdGU6IENvcHksXG4gIHJlc2V0SXNWYWxpZDogUmVzZXRcbn07XG5cbmZ1bmN0aW9uIExheWVyUGFuZWxIZWFkZXJGYWN0b3J5KFxuICBMYXllclRpdGxlU2VjdGlvbjogUmV0dXJuVHlwZTx0eXBlb2YgTGF5ZXJUaXRsZVNlY3Rpb25GYWN0b3J5PixcbiAgUGFuZWxIZWFkZXJBY3Rpb246IFJldHVyblR5cGU8dHlwZW9mIFBhbmVsSGVhZGVyQWN0aW9uRmFjdG9yeT5cbikge1xuICBjb25zdCBMYXllclBhbmVsSGVhZGVyOiBSZWFjdC5GQzxMYXllclBhbmVsSGVhZGVyUHJvcHM+ID0gKHtcbiAgICBpc0NvbmZpZ0FjdGl2ZSxcbiAgICBhbGxvd0R1cGxpY2F0ZSxcbiAgICBpc0RyYWdORHJvcEVuYWJsZWQsXG4gICAgaXNWaXNpYmxlLFxuICAgIGlzVmFsaWQsXG4gICAgd2FybmluZyxcbiAgICBsYWJlbCxcbiAgICBsYXllcklkLFxuICAgIGxheWVyVHlwZSxcbiAgICBsYWJlbFJDR0NvbG9yVmFsdWVzLFxuICAgIG9uVG9nZ2xlVmlzaWJpbGl0eSxcbiAgICBvblVwZGF0ZUxheWVyTGFiZWwsXG4gICAgb25Ub2dnbGVFbmFibGVDb25maWcsXG4gICAgb25EdXBsaWNhdGVMYXllcixcbiAgICBvblJlbW92ZUxheWVyLFxuICAgIG9uUmVzZXRJc1ZhbGlkLFxuICAgIHNob3dSZW1vdmVMYXllcixcbiAgICBsaXN0ZW5lcnMsXG4gICAgYWN0aW9uSWNvbnMgPSBkZWZhdWx0QWN0aW9uSWNvbnNcbiAgfSkgPT4ge1xuICAgIGNvbnN0IFtpc0VkaXRpbmdMYWJlbCwgc2V0SXNFZGl0aW5nTGFiZWxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkTGF5ZXJQYW5lbEhlYWRlclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2xheWVyLXBhbmVsX19oZWFkZXInLCB7XG4gICAgICAgICAgJ3NvcnQtLWhhbmRsZSc6ICFpc0NvbmZpZ0FjdGl2ZVxuICAgICAgICB9KX1cbiAgICAgICAgaXNWYWxpZD17aXNWYWxpZH1cbiAgICAgICAgd2FybmluZz17d2FybmluZ31cbiAgICAgICAgYWN0aXZlPXtpc0NvbmZpZ0FjdGl2ZX1cbiAgICAgICAgbGFiZWxSQ0dDb2xvclZhbHVlcz17bGFiZWxSQ0dDb2xvclZhbHVlc31cbiAgICAgICAgb25DbGljaz17b25Ub2dnbGVFbmFibGVDb25maWd9XG4gICAgICA+XG4gICAgICAgIHt3YXJuaW5nID8gPEhlYWRlcldhcm5pbmcgd2FybmluZz17d2FybmluZ30gaWQ9e2xheWVySWR9IC8+IDogbnVsbH1cbiAgICAgICAgPEhlYWRlckxhYmVsU2VjdGlvbiBjbGFzc05hbWU9XCJsYXllci1wYW5lbF9faGVhZGVyX19jb250ZW50XCI+XG4gICAgICAgICAge2lzRHJhZ05Ecm9wRW5hYmxlZCA/IChcbiAgICAgICAgICAgIDxEcmFnSGFuZGxlIGNsYXNzTmFtZT1cImxheWVyX19kcmFnLWhhbmRsZVwiIGxpc3RlbmVycz17bGlzdGVuZXJzfT5cbiAgICAgICAgICAgICAgPFZlcnREb3RzIGhlaWdodD1cIjIwcHhcIiAvPlxuICAgICAgICAgICAgPC9EcmFnSGFuZGxlPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxheWVyX19kcmFnLWhhbmRsZV9fcGxhY2Vob2xkZXJcIiAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPExheWVyVGl0bGVTZWN0aW9uXG4gICAgICAgICAgICBsYXllcklkPXtsYXllcklkfVxuICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgb25VcGRhdGVMYXllckxhYmVsPXtvblVwZGF0ZUxheWVyTGFiZWx9XG4gICAgICAgICAgICBsYXllclR5cGU9e2xheWVyVHlwZX1cbiAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0SXNFZGl0aW5nTGFiZWwodHJ1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25CbHVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldElzRWRpdGluZ0xhYmVsKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkZXJMYWJlbFNlY3Rpb24+XG4gICAgICAgIDxIZWFkZXJBY3Rpb25TZWN0aW9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibGF5ZXItcGFuZWxfX2hlYWRlcl9fYWN0aW9uc1wiXG4gICAgICAgICAgaXNFZGl0aW5nTGFiZWw9e2lzRWRpdGluZ0xhYmVsfVxuICAgICAgICA+XG4gICAgICAgICAgPFN0eWxlZFBhbmVsSGVhZGVySGlkZGVuQWN0aW9ucyBpc0NvbmZpZ0FjdGl2ZT17aXNDb25maWdBY3RpdmV9PlxuICAgICAgICAgICAge3Nob3dSZW1vdmVMYXllciA/IChcbiAgICAgICAgICAgICAgPFBhbmVsSGVhZGVyQWN0aW9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGF5ZXJfX3JlbW92ZS1sYXllclwiXG4gICAgICAgICAgICAgICAgaWQ9e2xheWVySWR9XG4gICAgICAgICAgICAgICAgdG9vbHRpcD17J3Rvb2x0aXAucmVtb3ZlTGF5ZXInfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uUmVtb3ZlTGF5ZXJ9XG4gICAgICAgICAgICAgICAgdG9vbHRpcFR5cGU9XCJlcnJvclwiXG4gICAgICAgICAgICAgICAgSWNvbkNvbXBvbmVudD17YWN0aW9uSWNvbnMucmVtb3ZlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8UGFuZWxIZWFkZXJBY3Rpb25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGF5ZXJfX2R1cGxpY2F0ZVwiXG4gICAgICAgICAgICAgIGlkPXtsYXllcklkfVxuICAgICAgICAgICAgICB0b29sdGlwPXsndG9vbHRpcC5kdXBsaWNhdGVMYXllcid9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uRHVwbGljYXRlTGF5ZXJ9XG4gICAgICAgICAgICAgIEljb25Db21wb25lbnQ9e2FjdGlvbkljb25zLmR1cGxpY2F0ZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFhbGxvd0R1cGxpY2F0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9TdHlsZWRQYW5lbEhlYWRlckhpZGRlbkFjdGlvbnM+XG4gICAgICAgICAge2lzVmFsaWQgPyAoXG4gICAgICAgICAgICA8UGFuZWxIZWFkZXJBY3Rpb25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGF5ZXJfX3Zpc2liaWxpdHktdG9nZ2xlXCJcbiAgICAgICAgICAgICAgaWQ9e2xheWVySWR9XG4gICAgICAgICAgICAgIHRvb2x0aXA9e2lzVmlzaWJsZSA/ICd0b29sdGlwLmhpZGVMYXllcicgOiAndG9vbHRpcC5zaG93TGF5ZXInfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZVZpc2liaWxpdHl9XG4gICAgICAgICAgICAgIEljb25Db21wb25lbnQ9e2lzVmlzaWJsZSA/IGFjdGlvbkljb25zLnZpc2libGUgOiBhY3Rpb25JY29ucy5oaWRkZW59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8UGFuZWxIZWFkZXJBY3Rpb25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGF5ZXJfX2lzLXZhbGlkLXJlZnJlc2hcIlxuICAgICAgICAgICAgICBpZD17bGF5ZXJJZH1cbiAgICAgICAgICAgICAgdG9vbHRpcD17J3Rvb2x0aXAucmVzZXRBZnRlckVycm9yJ31cbiAgICAgICAgICAgICAgb25DbGljaz17b25SZXNldElzVmFsaWR9XG4gICAgICAgICAgICAgIEljb25Db21wb25lbnQ9e2FjdGlvbkljb25zLnJlc2V0SXNWYWxpZH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8UGFuZWxIZWFkZXJBY3Rpb25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbGF5ZXJfX2VuYWJsZS1jb25maWcgJywge1xuICAgICAgICAgICAgICAnaXMtb3Blbic6IGlzQ29uZmlnQWN0aXZlXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIGlkPXtsYXllcklkfVxuICAgICAgICAgICAgdG9vbHRpcD17J3Rvb2x0aXAubGF5ZXJTZXR0aW5ncyd9XG4gICAgICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZUVuYWJsZUNvbmZpZ31cbiAgICAgICAgICAgIEljb25Db21wb25lbnQ9e2FjdGlvbkljb25zLmVuYWJsZUNvbmZpZ31cbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWRlckFjdGlvblNlY3Rpb24+XG4gICAgICA8L1N0eWxlZExheWVyUGFuZWxIZWFkZXI+XG4gICAgKTtcbiAgfTtcblxuICBMYXllclBhbmVsSGVhZGVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuICByZXR1cm4gTGF5ZXJQYW5lbEhlYWRlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJQYW5lbEhlYWRlckZhY3Rvcnk7XG4iXX0=