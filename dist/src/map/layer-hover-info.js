"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StyledLayerName = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledComponents2 = require("../common/styled-components");

var _icons = require("../common/icons");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("@kepler.gl/utils");

var _reducers = require("@kepler.gl/reducers");

var _reactIntl = require("react-intl");

var _templateObject, _templateObject2, _templateObject3;

var StyledLayerName = (0, _styledComponents["default"])(_styledComponents2.CenterFlexbox)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 12px;\n  letter-spacing: 0.43px;\n  text-transform: capitalize;\n\n  svg {\n    margin-right: 4px;\n  }\n"])), function (props) {
  return props.theme.textColorHl;
});
exports.StyledLayerName = StyledLayerName;

var StyledTable = _styledComponents["default"].table(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  & .row__delta-value {\n    text-align: right;\n    margin-left: 6px;\n\n    &.positive {\n      color: ", ";\n    }\n\n    &.negative {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.notificationColors.success;
}, function (props) {
  return props.theme.negativeBtnActBgd;
});

var StyledDivider = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  // offset divider to reach popover edge\n  margin-left: -14px;\n  margin-right: -14px;\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.theme.panelBorderColor;
});

var Row = function Row(_ref) {
  var name = _ref.name,
      value = _ref.value,
      deltaValue = _ref.deltaValue,
      url = _ref.url;

  // Set 'url' to 'value' if it looks like a url
  if (!url && value && typeof value === 'string' && value.match(/^http/)) {
    url = value;
  }

  var asImg = /<img>/.test(name);
  return /*#__PURE__*/_react["default"].createElement("tr", {
    className: "layer-hover-info__row",
    key: name
  }, /*#__PURE__*/_react["default"].createElement("td", {
    className: "row__name"
  }, name), /*#__PURE__*/_react["default"].createElement("td", {
    className: "row__value"
  }, asImg ? /*#__PURE__*/_react["default"].createElement("img", {
    src: value
  }) : url ? /*#__PURE__*/_react["default"].createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: url
  }, value) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, value), (0, _utils.notNullorUndefined)(deltaValue) ? /*#__PURE__*/_react["default"].createElement("span", {
    className: "row__delta-value ".concat(deltaValue.toString().charAt(0) === '+' ? 'positive' : 'negative')
  }, deltaValue) : null)));
};

var EntryInfo = function EntryInfo(_ref2) {
  var fieldsToShow = _ref2.fieldsToShow,
      fields = _ref2.fields,
      data = _ref2.data,
      primaryData = _ref2.primaryData,
      compareType = _ref2.compareType;
  return /*#__PURE__*/_react["default"].createElement("tbody", null, fieldsToShow.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(EntryInfoRow, {
      key: item.name,
      item: item,
      fields: fields,
      data: data,
      primaryData: primaryData,
      compareType: compareType
    });
  }));
};

var EntryInfoRow = function EntryInfoRow(_ref3) {
  var item = _ref3.item,
      fields = _ref3.fields,
      data = _ref3.data,
      primaryData = _ref3.primaryData,
      compareType = _ref3.compareType;
  var fieldIdx = fields.findIndex(function (f) {
    return f.name === item.name;
  });

  if (fieldIdx < 0) {
    return null;
  }

  var field = fields[fieldIdx];
  var value = data.valueAt(fieldIdx);
  var displayValue = (0, _reducers.getTooltipDisplayValue)({
    item: item,
    field: field,
    value: value
  });
  var displayDeltaValue = primaryData ? (0, _reducers.getTooltipDisplayDeltaValue)({
    field: field,
    data: data,
    fieldIdx: fieldIdx,
    primaryData: primaryData,
    compareType: compareType
  }) : null;
  return /*#__PURE__*/_react["default"].createElement(Row, {
    name: field.displayName || field.name,
    value: displayValue,
    deltaValue: displayDeltaValue
  });
}; // TODO: supporting comparative value for aggregated cells as well


