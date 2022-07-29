import HandoutsModel from '../models/handoutsModel';
import MemberHandoutsModel from '../models/memberHandoutsModel';

export async function createHandout(req, res) {
	try {
		const { nameOfHandout, imgURL } = req.body;
		if (!nameOfHandout || !imgURL) throw new Error(`couldn't recive data from req.body`);
		const handout = new HandoutsModel({ url: imgURL, name: nameOfHandout });
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
        if(!sentHandouts.length) throw new Error(`No handouts were sent`)
        if(sentHandouts.length) res.send({sentHandouts})
	} catch (error) {
        res.send({ error: error.message });
    }
}

export async function sendHandout(member, handout) {
	const linkedHandout = new MemberHandoutsModel({ member: member, handout });
	const linkedHandoutDB = await linkedHandout.save();
}
