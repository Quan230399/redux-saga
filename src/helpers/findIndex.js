const findIndex = (tasks, id) => {
  const tasksId = tasks.map((task) => task.id);
  return tasksId.indexOf(id);
};

export default findIndex;
