const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const mongoose = require("mongoose");
const { Certificate } = require("crypto");
mongoose
  .connect("mongodb://127.0.0.1:27017/piyushdeb_test")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Mongo Error", err));

const app = express();
const port = 3000;

// schema
const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    job_title: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
);

//model
const User = mongoose.model("user", userSchema);

// Middleware : plugin
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", async (req, res) => {
  const allDbUser = await User.find();
  const html = `
      <ul>
          ${allDbUser
            .map((user) => `<li> ${user.first_name}- ${user.email} </li>`)
            .join("")}
      <ul>
      `;
  res.send(html);
});

app.get("/api/users", async (req, res) => {
  const allDbUser = await User.find();
  res.json(allDbUser);
});

app.get("/api/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

app.post("/api/users", async (req, res) => {
  // TODO : create new user
  const body = req.body;
  // console.log(body);
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

  // console.log(createUser);

  return res.status(201).json({ msg: "success" });
});

app.patch("/api/users/:id", async (req, res) => {
  // TODO : edit the user with id

  await User.findByIdAndUpdate(req.params.id, {
    last_name: "Changed",
  });

  res.json({ status: "success" });
});

app.delete("/api/users/:id", async(req, res) => {
  // TODO : delete the user with id
  
  await User.findByIdAndDelete(req.params.id);

  res.json({ status: "success" });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