var CellInfo = function CellInfo(_ref4) {
  var fieldsToShow = _ref4.fieldsToShow,
      data = _ref4.data,
      layer = _ref4.layer;
  var _ref5 = layer.config,
      colorField = _ref5.colorField,
      sizeField = _ref5.sizeField;
  var colorValue = (0, _react.useMemo)(function () {
    if (colorField && layer.visualChannels.color) {
      var item = fieldsToShow.find(function (field) {
        return field.name === colorField.name;
      });
      return (0, _reducers.getTooltipDisplayValue)({
        item: item,
        field: colorField,
        value: data.colorValue
      });
    }

    return null;
  }, [fieldsToShow, colorField, layer, data.colorValue]);
  var elevationValue = (0, _react.useMemo)(function () {
    if (sizeField && layer.visualChannels.size) {
      var item = fieldsToShow.find(function (field) {
        return field.name === sizeField.name;
      });
      return (0, _reducers.getTooltipDisplayValue)({
        item: item,
        field: sizeField,
        value: data.elevationValue
      });
    }

    return null;
  }, [fieldsToShow, sizeField, layer, data.elevationValue]);
  var colorMeasure = layer.getVisualChannelDescription('color').measure;
  var sizeMeasure = layer.getVisualChannelDescription('size').measure;
  return /*#__PURE__*/_react["default"].createElement("tbody", null, /*#__PURE__*/_react["default"].createElement(Row, {
    name: 'total points',
    key: "count",
    value: String(data.points && data.points.length)
  }), colorField && layer.visualChannels.color && colorMeasure ? /*#__PURE__*/_react["default"].createElement(Row, {
    name: colorMeasure,
    key: "color",
    value: colorValue || 'N/A'
  }) : null, sizeField && layer.visualChannels.size && sizeMeasure ? /*#__PURE__*/_react["default"].createElement(Row, {
    name: sizeMeasure,
    key: "size",
    value: elevationValue || 'N/A'
  }) : null);
};

var LayerHoverInfoFactory = function LayerHoverInfoFactory() {
  var LayerHoverInfo = function LayerHoverInfo(props) {
    var data = props.data,
        layer = props.layer;
    var intl = (0, _reactIntl.useIntl)();

    if (!data || !layer) {
      return null;
    }

    var hasFieldsToShow = data.fieldValues && Object.keys(data.fieldValues).length > 0 || props.fieldsToShow && props.fieldsToShow.length > 0;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "map-popover__layer-info"
    }, /*#__PURE__*/_react["default"].createElement(StyledLayerName, {
      className: "map-popover__layer-name"
    }, /*#__PURE__*/_react["default"].createElement(_icons.Layers, {
      height: "12px"
    }), props.layer.config.label), hasFieldsToShow && /*#__PURE__*/_react["default"].createElement(StyledDivider, null), /*#__PURE__*/_react["default"].createElement(StyledTable, null, data.fieldValues ? /*#__PURE__*/_react["default"].createElement("tbody", null, data.fieldValues.map(function (_ref6, i) {
      var labelMessage = _ref6.labelMessage,
          value = _ref6.value;
      return /*#__PURE__*/_react["default"].createElement(Row, {
        key: i,
        name: intl.formatMessage({
          id: labelMessage
        }),
        value: value
      });
    })) : props.layer.isAggregated ? /*#__PURE__*/_react["default"].createElement(CellInfo, props) : /*#__PURE__*/_react["default"].createElement(EntryInfo, props)), hasFieldsToShow && /*#__PURE__*/_react["default"].createElement(StyledDivider, null));
  };

  LayerHoverInfo.propTypes = {
    fields: _propTypes["default"].arrayOf(_propTypes["default"].any),
    fieldsToShow: _propTypes["default"].arrayOf(_propTypes["default"].any),
    layer: _propTypes["default"].object,
    data: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].any), _propTypes["default"].object])
  };
  return LayerHoverInfo;
};

