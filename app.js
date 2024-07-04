// DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Array to store tasks
let tasks = [];

// Function to render tasks
function renderTasks() {
    // Clear existing list
    todoList.innerHTML = '';

    // Create and append new list items
    tasks.forEach((task, index) => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = `
            <span>${task}</span>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        todoList.appendChild(todoItem);
    });
}

// Function to add a task
function addTask(task) {
    tasks.push(task);
    renderTasks();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Event listener for form submission
todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const taskText = todoInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        todoInput.value = ''; // Clear input field
    }
});
