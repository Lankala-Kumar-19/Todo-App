const authService = require("../services/authService");

const login = async (req, res) => {
  try {
    const token = await authService.login(req.body);

    if (!token) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { login };
