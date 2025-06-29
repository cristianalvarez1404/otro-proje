import express from "express";
import {getPostComment} from "../controllers/comment.controller.js"

const router = express.Router();

router.get("/:postId", getPostComment);

export default router;
