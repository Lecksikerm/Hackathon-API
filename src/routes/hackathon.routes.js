const express = require("express");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const {
    createHackathon,
    getHackathons,
    registerTeam,
    getRegisteredTeams
} = require("../controllers/hackathon.controller");

const router = express.Router();

router.post("/", auth, role("admin"), createHackathon);
router.get("/", auth, getHackathons);
router.post("/:id/register", auth, registerTeam);
router.get("/:id/teams", auth, getRegisteredTeams);

module.exports = router;