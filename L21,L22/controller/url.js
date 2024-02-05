const shortid = require("shortid");
const URL = require("../models/url");

async function handleGenerateShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "URL is required" });

  const shortId = shortid();

  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.render('home', {id : shortId});
}

async function handleRedirect(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: { timestamps: Date.now() },
      },
    }
  );

  res.redirect(entry.redirectURL);
}

async function handleAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

// async function handleAllUrls(req, res) {
//   const allUrls = await URL.find();
//   return res.render("home", {
//     urls: allUrls,
//   });
// }

module.exports = {
  handleGenerateShortURL,
  handleRedirect,
  handleAnalytics,
  //handleAllUrls,
};