const User = require("../models/user");

async function handleGetLogin(req, res) {
  return res.render("login");
}

async function handleGetSignUp(req, res) {
  return res.render("signup");
}

async function handlePostSignUp(req, res) {
  const { fullName, email, password } = req.body;
  await User.create({
    fullName,
    email,
    password,
  });

  return res.redirect("/");
}

async function handlePostLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.matchPassword(email, password);
  console.log("User", user);
  return res.redirect("/");
}

module.exports = {
  handleGetLogin,
  handleGetSignUp,
  handlePostSignUp,
  handlePostLogin,
};
