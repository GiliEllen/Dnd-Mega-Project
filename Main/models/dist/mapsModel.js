"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var mapsSchema = new mongoose_1["default"].Schema({
    room: {
        type: Object,
        required: true,
        unique: true
    },
    worldMap: {
        type: String
    },
    currentMap: {
        type: String
    }
});
var MapsModel = mongoose_1["default"].model('Maps', mapsSchema);
exports["default"] = MapsModel;
