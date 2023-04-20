"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.providerStateReducerFactory = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _reduxActions = require("redux-actions");

var providerStateUpdaters = _interopRequireWildcard(require("./provider-state-updaters"));

var _actions = require("@kepler.gl/actions");

var _actionHandler;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Important: Do not rename `actionHandler` or the assignment pattern of property value.
 * It is used to generate documentation
 */
var actionHandler = (_actionHandler = {}, (0, _defineProperty2["default"])(_actionHandler, _actions.ProviderActionTypes.EXPORT_FILE_TO_CLOUD, providerStateUpdaters.exportFileToCloudUpdater), (0, _defineProperty2["default"])(_actionHandler, _actions.ProviderActionTypes.EXPORT_FILE_SUCCESS, providerStateUpdaters.exportFileSuccessUpdater), (0, _defineProperty2["default"])(_actionHandler, _actions.ProviderActionTypes.EXPORT_FILE_ERROR, providerStateUpdaters.exportFileErrorUpdater), (0, _defineProperty2["default"])(_actionHandler, _actions.ProviderActionTypes.RESET_PROVIDER_STATUS, providerStateUpdaters.resetProviderStatusUpdater), (0, _defineProperty2["default"])(_actionHandler, _actions.ProviderActionTypes.SET_CLOUD_PROVIDER, providerStateUpdaters.setCloudProviderUpdater), (0, _defineProperty2["default"])(_actionHandler, _actions.ProviderActionTypes.POST_SAVE_LOAD_SUCCESS, providerStateUpdaters.postSaveLoadSuccessUpdater), (0, _defineProperty2["default"])(_actionHandler, _actions.ProviderActionTypes.LOAD_CLOUD_MAP, providerStateUpdaters.loadCloudMapUpdater), (0, _defineProperty2["default"])(_actionHandler, _actions.ProviderActionTypes.LOAD_CLOUD_MAP_SUCCESS, providerStateUpdaters.loadCloudMapSuccessUpdater), (0, _defineProperty2["default"])(_actionHandler, _actions.ProviderActionTypes.LOAD_CLOUD_MAP_ERROR, providerStateUpdaters.loadCloudMapErrorUpdater), (0, _defineProperty2["default"])(_actionHandler, _actions.ProviderActionTypes.GET_SAVED_MAPS, providerStateUpdaters.getSavedMapsUpdater), (0, _defineProperty2["default"])(_actionHandler, _actions.ProviderActionTypes.GET_SAVED_MAPS_SUCCESS, providerStateUpdaters.getSavedMapsSuccessUpdater), (0, _defineProperty2["default"])(_actionHandler, _actions.ProviderActionTypes.GET_SAVED_MAPS_ERROR, providerStateUpdaters.getSavedMapsErrorUpdater), _actionHandler); // construct provider-state reducer

var providerStateReducerFactory = function providerStateReducerFactory() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (// @ts-expect-error
    (0, _reduxActions.handleActions)(actionHandler, _objectSpread(_objectSpread(_objectSpread({}, providerStateUpdaters.INITIAL_PROVIDER_STATE), initialState), {}, {
      initialState: initialState
    }))
  );
};

exports.providerStateReducerFactory = providerStateReducerFactory;

