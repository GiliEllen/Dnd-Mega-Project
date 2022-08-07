import express from 'express';
import { uploadWorldMap, uploadCurrentdMap, getMaps, getMap} from '../controllers/mapsCont';

const router = express.Router();

router
    .post('/upload-world-map', uploadWorldMap)
    .post('/upload-current-map', uploadCurrentdMap)
    .post('/get-room-map', getMaps)
    .post('/getMap', getMap)
export default router;
