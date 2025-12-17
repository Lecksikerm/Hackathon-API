const express = require("express");
const {
    register,
    login,
    verifyEmail,
    resendVerification,
    forgotPassword,
    resetPassword } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", register);
router.get("/verify-email", verifyEmail);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/resend-verification", resendVerification);

module.exports = router;
