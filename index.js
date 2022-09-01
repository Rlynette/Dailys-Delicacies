document.addEventListener("DOMContentLoaded", onLoad);
const poster = document.getElementById("poster");
const title = document.getElementById("title");
const foodInfo = document.getElementById("food-info");
const btn = document.getElementById("make-order");
const food = document.getElementById("food");
// let film;

fetch("https://github.com/public-apis/public-apis#food--drink")
.then((response) => response.json())
.then((data) => {
  foodList(data);
});