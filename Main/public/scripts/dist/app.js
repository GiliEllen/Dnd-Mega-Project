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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> carmel5
console.log('this is app.ts');
function getMemberFromCookies() {
    return __awaiter(this, void 0, void 0, function () {
        var data, memberDB, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
<<<<<<< HEAD
                    return [4 /*yield*/, axios.get('/member/get-user-from-cookies')];
=======
var _this = this;
var socket = io();
var chooseAndSend = document.querySelector('.chooseAndSend');
var existingHandoutsForm = document.querySelector('#existingHandoutsForm');
// chooseAndSend.addEventListener('click', () => {
// 	existingHandoutsForm.style.display = "flex"
// })
socket.on('connect', function () {
    console.log(socket.id);
});
socket.on('update', function () { return __awaiter(_this, void 0, void 0, function () {
    var success;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, renderMembersNamesAndHitPoints()];
            case 1:
                success = _a.sent();
                return [2 /*return*/];
        }
    });
}); });
function findMyDm(member) {
    return __awaiter(this, void 0, void 0, function () {
        var data, memberDB;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.post('/member/findMyDm', { member: member })];
>>>>>>> gili3
=======
                    return [4 /*yield*/, axios.get('/member/get-member-from-cookie')];
>>>>>>> carmel5
                case 1:
                    data = (_a.sent()).data;
                    memberDB = data.memberDB;
                    return [2 /*return*/, memberDB];
<<<<<<< HEAD
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
=======
>>>>>>> gili3
            }
        });
    });
}
<<<<<<< HEAD
<<<<<<< HEAD
function getWorldDataFromDB(roomID) {
=======
function getMapsFromDB(memberRoom) {
>>>>>>> carmel5
    return __awaiter(this, void 0, void 0, function () {
        var data, maps, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.post('/maps/get-room-map', { memberRoom: memberRoom })];
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
<<<<<<< HEAD
=======
function loadBody() {
    renderMembersToSendNewHandouts();
    renderExistingHandouts();
    renderMemberToSendExistingHandouts();
}
function loadBodyDM() {
    return __awaiter(this, void 0, void 0, function () {
        var memberDB;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getMemberFromCookies()];
                case 1:
                    memberDB = _a.sent();
                    renderDmName(memberDB);
                    renderMembersNamesAndHitPoints();
                    sessionStorage.setItem("memberName", "" + memberDB.user.username);
                    sessionStorage.setItem("memberRole", "" + memberDB.role);
                    return [2 /*return*/];
            }
        });
    });
}
function loadUserMainBody() {
    return __awaiter(this, void 0, void 0, function () {
        var memberDB;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getMemberFromCookies()];
                case 1:
                    memberDB = _a.sent();
                    renderUserName(memberDB);
                    renderUserOwnHitpoints(memberDB);
                    sessionStorage.setItem("memberName", "" + memberDB.user.username);
                    sessionStorage.setItem("memberRole", "" + memberDB.role);
                    sessionStorage.setItem("memberHitPoints", "" + memberDB.hitPoints);
                    socket.emit('getUserRole', sessionStorage.getItem("memberRole"));
                    return [2 /*return*/];
            }
        });
    });
}
function renderUserOwnHitpoints(memberDB) {
    return __awaiter(this, void 0, void 0, function () {
        var userInfoListInfoname, hitPointsNum;
        return __generator(this, function (_a) {
            userInfoListInfoname = document.querySelector('.userInfoList__Info__name');
            userInfoListInfoname.innerHTML = memberDB.user.username;
            hitPointsNum = document.querySelector('.hitPointsNum');
            hitPointsNum.innerHTML = memberDB.hitPoints;
            return [2 /*return*/];
        });
    });
}
function renderMembersNamesAndHitPoints() {
    return __awaiter(this, void 0, void 0, function () {
        var userInfoList, memberArray, html_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userInfoList = document.querySelector('.userInfoList__users__list');
                    if (!userInfoList) return [3 /*break*/, 2];
                    return [4 /*yield*/, handleGetAllMembers()];
                case 1:
                    memberArray = _a.sent();
                    console.log(memberArray);
                    html_1 = '';
                    memberArray.forEach(function (member) {
                        if (member.role === 'user') {
                            html_1 += "<li><div class=\"username\">" + member.user
                                .username + "</div><div class=\"hitPoints_container\"><div id=\"hitPoints\">" + member.hitPoints + "</div><i class=\"fa-solid fa-heart\"></i></li></div> ";
                        }
                    });
                    userInfoList.innerHTML = html_1;
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    });
}
function renderDmName(memberDB) {
    var dmName = document.querySelector('#dmName');
    dmName.innerHTML = "Hello " + memberDB.user.username + "!";
=======
}
function loadMainPageDM() {
    return __awaiter(this, void 0, void 0, function () {
        var memberDB, memberRoom, worldData, worldMapUrl, worldMapDiv, currentMapUrl, currentMapDiv, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    console.log('helo');
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
>>>>>>> carmel5
}
function renderUserName(memberDB) {
    var userName = document.querySelector('#userName');
    userName.innerHTML = "Hello " + memberDB.user.username + "!";
>>>>>>> gili3
}
// function loadBody() {
// 	// renderButtonsHandoutsLoot(userID);
// 	try {
// 		const memberDB = getMemberFromCookies()
// 		const memberRoom = memberDB.room._id
// 		const worldData = getWorldDataFromDB(memberRoom)
// 	} catch (error) {
// 		console.error(error)
// 	}
// }
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
        var memberDB, data, memberArray;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getMemberFromCookies()];
                case 1:
                    memberDB = _a.sent();
                    return [4 /*yield*/, axios.post('/member/getAllRoomMembers', { memberDB: memberDB })];
                case 2:
                    data = (_a.sent()).data;
                    memberArray = data.memberArray;
                    return [2 /*return*/, memberArray];
            }
        });
    });
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
<<<<<<< HEAD
<<<<<<< HEAD
        var availableMembers, userIDArray, nameOfHandout, imgURL, userList, userInputArray, i, userID, error_4;
