"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalTabItem = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@kepler.gl/styles");

var _reactIntl = require("react-intl");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var ModalTab = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  align-items: flex-end;\n  display: flex;\n  border-bottom: 1px solid #d8d8d8;\n  margin-bottom: 32px;\n  justify-content: space-between;\n\n  .load-data-modal__tab__inner {\n    display: flex;\n    width: 100%;\n  }\n\n  .load-data-modal__tab__item.active {\n    color: ", ";\n    border-bottom: 3px solid ", ";\n    font-weight: 500;\n  }\n\n  ", ";\n"])), function (props) {
  return props.theme.textColorLT;
}, function (props) {
  return props.theme.textColorLT;
}, _styles.media.portable(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    font-size: 12px;\n  "]))));

var StyledLoadDataModalTabItem = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n  border-bottom: 3px solid transparent;\n  cursor: pointer;\n  margin-left: 32px;\n  padding: 16px 0;\n  font-size: 14px;\n  font-weight: 400;\n  color: ", ";\n\n  ", ";\n\n  :first-child {\n    margin-left: 0;\n    padding-left: 0;\n  }\n\n  :hover {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.subtextColorLT;
}, _styles.media.portable(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n    margin-left: 16px;\n    font-size: 12px;\n  "]))), function (props) {
  return props.theme.textColorLT;
});

var noop = function noop() {};

var ModalTabItem = function ModalTabItem(_ref) {
  var currentMethod = _ref.currentMethod,
      method = _ref.method,
      toggleMethod = _ref.toggleMethod;
  var onClick = (0, _react.useCallback)(function () {
    return toggleMethod(method);
  }, [method, toggleMethod]);
  var intl = (0, _reactIntl.useIntl)();
  return method.tabElementType ? /*#__PURE__*/_react["default"].createElement(method.tabElementType, {
    onClick: onClick,
    intl: intl
  }) : /*#__PURE__*/_react["default"].createElement(StyledLoadDataModalTabItem, {
    className: (0, _classnames["default"])('load-data-modal__tab__item', {
      active: currentMethod && method.id === currentMethod
    }),
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("div", null, method.label ? /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, {
    id: method.label
  }) : method.id));
};

exports.ModalTabItem = ModalTabItem;

function ModalTabsFactory() {
  var ModalTabs = function ModalTabs(_ref2) {
    var currentMethod = _ref2.currentMethod,
        toggleMethod = _ref2.toggleMethod,
        loadingMethods = _ref2.loadingMethods;
    return /*#__PURE__*/_react["default"].createElement(ModalTab, {
      className: "load-data-modal__tab"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "load-data-modal__tab__inner"
    }, loadingMethods.map(function (method) {
      return /*#__PURE__*/_react["default"].createElement(ModalTabItem, {
        key: method.id,
        method: method,
        currentMethod: currentMethod,
        toggleMethod: toggleMethod
      });
    })));
  };

  ModalTabs.propTypes = {
    toggleMethod: _propTypes["default"].func.isRequired,
    currentMethod: _propTypes["default"].string,
    loadingMethods: _propTypes["default"].arrayOf(_propTypes["default"].object)
  };
  ModalTabs.defaultProps = {
    toggleMethod: noop,
    currentMethod: null,
    loadingMethods: []
  };
  return ModalTabs;
}

