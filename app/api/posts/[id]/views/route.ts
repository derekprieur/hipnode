import Post from "@models/post"
import { connectToDB } from "@utils/database"

export const PATCH = async (req: any, {params}: any) => {
    try {
    await connectToDB()
    const {id} = params
    const post = await Post.findById(id)
    if(!post) return new Response("Post not found", {
        status: 404,
    })
    post.viewCount += 1
    await post.save()
    return new Response(JSON.stringify("Post views updated"), {
        status: 200,
    })
    } catch (error) {
       // handle error
    }
}