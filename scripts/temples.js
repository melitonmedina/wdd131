const hamButton = document.querySelector('#hamButton');
const navegation = document.querySelector('.menu');
const title = document.querySelector('.title');

hamButton.addEventListener('click',function (){
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