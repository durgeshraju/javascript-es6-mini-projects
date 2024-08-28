const taskInput = document.querySelector('.task-input');
const addTask = document.querySelector('.add-task');
const taskForm = document.querySelector('#taskForm');
const taskList = document.querySelector('.task-list');

// Add task input event handler
const addTaskInput = (e) => {
  e.target.value.trim().length > 0
    ? addTask.removeAttribute('disabled')
    : addTask.setAttribute('disabled', true);
};

// Add task input event listener
taskInput.addEventListener('keyup', addTaskInput);

// Add task button event handler

const btnAddTaskHandler = (e) => {
  console.log(e);
  e.preventDefault();
  const task = taskInput.value.trim();
  console.log('Add Task:', task);
  taskForm.reset();
  addTask.setAttribute('disabled', true);
};

// Add task button event listener
addTask.addEventListener('click', btnAddTaskHandler);
