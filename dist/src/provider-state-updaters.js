"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSavedMapsErrorUpdater = exports.getSavedMapsSuccessUpdater = exports.getSavedMapsUpdater = exports.setCloudProviderUpdater = exports.resetProviderStatusUpdater = exports.loadCloudMapErrorUpdater = exports.loadCloudMapSuccessUpdater = exports.loadCloudMapUpdater = exports.exportFileErrorUpdater = exports.postSaveLoadSuccessUpdater = exports.exportFileSuccessUpdater = exports.exportFileToCloudUpdater = exports.INITIAL_PROVIDER_STATE = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _tasks = require("react-palm/tasks");

var _console = _interopRequireDefault(require("global/console"));

var _utils = require("@kepler.gl/utils");

var _tasks2 = require("@kepler.gl/tasks");

var _actions = require("@kepler.gl/actions");

var _constants = require("@kepler.gl/constants");

var _cloudProviders = require("@kepler.gl/cloud-providers");

var _processors = require("@kepler.gl/processors");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var INITIAL_PROVIDER_STATE = {
  isProviderLoading: false,
  isCloudMapLoading: false,
  providerError: null,
  currentProvider: null,
  successInfo: {},
  mapSaved: null,
  visualizations: []
};
exports.INITIAL_PROVIDER_STATE = INITIAL_PROVIDER_STATE;

function createActionTask(action, payload) {
  if (typeof action === 'function') {
    return (0, _tasks2.ACTION_TASK)().map(function (_) {
      return action(payload);
    });
  }

  return null;
}

function _validateProvider(provider, method) {
  if (!provider) {
    _console["default"].error("provider is not defined");

    return false;
  }

  if (typeof provider[method] !== 'function') {
    _console["default"].error("".concat(method, " is not a function of Cloud provider: ").concat(provider.name));

    return false;
  }

  return true;
}

function createGlobalNotificationTasks(_ref) {
  var type = _ref.type,
      message = _ref.message,
      _ref$delayClose = _ref.delayClose,
      delayClose = _ref$delayClose === void 0 ? true : _ref$delayClose;
  var id = (0, _utils.generateHashId)();
  var successNote = {
    id: id,
    type: _constants.DEFAULT_NOTIFICATION_TYPES[type || ''] || _constants.DEFAULT_NOTIFICATION_TYPES.success,
    topic: _constants.DEFAULT_NOTIFICATION_TOPICS.global,
    message: message
  };
  var task = (0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _actions.addNotification)(successNote);
  });
  return delayClose ? [task, (0, _tasks2.DELAY_TASK)(3000).map(function (_) {
    return (0, _actions.removeNotification)(id);
  })] : [task];
}
/**
 * This method will export the current kepler config file to the chosen cloud proder
 * add returns a share URL
 *
 */


var exportFileToCloudUpdater = function exportFileToCloudUpdater(state, action) {
  var _action$payload = action.payload,
      mapData = _action$payload.mapData,
      provider = _action$payload.provider,
      _action$payload$optio = _action$payload.options,
      options = _action$payload$optio === void 0 ? {} : _action$payload$optio,
      onSuccess = _action$payload.onSuccess,
      onError = _action$payload.onError,
      closeModal = _action$payload.closeModal;

  if (!_validateProvider(provider, 'uploadMap')) {
    return state;
  }

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: true,
    currentProvider: provider.name
  }); // payload called by provider.uploadMap


  var payload = {
    mapData: mapData,
    options: options
  };
  var uploadFileTask = (0, _tasks2.EXPORT_FILE_TO_CLOUD_TASK)({
    provider: provider,
    payload: payload
  }).bimap( // success
  function (response) {
    return (0, _actions.exportFileSuccess)({
      response: response,
      provider: provider,
      options: options,
      onSuccess: onSuccess,
      closeModal: closeModal
    });
  }, // error
  function (error) {
    return (0, _actions.exportFileError)({
      error: error,
      provider: provider,
      options: options,
      onError: onError
    });
  });
  return (0, _tasks.withTask)(newState, uploadFileTask);
};

exports.exportFileToCloudUpdater = exportFileToCloudUpdater;

var exportFileSuccessUpdater = function exportFileSuccessUpdater(state, action) {
  var _action$payload2 = action.payload,
      response = _action$payload2.response,
      provider = _action$payload2.provider,
      _action$payload2$opti = _action$payload2.options,
      options = _action$payload2$opti === void 0 ? {} : _action$payload2$opti,
      onSuccess = _action$payload2.onSuccess,
      closeModal = _action$payload2.closeModal;

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: false,
    // TODO: do we always have to store this?
    successInfo: response
  }, !options.isPublic ? {
    mapSaved: provider.name
  } : {});

  var tasks = [createActionTask(onSuccess, {
    response: response,
    provider: provider,
    options: options
  }), closeModal && (0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _actions.postSaveLoadSuccess)("Map saved to ".concat(state.currentProvider, "!"));
  })].filter(function (d) {
    return d;
  });
  return tasks.length ? (0, _tasks.withTask)(newState, tasks) : newState;
};
/**
 * Close modal on success and display notification
 */


exports.exportFileSuccessUpdater = exportFileSuccessUpdater;

var postSaveLoadSuccessUpdater = function postSaveLoadSuccessUpdater(state, action) {
  var message = action.payload || "Saved / Load to ".concat(state.currentProvider, " Success");
  var tasks = [(0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _actions.toggleModal)(null);
  }), (0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _actions.resetProviderStatus)();
  })].concat((0, _toConsumableArray2["default"])(createGlobalNotificationTasks({
    message: message
  })));
  return (0, _tasks.withTask)(state, tasks);
};

exports.postSaveLoadSuccessUpdater = postSaveLoadSuccessUpdater;

var exportFileErrorUpdater = function exportFileErrorUpdater(state, action) {
  var _action$payload3 = action.payload,
      error = _action$payload3.error,
      provider = _action$payload3.provider,
      onError = _action$payload3.onError;

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: false
  });

  if (isFileConflict(error)) {
    newState.mapSaved = provider.name;
    return (0, _tasks.withTask)(newState, [(0, _tasks2.ACTION_TASK)().map(function (_) {
      return (0, _actions.toggleModal)(_constants.OVERWRITE_MAP_ID);
    })]);
  }

  newState.providerError = (0, _utils.getError)(error);
  var task = createActionTask(onError, {
    error: error,
    provider: provider
  });
  return task ? (0, _tasks.withTask)(newState, task) : newState;
};

exports.exportFileErrorUpdater = exportFileErrorUpdater;

