"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _localization = require("@kepler.gl/localization");

var _styledComponents = require("../../common/styled-components");

var _icons = require("../../common/icons");

var _colorSelector = _interopRequireDefault(require("./color-selector"));

var _itemSelector = _interopRequireDefault(require("../../common/item-selector/item-selector"));

var _layerConfigGroup = _interopRequireWildcard(require("./layer-config-group"));

var _rangeSlider = _interopRequireDefault(require("../../common/range-slider"));

var _fieldSelector = _interopRequireDefault(require("../../common/field-selector"));

var _constants = require("@kepler.gl/constants");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

TextLabelPanelFactory.deps = [_rangeSlider["default"], _layerConfigGroup["default"], _fieldSelector["default"]];

function TextLabelPanelFactory(RangeSlider, LayerConfigGroup, FieldSelector) {
  var TextLabelPanel = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(TextLabelPanel, _Component);

    var _super = _createSuper(TextLabelPanel);

    function TextLabelPanel() {
      (0, _classCallCheck2["default"])(this, TextLabelPanel);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(TextLabelPanel, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            updateLayerTextLabel = _this$props.updateLayerTextLabel,
            textLabel = _this$props.textLabel,
            fields = _this$props.fields;
        var currentFields = textLabel.map(function (tl) {
          return tl.field && tl.field.name;
        }).filter(function (d) {
          return Boolean(d);
        });
        return /*#__PURE__*/_react["default"].createElement(LayerConfigGroup, {
          label: 'panel.text.label',
          collapsible: true
        }, /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleHeader, null, /*#__PURE__*/_react["default"].createElement(FieldSelector, {
          fields: fields,
          value: currentFields,
          onSelect: function onSelect(selected) {
            return updateLayerTextLabel('all', 'fields', selected);
          },
          multiSelect: true
        })), /*#__PURE__*/_react["default"].createElement(_layerConfigGroup.ConfigGroupCollapsibleContent, null, textLabel.map(function (tl, idx) {
          return /*#__PURE__*/_react["default"].createElement("div", {
            key: tl.field ? tl.field.name : "null-".concat(idx)
          }, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
            id: 'panel.text.labelWithId',
            values: {
              labelId: idx + 1
            }
          })), /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(FieldSelector, {
            fields: fields,
            value: tl.field && tl.field.name || 'placeholder.selectField',
            placeholder: 'placeholder.empty',
            onSelect: function onSelect(v) {
              return updateLayerTextLabel(idx, 'field', v);
            },
            erasable: true
          })), /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
            id: "panel.text.fontSize"
          })), /*#__PURE__*/_react["default"].createElement(RangeSlider, (0, _extends2["default"])({}, _constants.LAYER_TEXT_CONFIGS.fontSize, {
            value1: tl.size,
            isRanged: false,
            onChange: function onChange(v) {
              return updateLayerTextLabel(idx, 'size', v[1]);
            }
          }))), /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
            id: "panel.text.fontColor"
          })), /*#__PURE__*/_react["default"].createElement(_colorSelector["default"], {
            colorSets: [{
              selectedColor: tl.color,
              setColor: function setColor(v) {
                return updateLayerTextLabel(idx, 'color', v);
              }
            }]
          })), /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.SpaceBetweenFlexbox, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.SBFlexboxItem, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
            id: "panel.text.textAnchor"
          })), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], (0, _extends2["default"])({}, _constants.LAYER_TEXT_CONFIGS.textAnchor, {
            selectedItems: tl.anchor,
            onChange: function onChange(val) {
              return updateLayerTextLabel(idx, 'anchor', val);
            }
          }))), /*#__PURE__*/_react["default"].createElement(_styledComponents.SBFlexboxItem, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
            id: "panel.text.alignment"
          })), /*#__PURE__*/_react["default"].createElement(_itemSelector["default"], (0, _extends2["default"])({}, _constants.LAYER_TEXT_CONFIGS.textAlignment, {
            selectedItems: tl.alignment,
            onChange: function onChange(val) {
              return updateLayerTextLabel(idx, 'alignment', val);
            }
          }))))));
        }), /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.Button, {
          link: true,
          onClick: function onClick() {
            return updateLayerTextLabel(textLabel.length, '', null);
          }
        }, /*#__PURE__*/_react["default"].createElement(_icons.Add, {
          height: "12px"
        }), /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: "panel.text.addMoreLabel"
        })))));
      }
    }]);
    return TextLabelPanel;
  }(_react.Component);

  return TextLabelPanel;
}

