"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer_1 = __importDefault(require("nodemailer"));
var env_helper_1 = __importDefault(require("../utils/env.helper"));
var transport = nodemailer_1.default.createTransport({
    host: (0, env_helper_1.default)("MAIL_HOST"),
    port: parseInt((0, env_helper_1.default)("MAIL_PORT")),
    auth: {
        user: (0, env_helper_1.default)("MAIL_USER"),
        pass: (0, env_helper_1.default)("MAIL_PASS")
    }
});
exports.default = transport;
