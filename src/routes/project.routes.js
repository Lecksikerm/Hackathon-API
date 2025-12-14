const express = require("express");
const auth = require("../middleware/auth.middleware");
const {
    submitProject,
    updateProject,
    getProjectsByHackathon
} = require("../controllers/project.controller");

const router = express.Router();

router.post("/", auth, submitProject);
router.put("/:id", auth, updateProject);
router.get("/hackathon/:id", auth, getProjectsByHackathon);

module.exports = router;
