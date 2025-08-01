const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/departmentController');

router.get('/:department_id', departmentController.getTDepartmentById);

module.exports = router