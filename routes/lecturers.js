const express = require('express');
const router = express.Router();
const lecturers = require('../controllers/lecturers');

router.get('/', lecturers.getLecturers);


module.exports = router;