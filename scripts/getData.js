// storing the date on a variable

let currentYear = new Date();
currentYear = currentYear.getFullYear();

// assigning or populating the current year content
document.querySelector('#year').textContent = `${currentYear}`;


// beginning of last modified content

let lastModified = document.lastModified;

document.querySelector('#lastModified').textContent = `${lastModified}`

