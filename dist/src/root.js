"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.provideInitialState = provideInitialState;
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _actions = require("@kepler.gl/actions");

var _reduxActions = require("redux-actions");

var _core = require("./core");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// INITIAL_STATE
var initialCoreState = {};

function provideInitialState(initialState) {
  var coreReducer = (0, _core.coreReducerFactory)(initialState);

  var handleRegisterEntry = function handleRegisterEntry(state, _ref) {
    var _ref$payload = _ref.payload,
        id = _ref$payload.id,
        mint = _ref$payload.mint,
        mapboxApiAccessToken = _ref$payload.mapboxApiAccessToken,
        mapboxApiUrl = _ref$payload.mapboxApiUrl,
        mapStylesReplaceDefault = _ref$payload.mapStylesReplaceDefault,
        initialUiState = _ref$payload.initialUiState;
    // by default, always create a mint state even if the same id already exist
    // if state.id exist and mint=false, keep the existing state
    var previousState = state[id] && mint === false ? state[id] : undefined;
    return _objectSpread(_objectSpread({}, state), {}, (0, _defineProperty2["default"])({}, id, coreReducer(previousState, (0, _actions.keplerGlInit)({
      mapboxApiAccessToken: mapboxApiAccessToken,
      mapboxApiUrl: mapboxApiUrl,
      mapStylesReplaceDefault: mapStylesReplaceDefault,
      initialUiState: initialUiState
    }))));
  };

  var handleDeleteEntry = function handleDeleteEntry(state, _ref2) {
    var id = _ref2.payload;
    return Object.keys(state).reduce(function (accu, curr) {
      return _objectSpread(_objectSpread({}, accu), curr === id ? {} : (0, _defineProperty2["default"])({}, curr, state[curr]));
    }, {});
  };

  var handleRenameEntry = function handleRenameEntry(state, _ref4) {
    var _ref4$payload = _ref4.payload,
        oldId = _ref4$payload.oldId,
        newId = _ref4$payload.newId;
    return Object.keys(state).reduce(function (accu, curr) {
      return _objectSpread(_objectSpread({}, accu), (0, _defineProperty2["default"])({}, curr === oldId ? newId : curr, state[curr]));
    }, {});
  };

  return function () {
    var _handlers;

    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialCoreState;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    // update child states
    Object.keys(state).forEach(function (id) {
      var updateItemState = coreReducer(state[id], (0, _actions._actionFor)(id, action));
      state = (0, _actions._updateProperty)(state, id, updateItemState);
    }); // perform additional state reducing (e.g. switch action.type etc...)

    var handlers = (_handlers = {}, (0, _defineProperty2["default"])(_handlers, _actions.ActionTypes.REGISTER_ENTRY, handleRegisterEntry), (0, _defineProperty2["default"])(_handlers, _actions.ActionTypes.DELETE_ENTRY, handleDeleteEntry), (0, _defineProperty2["default"])(_handlers, _actions.ActionTypes.RENAME_ENTRY, handleRenameEntry), _handlers); // TODO: Understand why the Lint sees an error here, while the IDE does not.
    // @ts-expect-error

    return (0, _reduxActions.handleActions)(handlers, initialCoreState)(state, action);
  };
}

var _keplerGlReducer = provideInitialState(initialCoreState);

function mergeInitialState() {
  var saved = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var provided = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var keys = ['mapState', 'mapStyle', 'visState', 'uiState']; // shallow merge each reducer

  return keys.reduce(function (accu, key) {
    return _objectSpread(_objectSpread({}, accu), saved[key] && provided[key] ? (0, _defineProperty2["default"])({}, key, _objectSpread(_objectSpread({}, saved[key]), provided[key])) : (0, _defineProperty2["default"])({}, key, saved[key] || provided[key] || {}));
  }, {});
}

