(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/_core-js@3.6.4@core-js/internals/array-for-each.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/internals/array-for-each.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/_core-js@3.6.4@core-js/internals/array-iteration.js\").forEach;\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/_core-js@3.6.4@core-js/internals/array-method-is-strict.js\");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/_core-js@3.6.4@core-js/internals/array-method-uses-to-length.js\");\n\nvar STRICT_METHOD = arrayMethodIsStrict('forEach');\nvar USES_TO_LENGTH = arrayMethodUsesToLength('forEach');\n\n// `Array.prototype.forEach` method implementation\n// https://tc39.github.io/ecma262/#sec-array.prototype.foreach\nmodule.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {\n  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n} : [].forEach;\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.4@core-js/internals/array-for-each.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.array.filter.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.array.filter.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/_core-js@3.6.4@core-js/internals/export.js\");\nvar $filter = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/_core-js@3.6.4@core-js/internals/array-iteration.js\").filter;\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/_core-js@3.6.4@core-js/internals/array-method-has-species-support.js\");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/_core-js@3.6.4@core-js/internals/array-method-uses-to-length.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');\n// Edge 14- issue\nvar USES_TO_LENGTH = arrayMethodUsesToLength('filter');\n\n// `Array.prototype.filter` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.filter\n// with adding support of @@species\n$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {\n  filter: function filter(callbackfn /* , thisArg */) {\n    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.4@core-js/modules/es.array.filter.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.array.for-each.js":
/*!**************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.array.for-each.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/_core-js@3.6.4@core-js/internals/export.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/_core-js@3.6.4@core-js/internals/array-for-each.js\");\n\n// `Array.prototype.forEach` method\n// https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {\n  forEach: forEach\n});\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.4@core-js/modules/es.array.for-each.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/es.string.match.js":
/*!************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/es.string.match.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"./node_modules/_core-js@3.6.4@core-js/internals/fix-regexp-well-known-symbol-logic.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/_core-js@3.6.4@core-js/internals/an-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/_core-js@3.6.4@core-js/internals/to-length.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/_core-js@3.6.4@core-js/internals/require-object-coercible.js\");\nvar advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ \"./node_modules/_core-js@3.6.4@core-js/internals/advance-string-index.js\");\nvar regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"./node_modules/_core-js@3.6.4@core-js/internals/regexp-exec-abstract.js\");\n\n// @@match logic\nfixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {\n  return [\n    // `String.prototype.match` method\n    // https://tc39.github.io/ecma262/#sec-string.prototype.match\n    function match(regexp) {\n      var O = requireObjectCoercible(this);\n      var matcher = regexp == undefined ? undefined : regexp[MATCH];\n      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));\n    },\n    // `RegExp.prototype[@@match]` method\n    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match\n    function (regexp) {\n      var res = maybeCallNative(nativeMatch, regexp, this);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n\n      if (!rx.global) return regExpExec(rx, S);\n\n      var fullUnicode = rx.unicode;\n      rx.lastIndex = 0;\n      var A = [];\n      var n = 0;\n      var result;\n      while ((result = regExpExec(rx, S)) !== null) {\n        var matchStr = String(result[0]);\n        A[n] = matchStr;\n        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);\n        n++;\n      }\n      return n === 0 ? null : A;\n    }\n  ];\n});\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.4@core-js/modules/es.string.match.js?");

/***/ }),

/***/ "./node_modules/_core-js@3.6.4@core-js/modules/web.dom-collections.for-each.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/_core-js@3.6.4@core-js/modules/web.dom-collections.for-each.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/_core-js@3.6.4@core-js/internals/global.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/_core-js@3.6.4@core-js/internals/dom-iterables.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/_core-js@3.6.4@core-js/internals/array-for-each.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/_core-js@3.6.4@core-js/internals/create-non-enumerable-property.js\");\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n  // some Chrome versions have non-configurable methods on DOMTokenList\n  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {\n    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);\n  } catch (error) {\n    CollectionPrototype.forEach = forEach;\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/_core-js@3.6.4@core-js/modules/web.dom-collections.for-each.js?");

