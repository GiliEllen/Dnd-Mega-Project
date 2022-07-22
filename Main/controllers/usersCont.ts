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