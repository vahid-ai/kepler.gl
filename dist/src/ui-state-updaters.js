"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.togglePanelListViewUpdater = exports.setLocaleUpdater = exports.showDatasetTableUpdater = exports.toggleSplitMapUpdater = exports.loadFilesErrUpdater = exports.loadFilesSuccessUpdater = exports.loadFilesUpdater = exports.removeNotificationUpdater = exports.addNotificationUpdater = exports.setExportMapHTMLModeUpdater = exports.setExportMapFormatUpdater = exports.setUserMapboxAccessTokenUpdater = exports.setExportDataUpdater = exports.setExportFilteredUpdater = exports.setExportDataTypeUpdater = exports.setExportSelectedDatasetUpdater = exports.startExportingImageUpdater = exports.cleanupExportImageUpdater = exports.setExportImageErrorUpdater = exports.setExportImageDataUriUpdater = exports.setExportImageSettingUpdater = exports.openDeleteModalUpdater = exports.setMapControlVisibilityUpdater = exports.toggleMapControlUpdater = exports.toggleSidePanelCloseButtonUpdater = exports.hideExportDropdownUpdater = exports.showExportDropdownUpdater = exports.toggleModalUpdater = exports.toggleSidePanelUpdater = exports.initUiStateUpdater = exports.INITIAL_UI_STATE = exports.DEFAULT_EXPORT_MAP = exports.DEFAULT_EXPORT_JSON = exports.DEFAULT_EXPORT_HTML = exports.DEFAULT_NOTIFICATIONS = exports.DEFAULT_EXPORT_DATA = exports.DEFAULT_LOAD_FILES = exports.DEFAULT_EXPORT_IMAGE = exports.DEFAULT_MAP_CONTROLS = exports.DEFAULT_MODAL = exports.DEFAULT_ACTIVE_SIDE_PANEL = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _constants = require("@kepler.gl/constants");

var _localization = require("@kepler.gl/localization");

var _utils = require("@kepler.gl/utils");

var _composerHelpers = require("./composer-helpers");

var _DEFAULT_EXPORT_MAP;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DEFAULT_ACTIVE_SIDE_PANEL = 'layer';
exports.DEFAULT_ACTIVE_SIDE_PANEL = DEFAULT_ACTIVE_SIDE_PANEL;
var DEFAULT_MODAL = _constants.ADD_DATA_ID;
/**
 * Updaters for `uiState` reducer. Can be used in your root reducer to directly modify kepler.gl's state.
 * Read more about [Using updaters](../advanced-usage/using-updaters.md)
 *
 * @public
 * @example
 *
 * import keplerGlReducer, {uiStateUpdaters} from 'kepler.gl/reducers';
 * // Root Reducer
 * const reducers = combineReducers({
 *  keplerGl: keplerGlReducer,
 *  app: appReducer
 * });
 *
 * const composedReducer = (state, action) => {
 *  switch (action.type) {
 *    // click button to close side panel
 *    case 'CLICK_BUTTON':
 *      return {
 *        ...state,
 *        keplerGl: {
 *          ...state.keplerGl,
 *          foo: {
 *             ...state.keplerGl.foo,
 *             uiState: uiStateUpdaters.toggleSidePanelUpdater(
 *               uiState, {payload: null}
 *             )
 *          }
 *        }
 *      };
 *  }
 *  return reducers(state, action);
 * };
 *
 * export default composedReducer;
 */

/* eslint-disable no-unused-vars */
// @ts-ignore

exports.DEFAULT_MODAL = DEFAULT_MODAL;
var uiStateUpdaters = null;
/* eslint-enable no-unused-vars */

var DEFAULT_MAP_CONTROLS_FEATURES = {
  show: true,
  active: false,
  disableClose: false,
  // defines which map index users are interacting with (through map controls)
  activeMapIndex: 0
};
/**
 * A list of map control visibility and whether is it active.
 * @memberof uiStateUpdaters
 * @constant
 * @property visibleLayers Default: `{show: true, active: false}`
 * @property mapLegend Default: `{show: true, active: false}`
 * @property toggle3d Default: `{show: true}`
 * @property splitMap Default: `{show: true}`
 * @property mapDraw Default: `{show: true, active: false}`
 * @property mapLocale Default: `{show: false, active: false}`
 * @public
 */

var DEFAULT_MAP_CONTROLS = Object.keys(_constants.MAP_CONTROLS).reduce(function (_final, current) {
  return _objectSpread(_objectSpread({}, _final), {}, (0, _defineProperty2["default"])({}, current, DEFAULT_MAP_CONTROLS_FEATURES));
}, {});
/**
 * Default image export config
 * @memberof uiStateUpdaters
 * @constant
 * @property ratio Default: `'SCREEN'`,
 * @property resolution Default: `'ONE_X'`,
 * @property legend Default: `false`,
 * @property mapH Default: 0,
 * @property mapW Default: 0,
 * @property imageSize Default: {zoomOffset: 0, scale: 1, imageW: 0, imageH: 0},
 * @property imageDataUri Default: `''`,
 * @property exporting Default: `false`
 * @property error Default: `false`
 * @public
 */

exports.DEFAULT_MAP_CONTROLS = DEFAULT_MAP_CONTROLS;
var DEFAULT_EXPORT_IMAGE = {
  // user options
  ratio: _constants.EXPORT_IMG_RATIOS.SCREEN,
  resolution: _constants.RESOLUTIONS.ONE_X,
  legend: false,
  mapH: 0,
  mapW: 0,
  imageSize: {
    zoomOffset: 0,
    scale: 1,
    imageW: 0,
    imageH: 0
  },
  // when this is set to true, the mock map viewport will move to the center of data
  center: false,
  // exporting state
  imageDataUri: '',
  // exporting: used to attach plot-container to dom
  exporting: false,
  // processing: used as loading indicator when export image is being produced
  processing: false,
  error: false
};
exports.DEFAULT_EXPORT_IMAGE = DEFAULT_EXPORT_IMAGE;
var DEFAULT_LOAD_FILES = {
  fileLoading: false
};
/**
 * Default initial `exportData` settings
 * @memberof uiStateUpdaters
 * @constant
 * @property selectedDataset Default: `''`,
 * @property dataType Default: `'csv'`,
 * @property filtered Default: `true`,
 * @public
 */

exports.DEFAULT_LOAD_FILES = DEFAULT_LOAD_FILES;
var DEFAULT_EXPORT_DATA = {
  selectedDataset: '',
  dataType: _constants.EXPORT_DATA_TYPE.CSV,
  filtered: true
};
/**
 * @constant
 */

exports.DEFAULT_EXPORT_DATA = DEFAULT_EXPORT_DATA;
var DEFAULT_NOTIFICATIONS = [];
/**
 * @constant
 * @property exportMapboxAccessToken - Default: null, this is used when we provide a default mapbox token for users to take advantage of
 * @property userMapboxToken - Default: '', mapbox token provided by user through input field
 * @property mode - Default: 'READ', read only or editable
 * @public
 */

exports.DEFAULT_NOTIFICATIONS = DEFAULT_NOTIFICATIONS;
var DEFAULT_EXPORT_HTML = {
  exportMapboxAccessToken: null,
  userMapboxToken: '',
  mode: _constants.EXPORT_HTML_MAP_MODES.READ
};
/**
 * @constant
 * @property hasData - Default: 'true',
 * @public
 */

exports.DEFAULT_EXPORT_HTML = DEFAULT_EXPORT_HTML;
var DEFAULT_EXPORT_JSON = {
  hasData: true
};
/**
 * Export Map Config
 * @constant
 * @property HTML - Default: 'DEFAULT_EXPORT_HTML',
 * @property JSON - Default: 'DEFAULT_EXPORT_JSON',
 * @property format - Default: 'HTML',
 * @public
 */

exports.DEFAULT_EXPORT_JSON = DEFAULT_EXPORT_JSON;
var DEFAULT_EXPORT_MAP = (_DEFAULT_EXPORT_MAP = {}, (0, _defineProperty2["default"])(_DEFAULT_EXPORT_MAP, _constants.EXPORT_MAP_FORMATS.HTML, DEFAULT_EXPORT_HTML), (0, _defineProperty2["default"])(_DEFAULT_EXPORT_MAP, _constants.EXPORT_MAP_FORMATS.JSON, DEFAULT_EXPORT_JSON), (0, _defineProperty2["default"])(_DEFAULT_EXPORT_MAP, "format", _constants.EXPORT_MAP_FORMATS.HTML), _DEFAULT_EXPORT_MAP);
/**
 * Default initial `uiState`
 * @memberof uiStateUpdaters
 * @constant
 * @property readOnly Default: `false`
 * @property activeSidePanel Default: `'layer'`
 * @property currentModal Default: `'addData'`
 * @property datasetKeyToRemove Default: `null`
 * @property visibleDropdown Default: `null`
 * @property exportImage Default: [`DEFAULT_EXPORT_IMAGE`](#default_export_image)
 * @property exportData Default: [`DEFAULT_EXPORT_DATA`](#default_export_data)
 * @property exportMap Default: [`DEFAULT_EXPORT_MAP`](#default_export_map)
 * @property mapControls Default: [`DEFAULT_MAP_CONTROLS`](#default_map_controls)
 * @property notifications Default: `[]`
 * @property notifications Default: `[]`
 * @property loadFiles
 * @property isSidePanelCloseButtonVisible Default: `true`
 * @public
 */

exports.DEFAULT_EXPORT_MAP = DEFAULT_EXPORT_MAP;
var INITIAL_UI_STATE = {
  readOnly: false,
  activeSidePanel: DEFAULT_ACTIVE_SIDE_PANEL,
  currentModal: DEFAULT_MODAL,
  datasetKeyToRemove: null,
  visibleDropdown: null,
  // export image modal ui
  exportImage: DEFAULT_EXPORT_IMAGE,
  // export data modal ui
  exportData: DEFAULT_EXPORT_DATA,
  // html export
  exportMap: DEFAULT_EXPORT_MAP,
  // map control panels
  mapControls: DEFAULT_MAP_CONTROLS,
  // ui notifications
  notifications: DEFAULT_NOTIFICATIONS,
  // load files
  loadFiles: DEFAULT_LOAD_FILES,
  // Locale of the UI
  locale: _localization.LOCALE_CODES.en,
  layerPanelListView: 'list',
  filterPanelListView: 'list',
  isSidePanelCloseButtonVisible: true
};
/* Updaters */

/**
 * @memberof uiStateUpdaters
 */

exports.INITIAL_UI_STATE = INITIAL_UI_STATE;

var initUiStateUpdater = function initUiStateUpdater(state, action) {
  return _objectSpread(_objectSpread({}, state), (action.payload || {}).initialUiState);
};
/**
 * Toggle active side panel
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload id of side panel to be shown, one of `layer`, `filter`, `interaction`, `map`. close side panel if `null`
 * @returns nextState
 * @public
 */


exports.initUiStateUpdater = initUiStateUpdater;

