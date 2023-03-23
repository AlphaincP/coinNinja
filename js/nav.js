const menu = document.getElementById('menu');
const nav = document.getElementById('navigation');
const closeButton = document.getElementById('close');
const right = document.getElementById('right');
const sub = document.getElementById('sub');

menu.addEventListener('click',(e) =>{
    
    nav.style.display = 'block';
    menu.style.display = 'none';
    closeButton.style.display = 'block';    
})
closeButton.addEventListener('click',(e) =>{
    nav.style.display = 'none';
    menu.style.display = 'block';
    closeButton.style.display = 'none';
})
right.addEventListener('click',() =>{
    sub.style.display = 'block';
})
