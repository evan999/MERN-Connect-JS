const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const jwt = 'jsonwebtoken';
const config = require('config');
const { check, validationResult } = require('express-validator');

// @route GET api/auth
// @desc Test route
// @access Public
router.get('/', auth, (req, res) => res.send('Auth route'));

module.exports = router;
