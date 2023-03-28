const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true
    },
     googleId:{
        type: String,
        required : true
    },
    imageUrl:{
        type: String,
        required : true
    },
    password:{
        type: String,
        required : true
    },

    date:{
        type:Date,
        default:Date.now
    }
})
const UserModel = mongoose.model('UserModel',UserSchema);
module.exports = UserModel;