var _default = TextLabelPanelFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2xheWVyLXBhbmVsL3RleHQtbGFiZWwtcGFuZWwudHN4Il0sIm5hbWVzIjpbIlRleHRMYWJlbFBhbmVsRmFjdG9yeSIsImRlcHMiLCJSYW5nZVNsaWRlckZhY3RvcnkiLCJMYXllckNvbmZpZ0dyb3VwRmFjdG9yeSIsIkZpZWxkU2VsZWN0b3JGYWN0b3J5IiwiUmFuZ2VTbGlkZXIiLCJMYXllckNvbmZpZ0dyb3VwIiwiRmllbGRTZWxlY3RvciIsIlRleHRMYWJlbFBhbmVsIiwicHJvcHMiLCJ1cGRhdGVMYXllclRleHRMYWJlbCIsInRleHRMYWJlbCIsImZpZWxkcyIsImN1cnJlbnRGaWVsZHMiLCJtYXAiLCJ0bCIsImZpZWxkIiwibmFtZSIsImZpbHRlciIsImQiLCJCb29sZWFuIiwic2VsZWN0ZWQiLCJpZHgiLCJsYWJlbElkIiwidiIsIkxBWUVSX1RFWFRfQ09ORklHUyIsImZvbnRTaXplIiwic2l6ZSIsInNlbGVjdGVkQ29sb3IiLCJjb2xvciIsInNldENvbG9yIiwidGV4dEFuY2hvciIsImFuY2hvciIsInZhbCIsInRleHRBbGlnbm1lbnQiLCJhbGlnbm1lbnQiLCJsZW5ndGgiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUVBOztBQU9BOztBQUNBOztBQUNBOztBQUNBOztBQUlBOztBQUVBOztBQUVBOzs7Ozs7QUFRQUEscUJBQXFCLENBQUNDLElBQXRCLEdBQTZCLENBQUNDLHVCQUFELEVBQXFCQyw0QkFBckIsRUFBOENDLHlCQUE5QyxDQUE3Qjs7QUFFQSxTQUFTSixxQkFBVCxDQUNFSyxXQURGLEVBRUVDLGdCQUZGLEVBR0VDLGFBSEYsRUFJNEM7QUFBQSxNQUNwQ0MsY0FEb0M7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsYUFFeEMsa0JBQVM7QUFBQSwwQkFD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RkYsQ0FERixDQWpFRixDQVRGLENBREY7QUFvRkQ7QUExRnVDO0FBQUE7QUFBQSxJQUNiQyxnQkFEYTs7QUE2RjFDLFNBQU83QixjQUFQO0FBQ0Q7O2VBRWNSLHFCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ0BrZXBsZXIuZ2wvbG9jYWxpemF0aW9uJztcblxuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBQYW5lbExhYmVsLFxuICBTQkZsZXhib3hJdGVtLFxuICBTaWRlUGFuZWxTZWN0aW9uLFxuICBTcGFjZUJldHdlZW5GbGV4Ym94XG59IGZyb20gJy4uLy4uL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0FkZH0gZnJvbSAnLi4vLi4vY29tbW9uL2ljb25zJztcbmltcG9ydCBDb2xvclNlbGVjdG9yIGZyb20gJy4vY29sb3Itc2VsZWN0b3InO1xuaW1wb3J0IEl0ZW1TZWxlY3RvciBmcm9tICcuLi8uLi9jb21tb24vaXRlbS1zZWxlY3Rvci9pdGVtLXNlbGVjdG9yJztcbmltcG9ydCBMYXllckNvbmZpZ0dyb3VwRmFjdG9yeSwge1xuICBDb25maWdHcm91cENvbGxhcHNpYmxlQ29udGVudCxcbiAgQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUhlYWRlclxufSBmcm9tICcuL2xheWVyLWNvbmZpZy1ncm91cCc7XG5pbXBvcnQgUmFuZ2VTbGlkZXJGYWN0b3J5IGZyb20gJy4uLy4uL2NvbW1vbi9yYW5nZS1zbGlkZXInO1xuXG5pbXBvcnQgRmllbGRTZWxlY3RvckZhY3RvcnkgZnJvbSAnLi4vLi4vY29tbW9uL2ZpZWxkLXNlbGVjdG9yJztcbmltcG9ydCB7UkdCQ29sb3IsIExheWVyVGV4dExhYmVsLCBGaWVsZH0gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5pbXBvcnQge0xBWUVSX1RFWFRfQ09ORklHU30gZnJvbSAnQGtlcGxlci5nbC9jb25zdGFudHMnO1xuXG50eXBlIFRleHRMYWJlbFBhbmVsUHJvcHMgPSB7XG4gIGZpZWxkczogRmllbGRbXTtcbiAgdGV4dExhYmVsOiBMYXllclRleHRMYWJlbFtdO1xuICB1cGRhdGVMYXllclRleHRMYWJlbDogKGlkeDogbnVtYmVyIHwgJ2FsbCcsIHByb3A6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gdm9pZDtcbn07XG5cblRleHRMYWJlbFBhbmVsRmFjdG9yeS5kZXBzID0gW1JhbmdlU2xpZGVyRmFjdG9yeSwgTGF5ZXJDb25maWdHcm91cEZhY3RvcnksIEZpZWxkU2VsZWN0b3JGYWN0b3J5XTtcblxuZnVuY3Rpb24gVGV4dExhYmVsUGFuZWxGYWN0b3J5KFxuICBSYW5nZVNsaWRlcjogUmV0dXJuVHlwZTx0eXBlb2YgUmFuZ2VTbGlkZXJGYWN0b3J5PixcbiAgTGF5ZXJDb25maWdHcm91cDogUmV0dXJuVHlwZTx0eXBlb2YgTGF5ZXJDb25maWdHcm91cEZhY3Rvcnk+LFxuICBGaWVsZFNlbGVjdG9yOiBSZXR1cm5UeXBlPHR5cGVvZiBGaWVsZFNlbGVjdG9yRmFjdG9yeT5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8VGV4dExhYmVsUGFuZWxQcm9wcz4ge1xuICBjbGFzcyBUZXh0TGFiZWxQYW5lbCBleHRlbmRzIENvbXBvbmVudDxUZXh0TGFiZWxQYW5lbFByb3BzPiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgY29uc3Qge3VwZGF0ZUxheWVyVGV4dExhYmVsLCB0ZXh0TGFiZWwsIGZpZWxkc30gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3QgY3VycmVudEZpZWxkcyA9IHRleHRMYWJlbC5tYXAodGwgPT4gdGwuZmllbGQgJiYgdGwuZmllbGQubmFtZSkuZmlsdGVyKGQgPT4gQm9vbGVhbihkKSk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMYXllckNvbmZpZ0dyb3VwIGxhYmVsPXsncGFuZWwudGV4dC5sYWJlbCd9IGNvbGxhcHNpYmxlPlxuICAgICAgICAgIDxDb25maWdHcm91cENvbGxhcHNpYmxlSGVhZGVyPlxuICAgICAgICAgICAgPEZpZWxkU2VsZWN0b3JcbiAgICAgICAgICAgICAgZmllbGRzPXtmaWVsZHN9XG4gICAgICAgICAgICAgIHZhbHVlPXtjdXJyZW50RmllbGRzIGFzIHN0cmluZ1tdfVxuICAgICAgICAgICAgICBvblNlbGVjdD17c2VsZWN0ZWQgPT4gdXBkYXRlTGF5ZXJUZXh0TGFiZWwoJ2FsbCcsICdmaWVsZHMnLCBzZWxlY3RlZCl9XG4gICAgICAgICAgICAgIG11bHRpU2VsZWN0XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUhlYWRlcj5cbiAgICAgICAgICA8Q29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgICAgICB7dGV4dExhYmVsLm1hcCgodGwsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17dGwuZmllbGQgPyB0bC5maWVsZC5uYW1lIDogYG51bGwtJHtpZHh9YH0+XG4gICAgICAgICAgICAgICAgPFBhbmVsTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J3BhbmVsLnRleHQubGFiZWxXaXRoSWQnfSB2YWx1ZXM9e3tsYWJlbElkOiBpZHggKyAxfX0gLz5cbiAgICAgICAgICAgICAgICA8L1BhbmVsTGFiZWw+XG4gICAgICAgICAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8RmllbGRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICBmaWVsZHM9e2ZpZWxkc31cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyh0bC5maWVsZCAmJiB0bC5maWVsZC5uYW1lKSB8fCAncGxhY2Vob2xkZXIuc2VsZWN0RmllbGQnfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17J3BsYWNlaG9sZGVyLmVtcHR5J31cbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3YgPT4gdXBkYXRlTGF5ZXJUZXh0TGFiZWwoaWR4LCAnZmllbGQnLCB2KX1cbiAgICAgICAgICAgICAgICAgICAgZXJhc2FibGVcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPFBhbmVsTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwicGFuZWwudGV4dC5mb250U2l6ZVwiIC8+XG4gICAgICAgICAgICAgICAgICA8L1BhbmVsTGFiZWw+XG4gICAgICAgICAgICAgICAgICA8UmFuZ2VTbGlkZXJcbiAgICAgICAgICAgICAgICAgICAgey4uLkxBWUVSX1RFWFRfQ09ORklHUy5mb250U2l6ZX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWUxPXt0bC5zaXplfVxuICAgICAgICAgICAgICAgICAgICBpc1JhbmdlZD17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2ID0+IHVwZGF0ZUxheWVyVGV4dExhYmVsKGlkeCwgJ3NpemUnLCB2WzFdKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPFBhbmVsTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPVwicGFuZWwudGV4dC5mb250Q29sb3JcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9QYW5lbExhYmVsPlxuICAgICAgICAgICAgICAgICAgPENvbG9yU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgY29sb3JTZXRzPXtbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvcjogdGwuY29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDb2xvcjogKHY6IFJHQkNvbG9yKSA9PiB1cGRhdGVMYXllclRleHRMYWJlbChpZHgsICdjb2xvcicsIHYpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICA8U3BhY2VCZXR3ZWVuRmxleGJveD5cbiAgICAgICAgICAgICAgICAgICAgPFNCRmxleGJveEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPFBhbmVsTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD1cInBhbmVsLnRleHQudGV4dEFuY2hvclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9QYW5lbExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxJdGVtU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5MQVlFUl9URVhUX0NPTkZJR1MudGV4dEFuY2hvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3RsLmFuY2hvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWwgPT4gdXBkYXRlTGF5ZXJUZXh0TGFiZWwoaWR4LCAnYW5jaG9yJywgdmFsKX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1NCRmxleGJveEl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIDxTQkZsZXhib3hJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxQYW5lbExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJwYW5lbC50ZXh0LmFsaWdubWVudFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9QYW5lbExhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxJdGVtU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5MQVlFUl9URVhUX0NPTkZJR1MudGV4dEFsaWdubWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM9e3RsLmFsaWdubWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWwgPT4gdXBkYXRlTGF5ZXJUZXh0TGFiZWwoaWR4LCAnYWxpZ25tZW50JywgdmFsKX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1NCRmxleGJveEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L1NwYWNlQmV0d2VlbkZsZXhib3g+XG4gICAgICAgICAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPFNpZGVQYW5lbFNlY3Rpb24+XG4gICAgICAgICAgICAgIDxCdXR0b24gbGluayBvbkNsaWNrPXsoKSA9PiB1cGRhdGVMYXllclRleHRMYWJlbCh0ZXh0TGFiZWwubGVuZ3RoLCAnJywgbnVsbCl9PlxuICAgICAgICAgICAgICAgIDxBZGQgaGVpZ2h0PVwiMTJweFwiIC8+XG4gICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9XCJwYW5lbC50ZXh0LmFkZE1vcmVMYWJlbFwiIC8+XG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgIDwvQ29uZmlnR3JvdXBDb2xsYXBzaWJsZUNvbnRlbnQ+XG4gICAgICAgIDwvTGF5ZXJDb25maWdHcm91cD5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFRleHRMYWJlbFBhbmVsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0TGFiZWxQYW5lbEZhY3Rvcnk7XG4iXX0=