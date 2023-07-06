import Podcast from "@models/podcast";
import { connectToDB } from "@utils/database";

export const GET = async (req: any) => {
    try {
        await connectToDB();
        const podcasts = await Podcast.find({}).sort({date: -1});
        return new Response(JSON.stringify(podcasts), {
            status: 200,
        })
    } catch (error) {
        return new Response("Failed to fetch podcasts", {
            status: 500,
        })
    }
};