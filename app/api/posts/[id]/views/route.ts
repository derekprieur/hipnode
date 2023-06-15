import Post from "@models/post"
import { connectToDB } from "@utils/database"

export const PATCH = async (req: any, {params}: any) => {
    console.log('here')
    try {
    await connectToDB()
    const {id} = params
    console.log(id, 'id')
    const post = await Post.findById(id)
    console.log(post, 'post')
    if(!post) return new Response("Post not found", {
        status: 404,
    })
    post.viewCount += 1
    console.log(post.viewCount, 'views')
    await post.save()
    console.log('save')
    return new Response(JSON.stringify("Post views updated"), {
        status: 200,
    })
    } catch (error) {
        console.log(error)
    }
}