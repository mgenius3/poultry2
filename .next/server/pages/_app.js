"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next-auth/react"
const react_namespaceObject = require("next-auth/react");
;// CONCATENATED MODULE: ./pages/_app.js

// import Layout from '@/components/Layout';
// import SEO from '/components/SEO';
// import '@/styles/globals.css';
// import Layout from '../components/Layout';


function MyApp({ Component , pageProps: { ...pageProps }  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.SessionProvider, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6419));
module.exports = __webpack_exports__;

})();