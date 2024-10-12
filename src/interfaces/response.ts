import { Date, ObjectId } from "mongoose";

export interface IHome {
  _id: ObjectId;
  featured_videos?: string[];
  title: string;
  description: string;
  image: string;
  content: string;
  created_at: Date;
  updated_at: Date;
}

export interface ILibrary {
  title: String;
  description: String;
  video: String;
  content: String;
  created_at: Date;
  updated_at: Date;
}
