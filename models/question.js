import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, default:"" },
  tag: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Ensure indexes for createdAt and updatedAt fields
questionSchema.index({ createdAt: 1, updatedAt: 1 });

const Question = mongoose.models.Question || mongoose.model("Question", questionSchema);

export default Question;