/***/ }),

/***/ "./src/api/welfare.js":
/*!****************************!*\
  !*** ./src/api/welfare.js ***!
  \****************************/
/*! exports provided: getEntry, getEntryData, getPosterData, getLink, getId, getShareData, getWebLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEntry\", function() { return getEntry; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEntryData\", function() { return getEntryData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPosterData\", function() { return getPosterData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLink\", function() { return getLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getId\", function() { return getId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getShareData\", function() { return getShareData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWebLink\", function() { return getWebLink; });\n/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ \"./src/utils/request.js\");\n // 落地页入口\n\nvar getEntry = function getEntry(data) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: '/Welfare/getEntrance',\n    method: 'post',\n    data: data\n  });\n}; // 落地页数据\n\nvar getEntryData = function getEntryData(data) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: '/Welfare/index',\n    method: 'post',\n    data: data\n  });\n}; // 海报参数\n\nvar getPosterData = function getPosterData(data) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: '/Welfare/getPosterParams',\n    method: 'post',\n    data: data\n  });\n}; // 懒人福利社链接\n\nvar getLink = function getLink(data) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: '/Lazy/getLazyUrl',\n    method: 'post',\n    data: data\n  });\n}; // 199礼包id\n\nvar getId = function getId(data) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: '/Welfare/handleCard',\n    method: 'post',\n    data: data\n  });\n}; // 分享\n\nvar getShareData = function getShareData(data) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: '/Welfare/getShare',\n    method: 'post',\n    data: data\n  });\n}; // 获取webview链接\n\nvar getWebLink = function getWebLink(data) {\n  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    url: '/Welfare/getWelfareUrl',\n    method: 'post',\n    data: data\n  });\n};\n\n//# sourceURL=webpack:///./src/api/welfare.js?");

/***/ }),

/***/ "./src/assets/welfare/aiqiyi.jpg":
/*!***************************************!*\
  !*** ./src/assets/welfare/aiqiyi.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/aiqiyi.2bb62a1b.jpg\";\n\n//# sourceURL=webpack:///./src/assets/welfare/aiqiyi.jpg?");

/***/ }),

/***/ "./src/assets/welfare/bishengke.png":
/*!******************************************!*\
  !*** ./src/assets/welfare/bishengke.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/bishengke.b48eac5d.png\";\n\n//# sourceURL=webpack:///./src/assets/welfare/bishengke.png?");

/***/ }),

/***/ "./src/assets/welfare/canying.png":
/*!****************************************!*\
  !*** ./src/assets/welfare/canying.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/canying.eeb6ccf3.png\";\n\n//# sourceURL=webpack:///./src/assets/welfare/canying.png?");

/***/ }),

/***/ "./src/assets/welfare/caocao.png":
/*!***************************************!*\
  !*** ./src/assets/welfare/caocao.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/caocao.523d1df8.png\";\n\n//# sourceURL=webpack:///./src/assets/welfare/caocao.png?");

/***/ }),

/***/ "./src/assets/welfare/car.png":
/*!************************************!*\
  !*** ./src/assets/welfare/car.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/car.7c093b58.png\";\n\n//# sourceURL=webpack:///./src/assets/welfare/car.png?");

/***/ }),

/***/ "./src/assets/welfare/coco.png":
/*!*************************************!*\
  !*** ./src/assets/welfare/coco.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/coco.8fc00bce.png\";\n\n//# sourceURL=webpack:///./src/assets/welfare/coco.png?");

/***/ }),

/***/ "./src/assets/welfare/didi.png":
/*!*************************************!*\
  !*** ./src/assets/welfare/didi.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/didi.b80ea5ef.png\";\n\n//# sourceURL=webpack:///./src/assets/welfare/didi.png?");

/***/ }),

