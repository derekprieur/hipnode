import User from "@models/user";
import { connectToDB } from "@utils/database";

export const GET = async (req: any, {params}: any) => {
    try {
        await connectToDB();
        const user = await User.findById(params.id);
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

export const PUT = async (req: any, {params}: any) => {
    const { followId } = await req.json();
    console.log('Follow ID:', followId);
    console.log('params.id:', params.id)

    try {
        await connectToDB();
        const user = await User.findById(params.id);
        const followUser = await User.findById(followId);

        if (!user || !followUser) {
            return new Response("User not found", { status: 404 });
        }

        const isFollowing = user.following.some((id: any) => id.toString() === followId);
        console.log('Is Following:', isFollowing);

        if (isFollowing) {
            console.log('Unfollowing');
            const updatedUser = await User.findByIdAndUpdate(user._id, { $pull: { following: followId } }, { new: true });
            const updatedFollowUser = await User.findByIdAndUpdate(followId, { $pull: { followers: params.id } }, { new: true });
            console.log('Updated User:', updatedUser);
            console.log('Updated Follow User:', updatedFollowUser);
        } else {
            console.log('Following');
            const updatedUser = await User.findByIdAndUpdate(user._id, { $addToSet: { following: followId } }, { new: true });
            const updatedFollowUser = await User.findByIdAndUpdate(followId, { $addToSet: { followers: params.id } }, { new: true });
            console.log('Updated User:', updatedUser);
            console.log('Updated Follow User:', updatedFollowUser);
        }

        return new Response(JSON.stringify("Operation performed successfully"), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response("Failed to follow user", { status: 500 });
    }
}