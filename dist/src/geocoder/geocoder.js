"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.testForCoordinates = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _mapbox = _interopRequireDefault(require("mapbox"));

var _reactIntl = require("react-intl");

var _viewportMercatorProject = require("viewport-mercator-project");

var _constants = require("@kepler.gl/constants");

var _styledComponents2 = require("../common/styled-components");

var _icons = require("../common/icons");

var _templateObject;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// matches only valid coordinates
var COORDINATE_REGEX_STRING = '^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?),\\s*[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)';
var COORDINATE_REGEX = RegExp(COORDINATE_REGEX_STRING);
var PLACEHOLDER = 'Enter an address or coordinates, ex 37.79,-122.40';
var debounceTimeout = null;

var testForCoordinates = function testForCoordinates(query) {
  var isValid = COORDINATE_REGEX.test(query.trim());

  if (!isValid) {
    return [isValid, query];
  }

  var tokens = query.trim().split(',');
  return [isValid, Number(tokens[0]), Number(tokens[1])];
};

exports.testForCoordinates = testForCoordinates;

var StyledContainer = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  color: ", ";\n\n  .geocoder-input {\n    box-shadow: ", ";\n\n    .geocoder-input__search {\n      position: absolute;\n      height: ", "px;\n      width: 30px;\n      padding-left: 6px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: ", ";\n    }\n\n    input {\n      padding: 4px 36px;\n      height: ", "px;\n      caret-color: unset;\n    }\n  }\n\n  .geocoder-results {\n    box-shadow: ", ";\n    background-color: ", ";\n    position: absolute;\n    width: ", "px;\n    margin-top: ", "px;\n  }\n\n  .geocoder-item {\n    ", ";\n    ", ";\n\n    &.active {\n      background-color: ", ";\n    }\n  }\n\n  .remove-result {\n    position: absolute;\n    right: 16px;\n    top: 0px;\n    height: ", "px;\n    display: flex;\n    align-items: center;\n\n    :hover {\n      cursor: pointer;\n      color: ", ";\n    }\n  }\n"])), function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.boxShadow;
}, function (props) {
  return props.theme.geocoderInputHeight;
}, function (props) {
  return props.theme.subtextColor;
}, function (props) {
  return props.theme.geocoderInputHeight;
}, function (props) {
  return props.theme.boxShadow;
}, function (props) {
  return props.theme.panelBackground;
}, function (props) {
  return Number.isFinite(props.width) ? props.width : props.theme.geocoderWidth;
}, function (props) {
  return props.theme.dropdownWapperMargin;
}, function (props) {
  return props.theme.dropdownListItem;
}, function (props) {
  return props.theme.textTruncate;
}, function (props) {
  return props.theme.dropdownListHighlightBg;
}, function (props) {
  return props.theme.geocoderInputHeight;
}, function (props) {
  return props.theme.textColorHl;
});

/** @type {import('./geocoder').GeocoderComponent} */
var GeoCoder = function GeoCoder(_ref) {
  var mapboxApiAccessToken = _ref.mapboxApiAccessToken,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$limit = _ref.limit,
      limit = _ref$limit === void 0 ? 5 : _ref$limit,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 300 : _ref$timeout,
      _ref$formatItem = _ref.formatItem,
      formatItem = _ref$formatItem === void 0 ? function (item) {
    return item.place_name;
  } : _ref$formatItem,
      viewport = _ref.viewport,
      onSelected = _ref.onSelected,
      onDeleteMarker = _ref.onDeleteMarker,
      transitionDuration = _ref.transitionDuration,
      pointZoom = _ref.pointZoom,
      width = _ref.width,
      intl = _ref.intl;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      showResults = _useState4[0],
      setShowResults = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      showDelete = _useState6[0],
      setShowDelete = _useState6[1];
  /** @type {import('./geocoder').Results} */


  var initialResults = [];

  var _useState7 = (0, _react.useState)(initialResults),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      results = _useState8[0],
      setResults = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      selectedIndex = _useState10[0],
      setSelectedIndex = _useState10[1];

  var client = (0, _react.useMemo)(function () {
    return new _mapbox["default"](mapboxApiAccessToken);
  }, [mapboxApiAccessToken]);
  var onChange = (0, _react.useCallback)(function (event) {
    var queryString = event.target.value;
    setInputValue(queryString);
    var resultCoordinates = testForCoordinates(queryString);

    if (resultCoordinates[0]) {
      var _resultCoordinates = (0, _slicedToArray2["default"])(resultCoordinates, 3),
          _ = _resultCoordinates[0],
          latitude = _resultCoordinates[1],
          longitude = _resultCoordinates[2];

      setResults([{
        center: [latitude, longitude],
        place_name: queryString
      }]);
    } else {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }

      debounceTimeout = setTimeout( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(limit > 0 && Boolean(queryString))) {
                  _context.next = 11;
                  break;
                }

                _context.prev = 1;
                _context.next = 4;
                return client.geocodeForward(queryString, {
                  limit: limit
                });

              case 4:
                response = _context.sent;

                if (response.entity.features) {
                  setShowResults(true);
                  setResults(response.entity.features);
                }

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                // TODO: show geocode error
                // eslint-disable-next-line no-console
                console.log(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      })), timeout);
    }
  }, [client, limit, timeout, setResults, setShowResults]);
  var onBlur = (0, _react.useCallback)(function () {
    setTimeout(function () {
      setShowResults(false);
    }, timeout);
  }, [setShowResults, timeout]);
  var onFocus = (0, _react.useCallback)(function () {
    return setShowResults(true);
  }, [setShowResults]);
  var onItemSelected = (0, _react.useCallback)(function (item) {
    var newViewport = new _viewportMercatorProject.WebMercatorViewport(viewport);
    var bbox = item.bbox,
        center = item.center;
    var gotoViewport = bbox ? newViewport.fitBounds([[bbox[0], bbox[1]], [bbox[2], bbox[3]]]) : {
      longitude: center[0],
      latitude: center[1],
      zoom: pointZoom
    };
    var longitude = gotoViewport.longitude,
        latitude = gotoViewport.latitude,
        zoom = gotoViewport.zoom;
    onSelected(_objectSpread(_objectSpread({}, viewport), {
      longitude: longitude,
      latitude: latitude,
      zoom: zoom,
      transitionDuration: transitionDuration
    }), item);
    setShowResults(false);
    setInputValue(formatItem(item));
    setShowDelete(true);
  }, [viewport, onSelected, transitionDuration, pointZoom, formatItem]);
  var onMarkDeleted = (0, _react.useCallback)(function () {
    setShowDelete(false);
    setInputValue('');
    onDeleteMarker === null || onDeleteMarker === void 0 ? void 0 : onDeleteMarker();
  }, [onDeleteMarker]);
  var onKeyDown = (0, _react.useCallback)(function (e) {
    if (!results || results.length === 0) {
      return;
    }

    switch (e.keyCode) {
      case _constants.KeyEvent.DOM_VK_UP:
        setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : selectedIndex);
        break;

      case _constants.KeyEvent.DOM_VK_DOWN:
        setSelectedIndex(selectedIndex < results.length - 1 ? selectedIndex + 1 : selectedIndex);
        break;

      case _constants.KeyEvent.DOM_VK_ENTER:
      case _constants.KeyEvent.DOM_VK_RETURN:
        if (results[selectedIndex]) {
          onItemSelected(results[selectedIndex]);
        }

        break;

      default:
        break;
    }
  }, [results, selectedIndex, setSelectedIndex, onItemSelected]);
  return /*#__PURE__*/_react["default"].createElement(StyledContainer, {
    className: className,
    width: width
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "geocoder-input"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "geocoder-input__search"
  }, /*#__PURE__*/_react["default"].createElement(_icons.Search, {
    height: "20px"
  })), /*#__PURE__*/_react["default"].createElement(_styledComponents2.Input, {
    type: "text",
    onChange: onChange,
    onBlur: onBlur,
    onFocus: onFocus,
    onKeyDown: onKeyDown,
    value: inputValue,
    placeholder: intl ? intl.formatMessage({
      id: 'geocoder.title',
      defaultMessage: PLACEHOLDER
    }) : PLACEHOLDER
  }), showDelete ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "remove-result"
  }, /*#__PURE__*/_react["default"].createElement(_icons.Delete, {
    height: "12px",
    onClick: onMarkDeleted
  })) : null), showResults ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "geocoder-results"
  }, results.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      className: (0, _classnames["default"])('geocoder-item', {
        active: selectedIndex === index
      }),
      onClick: function onClick() {
        return onItemSelected(item);
      }
    }, formatItem(item));
  })) : null);
};

