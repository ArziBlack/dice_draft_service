import { model, Schema } from "mongoose";
import { IHome } from "../interfaces/response";

const homeSchema = new Schema({
    // featured_videos: Array<String>,
    title: String,
    description: String,
    image: String,
    content: String
}, { timestamps: true });

homeSchema.set('toJSON', {
    transform: (_doc, ret)=> {
        delete ret.__v;
        return ret;
    }
});

export const Home = model<IHome>('Home', homeSchema); 