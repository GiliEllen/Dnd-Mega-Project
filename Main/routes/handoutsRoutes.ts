import express from 'express';
import { createHandout, Linkhandout, findAllHandouts, findAllCheckedHandouts } from '../controllers/handoutsCont'

const router = express.Router();

router

	.post('/create-new-handout', createHandout)
	.post('/Linkhandout', Linkhandout)
	.post('/find-All-dm-handouts', findAllHandouts)
	.post('/find-All-checked-handouts', findAllCheckedHandouts)

export default router;
