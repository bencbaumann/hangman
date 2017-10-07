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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getRandomWord;
function getRandomWord(array) {
  return array[Math.floor(Math.random() * array.length)];
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_getAd_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_style_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_gameState_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_uiState_js__ = __webpack_require__(12);





document.addEventListener("DOMContentLoaded", function(event) {
  var game = Object(__WEBPACK_IMPORTED_MODULE_2__modules_gameState_js__["a" /* gameState */])();
  var ui = Object(__WEBPACK_IMPORTED_MODULE_3__modules_uiState_js__["a" /* uiState */])(game);

  ui.startGame();

  // Event Listenors
  ui.yesPlay.addEventListener("click", () => {
    ui.startGame();
  });
  ui.noPlay.addEventListener("click", () => {
    document.write("<h1>Thanks for Playing</h1>");
  });
  
  document.onkeyup = function(event) {
    const currentLetter = event.key.toLowerCase();
    // Check to see if the game is in progress, and that a letter was pressed.
    if (currentLetter.length === 1 && game.inProgress === true) {
      // Checks if the player already guessed this letter
      if (game.guessedLetter(currentLetter, game)) {
        ui.messageDiv.innerHTML = "That was a guessed letter";
      } else {
        ui.showGuess(currentLetter);
        // The player guessed correct
        if (game.letterInWord(currentLetter, game.wordLetters)) {
          ui.msg(ui.getRandomWord(ui.successMessages), "success");
          ui.playSuccess();
          // Remove a guessed letter from the unique letters array
          game.uniqueLetters = game.uniqueLetters.filter(letter => letter !== currentLetter);
          // Checks if the player won
          if (game.uniqueLetters.length === 0) {
            game.inProgress = false;
            game.wins++;
            ui.setWins();
            ui.msg("You Win!", "success");
            ui.showLayer("win");
            ui.showModel();
            ui.playWin();
          }
        } else {
          // The player guessed wrong
          game.lives--;
          ui.livesDiv.textContent = game.lives;
          ui.showLayer(ui.svgPaths.pop());
          ui.msg(ui.getRandomWord(ui.errorMessages), "error");
          ui.playError();
        }
        // Save the current guesses from the game
        game.guesses.push(currentLetter);
        ui.guessesDiv.innerHTML = game.guesses
          .map(guess => ` ${guess} `)
          .reduce((x, y) => x + y);
      }

      // Check to see if the player lost
      if (game.lives <= 0) {
        game.inProgress = false;
        game.losses++;
        ui.setWins();
        ui.msg("You're Dead!!!", "error");
        ui.showLayer("lose");
        ui.showModel();
        ui.playLose();
      }

      console.log(game);
    } else if (game.inProgress === true) {
      ui.msg("Not a letter", "error");
      console.log(currentLetter);
    }
    ui.debug();
  };
});

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
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(undefined);
// imports


// module
exports.push([module.i, "body {\n  background:orange;\n  padding: 0px;\n  margin: 0px;\n}\n#game {\n    padding: 20px;\n}\n#svg {\n  float: left;\n  width: 50%;\n}\n#gameInfo {\n  padding: 2.5%;\n  float: right;\n  width: 45%;\n}\n#word {\n    text-align: center;\n    margin:auto;\n}\n#guesses {\n  margin: 20px 0px;\n  border: solid 1px darkslategrey;\n  color: darkslategrey;\n  height: 100px;\n  text-align: center;\n  font-size: 5em;\n}\n#message {\n  font-size: 2em;\n  padding: 20px;\n}\n.success {\n  background: lightgreen;\n  border: solid 1px green;\n}\n.error {\n  background: lightsalmon;\n  border: solid 1px red;\n}\n.underline{\n  border-bottom: solid 5px black;\n}\n.letter {\n  width: 7%;\n  margin: 0 10px;\n  text-align: center;\n  font-size: 5em;\n  color:orange;\n  float: left;\n}\n.showLetter {\n  color: black;\n}\n.clearfix {\n  clear: both;\n}\n\n\n#model{\n    background: black;\n    color: white;\n    position: fixed;\n    width: 500px;\n    height: 200px;\n    top: 50%;\n    left: 50%;\n    margin-top: -100px; /* Negative half of height. */\n    margin-left: -250px;\n\n}\n#model button{\n    background: red;\n    border: none;\n    color: white;\n    padding: 20px;\n}\n#model-outer{\n    position: fixed;\n    top: 0;\n    left: 0;\n    opacity: 0.1;\n    height: 100%;\n    width: 100%;\n    background: red;\n}\n#model-inner{\n    text-align: center;\n    padding: 20px;\n}\n\n.guess{\n  background:white;\n  color:black;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -50px;\n  margin-left: -50px;\n  text-align: center;\n  border: solid 5px black;\n  font-size: 4em;\n  height: 100px;\n  width: 100px;\n  animation-name: guess;\n  animation-duration: 1s;\n  visibility: hidden;\n}\n\n@keyframes guess {\n  0%   {visibility: visible}\n  25%  {background-color:white;}\n  50%  {background-color:yellow;}\n  100% {visibility: hidden;}\n}\n\n.score{\n  background: black;\n  color:white;\n  width: 50%;\n  text-align: center;\n  float:left;\n  padding: 20px 0px;\n}\n.score:nth-child(2n){\n  background:darkorange;\n}\n.score #wins, .score #losses{\n  font-size: 10em;\n}\n", ""]);

// exports


/***/ }),
/* 5 */
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
/* 6 */
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

