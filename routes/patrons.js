const router = require("express").Router();
const ctrl = require("../controllers");

// GET /patrons
router.get("/patrons", ctrl.patrons.index);

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /students/:id/facts
// router.post("/facts", ctrl.patrons.addFact);

// DELETE /facts/:id
// router.delete("/facts/:id", ctrl.patrons.delFact);

module.exports = router;
