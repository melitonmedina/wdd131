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


//beginning of dynamically generated html
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Nauvoo Illinois",
        location: "Nauvoo Illinois, United States",
        dedicated: "2002, June, 27-30",
        area: 54000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nauvoo-illinois/400x250/nauvoo-temple-768156-wallpaper.jpg"

    },
    {
        templeName: "Gilbert Arizona",
        location: "Gilbert Arizona, United States",
        dedicated: "2014, March, 2",
        area: 85326,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/gilbert-arizona/400x250/gilbert-arizona-temple-evening-1172169-wallpaper.jpg"
    },
    {
        templeName: "Philadelphia Pennsylvania",
        location: "Philadephia Pennsylvania, United States",
        dedicated: "2016, September, 18",
        area: 61466,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/philadelphia-pennsylvania/400x400/philadelphia-pennsylvania-temple-exterior-1775820-wallpaper.jpg"
    }
];

// function to apply the correct filter
function chooseFilter (idFilter) {
    if(idFilter ==='old') {

    }
}

function createTempleCard() {
    temples.forEach(temple => {

        
    
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;

    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt",`${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector('.fig-container').appendChild(card);
});
}

createTempleCard();