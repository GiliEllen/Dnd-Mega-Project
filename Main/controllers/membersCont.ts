import RoomModel from './../models/roomModel';
import MemberModel from '../models/memberModel';
import UserModel, { UserValidation } from '../models/usersModel';
import jwt from 'jwt-simple';

export async function createMember(req, res) {
	try {
		const { roomDB, userDB, role } = req.body;
		const member = new MemberModel({ room: roomDB, user: userDB, role });
		const memberDB = await member.save();

		const cookie = { memberID: memberDB._id };
		const secret = process.env.JWT_SECRET;
		if (!secret) throw new Error("Couldn't find secret");
		const JWTCookie = jwt.encode(cookie, secret);
		res.cookie('memberId', JWTCookie);
		res.send({ success: true, memberDB, roomDB });
	} catch (error) {
		res.send({ error: error.message });
	}
}

export async function FindMember(req, res) {
	try {
		const { existingRoom, existingRoomPass, userDB } = req.body;
		if (!existingRoom || !existingRoomPass || !userDB)
			throw new Error(`didn't recive existing room information from req.body`);

		const roomDB = await RoomModel.findOne({ name: existingRoom });
		if (roomDB.name === existingRoom && roomDB.password === existingRoomPass) {
			const memberDB = await MemberModel.findOne({ 'room.name': roomDB.name, 'user.username': userDB.username });
			if (!memberDB) {
				throw new Error('Error01: Passward match but no member is found.');
			} else if (memberDB) {
				const cookie = { memberID: memberDB._id };
				const secret = process.env.JWT_SECRET;
				if (!secret) throw new Error("Couldn't find secret");
				const JWTCookie = jwt.encode(cookie, secret);
				res.cookie('memberId', JWTCookie);
				res.send({ success: true, memberDB, roomDB });
			}
		} else {
			throw new Error('Error02: Password or roomname incorrect');
		}
	} catch (error) {
		res.send({ error: error.message });
	}
}

export async function getMemberFromCookie(req, res) {
	try {
		const secret = process.env.JWT_SECRET;
		if (!secret) throw new Error("couldn't load secret from .env");
		let { memberId } = req.cookies;
		if (!memberId) throw new Error("couldn't get memberID from cookies");
		const decodedUserId = jwt.decode(memberId, secret);
		const { memberID } = decodedUserId;
		const memberDB = await MemberModel.findById(memberID);
		res.send({ memberDB });
	} catch (error) {
		res.send({ error: error.message });
	}
}

export async function getAllRoomMembers(req, res) {
	try {
		const { memberDB } = req.body;
		const memberArray = await MemberModel.find({ 'room.name': memberDB.room.name });
		res.send({ memberArray });
	} catch (error) {
		res.send({ error: error.message });
	}
}

export async function updateHit(req, res) {
	try {
		const { memberDBToUpdate, hitPoints } = req.body;
		if (!memberDBToUpdate || !hitPoints) throw new Error('missing data from server');
		const member = await MemberModel.findOne({
			'user.username': memberDBToUpdate.user.username,
			'room.name': memberDBToUpdate.room.name
		});
		if (!member) throw new Error('member not found');
		member.hitPoints = hitPoints;
		const memberDB = await member.save();
		res.send({ memberDB });
	} catch (error) {
		res.send({ error: error.message });
	}
}

export async function findMyDm(req, res) {
	try {
		const {member} = req.body;
		if(!member) throw new Error('no info from req.body')
		const memberDB = await MemberModel.findOne({
			'room.name': member.room.name, role: "dm"
		});
		if(!memberDB) throw new Error('no memberDB found');
		res.send({memberDB})
 	} catch (error) {
		res.send({error:error.message})
	}
}
