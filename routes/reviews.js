const router = require("express").Router();
const ctrl = require("../controllers");

// Rest Routes as a guide. Use "Authors" routes as a guide here if you're stuck!
/*
 * Index - GET - /articles - Presentational - respond with all articles
 * New - GET - /articles/new  - Presentational Form - a page with a form to create a new article
 * Show - GET - /articles/:id  - Presentational - respond with specific article by id 
 * Create - Post - /articles - Functional - recieve data from new route to create an article
 * Edit - GET - /articles/:id/edit  - Presentational Form - respond with a form prefilled with article data
 * Update - PUT - /articles/:id  - Functional - recieve data from edit to update a specific article 
 * Delete - DELETE - /articles/:id  - Functional - Deletes article by id from request
 */

router.get("/", ctrl.reviews.idx);
router.get("/new", ctrl.reviews.newArticle);
router.get("/:id", ctrl.reviews.show);

router.post("/", ctrl.reviews.create);
router.put("/:id", ctrl.reviews.update);
router.delete("/:id", ctrl.reviews.destroy);
router.get("/:id/edit", ctrl.reviews.edit);

module.exports = router;