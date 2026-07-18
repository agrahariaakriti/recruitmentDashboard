const Job = require('../models/Job');
const Candidate = require('../models/Candidate');
const Application = require('../models/Application');
const asyncHandler = require('../utils/asyncHandler');

const getStats = asyncHandler(async (req, res) => {
  const [totalJobs, openJobs, totalCandidates, totalApplications, hired] = await Promise.all([
    Job.countDocuments(),
    Job.countDocuments({ status: 'Open' }),
    Candidate.countDocuments(),
    Application.countDocuments(),
    Application.countDocuments({ status: 'Hired' }),
  ]);

  const recentApplications = await Application.find()
    .populate('candidate', 'name')
    .populate('job', 'title')
    .sort({ createdAt: -1 })
    .limit(5);

  res.json({
    success: true,
    data: { totalJobs, openJobs, totalCandidates, totalApplications, hired, recentApplications },
  });
});

module.exports = { getStats };
