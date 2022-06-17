const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const SignIn = async (req, res) => {
  const userInfo = req.body;

  try {
    const user = await User.findOne({ email: userInfo.email });
    if (!user) {
      return res
        .status(401)
        .json({ errors: [{ msg: "you must register before" }] });
    }
    if (user.role === 1) {
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
    }
    if (user.role === 0) {
      if (userInfo.password === user.password) {
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
    }
  } catch (error) {
    res.status(400).json({ errors: [{ msg: "login failed" }] });
  }
};
module.exports = { SignIn };
