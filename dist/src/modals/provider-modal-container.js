"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

/**
 * A wrapper component in modals contain cloud providers.
 * It set default provider by checking which provider has logged in
 * @component
 */
var ProviderModalContainer = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ProviderModalContainer, _Component);

  var _super = _createSuper(ProviderModalContainer);

  function ProviderModalContainer() {
    (0, _classCallCheck2["default"])(this, ProviderModalContainer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(ProviderModalContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._setDefaultProvider();
    }
  }, {
    key: "_setDefaultProvider",
    value: function _setDefaultProvider() {
      var _this$props$cloudProv;

      if (!this.props.currentProvider && (_this$props$cloudProv = this.props.cloudProviders) !== null && _this$props$cloudProv !== void 0 && _this$props$cloudProv.length) {
        var _this$props$cloudProv2;

        var connected = (_this$props$cloudProv2 = this.props.cloudProviders) === null || _this$props$cloudProv2 === void 0 ? void 0 : _this$props$cloudProv2.find(function (p) {
          return typeof p.getAccessToken === 'function' && p.getAccessToken();
        });

        if (connected && typeof this.props.onSetCloudProvider === 'function') {
          this.props.onSetCloudProvider(connected.name);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.props.children);
    }
  }]);
  return ProviderModalContainer;
}(_react.Component);

exports["default"] = ProviderModalContainer;
(0, _defineProperty2["default"])(ProviderModalContainer, "defaultProps", {
  cloudProviders: [],
  currentProvider: null
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tb2RhbHMvcHJvdmlkZXItbW9kYWwtY29udGFpbmVyLnRzeCJdLCJuYW1lcyI6WyJQcm92aWRlck1vZGFsQ29udGFpbmVyIiwiX3NldERlZmF1bHRQcm92aWRlciIsInByb3BzIiwiY3VycmVudFByb3ZpZGVyIiwiY2xvdWRQcm92aWRlcnMiLCJsZW5ndGgiLCJjb25uZWN0ZWQiLCJmaW5kIiwicCIsImdldEFjY2Vzc1Rva2VuIiwib25TZXRDbG91ZFByb3ZpZGVyIiwibmFtZSIsImNoaWxkcmVuIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNxQkEsc0I7Ozs7Ozs7Ozs7OztXQU1uQiw2QkFBb0I7QUFDbEIsV0FBS0MsbUJBQUw7QUFDRDs7O1dBRUQsK0JBQXNCO0FBQUE7O0FBQ3BCLFVBQUksQ0FBQyxLQUFLQyxLQUFMLENBQVdDLGVBQVosNkJBQStCLEtBQUtELEtBQUwsQ0FBV0UsY0FBMUMsa0RBQStCLHNCQUEyQkMsTUFBOUQsRUFBc0U7QUFBQTs7QUFDcEUsWUFBTUMsU0FBUyw2QkFBRyxLQUFLSixLQUFMLENBQVdFLGNBQWQsMkRBQUcsdUJBQTJCRyxJQUEzQixDQUNoQixVQUFBQyxDQUFDO0FBQUEsaUJBQUksT0FBT0EsQ0FBQyxDQUFDQyxjQUFULEtBQTRCLFVBQTVCLElBQTBDRCxDQUFDLENBQUNDLGNBQUYsRUFBOUM7QUFBQSxTQURlLENBQWxCOztBQUlBLFlBQUlILFNBQVMsSUFBSSxPQUFPLEtBQUtKLEtBQUwsQ0FBV1Esa0JBQWxCLEtBQXlDLFVBQTFELEVBQXNFO0FBQ3BFLGVBQUtSLEtBQUwsQ0FBV1Esa0JBQVgsQ0FBOEJKLFNBQVMsQ0FBQ0ssSUFBeEM7QUFDRDtBQUNGO0FBQ0Y7OztXQUVELGtCQUFTO0FBQ1AsMEJBQU8sa0VBQUcsS0FBS1QsS0FBTCxDQUFXVSxRQUFkLENBQVA7QUFDRDs7O0VBeEJpREMsZ0I7OztpQ0FBL0JiLHNCLGtCQUNHO0FBQ3BCSSxFQUFBQSxjQUFjLEVBQUUsRUFESTtBQUVwQkQsRUFBQUEsZUFBZSxFQUFFO0FBRkcsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAnQGtlcGxlci5nbC9jbG91ZC1wcm92aWRlcnMnO1xuaW1wb3J0IHtTZXRDbG91ZFByb3ZpZGVyUGF5bG9hZH0gZnJvbSAnQGtlcGxlci5nbC9hY3Rpb25zJztcblxuZXhwb3J0IHR5cGUgUHJvdmlkZXJNb2RhbENvbnRhaW5lclByb3BzID0ge1xuICBjbG91ZFByb3ZpZGVycz86IFByb3ZpZGVyW107XG4gIGN1cnJlbnRQcm92aWRlcj86IHN0cmluZyB8IG51bGw7XG4gIG9uU2V0Q2xvdWRQcm92aWRlcjogKHByb3ZpZGVyOiBTZXRDbG91ZFByb3ZpZGVyUGF5bG9hZCkgPT4gdm9pZDtcbn07XG5cbi8qKlxuICogQSB3cmFwcGVyIGNvbXBvbmVudCBpbiBtb2RhbHMgY29udGFpbiBjbG91ZCBwcm92aWRlcnMuXG4gKiBJdCBzZXQgZGVmYXVsdCBwcm92aWRlciBieSBjaGVja2luZyB3aGljaCBwcm92aWRlciBoYXMgbG9nZ2VkIGluXG4gKiBAY29tcG9uZW50XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3ZpZGVyTW9kYWxDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQ8UHJvdmlkZXJNb2RhbENvbnRhaW5lclByb3BzPiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2xvdWRQcm92aWRlcnM6IFtdLFxuICAgIGN1cnJlbnRQcm92aWRlcjogbnVsbFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX3NldERlZmF1bHRQcm92aWRlcigpO1xuICB9XG5cbiAgX3NldERlZmF1bHRQcm92aWRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuY3VycmVudFByb3ZpZGVyICYmIHRoaXMucHJvcHMuY2xvdWRQcm92aWRlcnM/Lmxlbmd0aCkge1xuICAgICAgY29uc3QgY29ubmVjdGVkID0gdGhpcy5wcm9wcy5jbG91ZFByb3ZpZGVycz8uZmluZChcbiAgICAgICAgcCA9PiB0eXBlb2YgcC5nZXRBY2Nlc3NUb2tlbiA9PT0gJ2Z1bmN0aW9uJyAmJiBwLmdldEFjY2Vzc1Rva2VuKClcbiAgICAgICk7XG5cbiAgICAgIGlmIChjb25uZWN0ZWQgJiYgdHlwZW9mIHRoaXMucHJvcHMub25TZXRDbG91ZFByb3ZpZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TZXRDbG91ZFByb3ZpZGVyKGNvbm5lY3RlZC5uYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDw+e3RoaXMucHJvcHMuY2hpbGRyZW59PC8+O1xuICB9XG59XG4iXX0=