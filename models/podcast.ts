import { Schema, model, models } from "mongoose";

const PodcastSchema = new Schema({
    title: {type: String, required: true},
    image: String,
    author: {type: String, required: true},
    date: {type: String, required: true},
    description: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    location: {type: String, required: true},
});

const Podcast = models.Podcast || model('Podcast', PodcastSchema);

export default Podcast;