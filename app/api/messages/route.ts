import Message from "@models/messages";
import { connectToDB } from "@utils/database";

export const GET = async (req: any) => {
  try {
    await connectToDB();
    const messages = await Message.find({});
    return new Response(JSON.stringify(messages), {
        status: 200,
    })
  } catch (error) {
    return new Response("Failed to get all messages", {
        status: 500,
    })
  }
}