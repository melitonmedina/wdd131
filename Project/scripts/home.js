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

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('home')) {

        document.getElementById('wind-chill').textContent = windChillFactor;

        document.getElementById('wind').textContent = `${wind} mph`;

        document.getElementById('conditions').textContent = conditions;

        document.getElementById('temp').textContent = temp + '°F';

    }
})



// Events and activities object


const upcoming = [
    {
        name:"Master Ecologist",
        description: "Become a Master Ecologist while using Duke Farms as a living laboratory and network with field experts and professionals.",
        date: "THU, FEB 20",
        time: "7:00 PM",
        imageUrl: "/Project/images/webp/nature-2943774_640.webp"

    },
    {
        name:"Identifying Birds of Prey",
        description: "BAn introduction to eagle-eyed birding! Our nest cam is back online for the season! ",
        date: "SAT, MAR 1",
        time: "9:30 AM",
        imageUrl: "/Project/images/webp/pompadour-3906740_640.webp"

    },
    {
        name:"Eagles at Duke Farms: A Restoration Story",
        description: "Join us for a special program that connects the past, present, and future of ecological restoration along the Raritan River.",
        date: "SAT, MAR 8",
        time: "10:00 AM",
        imageUrl: "/Project/images/webp/raptor-2008906_640.webp"

    },
    {
        name:"Looking for Life in the Winter",
        description: "Winter can seem like a time to put things on hold, for both the natural world and those of us who study and enjoy it",
        date: "SAT, MAR 8",
        time: "2:00 PM",
        imageUrl: "/Project/images/webp/winter-4742436_640.webp"
    },

    {
        name:"Orchids Under the Full Moon",
        description: "A bracing winter night’s walk, illuminated by March’s full moon, transports us to the Orchid Range, and from there: Panama? Nepal? Ghana?",
        date: "FRI, MAR 14",
        time: "2:00 PM",
        imageUrl: "/Project/images/webp/greenhouse-4262241_640.webp"
    },
]

const events = document.querySelector('#events');

//events ul population

function createEventList (name) {

    let eventName = document.createElement("li");

    eventName.textContent = name;

    events.appendChild(eventName);

}


const eventContainer =document.querySelector('#eventContainer');


function createEventCard(eventInfo) {

    // ----------------------------------------------
    // setting wrappers
    let card = document.createElement("section");

    let textContainer = document.createElement('div');
    textContainer.setAttribute('class', 'textContainer');

    let titleContainer = document.createElement('div');
    titleContainer.setAttribute('class', 'titleContainer');

    let imageContainer = document.createElement('div');
    imageContainer.setAttribute('class', 'imageContainer');

    let wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');

    // -----------------------------------------------------



    let name = document.createElement("h3");
    name.setAttribute('class','name')

    let description = document.createElement("p");
    description.setAttribute('class','descrip' )
    
    let date = document.createElement("p");
    date.setAttribute('class','date');

    let time = document.createElement("p");
    time.setAttribute('class','time');

    let img = document.createElement("img");
    img.setAttribute('class','image');

    name.textContent = eventInfo.name;
    description.innerHTML = `<span class="label">Description:</span> ${eventInfo.description}`;

    date.innerHTML = `<span class="label">Date:</span> ${eventInfo.date}`;

    time.innerHTML = `<span class="label">Time:</span> ${eventInfo.time}`;

    img.setAttribute("src", eventInfo.imageUrl);
    img.setAttribute("alt",`${eventInfo.name} Temple`);
    img.setAttribute("loading", "lazy");

    titleContainer.appendChild(name);
    textContainer.appendChild(description);
    textContainer.appendChild(date);
    textContainer.appendChild(time);
    imageContainer.appendChild(img);

    wrapper.appendChild(textContainer);
    wrapper.appendChild(imageContainer);

    card.appendChild(titleContainer);
    card.appendChild(wrapper);
    eventContainer.appendChild(card);
}

// let's make sure the page has loaded before creating the cards and  li items

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('events')) {

        upcoming.forEach(event => {
    
            createEventList(event.name);
            
        });

    }
     
    else if (document.getElementById('eventContainer')) {

        upcoming.forEach(theEvent =>createEventCard(theEvent));

    }

    
  });

