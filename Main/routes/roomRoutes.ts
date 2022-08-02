import express from 'express';
import { addRoom,getRoom
 } from '../controllers/roomCont';

const router = express.Router();

router
	.post('/new-room', addRoom)
    .post('/findRoom', getRoom)
export default router;
