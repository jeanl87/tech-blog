const router = require("express").Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./commentROutes");

router.use("/user", userRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);

module.exports = router;
