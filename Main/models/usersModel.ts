console.log('this is usersModel.ts')

import mongoose from 'mongoose';
import Joi from 'joi';

const UserSchema = new mongoose.Schema({
    username:
    {
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    roomID:{
        type:String,
        required:true
    },
    role:{
        enum:["user", "dm"],
        defualt:"user",
        type:String,
        required:true
    }
})

const UserModel = mongoose.model('users',UserSchema);

export default UserModel;

export const UserValidation = Joi.object({
    username:Joi.string().required(),
    password:Joi.string().required(),
    roomID:Joi.string().required(),
    role:Joi.string().required()
})