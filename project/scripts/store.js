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
    const cartItems = document.getElementByI("cart-items");
    cartItems.innerHTML = ""; // Clear previous content

    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.price}`;
        cartItems.appendChild(li);
    });

}
function addToCart(item) {
    Cart.push(item);
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
      
    

