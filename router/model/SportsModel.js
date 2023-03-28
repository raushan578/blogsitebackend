const mongoose = require('mongoose')
const SportsSchema = new mongoose.Schema({
    title:{
        type: String,
        required : true
    },
    desc:{
        type: String,
        required : true
    },
     rating:{
        type: String,
        required : true
    },
    author:{
        type: String,
        required : true
    },
    type:{
        type: String,
        required : true
    },
    image:{
        type: String,
        required : true
    },
    userId:{
        type: String,
        required : true
    },
 
    date:{
        type:Date,
        default:Date.now
    }
})
const SportsModel = mongoose.model('SportsModel',SportsSchema);
module.exports = SportsModel;