var toggleSidePanelUpdater = function toggleSidePanelUpdater(state, _ref) {
  var id = _ref.payload;
  return id === state.activeSidePanel ? state : _objectSpread(_objectSpread({}, state), {}, {
    activeSidePanel: id
  });
};
/**
 * Show and hide modal dialog
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @paramaction.payload id of modal to be shown, null to hide modals. One of:
 *  - [`DATA_TABLE_ID`](../constants/default-settings.md#data_table_id)
 *  - [`DELETE_DATA_ID`](../constants/default-settings.md#delete_data_id)
 *  - [`ADD_DATA_ID`](../constants/default-settings.md#add_data_id)
 *  - [`EXPORT_IMAGE_ID`](../constants/default-settings.md#export_image_id)
 *  - [`EXPORT_DATA_ID`](../constants/default-settings.md#export_data_id)
 *  - [`ADD_MAP_STYLE_ID`](../constants/default-settings.md#add_map_style_id)
 * @returns nextState
 * @public
 */


exports.toggleSidePanelUpdater = toggleSidePanelUpdater;

var toggleModalUpdater = function toggleModalUpdater(state, _ref2) {
  var id = _ref2.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    currentModal: id
  });
};
/**
 * Hide and show side panel header dropdown, activated by clicking the share link on top of the side panel
 * @memberof uiStateUpdaters
 * @public
 */


exports.toggleModalUpdater = toggleModalUpdater;

var showExportDropdownUpdater = function showExportDropdownUpdater(state, _ref3) {
  var id = _ref3.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    visibleDropdown: id
  });
};
/**
 * Hide side panel header dropdown, activated by clicking the share link on top of the side panel
 * @memberof uiStateUpdaters
 * @public
 */


exports.showExportDropdownUpdater = showExportDropdownUpdater;

var hideExportDropdownUpdater = function hideExportDropdownUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    visibleDropdown: null
  });
};
/**
 * Toggle side panel close button on top left of the side panel
 * @memberof uiStateUpdaters
 * @public
 */


exports.hideExportDropdownUpdater = hideExportDropdownUpdater;

var toggleSidePanelCloseButtonUpdater = function toggleSidePanelCloseButtonUpdater(state, _ref4) {
  var show = _ref4.payload.show;
  return _objectSpread(_objectSpread({}, state), {}, {
    isSidePanelCloseButtonVisible: show
  });
};
/**
 * Toggle active map control panel
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action action
 * @param action.payload map control panel id, one of the keys of: [`DEFAULT_MAP_CONTROLS`](#default_map_controls)
 * @returns nextState
 * @public
 */


exports.toggleSidePanelCloseButtonUpdater = toggleSidePanelCloseButtonUpdater;

var toggleMapControlUpdater = function toggleMapControlUpdater(state, _ref5) {
  var _ref5$payload = _ref5.payload,
      panelId = _ref5$payload.panelId,
      _ref5$payload$index = _ref5$payload.index,
      index = _ref5$payload$index === void 0 ? 0 : _ref5$payload$index;
  return _objectSpread(_objectSpread({}, state), {}, {
    mapControls: _objectSpread(_objectSpread({}, state.mapControls), {}, (0, _defineProperty2["default"])({}, panelId, _objectSpread(_objectSpread({}, state.mapControls[panelId]), {}, {
      active: !state.mapControls[panelId].active,
      activeMapIndex: index
    })))
  });
};
/**
 * Toggle map control visibility
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action action
 * @param action.payload map control panel id, one of the keys of: [`DEFAULT_MAP_CONTROLS`](#default_map_controls)
 * @returns nextState
 * @public
 */


exports.toggleMapControlUpdater = toggleMapControlUpdater;

var setMapControlVisibilityUpdater = function setMapControlVisibilityUpdater(state, _ref6) {
  var _state$mapControls;

  var _ref6$payload = _ref6.payload,
      panelId = _ref6$payload.panelId,
      show = _ref6$payload.show;

  if (!((_state$mapControls = state.mapControls) !== null && _state$mapControls !== void 0 && _state$mapControls[panelId])) {
    return state;
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    mapControls: _objectSpread(_objectSpread({}, state.mapControls), {}, (0, _defineProperty2["default"])({}, panelId, _objectSpread(_objectSpread({}, state.mapControls[panelId]), {}, {
      show: Boolean(show)
    })))
  });
};
/**
 * Toggle active map control panel
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload dataset id
 * @returns nextState
 * @public
 */


exports.setMapControlVisibilityUpdater = setMapControlVisibilityUpdater;

var openDeleteModalUpdater = function openDeleteModalUpdater(state, _ref7) {
  var datasetKeyToRemove = _ref7.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    currentModal: _constants.DELETE_DATA_ID,
    datasetKeyToRemove: datasetKeyToRemove
  });
};
/**
 * Set `exportImage.legend` to `true` or `false`
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @returns nextState
 * @public
 */


exports.openDeleteModalUpdater = openDeleteModalUpdater;

var setExportImageSettingUpdater = function setExportImageSettingUpdater(state, _ref8) {
  var newSetting = _ref8.payload;

  var updated = _objectSpread(_objectSpread({}, state.exportImage), newSetting);

  var imageSize = (0, _utils.calculateExportImageSize)(updated) || state.exportImage.imageSize;
  return _objectSpread(_objectSpread({}, state), {}, {
    exportImage: _objectSpread(_objectSpread({}, updated), {}, {
      // @ts-expect-error
      // TODO: calculateExportImageSize does not return imageSize.zoomOffset,
      // do we need take this value from current state, or return defaul value = 0
      imageSize: imageSize
    })
  });
};
/**
 * Set `exportImage.setExportImageDataUri` to a image dataUri
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload export image data uri
 * @returns nextState
 * @public
 */


exports.setExportImageSettingUpdater = setExportImageSettingUpdater;

var setExportImageDataUriUpdater = function setExportImageDataUriUpdater(state, _ref9) {
  var dataUri = _ref9.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    exportImage: _objectSpread(_objectSpread({}, state.exportImage), {}, {
      processing: false,
      imageDataUri: dataUri
    })
  });
};
/**
 * @memberof uiStateUpdaters
 * @public
 */


exports.setExportImageDataUriUpdater = setExportImageDataUriUpdater;

var setExportImageErrorUpdater = function setExportImageErrorUpdater(state, _ref10) {
  var error = _ref10.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    exportImage: _objectSpread(_objectSpread({}, state.exportImage), {}, {
      processing: false,
      error: error
    })
  });
};
/**
 * Delete cached export image
 * @memberof uiStateUpdaters
 * @public
 */


exports.setExportImageErrorUpdater = setExportImageErrorUpdater;

var cleanupExportImageUpdater = function cleanupExportImageUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    exportImage: _objectSpread(_objectSpread({}, state.exportImage), {}, {
      exporting: false,
      imageDataUri: '',
      error: false,
      processing: false,
      center: false
    })
  });
};
/**
 * Start image exporting flow
 * @memberof uiStateUpdaters
 * @param state
 * @param options
 * @returns {UiState}
 * @public
 */


exports.cleanupExportImageUpdater = cleanupExportImageUpdater;

var startExportingImageUpdater = function startExportingImageUpdater(state, _ref11) {
  var _ref11$payload = _ref11.payload,
      options = _ref11$payload === void 0 ? {} : _ref11$payload;

  var imageSettings = _objectSpread(_objectSpread({}, options), {}, {
    exporting: true
  });

  return (0, _composerHelpers.compose_)([cleanupExportImageUpdater, (0, _composerHelpers.apply_)(setExportImageSettingUpdater, (0, _composerHelpers.payload_)(imageSettings))])(state);
};
/**
 * Set selected dataset for export
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload dataset id
 * @returns nextState
 * @public
 */


exports.startExportingImageUpdater = startExportingImageUpdater;

var setExportSelectedDatasetUpdater = function setExportSelectedDatasetUpdater(state, _ref12) {
  var dataset = _ref12.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    exportData: _objectSpread(_objectSpread({}, state.exportData), {}, {
      selectedDataset: dataset
    })
  });
};
/**
 * Set data format for exporting data
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload one of `'text/csv'`
 * @returns nextState
 * @public
 */


exports.setExportSelectedDatasetUpdater = setExportSelectedDatasetUpdater;

var setExportDataTypeUpdater = function setExportDataTypeUpdater(state, _ref13) {
  var dataType = _ref13.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    exportData: _objectSpread(_objectSpread({}, state.exportData), {}, {
      dataType: dataType
    })
  });
};
/**
 * Whether to export filtered data, `true` or `false`
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload
 * @returns nextState
 * @public
 */


exports.setExportDataTypeUpdater = setExportDataTypeUpdater;

var setExportFilteredUpdater = function setExportFilteredUpdater(state, _ref14) {
  var filtered = _ref14.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    exportData: _objectSpread(_objectSpread({}, state.exportData), {}, {
      filtered: filtered
    })
  });
};
/**
 * Whether to including data in map config, toggle between `true` or `false`
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @returns nextState
 * @public
 */


exports.setExportFilteredUpdater = setExportFilteredUpdater;

var setExportDataUpdater = function setExportDataUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    exportMap: _objectSpread(_objectSpread({}, state.exportMap), {}, (0, _defineProperty2["default"])({}, _constants.EXPORT_MAP_FORMATS.JSON, _objectSpread(_objectSpread({}, state.exportMap[_constants.EXPORT_MAP_FORMATS.JSON]), {}, {
      hasData: !state.exportMap[_constants.EXPORT_MAP_FORMATS.JSON].hasData
    })))
  });
};
/**
 * whether to export a mapbox access to HTML single page
 * @param state - `uiState`
 * @param action
 * @param action.payload
 * @returns nextState
 * @public
 */


exports.setExportDataUpdater = setExportDataUpdater;

var setUserMapboxAccessTokenUpdater = function setUserMapboxAccessTokenUpdater(state, _ref15) {
  var userMapboxToken = _ref15.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    exportMap: _objectSpread(_objectSpread({}, state.exportMap), {}, (0, _defineProperty2["default"])({}, _constants.EXPORT_MAP_FORMATS.HTML, _objectSpread(_objectSpread({}, state.exportMap[_constants.EXPORT_MAP_FORMATS.HTML]), {}, {
      userMapboxToken: userMapboxToken
    })))
  });
};
/**
 * Sets the export map format
 * @param state - `uiState`
 * @param action
 * @param action.payload format to use to export the map into
 * @return nextState
 */


exports.setUserMapboxAccessTokenUpdater = setUserMapboxAccessTokenUpdater;

var setExportMapFormatUpdater = function setExportMapFormatUpdater(state, _ref16) {
  var format = _ref16.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    exportMap: _objectSpread(_objectSpread({}, state.exportMap), {}, {
      // @ts-expect-error
      format: format
    })
  });
};
/**
 * Set the export html map mode
 * @param state - `uiState`
 * @param action
 * @param action.payload to be set (available modes: EXPORT_HTML_MAP_MODES)
 * @return nextState
 */


exports.setExportMapFormatUpdater = setExportMapFormatUpdater;

var setExportMapHTMLModeUpdater = function setExportMapHTMLModeUpdater(state, _ref17) {
  var mode = _ref17.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    exportMap: _objectSpread(_objectSpread({}, state.exportMap), {}, (0, _defineProperty2["default"])({}, _constants.EXPORT_MAP_FORMATS.HTML, _objectSpread(_objectSpread({}, state.exportMap[_constants.EXPORT_MAP_FORMATS.HTML]), {}, {
      mode: mode
    })))
  });
};
/**
 * Adds a new notification.
 * Updates a notification in case of matching ids.
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload Params of a notification
 * @returns nextState
 * @public
 */


