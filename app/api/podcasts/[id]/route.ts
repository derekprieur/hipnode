import Podcast from "@models/podcast";
import { connectToDB } from "@utils/database";

export const GET = async (req: any, { params }: any) => {
    try {
        connectToDB();
        const podcast = await Podcast.findById(params.id);
        return new Response(JSON.stringify(podcast), {
            status: 200,
        })
    } catch (error) {
        console.log(error, 'error')
    }
}