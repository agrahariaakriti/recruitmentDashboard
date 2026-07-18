const Job = require('../models/Job');
const asyncHandler = require('../utils/asyncHandler');
const { validateJob } = require('../validation/jobValidation');

const getJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find().sort({ createdAt: -1 });
  res.json({ success: true, data: jobs });
});

const getJobById = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
  res.json({ success: true, data: job });
});

const createJob = asyncHandler(async (req, res) => {
  const { isValid, errors } = validateJob(req.body);
  if (!isValid) return res.status(400).json({ success: false, errors });

  const job = await Job.create({ ...req.body, postedBy: req.user?._id });
  res.status(201).json({ success: true, data: job });
});

const updateJob = asyncHandler(async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
  res.json({ success: true, data: job });
});

const deleteJob = asyncHandler(async (req, res) => {
  const job = await Job.findByIdAndDelete(req.params.id);
  if (!job) return res.status(404).json({ success: false, message: 'Job not found' });
  res.json({ success: true, message: 'Job removed' });
});

module.exports = { getJobs, getJobById, createJob, updateJob, deleteJob };
