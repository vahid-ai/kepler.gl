"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FILE_CONFLICT_MSG = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _upload = _interopRequireDefault(require("./upload"));

// Copyright (c) 2023 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var NAME = 'cloud-provider';
var DISPLAY_NAME = 'Cloud Provider';
var THUMBNAIL = {
  width: 300,
  height: 200
};
var ICON = _upload["default"];
var FILE_CONFLICT_MSG = 'file_conflict';
/**
 * The default provider class
 * @param {object} props
 * @param {string} props.name
 * @param {string} props.displayName
 * @param {React.Component} props.icon - React element
 * @param {object} props.thumbnail - thumbnail size object
 * @param {number} props.thumbnail.width - thumbnail width in pixels
 * @param {number} props.thumbnail.height - thumbnail height in pixels
 * @public
 * @example
 *
 * const myProvider = new Provider({
 *  name: 'foo',
 *  displayName: 'Foo Storage'
 *  icon: Icon,
 *  thumbnail: {width: 300, height: 200}
 * })
 */

exports.FILE_CONFLICT_MSG = FILE_CONFLICT_MSG;

var Provider = /*#__PURE__*/function () {
  function Provider(props) {
    (0, _classCallCheck2["default"])(this, Provider);
    (0, _defineProperty2["default"])(this, "name", void 0);
    (0, _defineProperty2["default"])(this, "displayName", void 0);
    (0, _defineProperty2["default"])(this, "icon", void 0);
    (0, _defineProperty2["default"])(this, "thumbnail", void 0);
    (0, _defineProperty2["default"])(this, "getManagementUrl", void 0);
    this.name = props.name || NAME;
    this.displayName = props.displayName || DISPLAY_NAME;
    this.icon = props.icon || ICON;
    this.thumbnail = props.thumbnail || THUMBNAIL;
  }
  /**
   * Whether this provider support upload map to a private storage. If truthy, user will be displayed with the storage save icon on the top right of the side bar.
   * @returns
   * @public
   */


  (0, _createClass2["default"])(Provider, [{
    key: "hasPrivateStorage",
    value: function hasPrivateStorage() {
      return true;
    }
    /**
     * Whether this provider support share map via a public url, if truthy, user will be displayed with a share map via url under the export map option on the top right of the side bar
     * @returns
     * @public
     */

  }, {
    key: "hasSharingUrl",
    value: function hasSharingUrl() {
      return true;
    }
    /**
     * This method is called after user share a map, to display the share url.
     * @param fullUrl - Whether to return the full url with domain, or just the location
     * @returns shareUrl
     * @public
     */

  }, {
    key: "getShareUrl",
    value: function getShareUrl() {
      var fullUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return '';
    }
    /**
     * This method is called by kepler.gl demo app to pushes a new location to history, becoming the current location.
     * @param fullURL - Whether to return the full url with domain, or just the location
     * @returns mapUrl
     * @public
     */

  }, {
    key: "getMapUrl",
    value: function getMapUrl() {
      var fullURL = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      return '';
    }
    /**
     * This method is called to determine whether user already logged in to this provider
     * @public
     * @returns true if a user already logged in
     */

  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      return true;
    }
    /**
     * This method is called to get the user name of the current user. It will be displayed in the cloud provider tile.
     * @public
     * @returns true if a user already logged in
     */

  }, {
    key: "getUserName",
    value: function getUserName() {
      return '';
    }
    /**
     * This return a standard error that will trigger the overwrite map modal
     */

  }, {
    key: "getFileConflictError",
    value: function getFileConflictError() {
      return new Error(FILE_CONFLICT_MSG);
    }
    /**
     * This method will be called when user click the login button in the cloud provider tile.
     * Upon login success, `onCloudLoginSuccess` has to be called to notify kepler.gl UI
     * @param {function} onCloudLoginSuccess - callbacks to be called after login success
     * @public
     */

  }, {
    key: "login",
    value: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(onCloudLoginSuccess) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                onCloudLoginSuccess();
                return _context.abrupt("return");

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function login(_x) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
    /**
     * This method will be called when user click the logout button under the cloud provider tile.
     * Upon login success, `onCloudLoginSuccess` has to be called to notify kepler.gl UI
     * @param {function} onCloudLogoutSuccess - callbacks to be called after logout success
     * @public
     */

  }, {
    key: "logout",
    value: function () {
      var _logout = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(onCloudLogoutSuccess) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                onCloudLogoutSuccess();
                return _context2.abrupt("return");

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function logout(_x2) {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
    /**
     * This method will be called to upload map for saving and sharing. Kepler.gl will package map data, config, title, description and thumbnail for upload to storage.
     * With the option to overwrite already saved map, and upload as private or public map.
     *
     * @param {Object} param
     * @param {Object} param.mapData - the map object
     * @param {Object} param.mapData.map - {datasets. config, info: {title, description}}
     * @param {Blob} param.mapData.thumbnail - A thumbnail of current map. thumbnail size can be defined by provider by this.thumbnail
     * @param {object} [param.options]
     * @param {boolean} [param.options.overwrite] - whether user choose to overwrite already saved map under the same name
     * @param {boolean} [param.options.isPublic] - whether user wish to share the map with others. if isPublic is truthy, kepler will call this.getShareUrl() to display an URL they can share with others
     * @public
     */

  }, {
    key: "uploadMap",
    value: function () {
      var _uploadMap = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_ref) {
        var mapData, _ref$options, options;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                mapData = _ref.mapData, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options;
                return _context3.abrupt("return");

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function uploadMap(_x3) {
        return _uploadMap.apply(this, arguments);
      }

      return uploadMap;
    }()
    /**
     * This method is called to get a list of maps saved by the current logged in user.
     * @returns visualizations an array of Viz objects
     * @public
     * @example
     *  async listMaps() {
     *    return [
     *      {
     *        id: 'a',
     *        title: 'My map',
     *        description: 'My first kepler map',
     *        imageUrl: 'http://',
     *        lastModification: 1582677787000,
     *        privateMap: false,
     *        loadParams: {}
     *      }
     *    ];
     *  }
     */

  }, {
    key: "listMaps",
    value: function () {
      var _listMaps = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", []);

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function listMaps() {
        return _listMaps.apply(this, arguments);
      }

      return listMaps;
    }()
    /**
     * This method will be called when user select a map to load from the storage map viewer
     * @param {*} loadParams - the loadParams property of each visualization object
     * @returns mapResponse - the map object containing dataset config info and format option
     * @public
     * @example
     * async downloadMap(loadParams) {
     *  const mockResponse = {
     *    map: {
     *      datasets: [],
     *      config: {},
     *      info: {
     *        app: 'kepler.gl',
     *        created_at: ''
     *        title: 'test map',
     *        description: 'Hello this is my test dropbox map'
     *      }
     *    },
     *    // pass csv here if your provider currently only support save / load file as csv
     *    format: 'keplergl'
     *  };
     *
     *  return downloadMap;
     * }
     */

  }, {
    key: "downloadMap",
    value: function () {
      var _downloadMap = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(loadParams) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return");

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function downloadMap(_x4) {
        return _downloadMap.apply(this, arguments);
      }

      return downloadMap;
    }()
    /**
     * @typedef {Object} Viz
     * @property {string} id - An unique id
     * @property {string} title - The title of the map
     * @property {string} description - The description of the map
     * @property {string} imageUrl - The imageUrl of the map
     * @property {number} lastModification - An epoch timestamp in milliseconds
     * @property {boolean} privateMap - Optional, whether if this map is private to the user, or can be accessed by others via URL
     * @property {*} loadParams - A property to be passed to `downloadMap`
     * @public
     */

    /**
     * The returned object of `downloadMap`. The response object should contain: datasets: [], config: {}, and info: {}
     * each dataset object should be {info: {id, label}, data: {...}}
     * to inform how kepler should process your data object, pass in `format`
     * @typedef {Object} MapResponse
     * @property {Object} map
     * @property {Array<Object>} map.datasets
     * @property {Object} map.config
     * @property {Object} map.info
     * @property {string} format - one of 'csv': csv file string, 'geojson': geojson object, 'row': row object, 'keplergl': datasets array saved using KeplerGlSchema.save
     * @public
     */

  }]);
  return Provider;
}();

exports["default"] = Provider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbG91ZC1wcm92aWRlcnMvc3JjL3Byb3ZpZGVyLnRzIl0sIm5hbWVzIjpbIk5BTUUiLCJESVNQTEFZX05BTUUiLCJUSFVNQk5BSUwiLCJ3aWR0aCIsImhlaWdodCIsIklDT04iLCJVcGxvYWQiLCJGSUxFX0NPTkZMSUNUX01TRyIsIlByb3ZpZGVyIiwicHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJpY29uIiwidGh1bWJuYWlsIiwiZnVsbFVybCIsImZ1bGxVUkwiLCJFcnJvciIsIm9uQ2xvdWRMb2dpblN1Y2Nlc3MiLCJvbkNsb3VkTG9nb3V0U3VjY2VzcyIsIm1hcERhdGEiLCJvcHRpb25zIiwibG9hZFBhcmFtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTs7QUFwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFpQ0EsSUFBTUEsSUFBSSxHQUFHLGdCQUFiO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLGdCQUFyQjtBQUNBLElBQU1DLFNBQVMsR0FBRztBQUFDQyxFQUFBQSxLQUFLLEVBQUUsR0FBUjtBQUFhQyxFQUFBQSxNQUFNLEVBQUU7QUFBckIsQ0FBbEI7QUFDQSxJQUFNQyxJQUFJLEdBQUdDLGtCQUFiO0FBQ08sSUFBTUMsaUJBQWlCLEdBQUcsZUFBMUI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztJQUNxQkMsUTtBQU9uQixvQkFBWUMsS0FBWixFQUFrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQyxTQUFLQyxJQUFMLEdBQVlELEtBQUssQ0FBQ0MsSUFBTixJQUFjVixJQUExQjtBQUNBLFNBQUtXLFdBQUwsR0FBbUJGLEtBQUssQ0FBQ0UsV0FBTixJQUFxQlYsWUFBeEM7QUFDQSxTQUFLVyxJQUFMLEdBQVlILEtBQUssQ0FBQ0csSUFBTixJQUFjUCxJQUExQjtBQUNBLFNBQUtRLFNBQUwsR0FBaUJKLEtBQUssQ0FBQ0ksU0FBTixJQUFtQlgsU0FBcEM7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7O1dBQ0UsNkJBQTZCO0FBQzNCLGFBQU8sSUFBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLHlCQUF5QjtBQUN2QixhQUFPLElBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLHVCQUE4QztBQUFBLFVBQWxDWSxPQUFrQyx1RUFBZixLQUFlO0FBQzVDLGFBQU8sRUFBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UscUJBQTJDO0FBQUEsVUFBakNDLE9BQWlDLHVFQUFkLElBQWM7QUFDekMsYUFBTyxFQUFQO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7O1dBQ0UsMEJBQTBCO0FBQ3hCLGFBQU8sSUFBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7OztXQUNFLHVCQUFzQjtBQUNwQixhQUFPLEVBQVA7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7OztXQUNFLGdDQUF1QjtBQUNyQixhQUFPLElBQUlDLEtBQUosQ0FBVVQsaUJBQVYsQ0FBUDtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztpR0FDRSxpQkFBWVUsbUJBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQSxnQkFBQUEsbUJBQW1CO0FBRHJCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7O0FBS0E7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztrR0FDRSxrQkFBYUMsb0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFQSxnQkFBQUEsb0JBQW9CO0FBRHRCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE87Ozs7Ozs7O0FBS0E7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O3FHQUNFO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUMsZ0JBQUFBLE9BREYsUUFDRUEsT0FERixzQkFFRUMsT0FGRixFQUVFQSxPQUZGLDZCQUVZLEVBRlo7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7OztBQVVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztvR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBQ1MsRUFEVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7OztBQUlBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozt1R0FDRSxrQkFBa0JDLFVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7OztBQUtBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDIzIFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFVwbG9hZCBmcm9tICcuL3VwbG9hZCc7XG5pbXBvcnQge01hcERhdGEsIEV4cG9ydEZpbGVPcHRpb25zLCBNaWxsaXNlY29uZCwgU2F2ZWRNYXB9IGZyb20gJ0BrZXBsZXIuZ2wvdHlwZXMnO1xuaW1wb3J0IHtDb21wb25lbnRUeXBlfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCB0eXBlIE1hcExpc3RJdGVtID0ge1xuICBpZDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBsb2FkUGFyYW1zOiBhbnk7XG4gIGltYWdlVXJsPzogc3RyaW5nO1xuICBsYXN0TW9kaWZpY2F0aW9uPzogTWlsbGlzZWNvbmQ7XG4gIHByaXZhdGVNYXA/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IHR5cGUgVGh1bWJuYWlsID0ge1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFByb3ZpZGVyUHJvcHMgPSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGRpc3BsYXlOYW1lPzogc3RyaW5nO1xuICBpY29uPzogQ29tcG9uZW50VHlwZTxJY29uUHJvcHM+O1xuICB0aHVtYm5haWw/OiBUaHVtYm5haWw7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIEljb25Qcm9wcyB7XG4gIGhlaWdodD86IHN0cmluZztcbiAgd2lkdGg/OiBzdHJpbmc7XG59XG5cbmNvbnN0IE5BTUUgPSAnY2xvdWQtcHJvdmlkZXInO1xuY29uc3QgRElTUExBWV9OQU1FID0gJ0Nsb3VkIFByb3ZpZGVyJztcbmNvbnN0IFRIVU1CTkFJTCA9IHt3aWR0aDogMzAwLCBoZWlnaHQ6IDIwMH07XG5jb25zdCBJQ09OID0gVXBsb2FkO1xuZXhwb3J0IGNvbnN0IEZJTEVfQ09ORkxJQ1RfTVNHID0gJ2ZpbGVfY29uZmxpY3QnO1xuLyoqXG4gKiBUaGUgZGVmYXVsdCBwcm92aWRlciBjbGFzc1xuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMubmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLmRpc3BsYXlOYW1lXG4gKiBAcGFyYW0ge1JlYWN0LkNvbXBvbmVudH0gcHJvcHMuaWNvbiAtIFJlYWN0IGVsZW1lbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wcy50aHVtYm5haWwgLSB0aHVtYm5haWwgc2l6ZSBvYmplY3RcbiAqIEBwYXJhbSB7bnVtYmVyfSBwcm9wcy50aHVtYm5haWwud2lkdGggLSB0aHVtYm5haWwgd2lkdGggaW4gcGl4ZWxzXG4gKiBAcGFyYW0ge251bWJlcn0gcHJvcHMudGh1bWJuYWlsLmhlaWdodCAtIHRodW1ibmFpbCBoZWlnaHQgaW4gcGl4ZWxzXG4gKiBAcHVibGljXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG15UHJvdmlkZXIgPSBuZXcgUHJvdmlkZXIoe1xuICogIG5hbWU6ICdmb28nLFxuICogIGRpc3BsYXlOYW1lOiAnRm9vIFN0b3JhZ2UnXG4gKiAgaWNvbjogSWNvbixcbiAqICB0aHVtYm5haWw6IHt3aWR0aDogMzAwLCBoZWlnaHQ6IDIwMH1cbiAqIH0pXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3ZpZGVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICBkaXNwbGF5TmFtZTogc3RyaW5nO1xuICBpY29uOiBDb21wb25lbnRUeXBlPEljb25Qcm9wcz47XG4gIHRodW1ibmFpbDogVGh1bWJuYWlsO1xuICBnZXRNYW5hZ2VtZW50VXJsPzogKCkgPT4gc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm92aWRlclByb3BzKSB7XG4gICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZSB8fCBOQU1FO1xuICAgIHRoaXMuZGlzcGxheU5hbWUgPSBwcm9wcy5kaXNwbGF5TmFtZSB8fCBESVNQTEFZX05BTUU7XG4gICAgdGhpcy5pY29uID0gcHJvcHMuaWNvbiB8fCBJQ09OO1xuICAgIHRoaXMudGh1bWJuYWlsID0gcHJvcHMudGh1bWJuYWlsIHx8IFRIVU1CTkFJTDtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoaXMgcHJvdmlkZXIgc3VwcG9ydCB1cGxvYWQgbWFwIHRvIGEgcHJpdmF0ZSBzdG9yYWdlLiBJZiB0cnV0aHksIHVzZXIgd2lsbCBiZSBkaXNwbGF5ZWQgd2l0aCB0aGUgc3RvcmFnZSBzYXZlIGljb24gb24gdGhlIHRvcCByaWdodCBvZiB0aGUgc2lkZSBiYXIuXG4gICAqIEByZXR1cm5zXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGhhc1ByaXZhdGVTdG9yYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhpcyBwcm92aWRlciBzdXBwb3J0IHNoYXJlIG1hcCB2aWEgYSBwdWJsaWMgdXJsLCBpZiB0cnV0aHksIHVzZXIgd2lsbCBiZSBkaXNwbGF5ZWQgd2l0aCBhIHNoYXJlIG1hcCB2aWEgdXJsIHVuZGVyIHRoZSBleHBvcnQgbWFwIG9wdGlvbiBvbiB0aGUgdG9wIHJpZ2h0IG9mIHRoZSBzaWRlIGJhclxuICAgKiBAcmV0dXJuc1xuICAgKiBAcHVibGljXG4gICAqL1xuICBoYXNTaGFyaW5nVXJsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBhZnRlciB1c2VyIHNoYXJlIGEgbWFwLCB0byBkaXNwbGF5IHRoZSBzaGFyZSB1cmwuXG4gICAqIEBwYXJhbSBmdWxsVXJsIC0gV2hldGhlciB0byByZXR1cm4gdGhlIGZ1bGwgdXJsIHdpdGggZG9tYWluLCBvciBqdXN0IHRoZSBsb2NhdGlvblxuICAgKiBAcmV0dXJucyBzaGFyZVVybFxuICAgKiBAcHVibGljXG4gICAqL1xuICBnZXRTaGFyZVVybChmdWxsVXJsOiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkga2VwbGVyLmdsIGRlbW8gYXBwIHRvIHB1c2hlcyBhIG5ldyBsb2NhdGlvbiB0byBoaXN0b3J5LCBiZWNvbWluZyB0aGUgY3VycmVudCBsb2NhdGlvbi5cbiAgICogQHBhcmFtIGZ1bGxVUkwgLSBXaGV0aGVyIHRvIHJldHVybiB0aGUgZnVsbCB1cmwgd2l0aCBkb21haW4sIG9yIGp1c3QgdGhlIGxvY2F0aW9uXG4gICAqIEByZXR1cm5zIG1hcFVybFxuICAgKiBAcHVibGljXG4gICAqL1xuICBnZXRNYXBVcmwoZnVsbFVSTDogYm9vbGVhbiA9IHRydWUpOiBzdHJpbmcge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdXNlciBhbHJlYWR5IGxvZ2dlZCBpbiB0byB0aGlzIHByb3ZpZGVyXG4gICAqIEBwdWJsaWNcbiAgICogQHJldHVybnMgdHJ1ZSBpZiBhIHVzZXIgYWxyZWFkeSBsb2dnZWQgaW5cbiAgICovXG4gIGdldEFjY2Vzc1Rva2VuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB0byBnZXQgdGhlIHVzZXIgbmFtZSBvZiB0aGUgY3VycmVudCB1c2VyLiBJdCB3aWxsIGJlIGRpc3BsYXllZCBpbiB0aGUgY2xvdWQgcHJvdmlkZXIgdGlsZS5cbiAgICogQHB1YmxpY1xuICAgKiBAcmV0dXJucyB0cnVlIGlmIGEgdXNlciBhbHJlYWR5IGxvZ2dlZCBpblxuICAgKi9cbiAgZ2V0VXNlck5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyByZXR1cm4gYSBzdGFuZGFyZCBlcnJvciB0aGF0IHdpbGwgdHJpZ2dlciB0aGUgb3ZlcndyaXRlIG1hcCBtb2RhbFxuICAgKi9cbiAgZ2V0RmlsZUNvbmZsaWN0RXJyb3IoKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihGSUxFX0NPTkZMSUNUX01TRyk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgd2hlbiB1c2VyIGNsaWNrIHRoZSBsb2dpbiBidXR0b24gaW4gdGhlIGNsb3VkIHByb3ZpZGVyIHRpbGUuXG4gICAqIFVwb24gbG9naW4gc3VjY2VzcywgYG9uQ2xvdWRMb2dpblN1Y2Nlc3NgIGhhcyB0byBiZSBjYWxsZWQgdG8gbm90aWZ5IGtlcGxlci5nbCBVSVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkNsb3VkTG9naW5TdWNjZXNzIC0gY2FsbGJhY2tzIHRvIGJlIGNhbGxlZCBhZnRlciBsb2dpbiBzdWNjZXNzXG4gICAqIEBwdWJsaWNcbiAgICovXG4gIGFzeW5jIGxvZ2luKG9uQ2xvdWRMb2dpblN1Y2Nlc3MpIHtcbiAgICBvbkNsb3VkTG9naW5TdWNjZXNzKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIHdoZW4gdXNlciBjbGljayB0aGUgbG9nb3V0IGJ1dHRvbiB1bmRlciB0aGUgY2xvdWQgcHJvdmlkZXIgdGlsZS5cbiAgICogVXBvbiBsb2dpbiBzdWNjZXNzLCBgb25DbG91ZExvZ2luU3VjY2Vzc2AgaGFzIHRvIGJlIGNhbGxlZCB0byBub3RpZnkga2VwbGVyLmdsIFVJXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uQ2xvdWRMb2dvdXRTdWNjZXNzIC0gY2FsbGJhY2tzIHRvIGJlIGNhbGxlZCBhZnRlciBsb2dvdXQgc3VjY2Vzc1xuICAgKiBAcHVibGljXG4gICAqL1xuICBhc3luYyBsb2dvdXQob25DbG91ZExvZ291dFN1Y2Nlc3M6ICgpID0+IHZvaWQpIHtcbiAgICBvbkNsb3VkTG9nb3V0U3VjY2VzcygpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCB0byB1cGxvYWQgbWFwIGZvciBzYXZpbmcgYW5kIHNoYXJpbmcuIEtlcGxlci5nbCB3aWxsIHBhY2thZ2UgbWFwIGRhdGEsIGNvbmZpZywgdGl0bGUsIGRlc2NyaXB0aW9uIGFuZCB0aHVtYm5haWwgZm9yIHVwbG9hZCB0byBzdG9yYWdlLlxuICAgKiBXaXRoIHRoZSBvcHRpb24gdG8gb3ZlcndyaXRlIGFscmVhZHkgc2F2ZWQgbWFwLCBhbmQgdXBsb2FkIGFzIHByaXZhdGUgb3IgcHVibGljIG1hcC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbS5tYXBEYXRhIC0gdGhlIG1hcCBvYmplY3RcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtLm1hcERhdGEubWFwIC0ge2RhdGFzZXRzLiBjb25maWcsIGluZm86IHt0aXRsZSwgZGVzY3JpcHRpb259fVxuICAgKiBAcGFyYW0ge0Jsb2J9IHBhcmFtLm1hcERhdGEudGh1bWJuYWlsIC0gQSB0aHVtYm5haWwgb2YgY3VycmVudCBtYXAuIHRodW1ibmFpbCBzaXplIGNhbiBiZSBkZWZpbmVkIGJ5IHByb3ZpZGVyIGJ5IHRoaXMudGh1bWJuYWlsXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW0ub3B0aW9uc11cbiAgICogQHBhcmFtIHtib29sZWFufSBbcGFyYW0ub3B0aW9ucy5vdmVyd3JpdGVdIC0gd2hldGhlciB1c2VyIGNob29zZSB0byBvdmVyd3JpdGUgYWxyZWFkeSBzYXZlZCBtYXAgdW5kZXIgdGhlIHNhbWUgbmFtZVxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtwYXJhbS5vcHRpb25zLmlzUHVibGljXSAtIHdoZXRoZXIgdXNlciB3aXNoIHRvIHNoYXJlIHRoZSBtYXAgd2l0aCBvdGhlcnMuIGlmIGlzUHVibGljIGlzIHRydXRoeSwga2VwbGVyIHdpbGwgY2FsbCB0aGlzLmdldFNoYXJlVXJsKCkgdG8gZGlzcGxheSBhbiBVUkwgdGhleSBjYW4gc2hhcmUgd2l0aCBvdGhlcnNcbiAgICogQHB1YmxpY1xuICAgKi9cbiAgYXN5bmMgdXBsb2FkTWFwKHtcbiAgICBtYXBEYXRhLFxuICAgIG9wdGlvbnMgPSB7fVxuICB9OiB7XG4gICAgbWFwRGF0YTogTWFwRGF0YTtcbiAgICBvcHRpb25zOiBFeHBvcnRGaWxlT3B0aW9ucztcbiAgfSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB0byBnZXQgYSBsaXN0IG9mIG1hcHMgc2F2ZWQgYnkgdGhlIGN1cnJlbnQgbG9nZ2VkIGluIHVzZXIuXG4gICAqIEByZXR1cm5zIHZpc3VhbGl6YXRpb25zIGFuIGFycmF5IG9mIFZpeiBvYmplY3RzXG4gICAqIEBwdWJsaWNcbiAgICogQGV4YW1wbGVcbiAgICogIGFzeW5jIGxpc3RNYXBzKCkge1xuICAgKiAgICByZXR1cm4gW1xuICAgKiAgICAgIHtcbiAgICogICAgICAgIGlkOiAnYScsXG4gICAqICAgICAgICB0aXRsZTogJ015IG1hcCcsXG4gICAqICAgICAgICBkZXNjcmlwdGlvbjogJ015IGZpcnN0IGtlcGxlciBtYXAnLFxuICAgKiAgICAgICAgaW1hZ2VVcmw6ICdodHRwOi8vJyxcbiAgICogICAgICAgIGxhc3RNb2RpZmljYXRpb246IDE1ODI2Nzc3ODcwMDAsXG4gICAqICAgICAgICBwcml2YXRlTWFwOiBmYWxzZSxcbiAgICogICAgICAgIGxvYWRQYXJhbXM6IHt9XG4gICAqICAgICAgfVxuICAgKiAgICBdO1xuICAgKiAgfVxuICAgKi9cbiAgYXN5bmMgbGlzdE1hcHMoKTogUHJvbWlzZTxNYXBMaXN0SXRlbVtdPiB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgYmUgY2FsbGVkIHdoZW4gdXNlciBzZWxlY3QgYSBtYXAgdG8gbG9hZCBmcm9tIHRoZSBzdG9yYWdlIG1hcCB2aWV3ZXJcbiAgICogQHBhcmFtIHsqfSBsb2FkUGFyYW1zIC0gdGhlIGxvYWRQYXJhbXMgcHJvcGVydHkgb2YgZWFjaCB2aXN1YWxpemF0aW9uIG9iamVjdFxuICAgKiBAcmV0dXJucyBtYXBSZXNwb25zZSAtIHRoZSBtYXAgb2JqZWN0IGNvbnRhaW5pbmcgZGF0YXNldCBjb25maWcgaW5mbyBhbmQgZm9ybWF0IG9wdGlvblxuICAgKiBAcHVibGljXG4gICAqIEBleGFtcGxlXG4gICAqIGFzeW5jIGRvd25sb2FkTWFwKGxvYWRQYXJhbXMpIHtcbiAgICogIGNvbnN0IG1vY2tSZXNwb25zZSA9IHtcbiAgICogICAgbWFwOiB7XG4gICAqICAgICAgZGF0YXNldHM6IFtdLFxuICAgKiAgICAgIGNvbmZpZzoge30sXG4gICAqICAgICAgaW5mbzoge1xuICAgKiAgICAgICAgYXBwOiAna2VwbGVyLmdsJyxcbiAgICogICAgICAgIGNyZWF0ZWRfYXQ6ICcnXG4gICAqICAgICAgICB0aXRsZTogJ3Rlc3QgbWFwJyxcbiAgICogICAgICAgIGRlc2NyaXB0aW9uOiAnSGVsbG8gdGhpcyBpcyBteSB0ZXN0IGRyb3Bib3ggbWFwJ1xuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgLy8gcGFzcyBjc3YgaGVyZSBpZiB5b3VyIHByb3ZpZGVyIGN1cnJlbnRseSBvbmx5IHN1cHBvcnQgc2F2ZSAvIGxvYWQgZmlsZSBhcyBjc3ZcbiAgICogICAgZm9ybWF0OiAna2VwbGVyZ2wnXG4gICAqICB9O1xuICAgKlxuICAgKiAgcmV0dXJuIGRvd25sb2FkTWFwO1xuICAgKiB9XG4gICAqL1xuICBhc3luYyBkb3dubG9hZE1hcChsb2FkUGFyYW1zKTogUHJvbWlzZTx7bWFwOiBTYXZlZE1hcDsgZm9ybWF0OiBzdHJpbmd9PiB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZWRlZiB7T2JqZWN0fSBWaXpcbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGlkIC0gQW4gdW5pcXVlIGlkXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB0aXRsZSAtIFRoZSB0aXRsZSBvZiB0aGUgbWFwXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkZXNjcmlwdGlvbiAtIFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgbWFwXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBpbWFnZVVybCAtIFRoZSBpbWFnZVVybCBvZiB0aGUgbWFwXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsYXN0TW9kaWZpY2F0aW9uIC0gQW4gZXBvY2ggdGltZXN0YW1wIGluIG1pbGxpc2Vjb25kc1xuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IHByaXZhdGVNYXAgLSBPcHRpb25hbCwgd2hldGhlciBpZiB0aGlzIG1hcCBpcyBwcml2YXRlIHRvIHRoZSB1c2VyLCBvciBjYW4gYmUgYWNjZXNzZWQgYnkgb3RoZXJzIHZpYSBVUkxcbiAgICogQHByb3BlcnR5IHsqfSBsb2FkUGFyYW1zIC0gQSBwcm9wZXJ0eSB0byBiZSBwYXNzZWQgdG8gYGRvd25sb2FkTWFwYFxuICAgKiBAcHVibGljXG4gICAqL1xuXG4gIC8qKlxuICAgKiBUaGUgcmV0dXJuZWQgb2JqZWN0IG9mIGBkb3dubG9hZE1hcGAuIFRoZSByZXNwb25zZSBvYmplY3Qgc2hvdWxkIGNvbnRhaW46IGRhdGFzZXRzOiBbXSwgY29uZmlnOiB7fSwgYW5kIGluZm86IHt9XG4gICAqIGVhY2ggZGF0YXNldCBvYmplY3Qgc2hvdWxkIGJlIHtpbmZvOiB7aWQsIGxhYmVsfSwgZGF0YTogey4uLn19XG4gICAqIHRvIGluZm9ybSBob3cga2VwbGVyIHNob3VsZCBwcm9jZXNzIHlvdXIgZGF0YSBvYmplY3QsIHBhc3MgaW4gYGZvcm1hdGBcbiAgICogQHR5cGVkZWYge09iamVjdH0gTWFwUmVzcG9uc2VcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IG1hcFxuICAgKiBAcHJvcGVydHkge0FycmF5PE9iamVjdD59IG1hcC5kYXRhc2V0c1xuICAgKiBAcHJvcGVydHkge09iamVjdH0gbWFwLmNvbmZpZ1xuICAgKiBAcHJvcGVydHkge09iamVjdH0gbWFwLmluZm9cbiAgICogQHByb3BlcnR5IHtzdHJpbmd9IGZvcm1hdCAtIG9uZSBvZiAnY3N2JzogY3N2IGZpbGUgc3RyaW5nLCAnZ2VvanNvbic6IGdlb2pzb24gb2JqZWN0LCAncm93Jzogcm93IG9iamVjdCwgJ2tlcGxlcmdsJzogZGF0YXNldHMgYXJyYXkgc2F2ZWQgdXNpbmcgS2VwbGVyR2xTY2hlbWEuc2F2ZVxuICAgKiBAcHVibGljXG4gICAqL1xufVxuIl19