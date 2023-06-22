import { Schema, model, models } from "mongoose";

const MessageSchema = new Schema({
    user1: String,
    user2: String,
    messages: [{
        sender: String,
        message: String,
        date: String
    }],
});

const Message = models.Message || model('Message', MessageSchema);

export default Message;