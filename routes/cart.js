const express = require('express');
const router = express.Router();
const { saveCart } = require('../controllers/cartController');

router.post('/save', saveCart);

module.exports = router;
