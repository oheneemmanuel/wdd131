// Function to dynamically update the copyright year and last modified date
window.addEventListener('DOMContentLoaded', () => {
  
    // Get the current year using the Date object
    const currentYear = new Date().getFullYear();
    
    // Update the copyright year in the footer's first paragraph
    document.getElementById("currentyear").textContent = currentYear;
  
    // Get the last modified date of the document
    const lastModified = document.lastModified;
  
    // Update the second paragraph with the last modified date
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;

   

   

   

  });

   
  





const displayMenu = document.getElementById("menu-option");
const menuToggle = document.getElementById("menu");
    menuToggle.addEventListener("click", function() {
        displayMenu.classList.toggle("open");
        menuToggle.classList.toggle("open");
    });
   
  


const goods = [
    {
        name: "harmer",
        price: "GHC 25",
        imageUrl: "images/harmmer.jpg"
            
    },
    {
        name: "Cement",
        price: "GHC 120",
        imageUrl: "images/cement.jpg"
            
    },
    {
        name: "Shovel",
        price: "GHC 60",
        imageUrl: "images/shovel.jpg"

    },
    {
        name: "headpan",
        price: "GHC 30",
        imageUrl: "images/headpan.jpg"

    },
    {
        name: "China Door",
        price: "GHC 2500",
        imageUrl: "images/chinadoor.jpg"
    },
    {
        name: "mesh",
        price: "GHC 85",
        imageUrl: "images/mesh.jpg"
    },
    {
        name: "Carpet",
        price: "GHC 250",
        imageUrl: "images/carpet.jpg"
    },
    {
        name: "Wheelbarrow",
        price: "GHC 160",
        imageUrl: "images/whell.jpg"
    },
    {
        name: "Tiles",
        price: "GHC 200",
        imageUrl: "images/tiles.jpg"
    },
    {
        name: "WC",
        price: "GHC 500",
        imageUrl: "images/toi.jpg"
    },
   
   
    {
        name: "Hand Saw",
        price: "GHC 100",
        imageUrl: "images/saw.jpg"
    },
    {
        name: "Paint Brush",
        price: "GHC 20",
        imageUrl: "images/paintbrush.jpg"
    },
    {
        name: "Paint Roller",
        price: "GHC 30",
        imageUrl: "images/rollerbrush.jpg"
    },
    {
        name: "Paint Tray",
        price: "GHC 15",
        imageUrl: "images/tray.jpg"
    },
    {
        name: "Gloves",
        price: "GHC 10",
        imageUrl: "images/gloves.jpg"
    },
    {
        name: "Safety Goggles",
        price: "GHC 25",
        imageUrl: "images/goggles.jpg"
    },
    {
        name: "Plywood",
        price: "GHC 270",
        imageUrl: "images/plywood.jpg"
    },
    {
        name: "Nails",
        price: "GHC 5",
        imageUrl: "images/nail.jpg"
    },
    {
        name: "Screws",
        price: "GHC 10",
        imageUrl: "images/screw.jpg"
    },
    {
        name: "Sandpaper",
        price: "GHC 8",
        imageUrl: "images/sanpaper.jpg"
    },
    {
        name: "Paint Thinner",
        price: "GHC 40",
        imageUrl: "images/thinner.jpg"
    },
    {
        name: "Caulk Gun",
        price: "GHC 35",
        imageUrl: "images/caulk.jpg"
    },
    {
        name: "Ladder",
        price: "GHC 300",
        imageUrl: "images/ladder.jpg"
    },
    {
        name: "Helmet",
        price: "GHC 50",
        imageUrl: "images/hel.jpg"
    }

    
];
const paints = [
    {
        color: "Red",
        price: 160,
        imageUrl: "images/paint.jpeg"
            
    },
    {
        color: "Blue",
        price: 160,
        imageUrl: "images/paint.jpeg"
            
    },
    {
        color: "Green",
        price: 160,
        imageUrl: "images/paint.jpeg"
            
    },
    {
        color: "Yellow",
        price: 160,
        imageUrl: "images/paint.jpeg"
            
    },
    {
        color: "Black",
        price: 160,
        imageUrl: "images/paint.jpeg"
            
    },
    {
        color: "White",
        price: 160,
        imageUrl: "images/paint.jpeg"
            
    },
    {
        color: "Pink",
        price: 160,
        imageUrl: "images/paint.jpeg"
            
    },
    {
        color: "Purple",
        price: 160,
        imageUrl: "images/paint.jpeg"
            
    },
    {
        color: "Orange",
        price: 160,
        imageUrl: "images/paint.jpeg"
            
    },
    {
        color: "Brown",
        price: 160,
        imageUrl: "images/paint.jpeg"
            
    },
    {
        color: "Gray",
        price: 160,
        imageUrl: "images/paint.jpeg"
            
    },
    {
        color: "Beige",
        price: 160,
        imageUrl: "images/paint.jpeg"
            
    }
]
const cart = [];
const goodsContainer = document.getElementById("materials");
const colorDropdown = document.getElementById("color-select");
const quantityInput = document.getElementById("quantity");
const calculateButton = document.getElementById("calculate-btn");
const paintSpecifications = document.getElementById("paint-specifications");
function displayGoods(items) {
    goodsContainer.innerHTML = ""; // Clear previous content
    items.forEach((good) => {
        const card = document.createElement("div");
    card.classList.add("good-card");

        const img = document.createElement("img");
        img.src = good.imageUrl;
        img.alt = good.name;
        img.loading = "lazy";
        card.appendChild(img);

        const name = document.createElement("h2");
        name.textContent = good.name;
        card.appendChild(name);

        const price = document.createElement("p");
        price.textContent = good.price;
        card.appendChild(price);

        const button = document.createElement("button");
        button.textContent = "Buy Me";
        button.classList.add("buy-button");
        button.addEventListener("click", () => addToCart(good));
        card.appendChild(button);
        
        goodsContainer.appendChild(card);
    });


        
        
    
    


    
}
function updateCartDisplay() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = ""; // Clear previous content

    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price}`;
        cartItems.appendChild(li);
    });

}
function addToCart(item) {
    cart.push(item);
    alert(`${item.name} has been added to your cart!`);
    updateCartDisplay();
}
displayGoods(goods);
function populateDropDown() {
    paints.forEach((paint, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = paint.color;
        colorDropdown.appendChild(option);
    });

}
function displaySpecificationsAndTotal() {
    const selectedIndex = colorDropdown.value;
    const selectedPaint = paints[selectedIndex];
    const quantity = parseInt(quantityInput.value) || 1;
    if (selectedPaint) {
        const totalCost = selectedPaint.price * quantity;
        paintSpecifications.innerHTML = `
            <div>
                <img src="${selectedPaint.imageUrl}" alt="${selectedPaint.color} paint" loading="lazy">
                <h2>${selectedPaint.color} Paint</h2>
                <p>Price: ${selectedPaint.price}</p>
                <p>Quantity: ${quantity}</p>
                <p>Total Cost: GHC ${totalCost}</p>
            </div>
        `;
        

        
        
    } else {
        paintSpecifications.innerHTML = ""; // Clear specifications if no paint is selected
    }
}
colorDropdown.addEventListener("change", displaySpecificationsAndTotal);
calculateButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission
    displaySpecificationsAndTotal();
});
populateDropDown();

    

