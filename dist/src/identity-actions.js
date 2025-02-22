"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renameEntry = exports.deleteEntry = exports.registerEntry = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _actionTypes = _interopRequireDefault(require("./action-types"));

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

/**
 *
 * Add a new kepler.gl instance in `keplerGlReducer`. This action is called under-the-hood when a `KeplerGl` component is **mounted** to the dom.
 * Note that if you dispatch actions such as adding data to a kepler.gl instance before the React component is mounted, the action will not be
 * performed. Instance reducer can only handle actions when it is instantiated.
 * @memberof rootActions
 * @param payload
 * @param payload.id - ***required** The id of the instance
 * @param payload.mint - Whether to use a fresh empty state, when `mint: true` it will *always* load a fresh state when the component is re-mounted.
 * When `mint: false` it will register with existing instance state under the same `id`, when the component is unmounted then mounted again. Default: `true`
 * @param payload.mapboxApiAccessToken - mapboxApiAccessToken to be saved in `map-style` reducer.
 * @param payload.mapboxApiUrl - mapboxApiUrl to be saved in `map-style` reducer.
 * @param payload.mapStylesReplaceDefault - mapStylesReplaceDefault to be saved in `map-style` reducer.
 * @param payload.initialUiState - initial ui state
 * @public
 */
var registerEntry = (0, _toolkit.createAction)(_actionTypes["default"].REGISTER_ENTRY, function (payload) {
  return {
    payload: payload
  };
});
/**
 *
 * Delete an instance from `keplerGlReducer`. This action is called under-the-hood when a `KeplerGl` component is **un-mounted** to the dom.
 * If `mint` is set to be `true` in the component prop, the instance state will be deleted from the root reducer. Otherwise, the root reducer will keep
 * the instance state and later transfer it to a newly mounted component with the same `id`
 * @memberof rootActions
 * @param {string} id - the id of the instance to be deleted
 * @public
 */

exports.registerEntry = registerEntry;
var deleteEntry = (0, _toolkit.createAction)(_actionTypes["default"].DELETE_ENTRY, function (id) {
  return {
    payload: id
  };
});
/**
 *
 * Rename an instance in the root reducer, keep its entire state
 *
 * @memberof rootActions
 * @param {string} oldId - ***required** old id
 * @param {string} newId - ***required** new id
 * @public
 */

exports.deleteEntry = deleteEntry;
var renameEntry = (0, _toolkit.createAction)(_actionTypes["default"].RENAME_ENTRY, function (oldId, newId) {
  return {
    payload: {
      oldId: oldId,
      newId: newId
    }
  };
});
/**
 * This declaration is needed to group actions in docs
 */

/**
 * Root actions managers adding and removing instances in root reducer.
 * Under-the-hood, when a `KeplerGl` component is mounted or unmounted,
 * it will automatically calls these actions to add itself to the root reducer.
 * However, sometimes the data is ready before the component is registered in the reducer,
 * in this case, you can manually call these actions or the corresponding updater to add it to the reducer.
 *
 * @public
 */

/* eslint-disable no-unused-vars */
// @ts-ignore

