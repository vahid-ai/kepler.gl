"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContainerFactory = ContainerFactory;
exports.injectComponents = injectComponents;
exports["default"] = exports.appInjector = exports.ERROR_MSG = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _lodash = _interopRequireDefault(require("lodash.memoize"));

var _window = require("global/window");

var _injector = require("./injector");

var _keplerGl = _interopRequireDefault(require("./kepler-gl"));

var _actions = require("@kepler.gl/actions");

var _utils = require("@kepler.gl/utils");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ERROR_MSG = {
  noState: "kepler.gl state does not exist. " + "You might forget to mount keplerGlReducer in your root reducer." + "If it is not mounted as state.keplerGl by default, you need to provide getState as a prop"
};
exports.ERROR_MSG = ERROR_MSG;

var mapStateToProps = function mapStateToProps(state, props) {
  return _objectSpread({
    state: state
  }, props);
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

var connector = (0, _reactRedux.connect)(mapStateToProps, dispatchToProps);
ContainerFactory.deps = [_keplerGl["default"]];

function ContainerFactory(KeplerGl) {
  /** @lends KeplerGl */

  /**
    * Main Kepler.gl Component
    * @param {Object} props
    *
    * @param {string} props.id - _required_
    *
    * - Default: `map`
    * The id of this KeplerGl instance. `id` is required if you have multiple
    * KeplerGl instances in your app. It defines the prop name of the KeplerGl state that is
    * stored in the KeplerGl reducer. For example, the state of the KeplerGl component with id `foo` is
    * stored in `state.keplerGl.foo`.
    *
    * In case you create multiple kepler.gl instances using the same id, the kepler.gl state defined by the entry will be
    * overridden by the latest instance and reset to a blank state.
    * @param {string} props.mapboxApiAccessToken - _required_
    * @param {string} props.mapboxApiUrl - _optional_
    * @param {Boolean} props.mapStylesReplaceDefault - _optional_
    * @param {object} props.initialUiState - _optional_
     * You can create a free account at [www.mapbox.com](www.mapbox.com) and create a token at
    * [www.mapbox.com/account/access-tokens](www.mapbox.com/account/access-tokens)
    *
    *
    * @param {Number} props.width - _required_ Width of the KeplerGl UI.
    * @public
   */
  var Container = /*#__PURE__*/function (_Component) {
    (0, _inherits2["default"])(Container, _Component);

    var _super = _createSuper(Container);

    function Container() {
      var _this;

      (0, _classCallCheck2["default"])(this, Container);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getSelector", (0, _lodash["default"])(function (id, getState) {
        return function (state) {
          if (!getState(state)) {
            // log error
            _window.console.error(ERROR_MSG.noState);

            return null;
          }

          return getState(state)[id];
        };
      }));
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getDispatch", (0, _lodash["default"])(function (id, dispatch) {
        return (0, _actions.forwardTo)(id, dispatch);
      }));
      return _this;
    }

    (0, _createClass2["default"])(Container, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props = this.props,
            id = _this$props.id,
            mint = _this$props.mint,
            mapboxApiAccessToken = _this$props.mapboxApiAccessToken,
            mapboxApiUrl = _this$props.mapboxApiUrl,
            mapStylesReplaceDefault = _this$props.mapStylesReplaceDefault,
            initialUiState = _this$props.initialUiState; // add a new entry to reducer

        this.props.dispatch((0, _actions.registerEntry)({
          id: id,
          mint: mint,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapboxApiUrl: mapboxApiUrl,
          mapStylesReplaceDefault: mapStylesReplaceDefault,
          initialUiState: initialUiState
        }));
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        // check if id has changed, if true, copy state over
        if ((0, _utils.notNullorUndefined)(prevProps.id) && (0, _utils.notNullorUndefined)(this.props.id) && prevProps.id !== this.props.id) {
          this.props.dispatch((0, _actions.renameEntry)(prevProps.id, this.props.id));
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.props.mint !== false) {
          // delete entry in reducer
          this.props.dispatch((0, _actions.deleteEntry)(this.props.id));
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props2 = this.props,
            id = _this$props2.id,
            getState = _this$props2.getState,
            dispatch = _this$props2.dispatch,
            state = _this$props2.state;
        var selector = this.getSelector(id, getState);

        if (!selector || !selector(state)) {
          // instance state hasn't been mounted yet
          return /*#__PURE__*/_react["default"].createElement("div", null);
        }

        return /*#__PURE__*/_react["default"].createElement(KeplerGl, (0, _extends2["default"])({}, this.props, {
          id: id,
          selector: selector,
          dispatch: this.getDispatch(id, dispatch)
        }));
      }
    }]);
    return Container;
  }(_react.Component);

  (0, _defineProperty2["default"])(Container, "defaultProps", {
    id: 'map',
    getState: function getState(state) {
      return state.keplerGl;
    },
    mint: true
  });
  return connector(Container);
}

