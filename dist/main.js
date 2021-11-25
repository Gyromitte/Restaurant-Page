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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showContactTab\": () => (/* binding */ showContactTab)\n/* harmony export */ });\nfunction showContactTab(){\n\nconst content = document.getElementById('content');\n\nconst header = document.createElement('header');\nheader.innerText = \"SUSHI N GADA\";\ncontent.appendChild(header);\n\nconst sushiLogo = document.createElement('img');\nsushiLogo.id = \"Sushi-logo\";\nsushiLogo.src = \"images/Sushi-logo.png\";\nsushiLogo.alt = \"Sushi-logo\";\nheader.appendChild(sushiLogo);\n\nfunction createButtons (nameButton){\n    let newButton = document.createElement('button');\n    newButton.classList = \"Header-buttons\";\n    newButton.innerText = nameButton;\n    newButton.id = nameButton;\n    header.appendChild(newButton);\n}\n\ncreateButtons(\"Home\");\ncreateButtons(\"Menu\");\ncreateButtons(\"Contact\");\n//Changes the color of the button to demostrate that is selected\nconst Contact = document.getElementById('Contact');\nContact.id = \"Contact\";\nContact.classList  = \"Header-buttons selected\";\n\nconst contactTab = document.createElement(\"contact-tab\");\ncontent.appendChild(contactTab);\n\nconst tabTitle = document.createElement('p');\ntabTitle.classList = \"tab-title\";\ntabTitle.innerText = \"Contact\";\ncontactTab.appendChild(tabTitle);\n\nconst contact = document.createElement('contact');\ncontent.appendChild(contact);\n\nconst phoneImage = document.createElement('img');\nphoneImage.src = \"images/contact.png\";\nphoneImage.alt = \"phone-image\";\ncontact.appendChild(phoneImage);\n\nconst contactNumber = document.createElement('p');\ncontactNumber.innerText = \"87-89-86-69-42-01\";\ncontact.appendChild(contactNumber);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showHomeTab\": () => (/* binding */ showHomeTab)\n/* harmony export */ });\nfunction showHomeTab(){\n\nconst content = document.getElementById('content');\n\nconst header = document.createElement('header');\nheader.innerText = \"SUSHI N GADA\";\ncontent.appendChild(header);\n\nconst sushiLogo = document.createElement('img');\nsushiLogo.id = \"Sushi-logo\";\nsushiLogo.src = \"images/Sushi-logo.png\";\nsushiLogo.alt = \"Sushi-logo\";\nheader.appendChild(sushiLogo);\n\nfunction createButtons (nameButton){\n    let newButton = document.createElement('button');\n    newButton.classList = \"Header-buttons\";\n    newButton.innerText = nameButton;\n    newButton.id = nameButton;\n    header.appendChild(newButton);\n}\n\ncreateButtons(\"Home\");\n//Changes the color of the button to demostrate that is selected\nconst Home = document.getElementById('Home');\nHome.id = \"Home\";\nHome.classList = \"Header-buttons selected\";\n\ncreateButtons(\"Menu\");\ncreateButtons(\"Contact\");\n\nconst homeInfo = document.createElement('home-info');\nhomeInfo.id = \"Home-info\";\nhomeInfo.innerText = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis tempor congue. Quisque metus magna, semper id dolor quis, efficitur iaculis lorem. Vestibulum euismod odio lectus, sit amet aliquam mi feugiat at. Quisque in risus quis lectus vehicula venenatis. Vivamus condimentum fringilla ipsum quis porta. Nullam eget lobortis leo. Sed fermentum quis nibh eget accumsan. Vestibulum non tellus quam.\";\ncontent.appendChild(homeInfo);\n\nconst homeImage = document.createElement('img');\nhomeImage.id = \"Home-image\";\nhomeImage.src = \"images/home-image.jpg\";\nhomeImage.alt = \"home-Image\";\nhomeInfo.appendChild(homeImage);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.showHomeTab)();\n\nfunction reAsignEvents(){\n\nconst Home = document.getElementById('Home');\nHome.addEventListener('click', e=>{\n    clearContent();\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.showHomeTab)();\n    reAsignEvents();\n});\n\nconst Menu = document.getElementById('Menu');\nMenu.addEventListener('click', e=>{\n    clearContent();\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.showMenuTab)();\n    reAsignEvents();\n});\n\nconst Contact = document.getElementById('Contact');\nContact.addEventListener('click', e=>{\n    clearContent();\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.showContactTab)();\n    reAsignEvents();\n});\n}\n\nreAsignEvents();\nfunction clearContent(){\n    document.getElementById('content').innerHTML = \"\";\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showMenuTab\": () => (/* binding */ showMenuTab)\n/* harmony export */ });\nfunction showMenuTab(){   \n\nconst content = document.getElementById('content');\n\nconst header = document.createElement('header');\nheader.innerText = \"SUSHI N GADA\";\ncontent.appendChild(header);\n\nconst sushiLogo = document.createElement('img');\nsushiLogo.id = \"Sushi-logo\";\nsushiLogo.src = \"images/Sushi-logo.png\";\nsushiLogo.alt = \"Sushi-logo\";\nheader.appendChild(sushiLogo);\n\nfunction createButtons (nameButton){\n    let newButton = document.createElement('button');\n    newButton.classList = \"Header-buttons\";\n    newButton.innerText = nameButton;\n    newButton.id = nameButton;\n    header.appendChild(newButton);\n}\n\ncreateButtons(\"Home\");\n\ncreateButtons(\"Menu\");\n//Changes the color of the button to demostrate that is selected\nconst Menu = document.getElementById('Menu');\nMenu.id = \"Menu\";\nMenu.classList = \"Header-buttons selected\";\n\ncreateButtons(\"Contact\");\n\nconst menuInfo = document.createElement('div');\nmenuInfo.id = \"Menu-info\";\ncontent.appendChild(menuInfo);\n\nconst tabTitle = document.createElement('p');\ntabTitle.classList = \"tab-title\";\ntabTitle.innerText = \"Menu\";\nmenuInfo.appendChild(tabTitle);\n\nconst menuContent = document.createElement('menu');\nmenuInfo.appendChild(menuContent);\n\nfunction createMenuImages(nameItem, source){\n    let newImage = document.createElement('div');\n    newImage.classList = \"menu-images-container\";\n    menuContent.appendChild(newImage);\n    let image = document.createElement('img');\n    image.classList = \"menu-images\";\n    image.src = source;\n    newImage.innerText = nameItem;\n    newImage.appendChild(image);\n}\n\ncreateMenuImages(\"Individual Nigiri's\", \"images/menu/salmon-nigiri.jpg\");\ncreateMenuImages(\"California Roll's\", \"images/menu/california-roll.jpg\");\ncreateMenuImages(\"Makizushi\", \"images/menu/makizushi.jpg\");\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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