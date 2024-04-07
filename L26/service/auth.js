const jwt = require("jsonwebtoken");
const secret = "Sovan$123@$";

function setUser(user) {
  // console.log('User object:', user);
  return jwt.sign(user.toJSON(), secret);
}

function getUser(token) {
  if (!token) return null;

  try {
    return jwt.verify(token, secret);
  } catch (error) {
    console.log("Error:- ", error);
    return null;
  }
}

module.exports = {
  setUser,
  getUser,
};
