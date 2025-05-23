import { Router } from "express";
import blogRouter from "./blog.js";
import appealRouter from "./appeal.js";
import authRouter from "./auth.js";

const router = Router();

router.use("/blog", blogRouter);
router.use("/appeal", appealRouter);
router.use("/auth", authRouter);

export default router;