/***/ "./src/assets/welfare/elem.png":
/*!*************************************!*\
  !*** ./src/assets/welfare/elem.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/elem.6dd2846d.png\";\n\n//# sourceURL=webpack:///./src/assets/welfare/elem.png?");

/***/ }),

/***/ "./src/assets/welfare/gongfu.png":
/*!***************************************!*\
  !*** ./src/assets/welfare/gongfu.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/gongfu.e0fbbd5e.png\";\n\n//# sourceURL=webpack:///./src/assets/welfare/gongfu.png?");

/***/ }),

/***/ "./src/assets/welfare/hanbaowang.png":
/*!*******************************************!*\
  !*** ./src/assets/welfare/hanbaowang.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/hanbaowang.f21bb4d8.png\";\n\n//# sourceURL=webpack:///./src/assets/welfare/hanbaowang.png?");

/***/ }),

/***/ "./src/assets/welfare/huafei.png":
/*!***************************************!*\
  !*** ./src/assets/welfare/huafei.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/huafei.09e49ec1.png\";\n\n//# sourceURL=webpack:///./src/assets/welfare/huafei.png?");

/***/ }),

/***/ "./src/assets/welfare/jiayou.png":
/*!***************************************!*\
  !*** ./src/assets/welfare/jiayou.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/jiayou.6642d04c.png\";\n\n//# sourceURL=webpack:///./src/assets/welfare/jiayou.png?");

/***/ }),

/***/ "./src/assets/welfare/kfc.png":
/*!************************************!*\
  !*** ./src/assets/welfare/kfc.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/kfc.761a83c1.png\";\n\n//# sourceURL=webpack:///./src/assets/welfare/kfc.png?");

/***/ }),

/***/ "./src/assets/welfare/liang.png":
/*!**************************************!*\
  !*** ./src/assets/welfare/liang.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/liang.d7e65f76.png\";\n\n//# sourceURL=webpack:///./src/assets/welfare/liang.png?");

/***/ }),

/***/ "./src/assets/welfare/maidanglao.png":
/*!*******************************************!*\
  !*** ./src/assets/welfare/maidanglao.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/maidanglao.d201ab46.png\";\n\n//# sourceURL=webpack:///./src/assets/welfare/maidanglao.png?");

/***/ }),

/***/ "./src/assets/welfare/maoyan.png":
/*!***************************************!*\
  !*** ./src/assets/welfare/maoyan.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/maoyan.09387fbd.png\";\n\n//# sourceURL=webpack:///./src/assets/welfare/maoyan.png?");

/***/ }),

/***/ "./src/assets/welfare/meituan.jpg":
/*!****************************************!*\
  !*** ./src/assets/welfare/meituan.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/meituan.02e73c6b.jpg\";\n\n//# sourceURL=webpack:///./src/assets/welfare/meituan.jpg?");

/***/ }),

/***/ "./src/assets/welfare/more.png":
/*!*************************************!*\
  !*** ./src/assets/welfare/more.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/more.8010e8e8.png\";\n\n//# sourceURL=webpack:///./src/assets/welfare/more.png?");

/***/ }),

/***/ "./src/assets/welfare/more2.png":
/*!**************************************!*\
  !*** ./src/assets/welfare/more2.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/more2.d0d33559.png\";\n\n//# sourceURL=webpack:///./src/assets/welfare/more2.png?");

/***/ }),

/***/ "./src/assets/welfare/oil.png":
/*!************************************!*\
  !*** ./src/assets/welfare/oil.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/oil.c616e698.png\";\n\n//# sourceURL=webpack:///./src/assets/welfare/oil.png?");

/***/ }),

/***/ "./src/assets/welfare/ruixing.jpg":
/*!****************************************!*\
  !*** ./src/assets/welfare/ruixing.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/ruixing.511ff8c3.jpg\";\n\n//# sourceURL=webpack:///./src/assets/welfare/ruixing.jpg?");

/***/ }),

