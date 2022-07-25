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
    isNew: {
        type: Boolean
    },
    userListID: {
        type: Array
    }
});
var RoomModel = mongoose_1["default"].model('Rooms', RoomSchema);
exports["default"] = RoomModel;
exports.UserValidation = joi_1["default"].object({
    name: joi_1["default"].string().required(),
    isNew: joi_1["default"].boolean()
});
