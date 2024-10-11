import { model, Schema } from "mongoose";

const librarySchema = new Schema({
    title: String,
    video: String,
    content: String,
    description: String,
    featured: { type: Boolean, default: false }
}, { timestamps: true });

export const Library = model('Library', librarySchema); 