"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _localization = require("@kepler.gl/localization");

var _utils = require("@kepler.gl/utils");

var _mapLayerGroupColorPicker = _interopRequireDefault(require("./map-layer-group-color-picker"));

var _styledComponents2 = require("../../common/styled-components");

var _templateObject, _templateObject2;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var StyledLayerGroupItem = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  .layer-group__visibility-toggle {\n    margin-right: 12px;\n  }\n"])));

var LayerLabel = (0, _styledComponents["default"])(_styledComponents2.PanelLabelBold)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n"])), function (props) {
  return props.active ? props.theme.textColor : props.theme.labelColor;
});
LayerGroupItemFactory.deps = [_mapLayerGroupColorPicker["default"]];

function LayerGroupItemFactory(LayerGroupColorPicker) {
  var LayerGroupItem = function LayerGroupItem(_ref) {
    var PanelHeaderAction = _ref.PanelHeaderAction,
        onChange = _ref.onChange,
        slug = _ref.slug,
        layers = _ref.layers,
        topLayers = _ref.topLayers,
        actionIcons = _ref.actionIcons,
        color = _ref.color,
        onColorChange = _ref.onColorChange,
        _ref$isVisibilityTogg = _ref.isVisibilityToggleAvailable,
        isVisibilityToggleAvailable = _ref$isVisibilityTogg === void 0 ? true : _ref$isVisibilityTogg,
        _ref$isMoveToTopAvail = _ref.isMoveToTopAvailable,
        isMoveToTopAvailable = _ref$isMoveToTopAvail === void 0 ? true : _ref$isMoveToTopAvail,
        _ref$isColorPickerAva = _ref.isColorPickerAvailable,
        isColorPickerAvailable = _ref$isColorPickerAva === void 0 ? false : _ref$isColorPickerAva;
    var onVisibilityToggle = (0, _react.useCallback)(function () {
      onChange({
        visibleLayerGroups: _objectSpread(_objectSpread({}, layers), {}, (0, _defineProperty2["default"])({}, slug, !layers[slug]))
      });
    }, [onChange, layers, slug]);
    var onMoveToTopToggle = (0, _react.useCallback)(function () {
      onChange({
        topLayerGroups: _objectSpread(_objectSpread({}, topLayers), {}, (0, _defineProperty2["default"])({}, slug, !topLayers[slug]))
      });
    }, [onChange, topLayers, slug]);
    return /*#__PURE__*/_react["default"].createElement(StyledLayerGroupItem, {
      className: "layer-group__select"
    }, isVisibilityToggleAvailable ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.PanelLabelWrapper, null, /*#__PURE__*/_react["default"].createElement(PanelHeaderAction, {
      className: "layer-group__visibility-toggle",
      id: "".concat(slug, "-toggle"),
      tooltip: layers[slug] ? 'tooltip.hide' : 'tooltip.show',
      onClick: onVisibilityToggle,
      IconComponent: layers[slug] ? actionIcons.visible : actionIcons.hidden,
      active: layers[slug],
      flush: true
    }), /*#__PURE__*/_react["default"].createElement(LayerLabel, {
      active: layers[slug]
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: "mapLayers.".concat((0, _utils.camelize)(slug))
    }))) : /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, null, /*#__PURE__*/_react["default"].createElement(LayerLabel, {
      style: {
        marginLeft: '28px'
      },
      active: true
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: "mapLayers.".concat((0, _utils.camelize)(slug))
    }))), /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, {
      className: "layer-group__trailing-actions"
    }, isColorPickerAvailable && color ? /*#__PURE__*/_react["default"].createElement(LayerGroupColorPicker, {
      slug: slug,
      color: color,
      onColorChange: onColorChange,
      extraMarginRight: isMoveToTopAvailable,
      disabled: isVisibilityToggleAvailable && !layers[slug]
    }) : null, isMoveToTopAvailable ? /*#__PURE__*/_react["default"].createElement(PanelHeaderAction, {
      id: "".concat(slug, "-top"),
      tooltip: "tooltip.moveToTop",
      disabled: !layers[slug],
      IconComponent: actionIcons.top,
      active: topLayers[slug],
      onClick: onMoveToTopToggle
    }) : null));
  };

  return LayerGroupItem;
}

