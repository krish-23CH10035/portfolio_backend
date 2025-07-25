import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  organization: { type: String, required: true },
  period: { type: String, required: true },
  emoji: { type: String },
  points: { type: [String], required: true }
});

export default mongoose.model('Experience', experienceSchema);
