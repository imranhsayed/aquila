/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/search.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search/index */ "./src/js/search/index.js");
/* harmony import */ var _sass_search_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/search.scss */ "./src/sass/search.scss");
/* harmony import */ var _sass_search_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_search_scss__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/search/constants.js":
/*!************************************!*\
  !*** ./src/js/search/constants.js ***!
  \************************************/
/*! exports provided: STORE_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STORE_NAME", function() { return STORE_NAME; });
/**
 * Constants.
 */

var STORE_NAME = 'aquila_search';

/***/ }),

/***/ "./src/js/search/data.js":
/*!*******************************!*\
  !*** ./src/js/search/data.js ***!
  \*******************************/
/*! exports provided: DEFAULT_STATE, store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STATE", function() { return DEFAULT_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/js/search/helpers.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/js/search/constants.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * External dependencies.
 */

var _window$zustand = window.zustand,
  persist = _window$zustand.persist,
  create = _window$zustand.create,
  stores = _window$zustand.stores;

/**
 * Internal dependencies.
 */


/**
 * Constants.
 */
var DEFAULT_STATE = {
  restApiUrl: '',
  url: '',
  filterKeys: ['categories', 'post_tag'],
  filters: {},
  filterIds: [],
  pageNo: 1,
  resultMarkup: '',
  loading: false
};
var PERSISTENT_STATE_KEYS = [];

/**
 * Initialize.
 *
 * @param {Object} settings settings.
 */
var initialize = function initialize() {
  var _settings$filter_ids;
  var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var stateFromUrl = getStateFromUrl((_settings$filter_ids = settings === null || settings === void 0 ? void 0 : settings.filter_ids) !== null && _settings$filter_ids !== void 0 ? _settings$filter_ids : {});
  setStateFromUrl(settings || {}, stateFromUrl || {});
  getResult();
};

/**
 * Get State From Url.
 *
 * @param {Object} filterIds Filter Ids.
 *
 * @return {Object} data Data containing filters, page no, and url.
 */
var getStateFromUrl = function getStateFromUrl() {
  var filterIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _getState = getState(),
    filterKeys = _getState.filterKeys;
  var url = new URL(window.location.href);
  var data = {};

  // Build data from URL.
  // If it's a non-legacy URL, add filters and page no to data.
  data = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["getFiltersFromUrl"])(url);

  // // Get 'Selected Items Values' from filters, and add it to 'data' object.
  // const selectedItemValues = getSelectedItemsFromFilters( data?.filters ?? {}, filterIds, filterKeys );
  // data.selectedItems = selectedItemValues || [];
  //
  // // Get the 'Selected Items Labels Data' from selectedItemValues, and add it to 'data' object..
  // const labelsDataForMarkup = getSelectedFiltersLabels( selectedItemValues, filterKeys );
  // data.selectedItemsLabelsData = labelsDataForMarkup || [];
  //
  // // Get url with filter selection.
  // data.url = getUrlWithFilters( data?.filters ?? {}, filterKeys );

  return data;
};

/**
 * Set State From Url.
 *
 * @param {Object} settings Initial Settings.
 * @param {Object} stateFromUrl State From Url.
 */
var setStateFromUrl = function setStateFromUrl() {
  var _settings$root_url, _settings$rest_api_ur, _settings$filter_ids2;
  var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var stateFromUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // Set data to state.
  setState(_objectSpread({
    rootUrl: (_settings$root_url = settings === null || settings === void 0 ? void 0 : settings.root_url) !== null && _settings$root_url !== void 0 ? _settings$root_url : '',
    restApiUrl: (_settings$rest_api_ur = settings === null || settings === void 0 ? void 0 : settings.rest_api_url) !== null && _settings$rest_api_ur !== void 0 ? _settings$rest_api_ur : '',
    filterIds: (_settings$filter_ids2 = settings === null || settings === void 0 ? void 0 : settings.filter_ids) !== null && _settings$filter_ids2 !== void 0 ? _settings$filter_ids2 : {},
    loading: true
  }, stateFromUrl));

  // Action: Get trips with data from state.
  getResult();
};

/**
 * Get Trips.
 */
var getResult = function getResult() {
  var _getState2 = getState(),
    restApiUrl = _getState2.restApiUrl,
    filters = _getState2.filters,
    pageNo = _getState2.pageNo;
  if (!restApiUrl) {
    return;
  }

  // Add query-params to rest api url.
  var params = _objectSpread(_objectSpread({}, filters), {}, {
    page_no: pageNo
  });
  var fetchUrl = restApiUrl + '?' + new URLSearchParams(params).toString();
  fetch(fetchUrl).then(function (response) {
    return response.json();
  }).then(function (responseData) {
    console.log('responseData', responseData);
    // setState( {
    // 	loading: false,
    // 	resultCount: responseData?.data,
    // 	resultMarkup: responseData?.rendered,
    // } );
  });
};

