"use strict";
exports.__esModule = true;
exports.UserValidation = void 0;
console.log('this is usersHandoutsModel.ts');
var mongoose_1 = require("mongoose");
var joi_1 = require("joi");
var UserHandoutsSchema = new mongoose_1["default"].Schema({
    userID: {
        type: String,
        required: true
    },
    handouts: {
        //object = handouts
        type: Array()
    }
});
var UserHandoutsModel = mongoose_1["default"].model('UserHandouts', UserHandoutsSchema);
exports["default"] = UserHandoutsModel;
exports.UserValidation = joi_1["default"].object({
    url: joi_1["default"].string().required()
});
