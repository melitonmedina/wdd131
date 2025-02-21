// nav bar section
const hamButton = document.querySelector('#hamButton');
const navegation = document.querySelector('.menu');
const title = document.querySelector('.title');

hamButton.addEventListener('click', function () {
    navegation.classList.toggle('open');
    title.classList.toggle('hide');
    hamButton.classList.toggle('close');

})


// the following code will make sure the close the menu based on the resizing of the screen in case the user forgets to close it

window.addEventListener('resize', () => {
    if (window.innerWidth > 500) {
        navegation.classList.remove('open');
        title.classList.remove('hide');
        hamButton.classList.remove('close');
    }
})


// storing the date on a variable
let currentYear = new Date();
currentYear = currentYear.getFullYear();

// assigning or populating the current year content
document.querySelector('#year').textContent = `${currentYear}`;

// beginning of last modified content
let lastModified = document.lastModified;
document.querySelector('#lastModified').textContent = `${lastModified}`


// weather section
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




// Events and activities object

const upcomming = [
    {
        name:"Master Ecologist",
        description: "Become a Master Ecologist while using Duke Farms as a living laboratory and network with field experts and professionals.",
        date: "THU, FEB 20",
        time: "7:00 PM"

    },
    {
        name:"Identifying Birds of Prey",
        description: "BAn introduction to eagle-eyed birding! Our nest cam is back online for the season! ",
        date: "SAT, MAR 1",
        time: "9:30 AM"

    },
    {
        name:"Eagles at Duke Farms: A Restoration Story",
        description: "Join us for a special program that connects the past, present, and future of ecological restoration along the Raritan River.",
        date: "SAT, MAR 8",
        time: "10:00 AM"

    },
    {
        name:"Looking for Life in the Winter",
        description: "Winter can seem like a time to put things on hold, for both the natural world and those of us who study and enjoy it",
        date: "SAT, MAR 8",
        time: "2:00 PM"
    },

    {
        name:"Orchids Under the Full Moon",
        description: "A bracing winter night’s walk, illuminated by March’s full moon, transports us to the Orchid Range, and from there: Panama? Nepal? Ghana?",
        date: "FRI, MAR 14",
        time: "2:00 PM"
    },
]

const events = document.querySelector('#events');

//events ul population

function createEventList (name) {

    let eventName = document.createElement("li");

    eventName.textContent = name;

    events.appendChild(eventName);

}

upcomming.forEach(event => {
    createEventList(event.name);
})