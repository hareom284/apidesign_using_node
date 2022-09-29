import prima from "../db.js";
import { hashPassword, createJWT, comparePasswords } from "../modules/auth.js";

//create account

export const createNewUser = async (req, res) => {
  console.log(req.body.username);
  const hash = await hashPassword(req.body.password);
  const user = await prima.User.create({
    data: {
      username: req.body.username,
      password: hash,
    },
  });

  const token = createJWT(user);
  console.log(token);
  res.json({ token });
};

//sign in
export const signin = async (req, res) => {
  const user = await prima.User.findUnique({
    where: { username: req.body.username },
  });

  const isValid = await comparePasswords(req.body.password, user.password);
  if (!isValid) {
    res.status(401);
    res.send("Invalid username and password");
    return;
  }
  const token = createJWT(user);
  res.json({ token: token });
};
