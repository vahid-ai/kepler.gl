"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("../../common/styled-components");

var _components = require("./components");

var _constants = require("@kepler.gl/constants");

var _styledComponents2 = _interopRequireDefault(require("styled-components"));

var _reactIntl = require("react-intl");

var _localization = require("@kepler.gl/localization");

var _templateObject, _templateObject2, _templateObject3;

var ExportMapStyledExportSection = (0, _styledComponents2["default"])(_styledComponents.StyledExportSection)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  .disclaimer {\n    font-size: ", ";\n    color: ", ";\n    margin-top: 12px;\n  }\n"])), function (props) {
  return props.theme.inputFontSize;
}, function (props) {
  return props.theme.inputColor;
});

var StyledInput = _styledComponents2["default"].input(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  padding: ", ";\n  color: ", ";\n  height: ", ";\n  outline: 0;\n  font-size: ", ";\n\n  :active,\n  :focus,\n  &.focus,\n  &.active {\n    outline: 0;\n  }\n"])), function (props) {
  return props.theme.inputPadding;
}, function (props) {
  return props.error ? 'red' : props.theme.titleColorLT;
}, function (props) {
  return props.theme.inputBoxHeight;
}, function (props) {
  return props.theme.inputFontSize;
});

var BigStyledTile = (0, _styledComponents2["default"])(_styledComponents.StyledType)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  height: unset;\n  width: unset;\n  img {\n    width: 180px;\n    height: 120px;\n  }\n"])));

function ExportHtmlMapFactory() {
  /** @type {typeof import('./export-html-map').ExportHtmlMap} */
  var ExportHtmlMap = function ExportHtmlMap(_ref) {
    var _ref$onChangeExportMa = _ref.onChangeExportMapHTMLMode,
        onChangeExportMapHTMLMode = _ref$onChangeExportMa === void 0 ? function (mode) {} : _ref$onChangeExportMa,
        _ref$onEditUserMapbox = _ref.onEditUserMapboxAccessToken,
        onEditUserMapboxAccessToken = _ref$onEditUserMapbox === void 0 ? function (token) {} : _ref$onEditUserMapbox,
        _ref$options = _ref.options,
        options = _ref$options === void 0 ? {} : _ref$options,
        intl = _ref.intl;
    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_components.StyledExportMapSection, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description"
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "selection"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportMap.html.selection'
    }))), /*#__PURE__*/_react["default"].createElement(ExportMapStyledExportSection, {
      className: "export-map-modal__html-options"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportMap.html.tokenTitle'
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "subtitle"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportMap.html.tokenSubtitle'
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "selection"
    }, /*#__PURE__*/_react["default"].createElement(StyledInput, {
      onChange: function onChange(e) {
        return onEditUserMapboxAccessToken(e.target.value);
      },
      type: "text",
      placeholder: intl.formatMessage({
        id: 'modal.exportMap.html.tokenPlaceholder'
      }),
      value: options ? options.userMapboxToken : ''
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "disclaimer"
    }, /*#__PURE__*/_react["default"].createElement(_components.StyledWarning, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportMap.html.tokenMisuseWarning'
    })), /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportMap.html.tokenDisclaimer'
    }), /*#__PURE__*/_react["default"].createElement(_components.ExportMapLink, {
      href: _constants.EXPORT_HTML_MAP_DOC
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportMap.html.tokenUpdate'
    }))))), /*#__PURE__*/_react["default"].createElement(ExportMapStyledExportSection, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportMap.html.modeTitle'
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "subtitle"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportMap.html.modeSubtitle1'
    }), /*#__PURE__*/_react["default"].createElement("a", {
      href: _constants.EXPORT_HTML_MAP_MODES_DOC
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportMap.html.modeSubtitle2'
    })))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "selection"
    }, _constants.EXPORT_HTML_MAP_MODE_OPTIONS.map(function (mode) {
      return /*#__PURE__*/_react["default"].createElement(BigStyledTile, {
        key: mode.id,
        selected: options.mode === mode.id,
        onClick: function onClick() {
          return mode.available && onChangeExportMapHTMLMode(mode.id);
        }
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: mode.url,
        alt: ""
      }), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
        id: 'modal.exportMap.html.modeDescription',
        values: {
          mode: intl.formatMessage({
            id: mode.label
          })
        }
      })), options.mode === mode.id && /*#__PURE__*/_react["default"].createElement(_styledComponents.CheckMark, null));
    }))));
  };

  ExportHtmlMap.displayName = 'ExportHtmlMap';
  return (0, _reactIntl.injectIntl)(ExportHtmlMap);
}

