webpackJsonp([0],{

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(136);

var _module = __webpack_require__(45);

var _Game = __webpack_require__(296);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var _ref$game = _ref.game,
      questions = _ref$game.questions,
      question = _ref$game.question,
      name = _ref$game.name,
      providedResults = _ref$game.providedResults,
      success = _ref$game.success,
      imageSource = _ref$game.imageSource;

  return {
    question: question,
    name: name,
    providedResults: providedResults,
    success: success,
    imageSource: imageSource,
    lastQuestion: questions && questions.length === 0
  };
};

var mapDispatchToProps = {
  submitOption: _module.submitOption,
  startGame: _module.startGame,
  endGame: _module.endGame,
  timeOut: _module.timeOut,
  clearGame: _module.clearGame
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Game2.default);

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(7));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactKeyHandler"] = factory(require("react"));
	else
		root["ReactKeyHandler"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
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

	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.keyToggleHandler = exports.keyHandler = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _constants = __webpack_require__(2);

	Object.keys(_constants).forEach(function (key) {
	  if (key === "default") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _constants[key];
	    }
	  });
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _exenv = __webpack_require__(4);

	var _utils = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * KeyHandler component.
	 */

	var KeyHandler = function (_React$Component) {
	  _inherits(KeyHandler, _React$Component);

	  _createClass(KeyHandler, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      return false;
	    }
	  }]);

	  function KeyHandler(props) {
	    _classCallCheck(this, KeyHandler);

	    /* eslint-disable no-console */

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(KeyHandler).call(this, props));

	    if (!props.keyValue && !props.keyCode && !props.keyName) {
	      console.error('Warning: Failed propType: Missing prop `keyValue`, `keyCode` or `keyName` for `KeyHandler`.');
	    }

	    if (props.keyName) {
	      console.error('Warning: Failed propType: Do not use deprecated prop `keyName`, use `keyValue` or `keyCode` instead for `KeyHandler`.');
	    }

	    /* eslint-enable */

	    _this.handleKey = _this.handleKey.bind(_this);
	    return _this;
	  }

	  _createClass(KeyHandler, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (!_exenv.canUseDOM) return;

	      window.document.addEventListener(this.props.keyEventName, this.handleKey);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (!_exenv.canUseDOM) return;

	      window.document.removeEventListener(this.props.keyEventName, this.handleKey);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }, {
	    key: 'handleKey',
	    value: function handleKey(event) {
	      var _props = this.props;
	      var keyValue = _props.keyValue;
	      var keyCode = _props.keyCode;
	      var keyName = _props.keyName;
	      var onKeyHandle = _props.onKeyHandle;


	      if (!onKeyHandle) {
	        return;
	      }

	      var target = event.target;


	      if (target instanceof window.HTMLElement && (0, _utils.isInput)(target)) {
	        return;
	      }

	      if (!(0, _utils.matchesKeyboardEvent)(event, { keyValue: keyValue, keyCode: keyCode, keyName: keyName })) {
	        return;
	      }

	      onKeyHandle(event);
	    }
	  }]);

	  return KeyHandler;
	}(_react2.default.Component);

	/**
	 * Types.
	 */

	KeyHandler.propTypes = {
	  keyValue: _react2.default.PropTypes.string,
	  keyCode: _react2.default.PropTypes.number,
	  keyEventName: _react2.default.PropTypes.oneOf([_constants.KEYDOWN, _constants.KEYPRESS, _constants.KEYUP]),
	  keyName: _react2.default.PropTypes.string,
	  onKeyHandle: _react2.default.PropTypes.func
	};
	KeyHandler.defaultProps = {
	  keyEventName: _constants.KEYUP
	};
	exports.default = KeyHandler;


	/**
	 * KeyHandler decorators.
	 */

	function keyHandleDecorator() {
	  var matcher = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	  return function (props) {
	    var _ref = props || {};

	    var keyValue = _ref.keyValue;
	    var keyCode = _ref.keyCode;
	    var keyName = _ref.keyName;
	    var keyEventName = _ref.keyEventName;


	    return function (Component) {
	      return function (_React$Component2) {
	        _inherits(KeyHandleDecorator, _React$Component2);

	        function KeyHandleDecorator(props) {
	          _classCallCheck(this, KeyHandleDecorator);

	          var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(KeyHandleDecorator).call(this, props));

	          _this2.state = { keyValue: null, keyCode: null, keyName: null };


	          _this2.handleKey = _this2.handleKey.bind(_this2);
	          return _this2;
	        }

	        _createClass(KeyHandleDecorator, [{
	          key: 'render',
	          value: function render() {
	            return _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(KeyHandler, { keyValue: keyValue, keyCode: keyCode, keyEventName: keyEventName, keyName: keyName, onKeyHandle: this.handleKey }),
	              _react2.default.createElement(Component, _extends({}, this.props, this.state))
	            );
	          }
	        }, {
	          key: 'handleKey',
	          value: function handleKey(event) {
	            if (matcher && matcher(event, this.state)) {
	              this.setState({ keyValue: null, keyCode: null, keyName: null });
	            } else {
	              this.setState({ keyValue: (0, _utils.eventKey)(event), keyCode: event.keyCode, keyName: (0, _utils.eventKeyName)(event) });
	            }
	          }
	        }]);

	        return KeyHandleDecorator;
	      }(_react2.default.Component);
	    };
	  };
	}

	var keyHandler = exports.keyHandler = keyHandleDecorator();
	var keyToggleHandler = exports.keyToggleHandler = keyHandleDecorator(_utils.matchesKeyboardEvent);

	/**
	 * Constants
	 */

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Key event names.
	 */

	var KEYDOWN = exports.KEYDOWN = 'keydown';
	var KEYPRESS = exports.KEYPRESS = 'keypress';
	var KEYUP = exports.KEYUP = 'keyup';

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Based on code that is Copyright 2013-2015, Facebook, Inc.
	  All rights reserved.
	*/
	/* global define */

	(function () {
		'use strict';

		var canUseDOM = !!(
			typeof window !== 'undefined' &&
			window.document &&
			window.document.createElement
		);

		var ExecutionEnvironment = {

			canUseDOM: canUseDOM,

			canUseWorkers: typeof Worker !== 'undefined',

			canUseEventListeners:
				canUseDOM && !!(window.addEventListener || window.attachEvent),

			canUseViewport: canUseDOM && !!window.screen

		};

		if (true) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return ExecutionEnvironment;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && module.exports) {
			module.exports = ExecutionEnvironment;
		} else {
			window.ExecutionEnvironment = ExecutionEnvironment;
		}

	}());


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isInput = isInput;
	exports.matchesKeyboardEvent = matchesKeyboardEvent;
	exports.eventKey = eventKey;
	exports.eventKeyName = eventKeyName;

	var _keycodes = __webpack_require__(6);

	var _keycodes2 = _interopRequireDefault(_keycodes);

	var _constants = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Constants.
	 */

	/**
	 * Types.
	 */

	var NORMALIZED_KEYS = {
	  'Esc': 'Escape',
	  'Spacebar': ' ',
	  'Left': 'ArrowLeft',
	  'Up': 'ArrowUp',
	  'Right': 'ArrowRight',
	  'Down': 'ArrowDown',
	  'Del': 'Delete',
	  'Win': 'OS',
	  'Menu': 'ContextMenu',
	  'Apps': 'ContextMenu',
	  'Scroll': 'ScrollLock',
	  'MozPrintableKey': 'Unidentified'
	};

	var KEY_CODE_KEYS = {
	  '8': 'Backspace',
	  '9': 'Tab',
	  '12': 'Clear',
	  '13': 'Enter',
	  '16': 'Shift',
	  '17': 'Control',
	  '18': 'Alt',
	  '19': 'Pause',
	  '20': 'CapsLock',
	  '27': 'Escape',
	  '32': ' ',
	  '33': 'PageUp',
	  '34': 'PageDown',
	  '35': 'End',
	  '36': 'Home',
	  '37': 'ArrowLeft',
	  '38': 'ArrowUp',
	  '39': 'ArrowRight',
	  '40': 'ArrowDown',
	  '45': 'Insert',
	  '46': 'Delete',
	  '112': 'F1',
	  '113': 'F2',
	  '114': 'F3',
	  '115': 'F4',
	  '116': 'F5',
	  '117': 'F6',
	  '118': 'F7',
	  '119': 'F8',
	  '120': 'F9',
	  '121': 'F10',
	  '122': 'F11',
	  '123': 'F12',
	  '144': 'NumLock',
	  '145': 'ScrollLock',
	  '224': 'Meta'
	};

	/**
	 * Check if `given` element is an input / textarea form element or acts as one.
	 */

	function isInput(element) {
	  if (!element) {
	    return false;
	  }

	  var tagName = element.tagName;

	  var editable = isContentEditable(element);

	  return tagName === 'INPUT' || tagName === 'TEXTAREA' || editable;
	}

	function isContentEditable(element) {
	  if (typeof element.getAttribute !== 'function') {
	    return false;
	  }

	  return !!element.getAttribute('contenteditable');
	}

	/**
	 * Matches an event against a given keyboard key.
	 */

	function matchesKeyboardEvent(event, _ref) {
	  var keyCode = _ref.keyCode;
	  var keyValue = _ref.keyValue;
	  var keyName = _ref.keyName;

	  if (!isNullOrUndefined(keyValue)) {
	    return keyValue === eventKey(event);
	  }

	  if (!isNullOrUndefined(keyCode)) {
	    return keyCode === event.keyCode;
	  }

	  if (!isNullOrUndefined(keyName)) {
	    return keyName === eventKeyName(event);
	  }

	  return false;
	}

	function isNullOrUndefined(value) {
	  return value === undefined || value === null;
	}

	function eventKey(event) {
	  var key = event.key;
	  var keyCode = event.keyCode;
	  var type = event.type;


	  if (key) {
	    var normalizedKey = NORMALIZED_KEYS[key] || key;

	    if (normalizedKey !== 'Unidentified') {
	      return normalizedKey;
	    }
	  }

	  if (type === _constants.KEYPRESS) {
	    var charCode = eventCharCode(event);

	    return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
	  }

	  if (type === _constants.KEYDOWN || type === _constants.KEYUP) {
	    return KEY_CODE_KEYS[String(keyCode)] || 'Unidentified';
	  }

	  return '';
	}

	function eventKeyName(event) {
	  return (0, _keycodes2.default)(event.keyCode);
	}

	function eventCharCode(event) {
	  var charCode = event.charCode;
	  var keyCode = event.keyCode;


	  if ('charCode' in event) {
	    if (charCode === 0 && keyCode === 13) {
	      return 13;
	    }
	  } else {
	    charCode = keyCode;
	  }

	  if (charCode >= 32 || charCode === 13) {
	    return charCode;
	  }

	  return 0;
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	var keys = {
	  ctrl: 17,
	  control: 17,
	  alt: 18,
	  option: 18,
	  shift: 16,
	  windows: 91,
	  command: 91,
	  esc: 27,
	  escape: 27,
	  '`': 192,
	  '-': 189,
	  '=': 187,
	  backspace: 8,
	  tab: 9,
	  '\\': 220,
	  '[': 219,
	  ']': 221,
	  ';': 186,
	  '\'': 222,
	  enter: 13,
	  'return': 13,
	  ',': 188,
	  '.': 190,
	  '/': 191,
	  space: 32,
	  pause: 19,
	  'break': 19,
	  insert: 45,
	  'delete': 46,
	  home: 36,
	  end: 35,
	  pageup: 33,
	  pagedown: 34,
	  left: 37,
	  up: 38,
	  right: 39,
	  down: 40,
	  capslock: 20,
	  numlock: 144,
	  scrolllock: 145
	};

	for (var f = 1; f < 20; f++) {
	  keys['f' + f] = 111 + f;
	}

	module.exports = function (input) {
	  if (typeof input === 'string') return code(input);
	  if (typeof input === 'number') return key(input);
	};

	function code(input) {
	  return keys[input.toLowerCase()] || input.toUpperCase().charCodeAt(0);
	}

	function key(input) {
	  for (var k in keys) {
	    if (keys.hasOwnProperty(k)) {
	      if (keys[k] === input) return k;
	    }
	  }

	  return String.fromCharCode(input).toLowerCase();
	}


/***/ }
/******/ ])
});
;

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _container = __webpack_require__(300);