/**
 * Add Filter.
 *
 * @param {Object} currentSelection currentSelection
 */
var addFilter = function addFilter() {
  var currentSelection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _getState3 = getState(),
    filters = _getState3.filters,
    filterKeys = _getState3.filterKeys;
  var _ref = currentSelection || {},
    key = _ref.key,
    value = _ref.value;
  console.log('currentSelection', currentSelection, filters[key]);

  // Get new filter values.
  var newFilters = _objectSpread({}, filters);
  var filterValues = filters[key] ? [].concat(_toConsumableArray(filters[key]), [value]) : [value];
  newFilters = _objectSpread(_objectSpread({}, newFilters), {}, _defineProperty({}, key, _toConsumableArray(new Set(filterValues))));
  console.log('newFilters', newFilters);

  // Add filter selections to URL and update URL.
  // const url = getUrlWithFilters( newFilters, filterKeys );
  // updateUrl( url );

  /**
   * Update state with the new data.
   * We set loading to true, before getting trips.
   */
  setState({
    url: '',
    currentSelection: currentSelection,
    filters: newFilters,
    loading: true
  });

  // Get Trips.
  getResult();
};

/**
 * Delete Filter.
 *
 * @param currentSelection
 */
var deleteFilter = function deleteFilter() {
  var currentSelection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _getState4 = getState(),
    filters = _getState4.filters,
    filterKeys = _getState4.filterKeys;
  var _ref2 = currentSelection || {},
    key = _ref2.key,
    value = _ref2.value;
  var newFilters = _objectSpread({}, filters);
  var filterValues = filters[key] || [];

  // Loop through previous filter values and delete the value in question.
  filterValues.forEach(function (prevFilterValue, index) {
    // If a match is found delete it from the array.
    if (prevFilterValue === value) {
      filterValues.splice(index, 1);
    }
  });
  newFilters = _objectSpread(_objectSpread({}, newFilters), {}, _defineProperty({}, key, filterValues));

  // Delete empty keys.
  Object.keys(newFilters).forEach(function (key) {
    if (!newFilters[key] || !newFilters[key].length) {
      delete newFilters[key];
    }
  });
  setState({
    url: '',
    currentSelection: currentSelection,
    filters: newFilters,
    loading: true
  });
  getResult();
};

/**
 * Update Url.
 *
 * @param {string} url Url.
 *
 * @return {null} Null.
 */
var updateUrl = function updateUrl(url) {
  if (!url) {
    return null;
  }
  if (window.history.pushState) {
    window.history.pushState({
      path: url
    }, '', url);
  } else {
    window.location.href = url;
  }
};

/**
 * Create store.
 */
var store = create(persist(function () {
  return _objectSpread(_objectSpread({}, DEFAULT_STATE), {}, {
    initialize: initialize,
    addFilter: addFilter,
    deleteFilter: deleteFilter
  });
}, {
  name: _constants__WEBPACK_IMPORTED_MODULE_1__["STORE_NAME"],
  partialize: function partialize(state) {
    var persistentState = {};
    PERSISTENT_STATE_KEYS.forEach(function (key) {
      persistentState[key] = state[key];
    });
    return persistentState;
  }
}));
var getState = store.getState,
  setState = store.setState;

// Add store to window.
stores[_constants__WEBPACK_IMPORTED_MODULE_1__["STORE_NAME"]] = store;

/***/ }),

/***/ "./src/js/search/helpers.js":
/*!**********************************!*\
  !*** ./src/js/search/helpers.js ***!
  \**********************************/
/*! exports provided: getFiltersFromUrl, getUrlWithFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiltersFromUrl", function() { return getFiltersFromUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlWithFilters", function() { return getUrlWithFilters; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * Get Filters From Url.
 *
 * @param {Object} url URl.
 *
 * @return {Object} data Data containing filters and pageNo.
 */
var getFiltersFromUrl = function getFiltersFromUrl() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var filterKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var data = {};
  if (!filterKeys.length) {
    return data;
  }

  /**
   * Build filter's data.
   *
   * Loop through each filter keys( constant ) and if
   * they exist in the url, push them to the filters data.
   */
  filterKeys.forEach(function (filterKey) {
    var paramName = filterKeys[filterKey].name;
    var paramValue = url.searchParams.get(paramName);

    // If the value does not exits, return.
    if (!paramValue) {
      return;
    }

    // Set page no.
    if (filterKeys.pageNo.name === paramName) {
      data.pageNo = parseInt(paramValue);
      return;
    }

    // Get translated filter values.
    var translatedFilterValues = paramValue.split(',').map(function (itemValue) {
      return parseInt(itemValue);
    });

    // Add paramValue to filters.
    data.filters = _objectSpread(_objectSpread({}, data.filters), {}, _defineProperty({}, paramName, translatedFilterValues));
  });
  return data;
};

