// Current Year and Last Modified Date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Calculate Wind Chill
const temperature = 10; // Static value in °C
const windSpeed = 5; // Static value in km/h

function calculateWindChill(temp, speed) {
    return Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16));
}

if (temperature <= 10 && windSpeed > 4.8) {
    document.getElementById("windchill").textContent = calculateWindChill(temperature, windSpeed) + " °C";
} else {
    document.getElementById("windchill").textContent = "N/A";
}
