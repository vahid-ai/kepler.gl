"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ShareMapUrlModalFactory;
exports.SharingUrl = exports.StyleSharingUrl = exports.StyledInputLabel = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactCopyToClipboard = require("react-copy-to-clipboard");

var _styles = require("@kepler.gl/styles");

var _imageModalContainer = _interopRequireDefault(require("./image-modal-container"));

var _providerModalContainer = _interopRequireDefault(require("./provider-modal-container"));

var _styledComponents2 = require("../common/styled-components");

var _cloudTile = _interopRequireDefault(require("./cloud-tile"));

var _statusPanel = _interopRequireDefault(require("./status-panel"));

var _localization = require("@kepler.gl/localization");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var StyledInputLabel = _styledComponents["default"].label(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 12px;\n  color: ", ";\n  letter-spacing: 0.2px;\n"])), function (props) {
  return props.theme.textColorLT;
});

exports.StyledInputLabel = StyledInputLabel;

var StyleSharingUrl = _styledComponents["default"].div.attrs({
  className: 'sharing-url'
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  display: flex;\n  margin-bottom: 14px;\n  flex-direction: column;\n\n  input {\n    border-right: 0;\n  }\n\n  .button {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n  }\n"])));

exports.StyleSharingUrl = StyleSharingUrl;

var SharingUrl = function SharingUrl(_ref) {
  var url = _ref.url,
      _ref$message = _ref.message,
      message = _ref$message === void 0 ? '' : _ref$message;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      copied = _useState2[0],
      setCopy = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(StyleSharingUrl, null, /*#__PURE__*/_react["default"].createElement(StyledInputLabel, null, message), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.InputLight, {
    type: "text",
    value: url,
    readOnly: true
  }), /*#__PURE__*/_react["default"].createElement(_reactCopyToClipboard.CopyToClipboard, {
    text: url,
    onCopy: function onCopy() {
      return setCopy(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
    width: "80px"
  }, copied ? 'Copied!' : 'Copy'))));
};

exports.SharingUrl = SharingUrl;

var nop = function nop() {};

var StyledShareMapModal = (0, _styledComponents["default"])(_styledComponents2.StyledModalContent)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 24px 72px 40px 72px;\n  margin: 0 -72px -40px -72px;\n"])));

var StyledInnerDiv = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  min-height: 500px;\n"])));

function ShareMapUrlModalFactory() {
  var ShareMapUrlModal = function ShareMapUrlModal(_ref2) {
    var _ref2$isProviderLoadi = _ref2.isProviderLoading,
        isProviderLoading = _ref2$isProviderLoadi === void 0 ? false : _ref2$isProviderLoadi,
        isReady = _ref2.isReady,
        _ref2$onExport = _ref2.onExport,
        onExport = _ref2$onExport === void 0 ? nop : _ref2$onExport,
        _ref2$cloudProviders = _ref2.cloudProviders,
        cloudProviders = _ref2$cloudProviders === void 0 ? [] : _ref2$cloudProviders,
        _ref2$currentProvider = _ref2.currentProvider,
        currentProvider = _ref2$currentProvider === void 0 ? null : _ref2$currentProvider,
        _ref2$providerError = _ref2.providerError,
        providerError = _ref2$providerError === void 0 ? null : _ref2$providerError,
        _ref2$successInfo = _ref2.successInfo,
        successInfo = _ref2$successInfo === void 0 ? {} : _ref2$successInfo,
        _ref2$onSetCloudProvi = _ref2.onSetCloudProvider,
        onSetCloudProvider = _ref2$onSetCloudProvi === void 0 ? nop : _ref2$onSetCloudProvi,
        _ref2$onUpdateImageSe = _ref2.onUpdateImageSetting,
        onUpdateImageSetting = _ref2$onUpdateImageSe === void 0 ? nop : _ref2$onUpdateImageSe,
        cleanupExportImage = _ref2.cleanupExportImage;
    var shareUrl = successInfo.shareUrl,
        folderLink = successInfo.folderLink;
    var provider = currentProvider ? cloudProviders.find(function (p) {
      return p.name === currentProvider;
    }) : null;
    return /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: _styles.themeLT
    }, /*#__PURE__*/_react["default"].createElement(_providerModalContainer["default"], {
      onSetCloudProvider: onSetCloudProvider,
      cloudProviders: cloudProviders,
      currentProvider: currentProvider
    }, /*#__PURE__*/_react["default"].createElement(_imageModalContainer["default"], {
      currentProvider: currentProvider,
      cloudProviders: cloudProviders,
      onUpdateImageSetting: onUpdateImageSetting,
      cleanupExportImage: cleanupExportImage
    }, /*#__PURE__*/_react["default"].createElement(StyledShareMapModal, {
      className: "export-cloud-modal"
    }, /*#__PURE__*/_react["default"].createElement(StyledInnerDiv, null, /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.shareMap.shareUriTitle'
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "subtitle"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.shareMap.shareUriSubtitle'
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "selection"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title warning"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.shareMap.shareDisclaimer'
    })))), /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, {
      disabled: isProviderLoading
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.shareMap.cloudTitle'
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "subtitle"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.shareMap.cloudSubtitle'
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "selection"
    }, cloudProviders.map(function (cloudProvider) {
      return /*#__PURE__*/_react["default"].createElement(_cloudTile["default"], {
        key: cloudProvider.name,
        onSelect: function onSelect() {
          return onExport(cloudProvider);
        },
        onSetCloudProvider: onSetCloudProvider,
        cloudProvider: cloudProvider,
        actionName: "Upload",
        isSelected: cloudProvider.name === currentProvider,
        isConnected: Boolean(cloudProvider.getAccessToken()),
        isReady: isReady
      });
    }))), isProviderLoading || providerError ? /*#__PURE__*/_react["default"].createElement(_statusPanel["default"], {
      isLoading: isProviderLoading,
      error: providerError,
      providerIcon: provider && provider.icon
    }) : null, shareUrl && /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title"
    }, "Share Url")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "selection"
    }, /*#__PURE__*/_react["default"].createElement(SharingUrl, {
      key: 0,
      url: shareUrl
    }), provider && folderLink && /*#__PURE__*/_react["default"].createElement("a", {
      key: 1,
      href: folderLink,
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        textDecoration: 'underline'
      }
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.shareMap.gotoPage',
      values: {
        currentProvider: currentProvider
      }
    })))))))));
  };

  return ShareMapUrlModal;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tb2RhbHMvc2hhcmUtbWFwLW1vZGFsLnRzeCJdLCJuYW1lcyI6WyJTdHlsZWRJbnB1dExhYmVsIiwic3R5bGVkIiwibGFiZWwiLCJwcm9wcyIsInRoZW1lIiwidGV4dENvbG9yTFQiLCJTdHlsZVNoYXJpbmdVcmwiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsIlNoYXJpbmdVcmwiLCJ1cmwiLCJtZXNzYWdlIiwiY29waWVkIiwic2V0Q29weSIsImRpc3BsYXkiLCJub3AiLCJTdHlsZWRTaGFyZU1hcE1vZGFsIiwiU3R5bGVkTW9kYWxDb250ZW50IiwiU3R5bGVkSW5uZXJEaXYiLCJTaGFyZU1hcFVybE1vZGFsRmFjdG9yeSIsIlNoYXJlTWFwVXJsTW9kYWwiLCJpc1Byb3ZpZGVyTG9hZGluZyIsImlzUmVhZHkiLCJvbkV4cG9ydCIsImNsb3VkUHJvdmlkZXJzIiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXJFcnJvciIsInN1Y2Nlc3NJbmZvIiwib25TZXRDbG91ZFByb3ZpZGVyIiwib25VcGRhdGVJbWFnZVNldHRpbmciLCJjbGVhbnVwRXhwb3J0SW1hZ2UiLCJzaGFyZVVybCIsImZvbGRlckxpbmsiLCJwcm92aWRlciIsImZpbmQiLCJwIiwibmFtZSIsInRoZW1lTFQiLCJtYXAiLCJjbG91ZFByb3ZpZGVyIiwiQm9vbGVhbiIsImdldEFjY2Vzc1Rva2VuIiwiaWNvbiIsInRleHREZWNvcmF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQU1BOztBQUNBOztBQUNBOzs7O0FBT08sSUFBTUEsZ0JBQWdCLEdBQUdDLDZCQUFPQyxLQUFWLHVKQUVsQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQWhCO0FBQUEsQ0FGYSxDQUF0Qjs7OztBQU1BLElBQU1DLGVBQWUsR0FB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UEYsQ0FISixDQUpGLENBaERKLENBREYsQ0FORixDQUxGLENBREYsQ0FERjtBQTJGRCxHQTFHRDs7QUE0R0EsU0FBT0wsZ0JBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7VGhlbWVQcm92aWRlcn0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtDb3B5VG9DbGlwYm9hcmR9IGZyb20gJ3JlYWN0LWNvcHktdG8tY2xpcGJvYXJkJztcbmltcG9ydCB7dGhlbWVMVH0gZnJvbSAnQGtlcGxlci5nbC9zdHlsZXMnO1xuaW1wb3J0IEltYWdlTW9kYWxDb250YWluZXIsIHtJbWFnZU1vZGFsQ29udGFpbmVyUHJvcHN9IGZyb20gJy4vaW1hZ2UtbW9kYWwtY29udGFpbmVyJztcbmltcG9ydCBQcm92aWRlck1vZGFsQ29udGFpbmVyIGZyb20gJy4vcHJvdmlkZXItbW9kYWwtY29udGFpbmVyJztcblxuaW1wb3J0IHtcbiAgU3R5bGVkTW9kYWxDb250ZW50LFxuICBTdHlsZWRFeHBvcnRTZWN0aW9uLFxuICBJbnB1dExpZ2h0LFxuICBCdXR0b25cbn0gZnJvbSAnLi4vY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBDbG91ZFRpbGUgZnJvbSAnLi9jbG91ZC10aWxlJztcbmltcG9ydCBTdGF0dXNQYW5lbCBmcm9tICcuL3N0YXR1cy1wYW5lbCc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ0BrZXBsZXIuZ2wvbG9jYWxpemF0aW9uJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ0BrZXBsZXIuZ2wvY2xvdWQtcHJvdmlkZXJzJztcbmltcG9ydCB7XG4gIGNsZWFudXBFeHBvcnRJbWFnZSBhcyBjbGVhbnVwRXhwb3J0SW1hZ2VBY3Rpb24sXG4gIFNldENsb3VkUHJvdmlkZXJQYXlsb2FkXG59IGZyb20gJ0BrZXBsZXIuZ2wvYWN0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJbnB1dExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlU2hhcmluZ1VybCA9IHN0eWxlZC5kaXYuYXR0cnMoe1xuICBjbGFzc05hbWU6ICdzaGFyaW5nLXVybCdcbn0pYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBpbnB1dCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICB9XG5cbiAgLmJ1dHRvbiB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgU2hhcmluZ1VybFByb3BzIHtcbiAgdXJsOiBzdHJpbmc7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBTaGFyaW5nVXJsOiBSZWFjdC5GQzxTaGFyaW5nVXJsUHJvcHM+ID0gKHt1cmwsIG1lc3NhZ2UgPSAnJ30pID0+IHtcbiAgY29uc3QgW2NvcGllZCwgc2V0Q29weV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlU2hhcmluZ1VybD5cbiAgICAgIDxTdHlsZWRJbnB1dExhYmVsPnttZXNzYWdlfTwvU3R5bGVkSW5wdXRMYWJlbD5cbiAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cbiAgICAgICAgPElucHV0TGlnaHQgdHlwZT1cInRleHRcIiB2YWx1ZT17dXJsfSByZWFkT25seSAvPlxuICAgICAgICA8Q29weVRvQ2xpcGJvYXJkIHRleHQ9e3VybH0gb25Db3B5PXsoKSA9PiBzZXRDb3B5KHRydWUpfT5cbiAgICAgICAgICA8QnV0dG9uIHdpZHRoPVwiODBweFwiPntjb3BpZWQgPyAnQ29waWVkIScgOiAnQ29weSd9PC9CdXR0b24+XG4gICAgICAgIDwvQ29weVRvQ2xpcGJvYXJkPlxuICAgICAgPC9kaXY+XG4gICAgPC9TdHlsZVNoYXJpbmdVcmw+XG4gICk7XG59O1xuY29uc3Qgbm9wID0gKCkgPT4ge307XG5cbmNvbnN0IFN0eWxlZFNoYXJlTWFwTW9kYWwgPSBzdHlsZWQoU3R5bGVkTW9kYWxDb250ZW50KWBcbiAgcGFkZGluZzogMjRweCA3MnB4IDQwcHggNzJweDtcbiAgbWFyZ2luOiAwIC03MnB4IC00MHB4IC03MnB4O1xuYDtcblxuY29uc3QgU3R5bGVkSW5uZXJEaXYgPSBzdHlsZWQuZGl2YFxuICBtaW4taGVpZ2h0OiA1MDBweDtcbmA7XG5cbmludGVyZmFjZSBTaGFyZU1hcFVybE1vZGFsRmFjdG9yeVByb3BzIHtcbiAgaXNQcm92aWRlckxvYWRpbmc/OiBib29sZWFuO1xuICBpc1JlYWR5PzogYm9vbGVhbjtcbiAgb25FeHBvcnQ/OiAocHJvdmlkZXI6IFByb3ZpZGVyKSA9PiB2b2lkO1xuICBjbG91ZFByb3ZpZGVycz86IFByb3ZpZGVyW107XG4gIGN1cnJlbnRQcm92aWRlcjogc3RyaW5nIHwgbnVsbDtcbiAgcHJvdmlkZXJFcnJvcj86IHN0cmluZztcbiAgc3VjY2Vzc0luZm8/OiB7c2hhcmVVcmw/OiBzdHJpbmc7IGZvbGRlckxpbms/OiBzdHJpbmd9O1xuICBvblNldENsb3VkUHJvdmlkZXI/OiAocHJvdmlkZXI6IFNldENsb3VkUHJvdmlkZXJQYXlsb2FkKSA9PiB2b2lkO1xuICBvblVwZGF0ZUltYWdlU2V0dGluZzogSW1hZ2VNb2RhbENvbnRhaW5lclByb3BzWydvblVwZGF0ZUltYWdlU2V0dGluZyddO1xuICBjbGVhbnVwRXhwb3J0SW1hZ2U6IHR5cGVvZiBjbGVhbnVwRXhwb3J0SW1hZ2VBY3Rpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoYXJlTWFwVXJsTW9kYWxGYWN0b3J5KCkge1xuICBjb25zdCBTaGFyZU1hcFVybE1vZGFsOiBSZWFjdC5GQzxTaGFyZU1hcFVybE1vZGFsRmFjdG9yeVByb3BzPiA9ICh7XG4gICAgaXNQcm92aWRlckxvYWRpbmcgPSBmYWxzZSxcbiAgICBpc1JlYWR5LFxuICAgIG9uRXhwb3J0ID0gbm9wLFxuICAgIGNsb3VkUHJvdmlkZXJzID0gW10sXG4gICAgY3VycmVudFByb3ZpZGVyID0gbnVsbCxcbiAgICBwcm92aWRlckVycm9yID0gbnVsbCxcbiAgICBzdWNjZXNzSW5mbyA9IHt9LFxuICAgIG9uU2V0Q2xvdWRQcm92aWRlciA9IG5vcCxcbiAgICBvblVwZGF0ZUltYWdlU2V0dGluZyA9IG5vcCxcbiAgICBjbGVhbnVwRXhwb3J0SW1hZ2VcbiAgfSkgPT4ge1xuICAgIGNvbnN0IHtzaGFyZVVybCwgZm9sZGVyTGlua30gPSBzdWNjZXNzSW5mbztcbiAgICBjb25zdCBwcm92aWRlciA9IGN1cnJlbnRQcm92aWRlciA/IGNsb3VkUHJvdmlkZXJzLmZpbmQocCA9PiBwLm5hbWUgPT09IGN1cnJlbnRQcm92aWRlcikgOiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZUxUfT5cbiAgICAgICAgPFByb3ZpZGVyTW9kYWxDb250YWluZXJcbiAgICAgICAgICBvblNldENsb3VkUHJvdmlkZXI9e29uU2V0Q2xvdWRQcm92aWRlcn1cbiAgICAgICAgICBjbG91ZFByb3ZpZGVycz17Y2xvdWRQcm92aWRlcnN9XG4gICAgICAgICAgY3VycmVudFByb3ZpZGVyPXtjdXJyZW50UHJvdmlkZXJ9XG4gICAgICAgID5cbiAgICAgICAgICA8SW1hZ2VNb2RhbENvbnRhaW5lclxuICAgICAgICAgICAgY3VycmVudFByb3ZpZGVyPXtjdXJyZW50UHJvdmlkZXJ9XG4gICAgICAgICAgICBjbG91ZFByb3ZpZGVycz17Y2xvdWRQcm92aWRlcnN9XG4gICAgICAgICAgICBvblVwZGF0ZUltYWdlU2V0dGluZz17b25VcGRhdGVJbWFnZVNldHRpbmd9XG4gICAgICAgICAgICBjbGVhbnVwRXhwb3J0SW1hZ2U9e2NsZWFudXBFeHBvcnRJbWFnZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3R5bGVkU2hhcmVNYXBNb2RhbCBjbGFzc05hbWU9XCJleHBvcnQtY2xvdWQtbW9kYWxcIj5cbiAgICAgICAgICAgICAgPFN0eWxlZElubmVyRGl2PlxuICAgICAgICAgICAgICAgIDxTdHlsZWRFeHBvcnRTZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5zaGFyZU1hcC5zaGFyZVVyaVRpdGxlJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLnNoYXJlTWFwLnNoYXJlVXJpU3VidGl0bGUnfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSB3YXJuaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5zaGFyZU1hcC5zaGFyZURpc2NsYWltZXInfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvU3R5bGVkRXhwb3J0U2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8U3R5bGVkRXhwb3J0U2VjdGlvbiBkaXNhYmxlZD17aXNQcm92aWRlckxvYWRpbmd9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5zaGFyZU1hcC5jbG91ZFRpdGxlJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLnNoYXJlTWFwLmNsb3VkU3VidGl0bGUnfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgICAge2Nsb3VkUHJvdmlkZXJzLm1hcChjbG91ZFByb3ZpZGVyID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8Q2xvdWRUaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Nsb3VkUHJvdmlkZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoKSA9PiBvbkV4cG9ydChjbG91ZFByb3ZpZGVyKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2V0Q2xvdWRQcm92aWRlcj17b25TZXRDbG91ZFByb3ZpZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvdWRQcm92aWRlcj17Y2xvdWRQcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbk5hbWU9XCJVcGxvYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17Y2xvdWRQcm92aWRlci5uYW1lID09PSBjdXJyZW50UHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Nvbm5lY3RlZD17Qm9vbGVhbihjbG91ZFByb3ZpZGVyLmdldEFjY2Vzc1Rva2VuKCkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNSZWFkeT17aXNSZWFkeX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvU3R5bGVkRXhwb3J0U2VjdGlvbj5cbiAgICAgICAgICAgICAgICB7aXNQcm92aWRlckxvYWRpbmcgfHwgcHJvdmlkZXJFcnJvciA/IChcbiAgICAgICAgICAgICAgICAgIDxTdGF0dXNQYW5lbFxuICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzUHJvdmlkZXJMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICBlcnJvcj17cHJvdmlkZXJFcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJJY29uPXtwcm92aWRlciAmJiBwcm92aWRlci5pY29ufVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICB7c2hhcmVVcmwgJiYgKFxuICAgICAgICAgICAgICAgICAgPFN0eWxlZEV4cG9ydFNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+U2hhcmUgVXJsPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxTaGFyaW5nVXJsIGtleT17MH0gdXJsPXtzaGFyZVVybH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZXIgJiYgZm9sZGVyTGluayAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9ezF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2ZvbGRlckxpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJ319XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9eydtb2RhbC5zaGFyZU1hcC5nb3RvUGFnZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXt7Y3VycmVudFByb3ZpZGVyfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRXhwb3J0U2VjdGlvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1N0eWxlZElubmVyRGl2PlxuICAgICAgICAgICAgPC9TdHlsZWRTaGFyZU1hcE1vZGFsPlxuICAgICAgICAgIDwvSW1hZ2VNb2RhbENvbnRhaW5lcj5cbiAgICAgICAgPC9Qcm92aWRlck1vZGFsQ29udGFpbmVyPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFNoYXJlTWFwVXJsTW9kYWw7XG59XG4iXX0=