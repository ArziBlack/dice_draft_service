import {
  TypedNextFn,
  TypedRequest,
  TypedResponse,
} from "../../typings/express";
import { IHome } from "../interfaces/response";
import { Home } from "../models/home";
import http_status from "http-status";

export const create_home_post = async (
  req: TypedRequest,
  res: TypedResponse<APISuccessResponse<IHome> | APIErrorResponse>,
  next: TypedNextFn,
) => {
  try {
    const home_post = await new Home(req.body).save();

    res.status(201).json({
      success: true,
      message: "Home post created successfully",
      data: home_post,
    });
  } catch (error) {
    next(error);
  }
};

export const get_home_post = async (
  req: TypedRequest,
  res: TypedResponse<APISuccessResponse<IHome> | APIErrorResponse>,
  next: TypedNextFn,
) => {
  try {
    const home_response = await Home.find();

    res.status(201).json({
      success: true,
      message: "Home post created successfully",
      data: home_response,
    });
  } catch (error) {
    next(error);
  }
};

export const delete_home_post = async (
  req: TypedRequest,
  res: TypedResponse<APISuccessResponse<IHome> | APIErrorResponse>,
  next: TypedNextFn,
) => {
  try {
    const id = req.params.id;

    if (!id) {
      res
        .status(http_status.BAD_REQUEST)
        .json({ success: false, message: "id is required!" });
    }

    const home_response = await Home.findByIdAndDelete({ _id: id });

    res.status(201).json({
      success: true,
      message: "Home post deleted successfully",
      data: home_response,
    });
  } catch (error) {
    next(error);
  }
};

export const update_home_post = async (
  req: TypedRequest,
  res: TypedResponse<APISuccessResponse<IHome> | APIErrorResponse>,
  next: TypedNextFn,
) => {
  try {
    const id = req.params.id;

    if (!id) {
      res
        .status(http_status.BAD_REQUEST)
        .json({ success: false, message: "id is required!" });
    }

    const home_response = await Home.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true },
    );

    res.status(http_status.OK).json({
      success: true,
      message: "Home post updated successfully",
      data: home_response,
    });
  } catch (error) {
    next(error);
  }
};
