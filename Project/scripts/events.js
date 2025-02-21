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
    }
]



const eventContainer =document.querySelector('#eventContainer');



function createEventCard(eventInfo) {

    let card = document.createElement("section");
    let name = document.createElement("h3");
    let description = document.createElement("p");
    
    let date = document.createElement("p");
    let time = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = eventInfo.name;
    description.innerHTML = `<span class="label">Description:</span> ${eventInfo.description}`;

    date.innerHTML = `<span class="label">Date:</span> ${eventInfo.date}`;

    time.innerHTML = `<span class="label">Time:</span> ${eventInfo.time}`;

    img.setAttribute("src", eventInfo.imageUrl);
    img.setAttribute("alt",`${eventInfo.name} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(description);
    card.appendChild(date);
    card.appendChild(time);
    card.appendChild(img);
    eventContainer.appendChild(card);
}


upcoming.forEach(theEvent =>createEventCard(theEvent));