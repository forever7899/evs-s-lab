let slideArea = document.querySelector('.slide_area');
let slider = slideArea.children;

setInterval(()=>{
    slideArea.appendChild(slideArea.firstElementChild);
}, 5000);