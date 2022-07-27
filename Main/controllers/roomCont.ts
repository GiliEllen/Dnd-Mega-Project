import RoomModel from './../models/roomModel';
import MemberModel from '../models/memberModel';
import UserModel, { UserValidation } from '../models/usersModel';
import jwt from 'jwt-simple';

export async function addRoom(req, res) {
	console.log(req.body);
	const { newRoom, newRoomPassword } = req.body;

	const room = new RoomModel({ name: newRoom, password: newRoomPassword });
	const roomDB = await room.save();

	//sending cookie
	const cookie = { roomID: roomDB._id };
	const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("Couldn't find secret");
  const JWTCookie = jwt.encode(cookie, secret);
  res.cookie("Room", JWTCookie);
	res.send({ success: true, roomDB });
}

export async function getRoom(req, res) {
	try {
		const { existingRoom } = req.body;
		if (!existingRoom) throw new Error(`didn't recive existing room from req.body`);
		const roomDB = await RoomModel.findOne({ name: existingRoom });
		res.cookie('roomID', roomDB._id);
		res.cookie('newRoom', false);
		res.send({ success: true, roomDB });
	} catch (error) {
		res.send({ error: error.message });
	}
}