"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactMapGl = _interopRequireDefault(require("react-map-gl"));

var _styledComponents2 = require("../common/styled-components");

var _styles = require("@kepler.gl/styles");

var _utils = require("@kepler.gl/utils");

var _reactIntl = require("react-intl");

var _localization = require("@kepler.gl/localization");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var MapH = 190;
var MapW = 264;
var ErrorMsg = {
  styleError: 'Failed to load map style, make sure it is published. For private style, paste in your access token.'
};

var PreviewMap = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 116px;\n  flex-shrink: 0;\n\n  .preview-title {\n    font-weight: 500;\n    font-size: 10px;\n    padding: 8px 0px;\n  }\n\n  .preview-title.error {\n    color: ", ";\n  }\n\n  ", ";\n\n  ", ";\n"])), function (props) {
  return props.theme.errorColor;
}, _styles.media.portable(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: 32px;\n  "]))), _styles.media.palm(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: unset;\n    .preview-title {\n      margin-top: 0px;\n    }\n  "]))));

var StyledPreviewImage = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border-radius: 4px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.18);\n  width: ", "px;\n  height: ", "px;\n  position: relative;\n\n  .preview-image-placeholder {\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  .preview-image-spinner {\n    position: absolute;\n    left: calc(50% - 25px);\n    top: calc(50% - 25px);\n  }\n"])), function (props) {
  return props.theme.modalImagePlaceHolder;
}, MapW, MapH);

