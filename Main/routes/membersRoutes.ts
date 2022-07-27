import express from 'express';
import { createMember, FindMember } from '../controllers/membersCont';

const router = express.Router();

router

	.post('/create-Member', createMember)
	.post('/FindMember', FindMember)

export default router;
