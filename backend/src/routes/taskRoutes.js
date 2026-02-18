const express = require("express");
const router = express.Router();

const { verify } = require("../middlewares/authMiddleware");
const taskController = require("../controllers/taskController");

// Protect all routes
router.use(verify);

// Create
router.post("/", taskController.createTask);

// Get all
router.get("/", taskController.getTasks);

// Get single
router.get("/:id", taskController.getTaskById);

// Update
router.put("/:id", taskController.updateTask);

// Toggle complete
router.patch("/:id/toggle", taskController.toggleTask);

// Delete
router.delete("/:id", taskController.deleteTask);

module.exports = router;
