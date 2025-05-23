import { Router } from "express";

import appeal from "../controllers/appeal.js";
import upload from "../middlewares/upload.js";

const router = Router();

router.post("/", upload.single("file"), appeal.create);
router.get("/", appeal.getAll);

export default router;
