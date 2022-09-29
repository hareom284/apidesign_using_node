const jwt = require("jsonwebtoken");

const jwt_token = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    process.env.JWT_SECRET
  );
};

const protect = (req, res, next) => {
  const bearer = req.headers.authorization;
  const [, token] = bearer.split(" ");
  if (!bearer) {
    res.status(401);
    res.json({
      message: "You are not access",
    });
    return;
  }
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

module.exports = { jwt_token, protect };
