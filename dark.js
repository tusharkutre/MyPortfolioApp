const theme = document.querySelector("#themeSwitcher")

if (window.innerWidth <= 425){
  theme.addEventListener("click",function(){
    body.classList.toggle("active")
  })
}