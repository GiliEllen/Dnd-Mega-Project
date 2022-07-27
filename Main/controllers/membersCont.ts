import RoomModel from './../models/roomModel';
import MemberModel from '../models/memberModel';
import UserModel, { UserValidation } from '../models/usersModel';
import jwt from 'jwt-simple';


export async function createMember(req, res) {
	try {
		const { roomDB, userDB, role } = req.body;
		const member = new MemberModel({ room: roomDB, user: userDB, role });
		const memberDB = await member.save();

		res.send({memberDB});
	} catch (error) {
		res.send({ error: error.message });
	}
}

export async function FindMember(req, res) {
	try {
		const { existingRoom, existingRoomPass, userDB } = req.body;
		if (!existingRoom || !existingRoomPass || !userDB) throw new Error(`didn't recive existing room information from req.body`);
		const roomDB = await RoomModel.findOne({ name: existingRoom });
		
		const memberDB = await MemberModel.findOne({ "room.name": roomDB.name });
		if(!memberDB) {
			// throw new Error(`member not found`);
			res.send({success: false})
		};
		if(memberDB.room.password === existingRoomPass) {
			if(memberDB.user.name === userDB.username) {
				res.send({ success: true, memberDB, roomDB });
			}else {
				res.send({ success: false, error: "the password and room are correct but user not a match" , roomDB});
			}
			
		} else {
			res.send({ success: false, error:"passwords do not match" });
		}
		
	} catch (error) {
		res.send({ error: error.message });
	}
}