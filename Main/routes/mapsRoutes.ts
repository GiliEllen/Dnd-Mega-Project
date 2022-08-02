import express from 'express';
import { uploadWorldMap, uploadCurrentdMap, getMaps
 } from '../controllers/mapsCont';

const router = express.Router();

router
    .post('/upload-world-map', uploadWorldMap)
    .post('/upload-current-map', uploadCurrentdMap)
    .post('/get-room-map', getMaps)
export default router;
