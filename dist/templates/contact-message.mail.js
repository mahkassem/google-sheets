"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactMessageMail = void 0;
var ContactMessageMail = function (req) {
    var _a;
    return ({
        from: "".concat(req.body.name, " <").concat(req.body.email, ">"),
        to: "Moola Pay <info@moolapay.io>",
        subject: "Contact Message: ".concat(req.body.name),
        text: "\n  <table>\n    <tr>\n      <td>Name</td>\n      <td>".concat(req.body.name, "</td>\n    </tr>\n    <tr>\n      <td>Email</td>\n      <td>").concat(req.body.email, "</td>\n    </tr>\n    <tr>\n      <td>Phone</td>\n      <td>").concat(req.body.phone, "</td>\n    </tr>\n    <tr>\n      <td>Company Size</td>\n      <td>").concat((_a = req.body.company_size) !== null && _a !== void 0 ? _a : 'Not Provided', "</td>\n    </tr>\n    <tr>\n      <td>Message</td>\n      <td>").concat(req.body.message, "</td>\n    </tr>\n  ")
    });
};
exports.ContactMessageMail = ContactMessageMail;
