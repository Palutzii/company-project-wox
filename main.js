var trigger = document.querySelector(".nav-mobile-trigger");

if (trigger) {
  trigger.addEventListener("click", function (el) {
    if (trigger.classList.contains("is-clicked")) {
      trigger.classList.remove("is-clicked");
    } else {
      trigger.classList.add("is-clicked");
    }
  });
}
