import { Router } from "express";
import initialize_router from "./initialize.routes";
import home_router from "./home.routes";
import library_router from "./library.routes";
import http_status from "http-status";
import admin_router from "./app.routes";

const router = Router();

router.get("/dice", (_, res)=> {
    res.status(http_status.OK).json({
        message: "Dice rolled successfully",
        success: true
    })
});

router.use("/init", initialize_router);

router.use("/home", home_router);

router.use("/library", library_router);

router.use("/admin", admin_router);

export default router;