import express from 'express';
import { addRoom,
	getRoom,
	updateNotes,
	userLogin,
	renderUserMainPage,
	handleRegister, getRoomID,
	getRoomByID,
	getRoomUsers,
	getUserFromCookies,
	createMember } from '../controllers/usersCont';

const router = express.Router();

router
	.get('/getRoomID', getRoomID)
	.get('/get-user-from-cookies', getUserFromCookies)
	.post('/findRoom', getRoom)
	.post('/new-room', addRoom)
	.post('/getRoomByID', getRoomByID)
	.post('/getRoomUsers', getRoomUsers)
	.post('/updateNotes', updateNotes)
	.post('/register', handleRegister)
	.post('/login', userLogin)
	.post('/render-user-main-page', renderUserMainPage)
	.post('/create-Member', createMember)

export default router;