/***/ "./src/assets/welfare/shangchao.png":
/*!******************************************!*\
  !*** ./src/assets/welfare/shangchao.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/shangchao.055e6f75.png\";\n\n//# sourceURL=webpack:///./src/assets/welfare/shangchao.png?");

/***/ }),

/***/ "./src/assets/welfare/tengxun.png":
/*!****************************************!*\
  !*** ./src/assets/welfare/tengxun.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/tengxun.d954db5e.png\";\n\n//# sourceURL=webpack:///./src/assets/welfare/tengxun.png?");

/***/ }),

/***/ "./src/assets/welfare/video.png":
/*!**************************************!*\
  !*** ./src/assets/welfare/video.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/video.1d88175d.png\";\n\n//# sourceURL=webpack:///./src/assets/welfare/video.png?");

/***/ }),

/***/ "./src/assets/welfare/xingbake.jpg":
/*!*****************************************!*\
  !*** ./src/assets/welfare/xingbake.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/xingbake.1abcad48.jpg\";\n\n//# sourceURL=webpack:///./src/assets/welfare/xingbake.jpg?");

/***/ }),

/***/ "./src/assets/welfare/youku.png":
/*!**************************************!*\
  !*** ./src/assets/welfare/youku.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/youku.e4d0cb5d.png\";\n\n//# sourceURL=webpack:///./src/assets/welfare/youku.png?");

/***/ }),

/***/ "./src/utils/brand.js":
/*!****************************!*\
  !*** ./src/utils/brand.js ***!
  \****************************/
