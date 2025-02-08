let temp = 45; // degrees °F
let wind = 12; // mph
let conditions = "Partly Sunny";
let windChillFactor = "";

const windChill = (temperature, windSpeed) => {
    const calcChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    return calcChill.toFixed(2);
}

if (temp <= 50 && wind > 3) {
    windChillFactor = windChill(temp, wind) + "°F";
}

else {
    windChillFactor = "N/A";
}
console.log(windChillFactor);

// begin assigning the corresponding variables

document.getElementById('wind-chill').textContent = windChillFactor;

document.getElementById('wind').textContent = `${wind} mph`

document.getElementById('conditions').textContent = conditions;

document.getElementById('temp').textContent = temp + '°F';


// updating the footer
// storing the date on a variable
let currentYear = new Date();
currentYear = currentYear.getFullYear();

// assigning or populating the current year content
document.querySelector('#year').textContent = `${currentYear}`;


// beginning of last modified content
let lastModified = document.lastModified;
document.querySelector('#lastModified').textContent = `${lastModified}`