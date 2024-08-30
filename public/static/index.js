const skillItems = document.querySelector('.skill-items-hide')
const skillButton = document.querySelector('.skill-button')
const cross = document.querySelector('.cross')
skillButton.addEventListener("click",()=>{
    skillItems.classList.toggle('skill-items-hide')
})
cross.addEventListener("click",()=>{
    skillItems.classList.toggle('skill-items-hide')
})