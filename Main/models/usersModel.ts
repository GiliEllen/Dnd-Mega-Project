import mongoose from 'mongoose';
import Joi from 'joi';
import { joiPasswordExtendCore } from 'joi-password';
const joiPassword = Joi.extend(joiPasswordExtendCore);

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
    password: joiPassword
        .string()
        .min(6)
        .max(16)
        .minOfSpecialCharacters(1)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .noWhiteSpaces()
        .required(),
    repeatPassword: Joi.ref('password')
})