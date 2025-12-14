const express = require("express");
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const protectedRoutes = require("./protected.routes");
const teamRoutes = require("./team.routes");
const hackathonRoutes = require("./hackathon.routes");
const projectRoutes = require("./project.routes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/", protectedRoutes);
router.use("/users", userRoutes);
router.use("/teams", teamRoutes);
router.use("/hackathons", hackathonRoutes);
router.use("/projects", projectRoutes);


module.exports = router;
