import { Router } from "express";
import initialize_router from "./initialize.routes";
import home_router from "./home.routes";
import library_router from "./library.routes";
import http_status from "http-status"

const router = Router();

router.get("/dice", (req, res)=> {
    res.status(http_status.OK).json({
        message: "Dice rolled successfully",
        success: true
    })
});

router.use("/init", initialize_router);

router.use("/home", home_router);

router.use("/library", library_router);

export default router;