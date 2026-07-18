const mongoose = require('mongoose');

const candidateSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    resumeLink: { type: String },
    skills: [{ type: String }],
    experience: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Candidate', candidateSchema);
