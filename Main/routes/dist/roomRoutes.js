"use strict";
exports.__esModule = true;
var express_1 = require("express");
var roomCont_1 = require("../controllers/roomCont");
var router = express_1["default"].Router();
router
    .post('/new-room', roomCont_1.addRoom)
    .post('/findRoom', roomCont_1.getRoom)
    .post('/get-world-data', roomCont_1.getWorldData);
exports["default"] = router;
