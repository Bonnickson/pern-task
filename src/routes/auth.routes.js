import Router from "express-promise-router";
import {
    profile,
    signIn,
    signOut,
    signUp,
} from "../controllers/auth.controllers.js";
import { isAuth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validate.middleware.js";
import { signinSchema, signupSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/signIn", validateSchema(signinSchema), signIn);

router.post("/signUp", validateSchema(signupSchema), signUp);

router.post("/signOut", signOut);

router.get("/profile", isAuth, profile);

export default router;
