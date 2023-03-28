const mongoose = require('mongoose')
const LikeSchema = mongoose.Schema({
    postid:{
        type:String,
        required:true
    },
    likes:{
        type:Number,
        required :true
    },

    date:{
        type:Date,
        default:Date.now
    }

})
const LikeModel = mongoose.model('LikeModel',LikeSchema);
module.exports = LikeModel;