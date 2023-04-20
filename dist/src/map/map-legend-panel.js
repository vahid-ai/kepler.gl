"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _icons = require("../common/icons");

var _styledComponents2 = require("../common/styled-components");

var _mapControlTooltip = _interopRequireDefault(require("./map-control-tooltip"));

var _mapControlPanel = _interopRequireDefault(require("./map-control-panel"));

var _mapLegend = _interopRequireDefault(require("./map-legend"));

var _lazyTippy = _interopRequireDefault(require("./lazy-tippy"));

var _reactDom = require("react-dom");

var _constants = require("@kepler.gl/constants");

var _styles = require("@kepler.gl/styles");

var _templateObject, _templateObject2;

MapLegendPanelFactory.deps = [_mapControlTooltip["default"], _mapControlPanel["default"], _mapLegend["default"]];

var PinToBottom = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  bottom: ", "px;\n  right: ", "px;\n  ", ";\n"])), _constants.DIMENSIONS.mapControl.mapLegend.pinned.bottom, function (props) {
  return (props.offsetRight || 0) + _constants.DIMENSIONS.mapControl.mapLegend.pinned.right;
}, _styles.media.portable(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    bottom: 0px;\n    right: 0px;\n    min-width: ", "px;\n    .map-control-panel {\n      min-height: 215px;\n      margin-bottom: 0px;\n    };\n  "])), _constants.DIMENSIONS.mapControl.width + _constants.DIMENSIONS.mapControl.mapLegend.pinned.right));

function MapLegendPanelFactory(MapControlTooltip, MapControlPanel, MapLegend) {
  var defaultActionIcons = {
    legend: _icons.Legend
  };

  var MapLegendPanel = function MapLegendPanel(_ref) {
    var layers = _ref.layers,
        mapControls = _ref.mapControls,
        scale = _ref.scale,
        onToggleMapControl = _ref.onToggleMapControl,
        isExport = _ref.isExport,
        logoComponent = _ref.logoComponent,
        _ref$actionIcons = _ref.actionIcons,
        actionIcons = _ref$actionIcons === void 0 ? defaultActionIcons : _ref$actionIcons,
        mapState = _ref.mapState,
        mapHeight = _ref.mapHeight,
        offsetRight = _ref.offsetRight,
        onToggleSplitMapViewport = _ref.onToggleSplitMapViewport,
        _ref$isViewportUnsync = _ref.isViewportUnsyncAllowed,
        isViewportUnsyncAllowed = _ref$isViewportUnsync === void 0 ? true : _ref$isViewportUnsync;
    var mapLegend = (mapControls === null || mapControls === void 0 ? void 0 : mapControls.mapLegend) || {};

    var _ref2 = mapLegend || {},
        isPinned = _ref2.active;

    var onClick = function onClick() {
      var _mapControls$mapDraw;

      if (mapControls !== null && mapControls !== void 0 && (_mapControls$mapDraw = mapControls.mapDraw) !== null && _mapControls$mapDraw !== void 0 && _mapControls$mapDraw.active) {
        onToggleMapControl('mapDraw');
      }
    };

    var _useState = (0, _react.useState)(null),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        tippyInstance = _useState2[0],
        setTippyInstance = _useState2[1];

    var onCloseClick = function onCloseClick(e) {
      e.preventDefault();
      onToggleMapControl('mapLegend');
    };

    var onPinClick = function onPinClick(e) {
      e.preventDefault();

      if (tippyInstance) {
        // @ts-ignore
        tippyInstance.hide();
      }

      onToggleMapControl('mapLegend');
    };

    if (!mapLegend.show) {
      return null;
    }

    var mapControlPanel = /*#__PURE__*/_react["default"].createElement(MapControlPanel, (0, _extends2["default"])({
      scale: scale,
      header: 'header.layerLegend',
      isPinned: true
    }, isPinned ? {
      onClick: onCloseClick,
      pinnable: false,
      disableClose: false
    } : {
      onPinClick: onPinClick,
      pinnable: true,
      disableClose: true
    }, {
      isExport: isExport,
      logoComponent: logoComponent,
      mapState: mapState,
      onToggleSplitMapViewport: onToggleSplitMapViewport,
      isViewportUnsyncAllowed: isViewportUnsyncAllowed
    }), /*#__PURE__*/_react["default"].createElement(MapLegend, {
      layers: layers,
      mapHeight: mapHeight
    }));

    if (isPinned) {
      // Pinned panel is not supported in export mode
      if (isExport) {
        return mapControlPanel;
      }

      var pinnedPanel = /*#__PURE__*/_react["default"].createElement(PinToBottom, {
        offsetRight: offsetRight
      }, mapControlPanel);

      return /*#__PURE__*/(0, _reactDom.createPortal)(pinnedPanel, document.body);
    }

    return (
      /*#__PURE__*/
      // The outer div is to prevent an accessibility warning from Tippy
      _react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_lazyTippy["default"], {
        interactive: true,
        trigger: "click",
        placement: "left-start",
        onCreate: setTippyInstance,
        render: function render(attrs) {
          return /*#__PURE__*/_react["default"].createElement("div", attrs, mapControlPanel);
        },
        appendTo: "parent"
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(MapControlTooltip, {
        id: "show-legend",
        message: "tooltip.showLegend"
      }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.MapControlButton, {
        className: "map-control-button show-legend",
        onClick: onClick
      }, /*#__PURE__*/_react["default"].createElement(actionIcons.legend, {
        height: "22px"
      }))))))
    );
  };

  MapLegendPanel.displayName = 'MapLegendPanel';
  return MapLegendPanel;
}

