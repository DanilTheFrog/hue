/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/binder.js":
/*!***********************!*\
  !*** ./src/binder.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Binder": () => (/* binding */ Binder)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Binder = /*#__PURE__*/function () {
  function Binder(controlState, elements) {
    _classCallCheck(this, Binder);

    console.log(controlState);
    this.eventPool = controlState.eventPool;
    this.elements = elements;
    this.clicked = false;
    this.coords;
    this.target;
    this.pressed = false;
  }

  _createClass(Binder, [{
    key: "findElement",
    value: function findElement(coord) {
      for (var i = 0; i < this.elements.length; i++) {
        if (this.elements[i].position.x1 < this.coords.x && this.elements[i].position.x2 > this.coords.x && this.elements[i].position.y1 < this.coords.y && this.elements[i].position.y2 > this.coords.y) {
          return this.elements[i];
        }
      }

      return "nothing";
    }
  }, {
    key: "checkMatch",
    value: function checkMatch(e1, e2) {
      if (e1 === e2) {
        return true;
      }

      return false;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.eventPool[0] != undefined) {
        var e = this.eventPool[0];

        if (e[0] === "down" && !this.clicked) {
          this.coords = e[1];
          this.target = this.findElement(e[1]);
          this.clicked = true;
          this.pressed = true;
        }

        if (this.target && this.target.controlType === "hold") {
          this.target.action();
        }

        if (this.clicked && e[0] === "up") {
          this.coords = e[1];
          var condition = this.checkMatch(this.target, this.findElement(e[1]));

          if (condition && this.target !== "nothing" && this.target.controlType === "click") {
            this.target.action();
            this.pressed = true;
          }

          this.pressed = false;
          this.clicked = false;
        }
      }
    }
  }]);

  return Binder;
}();

/***/ }),

/***/ "./src/button.js":
/*!***********************!*\
  !*** ./src/button.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/element.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Button = /*#__PURE__*/function (_Element) {
  _inherits(Button, _Element);

  var _super = _createSuper(Button);

  function Button(game, _ref) {
    var _this;

    var x = _ref.x,
        y = _ref.y,
        w = _ref.w,
        h = _ref.h,
        text = _ref.text,
        color = _ref.color,
        fontColor = _ref.fontColor;

    _classCallCheck(this, Button);

    _this = _super.call(this, game);
    _this.text = text;
    _this.controlType = "click";
    _this.color = color;

    _this.setPosition({
      x1: x,
      y1: y,
      w: w,
      h: h,
      x2: x + w,
      y2: y + h
    });

    _this.animation = {
      t: 200,
      currentTime: 0,
      running: false
    };
    return _this;
  }

  _createClass(Button, [{
    key: "action",
    value: function action() {
      this.animation.running = true;
    }
  }, {
    key: "getDisplayData",
    value: function getDisplayData() {
      var data = {
        x: this.position.x1,
        y: this.position.y1,
        w: this.position.w,
        h: this.position.h,
        color: this.color,
        text: this.text
      };
      return data;
    }
  }, {
    key: "render",
    value: function render(time) {
      var displayData = this.getDisplayData();

      if (!this.animation.running) {
        this.game.screen.drawButton(displayData);
      } else {
        if (this.animation.t > this.animation.currentTime) {
          displayData.color = "rgb(0,".concat(20 + this.animation.currentTime * 2, ",0)");
          this.animation.currentTime++;
          this.game.screen.drawButton(displayData);
        } else {
          this.animation.running = false;
          this.animation.currentTime = 0;
        }
      }
    }
  }]);

  return Button;
}(_element__WEBPACK_IMPORTED_MODULE_0__.Element);

/***/ }),

/***/ "./src/control-state.js":
/*!******************************!*\
  !*** ./src/control-state.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlState": () => (/* binding */ ControlState)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ControlState = /*#__PURE__*/function () {
  function ControlState() {
    var _this = this;

    _classCallCheck(this, ControlState);

    this.status = "up";
    this.eventPool = [];
    this.coords = {
      move: {
        x: null,
        y: null
      },
      click: {
        x: null,
        y: null
      }
    };
    document.addEventListener('mousedown', function (event) {
      return _this.updateState(event, "down");
    });
    document.addEventListener('mouseup', function (event) {
      return _this.updateState(event, "up");
    });
    document.addEventListener("mousemove", function (event) {
      return _this.coordsUpdate(event);
    });
  }

  _createClass(ControlState, [{
    key: "coordsUpdate",
    value: function coordsUpdate(event) {
      event.preventDefault();
      event.stopPropagation();
      var target = event.target.getBoundingClientRect();
      this.coords.move = {
        x: Math.round(event.clientX - target.left),
        y: Math.round(event.clientY - target.top)
      };
    }
  }, {
    key: "updateState",
    value: function updateState(event, status) {
      event.preventDefault();
      event.stopPropagation();
      var target = event.target.getBoundingClientRect();
      this.coords.click = {
        x: Math.round(event.clientX - target.left),
        y: Math.round(event.clientY - target.top)
      };
      this.status = status;
      this.eventPool.unshift([status, this.coords.click]);

      if (this.eventPool.length >= 5) {
        this.eventPool.pop();
      }
    }
  }]);

  return ControlState;
}();

/***/ }),

/***/ "./src/element.js":
/*!************************!*\
  !*** ./src/element.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Element": () => (/* binding */ Element)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Element = /*#__PURE__*/function () {
  function Element(game) {
    _classCallCheck(this, Element);

    this.game = game;
    this.name;
    this.position = {
      x1: undefined,
      x2: undefined,
      y1: undefined,
      y2: undefined
    };
  } // actions(type, data) {
  //     setPosition = ()this.setPosition;
  //     function moveTo(data) {
  //         setPosition(data);
  //     }
  //     const actions = {
  //         moveTo: moveTo
  //     }
  //     if (type && data) {
  //         actions[type](data);
  //     }
  // }


  _createClass(Element, [{
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: "setPosition",
    value: function setPosition() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        x1: x1,
        y1: y1,
        x2: x2,
        y2: y2
      };

      if (typeof data.x1 !== 'number' || typeof data.y1 !== 'number') {
        throw new Error("Начальные координаты были заданы не верно. Элемент: " + this.name);
      } else {
        this.position = data;
      }
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: "render",
    value: function render(time) {}
  }]);

  return Element;
}();

