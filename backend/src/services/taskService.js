const Task = require("../models/Task");

/**
 * Create a new task
 */
const createTask = async (userId, taskData) => {
  const task = await Task.create({
    ...taskData,
    user: userId,
  });

  return task;
};

/**
 * Get all tasks for logged-in user
 * Supports sorting
 */
const getTasks = async (userId, query) => {
  const { sort } = query;

  let sortOption = {};

  if (sort === "deadline") {
    sortOption = { deadline: 1 };
  }

  if (sort === "priority") {
    sortOption = { priority: -1 };
  }

  if (sort === "created") {
    sortOption = { createdAt: -1 };
  }

  if (sort === "mixed") {
    sortOption = {
      completed: 1,
      priority: -1,
      deadline: 1,
    };
  }

  return await Task.find({ user: userId }).sort(sortOption);
};



/**
 * Get single task (must belong to user)
 */
const getTaskById = async (userId, taskId) => {
  return await Task.findOne({ _id: taskId, user: userId });
};

/**
 * Update task
 */
const updateTask = async (userId, taskId, updates) => {
  return await Task.findOneAndUpdate(
    { _id: taskId, user: userId },
    updates,
    { new: true }
  );
};

/**
 * Toggle completion
 */
const toggleTask = async (userId, taskId) => {
  const task = await Task.findOne({ _id: taskId, user: userId });

  if (!task) return null;

  task.completed = !task.completed;
  await task.save();

  return task;
};

/**
 * Delete task
 */
const deleteTask = async (userId, taskId) => {
  return await Task.findOneAndDelete({ _id: taskId, user: userId });
};

module.exports = {
  createTask,
  getTasks,
  getTaskById,
  updateTask,
  toggleTask,
  deleteTask,
};
