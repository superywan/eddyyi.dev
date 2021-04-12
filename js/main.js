// Dark Mode Toggle
const toggle = document.querySelector(".toggle");
const theme = document.querySelector("#theme-link");
const themeEmoji = document.querySelector(".toggle__img");

// Set theme by user's local time
window.addEventListener("load", (e) => {
  const currentDate = new Date();
  const onlyTime = currentDate.getHours();
  if (onlyTime > 8 && onlyTime < 18) {
    theme.href = "./styles/light-theme.css";
    themeEmoji.src = "./img/emojis/full-moon-face_1f31d.png";
  } else {
    theme.href = "./styles/dark-theme.css";
    themeEmoji.src = "./img/emojis/new-moon-face_1f31a.png";
  }
});

toggle.addEventListener("click", (e) => {
  if (theme.getAttribute("href") === "./styles/light-theme.css") {
    theme.href = "./styles/dark-theme.css";
    themeEmoji.src = "./img/emojis/new-moon-face_1f31a.png";
  } else {
    theme.href = "./styles/light-theme.css";
    themeEmoji.src = "./img/emojis/full-moon-face_1f31d.png";
  }
});

// Fade-In Animation Trigger
const faders = document.querySelectorAll(".fade-in");
const sectionOneOptions = {
  rootMargin: "0px 0px -350px 0px",
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("appear");
    appearOnScroll.unobserve(entry.target);
  });
}, sectionOneOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

// Hide Scroll to Top Button when it's on top
const topBtn = document.querySelector(".topScrollButton");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    topBtn.classList.remove("hide");
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
    topBtn.classList.add("hide");
  }
});

// Scroll to the Top when Top Button is clicked
topBtn.addEventListener("click", (e) => {
  window.scrollTo(0, 0);
});
