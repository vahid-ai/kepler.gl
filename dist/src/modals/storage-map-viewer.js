"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

var _icons = require("../common/icons");

var _localization = require("@kepler.gl/localization");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var imageH = 108;

var StyledAssetGallery = _styledComponents["default"].div.attrs({
  className: 'storage-asset-gallery'
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n"])));

var StyledAssetItem = _styledComponents["default"].div.attrs({
  className: 'asset__item'
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 23%;\n  margin-right: 2%;\n  max-width: 500px;\n  margin-bottom: 40px;\n  height: 245px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  :last {\n    margin-right: 0;\n  }\n\n  .asset__title {\n    font-size: 12px;\n    font-weight: 500;\n    color: ", ";\n    line-height: 18px;\n    height: 32px;\n  }\n\n  .asset__image {\n    border-radius: 4px;\n    overflow: hidden;\n    margin-bottom: 12px;\n    opacity: 0.9;\n    transition: opacity 0.4s ease;\n    position: relative;\n    line-height: 0;\n    height: ", "px;\n    flex-shrink: 0;\n\n    img {\n      max-width: 100%;\n    }\n    :hover {\n      cursor: pointer;\n      opacity: 1;\n    }\n  }\n\n  .asset__image__caption {\n    font-size: 11px;\n    font-weight: 400;\n    line-height: 16px;\n    margin-top: 10px;\n    height: 48px;\n    overflow: hidden;\n    display: -webkit-box;\n    text-overflow: ellipsis;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n  }\n\n  .asset__last-updated {\n    font-size: 11px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.textColorLT;
}, imageH, function (props) {
  return props.theme.textColorLT;
});

var BackLink = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  font-size: 14px;\n  align-items: center;\n  color: ", ";\n  cursor: pointer;\n  margin-bottom: 40px;\n\n  :hover {\n    font-weight: 500;\n  }\n\n  span {\n    white-space: nowrap;\n  }\n  svg {\n    margin-right: 10px;\n  }\n"])), function (props) {
  return props.theme.titleColorLT;
});

var StyledError = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  color: red;\n  font-size: 14px;\n  margin-bottom: 16px;\n"])));

var getDuration = function getDuration() {
  var last = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return _moment["default"].duration(new Date().valueOf() - last).humanize();
};

var AssetItem = function AssetItem(_ref) {
  var asset = _ref.asset,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement(StyledAssetItem, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "asset__image",
    onClick: onClick
  }, asset.imageUrl && /*#__PURE__*/_react["default"].createElement("img", {
    src: asset.imageUrl
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "asset__title"
  }, asset.label || asset.title), /*#__PURE__*/_react["default"].createElement("div", {
    className: "asset__image__caption"
  }, asset.description), asset.lastUpdated ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "asset__last-updated"
  }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: 'modal.storageMapViewer.lastModified',
    values: {
      lastUpdated: getDuration(asset.lastUpdated)
    }
  })) : null);
};

var StorageAssetsViewer = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(StorageAssetsViewer, _React$Component);

  var _super = _createSuper(StorageAssetsViewer);

  function StorageAssetsViewer() {
    (0, _classCallCheck2["default"])(this, StorageAssetsViewer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(StorageAssetsViewer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          assets = _this$props.assets,
          onLoadAsset = _this$props.onLoadAsset,
          back = _this$props.back,
          error = _this$props.error;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "storage-asset-viewer"
      }, /*#__PURE__*/_react["default"].createElement(BackLink, {
        onClick: back
      }, /*#__PURE__*/_react["default"].createElement(_icons.LeftArrow, {
        height: "12px"
      }), /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
        id: 'modal.storageMapViewer.back'
      }))), error && /*#__PURE__*/_react["default"].createElement(StyledError, null, error.message), /*#__PURE__*/_react["default"].createElement(StyledAssetGallery, null, assets.map(function (sp) {
        return /*#__PURE__*/_react["default"].createElement(AssetItem, {
          asset: sp,
          key: sp.id,
          onClick: function onClick() {
            return onLoadAsset(sp);
          }
        });
      })));
    }
  }]);
  return StorageAssetsViewer;
}(_react["default"].Component);

