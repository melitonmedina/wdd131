// review counter increment
document.addEventListener('DOMContentLoaded', function(){
    let counter = localStorage.getItem('loadedCounter') || 0;
    counter = parseInt(counter, 10);
    counter++;

    localStorage.setItem('loadedCounter', counter);
    document.getElementById('counter').textContent = `Total reviews: ${counter}`;
})