require("dotenv").config();

const express = require("express");
const path = require("path");

const userRoute = require("./routes/user");
const blogRoute = require("./routes/blog");

const Blog = require("./models/blog");

const app = express();
const PORT = process.env.PORT || 3000;

const cookieParser = require("cookie-parser");
const {
  checkForAuthenticationCookie,
} = require("./middlewares/authentication");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URL).then((e) => {
  console.log("MongoDB is connected...");
});

app.use(express.static(path.resolve("./public")));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(checkForAuthenticationCookie(process.env.COOKIE_NAME));

app.get("/", async (req, res) => {
  const allBlogs = await Blog.find().sort({ createdAt: -1 });
  res.render("home", {
    user: req.user,
    blogs: allBlogs,
  });
});

app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
