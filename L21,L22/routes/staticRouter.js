const express = require("express");
const URL = require("../models/url");

const router = express.Router();

router.get("/", async (req, res) => {
  const allUrls = await URL.find();
  //console.log(allUrls)
  return res.render("home", {
    urls: allUrls,
  });
});

router.get("/signup", (req, res) => {
  res.render("signUp");
});

router.get("/login", (req, res) => {
  res.render("login");
});


module.exports = router;
