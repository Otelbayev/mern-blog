import Blog from "../models/blog.js";

class BlogController {
  async create(req, res) {
    try {
      const { title, description, category, data_text, date } = req.body;
      const image = req.file?.filename;

      if (!image) {
        return res.status(400).json({ message: "Rasm fayli yuklanmadi." });
      }

      const blog = new Blog({
        title,
        description,
        image,
        category,
        data_text,
        date,
      });

      await blog.save();
      res.status(201).json(blog);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async getAll(req, res) {
    try {
      const blogs = await Blog.find();
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ message: "Error fetching blogs", error });
    }
  }
  async getByCategory(req, res) {
    try {
      const { category } = req.params;
      const blogs = await Blog.find({ category });
      if (blogs.length === 0) {
        return res
          .status(404)
          .json({ message: "No blogs found in this category" });
      }
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ message: "Error fetching blogs", error });
    }
  }
  async getAllWithoutDataText(req, res) {
    try {
      const blogs = await Blog.find({}, { data_text: 0 });
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ message: "Error fetching blogs", error });
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;

      const blog = await Blog.findById(id);
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      res.status(200).json(blog);
    } catch (error) {
      res.status(500).json({ message: "Error fetching blog", error });
    }
  }
  async update(req, res) {
    try {
      const { id } = req.params;
      const { title, description, date, category, data_text } = req.body;
      const image = req.file?.filename;

      if (!image) {
        return res.status(400).json({ message: "Rasm fayli yuklanmadi." });
      }
      const blog = await Blog.findByIdAndUpdate(
        id,
        { title, description, image, date, category, data_text },
        { new: true }
      );
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      res.status(200).json({ message: "Blog updated successfully", blog });
    } catch (error) {
      res.status(500).json({ message: "Error updating blog", error });
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      const blog = await Blog.findByIdAndDelete(id);
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }
      res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting blog", error });
    }
  }
}

export default new BlogController();
