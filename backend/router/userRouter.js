import express from "express";
import { forgotPassword, getMe, resetPassword, userlogin, userlogout, userRegister } from "../controllers/Authcontrollers.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", userRegister);
router.post("/login", userlogin);
router.get("/logout", isAuthenticated, userlogout);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.get("/me", isAuthenticated, getMe);

export default router;
