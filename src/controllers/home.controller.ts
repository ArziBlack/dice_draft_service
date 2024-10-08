import { TypedNextFn, TypedRequest, TypedResponse } from "../../typings/express";
import { IHome } from "../interfaces/response";
import { Home } from "../models/home";

export const create_home_post = async (req: TypedRequest, res: TypedResponse<APISuccessResponse<IHome> | APIErrorResponse>, next: TypedNextFn) => {
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

export const get_home_post = async (req: TypedRequest, res: TypedResponse<APISuccessResponse<IHome> | APIErrorResponse>, next: TypedNextFn) => {
    try {
        const home_response = await Home.find();

        res.status(201).json({
            success: true,
            message: "Home post created successfully",
            data: home_response
        });
    } catch (error) {
        next(error)
    }
}