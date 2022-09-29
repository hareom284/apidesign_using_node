const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const createJWT = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.JWT_SECRET
  );
};
//middleware for without login
const protect = (req, res, next) => {
  const bearer = req.headers.authorization;
  console.log(bearer);

  if (!bearer) {
    res.status(401);
    res.json({
      message: "You are not access",
    });
    return;
  }
  const [, token] = bearer.split(" ");
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    console.error("auth error");
    res.status(401);
    res.json({
      message: "not a valid auth",
    });
    return;
  }
};
//compare password
const comparePasswords = (password, hash) => {
  return bcrypt.compare(password, hash);
};
//hash password
const hashPassword = (password) => {
  console.log("THis is working");
  return bcrypt.hash(password, 5);
};

module.exports = { createJWT, protect, comparePasswords, hashPassword };
