import mongoose from 'mongoose';

const UserSchema =  new mongoose.Schema({
    firstname : {
        type: String, 
        required:[true, 'Firstname is required'],
        minlength: [3, 'Firstname can\'t be smaller than 3 characters'],
        maxlength: [64, 'Firstname can\'t be greater than 64 characters' ]
    },

    lastname : {
        type: String, 
        required:[true, 'Lastname is required'],
        minlength: [3, 'Lastname can\'t be smaller than 3 characters'],
        maxlength: [64, 'Lastname can\'t be greater than 64 characters' ]
    },

    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required:[true, 'Email is required'],
        match: [
           /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/,
           "Please provide a valid email address"
        ]
    },

    password : {
        type:String,
        required:[true, 'Password is required'],
        minlength:8,
        select: false,
        maxlength:200,
        unique:true
    },

    location : {
        type: String, 
        required:[true, 'Username is required'],
        minlength: [3, 'Address can\'t be smaller than 3 characters'],
        maxlength: [64, 'Address can\'t be greater than 64 characters' ]
    }
}, {
    timestamps : true
});

export default mongoose.models.User || mongoose.model('User', UserSchema);