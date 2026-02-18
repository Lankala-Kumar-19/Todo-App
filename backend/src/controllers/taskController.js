const taskService = require("../services/taskService");

const createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.user.id, req.body);

    res.status(201).json({
      message: "Task created successfully",
      task,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to create task" });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getTasks(req.user.id, req.query);

    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
};

const getTaskById = async (req, res) => {
  try {
    const task = await taskService.getTaskById(
      req.user.id,
      req.params.id
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ message: "Error fetching task" });
  }
};

const updateTask = async (req, res) => {
  try {
    const updatedTask = await taskService.updateTask(
      req.user.id,
      req.params.id,
      req.body
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({
      message: "Task updated successfully",
      updatedTask,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to update task" });
  }
};

const toggleTask = async (req, res) => {
  try {
    const task = await taskService.toggleTask(
      req.user.id,
      req.params.id
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({
      message: "Task toggled successfully",
      task,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to toggle task" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const deleted = await taskService.deleteTask(
      req.user.id,
      req.params.id
    );

    if (!deleted) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete task" });
  }
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  toggleTask,
  deleteTask,
};
