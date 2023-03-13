"use strict";
exports.id = 449;
exports.ids = [449];
exports.modules = {

/***/ 3449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);

const data = {
    users: [
        {
            name: "moses",
            email: "benmos16@gmail.com",
            password: bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().hashSync("123456"),
            isAdmin: true
        },
        {
            name: "Jane",
            email: "user@example.com",
            password: bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().hashSync("123456"),
            isAdmin: false
        }, 
    ],
    products: [
        {
            name: "Cat fish",
            image: "/images/Catfish-Farming.jpg",
            slug: "cat_fish"
        },
        {
            name: "Eggs",
            image: "/images/Eggs.jpg",
            slug: "eggs"
        },
        {
            name: "Boilers",
            image: "/images/boilers.jpg",
            slug: "boilers"
        },
        {
            name: "Chicks",
            image: "/images/chicks.jpg",
            slug: "chicks"
        },
        {
            name: "Layers",
            image: "/images/Layer.jpg",
            slug: "layers"
        },
        {
            name: "Cockerel",
            image: "/images/cockerel.jpg",
            slug: "cockerel"
        }, 
    ]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);


/***/ })

};
;