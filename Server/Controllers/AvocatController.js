const SignIn = async (req, res) => {
    const userInfo = req.body;
  
    try {
      const user = await User.findOne({ email: userInfo.email });
      if (!user) {
        return res
          .status(401)
          .json({ errors: [{ msg: "contact admin for registrarion " }] });
      }
      const result = await bcrypt.compare(userInfo.password,user.password);
      if (result==true) {
        const token = jwt.sign(
          { username: user.username, email: user.email, id: user._id },
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