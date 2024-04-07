const express = require("express");

const {
  handleGetLogin,
  handleGetSignUp,
  handlePostSignUp,
  handlePostLogin,
  handleLogOut,
} = require("../controllers/user");

const router = express.Router();

router.get("/login", handleGetLogin);
router.get("/signup", handleGetSignUp);
router.post("/signup", handlePostSignUp);
router.post("/login", handlePostLogin);
router.get("/logout", handleLogOut);

module.exports = router;
