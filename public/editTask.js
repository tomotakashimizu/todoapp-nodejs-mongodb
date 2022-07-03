const taskIDDOM = document.querySelector('.task-edit-id');
const taskNameDOM = document.querySelector('.task-edit-name');

const params = window.location.search;
const id = new URLSearchParams(params).get('id');

console.log(id);

const showTask = async () => {
  try {
    const { data: task } = await axios.get(`/api/v1/tasks/${id}`);
    const { _id, name, completed } = task;

    taskIDDOM.textContent = _id;
    taskNameDOM.value = name;
  } catch (error) {
    console.log(error);
  }
};

showTask();
