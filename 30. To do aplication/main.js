class Task {
    constructor(name) {
      this.name = name;
      this.completed = false;
    }
  }
  class ToDoList {
    constructor() {
      this.tasks = [];
    }
    addTask(task) {
      this.tasks.push(task);
    }
    removeTask(task) {
      this.tasks = this.tasks.filter(t => t !== task);
    }
    displayTasks() {
      const tasksList = document.getElementById('tasks');
      tasksList.innerHTML = '';
      this.tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task.name;
        tasksList.appendChild(li);
      });
    }
  }
  const toDoList = new ToDoList();
  const taskForm = document.getElementById('task-form');
  taskForm.addEventListener('submit', event => {
    event.preventDefault();
    const taskName = document.getElementById('task-name').value;
    if (taskName) {
      const task = new Task(taskName);
      toDoList.addTask(task);
      toDoList.displayTasks();
    }
  });