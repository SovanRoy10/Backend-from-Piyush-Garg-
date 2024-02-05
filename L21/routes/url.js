const express = require("express");

const router = express.Router();
const {
  handleGenerateShortURL,
  handleRedirect,
  handleAnalytics,
} = require("../controller/url");

router.post("/", handleGenerateShortURL);

router.get("/:shortId", handleRedirect);
router.get("/analytics/:shortId", handleAnalytics);

module.exports = router;
