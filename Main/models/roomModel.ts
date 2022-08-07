import mongoose from 'mongoose';
import Joi from 'joi';
import { joiPasswordExtendCore } from 'joi-password';
const joiPassword = Joi.extend(joiPasswordExtendCore);

const RoomSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const RoomModel = mongoose.model('Rooms',RoomSchema);

export default RoomModel;

export const RoomValidation = Joi.object({
    name:Joi.string().required(),
    password: joiPassword
    .string()
    .min(6)
    .max(16)
    .minOfSpecialCharacters(1)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .noWhiteSpaces()
    .required()
})