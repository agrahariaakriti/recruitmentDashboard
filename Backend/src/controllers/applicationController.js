const Application = require('../models/Application');
const asyncHandler = require('../utils/asyncHandler');

const getApplications = asyncHandler(async (req, res) => {
  const applications = await Application.find()
    .populate('candidate', 'name email phone')
    .populate('job', 'title department')
    .sort({ createdAt: -1 });
  res.json({ success: true, data: applications });
});

const createApplication = asyncHandler(async (req, res) => {
  const { candidate, job } = req.body;
  if (!candidate || !job) {
    return res.status(400).json({ success: false, message: 'Candidate and job are required' });
  }
  const application = await Application.create(req.body);
  res.status(201).json({ success: true, data: application });
});

const updateApplicationStatus = asyncHandler(async (req, res) => {
  const application = await Application.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status, notes: req.body.notes },
    { new: true }
  );
  if (!application) return res.status(404).json({ success: false, message: 'Application not found' });
  res.json({ success: true, data: application });
});

const deleteApplication = asyncHandler(async (req, res) => {
  const application = await Application.findByIdAndDelete(req.params.id);
  if (!application) return res.status(404).json({ success: false, message: 'Application not found' });
  res.json({ success: true, message: 'Application removed' });
});

module.exports = { getApplications, createApplication, updateApplicationStatus, deleteApplication };
