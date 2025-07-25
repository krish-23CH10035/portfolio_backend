import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tech: { type: [String], required: true },
  period: { type: String, required: true },
  link: { type: String }
});

export default mongoose.model('Project', projectSchema);
