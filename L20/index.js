const express = require("express");

const { connectMongoDB } = require("./connection");

const userRouter = require("./routes/user");
const { logReqRes } = require("./middlewares");

const app = express();
const port = 3000;

//connection
connectMongoDB("mongodb://127.0.0.1:27017/piyushdeb_test").then(() =>
  console.log("MongoDB connected...")
);

// Middleware : plugin
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"));

//routes
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
