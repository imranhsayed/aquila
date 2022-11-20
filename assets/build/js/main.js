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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/zustand/middleware.js":
/*!********************************************!*\
  !*** ./node_modules/zustand/middleware.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

var reduxImpl = function reduxImpl(reducer, initial) {
  return function (set, _get, api) {
    api.dispatch = function (action) {
      set(function (state) {
        return reducer(state, action);
      }, false, action);
      return action;
    };
    api.dispatchFromDevtools = true;
    return _extends({
      dispatch: function dispatch() {
        var _ref;
        return (_ref = api).dispatch.apply(_ref, arguments);
      }
    }, initial);
  };
};
var redux = reduxImpl;

var _excluded = ["enabled", "anonymousActionType"];

var devtoolsImpl = function devtoolsImpl(fn, devtoolsOptions) {
  if (devtoolsOptions === void 0) {
    devtoolsOptions = {};
  }
  return function (set, get, api) {
    var _devtoolsOptions = devtoolsOptions,
      enabled = _devtoolsOptions.enabled,
      anonymousActionType = _devtoolsOptions.anonymousActionType,
      options = _objectWithoutPropertiesLoose(_devtoolsOptions, _excluded);
    var extensionConnector;
    try {
      extensionConnector = (enabled != null ? enabled : "development" !== "production") && window.__REDUX_DEVTOOLS_EXTENSION__;
    } catch (_unused) {
    }
    if (!extensionConnector) {
      if ( true && enabled) {
        console.warn('[zustand devtools middleware] Please install/enable Redux devtools extension');
      }
      return fn(set, get, api);
    }
    var extension = extensionConnector.connect(options);
    var isRecording = true;
    api.setState = function (state, replace, nameOrAction) {
      var r = set(state, replace);
      if (!isRecording) return r;
      extension.send(nameOrAction === undefined ? {
        type: anonymousActionType || 'anonymous'
      } : typeof nameOrAction === 'string' ? {
        type: nameOrAction
      } : nameOrAction, get());
      return r;
    };
    var setStateFromDevtools = function setStateFromDevtools() {
      var originalIsRecording = isRecording;
      isRecording = false;
      set.apply(void 0, arguments);
      isRecording = originalIsRecording;
    };
    var initialState = fn(api.setState, get, api);
    extension.init(initialState);
    if (api.dispatchFromDevtools && typeof api.dispatch === 'function') {
      var didWarnAboutReservedActionType = false;
      var originalDispatch = api.dispatch;
      api.dispatch = function () {
        for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
          a[_key] = arguments[_key];
        }
        if ( true && a[0].type === '__setState' && !didWarnAboutReservedActionType) {
          console.warn('[zustand devtools middleware] "__setState" action type is reserved ' + 'to set state from the devtools. Avoid using it.');
          didWarnAboutReservedActionType = true;
        }
        originalDispatch.apply(void 0, a);
      };
    }
    extension.subscribe(function (message) {
      switch (message.type) {
        case 'ACTION':
          if (typeof message.payload !== 'string') {
            console.error('[zustand devtools middleware] Unsupported action format');
            return;
          }
          return parseJsonThen(message.payload, function (action) {
            if (action.type === '__setState') {
              setStateFromDevtools(action.state);
              return;
            }
            if (!api.dispatchFromDevtools) return;
            if (typeof api.dispatch !== 'function') return;
            api.dispatch(action);
          });
        case 'DISPATCH':
          switch (message.payload.type) {
            case 'RESET':
              setStateFromDevtools(initialState);
              return extension.init(api.getState());
            case 'COMMIT':
              return extension.init(api.getState());
            case 'ROLLBACK':
              return parseJsonThen(message.state, function (state) {
                setStateFromDevtools(state);
                extension.init(api.getState());
              });
            case 'JUMP_TO_STATE':
            case 'JUMP_TO_ACTION':
              return parseJsonThen(message.state, function (state) {
                setStateFromDevtools(state);
              });
            case 'IMPORT_STATE':
              {
                var _nextLiftedState$comp;
                var nextLiftedState = message.payload.nextLiftedState;
                var lastComputedState = (_nextLiftedState$comp = nextLiftedState.computedStates.slice(-1)[0]) == null ? void 0 : _nextLiftedState$comp.state;
                if (!lastComputedState) return;
                setStateFromDevtools(lastComputedState);
                extension.send(null,
                nextLiftedState);
                return;
              }
            case 'PAUSE_RECORDING':
              return isRecording = !isRecording;
          }
          return;
      }
    });
    return initialState;
  };
};
var devtools = devtoolsImpl;
var parseJsonThen = function parseJsonThen(stringified, f) {
  var parsed;
  try {
    parsed = JSON.parse(stringified);
  } catch (e) {
    console.error('[zustand devtools middleware] Could not parse the received json', e);
  }
  if (parsed !== undefined) f(parsed);
};

var subscribeWithSelectorImpl = function subscribeWithSelectorImpl(fn) {
  return function (set, get, api) {
    var origSubscribe = api.subscribe;
    api.subscribe = function (selector, optListener, options) {
      var listener = selector;
      if (optListener) {
        var equalityFn = (options == null ? void 0 : options.equalityFn) || Object.is;
        var currentSlice = selector(api.getState());
        listener = function listener(state) {
          var nextSlice = selector(state);
          if (!equalityFn(currentSlice, nextSlice)) {
            var previousSlice = currentSlice;
            optListener(currentSlice = nextSlice, previousSlice);
          }
        };
        if (options != null && options.fireImmediately) {
          optListener(currentSlice, currentSlice);
        }
      }
      return origSubscribe(listener);
    };
    var initialState = fn(set, get, api);
    return initialState;
  };
};
var subscribeWithSelector = subscribeWithSelectorImpl;

var combine = function combine(initialState, create) {
  return function () {
    return Object.assign({}, initialState, create.apply(void 0, arguments));
  };
};

var toThenable = function toThenable(fn) {
  return function (input) {
    try {
      var result = fn(input);
      if (result instanceof Promise) {
        return result;
      }
      return {
        then: function then(onFulfilled) {
          return toThenable(onFulfilled)(result);
        },
        catch: function _catch(_onRejected) {
          return this;
        }
      };
    } catch (e) {
      return {
        then: function then(_onFulfilled) {
          return this;
        },
        catch: function _catch(onRejected) {
          return toThenable(onRejected)(e);
        }
      };
    }
  };
};
var persistImpl = function persistImpl(config, baseOptions) {
  return function (set, get, api) {
    var options = _extends({
      getStorage: function getStorage() {
        return localStorage;
      },
      serialize: JSON.stringify,
      deserialize: JSON.parse,
      partialize: function partialize(state) {
        return state;
      },
      version: 0,
      merge: function merge(persistedState, currentState) {
        return _extends({}, currentState, persistedState);
      }
    }, baseOptions);
    var _hasHydrated = false;
    var hydrationListeners = new Set();
    var finishHydrationListeners = new Set();
    var storage;
    try {
      storage = options.getStorage();
    } catch (e) {
    }
    if (!storage) {
      return config(function () {
        console.warn("[zustand persist middleware] Unable to update item '" + options.name + "', the given storage is currently unavailable.");
        set.apply(void 0, arguments);
      }, get, api);
    }
    var thenableSerialize = toThenable(options.serialize);
    var setItem = function setItem() {
      var state = options.partialize(_extends({}, get()));
      var errorInSync;
      var thenable = thenableSerialize({
        state: state,
        version: options.version
      }).then(function (serializedValue) {
        return storage.setItem(options.name, serializedValue);
      }).catch(function (e) {
        errorInSync = e;
      });
      if (errorInSync) {
        throw errorInSync;
      }
      return thenable;
    };
    var savedSetState = api.setState;
    api.setState = function (state, replace) {
      savedSetState(state, replace);
      void setItem();
    };
    var configResult = config(function () {
      set.apply(void 0, arguments);
      void setItem();
    }, get, api);

    var stateFromStorage;

    var hydrate = function hydrate() {
      if (!storage) return;
      _hasHydrated = false;
      hydrationListeners.forEach(function (cb) {
        return cb(get());
      });
      var postRehydrationCallback = (options.onRehydrateStorage == null ? void 0 : options.onRehydrateStorage(get())) || undefined;

      return toThenable(storage.getItem.bind(storage))(options.name).then(function (storageValue) {
        if (storageValue) {
          return options.deserialize(storageValue);
        }
      }).then(function (deserializedStorageValue) {
        if (deserializedStorageValue) {
          if (typeof deserializedStorageValue.version === 'number' && deserializedStorageValue.version !== options.version) {
            if (options.migrate) {
              return options.migrate(deserializedStorageValue.state, deserializedStorageValue.version);
            }
            console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
          } else {
            return deserializedStorageValue.state;
          }
        }
      }).then(function (migratedState) {
        var _get;
        stateFromStorage = options.merge(migratedState, (_get = get()) != null ? _get : configResult);
        set(stateFromStorage, true);
        return setItem();
      }).then(function () {
        postRehydrationCallback == null ? void 0 : postRehydrationCallback(stateFromStorage, undefined);
        _hasHydrated = true;
        finishHydrationListeners.forEach(function (cb) {
          return cb(stateFromStorage);
        });
      }).catch(function (e) {
        postRehydrationCallback == null ? void 0 : postRehydrationCallback(undefined, e);
      });
    };
    api.persist = {
      setOptions: function setOptions(newOptions) {
        options = _extends({}, options, newOptions);
        if (newOptions.getStorage) {
          storage = newOptions.getStorage();
        }
      },
      clearStorage: function clearStorage() {
        var _storage;
        (_storage = storage) == null ? void 0 : _storage.removeItem(options.name);
      },
      getOptions: function getOptions() {
        return options;
      },
      rehydrate: function rehydrate() {
        return hydrate();
      },
      hasHydrated: function hasHydrated() {
        return _hasHydrated;
      },
      onHydrate: function onHydrate(cb) {
        hydrationListeners.add(cb);
        return function () {
          hydrationListeners.delete(cb);
        };
      },
      onFinishHydration: function onFinishHydration(cb) {
        finishHydrationListeners.add(cb);
        return function () {
          finishHydrationListeners.delete(cb);
        };
      }
    };
    hydrate();
    return stateFromStorage || configResult;
  };
};
var persist = persistImpl;

exports.combine = combine;
exports.devtools = devtools;
exports.persist = persist;
exports.redux = redux;
exports.subscribeWithSelector = subscribeWithSelector;


/***/ }),

