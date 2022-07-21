import express from 'express';
import { addRoom, room } from '../controllers/usersCont';

const router = express.Router();

router
    .post('/new-room', addRoom)
    .get('/room', room)

export default router;
