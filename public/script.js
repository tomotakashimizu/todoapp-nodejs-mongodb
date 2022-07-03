const tasksDOM = document.querySelector('.tasks');
const formDOM = document.querySelector('.task-form');
const taskInputDOM = document.querySelector('.task-input');
const formAlertDOM = document.querySelector('.form-alert');

// /api/v1/tasksからタスクを取得し、表示する
const showTasks = async () => {
  try {
    // 自作のAPIを叩いてタスクを取得
    const { data: tasks } = await axios.get('/api/v1/tasks');

    if (tasks.length < 1) {
      tasksDOM.innerHTML = `<h5 class="empty-list">タスクがありません</h5>`;
      return;
    }

    // タスクを表示
    const taskNames = tasks
      .map((task) => {
        const { _id, name, completed } = task;

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
            <button type="button" class="delete-btn" data-id='${_id}'>
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>`;
      })
      .join('');

    tasksDOM.innerHTML = taskNames;
  } catch (error) {
    console.log(error);
  }
};

showTasks();

// タスクを新規作成する
formDOM.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = taskInputDOM.value;

  try {
    await axios.post('/api/v1/tasks', { name: name });
    showTasks();
    taskInputDOM.value = '';
    formAlertDOM.style.display = 'block';
    formAlertDOM.innerHTML = 'タスクを作成しました。';
    formAlertDOM.classList.add('text-success');
  } catch (error) {
    console.log(error);
    formAlertDOM.style.display = 'block';
    formAlertDOM.innerHTML = '無効な値です。もう一度正しく入力してください。';
    formAlertDOM.classList.remove('text-success');
  }
  setTimeout(() => {
    formAlertDOM.style.display = 'none';
  }, 3000);
});

// タスクを削除する
tasksDOM.addEventListener('click', async (event) => {
  const element = event.target;
  console.log(element);
  console.log(element.parentElement);
  if (element.parentElement.classList.contains('delete-btn')) {
    try {
      const id = element.parentElement.dataset.id;
      console.log(id);
      await axios.delete(`api/v1/tasks/${id}`);
      showTasks();
    } catch (error) {
      console.log(error);
    }
  }
});
