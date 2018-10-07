const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfileSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    handle: {
        type: String,
        required: true,
        max: 40
    },
    location: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    intrests: {
        type: [String],
        required: true
    },
    bio: {
        type: String
    },
    cars: [{
        model: {
            type: String,
            required: true
        },
        horsepower: {
            type: String,
            required: true
        },
        millage: {
            type: String,
            required: true
        },
        //own date
        from: {
            type: Date,
            // required: true
        },
        to: {
            type: Date
        },
        current: {
            type: Boolean,
            default: false
        },
        equipment: {
            type: String
        }
    }],
    social: {
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        facebook: {
            type: String
        },
        instagram: {
            type: String
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
})