function decorate(target) {
  var savedInitialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var targetInitialState = savedInitialState;
  /**
   * Returns a kepler.gl reducer that will also pass each action through additional reducers spiecified.
   * The parameter should be either a reducer map or a reducer function.
   * The state passed into the additional action handler is the instance state.
   * It will include all the subreducers `visState`, `uiState`, `mapState` and `mapStyle`.
   * `.plugin` is only meant to be called once when mounting the keplerGlReducer to the store.
   * **Note** This is an advanced option to give you more freedom to modify the internal state of the kepler.gl instance.
   * You should only use this to adding additional actions instead of replacing default actions.
   *
   * @mixin keplerGlReducer.plugin
   * @memberof keplerGlReducer
   * @param {Object|Function} customReducer - A reducer map or a reducer
   * @public
   * @example
   * const myKeplerGlReducer = keplerGlReducer
   *  .plugin({
   *    // 1. as reducer map
   *    HIDE_AND_SHOW_SIDE_PANEL: (state, action) => ({
   *      ...state,
   *      uiState: {
   *        ...state.uiState,
   *        readOnly: !state.uiState.readOnly
   *      }
   *    })
   *  })
   * .plugin(handleActions({
   *   // 2. as reducer
   *   'HIDE_MAP_CONTROLS': (state, action) => ({
   *     ...state,
   *     uiState: {
   *       ...state.uiState,
   *       mapControls: hiddenMapControl
   *     }
   *   })
   * }, {}));
   */

  target.plugin = function plugin(customReducer) {
    var _this = this;

    if ((0, _typeof2["default"])(customReducer) === 'object') {
      // if only provided a reducerMap, wrap it in a reducer
      customReducer = (0, _reduxActions.handleActions)(customReducer, {});
    } // use 'function' keyword to enable 'this'


    return decorate(function () {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var nextState = _this(state, action); // for each entry in the staten


      Object.keys(nextState).forEach(function (id) {
        // update child states
        nextState = (0, _actions._updateProperty)(nextState, id, customReducer(nextState[id], (0, _actions._actionFor)(id, action)));
      });
      return nextState;
    });
  };
  /**
   * Return a reducer that initiated with custom initial state.
   * The parameter should be an object mapping from `subreducer` name to custom subreducer state,
   * which will be shallow **merged** with default initial state.
   *
   * Default subreducer state:
   *  - [`visState`](./vis-state.md#INITIAL_VIS_STATE)
   *  - [`mapState`](./map-state.md#INITIAL_MAP_STATE)
   *  - [`mapStyle`](./map-style.md#INITIAL_MAP_STYLE)
   *  - [`uiState`](./ui-state.md#INITIAL_UI_STATE)
   * @mixin keplerGlReducer.initialState
   * @memberof keplerGlReducer
   * @param {Object} iniSt - custom state to be merged with default initial state
   * @public
   * @example
   * const myKeplerGlReducer = keplerGlReducer
   *  .initialState({
   *    uiState: {readOnly: true}
   *  });
   */


  target.initialState = function initialState(iniSt) {
    var merged = mergeInitialState(targetInitialState, iniSt);
    var targetReducer = provideInitialState(merged);
    return decorate(targetReducer, merged);
  };

  return target;
}
/**
 * Kepler.gl reducer to be mounted to your store. You can mount `keplerGlReducer` at property `keplerGl`, if you choose
 * to mount it at another address e.g. `foo` you will need to specify it when you mount `KeplerGl` component in your app with `getState: state => state.foo`
 * @public
 * @example
 * import keplerGlReducer from 'kepler.gl/reducers';
 * import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
 * import {taskMiddleware} from 'react-palm/tasks';
 *
 * const initialState = {};
 * const reducers = combineReducers({
 *   // <-- mount kepler.gl reducer in your app
 *   keplerGl: keplerGlReducer,
 *
 *   // Your other reducers here
 *   app: appReducer
 * });
 *
 * // using createStore
 * export default createStore(reducer, initialState, applyMiddleware(taskMiddleware));
 */


