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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/style.css?");

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../css/style.css */ \"./css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_createComponents_otherInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/createComponents/otherInterface */ \"./js/createComponents/otherInterface.js\");\n/* harmony import */ var _js_config_UIelements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/config/UIelements */ \"./js/config/UIelements.js\");\n/* harmony import */ var _js_createComponents_markup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/createComponents/markup */ \"./js/createComponents/markup.js\");\n/* harmony import */ var _js_deleteComponents_deleteFunc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/deleteComponents/deleteFunc */ \"./js/deleteComponents/deleteFunc.js\");\n/* harmony import */ var _js_createComponents_tablo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/createComponents/tablo */ \"./js/createComponents/tablo.js\");\n // Styles\n\n\n\n\n\n //Events\n\n_js_config_UIelements__WEBPACK_IMPORTED_MODULE_2__[\"element\"].select.addEventListener(\"change\", _js_createComponents_otherInterface__WEBPACK_IMPORTED_MODULE_1__[\"other\"].staticBorder); //статик бордер візівается в другом файле\n\ndocument.addEventListener(\"DOMContentLoaded\", _js_createComponents_otherInterface__WEBPACK_IMPORTED_MODULE_1__[\"other\"].timer); //тайме рсрабатывает на васт документ тоже в другом файле\n\n_js_config_UIelements__WEBPACK_IMPORTED_MODULE_2__[\"element\"].contain.addEventListener('click', deleteControlUI);\n_js_config_UIelements__WEBPACK_IMPORTED_MODULE_2__[\"element\"].enter.addEventListener('keyup', function (e) {\n  if (e.keyCode === 13) {\n    addControllUI();\n  }\n});\n_js_config_UIelements__WEBPACK_IMPORTED_MODULE_2__[\"element\"].container.addEventListener(\"click\", addControllUI);\n/**\r\n * @desc Function that call adding data to array and template after click on container and reset input data\r\n * @callback -generalTablo - output data to general tablo\r\n * @callback -addNewTodoToStorage - add data from to storage and call function that add template to page\r\n */\n\nfunction addControllUI(e) {\n  _js_createComponents_markup__WEBPACK_IMPORTED_MODULE_3__[\"main\"].addNewTodoToStorage(descrip.value, val.value);\n  _js_createComponents_tablo__WEBPACK_IMPORTED_MODULE_5__[\"tablo\"].generalTablo();\n  _js_config_UIelements__WEBPACK_IMPORTED_MODULE_2__[\"element\"].decription.value = \" \"; //сброс значений с инпутов при нажатии \n\n  _js_config_UIelements__WEBPACK_IMPORTED_MODULE_2__[\"element\"].inputNum.value = null;\n}\n/**\r\n * @desc Function that responsible for delete  from view and storage\r\n * @param {string} - cuttent id from storage\r\n */\n\n\nfunction deleteControlUI(e) {\n  if (e.target.classList.contains('ion-ios-close-outline')) {\n    //тоесть еще раз делегирование клацая на родитель этого элемента мы его отловили просто проверив содержит ли текущее нажатие такой то класс(в нашем случае клас удаления для кнопки)\n    var id = e.target.closest('[data-id]').dataset.id;\n    _js_deleteComponents_deleteFunc__WEBPACK_IMPORTED_MODULE_4__[\"del\"].deleteTodoFromStorage(id);\n    _js_deleteComponents_deleteFunc__WEBPACK_IMPORTED_MODULE_4__[\"del\"].deleteTodoFromIncome(id);\n    _js_deleteComponents_deleteFunc__WEBPACK_IMPORTED_MODULE_4__[\"del\"].deleteTodoFromExpense(id);\n    _js_createComponents_tablo__WEBPACK_IMPORTED_MODULE_5__[\"tablo\"].init(); //все 3 метода вызовет сразу для инком ексенс и дженерал\n\n    return;\n  }\n}\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ }),

