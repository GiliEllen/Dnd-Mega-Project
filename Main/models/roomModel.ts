import mongoose from 'mongoose';
import Joi from 'joi';

const RoomSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required:true,
        unique:true
    }
})

const RoomModel = mongoose.model('Rooms',RoomSchema);

export default RoomModel;

export const UserValidation = Joi.object({
    name:Joi.string().required()
})