"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ModalContainerFactory;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _reselect = require("reselect");

var _lodash = _interopRequireDefault(require("lodash.get"));

var _document = _interopRequireDefault(require("global/document"));

var _modalDialog = _interopRequireDefault(require("./modals/modal-dialog"));

var _utils = require("@kepler.gl/utils");

var _reducers = require("@kepler.gl/reducers");

var _deleteDataModal = _interopRequireDefault(require("./modals/delete-data-modal"));

var _overwriteMapModal = _interopRequireDefault(require("./modals/overwrite-map-modal"));

var _dataTableModal = _interopRequireDefault(require("./modals/data-table-modal"));

var _loadDataModal = _interopRequireDefault(require("./modals/load-data-modal"));

var _exportImageModal = _interopRequireDefault(require("./modals/export-image-modal"));

var _exportDataModal = _interopRequireDefault(require("./modals/export-data-modal"));

var _exportMapModal = _interopRequireDefault(require("./modals/export-map-modal/export-map-modal"));

var _addMapStyleModal = _interopRequireDefault(require("./modals/add-map-style-modal"));

var _saveMapModal = _interopRequireDefault(require("./modals/save-map-modal"));

var _shareMapModal = _interopRequireDefault(require("./modals/share-map-modal"));

var _styles = require("@kepler.gl/styles");

var _constants = require("@kepler.gl/constants");

