import { google } from "googleapis";
import { TypedNextFn, TypedRequest, TypedResponse } from "../../typings/express";
import { send_response } from "../helpers/send_response";
import { oauth2_client } from "../services/google_api.service";

export default class google_controller {
    static async init_oauth<T>(req:TypedRequest, res:TypedResponse<T>) {
        const auth_url = oauth2_client.generateAuthUrl({ access_type: 'offline', scope: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.email'] });
        
        res.json(send_response({
            success: true,
            message: "redirect url",
            data: { url: auth_url }
        }))
    }

    static async callback<T>(req:TypedRequest, res:TypedResponse<T>, next: TypedNextFn) {
        const { code } = req.query;
        try {
            if (!code) {
                throw new Error("code is required!!");
            }

            const { tokens } = await oauth2_client.getToken(code as string);

            oauth2_client.setCredentials(tokens);

            const oauth2 = google.oauth2({ version: 'v2', auth: oauth2_client });

            const user_info = await oauth2.userinfo.get();

            res.json(
                send_response({
                    success: true,
                    message:"google authentication successfull",
                    data: user_info
                })
            )
        } catch (error) {
            next(error)
        }
    }
}