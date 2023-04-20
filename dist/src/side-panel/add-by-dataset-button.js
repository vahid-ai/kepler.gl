"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _localization = require("@kepler.gl/localization");

var _react2 = _interopRequireDefault(require("@tippyjs/react"));

var _icons = require("../common/icons");

var _styledComponents2 = require("../common/styled-components");

var _ = require("../..");

var _typeahead = _interopRequireDefault(require("../common/item-selector/typeahead"));

var _accessor = _interopRequireDefault(require("../common/item-selector/accessor"));

var _reactIntl = require("react-intl");

var _templateObject, _templateObject2, _templateObject3;

var DropdownContainer = _styledComponents["default"].div.attrs({
  className: 'add-layer-menu-dropdown'
})(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  .list-selector {\n    border-top: 1px solid ", ";\n    width: 100%;\n    /* disable scrolling, currently set to 280px internally */\n    max-height: unset;\n  }\n  .list__item > div {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    line-height: 18px;\n    padding: 0;\n    svg {\n      margin-right: 10px;\n    }\n  }\n"])), function (props) {
  return props.theme.secondaryInputBorderColor;
});

var DropdownMenu = _styledComponents["default"].div.attrs({
  className: 'dropdown-menu'
})(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  min-width: 240px;\n  max-width: 240px;\n  position: absolute;\n  top: 100%;\n  left: -53px;\n  z-index: 5;\n"])));

var ListItemWrapper = _styledComponents["default"].div.attrs({
  className: 'dropdown-menu-list-item-wrapper'
})(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  color: ", ";\n  font-size: 11px;\n  letter-spacing: 0.2px;\n  overflow: auto;\n  .dataset-color {\n    flex-shrink: 0;\n    margin-top: 3px;\n  }\n  .dataset-name {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"])), function (props) {
  return props.theme.textColor;
});

var TYPEAHEAD_CLASS = 'typeahead';
var TYPEAHEAD_INPUT_CLASS = 'typeahead__input';

var ListItem = function ListItem(_ref) {
  var value = _ref.value;
  return /*#__PURE__*/_react["default"].createElement(ListItemWrapper, null, /*#__PURE__*/_react["default"].createElement(_.DatasetSquare, {
    className: "dataset-color",
    backgroundColor: value.color
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dataset-name",
    title: value.label
  }, value.label));
};

var AddByDatasetButton = function AddByDatasetButton(_ref2) {
  var datasets = _ref2.datasets,
      onAdd = _ref2.onAdd,
      buttonIntlId = _ref2.buttonIntlId,
      width = _ref2.width,
      className = _ref2.className,
      inactive = _ref2.inactive;

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      tippyInstance = _useState2[0],
      setTippyInstance = _useState2[1];

  var options = (0, _react.useMemo)(function () {
    return Object.values(datasets).map(function (ds) {
      return {
        label: ds.label,
        value: ds.id,
        color: ds.color
      };
    });
  }, [datasets]);
  var onClickBtn = (0, _react.useCallback)(function () {
    if (options.length === 1) {
      onAdd(options[0].value);
    }

    return;
  }, [options, onAdd]);
  var onOptionSelected = (0, _react.useCallback)(function (option) {
    onAdd(option.value);

    if (tippyInstance) {
      // @ts-ignore
      tippyInstance.hide();
    }
  }, [onAdd, tippyInstance]);
  var intl = (0, _reactIntl.useIntl)();

  var buttonRendered = /*#__PURE__*/_react["default"].createElement(_styledComponents2.Button, {
    tabIndex: -1,
    className: className || 'add-by-dataset-button',
    width: width,
    onClick: onClickBtn,
    disabled: !options.length || inactive
  }, /*#__PURE__*/_react["default"].createElement(_icons.Add, {
    height: "12px"
  }), /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: buttonIntlId
  }));

  return options.length === 1 ? buttonRendered : /*#__PURE__*/_react["default"].createElement(_react2["default"], {
    trigger: "click",
    arrow: false,
    interactive: true,
    placement: "bottom",
    appendTo: "parent" // @ts-ignore
    ,
    onCreate: setTippyInstance,
    duration: 0,
    content: /*#__PURE__*/_react["default"].createElement(DropdownMenu, null, /*#__PURE__*/_react["default"].createElement(DropdownContainer, null, /*#__PURE__*/_react["default"].createElement(_typeahead["default"], {
      className: TYPEAHEAD_CLASS,
      customClasses: {
        results: 'list-selector',
        input: TYPEAHEAD_INPUT_CLASS,
        listItem: 'list__item'
      },
      placeholder: intl ? intl.formatMessage({
        id: 'placeholder.search'
      }) : 'Search',
      selectedItems: null,
      options: options,
      displayOption: _accessor["default"].generateOptionToStringFor('label'),
      filterOption: 'label',
      searchable: true,
      onOptionSelected: onOptionSelected,
      customListItemComponent: ListItem
    })))
  }, buttonRendered);
};

