"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var MemberLootSchema = new mongoose_1["default"].Schema({
    member: {
        type: Object,
        required: true
    },
    loot: {
        type: Object,
        required: true
    }
});
var MemberLootModel = mongoose_1["default"].model('MemberLoot', MemberLootSchema);
exports["default"] = MemberLootModel;
