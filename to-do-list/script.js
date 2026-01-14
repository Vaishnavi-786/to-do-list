const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Add task
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if(taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;

    // Mark complete on click
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
  }
});

// Allow Enter key to add task
taskInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    addBtn.click();
  }
});
