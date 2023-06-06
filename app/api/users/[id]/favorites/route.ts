import User from "@models/user"
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
        console.log('adding favorite')
        user.favorites.push(postId);
    } else {
        console.log('removing favorite')
        await User.updateOne({ _id: userId }, { $pull: { favorites: postId } })
    }

    await user.save();
    console.log('successfully favorited post')
    return new Response(JSON.stringify("Successfully favorited post"), { status: 200 })

 } catch (error) {
    console.log(error)
 }
}