import mongoose from 'mongoose';

const HandoutsSchema = new mongoose.Schema({
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

const HandoutsModel = mongoose.model('Handouts',HandoutsSchema);

export default HandoutsModel;