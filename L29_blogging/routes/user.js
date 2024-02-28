const express = require("express");

const {
  handleGetLogin,
  handleGetSignUp,
  handlePostSignUp,
  handlePostLogin,
} = require("../controllers/user");

const router = express.Router();

router.get("/login", handleGetLogin);
router.get("/signup", handleGetSignUp);
router.post("/signup", handlePostSignUp);
router.post("/login", handlePostLogin);

module.exports = router;