var _reactDom = require("react-dom");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DataTableModalStyle = (0, _styledComponents.css)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  top: 70px;\n  padding: 0;\n  width: 90vw;\n  max-width: 90vw;\n\n  ", " ", ";\n"])), _styles.media.portable(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0;\n  "]))), _styles.media.palm(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n    padding: 0;\n    margin: 0 auto;\n  "]))));
var smallModalCss = (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n  width: 40%;\n  padding: 40px 40px 32px 40px;\n"])));
var LoadDataModalStyle = (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n  top: 60px;\n"])));
var DefaultStyle = (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n  max-width: 960px;\n"])));
ModalContainerFactory.deps = [_deleteDataModal["default"], _overwriteMapModal["default"], _dataTableModal["default"], _loadDataModal["default"], _exportImageModal["default"], _exportDataModal["default"], _exportMapModal["default"], _addMapStyleModal["default"], _modalDialog["default"], _saveMapModal["default"], _shareMapModal["default"]];

function ModalContainerFactory(DeleteDatasetModal, OverWriteMapModal, DataTableModal, LoadDataModal, ExportImageModal, ExportDataModal, ExportMapModal, AddMapStyleModal, ModalDialog, SaveMapModal, ShareMapModal) {
  /** @augments React.Component<ModalContainerProps> */
  var ModalContainer = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(ModalContainer, _Component);

    var _super = _createSuper(ModalContainer);

    function ModalContainer() {
      var _this;

      (0, _classCallCheck2["default"])(this, ModalContainer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "componentDidMount", function () {
        _document["default"].addEventListener('keyup', _this._onKeyUp);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "cloudProviders", function (props) {
        return props.cloudProviders;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "providerWithStorage", (0, _reselect.createSelector)(_this.cloudProviders, function (cloudProviders) {
        return cloudProviders.filter(function (p) {
          return p.hasPrivateStorage();
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "providerWithShare", (0, _reselect.createSelector)(_this.cloudProviders, function (cloudProviders) {
        return cloudProviders.filter(function (p) {
          return p.hasSharingUrl();
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onKeyUp", function (event) {
        var keyCode = event.keyCode;

        if (keyCode === _constants.KeyEvent.DOM_VK_ESCAPE) {
          _this._closeModal();
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_closeModal", function () {
        _this.props.uiStateActions.toggleModal(null);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_deleteDataset", function (key) {
        _this.props.visStateActions.removeDataset(key);

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onAddCustomMapStyle", function () {
        _this.props.mapStyleActions.addCustomMapStyle();

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onFileUpload", function (fileList) {
        _this.props.visStateActions.loadFiles(fileList);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onExportImage", function () {
        if (!_this.props.uiState.exportImage.processing) {
          // @ts-ignore TODO: fix exportImage method
          exportImage(_this.props.uiState.exportImage, "".concat(_this.props.appName, ".png"));

          _this.props.uiStateActions.cleanupExportImage();

          _this._closeModal();
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onExportData", function () {
        (0, _reducers.exportData)(_this.props, _this.props.uiState.exportData);

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onExportMap", function () {
        var uiState = _this.props.uiState;
        var format = uiState.exportMap.format;
        (format === _constants.EXPORT_MAP_FORMATS.HTML ? _utils.exportHtml : _utils.exportJson)(_this.props, _this.props.uiState.exportMap[format] || {});

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_exportFileToCloud", function (_ref) {
        var provider = _ref.provider,
            isPublic = _ref.isPublic,
            overwrite = _ref.overwrite,
            closeModal = _ref.closeModal;
        var toSave = (0, _utils.exportMap)(_this.props);

        _this.props.providerActions.exportFileToCloud({
          // @ts-ignore
          mapData: toSave,
          provider: provider,
          options: {
            isPublic: isPublic,
            overwrite: overwrite
          },
          closeModal: closeModal,
          onSuccess: _this.props.onExportToCloudSuccess,
          onError: _this.props.onExportToCloudError
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onSaveMap", function () {
        var overwrite = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var currentProvider = _this.props.providerState.currentProvider; // @ts-ignore

        var provider = _this.props.cloudProviders.find(function (p) {
          return p.name === currentProvider;
        });

        _this._exportFileToCloud({
          provider: provider,
          isPublic: false,
          overwrite: overwrite,
          closeModal: true
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onOverwriteMap", function () {
        _this._onSaveMap(true);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onShareMapUrl", function (provider) {
        _this._exportFileToCloud({
          provider: provider,
          isPublic: true,
          overwrite: false,
          closeModal: false
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onCloseSaveMap", function () {
        _this.props.providerActions.resetProviderStatus();

        _this._closeModal();
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onLoadCloudMap", function (payload) {
        _this.props.providerActions.loadCloudMap(_objectSpread(_objectSpread({}, payload), {}, {
          onSuccess: _this.props.onLoadCloudMapSuccess,
          onError: _this.props.onLoadCloudMapError
        }));
      });
      return _this;
    }

    (0, _createClass2["default"])(ModalContainer, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        _document["default"].removeEventListener('keyup', this._onKeyUp);
      }
    }, {
      key: "render",
      value:
      /* eslint-disable complexity */
      function render() {
        var _this2 = this;

        var _this$props = this.props,
            containerW = _this$props.containerW,
            containerH = _this$props.containerH,
            mapStyle = _this$props.mapStyle,
            mapState = _this$props.mapState,
            uiState = _this$props.uiState,
            visState = _this$props.visState,
            rootNode = _this$props.rootNode,
            visStateActions = _this$props.visStateActions,
            uiStateActions = _this$props.uiStateActions,
            providerState = _this$props.providerState;
        var currentModal = uiState.currentModal,
            datasetKeyToRemove = uiState.datasetKeyToRemove;
        var datasets = visState.datasets,
            layers = visState.layers,
            editingDataset = visState.editingDataset;
        var template = null;
        var modalProps = {}; // TODO - currentModal is a string
        // @ts-ignore

        if (currentModal && currentModal.id && currentModal.template) {
          // if currentMdoal template is already provided
          // TODO: need to check whether template is valid
          // @ts-ignore
          template = /*#__PURE__*/_react["default"].createElement(currentModal.template, null); // @ts-ignore

          modalProps = currentModal.modalProps;
        } else {
          switch (currentModal) {
            case _constants.DATA_TABLE_ID:
              var width = containerW * 0.9;
              template = /*#__PURE__*/_react["default"].createElement(DataTableModal, {
                datasets: datasets,
                dataId: editingDataset,
                showDatasetTable: visStateActions.showDatasetTable,
                sortTableColumn: visStateActions.sortTableColumn,
                pinTableColumn: visStateActions.pinTableColumn,
                copyTableColumn: visStateActions.copyTableColumn,
                setColumnDisplayFormat: visStateActions.setColumnDisplayFormat,
                uiStateActions: uiStateActions,
                uiState: uiState
              }); // TODO: we need to make this width consistent with the css rule defined modal.js:32 max-width: 70vw
              // @ts-ignore // TODO fix this after add types to Theme

              modalProps.cssStyle = (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = (0, _taggedTemplateLiteral2["default"])(["\n              ", ";\n              ", ";\n            "])), DataTableModalStyle, _styles.media.palm(_templateObject8 || (_templateObject8 = (0, _taggedTemplateLiteral2["default"])(["\n                width: ", "px;\n              "])), width));
              break;

            case _constants.DELETE_DATA_ID:
              // validate options
              if (datasetKeyToRemove && datasets && datasets[datasetKeyToRemove]) {
                template = /*#__PURE__*/_react["default"].createElement(DeleteDatasetModal, {
                  dataset: datasets[datasetKeyToRemove],
                  layers: layers
                });
                modalProps = {
                  title: 'modal.title.deleteDataset',
                  cssStyle: smallModalCss,
                  footer: true,
                  onConfirm: function onConfirm() {
                    return _this2._deleteDataset(datasetKeyToRemove);
                  },
                  onCancel: this._closeModal,
                  confirmButton: {
                    negative: true,
                    large: true,
                    children: 'modal.button.delete'
                  }
                };
              }

              break;
            // in case we add a new case after this one

            case _constants.ADD_DATA_ID:
              template = /*#__PURE__*/_react["default"].createElement(LoadDataModal, (0, _extends2["default"])({}, providerState, {
                onClose: this._closeModal,
                onFileUpload: this._onFileUpload,
                onLoadCloudMap: this._onLoadCloudMap,
                cloudProviders: this.providerWithStorage(this.props),
                onSetCloudProvider: this.props.providerActions.setCloudProvider,
                getSavedMaps: this.props.providerActions.getSavedMaps,
                loadFiles: uiState.loadFiles,
                fileLoading: visState.fileLoading,
                fileLoadingProgress: visState.fileLoadingProgress,
                fileFormatNames: (0, _reducers.getFileFormatNames)(this.props.visState),
                fileExtensions: (0, _reducers.getFileExtensions)(this.props.visState)
              }));
              modalProps = {
                title: 'modal.title.addDataToMap',
                cssStyle: LoadDataModalStyle,
                footer: false,
                onConfirm: this._closeModal
              };
              break;

            case _constants.EXPORT_IMAGE_ID:
              template = /*#__PURE__*/_react["default"].createElement(ExportImageModal, {
                exportImage: uiState.exportImage,
                mapW: containerW,
                mapH: containerH,
                onUpdateImageSetting: uiStateActions.setExportImageSetting,
                cleanupExportImage: uiStateActions.cleanupExportImage
              });
              modalProps = {
                title: 'modal.title.exportImage',
                cssStyle: '',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onExportImage,
                confirmButton: {
                  large: true,
                  disabled: uiState.exportImage.processing,
                  children: 'modal.button.download'
                }
              };
              break;

            case _constants.EXPORT_DATA_ID:
              template = /*#__PURE__*/_react["default"].createElement(ExportDataModal, (0, _extends2["default"])({}, uiState.exportData, {
                supportedDataTypes: _constants.EXPORT_DATA_TYPE_OPTIONS,
                datasets: datasets,
                applyCPUFilter: this.props.visStateActions.applyCPUFilter,
                onChangeExportDataType: uiStateActions.setExportDataType,
                onChangeExportSelectedDataset: uiStateActions.setExportSelectedDataset,
                onChangeExportFiltered: uiStateActions.setExportFiltered
              }));
              modalProps = {
                title: 'modal.title.exportData',
                cssStyle: '',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onExportData,
                confirmButton: {
                  large: true,
                  children: 'modal.button.export'
                }
              };
              break;

            case _constants.EXPORT_MAP_ID:
              var keplerGlConfig = visState.schema.getConfigToSave({
                mapStyle: mapStyle,
                visState: visState,
                mapState: mapState,
                uiState: uiState
              });
              template = /*#__PURE__*/_react["default"].createElement(ExportMapModal, {
                config: keplerGlConfig,
                options: uiState.exportMap,
                onChangeExportMapFormat: uiStateActions.setExportMapFormat,
                onEditUserMapboxAccessToken: uiStateActions.setUserMapboxAccessToken,
                onChangeExportMapHTMLMode: uiStateActions.setExportHTMLMapMode
              });
              modalProps = {
                title: 'modal.title.exportMap',
                cssStyle: '',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onExportMap,
                confirmButton: {
                  large: true,
                  children: 'modal.button.export'
                }
              };
              break;

            case _constants.ADD_MAP_STYLE_ID:
              template = /*#__PURE__*/_react["default"].createElement(AddMapStyleModal, {
                mapboxApiAccessToken: this.props.mapboxApiAccessToken,
                mapboxApiUrl: this.props.mapboxApiUrl,
                mapState: this.props.mapState,
                inputStyle: mapStyle.inputStyle,
                inputMapStyle: this.props.mapStyleActions.inputMapStyle,
                loadCustomMapStyle: this.props.mapStyleActions.loadCustomMapStyle
              });
              modalProps = {
                title: 'modal.title.addCustomMapboxStyle',
                cssStyle: '',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: this._onAddCustomMapStyle,
                confirmButton: {
                  large: true,
                  disabled: !mapStyle.inputStyle.style,
                  children: 'modal.button.addStyle'
                }
              };
              break;

            case _constants.SAVE_MAP_ID:
              template = /*#__PURE__*/_react["default"].createElement(SaveMapModal, (0, _extends2["default"])({}, providerState, {
                exportImage: uiState.exportImage,
                mapInfo: visState.mapInfo,
                onSetMapInfo: visStateActions.setMapInfo,
                cloudProviders: this.providerWithStorage(this.props),
                onSetCloudProvider: this.props.providerActions.setCloudProvider,
                cleanupExportImage: uiStateActions.cleanupExportImage,
                onUpdateImageSetting: uiStateActions.setExportImageSetting
              }));
              modalProps = {
                title: 'modal.title.saveMap',
                cssStyle: '',
                footer: true,
                onCancel: this._closeModal,
                onConfirm: function onConfirm() {
                  return _this2._onSaveMap(false);
                },
                confirmButton: {
                  large: true,
                  disabled: uiState.exportImage.processing || !(0, _utils.isValidMapInfo)(visState.mapInfo) || !providerState.currentProvider,
                  children: 'modal.button.save'
                }
              };
              break;

            case _constants.OVERWRITE_MAP_ID:
              template = /*#__PURE__*/_react["default"].createElement(OverWriteMapModal, (0, _extends2["default"])({}, providerState, {
                cloudProviders: this.props.cloudProviders,
                title: (0, _lodash["default"])(visState, ['mapInfo', 'title']),
                onUpdateImageSetting: uiStateActions.setExportImageSetting,
                cleanupExportImage: uiStateActions.cleanupExportImage
              }));
              modalProps = {
                title: 'Overwrite Existing File?',
                cssStyle: smallModalCss,
                footer: true,
                onConfirm: this._onOverwriteMap,
                onCancel: this._closeModal,
                confirmButton: {
                  large: true,
                  children: 'Yes',
                  disabled: uiState.exportImage.processing || !(0, _utils.isValidMapInfo)(visState.mapInfo) || !providerState.currentProvider
                }
              };
              break;

            case _constants.SHARE_MAP_ID:
              template = /*#__PURE__*/_react["default"].createElement(ShareMapModal, (0, _extends2["default"])({}, providerState, {
                isReady: !uiState.exportImage.processing,
                cloudProviders: this.providerWithShare(this.props),
                onExport: this._onShareMapUrl,
                onSetCloudProvider: this.props.providerActions.setCloudProvider,
                cleanupExportImage: uiStateActions.cleanupExportImage,
                onUpdateImageSetting: uiStateActions.setExportImageSetting
              }));
              modalProps = {
                title: 'modal.title.shareURL',
                cssStyle: '',
                onCancel: this._onCloseSaveMap
              };
              break;

            default:
              break;
          }
        }

        return rootNode ? /*#__PURE__*/_react["default"].createElement(ModalDialog, (0, _extends2["default"])({
          parentSelector: function parentSelector() {
            return (0, _reactDom.findDOMNode)(rootNode);
          },
          isOpen: Boolean(currentModal),
          onCancel: this._closeModal
        }, modalProps, {
          cssStyle: DefaultStyle.concat(modalProps.cssStyle)
        }), template) : null;
      }
      /* eslint-enable complexity */

    }]);
    return ModalContainer;
  }(_react.Component);

  return ModalContainer;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tb2RhbC1jb250YWluZXIudHN4Il0sIm5hbWVzIjpbIkRhdGFUYWJsZU1vZGFsU3R5bGUiLCJjc3MiLCJtZWRpYSIsInBvcnRhYmxlIiwicGFsbSIsInNtYWxsTW9kYWxDc3MiLCJMb2FkRGF0YU1vZGFsU3R5bGUiLCJEZWZhdWx0U3R5bGUiLCJNb2RhbENvbnRhaW5lckZhY3RvcnkiLCJkZXBzIiwiRGVsZXRlRGF0YXNldE1vZGFsRmFjdG9yeSIsIk92ZXJXcml0ZU1hcE1vZGFsRmFjdG9yeSIsIkRhdGFUYWJsZU1vZGFsRmFjdG9yeSIsIkxvYWREYXRhTW9kYWxGYWN0b3J5IiwiRXhwb3J0SW1hZ2VNb2RhbEZhY3RvcnkiLCJFeHBvcnREYXRhTW9kYWxGYWN0b3J5IiwiRXhwb3J0TWFwTW9kYWxGYWN0b3J5IiwiQWRkTWFwU3R5bGVNb2RhbEZhY3RvcnkiLCJNb2RhbERpYWxvZ0ZhY3RvcnkiLCJTYXZlTWFwTW9kYWxGYWN0b3J5IiwiU2hhcmVNYXBNb2RhbEZhY3RvcnkiLCJEZWxldGVEYXRhc2V0TW9kYWwiLCJPdmVyV3JpdGVNYXBNb2RhbCIsIkRhdGFUYWJsZU1vZGFsIiwiTG9hZERhdGFNb2RhbCIsIkV4cG9ydEltYWdlTW9kYWwiLCJFeHBvcnREYXRhTW9kYWwiLCJFeHBvcnRNYXBNb2RhbCIsIkFkZE1hcFN0eWxlTW9kYWwiLCJNb2RhbERpYWxvZyIsIlNhdmVNYXBNb2RhbCIsIlNoYXJlTWFwTW9kYWwiLCJNb2RhbENvbnRhaW5lciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9vbktleVVwIiwicHJvcHMiLCJjbG91ZFByb3ZpZGVycyIsImZpbHRlciIsInAiLCJoYXNQcml2YXRlU3RvcmFnZSIsImhhc1NoYXJpbmdVcmwiLCJldmVudCIsImtleUNvZGUiLCJLZXlFdmVudCIsIkRPTV9WS19FU0NBUEUiLCJfY2xvc2VNb2RhbCIsInVpU3RhdGVBY3Rpb25zIiwidG9nZ2xlTW9kYWwiLCJrZXkiLCJ2aXNTdGF0ZUFjdGlvbnMiLCJyZW1vdmVEYXRhc2V0IiwibWFwU3R5bGVBY3Rpb25zIiwiYWRkQ3VzdG9tTWFwU3R5bGUiLCJmaWxlTGlzdCIsImxvYWRGaWxlcyIsInVpU3RhdGUiLCJleHBvcnRJbWFnZSIsInByb2Nlc3NpbmciLCJhcHBOYW1lIiwiY2xlYW51cEV4cG9ydEltYWdlIiwiZXhwb3J0RGF0YSIsImZvcm1hdCIsImV4cG9ydE1hcCIsIkVYUE9SVF9NQVBfRk9STUFUUyIsIkhUTUwiLCJleHBvcnRIdG1sIiwiZXhwb3J0SnNvbiIsInByb3ZpZGVyIiwiaXNQdWJsaWMiLCJvdmVyd3JpdGUiLCJjbG9zZU1vZGFsIiwidG9TYXZlIiwicHJvdmlkZXJBY3Rpb25zIiwiZXhwb3J0RmlsZVRvQ2xvdWQiLCJtYXBEYXRhIiwib3B0aW9ucyIsIm9uU3VjY2VzcyIsIm9uRXhwb3J0VG9DbG91ZFN1Y2Nlc3MiLCJvbkVycm9yIiwib25FeHBvcnRUb0Nsb3VkRXJyb3IiLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlclN0YXRlIiwiZmluZCIsIm5hbWUiLCJfZXhwb3J0RmlsZVRvQ2xvdWQiLCJfb25TYXZlTWFwIiwicmVzZXRQcm92aWRlclN0YXR1cyIsInBheWxvYWQiLCJsb2FkQ2xvdWRNYXAiLCJvbkxvYWRDbG91ZE1hcFN1Y2Nlc3MiLCJvbkxvYWRDbG91ZE1hcEVycm9yIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRhaW5lclciLCJjb250YWluZXJIIiwibWFwU3R5bGUiLCJtYXBTdGF0ZSIsInZpc1N0YXRlIiwicm9vdE5vZGUiLCJjdXJyZW50TW9kYWwiLCJkYXRhc2V0S2V5VG9SZW1vdmUiLCJkYXRhc2V0cyIsImxheWVycyIsImVkaXRpbmdEYXRhc2V0IiwidGVtcGxhdGUiLCJtb2RhbFByb3BzIiwiaWQiLCJEQVRBX1RBQkxFX0lEIiwid2lkdGgiLCJzaG93RGF0YXNldFRhYmxlIiwic29ydFRhYmxlQ29sdW1uIiwicGluVGFibGVDb2x1bW4iLCJjb3B5VGFibGVDb2x1bW4iLCJzZXRDb2x1bW5EaXNwbGF5Rm9ybWF0IiwiY3NzU3R5bGUiLCJERUxFVEVfREFUQV9JRCIsInRpdGxlIiwiZm9vdGVyIiwib25Db25maXJtIiwiX2RlbGV0ZURhdGFzZXQiLCJvbkNhbmNlbCIsImNvbmZpcm1CdXR0b24iLCJuZWdhdGl2ZSIsImxhcmdlIiwiY2hpbGRyZW4iLCJBRERfREFUQV9JRCIsIl9vbkZpbGVVcGxvYWQiLCJfb25Mb2FkQ2xvdWRNYXAiLCJwcm92aWRlcldpdGhTdG9yYWdlIiwic2V0Q2xvdWRQcm92aWRlciIsImdldFNhdmVkTWFwcyIsImZpbGVMb2FkaW5nIiwiZmlsZUxvYWRpbmdQcm9ncmVzcyIsIkVYUE9SVF9JTUFHRV9JRCIsInNldEV4cG9ydEltYWdlU2V0dGluZyIsIl9vbkV4cG9ydEltYWdlIiwiZGlzYWJsZWQiLCJFWFBPUlRfREFUQV9JRCIsIkVYUE9SVF9EQVRBX1RZUEVfT1BUSU9OUyIsImFwcGx5Q1BVRmlsdGVyIiwic2V0RXhwb3J0RGF0YVR5cGUiLCJzZXRFeHBvcnRTZWxlY3RlZERhdGFzZXQiLCJzZXRFeHBvcnRGaWx0ZXJlZCIsIl9vbkV4cG9ydERhdGEiLCJFWFBPUlRfTUFQX0lEIiwia2VwbGVyR2xDb25maWciLCJzY2hlbWEiLCJnZXRDb25maWdUb1NhdmUiLCJzZXRFeHBvcnRNYXBGb3JtYXQiLCJzZXRVc2VyTWFwYm94QWNjZXNzVG9rZW4iLCJzZXRFeHBvcnRIVE1MTWFwTW9kZSIsIl9vbkV4cG9ydE1hcCIsIkFERF9NQVBfU1RZTEVfSUQiLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsIm1hcGJveEFwaVVybCIsImlucHV0U3R5bGUiLCJpbnB1dE1hcFN0eWxlIiwibG9hZEN1c3RvbU1hcFN0eWxlIiwiX29uQWRkQ3VzdG9tTWFwU3R5bGUiLCJzdHlsZSIsIlNBVkVfTUFQX0lEIiwibWFwSW5mbyIsInNldE1hcEluZm8iLCJPVkVSV1JJVEVfTUFQX0lEIiwiX29uT3ZlcndyaXRlTWFwIiwiU0hBUkVfTUFQX0lEIiwicHJvdmlkZXJXaXRoU2hhcmUiLCJfb25TaGFyZU1hcFVybCIsIl9vbkNsb3NlU2F2ZU1hcCIsIkJvb2xlYW4iLCJjb25jYXQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQVNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUdBOztBQTBCQTs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTUEsbUJBQW1CLE9BQUdDLHFCQUFILDJLQU1yQkMsY0FBTUMsUUFOZSwrR0FRbEJELGNBQU1FLElBUlksbUlBQXpCO0FBYUEsSUFBTUMsYUFBYSxPQUFHSixxQkFBSCwySUFBbkI7QUFLQSxJQUFNSyxrQkFBa0IsT0FBR0wscUJBQUgseUdBQXhCO0FBSUEsSUFBTU0sWUFBWSxPQUFHTixxQkFBSCxnSEFBbEI7QUE0QkFPLHFCQUFxQixDQUFDQyxJQUF0QixHQUE2QixDQUMzQkMsMkJBRDJCLEVBRTNCQyw2QkFGMkIsRUFHM0JDLDBCQUgyQixFQUkzQkMseUJBSjJCLEVBSzNCQyw0QkFMMkIsRUFNM0JDLDJCQU4yQixFQU8zQkMsMEJBUDJCLEVBUTNCQyw0QkFSMkIsRUFTM0JDLHVCQVQyQixFQVUzQkMsd0JBVjJCLEVBVzNCQyx5QkFYMkIsQ0FBN0I7O0FBY2UsU0FBU1oscUJBQVQsQ0FDYmEsa0JBRGEsRUFFYkMsaUJBRmEsRUFHYkMsY0FIYSxFQUliQyxhQUphLEVBS2JDLGdCQUxhLEVBTWJDLGVBTmEsRUFPYkMsY0FQYSxFQVFiQyxnQkFSYSxFQVNiQyxXQVRhLEVBVWJDLFlBVmEsRUFXYkMsYUFYYSxFQVkyQjtBQUN4QztBQUR3QyxNQUVsQ0MsY0FGa0M7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDRHQUlsQixZQUFNO0FBQ3hCQyw2QkFBU0MsZ0JBQVQsQ0FBMEIsT0FB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O0FBV0Q7QUFDRDs7QUF2WnNDO0FBQUE7QUFBQSxJQUVYbUUsZ0JBRlc7O0FBMFp4QyxTQUFPM0ksY0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nzc30gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtjcmVhdGVTZWxlY3Rvcn0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2guZ2V0JztcbmltcG9ydCBkb2N1bWVudCBmcm9tICdnbG9iYWwvZG9jdW1lbnQnO1xuXG5pbXBvcnQgTW9kYWxEaWFsb2dGYWN0b3J5IGZyb20gJy4vbW9kYWxzL21vZGFsLWRpYWxvZyc7XG5pbXBvcnQge2V4cG9ydEh0bWwsIGlzVmFsaWRNYXBJbmZvLCBleHBvcnRNYXAsIGV4cG9ydEpzb259IGZyb20gJ0BrZXBsZXIuZ2wvdXRpbHMnO1xuaW1wb3J0IHtcbiAgZXhwb3J0RGF0YSxcbiAgZ2V0RmlsZUZvcm1hdE5hbWVzLFxuICBnZXRGaWxlRXh0ZW5zaW9ucyxcbiAgTWFwU3R5bGUsXG4gIFByb3ZpZGVyU3RhdGVcbn0gZnJvbSAnQGtlcGxlci5nbC9yZWR1Y2Vycyc7XG5cbi8vIG1vZGFsc1xuaW1wb3J0IERlbGV0ZURhdGFzZXRNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvZGVsZXRlLWRhdGEtbW9kYWwnO1xuaW1wb3J0IE92ZXJXcml0ZU1hcE1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9vdmVyd3JpdGUtbWFwLW1vZGFsJztcbmltcG9ydCBEYXRhVGFibGVNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvZGF0YS10YWJsZS1tb2RhbCc7XG5pbXBvcnQgTG9hZERhdGFNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvbG9hZC1kYXRhLW1vZGFsJztcbmltcG9ydCBFeHBvcnRJbWFnZU1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9leHBvcnQtaW1hZ2UtbW9kYWwnO1xuaW1wb3J0IEV4cG9ydERhdGFNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvZXhwb3J0LWRhdGEtbW9kYWwnO1xuaW1wb3J0IEV4cG9ydE1hcE1vZGFsRmFjdG9yeSBmcm9tICcuL21vZGFscy9leHBvcnQtbWFwLW1vZGFsL2V4cG9ydC1tYXAtbW9kYWwnO1xuaW1wb3J0IEFkZE1hcFN0eWxlTW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWxzL2FkZC1tYXAtc3R5bGUtbW9kYWwnO1xuaW1wb3J0IFNhdmVNYXBNb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbHMvc2F2ZS1tYXAtbW9kYWwnO1xuaW1wb3J0IFNoYXJlTWFwTW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWxzL3NoYXJlLW1hcC1tb2RhbCc7XG5cbi8vIEJyZWFrcG9pbnRzXG5pbXBvcnQge21lZGlhfSBmcm9tICdAa2VwbGVyLmdsL3N0eWxlcyc7XG5cbi8vIFRlbXBsYXRlXG5pbXBvcnQge1xuICBFWFBPUlRfREFUQV9UWVBFX09QVElPTlMsXG4gIEVYUE9SVF9NQVBfRk9STUFUUyxcbiAgS2V5RXZlbnQsXG4gIEFERF9EQVRBX0lELFxuICBEQVRBX1RBQkxFX0lELFxuICBERUxFVEVfREFUQV9JRCxcbiAgRVhQT1JUX0RBVEFfSUQsXG4gIEVYUE9SVF9JTUFHRV9JRCxcbiAgRVhQT1JUX01BUF9JRCxcbiAgQUREX01BUF9TVFlMRV9JRCxcbiAgU0FWRV9NQVBfSUQsXG4gIFNIQVJFX01BUF9JRCxcbiAgT1ZFUldSSVRFX01BUF9JRFxufSBmcm9tICdAa2VwbGVyLmdsL2NvbnN0YW50cyc7XG5cbmltcG9ydCB7TWFwU3RhdGUsIFVpU3RhdGUsIE9uU3VjY2Vzc0NhbGxCYWNrLCBPbkVycm9yQ2FsbEJhY2t9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuXG5pbXBvcnQge1xuICBWaXNTdGF0ZUFjdGlvbnMsXG4gIFVJU3RhdGVBY3Rpb25zLFxuICBNYXBTdHlsZUFjdGlvbnMsXG4gIFByb3ZpZGVyQWN0aW9uc1xufSBmcm9tICdAa2VwbGVyLmdsL2FjdGlvbnMnO1xuaW1wb3J0IHtNb2RhbERpYWxvZ1Byb3BzfSBmcm9tICcuL2NvbW1vbi9tb2RhbCc7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdAa2VwbGVyLmdsL2Nsb3VkLXByb3ZpZGVycyc7XG5pbXBvcnQge2ZpbmRET01Ob2RlfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtWaXNTdGF0ZX0gZnJvbSAnQGtlcGxlci5nbC9zY2hlbWFzJztcblxuY29uc3QgRGF0YVRhYmxlTW9kYWxTdHlsZSA9IGNzc2BcbiAgdG9wOiA3MHB4O1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogOTB2dztcbiAgbWF4LXdpZHRoOiA5MHZ3O1xuXG4gICR7bWVkaWEucG9ydGFibGVgXG4gICAgcGFkZGluZzogMDtcbiAgYH0gJHttZWRpYS5wYWxtYFxuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIGB9O1xuYDtcbmNvbnN0IHNtYWxsTW9kYWxDc3MgPSBjc3NgXG4gIHdpZHRoOiA0MCU7XG4gIHBhZGRpbmc6IDQwcHggNDBweCAzMnB4IDQwcHg7XG5gO1xuXG5jb25zdCBMb2FkRGF0YU1vZGFsU3R5bGUgPSBjc3NgXG4gIHRvcDogNjBweDtcbmA7XG5cbmNvbnN0IERlZmF1bHRTdHlsZSA9IGNzc2BcbiAgbWF4LXdpZHRoOiA5NjBweDtcbmA7XG5cbmV4cG9ydCB0eXBlIE1vZGFsQ29udGFpbmVyUHJvcHMgPSB7XG4gIGFwcE5hbWU6IHN0cmluZztcbiAgcm9vdE5vZGU6IFJlYWN0LlJlYWN0SW5zdGFuY2UgfCBudWxsIHwgdW5kZWZpbmVkO1xuICBjb250YWluZXJXOiBudW1iZXI7XG4gIGNvbnRhaW5lckg6IG51bWJlcjtcbiAgbWFwYm94QXBpQWNjZXNzVG9rZW46IHN0cmluZztcbiAgbWFwYm94QXBpVXJsPzogc3RyaW5nO1xuICBtYXBTdGF0ZTogTWFwU3RhdGU7XG4gIG1hcFN0eWxlOiBNYXBTdHlsZTtcbiAgdWlTdGF0ZTogVWlTdGF0ZTtcbiAgdmlzU3RhdGU6IFZpc1N0YXRlO1xuICBwcm92aWRlclN0YXRlOiBQcm92aWRlclN0YXRlO1xuICB2aXNTdGF0ZUFjdGlvbnM6IHR5cGVvZiBWaXNTdGF0ZUFjdGlvbnM7XG4gIHVpU3RhdGVBY3Rpb25zOiB0eXBlb2YgVUlTdGF0ZUFjdGlvbnM7XG4gIG1hcFN0eWxlQWN0aW9uczogdHlwZW9mIE1hcFN0eWxlQWN0aW9ucztcbiAgcHJvdmlkZXJBY3Rpb25zOiB0eXBlb2YgUHJvdmlkZXJBY3Rpb25zO1xuICBvblNhdmVUb1N0b3JhZ2U/OiAoKSA9PiB2b2lkO1xuICBjbG91ZFByb3ZpZGVyczogUHJvdmlkZXJbXTtcbiAgb25Mb2FkQ2xvdWRNYXBTdWNjZXNzPzogT25TdWNjZXNzQ2FsbEJhY2s7XG4gIG9uTG9hZENsb3VkTWFwRXJyb3I/OiBPbkVycm9yQ2FsbEJhY2s7XG4gIG9uRXhwb3J0VG9DbG91ZFN1Y2Nlc3M/OiBPblN1Y2Nlc3NDYWxsQmFjaztcbiAgb25FeHBvcnRUb0Nsb3VkRXJyb3I/OiBPbkVycm9yQ2FsbEJhY2s7XG59O1xuXG5Nb2RhbENvbnRhaW5lckZhY3RvcnkuZGVwcyA9IFtcbiAgRGVsZXRlRGF0YXNldE1vZGFsRmFjdG9yeSxcbiAgT3ZlcldyaXRlTWFwTW9kYWxGYWN0b3J5LFxuICBEYXRhVGFibGVNb2RhbEZhY3RvcnksXG4gIExvYWREYXRhTW9kYWxGYWN0b3J5LFxuICBFeHBvcnRJbWFnZU1vZGFsRmFjdG9yeSxcbiAgRXhwb3J0RGF0YU1vZGFsRmFjdG9yeSxcbiAgRXhwb3J0TWFwTW9kYWxGYWN0b3J5LFxuICBBZGRNYXBTdHlsZU1vZGFsRmFjdG9yeSxcbiAgTW9kYWxEaWFsb2dGYWN0b3J5LFxuICBTYXZlTWFwTW9kYWxGYWN0b3J5LFxuICBTaGFyZU1hcE1vZGFsRmFjdG9yeVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWxDb250YWluZXJGYWN0b3J5KFxuICBEZWxldGVEYXRhc2V0TW9kYWw6IFJldHVyblR5cGU8dHlwZW9mIERlbGV0ZURhdGFzZXRNb2RhbEZhY3Rvcnk+LFxuICBPdmVyV3JpdGVNYXBNb2RhbDogUmV0dXJuVHlwZTx0eXBlb2YgT3ZlcldyaXRlTWFwTW9kYWxGYWN0b3J5PixcbiAgRGF0YVRhYmxlTW9kYWw6IFJldHVyblR5cGU8dHlwZW9mIERhdGFUYWJsZU1vZGFsRmFjdG9yeT4sXG4gIExvYWREYXRhTW9kYWw6IFJldHVyblR5cGU8dHlwZW9mIExvYWREYXRhTW9kYWxGYWN0b3J5PixcbiAgRXhwb3J0SW1hZ2VNb2RhbDogUmV0dXJuVHlwZTx0eXBlb2YgRXhwb3J0SW1hZ2VNb2RhbEZhY3Rvcnk+LFxuICBFeHBvcnREYXRhTW9kYWw6IFJldHVyblR5cGU8dHlwZW9mIEV4cG9ydERhdGFNb2RhbEZhY3Rvcnk+LFxuICBFeHBvcnRNYXBNb2RhbDogUmV0dXJuVHlwZTx0eXBlb2YgRXhwb3J0TWFwTW9kYWxGYWN0b3J5PixcbiAgQWRkTWFwU3R5bGVNb2RhbDogUmV0dXJuVHlwZTx0eXBlb2YgQWRkTWFwU3R5bGVNb2RhbEZhY3Rvcnk+LFxuICBNb2RhbERpYWxvZzogUmV0dXJuVHlwZTx0eXBlb2YgTW9kYWxEaWFsb2dGYWN0b3J5PixcbiAgU2F2ZU1hcE1vZGFsOiBSZXR1cm5UeXBlPHR5cGVvZiBTYXZlTWFwTW9kYWxGYWN0b3J5PixcbiAgU2hhcmVNYXBNb2RhbDogUmV0dXJuVHlwZTx0eXBlb2YgU2hhcmVNYXBNb2RhbEZhY3Rvcnk+XG4pOiBSZWFjdC5FbGVtZW50VHlwZTxNb2RhbENvbnRhaW5lclByb3BzPiB7XG4gIC8qKiBAYXVnbWVudHMgUmVhY3QuQ29tcG9uZW50PE1vZGFsQ29udGFpbmVyUHJvcHM+ICovXG4gIGNsYXNzIE1vZGFsQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50PE1vZGFsQ29udGFpbmVyUHJvcHM+IHtcbiAgICAvLyBUT0RPIC0gcmVtb3ZlIHdoZW4gcHJvcCB0eXBlcyBhcmUgZnVsbHkgZXhwb3J0ZWRcbiAgICBjb21wb25lbnREaWRNb3VudCA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fb25LZXlVcCk7XG4gICAgfTtcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fb25LZXlVcCk7XG4gICAgfVxuXG4gICAgY2xvdWRQcm92aWRlcnMgPSAocHJvcHM6IE1vZGFsQ29udGFpbmVyUHJvcHMpID0+IHByb3BzLmNsb3VkUHJvdmlkZXJzO1xuICAgIHByb3ZpZGVyV2l0aFN0b3JhZ2UgPSBjcmVhdGVTZWxlY3Rvcih0aGlzLmNsb3VkUHJvdmlkZXJzLCBjbG91ZFByb3ZpZGVycyA9PlxuICAgICAgY2xvdWRQcm92aWRlcnMuZmlsdGVyKHAgPT4gcC5oYXNQcml2YXRlU3RvcmFnZSgpKVxuICAgICk7XG4gICAgcHJvdmlkZXJXaXRoU2hhcmUgPSBjcmVhdGVTZWxlY3Rvcih0aGlzLmNsb3VkUHJvdmlkZXJzLCBjbG91ZFByb3ZpZGVycyA9PlxuICAgICAgY2xvdWRQcm92aWRlcnMuZmlsdGVyKHAgPT4gcC5oYXNTaGFyaW5nVXJsKCkpXG4gICAgKTtcblxuICAgIF9vbktleVVwID0gZXZlbnQgPT4ge1xuICAgICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG4gICAgICBpZiAoa2V5Q29kZSA9PT0gS2V5RXZlbnQuRE9NX1ZLX0VTQ0FQRSkge1xuICAgICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9jbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChudWxsKTtcbiAgICB9O1xuXG4gICAgX2RlbGV0ZURhdGFzZXQgPSBrZXkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy52aXNTdGF0ZUFjdGlvbnMucmVtb3ZlRGF0YXNldChrZXkpO1xuICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgIH07XG5cbiAgICBfb25BZGRDdXN0b21NYXBTdHlsZSA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMubWFwU3R5bGVBY3Rpb25zLmFkZEN1c3RvbU1hcFN0eWxlKCk7XG4gICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XG4gICAgfTtcblxuICAgIF9vbkZpbGVVcGxvYWQgPSBmaWxlTGlzdCA9PiB7XG4gICAgICB0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5sb2FkRmlsZXMoZmlsZUxpc3QpO1xuICAgIH07XG5cbiAgICBfb25FeHBvcnRJbWFnZSA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy51aVN0YXRlLmV4cG9ydEltYWdlLnByb2Nlc3NpbmcpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggZXhwb3J0SW1hZ2UgbWV0aG9kXG4gICAgICAgIGV4cG9ydEltYWdlKHRoaXMucHJvcHMudWlTdGF0ZS5leHBvcnRJbWFnZSwgYCR7dGhpcy5wcm9wcy5hcHBOYW1lfS5wbmdgKTtcbiAgICAgICAgdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy5jbGVhbnVwRXhwb3J0SW1hZ2UoKTtcbiAgICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfb25FeHBvcnREYXRhID0gKCkgPT4ge1xuICAgICAgZXhwb3J0RGF0YSh0aGlzLnByb3BzLCB0aGlzLnByb3BzLnVpU3RhdGUuZXhwb3J0RGF0YSk7XG4gICAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XG4gICAgfTtcblxuICAgIF9vbkV4cG9ydE1hcCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHt1aVN0YXRlfSA9IHRoaXMucHJvcHM7XG4gICAgICBjb25zdCB7Zm9ybWF0fSA9IHVpU3RhdGUuZXhwb3J0TWFwO1xuICAgICAgKGZvcm1hdCA9PT0gRVhQT1JUX01BUF9GT1JNQVRTLkhUTUwgPyBleHBvcnRIdG1sIDogZXhwb3J0SnNvbikoXG4gICAgICAgIHRoaXMucHJvcHMsXG4gICAgICAgIHRoaXMucHJvcHMudWlTdGF0ZS5leHBvcnRNYXBbZm9ybWF0XSB8fCB7fVxuICAgICAgKTtcbiAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcbiAgICB9O1xuXG4gICAgX2V4cG9ydEZpbGVUb0Nsb3VkID0gKHtwcm92aWRlciwgaXNQdWJsaWMsIG92ZXJ3cml0ZSwgY2xvc2VNb2RhbH0pID0+IHtcbiAgICAgIGNvbnN0IHRvU2F2ZSA9IGV4cG9ydE1hcCh0aGlzLnByb3BzKTtcblxuICAgICAgdGhpcy5wcm9wcy5wcm92aWRlckFjdGlvbnMuZXhwb3J0RmlsZVRvQ2xvdWQoe1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG1hcERhdGE6IHRvU2F2ZSxcbiAgICAgICAgcHJvdmlkZXIsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBpc1B1YmxpYyxcbiAgICAgICAgICBvdmVyd3JpdGVcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VNb2RhbCxcbiAgICAgICAgb25TdWNjZXNzOiB0aGlzLnByb3BzLm9uRXhwb3J0VG9DbG91ZFN1Y2Nlc3MsXG4gICAgICAgIG9uRXJyb3I6IHRoaXMucHJvcHMub25FeHBvcnRUb0Nsb3VkRXJyb3JcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfb25TYXZlTWFwID0gKG92ZXJ3cml0ZSA9IGZhbHNlKSA9PiB7XG4gICAgICBjb25zdCB7Y3VycmVudFByb3ZpZGVyfSA9IHRoaXMucHJvcHMucHJvdmlkZXJTdGF0ZTtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gdGhpcy5wcm9wcy5jbG91ZFByb3ZpZGVycy5maW5kKHAgPT4gcC5uYW1lID09PSBjdXJyZW50UHJvdmlkZXIpO1xuICAgICAgdGhpcy5fZXhwb3J0RmlsZVRvQ2xvdWQoe1xuICAgICAgICBwcm92aWRlcixcbiAgICAgICAgaXNQdWJsaWM6IGZhbHNlLFxuICAgICAgICBvdmVyd3JpdGUsXG4gICAgICAgIGNsb3NlTW9kYWw6IHRydWVcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfb25PdmVyd3JpdGVNYXAgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9vblNhdmVNYXAodHJ1ZSk7XG4gICAgfTtcblxuICAgIF9vblNoYXJlTWFwVXJsID0gcHJvdmlkZXIgPT4ge1xuICAgICAgdGhpcy5fZXhwb3J0RmlsZVRvQ2xvdWQoe3Byb3ZpZGVyLCBpc1B1YmxpYzogdHJ1ZSwgb3ZlcndyaXRlOiBmYWxzZSwgY2xvc2VNb2RhbDogZmFsc2V9KTtcbiAgICB9O1xuXG4gICAgX29uQ2xvc2VTYXZlTWFwID0gKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5wcm92aWRlckFjdGlvbnMucmVzZXRQcm92aWRlclN0YXR1cygpO1xuICAgICAgdGhpcy5fY2xvc2VNb2RhbCgpO1xuICAgIH07XG5cbiAgICBfb25Mb2FkQ2xvdWRNYXAgPSBwYXlsb2FkID0+IHtcbiAgICAgIHRoaXMucHJvcHMucHJvdmlkZXJBY3Rpb25zLmxvYWRDbG91ZE1hcCh7XG4gICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgIG9uU3VjY2VzczogdGhpcy5wcm9wcy5vbkxvYWRDbG91ZE1hcFN1Y2Nlc3MsXG4gICAgICAgIG9uRXJyb3I6IHRoaXMucHJvcHMub25Mb2FkQ2xvdWRNYXBFcnJvclxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIGNvbXBsZXhpdHkgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGNvbnRhaW5lclcsXG4gICAgICAgIGNvbnRhaW5lckgsXG4gICAgICAgIG1hcFN0eWxlLFxuICAgICAgICBtYXBTdGF0ZSxcbiAgICAgICAgdWlTdGF0ZSxcbiAgICAgICAgdmlzU3RhdGUsXG4gICAgICAgIHJvb3ROb2RlLFxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMsXG4gICAgICAgIHVpU3RhdGVBY3Rpb25zLFxuICAgICAgICBwcm92aWRlclN0YXRlXG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHtjdXJyZW50TW9kYWwsIGRhdGFzZXRLZXlUb1JlbW92ZX0gPSB1aVN0YXRlO1xuICAgICAgY29uc3Qge2RhdGFzZXRzLCBsYXllcnMsIGVkaXRpbmdEYXRhc2V0fSA9IHZpc1N0YXRlO1xuXG4gICAgICBsZXQgdGVtcGxhdGU6IEpTWC5FbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gICAgICBsZXQgbW9kYWxQcm9wczogUGFydGlhbDxNb2RhbERpYWxvZ1Byb3BzPiA9IHt9O1xuXG4gICAgICAvLyBUT0RPIC0gY3VycmVudE1vZGFsIGlzIGEgc3RyaW5nXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBpZiAoY3VycmVudE1vZGFsICYmIGN1cnJlbnRNb2RhbC5pZCAmJiBjdXJyZW50TW9kYWwudGVtcGxhdGUpIHtcbiAgICAgICAgLy8gaWYgY3VycmVudE1kb2FsIHRlbXBsYXRlIGlzIGFscmVhZHkgcHJvdmlkZWRcbiAgICAgICAgLy8gVE9ETzogbmVlZCB0byBjaGVjayB3aGV0aGVyIHRlbXBsYXRlIGlzIHZhbGlkXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgdGVtcGxhdGUgPSA8Y3VycmVudE1vZGFsLnRlbXBsYXRlIC8+O1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIG1vZGFsUHJvcHMgPSBjdXJyZW50TW9kYWwubW9kYWxQcm9wcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXRjaCAoY3VycmVudE1vZGFsKSB7XG4gICAgICAgICAgY2FzZSBEQVRBX1RBQkxFX0lEOlxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBjb250YWluZXJXICogMC45O1xuICAgICAgICAgICAgdGVtcGxhdGUgPSAoXG4gICAgICAgICAgICAgIDxEYXRhVGFibGVNb2RhbFxuICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgICBkYXRhSWQ9e2VkaXRpbmdEYXRhc2V0fVxuICAgICAgICAgICAgICAgIHNob3dEYXRhc2V0VGFibGU9e3Zpc1N0YXRlQWN0aW9ucy5zaG93RGF0YXNldFRhYmxlfVxuICAgICAgICAgICAgICAgIHNvcnRUYWJsZUNvbHVtbj17dmlzU3RhdGVBY3Rpb25zLnNvcnRUYWJsZUNvbHVtbn1cbiAgICAgICAgICAgICAgICBwaW5UYWJsZUNvbHVtbj17dmlzU3RhdGVBY3Rpb25zLnBpblRhYmxlQ29sdW1ufVxuICAgICAgICAgICAgICAgIGNvcHlUYWJsZUNvbHVtbj17dmlzU3RhdGVBY3Rpb25zLmNvcHlUYWJsZUNvbHVtbn1cbiAgICAgICAgICAgICAgICBzZXRDb2x1bW5EaXNwbGF5Rm9ybWF0PXt2aXNTdGF0ZUFjdGlvbnMuc2V0Q29sdW1uRGlzcGxheUZvcm1hdH1cbiAgICAgICAgICAgICAgICB1aVN0YXRlQWN0aW9ucz17dWlTdGF0ZUFjdGlvbnN9XG4gICAgICAgICAgICAgICAgdWlTdGF0ZT17dWlTdGF0ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IHdlIG5lZWQgdG8gbWFrZSB0aGlzIHdpZHRoIGNvbnNpc3RlbnQgd2l0aCB0aGUgY3NzIHJ1bGUgZGVmaW5lZCBtb2RhbC5qczozMiBtYXgtd2lkdGg6IDcwdndcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgLy8gVE9ETyBmaXggdGhpcyBhZnRlciBhZGQgdHlwZXMgdG8gVGhlbWVcbiAgICAgICAgICAgIG1vZGFsUHJvcHMuY3NzU3R5bGUgPSBjc3NgXG4gICAgICAgICAgICAgICR7RGF0YVRhYmxlTW9kYWxTdHlsZX07XG4gICAgICAgICAgICAgICR7bWVkaWEucGFsbWBcbiAgICAgICAgICAgICAgICB3aWR0aDogJHt3aWR0aH1weDtcbiAgICAgICAgICAgICAgYH07XG4gICAgICAgICAgICBgO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBERUxFVEVfREFUQV9JRDpcbiAgICAgICAgICAgIC8vIHZhbGlkYXRlIG9wdGlvbnNcbiAgICAgICAgICAgIGlmIChkYXRhc2V0S2V5VG9SZW1vdmUgJiYgZGF0YXNldHMgJiYgZGF0YXNldHNbZGF0YXNldEtleVRvUmVtb3ZlXSkge1xuICAgICAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgICAgICA8RGVsZXRlRGF0YXNldE1vZGFsIGRhdGFzZXQ9e2RhdGFzZXRzW2RhdGFzZXRLZXlUb1JlbW92ZV19IGxheWVycz17bGF5ZXJzfSAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBtb2RhbFByb3BzID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnbW9kYWwudGl0bGUuZGVsZXRlRGF0YXNldCcsXG4gICAgICAgICAgICAgICAgY3NzU3R5bGU6IHNtYWxsTW9kYWxDc3MsXG4gICAgICAgICAgICAgICAgZm9vdGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9uQ29uZmlybTogKCkgPT4gdGhpcy5fZGVsZXRlRGF0YXNldChkYXRhc2V0S2V5VG9SZW1vdmUpLFxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLl9jbG9zZU1vZGFsLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IHtcbiAgICAgICAgICAgICAgICAgIG5lZ2F0aXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICBjaGlsZHJlbjogJ21vZGFsLmJ1dHRvbi5kZWxldGUnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7IC8vIGluIGNhc2Ugd2UgYWRkIGEgbmV3IGNhc2UgYWZ0ZXIgdGhpcyBvbmVcbiAgICAgICAgICBjYXNlIEFERF9EQVRBX0lEOlxuICAgICAgICAgICAgdGVtcGxhdGUgPSAoXG4gICAgICAgICAgICAgIDxMb2FkRGF0YU1vZGFsXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVyU3RhdGV9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5fY2xvc2VNb2RhbH1cbiAgICAgICAgICAgICAgICBvbkZpbGVVcGxvYWQ9e3RoaXMuX29uRmlsZVVwbG9hZH1cbiAgICAgICAgICAgICAgICBvbkxvYWRDbG91ZE1hcD17dGhpcy5fb25Mb2FkQ2xvdWRNYXB9XG4gICAgICAgICAgICAgICAgY2xvdWRQcm92aWRlcnM9e3RoaXMucHJvdmlkZXJXaXRoU3RvcmFnZSh0aGlzLnByb3BzKX1cbiAgICAgICAgICAgICAgICBvblNldENsb3VkUHJvdmlkZXI9e3RoaXMucHJvcHMucHJvdmlkZXJBY3Rpb25zLnNldENsb3VkUHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgZ2V0U2F2ZWRNYXBzPXt0aGlzLnByb3BzLnByb3ZpZGVyQWN0aW9ucy5nZXRTYXZlZE1hcHN9XG4gICAgICAgICAgICAgICAgbG9hZEZpbGVzPXt1aVN0YXRlLmxvYWRGaWxlc31cbiAgICAgICAgICAgICAgICBmaWxlTG9hZGluZz17dmlzU3RhdGUuZmlsZUxvYWRpbmd9XG4gICAgICAgICAgICAgICAgZmlsZUxvYWRpbmdQcm9ncmVzcz17dmlzU3RhdGUuZmlsZUxvYWRpbmdQcm9ncmVzc31cbiAgICAgICAgICAgICAgICBmaWxlRm9ybWF0TmFtZXM9e2dldEZpbGVGb3JtYXROYW1lcyh0aGlzLnByb3BzLnZpc1N0YXRlKX1cbiAgICAgICAgICAgICAgICBmaWxlRXh0ZW5zaW9ucz17Z2V0RmlsZUV4dGVuc2lvbnModGhpcy5wcm9wcy52aXNTdGF0ZSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdtb2RhbC50aXRsZS5hZGREYXRhVG9NYXAnLFxuICAgICAgICAgICAgICBjc3NTdHlsZTogTG9hZERhdGFNb2RhbFN0eWxlLFxuICAgICAgICAgICAgICBmb290ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX2Nsb3NlTW9kYWxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIEVYUE9SVF9JTUFHRV9JRDpcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICA8RXhwb3J0SW1hZ2VNb2RhbFxuICAgICAgICAgICAgICAgIGV4cG9ydEltYWdlPXt1aVN0YXRlLmV4cG9ydEltYWdlfVxuICAgICAgICAgICAgICAgIG1hcFc9e2NvbnRhaW5lcld9XG4gICAgICAgICAgICAgICAgbWFwSD17Y29udGFpbmVySH1cbiAgICAgICAgICAgICAgICBvblVwZGF0ZUltYWdlU2V0dGluZz17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0SW1hZ2VTZXR0aW5nfVxuICAgICAgICAgICAgICAgIGNsZWFudXBFeHBvcnRJbWFnZT17dWlTdGF0ZUFjdGlvbnMuY2xlYW51cEV4cG9ydEltYWdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnbW9kYWwudGl0bGUuZXhwb3J0SW1hZ2UnLFxuICAgICAgICAgICAgICBjc3NTdHlsZTogJycsXG4gICAgICAgICAgICAgIGZvb3RlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgb25DYW5jZWw6IHRoaXMuX2Nsb3NlTW9kYWwsXG4gICAgICAgICAgICAgIG9uQ29uZmlybTogdGhpcy5fb25FeHBvcnRJbWFnZSxcbiAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjoge1xuICAgICAgICAgICAgICAgIGxhcmdlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiB1aVN0YXRlLmV4cG9ydEltYWdlLnByb2Nlc3NpbmcsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdtb2RhbC5idXR0b24uZG93bmxvYWQnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIEVYUE9SVF9EQVRBX0lEOlxuICAgICAgICAgICAgdGVtcGxhdGUgPSAoXG4gICAgICAgICAgICAgIDxFeHBvcnREYXRhTW9kYWxcbiAgICAgICAgICAgICAgICB7Li4udWlTdGF0ZS5leHBvcnREYXRhfVxuICAgICAgICAgICAgICAgIHN1cHBvcnRlZERhdGFUeXBlcz17RVhQT1JUX0RBVEFfVFlQRV9PUFRJT05TfVxuICAgICAgICAgICAgICAgIGRhdGFzZXRzPXtkYXRhc2V0c31cbiAgICAgICAgICAgICAgICBhcHBseUNQVUZpbHRlcj17dGhpcy5wcm9wcy52aXNTdGF0ZUFjdGlvbnMuYXBwbHlDUFVGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VFeHBvcnREYXRhVHlwZT17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0RGF0YVR5cGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2VFeHBvcnRTZWxlY3RlZERhdGFzZXQ9e3VpU3RhdGVBY3Rpb25zLnNldEV4cG9ydFNlbGVjdGVkRGF0YXNldH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUV4cG9ydEZpbHRlcmVkPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRGaWx0ZXJlZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtb2RhbFByb3BzID0ge1xuICAgICAgICAgICAgICB0aXRsZTogJ21vZGFsLnRpdGxlLmV4cG9ydERhdGEnLFxuICAgICAgICAgICAgICBjc3NTdHlsZTogJycsXG4gICAgICAgICAgICAgIGZvb3RlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgb25DYW5jZWw6IHRoaXMuX2Nsb3NlTW9kYWwsXG4gICAgICAgICAgICAgIG9uQ29uZmlybTogdGhpcy5fb25FeHBvcnREYXRhLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdtb2RhbC5idXR0b24uZXhwb3J0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBFWFBPUlRfTUFQX0lEOlxuICAgICAgICAgICAgY29uc3Qga2VwbGVyR2xDb25maWcgPSB2aXNTdGF0ZS5zY2hlbWEuZ2V0Q29uZmlnVG9TYXZlKHtcbiAgICAgICAgICAgICAgbWFwU3R5bGUsXG4gICAgICAgICAgICAgIHZpc1N0YXRlLFxuICAgICAgICAgICAgICBtYXBTdGF0ZSxcbiAgICAgICAgICAgICAgdWlTdGF0ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgICAgPEV4cG9ydE1hcE1vZGFsXG4gICAgICAgICAgICAgICAgY29uZmlnPXtrZXBsZXJHbENvbmZpZ31cbiAgICAgICAgICAgICAgICBvcHRpb25zPXt1aVN0YXRlLmV4cG9ydE1hcH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZUV4cG9ydE1hcEZvcm1hdD17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0TWFwRm9ybWF0fVxuICAgICAgICAgICAgICAgIG9uRWRpdFVzZXJNYXBib3hBY2Nlc3NUb2tlbj17dWlTdGF0ZUFjdGlvbnMuc2V0VXNlck1hcGJveEFjY2Vzc1Rva2VufVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlRXhwb3J0TWFwSFRNTE1vZGU9e3VpU3RhdGVBY3Rpb25zLnNldEV4cG9ydEhUTUxNYXBNb2RlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnbW9kYWwudGl0bGUuZXhwb3J0TWFwJyxcbiAgICAgICAgICAgICAgY3NzU3R5bGU6ICcnLFxuICAgICAgICAgICAgICBmb290ZXI6IHRydWUsXG4gICAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLl9jbG9zZU1vZGFsLFxuICAgICAgICAgICAgICBvbkNvbmZpcm06IHRoaXMuX29uRXhwb3J0TWFwLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdtb2RhbC5idXR0b24uZXhwb3J0J1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBBRERfTUFQX1NUWUxFX0lEOlxuICAgICAgICAgICAgdGVtcGxhdGUgPSAoXG4gICAgICAgICAgICAgIDxBZGRNYXBTdHlsZU1vZGFsXG4gICAgICAgICAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW49e3RoaXMucHJvcHMubWFwYm94QXBpQWNjZXNzVG9rZW59XG4gICAgICAgICAgICAgICAgbWFwYm94QXBpVXJsPXt0aGlzLnByb3BzLm1hcGJveEFwaVVybH1cbiAgICAgICAgICAgICAgICBtYXBTdGF0ZT17dGhpcy5wcm9wcy5tYXBTdGF0ZX1cbiAgICAgICAgICAgICAgICBpbnB1dFN0eWxlPXttYXBTdHlsZS5pbnB1dFN0eWxlfVxuICAgICAgICAgICAgICAgIGlucHV0TWFwU3R5bGU9e3RoaXMucHJvcHMubWFwU3R5bGVBY3Rpb25zLmlucHV0TWFwU3R5bGV9XG4gICAgICAgICAgICAgICAgbG9hZEN1c3RvbU1hcFN0eWxlPXt0aGlzLnByb3BzLm1hcFN0eWxlQWN0aW9ucy5sb2FkQ3VzdG9tTWFwU3R5bGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdtb2RhbC50aXRsZS5hZGRDdXN0b21NYXBib3hTdHlsZScsXG4gICAgICAgICAgICAgIGNzc1N0eWxlOiAnJyxcbiAgICAgICAgICAgICAgZm9vdGVyOiB0cnVlLFxuICAgICAgICAgICAgICBvbkNhbmNlbDogdGhpcy5fY2xvc2VNb2RhbCxcbiAgICAgICAgICAgICAgb25Db25maXJtOiB0aGlzLl9vbkFkZEN1c3RvbU1hcFN0eWxlLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFtYXBTdHlsZS5pbnB1dFN0eWxlLnN0eWxlLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAnbW9kYWwuYnV0dG9uLmFkZFN0eWxlJ1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBTQVZFX01BUF9JRDpcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICA8U2F2ZU1hcE1vZGFsXG4gICAgICAgICAgICAgICAgey4uLnByb3ZpZGVyU3RhdGV9XG4gICAgICAgICAgICAgICAgZXhwb3J0SW1hZ2U9e3VpU3RhdGUuZXhwb3J0SW1hZ2V9XG4gICAgICAgICAgICAgICAgbWFwSW5mbz17dmlzU3RhdGUubWFwSW5mb31cbiAgICAgICAgICAgICAgICBvblNldE1hcEluZm89e3Zpc1N0YXRlQWN0aW9ucy5zZXRNYXBJbmZvfVxuICAgICAgICAgICAgICAgIGNsb3VkUHJvdmlkZXJzPXt0aGlzLnByb3ZpZGVyV2l0aFN0b3JhZ2UodGhpcy5wcm9wcyl9XG4gICAgICAgICAgICAgICAgb25TZXRDbG91ZFByb3ZpZGVyPXt0aGlzLnByb3BzLnByb3ZpZGVyQWN0aW9ucy5zZXRDbG91ZFByb3ZpZGVyfVxuICAgICAgICAgICAgICAgIGNsZWFudXBFeHBvcnRJbWFnZT17dWlTdGF0ZUFjdGlvbnMuY2xlYW51cEV4cG9ydEltYWdlfVxuICAgICAgICAgICAgICAgIG9uVXBkYXRlSW1hZ2VTZXR0aW5nPXt1aVN0YXRlQWN0aW9ucy5zZXRFeHBvcnRJbWFnZVNldHRpbmd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbW9kYWxQcm9wcyA9IHtcbiAgICAgICAgICAgICAgdGl0bGU6ICdtb2RhbC50aXRsZS5zYXZlTWFwJyxcbiAgICAgICAgICAgICAgY3NzU3R5bGU6ICcnLFxuICAgICAgICAgICAgICBmb290ZXI6IHRydWUsXG4gICAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLl9jbG9zZU1vZGFsLFxuICAgICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHRoaXMuX29uU2F2ZU1hcChmYWxzZSksXG4gICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IHtcbiAgICAgICAgICAgICAgICBsYXJnZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgIHVpU3RhdGUuZXhwb3J0SW1hZ2UucHJvY2Vzc2luZyB8fFxuICAgICAgICAgICAgICAgICAgIWlzVmFsaWRNYXBJbmZvKHZpc1N0YXRlLm1hcEluZm8pIHx8XG4gICAgICAgICAgICAgICAgICAhcHJvdmlkZXJTdGF0ZS5jdXJyZW50UHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdtb2RhbC5idXR0b24uc2F2ZSdcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgT1ZFUldSSVRFX01BUF9JRDpcbiAgICAgICAgICAgIHRlbXBsYXRlID0gKFxuICAgICAgICAgICAgICA8T3ZlcldyaXRlTWFwTW9kYWxcbiAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZXJTdGF0ZX1cbiAgICAgICAgICAgICAgICBjbG91ZFByb3ZpZGVycz17dGhpcy5wcm9wcy5jbG91ZFByb3ZpZGVyc31cbiAgICAgICAgICAgICAgICB0aXRsZT17Z2V0KHZpc1N0YXRlLCBbJ21hcEluZm8nLCAndGl0bGUnXSl9XG4gICAgICAgICAgICAgICAgb25VcGRhdGVJbWFnZVNldHRpbmc9e3VpU3RhdGVBY3Rpb25zLnNldEV4cG9ydEltYWdlU2V0dGluZ31cbiAgICAgICAgICAgICAgICBjbGVhbnVwRXhwb3J0SW1hZ2U9e3VpU3RhdGVBY3Rpb25zLmNsZWFudXBFeHBvcnRJbWFnZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtb2RhbFByb3BzID0ge1xuICAgICAgICAgICAgICB0aXRsZTogJ092ZXJ3cml0ZSBFeGlzdGluZyBGaWxlPycsXG4gICAgICAgICAgICAgIGNzc1N0eWxlOiBzbWFsbE1vZGFsQ3NzLFxuICAgICAgICAgICAgICBmb290ZXI6IHRydWUsXG4gICAgICAgICAgICAgIG9uQ29uZmlybTogdGhpcy5fb25PdmVyd3JpdGVNYXAsXG4gICAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLl9jbG9zZU1vZGFsLFxuICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiB7XG4gICAgICAgICAgICAgICAgbGFyZ2U6IHRydWUsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46ICdZZXMnLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgdWlTdGF0ZS5leHBvcnRJbWFnZS5wcm9jZXNzaW5nIHx8XG4gICAgICAgICAgICAgICAgICAhaXNWYWxpZE1hcEluZm8odmlzU3RhdGUubWFwSW5mbykgfHxcbiAgICAgICAgICAgICAgICAgICFwcm92aWRlclN0YXRlLmN1cnJlbnRQcm92aWRlclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBTSEFSRV9NQVBfSUQ6XG4gICAgICAgICAgICB0ZW1wbGF0ZSA9IChcbiAgICAgICAgICAgICAgPFNoYXJlTWFwTW9kYWxcbiAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZXJTdGF0ZX1cbiAgICAgICAgICAgICAgICBpc1JlYWR5PXshdWlTdGF0ZS5leHBvcnRJbWFnZS5wcm9jZXNzaW5nfVxuICAgICAgICAgICAgICAgIGNsb3VkUHJvdmlkZXJzPXt0aGlzLnByb3ZpZGVyV2l0aFNoYXJlKHRoaXMucHJvcHMpfVxuICAgICAgICAgICAgICAgIG9uRXhwb3J0PXt0aGlzLl9vblNoYXJlTWFwVXJsfVxuICAgICAgICAgICAgICAgIG9uU2V0Q2xvdWRQcm92aWRlcj17dGhpcy5wcm9wcy5wcm92aWRlckFjdGlvbnMuc2V0Q2xvdWRQcm92aWRlcn1cbiAgICAgICAgICAgICAgICBjbGVhbnVwRXhwb3J0SW1hZ2U9e3VpU3RhdGVBY3Rpb25zLmNsZWFudXBFeHBvcnRJbWFnZX1cbiAgICAgICAgICAgICAgICBvblVwZGF0ZUltYWdlU2V0dGluZz17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0SW1hZ2VTZXR0aW5nfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1vZGFsUHJvcHMgPSB7XG4gICAgICAgICAgICAgIHRpdGxlOiAnbW9kYWwudGl0bGUuc2hhcmVVUkwnLFxuICAgICAgICAgICAgICBjc3NTdHlsZTogJycsXG4gICAgICAgICAgICAgIG9uQ2FuY2VsOiB0aGlzLl9vbkNsb3NlU2F2ZU1hcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm9vdE5vZGUgPyAoXG4gICAgICAgIDxNb2RhbERpYWxvZ1xuICAgICAgICAgIHBhcmVudFNlbGVjdG9yPXsoKSA9PiBmaW5kRE9NTm9kZShyb290Tm9kZSkgYXMgSFRNTEVsZW1lbnR9XG4gICAgICAgICAgaXNPcGVuPXtCb29sZWFuKGN1cnJlbnRNb2RhbCl9XG4gICAgICAgICAgb25DYW5jZWw9e3RoaXMuX2Nsb3NlTW9kYWx9XG4gICAgICAgICAgey4uLm1vZGFsUHJvcHN9XG4gICAgICAgICAgY3NzU3R5bGU9e0RlZmF1bHRTdHlsZS5jb25jYXQobW9kYWxQcm9wcy5jc3NTdHlsZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7dGVtcGxhdGV9XG4gICAgICAgIDwvTW9kYWxEaWFsb2c+XG4gICAgICApIDogbnVsbDtcbiAgICB9XG4gICAgLyogZXNsaW50LWVuYWJsZSBjb21wbGV4aXR5ICovXG4gIH1cblxuICByZXR1cm4gTW9kYWxDb250YWluZXI7XG59XG4iXX0=