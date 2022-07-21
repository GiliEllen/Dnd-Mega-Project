"use strict";
exports.__esModule = true;
var express_1 = require("express");
var usersCont_1 = require("../controllers/usersCont");
var router = express_1["default"].Router();
router
    .post('/new-room', usersCont_1.addRoom)
    .get('/room', usersCont_1.room);
exports["default"] = router;
