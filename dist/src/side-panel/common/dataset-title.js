"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DatasetTitleFactory;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _localization = require("@kepler.gl/localization");

var _layers = require("@kepler.gl/layers");

var _styledComponents2 = require("../../common/styled-components");

var _icons = require("../../common/icons");

var _datasetTag = _interopRequireDefault(require("./dataset-tag"));

var _customPicker = _interopRequireDefault(require("../layer-panel/custom-picker"));

var _ = require("../..");

var _utils = require("@kepler.gl/utils");

var _templateObject, _templateObject2;

var StyledDatasetTitle = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  display: flex;\n  align-items: flex-start;\n\n  .source-data-arrow {\n    height: 16px;\n  }\n  :hover {\n    cursor: ", ";\n\n    .dataset-name {\n      color: ", ";\n    }\n\n    .dataset-action {\n      color: ", ";\n      opacity: 1;\n    }\n\n    .dataset-action:hover {\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.clickable ? 'pointer' : 'auto';
}, function (props) {
  return props.clickable ? props.theme.textColorHl : props.theme.textColor;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.textColorHl;
});

var DataTagAction = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: 12px;\n  height: 16px;\n  opacity: 0;\n"])));

var ShowDataTable = function ShowDataTable(_ref) {
  var id = _ref.id,
      showDatasetTable = _ref.showDatasetTable;
  return /*#__PURE__*/_react["default"].createElement(DataTagAction, {
    className: "dataset-action show-data-table",
    "data-tip": true,
    "data-for": "data-table-".concat(id)
  }, /*#__PURE__*/_react["default"].createElement(_layers.Table, {
    height: "16px",
    onClick: function onClick(e) {
      e.stopPropagation();
      showDatasetTable === null || showDatasetTable === void 0 ? void 0 : showDatasetTable(id);
    }
  }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
    id: "data-table-".concat(id),
    effect: "solid"
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: 'datasetTitle.showDataTable'
  }))));
};

var RemoveDataset = function RemoveDataset(_ref2) {
  var datasetKey = _ref2.datasetKey,
      removeDataset = _ref2.removeDataset;
  return /*#__PURE__*/_react["default"].createElement(DataTagAction, {
    className: "dataset-action remove-dataset",
    "data-tip": true,
    "data-for": "delete-".concat(datasetKey)
  }, /*#__PURE__*/_react["default"].createElement(_icons.Trash, {
    height: "16px",
    onClick: function onClick(e) {
      e.stopPropagation();
      removeDataset === null || removeDataset === void 0 ? void 0 : removeDataset(datasetKey);
    }
  }), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Tooltip, {
    id: "delete-".concat(datasetKey),
    effect: "solid",
    type: "error"
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
    id: 'datasetTitle.removeDataset'
  }))));
};

DatasetTitleFactory.deps = [_datasetTag["default"]];

