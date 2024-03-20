import { Router } from "express";
import {
    profile,
    signIn,
    signOut,
    signUp,
} from "../controllers/auth.controllers.js";

const router = Router();

router.post("/signIn", signIn);

router.post("/signUp", signUp);

router.post("/signOut", signOut);

router.get("/profile", profile);

export default router;
