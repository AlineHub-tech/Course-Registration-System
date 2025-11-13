import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  description: String,
  capacity: { type: Number, default: 30 }
}, { timestamps: true });

export default mongoose.model("Course", courseSchema);
