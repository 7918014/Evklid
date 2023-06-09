// const swiper = new Swiper('.swiper-container', {
//   slidesPerView: 1,
//   loop: true,

//   // пагинация
//   pagination: {
//   el: '.swiper-pagination',
//   },

//   // навигация
//   navigation: {
//   nextEl: '.swiper-button-next',
//   prevEl: '.swiper-button-prev',
//   clickable: true
//   },
//   });

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  // slidesPerGroup: ,
  // spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

let tabsBtn = document.querySelectorAll(".tabs-nav__btn");
let tabsItem = document.querySelectorAll(".tabs-item");

tabsBtn.forEach(function (element) {
  element.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove("tabs-nav__btn--active");
    });
    e.currentTarget.classList.add("tabs-nav__btn--active");

    tabsItem.forEach(function (element) {
      element.classList.remove("tabs-item--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs-item--active");
  });
});

new Accordion(".accordion-list", {
  elementClass: "accordion",
  triggerClass: "accordion__control",
  panelClass: "accordion__content",
  activeClass: "accordion--active",
});

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menulinks = menu.querySelectorAll(".nav__link");

burger.addEventListener(
  "click",

  function () {
    burger.classList.toggle("burger--active");

    menu.classList.toggle("header__nav--active");

    document.body.classList.toggle("stop-scroll");
  }
);

menulinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");

    menu.classList.remove("header__nav--active");

    document.body.classList.remove("stop-scroll");
  });
});

document.addEventListener("DOMContentLoaded", (e) => {
  document.getElementById("open-search-form").addEventListener("click", (e) => {
    document.getElementById("search-form").classList.add("search-form_show");
  });

  document.getElementById("search-form-close").addEventListener("click", (e) => {

    document.getElementById("search-form").classList.remove("search-form_show");
  });

  document.getElementById("search-form").addEventListener("submit", (e) => {
    e.preventDefault()
  })

});
