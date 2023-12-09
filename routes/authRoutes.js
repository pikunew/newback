const express = require('express');
const router = express.Router();
const { signup, signin, logout, userProfile } = require('../controllers/authController');
// const { isAuthenticated } = require('../middleware/auth');
const cors = require('cors');

router.use(cors());

//auth routes
// /api/signup
router.post('/signup', signup);
// /api/signin
router.post('/signin', signin);
// /api/logout
router.get('/logout', logout);
// /api/me
router.get('/me', userProfile);

module.exports = router;