/***/ "./node_modules/zustand/vanilla.js":
/*!*****************************************!*\
  !*** ./node_modules/zustand/vanilla.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createStoreImpl = function createStoreImpl(createState) {
  var state;
  var listeners = new Set();
  var setState = function setState(partial, replace) {
    var nextState = typeof partial === 'function' ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      var _previousState = state;
      state = (replace != null ? replace : typeof nextState !== 'object') ? nextState : Object.assign({}, state, nextState);
      listeners.forEach(function (listener) {
        return listener(state, _previousState);
      });
    }
  };
  var getState = function getState() {
    return state;
  };
  var subscribe = function subscribe(listener) {
    listeners.add(listener);
    return function () {
      return listeners.delete(listener);
    };
  };
  var destroy = function destroy() {
    return listeners.clear();
  };
  var api = {
    setState: setState,
    getState: getState,
    subscribe: subscribe,
    destroy: destroy
  };
  state = createState(setState, getState, api);
  return api;
};
var createStore = function createStore(createState) {
  return createState ? createStoreImpl(createState) : createStoreImpl;
};

module.exports = createStore;


/***/ }),

/***/ "./src/img/cats.jpg":
/*!**************************!*\
  !*** ./src/img/cats.jpg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/cats.jpg");

/***/ }),

