"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/sitemap.xml";
exports.ids = ["pages/sitemap.xml"];
exports.modules = {

/***/ "./pages/sitemap.xml.js":
/*!******************************!*\
  !*** ./pages/sitemap.xml.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Sitemap = ()=>{};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sitemap);\nconst getServerSideProps = async ({ res  })=>{\n    res.setHeader(\"Content-Type\", \"text/xml\");\n    res.write(`<?xml version=\"1.0\" encoding=\"UTF-8\"?>\\n`);\n    res.write(`<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\\n`);\n    // Add your website URLs here\n    const pages = [\n        \"/\",\n        \"/about\",\n        \"/product\",\n        \"/contact\"\n    ];\n    const baseUrl = \"https://rierefarm.com.ng\";\n    for (const page of pages){\n        const url = `${baseUrl}${page}`;\n        res.write(`<url><loc>${url}</loc></url>\\n`);\n    }\n    res.write(`</urlset>\\n`);\n    res.end();\n    return {\n        props: {}\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaXRlbWFwLnhtbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVDO0FBRXZDLE1BQU1DLE9BQU8sR0FBRyxJQUFNLEVBQUU7QUFFeEIsaUVBQWVBLE9BQU8sRUFBQztBQUVoQixNQUFNQyxrQkFBa0IsR0FBRyxPQUFPLEVBQUVDLEdBQUcsR0FBRSxHQUFLO0lBQ25EQSxHQUFHLENBQUNDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDMUNELEdBQUcsQ0FBQ0UsS0FBSyxDQUFDLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDO0lBQ3RERixHQUFHLENBQUNFLEtBQUssQ0FBQyxDQUFDLDhEQUE4RCxDQUFDLENBQUMsQ0FBQztJQUU1RSw2QkFBNkI7SUFDN0IsTUFBTUMsS0FBSyxHQUFHO1FBQUMsR0FBRztRQUFFLFFBQVE7UUFBRSxVQUFVO1FBQUUsVUFBVTtLQUFDO0lBRXJELE1BQU1DLE9BQU8sR0FBRywwQkFBMEI7SUFFMUMsS0FBSyxNQUFNQyxJQUFJLElBQUlGLEtBQUssQ0FBRTtRQUN4QixNQUFNRyxHQUFHLEdBQUcsQ0FBQyxFQUFFRixPQUFPLENBQUMsRUFBRUMsSUFBSSxDQUFDLENBQUM7UUFDL0JMLEdBQUcsQ0FBQ0UsS0FBSyxDQUFDLENBQUMsVUFBVSxFQUFFSSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztLQUM3QztJQUVETixHQUFHLENBQUNFLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDekJGLEdBQUcsQ0FBQ08sR0FBRyxFQUFFLENBQUM7SUFFVixPQUFPO1FBQUVDLEtBQUssRUFBRSxFQUFFO0tBQUUsQ0FBQztDQUN0QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzX3R1dG9yaWFsLy4vcGFnZXMvc2l0ZW1hcC54bWwuanM/ZDY4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuXHJcbmNvbnN0IFNpdGVtYXAgPSAoKSA9PiB7fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpdGVtYXA7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcmVzIH0pID0+IHtcclxuICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAndGV4dC94bWwnKTtcclxuICByZXMud3JpdGUoYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxcbmApO1xyXG4gIHJlcy53cml0ZShgPHVybHNldCB4bWxucz1cImh0dHA6Ly93d3cuc2l0ZW1hcHMub3JnL3NjaGVtYXMvc2l0ZW1hcC8wLjlcIj5cXG5gKTtcclxuXHJcbiAgLy8gQWRkIHlvdXIgd2Vic2l0ZSBVUkxzIGhlcmVcclxuICBjb25zdCBwYWdlcyA9IFsnLycsICcvYWJvdXQnLCAnL3Byb2R1Y3QnLCAnL2NvbnRhY3QnXTtcclxuXHJcbiAgY29uc3QgYmFzZVVybCA9ICdodHRwczovL3JpZXJlZmFybS5jb20ubmcnO1xyXG5cclxuICBmb3IgKGNvbnN0IHBhZ2Ugb2YgcGFnZXMpIHtcclxuICAgIGNvbnN0IHVybCA9IGAke2Jhc2VVcmx9JHtwYWdlfWA7XHJcbiAgICByZXMud3JpdGUoYDx1cmw+PGxvYz4ke3VybH08L2xvYz48L3VybD5cXG5gKTtcclxuICB9XHJcblxyXG4gIHJlcy53cml0ZShgPC91cmxzZXQ+XFxuYCk7XHJcbiAgcmVzLmVuZCgpO1xyXG5cclxuICByZXR1cm4geyBwcm9wczoge30gfTtcclxufTtcclxuIl0sIm5hbWVzIjpbIk5leHRBcGlSZXNwb25zZSIsIlNpdGVtYXAiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXMiLCJzZXRIZWFkZXIiLCJ3cml0ZSIsInBhZ2VzIiwiYmFzZVVybCIsInBhZ2UiLCJ1cmwiLCJlbmQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/sitemap.xml.js\n");

/***/ }),

/***/ "next":
/*!****************************************************!*\
  !*** external "next/dist/lib/import-next-warning" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("next/dist/lib/import-next-warning");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/sitemap.xml.js"));
module.exports = __webpack_exports__;

})();