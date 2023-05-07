import HandoutsModel from '../models/handoutsModel';
import MemberHandoutsModel from './../models/MemberHandoutsModel';

export async function createHandout(req, res) {
	try {
		const { nameOfHandout, imgURL, memberDB } = req.body;
		if (!nameOfHandout || !imgURL) throw new Error(`couldn't recive data from req.body`);
		const handout = new HandoutsModel({ url: imgURL, name: nameOfHandout, createdBy: memberDB });
		const handoutDB = await handout.save();
		if (!handoutDB) throw new Error('failed to create new handout');
		res.send({ handoutDB });
	} catch (error) {
		res.send({ error: error.message });
	}
}
export async function Linkhandout(req, res) {
	try {
		const { handoutDB, membersToSendHandoutsArray } = req.body;
		membersToSendHandoutsArray.forEach((member) => {
			sendHandout(member, handoutDB);
		});
		const sentHandouts = await MemberHandoutsModel.find({ 'handout.name': handoutDB.name });
		if (!sentHandouts.length) throw new Error(`No handouts were sent`);
		res.send({ sentHandouts });
	} catch (error) {
		res.send({ error: error.message });
	}
}

export async function sendHandout(member, handout) {
	const linkedHandout = new MemberHandoutsModel({ member, handout });
	const linkedHandoutDB = await linkedHandout.save();
}

export async function findAllHandouts(req, res) {
	try {
		const { memberDB } = req.body;
		const existingHandouts = await HandoutsModel.find({ 'createdBy.user.name': memberDB.username });
		if (!existingHandouts) throw new Error(`no handouts were found`);
		res.send({ existingHandouts });
	} catch (error) {
		res.send({ error: error.message });
	}
}
export async function findAllCheckedHandouts(req, res) {
    try {
        
    } catch (error) {
        
    }
}

// export async function findAllCheckedHandouts(req, res) {
// 	try {
// 		const { memberDB, existinhHandoutsIDArray } = req.body;
// 		if (!memberDB || !existinhHandoutsIDArray) throw new Error('misiing info from req.body');
// 		const exitingHandoutsToSendArray = [];
//         existinhHandoutsIDArray.forEach((handoutID) => {
// 			findtheseHandouts(handoutID, memberDB);
// 		});
		
// 	} catch (error) {
// 		res.send({ error: error.message });
// 	}
// }

// export async function  findtheseHandouts(handoutID, memberDB) {
//     const existingHandouts = await HandoutsModel.find({ 'createdBy.user.name': memberDB.username });
// }