/**
 * Get Url by Adding Filters.
 *
 * @param {Object} filters Filters.
 * @param {Object} filterKeys Keys.
 */
var getUrlWithFilters = function getUrlWithFilters() {
  var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var filterKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // Extract root url, excluding the currentSelection @todo check if we can get this via PHP.
  var rootUrl = window.location.href.replace(window.location.search, '');

  // Build URL.
  var url = new URL(rootUrl);

  // Remove the page parameter whenever any filter value is changed. (Pages should start over from Page 1)
  url.searchParams.delete(filterKeys.pageNo.name);

  // 1.Add page number if it does not already exists and at least one filter is available.
  if (!url.searchParams.has(filterKeys.pageNo.name) && Object.keys(filters).length) {
    url.searchParams.append(filterKeys.pageNo.name, '1');
  }

  // 2.Add the given keys value pairs in search params.
  Object.keys(filters).forEach(function (key) {
    url.searchParams.set(key, filters[key]);
  });

  // Covert url to string.
  url = url.toString();
  return url;
};

/***/ }),

/***/ "./src/js/search/index.js":
/*!********************************!*\
  !*** ./src/js/search/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/js/search/data.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/**
 * Global variables.
 */

var _window = window,
  customElements = _window.customElements,
  HTMLElement = _window.HTMLElement;

/**
 * Initialize data store.
 */

var getState = _data__WEBPACK_IMPORTED_MODULE_1__["store"].getState,
  subscribe = _data__WEBPACK_IMPORTED_MODULE_1__["store"].subscribe;

/**
 * AquilaSearch Class.
 */
var AquilaSearch = /*#__PURE__*/function (_HTMLElement) {
  _inherits(AquilaSearch, _HTMLElement);
  var _super = _createSuper(AquilaSearch);
  /**
   * Constructor.
   */
  function AquilaSearch() {
    var _this;
    _classCallCheck(this, AquilaSearch);
    _this = _super.call(this);

    // Subscribe to updates.
    subscribe(_this.update.bind(_assertThisInitialized(_this)));

    // Initialize State.
    var state = getState();
    state.initialize(search_settings);
    return _this;
  }

  /**
   * Update the component.
   *
   * @param {Object} currentState Current state.
   */
  _createClass(AquilaSearch, [{
    key: "update",
    value: function update() {
      var currentState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      console.log('currentState', currentState);
    }
  }]);
  return AquilaSearch;
}(HTMLElement);
/**
 * AquilaFilters Class.
 */
var AquilaFilters = /*#__PURE__*/function (_HTMLElement2) {
  _inherits(AquilaFilters, _HTMLElement2);
  var _super2 = _createSuper(AquilaFilters);
  /**
   * Constructor.
   */
  function AquilaFilters() {
    var _this2;
    _classCallCheck(this, AquilaFilters);
    _this2 = _super2.call(this);

    // Subscribe to updates.
    subscribe(_this2.update.bind(_assertThisInitialized(_this2)));
    return _this2;
  }

  /**
   * Update the component.
   *
   * @param {Object} currentState Current state.
   */
  _createClass(AquilaFilters, [{
    key: "update",
    value: function update() {
      var currentState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      console.log('currentState', currentState);
    }
  }]);
  return AquilaFilters;
}(HTMLElement);
/**
 * AquilaCheckboxAccordion Class.
 */
var AquilaCheckboxAccordion = /*#__PURE__*/function (_HTMLElement3) {
  _inherits(AquilaCheckboxAccordion, _HTMLElement3);
  var _super3 = _createSuper(AquilaCheckboxAccordion);
  /**
   * Constructor.
   */
  function AquilaCheckboxAccordion() {
    var _this3;
    _classCallCheck(this, AquilaCheckboxAccordion);
    _this3 = _super3.call(this);

    // Elements.
    _this3.filterKey = _this3.getAttribute('key');
    _this3.content = _this3.querySelector('.checkbox-accordion__content');
    _this3.accordionHandle = _this3.querySelector('.checkbox-accordion__handle');
    if (!_this3.accordionHandle || !_this3.content || !_this3.filterKey) {
      return _possibleConstructorReturn(_this3);
    }

    // Subscribe to store.
    subscribe(_this3.update.bind(_assertThisInitialized(_this3)));
    _this3.accordionHandle.addEventListener('click', function (event) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["toggleAccordionContent"])(event, _assertThisInitialized(_this3), _this3.content);
    });
    return _this3;
  }

  /**
   * Update.
   *
   * @param {Object} currentState CurrentState.
   */
  _createClass(AquilaCheckboxAccordion, [{
    key: "update",
    value: function update() {
      var currentState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!this.filterKey) {
        return;
      }
      var checkboxItems = currentState.checkboxItems;

      /**
       * If the state of this checkbox filter is open, then set then
       * active state of this component to true, so it can be opened.
       */
      // if ( checkboxItems[ this.filterKey ].isOpen ) {
      // 	this.setAttribute( 'active', 'true' );
      // 	this.content.style.height = 'auto';
      // } else {
      // 	this.removeAttribute( 'active' );
      // 	this.content.style.height = '0';
      // }
    }
  }]);
  return AquilaCheckboxAccordion;
}(HTMLElement);
/**
 * AquilaCheckboxAccordionChild Class.
 */
