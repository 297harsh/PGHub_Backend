const routes = require('express').Router();
const pgDataController = require("../controllers/pgDataController")

// routes.post("/allPgDetails",pgController.pgDetails);

routes.get("/pg/:pgId", pgDataController.getPGDetails);

routes.get("/searchbyCity/:city", pgDataController.searchByCity);

module.exports = routes;