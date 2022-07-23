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
console.log('this is index.ts');
<<<<<<< HEAD
var newRoomForm = document.querySelector('#NewRoomForm');
var newRoomName = document.querySelector('#roomName');
function HandleCreateNewRoom(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var newRoom, data, roomID, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    newRoom = ev.target.elements.roomName.value;
                    console.log(newRoom);
                    return [4 /*yield*/, axios.post("/users/new-room", { newRoom: newRoom })];
                case 2:
                    data = (_a.sent()).data;
                    roomID = data.roomID;
                    window.location.href = "./room.html?roomID=" + roomID;
                    console.log(roomID);
=======
function handleRegister(event) {
    return __awaiter(this, void 0, void 0, function () {
        var username, password, roomID, role, data, register, error, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    username = event.target.username.value;
                    password = event.target.password.value;
                    roomID = 'room1';
                    role = 'user';
                    return [4 /*yield*/, axios.post("/users/register", { username: username, password: password, roomID: roomID, role: role })];
                case 2:
                    data = (_a.sent()).data;
                    register = data.register, error = data.error;
                    if (error)
                        throw error;
                    console.log(data);
>>>>>>> carmel
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
<<<<<<< HEAD
function HandleEnterRoom(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var existingRoom, data, roomDB, error_2;
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
                    return [4 /*yield*/, axios.post("/users/findRoom", { existingRoom: existingRoom })];
                case 2:
                    data = (_a.sent()).data;
                    console.log(data);
                    roomDB = data.roomDB;
                    console.log(roomDB);
                    window.location.href = "./room.html?roomID=" + roomDB._id;
=======
var adiv = document.querySelector('div');
function handleLogin(event) {
    return __awaiter(this, void 0, void 0, function () {
        var username, password, roomID, role, data, login, user, error, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    username = event.target.username.value;
                    password = event.target.password.value;
                    roomID = 'room1';
                    role = 'user';
                    return [4 /*yield*/, axios.post("/users/login", { username: username, password: password, roomID: roomID, role: role })];
                case 2:
                    data = (_a.sent()).data;
                    login = data.login, user = data.user, error = data.error;
                    if (error)
                        throw error;
                    else {
                        if ((login) && (role == 'user')) {
                            window.location.href = "mainPageUser.html?userid=" + user._id;
                        }
                        else if ((login) && (role == 'DM')) {
                            window.location.href = 'mainPageDM.html';
                        }
                        else {
                            adiv.innerText = 'wrong password/username';
                        }
                    }
>>>>>>> carmel
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
<<<<<<< HEAD
=======
function loadUserMainPage() {
    return __awaiter(this, void 0, void 0, function () {
        var searchParams, userid, data, user, error, pageTitle, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    searchParams = new URLSearchParams(window.location.href);
                    userid = '62d96ac729bed14e36fb7459';
                    return [4 /*yield*/, axios.post("users/render-user-main-page", { userid: userid })];
                case 1:
                    data = (_a.sent()).data;
                    user = data.user, error = data.error;
                    pageTitle = document.querySelector('.title');
                    pageTitle.innerHTML = "Welcome " + user.username;
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// function goToRoomNum(event) {
//     event.preventDefault()
//     try {
//         console.log('heyyyyyyyyyyy')
//         const roomNum = event.target.elements.roomNum.value
//         console.log(roomNum)
//         window.location.href = `room.html?roomnum=${roomNum}`;
//     } catch(error){
//       console.error(error)
//     }
//   }
// function enterRoom(){
//     try {
//         console.log('hello')
//         const searchParams = new URLSearchParams(window.location.href)
//         const roomNum = searchParams.get('roomnum')
//         console.log(roomNum)
//     } catch (error) {
//       console.error(error)
//     }
//   }
>>>>>>> carmel
