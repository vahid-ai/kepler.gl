"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _document = _interopRequireDefault(require("global/document"));

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
function nope() {}

var MouseEventHandler = /*#__PURE__*/function () {
  // Set correct type
  // Set correct type
  function MouseEventHandler(_ref) {
    var _this = this;

    var _ref$vertical = _ref.vertical,
        vertical = _ref$vertical === void 0 ? false : _ref$vertical,
        _ref$valueListener = _ref.valueListener,
        valueListener = _ref$valueListener === void 0 ? nope : _ref$valueListener,
        _ref$toggleMouseOver = _ref.toggleMouseOver,
        toggleMouseOver = _ref$toggleMouseOver === void 0 ? nope : _ref$toggleMouseOver,
        track = _ref.track,
        _ref$setAnchor = _ref.setAnchor,
        setAnchor = _ref$setAnchor === void 0 ? null : _ref$setAnchor;
    (0, _classCallCheck2["default"])(this, MouseEventHandler);
    (0, _defineProperty2["default"])(this, "vertical", void 0);
    (0, _defineProperty2["default"])(this, "valueListener", void 0);
    (0, _defineProperty2["default"])(this, "toggleMouseOver", void 0);
    (0, _defineProperty2["default"])(this, "track", void 0);
    (0, _defineProperty2["default"])(this, "setAnchor", void 0);
    (0, _defineProperty2["default"])(this, "handleMouseDown", function (e) {
      _document["default"].addEventListener('mouseup', _this.mouseup);

      _document["default"].addEventListener('mousemove', _this.mousemove);

      if (_this.setAnchor) {
        var pos = _this.getMousePos(e);

        _this.setAnchor(_this.getDistanceToTrack(pos));
      }

      _this.toggleMouseOver();
    });
    (0, _defineProperty2["default"])(this, "mouseup", function () {
      _document["default"].removeEventListener('mouseup', _this.mouseup);

      _document["default"].removeEventListener('mousemove', _this.mousemove);

      _this.toggleMouseOver();
    });
    (0, _defineProperty2["default"])(this, "mousemove", function (e) {
      e.preventDefault();

      var pos = _this.getMousePos(e);

      _this.valueListener(_this.getDistanceToTrack(pos));
    });
    (0, _defineProperty2["default"])(this, "handleTouchStart", function (e) {
      // TODO: fix touch event
      _document["default"].addEventListener('touchend', _this.touchend);

      _document["default"].addEventListener('touchmove', _this.touchmove);

      if (_this.setAnchor) {
        var pos = _this.getTouchPosition(e);

        _this.setAnchor(_this.getDistanceToTrack(pos));
      }

      _this.toggleMouseOver();
    });
    (0, _defineProperty2["default"])(this, "touchmove", function (e) {
      // TODO: touch not tested
      var pos = _this.getTouchPosition(e);

      _this.valueListener(_this.getDistanceToTrack(pos));
    });
    (0, _defineProperty2["default"])(this, "touchend", function () {
      _document["default"].removeEventListener('touchend', _this.touchend);

      _document["default"].removeEventListener('touchmove', _this.touchmove);

      _this.toggleMouseOver();
    });
    this.vertical = vertical;
    this.valueListener = valueListener;
    this.toggleMouseOver = toggleMouseOver;
    this.track = track;
    this.setAnchor = setAnchor;
  }

  (0, _createClass2["default"])(MouseEventHandler, [{
    key: "getMousePos",
    value: function getMousePos(e) {
      return this.vertical ? e.clientY : e.clientX;
    }
  }, {
    key: "getTouchPosition",
    value: function getTouchPosition(e) {
      return this.vertical ? e.touches[0].clientY : e.touches[0].clientX;
    }
  }, {
    key: "getDistanceToTrack",
    value: function getDistanceToTrack(pos) {
      if (!this.track.current) {
        return 0;
      }

      var trackRect = this.track.current.getBoundingClientRect();
      return pos - (this.vertical ? trackRect.bottom : trackRect.left);
    }
  }]);
  return MouseEventHandler;
}();

