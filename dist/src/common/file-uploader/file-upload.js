"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileUpload = exports["default"] = exports.WarningMsg = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactIntl = require("react-intl");

var _uploadButton = _interopRequireDefault(require("./upload-button"));

var _icons = require("../icons");

var _fileUploadProgress = _interopRequireDefault(require("./file-upload-progress"));

var _fileDrop = _interopRequireDefault(require("./file-drop"));

var _utils = require("@kepler.gl/utils");

var _constants = require("@kepler.gl/constants");

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _localization = require("@kepler.gl/localization");

var _styles = require("@kepler.gl/styles");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/** @typedef {import('./file-upload').FileUploadProps} FileUploadProps */
var fileIconColor = '#D3D8E0';

var LinkRenderer = function LinkRenderer(props) {
  return /*#__PURE__*/_react["default"].createElement("a", {
    href: props.href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, props.children);
};

var StyledUploadMessage = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 14px;\n  margin-bottom: 12px;\n\n  ", ";\n"])), function (props) {
  return props.theme.textColorLT;
}, _styles.media.portable(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 12px;\n  "]))));

var WarningMsg = _styledComponents["default"].span(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 10px;\n  color: ", ";\n  font-weight: 500;\n"])), function (props) {
  return props.theme.errorColor;
});

exports.WarningMsg = WarningMsg;

var StyledFileDrop = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: white;\n  border-radius: 4px;\n  border-style: ", ";\n  border-width: 1px;\n  border-color: ", ";\n  text-align: center;\n  width: 100%;\n  padding: 48px 8px 0;\n  height: 360px;\n\n  .file-upload-or {\n    color: ", ";\n    padding-right: 4px;\n  }\n\n  .file-type-row {\n    opacity: 0.5;\n  }\n  ", ";\n"])), function (props) {
  return props.dragOver ? 'solid' : 'dashed';
}, function (props) {
  return props.dragOver ? props.theme.textColorLT : props.theme.subtextColorLT;
}, function (props) {
  return props.theme.linkBtnColor;
}, _styles.media.portable(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 16px 4px 0;\n  "]))));

var MsgWrapper = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  font-size: 20px;\n  height: 36px;\n"])), function (props) {
  return props.theme.modalTitleColor;
});

