import express from 'express';
import { addRoom,getRoom, getWorldData
 } from '../controllers/roomCont';

const router = express.Router();

router
	.post('/new-room', addRoom)
    .post('/findRoom', getRoom)
    .post('/get-world-data', getWorldData)
export default router;
