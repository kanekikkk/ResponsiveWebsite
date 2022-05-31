let toggle = document.querySelector(".nav-menu");
document.querySelector('.menu-button').addEventListener('click',function(){
    console.log('a');
    toggle.classList.toggle('nav-menu-visible');
});