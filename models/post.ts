import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
tags:{
    type: [String],
},
content:{
    type: String,
    required: true,
},
image:{
    type: String,
},
user:{
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
},
viewCount:{
    type: Number,
    default: 0,
},
likeCount:{
    type: Number,
    default: 0,
},
commentCount:{
    type: Number,
    default: 0,
},
createdAt:{
    type: Date,
    default: Date.now,
}
})

const Post = models.Post || model('Post', PostSchema);

export default Post;