var _default = providerStateReducerFactory();

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zcmMvcHJvdmlkZXItc3RhdGUudHMiXSwibmFtZXMiOlsiYWN0aW9uSGFuZGxlciIsIkFjdGlvblR5cGVzIiwiRVhQT1JUX0ZJTEVfVE9fQ0xPVUQiLCJwcm92aWRlclN0YXRlVXBkYXRlcnMiLCJleHBvcnRGaWxlVG9DbG91ZFVwZGF0ZXIiLCJFWFBPUlRfRklMRV9TVUNDRVNTIiwiZXhwb3J0RmlsZVN1Y2Nlc3NVcGRhdGVyIiwiRVhQT1JUX0ZJTEVfRVJST1IiLCJleHBvcnRGaWxlRXJyb3JVcGRhdGVyIiwiUkVTRVRfUFJPVklERVJfU1RBVFVTIiwicmVzZXRQcm92aWRlclN0YXR1c1VwZGF0ZXIiLCJTRVRfQ0xPVURfUFJPVklERVIiLCJzZXRDbG91ZFByb3ZpZGVyVXBkYXRlciIsIlBPU1RfU0FWRV9MT0FEX1NVQ0NFU1MiLCJwb3N0U2F2ZUxvYWRTdWNjZXNzVXBkYXRlciIsIkxPQURfQ0xPVURfTUFQIiwibG9hZENsb3VkTWFwVXBkYXRlciIsIkxPQURfQ0xPVURfTUFQX1NVQ0NFU1MiLCJsb2FkQ2xvdWRNYXBTdWNjZXNzVXBkYXRlciIsIkxPQURfQ0xPVURfTUFQX0VSUk9SIiwibG9hZENsb3VkTWFwRXJyb3JVcGRhdGVyIiwiR0VUX1NBVkVEX01BUFMiLCJnZXRTYXZlZE1hcHNVcGRhdGVyIiwiR0VUX1NBVkVEX01BUFNfU1VDQ0VTUyIsImdldFNhdmVkTWFwc1N1Y2Nlc3NVcGRhdGVyIiwiR0VUX1NBVkVEX01BUFNfRVJST1IiLCJnZXRTYXZlZE1hcHNFcnJvclVwZGF0ZXIiLCJwcm92aWRlclN0YXRlUmVkdWNlckZhY3RvcnkiLCJpbml0aWFsU3RhdGUiLCJJTklUSUFMX1BST1ZJREVSX1NUQVRFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsYUFBYSwwRUFDaEJDLDZCQUFZQyxvQkFESSxFQUNtQkMscUJBQXFCLENBQUNDLHdCQUR6QyxvREFFaEJILDZCQUFZSSxtQkFGSSxFQUVrQkYscUJBQXFCLENBQUNHLHdCQUZ4QyxvREFHaEJMLDZCQUFZTSxpQkFISSxFQUdnQkoscUJBQXFCLENBQUNLLHNCQUh0QyxvREFJaEJQLDZCQUFZUSxxQkFKSSxFQUlvQk4scUJBQXFCLENBQUNPLDBCQUoxQyxvREFLaEJULDZCQUFZVSxrQkFMSSxFQUtpQlIscUJBQXFCLENBQUNTLHVCQUx2QyxvREFNaEJYLDZCQUFZWSxzQkFOSSxFQU1xQlYscUJBQXFCLENBQUNXLDBCQU4zQyxvREFPaEJiLDZCQUFZYyxjQVBJLEVBT2FaLHFCQUFxQixDQUFDYSxtQkFQbkMsb0RBUWhCZiw2QkFBWWdCLHNCQVJJLEVBUXFCZCxxQkFBcUIsQ0FBQ2UsMEJBUjNDLG9EQVNoQmpCLDZCQUFZa0Isb0JBVEksRUFTbUJoQixxQkFBcUIsQ0FBQ2lCLHdCQVR6QyxvREFVaEJuQiw2QkFBWW9CLGNBVkksRUFVYWxCLHFCQUFxQixDQUFDbUIsbUJBVm5DLG9EQVdoQnJCLDZCQUFZc0Isc0JBWEksRUFXcUJwQixxQkFBcUIsQ0FBQ3FCLDBCQVgzQyxvREFZaEJ2Qiw2QkFBWXdCLG9CQVpJLEVBWW1CdEIscUJBQXFCLENBQUN1Qix3QkFaekMsa0JBQW5CLEMsQ0FlQTs7QUFDTyxJQUFNQywyQkFBMkIsR0FBRyxTQUE5QkEsMkJBQThCO0FBQUEsTUFBQ0MsWUFBRCx1RUFBZ0IsRUFBaEI7QUFBQSxTQUN6QztBQUNBLHFDQUFjNUIsYUFBZCxnREFDS0cscUJBQXFCLENBQUMwQixzQkFEM0IsR0FFS0QsWUFGTDtBQUdFQSxNQUFBQSxZQUFZLEVBQVpBO0FBSEY7QUFGeUM7QUFBQSxDQUFwQzs7OztlQVFRRCwyQkFBMkIsRSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7aGFuZGxlQWN0aW9uc30gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBwcm92aWRlclN0YXRlVXBkYXRlcnMgZnJvbSAnLi9wcm92aWRlci1zdGF0ZS11cGRhdGVycyc7XG5pbXBvcnQge1Byb3ZpZGVyQWN0aW9uVHlwZXMgYXMgQWN0aW9uVHlwZXN9IGZyb20gJ0BrZXBsZXIuZ2wvYWN0aW9ucyc7XG5cbi8qKlxuICogSW1wb3J0YW50OiBEbyBub3QgcmVuYW1lIGBhY3Rpb25IYW5kbGVyYCBvciB0aGUgYXNzaWdubWVudCBwYXR0ZXJuIG9mIHByb3BlcnR5IHZhbHVlLlxuICogSXQgaXMgdXNlZCB0byBnZW5lcmF0ZSBkb2N1bWVudGF0aW9uXG4gKi9cbmNvbnN0IGFjdGlvbkhhbmRsZXIgPSB7XG4gIFtBY3Rpb25UeXBlcy5FWFBPUlRfRklMRV9UT19DTE9VRF06IHByb3ZpZGVyU3RhdGVVcGRhdGVycy5leHBvcnRGaWxlVG9DbG91ZFVwZGF0ZXIsXG4gIFtBY3Rpb25UeXBlcy5FWFBPUlRfRklMRV9TVUNDRVNTXTogcHJvdmlkZXJTdGF0ZVVwZGF0ZXJzLmV4cG9ydEZpbGVTdWNjZXNzVXBkYXRlcixcbiAgW0FjdGlvblR5cGVzLkVYUE9SVF9GSUxFX0VSUk9SXTogcHJvdmlkZXJTdGF0ZVVwZGF0ZXJzLmV4cG9ydEZpbGVFcnJvclVwZGF0ZXIsXG4gIFtBY3Rpb25UeXBlcy5SRVNFVF9QUk9WSURFUl9TVEFUVVNdOiBwcm92aWRlclN0YXRlVXBkYXRlcnMucmVzZXRQcm92aWRlclN0YXR1c1VwZGF0ZXIsXG4gIFtBY3Rpb25UeXBlcy5TRVRfQ0xPVURfUFJPVklERVJdOiBwcm92aWRlclN0YXRlVXBkYXRlcnMuc2V0Q2xvdWRQcm92aWRlclVwZGF0ZXIsXG4gIFtBY3Rpb25UeXBlcy5QT1NUX1NBVkVfTE9BRF9TVUNDRVNTXTogcHJvdmlkZXJTdGF0ZVVwZGF0ZXJzLnBvc3RTYXZlTG9hZFN1Y2Nlc3NVcGRhdGVyLFxuICBbQWN0aW9uVHlwZXMuTE9BRF9DTE9VRF9NQVBdOiBwcm92aWRlclN0YXRlVXBkYXRlcnMubG9hZENsb3VkTWFwVXBkYXRlcixcbiAgW0FjdGlvblR5cGVzLkxPQURfQ0xPVURfTUFQX1NVQ0NFU1NdOiBwcm92aWRlclN0YXRlVXBkYXRlcnMubG9hZENsb3VkTWFwU3VjY2Vzc1VwZGF0ZXIsXG4gIFtBY3Rpb25UeXBlcy5MT0FEX0NMT1VEX01BUF9FUlJPUl06IHByb3ZpZGVyU3RhdGVVcGRhdGVycy5sb2FkQ2xvdWRNYXBFcnJvclVwZGF0ZXIsXG4gIFtBY3Rpb25UeXBlcy5HRVRfU0FWRURfTUFQU106IHByb3ZpZGVyU3RhdGVVcGRhdGVycy5nZXRTYXZlZE1hcHNVcGRhdGVyLFxuICBbQWN0aW9uVHlwZXMuR0VUX1NBVkVEX01BUFNfU1VDQ0VTU106IHByb3ZpZGVyU3RhdGVVcGRhdGVycy5nZXRTYXZlZE1hcHNTdWNjZXNzVXBkYXRlcixcbiAgW0FjdGlvblR5cGVzLkdFVF9TQVZFRF9NQVBTX0VSUk9SXTogcHJvdmlkZXJTdGF0ZVVwZGF0ZXJzLmdldFNhdmVkTWFwc0Vycm9yVXBkYXRlclxufTtcblxuLy8gY29uc3RydWN0IHByb3ZpZGVyLXN0YXRlIHJlZHVjZXJcbmV4cG9ydCBjb25zdCBwcm92aWRlclN0YXRlUmVkdWNlckZhY3RvcnkgPSAoaW5pdGlhbFN0YXRlID0ge30pID0+XG4gIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgaGFuZGxlQWN0aW9ucyhhY3Rpb25IYW5kbGVyLCB7XG4gICAgLi4ucHJvdmlkZXJTdGF0ZVVwZGF0ZXJzLklOSVRJQUxfUFJPVklERVJfU1RBVEUsXG4gICAgLi4uaW5pdGlhbFN0YXRlLFxuICAgIGluaXRpYWxTdGF0ZVxuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvdmlkZXJTdGF0ZVJlZHVjZXJGYWN0b3J5KCk7XG4iXX0=