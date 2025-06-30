import express from "express";
import {
  getPostComment,
  addComment,
} from "../controllers/comment.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/:postId", getPostComment);
router.post("/", verifyToken, addComment);

export default router;
