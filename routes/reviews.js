const router = require("express").Router();
const ctrl = require("../controllers/reviews");

// Rest Routes as a guide. Use "Authors" routes as a guide here if you're stuck!
/*
 * Index - GET - /reviews - Presentational - respond with all reviews
 * New - GET - /reviews/new  - Presentational Form - a page with a form to create a new review
 * Show - GET - /reviews/:id  - Presentational - respond with specific review by id 
 * Create - Post - /reviews - Functional - recieve data from new route to create an review
 * Edit - GET - /reviews/:id/edit  - Presentational Form - respond with a form prefilled with review data
 * Update - PUT - /reviews/:id  - Functional - recieve data from edit to update a specific review 
 * Delete - DELETE - /reviews/:id  - Functional - Deletes review by id from request
 */

router.get("/", ctrl.idx);
router.get("/new", ctrl.newReview);
router.get("/:id", ctrl.show);

router.post("/", ctrl.create);
router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.destroy);
router.get("/:id/edit", ctrl.edit);

module.exports = router;