exports.renameEntry = renameEntry;
var rootActions = null;
/* eslint-enable no-unused-vars */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NyYy9pZGVudGl0eS1hY3Rpb25zLnRzIl0sIm5hbWVzIjpbInJlZ2lzdGVyRW50cnkiLCJBY3Rpb25UeXBlcyIsIlJFR0lTVEVSX0VOVFJZIiwicGF5bG9hZCIsImRlbGV0ZUVudHJ5IiwiREVMRVRFX0VOVFJZIiwiaWQiLCJyZW5hbWVFbnRyeSIsIlJFTkFNRV9FTlRSWSIsIm9sZElkIiwibmV3SWQiLCJyb290QWN0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQXJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxhQUtaLEdBQUcsMkJBQWFDLHdCQUFZQyxjQUF6QixFQUF5QyxVQUFDQyxPQUFEO0FBQUEsU0FBcUQ7QUFDaEdBLElBQUFBLE9BQU8sRUFBUEE7QUFEZ0csR0FBckQ7QUFBQSxDQUF6QyxDQUxHO0FBU1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNQyxXQUtaLEdBQUcsMkJBQWFILHdCQUFZSSxZQUF6QixFQUF1QyxVQUFDQyxFQUFEO0FBQUEsU0FBaUI7QUFBQ0gsSUFBQUEsT0FBTyxFQUFFRztBQUFWLEdBQWpCO0FBQUEsQ0FBdkMsQ0FMRztBQU9QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsV0FTWixHQUFHLDJCQUFhTix3QkFBWU8sWUFBekIsRUFBdUMsVUFBQ0MsS0FBRCxFQUFnQkMsS0FBaEI7QUFBQSxTQUFtQztBQUM1RVAsSUFBQUEsT0FBTyxFQUFFO0FBQ1BNLE1BQUFBLEtBQUssRUFBTEEsS0FETztBQUVQQyxNQUFBQSxLQUFLLEVBQUxBO0FBRk87QUFEbUUsR0FBbkM7QUFBQSxDQUF2QyxDQVRHO0FBZ0JQO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHLElBQXBCO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQge2NyZWF0ZUFjdGlvbn0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQge2RlZmF1bHQgYXMgQWN0aW9uVHlwZXN9IGZyb20gJy4vYWN0aW9uLXR5cGVzJztcbmltcG9ydCB7VWlTdGF0ZX0gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyRW50cnlVcGRhdGVyQWN0aW9uID0ge1xuICBwYXlsb2FkOiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBtaW50PzogYm9vbGVhbjtcbiAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj86IHN0cmluZztcbiAgICBtYXBib3hBcGlVcmw/OiBzdHJpbmc7XG4gICAgbWFwU3R5bGVzUmVwbGFjZURlZmF1bHQ/OiBib29sZWFuO1xuICAgIGluaXRpYWxVaVN0YXRlPzogUGFydGlhbDxVaVN0YXRlPjtcbiAgfTtcbn07XG4vKipcbiAqXG4gKiBBZGQgYSBuZXcga2VwbGVyLmdsIGluc3RhbmNlIGluIGBrZXBsZXJHbFJlZHVjZXJgLiBUaGlzIGFjdGlvbiBpcyBjYWxsZWQgdW5kZXItdGhlLWhvb2Qgd2hlbiBhIGBLZXBsZXJHbGAgY29tcG9uZW50IGlzICoqbW91bnRlZCoqIHRvIHRoZSBkb20uXG4gKiBOb3RlIHRoYXQgaWYgeW91IGRpc3BhdGNoIGFjdGlvbnMgc3VjaCBhcyBhZGRpbmcgZGF0YSB0byBhIGtlcGxlci5nbCBpbnN0YW5jZSBiZWZvcmUgdGhlIFJlYWN0IGNvbXBvbmVudCBpcyBtb3VudGVkLCB0aGUgYWN0aW9uIHdpbGwgbm90IGJlXG4gKiBwZXJmb3JtZWQuIEluc3RhbmNlIHJlZHVjZXIgY2FuIG9ubHkgaGFuZGxlIGFjdGlvbnMgd2hlbiBpdCBpcyBpbnN0YW50aWF0ZWQuXG4gKiBAbWVtYmVyb2Ygcm9vdEFjdGlvbnNcbiAqIEBwYXJhbSBwYXlsb2FkXG4gKiBAcGFyYW0gcGF5bG9hZC5pZCAtICoqKnJlcXVpcmVkKiogVGhlIGlkIG9mIHRoZSBpbnN0YW5jZVxuICogQHBhcmFtIHBheWxvYWQubWludCAtIFdoZXRoZXIgdG8gdXNlIGEgZnJlc2ggZW1wdHkgc3RhdGUsIHdoZW4gYG1pbnQ6IHRydWVgIGl0IHdpbGwgKmFsd2F5cyogbG9hZCBhIGZyZXNoIHN0YXRlIHdoZW4gdGhlIGNvbXBvbmVudCBpcyByZS1tb3VudGVkLlxuICogV2hlbiBgbWludDogZmFsc2VgIGl0IHdpbGwgcmVnaXN0ZXIgd2l0aCBleGlzdGluZyBpbnN0YW5jZSBzdGF0ZSB1bmRlciB0aGUgc2FtZSBgaWRgLCB3aGVuIHRoZSBjb21wb25lbnQgaXMgdW5tb3VudGVkIHRoZW4gbW91bnRlZCBhZ2Fpbi4gRGVmYXVsdDogYHRydWVgXG4gKiBAcGFyYW0gcGF5bG9hZC5tYXBib3hBcGlBY2Nlc3NUb2tlbiAtIG1hcGJveEFwaUFjY2Vzc1Rva2VuIHRvIGJlIHNhdmVkIGluIGBtYXAtc3R5bGVgIHJlZHVjZXIuXG4gKiBAcGFyYW0gcGF5bG9hZC5tYXBib3hBcGlVcmwgLSBtYXBib3hBcGlVcmwgdG8gYmUgc2F2ZWQgaW4gYG1hcC1zdHlsZWAgcmVkdWNlci5cbiAqIEBwYXJhbSBwYXlsb2FkLm1hcFN0eWxlc1JlcGxhY2VEZWZhdWx0IC0gbWFwU3R5bGVzUmVwbGFjZURlZmF1bHQgdG8gYmUgc2F2ZWQgaW4gYG1hcC1zdHlsZWAgcmVkdWNlci5cbiAqIEBwYXJhbSBwYXlsb2FkLmluaXRpYWxVaVN0YXRlIC0gaW5pdGlhbCB1aSBzdGF0ZVxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJFbnRyeTogKFxuICBlbnRyeTogUmVnaXN0ZXJFbnRyeVVwZGF0ZXJBY3Rpb25bJ3BheWxvYWQnXVxuKSA9PiB7XG4gIHR5cGU6IHR5cGVvZiBBY3Rpb25UeXBlcy5SRUdJU1RFUl9FTlRSWTtcbiAgcGF5bG9hZDogUmVnaXN0ZXJFbnRyeVVwZGF0ZXJBY3Rpb25bJ3BheWxvYWQnXTtcbn0gPSBjcmVhdGVBY3Rpb24oQWN0aW9uVHlwZXMuUkVHSVNURVJfRU5UUlksIChwYXlsb2FkOiBSZWdpc3RlckVudHJ5VXBkYXRlckFjdGlvblsncGF5bG9hZCddKSA9PiAoe1xuICBwYXlsb2FkXG59KSk7XG5cbi8qKlxuICpcbiAqIERlbGV0ZSBhbiBpbnN0YW5jZSBmcm9tIGBrZXBsZXJHbFJlZHVjZXJgLiBUaGlzIGFjdGlvbiBpcyBjYWxsZWQgdW5kZXItdGhlLWhvb2Qgd2hlbiBhIGBLZXBsZXJHbGAgY29tcG9uZW50IGlzICoqdW4tbW91bnRlZCoqIHRvIHRoZSBkb20uXG4gKiBJZiBgbWludGAgaXMgc2V0IHRvIGJlIGB0cnVlYCBpbiB0aGUgY29tcG9uZW50IHByb3AsIHRoZSBpbnN0YW5jZSBzdGF0ZSB3aWxsIGJlIGRlbGV0ZWQgZnJvbSB0aGUgcm9vdCByZWR1Y2VyLiBPdGhlcndpc2UsIHRoZSByb290IHJlZHVjZXIgd2lsbCBrZWVwXG4gKiB0aGUgaW5zdGFuY2Ugc3RhdGUgYW5kIGxhdGVyIHRyYW5zZmVyIGl0IHRvIGEgbmV3bHkgbW91bnRlZCBjb21wb25lbnQgd2l0aCB0aGUgc2FtZSBgaWRgXG4gKiBAbWVtYmVyb2Ygcm9vdEFjdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIHRoZSBpZCBvZiB0aGUgaW5zdGFuY2UgdG8gYmUgZGVsZXRlZFxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgZGVsZXRlRW50cnk6IChcbiAgaWQ6IHN0cmluZ1xuKSA9PiB7XG4gIHR5cGU6IHR5cGVvZiBBY3Rpb25UeXBlcy5ERUxFVEVfRU5UUlk7XG4gIHBheWxvYWQ6IHN0cmluZztcbn0gPSBjcmVhdGVBY3Rpb24oQWN0aW9uVHlwZXMuREVMRVRFX0VOVFJZLCAoaWQ6IHN0cmluZykgPT4gKHtwYXlsb2FkOiBpZH0pKTtcblxuLyoqXG4gKlxuICogUmVuYW1lIGFuIGluc3RhbmNlIGluIHRoZSByb290IHJlZHVjZXIsIGtlZXAgaXRzIGVudGlyZSBzdGF0ZVxuICpcbiAqIEBtZW1iZXJvZiByb290QWN0aW9uc1xuICogQHBhcmFtIHtzdHJpbmd9IG9sZElkIC0gKioqcmVxdWlyZWQqKiBvbGQgaWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBuZXdJZCAtICoqKnJlcXVpcmVkKiogbmV3IGlkXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCByZW5hbWVFbnRyeTogKFxuICBvbGRJZDogc3RyaW5nLFxuICBuZXdJZDogc3RyaW5nXG4pID0+IHtcbiAgdHlwZTogdHlwZW9mIEFjdGlvblR5cGVzLlJFTkFNRV9FTlRSWTtcbiAgcGF5bG9hZDoge1xuICAgIG9sZElkOiBzdHJpbmc7XG4gICAgbmV3SWQ6IHN0cmluZztcbiAgfTtcbn0gPSBjcmVhdGVBY3Rpb24oQWN0aW9uVHlwZXMuUkVOQU1FX0VOVFJZLCAob2xkSWQ6IHN0cmluZywgbmV3SWQ6IHN0cmluZykgPT4gKHtcbiAgcGF5bG9hZDoge1xuICAgIG9sZElkLFxuICAgIG5ld0lkXG4gIH1cbn0pKTtcblxuLyoqXG4gKiBUaGlzIGRlY2xhcmF0aW9uIGlzIG5lZWRlZCB0byBncm91cCBhY3Rpb25zIGluIGRvY3NcbiAqL1xuLyoqXG4gKiBSb290IGFjdGlvbnMgbWFuYWdlcnMgYWRkaW5nIGFuZCByZW1vdmluZyBpbnN0YW5jZXMgaW4gcm9vdCByZWR1Y2VyLlxuICogVW5kZXItdGhlLWhvb2QsIHdoZW4gYSBgS2VwbGVyR2xgIGNvbXBvbmVudCBpcyBtb3VudGVkIG9yIHVubW91bnRlZCxcbiAqIGl0IHdpbGwgYXV0b21hdGljYWxseSBjYWxscyB0aGVzZSBhY3Rpb25zIHRvIGFkZCBpdHNlbGYgdG8gdGhlIHJvb3QgcmVkdWNlci5cbiAqIEhvd2V2ZXIsIHNvbWV0aW1lcyB0aGUgZGF0YSBpcyByZWFkeSBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyByZWdpc3RlcmVkIGluIHRoZSByZWR1Y2VyLFxuICogaW4gdGhpcyBjYXNlLCB5b3UgY2FuIG1hbnVhbGx5IGNhbGwgdGhlc2UgYWN0aW9ucyBvciB0aGUgY29ycmVzcG9uZGluZyB1cGRhdGVyIHRvIGFkZCBpdCB0byB0aGUgcmVkdWNlci5cbiAqXG4gKiBAcHVibGljXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4vLyBAdHMtaWdub3JlXG5jb25zdCByb290QWN0aW9ucyA9IG51bGw7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG4iXX0=