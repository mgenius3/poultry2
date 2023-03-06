"use strict";
exports.id = 323;
exports.ids = [323];
exports.modules = {

/***/ 4323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2663);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connection = {};
async function connect() {
    if (connection.isConnected) {
        return;
    }
    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections.length) > 0) {
        connection.isConnected = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState);
        if (connection.isConnected === 1) {
            return;
        }
        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();
    }
    const db =  true ? await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI) : 0;
    connection.isConnected = db.connections[0].readyState;
}
async function disconnect() {
    if (connection.isConnected) {
        if (true) {
            await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();
            connection.isConnected = false;
        } else {}
    }
}
function convertDocToObj(doc) {
    doc._id = doc._id.toString();
    doc.createdAt = doc.createdAt.toString();
    doc.updatedAt = doc.updatedAt.toString();
    return doc;
}
const db = {
    connect,
    disconnect,
    convertDocToObj
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);


/***/ })

};
;