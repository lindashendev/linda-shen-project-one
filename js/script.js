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
    dropdown.style.display = '';
    console.log("print console log");
  } else {
    dropdown.style.display = 'none';
  }
});


// const selectButton = document.querySelector(".fa-bars");
// const dropdown = document.querySelector("ul");
// console.log(dropdown);
// // Add an event listener
// selectButton.addEventListener("click", function () {
//   if (dropdown.hidden === true) {
//     dropdown.hidden = false;
//     console.log("make invisible");
//     console.log(dropdown.hidden);
//   } else {
//     dropdown.hidden = true;
//     console.log("make visible");
//     console.log(dropdown.hidden);
//   }
// });