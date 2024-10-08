import dotenv from "dotenv"
dotenv.config();

export const MONGO_URI = process.env.MONGO_URI as string;
export const PORT = process.env.PORT as string;
export const JWT_SECRET = process.env.JWT_SECRET as string;
export const JWT_EXPIRE_TIME = process.env.JWT_EXPIRE_TIME as string;