import {
  TypedNextFn,
  TypedRequest,
  TypedResponse,
} from "../../typings/express";

export const error_handler = (
  err: unknown,
  req: TypedRequest,
  res: TypedResponse<APIErrorResponse>,
  next: TypedNextFn,
) => {
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
      errors: undefined,
    });
  }
};
