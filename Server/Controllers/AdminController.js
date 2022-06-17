const User = require("../Models/User.js");
const addUser = async (req, res) => {
  const userInfo = req.body;
  try {
    const searchedUser = await User.findOne({ email: userInfo.email });
    if (searchedUser) {
      return res.status(401).json({ errors: [{ msg: "user already exist" }] });
    }
    const user = new User({
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      phone: userInfo.phone,
      password: userInfo.password,
    });
    await user.save();

    res
      .status(200)
      .json({ user: user, msg: "user has been succesfully added" });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ errors: [{ msg: "register of user is failed failed" }] });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users: users });
  } catch (error) {
    res.status(400).json({ msg: "failed to get users" });
  }
};
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    const users = await User.find();
    res.status(200).json({ msg: "user is sucessfully deleted", users });
  } catch (error) {
    res.status(400).json({ msg: "deleted is failed" });
  }
};
const getOneUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(400).json({ msg: "failed to get one user" });
  }
};
module.exports = { addUser, getAllUsers, deleteUser, getOneUser };