var _default = LayerHoverInfoFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tYXAvbGF5ZXItaG92ZXItaW5mby50c3giXSwibmFtZXMiOlsiU3R5bGVkTGF5ZXJOYW1lIiwiQ2VudGVyRmxleGJveCIsInByb3BzIiwidGhlbWUiLCJ0ZXh0Q29sb3JIbCIsIlN0eWxlZFRhYmxlIiwic3R5bGVkIiwidGFibGUiLCJub3RpZmljYXRpb25Db2xvcnMiLCJzdWNjZXNzIiwibmVnYXRpdmVCdG5BY3RCZ2QiLCJTdHlsZWREaXZpZGVyIiwiZGl2IiwicGFuZWxCb3JkZXJDb2xvciIsIlJvdyIsIm5hbWUiLCJ2YWx1ZSIsImRlbHRhVmFsdWUiLCJ1cmwiLCJtYXRjaCIsImFzSW1nIiwidGVzdCIsInRvU3RyaW5nIiwiY2hhckF0IiwiRW50cnlJbmZvIiwiZmllbGRzVG9TaG93IiwiZmllbGRzIiwiZGF0YSIsInByaW1hcnlEYXRhIiwiY29tcGFyZVR5cGUiLCJtYXAiLCJpdGVtIiwiRW50cnlJbmZvUm93IiwiZmllbGRJZHgiLCJmaW5kSW5kZXgiLCJmIiwiZmllbGQiLCJ2YWx1ZUF0IiwiZGlzcGxheVZhbHVlIiwiZGlzcGxheURlbHRhVmFsdWUiLCJkaXNwbGF5TmFtZSIsIkNlbGxJbmZvIiwibGF5ZXIiLCJjb25maWciLCJjb2xvckZpZWxkIiwic2l6ZUZpZWxkIiwiY29sb3JWYWx1ZSIsInZpc3VhbENoYW5uZWxzIiwiY29sb3IiLCJmaW5kIiwiZWxldmF0aW9uVmFsdWUiLCJzaXplIiwiY29sb3JNZWFzdXJlIiwiZ2V0VmlzdWFsQ2hhbm5lbERlc2NyaXB0aW9uIiwibWVhc3VyZSIsInNpemVNZWFzdXJlIiwiU3RyaW5nIiwicG9pbnRzIiwibGVuZ3RoIiwiTGF5ZXJIb3ZlckluZm9GYWN0b3J5IiwiTGF5ZXJIb3ZlckluZm8iLCJpbnRsIiwiaGFzRmllbGRzVG9TaG93IiwiZmllbGRWYWx1ZXMiLCJPYmplY3QiLCJrZXlzIiwibGFiZWwiLCJpIiwibGFiZWxNZXNzYWdlIiwiZm9ybWF0TWVzc2FnZSIsImlkIiwiaXNBZ2dyZWdhdGVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsImFueSIsIm9iamVjdCIsIm9uZU9mVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFLQTs7OztBQUVPLElBQU1BLGVBQWUsR0FBRyxrQ0FBT0MsZ0NBQVAsQ0FBSCwrTkFDakIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFoQjtBQUFBLENBRFksQ0FBckI7OztBQVdQLElBQU1DLFdBQVcsR0FBR0MsNkJBQU9DLEtBQVYsc1FBTUYsVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxrQkFBWixDQUErQkMsT0FBbkM7QUFBQSxDQU5ILEVBVUYsVUFBQVAsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTyxpQkFBaEI7QUFBQSxDQVZILENBQWpCOztBQWVBLElBQU1DLGFBQWEsR0FBR0wsNkJBQU9NLEdBQVYsdU5BSVUsVUFBQVYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZVSxnQkFBaEI7QUFBQSxDQUpmLENBQW5COztBQWNBLElBQU1DLEdBQXVCLEdBQUcsU0FBMUJBLEdBQTBCLE9BQW9DO0FBQUEsTUFBbENDLElBQWtDLFFBQWxDQSxJQUFrQztBQUFBLE1BQTVCQyxLQUE0QixRQUE1QkEsS0FBNEI7QUFBQSxNQUFyQkMsVUFBcUIsUUFBckJBLFVBQXFCO0FBQUEsTUFBVEMsR0FBUyxRQUFUQSxHQUFTOztBQUNsRTtBQUNBLE1BQUksQ0FBQ0EsR0FBRCxJQUFRRixLQUFSLElBQWlCLE9BQU9BLEtBQVAsS0FBaUIsUUFBbEMsSUFBOENBLEtBQUssQ0FBQ0csS0FBTixDQUFZLE9BQVosQ0FBbEQsRUFBd0U7QUFDdEVELElBQUFBLEdBQUcsR0FBR0YsS0FBTjtBQUNEOztBQUVELE1BQU1JLEtBQUss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IDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VNZW1vfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7VG9vbHRpcEZpZWxkfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcbmltcG9ydCB7Q2VudGVyRmxleGJveH0gZnJvbSAnLi4vY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7TGF5ZXJzfSBmcm9tICcuLi9jb21tb24vaWNvbnMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7bm90TnVsbG9yVW5kZWZpbmVkfSBmcm9tICdAa2VwbGVyLmdsL3V0aWxzJztcbmltcG9ydCB7TGF5ZXJ9IGZyb20gJ0BrZXBsZXIuZ2wvbGF5ZXJzJztcbmltcG9ydCB7XG4gIEFnZ3JlZ2F0aW9uTGF5ZXJIb3ZlckRhdGEsXG4gIGdldFRvb2x0aXBEaXNwbGF5RGVsdGFWYWx1ZSxcbiAgZ2V0VG9vbHRpcERpc3BsYXlWYWx1ZVxufSBmcm9tICdAa2VwbGVyLmdsL3JlZHVjZXJzJztcbmltcG9ydCB7dXNlSW50bH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRMYXllck5hbWUgPSBzdHlsZWQoQ2VudGVyRmxleGJveClgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC40M3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblxuICBzdmcge1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRUYWJsZSA9IHN0eWxlZC50YWJsZWBcbiAgJiAucm93X19kZWx0YS12YWx1ZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcblxuICAgICYucG9zaXRpdmUge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubm90aWZpY2F0aW9uQ29sb3JzLnN1Y2Nlc3N9O1xuICAgIH1cblxuICAgICYubmVnYXRpdmUge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubmVnYXRpdmVCdG5BY3RCZ2R9O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkRGl2aWRlciA9IHN0eWxlZC5kaXZgXG4gIC8vIG9mZnNldCBkaXZpZGVyIHRvIHJlYWNoIHBvcG92ZXIgZWRnZVxuICBtYXJnaW4tbGVmdDogLTE0cHg7XG4gIG1hcmdpbi1yaWdodDogLTE0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQm9yZGVyQ29sb3J9O1xuYDtcblxuaW50ZXJmYWNlIFJvd1Byb3BzIHtcbiAgbmFtZTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICBkZWx0YVZhbHVlPzogc3RyaW5nIHwgbnVsbDtcbiAgdXJsPzogc3RyaW5nO1xufVxuXG5jb25zdCBSb3c6IFJlYWN0LkZDPFJvd1Byb3BzPiA9ICh7bmFtZSwgdmFsdWUsIGRlbHRhVmFsdWUsIHVybH0pID0+IHtcbiAgLy8gU2V0ICd1cmwnIHRvICd2YWx1ZScgaWYgaXQgbG9va3MgbGlrZSBhIHVybFxuICBpZiAoIXVybCAmJiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLm1hdGNoKC9eaHR0cC8pKSB7XG4gICAgdXJsID0gdmFsdWU7XG4gIH1cblxuICBjb25zdCBhc0ltZyA9IC88aW1nPi8udGVzdChuYW1lKTtcbiAgcmV0dXJuIChcbiAgICA8dHIgY2xhc3NOYW1lPVwibGF5ZXItaG92ZXItaW5mb19fcm93XCIga2V5PXtuYW1lfT5cbiAgICAgIDx0ZCBjbGFzc05hbWU9XCJyb3dfX25hbWVcIj57bmFtZX08L3RkPlxuICAgICAgPHRkIGNsYXNzTmFtZT1cInJvd19fdmFsdWVcIj5cbiAgICAgICAge2FzSW1nID8gKFxuICAgICAgICAgIDxpbWcgc3JjPXt2YWx1ZX0gLz5cbiAgICAgICAgKSA6IHVybCA/IChcbiAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgaHJlZj17dXJsfT5cbiAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxzcGFuPnt2YWx1ZX08L3NwYW4+XG4gICAgICAgICAgICB7bm90TnVsbG9yVW5kZWZpbmVkKGRlbHRhVmFsdWUpID8gKFxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJvd19fZGVsdGEtdmFsdWUgJHtcbiAgICAgICAgICAgICAgICAgIGRlbHRhVmFsdWUudG9TdHJpbmcoKS5jaGFyQXQoMCkgPT09ICcrJyA/ICdwb3NpdGl2ZScgOiAnbmVnYXRpdmUnXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZGVsdGFWYWx1ZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gICk7XG59O1xuXG5jb25zdCBFbnRyeUluZm8gPSAoe2ZpZWxkc1RvU2hvdywgZmllbGRzLCBkYXRhLCBwcmltYXJ5RGF0YSwgY29tcGFyZVR5cGV9KSA9PiAoXG4gIDx0Ym9keT5cbiAgICB7ZmllbGRzVG9TaG93Lm1hcChpdGVtID0+IChcbiAgICAgIDxFbnRyeUluZm9Sb3dcbiAgICAgICAga2V5PXtpdGVtLm5hbWV9XG4gICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgIGZpZWxkcz17ZmllbGRzfVxuICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICBwcmltYXJ5RGF0YT17cHJpbWFyeURhdGF9XG4gICAgICAgIGNvbXBhcmVUeXBlPXtjb21wYXJlVHlwZX1cbiAgICAgIC8+XG4gICAgKSl9XG4gIDwvdGJvZHk+XG4pO1xuXG5jb25zdCBFbnRyeUluZm9Sb3cgPSAoe2l0ZW0sIGZpZWxkcywgZGF0YSwgcHJpbWFyeURhdGEsIGNvbXBhcmVUeXBlfSkgPT4ge1xuICBjb25zdCBmaWVsZElkeCA9IGZpZWxkcy5maW5kSW5kZXgoZiA9PiBmLm5hbWUgPT09IGl0ZW0ubmFtZSk7XG4gIGlmIChmaWVsZElkeCA8IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCBmaWVsZCA9IGZpZWxkc1tmaWVsZElkeF07XG4gIGNvbnN0IHZhbHVlID0gZGF0YS52YWx1ZUF0KGZpZWxkSWR4KTtcbiAgY29uc3QgZGlzcGxheVZhbHVlID0gZ2V0VG9vbHRpcERpc3BsYXlWYWx1ZSh7aXRlbSwgZmllbGQsIHZhbHVlfSk7XG5cbiAgY29uc3QgZGlzcGxheURlbHRhVmFsdWUgPSBwcmltYXJ5RGF0YVxuICAgID8gZ2V0VG9vbHRpcERpc3BsYXlEZWx0YVZhbHVlKHtcbiAgICAgICAgZmllbGQsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIGZpZWxkSWR4LFxuICAgICAgICBwcmltYXJ5RGF0YSxcbiAgICAgICAgY29tcGFyZVR5cGVcbiAgICAgIH0pXG4gICAgOiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPFJvd1xuICAgICAgbmFtZT17ZmllbGQuZGlzcGxheU5hbWUgfHwgZmllbGQubmFtZX1cbiAgICAgIHZhbHVlPXtkaXNwbGF5VmFsdWV9XG4gICAgICBkZWx0YVZhbHVlPXtkaXNwbGF5RGVsdGFWYWx1ZX1cbiAgICAvPlxuICApO1xufTtcblxuLy8gVE9ETzogc3VwcG9ydGluZyBjb21wYXJhdGl2ZSB2YWx1ZSBmb3IgYWdncmVnYXRlZCBjZWxscyBhcyB3ZWxsXG5jb25zdCBDZWxsSW5mbyA9ICh7XG4gIGZpZWxkc1RvU2hvdyxcbiAgZGF0YSxcbiAgbGF5ZXJcbn06IHtcbiAgZGF0YTogQWdncmVnYXRpb25MYXllckhvdmVyRGF0YTtcbiAgZmllbGRzVG9TaG93OiBUb29sdGlwRmllbGRbXTtcbiAgbGF5ZXI6IExheWVyO1xufSkgPT4ge1xuICBjb25zdCB7Y29sb3JGaWVsZCwgc2l6ZUZpZWxkfSA9IGxheWVyLmNvbmZpZyBhcyBhbnk7XG5cbiAgY29uc3QgY29sb3JWYWx1ZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmIChjb2xvckZpZWxkICYmIGxheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yKSB7XG4gICAgICBjb25zdCBpdGVtID0gZmllbGRzVG9TaG93LmZpbmQoZmllbGQgPT4gZmllbGQubmFtZSA9PT0gY29sb3JGaWVsZC5uYW1lKTtcbiAgICAgIHJldHVybiBnZXRUb29sdGlwRGlzcGxheVZhbHVlKHtpdGVtLCBmaWVsZDogY29sb3JGaWVsZCwgdmFsdWU6IGRhdGEuY29sb3JWYWx1ZX0pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgW2ZpZWxkc1RvU2hvdywgY29sb3JGaWVsZCwgbGF5ZXIsIGRhdGEuY29sb3JWYWx1ZV0pO1xuXG4gIGNvbnN0IGVsZXZhdGlvblZhbHVlID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKHNpemVGaWVsZCAmJiBsYXllci52aXN1YWxDaGFubmVscy5zaXplKSB7XG4gICAgICBjb25zdCBpdGVtID0gZmllbGRzVG9TaG93LmZpbmQoZmllbGQgPT4gZmllbGQubmFtZSA9PT0gc2l6ZUZpZWxkLm5hbWUpO1xuICAgICAgcmV0dXJuIGdldFRvb2x0aXBEaXNwbGF5VmFsdWUoe2l0ZW0sIGZpZWxkOiBzaXplRmllbGQsIHZhbHVlOiBkYXRhLmVsZXZhdGlvblZhbHVlfSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9LCBbZmllbGRzVG9TaG93LCBzaXplRmllbGQsIGxheWVyLCBkYXRhLmVsZXZhdGlvblZhbHVlXSk7XG5cbiAgY29uc3QgY29sb3JNZWFzdXJlID0gbGF5ZXIuZ2V0VmlzdWFsQ2hhbm5lbERlc2NyaXB0aW9uKCdjb2xvcicpLm1lYXN1cmU7XG4gIGNvbnN0IHNpemVNZWFzdXJlID0gbGF5ZXIuZ2V0VmlzdWFsQ2hhbm5lbERlc2NyaXB0aW9uKCdzaXplJykubWVhc3VyZTtcbiAgcmV0dXJuIChcbiAgICA8dGJvZHk+XG4gICAgICA8Um93IG5hbWU9eyd0b3RhbCBwb2ludHMnfSBrZXk9XCJjb3VudFwiIHZhbHVlPXtTdHJpbmcoZGF0YS5wb2ludHMgJiYgZGF0YS5wb2ludHMubGVuZ3RoKX0gLz5cbiAgICAgIHtjb2xvckZpZWxkICYmIGxheWVyLnZpc3VhbENoYW5uZWxzLmNvbG9yICYmIGNvbG9yTWVhc3VyZSA/IChcbiAgICAgICAgPFJvdyBuYW1lPXtjb2xvck1lYXN1cmV9IGtleT1cImNvbG9yXCIgdmFsdWU9e2NvbG9yVmFsdWUgfHwgJ04vQSd9IC8+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHtzaXplRmllbGQgJiYgbGF5ZXIudmlzdWFsQ2hhbm5lbHMuc2l6ZSAmJiBzaXplTWVhc3VyZSA/IChcbiAgICAgICAgPFJvdyBuYW1lPXtzaXplTWVhc3VyZX0ga2V5PVwic2l6ZVwiIHZhbHVlPXtlbGV2YXRpb25WYWx1ZSB8fCAnTi9BJ30gLz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvdGJvZHk+XG4gICk7XG59O1xuXG5jb25zdCBMYXllckhvdmVySW5mb0ZhY3RvcnkgPSAoKSA9PiB7XG4gIGNvbnN0IExheWVySG92ZXJJbmZvID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHtkYXRhLCBsYXllcn0gPSBwcm9wcztcbiAgICBjb25zdCBpbnRsID0gdXNlSW50bCgpO1xuICAgIGlmICghZGF0YSB8fCAhbGF5ZXIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc0ZpZWxkc1RvU2hvdyA9XG4gICAgICAoZGF0YS5maWVsZFZhbHVlcyAmJiBPYmplY3Qua2V5cyhkYXRhLmZpZWxkVmFsdWVzKS5sZW5ndGggPiAwKSB8fFxuICAgICAgKHByb3BzLmZpZWxkc1RvU2hvdyAmJiBwcm9wcy5maWVsZHNUb1Nob3cubGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXAtcG9wb3Zlcl9fbGF5ZXItaW5mb1wiPlxuICAgICAgICA8U3R5bGVkTGF5ZXJOYW1lIGNsYXNzTmFtZT1cIm1hcC1wb3BvdmVyX19sYXllci1uYW1lXCI+XG4gICAgICAgICAgPExheWVycyBoZWlnaHQ9XCIxMnB4XCIgLz5cbiAgICAgICAgICB7cHJvcHMubGF5ZXIuY29uZmlnLmxhYmVsfVxuICAgICAgICA8L1N0eWxlZExheWVyTmFtZT5cbiAgICAgICAge2hhc0ZpZWxkc1RvU2hvdyAmJiA8U3R5bGVkRGl2aWRlciAvPn1cbiAgICAgICAgPFN0eWxlZFRhYmxlPlxuICAgICAgICAgIHtkYXRhLmZpZWxkVmFsdWVzID8gKFxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7ZGF0YS5maWVsZFZhbHVlcy5tYXAoKHtsYWJlbE1lc3NhZ2UsIHZhbHVlfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxSb3cga2V5PXtpfSBuYW1lPXtpbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOiBsYWJlbE1lc3NhZ2V9KX0gdmFsdWU9e3ZhbHVlfSAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgKSA6IHByb3BzLmxheWVyLmlzQWdncmVnYXRlZCA/IChcbiAgICAgICAgICAgIDxDZWxsSW5mbyB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxFbnRyeUluZm8gey4uLnByb3BzfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvU3R5bGVkVGFibGU+XG4gICAgICAgIHtoYXNGaWVsZHNUb1Nob3cgJiYgPFN0eWxlZERpdmlkZXIgLz59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuXG4gIExheWVySG92ZXJJbmZvLnByb3BUeXBlcyA9IHtcbiAgICBmaWVsZHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLFxuICAgIGZpZWxkc1RvU2hvdzogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksXG4gICAgbGF5ZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZGF0YTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSksIFByb3BUeXBlcy5vYmplY3RdKVxuICB9O1xuICByZXR1cm4gTGF5ZXJIb3ZlckluZm87XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXllckhvdmVySW5mb0ZhY3Rvcnk7XG4iXX0=