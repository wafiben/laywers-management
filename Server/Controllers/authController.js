const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Signup = async (req, res) => {
  const userInfo = req.body;
  try {
    const searchedUser = await User.findOne({ email: userInfo.email });
    if (searchedUser) {
      return res.status(401).json({ errors: [{ msg: "user already exist" }] });
    }
    const hashedPassword = await bcrypt.hash(userInfo.password, 10);
    const user = new User({
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      phone: userInfo.phone,
      password: hashedPassword,
    });
    await user.save();
    const token = jwt.sign(
      {
        firtsName: user.firtsName,
        lastName: user.lastName,
        phone: user.phone,
        email: user.email,
        id: user._id,
      },
      process.env.KEY
    );
    res.status(200).json({ user, token });
  } catch (error) {
    console.log(error)
    res.status(400).json({ errors: [{ msg: "register failed" }] });
  }
};
const SignIn = async (req, res) => {
  const userInfo = req.body;

  try {
    const user = await User.findOne({ email: userInfo.email });
    if (!user) {
      return res
        .status(401)
        .json({ errors: [{ msg: "you must register before" }] });
    }
    const result = await bcrypt.compare(userInfo.password, user.password);
    if (result == true) {
      console.log(result);
      const token = jwt.sign(
        {
          firstName: user.firstName,
          lastName: user.lastName,
          phone: user.phone,
          email: user.email,
          id: user._id,
        },
        process.env.KEY
      );
      res.status(200).json({ user, token });
    } else {
      res.status(401).json({ errors: [{ msg: "wrong password" }] });
    }
  } catch (error) {
    res.status(400).json({ errors: [{ msg: "login failed" }] });
  }
};
module.exports = { SignIn, Signup };
