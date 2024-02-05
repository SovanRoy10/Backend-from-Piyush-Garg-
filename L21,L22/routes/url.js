const express = require("express");

const router = express.Router();
const {
  handleGenerateShortURL,
  handleRedirect,
  handleAnalytics,
 // handleAllUrls
} = require("../controller/url");

router.post("/", handleGenerateShortURL);

router.get("/:shortId", handleRedirect);
router.get("/analytics/:shortId", handleAnalytics);
// router.get("/home/allUrls", handleAllUrls)

module.exports = router;