var allDependencies = (0, _injector.flattenDeps)([], ContainerFactory); // provide all dependencies to appInjector

var appInjector = allDependencies.reduce(function (inj, factory) {
  return inj.provide(factory, factory);
}, (0, _injector.injector)()); // Helper to inject custom components and return kepler.gl container

exports.appInjector = appInjector;

function injectComponents() {
  var recipes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return (0, _injector.provideRecipesToInjector)(recipes, appInjector).get(ContainerFactory);
}

var InjectedContainer = appInjector.get(ContainerFactory);
var _default = InjectedContainer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb250YWluZXIudHN4Il0sIm5hbWVzIjpbIkVSUk9SX01TRyIsIm5vU3RhdGUiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInByb3BzIiwiZGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giLCJjb25uZWN0b3IiLCJDb250YWluZXJGYWN0b3J5IiwiZGVwcyIsIktlcGxlckdsRmFjdG9yeSIsIktlcGxlckdsIiwiQ29udGFpbmVyIiwiaWQiLCJnZXRTdGF0ZSIsIkNvbnNvbGUiLCJlcnJvciIsIm1pbnQiLCJtYXBib3hBcGlBY2Nlc3NUb2tlbiIsIm1hcGJveEFwaVVybCIsIm1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0IiwiaW5pdGlhbFVpU3RhdGUiLCJwcmV2UHJvcHMiLCJzZWxlY3RvciIsImdldFNlbGVjdG9yIiwiZ2V0RGlzcGF0Y2giLCJDb21wb25lbnQiLCJrZXBsZXJHbCIsImFsbERlcGVuZGVuY2llcyIsImFwcEluamVjdG9yIiwicmVkdWNlIiwiaW5qIiwiZmFjdG9yeSIsInByb3ZpZGUiLCJpbmplY3RDb21wb25lbnRzIiwicmVjaXBlcyIsImdldCIsIkluamVjdGVkQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7OztBQUdPLElBQU1BLFNBQVMsR0FBRztBQUN2QkMsRUFBQUEsT0FBTyxFQUNMO0FBRnFCLENBQWxCOzs7QUFPUCxJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBYUMsS0FBYjtBQUFBO0FBQXlDRCxJQUFBQSxLQUFLLEVBQUxBO0FBQXpDLEtBQW1EQyxLQUFuRDtBQUFBLENBQXhCOztBQUNBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsUUFBRDtBQUFBLFNBQThCO0FBQUNBLElBQUFBLFFB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a0NOLFdBQWxDLEVBQStDTyxHQUEvQyxDQUFtRDVCLGdCQUFuRCxDQUFQO0FBQ0Q7O0FBRUQsSUFBTTZCLGlCQUFpQixHQUFHUixXQUFXLENBQUNPLEdBQVosQ0FBZ0I1QixnQkFBaEIsQ0FBMUI7ZUFFZTZCLGlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50LCBDb21wb25lbnRUeXBlLCBEaXNwYXRjaH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtjb25uZWN0LCBDb25uZWN0ZWRQcm9wc30gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IG1lbW9pemUgZnJvbSAnbG9kYXNoLm1lbW9pemUnO1xuaW1wb3J0IHtjb25zb2xlIGFzIENvbnNvbGV9IGZyb20gJ2dsb2JhbC93aW5kb3cnO1xuaW1wb3J0IHtpbmplY3RvciwgcHJvdmlkZVJlY2lwZXNUb0luamVjdG9yLCBmbGF0dGVuRGVwc30gZnJvbSAnLi9pbmplY3Rvcic7XG5pbXBvcnQgS2VwbGVyR2xGYWN0b3J5IGZyb20gJy4va2VwbGVyLWdsJztcblxuaW1wb3J0IHtyZWdpc3RlckVudHJ5LCBkZWxldGVFbnRyeSwgcmVuYW1lRW50cnksIGZvcndhcmRUb30gZnJvbSAnQGtlcGxlci5nbC9hY3Rpb25zJztcbmltcG9ydCB7bm90TnVsbG9yVW5kZWZpbmVkfSBmcm9tICdAa2VwbGVyLmdsL3V0aWxzJztcbmltcG9ydCB7S2VwbGVyR2xTdGF0ZX0gZnJvbSAnQGtlcGxlci5nbC9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBjb25zdCBFUlJPUl9NU0cgPSB7XG4gIG5vU3RhdGU6XG4gICAgYGtlcGxlci5nbCBzdGF0ZSBkb2VzIG5vdCBleGlzdC4gYCArXG4gICAgYFlvdSBtaWdodCBmb3JnZXQgdG8gbW91bnQga2VwbGVyR2xSZWR1Y2VyIGluIHlvdXIgcm9vdCByZWR1Y2VyLmAgK1xuICAgIGBJZiBpdCBpcyBub3QgbW91bnRlZCBhcyBzdGF0ZS5rZXBsZXJHbCBieSBkZWZhdWx0LCB5b3UgbmVlZCB0byBwcm92aWRlIGdldFN0YXRlIGFzIGEgcHJvcGBcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogYW55LCBwcm9wczogQ29udGFpbmVyUHJvcHMpID0+ICh7c3RhdGUsIC4uLnByb3BzfSk7XG5jb25zdCBkaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2g6IERpc3BhdGNoPGFueT4pID0+ICh7ZGlzcGF0Y2h9KTtcbmNvbnN0IGNvbm5lY3RvciA9IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBkaXNwYXRjaFRvUHJvcHMpO1xuXG50eXBlIENvbnRhaW5lclByb3BzID0ge1xuICBpZDogc3RyaW5nO1xuICBtYXBib3hBcGlBY2Nlc3NUb2tlbjogc3RyaW5nO1xuICBtYXBib3hBcGlVcmw/OiBzdHJpbmc7XG4gIG1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0PzogYm9vbGVhbjtcbiAgaW5pdGlhbFVpU3RhdGU/OiBvYmplY3Q7XG4gIHdpZHRoOiBudW1iZXI7XG4gIG1pbnQ/OiBib29sZWFuO1xuICBnZXRTdGF0ZTogKHN0YXRlOiBhbnkpID0+IEtlcGxlckdsU3RhdGU7XG59O1xuXG50eXBlIFByb3BzRnJvbVJlZHV4ID0gQ29ubmVjdGVkUHJvcHM8dHlwZW9mIGNvbm5lY3Rvcj4gJiBDb250YWluZXJQcm9wcztcblxuQ29udGFpbmVyRmFjdG9yeS5kZXBzID0gW0tlcGxlckdsRmFjdG9yeV07XG5cbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXJGYWN0b3J5KFxuICBLZXBsZXJHbDogUmV0dXJuVHlwZTx0eXBlb2YgS2VwbGVyR2xGYWN0b3J5PlxuKTogQ29tcG9uZW50VHlwZTxQcm9wc0Zyb21SZWR1eD4ge1xuICAvKiogQGxlbmRzIEtlcGxlckdsICovXG4gIC8qKlxuICAgICogTWFpbiBLZXBsZXIuZ2wgQ29tcG9uZW50XG4gICAgKiBAcGFyYW0ge09iamVjdH0gcHJvcHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMuaWQgLSBfcmVxdWlyZWRfXG4gICAgKlxuICAgICogLSBEZWZhdWx0OiBgbWFwYFxuICAgICogVGhlIGlkIG9mIHRoaXMgS2VwbGVyR2wgaW5zdGFuY2UuIGBpZGAgaXMgcmVxdWlyZWQgaWYgeW91IGhhdmUgbXVsdGlwbGVcbiAgICAqIEtlcGxlckdsIGluc3RhbmNlcyBpbiB5b3VyIGFwcC4gSXQgZGVmaW5lcyB0aGUgcHJvcCBuYW1lIG9mIHRoZSBLZXBsZXJHbCBzdGF0ZSB0aGF0IGlzXG4gICAgKiBzdG9yZWQgaW4gdGhlIEtlcGxlckdsIHJlZHVjZXIuIEZvciBleGFtcGxlLCB0aGUgc3RhdGUgb2YgdGhlIEtlcGxlckdsIGNvbXBvbmVudCB3aXRoIGlkIGBmb29gIGlzXG4gICAgKiBzdG9yZWQgaW4gYHN0YXRlLmtlcGxlckdsLmZvb2AuXG4gICAgKlxuICAgICogSW4gY2FzZSB5b3UgY3JlYXRlIG11bHRpcGxlIGtlcGxlci5nbCBpbnN0YW5jZXMgdXNpbmcgdGhlIHNhbWUgaWQsIHRoZSBrZXBsZXIuZ2wgc3RhdGUgZGVmaW5lZCBieSB0aGUgZW50cnkgd2lsbCBiZVxuICAgICogb3ZlcnJpZGRlbiBieSB0aGUgbGF0ZXN0IGluc3RhbmNlIGFuZCByZXNldCB0byBhIGJsYW5rIHN0YXRlLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLm1hcGJveEFwaUFjY2Vzc1Rva2VuIC0gX3JlcXVpcmVkX1xuICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLm1hcGJveEFwaVVybCAtIF9vcHRpb25hbF9cbiAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJvcHMubWFwU3R5bGVzUmVwbGFjZURlZmF1bHQgLSBfb3B0aW9uYWxfXG4gICAgKiBAcGFyYW0ge29iamVjdH0gcHJvcHMuaW5pdGlhbFVpU3RhdGUgLSBfb3B0aW9uYWxfXG5cbiAgICAqIFlvdSBjYW4gY3JlYXRlIGEgZnJlZSBhY2NvdW50IGF0IFt3d3cubWFwYm94LmNvbV0od3d3Lm1hcGJveC5jb20pIGFuZCBjcmVhdGUgYSB0b2tlbiBhdFxuICAgICogW3d3dy5tYXBib3guY29tL2FjY291bnQvYWNjZXNzLXRva2Vuc10od3d3Lm1hcGJveC5jb20vYWNjb3VudC9hY2Nlc3MtdG9rZW5zKVxuICAgICpcbiAgICAqXG4gICAgKiBAcGFyYW0ge051bWJlcn0gcHJvcHMud2lkdGggLSBfcmVxdWlyZWRfIFdpZHRoIG9mIHRoZSBLZXBsZXJHbCBVSS5cbiAgICAqIEBwdWJsaWNcbiAgICovXG5cbiAgY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzRnJvbVJlZHV4PiB7XG4gICAgLy8gZGVmYXVsdCBpZCBhbmQgYWRkcmVzcyBpZiBub3QgcHJvdmlkZWRcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgaWQ6ICdtYXAnLFxuICAgICAgZ2V0U3RhdGU6IHN0YXRlID0+IHN0YXRlLmtlcGxlckdsLFxuICAgICAgbWludDogdHJ1ZVxuICAgIH07XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG1pbnQsXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICAgICAgICBtYXBib3hBcGlVcmwsXG4gICAgICAgIG1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0LFxuICAgICAgICBpbml0aWFsVWlTdGF0ZVxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIC8vIGFkZCBhIG5ldyBlbnRyeSB0byByZWR1Y2VyXG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxuICAgICAgICByZWdpc3RlckVudHJ5KHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBtaW50LFxuICAgICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuICAgICAgICAgIG1hcGJveEFwaVVybCxcbiAgICAgICAgICBtYXBTdHlsZXNSZXBsYWNlRGVmYXVsdCxcbiAgICAgICAgICBpbml0aWFsVWlTdGF0ZVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAvLyBjaGVjayBpZiBpZCBoYXMgY2hhbmdlZCwgaWYgdHJ1ZSwgY29weSBzdGF0ZSBvdmVyXG4gICAgICBpZiAoXG4gICAgICAgIG5vdE51bGxvclVuZGVmaW5lZChwcmV2UHJvcHMuaWQpICYmXG4gICAgICAgIG5vdE51bGxvclVuZGVmaW5lZCh0aGlzLnByb3BzLmlkKSAmJlxuICAgICAgICBwcmV2UHJvcHMuaWQgIT09IHRoaXMucHJvcHMuaWRcbiAgICAgICkge1xuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlbmFtZUVudHJ5KHByZXZQcm9wcy5pZCwgdGhpcy5wcm9wcy5pZCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMubWludCAhPT0gZmFsc2UpIHtcbiAgICAgICAgLy8gZGVsZXRlIGVudHJ5IGluIHJlZHVjZXJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChkZWxldGVFbnRyeSh0aGlzLnByb3BzLmlkKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2VsZWN0b3IgPSBtZW1vaXplKChpZCwgZ2V0U3RhdGUpID0+IHN0YXRlID0+IHtcbiAgICAgIGlmICghZ2V0U3RhdGUoc3RhdGUpKSB7XG4gICAgICAgIC8vIGxvZyBlcnJvclxuICAgICAgICBDb25zb2xlLmVycm9yKEVSUk9SX01TRy5ub1N0YXRlKTtcblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXRTdGF0ZShzdGF0ZSlbaWRdO1xuICAgIH0pO1xuICAgIGdldERpc3BhdGNoID0gbWVtb2l6ZSgoaWQsIGRpc3BhdGNoKSA9PiBmb3J3YXJkVG8oaWQsIGRpc3BhdGNoKSk7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7aWQsIGdldFN0YXRlLCBkaXNwYXRjaCwgc3RhdGV9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gdGhpcy5nZXRTZWxlY3RvcihpZCwgZ2V0U3RhdGUpO1xuXG4gICAgICBpZiAoIXNlbGVjdG9yIHx8ICFzZWxlY3RvcihzdGF0ZSkpIHtcbiAgICAgICAgLy8gaW5zdGFuY2Ugc3RhdGUgaGFzbid0IGJlZW4gbW91bnRlZCB5ZXRcbiAgICAgICAgcmV0dXJuIDxkaXYgLz47XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxLZXBsZXJHbFxuICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBzZWxlY3Rvcj17c2VsZWN0b3J9XG4gICAgICAgICAgZGlzcGF0Y2g9e3RoaXMuZ2V0RGlzcGF0Y2goaWQsIGRpc3BhdGNoKX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbm5lY3RvcihDb250YWluZXIpO1xufVxuXG5jb25zdCBhbGxEZXBlbmRlbmNpZXMgPSBmbGF0dGVuRGVwcyhbXSwgQ29udGFpbmVyRmFjdG9yeSk7XG5cbi8vIHByb3ZpZGUgYWxsIGRlcGVuZGVuY2llcyB0byBhcHBJbmplY3RvclxuZXhwb3J0IGNvbnN0IGFwcEluamVjdG9yID0gYWxsRGVwZW5kZW5jaWVzLnJlZHVjZShcbiAgKGluaiwgZmFjdG9yeSkgPT4gaW5qLnByb3ZpZGUoZmFjdG9yeSwgZmFjdG9yeSksXG4gIGluamVjdG9yKClcbik7XG5cbi8vIEhlbHBlciB0byBpbmplY3QgY3VzdG9tIGNvbXBvbmVudHMgYW5kIHJldHVybiBrZXBsZXIuZ2wgY29udGFpbmVyXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0Q29tcG9uZW50cyhyZWNpcGVzID0gW10pIHtcbiAgcmV0dXJuIHByb3ZpZGVSZWNpcGVzVG9JbmplY3RvcihyZWNpcGVzLCBhcHBJbmplY3RvcikuZ2V0KENvbnRhaW5lckZhY3RvcnkpO1xufVxuXG5jb25zdCBJbmplY3RlZENvbnRhaW5lciA9IGFwcEluamVjdG9yLmdldChDb250YWluZXJGYWN0b3J5KTtcblxuZXhwb3J0IGRlZmF1bHQgSW5qZWN0ZWRDb250YWluZXI7XG4iXX0=