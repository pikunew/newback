const express = require('express');
const router = express.Router();
// const { createJob, singleJob, updateJob, showJobs } = require('../controllers/jobsController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const { createHelpline, singleHelpline, updateHelpline, showHelplines } = require('../controllers/helplineController');
const cors = require('cors');

router.use(cors());
//helplines routes

// /api/helpline/create
router.post('/helpline/create', isAuthenticated, createHelpline);
// /api/helpline/id
router.get('/helpline/:id', singleHelpline);
// /api/helpline/update/helpline_id
router.put('/helpline/update/:helpline_id', isAuthenticated,  updateHelpline);
// // /api/helplines/show
router.get('/helplines/show', showHelplines);



module.exports = router;