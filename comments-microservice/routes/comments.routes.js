import express from "express";
import {
  getComments,
  createComment,
} from "../controller/comments.controller.js";
// import { auth } from "../middleware/auth.middleware.js";
// import { postId } from "../middleware/comments.middleware.js";
import { postId } from "memories_schemas_and_middleware";

const router = express.Router();

router.get("/:id/comments", getComments);
router.post("/:id/comments", postId, createComment);

export default router;
