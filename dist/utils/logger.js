"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.info = function (message) {
        console.log("INFO: ".concat(message));
    };
    return Logger;
}());
exports.default = Logger;
