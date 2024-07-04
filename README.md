# HTML & JS Basic Template
### To Do List 

## Explanation
- HTML: Defines a basic structure with an input field and a button to add tasks, and a `<div>` to display tasks.
- CSS: Basic styling for the to-do list items.
- JavaScript (app.js):
- Declares variables to store DOM elements and task data (tasks array).
- Defines functions:
- `renderTasks():` Clears the existing list and renders tasks from the tasks array.
- `addTask(task):` Adds a task to the tasks array and re-renders the list.
- `deleteTask(index):` Deletes a task from the tasks array based on index and re-renders the list.
- Adds an event listener to the form for submitting tasks, preventing default behavior, adding tasks to the array, and clearing the input field.
