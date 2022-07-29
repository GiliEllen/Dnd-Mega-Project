"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var MemberHandoutsSchema = new mongoose_1["default"].Schema({
    member: {
        type: String,
        required: true
    },
    handout: {
        type: Object,
        required: true
    }
});
var MemberHandoutsModel = mongoose_1["default"].model('MemberHandouts', MemberHandoutsSchema);
exports["default"] = MemberHandoutsModel;
