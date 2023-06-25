import Message from "@models/messages";
import { connectToDB } from "@utils/database";

export const PUT = async (req: any, { params }: any) => {
    try {
        await connectToDB();
        const {sender, message, date} = await req.json();
        console.log(sender, 'sender')
        const newMessage = {
            sender,
            message,
            date: Date.now(),
        }
        console.log(params.id, 'params.id')
        const messageThread = await Message.findById(params.id);
        messageThread.messages.push(newMessage);
        await messageThread.save();
        return new Response(JSON.stringify(messageThread), {
            status: 200,
        })
    } catch (error) {
        console.log(error, 'error')
        return new Response("Failed to create message", {
            status: 500,
        })
    }
  }

export const GET = async (req: any, { params }: any) => {
    try {
        await connectToDB();
        const messageThread = await Message.findById(params.id);
        return new Response(JSON.stringify(messageThread), {
            status: 200,
        })
    } catch (error) {
        console.log(error, 'error')
    }
};