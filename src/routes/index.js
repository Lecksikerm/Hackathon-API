const express = require("express");
const authRoutes = require("./auth.routes");
const protectedRoutes = require("./protected.routes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/", protectedRoutes);

module.exports = router;