/***/ "./src/img/patterns/cover.jpg":
/*!************************************!*\
  !*** ./src/img/patterns/cover.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("../../src/img/patterns/cover.jpg");

/***/ }),

/***/ "./src/js/carousel/index.js":
/*!**********************************!*\
  !*** ./src/js/carousel/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
(function ($) {
  var SlickCarousel = /*#__PURE__*/function () {
    function SlickCarousel() {
      _classCallCheck(this, SlickCarousel);
      this.initiateCarousel();
    }
    _createClass(SlickCarousel, [{
      key: "initiateCarousel",
      value: function initiateCarousel() {
        $('.posts-carousel').slick({
          autoplay: true,
          autoplaySpeed: 1000,
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          responsive: [{
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }, {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }, {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
        });
      }
    }]);
    return SlickCarousel;
  }();
  new SlickCarousel();
})(jQuery);

/***/ }),

/***/ "./src/js/clock/index.js":
/*!*******************************!*\
  !*** ./src/js/clock/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
(function ($) {
  /**
   * Clock Class.
   */
  var Clock = /*#__PURE__*/function () {
    /**
     * Constructor
     */
    function Clock() {
      _classCallCheck(this, Clock);
      this.initializeClock();
    }

    /**
     * initializeClock
     */
    _createClass(Clock, [{
      key: "initializeClock",
      value: function initializeClock() {
        var _this = this;
        setInterval(function () {
          return _this.time();
        }, 1000);
      }

      /**
       * Numpad
       *
       * @param {String} str String
       *
       * @return {string} String
       */
    }, {
      key: "numPad",
      value: function numPad(str) {
        var cStr = str.toString();
        if (2 > cStr.length) {
          str = 0 + cStr;
        }
        return str;
      }

      /**
       * Time
       */
    }, {
      key: "time",
      value: function time() {
        var currDate = new Date();
        var currSec = currDate.getSeconds();
        var currMin = currDate.getMinutes();
        var curr24Hr = currDate.getHours();
        var ampm = 12 <= curr24Hr ? 'pm' : 'am';
        var currHr = curr24Hr % 12;
        currHr = currHr ? currHr : 12;
        var stringTime = currHr + ':' + this.numPad(currMin) + ':' + this.numPad(currSec);
        var timeEmojiEl = $('#time-emoji');
        if (5 <= curr24Hr && 17 >= curr24Hr) {
          timeEmojiEl.text('🌞');
        } else {
          timeEmojiEl.text('🌜');
        }
        $('#time').text(stringTime);
        $('#ampm').text(ampm);
      }
    }]);
    return Clock;
  }();
  new Clock();
})(jQuery);

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clock */ "./src/js/clock/index.js");
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_clock__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel */ "./src/js/carousel/index.js");
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _posts_loadmore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts/loadmore */ "./src/js/posts/loadmore.js");
/* harmony import */ var _posts_loadmore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_posts_loadmore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _zustand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zustand */ "./src/js/zustand.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_cats_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/cats.jpg */ "./src/img/cats.jpg");
/* harmony import */ var _img_patterns_cover_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/patterns/cover.jpg */ "./src/img/patterns/cover.jpg");





