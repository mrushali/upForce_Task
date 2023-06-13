import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobileno: {
        type: String,
    },
    gender: {
        type: String,
    },
    status: {
        type: String,
    },
    image: {
        type: String,
    },
    location: {
        type: String,
    }
})

const PostMessage = new mongoose.model('PostMessage', postSchema);

export default PostMessage;