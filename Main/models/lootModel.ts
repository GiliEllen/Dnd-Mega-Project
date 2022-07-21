console.log('this is lootModel.ts')

import mongoose from 'mongoose';
import Joi from 'joi';

const LootSchema = new mongoose.Schema({
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

const LootModel = mongoose.model('loot',LootSchema);

export default LootModel;

export const UserValidation = Joi.object({
    url:Joi.string().required(),
    name:Joi.string().required()
})