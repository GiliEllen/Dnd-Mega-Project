import express from 'express';
import {
	updateNotes,
	userLogin,
	renderUserMainPage,
	handleRegister, getRoomID,
	getRoomByID,
	getRoomUsers,
	getUserFromCookies, } from '../controllers/usersCont';

const router = express.Router();

router
	.get('/getRoomID', getRoomID)
	.get('/get-user-from-cookies', getUserFromCookies)
	.post('/getRoomByID', getRoomByID)
	.post('/getRoomUsers', getRoomUsers)
	.post('/updateNotes', updateNotes)
	.post('/register', handleRegister)
	.post('/login', userLogin)
	.post('/render-user-main-page', renderUserMainPage)

export default router;
