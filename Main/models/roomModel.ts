import mongoose from 'mongoose';
import Joi, { array } from 'joi';

const RoomSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required:true,
        unique:true
    },
    isNew:{
        type:Boolean
    },
    userListID: {
        type:Array
    }
})

const RoomModel = mongoose.model('Rooms',RoomSchema);

export default RoomModel;

export const UserValidation = Joi.object({
    name:Joi.string().required(),
    isNew:Joi.boolean()
})