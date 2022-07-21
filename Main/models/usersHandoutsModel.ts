console.log('this is usersHandoutsModel.ts')

import mongoose from 'mongoose';
import Joi from 'joi';

const UserHandoutsSchema = new mongoose.Schema({
    userID:
    {
        type:String,
        required:true,
    },
    handouts: {
        //object = handouts
        type:Array<object>
    }
})

const UserHandoutsModel = mongoose.model('UserHandouts',UserHandoutsSchema);

export default UserHandoutsModel;

export const UserValidation = Joi.object({
    url:Joi.string().required(),
})