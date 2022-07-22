"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('this is server.ts');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
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
server.listen(3000, () => {
    console.log('listening on *:3000');
});
