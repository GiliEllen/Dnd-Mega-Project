console.log('this is usersRoutes.ts')
import express from 'express'
import { handleRegister, userLogin, renderUserMainPage } from '../controllers/usersCont'
const router = express.Router();

router
.post('/register', handleRegister)
.post('/login', userLogin)
.post('/render-user-main-page', renderUserMainPage)

export default router