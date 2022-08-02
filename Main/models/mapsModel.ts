import mongoose from 'mongoose';
import Joi from 'joi';

const mapsSchema = new mongoose.Schema({
    roomID:
    {
        type:String,
        required:true,
        unique:true
    },
    worldMap:
    {
        type:String,

    },
    currentMap:
    {
        type:String,
        
    }
})

const MapsModel = mongoose.model('Maps',mapsSchema);

export default MapsModel;
