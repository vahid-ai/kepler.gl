"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PanelHeaderActionFactory;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _localization = require("@kepler.gl/localization");

var _styledComponents2 = require("../common/styled-components");

var _templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var HeaderActionWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: ", "px;\n  display: flex;\n  align-items: center;\n  color: ", ";\n\n  cursor: pointer;\n\n  :hover {\n    color: ", ";\n  }\n\n  &.disabled {\n    cursor: none;\n    pointer-events: none;\n    opacity: 0.3;\n  }\n"])), function (props) {
  return props.flush ? 0 : 8;
}, function (props) {
  return props.active ? props.theme.panelHeaderIconActive : props.theme.panelHeaderIcon;
}, function (props) {
  return props.hoverColor ? props.theme[props.hoverColor] : props.theme.panelHeaderIconHover;
});

PanelHeaderActionFactory.deps = []; // Need to use react class to access props.component

function PanelHeaderActionFactory() {
  var PanelHeaderActionUnmemoized = function PanelHeaderActionUnmemoized(_ref) {
    var onClick = _ref.onClick,
        tooltip = _ref.tooltip,
        id = _ref.id,
        _ref$active = _ref.active,
        active = _ref$active === void 0 ? false : _ref$active,
        flush = _ref.flush,
        hoverColor = _ref.hoverColor,
        tooltipType = _ref.tooltipType,
        disabled = _ref.disabled,
        className = _ref.className,
        IconComponent = _ref.IconComponent;
    return /*#__PURE__*/_react["default"].createElement(HeaderActionWrapper, {
      className: (0, _classnames["default"])('panel--header__action', _objectSpread({
        disabled: disabled
      }, className ? (0, _defineProperty2["default"])({}, className, true) : {})),
      active: active,
      hoverColor: hoverColor,
      flush: flush
    }, IconComponent ? /*#__PURE__*/_react["default"].createElement(IconComponent, {
      "data-tip": true,
      "data-for": "".concat(tooltip, "_").concat(id),
      height: "16px",
      onClick: onClick
    }) : null, tooltip ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
      id: "".concat(tooltip, "_").concat(id),
      effect: "solid",
      delayShow: 500,
      type: tooltipType
    }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: tooltip
    }))) : null);
  };

  var PanelHeaderAction = /*#__PURE__*/_react["default"].memo(PanelHeaderActionUnmemoized);

  PanelHeaderAction.displayName = 'PanelHeaderAction';
  return PanelHeaderAction;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL3BhbmVsLWhlYWRlci1hY3Rpb24udHN4Il0sIm5hbWVzIjpbIkhlYWRlckFjdGlvbldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImZsdXNoIiwiYWN0aXZlIiwidGhlbWUiLCJwYW5lbEhlYWRlckljb25BY3RpdmUiLCJwYW5lbEhlYWRlckljb24iLCJob3ZlckNvbG9yIiwicGFuZWxIZWFkZXJJY29uSG92ZXIiLCJQYW5lbEhlYWRlckFjdGlvbkZhY3RvcnkiLCJkZXBzIiwiUGFuZWxIZWFkZXJBY3Rpb25Vbm1lbW9pemVkIiwib25DbGljayIsInRvb2x0aXAiLCJpZCIsInRvb2x0aXBUeXBlIiwiZGlzYWJsZWQiLCJjbGFzc05hbWUiLCJJY29uQ29tcG9uZW50IiwiUGFuZWxIZWFkZXJBY3Rpb24iLCJSZWFjdCIsIm1lbW8iLCJkaXNwbGF5TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUF3QkEsSUFBTUEsbUJBQW1CLEdBQUdDLDZCQUFPQyxHQUFWLDhUQUNSLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLEtBQU4sR0FBYyxDQUFkLEdBQWtCLENBQXZCO0FBQUEsQ0FERyxFQUlkLFVBQUFELEtBQUs7QUFBQSxTQUNaQSxLQUFLLENBQUNFLE1BQU4sR0FBZUYsS0FBSyxDQUFDRyxLQUFOLENBQVlDLHFCQUEzQixHQUFtREosS0FBSyxDQUFDRyxLQUFOLENBQVlFLGVBRG5EO0FBQUEsQ0FKUyxFQVVaLFVBQUFMLEtBQUs7QUFBQSxTQUNaQSxLQUFLLENBQUNNLFVBQU4sR0FBbUJOLEtBQUssQ0FBQ0csS0FBTixDQUFZSCxLQUFLLENBQUNNLFVBQWxCLENBQW5CLEdBQW1ETixLQUFLLENBQUNHLEtBQU4sQ0FBWUksb0JBRG5EO0FBQUEsQ0FWTyxDQUF6Qjs7QUFxQkFDLHdCQUF3QixDQUFDQyxJQUF6QixHQUFnQyxFQUFoQyxDLENBQ0E7O0FBQ2UsU0FBU0Qsd0JBQVQsR0FBc0U7QUFDbkYsTUFBTUUsMkJBQTZELEdBQUcsU0FBaEVBLDJCQUFnRSxPQVdoRTtBQUFBLFFBVkpDLE9BVUksUUFWSkEsT0FVSTtBQUFBLFFBVEpDLE9BU0ksUUFUSkEsT0FTSTtBQUFBLFFBUkpDLEVBUUksUUFSSkEsRUFRSTtBQUFBLDJCQVBKWCxNQU9JO0FBQUEsUUFQSkEsTUFPSSw0QkFQSyxLQU9MO0FBQUEsUUFOSkQsS0FNSSxRQU5KQSxLQU1JO0FBQUEsUUFMSkssVUFLSSxRQUxKQSxVQUtJO0FBQUEsUUFKSlEsV0FJSSxRQUpKQSxXQUlJO0FBQUEsUUFISkMsUUFHSSxRQUhKQSxRQUdJO0FBQUEsUUFGSkMsU0FFSSxRQUZKQSxTQUVJO0FBQUEsUUFESkMsYUFDSSxRQURKQSxhQUNJO0FBQ0osd0JBQ0UsZ0NBQUMsbUJBQUQ7QUFDRSxNQUFBLFNBQVMsRUFBRSw0QkFBVyx1QkFBWDtBQUNURixRQUFBQSxRQUFRLEVBQVJBO0FBRFMsU0FFTEMsU0FBUyx3Q0FBS0EsU0FBTCxFQUFpQixJQUFqQixJQUF5QixFQUY3QixFQURiO0FBS0UsTUFBQSxNQUFNLEVBQUVkLE1BTFY7QUFNRSxNQUFBLFVBQVUsRUFBRUksVUFOZDtBQU9FLE1BQUEsS0FBSyxFQUFFTDtBQVBULE9BU0dnQixhQUFhLGdCQUNaLGdDQUFDLGFBQUQ7QUFBZSxzQkFBZjtBQUF3Qiw0QkFBYUwsT0FBYixjQUF3QkMsRUFBeEIsQ0FBeEI7QUFBc0QsTUFBQSxNQUFNLEVBQUMsTUFBN0Q7QUFBb0UsTUFBQSxPQUFPLEVBQUVGO0FBQTdFLE1BRFksR0FFVixJQVhOLEVBWUdDLE9BQU8sZ0JBQ04sZ0NBQUMsMEJBQUQ7QUFBUyxNQUFBLEVBQUUsWUFBS0EsT0FBTCxjQUFnQkMsRUFBaEIsQ0FBWDtBQUFpQyxNQUFBLE1BQU0sRUFBQyxPQUF4QztBQUFnRCxNQUFBLFNBQVMsRUFBRSxHQUEzRDtBQUFnRSxNQUFBLElBQUksRUFBRUM7QUFBdEUsb0JBQ0UsMkRBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUVGO0FBQXRCLE1BREYsQ0FERixDQURNLEdBTUosSUFsQk4sQ0FERjtBQXNCRCxHQWxDRDs7QUFvQ0EsTUFBTU0saUJBQWlCLGdCQUFHQyxrQkFBTUMsSUFBTixDQUFXViwyQkFBWCxDQUExQjs7QUFDQVEsRUFBQUEsaUJBQWlCLENBQUNHLFdBQWxCLEdBQWdDLG1CQUFoQztBQUNBLFNBQU9ILGlCQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgKGMpIDIwMjMgVWJlciBUZWNobm9sb2dpZXMsIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnRUeXBlLCBNb3VzZUV2ZW50SGFuZGxlcn0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtUb29sdGlwUHJvcHN9IGZyb20gJ3JlYWN0LXRvb2x0aXAnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnQGtlcGxlci5nbC9sb2NhbGl6YXRpb24nO1xuaW1wb3J0IHtUb29sdGlwfSBmcm9tICcuLi9jb21tb24vc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtCYXNlUHJvcHN9IGZyb20gJy4uL2NvbW1vbi9pY29ucyc7XG5cbmV4cG9ydCB0eXBlIFBhbmVsSGVhZGVyQWN0aW9uSWNvbiA9IENvbXBvbmVudFR5cGU8UGFydGlhbDxCYXNlUHJvcHM+PjtcblxuZXhwb3J0IGludGVyZmFjZSBQYW5lbEhlYWRlckFjdGlvblByb3BzIHtcbiAgaWQ/OiBzdHJpbmc7XG4gIHRvb2x0aXA/OiBzdHJpbmc7XG4gIGhvdmVyQ29sb3I/OiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgYWN0aXZlPzogYm9vbGVhbjtcbiAgZmx1c2g/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIG9uQ2xpY2s/OiBNb3VzZUV2ZW50SGFuZGxlcjtcbiAgdG9vbHRpcFR5cGU/OiBUb29sdGlwUHJvcHNbJ3R5cGUnXTtcbiAgSWNvbkNvbXBvbmVudDogUGFuZWxIZWFkZXJBY3Rpb25JY29uO1xufVxuXG50eXBlIEhlYWRlckFjdGlvbldyYXBwZXJQcm9wcyA9IHtcbiAgZmx1c2g/OiBib29sZWFuO1xuICBhY3RpdmU/OiBib29sZWFuO1xuICBob3ZlckNvbG9yPzogc3RyaW5nIHwgbnVsbDtcbn07XG5cbmNvbnN0IEhlYWRlckFjdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2PEhlYWRlckFjdGlvbldyYXBwZXJQcm9wcz5gXG4gIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+IChwcm9wcy5mbHVzaCA/IDAgOiA4KX1weDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICR7cHJvcHMgPT5cbiAgICBwcm9wcy5hY3RpdmUgPyBwcm9wcy50aGVtZS5wYW5lbEhlYWRlckljb25BY3RpdmUgOiBwcm9wcy50aGVtZS5wYW5lbEhlYWRlckljb259O1xuXG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICA6aG92ZXIge1xuICAgIGNvbG9yOiAke3Byb3BzID0+XG4gICAgICBwcm9wcy5ob3ZlckNvbG9yID8gcHJvcHMudGhlbWVbcHJvcHMuaG92ZXJDb2xvcl0gOiBwcm9wcy50aGVtZS5wYW5lbEhlYWRlckljb25Ib3Zlcn07XG4gIH1cblxuICAmLmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vbmU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG5gO1xuXG5QYW5lbEhlYWRlckFjdGlvbkZhY3RvcnkuZGVwcyA9IFtdO1xuLy8gTmVlZCB0byB1c2UgcmVhY3QgY2xhc3MgdG8gYWNjZXNzIHByb3BzLmNvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFuZWxIZWFkZXJBY3Rpb25GYWN0b3J5KCk6IFJlYWN0LkZDPFBhbmVsSGVhZGVyQWN0aW9uUHJvcHM+IHtcbiAgY29uc3QgUGFuZWxIZWFkZXJBY3Rpb25Vbm1lbW9pemVkOiBSZWFjdC5GQzxQYW5lbEhlYWRlckFjdGlvblByb3BzPiA9ICh7XG4gICAgb25DbGljayxcbiAgICB0b29sdGlwLFxuICAgIGlkLFxuICAgIGFjdGl2ZSA9IGZhbHNlLFxuICAgIGZsdXNoLFxuICAgIGhvdmVyQ29sb3IsXG4gICAgdG9vbHRpcFR5cGUsXG4gICAgZGlzYWJsZWQsXG4gICAgY2xhc3NOYW1lLFxuICAgIEljb25Db21wb25lbnRcbiAgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZGVyQWN0aW9uV3JhcHBlclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ3BhbmVsLS1oZWFkZXJfX2FjdGlvbicsIHtcbiAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICAuLi4oY2xhc3NOYW1lID8ge1tjbGFzc05hbWVdOiB0cnVlfSA6IHt9KVxuICAgICAgICB9KX1cbiAgICAgICAgYWN0aXZlPXthY3RpdmV9XG4gICAgICAgIGhvdmVyQ29sb3I9e2hvdmVyQ29sb3J9XG4gICAgICAgIGZsdXNoPXtmbHVzaH1cbiAgICAgID5cbiAgICAgICAge0ljb25Db21wb25lbnQgPyAoXG4gICAgICAgICAgPEljb25Db21wb25lbnQgZGF0YS10aXAgZGF0YS1mb3I9e2Ake3Rvb2x0aXB9XyR7aWR9YH0gaGVpZ2h0PVwiMTZweFwiIG9uQ2xpY2s9e29uQ2xpY2t9IC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICB7dG9vbHRpcCA/IChcbiAgICAgICAgICA8VG9vbHRpcCBpZD17YCR7dG9vbHRpcH1fJHtpZH1gfSBlZmZlY3Q9XCJzb2xpZFwiIGRlbGF5U2hvdz17NTAwfSB0eXBlPXt0b29sdGlwVHlwZX0+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e3Rvb2x0aXB9IC8+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvSGVhZGVyQWN0aW9uV3JhcHBlcj5cbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IFBhbmVsSGVhZGVyQWN0aW9uID0gUmVhY3QubWVtbyhQYW5lbEhlYWRlckFjdGlvblVubWVtb2l6ZWQpO1xuICBQYW5lbEhlYWRlckFjdGlvbi5kaXNwbGF5TmFtZSA9ICdQYW5lbEhlYWRlckFjdGlvbic7XG4gIHJldHVybiBQYW5lbEhlYWRlckFjdGlvbjtcbn1cbiJdfQ==