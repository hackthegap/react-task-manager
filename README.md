
---

# React Task Manager
(Created by Fabricio Braga, last update Feb 19th 2025)

A simple task management application built with React, Redux, and modern React Hooks (`useState`, `useEffect`). This project is designed to help students learn core React concepts, state management with Redux, and event handling.

## Features

- Add a new task.
- Delete a task.
- Mark a task as completed.
- View a list of all tasks.

## Technologies Used

- React
- Redux (for state management)
- React Hooks (`useState`, `useEffect`)
- HTML/CSS (for styling)

---

## Prerequisites

Before running the project, ensure you have the following tools installed:

### 1. **Node.js and npm**

Node.js is a JavaScript runtime, and npm (Node Package Manager) is used to manage dependencies.

- **Install Node.js and npm**:
  - Download and install Node.js from [https://nodejs.org/](https://nodejs.org/).
  - Verify the installation:
    ```bash
    node -v
    npm -v
    ```

### 2. **nvm (Node Version Manager) - Optional**

`nvm` is a tool to manage multiple Node.js versions on your machine. It's useful if you work on multiple projects with different Node.js versions.

- **Install nvm**:
  - For macOS/Linux:
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
    ```
  - For Windows: Download the installer from [https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows).

- **Verify nvm installation**:
  ```bash
  nvm --version
  ```

- **Install a specific Node.js version**:
  ```bash
  nvm install 18
  nvm use 18
  ```

---

## Getting Started

Follow these steps to set up and run the project locally.

### 1. **Clone the Repository**

Clone the repository to your local machine:

```bash
git clone https://github.com/hackthegap/react-task-manager.git
cd react-task-manager
```

### 2. **Install Dependencies**

Install the required dependencies using npm:

```bash
npm install
```

### 3. **Run the Application**

Start the development server:

```bash
npm start
```

The application will open automatically in your default browser at [http://localhost:3000](http://localhost:3000).

---

## Project Structure

Here’s an overview of the project structure:

```
react-task-manager/
├── src/
│   ├── app/                  # Redux store configuration
│   ├── features/             # Redux slices (e.g., tasksSlice.js)
│   ├── components/           # React components (e.g., TaskForm, TaskList)
│   ├── App.js                # Main application component
│   ├── index.js              # Entry point for the app
│   └── App.css               # Styles for the app
├── public/                   # Static assets (e.g., index.html)
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
```

---

## Available Scripts

In the project directory, you can run the following scripts:

- **`npm start`**: Runs the app in development mode.
- **`npm test`**: Launches the test runner.
- **`npm run build`**: Builds the app for production.
- **`npm run eject`**: Ejects the app from Create React App (advanced use only).

---

## Learning Objectives

This project covers the following key concepts:

1. **React Components**: Breaking the UI into reusable components.
2. **State Management**: Using Redux to manage global state.
3. **React Hooks**: Using `useState` and `useEffect` for local state and side effects.
4. **Event Handling**: Handling user interactions like adding and deleting tasks.
5. **Styling**: Basic CSS for styling the application.

---

## Contributing

If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- This project was created as part of a course to teach React and Redux concepts.
- Special thanks to [Create React App](https://create-react-app.dev/) for the project setup.

---

## Questions?

If you have any questions or need further assistance, feel free to reach out to the instructor or open an issue in the repository.

---

This `README` file provides a comprehensive guide for students to set up the project, understand its structure, and learn the key concepts. Let me know if you'd like to add or modify anything!