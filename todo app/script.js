document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const taskInput = document.getElementById('task-input');
    const dateInput = document.getElementById('date-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get task and date values
        const task = taskInput.value;
        const date = dateInput.value;

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${date}</span>${task}`;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(listItem);
        });

        // Append delete button to list item
        listItem.appendChild(deleteButton);

        // Append list item to the list
        todoList.appendChild(listItem);

        // Clear the input fields
        taskInput.value = '';
        dateInput.value = '';
    });
});
