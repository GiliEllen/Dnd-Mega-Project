"use strict";
exports.__esModule = true;
exports.UserValidation = void 0;
var mongoose_1 = require("mongoose");
var joi_1 = require("joi");
var MemberSchema = new mongoose_1["default"].Schema({
    room: {
        type: Object,
        required: true
    },
    user: {
        type: Object,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});
var MemberModel = mongoose_1["default"].model('Memmber', MemberSchema);
exports["default"] = MemberModel;
exports.UserValidation = joi_1["default"].object({
    room: joi_1["default"].object().required(),
    user: joi_1["default"].object().required(),
    role: joi_1["default"].string().required()
});