function DatasetTitleFactory(DatasetTag) {
  var DatasetTitle = function DatasetTitle(_ref3) {
    var showDatasetTable = _ref3.showDatasetTable,
        showDeleteDataset = _ref3.showDeleteDataset,
        onTitleClick = _ref3.onTitleClick,
        removeDataset = _ref3.removeDataset,
        dataset = _ref3.dataset,
        updateTableColor = _ref3.updateTableColor;

    var _useState = (0, _react.useState)(false),
        _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
        displayColorPicker = _useState2[0],
        setDisplayColorPicker = _useState2[1];

    var root = (0, _react.useRef)(null);
    var datasetId = dataset.id;

    var _handleClick = (0, _react.useCallback)(function () {
      setDisplayColorPicker(!displayColorPicker);
    }, [setDisplayColorPicker, displayColorPicker]);

    var _handleClosePicker = (0, _react.useCallback)(function () {
      setDisplayColorPicker(false);
    }, [setDisplayColorPicker]);

    var _handleCustomPicker = (0, _react.useCallback)(function (color) {
      updateTableColor(datasetId, [color.rgb.r, color.rgb.g, color.rgb.b]);
    }, [updateTableColor, datasetId]);

    var _onClickTitle = (0, _react.useCallback)(function (e) {
      e.stopPropagation();

      if (typeof onTitleClick === 'function') {
        onTitleClick();
      } else if (typeof showDatasetTable === 'function') {
        showDatasetTable(datasetId);
      }
    }, [onTitleClick, showDatasetTable, datasetId]);

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "custom-palette-panel",
      ref: root
    }, /*#__PURE__*/_react["default"].createElement(StyledDatasetTitle, {
      className: "source-data-title",
      clickable: Boolean(showDatasetTable || onTitleClick)
    }, /*#__PURE__*/_react["default"].createElement(DatasetTag, {
      dataset: dataset,
      onClick: _onClickTitle,
      updateTableColor: updateTableColor,
      onClickSquare: _handleClick
    }), /*#__PURE__*/_react["default"].createElement(_.Portaled, {
      isOpened: displayColorPicker !== false,
      left: 110,
      top: -50,
      onClose: _handleClosePicker
    }, /*#__PURE__*/_react["default"].createElement(_customPicker["default"], {
      color: (0, _utils.rgbToHex)(dataset.color),
      onChange: _handleCustomPicker,
      onSwatchClose: _handleClosePicker
    })), showDatasetTable ? /*#__PURE__*/_react["default"].createElement(_styledComponents2.CenterFlexbox, {
      className: "source-data-arrow"
    }, /*#__PURE__*/_react["default"].createElement(_icons.ArrowRight, {
      height: "12px"
    })) : null, showDatasetTable ? /*#__PURE__*/_react["default"].createElement(ShowDataTable, {
      id: datasetId,
      showDatasetTable: showDatasetTable
    }) : null, showDeleteDataset ? /*#__PURE__*/_react["default"].createElement(RemoveDataset, {
      datasetKey: datasetId,
      removeDataset: removeDataset
    }) : null));
  };

  return DatasetTitle;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2NvbW1vbi9kYXRhc2V0LXRpdGxlLnRzeCJdLCJuYW1lcyI6WyJTdHlsZWREYXRhc2V0VGl0bGUiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwidGV4dENvbG9yIiwiY2xpY2thYmxlIiwidGV4dENvbG9ySGwiLCJEYXRhVGFnQWN0aW9uIiwiU2hvd0RhdGFUYWJsZSIsImlkIiwic2hvd0RhdGFzZXRUYWJsZSIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJSZW1vdmVEYXRhc2V0IiwiZGF0YXNldEtleSIsInJlbW92ZURhdGFzZXQiLCJEYXRhc2V0VGl0bGVGYWN0b3J5IiwiZGVwcyIsIkRhdGFzZXRUYWdGYWN0b3J5IiwiRGF0YXNldFRhZyIsIkRhdGFzZXRUaXRsZSIsInNob3dEZWxldGVEYXRhc2V0Iiwib25UaXRsZUNsaWNrIiwiZGF0YXNldCIsInVwZGF0ZVRhYmxlQ29sb3IiLCJkaXNwbGF5Q29sb3JQaWNrZXIiLCJzZXREaXNwbGF5Q29sb3JQaWNrZXIiLCJyb290IiwiZGF0YXNldElkIiwiX2hhbmRsZUNsaWNrIiwiX2hhbmRsZUNsb3NlUGlja2VyIiwiX2hhbmRsZUN1c3RvbVBpY2tlciIsImNvbG9yIiwicmdiIiwiciIsImciLCJiIiwiX29uQ2xpY2tUaXRsZSIsIkJvb2xlYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUtBLElBQU1BLGtCQUFrQixHQUFHQyw2QkFBT0MsR0FBVixnYUFDYixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFNBQWhCO0FBQUEsQ0FEUSxFQVNWLFVBQUFGLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNHLFNBQU4sR0FBa0IsU0FBbEIsR0FBOEIsTUFBbkM7QUFBQSxDQVRL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dCAoYykgMjAyMyBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnQGtlcGxlci5nbC9sb2NhbGl6YXRpb24nO1xuXG5pbXBvcnQge1RhYmxlfSBmcm9tICdAa2VwbGVyLmdsL2xheWVycyc7XG5pbXBvcnQge0NlbnRlckZsZXhib3gsIFRvb2x0aXB9IGZyb20gJy4uLy4uL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge0Fycm93UmlnaHQsIFRyYXNofSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMnO1xuaW1wb3J0IERhdGFzZXRUYWdGYWN0b3J5IGZyb20gJy4vZGF0YXNldC10YWcnO1xuaW1wb3J0IEN1c3RvbVBpY2tlciBmcm9tICcuLi9sYXllci1wYW5lbC9jdXN0b20tcGlja2VyJztcbmltcG9ydCB7UG9ydGFsZWR9IGZyb20gJy4uLy4uJztcbmltcG9ydCB7cmdiVG9IZXh9IGZyb20gJ0BrZXBsZXIuZ2wvdXRpbHMnO1xuaW1wb3J0IHtvcGVuRGVsZXRlTW9kYWwsIFZpc1N0YXRlQWN0aW9ucywgQWN0aW9uSGFuZGxlcn0gZnJvbSAnQGtlcGxlci5nbC9hY3Rpb25zJztcbmltcG9ydCB7UkdCQ29sb3J9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuaW1wb3J0IHtTdHlsZWREYXRhc2V0VGl0bGVQcm9wcywgUmVtb3ZlRGF0YXNldFByb3BzLCBTaG93RGF0YVRhYmxlUHJvcHN9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBTdHlsZWREYXRhc2V0VGl0bGUgPSBzdHlsZWQuZGl2PFN0eWxlZERhdGFzZXRUaXRsZVByb3BzPmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgLnNvdXJjZS1kYXRhLWFycm93IHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gIH1cbiAgOmhvdmVyIHtcbiAgICBjdXJzb3I6ICR7cHJvcHMgPT4gKHByb3BzLmNsaWNrYWJsZSA/ICdwb2ludGVyJyA6ICdhdXRvJyl9O1xuXG4gICAgLmRhdGFzZXQtbmFtZSB7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiAocHJvcHMuY2xpY2thYmxlID8gcHJvcHMudGhlbWUudGV4dENvbG9ySGwgOiBwcm9wcy50aGVtZS50ZXh0Q29sb3IpfTtcbiAgICB9XG5cbiAgICAuZGF0YXNldC1hY3Rpb24ge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG4gICAgLmRhdGFzZXQtYWN0aW9uOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckhsfTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IERhdGFUYWdBY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBvcGFjaXR5OiAwO1xuYDtcblxudHlwZSBNaW5pRGF0YXNldCA9IHtcbiAgaWQ6IHN0cmluZztcbiAgY29sb3I6IFJHQkNvbG9yO1xuICBsYWJlbD86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIERhdGFzZXRUaXRsZVByb3BzID0ge1xuICBkYXRhc2V0OiBNaW5pRGF0YXNldDtcbiAgc2hvd0RlbGV0ZURhdGFzZXQ6IGJvb2xlYW47XG4gIG9uVGl0bGVDbGljaz86ICgpID0+IHZvaWQ7XG4gIHNob3dEYXRhc2V0VGFibGU/OiBBY3Rpb25IYW5kbGVyPHR5cGVvZiBWaXNTdGF0ZUFjdGlvbnMuc2hvd0RhdGFzZXRUYWJsZT47XG4gIHVwZGF0ZVRhYmxlQ29sb3I6IEFjdGlvbkhhbmRsZXI8dHlwZW9mIFZpc1N0YXRlQWN0aW9ucy51cGRhdGVUYWJsZUNvbG9yPjtcbiAgcmVtb3ZlRGF0YXNldD86IEFjdGlvbkhhbmRsZXI8dHlwZW9mIG9wZW5EZWxldGVNb2RhbD47XG59O1xuXG5jb25zdCBTaG93RGF0YVRhYmxlID0gKHtpZCwgc2hvd0RhdGFzZXRUYWJsZX06IFNob3dEYXRhVGFibGVQcm9wcykgPT4gKFxuICA8RGF0YVRhZ0FjdGlvbiBjbGFzc05hbWU9XCJkYXRhc2V0LWFjdGlvbiBzaG93LWRhdGEtdGFibGVcIiBkYXRhLXRpcCBkYXRhLWZvcj17YGRhdGEtdGFibGUtJHtpZH1gfT5cbiAgICA8VGFibGVcbiAgICAgIGhlaWdodD1cIjE2cHhcIlxuICAgICAgb25DbGljaz17ZSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHNob3dEYXRhc2V0VGFibGU/LihpZCk7XG4gICAgICB9fVxuICAgIC8+XG4gICAgPFRvb2x0aXAgaWQ9e2BkYXRhLXRhYmxlLSR7aWR9YH0gZWZmZWN0PVwic29saWRcIj5cbiAgICAgIDxzcGFuPlxuICAgICAgICA8Rm9ybWF0dGVkTWVzc2FnZSBpZD17J2RhdGFzZXRUaXRsZS5zaG93RGF0YVRhYmxlJ30gLz5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L1Rvb2x0aXA+XG4gIDwvRGF0YVRhZ0FjdGlvbj5cbik7XG5cbmNvbnN0IFJlbW92ZURhdGFzZXQgPSAoe2RhdGFzZXRLZXksIHJlbW92ZURhdGFzZXR9OiBSZW1vdmVEYXRhc2V0UHJvcHMpID0+IChcbiAgPERhdGFUYWdBY3Rpb25cbiAgICBjbGFzc05hbWU9XCJkYXRhc2V0LWFjdGlvbiByZW1vdmUtZGF0YXNldFwiXG4gICAgZGF0YS10aXBcbiAgICBkYXRhLWZvcj17YGRlbGV0ZS0ke2RhdGFzZXRLZXl9YH1cbiAgPlxuICAgIDxUcmFzaFxuICAgICAgaGVpZ2h0PVwiMTZweFwiXG4gICAgICBvbkNsaWNrPXtlID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcmVtb3ZlRGF0YXNldD8uKGRhdGFzZXRLZXkpO1xuICAgICAgfX1cbiAgICAvPlxuICAgIDxUb29sdGlwIGlkPXtgZGVsZXRlLSR7ZGF0YXNldEtleX1gfSBlZmZlY3Q9XCJzb2xpZFwiIHR5cGU9XCJlcnJvclwiPlxuICAgICAgPHNwYW4+XG4gICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnZGF0YXNldFRpdGxlLnJlbW92ZURhdGFzZXQnfSAvPlxuICAgICAgPC9zcGFuPlxuICAgIDwvVG9vbHRpcD5cbiAgPC9EYXRhVGFnQWN0aW9uPlxuKTtcblxuRGF0YXNldFRpdGxlRmFjdG9yeS5kZXBzID0gW0RhdGFzZXRUYWdGYWN0b3J5XTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0YXNldFRpdGxlRmFjdG9yeShcbiAgRGF0YXNldFRhZzogUmV0dXJuVHlwZTx0eXBlb2YgRGF0YXNldFRhZ0ZhY3Rvcnk+XG4pOiBSZWFjdC5GQzxEYXRhc2V0VGl0bGVQcm9wcz4ge1xuICBjb25zdCBEYXRhc2V0VGl0bGU6IFJlYWN0LkZDPERhdGFzZXRUaXRsZVByb3BzPiA9ICh7XG4gICAgc2hvd0RhdGFzZXRUYWJsZSxcbiAgICBzaG93RGVsZXRlRGF0YXNldCxcbiAgICBvblRpdGxlQ2xpY2ssXG4gICAgcmVtb3ZlRGF0YXNldCxcbiAgICBkYXRhc2V0LFxuICAgIHVwZGF0ZVRhYmxlQ29sb3JcbiAgfSkgPT4ge1xuICAgIGNvbnN0IFtkaXNwbGF5Q29sb3JQaWNrZXIsIHNldERpc3BsYXlDb2xvclBpY2tlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgcm9vdCA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCBkYXRhc2V0SWQgPSBkYXRhc2V0LmlkO1xuICAgIGNvbnN0IF9oYW5kbGVDbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIHNldERpc3BsYXlDb2xvclBpY2tlcighZGlzcGxheUNvbG9yUGlja2VyKTtcbiAgICB9LCBbc2V0RGlzcGxheUNvbG9yUGlja2VyLCBkaXNwbGF5Q29sb3JQaWNrZXJdKTtcblxuICAgIGNvbnN0IF9oYW5kbGVDbG9zZVBpY2tlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgIHNldERpc3BsYXlDb2xvclBpY2tlcihmYWxzZSk7XG4gICAgfSwgW3NldERpc3BsYXlDb2xvclBpY2tlcl0pO1xuICAgIGNvbnN0IF9oYW5kbGVDdXN0b21QaWNrZXIgPSB1c2VDYWxsYmFjayhcbiAgICAgIChjb2xvcjoge3JnYjogUmVjb3JkPHN0cmluZywgbnVtYmVyPn0pID0+IHtcbiAgICAgICAgdXBkYXRlVGFibGVDb2xvcihkYXRhc2V0SWQsIFtjb2xvci5yZ2IuciwgY29sb3IucmdiLmcsIGNvbG9yLnJnYi5iXSk7XG4gICAgICB9LFxuICAgICAgW3VwZGF0ZVRhYmxlQ29sb3IsIGRhdGFzZXRJZF1cbiAgICApO1xuXG4gICAgY29uc3QgX29uQ2xpY2tUaXRsZSA9IHVzZUNhbGxiYWNrKFxuICAgICAgKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygb25UaXRsZUNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgb25UaXRsZUNsaWNrKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNob3dEYXRhc2V0VGFibGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBzaG93RGF0YXNldFRhYmxlKGRhdGFzZXRJZCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbb25UaXRsZUNsaWNrLCBzaG93RGF0YXNldFRhYmxlLCBkYXRhc2V0SWRdXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1wYWxldHRlLXBhbmVsXCIgcmVmPXtyb290fT5cbiAgICAgICAgPFN0eWxlZERhdGFzZXRUaXRsZVxuICAgICAgICAgIGNsYXNzTmFtZT1cInNvdXJjZS1kYXRhLXRpdGxlXCJcbiAgICAgICAgICBjbGlja2FibGU9e0Jvb2xlYW4oc2hvd0RhdGFzZXRUYWJsZSB8fCBvblRpdGxlQ2xpY2spfVxuICAgICAgICA+XG4gICAgICAgICAgPERhdGFzZXRUYWdcbiAgICAgICAgICAgIGRhdGFzZXQ9e2RhdGFzZXR9XG4gICAgICAgICAgICBvbkNsaWNrPXtfb25DbGlja1RpdGxlfVxuICAgICAgICAgICAgdXBkYXRlVGFibGVDb2xvcj17dXBkYXRlVGFibGVDb2xvcn1cbiAgICAgICAgICAgIG9uQ2xpY2tTcXVhcmU9e19oYW5kbGVDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxQb3J0YWxlZFxuICAgICAgICAgICAgaXNPcGVuZWQ9e2Rpc3BsYXlDb2xvclBpY2tlciAhPT0gZmFsc2V9XG4gICAgICAgICAgICBsZWZ0PXsxMTB9XG4gICAgICAgICAgICB0b3A9ey01MH1cbiAgICAgICAgICAgIG9uQ2xvc2U9e19oYW5kbGVDbG9zZVBpY2tlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q3VzdG9tUGlja2VyXG4gICAgICAgICAgICAgIGNvbG9yPXtyZ2JUb0hleChkYXRhc2V0LmNvbG9yKX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e19oYW5kbGVDdXN0b21QaWNrZXJ9XG4gICAgICAgICAgICAgIG9uU3dhdGNoQ2xvc2U9e19oYW5kbGVDbG9zZVBpY2tlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Qb3J0YWxlZD5cbiAgICAgICAgICB7c2hvd0RhdGFzZXRUYWJsZSA/IChcbiAgICAgICAgICAgIDxDZW50ZXJGbGV4Ym94IGNsYXNzTmFtZT1cInNvdXJjZS1kYXRhLWFycm93XCI+XG4gICAgICAgICAgICAgIDxBcnJvd1JpZ2h0IGhlaWdodD1cIjEycHhcIiAvPlxuICAgICAgICAgICAgPC9DZW50ZXJGbGV4Ym94PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIHtzaG93RGF0YXNldFRhYmxlID8gKFxuICAgICAgICAgICAgPFNob3dEYXRhVGFibGUgaWQ9e2RhdGFzZXRJZH0gc2hvd0RhdGFzZXRUYWJsZT17c2hvd0RhdGFzZXRUYWJsZX0gLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICB7c2hvd0RlbGV0ZURhdGFzZXQgPyAoXG4gICAgICAgICAgICA8UmVtb3ZlRGF0YXNldCBkYXRhc2V0S2V5PXtkYXRhc2V0SWR9IHJlbW92ZURhdGFzZXQ9e3JlbW92ZURhdGFzZXR9IC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvU3R5bGVkRGF0YXNldFRpdGxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gRGF0YXNldFRpdGxlO1xufVxuIl19