/***/ "./js/config/UIelements.js":
/*!*********************************!*\
  !*** ./js/config/UIelements.js ***!
  \*********************************/
/*! exports provided: element */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"element\", function() { return element; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n//export {inputNum,decription, income,expenses, select,selectedOptions,container,tabloInc,tabloExp,tabloGeneral,contain,addValue,description, btn,month}\nvar UIelements = function UIelements() {\n  _classCallCheck(this, UIelements);\n\n  this.month = document.querySelector(\".budget__title--month\");\n  this.inputNum = document.getElementById(\"val\");\n  this.decription = document.querySelector(\".add__description\");\n  this.income = document.querySelector(\".income__list\");\n  this.expenses = document.querySelector(\".expenses__list\");\n  this.select = document.querySelector(\".add__type\");\n  this.selectedOptions = this.select.selectedOptions;\n  this.container = document.querySelector(\".add__container #getBtn\");\n  this.tabloInc = document.querySelector(\".budget__income--value\");\n  this.tabloExp = document.querySelector(\".budget__expenses--value\");\n  this.tabloGeneral = document.querySelector(\".budget__value\");\n  this.contain = document.querySelector(\".container\");\n  this.addValue = document.querySelector('.add__value');\n  this.description = document.querySelector('.add__description');\n  this.btn = document.querySelector('#getBtn');\n  this.enter = document.querySelector('.add__container');\n};\n\nvar element = new UIelements();\n\n//# sourceURL=webpack:///./js/config/UIelements.js?");

/***/ }),

/***/ "./js/createComponents/markup.js":
/*!***************************************!*\
  !*** ./js/createComponents/markup.js ***!
  \***************************************/
/*! exports provided: main, storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"main\", function() { return main; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storage\", function() { return storage; });\n/* harmony import */ var _config_UIelements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/UIelements */ \"./js/config/UIelements.js\");\n/* harmony import */ var _createComponents_tablo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createComponents/tablo */ \"./js/createComponents/tablo.js\");\n/* harmony import */ var _createComponents_otherInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createComponents/otherInterface */ \"./js/createComponents/otherInterface.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n //UI элементы (тут все норм)\n\n //все что отвечает за табло(тут все норм)\n\n //доп фции всякие которые засоряют место(таймеры и бордеры)\n\n\nvar storage = {\n  todos: [],\n  income: [],\n  expense: []\n};\n\nvar MainUItemplate =\n/*#__PURE__*/\nfunction () {\n  function MainUItemplate() {\n    _classCallCheck(this, MainUItemplate);\n  }\n\n  _createClass(MainUItemplate, [{\n    key: \"addElem\",\n\n    /**\r\n     * @desc Function that responsible for adding template to page\r\n     * @param {Array} - current task from Array\r\n     */\n    value: function addElem(task) {\n      for (var i = 0; i < _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].selectedOptions.length; i++) {\n        if (_config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].selectedOptions[i].value == \"income\") {\n          //если  нажат такой то вставляем ипут и тег бр в конец\n          if (!_config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].description.value || !_config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].addValue.value) return _createComponents_otherInterface__WEBPACK_IMPORTED_MODULE_2__[\"other\"].alerts(), _createComponents_otherInterface__WEBPACK_IMPORTED_MODULE_2__[\"other\"].deleteAlert(); //сразу 2 вызываем сообщение и его удаление\n          // if (element.addValue.value.includes(\"-\")) {\n          //    \n          // }\n\n          var templateIncome = this.markupLeft(task, \"+\");\n          _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].income.insertAdjacentHTML('afterbegin', templateIncome);\n          storage.income.push(task);\n          _createComponents_tablo__WEBPACK_IMPORTED_MODULE_1__[\"tablo\"].incomeTablo(); // || element.addValue.value.includes(\"-\")\n        } else if (_config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].selectedOptions[i].value == \"expense\") {\n          if (!_config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].description.value || !_config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].addValue.value) return _createComponents_otherInterface__WEBPACK_IMPORTED_MODULE_2__[\"other\"].alerts(), _createComponents_otherInterface__WEBPACK_IMPORTED_MODULE_2__[\"other\"].deleteAlert();\n          var templateExpense = this.markupLeft(task, \"-\");\n          _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].expenses.insertAdjacentHTML('afterbegin', templateExpense);\n          storage.expense.push(task);\n          _createComponents_tablo__WEBPACK_IMPORTED_MODULE_1__[\"tablo\"].expenseTablo();\n        }\n      }\n    }\n    /**\r\n    * @desc Function that add data that users write to storage and generate id ,after return this data from array(discribe and val) and use that create other functions\r\n    * @callback addElem - add template to page\r\n    */\n\n  }, {\n    key: \"addNewTodoToStorage\",\n    value: function addNewTodoToStorage(descrip, val) {\n      var newTask = {\n        descrip: descrip,\n        val: val,\n        id: String(Date.now())\n      };\n      storage.todos.push(newTask);\n      this.addElem(newTask);\n      return storage.todos;\n    }\n  }, {\n    key: \"markupLeft\",\n    value: function markupLeft(task, item) {\n      console.log(task);\n      return \"\\n    <div class=\\\"item clearfix\\\" data-id=\\\"\".concat(task.id, \"\\\">\\n    <div class=\\\"item__description\\\">\").concat(task.descrip, \"</div>\\n    <div class=\\\"right clearfix\\\">\\n        <div class=\\\"item__value\\\">\").concat(item).concat(Number(task.val).toFixed(2), \"</div>\\n        <div class=\\\"item__delete\\\">\\n            <button class=\\\"item__delete--btn\\\"><i class=\\\"ion-ios-close-outline\\\"></i></button>\\n        </div>\\n    </div>\\n</div>    \");\n    }\n  }]);\n\n  return MainUItemplate;\n}();\n\nvar main = new MainUItemplate();\n\n//# sourceURL=webpack:///./js/createComponents/markup.js?");

