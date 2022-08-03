import mongoose from 'mongoose';

const MemberLootSchema = new mongoose.Schema({
    member:
    {
        type:Object,
        required:true,
    },
    loot: {
        type:Object,
        required:true
    }
})

const MemberLootModel = mongoose.model('MemberLoot', MemberLootSchema);

export default MemberLootModel;
