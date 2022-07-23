import express from 'express';
import { addRoom, getRoom, updateNotes, userLogin, renderUserMainPage, handleRegister } from '../controllers/usersCont';

const router = express.Router();

router
	.post('/findRoom', getRoom)
	.post('/new-room', addRoom)
	.post('/updateNotes', updateNotes)
	.post('/register', handleRegister)
	.post('/login', userLogin)
	.post('/render-user-main-page', renderUserMainPage);

export default router;