exports.setExportMapHTMLModeUpdater = setExportMapHTMLModeUpdater;

var addNotificationUpdater = function addNotificationUpdater(state, _ref18) {
  var payload = _ref18.payload;
  var oldNotifications = state.notifications || []; // @ts-expect-error

  var payloadId = payload === null || payload === void 0 ? void 0 : payload.id;
  var notificationToUpdate = payloadId ? oldNotifications.find(function (n) {
    return n.id === payloadId;
  }) : null;
  var notifications;

  if (notificationToUpdate) {
    notifications = oldNotifications.map(function (n) {
      return n.id === payloadId ? (0, _utils.createNotification)(_objectSpread(_objectSpread({}, payload), {}, {
        count: n.count + 1
      })) : n;
    });
  } else {
    notifications = [].concat((0, _toConsumableArray2["default"])(oldNotifications), [(0, _utils.createNotification)(payload)]);
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    notifications: notifications
  });
};
/**
 * Remove a notification
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload id of the notification to be removed
 * @returns nextState
 * @public
 */


exports.addNotificationUpdater = addNotificationUpdater;

var removeNotificationUpdater = function removeNotificationUpdater(state, _ref19) {
  var id = _ref19.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    notifications: state.notifications.filter(function (n) {
      return n.id !== id;
    })
  });
};
/**
 * Fired when file loading begin
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @returns nextState
 * @public
 */


exports.removeNotificationUpdater = removeNotificationUpdater;

var loadFilesUpdater = function loadFilesUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    loadFiles: _objectSpread(_objectSpread({}, state.loadFiles), {}, {
      fileLoading: true
    })
  });
};
/**
 * Handles loading file success and set fileLoading property to false
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @returns nextState
 */


exports.loadFilesUpdater = loadFilesUpdater;

var loadFilesSuccessUpdater = function loadFilesSuccessUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    loadFiles: _objectSpread(_objectSpread({}, state.loadFiles), {}, {
      fileLoading: false
    })
  });
};
/**
 * Handles load file error and set fileLoading property to false
 * @memberof uiStateUpdaters
 * @param state
 * @param action
 * @param action.error
 * @returns nextState
 * @public
 */


exports.loadFilesSuccessUpdater = loadFilesSuccessUpdater;

var loadFilesErrUpdater = function loadFilesErrUpdater(state, _ref20) {
  var error = _ref20.error;
  return addNotificationUpdater(_objectSpread(_objectSpread({}, state), {}, {
    loadFiles: _objectSpread(_objectSpread({}, state.loadFiles), {}, {
      fileLoading: false
    })
  }), {
    payload: (0, _utils.errorNotification)({
      message: (error || {}).message || 'Failed to upload files',
      topic: _constants.DEFAULT_NOTIFICATION_TOPICS.global
    })
  });
};
/**
 * Handles toggle map split and reset all map control index to 0
 * @memberof uiStateUpdaters
 * @param state
 * @returns nextState
 * @public
 */


exports.loadFilesErrUpdater = loadFilesErrUpdater;

var toggleSplitMapUpdater = function toggleSplitMapUpdater(state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    mapControls: Object.entries(state.mapControls).reduce(function (acc, entry) {
      return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, entry[0], _objectSpread(_objectSpread({}, entry[1]), {}, {
        activeMapIndex: 0
      })));
    }, {})
  });
};
/**
 * Toggle modal data
 * @memberof uiStateUpdaters
 * @param state
 * @returns nextState
 * @public
 */


exports.toggleSplitMapUpdater = toggleSplitMapUpdater;

var showDatasetTableUpdater = function showDatasetTableUpdater(state) {
  return toggleModalUpdater(state, {
    payload: _constants.DATA_TABLE_ID
  });
};
/**
 * Set the locale of the UI
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload
 * @param action.payload.locale locale
 * @returns nextState
 * @public
 */


exports.showDatasetTableUpdater = showDatasetTableUpdater;

var setLocaleUpdater = function setLocaleUpdater(state, _ref21) {
  var locale = _ref21.payload.locale;
  return _objectSpread(_objectSpread({}, state), {}, {
    locale: locale
  });
};
/**
 * Toggle layer panel list view
 * @memberof uiStateUpdaters
 * @param state `uiState`
 * @param action
 * @param action.payload layer panel listView value. Can be 'list' or 'sortByDataset'
 * @returns nextState
 * @public
 */


exports.setLocaleUpdater = setLocaleUpdater;

var togglePanelListViewUpdater = function togglePanelListViewUpdater(state, _ref22) {
  var _ref22$payload = _ref22.payload,
      panelId = _ref22$payload.panelId,
      listView = _ref22$payload.listView;
  var stateProp = panelId === 'layer' ? 'layerPanelListView' : panelId === 'filter' ? 'filterPanelListView' : null;

  if (!stateProp || state[stateProp] === listView) {
    return state;
  }

  return _objectSpread(_objectSpread({}, state), {}, (0, _defineProperty2["default"])({}, stateProp, listView));
};

