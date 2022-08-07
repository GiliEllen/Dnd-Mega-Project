"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const { createServer } = require('http');
const { Server } = require('socket.io');
const app = express_1.default();
const httpServer = createServer(app);
const cors = require('cors');
const io = new Server(httpServer);
require('dotenv').config();
app.use(cookie_parser_1.default());
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
app.use(cors());
const mongodb_uri = process.env.MONGODB_URI;
mongoose_1.default
    .connect(mongodb_uri)
    .then((res) => {
    console.log('Connected to DB');
})
    .catch((err) => {
    console.log('At mongoose.connect:');
    console.error(err.message);
});
httpServer.listen(3000, () => {
    console.log('listening on *:3000');
});
io.on('connection', (socket) => {
    console.log(`user Connected`);
    socket.on('updateHitForUser', (boleen) => {
        console.log(`server trying to update user`);
        if (boleen)
            io.emit('update');
    });
});
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
app.use('/users', usersRoutes_1.default);
const roomRoutes_1 = __importDefault(require("./routes/roomRoutes"));
app.use('/room', roomRoutes_1.default);
const membersRoutes_1 = __importDefault(require("./routes/membersRoutes"));
app.use('/member', membersRoutes_1.default);
const handoutsRoutes_1 = __importDefault(require("./routes/handoutsRoutes"));
app.use('/handout', handoutsRoutes_1.default);
const lootRoutes_1 = __importDefault(require("./routes/lootRoutes"));
app.use('/loot', lootRoutes_1.default);
const mapsRoutes_1 = __importDefault(require("./routes/mapsRoutes"));
app.use('/maps', mapsRoutes_1.default);