/*! exports provided: sortBrand, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortBrand\", function() { return sortBrand; });\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ \"./node_modules/_core-js@3.6.4@core-js/modules/es.array.filter.js\");\n/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ \"./node_modules/_core-js@3.6.4@core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/_core-js@3.6.4@core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// 1. 加油7折起：中石油、中石化、壳牌等加油站\n// 2. 影音票务5折起：腾讯视频、优酷、爱奇艺、蜻蜓fm、猫眼电影等\n// 3. 餐饮小食5折起：星巴克、肯德基、麦当劳、汉堡王、luckin咖啡等\n// 4. 出行差旅5折起：滴滴出行、神州专车、泊安飞等\n// 5. 商超9.65折起：永辉、华润万家、家乐福、沃尔玛、麦德龙等 （上线中）\n// 6.加油卡94折：中石油加油卡 （上线中）\n// 7.话费慢充 95折 ：中国移动（上线中）\n\n/* eslint-disable global-require */\nvar defaultBrands = [{\n  id: 1,\n  name: '加油',\n  path: '/oil/home',\n  discount: '7折起',\n  icon: __webpack_require__(/*! ../assets/welfare/jiayou.png */ \"./src/assets/welfare/jiayou.png\")\n}, {\n  id: 2,\n  name: '星巴克',\n  path: '/coupons/brand/goods?bid=1&cateId=106',\n  discount: '8折起',\n  icon: __webpack_require__(/*! ../assets/welfare/xingbake.jpg */ \"./src/assets/welfare/xingbake.jpg\")\n}, {\n  id: 3,\n  name: '肯德基',\n  path: '/coupons/brand/goods?bid=2&cateId=106',\n  discount: '5折起',\n  icon: __webpack_require__(/*! ../assets/welfare/kfc.png */ \"./src/assets/welfare/kfc.png\")\n}, {\n  id: 4,\n  name: '瑞幸咖啡',\n  path: '/coupons/brand/goods?bid=11&cateId=106',\n  discount: '55折起',\n  icon: __webpack_require__(/*! ../assets/welfare/ruixing.jpg */ \"./src/assets/welfare/ruixing.jpg\")\n}, {\n  id: 5,\n  name: '麦当劳',\n  path: '/coupons/brand/goods?bid=3&cateId=106',\n  discount: '6折起',\n  icon: __webpack_require__(/*! ../assets/welfare/maidanglao.png */ \"./src/assets/welfare/maidanglao.png\")\n}, {\n  id: 6,\n  name: '滴滴出行',\n  path: '/coupons/brand/goods?bid=28&cateId=109',\n  discount: '85折起',\n  icon: __webpack_require__(/*! ../assets/welfare/didi.png */ \"./src/assets/welfare/didi.png\")\n}, {\n  id: 7,\n  name: '美团外卖',\n  path: '/coupons/brand/goods?bid=38&cateId=106',\n  discount: '75折起',\n  icon: __webpack_require__(/*! ../assets/welfare/meituan.jpg */ \"./src/assets/welfare/meituan.jpg\")\n}, {\n  id: 8,\n  name: '充值',\n  path: '',\n  discount: '95折',\n  icon: __webpack_require__(/*! ../assets/welfare/huafei.png */ \"./src/assets/welfare/huafei.png\")\n}, {\n  id: 9,\n  name: '优酷',\n  path: '/coupons/brand/goods?bid=49&cateId=107',\n  discount: '5折起',\n  icon: __webpack_require__(/*! ../assets/welfare/youku.png */ \"./src/assets/welfare/youku.png\")\n}, {\n  id: 10,\n  name: '餐饮美食',\n  path: '/coupons/cate/106',\n  discount: '5折起',\n  icon: __webpack_require__(/*! ../assets/welfare/canying.png */ \"./src/assets/welfare/canying.png\")\n}, {\n  id: 11,\n  name: '打车出行',\n  path: '/coupons/cate/109',\n  discount: '5折起',\n  icon: __webpack_require__(/*! ../assets/welfare/car.png */ \"./src/assets/welfare/car.png\")\n}, {\n  id: 12,\n  name: '商超便利',\n  path: '/coupons/cate/108',\n  discount: '9.65折起',\n  icon: __webpack_require__(/*! ../assets/welfare/shangchao.png */ \"./src/assets/welfare/shangchao.png\")\n}, {\n  id: 13,\n  name: '视频娱乐',\n  path: '/coupons/cate/107',\n  discount: '5折起',\n  icon: __webpack_require__(/*! ../assets/welfare/video.png */ \"./src/assets/welfare/video.png\")\n}, {\n  id: 14,\n  name: '加油',\n  path: '/oil/home',\n  discount: '5折起',\n  icon: __webpack_require__(/*! ../assets/welfare/oil.png */ \"./src/assets/welfare/oil.png\")\n}, {\n  id: 15,\n  name: '更多优惠',\n  path: '/coupons/cate/110',\n  discount: '5折起',\n  icon: __webpack_require__(/*! ../assets/welfare/more.png */ \"./src/assets/welfare/more.png\")\n}, {\n  id: 16,\n  name: '话费',\n  path: '',\n  discount: '95折',\n  icon: __webpack_require__(/*! ../assets/welfare/huafei.png */ \"./src/assets/welfare/huafei.png\")\n}, {\n  id: 17,\n  name: '腾讯视频',\n  path: '/coupons/brand/goods?bid=52&cateId=107',\n  discount: '5折起',\n  icon: __webpack_require__(/*! ../assets/welfare/tengxun.png */ \"./src/assets/welfare/tengxun.png\")\n}, {\n  id: 18,\n  name: '猫眼电影',\n  path: '/coupons/brand/goods?bid=62&cateId=107',\n  discount: '4折起',\n  icon: __webpack_require__(/*! ../assets/welfare/maoyan.png */ \"./src/assets/welfare/maoyan.png\")\n}, {\n  id: 19,\n  name: '汉堡王',\n  path: '/coupons/brand/goods?bid=5&cateId=106',\n  discount: '8折起',\n  icon: __webpack_require__(/*! ../assets/welfare/hanbaowang.png */ \"./src/assets/welfare/hanbaowang.png\")\n}, {\n  id: 20,\n  name: '良品铺子',\n  path: '/coupons/brand/goods?bid=19&cateId=106',\n  discount: '最高减50元',\n  icon: __webpack_require__(/*! ../assets/welfare/liang.png */ \"./src/assets/welfare/liang.png\")\n}, {\n  id: 21,\n  name: '饿了么',\n  path: '/coupons/brand/goods?bid=41&cateId=106',\n  discount: '7折起',\n  icon: __webpack_require__(/*! ../assets/welfare/elem.png */ \"./src/assets/welfare/elem.png\")\n}, {\n  id: 22,\n  name: '曹操出行',\n  path: '/coupons/brand/goods?bid=32&cateId=109',\n  discount: '9折起',\n  icon: __webpack_require__(/*! ../assets/welfare/caocao.png */ \"./src/assets/welfare/caocao.png\")\n}, {\n  id: 23,\n  name: '真功夫',\n  path: '/coupons/brand/goods?bid=20&cateId=106',\n  discount: '3折起',\n  icon: __webpack_require__(/*! ../assets/welfare/gongfu.png */ \"./src/assets/welfare/gongfu.png\")\n}, {\n  id: 24,\n  name: 'coco都可',\n  path: '/coupons/brand/goods?bid=6&cateId=106',\n  discount: '9折起',\n  icon: __webpack_require__(/*! ../assets/welfare/coco.png */ \"./src/assets/welfare/coco.png\")\n}, {\n  id: 25,\n  name: '必胜客',\n  path: '/coupons/brand/goods?bid=4&cateId=106',\n  discount: '8折起',\n  icon: __webpack_require__(/*! ../assets/welfare/bishengke.png */ \"./src/assets/welfare/bishengke.png\")\n}, {\n  id: 26,\n  name: '查看更多',\n  path: '/coupons/home',\n  discount: '',\n  icon: __webpack_require__(/*! ../assets/welfare/more2.png */ \"./src/assets/welfare/more2.png\")\n}, {\n  id: 27,\n  name: '爱奇艺',\n  path: '/coupons/brand/goods?bid=48&cateId=107',\n  discount: '4折起',\n  icon: __webpack_require__(/*! ../assets/welfare/aiqiyi.jpg */ \"./src/assets/welfare/aiqiyi.jpg\")\n}]; // 根据id排序\n\nvar sortBrand = function sortBrand(ids) {\n  var brands = [];\n  ids.forEach(function (id) {\n    var brandItem = defaultBrands.filter(function (item) {\n      return item.id === id;\n    })[0];\n\n    if (brandItem) {\n      brands.push(brandItem);\n    }\n  });\n  return brands;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (defaultBrands);\n\n//# sourceURL=webpack:///./src/utils/brand.js?");

/***/ }),

