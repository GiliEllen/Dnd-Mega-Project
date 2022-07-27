import express from 'express';
import { createMember } from '../controllers/membersCont';

const router = express.Router();

router

	.post('/create-Member', createMember)

export default router;
