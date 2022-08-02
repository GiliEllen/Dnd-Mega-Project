import express from "express";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

require('dotenv').config()

app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json());

const mongodb_uri = process.env.MONGODB_URI;

mongoose.connect(mongodb_uri).then(res => {
  console.log("Connected to DB");
}).catch(err => {
  console.log('At mongoose.connect:')
  console.error(err.message)
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

import usersRoutes from './routes/usersRoutes';
app.use('/users', usersRoutes);

import roomRoutes from './routes/roomRoutes';
app.use('/room', roomRoutes);

import memberRoutes from './routes/membersRoutes';
app.use('/member', memberRoutes);


import mapsRoutes from './routes/mapsRoutes';
app.use('/maps', mapsRoutes);