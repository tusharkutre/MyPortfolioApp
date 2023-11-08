// onscroll is the event handler which handles some events when some action is performed
window.onscroll = () =>{
    // sticky header
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

    const sidebar = document.querySelector('.sidebar');
    sidebar.style.height = "100vh"

}

const body = document.body;
// queryselector for selecting only the classes
const moon = document.querySelector('.moon');
const logo = document.querySelector('.logo');



// Get references to the select element and the body element
const selectElement = document.getElementById('themes');
const ul = document.querySelector('ul');
const bodyElement = document.body;

// Add an event listener to the select element
selectElement.addEventListener('change', function () {
    const selectedValue = selectElement.value;

    // Check the selected value and apply the corresponding theme
    if (selectedValue === 'default') {
        // Remove any existing class and revert to default styles
        bodyElement.className = '';
    } else if (selectedValue === 'dark') {
        // Apply the dark mode class
        bodyElement.className = 'dark-mode';
        logo.classList.toggle('textwhite')

    } else if (selectedValue === 'white') {
        // Apply the white mode class
        ul.classList.toggle('textBlack')
        logo.classList.toggle('textBlack')
        bodyElement.className = 'white-mode';
    }
});

function mySidebar(){
    const menu = document.getElementById("menu");
    const sidebar = document.querySelector(".sidebar");

    menu.addEventListener("click",function(){
        menu.appendChild(sidebar)
    })
    }

function toggleSidebar() {
    var sidebar = document.querySelector(".sidebar");
   
        if (sidebar.style.width === "320px") {
            sidebar.style.width = "0";//closed
            
        } else {
            sidebar.style.width = "320px";//open
        }
     
    const toggle = document.querySelector('.toggle-button')
    toggle.classList.toggle('active')
    toggle.classList.add('apply')

    }
    
    const icons = document.querySelectorAll('.icon');
    icons.forEach (icon => {  
      icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
      });
    });
    
// const menuToggle = document.getElementById('menuToggle');
// const menu = document.getElementById('menu');

// menuToggle.addEventListener('click', () => {
//     menu.classList.toggle('active');
// });

// window.addEventListener('resize', () => {
//     if (window.innerWidth > 768) {
//         menu.classList.remove('active');
//     }
// });