exports["default"] = MouseEventHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vc2xpZGVyL21vdXNlLWV2ZW50LnRzIl0sIm5hbWVzIjpbIm5vcGUiLCJNb3VzZUV2ZW50SGFuZGxlciIsInZlcnRpY2FsIiwidmFsdWVMaXN0ZW5lciIsInRvZ2dsZU1vdXNlT3ZlciIsInRyYWNrIiwic2V0QW5jaG9yIiwiZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdXNldXAiLCJtb3VzZW1vdmUiLCJwb3MiLCJnZXRNb3VzZVBvcyIsImdldERpc3RhbmNlVG9UcmFjayIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCIsInRvdWNoZW5kIiwidG91Y2htb3ZlIiwiZ2V0VG91Y2hQb3NpdGlvbiIsImNsaWVudFkiLCJjbGllbnRYIiwidG91Y2hlcyIsImN1cnJlbnQiLCJ0cmFja1JlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJib3R0b20iLCJsZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUEsU0FBU0EsSUFBVCxHQUF1QixDQUFFOztJQVVKQyxpQjtBQUk2QjtBQUNRO0FBRXhELG1DQU0yQjtBQUFBOztBQUFBLDZCQUx6QkMsUUFLeUI7QUFBQSxRQUx6QkEsUUFLeUIsOEJBTGQsS0FLYztBQUFBLGtDQUp6QkMsYUFJeUI7QUFBQSxRQUp6QkEsYUFJeUIsbUNBSlRILElBSVM7QUFBQSxvQ0FIekJJLGVBR3lCO0FBQUEsUUFIekJBLGVBR3lCLHFDQUhQSixJQUdPO0FBQUEsUUFGekJLLEtBRXlCLFFBRnpCQSxLQUV5QjtBQUFBLDhCQUR6QkMsU0FDeUI7QUFBQSxRQUR6QkEsU0FDeUIsK0JBRGIsSUFDYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhEQVFlLFVBQUNDLENBQUQsRUFBbUI7QUFDM0RDLDJCQUFTQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxLQUFJLENBQUNDLE9BQTFDOztBQUNBRiwyQkFBU0MsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsS0FBSSxDQUFDRSxTQUE1Qzs7QUFDQSxVQUFJLEtBQUksQ0FBQ0wsU0FBVCxFQUFvQjtBQUNsQixZQUFNTSxHQUFHLEdBQUcsS0FBSSxDQUFDQyxXQUFMLENBQWlCTixDQUFqQixDQUFaOztBQUNBLFFBQUEsS0FBSSxDQUFDRCxTQUFMLENBQWUsS0FBSSxDQUFDUSxrQkFBTCxDQUF3QkYsR0FBeEIsQ0FBZjtBQUNEOztBQUNELE1BQUEsS0FBSSxDQUFDUixlQUFMO0FBQ0QsS0FoQjBCO0FBQUEsc0RBMEJULFlBQU07QUFDdEJJLDJCQUFTTyxtQkFBVCxDQUE2QixTQUE3QixFQUF3QyxLQUFJLENBQUNMLE9BQTdDOztBQUNBRiwyQkFBU08sbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMEMsS0FBSSxDQUFDSixTQUEvQzs7QUFDQSxNQUFBLEtBQUksQ0FBQ1AsZUFBTDtBQUNELEtBOUIwQjtBQUFBLHdEQXdDUCxVQUFDRyxDQUFELEVBQW1CO0FBQ3JDQSxNQUFBQSxDQUFDLENBQUNTLGNBQUY7O0FBQ0EsVUFBTUosR0FBRyxHQUFHLEtBQUksQ0FBQ0MsV0FBTCxDQUFpQk4sQ0FBakIsQ0FBWjs7QUFDQSxNQUFBLEtBQUksQ0FBQ0osYUFBTCxDQUFtQixLQUFJLENBQUNXLGtCQUFMLENBQXdCRixHQUF4QixDQUFuQjtBQUNELEtBNUMwQjtBQUFBLCtEQThDVyxVQUFDTCxDQUFELEVBQW1CO0FBQ3ZEO0FBQ0FDLDJCQUFTQyxnQkFBVCxDQUEwQixVQUExQixFQUFzQyxLQUFJLENBQUNRLFFBQTNDOztBQUNBVCwyQkFBU0MsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUMsS0FBSSxDQUFDUyxTQUE1Qzs7QUFDQSxVQUFJLEtBQUksQ0FBQ1osU0FBVCxFQUFvQjtBQUNsQixZQUFNTSxHQUFHLEdBQUcsS0FBSSxDQUFDTyxnQkFBTCxDQUFzQlosQ0FBdEIsQ0FBWjs7QUFDQSxRQUFBLEtBQUksQ0FBQ0QsU0FBTCxDQUFlLEtBQUksQ0FBQ1Esa0JBQUwsQ0FBd0JGLEdBQXhCLENBQWY7QUFDRDs7QUFDRCxNQUFBLEtBQUksQ0FBQ1IsZUFBTDtBQUNELEtBdkQwQjtBQUFBLHdEQXlEUCxVQUFDRyxDQUFELEVBQW1CO0FBQ3JDO0FBQ0EsVUFBTUssR0FBRyxHQUFHLEtBQUksQ0FBQ08sZ0JBQUwsQ0FBc0JaLENBQXRCLENBQVo7O0FBQ0EsTUFBQSxLQUFJLENBQUNKLGFBQUwsQ0FBbUIsS0FBSSxDQUFDVyxrQkFBTCxDQUF3QkYsR0FBeEIsQ0FBbkI7QUFDRCxLQTdEMEI7QUFBQSx1REErRFIsWUFBTTtBQUN2QkosMkJBQVNPLG1CQUFULENBQTZCLFVBQTdCLEVBQXlDLEtBQUksQ0FBQ0UsUUFBOUM7O0FBQ0FULDJCQUFTTyxtQkFBVCxDQUE2QixXQUE3QixFQUEwQyxLQUFJLENBQUNHLFNBQS9DOztBQUNBLE1BQUEsS0FBSSxDQUFDZCxlQUFMO0FBQ0QsS0FuRTBCO0FBQ3pCLFNBQUtGLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLQyxlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7Ozs7V0FZRCxxQkFBb0JDLENBQXBCLEVBQW1DO0FBQ2pDLGFBQU8sS0FBS0wsUUFBTCxHQUFnQkssQ0FBQyxDQUFDYSxPQUFsQixHQUE0QmIsQ0FBQyxDQUFDYyxPQUFyQztBQUNEOzs7V0FFRCwwQkFBeUJkLENBQXpCLEVBQXdDO0FBQ3RDLGFBQU8sS0FBS0wsUUFBTCxHQUFnQkssQ0FBQyxDQUFDZSxPQUFGLENBQVUsQ0FBVixFQUFhRixPQUE3QixHQUF1Q2IsQ0FBQyxDQUFDZSxPQUFGLENBQVUsQ0FBVixFQUFhRCxPQUEzRDtBQUNEOzs7V0FRRCw0QkFBMkJULEdBQTNCLEVBQXdDO0FBQ3RDLFVBQUksQ0FBQyxLQUFLUCxLQUFMLENBQVdrQixPQUFoQixFQUF5QjtBQUN2QixlQUFPLENBQVA7QUFDRDs7QUFDRCxVQUFNQyxTQUFTLEdBQUcsS0FBS25CLEtBQUwsQ0FBV2tCLE9BQVgsQ0FBbUJFLHFCQUFuQixFQUFsQjtBQUNBLGFBQU9iLEdBQUcsSUFBSSxLQUFLVixRQUFMLEdBQWdCc0IsU0FBUyxDQUFDRSxNQUExQixHQUFtQ0YsU0FBUyxDQUFDRyxJQUFqRCxDQUFWO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgZG9jdW1lbnQgZnJvbSAnZ2xvYmFsL2RvY3VtZW50JztcbmltcG9ydCB7XG4gIFJlZk9iamVjdCxcbiAgVG91Y2hFdmVudCxcbiAgVG91Y2hFdmVudEhhbmRsZXIsXG4gIE1vdXNlRXZlbnRIYW5kbGVyIGFzIFJlYWN0TW91c2VFdmVudEhhbmRsZXIsXG4gIE1vdXNlRXZlbnRcbn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTdHlsZVJhbmdlU2xpZGVyVHlwZX0gZnJvbSAnLi9zbGlkZXInO1xuXG5mdW5jdGlvbiBub3BlKC4uLmFyZ3MpIHt9XG5cbnR5cGUgTW91c2VFdmVudEhhbmRsZXJQcm9wcyA9IHtcbiAgdmVydGljYWw6IGJvb2xlYW47XG4gIHZhbHVlTGlzdGVuZXI6IChkaXN0YW5jZTogbnVtYmVyKSA9PiB2b2lkO1xuICB0b2dnbGVNb3VzZU92ZXI6ICgpID0+IHZvaWQ7XG4gIHRyYWNrOiBSZWZPYmplY3Q8U3R5bGVSYW5nZVNsaWRlclR5cGU+O1xuICBzZXRBbmNob3I/OiBudWxsIHwgKChkaXN0YW5jZTogbnVtYmVyKSA9PiB2b2lkKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlRXZlbnRIYW5kbGVyIHtcbiAgcHJpdmF0ZSB2ZXJ0aWNhbDogYm9vbGVhbjtcbiAgcHJpdmF0ZSB2YWx1ZUxpc3RlbmVyOiAoZGlzdGFuY2U6IG51bWJlcikgPT4gdm9pZDtcbiAgcHJpdmF0ZSB0b2dnbGVNb3VzZU92ZXI6ICgpID0+IHZvaWQ7XG4gIHByaXZhdGUgdHJhY2s6IFJlZk9iamVjdDxTdHlsZVJhbmdlU2xpZGVyVHlwZT47IC8vIFNldCBjb3JyZWN0IHR5cGVcbiAgcHJpdmF0ZSBzZXRBbmNob3I6IG51bGwgfCAoKGRpc3RhbmNlOiBudW1iZXIpID0+IHZvaWQpOyAvLyBTZXQgY29ycmVjdCB0eXBlXG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIHZlcnRpY2FsID0gZmFsc2UsXG4gICAgdmFsdWVMaXN0ZW5lciA9IG5vcGUsXG4gICAgdG9nZ2xlTW91c2VPdmVyID0gbm9wZSxcbiAgICB0cmFjayxcbiAgICBzZXRBbmNob3IgPSBudWxsXG4gIH06IE1vdXNlRXZlbnRIYW5kbGVyUHJvcHMpIHtcbiAgICB0aGlzLnZlcnRpY2FsID0gdmVydGljYWw7XG4gICAgdGhpcy52YWx1ZUxpc3RlbmVyID0gdmFsdWVMaXN0ZW5lcjtcbiAgICB0aGlzLnRvZ2dsZU1vdXNlT3ZlciA9IHRvZ2dsZU1vdXNlT3ZlcjtcbiAgICB0aGlzLnRyYWNrID0gdHJhY2s7XG4gICAgdGhpcy5zZXRBbmNob3IgPSBzZXRBbmNob3I7XG4gIH1cblxuICBoYW5kbGVNb3VzZURvd246IFJlYWN0TW91c2VFdmVudEhhbmRsZXIgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm1vdXNldXApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2Vtb3ZlKTtcbiAgICBpZiAodGhpcy5zZXRBbmNob3IpIHtcbiAgICAgIGNvbnN0IHBvcyA9IHRoaXMuZ2V0TW91c2VQb3MoZSk7XG4gICAgICB0aGlzLnNldEFuY2hvcih0aGlzLmdldERpc3RhbmNlVG9UcmFjayhwb3MpKTtcbiAgICB9XG4gICAgdGhpcy50b2dnbGVNb3VzZU92ZXIoKTtcbiAgfTtcblxuICBwcml2YXRlIGdldE1vdXNlUG9zKGU6IE1vdXNlRXZlbnQpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0aWNhbCA/IGUuY2xpZW50WSA6IGUuY2xpZW50WDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VG91Y2hQb3NpdGlvbihlOiBUb3VjaEV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljYWwgPyBlLnRvdWNoZXNbMF0uY2xpZW50WSA6IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICB9XG5cbiAgcHJpdmF0ZSBtb3VzZXVwID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm1vdXNldXApO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMubW91c2Vtb3ZlKTtcbiAgICB0aGlzLnRvZ2dsZU1vdXNlT3ZlcigpO1xuICB9O1xuXG4gIHByaXZhdGUgZ2V0RGlzdGFuY2VUb1RyYWNrKHBvczogbnVtYmVyKSB7XG4gICAgaWYgKCF0aGlzLnRyYWNrLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBjb25zdCB0cmFja1JlY3QgPSB0aGlzLnRyYWNrLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHBvcyAtICh0aGlzLnZlcnRpY2FsID8gdHJhY2tSZWN0LmJvdHRvbSA6IHRyYWNrUmVjdC5sZWZ0KTtcbiAgfVxuXG4gIHByaXZhdGUgbW91c2Vtb3ZlID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcG9zID0gdGhpcy5nZXRNb3VzZVBvcyhlKTtcbiAgICB0aGlzLnZhbHVlTGlzdGVuZXIodGhpcy5nZXREaXN0YW5jZVRvVHJhY2socG9zKSk7XG4gIH07XG5cbiAgaGFuZGxlVG91Y2hTdGFydDogVG91Y2hFdmVudEhhbmRsZXIgPSAoZTogVG91Y2hFdmVudCkgPT4ge1xuICAgIC8vIFRPRE86IGZpeCB0b3VjaCBldmVudFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy50b3VjaGVuZCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy50b3VjaG1vdmUpO1xuICAgIGlmICh0aGlzLnNldEFuY2hvcikge1xuICAgICAgY29uc3QgcG9zID0gdGhpcy5nZXRUb3VjaFBvc2l0aW9uKGUpO1xuICAgICAgdGhpcy5zZXRBbmNob3IodGhpcy5nZXREaXN0YW5jZVRvVHJhY2socG9zKSk7XG4gICAgfVxuICAgIHRoaXMudG9nZ2xlTW91c2VPdmVyKCk7XG4gIH07XG5cbiAgcHJpdmF0ZSB0b3VjaG1vdmUgPSAoZTogVG91Y2hFdmVudCkgPT4ge1xuICAgIC8vIFRPRE86IHRvdWNoIG5vdCB0ZXN0ZWRcbiAgICBjb25zdCBwb3MgPSB0aGlzLmdldFRvdWNoUG9zaXRpb24oZSk7XG4gICAgdGhpcy52YWx1ZUxpc3RlbmVyKHRoaXMuZ2V0RGlzdGFuY2VUb1RyYWNrKHBvcykpO1xuICB9O1xuXG4gIHByaXZhdGUgdG91Y2hlbmQgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnRvdWNoZW5kKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLnRvdWNobW92ZSk7XG4gICAgdGhpcy50b2dnbGVNb3VzZU92ZXIoKTtcbiAgfTtcbn1cbiJdfQ==