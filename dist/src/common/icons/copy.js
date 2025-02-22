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

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _base = _interopRequireDefault(require("./base"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Copy = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Copy, _Component);

  var _super = _createSuper(Copy);

  function Copy() {
    (0, _classCallCheck2["default"])(this, Copy);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Copy, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_base["default"], (0, _extends2["default"])({
        viewBox: "0 0 64 64"
      }, this.props), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M37.2402913,45.4271845 L37.2402913,53.2402913 L9.66990291,53.2402913 L9.66990291,25.6699029 L17.4830097,25.6699029 L17.4830097,21 L8.59223301,21 C6.61650485,21 5,22.6165049 5,24.592233 L5,54.407767 C5,56.3834951 6.61650485,58 8.59223301,58 L38.407767,58 C40.3834951,58 42,56.3834951 42,54.407767 L42,45.5169903 L37.2402913,45.5169903 L37.2402913,45.4271845 Z"
      }), /*#__PURE__*/_react["default"].createElement("path", {
        d: "M52.407767,7 L22.592233,7 C20.6165049,7 19,8.61650485 19,10.592233 L19,40.407767 C19,42.3834951 20.6165049,44 22.592233,44 L52.407767,44 C54.3834951,44 56,42.3834951 56,40.407767 L56,10.592233 C56,8.61650485 54.3834951,7 52.407767,7 Z M51.3300971,39.2402913 L23.7597087,39.2402913 L23.7597087,11.6699029 L51.4199029,11.6699029 L51.4199029,39.2402913 L51.3300971,39.2402913 Z"
      }));
    }
  }]);
  return Copy;
}(_react.Component);

exports["default"] = Copy;
(0, _defineProperty2["default"])(Copy, "defaultProps", {
  height: '16px',
  predefinedClassName: 'data-ex-icons-copy'
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vaWNvbnMvY29weS50c3giXSwibmFtZXMiOlsiQ29weSIsInByb3BzIiwiQ29tcG9uZW50IiwiaGVpZ2h0IiwicHJlZGVmaW5lZENsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7V0FNbkIsa0JBQVM7QUFDUCwwQkFDRSxnQ0FBQyxnQkFBRDtBQUFNLFFBQUEsT0FBTyxFQUFDO0FBQWQsU0FBOEIsS0FBS0MsS0FBbkMsZ0JBQ0U7QUFBTSxRQUFBLENBQUMsRUFBQztBQUFSLFFBREYsZUFFRTtBQUFNLFFBQUEsQ0FBQyxFQUFDO0FBQVIsUUFGRixDQURGO0FBTUQ7OztFQWIrQkMsZ0I7OztpQ0FBYkYsSSxrQkFDRztBQUNwQkcsRUFBQUEsTUFBTSxFQUFFLE1BRFk7QUFFcEJDLEVBQUFBLG1CQUFtQixFQUFFO0FBRkQsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2UsIHtCYXNlUHJvcHN9IGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcHkgZXh0ZW5kcyBDb21wb25lbnQ8UGFydGlhbDxCYXNlUHJvcHM+PiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGVpZ2h0OiAnMTZweCcsXG4gICAgcHJlZGVmaW5lZENsYXNzTmFtZTogJ2RhdGEtZXgtaWNvbnMtY29weSdcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCYXNlIHZpZXdCb3g9XCIwIDAgNjQgNjRcIiB7Li4udGhpcy5wcm9wc30+XG4gICAgICAgIDxwYXRoIGQ9XCJNMzcuMjQwMjkxMyw0NS40MjcxODQ1IEwzNy4yNDAyOTEzLDUzLjI0MDI5MTMgTDkuNjY5OTAyOTEsNTMuMjQwMjkxMyBMOS42Njk5MDI5MSwyNS42Njk5MDI5IEwxNy40ODMwMDk3LDI1LjY2OTkwMjkgTDE3LjQ4MzAwOTcsMjEgTDguNTkyMjMzMDEsMjEgQzYuNjE2NTA0ODUsMjEgNSwyMi42MTY1MDQ5IDUsMjQuNTkyMjMzIEw1LDU0LjQwNzc2NyBDNSw1Ni4zODM0OTUxIDYuNjE2NTA0ODUsNTggOC41OTIyMzMwMSw1OCBMMzguNDA3NzY3LDU4IEM0MC4zODM0OTUxLDU4IDQyLDU2LjM4MzQ5NTEgNDIsNTQuNDA3NzY3IEw0Miw0NS41MTY5OTAzIEwzNy4yNDAyOTEzLDQ1LjUxNjk5MDMgTDM3LjI0MDI5MTMsNDUuNDI3MTg0NSBaXCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk01Mi40MDc3NjcsNyBMMjIuNTkyMjMzLDcgQzIwLjYxNjUwNDksNyAxOSw4LjYxNjUwNDg1IDE5LDEwLjU5MjIzMyBMMTksNDAuNDA3NzY3IEMxOSw0Mi4zODM0OTUxIDIwLjYxNjUwNDksNDQgMjIuNTkyMjMzLDQ0IEw1Mi40MDc3NjcsNDQgQzU0LjM4MzQ5NTEsNDQgNTYsNDIuMzgzNDk1MSA1Niw0MC40MDc3NjcgTDU2LDEwLjU5MjIzMyBDNTYsOC42MTY1MDQ4NSA1NC4zODM0OTUxLDcgNTIuNDA3NzY3LDcgWiBNNTEuMzMwMDk3MSwzOS4yNDAyOTEzIEwyMy43NTk3MDg3LDM5LjI0MDI5MTMgTDIzLjc1OTcwODcsMTEuNjY5OTAyOSBMNTEuNDE5OTAyOSwxMS42Njk5MDI5IEw1MS40MTk5MDI5LDM5LjI0MDI5MTMgTDUxLjMzMDA5NzEsMzkuMjQwMjkxMyBaXCIgLz5cbiAgICAgIDwvQmFzZT5cbiAgICApO1xuICB9XG59XG4iXX0=