"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var HandoutsSchema = new mongoose_1["default"].Schema({
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
var HandoutsModel = mongoose_1["default"].model('Handouts', HandoutsSchema);
exports["default"] = HandoutsModel;
