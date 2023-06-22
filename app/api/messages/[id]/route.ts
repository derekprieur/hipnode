import Message from "@models/messages";
import { connectToDB } from "@utils/database";

export const PUT = async (req: any, { params }: any) => {
    try {
        await connectToDB();
        const {message} = await req.json();
        // find message by params.id and update it
        console.log(params.id, 'params.id')
        const messageThread = await Message.findById(params.id);
        console.log('test')
        console.log(messageThread, 'messageThread')
        messageThread.messages.push(message);
        await messageThread.save();
        return new Response(JSON.stringify(messageThread), {
            status: 200,
        })
    } catch (error) {
        return new Response("Failed to create message", {
            status: 500,
        })
    }
  }