var _default = (0, _reactIntl.injectIntl)(GeoCoder);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NyYy9nZW9jb2Rlci9nZW9jb2Rlci50c3giXSwibmFtZXMiOlsiQ09PUkRJTkFURV9SRUdFWF9TVFJJTkciLCJDT09SRElOQVRFX1JFR0VYIiwiUmVnRXhwIiwiUExBQ0VIT0xERVIiLCJkZWJvdW5jZVRpbWVvdXQiLCJ0ZXN0Rm9yQ29vcmRpbmF0ZXMiLCJxdWVyeSIsImlzVmFsaWQiLCJ0ZXN0IiwidHJpbSIsInRva2VucyIsInNwbGl0IiwiTnVtYmVyIiwiU3R5bGVkQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInRleHRDb2xvciIsImJveFNoYWRvdyIsImdlb2NvZGVySW5wdXRIZWlnaHQiLCJzdWJ0ZXh0Q29sb3IiLCJwYW5lbEJhY2tncm91bmQiLCJpc0Zpbml0ZSIsIndpZHRoIiwiZ2VvY29kZXJXaWR0aCIsImRyb3Bkb3duV2FwcGVyTWFyZ2luIiwiZHJvcGRvd25MaXN0SXRlbSIsInRleHRUcnVuY2F0ZSIsImRyb3Bkb3duTGlzdEhpZ2hsaWdodEJnIiwidGV4dENvbG9ySGwiLCJHZW9Db2RlciIsIm1hcGJveEFwaUFjY2Vzc1Rva2VuIiwiY2xhc3NOYW1lIiwibGltaXQiLCJ0aW1lb3V0IiwiZm9ybWF0SXRlbSIsIml0ZW0iLCJwbGFjZV9uYW1lIiwidmlld3BvcnQiLCJvblNlbGVjdGVkIiwib25EZWxldGVNYXJrZXIiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJwb2ludFpvb20iLCJpbnRsIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJzaG93UmVzdWx0cyIsInNldFNob3dSZXN1bHRzIiwic2hvd0RlbGV0ZSIsInNldFNob3dEZWxldGUiLCJpbml0aWFsUmVzdWx0cyIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwic2VsZWN0ZWRJbmRleCIsInNldFNlbGVjdGVkSW5kZXgiLCJjbGllbnQiLCJNYXBib3hDbGllbnQiLCJvbkNoYW5nZSIsImV2ZW50IiwicXVlcnlTdHJpbmciLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlc3VsdENvb3JkaW5hdGVzIiwiXyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiY2VudGVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIkJvb2xlYW4iLCJnZW9jb2RlRm9yd2FyZCIsInJlc3BvbnNlIiwiZW50aXR5IiwiZmVhdHVyZXMiLCJjb25zb2xlIiwibG9nIiwib25CbHVyIiwib25Gb2N1cyIsIm9uSXRlbVNlbGVjdGVkIiwibmV3Vmlld3BvcnQiLCJXZWJNZXJjYXRvclZpZXdwb3J0IiwiYmJveCIsImdvdG9WaWV3cG9ydCIsImZpdEJvdW5kcyIsInpvb20iLCJvbk1hcmtEZWxldGVkIiwib25LZXlEb3duIiwiZSIsImxlbmd0aCIsImtleUNvZGUiLCJLZXlFdmVudCIsIkRPTV9WS19VUCIsIkRPTV9WS19ET1dOIiwiRE9NX1ZLX0VOVEVSIiwiRE9NX1ZLX1JFVFVSTiIsImZvcm1hdE1lc3NhZ2UiLCJpZCIsImRlZmF1bHRNZXNzYWdlIiwibWFwIiwiaW5kZXgiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFPQTtBQUNBLElBQU1BLHVCQUF1QixHQUMzQixtR0FERjtBQUVBLElBQU1DLGdCQUFnQixHQUFHQyxNQUFNLENBQUNGLHVCQUFELENBQS9CO0FBRUEsSUFBTUcsV0FBVyxHQUFHLG1EQUFwQjtBQUVBLElBQUlDLGVBQXNDLEdBQUcsSUFBN0M7O0FBRU8sSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxLQUFELEVBQTZEO0FBQzdGLE1BQU1DLE9BQU8sR0FBR04sZ0JBQWdCLENBQUNPLElBQWpCLENBQXNCRixLQUFLLENBQUNHLElBQU4sRUFBdEIsQ0FBaEI7O0FBRUEsTUFBSSxDQUFDRixPQUFMLEVBQWM7QUFDWixXQUFPLENBQUNBLE9BQUQsRUFBVUQsS0FBVixDQUFQO0FBQ0Q7O0FBRUQsTUFBTUksTUFBTSxHQUFHSixLQUFLLENBQUNHLElBQU4sR0FBYUUsS0FBYixDQUFtQixHQUFuQixDQUFmO0FBRUEsU0FBTyxDQUFDSixPQUFELEVBQVVLLE1BQU0sQ0FBQ0YsTUFBTSxDQUFDLENBQUQsQ0FBUCxDQUFoQixFQUE2QkUsTUFBTSxDQUFDRixNQUFNLENBQUMsQ0FBRCxDQUFQLENBQW5DLENBQVA7QUFDRCxDQVZNOzs7O0FBWVAsSUFBTUcsZUFBZSxHQUFHQyw2QkFBT0MsR0FBViwrOUJBRVYsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxTQUFoQjtBQUFBLENBRkssRUFLSCxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLFNBQWhCO0FBQUEsQ0FMRixFQVNMLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsbUJBQWhCO0FBQUEsQ0FUQSxFQWVOLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUksWUFBaEI7QUFBQSxDQWZDLEVBb0JMLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsbUJBQWhCO0FBQUEsQ0FwQkEsRUEwQkgsVUFBQUosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxTQUFoQjtBQUFBLENBMUJGLEVBMkJHLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUssZUFBaEI7QUFBQSxDQTNCUixFQTZCUixVQUFBTixLQUFLO0FBQUEsU0FBS0osTUFBTSxDQUFDVyxRQUFQLENBQWdCUCxLQUFLLENBQUNRLEtBQXRCLElBQStCUixLQUFLLENBQUNRLEtBQXJDLEdBQTZDUixLQUFLLENBQUNDLEtBQU4sQ0FBWVEsYUFBOUQ7QUFBQSxDQTdCRyxFQThCSCxVQUFBVCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlTLG9CQUFoQjtBQUFBLENBOUJGLEVBa0NmLFVBQUFWLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVUsZ0JBQWhCO0FBQUEsQ0FsQ1UsRUFtQ2YsVUFBQVgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZVyxZQUFoQjtBQUFBLENBbkNVLEVBc0NLLFVBQUFaLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVksdUJBQWhCO0FBQUEsQ0F0Q1YsRUE4Q1AsVUFBQWIsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxtQkFBaEI7QUFBQSxDQTlDRSxFQW9ETixVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlhLFdBQWhCO0FBQUEsQ0FwREMsQ0FBckI7O0FBb0ZBO0FBQ0EsSUFBTUMsUUFBNkMsR0FBRyxTQUFoREEsUUFBZ0QsT0FhaEQ7QUFBQSxNQVpKQyxvQkFZSSxRQVpKQSxvQkFZSTtBQUFBLDRCQVhKQyxTQVdJO0FBQUEsTUFYSkEsU0FXSSwrQkFYUSxFQVdSO0FBQUEsd0JBVkpDLEtBVUk7QUFBQSxNQVZKQSxLQVVJLDJCQVZJLENBVUo7QUFBQSwwQkFUSkMsT0FTSTtBQUFBLE1BVEpBLE9BU0ksNkJBVE0sR0FTTjtBQUFBLDZCQVJKQyxVQVFJO0FBQUEsTUFSSkEsVUFRSSxnQ0FSUyxVQUFBQyxJQUFJO0FBQUEsV0FBSUEsSUFBSSxDQUFDQyxVQUFUO0FBQUEsR0FRYjtBQUFBLE1BUEpDLFFBT0ksUUFQSkEsUUFPSTtBQUFBLE1BTkpDLFVBTUksUUFOSkEsVUFNSTtBQUFBLE1BTEpDLGNBS0ksUUFMSkEsY0FLSTtBQUFBLE1BSkpDLGtCQUlJLFFBSkpBLGtCQUlJO0FBQUEsTUFISkMsU0FHSSxRQUhKQSxTQUdJO0FBQUEsTUFGSm5CLEtBRUksUUFGSkEsS0FFSTtBQUFBLE1BREpvQixJQUNJLFFBREpBLElBQ0k7O0FBQUEsa0JBQ2dDLHFCQUFTLEVBQVQsQ0FEaEM7QUFBQTtBQUFBLE1BQ0dDLFVBREg7QUFBQSxNQUNlQyxhQURmOztBQUFBLG1CQUVrQyxxQkFBUyxLQUFULENBRmxDO0FBQUE7QUFBQSxNQUVHQyxXQUZIO0FBQUEsTUFFZ0JDLGNBRmhCOztBQUFBLG1CQUdnQyxxQkFBUyxLQUFULENBSGhDO0FBQUE7QUFBQSxNQUdHQyxVQUhIO0FBQUEsTUFHZUMsYUFIZjtBQUlKOzs7QUFDQSxNQUFNQyxjQUF3QixHQUFHLEVBQWpDOztBQUxJLG1CQU0wQixxQkFBU0EsY0FBVCxDQU4xQjtBQUFBO0FBQUEsTUFNR0MsT0FOSDtBQUFBLE1BTVlDLFVBTlo7O0FBQUEsbUJBT3NDLHFCQUFTLENBQVQsQ0FQdEM7QUFBQTtBQUFBLE1BT0dDLGFBUEg7QUFBQSxNQU9rQkMsZ0JBUGxCOztBQVNKLE1BQU1DLE1BQU0sR0FBRyxvQkFBUTtBQUFBLFdBQU0sSUFBSUMsa0JBQUosQ0FBaUJ6QixvQkFBakIsQ0FBTjtBQUFBLEdBQVIsRUFBc0QsQ0FBQ0Esb0JBQUQsQ0FBdEQsQ0FBZjtBQUVBLE1BQU0wQixRQUFRLEdBQUcsd0JBQ2YsVUFBQUMsS0FBSyxFQUFJO0FBQ1AsUUFBTUMsV0FBVyxHQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsS0FBakM7QUFDQWhCLElBQUFBLGFBQWEsQ0FBQ2MsV0FBRCxDQUFiO0FBQ0EsUUFBTUcsaUJBQWlCLEdBQUcxRCxrQkFBa0IsQ0FBQ3VELFdBQUQsQ0FBNUM7O0FBQ0EsUUFBSUcsaUJBQWlCLENBQUMsQ0FBRCxDQUFyQixFQUEwQjtBQUFBLCtEQUNTQSxpQkFEVDtBQUFBLFVBQ2pCQyxDQURpQjtBQUFBLFVBQ2RDLFFBRGM7QUFBQSxVQUNKQyxTQURJOztBQUV4QmIsTUFBQUEsVUFBVSxDQUFDLENBQUM7QUFBQ2MsUUFBQUEsTUFBTSxFQUFFLENBQUNGLFFBQUQsRUFBV0MsU0FBWCxDQUFUO0FBQWdDNUIsUUFBQUEsVUFBVSxFQUFFc0I7QUFBNUMsT0FBRCxDQUFELENBQVY7QUFDRCxLQUhELE1BR087QUFDTCxVQUFJeEQsZUFBSixFQUFxQjtBQUNuQmdFLFFBQUFBLFlBQVksQ0FBQ2hFLGVBQUQsQ0FBWjtBQUNEOztBQUNEQSxNQUFBQSxlQUFlLEdBQUdpRSxVQUFVLDZGQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUN2Qm5DLEtBQUssR0FBRyxDQUFSLElBQWFvQyxPQUFPLENBQUNWLFdBQUQsQ0FERztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsdUJBR0FKLE1BQU0sQ0FBQ2UsY0FBUCxDQUFzQlgsV0FBdEIsRUFBbUM7QUFBQzFCLGtCQUFBQSxLQUFLLEVBQUxBO0FBQUQsaUJBQW5DLENBSEE7O0FBQUE7QUFHakJzQyxnQkFBQUEsUUFIaUI7O0FBSXZCLG9CQUFJQSxRQUFRLENBQUNDLE1BQVQsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzVCMUIsa0JBQUFBLGNBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQUssa0JBQUFBLFVBQVUsQ0FBQ21CLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMsUUFBakIsQ0FBVjtBQUNEOztBQVBzQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVN2QjtBQUNBO0FBQ0FDLGdCQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBWHVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUQsSUFjekJ6QyxPQWR5QixDQUE1QjtBQWVEO0FBQ0YsR0E1QmMsRUE2QmYsQ0FBQ3FCLE1BQUQsRUFBU3RCLEtBQVQsRUFBZ0JDLE9BQWhCLEVBQXlCa0IsVUFBekIsRUFBcUNMLGNBQXJDLENBN0JlLENBQWpCO0FBZ0NBLE1BQU02QixNQUFNLEdBQUcsd0JBQVksWUFBTTtBQUMvQlIsSUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDZnJCLE1BQUFBLGNBQWMsQ0FBQyxLQUFELENBQWQ7QUFDRCxLQUZTLEVBRVBiLE9BRk8sQ0FBVjtBQUdELEdBSmMsRUFJWixDQUFDYSxjQUFELEVBQWlCYixPQUFqQixDQUpZLENBQWY7QUFNQSxNQUFNMkMsT0FBTyxHQUFHLHdCQUFZO0FBQUEsV0FBTTlCLGNBQWMsQ0FBQyxJQUFELENBQXBCO0FBQUEsR0FBWixFQUF3QyxDQUFDQSxjQUFELENBQXhDLENBQWhCO0FBRUEsTUFBTStCLGNBQWMsR0FBRyx3QkFDckIsVUFBQTFDLElBQUksRUFBSTtBQUNOLFFBQU0yQyxXQUFXLEdBQUcsSUFBSUMsNENBQUosQ0FBd0IxQyxRQUF4QixDQUFwQjtBQURNLFFBRUMyQyxJQUZELEdBRWlCN0MsSUFGakIsQ0FFQzZDLElBRkQ7QUFBQSxRQUVPZixNQUZQLEdBRWlCOUIsSUFGakIsQ0FFTzhCLE1BRlA7QUFJTixRQUFNZ0IsWUFBWSxHQUFHRCxJQUFJLEdBQ3JCRixXQUFXLENBQUNJLFNBQVosQ0FBc0IsQ0FDcEIsQ0FBQ0YsSUFBSSxDQUFDLENBQUQsQ0FBTCxFQUFVQSxJQUFJLENBQUMsQ0FBRCxDQUFkLENBRG9CLEVBRXBCLENBQUNBLElBQUksQ0FBQyxDQUFELENBQUwsRUFBVUEsSUFBSSxDQUFDLENBQUQsQ0FBZCxDQUZvQixDQUF0QixDQURxQixHQUtyQjtBQUNFaEIsTUFBQUEsU0FBUyxFQUFFQyxNQUFNLENBQUMsQ0FBRCxDQURuQjtBQUVFRixNQUFBQSxRQUFRLEVBQUVFLE1BQU0sQ0FBQyxDQUFELENBRmxCO0FBR0VrQixNQUFBQSxJQUFJLEVBQUUxQztBQUhSLEtBTEo7QUFKTSxRQWVDdUIsU0FmRCxHQWU4QmlCLFlBZjlCLENBZUNqQixTQWZEO0FBQUEsUUFlWUQsUUFmWixHQWU4QmtCLFlBZjlCLENBZVlsQixRQWZaO0FBQUEsUUFlc0JvQixJQWZ0QixHQWU4QkYsWUFmOUIsQ0Flc0JFLElBZnRCO0FBaUJON0MsSUFBQUEsVUFBVSxpQ0FBS0QsUUFBTCxHQUFrQjtBQUFDMkIsTUFBQUEsU0FBUyxFQUFUQSxTQUFEO0FBQVlELE1BQUFBLFFBQVEsRUFBUkEsUUFBWjtBQUFzQm9CLE1BQUFBLElBQUksRUFBSkEsSUFBdEI7QUFBNEIzQyxNQUFBQSxrQkFBa0IsRUFBbEJBO0FBQTVCLEtBQWxCLEdBQW9FTCxJQUFwRSxDQUFWO0FBRUFXLElBQUFBLGNBQWMsQ0FBQyxLQUFELENBQWQ7QUFDQUYsSUFBQUEsYUFBYSxDQUFDVixVQUFVLENBQUNDLElBQUQsQ0FBWCxDQUFiO0FBQ0FhLElBQUFBLGFBQWEsQ0FBQyxJQUFELENBQWI7QUFDRCxHQXZCb0IsRUF3QnJCLENBQUNYLFFBQUQsRUFBV0MsVUFBWCxFQUF1QkUsa0JBQXZCLEVBQTJDQyxTQUEzQyxFQUFzRFAsVUFBdEQsQ0F4QnFCLENBQXZCO0FBMkJBLE1BQU1rRCxhQUFhLEdBQUcsd0JBQVksWUFBTTtBQUN0Q3BDLElBQUFBLGFBQWEsQ0FBQyxLQUFELENBQWI7QUFDQUosSUFBQUEsYUFBYSxDQUFDLEVBQUQsQ0FBYjtBQUNBTCxJQUFBQSxjQUFjLFNBQWQsSUFBQUEsY0FBYyxXQUFkLFlBQUFBLGNBQWM7QUFDZixHQUpxQixFQUluQixDQUFDQSxjQUFELENBSm1CLENBQXRCO0FBTUEsTUFBTThDLFNBQVMsR0FBRyx3QkFDaEIsVUFBQUMsQ0FBQyxFQUFJO0FBQ0gsUUFBSSxDQUFDcEMsT0FBRCxJQUFZQSxPQUFPLENBQUNxQyxNQUFSLEtBQW1CLENBQW5DLEVBQXNDO0FBQ3BDO0FBQ0Q7O0FBQ0QsWUFBUUQsQ0FBQyxDQUFDRSxPQUFWO0FBQ0UsV0FBS0Msb0JBQVNDLFNBQWQ7QUFDRXJDLFFBQUFBLGdCQUFnQixDQUFDRCxhQUFhLEdBQUcsQ0FBaEIsR0FBb0JBLGFBQWEsR0FBRyxDQUFwQyxHQUF3Q0EsYUFBekMsQ0FBaEI7QUFDQTs7QUFDRixXQUFLcUMsb0JBQVNFLFdBQWQ7QUFDRXRDLFFBQUFBLGdCQUFnQixDQUFDRCxhQUFhLEdBQUdGLE9BQU8sQ0FBQ3FDLE1BQVIsR0FBaUIsQ0FBakMsR0FBcUNuQyxhQUFhLEdBQUcsQ0FBckQsR0FBeURBLGFBQTFELENBQWhCO0FBQ0E7O0FBQ0YsV0FBS3FDLG9CQUFTRyxZQUFkO0FBQ0EsV0FBS0gsb0JBQVNJLGFBQWQ7QUFDRSxZQUFJM0MsT0FBTyxDQUFDRSxhQUFELENBQVgsRUFBNEI7QUFDMUJ5QixVQUFBQSxjQUFjLENBQUMzQixPQUFPLENBQUNFLGFBQUQsQ0FBUixDQUFkO0FBQ0Q7O0FBQ0Q7O0FBQ0Y7QUFDRTtBQWRKO0FBZ0JELEdBckJlLEVBc0JoQixDQUFDRixPQUFELEVBQVVFLGFBQVYsRUFBeUJDLGdCQUF6QixFQUEyQ3dCLGNBQTNDLENBdEJnQixDQUFsQjtBQXlCQSxzQkFDRSxnQ0FBQyxlQUFEO0FBQWlCLElBQUEsU0FBUyxFQUFFOUMsU0FBNUI7QUFBdUMsSUFBQSxLQUFLLEVBQUVUO0FBQTlDLGtCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0UsZ0NBQUMsYUFBRDtBQUFRLElBQUEsTUFBTSxFQUFDO0FBQWYsSUFERixDQURGLGVBSUUsZ0NBQUMsd0JBQUQ7QUFDRSxJQUFBLElBQUksRUFBQyxNQURQO0FBRUUsSUFBQSxRQUFRLEVBQUVrQyxRQUZaO0FBR0UsSUFBQSxNQUFNLEVBQUVtQixNQUhWO0FBSUUsSUFBQSxPQUFPLEVBQUVDLE9BSlg7QUFLRSxJQUFBLFNBQVMsRUFBRVMsU0FMYjtBQU1FLElBQUEsS0FBSyxFQUFFMUMsVUFOVDtBQU9FLElBQUEsV0FBVyxFQUNURCxJQUFJLEdBQ0FBLElBQUksQ0FBQ29ELGFBQUwsQ0FBbUI7QUFBQ0MsTUFBQUEsRUFBRSxFQUFFLGdCQUFMO0FBQXVCQyxNQUFBQSxjQUFjLEVBQUUvRjtBQUF2QyxLQUFuQixDQURBLEdBRUFBO0FBVlIsSUFKRixFQWlCRzhDLFVBQVUsZ0JBQ1Q7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFLGdDQUFDLGFBQUQ7QUFBUSxJQUFBLE1BQU0sRUFBQyxNQUFmO0FBQXNCLElBQUEsT0FBTyxFQUFFcUM7QUFBL0IsSUFERixDQURTLEdBSVAsSUFyQk4sQ0FERixFQXlCR3ZDLFdBQVcsZ0JBQ1Y7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0dLLE9BQU8sQ0FBQytDLEdBQVIsQ0FBWSxVQUFDOUQsSUFBRCxFQUFPK0QsS0FBUDtBQUFBLHdCQUNYO0FBQ0UsTUFBQSxHQUFHLEVBQUVBLEtBRFA7QUFFRSxNQUFBLFNBQVMsRUFBRSw0QkFBVyxlQUFYLEVBQTRCO0FBQUNDLFFBQUFBLE1BQU0sRUFBRS9DLGFBQWEsS0FBSzhDO0FBQTNCLE9BQTVCLENBRmI7QUFHRSxNQUFBLE9BQU8sRUFBRTtBQUFBLGVBQU1yQixjQUFjLENBQUMxQyxJQUFELENBQXBCO0FBQUE7QUFIWCxPQUtHRCxVQUFVLENBQUNDLElBQUQsQ0FMYixDQURXO0FBQUEsR0FBWixDQURILENBRFUsR0FZUixJQXJDTixDQURGO0FBeUNELENBbktEOztlQXFLZSwyQkFBV04sUUFBWCxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7dXNlQ2FsbGJhY2ssIHVzZU1lbW8sIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IE1hcGJveENsaWVudCBmcm9tICdtYXBib3gnO1xuaW1wb3J0IHtpbmplY3RJbnRsLCBJbnRsU2hhcGV9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHtXZWJNZXJjYXRvclZpZXdwb3J0fSBmcm9tICd2aWV3cG9ydC1tZXJjYXRvci1wcm9qZWN0JztcbmltcG9ydCB7S2V5RXZlbnR9IGZyb20gJ0BrZXBsZXIuZ2wvY29uc3RhbnRzJztcbmltcG9ydCB7SW5wdXR9IGZyb20gJy4uL2NvbW1vbi9zdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQge1NlYXJjaCwgRGVsZXRlfSBmcm9tICcuLi9jb21tb24vaWNvbnMnO1xuaW1wb3J0IHtWaWV3cG9ydH0gZnJvbSAnQGtlcGxlci5nbC90eXBlcyc7XG5cbnR5cGUgU3R5bGVkQ29udGFpbmVyUHJvcHMgPSB7XG4gIHdpZHRoPzogbnVtYmVyO1xufTtcblxuLy8gbWF0Y2hlcyBvbmx5IHZhbGlkIGNvb3JkaW5hdGVzXG5jb25zdCBDT09SRElOQVRFX1JFR0VYX1NUUklORyA9XG4gICdeWy0rXT8oWzEtOF0/XFxcXGQoXFxcXC5cXFxcZCspP3w5MChcXFxcLjArKT8pLFxcXFxzKlstK10/KDE4MChcXFxcLjArKT98KCgxWzAtN11cXFxcZCl8KFsxLTldP1xcXFxkKSkoXFxcXC5cXFxcZCspPyknO1xuY29uc3QgQ09PUkRJTkFURV9SRUdFWCA9IFJlZ0V4cChDT09SRElOQVRFX1JFR0VYX1NUUklORyk7XG5cbmNvbnN0IFBMQUNFSE9MREVSID0gJ0VudGVyIGFuIGFkZHJlc3Mgb3IgY29vcmRpbmF0ZXMsIGV4IDM3Ljc5LC0xMjIuNDAnO1xuXG5sZXQgZGVib3VuY2VUaW1lb3V0OiBOb2RlSlMuVGltZW91dCB8IG51bGwgPSBudWxsO1xuXG5leHBvcnQgY29uc3QgdGVzdEZvckNvb3JkaW5hdGVzID0gKHF1ZXJ5OiBzdHJpbmcpOiBbdHJ1ZSwgbnVtYmVyLCBudW1iZXJdIHwgW2ZhbHNlLCBzdHJpbmddID0+IHtcbiAgY29uc3QgaXNWYWxpZCA9IENPT1JESU5BVEVfUkVHRVgudGVzdChxdWVyeS50cmltKCkpO1xuXG4gIGlmICghaXNWYWxpZCkge1xuICAgIHJldHVybiBbaXNWYWxpZCwgcXVlcnldO1xuICB9XG5cbiAgY29uc3QgdG9rZW5zID0gcXVlcnkudHJpbSgpLnNwbGl0KCcsJyk7XG5cbiAgcmV0dXJuIFtpc1ZhbGlkLCBOdW1iZXIodG9rZW5zWzBdKSwgTnVtYmVyKHRva2Vuc1sxXSldO1xufTtcblxuY29uc3QgU3R5bGVkQ29udGFpbmVyID0gc3R5bGVkLmRpdjxTdHlsZWRDb250YWluZXJQcm9wcz5gXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9yfTtcblxuICAuZ2VvY29kZXItaW5wdXQge1xuICAgIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm94U2hhZG93fTtcblxuICAgIC5nZW9jb2Rlci1pbnB1dF9fc2VhcmNoIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5nZW9jb2RlcklucHV0SGVpZ2h0fXB4O1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3J9O1xuICAgIH1cblxuICAgIGlucHV0IHtcbiAgICAgIHBhZGRpbmc6IDRweCAzNnB4O1xuICAgICAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmdlb2NvZGVySW5wdXRIZWlnaHR9cHg7XG4gICAgICBjYXJldC1jb2xvcjogdW5zZXQ7XG4gICAgfVxuICB9XG5cbiAgLmdlb2NvZGVyLXJlc3VsdHMge1xuICAgIGJveC1zaGFkb3c6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm94U2hhZG93fTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbmVsQmFja2dyb3VuZH07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAke3Byb3BzID0+IChOdW1iZXIuaXNGaW5pdGUocHJvcHMud2lkdGgpID8gcHJvcHMud2lkdGggOiBwcm9wcy50aGVtZS5nZW9jb2RlcldpZHRoKX1weDtcbiAgICBtYXJnaW4tdG9wOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmRyb3Bkb3duV2FwcGVyTWFyZ2lufXB4O1xuICB9XG5cbiAgLmdlb2NvZGVyLWl0ZW0ge1xuICAgICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZHJvcGRvd25MaXN0SXRlbX07XG4gICAgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0VHJ1bmNhdGV9O1xuXG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5kcm9wZG93bkxpc3RIaWdobGlnaHRCZ307XG4gICAgfVxuICB9XG5cbiAgLnJlbW92ZS1yZXN1bHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTZweDtcbiAgICB0b3A6IDBweDtcbiAgICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ2VvY29kZXJJbnB1dEhlaWdodH1weDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICA6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dENvbG9ySGx9O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGludGVyZmFjZSBSZXN1bHQge1xuICBjZW50ZXI6IFtudW1iZXIsIG51bWJlcl07XG4gIHBsYWNlX25hbWU6IHN0cmluZztcbiAgYmJveD86IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXJdO1xuICB0ZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBSZXN1bHRzID0gUmVhZG9ubHlBcnJheTxSZXN1bHQ+O1xuXG50eXBlIEdlb2NvZGVyUHJvcHMgPSB7XG4gIG1hcGJveEFwaUFjY2Vzc1Rva2VuOiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgbGltaXQ/OiBudW1iZXI7XG4gIHRpbWVvdXQ/OiBudW1iZXI7XG4gIGZvcm1hdEl0ZW0/OiAoaXRlbTogUmVzdWx0KSA9PiBzdHJpbmc7XG4gIHZpZXdwb3J0PzogVmlld3BvcnQ7XG4gIG9uU2VsZWN0ZWQ6ICh2aWV3cG9ydDogVmlld3BvcnQgfCBudWxsLCBpdGVtOiBSZXN1bHQpID0+IHZvaWQ7XG4gIG9uRGVsZXRlTWFya2VyPzogKCkgPT4gdm9pZDtcbiAgdHJhbnNpdGlvbkR1cmF0aW9uPzogbnVtYmVyO1xuICBwb2ludFpvb20/OiBudW1iZXI7XG4gIHdpZHRoPzogbnVtYmVyO1xufTtcblxudHlwZSBJbnRsUHJvcHMgPSB7XG4gIGludGw6IEludGxTaGFwZTtcbn07XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuL2dlb2NvZGVyJykuR2VvY29kZXJDb21wb25lbnR9ICovXG5jb25zdCBHZW9Db2RlcjogUmVhY3QuRkM8R2VvY29kZXJQcm9wcyAmIEludGxQcm9wcz4gPSAoe1xuICBtYXBib3hBcGlBY2Nlc3NUb2tlbixcbiAgY2xhc3NOYW1lID0gJycsXG4gIGxpbWl0ID0gNSxcbiAgdGltZW91dCA9IDMwMCxcbiAgZm9ybWF0SXRlbSA9IGl0ZW0gPT4gaXRlbS5wbGFjZV9uYW1lLFxuICB2aWV3cG9ydCxcbiAgb25TZWxlY3RlZCxcbiAgb25EZWxldGVNYXJrZXIsXG4gIHRyYW5zaXRpb25EdXJhdGlvbixcbiAgcG9pbnRab29tLFxuICB3aWR0aCxcbiAgaW50bFxufSkgPT4ge1xuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzaG93UmVzdWx0cywgc2V0U2hvd1Jlc3VsdHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd0RlbGV0ZSwgc2V0U2hvd0RlbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8qKiBAdHlwZSB7aW1wb3J0KCcuL2dlb2NvZGVyJykuUmVzdWx0c30gKi9cbiAgY29uc3QgaW5pdGlhbFJlc3VsdHM6IFJlc3VsdFtdID0gW107XG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzXSA9IHVzZVN0YXRlKGluaXRpYWxSZXN1bHRzKTtcbiAgY29uc3QgW3NlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgY2xpZW50ID0gdXNlTWVtbygoKSA9PiBuZXcgTWFwYm94Q2xpZW50KG1hcGJveEFwaUFjY2Vzc1Rva2VuKSwgW21hcGJveEFwaUFjY2Vzc1Rva2VuXSk7XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjayhcbiAgICBldmVudCA9PiB7XG4gICAgICBjb25zdCBxdWVyeVN0cmluZyA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIHNldElucHV0VmFsdWUocXVlcnlTdHJpbmcpO1xuICAgICAgY29uc3QgcmVzdWx0Q29vcmRpbmF0ZXMgPSB0ZXN0Rm9yQ29vcmRpbmF0ZXMocXVlcnlTdHJpbmcpO1xuICAgICAgaWYgKHJlc3VsdENvb3JkaW5hdGVzWzBdKSB7XG4gICAgICAgIGNvbnN0IFtfLCBsYXRpdHVkZSwgbG9uZ2l0dWRlXSA9IHJlc3VsdENvb3JkaW5hdGVzO1xuICAgICAgICBzZXRSZXN1bHRzKFt7Y2VudGVyOiBbbGF0aXR1ZGUsIGxvbmdpdHVkZV0sIHBsYWNlX25hbWU6IHF1ZXJ5U3RyaW5nfV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGRlYm91bmNlVGltZW91dCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChkZWJvdW5jZVRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIGRlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGlmIChsaW1pdCA+IDAgJiYgQm9vbGVhbihxdWVyeVN0cmluZykpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2xpZW50Lmdlb2NvZGVGb3J3YXJkKHF1ZXJ5U3RyaW5nLCB7bGltaXR9KTtcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVudGl0eS5mZWF0dXJlcykge1xuICAgICAgICAgICAgICAgIHNldFNob3dSZXN1bHRzKHRydWUpO1xuICAgICAgICAgICAgICAgIHNldFJlc3VsdHMocmVzcG9uc2UuZW50aXR5LmZlYXR1cmVzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAvLyBUT0RPOiBzaG93IGdlb2NvZGUgZXJyb3JcbiAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjbGllbnQsIGxpbWl0LCB0aW1lb3V0LCBzZXRSZXN1bHRzLCBzZXRTaG93UmVzdWx0c11cbiAgKTtcblxuICBjb25zdCBvbkJsdXIgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93UmVzdWx0cyhmYWxzZSk7XG4gICAgfSwgdGltZW91dCk7XG4gIH0sIFtzZXRTaG93UmVzdWx0cywgdGltZW91dF0pO1xuXG4gIGNvbnN0IG9uRm9jdXMgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRTaG93UmVzdWx0cyh0cnVlKSwgW3NldFNob3dSZXN1bHRzXSk7XG5cbiAgY29uc3Qgb25JdGVtU2VsZWN0ZWQgPSB1c2VDYWxsYmFjayhcbiAgICBpdGVtID0+IHtcbiAgICAgIGNvbnN0IG5ld1ZpZXdwb3J0ID0gbmV3IFdlYk1lcmNhdG9yVmlld3BvcnQodmlld3BvcnQpO1xuICAgICAgY29uc3Qge2Jib3gsIGNlbnRlcn0gPSBpdGVtO1xuXG4gICAgICBjb25zdCBnb3RvVmlld3BvcnQgPSBiYm94XG4gICAgICAgID8gbmV3Vmlld3BvcnQuZml0Qm91bmRzKFtcbiAgICAgICAgICAgIFtiYm94WzBdLCBiYm94WzFdXSxcbiAgICAgICAgICAgIFtiYm94WzJdLCBiYm94WzNdXVxuICAgICAgICAgIF0pXG4gICAgICAgIDoge1xuICAgICAgICAgICAgbG9uZ2l0dWRlOiBjZW50ZXJbMF0sXG4gICAgICAgICAgICBsYXRpdHVkZTogY2VudGVyWzFdLFxuICAgICAgICAgICAgem9vbTogcG9pbnRab29tXG4gICAgICAgICAgfTtcblxuICAgICAgY29uc3Qge2xvbmdpdHVkZSwgbGF0aXR1ZGUsIHpvb219ID0gZ290b1ZpZXdwb3J0O1xuXG4gICAgICBvblNlbGVjdGVkKHsuLi52aWV3cG9ydCwgLi4ue2xvbmdpdHVkZSwgbGF0aXR1ZGUsIHpvb20sIHRyYW5zaXRpb25EdXJhdGlvbn19LCBpdGVtKTtcblxuICAgICAgc2V0U2hvd1Jlc3VsdHMoZmFsc2UpO1xuICAgICAgc2V0SW5wdXRWYWx1ZShmb3JtYXRJdGVtKGl0ZW0pKTtcbiAgICAgIHNldFNob3dEZWxldGUodHJ1ZSk7XG4gICAgfSxcbiAgICBbdmlld3BvcnQsIG9uU2VsZWN0ZWQsIHRyYW5zaXRpb25EdXJhdGlvbiwgcG9pbnRab29tLCBmb3JtYXRJdGVtXVxuICApO1xuXG4gIGNvbnN0IG9uTWFya0RlbGV0ZWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0U2hvd0RlbGV0ZShmYWxzZSk7XG4gICAgc2V0SW5wdXRWYWx1ZSgnJyk7XG4gICAgb25EZWxldGVNYXJrZXI/LigpO1xuICB9LCBbb25EZWxldGVNYXJrZXJdKTtcblxuICBjb25zdCBvbktleURvd24gPSB1c2VDYWxsYmFjayhcbiAgICBlID0+IHtcbiAgICAgIGlmICghcmVzdWx0cyB8fCByZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICBjYXNlIEtleUV2ZW50LkRPTV9WS19VUDpcbiAgICAgICAgICBzZXRTZWxlY3RlZEluZGV4KHNlbGVjdGVkSW5kZXggPiAwID8gc2VsZWN0ZWRJbmRleCAtIDEgOiBzZWxlY3RlZEluZGV4KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBLZXlFdmVudC5ET01fVktfRE9XTjpcbiAgICAgICAgICBzZXRTZWxlY3RlZEluZGV4KHNlbGVjdGVkSW5kZXggPCByZXN1bHRzLmxlbmd0aCAtIDEgPyBzZWxlY3RlZEluZGV4ICsgMSA6IHNlbGVjdGVkSW5kZXgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEtleUV2ZW50LkRPTV9WS19FTlRFUjpcbiAgICAgICAgY2FzZSBLZXlFdmVudC5ET01fVktfUkVUVVJOOlxuICAgICAgICAgIGlmIChyZXN1bHRzW3NlbGVjdGVkSW5kZXhdKSB7XG4gICAgICAgICAgICBvbkl0ZW1TZWxlY3RlZChyZXN1bHRzW3NlbGVjdGVkSW5kZXhdKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSxcbiAgICBbcmVzdWx0cywgc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleCwgb25JdGVtU2VsZWN0ZWRdXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkQ29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB3aWR0aD17d2lkdGh9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW9jb2Rlci1pbnB1dFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlb2NvZGVyLWlucHV0X19zZWFyY2hcIj5cbiAgICAgICAgICA8U2VhcmNoIGhlaWdodD1cIjIwcHhcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICBvbkJsdXI9e29uQmx1cn1cbiAgICAgICAgICBvbkZvY3VzPXtvbkZvY3VzfVxuICAgICAgICAgIG9uS2V5RG93bj17b25LZXlEb3dufVxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtcbiAgICAgICAgICAgIGludGxcbiAgICAgICAgICAgICAgPyBpbnRsLmZvcm1hdE1lc3NhZ2Uoe2lkOiAnZ2VvY29kZXIudGl0bGUnLCBkZWZhdWx0TWVzc2FnZTogUExBQ0VIT0xERVJ9KVxuICAgICAgICAgICAgICA6IFBMQUNFSE9MREVSXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICB7c2hvd0RlbGV0ZSA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbW92ZS1yZXN1bHRcIj5cbiAgICAgICAgICAgIDxEZWxldGUgaGVpZ2h0PVwiMTJweFwiIG9uQ2xpY2s9e29uTWFya0RlbGV0ZWR9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtzaG93UmVzdWx0cyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW9jb2Rlci1yZXN1bHRzXCI+XG4gICAgICAgICAge3Jlc3VsdHMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ2dlb2NvZGVyLWl0ZW0nLCB7YWN0aXZlOiBzZWxlY3RlZEluZGV4ID09PSBpbmRleH0pfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkl0ZW1TZWxlY3RlZChpdGVtKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2Zvcm1hdEl0ZW0oaXRlbSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICA8L1N0eWxlZENvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdEludGwoR2VvQ29kZXIpO1xuIl19