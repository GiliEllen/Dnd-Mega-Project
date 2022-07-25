"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getRoomID = exports.getRoomUsers = exports.getRoomByID = exports.renderUserMainPage = exports.userLogin = exports.handleRegister = exports.updateNotes = exports.getRoom = exports.addRoom = void 0;
var roomModel_1 = require("./../models/roomModel");
function addRoom(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var newRoom, isRoomNew, userListID, room, roomDB;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(req.body);
                    newRoom = req.body.newRoom;
                    isRoomNew = true;
                    userListID = [];
                    room = new roomModel_1["default"]({ name: newRoom, isNew: isRoomNew, userListID: userListID });
                    return [4 /*yield*/, room.save()];
                case 1:
                    roomDB = _a.sent();
                    res.cookie('roomID', roomDB._id);
                    res.cookie('newRoom', true);
                    res.send({ success: true, roomID: roomDB._id });
                    return [2 /*return*/];
            }
        });
    });
}
exports.addRoom = addRoom;
function getRoom(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var existingRoom, roomDB, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    existingRoom = req.body.existingRoom;
                    if (!existingRoom)
                        throw new Error("didn't recive existing room from req.body");
                    return [4 /*yield*/, roomModel_1["default"].findOne({ name: existingRoom })];
                case 1:
                    roomDB = _a.sent();
                    res.cookie('roomID', roomDB._id);
                    res.cookie('newRoom', false);
                    res.send({ success: true, roomDB: roomDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    res.send({ error: error_1.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getRoom = getRoom;
function updateNotes(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, userID, updatedNotes;
        return __generator(this, function (_b) {
            _a = req.body, userID = _a.userID, updatedNotes = _a.updatedNotes;
            console.log(userID, updatedNotes);
            res.send({ succeses: true });
            return [2 /*return*/];
        });
    });
}
exports.updateNotes = updateNotes;
console.log('this is usersCont.ts');
var usersModel_1 = require("../models/usersModel");
function handleRegister(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, username, password, roomID, role, error, user, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, username = _a.username, password = _a.password, roomID = _a.roomID, role = _a.role;
                    error = usersModel_1.UserValidation.validate({ username: username, password: password, roomID: roomID, role: role }).error;
                    if (error)
                        throw error;
                    user = new usersModel_1["default"]({ username: username, password: password, roomID: roomID, role: role });
                    return [4 /*yield*/, user.save()
                        // saveUserToRoom(username, roomID)
                    ];
                case 1:
                    _b.sent();
                    // saveUserToRoom(username, roomID)
                    res.send({ register: true, user: user });
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _b.sent();
                    res.send({ error: error_2.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.handleRegister = handleRegister;
// export async function saveUserToRoom(username, roomID) {
//   const user = await UserModel.findOne({ username, roomID});
//   const room = await RoomModel.findById({roomID});
//   const usetID = user._id
//   const userArr = room.userListID;
//   userArr.push(usetID);
//   room.userListID = userArr;
//   await room.save();
// }
function userLogin(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, username, password, roomID, role, error, user, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, username = _a.username, password = _a.password, roomID = _a.roomID, role = _a.role;
                    error = usersModel_1.UserValidation.validate({ username: username, password: password, roomID: roomID, role: role }).error;
                    if (error)
                        throw error;
                    return [4 /*yield*/, usersModel_1["default"].findOne({ username: username, password: password, roomID: roomID, role: role })];
                case 1:
                    user = _b.sent();
                    if (!user) {
                        res.send({ login: false });
                    }
                    else {
                        res.send({ login: true, user: user });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _b.sent();
                    res.send({ error: error_3.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.userLogin = userLogin;
function renderUserMainPage(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userid, user, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userid = req.body.userid;
                    return [4 /*yield*/, usersModel_1["default"].findById(userid)];
                case 1:
                    user = _a.sent();
                    res.send({ user: user });
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    res.send({ error: error_4.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.renderUserMainPage = renderUserMainPage;
function getRoomByID(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var roomID, room, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    roomID = req.body.roomID;
                    return [4 /*yield*/, roomModel_1["default"].findById(roomID)];
                case 1:
                    room = _a.sent();
                    res.send({ room: room });
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    res.send({ error: error_5.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getRoomByID = getRoomByID;
function getRoomUsers(res, req) {
    return __awaiter(this, void 0, void 0, function () {
        var roomID, userlist, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    roomID = req.body.roomID;
                    return [4 /*yield*/, usersModel_1["default"].find({ roomID: roomID })];
                case 1:
                    userlist = _a.sent();
                    console.log(userlist);
                    res.send(userlist);
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _a.sent();
                    res.send({ error: error_6.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getRoomUsers = getRoomUsers;
function getRoomID(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log(req.cookies);
            return [2 /*return*/];
        });
    });
}
exports.getRoomID = getRoomID;
