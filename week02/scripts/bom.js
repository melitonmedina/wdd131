// variables to hold references to the input, button, & list
const input = document.querySelector(`#favchap`);
const button = document.querySelector(`button`);
const list = document.querySelector(`#list`);

//creating an event listener for the submit button
button.addEventListener('click', function(){
    if (input.value.trim() !==''){
        console.log(`You forgot to enter your scripture`);
        // the li elements
        const li= document.createElement('li');
        li.textContent = input.value;

        //the delete button
        const deleteButton = document.createElement(`button`);        
        deleteButton.textContent = `❌`;    
        deleteButton.className = 'deleteButton';
        deleteButton.style.fontWeight = 100;
        //appending the list
        li.append(deleteButton);
        list.append(li);
        //list.appendChild(li);

    }
    else (input.focus());

}
)

//let's handle the delete button accessing the list

list.addEventListener('click', function(event){
    if (event.target.classList.contains('deleteButton')) {
        event.target.parentNode.remove();
        input.focus();
        input.value = '';
    }
})