"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _icons = require("../../common/icons");

var _styledComponents = require("../../common/styled-components");

var _constants = require("@kepler.gl/constants");

var _components = require("./components");

var _exportHtmlMap = _interopRequireDefault(require("./export-html-map"));

var _exportJsonMap = _interopRequireDefault(require("./export-json-map"));

var _localization = require("@kepler.gl/localization");

// Copyright (c) 2023 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var style = {
  width: '100%'
};

var NO_OP = function NO_OP() {
  return {};
};

ExportMapModalFactory.deps = [_exportHtmlMap["default"], _exportJsonMap["default"]];

function ExportMapModalFactory(ExportHtmlMap, ExportJsonMap) {
  var ExportMapModalUnmemoized = function ExportMapModalUnmemoized(_ref) {
    var _EXPORT_MAP_FORMATS$H;

    var _ref$config = _ref.config,
        config = _ref$config === void 0 ? {} : _ref$config,
        _ref$onChangeExportMa = _ref.onChangeExportMapFormat,
        onChangeExportMapFormat = _ref$onChangeExportMa === void 0 ? NO_OP : _ref$onChangeExportMa,
        _ref$onChangeExportMa2 = _ref.onChangeExportMapHTMLMode,
        onChangeExportMapHTMLMode = _ref$onChangeExportMa2 === void 0 ? NO_OP : _ref$onChangeExportMa2,
        _ref$onEditUserMapbox = _ref.onEditUserMapboxAccessToken,
        onEditUserMapboxAccessToken = _ref$onEditUserMapbox === void 0 ? NO_OP : _ref$onEditUserMapbox,
        _ref$options = _ref.options,
        options = _ref$options === void 0 ? {
      format: ''
    } : _ref$options;
    return /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledModalContent, {
      className: "export-map-modal"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      style: style
    }, /*#__PURE__*/_react["default"].createElement(_components.StyledExportMapSection, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "description"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "title"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportMap.formatTitle'
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "subtitle"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportMap.formatSubtitle'
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "selection"
    }, _constants.EXPORT_MAP_FORMAT_OPTIONS.map(function (op) {
      return /*#__PURE__*/_react["default"].createElement(_styledComponents.StyledType, {
        key: op.id,
        selected: options.format === op.id,
        onClick: function onClick() {
          return op.available && onChangeExportMapFormat(op.id);
        }
      }, /*#__PURE__*/_react["default"].createElement(_icons.FileType, {
        ext: op.label,
        height: "80px",
        fontSize: "11px"
      }), options.format === op.id && /*#__PURE__*/_react["default"].createElement(_styledComponents.CheckMark, null));
    }))), (_EXPORT_MAP_FORMATS$H = {}, (0, _defineProperty2["default"])(_EXPORT_MAP_FORMATS$H, _constants.EXPORT_MAP_FORMATS.HTML, /*#__PURE__*/_react["default"].createElement(ExportHtmlMap, {
      onChangeExportMapHTMLMode: onChangeExportMapHTMLMode,
      onEditUserMapboxAccessToken: onEditUserMapboxAccessToken,
      options: options[options.format]
    })), (0, _defineProperty2["default"])(_EXPORT_MAP_FORMATS$H, _constants.EXPORT_MAP_FORMATS.JSON, /*#__PURE__*/_react["default"].createElement(ExportJsonMap, {
      config: config
    })), _EXPORT_MAP_FORMATS$H)[// @ts-ignore
    options.format]));
  };

  ExportMapModalUnmemoized.displayName = 'ExportMapModal';

  var ExportMapModal = /*#__PURE__*/_react["default"].memo(ExportMapModalUnmemoized);

  return ExportMapModal;
}

