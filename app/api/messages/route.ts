import Message from "@models/messages";
import { connectToDB } from "@utils/database";

export const GET = async (req: any) => {
  const headers = {
    "Access-Control-Allow-Origin": "https://hipnode-dprieur.vercel.app",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Allow-Headers": "Content-Type"
}

  try {
    await connectToDB();
    const messages = await Message.find({});
    return new Response(JSON.stringify(messages), {
        status: 200,
        headers
    })
  } catch (error) {
    return new Response("Failed to get all messages", {
        status: 500,
    })
  }
}