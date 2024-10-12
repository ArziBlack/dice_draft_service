import { Router } from "express";
import { check_subscription } from "../controllers/youtube.controller";

const router = Router();

router.route("/check_subs").post(check_subscription);

export default router;
