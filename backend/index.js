import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import router from "./routes/index.js";
import path from "path";
import { fileURLToPath } from "url";
import authController from "./controllers/auth.js";

const app = express();

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res
      .status(400)
      .json({ message: "Fayl yuklashda xatolik: " + err.message });
  } else if (err) {
    return res.status(400).json({ message: err.message });
  }
  next();
});

app.use("/api", router);

const bootstrap = async () => {
  try {
    const PORT = process.env.PORT || 3390;
    mongoose.connect(process.env.MONGO_URI).then(async () => {
      console.log("Connected to mongodb");
      await authController.createDefaltAdmin();
    });

    app.listen(PORT, () => {
      console.log(`Server is running ${PORT} PORT`);
    });
  } catch (e) {
    console.log("MongoDB error " + e);
  }
};

bootstrap();
