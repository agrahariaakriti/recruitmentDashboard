const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema(
  {
    candidate: { type: mongoose.Schema.Types.ObjectId, ref: 'Candidate', required: true },
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
    status: {
      type: String,
      enum: ['Applied', 'Shortlisted', 'Interview', 'Offered', 'Rejected', 'Hired'],
      default: 'Applied',
    },
    notes: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Application', applicationSchema);
