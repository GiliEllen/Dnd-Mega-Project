import express from 'express';
import { createMember, FindMember, getMemberFromCookie, getAllRoomMembers} from '../controllers/membersCont';

const router = express.Router();

router
	.get('/get-member-from-cookie', getMemberFromCookie)
	.post('/create-Member', createMember)
	.post('/FindMemberByRoom', FindMember)
	.post('/getAllRoomMembers', getAllRoomMembers)

export default router;
