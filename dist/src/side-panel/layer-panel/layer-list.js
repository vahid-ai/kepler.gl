"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _layerPanel = _interopRequireDefault(require("./layer-panel"));

var _core = require("@dnd-kit/core");

var _sortable = require("@dnd-kit/sortable");

var _utilities = require("@dnd-kit/utilities");

var _templateObject;

var SortableStyledItem = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  z-index: ", ";\n  transition: ", ";\n  transform: ", ";\n  &.sorting {\n    opacity: 0.3;\n    pointer-events: none;\n  }\n  &.sorting-layers .layer-panel__header {\n    background-color: ", ";\n    font-family: ", ";\n    font-weight: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    *,\n    *:before,\n    *:after {\n      box-sizing: border-box;\n    }\n    .layer__drag-handle {\n      opacity: 1;\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.dropdownWrapperZ + 1;
}, function (props) {
  return props.transition;
}, function (props) {
  return props.transform;
}, function (props) {
  return props.theme.panelBackgroundHover;
}, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.fontWeight;
}, function (props) {
  return props.theme.fontSize;
}, function (props) {
  return props.theme.lineHeight;
}, function (props) {
  return props.theme.textColorHl;
});

LayerListFactory.deps = [_layerPanel["default"]];

function LayerListFactory(LayerPanel) {
  // By wrapping layer panel using a sortable element we don't have to implement the drag and drop logic into the panel itself;
  // Developers can provide any layer panel implementation and it will still be sortable
  var SortableItem = function SortableItem(_ref) {
    var layerId = _ref.layerId,
        layers = _ref.layers,
        layerIndex = _ref.layerIndex,
        panelProps = _ref.panelProps,
        layerActions = _ref.layerActions;

    var _useSortable = (0, _sortable.useSortable)({
      id: layerId
    }),
        attributes = _useSortable.attributes,
        listeners = _useSortable.listeners,
        setNodeRef = _useSortable.setNodeRef,
        isDragging = _useSortable.isDragging,
        transform = _useSortable.transform,
        transition = _useSortable.transition;

    return /*#__PURE__*/_react["default"].createElement(SortableStyledItem, (0, _extends2["default"])({
      ref: setNodeRef,
      className: (0, _classnames["default"])('sortable-layer-items', {
        sorting: isDragging
      }),
      transform: _utilities.CSS.Transform.toString(transform),
      transition: transition
    }, attributes), /*#__PURE__*/_react["default"].createElement(LayerPanel, (0, _extends2["default"])({}, panelProps, layerActions, {
      key: layerId,
      idx: layerIndex,
      layer: layers[layerIndex],
      listeners: listeners
    })));
  };

  var SortableList = function SortableList(_ref2) {
    var containerId = _ref2.containerId,
        sidePanelDndItems = _ref2.sidePanelDndItems,
        children = _ref2.children;

    var _useDroppable = (0, _core.useDroppable)({
      id: containerId
    }),
        setNodeRef = _useDroppable.setNodeRef;

    return /*#__PURE__*/_react["default"].createElement(_sortable.SortableContext, {
      id: containerId,
      items: sidePanelDndItems,
      strategy: _sortable.verticalListSortingStrategy
    }, /*#__PURE__*/_react["default"].createElement("div", {
      ref: setNodeRef
    }, children));
  };

  var LayerList = function LayerList(props) {
    var layers = props.layers,
        datasets = props.datasets,
        layerOrder = props.layerOrder,
        uiStateActions = props.uiStateActions,
        visStateActions = props.visStateActions,
        layerClasses = props.layerClasses,
        _props$isSortable = props.isSortable,
        isSortable = _props$isSortable === void 0 ? true : _props$isSortable;
    var openModal = uiStateActions.toggleModal;
    var layerOrdersToShow = (0, _react.useMemo)(function () {
      return layerOrder.filter(function (layerIdx) {
        return Boolean(layers[layerIdx]) && !layers[layerIdx].config.hidden;
      });
    }, [layers, layerOrder]);
    var sidePanelDndItems = (0, _react.useMemo)(function () {
      return layerOrdersToShow.map(function (layerIdx) {
        return layers[layerIdx].id;
      });
    }, [layerOrdersToShow, layers]);
    var layerTypeOptions = (0, _react.useMemo)(function () {
      return Object.keys(layerClasses).map(function (key) {
        var layer = new layerClasses[key]();
        return {
          id: key,
          label: layer.name,
          icon: layer.layerIcon,
          requireData: layer.requireData
        };
      });
    }, [layerClasses]);
    var layerActions = {
      layerColorUIChange: visStateActions.layerColorUIChange,
      layerConfigChange: visStateActions.layerConfigChange,
      layerVisualChannelConfigChange: visStateActions.layerVisualChannelConfigChange,
      layerTypeChange: visStateActions.layerTypeChange,
      layerVisConfigChange: visStateActions.layerVisConfigChange,
      layerTextLabelChange: visStateActions.layerTextLabelChange,
      removeLayer: visStateActions.removeLayer,
      duplicateLayer: visStateActions.duplicateLayer,
      layerSetIsValid: visStateActions.layerSetIsValid
    };
    var panelProps = {
      datasets: datasets,
      openModal: openModal,
      layerTypeOptions: layerTypeOptions
    };
    return isSortable ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(SortableList, {
      containerId: "sortablelist",
      sidePanelDndItems: sidePanelDndItems
    }, layerOrdersToShow.map(function (layerIdx) {
      return /*#__PURE__*/_react["default"].createElement(SortableItem, {
        key: layers[layerIdx].id,
        layerId: layers[layerIdx].id,
        panelProps: panelProps,
        layerActions: layerActions,
        layers: layers,
        layerIndex: layerIdx
      });
    }))) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, layerOrder.map(function (layerIdx) {
      return layers[layerIdx] && !layers[layerIdx].config.hidden && /*#__PURE__*/_react["default"].createElement(LayerPanel, (0, _extends2["default"])({}, panelProps, layerActions, {
        key: layers[layerIdx].id,
        idx: layerIdx,
        layer: layers[layerIdx],
        isDraggable: false
      }));
    }));
  };

  return LayerList;
}

