// variables to hold references to the input, button, & list
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


// code to store the fav Book Of Mormon chapters
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });




//creating an event listener for the submit button
button.addEventListener('click', function(){
    if (input.value.trim() !==''){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList(); // update the localStaorage with the new array
        input.value = '';
        input.focus(); // set the focus back to the input
    }
}
)




function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function(){

        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();

    })
}

function setChapterList(){
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
} 

//let's handle the delete button accessing the list

// list.addEventListener('click', function(event){
//     if (event.target.classList.contains('deleteButton')) {
//         event.target.parentNode.remove();
//         input.focus();
//         input.value = '';
//     }
// })


