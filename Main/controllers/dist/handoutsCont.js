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
exports.findAllHandouts = exports.sendHandout = exports.Linkhandout = exports.createHandout = void 0;
var handoutsModel_1 = require("../models/handoutsModel");
var memberHandoutsModel_1 = require("../models/memberHandoutsModel");
function createHandout(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, nameOfHandout, imgURL, memberDB, handout, handoutDB, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, nameOfHandout = _a.nameOfHandout, imgURL = _a.imgURL, memberDB = _a.memberDB;
                    if (!nameOfHandout || !imgURL)
                        throw new Error("couldn't recive data from req.body");
                    handout = new handoutsModel_1["default"]({ url: imgURL, name: nameOfHandout, createdBy: memberDB });
                    return [4 /*yield*/, handout.save()];
                case 1:
                    handoutDB = _b.sent();
                    if (!handoutDB)
                        throw new Error('failed to create new handout');
                    res.send({ handoutDB: handoutDB });
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
exports.createHandout = createHandout;
function Linkhandout(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, handoutDB_1, membersToSendHandoutsArray, sentHandouts, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, handoutDB_1 = _a.handoutDB, membersToSendHandoutsArray = _a.membersToSendHandoutsArray;
                    membersToSendHandoutsArray.forEach(function (member) {
                        sendHandout(member, handoutDB_1);
                    });
                    return [4 /*yield*/, memberHandoutsModel_1["default"].find({ 'handout.name': handoutDB_1.name })];
                case 1:
                    sentHandouts = _b.sent();
                    if (!sentHandouts.length)
                        throw new Error("No handouts were sent");
                    res.send({ sentHandouts: sentHandouts });
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
exports.Linkhandout = Linkhandout;
function sendHandout(member, handout) {
    return __awaiter(this, void 0, void 0, function () {
        var linkedHandout, linkedHandoutDB;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    linkedHandout = new memberHandoutsModel_1["default"]({ member: member, handout: handout });
                    return [4 /*yield*/, linkedHandout.save()];
                case 1:
                    linkedHandoutDB = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.sendHandout = sendHandout;
function findAllHandouts(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var memberDB, existingHandouts, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    memberDB = req.body.memberDB;
                    return [4 /*yield*/, handoutsModel_1["default"].find({ 'createdBy.name': memberDB.name })];
                case 1:
                    existingHandouts = _a.sent();
                    if (!existingHandouts)
                        throw new Error("no handouts were found");
                    res.send({ existingHandouts: existingHandouts });
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
exports.findAllHandouts = findAllHandouts;
