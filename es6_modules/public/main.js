/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/Car.js":
/*!*******************************!*\
  !*** ./src/Components/Car.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Car {\r\n    constructor(make, model, year) {\r\n        this.make = make;\r\n        this.model = model;\r\n        this.year = year;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Car);\n\n//# sourceURL=webpack://es6_modules/./src/Components/Car.js?");

/***/ }),

/***/ "./src/Components/WishList.js":
/*!************************************!*\
  !*** ./src/Components/WishList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_DOMMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/DOMMethods */ \"./src/utils/DOMMethods.js\");\n\r\n\r\nclass WishList {\r\n    constructor() {\r\n        this.list = [];\r\n    }\r\n\r\n    add(car) {\r\n        this.list.push(car);\r\n        this.updateDOM();\r\n    }\r\n\r\n    remove(id) {\r\n        this.list = this.list.filter((car, i) => i != id);\r\n        this.updateDOM();\r\n    }\r\n\r\n    updateDOM() {\r\n        const listContainer = document.getElementById(\"wishListContainer\");\r\n        const oldList = document.getElementById(\"wishList\");\r\n\r\n        if (oldList) {\r\n            listContainer.removeChild(oldList);\r\n        }\r\n\r\n        const list = document.createElement(\"ul\");\r\n        list.id = \"wishList\";\r\n        list.classList.add(\"list-group\");\r\n\r\n        listContainer.appendChild(list);\r\n\r\n        this.list.forEach((car, id) => {\r\n            let li = document.createElement(\"li\");\r\n            li.classList.add(\"list-group-item\");\r\n            li.textContent = `${car.make} ${car.model}`;\r\n\r\n            li.addEventListener(\"click\", function () {\r\n                (0,_utils_DOMMethods__WEBPACK_IMPORTED_MODULE_0__.displayCarInfo)(car, id);\r\n            });\r\n            list.appendChild(li);\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WishList);\n\n//# sourceURL=webpack://es6_modules/./src/Components/WishList.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Components_WishList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/WishList */ \"./src/Components/WishList.js\");\n/* harmony import */ var _Components_Car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Car */ \"./src/Components/Car.js\");\n/* harmony import */ var _utils_DOMMethods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/DOMMethods */ \"./src/utils/DOMMethods.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.onload = function () {\r\n    const form = document.getElementById(\"submitForm\");\r\n    const makeInput = document.getElementById(\"makeInput\");\r\n    const modelInput = document.getElementById(\"modelInput\");\r\n    const yearInput = document.getElementById(\"yearInput\");\r\n\r\n    const wishList = new _Components_WishList__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\n    const [removeBtn] = document.getElementsByClassName(\"removeBtn\");\r\n    removeBtn.addEventListener(\"click\", function () {\r\n        (0,_utils_DOMMethods__WEBPACK_IMPORTED_MODULE_2__.displayCarInfo)({ make: \"\", model: \"\", year: \"\" });\r\n    });\r\n\r\n    form.addEventListener(\"submit\", function (event) {\r\n        event.preventDefault();\r\n\r\n        let newCar = new _Components_Car__WEBPACK_IMPORTED_MODULE_1__[\"default\"](makeInput.value, modelInput.value, yearInput.value);\r\n        wishList.add(newCar);\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/utils/DOMMethods.js":
/*!*********************************!*\
  !*** ./src/utils/DOMMethods.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayCarInfo\": () => (/* binding */ displayCarInfo)\n/* harmony export */ });\nfunction displayCarInfo(car, id) {\r\n    const carMake = document.getElementById(\"car-make\");\r\n    const carModel = document.getElementById(\"car-model\");\r\n    const carYear = document.getElementById(\"car-year\");\r\n\r\n    const [removeBtn] = document.getElementsByClassName(\"removeBtn\");\r\n    removeBtn.id = id;\r\n\r\n    carMake.textContent = `Make: ${car.make}`;\r\n    carModel.textContent = `Model ${car.model}`;\r\n    carYear.textContent = `Year: ${car.year}`;\r\n}\n\n//# sourceURL=webpack://es6_modules/./src/utils/DOMMethods.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;