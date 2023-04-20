"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _base = _interopRequireDefault(require("./base"));

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
var OrderByDataset = function OrderByDataset(props) {
  return /*#__PURE__*/_react["default"].createElement(_base["default"], props, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14.7225 13.7778C14.7225 14.1294 14.6183 14.4731 14.4229 14.7655C14.2276 15.0578 13.9499 15.2857 13.6251 15.4202C13.3003 15.5548 12.9428 15.59 12.5979 15.5214C12.2531 15.4528 11.9363 15.2835 11.6877 15.0349C11.4391 14.7862 11.2697 14.4695 11.2012 14.1246C11.1326 13.7798 11.1678 13.4223 11.3023 13.0975C11.4369 12.7726 11.6647 12.495 11.9571 12.2996C12.2494 12.1043 12.5932 12 12.9448 12C13.4163 12 13.8685 12.1873 14.2018 12.5207C14.5352 12.8541 14.7225 13.3063 14.7225 13.7778ZM23.5003 13.7778C23.5003 13.542 23.4067 13.3159 23.24 13.1492C23.0733 12.9825 22.8472 12.8889 22.6114 12.8889H18.2781C18.0424 12.8889 17.8163 12.9825 17.6496 13.1492C17.4829 13.3159 17.3892 13.542 17.3892 13.7778C17.3892 14.0135 17.4829 14.2396 17.6496 14.4063C17.8163 14.573 18.0424 14.6667 18.2781 14.6667H22.6114C22.8472 14.6667 23.0733 14.573 23.24 14.4063C23.4067 14.2396 23.5003 14.0135 23.5003 13.7778ZM12.9448 18.2222C12.5932 18.2222 12.2494 18.3265 11.9571 18.5218C11.6647 18.7172 11.4369 18.9948 11.3023 19.3197C11.1678 19.6445 11.1326 20.002 11.2012 20.3468C11.2697 20.6917 11.4391 21.0085 11.6877 21.2571C11.9363 21.5057 12.2531 21.675 12.5979 21.7436C12.9428 21.8122 13.3003 21.777 13.6251 21.6425C13.9499 21.5079 14.2276 21.28 14.4229 20.9877C14.6183 20.6953 14.7225 20.3516 14.7225 20C14.7225 19.5285 14.5352 19.0763 14.2018 18.7429C13.8685 18.4095 13.4163 18.2222 12.9448 18.2222ZM23.5003 20C23.5003 19.7643 23.4067 19.5382 23.24 19.3715C23.0733 19.2048 22.8472 19.1111 22.6114 19.1111H18.2781C18.0424 19.1111 17.8163 19.2048 17.6496 19.3715C17.4829 19.5382 17.3892 19.7643 17.3892 20C17.3892 20.2357 17.4829 20.4618 17.6496 20.6285C17.8163 20.7952 18.0424 20.8889 18.2781 20.8889H22.6114C22.8472 20.8889 23.0733 20.7952 23.24 20.6285C23.4067 20.4618 23.5003 20.2357 23.5003 20Z",
    fill: props.fill
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.77778 6C6.42617 6 6.08245 6.10426 5.7901 6.29961C5.49774 6.49495 5.26988 6.7726 5.13533 7.09745C5.00077 7.4223 4.96556 7.77975 5.03416 8.1246C5.10276 8.46946 5.27207 8.78623 5.5207 9.03486C5.76933 9.28348 6.0861 9.4528 6.43095 9.5214C6.77581 9.58999 7.13326 9.55479 7.4581 9.42023C7.78295 9.28567 8.0606 9.05781 8.25595 8.76546C8.45129 8.4731 8.55556 8.12939 8.55556 7.77778C8.55556 7.30628 8.36826 6.8541 8.03486 6.5207C7.70146 6.1873 7.24927 6 6.77778 6ZM23.3333 7.77778C23.3333 7.54203 23.2397 7.31594 23.073 7.14924C22.9063 6.98254 22.6802 6.88889 22.4444 6.88889H12.1111C11.8754 6.88889 11.6493 6.98254 11.4826 7.14924C11.3159 7.31594 11.2222 7.54203 11.2222 7.77778C11.2222 8.01353 11.3159 8.23962 11.4826 8.40632C11.6493 8.57302 11.8754 8.66667 12.1111 8.66667H22.4444C22.6802 8.66667 22.9063 8.57302 23.073 8.40632C23.2397 8.23962 23.3333 8.01353 23.3333 7.77778Z",
    fill: props.fill
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.2998 9H6.2998V19.5V20V20.5H11.2998V19.5H7.2998V14.4H11.4004V13.4H7.2998V9Z",
    fill: props.fill
  }));
};