var _default = LayerGroupItemFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL21hcC1zdHlsZS1wYW5lbC9tYXAtbGF5ZXItZ3JvdXAtaXRlbS50c3giXSwibmFtZXMiOlsiU3R5bGVkTGF5ZXJHcm91cEl0ZW0iLCJzdHlsZWQiLCJkaXYiLCJMYXllckxhYmVsIiwiUGFuZWxMYWJlbEJvbGQiLCJwcm9wcyIsImFjdGl2ZSIsInRoZW1lIiwidGV4dENvbG9yIiwibGFiZWxDb2xvciIsIkxheWVyR3JvdXBJdGVtRmFjdG9yeSIsImRlcHMiLCJMYXllckdyb3VwQ29sb3JQaWNrZXJGYWN0b3J5IiwiTGF5ZXJHcm91cENvbG9yUGlja2VyIiwiTGF5ZXJHcm91cEl0ZW0iLCJQYW5lbEhlYWRlckFjdGlvbiIsIm9uQ2hhbmdlIiwic2x1ZyIsImxheWVycyIsInRvcExheWVycyIsImFjdGlvbkljb25zIiwiY29sb3IiLCJvbkNvbG9yQ2hhbmdlIiwiaXNWaXNpYmlsaXR5VG9nZ2xlQXZhaWxhYmxlIiwiaXNNb3ZlVG9Ub3BBdmFpbGFibGUiLCJpc0NvbG9yUGlja2VyQXZhaWxhYmxlIiwib25WaXNpYmlsaXR5VG9nZ2xlIiwidmlzaWJsZUxheWVyR3JvdXBzIiwib25Nb3ZlVG9Ub3BUb2dnbGUiLCJ0b3BMYXllckdyb3VwcyIsInZpc2libGUiLCJoaWRkZW4iLCJtYXJnaW5MZWZ0IiwidG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFLQTs7QUFFQTs7Ozs7Ozs7QUFFQSxJQUFNQSxvQkFBb0IsR0FBR0MsNkJBQU9DLEdBQVYsMFJBQTFCOztBQWNBLElBQU1DLFVBQVUsR0FBRyxrQ0FBT0MsaUNBQVAsQ0FBSCwyR0FDTCxVQUFBQyxLQUFLO0FBQUEsU0FBS0EsS0FBSyxDQUFDQyxNQUFOLEdBQWVELEtBQUssQ0FBQ0UsS0FBTixDQUFZQyxTQUEzQixHQUF1Q0gsS0FBSyxDQUFDRSxLQUFOLENBQVlFLFVBQXhEO0FB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QUZUO0FBR0UsTUFBQSxhQUFhLEVBQUVDLGFBSGpCO0FBSUUsTUFBQSxnQkFBZ0IsRUFBRUUsb0JBSnBCO0FBS0UsTUFBQSxRQUFRLEVBQUVELDJCQUEyQixJQUFJLENBQUNMLE1BQU0sQ0FBQ0QsSUFBRDtBQUxsRCxNQURELEdBUUcsSUFUTixFQVVHTyxvQkFBb0IsZ0JBQ25CLGdDQUFDLGlCQUFEO0FBQ0UsTUFBQSxFQUFFLFlBQUtQLElBQUwsU0FESjtBQUVFLE1BQUEsT0FBTyxFQUFDLG1CQUZWO0FBR0UsTUFBQSxRQUFRLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDRCxJQUFELENBSG5CO0FBSUUsTUFBQSxhQUFhLEVBQUVHLFdBQVcsQ0FBQ2EsR0FKN0I7QUFLRSxNQUFBLE1BQU0sRUFBRWQsU0FBUyxDQUFDRixJQUFELENBTG5CO0FBTUUsTUFBQSxPQUFPLEVBQUVXO0FBTlgsTUFEbUIsR0FTakIsSUFuQk4sQ0F2QkYsQ0FERjtBQStDRCxHQTlFRDs7QUFnRkEsU0FBT2QsY0FBUDtBQUNEOztlQUVjSixxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdAa2VwbGVyLmdsL2xvY2FsaXphdGlvbic7XG5pbXBvcnQge2NhbWVsaXplfSBmcm9tICdAa2VwbGVyLmdsL3V0aWxzJztcbmltcG9ydCB7UkdCQ29sb3J9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuaW1wb3J0IHtNYXBDb25maWdDaGFuZ2VVcGRhdGVyQWN0aW9ufSBmcm9tICdAa2VwbGVyLmdsL2FjdGlvbnMnO1xuaW1wb3J0IHtNYXBTdHlsZX0gZnJvbSAnQGtlcGxlci5nbC9yZWR1Y2Vycyc7XG5cbmltcG9ydCBMYXllckdyb3VwQ29sb3JQaWNrZXJGYWN0b3J5IGZyb20gJy4vbWFwLWxheWVyLWdyb3VwLWNvbG9yLXBpY2tlcic7XG5pbXBvcnQge1BhbmVsSGVhZGVyQWN0aW9uUHJvcHMsIFBhbmVsSGVhZGVyQWN0aW9uSWNvbn0gZnJvbSAnLi4vcGFuZWwtaGVhZGVyLWFjdGlvbic7XG5pbXBvcnQge1BhbmVsTGFiZWxCb2xkLCBDZW50ZXJGbGV4Ym94LCBQYW5lbExhYmVsV3JhcHBlcn0gZnJvbSAnLi4vLi4vY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgU3R5bGVkTGF5ZXJHcm91cEl0ZW0gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG5cbiAgLmxheWVyLWdyb3VwX192aXNpYmlsaXR5LXRvZ2dsZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICB9XG5gO1xuXG5jb25zdCBMYXllckxhYmVsID0gc3R5bGVkKFBhbmVsTGFiZWxCb2xkKTx7YWN0aXZlOiBib29sZWFufT5gXG4gIGNvbG9yOiAke3Byb3BzID0+IChwcm9wcy5hY3RpdmUgPyBwcm9wcy50aGVtZS50ZXh0Q29sb3IgOiBwcm9wcy50aGVtZS5sYWJlbENvbG9yKX07XG5gO1xuXG5leHBvcnQgdHlwZSBMYXllckdyb3VwSXRlbUFjdGlvbkljb25zID0ge1xuICB2aXNpYmxlOiBQYW5lbEhlYWRlckFjdGlvbkljb247XG4gIGhpZGRlbjogUGFuZWxIZWFkZXJBY3Rpb25JY29uO1xuICB0b3A6IFBhbmVsSGVhZGVyQWN0aW9uSWNvbjtcbn07XG5cbmV4cG9ydCB0eXBlIExheWVyR3JvdXBJdGVtUHJvcHMgPSB7XG4gIFBhbmVsSGVhZGVyQWN0aW9uOiBSZWFjdC5GQzxQYW5lbEhlYWRlckFjdGlvblByb3BzPjtcbiAgb25DaGFuZ2U6IChwZDogTWFwQ29uZmlnQ2hhbmdlVXBkYXRlckFjdGlvblsncGF5bG9hZCddKSA9PiB2b2lkO1xuICBzbHVnOiBzdHJpbmc7XG4gIGxheWVyczogTWFwU3R5bGVbJ3Zpc2libGVMYXllckdyb3VwcyddO1xuICB0b3BMYXllcnM6IE1hcFN0eWxlWyd0b3BMYXllckdyb3VwcyddO1xuICBhY3Rpb25JY29uczogTGF5ZXJHcm91cEl0ZW1BY3Rpb25JY29ucztcbiAgY29sb3I6IFJHQkNvbG9yIHwgbnVsbDtcbiAgb25Db2xvckNoYW5nZTogKHBkOiBSR0JDb2xvcikgPT4gdm9pZDtcbiAgaXNWaXNpYmlsaXR5VG9nZ2xlQXZhaWxhYmxlPzogYm9vbGVhbjtcbiAgaXNNb3ZlVG9Ub3BBdmFpbGFibGU/OiBib29sZWFuO1xuICBpc0NvbG9yUGlja2VyQXZhaWxhYmxlPzogYm9vbGVhbjtcbn07XG5cbkxheWVyR3JvdXBJdGVtRmFjdG9yeS5kZXBzID0gW0xheWVyR3JvdXBDb2xvclBpY2tlckZhY3RvcnldO1xuXG5mdW5jdGlvbiBMYXllckdyb3VwSXRlbUZhY3RvcnkoTGF5ZXJHcm91cENvbG9yUGlja2VyKSB7XG4gIGNvbnN0IExheWVyR3JvdXBJdGVtOiBSZWFjdC5GQzxMYXllckdyb3VwSXRlbVByb3BzPiA9ICh7XG4gICAgUGFuZWxIZWFkZXJBY3Rpb24sXG4gICAgb25DaGFuZ2UsXG4gICAgc2x1ZyxcbiAgICBsYXllcnMsXG4gICAgdG9wTGF5ZXJzLFxuICAgIGFjdGlvbkljb25zLFxuICAgIGNvbG9yLFxuICAgIG9uQ29sb3JDaGFuZ2UsXG4gICAgaXNWaXNpYmlsaXR5VG9nZ2xlQXZhaWxhYmxlID0gdHJ1ZSxcbiAgICBpc01vdmVUb1RvcEF2YWlsYWJsZSA9IHRydWUsXG4gICAgaXNDb2xvclBpY2tlckF2YWlsYWJsZSA9IGZhbHNlXG4gIH0pID0+IHtcbiAgICBjb25zdCBvblZpc2liaWxpdHlUb2dnbGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICBvbkNoYW5nZSh7XG4gICAgICAgIHZpc2libGVMYXllckdyb3Vwczoge1xuICAgICAgICAgIC4uLmxheWVycyxcbiAgICAgICAgICBbc2x1Z106ICFsYXllcnNbc2x1Z11cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgW29uQ2hhbmdlLCBsYXllcnMsIHNsdWddKTtcblxuICAgIGNvbnN0IG9uTW92ZVRvVG9wVG9nZ2xlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICB0b3BMYXllckdyb3Vwczoge1xuICAgICAgICAgIC4uLnRvcExheWVycyxcbiAgICAgICAgICBbc2x1Z106ICF0b3BMYXllcnNbc2x1Z11cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgW29uQ2hhbmdlLCB0b3BMYXllcnMsIHNsdWddKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkTGF5ZXJHcm91cEl0ZW0gY2xhc3NOYW1lPVwibGF5ZXItZ3JvdXBfX3NlbGVjdFwiPlxuICAgICAgICB7aXNWaXNpYmlsaXR5VG9nZ2xlQXZhaWxhYmxlID8gKFxuICAgICAgICAgIDxQYW5lbExhYmVsV3JhcHBlcj5cbiAgICAgICAgICAgIDxQYW5lbEhlYWRlckFjdGlvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsYXllci1ncm91cF9fdmlzaWJpbGl0eS10b2dnbGVcIlxuICAgICAgICAgICAgICBpZD17YCR7c2x1Z30tdG9nZ2xlYH1cbiAgICAgICAgICAgICAgdG9vbHRpcD17bGF5ZXJzW3NsdWddID8gJ3Rvb2x0aXAuaGlkZScgOiAndG9vbHRpcC5zaG93J31cbiAgICAgICAgICAgICAgb25DbGljaz17b25WaXNpYmlsaXR5VG9nZ2xlfVxuICAgICAgICAgICAgICBJY29uQ29tcG9uZW50PXtsYXllcnNbc2x1Z10gPyBhY3Rpb25JY29ucy52aXNpYmxlIDogYWN0aW9uSWNvbnMuaGlkZGVufVxuICAgICAgICAgICAgICBhY3RpdmU9e2xheWVyc1tzbHVnXX1cbiAgICAgICAgICAgICAgZmx1c2hcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8TGF5ZXJMYWJlbCBhY3RpdmU9e2xheWVyc1tzbHVnXX0+XG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtgbWFwTGF5ZXJzLiR7Y2FtZWxpemUoc2x1Zyl9YH0gLz5cbiAgICAgICAgICAgIDwvTGF5ZXJMYWJlbD5cbiAgICAgICAgICA8L1BhbmVsTGFiZWxXcmFwcGVyPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxDZW50ZXJGbGV4Ym94PlxuICAgICAgICAgICAgPExheWVyTGFiZWwgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMjhweCd9fSBhY3RpdmU9e3RydWV9PlxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17YG1hcExheWVycy4ke2NhbWVsaXplKHNsdWcpfWB9IC8+XG4gICAgICAgICAgICA8L0xheWVyTGFiZWw+XG4gICAgICAgICAgPC9DZW50ZXJGbGV4Ym94PlxuICAgICAgICApfVxuICAgICAgICA8Q2VudGVyRmxleGJveCBjbGFzc05hbWU9XCJsYXllci1ncm91cF9fdHJhaWxpbmctYWN0aW9uc1wiPlxuICAgICAgICAgIHtpc0NvbG9yUGlja2VyQXZhaWxhYmxlICYmIGNvbG9yID8gKFxuICAgICAgICAgICAgPExheWVyR3JvdXBDb2xvclBpY2tlclxuICAgICAgICAgICAgICBzbHVnPXtzbHVnfVxuICAgICAgICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgICAgICAgIG9uQ29sb3JDaGFuZ2U9e29uQ29sb3JDaGFuZ2V9XG4gICAgICAgICAgICAgIGV4dHJhTWFyZ2luUmlnaHQ9e2lzTW92ZVRvVG9wQXZhaWxhYmxlfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNWaXNpYmlsaXR5VG9nZ2xlQXZhaWxhYmxlICYmICFsYXllcnNbc2x1Z119XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHtpc01vdmVUb1RvcEF2YWlsYWJsZSA/IChcbiAgICAgICAgICAgIDxQYW5lbEhlYWRlckFjdGlvblxuICAgICAgICAgICAgICBpZD17YCR7c2x1Z30tdG9wYH1cbiAgICAgICAgICAgICAgdG9vbHRpcD1cInRvb2x0aXAubW92ZVRvVG9wXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFsYXllcnNbc2x1Z119XG4gICAgICAgICAgICAgIEljb25Db21wb25lbnQ9e2FjdGlvbkljb25zLnRvcH1cbiAgICAgICAgICAgICAgYWN0aXZlPXt0b3BMYXllcnNbc2x1Z119XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uTW92ZVRvVG9wVG9nZ2xlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9DZW50ZXJGbGV4Ym94PlxuICAgICAgPC9TdHlsZWRMYXllckdyb3VwSXRlbT5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBMYXllckdyb3VwSXRlbTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJHcm91cEl0ZW1GYWN0b3J5O1xuIl19