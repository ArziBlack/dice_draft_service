import { Router } from "express";
import { get_library_post } from "../controllers/library.controller";

const router = Router();

router.route("/").get(get_library_post);

export default router;