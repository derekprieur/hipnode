import { connectToDB } from "@utils/database";
import Post from "@models/post";

export const POST = async (req: any) => {
    const { title, image, tags, content, user } = await req.json();
    console.log(user, "user");
    try {
        await connectToDB();
        const newPost = new Post({
            title,
            image: '/assets/post1.png',
            tags,
            content,
            user,
        });
        console.log('attempt to save')
        await newPost.save();
        console.log('saved')
        return new Response(JSON.stringify(newPost), {
            status: 201,
        })
    } catch (error) {
        console.log(error);
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
        console.log(error);
        return new Response("Failed to get all posts", {
            status: 500,
        })
    }
}