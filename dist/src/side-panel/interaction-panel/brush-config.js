"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _rangeSlider = _interopRequireDefault(require("../../common/range-slider"));

var _styledComponents = require("../../common/styled-components");

var _reducers = require("@kepler.gl/reducers");

var _localization = require("@kepler.gl/localization");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

BrushConfigFactory.deps = [_rangeSlider["default"]];

function BrushConfigFactory(RangeSlider) {
  var BrushConfig = function BrushConfig(_ref) {
    var config = _ref.config,
        _onChange = _ref.onChange;
    return /*#__PURE__*/_react["default"].createElement(_styledComponents.SidePanelSection, null, /*#__PURE__*/_react["default"].createElement(_styledComponents.PanelLabel, null, /*#__PURE__*/_react["default"].createElement(_localization.FormattedMessage, {
      id: 'misc.brushRadius'
    })), /*#__PURE__*/_react["default"].createElement(RangeSlider, {
      range: _reducers.BRUSH_CONFIG.range,
      value0: 0,
      value1: config.size || 10 / 2,
      step: 0.1,
      isRanged: false,
      onChange: function onChange(value) {
        return _onChange(_objectSpread(_objectSpread({}, config), {}, {
          size: value[1]
        }));
      },
      inputTheme: "secondary"
    }));
  };

  return BrushConfig;
}

var _default = BrushConfigFactory;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9zaWRlLXBhbmVsL2ludGVyYWN0aW9uLXBhbmVsL2JydXNoLWNvbmZpZy50c3giXSwibmFtZXMiOlsiQnJ1c2hDb25maWdGYWN0b3J5IiwiZGVwcyIsIlJhbmdlU2xpZGVyRmFjdG9yeSIsIlJhbmdlU2xpZGVyIiwiQnJ1c2hDb25maWciLCJjb25maWciLCJvbkNoYW5nZSIsIkJSVVNIX0NPTkZJRyIsInJhbmdlIiwic2l6ZSIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUFBLGtCQUFrQixDQUFDQyxJQUFuQixHQUEwQixDQUFDQyx1QkFBRCxDQUExQjs7QUFTQSxTQUFTRixrQkFBVCxDQUE0QkcsV0FBNUIsRUFBZ0Y7QUFDOUUsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxRQUFFQyxNQUFGLFFBQUVBLE1BQUY7QUFBQSxRQUFVQyxTQUFWLFFBQVVBLFFBQVY7QUFBQSx3QkFDbEIsZ0NBQUMsa0NBQUQscUJBQ0UsZ0NBQUMsNEJBQUQscUJBQ0UsZ0NBQUMsOEJBQUQ7QUFBa0IsTUFBQSxFQUFFLEVBQUU7QUFBdEIsTUFERixDQURGLGVBSUUsZ0NBQUMsV0FBRDtBQUNFLE1BQUEsS0FBSyxFQUFFQyx1QkFBYUMsS0FEdEI7QUFFRSxNQUFBLE1BQU0sRUFBRSxDQUZWO0FBR0UsTUFBQSxNQUFNLEVBQUVILE1BQU0sQ0FBQ0ksSUFBUCxJQUFlLEtBQUssQ0FIOUI7QUFJRSxNQUFBLElBQUksRUFBRSxHQUpSO0FBS0UsTUFBQSxRQUFRLEVBQUUsS0FMWjtBQU1FLE1BQUEsUUFBUSxFQUFFLGtCQUFBQyxLQUFLO0FBQUEsZUFBSUosU0FBUSxpQ0FBS0QsTUFBTDtBQUFhSSxVQUFBQSxJQUFJLEVBQUVDLEtBQUssQ0FBQyxDQUFEO0FBQXhCLFdBQVo7QUFBQSxPQU5qQjtBQU9FLE1BQUEsVUFBVSxFQUFDO0FBUGIsTUFKRixDQURrQjtBQUFBLEdBQXBCOztBQWlCQSxTQUFPTixXQUFQO0FBQ0Q7O2VBRWNKLGtCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSYW5nZVNsaWRlckZhY3RvcnkgZnJvbSAnLi4vLi4vY29tbW9uL3JhbmdlLXNsaWRlcic7XG5cbmltcG9ydCB7UGFuZWxMYWJlbCwgU2lkZVBhbmVsU2VjdGlvbn0gZnJvbSAnLi4vLi4vY29tbW9uL3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7QlJVU0hfQ09ORklHfSBmcm9tICdAa2VwbGVyLmdsL3JlZHVjZXJzJztcbmltcG9ydCB7Rm9ybWF0dGVkTWVzc2FnZX0gZnJvbSAnQGtlcGxlci5nbC9sb2NhbGl6YXRpb24nO1xuXG5CcnVzaENvbmZpZ0ZhY3RvcnkuZGVwcyA9IFtSYW5nZVNsaWRlckZhY3RvcnldO1xuXG50eXBlIEJydXNoQ29uZmlnUHJvcHMgPSB7XG4gIGNvbmZpZzoge1xuICAgIHNpemU6IG51bWJlcjtcbiAgfTtcbiAgb25DaGFuZ2U6IChjb25maWc6IHtzaXplOiBudW1iZXJ9KSA9PiB2b2lkO1xufTtcblxuZnVuY3Rpb24gQnJ1c2hDb25maWdGYWN0b3J5KFJhbmdlU2xpZGVyOiBSZXR1cm5UeXBlPHR5cGVvZiBSYW5nZVNsaWRlckZhY3Rvcnk+KSB7XG4gIGNvbnN0IEJydXNoQ29uZmlnID0gKHtjb25maWcsIG9uQ2hhbmdlfTogQnJ1c2hDb25maWdQcm9wcykgPT4gKFxuICAgIDxTaWRlUGFuZWxTZWN0aW9uPlxuICAgICAgPFBhbmVsTGFiZWw+XG4gICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPXsnbWlzYy5icnVzaFJhZGl1cyd9IC8+XG4gICAgICA8L1BhbmVsTGFiZWw+XG4gICAgICA8UmFuZ2VTbGlkZXJcbiAgICAgICAgcmFuZ2U9e0JSVVNIX0NPTkZJRy5yYW5nZX1cbiAgICAgICAgdmFsdWUwPXswfVxuICAgICAgICB2YWx1ZTE9e2NvbmZpZy5zaXplIHx8IDEwIC8gMn1cbiAgICAgICAgc3RlcD17MC4xfVxuICAgICAgICBpc1JhbmdlZD17ZmFsc2V9XG4gICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBvbkNoYW5nZSh7Li4uY29uZmlnLCBzaXplOiB2YWx1ZVsxXX0pfVxuICAgICAgICBpbnB1dFRoZW1lPVwic2Vjb25kYXJ5XCJcbiAgICAgIC8+XG4gICAgPC9TaWRlUGFuZWxTZWN0aW9uPlxuICApO1xuXG4gIHJldHVybiBCcnVzaENvbmZpZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJ1c2hDb25maWdGYWN0b3J5O1xuIl19