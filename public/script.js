const tasksDOM = document.querySelector('.tasks');

// /api/v1/tasksからタスクを取得し、表示する
const showTasks = async () => {
  try {
    // 自作のAPIを叩いてタスクを取得
    const { data: tasks } = await axios.get('/api/v1/tasks');
    console.log(tasks);

    // タスクを表示
    const taskNames = tasks
      .map((task) => {
        console.log(task);
        const { _id, name, completed } = task;
        console.log(name);

        return `
        <div class="single-task">
          <h5>
            <span><i class="far fa-check-circle"></i></span>
            ${name}
          </h5>
          <div class="task-links">
            <a href="#" class="edit-link">
              <i class="fas fa-edit"></i>
            </a>
            <button type="button" class="delete-btn">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>`;
      })
      .join('');

    console.log(taskNames);
    tasksDOM.innerHTML = taskNames;
  } catch (error) {
    console.log(error);
  }
};

showTasks();
