const userService = require("../services/userService");

/**
 * Register new user
 */
const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);

    res.status(201).json({
      message: "User registered successfully",
      user, // password already hidden via select:false
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || "Failed to register user",
    });
  }
};

/**
 * Get all users (protected route)
 */
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch users",
    });
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
