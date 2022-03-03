# React Lifecycle Methods

## Getting Started

- Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
- Use this template repository to start a new project in your repos folder: git clone <repo_name>
  cd repo_name to navigate into your new repo directory
- Make sure to run `npm install` to fetch the dependencies for the project
- Start Visual Studio Code and select 'Open Folder'. Then select repo_name to open the folder in the editor (or just type code . in your terminal inside the repo directory)
- Follow the instructions on the README.md file to complete exercises
- Open the app.js file to get started

## Exercise

- Here is a basic App class component rendered in the browser through index.js.

1. Initialize state in the App class component, and define a new property called "text" with some string as the value.

2. Add an input element to your App.

   - Use the `text` state to define its placeholder attribute.

3. Create a method `handleInput` that takes a HTML change event as a param (`e`) and calls `this.setState`, setting the event target value as the `text` state
4. Add an `onChange` event to the input that calls `this.handleInput`.

- Notice how this changes the ReactDOM. Why might that be important?

5. Create a method `handleClick` that toggles the boolean value `hasLoaded` in the App state
6. Add a button beneath that input with an `onClick` event that calls the `handleClick` method
7. Change your `render` method. Write a conditional statement that checks whether or not the hasLoaded property is true. If it is, return the elements that you have already define. If false, return a new heading with the text "Loading...".
8. Add a button beneath it that is identical to the one you created earlier.

- Save and reload the browser. Which React elements are displayed first? Do you know why?

9. Write a new method with the name `componentDidMount`, that will set the state property "hasLoaded" to true.

- Now what happens when the application re-renders? Which React elements are displayed first, and why?