OrderByDataset.defaultProps = {
  height: '20px',
  fill: 'currentColor',
  viewBox: '0 0 24 24',
  predefinedClassName: 'data-ex-icons-order-by-dataset'
};
var _default = OrderByDataset;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9jb21tb24vaWNvbnMvb3JkZXItYnktZGF0YXNldC50c3giXSwibmFtZXMiOlsiT3JkZXJCeURhdGFzZXQiLCJwcm9wcyIsImZpbGwiLCJkZWZhdWx0UHJvcHMiLCJoZWlnaHQiLCJ2aWV3Qm94IiwicHJlZGVmaW5lZENsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQXJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRDtBQUFBLHNCQUNyQixnQ0FBQyxnQkFBRCxFQUFVQSxLQUFWLGVBQ0U7QUFDRSxJQUFBLENBQUMsRUFBQywrdURBREo7QUFFRSxJQUFBLElBQUksRUFBRUEsS0FBSyxDQUFDQztBQUZkLElBREYsZUFLRTtBQUNFLElBQUEsQ0FBQyxFQUFDLDQyQkFESjtBQUVFLElBQUEsSUFBSSxFQUFFRCxLQUFLLENBQUNDO0FBRmQsSUFMRixlQVNFO0FBQ0UsSUFBQSxRQUFRLEVBQUMsU0FEWDtBQUVFLElBQUEsUUFBUSxFQUFDLFNBRlg7QUFHRSxJQUFBLENBQUMsRUFBQywrRUFISjtBQUlFLElBQUEsSUFBSSxFQUFFRCxLQUFLLENBQUNDO0FBSmQsSUFURixDQURxQjtBQUFBLENBQXZCOztBQWtCQUYsY0FBYyxDQUFDRyxZQUFmLEdBQThCO0FBQzVCQyxFQUFBQSxNQUFNLEVBQUUsTUFEb0I7QUFFNUJGLEVBQUFBLElBQUksRUFBRSxjQUZzQjtBQUc1QkcsRUFBQUEsT0FBTyxFQUFFLFdBSG1CO0FBSTVCQyxFQUFBQSxtQkFBbUIsRUFBRTtBQUpPLENBQTlCO2VBT2VOLGMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2UsIHtCYXNlUHJvcHN9IGZyb20gJy4vYmFzZSc7XG5cbmNvbnN0IE9yZGVyQnlEYXRhc2V0ID0gKHByb3BzOiBQYXJ0aWFsPEJhc2VQcm9wcz4pID0+IChcbiAgPEJhc2Ugey4uLnByb3BzfT5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0xNC43MjI1IDEzLjc3NzhDMTQuNzIyNSAxNC4xMjk0IDE0LjYxODMgMTQuNDczMSAxNC40MjI5IDE0Ljc2NTVDMTQuMjI3NiAxNS4wNTc4IDEzLjk0OTkgMTUuMjg1NyAxMy42MjUxIDE1LjQyMDJDMTMuMzAwMyAxNS41NTQ4IDEyLjk0MjggMTUuNTkgMTIuNTk3OSAxNS41MjE0QzEyLjI1MzEgMTUuNDUyOCAxMS45MzYzIDE1LjI4MzUgMTEuNjg3NyAxNS4wMzQ5QzExLjQzOTEgMTQuNzg2MiAxMS4yNjk3IDE0LjQ2OTUgMTEuMjAxMiAxNC4xMjQ2QzExLjEzMjYgMTMuNzc5OCAxMS4xNjc4IDEzLjQyMjMgMTEuMzAyMyAxMy4wOTc1QzExLjQzNjkgMTIuNzcyNiAxMS42NjQ3IDEyLjQ5NSAxMS45NTcxIDEyLjI5OTZDMTIuMjQ5NCAxMi4xMDQzIDEyLjU5MzIgMTIgMTIuOTQ0OCAxMkMxMy40MTYzIDEyIDEzLjg2ODUgMTIuMTg3MyAxNC4yMDE4IDEyLjUyMDdDMTQuNTM1MiAxMi44NTQxIDE0LjcyMjUgMTMuMzA2MyAxNC43MjI1IDEzLjc3NzhaTTIzLjUwMDMgMTMuNzc3OEMyMy41MDAzIDEzLjU0MiAyMy40MDY3IDEzLjMxNTkgMjMuMjQgMTMuMTQ5MkMyMy4wNzMzIDEyLjk4MjUgMjIuODQ3MiAxMi44ODg5IDIyLjYxMTQgMTIuODg4OUgxOC4yNzgxQzE4LjA0MjQgMTIuODg4OSAxNy44MTYzIDEyLjk4MjUgMTcuNjQ5NiAxMy4xNDkyQzE3LjQ4MjkgMTMuMzE1OSAxNy4zODkyIDEzLjU0MiAxNy4zODkyIDEzLjc3NzhDMTcuMzg5MiAxNC4wMTM1IDE3LjQ4MjkgMTQuMjM5NiAxNy42NDk2IDE0LjQwNjNDMTcuODE2MyAxNC41NzMgMTguMDQyNCAxNC42NjY3IDE4LjI3ODEgMTQuNjY2N0gyMi42MTE0QzIyLjg0NzIgMTQuNjY2NyAyMy4wNzMzIDE0LjU3MyAyMy4yNCAxNC40MDYzQzIzLjQwNjcgMTQuMjM5NiAyMy41MDAzIDE0LjAxMzUgMjMuNTAwMyAxMy43Nzc4Wk0xMi45NDQ4IDE4LjIyMjJDMTIuNTkzMiAxOC4yMjIyIDEyLjI0OTQgMTguMzI2NSAxMS45NTcxIDE4LjUyMThDMTEuNjY0NyAxOC43MTcyIDExLjQzNjkgMTguOTk0OCAxMS4zMDIzIDE5LjMxOTdDMTEuMTY3OCAxOS42NDQ1IDExLjEzMjYgMjAuMDAyIDExLjIwMTIgMjAuMzQ2OEMxMS4yNjk3IDIwLjY5MTcgMTEuNDM5MSAyMS4wMDg1IDExLjY4NzcgMjEuMjU3MUMxMS45MzYzIDIxLjUwNTcgMTIuMjUzMSAyMS42NzUgMTIuNTk3OSAyMS43NDM2QzEyLjk0MjggMjEuODEyMiAxMy4zMDAzIDIxLjc3NyAxMy42MjUxIDIxLjY0MjVDMTMuOTQ5OSAyMS41MDc5IDE0LjIyNzYgMjEuMjggMTQuNDIyOSAyMC45ODc3QzE0LjYxODMgMjAuNjk1MyAxNC43MjI1IDIwLjM1MTYgMTQuNzIyNSAyMEMxNC43MjI1IDE5LjUyODUgMTQuNTM1MiAxOS4wNzYzIDE0LjIwMTggMTguNzQyOUMxMy44Njg1IDE4LjQwOTUgMTMuNDE2MyAxOC4yMjIyIDEyLjk0NDggMTguMjIyMlpNMjMuNTAwMyAyMEMyMy41MDAzIDE5Ljc2NDMgMjMuNDA2NyAxOS41MzgyIDIzLjI0IDE5LjM3MTVDMjMuMDczMyAxOS4yMDQ4IDIyLjg0NzIgMTkuMTExMSAyMi42MTE0IDE5LjExMTFIMTguMjc4MUMxOC4wNDI0IDE5LjExMTEgMTcuODE2MyAxOS4yMDQ4IDE3LjY0OTYgMTkuMzcxNUMxNy40ODI5IDE5LjUzODIgMTcuMzg5MiAxOS43NjQzIDE3LjM4OTIgMjBDMTcuMzg5MiAyMC4yMzU3IDE3LjQ4MjkgMjAuNDYxOCAxNy42NDk2IDIwLjYyODVDMTcuODE2MyAyMC43OTUyIDE4LjA0MjQgMjAuODg4OSAxOC4yNzgxIDIwLjg4ODlIMjIuNjExNEMyMi44NDcyIDIwLjg4ODkgMjMuMDczMyAyMC43OTUyIDIzLjI0IDIwLjYyODVDMjMuNDA2NyAyMC40NjE4IDIzLjUwMDMgMjAuMjM1NyAyMy41MDAzIDIwWlwiXG4gICAgICBmaWxsPXtwcm9wcy5maWxsfVxuICAgIC8+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNNi43Nzc3OCA2QzYuNDI2MTcgNiA2LjA4MjQ1IDYuMTA0MjYgNS43OTAxIDYuMjk5NjFDNS40OTc3NCA2LjQ5NDk1IDUuMjY5ODggNi43NzI2IDUuMTM1MzMgNy4wOTc0NUM1LjAwMDc3IDcuNDIyMyA0Ljk2NTU2IDcuNzc5NzUgNS4wMzQxNiA4LjEyNDZDNS4xMDI3NiA4LjQ2OTQ2IDUuMjcyMDcgOC43ODYyMyA1LjUyMDcgOS4wMzQ4NkM1Ljc2OTMzIDkuMjgzNDggNi4wODYxIDkuNDUyOCA2LjQzMDk1IDkuNTIxNEM2Ljc3NTgxIDkuNTg5OTkgNy4xMzMyNiA5LjU1NDc5IDcuNDU4MSA5LjQyMDIzQzcuNzgyOTUgOS4yODU2NyA4LjA2MDYgOS4wNTc4MSA4LjI1NTk1IDguNzY1NDZDOC40NTEyOSA4LjQ3MzEgOC41NTU1NiA4LjEyOTM5IDguNTU1NTYgNy43Nzc3OEM4LjU1NTU2IDcuMzA2MjggOC4zNjgyNiA2Ljg1NDEgOC4wMzQ4NiA2LjUyMDdDNy43MDE0NiA2LjE4NzMgNy4yNDkyNyA2IDYuNzc3NzggNlpNMjMuMzMzMyA3Ljc3Nzc4QzIzLjMzMzMgNy41NDIwMyAyMy4yMzk3IDcuMzE1OTQgMjMuMDczIDcuMTQ5MjRDMjIuOTA2MyA2Ljk4MjU0IDIyLjY4MDIgNi44ODg4OSAyMi40NDQ0IDYuODg4ODlIMTIuMTExMUMxMS44NzU0IDYuODg4ODkgMTEuNjQ5MyA2Ljk4MjU0IDExLjQ4MjYgNy4xNDkyNEMxMS4zMTU5IDcuMzE1OTQgMTEuMjIyMiA3LjU0MjAzIDExLjIyMjIgNy43Nzc3OEMxMS4yMjIyIDguMDEzNTMgMTEuMzE1OSA4LjIzOTYyIDExLjQ4MjYgOC40MDYzMkMxMS42NDkzIDguNTczMDIgMTEuODc1NCA4LjY2NjY3IDEyLjExMTEgOC42NjY2N0gyMi40NDQ0QzIyLjY4MDIgOC42NjY2NyAyMi45MDYzIDguNTczMDIgMjMuMDczIDguNDA2MzJDMjMuMjM5NyA4LjIzOTYyIDIzLjMzMzMgOC4wMTM1MyAyMy4zMzMzIDcuNzc3NzhaXCJcbiAgICAgIGZpbGw9e3Byb3BzLmZpbGx9XG4gICAgLz5cbiAgICA8cGF0aFxuICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICBkPVwiTTcuMjk5OCA5SDYuMjk5OFYxOS41VjIwVjIwLjVIMTEuMjk5OFYxOS41SDcuMjk5OFYxNC40SDExLjQwMDRWMTMuNEg3LjI5OThWOVpcIlxuICAgICAgZmlsbD17cHJvcHMuZmlsbH1cbiAgICAvPlxuICA8L0Jhc2U+XG4pO1xuT3JkZXJCeURhdGFzZXQuZGVmYXVsdFByb3BzID0ge1xuICBoZWlnaHQ6ICcyMHB4JyxcbiAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gIHZpZXdCb3g6ICcwIDAgMjQgMjQnLFxuICBwcmVkZWZpbmVkQ2xhc3NOYW1lOiAnZGF0YS1leC1pY29ucy1vcmRlci1ieS1kYXRhc2V0J1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJCeURhdGFzZXQ7XG4iXX0=