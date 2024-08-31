const taskInput = document.querySelector('.task-input');
const addTask = document.querySelector('.add-task');
const taskForm = document.querySelector('#taskForm');
const taskList = document.querySelector('.task-list');
const taskItem = document.querySelector('.task-item');
const emptyStateContainer = document.querySelector('.empty-state-container');
const clearTasks = document.querySelector('#TasksClear');
const taskAppHeader = document.querySelector('.task-app-header');

// Toggle empty state visibility based on tasks length

const toggleEmptyState = () => {
  const isEmpty = tasks.length === 0;
  emptyStateContainer.classList.toggle('is-visible', isEmpty);
  emptyStateContainer.classList.toggle('is-hidden', !isEmpty);

  const isTasks = tasks.length > 0;
  taskAppHeader.classList.toggle('is-visible', isTasks);
  taskAppHeader.classList.toggle('is-hidden', !isTasks);
};

// Render tasks
const renderTasks = () => {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    taskList.innerHTML += `
      <li class="task-item">
        <input type="checkbox" class="task-checkbox" />
        <p class="task-text">${task}</p>
        <a href="#" class="delete-task" data-index="${index}">
          <i class="far fa-trash-alt"></i>
        </a>
      </li>
    `;
  });
};

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
  e.preventDefault();
  const task = taskInput.value.trim();
  renderTasks(tasks.push(task));
  toggleEmptyState();
  setTasks(tasks);
  taskForm.reset();
  addTask.setAttribute('disabled', true);
};

// Add task button event listener
addTask.addEventListener('click', btnAddTaskHandler);

// Local storage

// Get tasks
const getTasks = () => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

// Set tasks
const setTasks = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Load tasks from local storage
const tasks = getTasks();
renderTasks();
toggleEmptyState();

// Delete task event handler

const deleteTaskHandler = (e) => {
  e.preventDefault();
  if (e.target.classList.contains('delete-task')) {
    const index = e.target.getAttribute('data-index');
    tasks.splice(index, 1);
    setTasks(tasks);
    renderTasks();
    toggleEmptyState();
  }
};

taskList.addEventListener('click', deleteTaskHandler);

// Clear tasks event handler

const clearTasksHandler = (e) => {
  e.preventDefault();
  tasks.splice(0, tasks.length);
  setTasks([]);
  renderTasks();
  toggleEmptyState();
};
clearTasks.addEventListener('click', clearTasksHandler);
