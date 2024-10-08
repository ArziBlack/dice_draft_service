import { JWT_EXPIRE_TIME, JWT_SECRET } from "../config";
import { TokenPayload } from "../interfaces/params";
import { sign, SignOptions } from "jsonwebtoken"

export const sign_token = async (payload: TokenPayload): Promise<string> => {
    const options: SignOptions = {
        expiresIn: JWT_EXPIRE_TIME
    }

    if (!JWT_SECRET) {
        throw new Error('JWT_SECRET is not defined')
    }

    return await sign(payload, JWT_SECRET, options);
}