var loadCloudMapUpdater = function loadCloudMapUpdater(state, action) {
  var _action$payload4 = action.payload,
      loadParams = _action$payload4.loadParams,
      provider = _action$payload4.provider,
      onSuccess = _action$payload4.onSuccess,
      onError = _action$payload4.onError;

  if (!loadParams) {
    _console["default"].warn('load map error: loadParams is undefined');

    return state;
  }

  if (!_validateProvider(provider, 'downloadMap')) {
    return state;
  }

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: true,
    isCloudMapLoading: true
  }); // payload called by provider.downloadMap


  var uploadFileTask = (0, _tasks2.LOAD_CLOUD_MAP_TASK)({
    provider: provider,
    payload: loadParams
  }).bimap( // success
  // @ts-expect-error
  function (response) {
    return (0, _actions.loadCloudMapSuccess)({
      response: response,
      loadParams: loadParams,
      provider: provider,
      onSuccess: onSuccess,
      onError: onError
    });
  }, // error
  // @ts-expect-error
  function (error) {
    return (0, _actions.loadCloudMapError)({
      error: error,
      provider: provider,
      onError: onError
    });
  });
  return (0, _tasks.withTask)(newState, uploadFileTask);
};

exports.loadCloudMapUpdater = loadCloudMapUpdater;

function isFileConflict(error) {
  return error && error.message === _cloudProviders.FILE_CONFLICT_MSG;
}

function checkLoadMapResponseError(response) {
  if (!response || !(0, _utils.isPlainObject)(response)) {
    return new Error('Load map response is empty');
  }

  if (!(0, _utils.isPlainObject)(response.map)) {
    return new Error("Load map response should be an object property \"map\"");
  }

  if (!response.map.datasets || !response.map.config) {
    return new Error("Load map response.map should be an object with property datasets or config");
  }

  return null;
}

function getDatasetHandler(format) {
  var defaultHandler = _processors.DATASET_HANDLERS[_constants.DATASET_FORMATS.csv];

  if (!format) {
    _console["default"].warn('format is not provided in load map response, will use csv by default');

    return defaultHandler;
  }

  if (!_processors.DATASET_HANDLERS[format]) {
    var supportedFormat = Object.keys(_constants.DATASET_FORMATS).map(function (k) {
      return "'".concat(k, "'");
    }).join(', ');

    _console["default"].warn("unknown format ".concat(format, ". Please use one of ").concat(supportedFormat, ", will use csv by default"));

    return defaultHandler;
  }

  return _processors.DATASET_HANDLERS[format];
}

function parseLoadMapResponse(response, loadParams, provider) {
  var map = response.map,
      format = response.format;
  var processorMethod = getDatasetHandler(format);
  var parsedDatasets = (0, _utils.toArray)(map.datasets).map(function (ds, i) {
    if (format === _constants.DATASET_FORMATS.keplergl) {
      // no need to obtain id, directly pass them in
      return processorMethod(ds);
    }

    var info = ds && ds.info || {
      id: (0, _utils.generateHashId)(6)
    };
    var data = processorMethod(ds.data || ds);
    return {
      info: info,
      data: data
    };
  });

  var info = _objectSpread(_objectSpread({}, map.info), {}, {
    provider: provider.name,
    loadParams: loadParams
  });

  return _objectSpread({
    datasets: parsedDatasets,
    info: info
  }, map.config ? {
    config: map.config
  } : {});
}

var loadCloudMapSuccessUpdater = function loadCloudMapSuccessUpdater(state, action) {
  var _action$payload5 = action.payload,
      response = _action$payload5.response,
      loadParams = _action$payload5.loadParams,
      provider = _action$payload5.provider,
      onSuccess = _action$payload5.onSuccess,
      onError = _action$payload5.onError;
  var formatError = checkLoadMapResponseError(response);

  if (formatError) {
    // if response format is not correct
    return exportFileErrorUpdater(state, {
      payload: {
        error: formatError,
        provider: provider,
        onError: onError
      }
    });
  }

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    mapSaved: provider.name,
    currentProvider: provider.name,
    isCloudMapLoading: false,
    isProviderLoading: false
  });

  var payload = parseLoadMapResponse(response, loadParams, provider);
  var tasks = [(0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _actions.addDataToMap)(payload);
  }), createActionTask(onSuccess, {
    response: response,
    loadParams: loadParams,
    provider: provider
  }), (0, _tasks2.ACTION_TASK)().map(function (_) {
    return (0, _actions.postSaveLoadSuccess)("Map from ".concat(provider.name, " loaded"));
  })].filter(function (d) {
    return d;
  });
  return tasks.length ? (0, _tasks.withTask)(newState, tasks) : newState;
};

exports.loadCloudMapSuccessUpdater = loadCloudMapSuccessUpdater;

var loadCloudMapErrorUpdater = function loadCloudMapErrorUpdater(state, action) {
  var message = (0, _utils.getError)(action.payload.error) || "Error loading saved map";

  _console["default"].warn(message);

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: false,
    isCloudMapLoading: false,
    providerError: null
  });

  return (0, _tasks.withTask)(newState, createGlobalNotificationTasks({
    type: 'error',
    message: message,
    delayClose: false
  }));
};

exports.loadCloudMapErrorUpdater = loadCloudMapErrorUpdater;

var resetProviderStatusUpdater = function resetProviderStatusUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: false,
    providerError: null,
    isCloudMapLoading: false,
    successInfo: {}
  });
};
/**
 * Set current cloudProvider
 */


exports.resetProviderStatusUpdater = resetProviderStatusUpdater;

var setCloudProviderUpdater = function setCloudProviderUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: false,
    providerError: null,
    successInfo: {},
    currentProvider: action.payload
  });
};

exports.setCloudProviderUpdater = setCloudProviderUpdater;

var getSavedMapsUpdater = function getSavedMapsUpdater(state, action) {
  var provider = action.payload;

  if (!_validateProvider(provider, 'listMaps')) {
    return state;
  }

  var getSavedMapsTask = (0, _tasks2.GET_SAVED_MAPS_TASK)(provider).bimap( // success
  function (visualizations) {
    return (0, _actions.getSavedMapsSuccess)({
      visualizations: visualizations,
      provider: provider
    });
  }, // error
  function (error) {
    return (0, _actions.getSavedMapsError)({
      error: error,
      provider: provider
    });
  });
  return (0, _tasks.withTask)(_objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: true
  }), getSavedMapsTask);
};

exports.getSavedMapsUpdater = getSavedMapsUpdater;

var getSavedMapsSuccessUpdater = function getSavedMapsSuccessUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), {}, {
    isProviderLoading: false,
    visualizations: action.payload.visualizations
  });
};

exports.getSavedMapsSuccessUpdater = getSavedMapsSuccessUpdater;

