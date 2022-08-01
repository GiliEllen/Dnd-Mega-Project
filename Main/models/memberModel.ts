import mongoose from 'mongoose';
import Joi from 'joi';

const MemberSchema = new mongoose.Schema({
    room:
    {
        type:Object,
        required:true,
    },
    user: {
        type:Object,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    hitPoints:{
        type:Number,
        required:true,
        default:15
    }
    
})

const MemberModel = mongoose.model('Memmber',MemberSchema);

export default MemberModel;

export const UserValidation = Joi.object({
    room:Joi.object().required(),
    user:Joi.object().required(),
    role:Joi.string().required()
})