const User = require("../model/user");
const { setUser } = require("../service/auth");

async function handleUserSignup(req, res) {
  const body = req.body;
  if (!body || !body.name || !body.email || !body.password)
    return res.status(400).json({ error: "Missing some fields" });

  const newUser = await User.create({
    name: body.name,
    email: body.email,
    password: body.password,
  });

  res.redirect("/");
}

async function handleUserLogin(req, res) {
  const body = req.body;
  if (!body || !body.email || !body.password)
    return res.status(400).json({ error: "Missing some fields" });

  const user = await User.findOne({
    email: body.email,
    password: body.password,
  });

  if (!user)
    return res.render("login", {
      error: "Invalid username or password",
    });

  const token = setUser(user);
  // Here you would set the "Authorization" header with the token
  // and return it as a response
  return res.status(200).json({ token });
}

module.exports = {
  handleUserSignup,
  handleUserLogin,
};