var _default = LayerListFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2xheWVyLXBhbmVsL2xheWVyLWxpc3QudHN4Il0sIm5hbWVzIjpbIlNvcnRhYmxlU3R5bGVkSXRlbSIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJkcm9wZG93bldyYXBwZXJaIiwidHJhbnNpdGlvbiIsInRyYW5zZm9ybSIsInBhbmVsQmFja2dyb3VuZEhvdmVyIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJ0ZXh0Q29sb3JIbCIsIkxheWVyTGlzdEZhY3RvcnkiLCJkZXBzIiwiTGF5ZXJQYW5lbEZhY3RvcnkiLCJMYXllclBhbmVsIiwiU29ydGFibGVJdGVtIiwibGF5ZXJJZCIsImxheWVycyIsImxheWVySW5kZXgiLCJwYW5lbFByb3BzIiwibGF5ZXJBY3Rpb25zIiwiaWQiLCJhdHRyaWJ1dGVzIiwibGlzdGVuZXJzIiwic2V0Tm9kZVJlZiIsImlzRHJhZ2dpbmciLCJzb3J0aW5nIiwiQ1NTIiwiVHJhbnNmb3JtIiwidG9TdHJpbmciLCJTb3J0YWJsZUxpc3QiLCJjb250YWluZXJJZCIsInNpZGVQYW5lbERuZEl0ZW1zIiwiY2hpbGRyZW4iLCJ2ZXJ0aWNhbExpc3RTb3J0aW5nU3RyYXRlZ3kiLCJMYXllckxpc3QiLCJkYXRhc2V0cyIsImxheWVyT3JkZXIiLCJ1aVN0YXRlQWN0aW9ucyIsInZpc1N0YXRlQWN0aW9ucyIsImxheWVyQ2xhc3NlcyIsImlzU29ydGFibGUiLCJvcGVuTW9kYWwiLCJ0b2dnbGVNb2RhbCIsImxheWVyT3JkZXJzVG9TaG93IiwiZmlsdGVyIiwibGF5ZXJJZHgiLCJCb29sZWFuIiwiY29uZmlnIiwiaGlkZGVuIiwibWFwIiwibGF5ZXJUeXBlT3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJsYXllciIsImxhYmVsIiwibmFtZSIsImljb24iLCJsYXllckljb24iLCJyZXF1aXJlRGF0YSIsImxheWVyQ29sb3JVSUNoYW5nZSIsImxheWVyQ29uZmlnQ2hhbmdlIiwibGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlIiwibGF5ZXJUeXBlQ2hhbmdlIiwibGF5ZXJWaXNDb25maWdDaGFuZ2UiLCJsYXllclRleHRMYWJlbENoYW5nZSIsInJlbW92ZUxheWVyIiwiZHVwbGljYXRlTGF5ZXIiLCJsYXllclNldElzVmFsaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFLQTs7QUFDQTs7QUFDQTs7OztBQW9CQSxJQUFNQSxrQkFBa0IsR0FBR0MsNkJBQU9DLEdBQVYsc2hCQUNYLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsZ0JBQVosR0FBK0IsQ0FBbkM7QUFBQSxDQURNLEVBRVIsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0csVUFBVjtBQUFBLENBRkcsRUFHVCxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDSSxTQUFWO0FBQUEsQ0FISSxFQVNBLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUksb0JBQWhCO0FBQUEsQ0FUTCxFQVVMLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUssVUFBaEI7QUFBQSxDQVZBLEVBV0wsVUFBQU4sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTSxVQUFoQjtBQUFBLENBWEEsRUFZUCxVQUFBUCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlPLFFBQWhCO0FBQUEsQ0FaRSxFQWFMLFVBQUFSLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVEsVUFBaEI7QUFBQSxDQWJBLEVBcUJULFVBQUFULEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVMsV0FBaEI7QUFBQSxDQXJCSSxDQUF4Qjs7QUEwQkFDLGdCQUFnQixD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LFFBQVE7QUFBQSxhQUNON0IsTUFBTSxDQUFDNkIsUUFBRCxDQUFOLElBQ0EsQ0FBQzdCLE1BQU0sQ0FBQzZCLFFBQUQsQ0FBTixDQUFpQkUsTUFBakIsQ0FBd0JDLE1BRHpCLGlCQUVFLGdDQUFDLFVBQUQsZ0NBQ005QixVQUROLEVBRU1DLFlBRk47QUFHRSxRQUFBLEdBQUcsRUFBRUgsTUFBTSxDQUFDNkIsUUFBRCxDQUFOLENBQWlCekIsRUFIeEI7QUFJRSxRQUFBLEdBQUcsRUFBRXlCLFFBSlA7QUFLRSxRQUFBLEtBQUssRUFBRTdCLE1BQU0sQ0FBQzZCLFFBQUQsQ0FMZjtBQU1FLFFBQUEsV0FBVyxFQUFFO0FBTmYsU0FISTtBQUFBLEtBRFQsQ0FESCxDQWxCRjtBQW1DRCxHQXhGRDs7QUF5RkEsU0FBT1gsU0FBUDtBQUNEOztlQUNjeEIsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VNZW1vfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IExheWVyUGFuZWxGYWN0b3J5IGZyb20gJy4vbGF5ZXItcGFuZWwnO1xuaW1wb3J0IHtMYXllciwgTGF5ZXJDbGFzc2VzVHlwZX0gZnJvbSAnQGtlcGxlci5nbC9sYXllcnMnO1xuaW1wb3J0IHtEYXRhc2V0c30gZnJvbSAnQGtlcGxlci5nbC90YWJsZSc7XG5pbXBvcnQge1VJU3RhdGVBY3Rpb25zLCBWaXNTdGF0ZUFjdGlvbnN9IGZyb20gJ0BrZXBsZXIuZ2wvYWN0aW9ucyc7XG5cbmltcG9ydCB7dXNlRHJvcHBhYmxlfSBmcm9tICdAZG5kLWtpdC9jb3JlJztcbmltcG9ydCB7dXNlU29ydGFibGUsIFNvcnRhYmxlQ29udGV4dCwgdmVydGljYWxMaXN0U29ydGluZ1N0cmF0ZWd5fSBmcm9tICdAZG5kLWtpdC9zb3J0YWJsZSc7XG5pbXBvcnQge0NTU30gZnJvbSAnQGRuZC1raXQvdXRpbGl0aWVzJztcblxudHlwZSBMYXllckxpc3RQcm9wcyA9IHtcbiAgZGF0YXNldHM6IERhdGFzZXRzO1xuICBsYXllcnM6IExheWVyW107XG4gIGxheWVyT3JkZXI6IG51bWJlcltdO1xuICBsYXllckNsYXNzZXM6IExheWVyQ2xhc3Nlc1R5cGU7XG4gIGlzU29ydGFibGU/OiBib29sZWFuO1xuICB1aVN0YXRlQWN0aW9uczogdHlwZW9mIFVJU3RhdGVBY3Rpb25zO1xuICB2aXNTdGF0ZUFjdGlvbnM6IHR5cGVvZiBWaXNTdGF0ZUFjdGlvbnM7XG59O1xuXG4vLyBtYWtlIHN1cmUgdGhlIGVsZW1lbnQgaXMgYWx3YXlzIHZpc2libGUgd2hpbGUgaXMgYmVpbmcgZHJhZ2dlZFxuLy8gaXRlbSBiZWluZyBkcmFnZ2VkIGlzIGFwcGVuZGVkIGluIGJvZHksIGhlcmUgdG8gcmVzZXQgaXRzIGdsb2JhbCBzdHlsZVxuXG5pbnRlcmZhY2UgU29ydGFibGVTdHlsZWRJdGVtUHJvcHMge1xuICB0cmFuc2l0aW9uPzogc3RyaW5nO1xuICB0cmFuc2Zvcm0/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFNvcnRhYmxlU3R5bGVkSXRlbSA9IHN0eWxlZC5kaXY8U29ydGFibGVTdHlsZWRJdGVtUHJvcHM+YFxuICB6LWluZGV4OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duV3JhcHBlclogKyAxfTtcbiAgdHJhbnNpdGlvbjogJHtwcm9wcyA9PiBwcm9wcy50cmFuc2l0aW9ufTtcbiAgdHJhbnNmb3JtOiAke3Byb3BzID0+IHByb3BzLnRyYW5zZm9ybX07XG4gICYuc29ydGluZyB7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gICYuc29ydGluZy1sYXllcnMgLmxheWVyLXBhbmVsX19oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kSG92ZXJ9O1xuICAgIGZvbnQtZmFtaWx5OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnRGYW1pbHl9O1xuICAgIGZvbnQtd2VpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnRXZWlnaHR9O1xuICAgIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb250U2l6ZX07XG4gICAgbGluZS1oZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGluZUhlaWdodH07XG4gICAgKixcbiAgICAqOmJlZm9yZSxcbiAgICAqOmFmdGVyIHtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuICAgIC5sYXllcl9fZHJhZy1oYW5kbGUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgICB9XG4gIH1cbmA7XG5cbkxheWVyTGlzdEZhY3RvcnkuZGVwcyA9IFtMYXllclBhbmVsRmFjdG9yeV07XG5cbmZ1bmN0aW9uIExheWVyTGlzdEZhY3RvcnkoTGF5ZXJQYW5lbDogUmV0dXJuVHlwZTx0eXBlb2YgTGF5ZXJQYW5lbEZhY3Rvcnk+KSB7XG4gIC8vIEJ5IHdyYXBwaW5nIGxheWVyIHBhbmVsIHVzaW5nIGEgc29ydGFibGUgZWxlbWVudCB3ZSBkb24ndCBoYXZlIHRvIGltcGxlbWVudCB0aGUgZHJhZyBhbmQgZHJvcCBsb2dpYyBpbnRvIHRoZSBwYW5lbCBpdHNlbGY7XG4gIC8vIERldmVsb3BlcnMgY2FuIHByb3ZpZGUgYW55IGxheWVyIHBhbmVsIGltcGxlbWVudGF0aW9uIGFuZCBpdCB3aWxsIHN0aWxsIGJlIHNvcnRhYmxlXG4gIGNvbnN0IFNvcnRhYmxlSXRlbSA9ICh7bGF5ZXJJZCwgbGF5ZXJzLCBsYXllckluZGV4LCBwYW5lbFByb3BzLCBsYXllckFjdGlvbnN9KSA9PiB7XG4gICAgY29uc3Qge2F0dHJpYnV0ZXMsIGxpc3RlbmVycywgc2V0Tm9kZVJlZiwgaXNEcmFnZ2luZywgdHJhbnNmb3JtLCB0cmFuc2l0aW9ufSA9IHVzZVNvcnRhYmxlKHtcbiAgICAgIGlkOiBsYXllcklkXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFNvcnRhYmxlU3R5bGVkSXRlbVxuICAgICAgICByZWY9e3NldE5vZGVSZWZ9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnc29ydGFibGUtbGF5ZXItaXRlbXMnLCB7c29ydGluZzogaXNEcmFnZ2luZ30pfVxuICAgICAgICB0cmFuc2Zvcm09e0NTUy5UcmFuc2Zvcm0udG9TdHJpbmcodHJhbnNmb3JtKX1cbiAgICAgICAgdHJhbnNpdGlvbj17dHJhbnNpdGlvbn1cbiAgICAgICAgey4uLmF0dHJpYnV0ZXN9XG4gICAgICA+XG4gICAgICAgIDxMYXllclBhbmVsXG4gICAgICAgICAgey4uLnBhbmVsUHJvcHN9XG4gICAgICAgICAgey4uLmxheWVyQWN0aW9uc31cbiAgICAgICAgICBrZXk9e2xheWVySWR9XG4gICAgICAgICAgaWR4PXtsYXllckluZGV4fVxuICAgICAgICAgIGxheWVyPXtsYXllcnNbbGF5ZXJJbmRleF19XG4gICAgICAgICAgbGlzdGVuZXJzPXtsaXN0ZW5lcnN9XG4gICAgICAgIC8+XG4gICAgICA8L1NvcnRhYmxlU3R5bGVkSXRlbT5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFNvcnRhYmxlTGlzdCA9ICh7Y29udGFpbmVySWQsIHNpZGVQYW5lbERuZEl0ZW1zLCBjaGlsZHJlbn0pID0+IHtcbiAgICBjb25zdCB7c2V0Tm9kZVJlZn0gPSB1c2VEcm9wcGFibGUoe2lkOiBjb250YWluZXJJZH0pO1xuICAgIHJldHVybiAoXG4gICAgICA8U29ydGFibGVDb250ZXh0XG4gICAgICAgIGlkPXtjb250YWluZXJJZH1cbiAgICAgICAgaXRlbXM9e3NpZGVQYW5lbERuZEl0ZW1zfVxuICAgICAgICBzdHJhdGVneT17dmVydGljYWxMaXN0U29ydGluZ1N0cmF0ZWd5fVxuICAgICAgPlxuICAgICAgICA8ZGl2IHJlZj17c2V0Tm9kZVJlZn0+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPC9Tb3J0YWJsZUNvbnRleHQ+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBMYXllckxpc3Q6IFJlYWN0LkZDPExheWVyTGlzdFByb3BzPiA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBsYXllcnMsXG4gICAgICBkYXRhc2V0cyxcbiAgICAgIGxheWVyT3JkZXIsXG4gICAgICB1aVN0YXRlQWN0aW9ucyxcbiAgICAgIHZpc1N0YXRlQWN0aW9ucyxcbiAgICAgIGxheWVyQ2xhc3NlcyxcbiAgICAgIGlzU29ydGFibGUgPSB0cnVlXG4gICAgfSA9IHByb3BzO1xuICAgIGNvbnN0IHt0b2dnbGVNb2RhbDogb3Blbk1vZGFsfSA9IHVpU3RhdGVBY3Rpb25zO1xuICAgIGNvbnN0IGxheWVyT3JkZXJzVG9TaG93ID0gdXNlTWVtbyhcbiAgICAgICgpID0+XG4gICAgICAgIGxheWVyT3JkZXIuZmlsdGVyKGxheWVySWR4ID0+IEJvb2xlYW4obGF5ZXJzW2xheWVySWR4XSkgJiYgIWxheWVyc1tsYXllcklkeF0uY29uZmlnLmhpZGRlbiksXG4gICAgICBbbGF5ZXJzLCBsYXllck9yZGVyXVxuICAgICk7XG5cbiAgICBjb25zdCBzaWRlUGFuZWxEbmRJdGVtcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgcmV0dXJuIGxheWVyT3JkZXJzVG9TaG93Lm1hcChsYXllcklkeCA9PiBsYXllcnNbbGF5ZXJJZHhdLmlkKTtcbiAgICB9LCBbbGF5ZXJPcmRlcnNUb1Nob3csIGxheWVyc10pO1xuXG4gICAgY29uc3QgbGF5ZXJUeXBlT3B0aW9ucyA9IHVzZU1lbW8oXG4gICAgICAoKSA9PlxuICAgICAgICBPYmplY3Qua2V5cyhsYXllckNsYXNzZXMpLm1hcChrZXkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxheWVyID0gbmV3IGxheWVyQ2xhc3Nlc1trZXldKCk7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBrZXksXG4gICAgICAgICAgICBsYWJlbDogbGF5ZXIubmFtZSxcbiAgICAgICAgICAgIGljb246IGxheWVyLmxheWVySWNvbixcbiAgICAgICAgICAgIHJlcXVpcmVEYXRhOiBsYXllci5yZXF1aXJlRGF0YVxuICAgICAgICAgIH07XG4gICAgICAgIH0pLFxuICAgICAgW2xheWVyQ2xhc3Nlc11cbiAgICApO1xuXG4gICAgY29uc3QgbGF5ZXJBY3Rpb25zID0ge1xuICAgICAgbGF5ZXJDb2xvclVJQ2hhbmdlOiB2aXNTdGF0ZUFjdGlvbnMubGF5ZXJDb2xvclVJQ2hhbmdlLFxuICAgICAgbGF5ZXJDb25maWdDaGFuZ2U6IHZpc1N0YXRlQWN0aW9ucy5sYXllckNvbmZpZ0NoYW5nZSxcbiAgICAgIGxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmxheWVyVmlzdWFsQ2hhbm5lbENvbmZpZ0NoYW5nZSxcbiAgICAgIGxheWVyVHlwZUNoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmxheWVyVHlwZUNoYW5nZSxcbiAgICAgIGxheWVyVmlzQ29uZmlnQ2hhbmdlOiB2aXNTdGF0ZUFjdGlvbnMubGF5ZXJWaXNDb25maWdDaGFuZ2UsXG4gICAgICBsYXllclRleHRMYWJlbENoYW5nZTogdmlzU3RhdGVBY3Rpb25zLmxheWVyVGV4dExhYmVsQ2hhbmdlLFxuICAgICAgcmVtb3ZlTGF5ZXI6IHZpc1N0YXRlQWN0aW9ucy5yZW1vdmVMYXllcixcbiAgICAgIGR1cGxpY2F0ZUxheWVyOiB2aXNTdGF0ZUFjdGlvbnMuZHVwbGljYXRlTGF5ZXIsXG4gICAgICBsYXllclNldElzVmFsaWQ6IHZpc1N0YXRlQWN0aW9ucy5sYXllclNldElzVmFsaWRcbiAgICB9O1xuXG4gICAgY29uc3QgcGFuZWxQcm9wcyA9IHtcbiAgICAgIGRhdGFzZXRzLFxuICAgICAgb3Blbk1vZGFsLFxuICAgICAgbGF5ZXJUeXBlT3B0aW9uc1xuICAgIH07XG5cbiAgICByZXR1cm4gaXNTb3J0YWJsZSA/IChcbiAgICAgIDw+XG4gICAgICAgIDxTb3J0YWJsZUxpc3QgY29udGFpbmVySWQ9XCJzb3J0YWJsZWxpc3RcIiBzaWRlUGFuZWxEbmRJdGVtcz17c2lkZVBhbmVsRG5kSXRlbXN9PlxuICAgICAgICAgIHsvKiB3YXJuaW5nOiBjb250YWluZXJJZCBzaG91bGQgYmUgc2ltaWxhciB0byB0aGUgZmlyc3Qga2V5IGluIGRuZEl0ZW1zIGRlZmluZWQgaW4ga2VwbGVyLWdsLmpzKi99XG5cbiAgICAgICAgICB7bGF5ZXJPcmRlcnNUb1Nob3cubWFwKGxheWVySWR4ID0+IChcbiAgICAgICAgICAgIDxTb3J0YWJsZUl0ZW1cbiAgICAgICAgICAgICAga2V5PXtsYXllcnNbbGF5ZXJJZHhdLmlkfVxuICAgICAgICAgICAgICBsYXllcklkPXtsYXllcnNbbGF5ZXJJZHhdLmlkfVxuICAgICAgICAgICAgICBwYW5lbFByb3BzPXtwYW5lbFByb3BzfVxuICAgICAgICAgICAgICBsYXllckFjdGlvbnM9e2xheWVyQWN0aW9uc31cbiAgICAgICAgICAgICAgbGF5ZXJzPXtsYXllcnN9XG4gICAgICAgICAgICAgIGxheWVySW5kZXg9e2xheWVySWR4fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Tb3J0YWJsZUxpc3Q+XG4gICAgICA8Lz5cbiAgICApIDogKFxuICAgICAgPD5cbiAgICAgICAge2xheWVyT3JkZXIubWFwKFxuICAgICAgICAgIGxheWVySWR4ID0+XG4gICAgICAgICAgICBsYXllcnNbbGF5ZXJJZHhdICYmXG4gICAgICAgICAgICAhbGF5ZXJzW2xheWVySWR4XS5jb25maWcuaGlkZGVuICYmIChcbiAgICAgICAgICAgICAgPExheWVyUGFuZWxcbiAgICAgICAgICAgICAgICB7Li4ucGFuZWxQcm9wc31cbiAgICAgICAgICAgICAgICB7Li4ubGF5ZXJBY3Rpb25zfVxuICAgICAgICAgICAgICAgIGtleT17bGF5ZXJzW2xheWVySWR4XS5pZH1cbiAgICAgICAgICAgICAgICBpZHg9e2xheWVySWR4fVxuICAgICAgICAgICAgICAgIGxheWVyPXtsYXllcnNbbGF5ZXJJZHhdfVxuICAgICAgICAgICAgICAgIGlzRHJhZ2dhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH07XG4gIHJldHVybiBMYXllckxpc3Q7XG59XG5leHBvcnQgZGVmYXVsdCBMYXllckxpc3RGYWN0b3J5O1xuIl19