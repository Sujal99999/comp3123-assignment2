const express = require('express');
const { body, validationResult } = require('express-validator');
const Employee = require('../models/Employee');

const router = express.Router();

// Get all employees
router.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employees.', error: error.message });
  }
});

// Create new employee
router.post('/employees', [
  body('first_name').notEmpty(),
  body('last_name').notEmpty(),
  body('email').isEmail(),
  body('position').notEmpty(),
  body('salary').isNumeric(),
  body('date_of_joining').isISO8601(),
  body('department').notEmpty(),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json({ message: 'Employee created successfully.', employee_id: employee._id });
  } catch (error) {
    res.status(500).json({ message: 'Error creating employee.', error: error.message });
  }
});

// Get employee by ID
router.get('/employees/:eid', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.eid);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found.' });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching employee.', error: error.message });
  }
});

// Update employee
router.put('/employees/:eid', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.eid, req.body, { new: true });
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found.' });
    }
    res.json({ message: 'Employee details updated successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating employee.', error: error.message });
  }
});

// Delete employee
router.delete('/employees', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.query.eid);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found.' });
    }
    res.status(204).json({ message: 'Employee deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting employee.', error: error.message });
  }
});

module.exports = router;