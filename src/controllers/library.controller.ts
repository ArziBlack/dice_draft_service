import { Library } from "../models/library";
import { IHome } from "../interfaces/response";
import { TypedNextFn, TypedRequest, TypedResponse } from "../../typings/express";

export const create_library_post = async (req: TypedRequest, res: TypedResponse<APISuccessResponse<IHome> | APIErrorResponse>, next: TypedNextFn) => {
    try {
        const home_post = await new Library(req.body).save();

        res.status(201).json({
            success: true,
            message: "Library post created successfully",
            data: home_post
        })
    } catch (error) {
        next(error);
    }
}

export const get_library_post = async (req: TypedRequest, res: TypedResponse<APISuccessResponse<IHome> | APIErrorResponse>, next: TypedNextFn) => {
    try {
        const home_response = await Library.find();

        res.status(201).json({
            success: true,
            message: "Library fetched successfully",
            data: home_response
        });
    } catch (error) {
        next(error)
    }
}