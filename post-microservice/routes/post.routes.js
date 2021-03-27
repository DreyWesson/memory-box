import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
  getPost,
} from "../controller/posts.controller.js";
// import { auth } from "../middleware/auth.middleware.js";

import { auth } from "memories_schemas_and_middleware";

const router = express.Router();

// router.get("/", getPosts);
// router.post("/", auth, createPost);
// router.patch("/:id", auth, updatePost);
// router.delete("/:id", auth, deletePost);
// router.patch("/:id/likePost", auth, likePost);

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

// Could Implement getting a single post
router.get("/:id", getPost);
export default router;