/***/ }),

/***/ "./src/elements-manager.js":
/*!*********************************!*\
  !*** ./src/elements-manager.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ElementsManager": () => (/* binding */ ElementsManager)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ElementsManager = /*#__PURE__*/function () {
  function ElementsManager(elements) {
    _classCallCheck(this, ElementsManager);

    this.elements = [];

    if (elements) {
      this.addElements(elements);
    }
  }

  _createClass(ElementsManager, [{
    key: "addElements",
    value: function addElements(elements) {
      for (var i = 0; i < elements.length; i++) {
        this.elements.push(elements[i]);
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      if (this.elements.length > 0) {
        for (var i = 0; i < this.elements.length; i++) {
          this.elements[i].render(time);
        }
      }
    }
  }]);

  return ElementsManager;
}();

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screen */ "./src/screen.js");
/* harmony import */ var _control_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./control-state */ "./src/control-state.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene */ "./src/scene.js");
/* harmony import */ var _scene_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scene-manager */ "./src/scene-manager.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





var Game = /*#__PURE__*/function () {
  function Game() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 1000 : _ref$width,
        _ref$height = _ref.height,
        height = _ref$height === void 0 ? 600 : _ref$height;

    _classCallCheck(this, Game);

    this.control = new _control_state__WEBPACK_IMPORTED_MODULE_1__.ControlState();
    this.screen = new _screen__WEBPACK_IMPORTED_MODULE_0__.Screen(width, height);
    this.sceneManager = new _scene_manager__WEBPACK_IMPORTED_MODULE_3__.SceneManager({
      game: this
    });
    this.scenes = this.sceneManager.scenes;
    this.currentScene = this.scenes.loading;
    this.currentScene.init();
  }

  _createClass(Game, [{
    key: "changeScene",
    value: function changeScene(status) {
      switch (status) {
        case _scene__WEBPACK_IMPORTED_MODULE_2__.Scene.LOADED:
          return this.scenes.menu;
          break;

        case _scene__WEBPACK_IMPORTED_MODULE_2__.Scene.START_GAME:
          return this.scenes.gameLevel;
          break;

        default:
          return this.scenes.menu;
          break;
      }
    }
  }, {
    key: "frame",
    value: function frame(time) {
      var _this = this;

      if (this.currentScene.status != _scene__WEBPACK_IMPORTED_MODULE_2__.Scene.WORKING) {
        this.currentScene = this.changeScene(this.currentScene.status);
        this.currentScene.init();
      }

      this.currentScene.render(time);
      requestAnimationFrame(function (time) {
        return _this.frame(time);
      });
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      requestAnimationFrame(function (time) {
        return _this2.frame(time);
      });
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./src/scene-manager.js":
/*!******************************!*\
  !*** ./src/scene-manager.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SceneManager": () => (/* binding */ SceneManager)
/* harmony export */ });
/* harmony import */ var _scenes_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenes/loading */ "./src/scenes/loading.js");
/* harmony import */ var _scenes_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/menu */ "./src/scenes/menu.js");
/* harmony import */ var _scenes_game_level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/game-level */ "./src/scenes/game-level.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var SceneManager = /*#__PURE__*/_createClass(function SceneManager(_ref) {
  var game = _ref.game,
      Scene = _ref.Scene;

  _classCallCheck(this, SceneManager);

  this.scenes = {
    loading: new _scenes_loading__WEBPACK_IMPORTED_MODULE_0__.Loading(game),
    menu: new _scenes_menu__WEBPACK_IMPORTED_MODULE_1__.Menu(game),
    gameLevel: new _scenes_game_level__WEBPACK_IMPORTED_MODULE_2__.GameLevel(game)
  };
  this.session = {
    currentLevel: 0,
    levelsData: []
  };
  this.scene = Scene;
});

/***/ }),

/***/ "./src/scene.js":
/*!**********************!*\
  !*** ./src/scene.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scene": () => (/* binding */ Scene)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Scene = /*#__PURE__*/function () {
  function Scene(game) {
    _classCallCheck(this, Scene);

    this.game = game;
    this.status = this.constructor.WORKING;
  }

  _createClass(Scene, [{
    key: "init",
    value: function init() {
      this.status = this.constructor.WORKING;
    }
  }, {
    key: "finish",
    value: function finish(status) {
      this.status = status;
    }
  }, {
    key: "awake",
    value: function awake() {}
  }, {
    key: "render",
    value: function render(time) {}
  }], [{
    key: "WORKING",
    get: function get() {
      return 'WORKING';
    }
  }, {
    key: "LOADED",
    get: function get() {
      return 'LOADED';
    }
  }, {
    key: "START_GAME",
    get: function get() {
      return 'START_GAME';
    }
  }, {
    key: "GAME_OVER",
    get: function get() {
      return 'GAME_OVER';
    }
  }, {
    key: "GAME_WIN",
    get: function get() {
      return 'GAME_WIN';
    }
  }, {
    key: "FINISHED",
    get: function get() {
      return 'FINISHED';
    }
  }]);

  return Scene;
}();

/***/ }),

/***/ "./src/scenes/game-level.js":
/*!**********************************!*\
  !*** ./src/scenes/game-level.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameLevel": () => (/* binding */ GameLevel)
