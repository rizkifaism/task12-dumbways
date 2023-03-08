// Back to top
window.onscroll = function () {
  const toTop = document.querySelector(".back-to-top");

  if (window.pageYOffset > 10) {
    toTop.style.visibility = "visible";
  } else {
    toTop.style.visibility = "hidden";
  }
};
