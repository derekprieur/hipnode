import Post from "@models/post"
import { connectToDB } from "@utils/database"

export const GET = async (req: any, {params}: any) => {
try {
    connectToDB()
    const post = await Post.findById(params.id)
    console.log(post, 'post')
    if ( post && post.comments) {
        post.comments = post.comments.reverse()
    }
    return new Response(JSON.stringify(post), {
        status: 200,
    })
} catch (error) {
    console.log(error, 'error')
}
}