import http_status from "http-status";
import { Library } from "../models/library";
import { ILibrary } from "../interfaces/response";
import { TypedNextFn, TypedRequest, TypedResponse } from "../../typings/express";

export const create_library_post = async (req: TypedRequest, res: TypedResponse<APISuccessResponse<ILibrary> | APIErrorResponse>, next: TypedNextFn) => {
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

export const get_library_post = async (req: TypedRequest, res: TypedResponse<APISuccessResponse<ILibrary> | APIErrorResponse>, next: TypedNextFn) => {
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

export const delete_library_post = async (req: TypedRequest, res: TypedResponse<APISuccessResponse<ILibrary> | APIErrorResponse>, next: TypedNextFn) => {
    try {
        const id = req.params.id

        if (!id) {
            res.status(http_status.BAD_REQUEST).json({ success: false, message: "id is required!" });
        }

        const home_response = await Library.findByIdAndDelete({ _id: id }).orFail( new Error(`could not find the specified id: ${id}`))

        res.status(201).json({
            success: true,
            message: "Library post deleted successfully",
            data: home_response
        });
    } catch (error) {
        next(error)
    }
}

export const update_library_post = async (req: TypedRequest, res: TypedResponse<APISuccessResponse<ILibrary> | APIErrorResponse>, next: TypedNextFn) => {
    try {
        const id = req.params.id

        if (!id) {
            res.status(http_status.BAD_REQUEST).json({ success: false, message: "id is required!" });
        }

        const home_response = await Library.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });

        res.status(http_status.OK).json({
            success: true,
            message: "Library post updated successfully",
            data: home_response
        });
    } catch (error) {
        next(error)
    }
}