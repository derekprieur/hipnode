import Meetup from "@models/meetup";
import { connectToDB } from "@utils/database";

export const POST = async (req: any) => {
    const { title, image, tags, content, user } = await req.json();
    console.log(title, image, tags, content, user);
    try {
        await connectToDB();
        const newMeetup = new Meetup({
            title,
            image: '/assets/meetup1.png',
            location: 'New York',
            organizer: user,
            date: 'Feb 7',
            description: content,
            tags,
        });
        await newMeetup.save();
        return new Response(JSON.stringify(newMeetup), {
            status: 201,
        })
    } catch (error) {
        console.log(error);
        return new Response("Failed to create a new prompt", {
            status: 500,
        })
    }
}