var InlineLink = _styledComponents["default"].a(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: 500;\n\n  :hover {\n    cursor: pointer;\n  }\n"])));

function AddMapStyleModalFactory() {
  var AddMapStyleModal = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(AddMapStyleModal, _Component);

    var _super = _createSuper(AddMapStyleModal);

    function AddMapStyleModal() {
      var _this;

      (0, _classCallCheck2["default"])(this, AddMapStyleModal);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        reRenderKey: 0,
        previousToken: null
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mapRef", void 0);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_map", void 0);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "loadMapStyleJson", function (style) {
        _this.props.loadCustomMapStyle({
          style: style,
          error: false
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "loadMapStyleError", function () {
        _this.props.loadCustomMapStyle({
          error: true
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(AddMapStyleModal, [{
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var _this2 = this;

        var map = this.mapRef && this.mapRef.getMap();

        if (map && this._map !== map) {
          this._map = map;
          map.on('style.load', function () {
            var style = map.getStyle();

            _this2.loadMapStyleJson(style);
          });
          map.on('error', function () {
            _this2.loadMapStyleError();
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$props = this.props,
            inputStyle = _this$props.inputStyle,
            mapState = _this$props.mapState,
            mapboxApiUrl = _this$props.mapboxApiUrl,
            intl = _this$props.intl;
        var mapboxApiAccessToken = inputStyle.accessToken || this.props.mapboxApiAccessToken;

        var mapProps = _objectSpread(_objectSpread({}, mapState), {}, {
          mapboxApiUrl: mapboxApiUrl,
          mapboxApiAccessToken: mapboxApiAccessToken,
          preserveDrawingBuffer: true,
          transformRequest: _utils.transformRequest
        });

        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "add-map-style-modal"
        }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalContent, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalVerticalPanel, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "modal-section-title"
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'modal.addStyle.pasteTitle'
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "modal-section-subtitle"
        }, intl.formatMessage({
          id: 'modal.addStyle.pasteSubtitle0'
        }), /*#__PURE__*/_react["default"].createElement(InlineLink, {
          target: "_blank",
          href: "https://www.mapbox.com/help/studio-manual-publish/#style-url"
        }, ' ', intl.formatMessage({
          id: 'modal.addStyle.pasteSubtitle2'
        })), ' ', intl.formatMessage({
          id: 'modal.addStyle.pasteSubtitle3'
        }), /*#__PURE__*/_react["default"].createElement(InlineLink, {
          target: "_blank",
          href: "https://docs.mapbox.com/mapbox-gl-js/style-spec"
        }, ' ', intl.formatMessage({
          id: 'modal.addStyle.pasteSubtitle4'
        }))), /*#__PURE__*/_react["default"].createElement(_styledComponents2.InputLight, {
          type: "text",
          value: inputStyle.url || '',
          onChange: function onChange(_ref) {
            var value = _ref.target.value;
            return _this3.props.inputMapStyle({
              url: value
            });
          },
          placeholder: "e.g. mapbox://styles/username/style, http://my.stles.com/xxx/style.json "
        })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "modal-section-title"
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'modal.addStyle.publishTitle'
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "modal-section-subtitle"
        }, intl.formatMessage({
          id: 'modal.addStyle.publishSubtitle1'
        }), /*#__PURE__*/_react["default"].createElement(InlineLink, {
          target: "_blank",
          href: "https://www.mapbox.com/studio/styles/"
        }, ' ', "mapbox"), ' ', intl.formatMessage({
          id: 'modal.addStyle.publishSubtitle2'
        }), /*#__PURE__*/_react["default"].createElement(InlineLink, {
          target: "_blank",
          href: "https://www.mapbox.com/help/studio-manual-publish/"
        }, ' ', intl.formatMessage({
          id: 'modal.addStyle.publishSubtitle3'
        })), ' ', intl.formatMessage({
          id: 'modal.addStyle.publishSubtitle4'
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "modal-section-subtitle"
        }, intl.formatMessage({
          id: 'modal.addStyle.publishSubtitle5'
        }), /*#__PURE__*/_react["default"].createElement(InlineLink, {
          target: "_blank",
          href: "https://www.mapbox.com/help/how-access-tokens-work/"
        }, ' ', intl.formatMessage({
          id: 'modal.addStyle.publishSubtitle6'
        })), ' ', intl.formatMessage({
          id: 'modal.addStyle.publishSubtitle7'
        })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.InputLight, {
          type: "text",
          value: inputStyle.accessToken || '',
          onChange: function onChange(_ref2) {
            var value = _ref2.target.value;
            return _this3.props.inputMapStyle({
              accessToken: value
            });
          },
          placeholder: intl.formatMessage({
            id: 'modal.addStyle.exampleToken'
          })
        })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalSection, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: "modal-section-title"
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'modal.addStyle.namingTitle'
        })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.InputLight, {
          type: "text",
          value: inputStyle.label || '',
          onChange: function onChange(_ref3) {
            var value = _ref3.target.value;
            return _this3.props.inputMapStyle({
              label: value
            });
          }
        }))), /*#__PURE__*/_react["default"].createElement(PreviewMap, null, /*#__PURE__*/_react["default"].createElement("div", {
          className: (0, _classnames["default"])('preview-title', {
            error: inputStyle.error
          })
        }, inputStyle.error ? ErrorMsg.styleError : inputStyle.style && inputStyle.style.name || ''), /*#__PURE__*/_react["default"].createElement(StyledPreviewImage, {
          className: "preview-image"
        }, !inputStyle.isValid ? /*#__PURE__*/_react["default"].createElement("div", {
          className: "preview-image-spinner"
        }) : /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledMapContainer, null, /*#__PURE__*/_react["default"].createElement(_reactMapGl["default"], (0, _extends2["default"])({}, mapProps, {
          ref: function ref(el) {
            _this3.mapRef = el;
          },
          key: this.state.reRenderKey,
          width: MapW,
          height: MapH,
          mapStyle: inputStyle.url === null ? undefined : inputStyle.url
        })))))));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        if (props.inputStyle && props.inputStyle.accessToken && props.inputStyle.accessToken !== state.previousToken) {
          // toke has changed
          // ReactMapGl doesn't re-create map when token has changed
          // here we force the map to update
          return {
            reRenderKey: state.reRenderKey + 1,
            previousToken: props.inputStyle.accessToken
          };
        }

        return null;
      }
    }]);
    return AddMapStyleModal;
  }(_react.Component);

  return (0, _reactIntl.injectIntl)((0, _reactLifecyclesCompat.polyfill)(AddMapStyleModal));
}