var StyledDragNDropIcon = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  margin-bottom: 48px;\n\n  ", ";\n  ", ";\n"])), fileIconColor, _styles.media.portable(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 16px;\n  "]))), _styles.media.palm(_templateObject9 || (_templateObject9 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 8px;\n  "]))));

var StyledFileTypeFow = _styledComponents["default"].div(_templateObject10 || (_templateObject10 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 24px;\n  ", ";\n  ", ";\n"])), _styles.media.portable(_templateObject11 || (_templateObject11 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 16px;\n  "]))), _styles.media.palm(_templateObject12 || (_templateObject12 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 8px;\n  "]))));

var StyledFileUpload = _styledComponents["default"].div(_templateObject13 || (_templateObject13 = (0, _taggedTemplateLiteral2["default"])(["\n  .file-drop {\n    position: relative;\n  }\n"])));

var StyledMessage = _styledComponents["default"].div(_templateObject14 || (_templateObject14 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 32px;\n\n  .loading-action {\n    margin-right: 10px;\n  }\n  .loading-spinner {\n    margin-left: 10px;\n  }\n"])));

var StyledDragFileWrapper = _styledComponents["default"].div(_templateObject15 || (_templateObject15 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 32px;\n  ", ";\n  ", ";\n"])), _styles.media.portable(_templateObject16 || (_templateObject16 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 24px;\n  "]))), _styles.media.portable(_templateObject17 || (_templateObject17 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-bottom: 16px;\n  "]))));

var StyledDisclaimer = (0, _styledComponents["default"])(StyledMessage)(_templateObject18 || (_templateObject18 = (0, _taggedTemplateLiteral2["default"])(["\n  margin: 0 auto;\n"])));

function FileUploadFactory() {
  /** @augments {Component<FileUploadProps>} */
  var FileUpload = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(FileUpload, _Component);

    var _super = _createSuper(FileUpload);

    function FileUpload() {
      var _this;

      (0, _classCallCheck2["default"])(this, FileUpload);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        dragOver: false,
        fileLoading: false,
        files: [],
        errorFiles: []
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "frame", /*#__PURE__*/(0, _react.createRef)());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_isValidFileType", function (filename) {
        var _this$props$fileExten = _this.props.fileExtensions,
            fileExtensions = _this$props$fileExten === void 0 ? [] : _this$props$fileExten;
        var fileExt = fileExtensions.find(function (ext) {
          return filename.endsWith(ext);
        });
        return Boolean(fileExt);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleFileInput", function (fileList, event) {
        if (event) {
          event.stopPropagation();
        }

        var files = (0, _toConsumableArray2["default"])(fileList).filter(Boolean);
        var _this$props$disableEx = _this.props.disableExtensionFilter,
            disableExtensionFilter = _this$props$disableEx === void 0 ? false : _this$props$disableEx; // TODO - move this code out of the component

        var filesToLoad = [];
        var errorFiles = [];

        var _iterator = _createForOfIteratorHelper(files),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var file = _step.value;

            if (disableExtensionFilter || _this._isValidFileType(file.name)) {
              filesToLoad.push(file);
            } else {
              errorFiles.push(file.name);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var nextState = {
          files: filesToLoad,
          errorFiles: errorFiles,
          dragOver: false
        };

        _this.setState(nextState, function () {
          return nextState.files.length ? _this.props.onFileUpload(nextState.files) : null;
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_toggleDragState", function (newState) {
        _this.setState({
          dragOver: newState
        });
      });
      return _this;
    }

    (0, _createClass2["default"])(FileUpload, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$state = this.state,
            dragOver = _this$state.dragOver,
            files = _this$state.files,
            errorFiles = _this$state.errorFiles;
        var _this$props = this.props,
            fileLoading = _this$props.fileLoading,
            fileLoadingProgress = _this$props.fileLoadingProgress,
            theme = _this$props.theme,
            intl = _this$props.intl;
        var _this$props2 = this.props,
            _this$props2$fileExte = _this$props2.fileExtensions,
            fileExtensions = _this$props2$fileExte === void 0 ? [] : _this$props2$fileExte,
            _this$props2$fileForm = _this$props2.fileFormatNames,
            fileFormatNames = _this$props2$fileForm === void 0 ? [] : _this$props2$fileForm;
        return /*#__PURE__*/_react["default"].createElement(StyledFileUpload, {
          className: "file-uploader",
          ref: this.frame
        }, _fileDrop["default"] ? /*#__PURE__*/_react["default"].createElement(_fileDrop["default"], {
          frame: this.frame.current || document,
          onDragOver: function onDragOver() {
            return _this2._toggleDragState(true);
          },
          onDragLeave: function onDragLeave() {
            return _this2._toggleDragState(false);
          },
          onDrop: this._handleFileInput,
          className: "file-uploader__file-drop"
        }, /*#__PURE__*/_react["default"].createElement(StyledUploadMessage, {
          className: "file-upload__message"
        }, /*#__PURE__*/_react["default"].createElement(_reactMarkdown["default"], {
          source: "".concat(intl.formatMessage({
            id: 'fileUploader.configUploadMessage'
          }, {
            fileFormatNames: fileFormatNames.map(function (format) {
              return "**".concat(format, "**");
            }).join(', ')
          }), "(").concat(_constants.GUIDES_FILE_FORMAT_DOC, ")."),
          renderers: {
            link: LinkRenderer
          }
        })), /*#__PURE__*/_react["default"].createElement(StyledFileDrop, {
          dragOver: dragOver
        }, /*#__PURE__*/_react["default"].createElement(StyledFileTypeFow, {
          className: "file-type-row"
        }, fileExtensions.map(function (ext) {
          return /*#__PURE__*/_react["default"].createElement(_icons.FileType, {
            key: ext,
            ext: ext,
            height: "50px",
            fontSize: "9px"
          });
        })), fileLoading ? /*#__PURE__*/_react["default"].createElement(_fileUploadProgress["default"], {
          fileLoadingProgress: fileLoadingProgress,
          theme: theme
        }) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
          style: {
            opacity: dragOver ? 0.5 : 1
          },
          className: "file-upload-display-message"
        }, /*#__PURE__*/_react["default"].createElement(StyledDragNDropIcon, null, /*#__PURE__*/_react["default"].createElement(_icons.DragNDrop, {
          height: "44px"
        })), errorFiles.length ? /*#__PURE__*/_react["default"].createElement(WarningMsg, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'fileUploader.fileNotSupported',
          values: {
            errorFiles: errorFiles.join(', ')
          }
        })) : null), !files.length ? /*#__PURE__*/_react["default"].createElement(StyledDragFileWrapper, null, /*#__PURE__*/_react["default"].createElement(MsgWrapper, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'fileUploader.message'
        })), /*#__PURE__*/_react["default"].createElement("span", {
          className: "file-upload-or"
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'fileUploader.or'
        })), /*#__PURE__*/_react["default"].createElement(_uploadButton["default"], {
          onUpload: this._handleFileInput
        }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'fileUploader.browseFiles'
        }))) : null, /*#__PURE__*/_react["default"].createElement(StyledDisclaimer, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'fileUploader.disclaimer'
        }))))) : null, /*#__PURE__*/_react["default"].createElement(WarningMsg, null, (0, _utils.isChrome)() ? /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
          id: 'fileUploader.chromeMessage'
        }) : ''));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        if (state.fileLoading && props.fileLoading === false && state.files.length) {
          return {
            files: [],
            fileLoading: props.fileLoading
          };
        }

        return {
          fileLoading: props.fileLoading
        };
      }
    }]);
    return FileUpload;
  }(_react.Component);

  return (0, _reactIntl.injectIntl)(FileUpload);
}