/***/ }),

/***/ "./js/createComponents/otherInterface.js":
/*!***********************************************!*\
  !*** ./js/createComponents/otherInterface.js ***!
  \***********************************************/
/*! exports provided: OtherInterface, other */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OtherInterface\", function() { return OtherInterface; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"other\", function() { return other; });\n/* harmony import */ var _config_UIelements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/UIelements */ \"./js/config/UIelements.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar OtherInterface =\n/*#__PURE__*/\nfunction () {\n  function OtherInterface() {\n    _classCallCheck(this, OtherInterface);\n  }\n\n  _createClass(OtherInterface, [{\n    key: \"timer\",\n\n    /**\r\n     * @desc Function that add current time to tablo \r\n     */\n    value: function timer() {\n      _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].month.innerHTML = new Date().toLocaleString(); //что б сразу появлялось без задержки\n\n      setInterval(function () {\n        _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].month.innerHTML = new Date().toLocaleString();\n      }, 1000);\n    }\n    /**\r\n     * @desc Function that form border after select change\r\n     */\n\n  }, {\n    key: \"staticBorder\",\n    value: function staticBorder() {\n      for (var i = 0; i < _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].selectedOptions.length; i++) {\n        if (_config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].selectedOptions[i].value == \"income\") {\n          _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].addValue.style.border = '';\n          _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].description.style.border = '';\n          _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].select.style.border = '';\n          _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].btn.style.color = '';\n          _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].btn.style.transform = 'rotate(-360deg)';\n          _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].btn.style.transitionDuration = '1s';\n        } else {\n          _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].addValue.style.border = '1px solid red';\n          _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].description.style.border = '1px solid red';\n          _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].select.style.border = '1px solid red';\n          _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].btn.style.color = 'red';\n          _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].btn.style.transform = 'rotate(360deg)';\n          _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].btn.style.transitionDuration = '1s';\n        }\n      }\n    }\n    /**\r\n     * @desc Function that add message if the user has not entered data\r\n     */\n\n  }, {\n    key: \"alerts\",\n    value: function alerts() {\n      _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].contain.insertAdjacentHTML('afterbegin', \"<div class='alert alert-danger text-center'>Заполните формы!</div>\");\n      this.deleteAlert();\n      return _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].container;\n    }\n    /**\r\n     * @desc Function that delete alert after 2 sec\r\n     */\n\n  }, {\n    key: \"deleteAlert\",\n    value: function deleteAlert() {\n      setTimeout(function () {\n        var alert = document.querySelector(\".alert\");\n        if (alert) _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].contain.removeChild(alert);\n      }, 2000);\n    }\n  }]);\n\n  return OtherInterface;\n}();\nvar other = new OtherInterface();\n\n//# sourceURL=webpack:///./js/createComponents/otherInterface.js?");