var _default = AddMapStyleModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tb2RhbHMvYWRkLW1hcC1zdHlsZS1tb2RhbC50c3giXSwibmFtZXMiOlsiTWFwSCIsIk1hcFciLCJFcnJvck1zZyIsInN0eWxlRXJyb3IiLCJQcmV2aWV3TWFwIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsImVycm9yQ29sb3IiLCJtZWRpYSIsInBvcnRhYmxlIiwicGFsbSIsIlN0eWxlZFByZXZpZXdJbWFnZSIsIm1vZGFsSW1hZ2VQbGFjZUhvbGRlciIsIklubGluZUxpbmsiLCJhIiwiQWRkTWFwU3R5bGVNb2RhbEZhY3RvcnkiLCJBZGRNYXBTdHlsZU1vZGFsIiwicmVSZW5kZXJLZXkiLCJwcmV2aW91c1Rva2VuIiwic3R5bGUiLCJsb2FkQ3VzdG9tTWFwU3R5bGUiLCJlcnJvciIsIm1hcCIsIm1hcFJlZiIsImdldE1hcCIsIl9tYXAiLCJvbiIsImdldFN0eWxlIiwibG9hZE1hcFN0eWxlSnNvbiIsImxvYWRNYXBTdHlsZUVycm9yIiwiaW5wdXRTdHlsZSIsIm1hcFN0YXRlIiwibWFwYm94QXBpVXJsIiwiaW50bCIsIm1hcGJveEFwaUFjY2Vzc1Rva2VuIiwiYWNjZXNzVG9rZW4iLCJtYXBQcm9wcyIsInByZXNlcnZlRHJhd2luZ0J1ZmZlciIsInRyYW5zZm9ybVJlcXVlc3QiLCJmb3JtYXRNZXNzYWdlIiwiaWQiLCJ1cmwiLCJ2YWx1ZSIsInRhcmdldCIsImlucHV0TWFwU3R5bGUiLCJsYWJlbCIsIm5hbWUiLCJpc1ZhbGlkIiwiZWwiLCJzdGF0ZSIsInVuZGVmaW5lZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBT0E7O0FBR0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUlBLElBQU1BLElBQUksR0FBRyxHQUFiO0FBQ0EsSUFBTUMsSUFBSSxHQUFHLEdBQWI7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LyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cG9seWZpbGx9IGZyb20gJ3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgTWFwYm94R0xNYXAsIHtNYXBSZWZ9IGZyb20gJ3JlYWN0LW1hcC1nbCc7XG5pbXBvcnQge1xuICBTdHlsZWRNb2RhbENvbnRlbnQsXG4gIElucHV0TGlnaHQsXG4gIFN0eWxlZE1hcENvbnRhaW5lcixcbiAgU3R5bGVkTW9kYWxWZXJ0aWNhbFBhbmVsLFxuICBTdHlsZWRNb2RhbFNlY3Rpb25cbn0gZnJvbSAnLi4vY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7bWVkaWF9IGZyb20gJ0BrZXBsZXIuZ2wvc3R5bGVzJztcblxuLy8gVXRpbHNcbmltcG9ydCB7dHJhbnNmb3JtUmVxdWVzdH0gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5pbXBvcnQge2luamVjdEludGwsIEludGxTaGFwZX0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ0BrZXBsZXIuZ2wvbG9jYWxpemF0aW9uJztcbmltcG9ydCBtYXBib3hnbCBmcm9tICdtYXBib3gtZ2wnO1xuaW1wb3J0IHtJbnB1dFN0eWxlLCBNYXBTdGF0ZX0gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5cbmNvbnN0IE1hcEggPSAxOTA7XG5jb25zdCBNYXBXID0gMjY0O1xuY29uc3QgRXJyb3JNc2cgPSB7XG4gIHN0eWxlRXJyb3I6XG4gICAgJ0ZhaWxlZCB0byBsb2FkIG1hcCBzdHlsZSwgbWFrZSBzdXJlIGl0IGlzIHB1Ymxpc2hlZC4gRm9yIHByaXZhdGUgc3R5bGUsIHBhc3RlIGluIHlvdXIgYWNjZXNzIHRva2VuLidcbn07XG5cbmNvbnN0IFByZXZpZXdNYXAgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDExNnB4O1xuICBmbGV4LXNocmluazogMDtcblxuICAucHJldmlldy10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZzogOHB4IDBweDtcbiAgfVxuXG4gIC5wcmV2aWV3LXRpdGxlLmVycm9yIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5lcnJvckNvbG9yfTtcbiAgfVxuXG4gICR7bWVkaWEucG9ydGFibGVgXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gIGB9O1xuXG4gICR7bWVkaWEucGFsbWBcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gICAgLnByZXZpZXctdGl0bGUge1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIH1cbiAgYH07XG5gO1xuXG5jb25zdCBTdHlsZWRQcmV2aWV3SW1hZ2UgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1vZGFsSW1hZ2VQbGFjZUhvbGRlcn07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIHdpZHRoOiAke01hcFd9cHg7XG4gIGhlaWdodDogJHtNYXBIfXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLnByZXZpZXctaW1hZ2UtcGxhY2Vob2xkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgfVxuXG4gIC5wcmV2aWV3LWltYWdlLXNwaW5uZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDI1cHgpO1xuICAgIHRvcDogY2FsYyg1MCUgLSAyNXB4KTtcbiAgfVxuYDtcblxuY29uc3QgSW5saW5lTGluayA9IHN0eWxlZC5hYFxuICBmb250LXdlaWdodDogNTAwO1xuXG4gIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgQWRkTWFwU3R5bGVNb2RhbFByb3BzIHtcbiAgaW5wdXRNYXBTdHlsZTogRnVuY3Rpb247XG4gIGlucHV0U3R5bGU6IElucHV0U3R5bGU7XG4gIGxvYWRDdXN0b21NYXBTdHlsZTogRnVuY3Rpb247XG4gIG1hcGJveEFwaUFjY2Vzc1Rva2VuOiBzdHJpbmc7XG4gIG1hcGJveEFwaVVybD86IHN0cmluZztcbiAgbWFwU3RhdGU6IE1hcFN0YXRlO1xuICBpbnRsOiBJbnRsU2hhcGU7XG59XG5cbmZ1bmN0aW9uIEFkZE1hcFN0eWxlTW9kYWxGYWN0b3J5KCkge1xuICBjbGFzcyBBZGRNYXBTdHlsZU1vZGFsIGV4dGVuZHMgQ29tcG9uZW50PEFkZE1hcFN0eWxlTW9kYWxQcm9wcz4ge1xuICAgIHN0YXRlID0ge1xuICAgICAgcmVSZW5kZXJLZXk6IDAsXG4gICAgICBwcmV2aW91c1Rva2VuOiBudWxsXG4gICAgfTtcblxuICAgIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmlucHV0U3R5bGUgJiZcbiAgICAgICAgcHJvcHMuaW5wdXRTdHlsZS5hY2Nlc3NUb2tlbiAmJlxuICAgICAgICBwcm9wcy5pbnB1dFN0eWxlLmFjY2Vzc1Rva2VuICE9PSBzdGF0ZS5wcmV2aW91c1Rva2VuXG4gICAgICApIHtcbiAgICAgICAgLy8gdG9rZSBoYXMgY2hhbmdlZFxuICAgICAgICAvLyBSZWFjdE1hcEdsIGRvZXNuJ3QgcmUtY3JlYXRlIG1hcCB3aGVuIHRva2VuIGhhcyBjaGFuZ2VkXG4gICAgICAgIC8vIGhlcmUgd2UgZm9yY2UgdGhlIG1hcCB0byB1cGRhdGVcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlUmVuZGVyS2V5OiBzdGF0ZS5yZVJlbmRlcktleSArIDEsXG4gICAgICAgICAgcHJldmlvdXNUb2tlbjogcHJvcHMuaW5wdXRTdHlsZS5hY2Nlc3NUb2tlblxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBtYXBSZWY6IE1hcFJlZiB8IG51bGwgfCB1bmRlZmluZWQ7XG4gICAgX21hcDogbWFwYm94Z2wuTWFwIHwgdW5kZWZpbmVkO1xuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgY29uc3QgbWFwID0gdGhpcy5tYXBSZWYgJiYgdGhpcy5tYXBSZWYuZ2V0TWFwKCk7XG4gICAgICBpZiAobWFwICYmIHRoaXMuX21hcCAhPT0gbWFwKSB7XG4gICAgICAgIHRoaXMuX21hcCA9IG1hcDtcblxuICAgICAgICBtYXAub24oJ3N0eWxlLmxvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3R5bGUgPSBtYXAuZ2V0U3R5bGUoKTtcbiAgICAgICAgICB0aGlzLmxvYWRNYXBTdHlsZUpzb24oc3R5bGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtYXAub24oJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZE1hcFN0eWxlRXJyb3IoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbG9hZE1hcFN0eWxlSnNvbiA9IHN0eWxlID0+IHtcbiAgICAgIHRoaXMucHJvcHMubG9hZEN1c3RvbU1hcFN0eWxlKHtzdHlsZSwgZXJyb3I6IGZhbHNlfSk7XG4gICAgfTtcblxuICAgIGxvYWRNYXBTdHlsZUVycm9yID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5sb2FkQ3VzdG9tTWFwU3R5bGUoe2Vycm9yOiB0cnVlfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtpbnB1dFN0eWxlLCBtYXBTdGF0ZSwgbWFwYm94QXBpVXJsLCBpbnRsfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGNvbnN0IG1hcGJveEFwaUFjY2Vzc1Rva2VuID0gaW5wdXRTdHlsZS5hY2Nlc3NUb2tlbiB8fCB0aGlzLnByb3BzLm1hcGJveEFwaUFjY2Vzc1Rva2VuO1xuICAgICAgY29uc3QgbWFwUHJvcHMgPSB7XG4gICAgICAgIC4uLm1hcFN0YXRlLFxuICAgICAgICBtYXBib3hBcGlVcmwsXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsXG4gICAgICAgIHRyYW5zZm9ybVJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLW1hcC1zdHlsZS1tb2RhbFwiPlxuICAgICAgICAgIDxTdHlsZWRNb2RhbENvbnRlbnQ+XG4gICAgICAgICAgICA8U3R5bGVkTW9kYWxWZXJ0aWNhbFBhbmVsPlxuICAgICAgICAgICAgICA8U3R5bGVkTW9kYWxTZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtc2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5hZGRTdHlsZS5wYXN0ZVRpdGxlJ30gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXNlY3Rpb24tc3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIHtpbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOiAnbW9kYWwuYWRkU3R5bGUucGFzdGVTdWJ0aXRsZTAnfSl9XG4gICAgICAgICAgICAgICAgICA8SW5saW5lTGlua1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubWFwYm94LmNvbS9oZWxwL3N0dWRpby1tYW51YWwtcHVibGlzaC8jc3R5bGUtdXJsXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAge2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6ICdtb2RhbC5hZGRTdHlsZS5wYXN0ZVN1YnRpdGxlMid9KX1cbiAgICAgICAgICAgICAgICAgIDwvSW5saW5lTGluaz57JyAnfVxuICAgICAgICAgICAgICAgICAge2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6ICdtb2RhbC5hZGRTdHlsZS5wYXN0ZVN1YnRpdGxlMyd9KX1cbiAgICAgICAgICAgICAgICAgIDxJbmxpbmVMaW5rXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RvY3MubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvc3R5bGUtc3BlY1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHsnICd9XG4gICAgICAgICAgICAgICAgICAgIHtpbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOiAnbW9kYWwuYWRkU3R5bGUucGFzdGVTdWJ0aXRsZTQnfSl9XG4gICAgICAgICAgICAgICAgICA8L0lubGluZUxpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPElucHV0TGlnaHRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFN0eWxlLnVybCB8fCAnJ31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoe3RhcmdldDoge3ZhbHVlfX0pID0+IHRoaXMucHJvcHMuaW5wdXRNYXBTdHlsZSh7dXJsOiB2YWx1ZX0pfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIG1hcGJveDovL3N0eWxlcy91c2VybmFtZS9zdHlsZSwgaHR0cDovL215LnN0bGVzLmNvbS94eHgvc3R5bGUuanNvbiBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvU3R5bGVkTW9kYWxTZWN0aW9uPlxuXG4gICAgICAgICAgICAgIDxTdHlsZWRNb2RhbFNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1zZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmFkZFN0eWxlLnB1Ymxpc2hUaXRsZSd9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1zZWN0aW9uLXN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICB7aW50bC5mb3JtYXRNZXNzYWdlKHtpZDogJ21vZGFsLmFkZFN0eWxlLnB1Ymxpc2hTdWJ0aXRsZTEnfSl9XG4gICAgICAgICAgICAgICAgICA8SW5saW5lTGluayB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly93d3cubWFwYm94LmNvbS9zdHVkaW8vc3R5bGVzL1wiPlxuICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICBtYXBib3hcbiAgICAgICAgICAgICAgICAgIDwvSW5saW5lTGluaz57JyAnfVxuICAgICAgICAgICAgICAgICAge2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6ICdtb2RhbC5hZGRTdHlsZS5wdWJsaXNoU3VidGl0bGUyJ30pfVxuICAgICAgICAgICAgICAgICAgPElubGluZUxpbmtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vaGVscC9zdHVkaW8tbWFudWFsLXB1Ymxpc2gvXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAge2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6ICdtb2RhbC5hZGRTdHlsZS5wdWJsaXNoU3VidGl0bGUzJ30pfVxuICAgICAgICAgICAgICAgICAgPC9JbmxpbmVMaW5rPnsnICd9XG4gICAgICAgICAgICAgICAgICB7aW50bC5mb3JtYXRNZXNzYWdlKHtpZDogJ21vZGFsLmFkZFN0eWxlLnB1Ymxpc2hTdWJ0aXRsZTQnfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXNlY3Rpb24tc3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIHtpbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOiAnbW9kYWwuYWRkU3R5bGUucHVibGlzaFN1YnRpdGxlNSd9KX1cbiAgICAgICAgICAgICAgICAgIDxJbmxpbmVMaW5rXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL2hlbHAvaG93LWFjY2Vzcy10b2tlbnMtd29yay9cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICB7aW50bC5mb3JtYXRNZXNzYWdlKHtpZDogJ21vZGFsLmFkZFN0eWxlLnB1Ymxpc2hTdWJ0aXRsZTYnfSl9XG4gICAgICAgICAgICAgICAgICA8L0lubGluZUxpbms+eycgJ31cbiAgICAgICAgICAgICAgICAgIHtpbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOiAnbW9kYWwuYWRkU3R5bGUucHVibGlzaFN1YnRpdGxlNyd9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8SW5wdXRMaWdodFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0U3R5bGUuYWNjZXNzVG9rZW4gfHwgJyd9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHt0YXJnZXQ6IHt2YWx1ZX19KSA9PiB0aGlzLnByb3BzLmlucHV0TWFwU3R5bGUoe2FjY2Vzc1Rva2VuOiB2YWx1ZX0pfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6ICdtb2RhbC5hZGRTdHlsZS5leGFtcGxlVG9rZW4nfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9TdHlsZWRNb2RhbFNlY3Rpb24+XG5cbiAgICAgICAgICAgICAgPFN0eWxlZE1vZGFsU2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuYWRkU3R5bGUubmFtaW5nVGl0bGUnfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxJbnB1dExpZ2h0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRTdHlsZS5sYWJlbCB8fCAnJ31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoe3RhcmdldDoge3ZhbHVlfX0pID0+IHRoaXMucHJvcHMuaW5wdXRNYXBTdHlsZSh7bGFiZWw6IHZhbHVlfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9TdHlsZWRNb2RhbFNlY3Rpb24+XG4gICAgICAgICAgICA8L1N0eWxlZE1vZGFsVmVydGljYWxQYW5lbD5cbiAgICAgICAgICAgIDxQcmV2aWV3TWFwPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdwcmV2aWV3LXRpdGxlJywge1xuICAgICAgICAgICAgICAgICAgZXJyb3I6IGlucHV0U3R5bGUuZXJyb3JcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpbnB1dFN0eWxlLmVycm9yXG4gICAgICAgICAgICAgICAgICA/IEVycm9yTXNnLnN0eWxlRXJyb3JcbiAgICAgICAgICAgICAgICAgIDogKGlucHV0U3R5bGUuc3R5bGUgJiYgaW5wdXRTdHlsZS5zdHlsZS5uYW1lKSB8fCAnJ31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxTdHlsZWRQcmV2aWV3SW1hZ2UgY2xhc3NOYW1lPVwicHJldmlldy1pbWFnZVwiPlxuICAgICAgICAgICAgICAgIHshaW5wdXRTdHlsZS5pc1ZhbGlkID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3LWltYWdlLXNwaW5uZXJcIiAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8U3R5bGVkTWFwQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8TWFwYm94R0xNYXBcbiAgICAgICAgICAgICAgICAgICAgICB7Li4ubWFwUHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgcmVmPXtlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcFJlZiA9IGVsO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXt0aGlzLnN0YXRlLnJlUmVuZGVyS2V5fVxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXtNYXBXfVxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17TWFwSH1cbiAgICAgICAgICAgICAgICAgICAgICBtYXBTdHlsZT17aW5wdXRTdHlsZS51cmwgPT09IG51bGwgPyB1bmRlZmluZWQgOiBpbnB1dFN0eWxlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvU3R5bGVkTWFwQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvU3R5bGVkUHJldmlld0ltYWdlPlxuICAgICAgICAgICAgPC9QcmV2aWV3TWFwPlxuICAgICAgICAgIDwvU3R5bGVkTW9kYWxDb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluamVjdEludGwocG9seWZpbGwoQWRkTWFwU3R5bGVNb2RhbCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRNYXBTdHlsZU1vZGFsRmFjdG9yeTtcbiJdfQ==