var _default = StorageAssetsViewer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tb2RhbHMvc3RvcmFnZS1tYXAtdmlld2VyLnRzeCJdLCJuYW1lcyI6WyJpbWFnZUgiLCJTdHlsZWRBc3NldEdhbGxlcnkiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsIlN0eWxlZEFzc2V0SXRlbSIsInByb3BzIiwidGhlbWUiLCJ0ZXh0Q29sb3JMVCIsIkJhY2tMaW5rIiwidGl0bGVDb2xvckxUIiwiU3R5bGVkRXJyb3IiLCJnZXREdXJhdGlvbiIsImxhc3QiLCJtb21lbnQiLCJkdXJhdGlvbiIsIkRhdGUiLCJ2YWx1ZU9mIiwiaHVtYW5pemUiLCJBc3NldEl0ZW0iLCJhc3NldCIsIm9uQ2xpY2siLCJpbWFnZVVybCIsImxhYmVsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxhc3RVcGRhdGVkIiwiU3RvcmFnZUFzc2V0c1ZpZXdlciIsImFzc2V0cyIsIm9uTG9hZEFzc2V0IiwiYmFjayIsImVycm9yIiwibWVzc2FnZSIsIm1hcCIsInNwIiwiaWQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxHQUFmOztBQUVBLElBQU1DLGtCQUFrQixHQUFHQyw2QkFBT0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQzFDQyxFQUFBQSxTQUFTLEVBQUU7QUFEK0IsQ0FBakIsQ0FBSCw4SkFBeEI7O0FBUUEsSUFBTUMsZUFBZSxHQUFHSiw2QkFBT0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQ3ZDQyxFQUFBQSxTQUFTLEVBQUU7QUFENEIsQ0FBakIsQ0FBSCxtb0NBbUJSLFVBQUFFLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBaEI7QUFBQSxDQW5CRyxFQWdDUFQsTUFoQ08sRUEyRFIsVUFBQU8sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxXQUFoQjtBQUFBLENBM0RHLENBQXJCOztBQStEQSxJQUFNQyxRQUFRLEdBQUdSLDZCQUFPQyxHQUFWLGlWQUlILFVBQUFJLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsWUFBaEI7QUFBQSxDQUpGLENBQWQ7O0FBb0JBLElBQU1DLFdBQVcsR0FBR1YsNkJBQU9DLEdBQVYscUpBQWpCOztBQU1BLElBQU1VLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBQ0MsSUFBRCx1RUFBZ0IsQ0FBaEI7QUFBQSxTQUFzQkMsbUJBQU9DLFFBQVAsQ0FBZ0IsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEtBQXVCSixJQUF2QyxFQUE2Q0ssUUFBN0MsRUFBdEI7QUFBQSxDQUFwQjs7QUFnQkEsSUFBTUMsU0FBbUMsR0FBRyxTQUF0Q0EsU0FBc0M7QUFBQSxNQUFFQyxLQUFGLFFBQUVBLEtBQUY7QUFBQSxNQUFTQyxPQUFULFFBQVNBLE9BQVQ7QUFBQSxzQkFDMUMsZ0NBQUMsZUFBRCxxQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDLGNBQWY7QUFBOEIsSUFBQSxPQUFPLEVBQUVBO0FBQXZDLEtBQ0dELEtBQUssQ0FBQ0UsUUFBTixpQkFBa0I7QUFBSyxJQUFBLEdBQUcsRUFBRUYsS0FBSyxDQUFDRTtBQUFoQixJQURyQixDQURGLGVBSUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQStCRixLQUFLLENBQUNHLEtBQU4sSUFBZUgsS0FBSyxDQUFDSSxLQUFwRCxDQUpGLGVBS0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQXdDSixLQUFLLENBQUNLLFdBQTlDLENBTEYsRUFNR0wsS0FBSyxDQUFDTSxXQUFOLGdCQUNDO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRSxnQ0FBQyw4QkFBRDtBQUNFLElBQUEsRUFBRSxFQUFFLHFDQUROO0FBRUUsSUFBQSxNQUFNLEVBQUU7QUFBQ0EsTUFBQUEsV0FBVyxFQUFFZCxXQUFXLENBQUNRLEtBQUssQ0FBQ00sV0FBUDtBQUF6QjtBQUZWLElBREYsQ0FERCxHQU9HLElBYk4sQ0FEMEM7QUFBQSxDQUE1Qzs7SUF5Qk1DLG1COzs7Ozs7Ozs7Ozs7V0FDSixrQkFBUztBQUFBLHdCQUNvQyxLQUFLckIsS0FEekM7QUFBQSxVQUNBc0IsTUFEQSxlQUNBQSxNQURBO0FBQUEsVUFDUUMsV0FEUixlQUNRQSxXQURSO0FBQUEsVUFDcUJDLElBRHJCLGVBQ3FCQSxJQURyQjtBQUFBLFVBQzJCQyxLQUQzQixlQUMyQkEsS0FEM0I7QUFHUCwwQkFDRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsc0JBQ0UsZ0NBQUMsUUFBRDtBQUFVLFFBQUEsT0FBTyxFQUFFRDtBQUFuQixzQkFDRSxnQ0FBQyxnQkFBRDtBQUFXLFFBQUEsTUFBTSxFQUFDO0FBQWxCLFFBREYsZUFFRSwyREFDRSxnQ0FBQyw4QkFBRDtBQUFrQixRQUFBLEVBQUUsRUFBRTtBQUF0QixRQURGLENBRkYsQ0FERixFQU9HQyxLQUFLLGlCQUFJLGdDQUFDLFdBQUQsUUFBY0EsS0FBSyxDQUFDQyxPQUFwQixDQVBaLGVBUUUsZ0NBQUMsa0JBQUQsUUFDR0osTUFBTSxDQUFDSyxHQUFQLENBQVcsVUFBQUMsRUFBRTtBQUFBLDRCQUNaLGdDQUFDLFNBQUQ7QUFBVyxVQUFBLEtBQUssRUFBRUEsRUFBbEI7QUFBc0IsVUFBQSxHQUFHLEVBQUVBLEVBQUUsQ0FBQ0MsRUFBOUI7QUFBa0MsVUFBQSxPQUFPLEVBQUU7QUFBQSxtQkFBTU4sV0FBVyxDQUFDSyxFQUFELENBQWpCO0FBQUE7QUFBM0MsVUFEWTtBQUFBLE9BQWIsQ0FESCxDQVJGLENBREY7QUFnQkQ7OztFQXBCK0JFLGtCQUFNQyxTOztlQXVCekJWLG1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHtMZWZ0QXJyb3d9IGZyb20gJy4uL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ0BrZXBsZXIuZ2wvbG9jYWxpemF0aW9uJztcblxuY29uc3QgaW1hZ2VIID0gMTA4O1xuXG5jb25zdCBTdHlsZWRBc3NldEdhbGxlcnkgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnc3RvcmFnZS1hc3NldC1nYWxsZXJ5J1xufSlgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC13cmFwOiB3cmFwO1xuYDtcblxuY29uc3QgU3R5bGVkQXNzZXRJdGVtID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2Fzc2V0X19pdGVtJ1xufSlgXG4gIHdpZHRoOiAyMyU7XG4gIG1hcmdpbi1yaWdodDogMiU7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGhlaWdodDogMjQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICA6bGFzdCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5cbiAgLmFzc2V0X190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yTFR9O1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgfVxuXG4gIC5hc3NldF9faW1hZ2Uge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBoZWlnaHQ6ICR7aW1hZ2VIfXB4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgaW1nIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gICAgOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5cbiAgLmFzc2V0X19pbWFnZV9fY2FwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgfVxuXG4gIC5hc3NldF9fbGFzdC11cGRhdGVkIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yTFR9O1xuICB9XG5gO1xuXG5jb25zdCBCYWNrTGluayA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGl0bGVDb2xvckxUfTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuXG4gIDpob3ZlciB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIHNwYW4ge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cbiAgc3ZnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEVycm9yID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuYDtcblxuY29uc3QgZ2V0RHVyYXRpb24gPSAobGFzdDogbnVtYmVyID0gMCkgPT4gbW9tZW50LmR1cmF0aW9uKG5ldyBEYXRlKCkudmFsdWVPZigpIC0gbGFzdCkuaHVtYW5pemUoKTtcblxuaW50ZXJmYWNlIEFzc2V0IHtcbiAgaW1hZ2VVcmw/OiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGxhc3RVcGRhdGVkPzogbnVtYmVyO1xuICBpZD86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEFzc2V0SXRlbVByb3BzIHtcbiAgYXNzZXQ6IEFzc2V0O1xuICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlcjxIVE1MRGl2RWxlbWVudD47XG59XG5cbmNvbnN0IEFzc2V0SXRlbTogUmVhY3QuRkM8QXNzZXRJdGVtUHJvcHM+ID0gKHthc3NldCwgb25DbGlja30pID0+IChcbiAgPFN0eWxlZEFzc2V0SXRlbT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFzc2V0X19pbWFnZVwiIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAge2Fzc2V0LmltYWdlVXJsICYmIDxpbWcgc3JjPXthc3NldC5pbWFnZVVybH0gLz59XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhc3NldF9fdGl0bGVcIj57YXNzZXQubGFiZWwgfHwgYXNzZXQudGl0bGV9PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhc3NldF9faW1hZ2VfX2NhcHRpb25cIj57YXNzZXQuZGVzY3JpcHRpb259PC9kaXY+XG4gICAge2Fzc2V0Lmxhc3RVcGRhdGVkID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3NldF9fbGFzdC11cGRhdGVkXCI+XG4gICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgaWQ9eydtb2RhbC5zdG9yYWdlTWFwVmlld2VyLmxhc3RNb2RpZmllZCd9XG4gICAgICAgICAgdmFsdWVzPXt7bGFzdFVwZGF0ZWQ6IGdldER1cmF0aW9uKGFzc2V0Lmxhc3RVcGRhdGVkKX19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApIDogbnVsbH1cbiAgPC9TdHlsZWRBc3NldEl0ZW0+XG4pO1xuXG5pbnRlcmZhY2UgU3RvcmFnZUFzc2V0c1ZpZXdlclByb3BzIHtcbiAgYXNzZXRzOiBBc3NldFtdO1xuICBvbkxvYWRBc3NldDogKGFzc2V0OiBBc3NldCkgPT4gdm9pZDtcbiAgYmFjaz86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyPEhUTUxEaXZFbGVtZW50PjtcbiAgZXJyb3I/OiB7bWVzc2FnZT86IHN0cmluZ307XG59XG5cbmNsYXNzIFN0b3JhZ2VBc3NldHNWaWV3ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8U3RvcmFnZUFzc2V0c1ZpZXdlclByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7YXNzZXRzLCBvbkxvYWRBc3NldCwgYmFjaywgZXJyb3J9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0b3JhZ2UtYXNzZXQtdmlld2VyXCI+XG4gICAgICAgIDxCYWNrTGluayBvbkNsaWNrPXtiYWNrfT5cbiAgICAgICAgICA8TGVmdEFycm93IGhlaWdodD1cIjEycHhcIiAvPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5zdG9yYWdlTWFwVmlld2VyLmJhY2snfSAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9CYWNrTGluaz5cbiAgICAgICAge2Vycm9yICYmIDxTdHlsZWRFcnJvcj57ZXJyb3IubWVzc2FnZX08L1N0eWxlZEVycm9yPn1cbiAgICAgICAgPFN0eWxlZEFzc2V0R2FsbGVyeT5cbiAgICAgICAgICB7YXNzZXRzLm1hcChzcCA9PiAoXG4gICAgICAgICAgICA8QXNzZXRJdGVtIGFzc2V0PXtzcH0ga2V5PXtzcC5pZH0gb25DbGljaz17KCkgPT4gb25Mb2FkQXNzZXQoc3ApfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1N0eWxlZEFzc2V0R2FsbGVyeT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmFnZUFzc2V0c1ZpZXdlcjtcbiJdfQ==