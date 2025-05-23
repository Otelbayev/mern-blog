import { model, Schema } from "mongoose";

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  category: {
    type: String,
    enum: ["Yangilik", "E'lon", "Maqola", "Blog"],
    required: true,
  },
  data_text: {
    type: String,
    required: true,
  },
});

const Blog = model("Blog", blogSchema);

export default Blog;
