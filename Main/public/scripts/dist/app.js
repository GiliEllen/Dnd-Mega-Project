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
console.log('this is app.ts');
function getMemberFromCookies() {
    return __awaiter(this, void 0, void 0, function () {
        var data, memberDB, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get('/member/get-member-from-cookie')];
                case 1:
                    data = (_a.sent()).data;
                    memberDB = data.memberDB;
                    return [2 /*return*/, memberDB];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getMapsFromDB(roomID) {
    return __awaiter(this, void 0, void 0, function () {
        var data, maps, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.post('maps/get-room-map', { roomID: roomID })];
                case 1:
                    data = (_a.sent()).data;
                    maps = data.maps;
                    return [2 /*return*/, maps];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function loadMainPageDM() {
    return __awaiter(this, void 0, void 0, function () {
        var memberDB, memberRoom, worldData, worldMapUrl, worldMapDiv, currentMapUrl, currentMapDiv, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, getMemberFromCookies()];
                case 1:
                    memberDB = _a.sent();
                    memberRoom = memberDB.room._id;
                    return [4 /*yield*/, getMapsFromDB(memberRoom)];
                case 2:
                    worldData = _a.sent();
                    worldMapUrl = worldData.worldMap;
                    worldMapDiv = document.querySelector('.worldMap');
                    worldMapDiv.innerHTML =
                        "<div class=\"worldMap\">world map \n\t\t\t\t<form onsubmit=\"handleEditWorldMap(event)\">\n\t\t\t\t\t<input type=\"url\" name=\"worldMapUpload\" >\n\t\t\t\t\t<button type=\"submit\"> Upload a New Map</button>\n\t\t\t\t</form>\n\t\t\t\t<img src=\"" + worldMapUrl + "\" alt=\"pic of map\">\n        \t</div>";
                    currentMapUrl = worldData.currentMap;
                    currentMapDiv = document.querySelector('.currentMap');
                    currentMapDiv.innerHTML =
                        "<div class=\"currentMap\">current map\n\t\t\t\t<form onsubmit=\"handleEditCurrentMap(event)\">\n\t\t\t\t\t<input type='url' name='currentMapUpload' >\n\t\t\t\t\t<button type=\"submit\"> Upload a New Map</button>\n\t\t\t\t</form>\n\t\t\t\t<img src=\"" + currentMapUrl + "\" alt=\"pic of map\">\n       \t\t </div>";
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleSaveNotes(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var updatedNotes, data, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    updatedNotes = ev.target.infoDump.value;
                    return [4 /*yield*/, axios.post('/users/updateNotes', { userID: userID, updatedNotes: updatedNotes })];
                case 2:
                    data = (_a.sent()).data;
                    console.log(data);
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.log(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderButtonsHandoutsLoot(userID) {
    var buttonContainer = document.querySelector('#buttonContainer');
    var sendHandouts = document.createElement('a');
    var sendLoot = document.createElement('a');
    sendHandouts.href = "handoutsDm.html?" + userID + "\"";
    sendHandouts.innerHTML = "<button>Send Handouts</button>";
    buttonContainer.appendChild(sendHandouts);
    sendLoot.href = "lootDm.html?" + userID + "\"";
    sendLoot.innerHTML = "<button>Send Loot</button>";
    buttonContainer.appendChild(sendLoot);
}
function handleChooseHandouts(event) {
    event.preventDefault();
    var handoutType = event.submitter.id;
    if (handoutType === 'creatingHandout') {
        renderCreateHandout();
    }
    else if (handoutType === 'creatingHandout') {
        chooseHandout();
    }
}
function renderCreateHandout() {
    try {
    }
    catch (error) {
        console.log(error);
    }
}
function chooseHandout() {
    var root = document.querySelector('#root');
}
function getMemberIDByParams() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var memberID = urlParams.get('memberID');
    return memberID;
}
function handleGetAllMembers() {
    return __awaiter(this, void 0, void 0, function () {
        var data, memberDB, data, memberArray;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("attempting to load members");
                    return [4 /*yield*/, axios.get('/member/get-member-from-cookie')];
                case 1:
                    data = (_a.sent()).data;
                    memberDB = data.memberDB;
                    return [4 /*yield*/, axios.post('/member/getAllRoomMembers', { memberDB: memberDB })];
                case 2:
                    data = (_a.sent()).data;
                    memberArray = data.memberArray;
                    return [2 /*return*/, memberArray];
            }
        });
    });
}
function handleCreateAndSendHandouts() {
    var memberID = getMemberIDByParams();
    window.location.href = "../views/handoutsDm.html?memberID=" + memberID;
}
function renderMembersToSendNewHandouts() {
    return __awaiter(this, void 0, void 0, function () {
        var userList, availableMembers, html;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userList = document.querySelector('#userList');
                    return [4 /*yield*/, handleGetAllMembers()];
                case 1:
                    availableMembers = _a.sent();
                    html = '';
                    availableMembers.forEach(function (member) {
                        if (member.role === 'user') {
                            html += "<input type=\"checkbox\" name=\"" + member.user.username + "\" value=\"" + member.user._id + "\">\n\t\t\t<label for=\"" + member.user.username + "\">" + member.user.username + "</label>";
                        }
                    });
                    userList.innerHTML = html;
                    return [2 /*return*/];
            }
        });
    });
}
function handleSendNewHandouts(event) {
    return __awaiter(this, void 0, void 0, function () {
        var availableMembers, userIDArray, nameOfHandout, imgURL, userList, userInputArray, i, userID, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    event.preventDefault();
                    console.dir(event);
                    return [4 /*yield*/, handleGetAllMembers()];
                case 1:
                    availableMembers = _a.sent();
                    userIDArray = [];
                    nameOfHandout = event.target.nameOfHandout.value;
                    imgURL = event.target.imgURL.value;
                    userList = document.querySelector('#userList');
                    userInputArray = userList.getElementsByTagName('input');
                    for (i = 0; i < userInputArray.length; i++) {
                        userID = userInputArray[i].value;
                        userIDArray.push(userID);
                    }
                    console.log(userIDArray);
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.log(error_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function loadMainPageUser() {
    return __awaiter(this, void 0, void 0, function () {
        var memberDB, pageTitle, infoFromDB, roomID, maps, worldMap, currentMap, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, getMemberFromCookies()];
                case 1:
                    memberDB = _a.sent();
                    pageTitle = document.querySelector('.title');
                    pageTitle.innerHTML = "Welcome " + memberDB.user.username;
                    infoFromDB = document.querySelector('.infoFromDB');
                    infoFromDB.innerHTML = " \n\t\t\tname:" + memberDB.user.username + "\n\t\t\trole:" + memberDB.role;
                    roomID = memberDB.room._id;
                    return [4 /*yield*/, getMapsFromDB(roomID)];
                case 2:
                    maps = _a.sent();
                    console.log(maps);
                    worldMap = document.querySelector('.worldMap');
                    currentMap = document.querySelector('.currentMap');
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    console.error(error_6);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleEditWorldMap(event) {
    return __awaiter(this, void 0, void 0, function () {
        var member, roomID, mapUrl, worldMapDiv, data, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, getMemberFromCookies()];
                case 2:
                    member = _a.sent();
                    roomID = member.room._id;
                    mapUrl = event.target.worldMapUpload.value;
                    worldMapDiv = document.querySelector('.worldMap');
                    worldMapDiv.innerHTML =
                        "<div class=\"worldMap\">world map \n\t\t\t\t<form onsubmit=\"handleEditWorldMap(event)\">\n\t\t\t\t\t<input type=\"url\" name=\"worldMapUpload\" >\n\t\t\t\t\t<button type=\"submit\"> Upload a New Map</button>\n\t\t\t\t</form>\n\t\t\t\t<img src=\"" + mapUrl + "\" alt=\"pic of map\">\n        \t</div>";
                    return [4 /*yield*/, axios.post('/maps/upload-world-map', { mapUrl: mapUrl, roomID: roomID })];
                case 3:
                    data = (_a.sent()).data;
                    return [3 /*break*/, 5];
                case 4:
                    error_7 = _a.sent();
                    console.error(error_7);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function handleEditCurrentMap(event) {
    return __awaiter(this, void 0, void 0, function () {
        var member, roomID, mapUrl, currentMapDiv, data, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, getMemberFromCookies()];
                case 2:
                    member = _a.sent();
                    roomID = member.room._id;
                    mapUrl = event.target.currentMapUpload.value;
                    currentMapDiv = document.querySelector('.currentMap');
                    currentMapDiv.innerHTML =
                        "<div class=\"currentMap\">current map\n\t\t\t\t<form onsubmit=\"handleEditCurrentMap(event)\">\n\t\t\t\t\t<input type='url' name='currentMapUpload' >\n\t\t\t\t\t<button type=\"submit\"> Upload a New Map</button>\n\t\t\t\t</form>\n\t\t\t\t<img src=\"" + mapUrl + "\" alt=\"pic of map\">\n       \t\t </div>";
                    return [4 /*yield*/, axios.post('/maps/upload-current-map', { mapUrl: mapUrl, roomID: roomID })];
                case 3:
                    data = (_a.sent()).data;
                    return [3 /*break*/, 5];
                case 4:
                    error_8 = _a.sent();
                    console.error(error_8);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