var keplerGlReducer = decorate(_keplerGlReducer);
var _default = keplerGlReducer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zcmMvcm9vdC50cyJdLCJuYW1lcyI6WyJpbml0aWFsQ29yZVN0YXRlIiwicHJvdmlkZUluaXRpYWxTdGF0ZSIsImluaXRpYWxTdGF0ZSIsImNvcmVSZWR1Y2VyIiwiaGFuZGxlUmVnaXN0ZXJFbnRyeSIsInN0YXRlIiwicGF5bG9hZCIsImlkIiwibWludCIsIm1hcGJveEFwaUFjY2Vzc1Rva2VuIiwibWFwYm94QXBpVXJsIiwibWFwU3R5bGVzUmVwbGFjZURlZmF1bHQiLCJpbml0aWFsVWlTdGF0ZSIsInByZXZpb3VzU3RhdGUiLCJ1bmRlZmluZWQiLCJoYW5kbGVEZWxldGVFbnRyeSIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJhY2N1IiwiY3VyciIsImhhbmRsZVJlbmFtZUVudHJ5Iiwib2xkSWQiLCJuZXdJZCIsImFjdGlvbiIsImZvckVhY2giLCJ1cGRhdGVJdGVtU3RhdGUiLCJoYW5kbGVycyIsIkFjdGlvblR5cGVzIiwiUkVHSVNURVJfRU5UUlkiLCJERUxFVEVfRU5UUlkiLCJSRU5BTUVfRU5UUlkiLCJfa2VwbGVyR2xSZWR1Y2VyIiwibWVyZ2VJbml0aWFsU3RhdGUiLCJzYXZlZCIsInByb3ZpZGVkIiwia2V5IiwiZGVjb3JhdGUiLCJ0YXJnZXQiLCJzYXZlZEluaXRpYWxTdGF0ZSIsInRhcmdldEluaXRpYWxTdGF0ZSIsInBsdWdpbiIsImN1c3RvbVJlZHVjZXIiLCJuZXh0U3RhdGUiLCJpbmlTdCIsIm1lcmdlZCIsInRhcmdldFJlZHVjZXIiLCJrZXBsZXJHbFJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUVBOzs7Ozs7QUFFQTtBQUNBLElBQU1BLGdCQUFnQixHQUFHLEVBQXpCOztBQUVPLFNBQVNDLG1CQUFULENBQTZCQyxZQUE3QixFQUEyQztBQUNoRCxNQUFNQyxXQUFXLEdBQUcsOEJBQW1CRCxZQUFuQixDQUFwQjs7QUFFQSxNQUFNRSxtQkFBbUIsR0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTVMsZUFBZSxHQUFHVixRQUFRLENBQUNMLGdCQUFELENBQWhDO2VBQ2VlLGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge0FjdGlvblR5cGVzLCBrZXBsZXJHbEluaXQsIF9hY3Rpb25Gb3IsIF91cGRhdGVQcm9wZXJ0eX0gZnJvbSAnQGtlcGxlci5nbC9hY3Rpb25zJztcbmltcG9ydCB7aGFuZGxlQWN0aW9uc30gZnJvbSAncmVkdXgtYWN0aW9ucyc7XG5cbmltcG9ydCB7Y29yZVJlZHVjZXJGYWN0b3J5fSBmcm9tICcuL2NvcmUnO1xuXG4vLyBJTklUSUFMX1NUQVRFXG5jb25zdCBpbml0aWFsQ29yZVN0YXRlID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlSW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICBjb25zdCBjb3JlUmVkdWNlciA9IGNvcmVSZWR1Y2VyRmFjdG9yeShpbml0aWFsU3RhdGUpO1xuXG4gIGNvbnN0IGhhbmRsZVJlZ2lzdGVyRW50cnkgPSAoXG4gICAgc3RhdGUsXG4gICAge1xuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBpZCxcbiAgICAgICAgbWludCxcbiAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW4sXG4gICAgICAgIG1hcGJveEFwaVVybCxcbiAgICAgICAgbWFwU3R5bGVzUmVwbGFjZURlZmF1bHQsXG4gICAgICAgIGluaXRpYWxVaVN0YXRlXG4gICAgICB9XG4gICAgfVxuICApID0+IHtcbiAgICAvLyBieSBkZWZhdWx0LCBhbHdheXMgY3JlYXRlIGEgbWludCBzdGF0ZSBldmVuIGlmIHRoZSBzYW1lIGlkIGFscmVhZHkgZXhpc3RcbiAgICAvLyBpZiBzdGF0ZS5pZCBleGlzdCBhbmQgbWludD1mYWxzZSwga2VlcCB0aGUgZXhpc3Rpbmcgc3RhdGVcbiAgICBjb25zdCBwcmV2aW91c1N0YXRlID0gc3RhdGVbaWRdICYmIG1pbnQgPT09IGZhbHNlID8gc3RhdGVbaWRdIDogdW5kZWZpbmVkO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIHJlZ2lzdGVyIGVudHJ5IHRvIGtlcGxlci5nbCBwYXNzaW5nIGluIG1hcGJveCBjb25maWcgdG8gbWFwU3R5bGVcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgW2lkXTogY29yZVJlZHVjZXIoXG4gICAgICAgIHByZXZpb3VzU3RhdGUsXG4gICAgICAgIGtlcGxlckdsSW5pdCh7bWFwYm94QXBpQWNjZXNzVG9rZW4sIG1hcGJveEFwaVVybCwgbWFwU3R5bGVzUmVwbGFjZURlZmF1bHQsIGluaXRpYWxVaVN0YXRlfSlcbiAgICAgIClcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUVudHJ5ID0gKHN0YXRlLCB7cGF5bG9hZDogaWR9KSA9PlxuICAgIE9iamVjdC5rZXlzKHN0YXRlKS5yZWR1Y2UoXG4gICAgICAoYWNjdSwgY3VycikgPT4gKHtcbiAgICAgICAgLi4uYWNjdSxcbiAgICAgICAgLi4uKGN1cnIgPT09IGlkID8ge30gOiB7W2N1cnJdOiBzdGF0ZVtjdXJyXX0pXG4gICAgICB9KSxcbiAgICAgIHt9XG4gICAgKTtcblxuICBjb25zdCBoYW5kbGVSZW5hbWVFbnRyeSA9IChzdGF0ZSwge3BheWxvYWQ6IHtvbGRJZCwgbmV3SWR9fSkgPT5cbiAgICBPYmplY3Qua2V5cyhzdGF0ZSkucmVkdWNlKFxuICAgICAgKGFjY3UsIGN1cnIpID0+ICh7XG4gICAgICAgIC4uLmFjY3UsXG4gICAgICAgIC4uLntbY3VyciA9PT0gb2xkSWQgPyBuZXdJZCA6IGN1cnJdOiBzdGF0ZVtjdXJyXX1cbiAgICAgIH0pLFxuICAgICAge31cbiAgICApO1xuXG4gIHJldHVybiAoc3RhdGUgPSBpbml0aWFsQ29yZVN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAvLyB1cGRhdGUgY2hpbGQgc3RhdGVzXG4gICAgT2JqZWN0LmtleXMoc3RhdGUpLmZvckVhY2goaWQgPT4ge1xuICAgICAgY29uc3QgdXBkYXRlSXRlbVN0YXRlID0gY29yZVJlZHVjZXIoc3RhdGVbaWRdLCBfYWN0aW9uRm9yKGlkLCBhY3Rpb24pKTtcbiAgICAgIHN0YXRlID0gX3VwZGF0ZVByb3BlcnR5KHN0YXRlLCBpZCwgdXBkYXRlSXRlbVN0YXRlKTtcbiAgICB9KTtcblxuICAgIC8vIHBlcmZvcm0gYWRkaXRpb25hbCBzdGF0ZSByZWR1Y2luZyAoZS5nLiBzd2l0Y2ggYWN0aW9uLnR5cGUgZXRjLi4uKVxuICAgIGNvbnN0IGhhbmRsZXJzID0ge1xuICAgICAgW0FjdGlvblR5cGVzLlJFR0lTVEVSX0VOVFJZXTogaGFuZGxlUmVnaXN0ZXJFbnRyeSxcbiAgICAgIFtBY3Rpb25UeXBlcy5ERUxFVEVfRU5UUlldOiBoYW5kbGVEZWxldGVFbnRyeSxcbiAgICAgIFtBY3Rpb25UeXBlcy5SRU5BTUVfRU5UUlldOiBoYW5kbGVSZW5hbWVFbnRyeVxuICAgIH07XG5cbiAgICAvLyBUT0RPOiBVbmRlcnN0YW5kIHdoeSB0aGUgTGludCBzZWVzIGFuIGVycm9yIGhlcmUsIHdoaWxlIHRoZSBJREUgZG9lcyBub3QuXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIHJldHVybiBoYW5kbGVBY3Rpb25zKGhhbmRsZXJzLCBpbml0aWFsQ29yZVN0YXRlKShzdGF0ZSwgYWN0aW9uKTtcbiAgfTtcbn1cblxuY29uc3QgX2tlcGxlckdsUmVkdWNlciA9IHByb3ZpZGVJbml0aWFsU3RhdGUoaW5pdGlhbENvcmVTdGF0ZSk7XG5cbmZ1bmN0aW9uIG1lcmdlSW5pdGlhbFN0YXRlKHNhdmVkID0ge30sIHByb3ZpZGVkID0ge30pIHtcbiAgY29uc3Qga2V5cyA9IFsnbWFwU3RhdGUnLCAnbWFwU3R5bGUnLCAndmlzU3RhdGUnLCAndWlTdGF0ZSddO1xuXG4gIC8vIHNoYWxsb3cgbWVyZ2UgZWFjaCByZWR1Y2VyXG4gIHJldHVybiBrZXlzLnJlZHVjZShcbiAgICAoYWNjdSwga2V5KSA9PiAoe1xuICAgICAgLi4uYWNjdSxcbiAgICAgIC4uLihzYXZlZFtrZXldICYmIHByb3ZpZGVkW2tleV1cbiAgICAgICAgPyB7W2tleV06IHsuLi5zYXZlZFtrZXldLCAuLi5wcm92aWRlZFtrZXldfX1cbiAgICAgICAgOiB7W2tleV06IHNhdmVkW2tleV0gfHwgcHJvdmlkZWRba2V5XSB8fCB7fX0pXG4gICAgfSksXG4gICAge31cbiAgKTtcbn1cblxuZnVuY3Rpb24gZGVjb3JhdGUodGFyZ2V0LCBzYXZlZEluaXRpYWxTdGF0ZSA9IHt9KSB7XG4gIGNvbnN0IHRhcmdldEluaXRpYWxTdGF0ZSA9IHNhdmVkSW5pdGlhbFN0YXRlO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEga2VwbGVyLmdsIHJlZHVjZXIgdGhhdCB3aWxsIGFsc28gcGFzcyBlYWNoIGFjdGlvbiB0aHJvdWdoIGFkZGl0aW9uYWwgcmVkdWNlcnMgc3BpZWNpZmllZC5cbiAgICogVGhlIHBhcmFtZXRlciBzaG91bGQgYmUgZWl0aGVyIGEgcmVkdWNlciBtYXAgb3IgYSByZWR1Y2VyIGZ1bmN0aW9uLlxuICAgKiBUaGUgc3RhdGUgcGFzc2VkIGludG8gdGhlIGFkZGl0aW9uYWwgYWN0aW9uIGhhbmRsZXIgaXMgdGhlIGluc3RhbmNlIHN0YXRlLlxuICAgKiBJdCB3aWxsIGluY2x1ZGUgYWxsIHRoZSBzdWJyZWR1Y2VycyBgdmlzU3RhdGVgLCBgdWlTdGF0ZWAsIGBtYXBTdGF0ZWAgYW5kIGBtYXBTdHlsZWAuXG4gICAqIGAucGx1Z2luYCBpcyBvbmx5IG1lYW50IHRvIGJlIGNhbGxlZCBvbmNlIHdoZW4gbW91bnRpbmcgdGhlIGtlcGxlckdsUmVkdWNlciB0byB0aGUgc3RvcmUuXG4gICAqICoqTm90ZSoqIFRoaXMgaXMgYW4gYWR2YW5jZWQgb3B0aW9uIHRvIGdpdmUgeW91IG1vcmUgZnJlZWRvbSB0byBtb2RpZnkgdGhlIGludGVybmFsIHN0YXRlIG9mIHRoZSBrZXBsZXIuZ2wgaW5zdGFuY2UuXG4gICAqIFlvdSBzaG91bGQgb25seSB1c2UgdGhpcyB0byBhZGRpbmcgYWRkaXRpb25hbCBhY3Rpb25zIGluc3RlYWQgb2YgcmVwbGFjaW5nIGRlZmF1bHQgYWN0aW9ucy5cbiAgICpcbiAgICogQG1peGluIGtlcGxlckdsUmVkdWNlci5wbHVnaW5cbiAgICogQG1lbWJlcm9mIGtlcGxlckdsUmVkdWNlclxuICAgKiBAcGFyYW0ge09iamVjdHxGdW5jdGlvbn0gY3VzdG9tUmVkdWNlciAtIEEgcmVkdWNlciBtYXAgb3IgYSByZWR1Y2VyXG4gICAqIEBwdWJsaWNcbiAgICogQGV4YW1wbGVcbiAgICogY29uc3QgbXlLZXBsZXJHbFJlZHVjZXIgPSBrZXBsZXJHbFJlZHVjZXJcbiAgICogIC5wbHVnaW4oe1xuICAgKiAgICAvLyAxLiBhcyByZWR1Y2VyIG1hcFxuICAgKiAgICBISURFX0FORF9TSE9XX1NJREVfUEFORUw6IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAgKiAgICAgIC4uLnN0YXRlLFxuICAgKiAgICAgIHVpU3RhdGU6IHtcbiAgICogICAgICAgIC4uLnN0YXRlLnVpU3RhdGUsXG4gICAqICAgICAgICByZWFkT25seTogIXN0YXRlLnVpU3RhdGUucmVhZE9ubHlcbiAgICogICAgICB9XG4gICAqICAgIH0pXG4gICAqICB9KVxuICAgKiAucGx1Z2luKGhhbmRsZUFjdGlvbnMoe1xuICAgKiAgIC8vIDIuIGFzIHJlZHVjZXJcbiAgICogICAnSElERV9NQVBfQ09OVFJPTFMnOiAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgICogICAgIC4uLnN0YXRlLFxuICAgKiAgICAgdWlTdGF0ZToge1xuICAgKiAgICAgICAuLi5zdGF0ZS51aVN0YXRlLFxuICAgKiAgICAgICBtYXBDb250cm9sczogaGlkZGVuTWFwQ29udHJvbFxuICAgKiAgICAgfVxuICAgKiAgIH0pXG4gICAqIH0sIHt9KSk7XG4gICAqL1xuICB0YXJnZXQucGx1Z2luID0gZnVuY3Rpb24gcGx1Z2luKGN1c3RvbVJlZHVjZXIpIHtcbiAgICBpZiAodHlwZW9mIGN1c3RvbVJlZHVjZXIgPT09ICdvYmplY3QnKSB7XG4gICAgICAvLyBpZiBvbmx5IHByb3ZpZGVkIGEgcmVkdWNlck1hcCwgd3JhcCBpdCBpbiBhIHJlZHVjZXJcbiAgICAgIGN1c3RvbVJlZHVjZXIgPSBoYW5kbGVBY3Rpb25zKGN1c3RvbVJlZHVjZXIsIHt9KTtcbiAgICB9XG5cbiAgICAvLyB1c2UgJ2Z1bmN0aW9uJyBrZXl3b3JkIHRvIGVuYWJsZSAndGhpcydcbiAgICByZXR1cm4gZGVjb3JhdGUoKHN0YXRlID0ge30sIGFjdGlvbiA9IHt9KSA9PiB7XG4gICAgICBsZXQgbmV4dFN0YXRlID0gdGhpcyhzdGF0ZSwgYWN0aW9uKTtcblxuICAgICAgLy8gZm9yIGVhY2ggZW50cnkgaW4gdGhlIHN0YXRlblxuICAgICAgT2JqZWN0LmtleXMobmV4dFN0YXRlKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgLy8gdXBkYXRlIGNoaWxkIHN0YXRlc1xuICAgICAgICBuZXh0U3RhdGUgPSBfdXBkYXRlUHJvcGVydHkoXG4gICAgICAgICAgbmV4dFN0YXRlLFxuICAgICAgICAgIGlkLFxuICAgICAgICAgIGN1c3RvbVJlZHVjZXIobmV4dFN0YXRlW2lkXSwgX2FjdGlvbkZvcihpZCwgYWN0aW9uKSlcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbmV4dFN0YXRlO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gYSByZWR1Y2VyIHRoYXQgaW5pdGlhdGVkIHdpdGggY3VzdG9tIGluaXRpYWwgc3RhdGUuXG4gICAqIFRoZSBwYXJhbWV0ZXIgc2hvdWxkIGJlIGFuIG9iamVjdCBtYXBwaW5nIGZyb20gYHN1YnJlZHVjZXJgIG5hbWUgdG8gY3VzdG9tIHN1YnJlZHVjZXIgc3RhdGUsXG4gICAqIHdoaWNoIHdpbGwgYmUgc2hhbGxvdyAqKm1lcmdlZCoqIHdpdGggZGVmYXVsdCBpbml0aWFsIHN0YXRlLlxuICAgKlxuICAgKiBEZWZhdWx0IHN1YnJlZHVjZXIgc3RhdGU6XG4gICAqICAtIFtgdmlzU3RhdGVgXSguL3Zpcy1zdGF0ZS5tZCNJTklUSUFMX1ZJU19TVEFURSlcbiAgICogIC0gW2BtYXBTdGF0ZWBdKC4vbWFwLXN0YXRlLm1kI0lOSVRJQUxfTUFQX1NUQVRFKVxuICAgKiAgLSBbYG1hcFN0eWxlYF0oLi9tYXAtc3R5bGUubWQjSU5JVElBTF9NQVBfU1RZTEUpXG4gICAqICAtIFtgdWlTdGF0ZWBdKC4vdWktc3RhdGUubWQjSU5JVElBTF9VSV9TVEFURSlcbiAgICogQG1peGluIGtlcGxlckdsUmVkdWNlci5pbml0aWFsU3RhdGVcbiAgICogQG1lbWJlcm9mIGtlcGxlckdsUmVkdWNlclxuICAgKiBAcGFyYW0ge09iamVjdH0gaW5pU3QgLSBjdXN0b20gc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggZGVmYXVsdCBpbml0aWFsIHN0YXRlXG4gICAqIEBwdWJsaWNcbiAgICogQGV4YW1wbGVcbiAgICogY29uc3QgbXlLZXBsZXJHbFJlZHVjZXIgPSBrZXBsZXJHbFJlZHVjZXJcbiAgICogIC5pbml0aWFsU3RhdGUoe1xuICAgKiAgICB1aVN0YXRlOiB7cmVhZE9ubHk6IHRydWV9XG4gICAqICB9KTtcbiAgICovXG4gIHRhcmdldC5pbml0aWFsU3RhdGUgPSBmdW5jdGlvbiBpbml0aWFsU3RhdGUoaW5pU3QpIHtcbiAgICBjb25zdCBtZXJnZWQgPSBtZXJnZUluaXRpYWxTdGF0ZSh0YXJnZXRJbml0aWFsU3RhdGUsIGluaVN0KTtcbiAgICBjb25zdCB0YXJnZXRSZWR1Y2VyID0gcHJvdmlkZUluaXRpYWxTdGF0ZShtZXJnZWQpO1xuXG4gICAgcmV0dXJuIGRlY29yYXRlKHRhcmdldFJlZHVjZXIsIG1lcmdlZCk7XG4gIH07XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuLyoqXG4gKiBLZXBsZXIuZ2wgcmVkdWNlciB0byBiZSBtb3VudGVkIHRvIHlvdXIgc3RvcmUuIFlvdSBjYW4gbW91bnQgYGtlcGxlckdsUmVkdWNlcmAgYXQgcHJvcGVydHkgYGtlcGxlckdsYCwgaWYgeW91IGNob29zZVxuICogdG8gbW91bnQgaXQgYXQgYW5vdGhlciBhZGRyZXNzIGUuZy4gYGZvb2AgeW91IHdpbGwgbmVlZCB0byBzcGVjaWZ5IGl0IHdoZW4geW91IG1vdW50IGBLZXBsZXJHbGAgY29tcG9uZW50IGluIHlvdXIgYXBwIHdpdGggYGdldFN0YXRlOiBzdGF0ZSA9PiBzdGF0ZS5mb29gXG4gKiBAcHVibGljXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IGtlcGxlckdsUmVkdWNlciBmcm9tICdrZXBsZXIuZ2wvcmVkdWNlcnMnO1xuICogaW1wb3J0IHtjcmVhdGVTdG9yZSwgY29tYmluZVJlZHVjZXJzLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2V9IGZyb20gJ3JlZHV4JztcbiAqIGltcG9ydCB7dGFza01pZGRsZXdhcmV9IGZyb20gJ3JlYWN0LXBhbG0vdGFza3MnO1xuICpcbiAqIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuICogY29uc3QgcmVkdWNlcnMgPSBjb21iaW5lUmVkdWNlcnMoe1xuICogICAvLyA8LS0gbW91bnQga2VwbGVyLmdsIHJlZHVjZXIgaW4geW91ciBhcHBcbiAqICAga2VwbGVyR2w6IGtlcGxlckdsUmVkdWNlcixcbiAqXG4gKiAgIC8vIFlvdXIgb3RoZXIgcmVkdWNlcnMgaGVyZVxuICogICBhcHA6IGFwcFJlZHVjZXJcbiAqIH0pO1xuICpcbiAqIC8vIHVzaW5nIGNyZWF0ZVN0b3JlXG4gKiBleHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGFwcGx5TWlkZGxld2FyZSh0YXNrTWlkZGxld2FyZSkpO1xuICovXG5jb25zdCBrZXBsZXJHbFJlZHVjZXIgPSBkZWNvcmF0ZShfa2VwbGVyR2xSZWR1Y2VyKTtcbmV4cG9ydCBkZWZhdWx0IGtlcGxlckdsUmVkdWNlcjtcbiJdfQ==