"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var contact_message_controller_1 = require("../../controllers/api/contact-message.controller");
var router = (0, express_1.Router)();
router.get('/', function (req, res) {
    return res.send('Hello World!');
});
router.post('/contact-message', contact_message_controller_1.sendMessage);
router.get('/contact-message', contact_message_controller_1.getMessages);
exports.default = router;
