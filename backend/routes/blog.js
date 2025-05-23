import { Router } from "express";
import blog from "../controllers/blog.js";
import upload from "../middlewares/upload.js";

const router = Router();

router.post("/", upload.single("image"), blog.create);
router.get("/", blog.getAll);
router.get("/:id", blog.getOne);
router.get("/:category", blog.getByCategory);
router.get("/", blog.getAllWithoutDataText);
router.put("/:id", upload.single("image"), blog.update);
router.delete("/:id", blog.delete);

export default router;
