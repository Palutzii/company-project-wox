// Imports Swiper
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

// Menu trigger
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

console.log("test");

var swiper = document.querySelector(".swiper");
if (swiper) {
  // init Swiper
  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlider: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
