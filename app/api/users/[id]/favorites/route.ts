import User from "@models/user"
import Post from "@models/post"
import { connectToDB } from "@utils/database"

export const PUT = async (req: any, res: any) => {
 try {
    connectToDB()
    const { postId, userId } = await req.json()
    const user = await User.findById(userId)
    if (!user) {
        return new Response("User not found", { status: 404 });
    }
    if (!user.favorites.includes(postId)) {
        user.favorites.push(postId);
        await Post.findByIdAndUpdate(postId, { $inc: { likeCount: 1 } });
    } else {
        await User.updateOne({ _id: userId }, { $pull: { favorites: postId } })
        await Post.findByIdAndUpdate(postId, { $inc: { likeCount: -1 } });
    }

    await user.save();
    return new Response(JSON.stringify("Successfully favorited post"), { status: 200 })

 } catch (error) {
   // handle error
 }
}
