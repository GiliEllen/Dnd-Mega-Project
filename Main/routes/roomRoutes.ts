import express from 'express';
import { addRoom, getRoom, getMapForRoom
 } from '../controllers/roomCont';

const router = express.Router();

router
	.post('/new-room', addRoom)
    .post('/findRoom', getRoom)
    .get('/get-map-for-room', getMapForRoom)
export default router;
