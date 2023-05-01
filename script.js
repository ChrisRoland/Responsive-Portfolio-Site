var handle = document.querySelector(".hand");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

handle.addEventListener("click", function () {
    this.classList.toggle("click");
    navlist.classList.toggle("open");
})