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

  let tasks = await Task.find({ user: userId });

  if (sort === "mixed") {
    tasks = tasks.sort((a, b) => {

      // 1️⃣ Incomplete first
      if (a.completed !== b.completed) {
        return a.completed ? 1 : -1;
      }

      // 2️⃣ Higher priority first
      const priorityDiff =
        getPriorityValue(b.priority) - getPriorityValue(a.priority);

      if (priorityDiff !== 0) {
        return priorityDiff;
      }

      // 3️⃣ Earlier deadline first
      return new Date(a.deadline) - new Date(b.deadline);
    });
  }

  return tasks;
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
