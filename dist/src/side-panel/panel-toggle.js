"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _panelTab = _interopRequireDefault(require("./panel-tab"));

var _templateObject;

var PanelHeaderBottom = _styledComponents["default"].div.attrs({
  className: 'side-side-panel__header__bottom'
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  border-bottom: 1px solid ", ";\n  padding: 0 16px;\n  display: flex;\n  min-height: 30px;\n"])), function (props) {
  return props.theme.sidePanelHeaderBg;
}, function (props) {
  return props.theme.sidePanelHeaderBorder;
});

PanelToggleFactory.deps = [_panelTab["default"]];

function PanelToggleFactory(PanelTab) {
  var PanelToggle = function PanelToggle(_ref) {
    var activePanel = _ref.activePanel,
        panels = _ref.panels,
        togglePanel = _ref.togglePanel;

    var _onClick = (0, _react.useCallback)(function (panel) {
      var callback = panel.onClick || togglePanel;
      callback(panel.id);
    }, [togglePanel]);

    return /*#__PURE__*/_react["default"].createElement(PanelHeaderBottom, null, panels.map(function (panel) {
      return /*#__PURE__*/_react["default"].createElement(PanelTab, {
        key: panel.id,
        panel: panel,
        isActive: activePanel === panel.id,
        onClick: function onClick() {
          return _onClick(panel);
        }
      });
    }));
  };

  return PanelToggle;
}

