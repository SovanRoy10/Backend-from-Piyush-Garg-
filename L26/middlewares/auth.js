const { getUser } = require("../service/auth");

function checkForAuthentication(req, res, next) {
  const tokenCookie = req.cookies?.token;
  req.user = null;
  if (!tokenCookie) return next();

  const user = getUser(tokenCookie);
  // console.log(user);

  req.user = user;
  // console.log(req.user);
  next();
}

//ADMIN , NORMAL
function restrictTo(roles = []) {
  return function (req, res, next) {
    // console.log(roles, req.user.role)
    if (!req.user) return res.redirect("/login");

    if (!req.user.role || !roles.includes(req.user.role))
      return res.end("Unauthorized");

    return next();
  };
}

module.exports = {
  checkForAuthentication,
  restrictTo,
};
