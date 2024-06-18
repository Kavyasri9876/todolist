
# Todo List Application

This is a React application that allows users to create, manage, and search for tasks. It utilizes local storage to persist data across sessions.

## Features

- **Add Tasks**: Users can add new tasks by entering a description in the input field and clicking the "Add Task" button.
- **Search Tasks**: Users can search for specific tasks using the search bar in the header. The application filters the displayed tasks based on the entered keywords.
- **Toggle Task Completion**: Users can mark tasks as complete or incomplete by clicking on a checkbox next to each task.
- **Delete Tasks**: Users can remove tasks from the list by clicking on a delete button associated with each task.
- **Persist Data**: The application utilizes local storage to save the current state of the todo list. This ensures that tasks are not lost when the user refreshes the page or closes the browser window.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Bootstrap**: For layout and styling (including Button component).
- **Font Awesome**: For icons (including FaPlus and FaTrash icons).
- **Local Storage**: To store the todo list data.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine:

### Prerequisites

- Node.js and npm (or yarn) installed on your machine.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/todo-list-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd todo-list-app
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

1. Start the development server:
    ```bash
    npm start
    ```
2. Open your browser and go to `http://localhost:3000`.

## Project Structure

src/

-**Addtask.js:** Handles adding new tasks.
-**Content.js:** Main application component.
-**Header.js:** Displays the header and search bar.
-**Footer.js:** Displays the footer with copyright information.
-**App.js:** Entry point of the application.


## Code Overview

The provided code demonstrates the functionality of three components:

- **Header.js**: This component renders the application title and includes a search bar that utilizes the `search` state variable and `setSearch` function for user input.
- **Content.js**: This is the main content area of the application. It handles displaying the todo list, adding new tasks, searching for tasks, toggling task completion (not shown in provided code), and deleting tasks. It utilizes the `todoList` state variable and `setTodoList` function to manage the list of tasks.
- **Addtask.js**: This component allows users to enter a new task description and add it to the todo list. It utilizes the `newTask` state variable and `setnewTask` function to manage the new task input, and the `todoList` state variable and `setTodoList` function to update the list with the new task.



