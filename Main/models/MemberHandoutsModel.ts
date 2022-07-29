import mongoose from 'mongoose';

const MemberHandoutsSchema = new mongoose.Schema({
    member:
    {
        type:String,
        required:true,
    },
    handout: {
        type:Object,
        required:true
    }
})

const MemberHandoutsModel = mongoose.model('MemberHandouts',MemberHandoutsSchema);

export default MemberHandoutsModel;
