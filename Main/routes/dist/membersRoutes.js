"use strict";
exports.__esModule = true;
var express_1 = require("express");
var membersCont_1 = require("../controllers/membersCont");
var router = express_1["default"].Router();
router
    .get('/get-member-from-cookie', membersCont_1.getMemberFromCookie)
    .post('/create-Member', membersCont_1.createMember)
    .post('/FindMemberByRoom', membersCont_1.FindMember)
    .post('/getAllRoomMembers', membersCont_1.getAllRoomMembers);
exports["default"] = router;
