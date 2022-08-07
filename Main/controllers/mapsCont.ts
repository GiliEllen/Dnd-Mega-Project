import MapsModel from '../models/mapsModel'


export async function getMaps(req, res) {
	try{
		console.log('helo')
		const { memberDB } = req.body;
		if (!memberDB) throw new Error('didnt get roomID');
		const maps = await MapsModel.findOne({'roomID': memberDB.room._id})
		if(!maps) throw new Error ('could not find maps')
		console.log(maps)
		res.send({success:true, maps})
	}
	catch (error) {
		res.send({ error: error.message });
	}

}

export async function uploadWorldMap(req, res) {
	try{
		const { mapUrl, memberDB } = req.body;
		if (!mapUrl) throw new Error('didnt get URL');
		if (!memberDB) throw new Error('didnt get roomID');
		const mapDB = await MapsModel.findOne({ 'room.name': memberDB.room.name  });
		if (!mapDB){
			const maps = new MapsModel({ room: memberDB.room, worldMap: mapUrl });
			const worldmapDB = await maps.save();
			res.send({worldmapDB})
		}
		else if (mapDB){
			mapDB.worldMap = mapUrl;
			const worldmapDB = await mapDB.save()
			res.send({worldmapDB})
		}

	}
	catch (error) {
		res.send({ error: error.message });
	}

}

//currentMapDB


export async function uploadCurrentdMap(req, res) {
	try{
		const { mapUrl, memberDB } = req.body;
		if (!mapUrl) throw new Error('didnt get URL');
		if (!memberDB) throw new Error('didnt get roomID');
		const mapDB = await MapsModel.findOne({ 'room.name': memberDB.room.name  });
		if (!mapDB){
			const maps = new MapsModel({ room: memberDB.room, currentMap: mapUrl });
			const currentMapDB = await maps.save();
			res.send({currentMapDB})
		}
		else if (mapDB){
			mapDB.currentMap = mapUrl;
			const currentMapDB = await mapDB.save()
			res.send({currentMapDB})
		}

	}
	catch (error) {
		res.send({ error: error.message });
	}

}

export async function getMap(req, res) {
	try {
		const { memberDB } = req.body;
		if (!memberDB) throw new Error('didnt get memberDB');
		const MapDB = await MapsModel.findOne({'room.name': memberDB.room.name})
		if(!MapDB) throw new Error ('could not find maps')
		res.send({MapDB})
	} catch (error) {
		res.send({error: error.message})
	}

}

