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

  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-38451-main.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Cantoments Accra",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    {
        templeName: "Freiberg Germany",
        location: "Freiberg Germany",
        dedicated: "1985, June, 29-30",
        area: 21500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/freiberg-germany-temple/freiberg-germany-temple-16459-main.jpg"
    },
    {
        templeName: "ST. Louis Missouri",
        location: "St.Louis, Missouri",
        dedicated: "1997, June, 1-5",
        area: 58794,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/_temp/050-St.-Louis-Missouri-Temple.jpg"
    },
    // Add more temple objects here...
  ];

  const templeContainer = document.getElementById("album");

  function displayTemples(filteredTemples) {
    templeContainer.innerHTML = "";

    filteredTemples.forEach((temple) => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";
        card.appendChild(img);

        const name = document.createElement("h2");
        name.textContent = temple.templeName;
        card.appendChild(name);

        const location = document.createElement("p");
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
        card.appendChild(location);

        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
        card.appendChild(dedicated);

        const area = document.createElement("p");
        area.innerHTML = `<strong>Total Area:</strong> ${temple.area} square feet`;
        card.appendChild(area);

        templeContainer.appendChild(card);




        
    });
  }

  function filteredTemples(option) {
    let filteredTemples = [];

    switch (option) {
        case "old":
            filteredTemples = temples.filter((temple) => {
                const year = new Date(temple.dedicated).getFullYear();
                return year < 1900;
            });
            break;

        case "new":
            filteredTemples = temples.filter((temple) => {
                const year = new Date(temple.dedicated).getFullYear();
                return year > 2000;
            });
            break;

        case "large":
            filteredTemples = temples.filter((temple) => temple.area > 90000);
            break;
        
        case "small":
            filteredTemples = temples.filter((temple) => temple.area < 10000);
            break;

        default:
            filteredTemples = temples;
    }

    displayTemples(filteredTemples);

  }

  const menuLinks = document.querySelectorAll("#menu-option a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const filter = event.target.getAttribute("data-filter").toLowerCase();
        filteredTemples(filter);
    });
  });

  displayTemples(temples);






