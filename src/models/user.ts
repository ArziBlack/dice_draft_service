import { model, Schema } from "mongoose";

const userSchema = new Schema({
    username: String,
    name: String,
    email: String,
    profile_image: String,
    password: String,
    last_login: Date,
    no_of_times_logged_in: Number,
    isSubscribed: Boolean,
}, { timestamps: true });

export const User = model('User', userSchema); 