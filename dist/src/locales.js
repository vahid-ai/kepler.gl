"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_CODES = exports.LOCALES = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Copyright (c) 2023 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var LOCALES = {
  en: 'English',
  fi: 'Suomi',
  pt: 'Português',
  es: 'Español',
  ca: 'Català',
  ja: '日本語',
  cn: '简体中文',
  ru: 'Русский'
};
/**
 * Localization can be passed to `KeplerGl` via uiState `locale`.
 * Available languages are `en` and `fi`. Default language is `en`
 * @constant
 * @public
 * @example
 * ```js
 * import {combineReducers} from 'redux';
 * import {LOCALE_CODES} from 'kepler.gl/localization';
 *
 * const customizedKeplerGlReducer = keplerGlReducer
 *   .initialState({
 *     uiState: {
 *       // use Finnish locale
 *       locale: LOCALE_CODES.fi
 *     }
 *   });
 *
 * ```
 */

exports.LOCALES = LOCALES;
var LOCALE_CODES = Object.keys(LOCALES).reduce(function (acc, key) {
  return _objectSpread(_objectSpread({}, acc), {}, (0, _defineProperty2["default"])({}, key, key));
}, {});
exports.LOCALE_CODES = LOCALE_CODES;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2NhbGl6YXRpb24vc3JjL2xvY2FsZXMudHMiXSwibmFtZXMiOlsiTE9DQUxFUyIsImVuIiwiZmkiLCJwdCIsImVzIiwiY2EiLCJqYSIsImNuIiwicnUiLCJMT0NBTEVfQ09ERVMiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYWNjIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLE9BQU8sR0FBRztBQUNyQkMsRUFBQUEsRUFBRSxFQUFFLFNBRGlCO0FBRXJCQyxFQUFBQSxFQUFFLEVBQUUsT0FGaUI7QUFHckJDLEVBQUFBLEVBQUUsRUFBRSxXQUhpQjtBQUlyQkMsRUFBQUEsRUFBRSxFQUFFLFNBSmlCO0FBS3JCQyxFQUFBQSxFQUFFLEVBQUUsUUFMaUI7QUFNckJDLEVBQUFBLEVBQUUsRUFBRSxLQU5pQjtBQU9yQkMsRUFBQUEsRUFBRSxFQUFFLE1BUGlCO0FBUXJCQyxFQUFBQSxFQUFFLEVBQUU7QUFSaUIsQ0FBaEI7QUFXUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFNTyxJQUFNQyxZQUE2QixHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWVgsT0FBWixFQUFxQlksTUFBckIsQ0FDM0MsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOO0FBQUEseUNBQW1CRCxHQUFuQiw0Q0FBeUJDLEdBQXpCLEVBQStCQSxHQUEvQjtBQUFBLENBRDJDLEVBRTNDLEVBRjJDLENBQXRDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuZXhwb3J0IGNvbnN0IExPQ0FMRVMgPSB7XG4gIGVuOiAnRW5nbGlzaCcsXG4gIGZpOiAnU3VvbWknLFxuICBwdDogJ1BvcnR1Z3XDqnMnLFxuICBlczogJ0VzcGHDsW9sJyxcbiAgY2E6ICdDYXRhbMOgJyxcbiAgamE6ICfml6XmnKzoqp4nLFxuICBjbjogJ+eugOS9k+S4reaWhycsXG4gIHJ1OiAn0KDRg9GB0YHQutC40LknXG59O1xuXG4vKipcbiAqIExvY2FsaXphdGlvbiBjYW4gYmUgcGFzc2VkIHRvIGBLZXBsZXJHbGAgdmlhIHVpU3RhdGUgYGxvY2FsZWAuXG4gKiBBdmFpbGFibGUgbGFuZ3VhZ2VzIGFyZSBgZW5gIGFuZCBgZmlgLiBEZWZhdWx0IGxhbmd1YWdlIGlzIGBlbmBcbiAqIEBjb25zdGFudFxuICogQHB1YmxpY1xuICogQGV4YW1wbGVcbiAqIGBgYGpzXG4gKiBpbXBvcnQge2NvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnO1xuICogaW1wb3J0IHtMT0NBTEVfQ09ERVN9IGZyb20gJ2tlcGxlci5nbC9sb2NhbGl6YXRpb24nO1xuICpcbiAqIGNvbnN0IGN1c3RvbWl6ZWRLZXBsZXJHbFJlZHVjZXIgPSBrZXBsZXJHbFJlZHVjZXJcbiAqICAgLmluaXRpYWxTdGF0ZSh7XG4gKiAgICAgdWlTdGF0ZToge1xuICogICAgICAgLy8gdXNlIEZpbm5pc2ggbG9jYWxlXG4gKiAgICAgICBsb2NhbGU6IExPQ0FMRV9DT0RFUy5maVxuICogICAgIH1cbiAqICAgfSk7XG4gKlxuICogYGBgXG4gKi9cblxuZXhwb3J0IHR5cGUgTG9jYWxlQ29kZXNUeXBlID0ge1xuICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgTE9DQUxFX0NPREVTOiBMb2NhbGVDb2Rlc1R5cGUgPSBPYmplY3Qua2V5cyhMT0NBTEVTKS5yZWR1Y2UoXG4gIChhY2MsIGtleSkgPT4gKHsuLi5hY2MsIFtrZXldOiBrZXl9KSxcbiAge31cbik7XG4iXX0=