=======
        var data, memberDB, availableMembers, userIDArray_1, membersToSendHandoutsArray_1, nameOfHandout, imgURL, userList, userInputArray, i, userID, data, handoutDB, sentHandout, error_2;
>>>>>>> gili3
=======
        var availableMembers, userIDArray, nameOfHandout, imgURL, userList, userInputArray, i, userID, error_5;
>>>>>>> carmel5
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    console.log(event);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, axios.get('/member/get-member-from-cookie')];
                case 2:
                    data = (_a.sent()).data;
                    memberDB = data.memberDB;
                    return [4 /*yield*/, handleGetAllMembers()];
                case 3:
                    availableMembers = _a.sent();
                    userIDArray_1 = [];
                    membersToSendHandoutsArray_1 = [];
                    nameOfHandout = event.target.nameOfHandout.value;
                    imgURL = event.target.imgURL.value;
                    if (!imgURL || !nameOfHandout)
                        throw new Error('Missing field');
                    userList = document.querySelector('#userList');
                    userInputArray = userList.getElementsByTagName('input');
                    for (i = 0; i < userInputArray.length; i++) {
                        if (userInputArray[i].checked) {
                            userID = userInputArray[i].value;
                            userIDArray_1.push(userID);
                        }
                    }
<<<<<<< HEAD
                    console.log(userIDArray);
                    return [3 /*break*/, 3];
                case 2:
<<<<<<< HEAD
                    error_4 = _a.sent();
                    console.log(error_4);
=======
                    error_5 = _a.sent();
                    console.log(error_5);
>>>>>>> carmel5
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
=======
                    if (userIDArray_1.length === 0)
                        throw new Error('no user chosen');
                    availableMembers.forEach(function (member) {
                        userIDArray_1.forEach(function (userId) {
                            if (member.user._id === userId)
                                membersToSendHandoutsArray_1.push(member);
                        });
                    });
                    return [4 /*yield*/, axios.post('/handout/create-new-handout', { nameOfHandout: nameOfHandout, imgURL: imgURL, memberDB: memberDB })];
                case 4:
                    data = (_a.sent()).data;
                    handoutDB = data.handoutDB;
                    return [4 /*yield*/, handleLinkMemberAndHandout(handoutDB, membersToSendHandoutsArray_1)];
                case 5:
                    sentHandout = _a.sent();
                    if (sentHandout)
                        console.log("successfully created and sent new handouts to the users");
                    return [3 /*break*/, 7];
                case 6:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
