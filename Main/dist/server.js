"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = express_1.default();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
require('dotenv').config();
app.use(cookie_parser_1.default());
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
const mongodb_uri = process.env.MONGODB_URI;
mongoose_1.default.connect(mongodb_uri).then(res => {
    console.log("Connected to DB");
}).catch(err => {
    console.log('At mongoose.connect:');
    console.error(err.message);
});
server.listen(3000, () => {
    console.log('listening on *:3000');
});
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
app.use('/users', usersRoutes_1.default);
const roomRoutes_1 = __importDefault(require("./routes/roomRoutes"));
app.use('/room', roomRoutes_1.default);
const membersRoutes_1 = __importDefault(require("./routes/membersRoutes"));
app.use('/member', membersRoutes_1.default);
