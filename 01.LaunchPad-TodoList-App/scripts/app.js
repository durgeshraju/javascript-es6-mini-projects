const taskInput = document.querySelector('.task-input');
const addTask = document.querySelector('.add-task');
const taskForm = document.querySelector('#taskForm');

const addTaskInput = (e) => {
  e.target.value.trim().length > 0
    ? addTask.removeAttribute('disabled')
    : addTask.setAttribute('disabled', true);
};
taskInput.addEventListener('keyup', addTaskInput);

const btnAddTaskHandler = (e) => {
  console.log(e);
  e.preventDefault();
  const task = taskInput.value.trim();
  console.log('Add Task:', task);
  taskForm.reset();
  addTask.setAttribute('disabled', true);
};
addTask.addEventListener('click', btnAddTaskHandler);
