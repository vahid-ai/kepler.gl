"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DatasetTagFactory;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _localization = require("@kepler.gl/localization");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _2 = require("../..");

var _templateObject, _templateObject2;

function nop(_) {}

var DatasetTagWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  color: ", ";\n  font-size: 11px;\n  letter-spacing: 0.2px;\n  overflow: auto;\n\n  .dataset-color {\n    flex-shrink: 0;\n    margin-top: 3px;\n  }\n\n  .dataset-name {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"])), function (props) {
  return props.theme.textColor;
});

var DatasetColorPicker = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n"])));

var UpdateTableColor = function UpdateTableColor(_ref) {
  var children = _ref.children,
      id = _ref.id;
  return /*#__PURE__*/_react["default"].createElement(DatasetColorPicker, {
    className: "dataset-action update-color",
    "data-tip": true,
    "data-for": "update-color-".concat(id)
  }, children);
};

function DatasetTagFactory() {
  var DatasetTag = function DatasetTag(_ref2) {
    var _ref2$onClick = _ref2.onClick,
        onClick = _ref2$onClick === void 0 ? nop : _ref2$onClick,
        _ref2$onClickSquare = _ref2.onClickSquare,
        onClickSquare = _ref2$onClickSquare === void 0 ? nop : _ref2$onClickSquare,
        dataset = _ref2.dataset,
        updateTableColor = _ref2.updateTableColor;
    return /*#__PURE__*/_react["default"].createElement(DatasetTagWrapper, {
      className: "source-data-tag"
    }, /*#__PURE__*/_react["default"].createElement(UpdateTableColor, {
      id: dataset.id
    }, /*#__PURE__*/_react["default"].createElement(_2.DatasetSquare, {
      className: "dataset-color",
      backgroundColor: dataset.color,
      onClick: onClickSquare,
      "data-tip": true,
      "data-for": "update-color-".concat(dataset.id)
    }), updateTableColor ? /*#__PURE__*/_react["default"].createElement(_2.Tooltip, {
      id: "update-color-".concat(dataset.id),
      effect: "solid"
    }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'Update color'
    }))) : null), /*#__PURE__*/_react["default"].createElement("div", {
      className: "dataset-name",
      title: dataset.label,
      onClick: onClick
    }, dataset.label));
  };

  return DatasetTag;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2NvbW1vbi9kYXRhc2V0LXRhZy50c3giXSwibmFtZXMiOlsibm9wIiwiXyIsIkRhdGFzZXRUYWdXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvciIsIkRhdGFzZXRDb2xvclBpY2tlciIsIlVwZGF0ZVRhYmxlQ29sb3IiLCJjaGlsZHJlbiIsImlkIiwiRGF0YXNldFRhZ0ZhY3RvcnkiLCJEYXRhc2V0VGFnIiwib25DbGljayIsIm9uQ2xpY2tTcXVhcmUiLCJkYXRhc2V0IiwidXBkYXRlVGFibGVDb2xvciIsImNvbG9yIiwibGFiZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBS0EsU0FBU0EsR0FBVCxDQUFhQyxDQUFiLEVBQWdCLENBQUU7O0FBRWxCLElBQU1DLGlCQUFpQixHQUFHQyw2QkFBT0MsR0FBViwyV0FFWixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFNBQWhCO0FBQUEsQ0FGTyxDQUF2Qjs7QUFtQkEsSUFBTUMsa0JBQWtCLEdBQUdMLDZCQUFPQyxHQUFWLDRHQUF4Qjs7QUFJQSxJQUFNSyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsTUFBRUMsUUFBRixRQUFFQSxRQUFGO0FBQUEsTUFBWUMsRUFBWixRQUFZQSxFQUFaO0FBQUEsc0JBQ3ZCLGdDQUFDLGtCQUFEO0FBQ0UsSUFBQSxTQUFTLEVBQUMsNkJBRFo7QUFFRSxvQkFGRjtBQUdFLHVDQUEwQkEsRUFBMUI7QUFIRixLQUtHRCxRQUxILENBRHVCO0FBQUEsQ0FBekI7O0FBd0JlLFNBQVNFLGlCQUFULEdBQXdEO0FBQ3JFLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsOEJBQ2pCQyxPQURpQjtBQUFBLFFBQ2pCQSxPQURpQiw4QkFDUGQsR0FETztBQUFBLG9DQUVqQmUsYUFGaUI7QUFBQSxRQUVqQkEsYUFGaUIsb0NBRURmLEdBRkM7QUFBQSxRQUdqQmdCLE9BSGlCLFNBR2pCQSxPQUhpQjtBQUFBLFFBSWpCQyxnQkFKaUIsU0FJakJBLGdCQUppQjtBQUFBLHdCQU1qQixnQ0FBQyxpQkFBRDtBQUFtQixNQUFBLFNBQVMsRUFBQztBQUE3QixvQkFDRSxnQ0FBQyxnQkFBRDtBQUFrQixNQUFBLEVBQUUsRUFBRUQsT0FBTyxDQUFDTDtBQUE5QixvQkFDRSxnQ0FBQyxnQkFBRDtBQUNFLE1BQUEsU0FBUyxFQUFDLGVBRFo7QUFFRSxNQUFBLGVBQWUsRUFBRUssT0FBTyxDQUFDRSxLQUYzQjtBQUdFLE1BQUEsT0FBTyxFQUFFSCxhQUhYO0FBSUUsc0JBSkY7QUFLRSx5Q0FBMEJDLE9BQU8sQ0FBQ0wsRUFBbEM7QUFMRixNQURGLEVBUUdNLGdCQUFnQixnQkFDZixnQ0FBQyxVQUFEO0FBQVMsTUFBQSxFQUFFLHlCQUFrQkQsT0FBTyxDQUFDTCxFQUExQixDQUFYO0FBQTJDLE1BQUEsTUFBTSxFQUFDO0FBQWxELG9CQUNFLDJEQUNFLGdDQUFDLDhCQUFEO0FBQWtCLE1BQUEsRUFBRSxFQUFFO0FBQXRCLE1BREYsQ0FERixDQURlLEdBTWIsSUFkTixDQURGLGVBaUJFO0FBQUssTUFBQSxTQUFTLEVBQUMsY0FBZjtBQUE4QixNQUFBLEtBQUssRUFBRUssT0FBTyxDQUFDRyxLQUE3QztBQUFvRCxNQUFBLE9BQU8sRUFBRUw7QUFBN0QsT0FDR0UsT0FBTyxDQUFDRyxLQURYLENBakJGLENBTmlCO0FBQUEsR0FBbkI7O0FBNkJBLFNBQU9OLFVBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ0BrZXBsZXIuZ2wvbG9jYWxpemF0aW9uJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtEYXRhc2V0U3F1YXJlLCBUb29sdGlwfSBmcm9tICcuLi8uLic7XG5pbXBvcnQge1VwZGF0ZVRhYmxlQ29sb3JUeXBlc30gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge1JHQkNvbG9yfSBmcm9tICdAa2VwbGVyLmdsL3R5cGVzJztcbmltcG9ydCB7VmlzU3RhdGVBY3Rpb25zLCBBY3Rpb25IYW5kbGVyfSBmcm9tICdAa2VwbGVyLmdsL2FjdGlvbnMnO1xuXG5mdW5jdGlvbiBub3AoXykge31cblxuY29uc3QgRGF0YXNldFRhZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3J9O1xuICBmb250LXNpemU6IDExcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgLmRhdGFzZXQtY29sb3Ige1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgfVxuXG4gIC5kYXRhc2V0LW5hbWUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxuYDtcblxuY29uc3QgRGF0YXNldENvbG9yUGlja2VyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IFVwZGF0ZVRhYmxlQ29sb3IgPSAoe2NoaWxkcmVuLCBpZH06IFVwZGF0ZVRhYmxlQ29sb3JUeXBlcykgPT4gKFxuICA8RGF0YXNldENvbG9yUGlja2VyXG4gICAgY2xhc3NOYW1lPVwiZGF0YXNldC1hY3Rpb24gdXBkYXRlLWNvbG9yXCJcbiAgICBkYXRhLXRpcFxuICAgIGRhdGEtZm9yPXtgdXBkYXRlLWNvbG9yLSR7aWR9YH1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9EYXRhc2V0Q29sb3JQaWNrZXI+XG4pO1xuXG50eXBlIE1pbmlEYXRhc2V0ID0ge1xuICBpZDogc3RyaW5nO1xuICBjb2xvcjogUkdCQ29sb3I7XG4gIGxhYmVsPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgRGF0YXNldFRhZ1Byb3BzID0ge1xuICBpZD86IHN0cmluZztcbiAgZGF0YXNldDogTWluaURhdGFzZXQ7XG4gIHVwZGF0ZVRhYmxlQ29sb3I/OiBBY3Rpb25IYW5kbGVyPHR5cGVvZiBWaXNTdGF0ZUFjdGlvbnMudXBkYXRlVGFibGVDb2xvcj47XG4gIG9uQ2xpY2s/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlcjxIVE1MRGl2RWxlbWVudD47XG4gIG9uQ2xpY2tTcXVhcmU/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlcjxIVE1MRGl2RWxlbWVudD47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRhc2V0VGFnRmFjdG9yeSgpOiBSZWFjdC5GQzxEYXRhc2V0VGFnUHJvcHM+IHtcbiAgY29uc3QgRGF0YXNldFRhZyA9ICh7XG4gICAgb25DbGljayA9IG5vcCxcbiAgICBvbkNsaWNrU3F1YXJlID0gbm9wLFxuICAgIGRhdGFzZXQsXG4gICAgdXBkYXRlVGFibGVDb2xvclxuICB9OiBEYXRhc2V0VGFnUHJvcHMpID0+IChcbiAgICA8RGF0YXNldFRhZ1dyYXBwZXIgY2xhc3NOYW1lPVwic291cmNlLWRhdGEtdGFnXCI+XG4gICAgICA8VXBkYXRlVGFibGVDb2xvciBpZD17ZGF0YXNldC5pZH0+XG4gICAgICAgIDxEYXRhc2V0U3F1YXJlXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZGF0YXNldC1jb2xvclwiXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtkYXRhc2V0LmNvbG9yfVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tTcXVhcmV9XG4gICAgICAgICAgZGF0YS10aXBcbiAgICAgICAgICBkYXRhLWZvcj17YHVwZGF0ZS1jb2xvci0ke2RhdGFzZXQuaWR9YH1cbiAgICAgICAgLz5cbiAgICAgICAge3VwZGF0ZVRhYmxlQ29sb3IgPyAoXG4gICAgICAgICAgPFRvb2x0aXAgaWQ9e2B1cGRhdGUtY29sb3ItJHtkYXRhc2V0LmlkfWB9IGVmZmVjdD1cInNvbGlkXCI+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydVcGRhdGUgY29sb3InfSAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L1VwZGF0ZVRhYmxlQ29sb3I+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGFzZXQtbmFtZVwiIHRpdGxlPXtkYXRhc2V0LmxhYmVsfSBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAge2RhdGFzZXQubGFiZWx9XG4gICAgICA8L2Rpdj5cbiAgICA8L0RhdGFzZXRUYWdXcmFwcGVyPlxuICApO1xuXG4gIHJldHVybiBEYXRhc2V0VGFnO1xufVxuIl19