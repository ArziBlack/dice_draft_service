import { Router } from "express";
import {
  create_home_post,
  delete_home_post,
  get_home_post,
  update_home_post,
} from "../controllers/home.controller";
import {
  create_library_post,
  delete_library_post,
  get_library_post,
  update_library_post,
} from "../controllers/library.controller";

const router = Router();

// home routes

router.route("/home").get(get_home_post);

router.route("/home").post(create_home_post);

router.route("/home/:id").put(update_home_post);

router.route("/home/:id").delete(delete_home_post);

// library routes

router.route("/library").post(create_library_post);

router.route("/library").get(get_library_post);

router.route("/library/:id").put(update_library_post);

router.route("/library/:id").delete(delete_library_post);

export default router;
