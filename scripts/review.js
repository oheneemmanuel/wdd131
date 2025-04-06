// Function to dynamically update the copyright year and last modified date
window.addEventListener('DOMContentLoaded', (event) => {
  
    // Get the current year using the Date object
    const currentYear = new Date().getFullYear();
    
    // Update the copyright year in the footer's first paragraph
    document.getElementById("currentyear").textContent = currentYear;
  
    // Get the last modified date of the document
    const lastModified = document.lastModified;
  
    // Update the second paragraph with the last modified date
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;

    const displayMenu = document.getElementById("menu-option");

    const menuToggle = document.getElementById("menu");
    menuToggle.addEventListener("click", function() {
        displayMenu.classList.toggle("open");
        menuToggle.classList.toggle("open");
    });



  });

  let reviewCount = localStorage.getItem("reviewCount");

  if (reviewCount === null) {
    reviewCount = 0;

  } else {
    reviewCount = parseInt(reviewCount);
  }

  reviewCount++;

  localStorage.setItem("reviewCount", reviewCount);
  const reviewMessage = document.createElement("p");
  reviewMessage.textContent = `You have made ${reviewCount} review(s). `;
  document.body.appendChild(reviewMessage);


