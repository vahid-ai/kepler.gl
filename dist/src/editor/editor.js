"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = EditorFactory;

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

var _window = _interopRequireDefault(require("global/window"));

var _classnames = _interopRequireDefault(require("classnames"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var _reselect = require("reselect");

var _featureActionPanel = _interopRequireDefault(require("./feature-action-panel"));

var _constants = require("@kepler.gl/constants");

var _layers = require("@kepler.gl/layers");

var _templateObject;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DECKGL_RENDER_LAYER = 'default-deckgl-overlay-wrapper';

var StyledWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n"])));

var editorLayerFilter = function editorLayerFilter(layer) {
  return _constants.EDITOR_AVAILABLE_LAYERS.includes(layer.type);
};

EditorFactory.deps = [_featureActionPanel["default"]];

function EditorFactory(FeatureActionPanel) {
  var EditorUnmemoized = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(EditorUnmemoized, _Component);

    var _super = _createSuper(EditorUnmemoized);

    function EditorUnmemoized() {
      var _this;

      (0, _classCallCheck2["default"])(this, EditorUnmemoized);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {});
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "layerSelector", function (props) {
        return props.layers;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filterSelector", function (props) {
        return props.filters;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectedFeatureIdSelector", function (props) {
        return (0, _lodash["default"])(props, ['editor', 'selectedFeature', 'id']);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "editorFeatureSelector", function (props) {
        return (0, _lodash["default"])(props, ['editor', 'features']);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "currentFilterSelector", (0, _reselect.createSelector)(_this.filterSelector, _this.selectedFeatureIdSelector, function (filters, selectedFeatureId) {
        return filters.find(function (f) {
          return f.value && f.value.id === selectedFeatureId;
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "availableLayersSelector", (0, _reselect.createSelector)(_this.layerSelector, function (layers) {
        return layers.filter(editorLayerFilter).filter(function (layer) {
          var _layer$config;

          return ((_layer$config = layer.config) === null || _layer$config === void 0 ? void 0 : _layer$config.isVisible) && layer.id !== _constants.GEOCODER_LAYER_ID;
        });
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "allFeaturesSelector", (0, _reselect.createSelector)(_this.filterSelector, _this.editorFeatureSelector, function (filters, editorFeatures) {
        return filters.filter(function (f) {
          return f.type === _constants.FILTER_TYPES.polygon;
        }).map(function (f) {
          return f.value;
        }).concat(editorFeatures);
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isInFocus", function () {
        var _document$activeEleme;

        return ((_document$activeEleme = document.activeElement) === null || _document$activeEleme === void 0 ? void 0 : _document$activeEleme.id) === DECKGL_RENDER_LAYER;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onKeyPressed", function (event) {
        if (_this.isInFocus()) {
          switch (event.keyCode) {
            case _constants.KeyEvent.DOM_VK_DELETE:
            case _constants.KeyEvent.DOM_VK_BACK_SPACE:
              _this._onDeleteSelectedFeature();

              break;

            case _constants.KeyEvent.DOM_VK_ESCAPE:
              // reset active drawing
              if (_layers.EditorLayerUtils.isDrawingActive(true, _this.props.editor.mode)) {
                _this.props.onSetEditorMode(_constants.EDITOR_MODES.EDIT);
              }

              _this.props.onSelect(null);

              break;

            default:
              break;
          }
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_onDeleteSelectedFeature", function () {
        var editor = _this.props.editor;
        var selectedFeature = editor.selectedFeature;

        if (selectedFeature) {
          _this.props.onDeleteFeature(selectedFeature);
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_closeFeatureAction", function () {
        // reset selection context
        var selectedFeature = _this.props.editor.selectedFeature;

        _this.props.onSelect(selectedFeature);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_togglePolygonFilter", function (layer) {
        var selectedFeature = _this.props.editor.selectedFeature;

        if (selectedFeature) {
          _this.props.onTogglePolygonFilter(layer, selectedFeature);
        }
      });
      return _this;
    }

    (0, _createClass2["default"])(EditorUnmemoized, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        _window["default"].addEventListener('keydown', this._onKeyPressed);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        _window["default"].removeEventListener('keydown', this._onKeyPressed);
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            className = _this$props.className,
            datasets = _this$props.datasets,
            editor = _this$props.editor,
            style = _this$props.style,
            index = _this$props.index;
        var selectedFeature = editor.selectedFeature,
            selectionContext = editor.selectionContext;
        var currentFilter = this.currentFilterSelector(this.props);
        var availableLayers = this.availableLayersSelector(this.props);

        var _ref = selectionContext || {},
            rightClick = _ref.rightClick,
            position = _ref.position,
            mapIndex = _ref.mapIndex;

        return /*#__PURE__*/_react["default"].createElement(StyledWrapper, {
          className: (0, _classnames["default"])('editor', className),
          style: style
        }, Boolean(rightClick) && selectedFeature && index === mapIndex ? /*#__PURE__*/_react["default"].createElement(FeatureActionPanel, {
          selectedFeature: selectedFeature,
          datasets: datasets,
          layers: availableLayers,
          currentFilter: currentFilter,
          onClose: this._closeFeatureAction,
          onDeleteFeature: this._onDeleteSelectedFeature,
          onToggleLayer: this._togglePolygonFilter,
          position: position || null
        }) : null);
      }
    }]);
    return EditorUnmemoized;
  }(_react.Component);

  (0, _defineProperty2["default"])(EditorUnmemoized, "defaultProps", {});
  (0, _defineProperty2["default"])(EditorUnmemoized, "displayName", 'Editor');

  var Editor = /*#__PURE__*/_react["default"].memo(EditorUnmemoized);

  Editor.displayName = 'Editor';
  return Editor;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9lZGl0b3IvZWRpdG9yLnRzeCJdLCJuYW1lcyI6WyJERUNLR0xfUkVOREVSX0xBWUVSIiwiU3R5bGVkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsImVkaXRvckxheWVyRmlsdGVyIiwibGF5ZXIiLCJFRElUT1JfQVZBSUxBQkxFX0xBWUVSUyIsImluY2x1ZGVzIiwidHlwZSIsIkVkaXRvckZhY3RvcnkiLCJkZXBzIiwiRmVhdHVyZUFjdGlvblBhbmVsRmFjdG9yeSIsIkZlYXR1cmVBY3Rpb25QYW5lbCIsIkVkaXRvclVubWVtb2l6ZWQiLCJwcm9wcyIsImxheWVycyIsImZpbHRlcnMiLCJmaWx0ZXJTZWxlY3RvciIsInNlbGVjdGVkRmVhdHVyZUlkU2VsZWN0b3IiLCJzZWxlY3RlZEZlYXR1cmVJZCIsImZpbmQiLCJmIiwidmFsdWUiLCJpZCIsImxheWVyU2VsZWN0b3IiLCJmaWx0ZXIiLCJjb25maWciLCJpc1Zpc2libGUiLCJHRU9DT0RFUl9MQVlFUl9JRCIsImVkaXRvckZlYXR1cmVTZWxlY3RvciIsImVkaXRvckZlYXR1cmVzIiwiRklMVEVSX1RZUEVTIiwicG9seWdvbiIsIm1hcCIsImNvbmNhdCIsImRvY3VtZW50IiwiYWN0aXZlRWxlbWVudCIsImV2ZW50IiwiaXNJbkZvY3VzIiwia2V5Q29kZSIsIktleUV2ZW50IiwiRE9NX1ZLX0RFTEVURSIsIkRPTV9WS19CQUNLX1NQQUNFIiwiX29uRGVsZXRlU2VsZWN0ZWRGZWF0dXJlIiwiRE9NX1ZLX0VTQ0FQRSIsIkVkaXRvckxheWVyVXRpbHMiLCJpc0RyYXdpbmdBY3RpdmUiLCJlZGl0b3IiLCJtb2RlIiwib25TZXRFZGl0b3JNb2RlIiwiRURJVE9SX01PREVTIiwiRURJVCIsIm9uU2VsZWN0Iiwic2VsZWN0ZWRGZWF0dXJlIiwib25EZWxldGVGZWF0dXJlIiwib25Ub2dnbGVQb2x5Z29uRmlsdGVyIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9vbktleVByZXNzZWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xhc3NOYW1lIiwiZGF0YXNldHMiLCJzdHlsZSIsImluZGV4Iiwic2VsZWN0aW9uQ29udGV4dCIsImN1cnJlbnRGaWx0ZXIiLCJjdXJyZW50RmlsdGVyU2VsZWN0b3IiLCJhdmFpbGFibGVMYXllcnMiLCJhdmFpbGFibGVMYXllcnNTZWxlY3RvciIsInJpZ2h0Q2xpY2siLCJwb3NpdGlvbiIsIm1hcEluZGV4IiwiQm9vbGVhbiIsIl9jbG9zZUZlYXR1cmVBY3Rpb24iLCJfdG9nZ2xlUG9seWdvbkZpbHRlciIsIkNvbXBvbmVudCIsIkVkaXRvciIsIlJlYWN0IiwibWVtbyIsImRpc3BsYXlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBT0E7Ozs7Ozs7O0FBS0EsSUFBTUEsbUJBQW1CLEdBQUcsZ0NBQTVCOztBQUVBLElBQU1DLGFBQWEsR0FBR0MsNkJBQU9DLEdBQVYsK0dBQW5COztBQUlBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQWtCQyxtQ0FBd0JDLFFBQXhCLENBQWlDRixLQUFLLENBQUNHLElBQXZDLENBQWxCO0FBQUEsQ0FBMUI7O0FBRUFDLGFBQWEsQ0FBQ0MsSUFBZCxHQUFxQixDQUFDQyw4QkFBRCxDQUFyQjs7QUFnQmUsU0FBU0YsYUFBVCxDQUNiRyxrQkFEYSxFQUVzQjtBQUFBLE1BQzdCQyxnQkFENkI7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGdHQU16QixFQU55QjtBQUFBLHdHQWdCakIsVUFBQ0MsS0FBRDtBQUFBLGVBQXdCQSxLQUFLLENBQUNDLE1BQTlCO0FBQUEsT0FoQmlCO0FBQUEseUdBaUJoQixVQUFDRCxLQUFEO0FBQUEsZUFBd0JBLEtBQUssQ0FBQ0UsT0FBOUI7QUFB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UUFNc0JBLFFBTnRCOztBQVFQLDRCQUNFLGdDQUFDLGFBQUQ7QUFBZSxVQUFBLFNBQVMsRUFBRSw0QkFBVyxRQUFYLEVBQXFCWCxTQUFyQixDQUExQjtBQUEyRCxVQUFBLEtBQUssRUFBRUU7QUFBbEUsV0FDR1UsT0FBTyxDQUFDSCxVQUFELENBQVAsSUFBdUJoQixlQUF2QixJQUEwQ1UsS0FBSyxLQUFLUSxRQUFwRCxnQkFDQyxnQ0FBQyxrQkFBRDtBQUNFLFVBQUEsZUFBZSxFQUFFbEIsZUFEbkI7QUFFRSxVQUFBLFFBQVEsRUFBRVEsUUFGWjtBQUdFLFVBQUEsTUFBTSxFQUFFTSxlQUhWO0FBSUUsVUFBQSxhQUFhLEVBQUVGLGFBSmpCO0FBS0UsVUFBQSxPQUFPLEVBQUUsS0FBS1EsbUJBTGhCO0FBTUUsVUFBQSxlQUFlLEVBQUUsS0FBSzlCLHdCQU54QjtBQU9FLFVBQUEsYUFBYSxFQUFFLEtBQUsrQixvQkFQdEI7QUFRRSxVQUFBLFFBQVEsRUFBRUosUUFBUSxJQUFJO0FBUnhCLFVBREQsR0FXRyxJQVpOLENBREY7QUFnQkQ7QUFoSGdDO0FBQUE7QUFBQSxJQUNKSyxnQkFESTs7QUFBQSxtQ0FDN0I5RCxnQkFENkIsa0JBRVgsRUFGVztBQUFBLG1DQUM3QkEsZ0JBRDZCLGlCQUlaLFFBSlk7O0FBbUhuQyxNQUFNK0QsTUFBTSxnQkFBSUMsa0JBQU1DLElBQU4sQ0FBV2pFLGdCQUFYLENBQWhCOztBQUNBK0QsRUFBQUEsTUFBTSxDQUFDRyxXQUFQLEdBQXFCLFFBQXJCO0FBQ0EsU0FBT0gsTUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBDU1NQcm9wZXJ0aWVzLCBLZXlib2FyZEV2ZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB3aW5kb3cgZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoLmdldCc7XG5pbXBvcnQge2NyZWF0ZVNlbGVjdG9yfSBmcm9tICdyZXNlbGVjdCc7XG5pbXBvcnQgRmVhdHVyZUFjdGlvblBhbmVsRmFjdG9yeSwge0ZlYXR1cmVBY3Rpb25QYW5lbFByb3BzfSBmcm9tICcuL2ZlYXR1cmUtYWN0aW9uLXBhbmVsJztcbmltcG9ydCB7XG4gIEVESVRPUl9BVkFJTEFCTEVfTEFZRVJTLFxuICBGSUxURVJfVFlQRVMsXG4gIEVESVRPUl9NT0RFUyxcbiAgR0VPQ09ERVJfTEFZRVJfSUQsXG4gIEtleUV2ZW50XG59IGZyb20gJ0BrZXBsZXIuZ2wvY29uc3RhbnRzJztcbmltcG9ydCB7TGF5ZXIsIEVkaXRvckxheWVyVXRpbHN9IGZyb20gJ0BrZXBsZXIuZ2wvbGF5ZXJzJztcbmltcG9ydCB7RmlsdGVyLCBGZWF0dXJlU2VsZWN0aW9uQ29udGV4dH0gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5pbXBvcnQge0ZlYXR1cmV9IGZyb20gJ0BuZWJ1bGEuZ2wvZWRpdC1tb2Rlcyc7XG5pbXBvcnQge0RhdGFzZXRzfSBmcm9tICdAa2VwbGVyLmdsL3RhYmxlJztcblxuY29uc3QgREVDS0dMX1JFTkRFUl9MQVlFUiA9ICdkZWZhdWx0LWRlY2tnbC1vdmVybGF5LXdyYXBwZXInO1xuXG5jb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgZWRpdG9yTGF5ZXJGaWx0ZXIgPSAobGF5ZXI6IExheWVyKSA9PiBFRElUT1JfQVZBSUxBQkxFX0xBWUVSUy5pbmNsdWRlcyhsYXllci50eXBlISk7XG5cbkVkaXRvckZhY3RvcnkuZGVwcyA9IFtGZWF0dXJlQWN0aW9uUGFuZWxGYWN0b3J5XTtcblxuaW50ZXJmYWNlIEVkaXRvclByb3BzIHtcbiAgZmlsdGVyczogRmlsdGVyW107XG4gIGxheWVyczogTGF5ZXJbXTtcbiAgZGF0YXNldHM6IERhdGFzZXRzO1xuICBlZGl0b3I6IHtzZWxlY3RlZEZlYXR1cmU6IEZlYXR1cmU7IG1vZGU6IHN0cmluZzsgc2VsZWN0aW9uQ29udGV4dD86IEZlYXR1cmVTZWxlY3Rpb25Db250ZXh0fTtcbiAgaW5kZXg6IG51bWJlcjtcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIHN0eWxlOiBDU1NQcm9wZXJ0aWVzO1xuICBvblNlbGVjdDogKGY6IEZlYXR1cmUgfCBudWxsKSA9PiB2b2lkO1xuICBvblNldEVkaXRvck1vZGU6IChtOiBhbnkpID0+IHZvaWQ7XG4gIG9uRGVsZXRlRmVhdHVyZTogKGY6IEZlYXR1cmUpID0+IHZvaWQ7XG4gIG9uVG9nZ2xlUG9seWdvbkZpbHRlcjogKGw6IExheWVyLCBmOiBGZWF0dXJlKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0b3JGYWN0b3J5KFxuICBGZWF0dXJlQWN0aW9uUGFuZWw6IFJlYWN0LkZDPEZlYXR1cmVBY3Rpb25QYW5lbFByb3BzPlxuKTogUmVhY3QuQ29tcG9uZW50Q2xhc3M8RWRpdG9yUHJvcHM+IHtcbiAgY2xhc3MgRWRpdG9yVW5tZW1vaXplZCBleHRlbmRzIENvbXBvbmVudDxFZGl0b3JQcm9wcz4ge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7fTtcblxuICAgIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdFZGl0b3InO1xuXG4gICAgc3RhdGUgPSB7fTtcblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleVByZXNzZWQpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleVByZXNzZWQpO1xuICAgIH1cblxuICAgIGxheWVyU2VsZWN0b3IgPSAocHJvcHM6IEVkaXRvclByb3BzKSA9PiBwcm9wcy5sYXllcnM7XG4gICAgZmlsdGVyU2VsZWN0b3IgPSAocHJvcHM6IEVkaXRvclByb3BzKSA9PiBwcm9wcy5maWx0ZXJzO1xuICAgIHNlbGVjdGVkRmVhdHVyZUlkU2VsZWN0b3IgPSAocHJvcHM6IEVkaXRvclByb3BzKSA9PlxuICAgICAgZ2V0KHByb3BzLCBbJ2VkaXRvcicsICdzZWxlY3RlZEZlYXR1cmUnLCAnaWQnXSk7XG4gICAgZWRpdG9yRmVhdHVyZVNlbGVjdG9yID0gKHByb3BzOiBFZGl0b3JQcm9wcykgPT4gZ2V0KHByb3BzLCBbJ2VkaXRvcicsICdmZWF0dXJlcyddKTtcblxuICAgIGN1cnJlbnRGaWx0ZXJTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICAgICAgdGhpcy5maWx0ZXJTZWxlY3RvcixcbiAgICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlSWRTZWxlY3RvcixcbiAgICAgIChmaWx0ZXJzLCBzZWxlY3RlZEZlYXR1cmVJZCkgPT4gZmlsdGVycy5maW5kKGYgPT4gZi52YWx1ZSAmJiBmLnZhbHVlLmlkID09PSBzZWxlY3RlZEZlYXR1cmVJZClcbiAgICApO1xuXG4gICAgYXZhaWxhYmxlTGF5ZXJzU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3Rvcih0aGlzLmxheWVyU2VsZWN0b3IsIGxheWVycyA9PlxuICAgICAgbGF5ZXJzXG4gICAgICAgIC5maWx0ZXIoZWRpdG9yTGF5ZXJGaWx0ZXIpXG4gICAgICAgIC5maWx0ZXIobGF5ZXIgPT4gbGF5ZXIuY29uZmlnPy5pc1Zpc2libGUgJiYgbGF5ZXIuaWQgIT09IEdFT0NPREVSX0xBWUVSX0lEKVxuICAgICk7XG5cbiAgICBhbGxGZWF0dXJlc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gICAgICB0aGlzLmZpbHRlclNlbGVjdG9yLFxuICAgICAgdGhpcy5lZGl0b3JGZWF0dXJlU2VsZWN0b3IsXG4gICAgICAoZmlsdGVycywgZWRpdG9yRmVhdHVyZXMpID0+XG4gICAgICAgIGZpbHRlcnNcbiAgICAgICAgICAuZmlsdGVyKGYgPT4gZi50eXBlID09PSBGSUxURVJfVFlQRVMucG9seWdvbilcbiAgICAgICAgICAubWFwKGYgPT4gZi52YWx1ZSlcbiAgICAgICAgICAuY29uY2F0KGVkaXRvckZlYXR1cmVzKVxuICAgICk7XG5cbiAgICBpc0luRm9jdXMgPSAoKSA9PiBkb2N1bWVudC5hY3RpdmVFbGVtZW50Py5pZCA9PT0gREVDS0dMX1JFTkRFUl9MQVlFUjtcblxuICAgIF9vbktleVByZXNzZWQgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzSW5Gb2N1cygpKSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgIGNhc2UgS2V5RXZlbnQuRE9NX1ZLX0RFTEVURTpcbiAgICAgICAgICBjYXNlIEtleUV2ZW50LkRPTV9WS19CQUNLX1NQQUNFOlxuICAgICAgICAgICAgdGhpcy5fb25EZWxldGVTZWxlY3RlZEZlYXR1cmUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgS2V5RXZlbnQuRE9NX1ZLX0VTQ0FQRTpcbiAgICAgICAgICAgIC8vIHJlc2V0IGFjdGl2ZSBkcmF3aW5nXG4gICAgICAgICAgICBpZiAoRWRpdG9yTGF5ZXJVdGlscy5pc0RyYXdpbmdBY3RpdmUodHJ1ZSwgdGhpcy5wcm9wcy5lZGl0b3IubW9kZSkpIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNldEVkaXRvck1vZGUoRURJVE9SX01PREVTLkVESVQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KG51bGwpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9vbkRlbGV0ZVNlbGVjdGVkRmVhdHVyZSA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHtlZGl0b3J9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHtzZWxlY3RlZEZlYXR1cmV9ID0gZWRpdG9yO1xuICAgICAgaWYgKHNlbGVjdGVkRmVhdHVyZSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uRGVsZXRlRmVhdHVyZShzZWxlY3RlZEZlYXR1cmUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfY2xvc2VGZWF0dXJlQWN0aW9uID0gKCkgPT4ge1xuICAgICAgLy8gcmVzZXQgc2VsZWN0aW9uIGNvbnRleHRcbiAgICAgIGNvbnN0IHtzZWxlY3RlZEZlYXR1cmV9ID0gdGhpcy5wcm9wcy5lZGl0b3I7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHNlbGVjdGVkRmVhdHVyZSk7XG4gICAgfTtcblxuICAgIF90b2dnbGVQb2x5Z29uRmlsdGVyID0gKGxheWVyOiBMYXllcikgPT4ge1xuICAgICAgY29uc3Qge3NlbGVjdGVkRmVhdHVyZX0gPSB0aGlzLnByb3BzLmVkaXRvcjtcbiAgICAgIGlmIChzZWxlY3RlZEZlYXR1cmUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblRvZ2dsZVBvbHlnb25GaWx0ZXIobGF5ZXIsIHNlbGVjdGVkRmVhdHVyZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtjbGFzc05hbWUsIGRhdGFzZXRzLCBlZGl0b3IsIHN0eWxlLCBpbmRleH0gPSB0aGlzLnByb3BzO1xuICAgICAgY29uc3Qge3NlbGVjdGVkRmVhdHVyZSwgc2VsZWN0aW9uQ29udGV4dH0gPSBlZGl0b3I7XG4gICAgICBjb25zdCBjdXJyZW50RmlsdGVyID0gdGhpcy5jdXJyZW50RmlsdGVyU2VsZWN0b3IodGhpcy5wcm9wcyk7XG4gICAgICBjb25zdCBhdmFpbGFibGVMYXllcnMgPSB0aGlzLmF2YWlsYWJsZUxheWVyc1NlbGVjdG9yKHRoaXMucHJvcHMpO1xuXG4gICAgICBjb25zdCB7cmlnaHRDbGljaywgcG9zaXRpb24sIG1hcEluZGV4fSA9IHNlbGVjdGlvbkNvbnRleHQgfHwge307XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZWRXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnZWRpdG9yJywgY2xhc3NOYW1lKX0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICB7Qm9vbGVhbihyaWdodENsaWNrKSAmJiBzZWxlY3RlZEZlYXR1cmUgJiYgaW5kZXggPT09IG1hcEluZGV4ID8gKFxuICAgICAgICAgICAgPEZlYXR1cmVBY3Rpb25QYW5lbFxuICAgICAgICAgICAgICBzZWxlY3RlZEZlYXR1cmU9e3NlbGVjdGVkRmVhdHVyZX1cbiAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICBsYXllcnM9e2F2YWlsYWJsZUxheWVyc31cbiAgICAgICAgICAgICAgY3VycmVudEZpbHRlcj17Y3VycmVudEZpbHRlcn1cbiAgICAgICAgICAgICAgb25DbG9zZT17dGhpcy5fY2xvc2VGZWF0dXJlQWN0aW9ufVxuICAgICAgICAgICAgICBvbkRlbGV0ZUZlYXR1cmU9e3RoaXMuX29uRGVsZXRlU2VsZWN0ZWRGZWF0dXJlfVxuICAgICAgICAgICAgICBvblRvZ2dsZUxheWVyPXt0aGlzLl90b2dnbGVQb2x5Z29uRmlsdGVyfVxuICAgICAgICAgICAgICBwb3NpdGlvbj17cG9zaXRpb24gfHwgbnVsbH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvU3R5bGVkV3JhcHBlcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgRWRpdG9yID0gKFJlYWN0Lm1lbW8oRWRpdG9yVW5tZW1vaXplZCkgYXMgdW5rbm93bikgYXMgdHlwZW9mIEVkaXRvclVubWVtb2l6ZWQ7XG4gIEVkaXRvci5kaXNwbGF5TmFtZSA9ICdFZGl0b3InO1xuICByZXR1cm4gRWRpdG9yO1xufVxuIl19