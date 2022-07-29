import express from 'express';
import { createHandout, Linkhandout, findAllHandouts } from '../controllers/handoutsCont'

const router = express.Router();

router

	.post('/create-new-handout', createHandout)
	.post('/Linkhandout', Linkhandout)
	.post('/find-All-dm-handouts', findAllHandouts)

export default router;
