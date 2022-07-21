import RoomModel from './../models/roomModel';

export async function addRoom(req, res) {
	console.log(req.body);
	const { newRoom } = req.body;

	const room = new RoomModel({ name: newRoom });
	const roomDB = await room.save();

	res.send({ success: true, roomID: roomDB._id });
}

export async function room(req, res) {
    try {
        console.log(req.body)
        // const { newRoom } = req.body;
        // if(!newRoom) throw new Error(`didn't recive new room from req.body`);
        // res.send({newRoom})

        res.send('successfuly get')
    } catch (error) {
        res.send({error:error.message})
    }
}