var _default = AddByDatasetButton;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2FkZC1ieS1kYXRhc2V0LWJ1dHRvbi50c3giXSwibmFtZXMiOlsiRHJvcGRvd25Db250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJhdHRycyIsImNsYXNzTmFtZSIsInByb3BzIiwidGhlbWUiLCJzZWNvbmRhcnlJbnB1dEJvcmRlckNvbG9yIiwiRHJvcGRvd25NZW51IiwiTGlzdEl0ZW1XcmFwcGVyIiwidGV4dENvbG9yIiwiVFlQRUFIRUFEX0NMQVNTIiwiVFlQRUFIRUFEX0lOUFVUX0NMQVNTIiwiTGlzdEl0ZW0iLCJ2YWx1ZSIsImNvbG9yIiwibGFiZWwiLCJBZGRCeURhdGFzZXRCdXR0b24iLCJkYXRhc2V0cyIsIm9uQWRkIiwiYnV0dG9uSW50bElkIiwid2lkdGgiLCJpbmFjdGl2ZSIsInRpcHB5SW5zdGFuY2UiLCJzZXRUaXBweUluc3RhbmNlIiwib3B0aW9ucyIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsImRzIiwiaWQiLCJvbkNsaWNrQnRuIiwibGVuZ3RoIiwib25PcHRpb25TZWxlY3RlZCIsIm9wdGlvbiIsImhpZGUiLCJpbnRsIiwiYnV0dG9uUmVuZGVyZWQiLCJyZXN1bHRzIiwiaW5wdXQiLCJsaXN0SXRlbSIsImZvcm1hdE1lc3NhZ2UiLCJBY2Nlc3NvciIsImdlbmVyYXRlT3B0aW9uVG9TdHJpbmdGb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLGlCQUFpQixHQUFHQyw2QkFBT0MsR0FBUCxDQUFXQyxLQUFYLENBQWlCO0FBQ3pDQyxFQUFBQSxTQUFTLEVBQUU7QUFEOEIsQ0FBakIsQ0FBSCwrYkFJSyxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLHlCQUFoQjtBQUFBLENBSlYsQ0FBdkI7O0FB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d0IsY0FoQ0gsQ0FIRjtBQXNDRCxDQTFGRDs7ZUE0RmVwQixrQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ0BrZXBsZXIuZ2wvbG9jYWxpemF0aW9uJztcbmltcG9ydCB7RGF0YXNldHN9IGZyb20gJ0BrZXBsZXIuZ2wvdGFibGUnO1xuXG5pbXBvcnQgVGlwcHkgZnJvbSAnQHRpcHB5anMvcmVhY3QnO1xuaW1wb3J0IHtBZGR9IGZyb20gJy4uL2NvbW1vbi9pY29ucyc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi4vY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7RGF0YXNldFNxdWFyZX0gZnJvbSAnLi4vLi4nO1xuaW1wb3J0IFR5cGVhaGVhZCBmcm9tICcuLi9jb21tb24vaXRlbS1zZWxlY3Rvci90eXBlYWhlYWQnO1xuaW1wb3J0IEFjY2Vzc29yIGZyb20gJy4uL2NvbW1vbi9pdGVtLXNlbGVjdG9yL2FjY2Vzc29yJztcbmltcG9ydCB7dXNlSW50bH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmNvbnN0IERyb3Bkb3duQ29udGFpbmVyID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2FkZC1sYXllci1tZW51LWRyb3Bkb3duJ1xufSlgXG4gIC5saXN0LXNlbGVjdG9yIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlJbnB1dEJvcmRlckNvbG9yfTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBkaXNhYmxlIHNjcm9sbGluZywgY3VycmVudGx5IHNldCB0byAyODBweCBpbnRlcm5hbGx5ICovXG4gICAgbWF4LWhlaWdodDogdW5zZXQ7XG4gIH1cbiAgLmxpc3RfX2l0ZW0gPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBzdmcge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgRHJvcGRvd25NZW51ID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2Ryb3Bkb3duLW1lbnUnXG59KWBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAyNDBweDtcbiAgbWF4LXdpZHRoOiAyNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IC01M3B4O1xuICB6LWluZGV4OiA1O1xuYDtcblxuY29uc3QgTGlzdEl0ZW1XcmFwcGVyID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gIGNsYXNzTmFtZTogJ2Ryb3Bkb3duLW1lbnUtbGlzdC1pdGVtLXdyYXBwZXInXG59KWBcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICAuZGF0YXNldC1jb2xvciB7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xuICB9XG4gIC5kYXRhc2V0LW5hbWUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuYDtcblxuY29uc3QgVFlQRUFIRUFEX0NMQVNTID0gJ3R5cGVhaGVhZCc7XG5jb25zdCBUWVBFQUhFQURfSU5QVVRfQ0xBU1MgPSAndHlwZWFoZWFkX19pbnB1dCc7XG5cbmV4cG9ydCB0eXBlIEFkZEJ5RGF0YXNldEJ1dHRvblByb3BzID0ge1xuICBkYXRhc2V0czogRGF0YXNldHM7XG4gIG9uQWRkOiAoZGF0YUlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIHdpZHRoOiBzdHJpbmc7XG4gIGJ1dHRvbkludGxJZDogc3RyaW5nO1xuICBpbmFjdGl2ZT86IGJvb2xlYW47XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn07XG5cbmNvbnN0IExpc3RJdGVtID0gKHt2YWx1ZX0pID0+IChcbiAgPExpc3RJdGVtV3JhcHBlcj5cbiAgICA8RGF0YXNldFNxdWFyZSBjbGFzc05hbWU9XCJkYXRhc2V0LWNvbG9yXCIgYmFja2dyb3VuZENvbG9yPXt2YWx1ZS5jb2xvcn0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGFzZXQtbmFtZVwiIHRpdGxlPXt2YWx1ZS5sYWJlbH0+XG4gICAgICB7dmFsdWUubGFiZWx9XG4gICAgPC9kaXY+XG4gIDwvTGlzdEl0ZW1XcmFwcGVyPlxuKTtcblxuY29uc3QgQWRkQnlEYXRhc2V0QnV0dG9uOiBSZWFjdC5GQzxBZGRCeURhdGFzZXRCdXR0b25Qcm9wcz4gPSAoe1xuICBkYXRhc2V0cyxcbiAgb25BZGQsXG4gIGJ1dHRvbkludGxJZCxcbiAgd2lkdGgsXG4gIGNsYXNzTmFtZSxcbiAgaW5hY3RpdmVcbn0pID0+IHtcbiAgY29uc3QgW3RpcHB5SW5zdGFuY2UsIHNldFRpcHB5SW5zdGFuY2VdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBvcHRpb25zID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZGF0YXNldHMpLm1hcChkcyA9PiAoe1xuICAgICAgbGFiZWw6IGRzLmxhYmVsLFxuICAgICAgdmFsdWU6IGRzLmlkLFxuICAgICAgY29sb3I6IGRzLmNvbG9yXG4gICAgfSkpO1xuICB9LCBbZGF0YXNldHNdKTtcblxuICBjb25zdCBvbkNsaWNrQnRuID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChvcHRpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgb25BZGQob3B0aW9uc1swXS52YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9LCBbb3B0aW9ucywgb25BZGRdKTtcblxuICBjb25zdCBvbk9wdGlvblNlbGVjdGVkID0gdXNlQ2FsbGJhY2soXG4gICAgb3B0aW9uID0+IHtcbiAgICAgIG9uQWRkKG9wdGlvbi52YWx1ZSk7XG4gICAgICBpZiAodGlwcHlJbnN0YW5jZSkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHRpcHB5SW5zdGFuY2UuaGlkZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgW29uQWRkLCB0aXBweUluc3RhbmNlXVxuICApO1xuXG4gIGNvbnN0IGludGwgPSB1c2VJbnRsKCk7XG5cbiAgY29uc3QgYnV0dG9uUmVuZGVyZWQgPSAoXG4gICAgPEJ1dHRvblxuICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWUgfHwgJ2FkZC1ieS1kYXRhc2V0LWJ1dHRvbid9XG4gICAgICB3aWR0aD17d2lkdGh9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrQnRufVxuICAgICAgZGlzYWJsZWQ9eyFvcHRpb25zLmxlbmd0aCB8fCBpbmFjdGl2ZX1cbiAgICA+XG4gICAgICA8QWRkIGhlaWdodD1cIjEycHhcIiAvPlxuICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e2J1dHRvbkludGxJZH0gLz5cbiAgICA8L0J1dHRvbj5cbiAgKTtcblxuICByZXR1cm4gb3B0aW9ucy5sZW5ndGggPT09IDEgPyAoXG4gICAgYnV0dG9uUmVuZGVyZWRcbiAgKSA6IChcbiAgICA8VGlwcHlcbiAgICAgIHRyaWdnZXI9XCJjbGlja1wiXG4gICAgICBhcnJvdz17ZmFsc2V9XG4gICAgICBpbnRlcmFjdGl2ZVxuICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgIGFwcGVuZFRvPVwicGFyZW50XCJcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIG9uQ3JlYXRlPXtzZXRUaXBweUluc3RhbmNlfVxuICAgICAgZHVyYXRpb249ezB9XG4gICAgICBjb250ZW50PXtcbiAgICAgICAgPERyb3Bkb3duTWVudT5cbiAgICAgICAgICA8RHJvcGRvd25Db250YWluZXI+XG4gICAgICAgICAgICA8VHlwZWFoZWFkXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17VFlQRUFIRUFEX0NMQVNTfVxuICAgICAgICAgICAgICBjdXN0b21DbGFzc2VzPXt7XG4gICAgICAgICAgICAgICAgcmVzdWx0czogJ2xpc3Qtc2VsZWN0b3InLFxuICAgICAgICAgICAgICAgIGlucHV0OiBUWVBFQUhFQURfSU5QVVRfQ0xBU1MsXG4gICAgICAgICAgICAgICAgbGlzdEl0ZW06ICdsaXN0X19pdGVtJ1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17aW50bCA/IGludGwuZm9ybWF0TWVzc2FnZSh7aWQ6ICdwbGFjZWhvbGRlci5zZWFyY2gnfSkgOiAnU2VhcmNoJ31cbiAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17bnVsbH1cbiAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgICAgZGlzcGxheU9wdGlvbj17QWNjZXNzb3IuZ2VuZXJhdGVPcHRpb25Ub1N0cmluZ0ZvcignbGFiZWwnKX1cbiAgICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXsnbGFiZWwnfVxuICAgICAgICAgICAgICBzZWFyY2hhYmxlXG4gICAgICAgICAgICAgIG9uT3B0aW9uU2VsZWN0ZWQ9e29uT3B0aW9uU2VsZWN0ZWR9XG4gICAgICAgICAgICAgIGN1c3RvbUxpc3RJdGVtQ29tcG9uZW50PXtMaXN0SXRlbX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Ecm9wZG93bkNvbnRhaW5lcj5cbiAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG4gICAgICB9XG4gICAgPlxuICAgICAge2J1dHRvblJlbmRlcmVkfVxuICAgIDwvVGlwcHk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRCeURhdGFzZXRCdXR0b247XG4iXX0=