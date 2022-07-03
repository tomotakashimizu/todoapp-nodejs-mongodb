const taskIDDOM = document.querySelector('.task-edit-id');
const taskNameDOM = document.querySelector('.task-edit-name');
const formDOM = document.querySelector('.single-task-form');
const formAlertDOM = document.querySelector('.form-alert');
const taskCompletedDOM = document.querySelector('.task-edit-completed');

const params = window.location.search;
const id = new URLSearchParams(params).get('id');

console.log(id);

const showTask = async () => {
  try {
    const { data: task } = await axios.get(`/api/v1/tasks/${id}`);
    const { _id, name, completed } = task;

    taskIDDOM.textContent = _id;
    taskNameDOM.value = name;
    taskCompletedDOM.checked = completed;
  } catch (error) {
    console.log(error);
  }
};

showTask();

formDOM.addEventListener('submit', async (event) => {
  event.preventDefault();

  try {
    const taskName = taskNameDOM.value;
    const taskCompleted = taskCompletedDOM.checked;
    await axios.patch(`/api/v1/tasks/${id}`, {
      name: taskName,
      completed: taskCompleted,
    });
    formAlertDOM.style.display = 'block';
    formAlertDOM.innerHTML = 'タスクを編集しました。';
    formAlertDOM.classList.add('text-success');
  } catch (error) {
    console.log(error);
  }
  setTimeout(() => {
    formAlertDOM.style.display = 'none';
  }, 3000);
});
