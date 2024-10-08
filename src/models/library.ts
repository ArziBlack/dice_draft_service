import { model, Schema } from "mongoose";

const librarySchema = new Schema({
    title: String,
    description: String,
    video: String,
    content: String
}, { timestamps: true });

export const Library = model('Library', librarySchema); 