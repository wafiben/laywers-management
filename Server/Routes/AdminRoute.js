const express = require("express");
const router = express.Router();
const isAdmin = require("../Midelware/isAdmin");
const isAuth = require("../Midelware/Auth");
const {
  addUser,
  getAllUsers,
  deleteUser,
  getOneUser,
} = require("../Controllers/AdminController");
router.get("/", isAuth, isAdmin, getAllUsers);
router.delete("/:id", isAuth, isAdmin, deleteUser);
router.get("/:id", isAuth, isAdmin, getOneUser);
router.post("/", isAuth, isAdmin, addUser);

module.exports = router;
