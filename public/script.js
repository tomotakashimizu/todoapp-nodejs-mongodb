const showTasks = async () => {
  try {
    const { data: tasks } = await axios.get('/api/v1/tasks');
    console.log(tasks);
  } catch (error) {
    console.log(error);
  }
};

showTasks();
