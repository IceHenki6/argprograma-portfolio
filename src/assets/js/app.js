const navbar = document.querySelector('#navbar');
const navbarOnScroll = document.querySelector('#navbar-on-scroll');

let hidden = true;

document.addEventListener('scroll', ()=>{
    if(window.scrollY > window.innerHeight && hidden){
        navbarOnScroll.classList.remove('hidden');
        hidden = false;
    }else if(!hidden && window.scrollY < window.innerHeight){
        navbarOnScroll.classList.add('hidden');
        hidden = true;
    }
})