exports.togglePanelListViewUpdater = togglePanelListViewUpdater;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zcmMvdWktc3RhdGUtdXBkYXRlcnMudHMiXSwibmFtZXMiOlsiREVGQVVMVF9BQ1RJVkVfU0lERV9QQU5FTCIsIkRFRkFVTFRfTU9EQUwiLCJBRERfREFUQV9JRCIsInVpU3RhdGVVcGRhdGVycyIsIkRFRkFVTFRfTUFQX0NPTlRST0xTX0ZFQVRVUkVTIiwic2hvdyIsImFjdGl2ZSIsImRpc2FibGVDbG9zZSIsImFjdGl2ZU1hcEluZGV4IiwiREVGQVVMVF9NQVBfQ09OVFJPTFMiLCJPYmplY3QiLCJrZXlzIiwiTUFQX0NPTlRST0xTIiwicmVkdWNlIiwiZmluYWwiLCJjdXJyZW50IiwiREVGQVVMVF9FWFBPUlRfSU1BR0UiLCJyYXRpbyIsIkVYUE9SVF9JTUdfUkFUSU9TIiwiU0NSRUVOIiwicmVzb2x1dGlvbiIsIlJFU09MVVRJT05TIiwiT05FX1giLCJsZWdlbmQiLCJtYXBIIiwibWFwVyIsImltYWdlU2l6ZSIsInpvb21PZmZzZXQiLCJzY2FsZSIsImltYWdlVyIsImltYWdlSCIsImNlbnRlciIsImltYWdlRGF0YVVyaSIsImV4cG9ydGluZyIsInByb2Nlc3NpbmciLCJlcnJvciIsIkRFRkFVTFRfTE9BRF9GSUxFUyIsImZpbGVMb2FkaW5nIiwiREVGQVVMVF9FWFBPUlRfREFUQSIsInNlbGVjdGVkRGF0YXNldCIsImRhdGFUeXBlIiwiRVhQT1JUX0RBVEFfVFlQRSIsIkNTViIsImZpbHRlcmVkIiwiREVGQVVMVF9OT1RJRklDQVRJT05TIiwiREVGQVVMVF9FWFBPUlRfSFRNTCIsImV4cG9ydE1hcGJveEFjY2Vzc1Rva2VuIiwidXNlck1hcGJveFRva2VuIiwibW9kZSIsIkVYUE9SVF9IVE1MX01BUF9NT0RFUyIsIlJFQUQiLCJERUZBVUxUX0VYUE9SVF9KU09OIiwiaGFzRGF0YSIsIkRFRkFVTFRfRVhQT1JUX01BUCIsIkVYUE9SVF9NQVBfRk9STUFUUyIsIkhUTUwiLCJKU09OIiwiSU5JVElBTF9VSV9TVEFURSIsInJlYWRPbmx5IiwiYWN0aXZlU2lkZVBhbmVsIiwiY3VycmVudE1vZGFsIiwiZGF0YXNldEtleVRvUmVtb3ZlIiwidmlzaWJsZURyb3Bkb3duIiwiZXhwb3J0SW1hZ2UiLCJleHBvcnREYXRhIiwiZXhwb3J0TWFwIiwibWFwQ29udHJvbHMiLCJub3RpZmljYXRpb25zIiwibG9hZEZpbGVzIiwibG9jYWxlIiwiTE9DQUxFX0NPREVTIiwiZW4iLCJsYXllclBhbmVsTGlzdFZpZXciLCJmaWx0ZXJQYW5lbExpc3RWaWV3IiwiaXNTaWRlUGFuZWxDbG9zZUJ1dHRvblZpc2libGUiLCJpbml0VWlTdGF0ZVVwZGF0ZXIiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJpbml0aWFsVWlTdGF0ZSIsInRvZ2dsZVNpZGVQYW5lbFVwZGF0ZXIiLCJpZCIsInRvZ2dsZU1vZGFsVXBkYXRlciIsInNob3dFeHBvcnREcm9wZG93blVwZGF0ZXIiLCJoaWRlRXhwb3J0RHJvcGRvd25VcGRhdGVyIiwidG9nZ2xlU2lkZVBhbmVsQ2xvc2VCdXR0b25VcGRhdGVyIiwidG9nZ2xlTWFwQ29udHJvbFVwZGF0ZXIiLCJwYW5lbElkIiwiaW5kZXgiLCJzZXRNYXBDb250cm9sVmlzaWJpbGl0eVVwZGF0ZXIiLCJCb29sZWFuIiwib3BlbkRlbGV0ZU1vZGFsVXBkYXRlciIsIkRFTEVURV9EQVRBX0lEIiwic2V0RXhwb3J0SW1hZ2VTZXR0aW5nVXBkYXRlciIsIm5ld1NldHRpbmciLCJ1cGRhdGVkIiwic2V0RXhwb3J0SW1hZ2VEYXRhVXJpVXBkYXRlciIsImRhdGFVcmkiLCJzZXRFeHBvcnRJbWFnZUVycm9yVXBkYXRlciIsImNsZWFudXBFeHBvcnRJbWFnZVVwZGF0ZXIiLCJzdGFydEV4cG9ydGluZ0ltYWdlVXBkYXRlciIsIm9wdGlvbnMiLCJpbWFnZVNldHRpbmdzIiwic2V0RXhwb3J0U2VsZWN0ZWREYXRhc2V0VXBkYXRlciIsImRhdGFzZXQiLCJzZXRFeHBvcnREYXRhVHlwZVVwZGF0ZXIiLCJzZXRFeHBvcnRGaWx0ZXJlZFVwZGF0ZXIiLCJzZXRFeHBvcnREYXRhVXBkYXRlciIsInNldFVzZXJNYXBib3hBY2Nlc3NUb2tlblVwZGF0ZXIiLCJzZXRFeHBvcnRNYXBGb3JtYXRVcGRhdGVyIiwiZm9ybWF0Iiwic2V0RXhwb3J0TWFwSFRNTE1vZGVVcGRhdGVyIiwiYWRkTm90aWZpY2F0aW9uVXBkYXRlciIsIm9sZE5vdGlmaWNhdGlvbnMiLCJwYXlsb2FkSWQiLCJub3RpZmljYXRpb25Ub1VwZGF0ZSIsImZpbmQiLCJuIiwibWFwIiwiY291bnQiLCJyZW1vdmVOb3RpZmljYXRpb25VcGRhdGVyIiwiZmlsdGVyIiwibG9hZEZpbGVzVXBkYXRlciIsImxvYWRGaWxlc1N1Y2Nlc3NVcGRhdGVyIiwibG9hZEZpbGVzRXJyVXBkYXRlciIsIm1lc3NhZ2UiLCJ0b3BpYyIsIkRFRkFVTFRfTk9USUZJQ0FUSU9OX1RPUElDUyIsImdsb2JhbCIsInRvZ2dsZVNwbGl0TWFwVXBkYXRlciIsImVudHJpZXMiLCJhY2MiLCJlbnRyeSIsInNob3dEYXRhc2V0VGFibGVVcGRhdGVyIiwiREFUQV9UQUJMRV9JRCIsInNldExvY2FsZVVwZGF0ZXIiLCJ0b2dnbGVQYW5lbExpc3RWaWV3VXBkYXRlciIsImxpc3RWaWV3Iiwic3RhdGVQcm9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBb0JBOztBQWFBOztBQUNBOztBQUNBOzs7Ozs7OztBQWtCTyxJQUFNQSx5QkFBeUIsR0FBRyxPQUFsQzs7QUFDQSxJQUFNQyxhQUFhLEdBQUdDLHNCQUF0QjtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOzs7QUFDQSxJQUFNQyxlQUFlLEdBQUcsSUFBeEI7QUFD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QURBLEdBRUEsSUFMTjs7QUFNQSxNQUFJLENBQUNtRCxTQUFELElBQWM5RCxLQUFLLENBQUM4RCxTQUFELENBQUwsS0FBcUJELFFBQXZDLEVBQWlEO0FBQy9DLFdBQU83RCxLQUFQO0FBQ0Q7O0FBQ0QseUNBQ0tBLEtBREwsNENBRUc4RCxTQUZILEVBRWVELFFBRmY7QUFJRCxDQWpCTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7XG4gIEFERF9EQVRBX0lELFxuICBEQVRBX1RBQkxFX0lELFxuICBERUZBVUxUX05PVElGSUNBVElPTl9UT1BJQ1MsXG4gIERFTEVURV9EQVRBX0lELFxuICBFWFBPUlRfREFUQV9UWVBFLFxuICBFWFBPUlRfSFRNTF9NQVBfTU9ERVMsXG4gIEVYUE9SVF9JTUdfUkFUSU9TLFxuICBFWFBPUlRfTUFQX0ZPUk1BVFMsXG4gIFJFU09MVVRJT05TLFxuICBNQVBfQ09OVFJPTFMsXG4gIEV4cG9ydEltYWdlXG59IGZyb20gJ0BrZXBsZXIuZ2wvY29uc3RhbnRzJztcbmltcG9ydCB7TE9DQUxFX0NPREVTfSBmcm9tICdAa2VwbGVyLmdsL2xvY2FsaXphdGlvbic7XG5pbXBvcnQge2NyZWF0ZU5vdGlmaWNhdGlvbiwgZXJyb3JOb3RpZmljYXRpb24sIGNhbGN1bGF0ZUV4cG9ydEltYWdlU2l6ZX0gZnJvbSAnQGtlcGxlci5nbC91dGlscyc7XG5pbXBvcnQge3BheWxvYWRfLCBhcHBseV8sIGNvbXBvc2VffSBmcm9tICcuL2NvbXBvc2VyLWhlbHBlcnMnO1xuXG5pbXBvcnQge1xuICBBY3Rpb25UeXBlcyxcbiAgS2VwbGVyR2xJbml0UGF5bG9hZCxcbiAgTG9hZEZpbGVzRXJyVXBkYXRlckFjdGlvbixcbiAgVUlTdGF0ZUFjdGlvbnNcbn0gZnJvbSAnQGtlcGxlci5nbC9hY3Rpb25zJztcbmltcG9ydCB7XG4gIEV4cG9ydERhdGEsXG4gIEV4cG9ydEh0bWwsXG4gIEV4cG9ydEpzb24sXG4gIEV4cG9ydE1hcCxcbiAgTWFwQ29udHJvbCxcbiAgTWFwQ29udHJvbHMsXG4gIFVpU3RhdGVcbn0gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0FDVElWRV9TSURFX1BBTkVMID0gJ2xheWVyJztcbmV4cG9ydCBjb25zdCBERUZBVUxUX01PREFMID0gQUREX0RBVEFfSUQ7XG5cbi8qKlxuICogVXBkYXRlcnMgZm9yIGB1aVN0YXRlYCByZWR1Y2VyLiBDYW4gYmUgdXNlZCBpbiB5b3VyIHJvb3QgcmVkdWNlciB0byBkaXJlY3RseSBtb2RpZnkga2VwbGVyLmdsJ3Mgc3RhdGUuXG4gKiBSZWFkIG1vcmUgYWJvdXQgW1VzaW5nIHVwZGF0ZXJzXSguLi9hZHZhbmNlZC11c2FnZS91c2luZy11cGRhdGVycy5tZClcbiAqXG4gKiBAcHVibGljXG4gKiBAZXhhbXBsZVxuICpcbiAqIGltcG9ydCBrZXBsZXJHbFJlZHVjZXIsIHt1aVN0YXRlVXBkYXRlcnN9IGZyb20gJ2tlcGxlci5nbC9yZWR1Y2Vycyc7XG4gKiAvLyBSb290IFJlZHVjZXJcbiAqIGNvbnN0IHJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAqICBrZXBsZXJHbDoga2VwbGVyR2xSZWR1Y2VyLFxuICogIGFwcDogYXBwUmVkdWNlclxuICogfSk7XG4gKlxuICogY29uc3QgY29tcG9zZWRSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAqICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gKiAgICAvLyBjbGljayBidXR0b24gdG8gY2xvc2Ugc2lkZSBwYW5lbFxuICogICAgY2FzZSAnQ0xJQ0tfQlVUVE9OJzpcbiAqICAgICAgcmV0dXJuIHtcbiAqICAgICAgICAuLi5zdGF0ZSxcbiAqICAgICAgICBrZXBsZXJHbDoge1xuICogICAgICAgICAgLi4uc3RhdGUua2VwbGVyR2wsXG4gKiAgICAgICAgICBmb286IHtcbiAqICAgICAgICAgICAgIC4uLnN0YXRlLmtlcGxlckdsLmZvbyxcbiAqICAgICAgICAgICAgIHVpU3RhdGU6IHVpU3RhdGVVcGRhdGVycy50b2dnbGVTaWRlUGFuZWxVcGRhdGVyKFxuICogICAgICAgICAgICAgICB1aVN0YXRlLCB7cGF5bG9hZDogbnVsbH1cbiAqICAgICAgICAgICAgIClcbiAqICAgICAgICAgIH1cbiAqICAgICAgICB9XG4gKiAgICAgIH07XG4gKiAgfVxuICogIHJldHVybiByZWR1Y2VycyhzdGF0ZSwgYWN0aW9uKTtcbiAqIH07XG4gKlxuICogZXhwb3J0IGRlZmF1bHQgY29tcG9zZWRSZWR1Y2VyO1xuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuLy8gQHRzLWlnbm9yZVxuY29uc3QgdWlTdGF0ZVVwZGF0ZXJzID0gbnVsbDtcbi8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuY29uc3QgREVGQVVMVF9NQVBfQ09OVFJPTFNfRkVBVFVSRVM6IE1hcENvbnRyb2wgPSB7XG4gIHNob3c6IHRydWUsXG4gIGFjdGl2ZTogZmFsc2UsXG4gIGRpc2FibGVDbG9zZTogZmFsc2UsXG4gIC8vIGRlZmluZXMgd2hpY2ggbWFwIGluZGV4IHVzZXJzIGFyZSBpbnRlcmFjdGluZyB3aXRoICh0aHJvdWdoIG1hcCBjb250cm9scylcbiAgYWN0aXZlTWFwSW5kZXg6IDBcbn07XG5cbi8qKlxuICogQSBsaXN0IG9mIG1hcCBjb250cm9sIHZpc2liaWxpdHkgYW5kIHdoZXRoZXIgaXMgaXQgYWN0aXZlLlxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQGNvbnN0YW50XG4gKiBAcHJvcGVydHkgdmlzaWJsZUxheWVycyBEZWZhdWx0OiBge3Nob3c6IHRydWUsIGFjdGl2ZTogZmFsc2V9YFxuICogQHByb3BlcnR5IG1hcExlZ2VuZCBEZWZhdWx0OiBge3Nob3c6IHRydWUsIGFjdGl2ZTogZmFsc2V9YFxuICogQHByb3BlcnR5IHRvZ2dsZTNkIERlZmF1bHQ6IGB7c2hvdzogdHJ1ZX1gXG4gKiBAcHJvcGVydHkgc3BsaXRNYXAgRGVmYXVsdDogYHtzaG93OiB0cnVlfWBcbiAqIEBwcm9wZXJ0eSBtYXBEcmF3IERlZmF1bHQ6IGB7c2hvdzogdHJ1ZSwgYWN0aXZlOiBmYWxzZX1gXG4gKiBAcHJvcGVydHkgbWFwTG9jYWxlIERlZmF1bHQ6IGB7c2hvdzogZmFsc2UsIGFjdGl2ZTogZmFsc2V9YFxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9NQVBfQ09OVFJPTFM6IE1hcENvbnRyb2xzID0gKE9iamVjdC5rZXlzKE1BUF9DT05UUk9MUykgYXMgQXJyYXk8XG4gIGtleW9mIHR5cGVvZiBNQVBfQ09OVFJPTFNcbj4pLnJlZHVjZShcbiAgKGZpbmFsLCBjdXJyZW50KSA9PiAoe1xuICAgIC4uLmZpbmFsLFxuICAgIFtjdXJyZW50XTogREVGQVVMVF9NQVBfQ09OVFJPTFNfRkVBVFVSRVNcbiAgfSksXG4gIHt9IGFzIE1hcENvbnRyb2xzXG4pO1xuXG4vKipcbiAqIERlZmF1bHQgaW1hZ2UgZXhwb3J0IGNvbmZpZ1xuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQGNvbnN0YW50XG4gKiBAcHJvcGVydHkgcmF0aW8gRGVmYXVsdDogYCdTQ1JFRU4nYCxcbiAqIEBwcm9wZXJ0eSByZXNvbHV0aW9uIERlZmF1bHQ6IGAnT05FX1gnYCxcbiAqIEBwcm9wZXJ0eSBsZWdlbmQgRGVmYXVsdDogYGZhbHNlYCxcbiAqIEBwcm9wZXJ0eSBtYXBIIERlZmF1bHQ6IDAsXG4gKiBAcHJvcGVydHkgbWFwVyBEZWZhdWx0OiAwLFxuICogQHByb3BlcnR5IGltYWdlU2l6ZSBEZWZhdWx0OiB7em9vbU9mZnNldDogMCwgc2NhbGU6IDEsIGltYWdlVzogMCwgaW1hZ2VIOiAwfSxcbiAqIEBwcm9wZXJ0eSBpbWFnZURhdGFVcmkgRGVmYXVsdDogYCcnYCxcbiAqIEBwcm9wZXJ0eSBleHBvcnRpbmcgRGVmYXVsdDogYGZhbHNlYFxuICogQHByb3BlcnR5IGVycm9yIERlZmF1bHQ6IGBmYWxzZWBcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVhQT1JUX0lNQUdFOiBFeHBvcnRJbWFnZSA9IHtcbiAgLy8gdXNlciBvcHRpb25zXG4gIHJhdGlvOiBFWFBPUlRfSU1HX1JBVElPUy5TQ1JFRU4sXG4gIHJlc29sdXRpb246IFJFU09MVVRJT05TLk9ORV9YLFxuICBsZWdlbmQ6IGZhbHNlLFxuICBtYXBIOiAwLFxuICBtYXBXOiAwLFxuICBpbWFnZVNpemU6IHtcbiAgICB6b29tT2Zmc2V0OiAwLFxuICAgIHNjYWxlOiAxLFxuICAgIGltYWdlVzogMCxcbiAgICBpbWFnZUg6IDBcbiAgfSxcbiAgLy8gd2hlbiB0aGlzIGlzIHNldCB0byB0cnVlLCB0aGUgbW9jayBtYXAgdmlld3BvcnQgd2lsbCBtb3ZlIHRvIHRoZSBjZW50ZXIgb2YgZGF0YVxuICBjZW50ZXI6IGZhbHNlLFxuICAvLyBleHBvcnRpbmcgc3RhdGVcbiAgaW1hZ2VEYXRhVXJpOiAnJyxcbiAgLy8gZXhwb3J0aW5nOiB1c2VkIHRvIGF0dGFjaCBwbG90LWNvbnRhaW5lciB0byBkb21cbiAgZXhwb3J0aW5nOiBmYWxzZSxcbiAgLy8gcHJvY2Vzc2luZzogdXNlZCBhcyBsb2FkaW5nIGluZGljYXRvciB3aGVuIGV4cG9ydCBpbWFnZSBpcyBiZWluZyBwcm9kdWNlZFxuICBwcm9jZXNzaW5nOiBmYWxzZSxcbiAgZXJyb3I6IGZhbHNlXG59O1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9MT0FEX0ZJTEVTID0ge1xuICBmaWxlTG9hZGluZzogZmFsc2Vcbn07XG5cbi8qKlxuICogRGVmYXVsdCBpbml0aWFsIGBleHBvcnREYXRhYCBzZXR0aW5nc1xuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQGNvbnN0YW50XG4gKiBAcHJvcGVydHkgc2VsZWN0ZWREYXRhc2V0IERlZmF1bHQ6IGAnJ2AsXG4gKiBAcHJvcGVydHkgZGF0YVR5cGUgRGVmYXVsdDogYCdjc3YnYCxcbiAqIEBwcm9wZXJ0eSBmaWx0ZXJlZCBEZWZhdWx0OiBgdHJ1ZWAsXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0VYUE9SVF9EQVRBOiBFeHBvcnREYXRhID0ge1xuICBzZWxlY3RlZERhdGFzZXQ6ICcnLFxuICBkYXRhVHlwZTogRVhQT1JUX0RBVEFfVFlQRS5DU1YsXG4gIGZpbHRlcmVkOiB0cnVlXG59O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9OT1RJRklDQVRJT05TID0gW107XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAcHJvcGVydHkgZXhwb3J0TWFwYm94QWNjZXNzVG9rZW4gLSBEZWZhdWx0OiBudWxsLCB0aGlzIGlzIHVzZWQgd2hlbiB3ZSBwcm92aWRlIGEgZGVmYXVsdCBtYXBib3ggdG9rZW4gZm9yIHVzZXJzIHRvIHRha2UgYWR2YW50YWdlIG9mXG4gKiBAcHJvcGVydHkgdXNlck1hcGJveFRva2VuIC0gRGVmYXVsdDogJycsIG1hcGJveCB0b2tlbiBwcm92aWRlZCBieSB1c2VyIHRocm91Z2ggaW5wdXQgZmllbGRcbiAqIEBwcm9wZXJ0eSBtb2RlIC0gRGVmYXVsdDogJ1JFQUQnLCByZWFkIG9ubHkgb3IgZWRpdGFibGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVhQT1JUX0hUTUw6IEV4cG9ydEh0bWwgPSB7XG4gIGV4cG9ydE1hcGJveEFjY2Vzc1Rva2VuOiBudWxsLFxuICB1c2VyTWFwYm94VG9rZW46ICcnLFxuICBtb2RlOiBFWFBPUlRfSFRNTF9NQVBfTU9ERVMuUkVBRFxufTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBwcm9wZXJ0eSBoYXNEYXRhIC0gRGVmYXVsdDogJ3RydWUnLFxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9FWFBPUlRfSlNPTjogRXhwb3J0SnNvbiA9IHtcbiAgaGFzRGF0YTogdHJ1ZVxufTtcblxuLyoqXG4gKiBFeHBvcnQgTWFwIENvbmZpZ1xuICogQGNvbnN0YW50XG4gKiBAcHJvcGVydHkgSFRNTCAtIERlZmF1bHQ6ICdERUZBVUxUX0VYUE9SVF9IVE1MJyxcbiAqIEBwcm9wZXJ0eSBKU09OIC0gRGVmYXVsdDogJ0RFRkFVTFRfRVhQT1JUX0pTT04nLFxuICogQHByb3BlcnR5IGZvcm1hdCAtIERlZmF1bHQ6ICdIVE1MJyxcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVhQT1JUX01BUDogRXhwb3J0TWFwID0ge1xuICBbRVhQT1JUX01BUF9GT1JNQVRTLkhUTUxdOiBERUZBVUxUX0VYUE9SVF9IVE1MLFxuICBbRVhQT1JUX01BUF9GT1JNQVRTLkpTT05dOiBERUZBVUxUX0VYUE9SVF9KU09OLFxuICBmb3JtYXQ6IEVYUE9SVF9NQVBfRk9STUFUUy5IVE1MXG59O1xuXG4vKipcbiAqIERlZmF1bHQgaW5pdGlhbCBgdWlTdGF0ZWBcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBjb25zdGFudFxuICogQHByb3BlcnR5IHJlYWRPbmx5IERlZmF1bHQ6IGBmYWxzZWBcbiAqIEBwcm9wZXJ0eSBhY3RpdmVTaWRlUGFuZWwgRGVmYXVsdDogYCdsYXllcidgXG4gKiBAcHJvcGVydHkgY3VycmVudE1vZGFsIERlZmF1bHQ6IGAnYWRkRGF0YSdgXG4gKiBAcHJvcGVydHkgZGF0YXNldEtleVRvUmVtb3ZlIERlZmF1bHQ6IGBudWxsYFxuICogQHByb3BlcnR5IHZpc2libGVEcm9wZG93biBEZWZhdWx0OiBgbnVsbGBcbiAqIEBwcm9wZXJ0eSBleHBvcnRJbWFnZSBEZWZhdWx0OiBbYERFRkFVTFRfRVhQT1JUX0lNQUdFYF0oI2RlZmF1bHRfZXhwb3J0X2ltYWdlKVxuICogQHByb3BlcnR5IGV4cG9ydERhdGEgRGVmYXVsdDogW2BERUZBVUxUX0VYUE9SVF9EQVRBYF0oI2RlZmF1bHRfZXhwb3J0X2RhdGEpXG4gKiBAcHJvcGVydHkgZXhwb3J0TWFwIERlZmF1bHQ6IFtgREVGQVVMVF9FWFBPUlRfTUFQYF0oI2RlZmF1bHRfZXhwb3J0X21hcClcbiAqIEBwcm9wZXJ0eSBtYXBDb250cm9scyBEZWZhdWx0OiBbYERFRkFVTFRfTUFQX0NPTlRST0xTYF0oI2RlZmF1bHRfbWFwX2NvbnRyb2xzKVxuICogQHByb3BlcnR5IG5vdGlmaWNhdGlvbnMgRGVmYXVsdDogYFtdYFxuICogQHByb3BlcnR5IG5vdGlmaWNhdGlvbnMgRGVmYXVsdDogYFtdYFxuICogQHByb3BlcnR5IGxvYWRGaWxlc1xuICogQHByb3BlcnR5IGlzU2lkZVBhbmVsQ2xvc2VCdXR0b25WaXNpYmxlIERlZmF1bHQ6IGB0cnVlYFxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgSU5JVElBTF9VSV9TVEFURTogVWlTdGF0ZSA9IHtcbiAgcmVhZE9ubHk6IGZhbHNlLFxuICBhY3RpdmVTaWRlUGFuZWw6IERFRkFVTFRfQUNUSVZFX1NJREVfUEFORUwsXG4gIGN1cnJlbnRNb2RhbDogREVGQVVMVF9NT0RBTCxcbiAgZGF0YXNldEtleVRvUmVtb3ZlOiBudWxsLFxuICB2aXNpYmxlRHJvcGRvd246IG51bGwsXG4gIC8vIGV4cG9ydCBpbWFnZSBtb2RhbCB1aVxuICBleHBvcnRJbWFnZTogREVGQVVMVF9FWFBPUlRfSU1BR0UsXG4gIC8vIGV4cG9ydCBkYXRhIG1vZGFsIHVpXG4gIGV4cG9ydERhdGE6IERFRkFVTFRfRVhQT1JUX0RBVEEsXG4gIC8vIGh0bWwgZXhwb3J0XG4gIGV4cG9ydE1hcDogREVGQVVMVF9FWFBPUlRfTUFQLFxuICAvLyBtYXAgY29udHJvbCBwYW5lbHNcbiAgbWFwQ29udHJvbHM6IERFRkFVTFRfTUFQX0NPTlRST0xTLFxuICAvLyB1aSBub3RpZmljYXRpb25zXG4gIG5vdGlmaWNhdGlvbnM6IERFRkFVTFRfTk9USUZJQ0FUSU9OUyxcbiAgLy8gbG9hZCBmaWxlc1xuICBsb2FkRmlsZXM6IERFRkFVTFRfTE9BRF9GSUxFUyxcbiAgLy8gTG9jYWxlIG9mIHRoZSBVSVxuICBsb2NhbGU6IExPQ0FMRV9DT0RFUy5lbixcbiAgbGF5ZXJQYW5lbExpc3RWaWV3OiAnbGlzdCcsXG4gIGZpbHRlclBhbmVsTGlzdFZpZXc6ICdsaXN0JyxcbiAgaXNTaWRlUGFuZWxDbG9zZUJ1dHRvblZpc2libGU6IHRydWVcbn07XG5cbi8qIFVwZGF0ZXJzICovXG4vKipcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqL1xuZXhwb3J0IGNvbnN0IGluaXRVaVN0YXRlVXBkYXRlciA9IChcbiAgc3RhdGU6IFVpU3RhdGUsXG4gIGFjdGlvbjoge1xuICAgIHR5cGU/OiB0eXBlb2YgQWN0aW9uVHlwZXNbJ0lOSVQnXTtcbiAgICBwYXlsb2FkOiBLZXBsZXJHbEluaXRQYXlsb2FkO1xuICB9XG4pOiBVaVN0YXRlID0+ICh7XG4gIC4uLnN0YXRlLFxuICAuLi4oYWN0aW9uLnBheWxvYWQgfHwge30pLmluaXRpYWxVaVN0YXRlXG59KTtcblxuLyoqXG4gKiBUb2dnbGUgYWN0aXZlIHNpZGUgcGFuZWxcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEBwYXJhbSBhY3Rpb25cbiAqIEBwYXJhbSBhY3Rpb24ucGF5bG9hZCBpZCBvZiBzaWRlIHBhbmVsIHRvIGJlIHNob3duLCBvbmUgb2YgYGxheWVyYCwgYGZpbHRlcmAsIGBpbnRlcmFjdGlvbmAsIGBtYXBgLiBjbG9zZSBzaWRlIHBhbmVsIGlmIGBudWxsYFxuICogQHJldHVybnMgbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVTaWRlUGFuZWxVcGRhdGVyID0gKFxuICBzdGF0ZTogVWlTdGF0ZSxcbiAge3BheWxvYWQ6IGlkfTogVUlTdGF0ZUFjdGlvbnMuVG9nZ2xlU2lkZVBhbmVsVXBkYXRlckFjdGlvblxuKTogVWlTdGF0ZSA9PiB7XG4gIHJldHVybiBpZCA9PT0gc3RhdGUuYWN0aXZlU2lkZVBhbmVsXG4gICAgPyBzdGF0ZVxuICAgIDoge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWN0aXZlU2lkZVBhbmVsOiBpZFxuICAgICAgfTtcbn07XG5cbi8qKlxuICogU2hvdyBhbmQgaGlkZSBtb2RhbCBkaWFsb2dcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEBwYXJhbSBhY3Rpb25cbiAqIEBwYXJhbWFjdGlvbi5wYXlsb2FkIGlkIG9mIG1vZGFsIHRvIGJlIHNob3duLCBudWxsIHRvIGhpZGUgbW9kYWxzLiBPbmUgb2Y6XG4gKiAgLSBbYERBVEFfVEFCTEVfSURgXSguLi9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncy5tZCNkYXRhX3RhYmxlX2lkKVxuICogIC0gW2BERUxFVEVfREFUQV9JRGBdKC4uL2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzLm1kI2RlbGV0ZV9kYXRhX2lkKVxuICogIC0gW2BBRERfREFUQV9JRGBdKC4uL2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzLm1kI2FkZF9kYXRhX2lkKVxuICogIC0gW2BFWFBPUlRfSU1BR0VfSURgXSguLi9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncy5tZCNleHBvcnRfaW1hZ2VfaWQpXG4gKiAgLSBbYEVYUE9SVF9EQVRBX0lEYF0oLi4vY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MubWQjZXhwb3J0X2RhdGFfaWQpXG4gKiAgLSBbYEFERF9NQVBfU1RZTEVfSURgXSguLi9jb25zdGFudHMvZGVmYXVsdC1zZXR0aW5ncy5tZCNhZGRfbWFwX3N0eWxlX2lkKVxuICogQHJldHVybnMgbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVNb2RhbFVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBVaVN0YXRlLFxuICB7cGF5bG9hZDogaWR9OiBVSVN0YXRlQWN0aW9ucy5Ub2dnbGVNb2RhbFVwZGF0ZXJBY3Rpb25cbik6IFVpU3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGN1cnJlbnRNb2RhbDogaWRcbn0pO1xuXG4vKipcbiAqIEhpZGUgYW5kIHNob3cgc2lkZSBwYW5lbCBoZWFkZXIgZHJvcGRvd24sIGFjdGl2YXRlZCBieSBjbGlja2luZyB0aGUgc2hhcmUgbGluayBvbiB0b3Agb2YgdGhlIHNpZGUgcGFuZWxcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNob3dFeHBvcnREcm9wZG93blVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBVaVN0YXRlLFxuICB7cGF5bG9hZDogaWR9OiBVSVN0YXRlQWN0aW9ucy5TaG93RXhwb3J0RHJvcGRvd25VcGRhdGVyQWN0aW9uXG4pOiBVaVN0YXRlID0+ICh7XG4gIC4uLnN0YXRlLFxuICB2aXNpYmxlRHJvcGRvd246IGlkXG59KTtcblxuLyoqXG4gKiBIaWRlIHNpZGUgcGFuZWwgaGVhZGVyIGRyb3Bkb3duLCBhY3RpdmF0ZWQgYnkgY2xpY2tpbmcgdGhlIHNoYXJlIGxpbmsgb24gdG9wIG9mIHRoZSBzaWRlIHBhbmVsXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBoaWRlRXhwb3J0RHJvcGRvd25VcGRhdGVyID0gKHN0YXRlOiBVaVN0YXRlKTogVWlTdGF0ZSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgdmlzaWJsZURyb3Bkb3duOiBudWxsXG59KTtcblxuLyoqXG4gKiBUb2dnbGUgc2lkZSBwYW5lbCBjbG9zZSBidXR0b24gb24gdG9wIGxlZnQgb2YgdGhlIHNpZGUgcGFuZWxcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZVNpZGVQYW5lbENsb3NlQnV0dG9uVXBkYXRlciA9IChcbiAgc3RhdGU6IFVpU3RhdGUsXG4gIHtwYXlsb2FkOiB7c2hvd319OiBVSVN0YXRlQWN0aW9ucy5Ub2dnbGVTaWRlUGFuZWxDbG9zZUJ1dHRvblVwZGF0ZXJBY3Rpb25cbik6IFVpU3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGlzU2lkZVBhbmVsQ2xvc2VCdXR0b25WaXNpYmxlOiBzaG93XG59KTtcblxuLyoqXG4gKiBUb2dnbGUgYWN0aXZlIG1hcCBjb250cm9sIHBhbmVsXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcGFyYW0gYWN0aW9uIGFjdGlvblxuICogQHBhcmFtIGFjdGlvbi5wYXlsb2FkIG1hcCBjb250cm9sIHBhbmVsIGlkLCBvbmUgb2YgdGhlIGtleXMgb2Y6IFtgREVGQVVMVF9NQVBfQ09OVFJPTFNgXSgjZGVmYXVsdF9tYXBfY29udHJvbHMpXG4gKiBAcmV0dXJucyBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHRvZ2dsZU1hcENvbnRyb2xVcGRhdGVyID0gKFxuICBzdGF0ZTogVWlTdGF0ZSxcbiAge3BheWxvYWQ6IHtwYW5lbElkLCBpbmRleCA9IDB9fTogVUlTdGF0ZUFjdGlvbnMuVG9nZ2xlTWFwQ29udHJvbFVwZGF0ZXJBY3Rpb25cbik6IFVpU3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIG1hcENvbnRyb2xzOiB7XG4gICAgLi4uc3RhdGUubWFwQ29udHJvbHMsXG4gICAgW3BhbmVsSWRdOiB7XG4gICAgICAuLi5zdGF0ZS5tYXBDb250cm9sc1twYW5lbElkXSxcbiAgICAgIGFjdGl2ZTogIXN0YXRlLm1hcENvbnRyb2xzW3BhbmVsSWRdLmFjdGl2ZSxcbiAgICAgIGFjdGl2ZU1hcEluZGV4OiBpbmRleFxuICAgIH1cbiAgfVxufSk7XG5cbi8qKlxuICogVG9nZ2xlIG1hcCBjb250cm9sIHZpc2liaWxpdHlcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEBwYXJhbSBhY3Rpb24gYWN0aW9uXG4gKiBAcGFyYW0gYWN0aW9uLnBheWxvYWQgbWFwIGNvbnRyb2wgcGFuZWwgaWQsIG9uZSBvZiB0aGUga2V5cyBvZjogW2BERUZBVUxUX01BUF9DT05UUk9MU2BdKCNkZWZhdWx0X21hcF9jb250cm9scylcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2V0TWFwQ29udHJvbFZpc2liaWxpdHlVcGRhdGVyID0gKFxuICBzdGF0ZTogVWlTdGF0ZSxcbiAge3BheWxvYWQ6IHtwYW5lbElkLCBzaG93fX06IFVJU3RhdGVBY3Rpb25zLnNldE1hcENvbnRyb2xWaXNpYmlsaXR5VXBkYXRlckFjdGlvblxuKTogVWlTdGF0ZSA9PiB7XG4gIGlmICghc3RhdGUubWFwQ29udHJvbHM/LltwYW5lbElkXSkge1xuICAgIHJldHVybiBzdGF0ZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgbWFwQ29udHJvbHM6IHtcbiAgICAgIC4uLnN0YXRlLm1hcENvbnRyb2xzLFxuICAgICAgW3BhbmVsSWRdOiB7XG4gICAgICAgIC4uLnN0YXRlLm1hcENvbnRyb2xzW3BhbmVsSWRdLFxuICAgICAgICBzaG93OiBCb29sZWFuKHNob3cpXG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuLyoqXG4gKiBUb2dnbGUgYWN0aXZlIG1hcCBjb250cm9sIHBhbmVsXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcGFyYW0gYWN0aW9uXG4gKiBAcGFyYW0gYWN0aW9uLnBheWxvYWQgZGF0YXNldCBpZFxuICogQHJldHVybnMgbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBvcGVuRGVsZXRlTW9kYWxVcGRhdGVyID0gKFxuICBzdGF0ZTogVWlTdGF0ZSxcbiAge3BheWxvYWQ6IGRhdGFzZXRLZXlUb1JlbW92ZX06IFVJU3RhdGVBY3Rpb25zLk9wZW5EZWxldGVNb2RhbFVwZGF0ZXJBY3Rpb25cbik6IFVpU3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGN1cnJlbnRNb2RhbDogREVMRVRFX0RBVEFfSUQsXG4gIGRhdGFzZXRLZXlUb1JlbW92ZVxufSk7XG5cbi8qKlxuICogU2V0IGBleHBvcnRJbWFnZS5sZWdlbmRgIHRvIGB0cnVlYCBvciBgZmFsc2VgXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcmV0dXJucyBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEV4cG9ydEltYWdlU2V0dGluZ1VwZGF0ZXIgPSAoXG4gIHN0YXRlOiBVaVN0YXRlLFxuICB7cGF5bG9hZDogbmV3U2V0dGluZ306IFVJU3RhdGVBY3Rpb25zLlNldEV4cG9ydEltYWdlU2V0dGluZ1VwZGF0ZXJBY3Rpb25cbik6IFVpU3RhdGUgPT4ge1xuICBjb25zdCB1cGRhdGVkID0gey4uLnN0YXRlLmV4cG9ydEltYWdlLCAuLi5uZXdTZXR0aW5nfTtcbiAgY29uc3QgaW1hZ2VTaXplID0gY2FsY3VsYXRlRXhwb3J0SW1hZ2VTaXplKHVwZGF0ZWQpIHx8IHN0YXRlLmV4cG9ydEltYWdlLmltYWdlU2l6ZTtcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGV4cG9ydEltYWdlOiB7XG4gICAgICAuLi51cGRhdGVkLFxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgLy8gVE9ETzogY2FsY3VsYXRlRXhwb3J0SW1hZ2VTaXplIGRvZXMgbm90IHJldHVybiBpbWFnZVNpemUuem9vbU9mZnNldCxcbiAgICAgIC8vIGRvIHdlIG5lZWQgdGFrZSB0aGlzIHZhbHVlIGZyb20gY3VycmVudCBzdGF0ZSwgb3IgcmV0dXJuIGRlZmF1bCB2YWx1ZSA9IDBcbiAgICAgIGltYWdlU2l6ZVxuICAgIH1cbiAgfTtcbn07XG5cbi8qKlxuICogU2V0IGBleHBvcnRJbWFnZS5zZXRFeHBvcnRJbWFnZURhdGFVcmlgIHRvIGEgaW1hZ2UgZGF0YVVyaVxuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHN0YXRlIGB1aVN0YXRlYFxuICogQHBhcmFtIGFjdGlvblxuICogQHBhcmFtIGFjdGlvbi5wYXlsb2FkIGV4cG9ydCBpbWFnZSBkYXRhIHVyaVxuICogQHJldHVybnMgbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRFeHBvcnRJbWFnZURhdGFVcmlVcGRhdGVyID0gKFxuICBzdGF0ZTogVWlTdGF0ZSxcbiAge3BheWxvYWQ6IGRhdGFVcml9OiBVSVN0YXRlQWN0aW9ucy5TZXRFeHBvcnRJbWFnZURhdGFVcmlVcGRhdGVyQWN0aW9uXG4pOiBVaVN0YXRlID0+ICh7XG4gIC4uLnN0YXRlLFxuICBleHBvcnRJbWFnZToge1xuICAgIC4uLnN0YXRlLmV4cG9ydEltYWdlLFxuICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgIGltYWdlRGF0YVVyaTogZGF0YVVyaVxuICB9XG59KTtcblxuLyoqXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRFeHBvcnRJbWFnZUVycm9yVXBkYXRlciA9IChcbiAgc3RhdGU6IFVpU3RhdGUsXG4gIHtwYXlsb2FkOiBlcnJvcn06IFVJU3RhdGVBY3Rpb25zLlNldEV4cG9ydEltYWdlRXJyb3JVcGRhdGVyQWN0aW9uXG4pOiBVaVN0YXRlID0+ICh7XG4gIC4uLnN0YXRlLFxuICBleHBvcnRJbWFnZToge1xuICAgIC4uLnN0YXRlLmV4cG9ydEltYWdlLFxuICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgIGVycm9yXG4gIH1cbn0pO1xuXG4vKipcbiAqIERlbGV0ZSBjYWNoZWQgZXhwb3J0IGltYWdlXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBjbGVhbnVwRXhwb3J0SW1hZ2VVcGRhdGVyID0gKHN0YXRlOiBVaVN0YXRlKTogVWlTdGF0ZSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZXhwb3J0SW1hZ2U6IHtcbiAgICAuLi5zdGF0ZS5leHBvcnRJbWFnZSxcbiAgICBleHBvcnRpbmc6IGZhbHNlLFxuICAgIGltYWdlRGF0YVVyaTogJycsXG4gICAgZXJyb3I6IGZhbHNlLFxuICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgIGNlbnRlcjogZmFsc2VcbiAgfVxufSk7XG5cbi8qKlxuICogU3RhcnQgaW1hZ2UgZXhwb3J0aW5nIGZsb3dcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSBzdGF0ZVxuICogQHBhcmFtIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtVaVN0YXRlfVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc3RhcnRFeHBvcnRpbmdJbWFnZVVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBVaVN0YXRlLFxuICB7cGF5bG9hZDogb3B0aW9ucyA9IHt9fToge3BheWxvYWQ6IFBhcnRpYWw8RXhwb3J0SW1hZ2U+fVxuKTogVWlTdGF0ZSA9PiB7XG4gIGNvbnN0IGltYWdlU2V0dGluZ3MgPSB7XG4gICAgLi4ub3B0aW9ucyxcbiAgICBleHBvcnRpbmc6IHRydWVcbiAgfTtcblxuICByZXR1cm4gY29tcG9zZV8oW1xuICAgIGNsZWFudXBFeHBvcnRJbWFnZVVwZGF0ZXIsXG4gICAgYXBwbHlfKHNldEV4cG9ydEltYWdlU2V0dGluZ1VwZGF0ZXIsIHBheWxvYWRfKGltYWdlU2V0dGluZ3MpKVxuICBdKShzdGF0ZSk7XG59O1xuXG4vKipcbiAqIFNldCBzZWxlY3RlZCBkYXRhc2V0IGZvciBleHBvcnRcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEBwYXJhbSBhY3Rpb25cbiAqIEBwYXJhbSBhY3Rpb24ucGF5bG9hZCBkYXRhc2V0IGlkXG4gKiBAcmV0dXJucyBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEV4cG9ydFNlbGVjdGVkRGF0YXNldFVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBVaVN0YXRlLFxuICB7cGF5bG9hZDogZGF0YXNldH06IFVJU3RhdGVBY3Rpb25zLlNldEV4cG9ydFNlbGVjdGVkRGF0YXNldFVwZGF0ZXJBY3Rpb25cbik6IFVpU3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGV4cG9ydERhdGE6IHtcbiAgICAuLi5zdGF0ZS5leHBvcnREYXRhLFxuICAgIHNlbGVjdGVkRGF0YXNldDogZGF0YXNldFxuICB9XG59KTtcblxuLyoqXG4gKiBTZXQgZGF0YSBmb3JtYXQgZm9yIGV4cG9ydGluZyBkYXRhXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcGFyYW0gYWN0aW9uXG4gKiBAcGFyYW0gYWN0aW9uLnBheWxvYWQgb25lIG9mIGAndGV4dC9jc3YnYFxuICogQHJldHVybnMgbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRFeHBvcnREYXRhVHlwZVVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBVaVN0YXRlLFxuICB7cGF5bG9hZDogZGF0YVR5cGV9OiBVSVN0YXRlQWN0aW9ucy5TZXRFeHBvcnREYXRhVHlwZVVwZGF0ZXJBY3Rpb25cbik6IFVpU3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGV4cG9ydERhdGE6IHtcbiAgICAuLi5zdGF0ZS5leHBvcnREYXRhLFxuICAgIGRhdGFUeXBlXG4gIH1cbn0pO1xuXG4vKipcbiAqIFdoZXRoZXIgdG8gZXhwb3J0IGZpbHRlcmVkIGRhdGEsIGB0cnVlYCBvciBgZmFsc2VgXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcGFyYW0gYWN0aW9uXG4gKiBAcGFyYW0gYWN0aW9uLnBheWxvYWRcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2V0RXhwb3J0RmlsdGVyZWRVcGRhdGVyID0gKFxuICBzdGF0ZTogVWlTdGF0ZSxcbiAge3BheWxvYWQ6IGZpbHRlcmVkfTogVUlTdGF0ZUFjdGlvbnMuU2V0RXhwb3J0RmlsdGVyZWRVcGRhdGVyQWN0aW9uXG4pOiBVaVN0YXRlID0+ICh7XG4gIC4uLnN0YXRlLFxuICBleHBvcnREYXRhOiB7XG4gICAgLi4uc3RhdGUuZXhwb3J0RGF0YSxcbiAgICBmaWx0ZXJlZFxuICB9XG59KTtcblxuLyoqXG4gKiBXaGV0aGVyIHRvIGluY2x1ZGluZyBkYXRhIGluIG1hcCBjb25maWcsIHRvZ2dsZSBiZXR3ZWVuIGB0cnVlYCBvciBgZmFsc2VgXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcmV0dXJucyBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEV4cG9ydERhdGFVcGRhdGVyID0gKHN0YXRlOiBVaVN0YXRlKTogVWlTdGF0ZSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZXhwb3J0TWFwOiB7XG4gICAgLi4uc3RhdGUuZXhwb3J0TWFwLFxuICAgIFtFWFBPUlRfTUFQX0ZPUk1BVFMuSlNPTl06IHtcbiAgICAgIC4uLnN0YXRlLmV4cG9ydE1hcFtFWFBPUlRfTUFQX0ZPUk1BVFMuSlNPTl0sXG4gICAgICBoYXNEYXRhOiAhc3RhdGUuZXhwb3J0TWFwW0VYUE9SVF9NQVBfRk9STUFUUy5KU09OXS5oYXNEYXRhXG4gICAgfVxuICB9XG59KTtcblxuLyoqXG4gKiB3aGV0aGVyIHRvIGV4cG9ydCBhIG1hcGJveCBhY2Nlc3MgdG8gSFRNTCBzaW5nbGUgcGFnZVxuICogQHBhcmFtIHN0YXRlIC0gYHVpU3RhdGVgXG4gKiBAcGFyYW0gYWN0aW9uXG4gKiBAcGFyYW0gYWN0aW9uLnBheWxvYWRcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2V0VXNlck1hcGJveEFjY2Vzc1Rva2VuVXBkYXRlciA9IChcbiAgc3RhdGU6IFVpU3RhdGUsXG4gIHtwYXlsb2FkOiB1c2VyTWFwYm94VG9rZW59OiBVSVN0YXRlQWN0aW9ucy5TZXRVc2VyTWFwYm94QWNjZXNzVG9rZW5VcGRhdGVyQWN0aW9uXG4pOiBVaVN0YXRlID0+ICh7XG4gIC4uLnN0YXRlLFxuICBleHBvcnRNYXA6IHtcbiAgICAuLi5zdGF0ZS5leHBvcnRNYXAsXG4gICAgW0VYUE9SVF9NQVBfRk9STUFUUy5IVE1MXToge1xuICAgICAgLi4uc3RhdGUuZXhwb3J0TWFwW0VYUE9SVF9NQVBfRk9STUFUUy5IVE1MXSxcbiAgICAgIHVzZXJNYXBib3hUb2tlblxuICAgIH1cbiAgfVxufSk7XG5cbi8qKlxuICogU2V0cyB0aGUgZXhwb3J0IG1hcCBmb3JtYXRcbiAqIEBwYXJhbSBzdGF0ZSAtIGB1aVN0YXRlYFxuICogQHBhcmFtIGFjdGlvblxuICogQHBhcmFtIGFjdGlvbi5wYXlsb2FkIGZvcm1hdCB0byB1c2UgdG8gZXhwb3J0IHRoZSBtYXAgaW50b1xuICogQHJldHVybiBuZXh0U3RhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IHNldEV4cG9ydE1hcEZvcm1hdFVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBVaVN0YXRlLFxuICB7cGF5bG9hZDogZm9ybWF0fTogVUlTdGF0ZUFjdGlvbnMuU2V0RXhwb3J0TWFwRm9ybWF0VXBkYXRlckFjdGlvblxuKTogVWlTdGF0ZSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZXhwb3J0TWFwOiB7XG4gICAgLi4uc3RhdGUuZXhwb3J0TWFwLFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICBmb3JtYXRcbiAgfVxufSk7XG5cbi8qKlxuICogU2V0IHRoZSBleHBvcnQgaHRtbCBtYXAgbW9kZVxuICogQHBhcmFtIHN0YXRlIC0gYHVpU3RhdGVgXG4gKiBAcGFyYW0gYWN0aW9uXG4gKiBAcGFyYW0gYWN0aW9uLnBheWxvYWQgdG8gYmUgc2V0IChhdmFpbGFibGUgbW9kZXM6IEVYUE9SVF9IVE1MX01BUF9NT0RFUylcbiAqIEByZXR1cm4gbmV4dFN0YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBzZXRFeHBvcnRNYXBIVE1MTW9kZVVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBVaVN0YXRlLFxuICB7cGF5bG9hZDogbW9kZX06IFVJU3RhdGVBY3Rpb25zLlNldEV4cG9ydEhUTUxNYXBNb2RlVXBkYXRlckFjdGlvblxuKTogVWlTdGF0ZSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZXhwb3J0TWFwOiB7XG4gICAgLi4uc3RhdGUuZXhwb3J0TWFwLFxuICAgIFtFWFBPUlRfTUFQX0ZPUk1BVFMuSFRNTF06IHtcbiAgICAgIC4uLnN0YXRlLmV4cG9ydE1hcFtFWFBPUlRfTUFQX0ZPUk1BVFMuSFRNTF0sXG4gICAgICBtb2RlXG4gICAgfVxuICB9XG59KTtcblxuLyoqXG4gKiBBZGRzIGEgbmV3IG5vdGlmaWNhdGlvbi5cbiAqIFVwZGF0ZXMgYSBub3RpZmljYXRpb24gaW4gY2FzZSBvZiBtYXRjaGluZyBpZHMuXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcGFyYW0gYWN0aW9uXG4gKiBAcGFyYW0gYWN0aW9uLnBheWxvYWQgUGFyYW1zIG9mIGEgbm90aWZpY2F0aW9uXG4gKiBAcmV0dXJucyBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGFkZE5vdGlmaWNhdGlvblVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBVaVN0YXRlLFxuICB7cGF5bG9hZH06IFVJU3RhdGVBY3Rpb25zLkFkZE5vdGlmaWNhdGlvblVwZGF0ZXJBY3Rpb25cbik6IFVpU3RhdGUgPT4ge1xuICBjb25zdCBvbGROb3RpZmljYXRpb25zID0gc3RhdGUubm90aWZpY2F0aW9ucyB8fCBbXTtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICBjb25zdCBwYXlsb2FkSWQgPSBwYXlsb2FkPy5pZDtcbiAgY29uc3Qgbm90aWZpY2F0aW9uVG9VcGRhdGUgPSBwYXlsb2FkSWQgPyBvbGROb3RpZmljYXRpb25zLmZpbmQobiA9PiBuLmlkID09PSBwYXlsb2FkSWQpIDogbnVsbDtcblxuICBsZXQgbm90aWZpY2F0aW9ucztcbiAgaWYgKG5vdGlmaWNhdGlvblRvVXBkYXRlKSB7XG4gICAgbm90aWZpY2F0aW9ucyA9IG9sZE5vdGlmaWNhdGlvbnMubWFwKG4gPT5cbiAgICAgIG4uaWQgPT09IHBheWxvYWRJZCA/IGNyZWF0ZU5vdGlmaWNhdGlvbih7Li4ucGF5bG9hZCwgY291bnQ6IG4uY291bnQgKyAxfSkgOiBuXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBub3RpZmljYXRpb25zID0gWy4uLm9sZE5vdGlmaWNhdGlvbnMsIGNyZWF0ZU5vdGlmaWNhdGlvbihwYXlsb2FkKV07XG4gIH1cblxuICByZXR1cm4gey4uLnN0YXRlLCBub3RpZmljYXRpb25zfTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgbm90aWZpY2F0aW9uXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0gc3RhdGUgYHVpU3RhdGVgXG4gKiBAcGFyYW0gYWN0aW9uXG4gKiBAcGFyYW0gYWN0aW9uLnBheWxvYWQgaWQgb2YgdGhlIG5vdGlmaWNhdGlvbiB0byBiZSByZW1vdmVkXG4gKiBAcmV0dXJucyBuZXh0U3RhdGVcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZU5vdGlmaWNhdGlvblVwZGF0ZXIgPSAoXG4gIHN0YXRlOiBVaVN0YXRlLFxuICB7cGF5bG9hZDogaWR9OiBVSVN0YXRlQWN0aW9ucy5SZW1vdmVOb3RpZmljYXRpb25VcGRhdGVyQWN0aW9uXG4pOiBVaVN0YXRlID0+ICh7XG4gIC4uLnN0YXRlLFxuICBub3RpZmljYXRpb25zOiBzdGF0ZS5ub3RpZmljYXRpb25zLmZpbHRlcihuID0+IG4uaWQgIT09IGlkKVxufSk7XG5cbi8qKlxuICogRmlyZWQgd2hlbiBmaWxlIGxvYWRpbmcgYmVnaW5cbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgbG9hZEZpbGVzVXBkYXRlciA9IChzdGF0ZTogVWlTdGF0ZSk6IFVpU3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGxvYWRGaWxlczoge1xuICAgIC4uLnN0YXRlLmxvYWRGaWxlcyxcbiAgICBmaWxlTG9hZGluZzogdHJ1ZVxuICB9XG59KTtcblxuLyoqXG4gKiBIYW5kbGVzIGxvYWRpbmcgZmlsZSBzdWNjZXNzIGFuZCBzZXQgZmlsZUxvYWRpbmcgcHJvcGVydHkgdG8gZmFsc2VcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxuICovXG5leHBvcnQgY29uc3QgbG9hZEZpbGVzU3VjY2Vzc1VwZGF0ZXIgPSAoc3RhdGU6IFVpU3RhdGUpOiBVaVN0YXRlID0+ICh7XG4gIC4uLnN0YXRlLFxuICBsb2FkRmlsZXM6IHtcbiAgICAuLi5zdGF0ZS5sb2FkRmlsZXMsXG4gICAgZmlsZUxvYWRpbmc6IGZhbHNlXG4gIH1cbn0pO1xuXG4vKipcbiAqIEhhbmRsZXMgbG9hZCBmaWxlIGVycm9yIGFuZCBzZXQgZmlsZUxvYWRpbmcgcHJvcGVydHkgdG8gZmFsc2VcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSBzdGF0ZVxuICogQHBhcmFtIGFjdGlvblxuICogQHBhcmFtIGFjdGlvbi5lcnJvclxuICogQHJldHVybnMgbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBsb2FkRmlsZXNFcnJVcGRhdGVyID0gKHN0YXRlOiBVaVN0YXRlLCB7ZXJyb3J9OiBMb2FkRmlsZXNFcnJVcGRhdGVyQWN0aW9uKTogVWlTdGF0ZSA9PlxuICBhZGROb3RpZmljYXRpb25VcGRhdGVyKFxuICAgIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgbG9hZEZpbGVzOiB7XG4gICAgICAgIC4uLnN0YXRlLmxvYWRGaWxlcyxcbiAgICAgICAgZmlsZUxvYWRpbmc6IGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBwYXlsb2FkOiBlcnJvck5vdGlmaWNhdGlvbih7XG4gICAgICAgIG1lc3NhZ2U6IChlcnJvciB8fCB7fSkubWVzc2FnZSB8fCAnRmFpbGVkIHRvIHVwbG9hZCBmaWxlcycsXG4gICAgICAgIHRvcGljOiBERUZBVUxUX05PVElGSUNBVElPTl9UT1BJQ1MuZ2xvYmFsXG4gICAgICB9KVxuICAgIH1cbiAgKTtcblxuLyoqXG4gKiBIYW5kbGVzIHRvZ2dsZSBtYXAgc3BsaXQgYW5kIHJlc2V0IGFsbCBtYXAgY29udHJvbCBpbmRleCB0byAwXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0gc3RhdGVcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdG9nZ2xlU3BsaXRNYXBVcGRhdGVyID0gKHN0YXRlOiBVaVN0YXRlKTogVWlTdGF0ZSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgbWFwQ29udHJvbHM6IE9iamVjdC5lbnRyaWVzKHN0YXRlLm1hcENvbnRyb2xzKS5yZWR1Y2UoXG4gICAgKGFjYywgZW50cnkpID0+ICh7XG4gICAgICAuLi5hY2MsXG4gICAgICBbZW50cnlbMF1dOiB7XG4gICAgICAgIC4uLmVudHJ5WzFdLFxuICAgICAgICBhY3RpdmVNYXBJbmRleDogMFxuICAgICAgfVxuICAgIH0pLFxuICAgIHt9IGFzIE1hcENvbnRyb2xzXG4gIClcbn0pO1xuXG4vKipcbiAqIFRvZ2dsZSBtb2RhbCBkYXRhXG4gKiBAbWVtYmVyb2YgdWlTdGF0ZVVwZGF0ZXJzXG4gKiBAcGFyYW0gc3RhdGVcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2hvd0RhdGFzZXRUYWJsZVVwZGF0ZXIgPSAoc3RhdGU6IFVpU3RhdGUpOiBVaVN0YXRlID0+XG4gIHRvZ2dsZU1vZGFsVXBkYXRlcihzdGF0ZSwge3BheWxvYWQ6IERBVEFfVEFCTEVfSUR9KTtcblxuLyoqXG4gKiBTZXQgdGhlIGxvY2FsZSBvZiB0aGUgVUlcbiAqIEBtZW1iZXJvZiB1aVN0YXRlVXBkYXRlcnNcbiAqIEBwYXJhbSBzdGF0ZSBgdWlTdGF0ZWBcbiAqIEBwYXJhbSBhY3Rpb25cbiAqIEBwYXJhbSBhY3Rpb24ucGF5bG9hZFxuICogQHBhcmFtIGFjdGlvbi5wYXlsb2FkLmxvY2FsZSBsb2NhbGVcbiAqIEByZXR1cm5zIG5leHRTdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc2V0TG9jYWxlVXBkYXRlciA9IChcbiAgc3RhdGU6IFVpU3RhdGUsXG4gIHtwYXlsb2FkOiB7bG9jYWxlfX06IFVJU3RhdGVBY3Rpb25zLlNldExvY2FsZVVwZGF0ZXJBY3Rpb25cbik6IFVpU3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGxvY2FsZVxufSk7XG5cbi8qKlxuICogVG9nZ2xlIGxheWVyIHBhbmVsIGxpc3Qgdmlld1xuICogQG1lbWJlcm9mIHVpU3RhdGVVcGRhdGVyc1xuICogQHBhcmFtIHN0YXRlIGB1aVN0YXRlYFxuICogQHBhcmFtIGFjdGlvblxuICogQHBhcmFtIGFjdGlvbi5wYXlsb2FkIGxheWVyIHBhbmVsIGxpc3RWaWV3IHZhbHVlLiBDYW4gYmUgJ2xpc3QnIG9yICdzb3J0QnlEYXRhc2V0J1xuICogQHJldHVybnMgbmV4dFN0YXRlXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB0b2dnbGVQYW5lbExpc3RWaWV3VXBkYXRlciA9IChcbiAgc3RhdGU6IFVpU3RhdGUsXG4gIHtwYXlsb2FkOiB7cGFuZWxJZCwgbGlzdFZpZXd9fTogVUlTdGF0ZUFjdGlvbnMuVG9nZ2xlUGFuZWxMaXN0Vmlld0FjdGlvblxuKTogVWlTdGF0ZSA9PiB7XG4gIGNvbnN0IHN0YXRlUHJvcCA9XG4gICAgcGFuZWxJZCA9PT0gJ2xheWVyJ1xuICAgICAgPyAnbGF5ZXJQYW5lbExpc3RWaWV3J1xuICAgICAgOiBwYW5lbElkID09PSAnZmlsdGVyJ1xuICAgICAgPyAnZmlsdGVyUGFuZWxMaXN0VmlldydcbiAgICAgIDogbnVsbDtcbiAgaWYgKCFzdGF0ZVByb3AgfHwgc3RhdGVbc3RhdGVQcm9wXSA9PT0gbGlzdFZpZXcpIHtcbiAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBbc3RhdGVQcm9wXTogbGlzdFZpZXdcbiAgfTtcbn07XG4iXX0=