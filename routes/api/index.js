const router = require("express").Router();
const articleRoutes = require("./articles");
const mapRoutes = require("./maps")

//  routes
router.use("/articles", articleRoutes);
router.use("/maps", mapRoutes);

module.exports = router;