/***/ "./src/utils/connectWebViewJavascriptBridge.js":
/*!*****************************************************!*\
  !*** ./src/utils/connectWebViewJavascriptBridge.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return connectWebViewJavascriptBridge; });\n/* harmony import */ var _devices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devices */ \"./src/utils/devices.js\");\n/* eslint-disable no-undef */\n\n/**\r\n * 与iOS、Android交互 （https://github.com/marcuswestin/WebViewJavascriptBridge?tdsourcetag=s_pctim_aiomsg）\r\n * connectWebViewJavascriptBridge(function(bridge) {\r\n *\r\n *\r\n            bridge.registerHandler(\"functionInJs\", function(data, responseCallback) {\r\n                document.getElementById(\"show\").innerHTML = (\"data from Java: = \" + data);\r\n                if (responseCallback) {\r\n                    var responseData = \"Javascript Says Right back aka!\";\r\n                    responseCallback(responseData);\r\n                }\r\n            });\r\n            bridge.callHandler(\r\n                'submitFromWeb'\r\n                , {'param': '中文测试'}\r\n                , function(responseData) {\r\n                    document.getElementById(\"show\").innerHTML = \"send get responseData from java, data = \" + responseData\r\n                }\r\n            );\r\n        })\r\n *\r\n */\n\nvar isInit = false;\nfunction connectWebViewJavascriptBridge(callback) {\n  if (_devices__WEBPACK_IMPORTED_MODULE_0__[\"isIOS\"]) {\n    if (window.WebViewJavascriptBridge) {\n      return callback(WebViewJavascriptBridge);\n    }\n\n    if (window.WVJBCallbacks) {\n      return window.WVJBCallbacks.push(callback);\n    }\n\n    window.WVJBCallbacks = [callback];\n    var WVJBIframe = document.createElement('iframe');\n    WVJBIframe.style.display = 'none';\n    WVJBIframe.src = 'https://__bridge_loaded__';\n    document.documentElement.appendChild(WVJBIframe);\n    setTimeout(function () {\n      document.documentElement.removeChild(WVJBIframe);\n    }, 0);\n  } else if (_devices__WEBPACK_IMPORTED_MODULE_0__[\"isAndroid\"]) {\n    if (window.WebViewJavascriptBridge) {\n      // android首次加载需要先执行init\n      if (!isInit) {\n        WebViewJavascriptBridge.init(function (message, responseCallback) {\n          responseCallback();\n        });\n        isInit = true;\n      }\n\n      callback(WebViewJavascriptBridge);\n    } else {\n      document.addEventListener('WebViewJavascriptBridgeReady', function () {\n        // android首次加载需要先执行init\n        if (!isInit) {\n          WebViewJavascriptBridge.init(function (message, responseCallback) {\n            responseCallback();\n          });\n          isInit = true;\n        }\n\n        callback(WebViewJavascriptBridge);\n      }, false);\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/utils/connectWebViewJavascriptBridge.js?");

