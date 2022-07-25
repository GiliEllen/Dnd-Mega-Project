import RoomModel from './../models/roomModel';
import MemberModel from '../models/memberModel';
import UserModel, { UserValidation } from '../models/usersModel';
import jwt from 'jwt-simple';

export async function addRoom(req, res) {
	console.log(req.body);
	const { newRoom } = req.body;

	const room = new RoomModel({ name: newRoom });
	const roomDB = await room.save();

	//sending cookie
	const cookie = { roomDB: roomDB._id };
	const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("Couldn't find secret");
  const JWTCookie = jwt.encode(cookie, secret);
  res.cookie("Room", JWTCookie);
	res.send({ success: true, roomDB });
}

export async function createMember(req, res) {
	try {
		const { roomDB, userDB, role } = req.body;
		const member = new MemberModel({ room: roomDB, user: userDB, role });
		const memberDB = await member.save();

		res.send(memberDB);
	} catch (error) {
		res.send({ error: error.message });
	}
}

export async function getUserFromCookies(req, res) {
	try {
		const secret = process.env.JWT_SECRET;
		if (!secret) throw new Error("couldn't load secret from .env");

		let { userId } = req.cookies;
		if (!userId) throw new Error("couldn't get userID from cookies");

		const decodedUserId = jwt.decode(userId, secret);
		const { userID } = decodedUserId;

		const userDB = await UserModel.findById(userID);
		res.send({ userDB });
	} catch (error) {
		res.send({ error: error.message });
	}
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

export async function updateNotes(req, res) {
	const { userID, updatedNotes } = req.body;
	console.log(userID, updatedNotes);
	res.send({ succeses: true });
}
console.log('this is usersCont.ts');

export async function handleRegister(req, res) {
	try {
		const { username, password } = req.body;
		const { error } = UserValidation.validate({ username, password });
		if (error) throw error;

		const user = new UserModel({ username, password });
		await user.save();

		//sending cookie
		const cookie = { userID: user._id };
		const secret = process.env.JWT_SECRET;
		if (!secret) throw new Error("Couldn't find secret");
		const JWTCookie = jwt.encode(cookie, secret);
		res.cookie('userId', JWTCookie);
		res.send({ register: true, user });
	} catch (error) {
		res.send({ error: error.message });
	}
}

// export async function saveUserToRoom(username, roomID) {
//   const user = await UserModel.findOne({ username, roomID});
//   const room = await RoomModel.findById({roomID});
//   const usetID = user._id
//   const userArr = room.userListID;
//   userArr.push(usetID);
//   room.userListID = userArr;
//   await room.save();
// }

export async function userLogin(req, res) {
	try {
		const { username, password } = req.body;
		const { error } = UserValidation.validate({ username, password });
		if (error) throw error;

		const user = await UserModel.findOne({ username, password });

		if (!user) {
			res.send({ login: false });
		} else {
			//sending cookie
			const cookie = { userID: user._id };
			const secret = process.env.JWT_SECRET;
			if (!secret) throw new Error("Couldn't find secret");
			const JWTCookie = jwt.encode(cookie, secret);
			res.cookie('userId', JWTCookie);
			res.send({ login: true, user });
		}
	} catch (error) {
		res.send({ error: error.message });
	}
}

export async function renderUserMainPage(req, res) {
	try {
		const { userid } = req.body;
		const user = await UserModel.findById(userid);
		res.send({ user });
	} catch (error) {
		res.send({ error: error.message });
	}
}

export async function getRoomByID(req, res) {
	try {
		const { roomID } = req.body;
		const room = await RoomModel.findById(roomID);
		res.send({ room });
	} catch (error) {
		res.send({ error: error.message });
	}
}

export async function getRoomUsers(res, req) {
	try {
		const { roomID } = req.body;
		const userlist = await UserModel.find({ roomID: roomID });
		console.log(userlist);
		res.send(userlist);
	} catch (error) {
		res.send({ error: error.message });
	}
}

export async function getRoomID(req, res) {
	console.log(req.cookies);
	// const {roomID} = req.cookies;
	// const {newRoom} = req.cookies;
	// console.log(newRoom, roomID);
	// res.send(newRoom, roomID)
}