var AquilaCheckboxAccordionChild = /*#__PURE__*/function (_HTMLElement4) {
  _inherits(AquilaCheckboxAccordionChild, _HTMLElement4);
  var _super4 = _createSuper(AquilaCheckboxAccordionChild);
  /**
   * Constructor.
   */
  function AquilaCheckboxAccordionChild() {
    var _this4;
    _classCallCheck(this, AquilaCheckboxAccordionChild);
    _this4 = _super4.call(this);
    _this4.content = _this4.querySelector('.checkbox-accordion__child-content');
    _this4.accordionHandle = _this4.querySelector('.checkbox-accordion__child-handle-icon');
    _this4.inputEl = _this4.querySelector('input');
    if (_this4.accordionHandle && _this4.content) {
      _this4.accordionHandle.addEventListener('click', function (event) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["toggleAccordionContent"])(event, _assertThisInitialized(_this4), _this4.content);
      });
    }
    if (_this4.inputEl) {
      _this4.inputEl.addEventListener('click', function (event) {
        return _this4.handleCheckboxInputClick(event);
      });
    }
    return _this4;
  }
  _createClass(AquilaCheckboxAccordionChild, [{
    key: "handleCheckboxInputClick",
    value: function handleCheckboxInputClick(event) {
      var _getState = getState(),
        addFilter = _getState.addFilter,
        deleteFilter = _getState.deleteFilter;
      var targetEl = event.target;
      this.filterKey = targetEl.getAttribute('data-key');
      if (targetEl.checked) {
        addFilter({
          key: this.filterKey,
          value: parseInt(targetEl.value)
        });
      } else {
        deleteFilter({
          key: this.filterKey,
          value: parseInt(targetEl.value)
        });
      }
    }
  }]);
  return AquilaCheckboxAccordionChild;
}(HTMLElement);
/**
 * Initialize.
 */
customElements.define('aquila-checkbox-accordion', AquilaCheckboxAccordion);
customElements.define('aquila-checkbox-accordion-child', AquilaCheckboxAccordionChild);
customElements.define('aquila-search', AquilaSearch);

/***/ }),

/***/ "./src/js/utils/index.js":
/*!*******************************!*\
  !*** ./src/js/utils/index.js ***!
  \*******************************/
/*! exports provided: toggleAccordionContent, slideElementDown, slideElementUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleAccordionContent", function() { return toggleAccordionContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideElementDown", function() { return slideElementDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideElementUp", function() { return slideElementUp; });
/**
 * Toggle Accordion Content.
 *
 * @param {Event} event Event.
 * @param {Object} accordionEl Accordion Element
 * @param {Object} contentEl Content Element.
 *
 * @return {null} null
 */
var toggleAccordionContent = function toggleAccordionContent(event, accordionEl, contentEl) {
  event.preventDefault();
  event.stopPropagation();
  if (!accordionEl || !contentEl) {
    return null;
  }
  accordionEl.toggleAttribute('active');
  if (!accordionEl.hasAttribute('active')) {
    slideElementUp(contentEl, 600);
  } else {
    slideElementDown(contentEl, 600);
  }
};

/**
 * Slide element down.
 *
 * @param {Object} element Target element.
 * @param {number} duration Animation duration.
 * @param {Function} callback Callback function.
 */
var slideElementDown = function slideElementDown(element) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  element.style.height = "".concat(element.scrollHeight, "px");
  setTimeout(function () {
    element.style.height = 'auto';
    if (callback) {
      callback();
    }
  }, duration);
};

/**
 * Slide element up.
 *
 * @param {Object} element Target element.
 * @param {number} duration Animation duration.
 * @param {Function} callback Callback function.
 */
var slideElementUp = function slideElementUp(element) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  element.style.height = "".concat(element.scrollHeight, "px");
  element.offsetHeight; // eslint-disable-line
  element.style.height = '0px';
  setTimeout(function () {
    element.style.height = null;
    if (callback) {
      callback();
    }
  }, duration);
};

/***/ }),

/***/ "./src/sass/search.scss":
/*!******************************!*\
  !*** ./src/sass/search.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=search.js.map