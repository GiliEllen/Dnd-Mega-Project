"use strict";
exports.__esModule = true;
var express_1 = require("express");
var usersCont_1 = require("../controllers/usersCont");
var router = express_1["default"].Router();
router
    .get('/getRoomID', usersCont_1.getRoomID)
    .get('/get-user-from-cookies', usersCont_1.getUserFromCookies)
    .post('/getRoomByID', usersCont_1.getRoomByID)
    .post('/getRoomUsers', usersCont_1.getRoomUsers)
    .post('/updateNotes', usersCont_1.updateNotes)
    .post('/register', usersCont_1.handleRegister)
    .post('/login', usersCont_1.userLogin)
    .post('/render-user-main-page', usersCont_1.renderUserMainPage);
exports["default"] = router;
