import { verify } from "jsonwebtoken";
import { TypedNextFn, TypedRequest, TypedResponse } from "../../typings/express";
import { JWT_SECRET } from "../config";

export const verify_token = async (req: TypedRequest, res: TypedResponse<APIErrorResponse>, next: TypedNextFn) => {
    const auth_header = await req.headers["authorization"];
    if (!auth_header) {
        return res.status(401).json({ success: false, message: "You are not Authorized!!", errors: "Unauthorized" });
    }

    const token = auth_header.split(" ")[1];

    verify(token, JWT_SECRET, (err: any, user: any) => {
        if (err)
            return res.status(403).json({
                success: false,
                message: "Token cannot be Verified!!!",
                errors: "cannot verify token"
            });
        next();
        },
    )
}