/***/ }),

/***/ "./src/utils/devices.js":
/*!******************************!*\
  !*** ./src/utils/devices.js ***!
  \******************************/
/*! exports provided: default, isAndroid, isIOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getDevicesModel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isAndroid\", function() { return isAndroid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isIOS\", function() { return isIOS; });\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of */ \"./node_modules/_core-js@3.6.4@core-js/modules/es.array.index-of.js\");\n/* harmony import */ var core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ \"./node_modules/_core-js@3.6.4@core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.match */ \"./node_modules/_core-js@3.6.4@core-js/modules/es.string.match.js\");\n/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction getDevicesModel() {\n  var model = '';\n  var events = navigator.userAgent;\n\n  if (events.indexOf('Android') > -1 || events.indexOf('Linux') > -1 || events.indexOf('Adr') > -1) {\n    model = 'Android';\n  } else if (events.indexOf('iPhone') > -1) {\n    // 根据尺寸进行判断 苹果的型号\n    if (window.screen.height === 812 && window.screen.width === 375) {\n      // 进行操作，改变样式\n      console.log('苹果X');\n      model = 'iPhoneX';\n    } else if (window.screen.height === 736 && window.screen.width === 414) {\n      model = 'iPhone7P - iPhone8P - iPhone6';\n    } else if (window.screen.height === 667 && window.screen.width === 375) {\n      model = 'iPhone7 - iPhone8 - iPhone6';\n    } else if (window.screen.height === 568 && window.screen.width === 320) {\n      model = 'iPhone5';\n    } else {\n      model = 'iPhone4';\n    }\n  } else if (events.indexOf('Windows Phone') > -1) {\n    model = 'Windows Phone';\n  } else if (events.indexOf('iPad') > -1) {\n    model = 'iPad';\n  }\n\n  return model;\n}\nvar ua = window.navigator.userAgent;\nvar isAndroid = ua.indexOf('Android') > -1;\nvar isIOS = !!ua.match(/\\(i[^;]+;( U;)? CPU.+Mac OS X/);\n\n//# sourceURL=webpack:///./src/utils/devices.js?");

/***/ })

}]);