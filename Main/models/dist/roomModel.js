"use strict";
exports.__esModule = true;
exports.RoomValidation = void 0;
var mongoose_1 = require("mongoose");
var joi_1 = require("joi");
var joi_password_1 = require("joi-password");
var joiPassword = joi_1["default"].extend(joi_password_1.joiPasswordExtendCore);
var RoomSchema = new mongoose_1["default"].Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
var RoomModel = mongoose_1["default"].model('Rooms', RoomSchema);
exports["default"] = RoomModel;
exports.RoomValidation = joi_1["default"].object({
    name: joi_1["default"].string().required(),
    password: joiPassword
        .string()
        .min(6)
        .max(16)
        .minOfSpecialCharacters(1)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .noWhiteSpaces()
        .required()
});
