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

/***/ "./src/api_fetcher.js":
/*!****************************!*\
  !*** ./src/api_fetcher.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getGif\": () => (/* binding */ getGif),\n/* harmony export */   \"getWeather\": () => (/* binding */ getWeather)\n/* harmony export */ });\n\nlet getWeather = async (location) => {\n    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8aa89cdd2e5aa1dfcceb25020ccbc280`);\n    let data     = await response.json();\n    return data\n}\nlet getGif = async (sTerm) =>{\n    let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=59sFW1yf83tBLLoSNohZLfv2N6jn1Dse&s=${sTerm} sky`,{mods:'cors'});\n    let data     = await response.json()\n    return data\n}\n\n//# sourceURL=webpack://weather/./src/api_fetcher.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _randerer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./randerer */ \"./src/randerer.js\");\n/* harmony import */ var _api_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api_fetcher */ \"./src/api_fetcher.js\");\n\n\n\n\nconst goBtn      = document.querySelector(\".search-btn\");\nconst userInput  = document.querySelector('.cityname-input');\ngoBtn.addEventListener('click',()=>{\n    if (userInput.value === undefined) return\n    const data = (0,_api_fetcher__WEBPACK_IMPORTED_MODULE_1__.getWeather)(getDataFromForm(userInput.value)).then(weather => {\n        const content = document.querySelector('.content');\n        content.textContent = '';\n        (0,_api_fetcher__WEBPACK_IMPORTED_MODULE_1__.getGif)(weather.weather[0].main).then(url =>{\n            content.appendChild((0,_randerer__WEBPACK_IMPORTED_MODULE_0__.createCard)(weather,url));\n        })\n        \n        console.log(weather)\n    }).catch(err =>{\n            alert(\"enter a valid city \")\n    });\n} )\n\nfunction getDataFromForm(cityName) {\n    return cityName\n      .replace(/(\\s+$|^\\s+)/g, '') // remove whitespace from begining and end of string\n      .replace(/(,\\s+)/g, ',') // remove any white space that follows a comma\n      .replace(/(\\s+,)/g, ',') // remove any white space that preceeds a comma\n      .replace(/\\s+/g, '+'); // replace any remaining white space with +, so it works in api call\n\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// const content = document.querySelector('.content');\n// content.appendChild(createCard(data));\n\n\n\n\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ }),

/***/ "./src/randerer.js":
/*!*************************!*\
  !*** ./src/randerer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCard\": () => (/* binding */ createCard)\n/* harmony export */ });\nlet kelvin=true;\n\nfunction createCard(data,gif){\n    const card = document.createElement('div');\n    card.classList.add('card');\n\n    //header \n    const cardHeader = document.createElement('div');\n    cardHeader.classList.add('card-header');\n    const cardTitle = document.createElement('p');\n    cardTitle.classList.add('card-title');\n    cardTitle.textContent = data.name;\n    cardHeader.appendChild(cardTitle);\n\n    //center\n    const cardCenter = document.createElement('div');\n    cardCenter.classList.add('card-center');\n    const cardIcon = document.createElement('img');\n    cardIcon.classList.add('card-icon');\n    cardIcon.src = gif.data.images.original.url;\n    const tempContainer = document.createElement('div');\n    tempContainer.classList.add('temp-container');\n    const temp = document.createElement('h1');\n    temp.classList.add('temp');\n    temp.textContent = Math.floor(data.main.temp);\n    temp.addEventListener('click',(e)=>{\n        let minmax = document.querySelector('.minmax-value');\n        temp.textContent = changeTemp(parseInt(temp.textContent));\n        minmax.textContent = `${changeTemp(parseInt(minmax.textContent.split('/')[0]))}/${changeTemp(parseInt(minmax.textContent.split('/')[1]))}`;\n        let feels_like = document.querySelector('.feels-like-value');\n        feels_like.textContent = changeTemp(parseInt(feels_like.textContent));\n        \n        if(kelvin === false)\n            kelvin = true\n        else\n            kelvin = false\n    })\n    const state = document.createElement('p');\n    state.classList.add('weather-state');\n    state.textContent = data.weather[0].main;\n    tempContainer.appendChild(temp);\n    tempContainer.appendChild(state);\n    cardCenter.appendChild(cardIcon);\n    cardCenter.appendChild(tempContainer);\n\n    //footer\n    const cardFooter = document.createElement('div');\n    cardFooter.classList.add('card-footer');\n    const minMaxContainer = document.createElement('div');\n    minMaxContainer.classList.add('minmax-temp');\n    minMaxContainer.classList.add('footer-div')\n    const minMaxTitle = document.createElement('p');\n    minMaxTitle.classList.add('minmax-title');\n    minMaxTitle.textContent = \"temp\";\n    const minMaxValue = document.createElement('p');\n    minMaxValue.classList.add('minmax-value');\n    minMaxValue.textContent = `${Math.floor(data.main.temp_min)}/${Math.floor(data.main.temp_max)}`;\n    minMaxContainer.appendChild(minMaxTitle);\n    minMaxContainer.appendChild(minMaxValue);\n    \n    const feelsLikeContainer = document.createElement('div');\n    feelsLikeContainer.classList.add('feels-like');\n    feelsLikeContainer.classList.add('footer-div');\n    const feelsLikeTitle = document.createElement('p');\n    feelsLikeTitle.classList.add('feels-like-title');\n    feelsLikeTitle.textContent = \"Feels like\";\n    const feelsLikeValue = document.createElement('p');\n    feelsLikeValue.classList.add('feels-like-value');\n    feelsLikeValue.textContent = Math.floor(data.main.feels_like);\n    feelsLikeContainer.appendChild(feelsLikeTitle);\n    feelsLikeContainer.appendChild(feelsLikeValue);\n    cardFooter.appendChild(minMaxContainer);\n    cardFooter.appendChild(feelsLikeContainer);\n\n    card.appendChild(cardHeader);\n    card.appendChild(cardCenter);\n    card.appendChild(cardFooter);\n\n    return card;\n\n}\n\nfunction changeTemp(data){\n    if(kelvin === true){\n\n        return Math.floor(data - 273);\n        \n    }\n    else{\n\n        return Math.floor(data + 273);\n        \n    }\n}\n\n\n//# sourceURL=webpack://weather/./src/randerer.js?");

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