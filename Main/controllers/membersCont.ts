import RoomModel from './../models/roomModel';
import MemberModel from '../models/memberModel';
import UserModel, { UserValidation } from '../models/usersModel';
import jwt from 'jwt-simple';


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