import RoomModel from './../models/roomModel';

export async function addRoom(req, res) {
	console.log(req.body);
	const { newRoom } = req.body;

	const room = new RoomModel({ name: newRoom });
	const roomDB = await room.save();

    res.cookie('roomID', roomDB._id)
	res.send({ success: true, roomID: roomDB._id });
}

export async function getRoom(req, res) {
    try {
        
        const { existingRoom } = req.body;
        if(!existingRoom) throw new Error(`didn't recive existing room from req.body`);
        const roomDB = await RoomModel.findOne({ name: existingRoom });
        res.cookie('roomID', roomDB._id)
        res.send({success: true, roomDB})

    } catch (error) {
        res.send({error:error.message})
    }
}

export async function updateNotes(req, res) {
    const {userID, updatedNotes} = req.body;
    console.log(userID, updatedNotes)
    res.send({succeses:true})
}
console.log('this is usersCont.ts')
import UserModel, {UserValidation} from "../models/usersModel";

export async function handleRegister(req, res) {
    try {
      const { username, password, roomID, role } = req.body;
      console.log(username, password, roomID)
      const { error } = UserValidation.validate({ username, password, roomID, role });
      if (error) throw error;
      
      const user = new UserModel({ username, password, roomID, role });
      await user.save()
        
      res.send({ register: true });
    } catch (error) {
      res.send({ error: error.message });
    }
  }


  export async function userLogin(req, res) {
    try {
      const { username, password, roomID, role} = req.body;
      const { error } = UserValidation.validate({ username, password, roomID, role});
      if (error) throw error;
  
      const user = await UserModel.findOne({ username, password, roomID, role});
      
      if (!user) {
        res.send({ login: false });
      } else {
        res.send({ login: true, user });
      }
    } catch (error) {
      res.send({ error: error.message });
    }
  }

  export async function renderUserMainPage(req, res){
    try {
      const {userid} = req.body
      const user = await UserModel.findById(userid)
      res.send({user})
    } 
    catch (error) {
      res.send({ error: error.message });
    }
  }