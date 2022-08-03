"use strict";
exports.__esModule = true;
var express_1 = require("express");
var lootCont_1 = require("../controllers/lootCont");
var router = express_1["default"].Router();
router
    .post('/create-new-Loot', lootCont_1.createLoot)
    .post('/LinkLoot', lootCont_1.LinkLoot)
    .post('/find-All-dm-Loot', lootCont_1.findAllLoot)
    .post('/find-All-checked-Loot', lootCont_1.findAllCheckedLoot);
exports["default"] = router;
