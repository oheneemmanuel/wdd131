// Select the input element
const inputElement = document.querySelector('input');

// Select the button element
const buttonElement = document.querySelector('button');

// Select the list element
const listElement = document.querySelector('ul');
// create li that will hold entry
const li = document.createElement('li');
 // create a delete button 
const deleteButton = document.createElement("button");
// populate li
li.textContent = input.value;
// populate the delete button
buttonElement.textContent = "❌";

// appends the li element variable with the delete button
li.append(deleteButton);

//append the li element variable to the unordered list
list.append(li);

button.addEventListener('click', function() {
    // Code to execute when the button is clicked
    if (input.value.trim() !== "") {}
    
    // Additional logic can go here (e.g., adding a new chapter to the list)
});
