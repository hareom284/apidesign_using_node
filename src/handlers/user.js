const PrismaClient = require("../db");

const {
  hashPassword,
  createJWT,
  comparePasswords,
} = require("../modules/auth");

//create account

const createNewUser = async (req, res) => {
  const hash = await hashPassword(req.body.password);
  const user = await PrismaClient.user.create({
    data: {
      username: req.body.username,
      password: hash,
    },
  });
  console.log(user);
  const token = createJWT(user);
  res.json({ token });
};

//sign in
const signin = async (req, res) => {
  const user = await prisma.User.findUnique({
    where: { id: req.body.username },
  });
  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.send("Invalid username and password");
    return;
  }
  const token = createJWT(user);
  res.json({ token });
};

module.exports = { signin, createNewUser };
