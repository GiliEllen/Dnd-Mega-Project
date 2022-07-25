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
var newRoomForm = document.querySelector('#NewRoomForm');
var newRoomName = document.querySelector('#roomName');
var adiv = document.querySelector('div');
function HandleCreateNewRoom(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var newRoom, data, roomDB, role, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    newRoom = ev.target.elements.roomName.value;
                    return [4 /*yield*/, axios.post('/users/new-room', { newRoom: newRoom })];
                case 2:
                    data = (_a.sent()).data;
                    roomDB = data.roomDB;
                    role = "dm";
                    handleCreateMember(roomDB, role);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleCreateMember(roomDB, role) {
    return __awaiter(this, void 0, void 0, function () {
        var userDB, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    console.log("enter creat member function");
                    return [4 /*yield*/, getUserFromCookies()];
                case 1:
                    userDB = _a.sent();
                    console.log(userDB);
                    return [4 /*yield*/, axios.post('/users/create-Member', { roomDB: roomDB, userDB: userDB, role: role })];
                case 2:
                    data = (_a.sent()).data;
                    console.log("index.js thinks member was created");
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
function getUserFromCookies() {
    return __awaiter(this, void 0, void 0, function () {
        var data, userDB, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.log('loading room cookies');
                    return [4 /*yield*/, axios.get('/users/get-user-from-cookies')];
                case 1:
                    data = (_a.sent()).data;
                    userDB = data.userDB;
                    return [2 /*return*/, userDB];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function HandleEnterRoom(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var existingRoom, data, roomDB, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    //existingRoomName
                    ev.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    existingRoom = ev.target.elements.existingRoomName.value;
                    console.log(existingRoom);
                    return [4 /*yield*/, axios.post('/users/findRoom', { existingRoom: existingRoom })];
                case 2:
                    data = (_a.sent()).data;
                    console.log(data);
                    roomDB = data.roomDB;
                    console.log(roomDB);
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleRegister(event) {
    return __awaiter(this, void 0, void 0, function () {
        var username, password, data, register, user, error, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    username = event.target.username.value;
                    password = event.target.password.value;
                    return [4 /*yield*/, axios.post('/users/register', { username: username, password: password })];
                case 2:
                    data = (_a.sent()).data;
                    console.log(data);
                    register = data.register, user = data.user, error = data.error;
                    if (register) {
                        window.location.href = 'room.html';
                    }
                    if (error)
                        throw error;
                    console.log(data);
                    return [3 /*break*/, 4];
                case 3:
                    error_5 = _a.sent();
                    console.error(error_5);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleLogin(event) {
    return __awaiter(this, void 0, void 0, function () {
        var username, password, data, login, user, error, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    console.log('this is index trying to log in');
                    username = event.target.username.value;
                    password = event.target.password.value;
                    return [4 /*yield*/, axios.post('/users/login', { username: username, password: password })];
                case 2:
                    data = (_a.sent()).data;
                    login = data.login, user = data.user, error = data.error;
                    console.log(error);
                    if (error)
                        throw error;
                    if (login) {
                        window.location.href = 'room.html';
                    }
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
function loadUserMainPage() {
    return __awaiter(this, void 0, void 0, function () {
        var searchParams, userid, data, user, error, pageTitle, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    searchParams = new URLSearchParams(window.location.href);
                    userid = '62d96ac729bed14e36fb7459';
                    return [4 /*yield*/, axios.post('users/render-user-main-page', { userid: userid })];
                case 1:
                    data = (_a.sent()).data;
                    user = data.user, error = data.error;
                    pageTitle = document.querySelector('.title');
                    pageTitle.innerHTML = "Welcome " + user.username;
                    return [3 /*break*/, 3];
                case 2:
                    error_7 = _a.sent();
                    console.error(error_7);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function loadRoom() {
    return __awaiter(this, void 0, void 0, function () {
        var data, userDB, roomContainer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('loading user cookies');
                    return [4 /*yield*/, axios.get('/users/get-user-from-cookies')];
                case 1:
                    data = (_a.sent()).data;
                    userDB = data.userDB;
                    roomContainer = document.querySelector('.room_container');
                    roomContainer.innerHTML = "<h1>Hello " + userDB.username + "</h1>";
                    return [2 /*return*/];
            }
        });
    });
}
function getRoomIdByParams() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var roomID = urlParams.get('roomID');
    return roomID;
}
function getRoomById(roomID) {
    return __awaiter(this, void 0, void 0, function () {
        var data, room, userlist;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.post('/users/getRoomByID', { roomID: roomID })];
                case 1:
                    data = (_a.sent()).data;
                    room = data.room;
                    if (room.userListID.length === 0) {
                        userlist = 0;
                        renderRoom(userlist, room);
                    }
                    else if (room.userListID.length > 0) {
                        renderRoom(userlist, room);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function renderRoom(userlist, room) {
    var roomContainer = document.querySelector('.room_container');
    var html = '';
    if (userlist) {
        // 		html = `<h1>Room name: ${room.name}</h1>
        //         <div class="room_container__userContainer">
        //             <div class="room_container__dmContainer">
        //                 <a href="login.html?roomID=${room._id}&role=dm">Dm Login</a>
        //             </div>
        // 			<h3>Soon a function will fill this with users</h3>
        //         </div>
        //         <a href="login.html?roomID=${room._id}"><button>Register New Player</button></a>
        // `
    }
    else {
        html = "<h1>Room name: " + room.name + "</h1>\n        <div class=\"room_container__userContainer\">\n            <div class=\"room_container__dmContainer\">\n                <a href=\"register.html?roomID=" + room._id + "&role=dm\">Dm Register</a>\n            </div>\n\t\t\t<h3>User List is empty. Tell your user to enter the room and register!</h3>\n        </div>\n        <a href=\"register.html?roomID=" + room._id + "&role=user\"><button>Register New Player</button></a>\n";
    }
    roomContainer.innerHTML = html;
}
// Ask Tal about cookies
function checkRoomIDAndIfNew() {
    return __awaiter(this, void 0, void 0, function () {
        var data, newRoom, roomID;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get('/users/getRoomID')];
                case 1:
                    data = (_a.sent()).data;
                    newRoom = data.newRoom, roomID = data.roomID;
                    console.log(newRoom, roomID);
                    return [2 /*return*/];
            }
        });
    });
}
