import { connectToDB } from "@utils/database"
import Post from "@models/post"

export const PUT = async (req: any) => {
try {
    connectToDB()
    const { comment, postId, userId, replyingTo, commentBeingRepliedToId } = await req.json()
    const post = await Post.findById(postId)
    const newComment = {
        user: userId,
        date: Date.now(),
        content: comment,
    }
    post.comments.push(newComment)
    await post.save()
    return new Response(JSON.stringify(post), {
        status: 200,
    })
} catch (error) {
   // handle error
}
}