// document.querySelectorAll('.btn').forEach(btn=>{
//     btn.addEventListener('mouseover',()=>{
//     btn.style.transform='scale(1.05)';
// });
//     btn.addEventListener('mouseout',()=>{
//     btn.style.transform='scale(1)';
// });
// });

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active'); 
    });
});
