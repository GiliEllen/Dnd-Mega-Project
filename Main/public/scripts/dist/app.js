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
                    return [4 /*yield*/, axios.get('/member/get-user-from-cookies')];
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
function getWorldDataFromDB(roomID) {
    return __awaiter(this, void 0, void 0, function () {
        var data, worldData, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.post('room/get-world-data', { roomID: roomID })];
                case 1:
                    data = (_a.sent()).data;
                    worldData = data.worldData;
                    return [2 /*return*/, worldData];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
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
        var updatedNotes, data, error_3;
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
                    error_3 = _a.sent();
                    console.log(error_3);
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
        var availableMembers, userIDArray, nameOfHandout, imgURL, userList, userInputArray, i, userID, error_4;
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
                    error_4 = _a.sent();
                    console.log(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function loadUserMainPage() {
    return __awaiter(this, void 0, void 0, function () {
        var userDB, pageTitle, infoFromDB, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, getUserFromCookies()];
                case 1:
                    userDB = _a.sent();
                    pageTitle = document.querySelector('.title');
                    pageTitle.innerHTML = "Welcome " + userDB.username;
                    infoFromDB = document.querySelector('.infoFromDB');
                    infoFromDB.innerHTML = " \n\t\t\tname:" + userDB.username + "\n\t\t\trole:" + userDB.role;
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.error(error_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
