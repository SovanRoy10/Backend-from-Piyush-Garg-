const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allDbUser = await User.find();
  return res.json(allDbUser);
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  return res.json(user);
}

async function handleUpdateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, {
    last_name: "Changed",
  });

  return res.json({ status: "success" });
}

async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "success" });
}

async function handleCreateUser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are req..." });
  }

  const createUser = await User.create({
    first_name: body.first_name,
    last_name: body.last_name,
    email: body.email,
    job_title: body.job_title,
    gender: body.gender,
  });

  return res.status(201).json({ msg: "success", id: createUser._id });
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUser,
};
