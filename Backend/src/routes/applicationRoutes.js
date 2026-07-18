const express = require('express');
const {
  getApplications,
  createApplication,
  updateApplicationStatus,
  deleteApplication,
} = require('../controllers/applicationController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', protect, getApplications);
router.post('/', protect, createApplication);
router.put('/:id', protect, updateApplicationStatus);
router.delete('/:id', protect, deleteApplication);

module.exports = router;
