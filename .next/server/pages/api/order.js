"use strict";
(() => {
var exports = {};
exports.id = 626;
exports.ids = [626];
exports.modules = {

/***/ 2663:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 7938:
/***/ ((module) => {

module.exports = require("mongoose-sequence");

/***/ }),

/***/ 6125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2663);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const AutoIncrement = __webpack_require__(7938)((mongoose__WEBPACK_IMPORTED_MODULE_0___default()));
const orderSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    name: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    }
}, {
    timestamps: true
});
const Order = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Order) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Order", orderSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);


/***/ }),

/***/ 6935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4323);
/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6125);


async function handler(req, res) {
    await _utils_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].connect */ .Z.connect();
    if (req.method === "GET") {
        try {
            // fetch all user
            let order = await _models_Order__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find();
            if (order) {
                await _utils_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].disconnect */ .Z.disconnect();
                return res.status(200).json({
                    data: order
                });
            }
        } catch (err) {
            res.status(500).json({
                message: "Server error"
            });
        }
    }
    if (req.method === "POST") {
        const { id , name , productName  } = req.body;
        await _utils_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].connect */ .Z.connect();
        try {
            let order1 = new _models_Order__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({
                id,
                name,
                productName
            });
            //save to db
            await order1.save();
            res.status(200).json({
                message: "successful"
            });
            await _utils_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].disconnect */ .Z.disconnect();
        } catch (err1) {
            res.status(500).json({
                message: "server error, please try again"
            });
        }
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [323], () => (__webpack_exec__(6935)));
module.exports = __webpack_exports__;

})();