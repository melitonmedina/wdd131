//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}</li>`
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

//activity 2
let arrletters = ['A', 'B', 'A'];

const arrgpa = (arr) => (
    arr.map(letter => (
      letter.toLowerCase() === 'a' ? 4 :
      letter.toLowerCase() === 'b' ? 3 :
      letter.toLowerCase() === 'c' ? 2 :
      0
    ))
  );
    

console.log(arrgpa(arrletters));

//activity 3, using reduce code from class example
const gpaPoints = arrgpa(arrletters);
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

// example 2
// this is the same thing as above, but with an arrow function
const pointsTotal1 = gpaPoints.reduce((total, item) => total + item);
const gpa1 = pointsTotal / gpaPoints.length;

// this could be further simplified as
const gpa2 = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;


//activity 4, using filter

const arrfruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const reducedFruits = arrfruits.filter((item) => item.length < 6);

// activity 5
