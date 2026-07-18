const Candidate = require('../models/Candidate');
const asyncHandler = require('../utils/asyncHandler');
const { validateCandidate } = require('../validation/candidateValidation');

const getCandidates = asyncHandler(async (req, res) => {
  const candidates = await Candidate.find().sort({ createdAt: -1 });
  res.json({ success: true, data: candidates });
});

const getCandidateById = asyncHandler(async (req, res) => {
  const candidate = await Candidate.findById(req.params.id);
  if (!candidate) return res.status(404).json({ success: false, message: 'Candidate not found' });
  res.json({ success: true, data: candidate });
});

const createCandidate = asyncHandler(async (req, res) => {
  const { isValid, errors } = validateCandidate(req.body);
  if (!isValid) return res.status(400).json({ success: false, errors });

  const candidate = await Candidate.create(req.body);
  res.status(201).json({ success: true, data: candidate });
});

const updateCandidate = asyncHandler(async (req, res) => {
  const candidate = await Candidate.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!candidate) return res.status(404).json({ success: false, message: 'Candidate not found' });
  res.json({ success: true, data: candidate });
});

const deleteCandidate = asyncHandler(async (req, res) => {
  const candidate = await Candidate.findByIdAndDelete(req.params.id);
  if (!candidate) return res.status(404).json({ success: false, message: 'Candidate not found' });
  res.json({ success: true, message: 'Candidate removed' });
});

module.exports = { getCandidates, getCandidateById, createCandidate, updateCandidate, deleteCandidate };
