import express from 'express';
import { createHandout, Linkhandout } from '../controllers/handoutsCont'

const router = express.Router();

router

	.post('/create-new-handout', createHandout)
	.post('/Linkhandout', Linkhandout)

export default router;
