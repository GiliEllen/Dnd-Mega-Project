import express from 'express';
import { createMember, FindMember, getMemberFromCookie} from '../controllers/membersCont';

const router = express.Router();

router
	.get('/get-member-from-cookie', getMemberFromCookie)
	.post('/create-Member', createMember)
	.post('/FindMember', FindMember)

export default router;
