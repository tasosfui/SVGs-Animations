const hamburger = document.querySelector(".btn__hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("btn__hamburger--closed");
});
