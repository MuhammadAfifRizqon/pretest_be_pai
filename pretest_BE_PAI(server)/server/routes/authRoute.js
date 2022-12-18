import { Router } from "express";
import indexCtrl from "../controllers/index";

const router = Router();

router.post("/registrasi", indexCtrl.AuthCtrl.registrasi);
router.post("/login", indexCtrl.AuthCtrl.login);

export default router;