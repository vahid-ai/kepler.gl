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

var _imagePreview = _interopRequireDefault(require("../common/image-preview"));

var _constants = require("@kepler.gl/constants");

var _styledComponents2 = require("../common/styled-components");

var _switch = _interopRequireDefault(require("../common/switch"));

var _reactIntl = require("react-intl");

var _localization = require("@kepler.gl/localization");

var _templateObject;

var ImageOptionList = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 250px;\n\n  .image-option-section {\n    .image-option-section-title {\n      font-weight: 500;\n      font-size: 14px;\n    }\n  }\n\n  .button-list {\n    display: flex;\n    flex-direction: row;\n    padding: 8px 0px;\n  }\n\n  input {\n    margin-right: 8px;\n  }\n"])));

var ExportImageModalFactory = function ExportImageModalFactory() {
  /** @type {typeof import('./export-image-modal').ExportImageModal} */
  var ExportImageModal = function ExportImageModal(_ref) {
    var mapW = _ref.mapW,
        mapH = _ref.mapH,
        exportImage = _ref.exportImage,
        onUpdateImageSetting = _ref.onUpdateImageSetting,
        cleanupExportImage = _ref.cleanupExportImage,
        intl = _ref.intl;
    var legend = exportImage.legend,
        ratio = exportImage.ratio,
        resolution = exportImage.resolution;
    (0, _react.useEffect)(function () {
      onUpdateImageSetting({
        exporting: true
      });
      return cleanupExportImage;
    }, [onUpdateImageSetting, cleanupExportImage]);
    (0, _react.useEffect)(function () {
      if (mapH !== exportImage.mapH || mapW !== exportImage.mapW) {
        onUpdateImageSetting({
          mapH: mapH,
          mapW: mapW
        });
      }
    }, [mapH, mapW, exportImage, onUpdateImageSetting]);
    return /*#__PURE__*/_react["default"].createElement(_styledComponents2.StyledModalContent, {
      className: "export-image-modal"
    }, /*#__PURE__*/_react["default"].createElement(ImageOptionList, null, /*#__PURE__*/_react["default"].createElement("div", {
      className: "image-option-section"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "image-option-section-title"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportImage.ratioTitle'
    })), /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportImage.ratioDescription'
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "button-list",
      id: "export-image-modal__option_ratio"
    }, _constants.EXPORT_IMG_RATIO_OPTIONS.filter(function (op) {
      return !op.hidden;
    }).map(function (op) {
      return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SelectionButton, {
        key: op.id,
        selected: ratio === op.id,
        onClick: function onClick() {
          return onUpdateImageSetting({
            ratio: op.id
          });
        }
      }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
        id: op.label
      }), ratio === op.id && /*#__PURE__*/_react["default"].createElement(_styledComponents2.CheckMark, null));
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "image-option-section"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "image-option-section-title"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportImage.resolutionTitle'
    })), /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportImage.resolutionDescription'
    }), /*#__PURE__*/_react["default"].createElement("div", {
      className: "button-list",
      id: "export-image-modal__option_resolution"
    }, _constants.EXPORT_IMG_RESOLUTION_OPTIONS.map(function (op) {
      return /*#__PURE__*/_react["default"].createElement(_styledComponents2.SelectionButton, {
        key: op.id,
        selected: resolution === op.id,
        onClick: function onClick() {
          return op.available && onUpdateImageSetting({
            resolution: op.id
          });
        }
      }, op.label, resolution === op.id && /*#__PURE__*/_react["default"].createElement(_styledComponents2.CheckMark, null));
    }))), /*#__PURE__*/_react["default"].createElement("div", {
      className: "image-option-section"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "image-option-section-title"
    }, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'modal.exportImage.mapLegendTitle'
    })), /*#__PURE__*/_react["default"].createElement(_switch["default"], {
      type: "checkbox",
      id: "add-map-legend",
      checked: legend,
      label: intl.formatMessage({
        id: 'modal.exportImage.mapLegendAdd'
      }),
      onChange: function onChange() {
        return onUpdateImageSetting({
          legend: !legend
        });
      }
    }))), /*#__PURE__*/_react["default"].createElement(_imagePreview["default"], {
      exportImage: exportImage
    }));
  };

  return (0, _reactIntl.injectIntl)(ExportImageModal);
};

