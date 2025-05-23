import { model, Schema } from "mongoose";

const appelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  file: {
    type: String,
  },
});

export default model("Appeal", appelSchema);
