const jwt = require("jsonwebtoken");
const secret = "Sovan$123@$";

function setUser(user) {
  // console.log('User object:', user);
  return jwt.sign(user.toJSON(), secret);
}

function getUser(token) {
  if(!token) return null;

  return jwt.verify(token, secret);
}

module.exports = {
  setUser,
  getUser,
};
