$(document).ready(() => {
  $(".navbar-toggler").click(() => {
    $(".navbar-collapsed").toggleClass("navbar-collapsed-show");
    $(".navbar-toggler").toggleClass("middle-bar-animate top-bar-animate");
    $(".navbar-toggler-bar").toggleClass("bottom-bar-animate");
  });
});
