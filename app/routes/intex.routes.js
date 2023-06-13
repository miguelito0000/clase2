import { Router } from "express";
const router = Router();
router.get("/", (rep, res) =>
    res.json('Bienvenidos al curso de usip backend con node.js')
);
router.get("/hola2", (rep, res) =>
    res.json('Hola 3')
);

export default router;
