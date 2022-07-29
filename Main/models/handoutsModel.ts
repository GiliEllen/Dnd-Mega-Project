import mongoose from 'mongoose';
import Joi from 'joi';

const HandoutsSchema = new mongoose.Schema({
    url:
    {
        type:String,
        required:true,
    },
    name: {
        type:String,
        required:true
    }
})

const HandoutsModel = mongoose.model('Handouts',HandoutsSchema);

export default HandoutsModel;

export const UserValidation = Joi.object({
    url:Joi.string().required(),
    name:Joi.string().required()
})