var _container2 = _interopRequireDefault(_container);

var _reactKeyHandler = __webpack_require__(294);

var _reactKeyHandler2 = _interopRequireDefault(_reactKeyHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TEXT = function TEXT(success) {
  return success ? {
    title: "Yay, you saved a kitten",
    buttonText: "Let's save another one!",
    newPlayerText: "New saver?"
  } : {
    title: "So sad...",
    buttonText: "Try to save atleast one",
    newPlayerText: "Let someone else try.."
  };
};

var EndGame = function (_React$Component) {
  _inherits(EndGame, _React$Component);

  function EndGame() {
    _classCallCheck(this, EndGame);

    var _this = _possibleConstructorReturn(this, (EndGame.__proto__ || Object.getPrototypeOf(EndGame)).call(this));

    _this.onRetryClick = _this.onRetryClick.bind(_this);
    _this.onNewPlayerClick = _this.onNewPlayerClick.bind(_this);
    return _this;
  }

  _createClass(EndGame, [{
    key: 'onRetryClick',
    value: function onRetryClick() {
      this.props.startGame(this.props.name);
    }
  }, {
    key: 'onNewPlayerClick',
    value: function onNewPlayerClick() {
      this.props.clearGame();
      this.props.router.push('/');
    }
  }, {
    key: 'render',
    value: function render() {
      var texts = TEXT(this.props.success);
      // TODO: button clicks dont work!
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactKeyHandler2.default, { keyEventName: _reactKeyHandler.KEYPRESS, keyValue: 'enter', onKeyHandle: this.onRetryClick }),
        _react2.default.createElement(_reactKeyHandler2.default, { keyEventName: _reactKeyHandler.KEYPRESS, keyValue: 'esc', onKeyHandle: this.onNewPlayerClick }),
        _react2.default.createElement(
          'div',
          { style: { fontSize: 28, margin: 30 } },
          texts.title
        ),
        _react2.default.createElement(
          'button',
          { className: 'border', onClick: this.onRetryClick },
          texts.buttonText
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'button',
          { className: 'answer', onClick: this.onNewPlayerClick },
          texts.newPlayerText
        ),
        _react2.default.createElement(
          'div',
          { style: { marginTop: 20 } },
          _react2.default.createElement(_container2.default, { name: this.props.name })
        ),
        _react2.default.createElement(
          'div',
          { style: { fontSize: 10, marginTop: 15 } },
          _react2.default.createElement(
            'a',
            { href: 'https://www.buzzfeed.com/chelseamarshall/meows?utm_term=.clGnJmJZ4#.nvAZ6z6lK' },
            'Find out more about kittens! (Hints here!)'
          )
        )
      );
    }
  }]);

  return EndGame;
}(_react2.default.Component);

exports.default = EndGame;

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _Timer = __webpack_require__(298);

var _Timer2 = _interopRequireDefault(_Timer);

var _Question = __webpack_require__(297);

var _Question2 = _interopRequireDefault(_Question);

var _EndGame = __webpack_require__(295);

var _EndGame2 = _interopRequireDefault(_EndGame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
* Game manager class. Manages the game and the end game.
*/
var Game = function (_React$Component) {
  _inherits(Game, _React$Component);

  function Game() {
    _classCallCheck(this, Game);

    return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).apply(this, arguments));
  }

  _createClass(Game, [{
    key: 'render',
    value: function render() {
      var components = void 0;
      if (this.props.success != null) {
        components = _react2.default.createElement(_EndGame2.default, {
          startGame: this.props.startGame,
          name: this.props.name,
          success: this.props.success,
          router: this.props.router,
          clearGame: this.props.clearGame });
      } else if (!this.props.question) {
        components = _react2.default.createElement(
          'div',
          null,
          'Loading..'
        );
      } else {
        components = _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Question2.default, {
            question: this.props.question,
            submitOption: this.props.submitOption,
            providedResults: this.props.providedResults,
            name: this.props.name,
            endGame: this.props.endGame,
            lastQuestion: this.props.lastQuestion }),
          _react2.default.createElement(_Timer2.default, { secondsRemaining: '45', timeOut: this.props.timeOut })
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('img', { src: this.props.imageSource, style: { maxHeight: 120 } }),
        components
      );
    }
  }]);

  return Game;
}(_react2.default.Component);

exports.default = Game;

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactKeyHandler = __webpack_require__(294);

var _reactKeyHandler2 = _interopRequireDefault(_reactKeyHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Question = function (_React$Component) {
  _inherits(Question, _React$Component);

  function Question() {
    _classCallCheck(this, Question);

    var _this = _possibleConstructorReturn(this, (Question.__proto__ || Object.getPrototypeOf(Question)).call(this));

    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.onOptionSubmit = _this.onOptionSubmit.bind(_this);
    return _this;
  }

  _createClass(Question, [{
    key: 'handleKeyPress',
    value: function handleKeyPress(_ref) {
      var key = _ref.key;

      this.onOptionSubmit({ target: { value: this.props.question.options[key - 1].id } });
    }
  }, {
    key: 'onOptionSubmit',
    value: function onOptionSubmit(_ref2) {
      var value = _ref2.target.value;

      if (this.props.lastQuestion) {
        this.props.endGame({
          providedResults: [].concat(_toConsumableArray(this.props.providedResults), [{ questionId: this.props.question.id, optionId: value }]),
          name: this.props.name
        });
      }

      this.props.submitOption(this.props.question.id, value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var options = this.props.question.options.map(function (option) {
        return _react2.default.createElement(
          'span',
          { key: option.id, style: { display: "block" } },
          _react2.default.createElement(
            'button',
            {
              className: 'answer',
              value: option.id,
              onClick: _this2.onOptionSubmit },
            option.value
          )
        );
      });
      var keyHandlers = this.props.question.options.map(function (option, index) {
        return _react2.default.createElement(_reactKeyHandler2.default, { key: index, keyEventName: _reactKeyHandler.KEYPRESS, keyValue: (index + 1).toString(), onKeyHandle: _this2.handleKeyPress });
      });
      return _react2.default.createElement(
        'div',
        null,
        keyHandlers,
        _react2.default.createElement(
          'div',
          { className: 'question' },
          this.props.question.value
        ),
        options
      );
    }
  }]);

  return Question;
}(_react2.default.Component);

exports.default = Question;

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FONT_SIZE = 60;
var COLOR = "#FF530D";

var Timer = function (_React$Component) {
  _inherits(Timer, _React$Component);

  function Timer(props) {
    _classCallCheck(this, Timer);

    var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));

    _this.state = {
      secondsRemaining: props.secondsRemaining,
      fontSize: FONT_SIZE,
      color: COLOR
    };
    _this.tick = _this.tick.bind(_this);
    return _this;
  }

  _createClass(Timer, [{
    key: "getFontSize",
    value: function getFontSize(fontSize, secondsRemaining) {
      return secondsRemaining < 7 ? FONT_SIZE * 1.3 : FONT_SIZE;
    }
  }, {
    key: "getColor",
    value: function getColor(secondsRemaining) {
      return secondsRemaining < 7 ? "red" : COLOR;
    }
  }, {
    key: "tick",
    value: function tick() {
      this.setState({
        secondsRemaining: this.state.secondsRemaining - 1,
        fontSize: this.getFontSize(this.state.fontSize, this.state.secondsRemaining),
        color: this.getColor(this.state.secondsRemaining)
      });

      if (this.state.secondsRemaining <= 0) {
        this.props.timeOut();
        clearInterval(this.interval);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({ secondsRemaining: this.props.secondsRemaining, fontSize: FONT_SIZE, color: COLOR });
      this.interval = setInterval(this.tick, 1000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      var minutes = ("0" + parseInt(this.state.secondsRemaining / 60, 10)).slice(-2);
      var seconds = ("0" + parseInt(this.state.secondsRemaining % 60, 10)).slice(-2);
      return _react2.default.createElement(
        "div",
        { className: "digital", style: { fontSize: this.state.fontSize, color: this.state.color, height: 100 } },
        _react2.default.createElement(
          "span",
          null,
          minutes,
          ":",
          seconds
        )
      );
    }
  }]);

  return Timer;
}(_react2.default.Component);

exports.default = Timer;

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _cat = __webpack_require__(301);

var _cat2 = _interopRequireDefault(_cat);

var _tombstone = __webpack_require__(302);

var _tombstone2 = _interopRequireDefault(_tombstone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QUESTION_COUNT = 10;

var Leaderboard = function (_React$Component) {
  _inherits(Leaderboard, _React$Component);

  function Leaderboard() {
    _classCallCheck(this, Leaderboard);

    return _possibleConstructorReturn(this, (Leaderboard.__proto__ || Object.getPrototypeOf(Leaderboard)).apply(this, arguments));
  }

  _createClass(Leaderboard, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.props.players) {
        return _react2.default.createElement(
          'div',
          null,
          'Loading...'
        );
      } else if (this.props.players.length == 0) {
        return null;
      }

      var listOfPlayers = this.props.players.map(function (x) {
        return _react2.default.createElement(
          'div',
          { key: x.dateCreated, className: 'leaderboard-row' },
          _react2.default.createElement(
            'div',
            { className: 'leaderboard-image' },
            _react2.default.createElement('img', { alt: 'result', src: x.result ? _cat2.default : _tombstone2.default, height: '24' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'leaderboard-name' },
            _react2.default.createElement(
              'span',
              { style: { fontWeight: _this2.props.name === x.name ? "bold" : "normal" } },
              x.name
            ),
            _react2.default.createElement(
              'span',
              null,
              ' (',
              x.successfullyAnswered,
              '/',
              QUESTION_COUNT,
              ')'
            )
          )
        );
      });
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: { fontSize: 18, marginBottom: 7 } },
          'How did other players do?'
        ),
        _react2.default.createElement(
          'div',
          { className: 'leaderboard' },
          listOfPlayers
        )
      );
    }
  }]);

  return Leaderboard;
}(_react2.default.Component);

exports.default = Leaderboard;

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(136);

var _module = __webpack_require__(137);

var _Leaderboard = __webpack_require__(299);

var _Leaderboard2 = _interopRequireDefault(_Leaderboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container = function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.getLeaderboard();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Leaderboard2.default, this.props);
    }
  }]);

  return Container;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var players = _ref.leaderboard.players;
  var name = _ref2.name;

  return {
    players: players,
    name: name
  };
};
var mapDispatchToProps = {
  getLeaderboard: _module.getLeaderboard
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Container);

/***/ }),

