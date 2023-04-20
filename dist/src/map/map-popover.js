"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectedFeature = getSelectedFeature;
exports["default"] = MapPopoverFactory;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _mapPopoverContent = _interopRequireDefault(require("./map-popover-content"));

var _icons = require("../common/icons");

var _reactIntl = require("react-intl");

var _localization = require("@kepler.gl/localization");

var _headless = _interopRequireDefault(require("@tippyjs/react/headless"));

var _ = require("../");

var _layers = require("@kepler.gl/layers");

var _utils = require("@kepler.gl/utils");

var _constants = require("@kepler.gl/constants");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SELECTABLE_LAYERS = [_constants.LAYER_TYPES.hexagonId, _constants.LAYER_TYPES.geojson];
var MAX_WIDTH = 500;
var MAX_HEIGHT = 600;

var StyledMapPopover = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  max-width: ", "px;\n  max-height: ", "px;\n  padding: 14px;\n  & > * + * {\n    margin-top: 6px;\n  }\n  ", ";\n  font-family: ", ";\n  font-size: 11px;\n  font-weight: 500;\n  background-color: ", ";\n  color: ", ";\n  z-index: 1000;\n  overflow-x: auto;\n  box-shadow: ", ";\n\n  :hover {\n    background-color: ", ";\n  }\n\n  .primary-label {\n    color: ", ";\n    font-size: 10px;\n  }\n\n  .map-popover__layer-info,\n  .coordingate-hover-info {\n    & > * + * {\n      margin-top: 7px;\n    }\n  }\n\n  table {\n    width: auto;\n    display: grid;\n    border-collapse: collapse;\n    row-gap: 5px;\n    column-gap: 5px;\n  }\n\n  .coordingate-hover-info > table {\n    grid-template-columns: auto auto auto;\n  }\n  .map-popover__layer-info > table {\n    grid-template-columns: auto auto;\n  }\n\n  tbody,\n  tr {\n    display: contents;\n  }\n\n  td {\n    border-color: transparent;\n    color: ", ";\n  }\n\n  td.row__value {\n    text-align: right;\n    font-weight: 500;\n    color: ", ";\n  }\n"])), MAX_WIDTH, MAX_HEIGHT, function (props) {
  return props.theme.scrollBar;
}, function (props) {
  return props.theme.fontFamily;
}, function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.panelBoxShadow;
}, function (props) {
  return "".concat(props.theme.panelBackground, "dd");
}, function (props) {
  return props.theme.notificationColors.success;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColorHl;
});

var PinnedButtons = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  justify-items: center;\n  & > * + * {\n    margin-left: 10px;\n  }\n"])));

var PopoverContent = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  & > * + * {\n    margin-top: 12px;\n  }\n"])));

var StyledIcon = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n\n  :hover {\n    cursor: pointer;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.activeColor;
}, function (props) {
  return props.theme.linkBtnColor;
});

var StyledSelectGeometry = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  svg {\n    margin-right: 6px;\n  }\n\n  :hover {\n    cursor: pointer;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.textColorHl;
}, function (props) {
  return props.theme.linkBtnColor;
});

MapPopoverFactory.deps = [_mapPopoverContent["default"]];

function createVirtualReference(container, x, y) {
  var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var bounds = container && container.getBoundingClientRect ? container.getBoundingClientRect() : {};
  var left = (bounds.left || 0) + x - size / 2;
  var top = (bounds.top || 0) + y - size / 2;
  return {
    left: left,
    top: top,
    right: left + size,
    bottom: top + size,
    width: size,
    height: size,
    // These properties are present to meet the DOMRect interface
    y: top,
    x: left,
    toJSON: function toJSON() {
      return this;
    }
  };
}

function getOffsetForPlacement(_ref) {
  var placement = _ref.placement,
      reference = _ref.reference,
      popper = _ref.popper;
  var gap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

  switch (placement) {
    case 'top-start':
    case 'bottom-start':
      return [gap, gap];

    case 'top-end':
    case 'bottom-end':
      return [-gap, gap];

    default:
      return [0, 0];
  }
}

function getPopperOptions(container) {
  return {
    modifiers: [{
      name: 'preventOverflow',
      options: {
        boundary: container
      }
    }]
  };
}

