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
//@ts-ignore
var socket = io();
var worldMap = document.querySelector('.worldMap');
var currentMap = document.querySelector('.currentMap');
var mapsDiv = document.querySelector('.mapsDiv');
var closeDiv = document.querySelector('#closeDiv');
var worldMapIcon = document.querySelector('.fa-map');
var currentMapIcon = document.querySelector('.fa-map-location');
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
function loadBodyDMHndouts() {
    return __awaiter(this, void 0, void 0, function () {
        var memberDB;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getMemberFromCookies()];
                case 1:
                    memberDB = _a.sent();
                    renderMembersToSendNewHandouts();
                    renderExistingHandouts();
                    renderMemberToSendExistingHandouts();
                    return [2 /*return*/];
            }
        });
    });
}
function loadMainPageDM() {
    return __awaiter(this, void 0, void 0, function () {
        var mapsDivWrapper, memberDB, mapDB, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    mapsDivWrapper = document.querySelector('.mapsDiv__Wrapper');
                    return [4 /*yield*/, getMemberFromCookies()];
                case 1:
                    memberDB = _a.sent();
                    renderDmName(memberDB);
                    renderMembersNamesAndHitPoints();
                    sessionStorage.setItem("memberName", "" + memberDB.user.username);
                    sessionStorage.setItem("memberRole", "" + memberDB.role);
                    console.log("trying to get maps");
                    return [4 /*yield*/, handleGetMap()];
                case 2:
                    mapDB = _a.sent();
                    mapsDivWrapper.innerHTML += "<img src=\"" + mapDB.worldMap + "\" id=\"worldMapID\">\n\t\t<img src=\"" + mapDB.currentMap + "\" id=\"currentMapID\">";
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function loadBodyDMLoot() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            renderMembersToSendNewLoot();
            renderExistingLoot();
            renderMemberToSendExistingLoot();
            return [2 /*return*/];
        });
    });
}
function getMapsFromDB(memberDB) {
    return __awaiter(this, void 0, void 0, function () {
        var data, maps, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.post('/maps/get-room-map', { memberDB: memberDB })];
                case 1:
                    data = (_a.sent()).data;
                    maps = data.maps;
                    return [2 /*return*/, maps];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
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
}
function renderUserName(memberDB) {
    var userName = document.querySelector('#userName');
    userName.innerHTML = "Hello " + memberDB.user.username + "!";
}
// function renderButtonsHandoutsLoot(userID) {
// 	const buttonContainer = document.querySelector('#buttonContainer');
// 	const sendHandouts = document.createElement('a');
// 	const sendLoot = document.createElement('a');
// 	sendHandouts.href = `handoutsDm.html?${userID}"`;
// 	sendHandouts.innerHTML = `<button>Send Handouts</button>`;
// 	buttonContainer.appendChild(sendHandouts);
// 	sendLoot.href = `lootDm.html?${userID}"`;
// 	sendLoot.innerHTML = `<button>Send Loot</button>`;
// 	buttonContainer.appendChild(sendLoot);
// }
// function handleChooseHandouts(event) {
// 	event.preventDefault();
// 	const handoutType = event.submitter.id;
// 	if (handoutType === 'creatingHandout') {
// 		renderCreateHandout();
// 	} else if (handoutType === 'creatingHandout') {
// 		chooseHandout();
// 	}
// }
// function renderCreateHandout() {
// 	try {
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
// function chooseHandout() {
// 	const root = document.querySelector('#root');
// }
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
        var data, memberDB, availableMembers, userIDArray_1, membersToSendHandoutsArray_1, nameOfHandout, imgURL, userList, userInputArray, i, userID, data, handoutDB, sentHandout, error_4;
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
                    window.location.href = '../views/mainPageDm.html?memberID=${memberDB._id}';
                    return [3 /*break*/, 7];
                case 6:
                    error_4 = _a.sent();
                    console.log(error_4);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
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
                    return [2 /*return*/];
            }
        });
    });
}
function renderExistingHandouts() {
    return __awaiter(this, void 0, void 0, function () {
        var memberDB, data, existingHandouts, existinhHandoutsRoot, html_2, error_5;
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
                        html_2 += "<div class=\"handoutCard\">\n\t\t\t\t\t\t<h3>" + handoutObj.name + "</h3>\n\t\t\t\t\t\t<img src=\"" + handoutObj.url + "\">\n\t\t\t\t\t\t<div class=\"checkboxContainer\"><input name=\"" + handoutObj.name + "\" type=\"checkbox\" value=\"" + handoutObj._id + "\"> \n\t\t\t\t\t\t<label for=\"" + handoutObj._id + "\">PICK ME</label></div>\n\t\t\t</div>";
                    });
                    existinhHandoutsRoot.innerHTML = html_2;
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    console.log(error_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderMemberToSendExistingHandouts() {
    return __awaiter(this, void 0, void 0, function () {
        var userListRoot, availableMembers, html_3, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
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
                    error_6 = _a.sent();
                    console.log(error_6);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleSendExistingHandouts(event) {
    return __awaiter(this, void 0, void 0, function () {
        var memberDB, availableMembers, userIDArray_2, membersToSendHandoutsArray_2, userListRoot, userInputArray, i, userID, existinhHandoutsRoot, existinhHandoutsInputArray, existinhHandoutsCheckedIDArray, i, handoutID, data, existingHandouts_1, fullHandoutsToSend_1, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    event.preventDefault();
                    return [4 /*yield*/, getMemberFromCookies()];
                case 1:
                    memberDB = _a.sent();
                    return [4 /*yield*/, handleGetAllMembers()];
                case 2:
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
                case 3:
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
                case 4:
                    _a.sent();
                    window.location.href = "../views/mainPageDm.html?memberID=" + memberDB._id;
                    return [3 /*break*/, 6];
                case 5:
                    error_7 = _a.sent();
                    console.log(error_7);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
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
        var memberDBToUpdate, hitUpdater, hitPoints, data, memberDB, error_8;
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
                    error_8 = _a.sent();
                    console.log(error_8);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function loadUserMainPage() {
    return __awaiter(this, void 0, void 0, function () {
        var mapsDivWrapper, memberDB, mapDB, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    mapsDivWrapper = document.querySelector('.mapsDiv__Wrapper');
                    return [4 /*yield*/, getMemberFromCookies()];
                case 1:
                    memberDB = _a.sent();
                    renderUserName(memberDB);
                    renderUserOwnHitpoints(memberDB);
                    sessionStorage.setItem("memberName", "" + memberDB.user.username);
                    sessionStorage.setItem("memberRole", "" + memberDB.role);
                    sessionStorage.setItem("memberHitPoints", "" + memberDB.hitPoints);
                    socket.emit('getUserRole', sessionStorage.getItem("memberRole"));
                    return [4 /*yield*/, handleGetMap()];
                case 2:
                    mapDB = _a.sent();
                    mapsDivWrapper.innerHTML += "<img src=\"" + mapDB.worldMap + "\" id=\"worldMapID\">\n\t\t<img src=\"" + mapDB.currentMap + "\" id=\"currentMapID\">";
                    return [3 /*break*/, 4];
                case 3:
                    error_9 = _a.sent();
                    console.error(error_9);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleEditWorldMap(event) {
    return __awaiter(this, void 0, void 0, function () {
        var memberDB, mapUrl, mapsDivWrapper, data, worldmapDB, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, getMemberFromCookies()];
                case 2:
                    memberDB = _a.sent();
                    mapUrl = event.target.worldMapUpload.value;
                    mapsDivWrapper = document.querySelector('.mapsDiv__Wrapper');
                    return [4 /*yield*/, axios.post('/maps/upload-world-map', { mapUrl: mapUrl, memberDB: memberDB })];
                case 3:
                    data = (_a.sent()).data;
                    worldmapDB = data.worldmapDB;
                    console.log(worldmapDB);
                    return [3 /*break*/, 5];
                case 4:
                    error_10 = _a.sent();
                    console.error(error_10);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function handleEditCurrentMap(event) {
    return __awaiter(this, void 0, void 0, function () {
        var memberDB, mapUrl, mapsDivWrapper, data, currentMapDB, error_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, getMemberFromCookies()];
                case 2:
                    memberDB = _a.sent();
                    mapUrl = event.target.currentMapUpload.value;
                    mapsDivWrapper = document.querySelector('.mapsDiv__Wrapper');
                    return [4 /*yield*/, axios.post('/maps/upload-current-map', { mapUrl: mapUrl, memberDB: memberDB })];
                case 3:
                    data = (_a.sent()).data;
                    currentMapDB = data.currentMapDB;
                    console.log(currentMapDB);
                    return [3 /*break*/, 5];
                case 4:
                    error_11 = _a.sent();
                    console.error(error_11);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function loadUserHandoutBody() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, renderUserHandout()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function renderUserHandout() {
    return __awaiter(this, void 0, void 0, function () {
        var memberDB, userHandouts, data, existingHandouts, html;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getMemberFromCookies()];
                case 1:
                    memberDB = _a.sent();
                    userHandouts = document.querySelector('#userHandouts');
                    return [4 /*yield*/, axios.post('/handout/find-All-dm-handouts', { memberDB: memberDB })];
                case 2:
                    data = (_a.sent()).data;
                    existingHandouts = data.existingHandouts;
                    html = '';
                    existingHandouts.forEach(function (handoutObj) {
                        html += "<div class=\"handoutCard\">\n\t\t\t\t\t\t<h3>" + handoutObj.name + "</h3>\n\t\t\t\t\t\t<img src=\"" + handoutObj.url + "\">\n\t\t\t</div>";
                    });
                    userHandouts.innerHTML = html;
                    return [2 /*return*/];
            }
        });
    });
}
function renderMembersToSendNewLoot() {
    return __awaiter(this, void 0, void 0, function () {
        var userListNewLoot, availableMembers, html;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userListNewLoot = document.querySelector('#userListNewLoot');
                    return [4 /*yield*/, handleGetAllMembers()];
                case 1:
                    availableMembers = _a.sent();
                    html = '';
                    availableMembers.forEach(function (member) {
                        if (member.role === 'user') {
                            html += "<input type=\"checkbox\" name=\"" + member.user.username + "\" value=\"" + member.user._id + "\">\n\t\t\t<label for=\"" + member.user.username + "\">" + member.user.username + "</label>";
                        }
                    });
                    userListNewLoot.innerHTML = html;
                    return [2 /*return*/];
            }
        });
    });
}
function handleSendNewLoot(event) {
    return __awaiter(this, void 0, void 0, function () {
        var data, memberDB, availableMembers, userIDArray_3, membersToSendLootArray_1, nameOfLoot, imgURL, userListNewLoot, userInputArray, i, userID, data, lootDB, sentLoot, error_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
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
                    userIDArray_3 = [];
                    membersToSendLootArray_1 = [];
                    nameOfLoot = event.target.nameOfLoot.value;
                    imgURL = event.target.imgURL.value;
                    if (!imgURL || !nameOfLoot)
                        throw new Error('Missing field');
                    userListNewLoot = document.querySelector('#userListNewLoot');
                    userInputArray = userListNewLoot.getElementsByTagName('input');
                    for (i = 0; i < userInputArray.length; i++) {
                        if (userInputArray[i].checked) {
                            userID = userInputArray[i].value;
                            userIDArray_3.push(userID);
                        }
                    }
                    if (userIDArray_3.length === 0)
                        throw new Error('no user chosen');
                    availableMembers.forEach(function (member) {
                        userIDArray_3.forEach(function (userId) {
                            if (member.user._id === userId)
                                membersToSendLootArray_1.push(member);
                        });
                    });
                    return [4 /*yield*/, axios.post('/Loot/create-new-Loot', { nameOfLoot: nameOfLoot, imgURL: imgURL, memberDB: memberDB })];
                case 4:
                    data = (_a.sent()).data;
                    lootDB = data.lootDB;
                    return [4 /*yield*/, handleLinkMemberAndLoot(lootDB, membersToSendLootArray_1)];
                case 5:
                    sentLoot = _a.sent();
                    window.location.href = "../views/mainPageDm.html?memberID=" + memberDB._id;
                    return [3 /*break*/, 7];
                case 6:
                    error_12 = _a.sent();
                    console.log(error_12);
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
function renderExistingLoot() {
    return __awaiter(this, void 0, void 0, function () {
        var memberDB, data, existingLoot, existinhLootRoot, html_4, error_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, getMemberFromCookies()];
                case 1:
                    memberDB = _a.sent();
                    return [4 /*yield*/, axios.post('/loot/find-All-dm-loot', { memberDB: memberDB })];
                case 2:
                    data = (_a.sent()).data;
                    existingLoot = data.existingLoot;
                    existinhLootRoot = document.querySelector('#existinhLootRoot');
                    html_4 = '';
                    existingLoot.forEach(function (lootObj) {
                        html_4 += "<div class=\"lootCard\">\n\t\t\t\t\t\t<h3>" + lootObj.name + "</h3>\n\t\t\t\t\t\t<img src=\"" + lootObj.url + "\">\n\t\t\t\t\t\t<div class=\"checkboxContainer\"><input name=\"" + lootObj.name + "\" type=\"checkbox\" value=\"" + lootObj._id + "\"> \n\t\t\t\t\t\t<label for=\"" + lootObj._id + "\">PICK ME</label></div>\n\t\t\t</div>";
                    });
                    existinhLootRoot.innerHTML = html_4;
                    return [3 /*break*/, 4];
                case 3:
                    error_13 = _a.sent();
                    console.log(error_13);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleLinkMemberAndLoot(lootDB, membersToSendLootArray) {
    return __awaiter(this, void 0, void 0, function () {
        var data, sentLoot;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.post('/Loot/LinkLoot', { lootDB: lootDB, membersToSendLootArray: membersToSendLootArray })];
                case 1:
                    data = (_a.sent()).data;
                    sentLoot = data.sentLoot;
                    console.log(sentLoot);
                    return [2 /*return*/];
            }
        });
    });
}
function renderMemberToSendExistingLoot() {
    return __awaiter(this, void 0, void 0, function () {
        var userListLootRoot, availableMembers, html_5, error_14;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userListLootRoot = document.querySelector('#userListLootRoot');
                    return [4 /*yield*/, handleGetAllMembers()];
                case 1:
                    availableMembers = _a.sent();
                    html_5 = '';
                    availableMembers.forEach(function (member) {
                        if (member.role === 'user') {
                            html_5 += "<input id=\"memberName\" type=\"checkbox\" name=\"" + member.user.username + "\" value=\"" + member.user
                                ._id + "\">\n\t\t\t\t<label for=\"" + member.user.username + "\">" + member.user.username + "</label>";
                        }
                    });
                    userListLootRoot.innerHTML = html_5;
                    return [3 /*break*/, 3];
                case 2:
                    error_14 = _a.sent();
                    console.log(error_14);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleSendExistingLoot(event) {
    return __awaiter(this, void 0, void 0, function () {
        var memberDB, availableMembers, userIDArray_4, membersToSendLootArray_2, userListLootRoot, userInputArray, i, userID, existinhLootRoot, existinhLootInputArray, existinhLootCheckedIDArray, i, lootID, data, existingLoot_1, fullHLootToSend_1, error_15;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    event.preventDefault();
                    return [4 /*yield*/, getMemberFromCookies()];
                case 1:
                    memberDB = _a.sent();
                    return [4 /*yield*/, handleGetAllMembers()];
                case 2:
                    availableMembers = _a.sent();
                    userIDArray_4 = [];
                    membersToSendLootArray_2 = [];
                    userListLootRoot = document.querySelector('#userListLootRoot');
                    userInputArray = userListLootRoot.getElementsByTagName('input');
                    for (i = 0; i < userInputArray.length; i++) {
                        if (userInputArray[i].checked) {
                            userID = userInputArray[i].value;
                            userIDArray_4.push(userID);
                        }
                    }
                    if (userIDArray_4.length === 0)
                        throw new Error('no user chosen');
                    availableMembers.forEach(function (member) {
                        userIDArray_4.forEach(function (userId) {
                            if (member.user._id === userId)
                                membersToSendLootArray_2.push(member);
                        });
                    });
                    existinhLootRoot = document.querySelector('#existinhLootRoot');
                    existinhLootInputArray = existinhLootRoot.getElementsByTagName('input');
                    existinhLootCheckedIDArray = [];
                    for (i = 0; i < existinhLootInputArray.length; i++) {
                        if (existinhLootInputArray[i].checked) {
                            lootID = existinhLootInputArray[i].value;
                            existinhLootCheckedIDArray.push(lootID);
                        }
                    }
                    return [4 /*yield*/, axios.post('/loot/find-All-dm-loot', { memberDB: memberDB })];
                case 3:
                    data = (_a.sent()).data;
                    existingLoot_1 = data.existingLoot;
                    fullHLootToSend_1 = [];
                    existinhLootCheckedIDArray.forEach(function (lootCheckedID) {
                        existingLoot_1.forEach(function (loot) {
                            if (loot._id === lootCheckedID)
                                fullHLootToSend_1.push(loot);
                        });
                    });
                    return [4 /*yield*/, fullHLootToSend_1.forEach(function (loot) {
                            sendThisLoot(loot, membersToSendLootArray_2);
                        })];
                case 4:
                    _a.sent();
                    window.location.href = "../views/mainPageDm.html?memberID=" + memberDB._id;
                    return [3 /*break*/, 6];
                case 5:
                    error_15 = _a.sent();
                    console.log(error_15);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
function sendThisLoot(loot, membersToSendLootArray) {
    return __awaiter(this, void 0, void 0, function () {
        var sentLoot;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleLinkMemberAndHandout(loot, membersToSendLootArray)];
                case 1:
                    sentLoot = _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function loadUserLootBody() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, renderUserLoot()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function renderUserLoot() {
    return __awaiter(this, void 0, void 0, function () {
        var memberDB, userLoot, data, existingLoot, html;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getMemberFromCookies()];
                case 1:
                    memberDB = _a.sent();
                    userLoot = document.querySelector('#userLoot');
                    return [4 /*yield*/, axios.post('/loot/find-All-dm-loot', { memberDB: memberDB })];
                case 2:
                    data = (_a.sent()).data;
                    existingLoot = data.existingLoot;
                    html = '';
                    existingLoot.forEach(function (lootObj) {
                        html += "<div class=\"lootCard\">\n\t\t\t\t\t\t<h3>" + lootObj.name + "</h3>\n\t\t\t\t\t\t<img src=\"" + lootObj.url + "\">\n\t\t\t</div>";
                    });
                    userLoot.innerHTML = html;
                    return [2 /*return*/];
            }
        });
    });
}
if (worldMapIcon) {
    worldMapIcon.addEventListener('click', function (event) {
        mapsDiv.classList.add('active');
        var worldMapID = document.querySelector('#worldMapID');
        worldMapID.classList.add('active');
    });
}
if (currentMapIcon) {
    currentMapIcon.addEventListener('click', function (event) {
        mapsDiv.classList.add('active');
        var currentMapID = document.querySelector('#currentMapID');
        currentMapID.classList.add('active');
    });
}
if (mapsDiv) {
    mapsDiv.addEventListener('click', function (event) {
        var worldMapID = document.querySelector('#worldMapID');
        var currentMapID = document.querySelector('#currentMapID');
        if (event.target.id === 'closeDiv') {
            mapsDiv.classList.remove('active');
            worldMapID.classList.remove('active');
            currentMapID.classList.remove('active');
        }
    });
}
function handleGetMap() {
    return __awaiter(this, void 0, void 0, function () {
        var memberDB, data, MapDB;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getMemberFromCookies()];
                case 1:
                    memberDB = _a.sent();
                    return [4 /*yield*/, axios.post('/maps/getMap', { memberDB: memberDB })];
                case 2:
                    data = (_a.sent()).data;
                    MapDB = data.MapDB;
                    return [2 /*return*/, MapDB];
            }
        });
    });
}
