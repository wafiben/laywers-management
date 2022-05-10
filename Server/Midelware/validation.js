const { body, validationResult } = require("express-validator");

const signupValidation = [
  body("firstName", "you must type your first name").not().isEmpty(),
  body("lastName", "you must type your last name").not().isEmpty(),
  body("phone", "the phone number must be 8 number").isLength({
    min: 8,
    max: 8,
  }),
  body("email", "error in format email").isEmail(),
  body("password", "the passsword must be 6 caracter at least").isLength({
    min: 6,
  }),
];
const loginValudation = [
  body("email", "error in format email").isEmail(),
  body("password", "the passsword must be 6 caracter at least").isLength({
    min: 6,
  }),
];

const validation = async (request, response, next) => {
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }
  next();
};
module.exports = { validation, signupValidation, loginValudation };
