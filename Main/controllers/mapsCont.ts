import RoomModel from '../models/roomModel';
import MemberModel from '../models/memberModel';
import MapsModel from '../models/mapsModel'
import UserModel, { UserValidation } from '../models/usersModel';
import jwt from 'jwt-simple';

export async function getMaps(req, res) {
	try{

		const { memberRoom } = req.body;
		if (!memberRoom) throw new Error('didnt get roomID');
		const maps = await MapsModel.findOne({'roomID': memberRoom})
		if(!maps) throw new Error ('couldnot find maps')
		console.log(maps)
		res.send({success:true, maps})
	}
	catch (error) {
		res.send({ error: error.message });
	}

}

export async function uploadWorldMap(req, res) {
	try{
		const { mapUrl, roomID } = req.body;
		if (!mapUrl) throw new Error('didnt get URL');
		if (!roomID) throw new Error('didnt get roomID');
		const roomDB = await MapsModel.findOne({ roomID: roomID  });
		if (!roomDB){
			const maps = new MapsModel({ roomID: roomID, worldMap: mapUrl });
			const mapsDB = await maps.save();
		}
		else if (roomDB){
			roomDB.worldMap = mapUrl
			const updatedMap = await roomDB.save()
		}
		
		
	}
	catch (error) {
		res.send({ error: error.message });
	}

}


export async function uploadCurrentdMap(req, res) {
	try{
		const { mapUrl, roomID } = req.body;
		if (!mapUrl) throw new Error('didnt get URL');
		if (!roomID) throw new Error('didnt get roomID');
		const roomDB = await MapsModel.findOne({roomID: roomID});
		if (!roomDB){	
			const maps = new MapsModel({ roomID: roomID, currentMap: mapUrl });
			const mapsDB = await maps.save();
		}
		else if (roomDB){
			roomDB.currentMap = mapUrl
			const updatedMap = await roomDB.save()
		}
	}
	catch (error) {
		res.send({ error: error.message });
	}

}

