const nav = document.getElementById('nav') ;
const sections = document.querySelectorAll('.section') ;

window.addEventListener('scroll',() => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
        nav.classList.add('scrolled');
    }else{
        nav.classList.remove('scrolled')
    }
});

nav.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'A') {
        nav.classList.add('hovered');
    }
});

nav.addEventListener('mouseout', () => {
    nav.classList.remove('hovered');
});