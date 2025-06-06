const express = require('express');
const router = express.Router();

// require the controller folder with student file
const {getAllStudents, createStudent, deleteStudent, updateStudent, getOne}= require('../controller/student');

router.get('/',getAllStudents)
router.get('/:id', getOne)
router.post('/',createStudent)
router.delete('/:id',deleteStudent)
router.put('/:id',updateStudent)

module.exports = router;
