import User from "@models/user";
import { connectToDB } from "@utils/database";

export const PUT = async (req: any, {params}: any) => {
    
    try {
        await connectToDB();
        const user = await User.findById(params.id);
        
        if (!user) {
            return new Response("User not found", { status: 404 });
        }
        
        user.notifications = user.notifications.map((notification: Notification) => ({
            ...notification, 
            isRead: true
        }));

        await user.save();

        return new Response(JSON.stringify(user), { status: 200 });

    } catch (error) {
        return new Response("Failed to follow user", { status: 500 });
    }
}