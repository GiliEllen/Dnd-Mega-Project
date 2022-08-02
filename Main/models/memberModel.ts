import mongoose from 'mongoose';

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
    },
    socketID:{
        type:String
    }
    
})

const MemberModel = mongoose.model('Memmber',MemberSchema);

export default MemberModel;
