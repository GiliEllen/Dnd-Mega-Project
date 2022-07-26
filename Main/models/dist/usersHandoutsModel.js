"use strict";
exports.__esModule = true;
exports.UserValidation = void 0;
console.log('this is usersHandoutsModel.ts');
var mongoose_1 = require("mongoose");
var joi_1 = require("joi");
var MemberHandoutsSchema = new mongoose_1["default"].Schema({
    member: {
        type: String,
        required: true
    },
    handouts: {
        type: Array < Object > ,
        required: true
    }
});
var MemberHandoutsModel = mongoose_1["default"].model('MemberHandouts', MemberHandoutsSchema);
exports["default"] = MemberHandoutsModel;
exports.UserValidation = joi_1["default"].object({
    url: joi_1["default"].string().required()
});
