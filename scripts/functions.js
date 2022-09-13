window.onload = function () {
  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });
};

// Faq

document.getElementById("question-1").addEventListener("click", () => {
  document.getElementById("answer-1").classList.toggle("answer-off");
  document.getElementById("downarrow-1").classList.toggle("faq-icon-clicked");
  document.getElementById("question-1").classList.toggle("faq-background-none");
  document.getElementById("title-1").classList.toggle("Text_Light");
});

document.getElementById("question-2").addEventListener("click", () => {
  document.getElementById("answer-2").classList.toggle("answer-on");
  document.getElementById("downarrow-2").classList.toggle("faq-icon-clicked");
  document
    .getElementById("question-2")
    .classList.toggle("faq-background-white");
  document.getElementById("title-2").classList.toggle("Text_Light");
});

document.getElementById("question-3").addEventListener("click", () => {
  document.getElementById("answer-3").classList.toggle("answer-on");
  document.getElementById("downarrow-3").classList.toggle("faq-icon-clicked");
  document
    .getElementById("question-3")
    .classList.toggle("faq-background-white");
  document.getElementById("title-3").classList.toggle("Text_Light");
});

document.getElementById("question-4").addEventListener("click", () => {
  document.getElementById("answer-4").classList.toggle("answer-on");
  document.getElementById("downarrow-4").classList.toggle("faq-icon-clicked");
  document
    .getElementById("question-4")
    .classList.toggle("faq-background-white");
  document.getElementById("title-4").classList.toggle("Text_Light");
});
