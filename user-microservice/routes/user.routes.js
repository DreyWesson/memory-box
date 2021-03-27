import express from "express";
import {
  forgotPassword,
  signin,
  signup,
  resetPassword,
} from "../controller/users.controller.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resetToken", resetPassword);

export default router;
