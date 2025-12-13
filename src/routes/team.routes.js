const express = require("express");
const auth = require("../middleware/auth.middleware");
const {
    createTeam,
    getTeam,
    joinTeam,
    removeMember,
    changeLeader
} = require("../controllers/team.controller");

const router = express.Router();

router.post("/", auth, createTeam);
router.get("/:id", auth, getTeam);
router.post("/:id/join", auth, joinTeam);
router.patch("/:id/leader", auth, changeLeader);
router.delete("/:id/members/:userId", auth, removeMember);

module.exports = router;
