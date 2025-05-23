import { model, Schema } from "mongoose";

const authSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  fathers_name: {
    type: String,
  },
  image: {
    type: String,
  },
});

export default model("Auth", authSchema);
