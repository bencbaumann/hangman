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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_getRandomWord_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_getAd_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_getLettersFromWord_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_dictionary_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_style_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__css_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_gameState_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_nodelist2array_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_game_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_game1_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_getUniqueLetters_js__ = __webpack_require__(14);











document.addEventListener("DOMContentLoaded", function(event) {
    var gameState = Object(__WEBPACK_IMPORTED_MODULE_7__modules_game_js__["a" /* game */])();
  /* Nodes from SVG DOM */
  const livesDiv = document.getElementById("lives");

  /*DOM Nodes */
  const messageDiv = document.getElementById("message");
  const guessesDiv = document.getElementById("guesses");
  const adsDiv = document.getElementById("ads");
  const svgPaths = ["arm1", "arm2", "arm3", "arm4", "tree", "grave", "moon"];
  const svg = document.getElementById("zombies");
  const svgChildNodes = document.getElementById("zombies").childNodes;
  const svgArray = Object(__WEBPACK_IMPORTED_MODULE_6__modules_nodelist2array_js__["a" /* nodelist2array */])(svgChildNodes);

  const showLayer = node =>
    svg.getElementById(node).setAttribute("visibility", "visible");

  newGame();
  function newGame() {
    gameState.word = Object(__WEBPACK_IMPORTED_MODULE_0__modules_getRandomWord_js__["a" /* getRandomWord */])(Object(__WEBPACK_IMPORTED_MODULE_3__modules_dictionary_js__["a" /* dictionary */])());
    gameState.wordLetters = Object(__WEBPACK_IMPORTED_MODULE_2__modules_getLettersFromWord_js__["a" /* getLettersFromWord */])(gameState.word);
    gameState.uniqueLetters = Object(__WEBPACK_IMPORTED_MODULE_9__modules_getUniqueLetters_js__["a" /* getUniqueLetters */])(gameState.wordLetters);
    console.log("gameState:" + gameState);
    gameState.wordLetters.map(__WEBPACK_IMPORTED_MODULE_8__modules_game1_js__["c" /* setupCards */]);
    const hideLayer = node =>
      svg.getElementById(node).setAttribute("visibility", "hidden");
    svgPaths.map(hideLayer);
    messageDiv.innerHTML = "Please guess a letter";
    hideLayer("win");
    hideLayer("lose");
    hideModel();
  }

  function hideModel(){
    document.getElementById("model-outer").setAttribute("style", "visibility: hidden");
    document.getElementById("model").setAttribute("style", "visibility: hidden");
  }
  function showModel(){
    document.getElementById("model-outer").setAttribute("style", "visibility: visible");
    document.getElementById("model").setAttribute("style", "visibility: visible");
  }

  //   ads.innerHTML = livesDiv.innerHTML = gameState.lives;

  document.onkeyup = function(event) {
    if (gameState.lives > 0) {
      console.log(gameState.wordLetters.length);

      if (Object(__WEBPACK_IMPORTED_MODULE_8__modules_game1_js__["a" /* guessedLetter */])(gameState)) {
        messageDiv.innerHTML = "That was a guessed letter";
      } else {
        if (Object(__WEBPACK_IMPORTED_MODULE_8__modules_game1_js__["b" /* letterInWord */])(event.key, gameState.wordLetters)) {
          messageDiv.classList = "success";
          messageDiv.innerHTML = "nailed it";
          //   Maybe delete
          gameState.uniqueLetters = gameState.uniqueLetters.filter(
            letter => letter !== event.key
          );
          if (gameState.uniqueLetters.length === 0) {
            messageDiv.classList = "success";
            messageDiv.innerHTML = "You Win";
            showLayer("win");
            showModel();
          }
        } else {
          messageDiv.classList = "error";
          gameState.lives--;
          livesDiv.textContent = gameState.lives;
          showLayer(svgPaths.pop());
          messageDiv.innerHTML = "close miss!";
        }
        gameState.guesses.push(event.key);
        guessesDiv.innerHTML = gameState.guesses
          .map(guess => ` ${guess} `)
          .reduce((x, y) => x + y);
      }
      if (gameState.lives <= 0) {
        messageDiv.classList = "error";
        messageDiv.innerHTML = "You're Dead!!!";
        showLayer("lose");
        showModel();
      }
      console.log(gameState);
    }
  };
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getRandomWord;
function getRandomWord(array) {
  return array[Math.floor(Math.random() * array.length)];
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAds */
function getAds() {
  const ads =[];
  ads.push("mcdonalds.jpg");
  ads.push("apple.jpg");
  ads.push("sony.jpg");
  ads.push("circlek.jpg");
    return word.split("");
  }
  

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getLettersFromWord;
function getLettersFromWord(word) {
  return word.split("");
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dictionary;
function dictionary() {
    return [
        "umbrella",
        "doberman",
        "computer",
        "laptop",
        "screen",
        "lightbulb",
        "party"
      ];
  }
  

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports


// module
exports.push([module.i, "body {\n  padding: 0px;\n  margin: 0px;\n}\n#game {\n    padding: 20px;\n}\n#svg {\n  float: left;\n  width: 50%;\n}\n#gameInfo {\n    padding: 2.5%;\n  float: right;\n  width: 45%;\n}\n#word {\n    background:red;\n    text-align: center;\n    margin:auto;\n}\n/* #lives {\n  background: teal;\n  color: white;\n  height: 100px;\n  text-align: center;\n  font-size: 5em;\n} */\n#guesses {\n  background: darkslategrey;\n  color: white;\n  height: 100px;\n  text-align: center;\n  font-size: 5em;\n}\n#message {\n  font-size: 2em;\n  padding: 20px;\n}\n.success {\n  background: lightgreen;\n  border: solid 1px green;\n}\n.error {\n  background: lightsalmon;\n  border: solid 1px red;\n}\n.letter {\n  width: 7%;\n  margin: 0 10px;\n  background: white;\n  text-align: center;\n  font-size: 5em;\n  border-bottom: solid 5px black;\n  color: white;\n  float: left;\n}\n.showLetter {\n  color: black;\n}\n.clearfix {\n  clear: both;\n}\n\n\n#model{\n    background: black;\n    color: white;\n    position: fixed;\n    width: 500px;\n    height: 200px;\n    top: 50%;\n    left: 50%;\n    margin-top: -100px; /* Negative half of height. */\n    margin-left: -250px;\n\n}\n#model button{\n    background: red;\n    border: none;\n    color: white;\n    padding: 20px;\n}\n#model-outer{\n    position: fixed;\n    top: 0;\n    left: 0;\n    opacity: 0.5;\n    height: 100%;\n    width: 100%;\n    background: red;\n}\n#model-inner{\n    text-align: center;\n    padding: 20px;\n}", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export gameState */
function gameState(){
  return {
    "name": "",
    "lives": 7,
    "guesses": [],
    "word": "",
    "uniqueLetters": [],
    "wordLetters": [],
    "reset": function(){
      this.lives=7;
      this.guesses = [];
    }
  }
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = nodelist2array;
function nodelist2array(nodelist) {
    var array = [];
    for (var index = 0; index < nodelist.length; index++) {
        array.push(nodelist[index]);
    }
    console.log(array);
    return array;
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = game;
function game() {
  document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var lives = 6;
    var guesses = [];
    const didPlayerLose = () => lives === 0;

    const lettersInWord = selectWordFromDictionary.split("");
    console.log(lettersInWord);
    console.log("lives:" + lives);

    var setupCards = letter => {
      var divLetter = document.createElement("div");
      divLetter.classList = `letter letter${letter}`;
      divLetter.innerHTML = letter;
      const word = document.getElementById("word");
      word.appendChild(divLetter);
    };

    lettersInWord.map(setupCards);

    document.addEventListener("keyup", function(event) {
      if (guesses.includes(event.key)) {
        console.log("You already guessed that letter!");
        return;
      } else {
        guesses.push(event.key);
      }

      console.log(lettersInWord);
      console.log(guesses);
      console.log(lettersInWord.includes(event.key));
      if (lettersInWord.includes(event.key)) {
        let matches = document.getElementsByClassName(`letter${event.key}`);
        var nodes = Array.prototype.slice.call(matches);
        nodes.map(showClass);
      }

      if (!lettersInWord.includes(event.key)) {
        lives--;
        console.log("lives:" + lives);
        if (didPlayerLose()) {
          console.log("Game Over you Lose");
        }
      }
    });

    const showClass = match => match.classList.add("showLetter");
  });
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = guessedLetter;
/* harmony export (immutable) */ __webpack_exports__["b"] = letterInWord;
/* harmony export (immutable) */ __webpack_exports__["c"] = setupCards;
const showClass = match => match.classList.add("showLetter");

function guessedLetter(player) {
  return player.guesses.includes(event.key);
}

function letterInWord(letter, word){
    let matches = document.getElementsByClassName(`letter${event.key}`);
    var nodes = Array.prototype.slice.call(matches);
    nodes.map(showClass);
    return word.includes(letter);
}

function setupCards (letter) {
    var divLetter = document.createElement("div");
    divLetter.classList = `letter letter${letter}`;
    divLetter.innerHTML = letter;
    const word = document.getElementById("word");
    word.appendChild(divLetter);
  };

  

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getUniqueLetters;
function getUniqueLetters(array) {
    return [... new Set(array)];
}

/***/ })
/******/ ]);