var _default = ModalTabsFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9tb2RhbHMvbW9kYWwtdGFicy50c3giXSwibmFtZXMiOlsiTW9kYWxUYWIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwidGV4dENvbG9yTFQiLCJtZWRpYSIsInBvcnRhYmxlIiwiU3R5bGVkTG9hZERhdGFNb2RhbFRhYkl0ZW0iLCJzdWJ0ZXh0Q29sb3JMVCIsIm5vb3AiLCJNb2RhbFRhYkl0ZW0iLCJjdXJyZW50TWV0aG9kIiwibWV0aG9kIiwidG9nZ2xlTWV0aG9kIiwib25DbGljayIsImludGwiLCJ0YWJFbGVtZW50VHlwZSIsImFjdGl2ZSIsImlkIiwibGFiZWwiLCJNb2RhbFRhYnNGYWN0b3J5IiwiTW9kYWxUYWJzIiwibG9hZGluZ01ldGhvZHMiLCJtYXAiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImFycmF5T2YiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFvQkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFHQSxJQUFNQSxRQUFRLEdBQUdDLDZCQUFPQyxHQUFWLDJiQWFELFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBaEI7QUFBQSxDQWJKLEVBY2lCLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBaEI7QUFBQSxDQWR0QixFQWtCVkMsY0FBTUMsUUFsQkksbUhBQWQ7O0FBdUJBLElBQU1DLDBCQUEwQixHQUFHUCw2QkFBT0MsR0FBViwrV0FPckIsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxjQUFoQjtBQUFBLENBUGdCLEVBUzVCSCxjQUFNQyxRQVRzQiw0SUFvQm5CLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBaEI7QUFBQSxDQXBCYyxDQUFoQzs7QUF3QkEsSUFBTUssSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQVFPLElBQU1DLFlBQXlDLEdBQUcsU0FBNUNBLFlBQTRDLE9BSW5EO0FBQUEsTUFISkMsYUFHSSxRQUhKQSxhQUdJO0FBQUEsTUFGSkMsTUFFSSxRQUZKQSxNQUVJO0FBQUEsTUFESkMsWUFDSSxRQURKQSxZQUNJO0FBQ0osTUFBTUMsT0FBTyxHQUFHLHdCQUFZO0FBQUEsV0FBTUQsWUFBWSxDQUFDRCxNQUFELENBQWxCO0FBQUEsR0FBWixFQUF3QyxDQUFDQSxNQUFELEVBQVNDLFlBQVQsQ0FBeEMsQ0FBaEI7QUFDQSxNQUFNRSxJQUFJLEdBQUcseUJBQWI7QUFFQSxTQUFPSCxNQUFNLENBQUNJLGNBQVAsZ0JBQ0wsZ0NBQUMsTUFBRCxDQUFRLGNBQVI7QUFBdUIsSUFBQSxPQUFPLEVBQUVGLE9BQWhDO0FBQXlDLElBQUEsSUFBSSxFQUFFQztBQUEvQyxJQURLLGdCQUdMLGdDQUFDLDBCQUFEO0FBQ0UsSUFBQSxTQUFTLEVBQUUsNEJBQVcsNEJBQVgsRUFBeUM7QUFDbERFLE1BQUFBLE1BQU0sRUFBRU4sYUFBYSxJQUFJQyxNQUFNLENBQUNNLEVBQVAsS0FBY1A7QUFEVyxLQUF6QyxDQURiO0FBSUUsSUFBQSxPQUFPLEVBQUVHO0FBSlgsa0JBTUUsNkNBQU1GLE1BQU0sQ0FBQ08sS0FBUCxnQkFBZSxnQ0FBQywyQkFBRDtBQUFrQixJQUFBLEVBQUUsRUFBRVAsTUFBTSxDQUFDTztBQUE3QixJQUFmLEdBQXdEUCxNQUFNLENBQUNNLEVBQXJFLENBTkYsQ0FIRjtBQVlELENBcEJNOzs7O0FBc0JQLFNBQVNFLGdCQUFULEdBQTRCO0FBQzFCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsUUFBRVYsYUFBRixTQUFFQSxhQUFGO0FBQUEsUUFBaUJFLFlBQWpCLFNBQWlCQSxZQUFqQjtBQUFBLFFBQStCUyxjQUEvQixTQUErQkEsY0FBL0I7QUFBQSx3QkFDaEIsZ0NBQUMsUUFBRDtBQUFVLE1BQUEsU0FBUyxFQUFDO0FBQXBCLG9CQUNFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixPQUNHQSxjQUFjLENBQUNDLEdBQWYsQ0FBbUIsVUFBQVgsTUFBTTtBQUFBLDBCQUN4QixnQ0FBQyxZQUFEO0FBQ0UsUUFBQSxHQUFHLEVBQUVBLE1BQU0sQ0FBQ00sRUFEZDtBQUVFLFFBQUEsTUFBTSxFQUFFTixNQUZWO0FBR0UsUUFBQSxhQUFhLEVBQUVELGFBSGpCO0FBSUUsUUFBQSxZQUFZLEVBQUVFO0FBSmhCLFFBRHdCO0FBQUEsS0FBekIsQ0FESCxDQURGLENBRGdCO0FBQUEsR0FBbEI7O0FBZUFRLEVBQUFBLFNBQVMsQ0FBQ0csU0FBVixHQUFzQjtBQUNwQlgsSUFBQUEsWUFBWSxFQUFFWSxzQkFBVUMsSUFBVixDQUFlQyxVQURUO0FBRXBCaEIsSUFBQUEsYUFBYSxFQUFFYyxzQkFBVUcsTUFGTDtBQUdwQk4sSUFBQUEsY0FBYyxFQUFFRyxzQkFBVUksT0FBVixDQUFrQkosc0JBQVVLLE1BQTVCO0FBSEksR0FBdEI7QUFNQVQsRUFBQUEsU0FBUyxDQUFDVSxZQUFWLEdBQXlCO0FBQ3ZCbEIsSUFBQUEsWUFBWSxFQUFFSixJQURTO0FBRXZCRSxJQUFBQSxhQUFhLEVBQUUsSUFGUTtBQUd2QlcsSUFBQUEsY0FBYyxFQUFFO0FBSE8sR0FBekI7QUFNQSxTQUFPRCxTQUFQO0FBQ0Q7O2VBRWNELGdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHttZWRpYX0gZnJvbSAnQGtlcGxlci5nbC9zdHlsZXMnO1xuaW1wb3J0IHtGb3JtYXR0ZWRNZXNzYWdlLCB1c2VJbnRsfSBmcm9tICdyZWFjdC1pbnRsJztcbmltcG9ydCB7TG9hZGluZ01ldGhvZH0gZnJvbSAnLi9sb2FkLWRhdGEtbW9kYWwnO1xuXG5jb25zdCBNb2RhbFRhYiA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkOGQ4ZDg7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAubG9hZC1kYXRhLW1vZGFsX190YWJfX2lubmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmxvYWQtZGF0YS1tb2RhbF9fdGFiX19pdGVtLmFjdGl2ZSB7XG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yTFR9O1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHRDb2xvckxUfTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgJHttZWRpYS5wb3J0YWJsZWBcbiAgICBmb250LXNpemU6IDEycHg7XG4gIGB9O1xuYDtcblxuY29uc3QgU3R5bGVkTG9hZERhdGFNb2RhbFRhYkl0ZW0gPSBzdHlsZWQuZGl2YFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3JMVH07XG5cbiAgJHttZWRpYS5wb3J0YWJsZWBcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIGB9O1xuXG4gIDpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG5cbiAgOmhvdmVyIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JMVH07XG4gIH1cbmA7XG5cbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuaW50ZXJmYWNlIE1vZGFsVGFiSXRlbVByb3BzIHtcbiAgY3VycmVudE1ldGhvZD86IHN0cmluZztcbiAgbWV0aG9kOiBMb2FkaW5nTWV0aG9kO1xuICB0b2dnbGVNZXRob2Q6IChtZXRob2Q6IExvYWRpbmdNZXRob2QpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBNb2RhbFRhYkl0ZW06IFJlYWN0LkZDPE1vZGFsVGFiSXRlbVByb3BzPiA9ICh7XG4gIGN1cnJlbnRNZXRob2QsXG4gIG1ldGhvZCxcbiAgdG9nZ2xlTWV0aG9kXG59KSA9PiB7XG4gIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB0b2dnbGVNZXRob2QobWV0aG9kKSwgW21ldGhvZCwgdG9nZ2xlTWV0aG9kXSk7XG4gIGNvbnN0IGludGwgPSB1c2VJbnRsKCk7XG5cbiAgcmV0dXJuIG1ldGhvZC50YWJFbGVtZW50VHlwZSA/IChcbiAgICA8bWV0aG9kLnRhYkVsZW1lbnRUeXBlIG9uQ2xpY2s9e29uQ2xpY2t9IGludGw9e2ludGx9IC8+XG4gICkgOiAoXG4gICAgPFN0eWxlZExvYWREYXRhTW9kYWxUYWJJdGVtXG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2xvYWQtZGF0YS1tb2RhbF9fdGFiX19pdGVtJywge1xuICAgICAgICBhY3RpdmU6IGN1cnJlbnRNZXRob2QgJiYgbWV0aG9kLmlkID09PSBjdXJyZW50TWV0aG9kXG4gICAgICB9KX1cbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgPlxuICAgICAgPGRpdj57bWV0aG9kLmxhYmVsID8gPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9e21ldGhvZC5sYWJlbH0gLz4gOiBtZXRob2QuaWR9PC9kaXY+XG4gICAgPC9TdHlsZWRMb2FkRGF0YU1vZGFsVGFiSXRlbT5cbiAgKTtcbn07XG5cbmZ1bmN0aW9uIE1vZGFsVGFic0ZhY3RvcnkoKSB7XG4gIGNvbnN0IE1vZGFsVGFicyA9ICh7Y3VycmVudE1ldGhvZCwgdG9nZ2xlTWV0aG9kLCBsb2FkaW5nTWV0aG9kc30pID0+IChcbiAgICA8TW9kYWxUYWIgY2xhc3NOYW1lPVwibG9hZC1kYXRhLW1vZGFsX190YWJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZC1kYXRhLW1vZGFsX190YWJfX2lubmVyXCI+XG4gICAgICAgIHtsb2FkaW5nTWV0aG9kcy5tYXAobWV0aG9kID0+IChcbiAgICAgICAgICA8TW9kYWxUYWJJdGVtXG4gICAgICAgICAgICBrZXk9e21ldGhvZC5pZH1cbiAgICAgICAgICAgIG1ldGhvZD17bWV0aG9kfVxuICAgICAgICAgICAgY3VycmVudE1ldGhvZD17Y3VycmVudE1ldGhvZH1cbiAgICAgICAgICAgIHRvZ2dsZU1ldGhvZD17dG9nZ2xlTWV0aG9kfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9Nb2RhbFRhYj5cbiAgKTtcblxuICBNb2RhbFRhYnMucHJvcFR5cGVzID0ge1xuICAgIHRvZ2dsZU1ldGhvZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjdXJyZW50TWV0aG9kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxvYWRpbmdNZXRob2RzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KVxuICB9O1xuXG4gIE1vZGFsVGFicy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdG9nZ2xlTWV0aG9kOiBub29wLFxuICAgIGN1cnJlbnRNZXRob2Q6IG51bGwsXG4gICAgbG9hZGluZ01ldGhvZHM6IFtdXG4gIH07XG5cbiAgcmV0dXJuIE1vZGFsVGFicztcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxUYWJzRmFjdG9yeTtcbiJdfQ==