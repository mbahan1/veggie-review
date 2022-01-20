const router = require("express").Router();
const patronsCtrl = require("../controllers/patrons");

// GET /students
router.get("/patrons", patronsCtrl.index);

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
router.post("/facts", patronsCtrl.addFact);

// DELETE /facts/:id
router.delete("/facts/:id", patronsCtrl.delFact);

module.exports = router;
