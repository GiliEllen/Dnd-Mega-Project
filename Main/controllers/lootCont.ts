import LootModel from './../models/lootModel';
import MemberLootModel from '../models/memberLootModel';

export async function createLoot(req, res) {
	try {
		const { nameOfLoot, imgURL, memberDB } = req.body;
		if (!nameOfLoot || !imgURL) throw new Error(`couldn't recive data from req.body`);
		const loot = new LootModel({ url: imgURL, name: nameOfLoot, createdBy: memberDB });
		const lootDB = await loot.save();
		if (!lootDB) throw new Error('failed to create new handout');
		res.send({ lootDB });
	} catch (error) {
		res.send({ error: error.message });
	}
}
export async function LinkLoot(req, res) {
	try {
		const { lootDB, membersToSendLootArray } = req.body;
		membersToSendLootArray.forEach((member) => {
			sendLoot(member, lootDB);
		});
		const sentLoot = await MemberLootModel.find({ 'loot.name': lootDB.name });
		if (!sentLoot.length) throw new Error(`No loot were sent`);
		res.send({ sentLoot });
	} catch (error) {
		res.send({ error: error.message });
	}
}

export async function sendLoot(member, loot) {
	const linkedLoot = new MemberLootModel({ member, loot });
	const linkedLootDB = await linkedLoot.save();
}

export async function findAllLoot(req, res) {
	try {
		const { memberDB } = req.body;
		const existingLoot = await LootModel.find({ 'createdBy.user.name': memberDB.username });
		if (!existingLoot) throw new Error(`no Loot were found`);
		res.send({ existingLoot });
	} catch (error) {
		res.send({ error: error.message });
	}
}
export async function findAllCheckedLoot(req, res) {
    try {
        
    } catch (error) {
        
    }
}
