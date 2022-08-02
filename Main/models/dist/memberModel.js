"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var MemberSchema = new mongoose_1["default"].Schema({
    room: {
        type: Object,
        required: true
    },
    user: {
        type: Object,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    hitPoints: {
        type: Number,
        required: true,
        "default": 15
    },
    socketID: {
        type: String
    }
});
var MemberModel = mongoose_1["default"].model('Member', MemberSchema);
exports["default"] = MemberModel;
