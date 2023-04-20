"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PureFeatureActionPanelFactory = PureFeatureActionPanelFactory;
exports["default"] = FeatureActionPanelFactory;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _actionPanel = _interopRequireWildcard(require("../common/action-panel"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icons = require("../common/icons");

var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));

var _templateObject;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var LAYOVER_OFFSET = 4;

var StyledActionsLayer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  .layer-panel-item-disabled {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.textColor;
});

var defaultActionIcons = {
  remove: _icons.Trash,
  layer: _icons.Layers,
  copy: _icons.Copy,
  copied: _icons.Checkmark
};
PureFeatureActionPanelFactory.deps = [];

function PureFeatureActionPanelFactory() {
  var FeatureActionPanel = function FeatureActionPanel(_ref) {
    var className = _ref.className,
        datasets = _ref.datasets,
        selectedFeature = _ref.selectedFeature,
        position = _ref.position,
        layers = _ref.layers,
        currentFilter = _ref.currentFilter,
        onToggleLayer = _ref.onToggleLayer,
        onDeleteFeature = _ref.onDeleteFeature,
        _ref$actionIcons = _ref.actionIcons,
        actionIcons = _ref$actionIcons === void 0 ? defaultActionIcons : _ref$actionIcons,
        children = _ref.children;

    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        copied = _useState2[0],
        setCopied = _useState2[1];

    var _ref2 = currentFilter || {},
        _ref2$layerId = _ref2.layerId,
        layerId = _ref2$layerId === void 0 ? [] : _ref2$layerId;

    var intl = (0, _reactIntl.useIntl)();
    var copyGeometry = (0, _react.useCallback)(function () {
      if (selectedFeature !== null && selectedFeature !== void 0 && selectedFeature.geometry) (0, _copyToClipboard["default"])(JSON.stringify(selectedFeature.geometry));
      setCopied(true);
    }, [selectedFeature === null || selectedFeature === void 0 ? void 0 : selectedFeature.geometry]);

    if (!position) {
      return null;
    }

    return /*#__PURE__*/_react["default"].createElement(StyledActionsLayer, {
      className: (0, _classnames["default"])('feature-action-panel', className),
      style: {
        top: "".concat(position.y + LAYOVER_OFFSET, "px"),
        left: "".concat(position.x + LAYOVER_OFFSET, "px")
      }
    }, /*#__PURE__*/_react["default"].createElement(_actionPanel["default"], null, /*#__PURE__*/_react["default"].createElement(_actionPanel.ActionPanelItem, {
      className: "editor-layers-list",
      label: intl.formatMessage({
        id: 'editor.filterLayer',
        defaultMessage: 'Filter layers'
      }),
      Icon: actionIcons.layer
    }, layers.length ? layers.map(function (layer, index) {
      return /*#__PURE__*/_react["default"].createElement(_actionPanel.ActionPanelItem, {
        key: index,
        label: layer.config.label // @ts-ignore
        ,
        color: datasets[layer.config.dataId].color,
        isSelection: true,
        isActive: layerId.includes(layer.id),
        onClick: function onClick() {
          return onToggleLayer(layer);
        },
        className: "layer-panel-item"
      });
    }) : /*#__PURE__*/_react["default"].createElement(_actionPanel.ActionPanelItem, {
      key: 'no-layers',
      label: intl.formatMessage({
        id: 'editor.noLayersToFilter',
        defaultMessage: 'No layers to filter'
      }),
      isSelection: false,
      isActive: false,
      className: "layer-panel-item-disabled"
    })), /*#__PURE__*/_react["default"].createElement(_actionPanel.ActionPanelItem, {
      label: intl.formatMessage({
        id: 'editor.copyGeometry',
        defaultMessage: 'Copy Geometry'
      }),
      className: "delete-panel-item",
      Icon: copied ? actionIcons.copied : actionIcons.copy,
      onClick: copyGeometry
    }), children, /*#__PURE__*/_react["default"].createElement(_actionPanel.ActionPanelItem, {
      label: intl.formatMessage({
        id: 'tooltip.delete',
        defaultMessage: 'Delete'
      }),
      className: "delete-panel-item",
      Icon: actionIcons.remove,
      onClick: onDeleteFeature
    })));
  };

  FeatureActionPanel.displayName = 'FeatureActionPanel';
  FeatureActionPanel.defaultProps = {
    position: null,
    actionIcons: defaultActionIcons
  };
  return FeatureActionPanel;
}

