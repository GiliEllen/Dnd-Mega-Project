"use strict";
exports.__esModule = true;
var express_1 = require("express");
var membersCont_1 = require("../controllers/membersCont");
var router = express_1["default"].Router();
router
    .post('/create-Member', membersCont_1.createMember)
    .post('/FindMember', membersCont_1.FindMember);
exports["default"] = router;
