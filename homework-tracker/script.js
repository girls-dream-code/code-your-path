document.getElementById('newTaskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskTitle = document.getElementById('taskTitle').value;
    const taskDueDate = document.getElementById('taskDueDate').value;

    if (taskTitle && taskDueDate) {
        const taskItem = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = `${taskTitle} (Due: ${taskDueDate})`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskItem.remove();
        });

        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteButton);

        document.getElementById('tasks').appendChild(taskItem);

        document.getElementById('newTaskForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
