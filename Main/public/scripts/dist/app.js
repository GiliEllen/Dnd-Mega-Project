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
                    return [2 /*return*/];
            }
        });
    });
}
function renderMembersNamesAndHitPoints() {
    return __awaiter(this, void 0, void 0, function () {
        var userInfoList, memberArray, html;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userInfoList = document.querySelector('.userInfoList__users__list');
                    return [4 /*yield*/, handleGetAllMembers()];
                case 1:
                    memberArray = _a.sent();
                    console.log(memberArray);
                    html = '';
                    memberArray.forEach(function (member) {
                        if (member.role === 'user') {
                            html += "<li><div class=\"username\">" + member.user.username + "</div><div class=\"hitPoints_container\"><div id=\"hitPoints\">" + member.hitPoints + "</div><i class=\"fa-solid fa-heart\"></i></li></div> ";
                        }
                    });
                    userInfoList.innerHTML = html;
                    return [2 /*return*/];
            }
        });
    });
}
function renderDmName(memberDB) {
    var dmName = document.querySelector('#dmName');
    dmName.innerHTML = "Hello " + memberDB.user.username + "!";
}
function handleSaveNotes(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var updatedNotes, data, error_1;
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
                    error_1 = _a.sent();
                    console.log(error_1);
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
function handleGoTodHandouts() {
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
        var data, memberDB, availableMembers, userIDArray_1, membersToSendHandoutsArray_1, nameOfHandout, imgURL, userList, userInputArray, i, userID, data, handoutDB, sentHandout, error_2;
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
        var memberDB, data, existingHandouts, existinhHandoutsRoot, html_1, error_3;
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
                    html_1 = '';
                    existingHandouts.forEach(function (handoutObj) {
                        html_1 += "<div class=\"handoutCard\"><img src=\"" + handoutObj.url + "\"><h3>" + handoutObj.name + "</h3><input name=\"" + handoutObj.name + "\" type=\"checkbox\" value=\"" + handoutObj._id + "\"> <label for=\"" + handoutObj._id + "\">PICK ME</label></div>";
                    });
                    existinhHandoutsRoot.innerHTML = html_1;
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.log(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderMemberToSendExistingHandouts() {
    return __awaiter(this, void 0, void 0, function () {
        var userListRoot, availableMembers, html_2, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    userListRoot = document.querySelector('#userListRoot');
                    return [4 /*yield*/, handleGetAllMembers()];
                case 1:
                    availableMembers = _a.sent();
                    html_2 = '';
                    availableMembers.forEach(function (member) {
                        if (member.role === 'user') {
                            html_2 += "<input id=\"memberName\" type=\"checkbox\" name=\"" + member.user.username + "\" value=\"" + member.user
                                ._id + "\">\n\t\t\t\t<label for=\"" + member.user.username + "\">" + member.user.username + "</label>";
                        }
                    });
                    userListRoot.innerHTML = html_2;
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.log(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
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