/* harmony export */ });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button */ "./src/button.js");
/* harmony import */ var _elements_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements-manager */ "./src/elements-manager.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../binder */ "./src/binder.js");
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tile */ "./src/tile.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var GameLevel = /*#__PURE__*/function (_Scene) {
  _inherits(GameLevel, _Scene);

  var _super = _createSuper(GameLevel);

  function GameLevel(game) {
    var _this;

    _classCallCheck(this, GameLevel);

    _this = _super.call(this, game);
    _this.game = game;
    var elements = [new _tile__WEBPACK_IMPORTED_MODULE_4__.Tile(game, {
      x: 100,
      y: 100,
      h: 200,
      w: 100,
      color: "#880000"
    }), new _tile__WEBPACK_IMPORTED_MODULE_4__.Tile(game, {
      x: 300,
      y: 100,
      h: 200,
      w: 100,
      color: "#000066"
    })];
    _this.elementsManager = new _elements_manager__WEBPACK_IMPORTED_MODULE_2__.ElementsManager(elements);
    _this.binder = new _binder__WEBPACK_IMPORTED_MODULE_3__.Binder(_this.game.control, _this.elementsManager.elements);
    return _this;
  }

  _createClass(GameLevel, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(GameLevel.prototype), "init", this).call(this);
    }
  }, {
    key: "render",
    value: function render(time) {
      this.binder.update();
      this.game.screen.fill("#222");
      this.game.screen.print({
        text: "This is Game Level!",
        x: 500,
        y: 300,
        size: 36
      });
      this.elementsManager.render(time);

      _get(_getPrototypeOf(GameLevel.prototype), "render", this).call(this, time);
    }
  }]);

  return GameLevel;
}(_scene__WEBPACK_IMPORTED_MODULE_0__.Scene);

/***/ }),

/***/ "./src/scenes/loading.js":
/*!*******************************!*\
  !*** ./src/scenes/loading.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loading": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var _scene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene.js */ "./src/scene.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Loading = /*#__PURE__*/function (_Scene) {
  _inherits(Loading, _Scene);

  var _super = _createSuper(Loading);

  function Loading(game) {
    var _this;

    _classCallCheck(this, Loading);

    _this = _super.call(this, game);
    _this.game = game;
    _this.loadedAt = 0;
    return _this;
  }

  _createClass(Loading, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(Loading.prototype), "init", this).call(this);

      this.loadedAt = 0;
    }
  }, {
    key: "update",
    value: function update(time) {
      if (this.loadedAt == 0) {
        this.loadedAt = time;
      }

      if (this.loadedAt != 0 && time - this.loadedAt > 500) {
        console.log("loaded");
        this.finish(_scene_js__WEBPACK_IMPORTED_MODULE_0__.Scene.LOADED);
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.update(time);
      this.game.screen.fill("#000");
      this.game.screen.print({
        text: "Загрузка",
        x: 500,
        y: 300,
        size: 36,
        color: "#fff"
      });

      _get(_getPrototypeOf(Loading.prototype), "render", this).call(this, time);
    }
  }]);

  return Loading;
}(_scene_js__WEBPACK_IMPORTED_MODULE_0__.Scene);

/***/ }),

/***/ "./src/scenes/menu.js":
/*!****************************!*\
  !*** ./src/scenes/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Menu": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene */ "./src/scene.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button */ "./src/button.js");
/* harmony import */ var _elements_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements-manager */ "./src/elements-manager.js");
/* harmony import */ var _binder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../binder */ "./src/binder.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Menu = /*#__PURE__*/function (_Scene) {
  _inherits(Menu, _Scene);

  var _super = _createSuper(Menu);

  function Menu(game) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _super.call(this, game);
    _this.game = game;
    _this.delay = 0;
    _this.elements = [new _button__WEBPACK_IMPORTED_MODULE_1__.Button(game, {
      text: "1 lvl",
      x: 200,
      y: 200,
      h: 50,
      w: 100,
      bgr: "#ff0000"
    }), new _button__WEBPACK_IMPORTED_MODULE_1__.Button(game, {
      text: "2 lvl",
      x: 200,
      y: 300,
      h: 50,
      w: 100
    }), new _button__WEBPACK_IMPORTED_MODULE_1__.Button(game, {
      text: "3 lvl",
      x: 200,
      y: 400,
      h: 50,
      w: 100
    }), new _button__WEBPACK_IMPORTED_MODULE_1__.Button(game, {
      text: "4 lvl",
      x: 200,
      y: 500,
      h: 50,
      w: 100
    }), new _button__WEBPACK_IMPORTED_MODULE_1__.Button(game, {
      text: "bruh",
      x: 400,
      y: 500,
      h: 50,
      w: 200
    }), new _button__WEBPACK_IMPORTED_MODULE_1__.Button(game, {
      text: "ура победа",
      x: 800,
      y: 300,
      h: 100,
      w: 40
    })];
    _this.elementsManager = new _elements_manager__WEBPACK_IMPORTED_MODULE_2__.ElementsManager(_this.elements);
    _this.binder = new _binder__WEBPACK_IMPORTED_MODULE_3__.Binder(_this.game.control.eventPool, _this.elementsManager.elements);
    _this.nextScene = "main";
    return _this;
  }

  _createClass(Menu, [{
    key: "update",
    value: function update(time) {
      if (this.binder.pressed && this.delay == 0) {
        this.delay = time;
      }

      if (this.delay != 0 && time - this.delay > 1000) {
        this.delay = 0;
        this.finish(_scene__WEBPACK_IMPORTED_MODULE_0__.Scene.START_GAME);
      }
    }
  }, {
    key: "render",
    value: function render(time) {
      this.binder.update();
      this.update(time);
      this.game.screen.fill("#222222");
      this.game.screen.print({
        text: "Нажми пробел",
        x: this.game.screen.width / 2,
        y: this.game.screen.height / 2
      });
      this.elementsManager.render(time);

      _get(_getPrototypeOf(Menu.prototype), "render", this).call(this, time);
    }
  }]);

  return Menu;
}(_scene__WEBPACK_IMPORTED_MODULE_0__.Scene);

/***/ }),

