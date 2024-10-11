import { TypedNextFn, TypedRequest, TypedResponse } from "../../typings/express";
import { IHome } from "../interfaces/response";
import { Home } from "../models/home";
import { google } from "googleapis";





export const check_user_data = async (req: TypedRequest, res: TypedResponse<APISuccessResponse<IHome> | APIErrorResponse>, next: TypedNextFn) => {
    try {
        const home_post = await new Home(req.body).save();

        res.status(201).json({
            success: true,
            message: "Home post created successfully",
            data: home_post
        })
    } catch (error) {
        next(error);
    }
}
