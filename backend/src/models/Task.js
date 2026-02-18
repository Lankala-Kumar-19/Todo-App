const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    deadline: {
      type: Date,
      required: true,
    },

    priority: {
      type: Number,
      enum: [1,2,3], // 1=low, 2=medium, 3=high
      default: "medium",
    },

    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//Index for faster sorting
TaskSchema.index({ user: 1, deadline: 1 });
TaskSchema.index({ user: 1, priority: 1 });

module.exports = mongoose.model("Task", TaskSchema);