/***/ }),

/***/ "./js/createComponents/tablo.js":
/*!**************************************!*\
  !*** ./js/createComponents/tablo.js ***!
  \**************************************/
/*! exports provided: tablo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tablo\", function() { return tablo; });\n/* harmony import */ var _config_UIelements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/UIelements */ \"./js/config/UIelements.js\");\n/* harmony import */ var _createComponents_markup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createComponents/markup */ \"./js/createComponents/markup.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Tablo =\n/*#__PURE__*/\nfunction () {\n  function Tablo() {\n    _classCallCheck(this, Tablo);\n  }\n\n  _createClass(Tablo, [{\n    key: \"incomeTablo\",\n\n    /**\r\n     * @desc Function that add value from storage to tablo if income\r\n     */\n    value: function incomeTablo() {\n      var test1 = +Number(); //ПЕРЕЕННАЯ КУДА ЗАПИСІВАЕТСЯ СУММА ПРИ ДОБОАВЛЕНИ КАЖДОго нового\n\n      for (var i = 0; i < _createComponents_markup__WEBPACK_IMPORTED_MODULE_1__[\"storage\"].income.length; i++) {\n        test1 += Number(_createComponents_markup__WEBPACK_IMPORTED_MODULE_1__[\"storage\"].income[i].val);\n      }\n\n      _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].tabloInc.innerHTML = test1.toFixed(2) + \" грн\";\n      return test1;\n    }\n    /**\r\n     * @desc  Function that add value from storage to tablo if expense\r\n     */\n\n  }, {\n    key: \"expenseTablo\",\n    value: function expenseTablo() {\n      var test2 = -Number(); //ПЕРЕЕННАЯ КУДА ЗАПИСІВАЕТСЯ СУММА ПРИ ДОБОАВЛЕНИ КАЖДО\n\n      for (var i = 0; i < _createComponents_markup__WEBPACK_IMPORTED_MODULE_1__[\"storage\"].expense.length; i++) {\n        test2 += Number(_createComponents_markup__WEBPACK_IMPORTED_MODULE_1__[\"storage\"].expense[i].val);\n      }\n\n      _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].tabloExp.innerHTML = (-test2).toFixed(2) + \" грн\";\n      return -test2;\n    }\n    /**\r\n     * @desc Function that add general value to tablo\r\n     */\n\n  }, {\n    key: \"generalTablo\",\n    value: function generalTablo() {\n      _config_UIelements__WEBPACK_IMPORTED_MODULE_0__[\"element\"].tabloGeneral.innerHTML = (this.expenseTablo() + this.incomeTablo()).toFixed(2) + \" грн\";\n    }\n    /**\r\n     * @desc Function that call ather function \r\n     */\n\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.generalTablo();\n      this.expenseTablo();\n      this.incomeTablo();\n    }\n  }]);\n\n  return Tablo;\n}();\n\nvar tablo = new Tablo();\n\n//# sourceURL=webpack:///./js/createComponents/tablo.js?");

