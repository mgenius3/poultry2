"use strict";
(() => {
var exports = {};
exports.id = 370;
exports.ids = [370];
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

/***/ 6928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4323);
/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6125);


async function handler(req, res) {
    if (req.method === "POST") {
        const { id  } = req.body;
        await _utils_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].connect */ .Z.connect();
        try {
            //save to db
            let update = await _models_Order__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOneAndUpdate */ .Z.findOneAndUpdate({
                id
            }, {
                status: "complete"
            });
            if (update) res.status(200).json({
                message: "update successfully"
            });
            else {
                res.status(404).json({
                    message: "update unsuccessful"
                });
            }
            await _utils_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].disconnect */ .Z.disconnect();
        } catch (err) {
            res.status(500).json({
                message: "server error, please try again"
            });
            await _utils_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].disconnect */ .Z.disconnect();
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
var __webpack_exports__ = __webpack_require__.X(0, [323], () => (__webpack_exec__(6928)));
module.exports = __webpack_exports__;

})();