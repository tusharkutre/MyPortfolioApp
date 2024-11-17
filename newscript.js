const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 70;
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

const toggleDarkMode = () => {
  document.body.classList.toggle("dark");
};

let sidebarOpen = false;
const sidebar = document.querySelector(".sidebar");
const header = document.querySelector(".header");
const selectElement = document.getElementById("themes");
const ul = document.querySelector("ul");
const burger = document.querySelector(".icon");
const logo = document.querySelector(".logo");

window.onscroll = () => {
  header.classList.toggle("sticky", window.scrollY > 100);
  sidebar.classList.toggle("sidebar-open", sidebarOpen);
};

sidebar.addEventListener("click", (event) => {
  if (event.target.matches(".sidebar a")) {
    sidebarOpen = false;
    sidebar.classList.remove("open");
    const href = event.target.getAttribute("href");
    scrollToSection(href.substring(1));
  } else if (event.target.matches(".dark-mode-button")) {
    toggleDarkMode();
  }
});

sidebar.addEventListener("click", () => {
  sidebarOpen = !sidebarOpen;
  sidebar.classList.toggle("open", sidebarOpen);
});

selectElement.addEventListener("change", () => {
  const selectedValue = selectElement.value;
  document.body.className = selectedValue === "default" ? "" : selectedValue + "-mode";
  logo.classList.toggle("textwhite", selectedValue === "dark");
  ul.classList.toggle("textBlack", selectedValue === "white");
  burger.classList.toggle("textBlack", selectedValue === "white");
  logo.classList.toggle("textBlack", selectedValue === "white");
});

const toggleSidebar = () => {
  sidebar.style.width = sidebar.style.width === "320px" ? "0" : "320px";
  const toggleButton = document.querySelector(".toggle-button");
  toggleButton.classList.toggle("active");
  toggleButton.classList.add("apply");
};

const icons = document.querySelectorAll(".icon");
icons.forEach(icon => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("open");
  });
});

const redirectTo = (url) => {
  window.location.href = url;
};

document.querySelectorAll("#sidebar a").forEach(anchor => {
  anchor.addEventListener("click", () => {
    sidebar.style.width = "0px";
  });
});

const linkedIn = document.querySelector(".likedin-img");
const gitHub = document.querySelector(".git-img");
const insta = document.querySelector(".insta-img");

linkedIn.addEventListener("click", () => {
  playSound("sound.wav");
  redirectTo("https://www.linkedin.com/in/tushar-kutre-578983233/");
});

gitHub.addEventListener("click", () => {
  playSound("sound2.mp3");
  redirectTo("https://github.com/tusharkutre");
});

insta.addEventListener("click", () => {
  playSound("sound2.mp3");
  redirectTo("https://www.instagram.com/mr.tushar727/");
});

function playSound(audioName) {
  const audio = new Audio(audioName);
  audio.play();
}