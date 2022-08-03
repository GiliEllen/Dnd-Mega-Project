"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var LootSchema = new mongoose_1["default"].Schema({
    url: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    createdBy: {
        type: Object,
        required: true
    }
});
var LootModel = mongoose_1["default"].model('loot', LootSchema);
exports["default"] = LootModel;
