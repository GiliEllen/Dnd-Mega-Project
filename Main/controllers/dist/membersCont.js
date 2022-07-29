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
exports.getMemberFromCookie = exports.FindMember = exports.createMember = void 0;
var roomModel_1 = require("./../models/roomModel");
var memberModel_1 = require("../models/memberModel");
var jwt_simple_1 = require("jwt-simple");
function createMember(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, roomDB, userDB, role, member, memberDB, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, roomDB = _a.roomDB, userDB = _a.userDB, role = _a.role;
                    member = new memberModel_1["default"]({ room: roomDB, user: userDB, role: role });
                    return [4 /*yield*/, member.save()];
                case 1:
                    memberDB = _b.sent();
                    res.send({ memberDB: memberDB });
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
                case 3: throw new Error("Error02: Password or roomname incorrect");
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
        var secret, memberId, decodedMemberId, memberID, memberDB, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    secret = process.env.JWT_SECRET;
                    if (!secret)
                        throw new Error("couldn't load secret from .env");
                    memberId = req.cookies.memberId;
                    if (!memberId)
                        throw new Error("couldn't get memberID from cookies");
                    decodedMemberId = jwt_simple_1["default"].decode(memberId, secret);
                    memberID = decodedMemberId.memberID;
                    return [4 /*yield*/, memberModel_1["default"].findById(memberID)];
                case 1:
                    memberDB = _a.sent();
                    res.send({ memberDB: memberDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getMemberFromCookie = getMemberFromCookie;
