"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayerTypeDropdownListFactory = LayerTypeDropdownListFactory;
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _dropdownList = require("../../common/item-selector/dropdown-list");

var _templateObject, _templateObject2;

var DropdownListWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  background-color: ", ";\n  border-top: 1px solid ", ";\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  padding: ", "px 0 0 ", "px;\n"])), function (props) {
  return props.theme.dropdownList;
}, function (props) {
  return props.theme.dropdownListBgd;
}, function (props) {
  return props.theme.dropdownListBorderTop;
}, function (props) {
  return props.theme.layerTypeIconPdL;
}, function (props) {
  return props.theme.layerTypeIconPdL;
});

var StyledDropdownListItem = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  padding-bottom: ", "px;\n  padding-right: ", "px;\n\n  &.disabled {\n    pointer-events: none;\n    opacity: 0.3;\n  }\n\n  &.selected {\n    .layer-type-selector__item__icon {\n      border: 1px solid #caf2f4;\n    }\n  }\n\n  :hover,\n  &.selected {\n    cursor: pointer;\n    .layer-type-selector__item__icon {\n      color: ", ";\n    }\n\n    .layer-type-selector__item__label {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.layerTypeIconPdL;
}, function (props) {
  return props.theme.layerTypeIconPdL;
}, function (props) {
  return props.theme.activeColor;
}, function (props) {
  return props.theme.textColor;
});

function LayerTypeDropdownListFactory() {
  var LayerTypeDropdownList = function LayerTypeDropdownList(_ref) {
    var onOptionSelected = _ref.onOptionSelected,
        options = _ref.options,
        selectedItems = _ref.selectedItems,
        selectionIndex = _ref.selectionIndex,
        customListItemComponent = _ref.customListItemComponent;
    var onSelectOption = (0, _react.useCallback)(function (e, value) {
      e.preventDefault();
      onOptionSelected(value, e);
    }, [onOptionSelected]);
    var ListItemComponent = customListItemComponent;
    return /*#__PURE__*/_react["default"].createElement(DropdownListWrapper, {
      className: _dropdownList.classList.list
    }, options.map(function (value, i) {
      return /*#__PURE__*/_react["default"].createElement(StyledDropdownListItem, {
        className: (0, _classnames["default"])('layer-type-selector__item', {
          selected: selectedItems.find(function (it) {
            return it.id === value.id;
          }),
          hover: selectionIndex === i,
          disabled: value.disabled
        }),
        key: "".concat(value.id, "_").concat(i),
        onMouseDown: function onMouseDown(e) {
          return onSelectOption(e, value);
        },
        onClick: function onClick(e) {
          return onSelectOption(e, value);
        }
      }, /*#__PURE__*/_react["default"].createElement(ListItemComponent, {
        value: value,
        isTile: true
      }));
    }));
  };

  return LayerTypeDropdownList;
}

var _default = LayerTypeDropdownListFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2xheWVyLXBhbmVsL2xheWVyLXR5cGUtZHJvcGRvd24tbGlzdC50c3giXSwibmFtZXMiOlsiRHJvcGRvd25MaXN0V3JhcHBlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwidGhlbWUiLCJkcm9wZG93bkxpc3QiLCJkcm9wZG93bkxpc3RCZ2QiLCJkcm9wZG93bkxpc3RCb3JkZXJUb3AiLCJsYXllclR5cGVJY29uUGRMIiwiU3R5bGVkRHJvcGRvd25MaXN0SXRlbSIsImFjdGl2ZUNvbG9yIiwidGV4dENvbG9yIiwiTGF5ZXJUeXBlRHJvcGRvd25MaXN0RmFjdG9yeSIsIkxheWVyVHlwZURyb3Bkb3duTGlzdCIsIm9uT3B0aW9uU2VsZWN0ZWQiLCJvcHRpb25zIiwic2VsZWN0ZWRJdGVtcyIsInNlbGVjdGlvbkluZGV4IiwiY3VzdG9tTGlzdEl0ZW1Db21wb25lbnQiLCJvblNlbGVjdE9wdGlvbiIsImUiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiTGlzdEl0ZW1Db21wb25lbnQiLCJjbGFzc0xpc3QiLCJsaXN0IiwibWFwIiwiaSIsInNlbGVjdGVkIiwiZmluZCIsIml0IiwiaWQiLCJob3ZlciIsImRpc2FibGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQXVCQSxJQUFNQSxtQkFBbUIsR0FBR0MsNkJBQU9DLEdBQVYsNlBBQ3JCLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsWUFBaEI7QUFBQSxDQURnQixFQUVILFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsZUFBaEI7QUFBQSxDQUZGLEVBR0MsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxxQkFBaEI7QUFBQSxDQUhOLEVBT1osVUFBQUosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxnQkFBaEI7QUFBQSxDQVBPLEVBT21DLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUksZ0JBQWhCO0FBQUEsQ0FQeEMsQ0FBekI7O0FBVUEsSUFBTUMsc0JBQXNCLEdBQUdSLDZCQUFPQyxHQUFWLDhmQUNSLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUksZ0JBQWhCO0FBQUEsQ0FERyxFQUVULFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUksZ0JBQWhCO0FBQUEsQ0FGSSxFQW1CYixVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlNLFdBQWhCO0FBQUEsQ0FuQlEsRUF1QmIsVUFBQVAsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTyxTQUFoQjtBQUFBLENBdkJRLENBQTVCOztBQTRCTyxTQUFTQyw0QkFBVCxHQUF3QztBQUM3QyxNQUFNQyxxQkFBMkQsR0FBRyxTQUE5REEscUJBQThELE9BTTlEO0FBQUEsUUFMSkMsZ0JBS0ksUUFMSkEsZ0JBS0k7QUFBQSxRQUpKQyxPQUlJLFFBSkpBLE9BSUk7QUFBQSxRQUhKQyxhQUdJLFFBSEpBLGFBR0k7QUFBQSxRQUZKQyxjQUVJLFFBRkpBLGNBRUk7QUFBQSxRQURKQyx1QkFDSSxRQURKQSx1QkFDSTtBQUNKLFFBQU1DLGNBQWMsR0FBRyx3QkFDckIsVUFBQ0MsQ0FBRCxFQUFJQyxLQUFKLEVBQWM7QUFDWkQsTUFBQUEsQ0FBQyxDQUFDRSxjQUFGO0FBQ0FSLE1BQUFBLGdCQUFnQixDQUFDTyxLQUFELEVBQVFELENBQVIsQ0FBaEI7QUFDRCxLQUpvQixFQUtyQixDQUFDTixnQkFBRCxDQUxxQixDQUF2QjtBQVFBLFFBQU1TLGlCQUFpQixHQUFHTCx1QkFBMUI7QUFFQSx3QkFDRSxnQ0FBQyxtQkFBRDtBQUFxQixNQUFBLFNBQVMsRUFBRU0sd0JBQVVDO0FBQTFDLE9BQ0dWLE9BQU8sQ0FBQ1csR0FBUixDQUFZLFVBQUNMLEtBQUQsRUFBUU0sQ0FBUjtBQUFBLDBCQUNYLGdDQUFDLHNCQUFEO0FBQ0UsUUFBQSxTQUFTLEVBQUUsNEJBQVcsMkJBQVgsRUFBd0M7QUFDakRDLFVBQUFBLFFBQVEsRUFBRVosYUFBYSxDQUFDYSxJQUFkLENBQW1CLFVBQUFDLEVBQUU7QUFBQSxtQkFBSUEsRUFBRSxDQUFDQyxFQUFILEtBQVVWLEtBQUssQ0FBQ1UsRUFBcEI7QUFBQSxXQUFyQixDQUR1QztBQUVqREMsVUFBQUEsS0FBSyxFQUFFZixjQUFjLEtBQUtVLENBRnVCO0FBR2pETSxVQUFBQSxRQUFRLEVBQUVaLEtBQUssQ0FBQ1k7QUFIaUMsU0FBeEMsQ0FEYjtBQU1FLFFBQUEsR0FBRyxZQUFLWixLQUFLLENBQUNVLEVBQVgsY0FBaUJKLENBQWpCLENBTkw7QUFPRSxRQUFBLFdBQVcsRUFBRSxxQkFBQ1AsQ0FBRDtBQUFBLGlCQUFtQkQsY0FBYyxDQUFDQyxDQUFELEVBQUlDLEtBQUosQ0FBakM7QUFBQSxTQVBmO0FBUUUsUUFBQSxPQUFPLEVBQUUsaUJBQUNELENBQUQ7QUFBQSxpQkFBbUJELGNBQWMsQ0FBQ0MsQ0FBRCxFQUFJQyxLQUFKLENBQWpDO0FBQUE7QUFSWCxzQkFVRSxnQ0FBQyxpQkFBRDtBQUFtQixRQUFBLEtBQUssRUFBRUEsS0FBMUI7QUFBaUMsUUFBQSxNQUFNO0FBQXZDLFFBVkYsQ0FEVztBQUFBLEtBQVosQ0FESCxDQURGO0FBa0JELEdBbkNEOztBQXFDQSxTQUFPUixxQkFBUDtBQUNEOztlQUVjRCw0QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCBNb3VzZUV2ZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHtjbGFzc0xpc3R9IGZyb20gJy4uLy4uL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2Ryb3Bkb3duLWxpc3QnO1xuXG5leHBvcnQgdHlwZSBMYXllclR5cGVPcHRpb24gPSB7XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgaWQ6IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgaWNvbjogUmVhY3QuRWxlbWVudFR5cGU7XG59O1xuXG50eXBlIExheWVyVHlwZURyb3Bkb3duTGlzdFByb3BzID0ge1xuICBvbk9wdGlvblNlbGVjdGVkOiAoXG4gICAgdmFsdWU6IHtcbiAgICAgIGljb246IFJlYWN0LkVsZW1lbnRUeXBlO1xuICAgICAgbGFiZWw6IHN0cmluZztcbiAgICB9LFxuICAgIGU6IE1vdXNlRXZlbnRcbiAgKSA9PiB2b2lkO1xuICBvcHRpb25zOiBMYXllclR5cGVPcHRpb25bXTtcbiAgc2VsZWN0ZWRJdGVtczogTGF5ZXJUeXBlT3B0aW9uW107XG4gIHNlbGVjdGlvbkluZGV4OiBudW1iZXIgfCBudWxsO1xuICBjdXN0b21MaXN0SXRlbUNvbXBvbmVudDogUmVhY3QuRkM8e3ZhbHVlOiBMYXllclR5cGVPcHRpb247IGlzVGlsZT86IGJvb2xlYW59Pjtcbn07XG5cbmNvbnN0IERyb3Bkb3duTGlzdFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duTGlzdH07XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0QmdkfTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0Qm9yZGVyVG9wfTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYXllclR5cGVJY29uUGRMfXB4IDAgMCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxheWVyVHlwZUljb25QZEx9cHg7XG5gO1xuXG5jb25zdCBTdHlsZWREcm9wZG93bkxpc3RJdGVtID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubGF5ZXJUeXBlSWNvblBkTH1weDtcbiAgcGFkZGluZy1yaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5sYXllclR5cGVJY29uUGRMfXB4O1xuXG4gICYuZGlzYWJsZWQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgfVxuXG4gICYuc2VsZWN0ZWQge1xuICAgIC5sYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19pY29uIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYWYyZjQ7XG4gICAgfVxuICB9XG5cbiAgOmhvdmVyLFxuICAmLnNlbGVjdGVkIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLmxheWVyLXR5cGUtc2VsZWN0b3JfX2l0ZW1fX2ljb24ge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYWN0aXZlQ29sb3J9O1xuICAgIH1cblxuICAgIC5sYXllci10eXBlLXNlbGVjdG9yX19pdGVtX19sYWJlbCB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGZ1bmN0aW9uIExheWVyVHlwZURyb3Bkb3duTGlzdEZhY3RvcnkoKSB7XG4gIGNvbnN0IExheWVyVHlwZURyb3Bkb3duTGlzdDogUmVhY3QuRkM8TGF5ZXJUeXBlRHJvcGRvd25MaXN0UHJvcHM+ID0gKHtcbiAgICBvbk9wdGlvblNlbGVjdGVkLFxuICAgIG9wdGlvbnMsXG4gICAgc2VsZWN0ZWRJdGVtcyxcbiAgICBzZWxlY3Rpb25JbmRleCxcbiAgICBjdXN0b21MaXN0SXRlbUNvbXBvbmVudFxuICB9KSA9PiB7XG4gICAgY29uc3Qgb25TZWxlY3RPcHRpb24gPSB1c2VDYWxsYmFjayhcbiAgICAgIChlLCB2YWx1ZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG9uT3B0aW9uU2VsZWN0ZWQodmFsdWUsIGUpO1xuICAgICAgfSxcbiAgICAgIFtvbk9wdGlvblNlbGVjdGVkXVxuICAgICk7XG5cbiAgICBjb25zdCBMaXN0SXRlbUNvbXBvbmVudCA9IGN1c3RvbUxpc3RJdGVtQ29tcG9uZW50O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEcm9wZG93bkxpc3RXcmFwcGVyIGNsYXNzTmFtZT17Y2xhc3NMaXN0Lmxpc3R9PlxuICAgICAgICB7b3B0aW9ucy5tYXAoKHZhbHVlLCBpKSA9PiAoXG4gICAgICAgICAgPFN0eWxlZERyb3Bkb3duTGlzdEl0ZW1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnbGF5ZXItdHlwZS1zZWxlY3Rvcl9faXRlbScsIHtcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkSXRlbXMuZmluZChpdCA9PiBpdC5pZCA9PT0gdmFsdWUuaWQpLFxuICAgICAgICAgICAgICBob3Zlcjogc2VsZWN0aW9uSW5kZXggPT09IGksXG4gICAgICAgICAgICAgIGRpc2FibGVkOiB2YWx1ZS5kaXNhYmxlZFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBrZXk9e2Ake3ZhbHVlLmlkfV8ke2l9YH1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXsoZTogTW91c2VFdmVudCkgPT4gb25TZWxlY3RPcHRpb24oZSwgdmFsdWUpfVxuICAgICAgICAgICAgb25DbGljaz17KGU6IE1vdXNlRXZlbnQpID0+IG9uU2VsZWN0T3B0aW9uKGUsIHZhbHVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGlzdEl0ZW1Db21wb25lbnQgdmFsdWU9e3ZhbHVlfSBpc1RpbGUgLz5cbiAgICAgICAgICA8L1N0eWxlZERyb3Bkb3duTGlzdEl0ZW0+XG4gICAgICAgICkpfVxuICAgICAgPC9Ecm9wZG93bkxpc3RXcmFwcGVyPlxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIExheWVyVHlwZURyb3Bkb3duTGlzdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXJUeXBlRHJvcGRvd25MaXN0RmFjdG9yeTtcbiJdfQ==