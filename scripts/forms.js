// storing the date on a variable
let currentYear = new Date();
currentYear = currentYear.getFullYear();

// assigning or populating the current year content
document.querySelector('#year').textContent = `${currentYear}`;


// beginning of last modified content
let lastModified = document.lastModified;
document.querySelector('#lastModified').textContent = `${lastModified}`





const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

//capitalizing the first letter of each name to make
let cleanNameArr = {};
let cleanName = "";

products.forEach(product => {
    cleanNameArr = product.name.split(' ').map(splitWord => splitWord.charAt(0).toUpperCase() + splitWord.slice(1).toLowerCase());

    cleanName =cleanNameArr.join(' ');
    // console.log(`${cleanName}`);
    createNameOption(cleanName, product.id);
});



const productSection = document.querySelector('#productSelect');

function createNameOption(upperCaseName, productId) {

    let name = document.createElement('option');
    name.setAttribute("value", productId);
    name.textContent = `${upperCaseName}`;
    productSelect.appendChild(name);

  }


