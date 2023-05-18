// window.addEventListener("load", function () {
//   var preloader = document.getElementById("preload");
//   preloader.style.display = "none";
// });

// Get all SVG containers
const loader = document.querySelector(".loader");
const svgItems = Array.from(loader.querySelectorAll("div[id]"));

let currentIndex = 0;
setInterval(() => {
  const currentSVG = svgItems[currentIndex];
  currentSVG.style.display = "none";
  currentIndex = (currentIndex + 1) % svgItems.length;
  const nextSVG = svgItems[currentIndex];
  nextSVG.style.display = "block";
}, 1000);
