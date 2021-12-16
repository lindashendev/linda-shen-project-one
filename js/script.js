// Mobile dropdown functionality
// 1. Grab menu icon class 
// 2. When clicked, turn on display property
// 3. If dropdown is visible, turn off display property 

// Get icon and ul element from the DOM 
const selectButton = document.querySelector(".fa-bars");
const dropdown = document.querySelector("ul");
console.log(dropdown);

// Click event on menu icon
selectButton.addEventListener("click", function () {
  if (dropdown.style.display === 'none') {
    dropdown.style.display = 'flex';
  } else {
    dropdown.style.display = 'none';
  }
});