FeatureActionPanelFactory.deps = PureFeatureActionPanelFactory.deps;

function FeatureActionPanelFactory() {
  var PureFeatureActionPanel = PureFeatureActionPanelFactory();
  /**
   * FeatureActionPanel wrapped with a click-outside handler. Note that this needs to be a
   * class component, as react-onclickoutside does not handle functional components.
   */

  var ClickOutsideFeatureActionPanel = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(ClickOutsideFeatureActionPanel, _Component);

    var _super = _createSuper(ClickOutsideFeatureActionPanel);

    function ClickOutsideFeatureActionPanel() {
      (0, _classCallCheck2["default"])(this, ClickOutsideFeatureActionPanel);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(ClickOutsideFeatureActionPanel, [{
      key: "handleClickOutside",
      value: function handleClickOutside(e) {
        var _this$props$onClose, _this$props;

        e.preventDefault();
        e.stopPropagation();
        (_this$props$onClose = (_this$props = this.props).onClose) === null || _this$props$onClose === void 0 ? void 0 : _this$props$onClose.call(_this$props);
      }
    }, {
      key: "render",
      value: function render() {
        return /*#__PURE__*/_react["default"].createElement(PureFeatureActionPanel, this.props);
      }
    }]);
    return ClickOutsideFeatureActionPanel;
  }(_react.Component);

  var clickOutsideConfig = {
    handleClickOutside: function handleClickOutside() {
      return ClickOutsideFeatureActionPanel.prototype.handleClickOutside;
    }
  };
  return (0, _reactOnclickoutside["default"])(ClickOutsideFeatureActionPanel, clickOutsideConfig);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9lZGl0b3IvZmVhdHVyZS1hY3Rpb24tcGFuZWwudHN4Il0sIm5hbWVzIjpbIkxBWU9WRVJfT0ZGU0VUIiwiU3R5bGVkQWN0aW9uc0xheWVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvciIsImRlZmF1bHRBY3Rpb25JY29ucyIsInJlbW92ZSIsIlRyYXNoIiwibGF5ZXIiLCJMYXllcnMiLCJjb3B5IiwiQ29weSIsImNvcGllZCIsIkNoZWNrbWFyayIsIlB1cmVGZWF0dXJlQWN0aW9uUGFuZWxGYWN0b3J5IiwiZGVwcyIsIkZlYXR1cmVBY3Rpb25QYW5lbCIsImNsYXNzTmFtZSIsImRhdGFzZXRzIiwic2VsZWN0ZWRGZWF0dXJlIiwicG9zaXRpb24iLCJsYXllcnMiLCJjdXJyZW50RmlsdGVyIiwib25Ub2dnbGVMYXllciIsIm9uRGVsZXRlRmVhdHVyZSIsImFjdGlvbkljb25zIiwiY2hpbGRyZW4iLCJzZXRDb3BpZWQiLCJsYXllcklkIiwiaW50bCIsImNvcHlHZW9tZXRyeSIsImdlb21ldHJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRvcCIsInkiLCJsZWZ0IiwieCIsImZvcm1hdE1lc3NhZ2UiLCJpZCIsImRlZmF1bHRNZXNzYWdlIiwibGVuZ3RoIiwibWFwIiwiaW5kZXgiLCJjb25maWciLCJsYWJlbCIsImRhdGFJZCIsImNvbG9yIiwiaW5jbHVkZXMiLCJkaXNwbGF5TmFtZSIsImRlZmF1bHRQcm9wcyIsIkZlYXR1cmVBY3Rpb25QYW5lbEZhY3RvcnkiLCJQdXJlRmVhdHVyZUFjdGlvblBhbmVsIiwiQ2xpY2tPdXRzaWRlRmVhdHVyZUFjdGlvblBhbmVsIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwib25DbG9zZSIsIkNvbXBvbmVudCIsImNsaWNrT3V0c2lkZUNvbmZpZyIsImhhbmRsZUNsaWNrT3V0c2lkZSIsInByb3RvdHlwZSJdLCJtYXBw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a0JBQWtCLEVBQUU7QUFBQSxhQUFNUCw4QkFBOEIsQ0FBQ1EsU0FBL0IsQ0FBeUNELGtCQUEvQztBQUFBO0FBREssR0FBM0I7QUFJQSxTQUFPLHFDQUFlUCw4QkFBZixFQUErQ00sa0JBQS9DLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgQ29tcG9uZW50LCBDb21wb25lbnRUeXBlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZUludGx9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5pbXBvcnQgQWN0aW9uUGFuZWwsIHtBY3Rpb25QYW5lbEl0ZW19IGZyb20gJy4uL2NvbW1vbi9hY3Rpb24tcGFuZWwnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgb25DbGlja091dHNpZGUgZnJvbSAncmVhY3Qtb25jbGlja291dHNpZGUnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQge1RyYXNoLCBMYXllcnMsIENvcHksIENoZWNrbWFya30gZnJvbSAnLi4vY29tbW9uL2ljb25zJztcbmltcG9ydCBjb3B5IGZyb20gJ2NvcHktdG8tY2xpcGJvYXJkJztcbmltcG9ydCB7TGF5ZXJ9IGZyb20gJ0BrZXBsZXIuZ2wvbGF5ZXJzJztcbmltcG9ydCB7RmlsdGVyfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcbmltcG9ydCB7RmVhdHVyZX0gZnJvbSAnQG5lYnVsYS5nbC9lZGl0LW1vZGVzJztcbmltcG9ydCB7RGF0YXNldHN9IGZyb20gJ0BrZXBsZXIuZ2wvdGFibGUnO1xuXG5jb25zdCBMQVlPVkVSX09GRlNFVCA9IDQ7XG5cbmNvbnN0IFN0eWxlZEFjdGlvbnNMYXllciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLmxheWVyLXBhbmVsLWl0ZW0tZGlzYWJsZWQge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIH1cbmA7XG5jb25zdCBkZWZhdWx0QWN0aW9uSWNvbnMgPSB7XG4gIHJlbW92ZTogVHJhc2gsXG4gIGxheWVyOiBMYXllcnMsXG4gIGNvcHk6IENvcHksXG4gIGNvcGllZDogQ2hlY2ttYXJrXG59O1xuUHVyZUZlYXR1cmVBY3Rpb25QYW5lbEZhY3RvcnkuZGVwcyA9IFtdO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVBY3Rpb25QYW5lbFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBkYXRhc2V0czogRGF0YXNldHM7XG4gIHNlbGVjdGVkRmVhdHVyZTogRmVhdHVyZSB8IG51bGw7XG4gIHBvc2l0aW9uOiB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgfSB8IG51bGw7XG4gIGxheWVyczogTGF5ZXJbXTtcbiAgY3VycmVudEZpbHRlcj86IEZpbHRlcjtcbiAgb25Ub2dnbGVMYXllcjogKGxheWVyOiBMYXllcikgPT4gdm9pZDtcbiAgb25EZWxldGVGZWF0dXJlOiAoKSA9PiB2b2lkO1xuICBvbkNsb3NlPzogKCkgPT4gdm9pZDtcbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGU7XG4gIGFjdGlvbkljb25zPzoge1xuICAgIFtpZDogc3RyaW5nXTogUmVhY3QuRWxlbWVudFR5cGU7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQdXJlRmVhdHVyZUFjdGlvblBhbmVsRmFjdG9yeSgpOiBSZWFjdC5GQzxGZWF0dXJlQWN0aW9uUGFuZWxQcm9wcz4ge1xuICBjb25zdCBGZWF0dXJlQWN0aW9uUGFuZWwgPSAoe1xuICAgIGNsYXNzTmFtZSxcbiAgICBkYXRhc2V0cyxcbiAgICBzZWxlY3RlZEZlYXR1cmUsXG4gICAgcG9zaXRpb24sXG4gICAgbGF5ZXJzLFxuICAgIGN1cnJlbnRGaWx0ZXIsXG4gICAgb25Ub2dnbGVMYXllcixcbiAgICBvbkRlbGV0ZUZlYXR1cmUsXG4gICAgYWN0aW9uSWNvbnMgPSBkZWZhdWx0QWN0aW9uSWNvbnMsXG4gICAgY2hpbGRyZW5cbiAgfTogRmVhdHVyZUFjdGlvblBhbmVsUHJvcHMpID0+IHtcbiAgICBjb25zdCBbY29waWVkLCBzZXRDb3BpZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHtsYXllcklkID0gW119ID0gY3VycmVudEZpbHRlciB8fCB7fTtcbiAgICBjb25zdCBpbnRsID0gdXNlSW50bCgpO1xuXG4gICAgY29uc3QgY29weUdlb21ldHJ5ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgaWYgKHNlbGVjdGVkRmVhdHVyZT8uZ2VvbWV0cnkpIGNvcHkoSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRGZWF0dXJlLmdlb21ldHJ5KSk7XG4gICAgICBzZXRDb3BpZWQodHJ1ZSk7XG4gICAgfSwgW3NlbGVjdGVkRmVhdHVyZT8uZ2VvbWV0cnldKTtcblxuICAgIGlmICghcG9zaXRpb24pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkQWN0aW9uc0xheWVyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnZmVhdHVyZS1hY3Rpb24tcGFuZWwnLCBjbGFzc05hbWUpfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRvcDogYCR7cG9zaXRpb24ueSArIExBWU9WRVJfT0ZGU0VUfXB4YCxcbiAgICAgICAgICBsZWZ0OiBgJHtwb3NpdGlvbi54ICsgTEFZT1ZFUl9PRkZTRVR9cHhgXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxBY3Rpb25QYW5lbD5cbiAgICAgICAgICA8QWN0aW9uUGFuZWxJdGVtXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0b3ItbGF5ZXJzLWxpc3RcIlxuICAgICAgICAgICAgbGFiZWw9e2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6ICdlZGl0b3IuZmlsdGVyTGF5ZXInLCBkZWZhdWx0TWVzc2FnZTogJ0ZpbHRlciBsYXllcnMnfSl9XG4gICAgICAgICAgICBJY29uPXthY3Rpb25JY29ucy5sYXllcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGF5ZXJzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgbGF5ZXJzLm1hcCgobGF5ZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPEFjdGlvblBhbmVsSXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtsYXllci5jb25maWcubGFiZWx9XG4gICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICBjb2xvcj17ZGF0YXNldHNbbGF5ZXIuY29uZmlnLmRhdGFJZF0uY29sb3J9XG4gICAgICAgICAgICAgICAgICBpc1NlbGVjdGlvbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtsYXllcklkLmluY2x1ZGVzKGxheWVyLmlkKX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uVG9nZ2xlTGF5ZXIobGF5ZXIpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGF5ZXItcGFuZWwtaXRlbVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxBY3Rpb25QYW5lbEl0ZW1cbiAgICAgICAgICAgICAgICBrZXk9eyduby1sYXllcnMnfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtpbnRsLmZvcm1hdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgaWQ6ICdlZGl0b3Iubm9MYXllcnNUb0ZpbHRlcicsXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogJ05vIGxheWVycyB0byBmaWx0ZXInXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgaXNTZWxlY3Rpb249e2ZhbHNlfVxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYXllci1wYW5lbC1pdGVtLWRpc2FibGVkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9BY3Rpb25QYW5lbEl0ZW0+XG4gICAgICAgICAgPEFjdGlvblBhbmVsSXRlbVxuICAgICAgICAgICAgbGFiZWw9e2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6ICdlZGl0b3IuY29weUdlb21ldHJ5JywgZGVmYXVsdE1lc3NhZ2U6ICdDb3B5IEdlb21ldHJ5J30pfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVsZXRlLXBhbmVsLWl0ZW1cIlxuICAgICAgICAgICAgSWNvbj17Y29waWVkID8gYWN0aW9uSWNvbnMuY29waWVkIDogYWN0aW9uSWNvbnMuY29weX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2NvcHlHZW9tZXRyeX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8QWN0aW9uUGFuZWxJdGVtXG4gICAgICAgICAgICBsYWJlbD17aW50bC5mb3JtYXRNZXNzYWdlKHtpZDogJ3Rvb2x0aXAuZGVsZXRlJywgZGVmYXVsdE1lc3NhZ2U6ICdEZWxldGUnfSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkZWxldGUtcGFuZWwtaXRlbVwiXG4gICAgICAgICAgICBJY29uPXthY3Rpb25JY29ucy5yZW1vdmV9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkRlbGV0ZUZlYXR1cmV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9BY3Rpb25QYW5lbD5cbiAgICAgIDwvU3R5bGVkQWN0aW9uc0xheWVyPlxuICAgICk7XG4gIH07XG5cbiAgRmVhdHVyZUFjdGlvblBhbmVsLmRpc3BsYXlOYW1lID0gJ0ZlYXR1cmVBY3Rpb25QYW5lbCc7XG4gIEZlYXR1cmVBY3Rpb25QYW5lbC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcG9zaXRpb246IG51bGwsXG4gICAgYWN0aW9uSWNvbnM6IGRlZmF1bHRBY3Rpb25JY29uc1xuICB9O1xuXG4gIHJldHVybiBGZWF0dXJlQWN0aW9uUGFuZWw7XG59XG5cbkZlYXR1cmVBY3Rpb25QYW5lbEZhY3RvcnkuZGVwcyA9IFB1cmVGZWF0dXJlQWN0aW9uUGFuZWxGYWN0b3J5LmRlcHM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlYXR1cmVBY3Rpb25QYW5lbEZhY3RvcnkoKTogQ29tcG9uZW50VHlwZTxGZWF0dXJlQWN0aW9uUGFuZWxQcm9wcz4ge1xuICBjb25zdCBQdXJlRmVhdHVyZUFjdGlvblBhbmVsID0gUHVyZUZlYXR1cmVBY3Rpb25QYW5lbEZhY3RvcnkoKTtcblxuICAvKipcbiAgICogRmVhdHVyZUFjdGlvblBhbmVsIHdyYXBwZWQgd2l0aCBhIGNsaWNrLW91dHNpZGUgaGFuZGxlci4gTm90ZSB0aGF0IHRoaXMgbmVlZHMgdG8gYmUgYVxuICAgKiBjbGFzcyBjb21wb25lbnQsIGFzIHJlYWN0LW9uY2xpY2tvdXRzaWRlIGRvZXMgbm90IGhhbmRsZSBmdW5jdGlvbmFsIGNvbXBvbmVudHMuXG4gICAqL1xuICBjbGFzcyBDbGlja091dHNpZGVGZWF0dXJlQWN0aW9uUGFuZWwgZXh0ZW5kcyBDb21wb25lbnQ8RmVhdHVyZUFjdGlvblBhbmVsUHJvcHM+IHtcbiAgICBoYW5kbGVDbGlja091dHNpZGUoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMucHJvcHMub25DbG9zZT8uKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxQdXJlRmVhdHVyZUFjdGlvblBhbmVsIHsuLi50aGlzLnByb3BzfSAvPjtcbiAgICB9XG4gIH1cblxuICBjb25zdCBjbGlja091dHNpZGVDb25maWcgPSB7XG4gICAgaGFuZGxlQ2xpY2tPdXRzaWRlOiAoKSA9PiBDbGlja091dHNpZGVGZWF0dXJlQWN0aW9uUGFuZWwucHJvdG90eXBlLmhhbmRsZUNsaWNrT3V0c2lkZVxuICB9O1xuXG4gIHJldHVybiBvbkNsaWNrT3V0c2lkZShDbGlja091dHNpZGVGZWF0dXJlQWN0aW9uUGFuZWwsIGNsaWNrT3V0c2lkZUNvbmZpZyk7XG59XG4iXX0=