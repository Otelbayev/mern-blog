import jwt from "jsonwebtoken";
import Auth from "../models/auth.js";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

const DEFAULT_USERNAME = "adminbek";
const DEFAULT_PASSWORD = "nopassword";

class AuthController {
  async login(req, res, next) {
    try {
      const { username, password } = req.body;

      const user = await Auth.findOne({ username });
      if (!user) {
        return res.status(404).json({ error: "User not found!" });
      }

      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ error: "Password is incorrect" });
      }

      const token = jwt.sign(
        { id: user._id, username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      return res.status(200).json({ message: "Login successful", token, user });
    } catch (error) {
      next(error);
    }
  }
  async createDefaltAdmin() {
    try {
      let existingAdmin = await Auth.findOne({ username: DEFAULT_USERNAME });
      if (!existingAdmin) {
        const hashedPassword = await bcrypt.hash(DEFAULT_PASSWORD, 10);

        await Auth.create({
          username: DEFAULT_USERNAME,
          password: hashedPassword,
          name: "Navodir",
          surname: "Davronov",
          fathers_name: "Dadasino o'g'li",
        });

        console.log("✅ Default superadmin user created.");
      } else {
        console.log("✅ Superadmin user already exists.");
      }
    } catch (err) {
      console.error("❌ Error initializing default data:", err);
    }
  }

  async getDataByToken(req, res) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await Auth.findById(decoded.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error fetching user data", error });
    }
  }
  async update(req, res) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await Auth.findById(decoded.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      const { name, surname, fathers_name, username, password } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      user.username = username;
      user.password = hashedPassword;
      user.name = name;
      user.surname = surname;
      user.fathers_name = fathers_name;
      await user.save();
      res.status(200).json({ message: "Profile updated successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error updating profile", error });
    }
  }
}

export default new AuthController();
