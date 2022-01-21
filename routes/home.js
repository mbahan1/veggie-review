const router = require("express").Router();
const ctrl = require("../controllers/home");

router.get("/", ctrl.homeIndex)

module.exports = router;
