import { Schema, model, models } from "mongoose";

const MessageSchema = new Schema({

});

const Message = models.Message || model('Message', MessageSchema);

export default Message;