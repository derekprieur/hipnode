import { Schema, model, models } from "mongoose";

const MeetupSchema = new Schema({
title: {type: String, required: true},
image: String,
organizer: {type: String, required: true},
location: {type: String, required: true},
date: {type: String, required: true},
description: {type: String, required: true},
tags: [String]
});    

const Meetup = models.Meetup || model('Meetup', MeetupSchema);

export default Meetup;