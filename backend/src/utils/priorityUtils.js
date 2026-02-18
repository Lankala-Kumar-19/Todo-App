const priorityWeight = {
  low: 1,
  medium: 2,
  high: 3,
};

const getPriorityValue = (priority) => {
  return priorityWeight[priority] || 0;
};

module.exports = {
  getPriorityValue,
  priorityWeight,
};
