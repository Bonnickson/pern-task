import Router from "express-promise-router";
import {
    profile,
    signIn,
    signOut,
    signUp,
} from "../controllers/auth.controllers.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/signIn", signIn);

router.post("/signUp", signUp);

router.post("/signOut", signOut);

router.get("/profile", isAuth, profile);

export default router;