var _default = MapLegendPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tYXAvbWFwLWxlZ2VuZC1wYW5lbC50c3giXSwibmFtZXMiOlsiTWFwTGVnZW5kUGFuZWxGYWN0b3J5IiwiZGVwcyIsIk1hcENvbnRyb2xUb29sdGlwRmFjdG9yeSIsIk1hcENvbnRyb2xQYW5lbEZhY3RvcnkiLCJNYXBMZWdlbmRGYWN0b3J5IiwiUGluVG9Cb3R0b20iLCJzdHlsZWQiLCJkaXYiLCJESU1FTlNJT05TIiwibWFwQ29udHJvbCIsIm1hcExlZ2VuZCIsInBpbm5lZCIsImJvdHRvbSIsInByb3BzIiwib2Zmc2V0UmlnaHQiLCJyaWdodCIsIm1lZGlhIiwicG9ydGFibGUiLCJ3aWR0aCIsIk1hcENvbnRyb2xUb29sdGlwIiwiTWFwQ29udHJvbFBhbmVsIiwiTWFwTGVnZW5kIiwiZGVmYXVsdEFjdGlvbkljb25zIiwibGVnZW5kIiwiTGVnZW5kIiwiTWFwTGVnZW5kUGFuZWwiLCJsYXllcnMiLCJtYXBDb250cm9scyIsInNjYWxlIiwib25Ub2dnbGVNYXBDb250cm9sIiwiaXNFeHBvcnQiLCJsb2dvQ29tcG9uZW50IiwiYWN0aW9uSWNvbnMiLCJtYXBTdGF0ZSIsIm1hcEhlaWdodCIsIm9uVG9nZ2xlU3BsaXRNYXBWaWV3cG9ydCIsImlzVmlld3BvcnRVbnN5bmNBbGxvd2VkIiwiaXNQaW5uZWQiLCJhY3RpdmUiLCJvbkNsaWNrIiwibWFwRHJhdyIsInRpcHB5SW5zdGFuY2UiLCJzZXRUaXBweUluc3RhbmNlIiwib25DbG9zZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib25QaW5DbGljayIsImhpZGUiLCJzaG93IiwibWFwQ29udHJvbFBhbmVsIiwicGlubmFibGUiLCJkaXNhYmxlQ2xvc2UiLCJwaW5uZWRQYW5lbCIsImRvY3VtZW50IiwiYm9keSIsImF0dHJzIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUVBOztBQUNBOztB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S0FBVCxFQUFpQk4sZUFBakIsQ0FBSjtBQUFBLFNBTGY7QUFNRSxRQUFBLFFBQVEsRUFBQztBQU5YLHNCQVFFLDBEQUNFLGdDQUFDLGlCQUFEO0FBQW1CLFFBQUEsRUFBRSxFQUFDLGFBQXRCO0FBQW9DLFFBQUEsT0FBTyxFQUFDO0FBQTVDLHNCQUNFLGdDQUFDLG1DQUFEO0FBQWtCLFFBQUEsU0FBUyxFQUFDLGdDQUE1QjtBQUE2RCxRQUFBLE9BQU8sRUFBRVY7QUFBdEUsc0JBQ0UsZ0NBQUMsV0FBRCxDQUFhLE1BQWI7QUFBb0IsUUFBQSxNQUFNLEVBQUM7QUFBM0IsUUFERixDQURGLENBREYsQ0FSRixDQUhGO0FBRkY7QUF1QkQsR0FqR0Q7O0FBbUdBZCxFQUFBQSxjQUFjLENBQUMrQixXQUFmLEdBQTZCLGdCQUE3QjtBQUNBLFNBQU8vQixjQUFQO0FBQ0Q7O2VBRWN6QixxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudFR5cGUsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHtMZWdlbmR9IGZyb20gJy4uL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQge01hcENvbnRyb2xCdXR0b259IGZyb20gJy4uL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTWFwQ29udHJvbFRvb2x0aXBGYWN0b3J5IGZyb20gJy4vbWFwLWNvbnRyb2wtdG9vbHRpcCc7XG5pbXBvcnQgTWFwQ29udHJvbFBhbmVsRmFjdG9yeSBmcm9tICcuL21hcC1jb250cm9sLXBhbmVsJztcbmltcG9ydCBNYXBMZWdlbmRGYWN0b3J5IGZyb20gJy4vbWFwLWxlZ2VuZCc7XG5pbXBvcnQgTGF6eVRpcHB5IGZyb20gJy4vbGF6eS10aXBweSc7XG5pbXBvcnQge2NyZWF0ZVBvcnRhbH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7RElNRU5TSU9OU30gZnJvbSAnQGtlcGxlci5nbC9jb25zdGFudHMnO1xuaW1wb3J0IHtNYXBDb250cm9sLCBNYXBDb250cm9scywgTWFwU3RhdGV9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuaW1wb3J0IHtMYXllcn0gZnJvbSAnQGtlcGxlci5nbC9sYXllcnMnO1xuaW1wb3J0IHttZWRpYX0gZnJvbSAnQGtlcGxlci5nbC9zdHlsZXMnO1xuaW1wb3J0IHtBY3Rpb25IYW5kbGVyLCB0b2dnbGVTcGxpdE1hcFZpZXdwb3J0fSBmcm9tICdAa2VwbGVyLmdsL2FjdGlvbnMnO1xuXG5NYXBMZWdlbmRQYW5lbEZhY3RvcnkuZGVwcyA9IFtNYXBDb250cm9sVG9vbHRpcEZhY3RvcnksIE1hcENvbnRyb2xQYW5lbEZhY3RvcnksIE1hcExlZ2VuZEZhY3RvcnldO1xuXG5leHBvcnQgdHlwZSBNYXBMZWdlbmRQYW5lbEZhY3RvcnlEZXBzID0gW1xuICB0eXBlb2YgTWFwQ29udHJvbFRvb2x0aXBGYWN0b3J5LFxuICB0eXBlb2YgTWFwQ29udHJvbFBhbmVsRmFjdG9yeSxcbiAgdHlwZW9mIE1hcExlZ2VuZEZhY3Rvcnlcbl07XG5pbnRlcmZhY2UgUGluVG9Cb3R0b21Qcm9wcyB7XG4gIG9mZnNldFJpZ2h0PzogbnVtYmVyO1xufVxuXG5jb25zdCBQaW5Ub0JvdHRvbSA9IHN0eWxlZC5kaXY8UGluVG9Cb3R0b21Qcm9wcz5gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAke0RJTUVOU0lPTlMubWFwQ29udHJvbC5tYXBMZWdlbmQucGlubmVkLmJvdHRvbX1weDtcbiAgcmlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLm9mZnNldFJpZ2h0IHx8IDApICsgRElNRU5TSU9OUy5tYXBDb250cm9sLm1hcExlZ2VuZC5waW5uZWQucmlnaHR9cHg7XG4gICR7bWVkaWEucG9ydGFibGVgXG4gICAgYm90dG9tOiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBtaW4td2lkdGg6ICR7RElNRU5TSU9OUy5tYXBDb250cm9sLndpZHRoICsgRElNRU5TSU9OUy5tYXBDb250cm9sLm1hcExlZ2VuZC5waW5uZWQucmlnaHR9cHg7XG4gICAgLm1hcC1jb250cm9sLXBhbmVsIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDIxNXB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIH07XG4gIGB9O1xuYDtcblxuaW50ZXJmYWNlIE1hcExlZ2VuZFBhbmVsSWNvbnMge1xuICBsZWdlbmQ6IENvbXBvbmVudFR5cGU8YW55Pjtcbn1cblxuZXhwb3J0IHR5cGUgTWFwTGVnZW5kUGFuZWxQcm9wcyA9IHtcbiAgbGF5ZXJzOiBSZWFkb25seUFycmF5PExheWVyPjtcbiAgc2NhbGU6IG51bWJlcjtcbiAgb25Ub2dnbGVNYXBDb250cm9sOiAoY29udHJvbDogc3RyaW5nKSA9PiB2b2lkO1xuICBpc0V4cG9ydDogYm9vbGVhbjtcbiAgbG9nb0NvbXBvbmVudDogRWxlbWVudDtcbiAgYWN0aW9uSWNvbnM6IE1hcExlZ2VuZFBhbmVsSWNvbnM7XG4gIG1hcENvbnRyb2xzOiBNYXBDb250cm9scztcbiAgbWFwU3RhdGU/OiBNYXBTdGF0ZTtcbiAgbWFwSGVpZ2h0PzogbnVtYmVyO1xuICBvZmZzZXRSaWdodD86IG51bWJlcjtcbiAgb25Ub2dnbGVTcGxpdE1hcFZpZXdwb3J0PzogQWN0aW9uSGFuZGxlcjx0eXBlb2YgdG9nZ2xlU3BsaXRNYXBWaWV3cG9ydD47XG4gIGlzVmlld3BvcnRVbnN5bmNBbGxvd2VkPzogYm9vbGVhbjtcbn07XG5cbmZ1bmN0aW9uIE1hcExlZ2VuZFBhbmVsRmFjdG9yeShNYXBDb250cm9sVG9vbHRpcCwgTWFwQ29udHJvbFBhbmVsLCBNYXBMZWdlbmQpIHtcbiAgY29uc3QgZGVmYXVsdEFjdGlvbkljb25zID0ge1xuICAgIGxlZ2VuZDogTGVnZW5kXG4gIH07XG5cbiAgY29uc3QgTWFwTGVnZW5kUGFuZWw6IFJlYWN0LkZDPE1hcExlZ2VuZFBhbmVsUHJvcHM+ID0gKHtcbiAgICBsYXllcnMsXG4gICAgbWFwQ29udHJvbHMsXG4gICAgc2NhbGUsXG4gICAgb25Ub2dnbGVNYXBDb250cm9sLFxuICAgIGlzRXhwb3J0LFxuICAgIGxvZ29Db21wb25lbnQsXG4gICAgYWN0aW9uSWNvbnMgPSBkZWZhdWx0QWN0aW9uSWNvbnMsXG4gICAgbWFwU3RhdGUsXG4gICAgbWFwSGVpZ2h0LFxuICAgIG9mZnNldFJpZ2h0LFxuICAgIG9uVG9nZ2xlU3BsaXRNYXBWaWV3cG9ydCxcbiAgICBpc1ZpZXdwb3J0VW5zeW5jQWxsb3dlZCA9IHRydWVcbiAgfSkgPT4ge1xuICAgIGNvbnN0IG1hcExlZ2VuZCA9IG1hcENvbnRyb2xzPy5tYXBMZWdlbmQgfHwgKHt9IGFzIE1hcENvbnRyb2wpO1xuICAgIGNvbnN0IHthY3RpdmU6IGlzUGlubmVkfSA9IG1hcExlZ2VuZCB8fCB7fTtcblxuICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAobWFwQ29udHJvbHM/Lm1hcERyYXc/LmFjdGl2ZSkge1xuICAgICAgICBvblRvZ2dsZU1hcENvbnRyb2woJ21hcERyYXcnKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IFt0aXBweUluc3RhbmNlLCBzZXRUaXBweUluc3RhbmNlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IG9uQ2xvc2VDbGljayA9IGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgb25Ub2dnbGVNYXBDb250cm9sKCdtYXBMZWdlbmQnKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uUGluQ2xpY2sgPSBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aXBweUluc3RhbmNlKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGlwcHlJbnN0YW5jZS5oaWRlKCk7XG4gICAgICB9XG4gICAgICBvblRvZ2dsZU1hcENvbnRyb2woJ21hcExlZ2VuZCcpO1xuICAgIH07XG5cbiAgICBpZiAoIW1hcExlZ2VuZC5zaG93KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgbWFwQ29udHJvbFBhbmVsID0gKFxuICAgICAgPE1hcENvbnRyb2xQYW5lbFxuICAgICAgICBzY2FsZT17c2NhbGV9XG4gICAgICAgIGhlYWRlcj17J2hlYWRlci5sYXllckxlZ2VuZCd9XG4gICAgICAgIGlzUGlubmVkPXt0cnVlfVxuICAgICAgICB7Li4uKGlzUGlubmVkXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIG9uQ2xpY2s6IG9uQ2xvc2VDbGljayxcbiAgICAgICAgICAgICAgcGlubmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICBkaXNhYmxlQ2xvc2U6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiB7XG4gICAgICAgICAgICAgIG9uUGluQ2xpY2ssXG4gICAgICAgICAgICAgIHBpbm5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBkaXNhYmxlQ2xvc2U6IHRydWVcbiAgICAgICAgICAgIH0pfVxuICAgICAgICBpc0V4cG9ydD17aXNFeHBvcnR9XG4gICAgICAgIGxvZ29Db21wb25lbnQ9e2xvZ29Db21wb25lbnR9XG4gICAgICAgIG1hcFN0YXRlPXttYXBTdGF0ZX1cbiAgICAgICAgb25Ub2dnbGVTcGxpdE1hcFZpZXdwb3J0PXtvblRvZ2dsZVNwbGl0TWFwVmlld3BvcnR9XG4gICAgICAgIGlzVmlld3BvcnRVbnN5bmNBbGxvd2VkPXtpc1ZpZXdwb3J0VW5zeW5jQWxsb3dlZH1cbiAgICAgID5cbiAgICAgICAgPE1hcExlZ2VuZCBsYXllcnM9e2xheWVyc30gbWFwSGVpZ2h0PXttYXBIZWlnaHR9IC8+XG4gICAgICA8L01hcENvbnRyb2xQYW5lbD5cbiAgICApO1xuXG4gICAgaWYgKGlzUGlubmVkKSB7XG4gICAgICAvLyBQaW5uZWQgcGFuZWwgaXMgbm90IHN1cHBvcnRlZCBpbiBleHBvcnQgbW9kZVxuICAgICAgaWYgKGlzRXhwb3J0KSB7XG4gICAgICAgIHJldHVybiBtYXBDb250cm9sUGFuZWw7XG4gICAgICB9XG4gICAgICBjb25zdCBwaW5uZWRQYW5lbCA9IDxQaW5Ub0JvdHRvbSBvZmZzZXRSaWdodD17b2Zmc2V0UmlnaHR9PnttYXBDb250cm9sUGFuZWx9PC9QaW5Ub0JvdHRvbT47XG4gICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKHBpbm5lZFBhbmVsLCBkb2N1bWVudC5ib2R5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgLy8gVGhlIG91dGVyIGRpdiBpcyB0byBwcmV2ZW50IGFuIGFjY2Vzc2liaWxpdHkgd2FybmluZyBmcm9tIFRpcHB5XG4gICAgICA8ZGl2PlxuICAgICAgICB7LyogXG4gIC8vIEB0cy1pZ25vcmUgKi99XG4gICAgICAgIDxMYXp5VGlwcHlcbiAgICAgICAgICBpbnRlcmFjdGl2ZT17dHJ1ZX1cbiAgICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIlxuICAgICAgICAgIHBsYWNlbWVudD1cImxlZnQtc3RhcnRcIlxuICAgICAgICAgIG9uQ3JlYXRlPXtzZXRUaXBweUluc3RhbmNlfVxuICAgICAgICAgIHJlbmRlcj17YXR0cnMgPT4gPGRpdiB7Li4uYXR0cnN9PnttYXBDb250cm9sUGFuZWx9PC9kaXY+fVxuICAgICAgICAgIGFwcGVuZFRvPVwicGFyZW50XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TWFwQ29udHJvbFRvb2x0aXAgaWQ9XCJzaG93LWxlZ2VuZFwiIG1lc3NhZ2U9XCJ0b29sdGlwLnNob3dMZWdlbmRcIj5cbiAgICAgICAgICAgICAgPE1hcENvbnRyb2xCdXR0b24gY2xhc3NOYW1lPVwibWFwLWNvbnRyb2wtYnV0dG9uIHNob3ctbGVnZW5kXCIgb25DbGljaz17b25DbGlja30+XG4gICAgICAgICAgICAgICAgPGFjdGlvbkljb25zLmxlZ2VuZCBoZWlnaHQ9XCIyMnB4XCIgLz5cbiAgICAgICAgICAgICAgPC9NYXBDb250cm9sQnV0dG9uPlxuICAgICAgICAgICAgPC9NYXBDb250cm9sVG9vbHRpcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXp5VGlwcHk+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIE1hcExlZ2VuZFBhbmVsLmRpc3BsYXlOYW1lID0gJ01hcExlZ2VuZFBhbmVsJztcbiAgcmV0dXJuIE1hcExlZ2VuZFBhbmVsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYXBMZWdlbmRQYW5lbEZhY3Rvcnk7XG4iXX0=