"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MapsLayoutFactory;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _react = _interopRequireDefault(require("react"));

var _templateObject;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Outer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n  width: 100%;\n  height: 100%;\n"])));

MapsLayoutFactory.deps = [];

function MapsLayoutFactory() {
  var MapsLayout = /*#__PURE__*/function (_React$Component) {
    (0, _inherits2["default"])(MapsLayout, _React$Component);

    var _super = _createSuper(MapsLayout);

    function MapsLayout() {
      (0, _classCallCheck2["default"])(this, MapsLayout);
      return _super.apply(this, arguments);
    }

    (0, _createClass2["default"])(MapsLayout, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/_react["default"].createElement(Outer, {
          className: this.props.className
        }, this.props.children);
      }
    }]);
    return MapsLayout;
  }(_react["default"].Component);

  return MapsLayout;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tYXBzLWxheW91dC50c3giXSwibmFtZXMiOlsiT3V0ZXIiLCJzdHlsZWQiLCJkaXYiLCJNYXBzTGF5b3V0RmFjdG9yeSIsImRlcHMiLCJNYXBzTGF5b3V0IiwicHJvcHMiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsS0FBSyxHQUFHQyw2QkFBT0MsR0FBVixrS0FBWDs7QUFPQUMsaUJBQWlCLENBQUNDLElBQWxCLEdBQXlCLEVBQXpCOztBQU1lLFNBQVNELGlCQUFULEdBQTBFO0FBQUEsTUFDakZFLFVBRGlGO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLGFBRXJGLGtCQUFTO0FBQ1AsNEJBQU8sZ0NBQUMsS0FBRDtBQUFPLFVBQUEsU0FBUyxFQUFFLEtBQUtDLEtBQUwsQ0FBV0M7QUFBN0IsV0FBeUMsS0FBS0QsS0FBTCxDQUFXRSxRQUFwRCxDQUFQO0FBQ0Q7QUFKb0Y7QUFBQTtBQUFBLElBQzlEQyxrQkFBTUMsU0FEd0Q7O0FBTXZGLFNBQU9MLFVBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgT3V0ZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5gO1xuXG5NYXBzTGF5b3V0RmFjdG9yeS5kZXBzID0gW107XG5cbmludGVyZmFjZSBNYXBzTGF5b3V0RmFjdG9yeVByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXBzTGF5b3V0RmFjdG9yeSgpOiBSZWFjdC5Db21wb25lbnRUeXBlPE1hcHNMYXlvdXRGYWN0b3J5UHJvcHM+IHtcbiAgY2xhc3MgTWFwc0xheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxNYXBzTGF5b3V0RmFjdG9yeVByb3BzPiB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxPdXRlciBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT57dGhpcy5wcm9wcy5jaGlsZHJlbn08L091dGVyPjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIE1hcHNMYXlvdXQ7XG59XG4iXX0=