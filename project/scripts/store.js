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

        goodsContainer.appendChild(card);
        
        
    });
    


    
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
    const quantity = parseInt(quantityInput.value);
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
      
    

