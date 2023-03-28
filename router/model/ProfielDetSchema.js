const mongoose = require('mongoose');
const profileDetSchema = new mongoose.Schema({
    id:{
        type:String,
        requierd:true
    },
    linkedin:{
        type:String,
        requierd:true
    },
    github:{
        type:String,
        requierd:true
    },
    twitter:{
        type:String,
        requierd:true
    }
})

const ProfileDetModel = mongoose.model('ProfileDetModel',profileDetSchema);
module.exports = ProfileDetModel;