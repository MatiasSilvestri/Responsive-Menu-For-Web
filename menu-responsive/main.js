var menuToggle = document.getElementById("menu-toggle");
var menu = document.getElementById("menu");

menuToggle.addEventListener("click", function() {
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
});