import { model, Schema } from "mongoose";

const adminSchema = new Schema({
    email: String,
    profile_image: String,
    password: String,
    last_login: Date,
    no_of_times_logged_in: Number,
}, { timestamps: true });

export const Admin = model('Admin', adminSchema); 