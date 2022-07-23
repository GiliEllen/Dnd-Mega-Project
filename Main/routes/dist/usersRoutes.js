"use strict";
exports.__esModule = true;
<<<<<<< HEAD
=======
console.log('this is usersRoutes.ts');
>>>>>>> carmel
var express_1 = require("express");
var usersCont_1 = require("../controllers/usersCont");
var router = express_1["default"].Router();
router
<<<<<<< HEAD
    .post('/findRoom', usersCont_1.getRoom)
    .post('/new-room', usersCont_1.addRoom)
    .post('/updateNotes', usersCont_1.updateNotes);
=======
    .post('/register', usersCont_1.handleRegister)
    .post('/login', usersCont_1.userLogin)
    .post('/render-user-main-page', usersCont_1.renderUserMainPage);
>>>>>>> carmel
exports["default"] = router;
