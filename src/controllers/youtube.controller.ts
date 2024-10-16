import { google } from "googleapis";
import http_status from "http-status";
import { oauth2_client } from "../services/google_api.service";
import {
  TypedNextFn,
  TypedRequest,
  TypedResponse,
} from "../../typings/express";
import { APIErrorResponse, APISuccessResponse } from "../../typings/response";

export const check_subscription = async (
  req: TypedRequest,
  res: TypedResponse<
    APISuccessResponse<{ is_subscribed: boolean }> | APIErrorResponse
  >,
  next: TypedNextFn,
) => {
  try {
    const { accessToken, channelId } = req.body;

    if (!accessToken && !channelId) {
      res
        .status(http_status.BAD_REQUEST)
        .json({
          success: false,
          message: "Access token and channelId is required",
        });
    }

    oauth2_client.setCredentials({ access_token: accessToken });

    const youtube = google.youtube({ version: "v3", auth: oauth2_client });

    const response = await youtube.subscriptions.list({
      part: ["snippet"],
      mine: true,
    });

    const subscriptions = response.data.items;
    console.log(subscriptions);

    const is_subscribed = subscriptions?.some(
      (sub) => sub.snippet?.resourceId?.channelId === channelId,
    );

    if (!is_subscribed) {
      res.status(200).json({
        success: true,
        message: "You are not subscribed to this channel",
        data: {
          is_subscribed: is_subscribed,
        },
      });
    }

    res.status(http_status.OK).json({
      success: true,
      message: "You are subscribed to this channel",
      data: {
        is_subscribed: is_subscribed,
      },
    });
  } catch (error) {
    next(error);
  }
};
