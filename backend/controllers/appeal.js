import Appeal from "../models/appeal.js";

class AppealController {
  async create(req, res) {
    try {
      console.log(req.body);
      const { name, email, message } = req.body;
      const file = req.file?.filename;

      if (!file) {
        return res.status(400).json({ message: "Fayl fayli yuklanmadi." });
      }

      const appeal = new Appeal({ name, email, message, file });
      await appeal.save();
      res.status(201).json(appeal);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async getAll(req, res) {
    try {
      const appeals = await Appeal.find();
      res.status(200).json(appeals);
    } catch (error) {
      res.status(500).json({ message: "Error fetching appeals", error });
    }
  }
}

export default new AppealController();
