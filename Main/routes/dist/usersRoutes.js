"use strict";
exports.__esModule = true;
console.log('this is usersRoutes.ts');
var express_1 = require("express");
var usersCont_1 = require("../controllers/usersCont");
var router = express_1["default"].Router();
router
    .post('/register', usersCont_1.handleRegister)
    .post('/login', usersCont_1.userLogin)
    .post('/render-user-main-page', usersCont_1.renderUserMainPage);
exports["default"] = router;