// Styles


// Images.



/***/ }),

/***/ "./src/js/posts/loadmore.js":
/*!**********************************!*\
  !*** ./src/js/posts/loadmore.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
(function ($) {
  /**
   * Class Loadmore.
   */
  var LoadMore = /*#__PURE__*/function () {
    /**
     * Contructor.
     */
    function LoadMore() {
      var _siteConfig$ajaxUrl, _siteConfig, _siteConfig$ajax_nonc, _siteConfig2;
      _classCallCheck(this, LoadMore);
      this.ajaxUrl = (_siteConfig$ajaxUrl = (_siteConfig = siteConfig) === null || _siteConfig === void 0 ? void 0 : _siteConfig.ajaxUrl) !== null && _siteConfig$ajaxUrl !== void 0 ? _siteConfig$ajaxUrl : '';
      this.ajaxNonce = (_siteConfig$ajax_nonc = (_siteConfig2 = siteConfig) === null || _siteConfig2 === void 0 ? void 0 : _siteConfig2.ajax_nonce) !== null && _siteConfig$ajax_nonc !== void 0 ? _siteConfig$ajax_nonc : '';
      this.loadMoreBtn = $('#load-more');
      this.loadingTextEl = $('#loading-text');
      this.isRequestProcessing = false;
      this.options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0 // 1.0 means set isIntersecting to true when element comes in 100% view.
      };

      this.init();
    }
    _createClass(LoadMore, [{
      key: "init",
      value: function init() {
        var _this = this;
        if (!this.loadMoreBtn.length) {
          return;
        }
        this.totalPagesCount = $('#post-pagination').data('max-pages');

        /**
         * Add the IntersectionObserver api, and listen to the load more intersection status.
         * so that intersectionObserverCallback gets called if the element intersection status changes.
         *
         * @type {IntersectionObserver}
         */
        var observer = new IntersectionObserver(function (entries) {
          return _this.intersectionObserverCallback(entries);
        }, this.options);
        observer.observe(this.loadMoreBtn[0]);
      }

      /**
       * Gets called on initial render with status 'isIntersecting' as false and then
       * everytime element intersection status changes.
       *
       * @param {array} entries No of elements under observation.
       *
       */
    }, {
      key: "intersectionObserverCallback",
      value: function intersectionObserverCallback(entries) {
        var _this2 = this;
        // array of observing elements

        // The logic is apply for each entry ( in this case it's just one loadmore button )
        entries.forEach(function (entry) {
          // If load more button in view.
          if (entry !== null && entry !== void 0 && entry.isIntersecting) {
            _this2.handleLoadMorePosts();
          }
        });
      }

      /**
       * Load more posts.
       *
       * 1.Make an ajax request, by incrementing the page no. by one on each request.
       * 2.Append new/more posts to the existing content.
       * 3.If the response is 0 ( which means no more posts available ), remove the load-more button from DOM.
       * Once the load-more button gets removed, the IntersectionObserverAPI callback will not be triggered, which means
       * there will be no further ajax request since there won't be any more posts available.
       *
       * @return null
       */
    }, {
      key: "handleLoadMorePosts",
      value: function handleLoadMorePosts() {
        var _this3 = this;
        // Get page no from data attribute of load-more button.
        var page = this.loadMoreBtn.data('page');
        if (!page || this.isRequestProcessing) {
          return null;
        }
        var nextPage = parseInt(page) + 1; // Increment page count by one.
        this.isRequestProcessing = true;
        $.ajax({
          url: this.ajaxUrl,
          type: 'post',
          data: {
            page: page,
            action: 'load_more',
            ajax_nonce: this.ajaxNonce
          },
          success: function success(response) {
            _this3.loadMoreBtn.data('page', nextPage);
            $('#load-more-content').append(response);
            _this3.removeLoadMoreIfOnLastPage(nextPage);
            _this3.isRequestProcessing = false;
          },
          error: function error(response) {
            console.log(response);
            _this3.isRequestProcessing = false;
          }
        });
      }

      /**
       * Remove Load more Button If on last page.
       *
       * @param {int} nextPage New Page.
       */
    }, {
      key: "removeLoadMoreIfOnLastPage",
      value: function removeLoadMoreIfOnLastPage(nextPage) {
        if (nextPage + 1 > this.totalPagesCount) {
          this.loadMoreBtn.remove();
        }
      }
    }]);
    return LoadMore;
  }();
  new LoadMore();
})(jQuery);

/***/ }),

/***/ "./src/js/zustand.js":
/*!***************************!*\
  !*** ./src/js/zustand.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand/middleware */ "./node_modules/zustand/middleware.js");
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zustand_middleware__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zustand_vanilla__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand/vanilla */ "./node_modules/zustand/vanilla.js");
/* harmony import */ var zustand_vanilla__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zustand_vanilla__WEBPACK_IMPORTED_MODULE_1__);


var stores = [];
var zustand = {
  persist: zustand_middleware__WEBPACK_IMPORTED_MODULE_0__["persist"],
  create: zustand_vanilla__WEBPACK_IMPORTED_MODULE_1___default.a,
  stores: stores
};
window.zustand = zustand;

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.js.map