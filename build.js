/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	// JS
	__webpack_require__(7);
	__webpack_require__(8);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./style.sass", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./style.sass");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".something {\n  font-size: 12px; }\n\nbody {\n  background-color: #EEE;\n  font-family: chalkboard;\n  margin: 0; }\n\n.is-hidden {\n  visibility: hidden; }\n\n.overlay-view {\n  background-color: #ffffff;\n  visibility: hidden;\n  position: absolute;\n  transition: 0.5s;\n  height: 100%;\n  width: 100%;\n  z-index: 3;\n  left: 0;\n  top: 0; }\n  .overlay-view__close-btn {\n    height: 1em;\n    width: 1em;\n    background-color: #000000;\n    position: absolute;\n    top: 0;\n    right: 0; }\n\n.from-right-to-left {\n  animation: from-right-to-left 1s;\n  visibility: visible; }\n\n.from-right-to-left-reversed {\n  left: 100%;\n  visibility: visible; }\n\n.fade-in-and-scale {\n  animation: fade-in-and-scale 0.5s;\n  visibility: visible; }\n\n@keyframes from-right-to-left {\n  0% {\n    left: 100%; }\n  100% {\n    left: 0%; } }\n\n@keyframes from-center-to-right {\n  0% {\n    left: 100%; }\n  100% {\n    left: 0%; } }\n\n@keyframes fade-in-and-scale {\n  0% {\n    transform: scale(0.5);\n    left: 0%;\n    opacity: 0; }\n  100% {\n    transform: scale(1);\n    opacity: 1; } }\n\n.nav {\n  box-shadow: 0px -11px 7px 9px #b1b1b1;\n  -webkit-justify-content: space-around;\n  justify-content: space-around;\n  background: #ffffff;\n  margin-bottom: 1px;\n  padding-top: 0.5em;\n  position: relative;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -moz-flex;\n  display: -webkit-flex;\n  display: flex;\n  overflow: auto;\n  z-index: 2; }\n  .nav--button {\n    position: relative;\n    padding: 0 1em; }\n  .nav .nav__items-pending-count {\n    background-color: #d90017;\n    border-radius: 50%;\n    text-align: center;\n    position: absolute;\n    font-weight: bold;\n    min-width: 1.1em;\n    font-size: 0.6em;\n    padding: 3px;\n    color: white;\n    right: 0.1em;\n    top: -0.5em; }\n\n.welcome-banner {\n  margin-top: -1px;\n  display: -webkit-box;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: -moz-flex;\n  display: -webkit-flex;\n  display: flex; }\n\n.welcome-container {\n  background-color: #ffffff;\n  padding: 1em; }\n  .welcome-container__signing-content {\n    padding: 4.5em 0 6em 0;\n    display: table;\n    margin: 0 auto; }\n  .welcome-container__disclaimer {\n    color: #b1b1b1;\n    text-align: center;\n    font-size: 0.8em; }\n\n.signing-content--button {\n  background-repeat: no-repeat;\n  background-size: contain;\n  display: inline-block;\n  border-radius: 3px;\n  line-height: 2.3em;\n  text-align: center;\n  font-size: 1.3em;\n  height: 2.5em;\n  color: white;\n  width: 7em; }\n\n.signing-content__sign-up {\n  margin-right: 1em;\n  background-image: url(" + __webpack_require__(4) + "); }\n\n.signing-content__sign-in {\n  margin-left: 1em;\n  background-image: url(" + __webpack_require__(5) + "); }\n\n.application-container {\n  overflow-x: hidden;\n  position: relative;\n  max-width: 420px;\n  margin: 0 auto; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzAxNCA3OS4xNTY3OTcsIDIwMTQvMDgvMjAtMDk6NTM6MDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwOUQ2REFDOUY1MTExRTZCMEM3RjAzQjREMzQ1RkU0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYwOUQ2REFEOUY1MTExRTZCMEM3RjAzQjREMzQ1RkU0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODRBNzNBQzc5RjI2MTFFNkIwQzdGMDNCNEQzNDVGRTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODRBNzNBQzg5RjI2MTFFNkIwQzdGMDNCNEQzNDVGRTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBAAREPDxETERUSEhUUERQRFBoUFhYUGiYaGhwaGiYwIx4eHh4jMCsuJycnLis1NTAwNTVAQD9AQEBAQEBAQEBAQED/wAARCAAnAHADASIAAhEBAxEB/8QAdgAAAgMBAQAAAAAAAAAAAAAAAAMBAgQFBgEAAgMBAQAAAAAAAAAAAAAAAQMCBAUABhAAAgIBAwQCAgMAAAAAAAAAAAERAgMhEhMxQVEEcSJhkYHRYhEAAgIBAwQDAAAAAAAAAAAAAAEREgIhMQNRIgQUQXET/9oADAMBAAIRAxEAPwD1lm25erfciSHaULdxFh0DpQCeQtXIGToGWar17i72T+BOTPut+F0KPMMSFZM00jr+izYmtorHch5BqRVyz1HSAnkL1ekslUjdDUvJYVvJ3hqC6GEptOU4aFbyd50HXQqSLfZfnsToQ5MtrJGtKE7mupNsuyjs+y0Lurh6ScXLnyWyW3Sob+vgbxy9xeeSSNTzG71/VWxXyp7nrtfY5XoK2b2qJaKv3fwjuuwOXmq4RWyYrJSFNf0IdmzU2KvVWcsnweSm4ZU5U0pKV01t18FuQrfpJneSGaeCTUoo5czT1NXIHIZeUOUlQHsLqbOQOQx8xKzA/MPsLqdN1SbUrTwysV8oAM51N7uBwk46nH9jB61/Zb5FWW+RJpdv7ABbjWpDOw71aerjyT67Vsm2HD3OPg27/wDL/QAUeXfukV9ld7mFVx5JYADjmyghnEai7rQxZZVtAA9D4k0UmH5cW0F/YrqAFwpufknUtjpa91RNVlxNnCX8sAA5hxuHCLY2msq0bwf/2Q=="

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzAxNCA3OS4xNTY3OTcsIDIwMTQvMDgvMjAtMDk6NTM6MDIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwOUQ2REIwOUY1MTExRTZCMEM3RjAzQjREMzQ1RkU0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYwOUQ2REIxOUY1MTExRTZCMEM3RjAzQjREMzQ1RkU0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjA5RDZEQUU5RjUxMTFFNkIwQzdGMDNCNEQzNDVGRTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjA5RDZEQUY5RjUxMTFFNkIwQzdGMDNCNEQzNDVGRTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAQCwsLDAsQDAwQFw8NDxcbFBAQFBsfFxcXFxcfHhcaGhoaFx4eIyUnJSMeLy8zMy8vQEBAQEBAQEBAQEBAQEBAAREPDxETERUSEhUUERQRFBoUFhYUGiYaGhwaGiYwIx4eHh4jMCsuJycnLis1NTAwNTVAQD9AQEBAQEBAQEBAQED/wAARCAAnAHADASIAAhEBAxEB/8QAdgAAAwEBAQEAAAAAAAAAAAAAAAEDAgQFBgEBAAIDAQAAAAAAAAAAAAAAAgMFAAEEBhAAAgIBAwQDAQEAAAAAAAAAAAERAgMhMRJBUWETcYEEkSIRAAIBAwQCAgMAAAAAAAAAAAABAhESAyExQQQiE1EFYTIU/9oADAMBAAIRAxEAPwD652bcty2NWI8w5k1pyXou+L12ZmJ6EXkBZgvHUUc1CrqjLUAsituFn9oilBonhmTFoJ/Im0ZbZG9CVNM1KGrRsyMpdTPOyMqjLDspbl8moOJZiuPM+rlBYHEvoNNpynDRJ5aqNVqL3VduHU1cFo5/YJ5Dmvm4knmbLWwpnm/J1PKL2nI8pN5xLHUjl2UuT0a5ja/RB51M8m/aF4xR7OlUzv8AfW2/9HzhTV8l26nl2zwx1/U0F9dNbDj9ha9z0m1bw/OhO0onj/TW8cocbSVa5Q8es71OTJ1pLYscH2EJaNk+cA80IVobh/5fZkMs12OSSknqd8ZwmtGVtnUasFl5PQ425tqbrZLbQLnQXqqZ/Sr0yOm8OJTlP4aJJ28gB6COyrvyeNyfu7a218a/AtZ1BgAkRsaNuY6gBpmLkmxpeQASCbrPQ6cV8q6N/TADUqU1Fjuu8S9r8kllq12b0Zh4qzNcijtcAOLN6uS36v8ATpTYlalObq2p7p6GPSrXVa3qpcS7JL+sAKzJ666F5h9tPI//2Q=="

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	/*jshint esversion: 6 */
	// overlay.js
	// 
	// Author: Conrad Davis Jr
	// 
	// library for loading content into an overlay modal
	// 

	window.onload = function () {

	  var Overlay = {

	    // init
	    init: function init() {
	      this.state();
	      this.elements();
	      this.events();
	    },
	    // state
	    state: function state() {
	      this.reverseAnimationCache = '';
	    },
	    // elements
	    elements: function elements() {
	      this.overlayView = document.querySelectorAll('.overlay-view');
	      this.overlayCloseBtn = document.querySelectorAll('.overlay-view__close-btn');
	    },

	    // event listeners
	    events: function events() {
	      Overlay.overlayCloseBtn[0].onclick = function () {
	        Overlay.closeOverlay();
	      };
	    },

	    // Overlay animation handler
	    // PUBLIC METHODS
	    // 
	    animate: function animate(animation) {
	      // clear all animation classes from the overlay

	      // animations based on overlay animation styles ex: 'from-right-to-left'
	      Overlay.overlayView[0].classList.add(animation);

	      // store the most recently selected animation request, and reverse its direction
	      Overlay.reverseAnimationCache = animation + '-reversed';
	    },

	    // handler for closing the overlay modal
	    closeOverlay: function closeOverlay() {
	      Overlay.animate(Overlay.reverseAnimationCache);
	    },

	    animationsDirectory: function animationsDirectory() {}

	  };
	  Overlay.init();
	  window.Overlay = Overlay;
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	/*jshint esversion: 6 */
	// welcome.js
	// 
	// Author: Conrad Davis Jr
	// 
	// Scripts for managing elements on the welcome page
	// 


	var Welcome = {

	  init: function init() {
	    this.elements();
	    this.events();
	  },

	  elements: function elements() {
	    this.signUpBtn = document.querySelectorAll('.signing-content__sign-up');
	  },

	  events: function events() {
	    return Welcome.signUpBtn[0].onclick = function () {
	      return Overlay.animate('from-right-to-left');
	    };
	  }
	};
	Welcome.init();

/***/ }
/******/ ]);