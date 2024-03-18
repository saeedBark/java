const Personne = require("../models/personne.model.js");
const { sendError, validateRequest } = require("../lib/utils");

// Create and save a new Personne
const createPerson = (req, res) => {
  if (!validateRequest(req, res)) return;

  const personne = new Personne({
    nom: req.body.nom,
    email: req.body.email,
    phone: req.body.phone,
    nni: req.body.nni,
    salary: req.body.salary,
    department: req.body.department,
    nbPres: req.body.nbPres,
    nbAbs: req.body.nbAbs,
  });

  Personne.create(personne, (err, data) => {
    if (err)
      sendError(
        res,
        err,
        500,
        "Some error occurred while creating the Personne."
      );
    else res.send(data);
  });
};

// Retrieve all Personnes from the database (with condition).
const findAllPeople = async (req, res) => {
  const nom = req.query.nom;

  try {
    debugger;
    const res = await Personne.getAll(nom);
    const totalUsers = Personne.getTotalCount();
    const totalSalaries = Personne.getTotalSalaries();
    const averageSalary = Personne.getAverageSalary();
    const absenteismRate = Personne.getAbsenteismRate();

    res.render("index", {
      data: res,
      totalUsers,
      totalSalaries,
      averageSalary,
      absenteismRate,
    });
  } catch (error) {
    sendError(res, error, 500, "Some error occurred while retrieving personnes.");
  }
};

// Get total users
const getTotalUsers = (req, res) => {
  Personne.getTotalCount((err, count) => {
    if (err)
      sendError(
        res,
        err,
        500,
        "Some error occurred while getting total users count."
      );
    else res.send({ totalUsers: count });
  });
};

// Get total salaries (Seems duplicated with getTotalUsers, please check logic)
const getTotalSalaries = (req, res) => {
  Personne.getTotalSalaries((err, totalSalaries) => {
    if (err)
      sendError(
        res,
        err,
        500,
        "Some error occurred while getting total salaries count."
      );
    else res.send({ totalSalaries });
  });
};

// Find a single Personne by Id
const findOne = (req, res) => {
  Personne.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found")
        sendError(
          res,
          err,
          404,
          `Not found Personne with id ${req.params.id}.`
        );
      else sendError(res, err);
    } else res.send(data);
  });
};

// Update a Personne identified by the id in the request
const updateOne = (req, res) => {
  if (!validateRequest(req, res)) return;

  Personne.updateById(req.params.id, new Personne(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found")
        sendError(
          res,
          err,
          404,
          `Not found Personne with id ${req.params.id}.`
        );
      else sendError(res, err);
    } else res.send(data);
  });
};

// Delete a Personne with the specified id in the request
const deleteOne = (req, res) => {
  Personne.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found")
        sendError(
          res,
          err,
          404,
          `Not found Personne with id ${req.params.id}.`
        );
      else sendError(res, err);
    } else res.send({ message: "Personne was deleted successfully!" });
  });
};

// Delete all Personnes from the database.
const deleteAll = (req, res) => {
  Personne.removeAll((err, data) => {
    if (err)
      sendError(
        res,
        err,
        500,
        "Some error occurred while removing all personnes."
      );
    else res.send({ message: "All Personnes were deleted successfully!" });
  });
};

// Show add new person form
const showPersonForm = (req, res) => {
  res.render("addNew");
};

module.exports = {
  createPerson,
  findAllPeople,
  getTotalUsers,
  getTotalSalaries,
  findOne,
  updateOne,
  deleteOne,
  deleteAll,
  showPersonForm,
};
