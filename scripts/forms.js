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
  });
  

  const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];


  const selectElement = document.getElementById("product-select");

  products.forEach(product => {

    const option = document.createElement("option");
    option.value = product.id; // Use the product ID as the value
    option.textContent = `${product.name} (Rating: ${product.averagerating})`; // Display name and rating
    selectElement.appendChild(option); // Append the option to the <select> element
});

// Get the current review count from localStorage
let reviewCount = localStorage.getItem('reviewCount');


// Check if reviewCount exists, else initialize it
if (reviewCount === null) {
    
    reviewCount = 0; // Initialize to 0 if no reviews have been made
} else {
    reviewCount = parseInt(reviewCount); // Convert to number
}

// Increment the review count
reviewCount++;

// Update the review count in localStorage
localStorage.setItem('reviewCount', reviewCount);

// Display the review count on the page
document.getElementById('review-counter').textContent = 
    `You have submitted ${reviewCount} review(s).`;