var _default = ExportHtmlMapFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tb2RhbHMvZXhwb3J0LW1hcC1tb2RhbC9leHBvcnQtaHRtbC1tYXAudHN4Il0sIm5hbWVzIjpbIkV4cG9ydE1hcFN0eWxlZEV4cG9ydFNlY3Rpb24iLCJTdHlsZWRFeHBvcnRTZWN0aW9uIiwicHJvcHMiLCJ0aGVtZSIsImlucHV0Rm9udFNpemUiLCJpbnB1dENvbG9yIiwiU3R5bGVkSW5wdXQiLCJzdHlsZWQiLCJpbnB1dCIsImlucHV0UGFkZGluZyIsImVycm9yIiwidGl0bGVDb2xvckxUIiwiaW5wdXRCb3hIZWlnaHQiLCJCaWdTdHlsZWRUaWxlIiwiU3R5bGVkVHlwZSIsIkV4cG9ydEh0bWxNYXBGYWN0b3J5IiwiRXhwb3J0SHRtbE1hcCIsIm9uQ2hhbmdlRXhwb3J0TWFwSFRNTE1vZGUiLCJtb2RlIiwib25FZGl0VXNlck1hcGJveEFjY2Vzc1Rva2VuIiwidG9rZW4iLCJvcHRpb25zIiwiaW50bCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZvcm1hdE1lc3NhZ2UiLCJpZCIsInVzZXJNYXBib3hUb2tlbiIsIkVYUE9SVF9IVE1MX01BUF9ET0MiLCJFWFBPUlRfSFRNTF9NQVBfTU9ERVNfRE9DIiwiRVhQT1JUX0hUTUxfTUFQX01PREVfT1BUSU9OUyIsIm1hcCIsImF2YWlsYWJsZSIsInVybCIsImxhYmVsIiwiZGlzcGxheU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUtBOztBQUNBOztBQUNBOzs7O0FBS0EsSUFBTUEsNEJBQTRCLEdBQUcsbUNBQU9DLHFDQUFQLENBQUgsOEtBRWpCLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsYUFBaEI7QUFBQSxDQUZZLEVBR3JCLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsVUFBaEI7QUFBQSxDQUhnQixDQUFsQzs7QUFZQSxJQUFN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Q0FBUDtBQUNEOztlQUVjRCxvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1N0eWxlZEV4cG9ydFNlY3Rpb24sIFN0eWxlZFR5cGUsIENoZWNrTWFya30gZnJvbSAnLi4vLi4vY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7U3R5bGVkRXhwb3J0TWFwU2VjdGlvbiwgU3R5bGVkV2FybmluZywgRXhwb3J0TWFwTGlua30gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCB7XG4gIEVYUE9SVF9IVE1MX01BUF9NT0RFX09QVElPTlMsXG4gIEVYUE9SVF9IVE1MX01BUF9ET0MsXG4gIEVYUE9SVF9IVE1MX01BUF9NT0RFU19ET0Ncbn0gZnJvbSAnQGtlcGxlci5nbC9jb25zdGFudHMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge2luamVjdEludGx9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlfSBmcm9tICdAa2VwbGVyLmdsL2xvY2FsaXphdGlvbic7XG5pbXBvcnQge0ludGxTaGFwZX0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmltcG9ydCB7c2V0VXNlck1hcGJveEFjY2Vzc1Rva2VuLCBzZXRFeHBvcnRIVE1MTWFwTW9kZSwgQWN0aW9uSGFuZGxlcn0gZnJvbSAnQGtlcGxlci5nbC9hY3Rpb25zJztcblxuY29uc3QgRXhwb3J0TWFwU3R5bGVkRXhwb3J0U2VjdGlvbiA9IHN0eWxlZChTdHlsZWRFeHBvcnRTZWN0aW9uKWBcbiAgLmRpc2NsYWltZXIge1xuICAgIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dEZvbnRTaXplfTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dENvbG9yfTtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICB9XG5gO1xuXG5pbnRlcmZhY2UgU3R5bGVkSW5wdXRQcm9wcyB7XG4gIGVycm9yPzogYm9vbGVhbjtcbn1cblxuY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQuaW5wdXQ8U3R5bGVkSW5wdXRQcm9wcz5gXG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmlucHV0UGFkZGluZ307XG4gIGNvbG9yOiAke3Byb3BzID0+IChwcm9wcy5lcnJvciA/ICdyZWQnIDogcHJvcHMudGhlbWUudGl0bGVDb2xvckxUKX07XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dEJveEhlaWdodH07XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5pbnB1dEZvbnRTaXplfTtcblxuICA6YWN0aXZlLFxuICA6Zm9jdXMsXG4gICYuZm9jdXMsXG4gICYuYWN0aXZlIHtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG5gO1xuXG5jb25zdCBCaWdTdHlsZWRUaWxlID0gc3R5bGVkKFN0eWxlZFR5cGUpYFxuICBoZWlnaHQ6IHVuc2V0O1xuICB3aWR0aDogdW5zZXQ7XG4gIGltZyB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gIH1cbmA7XG5cbnR5cGUgRXhwb3J0SHRtbE1hcFByb3BzID0ge1xuICBvbkNoYW5nZUV4cG9ydE1hcEhUTUxNb2RlOiBBY3Rpb25IYW5kbGVyPHR5cGVvZiBzZXRFeHBvcnRIVE1MTWFwTW9kZT47XG4gIG9uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbjogQWN0aW9uSGFuZGxlcjx0eXBlb2Ygc2V0VXNlck1hcGJveEFjY2Vzc1Rva2VuPjtcbiAgb3B0aW9uczoge1xuICAgIHVzZXJNYXBib3hUb2tlbj86IHN0cmluZztcbiAgICBtb2RlPzogc3RyaW5nO1xuICB9O1xufTtcblxudHlwZSBJbnRsUHJvcHMgPSB7XG4gIGludGw6IEludGxTaGFwZTtcbn07XG5cbmZ1bmN0aW9uIEV4cG9ydEh0bWxNYXBGYWN0b3J5KCk6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhwb3J0SHRtbE1hcFByb3BzPiB7XG4gIC8qKiBAdHlwZSB7dHlwZW9mIGltcG9ydCgnLi9leHBvcnQtaHRtbC1tYXAnKS5FeHBvcnRIdG1sTWFwfSAqL1xuICBjb25zdCBFeHBvcnRIdG1sTWFwOiBSZWFjdC5GQzxFeHBvcnRIdG1sTWFwUHJvcHMgJiBJbnRsUHJvcHM+ID0gKHtcbiAgICBvbkNoYW5nZUV4cG9ydE1hcEhUTUxNb2RlID0gbW9kZSA9PiB7fSxcbiAgICBvbkVkaXRVc2VyTWFwYm94QWNjZXNzVG9rZW4gPSB0b2tlbiA9PiB7fSxcbiAgICBvcHRpb25zID0ge30sXG4gICAgaW50bFxuICB9KSA9PiAoXG4gICAgPGRpdj5cbiAgICAgIDxTdHlsZWRFeHBvcnRNYXBTZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3Rpb25cIj5cbiAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydE1hcC5odG1sLnNlbGVjdGlvbid9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TdHlsZWRFeHBvcnRNYXBTZWN0aW9uPlxuICAgICAgPEV4cG9ydE1hcFN0eWxlZEV4cG9ydFNlY3Rpb24gY2xhc3NOYW1lPVwiZXhwb3J0LW1hcC1tb2RhbF9faHRtbC1vcHRpb25zXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydE1hcC5odG1sLnRva2VuVGl0bGUnfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmh0bWwudG9rZW5TdWJ0aXRsZSd9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvblwiPlxuICAgICAgICAgIDxTdHlsZWRJbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gb25FZGl0VXNlck1hcGJveEFjY2Vzc1Rva2VuKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOiAnbW9kYWwuZXhwb3J0TWFwLmh0bWwudG9rZW5QbGFjZWhvbGRlcid9KX1cbiAgICAgICAgICAgIHZhbHVlPXtvcHRpb25zID8gb3B0aW9ucy51c2VyTWFwYm94VG9rZW4gOiAnJ31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzY2xhaW1lclwiPlxuICAgICAgICAgICAgPFN0eWxlZFdhcm5pbmc+XG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmh0bWwudG9rZW5NaXN1c2VXYXJuaW5nJ30gLz5cbiAgICAgICAgICAgIDwvU3R5bGVkV2FybmluZz5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmh0bWwudG9rZW5EaXNjbGFpbWVyJ30gLz5cbiAgICAgICAgICAgIDxFeHBvcnRNYXBMaW5rIGhyZWY9e0VYUE9SVF9IVE1MX01BUF9ET0N9PlxuICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydE1hcC5odG1sLnRva2VuVXBkYXRlJ30gLz5cbiAgICAgICAgICAgIDwvRXhwb3J0TWFwTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0V4cG9ydE1hcFN0eWxlZEV4cG9ydFNlY3Rpb24+XG4gICAgICA8RXhwb3J0TWFwU3R5bGVkRXhwb3J0U2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmh0bWwubW9kZVRpdGxlJ30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J21vZGFsLmV4cG9ydE1hcC5odG1sLm1vZGVTdWJ0aXRsZTEnfSAvPlxuICAgICAgICAgICAgPGEgaHJlZj17RVhQT1JUX0hUTUxfTUFQX01PREVTX0RPQ30+XG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmh0bWwubW9kZVN1YnRpdGxlMid9IC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdGlvblwiPlxuICAgICAgICAgIHtFWFBPUlRfSFRNTF9NQVBfTU9ERV9PUFRJT05TLm1hcChtb2RlID0+IChcbiAgICAgICAgICAgIDxCaWdTdHlsZWRUaWxlXG4gICAgICAgICAgICAgIGtleT17bW9kZS5pZH1cbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9e29wdGlvbnMubW9kZSA9PT0gbW9kZS5pZH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gbW9kZS5hdmFpbGFibGUgJiYgb25DaGFuZ2VFeHBvcnRNYXBIVE1MTW9kZShtb2RlLmlkKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e21vZGUudXJsfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgaWQ9eydtb2RhbC5leHBvcnRNYXAuaHRtbC5tb2RlRGVzY3JpcHRpb24nfVxuICAgICAgICAgICAgICAgICAgdmFsdWVzPXt7bW9kZTogaW50bC5mb3JtYXRNZXNzYWdlKHtpZDogbW9kZS5sYWJlbH0pfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIHtvcHRpb25zLm1vZGUgPT09IG1vZGUuaWQgJiYgPENoZWNrTWFyayAvPn1cbiAgICAgICAgICAgIDwvQmlnU3R5bGVkVGlsZT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0V4cG9ydE1hcFN0eWxlZEV4cG9ydFNlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgRXhwb3J0SHRtbE1hcC5kaXNwbGF5TmFtZSA9ICdFeHBvcnRIdG1sTWFwJztcblxuICByZXR1cm4gaW5qZWN0SW50bChFeHBvcnRIdG1sTWFwKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhwb3J0SHRtbE1hcEZhY3Rvcnk7XG4iXX0=