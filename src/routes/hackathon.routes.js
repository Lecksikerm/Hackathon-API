const express = require("express");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const {
    createHackathon,
    getHackathons,
    getHackathonById,
    registerTeam,
    getRegisteredTeams
} = require("../controllers/hackathon.controller");

const router = express.Router();

router.get("/", getHackathons);
router.get("/:id", getHackathonById);

// Admin creates hackathon
router.post("/", auth, role("admin"), createHackathon);

// Authenticated user registers team
router.post("/:id/register", auth, registerTeam);

// Admin views registered teams
router.get("/:id/teams", auth, role("admin"), getRegisteredTeams);

module.exports = router;
