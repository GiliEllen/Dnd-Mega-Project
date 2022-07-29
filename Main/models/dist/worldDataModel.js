"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var worldDataSchema = new mongoose_1["default"].Schema({
    roomID: {
        type: String,
        required: true,
        unique: true
    },
    worldMap: {
        type: String,
        required: true
    },
    currentMap: {
        type: String,
        required: true
    }
});
var worldDataModel = mongoose_1["default"].model('worldDataModel', worldDataSchema);
exports["default"] = worldDataModel;
