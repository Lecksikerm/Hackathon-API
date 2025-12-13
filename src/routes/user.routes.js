const express = require("express");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const {
    getMe,
    getAllUsers,
    updateUser,
    deleteUser
} = require("../controllers/user.controller");

const router = express.Router();

router.get("/me", auth, getMe);
router.get("/", auth, role("admin"), getAllUsers);
router.put("/:id", auth, role("admin"), updateUser);
router.delete("/:id", auth, role("admin"), deleteUser);

module.exports = router;
