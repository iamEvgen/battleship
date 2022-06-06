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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400&family=Dancing+Script:wght@400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  font-family: 'Comfortaa', cursive;\\n}\\n\\nh1 {\\n  margin: 0;\\n  color: white;\\n  background: rgb(0,212,255);\\n  background: linear-gradient(135deg, rgba(0,212,255,1) 0%, rgba(3,13,49,1) 50%, rgba(0,212,255,1) 100%);\\n  padding: 3px;\\n  text-align: center;\\n  font-family: 'Dancing Script', cursive;\\n}\\n\\n.mainContainer {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  min-height: 100vh;\\n  align-items: center;\\n}\\n\\n.header {\\n  width: 100%;\\n}\\n\\n.footer {\\n  width: 100%;\\n  text-align: center;\\n  color: white;\\n  background: rgb(0,212,255);\\n  background: linear-gradient(135deg, rgba(0,212,255,1) 0%, rgba(3,13,49,1) 50%, rgba(0,212,255,1) 100%);\\n}\\n\\n.fieldContainer {\\n  display: flex;\\n  flex-wrap: wrap;\\n}\\n\\n.playerSide,\\n.enemySide {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n  margin: 20px 10px;\\n}\\n\\n.fieldLine {\\n  display: flex;\\n}\\n\\n.cell {\\n  width: 25px;\\n  aspect-ratio: 1;\\n  background-color: white;\\n  text-align: center;\\n  line-height: 25px;\\n}\\n\\n.playerField,\\n.enemyField {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1px;\\n  background-color: #00a1c2;\\n  border: 1px solid #005f72;\\n  z-index: 5;\\n}\\n\\n.enemyField:hover {\\n  cursor: crosshair;\\n}\\n\\n.fieldLine {\\n  display: flex;\\n  gap: 1px;\\n}\\n\\n.newGame {\\n  border: 0;\\n  color: white;\\n  background: rgb(0,212,255);\\n  background: linear-gradient(135deg, rgba(0,212,255,1) 0%, rgba(3,13,49,1) 50%, rgba(0,212,255,1) 100%);\\n  font-family: 'Comfortaa', cursive;\\n  padding: 5px;\\n}\\n\\n.newGame:hover {\\n  cursor: pointer;\\n}\\n\\n.aliveShip {\\n  background-color: #57e882;\\n}\\n\\n.sunkShip {\\n  background-color: rgb(255, 191, 191);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nclass Gameboard {\n  constructor() {\n    // '' - empty cell\n    // 's' - ship is here\n    // 'm' - miss, there was a shot without a hit\n    // 'h' - hit, there was a hit in the ship\n    this.field = [\n      ['', '', '', '', '', '', '', '', '', ''],\n      ['', '', '', '', '', '', '', '', '', ''],\n      ['', '', '', '', '', '', '', '', '', ''],\n      ['', '', '', '', '', '', '', '', '', ''],\n      ['', '', '', '', '', '', '', '', '', ''],\n      ['', '', '', '', '', '', '', '', '', ''],\n      ['', '', '', '', '', '', '', '', '', ''],\n      ['', '', '', '', '', '', '', '', '', ''],\n      ['', '', '', '', '', '', '', '', '', ''],\n      ['', '', '', '', '', '', '', '', '', ''],\n    ];\n\n    this.ships = [];\n  }\n\n  checkNearCells(listOfCellsCoordinates) {\n    let nearCellsAreFree = true;\n    listOfCellsCoordinates.forEach((cell) => {\n      const line = cell[0];\n      const column = cell[1];\n      for (let i = -1; i <= 1; i += 1) {\n        for (let j = -1; j <= 1; j += 1) {\n          const testLine = line + i;\n          const testColumn = column + j;\n          if (\n            testLine >= 0 &&\n            testLine <= 9 &&\n            testColumn >= 0 &&\n            testColumn <= 9\n          ) {\n            if (this.field[testLine][testColumn] !== '') {\n              nearCellsAreFree = false;\n            }\n          }\n        }\n      }\n    });\n    return nearCellsAreFree;\n  }\n\n  markShipOnTheGameboard(allShipCoordinates) {\n    allShipCoordinates.forEach((cell) => {\n      const line = cell[0];\n      const column = cell[1];\n      this.field[line][column] = 's';\n    });\n  }\n\n  addShip(firstCell, length, axis) {\n    let shipAdded = false;\n\n    const firstCellCoordinates = {\n      line: firstCell[0],\n      column: firstCell[1],\n    };\n\n    const allShipCoordinates = [];\n    allShipCoordinates.push([\n      firstCellCoordinates.line,\n      firstCellCoordinates.column,\n    ]);\n\n    if (axis === 'horizontal' && firstCellCoordinates.column + length <= 10) {\n      for (let i = 1; i < length; i += 1) {\n        allShipCoordinates.push([\n          firstCellCoordinates.line,\n          firstCellCoordinates.column + i,\n        ]);\n      }\n    } else if (\n      axis === 'vertical' &&\n      firstCellCoordinates.line + length <= 10\n    ) {\n      for (let i = 1; i < length; i += 1) {\n        allShipCoordinates.push([\n          firstCellCoordinates.line + i,\n          firstCellCoordinates.column,\n        ]);\n      }\n    } else return false;\n\n    if (this.checkNearCells(allShipCoordinates)) {\n      const ship = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](allShipCoordinates);\n      this.ships.push(ship);\n      this.markShipOnTheGameboard(allShipCoordinates);\n      shipAdded = this.field;\n    }\n\n    return shipAdded;\n  }\n\n  getgameOverStatus() {\n    let gameOverStatus = true;\n    this.ships.forEach((ship) => {\n      if (!ship.isSunk()) gameOverStatus = false;\n    });\n    return gameOverStatus;\n  }\n\n  // return {'error', false} if you shot in 'm' or 'h'\n  // return {hitStatus, gameOverStatus} if you shot in '' or 's'\n  receiveAttack(targetCellCoordinates) {\n    const resultOfAttack = {\n      hitStatus: null,\n      shipWasSunk: null,\n      gameOverStatus: null,\n      field: this.field,\n    };\n    const targetLine = targetCellCoordinates[0];\n    const targetColumn = targetCellCoordinates[1];\n\n    if (this.field[targetLine][targetColumn] === 's') {\n      // hit the target\n      this.field[targetLine][targetColumn] = 'h';\n      const shipUnderFire = this.findShip([targetLine, targetColumn]);\n      console.log(shipUnderFire);\n      shipUnderFire.hit([targetLine, targetColumn]);\n      const shipIsSunk = shipUnderFire.isSunk();\n      resultOfAttack.hitStatus = true;\n      resultOfAttack.shipWasSunk = shipIsSunk;\n      resultOfAttack.gameOverStatus = this.getgameOverStatus();\n      resultOfAttack.field = this.field;\n    } else if (this.field[targetLine][targetColumn] === '') {\n      // missed the target\n      this.field[targetLine][targetColumn] = 'm';\n      resultOfAttack.hitStatus = false;\n      resultOfAttack.shipWasSunk = false;\n      resultOfAttack.gameOverStatus = this.getgameOverStatus();\n      resultOfAttack.field = this.field;\n    } else if (['h', 'm'].includes(this.field[targetLine][targetColumn])) {\n      // repeated shot at the same target\n      resultOfAttack.hitStatus = 'error';\n      resultOfAttack.shipWasSunk = false;\n      resultOfAttack.gameOverStatus = this.getgameOverStatus();\n      resultOfAttack.field = this.field;\n    } else {\n      throw new Error('Invalid target!');\n    }\n\n    return resultOfAttack;\n  }\n\n  generateShips() {\n    for (let shipLength of [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]) {\n      let counter = 1;\n      while (counter < 1000) {\n        const firstCell = [\n          Math.floor(Math.random() * 10),\n          Math.floor(Math.random() * 10),\n        ];\n        const axis = ['horizontal', 'vertical'][Math.floor(Math.random() * 2)];\n        const shipAdded = this.addShip(firstCell, shipLength, axis);\n        if (shipAdded) {\n          break;\n        }\n        counter += 1;\n      }\n    }\n  }\n\n  findShip(coordinates) {\n    const line = coordinates[0];\n    const column = coordinates[1];\n    let needShip = false;\n    this.ships.forEach((ship) => {\n      ship.cells.forEach((cell) => {\n        if (\n          cell.cellCoordinates[0] === line &&\n          cell.cellCoordinates[1] === column\n        ) {\n          needShip = ship;\n        }\n      });\n    });\n\n    return needShip;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack:///./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n\n\n\n(function Game() {\n  const playerField = document.querySelector('.playerField');\n  const enemyField = document.querySelector('.enemyField');\n  const newGameBtn = document.querySelector('.newGame');\n\n  const gameStatus = {\n    gameOver: false,\n  };\n\n  let player1, player2, gameboard1, gameboard2;\n\n  function startNewGame() {\n    gameStatus.gameOver = false;\n\n    player1 = new _player__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('player', 'Seahero', true);\n    player2 = new _player__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('pc', 'AIinside', false);\n\n    gameboard1 = new _gameboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    gameboard2 = new _gameboard__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\n    gameboard1.generateShips();\n    gameboard2.generateShips();\n\n    renderPlayerField();\n    renderEnemyField();\n  }\n\n  function renderPlayerField() {\n    playerField.innerHTML = '';\n    for (let line = 0; line < 10; line += 1) {\n      const newLine = document.createElement('div');\n      newLine.classList.add('fieldLine');\n      for (let column = 0; column < 10; column += 1) {\n        const newCell = document.createElement('div');\n        newCell.classList.add('cell', `cellId-${line}-${column}`);\n        const symbolInCell = gameboard1.field[line][column];\n        if (symbolInCell === 'm') {\n          newCell.textContent = '•';\n        } else if (symbolInCell === 's') {\n          newCell.classList.add('aliveShip');\n        } else if (symbolInCell === 'h') {\n          newCell.textContent = 'x';\n          const findShip = gameboard1.findShip([line, column]);\n          const isShipSunk = findShip.isSunk();\n          if (isShipSunk) {\n            newCell.classList.add('sunkShip');\n          } else {\n            newCell.classList.add('aliveShip');\n          }\n        }\n        newLine.appendChild(newCell);\n      }\n      playerField.appendChild(newLine);\n    }\n  }\n\n  function renderEnemyField() {\n    enemyField.innerHTML = '';\n    for (let line = 0; line < 10; line += 1) {\n      const newLine = document.createElement('div');\n      newLine.classList.add('fieldLine');\n      for (let column = 0; column < 10; column += 1) {\n        const newCell = document.createElement('div');\n        newCell.classList.add('cell', `cellId-${line}-${column}`);\n        const symbolInCell = gameboard2.field[line][column];\n        // newCell.textContent = symbolInCell;\n        if (symbolInCell === 'm') {\n          newCell.textContent = '•';\n        } else if (symbolInCell === 'h' ) {\n          newCell.textContent = 'x';\n          const findShip = gameboard2.findShip([line, column]);\n          const isShipSunk = findShip.isSunk();\n          if (isShipSunk) {\n            newCell.classList.add('sunkShip');\n          } else {\n            newCell.classList.add('aliveShip');\n          }\n        }\n        newLine.appendChild(newCell);\n      }\n      enemyField.appendChild(newLine);\n    }\n  }\n\n  // function renderEnemyField() {\n  //   enemyField.innerHTML = '';\n  //   for (let line = 0; line < 10; line += 1) {\n  //     const newLine = document.createElement('div');\n  //     newLine.classList.add('fieldLine');\n  //     for (let column = 0; column < 10; column += 1) {\n  //       const newCell = document.createElement('div');\n  //       newCell.classList.add('cell', `cellId-${line}-${column}`);\n  //       const symbolInCell = gameboard2.field[line][column];\n  //       newCell.textContent = symbolInCell;\n  //       if (symbolInCell === 'm') {\n  //         newCell.textContent = '•';\n  //       } else if (symbolInCell === 'h' ) {\n  //         newCell.textContent = 'x';\n  //         const findShip = gameboard1.findShip([line, column]);\n  //         const isShipSunk = findShip.isSunk();\n  //         if (isShipSunk) {\n  //           newCell.classList.add('sunkShip');\n  //         } else {\n  //           newCell.classList.add('aliveShip');\n  //         }\n  //       }\n  //       newLine.appendChild(newCell);\n  //     }\n  //     enemyField.appendChild(newLine);\n  //   }\n  // }\n\n  function changeTurns() {\n    player1.changeTurn();\n    player2.changeTurn();\n  }\n\n  function playerTurn(event) {\n    if (gameStatus.gameOver) {\n      return;\n    }  \n    if (player1.turn) {\n      const [_, line, column] = event.target.classList[1].split('-');\n      const resultOfAttack = gameboard2.receiveAttack([+line, +column]);\n      console.log(resultOfAttack);\n      renderEnemyField();\n      if (resultOfAttack.gameOverStatus) {\n        gameStatus.gameOver = resultOfAttack.gameOverStatus;\n        //render gameover result, who won the game?\n      } else if (!resultOfAttack.hitStatus) {\n        changeTurns();\n        enemyTurn();\n      }\n    }\n  }\n\n  function enemyTurn() {\n    if (gameStatus.gameOver) {\n      return;\n    }\n    if (player2.turn) {\n      const target = player2.generateTarget(gameboard1.field);\n      const resultOfAttack = gameboard1.receiveAttack(target);\n      renderPlayerField();\n      if (resultOfAttack.gameOverStatus) {\n        gameStatus.gameOver = resultOfAttack.gameOverStatus;\n        //render gameover result, who won the game?\n      } else if (!resultOfAttack.hitStatus) {\n        changeTurns();\n      } else {\n        enemyTurn();\n      }\n    }\n  }\n\n  startNewGame();\n\n  newGameBtn.addEventListener('click', startNewGame);\n  enemyField.addEventListener('click', playerTurn);\n})();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-constant-condition */\nclass Player {\n  constructor(mode, name, turn) {\n    this.name = name;\n    this.mode = mode; // 'player'/'pc'\n    this.turn = turn;\n    this.successShots = []; // add here success shots before sunk ex. [1, 2];\n  }\n\n  changeTurn() {\n    this.turn = !this.turn;\n  }\n\n  addSuccessShot(coordinates) {\n    this.successShots.push(coordinates);\n  }\n\n  clearShotsWhenEnemySunk() {\n    this.successShots = [];\n  }\n\n  // eslint-disable-next-line class-methods-use-this\n  canWeShotHere(field, coordinates) {\n    const targetLine = coordinates[0];\n    const targetColumn = coordinates[1];\n    if (\n      targetLine < 0\n      || targetLine > 9\n      || targetColumn < 0\n      || targetColumn > 9\n    ) return false;\n    if (['', 's'].includes(field[targetLine][targetColumn])) {\n      return true;\n    }\n    return false;\n  }\n\n  randomTarget(field) {\n    let targetLine;\n    let targetColumn;\n    while (true) {\n      targetLine = Math.floor(Math.random() * 10);\n      targetColumn = Math.floor(Math.random() * 10);\n      if (this.canWeShotHere(field, [targetLine, targetColumn])) {\n        return [targetLine, targetColumn];\n      }\n    }\n  }\n\n  generateTargetWith1Point(field, shots) {\n    while (true) {\n      const shifts = [\n        [-1, 0],\n        [1, 0],\n        [0, -1],\n        [0, 1],\n      ];\n      const randomShift = shifts[Math.floor(Math.random() * shifts.length)];\n      const newCoordinates = [\n        shots[0][0] + randomShift[0],\n        shots[0][1] + randomShift[1],\n      ];\n      if (this.canWeShotHere(field, newCoordinates)) {\n        return newCoordinates;\n      }\n    }\n  }\n\n  generateTargetWith2Point(field, shots) {\n    const point1 = shots[0];\n    const point2 = shots[1];\n    let target;\n    if (point1[0] === point2[0]) {\n      // horizontal position of the ship\n      const targetLine = point1[0];\n      const shotsColumns = shots.map((element) => element[1]);\n      const min = Math.min(...shotsColumns);\n      const max = Math.max(...shotsColumns);\n      const targets = [\n        [targetLine, min - 1],\n        [targetLine, max + 1],\n      ];\n      while (true) {\n        target = targets[Math.floor(Math.random() * targets.length)];\n        if (this.canWeShotHere(field, target)) return target;\n      }\n    } else if (point1[1] === point2[1]) {\n      // vertical position of the ship\n      const targetColumn = point1[1];\n      const shotsLines = shots.map((element) => element[0]);\n      const min = Math.min(...shotsLines);\n      const max = Math.max(...shotsLines);\n      const targets = [\n        [min - 1, targetColumn],\n        [max + 1, targetColumn],\n      ];\n      while (true) {\n        target = targets[Math.floor(Math.random() * targets.length)];\n        if (this.canWeShotHere(field, target)) return target;\n      }\n    }\n    return null;\n  }\n\n  generateTarget(field) {\n    let target;\n    if (this.successShots.length === 0) {\n      target = this.randomTarget(field);\n    } else if (this.successShots.length === 1) {\n      target = this.generateTargetWith1Point(field, this.successShots);\n    } else if (this.successShots.length > 1) {\n      target = this.generateTargetWith2Point(field, this.successShots);\n    }\n    return target;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\n  constructor(coordinates) {\n    this.length = coordinates.length;\n    this.cells = [];\n    coordinates.forEach((cell) => {\n      this.cells.push({\n        cellCoordinates: cell,\n        cellIsHit: false,\n      });\n    });\n  }\n\n  hit(hitCoordinates) {\n    let thereIsAHit = false;\n    this.cells.forEach((cell) => {\n      if (cell.cellCoordinates[0] === hitCoordinates[0]\n        && cell.cellCoordinates[1] === hitCoordinates[1]) {\n        // eslint-disable-next-line no-param-reassign\n        cell.cellIsHit = true;\n        thereIsAHit = true;\n      }\n    });\n    return thereIsAHit;\n  }\n\n  isHit() {\n    let thisShipIsHit = false;\n    this.cells.forEach((cell) => {\n      if (cell.cellIsHit) thisShipIsHit = true;\n    });\n    return thisShipIsHit;\n  }\n\n  isSunk() {\n    let thisShipIsSunk = true;\n    this.cells.forEach((cell) => {\n      if (!cell.cellIsHit) thisShipIsSunk = false;\n    });\n    return thisShipIsSunk;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack:///./src/ship.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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