var _default = PanelToggleFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL3BhbmVsLXRvZ2dsZS50c3giXSwibmFtZXMiOlsiUGFuZWxIZWFkZXJCb3R0b20iLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsInByb3BzIiwidGhlbWUiLCJzaWRlUGFuZWxIZWFkZXJCZyIsInNpZGVQYW5lbEhlYWRlckJvcmRlciIsIlBhbmVsVG9nZ2xlRmFjdG9yeSIsImRlcHMiLCJQYW5lbFRhYkZhY3RvcnkiLCJQYW5lbFRhYiIsIlBhbmVsVG9nZ2xlIiwiYWN0aXZlUGFuZWwiLCJwYW5lbHMiLCJ0b2dnbGVQYW5lbCIsIm9uQ2xpY2siLCJwYW5lbCIsImNhbGxiYWNrIiwiaWQiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7Ozs7QUFTQSxJQUFNQSxpQkFBaUIsR0FBR0MsNkJBQU9DLEdBQVAsQ0FBV0MsS0FBWCxDQUFpQjtBQUN6Q0MsRUFBQUEsU0FBUyxFQUFFO0FBRDhCLENBQWpCLENBQUgsaU5BR0QsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxpQkFBaEI7QUFBQSxDQUhKLEVBSU0sVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxxQkFBaEI7QUFBQSxDQUpYLENBQXZCOztBQVVBQyxrQkFBa0IsQ0FBQ0MsSUFBbkIsR0FBMEIsQ0FBQ0Msb0JBQUQsQ0FBMUI7O0FBRUEsU0FBU0Ysa0JBQVQsQ0FBNEJHLFFBQTVCLEVBQTBFO0FBQ3hFLE1BQU1DLFdBQXVDLEdBQUcsU0FBMUNBLFdBQTBDLE9BQXdDO0FBQUEsUUFBdENDLFdBQXNDLFFBQXRDQSxXQUFzQztBQUFBLFFBQXpCQyxNQUF5QixRQUF6QkEsTUFBeUI7QUFBQSxRQUFqQkMsV0FBaUIsUUFBakJBLFdBQWlCOztBQUN0RixRQUFNQyxRQUFPLEdBQUcsd0JBQ2QsVUFBQUMsS0FBSyxFQUFJO0FBQ1AsVUFBTUMsUUFBUSxHQUFHRCxLQUFLLENBQUNELE9BQU4sSUFBaUJELFdBQWxDO0FBQ0FHLE1BQUFBLFFBQVEsQ0FBQ0QsS0FBSyxDQUFDRSxFQUFQLENBQVI7QUFDRCxLQUphLEVBS2QsQ0FBQ0osV0FBRCxDQUxjLENBQWhCOztBQVFBLHdCQUNFLGdDQUFDLGlCQUFELFFBQ0dELE1BQU0sQ0FBQ00sR0FBUCxDQUFXLFVBQUFILEtBQUs7QUFBQSwwQkFDZixnQ0FBQyxRQUFEO0FBQ0UsUUFBQSxHQUFHLEVBQUVBLEtBQUssQ0FBQ0UsRUFEYjtBQUVFLFFBQUEsS0FBSyxFQUFFRixLQUZUO0FBR0UsUUFBQSxRQUFRLEVBQUVKLFdBQVcsS0FBS0ksS0FBSyxDQUFDRSxFQUhsQztBQUlFLFFBQUEsT0FBTyxFQUFFO0FBQUEsaUJBQU1ILFFBQU8sQ0FBQ0MsS0FBRCxDQUFiO0FBQUE7QUFKWCxRQURlO0FBQUEsS0FBaEIsQ0FESCxDQURGO0FBWUQsR0FyQkQ7O0FBdUJBLFNBQU9MLFdBQVA7QUFDRDs7ZUFFY0osa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHt1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUGFuZWxUYWJGYWN0b3J5LCB7UGFuZWxJdGVtfSBmcm9tICcuL3BhbmVsLXRhYic7XG5pbXBvcnQge3RvZ2dsZVNpZGVQYW5lbCwgQWN0aW9uSGFuZGxlcn0gZnJvbSAnQGtlcGxlci5nbC9hY3Rpb25zJztcblxudHlwZSBQYW5lbFRvZ2dsZVByb3BzID0ge1xuICBwYW5lbHM6IFBhbmVsSXRlbVtdO1xuICBhY3RpdmVQYW5lbDogc3RyaW5nO1xuICB0b2dnbGVQYW5lbDogQWN0aW9uSGFuZGxlcjx0eXBlb2YgdG9nZ2xlU2lkZVBhbmVsPjtcbn07XG5cbmNvbnN0IFBhbmVsSGVhZGVyQm90dG9tID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ3NpZGUtc2lkZS1wYW5lbF9faGVhZGVyX19ib3R0b20nXG59KWBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlUGFuZWxIZWFkZXJCZ307XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGVQYW5lbEhlYWRlckJvcmRlcn07XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogMzBweDtcbmA7XG5cblBhbmVsVG9nZ2xlRmFjdG9yeS5kZXBzID0gW1BhbmVsVGFiRmFjdG9yeV07XG5cbmZ1bmN0aW9uIFBhbmVsVG9nZ2xlRmFjdG9yeShQYW5lbFRhYjogUmV0dXJuVHlwZTx0eXBlb2YgUGFuZWxUYWJGYWN0b3J5Pikge1xuICBjb25zdCBQYW5lbFRvZ2dsZTogUmVhY3QuRkM8UGFuZWxUb2dnbGVQcm9wcz4gPSAoe2FjdGl2ZVBhbmVsLCBwYW5lbHMsIHRvZ2dsZVBhbmVsfSkgPT4ge1xuICAgIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICAgIHBhbmVsID0+IHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBwYW5lbC5vbkNsaWNrIHx8IHRvZ2dsZVBhbmVsO1xuICAgICAgICBjYWxsYmFjayhwYW5lbC5pZCk7XG4gICAgICB9LFxuICAgICAgW3RvZ2dsZVBhbmVsXVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBhbmVsSGVhZGVyQm90dG9tPlxuICAgICAgICB7cGFuZWxzLm1hcChwYW5lbCA9PiAoXG4gICAgICAgICAgPFBhbmVsVGFiXG4gICAgICAgICAgICBrZXk9e3BhbmVsLmlkfVxuICAgICAgICAgICAgcGFuZWw9e3BhbmVsfVxuICAgICAgICAgICAgaXNBY3RpdmU9e2FjdGl2ZVBhbmVsID09PSBwYW5lbC5pZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2socGFuZWwpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9QYW5lbEhlYWRlckJvdHRvbT5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBQYW5lbFRvZ2dsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFuZWxUb2dnbGVGYWN0b3J5O1xuIl19