var	fixUrls = __webpack_require__(7);

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
/* 7 */
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = gameState;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dictionary_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRandomWord_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getLettersFromWord_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getUniqueLetters_js__ = __webpack_require__(11);





function gameState(){
  return {
    "debug": false,
    "inProgress": true,
    "name": "",
    "lives": 0,
    "guesses": [],
    "word": "",
    "wordLetters": [],
    "uniqueLetters": [],
    "wins": 0,
    "losses": 0,
    "reset": function(){
      this.inProgress = true;
      this.lives=7;
      this.guesses = [];
      this.word = Object(__WEBPACK_IMPORTED_MODULE_1__getRandomWord_js__["a" /* getRandomWord */])(Object(__WEBPACK_IMPORTED_MODULE_0__dictionary_js__["a" /* dictionary */])());
      this.wordLetters = Object(__WEBPACK_IMPORTED_MODULE_2__getLettersFromWord_js__["a" /* getLettersFromWord */])(this.word);
      this.uniqueLetters = Object(__WEBPACK_IMPORTED_MODULE_3__getUniqueLetters_js__["a" /* getUniqueLetters */])(this.wordLetters);
    },
    "guessedLetter": function(currentLetter){
      return this.guesses.includes(currentLetter);
    },
    "letterInWord": function(letter){
      let matches = document.getElementsByClassName(`letter${event.key}`);
      var nodes = Array.prototype.slice.call(matches);
      nodes.map(this.addClass);
      nodes.map(this.removeClass);
      return this.word.includes(letter);
    },
    "addClass": function (match) { 
      return match.classList.add("showLetter")
    },
    "removeClass": function(match){
      match.classList.remove("underline");
    }
  }
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dictionary;
function dictionary() {
    return [
        "zombie",
        "halloween",
        "pumpkin",
        "monster",
        "dark",
        "darkness",
        "dead",
        "demon",
        "devil",
        "devilish",
        "disguise",
        "dreadful",
        "death",
        "hair-raising",
        "Halloween",
        "hat",
        "haunt",
        "haunted house",
        "hayride",
        "headstone",
        "hobgoblin",
        "hocus pocus",
        "horrible",
        "horrify",
        "howl",
        "party",
        "petrify",
        "phantasm",
        "phantom",
        "pirate",
        "pitchfork",
        "poltergeist",
        "potion",
        "prank",
        "pretend",
        "prince",
        "princess",
        "pumpkin",
        "thrilling",
        "tiara",
        "toga",
        "tomb",
        "tombstone",
        "treat",
        "treats",
        "trick"
      ];
  }
  
  

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getLettersFromWord;
function getLettersFromWord(word) {
  return word.split("");
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getUniqueLetters;
function getUniqueLetters(array) {
    return [... new Set(array)];
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = uiState;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hideLayer_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__showLayer_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getRandomWord_js__ = __webpack_require__(0);
/* Dependancies */




function uiState(game){
  return {
    "successMessages": ["Nailed it! Good Job!", "That'll Work!", "Awesome, Good Show!"],
    "errorMessages": ["Close Miss!", "Learn to guess already!", "Poor Form Old Chap!"],
    /* HTML DOM */
    "messageDiv": document.getElementById("message"),
    "guessesDiv": document.getElementById("guesses"),
    "adsDiv": document.getElementById("ads"),
    "debugDiv": document.getElementById("debug"),
    "yesPlay": document.getElementById("yesPlay"),
    "noPlay": document.getElementById("noPlay"),
    "word": word,
    "winsDiv": document.getElementById("wins"),
    "lossesDiv": document.getElementById("losses"),
    /* SVG DOM */
    "svgPaths" : ["arm1", "arm2", "arm3", "arm4", "tree", "grave", "moon"],
    "livesDiv": document.getElementById("lives"),
    "svg": document.getElementById("zombies"),
    /* Sounds */
    "sndSuccess": new Audio('./assets/sounds/success.mp3'),
    "sndScary": new Audio('./assets/sounds/scary.mp3'),
    "sndWin": new Audio('./assets/sounds/win.mp3'),
    "sndLose": new Audio('./assets/sounds/lose.mp3'),
    "sndZombie": new Audio('./assets/sounds/zombie.mp3'),
    "startGame": function(){
        // hides all the svgPaths that get exposed on wrong guesses
        game.reset();
        if(game.debug){this.debugDiv.innerHTML = `<pre>${JSON.stringify(game, null, 2)}</pre>`};
        console.log(game);
        this.msg("Please Guess a letter", "success");
        // this.messageDiv.innerHTML = "Please guess a letter";
        this.hideLayer("win");
        this.hideLayer("lose");
        this.hideModel();
        this.clearCards();
        this.clearGuessesDiv();
        game.wordLetters.map(this.setupCards);
        this.resetSvg();
    },
    "showGuess": function(letter){
        let div = document.createElement('div');
        div.innerHTML=letter;
        document.body.appendChild(div);
        div.classList="guess";
    },
    "hideModel": function(){
        document
        .getElementById("model-outer")
        .setAttribute("style", "visibility: hidden");
        document
        .getElementById("model")
        .setAttribute("style", "visibility: hidden");
    },
    "showModel": function(){
        document
        .getElementById("model-outer")
        .setAttribute("style", "visibility: visible");
        document
        .getElementById("model")
        .setAttribute("style", "visibility: visible");
    },
    "hideLayer": function(node){
        Object(__WEBPACK_IMPORTED_MODULE_0__hideLayer_js__["a" /* hideLayer */])(node);
    },
    "showLayer": function(node){
        Object(__WEBPACK_IMPORTED_MODULE_1__showLayer_js__["a" /* showLayer */])(node);
    },
    "clearCards": function(){
        const word = document.getElementById("word");
        word.innerHTML="";
    },
    "setupCards": function (letter) {
        const word = document.getElementById("word");
        var divLetter = document.createElement("div");
        divLetter.classList = `letter`;
        divLetter.classList = `letter underline letter${letter}`;
        divLetter.innerHTML = letter;
        word.appendChild(divLetter);
    },
    "clearGuessesDiv": function(){
        this.guessesDiv.innerHTML ="";
    },
    "resetSvg": function(){
        this.livesDiv.textContent = game.lives;
        this.svgPaths = ["arm1", "arm2", "arm3", "arm4", "tree", "grave", "moon"];
        this.svgPaths.map(__WEBPACK_IMPORTED_MODULE_0__hideLayer_js__["a" /* hideLayer */]);
    },
    "msg": function(message, msgClass){
        if(msgClass){
            this.messageDiv.classList = msgClass;
        }
        this.messageDiv.innerHTML = message;
    },
    "getRandomWord": function(arr){
        return Object(__WEBPACK_IMPORTED_MODULE_2__getRandomWord_js__["a" /* getRandomWord */])(arr);
    },
    "debug": function(){
        if(game.debug){this.debugDiv.innerHTML = `<pre>${JSON.stringify(game, null, 2)}</pre>`};
    },
    "setWins": function(){
        this.winsDiv.innerHTML = game.wins;
        this.lossesDiv.innerHTML = game.losses;
    },
    "playSuccess": function(){
        // this.sndSuccess.play();
        this.sndSuccess.load();
        this.sndSuccess.play();
    },
    "playError": function(){
        this.sndScary.load();
        this.sndScary.play();
    },
    "playWin": function(){
        this.sndWin.load();
        this.sndWin.play();
    },
    "playLose": function(){
        this.sndLose.load();
        this.sndLose.play();
    },
    "playZombie": function(){
        this.sndZombie.load();
        this.sndZombie.play();
    }
  }
}



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hideLayer;
function hideLayer(node){
    const svg = document.getElementById("zombies");
    svg.getElementById(node).setAttribute("visibility", "hidden");
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = showLayer;
// const svgChildNodes = document.getElementById("zombies").childNodes;
// const svgArray = nodelist2array(svgChildNodes);

function showLayer(node){
    const svg = document.getElementById("zombies");
    svg.getElementById(node).setAttribute("visibility", "visible");
}
  

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map