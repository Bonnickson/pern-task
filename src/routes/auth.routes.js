import { Router } from "express";

const router = Router();

router.post("/signIn", (req, res) => res.send("ingresando"));

router.post("/signUp", (req, res) => res.send("registrando"));

router.post("/signOut", (req, res) => res.send("cerrando sesion"));

router.get("/profile", (req, res) => res.send("perfil del usuario"));

export default router;