var getSavedMapsErrorUpdater = function getSavedMapsErrorUpdater(state, action) {
  var message = (0, _utils.getError)(action.payload.error) || "Error getting saved maps from ".concat(state.currentProvider);

  _console["default"].warn(action.payload.error);

  var newState = _objectSpread(_objectSpread({}, state), {}, {
    currentProvider: null,
    isProviderLoading: false
  });

  return (0, _tasks.withTask)(newState, createGlobalNotificationTasks({
    type: 'error',
    message: message,
    delayClose: false
  }));
};

exports.getSavedMapsErrorUpdater = getSavedMapsErrorUpdater;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zcmMvcHJvdmlkZXItc3RhdGUtdXBkYXRlcnMudHMiXSwibmFtZXMiOlsiSU5JVElBTF9QUk9WSURFUl9TVEFURSIsImlzUHJvdmlkZXJMb2FkaW5nIiwiaXNDbG91ZE1hcExvYWRpbmciLCJwcm92aWRlckVycm9yIiwiY3VycmVudFByb3ZpZGVyIiwic3VjY2Vzc0luZm8iLCJtYXBTYXZlZCIsInZpc3VhbGl6YXRpb25zIiwiY3JlYXRlQWN0aW9uVGFzayIsImFjdGlvbiIsInBheWxvYWQiLCJtYXAiLCJfIiwiX3ZhbGlkYXRlUHJvdmlkZXIiLCJwcm92aWRlciIsIm1ldGhvZCIsIkNvbnNvbGUiLCJlcnJvciIsIm5hbWUiLCJjcmVhdGVHbG9iYWxOb3RpZmljYXRpb25UYXNrcyIsInR5cGUiLCJtZXNzYWdlIiwiZGVsYXlDbG9zZSIsImlkIiwic3VjY2Vzc05vdGUiLCJERUZBVUxUX05PVElGSUNBVElPTl9UWVBFUyIsInN1Y2Nlc3MiLCJ0b3BpYyIsIkRFRkFVTFRfTk9USUZJQ0FUSU9OX1RPUElDUyIsImdsb2JhbCIsInRhc2siLCJleHBvcnRGaWxlVG9DbG91ZFVwZGF0ZXIiLCJzdGF0ZSIsIm1hcERhdGEiLCJvcHRpb25zIiwib25TdWNjZXNzIiwib25FcnJvciIsImNsb3NlTW9kYWwiLCJuZXdTdGF0ZSIsInVwbG9hZEZpbGVUYXNrIiwiYmltYXAiLCJyZXNwb25zZSIsImV4cG9ydEZpbGVTdWNjZXNzVXBkYXRlciIsImlzUHVibGljIiwidGFza3MiLCJmaWx0ZXIiLCJkIiwibGVuZ3RoIiwicG9zdFNhdmVMb2FkU3VjY2Vzc1VwZGF0ZXIiLCJleHBvcnRGaWxlRXJyb3JVcGRhdGVyIiwiaXNGaWxlQ29uZmxpY3QiLCJPVkVSV1JJVEVfTUFQX0lEIiwibG9hZENsb3VkTWFwVXBkYXRlciIsImxvYWRQYXJhbXMiLCJ3YXJuIiwiRklMRV9DT05GTElDVF9NU0ciLCJjaGVja0xvYWRNYXBSZXNwb25zZUVycm9yIiwiRXJyb3IiLCJkYXRhc2V0cyIsImNvbmZpZyIsImdldERhdGFzZXRIYW5kbGVyIiwiZm9ybWF0IiwiZGVmYXVsdEhhbmRsZXIiLCJEQVRBU0VUX0hBTkRMRVJTIiwiREFUQVNFVF9GT1JNQVRTIiwiY3N2Iiwic3VwcG9ydGVkRm9ybWF0IiwiT2JqZWN0Iiwia2V5cyIsImsiLCJqb2luIiwicGFyc2VMb2FkTWFwUmVzcG9uc2UiLCJwcm9jZXNzb3JNZXRob2QiLCJwYXJzZWREYXRhc2V0cyIsImRzIiwiaSIsImtlcGxlcmdsIiwiaW5mbyIsImRhdGEiLCJsb2FkQ2xvdWRNYXBTdWNjZXNzVXBkYXRlciIsImZvcm1hdEVycm9yIiwibG9hZENsb3VkTWFwRXJyb3JVcGRhdGVyIiwicmVzZXRQcm92aWRlclN0YXR1c1VwZGF0ZXIiLCJzZXRDbG91ZFByb3ZpZGVyVXBkYXRlciIsImdldFNhdmVkTWFwc1VwZGF0ZXIiLCJnZXRTYXZlZE1hcHNUYXNrIiwiZ2V0U2F2ZWRNYXBzU3VjY2Vzc1VwZGF0ZXIiLCJnZXRTYXZlZE1hcHNFcnJvclVwZGF0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBT0E7O0FBZUE7O0FBUUE7O0FBQ0E7Ozs7OztBQWtCTyxJQUFNQSxzQkFBcUMsR0FBRztBQUNuREMsRUFBQUEsaUJBQWlCLEVBQUUsS0FEZ0M7QUFFbkRDLEVBQUFBLGlCQUFpQixFQUFFLEtBRmdDO0FBR25EQyxFQUFBQSxhQUFhLEVBQUUsSUFIb0M7QUFJbkRDLEVBQUFBLGVBQWUsRUFBRSxJQUprQztBQUtuREMsRUFBQUEsV0FBVyxFQUFFLEVBTHNDO0FBTW5EQyxFQUFBQSxRQUFRLEVBQUUsSUFOeUM7QUFPbkRDLEVBQUFBLGNBQWMsRUFBRTtBQVBtQyxDQUE5Qzs7O0FBVVAsU0FBU0MsZ0JBQVQsQ0FBMEJDLE1BQTFCLEVBQWtDQyxPQUFsQyxFQUEyQztBQUN6QyxNQUFJLE9BQU9ELE1BQVAsS0FBa0IsVUFBdEIsRUFBa0M7QUFDaEMsV0FBTywyQkFBY0Us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QixHQUFHLFNBQTNCQSx3QkFBMkIsQ0FDdEN2RCxLQURzQyxFQUV0Q3ZCLE1BRnNDLEVBR3BCO0FBQ2xCLE1BQU1ZLE9BQU8sR0FDWCxxQkFBU1osTUFBTSxDQUFDQyxPQUFQLENBQWVPLEtBQXhCLDZDQUFtRWUsS0FBSyxDQUFDNUIsZUFBekUsQ0FERjs7QUFHQVksc0JBQVFzQyxJQUFSLENBQWE3QyxNQUFNLENBQUNDLE9BQVAsQ0FBZU8sS0FBNUI7O0FBRUEsTUFBTXFCLFFBQVEsbUNBQ1ROLEtBRFM7QUFFWjVCLElBQUFBLGVBQWUsRUFBRSxJQUZMO0FBR1pILElBQUFBLGlCQUFpQixFQUFFO0FBSFAsSUFBZDs7QUFNQSxTQUFPLHFCQUNMcUMsUUFESyxFQUVMbkIsNkJBQTZCLENBQUM7QUFBQ0MsSUFBQUEsSUFBSSxFQUFFLE9BQVA7QUFBZ0JDLElBQUFBLE9BQU8sRUFBUEEsT0FBaEI7QUFBeUJDLElBQUFBLFVBQVUsRUFBRTtBQUFyQyxHQUFELENBRnhCLENBQVA7QUFJRCxDQW5CTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7d2l0aFRhc2t9IGZyb20gJ3JlYWN0LXBhbG0vdGFza3MnO1xuaW1wb3J0IENvbnNvbGUgZnJvbSAnZ2xvYmFsL2NvbnNvbGUnO1xuaW1wb3J0IHtnZW5lcmF0ZUhhc2hJZCwgZ2V0RXJyb3IsIGlzUGxhaW5PYmplY3QsIHRvQXJyYXl9IGZyb20gJ0BrZXBsZXIuZ2wvdXRpbHMnO1xuaW1wb3J0IHtcbiAgRVhQT1JUX0ZJTEVfVE9fQ0xPVURfVEFTSyxcbiAgQUNUSU9OX1RBU0ssXG4gIERFTEFZX1RBU0ssXG4gIExPQURfQ0xPVURfTUFQX1RBU0ssXG4gIEdFVF9TQVZFRF9NQVBTX1RBU0tcbn0gZnJvbSAnQGtlcGxlci5nbC90YXNrcyc7XG5pbXBvcnQge1xuICBleHBvcnRGaWxlU3VjY2VzcyxcbiAgZXhwb3J0RmlsZUVycm9yLFxuICBwb3N0U2F2ZUxvYWRTdWNjZXNzLFxuICBsb2FkQ2xvdWRNYXBTdWNjZXNzLFxuICBnZXRTYXZlZE1hcHNTdWNjZXNzLFxuICBnZXRTYXZlZE1hcHNFcnJvcixcbiAgbG9hZENsb3VkTWFwRXJyb3IsXG4gIHJlc2V0UHJvdmlkZXJTdGF0dXMsXG4gIHJlbW92ZU5vdGlmaWNhdGlvbixcbiAgdG9nZ2xlTW9kYWwsXG4gIGFkZE5vdGlmaWNhdGlvbixcbiAgYWRkRGF0YVRvTWFwLFxuICBQcm92aWRlckFjdGlvbnNcbn0gZnJvbSAnQGtlcGxlci5nbC9hY3Rpb25zJztcbmltcG9ydCB7XG4gIERFRkFVTFRfTk9USUZJQ0FUSU9OX1RZUEVTLFxuICBERUZBVUxUX05PVElGSUNBVElPTl9UT1BJQ1MsXG4gIERBVEFTRVRfRk9STUFUUyxcbiAgT1ZFUldSSVRFX01BUF9JRFxufSBmcm9tICdAa2VwbGVyLmdsL2NvbnN0YW50cyc7XG5pbXBvcnQge0V4cG9ydEZpbGVUb0Nsb3VkUGF5bG9hZH0gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5cbmltcG9ydCB7RklMRV9DT05GTElDVF9NU0csIE1hcExpc3RJdGVtfSBmcm9tICdAa2VwbGVyLmdsL2Nsb3VkLXByb3ZpZGVycyc7XG5pbXBvcnQge0RBVEFTRVRfSEFORExFUlN9IGZyb20gJ0BrZXBsZXIuZ2wvcHJvY2Vzc29ycyc7XG5cbnR5cGUgQWN0aW9uUGF5bG9hZDxQPiA9IHtcbiAgdHlwZT86IHN0cmluZztcbiAgcGF5bG9hZDogUDtcbn07XG5cbmV4cG9ydCB0eXBlIFByb3ZpZGVyU3RhdGUgPSB7XG4gIGlzUHJvdmlkZXJMb2FkaW5nOiBib29sZWFuO1xuICBpc0Nsb3VkTWFwTG9hZGluZzogYm9vbGVhbjtcbiAgcHJvdmlkZXJFcnJvcjogYW55O1xuICBjdXJyZW50UHJvdmlkZXI6IHN0cmluZyB8IG51bGw7XG4gIHN1Y2Nlc3NJbmZvOiBhbnk7XG4gIG1hcFNhdmVkOiBudWxsIHwgc3RyaW5nO1xuICBpbml0aWFsU3RhdGU/OiBhbnk7XG4gIHZpc3VhbGl6YXRpb25zOiBNYXBMaXN0SXRlbVtdO1xufTtcblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfUFJPVklERVJfU1RBVEU6IFByb3ZpZGVyU3RhdGUgPSB7XG4gIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZSxcbiAgaXNDbG91ZE1hcExvYWRpbmc6IGZhbHNlLFxuICBwcm92aWRlckVycm9yOiBudWxsLFxuICBjdXJyZW50UHJvdmlkZXI6IG51bGwsXG4gIHN1Y2Nlc3NJbmZvOiB7fSxcbiAgbWFwU2F2ZWQ6IG51bGwsXG4gIHZpc3VhbGl6YXRpb25zOiBbXVxufTtcblxuZnVuY3Rpb24gY3JlYXRlQWN0aW9uVGFzayhhY3Rpb24sIHBheWxvYWQpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gQUNUSU9OX1RBU0soKS5tYXAoXyA9PiBhY3Rpb24ocGF5bG9hZCkpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIF92YWxpZGF0ZVByb3ZpZGVyKHByb3ZpZGVyLCBtZXRob2QpIHtcbiAgaWYgKCFwcm92aWRlcikge1xuICAgIENvbnNvbGUuZXJyb3IoYHByb3ZpZGVyIGlzIG5vdCBkZWZpbmVkYCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwcm92aWRlclttZXRob2RdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgQ29uc29sZS5lcnJvcihgJHttZXRob2R9IGlzIG5vdCBhIGZ1bmN0aW9uIG9mIENsb3VkIHByb3ZpZGVyOiAke3Byb3ZpZGVyLm5hbWV9YCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdsb2JhbE5vdGlmaWNhdGlvblRhc2tzKHtcbiAgdHlwZSxcbiAgbWVzc2FnZSxcbiAgZGVsYXlDbG9zZSA9IHRydWVcbn06IHtcbiAgdHlwZT86IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBkZWxheUNsb3NlPzogYm9vbGVhbjtcbn0pIHtcbiAgY29uc3QgaWQgPSBnZW5lcmF0ZUhhc2hJZCgpO1xuICBjb25zdCBzdWNjZXNzTm90ZSA9IHtcbiAgICBpZCxcbiAgICB0eXBlOiBERUZBVUxUX05PVElGSUNBVElPTl9UWVBFU1t0eXBlIHx8ICcnXSB8fCBERUZBVUxUX05PVElGSUNBVElPTl9UWVBFUy5zdWNjZXNzLFxuICAgIHRvcGljOiBERUZBVUxUX05PVElGSUNBVElPTl9UT1BJQ1MuZ2xvYmFsLFxuICAgIG1lc3NhZ2VcbiAgfTtcbiAgY29uc3QgdGFzayA9IEFDVElPTl9UQVNLKCkubWFwKF8gPT4gYWRkTm90aWZpY2F0aW9uKHN1Y2Nlc3NOb3RlKSk7XG4gIHJldHVybiBkZWxheUNsb3NlID8gW3Rhc2ssIERFTEFZX1RBU0soMzAwMCkubWFwKF8gPT4gcmVtb3ZlTm90aWZpY2F0aW9uKGlkKSldIDogW3Rhc2tdO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHdpbGwgZXhwb3J0IHRoZSBjdXJyZW50IGtlcGxlciBjb25maWcgZmlsZSB0byB0aGUgY2hvc2VuIGNsb3VkIHByb2RlclxuICogYWRkIHJldHVybnMgYSBzaGFyZSBVUkxcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBleHBvcnRGaWxlVG9DbG91ZFVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBQcm92aWRlclN0YXRlLFxuICBhY3Rpb246IEFjdGlvblBheWxvYWQ8RXhwb3J0RmlsZVRvQ2xvdWRQYXlsb2FkPlxuKTogUHJvdmlkZXJTdGF0ZSA9PiB7XG4gIGNvbnN0IHttYXBEYXRhLCBwcm92aWRlciwgb3B0aW9ucyA9IHt9LCBvblN1Y2Nlc3MsIG9uRXJyb3IsIGNsb3NlTW9kYWx9ID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgaWYgKCFfdmFsaWRhdGVQcm92aWRlcihwcm92aWRlciwgJ3VwbG9hZE1hcCcpKSB7XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgaXNQcm92aWRlckxvYWRpbmc6IHRydWUsXG4gICAgY3VycmVudFByb3ZpZGVyOiBwcm92aWRlci5uYW1lXG4gIH07XG5cbiAgLy8gcGF5bG9hZCBjYWxsZWQgYnkgcHJvdmlkZXIudXBsb2FkTWFwXG4gIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgbWFwRGF0YSxcbiAgICBvcHRpb25zXG4gIH07XG4gIGNvbnN0IHVwbG9hZEZpbGVUYXNrID0gRVhQT1JUX0ZJTEVfVE9fQ0xPVURfVEFTSyh7cHJvdmlkZXIsIHBheWxvYWR9KS5iaW1hcChcbiAgICAvLyBzdWNjZXNzXG4gICAgcmVzcG9uc2UgPT4gZXhwb3J0RmlsZVN1Y2Nlc3Moe3Jlc3BvbnNlLCBwcm92aWRlciwgb3B0aW9ucywgb25TdWNjZXNzLCBjbG9zZU1vZGFsfSksXG4gICAgLy8gZXJyb3JcbiAgICBlcnJvciA9PiBleHBvcnRGaWxlRXJyb3Ioe2Vycm9yLCBwcm92aWRlciwgb3B0aW9ucywgb25FcnJvcn0pXG4gICk7XG5cbiAgcmV0dXJuIHdpdGhUYXNrKG5ld1N0YXRlLCB1cGxvYWRGaWxlVGFzayk7XG59O1xuXG5leHBvcnQgY29uc3QgZXhwb3J0RmlsZVN1Y2Nlc3NVcGRhdGVyID0gKFxuICBzdGF0ZTogUHJvdmlkZXJTdGF0ZSxcbiAgYWN0aW9uOiBBY3Rpb25QYXlsb2FkPFByb3ZpZGVyQWN0aW9ucy5FeHBvcnRGaWxlU3VjY2Vzc1BheWxvYWQ+XG4pOiBQcm92aWRlclN0YXRlID0+IHtcbiAgY29uc3Qge3Jlc3BvbnNlLCBwcm92aWRlciwgb3B0aW9ucyA9IHt9LCBvblN1Y2Nlc3MsIGNsb3NlTW9kYWx9ID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgaXNQcm92aWRlckxvYWRpbmc6IGZhbHNlLFxuICAgIC8vIFRPRE86IGRvIHdlIGFsd2F5cyBoYXZlIHRvIHN0b3JlIHRoaXM/XG4gICAgc3VjY2Vzc0luZm86IHJlc3BvbnNlLFxuICAgIC4uLighb3B0aW9ucy5pc1B1YmxpY1xuICAgICAgPyB7XG4gICAgICAgICAgbWFwU2F2ZWQ6IHByb3ZpZGVyLm5hbWVcbiAgICAgICAgfVxuICAgICAgOiB7fSlcbiAgfTtcblxuICBjb25zdCB0YXNrcyA9IFtcbiAgICBjcmVhdGVBY3Rpb25UYXNrKG9uU3VjY2Vzcywge3Jlc3BvbnNlLCBwcm92aWRlciwgb3B0aW9uc30pLFxuICAgIGNsb3NlTW9kYWwgJiZcbiAgICAgIEFDVElPTl9UQVNLKCkubWFwKF8gPT4gcG9zdFNhdmVMb2FkU3VjY2VzcyhgTWFwIHNhdmVkIHRvICR7c3RhdGUuY3VycmVudFByb3ZpZGVyfSFgKSlcbiAgXS5maWx0ZXIoZCA9PiBkKTtcblxuICByZXR1cm4gdGFza3MubGVuZ3RoID8gd2l0aFRhc2sobmV3U3RhdGUsIHRhc2tzKSA6IG5ld1N0YXRlO1xufTtcblxuLyoqXG4gKiBDbG9zZSBtb2RhbCBvbiBzdWNjZXNzIGFuZCBkaXNwbGF5IG5vdGlmaWNhdGlvblxuICovXG5leHBvcnQgY29uc3QgcG9zdFNhdmVMb2FkU3VjY2Vzc1VwZGF0ZXIgPSAoXG4gIHN0YXRlOiBQcm92aWRlclN0YXRlLFxuICBhY3Rpb246IEFjdGlvblBheWxvYWQ8UHJvdmlkZXJBY3Rpb25zLlBvc3RTYXZlTG9hZFN1Y2Nlc3NQYXlsb2FkPlxuKTogUHJvdmlkZXJTdGF0ZSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBhY3Rpb24ucGF5bG9hZCB8fCBgU2F2ZWQgLyBMb2FkIHRvICR7c3RhdGUuY3VycmVudFByb3ZpZGVyfSBTdWNjZXNzYDtcblxuICBjb25zdCB0YXNrcyA9IFtcbiAgICBBQ1RJT05fVEFTSygpLm1hcChfID0+IHRvZ2dsZU1vZGFsKG51bGwpKSxcbiAgICBBQ1RJT05fVEFTSygpLm1hcChfID0+IHJlc2V0UHJvdmlkZXJTdGF0dXMoKSksXG4gICAgLi4uY3JlYXRlR2xvYmFsTm90aWZpY2F0aW9uVGFza3Moe21lc3NhZ2V9KVxuICBdO1xuXG4gIHJldHVybiB3aXRoVGFzayhzdGF0ZSwgdGFza3MpO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4cG9ydEZpbGVFcnJvclVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBQcm92aWRlclN0YXRlLFxuICBhY3Rpb246IEFjdGlvblBheWxvYWQ8UHJvdmlkZXJBY3Rpb25zLkV4cG9ydEZpbGVFcnJvclBheWxvYWQ+XG4pOiBQcm92aWRlclN0YXRlID0+IHtcbiAgY29uc3Qge2Vycm9yLCBwcm92aWRlciwgb25FcnJvcn0gPSBhY3Rpb24ucGF5bG9hZDtcblxuICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAuLi5zdGF0ZSxcbiAgICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2VcbiAgfTtcblxuICBpZiAoaXNGaWxlQ29uZmxpY3QoZXJyb3IpKSB7XG4gICAgbmV3U3RhdGUubWFwU2F2ZWQgPSBwcm92aWRlci5uYW1lO1xuICAgIHJldHVybiB3aXRoVGFzayhuZXdTdGF0ZSwgW0FDVElPTl9UQVNLKCkubWFwKF8gPT4gdG9nZ2xlTW9kYWwoT1ZFUldSSVRFX01BUF9JRCkpXSk7XG4gIH1cblxuICBuZXdTdGF0ZS5wcm92aWRlckVycm9yID0gZ2V0RXJyb3IoZXJyb3IpO1xuICBjb25zdCB0YXNrID0gY3JlYXRlQWN0aW9uVGFzayhvbkVycm9yLCB7ZXJyb3IsIHByb3ZpZGVyfSk7XG5cbiAgcmV0dXJuIHRhc2sgPyB3aXRoVGFzayhuZXdTdGF0ZSwgdGFzaykgOiBuZXdTdGF0ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkQ2xvdWRNYXBVcGRhdGVyID0gKFxuICBzdGF0ZTogUHJvdmlkZXJTdGF0ZSxcbiAgYWN0aW9uOiBBY3Rpb25QYXlsb2FkPFByb3ZpZGVyQWN0aW9ucy5Mb2FkQ2xvdWRNYXBQYXlsb2FkPlxuKTogUHJvdmlkZXJTdGF0ZSA9PiB7XG4gIGNvbnN0IHtsb2FkUGFyYW1zLCBwcm92aWRlciwgb25TdWNjZXNzLCBvbkVycm9yfSA9IGFjdGlvbi5wYXlsb2FkO1xuICBpZiAoIWxvYWRQYXJhbXMpIHtcbiAgICBDb25zb2xlLndhcm4oJ2xvYWQgbWFwIGVycm9yOiBsb2FkUGFyYW1zIGlzIHVuZGVmaW5lZCcpO1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuICBpZiAoIV92YWxpZGF0ZVByb3ZpZGVyKHByb3ZpZGVyLCAnZG93bmxvYWRNYXAnKSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGlzUHJvdmlkZXJMb2FkaW5nOiB0cnVlLFxuICAgIGlzQ2xvdWRNYXBMb2FkaW5nOiB0cnVlXG4gIH07XG5cbiAgLy8gcGF5bG9hZCBjYWxsZWQgYnkgcHJvdmlkZXIuZG93bmxvYWRNYXBcbiAgY29uc3QgdXBsb2FkRmlsZVRhc2sgPSBMT0FEX0NMT1VEX01BUF9UQVNLKHtwcm92aWRlciwgcGF5bG9hZDogbG9hZFBhcmFtc30pLmJpbWFwKFxuICAgIC8vIHN1Y2Nlc3NcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcmVzcG9uc2UgPT4gbG9hZENsb3VkTWFwU3VjY2Vzcyh7cmVzcG9uc2UsIGxvYWRQYXJhbXMsIHByb3ZpZGVyLCBvblN1Y2Nlc3MsIG9uRXJyb3J9KSxcbiAgICAvLyBlcnJvclxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBlcnJvciA9PiBsb2FkQ2xvdWRNYXBFcnJvcih7ZXJyb3IsIHByb3ZpZGVyLCBvbkVycm9yfSlcbiAgKTtcblxuICByZXR1cm4gd2l0aFRhc2sobmV3U3RhdGUsIHVwbG9hZEZpbGVUYXNrKTtcbn07XG5cbmZ1bmN0aW9uIGlzRmlsZUNvbmZsaWN0KGVycm9yKSB7XG4gIHJldHVybiBlcnJvciAmJiBlcnJvci5tZXNzYWdlID09PSBGSUxFX0NPTkZMSUNUX01TRztcbn1cblxuZnVuY3Rpb24gY2hlY2tMb2FkTWFwUmVzcG9uc2VFcnJvcihyZXNwb25zZSkge1xuICBpZiAoIXJlc3BvbnNlIHx8ICFpc1BsYWluT2JqZWN0KHJlc3BvbnNlKSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ0xvYWQgbWFwIHJlc3BvbnNlIGlzIGVtcHR5Jyk7XG4gIH1cbiAgaWYgKCFpc1BsYWluT2JqZWN0KHJlc3BvbnNlLm1hcCkpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKGBMb2FkIG1hcCByZXNwb25zZSBzaG91bGQgYmUgYW4gb2JqZWN0IHByb3BlcnR5IFwibWFwXCJgKTtcbiAgfVxuICBpZiAoIXJlc3BvbnNlLm1hcC5kYXRhc2V0cyB8fCAhcmVzcG9uc2UubWFwLmNvbmZpZykge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYExvYWQgbWFwIHJlc3BvbnNlLm1hcCBzaG91bGQgYmUgYW4gb2JqZWN0IHdpdGggcHJvcGVydHkgZGF0YXNldHMgb3IgY29uZmlnYCk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YXNldEhhbmRsZXIoZm9ybWF0KSB7XG4gIGNvbnN0IGRlZmF1bHRIYW5kbGVyID0gREFUQVNFVF9IQU5ETEVSU1tEQVRBU0VUX0ZPUk1BVFMuY3N2XTtcbiAgaWYgKCFmb3JtYXQpIHtcbiAgICBDb25zb2xlLndhcm4oJ2Zvcm1hdCBpcyBub3QgcHJvdmlkZWQgaW4gbG9hZCBtYXAgcmVzcG9uc2UsIHdpbGwgdXNlIGNzdiBieSBkZWZhdWx0Jyk7XG4gICAgcmV0dXJuIGRlZmF1bHRIYW5kbGVyO1xuICB9XG5cbiAgaWYgKCFEQVRBU0VUX0hBTkRMRVJTW2Zvcm1hdF0pIHtcbiAgICBjb25zdCBzdXBwb3J0ZWRGb3JtYXQgPSBPYmplY3Qua2V5cyhEQVRBU0VUX0ZPUk1BVFMpXG4gICAgICAubWFwKGsgPT4gYCcke2t9J2ApXG4gICAgICAuam9pbignLCAnKTtcbiAgICBDb25zb2xlLndhcm4oXG4gICAgICBgdW5rbm93biBmb3JtYXQgJHtmb3JtYXR9LiBQbGVhc2UgdXNlIG9uZSBvZiAke3N1cHBvcnRlZEZvcm1hdH0sIHdpbGwgdXNlIGNzdiBieSBkZWZhdWx0YFxuICAgICk7XG4gICAgcmV0dXJuIGRlZmF1bHRIYW5kbGVyO1xuICB9XG5cbiAgcmV0dXJuIERBVEFTRVRfSEFORExFUlNbZm9ybWF0XTtcbn1cblxuZnVuY3Rpb24gcGFyc2VMb2FkTWFwUmVzcG9uc2UocmVzcG9uc2UsIGxvYWRQYXJhbXMsIHByb3ZpZGVyKSB7XG4gIGNvbnN0IHttYXAsIGZvcm1hdH0gPSByZXNwb25zZTtcbiAgY29uc3QgcHJvY2Vzc29yTWV0aG9kID0gZ2V0RGF0YXNldEhhbmRsZXIoZm9ybWF0KTtcblxuICBjb25zdCBwYXJzZWREYXRhc2V0cyA9IHRvQXJyYXkobWFwLmRhdGFzZXRzKS5tYXAoKGRzLCBpKSA9PiB7XG4gICAgaWYgKGZvcm1hdCA9PT0gREFUQVNFVF9GT1JNQVRTLmtlcGxlcmdsKSB7XG4gICAgICAvLyBubyBuZWVkIHRvIG9idGFpbiBpZCwgZGlyZWN0bHkgcGFzcyB0aGVtIGluXG4gICAgICByZXR1cm4gcHJvY2Vzc29yTWV0aG9kKGRzKTtcbiAgICB9XG4gICAgY29uc3QgaW5mbyA9IChkcyAmJiBkcy5pbmZvKSB8fCB7aWQ6IGdlbmVyYXRlSGFzaElkKDYpfTtcbiAgICBjb25zdCBkYXRhID0gcHJvY2Vzc29yTWV0aG9kKGRzLmRhdGEgfHwgZHMpO1xuICAgIHJldHVybiB7aW5mbywgZGF0YX07XG4gIH0pO1xuXG4gIGNvbnN0IGluZm8gPSB7XG4gICAgLi4ubWFwLmluZm8sXG4gICAgcHJvdmlkZXI6IHByb3ZpZGVyLm5hbWUsXG4gICAgbG9hZFBhcmFtc1xuICB9O1xuICByZXR1cm4ge1xuICAgIGRhdGFzZXRzOiBwYXJzZWREYXRhc2V0cyxcbiAgICBpbmZvLFxuICAgIC4uLihtYXAuY29uZmlnID8ge2NvbmZpZzogbWFwLmNvbmZpZ30gOiB7fSlcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRDbG91ZE1hcFN1Y2Nlc3NVcGRhdGVyID0gKFxuICBzdGF0ZTogUHJvdmlkZXJTdGF0ZSxcbiAgYWN0aW9uOiBBY3Rpb25QYXlsb2FkPFByb3ZpZGVyQWN0aW9ucy5Mb2FkQ2xvdWRNYXBTdWNjZXNzUGF5bG9hZD5cbik6IFByb3ZpZGVyU3RhdGUgPT4ge1xuICBjb25zdCB7cmVzcG9uc2UsIGxvYWRQYXJhbXMsIHByb3ZpZGVyLCBvblN1Y2Nlc3MsIG9uRXJyb3J9ID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgY29uc3QgZm9ybWF0RXJyb3IgPSBjaGVja0xvYWRNYXBSZXNwb25zZUVycm9yKHJlc3BvbnNlKTtcbiAgaWYgKGZvcm1hdEVycm9yKSB7XG4gICAgLy8gaWYgcmVzcG9uc2UgZm9ybWF0IGlzIG5vdCBjb3JyZWN0XG4gICAgcmV0dXJuIGV4cG9ydEZpbGVFcnJvclVwZGF0ZXIoc3RhdGUsIHtcbiAgICAgIHBheWxvYWQ6IHtlcnJvcjogZm9ybWF0RXJyb3IsIHByb3ZpZGVyLCBvbkVycm9yfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgbmV3U3RhdGUgPSB7XG4gICAgLi4uc3RhdGUsXG4gICAgbWFwU2F2ZWQ6IHByb3ZpZGVyLm5hbWUsXG4gICAgY3VycmVudFByb3ZpZGVyOiBwcm92aWRlci5uYW1lLFxuICAgIGlzQ2xvdWRNYXBMb2FkaW5nOiBmYWxzZSxcbiAgICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2VcbiAgfTtcblxuICBjb25zdCBwYXlsb2FkID0gcGFyc2VMb2FkTWFwUmVzcG9uc2UocmVzcG9uc2UsIGxvYWRQYXJhbXMsIHByb3ZpZGVyKTtcblxuICBjb25zdCB0YXNrcyA9IFtcbiAgICBBQ1RJT05fVEFTSygpLm1hcChfID0+IGFkZERhdGFUb01hcChwYXlsb2FkKSksXG4gICAgY3JlYXRlQWN0aW9uVGFzayhvblN1Y2Nlc3MsIHtyZXNwb25zZSwgbG9hZFBhcmFtcywgcHJvdmlkZXJ9KSxcbiAgICBBQ1RJT05fVEFTSygpLm1hcChfID0+IHBvc3RTYXZlTG9hZFN1Y2Nlc3MoYE1hcCBmcm9tICR7cHJvdmlkZXIubmFtZX0gbG9hZGVkYCkpXG4gIF0uZmlsdGVyKGQgPT4gZCk7XG5cbiAgcmV0dXJuIHRhc2tzLmxlbmd0aCA/IHdpdGhUYXNrKG5ld1N0YXRlLCB0YXNrcykgOiBuZXdTdGF0ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkQ2xvdWRNYXBFcnJvclVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBQcm92aWRlclN0YXRlLFxuICBhY3Rpb246IEFjdGlvblBheWxvYWQ8UHJvdmlkZXJBY3Rpb25zLkxvYWRDbG91ZE1hcEVycm9yUGF5bG9hZD5cbik6IFByb3ZpZGVyU3RhdGUgPT4ge1xuICBjb25zdCBtZXNzYWdlID0gZ2V0RXJyb3IoYWN0aW9uLnBheWxvYWQuZXJyb3IpIHx8IGBFcnJvciBsb2FkaW5nIHNhdmVkIG1hcGA7XG5cbiAgQ29uc29sZS53YXJuKG1lc3NhZ2UpO1xuXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZSxcbiAgICBpc0Nsb3VkTWFwTG9hZGluZzogZmFsc2UsXG4gICAgcHJvdmlkZXJFcnJvcjogbnVsbFxuICB9O1xuXG4gIHJldHVybiB3aXRoVGFzayhcbiAgICBuZXdTdGF0ZSxcbiAgICBjcmVhdGVHbG9iYWxOb3RpZmljYXRpb25UYXNrcyh7dHlwZTogJ2Vycm9yJywgbWVzc2FnZSwgZGVsYXlDbG9zZTogZmFsc2V9KVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlc2V0UHJvdmlkZXJTdGF0dXNVcGRhdGVyID0gKHN0YXRlOiBQcm92aWRlclN0YXRlKTogUHJvdmlkZXJTdGF0ZSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgaXNQcm92aWRlckxvYWRpbmc6IGZhbHNlLFxuICBwcm92aWRlckVycm9yOiBudWxsLFxuICBpc0Nsb3VkTWFwTG9hZGluZzogZmFsc2UsXG4gIHN1Y2Nlc3NJbmZvOiB7fVxufSk7XG5cbi8qKlxuICogU2V0IGN1cnJlbnQgY2xvdWRQcm92aWRlclxuICovXG5leHBvcnQgY29uc3Qgc2V0Q2xvdWRQcm92aWRlclVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBQcm92aWRlclN0YXRlLFxuICBhY3Rpb246IEFjdGlvblBheWxvYWQ8UHJvdmlkZXJBY3Rpb25zLlNldENsb3VkUHJvdmlkZXJQYXlsb2FkPlxuKTogUHJvdmlkZXJTdGF0ZSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgaXNQcm92aWRlckxvYWRpbmc6IGZhbHNlLFxuICBwcm92aWRlckVycm9yOiBudWxsLFxuICBzdWNjZXNzSW5mbzoge30sXG4gIGN1cnJlbnRQcm92aWRlcjogYWN0aW9uLnBheWxvYWRcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0U2F2ZWRNYXBzVXBkYXRlciA9IChcbiAgc3RhdGU6IFByb3ZpZGVyU3RhdGUsXG4gIGFjdGlvbjogQWN0aW9uUGF5bG9hZDxQcm92aWRlckFjdGlvbnMuR2V0U2F2ZWRNYXBzUGF5bG9hZD5cbik6IFByb3ZpZGVyU3RhdGUgPT4ge1xuICBjb25zdCBwcm92aWRlciA9IGFjdGlvbi5wYXlsb2FkO1xuICBpZiAoIV92YWxpZGF0ZVByb3ZpZGVyKHByb3ZpZGVyLCAnbGlzdE1hcHMnKSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IGdldFNhdmVkTWFwc1Rhc2sgPSBHRVRfU0FWRURfTUFQU19UQVNLKHByb3ZpZGVyKS5iaW1hcChcbiAgICAvLyBzdWNjZXNzXG4gICAgdmlzdWFsaXphdGlvbnMgPT4gZ2V0U2F2ZWRNYXBzU3VjY2Vzcyh7dmlzdWFsaXphdGlvbnMsIHByb3ZpZGVyfSksXG4gICAgLy8gZXJyb3JcbiAgICBlcnJvciA9PiBnZXRTYXZlZE1hcHNFcnJvcih7ZXJyb3IsIHByb3ZpZGVyfSlcbiAgKTtcblxuICByZXR1cm4gd2l0aFRhc2soXG4gICAge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBpc1Byb3ZpZGVyTG9hZGluZzogdHJ1ZVxuICAgIH0sXG4gICAgZ2V0U2F2ZWRNYXBzVGFza1xuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNhdmVkTWFwc1N1Y2Nlc3NVcGRhdGVyID0gKFxuICBzdGF0ZTogUHJvdmlkZXJTdGF0ZSxcbiAgYWN0aW9uOiBBY3Rpb25QYXlsb2FkPFByb3ZpZGVyQWN0aW9ucy5HZXRTYXZlZE1hcHNTdWNjZXNzUGF5bG9hZD5cbik6IFByb3ZpZGVyU3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGlzUHJvdmlkZXJMb2FkaW5nOiBmYWxzZSxcbiAgdmlzdWFsaXphdGlvbnM6IGFjdGlvbi5wYXlsb2FkLnZpc3VhbGl6YXRpb25zXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldFNhdmVkTWFwc0Vycm9yVXBkYXRlciA9IChcbiAgc3RhdGU6IFByb3ZpZGVyU3RhdGUsXG4gIGFjdGlvbjogQWN0aW9uUGF5bG9hZDxQcm92aWRlckFjdGlvbnMuR2V0U2F2ZWRNYXBzRXJyb3JQYXlsb2FkPlxuKTogUHJvdmlkZXJTdGF0ZSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2UgPVxuICAgIGdldEVycm9yKGFjdGlvbi5wYXlsb2FkLmVycm9yKSB8fCBgRXJyb3IgZ2V0dGluZyBzYXZlZCBtYXBzIGZyb20gJHtzdGF0ZS5jdXJyZW50UHJvdmlkZXJ9YDtcblxuICBDb25zb2xlLndhcm4oYWN0aW9uLnBheWxvYWQuZXJyb3IpO1xuXG4gIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgIC4uLnN0YXRlLFxuICAgIGN1cnJlbnRQcm92aWRlcjogbnVsbCxcbiAgICBpc1Byb3ZpZGVyTG9hZGluZzogZmFsc2VcbiAgfTtcblxuICByZXR1cm4gd2l0aFRhc2soXG4gICAgbmV3U3RhdGUsXG4gICAgY3JlYXRlR2xvYmFsTm90aWZpY2F0aW9uVGFza3Moe3R5cGU6ICdlcnJvcicsIG1lc3NhZ2UsIGRlbGF5Q2xvc2U6IGZhbHNlfSlcbiAgKTtcbn07XG4iXX0=