/***/ 301:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 302:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEUBAAD//8z//5n//2b//zP//wD/zP//zMz/zJn/zGb/zDP/zAD/mf//mcz/mZn/mWb/mTP/mQD/Zv//Zsz/Zpn/Zmb/ZjP/ZgD/M///M8z/M5n/M2b/MzP/MwD/AP//AMz/AJn/AGb/ADP/AADM///M/8zM/5nM/2bM/zPM/wDMzP/MzMzMzJnMzGbMzDPMzADMmf/MmczMmZnMmWbMmTPMmQDMZv/MZszMZpnMZmbMZjPMZgDMM//MM8zMM5nMM2bMMzPMMwDMAP/MAMzMAJnMAGbMADPMAACZ//+Z/8yZ/5mZ/2aZ/zOZ/wCZzP+ZzMyZzJmZzGaZzDOZzACZmf+ZmcyZmZmZmWaZmTOZmQCZZv+ZZsyZZpmZZmaZZjOZZgCZM/+ZM8yZM5mZM2aZMzOZMwCZAP+ZAMyZAJmZAGaZADOZAABm//9m/8xm/5lm/2Zm/zNm/wBmzP9mzMxmzJlmzGZmzDNmzABmmf9mmcxmmZlmmWZmmTNmmQBmZv9mZsxmZplmZmZmZjNmZgBmM/9mM8xmM5lmM2ZmMzNmMwBmAP9mAMxmAJlmAGZmADNmAAAz//8z/8wz/5kz/2Yz/zMz/wAzzP8zzMwzzJkzzGYzzDMzzAAzmf8zmcwzmZkzmWYzmTMzmQAzZv8zZswzZpkzZmYzZjMzZgAzM/8zM8wzM5kzM2YzMzMzMwAzAP8zAMwzAJkzAGYzADMzAAAA//8A/8wA/5kA/2YA/zMA/wAAzP8AzMwAzJkAzGYAzDMAzAAAmf8AmcwAmZkAmWYAmTMAmQAAZv8AZswAZpkAZmYAZjMAZgAAM/8AM8wAM5kAM2YAMzMAMwAAAP8AAMwAAJkAAGYAADPuAADdAAC7AACqAACIAAB3AABVAABEAAAiAAARAAAA7gAA3QAAuwAAqgAAiAAAdwAAVQAARAAAIgAAEQAAAO4AAN0AALsAAKoAAIgAAHcAAFUAAEQAACIAABHu7u7d3d27u7uqqqqIiIh3d3dVVVVEREQiIiIREREAAABXOATKAAAAAXRSTlMAQObYZgAAAglJREFUeNpVk19uEzEQxmfG29K7RGoEyS3guRJSEbcgXhae2mQ3vQUEVIk3xDFIpKjS3gVlbQ/fOP+cyImd3Z+/mfk8Zio+kZUwXPmMz8ukuymmzeSlRE5ApB1PRt91+pen6+szcgQidq8hMOoxYfHiLoF4u55u1Cl1Nakq4GtXAtHkfyam1nf2f6Y8OWgcgY+rzmOtRF0/qlv/ZnNVAGk3ufMQJ4UGUd3Wyq8PQTIQB7cg8mwvWuOI256eT0C8vetXXW0ZIodaEQxf0hwkAzvJG+9/kFqOvkOqvuufT8D7FWI3+vvd0nefBI/DEpmQOwERmVET9GpwMt7yeF0Fe1cAVn8Tlk0QjvznreMgJIuvcgDSIKosyuOtyvDUKIUnq/Ws8Ej1/agZ6MpEMNRZwu2XI5ACftpmEJdH92u78ObrWSGg6m6mLrJEkg/fHByFWQVgFln9iIzyrK1gVZFDhMMw2pM5mI+DPi/qcw7xEfbW9h5+tuTtKSa+8KEWSszRURKaN0RzL1rkwJSqIKmazwgmRnPs0snWC2Jax5h0Ws6WdvZlFbDYzWdVklDZUTU0v3ByH4Igj0ASMJOgO8oqrJfMzlwsmW+eWQonc53WK7AMptiCtQqvDmfxsFfAfnQ1NmdeqUpJbw5VWE+2/Qh1ZJMxgFcJ9zUDp3uoWcIW++ucKAP/yjt++dGb/9wxKiDPpWZ7AAAAAElFTkSuQmCC"

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9BcHAvcm91dGVzL0dhbWUvY29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qta2V5LWhhbmRsZXIvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9BcHAvcm91dGVzL0dhbWUvY29tcG9uZW50cy9FbmRHYW1lLmpzeCIsIndlYnBhY2s6Ly8vLi9BcHAvcm91dGVzL0dhbWUvY29tcG9uZW50cy9HYW1lLmpzeCIsIndlYnBhY2s6Ly8vLi9BcHAvcm91dGVzL0dhbWUvY29tcG9uZW50cy9RdWVzdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3JvdXRlcy9HYW1lL2NvbXBvbmVudHMvVGltZXIuanN4Iiwid2VicGFjazovLy8uL0FwcC9yb3V0ZXMvTGVhZGVyYm9hcmQvY29tcG9uZW50cy9MZWFkZXJib2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vQXBwL3JvdXRlcy9MZWFkZXJib2FyZC9jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vQXBwL3JvdXRlcy9MZWFkZXJib2FyZC9hc3NldHMvY2F0LnBuZyIsIndlYnBhY2s6Ly8vLi9BcHAvcm91dGVzL0xlYWRlcmJvYXJkL2Fzc2V0cy90b21ic3RvbmUucG5nIl0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsImdhbWUiLCJxdWVzdGlvbnMiLCJxdWVzdGlvbiIsIm5hbWUiLCJwcm92aWRlZFJlc3VsdHMiLCJzdWNjZXNzIiwiaW1hZ2VTb3VyY2UiLCJsYXN0UXVlc3Rpb24iLCJsZW5ndGgiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJzdWJtaXRPcHRpb24iLCJzdGFydEdhbWUiLCJlbmRHYW1lIiwidGltZU91dCIsImNsZWFyR2FtZSIsIlRFWFQiLCJ0aXRsZSIsImJ1dHRvblRleHQiLCJuZXdQbGF5ZXJUZXh0IiwiRW5kR2FtZSIsIm9uUmV0cnlDbGljayIsImJpbmQiLCJvbk5ld1BsYXllckNsaWNrIiwicHJvcHMiLCJyb3V0ZXIiLCJwdXNoIiwidGV4dHMiLCJmb250U2l6ZSIsIm1hcmdpbiIsIm1hcmdpblRvcCIsIkNvbXBvbmVudCIsIkdhbWUiLCJjb21wb25lbnRzIiwibWF4SGVpZ2h0IiwiUXVlc3Rpb24iLCJoYW5kbGVLZXlQcmVzcyIsIm9uT3B0aW9uU3VibWl0Iiwia2V5IiwidGFyZ2V0IiwidmFsdWUiLCJvcHRpb25zIiwiaWQiLCJxdWVzdGlvbklkIiwib3B0aW9uSWQiLCJtYXAiLCJvcHRpb24iLCJkaXNwbGF5Iiwia2V5SGFuZGxlcnMiLCJpbmRleCIsInRvU3RyaW5nIiwiRk9OVF9TSVpFIiwiQ09MT1IiLCJUaW1lciIsInN0YXRlIiwic2Vjb25kc1JlbWFpbmluZyIsImNvbG9yIiwidGljayIsInNldFN0YXRlIiwiZ2V0Rm9udFNpemUiLCJnZXRDb2xvciIsImNsZWFySW50ZXJ2YWwiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibWludXRlcyIsInBhcnNlSW50Iiwic2xpY2UiLCJzZWNvbmRzIiwiaGVpZ2h0IiwiUVVFU1RJT05fQ09VTlQiLCJMZWFkZXJib2FyZCIsInBsYXllcnMiLCJsaXN0T2ZQbGF5ZXJzIiwieCIsImRhdGVDcmVhdGVkIiwicmVzdWx0IiwiZm9udFdlaWdodCIsInN1Y2Nlc3NmdWxseUFuc3dlcmVkIiwibWFyZ2luQm90dG9tIiwiQ29udGFpbmVyIiwiZ2V0TGVhZGVyYm9hcmQiLCJsZWFkZXJib2FyZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGtCQUFrQixTQUFsQkEsZUFBa0IsT0FBb0Y7QUFBQSx1QkFBakZDLElBQWlGO0FBQUEsTUFBekVDLFNBQXlFLGFBQXpFQSxTQUF5RTtBQUFBLE1BQTlEQyxRQUE4RCxhQUE5REEsUUFBOEQ7QUFBQSxNQUFwREMsSUFBb0QsYUFBcERBLElBQW9EO0FBQUEsTUFBOUNDLGVBQThDLGFBQTlDQSxlQUE4QztBQUFBLE1BQTdCQyxPQUE2QixhQUE3QkEsT0FBNkI7QUFBQSxNQUFwQkMsV0FBb0IsYUFBcEJBLFdBQW9COztB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QyxDOzs7Ozs7O0FDcEJmLGlDQUFpQyxnekg7Ozs7Ozs7QUNBakMsaUNBQWlDLDR5RCIsImZpbGUiOiIwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHN1Ym1pdE9wdGlvbiwgc3RhcnRHYW1lLCBlbmRHYW1lLCB0aW1lT3V0LCBjbGVhckdhbWUgfSBmcm9tICcuL21vZHVsZSdcbmltcG9ydCBHYW1lIGZyb20gJy4vY29tcG9uZW50cy9HYW1lJ1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBnYW1lOiB7IHF1ZXN0aW9ucywgcXVlc3Rpb24sIG5hbWUsIHByb3ZpZGVkUmVzdWx0cywgc3VjY2VzcywgaW1hZ2VTb3VyY2UgfSB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgcXVlc3Rpb24sXG4gICAgbmFtZSxcbiAgICBwcm92aWRlZFJlc3VsdHMsXG4gICAgc3VjY2VzcyxcbiAgICBpbWFnZVNvdXJjZSxcbiAgICBsYXN0UXVlc3Rpb246IHF1ZXN0aW9ucyAmJiBxdWVzdGlvbnMubGVuZ3RoID09PSAwXG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBzdWJtaXRPcHRpb24sXG4gIHN0YXJ0R2FtZSxcbiAgZW5kR2FtZSxcbiAgdGltZU91dCxcbiAgY2xlYXJHYW1lXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdhbWUpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL3JvdXRlcy9HYW1lL2NvbnRhaW5lci5qcyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlJlYWN0S2V5SGFuZGxlclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJSZWFjdEtleUhhbmRsZXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXykge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG5cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG5cblxuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG4vKioqLyB9LFxuLyogMSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHRleHBvcnRzLmtleVRvZ2dsZUhhbmRsZXIgPSBleHBvcnRzLmtleUhhbmRsZXIgPSB1bmRlZmluZWQ7XG5cblx0dmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuXHR2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5cdHZhciBfY29uc3RhbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuXHRPYmplY3Qua2V5cyhfY29uc3RhbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0ICBpZiAoa2V5ID09PSBcImRlZmF1bHRcIikgcmV0dXJuO1xuXHQgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHtcblx0ICAgIGVudW1lcmFibGU6IHRydWUsXG5cdCAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcblx0ICAgICAgcmV0dXJuIF9jb25zdGFudHNba2V5XTtcblx0ICAgIH1cblx0ICB9KTtcblx0fSk7XG5cblx0dmFyIF9yZWFjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cblx0dmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cblx0dmFyIF9leGVudiA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cblx0dmFyIF91dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5cdGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5cdGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5cdC8qKlxuXHQgKiBLZXlIYW5kbGVyIGNvbXBvbmVudC5cblx0ICovXG5cblx0dmFyIEtleUhhbmRsZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuXHQgIF9pbmhlcml0cyhLZXlIYW5kbGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuXHQgIF9jcmVhdGVDbGFzcyhLZXlIYW5kbGVyLCBbe1xuXHQgICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB7XG5cdCAgICAgIHJldHVybiBmYWxzZTtcblx0ICAgIH1cblx0ICB9XSk7XG5cblx0ICBmdW5jdGlvbiBLZXlIYW5kbGVyKHByb3BzKSB7XG5cdCAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgS2V5SGFuZGxlcik7XG5cblx0ICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cblxuXHQgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKEtleUhhbmRsZXIpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuXHQgICAgaWYgKCFwcm9wcy5rZXlWYWx1ZSAmJiAhcHJvcHMua2V5Q29kZSAmJiAhcHJvcHMua2V5TmFtZSkge1xuXHQgICAgICBjb25zb2xlLmVycm9yKCdXYXJuaW5nOiBGYWlsZWQgcHJvcFR5cGU6IE1pc3NpbmcgcHJvcCBga2V5VmFsdWVgLCBga2V5Q29kZWAgb3IgYGtleU5hbWVgIGZvciBgS2V5SGFuZGxlcmAuJyk7XG5cdCAgICB9XG5cblx0ICAgIGlmIChwcm9wcy5rZXlOYW1lKSB7XG5cdCAgICAgIGNvbnNvbGUuZXJyb3IoJ1dhcm5pbmc6IEZhaWxlZCBwcm9wVHlwZTogRG8gbm90IHVzZSBkZXByZWNhdGVkIHByb3AgYGtleU5hbWVgLCB1c2UgYGtleVZhbHVlYCBvciBga2V5Q29kZWAgaW5zdGVhZCBmb3IgYEtleUhhbmRsZXJgLicpO1xuXHQgICAgfVxuXG5cdCAgICAvKiBlc2xpbnQtZW5hYmxlICovXG5cblx0ICAgIF90aGlzLmhhbmRsZUtleSA9IF90aGlzLmhhbmRsZUtleS5iaW5kKF90aGlzKTtcblx0ICAgIHJldHVybiBfdGhpcztcblx0ICB9XG5cblx0ICBfY3JlYXRlQ2xhc3MoS2V5SGFuZGxlciwgW3tcblx0ICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50Jyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcblx0ICAgICAgaWYgKCFfZXhlbnYuY2FuVXNlRE9NKSByZXR1cm47XG5cblx0ICAgICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5wcm9wcy5rZXlFdmVudE5hbWUsIHRoaXMuaGFuZGxlS2V5KTtcblx0ICAgIH1cblx0ICB9LCB7XG5cdCAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdCAgICAgIGlmICghX2V4ZW52LmNhblVzZURPTSkgcmV0dXJuO1xuXG5cdCAgICAgIHdpbmRvdy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMucHJvcHMua2V5RXZlbnROYW1lLCB0aGlzLmhhbmRsZUtleSk7XG5cdCAgICB9XG5cdCAgfSwge1xuXHQgICAga2V5OiAncmVuZGVyJyxcblx0ICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG5cdCAgICAgIHJldHVybiBudWxsO1xuXHQgICAgfVxuXHQgIH0sIHtcblx0ICAgIGtleTogJ2hhbmRsZUtleScsXG5cdCAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlS2V5KGV2ZW50KSB7XG5cdCAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzO1xuXHQgICAgICB2YXIga2V5VmFsdWUgPSBfcHJvcHMua2V5VmFsdWU7XG5cdCAgICAgIHZhciBrZXlDb2RlID0gX3Byb3BzLmtleUNvZGU7XG5cdCAgICAgIHZhciBrZXlOYW1lID0gX3Byb3BzLmtleU5hbWU7XG5cdCAgICAgIHZhciBvbktleUhhbmRsZSA9IF9wcm9wcy5vbktleUhhbmRsZTtcblxuXG5cdCAgICAgIGlmICghb25LZXlIYW5kbGUpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblxuXHQgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG5cblx0ICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCAmJiAoMCwgX3V0aWxzLmlzSW5wdXQpKHRhcmdldCkpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblxuXHQgICAgICBpZiAoISgwLCBfdXRpbHMubWF0Y2hlc0tleWJvYXJkRXZlbnQpKGV2ZW50LCB7IGtleVZhbHVlOiBrZXlWYWx1ZSwga2V5Q29kZToga2V5Q29kZSwga2V5TmFtZToga2V5TmFtZSB9KSkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXG5cdCAgICAgIG9uS2V5SGFuZGxlKGV2ZW50KTtcblx0ICAgIH1cblx0ICB9XSk7XG5cblx0ICByZXR1cm4gS2V5SGFuZGxlcjtcblx0fShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KTtcblxuXHQvKipcblx0ICogVHlwZXMuXG5cdCAqL1xuXG5cdEtleUhhbmRsZXIucHJvcFR5cGVzID0ge1xuXHQgIGtleVZhbHVlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLnN0cmluZyxcblx0ICBrZXlDb2RlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLm51bWJlcixcblx0ICBrZXlFdmVudE5hbWU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub25lT2YoW19jb25zdGFudHMuS0VZRE9XTiwgX2NvbnN0YW50cy5LRVlQUkVTUywgX2NvbnN0YW50cy5LRVlVUF0pLFxuXHQgIGtleU5hbWU6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuc3RyaW5nLFxuXHQgIG9uS2V5SGFuZGxlOiBfcmVhY3QyLmRlZmF1bHQuUHJvcFR5cGVzLmZ1bmNcblx0fTtcblx0S2V5SGFuZGxlci5kZWZhdWx0UHJvcHMgPSB7XG5cdCAga2V5RXZlbnROYW1lOiBfY29uc3RhbnRzLktFWVVQXG5cdH07XG5cdGV4cG9ydHMuZGVmYXVsdCA9IEtleUhhbmRsZXI7XG5cblxuXHQvKipcblx0ICogS2V5SGFuZGxlciBkZWNvcmF0b3JzLlxuXHQgKi9cblxuXHRmdW5jdGlvbiBrZXlIYW5kbGVEZWNvcmF0b3IoKSB7XG5cdCAgdmFyIG1hdGNoZXIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzBdO1xuXG5cdCAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xuXHQgICAgdmFyIF9yZWYgPSBwcm9wcyB8fCB7fTtcblxuXHQgICAgdmFyIGtleVZhbHVlID0gX3JlZi5rZXlWYWx1ZTtcblx0ICAgIHZhciBrZXlDb2RlID0gX3JlZi5rZXlDb2RlO1xuXHQgICAgdmFyIGtleU5hbWUgPSBfcmVmLmtleU5hbWU7XG5cdCAgICB2YXIga2V5RXZlbnROYW1lID0gX3JlZi5rZXlFdmVudE5hbWU7XG5cblxuXHQgICAgcmV0dXJuIGZ1bmN0aW9uIChDb21wb25lbnQpIHtcblx0ICAgICAgcmV0dXJuIGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50Mikge1xuXHQgICAgICAgIF9pbmhlcml0cyhLZXlIYW5kbGVEZWNvcmF0b3IsIF9SZWFjdCRDb21wb25lbnQyKTtcblxuXHQgICAgICAgIGZ1bmN0aW9uIEtleUhhbmRsZURlY29yYXRvcihwcm9wcykge1xuXHQgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEtleUhhbmRsZURlY29yYXRvcik7XG5cblx0ICAgICAgICAgIHZhciBfdGhpczIgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoS2V5SGFuZGxlRGVjb3JhdG9yKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cblx0ICAgICAgICAgIF90aGlzMi5zdGF0ZSA9IHsga2V5VmFsdWU6IG51bGwsIGtleUNvZGU6IG51bGwsIGtleU5hbWU6IG51bGwgfTtcblxuXG5cdCAgICAgICAgICBfdGhpczIuaGFuZGxlS2V5ID0gX3RoaXMyLmhhbmRsZUtleS5iaW5kKF90aGlzMik7XG5cdCAgICAgICAgICByZXR1cm4gX3RoaXMyO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgIF9jcmVhdGVDbGFzcyhLZXlIYW5kbGVEZWNvcmF0b3IsIFt7XG5cdCAgICAgICAgICBrZXk6ICdyZW5kZXInLFxuXHQgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcblx0ICAgICAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuXHQgICAgICAgICAgICAgICdkaXYnLFxuXHQgICAgICAgICAgICAgIG51bGwsXG5cdCAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoS2V5SGFuZGxlciwgeyBrZXlWYWx1ZToga2V5VmFsdWUsIGtleUNvZGU6IGtleUNvZGUsIGtleUV2ZW50TmFtZToga2V5RXZlbnROYW1lLCBrZXlOYW1lOiBrZXlOYW1lLCBvbktleUhhbmRsZTogdGhpcy5oYW5kbGVLZXkgfSksXG5cdCAgICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgdGhpcy5zdGF0ZSkpXG5cdCAgICAgICAgICAgICk7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfSwge1xuXHQgICAgICAgICAga2V5OiAnaGFuZGxlS2V5Jyxcblx0ICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVLZXkoZXZlbnQpIHtcblx0ICAgICAgICAgICAgaWYgKG1hdGNoZXIgJiYgbWF0Y2hlcihldmVudCwgdGhpcy5zdGF0ZSkpIHtcblx0ICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsga2V5VmFsdWU6IG51bGwsIGtleUNvZGU6IG51bGwsIGtleU5hbWU6IG51bGwgfSk7XG5cdCAgICAgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGtleVZhbHVlOiAoMCwgX3V0aWxzLmV2ZW50S2V5KShldmVudCksIGtleUNvZGU6IGV2ZW50LmtleUNvZGUsIGtleU5hbWU6ICgwLCBfdXRpbHMuZXZlbnRLZXlOYW1lKShldmVudCkgfSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XSk7XG5cblx0ICAgICAgICByZXR1cm4gS2V5SGFuZGxlRGVjb3JhdG9yO1xuXHQgICAgICB9KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpO1xuXHQgICAgfTtcblx0ICB9O1xuXHR9XG5cblx0dmFyIGtleUhhbmRsZXIgPSBleHBvcnRzLmtleUhhbmRsZXIgPSBrZXlIYW5kbGVEZWNvcmF0b3IoKTtcblx0dmFyIGtleVRvZ2dsZUhhbmRsZXIgPSBleHBvcnRzLmtleVRvZ2dsZUhhbmRsZXIgPSBrZXlIYW5kbGVEZWNvcmF0b3IoX3V0aWxzLm1hdGNoZXNLZXlib2FyZEV2ZW50KTtcblxuXHQvKipcblx0ICogQ29uc3RhbnRzXG5cdCAqL1xuXG4vKioqLyB9LFxuLyogMiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuXHQgIHZhbHVlOiB0cnVlXG5cdH0pO1xuXHQvKipcblx0ICogS2V5IGV2ZW50IG5hbWVzLlxuXHQgKi9cblxuXHR2YXIgS0VZRE9XTiA9IGV4cG9ydHMuS0VZRE9XTiA9ICdrZXlkb3duJztcblx0dmFyIEtFWVBSRVNTID0gZXhwb3J0cy5LRVlQUkVTUyA9ICdrZXlwcmVzcyc7XG5cdHZhciBLRVlVUCA9IGV4cG9ydHMuS0VZVVAgPSAna2V5dXAnO1xuXG4vKioqLyB9LFxuLyogMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0bW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuLyoqKi8gfSxcbi8qIDQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdHZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsvKiFcblx0ICBDb3B5cmlnaHQgKGMpIDIwMTUgSmVkIFdhdHNvbi5cblx0ICBCYXNlZCBvbiBjb2RlIHRoYXQgaXMgQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cblx0ICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuXHQqL1xuXHQvKiBnbG9iYWwgZGVmaW5lICovXG5cblx0KGZ1bmN0aW9uICgpIHtcblx0XHQndXNlIHN0cmljdCc7XG5cblx0XHR2YXIgY2FuVXNlRE9NID0gISEoXG5cdFx0XHR0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuXHRcdFx0d2luZG93LmRvY3VtZW50ICYmXG5cdFx0XHR3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuXHRcdCk7XG5cblx0XHR2YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSB7XG5cblx0XHRcdGNhblVzZURPTTogY2FuVXNlRE9NLFxuXG5cdFx0XHRjYW5Vc2VXb3JrZXJzOiB0eXBlb2YgV29ya2VyICE9PSAndW5kZWZpbmVkJyxcblxuXHRcdFx0Y2FuVXNlRXZlbnRMaXN0ZW5lcnM6XG5cdFx0XHRcdGNhblVzZURPTSAmJiAhISh3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciB8fCB3aW5kb3cuYXR0YWNoRXZlbnQpLFxuXG5cdFx0XHRjYW5Vc2VWaWV3cG9ydDogY2FuVXNlRE9NICYmICEhd2luZG93LnNjcmVlblxuXG5cdFx0fTtcblxuXHRcdGlmICh0cnVlKSB7XG5cdFx0XHQhKF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdFx0XHR9LmNhbGwoZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXywgZXhwb3J0cywgbW9kdWxlKSwgX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpO1xuXHRcdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRcdG1vZHVsZS5leHBvcnRzID0gRXhlY3V0aW9uRW52aXJvbm1lbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdpbmRvdy5FeGVjdXRpb25FbnZpcm9ubWVudCA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHRcdH1cblxuXHR9KCkpO1xuXG5cbi8qKiovIH0sXG4vKiA1ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG5cdCAgdmFsdWU6IHRydWVcblx0fSk7XG5cdGV4cG9ydHMuaXNJbnB1dCA9IGlzSW5wdXQ7XG5cdGV4cG9ydHMubWF0Y2hlc0tleWJvYXJkRXZlbnQgPSBtYXRjaGVzS2V5Ym9hcmRFdmVudDtcblx0ZXhwb3J0cy5ldmVudEtleSA9IGV2ZW50S2V5O1xuXHRleHBvcnRzLmV2ZW50S2V5TmFtZSA9IGV2ZW50S2V5TmFtZTtcblxuXHR2YXIgX2tleWNvZGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcblxuXHR2YXIgX2tleWNvZGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2tleWNvZGVzKTtcblxuXHR2YXIgX2NvbnN0YW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cblx0ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuXHQvKipcblx0ICogQ29uc3RhbnRzLlxuXHQgKi9cblxuXHQvKipcblx0ICogVHlwZXMuXG5cdCAqL1xuXG5cdHZhciBOT1JNQUxJWkVEX0tFWVMgPSB7XG5cdCAgJ0VzYyc6ICdFc2NhcGUnLFxuXHQgICdTcGFjZWJhcic6ICcgJyxcblx0ICAnTGVmdCc6ICdBcnJvd0xlZnQnLFxuXHQgICdVcCc6ICdBcnJvd1VwJyxcblx0ICAnUmlnaHQnOiAnQXJyb3dSaWdodCcsXG5cdCAgJ0Rvd24nOiAnQXJyb3dEb3duJyxcblx0ICAnRGVsJzogJ0RlbGV0ZScsXG5cdCAgJ1dpbic6ICdPUycsXG5cdCAgJ01lbnUnOiAnQ29udGV4dE1lbnUnLFxuXHQgICdBcHBzJzogJ0NvbnRleHRNZW51Jyxcblx0ICAnU2Nyb2xsJzogJ1Njcm9sbExvY2snLFxuXHQgICdNb3pQcmludGFibGVLZXknOiAnVW5pZGVudGlmaWVkJ1xuXHR9O1xuXG5cdHZhciBLRVlfQ09ERV9LRVlTID0ge1xuXHQgICc4JzogJ0JhY2tzcGFjZScsXG5cdCAgJzknOiAnVGFiJyxcblx0ICAnMTInOiAnQ2xlYXInLFxuXHQgICcxMyc6ICdFbnRlcicsXG5cdCAgJzE2JzogJ1NoaWZ0Jyxcblx0ICAnMTcnOiAnQ29udHJvbCcsXG5cdCAgJzE4JzogJ0FsdCcsXG5cdCAgJzE5JzogJ1BhdXNlJyxcblx0ICAnMjAnOiAnQ2Fwc0xvY2snLFxuXHQgICcyNyc6ICdFc2NhcGUnLFxuXHQgICczMic6ICcgJyxcblx0ICAnMzMnOiAnUGFnZVVwJyxcblx0ICAnMzQnOiAnUGFnZURvd24nLFxuXHQgICczNSc6ICdFbmQnLFxuXHQgICczNic6ICdIb21lJyxcblx0ICAnMzcnOiAnQXJyb3dMZWZ0Jyxcblx0ICAnMzgnOiAnQXJyb3dVcCcsXG5cdCAgJzM5JzogJ0Fycm93UmlnaHQnLFxuXHQgICc0MCc6ICdBcnJvd0Rvd24nLFxuXHQgICc0NSc6ICdJbnNlcnQnLFxuXHQgICc0Nic6ICdEZWxldGUnLFxuXHQgICcxMTInOiAnRjEnLFxuXHQgICcxMTMnOiAnRjInLFxuXHQgICcxMTQnOiAnRjMnLFxuXHQgICcxMTUnOiAnRjQnLFxuXHQgICcxMTYnOiAnRjUnLFxuXHQgICcxMTcnOiAnRjYnLFxuXHQgICcxMTgnOiAnRjcnLFxuXHQgICcxMTknOiAnRjgnLFxuXHQgICcxMjAnOiAnRjknLFxuXHQgICcxMjEnOiAnRjEwJyxcblx0ICAnMTIyJzogJ0YxMScsXG5cdCAgJzEyMyc6ICdGMTInLFxuXHQgICcxNDQnOiAnTnVtTG9jaycsXG5cdCAgJzE0NSc6ICdTY3JvbGxMb2NrJyxcblx0ICAnMjI0JzogJ01ldGEnXG5cdH07XG5cblx0LyoqXG5cdCAqIENoZWNrIGlmIGBnaXZlbmAgZWxlbWVudCBpcyBhbiBpbnB1dCAvIHRleHRhcmVhIGZvcm0gZWxlbWVudCBvciBhY3RzIGFzIG9uZS5cblx0ICovXG5cblx0ZnVuY3Rpb24gaXNJbnB1dChlbGVtZW50KSB7XG5cdCAgaWYgKCFlbGVtZW50KSB7XG5cdCAgICByZXR1cm4gZmFsc2U7XG5cdCAgfVxuXG5cdCAgdmFyIHRhZ05hbWUgPSBlbGVtZW50LnRhZ05hbWU7XG5cblx0ICB2YXIgZWRpdGFibGUgPSBpc0NvbnRlbnRFZGl0YWJsZShlbGVtZW50KTtcblxuXHQgIHJldHVybiB0YWdOYW1lID09PSAnSU5QVVQnIHx8IHRhZ05hbWUgPT09ICdURVhUQVJFQScgfHwgZWRpdGFibGU7XG5cdH1cblxuXHRmdW5jdGlvbiBpc0NvbnRlbnRFZGl0YWJsZShlbGVtZW50KSB7XG5cdCAgaWYgKHR5cGVvZiBlbGVtZW50LmdldEF0dHJpYnV0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgcmV0dXJuIGZhbHNlO1xuXHQgIH1cblxuXHQgIHJldHVybiAhIWVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNYXRjaGVzIGFuIGV2ZW50IGFnYWluc3QgYSBnaXZlbiBrZXlib2FyZCBrZXkuXG5cdCAqL1xuXG5cdGZ1bmN0aW9uIG1hdGNoZXNLZXlib2FyZEV2ZW50KGV2ZW50LCBfcmVmKSB7XG5cdCAgdmFyIGtleUNvZGUgPSBfcmVmLmtleUNvZGU7XG5cdCAgdmFyIGtleVZhbHVlID0gX3JlZi5rZXlWYWx1ZTtcblx0ICB2YXIga2V5TmFtZSA9IF9yZWYua2V5TmFtZTtcblxuXHQgIGlmICghaXNOdWxsT3JVbmRlZmluZWQoa2V5VmFsdWUpKSB7XG5cdCAgICByZXR1cm4ga2V5VmFsdWUgPT09IGV2ZW50S2V5KGV2ZW50KTtcblx0ICB9XG5cblx0ICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKGtleUNvZGUpKSB7XG5cdCAgICByZXR1cm4ga2V5Q29kZSA9PT0gZXZlbnQua2V5Q29kZTtcblx0ICB9XG5cblx0ICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKGtleU5hbWUpKSB7XG5cdCAgICByZXR1cm4ga2V5TmFtZSA9PT0gZXZlbnRLZXlOYW1lKGV2ZW50KTtcblx0ICB9XG5cblx0ICByZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRmdW5jdGlvbiBpc051bGxPclVuZGVmaW5lZCh2YWx1ZSkge1xuXHQgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXZlbnRLZXkoZXZlbnQpIHtcblx0ICB2YXIga2V5ID0gZXZlbnQua2V5O1xuXHQgIHZhciBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcblx0ICB2YXIgdHlwZSA9IGV2ZW50LnR5cGU7XG5cblxuXHQgIGlmIChrZXkpIHtcblx0ICAgIHZhciBub3JtYWxpemVkS2V5ID0gTk9STUFMSVpFRF9LRVlTW2tleV0gfHwga2V5O1xuXG5cdCAgICBpZiAobm9ybWFsaXplZEtleSAhPT0gJ1VuaWRlbnRpZmllZCcpIHtcblx0ICAgICAgcmV0dXJuIG5vcm1hbGl6ZWRLZXk7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgaWYgKHR5cGUgPT09IF9jb25zdGFudHMuS0VZUFJFU1MpIHtcblx0ICAgIHZhciBjaGFyQ29kZSA9IGV2ZW50Q2hhckNvZGUoZXZlbnQpO1xuXG5cdCAgICByZXR1cm4gY2hhckNvZGUgPT09IDEzID8gJ0VudGVyJyA6IFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhckNvZGUpO1xuXHQgIH1cblxuXHQgIGlmICh0eXBlID09PSBfY29uc3RhbnRzLktFWURPV04gfHwgdHlwZSA9PT0gX2NvbnN0YW50cy5LRVlVUCkge1xuXHQgICAgcmV0dXJuIEtFWV9DT0RFX0tFWVNbU3RyaW5nKGtleUNvZGUpXSB8fCAnVW5pZGVudGlmaWVkJztcblx0ICB9XG5cblx0ICByZXR1cm4gJyc7XG5cdH1cblxuXHRmdW5jdGlvbiBldmVudEtleU5hbWUoZXZlbnQpIHtcblx0ICByZXR1cm4gKDAsIF9rZXljb2RlczIuZGVmYXVsdCkoZXZlbnQua2V5Q29kZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBldmVudENoYXJDb2RlKGV2ZW50KSB7XG5cdCAgdmFyIGNoYXJDb2RlID0gZXZlbnQuY2hhckNvZGU7XG5cdCAgdmFyIGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuXG5cblx0ICBpZiAoJ2NoYXJDb2RlJyBpbiBldmVudCkge1xuXHQgICAgaWYgKGNoYXJDb2RlID09PSAwICYmIGtleUNvZGUgPT09IDEzKSB7XG5cdCAgICAgIHJldHVybiAxMztcblx0ICAgIH1cblx0ICB9IGVsc2Uge1xuXHQgICAgY2hhckNvZGUgPSBrZXlDb2RlO1xuXHQgIH1cblxuXHQgIGlmIChjaGFyQ29kZSA+PSAzMiB8fCBjaGFyQ29kZSA9PT0gMTMpIHtcblx0ICAgIHJldHVybiBjaGFyQ29kZTtcblx0ICB9XG5cblx0ICByZXR1cm4gMDtcblx0fVxuXG4vKioqLyB9LFxuLyogNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBrZXlzID0ge1xuXHQgIGN0cmw6IDE3LFxuXHQgIGNvbnRyb2w6IDE3LFxuXHQgIGFsdDogMTgsXG5cdCAgb3B0aW9uOiAxOCxcblx0ICBzaGlmdDogMTYsXG5cdCAgd2luZG93czogOTEsXG5cdCAgY29tbWFuZDogOTEsXG5cdCAgZXNjOiAyNyxcblx0ICBlc2NhcGU6IDI3LFxuXHQgICdgJzogMTkyLFxuXHQgICctJzogMTg5LFxuXHQgICc9JzogMTg3LFxuXHQgIGJhY2tzcGFjZTogOCxcblx0ICB0YWI6IDksXG5cdCAgJ1xcXFwnOiAyMjAsXG5cdCAgJ1snOiAyMTksXG5cdCAgJ10nOiAyMjEsXG5cdCAgJzsnOiAxODYsXG5cdCAgJ1xcJyc6IDIyMixcblx0ICBlbnRlcjogMTMsXG5cdCAgJ3JldHVybic6IDEzLFxuXHQgICcsJzogMTg4LFxuXHQgICcuJzogMTkwLFxuXHQgICcvJzogMTkxLFxuXHQgIHNwYWNlOiAzMixcblx0ICBwYXVzZTogMTksXG5cdCAgJ2JyZWFrJzogMTksXG5cdCAgaW5zZXJ0OiA0NSxcblx0ICAnZGVsZXRlJzogNDYsXG5cdCAgaG9tZTogMzYsXG5cdCAgZW5kOiAzNSxcblx0ICBwYWdldXA6IDMzLFxuXHQgIHBhZ2Vkb3duOiAzNCxcblx0ICBsZWZ0OiAzNyxcblx0ICB1cDogMzgsXG5cdCAgcmlnaHQ6IDM5LFxuXHQgIGRvd246IDQwLFxuXHQgIGNhcHNsb2NrOiAyMCxcblx0ICBudW1sb2NrOiAxNDQsXG5cdCAgc2Nyb2xsbG9jazogMTQ1XG5cdH07XG5cblx0Zm9yICh2YXIgZiA9IDE7IGYgPCAyMDsgZisrKSB7XG5cdCAga2V5c1snZicgKyBmXSA9IDExMSArIGY7XG5cdH1cblxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCkge1xuXHQgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSByZXR1cm4gY29kZShpbnB1dCk7XG5cdCAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ251bWJlcicpIHJldHVybiBrZXkoaW5wdXQpO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIGNvZGUoaW5wdXQpIHtcblx0ICByZXR1cm4ga2V5c1tpbnB1dC50b0xvd2VyQ2FzZSgpXSB8fCBpbnB1dC50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCk7XG5cdH1cblxuXHRmdW5jdGlvbiBrZXkoaW5wdXQpIHtcblx0ICBmb3IgKHZhciBrIGluIGtleXMpIHtcblx0ICAgIGlmIChrZXlzLmhhc093blByb3BlcnR5KGspKSB7XG5cdCAgICAgIGlmIChrZXlzW2tdID09PSBpbnB1dCkgcmV0dXJuIGs7XG5cdCAgICB9XG5cdCAgfVxuXG5cdCAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoaW5wdXQpLnRvTG93ZXJDYXNlKCk7XG5cdH1cblxuXG4vKioqLyB9XG4vKioqKioqLyBdKVxufSk7XG47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWtleS1oYW5kbGVyL2Rpc3QvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExlYWRlcmJvYXJkIGZyb20gJy4uLy4uL0xlYWRlcmJvYXJkL2NvbnRhaW5lcic7XG5pbXBvcnQgS2V5SGFuZGxlciwgeyBLRVlQUkVTUyB9IGZyb20gJ3JlYWN0LWtleS1oYW5kbGVyJztcblxuY29uc3QgVEVYVCA9IChzdWNjZXNzKSA9PiBzdWNjZXNzXG4gID8ge1xuICAgIHRpdGxlOiBcIllheSwgeW91IHNhdmVkIGEga2l0dGVuXCIsXG4gICAgYnV0dG9uVGV4dDogXCJMZXQncyBzYXZlIGFub3RoZXIgb25lIVwiLFxuICAgIG5ld1BsYXllclRleHQ6IFwiTmV3IHNhdmVyP1wiXG4gIH1cbiAgOiB7XG4gICAgdGl0bGU6IFwiU28gc2FkLi4uXCIsXG4gICAgYnV0dG9uVGV4dDogXCJUcnkgdG8gc2F2ZSBhdGxlYXN0IG9uZVwiLFxuICAgIG5ld1BsYXllclRleHQ6IFwiTGV0IHNvbWVvbmUgZWxzZSB0cnkuLlwiXG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZEdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMub25SZXRyeUNsaWNrID0gdGhpcy5vblJldHJ5Q2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uTmV3UGxheWVyQ2xpY2sgPSB0aGlzLm9uTmV3UGxheWVyQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuICBvblJldHJ5Q2xpY2soKSB7XG4gICAgdGhpcy5wcm9wcy5zdGFydEdhbWUodGhpcy5wcm9wcy5uYW1lKTtcbiAgfVxuICBvbk5ld1BsYXllckNsaWNrKCkge1xuICAgIHRoaXMucHJvcHMuY2xlYXJHYW1lKCk7XG4gICAgdGhpcy5wcm9wcy5yb3V0ZXIucHVzaCgnLycpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0ZXh0cyA9IFRFWFQodGhpcy5wcm9wcy5zdWNjZXNzKTtcbiAgICAvLyBUT0RPOiBidXR0b24gY2xpY2tzIGRvbnQgd29yayFcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEtleUhhbmRsZXIga2V5RXZlbnROYW1lPXtLRVlQUkVTU30ga2V5VmFsdWU9eydlbnRlcid9IG9uS2V5SGFuZGxlPXt0aGlzLm9uUmV0cnlDbGlja30gLz5cbiAgICAgICAgPEtleUhhbmRsZXIga2V5RXZlbnROYW1lPXtLRVlQUkVTU30ga2V5VmFsdWU9eydlc2MnfSBvbktleUhhbmRsZT17dGhpcy5vbk5ld1BsYXllckNsaWNrfSAvPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAyOCwgbWFyZ2luOiAzMCB9fT57dGV4dHMudGl0bGV9PC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyXCIgb25DbGljaz17dGhpcy5vblJldHJ5Q2xpY2t9Pnt0ZXh0cy5idXR0b25UZXh0fTwvYnV0dG9uPjxiciAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFuc3dlclwiIG9uQ2xpY2s9e3RoaXMub25OZXdQbGF5ZXJDbGlja30+e3RleHRzLm5ld1BsYXllclRleHR9PC9idXR0b24+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCB9fT5cbiAgICAgICAgICA8TGVhZGVyYm9hcmQgbmFtZT17dGhpcy5wcm9wcy5uYW1lfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxMCwgbWFyZ2luVG9wOiAxNSB9fT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuYnV6emZlZWQuY29tL2NoZWxzZWFtYXJzaGFsbC9tZW93cz91dG1fdGVybT0uY2xHbkptSlo0Iy5udkFaNno2bEtcIj5GaW5kIG91dCBtb3JlIGFib3V0IGtpdHRlbnMhIChIaW50cyBoZXJlISk8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL3JvdXRlcy9HYW1lL2NvbXBvbmVudHMvRW5kR2FtZS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVGltZXIgZnJvbSAnLi9UaW1lcic7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSAnLi9RdWVzdGlvbic7XG5pbXBvcnQgRW5kR2FtZSBmcm9tICcuL0VuZEdhbWUnO1xuXG4vKlxuKiBHYW1lIG1hbmFnZXIgY2xhc3MuIE1hbmFnZXMgdGhlIGdhbWUgYW5kIHRoZSBlbmQgZ2FtZS5cbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCBjb21wb25lbnRzO1xuICAgIGlmICh0aGlzLnByb3BzLnN1Y2Nlc3MgIT0gbnVsbCkge1xuICAgICAgY29tcG9uZW50cyA9IDxFbmRHYW1lIFxuICAgICAgICBzdGFydEdhbWU9e3RoaXMucHJvcHMuc3RhcnRHYW1lfSBcbiAgICAgICAgbmFtZT17dGhpcy5wcm9wcy5uYW1lfSBcbiAgICAgICAgc3VjY2Vzcz17dGhpcy5wcm9wcy5zdWNjZXNzfSBcbiAgICAgICAgcm91dGVyPXt0aGlzLnByb3BzLnJvdXRlcn1cbiAgICAgICAgY2xlYXJHYW1lPXt0aGlzLnByb3BzLmNsZWFyR2FtZX0gLz5cbiAgICB9IGVsc2UgaWYgKCF0aGlzLnByb3BzLnF1ZXN0aW9uKSB7XG4gICAgICBjb21wb25lbnRzID0gPGRpdj5Mb2FkaW5nLi48L2Rpdj5cbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50cyA9IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8UXVlc3Rpb25cbiAgICAgICAgICAgIHF1ZXN0aW9uPXt0aGlzLnByb3BzLnF1ZXN0aW9ufVxuICAgICAgICAgICAgc3VibWl0T3B0aW9uPXt0aGlzLnByb3BzLnN1Ym1pdE9wdGlvbn1cbiAgICAgICAgICAgIHByb3ZpZGVkUmVzdWx0cz17dGhpcy5wcm9wcy5wcm92aWRlZFJlc3VsdHN9XG4gICAgICAgICAgICBuYW1lPXt0aGlzLnByb3BzLm5hbWV9XG4gICAgICAgICAgICBlbmRHYW1lPXt0aGlzLnByb3BzLmVuZEdhbWV9XG4gICAgICAgICAgICBsYXN0UXVlc3Rpb249e3RoaXMucHJvcHMubGFzdFF1ZXN0aW9ufSAvPlxuICAgICAgICAgIDxUaW1lciBzZWNvbmRzUmVtYWluaW5nPVwiNDVcIiB0aW1lT3V0PXt0aGlzLnByb3BzLnRpbWVPdXR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5pbWFnZVNvdXJjZX0gc3R5bGU9e3sgbWF4SGVpZ2h0OiAxMjAgfX0gLz5cbiAgICAgICAge2NvbXBvbmVudHN9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9yb3V0ZXMvR2FtZS9jb21wb25lbnRzL0dhbWUuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBLZXlIYW5kbGVyLCB7IEtFWVBSRVNTIH0gZnJvbSAncmVhY3Qta2V5LWhhbmRsZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5oYW5kbGVLZXlQcmVzcyA9IHRoaXMuaGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uT3B0aW9uU3VibWl0ID0gdGhpcy5vbk9wdGlvblN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG4gIGhhbmRsZUtleVByZXNzKHsga2V5IH0pIHtcbiAgICB0aGlzLm9uT3B0aW9uU3VibWl0KHsgdGFyZ2V0OiB7IHZhbHVlOiB0aGlzLnByb3BzLnF1ZXN0aW9uLm9wdGlvbnNba2V5IC0gMV0uaWQgfSB9KVxuICB9XG4gIG9uT3B0aW9uU3VibWl0KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkge1xuICAgIGlmICh0aGlzLnByb3BzLmxhc3RRdWVzdGlvbikge1xuICAgICAgdGhpcy5wcm9wcy5lbmRHYW1lKHtcbiAgICAgICAgcHJvdmlkZWRSZXN1bHRzOiBbXG4gICAgICAgICAgLi4udGhpcy5wcm9wcy5wcm92aWRlZFJlc3VsdHMsXG4gICAgICAgICAgeyBxdWVzdGlvbklkOiB0aGlzLnByb3BzLnF1ZXN0aW9uLmlkLCBvcHRpb25JZDogdmFsdWUgfVxuICAgICAgICBdLFxuICAgICAgICBuYW1lOiB0aGlzLnByb3BzLm5hbWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMuc3VibWl0T3B0aW9uKHRoaXMucHJvcHMucXVlc3Rpb24uaWQsIHZhbHVlKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMucHJvcHMucXVlc3Rpb24ub3B0aW9ucy5tYXAob3B0aW9uID0+XG4gICAgICA8c3BhbiBrZXk9e29wdGlvbi5pZH0gc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYW5zd2VyXCJcbiAgICAgICAgICB2YWx1ZT17b3B0aW9uLmlkfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25PcHRpb25TdWJtaXR9PlxuICAgICAgICAgIHtvcHRpb24udmFsdWV9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gICAgY29uc3Qga2V5SGFuZGxlcnMgPSB0aGlzLnByb3BzLnF1ZXN0aW9uLm9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PlxuICAgICAgPEtleUhhbmRsZXIga2V5PXtpbmRleH0ga2V5RXZlbnROYW1lPXtLRVlQUkVTU30ga2V5VmFsdWU9eyhpbmRleCArIDEpLnRvU3RyaW5nKCl9IG9uS2V5SGFuZGxlPXt0aGlzLmhhbmRsZUtleVByZXNzfSAvPlxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtrZXlIYW5kbGVyc31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvblwiPnt0aGlzLnByb3BzLnF1ZXN0aW9uLnZhbHVlfTwvZGl2PlxuICAgICAgICB7b3B0aW9uc31cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9yb3V0ZXMvR2FtZS9jb21wb25lbnRzL1F1ZXN0aW9uLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEZPTlRfU0laRSA9IDYwO1xuY29uc3QgQ09MT1IgPSBcIiNGRjUzMERcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2Vjb25kc1JlbWFpbmluZzogcHJvcHMuc2Vjb25kc1JlbWFpbmluZyxcbiAgICAgIGZvbnRTaXplOiBGT05UX1NJWkUsXG4gICAgICBjb2xvcjogQ09MT1JcbiAgICB9XG4gICAgdGhpcy50aWNrID0gdGhpcy50aWNrLmJpbmQodGhpcyk7XG4gIH1cbiAgZ2V0Rm9udFNpemUoZm9udFNpemUsIHNlY29uZHNSZW1haW5pbmcpIHtcbiAgICByZXR1cm4gc2Vjb25kc1JlbWFpbmluZyA8IDcgPyBGT05UX1NJWkUgKiAxLjMgOiBGT05UX1NJWkU7XG4gIH1cbiAgZ2V0Q29sb3Ioc2Vjb25kc1JlbWFpbmluZykge1xuICAgIHJldHVybiBzZWNvbmRzUmVtYWluaW5nIDwgNyA/IFwicmVkXCIgOiBDT0xPUjtcbiAgfVxuICB0aWNrKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2Vjb25kc1JlbWFpbmluZzogdGhpcy5zdGF0ZS5zZWNvbmRzUmVtYWluaW5nIC0gMSxcbiAgICAgIGZvbnRTaXplOiB0aGlzLmdldEZvbnRTaXplKHRoaXMuc3RhdGUuZm9udFNpemUsIHRoaXMuc3RhdGUuc2Vjb25kc1JlbWFpbmluZyksXG4gICAgICBjb2xvcjogdGhpcy5nZXRDb2xvcih0aGlzLnN0YXRlLnNlY29uZHNSZW1haW5pbmcpXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zZWNvbmRzUmVtYWluaW5nIDw9IDApIHtcbiAgICAgIHRoaXMucHJvcHMudGltZU91dCgpO1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlY29uZHNSZW1haW5pbmc6IHRoaXMucHJvcHMuc2Vjb25kc1JlbWFpbmluZywgZm9udFNpemU6IEZPTlRfU0laRSwgY29sb3I6IENPTE9SIH0pO1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLnRpY2ssIDEwMDApO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG1pbnV0ZXMgPSAoXCIwXCIgKyBwYXJzZUludCh0aGlzLnN0YXRlLnNlY29uZHNSZW1haW5pbmcgLyA2MCwgMTApKS5zbGljZSgtMik7XG4gICAgY29uc3Qgc2Vjb25kcyA9IChcIjBcIiArIHBhcnNlSW50KHRoaXMuc3RhdGUuc2Vjb25kc1JlbWFpbmluZyAlIDYwLCAxMCkpLnNsaWNlKC0yKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWdpdGFsXCIgc3R5bGU9e3sgZm9udFNpemU6IHRoaXMuc3RhdGUuZm9udFNpemUsIGNvbG9yOiB0aGlzLnN0YXRlLmNvbG9yLCBoZWlnaHQ6IDEwMCB9fT5cbiAgICAgICAgPHNwYW4+e21pbnV0ZXN9OntzZWNvbmRzfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0FwcC9yb3V0ZXMvR2FtZS9jb21wb25lbnRzL1RpbWVyLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDYXQgZnJvbSAnLi4vYXNzZXRzL2NhdC5wbmcnO1xuaW1wb3J0IFRvbWJzdG9uZSBmcm9tICcuLi9hc3NldHMvdG9tYnN0b25lLnBuZyc7XG5cbmNvbnN0IFFVRVNUSU9OX0NPVU5UID0gMTA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlYWRlcmJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5wbGF5ZXJzKSB7XG4gICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnBsYXllcnMubGVuZ3RoID09IDApIHtcbiAgICAgIHJldHVybiAobnVsbCk7XG4gICAgfVxuXG4gICAgY29uc3QgbGlzdE9mUGxheWVycyA9IHRoaXMucHJvcHMucGxheWVycy5tYXAoeCA9PiAoXG4gICAgICA8ZGl2IGtleT17eC5kYXRlQ3JlYXRlZH0gY2xhc3NOYW1lPVwibGVhZGVyYm9hcmQtcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVhZGVyYm9hcmQtaW1hZ2VcIj5cbiAgICAgICAgICA8aW1nIGFsdD1cInJlc3VsdFwiIHNyYz17eC5yZXN1bHQgPyBDYXQgOiBUb21ic3RvbmV9IGhlaWdodD1cIjI0XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVhZGVyYm9hcmQtbmFtZVwiPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IHRoaXMucHJvcHMubmFtZSA9PT0geC5uYW1lID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiIH19Pnt4Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPiAoe3guc3VjY2Vzc2Z1bGx5QW5zd2VyZWR9L3tRVUVTVElPTl9DT1VOVH0pPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PikpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxOCwgbWFyZ2luQm90dG9tOiA3IH19PkhvdyBkaWQgb3RoZXIgcGxheWVycyBkbz88L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWFkZXJib2FyZFwiPlxuICAgICAgICAgIHtsaXN0T2ZQbGF5ZXJzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL3JvdXRlcy9MZWFkZXJib2FyZC9jb21wb25lbnRzL0xlYWRlcmJvYXJkLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBnZXRMZWFkZXJib2FyZCB9IGZyb20gJy4vbW9kdWxlJztcbmltcG9ydCBMZWFkZXJib2FyZCBmcm9tICcuL2NvbXBvbmVudHMvTGVhZGVyYm9hcmQnXG5cbmNsYXNzIENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHsgdGhpcy5wcm9wcy5nZXRMZWFkZXJib2FyZCgpOyB9XG4gIHJlbmRlcigpIHsgcmV0dXJuIDxMZWFkZXJib2FyZCB7Li4udGhpcy5wcm9wc30gLz4gfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBsZWFkZXJib2FyZDogeyBwbGF5ZXJzIH0gfSwgeyBuYW1lIH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwbGF5ZXJzLFxuICAgIG5hbWVcbiAgfVxufVxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBnZXRMZWFkZXJib2FyZFxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDb250YWluZXIpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQXBwL3JvdXRlcy9MZWFkZXJib2FyZC9jb250YWluZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FZQUFBQnplbnIwQUFBTEpFbEVRVlI0MnFWWEIzU1VWUmIrcHY1VE1qUEpUQnJEaEZSS1NDTWhnVFJUeUtKSVVaS3o0aDVrWFVTS0t3THVvUnhFZEZtT2lob0VCTVVTV0ZoY0Z4YVJJaHRwb2FrQmhCQ1NRQ1JWVWpCa011bHQrc3plOXpOQjlPRFdsN3d6N2IxM3YzZnY5OTE3ZndIdURsSCtpb1U3aEVMQmJEZm96NFhDaGhianZQZi9kcVFiLy84UXZMYnNtZWt5cWVRanVOM0RJS0F2Qk1McTVXOS9GRU8vMmVramhIOTY0WGNML0hYZUg0Nk1pSURMNVVKN2V3ZU1KaFA2QjgzUHZMSjE5eDVhNC9vZmpZdmVXajUvdjV6ajhzSkNncUgxOVljMllEaStPWGNLTGExdGExL2R0bnNEQXlCNzQ4VjVwMGRGaEtYbVByVVlnK1lCR0ZzYlVWMTZFUTBOamVnYkhEeTRldFBPV2JUTytkOVkvczNVYkZYQzJJZ3FYNTFXSHhZV2pyRFlDZkJSYUNBU0MzSHl5S2VvcXF1cldyM3B6d2tNZ0hmK2l2a3RxWms1Y2oybmdrQWloa1p2Z0ZPaFFPV0ZrMmhvYkVKcm02bkI2WEQrUXl3V3BRa0ZnbmkzbTRYSnhZSkZIcVUvSVR1R1RUUzdYTzZMRnB2OWE0Vk1zaTA4TkJ5RzRHQkVwMDFHYjEwTnpQMTk1SFFIdXNUQW1TK1BZTVhHQWkzYjVadS9Zb0hwVjVPbndNdEJoNG5GRUVtbGtDdlY0SWJyMFh6ekttcHJhK0J5T0tGU3E2SDEwWkpCUUtIeVJ1allHRFRjdkFITFFEOExMRG83T21BMm05RkJyMEZCQmdUcWd4QThaaHg2Nm10aHQ5dmdzTm5nSmdDOXNPRE0yVE5ZdWJIQW53SHdmM3ZGZkdOT1JqYmtUaEVabDBBa2tVTENjUkRMNVBpaHZZV1E5MEFxNWNoOVlnaVpkWUViU2g4L2VHbTg0WEE2MGRYU1RLRG9lL0tJaXo2N2FkcXNWdWlDUXFHR0JMYkJmdGpKdU5OdWg1TmU3VEloVHB3K2hWVWJDd0o0QUp0WC85NDRiVVl1TExmdkVBQ09qRXVKUG1JMG01cDRvMUpPRHJGRWNnK0FkbmdJVkw2QmFLNnBnSDlRT1ByYjc4QkNJTWsra2RnTnA1TU1PZXl3MmF3UXVBVHdVL29RS0JkNXdRcW54UUx2VVNPeDc5TmRXUFhPanJzQXRyNnkxRGd6OTBsMFZGWkN4TWtna2NyUWJ1a2gxcm5BeVdSa1hPb0JJS0ZJdTZFZkV3K2x0dzdGeHo1SHpNUXN1S3dENkNiaU1oNHdEempaZERqZ3NETVFGZ2djYm5pTDViQ1RWNXdFU2hzNUduL2Z1K2RIQUNRVjQ4d1pNOUZYMzBodTUrQWtwdmE2YmVEbzVoS3A5QjRBTVFOQU93d3h5WkFwbFBpc1lEUHk1aTJCdWJjYjdiZXFlQjR5R1RQanpBTU9ObTEyV08wV3lHMzBzOVhPQS9BZUZZNkRodzlRQ0R3QWlJVEdtZE56MFZGVkF6R0ZvRThPL2xWRzN1Q1lSd2dVTXc0V1oxSkE2UGdzUGh5NzNsbUhaNWF2NHduV1VubUp3SW5BSzhUakJUdmRubkZoYUhMZEF6d1JmU0xINEl1akJ4a0plUUIrcnkyZCsvVWowNmFQdGxmWHc2NVd3aTJYUWtZRVZKQVVGVjVlcUxuVkJLMVdpeEdrQ2hHbmdHOUVESEZCZ0dQN2QrUFJXWE41bzIzMUZjUndHd0VWbzZucE5qcTZ1aEFaRVlvQmtwNTUwTXp6d2RYWkRjR0FCZUtSb1RoKzlJdmF0VnQzcHpFQTJsZWZuN012TlMxdHN0WXRSTC9RQlFtNVhFYkdOUm8xcHM1WmpJVFlhSlJkL3c2TDU4L0JjMHVXUWFyUzhzbW0vTko1eENWbjh1OHQvZDB3dHpYaGc1MmZZTSsrUTRpUGpVSkoyUTBjM0xXRlJPT0d4V0tHZFhBUU1yTWRyVTRyaW9zdkhOaFFzRzhSQTZCKzhlbTh0Y25qNDFjR0JRMG5vdGg0Q1Nvb3hoVlY5VGg3c1FRYjE3OEVLWUV5UktXZ2h5VEYyTTdpWFhiaEhNYWxadDNMZm1aVEkvVGhzV2l0TFlHRHpsbjYwbXRJakl0RWRzcDRESkJ4TzRIZ0pCeHVWRlhpVWtuWm11MTdqNzdIQU1nemsySW5QakVsNjJ4Y2REU2NoSmFUa2V1VlNoQjVJU2NnUGpvZlNNaTFwajRieHNSUEpKZTdXRUhCdGVLemlFL0w1ak1pK3hlUS9MNjdXb3hnZzRIaWIwWDlyVVp3WWdHSTA3Q3dNSkFFbVJUTHlzdnhWc0hlMk9aV1V3MERJSjZSblRJaEl6R21PRGtwQ1M0Q29KQXIwZDNiaTBxU3BkMXVwdW5pQVQzOCtKT0luSkJPSkhNUUlVVzQwM1FMK3VDd2U0RHFLc3RRK09rT1dDMUVOdEsvbDBxRnhLUmsrUHJwTUVqWjBrWlprcW1qK01JRlJrQUQyYjdEQUlnZW41U2FOQ1V6K1dKMFpDU2YzZnRvOFkyS2Nrd2NyWUtZTnNnb0YwalZLbnhaM0lEY2VVc3hNanFPVHpoTWs1UVVDWXNJTlRldTRiTVA4NUVhcFlQVTVZUk1MZ2ZucmNHSlM3Y3hmbUlLdE40K3NESUFSTlJ2UzY3Z3hRM2JBOG0ya1FldzRJbXAwNUppeHg2SllnRG80TXVscFJnZklrSEdvaTEzQzdxQXc2eU1XS3g5WVNwT2wzVmp5ZnBOSkNjcm4zcFpacFNRWkxlc1hZWnhCaGV5bm4vL0ozdGVYVFlEUlZmYk1XbFNEcW1objd4anh1VXJWN0FpLytNQVd0YkdBNkE1TEgvbHd1YUgwdE9KaEhaYThDM0cram93WmRWTy9qQ05sd1l1b1FURjd6MkxNOWZic0hqOWRsaXRGckRPUlVDaDRPUXlVRVhGT0wwRWo2N2U5ZE05NzgvSFY5VTl5TXgraEFmQUNsWnBXWG5OeSsvdVNxZGxwcUU2R3JoeDVjS1d6S3dzcW13RHFLZ29oVjV1eFlMTng4aHQvWkRMRlREYm5QaG0yendjSzIwbDkzMEFNU2xGSkJUeHhwaGJ0NjFaaEJBTnNPRGRFei9adzBDZnV0R0Y3SnpKdkF3YmJuMVA2cXI1Yk1QSGU1K2pyWjBDajRMOENZQXhPU1dWaWdlRjRHb0pNcUo5a1AvUmNSU1czU0ozQ2pBdFBneHJYbmlVUXRDRjU5YThBUkVWS3diQVJTUmdQSGh2L1Vxa2psSmdZOEVwZk1udkVXSmFRaGdmdHBNbDdYZ29QWlZYUVcxOUhXN1cxdTk0czJEZmNyTGJPd1RBNy9XbGM0dFQwdEpHNm53RDBGaGZnenFhbVhIK01QZFEzTXcyYVB5OWNmWmFLeDdLbVE3RDhCRzQ4bDAxVlVrcHp4bVdpb1A4dFRoYmVBRFpDWUd3OUE1UWlPendEdERpM0RValltTEhVU2JWMFJtQitLcm9PRTZjdnpoci8vSHpoV1IzY0FpQTl1VkZzd3RpbzhmbVJZMUxJRmVaMGZwREUycHE2cW02V1hnakVya1hKdWM5aWI3cmxhUUtEdjRoSVZBUXk5M0UrRjVqR3dhdERyaElia1VIOTVMbSs2aHNDS20weXhBZEhRc2RwWEdkSVpRdlVnZjJGR0RWcHAyaFpQT0hvYWFVRGErTXhOZzBTa2JITTNKeW9OVDR3dHpYQXdmcG1WVkNqVjhBMVA1NmlDay9HSnVha2I5dUhaNmVQaFYrd3dMUjA5T0xReWRPWWNHUzV4RVFNWnBQU0lPOW5laHNvcnBDUkpVU0daVmFQMTQxRGRXVk9IM2kyTlYxMi84NmpTbUF5V2dJQUpVNjZOLzh3N01sQ1ltSnZvYXdrVkJvdEZDcWZQaHkzSDduZXdLbEk3WXJLVTNMME5uWmdUMzVtNUVTSElTaW1scmtQVHNYWThaRzhVMkh5OFc2SVROVVB2Njg1eGdoV2N0bU5mZmg5TkZEdUh5dDRvOGY3eS9jU3ZiNGxuOElBTitjVG9nZGt6RjdhdmJocE5SMEJBU0ZVRUZTMDRXYzZHNXJwZ1A5K0RCSVdFOGdGbEdiUmQxemJSWFVnUUhVbnVtSWxCeFBWbGFHYldSVVFsV1RVMnI0OXc3TElDcExMNlAwOHFYT2w3YnNTaUZiVGF4KzNRK0FEU25MQjNOekgxa1lOeXBrVFhyMncvQXpCRU5JTmVCMjlSV29kWUdRS2xSOFNIanB1UnhvSTdXb3FMVEtsTjVVaG1XVUVZVjhSMlFsRHFpMEFlQm9QUXRERGNuNjh0Zm5zR25Qb1VtdDdaM1htZnlHbmpYdUI4RGVLMmdPejV1Y25wc2NNL3JObVBGSmlFbE1RWCtQQ1IwdDlYekdFMG80dml2cXE2eER5OUVpcUNkRXd6YzlpUlNoSU9LSitINVFUcDRMQ0kzaU82WHp4NzVBNC9kMTdacy9PVHpiMU5WejB4TjcyLzFHN3grc3RWWFNEUEQxMFlRdmZlcXhENEtDUm9UR1RVekRNQXBKWDFjcjJnbUkzTXViakpCN1RSMVFCWS9BUUY4bkJubzZvTllPSTk1bytkdmZ2UFl0THAwcndtMmpxWERUWHc2K3pwNFpXT2FqYWNYUGJ2M3p3VDh0MGRReFlzNlprZlByNklqZ1pZRjZnelFpS2dhR2tBZ3FOTlEzc29yb2RySU9qY3EzRWxMaWg2bmxOcW9xcmxKaEtrZi93RURENTBVWFhpNnZxcjlCNTdUUzdHS3llNUN4WHhwTUdXcVdwTmo4N1dNNWo0WG9BeDVXeW1XamFSTTN0SWlqbE16WGhidEgyZHE2ZW90Mkh6NjV2YU83dDgxejR3NldjUEFMajNiL0NzQlFTSmd4RlZNSnF6RWVub2dlc05mdHVXR1A1N1o5SHNOMnoyOFBIUDhPd1AxQXBCNHdFcy9uQnczR2JJdG5PdjZUZy84SkN0WG1PYWRDMmFVQUFBQUFTVVZPUks1Q1lJST1cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQXBwL3JvdXRlcy9MZWFkZXJib2FyZC9hc3NldHMvY2F0LnBuZ1xuLy8gbW9kdWxlIGlkID0gMzAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQU1BQUFCRXBJckdBQUFEQUZCTVZFVUJBQUQvLzh6Ly81bi8vMmIvL3pQLy93RC96UC8vek16L3pKbi96R2IvekRQL3pBRC9tZi8vbWN6L21abi9tV2IvbVRQL21RRC9adi8vWnN6L1pwbi9abWIvWmpQL1pnRC9NLy8vTTh6L001bi9NMmIvTXpQL013RC9BUC8vQU16L0FKbi9BR2IvQURQL0FBRE0vLy9NLzh6TS81bk0vMmJNL3pQTS93RE16UC9Nek16TXpKbk16R2JNekRQTXpBRE1tZi9NbWN6TW1abk1tV2JNbVRQTW1RRE1adi9NWnN6TVpwbk1abWJNWmpQTVpnRE1NLy9NTTh6TU01bk1NMmJNTXpQTU13RE1BUC9NQU16TUFKbk1BR2JNQURQTUFBQ1ovLytaLzh5Wi81bVovMmFaL3pPWi93Q1p6UCtaek15WnpKbVp6R2FaekRPWnpBQ1ptZitabWN5Wm1abVptV2FabVRPWm1RQ1paditaWnN5WlpwbVpabWFaWmpPWlpnQ1pNLytaTTh5Wk01bVpNMmFaTXpPWk13Q1pBUCtaQU15WkFKbVpBR2FaQURPWkFBQm0vLzltLzh4bS81bG0vMlptL3pObS93Qm16UDltek14bXpKbG16R1ptekRObXpBQm1tZjltbWN4bW1abG1tV1ptbVRObW1RQm1adjltWnN4bVpwbG1abVptWmpObVpnQm1NLzltTTh4bU01bG1NMlptTXpObU13Qm1BUDltQU14bUFKbG1BR1ptQURObUFBQXovLzh6Lzh3ei81a3ovMll6L3pNei93QXp6UDh6ek13enpKa3p6R1l6ekRNenpBQXptZjh6bWN3em1aa3ptV1l6bVRNem1RQXpadjh6WnN3elpwa3pabVl6WmpNelpnQXpNLzh6TTh3ek01a3pNMll6TXpNek13QXpBUDh6QU13ekFKa3pBR1l6QURNekFBQUEvLzhBLzh3QS81a0EvMllBL3pNQS93QUF6UDhBek13QXpKa0F6R1lBekRNQXpBQUFtZjhBbWN3QW1aa0FtV1lBbVRNQW1RQUFadjhBWnN3QVpwa0FabVlBWmpNQVpnQUFNLzhBTTh3QU01a0FNMllBTXpNQU13QUFBUDhBQU13QUFKa0FBR1lBQURQdUFBRGRBQUM3QUFDcUFBQ0lBQUIzQUFCVkFBQkVBQUFpQUFBUkFBQUE3Z0FBM1FBQXV3QUFxZ0FBaUFBQWR3QUFWUUFBUkFBQUlnQUFFUUFBQU80QUFOMEFBTHNBQUtvQUFJZ0FBSGNBQUZVQUFFUUFBQ0lBQUJIdTd1N2QzZDI3dTd1cXFxcUlpSWgzZDNkVlZWVkVSRVFpSWlJUkVSRUFBQUJYT0FUS0FBQUFBWFJTVGxNQVFPYllaZ0FBQWdsSlJFRlVlTnBWazE5dUV6RVF4bWZHMjlLN1JHb0V5UzNndVJKU0ViY2dYaGFlMm1RM3ZRVUVWSWszeERGSXBLalMzZ1ZsYlEvZk9QK2N5SW1kM1orL21mazhaaW8ra1pVd1hQbU16OHVrdXltbXplU2xSRTVBcEIxUFJ0OTErcGVuNitzemNnUWlkcThoTU9veFlmSGlMb0Y0dTU1dTFDbDFOYWtxNEd0WEF0SGtmeWFtMW5mMmY2WThPV2djZ1krcnptT3RSRjAvcWx2L1puTlZBR2szdWZNUUo0VUdVZDNXeXE4UFFUSVFCN2NnOG13dld1T0kyNTZlVDBDOHZldFhYVzBaSW9kYUVReGYwaHdrQXp2SkcrOS9rRnFPdmtPcXZ1dWZUOEQ3RldJMyt2dmQwbmVmQkkvREVwbVFPd0VSbVZFVDlHcHdNdDd5ZUYwRmUxY0FWbjhUbGswUWp2em5yZU1nSkl1dmNnRFNJS29zeXVPdHl2RFVLSVVucS9XczhFajEvYWdaNk1wRU1OUlp3dTJYSTVBQ2Z0cG1FSmRIOTJ1NzhPYnJXU0dnNm02bUxySkVrZy9mSEJ5RldRVmdGbG45aUl6eXJLMWdWWkZEaE1NdzJwTTVtSStEUGkvcWN3N3hFZmJXOWg1K3R1VHRLU2ErOEtFV1NzelJVUkthTjBSekwxcmt3SlNxSUttYXp3Z21SblBzMHNuV0MySmF4NWgwV3M2V2R2WmxGYkRZeldkVmtsRFpVVFUwdjNCeUg0SWdqMEFTTUpPZ084b3FySmZNemx3c21XK2VXUW9uYzUzV0s3QU1wdGlDdFFxdkRtZnhzRmZBZm5RMU5tZGVxVXBKYnc1VldFKzIvUWgxWkpNeGdGY0o5elVEcDN1b1djSVcrK3VjS0FQL3lqdCsrZEdiLzl3eEtpRFBwV1o3QUFBQUFFbEZUa1N1UW1DQ1wiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9BcHAvcm91dGVzL0xlYWRlcmJvYXJkL2Fzc2V0cy90b21ic3RvbmUucG5nXG4vLyBtb2R1bGUgaWQgPSAzMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==