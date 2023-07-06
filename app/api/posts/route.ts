import { connectToDB } from "@utils/database";
import Post from "@models/post";

export const POST = async (req: any) => {
    const { title, tags, content, user } = await req.json();
    try {
        await connectToDB();
        const newPost = new Post({
            title,
            image: '/assets/post1.png',
            tags,
            content,
            user,
        });
        await newPost.save();
        return new Response(JSON.stringify(newPost), {
            status: 201,
        })
    } catch (error) {
        return new Response("Failed to create a new prompt", {
            status: 500,
        })
    }
}

export const GET = async (req: any) => {
    try {
        await connectToDB();
        const posts = await Post.find({});
        return new Response(JSON.stringify(posts), {
            status: 200,
        })
    } catch (error) {
        return new Response("Failed to get all posts", {
            status: 500,
        })
    }
}