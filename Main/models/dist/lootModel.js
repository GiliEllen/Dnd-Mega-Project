"use strict";
exports.__esModule = true;
exports.UserValidation = void 0;
console.log('this is lootModel.ts');
var mongoose_1 = require("mongoose");
var joi_1 = require("joi");
var LootSchema = new mongoose_1["default"].Schema({
    url: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});
var LootModel = mongoose_1["default"].model('loot', LootSchema);
exports["default"] = LootModel;
exports.UserValidation = joi_1["default"].object({
    url: joi_1["default"].string().required(),
    name: joi_1["default"].string().required()
});
