



document.addEventListener('DOMContentLoaded', function(){
    let counterSubs = localStorage.getItem('subcriberCounter') || 0;
    counterSubs = parseInt(counterSubs, 10);
    counterSubs++;

    localStorage.setItem('subcriberCounter', counterSubs);
    document.getElementById('counterSubs').textContent = `Total Subscribers: ${counterSubs}`;
})