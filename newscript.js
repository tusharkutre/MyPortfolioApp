// onscroll is the event handler which handles some events when some action is performed
window.onscroll = () => {
  // sticky header
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);

  const sidebar = document.querySelector(".sidebar");
  sidebar.style.height = "100vh";
};

const body = document.body;
// queryselector for selecting only the classes
const moon = document.querySelector(".moon");
const logo = document.querySelector(".logo");

// Get references to the select element and the body element
const selectElement = document.getElementById("themes");
const ul = document.querySelector("ul");
const bodyElement = document.body;

// Add an event listener to the select element
selectElement.addEventListener("change", function () {
  const selectedValue = selectElement.value;

  // Check the selected value and apply the corresponding theme
  if (selectedValue === "default") {
    // Remove any existing class and revert to default styles
    bodyElement.className = "";
  } else if (selectedValue === "dark") {
    // Apply the dark mode class
    bodyElement.className = "dark-mode";
    logo.classList.toggle("textwhite");
  } else if (selectedValue === "white") {
    // Apply the white mode class
    ul.classList.toggle("textBlack");
    logo.classList.toggle("textBlack");
    bodyElement.className = "white-mode";
  }
});

function mySidebar() {
  const menu = document.getElementById("menu");
  const sidebar = document.querySelector(".sidebar");

  sidebar.style.border = "2px solid white";
  menu.addEventListener("click", function () {
    menu.appendChild(sidebar);
  });
}

function toggleSidebar() {
  var sidebar = document.querySelector(".sidebar");

  if (sidebar.style.width === "320px") {
    sidebar.style.width = "0"; //closed
  } else {
    sidebar.style.width = "320px"; //open
  }

  const toggle = document.querySelector(".toggle-button");
  toggle.classList.toggle("active");
  toggle.classList.add("apply");
}

const icons = document.querySelectorAll(".icon");
icons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    icon.classList.toggle("open");
  });
});

function redirectToHireMe(event) {
  event.preventDefault();
  // Replace 'hire-me.html' with the actual URL you want to redirect to
  window.location.href = "https://github.com/tusharkutre";
}

function redirectToLetsTalk() {
  // Replace 'lets-talk.html' with the actual URL you want to redirect to
  window.location.href = "https://github.com/tusharkutre";
}

// Get the sidebar element
var sidebar = document.getElementById("sidebar");

// Get all anchor tags inside the sidebar
var anchorTags = sidebar.getElementsByTagName("a");

// Add click event listener to each anchor tag
for (var i = 0; i < anchorTags.length; i++) {
  anchorTags[i].addEventListener("click", function () {
    // Close the sidebar when an anchor tag is clicked
    sidebar.style.width = "0px";
  });
}

const linkedIn = document.querySelector(".likedin-img");

linkedIn.addEventListener("click",function(){
    alert("you are redirecting to linkedIn")
    playSound("sound.wav")
    window.location.href = "https://www.linkedin.com/in/tushar-kutre-578983233/";
})

const gitHub = document.querySelector(".git-img");

gitHub.addEventListener("click",function(){
    playSound("sound2.mp3")
    window.location.href = "https://github.com/tusharkutre";
})

function playSound(audioName){
  let audio = new Audio(audioName);
  audio.play();
}