<<<<<<< HEAD
function handleLinkMemberAndHandout(handoutDB, membersToSendHandoutsArray) {
    return __awaiter(this, void 0, void 0, function () {
        var data, sentHandouts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.post('/handout/Linkhandout', { handoutDB: handoutDB, membersToSendHandoutsArray: membersToSendHandoutsArray })];
                case 1:
                    data = (_a.sent()).data;
                    sentHandouts = data.sentHandouts;
                    console.log(sentHandouts);
                    if (sentHandouts.length)
                        return [2 /*return*/, true];
                    return [2 /*return*/];
            }
        });
    });
}
function renderExistingHandouts() {
    return __awaiter(this, void 0, void 0, function () {
        var memberDB, data, existingHandouts, existinhHandoutsRoot, html_2, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, getMemberFromCookies()];
                case 1:
                    memberDB = _a.sent();
                    return [4 /*yield*/, axios.post('/handout/find-All-dm-handouts', { memberDB: memberDB })];
                case 2:
                    data = (_a.sent()).data;
                    existingHandouts = data.existingHandouts;
                    existinhHandoutsRoot = document.querySelector('.existinhHandoutsRoot');
                    html_2 = '';
                    existingHandouts.forEach(function (handoutObj) {
                        html_2 += "<div class=\"handoutCard\"><img src=\"" + handoutObj.url + "\"><h3>" + handoutObj.name + "</h3><input name=\"" + handoutObj.name + "\" type=\"checkbox\" value=\"" + handoutObj._id + "\"> <label for=\"" + handoutObj._id + "\">PICK ME</label></div>";
                    });
                    existinhHandoutsRoot.innerHTML = html_2;
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.log(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
>>>>>>> gili3
            }
        });
    });
}
<<<<<<< HEAD
function loadUserMainPage() {
    return __awaiter(this, void 0, void 0, function () {
        var userDB, pageTitle, infoFromDB, error_5;
=======
function renderMemberToSendExistingHandouts() {
    return __awaiter(this, void 0, void 0, function () {
        var userListRoot, availableMembers, html_3, error_4;
>>>>>>> gili3
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
<<<<<<< HEAD
                    return [4 /*yield*/, getUserFromCookies()];
=======
function loadMainPageUser() {
    return __awaiter(this, void 0, void 0, function () {
        var memberDB, pageTitle, infoFromDB, roomID, maps, worldMapUrl, currentMapUrl, worldMap, currentMap, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, getMemberFromCookies()];
>>>>>>> carmel5
                case 1:
                    memberDB = _a.sent();
                    pageTitle = document.querySelector('.title');
                    pageTitle.innerHTML = "Welcome " + memberDB.user.username;
                    infoFromDB = document.querySelector('.infoFromDB');
                    infoFromDB.innerHTML = " \n\t\t\tname:" + memberDB.user.username + "\n\t\t\trole:" + memberDB.role;
                    roomID = memberDB.room._id;
                    return [4 /*yield*/, getMapsFromDB(roomID)];
                case 2:
<<<<<<< HEAD
                    error_5 = _a.sent();
                    console.error(error_5);
=======
                    userListRoot = document.querySelector('#userListRoot');
                    return [4 /*yield*/, handleGetAllMembers()];
                case 1:
                    availableMembers = _a.sent();
                    html_3 = '';
                    availableMembers.forEach(function (member) {
                        if (member.role === 'user') {
                            html_3 += "<input id=\"memberName\" type=\"checkbox\" name=\"" + member.user.username + "\" value=\"" + member.user
                                ._id + "\">\n\t\t\t\t<label for=\"" + member.user.username + "\">" + member.user.username + "</label>";
                        }
                    });
                    userListRoot.innerHTML = html_3;
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.log(error_4);
>>>>>>> gili3
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
=======
                    maps = _a.sent();
                    worldMapUrl = maps.worldMap;
                    currentMapUrl = maps.currentMap;
                    worldMap = document.querySelector('.worldMap');
                    worldMap.innerHTML =
                        "<div class=\"worldMap\">world map \n\t\t\t\t<form onsubmit=\"handleEditWorldMap(event)\">\n\t\t\t\t\t<input type=\"url\" name=\"worldMapUpload\" >\n\t\t\t\t\t<button type=\"submit\"> Upload a New Map</button>\n\t\t\t\t</form>\n\t\t\t\t<img src=\"" + worldMapUrl + "\" alt=\"pic of map\">\n        \t</div>";
                    currentMap = document.querySelector('.currentMap');
                    currentMap.innerHTML =
                        "<div class=\"currentMap\">current map\n\t\t\t\t<form onsubmit=\"handleEditCurrentMap(event)\">\n\t\t\t\t\t<input type='url' name='currentMapUpload' >\n\t\t\t\t\t<button type=\"submit\"> Upload a New Map</button>\n\t\t\t\t</form>\n\t\t\t\t<img src=\"" + currentMapUrl + "\" alt=\"pic of map\">\n       \t\t </div>";
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
>>>>>>> carmel5
            }
        });
    });
}
function getMemberFromCookies() {
    return __awaiter(this, void 0, void 0, function () {
        var data, memberDB;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/member/get-member-from-cookie')];
                case 1:
                    data = (_a.sent()).data;
                    memberDB = data.memberDB;
                    return [2 /*return*/, memberDB];
            }
        });
    });
}
function handleSendExistingHandouts(event) {
    return __awaiter(this, void 0, void 0, function () {
        var memberDB, availableMembers, userIDArray_2, membersToSendHandoutsArray_2, userListRoot, userInputArray, i, userID, existinhHandoutsRoot, existinhHandoutsInputArray, existinhHandoutsCheckedIDArray, i, handoutID, data, existingHandouts_1, fullHandoutsToSend_1, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    event.preventDefault();
                    memberDB = getMemberFromCookies();
                    return [4 /*yield*/, handleGetAllMembers()];
                case 1:
                    availableMembers = _a.sent();
                    userIDArray_2 = [];
                    membersToSendHandoutsArray_2 = [];
                    userListRoot = document.querySelector('#userListRoot');
                    userInputArray = userListRoot.getElementsByTagName('input');
                    for (i = 0; i < userInputArray.length; i++) {
                        if (userInputArray[i].checked) {
                            userID = userInputArray[i].value;
                            userIDArray_2.push(userID);
                        }
                    }
                    if (userIDArray_2.length === 0)
                        throw new Error('no user chosen');
                    availableMembers.forEach(function (member) {
                        userIDArray_2.forEach(function (userId) {
                            if (member.user._id === userId)
                                membersToSendHandoutsArray_2.push(member);
                        });
                    });
                    existinhHandoutsRoot = document.querySelector('#existinhHandoutsRoot');
                    existinhHandoutsInputArray = existinhHandoutsRoot.getElementsByTagName('input');
                    existinhHandoutsCheckedIDArray = [];
                    for (i = 0; i < existinhHandoutsInputArray.length; i++) {
                        if (existinhHandoutsInputArray[i].checked) {
                            handoutID = existinhHandoutsInputArray[i].value;
                            existinhHandoutsCheckedIDArray.push(handoutID);
                        }
                    }
                    return [4 /*yield*/, axios.post('/handout/find-All-dm-handouts', { memberDB: memberDB })];
                case 2:
                    data = (_a.sent()).data;
                    existingHandouts_1 = data.existingHandouts;
                    fullHandoutsToSend_1 = [];
                    existinhHandoutsCheckedIDArray.forEach(function (handoutCheckedID) {
                        existingHandouts_1.forEach(function (handout) {
                            if (handout._id === handoutCheckedID)
                                fullHandoutsToSend_1.push(handout);
                        });
                    });
                    return [4 /*yield*/, fullHandoutsToSend_1.forEach(function (handout) {
                            sendThisHandout(handout, membersToSendHandoutsArray_2);
                        })];
                case 3:
                    _a.sent();
                    window.location.href = "../views/mainPageDm.html?memberID=" + memberDB._id;
                    return [3 /*break*/, 5];
                case 4:
                    error_5 = _a.sent();
                    console.log(error_5);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function sendThisHandout(handout, membersToSendHandoutsArray) {
    return __awaiter(this, void 0, void 0, function () {
        var sentHandout;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleLinkMemberAndHandout(handout, membersToSendHandoutsArray)];
                case 1:
                    sentHandout = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function handleChangeHitPoints(event) {
    return __awaiter(this, void 0, void 0, function () {
        var memberDBToUpdate, hitUpdater, hitPoints, data, memberDB, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    event.preventDefault();
                    return [4 /*yield*/, getMemberFromCookies()];
                case 1:
                    memberDBToUpdate = _a.sent();
                    if (!memberDBToUpdate)
                        throw new Error('member not found to update');
                    hitUpdater = event.target.id;
                    hitPoints = memberDBToUpdate.hitPoints;
                    if (hitUpdater === 'up') {
                        hitPoints++;
                    }
                    else if (hitUpdater === 'down') {
                        hitPoints--;
                    }
                    return [4 /*yield*/, axios.post('/member/updateHit', { memberDBToUpdate: memberDBToUpdate, hitPoints: hitPoints })];
                case 2:
                    data = (_a.sent()).data;
                    memberDB = data.memberDB;
                    renderUserOwnHitpoints(memberDB);
                    socket.emit('updateHitForUser', true);
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    console.log(error_6);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