/***/ "./src/screen.js":
/*!***********************!*\
  !*** ./src/screen.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Screen": () => (/* binding */ Screen)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Screen = /*#__PURE__*/function () {
  function Screen(width, height) {
    _classCallCheck(this, Screen);

    this.width = width;
    this.height = height;
    this.canvas = this.createCanvas(width, height);
    this.context = this.canvas.getContext("2d");
  }

  _createClass(Screen, [{
    key: "createCanvas",
    value: function createCanvas(width, height) {
      var elements = document.getElementsByTagName("canvas");
      var canvas = elements[0] || document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      document.getElementById("game").appendChild(canvas);
      return canvas;
    }
  }, {
    key: "getCanvas",
    value: function getCanvas() {
      return this.canvas;
    }
  }, {
    key: "fill",
    value: function fill(color) {
      this.context.fillStyle = color;
      this.context.fillRect(0, 0, this.width, this.height);
    }
  }, {
    key: "fillRect",
    value: function fillRect(_ref) {
      var x = _ref.x,
          y = _ref.y,
          w = _ref.w,
          h = _ref.h,
          color = _ref.color;
      this.context.fillStyle = color || "#000";
      this.context.fillRect(x, y, w, h);
    }
  }, {
    key: "print",
    value: function print(_ref2) {
      var text = _ref2.text,
          x = _ref2.x,
          y = _ref2.y,
          size = _ref2.size,
          fontColor = _ref2.fontColor;
      this.context.font = "".concat(size || 24, "px Arial");
      this.context.fillStyle = fontColor || "#ffffff";
      this.context.textBaseline = "middle";
      this.context.textAlign = "center";
      this.context.fillText(text || "Текст не найден", x, y);
    }
  }, {
    key: "drawButton",
    value: function drawButton(_ref3) {
      var text = _ref3.text,
          x = _ref3.x,
          y = _ref3.y,
          w = _ref3.w,
          h = _ref3.h,
          size = _ref3.size,
          color = _ref3.color,
          fontColor = _ref3.fontColor;
      this.fillRect({
        x: x,
        y: y,
        w: w,
        h: h,
        color: color
      });
      this.print({
        text: text,
        x: x + w / 2,
        y: y + h / 2,
        size: size,
        fontColor: fontColor
      });
    }
  }]);

  return Screen;
}();

/***/ }),

/***/ "./src/tile.js":
/*!*********************!*\
  !*** ./src/tile.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tile": () => (/* binding */ Tile)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./src/element.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var Tile = /*#__PURE__*/function (_Element) {
  _inherits(Tile, _Element);

  var _super = _createSuper(Tile);

  function Tile(game) {
    var _this;

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        x = _ref.x,
        y = _ref.y,
        w = _ref.w,
        h = _ref.h,
        color = _ref.color;

    _classCallCheck(this, Tile);

    _this = _super.call(this, game);
    _this.controlType = "hold";
    _this.game = game;
    _this.color = color;

    _this.setPosition({
      x1: x,
      x2: x + w,
      y1: y,
      y2: y + h
    });

    return _this;
  }

  _createClass(Tile, [{
    key: "action",
    value: function action(data) {
      this.setPosition(data);
    }
  }, {
    key: "getDisplayData",
    value: function getDisplayData() {
      var pos = this.position;
      return {
        x: pos.x1,
        y: pos.y1,
        h: pos.y2 - pos.y1,
        w: pos.x2 - pos.x1,
        color: this.color
      };
    }
  }, {
    key: "render",
    value: function render(time) {
      this.game.screen.fillRect(this.getDisplayData());
    }
  }]);

  return Tile;
}(_element__WEBPACK_IMPORTED_MODULE_0__.Element);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");


