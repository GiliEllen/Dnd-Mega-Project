import mongoose from 'mongoose';
import Joi from 'joi';

const worldDataSchema = new mongoose.Schema({
    roomID:
    {
        type:String,
        required:true,
        unique:true
    },
    worldMap:
    {
        type:String,
        required:true,
    },
    currentMap:
    {
        type:String,
        required:true
    }
})

const worldDataModel = mongoose.model('worldDataModel',worldDataSchema);

export default worldDataModel;
