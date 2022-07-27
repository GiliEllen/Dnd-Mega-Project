console.log('this is usersModel.ts')

import mongoose from 'mongoose';
import Joi from 'joi';

const UserSchema = new mongoose.Schema({
    email:
    {
        type:String,
        required:true,
        unique:true
    },
    username:
    {
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
})

const UserModel = mongoose.model('users',UserSchema);

export default UserModel;

export const UserValidation = Joi.object({
    email:Joi.string().required().email(),
    username:Joi.string().required(),
    password:Joi.string().required()
})