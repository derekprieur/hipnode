import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required!']
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    favorites: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    followers: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    notifications: [
        {
            type: {type: String},
            userId: { type: Schema.Types.ObjectId,  },
            postId: { type: Schema.Types.ObjectId,  },
            time: { type: Date, default: Date.now },
            isRead: { type: Boolean, default: false },
            commentId: { type: Schema.Types.ObjectId, default: null }, 
        }
    ]
})

const User = models.User || model('User', userSchema);

export default User;