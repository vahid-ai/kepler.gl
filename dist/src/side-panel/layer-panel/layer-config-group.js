"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayerConfigGroupLabelFactory = LayerConfigGroupLabelFactory;
exports["default"] = exports.StyledConfigGroupHeader = exports.StyledLayerConfigGroup = exports.ConfigGroupCollapsibleHeader = exports.ConfigGroupCollapsibleContent = exports.StyledLayerConfigGroupAction = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactIntl = require("react-intl");

var _switch = _interopRequireDefault(require("../../common/switch"));

var _infoHelper = _interopRequireDefault(require("../../common/info-helper"));

var _icons = require("../../common/icons");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;

var StyledLayerConfigGroupAction = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (props) {
  return props.theme.textColor;
});

exports.StyledLayerConfigGroupAction = StyledLayerConfigGroupAction;

var ConfigGroupCollapsibleContent = _styledComponents["default"].div.attrs({
  className: 'layer-config-group__content__collapsible'
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  transition: max-height 0.3s ease-out;\n  height: max-content;\n  max-height: 1200px;\n  overflow: auto;\n"])));

exports.ConfigGroupCollapsibleContent = ConfigGroupCollapsibleContent;

var ConfigGroupCollapsibleHeader = _styledComponents["default"].div.attrs({
  className: 'layer-config-group__header__collapsible'
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  overflow: visible;\n  overflow: hidden;\n  max-height: 0;\n"])));

exports.ConfigGroupCollapsibleHeader = ConfigGroupCollapsibleHeader;

var StyledLayerConfigGroup = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  padding-left: ", "px;\n  margin-bottom: ", "px;\n\n  &.disabled {\n    opacity: 0.3;\n    pointer-events: none;\n  }\n  &.collapsed {\n    .layer-config-group__header__collapsible {\n      overflow: visible;\n      max-height: 600px;\n    }\n    .layer-config-group__content {\n      .layer-config-group__content__collapsible {\n        overflow: hidden;\n        max-height: 0;\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.layerConfigGroupPaddingLeft;
}, function (props) {
  return props.theme.layerConfigGroupMarginBottom;
});

exports.StyledLayerConfigGroup = StyledLayerConfigGroup;

var StyledConfigGroupHeader = _styledComponents["default"].div.attrs({
  className: 'layer-config-group__header'
})(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n\n  :hover {\n    cursor: pointer;\n    .layer-config-group__label {\n      color: ", ";\n    }\n\n    .layer-config-group__action {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.textColorHl;
});

exports.StyledConfigGroupHeader = StyledConfigGroupHeader;

var ConfigGroupContent = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  &.disabled {\n    opacity: 0.3;\n    pointer-events: none;\n    * {\n      pointer-events: none;\n    }\n  }\n"])));

LayerConfigGroupLabelFactory.deps = [_infoHelper["default"]];

function LayerConfigGroupLabelFactory(InfoHelper) {
  var StyledLayerConfigGroupLabel = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n    border-left: ", " solid\n      ", ";\n    line-height: 12px;\n    margin-left: ", ";\n    padding-left: ", ";\n\n    display: flex;\n    align-items: center;\n\n    span {\n      color: ", ";\n      font-weight: 500;\n      letter-spacing: 0.2px;\n      text-transform: capitalize;\n      margin-left: ", ";\n      font-size: ", ";\n    }\n  "])), function (props) {
    return props.theme.layerConfigGroupLabelBorderLeft;
  }, function (props) {
    return props.theme.labelColor;
  }, function (props) {
    return props.theme.layerConfigGroupLabelMargin;
  }, function (props) {
    return props.theme.layerConfigGroupLabelPadding;
  }, function (props) {
    return props.theme.textColor;
  }, function (props) {
    return props.theme.layerConfigGroupLabelLabelMargin;
  }, function (props) {
    return props.theme.layerConfigGroupLabelLabelFontSize;
  });

  var LayerConfigGroupLabel = function LayerConfigGroupLabel(_ref) {
    var label = _ref.label,
        description = _ref.description;
    return /*#__PURE__*/_react["default"].createElement(StyledLayerConfigGroupLabel, {
      className: "layer-config-group__label"
    }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
      id: label || 'misc.empty',
      defaultMessage: label
    })), description && /*#__PURE__*/_react["default"].createElement(InfoHelper, {
      description: description,
      id: label
    }));
  };

  return LayerConfigGroupLabel;
}

LayerConfigGroupFactory.deps = [LayerConfigGroupLabelFactory];

function LayerConfigGroupFactory(LayerConfigGroupLabel) {
  var LayerConfigGroup = function LayerConfigGroup(_ref2) {
    var label = _ref2.label,
        children = _ref2.children,
        property = _ref2.property,
        layer = _ref2.layer,
        _onChange2 = _ref2.onChange,
        collapsible = _ref2.collapsible,
        description = _ref2.description,
        disabled = _ref2.disabled,
        expanded = _ref2.expanded;

    var _useState = (0, _react.useState)(!expanded),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        collapsed = _useState2[0],
        toggleCollapsed = _useState2[1];

    var onToggleCollapsed = (0, _react.useCallback)(function () {
      toggleCollapsed(!collapsed);
    }, [collapsed, toggleCollapsed]);
    return /*#__PURE__*/_react["default"].createElement(StyledLayerConfigGroup, {
      className: (0, _classnames["default"])('layer-config-group', {
        collapsed: collapsed,
        disabled: disabled
      })
    }, /*#__PURE__*/_react["default"].createElement(StyledConfigGroupHeader, {
      onClick: onToggleCollapsed
    }, /*#__PURE__*/_react["default"].createElement(LayerConfigGroupLabel, {
      label: label,
      description: description
    }), /*#__PURE__*/_react["default"].createElement(StyledLayerConfigGroupAction, {
      className: "layer-config-group__action"
    }, property ? /*#__PURE__*/_react["default"].createElement(_switch["default"], {
      checked: layer === null || layer === void 0 ? void 0 : layer.config.visConfig[property],
      id: "".concat(layer === null || layer === void 0 ? void 0 : layer.id, "-").concat(property),
      onChange: function onChange() {
        return _onChange2 === null || _onChange2 === void 0 ? void 0 : _onChange2((0, _defineProperty2["default"])({}, property, !(layer !== null && layer !== void 0 && layer.config.visConfig[property])));
      }
    }) : null, collapsible ? /*#__PURE__*/_react["default"].createElement(_icons.VertThreeDots, {
      height: "18px"
    }) : null)), /*#__PURE__*/_react["default"].createElement(ConfigGroupContent, {
      className: (0, _classnames["default"])('layer-config-group__content', {
        disabled: property && !(layer !== null && layer !== void 0 && layer.config.visConfig[property])
      })
    }, children));
  };

  LayerConfigGroup.defaultProps = {
    collapsible: false,
    expanded: false,
    onChange: function onChange() {},
    description: '',
    disabled: false
  };
  return LayerConfigGroup;
}

var _default = LayerConfigGroupFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2xheWVyLXBhbmVsL2xheWVyLWNvbmZpZy1ncm91cC50c3giXSwibmFtZXMiOlsiU3R5bGVkTGF5ZXJDb25maWdHcm91cEFjdGlvbiIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJ0ZXh0Q29sb3IiLCJDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudCIsImF0dHJzIiwiY2xhc3NOYW1lIiwiQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUhlYWRlciIsIlN0eWxlZExheWVyQ29uZmlnR3JvdXAiLCJsYXllckNvbmZpZ0dyb3VwUGFkZGluZ0xlZnQiLCJsYXllckNvbmZpZ0dyb3VwTWFyZ2luQm90dG9tIiwiU3R5bGVkQ29uZmlnR3JvdXBIZWFkZXIiLCJ0ZXh0Q29sb3JIbCIsIkNvbmZpZ0dyb3VwQ29udGVudCIsIkxheWVyQ29uZmlnR3JvdXBMYWJlbEZhY3RvcnkiLCJkZXBzIiwiSW5mb0hlbHBlckZhY3RvcnkiLCJJbmZvSGVscGVyIiwiU3R5bGVkTGF5ZXJDb25maWdHcm91cExhYmVsIiwibGF5ZXJDb25maWdHcm91cExhYmVsQm9yZGVyTGVmdCIsImxhYmVsQ29sb3IiLCJsYXllckNvbmZpZ0dyb3VwTGFiZWxNYXJnaW4iLCJsYXllckNvbmZpZ0dyb3VwTGFiZWxQYWRkaW5nIiwibGF5ZXJDb25maWdHcm91cExhYmVsTGFiZWxNYXJnaW4iLCJsYXllckNvbmZpZ0dyb3VwTGFiZWxMYWJlbEZvbnRTaXplIiwiTGF5ZXJDb25maWdHcm91cExhYmVsIiwibGFiZWwiLCJkZXNjcmlwdGlvbiIsIkxheWVyQ29uZmlnR3JvdXBGYWN0b3J5IiwiTGF5ZXJDb25maWdHcm91cCIsImNoaWxkcmVuIiwicHJvcGVydHkiLCJsYXllciIsIm9uQ2hhbmdlIiwiY29sbGFwc2libGUiLCJkaXNhYmxlZCIsImV4cGFuZGVkIiwiY29sbGFwc2VkIiwidG9nZ2xlQ29sbGFwc2VkIiwib25U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RSxFQUppQjtBQUs5QlEsSUFBQUEsUUFBUSxFQUFFO0FBTG9CLEdBQWhDO0FBT0EsU0FBT04sZ0JBQVA7QUFDRDs7ZUFFY0QsdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFjaywgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICcuLi8uLi9jb21tb24vc3dpdGNoJztcbmltcG9ydCBJbmZvSGVscGVyRmFjdG9yeSBmcm9tICcuLi8uLi9jb21tb24vaW5mby1oZWxwZXInO1xuaW1wb3J0IHtWZXJ0VGhyZWVEb3RzfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMnO1xuaW1wb3J0IHtMYXllcn0gZnJvbSAnQGtlcGxlci5nbC9sYXllcnMnO1xuaW1wb3J0IHtMYXllclZpc0NvbmZpZ30gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5cbnR5cGUgTGF5ZXJDb25maWdHcm91cExhYmVsUHJvcHMgPSB7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbn07XG5cbnR5cGUgTGF5ZXJDb25maWdHcm91cFByb3BzID0ge1xuICBsYXllcj86IExheWVyO1xuICBsYWJlbDogc3RyaW5nO1xuICBwcm9wZXJ0eT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGNvbGxhcHNpYmxlPzogYm9vbGVhbjtcbiAgZXhwYW5kZWQ/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG9uQ2hhbmdlPzogKG5ld1Zpc0NvbmZpZzogUGFydGlhbDxMYXllclZpc0NvbmZpZz4pID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgY29uc3QgU3R5bGVkTGF5ZXJDb25maWdHcm91cEFjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG5gO1xuXG5leHBvcnQgY29uc3QgQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnbGF5ZXItY29uZmlnLWdyb3VwX19jb250ZW50X19jb2xsYXBzaWJsZSdcbn0pYFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuM3MgZWFzZS1vdXQ7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIG1heC1oZWlnaHQ6IDEyMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG5gO1xuXG5leHBvcnQgY29uc3QgQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUhlYWRlciA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdsYXllci1jb25maWctZ3JvdXBfX2hlYWRlcl9fY29sbGFwc2libGUnXG59KWBcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC1oZWlnaHQ6IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkTGF5ZXJDb25maWdHcm91cCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYXllckNvbmZpZ0dyb3VwUGFkZGluZ0xlZnR9cHg7XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGF5ZXJDb25maWdHcm91cE1hcmdpbkJvdHRvbX1weDtcblxuICAmLmRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjM7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cbiAgJi5jb2xsYXBzZWQge1xuICAgIC5sYXllci1jb25maWctZ3JvdXBfX2hlYWRlcl9fY29sbGFwc2libGUge1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgICB9XG4gICAgLmxheWVyLWNvbmZpZy1ncm91cF9fY29udGVudCB7XG4gICAgICAubGF5ZXItY29uZmlnLWdyb3VwX19jb250ZW50X19jb2xsYXBzaWJsZSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkQ29uZmlnR3JvdXBIZWFkZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnbGF5ZXItY29uZmlnLWdyb3VwX19oZWFkZXInXG59KWBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC5sYXllci1jb25maWctZ3JvdXBfX2xhYmVsIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgICB9XG5cbiAgICAubGF5ZXItY29uZmlnLWdyb3VwX19hY3Rpb24ge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgQ29uZmlnR3JvdXBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgJi5kaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICoge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuICB9XG5gO1xuXG5MYXllckNvbmZpZ0dyb3VwTGFiZWxGYWN0b3J5LmRlcHMgPSBbSW5mb0hlbHBlckZhY3RvcnldO1xuXG5leHBvcnQgZnVuY3Rpb24gTGF5ZXJDb25maWdHcm91cExhYmVsRmFjdG9yeShJbmZvSGVscGVyOiBSZXR1cm5UeXBlPHR5cGVvZiBJbmZvSGVscGVyRmFjdG9yeT4pIHtcbiAgY29uc3QgU3R5bGVkTGF5ZXJDb25maWdHcm91cExhYmVsID0gc3R5bGVkLmRpdmBcbiAgICBib3JkZXItbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYXllckNvbmZpZ0dyb3VwTGFiZWxCb3JkZXJMZWZ0fSBzb2xpZFxuICAgICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYWJlbENvbG9yfTtcbiAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYXllckNvbmZpZ0dyb3VwTGFiZWxNYXJnaW59O1xuICAgIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYXllckNvbmZpZ0dyb3VwTGFiZWxQYWRkaW5nfTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIHNwYW4ge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxheWVyQ29uZmlnR3JvdXBMYWJlbExhYmVsTWFyZ2lufTtcbiAgICAgIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYXllckNvbmZpZ0dyb3VwTGFiZWxMYWJlbEZvbnRTaXplfTtcbiAgICB9XG4gIGA7XG5cbiAgY29uc3QgTGF5ZXJDb25maWdHcm91cExhYmVsOiBSZWFjdC5GQzxMYXllckNvbmZpZ0dyb3VwTGFiZWxQcm9wcz4gPSAoe2xhYmVsLCBkZXNjcmlwdGlvbn0pID0+IChcbiAgICA8U3R5bGVkTGF5ZXJDb25maWdHcm91cExhYmVsIGNsYXNzTmFtZT1cImxheWVyLWNvbmZpZy1ncm91cF9fbGFiZWxcIj5cbiAgICAgIDxzcGFuPlxuICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17bGFiZWwgfHwgJ21pc2MuZW1wdHknfSBkZWZhdWx0TWVzc2FnZT17bGFiZWx9IC8+XG4gICAgICA8L3NwYW4+XG4gICAgICB7ZGVzY3JpcHRpb24gJiYgPEluZm9IZWxwZXIgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSBpZD17bGFiZWx9IC8+fVxuICAgIDwvU3R5bGVkTGF5ZXJDb25maWdHcm91cExhYmVsPlxuICApO1xuXG4gIHJldHVybiBMYXllckNvbmZpZ0dyb3VwTGFiZWw7XG59XG5cbkxheWVyQ29uZmlnR3JvdXBGYWN0b3J5LmRlcHMgPSBbTGF5ZXJDb25maWdHcm91cExhYmVsRmFjdG9yeV07XG5cbmZ1bmN0aW9uIExheWVyQ29uZmlnR3JvdXBGYWN0b3J5KFxuICBMYXllckNvbmZpZ0dyb3VwTGFiZWw6IFJldHVyblR5cGU8dHlwZW9mIExheWVyQ29uZmlnR3JvdXBMYWJlbEZhY3Rvcnk+XG4pIHtcbiAgY29uc3QgTGF5ZXJDb25maWdHcm91cDogUmVhY3QuRkM8TGF5ZXJDb25maWdHcm91cFByb3BzPiA9ICh7XG4gICAgbGFiZWwsXG4gICAgY2hpbGRyZW4sXG4gICAgcHJvcGVydHksXG4gICAgbGF5ZXIsXG4gICAgb25DaGFuZ2UsXG4gICAgY29sbGFwc2libGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZGlzYWJsZWQsXG4gICAgZXhwYW5kZWRcbiAgfSkgPT4ge1xuICAgIGNvbnN0IFtjb2xsYXBzZWQsIHRvZ2dsZUNvbGxhcHNlZF0gPSB1c2VTdGF0ZSghZXhwYW5kZWQpO1xuICAgIGNvbnN0IG9uVG9nZ2xlQ29sbGFwc2VkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgdG9nZ2xlQ29sbGFwc2VkKCFjb2xsYXBzZWQpO1xuICAgIH0sIFtjb2xsYXBzZWQsIHRvZ2dsZUNvbGxhcHNlZF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRMYXllckNvbmZpZ0dyb3VwIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbGF5ZXItY29uZmlnLWdyb3VwJywge2NvbGxhcHNlZCwgZGlzYWJsZWR9KX0+XG4gICAgICAgIDxTdHlsZWRDb25maWdHcm91cEhlYWRlciBvbkNsaWNrPXtvblRvZ2dsZUNvbGxhcHNlZH0+XG4gICAgICAgICAgPExheWVyQ29uZmlnR3JvdXBMYWJlbCBsYWJlbD17bGFiZWx9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICA8U3R5bGVkTGF5ZXJDb25maWdHcm91cEFjdGlvbiBjbGFzc05hbWU9XCJsYXllci1jb25maWctZ3JvdXBfX2FjdGlvblwiPlxuICAgICAgICAgICAge3Byb3BlcnR5ID8gKFxuICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17bGF5ZXI/LmNvbmZpZy52aXNDb25maWdbcHJvcGVydHldfVxuICAgICAgICAgICAgICAgIGlkPXtgJHtsYXllcj8uaWR9LSR7cHJvcGVydHl9YH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2U/Lih7W3Byb3BlcnR5XTogIWxheWVyPy5jb25maWcudmlzQ29uZmlnW3Byb3BlcnR5XX0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICB7Y29sbGFwc2libGUgPyA8VmVydFRocmVlRG90cyBoZWlnaHQ9XCIxOHB4XCIgLz4gOiBudWxsfVxuICAgICAgICAgIDwvU3R5bGVkTGF5ZXJDb25maWdHcm91cEFjdGlvbj5cbiAgICAgICAgPC9TdHlsZWRDb25maWdHcm91cEhlYWRlcj5cbiAgICAgICAgPENvbmZpZ0dyb3VwQ29udGVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbGF5ZXItY29uZmlnLWdyb3VwX19jb250ZW50Jywge1xuICAgICAgICAgICAgZGlzYWJsZWQ6IHByb3BlcnR5ICYmICFsYXllcj8uY29uZmlnLnZpc0NvbmZpZ1twcm9wZXJ0eV1cbiAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9Db25maWdHcm91cENvbnRlbnQ+XG4gICAgICA8L1N0eWxlZExheWVyQ29uZmlnR3JvdXA+XG4gICAgKTtcbiAgfTtcblxuICBMYXllckNvbmZpZ0dyb3VwLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjb2xsYXBzaWJsZTogZmFsc2UsXG4gICAgZXhwYW5kZWQ6IGZhbHNlLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgZGlzYWJsZWQ6IGZhbHNlXG4gIH07XG4gIHJldHVybiBMYXllckNvbmZpZ0dyb3VwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXllckNvbmZpZ0dyb3VwRmFjdG9yeTtcbiJdfQ==