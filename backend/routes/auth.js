import { Router } from "express";
import AuthController from "../controllers/auth.js";

const router = Router();

router.post("/login", AuthController.login);
router.put("/update", AuthController.update);
router.get("/getdata", AuthController.getDataByToken);

export default router;