var _default = ExportMapModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tb2RhbHMvZXhwb3J0LW1hcC1tb2RhbC9leHBvcnQtbWFwLW1vZGFsLnRzeCJdLCJuYW1lcyI6WyJzdHlsZSIsIndpZHRoIiwiTk9fT1AiLCJFeHBvcnRNYXBNb2RhbEZhY3RvcnkiLCJkZXBzIiwiRXhwb3J0SHRtbE1hcEZhY3RvcnkiLCJFeHBvcnRKc29uTWFwRmFjdG9yeSIsIkV4cG9ydEh0bWxNYXAiLCJFeHBvcnRKc29uTWFwIiwiRXhwb3J0TWFwTW9kYWxVbm1lbW9pemVkIiwiY29uZmlnIiwib25DaGFuZ2VFeHBvcnRNYXBGb3JtYXQiLCJvbkNoYW5nZUV4cG9ydE1hcEhUTUxNb2RlIiwib25FZGl0VXNlck1hcGJveEFjY2Vzc1Rva2VuIiwib3B0aW9ucyIsImZvcm1hdCIsIkVYUE9SVF9NQVBfRk9STUFUX09QVElPTlMiLCJtYXAiLCJvcCIsImlkIiwiYXZhaWxhYmxlIiwibGFiZWwiLCJFWFBPUlRfTUFQX0ZPUk1BVFMiLCJIVE1MIiwiSlNPTiIsImRpc3BsYXlOYW1lIiwiRXhwb3J0TWFwTW9kYWwiLCJSZWFjdCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQTVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXNCQSxJQUFNQSxLQUFLLEdBQUc7QUFBQ0MsRUFBQUEsS0FBSyxFQUFFO0FBQVIsQ0FBZDs7QUFFQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLFNBQXFCLEVBQXJCO0FBQUEsQ0FBZDs7QUFFQUMscUJBQXFCLENBQUNDLElBQXRCLEdBQTZCLENBQUNDLHlCQUFELEVBQXVCQyx5QkFBdkIsQ0FBN0I7O0FBRUEsU0FBU0gscUJBQVQsQ0FDRUksYUFERixFQUVFQyxhQUZGLEVBR0U7QUFDQSxNQUFNQyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCO0FBQUE7O0FBQUEsMkJBQy9CQyxNQUQrQjtBQUFBLFFBQy9CQSxNQUQrQiw0QkFDdEIsRUFEc0I7QUFBQSxxQ0FFL0JDLHVCQUYrQjtBQUFBLFFBRS9CQSx1QkFGK0Isc0NBRUxULEtBRks7QUFBQSxzQ0FHL0JVLHlCQUgrQjtBQUFBLFFBRy9CQSx5QkFIK0IsdUNBR0hWLEtBSEc7QUFBQSxxQ0FJL0JXLDJCQUorQjtBQUFBLFFBSS9CQSwyQkFKK0Isc0NBSURYLEtBSkM7QUFBQSw0QkFLL0JZLE9BTCtCO0FBQUEsUUFLL0JBLE9BTCtCLDZCQUtyQjtBQUFDQyxNQUFBQSxNQUFNLEVBQUU7QUFBVCxLQUxxQjtBQUFBLHdCQU8vQixnQ0FBQyxvQ0FBRDtBQUFvQixNQUFBLFNBQVMsRUFBQztBQUE5QixvQkFDRTtBQUFLLE1BQUEsS0FBSyxFQUFFZjtBQUFaLG9CQUNFLGdDQUFDLGtDQUFELHFCQUNFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUU7QUFBdEIsTUFERixDQURGLGVBSUU7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLG9CQUNFLGdDQUFDLDhCQUFEO0FBQWtCLE1BQUEsRUFBRSxFQUFFO0FBQXRCLE1BREYsQ0FKRixDQURGLGVBU0U7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLE9BQ0dnQixxQ0FBMEJDLEdBQTFCLENBQThCLFVBQUFDLEVBQUU7QUFBQSwwQkFDL0IsZ0NBQUMsNEJBQUQ7QUFDRSxRQUFBLEdBQUcsRUFBRUEsRUFBRSxDQUFDQyxFQURWO0FBRUUsUUFBQSxRQUFRLEVBQUVMLE9BQU8sQ0FBQ0MsTUFBUixLQUFtQkcsRUFBRSxDQUFDQyxFQUZsQztBQUdFLFFBQUEsT0FBTyxFQUFFO0FBQUEsaUJBQU1ELEVBQUUsQ0FBQ0UsU0FBSCxJQUFnQlQsdUJBQXVCLENBQUNPLEVBQUUsQ0FBQ0MsRUFBSixDQUE3QztBQUFBO0FBSFgsc0JBS0UsZ0NBQUMsZUFBRDtBQUFVLFFBQUEsR0FBRyxFQUFFRCxFQUFFLENBQUNHLEtBQWxCO0FBQXlCLFFBQUEsTUFBTSxFQUFDLE1BQWhDO0FBQXVDLFFBQUEsUUFBUSxFQUFDO0FBQWhELFFBTEYsRUFPR1AsT0FBTyxDQUFDQyxNQUFSLEtBQW1CRyxFQUFFLENBQUNDLEVBQXRCLGlCQUE0QixnQ0FBQywyQkFBRCxPQVAvQixDQUQrQjtBQUFBLEtBQWhDLENBREgsQ0FURixDQURGLEVBeUJJLHFGQUNHRyw4QkFBbUJDLElBRHRCLGVBRUksZ0NBQUMsYUFBRDtBQUNFLE1BQUEseUJBQXlCLEVBQUVYLHlCQUQ3QjtBQUVFLE1BQUEsMkJBQTJCLEVBQUVDLDJCQUYvQjtBQUdFLE1BQUEsT0FBTyxFQUFFQyxPQUFPLENBQUNBLE9BQU8sQ0FBQ0MsTUFBVDtBQUhsQixNQUZKLDJEQVFHTyw4QkFBbUJFLElBUnRCLGVBUTZCLGdDQUFDLGFBQUQ7QUFBZSxNQUFBLE1BQU0sRUFBRWQ7QUFBdkIsTUFSN0IsMEJBVUU7QUFDQUksSUFBQUEsT0FBTyxDQUFDQyxNQVhWLENBekJKLENBREYsQ0FQK0I7QUFBQSxHQUFqQzs7QUFtREFOLEVBQUFBLHdCQUF3QixDQUFDZ0IsV0FBekIsR0FBdUMsZ0JBQXZDOztBQUVBLE1BQU1DLGNBQWMsZ0JBQUdDLGtCQUFNQyxJQUFOLENBQVduQix3QkFBWCxDQUF2Qjs7QUFFQSxTQUFPaUIsY0FBUDtBQUNEOztlQUVjdkIscUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge0ZpbGVUeXBlfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMnO1xuaW1wb3J0IHtTdHlsZWRNb2RhbENvbnRlbnQsIFN0eWxlZFR5cGUsIENoZWNrTWFya30gZnJvbSAnLi4vLi4vY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7RVhQT1JUX01BUF9GT1JNQVRTLCBFWFBPUlRfTUFQX0ZPUk1BVF9PUFRJT05TfSBmcm9tICdAa2VwbGVyLmdsL2NvbnN0YW50cyc7XG5pbXBvcnQge1N0eWxlZEV4cG9ydE1hcFNlY3Rpb259IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgRXhwb3J0SHRtbE1hcEZhY3RvcnkgZnJvbSAnLi9leHBvcnQtaHRtbC1tYXAnO1xuaW1wb3J0IEV4cG9ydEpzb25NYXBGYWN0b3J5IGZyb20gJy4vZXhwb3J0LWpzb24tbWFwJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnQGtlcGxlci5nbC9sb2NhbGl6YXRpb24nO1xuaW1wb3J0IHtBY3Rpb25IYW5kbGVyLCBzZXRFeHBvcnRIVE1MTWFwTW9kZSwgc2V0VXNlck1hcGJveEFjY2Vzc1Rva2VufSBmcm9tICdAa2VwbGVyLmdsL2FjdGlvbnMnO1xuXG5pbnRlcmZhY2UgRXhwb3J0TWFwTW9kYWxGYWN0b3J5UHJvcHMge1xuICBvcHRpb25zPzoge2Zvcm1hdDogc3RyaW5nfTtcbiAgY29uZmlnOiBhbnk7XG4gIG9uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbjogQWN0aW9uSGFuZGxlcjx0eXBlb2Ygc2V0VXNlck1hcGJveEFjY2Vzc1Rva2VuPjtcbiAgb25DaGFuZ2VFeHBvcnRNYXBIVE1MTW9kZT86IEFjdGlvbkhhbmRsZXI8dHlwZW9mIHNldEV4cG9ydEhUTUxNYXBNb2RlPjtcbiAgb25DaGFuZ2VFeHBvcnRNYXBGb3JtYXQ/OiAoZm9ybWF0OiBzdHJpbmcpID0+IGFueTtcbiAgbWFwRm9ybWF0Pzogc3RyaW5nO1xufVxuXG5jb25zdCBzdHlsZSA9IHt3aWR0aDogJzEwMCUnfTtcblxuY29uc3QgTk9fT1AgPSAoLi4uYXJnczogYW55W10pID0+ICh7fSBhcyBhbnkpO1xuXG5FeHBvcnRNYXBNb2RhbEZhY3RvcnkuZGVwcyA9IFtFeHBvcnRIdG1sTWFwRmFjdG9yeSwgRXhwb3J0SnNvbk1hcEZhY3RvcnldO1xuXG5mdW5jdGlvbiBFeHBvcnRNYXBNb2RhbEZhY3RvcnkoXG4gIEV4cG9ydEh0bWxNYXA6IFJldHVyblR5cGU8dHlwZW9mIEV4cG9ydEh0bWxNYXBGYWN0b3J5PixcbiAgRXhwb3J0SnNvbk1hcDogUmV0dXJuVHlwZTx0eXBlb2YgRXhwb3J0SnNvbk1hcEZhY3Rvcnk+XG4pIHtcbiAgY29uc3QgRXhwb3J0TWFwTW9kYWxVbm1lbW9pemVkID0gKHtcbiAgICBjb25maWcgPSB7fSxcbiAgICBvbkNoYW5nZUV4cG9ydE1hcEZvcm1hdCA9IE5PX09QLFxuICAgIG9uQ2hhbmdlRXhwb3J0TWFwSFRNTE1vZGUgPSBOT19PUCxcbiAgICBvbkVkaXRVc2VyTWFwYm94QWNjZXNzVG9rZW4gPSBOT19PUCxcbiAgICBvcHRpb25zID0ge2Zvcm1hdDogJyd9XG4gIH06IEV4cG9ydE1hcE1vZGFsRmFjdG9yeVByb3BzKSA9PiAoXG4gICAgPFN0eWxlZE1vZGFsQ29udGVudCBjbGFzc05hbWU9XCJleHBvcnQtbWFwLW1vZGFsXCI+XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgIDxTdHlsZWRFeHBvcnRNYXBTZWN0aW9uPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRNYXAuZm9ybWF0VGl0bGUnfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0TWFwLmZvcm1hdFN1YnRpdGxlJ30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0aW9uXCI+XG4gICAgICAgICAgICB7RVhQT1JUX01BUF9GT1JNQVRfT1BUSU9OUy5tYXAob3AgPT4gKFxuICAgICAgICAgICAgICA8U3R5bGVkVHlwZVxuICAgICAgICAgICAgICAgIGtleT17b3AuaWR9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e29wdGlvbnMuZm9ybWF0ID09PSBvcC5pZH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvcC5hdmFpbGFibGUgJiYgb25DaGFuZ2VFeHBvcnRNYXBGb3JtYXQob3AuaWQpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZpbGVUeXBlIGV4dD17b3AubGFiZWx9IGhlaWdodD1cIjgwcHhcIiBmb250U2l6ZT1cIjExcHhcIiAvPlxuXG4gICAgICAgICAgICAgICAge29wdGlvbnMuZm9ybWF0ID09PSBvcC5pZCAmJiA8Q2hlY2tNYXJrIC8+fVxuICAgICAgICAgICAgICA8L1N0eWxlZFR5cGU+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9TdHlsZWRFeHBvcnRNYXBTZWN0aW9uPlxuICAgICAgICB7XG4gICAgICAgICAge1xuICAgICAgICAgICAgW0VYUE9SVF9NQVBfRk9STUFUUy5IVE1MXTogKFxuICAgICAgICAgICAgICA8RXhwb3J0SHRtbE1hcFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlRXhwb3J0TWFwSFRNTE1vZGU9e29uQ2hhbmdlRXhwb3J0TWFwSFRNTE1vZGV9XG4gICAgICAgICAgICAgICAgb25FZGl0VXNlck1hcGJveEFjY2Vzc1Rva2VuPXtvbkVkaXRVc2VyTWFwYm94QWNjZXNzVG9rZW59XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc1tvcHRpb25zLmZvcm1hdF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgW0VYUE9SVF9NQVBfRk9STUFUUy5KU09OXTogPEV4cG9ydEpzb25NYXAgY29uZmlnPXtjb25maWd9IC8+XG4gICAgICAgICAgfVtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIG9wdGlvbnMuZm9ybWF0XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L1N0eWxlZE1vZGFsQ29udGVudD5cbiAgKTtcblxuICBFeHBvcnRNYXBNb2RhbFVubWVtb2l6ZWQuZGlzcGxheU5hbWUgPSAnRXhwb3J0TWFwTW9kYWwnO1xuXG4gIGNvbnN0IEV4cG9ydE1hcE1vZGFsID0gUmVhY3QubWVtbyhFeHBvcnRNYXBNb2RhbFVubWVtb2l6ZWQpO1xuXG4gIHJldHVybiBFeHBvcnRNYXBNb2RhbDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhwb3J0TWFwTW9kYWxGYWN0b3J5O1xuIl19