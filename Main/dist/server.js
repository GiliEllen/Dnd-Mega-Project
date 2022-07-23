"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('this is server.ts');
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const http = require('http');
const server = http.createServer(app);
<<<<<<< HEAD
const { Server } = require("socket.io");
const io = new Server(server);
require('dotenv').config();
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
const mongodb_uri = process.env.MONGODB_URI;
mongoose_1.default.connect(mongodb_uri).then(res => {
    console.log("Connected to DB");
}).catch(err => {
    console.log('At mongoose.connect:');
    console.error(err.message);
});
=======
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
app.use(express.static('public'));
app.use(express.json());
const url = process.env.MONGODB_URI;
mongoose_1.default.connect(url).then(() => {
    console.log('conntect to DB');
}).catch(err => {
    console.error(err);
});
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
app.use('/users', usersRoutes_1.default);
>>>>>>> carmel
server.listen(3000, () => {
    console.log('listening on *:3000');
});
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
app.use('/users', usersRoutes_1.default);
