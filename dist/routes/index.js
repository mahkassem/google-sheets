"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app_routes_1 = __importDefault(require("./api/app.routes"));
var router = (0, express_1.Router)();
router.get('/', function (req, res) {
    return res.send('Google Sheets API!');
});
router.use('/api', app_routes_1.default);
exports.default = router;
