"use strict";

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

var _react = _interopRequireDefault(require("react"));

var _window = _interopRequireDefault(require("global/window"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/** @typedef {import('./file-drop').FileDropProps} FileDropProps */

/** @augments React.PureComponent<FileDropProps> */
var FileDrop = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(FileDrop, _React$PureComponent);

  var _super = _createSuper(FileDrop);

  function FileDrop() {
    var _this;

    (0, _classCallCheck2["default"])(this, FileDrop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "frameDragCounter", 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      draggingOverFrame: false,
      draggingOverTarget: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "resetDragging", function () {
      _this.frameDragCounter = 0;

      _this.setState({
        draggingOverFrame: false,
        draggingOverTarget: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleWindowDragOverOrDrop", function (event) {
      // This prevents the browser from trying to load whatever file the user dropped on the window
      event.preventDefault();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFrameDrag", function (event) {
      // Only allow dragging of files
      if (!FileDrop.eventHasFiles(event)) return; // We are listening for events on the 'frame', so every time the user drags over any element in the frame's tree,
      // the event bubbles up to the frame. By keeping count of how many "dragenters" we get, we can tell if they are still
      // "draggingOverFrame" (b/c you get one "dragenter" initially, and one "dragenter"/one "dragleave" for every bubble)
      // This is far better than a "dragover" handler, which would be calling `setState` continuously.

      _this.frameDragCounter += event.type === 'dragenter' ? 1 : -1;

      if (_this.frameDragCounter === 1) {
        _this.setState({
          draggingOverFrame: true
        });

        if (_this.props.onFrameDragEnter) _this.props.onFrameDragEnter(event);
        return;
      }

      if (_this.frameDragCounter === 0) {
        _this.setState({
          draggingOverFrame: false
        });

        if (_this.props.onFrameDragLeave) _this.props.onFrameDragLeave(event);
        return;
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFrameDrop", function (event) {
      event.preventDefault();

      if (!_this.state.draggingOverTarget) {
        _this.resetDragging();

        if (_this.props.onFrameDrop) _this.props.onFrameDrop(event);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDragOver", function (event) {
      if (FileDrop.eventHasFiles(event)) {
        _this.setState({
          draggingOverTarget: true
        });

        if (!FileDrop.isIE() && _this.props.dropEffect) event.dataTransfer.dropEffect = _this.props.dropEffect;
        if (_this.props.onDragOver) _this.props.onDragOver(event);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDragLeave", function (event) {
      _this.setState({
        draggingOverTarget: false
      });

      if (_this.props.onDragLeave) _this.props.onDragLeave(event);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDrop", function (event) {
      if (_this.props.onDrop && FileDrop.eventHasFiles(event)) {
        var files = event.dataTransfer ? event.dataTransfer.files : null;

        _this.props.onDrop(files, event);
      }

      _this.resetDragging();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "stopFrameListeners", function (frame) {
      if (frame) {
        frame.removeEventListener('dragenter', _this.handleFrameDrag);
        frame.removeEventListener('dragleave', _this.handleFrameDrag);
        frame.removeEventListener('drop', _this.handleFrameDrop);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "startFrameListeners", function (frame) {
      if (frame) {
        frame.addEventListener('dragenter', _this.handleFrameDrag);
        frame.addEventListener('dragleave', _this.handleFrameDrag);
        frame.addEventListener('drop', _this.handleFrameDrop);
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(FileDrop, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startFrameListeners(this.props.frame);
      this.resetDragging();

      _window["default"].addEventListener('dragover', this.handleWindowDragOverOrDrop);

      _window["default"].addEventListener('drop', this.handleWindowDragOverOrDrop);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.frame !== this.props.frame) {
        this.resetDragging();
        this.stopFrameListeners(prevProps.frame);
        this.startFrameListeners(this.props.frame);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopFrameListeners(this.props.frame);

      _window["default"].removeEventListener('dragover', this.handleWindowDragOverOrDrop);

      _window["default"].removeEventListener('drop', this.handleWindowDragOverOrDrop);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          targetClassName = _this$props.targetClassName,
          draggingOverFrameClassName = _this$props.draggingOverFrameClassName,
          draggingOverTargetClassName = _this$props.draggingOverTargetClassName;
      var _this$state = this.state,
          draggingOverTarget = _this$state.draggingOverTarget,
          draggingOverFrame = _this$state.draggingOverFrame;
      var fileDropTargetClassName = targetClassName;
      if (draggingOverFrame) fileDropTargetClassName += " ".concat(draggingOverFrameClassName);
      if (draggingOverTarget) fileDropTargetClassName += " ".concat(draggingOverTargetClassName);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: className,
        onDragOver: this.handleDragOver,
        onDragLeave: this.handleDragLeave,
        onDrop: this.handleDrop
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: fileDropTargetClassName
      }, children));
    }
  }]);
  return FileDrop;
}(_react["default"].PureComponent);

(0, _defineProperty2["default"])(FileDrop, "isIE", function () {
  return _window["default"] && _window["default"].navigator && ((_window["default"].navigator.userAgent || []).includes('MSIE') || (_window["default"].navigator.appVersion || []).includes('Trident/'));
});
(0, _defineProperty2["default"])(FileDrop, "eventHasFiles", function (event) {
  // In most browsers this is an array, but in IE11 it's an Object :(
  var hasFiles = false;

  if (event.dataTransfer) {
    var types = event.dataTransfer.types;

    for (var keyOrIndex in types) {
      if (types[keyOrIndex] === 'Files') {
        hasFiles = true;
        break;
      }
    }
  }

  return hasFiles;
});
(0, _defineProperty2["default"])(FileDrop, "defaultProps", {
  dropEffect: 'copy',
  frame: _window["default"] ? _window["default"].document : undefined,
  className: 'file-drop',
  targetClassName: 'file-drop-target',
  draggingOverFrameClassName: 'file-drop-dragging-over-frame',
  draggingOverTargetClassName: 'file-drop-dragging-over-target'
});
var _default = FileDrop;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vZmlsZS11cGxvYWRlci9maWxlLWRyb3AudHN4Il0sIm5hbWVzIjpbIkZpbGVEcm9wIiwiZHJhZ2dpbmdPdmVyRnJhbWUiLCJkcmFnZ2luZ092ZXJUYXJnZXQiLCJmcmFtZURyYWdDb3VudGVyIiwic2V0U3RhdGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXZlbnRIYXNGaWxlcyIsInR5cGUiLCJwcm9wcyIsIm9uRnJhbWVEcmFnRW50ZXIiLCJvbkZyYW1lRHJhZ0xlYXZlIiwic3RhdGUiLCJyZXNldERyYWdnaW5nIiwib25GcmFtZURyb3AiLCJpc0lFIiwiZHJvcEVmZmVjdCIsImRhdGFUcmFuc2ZlciIsIm9uRHJhZ092ZXIiLCJvbkRyYWdMZWF2ZSIsIm9uRHJvcCIsImZpbGVzIiwiZnJhbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlRnJhbWVEcmFnIiwiaGFuZGxlRnJhbWVEcm9wIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0RnJhbWVMaXN0ZW5lcnMiLCJ3aW5kb3ciLCJoYW5kbGVXaW5kb3dEcmFnT3Zlck9yRHJvcCIsInByZXZQcm9wcyIsInN0b3BGcmFtZUxpc3RlbmVycyIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwidGFyZ2V0Q2xhc3NOYW1lIiwiZHJhZ2dpbmdPdmVyRnJhbWVDbGFzc05hbWUiLCJkcmFnZ2luZ092ZXJUYXJnZXRDbGFzc05hbWUiLCJmaWxlRHJvcFRhcmdldENsYXNzTmFtZSIsImhhbmRsZURyYWdPdmVyIiwiaGFuZGxlRHJhZ0xlYXZlIiwiaGFuZGxlRHJvcCIsIlJlYWN0IiwiUHVyZUNvbXBvbmVudCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImluY2x1ZGVzIiwiYXBwVmVyc2lvbiIsImhhc0ZpbGVzIiwidHlwZXMiLCJrZXlPckluZGV4IiwiZG9jdW1lbnQiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7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bUJBQU9lLFNBQVAsQ0FBaUJDLFNBQWpCLElBQThCLEVBQS9CLEVBQW1DQyxRQUFuQyxDQUE0QyxNQUE1QyxLQUNDLENBQUNqQixtQkFBT2UsU0FBUCxDQUFpQkcsVUFBakIsSUFBK0IsRUFBaEMsRUFBb0NELFFBQXBDLENBQTZDLFVBQTdDLENBSEYsQ0FEWTtBQUFBLEM7aUNBRFY3QyxRLG1CQU9tQixVQUFBSyxLQUFLLEVBQUk7QUFDOUI7QUFFQSxNQUFJMEMsUUFBUSxHQUFHLEtBQWY7O0FBQ0EsTUFBSTFDLEtBQUssQ0FBQ1ksWUFBVixFQUF3QjtBQUN0QixRQUFNK0IsS0FBSyxHQUFHM0MsS0FBSyxDQUFDWSxZQUFOLENBQW1CK0IsS0FBakM7O0FBQ0EsU0FBSyxJQUFNQyxVQUFYLElBQXlCRCxLQUF6QixFQUFnQztBQUM5QixVQUFJQSxLQUFLLENBQUNDLFVBQUQsQ0FBTCxLQUFzQixPQUExQixFQUFtQztBQUNqQ0YsUUFBQUEsUUFBUSxHQUFHLElBQVg7QUFDQTtBQUNEO0FBQ0Y7QUFDRjs7QUFDRCxTQUFPQSxRQUFQO0FBQ0QsQztpQ0FyQkcvQyxRLGtCQXVCa0I7QUFDcEJnQixFQUFBQSxVQUFVLEVBQUUsTUFEUTtBQUVwQk0sRUFBQUEsS0FBSyxFQUFFTSxxQkFBU0EsbUJBQU9zQixRQUFoQixHQUEyQkMsU0FGZDtBQUdwQmxCLEVBQUFBLFNBQVMsRUFBRSxXQUhTO0FBSXBCQyxFQUFBQSxlQUFlLEVBQUUsa0JBSkc7QUFLcEJDLEVBQUFBLDBCQUEwQixFQUFFLCtCQUxSO0FBTXBCQyxFQUFBQSwyQkFBMkIsRUFBRTtBQU5ULEM7ZUEySVRwQyxRIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuLyoqXG4gKiBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc2FyaW5rL3JlYWN0LWZpbGUtZHJvcFxuICogRm9yIFJlYWN0IDE2LjggY29tcGF0aWJpbGl0eVxuICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdpbmRvdyBmcm9tICdnbG9iYWwvd2luZG93JztcblxuZXhwb3J0IHR5cGUgRmlsZURyb3BQcm9wcyA9IHtcbiAgZHJvcEVmZmVjdD86ICdjb3B5JyB8ICdtb3ZlJyB8ICdsaW5rJyB8ICdub25lJztcbiAgZnJhbWU/OiB0eXBlb2YgZG9jdW1lbnQgfCB0eXBlb2Ygd2luZG93IHwgSFRNTEVsZW1lbnQ7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgdGFyZ2V0Q2xhc3NOYW1lPzogc3RyaW5nO1xuICBkcmFnZ2luZ092ZXJGcmFtZUNsYXNzTmFtZT86IHN0cmluZztcbiAgZHJhZ2dpbmdPdmVyVGFyZ2V0Q2xhc3NOYW1lPzogc3RyaW5nO1xuICBvbkRyYWdPdmVyPzogKGV2ZW50OiBhbnkpID0+IHZvaWQ7XG4gIG9uRHJhZ0xlYXZlPzogKGV2ZW50OiBhbnkpID0+IHZvaWQ7XG4gIG9uRHJvcD86IChmaWxlTGlzdDogRmlsZUxpc3QsIGV2ZW50OiBhbnkpID0+IHZvaWQ7XG4gIG9uRnJhbWVEcmFnRW50ZXI/OiAoZXZlbnQ6IGFueSkgPT4gdm9pZDtcbiAgb25GcmFtZURyYWdMZWF2ZT86IChldmVudDogYW55KSA9PiB2b2lkO1xuICBvbkZyYW1lRHJvcD86IChldmVudDogYW55KSA9PiB2b2lkO1xufTtcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZmlsZS1kcm9wJykuRmlsZURyb3BQcm9wc30gRmlsZURyb3BQcm9wcyAqL1xuXG4vKiogQGF1Z21lbnRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RmlsZURyb3BQcm9wcz4gKi9cbmNsYXNzIEZpbGVEcm9wIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxGaWxlRHJvcFByb3BzPiB7XG4gIHN0YXRpYyBpc0lFID0gKCkgPT5cbiAgICB3aW5kb3cgJiZcbiAgICB3aW5kb3cubmF2aWdhdG9yICYmXG4gICAgKCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBbXSkuaW5jbHVkZXMoJ01TSUUnKSB8fFxuICAgICAgKHdpbmRvdy5uYXZpZ2F0b3IuYXBwVmVyc2lvbiB8fCBbXSkuaW5jbHVkZXMoJ1RyaWRlbnQvJykpO1xuXG4gIHN0YXRpYyBldmVudEhhc0ZpbGVzID0gZXZlbnQgPT4ge1xuICAgIC8vIEluIG1vc3QgYnJvd3NlcnMgdGhpcyBpcyBhbiBhcnJheSwgYnV0IGluIElFMTEgaXQncyBhbiBPYmplY3QgOihcblxuICAgIGxldCBoYXNGaWxlcyA9IGZhbHNlO1xuICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIpIHtcbiAgICAgIGNvbnN0IHR5cGVzID0gZXZlbnQuZGF0YVRyYW5zZmVyLnR5cGVzO1xuICAgICAgZm9yIChjb25zdCBrZXlPckluZGV4IGluIHR5cGVzKSB7XG4gICAgICAgIGlmICh0eXBlc1trZXlPckluZGV4XSA9PT0gJ0ZpbGVzJykge1xuICAgICAgICAgIGhhc0ZpbGVzID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaGFzRmlsZXM7XG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkcm9wRWZmZWN0OiAnY29weScsXG4gICAgZnJhbWU6IHdpbmRvdyA/IHdpbmRvdy5kb2N1bWVudCA6IHVuZGVmaW5lZCxcbiAgICBjbGFzc05hbWU6ICdmaWxlLWRyb3AnLFxuICAgIHRhcmdldENsYXNzTmFtZTogJ2ZpbGUtZHJvcC10YXJnZXQnLFxuICAgIGRyYWdnaW5nT3ZlckZyYW1lQ2xhc3NOYW1lOiAnZmlsZS1kcm9wLWRyYWdnaW5nLW92ZXItZnJhbWUnLFxuICAgIGRyYWdnaW5nT3ZlclRhcmdldENsYXNzTmFtZTogJ2ZpbGUtZHJvcC1kcmFnZ2luZy1vdmVyLXRhcmdldCdcbiAgfTtcblxuICBmcmFtZURyYWdDb3VudGVyID0gMDtcbiAgc3RhdGUgPSB7ZHJhZ2dpbmdPdmVyRnJhbWU6IGZhbHNlLCBkcmFnZ2luZ092ZXJUYXJnZXQ6IGZhbHNlfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnN0YXJ0RnJhbWVMaXN0ZW5lcnModGhpcy5wcm9wcy5mcmFtZSk7XG4gICAgdGhpcy5yZXNldERyYWdnaW5nKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5oYW5kbGVXaW5kb3dEcmFnT3Zlck9yRHJvcCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLmhhbmRsZVdpbmRvd0RyYWdPdmVyT3JEcm9wKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAocHJldlByb3BzLmZyYW1lICE9PSB0aGlzLnByb3BzLmZyYW1lKSB7XG4gICAgICB0aGlzLnJlc2V0RHJhZ2dpbmcoKTtcbiAgICAgIHRoaXMuc3RvcEZyYW1lTGlzdGVuZXJzKHByZXZQcm9wcy5mcmFtZSk7XG4gICAgICB0aGlzLnN0YXJ0RnJhbWVMaXN0ZW5lcnModGhpcy5wcm9wcy5mcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zdG9wRnJhbWVMaXN0ZW5lcnModGhpcy5wcm9wcy5mcmFtZSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5oYW5kbGVXaW5kb3dEcmFnT3Zlck9yRHJvcCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLmhhbmRsZVdpbmRvd0RyYWdPdmVyT3JEcm9wKTtcbiAgfVxuXG4gIHJlc2V0RHJhZ2dpbmcgPSAoKSA9PiB7XG4gICAgdGhpcy5mcmFtZURyYWdDb3VudGVyID0gMDtcbiAgICB0aGlzLnNldFN0YXRlKHtkcmFnZ2luZ092ZXJGcmFtZTogZmFsc2UsIGRyYWdnaW5nT3ZlclRhcmdldDogZmFsc2V9KTtcbiAgfTtcblxuICBoYW5kbGVXaW5kb3dEcmFnT3Zlck9yRHJvcCA9IGV2ZW50ID0+IHtcbiAgICAvLyBUaGlzIHByZXZlbnRzIHRoZSBicm93c2VyIGZyb20gdHJ5aW5nIHRvIGxvYWQgd2hhdGV2ZXIgZmlsZSB0aGUgdXNlciBkcm9wcGVkIG9uIHRoZSB3aW5kb3dcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIGhhbmRsZUZyYW1lRHJhZyA9IGV2ZW50ID0+IHtcbiAgICAvLyBPbmx5IGFsbG93IGRyYWdnaW5nIG9mIGZpbGVzXG4gICAgaWYgKCFGaWxlRHJvcC5ldmVudEhhc0ZpbGVzKGV2ZW50KSkgcmV0dXJuO1xuXG4gICAgLy8gV2UgYXJlIGxpc3RlbmluZyBmb3IgZXZlbnRzIG9uIHRoZSAnZnJhbWUnLCBzbyBldmVyeSB0aW1lIHRoZSB1c2VyIGRyYWdzIG92ZXIgYW55IGVsZW1lbnQgaW4gdGhlIGZyYW1lJ3MgdHJlZSxcbiAgICAvLyB0aGUgZXZlbnQgYnViYmxlcyB1cCB0byB0aGUgZnJhbWUuIEJ5IGtlZXBpbmcgY291bnQgb2YgaG93IG1hbnkgXCJkcmFnZW50ZXJzXCIgd2UgZ2V0LCB3ZSBjYW4gdGVsbCBpZiB0aGV5IGFyZSBzdGlsbFxuICAgIC8vIFwiZHJhZ2dpbmdPdmVyRnJhbWVcIiAoYi9jIHlvdSBnZXQgb25lIFwiZHJhZ2VudGVyXCIgaW5pdGlhbGx5LCBhbmQgb25lIFwiZHJhZ2VudGVyXCIvb25lIFwiZHJhZ2xlYXZlXCIgZm9yIGV2ZXJ5IGJ1YmJsZSlcbiAgICAvLyBUaGlzIGlzIGZhciBiZXR0ZXIgdGhhbiBhIFwiZHJhZ292ZXJcIiBoYW5kbGVyLCB3aGljaCB3b3VsZCBiZSBjYWxsaW5nIGBzZXRTdGF0ZWAgY29udGludW91c2x5LlxuICAgIHRoaXMuZnJhbWVEcmFnQ291bnRlciArPSBldmVudC50eXBlID09PSAnZHJhZ2VudGVyJyA/IDEgOiAtMTtcblxuICAgIGlmICh0aGlzLmZyYW1lRHJhZ0NvdW50ZXIgPT09IDEpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2RyYWdnaW5nT3ZlckZyYW1lOiB0cnVlfSk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkZyYW1lRHJhZ0VudGVyKSB0aGlzLnByb3BzLm9uRnJhbWVEcmFnRW50ZXIoZXZlbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZyYW1lRHJhZ0NvdW50ZXIgPT09IDApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2RyYWdnaW5nT3ZlckZyYW1lOiBmYWxzZX0pO1xuICAgICAgaWYgKHRoaXMucHJvcHMub25GcmFtZURyYWdMZWF2ZSkgdGhpcy5wcm9wcy5vbkZyYW1lRHJhZ0xlYXZlKGV2ZW50KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlRnJhbWVEcm9wID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmRyYWdnaW5nT3ZlclRhcmdldCkge1xuICAgICAgdGhpcy5yZXNldERyYWdnaW5nKCk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkZyYW1lRHJvcCkgdGhpcy5wcm9wcy5vbkZyYW1lRHJvcChldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZURyYWdPdmVyID0gZXZlbnQgPT4ge1xuICAgIGlmIChGaWxlRHJvcC5ldmVudEhhc0ZpbGVzKGV2ZW50KSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZHJhZ2dpbmdPdmVyVGFyZ2V0OiB0cnVlfSk7XG4gICAgICBpZiAoIUZpbGVEcm9wLmlzSUUoKSAmJiB0aGlzLnByb3BzLmRyb3BFZmZlY3QpXG4gICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gdGhpcy5wcm9wcy5kcm9wRWZmZWN0O1xuICAgICAgaWYgKHRoaXMucHJvcHMub25EcmFnT3ZlcikgdGhpcy5wcm9wcy5vbkRyYWdPdmVyKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlRHJhZ0xlYXZlID0gZXZlbnQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe2RyYWdnaW5nT3ZlclRhcmdldDogZmFsc2V9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkRyYWdMZWF2ZSkgdGhpcy5wcm9wcy5vbkRyYWdMZWF2ZShldmVudCk7XG4gIH07XG5cbiAgaGFuZGxlRHJvcCA9IGV2ZW50ID0+IHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkRyb3AgJiYgRmlsZURyb3AuZXZlbnRIYXNGaWxlcyhldmVudCkpIHtcbiAgICAgIGNvbnN0IGZpbGVzID0gZXZlbnQuZGF0YVRyYW5zZmVyID8gZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzIDogbnVsbDtcbiAgICAgIHRoaXMucHJvcHMub25Ecm9wKGZpbGVzLCBldmVudCk7XG4gICAgfVxuICAgIHRoaXMucmVzZXREcmFnZ2luZygpO1xuICB9O1xuXG4gIHN0b3BGcmFtZUxpc3RlbmVycyA9IGZyYW1lID0+IHtcbiAgICBpZiAoZnJhbWUpIHtcbiAgICAgIGZyYW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIHRoaXMuaGFuZGxlRnJhbWVEcmFnKTtcbiAgICAgIGZyYW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIHRoaXMuaGFuZGxlRnJhbWVEcmFnKTtcbiAgICAgIGZyYW1lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLmhhbmRsZUZyYW1lRHJvcCk7XG4gICAgfVxuICB9O1xuXG4gIHN0YXJ0RnJhbWVMaXN0ZW5lcnMgPSBmcmFtZSA9PiB7XG4gICAgaWYgKGZyYW1lKSB7XG4gICAgICBmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCB0aGlzLmhhbmRsZUZyYW1lRHJhZyk7XG4gICAgICBmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmhhbmRsZUZyYW1lRHJhZyk7XG4gICAgICBmcmFtZS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5oYW5kbGVGcmFtZURyb3ApO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICB0YXJnZXRDbGFzc05hbWUsXG4gICAgICBkcmFnZ2luZ092ZXJGcmFtZUNsYXNzTmFtZSxcbiAgICAgIGRyYWdnaW5nT3ZlclRhcmdldENsYXNzTmFtZVxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtkcmFnZ2luZ092ZXJUYXJnZXQsIGRyYWdnaW5nT3ZlckZyYW1lfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBsZXQgZmlsZURyb3BUYXJnZXRDbGFzc05hbWUgPSB0YXJnZXRDbGFzc05hbWU7XG4gICAgaWYgKGRyYWdnaW5nT3ZlckZyYW1lKSBmaWxlRHJvcFRhcmdldENsYXNzTmFtZSArPSBgICR7ZHJhZ2dpbmdPdmVyRnJhbWVDbGFzc05hbWV9YDtcbiAgICBpZiAoZHJhZ2dpbmdPdmVyVGFyZ2V0KSBmaWxlRHJvcFRhcmdldENsYXNzTmFtZSArPSBgICR7ZHJhZ2dpbmdPdmVyVGFyZ2V0Q2xhc3NOYW1lfWA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgb25EcmFnT3Zlcj17dGhpcy5oYW5kbGVEcmFnT3Zlcn1cbiAgICAgICAgb25EcmFnTGVhdmU9e3RoaXMuaGFuZGxlRHJhZ0xlYXZlfVxuICAgICAgICBvbkRyb3A9e3RoaXMuaGFuZGxlRHJvcH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ZpbGVEcm9wVGFyZ2V0Q2xhc3NOYW1lfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVEcm9wO1xuIl19