function getSelectedFeature(layerHoverProp) {
  var _layer$config, _layer$config$columns, _layer$config$columns2, _layerHoverProp$data, _layer$config2, _layer$config2$column, _layer$config2$column2, _layerHoverProp$data2;

  var layer = layerHoverProp === null || layerHoverProp === void 0 ? void 0 : layerHoverProp.layer;
  var fieldIdx;
  var selectedFeature;

  switch (layer === null || layer === void 0 ? void 0 : layer.type) {
    case _constants.LAYER_TYPES.hexagonId:
      fieldIdx = (_layer$config = layer.config) === null || _layer$config === void 0 ? void 0 : (_layer$config$columns = _layer$config.columns) === null || _layer$config$columns === void 0 ? void 0 : (_layer$config$columns2 = _layer$config$columns.hex_id) === null || _layer$config$columns2 === void 0 ? void 0 : _layer$config$columns2.fieldIdx;
      selectedFeature = (0, _utils.idToPolygonGeo)({
        id: layerHoverProp === null || layerHoverProp === void 0 ? void 0 : (_layerHoverProp$data = layerHoverProp.data) === null || _layerHoverProp$data === void 0 ? void 0 : _layerHoverProp$data[fieldIdx]
      }, {
        isClosed: true
      });
      break;

    case _constants.LAYER_TYPES.geojson:
      fieldIdx = (_layer$config2 = layer.config) === null || _layer$config2 === void 0 ? void 0 : (_layer$config2$column = _layer$config2.columns) === null || _layer$config2$column === void 0 ? void 0 : (_layer$config2$column2 = _layer$config2$column.geojson) === null || _layer$config2$column2 === void 0 ? void 0 : _layer$config2$column2.fieldIdx;
      selectedFeature = (0, _layers.parseGeoJsonRawFeature)(layerHoverProp === null || layerHoverProp === void 0 ? void 0 : (_layerHoverProp$data2 = layerHoverProp.data) === null || _layerHoverProp$data2 === void 0 ? void 0 : _layerHoverProp$data2[fieldIdx]);
      break;

    default:
      break;
  }

  return _objectSpread(_objectSpread({}, selectedFeature), {}, {
    // unique id should be assigned to features in the editor
    id: (0, _utils.generateHashId)(8)
  });
}

