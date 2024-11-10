document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Por favor, ingresa una tarea.');
    return;
  }

  const taskList = document.getElementById('task-list');
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;

  const taskButtons = document.createElement('div');
  taskButtons.className = 'task-buttons';

  const completeBtn = document.createElement('button');
  completeBtn.className = 'complete-btn';
  completeBtn.textContent = '✔️';
  completeBtn.addEventListener('click', () => toggleComplete(taskItem));

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = '🗑️';
  deleteBtn.addEventListener('click', () => deleteTask(taskItem));


  taskButtons.appendChild(completeBtn);
  taskButtons.appendChild(deleteBtn);


  taskItem.appendChild(taskContent);
  taskItem.appendChild(taskButtons);

  taskList.appendChild(taskItem);

  taskInput.value = '';
}

function toggleComplete(taskItem) {
  taskItem.classList.toggle('completed');
}

function deleteTask(taskItem) {
  taskItem.remove();
}
