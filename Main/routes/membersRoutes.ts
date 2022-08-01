import express from 'express';
import {
	createMember,
	FindMember,
	getMemberFromCookie,
	getAllRoomMembers,
	updateHit,
	findMyDm
} from '../controllers/membersCont';

const router = express.Router();

router
	.get('/get-member-from-cookie', getMemberFromCookie)
	.post('/create-Member', createMember)
	.post('/FindMemberByRoom', FindMember)
	.post('/getAllRoomMembers', getAllRoomMembers)
	.post('/updateHit', updateHit)
	.post('/findMyDm', findMyDm)

export default router;
