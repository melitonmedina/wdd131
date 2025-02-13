// updating the footer
// storing the date on a variable
let currentYear = new Date();
currentYear = currentYear.getFullYear();

// assigning or populating the current year content
document.querySelector('#year').textContent = `${currentYear}`;


// beginning of last modified content
let lastModified = document.lastModified;
document.querySelector('#lastModified').textContent = `${lastModified}`




// this code ensures that images are only loaded upon entering into view - this code was ai generated
// document.addEventListener("DOMContentLoaded", function() {
//     let lazyImages = [].slice.call(document.querySelectorAll("img.lazyload"));
  
//     if ("IntersectionObserver" in window) {
//       let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
//         entries.forEach(function(entry) {
//           if (entry.isIntersecting) {
//             let lazyImage = entry.target;
//             lazyImage.src = lazyImage.dataset.src;
//             lazyImage.classList.remove("lazyload");
//             lazyImageObserver.unobserve(lazyImage);
//           }
//         });
//       });
  
//       lazyImages.forEach(function(lazyImage) {
//         lazyImageObserver.observe(lazyImage);
//       });
//     } else {
//       // Fallback for browsers without IntersectionObserver support
//       lazyImages.forEach(function(lazyImage) {
//         lazyImage.src = lazyImage.dataset.src;
//         lazyImage.classList.remove("lazyload");
//       });
//     }
//   });
  
