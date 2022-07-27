"use strict";
exports.__esModule = true;
exports.UserValidation = void 0;
var mongoose_1 = require("mongoose");
var joi_1 = require("joi");
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
exports.UserValidation = joi_1["default"].object({
    name: joi_1["default"].string().required(),
    password: joi_1["default"].string().required()
});
