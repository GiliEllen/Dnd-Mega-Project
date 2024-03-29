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
var newRoomForm = document.querySelector("#NewRoomForm");
var newRoomName = document.querySelector("#roomName");
var adiv = document.querySelector("div");
var isWorldMapClicked = false;
var isCurrentMapClicked = false;
var isUserInfoClicked = false;
function getUserFromCookies() {
    return __awaiter(this, void 0, void 0, function () {
        var data, userDB, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/users/get-user-from-cookies")];
                case 1:
                    data = (_a.sent()).data;
                    userDB = data.userDB;
                    return [2 /*return*/, userDB];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function HandleCreateNewRoom(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var newRoom, newRoomPassword, data, roomDB, error, role, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    newRoom = ev.target.elements.roomName.value;
                    newRoomPassword = ev.target.elements.roomPass.value;
                    return [4 /*yield*/, axios.post("/room/new-room", {
                            newRoom: newRoom,
                            newRoomPassword: newRoomPassword
                        })];
                case 2:
                    data = (_a.sent()).data;
                    roomDB = data.roomDB, error = data.error;
                    if (error) {
                        handleErrorRoom(error);
                    }
                    else {
                        role = "dm";
                        handleCreateMember(roomDB, role);
                    }
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
function handleCreateMember(roomDB, role) {
    return __awaiter(this, void 0, void 0, function () {
        var userDB, data, memberDB, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, getUserFromCookies()];
                case 1:
                    userDB = _a.sent();
                    return [4 /*yield*/, axios.post("/member/create-Member", {
                            roomDB: roomDB,
                            userDB: userDB,
                            role: role
                        })];
                case 2:
                    data = (_a.sent()).data;
                    if (!data)
                        throw new Error("Could not create member");
                    memberDB = data.memberDB;
                    if (!memberDB)
                        throw new Error("Could extraxt member from data");
                    if (memberDB.role === "dm") {
                        window.location.href = "../views/mainPageDm.html?memberID=" + memberDB._id;
                    }
                    else if (memberDB.role === "user") {
                        window.location.href = "../views/mainPageUser.html?memberID=" + memberDB._id;
                    }
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
function HandleEnterRoom(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var existingRoom, existingRoomPass, data, userDB, data, success, memberDB, error, roomDB, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    existingRoom = ev.target.elements.existingRoomName.value;
                    existingRoomPass = ev.target.elements.existingRoomPass.value;
                    return [4 /*yield*/, axios.get("/users/get-user-from-cookies")];
                case 2:
                    data = (_a.sent()).data;
                    userDB = data.userDB;
                    return [4 /*yield*/, axios.post("/member/FindMemberByRoom", {
                            existingRoom: existingRoom,
                            existingRoomPass: existingRoomPass,
                            userDB: userDB
                        })];
                case 3:
                    data = (_a.sent()).data;
                    success = data.success, memberDB = data.memberDB, error = data.error, roomDB = data.roomDB;
                    if (!roomDB)
                        handleErrorEnterRoom(error);
                    if (error)
                        handleErrorMember(error);
                    if (success) {
                        if (memberDB.role === "dm") {
                            window.location.href = "../views/mainPageDm.html?memberID=" + memberDB._id;
                        }
                        else if (memberDB.role === "user") {
                            window.location.href = "../views/mainPageUser.html?memberID=" + memberDB._id;
                        }
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function handleErrorMember(error) {
    console.log(error);
    var roomRoot = document.querySelector("#roomRoot");
    if (error.includes("Error01")) {
        var yesRoomNoUser = document.querySelector(".yesRoomNoUser");
        yesRoomNoUser.style.display = "inline";
        var RoomForm = document.querySelector("#RoomForm");
        RoomForm.style.display = "none";
    }
}
function handleDeleteThis(event) {
    try {
        var yesRoomNoUser = document.querySelector(".yesRoomNoUser");
        yesRoomNoUser.style.display = "none";
        var RoomForm = document.querySelector("#RoomForm");
        RoomForm.style.display = "flex";
    }
    catch (error) {
        console.log(error);
    }
}
function handleRegister(event) {
    return __awaiter(this, void 0, void 0, function () {
        var username, password, rePassword, email, data, register, user, error, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    username = event.target.username.value;
                    password = event.target.password.value;
                    rePassword = event.target.rePassword.value;
                    email = event.target.email.value;
                    return [4 /*yield*/, axios.post("/users/register", {
                            username: username,
                            password: password,
                            email: email,
                            rePassword: rePassword
                        })];
                case 2:
                    data = (_a.sent()).data;
                    console.log(data);
                    register = data.register, user = data.user, error = data.error;
                    if (register) {
                        window.location.href = "../views/room.html";
                    }
                    if (error)
                        throw handleError(error);
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
        var email, password, data, login, user, error, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    email = event.target.email.value;
                    password = event.target.password.value;
                    if (!email || !password)
                        throw new Error("Missing either email or password");
                    return [4 /*yield*/, axios.post("/users/login", { password: password, email: email })];
                case 2:
                    data = (_a.sent()).data;
                    login = data.login, user = data.user, error = data.error;
                    console.log(error);
                    if (error)
                        handleError(error);
                    if (login) {
                        window.location.href = "../views/room.html";
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
function handleWorldMapOpen() {
    try {
        var worldMap = document.querySelector(".worldMap");
        var currentMap = document.querySelector(".currentMap");
        if (!isWorldMapClicked) {
            worldMap.classList.add("worldMapOpen");
            isWorldMapClicked = true;
            if (isWorldMapClicked) {
                currentMap.classList.remove("currentMapOpen");
                currentMap.style.display = "none";
                isCurrentMapClicked = false;
            }
        }
        else {
            worldMap.classList.remove("worldMapOpen");
            currentMap.style.display = "inline";
            isWorldMapClicked = false;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleCurrentMapOpen() {
    try {
        var worldMap = document.querySelector(".worldMap");
        var currentMap = document.querySelector(".currentMap");
        if (!isCurrentMapClicked) {
            currentMap.classList.add("currentMapOpen");
            isCurrentMapClicked = true;
            if (isCurrentMapClicked) {
                worldMap.classList.remove("worldMapOpen");
                worldMap.style.display = "none";
                isWorldMapClicked = false;
            }
        }
        else {
            currentMap.classList.remove("currentMapOpen");
            worldMap.style.display = "inline";
            isCurrentMapClicked = false;
        }
    }
    catch (error) {
        console.error(error);
    }
}
function handleUserInfoOpen() {
    return __awaiter(this, void 0, void 0, function () {
        var userInfo, infoFromDB;
        return __generator(this, function (_a) {
            try {
                userInfo = document.querySelector(".userInfo");
                infoFromDB = document.querySelector(".infoFromDB");
                if (!isUserInfoClicked) {
                    userInfo.classList.add("userInfoOpen");
                    infoFromDB.style.display = "inline";
                    isUserInfoClicked = true;
                }
                else {
                    userInfo.classList.remove("userInfoOpen");
                    infoFromDB.style.display = "none";
                    isUserInfoClicked = false;
                }
            }
            catch (error) {
                console.error(error);
            }
            return [2 /*return*/];
        });
    });
}
function loadRoom() {
    return __awaiter(this, void 0, void 0, function () {
        var data, userDB, roomHeader;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios.get("/users/get-user-from-cookies")];
                case 1:
                    data = (_a.sent()).data;
                    userDB = data.userDB;
                    roomHeader = document.querySelector(".room_header");
                    roomHeader.innerHTML = "<h1>Hello " + userDB.username + "!</h1><h2>what would you like to do?</h2>";
                    return [2 /*return*/];
            }
        });
    });
}
function handleAddUserToRoom(event) {
    return __awaiter(this, void 0, void 0, function () {
        var existingRoominput, existingRoom, data, roomDB, role;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    console.log("trying to add user to this room");
                    existingRoominput = document.querySelector("#existingRoomName");
                    existingRoom = existingRoominput.value;
                    return [4 /*yield*/, axios.post("/room/findRoom", { existingRoom: existingRoom })];
                case 1:
                    data = (_a.sent()).data;
                    roomDB = data.roomDB;
                    console.log(roomDB);
                    role = "user";
                    handleCreateMember(roomDB, role);
                    return [2 /*return*/];
            }
        });
    });
}
function getMemberIdByParams() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var memberID = urlParams.get("memberID");
    return memberID;
}
function handleError(error) {
    var errorRoot = document.querySelector(".errorRoot");
    if (error.includes("User with that email can't be found"))
        errorRoot.innerHTML = "User with that email can't be found";
    if (error.includes("Email or password do not match"))
        errorRoot.innerHTML = "Email or password do not match";
    if (error.includes('"password" length must be at least 6 characters long'))
        errorRoot.innerHTML =
            "The password length must be at least 6 characters long";
    if (error.includes('"password" should contain at least 1 special character'))
        errorRoot.innerHTML =
            "The password should contain at least 1 special character";
    if (error.includes('"password" should contain at least 1 lowercase character'))
        errorRoot.innerHTML =
            "The password should contain at least 1 lowercase character";
    if (error.includes('"password" should contain at least 1 uppercase character'))
        errorRoot.innerHTML =
            "The password should contain at least 1 uppercase character";
    if (error.includes('"password" length must be less than or equal to 16 characters long'))
        errorRoot.innerHTML =
            "password length must be less than or equal to 16 characters long";
    if (error.includes('"repeatPassword" must be [ref:password]'))
        errorRoot.innerHTML = "Password doesn't match";
}
function handleErrorRoom(error) {
    var errorRootNewRoom = document.querySelector(".errorRootNewRoom");
    if (error.includes('"password" length must be at least 6 characters long'))
        errorRootNewRoom.innerHTML =
            "The password length must be at least 6 characters long";
    if (error.includes('"password" should contain at least 1 special character'))
        errorRootNewRoom.innerHTML =
            "The password should contain at least 1 special character";
    if (error.includes('"password" should contain at least 1 lowercase character'))
        errorRootNewRoom.innerHTML =
            "The password should contain at least 1 lowercase character";
    if (error.includes('"password" should contain at least 1 uppercase character'))
        errorRootNewRoom.innerHTML =
            "The password should contain at least 1 uppercase character";
    if (error.includes('"password" length must be less than or equal to 16 characters long'))
        errorRootNewRoom.innerHTML =
            "password length must be less than or equal to 16 characters long";
    if (error.includes('"repeatPassword" must be [ref:password]'))
        errorRootNewRoom.innerHTML = "Password doesn't match";
}
function handleErrorEnterRoom(error) {
    var errorRootExistingRoom = document.querySelector(".errorRootExistingRoom");
    if (error.includes("Cannot read properties of null (reading 'name')"))
        errorRootExistingRoom.innerHTML = "Couldn't find this room";
    if (error.includes("Error02"))
        errorRootExistingRoom.innerHTML = "Passwords don't match";
}
var i = {};
i.am = ['Fullstack Developer', 'Front-end Developer'];
i.love = ['Art', 'Music', 'Programming', 'Cats & Dogs'];
i.workWith = ['Html', 'Css', 'Sass', 'JavaScript', 'Typescript', 'React.js',
    'React Native', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'Redux',
    'Git', "Github", 'aws'];
i.amGoodAt = ['Writing clean code', 'Responsive development',
    'Following Ui/Ux designs', "Learning fast", "Quick thinking",
    "Code-review"];
i.aspire = ["To inspire others", "Advance and learn more!"];
