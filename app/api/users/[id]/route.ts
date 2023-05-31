import User from "@models/user";
import { connectToDB } from "@utils/database";

export const GET = async (req: any, {params}: any) => {
    try {
        await connectToDB();
        const user = await User.findById(params.id);
        console.log(user, "user");
        return new Response(JSON.stringify(user), {
            status: 200,
        })
    } catch (error) {
        console.log(error);
        return new Response("Failed to get user", {
            status: 500,
        })
    }
}