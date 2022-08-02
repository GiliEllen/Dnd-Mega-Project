"use strict";
exports.__esModule = true;
var express_1 = require("express");
var mapsCont_1 = require("../controllers/mapsCont");
var router = express_1["default"].Router();
router
    .post('/upload-world-map', mapsCont_1.uploadWorldMap)
    .post('/upload-current-map', mapsCont_1.uploadCurrentdMap)
    .post('/get-room-map', mapsCont_1.getMaps);
exports["default"] = router;
