const express = require("express");
const {
  createPerson,
  findOne,
  findAllPeople,
  getTotalUsers,
  getTotalSalaries,
  updateOne,
  deleteOne,
  deleteAll,
  showPersonForm,
} = require("../controllers/personne.controller.js");

const router = express.Router();

// Get all people
router.get("/", findAllPeople);

// Delete all people
router.delete("/", deleteAll);

// Retrieve a single Person with id
router.get("/:id", findOne);

// Update a Person with id
router.put("/:id", updateOne);

// Delete a Person with id
router.delete("/:id", deleteOne);

// Show the form for adding a new person
router.get("/add-person", showPersonForm);

// Add a new person
router.post("/add-person", createPerson);

// Retrieve all Users
router.get("/totalUsers", getTotalUsers);

// Retrieve all Salaries
router.get("/totalSalaries", getTotalSalaries);

module.exports = router;
