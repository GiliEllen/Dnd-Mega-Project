"use strict";
exports.__esModule = true;
exports.UserValidation = void 0;
console.log('this is usersModel.ts');
var mongoose_1 = require("mongoose");
var joi_1 = require("joi");
var UserSchema = new mongoose_1["default"].Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roomID: {
        type: String,
        required: true
    },
    role: {
        "enum": ["user", "dm"],
        defualt: "user",
        type: String,
        required: true
    }
});
var UserModel = mongoose_1["default"].model('users', UserSchema);
exports["default"] = UserModel;
exports.UserValidation = joi_1["default"].object({
    username: joi_1["default"].string().required(),
    password: joi_1["default"].string().required(),
    roomID: joi_1["default"].string().required(),
    role: joi_1["default"].string().required()
});
