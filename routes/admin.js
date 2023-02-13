import { Router } from "express";
import {
  PostAddMovie,
  PostDeleteMovie,
  PutUpdateMovie,
} from "../controllers/adminController.js";
const router = Router();

router.post("/add", PostAddMovie);
router.delete("/delete", PostDeleteMovie);
router.put("/update", PutUpdateMovie);

export default router;
