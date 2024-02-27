const express = require("express");
const router = express.Router();

const {
  handleGenerateNewShortURL,
  handleRedirectURL,
  handleAnalytics,
} = require("../controller/url");

router.post("/", handleGenerateNewShortURL);
router.get("/:shortId", handleRedirectURL);
router.get("/analytics/:shortId", handleAnalytics);

module.exports = router;
