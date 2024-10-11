import dotenv from "dotenv"

dotenv.config();

export const PORT = process.env.PORT as string;
export const MONGO_URI = process.env.MONGO_URI as string;
export const JWT_SECRET = process.env.JWT_SECRET as string;
export const REDIRECT_URI = process.env.REDIRECT_URI as string;
export const JWT_EXPIRE_TIME = process.env.JWT_EXPIRE_TIME as string;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;