import UserModel, { UserValidation } from '../models/usersModel';
import jwt from 'jwt-simple';
import bcrypt from 'bcrypt';
const saltRounds = 10;

export async function getUserFromCookies(req, res) {
	try {
		const secret = process.env.JWT_SECRET;
		if (!secret) throw new Error("couldn't load secret from .env");

		let { userId } = req.cookies;
		if (!userId) throw new Error("couldn't get userID from cookies");

		const decodedUserId = jwt.decode(userId, secret);
		const { userID } = decodedUserId;

		const userDB = await UserModel.findById(userID);
		res.send({ userDB });
	} catch (error) {
		res.send({ error: error.message });
	}
}

export async function updateNotes(req, res) {
	const { userID, updatedNotes } = req.body;
	console.log(userID, updatedNotes);
	res.send({ succeses: true });
}

export async function handleRegister(req, res) {
	try {
		const { username, password, email, rePassword } = req.body;
		const { error } = UserValidation.validate({ username, password, email, repeatPassword: rePassword });
		if (error) throw error;

		const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

		const user = new UserModel({ username, password: hash, email });
		await user.save();

		//sending cookie
		const cookie = { userID: user._id };
		const secret = process.env.JWT_SECRET;
		if (!secret) throw new Error("Couldn't find secret");
		const JWTCookie = jwt.encode(cookie, secret);
		res.cookie('userId', JWTCookie);
		
		res.send({ register: true, user });
	} catch (error) {
		res.send({ error: error.message });
	}
}

export async function userLogin(req, res) {
	try {
		const { password, email  } = req.body;

		const userDB = await UserModel.findOne({ email });
		if (!userDB) throw new Error("User with that email can't be found")
        if (!userDB.password) throw new Error("No password in DB");

        const isMatch = await bcrypt.compare(password, userDB.password);
        if (!isMatch) throw new Error("Email or password do not match");
		if (!userDB) {
			res.send({ login: false });
		} else {
			//sending cookie
			const cookie = { userID: userDB._id };
			const secret = process.env.JWT_SECRET;
			if (!secret) throw new Error("Couldn't find secret");
			const JWTCookie = jwt.encode(cookie, secret);
			res.cookie('userId', JWTCookie);
			res.send({ login: true, userDB });
		}
	} catch (error) {
		res.send({ error: error.message });
	}
}

export async function renderUserMainPage(req, res) {
	try {
		const { userid } = req.body;
		const user = await UserModel.findById(userid);
		res.send({ user });
	} catch (error) {
		res.send({ error: error.message });
	}
}

export async function getRoomUsers(res, req) {
	try {
		const { roomID } = req.body;
		const userlist = await UserModel.find({ roomID: roomID });
		console.log(userlist);
		res.send(userlist);
	} catch (error) {
		res.send({ error: error.message });
	}
}

export async function getRoomID(req, res) {
	console.log(req.cookies);
	// const {roomID} = req.cookies;
	// const {newRoom} = req.cookies;
	// console.log(newRoom, roomID);
	// res.send(newRoom, roomID)
}
