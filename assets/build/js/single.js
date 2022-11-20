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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/single.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/posts/loadmore-single.js":
/*!*****************************************!*\
  !*** ./src/js/posts/loadmore-single.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
(function ($) {
  var LoadMoreSingle = /*#__PURE__*/function () {
    function LoadMoreSingle() {
      var _siteConfig$ajaxUrl, _siteConfig, _siteConfig$ajax_nonc, _siteConfig2;
      _classCallCheck(this, LoadMoreSingle);
      this.ajaxUrl = (_siteConfig$ajaxUrl = (_siteConfig = siteConfig) === null || _siteConfig === void 0 ? void 0 : _siteConfig.ajaxUrl) !== null && _siteConfig$ajaxUrl !== void 0 ? _siteConfig$ajaxUrl : '';
      this.ajaxNonce = (_siteConfig$ajax_nonc = (_siteConfig2 = siteConfig) === null || _siteConfig2 === void 0 ? void 0 : _siteConfig2.ajax_nonce) !== null && _siteConfig$ajax_nonc !== void 0 ? _siteConfig$ajax_nonc : '';
      this.loadMoreBtn = $('#single-post-load-more-btn');
      this.loadingTextEl = $('#single-loading-text');
      this.isRequestProcessing = false;
      this.init();
    }
    _createClass(LoadMoreSingle, [{
      key: "init",
      value: function init() {
        var _this = this;
        if (!this.loadMoreBtn.length) {
          return;
        }
        this.totalPagesCount = this.loadMoreBtn.data('max-pages');
        this.loadMoreBtn.on('click', function () {
          _this.handleLoadMorePosts();
        });
      }

      /**
       * Load more posts.
       *
       * 1.Make an ajax request, by incrementing the page no. by one on each request.
       * 2.Append new/more posts to the existing content.
       * 3.If it's the last page, remove the load-more button from DOM.
       *
       * @return null
       */
    }, {
      key: "handleLoadMorePosts",
      value: function handleLoadMorePosts() {
        var _this2 = this;
        // Get page no from data attribute of load-more button.
        var page = this.loadMoreBtn.data('page');
        var singlePostId = this.loadMoreBtn.data('single-post-id');
        if (undefined === page || this.isRequestProcessing) {
          return null;
        }
        var nextPage = parseInt(page) + 1; // Increment page count by one.

        this.toggleLoading(true);
        $.ajax({
          url: this.ajaxUrl,
          type: 'post',
          data: {
            page: page,
            single_post_id: singlePostId,
            action: 'single_load_more',
            ajax_nonce: this.ajaxNonce
          },
          success: function success(response) {
            _this2.loadMoreBtn.data('page', nextPage);
            $('#single-post-load-more-content').append(response);
            _this2.removeLoadMoreIfOnLastPage(nextPage);
            _this2.toggleLoading(false);
          },
          error: function error(response) {
            console.log(response);
            _this2.toggleLoading(false);
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
    }, {
      key: "toggleLoading",
      value:
      /**
       * Toggle Loading
       *
       * Show or hide the loading text.
       *
       * @param isLoading
       */
      function toggleLoading(isLoading) {
        this.isRequestProcessing = isLoading;
        if (isLoading) {
          this.loadingTextEl.addClass('block');
          this.loadingTextEl.removeClass('hidden');
        } else {
          this.loadingTextEl.addClass('hidden');
          this.loadingTextEl.removeClass('block');
        }
      }
    }]);
    return LoadMoreSingle;
  }();
  new LoadMoreSingle();
})(jQuery);

/***/ }),

/***/ "./src/js/single.js":
/*!**************************!*\
  !*** ./src/js/single.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_single_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/single.scss */ "./src/sass/single.scss");
/* harmony import */ var _sass_single_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_single_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_posts_loadmore_single__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/posts/loadmore-single */ "./src/js/posts/loadmore-single.js");
/* harmony import */ var _js_posts_loadmore_single__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_posts_loadmore_single__WEBPACK_IMPORTED_MODULE_1__);
// Styles


// Scripts


/***/ }),

/***/ "./src/sass/single.scss":
/*!******************************!*\
  !*** ./src/sass/single.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=single.js.map