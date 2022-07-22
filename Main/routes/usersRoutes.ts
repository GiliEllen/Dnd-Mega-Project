import express from 'express';
import { addRoom, getRoom } from '../controllers/usersCont';

const router = express.Router();

router
    .post('/findRoom', getRoom)
    .post('/new-room', addRoom);

export default router;
