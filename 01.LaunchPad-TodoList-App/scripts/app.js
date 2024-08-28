const taskInput = document.querySelector('.task-input');
const addTask = document.querySelector('.add-task');
const taskForm = document.querySelector('#taskForm');
const taskList = document.querySelector('.task-list');
const taskItem = document.querySelector('.task-item');

// Task list

const tasks = [];
console.log('Task List:', tasks);

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
  taskForm.reset();
  addTask.setAttribute('disabled', true);
};

// Add task button event listener
addTask.addEventListener('click', btnAddTaskHandler);
