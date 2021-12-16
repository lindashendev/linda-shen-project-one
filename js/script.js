// Mobile dropdown functionality
// 1. Grab menu icon class 
// 2. When clicked, turn on display property
// 3. If dropdown is visible, turn off display property 

// Get icon and ul element from the DOM 
const selectButton = document.querySelector('.fa-bars');
const dropdown = document.querySelector('ul');
console.log(dropdown);

// Click event on menu icon
selectButton.addEventListener('click', function () {
  if (dropdown.style.display === 'none') {
    dropdown.style.display = 'flex';
  } else {
    dropdown.style.display = 'none';
  }
});

 // Blog page user comment functionality

const addComment = document.querySelector('.blog-comment-form');

// form submit event handler
addComment.addEventListener('submit', function(event) {
    // When form is submitted
    event.preventDefault();
    
    // Get user name from the input
    // Collect user values 
    const userName = document.querySelector('#user-name');
    const name = userName.value;

    // User comment
    const userComment = document.querySelector('#blog-comment');
    const comment = userComment.value;
  
    // Add the user name and comment to blog comments
    if (name && comment) {
      // Target comments section on the page
      const commentElement = document.querySelector('.blog-comments-section');

      // Create a new comment element
      const newPostElement = document.createElement('div');
      newPostElement.className = 'blog-user-comment';

      const blogComment = document.createElement('div');
      blogComment.className = 'blog-comment';
      console.log(blogComment);

      // Current date
      const commentDate = new Date();
      const dateString = commentDate.toDateString();

      // Add in text content
      const createComment = document.createElement('p');
      createComment.textContent = comment;
      createComment.className = 'user-comment';

      // Create userMetaData p element, use textContent to add on one line
      const userMetaData = document.createElement('p');
      userMetaData.textContent = `${dateString} by ${name}`;
      userMetaData.className = 'post-time'
      // Commentor image placeholder
      const userImageEl = document.createElement('div');
      userImageEl.className = 'profile-image';

      const image = document.createElement('img');
      image.src = './assets/comment-1.jpg';
  
      // Append all elements to newPostElement inside the new comment container
      commentElement.appendChild(newPostElement)
      newPostElement.appendChild(userImageEl);
      userImageEl.appendChild(image);
      newPostElement.appendChild(blogComment);
      blogComment.appendChild(userMetaData); 
      blogComment.appendChild(createComment);
      // resets form fields
      userName.value = '';
      userComment.value = '';
    }
})

