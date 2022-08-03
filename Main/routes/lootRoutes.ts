import express from 'express';
import { createLoot, LinkLoot, findAllLoot, findAllCheckedLoot } from '../controllers/lootCont'

const router = express.Router();

router

	.post('/create-new-Loot', createLoot)
	.post('/LinkLoot', LinkLoot)
	.post('/find-All-dm-Loot', findAllLoot)
	.post('/find-All-checked-Loot', findAllCheckedLoot)

export default router;
