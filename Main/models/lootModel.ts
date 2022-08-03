import mongoose from 'mongoose';

const LootSchema = new mongoose.Schema({
    url:
    {
        type:String,
        required:true,
    },
    name: {
        type:String,
        required:true
    }, 
    createdBy: {
        type:Object,
        required:true
    }
})

const LootModel = mongoose.model('loot',LootSchema);

export default LootModel;