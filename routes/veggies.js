const router = require('express').Router()
const ctrl = require('../controllers/veggies')

//routes
router.get('/', ctrl.idx)
router.get('/new', ctrl.newVeggie)
router.get('/:id', ctrl.show)
// router.post("/", ctrl.veggies.create);
// router.put("/:id", ctrl.veggies.update);
// router.delete("/:id", ctrl.veggies.destroy);
// router.get("/:id/edit", ctrl.veggies.edit);

module.exports = router;
