"use strict";
exports.__esModule = true;
var express_1 = require("express");
var handoutsCont_1 = require("../controllers/handoutsCont");
var router = express_1["default"].Router();
router
    .post('/create-new-handout', handoutsCont_1.createHandout)
    .post('/Linkhandout', handoutsCont_1.Linkhandout)
    .post('/find-All-dm-handouts', handoutsCont_1.findAllHandouts);
exports["default"] = router;
