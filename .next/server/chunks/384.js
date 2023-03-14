"use strict";
exports.id = 384;
exports.ids = [384];
exports.modules = {

/***/ 1384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3449);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




// import { useSession } from 'next-auth/react';
function Product() {
    const { 0: newData , 1: setNewData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_data__WEBPACK_IMPORTED_MODULE_2__/* ["default"].products */ .Z.products);
    const { 0: session , 1: setSession  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setSession(JSON.parse(sessionStorage.getItem("user")));
    }, []);
    const handleProductData = (e)=>{
        if (!e.target.value || e.target.value == "") return setNewData(_utils_data__WEBPACK_IMPORTED_MODULE_2__/* ["default"].products */ .Z.products);
        else {
            let a = _utils_data__WEBPACK_IMPORTED_MODULE_2__/* ["default"].products.filter */ .Z.products.filter((product)=>{
                if (product?.name.toLowerCase().includes(e.target.value.toLowerCase()) == true) return true;
                return false;
            });
            setNewData(a);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
            className: "bg-white py-8",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container mx-auto flex items-center flex-wrap pt-4 pb-12 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                        id: "store",
                        className: "w-full z-30 top-0 px-6 py-1 sh",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl",
                                    href: "#",
                                    children: "Poultry Product"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center",
                                    id: "store-nav-content",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            placeholder: "search",
                                            onChange: handleProductData
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "pl-3 inline-block no-underline hover:text-black flex items-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                className: "fill-current hover:text-black",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                width: "24",
                                                height: "24",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                    d: "M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    newData.map((product, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: `/product/${product?.slug}`,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: session?.name ? `https://wa.me/2347032273102/?text=poultry:${product?.name}` : "/login",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "hover:grow hover:shadow-lg",
                                            src: product?.image
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "pt-3 flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "",
                                                children: product?.name
                                            }),
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                className: "primary-button",
                                                type: "submit",
                                                children: [
                                                    " ",
                                                    "Book Now",
                                                    " "
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }, product?.slug)
                        }, i))
                ]
            })
        })
    });
};


/***/ })

};
;