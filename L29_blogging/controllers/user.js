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
  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);
    //   console.log("Token", token);
    return res.cookie("token", token).redirect("/");
  } catch (error) {
    return res.render("login", {
      error: "Incorrect Email or password",
    });
  }
}

async function handleLogOut(req, res) {
  return res.clearCookie("token").redirect("/");
}

module.exports = {
  handleGetLogin,
  handleGetSignUp,
  handlePostSignUp,
  handlePostLogin,
  handleLogOut,
};
