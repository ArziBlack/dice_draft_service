import { NextFunction, Request, Response } from "express";

export const error_handler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        res.status(500).json({
            success: false,
            message: err.message,
            errors: undefined,
        });
    } else {
        res.status(500).json({
            success: false,
            message: "Internal Server Error!!!",
            errors: undefined
        })
    }
}