window.onload = function () {
  var hue = new _game__WEBPACK_IMPORTED_MODULE_0__.Game();
  hue.run();
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQW9HLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQixZQUFNO0FBQ2xCLE1BQU1DLEdBQUcsR0FBRyxJQUFJdEQsdUNBQUosRUFBWjtBQUNBc0QsRUFBQUEsR0FBRyxDQUFDQyxHQUFKO0FBQ0gsQ0FIRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHVlLy4vc3JjL2JpbmRlci5qcyIsIndlYnBhY2s6Ly9odWUvLi9zcmMvYnV0dG9uLmpzIiwid2VicGFjazovL2h1ZS8uL3NyYy9jb250cm9sLXN0YXRlLmpzIiwid2VicGFjazovL2h1ZS8uL3NyYy9lbGVtZW50LmpzIiwid2VicGFjazovL2h1ZS8uL3NyYy9lbGVtZW50cy1tYW5hZ2VyLmpzIiwid2VicGFjazovL2h1ZS8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2h1ZS8uL3NyYy9zY2VuZS1tYW5hZ2VyLmpzIiwid2VicGFjazovL2h1ZS8uL3NyYy9zY2VuZS5qcyIsIndlYnBhY2s6Ly9odWUvLi9zcmMvc2NlbmVzL2dhbWUtbGV2ZWwuanMiLCJ3ZWJwYWNrOi8vaHVlLy4vc3JjL3NjZW5lcy9sb2FkaW5nLmpzIiwid2VicGFjazovL2h1ZS8uL3NyYy9zY2VuZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9odWUvLi9zcmMvc2NyZWVuLmpzIiwid2VicGFjazovL2h1ZS8uL3NyYy90aWxlLmpzIiwid2VicGFjazovL2h1ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9odWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2h1ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2h1ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2h1ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQmluZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xTdGF0ZSwgZWxlbWVudHMpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coY29udHJvbFN0YXRlKVxyXG4gICAgICAgIHRoaXMuZXZlbnRQb29sID0gY29udHJvbFN0YXRlLmV2ZW50UG9vbDtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XHJcbiAgICAgICAgdGhpcy5jbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb29yZHM7XHJcbiAgICAgICAgdGhpcy50YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5wcmVzc2VkID0gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZpbmRFbGVtZW50KGNvb3JkKSB7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5lbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZigodGhpcy5lbGVtZW50c1tpXS5wb3NpdGlvbi54MSA8IHRoaXMuY29vcmRzLngpICYmXHJcbiAgICAgICAgICAgICh0aGlzLmVsZW1lbnRzW2ldLnBvc2l0aW9uLngyID4gdGhpcy5jb29yZHMueCkgJiZcclxuICAgICAgICAgICAgKHRoaXMuZWxlbWVudHNbaV0ucG9zaXRpb24ueTEgPCB0aGlzLmNvb3Jkcy55KSAmJlxyXG4gICAgICAgICAgICAodGhpcy5lbGVtZW50c1tpXS5wb3NpdGlvbi55MiA+IHRoaXMuY29vcmRzLnkpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLmVsZW1lbnRzW2ldKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFwibm90aGluZ1wiO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrTWF0Y2goZTEsIGUyKSB7XHJcbiAgICAgICAgaWYgKGUxID09PSBlMikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5ldmVudFBvb2xbMF0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxldCBlID0gdGhpcy5ldmVudFBvb2xbMF1cclxuICAgICAgICAgICAgaWYgKGVbMF0gPT09IFwiZG93blwiICYmICF0aGlzLmNsaWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29vcmRzID0gZVsxXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5maW5kRWxlbWVudChlWzFdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aGlzLnRhcmdldCAmJiB0aGlzLnRhcmdldC5jb250cm9sVHlwZSA9PT0gXCJob2xkXCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuYWN0aW9uKClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2xpY2tlZCAmJiBlWzBdID09PSBcInVwXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29vcmRzID0gZVsxXTtcclxuICAgICAgICAgICAgICAgIGxldCBjb25kaXRpb24gPSB0aGlzLmNoZWNrTWF0Y2godGhpcy50YXJnZXQsIHRoaXMuZmluZEVsZW1lbnQoZVsxXSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb24gJiYgdGhpcy50YXJnZXQgIT09IFwibm90aGluZ1wiICYmIHRoaXMudGFyZ2V0LmNvbnRyb2xUeXBlID09PSBcImNsaWNrXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5hY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gIFxyXG59IiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBFbGVtZW50e1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSwge3gsIHksIHcsIGgsIHRleHQsIGNvbG9yLCBmb250Q29sb3J9KSB7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLmNvbnRyb2xUeXBlID0gXCJjbGlja1wiO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHt4MTogeCwgeTE6IHksIHc6IHcsIGg6IGgsIHgyOiB4K3csIHkyOiB5K2h9KTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbiA9IHtcclxuICAgICAgICAgICAgdDogMjAwLFxyXG4gICAgICAgICAgICBjdXJyZW50VGltZTogMCxcclxuICAgICAgICAgICAgcnVubmluZzogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgYWN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLnJ1bm5pbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERpc3BsYXlEYXRhKCkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHg6IHRoaXMucG9zaXRpb24ueDEsXHJcbiAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueTEsXHJcbiAgICAgICAgICAgIHc6IHRoaXMucG9zaXRpb24udyxcclxuICAgICAgICAgICAgaDogdGhpcy5wb3NpdGlvbi5oLFxyXG4gICAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcixcclxuICAgICAgICAgICAgdGV4dDogdGhpcy50ZXh0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0aW1lKSB7XHJcbiAgICAgICAgbGV0IGRpc3BsYXlEYXRhID0gdGhpcy5nZXREaXNwbGF5RGF0YSgpO1xyXG4gICAgICAgIGlmICghdGhpcy5hbmltYXRpb24ucnVubmluZykge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdCdXR0b24oZGlzcGxheURhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5hbmltYXRpb24udCA+IHRoaXMuYW5pbWF0aW9uLmN1cnJlbnRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5RGF0YS5jb2xvciA9IGByZ2IoMCwkezIwK3RoaXMuYW5pbWF0aW9uLmN1cnJlbnRUaW1lKjJ9LDApYDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLmN1cnJlbnRUaW1lKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmRyYXdCdXR0b24oZGlzcGxheURhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb24ucnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb24uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG59IiwiZXhwb3J0IGNsYXNzIENvbnRyb2xTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBcInVwXCI7XHJcbiAgICAgICAgdGhpcy5ldmVudFBvb2wgPSBbXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5jb29yZHMgPSB7XHJcbiAgICAgICAgICAgIG1vdmU6IHtcclxuICAgICAgICAgICAgICAgIHg6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB5OiBudWxsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsaWNrOiB7XHJcbiAgICAgICAgICAgICAgICB4OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgeTogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCk9PiB0aGlzLnVwZGF0ZVN0YXRlKGV2ZW50LCBcImRvd25cIikpO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoZXZlbnQpPT4gdGhpcy51cGRhdGVTdGF0ZShldmVudCwgXCJ1cFwiKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpPT4gdGhpcy5jb29yZHNVcGRhdGUoZXZlbnQpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb29yZHNVcGRhdGUoZXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgdGhpcy5jb29yZHMubW92ZSA9IHtcclxuICAgICAgICAgICAgeDogTWF0aC5yb3VuZCgoZXZlbnQuY2xpZW50WCAtIHRhcmdldC5sZWZ0KSksXHJcbiAgICAgICAgICAgIHk6IE1hdGgucm91bmQoKGV2ZW50LmNsaWVudFkgLSB0YXJnZXQudG9wKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3RhdGUoZXZlbnQsIHN0YXR1cykge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB0aGlzLmNvb3Jkcy5jbGljayA9IHtcclxuICAgICAgICAgICAgeDogTWF0aC5yb3VuZCgoZXZlbnQuY2xpZW50WCAtIHRhcmdldC5sZWZ0KSksXHJcbiAgICAgICAgICAgIHk6IE1hdGgucm91bmQoKGV2ZW50LmNsaWVudFkgLSB0YXJnZXQudG9wKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICAgICAgdGhpcy5ldmVudFBvb2wudW5zaGlmdChbc3RhdHVzLCB0aGlzLmNvb3Jkcy5jbGlja10pO1xyXG4gICAgICAgIGlmKHRoaXMuZXZlbnRQb29sLmxlbmd0aCA+PSA1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRQb29sLnBvcCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIEVsZW1lbnQge1xyXG4gICAgY29uc3RydWN0b3IgKGdhbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMubmFtZTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICB4MTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB4MjogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB5MTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB5MjogdW5kZWZpbmVkLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBhY3Rpb25zKHR5cGUsIGRhdGEpIHtcclxuICAgIC8vICAgICBzZXRQb3NpdGlvbiA9ICgpdGhpcy5zZXRQb3NpdGlvbjtcclxuICAgIC8vICAgICBmdW5jdGlvbiBtb3ZlVG8oZGF0YSkge1xyXG4gICAgLy8gICAgICAgICBzZXRQb3NpdGlvbihkYXRhKTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIGNvbnN0IGFjdGlvbnMgPSB7XHJcbiAgICAvLyAgICAgICAgIG1vdmVUbzogbW92ZVRvXHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBpZiAodHlwZSAmJiBkYXRhKSB7XHJcbiAgICAvLyAgICAgICAgIGFjdGlvbnNbdHlwZV0oZGF0YSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIHNldE5hbWUobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9zaXRpb24oZGF0YSA9IHt4MSwgeTEsIHgyLCB5Mn0pIHtcclxuICAgICAgICBpZigodHlwZW9mKGRhdGEueDEpICE9PSAnbnVtYmVyJykgfHwgdHlwZW9mKGRhdGEueTEpICE9PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQndCw0YfQsNC70YzQvdGL0LUg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0LHRi9C70Lgg0LfQsNC00LDQvdGLINC90LUg0LLQtdGA0L3Qvi4g0K3Qu9C10LzQtdC90YI6IFwiICsgdGhpcy5uYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gZGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UG9zaXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUpIHtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIEVsZW1lbnRzTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50cykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcclxuICAgICAgICBpZiAoZWxlbWVudHMpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRFbGVtZW50cyhlbGVtZW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZEVsZW1lbnRzKGVsZW1lbnRzKSB7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8ZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKGVsZW1lbnRzW2ldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIodGltZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPHRoaXMuZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHNbaV0ucmVuZGVyKHRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU2NyZWVuIH0gZnJvbSBcIi4vc2NyZWVuXCI7XHJcbmltcG9ydCB7IENvbnRyb2xTdGF0ZSB9IGZyb20gXCIuL2NvbnRyb2wtc3RhdGVcIjtcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi9zY2VuZVwiO1xyXG5pbXBvcnQgeyBTY2VuZU1hbmFnZXIgfSBmcm9tIFwiLi9zY2VuZS1tYW5hZ2VyXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3Ioe3dpZHRoID0gMTAwMCwgaGVpZ2h0ID0gNjAwfSA9IHt9KXtcclxuICAgICAgICB0aGlzLmNvbnRyb2wgPSBuZXcgQ29udHJvbFN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgU2NyZWVuKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuc2NlbmVNYW5hZ2VyID0gbmV3IFNjZW5lTWFuYWdlcih7Z2FtZTogdGhpc30pO1xyXG4gICAgICAgIHRoaXMuc2NlbmVzID0gdGhpcy5zY2VuZU1hbmFnZXIuc2NlbmVzO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5zY2VuZXMubG9hZGluZztcclxuICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU2NlbmUoc3RhdHVzKSB7XHJcbiAgICAgICAgc3dpdGNoKHN0YXR1cyl7XHJcbiAgICAgICAgICAgIGNhc2UgU2NlbmUuTE9BREVEOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLm1lbnU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTY2VuZS5TVEFSVF9HQU1FOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLmdhbWVMZXZlbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NlbmVzLm1lbnU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnJhbWUodGltZSkge1xyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudFNjZW5lLnN0YXR1cyAhPSBTY2VuZS5XT1JLSU5HKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNjZW5lID0gdGhpcy5jaGFuZ2VTY2VuZSh0aGlzLmN1cnJlbnRTY2VuZS5zdGF0dXMpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTY2VuZS5pbml0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFNjZW5lLnJlbmRlcih0aW1lKTtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGltZSA9PiB0aGlzLmZyYW1lKHRpbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBydW4oKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpbWUgPT4gdGhpcy5mcmFtZSh0aW1lKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gXCIuL3NjZW5lcy9sb2FkaW5nXCJcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gXCIuL3NjZW5lcy9tZW51XCJcclxuaW1wb3J0IHsgR2FtZUxldmVsIH0gZnJvbSBcIi4vc2NlbmVzL2dhbWUtbGV2ZWxcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5lTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7Z2FtZSwgU2NlbmV9KSB7XHJcbiAgICAgICAgdGhpcy5zY2VuZXMgPSB7XHJcbiAgICAgICAgICAgIGxvYWRpbmc6IG5ldyBMb2FkaW5nKGdhbWUpLFxyXG4gICAgICAgICAgICBtZW51OiBuZXcgTWVudShnYW1lKSxcclxuICAgICAgICAgICAgZ2FtZUxldmVsOiBuZXcgR2FtZUxldmVsKGdhbWUpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNlc3Npb24gPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRMZXZlbDogMCxcclxuICAgICAgICAgICAgbGV2ZWxzRGF0YTogW11cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2VuZSA9IFNjZW5lO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5XT1JLSU5HO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgV09SS0lORyAoKSB7cmV0dXJuICdXT1JLSU5HJ307XHJcbiAgICBzdGF0aWMgZ2V0IExPQURFRCAoKSB7cmV0dXJuICdMT0FERUQnfTtcclxuICAgIHN0YXRpYyBnZXQgU1RBUlRfR0FNRSAoKSB7cmV0dXJuICdTVEFSVF9HQU1FJ307XHJcbiAgICBzdGF0aWMgZ2V0IEdBTUVfT1ZFUiAoKSB7cmV0dXJuICdHQU1FX09WRVInfTtcclxuICAgIHN0YXRpYyBnZXQgR0FNRV9XSU4gKCkge3JldHVybiAnR0FNRV9XSU4nfTtcclxuICAgIHN0YXRpYyBnZXQgRklOSVNIRUQgKCkge3JldHVybiAnRklOSVNIRUQnfTtcclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gdGhpcy5jb25zdHJ1Y3Rvci5XT1JLSU5HO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmlzaChzdGF0dXMpIHtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBhd2FrZSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi9idXR0b25cIjtcclxuaW1wb3J0IHsgRWxlbWVudHNNYW5hZ2VyIH0gZnJvbSBcIi4uL2VsZW1lbnRzLW1hbmFnZXJcIjtcclxuaW1wb3J0IHsgQmluZGVyIH0gZnJvbSBcIi4uL2JpbmRlclwiO1xyXG5pbXBvcnQgeyBUaWxlIH0gZnJvbSBcIi4uL3RpbGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lTGV2ZWwgZXh0ZW5kcyBTY2VuZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICAgICAgc3VwZXIoZ2FtZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICBsZXQgZWxlbWVudHMgPSBbXHJcbiAgICAgICAgICAgIG5ldyBUaWxlKGdhbWUsIHt4OiAxMDAsIHk6IDEwMCwgaDogMjAwLCB3OjEwMCwgY29sb3I6IFwiIzg4MDAwMFwifSksXHJcbiAgICAgICAgICAgIG5ldyBUaWxlKGdhbWUsIHt4OiAzMDAsIHk6IDEwMCwgaDogMjAwLCB3OjEwMCwgY29sb3I6IFwiIzAwMDA2NlwifSksXHJcbiAgICAgICAgXVxyXG4gICAgICAgIHRoaXMuZWxlbWVudHNNYW5hZ2VyID0gbmV3IEVsZW1lbnRzTWFuYWdlcihlbGVtZW50cyk7XHJcbiAgICAgICAgdGhpcy5iaW5kZXIgPSBuZXcgQmluZGVyKHRoaXMuZ2FtZS5jb250cm9sLCB0aGlzLmVsZW1lbnRzTWFuYWdlci5lbGVtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBzdXBlci5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRpbWUpIHtcclxuICAgICAgICB0aGlzLmJpbmRlci51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLmZpbGwoXCIjMjIyXCIpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4ucHJpbnQoe3RleHQ6IFwiVGhpcyBpcyBHYW1lIExldmVsIVwiLCB4OjUwMCwgeTozMDAsIHNpemU6IDM2fSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50c01hbmFnZXIucmVuZGVyKHRpbWUpO1xyXG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4uL3NjZW5lLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGluZyBleHRlbmRzIFNjZW5lIHtcclxuICAgIGNvbnN0cnVjdG9yKGdhbWUpIHtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIHRoaXMubG9hZGVkQXQgPSAwO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMubG9hZGVkQXQgPSAwO1xyXG4gICAgfTtcclxuXHJcbiAgICB1cGRhdGUodGltZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmxvYWRlZEF0ID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkZWRBdCA9IHRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmxvYWRlZEF0ICE9IDAgJiYgKHRpbWUgLSB0aGlzLmxvYWRlZEF0KSA+IDUwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRlZFwiKVxyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaChTY2VuZS5MT0FERUQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodGltZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKHRpbWUpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zY3JlZW4uZmlsbChcIiMwMDBcIik7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5wcmludCh7dGV4dDogXCLQl9Cw0LPRgNGD0LfQutCwXCIsIHg6IDUwMCwgeTogMzAwLCBzaXplOiAzNiwgY29sb3I6XCIjZmZmXCJ9KTtcclxuICAgICAgICBzdXBlci5yZW5kZXIodGltZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTY2VuZSB9IGZyb20gXCIuLi9zY2VuZVwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vYnV0dG9uXCI7XHJcbmltcG9ydCB7IEVsZW1lbnRzTWFuYWdlciB9IGZyb20gXCIuLi9lbGVtZW50cy1tYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEJpbmRlciB9IGZyb20gXCIuLi9iaW5kZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51IGV4dGVuZHMgU2NlbmUge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgICAgIHN1cGVyKGdhbWUpO1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgdGhpcy5kZWxheSA9IDA7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IFtcclxuICAgICAgICAgICAgbmV3IEJ1dHRvbihnYW1lLCB7dGV4dDpcIjEgbHZsXCIsIHg6MjAwLCB5OjIwMCwgaDo1MCwgdzoxMDAsIGJncjogXCIjZmYwMDAwXCJ9KSxcclxuICAgICAgICAgICAgbmV3IEJ1dHRvbihnYW1lLCB7dGV4dDpcIjIgbHZsXCIsIHg6MjAwLCB5OjMwMCwgaDo1MCwgdzoxMDB9KSxcclxuICAgICAgICAgICAgbmV3IEJ1dHRvbihnYW1lLCB7dGV4dDpcIjMgbHZsXCIsIHg6MjAwLCB5OjQwMCwgaDo1MCwgdzoxMDB9KSxcclxuICAgICAgICAgICAgbmV3IEJ1dHRvbihnYW1lLCB7dGV4dDpcIjQgbHZsXCIsIHg6MjAwLCB5OjUwMCwgaDo1MCwgdzoxMDB9KSxcclxuICAgICAgICAgICAgbmV3IEJ1dHRvbihnYW1lLCB7dGV4dDpcImJydWhcIiwgeDo0MDAsIHk6NTAwLCBoOjUwLCB3OjIwMH0pLFxyXG4gICAgICAgICAgICBuZXcgQnV0dG9uKGdhbWUsIHt0ZXh0Olwi0YPRgNCwINC/0L7QsdC10LTQsFwiLCB4OjgwMCwgeTozMDAsIGg6MTAwLCB3OjQwfSksXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5lbGVtZW50c01hbmFnZXIgPSBuZXcgRWxlbWVudHNNYW5hZ2VyKHRoaXMuZWxlbWVudHMpO1xyXG4gICAgICAgIHRoaXMuYmluZGVyID0gbmV3IEJpbmRlcih0aGlzLmdhbWUuY29udHJvbC5ldmVudFBvb2wsIHRoaXMuZWxlbWVudHNNYW5hZ2VyLmVsZW1lbnRzKTtcclxuICAgICAgICB0aGlzLm5leHRTY2VuZSA9IFwibWFpblwiO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSh0aW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmluZGVyLnByZXNzZWQgJiYgdGhpcy5kZWxheSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsYXkgPSB0aW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kZWxheSAhPSAwICYmICh0aW1lIC0gdGhpcy5kZWxheSkgPiAxMDAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsYXkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaChTY2VuZS5TVEFSVF9HQU1FKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcih0aW1lKSB7XHJcbiAgICAgICAgdGhpcy5iaW5kZXIudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUodGltZSk7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsKFwiIzIyMjIyMlwiKTtcclxuICAgICAgICB0aGlzLmdhbWUuc2NyZWVuLnByaW50KHt0ZXh0OiBcItCd0LDQttC80Lgg0L/RgNC+0LHQtdC7XCIseDogdGhpcy5nYW1lLnNjcmVlbi53aWR0aC8yLCB5OiB0aGlzLmdhbWUuc2NyZWVuLmhlaWdodC8yfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5lbGVtZW50c01hbmFnZXIucmVuZGVyKHRpbWUpO1xyXG4gICAgICAgIHN1cGVyLnJlbmRlcih0aW1lKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBTY3JlZW4ge1xyXG4gICAgY29uc3RydWN0b3Iod2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IHRoaXMuY3JlYXRlQ2FudmFzKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDYW52YXMod2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBjYW52YXMgPSBlbGVtZW50c1swXSB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVwiKS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG4gICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2FudmFzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICBmaWxsKGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbFJlY3Qoe3gsIHksIHcsIGgsIGNvbG9yfSkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvciB8fCBcIiMwMDBcIjtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoeCwgeSwgdywgaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnQoe3RleHQsIHgsIHksIHNpemUsIGZvbnRDb2xvcn0pIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZm9udCA9IGAke3NpemUgfHwgMjR9cHggQXJpYWxgO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBmb250Q29sb3IgfHwgXCIjZmZmZmZmXCI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KCh0ZXh0IHx8IFwi0KLQtdC60YHRgiDQvdC1INC90LDQudC00LXQvVwiKSwgeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0J1dHRvbih7dGV4dCwgeCwgeSwgdywgaCwgc2l6ZSwgY29sb3IsIGZvbnRDb2xvcn0pIHtcclxuICAgICAgICB0aGlzLmZpbGxSZWN0KHt4OngsIHk6eSwgdzp3LCBoOmgsIGNvbG9yOmNvbG9yfSk7XHJcbiAgICAgICAgdGhpcy5wcmludCh7dGV4dDogdGV4dCwgeDogKHgrdy8yKSwgeTogKHkraC8yKSwgc2l6ZTpzaXplLCBmb250Q29sb3I6Zm9udENvbG9yfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAnLi9lbGVtZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlIGV4dGVuZHMgRWxlbWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCB7eCwgeSwgdywgaCwgY29sb3J9ID0ge30pIHtcclxuICAgICAgICBzdXBlcihnYW1lKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xUeXBlID0gXCJob2xkXCI7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih7eDE6eCwgeDI6KHgrdyksIHkxOnksIHkyOih5K2gpfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFjdGlvbihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXNwbGF5RGF0YSgpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSB0aGlzLnBvc2l0aW9uO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6IHBvcy54MSxcclxuICAgICAgICAgICAgeTogcG9zLnkxLFxyXG4gICAgICAgICAgICBoOiAocG9zLnkyIC0gcG9zLnkxKSxcclxuICAgICAgICAgICAgdzogKHBvcy54MiAtIHBvcy54MSksXHJcbiAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcih0aW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNjcmVlbi5maWxsUmVjdCh0aGlzLmdldERpc3BsYXlEYXRhKCkpO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGh1ZSA9IG5ldyBHYW1lKCk7XHJcbiAgICBodWUucnVuKCk7XHJcbn0iXSwibmFtZXMiOlsiQmluZGVyIiwiY29udHJvbFN0YXRlIiwiZWxlbWVudHMiLCJjb25zb2xlIiwibG9nIiwiZXZlbnRQb29sIiwiY2xpY2tlZCIsImNvb3JkcyIsInRhcmdldCIsInByZXNzZWQiLCJjb29yZCIsImkiLCJsZW5ndGgiLCJwb3NpdGlvbiIsIngxIiwieCIsIngyIiwieTEiLCJ5IiwieTIiLCJlMSIsImUyIiwidW5kZWZpbmVkIiwiZSIsImZpbmRFbGVtZW50IiwiY29udHJvbFR5cGUiLCJhY3Rpb24iLCJjb25kaXRpb24iLCJjaGVja01hdGNoIiwiRWxlbWVudCIsIkJ1dHRvbiIsImdhbWUiLCJ3IiwiaCIsInRleHQiLCJjb2xvciIsImZvbnRDb2xvciIsInNldFBvc2l0aW9uIiwiYW5pbWF0aW9uIiwidCIsImN1cnJlbnRUaW1lIiwicnVubmluZyIsImRhdGEiLCJ0aW1lIiwiZGlzcGxheURhdGEiLCJnZXREaXNwbGF5RGF0YSIsInNjcmVlbiIsImRyYXdCdXR0b24iLCJDb250cm9sU3RhdGUiLCJzdGF0dXMiLCJtb3ZlIiwiY2xpY2siLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInVwZGF0ZVN0YXRlIiwiY29vcmRzVXBkYXRlIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJNYXRoIiwicm91bmQiLCJjbGllbnRYIiwibGVmdCIsImNsaWVudFkiLCJ0b3AiLCJ1bnNoaWZ0IiwicG9wIiwibmFtZSIsIkVycm9yIiwiRWxlbWVudHNNYW5hZ2VyIiwiYWRkRWxlbWVudHMiLCJwdXNoIiwicmVuZGVyIiwiU2NyZWVuIiwiU2NlbmUiLCJTY2VuZU1hbmFnZXIiLCJHYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJjb250cm9sIiwic2NlbmVNYW5hZ2VyIiwic2NlbmVzIiwiY3VycmVudFNjZW5lIiwibG9hZGluZyIsImluaXQiLCJMT0FERUQiLCJtZW51IiwiU1RBUlRfR0FNRSIsImdhbWVMZXZlbCIsIldPUktJTkciLCJjaGFuZ2VTY2VuZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImZyYW1lIiwiTG9hZGluZyIsIk1lbnUiLCJHYW1lTGV2ZWwiLCJzZXNzaW9uIiwiY3VycmVudExldmVsIiwibGV2ZWxzRGF0YSIsInNjZW5lIiwiY29uc3RydWN0b3IiLCJUaWxlIiwiZWxlbWVudHNNYW5hZ2VyIiwiYmluZGVyIiwidXBkYXRlIiwiZmlsbCIsInByaW50Iiwic2l6ZSIsImxvYWRlZEF0IiwiZmluaXNoIiwiZGVsYXkiLCJiZ3IiLCJuZXh0U2NlbmUiLCJjYW52YXMiLCJjcmVhdGVDYW52YXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY3JlYXRlRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImZvbnQiLCJ0ZXh0QmFzZWxpbmUiLCJ0ZXh0QWxpZ24iLCJmaWxsVGV4dCIsInBvcyIsIndpbmRvdyIsIm9ubG9hZCIsImh1ZSIsInJ1biJdLCJzb3VyY2VSb290IjoiIn0=