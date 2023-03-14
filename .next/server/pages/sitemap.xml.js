"use strict";
(() => {
var exports = {};
exports.id = 164;
exports.ids = [164];
exports.modules = {

/***/ 3134:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
// import { NextApiResponse } from 'next';
const Sitemap = ()=>{};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sitemap);
const getServerSideProps = async ({ res  })=>{
    res.setHeader("Content-Type", "text/xml");
    res.write(`<?xml version="1.0" encoding="UTF-8"?>\n`);
    res.write(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`);
    // Add your website URLs here
    const pages = [
        "/",
        "/about",
        "/product",
        "/contact"
    ];
    const baseUrl = "https://rierefarm.com.ng";
    for (const page of pages){
        const url = `${baseUrl}${page}`;
        res.write(`<url><loc>${url}</loc></url>\n`);
    }
    res.write(`</urlset>\n`);
    res.end();
    return {
        props: {}
    };
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3134));
module.exports = __webpack_exports__;

})();