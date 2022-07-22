"use strict";
exports.__esModule = true;
var express_1 = require("express");
var usersCont_1 = require("../controllers/usersCont");
var router = express_1["default"].Router();
router
    .post('/findRoom', usersCont_1.getRoom)
    .post('/new-room', usersCont_1.addRoom)
    .post('/updateNotes', usersCont_1.updateNotes);
exports["default"] = router;
