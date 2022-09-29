import { validationResult } from "express-validator";

const handleInputValidator = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(400);
    res.json({
      errors: error.array(),
    });
  } else {
    next();
  }
};

export default handleInputValidator;
