import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

const { createServer } = require('http');
const { Server } = require('socket.io');
import dotenv from 'dotenv';
const app = express();
const httpServer = createServer(app);
const cors = require('cors');
const io = new Server(httpServer);

require('dotenv').config();

app.use(cookieParser());
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

const mongodb_uri = process.env.MONGODB_URI;

mongoose
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
  socket.on('updateHitForUser', (boleen) => {
    if(boleen) io.emit('update')
  })
});

// io.listen(3000);

import usersRoutes from './routes/usersRoutes';
app.use('/users', usersRoutes);

import roomRoutes from './routes/roomRoutes';
app.use('/room', roomRoutes);

import memberRoutes from './routes/membersRoutes';
app.use('/member', memberRoutes);

import handoutRoutes from './routes/handoutsRoutes';
app.use('/handout', handoutRoutes);

import lootRoutes from './routes/lootRoutes';
app.use('/loot', lootRoutes);

import mapsRoutes from './routes/mapsRoutes';
app.use('/maps', mapsRoutes);