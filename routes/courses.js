const express = require('express');
const courses = require('../controllers/courses');
const router = express.Router();


router.get('/', courses.getCourses);


module.exports = router;