import RoomModel from './../models/roomModel';
import jwt from 'jwt-simple';
import { RoomValidation } from './../models/roomModel';

export async function addRoom(req, res) {
	try {
		console.log(req.body);
		const { newRoom, newRoomPassword } = req.body;
		const { error } = RoomValidation.validate({ name: newRoom, password: newRoomPassword });
		if (error) throw error;
		const room = new RoomModel({ name: newRoom, password: newRoomPassword });
		const roomDB = await room.save();

		//sending cookie
		const cookie = { roomID: roomDB._id };
		const secret = process.env.JWT_SECRET;
		if (!secret) throw new Error("Couldn't find secret");
		const JWTCookie = jwt.encode(cookie, secret);
		res.cookie('Room', JWTCookie);
		res.send({ success: true, roomDB });
	} catch (error) {
		res.send({ error: error.message })
	}
}

export async function getRoom(req, res) {
	try {
		const { existingRoom } = req.body;
		if (!existingRoom) throw new Error(`didn't recive existing room from req.body`);
		const roomDB = await RoomModel.findOne({ name: existingRoom });
		console.log(roomDB);
		res.cookie('roomID', roomDB._id);
		res.send({ success: true, roomDB });
	} catch (error) {
		res.send({ error: error.message });
	}
}
