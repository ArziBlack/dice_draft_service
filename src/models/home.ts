import { model, Schema } from "mongoose";

const homeSchema = new Schema({
    title: String,
    description: String,
    image: String,
    content: String
}, { timestamps: true });

export const Home = model('Home', homeSchema); 