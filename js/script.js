// pseudo code 
// when user clicks on .fa-bars element (menu icon)
// set .dropdown ul to visible
// set to toggle - on/off 

// Get menu icon from page
const selectButton = document.querySelector(".fa-bars");
const dropdown = document.querySelector("ul");
console.log(dropdown);
// Add an event listener
selectButton.addEventListener("click", function () {
  if (dropdown.style.display === 'none') {
    dropdown.style.display = 'flex';
  } else {
    dropdown.style.display = 'none';
  }
});