/***/ }),

/***/ "./js/deleteComponents/deleteFunc.js":
/*!*******************************************!*\
  !*** ./js/deleteComponents/deleteFunc.js ***!
  \*******************************************/
/*! exports provided: del */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"del\", function() { return del; });\n/* harmony import */ var _createComponents_markup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createComponents/markup */ \"./js/createComponents/markup.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Budgetdelete =\n/*#__PURE__*/\nfunction () {\n  function Budgetdelete() {\n    _classCallCheck(this, Budgetdelete);\n  }\n  /**\r\n   * @desc Function that delete from storage by id\r\n   * @param {string} - cuttent id from storage\r\n   * @callback -  deleteTodoFromView(id) \r\n   */\n\n\n  _createClass(Budgetdelete, [{\n    key: \"deleteTodoFromStorage\",\n    value: function deleteTodoFromStorage(id) {\n      var removedTask;\n\n      for (var i = 0; i < _createComponents_markup__WEBPACK_IMPORTED_MODULE_0__[\"storage\"].todos.length; i++) {\n        if (_createComponents_markup__WEBPACK_IMPORTED_MODULE_0__[\"storage\"].todos[i].id === id) {\n          removedTask = _createComponents_markup__WEBPACK_IMPORTED_MODULE_0__[\"storage\"].todos.splice(i, 1);\n          break;\n        }\n      }\n\n      this.deleteTodoFromView(id); //this указываем мол контекст теряется\n\n      return removedTask;\n    }\n    /**\r\n     * @desc Function that delete from template \r\n     * @param {string} - cuttent id from storage\r\n     */\n\n  }, {\n    key: \"deleteTodoFromView\",\n    value: function deleteTodoFromView(id) {\n      var target = document.querySelector(\"[data-id=\\\"\".concat(id, \"\\\"]\"));\n      target.parentElement.removeChild(target);\n    }\n    /**\r\n     * @desc Function that delete from income Array by id\r\n     * @param {string} - cuttent id from storage\r\n     * @returns {Array} - current task\r\n     */\n\n  }, {\n    key: \"deleteTodoFromIncome\",\n    value: function deleteTodoFromIncome(id) {\n      var incomeTask = 0;\n\n      for (var i = 0; i < _createComponents_markup__WEBPACK_IMPORTED_MODULE_0__[\"storage\"].income.length; i++) {\n        if (_createComponents_markup__WEBPACK_IMPORTED_MODULE_0__[\"storage\"].income[i].id === id) {\n          incomeTask = _createComponents_markup__WEBPACK_IMPORTED_MODULE_0__[\"storage\"].income.splice(i, 1);\n          break;\n        }\n      }\n\n      return incomeTask;\n    }\n    /**\r\n     * @desc Function that delete from expense Array by id\r\n     * @param {string} - cuttent id from storage\r\n     * @returns {Array} - current task\r\n     */\n\n  }, {\n    key: \"deleteTodoFromExpense\",\n    value: function deleteTodoFromExpense(id) {\n      var expenseTask = 0;\n\n      for (var i = 0; i < _createComponents_markup__WEBPACK_IMPORTED_MODULE_0__[\"storage\"].expense.length; i++) {\n        if (_createComponents_markup__WEBPACK_IMPORTED_MODULE_0__[\"storage\"].expense[i].id === id) {\n          expenseTask = _createComponents_markup__WEBPACK_IMPORTED_MODULE_0__[\"storage\"].expense.splice(i, 1);\n          break;\n        }\n      }\n\n      return expenseTask;\n    }\n  }]);\n\n  return Budgetdelete;\n}();\n\nvar del = new Budgetdelete();\n\n//# sourceURL=webpack:///./js/deleteComponents/deleteFunc.js?");

/***/ })

/******/ });