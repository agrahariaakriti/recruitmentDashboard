const express = require('express');
const {
  getCandidates,
  getCandidateById,
  createCandidate,
  updateCandidate,
  deleteCandidate,
} = require('../controllers/candidateController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', protect, getCandidates);
router.get('/:id', protect, getCandidateById);
router.post('/', protect, createCandidate);
router.put('/:id', protect, updateCandidate);
router.delete('/:id', protect, deleteCandidate);

module.exports = router;
