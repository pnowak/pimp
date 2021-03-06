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

	var _get = __webpack_require__(1);

	var _get2 = _interopRequireDefault(_get);

	var _debounce = __webpack_require__(2);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _editor = __webpack_require__(3);

	var _editor2 = _interopRequireDefault(_editor);

	var _filter = __webpack_require__(5);

	var _filter2 = _interopRequireDefault(_filter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var editor = new _editor2.default();
	var filter = new _filter2.default();

	var saveButton = (0, _get2.default)('save');
	var controlInputs = (0, _get2.default)('controls');
	var gallery = (0, _get2.default)('listGallery');
	var filterInput = (0, _get2.default)('filter');

	controlInputs.addEventListener('input', function (e) {
	  editor.setStyle(e);
	}, false);
	saveButton.addEventListener('click', function () {
	  editor.createDiv(), editor.resetStyle();
	}, false);
	gallery.addEventListener('click', function (e) {
	  editor.closeDiv(e);
	}, false);

	filterInput.addEventListener('input', (0, _debounce2.default)(function () {
	  filter.addClassDisappear();
	}, 1000));

	document.addEventListener('DOMContentLoaded', function () {
	  editor.getDataFromLocal();
	}, false);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function get(id) {
	    return document.getElementById(id);
	}

	exports.default = get;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function debounce(func, delay) {
	    var inDebounce = undefined;
	    return function () {
	        var context = this,
	            args = arguments;
	        clearTimeout(inDebounce);
	        return inDebounce = setTimeout(function () {
	            return func.apply(context, args);
	        }, delay);
	    };
	}

	exports.default = debounce;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = __webpack_require__(1);

	var _get2 = _interopRequireDefault(_get);

	var _uniqueId = __webpack_require__(4);

	var _uniqueId2 = _interopRequireDefault(_uniqueId);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Editor = function () {
	    function Editor() {
	        _classCallCheck(this, Editor);
	    }

	    _createClass(Editor, [{
	        key: 'createDiv',
	        value: function createDiv() {
	            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _uniqueId2.default)();
	            var style = arguments[1];

	            var gallery = (0, _get2.default)('listGallery');
	            var output = (0, _get2.default)('output');
	            var li = document.createElement('li');
	            var div = document.createElement('div');

	            div.style.cssText = style || output.style.cssText;
	            div.setAttribute('id', value);

	            li.appendChild(div);
	            gallery.insertBefore(li, gallery.firstChild);
	            li.insertAdjacentHTML('afterbegin', '<button class="close">x</button>');

	            localStorage.setItem(div.id, div.style.cssText);
	        }
	    }, {
	        key: 'closeDiv',
	        value: function closeDiv(e) {
	            var target = e.target;
	            var div = target.nextSibling;
	            var parent = target.parentNode;

	            if (target.nodeName.toLowerCase() === "button") {
	                localStorage.removeItem(div.id);
	                parent.parentNode.removeChild(parent);
	            }
	        }
	    }, {
	        key: 'setStyle',
	        value: function setStyle(e) {
	            var style = (0, _get2.default)('output').style;
	            var target = e.target;
	            var value = parseInt(target.value) ? target.value + 'px' : target.value;

	            style[target.name] = value;
	        }
	    }, {
	        key: 'resetStyle',
	        value: function resetStyle() {
	            var options = Array.from(document.querySelectorAll('.opts'));
	            var style = (0, _get2.default)('output').style;

	            options.forEach(function (item, index) {
	                var defaultValue = item.children[1].defaultValue;
	                var name = item.children[1].name;

	                item.children[1].value = item.children[1].defaultValue;
	                style[name] = parseInt(defaultValue) ? defaultValue + 'px' : defaultValue;
	            });
	        }
	    }, {
	        key: 'getDataFromLocal',
	        value: function getDataFromLocal() {
	            var divs = localStorage;

	            for (var div in divs) {
	                if (divs.hasOwnProperty(div)) {
	                    this.createDiv(div, divs[div]);
	                }
	            }
	        }
	    }]);

	    return Editor;
	}();

	;

	exports.default = Editor;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function uniqueId() {
	    return 'ID_' + Math.random().toString(36).substr(2, 16);
	}

	exports.default = uniqueId;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = __webpack_require__(1);

	var _get2 = _interopRequireDefault(_get);

	var _hexToRGB = __webpack_require__(6);

	var _hexToRGB2 = _interopRequireDefault(_hexToRGB);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Filter = function () {
	    function Filter() {
	        _classCallCheck(this, Filter);
	    }

	    _createClass(Filter, [{
	        key: 'addClassDisappear',
	        value: function addClassDisappear(e) {
	            var divs = Array.from(document.querySelectorAll('.gallery li'));
	            var value = (0, _get2.default)('filter').value;
	            var parts = value.split(', ');

	            this.removeClassDisappear();

	            if (value.length > 0) {
	                var nameTrim = parts[0].trim();
	                var valueTrim = parts[1].trim();

	                if (valueTrim.startsWith('#')) {
	                    valueTrim = (0, _hexToRGB2.default)(valueTrim);
	                }

	                divs.forEach(function (item, index) {
	                    if (item.children[1].style[nameTrim].replace(/\s+/g, '') !== valueTrim) {
	                        item.classList.add('disappear');
	                    }
	                });
	            }
	        }
	    }, {
	        key: 'removeClassDisappear',
	        value: function removeClassDisappear() {
	            var divs = Array.from(document.querySelectorAll('.gallery li'));

	            divs.forEach(function (item, index) {
	                if (item.classList.contains('disappear')) {
	                    item.classList.remove('disappear');
	                }
	            });
	        }
	    }]);

	    return Filter;
	}();

	;

	exports.default = Filter;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function hexToRGB(hex) {
	    hex = hex.replace(/^#/, '');

	    var num = parseInt(hex, 16);

	    var r = num >> 16;
	    var g = num >> 8 & 255;
	    var b = num & 255;

	    return 'rgb(' + r + ',' + g + ',' + b + ')';
	}

	exports.default = hexToRGB;

/***/ }
/******/ ]);