var _default = FileUploadFactory;
exports["default"] = _default;
var FileUpload = FileUploadFactory();
exports.FileUpload = FileUpload;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vZmlsZS11cGxvYWRlci9maWxlLXVwbG9hZC50c3giXSwibmFtZXMiOlsiZmlsZUljb25Db2xvciIsIkxpbmtSZW5kZXJlciIsInByb3BzIiwiaHJlZiIsImNoaWxkcmVuIiwiU3R5bGVkVXBsb2FkTWVzc2FnZSIsInN0eWxlZCIsImRpdiIsInRoZW1lIiwidGV4dENvbG9yTFQiLCJtZWRpYSIsInBvcnRhYmxlIiwiV2FybmluZ01zZyIsInNwYW4iLCJlcnJvckNvbG9yIiwiU3R5bGVkRmlsZURyb3AiLCJkcmFnT3ZlciIsInN1YnRleHRDb2xvckxUIiwibGlua0J0bkNvbG9yIiwiTXNnV3JhcHBlciIsIm1vZGFsVGl0bGVDb2xvciIsIlN0eWxlZERyYWdORHJvcEljb24iLCJwYWxtIiwiU3R5bGVkRmlsZVR5cGVGb3ciLCJTdHlsZWRGaWxlVXBsb2FkIiwiU3R5bGVkTWVzc2FnZSIsIlN0eWxlZERyYWdGaWxlV3JhcHBlciIsIlN0eWxlZERpc2NsYWltZXIiLCJGaWxlVXBsb2FkRmFjdG9yeSIsIkZpbGVVcGxvYWQiLCJmaWxlTG9hZGluZyIsImZpbGVzIiwiZXJyb3JGaWxlcyIsImZpbGVuYW1lIiwiZmlsZUV4dGVuc2lvbnMiLCJmaWxlRXh0IiwiZmluZCIsImV4dCIsImVuZHNXaXRoIiwiQm9vbGVhbiIsImZpbGVMaXN0IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJmaWx0ZXIiLCJkaXNhYmxlRXh0ZW5zaW9uRmlsdGVyIiwiZmlsZXNUb0xvYWQiLCJmaWxlIiwiX2lzVmFsaWRGaWxlVHlwZSIsIm5hbWUiLCJwdXNoIiwibmV4dFN0YXRlIiwic2V0U3RhdGUiLCJsZW5ndGgiLCJvbkZpbGVVcGxvYWQiLCJuZXdTdGF0ZSIsInN0YXRlIiwiZmlsZUxvYWRpbmdQcm9ncmVzcyIsImludGwiLCJmaWxlRm9ybWF0TmFtZXMiLCJmcmFtZSIsIkZpbGVEcm9wIiwiY3VycmVudCIsImRvY3VtZW50IiwiX3RvZ2dsZURyYWdTdGF0ZSIsIl9oYW5kbGVGaWxlSW5wdXQiLCJmb3JtYXRNZXNzYWdlIiwiaWQiLCJtYXAiLCJmb3JtYXQiLCJqb2luIiwiR1VJREVTX0ZJTEVfRk9STUFUX0RPQyIsImxpbmsiLCJvcGFjaXR5IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUF0Qjs7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxLQUFLLEVBQUk7QUFDNUIsc0JBQ0U7QUFBRyxJQUFBLElBQUksRUFBRUEsS0FBSyxDQUFDQyxJQUFmO0FBQXFCLElBQUEsTUFBTSxFQUFDLFFBQTVCO0FBQXFDLElBQUEsR0FBRyxFQUFDO0FBQXpDLEtBQ0dELEtBQUssQ0FBQ0UsUUFEVCxDQURGO0FBS0QsQ0FORDs7QUFPQSxJQUFNQyxtQkFBbUIsR0FBR0MsNkJBQU9DLEdBQVYsZ0tBQ2QsVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ00sS0FBTixDQUFZQyxXQUFoQjtBQUFBLENBRFMsRUFLckJDLGNBQU1DLFFBTGUsbUhBQXpCOztBQVVPLElBQU1DLFVBQVUsR0FBR04sNkJBQU9PLElBQVYscUpBRVosVUFBQVgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ00sS0FBTixDQUFZTSxVQUFoQjtBQUFBLENBRk8sQ0FBaEI7Ozs7QUFVUCxJQUFNQyxjQUFjLEdBQUdULDZCQUFPQyxHQUFWLGlhQUdGLFVBQUFMLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNjLFFBQU4sR0FBaUIsT0FBakIsR0FBMkIsUUFBaEM7QUFBQSxDQUhILEVBS0YsVUFBQWQsS0FBSztBQUFBLFNBQUtBLEtBQUssQ0FBQ2MsUUFBTixHQUFpQmQsS0FBSyxDQUFD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Z0NBQUMsOEJBQUQ7QUFBa0IsVUFBQSxFQUFFLEVBQUU7QUFBdEIsVUFBYixHQUFzRSxFQUR6RSxDQXhFRixDQURGO0FBOEVEO0FBakp3QjtBQUFBO0FBQUEsYUFVekIsa0NBQWdDOUQsS0FBaEMsRUFBdUNxRCxLQUF2QyxFQUE4QztBQUM1QyxZQUFJQSxLQUFLLENBQUN6QixXQUFOLElBQXFCNUIsS0FBSyxDQUFDNEIsV0FBTixLQUFzQixLQUEzQyxJQUFvRHlCLEtBQUssQ0FBQ3hCLEtBQU4sQ0FBWXFCLE1BQXBFLEVBQTRFO0FBQzFFLGlCQUFPO0FBQ0xyQixZQUFBQSxLQUFLLEVBQUUsRUFERjtBQUVMRCxZQUFBQSxXQUFXLEVBQUU1QixLQUFLLENBQUM0QjtBQUZkLFdBQVA7QUFJRDs7QUFDRCxlQUFPO0FBQ0xBLFVBQUFBLFdBQVcsRUFBRTVCLEtBQUssQ0FBQzRCO0FBRGQsU0FBUDtBQUdEO0FBcEJ3QjtBQUFBO0FBQUEsSUFFRjJDLGdCQUZFOztBQW9KM0IsU0FBTywyQkFBVzVDLFVBQVgsQ0FBUDtBQUNEOztlQUVjRCxpQjs7QUFDUixJQUFNQyxVQUFVLEdBQUdELGlCQUFpQixFQUFwQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgY3JlYXRlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7aW5qZWN0SW50bCwgV3JhcHBlZENvbXBvbmVudFByb3BzfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCBVcGxvYWRCdXR0b24gZnJvbSAnLi91cGxvYWQtYnV0dG9uJztcbmltcG9ydCB7RHJhZ05Ecm9wLCBGaWxlVHlwZX0gZnJvbSAnLi4vaWNvbnMnO1xuaW1wb3J0IEZpbGVVcGxvYWRQcm9ncmVzcyBmcm9tICcuL2ZpbGUtdXBsb2FkLXByb2dyZXNzJztcbmltcG9ydCBGaWxlRHJvcCBmcm9tICcuL2ZpbGUtZHJvcCc7XG5pbXBvcnQge0ZpbGVMb2FkaW5nLCBGaWxlTG9hZGluZ1Byb2dyZXNzfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcblxuaW1wb3J0IHtpc0Nocm9tZX0gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5pbXBvcnQge0dVSURFU19GSUxFX0ZPUk1BVF9ET0N9IGZyb20gJ0BrZXBsZXIuZ2wvY29uc3RhbnRzJztcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcbi8vIEJyZWFrcG9pbnRzXG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ0BrZXBsZXIuZ2wvbG9jYWxpemF0aW9uJztcbmltcG9ydCB7bWVkaWF9IGZyb20gJ0BrZXBsZXIuZ2wvc3R5bGVzJztcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZmlsZS11cGxvYWQnKS5GaWxlVXBsb2FkUHJvcHN9IEZpbGVVcGxvYWRQcm9wcyAqL1xuXG5jb25zdCBmaWxlSWNvbkNvbG9yID0gJyNEM0Q4RTAnO1xuXG5jb25zdCBMaW5rUmVuZGVyZXIgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGEgaHJlZj17cHJvcHMuaHJlZn0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvYT5cbiAgKTtcbn07XG5jb25zdCBTdHlsZWRVcGxvYWRNZXNzYWdlID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yTFR9O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgJHttZWRpYS5wb3J0YWJsZWBcbiAgICBmb250LXNpemU6IDEycHg7XG4gIGB9O1xuYDtcblxuZXhwb3J0IGNvbnN0IFdhcm5pbmdNc2cgPSBzdHlsZWQuc3BhbmBcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZXJyb3JDb2xvcn07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5gO1xuXG5pbnRlcmZhY2UgU3R5bGVkRmlsZURyb3BQcm9wcyB7XG4gIGRyYWdPdmVyPzogYm9vbGVhbjtcbn1cblxuY29uc3QgU3R5bGVkRmlsZURyb3AgPSBzdHlsZWQuZGl2PFN0eWxlZEZpbGVEcm9wUHJvcHM+YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItc3R5bGU6ICR7cHJvcHMgPT4gKHByb3BzLmRyYWdPdmVyID8gJ3NvbGlkJyA6ICdkYXNoZWQnKX07XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gKHByb3BzLmRyYWdPdmVyID8gcHJvcHMudGhlbWUudGV4dENvbG9yTFQgOiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3JMVCl9O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA0OHB4IDhweCAwO1xuICBoZWlnaHQ6IDM2MHB4O1xuXG4gIC5maWxlLXVwbG9hZC1vciB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGlua0J0bkNvbG9yfTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gIH1cblxuICAuZmlsZS10eXBlLXJvdyB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gICR7bWVkaWEucG9ydGFibGVgXG4gICAgcGFkZGluZzogMTZweCA0cHggMDtcbiAgYH07XG5gO1xuXG5jb25zdCBNc2dXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubW9kYWxUaXRsZUNvbG9yfTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDM2cHg7XG5gO1xuXG5jb25zdCBTdHlsZWREcmFnTkRyb3BJY29uID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7ZmlsZUljb25Db2xvcn07XG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XG5cbiAgJHttZWRpYS5wb3J0YWJsZWBcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBgfTtcbiAgJHttZWRpYS5wYWxtYFxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgYH07XG5gO1xuXG5jb25zdCBTdHlsZWRGaWxlVHlwZUZvdyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICR7bWVkaWEucG9ydGFibGVgXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYH07XG4gICR7bWVkaWEucGFsbWBcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGB9O1xuYDtcblxuY29uc3QgU3R5bGVkRmlsZVVwbG9hZCA9IHN0eWxlZC5kaXZgXG4gIC5maWxlLWRyb3Age1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkTWVzc2FnZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuXG4gIC5sb2FkaW5nLWFjdGlvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5sb2FkaW5nLXNwaW5uZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWREcmFnRmlsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICAke21lZGlhLnBvcnRhYmxlYFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGB9O1xuICAke21lZGlhLnBvcnRhYmxlYFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGB9O1xuYDtcblxuY29uc3QgU3R5bGVkRGlzY2xhaW1lciA9IHN0eWxlZChTdHlsZWRNZXNzYWdlKWBcbiAgbWFyZ2luOiAwIGF1dG87XG5gO1xuXG50eXBlIEZpbGVVcGxvYWRQcm9wcyA9IHtcbiAgb25GaWxlVXBsb2FkOiAoZmlsZXM6IEZpbGVbXSkgPT4gdm9pZDtcbiAgZmlsZUxvYWRpbmc6IEZpbGVMb2FkaW5nIHwgZmFsc2U7XG4gIGZpbGVMb2FkaW5nUHJvZ3Jlc3M6IEZpbGVMb2FkaW5nUHJvZ3Jlc3M7XG4gIHRoZW1lOiBvYmplY3Q7XG4gIC8qKiBBIGxpc3Qgb2YgbmFtZXMgb2Ygc3VwcG9ydGVkIGZvcm1hdHMgc3VpdGFibGUgdG8gcHJlc2VudCB0byB1c2VyICovXG4gIGZpbGVGb3JtYXROYW1lcz86IHN0cmluZ1tdO1xuICAvKiogQSBsaXN0IG9mIHR5cGljYWxseSAzIGxldHRlciBleHRlbnNpb25zICh3aXRob3V0ICcuJykgZm9yIGZpbGUgbWF0Y2hpbmcgKi9cbiAgZmlsZUV4dGVuc2lvbnM/OiBzdHJpbmdbXTtcbiAgLyoqIFNldCB0byB0cnVlIGlmIGFwcCB3YW50cyB0byBkbyBpdHMgb3duIGZpbGUgZmlsdGVyaW5nICovXG4gIGRpc2FibGVFeHRlbnNpb25GaWx0ZXI/OiBib29sZWFuO1xufSAmIFdyYXBwZWRDb21wb25lbnRQcm9wcztcblxuZnVuY3Rpb24gRmlsZVVwbG9hZEZhY3RvcnkoKSB7XG4gIC8qKiBAYXVnbWVudHMge0NvbXBvbmVudDxGaWxlVXBsb2FkUHJvcHM+fSAqL1xuICBjbGFzcyBGaWxlVXBsb2FkIGV4dGVuZHMgQ29tcG9uZW50PEZpbGVVcGxvYWRQcm9wcz4ge1xuICAgIHN0YXRlID0ge1xuICAgICAgZHJhZ092ZXI6IGZhbHNlLFxuICAgICAgZmlsZUxvYWRpbmc6IGZhbHNlLFxuICAgICAgZmlsZXM6IFtdLFxuICAgICAgZXJyb3JGaWxlczogW11cbiAgICB9O1xuXG4gICAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wcywgc3RhdGUpIHtcbiAgICAgIGlmIChzdGF0ZS5maWxlTG9hZGluZyAmJiBwcm9wcy5maWxlTG9hZGluZyA9PT0gZmFsc2UgJiYgc3RhdGUuZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZmlsZXM6IFtdLFxuICAgICAgICAgIGZpbGVMb2FkaW5nOiBwcm9wcy5maWxlTG9hZGluZ1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZmlsZUxvYWRpbmc6IHByb3BzLmZpbGVMb2FkaW5nXG4gICAgICB9O1xuICAgIH1cblxuICAgIGZyYW1lID0gY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xuXG4gICAgX2lzVmFsaWRGaWxlVHlwZSA9IGZpbGVuYW1lID0+IHtcbiAgICAgIGNvbnN0IHtmaWxlRXh0ZW5zaW9ucyA9IFtdfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCBmaWxlRXh0ID0gZmlsZUV4dGVuc2lvbnMuZmluZChleHQgPT4gZmlsZW5hbWUuZW5kc1dpdGgoZXh0KSk7XG5cbiAgICAgIHJldHVybiBCb29sZWFuKGZpbGVFeHQpO1xuICAgIH07XG5cbiAgICAvKiogQHBhcmFtIHtGaWxlTGlzdH0gZmlsZUxpc3QgKi9cbiAgICBfaGFuZGxlRmlsZUlucHV0ID0gKGZpbGVMaXN0OiBGaWxlTGlzdCwgZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmaWxlcyA9IFsuLi5maWxlTGlzdF0uZmlsdGVyKEJvb2xlYW4pO1xuXG4gICAgICBjb25zdCB7ZGlzYWJsZUV4dGVuc2lvbkZpbHRlciA9IGZhbHNlfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIC8vIFRPRE8gLSBtb3ZlIHRoaXMgY29kZSBvdXQgb2YgdGhlIGNvbXBvbmVudFxuICAgICAgY29uc3QgZmlsZXNUb0xvYWQ6IEZpbGVbXSA9IFtdO1xuICAgICAgY29uc3QgZXJyb3JGaWxlczogc3RyaW5nW10gPSBbXTtcbiAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgICBpZiAoZGlzYWJsZUV4dGVuc2lvbkZpbHRlciB8fCB0aGlzLl9pc1ZhbGlkRmlsZVR5cGUoZmlsZS5uYW1lKSkge1xuICAgICAgICAgIGZpbGVzVG9Mb2FkLnB1c2goZmlsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXJyb3JGaWxlcy5wdXNoKGZpbGUubmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV4dFN0YXRlID0ge2ZpbGVzOiBmaWxlc1RvTG9hZCwgZXJyb3JGaWxlcywgZHJhZ092ZXI6IGZhbHNlfTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUsICgpID0+XG4gICAgICAgIG5leHRTdGF0ZS5maWxlcy5sZW5ndGggPyB0aGlzLnByb3BzLm9uRmlsZVVwbG9hZChuZXh0U3RhdGUuZmlsZXMpIDogbnVsbFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgX3RvZ2dsZURyYWdTdGF0ZSA9IG5ld1N0YXRlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2RyYWdPdmVyOiBuZXdTdGF0ZX0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7ZHJhZ092ZXIsIGZpbGVzLCBlcnJvckZpbGVzfSA9IHRoaXMuc3RhdGU7XG4gICAgICBjb25zdCB7ZmlsZUxvYWRpbmcsIGZpbGVMb2FkaW5nUHJvZ3Jlc3MsIHRoZW1lLCBpbnRsfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7ZmlsZUV4dGVuc2lvbnMgPSBbXSwgZmlsZUZvcm1hdE5hbWVzID0gW119ID0gdGhpcy5wcm9wcztcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRGaWxlVXBsb2FkIGNsYXNzTmFtZT1cImZpbGUtdXBsb2FkZXJcIiByZWY9e3RoaXMuZnJhbWV9PlxuICAgICAgICAgIHtGaWxlRHJvcCA/IChcbiAgICAgICAgICAgIDxGaWxlRHJvcFxuICAgICAgICAgICAgICBmcmFtZT17dGhpcy5mcmFtZS5jdXJyZW50IHx8IGRvY3VtZW50fVxuICAgICAgICAgICAgICBvbkRyYWdPdmVyPXsoKSA9PiB0aGlzLl90b2dnbGVEcmFnU3RhdGUodHJ1ZSl9XG4gICAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXsoKSA9PiB0aGlzLl90b2dnbGVEcmFnU3RhdGUoZmFsc2UpfVxuICAgICAgICAgICAgICBvbkRyb3A9e3RoaXMuX2hhbmRsZUZpbGVJbnB1dH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsZS11cGxvYWRlcl9fZmlsZS1kcm9wXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFN0eWxlZFVwbG9hZE1lc3NhZ2UgY2xhc3NOYW1lPVwiZmlsZS11cGxvYWRfX21lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICA8UmVhY3RNYXJrZG93blxuICAgICAgICAgICAgICAgICAgc291cmNlPXtgJHtpbnRsLmZvcm1hdE1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZDogJ2ZpbGVVcGxvYWRlci5jb25maWdVcGxvYWRNZXNzYWdlJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlsZUZvcm1hdE5hbWVzOiBmaWxlRm9ybWF0TmFtZXMubWFwKGZvcm1hdCA9PiBgKioke2Zvcm1hdH0qKmApLmpvaW4oJywgJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgKX0oJHtHVUlERVNfRklMRV9GT1JNQVRfRE9DfSkuYH1cbiAgICAgICAgICAgICAgICAgIHJlbmRlcmVycz17e2xpbms6IExpbmtSZW5kZXJlcn19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9TdHlsZWRVcGxvYWRNZXNzYWdlPlxuICAgICAgICAgICAgICA8U3R5bGVkRmlsZURyb3AgZHJhZ092ZXI9e2RyYWdPdmVyfT5cbiAgICAgICAgICAgICAgICA8U3R5bGVkRmlsZVR5cGVGb3cgY2xhc3NOYW1lPVwiZmlsZS10eXBlLXJvd1wiPlxuICAgICAgICAgICAgICAgICAge2ZpbGVFeHRlbnNpb25zLm1hcChleHQgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8RmlsZVR5cGUga2V5PXtleHR9IGV4dD17ZXh0fSBoZWlnaHQ9XCI1MHB4XCIgZm9udFNpemU9XCI5cHhcIiAvPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRGaWxlVHlwZUZvdz5cbiAgICAgICAgICAgICAgICB7ZmlsZUxvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICA8RmlsZVVwbG9hZFByb2dyZXNzIGZpbGVMb2FkaW5nUHJvZ3Jlc3M9e2ZpbGVMb2FkaW5nUHJvZ3Jlc3N9IHRoZW1lPXt0aGVtZX0gLz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7b3BhY2l0eTogZHJhZ092ZXIgPyAwLjUgOiAxfX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxlLXVwbG9hZC1kaXNwbGF5LW1lc3NhZ2VcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERyYWdORHJvcEljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ05Ecm9wIGhlaWdodD1cIjQ0cHhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRHJhZ05Ecm9wSWNvbj5cblxuICAgICAgICAgICAgICAgICAgICAgIHtlcnJvckZpbGVzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxXYXJuaW5nTXNnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXsnZmlsZVVwbG9hZGVyLmZpbGVOb3RTdXBwb3J0ZWQnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17e2Vycm9yRmlsZXM6IGVycm9yRmlsZXMuam9pbignLCAnKX19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1dhcm5pbmdNc2c+XG4gICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7IWZpbGVzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRHJhZ0ZpbGVXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1zZ1dyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnZmlsZVVwbG9hZGVyLm1lc3NhZ2UnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Nc2dXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsZS11cGxvYWQtb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydmaWxlVXBsb2FkZXIub3InfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFVwbG9hZEJ1dHRvbiBvblVwbG9hZD17dGhpcy5faGFuZGxlRmlsZUlucHV0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydmaWxlVXBsb2FkZXIuYnJvd3NlRmlsZXMnfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9VcGxvYWRCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREcmFnRmlsZVdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXNjbGFpbWVyPlxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnZmlsZVVwbG9hZGVyLmRpc2NsYWltZXInfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpc2NsYWltZXI+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L1N0eWxlZEZpbGVEcm9wPlxuICAgICAgICAgICAgPC9GaWxlRHJvcD5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIDxXYXJuaW5nTXNnPlxuICAgICAgICAgICAge2lzQ2hyb21lKCkgPyA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J2ZpbGVVcGxvYWRlci5jaHJvbWVNZXNzYWdlJ30gLz4gOiAnJ31cbiAgICAgICAgICA8L1dhcm5pbmdNc2c+XG4gICAgICAgIDwvU3R5bGVkRmlsZVVwbG9hZD5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluamVjdEludGwoRmlsZVVwbG9hZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVVcGxvYWRGYWN0b3J5O1xuZXhwb3J0IGNvbnN0IEZpbGVVcGxvYWQgPSBGaWxlVXBsb2FkRmFjdG9yeSgpO1xuIl19