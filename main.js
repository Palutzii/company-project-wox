var trigger = document.querySelector(".nav-mobile-trigger");
var navMobile = document.querySelector(".nav-mobile");

if (trigger) {
  trigger.addEventListener("click", function (el) {
    if (trigger.classList.contains("is-clicked")) {
      trigger.classList.remove("is-clicked");
      navMobile.classList.remove("is-open");
    } else {
      trigger.classList.add("is-clicked");
      navMobile.classList.add("is-open");
    }
  });
}
