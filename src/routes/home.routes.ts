import { Router } from "express";
import { get_home_post } from "../controllers/home.controller";

const router = Router();

router.route("/").get(get_home_post);

export default router;