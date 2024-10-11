import { Router } from "express";
import { create_home_post, get_home_post } from "../controllers/home.controller";

const router = Router();

router.route("/").post(create_home_post);

router.route("/").get(get_home_post);

export default router;