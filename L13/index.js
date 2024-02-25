const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const port = 3000;

// Middleware : plugin
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  const html = `
      <ul>
          ${users.map((user) => `<li> ${user.first_name} </li>`).join("")}
      <ul>
      `;
  res.send(html);
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  res.json(users.find((user) => user.id === Number(req.params.id)));
});

app.post("/api/users", (req, res) => {
  // TODO : create new user
  const body = req.body;
  console.log(body);
  console.log(users.length)
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: users.length });
  });
});

app.patch("/api/users/:id", (req, res) => {
  // TODO : edit the user with id

  let userIndex = users.findIndex((user) => user.id === Number(req.params.id));
  users[userIndex] = { ...users[userIndex], ...req.body };
  console.log(req.body);

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: req.params.id });
  });
});

app.delete("/api/users/:id", (req, res) => {
  // TODO : delete the user with id
  let userIndex = users.findIndex((user) => user.id === Number(req.params.id));
  users.splice(userIndex, 1);
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: req.params.id });
  });
});

//merging or grouping
// app
//   .route("/api/users/:id")
//   .get((req, res) => {
//     res.json(users.find((user) => user.id === Number(req.params.id)));
//   })
//   .delete((req, res) => {
//     // TODO : delete the user with id
//     res.json({ status: "pending" });
//   })
//   .patch((req, res) => {
//     // TODO : edit the user with id
//     res.json({ status: "pending" });
//   });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
