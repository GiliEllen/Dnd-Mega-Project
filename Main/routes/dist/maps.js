"use strict";
exports.__esModule = true;
var express_1 = require("express");
var roomCont_1 = require("../controllers/roomCont");
var router = express_1["default"].Router();
router
    .post('/upload-map', roomCont_1.uploadMap)
    .post('/get-room-map', roomCont_1.getMaps);
exports["default"] = router;