var _default = ExportImageModalFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tb2RhbHMvZXhwb3J0LWltYWdlLW1vZGFsLnRzeCJdLCJuYW1lcyI6WyJJbWFnZU9wdGlvbkxpc3QiLCJzdHlsZWQiLCJkaXYiLCJFeHBvcnRJbWFnZU1vZGFsRmFjdG9yeSIsIkV4cG9ydEltYWdlTW9kYWwiLCJtYXBXIiwibWFwSCIsImV4cG9ydEltYWdlIiwib25VcGRhdGVJbWFnZVNldHRpbmciLCJjbGVhbnVwRXhwb3J0SW1hZ2UiLCJpbnRsIiwibGVnZW5kIiwicmF0aW8iLCJyZXNvbHV0aW9uIiwiZXhwb3J0aW5nIiwiRVhQT1JUX0lNR19SQVRJT19PUFRJT05TIiwiZmlsdGVyIiwib3AiLCJoaWRkZW4iLCJtYXAiLCJpZCIsImxhYmVsIiwiRVhQT1JUX0lNR19SRVNPTFVUSU9OX09QVElPTlMiLCJhdmFpbGFibGUiLCJmb3JtYXRNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBb0JBOztBQUNBOztBQUNBOztBQUdBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHQyw2QkFBT0MsR0FBViw2YkFBckI7O0FBaUNBLElBQU1DLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsR0FBTTtBQUNwQztBQUNBLE1BQU1DLGdCQUFpRCxHQUFHLFNBQXBEQSxnQkFBb0QsT0FPcEQ7QUFBQSxRQU5KQyxJQU1JLFFBTkpBLElBTUk7QUFBQSxRQUxKQyxJQUtJLFFBTEpBLElBS0k7QUFBQSxRQUpKQyxXQUlJLFFBSkpBLFdBSUk7QUFBQSxRQUhKQyxvQkFHSSxRQUhKQSxvQkFHSTtBQUFBLFFBRkpDLGtCQUVJLFFBRkpBLGtCQUVJO0FBQUEsUUFESkMsSUFDSSxRQURKQSxJQUNJO0FBQUEsUUFDR0MsTUFESCxHQUNnQ0osV0FEaEMsQ0FDR0ksTUFESDtBQUFBLFFBQ1dDLEtBRFgsR0FDZ0NMLFdBRGhDLENBQ1dLLEtBRFg7QUFBQSxRQUNrQkMsVUFEbEIsR0FDZ0NOLFdBRGhDLENBQ2tCTSxVQURsQjtBQUdKLDBCQUFVLFlBQU07QUFDZEwsTUFBQUEsb0JBQW9CLENBQUM7QUFDbkJNLFFBQUFBLFNBQVMsRUFBRTtBQURRLE9BQUQsQ0FBcEI7QUFHQSxhQUFPTCxrQkFBUDtBQUNELEtBTEQsRUFLRyxDQUFDRCxvQkFBRCxFQUF1QkMsa0JBQXZCLENBTEg7QUFPQSwwQkFBVSxZQUFNO0FBQ2QsVUFBSUgsSUFBSSxLQUFLQyxXQUFXLENBQUNELElBQXJCLElBQTZCRCxJQUFJLEtBQUtFLFdBQVcsQ0FBQ0YsSUFBdEQsRUFBNEQ7QUFDMURHLFFBQUFBLG9CQUFvQixDQUFDO0FBQ25CRixVQUFBQSxJQUFJLEVBQUpBLElBRG1CO0FBRW5CRCxVQUFBQSxJQUFJLEVBQUpBO0FBRm1CLFNBQUQsQ0FBcEI7QUFJRDtBQUNGLEtBUEQsRUFPRyxDQUFDQyxJQUFELEVBQU9ELElBQVAsRUFBYUUsV0FBYixFQUEwQkMsb0JBQTFCLENBUEg7QUFTQSx3QkFDRSxnQ0FBQyxxQ0FBRDtBQUFvQixNQUFBLFNBQVMsRUFBQztBQUE5QixvQkFDRSxnQ0FBQyxlQUFELHFCQUNFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUU7QUFBdEIsTUFERixDQURGLGVBSUUsZ0NBQUMsOEJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUU7QUFBdEIsTUFKRixlQUtFO0FBQUssTUFBQSxTQUFTLEVBQUMsYUFBZjtBQUE2QixNQUFBLEVBQUUsRUFBQztBQUFoQyxPQUNHTyxvQ0FBeUJDLE1BQXpCLENBQWdDLFVBQUFDLEVBQUU7QUFBQSxhQUFJLENBQUNBLEVBQUUsQ0FBQ0MsTUFBUjtBQUFBLEtBQWxDLEVBQWtEQyxHQUFsRCxDQUFzRCxVQUFBRixFQUFFO0FBQUEsMEJBQ3ZELGdDQUFDLGtDQUFEO0FBQ0UsUUFBQSxHQUFHLEVBQUVBLEVBQUUsQ0FBQ0csRUFEVjtBQUVFLFFBQUEsUUFBUSxFQUFFUixLQUFLLEtBQUtLLEVBQUUsQ0FBQ0csRUFGekI7QUFHRSxRQUFBLE9BQU8sRUFBRTtBQUFBLGlCQUFNWixvQkFBb0IsQ0FBQztBQUFDSSxZQUFBQSxLQUFLLEVBQUVLLEVBQUUsQ0FBQ0c7QUFBWCxXQUFELENBQTFCO0FBQUE7QUFIWCxzQkFLRSxnQ0FBQyw4QkFBRDtBQUFrQixRQUFBLEVBQUUsRUFBRUgsRUFBRSxDQUFDSTtBQUF6QixRQUxGLEVBTUdULEtBQUssS0FBS0ssRUFBRSxDQUFDRyxFQUFiLGlCQUFtQixnQ0FBQyw0QkFBRCxPQU50QixDQUR1RDtBQUFBLEtBQXhELENBREgsQ0FMRixDQURGLGVBbUJFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUU7QUFBdEIsTUFERixDQURGLGVBSUUsZ0NBQUMsOEJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUU7QUFBdEIsTUFKRixlQUtFO0FBQUssTUFBQSxTQUFTLEVBQUMsYUFBZjtBQUE2QixNQUFBLEVBQUUsRUFBQztBQUFoQyxPQUNHRSx5Q0FBOEJILEdBQTlCLENBQWtDLFVBQUFGLEVBQUU7QUFBQSwwQkFDbkMsZ0NBQUMsa0NBQUQ7QUFDRSxRQUFBLEdBQUcsRUFBRUEsRUFBRSxDQUFDRyxFQURWO0FBRUUsUUFBQSxRQUFRLEVBQUVQLFVBQVUsS0FBS0ksRUFBRSxDQUFDRyxFQUY5QjtBQUdFLFFBQUEsT0FBTyxFQUFFO0FBQUEsaUJBQU1ILEVBQUUsQ0FBQ00sU0FBSCxJQUFnQmYsb0JBQW9CLENBQUM7QUFBQ0ssWUFBQUEsVUFBVSxFQUFFSSxFQUFFLENBQUNHO0FBQWhCLFdBQUQsQ0FBMUM7QUFBQTtBQUhYLFNBS0dILEVBQUUsQ0FBQ0ksS0FMTixFQU1HUixVQUFVLEtBQUtJLEVBQUUsQ0FBQ0csRUFBbEIsaUJBQXdCLGdDQUFDLDRCQUFELE9BTjNCLENBRG1DO0FBQUEsS0FBcEMsQ0FESCxDQUxGLENBbkJGLGVBcUNFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUU7QUFBdEIsTUFERixDQURGLGVBSUUsZ0NBQUMsa0JBQUQ7QUFDRSxNQUFBLElBQUksRUFBQyxVQURQO0FBRUUsTUFBQSxFQUFFLEVBQUMsZ0JBRkw7QUFHRSxNQUFBLE9BQU8sRUFBRVQsTUFIWDtBQUlFLE1BQUEsS0FBSyxFQUFFRCxJQUFJLENBQUNjLGFBQUwsQ0FBbUI7QUFBQ0osUUFBQUEsRUFBRSxFQUFFO0FBQUwsT0FBbkIsQ0FKVDtBQUtFLE1BQUEsUUFBUSxFQUFFO0FBQUEsZUFBTVosb0JBQW9CLENBQUM7QUFBQ0csVUFBQUEsTUFBTSxFQUFFLENBQUNBO0FBQVYsU0FBRCxDQUExQjtBQUFBO0FBTFosTUFKRixDQXJDRixDQURGLGVBbURFLGdDQUFDLHdCQUFEO0FBQWMsTUFBQSxXQUFXLEVBQUVKO0FBQTNCLE1BbkRGLENBREY7QUF1REQsR0FqRkQ7O0FBbUZBLFNBQU8sMkJBQVdILGdCQUFYLENBQVA7QUFDRCxDQXRGRDs7ZUF3RmVELHVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBJbWFnZVByZXZpZXcgZnJvbSAnLi4vY29tbW9uL2ltYWdlLXByZXZpZXcnO1xuaW1wb3J0IHtTZXRFeHBvcnRJbWFnZVNldHRpbmdVcGRhdGVyQWN0aW9ufSBmcm9tICdAa2VwbGVyLmdsL2FjdGlvbnMnO1xuXG5pbXBvcnQge1xuICBFWFBPUlRfSU1HX1JBVElPX09QVElPTlMsXG4gIEVYUE9SVF9JTUdfUkVTT0xVVElPTl9PUFRJT05TLFxuICBFeHBvcnRJbWFnZVxufSBmcm9tICdAa2VwbGVyLmdsL2NvbnN0YW50cyc7XG5cbmltcG9ydCB7U3R5bGVkTW9kYWxDb250ZW50LCBTZWxlY3Rpb25CdXR0b24sIENoZWNrTWFya30gZnJvbSAnLi4vY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnLi4vY29tbW9uL3N3aXRjaCc7XG5pbXBvcnQge2luamVjdEludGwsIEludGxTaGFwZX0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQge0Zvcm1hdHRlZE1lc3NhZ2V9IGZyb20gJ0BrZXBsZXIuZ2wvbG9jYWxpemF0aW9uJztcblxuY29uc3QgSW1hZ2VPcHRpb25MaXN0ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIHdpZHRoOiAyNTBweDtcblxuICAuaW1hZ2Utb3B0aW9uLXNlY3Rpb24ge1xuICAgIC5pbWFnZS1vcHRpb24tc2VjdGlvbi10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5idXR0b24tbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBhZGRpbmc6IDhweCAwcHg7XG4gIH1cblxuICBpbnB1dCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhwb3J0SW1hZ2VNb2RhbFByb3BzIHtcbiAgZXhwb3J0SW1hZ2U6IEV4cG9ydEltYWdlO1xuICBtYXBXOiBudW1iZXI7XG4gIG1hcEg6IG51bWJlcjtcbiAgb25VcGRhdGVJbWFnZVNldHRpbmc6IChwYXlsb2FkOiBTZXRFeHBvcnRJbWFnZVNldHRpbmdVcGRhdGVyQWN0aW9uWydwYXlsb2FkJ10pID0+IHZvaWQ7XG4gIGNsZWFudXBFeHBvcnRJbWFnZTogKCkgPT4gdm9pZDtcbiAgaW50bDogSW50bFNoYXBlO1xufVxuXG5jb25zdCBFeHBvcnRJbWFnZU1vZGFsRmFjdG9yeSA9ICgpID0+IHtcbiAgLyoqIEB0eXBlIHt0eXBlb2YgaW1wb3J0KCcuL2V4cG9ydC1pbWFnZS1tb2RhbCcpLkV4cG9ydEltYWdlTW9kYWx9ICovXG4gIGNvbnN0IEV4cG9ydEltYWdlTW9kYWw6IFJlYWN0LkZDPEV4cG9ydEltYWdlTW9kYWxQcm9wcz4gPSAoe1xuICAgIG1hcFcsXG4gICAgbWFwSCxcbiAgICBleHBvcnRJbWFnZSxcbiAgICBvblVwZGF0ZUltYWdlU2V0dGluZyxcbiAgICBjbGVhbnVwRXhwb3J0SW1hZ2UsXG4gICAgaW50bFxuICB9KSA9PiB7XG4gICAgY29uc3Qge2xlZ2VuZCwgcmF0aW8sIHJlc29sdXRpb259ID0gZXhwb3J0SW1hZ2U7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgb25VcGRhdGVJbWFnZVNldHRpbmcoe1xuICAgICAgICBleHBvcnRpbmc6IHRydWVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNsZWFudXBFeHBvcnRJbWFnZTtcbiAgICB9LCBbb25VcGRhdGVJbWFnZVNldHRpbmcsIGNsZWFudXBFeHBvcnRJbWFnZV0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChtYXBIICE9PSBleHBvcnRJbWFnZS5tYXBIIHx8IG1hcFcgIT09IGV4cG9ydEltYWdlLm1hcFcpIHtcbiAgICAgICAgb25VcGRhdGVJbWFnZVNldHRpbmcoe1xuICAgICAgICAgIG1hcEgsXG4gICAgICAgICAgbWFwV1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBbbWFwSCwgbWFwVywgZXhwb3J0SW1hZ2UsIG9uVXBkYXRlSW1hZ2VTZXR0aW5nXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFN0eWxlZE1vZGFsQ29udGVudCBjbGFzc05hbWU9XCJleHBvcnQtaW1hZ2UtbW9kYWxcIj5cbiAgICAgICAgPEltYWdlT3B0aW9uTGlzdD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLW9wdGlvbi1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLW9wdGlvbi1zZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0SW1hZ2UucmF0aW9UaXRsZSd9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0SW1hZ2UucmF0aW9EZXNjcmlwdGlvbid9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1saXN0XCIgaWQ9XCJleHBvcnQtaW1hZ2UtbW9kYWxfX29wdGlvbl9yYXRpb1wiPlxuICAgICAgICAgICAgICB7RVhQT1JUX0lNR19SQVRJT19PUFRJT05TLmZpbHRlcihvcCA9PiAhb3AuaGlkZGVuKS5tYXAob3AgPT4gKFxuICAgICAgICAgICAgICAgIDxTZWxlY3Rpb25CdXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17b3AuaWR9XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17cmF0aW8gPT09IG9wLmlkfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25VcGRhdGVJbWFnZVNldHRpbmcoe3JhdGlvOiBvcC5pZH0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXtvcC5sYWJlbH0gLz5cbiAgICAgICAgICAgICAgICAgIHtyYXRpbyA9PT0gb3AuaWQgJiYgPENoZWNrTWFyayAvPn1cbiAgICAgICAgICAgICAgICA8L1NlbGVjdGlvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLW9wdGlvbi1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLW9wdGlvbi1zZWN0aW9uLXRpdGxlXCI+XG4gICAgICAgICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbW9kYWwuZXhwb3J0SW1hZ2UucmVzb2x1dGlvblRpdGxlJ30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRJbWFnZS5yZXNvbHV0aW9uRGVzY3JpcHRpb24nfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tbGlzdFwiIGlkPVwiZXhwb3J0LWltYWdlLW1vZGFsX19vcHRpb25fcmVzb2x1dGlvblwiPlxuICAgICAgICAgICAgICB7RVhQT1JUX0lNR19SRVNPTFVUSU9OX09QVElPTlMubWFwKG9wID0+IChcbiAgICAgICAgICAgICAgICA8U2VsZWN0aW9uQnV0dG9uXG4gICAgICAgICAgICAgICAgICBrZXk9e29wLmlkfVxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3Jlc29sdXRpb24gPT09IG9wLmlkfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3AuYXZhaWxhYmxlICYmIG9uVXBkYXRlSW1hZ2VTZXR0aW5nKHtyZXNvbHV0aW9uOiBvcC5pZH0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtvcC5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIHtyZXNvbHV0aW9uID09PSBvcC5pZCAmJiA8Q2hlY2tNYXJrIC8+fVxuICAgICAgICAgICAgICAgIDwvU2VsZWN0aW9uQnV0dG9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utb3B0aW9uLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2Utb3B0aW9uLXNlY3Rpb24tdGl0bGVcIj5cbiAgICAgICAgICAgICAgPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9eydtb2RhbC5leHBvcnRJbWFnZS5tYXBMZWdlbmRUaXRsZSd9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgaWQ9XCJhZGQtbWFwLWxlZ2VuZFwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2xlZ2VuZH1cbiAgICAgICAgICAgICAgbGFiZWw9e2ludGwuZm9ybWF0TWVzc2FnZSh7aWQ6ICdtb2RhbC5leHBvcnRJbWFnZS5tYXBMZWdlbmRBZGQnfSl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvblVwZGF0ZUltYWdlU2V0dGluZyh7bGVnZW5kOiAhbGVnZW5kfSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ltYWdlT3B0aW9uTGlzdD5cbiAgICAgICAgPEltYWdlUHJldmlldyBleHBvcnRJbWFnZT17ZXhwb3J0SW1hZ2V9IC8+XG4gICAgICA8L1N0eWxlZE1vZGFsQ29udGVudD5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBpbmplY3RJbnRsKEV4cG9ydEltYWdlTW9kYWwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwb3J0SW1hZ2VNb2RhbEZhY3Rvcnk7XG4iXX0=