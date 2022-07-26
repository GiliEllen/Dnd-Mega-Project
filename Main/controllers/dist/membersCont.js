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
exports.updateSocketID = exports.findMyDm = exports.updateHit = exports.getAllRoomMembers = exports.getMemberFromCookie = exports.FindMember = exports.createMember = void 0;
var roomModel_1 = require("./../models/roomModel");
var memberModel_1 = require("../models/memberModel");
var jwt_simple_1 = require("jwt-simple");
function createMember(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, roomDB, userDB, role, member, memberDB, cookie, secret, JWTCookie, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, roomDB = _a.roomDB, userDB = _a.userDB, role = _a.role;
                    member = new memberModel_1["default"]({ room: roomDB, user: userDB, role: role });
                    return [4 /*yield*/, member.save()];
                case 1:
                    memberDB = _b.sent();
                    cookie = { memberID: memberDB._id };
                    secret = process.env.JWT_SECRET;
                    if (!secret)
                        throw new Error("Couldn't find secret");
                    JWTCookie = jwt_simple_1["default"].encode(cookie, secret);
                    res.cookie('memberId', JWTCookie);
                    res.send({ success: true, memberDB: memberDB, roomDB: roomDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _b.sent();
                    res.send({ error: error_1.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.createMember = createMember;
function FindMember(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, existingRoom, existingRoomPass, userDB, roomDB, memberDB, cookie, secret, JWTCookie, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    _a = req.body, existingRoom = _a.existingRoom, existingRoomPass = _a.existingRoomPass, userDB = _a.userDB;
                    if (!existingRoom || !existingRoomPass || !userDB)
                        throw new Error("didn't recive existing room information from req.body");
                    return [4 /*yield*/, roomModel_1["default"].findOne({ name: existingRoom })];
                case 1:
                    roomDB = _b.sent();
                    if (!(roomDB.name === existingRoom && roomDB.password === existingRoomPass)) return [3 /*break*/, 3];
                    return [4 /*yield*/, memberModel_1["default"].findOne({ 'room.name': roomDB.name, 'user.username': userDB.username })];
                case 2:
                    memberDB = _b.sent();
                    if (!memberDB) {
                        throw new Error('Error01: Passward match but no member is found.');
                    }
                    else if (memberDB) {
                        cookie = { memberID: memberDB._id };
                        secret = process.env.JWT_SECRET;
                        if (!secret)
                            throw new Error("Couldn't find secret");
                        JWTCookie = jwt_simple_1["default"].encode(cookie, secret);
                        res.cookie('memberId', JWTCookie);
                        res.send({ success: true, memberDB: memberDB, roomDB: roomDB });
                    }
                    return [3 /*break*/, 4];
                case 3: throw new Error('Error02: Password or roomname incorrect');
                case 4: return [3 /*break*/, 6];
                case 5:
                    error_2 = _b.sent();
                    res.send({ error: error_2.message });
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.FindMember = FindMember;
function getMemberFromCookie(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var secret, memberId, decodedMemberId, memberDB, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                    console.log("try to extract member from cookie");
=======
>>>>>>> carmel4
=======
>>>>>>> gili3
=======
>>>>>>> carmel5
                    secret = process.env.JWT_SECRET;
                    if (!secret)
                        throw new Error("couldn't load secret from .env");
                    memberId = req.cookies.memberId;
                    if (!memberId)
                        throw new Error("couldn't get memberID from cookies");
                    decodedMemberId = jwt_simple_1["default"].decode(memberId, secret);
                    return [4 /*yield*/, memberModel_1["default"].findById(decodedMemberId.memberID)];
                case 1:
                    memberDB = _a.sent();
                    res.send({ memberDB: memberDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    res.send({ error: error_3.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getMemberFromCookie = getMemberFromCookie;
function getAllRoomMembers(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var memberDB, memberArray, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    memberDB = req.body.memberDB;
                    return [4 /*yield*/, memberModel_1["default"].find({ 'room.name': memberDB.room.name })];
                case 1:
                    memberArray = _a.sent();
                    res.send({ memberArray: memberArray });
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
exports.getAllRoomMembers = getAllRoomMembers;
function updateHit(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, memberDBToUpdate, hitPoints, member, memberDB, error_5;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    _a = req.body, memberDBToUpdate = _a.memberDBToUpdate, hitPoints = _a.hitPoints;
                    if (!memberDBToUpdate || !hitPoints)
                        throw new Error('missing data from server');
                    return [4 /*yield*/, memberModel_1["default"].findOne({
                            'user.username': memberDBToUpdate.user.username,
                            'room.name': memberDBToUpdate.room.name
                        })];
                case 1:
                    member = _b.sent();
                    if (!member)
                        throw new Error('member not found');
                    member.hitPoints = hitPoints;
                    return [4 /*yield*/, member.save()];
                case 2:
                    memberDB = _b.sent();
                    res.send({ memberDB: memberDB });
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _b.sent();
                    res.send({ error: error_5.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateHit = updateHit;
function findMyDm(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var member, memberDB, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    member = req.body.member;
                    if (!member)
                        throw new Error('no info from req.body');
                    return [4 /*yield*/, memberModel_1["default"].findOne({
                            'room.name': member.room.name, role: "dm"
                        })];
                case 1:
                    memberDB = _a.sent();
                    if (!memberDB)
                        throw new Error('no memberDB found');
                    res.send({ memberDB: memberDB });
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
exports.findMyDm = findMyDm;
function updateSocketID(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, socketId, memberDBToUpdate, member, memberDB, error_7;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    _a = req.body, socketId = _a.socketId, memberDBToUpdate = _a.memberDBToUpdate;
                    if (!socketId || !memberDBToUpdate)
                        throw new Error('no info from req.body');
                    return [4 /*yield*/, memberModel_1["default"].findOne({
                            'room.name': memberDBToUpdate.room.name, role: "dm"
                        })];
                case 1:
                    member = _b.sent();
                    member.socketID = socketId;
                    return [4 /*yield*/, member.save()];
                case 2:
                    memberDB = _b.sent();
                    res.send({ memberDB: memberDB });
                    return [3 /*break*/, 4];
                case 3:
                    error_7 = _b.sent();
                    res.send({ error: error_7.message });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateSocketID = updateSocketID;
