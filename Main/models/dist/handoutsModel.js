"use strict";
exports.__esModule = true;
exports.UserValidation = void 0;
var mongoose_1 = require("mongoose");
var joi_1 = require("joi");
var HandoutsSchema = new mongoose_1["default"].Schema({
    url: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});
var HandoutsModel = mongoose_1["default"].model('Handouts', HandoutsSchema);
exports["default"] = HandoutsModel;
exports.UserValidation = joi_1["default"].object({
    url: joi_1["default"].string().required(),
    name: joi_1["default"].string().required()
});
