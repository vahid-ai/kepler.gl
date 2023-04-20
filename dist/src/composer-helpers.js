"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = log;
exports.payload_ = payload_;
exports.apply_ = apply_;
exports.with_ = with_;
exports.if_ = if_;
exports.compose_ = compose_;
exports.merge_ = merge_;
exports.pick_ = pick_;
exports.swap_ = swap_;
exports.findById = findById;
exports.map_ = map_;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _console = _interopRequireDefault(require("global/console"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var identity = function identity(state) {
  return state;
};
/** Returns a function that logs a value with a given message */


function log(text) {
  return function (value) {
    return _console["default"].log(text, value);
  };
}
/** Wraps a value in an object and stores it the `payload` field */


function payload_(payload) {
  return {
    payload: payload
  };
}
/** Wraps a value in an object and stores it the `payload` field */


function apply_(updater, payload) {
  return function (state) {
    return updater(state, payload);
  };
}

function with_(fn) {
  return function (state) {
    return fn(state)(state);
  };
}

function if_(pred, fn) {
  return pred ? fn : identity;
}

function compose_(fns) {
  return function (state) {
    return fns.reduce(function (state2, fn) {
      return fn(state2);
    }, state);
  };
}
/** Returns a reducer function that merges props with state */


function merge_(obj) {
  return function (state) {
    return _objectSpread(_objectSpread({}, state), obj);
  };
}

function pick_(prop) {
  return function (fn) {
    return function (state) {
      return _objectSpread(_objectSpread({}, state), {}, (0, _defineProperty2["default"])({}, prop, fn(state[prop])));
    };
  };
}

function swap_(item) {
  return function (arr) {
    return arr.map(function (a) {
      return a.id === item.id ? item : a;
    });
  };
}

function findById(id) {
  return function (arr) {
    return arr.find(function (a) {
      return a.id === id;
    });
  };
}

function map_(fn) {
  return function (arr) {
    return arr.map(function (e) {
      return fn(e);
    });
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZWR1Y2Vycy9zcmMvY29tcG9zZXItaGVscGVycy50cyJdLCJuYW1lcyI6WyJpZGVudGl0eSIsInN0YXRlIiwibG9nIiwidGV4dCIsInZhbHVlIiwiQ29uc29sZSIsInBheWxvYWRfIiwicGF5bG9hZCIsImFwcGx5XyIsInVwZGF0ZXIiLCJ3aXRoXyIsImZuIiwiaWZfIiwicHJlZCIsImNvbXBvc2VfIiwiZm5zIiwicmVkdWNlIiwic3RhdGUyIiwibWVyZ2VfIiwib2JqIiwicGlja18iLCJwcm9wIiwic3dhcF8iLCJpdGVtIiwiYXJyIiwibWFwIiwiYSIsImlkIiwiZmluZEJ5SWQiLCJmaW5kIiwibWFwXyIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUo7QUFBQSxDQUF0QjtBQUVBOzs7QUFDTyxTQUFTQyxHQUFULENBQWFDLElBQWIsRUFBaUQ7QUFDdEQsU0FBTyxVQUFBQyxLQUFLO0FBQUEsV0FBSUMsb0JBQVFILEdBQVIsQ0FBWUMsSUFBWixFQUFrQkMsS0FBbEIsQ0FBSjtBQUFBLEdBQVo7QUFDRDtBQUNEOzs7QUFDTyxTQUFTRSxRQUFULENBQXFCQyxPQUFyQixFQUFpQztBQUN0QyxTQUFPO0FBQUNBLElBQUFBLE9BQU8sRUFBUEE7QUFBRCxHQUFQO0FBQ0Q7QUFDRDs7O0FBQ08sU0FBU0MsTUFBVCxDQUNMQyxPQURLLEVBRUxGLE9BRkssRUFHb0I7QUFDekIsU0FBTyxVQUFBTixLQUFLO0FBQUEsV0FBSVEsT0FBTyxDQUFDUixLQUFELEVBQVFNLE9BQVIsQ0FBWDtBQUFBLEdBQVo7QUFDRDs7QUFFTSxTQUFTRyxLQUFULENBQ0xDLEVBREssRUFFb0I7QUFDekIsU0FBTyxVQUFBVixLQUFLO0FBQUEsV0FBSVUsRUFBRSxDQUFDVixLQUFELENBQUYsQ0FBVUEsS0FBVixDQUFKO0FBQUEsR0FBWjtBQUNEOztBQUVNLFNBQVNXLEdBQVQsQ0FBb0JDLElBQXBCLEVBQW1DRixFQUFuQyxFQUF5RjtBQUM5RixTQUFPRSxJQUFJLEdBQUdGLEVBQUgsR0FBUVgsUUFBbkI7QUFDRDs7QUFFTSxTQUFTYyxRQUFULENBQXlCQyxHQUF6QixFQUErRTtBQUNwRixTQUFPLFVBQUFkLEtBQUs7QUFBQSxXQUFJYyxHQUFHLENBQUNDLE1BQUosQ0FBVyxVQUFDQyxNQUFELEVBQVNOLEVBQVQ7QUFBQSxhQUFnQkEsRUFBRSxDQUFDTSxNQUFELENBQWxCO0FBQUEsS0FBWCxFQUF1Q2hCLEtBQXZDLENBQUo7QUFBQSxHQUFaO0FBQ0Q7QUFDRDs7O0FBQ08sU0FBU2lCLE1BQVQsQ0FBdUJDLEdBQXZCLEVBQW1FO0FBQ3hFLFNBQU8sVUFBQWxCLEtBQUs7QUFBQSwyQ0FBU0EsS0FBVCxHQUFtQmtCLEdBQW5CO0FBQUEsR0FBWjtBQUNEOztBQUVNLFNBQVNDLEtBQVQsQ0FDTEMsSUFESyxFQUUyRjtBQUNoRyxTQUFPLFVBQUFWLEVBQUU7QUFBQSxXQUFJLFVBQUFWLEtBQUs7QUFBQSw2Q0FBU0EsS0FBVCw0Q0FBaUJvQixJQUFqQixFQUF3QlYsRUFBRSxDQUFDVixLQUFLLENBQUNvQixJQUFELENBQU4sQ0FBMUI7QUFBQSxLQUFUO0FBQUEsR0FBVDtBQUNEOztBQUVNLFNBQVNDLEtBQVQsQ0FBdUNDLElBQXZDLEVBQW1FO0FBQ3hFLFNBQU8sVUFBQUMsR0FBRztBQUFBLFdBQUlBLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLFVBQUFDLENBQUM7QUFBQSxhQUFLQSxDQUFDLENBQUNDLEVBQUYsS0FBU0osSUFBSSxDQUFDSSxFQUFkLEdBQW1CSixJQUFuQixHQUEwQkcsQ0FBL0I7QUFBQSxLQUFULENBQUo7QUFBQSxHQUFWO0FBQ0Q7O0FBRU0sU0FBU0UsUUFBVCxDQUEwQ0QsRUFBMUMsRUFBbUY7QUFDeEYsU0FBTyxVQUFBSCxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDSyxJQUFKLENBQVMsVUFBQUgsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ0MsRUFBRixLQUFTQSxFQUFiO0FBQUEsS0FBVixDQUFKO0FBQUEsR0FBVjtBQUNEOztBQUVNLFNBQVNHLElBQVQsQ0FBaUJuQixFQUFqQixFQUF5RDtBQUM5RCxTQUFPLFVBQUFhLEdBQUc7QUFBQSxXQUFJQSxHQUFHLENBQUNDLEdBQUosQ0FBUSxVQUFBTSxDQUFDO0FBQUEsYUFBSXBCLEVBQUUsQ0FBQ29CLENBQUQsQ0FBTjtBQUFBLEtBQVQsQ0FBSjtBQUFBLEdBQVY7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBDb25zb2xlIGZyb20gJ2dsb2JhbC9jb25zb2xlJztcblxuY29uc3QgaWRlbnRpdHkgPSBzdGF0ZSA9PiBzdGF0ZTtcblxuLyoqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGxvZ3MgYSB2YWx1ZSB3aXRoIGEgZ2l2ZW4gbWVzc2FnZSAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvZyh0ZXh0OiBzdHJpbmcpOiAodmFsdWU6IGFueSkgPT4gdm9pZCB7XG4gIHJldHVybiB2YWx1ZSA9PiBDb25zb2xlLmxvZyh0ZXh0LCB2YWx1ZSk7XG59XG4vKiogV3JhcHMgYSB2YWx1ZSBpbiBhbiBvYmplY3QgYW5kIHN0b3JlcyBpdCB0aGUgYHBheWxvYWRgIGZpZWxkICovXG5leHBvcnQgZnVuY3Rpb24gcGF5bG9hZF88UD4ocGF5bG9hZDogUCkge1xuICByZXR1cm4ge3BheWxvYWR9O1xufVxuLyoqIFdyYXBzIGEgdmFsdWUgaW4gYW4gb2JqZWN0IGFuZCBzdG9yZXMgaXQgdGhlIGBwYXlsb2FkYCBmaWVsZCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5XzxTdGF0ZSwgUD4oXG4gIHVwZGF0ZXI6IChzdGF0ZTogU3RhdGUsIG5leHRQYXlsb2FkOiBQKSA9PiBTdGF0ZSxcbiAgcGF5bG9hZDogUFxuKTogKHN0YXRlOiBTdGF0ZSkgPT4gU3RhdGUge1xuICByZXR1cm4gc3RhdGUgPT4gdXBkYXRlcihzdGF0ZSwgcGF5bG9hZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aXRoXzxTdGF0ZT4oXG4gIGZuOiAoc3RhdGU6IFN0YXRlKSA9PiAobmV4dFN0YXRlOiBTdGF0ZSkgPT4gU3RhdGVcbik6IChzdGF0ZTogU3RhdGUpID0+IFN0YXRlIHtcbiAgcmV0dXJuIHN0YXRlID0+IGZuKHN0YXRlKShzdGF0ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZl88U3RhdGU+KHByZWQ6IGJvb2xlYW4sIGZuOiAoc3RhdGU6IFN0YXRlKSA9PiBTdGF0ZSk6IChzdGF0ZTogU3RhdGUpID0+IFN0YXRlIHtcbiAgcmV0dXJuIHByZWQgPyBmbiA6IGlkZW50aXR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9zZV88U3RhdGU+KGZuczogQXJyYXk8KHM6IFN0YXRlKSA9PiBTdGF0ZT4pOiAoczogU3RhdGUpID0+IFN0YXRlIHtcbiAgcmV0dXJuIHN0YXRlID0+IGZucy5yZWR1Y2UoKHN0YXRlMiwgZm4pID0+IGZuKHN0YXRlMiksIHN0YXRlKTtcbn1cbi8qKiBSZXR1cm5zIGEgcmVkdWNlciBmdW5jdGlvbiB0aGF0IG1lcmdlcyBwcm9wcyB3aXRoIHN0YXRlICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VfPFByb3BzPihvYmo6IFByb3BzKTogPFN0YXRlPihzdGF0ZTogU3RhdGUpID0+IFN0YXRlIHtcbiAgcmV0dXJuIHN0YXRlID0+ICh7Li4uc3RhdGUsIC4uLm9ian0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGlja188UHJvcCBleHRlbmRzIHN0cmluZz4oXG4gIHByb3A6IFByb3Bcbik6IDxWYWx1ZT4oZm46IChwOiBWYWx1ZSkgPT4gVmFsdWUpID0+IDxTdGF0ZSBleHRlbmRzIFJlY29yZDxQcm9wLCBWYWx1ZT4+KHN0YXRlOiBTdGF0ZSkgPT4gU3RhdGUge1xuICByZXR1cm4gZm4gPT4gc3RhdGUgPT4gKHsuLi5zdGF0ZSwgW3Byb3BdOiBmbihzdGF0ZVtwcm9wXSl9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3YXBfPFggZXh0ZW5kcyB7aWQ6IHN0cmluZ30+KGl0ZW06IFgpOiAoYXJyOiBYW10pID0+IFhbXSB7XG4gIHJldHVybiBhcnIgPT4gYXJyLm1hcChhID0+IChhLmlkID09PSBpdGVtLmlkID8gaXRlbSA6IGEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRCeUlkPFggZXh0ZW5kcyB7aWQ6IHN0cmluZ30+KGlkOiBzdHJpbmcpOiAoYXJyOiBYW10pID0+IFggfCB1bmRlZmluZWQge1xuICByZXR1cm4gYXJyID0+IGFyci5maW5kKGEgPT4gYS5pZCA9PT0gaWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwXzxYPihmbjogKHN0YXRlOiBYKSA9PiBYKTogKGFycjogWFtdKSA9PiBYW10ge1xuICByZXR1cm4gYXJyID0+IGFyci5tYXAoZSA9PiBmbihlKSk7XG59XG4iXX0=