function MapPopoverFactory(MapPopoverContent) {
  var MapPopover = function MapPopover(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        frozen = _ref2.frozen,
        coordinate = _ref2.coordinate,
        layerHoverProp = _ref2.layerHoverProp,
        isBase = _ref2.isBase,
        zoom = _ref2.zoom,
        container = _ref2.container,
        onClose = _ref2.onClose,
        onSetFeatures = _ref2.onSetFeatures,
        setSelectedFeature = _ref2.setSelectedFeature,
        featureCollection = _ref2.featureCollection;

    var _useState = (0, _react.useState)('start'),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        horizontalPlacement = _useState2[0],
        setHorizontalPlacement = _useState2[1];

    var moveLeft = function moveLeft() {
      return setHorizontalPlacement('end');
    };

    var moveRight = function moveRight() {
      return setHorizontalPlacement('start');
    };

    var onSetSelectedFeature = (0, _react.useCallback)(function () {
      var clickContext = {
        mapIndex: 0,
        rightClick: true,
        position: {
          x: x,
          y: y
        }
      };
      var selectedFeature = getSelectedFeature(layerHoverProp);

      if (selectedFeature) {
        setSelectedFeature(selectedFeature, clickContext);
        var updatedFeatures = featureCollection ? [].concat((0, _toConsumableArray2["default"])(featureCollection.features), [selectedFeature]) : [selectedFeature];
        onSetFeatures(updatedFeatures);
      }

      onClose();
    }, [onClose, onSetFeatures, x, y, setSelectedFeature, layerHoverProp, featureCollection]);
    return /*#__PURE__*/_react["default"].createElement(_.RootContext.Consumer, null, function (context) {
      return /*#__PURE__*/_react["default"].createElement(_headless["default"], {
        popperOptions: getPopperOptions(container),
        zIndex: 999
        /* should be below Modal which has zIndex=1000 */
        ,
        visible: true,
        interactive: true // @ts-ignore
        ,
        getReferenceClientRect: function getReferenceClientRect() {
          return createVirtualReference(container, x, y);
        } // @ts-ignore
        ,
        placement: "bottom-".concat(horizontalPlacement) // @ts-ignore
        ,
        offset: getOffsetForPlacement,
        appendTo: (context === null || context === void 0 ? void 0 : context.current) || document.body,
        render: function render(attrs) {
          var _layerHoverProp$layer, _layerHoverProp$layer2;

          return /*#__PURE__*/_react["default"].createElement(StyledMapPopover, (0, _extends2["default"])({}, attrs, {
            className: "map-popover"
          }), frozen ? /*#__PURE__*/_react["default"].createElement(PinnedButtons, null, horizontalPlacement === 'start' && /*#__PURE__*/_react["default"].createElement(StyledIcon, {
            className: "popover-arrow-left",
            onClick: moveLeft
          }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowLeft, null)), /*#__PURE__*/_react["default"].createElement(StyledIcon, {
            className: "popover-pin",
            onClick: onClose
          }, /*#__PURE__*/_react["default"].createElement(_icons.Pin, {
            height: "16px"
          })), horizontalPlacement === 'end' && /*#__PURE__*/_react["default"].createElement(StyledIcon, {
            className: "popover-arrow-right",
            onClick: moveRight
          }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowRight, null)), isBase && /*#__PURE__*/_react["default"].createElement("div", {
            className: "primary-label"
          }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
            id: "mapPopover.primary"
          }))) : null, /*#__PURE__*/_react["default"].createElement(PopoverContent, null, /*#__PURE__*/_react["default"].createElement(MapPopoverContent, {
            coordinate: coordinate,
            zoom: zoom,
            layerHoverProp: layerHoverProp
          })), layerHoverProp !== null && layerHoverProp !== void 0 && (_layerHoverProp$layer = layerHoverProp.layer) !== null && _layerHoverProp$layer !== void 0 && _layerHoverProp$layer.type && SELECTABLE_LAYERS.includes(layerHoverProp === null || layerHoverProp === void 0 ? void 0 : (_layerHoverProp$layer2 = layerHoverProp.layer) === null || _layerHoverProp$layer2 === void 0 ? void 0 : _layerHoverProp$layer2.type) && frozen ? /*#__PURE__*/_react["default"].createElement(StyledSelectGeometry, {
            className: "select-geometry",
            onClick: onSetSelectedFeature
          }, /*#__PURE__*/_react["default"].createElement(_icons.CursorPoint, null), "Select Geometry") : null);
        }
      });
    });
  };

  return (0, _reactIntl.injectIntl)(MapPopover);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tYXAvbWFwLXBvcG92ZXIudHN4Il0sIm5hbWVzIjpbIlNFTEVDVEFCTEVfTEFZRVJTIiwiTEFZRVJfVFlQRVMiLCJoZXhhZ29uSWQiLCJnZW9qc29uIiwiTUFYX1dJRFRIIiwiTUFYX0hFSUdIVCIsIlN0eWxlZE1hcFBvcG92ZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwic2Nyb2xsQmFyIiwiZm9udEZhbWlseSIsInBhbmVsQmFja2dyb3VuZCIsInRleHRDb2xvciIsInBhbmVsQm94U2hhZG93Iiwibm90aWZpY2F0aW9uQ29sb3JzIiwic3VjY2VzcyIsInRleHRDb2xvckhsIiwiUGlubmVkQnV0dG9ucyIsIlBvcG92ZXJDb250ZW50IiwiU3R5bGVkSWNvbiIsImFjdGl2ZUNvbG9yIiwibGlua0J0bkNvbG9yIiwiU3R5bGVkU2VsZWN0R2VvbWV0cnkiLCJNYXBQb3BvdmVyRmFjdG9yeSIsImRlcHMiLCJNYXBQb3BvdmVyQ29udGVudEZhY3RvcnkiLCJjcmVhdGVWaXJ0dWFsUmVmZXJlbmNlIiwiY29udGFpbmVyIiwieCIsInkiLCJzaXplIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGVmdCIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwid2lkdGgiLCJoZWlnaHQiLCJ0b0pTT04iLCJnZXRPZmZzZXRGb3JQbGFjZW1lbnQiLCJwbGFjZW1lbnQiLCJyZWZlcmVuY2UiLCJwb3BwZXIiLCJnYXAiLCJnZXRQb3BwZXJPcHRpb25zIiwibW9kaWZpZXJzIiwibmFtZSIsIm9wdGlvbnMiLCJib3VuZGFyeSIsImdldFNlbGVjdGVkRmVhdHVyZSIsImxheWVySG92ZXJQcm9wIiwibGF5ZXIiLCJmaWVsZElkeCIsInNlbGVjdGVkRmVhdHVyZSIsInR5cGUiLCJjb25maWciLCJjb2x1bW5zIiwiaGV4X2lkIiwiaWQiLCJkYXRhIiwiaXNDbG9zZWQiLCJNYXBQb3BvdmVyQ29udGVudCIsIk1hcFBvcG92ZXIiLCJmcm96ZW4iLCJjb29yZGluYXRlIiwiaXNCYXNlIiwiem9vbSIsIm9uQ2xvc2UiLCJvblNldEZlYXR1cmVzIiwic2V0U2VsZWN0ZWRGZWF0dXJlIiwiZmVhdHVyZUNvbGxlY3Rpb24iLCJob3Jpem9udGFsUGxhY2VtZW50Iiwic2V0SG9yaXpvbnRhbFBsYWNlbWVudCIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0Iiwib25TZXRTZWxlY3RlZEZlYXR1cmUiLCJjbGlja0NvbnRleHQiLCJtYXBJbmRleCIsInJpZ2h0Q2xpY2siLCJwb3NpdGlvbiIsInVwZGF0ZWRGZWF0dXJlcyIsImZlYXR1cmVzIiwiY29udGV4dCIsImN1cnJlbnQiLCJkb2N1bWVudCIsImJvZHkiLCJhdHRycyIsImluY2x1ZGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUlBLElBQU1BLGlCQUEyQixHQUFHLENBQUNDLHVCQUFZQyxTQUFiLEVBQXdCRCx1QkFBWUUsT0FBcEMsQ0FBcEM7QUFDQSxJQUFNQyxTQUFTLEdBQUcsR0FBbEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsR0FBbkI7O0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUdDLDZCQUFPQyxHQUFWLDBuQ0FHUEosU0FITyxFQUlOQyxVQUpNLEVBU2xCLFVBQUFJLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsU0FBaEI7QUFBQSxDQVRhLEVBVUwsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxVQUFoQjtBQUFBLENBVkEsRUFhQSxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlHLGVBQWhCO0FBQUEsQ0FiTCxFQWNYLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUksU0FBaEI7QUFBQSxDQWRNLEVB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MEYsUUFBbEIsQ0FBMkJyQyxjQUEzQixhQUEyQkEsY0FBM0IsaURBQTJCQSxjQUFjLENBQUVDLEtBQTNDLDJEQUEyQix1QkFBdUJHLElBQWxELENBREMsSUFFRFMsTUFGQyxnQkFHQyxnQ0FBQyxvQkFBRDtBQUFzQixZQUFBLFNBQVMsRUFBQyxpQkFBaEM7QUFBa0QsWUFBQSxPQUFPLEVBQUVZO0FBQTNELDBCQUNFLGdDQUFDLGtCQUFELE9BREYsb0JBSEQsR0FPRyxJQXJDTixDQURXO0FBQUE7QUFaZixRQURNO0FBQUEsS0FEVixDQURGO0FBNERELEdBL0ZEOztBQWdHQSxTQUFPLDJCQUFXYixVQUFYLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTWFwUG9wb3ZlckNvbnRlbnRGYWN0b3J5IGZyb20gJy4vbWFwLXBvcG92ZXItY29udGVudCc7XG5pbXBvcnQge1BpbiwgQXJyb3dMZWZ0LCBBcnJvd1JpZ2h0LCBDdXJzb3JQb2ludH0gZnJvbSAnLi4vY29tbW9uL2ljb25zJztcbmltcG9ydCB7aW5qZWN0SW50bCwgSW50bFNoYXBlfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnQGtlcGxlci5nbC9sb2NhbGl6YXRpb24nO1xuaW1wb3J0IFRpcHB5IGZyb20gJ0B0aXBweWpzL3JlYWN0L2hlYWRsZXNzJztcbmltcG9ydCB7Um9vdENvbnRleHR9IGZyb20gJy4uLyc7XG5pbXBvcnQge3BhcnNlR2VvSnNvblJhd0ZlYXR1cmV9IGZyb20gJ0BrZXBsZXIuZ2wvbGF5ZXJzJztcbmltcG9ydCB7aWRUb1BvbHlnb25HZW8sIGdlbmVyYXRlSGFzaElkfSBmcm9tICdAa2VwbGVyLmdsL3V0aWxzJztcbmltcG9ydCB7TEFZRVJfVFlQRVN9IGZyb20gJ0BrZXBsZXIuZ2wvY29uc3RhbnRzJztcbmltcG9ydCB7TGF5ZXJIb3ZlclByb3B9IGZyb20gJ0BrZXBsZXIuZ2wvcmVkdWNlcnMnO1xuaW1wb3J0IHtGZWF0dXJlfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcblxuY29uc3QgU0VMRUNUQUJMRV9MQVlFUlM6IHN0cmluZ1tdID0gW0xBWUVSX1RZUEVTLmhleGFnb25JZCwgTEFZRVJfVFlQRVMuZ2VvanNvbl07XG5jb25zdCBNQVhfV0lEVEggPSA1MDA7XG5jb25zdCBNQVhfSEVJR0hUID0gNjAwO1xuXG5jb25zdCBTdHlsZWRNYXBQb3BvdmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LXdpZHRoOiAke01BWF9XSURUSH1weDtcbiAgbWF4LWhlaWdodDogJHtNQVhfSEVJR0hUfXB4O1xuICBwYWRkaW5nOiAxNHB4O1xuICAmID4gKiArICoge1xuICAgIG1hcmdpbi10b3A6IDZweDtcbiAgfVxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNjcm9sbEJhcn07XG4gIGZvbnQtZmFtaWx5OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvbnRGYW1pbHl9O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFuZWxCYWNrZ3JvdW5kfTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgei1pbmRleDogMTAwMDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgYm94LXNoYWRvdzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYW5lbEJveFNoYWRvd307XG5cbiAgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IGAke3Byb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH1kZGB9O1xuICB9XG5cbiAgLnByaW1hcnktbGFiZWwge1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm5vdGlmaWNhdGlvbkNvbG9ycy5zdWNjZXNzfTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cblxuICAubWFwLXBvcG92ZXJfX2xheWVyLWluZm8sXG4gIC5jb29yZGluZ2F0ZS1ob3Zlci1pbmZvIHtcbiAgICAmID4gKiArICoge1xuICAgICAgbWFyZ2luLXRvcDogN3B4O1xuICAgIH1cbiAgfVxuXG4gIHRhYmxlIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgcm93LWdhcDogNXB4O1xuICAgIGNvbHVtbi1nYXA6IDVweDtcbiAgfVxuXG4gIC5jb29yZGluZ2F0ZS1ob3Zlci1pbmZvID4gdGFibGUge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XG4gIH1cbiAgLm1hcC1wb3BvdmVyX19sYXllci1pbmZvID4gdGFibGUge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICB9XG5cbiAgdGJvZHksXG4gIHRyIHtcbiAgICBkaXNwbGF5OiBjb250ZW50cztcbiAgfVxuXG4gIHRkIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvcn07XG4gIH1cblxuICB0ZC5yb3dfX3ZhbHVlIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgfVxuYDtcblxuY29uc3QgUGlubmVkQnV0dG9ucyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAmID4gKiArICoge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBQb3BvdmVyQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICYgPiAqICsgKiB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmFjdGl2ZUNvbG9yfTtcblxuICA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5saW5rQnRuQ29sb3J9O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRTZWxlY3RHZW9tZXRyeSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgc3ZnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgfVxuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxpbmtCdG5Db2xvcn07XG4gIH1cbmA7XG5cbk1hcFBvcG92ZXJGYWN0b3J5LmRlcHMgPSBbTWFwUG9wb3ZlckNvbnRlbnRGYWN0b3J5XTtcblxuZnVuY3Rpb24gY3JlYXRlVmlydHVhbFJlZmVyZW5jZShjb250YWluZXIsIHgsIHksIHNpemUgPSAwKSB7XG4gIGNvbnN0IGJvdW5kcyA9XG4gICAgY29udGFpbmVyICYmIGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QgPyBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiB7fTtcbiAgY29uc3QgbGVmdCA9IChib3VuZHMubGVmdCB8fCAwKSArIHggLSBzaXplIC8gMjtcbiAgY29uc3QgdG9wID0gKGJvdW5kcy50b3AgfHwgMCkgKyB5IC0gc2l6ZSAvIDI7XG4gIHJldHVybiB7XG4gICAgbGVmdCxcbiAgICB0b3AsXG4gICAgcmlnaHQ6IGxlZnQgKyBzaXplLFxuICAgIGJvdHRvbTogdG9wICsgc2l6ZSxcbiAgICB3aWR0aDogc2l6ZSxcbiAgICBoZWlnaHQ6IHNpemUsXG4gICAgLy8gVGhlc2UgcHJvcGVydGllcyBhcmUgcHJlc2VudCB0byBtZWV0IHRoZSBET01SZWN0IGludGVyZmFjZVxuICAgIHk6IHRvcCxcbiAgICB4OiBsZWZ0LFxuICAgIHRvSlNPTigpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0Rm9yUGxhY2VtZW50KHtwbGFjZW1lbnQsIHJlZmVyZW5jZSwgcG9wcGVyfSwgZ2FwID0gMjApIHtcbiAgc3dpdGNoIChwbGFjZW1lbnQpIHtcbiAgICBjYXNlICd0b3Atc3RhcnQnOlxuICAgIGNhc2UgJ2JvdHRvbS1zdGFydCc6XG4gICAgICByZXR1cm4gW2dhcCwgZ2FwXTtcbiAgICBjYXNlICd0b3AtZW5kJzpcbiAgICBjYXNlICdib3R0b20tZW5kJzpcbiAgICAgIHJldHVybiBbLWdhcCwgZ2FwXTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFswLCAwXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQb3BwZXJPcHRpb25zKGNvbnRhaW5lcikge1xuICByZXR1cm4ge1xuICAgIG1vZGlmaWVyczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGJvdW5kYXJ5OiBjb250YWluZXJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGVkRmVhdHVyZShsYXllckhvdmVyUHJvcDogTGF5ZXJIb3ZlclByb3AgfCBudWxsKTogRmVhdHVyZSB8IG51bGwge1xuICBjb25zdCBsYXllciA9IGxheWVySG92ZXJQcm9wPy5sYXllcjtcbiAgbGV0IGZpZWxkSWR4O1xuICBsZXQgc2VsZWN0ZWRGZWF0dXJlO1xuICBzd2l0Y2ggKGxheWVyPy50eXBlKSB7XG4gICAgY2FzZSBMQVlFUl9UWVBFUy5oZXhhZ29uSWQ6XG4gICAgICBmaWVsZElkeCA9IGxheWVyLmNvbmZpZz8uY29sdW1ucz8uaGV4X2lkPy5maWVsZElkeDtcbiAgICAgIHNlbGVjdGVkRmVhdHVyZSA9IGlkVG9Qb2x5Z29uR2VvKHtpZDogbGF5ZXJIb3ZlclByb3A/LmRhdGE/LltmaWVsZElkeF19LCB7aXNDbG9zZWQ6IHRydWV9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgTEFZRVJfVFlQRVMuZ2VvanNvbjpcbiAgICAgIGZpZWxkSWR4ID0gbGF5ZXIuY29uZmlnPy5jb2x1bW5zPy5nZW9qc29uPy5maWVsZElkeDtcbiAgICAgIHNlbGVjdGVkRmVhdHVyZSA9IHBhcnNlR2VvSnNvblJhd0ZlYXR1cmUobGF5ZXJIb3ZlclByb3A/LmRhdGE/LltmaWVsZElkeF0pO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zZWxlY3RlZEZlYXR1cmUsXG4gICAgLy8gdW5pcXVlIGlkIHNob3VsZCBiZSBhc3NpZ25lZCB0byBmZWF0dXJlcyBpbiB0aGUgZWRpdG9yXG4gICAgaWQ6IGdlbmVyYXRlSGFzaElkKDgpXG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIE1hcFBvcG92ZXJQcm9wcyA9IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIGZyb3plbj86IGJvb2xlYW47XG4gIGNvb3JkaW5hdGU6IFtudW1iZXIsIG51bWJlcl0gfCBib29sZWFuO1xuICBsYXllckhvdmVyUHJvcDogTGF5ZXJIb3ZlclByb3AgfCBudWxsO1xuICBpc0Jhc2U/OiBib29sZWFuO1xuICB6b29tOiBudW1iZXI7XG4gIGNvbnRhaW5lcj86IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgb25TZXRGZWF0dXJlczogKGZlYXR1cmVzOiBGZWF0dXJlW10pID0+IGFueTtcbiAgc2V0U2VsZWN0ZWRGZWF0dXJlOiAoZmVhdHVyZTogRmVhdHVyZSwgY2xpY2tDb250ZXh0OiBvYmplY3QpID0+IGFueTtcbiAgZmVhdHVyZUNvbGxlY3Rpb24/OiB7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIGZlYXR1cmVzOiBGZWF0dXJlW107XG4gIH07XG59O1xuXG50eXBlIEludGxQcm9wcyA9IHtcbiAgaW50bDogSW50bFNoYXBlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwUG9wb3ZlckZhY3RvcnkoXG4gIE1hcFBvcG92ZXJDb250ZW50OiBSZXR1cm5UeXBlPHR5cGVvZiBNYXBQb3BvdmVyQ29udGVudEZhY3Rvcnk+XG4pIHtcbiAgY29uc3QgTWFwUG9wb3ZlcjogUmVhY3QuRkM8TWFwUG9wb3ZlclByb3BzICYgSW50bFByb3BzPiA9ICh7XG4gICAgeCxcbiAgICB5LFxuICAgIGZyb3plbixcbiAgICBjb29yZGluYXRlLFxuICAgIGxheWVySG92ZXJQcm9wLFxuICAgIGlzQmFzZSxcbiAgICB6b29tLFxuICAgIGNvbnRhaW5lcixcbiAgICBvbkNsb3NlLFxuICAgIG9uU2V0RmVhdHVyZXMsXG4gICAgc2V0U2VsZWN0ZWRGZWF0dXJlLFxuICAgIGZlYXR1cmVDb2xsZWN0aW9uXG4gIH0pID0+IHtcbiAgICBjb25zdCBbaG9yaXpvbnRhbFBsYWNlbWVudCwgc2V0SG9yaXpvbnRhbFBsYWNlbWVudF0gPSB1c2VTdGF0ZSgnc3RhcnQnKTtcbiAgICBjb25zdCBtb3ZlTGVmdCA9ICgpID0+IHNldEhvcml6b250YWxQbGFjZW1lbnQoJ2VuZCcpO1xuICAgIGNvbnN0IG1vdmVSaWdodCA9ICgpID0+IHNldEhvcml6b250YWxQbGFjZW1lbnQoJ3N0YXJ0Jyk7XG5cbiAgICBjb25zdCBvblNldFNlbGVjdGVkRmVhdHVyZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIGNvbnN0IGNsaWNrQ29udGV4dCA9IHtcbiAgICAgICAgbWFwSW5kZXg6IDAsXG4gICAgICAgIHJpZ2h0Q2xpY2s6IHRydWUsXG4gICAgICAgIHBvc2l0aW9uOiB7eCwgeX1cbiAgICAgIH07XG4gICAgICBjb25zdCBzZWxlY3RlZEZlYXR1cmUgPSBnZXRTZWxlY3RlZEZlYXR1cmUobGF5ZXJIb3ZlclByb3ApO1xuICAgICAgaWYgKHNlbGVjdGVkRmVhdHVyZSkge1xuICAgICAgICBzZXRTZWxlY3RlZEZlYXR1cmUoc2VsZWN0ZWRGZWF0dXJlLCBjbGlja0NvbnRleHQpO1xuICAgICAgICBjb25zdCB1cGRhdGVkRmVhdHVyZXMgPSBmZWF0dXJlQ29sbGVjdGlvblxuICAgICAgICAgID8gWy4uLmZlYXR1cmVDb2xsZWN0aW9uLmZlYXR1cmVzLCBzZWxlY3RlZEZlYXR1cmVdXG4gICAgICAgICAgOiBbc2VsZWN0ZWRGZWF0dXJlXTtcbiAgICAgICAgb25TZXRGZWF0dXJlcyh1cGRhdGVkRmVhdHVyZXMpO1xuICAgICAgfVxuICAgICAgb25DbG9zZSgpO1xuICAgIH0sIFtvbkNsb3NlLCBvblNldEZlYXR1cmVzLCB4LCB5LCBzZXRTZWxlY3RlZEZlYXR1cmUsIGxheWVySG92ZXJQcm9wLCBmZWF0dXJlQ29sbGVjdGlvbl0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSb290Q29udGV4dC5Db25zdW1lcj5cbiAgICAgICAge2NvbnRleHQgPT4gKFxuICAgICAgICAgIDxUaXBweVxuICAgICAgICAgICAgcG9wcGVyT3B0aW9ucz17Z2V0UG9wcGVyT3B0aW9ucyhjb250YWluZXIpfVxuICAgICAgICAgICAgekluZGV4PXs5OTl9IC8qIHNob3VsZCBiZSBiZWxvdyBNb2RhbCB3aGljaCBoYXMgekluZGV4PTEwMDAgKi9cbiAgICAgICAgICAgIHZpc2libGU9e3RydWV9XG4gICAgICAgICAgICBpbnRlcmFjdGl2ZT17dHJ1ZX1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGdldFJlZmVyZW5jZUNsaWVudFJlY3Q9eygpID0+IGNyZWF0ZVZpcnR1YWxSZWZlcmVuY2UoY29udGFpbmVyLCB4LCB5KX1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHBsYWNlbWVudD17YGJvdHRvbS0ke2hvcml6b250YWxQbGFjZW1lbnR9YH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG9mZnNldD17Z2V0T2Zmc2V0Rm9yUGxhY2VtZW50fVxuICAgICAgICAgICAgYXBwZW5kVG89e2NvbnRleHQ/LmN1cnJlbnQgfHwgZG9jdW1lbnQuYm9keX1cbiAgICAgICAgICAgIHJlbmRlcj17YXR0cnMgPT4gKFxuICAgICAgICAgICAgICA8U3R5bGVkTWFwUG9wb3ZlciB7Li4uYXR0cnN9IGNsYXNzTmFtZT1cIm1hcC1wb3BvdmVyXCI+XG4gICAgICAgICAgICAgICAge2Zyb3plbiA/IChcbiAgICAgICAgICAgICAgICAgIDxQaW5uZWRCdXR0b25zPlxuICAgICAgICAgICAgICAgICAgICB7aG9yaXpvbnRhbFBsYWNlbWVudCA9PT0gJ3N0YXJ0JyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZEljb24gY2xhc3NOYW1lPVwicG9wb3Zlci1hcnJvdy1sZWZ0XCIgb25DbGljaz17bW92ZUxlZnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFycm93TGVmdCAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZEljb24gY2xhc3NOYW1lPVwicG9wb3Zlci1waW5cIiBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgICA8UGluIGhlaWdodD1cIjE2cHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZEljb24+XG4gICAgICAgICAgICAgICAgICAgIHtob3Jpem9udGFsUGxhY2VtZW50ID09PSAnZW5kJyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZEljb24gY2xhc3NOYW1lPVwicG9wb3Zlci1hcnJvdy1yaWdodFwiIG9uQ2xpY2s9e21vdmVSaWdodH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dSaWdodCAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkSWNvbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAge2lzQmFzZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmltYXJ5LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cIm1hcFBvcG92ZXIucHJpbWFyeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L1Bpbm5lZEJ1dHRvbnM+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPFBvcG92ZXJDb250ZW50PlxuICAgICAgICAgICAgICAgICAgPE1hcFBvcG92ZXJDb250ZW50XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGU9e2Nvb3JkaW5hdGV9XG4gICAgICAgICAgICAgICAgICAgIHpvb209e3pvb219XG4gICAgICAgICAgICAgICAgICAgIGxheWVySG92ZXJQcm9wPXtsYXllckhvdmVyUHJvcH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyQ29udGVudD5cbiAgICAgICAgICAgICAgICB7bGF5ZXJIb3ZlclByb3A/LmxheWVyPy50eXBlICYmXG4gICAgICAgICAgICAgICAgU0VMRUNUQUJMRV9MQVlFUlMuaW5jbHVkZXMobGF5ZXJIb3ZlclByb3A/LmxheWVyPy50eXBlKSAmJlxuICAgICAgICAgICAgICAgIGZyb3plbiA/IChcbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRTZWxlY3RHZW9tZXRyeSBjbGFzc05hbWU9XCJzZWxlY3QtZ2VvbWV0cnlcIiBvbkNsaWNrPXtvblNldFNlbGVjdGVkRmVhdHVyZX0+XG4gICAgICAgICAgICAgICAgICAgIDxDdXJzb3JQb2ludCAvPlxuICAgICAgICAgICAgICAgICAgICBTZWxlY3QgR2VvbWV0cnlcbiAgICAgICAgICAgICAgICAgIDwvU3R5bGVkU2VsZWN0R2VvbWV0cnk+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvU3R5bGVkTWFwUG9wb3Zlcj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvUm9vdENvbnRleHQuQ29uc3VtZXI+XG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIGluamVjdEludGwoTWFwUG9wb3Zlcik7XG59XG4iXX0=