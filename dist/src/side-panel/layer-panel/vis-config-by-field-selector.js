"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _styledComponents = require("../../common/styled-components");

var _infoHelper = _interopRequireDefault(require("../../common/info-helper"));

var _dimensionScaleSelector = _interopRequireDefault(require("./dimension-scale-selector"));

var _utils = require("@kepler.gl/utils");

var _fieldSelector = _interopRequireDefault(require("../../common/field-selector"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

VisConfigByFieldSelectorFactory.deps = [_infoHelper["default"], _fieldSelector["default"]];

function VisConfigByFieldSelectorFactory(InfoHelper, FieldSelector) {
  var VisConfigByFieldSelector = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(VisConfigByFieldSelector, _Component);

    var _super = _createSuper(VisConfigByFieldSelector);

    function VisConfigByFieldSelector() {
      var _this;

      (0, _classCallCheck2["default"])(this, VisConfigByFieldSelector);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_updateVisByField", function (val) {
        _this.props.updateField(val);
      });
      return _this;
    }

    (0, _createClass2["default"])(VisConfigByFieldSelector, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            property = _this$props.property,
            showScale = _this$props.showScale,
            selectedField = _this$props.selectedField,
            description = _this$props.description,
            label = _this$props.label,
            intl = _this$props.intl,
            _this$props$scaleOpti = _this$props.scaleOptions,
            scaleOptions = _this$props$scaleOpti === void 0 ? [] : _this$props$scaleOpti;
        return /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabelWrapper, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, label && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: label
        }) || /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
          id: "layer.propertyBasedOn",
          values: {
            property: intl.formatMessage({
              id: "property.".concat((0, _utils.camelize)(property)),
              defaultMessage: property
            })
          }
        })), description && /*#__PURE__*/_react["default"].createElement(InfoHelper, {
          description: description,
          property: property,
          id: "".concat(this.props.id, "-").concat(property)
        })), /*#__PURE__*/_react["default"].createElement(FieldSelector, {
          fields: this.props.fields,
          value: selectedField && selectedField.name,
          placeholder: this.props.placeholder,
          onSelect: this._updateVisByField,
          erasable: true
        })), /*#__PURE__*/_react["default"].createElement("div", null, showScale ? /*#__PURE__*/_react["default"].createElement(_dimensionScaleSelector["default"], {
          scaleType: this.props.scaleType,
          options: scaleOptions,
          label: "".concat(property, " scale"),
          onSelect: this.props.updateScale,
          disabled: scaleOptions.length < 2
        }) : null));
      }
    }]);
    return VisConfigByFieldSelector;
  }(_react.Component);

  return (0, _reactIntl.injectIntl)(VisConfigByFieldSelector);
}

var _default = VisConfigByFieldSelectorFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2xheWVyLXBhbmVsL3Zpcy1jb25maWctYnktZmllbGQtc2VsZWN0b3IudHN4Il0sIm5hbWVzIjpbIlZpc0NvbmZpZ0J5RmllbGRTZWxlY3RvckZhY3RvcnkiLCJkZXBzIiwiSW5mb0hlbHBlckZhY3RvcnkiLCJGaWVsZFNlbGVjdG9yRmFjdG9yeSIsIkluZm9IZWxwZXIiLCJGaWVsZFNlbGVjdG9yIiwiVmlzQ29uZmlnQnlGaWVsZFNlbGVjdG9yIiwidmFsIiwicHJvcHMiLCJ1cGRhdGVGaWVsZCIsInByb3BlcnR5Iiwic2hvd1NjYWxlIiwic2VsZWN0ZWRGaWVsZCIsImRlc2NyaXB0aW9uIiwibGFiZWwiLCJpbnRsIiwic2NhbGVPcHRpb25zIiwiZm9ybWF0TWVzc2FnZSIsImlkIiwiZGVmYXVsdE1lc3NhZ2UiLCJmaWVsZHMiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJfdXBkYXRlVmlzQnlGaWVsZCIsInNjYWxlVHlwZSIsInVwZGF0ZVNjYWxlIiwibGVuZ3RoIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUlBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFzQkFBLCtCQUErQixDQUFDQyxJQUFoQyxHQUF1QyxDQUFDQyxzQkFBRCxFQUFvQkMseUJBQXBCLENBQXZDOztBQUVBLFNBQVNILCtCQUFULENBQ0VJLFVBREYsRUFFRUMsYUFGRixFQUdFO0FBQUEsTUFDTUMsd0JBRE47QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDRHQUVzQixVQUNsQkMsR0FEa0IsRUFRZjtBQUNILGNBQUtDLEtBQUwsQ0FBV0MsV0FBWCxDQUF1QkYsR0FBdkI7QUFDRCxPQVpIO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsYUFjRSxrQkFBUztBQUFBLDBCQVNILEtBQUtDLEtBVEY7QUFBQSxZQUVMRSxRQUZLLGVBRUxBLFFBRks7QUFBQSxZQUdMQyxTQUhLLGVBR0xBLFNBSEs7QUFBQSxZQUlMQyxhQUpLLGVBSUxBLGFBSks7QUFBQSxZQUtMQyxXQUxLLGVBS0xBLFdBTEs7QUFBQSxZQU1MQyxLQU5LLGVBTUxBLEtBTks7QUFBQSxZQU9MQyxJQVBLLGVBT0xBLElBUEs7QUFBQSxnREFRTEMsWUFSSztBQUFBLFlBUUxBLFlBUkssc0NBUVUsRUFSVjtBQVdQLDRCQUNFLGdDQUFDLGtDQUFELHFCQUNFLGdDQUFDLGtDQUFELHFCQUNFLGdDQUFDLG1DQUFELHFCQUNFLGdDQUFDLDRCQUFELFFBQ0lGLEtBQUssaUJBQUksZ0NBQUMsMkJBQUQ7QUFBa0IsVUFBQSxFQUFFLEVBQUVBO0FBQXRCLFVBQVYsaUJBQ0MsZ0NBQUMsMkJBQUQ7QUFDRSxVQUFBLEVBQUUsRUFBQyx1QkFETDtBQUVFLFVBQUEsTUFBTSxFQUFFO0FBQ05KLFlBQUFBLFFBQVEsRUFBRUssSUFBSSxDQUFDRSxhQUFMLENBQW1CO0FBQzNCQyxjQUFBQSxFQUFFLHFCQUFjLHFCQUFTUixRQUFULENBQWQsQ0FEeUI7QUFFM0JTLGNBQUFBLGNBQWMsRUFBRVQ7QUFGVyxhQUFuQjtBQURKO0FBRlYsVUFGSixDQURGLEVBY0dHLFdBQVcsaUJBQ1YsZ0NBQUMsVUFBRDtBQUNFLFVBQUEsV0FBVyxFQUFFQSxXQURmO0FBRUUsVUFBQSxRQUFRLEVBQUVILFFBRlo7QUFHRSxVQUFBLEVBQUUsWUFBSyxLQUFLRixLQUFMLENBQVdVLEVBQWhCLGNBQXNCUixRQUF0QjtBQUhKLFVBZkosQ0FERixlQXVCRSxnQ0FBQyxhQUFEO0FBQ0UsVUFBQSxNQUFNLEVBQUUsS0FBS0YsS0FBTCxDQUFXWSxNQURyQjtBQUVFLFVBQUEsS0FBSyxFQUFFUixhQUFhLElBQUlBLGFBQWEsQ0FBQ1MsSUFGeEM7QUFHRSxVQUFBLFdBQVcsRUFBRSxLQUFLYixLQUFMLENBQVdjLFdBSDFCO0FBSUUsVUFBQSxRQUFRLEVBQUUsS0FBS0MsaUJBSmpCO0FBS0UsVUFBQSxRQUFRO0FBTFYsVUF2QkYsQ0FERixlQWdDRSw2Q0FDR1osU0FBUyxnQkFDUixnQ0FBQyxrQ0FBRDtBQUNFLFVBQUEsU0FBUyxFQUFFLEtBQUtILEtBQUwsQ0FBV2dCLFNBRHhCO0FBRUUsVUFBQSxPQUFPLEVBQUVSLFlBRlg7QUFHRSxVQUFBLEtBQUssWUFBS04sUUFBTCxXQUhQO0FBSUUsVUFBQSxRQUFRLEVBQUUsS0FBS0YsS0FBTCxDQUFXaUIsV0FKdkI7QUFLRSxVQUFBLFFBQVEsRUFBRVQsWUFBWSxDQUFDVSxNQUFiLEdBQXNCO0FBTGxDLFVBRFEsR0FRTixJQVROLENBaENGLENBREY7QUE4Q0Q7QUF2RUg7QUFBQTtBQUFBLElBQ3VDQyxnQkFEdkM7O0FBeUVBLFNBQU8sMkJBQVdyQix3QkFBWCxDQUFQO0FBQ0Q7O2VBRWNOLCtCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2UsIGluamVjdEludGwsIFdyYXBwZWRDb21wb25lbnRQcm9wc30gZnJvbSAncmVhY3QtaW50bCc7XG5cbmltcG9ydCB7RmllbGR9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuXG5pbXBvcnQge1BhbmVsTGFiZWwsIFBhbmVsTGFiZWxXcmFwcGVyLCBTaWRlUGFuZWxTZWN0aW9ufSBmcm9tICcuLi8uLi9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEluZm9IZWxwZXJGYWN0b3J5IGZyb20gJy4uLy4uL2NvbW1vbi9pbmZvLWhlbHBlcic7XG5pbXBvcnQgRGltZW5zaW9uU2NhbGVTZWxlY3RvciBmcm9tICcuL2RpbWVuc2lvbi1zY2FsZS1zZWxlY3Rvcic7XG5pbXBvcnQge2NhbWVsaXplfSBmcm9tICdAa2VwbGVyLmdsL3V0aWxzJztcbmltcG9ydCBGaWVsZFNlbGVjdG9yRmFjdG9yeSBmcm9tICcuLi8uLi9jb21tb24vZmllbGQtc2VsZWN0b3InO1xuXG50eXBlIFZpc0NvbmZpZ0J5RmllbGRTZWxlY3RvclByb3BzID0ge1xuICBjaGFubmVsOiBzdHJpbmc7XG4gIGZpZWxkczogRmllbGRbXTtcbiAgaWQ6IHN0cmluZztcbiAgcHJvcGVydHk6IHN0cmluZztcbiAgc2hvd1NjYWxlOiBib29sZWFuO1xuICB1cGRhdGVGaWVsZDogKFxuICAgIHZhbDogcmVhZG9ubHkgKHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBvYmplY3QpW10gfCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgb2JqZWN0IHwgbnVsbFxuICApID0+IHZvaWQ7XG4gIHVwZGF0ZVNjYWxlOiAoXG4gICAgdmFsOiByZWFkb25seSAoc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IG9iamVjdClbXSB8IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBvYmplY3QgfCBudWxsXG4gICkgPT4gdm9pZDtcbiAgc2NhbGVUeXBlPzogc3RyaW5nO1xuICBzZWxlY3RlZEZpZWxkPzogRmllbGQ7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBsYWJlbD86IHN0cmluZztcbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIHNjYWxlT3B0aW9uczogc3RyaW5nW107XG59ICYgV3JhcHBlZENvbXBvbmVudFByb3BzO1xuXG5WaXNDb25maWdCeUZpZWxkU2VsZWN0b3JGYWN0b3J5LmRlcHMgPSBbSW5mb0hlbHBlckZhY3RvcnksIEZpZWxkU2VsZWN0b3JGYWN0b3J5XTtcblxuZnVuY3Rpb24gVmlzQ29uZmlnQnlGaWVsZFNlbGVjdG9yRmFjdG9yeShcbiAgSW5mb0hlbHBlcjogUmV0dXJuVHlwZTx0eXBlb2YgSW5mb0hlbHBlckZhY3Rvcnk+LFxuICBGaWVsZFNlbGVjdG9yOiBSZXR1cm5UeXBlPHR5cGVvZiBGaWVsZFNlbGVjdG9yRmFjdG9yeT5cbikge1xuICBjbGFzcyBWaXNDb25maWdCeUZpZWxkU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQ8VmlzQ29uZmlnQnlGaWVsZFNlbGVjdG9yUHJvcHM+IHtcbiAgICBfdXBkYXRlVmlzQnlGaWVsZCA9IChcbiAgICAgIHZhbDpcbiAgICAgICAgfCByZWFkb25seSAoc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IG9iamVjdClbXVxuICAgICAgICB8IHN0cmluZ1xuICAgICAgICB8IG51bWJlclxuICAgICAgICB8IGJvb2xlYW5cbiAgICAgICAgfCBvYmplY3RcbiAgICAgICAgfCBudWxsXG4gICAgKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnVwZGF0ZUZpZWxkKHZhbCk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcHJvcGVydHksXG4gICAgICAgIHNob3dTY2FsZSxcbiAgICAgICAgc2VsZWN0ZWRGaWVsZCxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGxhYmVsLFxuICAgICAgICBpbnRsLFxuICAgICAgICBzY2FsZU9wdGlvbnMgPSBbXVxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgICAgPFBhbmVsTGFiZWxXcmFwcGVyPlxuICAgICAgICAgICAgICA8UGFuZWxMYWJlbD5cbiAgICAgICAgICAgICAgICB7KGxhYmVsICYmIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtsYWJlbH0gLz4pIHx8IChcbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibGF5ZXIucHJvcGVydHlCYXNlZE9uXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IGludGwuZm9ybWF0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogYHByb3BlcnR5LiR7Y2FtZWxpemUocHJvcGVydHkpfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TWVzc2FnZTogcHJvcGVydHlcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1BhbmVsTGFiZWw+XG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgPEluZm9IZWxwZXJcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cbiAgICAgICAgICAgICAgICAgIGlkPXtgJHt0aGlzLnByb3BzLmlkfS0ke3Byb3BlcnR5fWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvUGFuZWxMYWJlbFdyYXBwZXI+XG4gICAgICAgICAgICA8RmllbGRTZWxlY3RvclxuICAgICAgICAgICAgICBmaWVsZHM9e3RoaXMucHJvcHMuZmllbGRzfVxuICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRGaWVsZCAmJiBzZWxlY3RlZEZpZWxkLm5hbWV9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5fdXBkYXRlVmlzQnlGaWVsZH1cbiAgICAgICAgICAgICAgZXJhc2FibGVcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7c2hvd1NjYWxlID8gKFxuICAgICAgICAgICAgICA8RGltZW5zaW9uU2NhbGVTZWxlY3RvclxuICAgICAgICAgICAgICAgIHNjYWxlVHlwZT17dGhpcy5wcm9wcy5zY2FsZVR5cGV9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17c2NhbGVPcHRpb25zfVxuICAgICAgICAgICAgICAgIGxhYmVsPXtgJHtwcm9wZXJ0eX0gc2NhbGVgfVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLnByb3BzLnVwZGF0ZVNjYWxlfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzY2FsZU9wdGlvbnMubGVuZ3RoIDwgMn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1NpZGVQYW5lbFNlY3Rpb24+XG4gICAgICApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaW5qZWN0SW50bChWaXNDb25maWdCeUZpZWxkU2VsZWN0b3IpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBWaXNDb25maWdCeUZpZWxkU2VsZWN0b3JGYWN0b3J5O1xuIl19