const router = require('express').Router()
const ctrl = require('../controllers')

//routes
router.get('/', ctrl.veggies.idx)
router.get('/new', ctrl.veggies.newVeggie)
router.get('/:id', ctrl.veggies.show)
// router.post("/", ctrl.veggies.create);
// router.put("/:id", ctrl.veggies.update);
// router.delete("/:id", ctrl.veggies.destroy);
// router.get("/:id/edit", ctrl.veggies.edit);

module.exports = router
